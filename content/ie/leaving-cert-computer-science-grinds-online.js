'use strict';
// Leaving Cert Computer Science grinds online (ag- door, Ireland cluster,
// Phase 1). "Grinds" is the Irish word for private tuition. Spine: the subject
// as its specifications set it out, read at curriculumonline.ie and gov.ie on
// 16 September 2026. Current specification (for examination to June 2028):
// "designed for 180 hours of class contact time"; three strands, "Practices
// and principles, Core concepts and Computer science in practice"; four
// applied learning task contexts, "Interactive information systems,
// Analytics, Modelling and simulation, and Embedded systems"; assessment "an
// end-of-course examination (70%) and coursework (30%)", the coursework "One
// computational artefact with report", Higher and Ordinary level, the same
// brief for both; the specification "does not require a specific language"
// but Python is assessed in the exam and "Python and Javascript in the
// coursework assessment"; coursework "must be carried out individually", a
// report "in HTML format, including video evidence of the final artefact in
// operation", about 10 weeks (the guidelines also say eight in one place).
// New specification (introduced from September 2027, Tranche 3): a Coursework
// Project worth 40 percent on a common brief and a 60 percent final
// examination; "up to 25 hours to complete the Coursework Project"; Python in
// the final examination; AI outcomes such as "1.11. explain factors
// empowering AI systems". The 2026 Leaving Certificate ran 3 to 23 June. The
// Computer Science paper date and candidate numbers were NOT verified (the SEC
// site was unreachable) and are not given. No grade, points or CAO promise.

