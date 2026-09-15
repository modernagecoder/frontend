'use strict';
// AI agents course for students, Netherlands (ag- topic door, national).
// Spine: Dutch universities now have written rules for AI in study. The
// University of Groningen's ten basic rules (last modified 28 October 2024):
// AI may be used as a tool for general functions; generating new content
// must always be disclosed with the tool's name and version and the purpose
// and manner of use; extra course rules are announced before the course
// starts; it is fraud when submitted work no longer reflects the student's
// own knowledge and skills, or when AI output is submitted without proper
// acknowledgement; AI-detection scores are not evidence of fraud. UvA's
// framework (updated 3 June 2025): students must demonstrably achieve
// learning goals independently; programmes are asked to explore GenAI's role.
// Lesson: build agents as your own project, not to do your coursework, and
// keep logs and disclosure as habits. The professionals door owns the AI Act.

module.exports = {
  cluster: 'ag',
  slug: 'ai-agents-course-for-students-netherlands',
  code: 'ags',
  accent: '#1B6A00',
  accentRationale: 'Agents for students door: a deep green from the solver, forty units from every page it links to, the academy hub, the college and professionals doors, the Groningen academy and both Dutch oranges among them, with an unlinked Rotterdam district as its nearest neighbour',
  pageType: 'market',
  market: { name: 'Netherlands', iso: 'NL', dial: '+31', lang: 'en-NL', locale: 'en_NL', geoRegion: 'NL', brandTag: 'Netherlands', phonePlaceholder: '6 XXXX XXXX', minDigits: 9 },
  routeLabel: 'AI agents course for students, Netherlands',
  title: 'AI Agents Course for Students in the Netherlands | Live',
  description: 'Build AI agents as a student in the Netherlands, within your university\'s AI rules: tools, evaluation and honest disclosure. Live online, first lesson free.',
  ogDescription: 'Dutch universities now publish rules for AI in study: disclose the tool and its version, and never hand in work that is no longer your own. Learn to build AI agents properly, inside those rules.',
  twitterDescription: 'Build AI agents as a student, within your university\'s rules. Live online, first lesson free.',
  pageName: 'AI Agents Course for Students in the Netherlands',
  webPageDescription: 'Live online AI agent courses for university and hogeschool students in the Netherlands: language models, tools, retrieval, evaluation and responsible disclosure, taught within Dutch universities\' AI rules.',
  courseDescription: 'A live online programme for students in the Netherlands who want to build AI agents as a subject of study: language models, tool use, retrieval, evaluation, logging and disclosure, taught in English.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'AI and Python Academy, Netherlands', href: '/ai-and-python-academy-netherlands' }],
  crumbLabel: 'Agents for students',
  navLinks: [
    { href: '#rules', label: 'University rules' },
    { href: '#build', label: 'What you build' },
    { href: '#ladder', label: 'The ladder' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Netherlands &middot; University and hbo &middot; Live online',
  h1: 'AI agents course for students in the Netherlands',
  lede: 'Every student in the Netherlands now works under written rules for artificial intelligence. At the University of Groningen they fit on one page: use AI as a study tool if you like, say so when it produces new content, name the tool and its version, and never submit work that no longer reflects what you yourself know and can do. At the University of Amsterdam the starting point is that students must still demonstrably reach their learning goals on their own. Those rules are sensible, and they point to an important distinction. Using an agent to do your coursework may break them. Building an agent, understanding how it plans, which tools it calls, where it goes wrong and how to show your own contribution, is a subject worth studying in its own right. This page is for students who want that second thing, taught live online and in English.',
  secondaryCta: { href: '#rules', label: 'Read the university rules' },
  wa: 'Hello Modern Age Coders, I am a student in the Netherlands and would like a free lesson on building AI agents.',
  heroNote: 'Live teaching since 2020 &middot; more than 10,000 students &middot; agents taught by live teachers, step by step',
  spec: [
    ['For', 'University and hbo students'],
    ['Builds', 'Agents with tools, retrieval and logs'],
    ['Within', 'Your university\'s AI rules'],
    ['Habits', 'Evaluation, logging, disclosure'],
    ['Format', 'Live video with a teacher'],
    ['Groups', 'Five to ten, or one to one'],
    ['Language', 'English'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders teaches students in the Netherlands to build AI agents, programs that take a goal, plan their steps and use tools, as a subject of study rather than a shortcut through coursework. Students learn how language models work, how agents call tools and retrieve documents, how to evaluate what an agent does and how to log and disclose it, in line with the kind of rules Dutch universities now publish. Lessons are live, in English, in groups of five to ten or one to one. The first lesson is free; after that a group place is USD 100 a month and one-to-one tuition USD 150, and the Copilot Studio course for students is one to one only.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three agent courses for students',
    lede: 'One for building agents from the model up, one for building agents inside Microsoft tools, one for directing AI coding agents. Each opens its own page with syllabus, format and fee.',
    items: [
      { course: 'complete-generative-ai-masterclass-college', code: 'AGENTS / 01', title: 'Generative AI: LLMs, RAG and Agents', note: 'How language models work, how retrieval grounds them in your own documents, and how an agent is built so that every step it takes is logged and visible.' },
      { course: 'ai-agents-with-microsoft-copilot-studio-course-for-college-students', code: 'AGENTS / 02', title: 'AI Agents with Copilot Studio for College Students', note: 'Agents built in Microsoft Copilot Studio, the platform many employers use. Taught one to one only.' },
      { course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', code: 'AGENTS / 03', title: 'Codex and Claude Code', note: 'Directing AI coding agents through real software and reviewing every change, on your own tool subscriptions.' }
    ]
  },

  sections: [
    {
      id: 'rules', tint: 'tint', eyebrow: 'University rules',
      h2: 'What Dutch university rules on AI actually say',
      lede: 'Two examples, read at the universities\' own pages. Every institution and often every course has its own rules, so a student must always check theirs; these show the general shape.',
      body: [
        { kind: 'table', caption: 'The University of Groningen\'s basic rules for AI in education (last modified 28 October 2024)', head: ['Rule', 'What it says, in summary'], rows: [
          ['Use as a tool', 'AI tools may be used as an aid for general functions: as a study tool, an assistant or input for your own work, such as brainstorming, summarising, improving grammar, translating or self-study'],
          ['Disclose new content', 'When generative AI creates new content, always say so, giving the tool\'s name and version and the purpose and manner of use'],
          ['Course rules', 'Any additional rules for a course are communicated before the course begins'],
          ['What counts as fraud', 'Work that no longer reflects your own knowledge and skills, or AI output submitted without proper acknowledgement or with incorrect disclosure'],
          ['Detection tools', 'Scores from AI-detection tools are not evidence of fraud; examiners remain responsible for judging authenticity']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The University of Amsterdam\'s policy framework, updated on 3 June 2025, starts from the principle that students must still demonstrably achieve their learning goals independently. It asks programmes to explore actively what role generative AI can play in the curriculum, and leaves room for faculties and programmes to translate the policy into their own teaching.',
            'Together the two show the shape of Dutch university policy: AI as a legitimate aid, openness about its use, and the student\'s own learning as the thing being assessed.'
          ],
          right: [
            'Notice the rule on detection tools. Groningen states plainly that a detector\'s score is not proof of fraud. That is an honest acknowledgement that such tools can be wrong, and a reminder that the best protection for a student is not hiding AI use but documenting it.',
            'We have no connection with either university. Rules change and differ by course; always follow the ones that apply to you.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.rug.nl/about-ug/organization/quality-assurance/education/artificial-intelligence-ai/" rel="noopener" target="_blank">University of Groningen, basic rules for AI in education</a>; <a class="ag-inline-link" href="https://www.uva.nl/over-de-uva/beleid-en-regelingen/onderwijs/beleidskader-en-richtlijnen-genai-in-het-onderwijs.html" rel="noopener" target="_blank">University of Amsterdam, beleidskader en richtlijnen GenAI in het onderwijs</a>. Read 15 September 2026. This is a summary, not advice on any particular course.' }
      ]
    },
    {
      id: 'build', tint: 'deep', eyebrow: 'What you build',
      h2: 'Using an agent for your coursework, or building one as your project',
      lede: 'The distinction matters. The first can put a student on the wrong side of their university\'s rules. The second is exactly the kind of work those rules encourage: understanding the tool and being open about it.',
      body: [
        { kind: 'three', cells: [
          { h3: 'An agent that plans and acts', p: 'Students build an agent in Python that receives a goal, breaks it into steps, calls tools such as a search function or a calculator, and reports what it did. Every step is written to a log, so the agent\'s reasoning can be inspected afterwards.' },
          { h3: 'An agent that is tested', p: 'Students write a small set of tasks with known answers and measure how often the agent succeeds, where it fails and how it fails. An agent without an evaluation is a demonstration, not a result.' },
          { h3: 'An agent that is disclosed', p: 'Every project ends with a short note: which models and versions it uses, what the student wrote and what was generated, and what the agent must not be trusted with. It is the same habit Groningen asks of students, practised on their own work.' }
        ] },
        { kind: 'table', mt: true, caption: 'Where the line usually falls (our guidance; your course rules decide)', head: ['Activity', 'Usually fine', 'Needs care'], rows: [
          ['Asking an assistant to explain a concept', 'Yes, as a study aid', 'Check the explanation against course material'],
          ['Generating text or code for an assignment', 'Only if the course allows it', 'Disclose tool, version and use; make sure the work is still yours'],
          ['Building an agent as your own project', 'Yes, it is your work', 'Disclose the models used and log what the agent did'],
          ['Relying on an AI detector', 'Not as proof', 'Keep your own drafts and logs instead']
        ] },
        { kind: 'source', html: 'The table is our general guidance, based on the rules summarised above. It is not a ruling on any course; your programme\'s rules always come first.' }
      ]
    },
    {
      id: 'route', tint: '', eyebrow: 'Where it leads',
      h2: 'From a student agent to work an employer can check',
      lede: 'Agents are becoming ordinary tools at work. A student who can build one, test it and explain it is ahead of most graduates.',
      body: [
        { kind: 'two',
          left: [
            'The foundations come first: Python, Git and some data structures. The <a class="ag-inline-link" href="/coding-for-college-students-netherlands">college students page</a> covers them, and the global <a class="ag-inline-link" href="/ai-agents-course">AI agents course</a> page explains agents in more depth.',
            'For students who want to direct coding agents, <a class="ag-inline-link" href="/agentic-coding-classes">agentic coding classes</a> go further.'
          ],
          right: [
            'After graduation, the same skills continue on the <a class="ag-inline-link" href="/ai-agents-course-for-professionals-netherlands">AI agents course for professionals</a>, which also covers what the AI Act asks of organisations.',
            'For a sense of what university AI study involves, the <a class="ag-inline-link" href="/ai-and-python-academy-groningen">Groningen academy page</a> sets out a first year.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The rungs for student agent builders',
    h2: 'From Python to an agent you can evaluate and explain',
    lede: 'Agents sit near the top of the ladder for a reason. A student who cannot evaluate a model cannot judge an agent, and one who cannot program cannot see what the agent is doing.',
    table: { caption: 'The route for students building agents', head: ['Rung', 'What the student learns'], rows: [
      ['1. Python fluency', 'Programs written without an assistant'],
      ['2. Git and logs', 'Versioned work and a record of every change'],
      ['3. Language models', 'What a model does, how it is prompted and grounded'],
      ['4. Agents', 'Planning, tool calls, retrieval and limits'],
      ['5. Evaluation and disclosure', 'Measured success rates and an honest account of the work']
    ] },
    left: { h3: 'Why disclosure is a rung', ps: [
      'Being able to say exactly what you built, what a model generated and how you checked it is a skill. Dutch universities now ask for it; employers value it; and it protects the student.',
      'The complete order of subjects is on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Around blocks and exams', ps: [
      'Students usually take two lessons a week and pause during exam weeks. A thesis with an agent component is often best done one to one.',
      'The Copilot Studio course is taught one to one only.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Eight live courses for student agent builders',
    lede: 'Grouped by stage. Every card opens the course page with its format and fee.',
    bands: [
      { num: 'I', h3: 'Foundations', sub: 'Before any agent', courses: [
        { code: 'AGENTS / BASE / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python Masterclass', blurb: 'Python to an advanced level, the language most agents are built in.' },
        { code: 'AGENTS / BASE / 02', slug: 'git-github-version-control-course-for-college-students', title: 'Git and GitHub for College Students', blurb: 'Versioned work and a visible history, the backbone of honest disclosure.' },
        { code: 'AGENTS / BASE / 03', slug: 'data-structures-algorithms-masterclass-college', title: 'Data Structures and Algorithms', blurb: 'The reasoning that lets a student judge what an agent\'s code costs.' }
      ] },
      { num: 'II', h3: 'Models and agents', sub: 'Building and testing agent systems', courses: [
        { code: 'AGENTS / BUILD / 01', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI: LLMs, RAG and Agents', blurb: 'Language models, retrieval and agent design, with evaluation built in.' },
        { code: 'AGENTS / BUILD / 02', slug: 'ai-ml-masterclass-complete-college', title: 'AI and Machine Learning Masterclass', blurb: 'The machine learning underneath, for students who want to go deeper.' },
        { code: 'AGENTS / BUILD / 03', slug: 'ai-agents-with-microsoft-copilot-studio-course-for-college-students', title: 'AI Agents with Copilot Studio for College Students', blurb: 'Agents in Microsoft Copilot Studio; one to one only.' }
      ] },
      { num: 'III', h3: 'Coding agents', sub: 'Directing agents that write software', courses: [
        { code: 'AGENTS / CODE / 01', slug: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', title: 'Codex and Claude Code', blurb: 'Setting coding agents tasks and reviewing their changes, on your own subscriptions.' },
        { code: 'AGENTS / CODE / 02', slug: 'vibe-coding-for-college-fullstack-ai-dsa-career-course', title: 'Vibe Coding for College', blurb: 'Building with AI help across the stack, and reading every line it produces.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How the classes run',
    h2: 'Agent lessons around a student timetable',
    lede: 'The teachers are in India, which does not change its clocks, so they are three and a half hours ahead of Dutch summer time and four and a half ahead of Dutch winter time. Students usually take evening or weekend lessons, at a time set in the free lesson and adjusted when a new block starts.',
    slots: [
      { time: 'Evening', l: 'After lectures, Dutch time, by arrangement.' },
      { time: 'Weekend', l: 'Saturday or Sunday, good for longer agent-building sessions.' },
      { time: 'Daytime gaps', l: 'Where a timetable leaves space and a teacher is free, often one to one.' }
    ],
    cells: [
      { h3: 'A free first lesson', p: 'You build a very small agent with a teacher, who sees your level and proposes a route.' },
      { h3: 'Groups of five to ten', p: 'Students at the same level, useful for comparing how different agents fail on the same task.' },
      { h3: 'One to one for theses', p: 'For a thesis or project with an agent component, and for the Copilot Studio course.' },
      { h3: 'Logs from the start', p: 'Every agent writes a log from its first run, so evaluation and disclosure are never an afterthought.' },
      { h3: 'In English', p: 'The language of the models, the tools and most technical master\'s programmes here.' },
      { h3: 'Your own repository', p: 'Agents, evaluations and disclosure notes live in your own GitHub repository.' }
    ]
  },

  projectsH2: 'Projects our students published',
  projectsLede: 'Four live projects by our students. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'As posted on Google. We do not write, edit or pay for reviews.',

  fees: {
    h2: 'Fees for students',
    lede: 'Monthly, in US dollars, at the same rates as every country outside India. No enrolment fee and no annual contract. The Copilot Studio course is private tuition only and uses the one-to-one rate.',
    free: ['A real lesson building a small agent', 'A route proposed before any payment', 'No card needed'],
    group: ['Five to ten students at one level', 'The same live teacher each week', 'Agents reviewed weekly', 'A certificate at the end'],
    one: ['A teacher for one student', 'Built around a thesis or project', 'The only format for Copilot Studio']
  },

  faq: {
    eyebrow: 'Questions from students',
    h2: 'What students in the Netherlands ask about agent courses',
    items: [
      { q: 'Am I allowed to use AI agents for my studies?', a: 'That depends on your university and course. At the University of Groningen, for example, AI may be used as a study tool, and generated content must be disclosed with the tool\'s name and version. Always check your own programme\'s rules.' },
      { q: 'Will this course help me do my assignments with AI?', a: 'No. It teaches you to build and understand agents as your own work. Using an agent to produce assessed work can count as fraud under Dutch university rules if the work no longer reflects your own knowledge and skills.' },
      { q: 'Can an AI detector prove I used AI?', a: 'The University of Groningen states that AI-detection scores are not evidence of fraud. Keeping your own drafts, logs and disclosure notes is the better protection.' },
      { q: 'What exactly is an agent?', a: 'A program given a goal rather than instructions, which plans its own steps and uses tools, such as search or code execution, to carry them out.' },
      { q: 'Do I need to know Python first?', a: 'Yes, at least the basics. If you do not, the free lesson will point you to the right starting course.' },
      { q: 'Is the Copilot Studio course available in groups?', a: 'No, it is taught one to one only, because agents are built around specific systems and permissions.' },
      { q: 'Do I need subscriptions for Codex or Claude Code?', a: 'Yes, for the coding agents course you use your own accounts, so everything you build is yours.' },
      { q: 'What does it cost?', a: 'USD 100 a month for a group place and USD 150 a month for one-to-one lessons, billed in US dollars, with no enrolment fee and no yearly contract. The first lesson is free.' },
      { q: 'When are lessons held?', a: 'Evenings and weekends, Dutch time, around your timetable. The teacher is three and a half hours ahead in summer and four and a half in winter.' },
      { q: 'What happens after I send the form?', a: 'We call you at a Dutch hour to arrange the free lesson. Nothing is charged unless you decide to continue.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for students and agent builders',
    lede: 'Related pages for foundations and for what comes after.',
    items: [
      { href: '/coding-for-college-students-netherlands', label: 'Coding for college students', p: 'The foundations every agent builder needs.' },
      { href: '/ai-agents-course-for-professionals-netherlands', label: 'AI agents course for professionals', p: 'The same skills at work, with the AI Act in view.' },
      { href: '/ai-agents-course', label: 'AI agents course', p: 'The global page on what agents are and how they are built.' },
      { href: '/agentic-coding-classes', label: 'Agentic coding classes', p: 'Working with coding agents in depth.' },
      { href: '/ai-and-python-academy-groningen', label: 'AI and Python Academy, Groningen', p: 'What a university AI first year asks.' },
      { href: '/ai-and-python-academy-netherlands', label: 'AI and Python Academy, Netherlands', p: 'The national ladder from Python to agents.' }
    ]
  },

  start: {
    h2: 'Build your first agent in a free lesson',
    lede: 'Leave a number and we will call at a Dutch hour. In the free lesson you build a very small agent with a teacher, and by the end you know which rung to start on.',
    readFirst: 'Would you like to read first? See the <a class="ag-inline-link" href="/ai-agents-course">AI agents course</a> page, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> and the <a class="ag-inline-link" href="/courses">course list</a>.',
    note: 'WhatsApp from a Dutch number is free and usually fastest. The number is Indian; we have no office or premises in the Netherlands.',
    formNote: 'No card, no commitment. One call to set up the lesson.'
  },

  footer: {
    cols: [
      { h4: 'Netherlands', links: [
        { href: '/ai-and-python-academy-netherlands', label: 'Academy, Netherlands' },
        { href: '/coding-for-college-students-netherlands', label: 'Coding for students' },
        { href: '/ai-agents-course-for-professionals-netherlands', label: 'Agents for professionals' },
        { href: '/coding-classes-in-netherlands', label: 'Coding in the Netherlands' }
      ] },
      { h4: 'Agents', links: [
        { href: '/ai-agents-course', label: 'AI agents course' },
        { href: '/agentic-coding-classes', label: 'Agentic coding' },
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Teaching students in the Netherlands on CET and CEST'
  },

  personalityCss: `
.ag-root.ag-ags .ag-hero-grid { gap: clamp(1.25rem, 3.3vw, 2.9rem); }
.ag-root.ag-ags .ag-hero h1 { letter-spacing: -0.019em; }
.ag-root.ag-ags .ag-capsule { border-left-width: 4px; }
.ag-root.ag-ags .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-ags .ag-band-head h3 { letter-spacing: -0.008em; }
.ag-root.ag-ags .ag-table caption { text-align: left; }
.ag-root.ag-ags .ag-spec dt { letter-spacing: 0.1em; }
.ag-root.ag-ags .ag-slots { gap: 1.15rem; }
`,

  mustMention: ['University of Groningen', '28 October 2024', 'name and version', 'not evidence of fraud', 'University of Amsterdam', '3 June 2025', 'demonstrably achieve', 'Copilot Studio']
};
