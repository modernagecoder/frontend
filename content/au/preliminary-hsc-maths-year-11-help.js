'use strict';
// Year 11 (Preliminary) HSC mathematics help (ag- exam door, Australia cluster Phase 3, row 56).
// Facts read raw on 7 October 2026 at the NSW Curriculum site (Mathematics Standard, Advanced and
// Extension 1 11-12 Syllabuses (2024): course structure and enrolment, school-based assessment, HSC
// examinations), NESA official notice 34/26 (take-home task rules: Year 11 students commencing
// Preliminary courses from Term 1, 2027; compressed model from Week 6, Term 4 of 2026) and NESA's
// 2026 HSC key dates (Year 11 grades due 21 October 2026). Year 11 courses: Standard 11236 (120 hours,
// 2 units), Advanced 11255 (120 hours, 2 units), Extension 1 11250 (60 hours, 1 unit, Advanced
// corequisite). Year 11 grades on the Common Grade Scale for Preliminary courses. Year 11 is assumed
// knowledge for the HSC exams and may be examined. Spine: the order of graph transformations
// (dilate then translate is not translate then dilate), checked free site-wide on 7 October 2026.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'exam', tag: 'YEAR 11 MATHS NSW', label: 'Year 11 HSC maths help', blurb: 'The first year of NSW senior mathematics: the three Year 11 courses, how the year is graded, why it still counts in the HSC, and transformations done in the right order.' },
  slug: 'preliminary-hsc-maths-year-11-help',
  code: 'ymnp',
  accent: '#545D21',
  accentRationale: 'Year 11 maths: a muted olive, contrast above 4.9:1 on #EDE7DA, at least 11 RGB from every accent on the site',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'Year 11 HSC maths help',
  title: 'Year 11 Maths Help NSW | Preliminary HSC Courses, Online',
  description: 'Year 11 maths help for NSW: the Preliminary Standard, Advanced and Extension 1 courses, how the year is graded, why it still counts in the HSC, and live lessons.',
  ogDescription: 'The first year of NSW senior mathematics explained from the 2024 syllabuses: the three Year 11 courses and what each covers, how Year 11 is graded, the take-home task rule from 2027, and a lesson on doing graph transformations in the right order.',
  twitterDescription: 'Year 11 maths in NSW: three courses, how the year is graded, and why it still matters in the HSC.',
  pageName: 'Year 11 HSC Maths Help',
  webPageDescription: 'Help for NSW Year 11 mathematics students in the Preliminary courses: Standard, Advanced and Extension 1 under the 2024 syllabuses, enrolment details, how Year 11 grades work, the 2027 take-home rule, and an original lesson on the order of graph transformations.',
  courseDescription: 'Live online teaching for NSW Year 11 mathematics: formulas and linear relationships, functions and graph transformations, trigonometry, a first look at differentiation, exponentials and logarithms, polynomials and counting.',
  crumbs: [{ name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'Year 11 HSC maths',
  navLinks: [
    { href: '#courses', label: 'Three courses' },
    { href: '#grades', label: 'How Year 11 is graded' },
    { href: '#transformations', label: 'Transformations' },
    { href: '#hsc', label: 'Why it still counts' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'New South Wales &middot; Year 11 mathematics &middot; Live online',
  h1: 'Year 11 HSC maths help',
  lede: 'Year 11 is the year NSW students often underestimate. There is no HSC exam at the end of it, so it can feel like a warm-up. It is not: the Year 11 course is assumed knowledge for the HSC papers and may be examined in them. The students who arrive in Year 12 calm are the ones who treated Year 11 as the foundation it is.',
  secondaryCta: { href: '#transformations', label: 'Try the transformation lesson' },
  wa: 'Hello Modern Age Coders, I would like a free class about Year 11 mathematics in NSW.',
  heroNote: 'Read from the 2024 NSW syllabuses &middot; Foundations for the HSC &middot; Lessons after school in NSW time',
  spec: [
    ['Courses', 'Standard, Advanced, Extension 1'],
    ['Standard', '11236: 120 hours, 2 units'],
    ['Advanced', '11255: 120 hours, 2 units'],
    ['Extension 1', '11250: 60 hours, 1 unit'],
    ['Result', 'A grade, not an exam mark'],
    ['In the HSC', 'Assumed knowledge, may be examined'],
    ['We teach', 'Foundations that hold in Year 12'],
    ['We never', 'Write school tasks']
  ],
  capsuleQ: 'In short',
  capsule: 'In NSW, Year 11 mathematics means one of three Preliminary courses under the 2024 syllabuses: Mathematics Standard, Mathematics Advanced, or Advanced with Mathematics Extension 1. Year 11 ends in a grade sent to NESA rather than an HSC exam, but the Year 11 course is assumed knowledge for the Year 12 HSC examinations and may be examined in them.',

  picks: {
    eyebrow: 'A good place to begin',
    h2: 'Three courses that make Year 11 solid',
    lede: 'Algebra that holds, then functions and trigonometry, then counting and proof for Extension 1 students.',
    items: [
      { course: 'algebra-foundations-masterclass', code: 'YMNP / 01', title: 'Algebra that holds', note: 'Rearranging, indices and factorising, the skills every Year 11 course quietly assumes from Year 10.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'YMNP / 02', title: 'Functions and trigonometry', note: 'Graphs, transformations, angles and a first derivative, matching the Year 11 Advanced course.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'YMNP / 03', title: 'Counting and proof', note: 'Permutations, combinations and careful argument for students taking Extension 1 in Year 11.' }
    ]
  },

  sections: [
    {
      id: 'courses', tint: 'tint', eyebrow: 'The Year 11 courses',
      h2: 'Three courses, chosen at the start of Year 11',
      lede: 'Focus areas below are from NESA\'s 2024 course structures for each syllabus, read on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'Year 11 mathematics under the 2024 NSW syllabuses', head: ['Course', 'NESA course number and size', 'Year 11 focus areas'], rows: [
          ['Mathematics Standard', '11236; 120 hours; 2 units', 'Formulas and equations; Linear relationships; Earning money; Managing money; Applications of measurement; Time and location; Networks, paths and trees; Data analysis'],
          ['Mathematics Advanced', '11255; 120 hours; 2 units', 'Working with functions; Graph transformations; Trigonometry and measure of angles; Trigonometric identities and equations; Introduction to differentiation; Exponential and logarithmic functions; Probability and data'],
          ['Mathematics Extension 1', '11250; 60 hours; 1 unit; taken with Year 11 Advanced', 'Further work with functions; Polynomials; Further trigonometry; Permutations and combinations; The binomial theorem']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The three courses lead to different places. Year 11 Standard is the shared first year for both Standard 1 and Standard 2 in Year 12. Year 11 Advanced leads to Year 12 Advanced, and it is a prerequisite for both extension courses. Extension 1 in Year 11 can only be taken alongside Year 11 Advanced, because NESA lists Advanced as its corequisite.',
            'NESA also sets exclusions: a student cannot be enrolled in Year 11 Standard and Year 11 Advanced at the same time. The choice made at the start of Year 11 therefore shapes the Year 12 options, which is why the first term matters.'
          ],
          right: [
            'All three syllabuses are new. NESA describes the 2024 syllabuses as implemented from 2026, and the take-home task rules discussed below also start changing for Year 11 in 2027. Students and families reading older guides should check that topic names match the 2024 lists above.',
            'Within Advanced, two Year 11 focus areas carry most of the weight later on: Graph transformations, which every Year 12 function question leans on, and Introduction to differentiation, which opens the calculus that fills Year 12. Those are the two we watch most closely.'
          ] },
        { kind: 'source', html: 'Sources: NSW Curriculum course structures for <a class="ag-inline-link" href="https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/overview/course" rel="noopener" target="_blank">Mathematics Standard</a>, <a class="ag-inline-link" href="https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/overview/course" rel="noopener" target="_blank">Mathematics Advanced</a> and <a class="ag-inline-link" href="https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-extension-1-11-12-2024/overview/course" rel="noopener" target="_blank">Mathematics Extension 1</a> (2024). Checked on 7 October 2026.' }
      ]
    },
    {
      id: 'grades', tint: 'deep', eyebrow: 'How the year is assessed',
      h2: 'A grade, not an HSC exam',
      lede: 'Year 11 results work differently from Year 12. The points below come from NESA\'s school-based assessment pages and official notice 34/26, checked on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'How NESA handles Year 11 mathematics', head: ['Question', 'Answer from NESA'], rows: [
          ['What does the school report?', 'A grade for each student at the end of the course, allocated with on-balance judgement against the Common Grade Scale'],
          ['What informs the grade?', 'All available assessment information, formal and informal'],
          ['How is the program weighted?', 'Two mandatory components of 50% each: knowledge and understanding, and working mathematically'],
          ['When are 2026 grades due?', 'Schools submit Year 11 grades by 21 October 2026'],
          ['Take-home tasks', 'Limited to one, worth no more than 15%, under the revised ACE Rules']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Because the Year 11 result is a grade built from on-balance judgement, every task during the year contributes evidence. A student who coasts through formal tasks and leaves revision for later gives the teacher less to judge from, and arrives in Year 12 with less learned.',
            'NESA\'s official notice 34/26 sets out when the take-home changes reach Year 11: they apply to Year 11 students commencing Preliminary courses from Term 1, 2027, and to students on a compressed model starting from Week 6, Term 4 of 2026.'
          ],
          right: [
            'The limit of one take-home task means more of the year is assessed in class, and more depends on what a student can do without notes or help. That shifts the value of tutoring from finishing tasks to building understanding early, which is the only kind of help we offer.',
            'We never prepare, write, edit or check a task that a school will assess. We teach the mathematics with fresh examples, so the student can meet the school task on their own.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/assessment/school-based-assessment" rel="noopener" target="_blank">NSW Curriculum, school-based assessment (Advanced example)</a>; <a class="ag-inline-link" href="https://www.nsw.gov.au/education-and-training/nesa/news/all/changes-ace-rules-take-home-tasks-artifical-intelligence" rel="noopener" target="_blank">NESA official notice 34/26</a>; <a class="ag-inline-link" href="https://www.nsw.gov.au/education-and-training/nesa/key-dates/hsc" rel="noopener" target="_blank">NESA 2026 key dates</a>. Checked on 7 October 2026.' }
      ]
    },
    {
      id: 'transformations', tint: 'tint', eyebrow: 'Graph transformations',
      h2: 'Order matters: dilate, then translate',
      lede: 'Graph transformations is a Year 11 Advanced focus area, and the most common error is applying the right transformations in the wrong order. Two quick checks with points make the rule unforgettable.',
      body: [
        { kind: 'p', text: 'A worked lesson, written by us. Start with y = x squared, which passes through (0, 0) and (1, 1). Apply two vertical changes: stretch vertically by a factor of 2, and move up by 3. Then try the same two changes in the opposite order.' },
        { kind: 'table', caption: 'Two vertical transformations of y = x squared, in two orders', head: ['Order', 'Rule after both steps', 'Where (0, 0) goes', 'Where (1, 1) goes'], rows: [
          ['Stretch by 2, then up 3', 'y = 2x squared + 3', '(0, 3)', '(1, 5)'],
          ['Up 3, then stretch by 2', 'y = 2(x squared + 3) = 2x squared + 6', '(0, 6)', '(1, 8)']
        ] },
        { kind: 'p', text: 'The two orders give different graphs. Moving up first means the stretch also doubles the 3, so the graph lands 6 units up instead of 3. The same thing happens horizontally, where it is even easier to slip.' },
        { kind: 'table', caption: 'Two horizontal transformations of y = x squared: move right 2, and stretch horizontally by 3', head: ['Order', 'Rule after both steps', 'Turning point'], rows: [
          ['Right 2, then stretch by 3', 'y = (x/3 minus 2) squared', '(6, 0)'],
          ['Stretch by 3, then right 2', 'y = ((x minus 2)/3) squared', '(2, 0)']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Moving right by 2 first puts the turning point at x = 2; stretching horizontally by 3 then carries it out to x = 6. Stretching first leaves the turning point at the origin, and the move right by 2 then puts it at x = 2. Same two instructions, turning points four units apart.',
            'The habit we teach is simple: before trusting any transformed equation, track one or two easy points through each step and check they land where the equation says. It takes ten seconds and catches nearly every order error.'
          ],
          right: [
            'This is exactly the kind of reasoning the Skills in Working mathematically component rewards: not just the right equation, but an explanation of why it is right. A student who can say "the stretch acts on the translation too" understands the topic.',
            'Graphing software makes the check visual. Students who code can plot both versions in a few lines of Python and watch the curves separate, which tends to settle the rule for good. The written check with points is still the one to use in an exam.'
          ] }
      ]
    },
    {
      id: 'hsc', tint: '', eyebrow: 'Why Year 11 still counts',
      h2: 'Year 11 inside the HSC papers',
      lede: 'Each 2024 HSC examination page says the exam is based on Year 12 but that Year 11 content is assumed knowledge. These are NESA\'s statements, checked on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'How the HSC papers treat Year 11 content', head: ['Course', 'What NESA says about Year 11'], rows: [
          ['Standard 1 and Standard 2', 'The Year 11 Standard course is assumed knowledge and may be examined'],
          ['Advanced', 'The Year 11 Advanced course is assumed knowledge and may be examined'],
          ['Extension 1', 'The Advanced course and Extension 1 Year 11 are assumed knowledge; Extension 1 Year 11 may be examined']
        ] },
        { kind: 'p', text: 'In practice this means a gap left in Year 11 resurfaces twice: once in Year 12 lessons, where teachers assume it, and again in the HSC paper, where it can be asked directly. Fixing a Year 11 weakness in Year 11 costs a few weeks; fixing it in Term 3 of Year 12 costs far more.' },
        { kind: 'p', text: 'For a full picture of each Year 12 course and its HSC paper, see our pages on <a class="ag-inline-link" href="/hsc-maths-standard-tutoring">Mathematics Standard</a>, <a class="ag-inline-link" href="/hsc-maths-advanced-tutoring">Mathematics Advanced</a> and <a class="ag-inline-link" href="/hsc-maths-extension-1-tutoring">Mathematics Extension 1</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Through the year',
    h2: 'Four checkpoints across Year 11',
    lede: 'These are our teaching checkpoints, set by skill rather than by school term.',
    table: { caption: 'Year 11 mathematics, checkpoint by checkpoint', head: ['When', 'Checkpoint', 'Evidence it is in place'], rows: [
      ['Start of Year 11', '1. Year 10 algebra', 'Rearranges any formula and factorises without hesitating'],
      ['Early Year 11', '2. Functions', 'Describes domain, range and shape from an equation'],
      ['Mid Year 11', '3. Transformations', 'Tracks points through each step in the correct order'],
      ['Late Year 11', '4. Ready for Year 12', 'Handles a mixed set of Year 11 questions under time']
    ] },
    left: { h3: 'If Year 11 starts badly', ps: [
      'A rough first term is common and fixable. The cause is usually algebra from Year 10, and repairing it early unlocks the rest of the course.',
      'Logarithms and trigonometric identities are the two topics where students most often need a second, slower explanation.'
    ] },
    right: { h3: 'From Year 10', ps: [
      'Students still in Year 10 can prepare with our page on <a class="ag-inline-link" href="/year-10-maths-methods-preparation">Year 10 preparation for senior mathematics</a>.',
      'Students curious about computing alongside maths can read about <a class="ag-inline-link" href="/choosing-year-11-computing-subjects-australia">choosing Year 11 computing subjects</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for Year 11 students',
    lede: 'Grouped by which Year 11 course they support. Every card opens a full outline.',
    bands: [
      { num: 'I', h3: 'Year 11 Standard', sub: 'Applied mathematics', courses: [
        { code: 'YMNP / S / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school mathematics', blurb: 'Percentages, rates and equations rebuilt from the ground.' },
        { code: 'YMNP / S / 02', slug: 'complete-business-finance-mathematics-mastery', title: 'Business and finance maths', blurb: 'Earning and managing money, the Year 11 financial topics.' },
        { code: 'YMNP / S / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Data analysis and probability, explained with real data.' }
      ] },
      { num: 'II', h3: 'Year 11 Advanced', sub: 'Functions to differentiation', courses: [
        { code: 'YMNP / A / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Indices, logarithm-ready algebra and rearranging.' },
        { code: 'YMNP / A / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school mathematics', blurb: 'Functions, trigonometry and a first derivative in sequence.' },
        { code: 'YMNP / A / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Plotting and testing functions with Python.' }
      ] },
      { num: 'III', h3: 'Year 11 Extension 1', sub: 'Polynomials and counting', courses: [
        { code: 'YMNP / E / 01', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition mathematics', blurb: 'Counting, combinations and proof on harder problems.' },
        { code: 'YMNP / E / 02', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB Mathematics', blurb: 'Polynomials and the binomial theorem from an international course.' },
        { code: 'YMNP / E / 03', slug: 'a-level-further-maths-course', title: 'Further mathematics', blurb: 'For Extension 1 students hungry for more algebra and proof.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Lessons in practice',
    h2: 'Steady weekly lessons through Year 11',
    lede: 'Our tutors are based in India. Sydney runs four and a half hours ahead of India time in winter and five and a half hours ahead after NSW daylight saving begins in October. A lesson at 4.30 pm in Sydney during summer begins at 11 am for the tutor, so after-school times are easy for us to offer.',
    slots: [
      { time: 'A weekday afternoon', l: 'One steady lesson a week suits most Year 11 students.' },
      { time: 'Saturday morning', l: 'For catching up on a topic the class has moved past.' },
      { time: 'Term breaks', l: 'Revision before the end-of-year tasks.' }
    ],
    cells: [
      { h3: 'Foundations checked early', p: 'A quick diagnostic in the first lesson shows which Year 10 skills need repair.' },
      { h3: 'Points before equations', p: 'Students test every transformed graph with a point or two before trusting it.' },
      { h3: 'Explaining, not reciting', p: 'Each lesson ends with the student explaining one idea in their own words.' },
      { h3: 'Fifteen to twenty per class', p: 'Year 11 students in the same course, each speaking up every week.' },
      { h3: 'One-to-one too', p: 'Individual lessons for a student with a specific gap.' },
      { h3: 'No grade promises', p: 'We do not promise a grade. We make the mathematics clear and the work is the student\'s.' }
    ]
  },

  projectsH2: 'Projects our students have published',
  projectsLede: 'Work students made for themselves, not for school. More in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Taken word for word from Google reviews by parents and students.',

  fees: {
    h2: 'Fees',
    lede: 'A flat monthly fee in US dollars, the same for every family outside India. No joining cost, and payment only ever covers the current month.',
    free: ['A real Year 11 lesson', 'An honest view of readiness', 'No payment details needed'],
    group: ['Five to ten Year 11 students', 'One tutor each week', 'Practice reviewed together', 'A certificate at the close'],
    one: ['A private tutor', 'Built around specific gaps', 'Ideal when a topic will not click']
  },

  faq: {
    eyebrow: 'Questions about Year 11',
    h2: 'What NSW Year 11 families ask',
    items: [
      { q: 'What is Preliminary HSC maths?', a: 'It is the Year 11 stage of NSW senior mathematics. Under the 2024 syllabuses, students take Year 11 Mathematics Standard, Year 11 Mathematics Advanced, or Year 11 Advanced together with Year 11 Mathematics Extension 1.' },
      { q: 'Is there an HSC exam at the end of Year 11?', a: 'No. NESA requires schools to submit a grade for each Year 11 student, based on all the assessment information gathered across the course.' },
      { q: 'Does Year 11 maths count in the HSC?', a: 'Yes, indirectly. NESA states that the Year 11 course is assumed knowledge for each Year 12 HSC examination and may be examined.' },
      { q: 'Can I take Year 11 Standard and Advanced together?', a: 'No. NESA lists each as an exclusion for the other. Extension 1 in Year 11 must be taken with Year 11 Advanced.' },
      { q: 'What is a graph transformation?', a: 'A change to a graph made by changing its equation: moving it, stretching it or reflecting it. The order of steps matters, because a stretch applied after a move also stretches the move.' },
      { q: 'When do the new take-home rules reach Year 11?', a: 'NESA official notice 34/26 says they apply to Year 11 students commencing Preliminary courses from Term 1, 2027, and to compressed-model students from Week 6, Term 4 of 2026.' },
      { q: 'When are Year 11 grades submitted?', a: 'For 2026, NESA\'s key dates list Year 11 grades as due from schools by 21 October 2026.' },
      { q: 'How many hours is Year 11 Extension 1?', a: 'NESA lists Year 11 Extension 1 as 60 hours and 1 unit, compared with 120 hours and 2 units for Year 11 Standard and Year 11 Advanced.' },
      { q: 'Can you guarantee a top grade?', a: 'No. We teach the course carefully; the grade reflects the student\'s own work.' },
      { q: 'Will you help with school tasks?', a: 'We teach the mathematics using our own examples. We never write, edit or check work a school will assess.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'Where Year 11 leads',
    lede: 'The Year 12 courses, Year 10 preparation and related help.',
    items: [
      { href: '/hsc-maths-standard-tutoring', label: 'HSC Maths Standard', p: 'Standard 1 or Standard 2 in Year 12.' },
      { href: '/hsc-maths-advanced-tutoring', label: 'HSC Maths Advanced', p: 'The Year 12 calculus course.' },
      { href: '/hsc-maths-extension-1-tutoring', label: 'HSC Maths Extension 1', p: 'The extension course and its second paper.' },
      { href: '/year-10-maths-methods-preparation', label: 'Year 10 preparation', p: 'Getting ready before Year 11 starts.' },
      { href: '/choosing-year-11-computing-subjects-australia', label: 'Year 11 computing subjects', p: 'For students adding computing to maths.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our method in plain words.' }
    ]
  },

  start: {
    h2: 'Book a free Year 11 lesson',
    lede: 'Tell us the course, Standard, Advanced or Extension 1, and the topic your school is on now. The free lesson covers it with our own problems.',
    readFirst: 'Prefer to browse? Course outlines are on the <a class="ag-inline-link" href="/course-atlas">course atlas</a>, our method is on <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and NAPLAN-era number skills are covered on our <a class="ag-inline-link" href="/naplan-numeracy-practice-online">numeracy page</a>.',
    note: 'WhatsApp gets the quickest answer. The +91 number is Indian because we teach from India; there is no NSW office.',
    formNote: 'No card and no tie-in. One reply to book a time.'
  },

  footer: {
    cols: [
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/online-maths-tutoring-australia', label: 'Maths tutoring' },
        { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' },
        { href: '/naplan-numeracy-practice-online', label: 'NAPLAN numeracy' }
      ] },
      { h4: 'Senior mathematics', links: [
        { href: '/hsc-maths-standard-tutoring', label: 'Maths Standard' },
        { href: '/hsc-maths-advanced-tutoring', label: 'Maths Advanced' },
        { href: '/year-10-maths-methods-preparation', label: 'Year 10 preparation' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Year 11 is the foundation, not the warm-up'
  },

  personalityCss: `
.ag-root.ag-ymnp .ag-hero-grid { gap: clamp(1.05rem, 2.9vw, 2.45rem); }
.ag-root.ag-ymnp .ag-hero h1 { letter-spacing: -0.017em; }
.ag-root.ag-ymnp .ag-capsule { border-left-width: 5px; }
.ag-root.ag-ymnp .ag-section-head h2 { max-width: 27ch; }
.ag-root.ag-ymnp .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-ymnp .ag-table th { letter-spacing: 0.015em; }
.ag-root.ag-ymnp .ag-spec dt { letter-spacing: 0.09em; }
.ag-root.ag-ymnp .ag-slots { gap: 1.15rem; }
`,

  dossier: {
    curriculumAuthority: 'NSW Education Standards Authority (NESA). 2024 Mathematics Standard, Advanced and Extension 1 syllabuses read at curriculum.nsw.edu.au on 7 October 2026: Year 11 courses 11236, 11255 (120 hours, 2 units each) and 11250 (60 hours, 1 unit, Advanced corequisite); Year 11 graded on the Common Grade Scale; Year 11 assumed knowledge in each HSC exam. NESA official notice 34/26 for take-home rules from Term 1, 2027 (compressed model from Week 6, Term 4 of 2026). NESA 2026 key dates: Year 11 grades due 21 October 2026.',
    localProject: 'Order of graph transformations: y = x squared stretched vertically by 2 then raised 3 (y = 2x squared + 3, (1, 1) to (1, 5)) versus raised then stretched (y = 2x squared + 6, (1, 1) to (1, 8)); horizontally, right 2 then stretch by 3 puts the turning point at (6, 0) while stretch then right 2 puts it at (2, 0). Written by us.',
    requiredMentions: ['Year 11 students commencing Preliminary courses from Term 1, 2027', 'Week 6, Term 4 of 2026', '21 October 2026', '11236', '11255', '11250', '2x squared + 6', 'Graph transformations', 'Common Grade Scale'],
    sources: [
      { claim: 'NSW Curriculum, Mathematics Standard 11-12 (2024) course structure and enrolment: Year 11 focus areas and course 11236.', url: 'https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/overview/course' },
      { claim: 'NSW Curriculum, Mathematics Advanced 11-12 (2024) course structure and enrolment: Year 11 focus areas and course 11255.', url: 'https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/overview/course' },
      { claim: 'NSW Curriculum, Mathematics Extension 1 11-12 (2024) course structure and enrolment: Year 11 focus areas and course 11250 with Advanced corequisite.', url: 'https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-extension-1-11-12-2024/overview/course' },
      { claim: 'NSW Curriculum, Mathematics Advanced school-based assessment: Year 11 grade on the Common Grade Scale, components, take-home limit.', url: 'https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/assessment/school-based-assessment' },
      { claim: 'NESA official notice 34/26: who the take-home changes apply to.', url: 'https://www.nsw.gov.au/education-and-training/nesa/news/all/changes-ace-rules-take-home-tasks-artifical-intelligence' },
      { claim: 'NESA, 2026 HSC key dates: Year 11 grades due 21 October 2026.', url: 'https://www.nsw.gov.au/education-and-training/nesa/key-dates/hsc' }
    ],
    rejectedClaims: [
      'Whether a particular school teaches Year 11 on the 2024 or 2017 syllabus in a given year: left to the school.',
      'The letter grades on the Common Grade Scale and their descriptors: the scale document was not read, so grades are not listed.',
      'Rules for moving between Standard and Advanced during Year 11: not described.',
      'Any promise of a grade: none.',
      'Any affiliation with NESA: none.'
    ]
  }
};
