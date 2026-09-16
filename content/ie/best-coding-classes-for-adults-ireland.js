'use strict';
// Best coding classes for adults in Ireland (ag- door, Ireland cluster,
// Phase 2). Facts read at primary sources on 16 September 2026: Harnessing
// Digital, the Digital Ireland Framework (target of 80% of adults with at
// least basic digital skills by 2030; skills at three levels); Eurostat
// isoc_sk_dskl_i21, indicator I_DSK2_BAB (Ireland 82.82% in 2025 and 72.91% in
// 2023, EU 60.40% and 55.56%) - the target and the measurement come from two
// different sources, so the page presents them separately and never claims
// Ireland has met the target; European Commission Digital Decade 2025 country
// report for Ireland, data year 2023 (25-34 87.99% vs 55-64 46.74%; digital
// content creation lowest at 78.50%; tertiary 88.23% vs low or no formal
// education 14.43%, a gap of 58.48 percentage points); gov.ie Springboard+
// 2026 (7,200+ places, 244 courses, 36 providers, free if unemployed or
// returning, about 10% if employed, 50% for micro-credentials, NFQ Levels 6
// to 9, 122,000 people since 2011, all 2026 courses starting between August
// and 31 October 2026); gov.ie eCollege (government funded, free to anyone
// over 18); CSO Household Digital Consumer Behaviour 2025 (18% of male and 4%
// of female internet users wrote code, 31% of males aged 16 to 29; online
// courses 35% in very affluent areas vs just over one in five in disadvantaged
// areas); CSO Adult Education Survey 2022 (52% lifelong learning vs EU-27 44%,
// 6th in the EU; 64% of 25-34 vs 35% of 55-69; employed 62% vs unemployed
// 35%); HEA Key Facts & Figures (101,100 students aged 24+ in 2024/25, up
// 4.6%). No euro figures anywhere near our USD fees, so public-programme costs
// are described in words only. springboardcourses.ie is geo-blocked, so
// eligibility detail comes from the gov.ie release only.

