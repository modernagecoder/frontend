'use strict';
// AI agents course for professionals, Ireland (ag- door, Ireland cluster,
// Phase 2). Facts read at primary sources on 16 September 2026: CSO
// Information Society Statistics, Enterprises 2025, released 6 February 2026
// (20.2% of enterprises used AI in 2025, against over 15% in 2024; large 57.7%,
// medium 28.6%, small 17.2%; data mining 10.8%, natural language generation
// 9.3%, automating workflows or assisting decision making 6.2%; business
// administrative processes 7.8%, marketing or sales, ICT services and R&D 5.4%
// each, accounting 4.7%, production 3.3%, logistics 1.5%; the CSO's own
// definition of AI); CSO table ICA238 (2023 8.1%, 2024 15.2%, 2025 20.2%); CSO
// table BIIESA20 (Ireland 19.6%, EU27 20%, Denmark 42%, Finland 37.8% in 2025,
// on a different scope, which is why it must never be mixed with the 20.2% in
// one sentence); CSO table ICA321 (among internet users who had used generative
// AI, 50% used it for professional purposes); the National AI Strategy refresh
// of November 2024 (workers "empowered by AI tools, but not replaced"; the SME
// awareness campaign; the AI development ladder framework; CeADAR designated
// the National AI Hub); Enterprise Ireland's AI Discovery brochure (three
// stages, seven consultant-led days, an 80% grant, a 12 to 18 month roadmap,
// open to Enterprise Ireland clients) noting that its live page states a
// different cap from the brochure; Skillnet Ireland's Upskill SME Training
// Grant (a fixed grant per training day per employee, six AI categories, with
// registration details still to come, so it is not described as open) and the
// National MSc in Artificial Intelligence with the University of Limerick, over
// 400 graduates. No euro amounts appear anywhere, to keep public funding
// figures away from our USD fees. The CSO publishes no agent-specific or
// sector-level AI figures, and the page says so rather than relabelling the
// closest categories. EU AI Act material belongs to another page.

