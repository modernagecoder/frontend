'use strict';
// Coding competitions for middle school students (ag- competition door; US cluster Phase 3, row 42).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md. Every competition is described only from its own
// official site, read raw with curl on 17 October 2026 (copies in
// keyword-research-2026-09/us/src/coding-competitions-for-middle-school-students/):
//  - Bebras USA (bebraschallenge.org): "The Bebras Challenge USA 2026 is scheduled for November 9-20" (en dash in the
//    original); "Participating in the challenge is free, and the tasks can all be completed without any preparation or
//    studying."; "Students aged 6 to 18"; "45 minutes"; six age groups incl. Benjamins age 10-12 and Cadets age 12-14,
//    5 easy, 5 medium and 5 hard tasks each.
//  - ACSL (acsl.org /get-started/divisions, /get-started/schedule, /about/faq, home): Junior Division "Best for junior
//    high and middle school students", "No student beyond grade 9 may compete in the Junior Division."; Elementary
//    "Open to students in grades 3 - 6", "30-minute, 6 -question non-programming test"; Classroom "50-minute, 10
//    -question short answer test"; topics "ranging from Number Systems to Boolean Algebra to Digital Electronics";
//    Contest #1 Oct 19, 2026; Finals May 29, 2027; Finals cut-off 28 (Junior), 24 (Classroom), 14 (Elementary).
//  - CyberPatriot (uscyberpatriot.org /competition-overview/, /competition-schedule/): Middle School Division; the
//    "Introductory Round" Nov 12-15, 2026 is "the 1st competition round for middle school teams"; State Round Dec 10-13,
//    2026; teams of two to six; "regardless of prior cybersecurity knowledge".
//  - Congressional App Challenge (2026 rulebook copy): middle school "typically encompasses 6th-8th grades"; any
//    language incl. "block-based coding languages"; deadline 12:00 pm EDT, Monday, October 26th, 2026.
//  - Presidential SI Challenge (orise.orau.gov/si-challenge/): Middle School Student Category "grades 6-8", "1-4 middle
//    school students and one Team Leader"; Standard and Trailblazer tracks; register by December 18, 2026, submit by
//    December 23, 2026.
//  - CyLab Security Academy (cylabacademy.org): "a full learning ecosystem for middle schoolers through adults";
//    "Always free"; annual flagship for US middle and high school students.
//  - FIRST (firstinspires.org): FIRST LEGO League "Grades K-8 | Ages 5-16"; FIRST Tech Challenge "Grades 7-12 | Ages
//    12-18"; "FIRST is developing the next generation of K-8 programs, launching in 2027."
//  - USACO (usaco.org instructions): "All are welcome"; bronze start; all bronze-level problems solvable in Python.
// Our own material, labelled on the page: the six-question number systems practice set and answers (checked in
// Python), the grade-by-grade starter table, the year plan. Lesson family: changing number bases by place value.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'COMPETITION', blurb: 'Bebras, ACSL Junior, CyberPatriot Middle School, the Congressional App Challenge and more for grades 6 to 8, from the 2026-27 rules.' },
  slug: 'coding-competitions-for-middle-school-students',
  code: 'comp',
  accent: '#32294C',
  accentRationale: 'Coding competitions for middle school students: a dusk violet #32294C from the US allocation table, set apart from the high school page indigo, strong contrast on every paper',
  pageType: 'market',
  market: US,
  routeLabel: 'Coding competitions for middle school students',
  title: 'Coding Competitions for Middle School Students (2026-27)',
  description: 'Coding contests open to grades 6 to 8 this school year, from Bebras and ACSL Junior to CyberPatriot and app challenges, with dates, rules and a practice set.',
  ogDescription: 'Which coding competitions a sixth, seventh or eighth grader can actually enter in 2026-27, what each one asks for, and when it runs, from the organisers\' own pages.',
  twitterDescription: 'Middle school coding competitions for 2026-27, grade by grade.',
  pageName: 'Coding Competitions for Middle School Students',
  webPageDescription: 'A guide for US middle school students and parents to coding, computational thinking, cybersecurity and build competitions open to grades 6 to 8 in 2026-27, with a practice set and a year plan.',
  courseDescription: 'Live online Scratch, Python and computational thinking classes for US middle school students getting ready for their first coding competitions, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Middle school coding competitions',
  navLinks: [
    { href: '#open', label: 'What is open' },
    { href: '#bebras', label: 'Bebras' },
    { href: '#acsl', label: 'ACSL Junior' },
    { href: '#teams', label: 'Team events' },
    { href: '#practice', label: 'Practice set' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grades 6 to 8 &middot; First competitions',
  h1: 'Coding competitions for middle school students',
  lede: 'Middle school is when many students enter their first real competition, and the choice is wider than most parents expect. Some contests need no coding at all, some accept Scratch, and a few are the same contests high schoolers take. The catch is that grade limits, team rules and sign-up routes differ a lot, and several fall deadlines arrive before families notice them. This guide lists what a sixth, seventh or eighth grader can enter in 2026-27, checked on each organiser&rsquo;s own site on 17 October 2026, and adds a practice set and the year plan we use in class.',
  secondaryCta: { href: '#plan', label: 'See the year plan' },
  wa: 'Hello Modern Age Coders, my middle schooler in the US would like to try a coding competition. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; first contests prepared step by step',
  spec: [
    ['Grades', '6 to 8'],
    ['No-code options', 'Bebras, ACSL Elementary'],
    ['Block code allowed', 'Congressional App Challenge'],
    ['Team events', 'CyberPatriot, FIRST, SI Challenge'],
    ['Typed code', 'ACSL Junior, USACO bronze'],
    ['First dates', 'October and November 2026'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Middle schoolers in the US can enter Bebras (free, 45 minutes, November 9 to 20, 2026), the ACSL Junior Division (no student beyond grade 9), CyberPatriot&rsquo;s Middle School Division, the Presidential SI Challenge for grades 6 to 8, the Congressional App Challenge (block code allowed), FIRST LEGO League, and USACO. Modern Age Coders teaches Scratch, Python and problem solving for them live online.',

  picks: {
    eyebrow: 'Get ready with a teacher',
    h2: 'Courses that suit a first coding competition',
    lede: 'Chosen by where a middle schooler usually starts: blocks, first typed code, or puzzles with no code at all.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'COMP / 01', title: 'Scratch coding', note: 'For 8 to 13 year olds. Games that can become an app challenge entry.' },
      { course: 'python-ai-kids-masterclass', code: 'COMP / 02', title: 'Python for kids', note: 'For 8 to 13 year olds. The typed language ACSL and USACO accept.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'COMP / 03', title: 'Computational thinking', note: 'For 8 to 13 year olds. The logic puzzles Bebras is built on.' }
    ]
  },

  sections: [
    {
      id: 'open', tint: 'tint', eyebrow: 'What is open',
      h2: 'Which coding competitions accept grades 6 to 8',
      lede: 'Middle school eligibility is where these contests differ most. The table puts the grade or age rule first, because it decides everything else.',
      body: [
        { kind: 'table', caption: 'Coding competitions open to US middle schoolers this school year (organisers&rsquo; pages, checked 17 October 2026)', head: ['Competition', 'Grade or age rule', 'Coding needed?', 'How you enter', 'Next date'], rows: [
          ['Bebras USA', 'Ages 6 to 18 in six age groups', 'No; logic and computational thinking tasks', 'Through a school coordinator', 'November 9 to 20, 2026'],
          ['ACSL Junior Division', 'No student beyond grade 9', 'Yes, Python 3, Java or C++ for one problem', 'A team advisor registers the team', 'Contest #1 opens October 19, 2026'],
          ['ACSL Elementary Division', 'Grades 3 to 6', 'No; a non-programming test', 'A team advisor registers the team', 'Contest #1 opens October 19, 2026'],
          ['CyberPatriot Middle School Division', 'Middle school students', 'Security settings, not programming', 'A coach registers a team', 'Introductory Round, November 12 to 15, 2026'],
          ['Congressional App Challenge', 'Enrolled in middle or high school; middle school is typically grades 6 to 8', 'Yes, but block-based coding is allowed', 'The student registers in a participating district', 'Deadline October 26, 2026'],
          ['Presidential SI Challenge', 'Middle School Student Category, grades 6 to 8', 'A project using SI tools or methods', 'An adult Team Leader registers the team', 'Register by December 18, 2026'],
          ['FIRST LEGO League', 'Grades K to 8, ages 5 to 16', 'Yes in Challenge: teams program a LEGO Education SPIKE Prime robot', 'A local team with a coach', 'The 2026-2027 BIOGLOW season, timing set by region'],
          ['USACO', 'Anyone may take the online contests', 'Yes, C, C++, Java or Python', 'The student makes an account', '2026-27 dates not yet published']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The no-code doors',
          left: [
            'Two of these need no programming at all. Bebras tasks are logic puzzles about how computers think, and the ACSL Elementary Division, open to grades 3 to 6, sets a short non-programming test on one topic per contest.',
            'They suit a sixth grader who likes puzzles but has not typed much code yet, and they give honest feedback on reasoning skills before any coding course begins.'
          ],
          rightH3: 'Where Scratch counts',
          right: [
            'The Congressional App Challenge rulebook names block-based coding languages as allowed, so a finished Scratch project with a clear purpose is a genuine entry.',
            'Most other contests on this page expect typed code. A student moving from Scratch to Python in grade 6 or 7 can be ready for ACSL Junior or USACO bronze by grade 8.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.bebraschallenge.org/" rel="noopener" target="_blank">Bebras USA</a>, <a class="ag-inline-link" href="https://www.acsl.org/get-started/divisions" rel="noopener" target="_blank">ACSL Divisions</a>, <a class="ag-inline-link" href="https://www.uscyberpatriot.org/competition-overview/" rel="noopener" target="_blank">CyberPatriot</a>, <a class="ag-inline-link" href="https://www.congressionalappchallenge.us/students/rules/" rel="noopener" target="_blank">Congressional App Challenge</a>, <a class="ag-inline-link" href="https://orise.orau.gov/si-challenge/about/eligibility.html" rel="noopener" target="_blank">Presidential SI Challenge eligibility</a>, <a class="ag-inline-link" href="https://www.firstinspires.org/" rel="noopener" target="_blank">FIRST</a> and <a class="ag-inline-link" href="https://usaco.org/index.php?page=instructions" rel="noopener" target="_blank">USACO</a>, read 17 October 2026. Modern Age Coders has no tie to any of them.' }
      ]
    },
    {
      id: 'bebras', tint: 'deep', eyebrow: 'Bebras',
      h2: 'Bebras: a free 45-minute computational thinking challenge',
      lede: 'Bebras is the gentlest first competition on this list, and the 2026 US dates are only weeks away.',
      body: [
        { kind: 'table', caption: 'Bebras USA age groups and task counts, from the official site (read 17 October 2026)', head: ['Group', 'Ages', 'Easy', 'Medium', 'Hard'], numCols: [2, 3, 4], rows: [
          ['Kits', '6 to 8', '3', '3', '3'],
          ['Castors', '8 to 10', '4', '4', '4'],
          ['Benjamins', '10 to 12', '5', '5', '5'],
          ['Cadets', '12 to 14', '5', '5', '5'],
          ['Juniors', '14 to 16', '5', '5', '5'],
          ['Seniors', '16 to 18', '5', '5', '5']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the organisers say',
          left: [
            'The site states: "Participating in the challenge is free, and the tasks can all be completed without any preparation or studying." Students get 45 minutes and are not expected to finish every task.',
            'For 2026 the US challenge is scheduled for November 9 to 20, 2026. Teachers supervise, so a family whose school is not taking part can ask a teacher to register as coordinator.'
          ],
          rightH3: 'Which group a middle schooler sits in',
          right: [
            'Most sixth graders fall in Benjamins (10 to 12) and most seventh and eighth graders in Cadets (12 to 14). Both groups get fifteen tasks, five at each level.',
            'With 45 minutes for fifteen tasks, that is three minutes a task on average by our arithmetic, so the skill on test day is moving on from a stuck puzzle quickly.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.bebraschallenge.org/" rel="noopener" target="_blank">USA Bebras Computing Challenge</a>, read 17 October 2026.' }
      ]
    },
    {
      id: 'acsl', tint: 'tint', eyebrow: 'ACSL for middle school',
      h2: 'ACSL Junior, Classroom and Elementary: three ways in for grades 6 to 8',
      lede: 'The American Computer Science League has more middle school routes than any other contest here. The right division depends on whether the student already writes typed code.',
      body: [
        { kind: 'table', caption: 'ACSL divisions a middle schooler can enter, 2026-27 (Divisions page and FAQ, read 17 October 2026)', head: ['Division', 'Who ACSL says it is for', 'Each contest', 'Finals cut-off'], rows: [
          ['Junior', 'Junior high and middle school students learning programming or with coding experience; no student beyond grade 9', 'Six short-answer questions in 30 minutes, then one programming task with a 72-hour window', '28 points'],
          ['Classroom', 'Open to all grades; suits computer science classes without much programming', 'A 50-minute, 10-question short answer test, no programming', '24 points'],
          ['Elementary', 'Grades 3 to 6', 'A 30-minute, 6-question non-programming test on one category, a new category each contest', '14 points']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The 2026-27 season',
          left: [
            'The first contest window runs from October 19, 2026 to January 10, 2027. Three more contests follow, the last closing on May 23, 2027, and the online Finals are on Saturday, May 29, 2027.',
            'Students take all four contests. ACSL awards certificates to top teams and top individuals in each state after the fourth contest, using cumulative scores.'
          ],
          rightH3: 'Getting a team started',
          right: [
            'Registration is done by an adult advisor before December 31, 2026, and ACSL says any teacher, parent or adult with some computer science experience can be that advisor. There is no minimum team size.',
            'Short answer topics run, in ACSL&rsquo;s words, "from Number Systems to Boolean Algebra to Digital Electronics". The practice set below covers the first of those.'
          ] },
        { kind: 'source', html: 'Sources: ACSL <a class="ag-inline-link" href="https://www.acsl.org/get-started/divisions" rel="noopener" target="_blank">Divisions</a>, <a class="ag-inline-link" href="https://www.acsl.org/get-started/schedule" rel="noopener" target="_blank">Schedule</a>, <a class="ag-inline-link" href="https://www.acsl.org/about/faq" rel="noopener" target="_blank">FAQ</a> and <a class="ag-inline-link" href="https://www.acsl.org/" rel="noopener" target="_blank">home page</a>, read 17 October 2026. Our <a class="ag-inline-link" href="/acsl-competition-preparation">ACSL competition preparation</a> page covers each topic.' }
      ]
    },
    {
      id: 'teams', tint: 'deep', eyebrow: 'Team events',
      h2: 'Team events for middle schoolers: CyberPatriot, FIRST and the SI Challenge',
      lede: 'For students who would rather work with friends than sit a test alone, three programs build the whole year around a team.',
      body: [
        { kind: 'table', caption: 'Team competitions with a middle school route (organisers&rsquo; pages, checked 17 October 2026)', head: ['Program', 'Team shape', 'What the team does', 'Key 2026-27 dates'], rows: [
          ['CyberPatriot Middle School Division', 'An adult coach and two to six students, up to five competing at once', 'Secures Windows and Linux virtual machines and answers networking questions', 'Introductory Round November 12 to 15, 2026; State Round December 10-13, 2026'],
          ['Presidential SI Challenge, Middle School Student Category', 'Between one and four students in grades 6 to 8, plus a Team Leader who is at least 21', 'A written report (a title page plus at most 10 pages) and a video no longer than 4 minutes', 'Registration closes December 18, 2026; projects are due December 23, 2026'],
          ['FIRST LEGO League', 'A team with an adult coach, grades K to 8', 'Programs a SPIKE Prime robot to complete missions autonomously in two-and-a-half minute matches', 'BIOGLOW, the 2026-2027 season, which FIRST says will be the final season of the program']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'CyberPatriot for beginners',
          left: [
            'CyberPatriot says it is designed for any student, "regardless of prior cybersecurity knowledge". For middle school teams the first scored round of the season is the Introductory Round, which tests the basics.',
            'This season&rsquo;s team sign-up ended on October 1, 2026. A student with no team yet can learn the basics this year and ask a teacher about coaching one next fall.'
          ],
          rightH3: 'Two notes on the other two',
          right: [
            'The Presidential SI Challenge has a Standard Track and a Trailblazer Track for middle schoolers; Trailblazer is for projects that are novel and could matter nationwide. The program was called the Presidential AI Challenge until a September 29, 2026 executive order changed the federal term.',
            'FIRST says it is developing the next generation of K-8 programs, launching in 2027, so check firstinspires.org before planning a 2027-28 team. Its FIRST LEGO League page says the 2026-2027 BIOGLOW season will be the final season of the program.'
          ] },
        { kind: 'source', html: 'Sources: CyberPatriot <a class="ag-inline-link" href="https://www.uscyberpatriot.org/competition-overview/" rel="noopener" target="_blank">overview</a> and <a class="ag-inline-link" href="https://www.uscyberpatriot.org/competition-schedule/" rel="noopener" target="_blank">schedule</a>; Presidential SI Challenge <a class="ag-inline-link" href="https://orise.orau.gov/si-challenge/complete-the-challenge/competition-tiers.html" rel="noopener" target="_blank">tiers</a> and <a class="ag-inline-link" href="https://orise.orau.gov/si-challenge/complete-the-challenge/requirements.html" rel="noopener" target="_blank">requirements</a>; <a class="ag-inline-link" href="https://www.firstinspires.org/" rel="noopener" target="_blank">FIRST</a>; read 17 October 2026.' }
      ]
    },
    {
      id: 'solo', tint: 'tint', eyebrow: 'Going further alone',
      h2: 'USACO, the app challenge and capture the flag for a strong eighth grader',
      lede: 'Some middle schoolers are ready for contests that high schoolers take. Three of them welcome younger students outright.',
      body: [
        { kind: 'three', cells: [
          { h3: 'USACO bronze', p: 'The USACO rules say all are welcome in the online contests, every newcomer starts in bronze, and bronze problems are designed so that Python can solve them fully. Entry is free. The 2026-27 dates were not posted on 17 October 2026.' },
          { h3: 'Congressional App Challenge', p: 'For 2026 a student enrolled in middle school on October 26, 2026 can enter, alone or in a team of up to four. Entries close at noon Eastern (EDT) on Monday, October 26, 2026, so this suits a student whose app is nearly finished.' },
          { h3: 'CyLab Security Academy', p: 'The free platform behind picoCTF describes itself as a learning ecosystem for middle schoolers through adults, with an annual flagship event for US middle and high school students. Its practice challenges stay open between events.' }
        ] },
        { kind: 'p', mt: true, html: 'Our <a class="ag-inline-link" href="/congressional-app-challenge-guide">Congressional App Challenge guide</a> covers that rulebook in detail, and the <a class="ag-inline-link" href="/usaco-preparation-online-coaching">USACO coaching page</a> explains how bronze problems are scored. For security puzzles, start with <a class="ag-inline-link" href="/picoctf-for-beginners">picoCTF for beginners</a>; for team defense, read <a class="ag-inline-link" href="/cyberpatriot-preparation">CyberPatriot preparation</a>; and for an SI project, the <a class="ag-inline-link" href="/presidential-ai-challenge-guide">Presidential AI Challenge guide</a> covers the renamed program.' }
      ]
    },
    {
      id: 'practice', tint: 'deep', eyebrow: 'Practice set',
      h2: 'Six number systems questions to try before an ACSL contest',
      lede: 'Number systems is the first short answer topic most ACSL students meet. These six questions are ours, written for this page, at roughly Junior Division difficulty.',
      body: [
        { kind: 'ol', items: [
          '<b>Convert 45 (base 10) to binary.</b>',
          '<b>Convert 2F (base 16) to base 10.</b>',
          '<b>Convert 75 (base 8) to binary.</b> Hint: each octal digit is exactly three binary digits.',
          '<b>Add the binary numbers 1101 and 1011.</b> Give the answer in binary.',
          '<b>Which is largest: 3A (base 16), 71 (base 8) or 111011 (base 2)?</b>',
          '<b>Convert 1F (base 16) to base 8.</b>'
        ] },
        { kind: 'table', mt: true, caption: 'Answers and the reasoning (ours)', head: ['Question', 'Answer', 'How'], rows: [
          ['1', '101101', '45 = 32 + 8 + 4 + 1'],
          ['2', '47', '2 x 16 + 15 = 47'],
          ['3', '111101', '7 is 111 and 5 is 101; side by side gives 111101, which is 61 in base 10'],
          ['4', '11000', '1101 is 13 and 1011 is 11; 13 + 11 = 24, and 24 = 16 + 8'],
          ['5', '111011 (base 2)', '3A is 58, 71 is 57, and 111011 is 59'],
          ['6', '37', '1F is 31; 31 = 3 x 8 + 7']
        ] },
        { kind: 'code', mt: true, label: 'Check every answer in Python (ours)', lang: 'Python', code: '# Python reads other bases with int(text, base)\n# and writes them with bin() and oct().\n\nprint(bin(45))                      # 0b101101\nprint(int("2F", 16))                # 47\nprint(bin(int("75", 8)))            # 0b111101\nprint(bin(0b1101 + 0b1011))         # 0b11000\nprint(max(0x3A, 0o71, 0b111011))    # 59, so the binary one wins\nprint(oct(int("1F", 16)))           # 0o37', note: 'In the real contest there is no computer and no calculator for the short answer test, so do every question by hand first and use the code only to check.' },
        { kind: 'two', mt: true,
          leftH3: 'Why place value is the whole trick',
          left: [
            'Every question above reduces to one idea: each position is worth the base times the position to its right. Once a student can say why 2F means two sixteens and fifteen ones, the rest is careful arithmetic.',
            'The shortcut in question 3 works because 8 is 2 to the power 3. The same shortcut links base 16 and base 2 in groups of four.'
          ],
          rightH3: 'Turning it into a habit',
          right: [
            'We give students five fresh questions like these each week for a month before Contest #1. Speed comes from repetition, not from memorising tables.',
            'A good follow-up is writing a short Python function that converts any base 10 number to any base from 2 to 16 without using bin, oct or hex.'
          ] }
      ]
    },
    {
      id: 'plan', tint: 'tint', eyebrow: 'A year plan',
      h2: 'A first competition year for grades 6 to 8',
      lede: 'Our suggested plan, built on the published 2026-27 dates. It assumes one live class a week and a little practice at home.',
      body: [
        { kind: 'table', caption: 'Starting points by grade (our recommendation)', head: ['Grade', 'If the student mostly uses Scratch', 'If the student already types Python'], rows: [
          ['6', 'Bebras (Benjamins) and ACSL Elementary', 'Bebras plus ACSL Junior'],
          ['7', 'Bebras (Cadets) and a Scratch app for next year&rsquo;s app challenge', 'ACSL Junior and USACO bronze'],
          ['8', 'Bebras, plus a move to Python this year', 'ACSL Junior, USACO bronze, and a team event such as CyberPatriot next season']
        ] },
        { kind: 'table', mt: true, caption: 'The 2026-27 calendar for a middle schooler (our plan on the official dates)', head: ['When', 'Event', 'Our focus that month'], rows: [
          ['October 2026', 'ACSL Contest #1 opens October 19; app challenge due October 26', 'Number systems drills; finish any app entry'],
          ['November 2026', 'Bebras November 9 to 20; CyberPatriot Introductory Round November 12 to 15', 'Logic puzzles against the clock'],
          ['December 2026', 'ACSL registration closes December 31; SI Challenge registration December 18', 'Boolean algebra basics'],
          ['January to February 2027', 'ACSL Contest #1 closes January 10; Contest #2 window', 'First USACO-style problems in Python'],
          ['March to May 2027', 'ACSL Contests #3 and #4; Finals May 29 for those invited', 'Review every mistake from the year'],
          ['Summer 2027', 'Quiet for most contests', 'One bigger project, ready for the next app challenge']
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Readiness',
    h2: 'Four signs a middle schooler is ready to compete',
    lede: 'None of these needs a high grade in maths, only steady practice.',
    table: { caption: 'From curious to competitor in middle school (ours)', head: ['Sign', 'What we look for'], rows: [
      ['1. Finishes things', 'Has completed at least one small game or project, even in Scratch'],
      ['2. Explains', 'Can say in words what a loop or an if statement is doing'],
      ['3. Sticks with it', 'Keeps trying a puzzle for ten minutes before asking for help'],
      ['4. Moves on', 'Knows when to skip a hard question and come back later']
    ] },
    left: { h3: 'For parents', ps: [
      'A first competition is about learning what a timed test feels like. Treat the score as a starting line.',
      'Check the sign-up route early: Bebras and ACSL need a coordinator or advisor, and that adult may be you.'
    ] },
    right: { h3: 'For students', ps: [
      'Pick one contest that sounds fun and one that sounds hard, and enter both.',
      'After each contest, write down one question you got wrong and why. That list is your study plan.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for middle school competitors',
    lede: 'Small live classes taught online by one consistent teacher, or a private class for one student.',
    bands: [
      { num: 'I', h3: 'First steps', sub: 'Blocks and puzzles', courses: [
        { code: 'COMP / FST / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Projects with a clear purpose.' },
        { code: 'COMP / FST / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking', blurb: 'Bebras-style reasoning.' },
        { code: 'COMP / FST / 03', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Blocks to small apps.' }
      ] },
      { num: 'II', h3: 'Typed code', sub: 'For ACSL and USACO', courses: [
        { code: 'COMP / TYP / 01', slug: 'python-ai-kids-masterclass', title: 'Python for kids', blurb: 'The usual first contest language.' },
        { code: 'COMP / TYP / 02', slug: 'cpp-programming-for-kids-course', title: 'C++ for kids', blurb: 'Ages 9 to 12, real C++.' },
        { code: 'COMP / TYP / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Number sense in Python.' }
      ] },
      { num: 'III', h3: 'Eighth grade and up', sub: 'Ready for harder contests', courses: [
        { code: 'COMP / ADV / 01', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'From 13, toward USACO silver.' },
        { code: 'COMP / ADV / 02', slug: 'picoctf-cyberpatriot-cybersecurity-competition-prep-for-teens', title: 'Cybersecurity competitions', blurb: 'From 13, picoCTF and CyberPatriot.' },
        { code: 'COMP / ADV / 03', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'Background for an SI project.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Classes that leave room for homework and sports',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'An after-school batch in your own US time zone.' },
      { time: 'Weekends', l: 'A calmer slot for younger students.' },
      { time: '1-on-1', l: 'Paced for one child and one contest.' }
    ],
    cells: [
      { h3: 'Same teacher', p: 'One familiar face all year.' },
      { h3: 'Short drills', p: 'Five-question sets, not long worksheets.' },
      { h3: 'Mock tests', p: 'Practice at the real time limits.' },
      { h3: 'Parent updates', p: 'A short note on progress each month.' },
      { h3: 'From home', p: 'Live online, nothing to drive to.' },
      { h3: 'Batch or private', p: 'Fifteen to twenty learners, or one.' }
    ]
  },

  projectsH2: 'What our younger students have made',
  projectsLede: 'Games, sites and small AI tools built by our learners. The <a class="ag-inline-link" href="/student-labs">student labs</a> page shows more.',
  reviewsLede: 'Google reviews from parents, quoted exactly.',

  fees: {
    h2: 'Fees',
    lede: 'Bebras, USACO and CyLab Security Academy are free to enter, and others charge their own fees set by each organiser. Our classes are billed month by month in US dollars, so a family can add lessons in the run-up to a contest and stop when it is done.',
    free: ['A free first lesson', 'Try a contest-style puzzle', 'No card details'],
    group: ['Fifteen to twenty learners', 'One regular teacher', 'Choose your batch', 'Monthly'],
    one: ['A private teacher', 'Planned around one contest', 'Your child&rsquo;s own pace']
  },

  faq: {
    eyebrow: 'Questions from parents',
    h2: 'Questions parents ask about middle school contests',
    items: [
      { q: 'What coding competitions can middle school students enter?', a: 'In 2026-27 a student in grades 6 to 8 can enter Bebras, ACSL (Junior, Classroom or Elementary for grade 6), CyberPatriot\'s Middle School Division, the Congressional App Challenge, the Presidential SI Challenge, FIRST LEGO League and the USACO online contests.' },
      { q: 'Is there a coding competition that needs no coding experience?', a: 'Yes. Bebras USA says its tasks can be completed without any preparation or studying, and the ACSL Elementary Division for grades 3 to 6 uses a non-programming test.' },
      { q: 'When is Bebras in 2026?', a: 'The Bebras Challenge USA 2026 is scheduled for November 9 to 20, 2026. Students have 45 minutes, and a teacher registers as the coordinator.' },
      { q: 'Can a seventh grader do ACSL?', a: 'Yes. The ACSL Junior Division is meant for junior high and middle school students, and no student beyond grade 9 may compete in it. An adult advisor registers the team before December 31, 2026.' },
      { q: 'Can my child enter a coding competition with Scratch?', a: 'For the 2026 Congressional App Challenge, yes: the rules allow block-based coding languages. Most other contests here expect typed code such as Python.' },
      { q: 'Is CyberPatriot open to middle school?', a: 'Yes, through the Middle School Division. Its first scored round in 2026-27 is the Introductory Round on November 12 to 15, 2026, but the deadline to create a team this season was October 1, 2026.' },
      { q: 'Can middle schoolers take USACO?', a: 'Yes. USACO says all are welcome in its online contests, newcomers start in bronze, and bronze problems are meant to be solvable in Python.' },
      { q: 'What is the Presidential SI Challenge for middle school?', a: 'It is the program formerly called the Presidential AI Challenge. Its Middle School Student Category covers grades 6 to 8, and a team is one adult Team Leader plus between one and four students.' },
      { q: 'When are your classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Do you run any of these competitions?', a: 'No. We are an independent online school with no connection to any organiser. We teach the skills, and families register with each competition directly.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Further reading',
    lede: 'Other guides for families of US middle schoolers.',
    items: [
      { href: '/congressional-app-challenge-guide', label: 'Congressional App Challenge', p: 'The 2026 rulebook, step by step.' },
      { href: '/usaco-preparation-online-coaching', label: 'USACO coaching', p: 'What bronze asks for.' },
      { href: '/mathcounts-preparation', label: 'MATHCOUNTS preparation', p: 'The maths contest for grades 6 to 8.' },
      { href: '/acsl-competition-preparation', label: 'ACSL preparation', p: 'Junior Division topics explained.' },
      { href: '/technovation-girls-guide', label: 'Technovation Girls', p: 'An app and AI challenge for girls.' },
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'All our guides for American families.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Tell us your child&rsquo;s grade and what they have built so far. The teacher tries a contest-style puzzle together with them and suggests which competition to aim at first.',
    readFirst: 'Curious how a class works? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> describes a typical lesson, and the <a class="ag-inline-link" href="/courses">courses page</a> lists every syllabus.',
    note: 'Lessons happen on live video with teachers based in India, so there is no building to visit. WhatsApp tends to be the fastest way to reach us from the US.',
    formNote: 'Free first lesson. No card required.'
  },

  footer: {
    cols: [
      { h4: 'First contests', links: [
        { href: '/congressional-app-challenge-guide', label: 'Congressional App Challenge' },
        { href: '/usaco-preparation-online-coaching', label: 'USACO coaching' },
        { href: '/mathcounts-preparation', label: 'MATHCOUNTS preparation' },
        { href: '/math-kangaroo-usa-preparation', label: 'Math Kangaroo preparation' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/coding-for-11-year-olds', label: 'Coding for 11 year olds' },
        { href: '/coding-for-13-year-olds', label: 'Coding for 13 year olds' },
        { href: '/online-coding-classes-for-kids-usa', label: 'Online coding classes for kids' }
      ] }
    ],
    bottomRight: 'Two sixteens and fifteen ones'
  },

  personalityCss: `
.ag-root.ag-comp .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-comp .ag-capsule { border-left-width: 3px; border-radius: 4px; }
.ag-root.ag-comp .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-comp .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-comp .ag-steps li { line-height: 1.6; }
.ag-root.ag-comp .ag-slots { gap: 1.25rem; }
`,

  dossier: {
    curriculumAuthority: 'Each competition from its own official site, read raw on 17 October 2026: Bebras USA (2026 dates November 9 to 20, free, no preparation, ages 6 to 18, 45 minutes, six age groups and task counts); ACSL Divisions, Schedule, FAQ, home (Junior no student beyond grade 9, Classroom 50-minute 10-question, Elementary grades 3 to 6, cut-offs 28/24/14, Contest #1 Oct 19 2026, Finals May 29 2027, advisor rule, topics); CyberPatriot (Middle School Division, Introductory Round Nov 12 to 15 2026, State Round, team size, regardless of prior knowledge, team creation by Oct 1 2026); CAC 2026 rulebook (middle school typically 6th to 8th, block-based coding allowed, deadline); Presidential SI Challenge (Middle School Student Category grades 6 to 8, 1 to 4 students and a Team Leader 21+, tracks, deliverables, dates, rename); CyLab Security Academy; FIRST (FLL K to 8 ages 5 to 16, next-generation K-8 programs in 2027); USACO instructions.',
    localProject: 'Our six-question number systems practice set with answers verified in Python (101101, 47, 111101, 11000, 111011 base 2, 37); our arithmetic 45 minutes / 15 tasks = 3 minutes a task for Benjamins and Cadets; our grade-by-grade starter table and year plan. Lesson family: changing number bases by place value.',
    requiredMentions: ['November 9 to 20, 2026', 'without any preparation or studying', 'No student beyond grade 9', 'Grades 3 to 6', 'Introductory Round', 'November 12 to 15, 2026', 'regardless of prior cybersecurity knowledge', 'block-based coding', 'Middle School Student Category', 'from Number Systems to Boolean Algebra to Digital Electronics', 'Benjamins', 'Cadets', '0b111011', 'launching in 2027'],
    sources: [
      { claim: 'Bebras USA 2026 dates, cost, age groups, task counts and time.', url: 'https://www.bebraschallenge.org/' },
      { claim: 'ACSL Junior, Classroom and Elementary divisions, schedule, cut-offs and advisor rule.', url: 'https://www.acsl.org/get-started/divisions' },
      { claim: 'CyberPatriot Middle School Division, Introductory Round and team rules.', url: 'https://www.uscyberpatriot.org/competition-schedule/' },
      { claim: 'Presidential SI Challenge middle school category, tracks and dates.', url: 'https://orise.orau.gov/si-challenge/about/eligibility.html' },
      { claim: 'Congressional App Challenge 2026: middle school eligibility and block-based coding.', url: 'https://www.congressionalappchallenge.us/students/rules/' },
      { claim: 'FIRST LEGO League grade band and the 2027 K-8 program change.', url: 'https://www.firstinspires.org/' },
      { claim: 'FIRST LEGO League 2026-2027 BIOGLOW season, final season, SPIKE Prime robot missions.', url: 'https://www.firstinspires.org/robotics/fll' },
      { claim: 'USACO: open to all, bronze start, Python at bronze.', url: 'https://usaco.org/index.php?page=instructions' }
    ],
    rejectedClaims: [
      'Technovation: its official site blocked our request with a Cloudflare page on 17 October 2026, so it is not described; families are pointed to our separate Technovation Girls guide.',
      'USACO 2026-27 contest dates: not published on the read date.',
      'Entry fees for ACSL, CyberPatriot and FIRST: published by each organiser and not repeated here.',
      'That any contest result helps with high school or magnet school admission: not claimed.',
      'Named students, schools or past winners: not used.',
      'Any connection with the organisers: none, stated on the page.'
    ]
  }
};
