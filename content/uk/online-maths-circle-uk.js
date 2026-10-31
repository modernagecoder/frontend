'use strict';
// Online maths circle UK (ag- guide door; UK cluster Phase 2 row UK078).
// Siblings checked first: maths-masterclasses-for-able-students-uk (Ri series; this page never repeats it),
// maths-olympiad-training-uk, maths-tuition-in-coventry (Warwick circles), maths-tuition-in-glasgow,
// step-maths-preparation (STEP itself; here STEP Support appears only as one free resource).
// Read raw with curl on 31 October 2026 (copies under keyword-research-2026-09/uk-us-gap/src/online-maths-circle-uk/):
//  - King's College London Mathematics School, Axiom maths circle page and outreach pages: "A Maths Circle is a
//    group of students who come together to grapple with intriguing puzzles, discover and explore exciting ideas
//    and learn to think like mathematicians."; "Axiom is a long-term programme and students who join in year 7
//    will be guaranteed a place on the programme for their entire school journey."; "We run some circles online
//    and some in person."; "Sessions are on Mondays and Thursdays from 16:30 to 17:30 and will run throughout the
//    year."; places prioritised under widening-participation criteria (criteria not reproduced: identity
//    categories); "students who most enjoy the Circles are high-attainers who love problem-solving";
//    "All student (and some teacher) events are free of charge"; "Axiom Maths Circles continue from w/b
//    21/9/26"; GCSE+ Maths "an extensive programme of enrichment for students in Years 9 to 11"; Extension
//    Mathematics: University Admissions Prep, weekly, past MAT, TMUA and STEP questions.
//  - University of Oxford Mathematical Institute, Outreach and Oxford Online Maths Club: "a weekly livestream
//    from the University of Oxford"; "free, interactive, casual, and relaxed"; recorded; "mostly aimed at
//    people about to apply to university or about to start a Maths course, but everyone's welcome and there's
//    no registration needed"; January to June super-curricular, June to December the Oxford Maths Admissions
//    Test Livestream "with a focus on the Test of Mathematics for University Admission (TMUA)"; "every
//    Thursday at 5pm (UK time)". Host not named here. Problem Solving Matters: Year 12, state-funded schools,
//    colleges and academies; "Applications from home educated students are also welcomed."; details at MEI.
//  - University of Cambridge Faculty of Mathematics, outreach overview: "one of the largest subject-specific
//    outreach programmes in the University of Cambridge"; maths.org "a huge programme of free online
//    mathematics education resources". STEP Support Programme (step.maths.org): "The resources are free and
//    open to everyone."; Foundation modules "designed to be studied weekly over about 6 months"; start in
//    Year 12. NRICH home page: "Booking now open for our Maths Club webinars".
// Rejected: mesme.org (the Axiom page links there) returned 403; stopped, not worked around. mathscircle.org.uk
// did not connect. UCL and Warwick outreach URLs tried returned 403 and 404; not used.
// Our own: the three-week circle arc on two-stamp postage (largest impossible amount 3 times 5 minus 3 minus 5
// is 7; for 4 and 7 it is 17), the Python check, the practice set, the checklist and every judgement.
// Spine: a maths circle is defined by its people and its time horizon, not by a syllabus: one problem can
// last three weeks. Free circles ration places; the page maps who can join which, and offers a weekly online
// circle-style class for everyone else. Lesson family: a format explainer with a programme map.

