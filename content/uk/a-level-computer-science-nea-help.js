'use strict';
// A-level Computer Science coursework help (ag- exam door, UK cluster Phase 1 preview).
// Board facts read on 20 September 2026: AQA 7517 scheme of assessment (Paper 1 raw 100 scaled 150,
// Paper 2 raw 100 scaled 150, NEA raw 75 scaled 75, total scaled 375; AQA's NEA guidance allocates 42 of
// the 75 marks to the technical solution); OCR H446 specification at a glance (Component 01 Computer
// systems 140 marks, 2 hours 30 mins, 40%; Component 02 Algorithms and programming 140 marks, 2 hours
// 30 mins, 40%; Component 03 Programming project 70 marks, non-exam assessment, 20%, split analyse a
// problem 10 marks, design 15, develop and test 25, evaluate and document 20). AI rules quoted from
// OCR's own guidance for A Level Computer Science NEA: AI may support debugging and suggest methods if
// the candidate shows how the suggestion was adapted; misuse includes using or modifying AI responses
// without acknowledgement, disguising AI use and using it for substantial sections; "only independent
// candidate work should be credited when marking the NEA"; a non-editable copy of AI content must be
// kept. JCQ's own pages returned 403 and are not quoted. Spine: draw the states before you code, a
// state-machine design habit (lesson family checked free site-wide on 20 September 2026).
// We never write, edit or supply any part of a candidate's coursework.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'A LEVEL NEA', label: 'A-level Computer Science coursework', blurb: 'What AQA and OCR actually mark, what the AI rules allow, and how to design a project that can be finished.' },
  slug: 'a-level-computer-science-nea-help',
  code: 'nea',
  accent: '#6F2183',
  accentRationale: 'A-level NEA: a deep violet from the solver (7.67:1 on every paper tint), clearly separated from the Harrow violet by distance',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'A-level Computer Science coursework help',
  title: 'A-Level Computer Science NEA Help | AQA 7517 and OCR H446',
  description: 'Help with the A-level Computer Science project: what AQA and OCR mark, how to scope and design it, and the AI rules. We never write any of your coursework.',
  ogDescription: 'The A-level Computer Science NEA explained: AQA 7517 and OCR H446 mark allocations, a design habit that prevents half-finished projects, and what the AI rules actually permit.',
  twitterDescription: 'A-level Computer Science coursework: what the boards mark, how to design it, and the AI rules.',
  pageName: 'A-Level Computer Science NEA Help',
  webPageDescription: 'Support for the A-level Computer Science non-exam assessment at AQA and OCR: mark allocations, project scoping, a state-machine design method, testing evidence and the rules on using AI.',
  courseDescription: 'Live online teaching in programming, algorithms and software design for A-level Computer Science students, including preparation for the programming project without writing any of it.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'A-level Computer Science NEA',
  navLinks: [
    { href: '#marks', label: 'What is marked' },
    { href: '#design', label: 'Design first' },
    { href: '#ai', label: 'The AI rules' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United Kingdom &middot; AQA 7517 and OCR H446 &middot; Live online',
  h1: 'A-level Computer Science coursework help',
  lede: 'The programming project is the part of A-level Computer Science that students remember, and the part that goes wrong quietly. It is worth a fifth of the qualification, it runs for months with no exam hall to concentrate the mind, and the most common failure is not a lack of skill: it is a project that was too big to finish, designed in the writing rather than before it. This page sets out exactly what AQA and OCR give marks for, shows a design method that makes a project finishable, and quotes what the boards say about using AI, because that question now comes up in every first conversation. We teach the skills the project needs. We never write, edit or supply any part of anyone\'s coursework.',
  secondaryCta: { href: '#design', label: 'See the design method' },
  wa: 'Hello Modern Age Coders, I would like a free class about A-level Computer Science and the programming project.',
  heroNote: 'Skills, not solutions &middot; Nothing written for you &middot; Board rules quoted, not paraphrased',
  spec: [
    ['Boards', 'AQA 7517, OCR H446'],
    ['Weight', 'A fifth of the A level'],
    ['AQA marks', '75, with 42 for the solution'],
    ['OCR marks', '70, in four sections'],
    ['Runs for', 'Months, in school time and out'],
    ['AI', 'Allowed narrowly, and declared'],
    ['We provide', 'Teaching and review of skills'],
    ['We never', 'Write or edit the project']
  ],
  capsuleQ: 'In short',
  capsule: 'At AQA, A-level Computer Science 7517 is marked out of 375 scaled marks: two papers of 100 raw marks each, scaled to 150, and the non-exam assessment at 75, with AQA\'s guidance putting 42 of the 75 on the technical solution. At OCR, H446 has two papers of 140 marks each, 2 hours 30 minutes and 40 per cent apiece, and the programming project, H446/03, at 70 marks and 20 per cent, split into analyse a problem (10 marks), design (15), develop and test (25) and evaluate and document (20). Both reward evidence of thinking, not just a working program. The commonest mistake is scope, and the fix is to design the states of the program before writing it. On AI, OCR is explicit that only independent candidate work should be credited. Our classes teach the programming, design and testing behind the project, and never produce any part of it. The opening lesson costs nothing, and after it a group place runs at USD 100 monthly, private teaching at USD 150.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for A-level programmers',
    lede: 'Most students need fluency, structure and testing, in that order.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'NEA / 01', title: 'Python from start to finish', note: 'When the obstacle is the language and not the idea: files, classes, error handling and how to lay a program out.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'NEA / 02', title: 'Algorithms and data structures', note: 'Paper 2 ground, and the source of anything in a project worth analysing or evaluating.' },
      { course: 'full-stack-web-development-teens-masterclass', code: 'NEA / 03', title: 'Full stack web development', note: 'For projects with a database and an interface: how the parts fit and where the data lives.' }
    ]
  },

  sections: [
    {
      id: 'marks', tint: 'tint', eyebrow: 'What the boards mark',
      h2: 'Where the marks actually are, at AQA and OCR',
      lede: 'Two boards, two structures, one common message: the program is not the whole of it. Figures read at each board\'s own specification pages on 20 September 2026.',
      body: [
        { kind: 'table', caption: 'A-level Computer Science assessment, as each board publishes it', head: ['Board', 'Components', 'The project'], rows: [
          ['AQA 7517', 'Paper 1 and Paper 2, each 100 raw marks scaled to 150; NEA 75 marks unscaled; total 375 scaled marks', 'A computing practical project; AQA\'s guidance puts 42 of the 75 marks on the technical solution, the rest on the documentation'],
          ['OCR H446', 'Component 01 Computer systems, 140 marks, 2 hours 30 mins, 40 per cent; Component 02 Algorithms and programming, 140 marks, 2 hours 30 mins, 40 per cent', 'Component 03 Programming project, 70 marks, 20 per cent: analyse a problem (10 marks), design (15 marks), develop and test (25 marks), evaluate and document (20 marks)']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Read the OCR split slowly, because it settles most arguments about how to spend the autumn. Analysis and design together are worth 25 of the 70 marks, the same as developing and testing the program. A student who codes for three months and writes the documentation in the last fortnight is competing for half the paper with a quarter of the effort in the wrong place.',
            'AQA weights the solution more heavily, 42 of 75, but the remaining 33 marks are still a third of the project and they are the ones lost by silence: no analysis of a real user, no design that anyone could follow, no evaluation against the original criteria.'
          ],
          right: [
            'Both boards want evidence of a process, not a finished artefact dropped on the desk. That is why scope matters more than ambition. A modest program, analysed with a real user, designed clearly, tested against its own criteria and evaluated honestly, outscores a half-built ambitious one every time.',
            'Neither board is in the business of surprises: the criteria are published, and a student who reads them in September writes a different project from one who reads them in March.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.aqa.org.uk/subjects/computer-science/a-level/computer-science-7517/specification/scheme-of-assessment" rel="noopener" target="_blank">AQA, A-level Computer Science 7517 scheme of assessment</a> and its <a class="ag-inline-link" href="https://www.aqa.org.uk/subjects/computer-science/a-level/computer-science-7517/specification/subject-content/non-exam-assessment-the-computing-practical-project" rel="noopener" target="_blank">NEA subject content</a>; <a class="ag-inline-link" href="https://www.ocr.org.uk/qualifications/as-and-a-level/computer-science-h046-h446-from-2015/specification-at-a-glance/" rel="noopener" target="_blank">OCR, H446 specification at a glance</a>. Read 20 September 2026. Modern Age Coders is not connected with AQA or OCR.' }
      ]
    },
    {
      id: 'design', tint: 'deep', eyebrow: 'The method',
      h2: 'Draw the states before you write the code',
      lede: 'Most unfinished projects are not short of programming. They are short of a design that says what the program does in every situation, so the writing never ends.',
      body: [
        { kind: 'three', cells: [
          { h3: '1. List the states', p: 'What is the program doing at any moment? A quiz app might sit in five: waiting to start, showing a question, showing feedback, between rounds, and finished. Write them down before anything else.' },
          { h3: '2. List the events', p: 'What can happen? An answer submitted, a timer expiring, a back button, a lost connection. Four events across five states makes a grid of twenty squares.' },
          { h3: '3. Fill every square', p: 'For each state and each event, say what happens next. The squares nobody thinks about, a timer expiring on the finished screen, a back button mid-question, are exactly where finished projects break.' }
        ] },
        { kind: 'table', caption: 'A worked illustration: a five-state quiz project, four events, twenty transitions to decide', head: ['State', 'Answer submitted', 'Timer expires', 'Back pressed'], rows: [
          ['Waiting to start', 'Not possible: ignore it and say so in the design', 'Not possible', 'Leave the quiz'],
          ['Showing a question', 'Mark it, go to feedback', 'Count as wrong, go to feedback', 'Confirm, then leave'],
          ['Showing feedback', 'Ignore: the answer is already marked', 'Move to the next question', 'Confirm, then leave'],
          ['Between rounds', 'Ignore', 'Start the next round', 'Leave the quiz'],
          ['Finished', 'Ignore', 'Ignore: no timer runs here', 'Return to the start']
        ] },
        { kind: 'two', mt: true,
          left: [
            'That table is a state machine, and it is worth more than it looks. It is design evidence a marker can follow, it is a test plan in disguise, because each row becomes a test, and it puts a hard edge around the project: twenty decisions, all made, nothing left to invent at midnight in February.',
            'It also stops the commonest scope failure. Each new feature adds a state or an event, and the grid grows by a row or a column. A student can see the cost of an idea before agreeing to it.'
          ],
          right: [
            'The same habit answers the evaluation section. When a project is described as a set of states and transitions, the evaluation writes itself: which transitions work, which were cut, what a user did that the design did not expect.',
            'Students who prefer flowcharts or pseudocode can keep them. The point is that every combination of state and event has an answer decided in advance, in a form someone else can read.'
          ] }
      ]
    },
    {
      id: 'ai', tint: 'tint', eyebrow: 'The AI rules',
      h2: 'What the boards say about AI in the project',
      lede: 'Every family asks this, so here is the answer from an exam board rather than from us. The quotes below are OCR\'s own guidance for the A Level Computer Science project.',
      body: [
        { kind: 'table', caption: 'OCR\'s guidance on AI in the A Level Computer Science NEA', head: ['Question', 'What OCR says'], rows: [
          ['Can AI be used at all?', 'AI tools may be used to support debugging, and could also be used to suggest ideas and methods to troubleshoot non-functional code'],
          ['Can it suggest code?', 'A candidate may ask how a method or object could be written, but must show clearly how this suggestion has been adapted to suit their project'],
          ['What counts as misuse?', 'Using or modifying AI responses without acknowledgement, disguising the use of AI, and using it for substantial sections of work'],
          ['What gets the marks?', 'Only independent candidate work should be credited when marking the NEA'],
          ['What must be kept?', 'A copy of the AI content in a non-editable format, such as a screenshot, with an explanation of how it was used'],
          ['What do teachers watch for?', 'Sudden changes in work production, changes in coding style and very erratic work rates']
        ] },
        { kind: 'p', text: 'Put plainly: an AI tool can help a student get unstuck, and it cannot earn marks for them. The safest habit is the one good engineers use anyway, which is to record what a tool suggested, what was changed and why, in an appendix. A student who can explain every line of their own project has nothing to fear from a conversation with a moderator.' },
        { kind: 'p', text: 'Our own rule follows from the boards\': we teach programming, design and testing, we discuss a student\'s project in general terms, and we do not write, debug, edit or review the code that will be submitted. If a student asks us to look at their NEA code, the answer is no, and we explain why. For the same reason, the practice problems in our classes are never the student\'s project in disguise.' }
      ]
    },
    {
      id: 'timeline', tint: '', eyebrow: 'A workable year',
      h2: 'When to do what, across the project year',
      lede: 'Dates vary by school, since teachers set internal deadlines. The order does not.',
      body: [
        { kind: 'table', caption: 'A sensible order for the project year', head: ['Stage', 'What happens', 'The trap to avoid'], rows: [
          ['Choosing', 'Find a real user with a real problem, small enough to finish', 'A project chosen because it sounds impressive'],
          ['Analysis', 'Interview the user, write criteria that can be tested later', 'Criteria so vague that nothing can fail them'],
          ['Design', 'States, events, data structures and interfaces on paper', 'Designing in the code and writing it up afterwards'],
          ['Development', 'Build in slices, each one tested and recorded', 'One long unbroken sprint with no evidence'],
          ['Testing', 'Test against the criteria, including the cases you expect to fail', 'Screenshots that only show things working'],
          ['Evaluation', 'Judge the project against its own criteria and the user\'s view', 'A conclusion that says it went well']
        ] },
        { kind: 'p', text: 'The evidence trail matters as much as the program. Dated notes, test results with dates, and a record of what changed after feedback are what let a teacher confirm the work is the student\'s own, which both boards require.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Getting ready',
    h2: 'Four rungs to a project that finishes',
    lede: 'Where a student starts depends on their programming, not their year group.',
    table: { caption: 'From confident coder to completed project', head: ['Stage', 'Rung', 'The sign it is secure'], rows: [
      ['Year 11 to 12', '1. Fluency', 'Can write and debug a program of a few hundred lines without help'],
      ['Year 12', '2. Structure', 'Splits a program into functions, classes and files that make sense to someone else'],
      ['Year 12 into 13', '3. Design', 'Can state every state and event of a planned program before coding'],
      ['Year 13', '4. Evidence', 'Tests against written criteria and records what changed and why']
    ] },
    left: { h3: 'If the project is stuck', ps: [
      'Stalled projects are usually too big. Cutting features is not failure; the boards reward a finished, well-evidenced small project over an unfinished ambitious one.',
      'Paper 2 practice often unsticks a project, because the algorithms it teaches are the ones a project needs.'
    ] },
    right: { h3: 'Beyond the A level', ps: [
      'The habits here, design before code and evidence as you go, are what university projects and first jobs expect.',
      'Students who enjoy the problem-solving side often try the <a class="ag-inline-link" href="/british-informatics-olympiad-preparation">British Informatics Olympiad</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for A-level Computer Science students',
    lede: 'Sorted by the thing that usually gets in the way. Syllabuses open from the cards.',
    bands: [
      { num: 'I', h3: 'Programming fluency', sub: 'The language stops getting in the way', courses: [
        { code: 'NEA / LANG / 01', slug: 'python-complete-masterclass-teens', title: 'Python from start to finish', blurb: 'Every core idea, with prediction before running.' },
        { code: 'NEA / LANG / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'For schools and students working in Java.' },
        { code: 'NEA / LANG / 03', slug: 'complete-app-development-masterclass-for-teens', title: 'App development', blurb: 'Interfaces, events and state, which projects lean on heavily.' }
      ] },
      { num: 'II', h3: 'Theory and algorithms', sub: 'Paper 1 and Paper 2 ground', courses: [
        { code: 'NEA / THEORY / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms and data structures', blurb: 'Searching, sorting, trees and graphs, reasoned before coded.' },
        { code: 'NEA / THEORY / 02', slug: 'gcse-computer-science-course', title: 'GCSE Computer Science', blurb: 'For students who came to the A level without the GCSE.' },
        { code: 'NEA / THEORY / 03', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Speed and correctness under time limits, which sharpens paper 2.' }
      ] },
      { num: 'III', h3: 'Building real systems', sub: 'Databases, web and data', courses: [
        { code: 'NEA / BUILD / 01', slug: 'full-stack-web-development-teens-masterclass', title: 'Full stack web development', blurb: 'A site with its own database, built in slices and tested.' },
        { code: 'NEA / BUILD / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science with Python', blurb: 'For projects that analyse data rather than manage it.' },
        { code: 'NEA / BUILD / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'When the project needs a trained model, and an honest account of how well it works.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Weekly teaching, and a clear line around the coursework',
    lede: 'Lessons run on video with a teacher in India, where the clock sits five and a half hours ahead of Britain in winter and four and a half in summer. Sixth formers generally settle on an evening, written into the diary in UK time.',
    slots: [
      { time: 'Weekday evening', l: 'The usual choice for Year 12 and Year 13.' },
      { time: 'Weekend morning', l: 'For longer sessions on algorithms or a full past paper.' },
      { time: 'Holiday intensives', l: 'For catching up on paper 1 and paper 2 content.' }
    ],
    cells: [
      { h3: 'Skills, not solutions', p: 'We teach programming, design and testing with our own examples, never with the student\'s project code.' },
      { h3: 'Design taught explicitly', p: 'States, events, data models and interfaces, practised on projects that are not the student\'s own.' },
      { h3: 'Papers practised', p: 'Algorithms, data structures, systems and the written technique both papers reward.' },
      { h3: 'Groups of a size that works', p: 'Between five and ten students of similar ability, arguing over the same question until the method is clear.' },
      { h3: 'One to one when needed', p: 'For a student with a gap to close before a mock or a deadline.' },
      { h3: 'No promises', p: 'No grade is promised, and nothing we do forms part of an assessed submission.' }
    ]
  },

  projectsH2: 'Projects our students have published',
  projectsLede: 'Four live examples, all built outside any assessed coursework. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Straight from our Google profile, with no edits.',

  fees: {
    h2: 'Fees',
    lede: 'Monthly, in US dollars, the rate for every country outside India. No joining fee, no annual tie.',
    free: ['A real lesson with a teacher', 'An honest view of the gaps', 'No card details'],
    group: ['Five to ten students at one level', 'The same teacher each week', 'Work read and discussed', 'A certificate at the end'],
    one: ['A teacher for one student', 'Aimed at specific gaps', 'Useful before mocks and deadlines']
  },

  faq: {
    eyebrow: 'Questions about the NEA',
    h2: 'What A-level students and parents ask',
    items: [
      { q: 'How much is the programming project worth?', a: 'A fifth of the A level at both boards. At AQA it is 75 of 375 scaled marks; at OCR it is 70 marks, 20 per cent of H446.' },
      { q: 'How are the OCR project marks split?', a: 'OCR publishes the split as analyse a problem (10 marks), design (15 marks), develop and test (25 marks) and evaluate and document (20 marks).' },
      { q: 'How much of the AQA project is the program itself?', a: 'AQA\'s guidance allocates 42 of the 75 marks to the technical solution, with the rest across the documentation.' },
      { q: 'Will you help write my NEA?', a: 'No. We teach the programming, design and testing skills the project needs, and we do not write, edit, debug or review coursework that will be submitted. Only independent candidate work can be credited.' },
      { q: 'Can my child use AI for the project?', a: 'Within limits their board sets. OCR says AI tools may support debugging and suggest how a method could be written, provided the candidate shows how the suggestion was adapted, keeps a non-editable copy of the AI content, and acknowledges it. Using or modifying AI responses without acknowledgement is misuse.' },
      { q: 'What makes projects fail?', a: 'Scope, almost always. A project chosen to impress, designed while being written, and evidenced at the end loses marks in analysis, design and evaluation even when the program works.' },
      { q: 'What is the state machine method?', a: 'List what the program can be doing, list what can happen, and decide the outcome for every combination before coding. It produces design evidence, a test plan and a hard limit on scope at the same time.' },
      { q: 'Do you teach the exam papers too?', a: 'Yes. Most of our A-level students come for algorithms, data structures and systems, which are paper 1 and paper 2 content, and the project benefits from the same work.' },
      { q: 'What do classes cost?', a: 'Nothing for the opening lesson. From then on it is USD 100 a month to share a group or USD 150 for private teaching, and you can stop at the end of any month.' },
      { q: 'When are lessons, in UK time?', a: 'Whatever weekly time is agreed once the free lesson is done, most often after school in the evening. The clock in India sits five and a half hours ahead of Britain in winter, four and a half in summer.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for UK computing students',
    lede: 'The exam before this one, the contests beside it, and the national picture.',
    items: [
      { href: '/uk-gcse-computer-science-tutoring', label: 'GCSE Computer Science tutoring', p: 'AQA, OCR and Edexcel compared, taught to your board.' },
      { href: '/british-informatics-olympiad-preparation', label: 'British Informatics Olympiad', p: 'For students who enjoy the problem-solving side.' },
      { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'UK competitions calendar 2026-27', p: 'Every contest we could confirm, month by month.' },
      { href: '/best-online-coding-classes-uk', label: 'Choosing an online class in the UK', p: 'The questions worth putting to any provider before you pay.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Four school systems, and every UK page.' },
      { href: '/ai-and-machine-learning-classes-in-uk', label: 'AI and machine learning classes in the UK', p: 'For projects with a model in them.' }
    ]
  },

  start: {
    h2: 'Start with a free lesson on the skills',
    lede: 'Tell us the board, the year and where the project stands. The free lesson works on a skill the project needs, using our examples rather than your coursework.',
    readFirst: 'Happier reading than talking? Syllabuses sit on the <a class="ag-inline-link" href="/courses">course pages</a>, the teaching method is described on <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and the <a class="ag-inline-link" href="/coding-roadmap">roadmap</a> puts the topics in order.',
    note: 'A WhatsApp message costs a UK mobile nothing and tends to reach us soonest. The number belongs to India, which we state plainly, and no British office exists.',
    formNote: 'No card, no obligation. One reply to arrange the lesson.'
  },

  footer: {
    cols: [
      { h4: 'Exams', links: [
        { href: '/uk-gcse-computer-science-tutoring', label: 'GCSE Computer Science' },
        { href: '/cambridge-a-level-computer-science-online-classes', label: 'Cambridge A Level 9618' },
        { href: '/cambridge-igcse-computer-science-tuition', label: 'Cambridge IGCSE 0478' },
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' }
      ] },
      { h4: 'Beyond the exam', links: [
        { href: '/british-informatics-olympiad-preparation', label: 'Informatics olympiad' },
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' },
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/student-labs', label: 'Student labs' }
      ] }
    ],
    bottomRight: 'We teach the skills; the coursework stays the student\'s own'
  },

  personalityCss: `
.ag-root.ag-nea .ag-hero-grid { gap: clamp(1.05rem, 2.9vw, 2.5rem); }
.ag-root.ag-nea .ag-hero h1 { letter-spacing: -0.021em; }
.ag-root.ag-nea .ag-capsule { border-left-width: 7px; }
.ag-root.ag-nea .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-nea .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-nea .ag-table th { letter-spacing: 0.01em; }
.ag-root.ag-nea .ag-spec dt { letter-spacing: 0.14em; }
.ag-root.ag-nea .ag-slots { gap: 1.2rem; }
`,

  mustMention: ['7517', 'H446/03', '375', '42 of the 75', 'analyse a problem (10 marks)', 'independent candidate work', 'non-editable', 'state machine', 'develop and test (25 marks)', 'evaluate and document (20 marks)']
};