module.exports = {
  cluster: 'ag',
  clusterName: 'Ireland',
  hub: { group: 'guide', tag: 'AI AGENTS, WORK', blurb: 'For professionals in Ireland building AI agents at work, with the national adoption figures read carefully.' },
  slug: 'ai-agents-course-for-professionals-ireland',
  code: 'apr',
  accent: '#2B5B07',
  accentRationale: 'AI agents for professionals, Ireland: a deep olive-green from the solver, separated from the Irish flag greens and from every other Ireland page',
  pageType: 'market',
  market: { name: 'Ireland', iso: 'IE', dial: '+353', lang: 'en-IE', locale: 'en_IE', geoRegion: 'IE', brandTag: 'Ireland', phonePlaceholder: '87 123 4567', minDigits: 7 },
  routeLabel: 'AI agents course for professionals, Ireland',
  title: 'AI Agents Course for Professionals in Ireland | Live',
  description: 'An AI agents course for professionals in Ireland: build, test and govern agents at work, with the national adoption figures read honestly. First class free.',
  ogDescription: 'One in five Irish enterprises used AI in 2025, and almost six in ten large ones. Very few have anyone who can build an agent and prove it works.',
  twitterDescription: 'AI agents for working professionals in Ireland, built and evaluated properly. Live online, first class free.',
  pageName: 'AI Agents Course for Professionals in Ireland',
  webPageDescription: 'A live online AI agents course for professionals in Ireland: what the CSO adoption figures actually show, the public supports that exist, and how to build, test and hand over an agent at work.',
  courseDescription: 'Live online AI agent training for working professionals in Ireland: language models, tools and retrieval, evaluation, logging, handover and the judgement to decide where an agent does not belong.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'AI and machine learning classes in Ireland', href: '/ai-and-machine-learning-classes-in-ireland' }],
  crumbLabel: 'AI agents for professionals, Ireland',
  navLinks: [
    { href: '#adoption', label: 'Adoption, read carefully' },
    { href: '#supports', label: 'Public supports' },
    { href: '#build', label: 'What you build' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Ireland &middot; Working professionals &middot; Live online',
  h1: 'AI agents course for professionals in Ireland',
  lede: 'Irish businesses have moved quickly. The Central Statistics Office found that 20.2% of enterprises used AI in some capacity in 2025, up from just over 15% in 2024 and about 8% in 2023, and that almost six in ten large enterprises now use it. What most of them do not have is somebody who can build an agent, measure whether it works, and say plainly where it should not be used. That gap is what this course fills. It is for professionals who already have a job to protect and improve: analysts, engineers, operations managers, people in finance, marketing and administration who want to put a well-understood agent into a real workflow rather than run another pilot. It covers what an agent is, how to ground it in your own documents, how to test it against cases with known answers, and how to hand it over with a log and an honest account of its limits.',
  secondaryCta: { href: '#adoption', label: 'The adoption figures' },
  wa: 'Hello Modern Age Coders, I work in Ireland and would like a free first class on building AI agents.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; agents built, tested and handed over',
  spec: [
    ['For', 'Working professionals'],
    ['Builds', 'Agents with tools and retrieval'],
    ['Proves', 'Test sets with known answers'],
    ['Delivers', 'Logs, limits and a handover'],
    ['Format', 'Live, around a working week'],
    ['Group', 'Five to ten, or one to one'],
    ['Note', 'The Copilot Studio course is one to one only'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'An agent is a program where a language model directs its own steps and tool use towards a goal. Building one for work is mostly unglamorous: deciding what it may touch, grounding it in the right documents, writing test cases with known answers, logging every step and defining where it must stop and ask a person. We teach that live to professionals in Ireland, in small groups or one to one, on the platforms employers actually use. The first class is free; afterwards a group place is USD 100 a month and one-to-one tuition USD 150 a month, and the Copilot Studio course is taught one to one only.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three routes for working professionals',
    lede: 'From the model upwards, inside Microsoft\'s platform, or directing coding agents. Each card opens its syllabus and format.',
    items: [
      { course: 'ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals', code: 'WORK / 01', title: 'AI Agents with Copilot Studio for Professionals', note: 'Agents built where much of Irish business already works, grounded in your own documents and connected to real systems. One to one only.' },
      { course: 'complete-generative-ai-masterclass-college', code: 'WORK / 02', title: 'Generative AI: LLMs, RAG and Agents', note: 'The engineering underneath any platform: how models are prompted, grounded, given tools and measured.' },
      { course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', code: 'WORK / 03', title: 'Codex and Claude Code', note: 'For technical staff: directing coding agents through a real codebase and reviewing every change they propose.' }
    ]
  },

  sections: [
    {
      id: 'adoption', tint: 'tint', eyebrow: 'Adoption, read carefully',
      h2: 'What Irish businesses are actually doing with AI',
      lede: 'The CSO surveys enterprises with ten or more people. Its 2025 figures are the clearest picture available, and they need reading with some care.',
      body: [
        { kind: 'table', caption: 'Enterprise AI use in Ireland, CSO Information Society Statistics, released 6 February 2026', head: ['Measure', '2025'], rows: [
          ['All enterprises using AI', '20.2%, against just over 15% in 2024 and about 8% in 2023'],
          ['Large enterprises', '57.7%'],
          ['Medium enterprises', '28.6%'],
          ['Small enterprises', '17.2%'],
          ['Most common technology: data mining', '10.8%'],
          ['Natural language generation', '9.3%'],
          ['Automating workflows or assisting decision making', '6.2%']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Two Irish figures, both correct',
          left: [
            'The CSO also publishes a comparison table where Ireland shows 19.6% for 2025 against a European Union average of 20%, with Denmark at 42% and Finland at 37.8%. That is not a contradiction of the 20.2%: the comparison uses a different scope, excluding some sectors.',
            'So the two numbers should never be put in the same sentence. Noticing that is the same skill this course teaches about agent outputs: check what was counted before you compare.'
          ],
          rightH3: 'What the figures do not say',
          right: [
            'There is no published Irish figure for agents specifically. The closest categories are natural language generation and automating workflows, and calling either of them "agents" would be inventing a statistic, so we do not.',
            'There is also no breakdown by sector: we checked every CSO table that mentions AI. If someone quotes you an Irish AI adoption rate for your industry, ask where it came from.'
          ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Where it is used', p: 'Business administrative processes lead at 7.8%, then marketing or sales, ICT services and research and development at 5.4% each, accounting at 4.7%, production at 3.3% and logistics at 1.5%.' },
          { h3: 'What the CSO counts as AI', p: 'Systems using technologies such as text mining, machine learning or deep learning "to predict, recommend or make decisions, with varying levels of autonomy", including chatbots and facial recognition.' },
          { h3: 'And individuals', p: 'Among internet users who had used generative AI in 2025, half had used it for professional purposes, so plenty of staff are already using these tools with or without a policy.' }
        ] },
        { kind: 'source', html: 'Sources, read 16 September 2026: <a class="ag-inline-link" href="https://www.cso.ie/en/releasesandpublications/ep/p-isse/informationsocietystatistics-enterprises2025/artificialintelligence/" rel="noopener" target="_blank">CSO, Information Society Statistics, Enterprises 2025</a>; CSO tables <a class="ag-inline-link" href="https://data.cso.ie/table/ICA238" rel="noopener" target="_blank">ICA238</a>, <a class="ag-inline-link" href="https://data.cso.ie/table/BIIESA20" rel="noopener" target="_blank">BIIESA20</a> and <a class="ag-inline-link" href="https://data.cso.ie/table/ICA321" rel="noopener" target="_blank">ICA321</a>.' }
      ]
    },
    {
      id: 'supports', tint: 'deep', eyebrow: 'Public supports',
      h2: 'What the State already offers, before you pay anyone',
      lede: 'Ireland funds a good deal of AI upskilling and adoption support. If your employer qualifies, start there.',
      body: [
        { kind: 'table', caption: 'Public routes for businesses and staff', head: ['Support', 'What it is'], rows: [
          ['Enterprise Ireland AI Discovery', 'A first stage of seven consultant-led days that audits your data, maps current skills and produces a 12 to 18 month AI roadmap, with the great majority of the cost grant funded, for Enterprise Ireland clients'],
          ['The following stages', 'Support towards building a prototype and then operationalising it, through Enterprise Ireland\'s digital process innovation funding'],
          ['Skillnet Ireland Upskill SME Training Grant', 'A grant to recover salary costs for the days staff spend in AI training, across six named categories from getting started to governance and compliance'],
          ['National MSc in Artificial Intelligence', 'A two-year online part-time masters run with the University of Limerick, which has produced over 400 graduates'],
          ['CeADAR', 'Designated Ireland\'s National AI Hub within the European Digital Innovation Hub network']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Two honest notes. Enterprise Ireland\'s brochure and its live web page state different caps for the same discovery grant, so check the current page rather than a PDF. And the Skillnet grant\'s own page still says registration details will follow, so confirm it is open before planning around it.',
            'These programmes are not ours and we have no involvement in them. We mention them because a professional should exhaust free options before paying for classes.'
          ],
          right: [
            'What weekly live teaching adds is different in kind: a teacher who sees your actual agent, every week, and asks why it failed that test case.',
            'The national strategy frames the goal well: its ambition is workplaces "where workers are empowered by AI tools, but not replaced". Being the person who can build and check the tool is how that works out in practice.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.enterprise-ireland.com/documents/ai-discovery-brochure-2025-pdf-en-165466.pdf" rel="noopener" target="_blank">Enterprise Ireland, AI for Business</a> and its <a class="ag-inline-link" href="https://www.enterprise-ireland.com/aidiscovery" rel="noopener" target="_blank">AI Discovery page</a>; <a class="ag-inline-link" href="https://www.skillnetireland.ie/upskill-sme-training-grant" rel="noopener" target="_blank">Skillnet Ireland, Upskill SME Training Grant</a>; <a class="ag-inline-link" href="https://enterprise.gov.ie/en/publications/publication-files/national-ai-strategy-refresh-2024.pdf" rel="noopener" target="_blank">National AI Strategy refresh, 2024</a>. Read 16 September 2026. Eligibility rules are theirs; check them at source.' }
      ]
    },
    {
      id: 'build', tint: 'tint', eyebrow: 'What you build',
      h2: 'An agent your colleagues can rely on',
      lede: 'The difference between a demo that impresses a meeting and an agent that survives a quarter is almost entirely in the parts nobody demonstrates.',
      body: [
        { kind: 'table', caption: 'What a work-ready agent needs', head: ['Part', 'Why it exists'], rows: [
          ['A narrow job', 'An agent that does one task well can be tested; one that does everything cannot'],
          ['Grounding', 'Answers drawn from your documents and systems, not from the model\'s memory'],
          ['Tools with limits', 'Explicit permissions: what it may read, write, send or spend'],
          ['A test set', 'Twenty to fifty real cases with known answers, run after every change'],
          ['A log', 'Every step recorded, so a wrong answer can be traced rather than argued about'],
          ['A stopping rule', 'The conditions under which it must hand over to a person']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Start where it is dull', p: 'The best first agent handles something repetitive and low risk: triage, lookups, drafting from a template. Nobody thanks you for automating the one process everyone disputes.' },
          { h3: 'Measure before and after', p: 'Time taken, error rate, how often a person intervenes. Without a before, an improvement is an opinion.' },
          { h3: 'Plan the handover', p: 'Somebody other than you has to run it. Documentation, the test set and the log are what make that possible.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'We teach on the platforms professionals actually meet, including Microsoft Copilot Studio, taught one to one because every agent is built around a particular organisation\'s systems and permissions.',
            'Technical staff who want coding agents work through their own repositories, using their own paid accounts, and review every change those agents propose.'
          ],
          right: [
            'What we do not do is tell you an agent belongs in a process it does not. Part of the course is deciding not to build one, which is a perfectly good outcome for a meeting to reach.',
            'The models underneath are covered on <a class="ag-inline-link" href="/learn-to-train-ai-not-just-prompt-it-ireland">learn to train AI</a>, and students in third level have their own page at <a class="ag-inline-link" href="/ai-agents-course-for-students-ireland">AI agents for students</a>.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The rungs',
    h2: 'Five rungs for a professional',
    lede: 'Most working professionals reach the fifth rung in four to six months at one lesson a week.',
    table: { caption: 'From tool user to agent builder', head: ['Rung', 'What you can do'], rows: [
      ['1. Use with judgement', 'Work with AI tools and check their output against what you know'],
      ['2. Ground it', 'Point a model at your own documents and see where retrieval fails'],
      ['3. Give it tools', 'Let it call systems, with permissions written down'],
      ['4. Prove it', 'Run a test set of real cases and report the pass rate'],
      ['5. Hand it over', 'Document, log and support an agent other people depend on']
    ] },
    left: { h3: 'Do you need to code?', ps: [
      'Not for the platform route, where agents are built and configured rather than programmed. For the coding agent work, yes, and the free first class will tell you honestly which suits you.',
      'The surrounding subjects are on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Around a job', ps: [
      'Lessons are weekly and short enough to survive a busy quarter. Professionals often pause for a launch or a year end and pick the same slot back up.',
      'One-to-one lessons suit anyone building on data they cannot show a group.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine live courses for professionals',
    lede: 'By starting point. The free first class decides which one fits your role.',
    bands: [
      { num: 'I', h3: 'Using AI well', sub: 'Before building anything', courses: [
        { code: 'PRO / USE / 01', slug: 'ai-tools-mastery-complete-college', title: 'AI Tools Mastery', blurb: 'Getting real work out of the tools, with checks.' },
        { code: 'PRO / USE / 02', slug: 'data-and-ai-analytics-for-non-programmers-course', title: 'Data and AI Analytics for Non-Programmers', blurb: 'Answers from your own data, no language needed.' },
        { code: 'PRO / USE / 03', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python Masterclass', blurb: 'The language most agent work eventually needs.' }
      ] },
      { num: 'II', h3: 'Building agents', sub: 'Platforms and engineering', courses: [
        { code: 'PRO / BUILD / 01', slug: 'ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals', title: 'AI Agents with Copilot Studio for Professionals', blurb: 'Agents in Microsoft tooling; taught privately only.' },
        { code: 'PRO / BUILD / 02', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI: LLMs, RAG and Agents', blurb: 'Retrieval, tools and evaluation from first principles.' },
        { code: 'PRO / BUILD / 03', slug: 'python-ai-automation-masterclass-college', title: 'Python and AI Automation', blurb: 'Automation that runs without supervision.' }
      ] },
      { num: 'III', h3: 'Engineering practice', sub: 'For technical staff', courses: [
        { code: 'PRO / ENG / 01', slug: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', title: 'Codex and Claude Code', blurb: 'Coding agents directed and reviewed line by line.' },
        { code: 'PRO / ENG / 02', slug: 'git-github-advanced-version-control-masterclass-for-professionals', title: 'Git and GitHub for Professionals', blurb: 'The review discipline agent work depends on.' },
        { code: 'PRO / ENG / 03', slug: 'artificial-intelligence-complete-masterclass-college', title: 'Artificial Intelligence Masterclass', blurb: 'The wider field, for people making decisions about it.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How the classes run',
    h2: 'Lessons that fit a working week',
    lede: 'Teaching is live, from India, at a weekly hour set in Irish time. India keeps one clock all year while Ireland keeps two, so our teachers are four and a half hours ahead of you in summer and five and a half in winter, which makes Irish mornings and evenings both workable.',
    slots: [
      { time: 'Early morning', l: 'Before the Irish working day starts.' },
      { time: 'Evening', l: 'The most popular slot with professionals.' },
      { time: 'Weekend', l: 'Longer builds, for people in delivery roles.' }
    ],
    cells: [
      { h3: 'A free first class', p: 'You describe a real workflow and leave knowing whether an agent belongs in it.' },
      { h3: 'Groups of five to ten', p: 'Professionals at one level, from Ireland and elsewhere, comparing designs.' },
      { h3: 'One to one', p: 'For confidential systems and for the Copilot Studio course, which is private only.' },
      { h3: 'Your own accounts', p: 'Coding agent work uses your own paid tool accounts, so everything built stays yours.' },
      { h3: 'Test sets, always', p: 'No agent is called finished in class without cases whose answers are known.' },
      { h3: 'Handover built in', p: 'Documentation and logs are part of the work, not an afterthought at the end.' }
    ]
  },

  projectsH2: 'Work built by our students',
  projectsLede: 'Four projects our students published. There are many more across every age group on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'From Google, word for word: reviews left by our students and their families, never paid for.',

  fees: {
    h2: 'Fees for professionals',
    lede: 'A single monthly fee in US dollars, the same in every country outside India, with no enrolment charge and no annual contract. The Copilot Studio course is private tuition only and uses the one-to-one rate.',
    free: ['A real workflow examined with a teacher', 'An honest view of whether an agent suits it', 'No card taken'],
    group: ['Five to ten professionals at one level', 'The same teacher each week', 'Agents and test sets reviewed weekly', 'A certificate at the end'],
    one: ['A teacher to yourself', 'Confidential systems and data', 'The only format for Copilot Studio']
  },

  faq: {
    eyebrow: 'Questions from professionals',
    h2: 'What working professionals in Ireland ask',
    items: [
      { q: 'How many Irish businesses actually use AI?', a: 'The CSO found 20.2% of enterprises used AI in some capacity in 2025, up from just over 15% in 2024, with 57.7% of large enterprises and 17.2% of small ones.' },
      { q: 'Is there a figure for my sector?', a: 'No. The CSO does not publish enterprise AI use by sector, so any industry-specific Irish figure you are shown deserves a question about its source.' },
      { q: 'How many companies use AI agents specifically?', a: 'Nobody publishes that for Ireland. The closest official categories are natural language generation and automating workflows, and we do not relabel either as agents.' },
      { q: 'Do I need to be technical?', a: 'Not for the platform route, where agents are configured rather than coded. The coding agent course does expect programming experience.' },
      { q: 'Can my employer get public funding for this?', a: 'Possibly, though not for our classes. Enterprise Ireland supports client companies through its AI Discovery stages and Skillnet Ireland offers an SME training grant. Check their eligibility rules directly.' },
      { q: 'How do I prove an agent works?', a: 'With a test set of real cases whose answers you know, run after every change, plus a before-and-after measure of time or error rate in the actual process.' },
      { q: 'Is the Copilot Studio course available in a group?', a: 'No, it is taught one to one only, because each agent is built around a particular organisation\'s systems and permissions.' },
      { q: 'What does it cost?', a: 'The first class is free. After that a group place is USD 100 a month and one-to-one tuition is USD 150 a month, billed in US dollars, with no enrolment fee.' },
      { q: 'When can I take lessons?', a: 'Early mornings, evenings or weekends, at a weekly hour set in the free class. Our teachers are four and a half hours ahead of Irish time in summer and five and a half in winter.' },
      { q: 'What happens after I send the form?', a: 'We call you at a suitable Irish hour and arrange the free first class. Nothing is charged unless you continue.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'For teams, students and the technology underneath.',
    items: [
      { href: '/ai-agents-course-for-students-ireland', label: 'AI agents course for students', p: 'The same subject at third level.' },
      { href: '/learn-to-train-ai-not-just-prompt-it-ireland', label: 'Learn to train AI, not just prompt it', p: 'The models beneath the agents.' },
      { href: '/best-coding-classes-for-adults-ireland', label: 'Best coding classes for adults in Ireland', p: 'If you need the programming first.' },
      { href: '/data-science-course-ireland', label: 'Data science course in Ireland', p: 'The data an agent will rely on.' },
      { href: '/full-stack-software-development-course-ireland', label: 'Full stack software development', p: 'Where agents get deployed.' },
      { href: '/ai-and-machine-learning-classes-in-ireland', label: 'AI and machine learning classes in Ireland', p: 'The national AI page.' }
    ]
  },

  start: {
    h2: 'Bring a real workflow to a free class',
    lede: 'Leave a number and we will ring at a time that suits your working day in Ireland. In the free class you describe a process you actually run, and leave knowing whether an agent fits it and what building one would involve.',
    readFirst: 'If you would rather read first: <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, the <a class="ag-inline-link" href="/courses">course list</a>, and <a class="ag-inline-link" href="/student-labs">what our students have built</a>.',
    note: 'WhatsApp suits busy days and costs nothing from an Irish number. Ours is an Indian number, as the team works from India, and there is no office in Ireland.',
    formNote: 'No card, no commitment, one call.'
  },

  footer: {
    cols: [
      { h4: 'At work', links: [
        { href: '/ai-agents-course-for-students-ireland', label: 'AI agents for students' },
        { href: '/learn-to-train-ai-not-just-prompt-it-ireland', label: 'Learn to train AI' },
        { href: '/data-science-course-ireland', label: 'Data science' },
        { href: '/coding-roadmap', label: 'The coding roadmap' }
      ] },
      { h4: 'Ireland', links: [
        { href: '/ai-and-machine-learning-classes-in-ireland', label: 'AI classes in Ireland' },
        { href: '/coding-classes-in-ireland', label: 'Coding classes in Ireland' },
        { href: '/best-coding-classes-for-adults-ireland', label: 'Coding for adults' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Agents that survive contact with a real workflow'
  },

  personalityCss: `
.ag-root.ag-apr .ag-hero-grid { gap: clamp(1.14rem, 3.18vw, 2.62rem); }
.ag-root.ag-apr .ag-hero h1 { letter-spacing: -0.0198em; }
.ag-root.ag-apr .ag-capsule { border-left-width: 6px; }
.ag-root.ag-apr .ag-section-head h2 { max-width: 39ch; }
.ag-root.ag-apr .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-apr .ag-band-head h3 { letter-spacing: -0.0035em; }
.ag-root.ag-apr .ag-spec dt { letter-spacing: 0.112em; }
.ag-root.ag-apr .ag-slots { gap: 1.21rem; }
`,

  mustMention: ['20.2%', '57.7%', '28.6%', '17.2%', '10.8%', '9.3%', '6.2%', '19.6%', '37.8%', 'empowered by AI tools', 'Copilot Studio', 'CeADAR']
};
