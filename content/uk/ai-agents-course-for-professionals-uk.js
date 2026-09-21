'use strict';
// AI agents course for professionals, UK (ag- age and career door; UK cluster Phase 3).
// Sources, read raw on 21 September 2026:
//  - ONS, "Artificial intelligence in UK businesses: 2023 to 2026", released 20 July 2026 (BICS wave 159,
//    5 to 28 June 2026; businesses with 10 or more employees unless stated): use of at least one AI technology
//    "from around 12% to around 35% since late 2023"; 49% of businesses with 250 or more employees; adoption
//    "relatively shallow", average technologies per adopter "from around 1.4 to around 1.6"; large language models
//    18%, visual content creation 16%, data processing using machine learning 12%; only 10% of adopters use AI
//    extensively; information and communication 58%, construction 13%; 55% of employees (OPN, Great Britain)
//    against 35% of businesses, with the ONS's own caveats; lack of expertise around 18% among 100 to 249
//    employees, cost around 7% to 14%; around 62% of businesses citing a lack of expertise train or retrain
//    existing staff, against around 26% reporting no barriers; recruitment of AI-skilled staff "relatively
//    uncommon"; around half report no headcount impact, just under 7% of medium-sized businesses a decrease.
//  - gov.uk (DCMS and DSIT), "Data (Use and Access) Act 2025: data protection and privacy changes", 27 June 2025:
//    "more permissive framework"; the three safeguards, quoted. UK GDPR and DPA factsheet: section 80 replaces
//    Article 22 with Articles 22A to 22D. "Plans for commencement", last updated 5 February 2026: Commencement
//    No. 6 brings "the majority of the data protection and privacy provisions in Part 5" into force on
//    5 February 2026.
//  - ICO, "The Data Use and Access Act 2025 (DUAA): what does it mean for organisations?": full range of lawful
//    bases for significant automated decisions with safeguards; not special category data.
//  - ICO news, 31 March 2026, automated decisions in hiring: Article 22A definition quoted; more than 30
//    employers engaged; letters to 16 organisations; three expectations quoted; consultation open until 29 May.
//  - NCSC blog, "Thinking carefully before adopting agentic AI", 15 May 2026, on the joint guidance "Careful
//    adoption of agentic AI services": quotes as used below; the least-privilege and other controls.
//  - CMA, "Agentic AI and consumers", published 9 March 2026: responsibility regardless of people or AI systems;
//    "Consumer facing authority remains limited and escalation to humans is common."
//  - legislation.gov.uk returned an automated-access challenge (HTTP 202, WAF) for section 80 and the
//    commencement regulations; not circumvented. Act wording therefore comes from gov.uk and ICO summaries,
//    and the page never states the commencement date of section 80 specifically.
// Spine: the agent acts; a named person answers for it. ICO (Article 22A safeguards), NCSC (owner, approver,
// monitor, reviewer, and who can stop it) and CMA (responsibility regardless of people or AI) reach the same
// rule, and the course output is an agent record that answers all three. Not legal advice, and says so.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'guide', tag: 'AI AGENTS, WORK', blurb: 'For UK professionals building AI agents at work: ONS adoption figures, Article 22A safeguards, and the NCSC test for deployment.' },
  slug: 'ai-agents-course-for-professionals-uk',
  code: 'apu',
  accent: '#11285F',
  accentRationale: 'AI agents for professionals, UK: a deep regulatory navy from the solver (11.42:1 on every paper tint, dE 8.2 from the nearest used accent), sober enough for a page about accountability',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'AI agents course for professionals, UK',
  title: 'AI Agents Course for Professionals in the UK | Live Online',
  description: 'An AI agents course for UK professionals: build agents that meet Article 22A safeguards and the NCSC test for deployment. Live online, first class free.',
  ogDescription: 'About 35% of UK businesses now use AI. Agents are the next step, and the ICO, the NCSC and the CMA have already said a named person must answer for them.',
  twitterDescription: 'AI agents for working professionals in the UK: least privilege, human intervention, tested cases and a named owner. Live online, first class free.',
  pageName: 'AI Agents Course for Professionals in the UK',
  webPageDescription: 'A live online AI agents course for UK professionals, with the ONS adoption figures, the Article 22A safeguards on automated decisions, and NCSC and CMA guidance on agentic AI.',
  courseDescription: 'Live online AI agent training for UK professionals: grounding, tools and permissions, test cases, attack rehearsal, logging, human intervention and an agent record a manager can audit.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'AI agents for professionals',
  navLinks: [
    { href: '#adoption', label: 'UK adoption' },
    { href: '#decisions', label: 'Automated decisions' },
    { href: '#control', label: 'Security and accountability' },
    { href: '#build', label: 'What you build' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'UK &middot; Working professionals &middot; Live online',
  h1: 'AI agents course for professionals in the UK',
  lede: 'Around 35% of UK businesses with 10 or more employees now use some form of AI, almost three times the share in late 2023, according to the Office for National Statistics. Agents are a further step: software that plans its own steps and acts on real systems, which the ONS does not yet count separately. For organisations taking that step, three UK authorities have already set out what they expect. The Information Commissioner\'s Office applies Article 22A of the UK GDPR to decisions about people taken without meaningful human involvement. The National Cyber Security Centre says an agent whose actions cannot be understood, monitored or contained is not ready to deploy. The Competition and Markets Authority says a business is responsible for how it treats consumers whether it acts through people or through AI systems. This course is for the analysts, operations leads, engineers and managers who are being asked to build these agents, and it teaches them to build ones that can stand up to those questions.',
  secondaryCta: { href: '#decisions', label: 'The rules on automated decisions' },
  wa: 'Hello Modern Age Coders, I work in the UK and would like a free first class on building AI agents.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; agents with an owner and a test set',
  spec: [
    ['For', 'Working professionals in the UK'],
    ['Platforms', 'Copilot Studio, Gemini Enterprise, code'],
    ['Decisions', 'Article 22A safeguards designed in'],
    ['Security', 'NCSC least privilege from day one'],
    ['Proof', 'Tested against known cases'],
    ['Output', 'An agent record a manager can audit'],
    ['Format', 'Small group or one to one'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'An AI agent is software in which a language model plans steps and uses tools to reach a goal. In the UK, three authorities now shape how one should be built. The ICO applies Article 22A of the UK GDPR, which requires safeguards, including access to human intervention, for solely automated decisions with legal or similarly significant effects. The NCSC advises starting small, with low-risk tasks and the minimum access for the shortest time. The CMA holds businesses responsible for how they treat consumers whether through people or AI systems. Modern Age Coders teaches working professionals to build agents that meet all three, live and online, in small groups or one to one. The first class is free; afterwards a group place is USD 100 a month and one-to-one lessons USD 150 a month. Copilot Studio and Gemini Enterprise are taught one to one only, and Gemini Enterprise has its own fee, shown on its course page.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three ways into agent building',
    lede: 'The engineering underneath, or the agent platform your employer already licenses. Each card opens the full syllabus.',
    items: [
      { course: 'complete-generative-ai-masterclass-college', code: 'APU / 01', title: 'Generative AI: LLMs, RAG and Agents', note: 'Retrieval, tool calls and evaluation built from first principles, so no platform is a black box to you.' },
      { course: 'ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals', code: 'APU / 02', title: 'AI Agents with Copilot Studio', note: 'Agents inside Microsoft 365, grounded in your organisation\'s documents. Taught one to one only.' },
      { course: 'build-ai-agents-with-google-gemini-enterprise-course', code: 'APU / 03', title: 'AI Agents with Gemini Enterprise', note: 'The Google route, for organisations that run on Workspace. One to one only, with its own monthly fee.' }
    ]
  },

  sections: [
    {
      id: 'adoption', tint: 'tint', eyebrow: 'UK adoption',
      h2: 'UK businesses use AI widely, but not yet deeply',
      lede: 'From the Office for National Statistics, Artificial intelligence in UK businesses: 2023 to 2026, released 20 July 2026 and based on the Business Insights and Conditions Survey.',
      body: [
        { kind: 'table', caption: 'AI use among UK businesses with 10 or more employees, June 2026 unless stated', head: ['Measure', 'Published figure'], rows: [
          ['Businesses using at least one AI technology', 'Around 35%, up from around 12% in late 2023'],
          ['Businesses with 250 or more employees', '49%'],
          ['Large language models, the most used type', '18%'],
          ['Visual content creation', '16%'],
          ['Data processing using machine learning', '12%'],
          ['AI technologies per adopting business', 'About 1.6, up from about 1.4'],
          ['Adopters that use AI extensively', '10%'],
          ['Information and communication, against construction', '58% against 13%']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Wide, not yet deep',
          left: [
            'The ONS calls adoption to date "relatively shallow". The typical adopting business uses about 1.6 AI technologies, up only modestly since late 2023, and only one adopter in ten describes its use as extensive. For most organisations, AI is still something a person opens, not something that acts on their systems.',
            'That gap, between trying AI and building it into a process, is exactly where agents sit, and the ONS figures suggest most organisations have not crossed it yet.'
          ],
          rightH3: 'The number nobody publishes',
          right: [
            'The ONS does not count agents. Large language models, at 18%, are the closest category, but a business using a chatbot and one letting software act on its finance system both fall into it, so we do not relabel the figure.',
            'The same article sets 55% of employees reporting AI use for work or education beside 35% of businesses, and explains the gap: the employee figure comes from a different survey, covers Great Britain rather than the whole UK, and can include informal use. Staff are often ahead of their employer\'s official systems.'
          ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Expertise is the gap', p: 'A lack of expertise is one of the barriers businesses cite most, reaching around 18% of firms with 100 to 249 employees. Cost holds back around 7% to 14% across size bands.' },
          { h3: 'Employers train, not hire', p: 'Around 62% of businesses citing a lack of AI expertise train or retrain existing staff, against around 26% of those reporting no barriers. Recruiting new AI-skilled staff remains relatively uncommon.' },
          { h3: 'Headcount, so far', p: 'Around half of businesses said AI had no impact on headcount. Reductions were most evident among medium-sized businesses, where just under 7% reported a decrease.' }
        ] },
        { kind: 'source', html: 'Source, read 21 September 2026: <a class="ag-inline-link" href="https://www.ons.gov.uk/businessindustryandtrade/business/businessservices/articles/artificialintelligenceinukbusinesses/2023to2026" rel="noopener" target="_blank">ONS, Artificial intelligence in UK businesses: 2023 to 2026</a>, released 20 July 2026 (Business Insights and Conditions Survey, wave 159, 5 to 28 June 2026). Business figures cover firms with 10 or more employees unless stated.' }
      ]
    },
    {
      id: 'decisions', tint: 'deep', eyebrow: 'Automated decisions',
      h2: 'Where UK data law keeps a person in the decision',
      lede: 'The Data (Use and Access) Act 2025 replaced Article 22 of the UK GDPR with new Articles 22A to 22D. This is the rule an agent meets the moment it decides something about a person.',
      body: [
        { kind: 'p', html: 'The ICO summarises Article 22A like this: automated decision-making is where a decision "is based solely on automated processing (ie there is no meaningful human involvement in the decision)" and "has a legal or similarly significant effect on a person". The government describes the Act as creating a "more permissive framework" for such decisions than the old rule, which was framed as a general prohibition with narrow exceptions, on condition that organisations put safeguards in place.' },
        { kind: 'table', mt: true, caption: 'The safeguards as the government lists them, and what each asks of an agent', head: ['Safeguard', 'What the agent\'s designer has to build'], rows: [
          ['"providing people with information about significant decisions made about them"', 'A plain-language notice, produced with the decision, that the person affected can actually understand'],
          ['"enabling them to make representations about and to challenge such decisions"', 'A route back in, and a log showing exactly what the agent saw and did'],
          ['"enabling them to obtain human intervention in respect of such decisions"', 'A named person with the authority to review the decision and change it']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What changed, and what did not',
          left: [
            'The ICO explains that organisations can now rely on a much wider range of lawful bases for significant automated decisions, as long as appropriate safeguards continue to apply. That does not extend to special category data, such as health or ethnicity, which stays more protected.',
            'The government commenced the majority of the Act\'s data protection and privacy provisions on 5 February 2026. Keeping a person in the loop is no longer just a slogan here; it is a design requirement with a legal shape.'
          ],
          rightH3: 'Hiring is where the ICO is looking',
          right: [
            'On 31 March 2026 the ICO published a report on automated decisions in recruitment, after engaging with more than 30 employers, and wrote to 16 organisations likely to be making automated decisions about candidates. Its expectations were to "Proactively monitor for bias", "Be transparent with jobseekers" and "Explain rights to recourse".',
            'Its draft guidance on automated decision-making was open for consultation until 29 May 2026. Check the ICO\'s site for the current version before relying on any summary, this one included.'
          ] },
        { kind: 'p', html: 'None of this is legal advice, and the course does not give any. What it does is make the questions impossible to skip. Is a person meaningfully involved, or approving whatever the agent produces? Does the outcome have a legal or similarly significant effect on someone? Could that person find out, object, and reach somebody able to change it? Answering those before building costs an afternoon; answering them after a complaint costs a great deal more.' },
        { kind: 'source', html: 'Sources, read 21 September 2026: <a class="ag-inline-link" href="https://www.gov.uk/guidance/data-use-and-access-act-2025-data-protection-and-privacy-changes" rel="noopener" target="_blank">gov.uk, Data (Use and Access) Act 2025: data protection and privacy changes</a>; <a class="ag-inline-link" href="https://www.gov.uk/government/publications/data-use-and-access-act-2025-factsheets/data-use-and-access-act-factsheet-uk-gdpr-and-dpa" rel="noopener" target="_blank">UK GDPR and DPA factsheet</a>; <a class="ag-inline-link" href="https://www.gov.uk/guidance/data-use-and-access-act-2025-plans-for-commencement" rel="noopener" target="_blank">plans for commencement</a>; <a class="ag-inline-link" href="https://ico.org.uk/about-the-ico/what-we-do/legislation-we-cover/data-use-and-access-act-2025/the-data-use-and-access-act-2025-what-does-it-mean-for-organisations/" rel="noopener" target="_blank">ICO, what the Act means for organisations</a>; <a class="ag-inline-link" href="https://ico.org.uk/about-the-ico/media-centre/news-and-blogs/2026/03/automated-decisions-can-streamline-the-hiring-process-with-the-right-safeguards-in-place/" rel="noopener" target="_blank">ICO, automated decisions in hiring</a>, 31 March 2026.' }
      ]
    },
    {
      id: 'control', tint: 'tint', eyebrow: 'Security and accountability',
      h2: 'The agent acts; a named person answers for it',
      lede: 'Two more UK authorities reached the same conclusion from different directions in 2026: the National Cyber Security Centre on security, and the Competition and Markets Authority on consumers.',
      body: [
        { kind: 'p', html: 'On 15 May 2026 the NCSC summarised new joint guidance, Careful adoption of agentic AI services, written with international partners. Its advice is that organisations should "start small, use agents only for low-risk tasks" and apply established cyber security controls from the outset. Its test for readiness is blunt: "If you cannot understand, monitor or contain an agent\'s actions, it is not ready for deployment".' },
        { kind: 'table', mt: true, caption: 'NCSC controls, and how each appears in an agent built on this course', head: ['NCSC control', 'In the agent you build'], rows: [
          ['Least privilege: "give agents only the minimum access they need, for the shortest time required"', 'A written list of every system the agent may read or change, and nothing beyond it'],
          ['Limit scope', 'Actions and hours constrained in configuration, not only in the prompt'],
          ['Avoid long-lived credentials', 'Temporary keys, revoked when the task finishes'],
          ['Monitor behaviour', 'A log of every tool call, reviewed rather than simply stored'],
          ['Threat-model the deployment', 'Test cases that try to manipulate the agent, including instructions hidden in documents it reads'],
          ['Plan for incidents', 'A way to stop the agent at once, and a named person allowed to use it']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Five answers before connecting anything',
          left: [
            'The NCSC asks organisations to be clear about "who owns an agentic system, who approves its access, who monitors its behaviour, who reviews incidents, and ultimately who can stop it", and to settle this before the agent is connected to real systems or data.',
            'On the course, those five answers sit at the top of every agent\'s documentation. An agent without them is unfinished, however impressive it looks in a meeting.'
          ],
          rightH3: 'Consumers: the same principle',
          right: [
            'The CMA\'s paper Agentic AI and consumers, published on 9 March 2026, states that "businesses are responsible for how they engage with consumers, regardless of whether that is through people or AI systems".',
            'It also observes that where businesses deploy agents today, "Consumer facing authority remains limited and escalation to humans is common." Handing over to a person is a sound design pattern, not a weakness to engineer away.'
          ] },
        { kind: 'source', html: 'Sources, read 21 September 2026: <a class="ag-inline-link" href="https://www.ncsc.gov.uk/blogs/thinking-carefully-before-adopting-agentic-ai" rel="noopener" target="_blank">NCSC, Thinking carefully before adopting agentic AI</a>, 15 May 2026; <a class="ag-inline-link" href="https://www.gov.uk/government/publications/agentic-ai-and-consumers/agentic-ai-and-consumers" rel="noopener" target="_blank">CMA, Agentic AI and consumers</a>, 9 March 2026.' }
      ]
    },
    {
      id: 'build', tint: '', eyebrow: 'What you build',
      h2: 'An agent with its paperwork done',
      lede: 'Every agent built on the course ends with a one-page record that a manager, an auditor or a data protection officer could read in five minutes.',
      body: [
        { kind: 'table', caption: 'The agent record', head: ['Field', 'What goes in it', 'The rule it answers'], rows: [
          ['Owner', 'The person who answers for the agent and can switch it off', 'NCSC accountability'],
          ['Job', 'One task, written in a single sentence', 'Start small'],
          ['Access', 'Each system, the permission level, and how long access lasts', 'Least privilege'],
          ['Data', 'Whether personal or special category data is involved', 'UK GDPR'],
          ['Decisions', 'Whether any output is a significant decision about a person, and where a human steps in', 'Article 22A'],
          ['Evidence', 'The test cases, the pass rate, and when they were last run', 'Your own standard of proof'],
          ['Hand-over', 'What makes the agent stop and pass the case to a person, and which person', 'Escalation']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'A dull first agent', p: 'Triage, lookups and drafting from templates make good first agents: frequent, low stakes and easy to check. The NCSC points the same way, towards tasks that are repetitive, well understood and low risk.' },
          { h3: 'Cases with known answers', p: 'Thirty or so real examples with agreed outcomes, rerun after every change. A pass rate you can repeat is worth more than a demonstration that went well once.' },
          { h3: 'Attacks, rehearsed', p: 'Documents carrying hidden instructions, requests just outside the agent\'s job, inputs designed to make it overreach. Far better found in class than in production.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'The platforms are the ones UK employers already pay for. Microsoft Copilot Studio and Google Gemini Enterprise are each taught one to one, because every agent is shaped by one organisation\'s licences, data and permissions. Engineers can work in code instead, building retrieval, tool calls and evaluation themselves.',
            'Coding agents such as Codex and Claude Code are taught on your own paid subscriptions, bought directly from their providers and separate from our fee, so nothing you build depends on us.'
          ],
          right: [
            'Sometimes the right answer is not to build an agent at all. A process that is disputed, rare or high stakes may be better simplified, left with a person, or automated with plain rules. The NCSC asks the same thing: whether AI is really needed.',
            'How models are trained and measured is covered on <a class="ag-inline-link" href="/learn-to-train-ai-not-just-prompt-it-uk">learn to train AI, not just prompt it</a>, and why reading AI output critically matters is on <a class="ag-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'Five stages from user to owner',
    lede: 'Plan on roughly four to six months at one lesson a week, less if you already work with data or code.',
    table: { caption: 'From checking AI output to owning an agent', head: ['Stage', 'What you can do'], rows: [
      ['1. Check', 'Use AI tools on real work and catch their errors against what you know'],
      ['2. Ground', 'Connect a model to your own documents and find where retrieval misses'],
      ['3. Connect', 'Give it tools, with access written down and limited'],
      ['4. Test', 'Run a case set, attack the agent, and report the pass rate honestly'],
      ['5. Own', 'Complete the agent record and run the agent for other people']
    ] },
    left: { h3: 'Code or configuration?', ps: [
      'Copilot Studio and Gemini Enterprise are configured more than programmed. Python becomes useful once you want custom tools or your own evaluation scripts, and the free class settles which route suits your role.',
      'The wider sequence of subjects is on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Fitted around work', ps: [
      'One lesson a week, short enough to survive a quarter end. Billing is monthly, so a launch or an audit season can mean pausing at the end of a month and starting again later.',
      'Confidential systems belong in one-to-one lessons, where nothing is shown to a group.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses, three starting points',
    lede: 'Choose by where you begin rather than by job title. The free class confirms the choice.',
    bands: [
      { num: 'I', h3: 'Foundations', sub: 'Before building an agent', courses: [
        { code: 'AGT / BASE / 01', slug: 'ai-tools-mastery-complete-college', title: 'AI Tools Mastery', blurb: 'Real work from AI assistants, and the habit of checking it.' },
        { code: 'AGT / BASE / 02', slug: 'data-and-ai-analytics-for-non-programmers-course', title: 'Data and AI for Non-Programmers', blurb: 'Answers from your own data, no language required.' },
        { code: 'AGT / BASE / 03', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python from Zero', blurb: 'For custom tools, evaluation scripts and automation.' }
      ] },
      { num: 'II', h3: 'Agent platforms', sub: 'In the tools employers license', courses: [
        { code: 'AGT / PLAT / 01', slug: 'ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals', title: 'AI Agents with Copilot Studio', blurb: 'Microsoft 365 agents, taught one to one only.' },
        { code: 'AGT / PLAT / 02', slug: 'build-ai-agents-with-google-gemini-enterprise-course', title: 'AI Agents with Gemini Enterprise', blurb: 'Workspace agents; one to one, with its own fee.' },
        { code: 'AGT / PLAT / 03', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI: LLMs, RAG and Agents', blurb: 'The engineering beneath every platform.' }
      ] },
      { num: 'III', h3: 'Engineering', sub: 'For technical staff', courses: [
        { code: 'AGT / ENG / 01', slug: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', title: 'Codex and Claude Code', blurb: 'Coding agents directed, every change reviewed.' },
        { code: 'AGT / ENG / 02', slug: 'python-ai-automation-masterclass-college', title: 'Python and AI Automation', blurb: 'Scheduled jobs that run with nobody watching.' },
        { code: 'AGT / ENG / 03', slug: 'git-github-advanced-version-control-masterclass-for-professionals', title: 'Git and GitHub for Professionals', blurb: 'Review and rollback, which agent work relies on.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live lessons on UK working hours',
    lede: 'Our teachers work from India, which does not change its clocks. The UK is four and a half hours behind India during British Summer Time and five and a half hours behind in winter, so UK mornings, evenings and weekends can all be arranged.',
    slots: [
      { time: 'Before work', l: 'An early slot, ahead of the UK working day.' },
      { time: 'After work', l: 'The usual choice for people in full-time roles.' },
      { time: 'Weekend', l: 'Longer sessions for building and testing.' }
    ],
    cells: [
      { h3: 'A free first class', p: 'Bring a process you run and leave knowing whether an agent belongs in it.' },
      { h3: 'Small groups', p: 'Five to ten professionals at one level, comparing designs and test results.' },
      { h3: 'One to one', p: 'For confidential data, and the only format for Copilot Studio and Gemini Enterprise.' },
      { h3: 'Your own subscriptions', p: 'Coding-agent work runs on accounts you own, so the work stays with you.' },
      { h3: 'Records, not demos', p: 'An agent counts as finished when its record is complete and its tests pass.' },
      { h3: 'Every step questioned', p: 'A teacher reviews what the agent did and why, not only what it produced.' }
    ]
  },

  projectsH2: 'Work our students have built',
  projectsLede: 'Four finished projects from our students. Many more, from every age group, are collected in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Reviews posted on Google by our students and their families, reproduced as written.',

  fees: {
    h2: 'What the course costs',
    lede: 'One monthly fee in US dollars, charged the same way in every country outside India, with no enrolment fee and nothing to sign beyond the month. Copilot Studio and Gemini Enterprise are one to one only, and Gemini Enterprise carries its own monthly fee, shown on its course page.',
    free: ['A real process examined with a teacher', 'A straight answer on whether an agent fits', 'No payment details asked'],
    group: ['Five to ten professionals at one level', 'One teacher throughout', 'Agent records and tests reviewed', 'Stop at the end of any month'],
    one: ['A teacher for you alone', 'Room for confidential systems', 'Required for Copilot Studio and Gemini Enterprise']
  },

  faq: {
    eyebrow: 'Questions from UK professionals',
    h2: 'What professionals ask about agents',
    items: [
      { q: 'How many UK businesses use AI?', a: 'The ONS found that around 35% of businesses with 10 or more employees used at least one AI technology in June 2026, up from around 12% in late 2023, and 49% of those with 250 or more employees.' },
      { q: 'How many use AI agents?', a: 'Nobody publishes that for the UK. The ONS counts large language models, used by 18% of businesses, and other technology types, but not agents, and we do not relabel its categories.' },
      { q: 'Can an AI agent make decisions about people in the UK?', a: 'Under Article 22A of the UK GDPR, a solely automated decision with a legal or similarly significant effect needs safeguards: information about the decision, a way to make representations and challenge it, and access to human intervention. This is general information, not legal advice.' },
      { q: 'Is the ICO looking at AI in recruitment?', a: 'Yes. In March 2026 it published a report on automated decisions in hiring and wrote to 16 organisations, expecting bias monitoring, transparency with candidates and a clear way to challenge a decision.' },
      { q: 'What does the NCSC advise about agents?', a: 'Start small with low-risk tasks, give agents the minimum access for the shortest time, decide who owns and can stop each one, and do not deploy an agent whose actions you cannot understand, monitor or contain.' },
      { q: 'Do I need to know how to code?', a: 'Not for Copilot Studio or Gemini Enterprise, which are mostly configured. The engineering and coding-agent courses expect some programming, which the Python course can supply first.' },
      { q: 'Can I learn Copilot Studio in a group?', a: 'No. Copilot Studio and Gemini Enterprise are taught one to one only, because each agent depends on one organisation\'s licences, data and permissions.' },
      { q: 'Can I use my employer\'s systems in lessons?', a: 'Only with their permission, and only one to one. Where that is not possible, the Copilot Studio course arranges a practice environment.' },
      { q: 'What does it cost?', a: 'The first class is free. After that a group place is USD 100 a month and one-to-one lessons USD 150 a month, except Gemini Enterprise, whose fee is on its course page. There is no enrolment fee.' },
      { q: 'When are the lessons?', a: 'Before work, after work or at weekends in UK time, fixed in the free class. Our teachers are four and a half hours ahead of the UK in summer and five and a half in winter.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'The models underneath, the programming first, and reading what AI writes.',
    items: [
      { href: '/learn-to-train-ai-not-just-prompt-it-uk', label: 'Learn to train AI, not just prompt it', p: 'How models are measured and assured.' },
      { href: '/learn-to-think-not-just-use-ai-tools-uk', label: 'Learn to think, not just use AI tools', p: 'Why judgement still decides the outcome.' },
      { href: '/understand-the-code-dont-copy-paste-uk', label: 'Understand the code, do not copy and paste', p: 'Reading what an assistant writes for you.' },
      { href: '/best-coding-classes-for-adults-uk', label: 'Coding classes for adults', p: 'When the programming has to come first.' },
      { href: '/learn-to-code-over-50-uk', label: 'Learn to code over 50', p: 'Starting later, and England\'s free routes.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Every page for the UK in one place.' }
    ]
  },

  start: {
    h2: 'Bring one real process to a free class',
    lede: 'Leave a number and we will ring at a time that fits your UK working day. Describe a process you actually run; you will leave with a view on whether an agent belongs in it, and on what its record would need to say.',
    readFirst: 'Prefer to read before talking? The <a class="ag-inline-link" href="/how-we-teach">teaching approach</a> comes first, then the <a class="ag-inline-link" href="/courses">full course list</a>, then finished work in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
    note: 'WhatsApp is often the quickest way to reach us from a UK mobile. The team works from India, so our number starts +91, and we have no UK office.',
    formNote: 'One call. No card, nothing signed.'
  },

  footer: {
    cols: [
      { h4: 'AI at work', links: [
        { href: '/learn-to-train-ai-not-just-prompt-it-uk', label: 'Learn to train AI' },
        { href: '/learn-to-think-not-just-use-ai-tools-uk', label: 'Thinking beyond AI tools' },
        { href: '/understand-the-code-dont-copy-paste-uk', label: 'Understand the code' },
        { href: '/coding-roadmap', label: 'The coding roadmap' }
      ] },
      { h4: 'UK', links: [
        { href: '/coding-classes-in-united-kingdom', label: 'UK coding classes' },
        { href: '/coding-and-ai-classes-in-england', label: 'Coding and AI in England' },
        { href: '/best-coding-classes-for-adults-uk', label: 'Coding for adults' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Agents with an owner, a log and an off switch'
  },

  personalityCss: `
.ag-root.ag-apu .ag-hero h1 { letter-spacing: -0.021em; font-weight: 680; }
.ag-root.ag-apu .ag-capsule { border-left-width: 7px; border-radius: 2px; }
.ag-root.ag-apu .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-apu .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-apu .ag-table th:first-child { width: 30%; }
.ag-root.ag-apu .ag-spec dt { letter-spacing: 0.094em; }
`,

  mustMention: ['35%', '49%', '18%', '1.6', '62%', 'Article 22A', 'human intervention', 'least privilege', 'NCSC', 'CMA', 'Copilot Studio', 'Gemini Enterprise'],

  dossier: {
    curriculumAuthority: 'United Kingdom, AI at work. ONS, Artificial intelligence in UK businesses: 2023 to 2026, released 20 July 2026 (BICS wave 159): "from around 12% to around 35% since late 2023"; 49% of businesses with 250 or more employees; adoption "relatively shallow", technologies per adopter "from around 1.4 to around 1.6"; large language models 18%, visual content creation 16%, machine learning data processing 12%; 10% of adopters use AI extensively; information and communication 58%, construction 13%; 55% of employees against 35% of businesses, different surveys; lack of expertise around 18% at 100 to 249 employees; around 62% of businesses citing a lack of expertise train or retrain staff against around 26% with no barriers. gov.uk, Data (Use and Access) Act 2025: data protection and privacy changes: "more permissive framework" and the three safeguards; factsheet: section 80 replaces Article 22 with Articles 22A to 22D; commencement page: majority of Part 5 data protection provisions in force 5 February 2026. ICO: Article 22A definition; wider lawful bases, not special category data; 31 March 2026 recruitment report, 30+ employers, 16 letters, three expectations. NCSC, 15 May 2026: "start small, use agents only for low-risk tasks"; "If you cannot understand, monitor or contain an agent\'s actions, it is not ready for deployment"; owner, approver, monitor, reviewer and who can stop it; least privilege. CMA, Agentic AI and consumers, 9 March 2026: responsibility "regardless of whether that is through people or AI systems".',
    localProject: 'The agent acts; a named person answers for it. The page sets out the ONS picture of wide but shallow AI adoption in UK businesses (no agent figure exists and none is invented), then shows how three UK authorities converge on one rule: the ICO through the Article 22A safeguards for solely automated significant decisions, the NCSC through least privilege and five accountability questions, and the CMA through business responsibility for AI systems. The course output is a one-page agent record whose fields each answer one of those rules. Lesson family: regulator guidance turned into design requirements for agents.',
    requiredMentions: ['Article 22A', 'human intervention', 'NCSC', 'CMA', '35%'],
    sources: [
      { claim: 'ONS, Artificial intelligence in UK businesses: 2023 to 2026: adoption rates, technology types, depth of use, sectors, barriers, skills responses and headcount.', url: 'https://www.ons.gov.uk/businessindustryandtrade/business/businessservices/articles/artificialintelligenceinukbusinesses/2023to2026' },
      { claim: 'gov.uk, Data (Use and Access) Act 2025: data protection and privacy changes: the more permissive framework and the three safeguards.', url: 'https://www.gov.uk/guidance/data-use-and-access-act-2025-data-protection-and-privacy-changes' },
      { claim: 'gov.uk, UK GDPR and DPA factsheet: section 80 replaces Article 22 with Articles 22A to 22D.', url: 'https://www.gov.uk/government/publications/data-use-and-access-act-2025-factsheets/data-use-and-access-act-factsheet-uk-gdpr-and-dpa' },
      { claim: 'gov.uk, Data Use and Access Act 2025: plans for commencement: majority of Part 5 data protection provisions commenced 5 February 2026.', url: 'https://www.gov.uk/guidance/data-use-and-access-act-2025-plans-for-commencement' },
      { claim: 'ICO, what the DUAA means for organisations: lawful bases for significant automated decisions; special category data excluded.', url: 'https://ico.org.uk/about-the-ico/what-we-do/legislation-we-cover/data-use-and-access-act-2025/the-data-use-and-access-act-2025-what-does-it-mean-for-organisations/' },
      { claim: 'ICO, automated decisions in hiring, 31 March 2026: Article 22A definition, employers engaged, letters, expectations, consultation date.', url: 'https://ico.org.uk/about-the-ico/media-centre/news-and-blogs/2026/03/automated-decisions-can-streamline-the-hiring-process-with-the-right-safeguards-in-place/' },
      { claim: 'NCSC, Thinking carefully before adopting agentic AI, 15 May 2026: start small, readiness test, accountability questions, controls.', url: 'https://www.ncsc.gov.uk/blogs/thinking-carefully-before-adopting-agentic-ai' },
      { claim: 'CMA, Agentic AI and consumers, 9 March 2026: business responsibility regardless of people or AI; limited consumer-facing authority.', url: 'https://www.gov.uk/government/publications/agentic-ai-and-consumers/agentic-ai-and-consumers' }
    ],
    rejectedClaims: [
      'An agent adoption rate for the UK: none is published, and the large language model figure is not relabelled as one.',
      'The commencement date of section 80 specifically: the regulations could not be read (legislation.gov.uk automated-access challenge), so the page states only what the commencement page says about Part 5 as a whole.',
      'That recognised legitimate interests is excluded as a lawful basis for automated decisions: seen only in a search summary, so the page says "a much wider range" rather than "the full range".',
      'A date for the ICO\'s final automated decision-making guidance: seen only in a search summary, not stated.',
      'Any legal conclusion about a particular agent: the page asks the questions and says it is not legal advice.',
      'Public funding for these courses: none is claimed.'
    ]
  }
};
