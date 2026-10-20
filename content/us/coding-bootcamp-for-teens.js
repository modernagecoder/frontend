'use strict';
// Coding bootcamp for teens (ag- topic door; US cluster Phase 2, row 35).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md. Sources, read raw on 17 October 2026 (copies in
// keyword-research-2026-09/us/src/coding-bootcamp-for-teens/):
//  - Hack Club home (hackclub.com): "Hack Club is the world's largest nonprofit movement of teenagers making cool
//    projects."; "For all teens aged 13" to 18 (the page uses an en dash, paraphrased as "13 to 18"). Philosophy page
//    (hackclub.com/philosophy/): "Coding is a superpower."; learning to code "converts you from a consumer to a creator".
//  - MDN, Learn web development (developer.mozilla.org/en-US/docs/Learn_web_development): "Our Core modules provide a
//    structured set of tutorials teaching the essential skills and practices for being a successful front-end
//    developer"; 'Designed to take you from "beginner" to "comfortable" (not "beginner" to "expert")'; Extension modules
//    "cover useful additional skills to learn as you start to expand your knowledge and develop specialisms"; core
//    module names: Structuring content with HTML, CSS styling basics, CSS text styling, CSS layout, Dynamic scripting
//    with JavaScript, JavaScript frameworks and libraries, Accessibility, Design for developers, Version control.
//  - The Odin Project about (theodinproject.com/about): "The Odin Project provides a free open source coding curriculum
//    that can be taken entirely online."; "This website and the curriculum it hosts are completely open source." Paths
//    page (theodinproject.com/paths): Foundations, "A hands-on introduction to all of the essential tools you'll need to
//    build real, working websites", then Full Stack JavaScript or Full Stack Ruby on Rails; "The courses should be taken
//    in the order that they are displayed."
//  - Pro Git book, What is Git? (git-scm.com): "Snapshots, Not Differences"; "Git thinks of its data more like a series
//    of snapshots of a miniature filesystem"; every commit "Git basically takes a picture of what all your files look
//    like at that moment"; three main states, modified, staged and committed.
//  - GitHub Terms of Service (docs.github.com): "A User must be at least 13 years of age". GitHub Education student
//    application (docs.github.com): eligibility "Are at least 13 years old" and enrolled in a program "such as a high
//    school, college, university, or homeschool".
// Our own material, labelled on the page: the eight-week teen bootcamp plan (10 hours a week = 80 hours; 4.5 live + 5.5
// build), the Git command sequence and its sample log, the bootcamp-or-not table, and the arithmetic comparing a school
// semester elective (our assumption: 50 minutes a day, 5 days, 18 weeks = 75 hours) with the 80-hour plan.
// Lesson family: version control and shipping (commit small, commit often).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const GIT = `# Week 5 of our plan: the student's portfolio site goes under version control.
git init
git add index.html style.css
git commit -m "First page: name, photo, three projects"

# A new feature on its own branch, so the working site stays safe
git switch -c dark-mode
git add style.css
git commit -m "Add a dark colour scheme"
git switch main
git merge dark-mode