module.exports = {
  cluster: 'ag',
  clusterName: 'Ireland',
  hub: { group: 'guide', tag: 'ADULTS', blurb: 'Coding for adults in Ireland, whether you are changing career, returning to work or simply curious, with the public routes explained honestly.' },
  slug: 'best-coding-classes-for-adults-ireland',
  code: 'bai',
  accent: '#1B6A00',
  accentRationale: 'Adults, Ireland: a deep forest green from the solver, separated from the Irish flag greens and from every other Ireland page',
  pageType: 'market',
  market: { name: 'Ireland', iso: 'IE', dial: '+353', lang: 'en-IE', locale: 'en_IE', geoRegion: 'IE', brandTag: 'Ireland', phonePlaceholder: '87 123 4567', minDigits: 7 },
  routeLabel: 'Best coding classes for adults in Ireland',
  title: 'Best Coding Classes for Adults in Ireland | Live Online',
  description: 'Best coding classes for adults in Ireland, live online after work: Python, websites, data and AI taught from the beginning, at any age. First class free.',
  ogDescription: 'Ireland has some of Europe\'s strongest basic digital skills, but very few adults write code. Starting is a smaller step than most people think.',
  twitterDescription: 'Coding for adults in Ireland, live online and after work, from complete beginner. First class free.',
  pageName: 'Best Coding Classes for Adults in Ireland',
  webPageDescription: 'Coding classes for adults in Ireland: what the national digital skills figures actually show, the free and subsidised public routes worth trying first, and live online classes for beginners and career changers.',
  courseDescription: 'Live online coding classes for adults in Ireland, from a first website or first Python program to data, automation and AI at work, taught in small groups or one to one around a working week.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Ireland', href: '/coding-classes-in-ireland' }],
  crumbLabel: 'Coding for adults, Ireland',
  navLinks: [
    { href: '#skills', label: 'The skills picture' },
    { href: '#public', label: 'Free and subsidised routes' },
    { href: '#learners', label: 'Adults who learn' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Ireland &middot; Adults &middot; Beginners welcome',
  h1: 'Best coding classes for adults in Ireland',
  lede: 'Ireland is a country of confident technology users and very few programmers. Eurostat puts 82.82% of people here at basic or above basic digital skills in 2025, well ahead of the European Union average of 60.40%. Yet when the Central Statistics Office asked who had actually written code in a programming language, the answer was 18% of male internet users and 4% of female internet users. That gap is the opportunity. Using software well and making it are different skills, and the second one can be started at any age, from a standing start, in the evenings. This page is for adults in Ireland thinking about it: what the national figures really say, which free and subsidised public routes are worth trying before you pay anyone, and what a live class with a teacher adds when you want to keep going. We teach learners from 6 to 67, and a good share of our students are adults who had never written a line before their first class.',
  secondaryCta: { href: '#public', label: 'The free routes first' },
  wa: 'Hello Modern Age Coders, I am an adult in Ireland and would like a free first coding class.',
  heroNote: 'Teaching adults since 2020 &middot; 10,000+ students &middot; complete beginners every week',
  spec: [
    ['For', 'Adults, any starting point'],
    ['Begins at', 'No experience at all'],
    ['Learns', 'Python, web, data, AI'],
    ['When', 'Evenings and weekends, Irish time'],
    ['Group', 'Five to ten adults'],
    ['Or', 'One to one'],
    ['Pace', 'Set with your teacher'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Adults in Ireland start coding for three reasons: to change career, to stop being stuck when work needs something technical, or out of plain curiosity. All three work, and none of them needs a degree or a maths background. Try the public routes first: eCollege is government funded and free to anyone over 18, and Springboard+ subsidises higher education courses heavily, with free places for people who are unemployed or returning to work. What a paid live class adds is a teacher in the room with you every week, a pace set to you, and no eligibility rules or fixed intake dates. Ours cost USD 100 a month in a small group and USD 150 a month one to one, after a first class that is free.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three ways in for an adult beginner',
    lede: 'Whichever you pick, the first class is a real lesson, not a sales call. Each card opens its syllabus.',
    items: [
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'ADULT / 01', title: 'Python Masterclass', note: 'The usual first choice: a readable language that leads on to data work, automation and AI, taught from the very first line.' },
      { course: 'html-css-course-for-beginners-build-real-websites', code: 'ADULT / 02', title: 'HTML and CSS for Beginners', note: 'For people who want something visible fast: a real website you built yourself, published, in a few weeks of evenings.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', code: 'ADULT / 03', title: 'Data and AI Analytics for Non-Programmers', note: 'For adults whose job is drowning in spreadsheets, and who need results before they need a programming language.' }
    ]
  },

  sections: [
    {
      id: 'skills', tint: 'tint', eyebrow: 'The skills picture',
      h2: 'What Ireland is good at, and where the gaps are',
      lede: 'The national policy and the measurements come from different places, so here they are separately, each with its source.',
      body: [
        { kind: 'table', caption: 'Adult digital skills in Ireland', head: ['Measure', 'Figure', 'Source'], rows: [
          ['National target for adults with at least basic digital skills by 2030', '80%', 'Harnessing Digital, the Digital Ireland Framework'],
          ['Individuals in Ireland with basic or above basic overall digital skills, 2025', '82.82%', 'Eurostat'],
          ['The same measure in 2023', '72.91%', 'Eurostat'],
          ['European Union average, 2025', '60.40%', 'Eurostat'],
          ['Aged 25 to 34 with at least basic digital skills, 2023', '87.99%', 'European Commission Digital Decade report'],
          ['Aged 55 to 64, same measure and year', '46.74%', 'European Commission Digital Decade report']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Basic skills are not coding',
          left: [
            'Of the five areas the European Commission measures, Ireland scores highest on communication and collaboration and lowest on digital content creation, at 78.50%. Making things is the weaker side, which is exactly where coding sits.',
            'The CSO figure makes it plain. Writing code in a programming language was reported by 18% of male internet users and 4% of female internet users, and by 31% of men aged 16 to 29. Most Irish adults have never tried it.'
          ],
          rightH3: 'The gap that matters most',
          right: [
            'The Commission\'s report finds the widest gap is educational, not generational: 88.23% of adults with tertiary education have at least basic digital skills, against 14.43% of those with low or no formal education, a difference of 58.48 percentage points, one of the highest in the EU.',
            'It shows up in who studies, too. The CSO found 35% of internet users in very affluent areas were doing an online course, compared with just over one in five in disadvantaged areas.'
          ] },
        { kind: 'source', html: 'Sources, read 16 September 2026: <a class="ag-inline-link" href="https://www.gov.ie/en/department-of-the-taoiseach/publications/harnessing-digital-the-digital-ireland-framework/" rel="noopener" target="_blank">Harnessing Digital: the Digital Ireland Framework</a>; <a class="ag-inline-link" href="https://ec.europa.eu/eurostat/databrowser/view/isoc_sk_dskl_i21/default/table" rel="noopener" target="_blank">Eurostat isoc_sk_dskl_i21</a>; <a class="ag-inline-link" href="https://enterprise.gov.ie/en/publications/publication-files/digital-decade-2025-ireland-country-report.pdf" rel="noopener" target="_blank">Digital Decade 2025 country report for Ireland</a>; <a class="ag-inline-link" href="https://www.cso.ie/en/releasesandpublications/ep/p-isshdcb/householddigitalconsumerbehaviour2025/onlinelearning/" rel="noopener" target="_blank">CSO, Household Digital Consumer Behaviour 2025</a>. The 80% target and the 82.82% measurement come from different bodies and are shown separately here for that reason.' }
      ]
    },
    {
      id: 'public', tint: 'deep', eyebrow: 'Free and subsidised routes',
      h2: 'Try the public routes first',
      lede: 'We would rather tell you this than have you find out later. Ireland funds adult learning generously, and for some people the right first step costs nothing at all.',
      body: [
        { kind: 'table', caption: 'Public options for adults, as the State describes them', head: ['Route', 'What it is', 'What learners pay'], rows: [
          ['eCollege', 'A government-funded online training service with certified courses, including software development, available any time', 'Currently free to anyone over 18'],
          ['Springboard+ 2026', 'More than 7,200 places on 244 courses from 36 education providers, at NFQ Levels 6 to 9', 'Free if unemployed or returning to the workforce; typically 10% of the fee if employed'],
          ['Springboard+ micro-credentials', 'Short accredited modules within the same programme', 'Half the fee is subsidised, whatever your employment status'],
          ['Timing', 'All courses approved under Springboard+ 2026 start between August and 31 October 2026', 'Applications go through the Springboard+ site']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Springboard+ is not a small scheme. The Department says more than 122,000 people have taken part since 2011, and courses are open to people in work, self-employed, unemployed or returning after time caring for family. Many are part-time, flexible or online.',
            'If you are unemployed and want a qualification, look there first. A live class from us is not a substitute for a funded Level 8 or Level 9 course.'
          ],
          right: [
            'What those routes do not give everyone is a teacher who knows you. Self-paced online courses have famously low completion rates, and a Springboard+ course starts when its intake starts, not when you are ready.',
            'Our classes start any week, put you in a group of five to ten at your level or with a teacher alone, and go at your pace. Many of our adult students use both: a funded course for the certificate, and weekly lessons to keep up with it.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.gov.ie/en/department-of-further-and-higher-education-research-innovation-and-science/press-releases/minister-lawless-launches-springboard-2026-courses/" rel="noopener" target="_blank">gov.ie, Springboard+ 2026 launch</a> and <a class="ag-inline-link" href="https://www.gov.ie/en/department-of-further-and-higher-education-research-innovation-and-science/services/free-online-courses-with-ecollege/" rel="noopener" target="_blank">gov.ie, free online courses with eCollege</a>, read 16 September 2026. We have no connection with either programme, and eligibility rules are theirs, not ours: check them on the official sites.' }
      ]
    },
    {
      id: 'learners', tint: 'tint', eyebrow: 'Adults who learn',
      h2: 'Adults in Ireland are already learning, in large numbers',
      lede: 'If starting something new at thirty-five or fifty-five feels unusual, the national figures say otherwise.',
      body: [
        { kind: 'table', caption: 'Adult learning in Ireland, CSO Adult Education Survey 2022 and HEA', head: ['Measure', 'Figure'], rows: [
          ['Adults aged 25 to 69 taking part in lifelong learning, 2022', '52%, against an EU-27 average of 44%'],
          ['Ireland\'s rank in the EU-27 for lifelong learning', '6th'],
          ['Participation, aged 25 to 34', '64%'],
          ['Participation, aged 55 to 69', '35%'],
          ['Employed adults, compared with unemployed adults', '62% against 35%'],
          ['Students in higher education aged 24 and over, 2024/25', '101,100, up 4.6% on the year']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'The career changer', p: 'Usually in their late twenties to forties, often from finance, teaching, hospitality or healthcare. Python first, then data or web, with a portfolio built deliberately over a year.' },
          { h3: 'The person whose job changed', p: 'An analyst, marketer or manager whose work now involves data or AI tools. They need enough code to check what a tool did, and to automate the boring part.' },
          { h3: 'The curious learner', p: 'Retired or near it, learning because it is interesting. Our oldest students are in their sixties, and they ask the best questions in the group.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'Two things matter more than age for adults. The first is a regular slot that survives a busy week, which is why lessons are the same hour each week rather than a library of videos.'
          ],
          right: [
            'The second is having something real to build. Adults lose patience with exercises, and rightly so; they keep going when the thing being built is theirs.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.cso.ie/en/releasesandpublications/ep/p-aes/adulteducationsurvey2022/keyfindings/" rel="noopener" target="_blank">CSO Adult Education Survey 2022</a> and <a class="ag-inline-link" href="https://hea.ie/statistics/data-for-download-and-visualisations/key-facts-figures-report/" rel="noopener" target="_blank">HEA Key Facts and Figures</a>, read 16 September 2026.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The rungs',
    h2: 'A realistic first year for an adult beginner',
    lede: 'Assuming one or two evening lessons a week and a few hours of practice. People with more time move faster, and nobody is moved on before the rung is solid.',
    table: { caption: 'From zero to useful', head: ['Roughly', 'Rung', 'You can'], rows: [
      ['Weeks 1 to 6', '1. First programs', 'Write, run and fix small programs without help'],
      ['Months 2 to 4', '2. Real data', 'Read files, clean messy data and produce a result you trust'],
      ['Months 4 to 7', '3. Something that runs', 'Build a script or a small site that does a real job for you'],
      ['Months 6 to 10', '4. Tools of the trade', 'Use version control, tests and a tidy project structure'],
      ['Months 9 to 12', '5. Judgement', 'Read other people\'s code, and check what an AI tool produced']
    ] },
    left: { h3: 'Do you need maths?', ps: [
      'For almost everything on this page, no more than the maths you already have. Data work uses averages and percentages; the hard part is the thinking, not the arithmetic.',
      'Where maths does matter, the order of learning is on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'How long until a job?', ps: [
      'We make no promise about employment. What we can say is that the portfolio, not the course, is what employers look at, so we build one from the third month on.',
      'For what the labour market data actually shows, see <a class="ag-inline-link" href="/full-stack-software-development-course-ireland">full stack software development in Ireland</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine live courses for adults',
    lede: 'Grouped by what you want out of it. The free first class settles which one and at what level.',
    bands: [
      { num: 'I', h3: 'From scratch', sub: 'No experience assumed', courses: [
        { code: 'ADULT / START / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python Masterclass', blurb: 'Zero to writing real programs on your own.' },
        { code: 'ADULT / START / 02', slug: 'html-css-course-for-beginners-build-real-websites', title: 'HTML and CSS for Beginners', blurb: 'A published website of your own, quickly.' },
        { code: 'ADULT / START / 03', slug: 'data-and-ai-analytics-for-non-programmers-course', title: 'Data and AI Analytics for Non-Programmers', blurb: 'Answers from data before any language.' }
      ] },
      { num: 'II', h3: 'For work', sub: 'Skills you can use on Monday', courses: [
        { code: 'ADULT / WORK / 01', slug: 'full-stack-web-development-masterclass-college', title: 'Full Stack Web Development', blurb: 'The front end, the back end and the database.' },
        { code: 'ADULT / WORK / 02', slug: 'mysql-database-complete-masterclass-college', title: 'MySQL Masterclass', blurb: 'Querying data properly instead of exporting it.' },
        { code: 'ADULT / WORK / 03', slug: 'git-github-advanced-version-control-masterclass-for-professionals', title: 'Git and GitHub for Professionals', blurb: 'The habits every team expects you to have.' }
      ] },
      { num: 'III', h3: 'AI, understood', sub: 'Past the demo', courses: [
        { code: 'ADULT / AI / 01', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI: LLMs, RAG and Agents', blurb: 'What the tools do, and where they fail.' },
        { code: 'ADULT / AI / 02', slug: 'python-ai-automation-masterclass-college', title: 'Python and AI Automation', blurb: 'Automating the repetitive part of your week.' },
        { code: 'ADULT / AI / 03', slug: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', title: 'Codex and Claude Code', blurb: 'Directing coding agents and reviewing their work.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How the classes run',
    h2: 'Lessons that survive a working week',
    lede: 'Classes are live with a teacher in India, at one fixed hour a week set in Irish time. Because India keeps a single clock and Ireland changes twice a year, our teachers sit four and a half hours ahead of you in summer and five and a half in winter, which makes Irish evenings comfortable working hours at their end.',
    slots: [
      { time: 'Early evening', l: 'The most popular slot with working adults.' },
      { time: 'Late evening', l: 'For parents, after the house is quiet.' },
      { time: 'Weekend', l: 'Longer sessions for project work.' }
    ],
    cells: [
      { h3: 'A free first class', p: 'You write something real with a teacher and get an honest view of where to start. No sales pitch.' },
      { h3: 'Adults in the group', p: 'Groups of five to ten at one level; adult beginners are placed with other adult beginners.' },
      { h3: 'One to one', p: 'For an unpredictable shift pattern, or when you would rather not learn in front of others.' },
      { h3: 'Missed weeks happen', p: 'Work travel and family come first. Slots can move, and your teacher keeps track of where you were.' },
      { h3: 'Your own project', p: 'From early on, the work is something you actually want: a tool for your job, a site, an analysis.' },
      { h3: 'No jargon for its own sake', p: 'Teachers explain in plain words first and name the technical term afterwards.' }
    ]
  },

  projectsH2: 'Built by our students, adults among them',
  projectsLede: 'Four projects our students published. There are plenty more, from every age group, on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Reviews as posted on Google by our students and parents, none of them paid for or edited.',

  fees: {
    h2: 'Fees for adult learners',
    lede: 'One monthly price in US dollars, the same everywhere outside India and the same for every course here. No enrolment fee, no yearly contract, and you can stop at the end of a month if work gets in the way.',
    free: ['A real lesson with a teacher', 'An honest starting point', 'No card details taken'],
    group: ['Five to ten adults at one level', 'The same teacher every week', 'Work reviewed, not just set', 'A certificate on completion'],
    one: ['A teacher to yourself', 'Slots that fit shift work', 'The fastest route for a focused goal']
  },

  faq: {
    eyebrow: 'Questions from adults',
    h2: 'What adults in Ireland ask before starting',
    items: [
      { q: 'Am I too old to start coding?', a: 'No. We teach learners up to 67, and adult beginners are a normal part of every week here. Time each week matters far more than age.' },
      { q: 'Do I need a maths or technology background?', a: 'No. Ordinary school maths is enough for the courses on this page. Most adult beginners come from work with no technical element at all.' },
      { q: 'Should I try the free public courses first?', a: 'If they suit you, yes. eCollege is government funded and free to anyone over 18, and Springboard+ is free for people who are unemployed or returning to work. Many of our students do both.' },
      { q: 'Which language should an adult learn first?', a: 'Python for most people, because it is readable and leads on to data and AI work. If you want visible results fast, start with HTML and CSS instead.' },
      { q: 'Will this get me a job in tech?', a: 'We make no promises about jobs. What we can do is build the portfolio and the fundamentals that employers ask about, and be honest with you about progress.' },
      { q: 'How many hours a week does it take?', a: 'One or two live lessons plus a few hours of practice is the usual pattern. Progress comes from the practice between lessons.' },
      { q: 'What if work travel breaks my routine?', a: 'Slots can be moved, and lessons can pause. Your teacher keeps a record of where you stopped, so you are not starting over.' },
      { q: 'What does it cost?', a: 'Nothing for the first class. After that it is USD 100 a month in a group or USD 150 a month for one-to-one lessons, in US dollars, with no enrolment fee.' },
      { q: 'What time are the classes?', a: 'Evenings and weekends, at a weekly hour set with your teacher. They are four and a half hours ahead of Irish time in summer and five and a half in winter.' },
      { q: 'What happens after I send the form?', a: 'We ring you at a suitable Irish hour and arrange the free first class. You are charged nothing unless you decide to keep going.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for adult learners',
    lede: 'Where this leads, and what sits beside it.',
    items: [
      { href: '/full-stack-software-development-course-ireland', label: 'Full stack software development in Ireland', p: 'What the job market data shows.' },
      { href: '/coding-for-college-students-ireland', label: 'Coding for college students in Ireland', p: 'For those studying as well.' },
      { href: '/ai-agents-course-for-professionals-ireland', label: 'AI agents course for professionals', p: 'Agents at work.' },
      { href: '/learn-to-think-not-just-use-ai-tools-ireland', label: 'Learn to think, not just use AI tools', p: 'How we teach.' },
      { href: '/best-online-coding-classes-ireland', label: 'Best online coding classes in Ireland', p: 'Choosing between classes.' },
      { href: '/coding-classes-in-ireland', label: 'Coding classes in Ireland', p: 'The national page.' }
    ]
  },

  start: {
    h2: 'Write your first program in a free class',
    lede: 'Leave a number and we will ring at a time that suits you in Ireland, evenings included. In the free class you write something real with a teacher and get a straight answer about where to start and how long it takes.',
    readFirst: 'Rather read first? See <a class="ag-inline-link" href="/how-we-teach">how our teaching works</a>, the <a class="ag-inline-link" href="/courses">full course list</a>, and <a class="ag-inline-link" href="/student-labs">projects our students published</a>.',
    note: 'WhatsApp is often easiest for adults with busy days, and it is free from an Irish number. Ours is an Indian number, because our teachers work from India; there is no Irish office.',
    formNote: 'No card, no obligation, one phone call.'
  },

  footer: {
    cols: [
      { h4: 'For adults', links: [
        { href: '/full-stack-software-development-course-ireland', label: 'Full stack development' },
        { href: '/ai-agents-course-for-professionals-ireland', label: 'AI agents for professionals' },
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] },
      { h4: 'Ireland', links: [
        { href: '/coding-classes-in-ireland', label: 'Coding classes in Ireland' },
        { href: '/best-online-coding-classes-ireland', label: 'Choosing a class' },
        { href: '/coding-for-college-students-ireland', label: 'Coding for college students' },
        { href: '/student-labs', label: 'Student labs' }
      ] }
    ],
    bottomRight: 'Coding for adults in Ireland, from the beginning'
  },

  personalityCss: `
.ag-root.ag-bai .ag-hero-grid { gap: clamp(1.08rem, 3.15vw, 2.6rem); }
.ag-root.ag-bai .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-bai .ag-capsule { border-left-width: 3px; }
.ag-root.ag-bai .ag-section-head h2 { max-width: 38ch; }
.ag-root.ag-bai .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-bai .ag-band-head h3 { letter-spacing: -0.003em; }
.ag-root.ag-bai .ag-spec dt { letter-spacing: 0.135em; }
.ag-root.ag-bai .ag-slots { gap: 1.22rem; }
`,

  mustMention: ['82.82%', '60.40%', '80%', '87.99%', '46.74%', '78.50%', '14.43%', '58.48 percentage points', '7,200', '244 courses', '122,000', 'over 18', '52%', '101,100']
};
