'use strict';
// AI agents course for professionals, Netherlands (ag- age door, national).
// Spine: since 2 February 2025 the EU AI Act has required organisations that
// provide or deploy AI systems to work on the AI literacy of their staff
// (Digitale Overheid, 26 February 2025), with prohibitions in force the same
// day and later phases on the government's timetable (2 August 2025, 2026,
// 2027, 2030). CBS: 23 percent of Dutch companies with 10 or more workers used
// AI in 2024 (14 percent in 2023; 59 percent of those with 500 or more; EU 13
// percent). IND 2026 salary criteria frame the international professional.
// Courses: Copilot Studio (one to one only), Codex and Claude Code, and the
// generative AI route. The Gemini Enterprise course has its own price and is
// left off this page to keep the fees block accurate.

module.exports = {
  cluster: 'ag',
  slug: 'ai-agents-course-for-professionals-netherlands',
  code: 'apn',
  accent: '#721118',
  accentRationale: 'Professionals door: a deep crimson from the solver, thirty units or more from every page it links to, the academy pages, the adults and college doors and both Dutch oranges among them, with an unlinked city as its nearest neighbour',
  pageType: 'market',
  market: { name: 'Netherlands', iso: 'NL', dial: '+31', lang: 'en-NL', locale: 'en_NL', geoRegion: 'NL', brandTag: 'Netherlands', phonePlaceholder: '6 XXXX XXXX', minDigits: 9 },
  routeLabel: 'AI agents course for professionals, Netherlands',
  title: 'AI Agents Course for Professionals, Netherlands | Live',
  description: 'Build and govern AI agents at work: Copilot Studio, Codex and Claude Code, taught live online to professionals in the Netherlands, one to one or in small groups.',
  ogDescription: 'Since February 2025 Dutch organisations that use AI must make their staff AI-literate. A live online course for professionals who build and oversee AI agents, from Copilot Studio to coding agents.',
  twitterDescription: 'Copilot Studio, Codex and Claude Code for professionals in the Netherlands. Live online, first lesson free.',
  pageName: 'AI Agents Course for Professionals in the Netherlands',
  webPageDescription: 'Live online AI agent courses for working professionals in the Netherlands: Microsoft Copilot Studio agents, Codex and Claude Code coding agents, generative AI and automation, taught in English.',
  courseDescription: 'A live online programme for professionals in the Netherlands who build, deploy or oversee AI agents: Copilot Studio agents taught one to one, AI coding agents, retrieval and agent design, and the governance an organisation now needs.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'AI and Python Academy, Netherlands', href: '/ai-and-python-academy-netherlands' }],
  crumbLabel: 'For professionals',
  navLinks: [
    { href: '#law', label: 'The AI Act' },
    { href: '#firms', label: 'Dutch firms' },
    { href: '#ladder', label: 'The ladder' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Netherlands &middot; Professionals &middot; Live online',
  h1: 'AI agents course for professionals in the Netherlands',
  lede: 'On 2 February 2025 a new duty reached every Dutch organisation that builds or uses AI. Under the EU AI Act they must now make sure the people who work with those systems know enough about them to use them responsibly: how the technology works, where its opportunities lie and what risks it brings. At the same time, AI agents, programs that take a goal, plan their own steps and act through tools, have moved from demonstrations into ordinary office software. The professional who can build an agent in Copilot Studio, direct a coding agent through a real codebase, and explain to a manager or an auditor what the agent may and may not do, now has a skill the law itself asks organisations to have. This page is for professionals in the Netherlands, many of them international, who want that skill properly, live online and mostly one to one.',
  secondaryCta: { href: '#catalogue', label: 'See the agent courses' },
  wa: 'Hello Modern Age Coders, I work in the Netherlands and would like a free first lesson on the AI agents courses.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students taught &middot; agent courses taught live by specialists',
  spec: [
    ['For', 'Working professionals and teams'],
    ['Builds', 'Copilot Studio agents, coding agents'],
    ['Also', 'Retrieval, agent design, governance'],
    ['Format', 'Live, mostly one to one'],
    ['Copilot Studio', 'One to one only'],
    ['Times', 'Evenings, weekends or in the working day'],
    ['Language', 'English'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders teaches working professionals in the Netherlands to build, direct and govern AI agents, live online. There are three routes: Microsoft Copilot Studio for agents inside an organisation\'s own tools, taught one to one; Codex and Claude Code for professionals who write or manage software; and a generative AI route for those who want to design agent systems from the model up. Every route includes what the AI Act now expects of organisations: knowing what a system does, what it must not do, and who is accountable. Group places are USD 100 a month and one-to-one tuition USD 150; the Copilot Studio courses are taught only one to one, and the first lesson is free.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three agent courses for professionals',
    lede: 'One for agents inside Microsoft tools, one for agents that write code, one for professionals who want to design agent systems themselves. Each opens its own page with full syllabus, format and fee.',
    items: [
      { course: 'ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals', code: 'PRO / 01', title: 'Copilot Studio Agent Masterclass', note: 'Building, testing and governing agents in Microsoft Copilot Studio, taught one to one around the systems your organisation already runs.' },
      { course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', code: 'PRO / 02', title: 'Codex and Claude Code for Professionals', note: 'Directing AI coding agents through real software, reviewing every change they make, and knowing when to stop them. Learners use their own subscriptions to the tools.' },
      { course: 'complete-generative-ai-masterclass-college', code: 'PRO / 03', title: 'Generative AI: LLMs, RAG and Agents', note: 'Language models, retrieval over company documents and agent design from first principles, for professionals who want to build rather than configure.' }
    ]
  },

  sections: [
    {
      id: 'law', tint: 'tint', eyebrow: 'The AI Act',
      h2: 'Since 2 February 2025, AI literacy is an organisation\'s duty',
      lede: 'The EU AI Act is being phased in. Two parts took effect in February 2025, and the Dutch government has published what they mean for organisations here.',
      body: [
        { kind: 'two',
          left: [
            'According to the government\'s Digitale Overheid site, since 2 February 2025 the AI Act has obliged organisations, public ones included, to work on <strong>AI-geletterdheid</strong>, AI literacy. It applies to providers and deployers of AI systems: in practice, any organisation that develops or uses them. AI literacy is described as knowledge and skill in the field of AI: knowing at a basic level how the technology works, where the opportunities are and what risks come with it, including social, ethical and practical aspects, not only technical ones.',
            'The steps the government describes are concrete. An organisation should list the AI systems it uses and the knowledge it already has, then make sure that people who develop or buy AI systems understand how they work and what can go wrong, that those responsible for using a system know how and for what it should be used, and that everyone involved has general knowledge of AI and algorithms. The article setting this out was published on 26 February 2025.'
          ],
          right: [
            'The same day, 2 February 2025, a set of prohibitions came into force across the EU. The government\'s announcement lists among them social scoring, emotion recognition in workplaces and education, manipulative techniques that harm behaviour, real-time biometric identification in public spaces for law enforcement with limited exceptions, and predicting crime from profiling alone. The minister of Economic Affairs, <strong>Dirk Beljaarts</strong>, said the aim was AI models that work according to European norms and values.',
            'The timetable the government published then runs on: requirements for general-purpose AI models from 2 August 2025, for high-risk applications from 2 August 2026, the full act from <strong>2 August 2027</strong>, and high-risk AI in public organisations by 2 August 2030. Timetables can be revised, so organisations should check the current one.'
          ] },
        { kind: 'table', mt: true, caption: 'What the AI literacy duty asks, by role, as the Dutch government describes it', head: ['Who', 'What they should know', 'Where our courses fit'], rows: [
          ['People who develop or buy AI systems', 'How the system works and what risks it can bring', 'The generative AI and coding agent routes'],
          ['People responsible for using a system', 'How and for what it should be used, and the risks of that use', 'Copilot Studio, taught around your own processes'],
          ['Everyone who works with AI', 'General knowledge of AI and algorithms', 'AI tools and analytics courses for colleagues']
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.digitaleoverheid.nl/achtergrondartikelen/wat-je-moet-weten-over-ai-geletterdheid/" rel="noopener" target="_blank">Digitale Overheid, Wat je moet weten over AI-geletterdheid, 26 February 2025</a>; <a class="ag-inline-link" href="https://www.rijksoverheid.nl/actueel/nieuws/2025/02/03/europese-verboden-op-ongewenste-ai-toepassingen-ingegaan" rel="noopener" target="_blank">Rijksoverheid, Europese verboden op ongewenste AI-toepassingen ingegaan, 3 February 2025</a>. Read 15 September 2026. This is general information, not legal advice; our courses do not certify legal compliance.' }
      ]
    },
    {
      id: 'firms', tint: 'deep', eyebrow: 'Dutch firms',
      h2: 'One Dutch company in four now uses AI, and the big ones lead',
      lede: 'CBS figures show how quickly AI has entered Dutch business, and where. They are the context in which the AI literacy duty lands.',
      body: [
        { kind: 'table', caption: 'AI use by Dutch companies with ten or more workers (CBS)', head: ['Measure', 'Figure'], rows: [
          ['Companies using one or more AI technologies, 2024', '23 percent'],
          ['The same, 2023', '14 percent'],
          ['Companies with 500 or more workers, 2024', '59 percent'],
          ['Companies with 10 to 19 workers, 2024', 'nearly 18 percent'],
          ['Most used: written text analysis (text mining), 2024', '14 percent'],
          ['Next: written or spoken text generation, 2024', '12 percent'],
          ['EU average, 2024', '13 percent']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The jump from 14 to 23 percent in a single year, and the lead of large firms at 59 percent, mean that many professionals now work in organisations where AI systems are already in use, and where someone has to understand, configure and answer for them. Text analysis and text generation, the two most common uses, are exactly the jobs that agents built on language models now take on.',
            'Dutch companies are also well ahead of the European average of 13 percent, which puts professionals here closer to the front of the curve than most.'
          ],
          right: [
            'Many of those professionals came to the Netherlands to work. For highly skilled migrants, the IND\'s salary criteria from 1 January 2026 are a gross monthly 5,942 euros for those aged 30 and over and 4,357 euros for those under 30, excluding holiday allowance, with 3,122 euros under the reduced criterion for recent graduates. The same 5,942 euros applies to the EU Blue Card.',
            'For an international professional, skills that an employer is now legally expected to have in its workforce are a practical kind of security. We give no immigration or tax advice; the figures are here as context.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://longreads.cbs.nl/the-netherlands-in-numbers-2025/how-many-companies-in-the-netherlands-are-using-ai/" rel="noopener" target="_blank">CBS, The Netherlands in Numbers 2025, How many companies in the Netherlands are using AI?</a>; <a class="ag-inline-link" href="https://ind.nl/en/required-amounts-income-requirements" rel="noopener" target="_blank">IND, required amounts income requirements</a>. Read 15 September 2026.' }
      ]
    },
    {
      id: 'routes', tint: '', eyebrow: 'The three routes',
      h2: 'Configure, direct or design: three ways into agents',
      lede: 'Professionals come to agents from different directions. The free lesson decides which route fits.',
      body: [
        { kind: 'two',
          left: [
            'Configuring agents in Copilot Studio suits professionals whose organisation runs on Microsoft 365: analysts, operations staff, team leads and IT administrators. It is taught only one to one, because every organisation\'s data, permissions and processes differ, and the lessons are built around yours.',
            'Directing coding agents suits developers, data engineers and technical managers. Codex and Claude Code can write and change large amounts of code; the course teaches how to set them tasks, review every change, keep their work inside a safe boundary and recognise when they are confidently wrong. The global <a class="ag-inline-link" href="/agentic-coding-classes">agentic coding classes</a> page covers this route further.'
          ],
          right: [
            'Designing agent systems suits professionals who want to understand the whole stack: how language models work, how retrieval grounds them in an organisation\'s own documents, and how an agent is constrained so that its failures are visible. The broader <a class="ag-inline-link" href="/ai-agents-course">AI agents course</a> page and <a class="ag-inline-link" href="/ai-agents-and-automation">AI agents and automation</a> set out the ideas.',
            'All three routes include governance: what the agent may do on its own, what needs a human, how its actions are logged, and how it would be explained to a colleague, a manager or a supervisor. The <a class="ag-inline-link" href="/ai-and-python-academy-amsterdam">Amsterdam academy page</a> shows how a Dutch city documents its own algorithms.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The rungs for professionals',
    h2: 'From informed user to accountable builder',
    lede: 'Professionals rarely need every rung, but the order holds. An agent built by someone who cannot evaluate a model, or deployed by someone who cannot say what it may do, is a liability the AI Act now makes visible.',
    table: { caption: 'The route for professionals working with AI agents', head: ['Rung', 'Who usually needs it', 'What it adds'], rows: [
      ['1. AI literacy', 'Everyone who works with AI', 'What systems do, where they fail, what must stay private'],
      ['2. Configuring agents', 'Analysts, team leads, IT staff', 'Agents in Copilot Studio around real processes'],
      ['3. Directing coding agents', 'Developers and technical managers', 'Codex and Claude Code used with review and limits'],
      ['4. Designing agent systems', 'Engineers and architects', 'Retrieval, tools, evaluation and constraints'],
      ['5. Governance', 'Anyone accountable for an agent', 'Permissions, logging, human oversight and explanation']
    ] },
    left: { h3: 'Why governance is a rung, not an appendix', ps: [
      'An agent that acts on its own must have limits someone set deliberately. Writing those limits down, and being able to show them, is now part of what the AI literacy duty implies for the people closest to the system.',
      'The wider order of subjects is on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Fitting it around a working week', ps: [
      'Most professionals take one-to-one lessons at a fixed weekly time, in the evening or occasionally during the working day, and pause during busy periods.',
      'Teams can arrange lessons for several colleagues separately, each built around their own role.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Seven live courses for professionals working with AI',
    lede: 'Grouped by route. Every card opens the course page with its format and fee; the Copilot Studio course is one to one only.',
    bands: [
      { num: 'I', h3: 'Configure agents', sub: 'Inside Microsoft tools, taught one to one', courses: [
        { code: 'PRO / CONF / 01', slug: 'ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals', title: 'Copilot Studio Agent Masterclass', blurb: 'Agents in Microsoft Copilot Studio, from design to testing and governance, built around your organisation\'s own data and permissions.' }
      ] },
      { num: 'II', h3: 'Direct coding agents', sub: 'For people who write or manage software', courses: [
        { code: 'PRO / CODE / 01', slug: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', title: 'Codex and Claude Code for Professionals', blurb: 'Setting coding agents real tasks, reviewing every change and keeping them within safe limits, on your own tool subscriptions.' },
        { code: 'PRO / CODE / 02', slug: 'git-github-advanced-version-control-masterclass-for-professionals', title: 'Advanced Git and GitHub', blurb: 'The version control discipline that makes agent-written code reviewable, reversible and safe to merge.' },
        { code: 'PRO / CODE / 03', slug: 'python-ai-automation-masterclass-college', title: 'Python and AI Automation', blurb: 'Python for automating work with AI tools, the foundation for understanding what a coding agent produces.' }
      ] },
      { num: 'III', h3: 'Design agent systems and build literacy', sub: 'From the model up, and for colleagues', courses: [
        { code: 'PRO / SYS / 01', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI: LLMs, RAG and Agents', blurb: 'Language models, retrieval over internal documents and agent design with evaluation and constraints built in.' },
        { code: 'PRO / SYS / 02', slug: 'ai-tools-mastery-complete-college', title: 'AI Tools Mastery Course', blurb: 'Practical, careful use of AI tools across a team, a good first step towards the literacy the AI Act expects.' },
        { code: 'PRO / SYS / 03', slug: 'data-and-ai-analytics-for-non-programmers-course', title: 'Data and AI Analytics for Non-Programmers', blurb: 'Data and AI assistants for colleagues who do not code, so that the whole team shares a working understanding.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How the classes run',
    h2: 'Built around a professional\'s diary',
    lede: 'Teaching comes from India, which has no daylight saving, so the offset to the Netherlands is three and a half hours while Dutch summer time lasts and four and a half through the winter. Professionals usually take an evening or weekend slot; some book a fixed hour inside the working day. Whatever suits is agreed at the free lesson and can be moved when work demands it.',
    slots: [
      { time: 'Evening', l: 'After work, Dutch time. The usual choice for one-to-one agent lessons.' },
      { time: 'Weekend', l: 'Saturday or Sunday mornings, for longer, uninterrupted sessions.' },
      { time: 'During the day', l: 'For professionals whose employer supports training in working hours, where a specialist is available.' }
    ],
    cells: [
      { h3: 'An opening lesson on your case', p: 'Bring a real process or codebase. The teacher sees where you are and proposes a route before anything is paid.' },
      { h3: 'Mostly one to one', p: 'Agent work depends on each organisation\'s systems, so most professionals learn individually. Copilot Studio is only taught this way.' },
      { h3: 'Small groups where they fit', p: 'For the generative AI and automation routes, groups of five to ten at one level are available and often lively.' },
      { h3: 'Nothing confidential shared', p: 'Lessons use your processes as examples without your organisation\'s confidential data; the teacher works with safe substitutes.' },
      { h3: 'English throughout', p: 'The language of the tools, their documentation and most international teams in the Netherlands.' },
      { h3: 'Work you can show', p: 'Agents, prompts, evaluations and governance notes are kept in your own repository, ready to show a manager or reviewer.' }
    ]
  },

  projectsH2: 'Student projects, still running',
  projectsLede: 'Four live projects by our students, open to anyone who wants to try them. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Taken from Google without changes. We neither write nor pay for reviews.',

  fees: {
    h2: 'Fees for professionals',
    lede: 'Monthly, in US dollars. A group place is the lower rate and private tuition the higher, as in every country outside India. The Copilot Studio course is private tuition by design, so it is charged at the one-to-one rate. No joining fee, no annual contract.',
    free: ['A lesson on your own case', 'A route proposed before any payment', 'No card details'],
    group: ['Five to ten professionals at one level', 'Generative AI and automation routes', 'Weekly review of your work', 'Certificate at the end'],
    one: ['A specialist teacher for you alone', 'Built around your systems and role', 'The only format for Copilot Studio']
  },

  faq: {
    eyebrow: 'Questions from professionals',
    h2: 'What professionals in the Netherlands ask about agent courses',
    items: [
      { q: 'Does the AI Act require me to take a course?', a: 'The AI Act places the duty on organisations that provide or deploy AI systems: since 2 February 2025 they must work on the AI literacy of their staff. It does not prescribe a particular course. Our courses can be part of how an employer meets that duty, but we do not certify legal compliance.' },
      { q: 'What is an AI agent, exactly?', a: 'A program that is given a goal rather than step-by-step instructions, works out its own steps and uses tools to carry them out. Agents in Copilot Studio act inside Microsoft tools; coding agents such as Codex and Claude Code act on software.' },
      { q: 'Why is Copilot Studio only one to one?', a: 'Because every organisation\'s data, permissions and processes are different, and a useful agent has to be built around them. Group lessons cannot do that well.' },
      { q: 'Do I need my own subscriptions for Codex and Claude Code?', a: 'Yes. The coding agents course is taught on the learner\'s own accounts with those tools, so that everything you build stays yours.' },
      { q: 'Is my organisation\'s data safe in the lessons?', a: 'We do not ask for confidential data. Lessons use your processes as examples, with substitute data where needed.' },
      { q: 'Can my employer pay?', a: 'Often, especially now that AI literacy is an organisational duty. We can provide a short description of the route and its outcomes after the free lesson.' },
      { q: 'I am a kennismigrant. Is this relevant to my permit?', a: 'We give no immigration advice. The IND salary criteria from 1 January 2026 are set out above only as context; skills in building and governing AI are simply valuable to employers here.' },
      { q: 'What does it cost?', a: 'Group places are USD 100 a month and private tuition USD 150 a month, billed in US dollars; Copilot Studio is private tuition only. There is no joining fee or annual contract, and the first lesson is free.' },
      { q: 'When can lessons take place?', a: 'Evenings, weekends or, where your employer allows, during the working day. The teacher is three and a half hours ahead of Dutch summer time and four and a half ahead of winter time.' },
      { q: 'What happens after I send the form?', a: 'Someone from the team rings you at a Dutch hour to set up the first lesson. It is free, and nothing is booked or charged until you decide to continue.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More on agents and AI at work',
    lede: 'Related pages, for going deeper or for colleagues.',
    items: [
      { href: '/ai-agents-course', label: 'AI agents course', p: 'The global agents page: what agents are and how they are built.' },
      { href: '/agentic-coding-classes', label: 'Agentic coding classes', p: 'Working with coding agents, in more depth.' },
      { href: '/ai-and-machine-learning-for-working-professionals', label: 'AI and ML for working professionals', p: 'Machine learning for people already in work.' },
      { href: '/coding-and-ai-classes-for-adults-netherlands', label: 'Coding and AI classes for adults', p: 'For colleagues starting with Python, data or AI tools.' },
      { href: '/ai-and-python-academy-the-hague', label: 'AI and Python Academy, The Hague', p: 'Why a model\'s errors must be counted group by group.' },
      { href: '/ai-and-python-academy-netherlands', label: 'AI and Python Academy, Netherlands', p: 'The country-wide academy and its five rungs.' }
    ]
  },

  start: {
    h2: 'Bring a real case to a free lesson',
    lede: 'Leave a number and we will ring at a Dutch hour to fix a time. Bring a process, a codebase or a question from work; the teacher will show you where to start and propose a route.',
    readFirst: 'Rather look around first? The <a class="ag-inline-link" href="/ai-agents-course">AI agents course</a> page explains the ideas, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a lesson, and the <a class="ag-inline-link" href="/courses">course list</a> has every syllabus.',
    note: 'On WhatsApp from a Dutch phone we usually answer fastest, at no cost to you. The number is Indian; we have no office, address or premises in the Netherlands.',
    formNote: 'A call to set a time, nothing more. No card, no contract.'
  },

  footer: {
    cols: [
      { h4: 'Netherlands', links: [
        { href: '/ai-and-python-academy-netherlands', label: 'Academy, Netherlands' },
        { href: '/coding-and-ai-classes-for-adults-netherlands', label: 'Coding for adults' },
        { href: '/coding-for-college-students-netherlands', label: 'Coding for students' },
        { href: '/coding-classes-in-netherlands', label: 'Coding in the Netherlands' }
      ] },
      { h4: 'Agents', links: [
        { href: '/ai-agents-course', label: 'AI agents course' },
        { href: '/agentic-coding-classes', label: 'Agentic coding' },
        { href: '/ai-agents-and-automation', label: 'Agents and automation' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Teaching professionals in the Netherlands on CET and CEST'
  },

  personalityCss: `
.ag-root.ag-apn .ag-hero-grid { gap: clamp(1.3rem, 3.6vw, 3.1rem); }
.ag-root.ag-apn .ag-hero h1 { letter-spacing: -0.021em; }
.ag-root.ag-apn .ag-capsule { border-left-width: 6px; }
.ag-root.ag-apn .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-apn .ag-band-head h3 { letter-spacing: -0.009em; }
.ag-root.ag-apn .ag-table caption { text-align: left; }
.ag-root.ag-apn .ag-spec dt { letter-spacing: 0.1em; }
.ag-root.ag-apn .ag-slots { gap: 1.15rem; }
`,

  mustMention: ['2 February 2025', 'AI-geletterdheid', '26 February 2025', 'Dirk Beljaarts', '2 August 2027', '23 percent', '59 percent', 'text mining', '5,942 euros', '4,357 euros', 'Copilot Studio']
};
