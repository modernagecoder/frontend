'use strict';
// HSC Mathematics Standard tutoring (ag- exam door, Australia cluster Phase 3, row 52).
// Facts read raw on 7 October 2026 at the NSW Curriculum site (curriculum.nsw.edu.au, Mathematics
// Standard 11-12 Syllabus (2024): overview, course structure and enrolment, HSC examinations,
// school-based assessment) and NESA's 2026 HSC key dates. Implemented from 2026; Year 12 teaching
// from Term 4 2026; first HSC exam 2027. Five areas of study: Algebra, Financial mathematics,
// Measurement, Networks, Statistics. Year 11 Standard (11236) first, then Year 12 Standard 1 (15231)
// or Standard 2 (15236), each 120 hours and 2 units; Standard 1 (Examination) 15232 for students who
// sit the optional exam. Standard 1 exam: optional, 80 marks, 2 hours plus 10 minutes reading time,
// Section I 15 marks, Section II 65 marks in 25 to 30 items. Standard 2 exam: 100 marks, 2 hours and
// 30 minutes plus 10 minutes reading time, Section I 15 marks, Section II 85 marks in 35 to 40 items.
// Key dates: work samples and assessment grades for Mathematics Standard 1 due 15 September 2026.
// Spine: annuity future value built row by row as a recurrence, then checked against the formula
// (100 a year at 5% for 5 years grows to 552.563125). Family checked free on 7 October 2026.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'exam', tag: 'HSC MATHS STANDARD', label: 'HSC Maths Standard tutoring', blurb: 'The applied NSW mathematics course: Standard 1 or Standard 2, the two very different HSC papers, and annuities built one year at a time.' },
  slug: 'hsc-maths-standard-tutoring',
  code: 'hstd',
  accent: '#155136',
  accentRationale: 'HSC Maths Standard: a muted bottle green, contrast above 4.9:1 on #EDE7DA, at least 11 RGB from every accent on the site',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'HSC Maths Standard tutoring',
  title: 'HSC Maths Standard Tutoring | Standard 1 and 2, NSW Online',
  description: 'HSC Maths Standard tutoring online for NSW: Standard 1 or Standard 2 under the 2024 syllabus, the two HSC papers, networks, finance and statistics made clear.',
  ogDescription: 'Mathematics Standard in NSW from the 2024 syllabus: the shared Year 11 course, the split into Standard 1 and Standard 2, how each HSC paper is built, the optional Standard 1 exam, and annuities worked as a table before a formula.',
  twitterDescription: 'HSC Maths Standard 1 and 2 from the 2024 syllabus: focus areas, two different papers, and finance that adds up.',
  pageName: 'HSC Maths Standard Tutoring',
  webPageDescription: 'Help for NSW students in Mathematics Standard: the 2024 syllabus dates, the Year 11 course and the two Year 12 courses, enrolment details, the Standard 1 and Standard 2 HSC examination specifications, school assessment rules, and an original annuity lesson.',
  courseDescription: 'Live online teaching for NSW Mathematics Standard students in Year 11 and Year 12: algebra, financial mathematics, measurement, networks and statistics, for Standard 1 and Standard 2.',
  crumbs: [{ name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'HSC Maths Standard',
  navLinks: [
    { href: '#structure', label: 'One course, two endings' },
    { href: '#exams', label: 'The two papers' },
    { href: '#annuity', label: 'Annuities' },
    { href: '#marks', label: 'School marks' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'New South Wales &middot; Mathematics Standard 1 and 2 &middot; Live online',
  h1: 'HSC Maths Standard tutoring',
  lede: 'Mathematics Standard is the mathematics of real decisions: loans, timetables, maps, networks and data. It is also widely misunderstood. Families sometimes treat it as the easy option, and students sometimes coast through Year 11 and then meet Standard 2 topics like annuities and the normal distribution with no foundation. We teach it as the useful, demanding course it is.',
  secondaryCta: { href: '#annuity', label: 'Work through the annuity table' },
  wa: 'Hello Modern Age Coders, I would like a free class about HSC Mathematics Standard in NSW.',
  heroNote: 'From the 2024 NSW syllabus &middot; Applied maths explained step by step &middot; After-school lessons in NSW time',
  spec: [
    ['Syllabus', 'Mathematics Standard 11-12 (2024)'],
    ['Year 11', 'One shared Standard course'],
    ['Year 12', 'Standard 1 or Standard 2'],
    ['Standard 2 paper', '100 marks, 2 hours 30 plus reading'],
    ['Standard 1 paper', 'Optional, 80 marks'],
    ['First HSC on new syllabus', '2027'],
    ['We teach', 'Method, reasoning, real contexts'],
    ['We never', 'Promise a band']
  ],
  capsuleQ: 'In short',
  capsule: 'HSC Mathematics Standard is the NSW applied mathematics course set by the Mathematics Standard 11-12 Syllabus (2024). Every student completes the Year 11 Standard course, then takes Standard 1 or Standard 2 in Year 12. It covers algebra, financial mathematics, measurement, networks and statistics. Standard 2 ends in a 100-mark HSC paper; the Standard 1 exam is optional and worth 80 marks.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses that cover Standard',
    lede: 'Number and algebra confidence, the money mathematics, then the data side.',
    items: [
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'HSTD / 01', title: 'Number and algebra, rebuilt', note: 'Percentages, rates, formulas and linear graphs, repaired before Year 11 Standard leans on them.' },
      { course: 'complete-business-finance-mathematics-mastery', code: 'HSTD / 02', title: 'Financial mathematics', note: 'Interest, depreciation, loans and annuities, the financial thread that runs right through Standard.' },
      { course: 'statistics-probability-maths-course', code: 'HSTD / 03', title: 'Statistics and probability', note: 'Bivariate data, relative frequency and the normal distribution, explained with real data sets.' }
    ]
  },

  sections: [
    {
      id: 'structure', tint: 'tint', eyebrow: 'One course, two endings',
      h2: 'A shared Year 11, then Standard 1 or Standard 2',
      lede: 'NESA\'s 2024 course structure says all Year 11 Standard focus areas are completed first, then the focus areas of either Standard 1 or Standard 2. The lists below are NESA\'s, checked on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'Mathematics Standard 11-12 Syllabus (2024): focus areas', head: ['Area of study', 'Year 11 (all students)', 'Year 12 Standard 1', 'Year 12 Standard 2'], rows: [
          ['Algebra', 'Formulas and equations; Linear relationships', 'Algebraic relationships', 'Algebraic relationships'],
          ['Financial mathematics', 'Earning money; Managing money', 'Investment; Depreciation and loans', 'Investment and loans; Annuities'],
          ['Measurement', 'Applications of measurement; Time and location', 'Right-angled triangles; Ratios and rates', 'Trigonometry; Ratios and rates'],
          ['Networks', 'Networks, paths and trees', 'Not in Standard 1', 'Network flow; Critical path analysis'],
          ['Statistics', 'Data analysis', 'Bivariate data analysis; Relative frequency and probability', 'Bivariate data analysis; Relative frequency and probability; The normal distribution']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The columns show where the two Year 12 courses part ways. Standard 2 carries networks into network flow and critical path analysis, adds annuities to the financial work, and finishes statistics with the normal distribution. Standard 1 keeps a narrower focus, with right-angled triangles in place of full trigonometry.',
            'NESA records the Year 11 course as 11236, and the Year 12 courses as 15231 for Standard 1 and 15236 for Standard 2, each 120 hours and 2 units. The two Year 12 courses exclude each other, so a student is in one or the other.'
          ],
          right: [
            'The changeover matches the other NSW mathematics courses. Implementation began in 2026; Year 12 classes move to the new content from Term 4 that year, and 2027 brings the first HSC paper written for it.',
            'Choosing between Standard 1 and Standard 2 is a school and family decision, usually made at the end of Year 11. What we can do is make sure Year 11 is secure, so that whichever course a student takes, they arrive in Year 12 able to handle it.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/overview" rel="noopener" target="_blank">NSW Curriculum, Mathematics Standard 11-12 Syllabus (2024), overview</a>; <a class="ag-inline-link" href="https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/overview/course" rel="noopener" target="_blank">course structure and enrolment</a>. Checked on 7 October 2026.' }
      ]
    },
    {
      id: 'exams', tint: 'deep', eyebrow: 'The HSC papers',
      h2: 'Two different papers, one of them optional',
      lede: 'NESA\'s examination pages for the 2024 syllabus set out both papers. The comparison below follows them, checked on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'Standard 1 and Standard 2 HSC papers side by side', head: ['Feature', 'Standard 1', 'Standard 2'], rows: [
          ['Is the exam required?', 'No: an optional HSC examination', 'Yes'],
          ['Marks', '80', '100'],
          ['Time', '2 hours plus 10 minutes reading', '2 hours and 30 minutes plus 10 minutes reading'],
          ['Section I (objective-response)', '15 marks', '15 marks'],
          ['Section II', '65 marks, 25 to 30 items', '85 marks, 35 to 40 items'],
          ['Items worth 4 or 5 marks', 'At least two', 'At least two'],
          ['On the desk', 'Reference sheet, approved calculator', 'Reference sheet, approved calculator']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The Standard 1 exam is the unusual one. NESA says it "is not compulsory" and that students may choose to sit it. Those who want an ATAR and sit the paper may have the mark used by UAC towards it. NESA also lists a separate enrolment, Mathematics Standard 1 (Examination), course 15232, for students who intend to sit.',
            'NESA\'s 2026 key dates list work samples and assessment grades for Mathematics Standard 1 as due on 15 September 2026, which reflects how much of that course is judged through school work rather than the exam.'
          ],
          right: [
            'Standard 2 is a full HSC paper. Eighty-five marks over 35 to 40 items means short, practical questions, many built on a table, a network diagram or a graph. Reading a stimulus carefully earns as many marks as the arithmetic that follows it.',
            'At two and a half hours for 100 marks, a student has about one and a half minutes per mark. We teach students to read every stimulus once, fully, before writing, because most lost marks in applied papers come from misreading the situation rather than miscalculating.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/assessment/hsc-examinations" rel="noopener" target="_blank">NSW Curriculum, Mathematics Standard HSC examinations</a>; <a class="ag-inline-link" href="https://www.nsw.gov.au/education-and-training/nesa/key-dates/hsc" rel="noopener" target="_blank">NESA, 2026 HSC key dates</a>. Checked on 7 October 2026.' }
      ]
    },
    {
      id: 'annuity', tint: 'tint', eyebrow: 'Annuities, one year at a time',
      h2: 'Build the table before trusting the formula',
      lede: 'Annuities sit in Standard 2 financial mathematics, and they are where many students switch off. A formula with powers and fractions looks like magic until the same answer is built one year at a time.',
      body: [
        { kind: 'p', text: 'A worked lesson, written by us. A student puts 100 dollars into an account at the end of every year for five years. The account earns 5% interest per year, compounded yearly. How much is in the account straight after the fifth deposit?' },
        { kind: 'table', caption: 'The annuity built as a recurrence: last balance times 1.05, plus the new 100', head: ['End of year', 'Balance before deposit', 'Plus deposit', 'Balance after deposit'], rows: [
          ['1', '0', '100', '100'],
          ['2', '105', '100', '205'],
          ['3', '215.25', '100', '315.25'],
          ['4', '331.0125', '100', '431.0125'],
          ['5', '452.563125', '100', '552.563125']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Each row follows one rule: grow last year\'s balance by 5%, then add the new deposit. After five years the account holds 552.563125 dollars, or 552.56 to the nearest cent. Of that, 500 dollars came from deposits and the rest, about 52.56, is interest earned on interest as well as on the deposits.',
            'The future value formula for an annuity gives the same number in one line: 100 times (1.05 to the power 5, minus 1), divided by 0.05. Because 1.05 to the power 5 is 1.2762815625, the formula gives 100 times 5.52563125, which is 552.563125.'
          ],
          right: [
            'Seeing the table first changes how students treat the formula. They can now explain every symbol in it, check a calculator slip against a rough row-by-row estimate, and handle variations, such as a deposit at the start of each year, by adjusting the table instead of hunting for a different formula.',
            'The row-by-row rule is also a tiny program: a loop that multiplies and adds. Students who code can write it in three lines of Python, and those who use spreadsheets can fill it down a column. Both are honest ways to check a formula answer before writing it in an exam.'
          ] }
      ]
    },
    {
      id: 'marks', tint: '', eyebrow: 'School-based assessment',
      h2: 'How schools assess Standard',
      lede: 'NESA\'s rules for the school assessment program, checked on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'School assessment in Mathematics Standard', head: ['Rule', 'NESA requirement'], rows: [
          ['Year 11 result', 'A grade sent to NESA when the Year 11 course ends'],
          ['Components', 'Knowledge and understanding of course content 50%; Skills in Working mathematically 50%'],
          ['Take-home limit', 'One take-home task, worth no more than 15%'],
          ['Task size', 'Individual tasks weighted between 10% and 40%']
        ] },
        { kind: 'p', text: 'The take-home limit means most marks are earned in class or under exam conditions, so the student needs the method in their own head. In Standard that usually means reading a context carefully, choosing the right tool, and writing the answer with units and a sentence of interpretation.' },
        { kind: 'p', text: 'We teach every topic with original problems drawn from everyday situations. We never prepare, write or check a school task, because the mark has to reflect what the student can do alone.' },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/assessment/school-based-assessment" rel="noopener" target="_blank">NSW Curriculum, Mathematics Standard school-based assessment</a>. Checked on 7 October 2026.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The steps',
    h2: 'Four milestones through Standard',
    lede: 'Each milestone is a skill a student can demonstrate, not a date on the calendar.',
    table: { caption: 'From Year 10 number skills to the Standard 2 paper', head: ['Milestone', 'Skill', 'How we know it is there'], rows: [
      ['1', 'Percentages and rates', 'Calculates a percentage change and explains it in words'],
      ['2', 'Linear models', 'Builds a straight-line model from a real situation'],
      ['3', 'Money over time', 'Writes the recurrence for a loan or an annuity'],
      ['4', 'Data and networks', 'Reads a scatterplot or a network diagram and draws a conclusion']
    ] },
    left: { h3: 'If Year 11 Standard is a struggle', ps: [
      'The usual cause is weak number skills from Years 8 and 9, especially percentages and rearranging formulas. A short repair course often lifts the whole year.',
      'Measurement topics improve fastest when students sketch every situation before calculating anything.'
    ] },
    right: { h3: 'Standard alongside coding', ps: [
      'Networks, data and recurrences are everyday tools in programming. Students curious about that link can read our page on <a class="ag-inline-link" href="/hsc-enterprise-computing-help">HSC Enterprise Computing</a>, which leans on data.',
      'For students reconsidering the calculus route, our <a class="ag-inline-link" href="/hsc-maths-advanced-tutoring">Mathematics Advanced page</a> explains that course plainly.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for Standard students',
    lede: 'Sorted by the area of study they help most. Each card opens a full outline.',
    bands: [
      { num: 'I', h3: 'Number and algebra', sub: 'The base every topic stands on', courses: [
        { code: 'HSTD / N / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school mathematics', blurb: 'Percentages, ratios and equations rebuilt with care.' },
        { code: 'HSTD / N / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Formulas, substitution and linear graphs until they are routine.' },
        { code: 'HSTD / N / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Recurrences and data explored with short Python programs.' }
      ] },
      { num: 'II', h3: 'Money and data', sub: 'The applied core', courses: [
        { code: 'HSTD / A / 01', slug: 'complete-business-finance-mathematics-mastery', title: 'Business and finance maths', blurb: 'Interest, depreciation, loans and annuities in detail.' },
        { code: 'HSTD / A / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Scatterplots, correlation, probability and the normal curve.' },
        { code: 'HSTD / A / 03', slug: 'data-and-ai-analytics-for-non-programmers-course', title: 'Data analytics with spreadsheets', blurb: 'Working with real data sets, no programming required.' }
      ] },
      { num: 'III', h3: 'Next steps', sub: 'Beyond the course', courses: [
        { code: 'HSTD / X / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High school mathematics', blurb: 'For a student weighing a move towards Advanced.' },
        { code: 'HSTD / X / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Python for exploring and charting data.' },
        { code: 'HSTD / X / 03', slug: 'mysql-mastery-for-teens', title: 'Databases for teens', blurb: 'Storing and querying data with SQL.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'Lessons that fit around a NSW week',
    lede: 'Our tutors teach from India, so Sydney is four and a half hours ahead of them in winter and five and a half hours ahead under daylight saving. A 4 pm lesson in Sydney in summer begins at 10.30 am India time, which makes after-school slots easy for us to cover.',
    slots: [
      { time: 'After school', l: 'Weekly sessions through Year 11 and Year 12.' },
      { time: 'Weekend mornings', l: 'Longer practice on one topic or a full paper.' },
      { time: 'School holidays', l: 'Short catch-up runs before trials.' }
    ],
    cells: [
      { h3: 'Context first', p: 'Every topic starts from a real situation, so the mathematics has a reason.' },
      { h3: 'Tables before formulas', p: 'Students build the pattern by hand, then meet the formula that shortens it.' },
      { h3: 'Stimulus reading', p: 'Practice in pulling exactly the right numbers from a diagram or table.' },
      { h3: 'Groups of fifteen to twenty', p: 'Standard students working at the same level, each explaining their steps.' },
      { h3: 'One-to-one lessons', p: 'A private tutor for a topic that keeps slipping.' },
      { h3: 'No promised bands', p: 'We teach well and say so honestly; marks are earned by the student.' }
    ]
  },

  projectsH2: 'Projects our students have published',
  projectsLede: 'Personal projects rather than school tasks. More in our <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Reproduced exactly as students and parents posted them on Google.',

  fees: {
    h2: 'Fees',
    lede: 'A monthly fee in US dollars that is the same for every family outside India. No sign-up charge, and nothing owed after the month you are in.',
    free: ['A real lesson with a tutor', 'Honest advice on gaps', 'No card required'],
    group: ['Fifteen to twenty students at one level', 'One tutor through the term', 'Practice papers reviewed', 'A certificate when you finish'],
    one: ['Your own tutor', 'Built around your weak topics', 'Useful before school exams']
  },

  faq: {
    eyebrow: 'Questions about Standard',
    h2: 'What Standard students and parents ask',
    items: [
      { q: 'What is HSC Mathematics Standard?', a: 'The NSW applied mathematics course set by the Mathematics Standard 11-12 Syllabus (2024). Students take one Year 11 Standard course, then either Standard 1 or Standard 2 in Year 12, studying algebra, financial mathematics, measurement, networks and statistics.' },
      { q: 'What is the difference between Standard 1 and Standard 2?', a: 'Standard 2 covers more: network flow, critical path analysis, annuities, trigonometry and the normal distribution are in Standard 2 but not Standard 1. Standard 2 has a compulsory 100-mark HSC paper; the Standard 1 paper is optional and worth 80 marks.' },
      { q: 'Is the Standard 1 exam compulsory?', a: 'No. NESA states the Standard 1 HSC examination is not compulsory. Students who want an ATAR may sit it, and UAC may use the exam mark in calculating the ATAR.' },
      { q: 'How long is the Standard 2 exam?', a: '2 hours and 30 minutes plus 10 minutes reading time, for a paper worth 100 marks with a reference sheet and approved calculators.' },
      { q: 'What is an annuity?', a: 'A series of equal payments made at regular intervals, such as a fixed deposit every year. Its future value adds up each payment together with the interest it earns, which can be built row by row or found with a formula.' },
      { q: 'When does the 2024 syllabus start?', a: 'NESA says it is implemented from 2026, with Year 12 teaching from Term 4 of 2026 and the first HSC examination in 2027.' },
      { q: 'Can a Standard student move to Advanced?', a: 'Course changes are decided by the school under NESA rules. We can help a student strengthen the algebra and functions that Advanced needs if a change is being considered.' },
      { q: 'How is school assessment weighted?', a: 'Half the school mark comes from what students know about the course and half from how they work mathematically, and a school program may include just one take-home task, capped at 15%.' },
      { q: 'Will you promise a particular band?', a: 'No. We teach the course thoroughly; the result depends on the student\'s work.' },
      { q: 'Do you help with school tasks?', a: 'We teach the mathematics with our own problems, and we never write, prepare or check work a school will assess.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'Further reading for NSW students',
    lede: 'Other NSW mathematics and computing pages, plus national help.',
    items: [
      { href: '/hsc-maths-advanced-tutoring', label: 'HSC Maths Advanced', p: 'The calculus course, for comparison.' },
      { href: '/preliminary-hsc-maths-year-11-help', label: 'Year 11 mathematics in NSW', p: 'Getting the first year of Stage 6 right.' },
      { href: '/hsc-enterprise-computing-help', label: 'HSC Enterprise Computing', p: 'The data and systems computing course.' },
      { href: '/naplan-numeracy-practice-online', label: 'NAPLAN numeracy', p: 'Number skills from the earlier years.' },
      { href: '/online-maths-tutoring-australia', label: 'Maths tutoring across Australia', p: 'Support for any state and year level.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'The method, explained.' }
    ]
  },

  start: {
    h2: 'Start with a free Standard lesson',
    lede: 'Let us know whether the student is in Year 11, Standard 1 or Standard 2, and which topic is causing trouble. The free lesson tackles it with fresh problems of our own.',
    readFirst: 'Looking before booking? Outlines for every course are on the <a class="ag-inline-link" href="/course-atlas">course atlas</a>, the way we teach is on <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and families comparing costs can read <a class="ag-inline-link" href="/coding-classes-cost-australia">what classes cost in Australia</a>.',
    note: 'The fastest reply comes on WhatsApp. Our number begins +91 because we run from India; there is no office anywhere in NSW.',
    formNote: 'No card, no ongoing commitment. We answer once to fix a time.'
  },

  footer: {
    cols: [
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/online-maths-tutoring-australia', label: 'Maths tutoring' },
        { href: '/coding-classes-cost-australia', label: 'Class costs' },
        { href: '/naplan-numeracy-practice-online', label: 'NAPLAN numeracy' }
      ] },
      { h4: 'NSW Stage 6', links: [
        { href: '/hsc-maths-advanced-tutoring', label: 'Maths Advanced' },
        { href: '/preliminary-hsc-maths-year-11-help', label: 'Year 11 mathematics' },
        { href: '/hsc-enterprise-computing-help', label: 'Enterprise Computing' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Applied mathematics, taken seriously'
  },

  personalityCss: `
.ag-root.ag-hstd .ag-hero-grid { gap: clamp(1rem, 2.6vw, 2.3rem); }
.ag-root.ag-hstd .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-hstd .ag-capsule { border-left-width: 6px; }
.ag-root.ag-hstd .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-hstd .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-hstd .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-hstd .ag-spec dt { letter-spacing: 0.11em; }
.ag-root.ag-hstd .ag-slots { gap: 1.05rem; }
`,

  dossier: {
    curriculumAuthority: 'NSW Education Standards Authority (NESA). Mathematics Standard 11-12 Syllabus (2024), read at curriculum.nsw.edu.au on 7 October 2026: implemented from 2026, Year 12 teaching Term 4 2026, first HSC exam 2027; five areas of study; Year 11 Standard 11236, Year 12 Standard 1 15231 and Standard 2 15236, each 120 hours and 2 units; Standard 1 (Examination) 15232; Standard 1 exam optional, 80 marks, 2 hours plus 10 minutes reading time, 25 to 30 items in Section II; Standard 2 exam 100 marks, 2 hours and 30 minutes plus 10 minutes reading time, 35 to 40 items in Section II. NESA 2026 key dates for Standard 1 work samples and grades.',
    localProject: 'Annuity future value as a recurrence: 100 deposited at the end of each year for 5 years at 5% compounded yearly, balances 100, 205, 315.25, 431.0125, 552.563125, checked against the formula 100 times (1.05 to the 5 minus 1) over 0.05 with 1.05 to the 5 = 1.2762815625. Written by us.',
    requiredMentions: ['Mathematics Standard 11-12 Syllabus (2024)', 'Critical path analysis', 'Network flow', '35 to 40 items', '25 to 30 items', '15232', '552.563125', '1.2762815625', 'Depreciation and loans'],
    sources: [
      { claim: 'NSW Curriculum, Mathematics Standard 11-12 Syllabus (2024): implementation dates, five areas of study, Year 11 then Standard 1 or Standard 2.', url: 'https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/overview' },
      { claim: 'NSW Curriculum, Mathematics Standard course structure and enrolment: focus areas, course numbers 11236, 15231, 15232, 15236, hours, units and exclusions.', url: 'https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/overview/course' },
      { claim: 'NSW Curriculum, Mathematics Standard HSC examinations: Standard 1 optional exam and both specifications.', url: 'https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/assessment/hsc-examinations' },
      { claim: 'NSW Curriculum, Mathematics Standard school-based assessment.', url: 'https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/assessment/school-based-assessment' },
      { claim: 'NESA, 2026 HSC key dates: Mathematics Standard 1 work samples and assessment grades due 15 September 2026.', url: 'https://www.nsw.gov.au/education-and-training/nesa/key-dates/hsc' }
    ],
    rejectedClaims: [
      'The exact 2026 dates of the Standard 1 and Standard 2 exams: not tied to a day from the timetable PDF.',
      'Any statement about which course leads to which ATAR: not given.',
      'Rules for changing between Standard and Advanced: left to schools and NESA; not described.',
      'Any band distribution or cohort statistic: not quoted.',
      'Any promise of results: none.'
    ]
  }
};
