'use strict';
// GitHub Classroom help for students (ag- Phase T school-tools door; US cluster row 148).
// REFRAMED: GitHub retired GitHub Classroom on August 28, 2026 (before this page was written), so the page is help for
// students after the retirement, not a how-to for the old service. Flagged to the main session.
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md; plan docs/superpowers/plans/2026-10-17-us-cluster-build.md.
// Search evidence (rows.tsv col 4): "github classroom how to submit / accept assignment error / not working";
// autocomplete_tools.tsv: "github classroom discontinued", "github classroom sunset", "github classroom shutting down",
// "github classroom replacement", "github classroom alternatives", "github classroom there was an error accepting the
// assignment", "github classroom how to submit assignment".
// Sources, fetched raw with curl on 17 October 2026; raw copies in
// keyword-research-2026-09/us/src/github-classroom-help-for-students/:
//  - github.com/orgs/community/discussions/205975 (GitHub Community Admin, Aug 27, 2026; gh.io/classroom-sunset and
//    classroom.github.com both redirect here, the latter with HTTP 301, saved as classroom-home-redirect.log): "GitHub
//    Classroom is now retired as we complete the transition to partner solutions"; "As of August 28, 2026, the GitHub
//    Classroom service has been retired, but any accounts, repositories, and organisations you created through Classroom
//    are not affected by this service retirement."; partners Codio and Classroom 50 ("a free, open-source GitHub
//    Classroom alternative developed by the Fifty Foundation"); "This completes the GitHub transition process announced
//    earlier this year on May 26th."; "please reach out to GitHub Education Support".
//  - github.com/orgs/community/discussions/196615 (the announcement, dated May 22, 2026 on the page): "operating under
//    'maintenance mode' for the past 18 months"; "Starting today, GitHub Classroom will no longer accept new users";
//    on August 28 "no users will be able to sign in and manage classrooms on the platform, and the GitHub Classroom
//    website will be decommissioned"; data deleted after that date ("final data deleted September 4, 2026"); Classroom
//    50 can "configure auto-grading via GitHub Actions". The page date (May 22) and the later notice (May 26th) differ;
//    the page prints neither day for the announcement, only "May 2026".
//  - docs.github.com (via the docs article API): about-github-classroom and glossary pages carrying the banner "The
//    GitHub Classroom application is closing down and will be retired on August 28, 2026."; view-autograding-results:
//    "If all tests succeed for a commit, you'll see a green checkmark. If any tests fail for a commit, you'll see a red
//    X."; "GitHub Classroom uses GitHub Actions to run autograding tests."; "The Actions tab shows the full history of
//    test runs."; viewing-your-assignments-deadline: hard cutoff, "you will lose write access to your assignment
//    repository after the deadline passes"; pushing-commits and dealing-with-non-fast-forward-errors: "! [rejected]
//    main -> main (non-fast-forward)", "git pull origin YOUR_BRANCH_NAME"; troubleshooting-cloning-errors: "The
//    requested URL returned error: 403", "you must authenticate with a personal access token instead of your password",
//    "Error: Repository not found", "git remote -v"; github-terms-of-service: "You must be age 13 or older."; about
//    GitHub Education for students: verified students get Codespaces "up to 180 core hours per month"; apply as a
//    student: "Are at least 13 years old."
// Our own runs (labelled on the page), git 2.46.0.windows.1 on Windows 11, 17 October 2026, in a throwaway folder with a
// placeholder remote (nothing sent to GitHub), saved as our-run-git-2.46.txt: not a git repository; nothing added to
// commit but untracked files present; Author identity unknown; src refspec main does not match any; 'origin' does not
// appear to be a git repository; src refspec master does not match any.
// Our own material: the timeline table, the student situations table, the git routine, the error table and term plan.
// Lesson family: version control (snapshots, history, and sharing work safely).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const FIRST_PUSH = `# Submitting work to a repository  (ours)
git status                  # where am I, what changed?
git add lab1.py             # stage the file
git commit -m "Lab 1"       # take the snapshot
git push origin main        # send it to GitHub

# Before git init, our run of git 2.46 printed:
#   fatal: not a git repository (or any of the
#   parent directories): .git
# Commit before add:
#   nothing added to commit but untracked files present
#   (use "git add" to track)`;

