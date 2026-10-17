'use strict';
// Khan Academy computer science vs live classes (ag- tools comparison; US cluster Phase T, row 152).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md; plan docs/superpowers/plans/2026-10-17-us-cluster-build.md.
// Search evidence (autocomplete_tools.tsv): khan academy computer science / python / ap / course / for kids / reddit;
// is khan academy good for computer science; is khan academy free; khan academy computer programming javascript and
// the web; code.org vs khan academy. (autocomplete_us.tsv: coding for kids khan academy; ap computer science khan.)
// A format comparison, written warmly: self-paced practice against a live teacher. No disparagement, no prices.
// Not twinned: /live-vs-recorded-coding-classes (general); this page is about Khan Academy's own course design.
// Sources, read raw with curl on 17 October 2026. www.khanacademy.org returned a JavaScript "Client Challenge" page and
// support.khanacademy.org returned HTTP 403; neither was retried. Every Khan fact below is from Khan Academy's own blog,
// blog.khanacademy.org (copies in keyword-research-2026-09/us/src/khan-academy-computer-science-vs-live-classes/):
//  - blog home: "the nonprofit that helps learners, teachers, and districts accelerate learning"; "As a nonprofit, we
//    need your support to provide a free, world-class education to anyone, anywhere."
//  - "Introducing Khan Academy's New Intro to Computer Science Course with Python" (August 15, 2024, updated March 20,
//    2025): "teaches the fundamentals of programming in Python"; "for the 2024-25 school year"; projects "From building
//    recommendation engines to modeling infectious diseases to templating web pages"; unit themes "simulations, data
//    science, or game design"; "scaffolded instructions and continuous, automated feedback"; "Our CS community allows
//    learners to seek help from expert volunteers"; "program gallery"; "custom, web-based development environment";
//    "works across devices"; "Sign up for this course for FREE".
//  - "Empower Your Students with Our Python Course for High School Teachers" (September 9, 2025): "newly completed";
//    "auto-graded programming challenges"; "sample solutions are just a click away"; "100+ example programs"; "no
//    installation required"; "paired worked example videos".
//  - "Why Computer Science Students Struggle: The Case for Mastery Learning" (May 7, 2026): "Computer science education
//    has a mastery problem."; Exercises, then Challenges, then Projects; "We trace code step by step, practice
//    debugging, and study worked examples"; projects on an infectious disease, an ad-targeting system, a cipher.
//  - "Khan Academy Goes Way Beyond Math" (August 6, 2024): free content updates incl. the Introduction to Python course;
//    TEKS-aligned math and science courses for Texas.
// The course's official title contains an en dash, so the page describes the course instead of quoting the title.
// Not printed: Khanmigo and its price (an AI tutor; its age terms were not readable), Khan Academy's age rules, its AP
// course list and any JavaScript course (none confirmed on pages we could read). No staff are named.
// Our own material, labelled: the comparison table's right-hand column, the decision questions, the weekly plan and the
// tracing exercise (Python range per docs.python.org: contents satisfy r[i] < stop; 1 + 2 + 3 + 4 = 10).
// Lesson family: tracing before running (predict, run, compare).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const TRACE = `# Trace it on paper first, then run it (ours)
total = 0
for n in range(1, 5):
    total = total + n
    print(n, total)

# Your prediction, line by line:
# n = ?   total = ?
# n = ?   total = ?
# n = ?   total = ?
# n = ?   total = ?`;