const TIMING = 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.';

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'guide', tag: 'MATHS CIRCLE', label: 'Online maths circles in the UK', blurb: 'What a maths circle is, which UK university and school programmes run one, and who each is open to.' },
  slug: 'online-maths-circle-uk',
  code: 'cu',
  accent: '#454520',
  accentRationale: 'Online maths circle: a dark olive (#454520), 9.32:1 on #FBF8F2, a seminar-room green that sits apart from the masterclass slate and every competition blue',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Online maths circle',
  title: 'Online Maths Circle UK: University Clubs and a Weekly Circle',
  description: 'Online maths circles in the UK: what a circle is, the free Oxford, Cambridge and King\'s programmes and who can join, plus a weekly circle-style class online.',
  ogDescription: 'A maths circle keeps one good problem going for weeks. The UK programmes that run them, who each is open to, and a three-week sample arc.',
  twitterDescription: 'Maths circles in the UK: Axiom circles, the Oxford Online Maths Club, STEP Support and a weekly online circle.',
  pageName: 'Online Maths Circles in the UK',
  webPageDescription: 'A guide to maths circles and university maths outreach for UK pupils, built from the programmes\' own pages, with a sample three-week circle investigation and live online circle-style lessons.',
  courseDescription: 'A weekly live online maths circle for pupils aged 10 to 18: long problems, explored in a small community, with written explanations read by a teacher.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Online maths circle',
  navLinks: [
    { href: '#what', label: 'What a circle is' },
    { href: '#map', label: 'UK programmes' },
    { href: '#arc', label: 'A three-week arc' },
    { href: '#set', label: 'Problems' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Ages 10 to 18 &middot; Online &middot; Across the UK',
  h1: 'Online maths circles in the UK',
  lede: 'A maths circle is a small group that meets regularly to work on problems with no syllabus and no test, often staying with one question for several weeks. In the UK, circles and circle-like clubs are run by universities and specialist maths schools, usually free and often with limited places. Modern Age Coders runs a weekly circle-style class online for pupils aged 10 to 18 through our olympiad and competition maths course, as a batch or 1-on-1. We are not part of any university programme. Below: what a circle is, the main UK programmes and who each is for, and a three-week circle arc we wrote.',
  secondaryCta: { href: '#map', label: 'See the UK programmes' },
  wa: 'Hello Modern Age Coders, I would like to try your online maths circle.',
  heroNote: 'From the programmes\' own pages, read 31 October 2026 &middot; Independent of every university and school named',
  spec: [
    ['What it is', 'A regular group working on open problems'],
    ['Syllabus', 'None; problems chosen for depth'],
    ['Free UK options', 'University and maths school outreach'],
    ['Catch', 'Places limited or aimed at one stage'],
    ['Our circle', 'Weekly, live online'],
    ['Ages', '10 to 18'],
    ['Format', 'Group of 15 to 20, or 1-on-1'],
    ['Start', 'A free first session']
  ],
  capsuleQ: 'What is a maths circle, and can my child join one online in the UK?',
  capsule: 'King\'s College London Mathematics School, which runs the Axiom circles, defines a maths circle as "a group of students who come together to grapple with intriguing puzzles, discover and explore exciting ideas and learn to think like mathematicians." UK pupils can join several free, partly online programmes: Axiom maths circles from Year 7, with places prioritised by published criteria; the University of Oxford\'s Online Maths Club, a weekly Thursday livestream open to all; and Cambridge\'s STEP Support Programme, free online modules for sixth formers. Modern Age Coders, which has no link to any of them, runs a weekly online circle-style class for ages 10 to 18 on our competition maths course, with groups of 15 to 20 pupils or a private teacher.',

  picks: {
    eyebrow: 'Where to begin',
    h2: 'Three courses that run like a circle',
    lede: 'Each card opens a syllabus of problem themes rather than exam topics.',
    items: [
      { course: 'olympiad-competition-mathematics-mastery', code: 'CU / 01', title: 'The weekly maths circle', note: 'Number theory, counting, geometry and proof, a long problem at a time, for ages 11 to 18.' },
      { course: 'maths-through-coding', code: 'CU / 02', title: 'Circle problems with code', note: 'Python to test a conjecture on thousands of cases before proving it, for ages 10 to 15.' },
      { course: 'tmua-mat-step-preparation-course', code: 'CU / 03', title: 'Sixth-form problem solving', note: 'The circle habit turned towards TMUA and STEP for students applying to read maths.' }
    ]
  },

  sections: [
    {
      id: 'what', tint: 'tint', eyebrow: 'What a circle is',
      h2: 'What is a maths circle?',
      lede: 'A circle is a community and a pace, not a course. The same pupils meet week after week, a problem may stay on the table for a month, and nobody is graded.',
      body: [
        { kind: 'two',
          leftH3: 'Three things that make a circle',
          left: [
            'Continuity. The Axiom page puts it plainly: "Axiom is a long-term programme and students who join in year 7 will be guaranteed a place on the programme for their entire school journey." A circle builds over years.',
            'Open problems. Questions are chosen because they lead somewhere, not because they appear on a paper. Peers. Pupils talk to each other more than to the leader, and the leader asks rather than tells.'
          ],
          rightH3: 'How it differs from a class or a club',
          right: [
            'A tuition class moves through a syllabus and checks progress. A school maths club often runs puzzles that end in a session. A masterclass series is a short, intense block. A circle is slow on purpose: ideas get time to go wrong and come back.',
            'King\'s says the pupils who most enjoy its circles "are high-attainers who love problem-solving and imaginative, creative thinking", which is a description of temperament as much as attainment.'
          ] },
        { kind: 'table', mt: true, caption: 'A circle compared with other kinds of maths session, our summary', head: ['', 'Tuition class', 'Masterclass series', 'Maths circle'], rows: [
          ['Time horizon', 'A term or an exam', 'Six weeks or so', 'Years'],
          ['What sets the agenda', 'The syllabus', 'The speaker', 'The problem and the group'],
          ['Assessment', 'Regular', 'None', 'None, but written explanations'],
          ['One problem can last', 'Minutes', 'A session', 'Several weeks']
        ] },
        { kind: 'source', html: 'Quotations from <a class="ag-inline-link" href="https://www.kingsmathsschool.com/outreach/axiom-maths-circle" rel="noopener" target="_blank">King\'s College London Mathematics School, Axiom maths circle</a>, read 31 October 2026. The comparison table is ours. Our <a class="ag-inline-link" href="/maths-masterclasses-for-able-students-uk">maths masterclasses page</a> covers the Royal Institution series.' }
      ]
    },
    {
      id: 'map', tint: 'deep', eyebrow: 'UK programmes',
      h2: 'Which maths circles and university programmes can UK pupils join online?',
      lede: 'Several, and most are free, but each has a stage and an entry rule. This table is built from each organiser\'s own page; check the page before applying, since rules change.',
      body: [
        { kind: 'table', caption: 'Maths circles and circle-like outreach open to UK pupils, from each organiser, read 31 October 2026', head: ['Programme and organiser', 'Stage', 'Format', 'Who can join'], rows: [
          ['Axiom maths circles, King\'s College London Mathematics School', 'From Year 7, for the whole school journey', 'Some online, some in person; Mondays and Thursdays 16:30 to 17:30, all year', 'Places prioritised under widening-participation criteria the school publishes'],
          ['GCSE+ Maths, King\'s College London Mathematics School', 'Years 9 to 11', '"An extensive programme of enrichment"', 'Apply through the school\'s outreach pages'],
          ['Oxford Online Maths Club, University of Oxford', 'Mainly sixth form', 'Weekly livestream, Thursdays at 5pm UK time, recorded', 'Everyone; "there\'s no registration needed"'],
          ['Problem Solving Matters, University of Oxford with MEI', 'Year 12', 'A course in problem-solving mathematics', 'State-funded schools and colleges; home-educated students welcomed'],
          ['STEP Support Programme, University of Cambridge', 'Year 12 and Year 13', 'Free online modules with hints and solutions', '"The resources are free and open to everyone."'],
          ['NRICH, University of Cambridge', 'Primary and secondary', 'Free problems online; Maths Club webinars', 'Open online']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The year at the Oxford club',
          left: [
            'Oxford describes its club as "free, interactive, casual, and relaxed". From January to June it covers super-curricular maths; from June to December it hosts the Oxford Maths Admissions Test Livestream, which in 2026 focuses on the TMUA and maths interviews.',
            'It is "mostly aimed at people about to apply to university or about to start a Maths course", so a Year 8 pupil will find much of it hard, but the recordings can be watched at any pace.'
          ],
          rightH3: 'The dates King\'s has published',
          right: [
            'King\'s outreach page for autumn 2026 says Axiom Maths Circles and GCSE+ Maths sessions continue from the week beginning 21 September 2026, with Extension Mathematics: University Admissions Prep from 7 September 2026.',
            'King\'s says all its student events are free. Places on the long-term circles are limited, and the school sets out who is prioritised.'
          ] },
        { kind: 'p', mt: true, html: 'The pattern across the table is plain. Free circles exist, but the ones aimed at younger pupils are few and rationed, while the open-to-all programmes lean towards sixth form and university admissions. A curious Year 6 to Year 10 pupil outside the priority groups is the child most likely to find no circle at all, and that is the gap our weekly class is built for. For the sixth-form end, our <a class="ag-inline-link" href="/step-maths-preparation">STEP preparation page</a> goes further.' },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.kingsmathsschool.com/outreach" rel="noopener" target="_blank">King\'s Maths School outreach</a>; <a class="ag-inline-link" href="https://www.maths.ox.ac.uk/outreach/oxford-online-maths-club" rel="noopener" target="_blank">Oxford Online Maths Club</a>; <a class="ag-inline-link" href="https://www.maths.ox.ac.uk/outreach/problem-solving-matters" rel="noopener" target="_blank">Oxford, Problem Solving Matters</a>; <a class="ag-inline-link" href="https://step.maths.org/" rel="noopener" target="_blank">STEP Support Programme</a>; <a class="ag-inline-link" href="https://nrich.maths.org/" rel="noopener" target="_blank">NRICH</a>. All read 31 October 2026. We are not connected with any of them.' }
      ]
    },
    {
      id: 'arc', tint: '', eyebrow: 'A three-week arc',
      h2: 'What does one problem look like across three circle sessions?',
      lede: 'Here is a circle arc we wrote and run, for ages 11 to 15. It is ours, not taken from any programme above. The problem fits on one line; the thinking fills three weeks.',
      body: [
        { kind: 'p', html: '<strong>The question.</strong> A post office sells only 3p and 5p stamps. Which postage amounts can you not make exactly?' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Week 1: explore', p: 'Pupils list amounts from 1p upwards. 3, 5, 6, 8, 9 and 10 work; 1, 2, 4 and 7 do not. From 8 onwards every amount works, because 8, 9 and 10 do, and adding a 3p stamp reaches the next three. The largest impossible amount is 7.' },
          { h3: 'Week 2: conjecture', p: 'Change the stamps to 4p and 7p and the largest impossible amount is 17. With 2p and 5p it is 3. Someone notices that 3 times 5 minus 3 minus 5 is 7, 4 times 7 minus 4 minus 7 is 17, and 2 times 5 minus 2 minus 5 is 3. The circle has a conjecture.' },
          { h3: 'Week 3: test and explain', p: 'Does it always work? Try 4p and 6p: every odd amount is impossible, so there is no largest one. The rule needs stamps with no common factor. The session ends on why the formula holds for such pairs, written in pupils\' own words.' }
        ] },
        { kind: 'code', lang: 'Python', label: 'Our check: the largest impossible postage for two stamp values', code: 'def largest_impossible(a, b, limit=200):\n    can = [False] * (limit + 1)\n    can[0] = True\n    for n in range(1, limit + 1):\n        can[n] = (n >= a and can[n - a]) or (n >= b and can[n - b])\n    missing = [n for n in range(limit + 1) if not can[n]]\n    return missing[-1] if missing else None\n\nfor a, b in [(3, 5), (4, 7), (2, 5), (5, 8)]:\n    print(a, b, largest_impossible(a, b), a * b - a - b)' },
        { kind: 'p', mt: true, html: 'Run it and each line prints two equal numbers: 7, 17, 3 and 27. The code does not prove the rule, and a good circle says so out loud; it only makes the conjecture worth proving. That distinction, between evidence and proof, is the most valuable thing a circle teaches, and it takes weeks rather than minutes to sink in.' },
        { kind: 'source', html: 'The problem framing, the three-week plan, the code and the outputs are ours. The underlying result is a classical one in number theory, often called the Frobenius coin problem for two values.' }
      ]
    },
    {
      id: 'set', tint: 'tint', eyebrow: 'Problems',
      h2: 'Circle problems to start at home',
      lede: 'Five problems we wrote, each one able to fill a session. Answers and the key idea follow each; resist reading them for at least a quarter of an hour.',
      body: [
        { kind: 'three', cells: [
          { h3: 'A. Locker doors (ages 10 and up)', p: 'A corridor has 100 closed lockers. Pupil 1 opens all of them; pupil 2 toggles every second; pupil 3 every third; and so on to pupil 100. Which stay open? Exactly the square numbers, 1, 4, 9 up to 100: only squares have an odd number of factors.' },
          { h3: 'B. Staircase sums (ages 11 and up)', p: 'Which numbers are a sum of two or more consecutive whole numbers? 9 is 4 plus 5, and 10 is 1 plus 2 plus 3 plus 4. Test up to 32. The ones that fail are 1, 2, 4, 8, 16 and 32: the powers of two.' },
          { h3: 'C. Knight\'s reach (ages 11 and up)', p: 'On an endless chessboard, what is the fewest knight moves to reach the square one step to the right? Three. Each knight move changes the square colour, so an odd number is needed, and one move cannot do it.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'D. Cutting a cake (ages 12 and up)',
          left: [
            'Three cuts across a round cake: what is the most pieces you can make? Seven. With n straight cuts the maximum is 1 plus n times n plus 1 over 2, so 2 cuts give 4 and 4 cuts give 11.',
            'The circle conversation is why each new cut adds one more piece than the cut before it.'
          ],
          rightH3: 'E. Digit reversal (ages 12 and up)',
          right: [
            'Take any three-digit number with different first and last digits, reverse it, and subtract the smaller from the larger: 742 minus 247 is 495. The answer is always a multiple of 99.',
            'Write the number as 100a plus 10b plus c, and the difference is 99 times the gap between a and c.'
          ] },
        { kind: 'source', html: 'All five problems and explanations are written by Modern Age Coders and are not taken from Axiom, NRICH, STEP Support or any other programme.' }
      ]
    },
    {
      id: 'choose', tint: 'deep', eyebrow: 'Choosing well',
      h2: 'How do you tell a good online maths circle from a tuition class with a new name?',
      lede: 'Ask five questions. A real circle, free or paid, should answer yes to most of them.',
      body: [
        { kind: 'ol', items: [
          'Does one problem ever last more than one session?',
          'Do pupils speak to each other during the session, not only to the leader?',
          'Is there no test, no grade and no homework sheet of similar questions?',
          'Are pupils asked to write explanations, and does someone read them?',
          'Does the same group meet for months, so pupils know each other\'s ideas?'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Free first, if your child qualifies',
          left: [
            'If your child fits the stage and entry rules of a free programme in the table, apply. A long-term free circle with a university or a specialist school behind it is a fine thing to be part of.',
            'Our class is for the many pupils who do not fit those rules, or want an extra weekly session alongside.'
          ],
          rightH3: 'What our circle adds',
          right: [
            'A fixed weekly time with the same pupils and teacher, ages from 10, and a teacher who reads every written explanation and returns comments before the next session.',
            'Sixth formers who want the same habits aimed at admissions can move on to our <a class="ag-inline-link" href="/british-mathematical-olympiad-bmo-preparation">BMO</a> or STEP preparation.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'Four stages in a circle',
    lede: 'Our stages; pupils move up when the habit, not the topic, is secure.',
    table: { caption: 'Our circle stages', head: ['Stage', 'Typical age', 'Secure when'], rows: [
      ['1. Explorer', '10 to 12', 'Lists cases carefully and spots when a list is complete'],
      ['2. Conjecturer', '11 to 14', 'States a pattern precisely and tries to break it'],
      ['3. Explainer', '13 to 16', 'Writes a convincing argument a classmate can follow'],
      ['4. Problem poser', '15 to 18', 'Invents the next question and leads part of a session']
    ] },
    left: { h3: 'Mixed ages work', ps: [
      'Circles mix ages comfortably because the problems have many entry points.',
      'We group by stage, so a confident 11-year-old may sit with 13-year-olds.'
    ] },
    right: { h3: 'Competition as a side effect', ps: [
      'Circle pupils often enjoy the <a class="ag-inline-link" href="/maths-olympiad-training-uk">UKMT olympiad ladder</a>, but we never turn a circle into exam practice.',
      'The competition route has its own pages.'
    ] }
  },

  catalogue: {
    eyebrow: 'All related courses',
    h2: 'Courses for circle-minded pupils',
    lede: 'Grouped by stage, each with a full syllabus.',
    bands: [
      { num: 'I', h3: 'Starting out', sub: 'Ages 6 to 11', courses: [
        { code: 'UK / CU / 01', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning for young thinkers', blurb: 'Pattern and spatial play, ages 6 to 9.' },
        { code: 'UK / CU / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'The number fluency that circle problems lean on.' }
      ] },
      { num: 'II', h3: 'The circle years', sub: 'Ages 10 to 16', courses: [
        { code: 'UK / CU / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Weekly maths circle', blurb: 'Long problems, written explanations.' },
        { code: 'UK / CU / 04', slug: 'maths-through-coding', title: 'Circle problems with code', blurb: 'Evidence by Python, proof by hand.' },
        { code: 'UK / CU / 05', slug: 'middle-school-math-competitions-course', title: 'Junior competitions', blurb: 'For pupils who like a timed challenge too.' }
      ] },
      { num: 'III', h3: 'Sixth form', sub: 'Ages 16 to 18', courses: [
        { code: 'UK / CU / 06', slug: 'tmua-mat-step-preparation-course', title: 'TMUA and STEP preparation', blurb: 'Admissions problem solving.' },
        { code: 'UK / CU / 07', slug: 'a-level-further-maths-course', title: 'A level Further Maths', blurb: 'The content behind harder problems.' },
        { code: 'UK / CU / 08', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithmic problem solving', blurb: 'The computing cousin of a circle.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How our circle runs',
    h2: 'The same group, the same time, every week',
    lede: TIMING + ' Times are set in UK time. Our teachers work from India, so their working day overlaps the UK afternoon and evening comfortably.',
    slots: [
      { time: 'Weekday after school', l: 'Circle groups for ages 10 to 15.' },
      { time: 'Weekday evening', l: 'Sixth-form problem solving.' },
      { time: 'Weekend morning', l: 'Circles and 1-on-1 sessions.' }
    ],
    cells: [
      { h3: 'One problem, many weeks', p: 'A problem stays open until the group can explain it.' },
      { h3: 'Breakout pairs', p: 'Pupils think in pairs on screen before the whole group meets.' },
      { h3: 'A shared board', p: 'Every idea goes up where everyone can see and test it.' },
      { h3: 'Written follow-up', p: 'A short explanation after each arc, read and commented on.' },
      { h3: 'Stable groups', p: '15 to 20 pupils who stay together, or 1-on-1.' },
      { h3: 'Code as a lab', p: 'Python tests a conjecture when hand cases run out.' }
    ]
  },

  projectsH2: 'Built by students in our classes',
  projectsLede: 'Maths and code projects from our learners. See more in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Family reviews from our Google profile, word for word.',

  fees: {
    h2: 'Fees for the online circle',
    lede: 'A single monthly fee, priced for UK learners, with no contract for the year, so a pupil can try the circle for a month and decide. The first session is free.',
    free: ['A full circle session', 'A suggested stage and group', 'Booked with a phone number only'],
    group: ['15 to 20 pupils at one stage', 'A long problem each few weeks', 'Explanations read and returned', 'The same teacher all year'],
    one: ['One pupil, one teacher', 'Problems chosen for the pupil', 'Ideal for a pupil far ahead of peers']
  },

  faq: {
    eyebrow: 'Maths circle questions',
    h2: 'What families ask about maths circles',
    items: [
      { q: 'What is a maths circle?', a: 'A small group that meets regularly to work on rich problems with no syllabus and no grades, often staying on one problem for weeks. King\'s College London Mathematics School describes its Axiom circles as students coming together to grapple with puzzles and learn to think like mathematicians.' },
      { q: 'Are there maths circles in the UK?', a: 'Yes. The Axiom circles run by King\'s College London Mathematics School are a long-term programme from Year 7, partly online. University outreach such as the Oxford Online Maths Club and Cambridge\'s STEP Support Programme works in a similar spirit for older pupils.' },
      { q: 'Can my child join a maths circle online?', a: 'Some free programmes run online, but most have an age range or priority rules. The Oxford Online Maths Club needs no registration and suits sixth formers best. Our own weekly circle runs online for ages 10 to 18 and is open to any family.' },
      { q: 'Is the Oxford Online Maths Club free?', a: 'Yes. Oxford says it is free, needs no registration and is recorded. It streams on Thursdays at 5pm UK time, and from June to December it hosts the Oxford Maths Admissions Test Livestream, which now focuses on the TMUA.' },
      { q: 'Who gets a place on Axiom maths circles?', a: 'King\'s says a pupil who joins in Year 7 keeps a place for their whole school journey. Places are prioritised for students who meet the widening-participation criteria the school publishes on its Axiom page, so read that page before applying.' },
      { q: 'What age should a child start a maths circle?', a: 'Many circles start around age 10 or 11, the Year 6 to Year 7 point, once a child can explain their thinking in words. Younger children do well with reasoning and puzzle lessons first.' },
      { q: 'Is a maths circle the same as olympiad training?', a: 'No. Olympiad training works towards a paper on a fixed date. A circle has no paper at all, although circle pupils often enjoy olympiads because they are used to long, unfamiliar problems.' },
      { q: 'Is STEP Support a circle?', a: 'Not quite. The STEP Support Programme is free online modules, designed to be studied weekly over about six months from Year 12, with hints and full solutions. Working through it with friends gives it some of a circle\'s feel.' },
      { q: 'Are you connected with Oxford, Cambridge or King\'s?', a: 'No. We run our own classes and answer to no university or school. We describe these programmes from their own pages so families can find them, and we have no link with any of them.' },
      { q: 'When does your circle meet?', a: TIMING + ' Every time is given in UK time.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More enrichment for keen mathematicians',
    lede: 'Masterclasses, competitions and admissions maths.',
    items: [
      { href: '/maths-masterclasses-for-able-students-uk', label: 'Maths masterclasses', p: 'The Royal Institution series and how places work.' },
      { href: '/maths-olympiad-training-uk', label: 'Maths olympiad training', p: 'The UKMT ladder from junior to British olympiad.' },
      { href: '/step-maths-preparation', label: 'STEP preparation', p: 'Sixth Term Examination Papers in detail.' },
      { href: '/ukmt-team-maths-challenge-practice', label: 'Team Maths Challenge', p: 'Maths as a team sport.' },
      { href: '/maths-tuition-in-oxford', label: 'Maths tuition in Oxford', p: 'Local options around the university city.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'All our UK pages.' }
    ]
  },

  start: {
    h2: 'Try a circle session free',
    lede: 'Share how old your child is and a problem they enjoyed. We place them in a circle session, then suggest the group that fits.',
    readFirst: 'Prefer to read first? Every <a class="ag-inline-link" href="/courses">course page</a> lists its problem themes, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes our sessions.',
    note: 'WhatsApp is the fastest route to us. We answer from India on a +91 number.',
    formNote: 'Free to book; one person will reply.'
  },

  footer: {
    cols: [
      { h4: 'Enrichment', links: [
        { href: '/maths-masterclasses-for-able-students-uk', label: 'Masterclasses' },
        { href: '/maths-olympiad-training-uk', label: 'Olympiad training' },
        { href: '/step-maths-preparation', label: 'STEP preparation' },
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' }
      ] },
      { h4: 'About us', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Slow problems, the same faces, and proof at the end'
  },

  personalityCss: `
.ag-root.ag-cu .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-cu .ag-capsule { border-left-width: 4px; border-radius: 0 14px 14px 0; }
.ag-root.ag-cu .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-cu .ag-table th:first-child { width: 28%; }
.ag-root.ag-cu .ag-code pre { line-height: 1.55; }
`,

  dossier: {
    curriculumAuthority: 'King\'s College London Mathematics School (Axiom maths circle and outreach pages, read 31 October 2026): definition of a maths circle; long-term programme from Year 7 for the whole school journey; some online, some in person; Mondays and Thursdays 16:30 to 17:30; widening-participation priority; high-attainers who love problem-solving; all student events free; sessions continue from w/b 21 September 2026; GCSE+ Maths Years 9 to 11; Extension Mathematics. University of Oxford: Online Maths Club weekly free livestream, no registration, Thursdays 5pm UK time, aimed at university applicants, January to June super-curricular, June to December admissions livestream focused on TMUA; Problem Solving Matters for Year 12 in state-funded schools, home-educated welcomed. University of Cambridge: Faculty of Mathematics outreach one of the largest subject-specific programmes; STEP Support free and open to everyone, Foundation modules weekly over about 6 months; NRICH Maths Club webinars.',
    localProject: 'One problem, three weeks. The page defines a maths circle from the organiser\'s own words, compares it with tuition and masterclasses, maps six UK circle and outreach programmes by stage, format and entry rule, runs an original three-week circle arc on two-stamp postage with a Python check that separates evidence from proof, gives five original circle problems, and offers a five-question test for telling a real circle from relabelled tuition. Lesson family: a format explainer with a programme map.',
    requiredMentions: ['grapple with intriguing puzzles, discover and explore exciting ideas', 'guaranteed a place on the programme for their entire school journey', 'Mondays and Thursdays 16:30 to 17:30', 'free, interactive, casual, and relaxed', 'mostly aimed at people about to apply to university', 'The resources are free and open to everyone.', 'Problem Solving Matters', 'largest_impossible', 'Axiom maths circles'],
    sources: [
      { claim: 'King\'s College London Mathematics School, Axiom maths circle: definition, long-term place from Year 7, online and in person, session times, priority criteria.', url: 'https://www.kingsmathsschool.com/outreach/axiom-maths-circle' },
      { claim: 'King\'s College London Mathematics School outreach: events free, autumn 2026 restart dates, GCSE+ Maths, Extension Mathematics.', url: 'https://www.kingsmathsschool.com/outreach' },
      { claim: 'University of Oxford, Oxford Online Maths Club: weekly free livestream, no registration, audience, yearly pattern, Thursday 5pm.', url: 'https://www.maths.ox.ac.uk/outreach/oxford-online-maths-club' },
      { claim: 'University of Oxford, Problem Solving Matters: Year 12, state-funded schools, home-educated students welcomed.', url: 'https://www.maths.ox.ac.uk/outreach/problem-solving-matters' },
      { claim: 'STEP Support Programme, University of Cambridge: free and open to everyone; Foundation modules weekly over about 6 months.', url: 'https://step.maths.org/' },
      { claim: 'University of Cambridge Faculty of Mathematics outreach overview; NRICH Maths Club webinars.', url: 'https://www.maths.cam.ac.uk/outreach' }
    ],
    rejectedClaims: [
      'Axiom programme details on mesme.org: HTTP 403; stopped and not worked around.',
      'mathscircle.org.uk: connection failed; not used. UCL and Warwick outreach URLs tried returned 403 and 404; not used.',
      'The detailed Axiom priority categories: identity-based criteria are not reproduced; readers are sent to the school\'s page.',
      'Number of Axiom places or acceptance rates: not published on the pages read.',
      'Any affiliation or endorsement from King\'s, Oxford, Cambridge, NRICH or MEI: none exists; the page says so.',
      'Name of the Oxford club host: an individual; not printed.'
    ]
  }
};
