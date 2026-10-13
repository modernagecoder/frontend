'use strict';
// AI agents course for students, Australia (ag- age and career door; AU cluster Phase 9, row 355).
// Intent: Australian students, senior secondary (16 and over) and university, looking for a course in building AI
// agents: a model that calls tools in a loop. Distinct from the place-based vibe-coding-and-ai-agents-classes-in-*
// pages (local data projects) and from ai-agents-course-for-professionals-australia (workplace privacy duties).
// Under-18 rule: no service with an 18+ minimum; agents are first built with a stub model and no AI account.
// Sources, read raw on 13 October 2026 (curl, default agent):
//  - University of Sydney, Academic integrity: artificial intelligence: "you're allowed to use artificial intelligence
//    (AI) tools as a general learning aid. However, there are limitations on how you can use these tools to complete
//    assessments."; "Your unit of study outline will have information about whether you can use AI tools for your
//    assessments."; the Turnitin AI detector score "would not be the only evidence relied upon"; "keep track
//    throughout your assignment process of all the ways you have used generative AI".
//  - ACARA, Australian Curriculum v9, Digital Technologies 7-10 (.docx): AC9TDI10P12 elaboration "using AI to
//    summarise meeting outcomes, identify important tasks and forecast project risks".
//  - Anthropic, Consumer Terms (re-read raw 13 October 2026): "You must be at least 18 years old or the minimum age
//    required to consent to use the Services in your location, whichever is higher."
// Lesson family: validating an agent's tool-call arguments against a schema before the tool runs. Simulation (ours,
// seed 20261013): a study-planner agent whose stub model copies the student's words into arguments; 400 requests
// written by us; figures in agst/res.json. No AI service was called.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: {
    group: 'guide',
    tag: 'AI AGENTS, STUDENTS',
    blurb: 'An AI agents course for Australian students from 16: tool calls, schemas and checks, built first with no AI account and within every age rule.'
  },
  slug: 'ai-agents-course-for-students-australia',
  code: 'agst',
  accent: '#106228',
  accentRationale: 'AI agents course for students, Australia: a muted deep green computed for the national doors, at least 20 RGB from every national AU accent, at least 10 from every AU accent and 6 from every colour in use',
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
  routeLabel: 'AI agents course for students, Australia',
  title: 'AI Agents Course for Students in Australia | Build and Check',
  description: 'AI agents course for Australian students from 16 to university: build agents that call tools, validate every call and keep to your AI rules. First class free.',
  ogDescription: '395 of 400 tool calls from a careless agent broke the schema, and a validator caught all of them. How Australian students learn to build agents that check themselves.',
  twitterDescription: 'AI agents for Australian students: tool calls, schemas and checks, within every age rule and assessment rule. First class free.',
  pageName: 'AI Agents Course for Students in Australia',
  webPageDescription: 'A guide to learning to build AI agents as a student in Australia: what an agent is, university rules on AI, age rules for under-18s, and a simulated study-planner agent with schema validation.',
  courseDescription: 'Live online AI agents course for Australian students aged 16 and over: agent loops, tools, schemas, validation and evaluation, built first without any AI account.',
  crumbs: [
    { name: 'Courses', href: '/courses' },
    { name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }
  ],
  crumbLabel: 'AI agents course for students',
  navLinks: [
    { href: '#agent', label: 'What an agent is' },
    { href: '#rules', label: 'Uni and age rules' },
    { href: '#planner', label: 'A worked example' },
    { href: '#course', label: 'The course' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Students 16 and over &middot; Agents that check their own work',
  h1: 'AI agents course for students',
  lede: 'An AI agent is a program that lets a language model choose actions, such as searching notes, adding a calendar entry or running code, and then act on the results, step after step. Students meet agents in their tools and increasingly in their coursework. Building one teaches more about AI than using a hundred chatbots, because you see exactly where it goes wrong. Our AI agents course for Australian students, from senior secondary to university, starts with agents that run on a stub model and no account at all, adds real models only where a provider\'s age rules allow, and makes checking every action a habit from the first lesson. This page explains what an agent is, sets out the rules students must work within, and works through a simulated study-planner agent that a validator saves from itself.',
  secondaryCta: { href: '#planner', label: 'See the worked example' },
  wa: 'Hello Modern Age Coders, I am a student in Australia interested in your AI agents course. Could we book a free first class?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; agents built in Python, checked at every step',
  spec: [
    ['For', 'Students 16 and over'],
    ['Language', 'Python'],
    ['First agents', 'Stub model, no account'],
    ['Real models', 'Only within age rules'],
    ['Core habit', 'Validate every tool call'],
    ['Assessed work', 'Never written by us'],
    ['Format', 'Live online lessons'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'An AI agents course for students teaches how to build programs in which a language model calls tools, reads the results and decides the next step, and how to check every one of those actions. Our course for Australian students aged 16 and over starts with agents running on a stub model, so no AI account is needed, and follows each provider\'s age rules and each university\'s assessment rules. The first class is free.',
  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for student agent builders',
    lede: 'Classical AI with search and planning, modern generative AI with retrieval and agents, and a guided platform course for university students. The full syllabus sits behind each card.',
    items: [
      {
        course: 'artificial-intelligence-complete-masterclass-college',
        code: 'AGST / 01',
        title: 'Artificial Intelligence: Search, Logic and Agents',
        note: 'How agents plan and search, from first principles, for university students.'
      },
      {
        course: 'complete-generative-ai-masterclass-college',
        code: 'AGST / 02',
        title: 'Generative AI: LLMs, Retrieval and Agents',
        note: 'Language models, retrieval and tool use, with evaluation built in. Ages 18 and over.'
      },
      {
        course: 'ai-ml-masterclass-teens',
        code: 'AGST / 03',
        title: 'AI and Machine Learning for Teens',
        note: 'For 16 and 17 year olds: Python and models built from scratch, with no adult-only service.'
      }
    ]
  },
  sections: [
    {
      id: 'agent',
      tint: 'tint',
      eyebrow: 'What an agent is',
      h2: 'An agent is a loop, and every turn of the loop can go wrong',
      lede: 'Strip away the marketing and an agent is four steps repeated: the model reads the situation, picks a tool and its arguments, the program runs the tool, and the result goes back to the model.',
      body: [
        {
          kind: 'table',
          caption: 'The agent loop and what students check at each step',
          head: ['Step', 'What happens', 'What can go wrong', 'The check we teach'],
          rows: [
            [
              '1. Read',
              'The model is given the request and the history',
              'Missing or stale information',
              'Give dates and facts explicitly'
            ],
            [
              '2. Choose',
              'The model names a tool and fills in arguments',
              'Wrong tool, invented tool, badly formed arguments',
              'Validate against a schema'
            ],
            ['3. Act', 'Our code runs the tool', 'A harmful or irreversible action', 'Permissions and confirmation'],
            ['4. Observe', 'The result is passed back', 'Errors hidden or misread', 'Return clear, structured results']
          ]
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'Agents in the curriculum',
          left: [
            'The Australian Curriculum already imagines AI helping with planning. A Years 9 and 10 elaboration describes "using AI to summarise meeting outcomes, identify important tasks and forecast project risks".',
            'Our course asks the next question: when an AI does more than suggest, and actually adds the task to the calendar, how do we make sure it adds the right one?'
          ],
          rightH3: 'Why build rather than just use',
          right: [
            'Building an agent shows that the model never touches the calendar itself; your code does, and your code decides what it accepts. That single idea makes students far more careful users of every agent they meet later.',
            'It is also where most of the engineering lives: tools, schemas, logs and tests.'
          ]
        }
      ]
    },
    {
      id: 'rules',
      tint: 'deep',
      eyebrow: 'Uni and age rules',
      h2: 'The rules students build within',
      lede: 'Two sets of rules apply: the institution\'s rules on AI in assessment, and each AI provider\'s own age rule.',
      body: [
        {
          kind: 'two',
          leftH3: 'University rules on AI',
          left: [
            'The University of Sydney tells students they are "allowed to use artificial intelligence (AI) tools as a general learning aid. However, there are limitations on how you can use these tools to complete assessments." It adds: "Your unit of study outline will have information about whether you can use AI tools for your assessments."',
            'Where AI use is permitted, it asks students to "keep track throughout your assignment process of all the ways you have used generative AI". Agent builders have an advantage here: a well-built agent logs every step anyway.'
          ],
          rightH3: 'Provider age rules',
          right: [
            'Anthropic\'s consumer terms say: "You must be at least 18 years old or the minimum age required to consent to use the Services in your location, whichever is higher." Other providers set other ages, and some require a parent\'s permission for under-18s.',
            'Students under 18 in our course therefore build agents on a stub model or a local model that needs no account, and never use a service whose terms exclude their age.'
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'How the course adapts by age',
          head: ['Student', 'Model used in lessons', 'Why'],
          rows: [
            ['16 or 17', 'A stub model written in Python, or a local open model with no account', 'No provider age rule is broken'],
            ['18 and over', 'The stub first, then a provider the student is allowed to use', 'The stub keeps tests repeatable'],
            ['Any age', 'Assessment rules from the unit outline or school', 'Institution rules come first']
          ]
        },
        {
          kind: 'p',
          mt: true,
          html: 'The University of Sydney also notes that a Turnitin AI detector score "would not be the only evidence relied upon" in an integrity case. We do not teach anyone to avoid detection; we teach students to use AI only where permitted and to say when they have. Sources, read 13 October 2026: University of Sydney, <a class="ag-inline-link" href="https://www.sydney.edu.au/students/academic-integrity/artificial-intelligence.html" rel="noopener" target="_blank">academic integrity and artificial intelligence</a>; age rules as quoted in our <a class="ag-inline-link" href="/ai-tools-age-guide">AI tool age guide</a>.'
        }
      ]
    },
    {
      id: 'planner',
      tint: 'tint',
      eyebrow: 'A worked example',
      h2: 'A study planner that would have filled the calendar with nonsense',
      lede: 'We simulated an agent that adds study sessions to a calendar, using a deliberately careless stub model that copies the student\'s words straight into the tool\'s arguments. Then we put a validator between the model and the tool.',
      body: [
        {
          kind: 'p',
          html: 'The tool, <code>add_event</code>, needs three things: a title, a date written as YYYY-MM-DD and a duration in whole minutes between 15 and 240. We wrote 400 requests the way students actually type them ("chem prac write-up on 17/10", "maths revision tomorrow for 1 hour", "Python practice Thursday, 45 minutes") and fixed today\'s date as Tuesday 13 October 2026. The stub model, like a careless real one, copied phrases across unchanged. A schema check ran before every call; if it failed, the error message went back to the stub for one more attempt, and anything still invalid was handed to the student as a question.'
        },
        {
          kind: 'table',
          caption: 'What happened to 400 simulated requests (our simulation; no AI service was called)',
          head: ['Stage', 'Calls', 'Notes'],
          numCols: [
            1
          ],
          rows: [
            [
              'First attempt broke the schema',
              '395',
              'Dates not in YYYY-MM-DD: 360; durations not whole minutes: 292; unexpected fields: 16; misspelt tool name: 11'
            ],
            [
              'Would have reached the calendar wrong or failed, with no validator',
              '393',
              'Text such as "1 hour" stored where a number belongs'
            ],
            ['Fixed on the second attempt, after the validator\'s message', '316', 'All 316 then matched what the student meant'],
            ['Still invalid, so the agent asked the student', '79', '57 named only a weekday; 22 said "next week"']
          ]
        },
        {
          kind: 'three',
          mt: true,
          cells: [
            {
              h3: 'The validator caught everything',
              p: 'Every malformed call was stopped before it touched the calendar. Without it, 393 of 400 requests would have stored the wrong thing or crashed the tool.'
            },
            {
              h3: 'Asking is a feature',
              p: 'A request for "Thursday" or "next week" cannot be turned into one date without guessing. The agent that asks 79 short questions is more useful than one that silently picks a day.'
            },
            {
              h3: 'The quiet error',
              p: 'Of 155 dates written with slashes, a month-first reading made 140 impossible, which fails loudly, and 15 valid but wrong, which fails silently. Australians write the day first; the schema forces that ambiguity into the open.'
            }
          ]
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'When the simple baseline wins',
          left: [
            'If students only ever enter a fixed weekly timetable, a plain form with a date picker and a number box beats the agent outright: no model, no malformed calls and nothing to validate.',
            'Agents earn their place when requests are varied and conversational. We teach students to check which situation they are in before building one.'
          ],
          rightH3: 'What a simulation can and cannot show',
          right: [
            'The stub was written to be careless so the validator had work to do; real models make fewer of these mistakes and different ones. The counts describe our simulation, not any product.',
            'The method transfers exactly: define the schema, validate, re-ask once, then ask the person.'
          ]
        }
      ]
    },
    {
      id: 'course',
      tint: 'deep',
      eyebrow: 'The course',
      h2: 'What students build, term by term',
      lede: 'Each stage adds one capability and one kind of check.',
      body: [
        {
          kind: 'table',
          caption: 'Course outline',
          head: ['Stage', 'Build', 'Check'],
          rows: [
            ['1. Tools', 'Python functions with typed inputs and outputs', 'Unit tests for every tool'],
            ['2. The loop', 'An agent loop on a stub model', 'Logs of every step, replayable'],
            ['3. Schemas', 'Argument validation and re-asking', 'Malformed-call counts, as above'],
            ['4. Memory and retrieval', 'Notes the agent can search', 'Answers checked against the source'],
            ['5. Real models', 'Swap the stub for a permitted model', 'The same tests, run again'],
            ['6. Evaluation', 'A set of tasks with known answers', 'Success rate, step count, cost of mistakes']
          ]
        },
        {
          kind: 'p',
          mt: true,
          html: 'Students who want to start further back can begin with our <a class="ag-inline-link" href="/ai-classes-for-teens-australia">AI classes for teens</a> or the page on <a class="ag-inline-link" href="/learn-to-train-ai-not-just-prompt-it-australia">training AI, not just prompting it</a>.'
        }
      ]
    },
    {
      id: 'who',
      tint: '',
      eyebrow: 'Who joins',
      h2: 'Students who take this course',
      lede: 'Most have written some Python. A few arrive from other subjects with a project in mind.',
      body: [
        {
          kind: 'three',
          cells: [
            { h3: 'Senior secondary', p: 'Students of 16 and 17 with some Python, often taking a computing subject. They build on the stub and local models only.' },
            { h3: 'Computing undergraduates', p: 'Students who want agent engineering beyond their units: tools, schemas, evaluation and logging.' },
            {
              h3: 'Other disciplines',
              p: 'Science, health and business students who want an agent for research or data work, built properly and within their unit rules.'
            }
          ]
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Progress',
    h2: 'Four levels of agent-building skill',
    lede: 'With weekly lessons, most students reach the third level in two terms.',
    table: {
      caption: 'From tool writer to agent engineer',
      head: ['Level', 'What you can do'],
      rows: [
        ['1. Tool writer', 'Write and test Python functions an agent could call'],
        ['2. Loop builder', 'Run an agent loop on a stub model and read its logs'],
        ['3. Guard', 'Validate every call, re-ask, and hand over to a person when stuck'],
        ['4. Evaluator', 'Measure an agent on a task set and explain its failures']
      ]
    },
    left: {
      h3: 'Do I need to know Python?',
      ps: [
        'Basic Python helps: functions, lists and dictionaries. Students without it start with a short Python block first.',
        'No machine learning background is needed.'
      ]
    },
    right: {
      h3: 'Can I use this for my thesis or project?',
      ps: [
        'You can use the skills, under your institution\'s rules. We do not build, write or debug assessed or thesis work.',
        'Your supervisor and unit outline decide what is allowed.'
      ]
    }
  },
  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'AI and agent courses for students',
    lede: 'Grouped by age and depth. Under-18 bands use no adult-only service.',
    bands: [
      {
        num: 'I',
        h3: 'Foundations',
        sub: 'Ages 16 and 17',
        courses: [
          { code: 'AGST / FND / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and Machine Learning for Teens', blurb: 'Python to real models.' },
          { code: 'AGST / FND / 02', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'The language agents are built in.' },
          { code: 'AGST / FND / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data Science for Teens', blurb: 'Data agents can search.' }
        ]
      },
      {
        num: 'II',
        h3: 'Agents',
        sub: 'University students',
        courses: [
          {
            code: 'AGST / AGT / 01',
            slug: 'artificial-intelligence-complete-masterclass-college',
            title: 'Artificial Intelligence Course',
            blurb: 'Search, logic and agents.'
          },
          { code: 'AGST / AGT / 02', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI Course', blurb: 'LLMs, retrieval and agents.' },
          {
            code: 'AGST / AGT / 03',
            slug: 'ai-agents-with-microsoft-copilot-studio-course-for-college-students',
            title: 'Copilot Studio for College Students',
            blurb: 'One to one only; adults.'
          }
        ]
      },
      {
        num: 'III',
        h3: 'Around the agent',
        sub: 'Engineering skills',
        courses: [
          { code: 'AGST / ENG / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python Masterclass', blurb: 'Typed, tested Python.' },
          { code: 'AGST / ENG / 02', slug: 'git-github-version-control-course-for-college-students', title: 'Git and GitHub', blurb: 'Version every experiment.' },
          { code: 'AGST / ENG / 03', slug: 'ai-ml-masterclass-complete-college', title: 'AI and ML Masterclass', blurb: 'Deep learning and GenAI.' }
        ]
      }
    ]
  },
  how: {
    eyebrow: 'How lessons run',
    h2: 'Agent lessons that fit study weeks',
    lede: 'We teach from India, during hours that overlap Australian afternoons and evenings. Lesson times are fixed in the student\'s own state time, with daylight saving changes followed automatically.',
    slots: [
      { time: 'After school', l: 'For senior secondary students.' },
      { time: 'Evening', l: 'For university students.' },
      { time: 'Weekend', l: 'Longer build and evaluation sessions.' }
    ],
    cells: [
      { h3: 'Free first class', p: 'A tiny agent on a stub model, built together.' },
      { h3: 'Small groups', p: 'Five to ten students comparing agent logs.' },
      { h3: 'One to one', p: 'For a specific idea or a faster pace.' },
      { h3: 'No account to start', p: 'Stub models first, for every age.' },
      { h3: 'Age rules kept', p: 'No provider used below its minimum age.' },
      { h3: 'Integrity kept', p: 'No assessed or thesis work, ever.' }
    ]
  },
  projectsH2: 'Projects from our students',
  projectsLede: 'Applications our learners built and chose to keep online. The <a class="ag-inline-link" href="/student-labs">student labs</a> have the rest.',
  reviewsLede: 'Google reviews of our classes, exactly as posted by students and parents.',
  fees: {
    h2: 'Fees for the AI agents course',
    lede: 'Students in Australia are billed monthly in US dollars, with no fee to enrol and no lock-in: classes end whenever a month ends, if you choose.',
    free: ['A tiny agent built together', 'Advice on the right level', 'No card details'],
    group: ['Five to ten students per group', 'Shared agent logs and reviews', 'A regular teacher', 'No lock-in'],
    one: ['Built around one student\'s idea', 'Flexible depth', 'Times around study']
  },
  faq: {
    eyebrow: 'Students ask',
    h2: 'Questions about AI agents courses for students in Australia',
    items: [
      {
        q: 'What is an AI agent?',
        a: 'An AI agent is a program in which a language model chooses tools and their arguments, the program runs those tools, and the results go back to the model for the next step, repeating until the task is done.'
      },
      {
        q: 'What is tool-call validation?',
        a: 'It is checking every action an agent proposes against a schema, such as "a date written as YYYY-MM-DD", before the action runs. In our simulation it stopped all 395 malformed calls out of 400.'
      },
      {
        q: 'Can students under 18 take this course?',
        a: 'Yes, from 16. Under-18s build agents on a stub model or a local model that needs no account, and never use a service whose terms set a higher minimum age.'
      },
      {
        q: 'Can I use AI agents for my university assignments?',
        a: 'Only where your unit outline permits it. The University of Sydney, for example, says the unit of study outline states whether AI tools can be used for assessments.'
      },
      {
        q: 'Do I need a paid AI subscription?',
        a: 'No. The course starts with stub models written in Python, and later stages use only services the student is allowed to use.'
      },
      {
        q: 'How is this different from vibe coding?',
        a: 'Vibe coding uses AI to write code from descriptions. This course builds the agent itself: its tools, its checks and its tests.'
      },
      { q: 'Will you help with my thesis agent?', a: 'We teach the skills; we do not build or debug assessed or thesis work. Your supervisor\'s rules apply.' },
      {
        q: 'What does the course cost?',
        a: 'The first class is free and needs no card. Monthly fees for groups and one-to-one lessons are in the fees section.'
      }
    ]
  },
  elsewhere: {
    eyebrow: 'Also on this site',
    h2: 'Related pages',
    lede: 'Other AI pages, and the agents course for working professionals.',
    items: [
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'The national starting point.' },
      { href: '/ai-classes-for-teens-australia', label: 'AI classes for teens', p: 'Using, checking and building AI.' },
      { href: '/learn-to-train-ai-not-just-prompt-it-australia', label: 'Learn to train AI', p: 'Models built from labelled data.' },
      { href: '/coding-for-university-students-australia', label: 'Coding for university students', p: 'Concept support alongside a unit.' },
      { href: '/ai-tools-age-guide', label: 'AI tool age guide', p: 'Published age rules, tool by tool.' },
      { href: '/learn-to-think-not-just-use-ai-tools-australia', label: 'Learn to think with AI', p: 'Judgement before automation.' }
    ]
  },
  start: {
    h2: 'Book a free first class',
    lede: 'Share your number and when we can call. In the free lesson we build a tiny agent on a stub model together, and you leave with a suggested level.',
    readFirst: 'For more on our approach, see <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or the <a class="ag-inline-link" href="/courses">course catalogue</a>.',
    note: 'We are an India-based team, which is why our number starts with +91, and we do not have an office in Australia. WhatsApp is the fastest way to reach us from an Australian mobile.',
    formNote: 'Free, no card, no obligation.'
  },
  footer: {
    cols: [
      {
        h4: 'AI learning',
        links: [
          { href: '/ai-classes-for-teens-australia', label: 'AI classes for teens' },
          { href: '/learn-to-train-ai-not-just-prompt-it-australia', label: 'Learn to train AI' },
          { href: '/ai-tools-age-guide', label: 'AI tool age guide' },
          { href: '/how-we-teach', label: 'How we teach' }
        ]
      },
      {
        h4: 'Australia',
        links: [
          { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
          { href: '/coding-for-university-students-australia', label: 'Coding for university students' },
          { href: '/ai-and-machine-learning-classes-in-australia', label: 'AI and machine learning' },
          { href: '/australian-student-hackathons', label: 'Student hackathons' }
        ]
      }
    ],
    bottomRight: 'Validate, re-ask, then ask a person'
  },
  personalityCss: `
.ag-root.ag-agst .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-agst .ag-capsule { border-left-width: 6px; border-radius: 2px; }
.ag-root.ag-agst .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-agst .ag-table caption { text-align: left; font-weight: 645; }
.ag-root.ag-agst .ag-band-head h3 { letter-spacing: -0.011em; }
.ag-root.ag-agst .ag-slots { gap: 1rem; }
`,
  dossier: {
    curriculumAuthority: 'Australia, senior secondary and university. University of Sydney, academic integrity and artificial intelligence (AI as a general learning aid; unit of study outline decides; Turnitin AI score not the only evidence; keep track of generative AI use). ACARA, Digital Technologies 7-10 v9, AC9TDI10P12 AI planning elaboration. Anthropic consumer terms minimum age.',
    localProject: 'Tool-call schema validation (our simulation, seed 20261013, stub model, 400 requests written by us, today fixed at 13 October 2026): 395 malformed first attempts (dates 360, durations 292, extra fields 16, misspelt tool 11); 393 wrong or failed without validation; 316 fixed on re-ask, all correct; 79 handed to the student. Month-first slash dates: 140 impossible, 15 silently wrong of 155. A plain form wins for fixed timetables. Lesson family: tool-call argument validation.',
    requiredMentions: [
      'allowed to use artificial intelligence (AI) tools as a general learning aid',
      'Your unit of study outline will have information about whether you can use AI tools for your assessments',
      'keep track throughout your assignment process of all the ways you have used generative AI',
      'would not be the only evidence relied upon',
      'using AI to summarise meeting outcomes, identify important tasks and forecast project risks',
      'A study planner that would have filled the calendar with nonsense',
      'An agent is a loop, and every turn of the loop can go wrong',
      'Students 16 and over'
    ],
    sources: [
      {
        claim: 'University of Sydney, academic integrity and artificial intelligence: AI as a general learning aid with limits in assessment; unit of study outline decides; Turnitin AI detector score not the only evidence; keep track of generative AI use.',
        url: 'https://www.sydney.edu.au/students/academic-integrity/artificial-intelligence.html'
      },
      {
        claim: 'ACARA, Digital Technologies 7-10 v9: AC9TDI10P12 elaboration on using AI to summarise meetings, identify tasks and forecast project risks.',
        url: 'https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx'
      },
      {
        claim: 'Anthropic, Consumer Terms: "You must be at least 18 years old or the minimum age required to consent to use the Services in your location, whichever is higher."',
        url: 'https://www.anthropic.com/legal/consumer-terms'
      }
    ],
    rejectedClaims: [
      'TEQSA guidance on generative AI in higher education: the host did not answer from this network, so it is not cited.',
      'Other universities\' AI policies: not read raw this week, so only Sydney\'s page is quoted.',
      'Error rates of real language models on tool calls: not measured; the page reports a labelled simulation only.',
      'OpenAI\'s terms page returned 403 to curl\'s default agent and was not circumvented, so its age rule is not quoted here.',
      'Job or salary claims about agent skills: none on this page.'
    ]
  }
};