const IDENTITY = `# First commit on a new computer  (ours)
# Our run printed:
#   Author identity unknown
#   *** Please tell me who you are.
# Fix, as git itself suggests:
git config --global user.name "Your Name"
git config --global user.email "you@example.com"

# Use the email on your GitHub account, so your
# commits are linked to you.`;

const REJECTED = `# The push GitHub refuses  (from GitHub's docs)
$ git push origin main
 ! [rejected]        main -> main (non-fast-forward)
error: failed to push some refs to ...

# Fix from the same page: get the remote work first
git pull origin main
# resolve anything Git asks about, then
git push origin main`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'GITHUB CLASSROOM', blurb: 'GitHub Classroom was retired on August 28, 2026. What changed for students, what still works, and how to fix the Git errors that stop a submission.' },
  slug: 'github-classroom-help-for-students',
  code: 'git',
  accent: '#22264C',
  accentRationale: 'GitHub Classroom help, US Phase T: the allocated deep navy #22264C from alloc.tsv row 148, distinct from the other Phase T accents',
  pageType: 'market',
  market: US,
  routeLabel: 'GitHub Classroom help for students',
  title: 'GitHub Classroom Retired: Help for Students in 2026',
  description: 'GitHub Classroom was retired on August 28, 2026. What that means for students, what still works in your repositories, and how to fix common Git push errors.',
  ogDescription: 'GitHub Classroom is retired, but your repositories are not. A dated timeline from GitHub\'s own notices, plus fixes for rejected pushes, 403 errors and Repository not found.',
  twitterDescription: 'GitHub Classroom retired on August 28, 2026: what students need to know.',
  pageName: 'GitHub Classroom Help for Students',
  webPageDescription: 'A guide for US high school and college students after the retirement of GitHub Classroom, built from GitHub\'s notices and documentation and our own Git runs.',
  courseDescription: 'Live online Git and GitHub classes for US teens and college students, taught by a regular teacher in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'GitHub Classroom help',
  navLinks: [
    { href: '#timeline', label: 'What happened' },
    { href: '#you', label: 'What it means' },
    { href: '#submit', label: 'Submitting' },
    { href: '#errors', label: 'Push errors' },
    { href: '#tests', label: 'Test results' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Ages 13 to college &middot; GitHub and Git',
  h1: 'GitHub Classroom help for students',
  lede: 'If an invite link from your teacher now goes nowhere, or classroom.github.com lands you on a farewell message, nothing is wrong with your account. GitHub retired GitHub Classroom on August 28, 2026. Your repositories still exist, and the Git skills your class used still matter, because both replacement tools GitHub named work with GitHub repositories. This page gives the dated facts from GitHub\'s own notices, then fixes the Git errors that stop students submitting work, with messages from GitHub\'s documentation and our own runs.',
  secondaryCta: { href: '#timeline', label: 'See the timeline' },
  wa: 'Hello Modern Age Coders, my teenager in the US used GitHub Classroom and now needs help with Git and GitHub for a class. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Git and GitHub for ages 13 and up',
  spec: [
    ['For', 'Ages 13 to college'],
    ['Service', 'GitHub Classroom, retired'],
    ['Retired on', 'August 28, 2026'],
    ['Your repositories', 'Not affected, says GitHub'],
    ['GitHub account age', '13 or older'],
    ['Format', 'A batch, or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'GitHub Classroom stopped working because GitHub retired it on August 28, 2026; no one can sign in to it, and the website was decommissioned. GitHub says accounts, repositories and organizations created through Classroom are not affected. Ask your teacher which tool the class uses now, and keep pushing work with Git as before. Modern Age Coders teaches Git and GitHub live to students aged 13 and up, in a batch or one to one.',

  picks: {
    eyebrow: 'Learn it with a teacher',
    h2: 'Three courses for Git, GitHub and the code inside',
    lede: 'Git is the skill that outlasts any classroom tool. These courses teach it on real repositories.',
    items: [
      { course: 'git-github-version-control-course-for-teens', code: 'GIT / 01', title: 'Git and GitHub for teens', note: 'Ages 13 to 18. Commits, branches, pull requests, from zero.' },
      { course: 'git-github-version-control-course-for-college-students', code: 'GIT / 02', title: 'Git and GitHub for college', note: 'College students and recent graduates. Team workflows.' },
      { course: 'full-stack-web-development-teens-masterclass', code: 'GIT / 03', title: 'Full-stack web for teens', note: 'Ages 13 to 18. Sites built and shipped from a GitHub repository.' }
    ]
  },

  sections: [
    {
      id: 'timeline', tint: 'tint', eyebrow: 'What happened',
      h2: 'GitHub Classroom\'s retirement, in dates from GitHub itself',
      lede: 'Search suggestions now include github classroom discontinued and github classroom sunset. Here is what GitHub itself published, in order.',
      body: [
        { kind: 'table', caption: 'GitHub Classroom timeline, from GitHub Community announcements and GitHub Docs (read 17 October 2026)', head: ['When', 'What GitHub said'], rows: [
          ['Before May 2026', 'GitHub wrote that Classroom had been "operating under &lsquo;maintenance mode&rsquo; for the past 18 months"'],
          ['May 2026', '"Starting today, GitHub Classroom will no longer accept new users"; existing classrooms carried on as normal'],
                    ['August 28, 2026', '"As of August 28, 2026, the GitHub Classroom service has been retired"; no one can sign in and manage classrooms, and the website was decommissioned'],
          ['September 4, 2026', 'The last Classroom-only data (assignment names, tests defined outside repos, submissions history, LTI rosters) was due for deletion: "final data deleted September 4, 2026"'],
          ['17 October 2026 (our check)', 'classroom.github.com answered with a permanent redirect (HTTP 301) to GitHub\'s retirement notice, and GitHub Docs pages still carried the banner "The GitHub Classroom application is closing down and will be retired on August 28, 2026."']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What GitHub says is not affected',
          left: [
            'The retirement notice is specific: "any accounts, repositories, and organisations you created through Classroom are not affected by this service retirement." Your assignment repositories still live on GitHub.com, inside the organization your teacher used.',
            'What went away is the Classroom website and its extra layer: the invitation links, the teacher dashboard, and Classroom data stored outside your repositories.'
          ],
          rightH3: 'What GitHub suggested schools use instead',
          right: [
            'GitHub named two partners that offer "the core GitHub Classroom workflows (assignment distribution, auto grading, and GitHub repo integration)": Codio, and Classroom 50, which GitHub calls "a free, open-source GitHub Classroom alternative developed by the Fifty Foundation".',
            'Which one your class uses, if either, is your teacher\'s or school\'s decision. We are not connected with GitHub, Codio or the Fifty Foundation, and we do not recommend one over another.'
          ] },
        { kind: 'source', html: 'Sources: GitHub&rsquo;s <a class="ag-inline-link" href="https://github.com/orgs/community/discussions/205975" rel="noopener" target="_blank">retirement notice</a> and <a class="ag-inline-link" href="https://github.com/orgs/community/discussions/196615" rel="noopener" target="_blank">transition announcement</a> in GitHub Community, and <a class="ag-inline-link" href="https://docs.github.com/en/education/manage-coursework-with-github-classroom/get-started-with-github-classroom/about-github-classroom" rel="noopener" target="_blank">About GitHub Classroom</a> in GitHub Docs, all read 17 October 2026.' }
      ]
    },
    {
      id: 'you', tint: 'deep', eyebrow: 'What it means for you',
      h2: 'Your situation, and what to do next',
      lede: 'Students reach this page from different places. Find yours.',
      body: [
        { kind: 'table', caption: 'Student situations after the retirement (our guidance, built on GitHub\'s notices)', head: ['Your situation', 'What is going on', 'What to do'], rows: [
          ['A Classroom invite link does nothing', 'The Classroom website no longer runs', 'Ask your teacher for the new link or platform'],
          ['There was an error accepting the assignment', 'Accepting was a Classroom feature, now retired', 'Same: your teacher will move the assignment'],
          ['You want last year\'s work', 'Repositories were not affected', 'Sign in to GitHub.com and look under Your repositories, or the class organization'],
          ['You cannot push to an old repository', 'Your access depends on the organization\'s settings', 'Ask the teacher who owns the organization'],
          ['Your teacher moved to a new tool', 'GitHub says both partner tools include GitHub repo integration', 'The Git steps below still apply'],
          ['A question about your Classroom data', 'GitHub handles Classroom data questions', 'GitHub\'s notice points to GitHub Education Support']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Old deadlines and write access',
          left: [
            'While Classroom ran, its documentation explained that a teacher could make a deadline a hard cutoff, and that "you will lose write access to your assignment repository after the deadline passes" unless you had an extension.',
            'If an old repository is read-only for you, that may be why. It is a setting in the organization, so only the teacher or organization owner can change it.'
          ],
          rightH3: 'Accounts and ages',
          right: [
            'GitHub\'s terms say plainly: "You must be age 13 or older." That applies to every GitHub account, whatever tool a class uses on top of it.',
            'For GitHub Education student benefits, GitHub\'s docs list being "at least 13 years old" among the requirements, and say verified students get GitHub Codespaces for their personal accounts, up to 180 core hours per month.'
          ] }
      ]
    },
    {
      id: 'submit', tint: 'tint', eyebrow: 'Submitting work',
      h2: 'The Git steps every repository-based class still uses',
      lede: 'Classroom only handed out repositories. Submitting work was always ordinary Git: change files, commit, push. These are the four commands, and what our run of Git printed when a step was skipped.',
      body: [
        { kind: 'code', label: 'The routine &middot; status, add, commit, push', lang: 'shell', code: FIRST_PUSH, note: 'GitHub&rsquo;s docs explain that git push takes a remote name, such as origin, and a branch name, such as main. Our runs used a throwaway folder and sent nothing to GitHub.' },
        { kind: 'code', mt: true, label: 'Fixed &middot; Git does not know who you are yet', lang: 'shell', code: IDENTITY, note: 'Git stops a first commit on a new computer until it has a name and email. On a shared school computer, leave out --global to set them for one repository only, as Git&rsquo;s own message suggests.' },
        { kind: 'ol', mt: true, items: [
          '<b>Clone once.</b> Copy the clone URL from the repository page, as GitHub&rsquo;s docs advise, rather than typing it.',
          '<b>Work in that folder.</b> Commands run anywhere else print fatal: not a git repository.',
          '<b>Check with git status</b> before every commit. It lists changed and untracked files.',
          '<b>Add, then commit</b> with a message that says what changed, such as "Lab 1: loops working".',
          '<b>Push to the right branch.</b> Our run of git push origin master on a main branch printed error: src refspec master does not match any.',
          '<b>Open the repository on GitHub.com</b> and check that your latest commit is there. If it is not on GitHub, your teacher cannot see it.'
        ] }
      ]
    },
    {
      id: 'errors', tint: 'deep', eyebrow: 'Push and clone errors',
      h2: 'The errors that stop a submission, and the documented fixes',
      lede: 'When a push fails the night before a deadline, the message usually names the problem. These come from GitHub&rsquo;s documentation and from our own runs.',
      body: [
        { kind: 'code', label: 'Rejected &middot; the remote has work you do not', lang: 'shell', code: REJECTED, note: 'GitHub&rsquo;s explanation: if your local copy is "behind" the repository you are pushing to, you get non-fast-forward updates were rejected, and you must fetch the changes before pushing yours.' },
        { kind: 'table', mt: true, caption: 'Git and GitHub errors students meet (messages from GitHub Docs and from our run of git 2.46.0, 17 October 2026)', head: ['Message', 'What it means', 'Fix'], rows: [
          ['The requested URL returned error: 403', 'GitHub refused access over HTTPS', 'GitHub&rsquo;s docs: "you must authenticate with a personal access token instead of your password"'],
          ['Error: Repository not found', 'A typo in the URL, or no permission', 'Check git remote -v; ask the owner for access'],
          ['src refspec main does not match any (ours)', 'No commit yet, or a different branch name', 'Commit first; check the branch with git status'],
          ['\'origin\' does not appear to be a git repository (ours)', 'No remote set up in this folder', 'Clone the repository again, or add the remote your teacher gave you'],
          ['Author identity unknown (ours)', 'Git has no name and email on this computer', 'git config user.name and user.email'],
          ['nothing added to commit but untracked files present (ours)', 'New files were never added', 'git add the files, then commit']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Passwords do not work for Git over HTTPS',
          left: [
            'If you type your GitHub password when Git asks for one, you may get a 401 or 403 error. GitHub&rsquo;s cloning help is clear that you need a personal access token instead.',
            'GitHub&rsquo;s docs also describe Git Credential Manager, which stores credentials so you do not have to paste a token each time. On a shared school computer, ask before saving credentials.'
          ],
          rightH3: 'Repository not found is often a permissions message',
          right: [
            'GitHub&rsquo;s docs explain that this error means the repository "does not exist or you do not have permission to access it". One cause to rule out with class repositories: signing in with a different GitHub account from the one the teacher added.',
            'Run git remote -v to see the URL your folder uses, compare it with the repository page, and check which account you are signed in to.'
          ] }
      ]
    },
    {
      id: 'tests', tint: 'tint', eyebrow: 'Test results',
      h2: 'Green checks and red Xs: reading automatic test results',
      lede: 'Classroom&rsquo;s autograding ran on GitHub Actions, and GitHub says Classroom 50 also configures autograding via GitHub Actions. So the same signals may still appear on your commits, whatever tool your teacher picked.',
      body: [
        { kind: 'three', cells: [
          { h3: 'A green checkmark', p: 'GitHub&rsquo;s docs: "If all tests succeed for a commit, you\'ll see a green checkmark." Your latest pushed code passed the tests the teacher set.' },
          { h3: 'A red X', p: 'The same page: "If any tests fail for a commit, you\'ll see a red X." Click it to open the log, which shows compilation errors and failed tests.' },
          { h3: 'The Actions tab', p: 'GitHub says "The Actions tab shows the full history of test runs." Open the latest run and read the first failure, not the last line.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How to read a failing test log',
          left: [
            'Scroll to the first line marked as an error. A compile error means the code never ran; fix that before anything else. A failed test usually prints what it expected and what your code produced.',
            'Run the same input on your own computer and compare. The difference between expected and actual output is the clue.'
          ],
          rightH3: 'What we will not do',
          right: [
            'We will explain what a failing test is checking and teach the idea behind it. We will not write code to pass a graded test for you.',
            'Repository owners can see your commit history. Work you understand is the only kind worth submitting.'
          ] }
      ]
    },
    {
      id: 'plan', tint: 'deep', eyebrow: 'Beyond one class',
      h2: 'Git as a skill, not a submission button',
      lede: 'Classroom tools come and go, as this year showed. Version control stays. This is how we teach it across a first term.',
      body: [
        { kind: 'table', caption: 'A first term of Git and GitHub (our plan for ages 13 and up, adjusted for each learner)', head: ['Classes', 'What the student practices', 'Why it matters'], rows: [
          ['1 to 2', 'Install Git, init, add, commit', 'Snapshots you can always go back to'],
          ['3 to 4', 'Clone, push, pull with GitHub', 'Work that lives beyond one laptop'],
          ['5 to 6', 'Branches and merges', 'Trying ideas without breaking the main version'],
          ['7 to 8', 'Resolving conflicts and rejected pushes', 'Calm fixes at deadline time'],
          ['9 to 10', 'Pull requests and reviews', 'How teams, and many classes, share feedback'],
          ['11 to 12', 'A portfolio repository with a README', 'Something to show beyond a grade']
        ] },
        { kind: 'p', mt: true, html: 'For the difference between the two names, read <a class="ag-inline-link" href="/blog/git-vs-github-difference">Git vs GitHub</a>. Students taking Java for AP may also want <a class="ag-inline-link" href="/ap-computer-science-a-online-classes">AP Computer Science A online classes</a>, and anyone stuck on a bug rather than a push can use <a class="ag-inline-link" href="/how-to-debug-code">how to debug code</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where a student is',
    h2: 'Four stages with Git',
    lede: 'From uploading files to managing history.',
    table: { caption: 'Stages of Git skill (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Uploader', 'Drags files into GitHub in the browser'],
      ['2. Committer', 'Uses add, commit and push, and panics at errors'],
      ['3. Fixer', 'Reads rejected pushes and fixes them with pull'],
      ['4. Collaborator', 'Branches, opens pull requests and reviews others']
    ] },
    left: { h3: 'For parents', ps: [
      'The retirement of GitHub Classroom changed a website, not the skill. Git is used far beyond school, and your teenager\'s repositories are still there.',
      'GitHub accounts are for ages 13 and up, under GitHub\'s own terms.'
    ] },
    right: { h3: 'For students', ps: [
      'Run git status before anything else. It tells you where you are and what changed.',
      'Check GitHub.com after every push. If the commit is not there, it was not submitted.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses where work lives in repositories',
    lede: 'Live online classes with a regular teacher, in a batch or one to one.',
    bands: [
      { num: 'I', h3: 'Version control', sub: 'Ages 13 and up', courses: [
        { code: 'GIT / VC / 01', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub for teens', blurb: 'From first commit to pull request.' },
        { code: 'GIT / VC / 02', slug: 'git-github-version-control-course-for-college-students', title: 'Git and GitHub for college', blurb: 'Team workflows and reviews.' },
        { code: 'GIT / VC / 03', slug: 'git-github-advanced-version-control-masterclass-for-professionals', title: 'Advanced Git', blurb: 'Rebase, history and automation.' }
      ] },
      { num: 'II', h3: 'High school', sub: 'Ages 13 to 18', courses: [
        { code: 'GIT / HS / 01', slug: 'ap-computer-science-a-java-exam-prep-course', title: 'AP Computer Science A', blurb: 'Java for the AP course.' },
        { code: 'GIT / HS / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Object-oriented code, step by step.' },
        { code: 'GIT / HS / 03', slug: 'full-stack-web-development-teens-masterclass', title: 'Full-stack web for teens', blurb: 'Projects deployed from GitHub.' }
      ] },
      { num: 'III', h3: 'College and adults', sub: 'Ages 18 and up', courses: [
        { code: 'GIT / PRO / 01', slug: 'complete-java-programming-masterclass-college', title: 'Java for college', blurb: 'Complete Java, live.' },
        { code: 'GIT / PRO / 02', slug: 'full-stack-web-development-masterclass-college', title: 'Full-stack web for college', blurb: 'Front end, back end, deploy.' },
        { code: 'GIT / PRO / 03', slug: 'data-structures-algorithms-masterclass-college', title: 'Data structures and algorithms', blurb: 'For coursework and interviews.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live Git lessons on your real repositories',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Evening batches across US time zones.' },
      { time: 'Weekends', l: 'Room for longer repository projects.' },
      { time: '1-on-1', l: 'Before a deadline, at a time you pick.' }
    ],
    cells: [
      { h3: 'Same teacher', p: 'All the way through the term.' },
      { h3: 'Your terminal', p: 'We fix Git on your computer.' },
      { h3: 'Real repositories', p: 'Practice on your own projects.' },
      { h3: 'Your code stays yours', p: 'We teach; you submit.' },
      { h3: 'Coast to coast', p: 'Live online in every state.' },
      { h3: 'Batch or private', p: 'Fifteen to twenty, or one learner.' }
    ]
  },

  projectsH2: 'Repositories and projects from our students',
  projectsLede: 'Projects from learners who once could not get a push to go through. Browse more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Parents\' Google reviews, reproduced word for word.',

  fees: {
    h2: 'Fees',
    lede: 'Git and a GitHub account cost nothing. The fee pays for teaching, billed monthly in US dollars, with no contract running to the end of the semester, and you can leave once any month is over.',
    free: ['A free first lesson', 'Bring the push that failed', 'No card needed'],
    group: ['Fifteen to twenty students', 'One regular teacher', 'A batch time you choose', 'Charged monthly'],
    one: ['Private Git lessons', 'At your convenience', 'Your own repositories']
  },

  faq: {
    eyebrow: 'Questions students ask',
    h2: 'GitHub Classroom and Git: common questions',
    items: [
      { q: 'Is GitHub Classroom shutting down?', a: 'It already has. GitHub says that as of August 28, 2026 the GitHub Classroom service has been retired, and nobody can sign in to manage classrooms on it.' },
      { q: 'Why is GitHub Classroom not working?', a: 'Because the service was retired on August 28, 2026 and its website was decommissioned. Invite links and assignment acceptance no longer work. Ask your teacher which platform the class uses now.' },
      { q: 'What happened to my GitHub Classroom assignments?', a: 'GitHub says accounts, repositories and organizations created through Classroom are not affected by the retirement. Your assignment repositories should still be on GitHub.com in the class organization.' },
      { q: 'What replaced GitHub Classroom?', a: 'GitHub named two partners, Codio and Classroom 50 from the Fifty Foundation, which it describes as a free, open-source alternative. Your school or teacher decides what your class uses.' },
      { q: 'How do I submit an assignment to a GitHub repository?', a: 'In the repository folder, run git add for your files, git commit with a message, then git push origin main. Then open the repository on GitHub.com and check your latest commit is there.' },
      { q: 'Why does git push say rejected (non-fast-forward)?', a: 'The repository on GitHub has commits you do not have yet. GitHub suggests running git pull for that branch to bring them in, then pushing again.' },
      { q: 'Why does Git say error 403 when I push?', a: 'GitHub refused access. GitHub says you must authenticate with a personal access token instead of your password, and that you need an account with access to the repository.' },
      { q: 'How old do you have to be to use GitHub?', a: 'GitHub\'s terms say you must be age 13 or older to have an account.' },
      { q: 'When are classes for US students?', a: 'Weekdays or weekends, flexible. Choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'How much do Git and GitHub classes cost?', a: 'Your first lesson is free. Then fees are paid month by month for live teaching, and the fees section on this page shows the US dollar amount.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Next steps for US students working with Git.',
    items: [
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'Our hub for families and students in the US.' },
      { href: '/blog/git-vs-github-difference', label: 'Git vs GitHub', p: 'Two names, two different things.' },
      { href: '/ap-computer-science-a-online-classes', label: 'AP CSA online classes', p: 'Java for the AP course.' },
      { href: '/java-classes-for-teens', label: 'Java classes for teens', p: 'Java beyond the exam.' },
      { href: '/how-to-debug-code', label: 'How to debug code', p: 'When the code, not Git, is broken.' },
      { href: '/levels/coding-for-teens', label: 'Coding for teens', p: 'Every teen track in one place.' },
      { href: '/google-colab-help-for-students', label: 'Google Colab help for students', p: 'Google Colab not working? Runtimes, files, Drive and limits, explained.' },
      { href: '/jupyter-notebook-errors-for-students', label: 'Jupyter Notebook errors for students', p: 'Jupyter Notebook errors students hit, what they mean, and how to fix them.' },
      { href: '/python-indentation-error-explained', label: 'Python indentation errors explained', p: 'Every Python IndentationError message, what it means, and how to fix it.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Tell us the class, the repository and the error. In the first lesson the teacher works through your real push with you.',
    readFirst: 'Want to know what a lesson looks like? See <a class="ag-inline-link" href="/how-we-teach">our approach</a>, or open <a class="ag-inline-link" href="/courses">the course pages</a> for week-by-week detail.',
    note: 'We teach over live video from India, so there is nowhere to travel to and any US student can join. The quickest way to reach us is WhatsApp.',
    formNote: 'Your first lesson is free; we will not ask for card details.'
  },

  footer: {
    cols: [
      { h4: 'Git and GitHub', links: [
        { href: '/blog/git-vs-github-difference', label: 'Git vs GitHub' },
        { href: '/hackathon-guide', label: 'Hackathon guide' },
        { href: '/how-to-debug-code', label: 'How to debug code' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/ap-computer-science-a-online-classes', label: 'AP CSA classes' },
        { href: '/java-classes-for-teens', label: 'Java classes for teens' },
        { href: '/python-for-15-year-olds', label: 'Python for 15 year olds' }
      ] }
    ],
    bottomRight: 'Status, add, commit, push, then check'
  },

  personalityCss: `
.ag-root.ag-git .ag-hero h1 { letter-spacing: -0.011em; }
.ag-root.ag-git .ag-capsule { border-left-width: 6px; border-radius: 4px; }
.ag-root.ag-git .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-git .ag-table caption { text-align: left; font-style: normal; }
.ag-root.ag-git .ag-slots { gap: 1.2rem; }
`,

  dossier: {
    curriculumAuthority: 'GitHub notices in GitHub Community (discussion 205975, the retirement notice of Aug 27, 2026, reached from gh.io/classroom-sunset and classroom.github.com; discussion 196615, the May 2026 announcement) and GitHub Docs, read raw 17 October 2026: retired as of August 28, 2026; accounts, repositories and organisations not affected; no new users from May 2026; maintenance mode for 18 months; sign-in ended and website decommissioned; final data deleted September 4, 2026; partners Codio and Classroom 50 (Fifty Foundation); Docs closing-down banner; autograding green checkmark and red X, Actions tab; hard-cutoff deadlines removed write access; git push, non-fast-forward fix; 403 and token instead of password; Repository not found; age 13 or older; GitHub Education 13+ and 180 core hours.',
    localProject: 'Our own runs of git 2.46.0.windows.1 on Windows 11 (17 October 2026) in a throwaway folder with a placeholder remote: not a git repository; nothing added to commit but untracked files present; Author identity unknown; src refspec main does not match any; \'origin\' does not appear to be a git repository; src refspec master does not match any. Our HTTP 301 check of classroom.github.com. A dated timeline, a student-situations table, a six-step submit routine, an error table and a twelve-class Git plan. Lesson family: version control.',
    requiredMentions: ['As of August 28, 2026, the GitHub Classroom service has been retired', 'are not affected by this service retirement', 'final data deleted September 4, 2026', 'operating under &lsquo;maintenance mode&rsquo; for the past 18 months', 'a free, open-source GitHub Classroom alternative developed by the Fifty Foundation', 'HTTP 301', 'You must be age 13 or older.', 'you must authenticate with a personal access token instead of your password', 'src refspec master does not match any', 'The Actions tab shows the full history of test runs.', 'you will lose write access to your assignment repository after the deadline passes'],
    sources: [
      { claim: 'Retired as of August 28, 2026; accounts, repositories and organisations not affected; partners named.', url: 'https://github.com/orgs/community/discussions/205975' },
      { claim: 'May 2026 announcement: maintenance mode, no new users, sign-in ends, website decommissioned, data deletion dates, Classroom 50 autograding via Actions.', url: 'https://github.com/orgs/community/discussions/196615' },
      { claim: 'Docs closing-down banner on About GitHub Classroom.', url: 'https://docs.github.com/en/education/manage-coursework-with-github-classroom/get-started-with-github-classroom/about-github-classroom' },
      { claim: 'Autograding results: green checkmark, red X, Actions tab.', url: 'https://docs.github.com/en/education/manage-coursework-with-github-classroom/learn-with-github-classroom/view-autograding-results' },
      { claim: 'Hard-cutoff deadlines remove write access.', url: 'https://docs.github.com/en/education/manage-coursework-with-github-classroom/learn-with-github-classroom/viewing-your-assignments-deadline' },
      { claim: 'Non-fast-forward errors and the pull fix.', url: 'https://docs.github.com/en/get-started/using-git/dealing-with-non-fast-forward-errors' },
      { claim: '403 errors, token instead of password, Repository not found, git remote -v.', url: 'https://docs.github.com/en/repositories/creating-and-managing-repositories/troubleshooting-cloning-errors' },
      { claim: 'Users must be age 13 or older.', url: 'https://docs.github.com/en/site-policy/github-terms/github-terms-of-service' },
      { claim: 'GitHub Education for students: 13 or older; Codespaces up to 180 core hours per month.', url: 'https://docs.github.com/en/education/about-github-education/github-education-for-students/about-github-education-for-students' }
    ],
    rejectedClaims: [
      'A how-to for accepting Classroom assignments: the service was retired on August 28, 2026, so the page does not teach a workflow that no longer exists.',
      'Codio pricing and its licence offer to institutions: commercial terms, not printed.',
      'The institution Classroom 50 builds on: GitHub names a specific university; the page names no individual school, so that detail is left out.',
      'The exact announcement day: the announcement page shows May 22, 2026 while the retirement notice says May 26th, so the page says May 2026 only.',
      'That the Classroom Codespaces allowance ended on a given date: stated only in a reply comment, not in GitHub\'s notice body, so not printed.',
      'That every teacher moved to a named partner: unknown; the page says the teacher or school decides.',
      'Solutions to graded autograded assignments: none; the page says we never write code to pass a graded test.',
      'Any affiliation with GitHub, Codio or the Fifty Foundation: none, and the page says so.'
    ]
  }
};