git status
git log --oneline`;

const LOG = `# What git log --oneline prints next (our sample; the hashes on your machine will differ)
3f9c2ab Add a dark colour scheme
a17e0d4 First page: name, photo, three projects`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'INTENSIVE', blurb: 'What a coding bootcamp for teens should really be: an honest look at the format, free curricula worth knowing, an eight-week plan and real Git commands.' },
  slug: 'coding-bootcamp-for-teens',
  code: 'bt',
  accent: '#755E19',
  accentRationale: 'Coding bootcamp for teens: #755E19, a worn brass from the allocation sheet, separate from the other US accents and readable on every paper colour',
  pageType: 'market',
  market: US,
  routeLabel: 'Coding bootcamp for teens',
  title: 'Coding Bootcamp for Teens: An Honest Eight-Week Plan',
  description: 'A coding bootcamp for teens, honestly explained: what the format is, the free curricula and age rules worth knowing, real Git commands and our eight-week plan.',
  ogDescription: 'Bootcamp means intensive, not magic. What a teen version should include, the free curricula teens can use, the age rules on GitHub, real Git commands and an eight-week plan we use.',
  twitterDescription: 'Coding bootcamp for teens: the format, free tools and an eight-week plan.',
  pageName: 'Coding Bootcamp for Teens',
  webPageDescription: 'A guide for US teens and parents considering a coding bootcamp, built from curriculum and platform pages read raw, with real Git commands, age rules and our own eight-week plan.',
  courseDescription: 'Live online web development and coding classes for US teens in an intensive eight-week format, ending in a deployed project, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Coding bootcamp for teens',
  navLinks: [
    { href: '#format', label: 'What it is' },
    { href: '#curricula', label: 'Free curricula' },
    { href: '#ages', label: 'Age rules' },
    { href: '#git', label: 'Real Git' },
    { href: '#eight', label: 'Eight-week plan' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Ages 13 to 18 &middot; Intensive format',
  h1: 'Coding bootcamp for teens',
  lede: 'The word bootcamp promises speed. For an adult changing careers, that usually means months of full-time study. For a teenager with school, sports and family, a bootcamp has to mean something different: a short, intense block of building with a clear finish line. This page explains what an honest teen bootcamp contains, the free curricula a motivated teen can already use, the age rules on the platforms involved, the Git commands every bootcamp should teach, and the eight-week plan our teachers run live online.',
  secondaryCta: { href: '#eight', label: 'See the eight-week plan' },
  wa: 'Hello Modern Age Coders, my teen in the US is looking for a coding bootcamp. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; a deployed project at the end',
  spec: [
    ['Ages', '13 to 18'],
    ['Length', 'Eight weeks'],
    ['Hours', 'About ten a week'],
    ['Stack', 'HTML, CSS, JavaScript, Git'],
    ['Finish line', 'A deployed project and a demo'],
    ['Group', 'A batch, or one to one'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'A coding bootcamp for teens is an intensive block of project work, typically a few weeks to a few months, that ends with something deployed and explained. For ages 13 to 18 it should fit around school, teach version control from the start, and promise skills, not jobs. Modern Age Coders runs an eight-week live online version, about ten hours a week, in a batch or one to one.',

  picks: {
    eyebrow: 'Do the intensive with a teacher',
    h2: 'Three courses that make up a teen bootcamp',
    lede: 'Most teens take them in this order. A student who already knows some JavaScript can start at the second or third.',
    items: [
      { course: 'javascript-course-for-teens-beginners-interactive-web', code: 'BT / 01', title: 'JavaScript for teens', note: 'Ages 13 to 18. Interactive pages from the first lesson.' },
      { course: 'full-stack-web-development-teens-masterclass', code: 'BT / 02', title: 'Full stack web for teens', note: 'Ages 13 to 18. A front end and a server, deployed.' },
      { course: 'git-github-version-control-course-for-teens', code: 'BT / 03', title: 'Git and GitHub for teens', note: 'Ages 13 to 18. Version control the way teams use it.' }
    ]
  },

  sections: [
    {
      id: 'format', tint: 'tint', eyebrow: 'What it is',
      h2: 'What a coding bootcamp is, and what it should mean for a teenager',
      lede: 'A bootcamp is a format, not a qualification. There is no official definition, so it pays to know what you are buying. This is how we describe the difference.',
      body: [
        { kind: 'table', caption: 'Adult bootcamp and teen bootcamp compared (our description, not an industry standard)', head: ['Feature', 'Typical adult bootcamp', 'What a teen bootcamp should be'], rows: [
          ['Goal', 'Usually a career change', 'Real skills and one finished project'],
          ['Time', 'Often full time for months', 'A fixed number of hours around school'],
          ['Starting point', 'Assumes an adult who can study alone all day', 'Assumes a teen who needs a teacher and a rhythm'],
          ['Proof at the end', 'A portfolio for job applications', 'A deployed project the teen can explain line by line'],
          ['Promises to watch', 'Job and salary claims', 'Any promise beyond skills is a warning sign']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the honest version is smaller',
          left: [
            'A teen has perhaps ten spare hours a week in term time. A program that claims to make them job-ready in eight weeks is selling the adult promise to the wrong audience.',
            'What eight weeks can do is real: take a teen from small scripts to a working, deployed web project, with the habits professionals use every day.'
          ],
          rightH3: 'What to check in any program',
          right: [
            'Ask what the teen will have on the last day, who reviews their code, and whether version control is taught or skipped. Ask for the age rules of every platform the program uses.',
            'If an adult bootcamp is considering your teen, read its own admissions page for age limits. We could not read several of those pages for this guide, so we make no claims about them.'
          ] }
      ]
    },
    {
      id: 'curricula', tint: 'deep', eyebrow: 'Free curricula',
      h2: 'Two free, structured curricula a teen can already follow',
      lede: 'A motivated teen does not need to pay for a syllabus. Two well-known free curricula publish theirs in the open. Here is what each says about itself.',
      body: [
        { kind: 'table', caption: 'MDN Learn web development and The Odin Project, from their own pages (read 17 October 2026)', head: ['Curriculum', 'What it says about itself', 'Structure'], rows: [
          ['MDN Learn web development', 'Core modules "provide a structured set of tutorials teaching the essential skills and practices for being a successful front-end developer"', 'Core modules, then Extension modules that "cover useful additional skills"'],
          ['MDN, stated level', 'Designed to take you from "beginner" to "comfortable" (not "beginner" to "expert")', 'A foundation for more advanced reading'],
          ['The Odin Project', '"The Odin Project provides a free open source coding curriculum that can be taken entirely online."', 'Foundations, then Full Stack JavaScript or Full Stack Ruby on Rails'],
          ['The Odin Project, order', '"The courses should be taken in the order that they are displayed."', 'A fixed sequence, with projects placed throughout']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>Structuring content with HTML</b>',
          '<b>CSS styling basics</b>',
          '<b>CSS text styling</b>',
          '<b>CSS layout</b>',
          '<b>Dynamic scripting with JavaScript</b>',
          '<b>JavaScript frameworks and libraries</b>',
          '<b>Accessibility</b>',
          '<b>Design for developers</b>',
          '<b>Version control</b>'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Reading MDN&rsquo;s own promise',
          left: [
            'The list above is MDN&rsquo;s core module sequence. We like that MDN aims for "comfortable", not "expert". It is an honest goal, and it matches what an intensive can achieve for a teenager.',
            'Notice where version control sits: last in the list. In our plan it moves to the middle, because a teen who commits from week five never loses a day of work again.'
          ],
          rightH3: 'Why teens still take a live course',
          right: [
            'Free curricula are excellent and self-paced, and self-paced is exactly where most teens stall. The material is not the hard part; the rhythm, the feedback and the deadline are.',
            'Our bootcamp follows the same ground with a teacher who reviews every commit. Students are free, and encouraged, to use MDN and Odin alongside it.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://developer.mozilla.org/en-US/docs/Learn_web_development" rel="noopener" target="_blank">MDN Learn web development</a>, <a class="ag-inline-link" href="https://www.theodinproject.com/about" rel="noopener" target="_blank">The Odin Project about page</a> and <a class="ag-inline-link" href="https://www.theodinproject.com/paths" rel="noopener" target="_blank">paths page</a>, read 17 October 2026. Modern Age Coders is not connected with Mozilla or The Odin Project.' }
      ]
    },
    {
      id: 'ages', tint: 'tint', eyebrow: 'Age rules',
      h2: 'The age rules every teen bootcamp runs into',
      lede: 'A bootcamp uses accounts on real platforms, and those platforms set their own minimum ages. These are the lines published by the services a web bootcamp is most likely to use.',
      body: [
        { kind: 'table', caption: 'Minimum ages on platforms and communities a teen bootcamp uses, from their own pages (read 17 October 2026)', head: ['Service', 'What its page says'], rows: [
          ['GitHub (Terms of Service)', '"A User must be at least 13 years of age"'],
          ['GitHub Education (student benefits)', 'Applicants must be "at least 13 years old" and enrolled in a program "such as a high school, college, university, or homeschool"'],
          ['Hack Club', 'Open to all teens aged 13 to 18; it describes itself as "the world&rsquo;s largest nonprofit movement of teenagers making cool projects"']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What 13 means in practice',
          left: [
            'A teen of 13 or older can hold a GitHub account under its terms, which is why our bootcamp starts at 13. Younger students learn the same ideas with a teacher&rsquo;s demonstration account instead of their own.',
            'GitHub&rsquo;s student application explicitly includes homeschool enrolment, so homeschooled teens are not left out of the student benefits.'
          ],
          rightH3: 'AI tools and age',
          right: [
            'Many AI coding assistants set their own minimum ages, and some are for adults only. A bootcamp for under-18s should list the tools it uses and check each one&rsquo;s terms, with a parent aware of every account.',
            'In our classes, the code a teen commits is code they wrote and can explain. That rule matters more than any tool choice.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://docs.github.com/en/site-policy/github-terms/github-terms-of-service" rel="noopener" target="_blank">GitHub Terms of Service</a>, <a class="ag-inline-link" href="https://docs.github.com/en/education/about-github-education/github-education-for-students/apply-to-github-education-as-a-student" rel="noopener" target="_blank">GitHub Education student application</a>, <a class="ag-inline-link" href="https://hackclub.com/" rel="noopener" target="_blank">Hack Club</a>. We are not connected with GitHub or Hack Club.' }
      ]
    },
    {
      id: 'git', tint: 'deep', eyebrow: 'Real Git',
      h2: 'The Git commands a teen bootcamp should teach, and why',
      lede: 'If a bootcamp teaches only one professional habit, it should be version control. The Pro Git book explains the idea in one heading: "Snapshots, Not Differences".',
      body: [
        { kind: 'code', label: 'Commands &middot; one project, two snapshots, one branch', lang: 'shell', code: GIT, note: 'Every command here is standard Git. The sequence and the project are ours, from week five of the plan below.' },
        { kind: 'code', label: 'Output &middot; the history the student now owns', lang: 'text', code: LOG, note: 'Two commits, newest first. Each line is one snapshot the student can return to at any time.' },
        { kind: 'two', mt: true,
          leftH3: 'Snapshots, explained',
          left: [
            'The Pro Git book says Git "thinks of its data more like a series of snapshots of a miniature filesystem". Each commit is a photograph of the whole project at that moment, not a list of edits.',
            'The same chapter describes three main states for a file: modified, staged and committed. The add command moves a change to staged; commit takes the photograph.'
          ],
          rightH3: 'Why we teach branches early',
          right: [
            'The switch command with -c creates a branch, a safe copy of the timeline to experiment on. If the dark colour scheme breaks the layout, the main branch is untouched.',
            'Teens who learn this in week five stop being afraid to try things. That confidence is worth more to an intensive than any single framework.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F" rel="noopener" target="_blank">Pro Git, What is Git?</a>, read 17 October 2026.' }
      ]
    },
    {
      id: 'eight', tint: 'tint', eyebrow: 'Eight weeks',
      h2: 'Our eight-week teen bootcamp plan',
      lede: 'This is the plan our teachers run live online. It assumes about ten hours a week: three live lessons of 90 minutes (4.5 hours) and about 5.5 hours of building between them.',
      body: [
        { kind: 'table', caption: 'Eight weeks to a deployed project (our plan)', head: ['Week', 'Focus', 'Finished when'], rows: [
          ['1', 'HTML structure', 'A personal page with headings, lists, links and images'],
          ['2', 'CSS and layout', 'The page looks right on a phone and a laptop'],
          ['3', 'JavaScript basics', 'A button that changes the page, written without copying'],
          ['4', 'JavaScript with data', 'A small quiz or tracker that stores its state'],
          ['5', 'Git and GitHub', 'The project on GitHub with clear commit messages and one merged branch'],
          ['6', 'Capstone build', 'A one-page plan and the core feature working'],
          ['7', 'Testing and accessibility', 'Three people outside the class used it; their problems fixed'],
          ['8', 'Deploy and demo', 'A live link and a five-minute demo explaining the code']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Ages 13 and 14', p: 'The plan as written, at a steady pace, with a small capstone.' },
          { h3: 'Ages 15 and 16', p: 'A larger capstone, and a first look at a framework in week six.' },
          { h3: 'Ages 17 and 18', p: 'A front end plus a simple server, ready to show on an application.' }
        ] },
        { kind: 'p', mt: true, html: 'Our arithmetic: ten hours a week for eight weeks is 80 hours. For comparison, a one-semester high school elective that meets 50 minutes a day, five days a week, for 18 weeks (our assumption of a common timetable) is 75 hours. The bootcamp packs a semester&rsquo;s time into two months, which is why it works best in summer or in a lighter school term.' }
      ]
    },
    {
      id: 'or-not', tint: 'deep', eyebrow: 'Is it right',
      h2: 'Bootcamp, regular weekly classes or a free curriculum?',
      lede: 'An intensive is not always the right shape. This is how we help families choose; it is our view, and every option on it can work.',
      body: [
        { kind: 'table', caption: 'Choosing a format (our guidance)', head: ['If your teen...', 'A good fit'], rows: [
          ['Has a free summer and a project in mind', 'An eight-week bootcamp'],
          ['Has a busy school year and wants steady progress', 'Weekly classes all year'],
          ['Works well alone and likes reading', 'MDN or The Odin Project, with occasional mentor check-ins'],
          ['Wants to build with friends', 'A Hack Club or a hackathon, alongside classes'],
          ['Is aiming at AP Computer Science', 'Weekly classes that follow the AP course']
        ] },
        { kind: 'p', mt: true, html: 'For building on a deadline with a team, see our page on <a class="ag-inline-link" href="/hackathons-for-high-school-students">hackathons for high school students</a>. For how a bootcamp fits into a wider record, see <a class="ag-inline-link" href="/computer-science-extracurriculars">computer science extracurriculars</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your teen is now',
    h2: 'Four levels on the way through a bootcamp',
    lede: 'The levels our teachers use to place a teen on day one.',
    table: { caption: 'Teen bootcamp levels (ours)', head: ['Level', 'What it looks like'], rows: [
      ['1. Starter', 'Has used blocks or followed tutorials, no projects of their own'],
      ['2. Scripter', 'Writes short programs, still copies most structure'],
      ['3. Builder', 'Builds a small site or app alone, uses Git with help'],
      ['4. Shipper', 'Plans, builds, commits, deploys and explains a project']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask to see the commit history, not only the finished page. It shows whether the work happened steadily.',
      'Level 1 to level 3 in eight weeks is a strong result. Level 4 usually needs a second project.'
    ] },
    right: { h3: 'For teens', ps: [
      'Commit small and often. A message per change is a diary of what you learned.',
      'If you cannot explain a line, it is not yours yet. Rewrite it until you can.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses to build a teen bootcamp from',
    lede: 'Every course is taught live online by the same teacher each week, in a batch or one to one, and can be run at bootcamp pace.',
    bands: [
      { num: 'I', h3: 'Foundations', sub: 'Ages 13 to 15', courses: [
        { code: 'BT / BASE / 01', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'The language of the web.' },
        { code: 'BT / BASE / 02', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'A second language, for logic.' },
        { code: 'BT / BASE / 03', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub', blurb: 'Snapshots and branches.' }
      ] },
      { num: 'II', h3: 'Build and ship', sub: 'Ages 14 to 18', courses: [
        { code: 'BT / SHIP / 01', slug: 'full-stack-web-development-teens-masterclass', title: 'Full stack web', blurb: 'Front end, server, deploy.' },
        { code: 'BT / SHIP / 02', slug: 'react-for-teens-complete-masterclass', title: 'React for teens', blurb: 'Interfaces made of components.' },
        { code: 'BT / SHIP / 03', slug: 'complete-app-development-masterclass-for-teens', title: 'App development', blurb: 'Mobile apps in React Native.' }
      ] },
      { num: 'III', h3: 'Sharpen', sub: 'Strong coders', courses: [
        { code: 'BT / SHARP / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving', blurb: 'Data structures and algorithms.' },
        { code: 'BT / SHARP / 02', slug: 'hackathon-prep-for-teens-coding-ai-build-innovate-win-course', title: 'Hackathon prep', blurb: 'Teams, scope and deadlines.' },
        { code: 'BT / SHARP / 03', slug: 'ap-computer-science-a-java-exam-prep-course', title: 'AP Computer Science A', blurb: 'Java and the exam.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'An intensive that still fits a teenager&rsquo;s week',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Three lessons a week after school in your time zone.' },
      { time: 'Weekends', l: 'Longer weekend sessions when weekdays are full.' },
      { time: '1-on-1', l: 'The eight weeks paced to one teen&rsquo;s project.' }
    ],
    cells: [
      { h3: 'Ten hours a week', p: 'Lessons plus build time, planned together.' },
      { h3: 'Commit reviews', p: 'The teacher reads the history, not just the result.' },
      { h3: 'One capstone', p: 'Chosen by the teen in week six.' },
      { h3: 'Demo day', p: 'A live link and a five-minute walkthrough.' },
      { h3: 'From anywhere', p: 'Any US state, any laptop with a browser.' },
      { h3: 'Batch or one to one', p: 'Fifteen to twenty in a batch, or private.' }
    ]
  },

  projectsH2: 'What our teen students have deployed',
  projectsLede: 'A selection of real work by our learners. The <a class="ag-inline-link" href="/student-labs">student labs</a> page collects many more.',
  reviewsLede: 'Reviews from parents on Google, left exactly as posted.',

  fees: {
    h2: 'Fees',
    lede: 'The bootcamp is billed as two months of classes, charged one month at a time in US dollars. There is no enrolment fee and nothing to sign beyond the month you are in.',
    free: ['A free first lesson', 'A placement check', 'No card details'],
    group: ['Fifteen to twenty learners', 'One regular teacher', 'Choose your batch', 'Monthly'],
    one: ['A mentor to yourself', 'Your project, your pace', 'Timed around school']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'Coding bootcamp for teens: common questions',
    items: [
      { q: 'What is a coding bootcamp for teens?', a: 'An intensive block of project-based coding, usually a few weeks to a few months, that ends with something built, deployed and explained. For teens it should fit around school and promise skills, not jobs.' },
      { q: 'Will a bootcamp get my teen a job?', a: 'We make no job or salary promises, and families should be wary of any teen program that does. What a good intensive gives a teen is real skills, a finished project and professional habits such as version control.' },
      { q: 'How old does my teen need to be?', a: 'Our bootcamp starts at 13. GitHub\'s Terms of Service say a user must be at least 13 years of age, and the teen will need their own GitHub account from week five.' },
      { q: 'Are there free coding curricula for teens?', a: 'Yes. MDN Learn web development offers structured core modules aimed at taking learners from beginner to comfortable, and The Odin Project describes itself as a free open source curriculum taken entirely online.' },
      { q: 'Can homeschooled teens get GitHub student benefits?', a: 'GitHub\'s student application lists homeschool alongside high school, college and university as eligible programs, for students at least 13 years old. Check the current page when applying.' },
      { q: 'How many hours a week does your bootcamp take?', a: 'About ten: three live lessons of 90 minutes and roughly five and a half hours of building. Over eight weeks that comes to 80 hours.' },
      { q: 'What will my teen have at the end?', a: 'A deployed project with a live link, a GitHub history showing steady work, and a five-minute demo in which they explain their own code.' },
      { q: 'When are classes held?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Is a bootcamp better than weekly classes?', a: 'Neither is better in general. A bootcamp suits a free summer and a clear project; weekly classes suit a busy school year. Some teens do a summer intensive and then keep going weekly.' },
      { q: 'Can my teen use AI tools during the bootcamp?', a: 'Only tools whose terms allow the teen\'s age, with a parent aware of the account. Our rule is that every committed line must be one the teen can explain.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for teens who want to build fast and well.',
    items: [
      { href: '/summer-coding-camp-teens', label: 'Summer coding camp for teens', p: 'Our general summer program.' },
      { href: '/hackathons-for-high-school-students', label: 'Hackathons for high schoolers', p: 'Teams on a deadline.' },
      { href: '/computer-science-extracurriculars', label: 'CS extracurriculars', p: 'Where an intensive fits.' },
      { href: '/congressional-app-challenge-guide', label: 'Congressional App Challenge', p: 'A capstone with a real audience.' },
      { href: '/coding-for-16-year-olds', label: 'Coding for 16 year olds', p: 'What this age can build.' },
      { href: '/real-coding-classes', label: 'Real coding classes', p: 'How we teach code that is understood.' },
      { href: '/homeschool-computer-science-high-school-credit', label: 'Homeschool CS high school credit', p: 'Homeschool CS credit in NY, PA and TX, from the state sources, with a template.' },
      { href: '/ai-summer-programs-for-high-school-students', label: 'AI summer programs for high school students', p: 'AI summer programs for US high schoolers in 2027, and an eight-week AI summer you can run at home.' },
      { href: '/computer-science-summer-programs-for-high-school-students', label: 'CS summer programs for high school students', p: 'Four CS summer programs for high schoolers, from their own 2027 pages.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'The first lesson is a placement check: the teacher sees what your teen can already build, places them on the four levels, and suggests whether the eight-week intensive or weekly classes suits them better.',
    readFirst: 'Want the detail first? Our <a class="ag-inline-link" href="/how-we-teach">teaching approach</a> is laid out step by step, and the <a class="ag-inline-link" href="/courses">full catalogue</a> lists every syllabus.',
    note: 'We teach live by video from India, so there is no campus. A WhatsApp message is the quickest route for families in the US.',
    formNote: 'Free placement lesson. No card asked for.'
  },

  footer: {
    cols: [
      { h4: 'Build fast', links: [
        { href: '/hackathons-for-high-school-students', label: 'High school hackathons' },
        { href: '/summer-coding-camp-teens', label: 'Teen summer camp' },
        { href: '/real-coding-classes', label: 'Real coding classes' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/ap-computer-science-a-online-classes', label: 'AP Computer Science A' },
        { href: '/ap-computer-science-principles-online-coaching', label: 'AP CS Principles' },
        { href: '/congressional-app-challenge-guide', label: 'Congressional App Challenge' }
      ] }
    ],
    bottomRight: 'Commit small, commit often'
  },

  personalityCss: `
