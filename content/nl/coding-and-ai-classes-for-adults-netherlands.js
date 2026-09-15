'use strict';
// Coding and AI classes for adults, Netherlands (ag- age door, national).
// Spine: using AI at work is already common, building it is not. CBS
// (25 February 2026): 43 percent of people in paid work used AI at work in
// 2025, 39 percent of adults in the last three months. CBS AI monitor
// (27 February 2025), 7.5 million Textkernel job ads from 2018 to mid-2024:
// about 8,725 AI vacancies after weighting, 0.05 to 0.13 percent of all
// vacancies. The two are different measures and the page says so. Who pays:
// the STAP budget opened for the last time on 15 November 2023; the 30
// percent ruling stays at 30 percent to 2026 and is expected to become 27
// percent from 1 January 2027 with a higher salary norm. No tax advice.

module.exports = {
  cluster: 'ag',
  slug: 'coding-and-ai-classes-for-adults-netherlands',
  code: 'cad',
  accent: '#6A6700',
  accentRationale: 'Adults door: an olive from the solver, twenty-nine units or more from every page it links to, the academy pages, the kids and teens doors and both Dutch oranges among them, with an unlinked Rotterdam district as its nearest neighbour',
  pageType: 'market',
  market: { name: 'Netherlands', iso: 'NL', dial: '+31', lang: 'en-NL', locale: 'en_NL', geoRegion: 'NL', brandTag: 'Netherlands', phonePlaceholder: '6 XXXX XXXX', minDigits: 9 },
  routeLabel: 'Coding and AI classes for adults, Netherlands',
  title: 'Coding and AI Classes for Adults, Netherlands | Live Online',
  description: 'Live online coding and AI classes for adults in the Netherlands: Python automation, data analysis and AI tools, at your own pace, in English. First lesson free.',
  ogDescription: 'Four in ten Dutch workers already use AI at work; barely one job advert in a thousand asks for AI skills. Classes for adults who want to use AI well, automate their work or change career. Live online.',
  twitterDescription: 'Python automation, data analysis and AI for Dutch adults, live online in English. First lesson free.',
  pageName: 'Coding and AI Classes for Adults in the Netherlands',
  webPageDescription: 'Live online coding, data and AI classes for adults in the Netherlands: Python automation, data analysis, AI tools, machine learning and software development, taught in English in small groups or one to one.',
  courseDescription: 'A live online programme for adults in the Netherlands, from using AI tools and data well through Python automation to machine learning and software development, placed by ability and taught in English.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the Netherlands', href: '/coding-classes-in-netherlands' }],
  crumbLabel: 'For adults',
  navLinks: [
    { href: '#work', label: 'AI at work' },
    { href: '#paying', label: 'Who pays' },
    { href: '#ladder', label: 'The ladder' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Netherlands &middot; Adults &middot; Live online',
  h1: 'Coding and AI classes for adults in the Netherlands',
  lede: 'By 2025, according to the national statistics office, 43 percent of Dutch people in paid work were using AI in their job. Yet across more than six years of Dutch job adverts, only around one in a thousand asked for AI skills by name. Put simply, AI has spread through ordinary jobs much faster than jobs that build AI. For most adults the useful skills are therefore not the ones in the headlines. They are knowing what an AI tool does with your data and when it is wrong, turning a repetitive part of the week into a Python script, and handling data well enough to trust a report. For a smaller group, changing career into software or data, the route goes further. This page is for adults in the Netherlands on either path, including the many international professionals living here, taught live online and in English, at a pace that fits a working life.',
  secondaryCta: { href: '#catalogue', label: 'See the adult courses' },
  wa: 'Hello Modern Age Coders, I am an adult in the Netherlands and would like a free coding or AI class.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students of every age &middot; no pre-recorded courses',
  spec: [
    ['For', 'Adults of any age up to 67'],
    ['Paths', 'Use AI well, automate, change career'],
    ['Subjects', 'Python, data, AI tools, ML, software'],
    ['Format', 'Live video with a teacher'],
    ['Groups', '5 to 10 at one level, or one to one'],
    ['Times', 'Evenings and weekends'],
    ['Language', 'English'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders teaches coding, data and AI live online to adults in the Netherlands. Most start with one of three goals: using AI tools and data confidently at work, automating repetitive tasks with Python, or moving into a technical career. Each learner is placed by what they can already do, in a group of five to ten at the same level or one to one, and every lesson is taught in English by a live teacher, in the evening or at the weekend. The first lesson is free; after that a group place is USD 100 a month and one-to-one lessons USD 150.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses most Dutch adults begin with',
    lede: 'One for the adult who does not code and wants to use data and AI well, one for the adult who wants to automate, one for the adult who wants to understand and build AI. Each opens its own page with syllabus, timetable and fee.',
    items: [
      { course: 'data-and-ai-analytics-for-non-programmers-course', code: 'ADULT / 01', title: 'Data and AI Analytics for Non-Programmers', note: 'Spreadsheets, dashboards and AI assistants used with judgement, for adults who work with numbers but have never written code.' },
      { course: 'python-ai-automation-masterclass-college', code: 'ADULT / 02', title: 'Python and AI Automation', note: 'Scripts that take over the dull, repeated parts of a job: files, reports, web data and AI tools joined into something reliable.' },
      { course: 'ai-ml-masterclass-complete-college', code: 'ADULT / 03', title: 'AI and Machine Learning Masterclass', note: 'The full machine learning route at an adult pace, for the learner who wants to know how these systems work and build them.' }
    ]
  },

  sections: [
    {
      id: 'work', tint: 'tint', eyebrow: 'AI at work',
      h2: 'Four in ten Dutch workers use AI. Very few job adverts ask for it.',
      lede: 'Both figures below come from the national statistics office, CBS. They measure different things, so they cannot be compared directly, but side by side they say something useful about where adult learning pays.',
      body: [
        { kind: 'table', caption: 'Adults, work and AI in the Netherlands, from two CBS publications', head: ['Measure', 'Figure', 'Source'], rows: [
          ['Adults (18 and over) who used AI in the last three months, 2025', '39 percent', 'CBS, 25 February 2026'],
          ['People in paid work who use AI in their work, 2025', '43 percent', 'CBS, 25 February 2026'],
          ['Adults who used AI for education or training, 2025', '10 percent', 'CBS, 25 February 2026'],
          ['Online job adverts analysed, Q1 2018 to Q2 2024', '7.5 million', 'CBS AI monitor, 27 February 2025'],
          ['AI vacancies identified, after weighting', 'about 8,725', 'CBS AI monitor'],
          ['AI vacancies as a share of all vacancies', 'between 0.05 and 0.13 percent', 'CBS AI monitor']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The first three lines describe people. In 2025, 39 percent of Dutch adults had used AI in the previous three months, and 43 percent of people in paid work used it in their work. Only 10 percent of adults had used it for education or training.',
            'The same survey recorded widespread unease: 62.5 percent worried about privacy risks, 69.5 percent about the spread of fake news, and 75.4 percent expected certain jobs to disappear. Using a tool while distrusting it is a strong argument for understanding it.'
          ],
          right: [
            'The last three lines describe job adverts. CBS analysed 7.5 million Dutch online adverts, supplied by Textkernel, and found about 8,725 asking for AI skills. Their number rose from 2018 to a peak at the start of 2022 and has since hovered around 430 a quarter. The most common roles were systems analysts, statistical and mathematical specialists and software developers, and the leading sectors were education, information and communication, and specialist business services.',
            'Different measures, then, but the same direction: AI is entering ordinary work far faster than jobs that build it. For most adults the skills worth paying for are using AI with judgement, automating their own tasks and working with data. For the smaller group heading into technical work, the full route is below.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.cbs.nl/nl-nl/longread/diversen/2026/ai-in-de-samenleving-ervaringen-en-opinies?onepage=true" rel="noopener" target="_blank">CBS, AI in de samenleving: ervaringen en opinies, 25 February 2026</a>; <a class="ag-inline-link" href="https://www.cbs.nl/nl-nl/longread/aanvullende-statistische-diensten/2025/ai-monitor-2024/6-vraag-naar-arbeidskrachten-met-ai-vaardigheden" rel="noopener" target="_blank">CBS AI monitor 2024, chapter 6, 27 February 2025</a>. Read 15 September 2026; figures quoted as published.' }
      ]
    },
    {
      id: 'paying', tint: 'deep', eyebrow: 'Who pays',
      h2: 'Who pays when an adult learns to code in the Netherlands',
      lede: 'Two public arrangements shape the answer for many adults here: a training budget that has ended, and a tax arrangement for international employees that is changing. Neither is ours to advise on, but both are worth knowing.',
      body: [
        { kind: 'three', cells: [
          { h3: 'The STAP budget has closed', p: 'The STAP budget, a government subsidy that workers and job seekers could use for training, opened for the last time on Wednesday 15 November 2023, through the UWV portal. Its end was one of the cabinet\'s spending cuts that year, and the remaining money, more than 73 million euros, went to a new temporary scheme for individual training in sectors the government regards as crucial. For most adults learning to code, the cost is now their own or their employer\'s.' },
          { h3: 'The 30 percent ruling is changing', p: 'Employers may pay qualifying employees from abroad up to 30 percent of their salary tax-free in 2024, 2025 and 2026. From 1 January 2027 that is expected to become at most 27 percent, and the salary norm rises from 46,107 euros to 50,436 euros, indexed each year; for employees under 30 with a master\'s degree, from 35,048 euros to 38,388 euros. We mention it because many of our adult learners are international professionals weighing their skills; we give no tax advice.' },
          { h3: 'Employers often pay', p: 'With 43 percent of workers already using AI in their jobs, many employers are willing to fund training that makes that use safer and more productive. A short description of the course and its outcome is usually all a manager needs, and we can provide one after the free lesson.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'For the adult paying personally, the numbers are simple: USD 100 a month for a group place, USD 150 for one to one, no contract for the year, and a free first lesson to find out whether it suits before anything is spent.'
          ],
          right: [
            'For the adult whose employer pays, the useful point is that the course can be aimed at a real task from work: the report that takes two days, the spreadsheet nobody trusts, the process that could be a script. That makes the case for funding easy to write.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.rijksoverheid.nl/actueel/nieuws/2023/11/13/stap-budget-voor-het-laatst-open" rel="noopener" target="_blank">Rijksoverheid, STAP-budget voor het laatst open, 13 November 2023</a>; <a class="ag-inline-link" href="https://ondernemersplein.overheid.nl/wetswijzigingen/vergoeding-30-procent-regeling-expats-wordt-27-procent/" rel="noopener" target="_blank">Ondernemersplein, vergoeding 30%-regeling expats wordt 27%</a>. Read 15 September 2026. This is general information, not financial or tax advice.' }
      ]
    },
    {
      id: 'what', tint: '', eyebrow: 'What adults learn',
      h2: 'Three paths, one starting lesson',
      lede: 'Adults rarely want the same thing. The free lesson finds out which of these paths fits, and where on it to start.',
      body: [
        { kind: 'two',
          left: [
            'Using AI and data well is the path most adults need first. It needs no programming: spreadsheets, dashboards and AI assistants, used with a clear sense of what each can be trusted with and what should never be typed into them. The page on <a class="ag-inline-link" href="/ai-classes-for-adults">AI classes for adults</a> covers this ground in more detail.',
            'Automating with Python comes next for many. A few months of Python is enough to turn a repeated weekly task into a script, and to understand what AI coding tools are doing when they write code for you.'
          ],
          right: [
            'Changing career is the longest path: Python, data, machine learning or software development, and a portfolio an employer can open. It is realistic at thirty, forty or fifty, and slower than advertisements suggest. <a class="ag-inline-link" href="/ai-and-machine-learning-for-working-professionals">AI and machine learning for working professionals</a> and <a class="ag-inline-link" href="/java-classes-for-adults">Java classes for adults</a> go further into two of the routes.',
            'The city academy pages, such as <a class="ag-inline-link" href="/ai-and-python-academy-amsterdam">Amsterdam</a> and <a class="ag-inline-link" href="/ai-and-python-academy-the-hague">The Hague</a>, show how AI is being used and examined in Dutch workplaces and government.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The rungs for adults',
    h2: 'From confident AI user to builder, one rung at a time',
    lede: 'Adults can stop at whichever rung meets their goal. Most go further than they planned, because each rung makes the next one easier.',
    table: { caption: 'The route for adults, and the goal each rung serves', head: ['Rung', 'Typical goal', 'What the adult can do after it'], rows: [
      ['1. AI and data literacy', 'Use tools well at work', 'Choose, check and safely use AI tools and spreadsheets'],
      ['2. Python basics', 'Automate one task', 'Write scripts that handle files, data and simple reports'],
      ['3. Data and automation', 'Save hours every week', 'Build reliable automations and trustworthy analyses'],
      ['4. Machine learning or software', 'A new technical role', 'Build and evaluate models, apps or web systems'],
      ['5. Portfolio', 'Show an employer', 'Keep public work that proves what you can do']
    ] },
    left: { h3: 'Why adults should not skip the first rung', ps: [
      'Even experienced professionals often use AI tools in ways that leak data or trust wrong answers. An hour or two on what these tools do with information pays for itself long before any code is written.',
      'The complete order of subjects is on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Fitting it around work', ps: [
      'Most adults take two lessons a week in the evening or at the weekend, and pause during busy periods at work without losing their place.',
      'One-to-one lessons suit adults with irregular hours or a specific deadline, and are the only format for the Copilot Studio courses.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Ten live courses for adults, grouped by goal',
    lede: 'Each card opens the full course page with timetable and fee. The free lesson, not this list, decides where an adult starts.',
    bands: [
      { num: 'I', h3: 'Use data and AI well', sub: 'No programming needed', courses: [
        { code: 'ADULT / USE / 01', slug: 'data-and-ai-analytics-for-non-programmers-course', title: 'Data and AI Analytics for Non-Programmers', blurb: 'Excel, Sheets, Power BI and AI assistants for people who work with numbers and want to trust them.' },
        { code: 'ADULT / USE / 02', slug: 'data-analysis-mastery-course-college', title: 'Data Analysis Course', blurb: 'Excel, SQL, Python and business intelligence, for analysts who want their reports to hold up.' },
        { code: 'ADULT / USE / 03', slug: 'ai-tools-mastery-complete-college', title: 'AI Tools Mastery Course', blurb: 'ChatGPT, Claude and automation tools used for real work, with a clear view of their limits and of what stays private.' }
      ] },
      { num: 'II', h3: 'Automate with Python', sub: 'Scripts that give back hours', courses: [
        { code: 'ADULT / AUTO / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python Masterclass', blurb: 'Python from zero to advanced at an adult pace, the base for automation, data and AI.' },
        { code: 'ADULT / AUTO / 02', slug: 'python-ai-automation-masterclass-college', title: 'Python and AI Automation', blurb: 'Scripting, web data and applied AI aimed at the tasks that eat the working week.' },
        { code: 'ADULT / AUTO / 03', slug: 'mysql-database-complete-masterclass-college', title: 'MySQL Course', blurb: 'SQL and database design for adults whose work lives in tables, from first queries to real administration.' }
      ] },
      { num: 'III', h3: 'Build AI and software', sub: 'For a new technical role', courses: [
        { code: 'ADULT / BUILD / 01', slug: 'ai-ml-masterclass-complete-college', title: 'AI and Machine Learning Masterclass', blurb: 'Machine learning from classical methods to deep learning, with evaluation and deployment treated seriously.' },
        { code: 'ADULT / BUILD / 02', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI: LLMs, RAG and Agents', blurb: 'How language models work, how to ground them in your own documents and how to build agents with limits.' },
        { code: 'ADULT / BUILD / 03', slug: 'data-science-complete-masterclass-college', title: 'Data Science Course', blurb: 'Statistics, SQL, modelling and a portfolio a hiring manager can assess, for adults moving into data roles.' },
        { code: 'ADULT / BUILD / 04', slug: 'full-stack-web-development-masterclass-college', title: 'Full Stack Developer Course', blurb: 'React, Node.js and deployment basics, for adults changing career into software development.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How the classes run',
    h2: 'Evenings and weekends, around a working week',
    lede: 'Teachers work from India, which does not change its clocks, while the Netherlands moves between winter and summer time. That makes the gap four and a half hours in winter and three and a half in summer. For working adults, evenings and weekends are the usual choice, and the regular time is agreed at the free lesson.',
    slots: [
      { time: 'Weekday evening', l: 'After work, Dutch time, arranged with the teacher. The most common choice for adults in full-time jobs.' },
      { time: 'Weekend morning', l: 'Saturday or Sunday. Popular with adults who want a calmer, longer session.' },
      { time: 'Daytime', l: 'For adults between jobs, on parental leave or working shifts, where a teacher is free.' }
    ],
    cells: [
      { h3: 'A free first lesson', p: 'You work on a real task while the teacher sees how you approach it. By the end you both know the right starting point and path.' },
      { h3: 'Groups of five to ten', p: 'Adults from several countries at the same level, often at similar points in their careers, which makes for good discussion.' },
      { h3: 'One to one for flexibility', p: 'For irregular hours, a specific work project, a deadline, or the Copilot Studio courses, which are taught only one to one.' },
      { h3: 'Your own work as material', p: 'Where it helps, lessons use a task from your job, so what you learn on Tuesday is useful on Wednesday.' },
      { h3: 'In English', p: 'Lessons are in English, the language of programming tools and documentation, and a comfortable working language for most international professionals here.' },
      { h3: 'A portfolio as you go', p: 'Everything you build goes into your own GitHub repository, a record you can show an employer.' }
    ]
  },

  projectsH2: 'What our students have built',
  projectsLede: 'Four projects our students published online, open to anyone. More are on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Reviews as students posted them on Google. We do not write, edit or pay for any of them.',

  fees: {
    h2: 'What it costs an adult',
    lede: 'Monthly, in US dollars, at the same rates as in every other country outside India. No Dutch surcharge, no enrolment fee, no contract for the year. Copilot Studio courses are one to one only and use that rate.',
    free: ['A real lesson on a real task', 'Finds your path and level', 'No card or bank details'],
    group: ['Five to ten adults at one level', 'The same live teacher each week', 'Work reviewed every week', 'A certificate at the end'],
    one: ['A teacher for you alone', 'Pace and content set by your goal', 'The only format for Copilot Studio']
  },

  faq: {
    eyebrow: 'Questions from adults in the Netherlands',
    h2: 'What Dutch and international adults ask before starting',
    items: [
      { q: 'I use AI at work already. What would I learn?', a: 'How the tools work, when they are wrong, what should never go into them, and how to turn repeated tasks into reliable automations. CBS found that 43 percent of Dutch workers used AI at work in 2025; far fewer have been taught to use it well.' },
      { q: 'Is it too late to change career into tech?', a: 'No, but it takes longer than adverts suggest. Adults at thirty, forty or fifty do it, usually over one to two years of steady study alongside work, with a portfolio at the end.' },
      { q: 'Are there many AI jobs in the Netherlands?', a: 'Fewer than headlines imply. CBS found that adverts asking for AI skills made up between 0.05 and 0.13 percent of all Dutch vacancies from 2018 to mid-2024. AI skills are more often an advantage within existing jobs than a job title in themselves.' },
      { q: 'Can I still get the STAP budget?', a: 'No. The STAP budget opened for the last time on 15 November 2023. Most adults now pay themselves or ask their employer, and we can provide a course description to support that.' },
      { q: 'I am an international professional on the 30 percent ruling. Does this matter?', a: 'We give no tax advice, but the ruling is expected to change from 1 January 2027, to at most 27 percent with a higher salary norm. Many international professionals use that as a moment to strengthen their skills.' },
      { q: 'I have never written code. Where do I start?', a: 'With AI and data literacy, or directly with Python basics if you want to automate. The free lesson shows which fits.' },
      { q: 'Are lessons in Dutch?', a: 'No, in English, which suits most international professionals and is the language of the tools anyway.' },
      { q: 'What does it cost?', a: 'USD 100 a month for a group place, USD 150 a month for one-to-one lessons, billed in US dollars, with no joining fee and no annual contract. The first lesson is free.' },
      { q: 'When are lessons held?', a: 'Mostly weekday evenings and weekends, Dutch time. Teachers are four and a half hours ahead in winter and three and a half in summer.' },
      { q: 'What happens after I send the form?', a: 'We call you at a Dutch hour to arrange the free lesson. Nothing is charged and nothing is booked until you have taken that lesson and decided.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for adults learning in the Netherlands',
    lede: 'Pages that go deeper into a subject or a place.',
    items: [
      { href: '/ai-classes-for-adults', label: 'AI classes for adults', p: 'The global page on learning AI as an adult.' },
      { href: '/ai-and-machine-learning-for-working-professionals', label: 'AI and ML for working professionals', p: 'Machine learning for people already in work.' },
      { href: '/java-classes-for-adults', label: 'Java classes for adults', p: 'Java for adults heading into software development.' },
      { href: '/ai-and-python-academy-netherlands', label: 'AI and Python Academy, Netherlands', p: 'The national academy page, from Python to building AI.' },
      { href: '/coding-classes-for-teens-netherlands', label: 'Coding classes for teens', p: 'For the teenagers in the family.' },
      { href: '/coding-classes-for-kids-netherlands', label: 'Coding classes for kids', p: 'For the youngest learners, aged 6 to 12.' }
    ]
  },

  start: {
    h2: 'Book your free first lesson',
    lede: 'Leave your number and we will call at a Dutch hour. The first lesson is taught by a real teacher on a real task, and by the end you will know your path and your starting point.',
    readFirst: 'Prefer to read first? See the <a class="ag-inline-link" href="/courses">full course list</a>, <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.',
    note: 'WhatsApp from a Dutch number is free and usually quickest. Our number is Indian; we have no office or premises in the Netherlands.',
    formNote: 'No card, no commitment. One call to arrange the lesson.'
  },

  footer: {
    cols: [
      { h4: 'Netherlands', links: [
        { href: '/coding-classes-in-netherlands', label: 'Coding in the Netherlands' },
        { href: '/ai-and-python-academy-netherlands', label: 'Academy, Netherlands' },
        { href: '/coding-classes-for-teens-netherlands', label: 'Coding for teens' },
        { href: '/coding-classes-for-kids-netherlands', label: 'Coding for kids' }
      ] },
      { h4: 'For adults', links: [
        { href: '/ai-classes-for-adults', label: 'AI classes for adults' },
        { href: '/ai-and-machine-learning-for-working-professionals', label: 'AI and ML for professionals' },
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Teaching adults in the Netherlands on CET and CEST'
  },

  personalityCss: `
.ag-root.ag-cad .ag-hero-grid { gap: clamp(1.2rem, 3.2vw, 2.8rem); }
.ag-root.ag-cad .ag-hero h1 { letter-spacing: -0.02em; }
.ag-root.ag-cad .ag-capsule { border-left-width: 4px; }
.ag-root.ag-cad .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-cad .ag-band-head h3 { letter-spacing: -0.008em; }
.ag-root.ag-cad .ag-table caption { text-align: left; }
.ag-root.ag-cad .ag-spec dt { letter-spacing: 0.12em; }
.ag-root.ag-cad .ag-slots { gap: 1.2rem; }
`,

  mustMention: ['43 percent', '25 February 2026', 'Textkernel', '7.5 million', 'about 8,725', 'between 0.05 and 0.13 percent', '15 November 2023', '73 million euros', 'at most 27 percent', '50,436 euros', '38,388 euros']
};
