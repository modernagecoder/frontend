'use strict';
// Coding competitions for high school students (ag- competition door; US cluster Phase 3, row 41).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md. Every competition is described only from its own
// official site, read raw with curl on 17 October 2026 (copies in
// keyword-research-2026-09/us/src/coding-competitions-for-high-school-students/):
//  - USACO (usaco.org/index.php, ?page=instructions): "All are welcome to participate in online USACO contests";
//    "All new participants start out in the bronze division"; "There is never any fee for participation."; solutions
//    "in C, C++, Java, or Python"; "typically 3 or 4 problems"; "typically 4..5 contiguous hours"; "2 seconds per input
//    case for C and C++, and 4 seconds per input case for Java and Python"; feedback letters X, T, !, E, M; "Use of
//    generative AI (e.g., services like copilot or ChatGPT) is prohibited."; no pre-written code or "templates";
//    program "less than 100,000 bytes", "about 256MB"; 2025-2026 schedule (Jan 9-12, Jan 30-Feb 2, Feb 20-23, Mar 28
//    US Open proctored). No 2026-2027 schedule on the site on the read date.
//  - ACSL (acsl.org home, /get-started/divisions, /get-started/schedule, /get-started/finals, /Registration,
//    /about/faq): "Registration for 2026-27 is now open! Contest #1 will be available on Oct 19th."; five divisions;
//    Senior and Intermediate: "online 30-minute, 6 -question short answer test and an online programming problem to
//    solve in 72 hours"; Python 3, Java or C++; short answers may use "ACSL Programming Language, LISP , and Assembly
//    Language"; 5-score team up to 10, 3-score up to 6; registration deadline December 31, 2026; contest windows;
//    Finals Saturday May 29, 2027; invitation cut-off 28 points (Junior, Intermediate, Senior); FAQ 23 "only
//    primitives as parameters", a list "passed as a single string"; FAQ 17 "No calculators are allowed."; FAQ 18
//    advisor "any teacher, parent or other adult with some CS experience"; FAQ 28 homeschool.
//  - CyberPatriot (uscyberpatriot.org /competition-overview/, /competition-schedule/, /join-the-competition/,
//    /how-the-competition-works/): teams "between two and six competitors", "a maximum of five students are permitted
//    to compete at any one time"; Open, All Service and Middle School divisions; Network Security Challenge and Cisco
//    Networking Challenge; "one continuous 4-hour block"; CyberPatriot 19 (2026-27) teams "must be created by October
//    1, 2026", roster by October 21, 2026; rounds Oct 22-25, Nov 12-15, Dec 10-13 2026, Semifinals Jan 21-23 2027,
//    National Finals March 12-16, 2027; finals in Bethesda, MD.
//  - picoCTF / CyLab Security Academy (picoctf.org, cylabacademy.org, /competitors.html): "picoCTF.org is now CyLab
//    Security Academy"; "Always free"; "an annual flagship for US middle and high school students"; "teams of up to
//    five"; eight domains; no 2027 event dates posted on the read date.
//  - Congressional App Challenge (copies of the pilot sources, 2026 rulebook): deadline "12:00 pm EDT, Monday, October
//    26th, 2026", AI "fully disclosed in the submission materials".
//  - Presidential SI Challenge (orise.orau.gov/si-challenge/, formerly the Presidential AI Challenge): High School
//    Student Category "grades 9-12", "1-4 high school students and one Team Leader", Team Leader "21 years or older";
//    PDF "no more than 10 pages PLUS a title page"; video "4-minute maximum"; content "created specifically for the
//    Challenge after August 1, 2026"; registration deadline December 18, 2026, submission December 23, 2026, 5:00 p.m.
//    Eastern; National Championships June 6-9, 2027; renamed by an executive order of September 29, 2026.
//  - USA-NA-AIO (usaaio.org): Round 1 "Friday, February 19, 2027, from 12:00 p.m. to 3:00 p.m. U.S. Eastern Time";
//    registration closes January 31, 2027; "It is an individual competition."
//  - FIRST (firstinspires.org): FIRST Tech Challenge "Grades 7-12 | Ages 12-18", FIRST Robotics Competition "Grades
//    9-12 | Ages 14-18"; game "released every September"; 2026-2027 season FIRST CANOPY.
// Our own material, labelled on the page: the reading-log practice problem, both solutions and the operation counts
// (100,000 x 100,000 = 10,000,000,000 for the slow version, about 200,000 for the prefix-sum version); the ACSL
// string-parsing example; the school-year plan. Lesson family: estimating running time before writing code.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'COMPETITION', blurb: 'USACO, ACSL, CyberPatriot, picoCTF, the Congressional App Challenge and the Presidential SI Challenge compared from their own 2026-27 rules.' },
  slug: 'coding-competitions-for-high-school-students',
  code: 'com',
  accent: '#0C0D52',
  accentRationale: 'Coding competitions for high school students: a deep scoreboard indigo #0C0D52 from the US allocation table, far from the other US accents, high contrast on every paper',
  pageType: 'market',
  market: US,
  routeLabel: 'Coding competitions for high school students',
  title: 'Coding Competitions for High School Students: 2026-27 Guide',
  description: 'USACO, ACSL, CyberPatriot, picoCTF, the Congressional App Challenge and more, from each organiser\'s 2026-27 rules: grades, format, AI rules and key dates.',
  ogDescription: 'Eight competitions US high schoolers can enter this school year, each described from its own official site: who can enter, how it is scored, what it says about AI, and when it runs.',
  twitterDescription: 'US high school coding competitions for 2026-27, from the organisers\' own rules.',
  pageName: 'Coding Competitions for High School Students',
  webPageDescription: 'A guide for US high school students and parents to coding, cybersecurity and build competitions in the 2026-27 school year, built from each organiser\'s official site, with a practice problem and a season plan.',
  courseDescription: 'Live online competitive programming, cybersecurity and app-building classes for US high school students preparing for coding competitions, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'High school coding competitions',
  navLinks: [
    { href: '#glance', label: 'At a glance' },
    { href: '#usaco', label: 'USACO' },
    { href: '#acsl', label: 'ACSL' },
    { href: '#ai', label: 'AI rules' },
    { href: '#practice', label: 'Practice problem' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grades 9 to 12 &middot; The 2026-27 school year',
  h1: 'Coding competitions for high school students',
  lede: 'A high schooler in the US can spend this school year on algorithm contests, a computer science league run through school teams, a cyber defense competition, capture the flag events, or a build challenge judged on a finished app. They reward different skills and run on different calendars, so picking two that suit the student beats entering everything. This page describes eight of them, each from the organiser&rsquo;s own website as read on 17 October 2026, then gives a practice problem and a month-by-month plan from our teachers.',
  secondaryCta: { href: '#season', label: 'See the season plan' },
  wa: 'Hello Modern Age Coders, my high schooler in the US wants to enter coding competitions this year. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; contest problems explained line by line',
  spec: [
    ['Grades', '9 to 12'],
    ['Contests', 'Algorithms, CS theory, security, apps'],
    ['Languages', 'C++, Java, Python and more'],
    ['Solo or team', 'Both, depending on the event'],
    ['AI tools', 'Banned in some, required in one'],
    ['Season', 'October to June'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'The main coding competitions open to US high school students in 2026-27 are USACO (free online algorithm contests in C, C++, Java or Python), ACSL (four school-team contests from October 19, 2026), CyberPatriot (team cyber defense), picoCTF (now CyLab Security Academy, free capture the flag), the Congressional App Challenge, the Presidential SI Challenge, the USA-NA-AIO and FIRST robotics. Modern Age Coders prepares teens for them in live online classes.',

  picks: {
    eyebrow: 'Prepare with a teacher',
    h2: 'Three courses behind most high school contest entries',
    lede: 'Pick by the kind of contest: algorithms, security, or a finished app that judges can open.',
    items: [
      { course: 'competitive-programming-for-teens-course', code: 'COM / 01', title: 'Competitive programming for teens', note: 'Teens 13 to 18: contest problems from simulation and sorting up to graphs.' },
      { course: 'picoctf-cyberpatriot-cybersecurity-competition-prep-for-teens', code: 'COM / 02', title: 'picoCTF and CyberPatriot prep', note: 'Teens 13 to 18: capture the flag puzzles and hardening Windows and Linux.' },
      { course: 'complete-app-development-masterclass-for-teens', code: 'COM / 03', title: 'App development for teens', note: 'Teens 13 to 18: one finished app, ready for a judge to open.' }
    ]
  },

  sections: [
    {
      id: 'glance', tint: 'tint', eyebrow: 'At a glance',
      h2: 'Eight high school coding competitions compared',
      lede: 'One row per competition, every cell taken from that organiser&rsquo;s own pages. Where a 2026-27 date was not yet published on 17 October 2026, the cell says so instead of guessing.',
      body: [
        { kind: 'table', caption: 'High school coding competitions in the US, 2026-27 (official sites read 17 October 2026)', head: ['Competition', 'What students do', 'Solo or team', 'Who can enter', '2026-27 timing'], rows: [
          ['USACO', 'Algorithm problems solved in C, C++, Java or Python, scored on hidden test cases', 'Solo', 'Anyone online; camp selection is for pre-college students in the USA', 'Not yet published; the 2025-26 season ran three online contests in January and February 2026 and a proctored US Open on March 28'],
          ['ACSL', 'A 30-minute short answer test on CS topics plus a 72-hour programming problem, four times a year', 'School teams, scored individually too', 'K-12 schools and groups; Senior and Intermediate divisions suit high school', 'Contest #1 opens October 19, 2026; Finals on Saturday, May 29, 2027'],
          ['CyberPatriot', 'Find and fix security problems in Windows and Linux images, plus a Cisco networking quiz', 'Teams of two to six, five at a time', 'High school teams in the Open or All Service Division', 'Team creation closed October 1, 2026; Round 1 runs October 22 to 25, 2026'],
          ['picoCTF (CyLab Security Academy)', 'Capture the flag challenges in eight security domains', 'Solo, or teams of up to five in team events', 'Anyone can practise; the annual flagship is for US middle and high school students', 'Flagship dates not yet posted'],
          ['Congressional App Challenge', 'Build an app in any language, then record a demo of one to three minutes', 'Solo or up to four', 'Middle and high school students in a participating district', 'Deadline 12:00 pm EDT, Monday, October 26, 2026'],
          ['Presidential SI Challenge', 'A project that applies SI (the new federal term for AI) to a community problem, as a PDF and a video', 'One to four students with an adult Team Leader', 'Grades 9 to 12 in the High School Student Category', 'Register by December 18, 2026; submit by December 23, 2026'],
          ['USA-NA-AIO', 'Machine learning theory and coding in Google Colab, proctored', 'Solo', 'Middle and high school students in the US or Canada, under 20 by August 30', 'Round 1 on Friday, February 19, 2027'],
          ['FIRST Robotics and FIRST Tech Challenge', 'Design and build a robot for a game released each September', 'Teams with mentors', 'FIRST Robotics Competition grades 9 to 12; FIRST Tech Challenge grades 7 to 12', 'The 2026-2027 season is called FIRST CANOPY']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How to read the table',
          left: [
            'The first split is solo versus team. USACO, the USA-NA-AIO and the ACSL tests are taken alone; CyberPatriot, FIRST and the build challenges are team efforts where communication matters as much as code.',
            'The second split is speed versus depth. A timed algorithm contest rewards clean thinking under a clock, while an app or SI project rewards a student who can keep improving one idea for weeks.'
          ],
          rightH3: 'Picking two, not eight',
          right: [
            'A sensible pair for most students is one individual contest that runs on its own schedule, such as USACO or ACSL, and one team or build event that fits the fall, such as CyberPatriot or the Congressional App Challenge.',
            'Students who already enjoy maths proofs tend to like USACO. Students who like taking systems apart often prefer capture the flag. Students who want something to show people usually want a build challenge.'
          ] },
        { kind: 'source', html: 'Sources: the official sites of <a class="ag-inline-link" href="https://usaco.org/index.php?page=instructions" rel="noopener" target="_blank">USACO</a>, <a class="ag-inline-link" href="https://www.acsl.org/get-started/schedule" rel="noopener" target="_blank">ACSL</a>, <a class="ag-inline-link" href="https://www.uscyberpatriot.org/competition-schedule/" rel="noopener" target="_blank">CyberPatriot</a>, <a class="ag-inline-link" href="https://cylabacademy.org/competitors.html" rel="noopener" target="_blank">CyLab Security Academy</a>, the <a class="ag-inline-link" href="https://www.congressionalappchallenge.us/students/rules/" rel="noopener" target="_blank">Congressional App Challenge</a>, the <a class="ag-inline-link" href="https://orise.orau.gov/si-challenge/about/timeline.html" rel="noopener" target="_blank">Presidential SI Challenge</a>, <a class="ag-inline-link" href="https://usaaio.org/2027-usa-na-aio" rel="noopener" target="_blank">USAAIO</a> and <a class="ag-inline-link" href="https://www.firstinspires.org/robotics/ftc" rel="noopener" target="_blank">FIRST</a>, all read on 17 October 2026. None of these organisations has any link with Modern Age Coders.' }
      ]
    },
    {
      id: 'usaco', tint: 'deep', eyebrow: 'USACO',
      h2: 'USACO: free online algorithm contests in four divisions',
      lede: 'The USA Computing Olympiad runs free online algorithm contests in four divisions. Its rules page is short and specific, which makes it easy to prepare for precisely.',
      body: [
        { kind: 'table', caption: 'USACO contest rules, from the official instructions page (read 17 October 2026)', head: ['Topic', 'As published by USACO'], rows: [
          ['Who', '"All are welcome to participate in online USACO contests and training." Selection for the summer camp and the IOI and EGOI teams is limited to pre-college students in the USA.'],
          ['Cost', '"There is never any fee for participation."'],
          ['Divisions', 'Bronze, silver, gold and platinum. "All new participants start out in the bronze division"; full marks during a contest moves a student up straight away.'],
          ['Languages', 'Solutions in C, C++, Java or Python. All bronze-level problems are meant to be fully solvable in Python; some higher-division problems may not be.'],
          ['Length', 'Typically 3 or 4 problems. The personal timer of about four to five hours starts when the student opens the contest, at any point in the window.'],
          ['Time limits', 'For most contests, 2 seconds per input case for C and C++, and 4 seconds per input case for Java and Python.'],
          ['Feedback', 'Green for a correct test case, and X, T, !, E or M for a wrong answer, a time limit, a crash or memory limit, an empty output and a missing output.'],
          ['Integrity', '"Use of generative AI (e.g., services like copilot or ChatGPT) is prohibited." No pre-written code or templates, no teamwork, no VPNs.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The 2025-26 season, as a guide to 2026-27',
          left: [
            'On 17 October 2026 the USACO home page still showed the 2025-26 schedule: online contests on January 9 to 12, January 30 to February 2 and February 20 to 23, 2026, then a proctored US Open on March 28, 2026. The site describes that season as somewhat transitional.',
            'No 2026-27 dates were posted on the read date. Students should plan for contests in the winter and check usaco.org before the new year rather than rely on last season&rsquo;s weekends.'
          ],
          rightH3: 'What the time limit really means',
          right: [
            'Two seconds sounds generous until the input has 100,000 numbers. The skill USACO rewards most is estimating how many steps a solution will take before typing it, which is exactly what the practice problem further down this page teaches.',
            'Our longer guide to <a class="ag-inline-link" href="/usaco-preparation-online-coaching">USACO coaching</a> covers the divisions in more depth, and the blog post on <a class="ag-inline-link" href="/blog/usaco-bronze-to-silver-what-blocks-most-students">moving from bronze to silver</a> covers the most common sticking point.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://usaco.org/index.php?page=instructions" rel="noopener" target="_blank">USACO contest instructions and rules</a> and the <a class="ag-inline-link" href="https://usaco.org/index.php" rel="noopener" target="_blank">USACO home page</a>, read 17 October 2026.' }
      ]
    },
    {
      id: 'acsl', tint: 'tint', eyebrow: 'ACSL',
      h2: 'ACSL: four contests through the school year, run by a team advisor',
      lede: 'The American Computer Science League mixes computer science theory with programming, and it runs through schools and groups rather than individual sign-ups. Registration for 2026-27 opened before this page was written.',
      body: [
        { kind: 'table', caption: 'The ACSL 2026-27 regular season, from the official schedule page (read 17 October 2026)', head: ['Contest', 'Opens', 'Closes'], rows: [
          ['Contest #1', 'October 19, 2026', 'Sunday, January 10, 2027, 11:59 pm Eastern'],
          ['Contest #2', 'January 4, 2027', 'Sunday, February 28, 2027, 11:59 pm Eastern'],
          ['Contest #3', 'February 1, 2027', 'Sunday, April 11, 2027, 11:59 pm Eastern'],
          ['Contest #4', 'March 1, 2027', 'Sunday, May 23, 2027, 11:59 pm Eastern'],
          ['Invitational Finals', 'Invitations from May 1, 2027', 'Saturday, May 29, 2027, online']
        ] },
        { kind: 'table', mt: true, caption: 'ACSL divisions and rules that matter to high schoolers, from the Divisions, Registration and FAQ pages', head: ['Item', 'ACSL&rsquo;s own wording or rule'], rows: [
          ['Senior Division', 'For high school students with programming experience, especially those taking AP Computer Science'],
          ['Intermediate Division', 'For high school students with little or no programming experience, and advanced junior high students'],
          ['Each contest', 'An online 30-minute, 6-question short answer test and a programming problem to solve in 72 hours'],
          ['Languages', 'Python 3, Java or C++. Short answer questions may show code in ACSL Programming Language, LISP or Assembly Language, which students only need to read'],
          ['Teams', 'A 5-score team can have up to 10 students and a 3-score team up to 6; the team score adds the top 5 or top 3 scores each contest'],
          ['Registration', 'By a team advisor, not by students; the season deadline is December 31, 2026'],
          ['Advisor', '"An ACSL advisor can be any teacher, parent or other adult with some CS experience."'],
          ['During tests', '"No calculators are allowed." Paper and pencil only; no internet help and no help from people'],
          ['Finals cut-off', 'At least 28 points in the Junior, Intermediate and Senior Divisions']
        ] },
        { kind: 'code', mt: true, label: 'How ACSL passes a list to your function (our example)', lang: 'Python', code: '# ACSL\'s FAQ says its driver passes only primitives, so a list of\n# numbers arrives as one string. Split it and convert first.\n\ndef largest_gap(numbers_text):\n    values = [int(part) for part in numbers_text.split()]\n    values.sort()\n    gaps = [values[i + 1] - values[i] for i in range(len(values) - 1)]\n    return max(gaps) if gaps else 0\n\nprint(largest_gap("12 3 40 18 7"))   # sorted: 3 7 12 18 40, gaps 4 5 6 22, prints 22\nprint(largest_gap("5"))              # one value, no gap, prints 0', note: 'Our own function and test strings. The point is the first line inside the function: forgetting to split and convert the string is a common way to lose a whole programming problem.' },
        { kind: 'two', mt: true,
          leftH3: 'If your school has no ACSL team',
          left: [
            'Because any teacher, parent or other adult with some CS experience can act as advisor, a parent can register a small team. ACSL&rsquo;s FAQ says there is no minimum number of students, and it answers yes to homeschoolers directly.',
            'One rule to know: a student in an after-school program whose full-time school already has an ACSL team must compete on the school&rsquo;s team.'
          ],
          rightH3: 'Why the short answer half matters',
          right: [
            'Topics range from number systems to Boolean algebra and digital electronics, and the 30 minutes go quickly. Students who only practise programming often score well on the 72-hour problem and lose the contest on the theory half.',
            'Our practice sessions alternate: one week of short answer drills on the ACSL wiki topics, one week of a full programming problem with tests.'
          ] },
        { kind: 'source', html: 'Sources: ACSL <a class="ag-inline-link" href="https://www.acsl.org/get-started/schedule" rel="noopener" target="_blank">Schedule</a>, <a class="ag-inline-link" href="https://www.acsl.org/get-started/divisions" rel="noopener" target="_blank">Divisions</a>, <a class="ag-inline-link" href="https://www.acsl.org/get-started/finals" rel="noopener" target="_blank">Finals</a>, <a class="ag-inline-link" href="https://www.acsl.org/Registration" rel="noopener" target="_blank">Registration</a> and <a class="ag-inline-link" href="https://www.acsl.org/about/faq" rel="noopener" target="_blank">FAQ</a>, read 17 October 2026. Our <a class="ag-inline-link" href="/acsl-competition-preparation">ACSL preparation guide</a> goes topic by topic.' }
      ]
    },
    {
      id: 'ai', tint: 'deep', eyebrow: 'The AI question',
      h2: 'What each competition says about AI tools',
      lede: 'This is an easy rule to get wrong, because it changes completely from one event to the next. Breaking it in USACO can mean a lifetime ban; ignoring it in the Presidential SI Challenge means missing the point of the contest.',
      body: [
        { kind: 'table', caption: 'AI and outside help in each competition, from the organisers&rsquo; own pages (read 17 October 2026)', head: ['Competition', 'Rule on AI or outside help'], rows: [
          ['USACO', 'Generative AI is prohibited during contests; violations lead to a lifetime ban from all USACO activities'],
          ['ACSL', 'Tests are individual; HackerRank plagiarism checks apply, and the Finals run in a secure mode with full-screen enforcement and webcam image analysis'],
          ['USA-NA-AIO', 'Part 1 runs with app lockdown; Part 2 allows Google Colab while monitoring software and a screen and face recording stay on'],
          ['Congressional App Challenge', 'AI tools are permitted if all AI usage is fully disclosed in the submission materials, and AI must not be the entirety of the technical development'],
          ['Presidential SI Challenge', 'The project is about applying SI; teams are asked how they tested or verified the accuracy of SI-generated outputs'],
          ['CyberPatriot', 'Teams may ask technical support questions during a round, but not about the vulnerabilities themselves']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'One habit that works everywhere',
          left: [
            'Our students practise contest problems with AI switched off from the first week, so a ban never comes as a shock. For build projects, they keep a short log of every AI suggestion they kept and why, which turns disclosure into a five-minute task.',
            'ACSL puts the reason plainly on its Finals page: "It is not a contest to see if the student can get the answer using AI, friends, parents, or random internet sources".'
          ],
          rightH3: 'Age limits on the tools themselves',
          right: [
            'Contest rules are only half of it. Each AI product publishes its own age floor, and a few refuse anyone under 18 outright, so a teenager should check that floor first and involve a parent when opening an account.',
            'Our post on <a class="ag-inline-link" href="/blog/how-to-use-chatgpt-to-study-without-cheating">studying with AI without cheating</a> covers the line between help and doing the work for you.'
          ] }
      ]
    },
    {
      id: 'security', tint: 'tint', eyebrow: 'Security contests',
      h2: 'CyberPatriot and picoCTF: two very different security competitions',
      lede: 'Both are about cybersecurity, but one is defense on a deadline as a team, and the other is a puzzle hunt you can practise alone all year.',
      body: [
        { kind: 'table', caption: 'CyberPatriot 19 (2026-27) competition rounds for high school teams, from the official schedule (read 17 October 2026)', head: ['Round', 'Dates', 'Who takes part'], rows: [
          ['Round 1', 'October 22 to 25, 2026', 'All Open and All Service Division teams'],
          ['Round 2', 'November 12 to 15, 2026', 'All teams, even those that missed Round 1'],
          ['State Round', 'December 10 to 13, 2026', 'All teams, on a clean slate, placed in tiers by skill'],
          ['Semifinals', 'January 21 to 23, 2027', 'Qualifying teams only'],
          ['National Finals', 'March 12 to 16, 2027', 'National Finalist teams, in person']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'CyberPatriot in brief',
          left: [
            'Teams have a coach, who is an approved adult, and between two and six competitors, with at most five competing at any one time. Each team picks one continuous 4-hour block inside the competition weekend window.',
            'For CyberPatriot 19, teams had to be created by October 1, 2026 and competitors added to a roster by October 21, 2026. A student who missed this season can still use the archived training materials and plan to join a team for next season.'
          ],
          rightH3: 'picoCTF, now CyLab Security Academy',
          right: [
            'The picoCTF site now points visitors to CyLab Security Academy, Carnegie Mellon University&rsquo;s free platform. Its competitors page describes mini-competitions through the year plus an annual flagship for US middle and high school students.',
            'Events allow teams of up to five or are solo, set event by event. Eight domains are covered, from general skills and cryptography to web exploitation, forensics and an AI category on prompt injection. Flagship dates for 2027 were not posted on the read date.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.uscyberpatriot.org/competition-overview/" rel="noopener" target="_blank">CyberPatriot competition overview</a>, <a class="ag-inline-link" href="https://www.uscyberpatriot.org/competition-schedule/" rel="noopener" target="_blank">schedule</a> and <a class="ag-inline-link" href="https://www.uscyberpatriot.org/join-the-competition/" rel="noopener" target="_blank">registration</a> pages; <a class="ag-inline-link" href="https://cylabacademy.org/competitors.html" rel="noopener" target="_blank">CyLab Security Academy competitors page</a>; all read 17 October 2026.' }
      ]
    },
    {
      id: 'build', tint: 'deep', eyebrow: 'Build challenges',
      h2: 'Build challenges: an app or an SI project instead of a timed test',
      lede: 'Two national challenges ask high schoolers to make something and explain it. Both have hard deadlines in the next few months of the 2026-27 school year.',
      body: [
        { kind: 'table', caption: 'Two build challenges compared, from their official 2026-27 rules (read 17 October 2026)', head: ['Point', 'Congressional App Challenge (2026)', 'Presidential SI Challenge (2026-27)'], rows: [
          ['Who', 'Middle and high school students in a participating Congressional District', 'High School Student Category: grades 9 to 12, with parental consent'],
          ['Team', 'Solo or up to four students', 'One to four students and one Team Leader aged 21 or older'],
          ['What you hand in', 'An app plus a demo video of 1 to 3 minutes and written answers', 'A PDF of no more than 10 pages plus a title page, and a video of 4 minutes at most'],
          ['Deadline', '12:00 pm EDT, Monday, October 26, 2026', 'Team sign-up closes December 18, 2026 and the project is due December 23, 2026, at 5:00 p.m. Eastern each time'],
          ['After that', 'Each Member of Congress&rsquo;s office judges in November and names winners in December', 'State champions in February 2027, regional rounds between March 4 and April 8, 2027, national event June 6 to 9, 2027']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The name change',
          left: [
            'Families searching for the Presidential AI Challenge will find the same program under a new name. The official site says an executive order of September 29, 2026 replaced "Artificial Intelligence" with "Super Intelligence" in the executive branch, so the contest is now the Presidential SI Challenge.',
            'The rules also set a Trailblazer Track for projects that are novel and have nationwide impact; every other project goes in the Standard Track.'
          ],
          rightH3: 'Doing both',
          right: [
            'The deadlines are two months apart, so a student can enter the Congressional App Challenge in October and then turn to an SI project for December. The Presidential rules require original work created after August 1, 2026, so plan a separate project rather than reusing the app.',
            'Our <a class="ag-inline-link" href="/congressional-app-challenge-guide">Congressional App Challenge guide</a> walks through that rulebook in detail, and the <a class="ag-inline-link" href="/presidential-ai-challenge-guide">Presidential AI Challenge guide</a> covers the SI Challenge, renamed on 29 September 2026.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.congressionalappchallenge.us/students/rules/" rel="noopener" target="_blank">Congressional App Challenge rules</a> and 2026 rulebook; Presidential SI Challenge <a class="ag-inline-link" href="https://orise.orau.gov/si-challenge/about/eligibility.html" rel="noopener" target="_blank">eligibility</a>, <a class="ag-inline-link" href="https://orise.orau.gov/si-challenge/complete-the-challenge/requirements.html" rel="noopener" target="_blank">requirements</a> and <a class="ag-inline-link" href="https://orise.orau.gov/si-challenge/" rel="noopener" target="_blank">home</a> pages; read 17 October 2026.' }
      ]
    },
    {
      id: 'practice', tint: 'tint', eyebrow: 'Try one',
      h2: 'A practice problem in the style of an algorithm contest',
      lede: 'This problem is ours, written for this page, not taken from any contest. It shows the single idea that separates a passing solution from one that times out.',
      body: [
        { kind: 'p', html: '<b>The reading log.</b> A student logged the pages read on each of N days. You are then asked Q questions, each giving two days a and b, and you must print the total pages read from day a to day b inclusive. N and Q can each be as large as 100,000. Input: N and Q on the first line, the N page counts on the second, then Q lines of a and b.' },
        { kind: 'code', mt: true, label: 'A fast solution with prefix sums (ours)', lang: 'Python', code: 'import sys\n\ndef main():\n    data = sys.stdin.read().split()\n    n, q = int(data[0]), int(data[1])\n    pages = [int(x) for x in data[2:2 + n]]\n\n    # prefix[i] = pages read on days 1..i, so prefix[0] = 0\n    prefix = [0] * (n + 1)\n    for i in range(n):\n        prefix[i + 1] = prefix[i] + pages[i]\n\n    out = []\n    pos = 2 + n\n    for _ in range(q):\n        a, b = int(data[pos]), int(data[pos + 1])\n        pos += 2\n        out.append(prefix[b] - prefix[a - 1])\n    print("\\n".join(map(str, out)))\n\nmain()\n\n# Sample input:      Sample output:\n# 5 2                6\n# 3 1 4 1 5          14\n# 2 4\n# 1 5', note: 'Days 2 to 4 are 1 + 4 + 1 = 6 pages; days 1 to 5 are 3 + 1 + 4 + 1 + 5 = 14 pages.' },
        { kind: 'table', mt: true, caption: 'Why the obvious solution fails (our estimate of the work, worst case)', head: ['Approach', 'Work per question', 'Total steps when N = Q = 100,000', 'Verdict'], numCols: [2], rows: [
          ['Add up the days for every question', 'Up to N additions', '100,000 x 100,000 = 10,000,000,000', 'Far too slow for a 4-second limit'],
          ['Build prefix sums once, subtract per question', 'One subtraction', 'About 100,000 + 100,000 = 200,000', 'Comfortably fast, even in Python']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The habit this builds',
          left: [
            'Before writing a line, multiply the input sizes. If the answer is in the billions, the plan needs to change. Our rough rule of thumb in class is that plain Python manages somewhere in the tens of millions of simple steps per second, so ten billion is hopeless.',
            'Prefix sums, sorting first, and counting with a dictionary are the three tricks that rescue most early contest problems.'
          ],
          rightH3: 'Two follow-ups to try',
          right: [
            'Change the question to the most pages read on any single day between a and b. Prefix sums no longer work; why not?',
            'Change it to the number of days between a and b with at least 10 pages. Can you build a prefix count instead of a prefix sum?'
          ] }
      ]
    },
    {
      id: 'season', tint: 'deep', eyebrow: 'A season plan',
      h2: 'A school-year plan for grades 9 to 12',
      lede: 'Our plan for a student who wants one individual contest and one team or build event. It uses the published 2026-27 dates where they exist and marks the gaps.',
      body: [
        { kind: 'table', caption: 'The 2026-27 school year for a high school competitor (our plan, built on the official dates above)', head: ['Month', 'Contest dates', 'What the student works on'], rows: [
          ['October 2026', 'ACSL Contest #1 opens Oct 19; CyberPatriot Round 1 Oct 22 to 25; Congressional App Challenge due Oct 26', 'Finish and submit the app; first ACSL short answer drills'],
          ['November 2026', 'CyberPatriot Round 2 Nov 12 to 15', 'Prefix sums, sorting and simulation problems'],
          ['December 2026', 'CyberPatriot State Round Dec 10 to 13; SI Challenge registration Dec 18 and project Dec 23; ACSL registration deadline Dec 31', 'An SI project if entering; timed USACO-style practice'],
          ['January 2027', 'ACSL Contest #1 closes Jan 10; ACSL #2 opens Jan 4; USA-NA-AIO registration closes Jan 31', 'Winter USACO contests are expected, dates to confirm on usaco.org'],
          ['February 2027', 'USA-NA-AIO Round 1 Feb 19; ACSL #2 closes Feb 28', 'Graphs and recursion for anyone moving up a USACO division'],
          ['March to May 2027', 'CyberPatriot National Finals Mar 12 to 16; ACSL #3 and #4; ACSL Finals May 29', 'Review every contest done this year and rewrite two weak solutions'],
          ['Summer 2027', 'Off season for most contests', 'One bigger project and a fresh look at the 2027-28 rulebooks']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Grade 9', p: 'Start with ACSL Intermediate or USACO bronze in Python. One team event is plenty.' },
          { h3: 'Grades 10 and 11', p: 'Move to C++ or Java if aiming past bronze, and add a security or build event.' },
          { h3: 'Grade 12', p: 'Fall deadlines matter most; enter early-season events and keep spring for review.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where students start',
    h2: 'Four stages on the way to contest-ready',
    lede: 'Every would-be competitor sits somewhere on this ladder.',
    table: { caption: 'From first program to contest-ready (ours)', head: ['Step', 'Signs a student is here'], rows: [
      ['1. Coder', 'Writes small programs with loops and lists, but not to a time limit'],
      ['2. Solver', 'Solves easy contest problems with enough time and a few hints'],
      ['3. Estimator', 'Checks the input size first and picks an approach that will run in time'],
      ['4. Competitor', 'Solves under a clock, tests edge cases, and reviews every contest afterwards']
    ] },
    left: { h3: 'For parents', ps: [
      'The jump from stage 2 to stage 3 is usually the hardest one, and it is a thinking habit, not a new language.',
      'Ask your teen what the input size was in their last problem. If they do not know, that is the habit to build.'
    ] },
    right: { h3: 'For students', ps: [
      'Keep a notebook of every problem you could not solve and the idea that unlocked it.',
      'Read the official rules for each event yourself; they are short and they change every season.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for high school competitors',
    lede: 'Each is taught live by one teacher who stays with the group, or privately for a single student.',
    bands: [
      { num: 'I', h3: 'Algorithms', sub: 'USACO and ACSL', courses: [
        { code: 'COM / ALG / 01', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Contest problems, timed.' },
        { code: 'COM / ALG / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving and DSA', blurb: 'The data structures contests use.' },
        { code: 'COM / ALG / 03', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ for teens', blurb: 'The usual language past bronze.' }
      ] },
      { num: 'II', h3: 'Security and AI', sub: 'CyberPatriot, picoCTF, SI projects', courses: [
        { code: 'COM / SEC / 01', slug: 'picoctf-cyberpatriot-cybersecurity-competition-prep-for-teens', title: 'Cybersecurity competitions', blurb: 'Flags, images and networking.' },
        { code: 'COM / SEC / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'Models you can explain.' },
        { code: 'COM / SEC / 03', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The language under all three.' }
      ] },
      { num: 'III', h3: 'Building', sub: 'Apps and school CS', courses: [
        { code: 'COM / BLD / 01', slug: 'complete-app-development-masterclass-for-teens', title: 'App development', blurb: 'An app judges can open.' },
        { code: 'COM / BLD / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'For USACO and ACSL in Java.' },
        { code: 'COM / BLD / 03', slug: 'ap-computer-science-a-java-exam-prep-course', title: 'AP Computer Science A', blurb: 'Java and the AP exam together.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live classes that fit around contest weekends',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After-school batches in US time zones.' },
      { time: 'Weekends', l: 'Useful in the weeks before a contest window opens.' },
      { time: '1-on-1', l: 'Timed around one student&rsquo;s contest calendar.' }
    ],
    cells: [
      { h3: 'Problem review', p: 'Every unsolved problem gets a written idea.' },
      { h3: 'Timed rounds', p: 'Mock contests with the real time limits.' },
      { h3: 'AI off', p: 'Practice runs the way the strict contests do.' },
      { h3: 'Theory drills', p: 'ACSL topics in short weekly sets.' },
      { h3: 'Any state', p: 'Online, from any US time zone.' },
      { h3: 'Group or private', p: 'Fifteen to twenty in a batch, or one student.' }
    ]
  },

  projectsH2: 'Work our students have built',
  projectsLede: 'Programs and apps by our learners, many started as practice for a contest. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'What parents wrote on Google, word for word.',

  fees: {
    h2: 'Fees',
    lede: 'USACO and CyLab Security Academy cost nothing to enter; what families pay us for is the teaching and the practice. Fees are monthly, in US dollars, with no contract for the season, so a student can join before a contest window and pause after it.',
    free: ['A free first lesson', 'Bring a contest problem', 'No card details'],
    group: ['Fifteen to twenty learners', 'One regular teacher', 'Choose your batch', 'Monthly'],
    one: ['A teacher to yourself', 'Planned around your contests', 'Your own problem list']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'High school coding competitions: common questions',
    items: [
      { q: 'What coding competitions can high school students enter in the US?', a: 'For 2026-27 the main ones are USACO, ACSL, CyberPatriot, picoCTF (now part of CyLab Security Academy), the Congressional App Challenge, the Presidential SI Challenge, the USA-NA-AIO and the FIRST robotics programs. Each has its own eligibility and calendar.' },
      { q: 'Which coding competition should a beginner in grade 9 start with?', a: 'A student who can write basic Python can start USACO in the bronze division or ACSL in the Intermediate Division, which ACSL describes as suited to high schoolers with little or no programming experience.' },
      { q: 'Is USACO free?', a: 'Yes. The USACO rules page says there is never any fee for participation, and anyone can take the online contests.' },
      { q: 'Can I use ChatGPT or Copilot in a coding competition?', a: 'It depends on the event. USACO prohibits generative AI during contests. The Congressional App Challenge allows AI if all use is disclosed. The Presidential SI Challenge is about applying SI, with accuracy checks. Always read the current rules.' },
      { q: 'When does ACSL start in 2026-27?', a: 'ACSL Contest #1 opens on October 19, 2026 and closes on January 10, 2027. Team registration by an advisor closes on December 31, 2026, and the online Finals are on May 29, 2027.' },
      { q: 'Can I still join CyberPatriot this season?', a: 'For CyberPatriot 19, teams had to be created by October 1, 2026 and rosters finalised by October 21, 2026, so a student without a team should plan for the next season and use the training materials now.' },
      { q: 'Which language should I learn for coding competitions?', a: 'Python is fine for USACO bronze and for ACSL. USACO notes that C++ is the only language supported at the IOI, so students aiming for the top divisions usually move to C++ or Java.' },
      { q: 'Is the Presidential AI Challenge still running?', a: 'Yes, under a new name. The official site now calls it the Presidential SI Challenge. For 2026-27, high school teams sign up by December 18, 2026, and their projects are due five days later, on December 23, 2026.' },
      { q: 'Do coding competitions help with college applications?', a: 'Colleges decide for themselves how they weigh any activity, so we make no promises. What a competition reliably gives is practice under a deadline and real problems to talk about.' },
      { q: 'When are your classes held?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you connected with USACO, ACSL or any of these competitions?', a: 'No. Modern Age Coders is an independent online school. We teach the skills these contests test, and we read each organiser\'s published rules so our students know what to expect.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Deeper guides to single competitions and the skills behind them.',
    items: [
      { href: '/usaco-preparation-online-coaching', label: 'USACO coaching', p: 'Bronze to platinum, division by division.' },
      { href: '/congressional-app-challenge-guide', label: 'Congressional App Challenge', p: 'The 2026 rulebook, read in full.' },
      { href: '/hackathons-for-high-school-students', label: 'Hackathons', p: 'Weekend build events for teens.' },
      { href: '/acsl-competition-preparation', label: 'ACSL preparation', p: 'Short answer topics and the 72-hour problem.' },
      { href: '/cyberpatriot-preparation', label: 'CyberPatriot preparation', p: 'Images, scoring and team roles.' },
      { href: '/picoctf-for-beginners', label: 'picoCTF for beginners', p: 'First flags, step by step.' },
      { href: '/technovation-girls-guide', label: 'Technovation Girls', p: 'The app and AI challenge for girls.' },
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'Every page we have for US families.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Tell us which contest is next on the calendar. In the first lesson the teacher works through one problem with your teen and suggests where to begin.',
    readFirst: 'Want to see our approach first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> explains the lesson structure, and the <a class="ag-inline-link" href="/courses">course list</a> has every syllabus.',
    note: 'Teachers work from India over live video, so there is nowhere to visit in person. A WhatsApp message usually gets the quickest reply.',
    formNote: 'Free first lesson. No payment details.'
  },

  footer: {
    cols: [
      { h4: 'Compete', links: [
        { href: '/usaco-preparation-online-coaching', label: 'USACO coaching' },
        { href: '/congressional-app-challenge-guide', label: 'Congressional App Challenge' },
        { href: '/hackathons-for-high-school-students', label: 'Hackathons for high schoolers' },
        { href: '/math-olympiad-amc-tutoring', label: 'Math olympiad coaching' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/ap-computer-science-a-online-classes', label: 'AP Computer Science A' },
        { href: '/ai-projects-for-high-school-students', label: 'AI projects for high schoolers' },
        { href: '/computer-science-extracurriculars', label: 'CS extracurriculars' }
      ] }
    ],
    bottomRight: 'Multiply the input sizes first'
  },

  personalityCss: `
.ag-root.ag-com .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-com .ag-capsule { border-left-width: 5px; border-radius: 0; }
.ag-root.ag-com .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-com .ag-table caption { text-align: left; font-weight: 600; letter-spacing: 0.01em; }
.ag-root.ag-com .ag-band-head h3 { letter-spacing: -0.006em; }
.ag-root.ag-com .ag-slots { gap: 1.1rem; }
`,

  dossier: {
    curriculumAuthority: 'Each competition from its own official site, read raw on 17 October 2026: USACO instructions and home (free, bronze start, C/C++/Java/Python, 3 or 4 problems, 4..5 hours, 2 s and 4 s limits, generative AI prohibited, 2025-26 schedule); ACSL schedule, divisions, finals, registration, FAQ (Contest #1 Oct 19 2026, windows to May 23 2027, Finals May 29 2027, 30-minute 6-question test and 72-hour problem, team sizes, advisor rule, Dec 31 2026 deadline, 28-point cut-off, strings as parameters); CyberPatriot overview, schedule, join (2 to 6 competitors, 5 at a time, 4-hour block, teams by Oct 1 2026, roster Oct 21 2026, rounds and finals); CyLab Security Academy (picoCTF renamed, free, flagship, teams up to five); CAC 2026 rulebook; Presidential SI Challenge eligibility, requirements, timeline, rename; USAAIO 2027 Round 1; FIRST program grade bands and season name.',
    localProject: 'Our reading-log practice problem with a prefix-sum solution and the worst-case step counts 100,000 x 100,000 = 10,000,000,000 versus about 200,000; our ACSL string-parsing function (largest gap, prints 22); our 2026-27 season plan. Lesson family: estimating running time before writing code.',
    requiredMentions: ['There is never any fee for participation', 'All new participants start out in the bronze division', '2 seconds per input case for C and C++', 'Contest #1 opens October 19, 2026', 'Saturday, May 29, 2027', 'prints 22', 'any teacher, parent or other adult with some CS experience', 'one continuous 4-hour block', 'October 22 to 25, 2026', 'teams of up to five', 'About 100,000 + 100,000 = 200,000', 'December 23, 2026', '10,000,000,000', 'FIRST CANOPY'],
    sources: [
      { claim: 'USACO eligibility, fees, divisions, languages, limits, AI rule and the 2025-26 schedule.', url: 'https://usaco.org/index.php?page=instructions' },
      { claim: 'ACSL 2026-27 schedule, divisions, registration, finals and FAQ.', url: 'https://www.acsl.org/get-started/schedule' },
      { claim: 'CyberPatriot 19 teams, divisions, competition window and round dates.', url: 'https://www.uscyberpatriot.org/competition-schedule/' },
      { claim: 'picoCTF renamed CyLab Security Academy; events, teams of up to five, flagship.', url: 'https://cylabacademy.org/competitors.html' },
      { claim: 'Presidential SI Challenge high school category, deliverables, dates and rename.', url: 'https://orise.orau.gov/si-challenge/about/timeline.html' },
      { claim: 'USA-NA-AIO 2027 Round 1 date, registration and format.', url: 'https://usaaio.org/2027-usa-na-aio' },
      { claim: 'Congressional App Challenge 2026 deadline and AI rule.', url: 'https://www.congressionalappchallenge.us/students/rules/' },
      { claim: 'FIRST Tech Challenge and FIRST Robotics Competition grade bands, 2026-2027 season.', url: 'https://www.firstinspires.org/robotics/ftc' }
    ],
    rejectedClaims: [
      'USACO 2026-27 contest dates: not published on 17 October 2026, so the page gives the 2025-26 schedule as published and says so.',
      'Rankings of competitions by prestige or difficulty: not used; several organisers describe themselves in superlatives, which we do not repeat.',
      'Technovation: the official site returned a Cloudflare block to this read on 17 October 2026, so it is not described here; the page links to our separate Technovation Girls guide instead.',
      'Entry fees in dollars for ACSL and CyberPatriot: published on their sites but not printed here; families are pointed to the official fee pages.',
      'That entering or preparing with us improves admission chances: refused.',
      'Names of past winners or their schools: not used.',
      'Any affiliation with the organisers: none, and the page says so.'
    ]
  }
};