module.exports = {
  cluster: 'ag',
  clusterName: 'Ireland',
  slug: 'leaving-cert-computer-science-grinds-online',
  code: 'lcg',
  accent: '#29396C',
  accentRationale: 'Leaving Cert Computer Science grinds: a deep exam-paper navy from the solver, separated from both Irish greens and every other Ireland preview page',
  pageType: 'market',
  market: { name: 'Ireland', iso: 'IE', dial: '+353', lang: 'en-IE', locale: 'en_IE', geoRegion: 'IE', brandTag: 'Ireland', phonePlaceholder: '87 123 4567', minDigits: 7 },
  routeLabel: 'Leaving Cert Computer Science grinds online',
  title: 'Leaving Cert Computer Science Grinds Online | Live Python',
  description: 'Leaving Cert Computer Science grinds online: live Python, algorithms and coursework skills for the 70/30 exam and project, taught one to one or in small groups.',
  ogDescription: 'Live online grinds for Leaving Certificate Computer Science: the three strands, the Python exam, the coursework rules and the changes coming in 2027, taught for understanding.',
  twitterDescription: 'Leaving Cert Computer Science grinds, live online: Python, algorithms and coursework skills. First class free.',
  pageName: 'Leaving Cert Computer Science Grinds Online',
  webPageDescription: 'Live online grinds for Leaving Certificate Computer Science students in Ireland, built around the subject\'s specification, its 70 percent exam and 30 percent coursework, and the redeveloped subject from 2027.',
  courseDescription: 'Live online tuition for Leaving Certificate Computer Science students: Python fluency, algorithms, data and the skills the coursework assumes, taught one to one or in small groups.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Ireland', href: '/coding-classes-in-ireland' }],
  crumbLabel: 'Leaving Cert Computer Science grinds',
  navLinks: [
    { href: '#subject', label: 'The subject' },
    { href: '#coursework', label: 'The coursework' },
    { href: '#ladder', label: 'Fifth and Sixth Year' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Ireland &middot; Leaving Certificate &middot; Live online',
  h1: 'Leaving Cert Computer Science grinds online',
  lede: 'Leaving Certificate Computer Science is unusual among Irish subjects: part of the marks come from a program the student builds and documents alone, and the written exam assesses Python. A grind for it therefore has two jobs. It has to build the fluency that lets a student read, trace and write code under exam conditions, and it has to build the skills the coursework assumes, without ever touching the coursework itself. This page sets out the subject as its specification describes it: the strands, the weighting, the languages assessed and the coursework rules. It also covers the redeveloped subject that reaches schools from September 2027. And it explains how our live online grinds for Fifth and Sixth Years work, one to one or in small groups, taught by a specialist at an Irish hour. We make no promise about grades or points. What we promise is a student who understands their code.',
  secondaryCta: { href: '#subject', label: 'See the subject in brief' },
  wa: 'Hello Modern Age Coders, I would like a free first class for Leaving Cert Computer Science grinds.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Python taught for understanding',
  spec: [
    ['For', 'Fifth and Sixth Year'],
    ['Subject', 'Leaving Cert Computer Science'],
    ['Exam', 'Python, Higher and Ordinary'],
    ['Coursework', 'Skills taught, never written for you'],
    ['Format', 'Live, one to one or small group'],
    ['Teacher', 'The same specialist each week'],
    ['Hours', 'Irish evenings and weekends'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Leaving Certificate Computer Science is designed for 180 hours of class contact time and, under the current specification, assessed by an end-of-course examination worth 70 percent and coursework worth 30 percent: one computational artefact with a report, done individually. Python is the language assessed in the exam, Python and JavaScript in the coursework. From September 2027 a redeveloped subject moves to a 60 percent exam and a 40 percent coursework project. Our grinds build what both parts reward: fluent, well-understood Python, algorithms and data handled with confidence, and the testing and reporting habits a project needs. We never write or edit coursework. Classes run live online, one to one or in groups of five to ten; the first class is free, then USD 150 a month one to one or USD 100 in a group.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses that match the subject\'s demands',
    lede: 'Python for the exam, problem solving for the algorithms, and web development for the JavaScript side of the coursework. Each card opens its syllabus.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'LCCS / 01', title: 'Python for Teens', note: 'The language the exam assesses, taught until reading, tracing and writing it are second nature.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'LCCS / 02', title: 'Problem Solving for Teens', note: 'Algorithms reasoned out and explained in words, the way a written exam asks for them.' },
      { course: 'full-stack-web-development-teens-masterclass', code: 'LCCS / 03', title: 'Full Stack Web Development for Teens', note: 'JavaScript and the web, the other language the current coursework assesses.' }
    ]
  },

  sections: [
    {
      id: 'subject', tint: 'tint', eyebrow: 'The subject',
      h2: 'Leaving Cert Computer Science, as the specifications set it out',
      lede: 'Two specifications matter to students now: the current one, which applies for examination up to June 2028, and the redeveloped one, for introduction in schools from September 2027. The details below are quoted or closely paraphrased from both.',
      body: [
        { kind: 'table', caption: 'The current and the redeveloped Leaving Certificate Computer Science', head: ['', 'Current specification', 'Redeveloped specification'], rows: [
          ['When', 'For examination to June 2028', 'For introduction in September 2027'],
          ['Hours', 'Designed for 180 hours of class contact time', 'Designed for a minimum of 180 hours of class contact time'],
          ['Assessment', 'An end-of-course examination (70%) and coursework (30%)', 'A final examination (60%) and a Coursework Project (40%) on a common brief'],
          ['Levels', 'Higher and Ordinary, with the same coursework brief for both', 'Higher and Ordinary'],
          ['Languages', 'Does not require a specific language; Python is assessed in the exam, and Python and Javascript in the coursework', 'Python is the language assessed in the final examination'],
          ['Coursework time', 'About ten school weeks for one computational artefact with report', 'Students may need up to 25 hours to complete the Coursework Project']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The current specification has three strands: Practices and principles, Core concepts, and Computer science in practice. The third is taught through four applied learning tasks, set in the contexts of Interactive information systems, Analytics, Modelling and simulation, and Embedded systems.',
            'The redeveloped specification adds learning outcomes on artificial intelligence, among them "1.11. explain factors empowering AI systems", and asks students to acknowledge their sources, including the use of AI.'
          ],
          right: [
            'The change is part of the redevelopment of the Senior Cycle. Computer Science is in the third group of subjects, introduced to all schools in 2027, and the new assessment components are worth at least 40 percent of the marks and externally assessed by the State Examinations Commission.',
            'For a student in Fifth Year now, the practical point is simple: check with the school which specification your class will sit, because the weighting and the coursework format differ.'
          ] },
        { kind: 'source', html: 'Sources, read 16 September 2026: <a class="ag-inline-link" href="https://www.curriculumonline.ie/getmedia/cff6eb86-9ff8-4e68-abf9-e42ca637492d/LC-Computer-Science-specification-updated.pdf" rel="noopener" target="_blank">LCCS specification (current)</a>; <a class="ag-inline-link" href="https://www.curriculumonline.ie/senior-cycle/senior-cycle-subjects/computer-science/structure-of-leaving-certificate-computer-science/" rel="noopener" target="_blank">Structure of Leaving Certificate Computer Science</a>; <a class="ag-inline-link" href="https://www.curriculumonline.ie/getmedia/b5e9833d-6842-4c85-b46e-a0897b72891e/CS-Coursework-Assessment-Guidelines-en.pdf" rel="noopener" target="_blank">Coursework assessment guidelines (August 2023)</a>; <a class="ag-inline-link" href="https://www.curriculumonline.ie/getmedia/e794b22c-902f-4a8d-babb-fc7610454198/SC-Computer-Science-ENG-INT.pdf" rel="noopener" target="_blank">Computer Science specification for introduction in 2027</a>; <a class="ag-inline-link" href="https://www.gov.ie/en/department-of-education/publications/senior-cycle-redevelopment-what-it-means-for-me/" rel="noopener" target="_blank">Senior Cycle redevelopment: what it means for me</a>; <a class="ag-inline-link" href="https://www.gov.ie/en/department-of-education/publications/senior-cycle-redevelopment/" rel="noopener" target="_blank">Senior Cycle redevelopment</a>. The current coursework guidelines give ten school weeks in one place and eight in another.' }
      ]
    },
    {
      id: 'coursework', tint: 'deep', eyebrow: 'The coursework',
      h2: 'One artefact, one report, and the student\'s own work',
      lede: 'The coursework is where a grind has to be most careful. It is also where understanding pays off most.',
      body: [
        { kind: 'three', cells: [
          { h3: 'What is submitted', p: 'Under the current specification, one computational artefact with a report. The guidelines ask for the report in HTML format, including video evidence of the final artefact in operation, and the State Examinations Commission sets the brief towards the end of the first term of the course\'s second year.' },
          { h3: 'Whose work it is', p: 'The specification says the coursework "must be carried out individually", and the guidelines say only work which is the student\'s own can be accepted. Irish guidance treats AI-generated material as material the student did not produce.' },
          { h3: 'What a grind can do', p: 'Teach the skills the brief will need, on other examples: planning a program, testing it, handling data, building a simple interface, and describing honestly what a program does and does not do.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The line we never cross',
          left: [
            'We never write, edit, debug or review a student\'s actual coursework artefact or report, and we do not suggest code for it. During the coursework weeks our lessons move to different examples of the same ideas.',
            'This is not only about rules. A student who builds the artefact alone, from skills they own, can write the report about it truthfully and explain every design choice.'
          ],
          rightH3: 'What the four contexts ask of a student',
          right: [
            'Interactive information systems need a working interface and stored data; Analytics needs data read, cleaned and interpreted; Modelling and simulation need a model whose assumptions are stated; Embedded systems need code that talks to hardware.',
            'Our lessons practise each kind of task on separate projects across Fifth Year, so no brief arrives as a surprise. More on AI and your own work is on <a class="ag-inline-link" href="/understand-the-code-dont-copy-paste-ireland">understanding the code instead of copy-pasting</a>.'
          ] }
      ]
    },
    {
      id: 'exam', tint: 'tint', eyebrow: 'The written exam',
      h2: 'What exam practice looks like in a Computer Science grind',
      lede: 'A written paper tests whether a student can reason about code without a computer to check it. That is a skill, and it is practised.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Trace before you run', p: 'Students read short Python programs and write down exactly what they print, then check. The habit of predicting code is the single best preparation for a paper that cannot be run.' },
          { h3: 'Say it in words', p: 'Algorithms are explained in plain sentences as well as in code: what a sort does, why a search stops, what happens with an empty list. Written answers reward clear explanations.' },
          { h3: 'Write under time', p: 'Short functions written by hand against the clock, then compared with the teacher\'s version line by line, including the edge cases that cost marks.' }
        ] },
        { kind: 'p', mt: true, html: 'The 2026 Leaving Certificate written examinations ran from 3 June to 23 June 2026. We do not quote the date of any individual paper here: the State Examinations Commission publishes the timetable, and students should take it from there. Nothing on this page is a prediction of exam content or results.' }
      ]
    },
    {
      id: 'grinds', tint: '', eyebrow: 'Good grinds',
      h2: 'What a good Computer Science grind looks like, from any provider',
      lede: 'Four things worth asking before booking Computer Science grinds, with our own answers.',
      body: [
        { kind: 'table', caption: 'Four questions for any Computer Science grind', head: ['Question', 'Why ask it', 'Our answer'], rows: [
          ['Is it live, with the same teacher?', 'Recorded lessons cannot notice where a student is stuck.', 'Live every time, with one specialist through the year.'],
          ['Does it teach understanding or answers?', 'A paper that cannot be run rewards reasoning, not memory.', 'Every program is predicted and explained before it is written.'],
          ['How does it handle the coursework?', 'The coursework must be the student\'s own work.', 'Skills on other examples only; the artefact is never touched.'],
          ['What does it promise?', 'No one can promise a grade or CAO points.', 'We promise a student who understands their code, and nothing we cannot keep.']
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Fifth and Sixth Year',
    h2: 'A two-year plan around the subject\'s calendar',
    lede: 'The plan fits the current specification\'s timing, with the coursework brief arriving towards the end of the first term of the second year. Each student\'s plan is adjusted to their school.',
    table: { caption: 'A typical two years of Computer Science grinds', head: ['When', 'Focus', 'By the end the student can'], rows: [
      ['Fifth Year, autumn', 'Python fluency', 'Read, trace and write Python without looking things up'],
      ['Fifth Year, spring', 'Algorithms and data', 'Explain and code sorts, searches and data handling'],
      ['Fifth Year, summer term', 'Project skills', 'Plan, test and document a small program of their own'],
      ['Sixth Year, first term', 'Practice on other briefs', 'Handle each of the four coursework contexts on separate examples'],
      ['Sixth Year, after the brief', 'Exam practice', 'Answer written questions on code and algorithms under time']
    ] },
    left: { h3: 'Starting late', ps: [
      'Students who start in Sixth Year skip nothing, but move faster through the first rungs and spend more time on tracing and written answers. One-to-one lessons usually suit a late start best.',
      'Students who have not yet chosen the subject can begin with <a class="ag-inline-link" href="/best-online-coding-classes-ireland">a general coding class</a> in the Junior Cycle or Transition Year.'
    ] },
    right: { h3: 'During the coursework weeks', ps: [
      'While the student builds the artefact, grinds switch entirely to exam practice and to different example projects, so there is no question about whose work the coursework is.',
      'After the coursework is submitted, the final months go to written practice.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Eight live courses that support Leaving Cert Computer Science',
    lede: 'The courses our Computer Science students draw on, grouped by what they support. The free first class decides the mix.',
    bands: [
      { num: 'I', h3: 'For the exam', sub: 'Python, algorithms and reasoning', courses: [
        { code: 'LCCS / EXAM / 01', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'The language of the paper, learned to fluency.' },
        { code: 'LCCS / EXAM / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem Solving for Teens', blurb: 'Algorithms and data structures, reasoned out.' },
        { code: 'LCCS / EXAM / 03', slug: 'maths-through-coding', title: 'Maths Through Coding', blurb: 'The mathematics that algorithms quietly rely on.' }
      ] },
      { num: 'II', h3: 'For coursework skills', sub: 'Practised on separate projects, never on the artefact', courses: [
        { code: 'LCCS / SKILL / 01', slug: 'full-stack-web-development-teens-masterclass', title: 'Full Stack Web Development for Teens', blurb: 'Interfaces, stored data and JavaScript.' },
        { code: 'LCCS / SKILL / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data Science for Teens', blurb: 'Reading, cleaning and interpreting data.' },
        { code: 'LCCS / SKILL / 03', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub for Teens', blurb: 'A clear history of the student\'s own work.' }
      ] },
      { num: 'III', h3: 'For the redeveloped subject', sub: 'AI outcomes and deeper projects', courses: [
        { code: 'LCCS / NEXT / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and Machine Learning for Teens', blurb: 'How AI systems learn, and what makes them work.' },
        { code: 'LCCS / NEXT / 02', slug: 'complete-app-development-masterclass-for-teens', title: 'App Development for Teens', blurb: 'A complete app, built and documented.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How the grinds run',
    h2: 'Live grinds on Irish evenings and weekends',
    lede: 'Lessons are live, taught from India, at a weekly hour set in Irish time. Irish time runs five and a half hours behind India time in winter and four and a half in summer, so Senior Cycle students usually meet their teacher in the early evening or at the weekend.',
    slots: [
      { time: 'Early evening', l: 'After study, on school days, Irish time.' },
      { time: 'Saturday', l: 'Longer sessions for written practice.' },
      { time: 'Sunday', l: 'For students with busy weekday evenings.' }
    ],
    cells: [
      { h3: 'A free first class', p: 'The student traces and explains some Python, and the teacher says honestly where they stand.' },
      { h3: 'One to one', p: 'The usual choice for Sixth Years: one specialist, one student, the whole hour.' },
      { h3: 'Small groups', p: 'Five to ten Senior Cycle students at the same level, often from several schools.' },
      { h3: 'Specialist teachers', p: 'Teachers who program, not generalists covering the subject for a term.' },
      { h3: 'Coursework kept separate', p: 'Skills on other projects only; the student\'s artefact is never seen or touched.' },
      { h3: 'Progress you can see', p: 'Parents hear what the student can now do, in plain terms, as the months go by.' }
    ]
  },

  projectsH2: 'Projects our students built, outside any coursework',
  projectsLede: 'Four live projects by our students. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Copied from Google exactly. We do not write or pay for reviews.',

  fees: {
    h2: 'Fees for Computer Science grinds',
    lede: 'Charged monthly in US dollars, the one rate we use outside India. No registration fee, and you can stop at the end of any month.',
    free: ['A first class with a specialist', 'An honest assessment of the starting point', 'No card needed'],
    group: ['Five to ten Senior Cycle students', 'The same teacher each week', 'Written practice every week', 'A certificate at the end'],
    one: ['A specialist for one student', 'Paced to the school calendar', 'The usual choice for Sixth Year']
  },

  faq: {
    eyebrow: 'Questions from Senior Cycle families',
    h2: 'What students and parents ask about Computer Science grinds',
    items: [
      { q: 'How is Leaving Cert Computer Science assessed?', a: 'Under the current specification, by an end-of-course examination worth 70 percent and coursework worth 30 percent. The redeveloped subject introduced from September 2027 moves to a 60 percent examination and a 40 percent Coursework Project.' },
      { q: 'Which programming language is assessed?', a: 'The current specification does not require a specific language, but Python is assessed in the exam, and Python and JavaScript in the coursework. In the redeveloped subject, Python is assessed in the final examination.' },
      { q: 'How many hours is the course?', a: 'The specification is designed for 180 hours of class contact time, and the redeveloped one for a minimum of 180 hours.' },
      { q: 'Will you help with my coursework?', a: 'We teach the skills the coursework needs on different examples, before and after it. We never write, edit, debug or review the artefact or the report itself, because it must be the student\'s own individual work.' },
      { q: 'Can you guarantee a H1 or CAO points?', a: 'No, and no honest provider can. We promise a student who understands their code and has practised the kinds of task the subject sets.' },
      { q: 'Are online grinds as good as in person?', a: 'For Computer Science, often better: the teacher and student share one screen, the code is on it, and every lesson can be recorded in the student\'s own notes.' },
      { q: 'When should grinds start?', a: 'Fifth Year autumn is ideal. A Sixth Year start works too, usually one to one, with more time on tracing and written answers.' },
      { q: 'What do Computer Science grinds cost?', a: 'The first class is free. One-to-one grinds are USD 150 a month and a group place is USD 100 a month, both charged in US dollars, with no registration fee.' },
      { q: 'When are lessons, in Irish time?', a: 'At a weekly hour set in the free first class, usually early evening or at the weekend. Irish time is five and a half hours behind India time in winter and four and a half in summer.' },
      { q: 'What happens after I send the form?', a: 'We ring back at a suitable Irish hour to arrange the free first class. Nothing is charged unless the student continues.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for Senior Cycle students',
    lede: 'Related pages for the subject and beyond.',
    items: [
      { href: '/understand-the-code-dont-copy-paste-ireland', label: 'Understand the code, do not copy-paste', p: 'AI and your own work, in Irish guidance.' },
      { href: '/best-online-coding-classes-ireland', label: 'Best online coding classes in Ireland', p: 'Where Computer Science sits in Irish schools.' },
      { href: '/ai-and-machine-learning-classes-in-ireland', label: 'AI and machine learning classes in Ireland', p: 'For students drawn to the AI side of the new subject.' },
      { href: '/coding-classes-in-ireland', label: 'Coding classes in Ireland', p: 'The national page.' },
      { href: '/how-to-read-code', label: 'How to read code', p: 'Tracing, the core exam skill.' },
      { href: '/best-coding-class-in-the-world', label: 'The best coding class in the world', p: 'Eight tests for any class, grinds included.' }
    ]
  },

  start: {
    h2: 'Book a free Computer Science class',
    lede: 'Leave a number and we will ring at a suitable Irish hour. In the first class a specialist works through some Python with the student and tells you plainly what to work on first.',
    readFirst: 'To read first: the <a class="ag-inline-link" href="/courses">course pages</a> list every syllabus, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains the method, and <a class="ag-inline-link" href="/how-to-read-code">how to read code</a> shows the tracing skill the exam rewards.',
    note: 'WhatsApp from an Irish phone is free and usually quickest. The number is Indian; we have no Irish office or classroom.',
    formNote: 'No card and no commitment. One call to book.'
  },

  footer: {
    cols: [
      { h4: 'Senior Cycle', links: [
        { href: '/understand-the-code-dont-copy-paste-ireland', label: 'Understand the code' },
        { href: '/best-online-coding-classes-ireland', label: 'Best online classes, Ireland' },
        { href: '/ai-and-machine-learning-classes-in-ireland', label: 'AI classes in Ireland' },
        { href: '/coding-classes-in-ireland', label: 'Coding classes in Ireland' }
      ] },
      { h4: 'Skills', links: [
        { href: '/how-to-read-code', label: 'Read code' },
        { href: '/how-to-debug-code', label: 'Debug code' },
        { href: '/how-to-think-like-a-programmer', label: 'Think like a programmer' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Computer Science grinds on Irish time'
  },

  personalityCss: `
.ag-root.ag-lcg .ag-hero-grid { gap: clamp(1.2rem, 3vw, 2.6rem); }
.ag-root.ag-lcg .ag-hero h1 { letter-spacing: -0.018em; }
.ag-root.ag-lcg .ag-capsule { border-left-width: 5px; }
.ag-root.ag-lcg .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-lcg .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-lcg .ag-band-head h3 { letter-spacing: -0.005em; }
.ag-root.ag-lcg .ag-spec dt { letter-spacing: 0.12em; }
.ag-root.ag-lcg .ag-slots { gap: 1.15rem; }
`,

  mustMention: ['Practices and principles', 'Core concepts', 'Computer science in practice', 'Interactive information systems', 'Embedded systems', 'An end-of-course examination (70%) and coursework (30%)', 'Python and Javascript', 'video evidence', 'up to 25 hours', '1.11. explain factors empowering AI systems', '3 June to 23 June 2026']
};
