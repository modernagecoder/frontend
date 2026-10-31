'use strict';
// 16 plus sixth form entrance maths (ag- maths door, UK cluster Phase 2, row UK055).
// Read raw with curl on 31 October 2026 (copies under
// keyword-research-2026-09/uk-us-gap/src/16-plus-sixth-form-entrance-maths/):
//  - Department for Education, School Admissions Code 2021 (School_admissions_code_2021.pdf): footnote 20 "There is a
//    general restriction on selection by ability. Only the following schools are permitted to use selection by
//    ability: designated grammar schools; schools with partially selective arrangements which already had such
//    arrangements in place during the 1997/98 school year; and school sixth forms."; para 2.6 "Admission authorities
//    can, however, set academic entry criteria for their sixth forms, which must be the same for both external and
//    internal places."; "School sixth form admission arrangements for external applicants must be consulted upon,
//    determined, and published in accordance with the same timetable as for admission arrangements for other entry
//    points."; "highest priority in oversubscription criteria for sixth form places must be given to looked after
//    children and previously looked after children who meet the academic entry criteria"; para 1.9 m) "In the case of
//    sixth form applications, a meeting may be held to discuss options and academic entry requirements for particular
//    courses, but this meeting cannot form part of the decision making process on whether to offer a place."
//  - DfE GCSE factsheet for parents (May 2019): "9 to 1 grading scale"; "Grade 9 is the highest grade"; "The bottom of
//    grade 7 is aligned with the bottom of grade A"; "The bottom of grade 4 is aligned with the bottom of grade C";
//    "The Department for Education recognises grade 4 and above as a 'standard pass'"; grade 4 "is the minimum level
//    that students need to reach in English and/or maths, otherwise they need to continue to study these subjects as
//    part of their post-16 education"; "Employers, universities and colleges will continue to set the GCSE grades they
//    require for entry to employment or further study."
//  - GOV.UK, types of school: grammar schools "select their pupils based on academic ability and there is a test to get
//    in"; GOV.UK, the national curriculum: "private schools, do not have to follow the national curriculum".
//  - Quest Admissions: entrance tests "For ages 7+ to 16+", "Bespoke and branded to your school".
//  - Cambridge Insight, entrance assessments: Cambridge Select Insight is for entry into Years 7, 8, 9 and 10 (so not
//    Year 12; our reading).
// Our own reasoning, labelled as ours: an entrance paper sat in Year 11 comes before GCSE results, so it can only test
// what has been taught by then.
// Worked examples and the practice set are written by us at GCSE Higher level; no school paper is reproduced.
// Spine: two doors into Year 12. State school sixth forms may set academic entry criteria (usually GCSE grades) under the
// Admissions Code; independent schools set their own 16+ papers, sat in Year 11 before results exist. Both reward the
// same thing: GCSE Higher algebra that is fluent before the summer.
// Lesson family: algebraic fluency at Higher tier (factorising, rearranging, indices, proof).

