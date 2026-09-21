'use strict';
// Learn to code over 50, UK (ag- age and career door; UK cluster Phase 3). England-specific funding facts.
// Sources, read raw on 21 September 2026:
//  - Skills for Careers (DfE), Skills Bootcamps: "Skills Bootcamps take up to 16 weeks to complete."; "You need
//    to be 19 or over to do a Skills Bootcamp."; "For most Skills Bootcamps, you do not need to have any previous
//    knowledge in the subject."; digital bootcamps "including data engineering, software development and
//    marketing"; "After you've finished your Skills Bootcamp, you're guaranteed a job interview with an
//    employer." No upper age limit is stated.
//  - gov.uk, Free courses for jobs (DWP, last updated 29 July 2025, applies to England): "If you're aged 19 or
//    over, you could apply for a free: level 3 qualification"; digital listed among level 3 subjects; many
//    Universal Credit claimants can train full time for up to 16 weeks and keep claiming.
//  - National Careers Service, "The National Careers Service is changing": "From 1 October 2026, our service is
//    changing."; face-to-face careers advice for adults moves to careers advisers within DWP, as part of a new
//    Jobs and Careers Service; the website will be renamed "Get careers information and advice" and keep its URL.
// Spine: the free retraining has a minimum age, not a maximum. England's Skills Bootcamps and free level 3
// courses ask only that you are 19 or over, which makes a free, structured route open to people in their
// fifties and sixties. Our lessons are a different thing: unhurried, one idea at a time, before, alongside or
// instead of a bootcamp. Deliberately not repeated from the adults page: Ofcom's age regression and the
// Lifelong Learning Entitlement's age-60 cut-off (linked instead). No claims that older adults learn
// differently or more slowly.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'guide', tag: 'OVER 50', blurb: 'England\'s free retraining asks that you be 19 or over, with no upper limit stated. Where unhurried lessons fit around it.' },
  slug: 'learn-to-code-over-50-uk',
  code: 'ovf',
  accent: '#5C1F53',
  accentRationale: 'Over 50: a deep plum from the solver (9.60:1 on every paper tint, dE 8.8 from the nearest used accent), calm and grown-up for an adult audience',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Learn to code over 50',
  title: 'Learn to Code Over 50, UK | Free Routes and Live Lessons',
  description: 'Learning to code over 50 in the UK: England\'s free Skills Bootcamps ask only that you are 19 or over. What they offer, and where unhurried live lessons fit.',
  ogDescription: 'Free Skills Bootcamps in England have a minimum age of 19 and no stated maximum. For learners over 50, that changes the options.',
  twitterDescription: 'Learning to code over 50: free Skills Bootcamps, free level 3 courses, the October 2026 careers-service change, and patient live lessons.',
  pageName: 'Learn to Code Over 50',
  webPageDescription: 'Live online coding lessons for adults over 50 in the UK, with an honest guide to England\'s free Skills Bootcamps and level 3 courses.',
  courseDescription: 'Live online coding for adults over 50: Python, spreadsheets and data, websites and AI tools, at a pace set by the learner, with a teacher who reads the code.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Coding over 50',
  navLinks: [
    { href: '#free', label: 'The free routes' },
    { href: '#choose', label: 'Bootcamp or lessons' },
    { href: '#start', label: 'Where to start' },
    { href: '#advice', label: 'Careers advice' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'UK &middot; Adults over 50 &middot; Career change and curiosity',
  h1: 'Learn to code over 50',
  lede: 'Many people who start coding in their fifties or sixties assume the doors have closed: the courses are for twenty-somethings and the funding stopped long ago. In England at least, part of that is simply not true. The Department for Education\'s Skills Bootcamps, free courses of up to 16 weeks that include software development and data engineering, state one age rule: "You need to be 19 or over to do a Skills Bootcamp." No upper limit is given, and most need no previous knowledge. Finish one, and "you\'re guaranteed a job interview with an employer." People aged 19 or over can also apply for free level 3 qualifications, including in digital subjects, subject to eligibility. This page sets out those free routes honestly, explains when a patient course of live lessons is the better fit, and suggests where an adult starting from scratch might begin.',
  secondaryCta: { href: '#free', label: 'The free routes' },
  wa: 'Hello Modern Age Coders, I am over 50 and would like a free first coding lesson.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Our students range from age 6 to 67',
  spec: [
    ['Skills Bootcamps', 'Free, up to 16 weeks, England'],
    ['Age rule', '19 or over, no upper limit stated'],
    ['Previous knowledge', 'Not needed for most'],
    ['At the end', 'A guaranteed job interview'],
    ['Free level 3 courses', 'Aged 19 or over, digital included'],
    ['Our lessons', 'Paced by you, live'],
    ['Group', 'Five to ten at one level'],
    ['Start', 'One free lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Adults over 50 in England have more free options for learning to code than many realise. Skills Bootcamps, run for the Department for Education, are free, take up to 16 weeks, include digital subjects such as software development and data engineering, usually need no previous knowledge, and end with a guaranteed job interview; the only age rule stated is that you must be 19 or over. People aged 19 or over can also apply for free level 3 qualifications in digital subjects, subject to eligibility. From 1 October 2026, face-to-face careers advice for adults in England moves from the National Careers Service to careers advisers within the Department for Work and Pensions, while the website stays online under a new name. Bootcamps are intensive and job-focused; some people prefer to learn more gradually first, or code for its own sake. Modern Age Coders offers unhurried live lessons in small groups or one to one, where a teacher reads your code and the pace is yours. The first lesson is free, then USD 100 a month in a group or USD 150 one to one.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses adults over 50 often begin with',
    lede: 'Python from zero, data for people who live in spreadsheets, and websites. Each card opens a full syllabus.',
    items: [
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'O50 / 01', title: 'Python from Zero', note: 'A complete beginner\'s route into programming, one idea at a time.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', code: 'O50 / 02', title: 'Data and AI for Non-Programmers', note: 'For professionals whose working life runs on spreadsheets and reports.' },
      { course: 'html-css-course-for-beginners-build-real-websites', code: 'O50 / 03', title: 'HTML and CSS', note: 'A real website for a club, a hobby or a small business, built line by line.' }
    ]
  },

  sections: [
    {
      id: 'free', tint: 'tint', eyebrow: 'The free routes',
      h2: 'The free retraining has a minimum age, not a maximum',
      lede: 'From the Department for Education\'s Skills for Careers service and gov.uk. These routes apply in England.',
      body: [
        { kind: 'table', caption: 'Free routes in England, as published', head: ['Route', 'What it is', 'Age rule stated'], rows: [
          ['Skills Bootcamps', 'Free courses of up to 16 weeks, including digital subjects such as software development and data engineering, with a guaranteed job interview at the end', '19 or over'],
          ['Free courses for jobs', 'A free level 3 qualification, with digital among the subjects listed', 'Aged 19 or over'],
          ['Universal Credit and training', 'Many claimants can train full time for up to 16 weeks and keep claiming, with Jobcentre guidance', 'Depends on the claim']
        ] },
        { kind: 'p', html: 'Skills for Careers says that "For most Skills Bootcamps, you do not need to have any previous knowledge in the subject", only a good level of English and a willingness to learn, though some courses set extra entry requirements. Bootcamps are flexible enough to fit around family or work. The promise of a job interview is real and specific, but it is an interview, not a job.' },
        { kind: 'two', mt: true,
          leftH3: 'What these routes do well',
          left: [
            'They are free, structured and tied to employers, which is exactly what someone planning a career change needs.',
            'They do not ask about age beyond a minimum, so a person of 55 or 62 applies on the same terms as anyone else.'
          ],
          rightH3: 'What to check before applying',
          right: [
            'Eligibility beyond age: the routes described apply in England, and individual courses and providers set their own requirements, so check on the provider\'s site.',
            'The pace: up to 16 weeks is intensive. It suits some people well and others less so.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.skillsforcareers.education.gov.uk/pages/training-choice/skills-bootcamp" rel="noopener" target="_blank">Skills for Careers, Skills Bootcamps</a> (Department for Education) and gov.uk, Free courses for jobs (last updated 29 July 2025, applies to England). Scotland, Wales and Northern Ireland have their own schemes, which this page does not cover. For the loan-funded Lifelong Learning Entitlement and its age limit, see <a class="ag-inline-link" href="/best-coding-classes-for-adults-uk">the adults page</a>.' }
      ]
    },
    {
      id: 'choose', tint: 'deep', eyebrow: 'Bootcamp or lessons',
      h2: 'A bootcamp, lessons, or both',
      lede: 'They are different tools. An honest comparison helps you pick.',
      body: [
        { kind: 'table', caption: 'Choosing between them', head: ['', 'Skills Bootcamp', 'Live lessons with us'], rows: [
          ['Cost', 'Free, if you are eligible', 'A monthly fee, first lesson free'],
          ['Pace', 'Intensive, up to 16 weeks', 'Weekly, at the pace you set'],
          ['Goal', 'A job, with a guaranteed interview', 'Whatever you want: a job, a project, or understanding'],
          ['Who is in the room', 'Adults of all ages on the same course', 'Small groups at one level, or one to one'],
          ['Where', 'England, with the provider\'s schedule', 'Online, anywhere in the UK, at UK times']
        ] },
        { kind: 'p', html: 'If you are eligible for a free bootcamp and ready to commit several months to a career change, it deserves serious consideration, and we would say so in a first lesson. Lessons suit people who want to find out whether they enjoy coding before committing, who need to fit learning around caring or work, who want to go further after a bootcamp, or who simply want to understand the technology around them.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Before a bootcamp', p: 'A few months of gentle lessons can confirm the interest and make an intensive course far less of a shock.' },
          { h3: 'After a bootcamp', p: 'Graduates often want a teacher to review projects and keep momentum while job hunting.' },
          { h3: 'Instead of one', p: 'For people coding for curiosity, a hobby or their own business, a job-focused bootcamp may simply not be the right shape.' }
        ] }
      ]
    },
    {
      id: 'start', tint: '', eyebrow: 'Where to start',
      h2: 'Where an adult beginner might start',
      lede: 'The right first step depends on why you want to learn.',
      body: [
        { kind: 'table', caption: 'Starting points by goal', head: ['If you want to', 'A good first step', 'A first project'], rows: [
          ['Understand programming', 'Python from the very beginning', 'A small program that sorts or tidies something you use'],
          ['Make work easier', 'Data and spreadsheets, then a little Python', 'Automating a report you build by hand every month'],
          ['Build something to show', 'HTML and CSS', 'A website for a club, a charity or a business'],
          ['Understand AI tools', 'How the tools work and where they go wrong', 'Using an AI assistant well on a real task'],
          ['Change career', 'Python or web, then a structured route such as a bootcamp', 'A portfolio of two or three finished projects']
        ] },
        { kind: 'p', html: 'Adults starting later often bring things younger beginners lack: years of solving problems at work, a clear idea of what they want to build, and patience with detail. Our teaching does not assume anything about a learner because of their age. It starts from what you already know, works one idea at a time, and gives you a teacher who reads your actual code and explains what to change.' },
        { kind: 'two', mt: true,
          leftH3: 'How our lessons run',
          left: [
            'Small groups of five to ten at the same level, or one to one if you prefer to learn privately.',
            'Live and online, with questions welcome at any point in a lesson.'
          ],
          rightH3: 'What we will not promise',
          right: [
            'A job. We teach skills; a new career depends on many things beyond a course, including the market.',
            'Speed. Some people move quickly and some steadily. Both are fine.'
          ] }
      ]
    },
    {
      id: 'advice', tint: 'tint', eyebrow: 'Careers advice',
      h2: 'Free careers advice, and the October 2026 change',
      lede: 'Where to get impartial advice in England, and what changes on 1 October 2026.',
      body: [
        { kind: 'p', html: 'The National Careers Service has published that "From 1 October 2026, our service is changing." Face-to-face careers advice for adults in England moves to careers advisers within the Department for Work and Pensions, as part of a new Jobs and Careers Service. The website stays online with its tools, keeps its address, and changes its name to "Get careers information and advice".' },
        { kind: 'table', mt: true, caption: 'Where to get help', head: ['Need', 'Where to look'], rows: [
          ['Finding a Skills Bootcamp', 'The National Careers Service course finder, then the provider\'s own site'],
          ['Checking eligibility for free courses', 'gov.uk, Free courses for jobs, or your local college'],
          ['Training while claiming benefits', 'Your local Jobcentre Plus'],
          ['Face-to-face careers advice from October 2026', 'Careers advisers within the Department for Work and Pensions']
        ] },
        { kind: 'p', html: 'For more on learning to code as an adult at any age, see <a class="ag-inline-link" href="/best-coding-classes-for-adults-uk">coding classes for adults</a>. If AI is what brought you here, <a class="ag-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learning to think, not just use AI tools</a> explains why understanding still matters, and <a class="ag-inline-link" href="/best-python-classes-online-uk">Python classes online</a> sets out how we teach the language.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Four stages for adult beginners',
    lede: 'Placement follows what you can already do, not your age.',
    table: { caption: 'From first program to finished projects', head: ['Stage', 'Typically', 'What should be true'], rows: [
      ['1. First programs', 'First month or two', 'Short Python programs written and run, errors read calmly'],
      ['2. Useful programs', 'Months two to four', 'Programs that do something useful: tidy files, analyse a spreadsheet, answer a question'],
      ['3. A real project', 'Months four to eight', 'A website, tool or analysis planned and finished'],
      ['4. Next step', 'After that', 'A portfolio, a bootcamp, a new role, or simply more projects']
    ] },
    left: { h3: 'Stage two is the turning point', ps: [
      'When a program saves you an hour of real work, coding stops being an exercise.',
      'The full sequence of topics is on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Stage four is yours to choose', ps: [
      'Some learners move on to a free bootcamp; some keep building for their own reasons.',
      'Either way, finished projects are the evidence that counts.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for adults over 50',
    lede: 'Grouped by goal. The free lesson settles where to start.',
    bands: [
      { num: 'I', h3: 'First steps', sub: 'For complete beginners', courses: [
        { code: 'UK / OF1 / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python from zero', blurb: 'Programming from the very first line.' },
        { code: 'UK / OF1 / 02', slug: 'html-css-course-for-beginners-build-real-websites', title: 'HTML and CSS', blurb: 'Websites built by hand.' },
        { code: 'UK / OF1 / 03', slug: 'ai-tools-mastery-complete-college', title: 'AI tools', blurb: 'Using AI assistants well, and knowing their limits.' }
      ] },
      { num: 'II', h3: 'Work and data', sub: 'For professionals', courses: [
        { code: 'UK / OF2 / 01', slug: 'data-and-ai-analytics-for-non-programmers-course', title: 'Data and AI for non-programmers', blurb: 'From spreadsheets to analysis.' },
        { code: 'UK / OF2 / 02', slug: 'data-analysis-mastery-course-college', title: 'Data analysis', blurb: 'Excel, SQL and Python for real data.' },
        { code: 'UK / OF2 / 03', slug: 'complete-business-finance-mathematics-mastery', title: 'Business and finance maths', blurb: 'The numbers behind business decisions.' }
      ] },
      { num: 'III', h3: 'Career change', sub: 'For a new direction', courses: [
        { code: 'UK / OF3 / 01', slug: 'full-stack-web-development-masterclass-college', title: 'Full stack web development', blurb: 'For career switchers aiming at web roles.' },
        { code: 'UK / OF3 / 02', slug: 'data-science-complete-masterclass-college', title: 'Data science', blurb: 'A structured route into data work.' },
        { code: 'UK / OF3 / 03', slug: 'git-github-version-control-course-for-college-students', title: 'Git and GitHub', blurb: 'The collaboration tool every developer uses.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons work',
    h2: 'Unhurried, and led by your goals',
    lede: 'Teaching happens from India, where the clock does not change, so the UK is four and a half hours behind in summer and five and a half in winter. Lesson times are agreed in UK hours, including daytime where it can be arranged.',
    slots: [
      { time: 'Daytime', l: 'Often possible for retired or flexible learners; ask on the first call.' },
      { time: 'Evening', l: 'For people still working.' },
      { time: 'Weekend', l: 'A longer session for project work.' }
    ],
    cells: [
      { h3: 'One idea at a time', p: 'New concepts introduced one by one, and practised before the next arrives.' },
      { h3: 'Your own projects', p: 'Lessons built around what you want to make.' },
      { h3: 'Code actually read', p: 'A teacher looks at your program and explains exactly what to change.' },
      { h3: 'Questions welcome', p: 'No question is too basic; asking is how everyone learns.' },
      { h3: 'Private if you prefer', p: 'One-to-one lessons for learners who would rather not join a group.' },
      { h3: 'Small groups', p: 'Five to ten learners at the same level.' }
    ]
  },

  projectsH2: 'Projects our adult learners have built',
  projectsLede: 'Four projects from lessons, built by the learners themselves. More in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews from our learners and their families, as written.',

  fees: {
    h2: 'Fees for adult coding lessons',
    lede: 'Unlike a funded bootcamp, lessons are paid: one monthly fee in US dollars, the same for everyone outside India. The first lesson is free, and there is nothing to pay until you settle on a course and a weekly time.',
    free: ['A lesson starting from your goals', 'An honest view on bootcamp versus lessons', 'Only a phone number needed'],
    group: ['Five to ten adults at one level', 'The same teacher each week', 'Projects you choose', 'Stop at the end of any month'],
    one: ['A teacher for you alone', 'Paced entirely by you', 'Suits private or career-change learning']
  },

  faq: {
    eyebrow: 'Questions about coding over 50',
    h2: 'What adult learners ask',
    items: [
      { q: 'Am I too old to learn to code?', a: 'No. Our learners range up to their sixties, and England\'s free Skills Bootcamps state only a minimum age of 19, with no upper limit given.' },
      { q: 'Are Skills Bootcamps really free?', a: 'Yes, for eligible learners in England. They take up to 16 weeks, include digital subjects such as software development, and usually need no previous knowledge.' },
      { q: 'What happens after a bootcamp?', a: 'The Department for Education says you are guaranteed a job interview with an employer. An interview is not a job, but it is a real start.' },
      { q: 'Can I get a free qualification?', a: 'If you are 19 or over in England, you may be able to take a free level 3 qualification, with digital among the subjects listed under Free courses for jobs.' },
      { q: 'Should I do a bootcamp or lessons?', a: 'If you are eligible and ready for an intensive, job-focused course, a bootcamp is worth serious thought. Lessons suit people who want to learn gradually, test their interest first, keep going afterwards, or code for its own sake.' },
      { q: 'Where do I get careers advice?', a: 'From 1 October 2026, face-to-face careers advice for adults in England is given by careers advisers within the Department for Work and Pensions. The National Careers Service website stays online under a new name.' },
      { q: 'What language should I learn first?', a: 'Usually Python, because it reads clearly and is useful for work, data and hobbies. If you want to build a website, HTML and CSS are a friendly start.' },
      { q: 'Will you get me a job?', a: 'No. We teach skills and help you build projects. A new career depends on much more than a course, and we will not pretend otherwise.' },
      { q: 'Do these free routes apply outside England?', a: 'The Skills Bootcamps and free courses described here apply in England. Scotland, Wales and Northern Ireland have their own schemes.' },
      { q: 'What does it cost?', a: 'The first lesson is free. After that, one monthly fee in US dollars, lower for a group place than one to one, as shown in the fees section, and you can stop at the end of any month.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for adult learners',
    lede: 'Adult classes, AI, and Python in depth.',
    items: [
      { href: '/best-coding-classes-for-adults-uk', label: 'Coding classes for adults', p: 'Learning to code as an adult at any age, and the loan-funded route.' },
      { href: '/learn-to-think-not-just-use-ai-tools-uk', label: 'Learn to think, not just use AI tools', p: 'Why understanding still matters.' },
      { href: '/best-python-classes-online-uk', label: 'Python classes online', p: 'How we teach Python properly.' },
      { href: '/ai-agents-course-for-professionals-uk', label: 'AI agents for professionals', p: 'For working adults who want to build with AI.' },
      { href: '/online-coding-tutor-uk', label: 'Online coding tutor', p: 'One-to-one teaching, and our position on checks.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'All our UK pages.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Leave a number and we will call at a UK time that suits you. Tell us why you want to learn; the first lesson starts there and ends with a plan.',
    readFirst: 'Reading first? Each <a class="ag-inline-link" href="/courses">course page</a> sets out its syllabus, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains our approach, and <a class="ag-inline-link" href="/student-labs">student labs</a> shows finished projects.',
    note: 'A WhatsApp message is the quickest route and free from a UK phone. We are based in India, so the number begins +91.',
    formNote: 'No card, no contract. One reply, with a time.'
  },

  footer: {
    cols: [
      { h4: 'Adults', links: [
        { href: '/best-coding-classes-for-adults-uk', label: 'Coding for adults' },
        { href: '/ai-agents-course-for-professionals-uk', label: 'AI agents for professionals' },
        { href: '/best-python-classes-online-uk', label: 'Python classes online' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK coding classes' }
      ] },
      { h4: 'More', links: [
        { href: '/learn-to-think-not-just-use-ai-tools-uk', label: 'Thinking beyond AI tools' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Coding for adults, live on UK time'
  },

  personalityCss: `
.ag-root.ag-ovf .ag-hero h1 { letter-spacing: -0.024em; font-weight: 700; }
.ag-root.ag-ovf .ag-capsule { border-left-width: 5px; border-radius: 4px; }
.ag-root.ag-ovf .ag-section-head h2 { max-width: 27ch; }
.ag-root.ag-ovf .ag-table caption { text-align: left; font-weight: 660; }
.ag-root.ag-ovf .ag-table th:first-child { width: 24%; }
.ag-root.ag-ovf .ag-band-head h3 { letter-spacing: -0.01em; }
`,

  mustMention: ['Skills Bootcamps', '19 or over', '16 weeks', 'guaranteed a job interview', 'level 3', '1 October 2026', 'Department for Work and Pensions', 'over 50', 'Python', 'England'],

  dossier: {
    curriculumAuthority: 'England, adult retraining. Skills for Careers (Department for Education), Skills Bootcamps: "Skills Bootcamps take up to 16 weeks to complete."; "You need to be 19 or over to do a Skills Bootcamp."; "For most Skills Bootcamps, you do not need to have any previous knowledge in the subject."; digital bootcamps "including data engineering, software development and marketing"; "After you\'ve finished your Skills Bootcamp, you\'re guaranteed a job interview with an employer."; no upper age limit stated. gov.uk Free courses for jobs (DWP, last updated 29 July 2025, applies to England): "If you\'re aged 19 or over, you could apply for a free: level 3 qualification", digital among the subjects; Universal Credit claimants may train full time for up to 16 weeks. National Careers Service, The National Careers Service is changing: "From 1 October 2026, our service is changing."; face-to-face careers advice for adults moves to careers advisers within DWP as part of a new Jobs and Careers Service; website renamed "Get careers information and advice", same URL.',
    localProject: 'The free retraining has a minimum age, not a maximum. The page sets out, from the Department for Education and gov.uk, that England\'s Skills Bootcamps (free, up to 16 weeks, digital included, usually no previous knowledge, a guaranteed interview) and free level 3 courses state only that learners must be 19 or over, then compares a bootcamp with unhurried live lessons honestly, suggests starting points by goal, and explains the 1 October 2026 change that moves face-to-face adult careers advice to DWP careers advisers. It links to the adults page rather than repeating its Ofcom and Lifelong Learning Entitlement material, and makes no claim that older adults learn differently. Lesson family: public funding rules read for what they allow older learners to do.',
    requiredMentions: ['19 or over', '16 weeks', 'guaranteed a job interview', '1 October 2026'],
    sources: [
      { claim: 'Skills for Careers, Skills Bootcamps: length, age requirement, entry requirements, digital subjects and the guaranteed interview.', url: 'https://www.skillsforcareers.education.gov.uk/pages/training-choice/skills-bootcamp' },
      { claim: 'gov.uk, Free courses for jobs: free level 3 qualifications for those aged 19 or over, digital included; training while claiming Universal Credit.', url: 'https://www.gov.uk/guidance/free-courses-for-jobs' },
      { claim: 'National Careers Service, The National Careers Service is changing: the 1 October 2026 change to DWP careers advisers and the website renaming.', url: 'https://nationalcareers.service.gov.uk/service-is-changing' }
    ],
    rejectedClaims: [
      'That there is formally no upper age limit on Skills Bootcamps: the page says only that none is stated, since the source gives a minimum age alone.',
      'Any claim that older adults learn differently, faster or slower: none made.',
      'Schemes in Scotland, Wales and Northern Ireland: not read for this build, so only noted as separate.',
      'Job outcomes: we do not promise employment.',
      'Any promise about progress speed, which we decline.'
    ]
  }
};
