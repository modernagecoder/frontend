'use strict';
// HSC Mathematics Advanced tutoring (ag- exam door, Australia cluster Phase 3, row 53).
// Facts read raw on 7 October 2026 at the NSW Curriculum site (curriculum.nsw.edu.au, Mathematics
// Advanced 11-12 Syllabus (2024): overview, course structure and enrolment details, HSC examinations,
// school-based assessment) and the NSW Government page for the Mathematics Advanced Stage 6 Syllabus
// (2017), which states that syllabus "will not be available after December 2026". New syllabus:
// implemented from 2026; Year 12 teaching from Term 4 2026; first HSC exam 2027. Seven areas of study;
// Year 11 focus areas Working with functions, Graph transformations, Trigonometry and measure of angles,
// Trigonometric identities and equations, Introduction to differentiation, Exponential and logarithmic
// functions, Probability and data; Year 12 focus areas Further graph transformations and modelling,
// Differential calculus, Integral calculus, Applications of calculus, Sequences and series, Random
// variables, Financial mathematics. Course numbers 11255 and 15255, 120 hours and 2 units each.
// HSC exam: 100 marks, 3 hours plus 10 minutes reading time, reference sheet, NESA-approved calculators,
// Section I 10 marks objective-response, Section II 90 marks in 37 to 42 items, at least two worth 4 or 5.
// School-based: Knowledge and understanding 50, Skills in Working mathematically 50; one take-home task
// worth no more than 15%; tasks between 10% and 40%. HSC written exams 2026: start 13 October, finish no
// later than 5 November (NESA key dates). Spine: secant slopes closing in on a tangent (the difference
// quotient table), checked free site-wide on 7 October 2026.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'exam', tag: 'HSC MATHS ADVANCED', label: 'HSC Maths Advanced tutoring', blurb: 'The calculus-based NSW course under its 2024 syllabus: focus areas by year, the 100-mark HSC paper, and how a tangent is really found.' },
  slug: 'hsc-maths-advanced-tutoring',
  code: 'hadv',
  accent: '#393999',
  accentRationale: 'HSC Maths Advanced: a muted ink blue, contrast above 4.9:1 on #EDE7DA, at least 15 RGB from every accent on the site',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'HSC Maths Advanced tutoring',
  title: 'HSC Maths Advanced Tutoring | NSW 2024 Syllabus, Online',
  description: 'HSC Maths Advanced tutoring online for NSW Year 11 and 12: the 2024 syllabus focus areas, the 100-mark HSC paper, calculus from first principles, no band promises.',
  ogDescription: 'Mathematics Advanced in NSW, read from the 2024 syllabus: seven areas of study, what Year 11 and Year 12 cover, the HSC examination specification, school-based assessment rules, and a worked route from secant to tangent.',
  twitterDescription: 'HSC Maths Advanced from the 2024 NSW syllabus: focus areas, the 100-mark paper and calculus that makes sense.',
  pageName: 'HSC Maths Advanced Tutoring',
  webPageDescription: 'Tutoring support for NSW students in Mathematics Advanced: the 2024 syllabus and its implementation dates, focus areas for Year 11 and Year 12, the HSC examination specification, school-based assessment requirements, and an original worked example on the difference quotient.',
  courseDescription: 'Live online mathematics teaching for NSW Year 11 and Year 12 Mathematics Advanced students: functions, trigonometry, calculus, sequences, statistics and financial mathematics, taught for understanding.',
  crumbs: [{ name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'HSC Maths Advanced',
  navLinks: [
    { href: '#syllabus', label: 'The syllabus' },
    { href: '#paper', label: 'The HSC paper' },
    { href: '#tangent', label: 'Secant to tangent' },
    { href: '#school', label: 'School tasks' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'New South Wales &middot; Mathematics Advanced &middot; Live online',
  h1: 'HSC Maths Advanced tutoring',
  lede: 'Mathematics Advanced is the calculus course most NSW students take into Year 12, and it is changing under their feet. A new syllabus written in 2024 takes over from the 2017 one, with Year 12 teaching starting in Term 4 of 2026 and the first exam on it in 2027. Students who understand why a derivative works, rather than which rule to apply, ride out that kind of change easily. That understanding is what we teach.',
  secondaryCta: { href: '#tangent', label: 'Work through the tangent example' },
  wa: 'Hello Modern Age Coders, I would like a free class about HSC Mathematics Advanced in NSW.',
  heroNote: 'Read from the 2024 syllabus &middot; Calculus taught from first principles &middot; Lessons in NSW afternoon hours',
  spec: [
    ['Syllabus', 'Mathematics Advanced 11-12 (2024)'],
    ['Replaces', 'The Stage 6 syllabus of 2017'],
    ['Year 12 start', 'Term 4, 2026'],
    ['First HSC exam', '2027'],
    ['HSC paper', '100 marks, 3 hours plus reading'],
    ['Areas of study', 'Seven'],
    ['We teach', 'Concepts, method, exam writing'],
    ['We never', 'Promise a band']
  ],
  capsuleQ: 'In short',
  capsule: 'HSC Mathematics Advanced is the NSW calculus-based course, now governed by the Mathematics Advanced 11-12 Syllabus (2024). It covers functions, trigonometry, calculus, exponentials and logarithms, sequences and series, statistics and financial mathematics. The HSC exam is one 100-mark written paper of 3 hours plus 10 minutes reading time, with a reference sheet and approved calculators. We tutor it online, live, for Year 11 and Year 12.',

  picks: {
    eyebrow: 'Where to begin',
    h2: 'Three courses that carry Advanced',
    lede: 'Algebra that never wobbles, then calculus taught as an idea, then the statistics Year 12 leans on.',
    items: [
      { course: 'algebra-foundations-masterclass', code: 'HADV / 01', title: 'Algebra, made automatic', note: 'Factorising, indices and rearranging without hesitation, because every calculus mark in the paper rests on algebra done cleanly.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'HADV / 02', title: 'Functions to calculus', note: 'Graphs, trigonometry and the derivative built up in order, matching the way Advanced moves from Year 11 to Year 12.' },
      { course: 'statistics-probability-maths-course', code: 'HADV / 03', title: 'Probability and random variables', note: 'Discrete and continuous random variables, expectation and spread, the Year 12 statistics focus area in full.' }
    ]
  },

  sections: [
    {
      id: 'syllabus', tint: 'tint', eyebrow: 'What the 2024 syllabus contains',
      h2: 'Seven areas of study, split across two years',
      lede: 'The focus areas below are NESA\'s own, from the course structure of the new syllabus. Read on the NSW Curriculum site, checked on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'Mathematics Advanced 11-12 Syllabus (2024): focus areas by year', head: ['Area of study', 'Year 11 focus areas', 'Year 12 focus areas'], rows: [
          ['Functions', 'Working with functions; Graph transformations', 'Further graph transformations and modelling'],
          ['Trigonometric functions', 'Trigonometry and measure of angles; Trigonometric identities and equations', 'None listed for Year 12'],
          ['Calculus', 'Introduction to differentiation', 'Differential calculus; Integral calculus; Applications of calculus'],
          ['Exponential and logarithmic functions', 'Exponential and logarithmic functions', 'None listed for Year 12'],
          ['Statistical analysis', 'Probability and data', 'Random variables'],
          ['Sequences and series', 'None listed for Year 11', 'Sequences and series'],
          ['Financial mathematics', 'None listed for Year 11', 'Financial mathematics']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Read the table from left to right and a pattern appears. Year 11 lays down the language: functions, angles, logarithms, a first look at the derivative. Year 12 then spends most of its time in calculus, with three separate focus areas devoted to it, and uses that calculus to model growth, motion and accumulation.',
            'NESA lists the Year 11 course as course number 11255 and the Year 12 course as 15255, each worth 2 units and 120 indicative hours. Year 12 Advanced has Year 11 Advanced as its prerequisite, so a shaky Year 11 is not something a student can leave behind.'
          ],
          right: [
            'The timing matters for anyone in Year 11 or 12 right now. NESA says the new syllabus "is to be implemented from 2026", with teaching for Year 12 starting in Term 4 of 2026 and the first HSC examination on it in 2027. The NSW Government page for the 2017 syllabus warns that it "will not be available after December 2026".',
            'In practice, revision guides and worked solutions printed for the 2017 course still teach a lot of useful mathematics, but their topic lists no longer match. Sequences and series, for example, now sits as its own Year 12 area of study. Students should plan revision from the 2024 focus areas and borrow older material only where the content lines up.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/overview" rel="noopener" target="_blank">NSW Curriculum, Mathematics Advanced 11-12 Syllabus (2024), overview and course structure</a>; <a class="ag-inline-link" href="https://www.nsw.gov.au/education-and-training/nesa/curriculum/mathematics/mathematics-advanced-stage-6-2017" rel="noopener" target="_blank">NSW Government, Mathematics Advanced Stage 6 Syllabus (2017)</a>. Checked on 7 October 2026.' }
      ]
    },
    {
      id: 'paper', tint: 'deep', eyebrow: 'How the HSC paper is built',
      h2: 'One written paper worth 100 marks',
      lede: 'NESA publishes the examination specification with the syllabus. Everything in the table is quoted from it, checked on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'Mathematics Advanced HSC examination specification', head: ['Feature', 'What NESA specifies'], rows: [
          ['Marks', 'A written paper worth 100 marks'],
          ['Time', '3 hours plus 10 minutes reading time'],
          ['Support', 'A reference sheet will be provided; NESA-approved calculators may be used'],
          ['Section I', 'Objective-response questions to the value of 10 marks'],
          ['Section II', '90 marks; questions may contain parts; there will be 37 to 42 items'],
          ['Longer items', 'At least two items will be worth 4 or 5 marks'],
          ['Scope', 'Based on the Year 12 course; the Year 11 course is assumed knowledge and may be examined']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Ninety of the hundred marks sit in Section II, spread over 37 to 42 items. That works out to an average of a little over two marks per item, which tells a student what the paper rewards: short, correct chains of reasoning, written so a marker can follow each step.',
            'The two or more items worth 4 or 5 marks are where preparation shows. A student who sets out a derivative, states what it means in context and then answers the question asked collects those marks steadily; a student who jumps straight to a number usually loses half of them.'
          ],
          right: [
            'Three hours for 100 marks is roughly 1.8 minutes per mark. We teach students to use that number as a budget during practice papers: an item worth 3 marks should take around five and a half minutes, and anything running far past that is a sign to move on and return later.',
            'The 2026 HSC written exams start on 13 October 2026 and finish no later than 5 November 2026, according to NESA\'s key dates. A student sitting the first exam on the new syllabus in 2027 should expect a similar window and check NESA\'s 2027 timetable once it is released.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/assessment/hsc-examinations" rel="noopener" target="_blank">NSW Curriculum, Mathematics Advanced HSC examinations</a>; <a class="ag-inline-link" href="https://www.nsw.gov.au/education-and-training/nesa/key-dates/hsc" rel="noopener" target="_blank">NESA, 2026 HSC key dates</a>. Checked on 7 October 2026.' }
      ]
    },
    {
      id: 'tangent', tint: 'tint', eyebrow: 'The idea worth owning',
      h2: 'From secant slopes to a tangent',
      lede: 'Introduction to differentiation is a Year 11 focus area, and everything in Year 12 calculus is built on it. The cleanest way to understand it is to watch a difference quotient settle down as the gap shrinks.',
      body: [
        { kind: 'three', cells: [
          { h3: '1. Pick two points', p: 'Take a curve and a point on it. Choose a second point a horizontal distance h further along. The straight line through both is a secant, and its slope is the change in y divided by h.' },
          { h3: '2. Shrink the gap', p: 'Make h smaller and recalculate. The second point slides towards the first, and the secant swings closer to the line that only touches the curve there.' },
          { h3: '3. Read the limit', p: 'If the slopes approach one fixed number as h gets smaller, that number is the gradient of the tangent: the derivative at that point.' }
        ] },
        { kind: 'p', text: 'A worked example, written by us for practice. Take y = x cubed at the point x = 2, where y = 8. The secant slope to the point x = 2 + h is ((2 + h) cubed minus 8) divided by h. Expanding the bracket and dividing by h gives 12 + 6h + h squared, so the table below can be checked by hand as well as by calculator.' },
        { kind: 'table', caption: 'Secant slopes of y = x cubed from x = 2, as the gap h shrinks', head: ['h', 'Second point x', 'Secant slope', 'Gap from 12'], rows: [
          ['1', '3', '19', '7'],
          ['0.1', '2.1', '12.61', '0.61'],
          ['0.01', '2.01', '12.0601', '0.0601'],
          ['0.001', '2.001', '12.006001', '0.006001'],
          ['-0.01', '1.99', '11.9401', '-0.0599']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The slopes close in on 12 from above when h is positive and from below when h is negative, and the gap shrinks roughly in proportion to h. That is exactly what the algebra predicted: 12 + 6h + h squared tends to 12 as h tends to 0, so the gradient of the tangent at x = 2 is 12.',
            'The power rule would have said 3 times 2 squared, which is also 12. The point of the table is not to replace the rule but to make it believable. A student who has watched the slopes settle can explain in words what a derivative is, and that explanation is what earns the method marks on a "show that" question.'
          ],
          right: [
            'The same table carries straight into Year 12. Differential calculus asks for rates of change and stationary points; Applications of calculus asks what those rates mean for a real quantity. Each is the limit of a difference quotient in disguise, which is why we return to this idea whenever a student gets lost in a long derivative.',
            'There is a programming version too. A few lines of Python can print this table for any function and any h, and watching the numbers in real time cements the idea in a way a printed page cannot. We use that for students who also enjoy coding, never as a substitute for the written method the exam wants.'
          ] }
      ]
    },
    {
      id: 'school', tint: '', eyebrow: 'School-based assessment',
      h2: 'What schools must do, and what that means for the student',
      lede: 'Alongside the exam, every school runs its own assessment program. The rules below are NESA\'s, checked on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'Mathematics Advanced school-based assessment requirements', head: ['Year', 'What NESA requires'], rows: [
          ['Year 11', 'A grade for each student on the Common Grade Scale for Preliminary courses; components Knowledge and understanding of course content 50% and Skills in Working mathematically 50%'],
          ['Year 12', 'A school-based assessment mark for each student; the same two components at 50% each'],
          ['Both years', 'Schools set the number, type and weighting of tasks, subject to a limit of one take-home task worth no more than 15%'],
          ['Guidance', 'Individual tasks should carry a weighting between 10% and 40%']
        ] },
        { kind: 'p', text: 'Half the school mark is labelled Skills in Working mathematically, which in the 2024 syllabus means communicating reasoning, understanding and fluency, and problem solving. That is good news for students who can explain a method in clear sentences, and bad news for students who have memorised procedures without knowing why they work. The difference quotient above is one small example of the explanation habit we build.' },
        { kind: 'p', text: 'NESA limits each program to one take-home task worth no more than 15%, a change made with generative AI in mind. Most marks therefore come from tasks done in class or under exam conditions. We teach with our own problems and never complete, edit or check work that a school will assess; our job is to make sure the student can do it unaided on the day.' },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/assessment/school-based-assessment" rel="noopener" target="_blank">NSW Curriculum, Mathematics Advanced school-based assessment</a>. Checked on 7 October 2026.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Getting there',
    h2: 'Four stages from Year 10 to the exam',
    lede: 'A student\'s starting stage depends on what they can do without help, not on the calendar.',
    table: { caption: 'From confident algebra to a finished HSC paper', head: ['When', 'Stage', 'The sign it is secure'], rows: [
      ['Year 10', '1. Algebra', 'Expands, factorises and rearranges formulas with no sign slips'],
      ['Year 11', '2. Functions', 'Sketches a transformed graph and explains each change'],
      ['Year 11 into 12', '3. Calculus', 'Explains a derivative as the limit of secant slopes'],
      ['Year 12', '4. Exam writing', 'Sets out a 5-mark item so a stranger could follow it']
    ] },
    left: { h3: 'If Year 11 feels rushed', ps: [
      'Graph transformations and logarithms usually expose gaps in index laws and rearranging. A few weeks of focused algebra repair often unlocks the whole Year 11 course faster than pushing on.',
      'Trigonometry is the other common bottleneck. Students who learn the unit circle as a picture rather than a list of values make far fewer errors with identities and equations.'
    ] },
    right: { h3: 'After Advanced', ps: [
      'Students who enjoy the proof side of calculus can move into <a class="ag-inline-link" href="/hsc-maths-extension-1-tutoring">Mathematics Extension 1</a>, which builds directly on Advanced.',
      'Advanced also supports computing: the rates of change and modelling skills here reappear in <a class="ag-inline-link" href="/hsc-software-engineering-help">HSC Software Engineering</a> and any later data or AI study.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for Advanced students',
    lede: 'Grouped by how they support the course. Every card opens a full syllabus.',
    bands: [
      { num: 'I', h3: 'The foundation', sub: 'Algebra and functions', courses: [
        { code: 'HADV / F / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Equations, indices and factorising until they are automatic.' },
        { code: 'HADV / F / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school mathematics', blurb: 'Functions, trigonometry and calculus taught in a sensible order.' },
        { code: 'HADV / F / 03', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school mathematics', blurb: 'For a student who needs to rebuild Year 8 and 9 skills first.' }
      ] },
      { num: 'II', h3: 'The Year 12 core', sub: 'Calculus and statistics', courses: [
        { code: 'HADV / C / 01', slug: 'ap-calculus-exam-prep', title: 'Calculus practice', blurb: 'Built for the US AP exam, and full of differentiation and integration practice that overlaps Advanced.' },
        { code: 'HADV / C / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Random variables, distributions and data, the statistical half of Year 12.' },
        { code: 'HADV / C / 03', slug: 'complete-business-finance-mathematics-mastery', title: 'Business and finance maths', blurb: 'Interest, annuities and growth, close to the Financial mathematics focus area.' }
      ] },
      { num: 'III', h3: 'Stretch', sub: 'For students reaching past the course', courses: [
        { code: 'HADV / S / 01', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition mathematics', blurb: 'Problem solving for students who want harder questions than the syllabus sets.' },
        { code: 'HADV / S / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Python used to explore functions, limits and data.' },
        { code: 'HADV / S / 03', slug: 'college-mathematics-complete-masterclass', title: 'University mathematics', blurb: 'A first taste of calculus and linear algebra at university pace.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Weekly lessons, set to NSW afternoons',
    lede: 'Our tutors work from India. From early October to early April, while NSW runs on daylight saving, Sydney sits five and a half hours ahead of India time; for the rest of the year the gap is four and a half hours. A 4.30 pm lesson in Sydney in summer therefore starts at 11 am for the tutor, which makes after-school lessons easy to staff.',
    slots: [
      { time: 'After school, weekdays', l: 'The usual rhythm through Year 11 and Year 12.' },
      { time: 'Saturday or Sunday morning', l: 'For longer sessions on a single focus area.' },
      { time: 'Holiday blocks', l: 'Short intensive runs before trials or the HSC.' }
    ],
    cells: [
      { h3: 'Ideas before rules', p: 'Each new technique starts with why it works, so it survives a question worded in an unfamiliar way.' },
      { h3: 'Working shown in full', p: 'Students practise setting out solutions the way markers read them, line by line.' },
      { h3: 'Timed practice', p: 'Past-style items done against a minutes-per-mark budget, then reviewed together.' },
      { h3: 'Groups of fifteen to twenty', p: 'Advanced students at a matching level, each one asked to explain their reasoning aloud.' },
      { h3: 'Private sessions', p: 'One student, one tutor, for a focus area that needs repair.' },
      { h3: 'Honest about outcomes', p: 'We never promise a band. The marks are earned by the student.' }
    ]
  },

  projectsH2: 'Projects our students have published',
  projectsLede: 'Personal work, not school assessment. More are collected in our <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Copied word for word from Google, as parents and students wrote them.',

  fees: {
    h2: 'Fees',
    lede: 'A single monthly fee in US dollars, the same for every family outside India. Nothing to join and nothing owed beyond the month in progress.',
    free: ['A real lesson on a real topic', 'A frank view of the gaps', 'No card needed'],
    group: ['Fifteen to twenty students at one level', 'The same tutor each week', 'Practice marked and discussed', 'A certificate at the end'],
    one: ['One tutor, one student', 'Aimed at named weak spots', 'Useful in the run-up to trials']
  },

  faq: {
    eyebrow: 'Questions about Advanced',
    h2: 'What NSW students and parents ask',
    items: [
      { q: 'What is HSC Mathematics Advanced?', a: 'It is the NSW calculus-based mathematics course for Year 11 and Year 12, now set by the Mathematics Advanced 11-12 Syllabus (2024). It covers functions, trigonometry, calculus, exponential and logarithmic functions, sequences and series, statistical analysis and financial mathematics.' },
      { q: 'Which syllabus applies to my child?', a: 'NESA says the 2024 syllabus is implemented from 2026, with Year 12 teaching starting in Term 4 of 2026 and the first HSC exam in 2027. The 2017 syllabus page states it will not be available after December 2026. The school will confirm which course a student is enrolled in.' },
      { q: 'How long is the Advanced HSC exam?', a: '3 hours plus 10 minutes reading time, for a written paper worth 100 marks. A reference sheet is provided and NESA-approved calculators may be used.' },
      { q: 'How is the paper divided?', a: 'Section I has objective-response questions worth 10 marks. Section II is worth 90 marks across 37 to 42 items, and at least two items are worth 4 or 5 marks.' },
      { q: 'Is Year 11 content examined in the HSC?', a: 'NESA states the exam is based on the Year 12 course and that the Year 11 course is assumed knowledge and may be examined.' },
      { q: 'What is a difference quotient?', a: 'It is the slope of a secant line between two points on a curve: the change in y divided by the horizontal gap h. As h shrinks towards zero, the difference quotient approaches the gradient of the tangent, which is the derivative at that point.' },
      { q: 'How are school assessment marks split?', a: 'NESA sets two components at 50% each: knowledge and understanding of course content, and skills in working mathematically. Schools may set only one take-home task, worth no more than 15%.' },
      { q: 'Can you guarantee a top band?', a: 'No, and nobody honestly can. We teach the mathematics and the exam technique; the result depends on the work the student does.' },
      { q: 'Will you help with assessment tasks?', a: 'We teach the mathematics behind them with our own problems. We do not write, edit or check any work that a school will mark.' },
      { q: 'When are lessons held for NSW students?', a: 'Usually after school or on weekend mornings in NSW time, which falls in the late morning or early afternoon for our tutors. The weekly time is agreed after the free class.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for NSW senior students',
    lede: 'The next course up, the computing courses beside it, and the national picture.',
    items: [
      { href: '/hsc-maths-extension-1-tutoring', label: 'HSC Maths Extension 1', p: 'Proof, vectors and combinatorics on top of Advanced.' },
      { href: '/hsc-maths-standard-tutoring', label: 'HSC Maths Standard', p: 'The applied course, for a student weighing the switch.' },
      { href: '/hsc-software-engineering-help', label: 'HSC Software Engineering', p: 'The newest computing course in the NSW HSC.' },
      { href: '/coding-and-ai-classes-in-new-south-wales', label: 'Coding and AI in New South Wales', p: 'NESA, the stages, and every NSW page in one place.' },
      { href: '/online-maths-tutoring-australia', label: 'Online maths tutoring in Australia', p: 'Maths support for every year level and state.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our method, set out plainly.' }
    ]
  },

  start: {
    h2: 'Book a free Advanced lesson',
    lede: 'Tell us the year level, the focus area and where marks are slipping. The free lesson works on that topic with our own problems.',
    readFirst: 'Prefer to read first? Every course syllabus sits on the <a class="ag-inline-link" href="/course-atlas">course atlas</a>, our approach is on <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and the <a class="ag-inline-link" href="/australian-coding-maths-and-ai-competitions-calendar">competitions calendar</a> lists maths contests across the year.',
    note: 'WhatsApp is the quickest way to reach us. Our number starts with +91 because the school is based in India; there is no NSW office.',
    formNote: 'No card and no commitment. We reply once to arrange the lesson.'
  },

  footer: {
    cols: [
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/online-maths-tutoring-australia', label: 'Maths tutoring' },
        { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' },
        { href: '/naplan-numeracy-practice-online', label: 'NAPLAN numeracy' }
      ] },
      { h4: 'Senior years', links: [
        { href: '/hsc-maths-extension-1-tutoring', label: 'Maths Extension 1' },
        { href: '/hsc-software-engineering-help', label: 'Software Engineering' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Calculus explained, never a band promised'
  },

  personalityCss: `
.ag-root.ag-hadv .ag-hero-grid { gap: clamp(1rem, 3vw, 2.5rem); }
.ag-root.ag-hadv .ag-hero h1 { letter-spacing: -0.02em; }
.ag-root.ag-hadv .ag-capsule { border-left-width: 5px; }
.ag-root.ag-hadv .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-hadv .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-hadv .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-hadv .ag-spec dt { letter-spacing: 0.1em; }
.ag-root.ag-hadv .ag-slots { gap: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'NSW Education Standards Authority (NESA). Mathematics Advanced 11-12 Syllabus (2024), read at curriculum.nsw.edu.au on 7 October 2026: implemented from 2026, Year 12 teaching from Term 4 2026, first HSC exam 2027; seven areas of study; course numbers 11255 and 15255, 120 hours and 2 units each; HSC exam 100 marks, 3 hours plus 10 minutes reading time, Section I 10 marks, Section II 90 marks in 37 to 42 items; school-based components 50/50 with one take-home task worth no more than 15%.',
    localProject: 'The difference quotient as secant slopes closing in on a tangent: y = x cubed at x = 2, secant slope 12 + 6h + h squared, tabulated for h = 1, 0.1, 0.01, 0.001 and -0.01 (19, 12.61, 12.0601, 12.006001, 11.9401), approaching 12 from both sides; written by us for practice.',
    requiredMentions: ['Mathematics Advanced 11-12 Syllabus (2024)', 'Further graph transformations and modelling', 'Trigonometric identities and equations', 'Introduction to differentiation', '37 to 42 items', '3 hours plus 10 minutes reading time', '15255', '12.0601', 'difference quotient', 'will not be available after December 2026'],
    sources: [
      { claim: 'NSW Curriculum, Mathematics Advanced 11-12 Syllabus (2024): implementation from 2026, Year 12 teaching Term 4 2026, first HSC exam 2027, seven areas of study.', url: 'https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/overview' },
      { claim: 'NSW Curriculum, Mathematics Advanced course structure and enrolment details: Year 11 and Year 12 focus areas, course numbers 11255 and 15255, 120 hours, 2 units.', url: 'https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/overview/course' },
      { claim: 'NSW Curriculum, Mathematics Advanced HSC examination specifications.', url: 'https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/assessment/hsc-examinations' },
      { claim: 'NSW Curriculum, Mathematics Advanced school-based assessment requirements.', url: 'https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/assessment/school-based-assessment' },
      { claim: 'NSW Government, Mathematics Advanced Stage 6 Syllabus (2017): "This syllabus will not be available after December 2026."', url: 'https://www.nsw.gov.au/education-and-training/nesa/curriculum/mathematics/mathematics-advanced-stage-6-2017' },
      { claim: 'NESA, 2026 HSC key dates: written exams start 13 October 2026 and finish no later than 5 November 2026.', url: 'https://www.nsw.gov.au/education-and-training/nesa/key-dates/hsc' }
    ],
    rejectedClaims: [
      'The exact 2026 date of the Mathematics Advanced exam: the timetable PDF did not extract cleanly enough to tie each subject to its day, so only the start and finish of the exam period are given.',
      'Any band distribution, cohort size or median mark: not quoted, and no band is promised.',
      'Detailed dot points inside each focus area: the content pages were not read in full, so only focus area names are listed.',
      'Whether every school moved Year 11 to the new syllabus in 2026: NESA gives the implementation dates; individual school timing is left to the school.',
      'Any affiliation with NESA: none.',
      'Any offer to complete or check assessed work: refused on the page.'
    ]
  }
};
