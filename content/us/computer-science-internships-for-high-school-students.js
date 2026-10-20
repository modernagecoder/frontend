'use strict';
// Computer science internships for high school students (ag- topic door; US cluster Phase 2, row 29).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md. Sources, read raw on 17 October 2026 (copies in
// keyword-research-2026-09/us/src/computer-science-internships-for-high-school-students/):
//  - NASA internship programs (intern.nasa.gov, same page as nasa.gov/learning-resources/internship-programs/): two
//    programs, "Office of STEM Engagement (OSTEM) Internships and Pathways Internships"; OSTEM "provides, annually, more
//    than 2,000 students"; "The majority of interns receive a paid stipend award, which is based on academic level and
//    session duration."; comparison table: OSTEM summer "10 weeks", fall and spring "15 weeks", Pathways "Minimum
//    12-week"; citizenship "U.S. Citizen" for both; OSTEM "Must be 18 or older by the published start date of session",
//    Pathways "At least 16 years old at the time of appointment"; GPA "3.0 on a 4.0 scale" / "2.9 on a 4.0 scale";
//    "High school seniors (Grade 12) are eligible to apply for the summer session immediately following high school
//    graduation."; Pathways "Be able to work at least 480 hours before completing degree/certificate requirements";
//    "Summer 2027 Application Deadline: March 1, 2027 (11:59 p.m. ET)", "Fall 2027 Application Deadline: May 24, 2027";
//    "Letters of recommendation are not part of the NASA Office of STEM Engagement Internships application."
//  - NIST Summer High School Intern Program (nist.gov/careers/student-opportunities/summer-high-school-intern-program):
//    "SHIP is a seven-week, unpaid educational internship."; mid-June to early August; "U.S. citizen", "high school
//    junior or senior at time of application", "minimum unweighted GPA of 3.0 on a 4.0 scale", "permanent residence
//    within a 50-mile radius of their host campus (NIST Boulder or NIST Gaithersburg)"; own housing and transport;
//    "competitive volunteer program"; 2027 vacancy "expected to open USAjobs mid-October 2026", "applications due at the
//    end of January 2027"; the How to Apply text says applications "generally open on November 1 and close in last week
//    of January"; 2026 poster session lists labs incl. ITL.
//  - Google Summer of Code FAQ (developers.google.com/open-source/gsoc/faq): "contributors must be at least 18 years
//    old"; "flexible timeframe of 8-22 weeks" (printed as 8 to 22); "GSoC is not a recruitment program"; participants
//    "are independent developers receiving a stipend, not Google employees or interns".
//  - LinkedIn User Agreement (linkedin.com/legal/user-agreement): "Minimum Age" means 16 years old.
//  - GitHub Docs, Finding ways to contribute to open source on GitHub: "good first issue or help wanted labels";
//    github.com/topics/<topic>; check the repository is actively maintained; ways to contribute (issue tracker, testing a
//    pull request, installing and testing, documentation); "Documentation improvements are almost always welcome";
//    open an issue before significant work.
// Not used: dol.gov youth employment pages and training.nih.gov returned 403; afrlscholars.usra.edu 403;
// seap.asee.org and aeop.org did not connect; the NSA high school URL tried was a 404.
// Our own material, labelled on the page: the age-gate reading, the October to March application calendar, the
// twelve-week readiness plan, the one-page resume layout, the git commands sequence as a first contribution workflow,
// and the arithmetic 480 / 40 = 12 weeks of full-time work (matching Pathways' own minimum of 12 weeks).
// Lesson family: evidence of work (commits, pull requests and written explanations).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const FIRST_PR = `# A first documentation fix on an open source project (our workflow)
git clone https://github.com/<owner>/<project>.git
cd <project>
git checkout -b fix-typo-in-readme
# edit README.md in your editor, then:
git status
git add README.md
git commit -m "Fix two typos in the install steps"
git push origin fix-typo-in-readme
# GitHub then offers a link to open a pull request from your branch`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'CAREERS', blurb: 'Computer science internships for high school students: which programs take under-18s, the 2027 deadlines, and how to build the evidence a mentor wants to see.' },
  slug: 'computer-science-internships-for-high-school-students',
  code: 'csih',
  accent: '#294C49',
  accentRationale: 'Computer science internships for high schoolers: #294C49, a dark lab-bench teal from the allocation sheet, distinct from the other US accents and readable on every paper colour',
  pageType: 'market',
  market: US,
  routeLabel: 'CS internships for high school students',
  title: 'Computer Science Internships for High School Students',
  description: 'Computer science internships for high school students: who NASA and NIST accept, the 2027 dates, the 18+ rules, open source work and a plan to get ready.',
  ogDescription: 'Most well known tech internships are for college students. Here is what the federal programs that do take high schoolers publish for 2027, and how a teen can build real evidence first.',
  twitterDescription: 'CS internships for high schoolers: real 2027 rules, age lines and a readiness plan.',
  pageName: 'Computer Science Internships for High School Students',
  webPageDescription: 'A guide for US high school students and parents to computer science internships, built from NASA, NIST, Google and GitHub pages read raw, with our own readiness plan.',
  courseDescription: 'Live online coding classes for US high school students building the projects, GitHub history and explanations that internship applications ask for, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'CS internships for high schoolers',
  navLinks: [
    { href: '#ages', label: 'Age lines' },
    { href: '#nasa', label: 'NASA' },
    { href: '#nist', label: 'NIST SHIP' },
    { href: '#opensource', label: 'Open source' },
    { href: '#ready', label: 'Get ready' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grades 9 to 12 &middot; Summer 2027 cycle',
  h1: 'Computer science internships for high school students',
  lede: 'Searching for a computer science internship in high school turns up the same frustration for most families: the famous programs want college students, adults, or both. Some do take teenagers, and the ones run by federal agencies publish exact rules. This guide reads those rules from the agencies&rsquo; own pages, shows where the age lines fall, explains how open source contributions give a 15 or 16 year old real, checkable work, and lays out the plan our teachers use to get a student ready for an application season.',
  secondaryCta: { href: '#ready', label: 'See the readiness plan' },
  wa: 'Hello Modern Age Coders, my high schooler in the US is looking for a computer science internship. Could we book a free first lesson to plan for it?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; projects with a real commit history',
  spec: [
    ['Who', 'US high school students'],
    ['Common age line', '16, and often 18'],
    ['Federal options', 'NASA, NIST and others'],
    ['Open to any age 13+', 'Open source on GitHub'],
    ['Season', 'Apply October to March'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Format', 'Live online, batch or 1-on-1'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Computer science internships for high school students exist, but they are few and strict. NASA&rsquo;s OSTEM internships need applicants to be 18 by the start of a session, and NIST&rsquo;s seven-week SHIP takes juniors and seniors living within 50 miles of its campuses. Most teens first build evidence through projects and open source. Modern Age Coders runs that preparation as live online classes, group or private.',

  picks: {
    eyebrow: 'Build the evidence first',
    h2: 'Three courses that produce work a mentor can check',
    lede: 'An internship reviewer looks for code they can open and a student who can explain it. Each of these ends with exactly that.',
    items: [
      { course: 'git-github-version-control-course-for-teens', code: 'CSIH / 01', title: 'Git and GitHub for teens', note: 'For 13 to 18 year olds: branches, pull requests, a public history.' },
      { course: 'python-complete-masterclass-teens', code: 'CSIH / 02', title: 'Python for teens', note: 'For 13 to 18 year olds: data scripts and small useful tools.' },
      { course: 'full-stack-web-development-teens-masterclass', code: 'CSIH / 03', title: 'Full stack web for teens', note: 'For 13 to 18 year olds: a deployed app backed by a database.' }
    ]
  },

  sections: [
    {
      id: 'ages', tint: 'tint', eyebrow: 'Age lines',
      h2: 'Which programs actually accept a high school student',
      lede: 'Before writing a single application, check the age and grade rules. These are the published lines for the programs on this page, read on 17 October 2026.',
      body: [
        { kind: 'table', caption: 'Published age and grade rules (read 17 October 2026); the right column is our reading', head: ['Program or service', 'What the source says', 'Our reading for a high schooler'], rows: [
          ['NASA OSTEM internships', 'Must be 18 or older by the published start date of the session; high school seniors can apply for the summer right after graduation', 'Realistic only for the summer after senior year'],
          ['NASA Pathways internships', 'At least 16 years old at the time of appointment, 2.9 GPA, enrolled at least half time', 'Built as a route into federal employment; check the enrollment rules closely'],
          ['NIST SHIP', 'High school junior or senior when applying, US citizen, unweighted GPA of 3.0', 'One of the few designed for high schoolers'],
          ['Google Summer of Code', 'Contributors must be at least 18 years old', 'Not open to most high schoolers'],
          ['LinkedIn', 'The user agreement sets the Minimum Age at 16 years old', 'A profile can wait until 16'],
          ['Open source on GitHub', 'GitHub&rsquo;s terms require users to be at least 13', 'Open from the first year of high school']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the table tells families',
          left: [
            'Two of the best known names on the list are closed to a 15 year old, and one is closed until after graduation. That is not a reason to give up. It is a reason to aim at the programs built for teenagers and to start building evidence now.',
            'The word internship also covers very different things. A NIST SHIP place is an unpaid educational research program; a NASA Pathways place is a paid route into civil service. Read each one as its own thing.'
          ],
          rightH3: 'Citizenship and location',
          right: [
            'Both NASA programs list US citizenship, and NIST SHIP asks for it too. NIST also requires a permanent home within a 50-mile radius of the Boulder or Gaithersburg campus, with families providing housing and transport.',
            'A student who is not a citizen, or who lives far from a campus, should put more weight on open source, competitions and school research programs.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://intern.nasa.gov/" rel="noopener" target="_blank">NASA internship programs</a>, <a class="ag-inline-link" href="https://www.nist.gov/careers/student-opportunities/summer-high-school-intern-program" rel="noopener" target="_blank">NIST SHIP</a>, <a class="ag-inline-link" href="https://developers.google.com/open-source/gsoc/faq" rel="noopener" target="_blank">Google Summer of Code FAQ</a>, <a class="ag-inline-link" href="https://www.linkedin.com/legal/user-agreement" rel="noopener" target="_blank">LinkedIn User Agreement</a>, <a class="ag-inline-link" href="https://docs.github.com/en/site-policy/github-terms/github-terms-of-service" rel="noopener" target="_blank">GitHub Terms of Service</a>, all read 17 October 2026. None of these organisations has any connection with Modern Age Coders.' }
      ]
    },
    {
      id: 'nasa', tint: 'deep', eyebrow: 'NASA',
      h2: 'NASA&rsquo;s two internship programs, side by side',
      lede: 'NASA runs two internship programs: Office of STEM Engagement (OSTEM) Internships and Pathways Internships. Its own comparison table is the clearest summary, so here it is in plain form.',
      body: [
        { kind: 'table', caption: 'NASA OSTEM and Pathways internships, from NASA&rsquo;s internship page (read 17 October 2026)', head: ['Point', 'OSTEM intern', 'Pathways intern'], rows: [
          ['Purpose', 'Short-term, project-based learning at NASA', 'Long-term developmental program leading to federal employment'],
          ['Length', 'Summer session is 10 weeks; fall and spring are 15 weeks', 'Minimum 12 weeks'],
          ['Citizenship', 'US citizen', 'US citizen'],
          ['Age', '18 or older by the published start date of the session', 'At least 16 at the time of appointment'],
          ['GPA', '3.0 on a 4.0 scale', '2.9 on a 4.0 scale'],
          ['High school students', 'Seniors can apply for the summer session immediately following graduation', 'Must be enrolled at least half time in an accredited institution'],
          ['Hours', 'Not listed in the comparison table', 'Able to work at least 480 hours before finishing the degree or certificate']
        ] },
        { kind: 'two', mt: true,
          leftH3: '2027 deadlines and the application',
          left: [
            'NASA lists the Summer 2027 deadline as March 1, 2027 (11:59 p.m. ET) and the Fall 2027 deadline as May 24, 2027. A senior graduating in June 2027 who wants that summer should be ready by late February.',
            'One detail is easy to miss: "Letters of recommendation are not part of the NASA Office of STEM Engagement Internships application." The written profile and the student&rsquo;s own record carry the weight.'
          ],
          rightH3: 'Scale and pay, as NASA states them',
          right: [
            'The page says the Office of STEM Engagement gives more than 2,000 students a year a hands-on internship, and that "The majority of interns receive a paid stipend award, which is based on academic level and session duration."',
            'Our arithmetic on Pathways: 480 hours at a 40-hour week is 12 weeks (480 / 40), which matches the program&rsquo;s own minimum length. At 20 hours a week it would be 24 weeks.'
          ] }
      ]
    },
    {
      id: 'nist', tint: 'tint', eyebrow: 'NIST SHIP',
      h2: 'NIST&rsquo;s Summer High School Intern Program for 2027',
      lede: 'The National Institute of Standards and Technology runs one of the few federal programs designed for high schoolers. NIST describes it plainly: "SHIP is a seven-week, unpaid educational internship."',
      body: [
        { kind: 'table', caption: 'NIST SHIP, from NIST&rsquo;s program page (read 17 October 2026)', head: ['Point', 'What NIST publishes'], rows: [
          ['When', 'Runs each year from mid-June to early August; actual dates vary'],
          ['Where', 'NIST Boulder, Colorado, or NIST Gaithersburg, Maryland'],
          ['Who', 'US citizens who are high school juniors or seniors at the time of application'],
          ['Grades', 'A minimum unweighted GPA of 3.0 on a 4.0 scale'],
          ['Commitment', 'The full seven weeks; families provide housing and transport'],
          ['Distance', 'A permanent home within a 50-mile radius of the host campus'],
          ['2027 cycle', 'Vacancy announcement expected on USAJOBS in mid-October 2026, applications due at the end of January 2027']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why computer science students look here',
          left: [
            'NIST&rsquo;s 2026 poster session listed several laboratories presenting together, including ITL, the Information Technology Laboratory. Research at a standards lab often needs data handling, measurement code and careful documentation.',
            'NIST calls SHIP a competitive volunteer program. The page asks applicants to show a strong interest in scientific research, so a student&rsquo;s own small research style project helps more than a list of courses.'
          ],
          rightH3: 'Two dates to reconcile',
          right: [
            'The page gives two timings: the 2027 announcement is expected in mid-October 2026, while the general How to Apply text says applications usually open on November 1 and close in the last week of January.',
            'Our advice is to watch USAJOBS from mid-October and treat the end of January as the hard edge. Check the NIST page itself before relying on any date.'
          ] }
      ]
    },
    {
      id: 'opensource', tint: 'deep', eyebrow: 'Open source',
      h2: 'Open source: real work a 14 year old is allowed to do',
      lede: 'Open source is the closest thing to an internship that has no age gate beyond the platform&rsquo;s own. GitHub&rsquo;s documentation sets out how newcomers find a first task.',
      body: [
        { kind: 'ol', items: [
          '<b>Start with software you already use.</b> GitHub&rsquo;s guide calls a daily-use project a great place to begin.',
          '<b>Search by topic.</b> Pages at github.com/topics/&lt;topic&gt; list projects and good first issues for a subject such as machine learning.',
          '<b>Filter for newcomers.</b> Many projects use the good first issue or help wanted labels to mark tasks meant for new contributors.',
          '<b>Check the project is alive.</b> The guide recommends confirming a repository is actively maintained before you start.',
          '<b>Pick a contribution type.</b> Fix or reproduce a bug from the issue tracker, test someone&rsquo;s pull request, report problems you hit while using it, or improve the docs.',
          '<b>Ask before big changes.</b> Open an issue describing your approach before investing significant time, so you match what maintainers expect.'
        ] },
        { kind: 'code', mt: true, label: 'A first pull request &middot; our command sequence', lang: 'shell', code: FIRST_PR, note: 'Each command is standard Git. Replace the placeholders with the real project. GitHub&rsquo;s guide notes that "Documentation improvements are almost always welcome", which is why a small docs fix is the first task we set.' },
        { kind: 'two', mt: true,
          leftH3: 'Why this impresses a reviewer',
          left: [
            'A merged pull request is public, dated and reviewed by someone outside the family. It shows the student can read an unfamiliar codebase, follow a project&rsquo;s rules and take feedback, which is most of what an internship mentor hopes for.',
            'Three small merged contributions to one project say more than one large unreviewed side project.'
          ],
          rightH3: 'Staying safe and honest',
          right: [
            'Use an account the student is old enough to hold, with a parent aware of it, and never put a home address or school name in a public profile.',
            'Be open about any AI help in a pull request description. Maintainers increasingly ask, and a student who explains their own change line by line has nothing to hide.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://docs.github.com/en/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github" rel="noopener" target="_blank">GitHub Docs, Finding ways to contribute to open source on GitHub</a>, read 17 October 2026. The command sequence is ours.' }
      ]
    },
    {
      id: 'calendar', tint: 'tint', eyebrow: 'The season',
      h2: 'An application calendar for summer 2027',
      lede: 'Built from the dates each program publishes for the 2027 cycle. The months are the agencies&rsquo;; the preparation column is ours.',
      body: [
        { kind: 'table', caption: 'Summer 2027 internship season (dates from the sources above; preparation steps are ours)', head: ['When', 'What is published', 'What to do (ours)'], rows: [
          ['Mid-October 2026', 'NIST expects the 2027 SHIP announcement on USAJOBS', 'Create a USAJOBS account with a parent; save the search'],
          ['November 2026', 'NIST&rsquo;s general text says SHIP applications usually open November 1', 'Draft the research interest statement'],
          ['End of January 2027', 'SHIP 2027 applications due', 'Submit a week early'],
          ['March 1, 2027', 'NASA OSTEM Summer 2027 deadline, 11:59 p.m. ET', 'Graduating seniors aged 18 by the start date apply'],
          ['May 24, 2027', 'NASA OSTEM Fall 2027 deadline', 'Only for students who meet the age and enrollment rules']
        ] },
        { kind: 'p', mt: true, html: 'Every date here belongs to the 2027 cycle and will move in later years. The pattern is steady, though: the application season for a summer internship runs from autumn of the year before to early spring, which surprises families who start looking in May.' }
      ]
    },
    {
      id: 'ready', tint: 'deep', eyebrow: 'Get ready',
      h2: 'Our twelve-week plan to become internship-ready',
      lede: 'Our plan for a student in grade 10 or 11, at about four hours a week including one live class. It produces the three things reviewers can check: a project, a public history and a clear explanation.',
      body: [
        { kind: 'table', caption: 'Twelve weeks to an application-ready record (our plan)', head: ['Weeks', 'Goal', 'Done when'], rows: [
          ['1 to 2', 'Pick one area', 'Data, web, games or research, written down in a sentence'],
          ['3 to 5', 'Build a small tool', 'It runs, has a README and lives in a public repository'],
          ['6', 'Clean the history', 'Commits have clear messages; secrets and personal data removed'],
          ['7 to 8', 'First open source contribution', 'A docs fix or small bug fix submitted as a pull request'],
          ['9 to 10', 'Second contribution and feedback', 'Review comments answered and changes pushed'],
          ['11', 'The one-page resume', 'Projects first, then skills, then school'],
          ['12', 'Explain it out loud', 'A two-minute walk-through of the tool, recorded']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Grade 9', p: 'Learn one language well and finish two small projects. Internship applications can wait.' },
          { h3: 'Grades 10 and 11', p: 'Run the twelve-week plan, then look at NIST SHIP and school or local research options.' },
          { h3: 'Grade 12', p: 'If 18 by the start date, NASA OSTEM&rsquo;s summer after graduation is open; apply by March 1.' }
        ] }
      ]
    },
    {
      id: 'resume', tint: 'tint', eyebrow: 'A worked example',
      h2: 'A one-page resume for a 16 year old with no job history',
      lede: 'Most teen resumes list courses. Ours lists evidence. Here is the layout we use, with an example student we made up for illustration.',
      body: [
        { kind: 'table', caption: 'Resume layout for an internship application (our template; the student is fictional)', head: ['Section', 'What goes in it', 'Example line'], rows: [
          ['Projects', 'Two or three, each with a link and one result', 'Library seat tracker: a Python script that reads a CSV of sign-ins and charts busy hours'],
          ['Open source', 'Merged pull requests with project names', 'Documentation fix merged in a public mapping project, March 2027'],
          ['Skills', 'Only what the projects prove', 'Python, Git, SQL basics, HTML and CSS'],
          ['Competitions', 'Real entries, results only if earned', 'Congressional App Challenge entrant, 2026'],
          ['School', 'Grade, relevant courses', 'Grade 11, AP Computer Science Principles']
        ] },
        { kind: 'p', mt: true, html: 'The order is the point. A reviewer reads the first third of the page with care and skims the rest, so the projects go where the attention is. For a wider view of what else strong students do, see <a class="ag-inline-link" href="/computer-science-extracurriculars">computer science extracurriculars</a> and <a class="ag-inline-link" href="/summer-research-programs-coding">summer research programs in coding</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your student is now',
    h2: 'Four stages before an internship application',
    lede: 'How far students usually are when families first ask us about internships.',
    table: { caption: 'From coursework to internship-ready (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Learner', 'Takes a CS class, has not built anything outside it'],
      ['2. Maker', 'Has one working project of their own'],
      ['3. Contributor', 'Has a public repository and a reviewed pull request'],
      ['4. Applicant', 'Can show, explain and defend their work in a short interview']
    ] },
    left: { h3: 'For parents', ps: [
      'Stages 1 to 3 take most students one school year at a steady pace.',
      'An internship is a learning program, not a job offer. Treat any placement as a bonus on top of the skills.'
    ] },
    right: { h3: 'For students', ps: [
      'Choose one project you would happily talk about for ten minutes.',
      'Write clear commit messages from today. They are part of your application.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for high schoolers preparing for internships',
    lede: 'Every course is live, and every one ends in work a reviewer can open, taught to a group or to one student at a time.',
    bands: [
      { num: 'I', h3: 'Foundations', sub: 'Grades 9 and 10', courses: [
        { code: 'CSIH / BASE / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The language most labs script in.' },
        { code: 'CSIH / BASE / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Tools that run in a browser.' },
        { code: 'CSIH / BASE / 03', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub', blurb: 'A history reviewers can read.' }
      ] },
      { num: 'II', h3: 'Projects', sub: 'Grades 10 and 11', courses: [
        { code: 'CSIH / BUILD / 01', slug: 'full-stack-web-development-teens-masterclass', title: 'Full stack web', blurb: 'An app with users and data.' },
        { code: 'CSIH / BUILD / 02', slug: 'react-for-teens-complete-masterclass', title: 'React for teens', blurb: 'Front ends that real users click.' },
        { code: 'CSIH / BUILD / 03', slug: 'complete-app-development-masterclass-for-teens', title: 'App development', blurb: 'A mobile app end to end.' }
      ] },
      { num: 'III', h3: 'Depth', sub: 'Grades 11 and 12', courses: [
        { code: 'CSIH / DEEP / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Data structures', blurb: 'The interview fundamentals.' },
        { code: 'CSIH / DEEP / 02', slug: 'ap-computer-science-a-java-exam-prep-course', title: 'AP Computer Science A', blurb: 'Classes and objects in Java.' },
        { code: 'CSIH / DEEP / 03', slug: 'hackathon-prep-for-teens-coding-ai-build-innovate-win-course', title: 'Hackathon prep', blurb: 'Team builds on a deadline.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live classes that build a record, week by week',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school, in your own US time zone.' },
      { time: 'Weekends', l: 'Longer build sessions when homework is lighter.' },
      { time: '1-on-1', l: 'Paced around one student&rsquo;s application dates.' }
    ],
    cells: [
      { h3: 'One mentor', p: 'The same teacher reviews every commit.' },
      { h3: 'Public repository', p: 'Work lives where a reviewer can open it.' },
      { h3: 'First pull request', p: 'Guided through a real open source project.' },
      { h3: 'Resume review', p: 'Evidence first, in our one-page layout.' },
      { h3: 'Mock walk-through', p: 'Practice explaining the project aloud.' },
      { h3: 'Batch or private', p: 'Fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Work our students can point to',
  projectsLede: 'Projects built by our learners, from data tools to full web apps. See more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Google reviews from parents, quoted as they wrote them.',

  fees: {
    h2: 'Fees',
    lede: 'Applying to the programs on this page costs nothing; our lessons are the preparation around them. We bill in US dollars one month at a time, so a student can study through an application season and pause once it is over.',
    free: ['A free first lesson', 'Bring the program you are eyeing', 'No card details'],
    group: ['Fifteen to twenty learners', 'One regular teacher', 'Choose your batch', 'Monthly'],
    one: ['A mentor to yourself', 'Paced to your deadlines', 'Your own projects']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'CS internships for high school students: common questions',
    items: [
      { q: 'Can high school students get computer science internships?', a: 'Some can, but options are limited. Many well known programs require applicants to be 18 or in college. Federal programs such as NIST SHIP are built for high school juniors and seniors.' },
      { q: 'Can a high school student intern at NASA?', a: 'NASA\'s page says OSTEM interns must be 18 or older by the session start date, and that high school seniors may apply for the summer session immediately following graduation. Pathways interns must be at least 16 and meet enrollment rules.' },
      { q: 'When is the NASA Summer 2027 internship deadline?', a: 'NASA lists March 1, 2027 at 11:59 p.m. ET for Summer 2027 and May 24, 2027 for Fall 2027. Later cycles publish their own dates.' },
      { q: 'What is NIST SHIP?', a: 'The NIST Summer High School Intern Program is a seven-week, unpaid educational internship at NIST Boulder or NIST Gaithersburg for US citizens who are juniors or seniors, with an unweighted GPA of at least 3.0.' },
      { q: 'Do I have to live near NIST to apply for SHIP?', a: 'Yes. NIST asks for a permanent residence within a 50-mile radius of the host campus, and families provide their own housing and transport.' },
      { q: 'Can high schoolers join Google Summer of Code?', a: 'Not usually. The Google Summer of Code FAQ says contributors must be at least 18 years old. Younger students can still contribute to open source projects directly.' },
      { q: 'How old do you need to be for LinkedIn?', a: 'LinkedIn\'s user agreement sets the Minimum Age at 16 years old. A high school student\'s projects and GitHub history matter far more than the profile.' },
      { q: 'What counts as experience if I cannot get an internship yet?', a: 'Finished projects in a public repository, merged open source pull requests, competition entries and the ability to explain your code. All of these can be checked by a reviewer.' },
      { q: 'When are your classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Can Modern Age Coders get my child an internship?', a: 'No. We do not place students and make no promise about any application. We teach the skills and help build the projects, history and explanations that applications ask for.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for US high schoolers building a computer science record.',
    items: [
      { href: '/computer-science-extracurriculars', label: 'CS extracurriculars', p: 'What counts, and in what order.' },
      { href: '/summer-research-programs-coding', label: 'Summer research programs', p: 'Selective research summers.' },
      { href: '/congressional-app-challenge-guide', label: 'Congressional App Challenge', p: 'A real app, judged locally.' },
      { href: '/hackathons-for-high-school-students', label: 'Hackathons for high schoolers', p: 'Team builds in a weekend.' },
      { href: '/ai-projects-for-high-school-students', label: 'AI projects for high schoolers', p: 'Project ideas with real depth.' },
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'Every page for US families.' },
      { href: '/coding-bootcamp-for-teens', label: 'Coding bootcamp for teens', p: 'Coding bootcamp for teens: the format, free tools and an eight-week plan.' },
      { href: '/homeschool-computer-science-high-school-credit', label: 'Homeschool CS high school credit', p: 'Homeschool CS credit in NY, PA and TX, from the state sources, with a template.' },
      { href: '/ai-summer-programs-for-high-school-students', label: 'AI summer programs for high school students', p: 'AI summer programs for US high schoolers in 2027, and an eight-week AI summer you can run at home.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Tell us the grade, the programs you are looking at and what the student has built so far. The teacher maps the gap and suggests a first project for the coming weeks.',
    readFirst: 'Want to see the teaching before you book? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> explains a lesson step by step, and the <a class="ag-inline-link" href="/courses">course list</a> holds every syllabus.',
    note: 'Our teachers work from India and meet students over video, so the location of your home never matters. Most US parents reach us fastest on WhatsApp.',
    formNote: 'Free first lesson, and no card is asked for.'
  },

  footer: {
    cols: [
      { h4: 'Build a record', links: [
        { href: '/computer-science-extracurriculars', label: 'CS extracurriculars' },
        { href: '/summer-research-programs-coding', label: 'Research summers' },
        { href: '/usaco-preparation-online-coaching', label: 'USACO coaching' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/ap-computer-science-a-online-classes', label: 'AP Computer Science A' },
        { href: '/ap-computer-science-principles-online-coaching', label: 'AP CS Principles' },
        { href: '/congressional-app-challenge-guide', label: 'Congressional App Challenge' }
      ] }
    ],
    bottomRight: 'Evidence over enrolment'
  },

  personalityCss: `
.ag-root.ag-csih .ag-hero h1 { letter-spacing: -0.008em; }
.ag-root.ag-csih .ag-capsule { border-left-width: 3px; border-radius: 4px; }
.ag-root.ag-csih .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-csih .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-csih .ag-steps { gap: 1rem; }
.ag-root.ag-csih .ag-slots { gap: 1.2rem; }
`,

  dossier: {
    curriculumAuthority: 'NASA internship programs page (OSTEM and Pathways comparison: 10 and 15 week sessions, Pathways minimum 12 weeks, US citizen, OSTEM 18 by session start, Pathways 16 at appointment, GPA 3.0 and 2.9, seniors for the summer after graduation, 480 hours, more than 2,000 students a year, paid stipend, no recommendation letters, Summer 2027 deadline March 1, 2027, Fall 2027 May 24, 2027); NIST SHIP page (seven-week unpaid, juniors or seniors, US citizen, unweighted 3.0, 50-mile radius, Boulder or Gaithersburg, USAJOBS mid-October 2026, due end of January 2027, ITL in the 2026 poster session); Google Summer of Code FAQ (18 or older); LinkedIn User Agreement (Minimum Age 16); GitHub Docs on finding ways to contribute; GitHub Terms (13). All read raw on 17 October 2026.',
    localProject: 'Our age-gate reading of six programs, our 2027 application calendar, our twelve-week readiness plan, our first pull request command sequence, our one-page resume layout with a fictional student, and our arithmetic 480 / 40 = 12 weeks. Lesson family: evidence of work.',
    requiredMentions: ['Must be 18 or older', 'immediately following graduation', 'March 1, 2027 (11:59 p.m. ET)', 'May 24, 2027', 'more than 2,000 students a year', 'Letters of recommendation are not part of the NASA Office of STEM Engagement Internships application.', '480 / 40', 'SHIP is a seven-week, unpaid educational internship.', '50-mile radius', 'contributors must be at least 18 years old', 'Minimum Age at 16 years old', 'good first issue or help wanted labels'],
    sources: [
      { claim: 'NASA OSTEM and Pathways: purpose, length, age, GPA, citizenship, high school seniors, hours, 2027 deadlines, stipend, scale, no letters.', url: 'https://intern.nasa.gov/' },
      { claim: 'NIST SHIP: seven-week unpaid, eligibility, 50-mile radius, campuses, 2027 timing, ITL.', url: 'https://www.nist.gov/careers/student-opportunities/summer-high-school-intern-program' },
      { claim: 'Google Summer of Code: contributors at least 18; not a recruitment program.', url: 'https://developers.google.com/open-source/gsoc/faq' },
      { claim: 'LinkedIn Minimum Age 16.', url: 'https://www.linkedin.com/legal/user-agreement' },
      { claim: 'How to find open source tasks: labels, topics, maintenance check, contribution types, docs.', url: 'https://docs.github.com/en/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github' },
      { claim: 'GitHub users must be at least 13.', url: 'https://docs.github.com/en/site-policy/github-terms/github-terms-of-service' }
    ],
    rejectedClaims: [
      'US Department of Labor youth employment hours and age rules: dol.gov returned 403, so no labour law figures are printed.',
      'NIH Summer Internship Program for high school students: training.nih.gov returned 403, so not described.',
      'AFRL Scholars returned 403; Navy SEAP and Army AEOP sites did not connect; an NSA high school URL was a 404. None are described.',
      'Stipend amounts for NASA or Google Summer of Code: not printed; NASA says amounts depend on academic level and session duration.',
      'Acceptance rates for any program: not published on the pages read, so not printed.',
      'Any promise that our classes lead to an internship placement: refused; the FAQ says so.',
      'Private company internships for high schoolers: not described, because none were verified from their own pages.'
    ]
  }
};
