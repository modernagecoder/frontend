'use strict';
// Australian Informatics Olympiad preparation (ag- competition door, Australia cluster Phase 3, row 89).
// Facts read raw on 7 October 2026 at the Australian Maths Trust's AIO page (amt.edu.au/aio), fetched
// with curl's default user agent: Thursday 27 August 2026, 3 hours, entries close Friday 21 August
// 2026, languages C, C++, Java or Python 3, Intermediate (up to Year 10) and Senior (up to Year 12)
// divisions on one paper, 6 questions answered in source code, online only, automated judging on
// speed and correctness with coding style not considered, award bands, practice on the AMT's
// Informatics Training Site (orac.amt.edu.au). No entry fee printed (AUD). Spine: a randomised
// cross-check of a fast solution against a brute-force one (stress testing); family checked free
// site-wide on 7 October 2026. The 1,000-test run (seed 2026) is ours, in Python.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'exam', tag: 'INFORMATICS OLYMPIAD', label: 'Australian Informatics Olympiad preparation', blurb: 'The AIO from the Australian Maths Trust\'s own page, how automated judging marks code, and the testing habit that saves olympiad marks.' },
  slug: 'australian-informatics-olympiad-preparation',
  code: 'aiop',
  accent: '#332193',
  accentRationale: 'Informatics Olympiad: a deep indigo chosen by hand, muted, at least 10 RGB from every accent in content and stylesheets and above 4.8:1 on #EDE7DA',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'Australian Informatics Olympiad preparation',
  title: 'Australian Informatics Olympiad Preparation | AIO Coding',
  description: 'Australian Informatics Olympiad preparation: the AIO format, languages, judging and awards from the Australian Maths Trust, and a testing habit that saves marks.',
  ogDescription: 'Preparing for the Australian Informatics Olympiad: six problems in three hours, C, C++, Java or Python 3, judged automatically on speed and correctness, plus how to test a fast solution against brute force.',
  twitterDescription: 'AIO preparation for Australian students: format, judging and a testing habit that saves marks.',
  pageName: 'Australian Informatics Olympiad Preparation',
  webPageDescription: 'A guide for Australian secondary students to the Australian Informatics Olympiad: the 2026 date, languages, divisions, question format, how the automated judge scores code, the award bands, where to practise, and a worked lesson on stress testing a fast solution against a brute-force one.',
  courseDescription: 'Live online algorithms and competitive programming classes for Australian students preparing for the Australian Informatics Olympiad, in Python or C++.',
  crumbs: [{ name: 'Australian competitions calendar', href: '/australian-coding-maths-and-ai-competitions-calendar' }],
  crumbLabel: 'Informatics Olympiad preparation',
  navLinks: [
    { href: '#format', label: 'Format' },
    { href: '#judging', label: 'Judging' },
    { href: '#stress', label: 'Testing lesson' },
    { href: '#practise', label: 'Practice' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Australian Informatics Olympiad &middot; Live online',
  h1: 'Australian Informatics Olympiad preparation',
  lede: 'The Australian Informatics Olympiad is Australia\'s national programming contest for school students. It is three hours, six problems, and code that a computer marks automatically against tests the student never sees. That last part changes everything about how to prepare: a solution that works on the sample input can still score badly, because it is wrong on an edge case or too slow on a large one. This page sets out the format from the Australian Maths Trust\'s own page, explains how the judge treats submissions, and teaches one habit that experienced competitors use constantly: checking a clever solution against a slow, obviously correct one on thousands of random inputs before trusting it.',
  secondaryCta: { href: '#stress', label: 'See the testing lesson' },
  wa: 'Hello Modern Age Coders, I would like a free class to prepare for the Australian Informatics Olympiad.',
  heroNote: 'Format from the AMT\'s AIO page &middot; Test run by us &middot; Checked on 7 October 2026',
  spec: [
    ['Run by', 'Australian Maths Trust'],
    ['2026 date', 'Thursday 27 August'],
    ['Length', '3 hours'],
    ['Problems', '6, answered in source code'],
    ['Languages', 'C, C++, Java or Python 3'],
    ['Divisions', 'Intermediate and Senior, one paper'],
    ['Marking', 'Automated: speed and correctness'],
    ['Delivery', 'Online only']
  ],
  capsuleQ: 'In short',
  capsule: 'The Australian Informatics Olympiad is a three-hour online programming contest run by the Australian Maths Trust. In 2026 it was held on Thursday 27 August. Students solve six problems in C, C++, Java or Python 3, and an automated judge runs their code against hidden inputs, marking speed and correctness. Intermediate (up to Year 10) and Senior (up to Year 12) sit the same paper.',

  picks: {
    eyebrow: 'For AIO preparation',
    h2: 'Three courses that build olympiad programming',
    lede: 'A solid language, the algorithms contests use, and practice under contest conditions.',
    items: [
      { course: 'competitive-programming-for-teens-course', code: 'AIOP / 01', title: 'Competitive programming for teens', note: 'Contest problems judged by tests, with the habits that turn a working idea into full marks.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'AIOP / 02', title: 'Algorithms and data structures', note: 'Sorting, searching, graphs and dynamic programming, the toolkit behind the harder AIO problems.' },
      { course: 'cpp-programming-masterclass-for-teens', code: 'AIOP / 03', title: 'C++ for teens', note: 'For students who want the speed many olympiad competitors choose, taught from the ground up.' }
    ]
  },

  sections: [
    {
      id: 'format', tint: 'tint', eyebrow: 'The contest',
      h2: 'What the AIO is, according to the Australian Maths Trust',
      lede: 'Everything in this table is from the Trust\'s AIO page, read on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'Australian Informatics Olympiad 2026, as published by the AMT', head: ['Detail', 'What the AMT states'], rows: [
          ['Date', 'Thursday 27 August 2026'],
          ['Time allowed', '3 hours'],
          ['Entries close', 'Friday 21 August 2026'],
          ['Who it is for', 'Students with "some programming experience" who can "write code"'],
          ['Languages', 'C, C++, Java or Python 3'],
          ['Divisions', 'Intermediate (students up to Year 10) and Senior (up to Year 12), with "only one AIO paper"; divisions are for awards only'],
          ['Questions', '6 questions, with answers in source code'],
          ['Delivery', 'Online only']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The Trust describes the content plainly: "Students invent algorithms and write code to solve problems." The skills it lists are modest on paper, "opening, reading and writing files; declaring variables and arrays; and using loops, conditional (if) statements and simple arithmetic operations", but the problems are designed so that the thinking, not the syntax, is the hard part.',
            'The AIO also opens doors. The Trust says students who perform well "may be invited to participate in the AMT\'s olympiad programs", which lead towards the team that represents Australia internationally. Our <a class="ag-inline-link" href="/aio-to-ioi-pathway-australia">AIO to IOI pathway page</a> explains those steps.'
          ],
          right: [
            'Entry is through schools, and the fee is set by the Trust in Australian dollars, so we do not quote it here. Talk to the school\'s maths or computing coordinator well before the entry deadline.',
            'Dates for 2027 had not been published when we checked. The AIO has sat in late August in 2026, so students who want to prepare properly should start in Term 1 or 2, not the week before.'
          ] },
        { kind: 'source', html: 'Source: Australian Maths Trust, <a class="ag-inline-link" href="https://amt.edu.au/aio" rel="noopener" target="_blank">Australian Informatics Olympiad</a>, read on 7 October 2026. We are independent of the AMT.' }
      ]
    },
    {
      id: 'judging', tint: 'deep', eyebrow: 'How code is marked',
      h2: 'An automated judge, hidden tests, and no marks for style',
      lede: 'The AIO is marked by a machine, not a person. Understanding exactly what it checks is the first step in preparing.',
      body: [
        { kind: 'two',
          left: [
            'The AMT states that "students submit source code which is compiled and run against input scenarios to test correctness and efficiency. Submissions are marked on speed and correctness." It adds: "Coding style is not taken into consideration."',
            'It also notes that "students can see their marks during the competition as they are calculated by an automated judging system". That feedback is useful, but it tells a student their score, not why a test failed. Finding the reason is up to them.'
          ],
          right: [
            'Two kinds of failure cost marks. A wrong answer on some hidden input, often an edge case such as the smallest or largest allowed value, and a correct answer that arrives too slowly on a large input. A program can be right and still lose marks on efficiency.',
            'That is why preparation is not only about knowing algorithms. It is about the discipline of checking a solution properly before submitting it, which is what the lesson below teaches.'
          ] },
        { kind: 'table', mt: true, caption: 'AIO award bands, as published by the AMT', head: ['Award', 'Who receives it'], rows: [
          ['Gold', 'Top 10 per cent'],
          ['Silver', 'The next 15 per cent'],
          ['Bronze', 'The next 25 per cent'],
          ['Credit', 'The next 20 per cent'],
          ['Participation', 'All remaining students']
        ] },
        { kind: 'source', html: 'Scoring and awards quoted from the AMT\'s <a class="ag-inline-link" href="https://amt.edu.au/aio" rel="noopener" target="_blank">AIO page</a>, read on 7 October 2026. We make no award or invitation promises.' }
      ]
    },
    {
      id: 'stress', tint: 'tint', eyebrow: 'The testing habit',
      h2: 'Stress testing: checking a fast solution against a slow one',
      lede: 'Experienced competitors rarely trust a clever solution on sight. They write a second, slow solution that is obviously correct and compare the two on many random inputs. Here is that habit on a small problem of our own.',
      body: [
        { kind: 'two',
          leftH3: 'The problem and two solutions',
          left: [
            'Given a list of whole numbers and a window length k, find the largest total of any k numbers in a row. The brute-force solution adds up every window separately. It is slow on long lists but almost impossible to get wrong.',
            'The fast solution keeps a running total, adding the number entering the window and subtracting the one leaving. Our first version had a classic slip: its loop stopped one step early, so it never checked the last window.'
          ],
          rightH3: 'What the stress test found',
          right: [
            'We generated 1,000 random lists, each between 1 and 8 numbers long with values from minus 5 to 5 and a random window length, and compared the two solutions on every one. The buggy fast version disagreed with brute force on 230 of the 1,000 tests.',
            'The first disagreement came on test 7: the list 2, minus 3, 5, 4, minus 1 with k equal to 3. The right answer is 8, from 5, 4 and minus 1; the buggy code said 6. After fixing the loop, the two solutions agreed on all 1,000 tests.'
          ] },
        { kind: 'table', mt: true, caption: 'Our stress test, 1,000 random cases (Python, seed 2026)', head: ['Fast solution', 'Disagreements with brute force', 'First failing case found'], rows: [
          ['Loop stops one step early', '230 of the 1,000', 'Test 7: list 2, minus 3, 5, 4, minus 1, k = 3 (expected 8, got 6)'],
          ['Loop fixed', '0 of the 1,000', 'None']
        ] },
        { kind: 'p', text: 'Notice that the sample a problem statement gives would probably have passed. Small random tests catch the edge that a person forgets, here the final window, and they catch it in seconds. In the AIO the judge\'s hidden tests do the same thing to you; stress testing lets you do it to yourself first. The brute-force solution has a second use too: on a hard problem, submitting it can collect the marks for small inputs while you work on the fast version.' },
        { kind: 'source', html: 'The problem, both solutions and the 1,000-test run are ours, executed in Python on 7 October 2026. The AIO\'s own problems are not reproduced here.' }
      ]
    },
    {
      id: 'practise', tint: '', eyebrow: 'Where to practise',
      h2: 'Using the Trust\'s training site well',
      lede: 'The AMT points students to its own Informatics Training Site for practice material.',
      body: [
        { kind: 'three', cells: [
          { h3: 'The training site', p: 'The AIO page sends students to the AMT\'s Informatics Training Site, which invites students to practise "on past problems" and promises "instant" feedback on submitted code.' },
          { h3: 'Past problems first', p: 'Work through earlier AIO problems on the site, under a time limit, before learning new techniques. They show what level of thinking each problem number needs.' },
          { h3: 'Read others\' code', p: 'The training site invites students to learn from tutorials and from other users\' code. Reading a better solution after your own attempt is how speed improves.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'Choose one language and stay with it. Python 3 is allowed and is where most of our students start; some move to C++ later for its speed. Switching languages close to the contest usually costs more than it gains.',
            'Practise reading input and writing output exactly as a problem specifies. The AMT lists file input and output among the skills the AIO uses, and a formatting slip can turn a correct algorithm into zero marks.'
          ],
          right: [
            'Our classes teach the algorithms, the testing habit and the contest strategy: reading all six problems first, collecting easy marks early, and knowing when a brute-force answer is worth submitting. We use our own problems and the Trust\'s public training material, not leaked or restricted papers.',
            'Students should also try the Computational and Algorithmic Thinking competition and Bebras earlier in the year. Both build the same thinking with lower stakes.'
          ] },
        { kind: 'source', html: 'Sources: AMT <a class="ag-inline-link" href="https://amt.edu.au/aio" rel="noopener" target="_blank">AIO page</a> and the AMT <a class="ag-inline-link" href="https://orac.amt.edu.au/hub/" rel="noopener" target="_blank">Informatics Training Site</a>, read on 7 October 2026.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Building towards the AIO',
    h2: 'Four stages of olympiad programming',
    lede: 'Most students need a year or more between a first program and a strong AIO.',
    table: { caption: 'A path towards the Australian Informatics Olympiad', head: ['Stage', 'Focus', 'The sign it is secure'], rows: [
      ['1. Fluent coding', 'Loops, arrays, functions, input and output', 'Writes a correct short program without looking things up'],
      ['2. Core algorithms', 'Sorting, searching, prefix ideas, greedy methods', 'Explains why an approach is correct, not only that it works'],
      ['3. Efficiency', 'Estimating running time before writing code', 'Predicts whether a solution will be fast enough'],
      ['4. Contest discipline', 'Stress testing, partial marks, time management', 'Finishes a past paper with every submission tested']
    ] },
    left: { h3: 'If the problems feel impossible', ps: [
      'Every competitor starts there. Begin with the first problems on past papers, which are designed to be reachable, and build up.',
      'Writing the brute-force answer first is a good way in, and it earns marks on small tests.'
    ] },
    right: { h3: 'Beyond the AIO', ps: [
      'Our <a class="ag-inline-link" href="/aio-to-ioi-pathway-australia">AIO to IOI pathway page</a> explains the invitational stages that follow.',
      'The <a class="ag-inline-link" href="/bebras-challenge-australia-practice">Bebras page</a> covers an earlier, code-free step.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for future olympiad programmers',
    lede: 'Grouped by stage. Each card opens the full outline.',
    bands: [
      { num: 'I', h3: 'Foundations', sub: 'A language, properly', courses: [
        { code: 'AIOP / F / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The language most of our AIO students start in.' },
        { code: 'AIOP / F / 02', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ for teens', blurb: 'Speed and the standard library.' },
        { code: 'AIOP / F / 03', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Another language the AIO accepts.' }
      ] },
      { num: 'II', h3: 'Algorithms', sub: 'The olympiad toolkit', courses: [
        { code: 'AIOP / A / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms and data structures', blurb: 'From sorting to graphs.' },
        { code: 'AIOP / A / 02', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Contest practice with judged tests.' },
        { code: 'AIOP / A / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'The counting and number ideas many problems use.' }
      ] },
      { num: 'III', h3: 'Further on', sub: 'For senior students', courses: [
        { code: 'AIOP / X / 01', slug: 'data-structures-algorithms-masterclass-college', title: 'Advanced algorithms', blurb: 'University-level depth for the strongest students.' },
        { code: 'AIOP / X / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Proof and counting for olympiad thinking.' },
        { code: 'AIOP / X / 03', slug: 'competitive-programming-masterclass-college', title: 'Competitive programming, advanced', blurb: 'Harder contest material for those ready for it.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live olympiad programming classes for Australian students',
    lede: 'Our teachers are in India, behind every Australian time zone. A 5 pm lesson in Hobart during daylight saving begins at 11.30 am India time, so weekday sessions are straightforward to keep.',
    slots: [
      { time: 'Terms 1 to 3', l: 'Steady weekly classes leading up to August.' },
      { time: 'Weekend contest practice', l: 'Timed past papers with review.' },
      { time: 'Holiday intensives', l: 'One technique a day for a week.' }
    ],
    cells: [
      { h3: 'Brute force first', p: 'Every problem starts with a slow, correct solution.' },
      { h3: 'Stress tests always', p: 'Fast solutions are compared on random inputs before submission.' },
      { h3: 'Groups of fifteen to twenty', p: 'Placed by programming level.' },
      { h3: 'One-to-one coaching', p: 'For students aiming at the invitational stages.' },
      { h3: 'Progress notes', p: 'What was learned and the next technique to practise.' },
      { h3: 'No medal promises', p: 'We teach the skills; the contest result is the student\'s.' }
    ]
  },

  projectsH2: 'What our students have built',
  projectsLede: 'Projects learners made for their own reasons, outside any contest. The rest are in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents and students in their own words, as written on Google.',

  fees: {
    h2: 'Fees',
    lede: 'Families in Australia pay monthly in US dollars, our standard rate outside India, with no deposit and no lock-in. AIO entry itself is arranged and paid through schools.',
    free: ['A real lesson with a teacher', 'An honest read of programming level', 'No card details'],
    group: ['Fifteen to twenty students at one level', 'The same teacher every week', 'Solutions reviewed line by line', 'A certificate at the end'],
    one: ['A coach for one student', 'Built around a target contest', 'A weekly time that suits you']
  },

  faq: {
    eyebrow: 'Questions about the AIO',
    h2: 'What Australian students and parents ask',
    items: [
      { q: 'What is the Australian Informatics Olympiad?', a: 'A three-hour online programming contest for Australian school students, run by the Australian Maths Trust. Students write code to solve six problems.' },
      { q: 'When is the AIO?', a: 'In 2026 it was held on Thursday 27 August, with entries closing on Friday 21 August. Check the AMT\'s page for the next date.' },
      { q: 'Which programming languages can be used in the AIO?', a: 'C, C++, Java or Python 3, according to the AMT.' },
      { q: 'How is the AIO marked?', a: 'An automated judging system compiles each submission and runs it against input scenarios, marking speed and correctness. The AMT states that coding style is not considered.' },
      { q: 'Are there separate papers for younger students?', a: 'No. There is one paper. Intermediate (up to Year 10) and Senior (up to Year 12) divisions are used only for awards.' },
      { q: 'What is stress testing?', a: 'Comparing a fast solution with a slow but obviously correct one on many random inputs, so any disagreement exposes a bug before the judge does.' },
      { q: 'How much programming does a student need first?', a: 'The AMT says students need some programming experience and must be able to write code. In practice, comfort with loops, arrays and input and output is the starting point.' },
      { q: 'Where can students practise?', a: 'The AMT points to its Informatics Training Site, which has past problems and instant feedback on submitted code. Our classes add teaching and review.' },
      { q: 'Can a good AIO result lead further?', a: 'The AMT says students who perform well may be invited into its olympiad programs. Invitations are the Trust\'s decision; we make no promises.' },
      { q: 'Are you connected with the AMT?', a: 'No. We are an independent online school. We quote the Trust because it runs the contest.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for Australian coders',
    lede: 'Pathways, other contests and the curriculum underneath.',
    items: [
      { href: '/aio-to-ioi-pathway-australia', label: 'AIO to IOI pathway', p: 'The invitational steps after the AIO.' },
      { href: '/bebras-challenge-australia-practice', label: 'Bebras Challenge practice', p: 'Code-free computational thinking.' },
      { href: '/australian-maths-trust-amc-aio-cat-preparation', label: 'AMC, AIO and CAT preparation', p: 'The Trust\'s competitions compared.' },
      { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar', p: 'Every contest through the year.' },
      { href: '/digital-technologies-years-7-to-10-coding', label: 'Years 7 to 10 coding', p: 'The school curriculum the AIO builds on.' },
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'Our main Australian page.' }
    ]
  },

  start: {
    h2: 'Book a free olympiad programming class',
    lede: 'Tell us the year level, the language your student uses and how much contest experience they have. The free class works on a real problem and ends with honest advice on preparation.',
    readFirst: 'Prefer to read first? Every course is on the <a class="ag-inline-link" href="/course-atlas">course atlas</a>, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains a lesson.',
    note: 'WhatsApp is usually quickest. Our number carries India\'s +91 code because the school runs from India; there is no Australian office.',
    formNote: 'No card and no obligation. We reply once to arrange a time.'
  },

  footer: {
    cols: [
      { h4: 'Australia', links: [
        { href: '/aio-to-ioi-pathway-australia', label: 'AIO to IOI pathway' },
        { href: '/bebras-challenge-australia-practice', label: 'Bebras practice' },
        { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' },
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/course-atlas', label: 'Course atlas' },
        { href: '/digital-technologies-years-7-to-10-coding', label: 'Years 7 to 10 coding' }
      ] }
    ],
    bottomRight: 'Independent of the AMT; contest facts from its page'
  },

  personalityCss: `
.ag-root.ag-aiop .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-aiop .ag-capsule { border-left-width: 5px; }
.ag-root.ag-aiop .ag-table td:first-child { font-weight: 600; }
.ag-root.ag-aiop .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-aiop .ag-grid-3 h3 { letter-spacing: -0.006em; }
.ag-root.ag-aiop .ag-spec dt { letter-spacing: 0.09em; }
`,

  dossier: {
    curriculumAuthority: 'Australian Maths Trust, Australian Informatics Olympiad page (amt.edu.au/aio), read 7 October 2026 with curl\'s default user agent: Thursday 27 August 2026; 3 hours; entries close Friday 21 August 2026; "Participating students will need some programming experience and be able to write code."; "Allowed languages are C, C++, Java or Python 3."; "Students who perform well in the AIO may be invited to participate in the AMT\'s olympiad programs."; practice at the AMT\'s Informatics Training Site; Intermediate up to Year 10, Senior up to Year 12, "only one AIO paper"; "Students invent algorithms and write code to solve problems. Functions include opening, reading and writing files; declaring variables and arrays; and using loops, conditional (if) statements and simple arithmetic operations."; 6 questions, answers in source code; online only; "compiled and run against input scenarios to test correctness and efficiency"; "marked on speed and correctness"; "Coding style is not taken into consideration."; "automated judging system"; awards Gold top 10%, Silver next 15%, Bronze next 25%, Credit next 20%, Participation remaining. Training site (orac.amt.edu.au/hub): "Practice on past problems", "Get instant feedback", "Learn from our tutorials and from other users\' code".',
    localProject: 'Stress test in Python (seed 2026): maximum sum of k consecutive values; brute force vs a running-total solution whose loop stopped one step early. Over 1,000 random lists (length 1 to 8, values -5 to 5, random k) the buggy version disagreed on 230 of the 1,000; first failure test 7, list 2, -3, 5, 4, -1 with k = 3 (expected 8, got 6). Fixed version: 0 of the 1,000.',
    requiredMentions: ['C, C++, Java or Python 3', 'Coding style is not taken into consideration', 'automated judging system', 'Informatics Training Site', '230 of the 1,000', 'stress test', 'brute-force solution', 'Thursday 27 August 2026', 'Friday 21 August 2026'],
    sources: [
      { claim: 'AMT Australian Informatics Olympiad page: date, time, entries, languages, divisions, format, judging, awards and training site link.', url: 'https://amt.edu.au/aio' },
      { claim: 'AMT Informatics Training Site home: past problems, instant feedback, tutorials.', url: 'https://orac.amt.edu.au/hub/' },
      { claim: 'AMT Olympiad and Pathways Programs page: informatics opportunities by invitation after the AIO.', url: 'https://amt.edu.au/olympiad-programs' }
    ],
    rejectedClaims: [
      'AIO entry fee: set in Australian dollars by the AMT, not printed (one-currency rule).',
      'Input size limits or time limits for AIO problems: not published on the page read, so not stated.',
      '2027 AIO date: not published when checked.',
      'Any reproduction of AIO problems: refused; the lesson problem is ours.',
      'Any award, medal or invitation promise: refused.'
    ]
  }
};