const TRACE_ANSWER = `# What Python prints
1 1
2 3
3 6
4 10`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'KHAN ACADEMY OR LIVE CLASSES', blurb: 'Khan Academy computer science or a live coding teacher? What the free Khan Academy Python course offers, where self-paced works, and where a teacher helps.' },
  slug: 'khan-academy-computer-science-vs-live-classes',
  code: 'kacs',
  accent: '#9E182A',
  accentRationale: 'Khan Academy vs live classes, US: a brick crimson #9E182A from the US allocation sheet (row 152), warm rather than combative for a fair comparison page, far from the blues of the other US tools pages',
  pageType: 'market',
  market: US,
  routeLabel: 'Khan Academy CS vs live classes',
  title: 'Khan Academy Computer Science vs Live Classes: How to Choose',
  description: 'Khan Academy computer science or live coding classes? What the free Python course offers, when self-paced practice is enough, and when a live teacher helps more.',
  ogDescription: 'The free, self-paced Khan Academy Python course is excellent for many students. A fair look at its design, when it is enough, and when a live teacher adds more.',
  twitterDescription: 'Khan Academy CS or live classes? A fair comparison, built from Khan Academy descriptions of its course.',
  pageName: 'Khan Academy Computer Science vs Live Classes',
  webPageDescription: 'A fair comparison for US families between free, self-paced Khan Academy computer science and live coding classes with a teacher, built from the descriptions Khan Academy publishes.',
  courseDescription: 'Live online coding classes for US students, in Python and other languages, taught by a regular teacher in a batch or one to one, alongside or after self-paced study.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Khan Academy CS vs live classes',
  navLinks: [
    { href: '#khan', label: 'What Khan offers' },
    { href: '#compare', label: 'Side by side' },
    { href: '#enough', label: 'When it is enough' },
    { href: '#teacher', label: 'When a teacher helps' },
    { href: '#both', label: 'Using both' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grades 6 to 12 &middot; A fair comparison',
  h1: 'Khan Academy computer science vs live classes',
  lede: 'Many American families know Khan Academy from math homework, and some first meet its computing course through a teacher&rsquo;s assignment. Its free Python course is thoughtfully built, and for many students it is all they need to get started. So the honest question is not which is better, but which format suits your child right now: free practice they pace themselves, or a live teacher who sets the pace with them. This page describes what Khan Academy says about its own computer science course, compares the two formats criterion by criterion, and suggests how to use both.',
  secondaryCta: { href: '#compare', label: 'See the comparison' },
  wa: 'Hello Modern Age Coders, my child in the US has been using Khan Academy for coding. Could a live teacher help in a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Both formats have a place',
  spec: [
    ['For', 'Grades 6 to 12'],
    ['Comparing', 'Self-paced vs live teacher'],
    ['Khan Academy', 'Free, nonprofit, online'],
    ['Its CS course', 'Python, auto-graded'],
    ['Live classes', 'Batch or one to one'],
    ['Our view', 'Use both, in order'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Khan Academy&rsquo;s computer science is free, self-paced and well designed: a Python course with auto-graded challenges, instant feedback and a browser-based editor. It suits motivated students who work steadily alone. A live class suits students who stall without someone to explain, check and set the pace. Many families use Khan Academy for practice and a teacher for direction.',

  picks: {
    eyebrow: 'If you add a teacher',
    h2: 'Three live courses that pair well with Khan Academy',
    lede: 'Each covers ideas a self-paced course also teaches, and adds a person who follows your child&rsquo;s progress week to week.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'KACS / 01', title: 'Python for teens', note: 'Teens, 13 to 18: the same language, now with a teacher and their own projects.' },
      { course: 'python-ai-kids-masterclass', code: 'KACS / 02', title: 'Python and AI for kids', note: 'Younger learners, 9 to 12, who do better with a guide beside them.' },
      { course: 'ap-computer-science-principles-exam-prep-course', code: 'KACS / 03', title: 'AP CSP preparation', note: 'High school. The College Board course, taught live.' }
    ]
  },

  sections: [
    {
      id: 'khan', tint: 'tint', eyebrow: 'What Khan Academy offers',
      h2: 'What Khan Academy says about its computer science course',
      lede: 'Khan Academy describes itself as a nonprofit whose aim is a free, world-class education for anyone, anywhere. For computing, its blog highlights an introductory computer science course in Python. Everything in this table comes from Khan Academy&rsquo;s own blog.',
      body: [
        { kind: 'table', caption: 'Khan Academy&rsquo;s Intro to Computer Science course in Python, from blog.khanacademy.org (posts dated as shown, read 17 October 2026)', head: ['Point', 'What Khan Academy says', 'Post'], rows: [
          ['Language and level', 'Teaches the fundamentals of programming in Python, for beginner classrooms', 'August 15, 2024'],
          ['Cost', '"Sign up for this course for FREE"', 'August 15, 2024'],
          ['Feedback', 'Scaffolded instructions with continuous, automated feedback', 'August 15, 2024'],
          ['Setup', 'A custom, web-based development environment that works across devices, with no installation required', 'September 9, 2025'],
          ['Projects', 'Recommendation engines, modeling infectious diseases, templating web pages', 'August 15, 2024'],
          ['Practice design', 'Exercises (tracing code), then Challenges (scaffolded practice), then Projects', 'May 7, 2026'],
          ['Examples', '100+ example programs, with paired worked example videos', 'September 9, 2025'],
          ['Help', 'A CS community where learners can ask expert volunteers, and a program gallery', 'August 15, 2024'],
          ['For teachers', 'Auto-graded challenges and sample solutions "just a click away"', 'September 9, 2025']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'A course built around mastery',
          left: [
            'In May 2026, Khan Academy&rsquo;s computer science team published a short essay arguing that "Computer science education has a mastery problem": students pass courses, then stall in front of an unfamiliar problem. Its answer is to revisit each skill across contexts with gradually less support.',
            'That is a serious, research-minded design, and we agree with much of it. Tracing code before writing it, practicing debugging and studying worked examples are all things we do in live classes too.'
          ],
          rightH3: 'What we could not check',
          right: [
            'We could not read Khan Academy&rsquo;s catalog or help pages when writing this, so we have not confirmed its current course list, its age rules or any AP computing course.',
            'If your child is looking for a specific course, such as AP Computer Science Principles, check khanacademy.org directly; it changes over time. We are not connected with Khan Academy.'
          ] },
        { kind: 'source', html: 'Sources: Khan Academy blog posts <a class="ag-inline-link" href="https://blog.khanacademy.org/introducing-khan-academys-new-intro-to-computer-science-course-with-python/" rel="noopener" target="_blank">introducing the course</a> (2024), <a class="ag-inline-link" href="https://blog.khanacademy.org/empower-your-students-with-our-python-course-for-high-school-teachers/" rel="noopener" target="_blank">the completed course for teachers</a> (2025) and <a class="ag-inline-link" href="https://blog.khanacademy.org/why-computer-science-students-struggle-the-case-for-mastery-learning/" rel="noopener" target="_blank">the case for mastery learning</a> (2026), read 17 October 2026.' }
      ]
    },
    {
      id: 'compare', tint: 'deep', eyebrow: 'Side by side',
      h2: 'Self-paced Khan Academy and a live class, criterion by criterion',
      lede: 'This table compares formats, not quality. The left column is Khan Academy&rsquo;s own description; the right column is how our live classes work. Neither is right for every child.',
      body: [
        { kind: 'table', caption: 'Two formats compared (Khan Academy facts from its blog, read 17 October 2026; live-class column ours)', head: ['Criterion', 'Khan Academy computer science', 'A live class with us'], rows: [
          ['Cost', 'Free', 'A free first lesson, then monthly fees in US dollars'],
          ['Pace', 'Set by the student', 'Set by the teacher with the student'],
          ['Feedback on code', 'Automated, instant, on each challenge', 'From a teacher, live, on the student&rsquo;s own project'],
          ['When stuck', 'Hints, worked example videos, volunteer community', 'Ask the teacher in the moment'],
          ['Language', 'Python (the intro course)', 'Python, JavaScript, Java, C++, Scratch and more'],
          ['Projects', 'Set themes: simulations, data, games', 'Chosen with the student, often their own idea'],
          ['Setup', 'Browser-based, no installation', 'Browser plus video call; some courses install tools'],
          ['Group', 'Studying alone, or in a class a teacher assigns', 'A batch of fifteen to twenty, or one to one'],
          ['Schedule', 'Any time', 'Weekdays or weekends, flexible']
        ] },
        { kind: 'p', mt: true, html: 'Both formats share the same goal, a student who can write and explain their own code. The differences are about who notices when that is not happening yet, and how quickly.' }
      ]
    },
    {
      id: 'enough', tint: 'tint', eyebrow: 'When it is enough',
      h2: 'When Khan Academy on its own is a good choice',
      lede: 'For a lot of students, free self-paced practice is exactly right. These are the signs.',
      body: [
        { kind: 'ol', items: [
          '<b>Your child finishes things alone.</b> Students who already work steadily through homework without reminders do well with self-paced courses.',
          '<b>They read the hints.</b> Automated feedback only helps a student who reads it carefully and tries again, rather than guessing.',
          '<b>They want to explore first.</b> A free course is an easy way to find out whether programming is interesting before spending anything.',
          '<b>A school teacher is already guiding it.</b> If a teacher has assigned the course and checks progress, much of what a tutor adds is already there.',
          '<b>The goal is foundations, not a deadline.</b> With no exam, competition or project date to hit, there is no reason to hurry.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Our honest advice',
          left: [
            'If your child is 13 or older, curious and organized, start with the free course. Give it a month. If they are moving through it and can explain what they built, you may not need us at all.',
            'Come back if the progress stops. That is a normal moment, not a failure, and it is often the moment a teacher is most useful.'
          ],
          rightH3: 'A note for younger children',
          right: [
            'Self-paced courses ask a child to read instructions, manage their own time and stay calm when stuck. Many middle schoolers can; many younger children find it hard without an adult nearby.',
            'For a child under about 11, a parent sitting alongside for the first weeks, or a live class, can make the difference between a course started and a course finished.'
          ] }
      ]
    },
    {
      id: 'teacher', tint: 'deep', eyebrow: 'When a teacher helps',
      h2: 'When a live teacher adds something self-paced study cannot',
      lede: 'Khan Academy&rsquo;s own essay names the problem a teacher solves well: students who complete the work and still freeze in front of a new problem. Here is when that shows up.',
      body: [
        { kind: 'table', caption: 'Signs a student would benefit from a live teacher (ours)', head: ['What you notice', 'What is probably happening', 'What a teacher does'], rows: [
          ['Challenges pass, but a blank page freezes them', 'Completing scaffolded steps without building a plan', 'Starts from the problem and plans the program aloud with them'],
          ['Progress stopped weeks ago', 'Stuck on one idea and too embarrassed to ask', 'Finds the gap and reteaches it'],
          ['They copy hints until something passes', 'Guessing rather than reasoning', 'Asks them to predict output before running'],
          ['A deadline is coming', 'An AP exam, competition or project date', 'Sets a plan with weekly targets'],
          ['They want to build their own idea', 'The set projects no longer match their interest', 'Turns their idea into a project plan']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What we do differently',
          left: [
            'A teacher watches the student code. That sounds small, but it means seeing the hesitation before an error, the habit of deleting everything, the moment of guessing. Automated feedback can only see the code that is submitted.',
            'A teacher also asks why. Students who must explain their code to a person, out loud, learn to reason about it, which is the mastery Khan Academy&rsquo;s essay describes.'
          ],
          rightH3: 'What we do not do',
          right: [
            'We never complete graded assignments for students, on Khan Academy or anywhere else. If a school has assigned a challenge, we teach the idea behind it and the student solves it.',
            'We do not replace a school course. Our classes sit alongside it, as tutoring, enrichment or a next step.'
          ] }
      ]
    },
    {
      id: 'trace', tint: 'tint', eyebrow: 'Try it',
      h2: 'A tracing exercise, in the style both formats use',
      lede: 'Khan Academy&rsquo;s course starts each concept with Exercises in which students trace code; our teachers do the same thing live. Try this one with your child. It is ours, and it uses only standard Python.',
      body: [
        { kind: 'code', label: 'Exercise &middot; predict before you run', lang: 'python', code: TRACE, note: 'The Python documentation says the numbers in a range are start plus multiples of the step, while they stay below stop. So range(1, 5) gives 1, 2, 3 and 4, but not 5.' },
        { kind: 'code', label: 'Answer &middot; what Python prints', lang: 'output', code: TRACE_ANSWER, note: 'Our arithmetic: the running total after four steps is 1 + 2 + 3 + 4 = 10.' },
        { kind: 'two', mt: true,
          leftH3: 'If your child got it right',
          left: [
            'They can read a loop, which is the skill self-paced courses build first. Ask them to change range(1, 5) to range(1, 11) and predict the final total before running it. (It is 55.)',
            'A student who can predict confidently is ready for writing their own loops, on Khan Academy or in a class.'
          ],
          rightH3: 'If they got 5 as the last number',
          right: [
            'It is an easy mistake to make with range, and a useful one. Point them to the stop rule above, then have them trace again.',
            'If the same kind of misunderstanding keeps coming back across several exercises, that is a sign a live explanation would save time.'
          ] }
      ]
    },
    {
      id: 'both', tint: 'deep', eyebrow: 'Using both',
      h2: 'A weekly plan that uses Khan Academy and a live class together',
      lede: 'Our suggested rhythm for a middle or high school student who wants the free practice and a teacher. Adjust the minutes to your child.',
      body: [
        { kind: 'table', caption: 'One week, two formats (ours)', head: ['Day', 'Format', 'What happens'], rows: [
          ['Monday', 'Khan Academy, 30 minutes', 'New concept: Exercises and the first Challenges'],
          ['Wednesday', 'Live class, about an hour', 'The teacher checks understanding and starts a project that uses the concept'],
          ['Friday', 'Khan Academy, 30 minutes', 'More Challenges on the same concept'],
          ['Weekend', 'Own project, any length', 'Add one feature to the class project and bring questions']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Grades 6 to 8', p: 'More live time, less solo time. The teacher helps build the habit of reading instructions and hints carefully.' },
          { h3: 'Grades 9 and 10', p: 'The plan above. Khan Academy supplies practice volume; class supplies explanation and projects.' },
          { h3: 'Grades 11 and 12', p: 'Mostly self-directed, with live sessions aimed at AP exams, competitions or a portfolio project.' }
        ] },
        { kind: 'p', mt: true, html: 'For more on choosing a format in general, see our page on <a class="ag-inline-link" href="/live-vs-recorded-coding-classes">live vs recorded coding classes</a> and our post on <a class="ag-inline-link" href="/blog/group-vs-1-on-1-coding-classes">group vs 1-on-1 classes</a>. Homeschooling families can also read our <a class="ag-inline-link" href="/homeschool-coding-curriculum">homeschool coding curriculum</a> guide.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Deciding',
    h2: 'Five questions to choose between the two',
    lede: 'Answer these about your child. Mostly yes to the first three points to self-paced; mostly yes to the last two points to a teacher.',
    table: { caption: 'A quick decision guide (ours)', head: ['Question', 'If yes'], rows: [
      ['Do they finish work without reminders?', 'Self-paced will likely work'],
      ['Do they read error messages and hints before asking?', 'Self-paced will likely work'],
      ['Is this mainly to explore whether they like coding?', 'Start free'],
      ['Have they been stuck on the same idea for two weeks?', 'A teacher will help'],
      ['Is there a deadline, such as an AP exam or competition?', 'A teacher will help']
    ] },
    left: { h3: 'For parents', ps: [
      'There is no wrong answer here, and choosing one does not rule out the other: free practice fits well beside live classes.',
      'Ask your child to show you something they built. What they can explain matters more than how many units they completed.'
    ] },
    right: { h3: 'For students', ps: [
      'If you are stuck, say so early, to a teacher, a parent or the course community. Waiting makes it harder.',
      'Predict before you run. It is the fastest way to find out what you really understand.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalog',
    h2: 'Nine live courses for students who began self-paced',
    lede: 'Taught live online by one regular teacher, in a group or privately.',
    bands: [
      { num: 'I', h3: 'Python and beyond', sub: 'Ages 9 to 18', courses: [
        { code: 'KACS / PY / 01', slug: 'python-ai-kids-masterclass', title: 'Python for kids', blurb: 'Guided first steps.' },
        { code: 'KACS / PY / 02', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Projects with a teacher.' },
        { code: 'KACS / PY / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Python with real data.' }
      ] },
      { num: 'II', h3: 'AP and exams', sub: 'High school', courses: [
        { code: 'KACS / AP / 01', slug: 'ap-computer-science-principles-exam-prep-course', title: 'AP CSP preparation', blurb: 'The College Board CSP course.' },
        { code: 'KACS / AP / 02', slug: 'ap-computer-science-a-java-exam-prep-course', title: 'AP CS A preparation', blurb: 'Java, from the basics.' },
        { code: 'KACS / AP / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving and DSA', blurb: 'Thinking through new problems.' }
      ] },
      { num: 'III', h3: 'Other languages', sub: 'Ages 9 to 18', courses: [
        { code: 'KACS / LNG / 01', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'The web, interactive.' },
        { code: 'KACS / LNG / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Objects and structure.' },
        { code: 'KACS / LNG / 03', slug: 'kids-ai-web-development-course', title: 'Web development for kids', blurb: 'Sites built by hand.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Class times',
    h2: 'Live classes that fit beside self-paced study',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'One live session a week beside self-paced practice.' },
      { time: 'Weekends', l: 'A weekend morning class to review the week.' },
      { time: '1-on-1', l: 'For a student stuck on something specific.' }
    ],
    cells: [
      { h3: 'We build on what they did', p: 'Bring the Khan Academy unit they are on.' },
      { h3: 'Explanation, live', p: 'The part automated feedback cannot do.' },
      { h3: 'No assignment-doing', p: 'Graded work stays the student&rsquo;s.' },
      { h3: 'The same teacher', p: 'Someone who remembers last week.' },
      { h3: 'Online, any state', p: 'From home, on any laptop.' },
      { h3: 'Batch or private', p: 'Fifteen to twenty students, or one to one.' }
    ]
  },

  projectsH2: 'Projects our students built with a teacher',
  projectsLede: 'Some of these learners started on free self-paced courses. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'What parents wrote on Google, exactly as written.',

  fees: {
    h2: 'Fees',
    lede: 'Khan Academy&rsquo;s course is free, and we would never suggest paying for what your child can do well alone. When a teacher is worth it, our fees are monthly in US dollars, with nothing to sign for the year; you can stop after any month.',
    free: ['A free first lesson', 'Bring their current unit', 'No card asked for'],
    group: ['Batches of fifteen to twenty', 'One regular teacher', 'Pick a batch time', 'Monthly'],
    one: ['A teacher for one student', 'At times you choose', 'Aimed at their sticking point']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'Khan Academy computer science vs live classes: questions',
    items: [
      { q: 'Is Khan Academy good for learning computer science?', a: 'For many students, yes. Its introductory Python course is free, has auto-graded challenges with instant feedback, runs in the browser and is built around tracing, practice and projects. It suits students who work steadily on their own.' },
      { q: 'Is Khan Academy computer science free?', a: 'Khan Academy describes itself as a nonprofit offering free education, and its blog invites learners to sign up for its Intro to Computer Science course in Python for free.' },
      { q: 'What language does Khan Academy computer science use?', a: 'Its introductory computer science course, launched for the 2024 to 2025 school year and completed in 2025, teaches the fundamentals of programming in Python.' },
      { q: 'Should my child use Khan Academy or take live coding classes?', a: 'Start with Khan Academy if your child is self-motivated and wants to explore. Choose a live class if they have stalled, need someone to explain, are younger, or have a deadline such as an AP exam or a competition. Many families use both.' },
      { q: 'Can you use Khan Academy and live classes together?', a: 'Yes. A common pattern is self-paced practice twice a week and one live class that checks understanding and turns the concept into a project.' },
      { q: 'Will a tutor do my child\'s Khan Academy assignments?', a: 'Not with us. We never complete graded work for students. A teacher explains the idea behind the challenge so the student can solve it and explain it.' },
      { q: 'Is Khan Academy computer science enough for AP exams?', a: 'We could not confirm Khan Academy\'s current AP computing courses from the pages we could read, so check its site. For AP Computer Science Principles or A, a structured plan aimed at the College Board exam usually helps.' },
      { q: 'What age is Khan Academy computer science for?', a: 'Its blog describes the Python course for beginner classrooms, including high school. We could not read its age rules. In our experience, students under about 11 need an adult or a teacher nearby for any self-paced course.' },
      { q: 'What times are classes for US families?', a: 'Weekdays or weekends, flexible. Choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'How much do live classes cost compared with Khan Academy?', a: 'Khan Academy\'s course is free. Our first lesson is free; after that we charge monthly, and the fees section of this page shows the amount in US dollars.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Further reading',
    h2: 'Related pages',
    lede: 'More for US families choosing how their child learns to code.',
    items: [
      { href: '/live-vs-recorded-coding-classes', label: 'Live vs recorded classes', p: 'The general question, in depth.' },
      { href: '/blog/group-vs-1-on-1-coding-classes', label: 'Group or 1-on-1?', p: 'Choosing a live format.' },
      { href: '/homeschool-coding-curriculum', label: 'Homeschool coding curriculum', p: 'For families teaching at home.' },
      { href: '/ap-computer-science-principles-online-coaching', label: 'AP CSP coaching', p: 'Live help for the AP course.' },
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'The index of our US pages.' },
      { href: '/how-to-read-code', label: 'How to read code', p: 'The tracing skill, explained.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Tell us which Khan Academy unit your child reached, and where it got hard. The teacher picks up from exactly there.',
    readFirst: 'To compare our method with self-paced study, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>; each syllabus is on the <a class="ag-inline-link" href="/courses">courses</a> page.',
    note: 'We teach live over video from India, so students anywhere in the US can join without traveling. A WhatsApp message reaches us fastest.',
    formNote: 'Free first lesson; we do not ask for a card.'
  },

  footer: {
    cols: [
      { h4: 'Choosing a format', links: [
        { href: '/live-vs-recorded-coding-classes', label: 'Live vs recorded classes' },
        { href: '/blog/group-vs-1-on-1-coding-classes', label: 'Group or 1-on-1' },
        { href: '/homeschool-coding-curriculum', label: 'Homeschool coding' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/ap-computer-science-a-online-classes', label: 'AP CS A classes' },
        { href: '/python-for-12-year-olds', label: 'Python for 12 year olds' },
        { href: '/coding-for-15-year-olds', label: 'Coding for 15 year olds' }
      ] }
    ],
    bottomRight: 'Predict, run, compare'
  },

  personalityCss: `
.ag-root.ag-kacs .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-kacs .ag-capsule { border-left-width: 5px; border-radius: 2px; }
.ag-root.ag-kacs .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-kacs .ag-table caption { text-align: left; font-style: normal; }
.ag-root.ag-kacs .ag-table td { line-height: 1.5; }
.ag-root.ag-kacs .ag-slots { gap: 1.15rem; }
`,

  dossier: {
    curriculumAuthority: 'Khan Academy blog (blog.khanacademy.org), read raw on 17 October 2026; www.khanacademy.org (JavaScript client challenge) and support.khanacademy.org (HTTP 403) could not be read. Facts: nonprofit, free, world-class education for anyone, anywhere; Intro to Computer Science in Python for the 2024-25 school year, completed course announced September 9, 2025; scaffolded instructions and continuous automated feedback; auto-graded challenges; sample solutions for teachers; web-based environment across devices, no installation; 100+ example programs; worked example videos; expert volunteer community and program gallery; Exercises, Challenges, Projects; mastery essay of May 7, 2026; TEKS-aligned courses for Texas (2024). Python range rule from docs.python.org.',
    localProject: 'A criteria table comparing self-paced Khan Academy (its facts) with our live classes (ours); a five-question decision guide; a weekly plan using both; a Python tracing exercise with answer (ours): range(1, 5) gives 1 to 4, total 1 + 2 + 3 + 4 = 10, and range(1, 11) gives 55. Lesson family: tracing before running.',
    requiredMentions: ['free, world-class education for anyone, anywhere', 'continuous, automated feedback', '100+ example programs', 'just a click away', 'Computer science education has a mastery problem', 'Exercises (tracing code), then Challenges (scaffolded practice), then Projects', 'Recommendation engines, modeling infectious diseases, templating web pages', 'August 15, 2024', 'September 9, 2025', '1 + 2 + 3 + 4 = 10', 'range(1, 5)', 'expert volunteers'],
    sources: [
      { claim: 'Khan Academy as a nonprofit offering free, world-class education.', url: 'https://blog.khanacademy.org/' },
      { claim: 'The Intro to Computer Science course in Python: projects, feedback, community, web-based environment, free sign-up.', url: 'https://blog.khanacademy.org/introducing-khan-academys-new-intro-to-computer-science-course-with-python/' },
      { claim: 'The completed course: auto-graded challenges, sample solutions, 100+ example programs, no installation.', url: 'https://blog.khanacademy.org/empower-your-students-with-our-python-course-for-high-school-teachers/' },
      { claim: 'Mastery learning: Exercises, Challenges, Projects; tracing, debugging, worked examples.', url: 'https://blog.khanacademy.org/why-computer-science-students-struggle-the-case-for-mastery-learning/' },
      { claim: 'Free content updates including the Python course; TEKS-aligned courses for Texas.', url: 'https://blog.khanacademy.org/khan-academy-goes-way-beyond-math-new-courses-launch-for-2024-school-year-in-stem-humanities-computer-science-and-more/' },
      { claim: 'Python range contents stop before the stop value.', url: 'https://docs.python.org/3/library/stdtypes.html' }
    ],
    rejectedClaims: [
      'Khan Academy course list, age rules and any AP computing course: www.khanacademy.org returned a JavaScript client challenge and support.khanacademy.org returned HTTP 403; not retried, so nothing is claimed.',
      'A Khan Academy JavaScript course: appears in search suggestions but was not confirmed on any page read, so not claimed.',
      'Khanmigo, Khan Academy&rsquo;s AI tutor, and its price: not recommended or priced on this page; its age terms were not readable.',
      'That live classes are better than Khan Academy: not claimed; the page compares formats and lets the reader choose.',
      'Names of Khan Academy staff who wrote the posts: not printed, under the cluster rule on naming people.',
      'Any affiliation with Khan Academy: none, and the page says so.'
    ]
  }
};
