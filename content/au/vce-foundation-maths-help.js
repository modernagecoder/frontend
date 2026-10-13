'use strict';
// VCE Foundation Mathematics help (ag- exam door, Australia cluster Phase 3, row 64).
// Facts read raw on 7 October 2026 from the VCAA: the VCE Foundation Mathematics study design page and the VCE
// Mathematics Study Design (Units 1 to 4 accredited from 1 January 2023). Foundation Units 3 and 4: areas of
// study 'Algebra, number and structure', 'Data analysis, probability and statistics', 'Discrete mathematics'
// and 'Space and measurement', all four completed over the two units; Unit 3 coursework 40 per cent
// (Mathematical Investigations 1 and 2), Unit 4 coursework 20 per cent (Mathematical Investigation 3), each
// investigation 4 to 6 hours over 1 to 2 weeks covering two or more areas of study; examination 40 per cent,
// 2 hours, multiple-choice and written response, scientific calculator, one bound reference text. 2026
// timetable: Tuesday 17 November, printed as "3:00 pm" to "5.15pm". Spine: floor and ceiling values with
// interval estimates (family checked free site-wide 7 October 2026), on invented school-trip numbers.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'exam', tag: 'VCE FOUNDATION MATHS', label: 'VCE Foundation Maths help', blurb: 'Foundation Mathematics Units 3 and 4 from the study design: four practical areas of study, three investigations worth 60 per cent, one exam, and the rounding decisions that real problems turn on.' },
  slug: 'vce-foundation-maths-help',
  code: 'vcfm',
  accent: '#630F0F',
  accentRationale: 'VCE Foundation Maths: a deep oxblood, steady and grounded, at least 11 RGB from every site accent and 4.8:1 or better on #EDE7DA',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'VCE Foundation Maths help',
  title: 'VCE Foundation Maths Help | Units 3 and 4 Online',
  description: 'VCE Foundation Maths help online for Victorian students: the four practical areas, three investigations worth 60 per cent, the 2-hour exam, and real-world rounding.',
  ogDescription: 'VCE Foundation Mathematics from the VCAA study design: what Units 3 and 4 cover, how the three investigations and the exam weigh, the 2026 exam date, and when to round up, round down or give an interval.',
  twitterDescription: 'VCE Foundation Maths from the study design: three investigations, one exam, and the rounding real problems turn on.',
  pageName: 'VCE Foundation Maths Help',
  webPageDescription: 'Support for Victorian students taking VCE Foundation Mathematics Units 3 and 4: the four areas of study, the three mathematical investigations and their durations, the examination and its conditions, the 2026 session, and a worked lesson on floor and ceiling values and interval estimates.',
  courseDescription: 'Live online maths tutoring in practical number, data, measurement and financial and everyday mathematics for Victorian VCE Foundation Mathematics students, without completing any School-assessed Coursework.',
  crumbs: [{ name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'VCE Foundation Maths',
  navLinks: [
    { href: '#areas', label: 'Four areas' },
    { href: '#assessment', label: 'Investigations and exam' },
    { href: '#rounding', label: 'Round up or down' },
    { href: '#own', label: 'Your investigations' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Victoria &middot; VCE Foundation Mathematics &middot; Live online',
  h1: 'VCE Foundation Maths help',
  lede: 'Foundation Mathematics is the VCE maths study built around everyday, workplace and community problems. Most of the study score comes from three investigations rather than the exam, so students who can plan, calculate, explain and present a piece of practical maths do well here, whatever their past results in maths.',
  secondaryCta: { href: '#rounding', label: 'See the rounding lesson' },
  wa: 'Hello Modern Age Coders, I would like a free maths class about VCE Foundation Mathematics.',
  heroNote: 'Study design read at source &middot; Practical problems, plain reasoning &middot; After-school lessons in Victorian time',
  spec: [
    ['Study', 'VCE Foundation Mathematics'],
    ['Units', '3 and 4'],
    ['Accredited from', '1 January 2023'],
    ['Investigations', 'Three, worth 60 per cent'],
    ['Exam', '40 per cent, 2 hours'],
    ['Calculator', 'Scientific'],
    ['2026 exam', 'Tuesday 17 November'],
    ['We never', 'Do any investigation']
  ],
  capsuleQ: 'In short',
  capsule: 'VCE Foundation Mathematics Units 3 and 4 apply mathematics to real contexts across four areas of study: algebra, number and structure; data analysis, probability and statistics; discrete mathematics; and space and measurement. Three mathematical investigations make up 60 per cent of the study score (40 in Unit 3, 20 in Unit 4), and a 2-hour examination with a scientific calculator makes up 40 per cent.',

  picks: {
    eyebrow: 'Where to begin',
    h2: 'Three courses for practical maths',
    lede: 'Confident number work first, then data and measurement in real contexts.',
    items: [
      { course: 'algebra-foundations-masterclass', code: 'VCFM / 01', title: 'Algebra foundations', note: 'Formulas, rates and relationships rebuilt step by step, for students whose confidence took a knock earlier.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'VCFM / 02', title: 'Middle school mathematics', note: 'Percentages, ratios, measurement and data, the everyday maths Foundation builds on.' },
      { course: 'statistics-probability-maths-course', code: 'VCFM / 03', title: 'Statistics and probability', note: 'Collecting, presenting and questioning data from community and media contexts.' }
    ]
  },

  sections: [
    {
      id: 'areas', tint: 'tint', eyebrow: 'Inside the study design',
      h2: 'Four practical areas of study',
      lede: 'Taken from the VCE Mathematics Study Design on 7 October 2026. All four areas are completed across Units 3 and 4, with content equivalent to two areas in each unit, developed through contexts from students\' other studies.',
      body: [
        { kind: 'table', caption: 'VCE Foundation Mathematics Units 3 and 4: areas of study', head: ['Area of study', 'What it covers, in the study design\'s terms'], rows: [
          ['Algebra, number and structure', 'Estimation, different forms of numbers and calculations, and algorithmic and computational thinking'],
          ['Data analysis, probability and statistics', 'Collecting, presenting and analysing gathered and provided data from community, work, recreation and media contexts'],
          ['Discrete mathematics', 'Numbers, relationships and formulae applied to analysing and critiquing practical situations'],
          ['Space and measurement', 'The metric system and related measurement in domestic, societal, industrial and commercial contexts']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The study design is clear about the purpose: providing students with the knowledge and skills to solve problems in real contexts "for a range of workplace, personal, further learning, community and global settings". It suits students heading into trades, apprenticeships, TAFE, or work, and students who need maths that makes sense rather than maths that impresses.',
            'The estimation key knowledge is a good example of its practical spirit. It lists interval estimates, rounding, significant figures, leading-digit approximations, floor and ceiling values and percentage error, all of which decide real answers about how many, how much and how sure.'
          ],
          right: [
            'Technology is part of the study, not an extra. Outcome 3 asks students to apply computational thinking and use the numerical, graphical, symbolic and statistical functions of technology in practical situations. Spreadsheets are the natural tool, and a little coding helps students see what a formula is doing.',
            'The study design even suggests investigation contexts, including pandemic data, climate change modelling, financial life stage planning and the operations of a community organisation. Schools choose, but the range shows how wide "practical" is meant to be.'
          ] },
        { kind: 'source', html: 'Read on 7 October 2026: the <a class="ag-inline-link" href="https://www.vcaa.vic.edu.au/curriculum/vce-curriculum/vce-study-designs/foundation-mathematics/vce-foundation-mathematics" rel="noopener" target="_blank">VCAA Foundation Mathematics page</a> and the Mathematics study design it links.' }
      ]
    },
    {
      id: 'assessment', tint: 'deep', eyebrow: 'How the study score is built',
      h2: 'Sixty per cent in three investigations',
      lede: 'Foundation\'s weights, task lengths and exam rules come straight from the study design, and its exam date from the VCAA timetable we checked on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'How Foundation Mathematics is assessed', head: ['What', 'Share', 'Detail'], rows: [
          ['Unit 3 coursework', '40 per cent', 'Mathematical Investigations 1 and 2'],
          ['Unit 4 coursework', '20 per cent', 'Mathematical Investigation 3'],
          ['Every investigation', 'Within those shares', 'Four to six hours across one or two weeks, drawing on at least two areas of study; each area features in one investigation or more'],
          ['Final examination', '40 per cent', 'Two hours of multiple-choice and written questions, with a scientific calculator and one bound reference text']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Each investigation has three parts in the study design: identifying the context and the questions worth asking, investigating and analysing with mathematics and technology, and summarising and interpreting what was found. Marks follow all three, so a page of correct calculations with no explanation earns much less than it could.',
            'Because the investigations carry so much weight, steady work through the year matters more in Foundation than in any other VCE maths study. A student who learns to explain their reasoning plainly in Term 1 benefits in every investigation after.'
          ],
          right: [
            'The 2026 examination is on Tuesday 17 November, in the session the VCAA timetable prints as 3:00 pm to 5.15pm (that page writes the end time with a full stop and no space). It is the last VCE maths exam of the year, which gives Foundation students extra revision weeks.',
            'The exam assumes a scientific calculator, not a CAS, and allows one bound reference text that may be annotated. Building the reference as the year goes, with a worked example for each kind of problem, is one of the most useful habits a Foundation student can form.'
          ] },
        { kind: 'source', html: 'Assessment from the Foundation sections of the study design; the session from the <a class="ag-inline-link" href="https://www.vcaa.vic.edu.au/administration/key-dates/vce-examination-timetable" rel="noopener" target="_blank">2026 VCE examination timetable</a>, accessed 7 October 2026.' }
      ]
    },
    {
      id: 'rounding', tint: 'tint', eyebrow: 'A worked lesson',
      h2: 'Round up, round down, or give a range?',
      lede: 'The study design lists floor and ceiling values and interval estimates beside ordinary rounding. They matter because the context, not the calculator, decides which way an answer should go. Every number below is from an invented school excursion.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Ceiling: round up', p: '130 students travel on 45-seat buses. 130 divided by 45 is 2.89, but 2.89 buses cannot leave the car park. The ceiling is 3 buses, with 5 seats spare.' },
          { h3: 'Floor: round down', p: 'The hall has 130 chairs set in full rows of 8. 130 divided by 8 is 16.25, and a quarter of a row is not a row. The floor is 16 full rows, with 2 chairs left over.' },
          { h3: 'Interval: give a range', p: 'A room measures 12.4 m by 7.8 m to the nearest 0.1 m. Each length could be 0.05 m either way, so the true area lies between 95.71 and 97.73 square metres.' }
        ] },
        { kind: 'table', caption: 'The same division, three different answers (our worked examples)', head: ['Question', 'Calculation', 'Rule', 'Answer', 'Check'], rows: [
          ['How many buses?', '130 / 45 = 2.89', 'Ceiling', '3 buses', '3 x 45 = 135 seats, 5 spare'],
          ['How many packs of 12 name tags?', '130 / 12 = 10.83', 'Ceiling', '11 packs', '11 x 12 = 132 tags, 2 spare'],
          ['How many full rows of 8 chairs?', '130 / 8 = 16.25', 'Floor', '16 rows', '16 x 8 = 128, 2 chairs left'],
          ['What is the room\'s area?', '12.4 x 7.8 = 96.72', 'Interval', '95.7125 to 97.7325 square metres', 'About 1 per cent either side']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Ordinary rounding would give "3 buses" by luck and "11 packs" by luck, but it would also round 16.25 rows to 16 and 2.4 buses to 2, leaving 22 students on the footpath. The question to ask every time is what the leftover part means in the real situation, and then choose the floor, the ceiling or a range.',
            'The interval answer is the most honest. Stating 96.72 square metres suggests precision the measurements do not have; the percentage error of the stated area is about 1.05 per cent above and 1.04 per cent below. That is exactly the kind of reasoning an investigation rewards when it asks how reliable a result is.'
          ],
          right: [
            'Spreadsheets and code both have ceiling and floor functions, and they are worth meeting early. Python\'s math.ceil(130 / 45) gives 3. One trap is worth knowing: Python\'s round() sends 2.5 to 2 and 3.5 to 4 (it rounds halves to the even number), which is why careful students choose the function deliberately.',
            'In the exam, written-response questions often hinge on this choice. A correct calculation followed by the wrong kind of rounding loses the final mark, so we practise stating the rule in words: "rounded up because a part bus is still a bus".'
          ] },
        { kind: 'source', html: 'Estimation key knowledge from the VCE Mathematics Study Design, Foundation Mathematics Units 3 and 4. All scenarios and values are our own, checked in Python on 7 October 2026.' }
      ]
    },
    {
      id: 'own', tint: '', eyebrow: 'The investigations',
      h2: 'Your investigations stay yours',
      lede: 'Investigations are 60 per cent of Foundation Mathematics, and the VCAA accepts them only as the student\'s own work. The points below come from the study design.',
      body: [
        { kind: 'table', caption: 'Coursework, as the VCAA frames it', head: ['Aspect', 'Requirement'], rows: [
          ['Authorship', 'Teachers sign off that work not acknowledged was produced by the student'],
          ['Timing', 'Mostly in class, inside a limited window'],
          ['Length', 'Four to six hours over one or two weeks per investigation, covering two or more areas of study'],
          ['Structure', 'Set the context and questions, investigate and analyse, then summarise and interpret']
        ] },
        { kind: 'p', text: 'We teach the mathematics, the use of spreadsheets and the habit of explaining findings, using practical problems we invent, like the excursion above. We never plan, calculate, write, check or edit any part of a student\'s investigation. A student who has practised the whole cycle on our problems can complete the school\'s investigations with confidence and full ownership.' },
        { kind: 'source', html: 'Study design sections on authentication and Foundation coursework, read 7 October 2026.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Building confidence',
    h2: 'Four rungs through Foundation',
    lede: 'Many Foundation students arrive having lost confidence in maths. The rungs rebuild it in order.',
    table: { caption: 'From shaky number work to a confident investigator', head: ['Stage', 'Rung', 'The sign it is secure'], rows: [
      ['Starting out', '1. Number sense', 'Estimates before calculating and spots an answer that cannot be right'],
      ['Unit 3 early', '2. Rates and measurement', 'Converts units and works with rates without mixing them up'],
      ['Unit 3 investigations', '3. Explaining', 'Writes what each result means for the real situation'],
      ['Unit 4 and the exam', '4. Judging reliability', 'States how accurate an answer is and why']
    ] },
    left: { h3: 'If maths has always felt hard', ps: [
      'Foundation is designed for real contexts, which often suits students who struggled with abstract maths. Starting from a situation they care about makes the numbers mean something.',
      'Small, regular wins matter more than long sessions. One practical problem done well each lesson rebuilds confidence quickly.'
    ] },
    right: { h3: 'After Foundation', ps: [
      'The habits here carry straight into apprenticeships, TAFE and work, where estimation and checking are daily tasks.',
      'Students who discover they enjoy data can look at our <a class="ag-inline-link" href="/vce-general-maths-tutoring">VCE General Maths</a> page for the next step in statistics.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for Foundation students',
    lede: 'Grouped by the areas of study they support. Each card opens a full syllabus.',
    bands: [
      { num: 'I', h3: 'Number and algebra', sub: 'Confidence first', courses: [
        { code: 'VCFM / NA / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Formulas and relationships, one clear step at a time.' },
        { code: 'VCFM / NA / 02', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Speed calculation', blurb: 'Mental methods that make estimation quick and reliable.' },
        { code: 'VCFM / NA / 03', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school mathematics', blurb: 'Percentages, ratios and measurement, revisited properly.' }
      ] },
      { num: 'II', h3: 'Data and measurement', sub: 'Practical contexts', courses: [
        { code: 'VCFM / DM / 01', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Collecting and questioning real data.' },
        { code: 'VCFM / DM / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school mathematics', blurb: 'Senior-years practical maths across every area.' },
        { code: 'VCFM / DM / 03', slug: 'data-and-ai-analytics-for-non-programmers-course', title: 'Data and AI for non-programmers', blurb: 'Spreadsheet-style analysis without heavy code.' }
      ] },
      { num: 'III', h3: 'Technology', sub: 'Outcome 3 in practice', courses: [
        { code: 'VCFM / TE / 01', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Simple programs that make formulas and rounding visible.' },
        { code: 'VCFM / TE / 02', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'For students who want to automate their calculations.' },
        { code: 'VCFM / TE / 03', slug: 'mental-maths-mastery-kids', title: 'Mental maths mastery', blurb: 'Quick number facts, rebuilt for students who never quite had them.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Foundation lessons after school',
    lede: 'Your tutor is in India. Victorian time runs 4.5 hours ahead of India in winter and 5.5 hours ahead in summer, when daylight saving applies from 4 October 2026 to 4 April 2027 (IANA time zone data), so a 4 pm lesson in Victoria begins at 10.30 am for the tutor.',
    slots: [
      { time: 'Weekday after school', l: 'Steady weekly progress through both units.' },
      { time: 'Weekend morning', l: 'Longer practice on investigation skills.' },
      { time: 'School holidays', l: 'Exam revision before mid-November.' }
    ],
    cells: [
      { h3: 'Context first', p: 'Every topic starts from a real situation, then the maths.' },
      { h3: 'Explain every answer', p: 'A sentence about what the number means, every time.' },
      { h3: 'Spreadsheets and code', p: 'Technology used to check and explore, as Outcome 3 asks.' },
      { h3: 'Groups kept small', p: 'Fifteen to twenty students at one level, encouraged to ask anything.' },
      { h3: 'One-to-one sessions', p: 'For students who want a quieter pace.' },
      { h3: 'No outcome guarantees', p: 'We do not predict study scores or ATARs; progress is earned by the student.' }
    ]
  },

  projectsH2: 'Things our students have built',
  projectsLede: 'Made in their own time, not for school assessment; there are plenty more in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Just as families and students posted them on Google.',

  fees: {
    h2: 'Fees',
    lede: 'Foundation lessons are charged monthly in US dollars, at the same rate for any family outside India, with nothing to pay to begin and no lock-in.',
    free: ['A full lesson with a tutor', 'A kind, honest view of the gaps', 'No card details'],
    group: ['Fifteen to twenty students at one level', 'The same tutor each week', 'Practice talked through together', 'A certificate at the end'],
    one: ['One tutor, one student', 'At the student\'s own pace', 'Often chosen to rebuild confidence']
  },

  faq: {
    eyebrow: 'Questions about Foundation',
    h2: 'Foundation questions we often hear',
    items: [
      { q: 'What is VCE Foundation Mathematics?', a: 'It is the VCE mathematics study focused on practical problems in workplace, personal, further learning, community and global settings. Units 3 and 4 cover four areas of study and are assessed mainly through three mathematical investigations.' },
      { q: 'How much do the investigations count?', a: 'School-assessed Coursework contributes 60 per cent (40 per cent from Investigations 1 and 2 in Unit 3, 20 per cent from Investigation 3 in Unit 4), and the end-of-year examination contributes 40 per cent.' },
      { q: 'When is the 2026 Foundation Maths exam?', a: 'The VCAA timetable lists Foundation Mathematics on Tuesday 17 November 2026, in the 3:00 pm session ending at 5:15 pm. The examination itself is 2 hours.' },
      { q: 'Which calculator is allowed?', a: 'The study design says student access to a scientific calculator is assumed in the examination, and one bound reference text, which may be annotated, may be brought in.' },
      { q: 'What are floor and ceiling values?', a: 'The floor of a number is the largest whole number not above it; the ceiling is the smallest whole number not below it. The floor of 16.25 is 16 and the ceiling of 2.89 is 3. Real problems decide which one makes sense.' },
      { q: 'How long is each investigation?', a: 'The study design sets each mathematical investigation at 4 to 6 hours over 1 to 2 weeks, addressing content from two or more areas of study.' },
      { q: 'Is Foundation Maths a good choice for me?', a: 'It suits students who want practical, everyday maths for work, TAFE or apprenticeships. Course and pathway choices are a conversation with your school and family; we can help with the maths once you have chosen.' },
      { q: 'Will you help with my investigation?', a: 'We teach the maths and the investigation process with our own problems, and never plan, calculate, write, check or edit any part of a student\'s investigation.' },
      { q: 'Is online tutoring suitable for students who find maths hard?', a: 'Often, yes. A patient tutor, a small group or one-to-one setting, and problems from real life tend to rebuild confidence. The free lesson is a low-risk way to find out.' },
      { q: 'When do lessons run?', a: 'Late afternoon in Victoria suits most students and sits within our tutors\' working day. The weekly time is agreed after the free lesson.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'Where to go next',
    lede: 'The other VCE maths studies and our wider maths help.',
    items: [
      { href: '/vce-general-maths-tutoring', label: 'VCE General Maths tutoring', p: 'The next step for students who enjoy data and models.' },
      { href: '/vce-maths-methods-tutoring', label: 'VCE Maths Methods tutoring', p: 'Functions and calculus, for comparison.' },
      { href: '/online-maths-tutoring-australia', label: 'Online maths tutoring in Australia', p: 'Maths support for every age, from primary up.' },
      { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Coding and AI classes in Melbourne', p: 'Coding and AI for Victorian students who prefer hands-on learning.' },
      { href: '/coding-classes-cost-australia', label: 'Coding classes cost in Australia', p: 'What lessons cost per term, in plain numbers.' },
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'Our main page for coding across Australia.' }
    ]
  },

  start: {
    h2: 'Start with a free Foundation lesson',
    lede: 'Tell us which area of study feels hardest, or simply that maths has never clicked. The free lesson starts from a practical problem and goes at your pace.',
    readFirst: 'Prefer to look around first? The <a class="ag-inline-link" href="/course-atlas">course atlas</a> lists every syllabus, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> walks through a lesson, and our <a class="ag-inline-link" href="/online-maths-tutoring-australia">Australian maths tutoring page</a> covers other year levels.',
    note: 'WhatsApp reaches us fastest. +91 is India\'s dialling code, where our tutors are; we do not have a Victorian office.',
    formNote: 'No card and no obligation. One reply to set up the lesson.'
  },

  footer: {
    cols: [
      { h4: 'Australia', links: [
        { href: '/online-maths-tutoring-australia', label: 'Maths tutoring in Australia' },
        { href: '/vce-general-maths-tutoring', label: 'VCE General Maths' },
        { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne and Victoria' },
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/vce-maths-methods-tutoring', label: 'VCE Maths Methods' },
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'We teach the maths; the investigations stay the student\'s own'
  },

  personalityCss: `
.ag-root.ag-vcfm .ag-hero-grid { gap: clamp(1rem, 3vw, 2.4rem); }
.ag-root.ag-vcfm .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-vcfm .ag-capsule { border-left-width: 6px; }
.ag-root.ag-vcfm .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-vcfm .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-vcfm .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-vcfm .ag-spec dt { letter-spacing: 0.1em; }
.ag-root.ag-vcfm .ag-slots { gap: 1.1rem; }
`,

  dossier: {
    curriculumAuthority: 'Victorian Curriculum and Assessment Authority (VCAA). VCE Mathematics Study Design, read on 7 October 2026: Units 1 to 4 accredited from 1 January 2023; Foundation Mathematics Units 3 and 4 areas of study Algebra, number and structure; Data analysis, probability and statistics; Discrete mathematics; Space and measurement. Unit 3 coursework 40 per cent (Mathematical Investigations 1 and 2), Unit 4 coursework 20 per cent (Mathematical Investigation 3), each 4 to 6 hours over 1 to 2 weeks; examination 40 per cent, 2 hours, scientific calculator, one bound reference text. 2026 timetable: Tuesday 17 November, 3:00 pm to 5:15 pm (printed "5.15pm").',
    localProject: 'Floor and ceiling values with interval estimates on an invented excursion: 130 students on 45-seat buses need ceiling(2.89) = 3 buses (5 seats spare); packs of 12 tags need ceiling(10.83) = 11 (2 spare); 130 chairs in rows of 8 give floor(16.25) = 16 full rows (2 left); a 12.4 m by 7.8 m room measured to 0.1 m has area between 95.7125 and 97.7325 square metres against 96.72 stated, about 1.05 per cent above and 1.04 per cent below. Python round() rounds halves to even (2.5 to 2, 3.5 to 4). Checked in Python on 7 October 2026.',
    requiredMentions: ['Foundation Mathematics', 'Tuesday 17 November', 'floor and ceiling values', 'Mathematical Investigation 3', 'leading-digit approximations', 'workplace, personal, further learning, community and global settings', 'scientific calculator', '45-seat buses', 'financial life stage planning'],
    sources: [
      { claim: 'VCAA, VCE Foundation Mathematics study design page: accreditation from 2023 and the Mathematics study design file.', url: 'https://www.vcaa.vic.edu.au/curriculum/vce-curriculum/vce-study-designs/foundation-mathematics/vce-foundation-mathematics' },
      { claim: 'VCE Mathematics Study Design: Foundation Mathematics Units 3 and 4 areas of study, estimation key knowledge, investigations, weights and the examination.', url: 'https://www.vcaa.vic.edu.au/sites/default/files/2025-10/2023MathematicsSD.docx' },
      { claim: 'VCAA, 2026 VCE examination timetable: Foundation Mathematics on Tuesday 17 November, 3:00 pm to 5.15pm as printed.', url: 'https://www.vcaa.vic.edu.au/administration/key-dates/vce-examination-timetable' },
      { claim: 'IANA time zone database (Australia/Melbourne and Asia/Kolkata): daylight saving from 4 October 2026 to 4 April 2027.', url: 'https://www.iana.org/time-zones' },
      { claim: 'Python documentation behaviour checked by running round(2.5) and round(3.5) and math.ceil(130 / 45) in Python 3 on 7 October 2026.', url: 'https://docs.python.org/3/library/functions.html#round' }
    ],
    rejectedClaims: [
      'Any advice on whether a student should choose Foundation Mathematics: subject choice belongs to the student, family and school; the page says so.',
      'Any claim about Foundation Mathematics scaling or ATAR contribution: not quoted, and nothing is promised.',
      'Question counts or marks in the examination: the examination specifications were not read.',
      'Any affiliation with the VCAA: none, stated on the page.',
      'Any offer to plan, calculate, write, check or edit an investigation: refused, stated on the page.'
    ]
  }
};
