'use strict';
// NAPLAN Year 9 numeracy practice (ag- exam door, Australia cluster Phase 3, row 43).
// Facts read raw on 7 October 2026 at nap.edu.au: test window page ("Year 9: 65 minutes"; numeracy after
// conventions of language), what's in the tests (Years 7 and 9 have a short non-calculator section, then an
// online calculator; "The best preparation for NAPLAN is to teach the curriculum."), key dates (2027 window
// 10 to 22 March), and the Year 9 numeracy proficiency level descriptions (quoted lines below).
// Lesson family: back-substitution to check solutions of linear equations (checked free site-wide on
// 7 October 2026). Parent page: /naplan-numeracy-practice-online. No score or level is promised.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'exam', tag: 'NAPLAN YEAR 9', label: 'NAPLAN Year 9 numeracy', blurb: 'The last NAPLAN numeracy test: 65 minutes, algebra-heavy at the higher levels, and a checking habit that catches wrong solutions before they cost a pathway.' },
  slug: 'naplan-year-9-numeracy-practice',
  code: 'nynn',
  accent: '#7C1814',
  accentRationale: 'Year 9 numeracy: a deep brick red (8.5:1 on #EDE7DA), at least 11 RGB from every accent on the site',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'NAPLAN Year 9 numeracy practice',
  title: 'NAPLAN Year 9 Numeracy Practice | Algebra, Levels, Checks',
  description: 'NAPLAN Year 9 numeracy practice: the 65-minute test, the algebra in the Strong and Exceeding descriptions, and equation questions with checks written out in full.',
  ogDescription: 'Year 9 NAPLAN numeracy from ACARA\'s own descriptions: what Strong and Exceeding demand in algebra, the calculator split, and practice that checks every solution by substituting it back.',
  twitterDescription: 'Year 9 NAPLAN numeracy: algebra, the levels and a checking habit.',
  pageName: 'NAPLAN Year 9 Numeracy Practice',
  webPageDescription: 'A Year 9 guide to NAPLAN numeracy for Australian families: the 65-minute test with its non-calculator opening, ACARA\'s Year 9 descriptions with their emphasis on algebra, and original linear-equation practice checked by back-substitution.',
  courseDescription: 'Live online maths classes for Australian students in Years 8 to 10 covering linear equations, index laws, rates and ratios, statistics and probability, taught for understanding and senior-school readiness rather than for a NAPLAN level.',
  crumbs: [{ name: 'NAPLAN numeracy practice', href: '/naplan-numeracy-practice-online' }],
  crumbLabel: 'Year 9 numeracy',
  navLinks: [
    { href: '#year9', label: 'Year 9 test' },
    { href: '#algebra', label: 'Algebra in the levels' },
    { href: '#check', label: 'Check by substituting' },
    { href: '#after', label: 'After Year 9' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; NAPLAN Year 9 numeracy &middot; Live online',
  h1: 'NAPLAN Year 9 numeracy practice',
  lede: 'Year 9 is the last time students sit NAPLAN, and the numeracy descriptions show why it matters beyond the test: at the Strong and Exceeding levels they read like a checklist for senior maths, with linear equations, index notation, rates, ratios and probability. The test runs 65 minutes and opens with a short section without a calculator. This page sets out what ACARA describes at the top two levels, then teaches the single habit that most protects a Year 9 algebra answer: substituting the solution back into the original equation. We teach numeracy only, and we promise no level.',
  secondaryCta: { href: '#check', label: 'Try the equation questions' },
  wa: 'Hello Modern Age Coders, I would like a free maths class for my Year 9 child, on algebra and equations.',
  heroNote: 'Year 9 facts from ACARA &middot; Questions written by us &middot; Numeracy only',
  spec: [
    ['Year level', 'Year 9'],
    ['Numeracy time', '65 minutes'],
    ['Structure', 'Short non-calculator section first'],
    ['2027 window', '10 to 22 March'],
    ['Higher levels', 'Algebra, indices, rates and ratios'],
    ['Our focus', 'Equations, checked every time'],
    ['Not covered', 'Literacy tests'],
    ['Promise', 'None about results']
  ],
  capsuleQ: 'In short',
  capsule: 'Year 9 NAPLAN numeracy is a 65-minute test with a short non-calculator section at the start and an online calculator for the rest. In 2027 it falls within the 10 to 22 March window. ACARA\'s Year 9 Strong description includes solving linear equations algebraically and evaluating an expression by substituting values for variables; Exceeding adds solving a linear equation algebraically and graphically.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses that match Year 9',
    lede: 'Each targets the algebra and reasoning the upper Year 9 levels describe.',
    items: [
      { course: 'algebra-foundations-masterclass', code: 'NY9 / 01', title: 'Algebra foundations', note: 'Equations, expressions and substitution, built carefully from the start.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'NY9 / 02', title: 'Years 7 to 9 maths', note: 'Indices, rates, ratios, geometry and data in one course.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'NY9 / 03', title: 'High school maths', note: 'For students looking ahead to Year 10 and senior subjects.' }
    ]
  },

  sections: [
    {
      id: 'year9', tint: 'tint', eyebrow: 'The Year 9 numeracy test',
      h2: 'The final NAPLAN numeracy test',
      lede: 'Details are ACARA\'s, from the NAPLAN website, as read on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'Year 9 numeracy summary', head: ['Point', 'ACARA\'s detail'], rows: [
          ['Running time', '65 minutes'],
          ['Sequence', 'Follows the conventions of language test'],
          ['Two sections', 'A short one without a calculator, then an online calculator for what remains'],
          ['Strands assessed', 'Number, algebra, measurement, space, statistics and probability'],
          ['Answer formats', 'Multiple choice, text entry, drag-and-drop, hot-spot'],
          ['2027 window', '10 to 22 March']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Like Year 7, the Year 9 test locks the non-calculator section once a student moves on. The arithmetic expected without a device is heavier in Year 9: index notation, prime factors and fraction work all appear in the descriptions at the middle levels.',
            'The test is tailored, so the first testlet is shared and the later ones depend on accuracy. In Year 9, a wrong algebraic answer early on is the most common way a strong student ends up on an easier path.'
          ],
          right: [
            'ACARA\'s own advice is that "The best preparation for NAPLAN is to teach the curriculum." For Year 9 that means the algebra and statistics of the Years 7 to 9 curriculum, understood rather than memorised.',
            'Because it is the last NAPLAN, Year 9 results are often read alongside subject choices for senior school. We think the skills matter more than the label: a student who can check an equation is ready for Year 10 whatever the level says.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.nap.edu.au/naplan/key-dates/naplan-test-window" rel="noopener" target="_blank">NAPLAN test window</a>; <a class="ag-inline-link" href="https://www.nap.edu.au/naplan/whats-in-the-tests" rel="noopener" target="_blank">What\'s in the tests</a>. Checked on 7 October 2026. Modern Age Coders has no link to ACARA.' }
      ]
    },
    {
      id: 'algebra', tint: 'deep', eyebrow: 'Year 9 proficiency levels',
      h2: 'How much algebra the top two levels expect',
      lede: 'Every line below is quoted from ACARA\'s Year 9 numeracy descriptions. We grouped them by idea.',
      body: [
        { kind: 'table', caption: 'Year 9 Strong and Exceeding, selected lines (ACARA wording)', head: ['Idea', 'Strong: the student can', 'Exceeding: the student can'], rows: [
          ['Equations', 'solve linear equations algebraically', 'solve a linear equation algebraically and graphically'],
          ['Substitution', 'evaluate an expression using substitution of values for variables', 'evaluate a pronumeral using substitution into a formula'],
          ['Expressions', 'factorise expressions using numerical factors', 'expand and simplify an algebraic expression'],
          ['Graphs', 'identify linear equations on the Cartesian plane', 'determine the rule for a linear relationship'],
          ['Rates and change', 'solve a range of problems involving rates and ratios', 'calculate a percentage increase or decrease'],
          ['Data', 'determine the outcomes of a two-step chance experiment', 'use two-way tables and Venn diagrams to solve problems']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Substitution appears in both columns, once as a skill in its own right and once inside formulas. It is also the most reliable way to check an equation, which is why the practice below builds the two together.',
            'At the Developing level, by contrast, ACARA lists ideas such as "identify equivalent expressions using the order of operations" and "express word problems using numeric and algebraic expressions". The climb from Developing to Strong is a climb into solving, not just writing, equations.'
          ],
          right: [
            'The Exceeding phrase "algebraically and graphically" matters. A student who can solve 4x minus 9 = 2x + 15 on paper and also see the answer as the point where two lines meet understands what a solution is.',
            'None of these lines is a promise or a target. They describe what students showed on the day of a test, and they are useful mainly for teachers planning what to teach next.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.nap.edu.au/naplan/results-and-reports/proficiency-level-descriptions" rel="noopener" target="_blank">NAPLAN proficiency level descriptions, Numeracy Year 9</a>. Checked on 7 October 2026.' }
      ]
    },
    {
      id: 'check', tint: '', eyebrow: 'Practice we wrote',
      h2: 'Back-substitution: check every solution',
      lede: 'Solve the equation, then put your answer back into the original equation, not into a later line of working. If both sides agree, the answer is right. If they do not, you know before the test does.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Use the original line', p: 'Errors usually happen between lines. Checking against a later line repeats the mistake; checking against the first line exposes it.' },
          { h3: 'Evaluate both sides', p: 'Work out the left side and the right side separately with your value, then compare. Two numbers either match or they do not.' },
          { h3: 'Mind the brackets', p: 'Substitute into brackets first. For 5(x minus 2) with x = 9, the bracket is 7 and the side is 35.' }
        ] },
        { kind: 'table', caption: 'Original Year 9 practice: solution, then the back-substitution check', head: ['Question', 'Solution', 'Back-substitution check', 'Verdict'], rows: [
          ['Solve 3x + 7 = 31', 'x = 8', 'Left: 3 times 8, plus 7, is 31. Right: 31', 'Correct'],
          ['Solve 5(x minus 2) = 35', 'x = 9', 'Left: 5 times 7 is 35. Right: 35', 'Correct'],
          ['Solve 4x minus 9 = 2x + 15', 'x = 12', 'Left: 48 minus 9 is 39. Right: 24 + 15 is 39', 'Correct'],
          ['Solve (x + 6) divided by 4 = 5', 'x = 14', 'Left: 20 divided by 4 is 5. Right: 5', 'Correct'],
          ['A student writes x = 11 for 2x + 5 = 17', 'x = 11 (claimed)', 'Left: 22 + 5 is 27. Right: 17', 'Wrong; the solution is x = 6'],
          ['The perimeter P = 2(l + w) is 46 and w = 8. Find l.', 'l = 15', '2 times (15 + 8) is 2 times 23, which is 46', 'Correct'],
          ['A line passes through (0, 3) and (2, 11). Find its rule.', 'y = 4x + 3', 'At x = 2: 8 + 3 is 11. At x = 0: 3', 'Correct'],
          ['A population grows from 80 to 92. Percentage increase?', '15 per cent', '80 times 1.15 is 92', 'Correct']
        ] },
        { kind: 'p', text: 'The fifth row is the reason the habit exists. The student who wrote x = 11 probably added 5 instead of subtracting it. Substituting 11 back gives 27, not 17, and the error is caught in a few seconds, before it decides which testlet comes next.' },
        { kind: 'p', text: 'The last two rows show that the same idea works beyond equations. A linear rule is checked by substituting the given points; a percentage change is checked by applying the multiplier to the starting value. In each case the student proves the answer rather than hoping.' }
      ]
    },
    {
      id: 'after', tint: 'tint', eyebrow: 'After Year 9',
      h2: 'From NAPLAN to senior maths',
      lede: 'The Year 9 descriptions overlap heavily with what Year 10 and senior maths courses assume.',
      body: [
        { kind: 'two',
          leftH3: 'Skills that carry forward',
          left: [
            'Linear equations become simultaneous equations and inequalities. Students who already check by substitution handle both more calmly.',
            'Index notation, prime factorisation and rates feed straight into the advanced maths subjects that most states offer in Years 11 and 12.',
            'Two-step probability and two-way tables are the foundation of senior statistics.'
          ],
          rightH3: 'What families can do now',
          right: [
            'Ask your child to explain how they know an answer is right. If the explanation includes a check, the habit is forming.',
            'If algebra feels shaky in Year 9, fix it before Year 10. The gaps widen quickly once senior subjects begin.',
            'Look at senior subject choices with your school; we teach the maths but do not advise on subject selection.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Algebra, step by step',
    h2: 'Four rungs through Years 8 to 10',
    lede: 'Students move at their own speed; the year levels are only rough markers.',
    table: { caption: 'Equation skills, rung by rung', head: ['Rung', 'Description', 'Ready for the next rung when'], rows: [
      ['1. Substitution', 'Evaluates expressions for given values', 'Finds 3x + 7 when x = 8 without hesitation'],
      ['2. One-sided equations', 'Solves equations with the unknown on one side', 'Solves 5(x minus 2) = 35 and checks it'],
      ['3. Unknowns on both sides', 'Collects terms to one side first', 'Solves 4x minus 9 = 2x + 15 and checks both sides'],
      ['4. Graphs and rules', 'Links equations to lines', 'Finds the rule through two points and tests a third']
    ] },
    left: { h3: 'When algebra causes stress', ps: [
      'Algebra anxiety often comes from never being sure an answer is right. Back-substitution removes that uncertainty, which changes how a test feels.',
      'Short daily practice of a few equations, each checked, beats a long session the night before.'
    ] },
    right: { h3: 'Other year levels', ps: [
      'Proportion and the double number line from Year 7 are covered on <a class="ag-inline-link" href="/naplan-year-7-numeracy-practice">NAPLAN Year 7 numeracy</a>.',
      'The national overview, with dates and testlets, is on <a class="ag-inline-link" href="/naplan-numeracy-practice-online">NAPLAN numeracy practice</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'Courses for Years 8 to 10',
    h2: 'Maths courses for the later middle years',
    lede: 'Grouped by focus. Open any card for its full syllabus.',
    bands: [
      { num: 'I', h3: 'Algebra', sub: 'Equations, expressions, graphs', courses: [
        { code: 'NY9 / A / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Solving and checking equations properly.' },
        { code: 'NY9 / A / 02', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle years maths', blurb: 'The full Years 7 to 9 course.' },
        { code: 'NY9 / A / 03', slug: 'complete-high-school-mathematics-mastery', title: 'High school maths', blurb: 'Year 10 and the road to senior subjects.' }
      ] },
      { num: 'II', h3: 'Data and chance', sub: 'Statistics and probability', courses: [
        { code: 'NY9 / D / 01', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Two-way tables, Venn diagrams and distributions.' },
        { code: 'NY9 / D / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Sharp arithmetic for the non-calculator section.' },
        { code: 'NY9 / D / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving', blurb: 'Multi-step reasoning, broken into checks.' }
      ] },
      { num: 'III', h3: 'Stretch', sub: 'For confident students', courses: [
        { code: 'NY9 / X / 01', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Harder problems for the keen.' },
        { code: 'NY9 / X / 02', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Fast calculation with a check built in.' },
        { code: 'NY9 / X / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Equations and graphs explored in Python.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How our classes run',
    h2: 'Evening classes that suit Year 9 schedules',
    lede: 'Our teachers live in India, which is behind every Australian state. In Melbourne during daylight saving, a 6 pm class begins at 12.30 pm India time, so evening slots after sport are straightforward.',
    slots: [
      { time: 'Weekday evening', l: 'The usual choice for Year 9 students.' },
      { time: 'Weekend', l: 'For students with busy weekday activities.' },
      { time: 'Holiday intensive', l: 'A few sessions to secure algebra before Year 10.' }
    ],
    cells: [
      { h3: 'Check before moving on', p: 'Every solution is substituted back before the next question.' },
      { h3: 'Algebra and graphs together', p: 'Students see each equation as a line as well as a calculation.' },
      { h3: 'Groups of fifteen to twenty', p: 'Matched by current skill, not just year level.' },
      { h3: 'Private tutoring', p: 'For targeted work on particular algebra gaps.' },
      { h3: 'Progress notes', p: 'Brief updates for parents after each unit.' },
      { h3: 'No level guaranteed', p: 'We teach the mathematics; the result belongs to the student.' }
    ]
  },

  projectsH2: 'Projects by our students',
  projectsLede: 'Built by learners for the fun of it. Browse the rest in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parent reviews from Google, unedited.',

  fees: {
    h2: 'Fees',
    lede: 'Families in Australia are billed each month in US dollars, our standard rate for every country except India. There is nothing to pay up front, and you can stop after any month.',
    free: ['A real lesson with a teacher', 'A frank view of current skills', 'No card details'],
    group: ['Fifteen to twenty students at one level', 'One regular teacher', 'Feedback on all work', 'Certificate on completion'],
    one: ['A teacher for one student', 'Focus on specific algebra gaps', 'Times to suit you']
  },

  faq: {
    eyebrow: 'Questions about Year 9 NAPLAN numeracy',
    h2: 'Year 9 questions we hear',
    items: [
      { q: 'How long is the Year 9 NAPLAN numeracy test?', a: '65 minutes, taken after the conventions of language test within the national window.' },
      { q: 'Is there a calculator in Year 9 NAPLAN?', a: 'Yes, after a short non-calculator section at the start. Once students leave that section, an online calculator is available for the rest of the test and they cannot go back.' },
      { q: 'When is Year 9 NAPLAN in 2027?', a: 'Within the 10 to 22 March 2027 window, on a date the school chooses.' },
      { q: 'What is back-substitution?', a: 'Checking a solution by putting it back into the original equation and evaluating both sides. If the two sides are equal, the solution is correct.' },
      { q: 'What does Strong mean in Year 9?', a: 'Among other skills, ACARA lists solving linear equations algebraically, evaluating an expression using substitution of values for variables, and solving a range of problems involving rates and ratios.' },
      { q: 'What does Exceeding add?', a: 'Lines such as solving a linear equation algebraically and graphically, determining the rule for a linear relationship, and calculating a percentage increase or decrease.' },
      { q: 'Is Year 9 the last NAPLAN?', a: 'Yes. NAPLAN is sat in Years 3, 5, 7 and 9, so Year 9 is the final test.' },
      { q: 'Do you prepare students for reading and writing?', a: 'No. We teach mathematics only.' },
      { q: 'Can you guarantee a NAPLAN level?', a: 'No. We never promise levels or scores; we teach the algebra and reasoning the test draws on.' },
      { q: 'What time would lessons be in Melbourne?', a: 'We agree a weekly time after the free class. During daylight saving Melbourne is five and a half hours ahead of India time, so 6 pm there is 12.30 pm in India.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for Year 9 and beyond',
    lede: 'Other NAPLAN years, coding and senior study support.',
    items: [
      { href: '/naplan-numeracy-practice-online', label: 'NAPLAN numeracy across the years', p: 'Dates, testlets and how results are reported.' },
      { href: '/naplan-year-7-numeracy-practice', label: 'NAPLAN Year 7 numeracy', p: 'Proportion and the first calculator split.' },
      { href: '/online-maths-tutoring-australia', label: 'Maths tutoring in Australia', p: 'Live lessons through to Year 12.' },
      { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar', p: 'Maths and coding contests by month.' },
      { href: '/hsc-software-engineering-help', label: 'HSC Software Engineering', p: 'For students drawn to computing.' },
      { href: '/maths-challenges', label: 'Maths challenges', p: 'Problems beyond the syllabus.' }
    ]
  },

  start: {
    h2: 'Book a free Year 9 maths class',
    lede: 'Tell us which topic feels unsteady, whether equations, indices or probability. The trial lesson starts there and ends with honest advice about next steps.',
    readFirst: 'Would you rather browse? All maths courses are on the <a class="ag-inline-link" href="/course-atlas">course atlas</a>, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> shows a lesson from start to finish.',
    note: 'Messages on WhatsApp are usually answered fastest. Our +91 number is Indian because the school runs from India; there is no Australian office.',
    formNote: 'No card required, no commitment. One reply to set the time.'
  },

  footer: {
    cols: [
      { h4: 'NAPLAN numeracy', links: [
        { href: '/naplan-numeracy-practice-online', label: 'All year levels' },
        { href: '/naplan-year-3-numeracy-practice', label: 'Year 3' },
        { href: '/naplan-year-5-numeracy-practice', label: 'Year 5' },
        { href: '/naplan-year-7-numeracy-practice', label: 'Year 7' }
      ] },
      { h4: 'Looking ahead', links: [
        { href: '/hsc-software-engineering-help', label: 'HSC Software Engineering' },
        { href: '/online-maths-tutoring-australia', label: 'Maths tutoring' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Year 9 algebra taught and checked; no level promised'
  },

  personalityCss: `
.ag-root.ag-nynn .ag-hero-grid { gap: clamp(1.2rem, 2.9vw, 2.5rem); }
.ag-root.ag-nynn .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-nynn .ag-capsule { border-left-width: 6px; }
.ag-root.ag-nynn .ag-section-head h2 { max-width: 25ch; }
.ag-root.ag-nynn .ag-table caption { text-align: left; }
.ag-root.ag-nynn .ag-table th { letter-spacing: 0.01em; }
.ag-root.ag-nynn .ag-spec dt { letter-spacing: 0.11em; }
.ag-root.ag-nynn .ag-slots { gap: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'ACARA, NAPLAN (nap.edu.au), read 7 October 2026. Test window: "Year 9: 65 minutes"; numeracy after conventions of language. What\'s in the tests: "Year 7 and 9 numeracy tests have 2 sections. There is a short non-calculator section, in which students are required to demonstrate arithmetical calculation skills. For the remainder of the test, an online calculator is available."; "The best preparation for NAPLAN is to teach the curriculum." Key dates: 2027 window 10 to 22 March. Proficiency level descriptions, Numeracy Year 9 (quoted): Developing "identify equivalent expressions using the order of operations", "express word problems using numeric and algebraic expressions"; Strong "solve linear equations algebraically", "evaluate an expression using substitution of values for variables", "factorise expressions using numerical factors", "identify linear equations on the Cartesian plane", "solve a range of problems involving rates and ratios", "determine the outcomes of a two-step chance experiment"; Exceeding "solve a linear equation algebraically and graphically", "evaluate a pronumeral using substitution into a formula", "expand and simplify an algebraic expression", "determine the rule for a linear relationship", "calculate a percentage increase or decrease", "use two-way tables and Venn diagrams to solve problems". Melbourne observes daylight saving (UTC+11); India time UTC+5:30.',
    localProject: 'Original Year 9 linear-equation practice checked by back-substitution: 3x + 7 = 31 gives x = 8; 5(x minus 2) = 35 gives 9; 4x minus 9 = 2x + 15 gives 12 (both sides 39); (x + 6) divided by 4 = 5 gives 14; a claimed x = 11 for 2x + 5 = 17 fails (27, not 17), correct x = 6; perimeter 46 with w = 8 gives l = 15; the line through (0, 3) and (2, 11) is y = 4x + 3; 80 to 92 is a 15 per cent increase.',
    requiredMentions: ['back-substitution', 'solve linear equations algebraically', 'evaluate an expression using substitution of values for variables', 'solve a linear equation algebraically and graphically', 'evaluate a pronumeral using substitution into a formula', 'determine the rule for a linear relationship', '4x minus 9 = 2x + 15', 'y = 4x + 3', 'Year 9 is the final test'],
    sources: [
      { claim: 'NAPLAN test window: Year 9 numeracy 65 minutes, after conventions of language.', url: 'https://www.nap.edu.au/naplan/key-dates/naplan-test-window' },
      { claim: 'NAPLAN, What\'s in the tests: Year 7 and 9 sections and calculator; preparation advice.', url: 'https://www.nap.edu.au/naplan/whats-in-the-tests' },
      { claim: 'NAPLAN proficiency level descriptions, Numeracy Year 9.', url: 'https://www.nap.edu.au/naplan/results-and-reports/proficiency-level-descriptions' },
      { claim: 'NAPLAN key dates: 2027 window 10 to 22 March.', url: 'https://www.nap.edu.au/naplan/key-dates' }
    ],
    rejectedClaims: [
      'That Year 9 results decide senior subject placement: not stated by ACARA, so not claimed; families are referred to their school.',
      'Length of the Year 9 non-calculator section: ACARA says only that it is short.',
      'National percentages at each Year 9 level: not quoted.',
      'Any promise of a level or score: refused.',
      'Subject-selection advice for Years 11 and 12: not given.'
    ]
  }
};
