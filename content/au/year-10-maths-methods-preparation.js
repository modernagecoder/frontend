'use strict';
// Year 10 preparation for Maths Methods (ag- door, Australia cluster Phase 3, row 86).
// Facts read raw on 7 October 2026: the VCAA VCE Mathematics Study Design (accredited from 2023, docx
// linked from the VCAA Mathematical Methods page): Mathematical Methods Units 1 to 4 description; entry
// ("no prerequisites for entry to Units 1, 2 and 3" but Methods and Specialist Units 1 and 2 students
// "are assumed to have a sound background in number, algebra, function, geometry, probability and
// statistics"); each unit at least 50 hours; Units 3 and 4 assessment (School-assessed Coursework 20%
// and 20%, Examination 1 20%, Examination 2 40%); Examination 1 technology-free; Specialist Units 3 and
// 4 assume Methods Units 3 and 4; study score 0 to 50. VCAA 2026 VCE timetable: Methods Examination 1
// Thursday 5 November 9:00 to 10:15 am; Examination 2 Friday 6 November 11:45 am to 2:00 pm (reading
// included). NSW Mathematics K-10 Syllabus (2022) course overview: Core-Paths structure, Stage 5 Paths
// outcome groups, Core as the foundation for Mathematics Standard 11-12. Spine: composite functions do
// not commute (f(x) = x + 3, g(x) = x squared), checked free site-wide on 7 October 2026.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'exam', tag: 'YEAR 10 METHODS PREPARATION', label: 'Year 10 maths for Methods', blurb: 'What senior Methods assumes from Year 10, read from VCAA and NESA, with a lesson on composite functions that trips up new Year 11 students.' },
  slug: 'year-10-maths-methods-preparation',
  code: 'ytmp',
  accent: '#572A33',
  accentRationale: 'Year 10 Methods preparation: a muted plum brown at hue 349, contrast above 4.9:1 on #EDE7DA, at least 10 RGB from every accent on the site',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'Year 10 maths for Methods',
  title: 'Year 10 Maths Methods Preparation | VCE and NSW, Online',
  description: 'Year 10 preparation for Maths Methods: what VCE Mathematical Methods assumes, NSW Stage 5 Paths for Advanced, and the algebra and functions to fix before Year 11.',
  ogDescription: 'Getting ready for senior calculus mathematics in Year 10: what VCAA says Mathematical Methods students are assumed to know, how the VCE course is assessed, the NSW Stage 5 Paths that lead to Advanced, and composite functions explained.',
  twitterDescription: 'Year 10 preparation for Methods: what VCAA assumes, the NSW Paths, and functions done right.',
  pageName: 'Year 10 Maths Methods Preparation',
  webPageDescription: 'Help for Year 10 students heading into senior calculus-based mathematics: VCE Mathematical Methods entry assumptions, structure and assessment, 2026 Methods exam dates, NSW Mathematics K-10 Stage 5 Paths, and an original lesson on composite functions.',
  courseDescription: 'Live online mathematics lessons for Year 10 students preparing for VCE Mathematical Methods or NSW Mathematics Advanced: algebra, functions, graphs, trigonometry and probability.',
  crumbs: [{ name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'Year 10 Methods preparation',
  navLinks: [
    { href: '#assumed', label: 'What Methods assumes' },
    { href: '#vce', label: 'How VCE Methods runs' },
    { href: '#nsw', label: 'NSW Stage 5 Paths' },
    { href: '#composite', label: 'Composite functions' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Year 10 &middot; Getting ready for Methods',
  h1: 'Year 10 maths for Methods',
  lede: 'The jump from Year 10 maths to a calculus-based senior course is real, and most of it is not about calculus. Students stumble in Year 11 Methods because algebra is slow, function notation is unfamiliar and graphs feel like pictures rather than information. Year 10 is the year to fix those things calmly, before the senior course starts moving.',
  secondaryCta: { href: '#composite', label: 'Try the composite functions lesson' },
  wa: 'Hello Modern Age Coders, I would like a free class to prepare for Maths Methods in Year 11.',
  heroNote: 'From VCAA and NESA documents &middot; Algebra and functions first &middot; Lessons after school in your state',
  spec: [
    ['Victorian course', 'VCE Mathematical Methods, Units 1 to 4'],
    ['Unit length', 'At least 50 hours each'],
    ['Units 3 and 4 exams', 'Examination 1 (no technology) and 2'],
    ['NSW equivalent route', 'Stage 5 Paths into Mathematics Advanced'],
    ['Assumed background', 'Number, algebra, function, geometry, probability, statistics'],
    ['Common gap', 'Algebra speed and function notation'],
    ['We teach', 'The Year 10 base, done thoroughly'],
    ['We never', 'Promise a study score']
  ],
  capsuleQ: 'In short',
  capsule: 'Mathematical Methods is the VCE calculus-based mathematics study, running from Units 1 and 2 in Year 11 to Units 3 and 4 in Year 12. VCAA lists no prerequisites, but says students starting Units 1 and 2 are assumed to have a sound background in number, algebra, function, geometry, probability and statistics. Year 10 is when that background is built. In NSW the same route runs through the Stage 5 Paths into Mathematics Advanced.',

  picks: {
    eyebrow: 'The right Year 10 courses',
    h2: 'Three courses that build a Methods-ready base',
    lede: 'Algebra first, functions and graphs second, probability third.',
    items: [
      { course: 'algebra-foundations-masterclass', code: 'YTMP / 01', title: 'Algebra at speed', note: 'Expanding, factorising, solving and rearranging until they are fast and accurate, because Methods uses them on every page.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'YTMP / 02', title: 'Functions and graphs', note: 'Function notation, graph sketching and transformations, the language Units 1 and 2 of Methods are written in.' },
      { course: 'statistics-probability-maths-course', code: 'YTMP / 03', title: 'Probability and statistics', note: 'Probability rules and data handling, the strand Methods returns to in both Year 11 and Year 12.' }
    ]
  },

  sections: [
    {
      id: 'assumed', tint: 'tint', eyebrow: 'What Methods assumes',
      h2: 'No prerequisites, but a lot is assumed',
      lede: 'These points are quoted from the VCE Mathematics Study Design, accredited from 2023, linked from VCAA\'s Mathematical Methods page and read on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'VCE Mathematical Methods: entry and scope, in VCAA\'s words', head: ['Topic', 'What the study design says'], rows: [
          ['Entry', '"There are no prerequisites for entry to Units 1, 2 and 3"'],
          ['Assumed background', 'Students in Mathematical Methods Units 1 and 2 "are assumed to have a sound background in number, algebra, function, geometry, probability and statistics"'],
          ['What the study covers', '"simple elementary functions, transformations and combinations of these functions, algebra, calculus, probability and statistics, and their applications"'],
          ['Sequence', 'Units 1 and 2 cover "assumed key knowledge and key skills as preparation for Units 3 and 4"'],
          ['Time', 'Each unit involves at least 50 hours of scheduled classroom instruction'],
          ['Specialist link', 'Specialist Mathematics Units 3 and 4 assume current enrolment in, or completion of, Mathematical Methods Units 3 and 4']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Read the assumed background line carefully: number, algebra, function, geometry, probability and statistics. That is effectively a checklist for Year 10. A student who is shaky on any of the six will meet it again early in Units 1 and 2, usually at speed.',
            'The phrase "combinations of these functions" in the study\'s description is worth noticing too. Combining functions, by adding them, multiplying them or feeding one into another, is a central idea in Methods, and it is the subject of the lesson further down this page.'
          ],
          right: [
            'VCAA designs Units 1 to 4 as a sequence. Units 1 and 2 are not a separate course students can skim through; they deliberately lay down what Units 3 and 4 rely on, and the final examinations can draw on it.',
            'For students also considering Specialist Mathematics, the dependence runs one way: Specialist Units 3 and 4 assume Methods Units 3 and 4. Our <a class="ag-inline-link" href="/choosing-year-11-computing-subjects-australia">guide to choosing computing subjects</a> covers the computing side of senior choices.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.vcaa.vic.edu.au/curriculum/vce/vce-study-designs/mathematicalmethods/Pages/Index.aspx" rel="noopener" target="_blank">VCAA, VCE Mathematical Methods</a> and its linked 2023 Mathematics Study Design. Checked on 7 October 2026.' }
      ]
    },
    {
      id: 'vce', tint: 'deep', eyebrow: 'How VCE Methods is assessed',
      h2: 'Coursework, a technology-free exam, and an exam with technology',
      lede: 'The weightings and exam rules below are from the VCE Mathematics Study Design and VCAA\'s 2026 examination timetable, checked on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'Mathematical Methods Units 3 and 4 assessment', head: ['Component', 'Weighting', 'Notes'], rows: [
          ['Unit 3 School-assessed Coursework', '20%', 'Set and marked by the school'],
          ['Unit 4 School-assessed Coursework', '20%', 'Set and marked by the school'],
          ['Units 3 and 4 Examination 1', '20%', 'Technology-free; 2026 sitting Thursday 5 November, 9:00 to 10:15 am including reading'],
          ['Units 3 and 4 Examination 2', '40%', 'Assumes VCAA-approved technology; 2026 sitting Friday 6 November, 11:45 am to 2:00 pm including reading']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Examination 1 is technology-free, which is the single strongest argument for working on algebra in Year 10. Every manipulation in that paper is done by hand, under time pressure, and the marks go to students for whom expanding and factorising is automatic.',
            'Examination 2 carries the largest single weighting at 40% and assumes access to approved technology. It rewards students who understand what their calculator output means and can interpret it in context, not just produce it.'
          ],
          right: [
            'Coursework in Units 3 and 4 adds another 40% between them. Schools design those tasks, and they are the student\'s own work. We teach mathematics with our own problems and never help with a task a school will mark.',
            'At the end of Units 3 and 4, VCAA reports a study score on a scale of 0 to 50, measuring how a student performed relative to everyone else who took the study. Like any rank, it cannot honestly be promised by anyone.'
          ] },
        { kind: 'source', html: 'Sources: VCAA 2023 Mathematics Study Design (assessment); <a class="ag-inline-link" href="https://www.vcaa.vic.edu.au/administration/Key-dates/Pages/VCE-exam-timetable.aspx" rel="noopener" target="_blank">VCAA 2026 VCE examination timetable</a>. Checked on 7 October 2026.' }
      ]
    },
    {
      id: 'nsw', tint: 'tint', eyebrow: 'The NSW route',
      h2: 'Stage 5 Paths lead towards Mathematics Advanced',
      lede: 'NSW does not use the name Methods; its calculus-based course is Mathematics Advanced. The Year 7 to 10 structure that leads there is described in the Mathematics K-10 Syllabus (2022), read on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'NSW Mathematics K-10 (2022): Stage 5 Paths outcome groups', head: ['Path outcome group', 'Why it matters for Advanced'], rows: [
          ['Further algebra and equations', 'The algebra every Advanced topic relies on'],
          ['Variation and rates of change', 'The idea underneath the derivative'],
          ['Functions and graphs', 'The language of Year 11 Advanced'],
          ['Further trigonometry', 'A head start on the trigonometric functions'],
          ['Further probability', 'Groundwork for random variables in Year 12']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The syllabus describes a Core that typically covers learning up to the middle of Stage 5, with Paths that teachers program "as appropriate to the needs of the students by the end of Stage 5". It also states that "The Core outcomes and content provide students with the foundation for Mathematics Standard 11-12."',
            'The implication for a student aiming at Advanced is clear: the Paths content, especially further algebra, functions and graphs, is where the preparation happens. The right-hand column of the table above is our reading of how each group connects; the group names are NESA\'s.'
          ],
          right: [
            'The Paths also include further area and volume, geometrical figures and proof, introduction to networks and data analysis and statistical enquiry. They are all useful; the five in the table are the ones we prioritise for a student heading into Advanced.',
            'NESA notes that the Core-Paths structure is not meant to lock students into a pathway at the end of Stage 4. A student who has missed some Paths content can catch up in Year 10, and that is often where our lessons begin. Our <a class="ag-inline-link" href="/preliminary-hsc-maths-year-11-help">Year 11 mathematics page</a> picks up from there.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-k-10-2022/overview" rel="noopener" target="_blank">NSW Curriculum, Mathematics K-10 Syllabus (2022), course overview</a>. Checked on 7 October 2026.' }
      ]
    },
    {
      id: 'composite', tint: '', eyebrow: 'Combinations of functions',
      h2: 'Composite functions do not commute',
      lede: 'Feeding one function into another is a core Methods idea, and new students often assume the order does not matter. A small table settles it.',
      body: [
        { kind: 'p', text: 'A worked lesson, written by us. Let f(x) = x + 3 and g(x) = x squared. The composite f(g(x)) means "square first, then add 3"; the composite g(f(x)) means "add 3 first, then square".' },
        { kind: 'table', caption: 'f(g(x)) and g(f(x)) for f(x) = x + 3 and g(x) = x squared', head: ['x', 'f(g(x)) = x squared + 3', 'g(f(x)) = (x + 3) squared', 'Equal?'], rows: [
          ['-2', '7', '1', 'No'],
          ['-1', '4', '4', 'Yes'],
          ['0', '3', '9', 'No'],
          ['2', '7', '25', 'No'],
          ['5', '28', '64', 'No']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The two composites agree at exactly one value. Expanding gives f(g(x)) = x squared + 3 and g(f(x)) = x squared + 6x + 9. Setting them equal leaves 6x + 6 = 0, so x = -1, which matches the table. Everywhere else, the order changes the answer.',
            'The lesson for Year 10 is the habit, not the result: read a composite from the inside out, work out which function acts first, and test a value or two before trusting any algebra. The same habit prevents errors with transformations of graphs later on.'
          ],
          right: [
            'Programmers meet the same idea constantly. Calling one function on the result of another is composition, and swapping the order of two steps in a data pipeline usually changes the output. Students who code can write f and g in Python and print both composites for a range of x in a few lines.',
            'Function notation itself, f(x), is the other hurdle. Students who are comfortable reading f(2) as "the output when the input is 2" find Methods far less foreign. We spend real time on that reading skill in Year 10.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'A Year 10 plan',
    h2: 'Four steps through Year 10',
    lede: 'Our teaching order for a student heading into Methods or Advanced. Schools teach in their own sequence; this sits alongside it.',
    table: { caption: 'From Year 9 skills to a Methods-ready Year 10', head: ['Step', 'Focus', 'The sign it is done'], rows: [
      ['1', 'Algebra by hand', 'Factorises a quadratic in under a minute with no calculator'],
      ['2', 'Function notation', 'Reads f(a + 1) correctly and evaluates it'],
      ['3', 'Graphs as information', 'States intercepts and turning points from an equation'],
      ['4', 'Probability', 'Uses tree diagrams and complements confidently']
    ] },
    left: { h3: 'If Year 10 maths feels hard', ps: [
      'That is normal and fixable. The usual cause is an algebra gap from Year 8 or 9, and closing it changes everything else.',
      'A student finding Year 10 tough is not ruled out of Methods; they just need the base built before the senior course starts.'
    ] },
    right: { h3: 'Stretch for strong students', ps: [
      'Students racing ahead can try competition problems; the <a class="ag-inline-link" href="/australian-coding-maths-and-ai-competitions-calendar">competitions calendar</a> lists maths contests by month.',
      'Learning to code alongside maths is another stretch; our <a class="ag-inline-link" href="/ai-classes-for-teens-australia">AI classes for teens</a> pair well with senior mathematics.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for Year 10 students',
    lede: 'Grouped by what they build. Each card opens a full syllabus.',
    bands: [
      { num: 'I', h3: 'The base', sub: 'Number and algebra', courses: [
        { code: 'YTMP / B / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'The by-hand algebra Examination 1 demands.' },
        { code: 'YTMP / B / 02', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school mathematics', blurb: 'For rebuilding Year 8 and Year 9 gaps.' },
        { code: 'YTMP / B / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Probability and data, part of the assumed background.' }
      ] },
      { num: 'II', h3: 'The senior bridge', sub: 'Functions to first calculus', courses: [
        { code: 'YTMP / S / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High school mathematics', blurb: 'Functions, graphs, trigonometry and a first derivative.' },
        { code: 'YTMP / S / 02', slug: 'ap-calculus-exam-prep', title: 'A first look at calculus', blurb: 'Written for the US AP exam; useful for strong students curious about derivatives early.' },
        { code: 'YTMP / S / 03', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB Mathematics', blurb: 'An international senior course with similar foundations.' }
      ] },
      { num: 'III', h3: 'Extension', sub: 'For students racing ahead', courses: [
        { code: 'YTMP / E / 01', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition mathematics', blurb: 'Harder problems for curious students.' },
        { code: 'YTMP / E / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Functions and data explored in Python.' },
        { code: 'YTMP / E / 03', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Programming that pairs well with senior maths.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Practicalities',
    h2: 'After-school lessons in your state\'s time',
    lede: 'Our tutors teach from India. Melbourne and Sydney are five and a half hours ahead of India time during daylight saving and four and a half hours ahead in winter; Brisbane stays four and a half hours ahead all year, and Perth two and a half. Australian after-school hours therefore fall comfortably in the Indian working day.',
    slots: [
      { time: 'Weekday afternoons', l: 'One or two lessons a week through Year 10.' },
      { time: 'Weekend mornings', l: 'Longer sessions on algebra or functions.' },
      { time: 'Summer before Year 11', l: 'A focused bridge into the senior course.' }
    ],
    cells: [
      { h3: 'By hand first', p: 'Algebra is practised without a calculator, ready for a technology-free exam.' },
      { h3: 'Notation made familiar', p: 'Function notation read aloud until it feels natural.' },
      { h3: 'Check with values', p: 'Every rule is tested on a number or two before it is trusted.' },
      { h3: 'Small classes', p: 'Five to ten Year 10 students at one level, each explaining aloud.' },
      { h3: 'One-to-one lessons', p: 'A private tutor for a specific gap.' },
      { h3: 'No score promises', p: 'We never promise a study score or a result.' }
    ]
  },

  projectsH2: 'Projects our students have published',
  projectsLede: 'Students\' own projects, not school work. See more in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Straight from Google, as students and parents wrote them.',

  fees: {
    h2: 'Fees',
    lede: 'A monthly fee in US dollars, the same for all families outside India. Joining costs nothing, and only the current month is ever billed.',
    free: ['A real Year 10 lesson', 'A clear view of what needs work', 'No card details'],
    group: ['Five to ten Year 10 students', 'One tutor all term', 'Work checked together', 'A certificate on completion'],
    one: ['A dedicated tutor', 'Targeted at specific gaps', 'Useful before Year 11 starts']
  },

  faq: {
    eyebrow: 'Questions about Methods preparation',
    h2: 'What Year 10 families ask',
    items: [
      { q: 'What is Maths Methods?', a: 'In Victoria, Mathematical Methods is the VCE calculus-based mathematics study, covering functions and their combinations, algebra, calculus, probability and statistics across Units 1 to 4.' },
      { q: 'Are there prerequisites for VCE Mathematical Methods?', a: 'VCAA says there are no prerequisites for entry to Units 1, 2 and 3, but students starting Methods Units 1 and 2 are assumed to have a sound background in number, algebra, function, geometry, probability and statistics.' },
      { q: 'How is Methods assessed in Year 12?', a: 'For Units 3 and 4: school-assessed coursework worth 20% in each unit, Examination 1 worth 20% and Examination 2 worth 40%. Examination 1 is technology-free.' },
      { q: 'When are the 2026 Methods exams?', a: 'From the VCAA timetable: Examination 1 on Thursday 5 November 2026, 9:00 to 10:15 am, and Examination 2 on Friday 6 November 2026, 11:45 am to 2:00 pm, with reading time included.' },
      { q: 'What is the NSW equivalent of Methods?', a: 'NSW calls its calculus-based senior course Mathematics Advanced. In Years 9 and 10, the Stage 5 Paths of the Mathematics K-10 Syllabus (2022) build towards it.' },
      { q: 'What is a composite function?', a: 'A function made by feeding the output of one function into another, such as f(g(x)). The order matters: with f(x) = x + 3 and g(x) = x squared, f(g(2)) = 7 but g(f(2)) = 25.' },
      { q: 'What should my child focus on in Year 10?', a: 'Algebra by hand, function notation, reading graphs, and probability. Those match the background VCAA says Methods students are assumed to have.' },
      { q: 'Does Specialist Mathematics need Methods?', a: 'VCAA states that enrolment in Specialist Mathematics Units 3 and 4 assumes current enrolment in, or completion of, Mathematical Methods Units 3 and 4.' },
      { q: 'Can you promise a good study score?', a: 'No. A study score measures performance relative to everyone else that year, and nobody can honestly promise it.' },
      { q: 'Do you teach Queensland, WA or SA Methods too?', a: 'We teach the shared mathematics any senior calculus course needs. For the details of a specific state\'s course, please check that state\'s curriculum authority.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'Next steps after Year 10',
    lede: 'Senior mathematics in NSW, choosing subjects, and revision ahead.',
    items: [
      { href: '/preliminary-hsc-maths-year-11-help', label: 'Year 11 mathematics in NSW', p: 'The first year of senior maths in NSW.' },
      { href: '/hsc-maths-advanced-tutoring', label: 'HSC Maths Advanced', p: 'The NSW calculus course, in full.' },
      { href: '/choosing-year-11-computing-subjects-australia', label: 'Choosing computing subjects', p: 'The computing side of senior choices.' },
      { href: '/year-12-maths-holiday-revision-australia', label: 'Year 12 holiday revision', p: 'Planning revision later on.' },
      { href: '/online-maths-tutoring-australia', label: 'Online maths tutoring in Australia', p: 'Help for any year and state.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our method, plainly put.' }
    ]
  },

  start: {
    h2: 'Book a free Year 10 lesson',
    lede: 'Tell us the state, the senior course in mind and which topic feels shakiest. The free lesson works on it, usually starting with algebra.',
    readFirst: 'Prefer to look first? Course outlines are on the <a class="ag-inline-link" href="/course-atlas">course atlas</a>, our method is on <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and earlier numeracy is covered on our <a class="ag-inline-link" href="/naplan-numeracy-practice-online">NAPLAN numeracy page</a>.',
    note: 'For the quickest reply, use WhatsApp. The +91 number is Indian since we teach from India; there is no Australian office.',
    formNote: 'No card, nothing binding. We reply once to arrange it.'
  },

  footer: {
    cols: [
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/online-maths-tutoring-australia', label: 'Maths tutoring' },
        { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
        { href: '/naplan-numeracy-practice-online', label: 'NAPLAN numeracy' }
      ] },
      { h4: 'Senior mathematics', links: [
        { href: '/preliminary-hsc-maths-year-11-help', label: 'Year 11 mathematics' },
        { href: '/hsc-maths-advanced-tutoring', label: 'Maths Advanced' },
        { href: '/year-12-maths-holiday-revision-australia', label: 'Holiday revision' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Inside first, then outside'
  },

  personalityCss: `
.ag-root.ag-ytmp .ag-hero-grid { gap: clamp(1.05rem, 3vw, 2.55rem); }
.ag-root.ag-ytmp .ag-hero h1 { letter-spacing: -0.021em; }
.ag-root.ag-ytmp .ag-capsule { border-left-width: 4px; }
.ag-root.ag-ytmp .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-ytmp .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-ytmp .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-ytmp .ag-spec dt { letter-spacing: 0.09em; }
.ag-root.ag-ytmp .ag-slots { gap: 1.1rem; }
`,

  dossier: {
    curriculumAuthority: 'VCAA, VCE Mathematics Study Design (accredited from 2023), read on 7 October 2026: Mathematical Methods description, entry and assumed background, unit hours, Units 3 and 4 assessment weightings, technology-free Examination 1, Specialist assumption, study score 0 to 50; VCAA 2026 VCE examination timetable for Methods. NESA, Mathematics K-10 Syllabus (2022) course overview: Core-Paths structure and Stage 5 Paths outcome groups.',
    localProject: 'Composite functions do not commute: f(x) = x + 3 and g(x) = x squared give f(g(x)) = x squared + 3 and g(f(x)) = x squared + 6x + 9, equal only at x = -1; tabulated for x = -2, -1, 0, 2, 5 (7 vs 1, 4 vs 4, 3 vs 9, 7 vs 25, 28 vs 64). Written by us.',
    requiredMentions: ['are assumed to have a sound background in number, algebra, function, geometry, probability and statistics', 'There are no prerequisites for entry to Units 1, 2 and 3', 'at least 50 hours', 'Thursday 5 November', 'Friday 6 November', 'Variation and rates of change', 'Further algebra and equations', 'x squared + 6x + 9', 'technology-free'],
    sources: [
      { claim: 'VCAA, VCE Mathematical Methods page and linked 2023 Mathematics Study Design: description, entry, unit hours, assessment, technology-free Examination 1, Specialist assumption, study score.', url: 'https://www.vcaa.vic.edu.au/curriculum/vce/vce-study-designs/mathematicalmethods/Pages/Index.aspx' },
      { claim: 'VCAA, 2026 VCE examination timetable: Mathematical Methods Examinations 1 and 2.', url: 'https://www.vcaa.vic.edu.au/administration/Key-dates/Pages/VCE-exam-timetable.aspx' },
      { claim: 'NSW Curriculum, Mathematics K-10 Syllabus (2022) course overview: Core-Paths structure, Stage 5 Paths outcome groups, Core as foundation for Mathematics Standard 11-12.', url: 'https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-k-10-2022/overview' }
    ],
    rejectedClaims: [
      'The content of each Methods unit area of study: not read in full, so not listed.',
      'How Methods is named or structured in Queensland, Western Australia, South Australia or Tasmania: those authorities were not read for this page.',
      'Any claim about which NSW Paths a school must teach: left to schools; NESA says teachers program Paths as appropriate.',
      'Any study score or ATAR promise: none.'
    ]
  }
};