.ag-root.ag-bt .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-bt .ag-capsule { border-left-width: 6px; border-radius: 1px; }
.ag-root.ag-bt .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-bt .ag-table caption { text-align: left; letter-spacing: 0.01em; }
.ag-root.ag-bt .ag-steps { gap: 0.6rem; }
.ag-root.ag-bt .ag-slots { gap: 1.25rem; }
`,

  dossier: {
    curriculumAuthority: 'Hack Club home and philosophy pages; MDN Learn web development (core modules, beginner to comfortable, extension modules, module names); The Odin Project about and paths pages (free open source, entirely online, Foundations then Full Stack JavaScript or Ruby on Rails, taken in order); Pro Git, What is Git? (snapshots, three states); GitHub Terms of Service (at least 13); GitHub Education student application (at least 13, high school, college, university or homeschool). All read raw on 17 October 2026.',
    localProject: 'Our eight-week teen bootcamp plan (10 hours a week, 80 hours), our Git command sequence and sample log, our format-choice table, and our comparison with a 75-hour semester elective (50 minutes x 5 days x 18 weeks, our timetable assumption). Lesson family: version control and shipping.',
    requiredMentions: ['nonprofit movement of teenagers making cool projects', 'structured set of tutorials teaching the essential skills and practices for being a successful front-end developer', 'Dynamic scripting with JavaScript', 'The Odin Project provides a free open source coding curriculum that can be taken entirely online.', 'The courses should be taken in the order that they are displayed.', 'Snapshots, Not Differences', 'series of snapshots of a miniature filesystem', 'A User must be at least 13 years of age', 'high school, college, university, or homeschool', 'git switch -c dark-mode', 'is 80 hours', 'is 75 hours'],
    sources: [
      { claim: 'Hack Club: teens 13 to 18; nonprofit movement of teenagers.', url: 'https://hackclub.com/' },
      { claim: 'MDN Learn web development: core modules, stated level, module names.', url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development' },
      { claim: 'The Odin Project: free open source curriculum, entirely online.', url: 'https://www.theodinproject.com/about' },
      { claim: 'The Odin Project paths: Foundations, two full stack paths, fixed order.', url: 'https://www.theodinproject.com/paths' },
      { claim: 'Pro Git: snapshots, not differences; three states.', url: 'https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F' },
      { claim: 'GitHub Terms of Service: at least 13 years of age.', url: 'https://docs.github.com/en/site-policy/github-terms/github-terms-of-service' },
      { claim: 'GitHub Education: at least 13, homeschool eligible.', url: 'https://docs.github.com/en/education/about-github-education/github-education-for-students/apply-to-github-education-as-a-student' }
    ],
    rejectedClaims: [
      'Adult bootcamp age and admission rules: Hack Reactor\'s FAQ returned 403; App Academy and Flatiron School FAQ URLs returned 404. No adult bootcamp is named or described from its own page.',
      'Bootcamp job placement or salary figures: refused; the page makes no job or salary promise.',
      'An official definition of a coding bootcamp: none found, so the comparison table is labelled as our description.',
      'Hack Club program details beyond its home and philosophy pages: not used.',
      'That our bootcamp improves admission or employment chances: refused.'
    ]
  }
};