const TIMING = 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.';

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: '16+ ENTRANCE', label: '16 plus sixth form entrance maths', blurb: 'Two routes into Year 12: GCSE-grade entry criteria under the Admissions Code, and independent schools\' own 16+ papers sat before results.' },
  slug: '16-plus-sixth-form-entrance-maths',
  code: 'psf',
  accent: '#4F375D',
  accentRationale: '16 plus entrance maths: a dark plum (#4F375D), 9.73:1 on #FBF8F2 and 8.37:1 on the deepest paper tint, the darkest of the entrance doors to mark the oldest entry point',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: '16 plus sixth form entrance maths',
  title: '16 Plus Entrance Exam Maths | Sixth Form Entry Explained',
  description: '16 plus entrance exam maths for sixth form entry: how state sixth forms set GCSE criteria, how independent 16+ papers work, the maths tested, and practice.',
  ogDescription: 'Getting into Year 12 at a selective or independent sixth form: what the Admissions Code allows, what GCSE grades mean, and the maths a 16+ paper rests on.',
  twitterDescription: '16+ sixth form entrance maths: GCSE-grade entry criteria, independent schools\' own papers in Year 11, and Higher-tier algebra worked through step by step.',
  pageName: '16 Plus Sixth Form Entrance Maths',
  webPageDescription: 'Live online maths teaching for Year 10 and Year 11 students applying to selective or independent sixth forms, built from the School Admissions Code and DfE GCSE guidance.',
  courseDescription: 'Live online maths lessons for students in Years 10 and 11 facing a 16 plus entrance paper or GCSE-grade entry criteria, teaching GCSE Higher algebra, proof and problem solving.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: '16 plus entrance maths',
  navLinks: [
    { href: '#routes', label: 'Two routes' },
    { href: '#state', label: 'State sixth forms' },
    { href: '#independent', label: '16+ papers' },
    { href: '#worked', label: 'Worked examples' },
    { href: '#plan', label: 'A plan' }
  ],
  eyebrow: 'England &middot; 16 plus and sixth form entry &middot; Years 10 and 11',
  h1: '16 plus entrance exam maths for sixth form entry',
  lede: 'Students move into a new sixth form at 16 in two main ways. State school sixth forms, including grammar school sixth forms, may set academic entry criteria, usually GCSE grades, under the School Admissions Code. Independent schools usually set their own 16 plus entrance papers, often sat in Year 11 before any GCSE result exists. Modern Age Coders teaches the GCSE Higher maths both routes depend on, live online, in a class or one to one, through our GCSE maths course.',
  secondaryCta: { href: '#routes', label: 'Compare the routes' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for a 16 plus or sixth form entrance.',
  heroNote: 'From the School Admissions Code 2021 and DfE GCSE guidance, read 31 October 2026 &middot; Not connected with any school',
  spec: [
    ['Entry into', 'Year 12, at age 16'],
    ['State sixth forms', 'Academic entry criteria allowed'],
    ['Usual state criterion', 'GCSE grades, set by each school'],
    ['Independent schools', 'Their own 16+ papers and interviews'],
    ['When papers are sat', 'Often in Year 11, before results'],
    ['Maths level', 'GCSE Higher, as taught by then'],
    ['We teach', 'Higher algebra, proof, problem solving'],
    ['We never', 'Reproduce school papers or promise a place']
  ],
  capsuleQ: 'What is a 16 plus entrance exam?',
  capsule: 'It is a test some sixth forms use to admit students into Year 12 at age 16. Independent schools set their own 16 plus papers, often in maths among other subjects, and since private schools do not have to follow the national curriculum, each school decides its own content and timing. State school sixth forms work under the School Admissions Code 2021, which lets them select by ability and set academic entry criteria, provided those criteria are the same for their own students and for applicants from outside. In practice that usually means GCSE grades: the DfE calls grade 4 a standard pass and aligns the bottom of grade 7 with the old grade A. Modern Age Coders teaches GCSE Higher maths live online for both routes.',

  picks: {
    eyebrow: 'Where to begin',
    h2: 'Three courses for 16 plus and sixth form entry',
    lede: 'Nearly every 16+ maths requirement rests on GCSE Higher. Choose by where your student is now. Each card opens the syllabus.',
    items: [
      { course: 'gcse-mathematics-mastery', code: '16P / 01', title: 'GCSE maths, Foundation and Higher', note: 'Our main course for Years 10 and 11, covering AQA, Edexcel and OCR, with Higher algebra and problem solving at its core.' },
      { course: 'igcse-mathematics-mastery', code: '16P / 02', title: 'IGCSE maths', note: 'For students at schools that teach IGCSE, whose 16+ papers may lean on Extended content.' },
      { course: 'a-level-maths-course-pure-mechanics-statistics', code: '16P / 03', title: 'A level maths', note: 'For students who want a head start on the pure maths they will meet in Year 12.' }
    ]
  },

  sections: [
    {
      id: 'routes', tint: 'tint', eyebrow: 'Two routes',
      h2: 'How do sixth forms decide who gets a Year 12 place?',
      lede: 'State sixth forms decide on published admission arrangements, often with GCSE grade requirements. Independent schools decide on their own tests, interviews and references. The table sets the two side by side.',
      body: [
        { kind: 'table', caption: 'Two ways into Year 12 (state rules from the School Admissions Code 2021; independent practice in general terms)', head: ['', 'State school sixth form, including grammar schools', 'Independent school sixth form'], rows: [
          ['Rules that apply', 'The School Admissions Code 2021', 'The school\'s own admissions policy'],
          ['Can it select by ability?', 'Yes: school sixth forms are one of three kinds of school the Code permits to select', 'Yes, as the school chooses'],
          ['Typical entry test', 'Academic entry criteria, usually GCSE grades in chosen subjects', 'The school\'s own 16+ papers, often with an interview'],
          ['Same rules for insiders?', 'Required: criteria "must be the same for both external and internal places"', 'Set by the school'],
          ['Interviews', 'A meeting about courses is allowed but "cannot form part of the decision making process"', 'Often part of the decision'],
          ['When decided', 'Confirmed once GCSE results are known', 'Often before GCSEs, from papers sat in Year 11']
        ] },
        { kind: 'p', mt: true, html: 'The Admissions Code\'s rule on selection is short. Footnote 20 says there is "a general restriction on selection by ability" and names only three exceptions: "designated grammar schools; schools with partially selective arrangements which already had such arrangements in place during the 1997/98 school year; and school sixth forms." So any state school sixth form may, in principle, set academic requirements, not only grammar schools. GOV.UK\'s own description of grammar schools adds that they "select their pupils based on academic ability and there is a test to get in", which for Year 12 entry may mean a sixth form test as well as grades; each school publishes its own arrangements.' },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/school-admissions-code--2" rel="noopener" target="_blank">Department for Education, School Admissions Code 2021</a>; <a class="ag-inline-link" href="https://www.gov.uk/types-of-school/grammar-schools" rel="noopener" target="_blank">GOV.UK, grammar schools</a>; <a class="ag-inline-link" href="https://www.gov.uk/national-curriculum" rel="noopener" target="_blank">GOV.UK, the national curriculum</a>; all read 31 October 2026. Modern Age Coders is not connected with any school or sixth form.' }
      ]
    },
    {
      id: 'state', tint: 'deep', eyebrow: 'State sixth forms',
      h2: 'What GCSE maths grade do sixth forms ask for?',
      lede: 'Each sixth form sets its own, course by course, and publishes it. The DfE\'s grading guidance explains what the numbers mean, and the Admissions Code sets the rules around them.',
      body: [
        { kind: 'table', caption: 'GCSE 9 to 1 grades, as the DfE factsheet for parents explains them (May 2019)', head: ['Grade', 'What the DfE says'], rows: [
          ['9', '"Grade 9 is the highest grade and will be awarded to fewer students than the old A*."'],
          ['7', '"The bottom of grade 7 is aligned with the bottom of grade A"'],
          ['4', '"The bottom of grade 4 is aligned with the bottom of grade C"; the DfE "recognises grade 4 and above as a \'standard pass\'"'],
          ['Below 4 in maths', 'Grade 4 is the minimum in English and maths; below it, students "need to continue to study these subjects as part of their post-16 education"'],
          ['Entry requirements', '"Employers, universities and colleges will continue to set the GCSE grades they require for entry to employment or further study."']
        ] },
        { kind: 'p', mt: true, html: 'Because each sixth form chooses its own requirements, we do not print a "typical" grade for A level maths here; families should read the sixth form\'s prospectus for the year of entry. What the Admissions Code does guarantee is fairness in how those requirements are applied. Paragraph 2.6 says sixth form criteria "must be the same for both external and internal places", that arrangements for external applicants "must be consulted upon, determined, and published" on the same timetable as other entry points, and that looked after and previously looked after children who meet the academic criteria get the "highest priority" if a sixth form is oversubscribed.' },
        { kind: 'two', mt: true,
          leftH3: 'The meeting is not an interview',
          left: [
            'The Code allows a sixth form to meet applicants "to discuss options and academic entry requirements for particular courses", but adds that "this meeting cannot form part of the decision making process on whether to offer a place."',
            'For a state sixth form, the grades decide, not a conversation. That makes the GCSE result itself the thing to prepare for.'
          ],
          rightH3: 'Where an entrance test fits',
          right: [
            'By our reading of the Code, if a state sixth form uses a test or a course-specific task, it belongs in the arrangements the school must consult on and publish, so families can see it in advance.',
            'Read the arrangements for the exact year of entry: they are set a year ahead under the same timetable as Year 7.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/gcse-new-grading-scale-factsheets" rel="noopener" target="_blank">DfE, GCSE new grading scale factsheets</a> (parents, May 2019); School Admissions Code 2021, paragraphs 1.9 and 2.6. Read 31 October 2026.' }
      ]
    },
    {
      id: 'independent', tint: '', eyebrow: '16+ papers',
      h2: 'What is on an independent school 16 plus maths paper?',
      lede: 'Each school writes or commissions its own, so there is no common syllabus. What every paper sat in Year 11 shares is a ceiling: it can only test what a strong student has been taught before GCSE results.',
      body: [
        { kind: 'p', html: 'Independent schools are free to design their own admissions. GOV.UK notes that private schools "do not have to follow the national curriculum", and test providers sell bespoke papers: Quest Admissions, for example, builds entrance tests "For ages 7+ to 16+" that are "Bespoke and branded to your school". By our own reasoning, a maths paper sat in the autumn or winter of Year 11 comes before the GCSE course is finished, so it sits inside GCSE Higher content taught by then. Schools often add an interview and a reference, and some ask for predicted grades.' },
        { kind: 'table', mt: true, caption: 'GCSE Higher topics a 16+ maths paper commonly draws on (our summary; check each school\'s own guidance)', head: ['Area', 'Topics', 'Why it matters for a 16+ paper'], rows: [
          ['Number', 'Indices including fractional, surds, standard form, recurring decimals', 'Short questions that show fluency without a calculator'],
          ['Algebra', 'Factorising quadratics, the quadratic formula, simultaneous equations, rearranging, algebraic proof', 'The core of most harder questions and of A level maths'],
          ['Functions and graphs', 'Gradients, perpendicular lines, transformations of graphs', 'Links algebra to pictures; common in multi-part questions'],
          ['Geometry', 'Pythagoras and trigonometry, circle theorems, similarity', 'Tests reasoning and written justification'],
          ['Probability and statistics', 'Tree diagrams, conditional probability, averages from tables', 'Careful reading under time pressure'],
          ['Problem solving', 'Unfamiliar multi-step questions', 'Separates a strong grade 7 from a grade 9 mindset']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What to ask each school',
          left: [
            'Which subjects are tested, how long the maths paper is, whether a calculator is allowed, whether there is an interview, and when the papers are sat.',
            'Ask too whether the school expects A level maths applicants to sit a harder or separate paper; some do.'
          ],
          rightH3: 'What we will not do',
          right: [
            'Reproduce any school\'s 16+ papers, or present our practice as a school\'s. We have not seen their papers.',
            'Predict a result or promise a place. Each school decides, usually on more than one paper.'
          ] }
      ]
    },
    {
      id: 'worked', tint: 'deep', eyebrow: 'Worked examples, written by us',
      h2: 'How should a student work a GCSE Higher style question?',
      lede: 'Three original problems of the kind a 16+ maths paper or a top GCSE grade needs, each solved with full working. None is from a school paper or an exam board.',
      body: [
        { kind: 'three', cells: [
          { h3: '1. Factorise, then check', p: 'Solve x squared minus 5x minus 14 = 0. Find two numbers that multiply to minus 14 and add to minus 5: minus 7 and 2. So (x minus 7)(x + 2) = 0, giving x = 7 or x = minus 2. Check one root: 49 minus 35 minus 14 is 0. Students who only reach for the formula lose time; students who never check lose marks.' },
          { h3: '2. Growth, not addition', p: 'A town of 8,000 people grows by 5 per cent a year. What is its population after 3 years? The multiplier is 1.05, applied three times: 8,000 times 1.05 cubed. 1.05 squared is 1.1025, times 1.05 is 1.157625, so the answer is 9,261. Adding 15 per cent once gives 9,200, a wrong answer that many papers list on purpose.' },
          { h3: '3. A tidy proof', p: 'Prove that (n + 1) squared minus (n minus 1) squared is always a multiple of 4. Expand: n squared + 2n + 1 minus (n squared minus 2n + 1). The squares and the ones cancel, leaving 4n. Since n is a whole number, 4n is 4 times a whole number, so a multiple of 4. The last sentence is the proof; the algebra only sets it up.' }
        ] },
        { kind: 'table', mt: true, caption: 'A practice set written by Modern Age Coders at GCSE Higher level', head: ['Question (ours)', 'Answer', 'The reasoning'], rows: [
          ['Simplify the square root of 72.', '6 times the square root of 2', '72 is 36 times 2, and the square root of 36 is 6. Look for the largest square factor.'],
          ['Evaluate 8 to the power two thirds.', '4', 'The cube root of 8 is 2, then square it. Root first keeps the numbers small.'],
          ['A bag has 3 red and 2 blue counters. Two are taken without replacement. Probability both are red?', '3 tenths', '3 fifths times 2 quarters. The second fraction changes because one red has gone.'],
          ['In a right-angled triangle the side opposite angle x is 7 cm and the hypotenuse is 14 cm. Find x.', '30 degrees', 'Sine x is 7 over 14, a half, and sine 30 is a half. Spotting exact values saves a calculator step.'],
          ['Find the nth term of 2, 6, 12, 20, ...', 'n squared + n', 'Second differences are 2, so start with n squared; what is left, 1, 2, 3, 4, is n.'],
          ['A line has gradient 3. What is the gradient of a line perpendicular to it?', 'Minus one third', 'Perpendicular gradients multiply to minus 1.']
        ] },
        { kind: 'p', mt: true, html: 'Each answer here is worth one or two marks on its own, but on a 16+ paper they tend to arrive inside longer questions with no hints. In lessons we set them that way: the final demand only, so the student has to choose the tool, not just use it.' }
      ]
    },
    {
      id: 'plan', tint: 'tint', eyebrow: 'A plan',
      h2: 'How should a Year 10 or Year 11 student prepare for sixth form entry maths?',
      lede: 'Find out each sixth form\'s rules first, then secure GCSE Higher algebra early, then practise unfamiliar problems with full working. The steps below are our plan.',
      body: [
        { kind: 'ol', items: [
          'List each sixth form and write down its route: GCSE grade criteria (state) or its own 16+ papers (independent), with dates and any interview.',
          'For state sixth forms, read the published arrangements for your year of entry, including the subject grades for A level maths if that is the plan.',
          'For independent schools, ask what the maths paper covers, how long it is and whether calculators are allowed.',
          'Secure GCSE Higher algebra in Year 10: factorising, the quadratic formula, simultaneous equations, rearranging and indices.',
          'Add geometry and probability reasoning, writing every step, through the autumn of Year 11.',
          'Practise unscaffolded questions weekly, then timed papers in the weeks before any 16+ sitting.'
        ] },
        { kind: 'p', mt: true, html: 'For the GCSE itself, our <a class="ag-inline-link" href="/gcse-maths-tuition-online">GCSE maths page</a> covers the three boards and both tiers, and our <a class="ag-inline-link" href="/igcse-maths-tuition-online">IGCSE maths page</a> covers international specifications. For students heading into Year 12 maths, the <a class="ag-inline-link" href="/a-level-maths-tuition-online">A level maths page</a> shows what comes next.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Timeline',
    h2: 'From Year 10 to a Year 12 place',
    lede: 'Independent 16+ papers often fall in Year 11, and state sixth form places follow GCSE results. Our stages serve both.',
    table: { caption: 'Four stages before sixth form entry (our plan)', head: ['When', 'Stage', 'Secure when'], rows: [
      ['Year 10, autumn', '1. Number and algebra basics', 'Indices, surds, expanding and factorising done accurately without notes'],
      ['Year 10, spring to summer', '2. Higher algebra', 'Quadratics, simultaneous equations and rearranging solved in any context'],
      ['Year 11, autumn', '3. Reasoning and proof', 'Geometry and probability answers written as full chains of working'],
      ['Before any 16+ paper', '4. Unfamiliar problems', 'Timed questions with no hints finished with time to check']
    ] },
    left: { h3: 'If time is short', ps: [
      'Stage 2 matters most. Higher algebra underlies the hardest questions on any 16+ paper and on the GCSE.',
      'After one lesson we tell you frankly what is realistic.'
    ] },
    right: { h3: 'Into Year 12', ps: [
      'The same algebra is the base of A level maths. Some students also explore <a class="ag-inline-link" href="/courses/maths-through-coding">maths through coding</a>.',
      'Strong students can try the senior challenges in our <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">UK competitions calendar</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'All related courses',
    h2: 'Courses for 16 plus and sixth form entry',
    lede: 'From GCSE through to Year 12. Each card opens its syllabus.',
    bands: [
      { num: 'I', h3: 'GCSE and IGCSE', sub: 'Years 10 and 11', courses: [
        { code: 'UK / PSF / 01', slug: 'gcse-mathematics-mastery', title: 'GCSE maths', blurb: 'Foundation and Higher for the three English boards.' },
        { code: 'UK / PSF / 02', slug: 'igcse-mathematics-mastery', title: 'IGCSE maths', blurb: 'Core, Extended and Additional Mathematics.' },
        { code: 'UK / PSF / 03', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'For students whose algebra needs rebuilding first.' }
      ] },
      { num: 'II', h3: 'Stretch', sub: 'Aiming high', courses: [
        { code: 'UK / PSF / 04', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Unfamiliar problems and proof.' },
        { code: 'UK / PSF / 05', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Data and chance, beyond the GCSE basics.' }
      ] },
      { num: 'III', h3: 'Year 12', sub: 'Sixth form', courses: [
        { code: 'UK / PSF / 06', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level maths', blurb: 'Pure, mechanics and statistics.' },
        { code: 'UK / PSF / 07', slug: 'a-level-further-maths-course', title: 'A level further maths', blurb: 'Core pure and applied options.' },
        { code: 'UK / PSF / 08', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Python to explore and check maths.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live lessons for Year 10 and Year 11 students',
    lede: TIMING + ' Teaching happens from India, which never moves its clocks, so the difference from UK time is four and a half hours in summer and five and a half in winter. Your timetable is always written in UK time.',
    slots: [
      { time: 'After school', l: 'The common slot for Years 10 and 11.' },
      { time: 'Weekend morning', l: 'Long enough for a timed paper.' },
      { time: 'Holidays', l: 'Extra sessions before a 16+ sitting.' }
    ],
    cells: [
      { h3: 'Higher algebra first', p: 'The topic that unlocks the hardest questions.' },
      { h3: 'Full working', p: 'Every answer set out as a marker would want it.' },
      { h3: 'No-hint questions', p: 'Final demand only, the method chosen by the student.' },
      { h3: 'Written by us', p: 'No school or board paper reproduced.' },
      { h3: 'Class or private', p: 'A class of 15 to 20 at one level, or one-to-one lessons.' },
      { h3: 'No promises', p: 'Places are decided by sixth forms, not tutors.' }
    ]
  },

  projectsH2: 'What our older students have built',
  projectsLede: 'Work by teenage students at our school. More on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'From parents on our Google profile, exactly as written.',

  fees: {
    h2: 'Fees for 16 plus entrance maths lessons',
    lede: 'One monthly fee, shown in the currency used for UK families. The first lesson is free, with no joining charge.',
    free: ['A full Higher-tier lesson', 'An honest read on strengths and gaps', 'A phone number is all we ask'],
    group: ['A class of 15 to 20 at a similar level', 'The same teacher through Year 11', 'Timed, no-hint practice', 'Quieter weeks around mocks'],
    one: ['One teacher, one student', 'Shaped around one school\'s paper', 'Good for a single stubborn topic']
  },

  faq: {
    eyebrow: '16 plus questions',
    h2: 'What families ask about 16 plus and sixth form entry maths',
    items: [
      { q: 'What is a 16 plus entrance exam?', a: 'It is a test a sixth form uses to admit students into Year 12. Independent schools usually set their own 16 plus papers, often with an interview; state sixth forms usually rely on GCSE grade criteria instead.' },
      { q: 'Can a state school sixth form select by ability?', a: 'Yes. The School Admissions Code 2021 allows school sixth forms, as well as grammar schools and some partially selective schools, to select by ability and to set academic entry criteria.' },
      { q: 'Do internal and external applicants face the same criteria?', a: 'At state school sixth forms, yes. The Admissions Code says academic entry criteria must be the same for both external and internal places.' },
      { q: 'Can a state sixth form interview me?', a: 'It can hold a meeting to discuss options and course requirements, but the Admissions Code says that meeting cannot form part of the decision on whether to offer a place.' },
      { q: 'What GCSE maths grade do I need for sixth form?', a: 'Each sixth form sets its own and publishes it, often course by course. The DfE calls grade 4 a standard pass and aligns the bottom of grade 7 with the old grade A, so check the prospectus for the exact requirement.' },
      { q: 'What maths is on an independent 16 plus paper?', a: 'Each school decides. Because papers are often sat in Year 11, they draw on GCSE Higher content taught by then, such as algebra, quadratics, geometry and probability. Ask the school for its own guidance.' },
      { q: 'Are there 16 plus past papers?', a: 'Some schools publish samples on their own sites; others do not. We do not copy any school\'s papers, and our lessons use questions we write at GCSE Higher level.' },
      { q: 'What happens if I do not get grade 4 in maths?', a: 'The DfE says students who do not reach grade 4 in maths need to continue studying it as part of their post-16 education. Sixth forms set their own rules about which courses are then open.' },
      { q: 'When are lessons?', a: TIMING + ' Every time is set in UK time.' },
      { q: 'Can you guarantee a sixth form place?', a: 'No. Sixth forms decide places on their own published criteria or tests. We teach the maths and the habits that strong results need.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More on GCSE and sixth form maths',
    lede: 'What comes before and after Year 12 entry.',
    items: [
      { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition', p: 'Foundation and Higher, all three English boards.' },
      { href: '/igcse-maths-tuition-online', label: 'IGCSE maths tuition', p: 'International specifications many independent schools teach.' },
      { href: '/a-level-maths-tuition-online', label: 'A level maths tuition', p: 'The course most 16+ maths applicants are heading for.' },
      { href: '/common-entrance-maths-tuition', label: 'Common Entrance maths', p: 'The earlier independent-school entry points, at 11 and 13.' },
      { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'UK competitions calendar', p: 'Senior maths challenges for able students.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'All our UK pages in one place.' }
    ]
  },

  start: {
    h2: 'Book a free maths lesson',
    lede: 'Tell us the student\'s year, current maths level and the sixth forms on the list. We check each one\'s route, teach a real lesson and tell you frankly where things stand.',
    readFirst: 'Want to read first? The <a class="ag-inline-link" href="/courses/gcse-mathematics-mastery">GCSE maths course</a> lists every topic, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains our approach with teenagers.',
    note: 'WhatsApp is quickest, and free from a UK phone. Our team in India replies on a number that starts +91.',
    formNote: 'No payment details needed. We send one reply with a time.'
  },

  footer: {
    cols: [
      { h4: 'Sixth form maths', links: [
        { href: '/gcse-maths-tuition-online', label: 'GCSE maths' },
        { href: '/igcse-maths-tuition-online', label: 'IGCSE maths' },
        { href: '/a-level-maths-tuition-online', label: 'A level maths' },
        { href: '/common-entrance-maths-tuition', label: 'Common Entrance' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/courses/gcse-mathematics-mastery', label: 'GCSE maths course' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Two doors into Year 12, one set of algebra behind both'
  },

  personalityCss: `
.ag-root.ag-psf .ag-hero h1 { letter-spacing: -0.02em; max-width: 24ch; }
.ag-root.ag-psf .ag-capsule { border-left-width: 5px; border-radius: 0; }
.ag-root.ag-psf .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-psf .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-psf .ag-table th:first-child { width: 20%; }
`,

  dossier: {
    curriculumAuthority: 'Department for Education, School Admissions Code 2021, read 31 October 2026: footnote 20 (selection by ability permitted only for designated grammar schools, partially selective schools with arrangements in 1997/98, and school sixth forms); paragraph 2.6 (academic entry criteria the same for external and internal places; external arrangements consulted on and published on the same timetable; highest priority for looked after and previously looked after children who meet the criteria); paragraph 1.9 m) (sixth form meeting cannot form part of the decision). DfE GCSE factsheet for parents (May 2019): 9 to 1 scale; grade 9 highest; bottom of 7 aligned with bottom of A; bottom of 4 with bottom of C; grade 4 a standard pass; below 4 in maths means continued post-16 study; colleges set their own required grades. GOV.UK: grammar schools select by academic ability with a test; private schools do not have to follow the national curriculum. Quest Admissions: tests for ages 7+ to 16+.',
    localProject: 'A sixth form entry page in two halves. It compares state and independent routes into Year 12 in one table, quotes the School Admissions Code on who may select, equal criteria for internal and external applicants, publication and the non-decisive sixth form meeting, explains GCSE grades from the DfE factsheet without inventing a typical requirement, sets out (as our summary) the GCSE Higher topics a Year 11 entrance paper can draw on, teaches three original worked examples (factorising with a check, compound growth, an algebraic proof) and a six-question practice set, and gives a six-step plan. Lesson family: Higher-tier algebraic fluency.',
    requiredMentions: ['a general restriction on selection by ability', 'must be the same for both external and internal places', 'cannot form part of the decision making process', 'The bottom of grade 7 is aligned with the bottom of grade A', 'recognises grade 4 and above as a', 'Employers, universities and colleges will continue to set the GCSE grades they require', 'do not have to follow the national curriculum', 'For ages 7+ to 16+'],
    sources: [
      { claim: 'School Admissions Code 2021: selection by ability exceptions, sixth form entry criteria, publication timetable, looked after children priority, sixth form meetings.', url: 'https://assets.publishing.service.gov.uk/media/60ebfeb08fa8f50c76838685/School_admissions_code_2021.pdf' },
      { claim: 'DfE GCSE factsheet for parents: 9 to 1 grades, alignment of 7 and 4 with A and C, standard pass, post-16 maths requirement, institutions set required grades.', url: 'https://www.gov.uk/government/publications/gcse-new-grading-scale-factsheets' },
      { claim: 'GOV.UK: grammar schools select on academic ability with a test.', url: 'https://www.gov.uk/types-of-school/grammar-schools' },
      { claim: 'GOV.UK: private schools do not have to follow the national curriculum.', url: 'https://www.gov.uk/national-curriculum' },
      { claim: 'Quest Admissions: bespoke entrance tests for ages 7+ to 16+.', url: 'https://www.questassessments.com/admissions' }
    ],
    rejectedClaims: [
      'Named independent schools\' 16+ notes for candidates (found by search): not used, to avoid naming individual schools and because they describe single schools only.',
      'Tutor-site claims about typical 16+ timings, content limits or pass marks: not primary, not used.',
      'A "typical" GCSE grade required for A level maths: each sixth form sets its own, so none is printed.',
      'The School Admissions Code\'s application to independent schools: it does not apply to them, and the page treats them separately.',
      'Any question from any school or exam board paper: not reproduced.',
      'Any grade prediction or place promise.'
    ]
  }
};
