'use strict';
// AI agents course for students, UK (ag- age and career door; UK cluster Phase 3).
// Sources, read raw on 21 September 2026:
//  - Institute of Student Employers, "Entry-level work reshaped not replaced", 7 May 2026, on the ISE Student
//    Development Survey 2026 (January and February 2026, 144 employer responses): 87% expect AI adoption to
//    reshape graduate and apprentice roles; 58% minor adjustments, 29% significant changes; 43% say entry-level
//    roles have already evolved but not been formally redesigned; 40% expect to replace no entry-level roles by
//    AI, 42% a small number (1 to 10%), 18% more than 10%; skills growing: critical thinking, AI literacy,
//    communication, adaptability; shrinking: routine admin, basic data and writing tasks; employers "almost
//    twice as likely to build digital literacy on the job than recruit for it"; two-thirds believe graduates and
//    apprentices use AI to misrepresent skills, up from around half in 2025; 54% concerned about AI's future
//    impact on new hires.
//  - Russell Group, "Russell Group principles on the use of generative AI tools in education" (PDF), launched
//    July 2023 (date from the Russell Group news page of 5 February 2024): the five principles, quoted; "All 24
//    Russell Group universities have reviewed their academic conduct policies"; uses "likely to differ between
//    academic disciplines"; accountability for accuracy "lies with the user"; 4.3 on asking about specific cases.
//  - HEPI Student Generative AI Survey 2026: page and PDF returned HTTP 403; not circumvented, no HEPI figure
//    used.
// Spine: employers now doubt AI-polished applications (two-thirds suspect misrepresentation), so the student's
// evidence has to be something an interviewer can check: an agent they built, tested and can explain line by
// line, kept separate from anything assessed. The professionals page owns ONS, ICO, NCSC and CMA material.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'guide', tag: 'AI AGENTS, STUDENTS', blurb: 'For UK university students building AI agents as their own projects, with evidence an employer can check and university rules respected.' },
  slug: 'ai-agents-course-for-students-uk',
  code: 'asu',
  accent: '#833F79',
  accentRationale: 'AI agents for students, UK: a plum-magenta from the solver (5.77:1 on every paper tint, dE 8.4 from the nearest used accent), livelier than the navy of the professionals page',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'AI agents course for students, UK',
  title: 'AI Agents Course for University Students in the UK | Live',
  description: 'An AI agents course for UK university students: build, test and explain an agent employers can check, kept apart from assessed work. Live online, first class free.',
  ogDescription: 'Two-thirds of employers in the ISE\'s 2026 survey think candidates use AI to misrepresent their skills. An agent you built, tested and can explain is evidence they can check.',
  twitterDescription: 'Build an AI agent as a UK student: your own project, tested and documented, never your assessed work. Live online, first class free.',
  pageName: 'AI Agents Course for University Students in the UK',
  webPageDescription: 'A live online AI agents course for UK university students, with the ISE employer findings on AI and entry-level work and the Russell Group principles on generative AI.',
  courseDescription: 'Live online AI agent training for UK university students: models, retrieval and tools, test sets, version control and a portfolio project the student can explain in an interview.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'AI agents for students',
  navLinks: [
    { href: '#employers', label: 'What employers say' },
    { href: '#rules', label: 'University rules' },
    { href: '#evidence', label: 'Evidence that counts' },
    { href: '#projects-to-build', label: 'Projects' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'UK &middot; University students &middot; Live online',
  h1: 'AI agents course for university students in the UK',
  lede: 'Graduate employers in the UK have a new worry. In the Institute of Student Employers\' 2026 development survey, two-thirds of employers said they believed graduates and apprentices were using AI to misrepresent their skills, up from around half in 2025. That changes what a strong application looks like. A polished personal statement or a list of AI tools on a CV proves little when anyone can generate one in a minute. What an interviewer can still check is a thing you built and can explain: an AI agent with a clear job, a set of test cases, a history of commits and a list of what it gets wrong. This course teaches UK university students to build exactly that, as their own project, outside anything their university assesses. It covers how agents work, how to ground and test them, how to keep the code in version control, and how to talk about every design decision without notes.',
  secondaryCta: { href: '#employers', label: 'What employers found' },
  wa: 'Hello Modern Age Coders, I am a university student in the UK and would like a free first class on building AI agents.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; your own agent, explained without notes',
  spec: [
    ['For', 'UK university students'],
    ['Builds', 'An agent with tools and retrieval'],
    ['Proves it', 'Test cases and a commit history'],
    ['Explains it', 'Every decision, out loud'],
    ['Never touches', 'Coursework, dissertations or assessed code'],
    ['Format', 'Evenings and weekends, live'],
    ['Group', 'Five to ten, or one to one'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'UK graduate employers expect AI to reshape entry-level work rather than remove it, and they increasingly doubt applications that AI may have polished: in the ISE Student Development Survey 2026, two-thirds believed candidates were using AI to misrepresent their skills. Evidence that a student can build and reason about AI systems therefore carries weight. Modern Age Coders teaches UK university students to build an AI agent as a personal project, grounded in documents, connected to tools, tested against known cases and kept in version control, and to explain it without notes. We never work on coursework, dissertations or anything submitted for assessment. Lessons are live and online, in small groups or one to one. The first class is free; afterwards a group place is USD 100 a month and one-to-one lessons USD 150 a month, with the Copilot Studio course taught one to one only.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three places a student can begin',
    lede: 'Engineering from the model up, an employer platform, or coding agents. Each card opens the full syllabus.',
    items: [
      { course: 'complete-generative-ai-masterclass-college', code: 'ASU / 01', title: 'Generative AI: LLMs, RAG and Agents', note: 'How models are prompted, grounded, given tools and measured, built in Python rather than taken on trust.' },
      { course: 'ai-agents-with-microsoft-copilot-studio-course-for-college-students', code: 'ASU / 02', title: 'Copilot Studio for Students', note: 'Agents built on Microsoft\'s platform, grounded in documents and connected to tools. Taught one to one only.' },
      { course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', code: 'ASU / 03', title: 'Codex and Claude Code', note: 'Directing coding agents through a real repository and reviewing each change they propose.' }
    ]
  },

  sections: [
    {
      id: 'employers', tint: 'tint', eyebrow: 'What employers say',
      h2: 'Entry-level work is being reshaped, not removed',
      lede: 'From the Institute of Student Employers, reporting on 7 May 2026 its Student Development Survey 2026, which ran in January and February 2026 and drew 144 employer responses.',
      body: [
        { kind: 'table', caption: 'Graduate and apprentice employers on AI, ISE Student Development Survey 2026', head: ['Finding', 'Share of employers'], rows: [
          ['Expect AI adoption to reshape graduate and apprentice roles', '87%'],
          ['Of which, foresee minor adjustments to tasks', '58%'],
          ['Of which, anticipate significant changes', '29%'],
          ['Say entry-level roles have already evolved without a formal redesign', '43%'],
          ['Expect to replace no entry-level roles with AI', '40%'],
          ['Expect a small number replaced, 1 to 10% of roles', '42%'],
          ['Expect larger-scale replacement, more than 10%', '18%'],
          ['Believe candidates use AI to misrepresent skills', 'Two-thirds, up from around half in 2025']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The work changes shape',
          left: [
            'The ISE\'s reading is that the shift "is less about jobs disappearing and more about tasks evolving". Employers expect AI to take away some routine admin, basic data and writing tasks, and they named critical thinking, AI literacy, communication and adaptability as the skills that will grow in importance.',
            'Put simply, the graduate who can judge whether an AI output is right is worth more than the one who can only produce it.'
          ],
          rightH3: 'The trust problem',
          right: [
            'The same survey found two-thirds of employers believed graduates and apprentices were using AI to misrepresent their skills, up from around half in 2025. Every application now arrives under a little more suspicion.',
            'The answer is not to avoid AI but to bring evidence that survives questioning: something you made, with a history, which you can take apart in front of an interviewer.'
          ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Taught after hiring', p: 'Employers are "almost twice as likely to build digital literacy on the job than recruit for it", so knowing a list of tools is not what sets a candidate apart.' },
          { h3: 'Already changing', p: '43% of employers said their entry-level roles had already evolved in response to AI without being formally redesigned. The job advert may lag the job.' },
          { h3: 'Worried for new hires', p: '54% of employers said they were concerned about the future impact of AI on new hires, and are adjusting development programmes in response.' }
        ] },
        { kind: 'source', html: 'Source, read 21 September 2026: <a class="ag-inline-link" href="https://ise.org.uk/knowledge/insights/562/entrylevel_work_reshaped_not_replaced/" rel="noopener" target="_blank">Institute of Student Employers, Entry-level work reshaped not replaced</a>, 7 May 2026. The ISE surveys its employer members; the figures describe those who responded, not every UK employer.' }
      ]
    },
    {
      id: 'rules', tint: 'deep', eyebrow: 'University rules',
      h2: 'Your university\'s AI rules come first',
      lede: 'The Russell Group\'s principles on generative AI, launched in July 2023, show how UK universities approach the question. Your own university and department set the rules that apply to you.',
      body: [
        { kind: 'table', caption: 'The five Russell Group principles, as published', head: ['Principle', 'Wording'], rows: [
          ['1', '"Universities will support students and staff to become AI-literate."'],
          ['2', '"Staff should be equipped to support students to use generative AI tools effectively and appropriately in their learning experience."'],
          ['3', '"Universities will adapt teaching and assessment to incorporate the ethical use of generative AI and support equal access."'],
          ['4', '"Universities will ensure academic rigour and integrity is upheld."'],
          ['5', '"Universities will work collaboratively to share best practice as the technology and its application in education evolves."']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Rules differ by module',
          left: [
            'The principles say that "All 24 Russell Group universities have reviewed their academic conduct policies" to reflect generative AI, and that appropriate uses are "likely to differ between academic disciplines". One module may welcome an AI tool with acknowledgement; the next may forbid it outright.',
            'So the only safe answer to whether a tool is allowed in a given piece of work is the one in your module handbook, or from your module leader. The principles themselves encourage students to ask about specific cases openly.'
          ],
          rightH3: 'Where we stand',
          right: [
            'We never write, edit, debug or review anything you will submit for assessment: coursework, lab reports, dissertation code, take-home tests. The agent you build with us is a separate project of your own, chosen so that it overlaps with no assessed work.',
            'If you later want to use it in a module, that is a question for your department, and you should acknowledge it however your university requires.'
          ] },
        { kind: 'p', html: 'One line in the principles is worth keeping on a card above your desk. When information generated by these tools moves into another context, "accountability for the accuracy of information generated by these tools when transferred to another context lies with the user". That is true in a seminar, and it is exactly what an employer will expect of you with an agent at work.' },
        { kind: 'source', html: 'Source, read 21 September 2026: <a class="ag-inline-link" href="https://www.russellgroup.ac.uk/sites/default/files/2025-01/Russell%20Group%20principles%20on%20generative%20AI%20in%20education.pdf" rel="noopener" target="_blank">Russell Group principles on the use of generative AI tools in education</a> (PDF); launch date from the Russell Group\'s own news page. Universities outside the Russell Group publish their own policies.' }
      ]
    },
    {
      id: 'evidence', tint: 'tint', eyebrow: 'Evidence that counts',
      h2: 'Turning a claim on your CV into something checkable',
      lede: 'When employers suspect AI-polished applications, the claims that hold up are the ones with evidence behind them. This is the evidence the course produces.',
      body: [
        { kind: 'table', caption: 'From a CV line to proof', head: ['What the CV says', 'What backs it up', 'What an interviewer can do with it'], rows: [
          ['Built an AI agent', 'A public repository with a readable commit history', 'Scroll back and see the work happen over weeks, not overnight'],
          ['Tested it properly', 'A file of test cases with expected answers, and the pass rate', 'Pick a case and ask why it fails'],
          ['Understands retrieval', 'A note on which documents the agent can see and how they are split', 'Ask what happens when the answer is not in them'],
          ['Knows the limits', 'A short list of known failures in the README', 'Ask which one worries you most, and why'],
          ['Can work with others', 'Pull requests, reviews and issues, even on a solo project', 'Read how you respond to your own mistakes']
        ] },
        { kind: 'p', html: 'None of this needs a famous project. A small agent with honest documentation beats an ambitious one that only works in a demo. The test that matters is simple: could you rebuild the core of it from memory, on a whiteboard, and explain each choice? If the answer is yes, the project is yours in the way an interviewer cares about.' },
        { kind: 'two', mt: true,
          leftH3: 'Why version control matters here',
          left: [
            'A commit history is the one piece of evidence that is hard to fake after the fact. Small, frequent commits with clear messages show how you think, where you got stuck and how you got out.',
            'Git and GitHub are taught alongside the agent work for that reason, not as an afterthought.'
          ],
          rightH3: 'Why failures belong on the page',
          right: [
            'Listing what your agent gets wrong feels like undermining it. In practice it is the strongest signal of judgement you can give, because it proves you tested it seriously.',
            'The same habit is what employers mean by critical thinking and AI literacy: knowing when not to trust the output.'
          ] }
      ]
    },
    {
      id: 'projects-to-build', tint: '', eyebrow: 'Projects',
      h2: 'Agents students build, and the limits built into them',
      lede: 'Each project is small enough to finish in a term, useful enough to matter, and bounded so that it cannot do harm when it goes wrong.',
      body: [
        { kind: 'table', caption: 'Three starter projects', head: ['Agent', 'What it does', 'The limit that makes it safe'], rows: [
          ['Society events helper', 'Answers questions about a student society\'s events from its published calendar and constitution', 'Answers only from those documents and says so when it cannot'],
          ['Application tracker', 'Reads job adverts you save, extracts deadlines and requirements, drafts a checklist', 'Drafts, never sends; every application is yours to write'],
          ['Open data analyst', 'Answers questions about a public dataset by writing and running small queries', 'Read-only access, and every query shown alongside the answer']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'One job each', p: 'An agent with a single task can be tested; one that tries to do everything cannot. Scope is the first design decision, and the most important.' },
          { h3: 'Tools with fences', p: 'Every tool the agent can call is listed, with what it may read and what it may change. Most starter agents may change nothing at all.' },
          { h3: 'Cases before claims', p: 'Twenty or thirty questions with known answers, written before the agent is finished and rerun after every change.' }
        ] },
        { kind: 'p', mt: true, html: 'None of these projects touch a module you are taking, and none are built from your course materials, which keeps them clearly apart from assessed work. Students who want to build in public often take a project on to a <a class="ag-inline-link" href="/student-hackathons-uk">student hackathon</a>. For working adults, the <a class="ag-inline-link" href="/ai-agents-course-for-professionals-uk">professionals course</a> covers agents that act on real organisational systems, and the regulation that comes with them.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'Four stages across a university year',
    lede: 'At one lesson a week, plan on roughly two terms to reach the fourth stage, less with Python already in hand.',
    table: { caption: 'From using AI to explaining an agent you built', head: ['Stage', 'What you can do'], rows: [
      ['1. Read the machine', 'Explain what a language model does with a prompt, and why it gets things wrong'],
      ['2. Ground and connect', 'Give a model your chosen documents and a tool, and trace every step it takes'],
      ['3. Test and break', 'Write a case set, attack your own agent, and fix what breaks'],
      ['4. Ship and defend', 'Publish the repository and README, and explain every choice aloud as you would to an interviewer']
    ] },
    left: { h3: 'Do you need Python first?', ps: [
      'For the engineering route, a working grasp of Python helps a great deal, and the Python course can come first. The Copilot Studio route is configured more than coded.',
      'Where each subject leads is laid out on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Around term and exams', ps: [
      'Billing is monthly, so you can pause for exam season and restart the following term.',
      'Lessons run in the evening or at weekends, clear of lectures and labs.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for students building agents',
    lede: 'Grouped by what they add. The free class settles where you start.',
    bands: [
      { num: 'I', h3: 'The groundwork', sub: 'Before any agent', courses: [
        { code: 'STU / GRD / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python Masterclass', blurb: 'The language nearly all agent engineering is written in.' },
        { code: 'STU / GRD / 02', slug: 'data-structures-algorithms-masterclass-college', title: 'Data Structures and Algorithms', blurb: 'The thinking technical interviews still test.' },
        { code: 'STU / GRD / 03', slug: 'ai-tools-mastery-complete-college', title: 'AI Tools Mastery', blurb: 'Using assistants well, and checking what they give you.' }
      ] },
      { num: 'II', h3: 'Building agents', sub: 'The core of the course', courses: [
        { code: 'STU / AGT / 01', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI: LLMs, RAG and Agents', blurb: 'Retrieval, tools and evaluation, from first principles.' },
        { code: 'STU / AGT / 02', slug: 'python-ai-automation-masterclass-college', title: 'Python and AI Automation', blurb: 'Agents and scripts that run on a schedule.' },
        { code: 'STU / AGT / 03', slug: 'ai-agents-with-microsoft-copilot-studio-course-for-college-students', title: 'Copilot Studio for Students', blurb: 'The Microsoft platform; one to one only.' }
      ] },
      { num: 'III', h3: 'Showing the work', sub: 'Portfolio and practice', courses: [
        { code: 'STU / SHW / 01', slug: 'git-github-version-control-course-for-college-students', title: 'Git and GitHub', blurb: 'The commit history that proves the work is yours.' },
        { code: 'STU / SHW / 02', slug: 'full-stack-web-development-masterclass-college', title: 'Full Stack Web Development', blurb: 'A front end so others can try your agent.' },
        { code: 'STU / SHW / 03', slug: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', title: 'Codex and Claude Code', blurb: 'Coding agents, with every change reviewed by you.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live lessons that fit a timetable',
    lede: 'Our teachers are based in India, where the clocks never change, so the UK is four and a half hours behind during British Summer Time and five and a half hours behind in winter. Evening and weekend lessons in UK time fit comfortably around both.',
    slots: [
      { time: 'Weekday evening', l: 'After lectures and labs, the most common choice.' },
      { time: 'Saturday', l: 'A longer build session once a week.' },
      { time: 'Sunday', l: 'For students with Saturday jobs.' }
    ],
    cells: [
      { h3: 'A free first class', p: 'Talk through what you want to build and leave with a first version of the plan.' },
      { h3: 'Small groups', p: 'Five to ten students at the same level, reviewing each other\'s agents and test sets.' },
      { h3: 'One to one', p: 'For a faster pace, and the only format for the Copilot Studio course.' },
      { h3: 'Your repository', p: 'Everything lives in your own GitHub account, so the evidence stays with you.' },
      { h3: 'Explained out loud', p: 'You talk through your agent\'s design choices in lessons, the way you would to an interviewer.' },
      { h3: 'No assessed work', p: 'We will not touch anything you submit to your university, ever.' }
    ]
  },

  projectsH2: 'Projects built by our students',
  projectsLede: 'Four finished pieces of work by our students; the full collection, across every age group, is on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Word for word from Google: reviews left by our students and their families.',

  fees: {
    h2: 'Fees for students',
    lede: 'A single monthly fee in US dollars, the same in every country outside India. There is no enrolment charge and no term contract, so a month can be the last one whenever exams or a placement get in the way. The Copilot Studio course is one to one only and uses the one-to-one fee.',
    free: ['Your project idea examined with a teacher', 'An honest route from where you are', 'No payment details needed'],
    group: ['Five to ten students at one level', 'The same teacher every week', 'Peer review of agents and tests', 'Pause at the end of any month'],
    one: ['A teacher for you alone', 'A pace set by your timetable', 'The format for Copilot Studio']
  },

  faq: {
    eyebrow: 'Questions from students',
    h2: 'What UK students ask about building agents',
    items: [
      { q: 'Will building an AI agent help me get a graduate job?', a: 'It can help you stand out, but no course guarantees a job. Employers in the ISE survey expect AI to reshape entry-level roles and value critical thinking and AI literacy; a tested agent you can explain is evidence of both.' },
      { q: 'Do employers worry about AI in applications?', a: 'Yes. In the ISE Student Development Survey 2026, two-thirds of employers believed graduates and apprentices were using AI to misrepresent their skills, up from around half in 2025.' },
      { q: 'Can you help with my coursework or dissertation?', a: 'No. We never write, edit, debug or review anything submitted for assessment. The agent you build with us is a separate personal project.' },
      { q: 'Can I use my agent in a university module?', a: 'Only if your module\'s rules allow it, and you should acknowledge it as your university requires. Ask your module leader; rules often differ between modules.' },
      { q: 'Do I need to study computer science?', a: 'No. Agents are useful in economics, engineering, the sciences and the humanities alike. Some Python helps for the engineering route, and the Python course can come first.' },
      { q: 'What will I actually have at the end?', a: 'A public repository with a commit history, a README with the agent\'s purpose and known failures, a test set with a pass rate, and practice explaining it all out loud.' },
      { q: 'Is the Copilot Studio course available in a group?', a: 'No, it is taught one to one only. The other courses on this page run in groups of five to ten or one to one.' },
      { q: 'Do I need to pay for AI tools?', a: 'Not for most of the course. The Codex and Claude Code course needs your own paid Claude and ChatGPT subscriptions, bought directly from those companies.' },
      { q: 'What does it cost?', a: 'The first class is free. After that a group place is USD 100 a month and one-to-one lessons USD 150 a month, with no enrolment fee and no term contract.' },
      { q: 'When are lessons?', a: 'Weekday evenings or weekends in UK time, fixed in the free class. Our teachers are four and a half hours ahead of the UK in summer and five and a half in winter.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'For working adults, for the models underneath, and for building in public.',
    items: [
      { href: '/ai-agents-course-for-professionals-uk', label: 'AI agents for professionals', p: 'Agents at work, with the UK rules on automated decisions.' },
      { href: '/learn-to-train-ai-not-just-prompt-it-uk', label: 'Learn to train AI, not just prompt it', p: 'How models are measured and assured.' },
      { href: '/understand-the-code-dont-copy-paste-uk', label: 'Understand the code, do not copy and paste', p: 'Owning the code an assistant writes.' },
      { href: '/student-hackathons-uk', label: 'Student hackathons in the UK', p: 'Where to take a finished project.' },
      { href: '/best-python-classes-online-uk', label: 'Python classes online', p: 'The language underneath agent work.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'All of our UK pages.' }
    ]
  },

  start: {
    h2: 'Bring a project idea to a free class',
    lede: 'Leave a number and we will call at a time that suits your timetable. Bring an idea, even a vague one; you will leave with a scoped first agent, a list of what it must never do, and a sense of which course fits.',
    readFirst: 'Want to look around first? See <a class="ag-inline-link" href="/how-we-teach">how our lessons work</a>, browse <a class="ag-inline-link" href="/courses">every course</a>, or look at <a class="ag-inline-link" href="/student-labs">projects students have finished</a>.',
    note: 'WhatsApp works well from a UK number and usually gets the quickest reply. We are an Indian team, so the number begins +91; there is no UK campus or office.',
    formNote: 'Free, no card, no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Students', links: [
        { href: '/ai-agents-course-for-professionals-uk', label: 'AI agents for professionals' },
        { href: '/student-hackathons-uk', label: 'Student hackathons' },
        { href: '/understand-the-code-dont-copy-paste-uk', label: 'Understand the code' },
        { href: '/coding-roadmap', label: 'The coding roadmap' }
      ] },
      { h4: 'UK', links: [
        { href: '/coding-classes-in-united-kingdom', label: 'UK coding classes' },
        { href: '/best-python-classes-online-uk', label: 'Python classes online' },
        { href: '/learn-to-train-ai-not-just-prompt-it-uk', label: 'Learn to train AI' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'An agent you can explain beats a CV line you cannot'
  },

  personalityCss: `
.ag-root.ag-asu .ag-hero h1 { letter-spacing: -0.017em; }
.ag-root.ag-asu .ag-capsule { border-left-width: 4px; border-radius: 6px; }
.ag-root.ag-asu .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-asu .ag-table caption { text-align: left; font-weight: 640; }
.ag-root.ag-asu .ag-band-head h3 { letter-spacing: -0.006em; }
.ag-root.ag-asu .ag-slots { gap: 1.08rem; }
`,

  mustMention: ['87%', '58%', '29%', '43%', '40%', 'two-thirds', 'Russell Group', 'All 24 Russell Group universities', 'critical thinking', 'AI literacy', 'commit history', 'assessment', 'Copilot Studio'],

  dossier: {
    curriculumAuthority: 'United Kingdom, university students and graduate employment. Institute of Student Employers, Entry-level work reshaped not replaced, 7 May 2026 (Student Development Survey 2026, January and February 2026, 144 employers): 87% expect AI to reshape graduate and apprentice roles, 58% minor and 29% significant; 43% roles already evolved without formal redesign; 40% no replacement, 42% 1 to 10%, 18% more than 10%; critical thinking, AI literacy, communication and adaptability rising, routine admin, basic data and writing tasks declining; "almost twice as likely to build digital literacy on the job than recruit for it"; two-thirds believe candidates use AI to misrepresent skills, up from around half in 2025; 54% concerned about AI\'s future impact on new hires. Russell Group principles on the use of generative AI tools in education, launched July 2023: five principles quoted; "All 24 Russell Group universities have reviewed their academic conduct policies"; uses "likely to differ between academic disciplines"; accountability for accuracy "lies with the user".',
    localProject: 'An agent you can explain beats a CV line you cannot. The page reads the ISE 2026 employer survey for what it says about AI and entry-level work (reshaped rather than removed; two-thirds of employers suspect AI misrepresentation in applications), sets out the Russell Group principles and the fact that AI rules differ by module, and turns that into a portfolio method: a bounded agent with a commit history, a test set, a list of known failures and a mock interview, kept strictly apart from assessed work. Lesson family: employer and university guidance turned into portfolio evidence.',
    requiredMentions: ['two-thirds', '87%', 'Russell Group', 'assessment'],
    sources: [
      { claim: 'Institute of Student Employers, Entry-level work reshaped not replaced (Student Development Survey 2026): roles, replacement expectations, skills, digital literacy, misrepresentation, concern for new hires.', url: 'https://ise.org.uk/knowledge/insights/562/entrylevel_work_reshaped_not_replaced/' },
      { claim: 'Russell Group principles on the use of generative AI tools in education: the five principles, conduct policy review, discipline differences, user accountability.', url: 'https://www.russellgroup.ac.uk/sites/default/files/2025-01/Russell%20Group%20principles%20on%20generative%20AI%20in%20education.pdf' },
      { claim: 'Russell Group news, 5 February 2024: the principles were launched in July 2023.', url: 'https://www.russellgroup.ac.uk/news/new-principles-on-use-of-ai-in-education/' }
    ],
    rejectedClaims: [
      'HEPI Student Generative AI Survey 2026 figures on student AI use: the page and PDF returned HTTP 403, so none are used.',
      'ISE graduate vacancy forecasts and the share of employers redesigning recruitment: seen only in search summaries, not read raw, so not used.',
      'Any promise of a graduate job or interview: none made.',
      'Any help with coursework, dissertations or assessed code: explicitly refused.',
      'That the Russell Group principles bind universities outside the group: the page says others publish their own policies.'
    ]
  }
};
