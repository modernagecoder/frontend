'use strict';
// AI agents course for students, Ireland (ag- door, Ireland cluster, Phase 2).
// Facts read at primary sources on 16 September 2026: CSO Household Digital
// Consumer Behaviour 2025, Generative AI chapter (5 December 2025; 42% of
// internet users aged 16+; students 66% against employees 46%; the definition
// includes programming code; non-users: 54% no need, 20% did not know how, 19%
// security/privacy/safety); CSO tables ICA320 and ICA322 (student users: formal
// education 62, private 60, professional 24; all users formal education 28);
// ICA319 (16 to 29: male 72, female 59, all 65; the CSV repeats rows, per the
// teens dossier). NAIN, Generative Artificial Intelligence: Guidelines for
// Educators (foreword July 2023, QQI news 8 September 2023). Anthropic,
// Building effective agents (19 December 2024). "Student" in CSO data means
// principal economic status, aged 16+, not split by level. The professionals
// door owns the enterprise and AI Act material.

module.exports = {
  cluster: 'ag',
  clusterName: 'Ireland',
  hub: { group: 'guide', tag: 'AI AGENTS, STUDENTS', blurb: 'For students in Ireland who want to build AI agents as their own work, inside Irish academic integrity guidance.' },
  slug: 'ai-agents-course-for-students-ireland',
  code: 'asi',
  accent: '#7A3800',
  accentRationale: 'AI agents for students, Ireland: a deep rust from the solver, separated from both Irish greens and every other Ireland page',
  pageType: 'market',
  market: { name: 'Ireland', iso: 'IE', dial: '+353', lang: 'en-IE', locale: 'en_IE', geoRegion: 'IE', brandTag: 'Ireland', phonePlaceholder: '87 123 4567', minDigits: 7 },
  routeLabel: 'AI agents course for students, Ireland',
  title: 'AI Agents Course for Students in Ireland | Live Online',
  description: 'Build AI agents as a student in Ireland, inside your college\'s academic integrity rules: tools, testing and honest disclosure. Live online, first class free.',
  ogDescription: 'Students in Ireland are the country\'s heaviest users of generative AI. Building an agent, and testing it, teaches what using one never will, and stays on the right side of the rules.',
  twitterDescription: 'Build AI agents as your own work, inside Irish academic integrity guidance. Live online, first class free.',
  pageName: 'AI Agents Course for Students in Ireland',
  webPageDescription: 'A live online course for students in Ireland who want to build AI agents: what the CSO found about students and generative AI, what Irish academic integrity guidance says, and a first agent that is tested and disclosed.',
  courseDescription: 'Live online AI agent courses for students in Ireland: language models, tool use, retrieval, testing and disclosure, built as the student\'s own projects and taught in small groups or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'AI and machine learning classes in Ireland', href: '/ai-and-machine-learning-classes-in-ireland' }],
  crumbLabel: 'AI agents for students, Ireland',
  navLinks: [
    { href: '#numbers', label: 'Students and AI' },
    { href: '#integrity', label: 'Integrity guidance' },
    { href: '#agent', label: 'A first agent' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Ireland &middot; Third level and senior cycle &middot; Live online',
  h1: 'AI agents course for students in Ireland',
  lede: 'When the Central Statistics Office first asked about generative AI, in its 2025 household survey, students came out on top: 66% of students had used a tool such as ChatGPT or Copilot in the previous three months, against 46% of employees and 42% of all internet users. Most of them used it for their studies. Irish colleges have been clear about where the line sits. The National Academic Integrity Network\'s guidelines say students must be told that submitting the output of generative AI as their own work, without authorisation, is academic misconduct. So there are two very different ways a student can spend time with AI agents. One is asking an agent to do the work, which may break the rules and teaches very little. The other is building an agent: deciding what it may do, giving it tools, measuring how often it is right, and writing down honestly what you built and what the model generated. This page is about the second, taught live online to students in Ireland.',
  secondaryCta: { href: '#integrity', label: 'Read the guidance' },
  wa: 'Hello Modern Age Coders, I am a student in Ireland and would like a free first class on building AI agents.',
  heroNote: 'Live classes since 2020 &middot; over 10,000 students taught &middot; agents built, tested and disclosed',
  spec: [
    ['For', 'College and senior-cycle students'],
    ['Builds', 'Agents with tools and retrieval'],
    ['Tests', 'Every agent against known answers'],
    ['Discloses', 'Models, versions, what you wrote'],
    ['Respects', 'Your college\'s integrity policy'],
    ['Group', 'Five to ten, or one to one'],
    ['Hours', 'Evenings and weekends, Irish time'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'An AI agent is a program in which a language model directs its own steps and tool use to reach a goal. The best way for a student to learn about agents is to build one as their own work, test it against questions with known answers, and disclose what the model produced, which is also what Irish academic integrity guidance expects. Modern Age Coders teaches students in Ireland to build agents in Python, live online, in groups of five to ten or one to one. A first class is free. Then a group place costs USD 100 a month and one-to-one tuition USD 150 a month; the Copilot Studio course is taught one to one only.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three ways into building agents',
    lede: 'From the model upwards, inside a platform many employers use, or directing agents that write code. Every card opens its syllabus and format.',
    items: [
      { course: 'complete-generative-ai-masterclass-college', code: 'AGENTS / 01', title: 'Generative AI: LLMs, RAG and Agents', note: 'Language models, retrieval from your own documents, and agents whose every tool call is recorded, for students who want to understand the whole stack.' },
      { course: 'ai-agents-with-microsoft-copilot-studio-course-for-college-students', code: 'AGENTS / 02', title: 'AI Agents with Copilot Studio for College Students', note: 'Agents grounded in documents and connected to real systems in Microsoft Copilot Studio. One-to-one lessons only.' },
      { course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', code: 'AGENTS / 03', title: 'Codex and Claude Code', note: 'Giving coding agents real tasks, reading every change they propose and deciding what to keep, using your own paid accounts.' }
    ]
  },

  sections: [
    {
      id: 'numbers', tint: 'tint', eyebrow: 'Students and AI',
      h2: 'Students in Ireland and generative AI: what the CSO found',
      lede: 'The figures below come from the CSO\'s 2025 household survey, the first to ask about generative AI. It covers internet users aged 16 and over, and "student" means people whose main status is student, at second or third level.',
      body: [
        { kind: 'table', caption: 'Use of generative AI in the previous three months, 2025, CSO release and tables ICA320 and ICA322', head: ['Measure', 'Figure'], rows: [
          ['All internet users aged 16 and over who had used generative AI', '42%'],
          ['Students who had used it', '66%'],
          ['Employees who had used it', '46%'],
          ['Of students who used it: for formal education', '62%'],
          ['Of students who used it: for private purposes', '60%'],
          ['Of all users: for educational purposes', '28%'],
          ['Of people who had not used it: said they did not know how', '20%']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The CSO defines generative AI as a form of AI designed to generate human-like content, "which can be text, audio, images, videos, programming code, etc.", and names ChatGPT, Copilot and Gemini among the tools.',
            'So when a student in Ireland reaches for an AI tool, writing code is one of the things it is built to do. The question is whether the student can judge that code.'
          ],
          right: [
            'Look at the base of each row. The 62% describes students who had used generative AI, not all students. Since 66% of students had used it, the share of all student internet users who used it for formal education is nearer 41%, by our arithmetic.',
            'That kind of slip is exactly what an agent makes when it summarises a table carelessly, which is why the first agent project on this page is built around it.'
          ] },
        { kind: 'source', html: 'Sources, read 16 September 2026: <a class="ag-inline-link" href="https://www.cso.ie/en/releasesandpublications/ep/p-isshdcb/householddigitalconsumerbehaviour2025/generativeai/" rel="noopener" target="_blank">CSO, Household Digital Consumer Behaviour 2025: Generative AI</a> (5 December 2025); CSO tables <a class="ag-inline-link" href="https://data.cso.ie/table/ICA320" rel="noopener" target="_blank">ICA320</a> and <a class="ag-inline-link" href="https://data.cso.ie/table/ICA322" rel="noopener" target="_blank">ICA322</a>. The 41% is our own calculation from the published figures.' }
      ]
    },
    {
      id: 'integrity', tint: 'deep', eyebrow: 'Integrity guidance',
      h2: 'What Irish academic integrity guidance says about generative AI',
      lede: 'The National Academic Integrity Network, facilitated by Quality and Qualifications Ireland, published guidelines for educators on generative AI in 2023. Each college sets its own policy, but these lines show the national thinking.',
      body: [
        { kind: 'table', caption: 'NAIN, Generative Artificial Intelligence: Guidelines for Educators (foreword dated July 2023)', head: ['Theme', 'In the guidelines\' words'], rows: [
          ['Misconduct', '"There must be clear information for students that unauthorised submission of the output of GenAI as their own work constitutes academic misconduct and will be treated accordingly."'],
          ['Own work', '"It is important that students submit work that they have produced and acknowledge the sources used"'],
          ['Authorised use', '"If you identify a particular appropriate role for GenAI in your courses, then ensure that students are aware of what constitutes authorised and unauthorised use."'],
          ['Limits of the tools', 'They "can give unreliable answers whilst appearing confident and convincing."']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Two ideas run through the guidelines. Credit is for the student\'s own work, and the difference between authorised and unauthorised use is set by the course, so a student has to know their institution\'s policy and be able to draw the line.',
            'The guidelines also describe these tools as largely relying on statistical predictions of word combinations, not expertise. That is a good sentence to keep in mind while building an agent on top of one.'
          ],
          right: [
            'Our position is simple. We never produce, edit or check work that will be submitted for assessment. What we teach is building agents as the student\'s own projects, with a written record of what the model generated.',
            'That record, a note naming the models and versions used and separating the student\'s own code from generated code, is a habit that protects a student under any policy. More on this is on <a class="ag-inline-link" href="/understand-the-code-dont-copy-paste-ireland">understanding the code instead of copy-pasting</a>.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.qqi.ie/news/nain-publishes-new-genai-guidelines-for-educators" rel="noopener" target="_blank">QQI, NAIN publishes GenAI guidelines for educators</a> (8 September 2023) and the <a class="ag-inline-link" href="https://www.qqi.ie/sites/default/files/2023-09/NAIN%20Generative%20AI%20Guidelines%20for%20Educators%202023.pdf" rel="noopener" target="_blank">guidelines themselves</a>, read 16 September 2026. This is a summary, not advice about any course; your own institution\'s rules always apply.' }
      ]
    },
    {
      id: 'agent', tint: 'tint', eyebrow: 'A first agent',
      h2: 'What an agent is, and a first one to build and test',
      lede: 'Anthropic, which makes the Claude models, draws a useful line in its engineering guidance of December 2024. "Workflows are systems where LLMs and tools are orchestrated through predefined code paths." Agents, by contrast, "are systems where LLMs dynamically direct their own processes and tool usage, maintaining control over how they accomplish tasks."',
      body: [
        { kind: 'two',
          left: [
            'The first project is an agent that answers questions about Irish statistics. It has two tools: one fetches a CSO table, one runs a small calculation. Given a question, it decides which table to fetch, reads it, calculates and answers, writing every step to a log.',
            'Then comes the part most tutorials skip. The student writes twenty questions whose answers they have checked by hand, runs the agent on all twenty, and counts how many it gets right.'
          ],
          right: [
            'The questions are chosen to catch the agent out. Real CSO tables contain traps that a language model walks straight into, and each one becomes a test the agent must pass before the student trusts it.',
            'Students who want to direct agents that write software rather than answer questions go on to <a class="ag-inline-link" href="/agentic-coding-classes">agentic coding classes</a>; the wider picture is on the <a class="ag-inline-link" href="/ai-agents-course">AI agents course</a> page.'
          ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Test 1: the base', p: 'Asked what share of students use AI for their studies, a careless agent answers 62%. That figure is a share of students who used AI; the right answer needs the 66% as well.' },
          { h3: 'Test 2: repeated rows', p: 'The CSV download of table ICA319 repeats some rows: the male and female figures for ages 16 to 29 each appear twice. An agent that averages raw rows gets the wrong result without any warning.' },
          { h3: 'Test 3: who is counted', p: 'The CSO\'s 72% refers to young men aged 16 to 29 only. The figure for that whole age group is 65%. An agent that reports 72% for all young people fails the test.' }
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.anthropic.com/engineering/building-effective-agents" rel="noopener" target="_blank">Anthropic, Building effective agents</a> (19 December 2024); <a class="ag-inline-link" href="https://data.cso.ie/table/ICA319" rel="noopener" target="_blank">CSO table ICA319</a>, read 16 September 2026.' }
      ]
    },
    {
      id: 'route', tint: '', eyebrow: 'Where it leads',
      h2: 'From a student agent to work an employer can inspect',
      lede: 'An agent with a test set and a disclosure note is a portfolio piece that shows judgement, not just enthusiasm.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Foundations first', p: 'Agents are built on Python, version control and some data structures. The <a class="ag-inline-link" href="/coding-for-college-students-ireland">coding for college students</a> page covers them for Irish third-level students.' },
          { h3: 'Training, not only prompting', p: 'Students who want to know how the underlying models learn can go further on <a class="ag-inline-link" href="/learn-to-train-ai-not-just-prompt-it-ireland">learning to train AI</a>.' },
          { h3: 'At work', p: 'After college the same skills continue on the <a class="ag-inline-link" href="/ai-agents-course-for-professionals-ireland">AI agents course for professionals</a>, which covers agents inside organisations.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The rungs',
    h2: 'Five rungs from Python to an agent you can defend',
    lede: 'A student who cannot read code cannot tell what an agent did. The ladder starts with the language and ends with evidence.',
    table: { caption: 'The route for students building agents', head: ['Rung', 'What the student can do'], rows: [
      ['1. Python without help', 'Write and debug programs with no assistant switched on'],
      ['2. Version control', 'Keep every change in Git, so the history shows who wrote what'],
      ['3. Models and retrieval', 'Call a language model and ground it in chosen documents'],
      ['4. Tools and agents', 'Let a model choose and call tools, with limits and a log'],
      ['5. Tests and disclosure', 'Measure the agent against known answers and write an honest note']
    ] },
    left: { h3: 'Why disclosure is a skill', ps: [
      'Saying exactly what you built, what a model produced and how you checked it is harder than it sounds. Irish guidance asks students to acknowledge sources, and an agent project is where the habit becomes second nature.',
      'How agents connect to the rest of computing is shown on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Around semesters and exams', ps: [
      'Most students take one or two lessons a week in term and pause for exams. Many Irish universities run semesters from September to December and January to May, and lessons follow that pattern.',
      'The Copilot Studio course runs one to one only, because each agent is built around particular systems.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Eight live courses for student agent builders',
    lede: 'In the order most students take them. Every card opens a course page with its syllabus and format.',
    bands: [
      { num: 'I', h3: 'Groundwork', sub: 'What every agent stands on', courses: [
        { code: 'AGENTS / GROUND / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python Masterclass', blurb: 'The language nearly all agent code is written in, to an advanced level.' },
        { code: 'AGENTS / GROUND / 02', slug: 'git-github-version-control-course-for-college-students', title: 'Git and GitHub for College Students', blurb: 'A history of every change, which is half of any honest disclosure.' },
        { code: 'AGENTS / GROUND / 03', slug: 'data-structures-algorithms-masterclass-college', title: 'Data Structures and Algorithms', blurb: 'Enough theory to judge whether an agent\'s code is any good.' }
      ] },
      { num: 'II', h3: 'Building agents', sub: 'Models, tools and platforms', courses: [
        { code: 'AGENTS / BUILD / 01', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI: LLMs, RAG and Agents', blurb: 'From a single model call to an agent with tools and a test set.' },
        { code: 'AGENTS / BUILD / 02', slug: 'python-ai-automation-masterclass-college', title: 'Python and AI Automation', blurb: 'Scripts that call models and services to get real jobs done.' },
        { code: 'AGENTS / BUILD / 03', slug: 'ai-agents-with-microsoft-copilot-studio-course-for-college-students', title: 'AI Agents with Copilot Studio for College Students', blurb: 'Agents on Microsoft\'s platform, taught privately only.' }
      ] },
      { num: 'III', h3: 'Agents that write code', sub: 'Directing and reviewing', courses: [
        { code: 'AGENTS / CODE / 01', slug: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', title: 'Codex and Claude Code', blurb: 'Handing coding agents real tasks and reviewing each change line by line.' },
        { code: 'AGENTS / CODE / 02', slug: 'vibe-coding-for-college-fullstack-ai-dsa-career-course', title: 'Vibe Coding for College', blurb: 'Building quickly with AI across the stack while reading all of it.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How the classes run',
    h2: 'Agent lessons around lectures and labs',
    lede: 'All lessons are live, with teachers who work from India. India has one clock all year and Ireland has two, so the gap is four and a half hours during Irish summer time and five and a half from late October to late March. Students usually pick an evening after lectures or a weekend block, fixed in the free class.',
    slots: [
      { time: 'Evening', l: 'After lectures and labs, Irish time.' },
      { time: 'Weekend', l: 'Longer sessions for building and testing an agent.' },
      { time: 'Free afternoons', l: 'Where a timetable has gaps, usually one to one.' }
    ],
    cells: [
      { h3: 'Build an agent in the free class', p: 'A tiny agent with one tool, built with the teacher, who then suggests where to start.' },
      { h3: 'Groups of five to ten', p: 'Students at one level, comparing how their agents fail on the same test questions.' },
      { h3: 'One to one', p: 'For a final-year project with an agent in it, and for the Copilot Studio course.' },
      { h3: 'A log from the first run', p: 'Every agent records each step it takes, so testing and disclosure are built in from day one.' },
      { h3: 'Never assessed work', p: 'Teachers do not write, edit or check anything that will be submitted for credit.' },
      { h3: 'Your repository', p: 'Agents, test sets and disclosure notes live in the student\'s own GitHub account.' }
    ]
  },

  projectsH2: 'Work our students have shipped',
  projectsLede: 'Four live projects from our students, of all ages. The <a class="ag-inline-link" href="/student-labs">student labs</a> page has the rest.',
  reviewsLede: 'Word for word from Google. We have never paid anyone for a review or written one ourselves.',

  fees: {
    h2: 'Fees for students',
    lede: 'Monthly in US dollars, at the rate we charge in every country outside India, with no enrolment fee and nothing to sign for the year. The Copilot Studio course is private only and uses the one-to-one rate; the coding agents course needs your own paid accounts for the tools.',
    free: ['A small agent built with a teacher', 'A suggested route before you pay anything', 'No card details'],
    group: ['Five to ten students at one level', 'One live teacher throughout', 'Agents and tests reviewed each week', 'A certificate at the end'],
    one: ['A teacher for one student', 'Shaped around your own project', 'The only format for Copilot Studio']
  },

  faq: {
    eyebrow: 'Questions from students',
    h2: 'What students in Ireland ask about learning to build agents',
    items: [
      { q: 'Can I use AI agents for my college work?', a: 'That depends on your institution and each module. Irish academic integrity guidance says unauthorised submission of generative AI output as your own work is academic misconduct, so check what your course allows.' },
      { q: 'Will you help with my assignments or project?', a: 'No. We never write, edit or check work that will be submitted for assessment. We teach you to build agents as your own projects, outside your coursework.' },
      { q: 'What is the difference between an agent and a chatbot?', a: 'A chatbot answers. An agent is given a goal and decides its own steps, choosing and calling tools such as search or code execution along the way.' },
      { q: 'Do I need to know Python?', a: 'Yes, at least the basics. If you do not yet, the free class will show which foundation course to take first.' },
      { q: 'How many students in Ireland use generative AI?', a: 'The CSO found that 66% of students aged 16 and over had used it in the three months before its 2025 survey, compared with 46% of employees.' },
      { q: 'Can I take the Copilot Studio course in a group?', a: 'No. It is taught one to one only, because each agent is built around particular systems and permissions.' },
      { q: 'Do I need subscriptions for the coding agents course?', a: 'Yes. You use your own paid accounts for the tools, so what you build stays yours.' },
      { q: 'What do the classes cost?', a: 'Your first class is free. A group place is then USD 100 a month and one-to-one lessons USD 150 a month, charged in US dollars, with no enrolment fee and no contract for the year.' },
      { q: 'When are the classes?', a: 'Evenings or weekends at a time you choose in the free class. Our teachers are four and a half hours ahead of Irish time in summer and five and a half in winter.' },
      { q: 'What happens once I send my number?', a: 'Someone from our team calls you at a sensible Irish hour to set up the free class. You pay nothing unless you choose to continue.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for students in Ireland',
    lede: 'Foundations, deeper AI and what comes after college.',
    items: [
      { href: '/coding-for-college-students-ireland', label: 'Coding for college students in Ireland', p: 'The foundations under every agent.' },
      { href: '/learn-to-train-ai-not-just-prompt-it-ireland', label: 'Learn to train AI, not just prompt it', p: 'How the models learn.' },
      { href: '/ai-agents-course-for-professionals-ireland', label: 'AI agents course for professionals', p: 'Agents inside organisations.' },
      { href: '/understand-the-code-dont-copy-paste-ireland', label: 'Understand the code, do not copy-paste', p: 'AI help without losing the learning.' },
      { href: '/ai-agents-course', label: 'AI agents course', p: 'The global page on agents.' },
      { href: '/ai-and-machine-learning-classes-in-ireland', label: 'AI and machine learning classes in Ireland', p: 'The national AI page.' }
    ]
  },

  start: {
    h2: 'Build a first agent in a free class',
    lede: 'Leave your number and we will ring at an hour that suits you in Ireland. In the free class you build a very small agent with a teacher, and you leave knowing which rung to start on.',
    readFirst: 'To look around first, there is the <a class="ag-inline-link" href="/ai-agents-course">AI agents course</a> page, an account of <a class="ag-inline-link" href="/how-we-teach">how our lessons work</a>, and the <a class="ag-inline-link" href="/courses">full course list</a>.',
    note: 'WhatsApp works too and is usually the fastest way to reach us; messaging from an Irish number costs nothing. It is an Indian number, as our whole team is in India, and we have no Irish office.',
    formNote: 'Nothing to pay and no commitment. One call to arrange the class.'
  },

  footer: {
    cols: [
      { h4: 'Ireland', links: [
        { href: '/ai-and-machine-learning-classes-in-ireland', label: 'AI classes in Ireland' },
        { href: '/coding-for-college-students-ireland', label: 'Coding for college students' },
        { href: '/ai-agents-course-for-professionals-ireland', label: 'Agents for professionals' },
        { href: '/coding-classes-in-ireland', label: 'Coding classes in Ireland' }
      ] },
      { h4: 'Agents', links: [
        { href: '/ai-agents-course', label: 'AI agents course' },
        { href: '/agentic-coding-classes', label: 'Agentic coding' },
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Agents for students in Ireland, built honestly'
  },

  personalityCss: `
.ag-root.ag-asi .ag-hero-grid { gap: clamp(1.2rem, 3.1vw, 2.75rem); }
.ag-root.ag-asi .ag-hero h1 { letter-spacing: -0.02em; }
.ag-root.ag-asi .ag-capsule { border-left-width: 5px; }
.ag-root.ag-asi .ag-section-head h2 { max-width: 36ch; }
.ag-root.ag-asi .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-asi .ag-band-head h3 { letter-spacing: -0.007em; }
.ag-root.ag-asi .ag-spec dt { letter-spacing: 0.11em; }
.ag-root.ag-asi .ag-slots { gap: 1.1rem; }
`,

  mustMention: ['66%', '46%', '42%', '62%', 'programming code', 'National Academic Integrity Network', 'July 2023', 'constitutes academic misconduct', 'predefined code paths', 'dynamically direct their own processes', 'ICA319', 'Copilot Studio']
};
