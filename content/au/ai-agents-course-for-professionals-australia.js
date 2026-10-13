'use strict';
// AI agents course for professionals, Australia (ag- age and career door; AU cluster Phase 9, row 356).
// Intent: working Australians (managers, analysts, administrators, developers) who want to build or deploy AI agents
// at work responsibly. Distinct from ai-agents-course-for-students-australia (assessment and age rules, tool-call
// validation). Anchor: the OAIC guidance on privacy and commercially available AI products. Not legal advice.
// Sources, read raw on 13 October 2026 (curl, default agent):
//  - OAIC, Guidance on privacy and the use of commercially available AI products (dated 21 October 2024): "The Privacy
//    Act applies to all uses of AI involving personal information."; best practice "do not enter personal
//    information, and particularly sensitive information, into publicly available generative AI tools"; "AI products
//    should not be used simply because they are available."; due diligence "should not amount to a ‘set and forget’
//    approach"; minimum amount of personal information; APP 10 accuracy; public-facing AI tools "clearly identified as
//    such"; inferred or artificially generated information about an identifiable person "constitutes personal
//    information".
// Lesson family: redacting personal information before text reaches an AI service. 500 synthetic support messages
// (templates, names, addresses and numbers invented by us; example.com addresses; "Exampleton" suburb), redacted by
// patterns, by patterns plus name lists; figures in agpr/res.json. Simple baseline that wins: send only the
// non-personal fields (data minimisation).

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: {
    group: 'guide',
    tag: 'AI AGENTS, PROFESSIONALS',
    blurb: 'An AI agents course for working Australians: agents that save real time, built around privacy duties, minimum data and human checks.'
  },
  slug: 'ai-agents-course-for-professionals-australia',
  code: 'agpr',
  accent: '#561F0E',
  accentRationale: 'AI agents course for professionals, Australia: a dark muted rust computed for the national doors, at least 20 RGB from every national AU accent, at least 10 from every AU accent and 6 from every colour in use',
  pageType: 'market',
  market: {
    name: 'Australia',
    iso: 'AU',
    dial: '+61',
    lang: 'en-AU',
    locale: 'en_AU',
    geoRegion: 'AU',
    brandTag: 'AU',
    phoneLabel: 'Australian mobile number',
    phonePlaceholder: '491 570 156',
    gradeLabel: 'Year level or age',
    minDigits: 9,
    stripTrunk: true
  },
  routeLabel: 'AI agents course for professionals, Australia',
  title: 'AI Agents Course for Professionals in Australia | Live Online',
  description: 'AI agents course for Australian professionals: build agents that save real work, keep personal data out of AI tools and keep people in charge. First class free.',
  ogDescription: 'Pattern redaction caught every email and phone number in 500 messages and not one name. What Australian professionals must know before an agent sees customer text.',
  twitterDescription: 'AI agents for Australian professionals: useful automation built around privacy duties and human review. Live online, first class free.',
  pageName: 'AI Agents Course for Professionals in Australia',
  webPageDescription: 'A guide for Australian professionals learning to build AI agents: what the OAIC expects when AI meets personal information, a redaction experiment, and a course built around both.',
  courseDescription: 'Live online AI agents course for working Australians: agent design, tools and workflows, data minimisation, redaction, evaluation and human review.',
  crumbs: [
    { name: 'Courses', href: '/courses' },
    { name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }
  ],
  crumbLabel: 'AI agents course for professionals',
  navLinks: [
    { href: '#duties', label: 'Privacy duties' },
    { href: '#redact', label: 'A worked example' },
    { href: '#design', label: 'Designing agents' },
    { href: '#course', label: 'The course' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Working adults &middot; Agents built around privacy',
  h1: 'AI agents course for professionals',
  lede: 'AI agents promise to read the inbox, draft the replies, update the system and file the report. For a working professional in Australia, the first question is not which tool is cleverest. It is what the agent will see, where that information goes, and who checks the result. Our AI agents course for professionals teaches agent building from the ground up, using automation that saves real hours, and it puts Australia\'s privacy expectations at the centre rather than in a footnote. This page summarises what the privacy regulator has published about AI products, tests a common safeguard on 500 invented customer messages, and sets out how the course is structured.',
  secondaryCta: { href: '#redact', label: 'See the experiment' },
  wa: 'Hello Modern Age Coders, I work in Australia and am interested in your AI agents course for professionals. Could we book a free first class?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; agents designed with the data question asked first',
  spec: [
    ['For', 'Working adults'],
    ['Builds', 'Agents, tools and workflows'],
    ['Privacy', 'Minimum data by design'],
    ['Checks', 'Evaluation and human review'],
    ['Tools', 'Python and agent platforms'],
    ['Format', 'Live online lessons'],
    ['Group', 'Small groups, or one to one'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'An AI agents course for professionals teaches working adults to build agents that use tools to complete tasks, while handling the data they touch responsibly. In Australia, the privacy regulator\'s guidance says the Privacy Act applies to all uses of AI involving personal information, and recommends not entering personal information into publicly available generative AI tools. Modern Age Coders teaches this live online to Australian professionals, and the first class is free.',
  picks: {
    eyebrow: 'Start here',
    h2: 'Three agent courses for working professionals',
    lede: 'A coding-agents course for technical staff and two platform courses for organisations that already use those platforms. Each card opens the syllabus.',
    items: [
      {
        course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals',
        code: 'AGPR / 01',
        title: 'AI Coding Agents for Professionals',
        note: 'Directing coding agents well: specifications, review, tests and safe permissions. Adults only.'
      },
      {
        course: 'ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals',
        code: 'AGPR / 02',
        title: 'Copilot Studio Agent Masterclass',
        note: 'Agents inside a Microsoft workplace, taught one to one around your own process.'
      },
      {
        course: 'build-ai-agents-with-google-gemini-enterprise-course',
        code: 'AGPR / 03',
        title: 'Agents with Gemini Enterprise',
        note: 'Agents for Google Workspace organisations, taught one to one.'
      }
    ]
  },
  sections: [
    {
      id: 'duties',
      tint: 'tint',
      eyebrow: 'Privacy duties',
      h2: 'What the OAIC expects when AI meets personal information',
      lede: 'The Office of the Australian Information Commissioner has published guidance on privacy and commercially available AI products. Anyone building agents at work should read it in full; these are the points that shape agent design most.',
      body: [
        {
          kind: 'table',
          caption: 'OAIC guidance, dated 21 October 2024, read 13 October 2026',
          head: ['The guidance says', 'What it means for an agent'],
          rows: [
            [
              '"The Privacy Act applies to all uses of AI involving personal information."',
              'Every prompt and every tool result is in scope if it contains personal information'
            ],
            [
              'The OAIC recommends that organisations "do not enter personal information, and particularly sensitive information, into publicly available generative AI tools"',
              'Public chat tools are the wrong place for customer text'
            ],
            [
              '"AI products should not be used simply because they are available."',
              'Start with the task, not the tool; sometimes no AI is the answer'
            ],
            [
              'Due diligence "should not amount to a ‘set and forget’ approach"',
              'Agents need monitoring and periodic review after launch'
            ],
            [
              'Only "the minimum amount of personal information sufficient" for the purpose',
              'Send the agent fields, not whole records'
            ],
            [
              'Inferred or "artificially generated information" about an identifiable person "constitutes personal information"',
              'An agent\'s wrong guess about a customer is still their personal information'
            ]
          ]
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'Accuracy is a duty, not a nice-to-have',
          left: [
            'Under APP 10, the guidance says, organisations "have an obligation to take reasonable steps to ensure the personal information collected, used and disclosed is accurate". An agent that drafts letters about customers inherits that obligation.',
            'That is why every agent in our course has an evaluation set and a human review step before anything reaches a customer.'
          ],
          rightH3: 'Tell people when they are talking to AI',
          right: [
            'The guidance also asks businesses to ensure that "public facing AI tools (such as chatbots) are clearly identified as such to external users such as customers."',
            'We treat that as a design requirement: the agent says what it is, and a person can always be reached.'
          ]
        },
        {
          kind: 'source',
          html: 'Source: Office of the Australian Information Commissioner, <a class="ag-inline-link" href="https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products" rel="noopener" target="_blank">Guidance on privacy and the use of commercially available AI products</a>, read 13 October 2026. This page summarises; it is not legal advice.'
        }
      ]
    },
    {
      id: 'redact',
      tint: 'deep',
      eyebrow: 'A worked example',
      h2: 'Redaction caught every email and phone number, and none of the names',
      lede: 'A common plan is to "strip the personal details" from text before an agent sends it to an AI service. We tested how well that works on 500 invented customer-support messages.',
      body: [
        {
          kind: 'p',
          html: 'We wrote eight message templates and filled them with invented names, @example.com email addresses, mobile numbers, street addresses in a made-up suburb and order numbers: 500 messages containing 807 name mentions, 240 email addresses, 190 phone numbers and 199 addresses. No real person or customer appears. We then tried four ways of redacting them before they would be sent anywhere.'
        },
        {
          kind: 'table',
          caption: 'Personal details removed from 500 synthetic messages (our calculation)',
          head: [
            'Redaction method',
            'Names removed',
            'Emails, phones, addresses',
            'Ordinary words wrongly removed',
            'Messages still containing a name'
          ],
          numCols: [
            3,
            4
          ],
          rows: [
            ['Patterns for emails, phones and addresses', '0 of 807', 'all', '0', '500'],
            ['Patterns plus a list of 50 common names', '389 of 807', 'all', '0', '342'],
            ['Patterns plus every name we used, any letter case', '807 of 807', 'all', '377', '0'],
            ['Send only the order number and issue type', 'nothing to remove', 'nothing to remove', '0', '0']
          ]
        },
        {
          kind: 'three',
          mt: true,
          cells: [
            {
              h3: 'Patterns are good at patterns',
              p: 'Email addresses, Australian mobile numbers and addresses with a state and postcode have a shape, and simple patterns caught every one. Names have no shape, so patterns caught 0 of 807 of them.'
            },
            {
              h3: 'Name lists leak or overreach',
              p: 'A list of 50 common names still left a name in 342 of 500 messages. A complete list matched without regard to case removed 377 ordinary words, led by "will" (137), "hope", "may", "mark" and "bill", because they are also names.'
            },
            {
              h3: 'The simple baseline wins',
              p: 'Sending only the fields the task needs, here an order number and an issue category, leaves nothing to redact. It is what the OAIC means by the minimum amount of personal information, and it beat every redactor we built.'
            }
          ]
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'Why the perfect result is a trap',
          left: [
            'Matching our full name list with exact capitals scored 807 of 807 with no wrong removals. That only happened because we invented the names from that list; real customers do not come with one.',
            'A test that the method cannot fail is not a test. We show it so learners recognise the trap in vendor demonstrations, where the sample data has often been chosen to suit the tool being sold.'
          ],
          rightH3: 'What professionals take away',
          right: [
            'Design the agent so personal details never need to leave your systems. Where free text must be processed, use an approved, contracted service rather than a public tool, and measure redaction before trusting it.',
            'Count what slips through, on data that looks like yours, before any real data is involved. Then write the count down, because the same test should be run again whenever the agent, the model or the data changes.'
          ]
        }
      ]
    },
    {
      id: 'design',
      tint: 'tint',
      eyebrow: 'Designing agents',
      h2: 'Five design questions to answer before building an agent',
      lede: 'Most failed workplace agents fail on the first question, not the last.',
      body: [
        {
          kind: 'table',
          caption: 'Questions we answer for every agent in the course',
          head: ['Question', 'Why it matters', 'A good answer looks like'],
          rows: [
            [
              'Is an agent needed at all?',
              'A fixed process is better served by a script or a form',
              'A written comparison with the simplest option'
            ],
            [
              'What data will it see?',
              'Privacy duties attach to every input and output',
              'A field list, with personal fields removed or justified'
            ],
            [
              'What can it change?',
              'Irreversible actions need a person to approve them',
              'Read-only by default; writes behind confirmation'
            ],
            [
              'How will we know it works?',
              'Accuracy is an obligation, not a hope',
              'A test set with known answers, rerun on every change'
            ],
            ['Who reviews it later?', 'Due diligence is not set and forget', 'A named owner and a review date']
          ]
        },
        {
          kind: 'p',
          mt: true,
          html: 'Students and younger learners have a separate <a class="ag-inline-link" href="/ai-agents-course-for-students-australia">AI agents course for students</a>, which concentrates on tool-call checks and assessment rules.'
        }
      ]
    },
    {
      id: 'course',
      tint: 'deep',
      eyebrow: 'The course',
      h2: 'How the professionals course runs',
      lede: 'Six stages, each ending in something usable at work, built on data that is either public or invented.',
      body: [
        {
          kind: 'table',
          caption: 'Course outline',
          head: ['Stage', 'What you build', 'What you learn to check'],
          rows: [
            ['1. Task first', 'A written workflow and the simplest non-AI version', 'Whether an agent beats it'],
            ['2. Tools', 'Small functions the agent may call, read-only first', 'Permissions and logging'],
            ['3. The agent', 'A loop on a test model, then on an approved service', 'Every step replayable'],
            ['4. Data handling', 'Field-level minimisation and measured redaction', 'What still leaks'],
            ['5. Evaluation', 'A task set with known answers', 'Accuracy, cost of errors, drift over time'],
            ['6. Handover', 'Documentation, owner, review date', 'That someone else can run it']
          ]
        },
        {
          kind: 'three',
          mt: true,
          cells: [
            { h3: 'Technical staff', p: 'Python, APIs and coding agents, with code review and tests as non-negotiable.' },
            { h3: 'Business users', p: 'Platform agents in tools your organisation already licenses, with the same design questions.' },
            { h3: 'Managers', p: 'Enough building to judge proposals: what to ask, what to measure and when to say no.' }
          ]
        }
      ]
    },
    {
      id: 'limits',
      tint: '',
      eyebrow: 'Honest limits',
      h2: 'What this course is not',
      lede: 'Clear boundaries protect learners and their employers.',
      body: [
        {
          kind: 'two',
          leftH3: 'Not legal advice',
          left: [
            'We summarise published guidance and teach engineering practice. Questions about your organisation\'s obligations belong with its privacy officer or lawyers.',
            'We never ask learners to bring real customer or employee data into lessons.'
          ],
          rightH3: 'No outcome promises',
          right: [
            'We do not promise promotions, job changes or savings figures. We promise working agents, measured honestly, that you understand well enough to defend.',
            'Organisations must still make their own decisions about deployment.'
          ]
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Progress',
    h2: 'Four levels of workplace agent skill',
    lede: 'Most professionals reach the third level within one or two terms of weekly lessons.',
    table: {
      caption: 'From user to accountable builder',
      head: ['Level', 'What you can do'],
      rows: [
        ['1. Informed user', 'Explain what an agent sees, does and stores'],
        ['2. Builder', 'Build a read-only agent with logged tool calls'],
        ['3. Responsible builder', 'Add minimisation, measured redaction, evaluation and approval steps'],
        ['4. Owner', 'Document, monitor and review an agent others depend on']
      ]
    },
    left: {
      h3: 'Do I need to code?',
      ps: [
        'For the technical track, basic Python helps; we teach it if needed. Platform courses need no coding to start.',
        'Every track uses the same design questions.'
      ]
    },
    right: {
      h3: 'Can you train our team?',
      ps: [
        'Small groups from one organisation can be arranged. Lessons use public or invented data only.',
        'Ask in the free class and we will propose a plan.'
      ]
    }
  },
  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'AI and automation courses for professionals',
    lede: 'Adults only. Choose by the platform your work already uses, or by the depth you need.',
    bands: [
      {
        num: 'I',
        h3: 'Agents',
        sub: 'Building and directing',
        courses: [
          {
            code: 'AGPR / AGT / 01',
            slug: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals',
            title: 'AI Coding Agents for Professionals',
            blurb: 'Specify, review, test.'
          },
          {
            code: 'AGPR / AGT / 02',
            slug: 'ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals',
            title: 'Copilot Studio Masterclass',
            blurb: 'One to one only.'
          },
          { code: 'AGPR / AGT / 03', slug: 'build-ai-agents-with-google-gemini-enterprise-course', title: 'Gemini Enterprise Agents', blurb: 'One to one only.' }
        ]
      },
      {
        num: 'II',
        h3: 'Foundations',
        sub: 'Under the agent',
        courses: [
          { code: 'AGPR / FND / 01', slug: 'python-ai-automation-masterclass-college', title: 'Python Automation', blurb: 'Scripts and applied AI.' },
          { code: 'AGPR / FND / 02', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI Course', blurb: 'LLMs and retrieval.' },
          { code: 'AGPR / FND / 03', slug: 'ai-tools-mastery-complete-college', title: 'AI Tools Mastery', blurb: 'Everyday AI, used carefully.' }
        ]
      },
      {
        num: 'III',
        h3: 'Around the work',
        sub: 'Data and teams',
        courses: [
          { code: 'AGPR / WRK / 01', slug: 'data-analysis-mastery-course-college', title: 'Data Analysis', blurb: 'Excel, SQL, Python, BI.' },
          {
            code: 'AGPR / WRK / 02',
            slug: 'git-github-advanced-version-control-masterclass-for-professionals',
            title: 'Advanced Git and GitHub',
            blurb: 'For teams shipping code.'
          },
          {
            code: 'AGPR / WRK / 03',
            slug: 'data-and-ai-analytics-for-non-programmers-course',
            title: 'Data and AI for Non-Programmers',
            blurb: 'Analytics without code.'
          }
        ]
      }
    ]
  },
  how: {
    eyebrow: 'How lessons run',
    h2: 'Lessons around the working day',
    lede: 'Teaching happens from India in hours that match Australian evenings, weekends and some lunchtimes. We schedule in your state\'s time and keep lessons aligned through daylight saving.',
    slots: [
      { time: 'Evening', l: 'After work, weekly.' },
      { time: 'Weekend', l: 'Longer build sessions.' },
      { time: 'Lunchtime', l: 'One to one, by arrangement.' }
    ],
    cells: [
      { h3: 'Free first class', p: 'A small read-only agent and an honest view of fit.' },
      { h3: 'Small groups', p: 'Professionals at a similar level.' },
      { h3: 'One to one', p: 'Around one process or one platform.' },
      { h3: 'Invented data', p: 'No real customer records in lessons.' },
      { h3: 'Measured, not assumed', p: 'Every safeguard is tested.' },
      { h3: 'People in charge', p: 'Approval steps before anything changes.' }
    ]
  },
  projectsH2: 'Work by our learners',
  projectsLede: 'Projects our students built and published. The <a class="ag-inline-link" href="/student-labs">student labs</a> list many more.',
  reviewsLede: 'What learners and parents wrote on Google, quoted without changes.',
  fees: {
    h2: 'Fees for the professionals agents course',
    lede: 'Professionals in Australia pay monthly in US dollars. No upfront charge applies, and you may end the arrangement after any month.',
    free: ['A small read-only agent', 'A frank view of fit', 'No card required'],
    group: ['Small groups of professionals', 'Design reviews between learners', 'A regular teacher', 'End after any month'],
    one: ['Built around one workflow', 'Platform-specific if needed', 'Evening, weekend or lunchtime']
  },
  faq: {
    eyebrow: 'Professionals ask',
    h2: 'Questions about AI agents courses for professionals in Australia',
    items: [
      {
        q: 'What is an AI agents course for professionals?',
        a: 'It is a course that teaches working adults to design, build, evaluate and maintain AI agents, programs that use AI to choose and run tools, for real workplace tasks, with privacy and human review built in.'
      },
      {
        q: 'Can I put customer information into an AI chatbot?',
        a: 'The OAIC recommends that organisations do not enter personal information, and particularly sensitive information, into publicly available generative AI tools. Your organisation\'s own policies also apply.'
      },
      {
        q: 'Does redaction make it safe to send text to AI?',
        a: 'Not reliably. In our test on 500 invented messages, patterns removed every email, phone number and address but no names. Sending only the fields a task needs worked better.'
      },
      {
        q: 'Does the Privacy Act apply to AI?',
        a: 'The OAIC\'s guidance states that the Privacy Act applies to all uses of AI involving personal information, including information an AI system generates or infers about an identifiable person.'
      },
      { q: 'Do I need programming skills?', a: 'Not for the platform tracks. The technical track uses Python, which we can teach from the start.' },
      {
        q: 'How was the redaction test built?',
        a: 'We wrote eight message templates and filled them with invented names, example.com email addresses, mobile numbers in Australian formats and addresses in a made-up suburb, then measured what each redaction method removed and what it missed.'
      },
      {
        q: 'Is this legal advice?',
        a: 'No. We summarise published guidance and teach engineering practice. Your organisation\'s privacy officer or lawyers advise on obligations.'
      },
      {
        q: 'Which platforms do you cover?',
        a: 'Python-built agents, coding agents, and one-to-one courses for Microsoft Copilot Studio and Google Gemini Enterprise for organisations already using them.'
      },
      { q: 'What does it cost?', a: 'The first class is free with no card. Monthly fees are listed in the fees section, for groups and one-to-one.' }
    ]
  },
  elsewhere: {
    eyebrow: 'Also on this site',
    h2: 'Related pages',
    lede: 'Related AI and adult learning pages.',
    items: [
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'The national index of our pages.' },
      { href: '/ai-agents-course-for-students-australia', label: 'AI agents course for students', p: 'Tool-call checks and assessment rules.' },
      { href: '/coding-classes-for-adults-australia', label: 'Coding classes for adults', p: 'Python, data and the web around work.' },
      { href: '/learn-to-think-not-just-use-ai-tools-australia', label: 'Learn to think with AI', p: 'Judgement before automation.' },
      { href: '/ai-and-machine-learning-classes-in-australia', label: 'AI and machine learning in Australia', p: 'Building models, not just agents.' },
      { href: '/one-on-one-coding-tutor-australia', label: 'One-on-one coding tutor', p: 'Private lessons around one workflow.' }
    ]
  },
  start: {
    h2: 'Book a free first class',
    lede: 'Leave a number and a time. We build a small read-only agent together in the free lesson and talk honestly about whether the course fits your work.',
    readFirst: 'To learn more first, read <a class="ag-inline-link" href="/how-we-teach">about our teaching</a> or look over <a class="ag-inline-link" href="/courses">the courses</a>.',
    note: 'Our people are in India, so you will see a +91 number, and there is no office in Australia. WhatsApp from an Australian phone normally brings the fastest response.',
    formNote: 'Free, no card, no obligation.'
  },
  footer: {
    cols: [
      {
        h4: 'Working with AI',
        links: [
          { href: '/ai-agents-course-for-students-australia', label: 'AI agents for students' },
          { href: '/coding-classes-for-adults-australia', label: 'Coding classes for adults' },
          { href: '/learn-to-think-not-just-use-ai-tools-australia', label: 'Learn to think with AI' },
          { href: '/how-we-teach', label: 'How we teach' }
        ]
      },
      {
        h4: 'Australia',
        links: [
          { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
          { href: '/ai-and-machine-learning-classes-in-australia', label: 'AI and machine learning' },
          { href: '/one-on-one-coding-tutor-australia', label: 'One-on-one coding tutor' },
          { href: '/online-coding-tutor-australia', label: 'Online coding tutor' }
        ]
      }
    ],
    bottomRight: 'Send fields, not records'
  },
  personalityCss: `
.ag-root.ag-agpr .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-agpr .ag-capsule { border-left-width: 4px; border-radius: 4px; }
.ag-root.ag-agpr .ag-section-head h2 { max-width: 37ch; }
.ag-root.ag-agpr .ag-table caption { text-align: left; font-weight: 625; }
.ag-root.ag-agpr .ag-band-head h3 { letter-spacing: -0.009em; }
.ag-root.ag-agpr .ag-slots { gap: 0.85rem; }
`,
  dossier: {
    curriculumAuthority: 'Australia, working adults. OAIC, Guidance on privacy and the use of commercially available AI products (21 October 2024): Privacy Act applies to all uses of AI involving personal information; best-practice recommendation against entering personal information into publicly available generative AI tools; not using AI simply because it is available; no set-and-forget due diligence; minimum personal information; APP 10 accuracy; identifying public-facing AI tools; generated or inferred information as personal information.',
    localProject: 'Redacting personal information before text reaches an AI service, on 500 synthetic support messages (invented by us; 807 names, 240 emails, 190 phones, 199 addresses): patterns removed all emails, phones and addresses and 0 of 807 names (500 messages still named someone); plus 50 common names 389 of 807 (342 leaking); plus every name in any case 807 of 807 with 377 ordinary words removed. Sending only order number and issue type (data minimisation) is the simple baseline that wins. Lesson family: pre-send PII redaction.',
    requiredMentions: [
      'The Privacy Act applies to all uses of AI involving personal information.',
      'do not enter personal information, and particularly sensitive information, into publicly available generative AI tools',
      'AI products should not be used simply because they are available.',
      'should not amount to a ‘set and forget’ approach',
      'have an obligation to take reasonable steps to ensure the personal information collected, used and disclosed is accurate',
      'public facing AI tools (such as chatbots) are clearly identified as such to external users such as customers.',
      'Redaction caught every email and phone number, and none of the names',
      'Send only the order number and issue type'
    ],
    sources: [
      {
        claim: 'OAIC, Guidance on privacy and the use of commercially available AI products (21 October 2024): the quoted passages on the Privacy Act, publicly available generative AI tools, availability, set and forget, minimum information, APP 10 accuracy, identifying public-facing AI tools and generated information.',
        url: 'https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products'
      }
    ],
    rejectedClaims: [
      'Department of Industry guidance for AI adoption and the Digital Transformation Agency AI policy: the hosts did not answer from this network on two attempts, so neither is cited.',
      'The OAIC guidance\'s health and insurance examples: health data is an excluded topic; the page uses support messages instead.',
      'Productivity or cost-saving figures for agents: no money figures and no outcome promises.',
      'Penalties under the Privacy Act: money figures, not used.',
      'Named commercial redaction products: not tested, not named.'
    ]
  }
};
