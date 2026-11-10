// SHIP: market (explainer) | Remote tech job skills from Peru: what employer frameworks list, English by job, the clock | zoneinfo: shared office hours with New York, Los Angeles and Madrid shift with daylight saving
'use strict';
// Remote tech job skills for Peru (ag- English explainer, Peru cluster row PE082, P3, hubGroup guides; alloc rtj, #5E4205).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08: timing flexible, any time.
// Rules for this page: no job, salary or placement promises; no nearshoring statistics (MARKET.md 1.6 found no primary source
// measuring Peruvians working remotely for foreign employers, so the page says so); O*NET wage figures deliberately not used.
// Spine: what employers abroad list, read from a public job-skill framework (O*NET 15-1252.00); EF EPI 2025 English by job function
// in Peru as the primary-source table; the time-zone fact that makes Peru unusual (UTC-5 all year) and a Python lesson that measures
// shared office hours across daylight saving; the tools of distributed teams; equipment and connection at home (INEI); a skills
// plan; what we teach and do not promise.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/remote-tech-job-skills-peru/):
//  - O*NET OnLine 15-1252.00 Software Developers (onet_15-1252.raw/.txt, fetched once, 9 November 2026; US Department of Labor):
//    tasks "Confer with systems analysts, engineers, programmers and others to design systems ..."; "Prepare reports or
//    correspondence concerning project specifications, activities, or status."; work activities "Communicating with Supervisors,
//    Peers, or Subordinates", "Documenting/Recording Information"; essential skills "Reading Comprehension", "Active Listening",
//    "Writing", "Speaking"; knowledge "English Language"; work context "Work With or Contribute to a Work Group or Team" 71%
//    "Extremely important."; software "Slack", "Atlassian JIRA", "Git", "Zoom", "Google Meet", "Microsoft Teams";
//    "Hot Technologies are requirements most frequently included across all employer job postings."
//  - EF EPI 2025 Peru page (ef_peru.raw) "jobFunctionScore": strategy-project-management 589 high, customer-service 585 high,
//    marketing 565 high, operations 554 high, sales 547 moderate, human-resources 542, admin-clerical 540, legal 532, teacher 532,
//    it 522 moderate, unspecified-/-unemployed 506, accounting-finance 484 low, student 482 low; efEpiScore 519; speakingScore 480;
//    cityScore lima 555 high; band floors high 550, moderate 500, low 450.
//  - INEI TIC II Trimestre 2026 (inei_tic_iit2026.txt): "95,2%" (25 to 40 internet use); "el 36,4% de los hogares del país disponía
//    de al menos una computadora"; Lima Metropolitana households with internet "84,7%".
//  - Time: tzdata via Python zoneinfo: America/Lima, America/New_York, America/Los_Angeles, Europe/Madrid.
// Our own example (rtj.py in the src-pages folder, python3 -I, Python 3.14.8), exact output:
//    2026-01-14 Lima 09:00 = 09:00, 06:00, 15:00 / New_York 9.0, Los_Angeles 6.0, Madrid 3.0 shared office hours;
//    2026-07-15 Lima 09:00 = 10:00, 07:00, 16:00 / New_York 8.0, Los_Angeles 7.0, Madrid 2.0.
// Lesson family: timezone-aware datetimes (zoneinfo), interval overlap as min(end) - max(start) clamped at 0, and daylight saving
// changing the answer on one side only.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const CODE = [
  'from datetime import datetime, date, time',
  'from zoneinfo import ZoneInfo',
  '',
  "LIMA = ZoneInfo('America/Lima')",
  "OTHERS = ['America/New_York', 'America/Los_Angeles', 'Europe/Madrid']",
  '',
  'def overlap_hours(day, other, start=9, end=18):',
  '    tz = ZoneInfo(other)',
  '    a0 = datetime.combine(day, time(start), LIMA)',
  '    a1 = datetime.combine(day, time(end), LIMA)',
  '    b0 = datetime.combine(day, time(start), tz)',
  '    b1 = datetime.combine(day, time(end), tz)',
  '    hours = (min(a1, b1) - max(a0, b0)).total_seconds() / 3600',
  '    return max(hours, 0)',
  '',
  'for day in [date(2026, 1, 14), date(2026, 7, 15)]:',
  '    nine = datetime.combine(day, time(9), LIMA)',
  "    print(day, 'Lima 09:00 =', end=' ')",
  "    print(', '.join(nine.astimezone(ZoneInfo(o)).strftime('%H:%M') for o in OTHERS))",
  '    for o in OTHERS:',
  "        print('   ', o, overlap_hours(day, o), 'shared office hours')"
].join('\n');

const OUT = [
  '2026-01-14 Lima 09:00 = 09:00, 06:00, 15:00',
  '    America/New_York 9.0 shared office hours',
  '    America/Los_Angeles 6.0 shared office hours',
  '    Europe/Madrid 3.0 shared office hours',
  '2026-07-15 Lima 09:00 = 10:00, 07:00, 16:00',
  '    America/New_York 8.0 shared office hours',
  '    America/Los_Angeles 7.0 shared office hours',
  '    Europe/Madrid 2.0 shared office hours'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'guides', label: 'Remote tech job skills' },
  slug: 'remote-tech-job-skills-peru',
  code: 'rtj',
  accent: '#5E4205',
  accentRationale: 'Remote tech job skills for Peru: a dark coffee brown #5E4205, the colour of a home-office desk at seven in the morning, steady and unshowy; strong contrast on the paper #FBF8F2, well above 4.5',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Remote tech job skills for people in Peru',
  title: 'Remote Tech Job Skills From Peru: What Employers List',
  description: 'Which skills do remote tech jobs abroad ask for, and how can someone in Peru build them? Employer frameworks, English by job (EF 2025), time zones, live classes.',
  ogDescription: 'What a public employer skill framework lists for software developers, how English scores vary by job in Peru, why the Lima clock helps, and a Python lesson on time-zone overlap.',
  twitterDescription: 'Remote tech skills from Peru, from primary sources, and live coding classes in English. No job promises.',
  pageName: 'Remote Tech Job Skills From Peru',
  webPageDescription: 'An explainer for developers and career changers in Peru on the skills remote technology employers abroad list, built from the US Department of Labor\'s O*NET profile for software developers, EF EPI 2025 English scores by job function in Peru, INEI household technology data for 2026 and the tz database, with an original Python lesson on working-hour overlap across time zones.',
  courseDescription: 'Live online courses for adults and university students in Peru, taught in English by mentors based in India: Git and team workflows, Java, Python, web, databases and AI coding agents, in a group of fifteen to twenty or one to one, at hours the learner chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Remote tech job skills',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#framework', label: 'What employers list' },
    { href: '#english', label: 'English by job' },
    { href: '#clock', label: 'The Lima clock' },
    { href: '#tools', label: 'Team tools' },
    { href: '#plan', label: 'A skills plan' }
  ],
  eyebrow: 'Peru &middot; Developers and career changers &middot; Live online, in English',
  h1: 'Remote tech job skills for people in Peru',
  lede: 'Plenty of advice about remote work is guesswork. This page sticks to what can be checked: what a public employer skills framework lists for software developers, how Peruvians in different jobs score in English, what Peru\'s clock means for working with teams in other countries, and what a home set-up in Peru looks like by the numbers. Then it turns those facts into a skills plan, and is plain about what no course, including ours, can promise.',
  secondaryCta: { href: '#clock', label: 'See the time-zone lesson' },
  wa: 'Hello Modern Age Coders, I am in Peru and want to build skills for remote tech work, taught live in English. Could I book a free class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students worldwide &middot; technical English used in every class',
  spec: [
    ['Who', 'Developers, students, career changers'],
    ['Focus', 'Code, Git, teamwork, English'],
    ['Format', 'Live video classes'],
    ['Class size', 'Fifteen to twenty, or one to one'],
    ['Hours', 'Any hour on the Lima clock'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'Straight answer',
  capsule: 'Remote technology employers abroad list the same core skills as any software team: programming, testing, Git, databases, clear writing, and the confidence to discuss work in English on calls. Peru\'s fixed UTC minus 5 clock overlaps closely with North American hours. Modern Age Coders teaches these skills live online in English to adults and students in Peru, either with a level-matched group of up to twenty or privately, whenever suits you on the Lima clock. Nobody can honestly guarantee you a remote job or a salary, and we do not; our part is the skills.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for people aiming at remote teams',
    lede: 'The habits distributed teams rely on, a language large employers use, and the new tools of AI-assisted development.',
    items: [
      { course: 'git-github-advanced-version-control-masterclass-for-professionals', code: 'RTJ / 01', title: 'Git and GitHub for professionals', note: 'Branches, pull requests, reviews and written discussion: the way remote teams work together without sharing a room or a clock.' },
      { course: 'complete-java-programming-masterclass-college', code: 'RTJ / 02', title: 'Java, to Spring Boot', note: 'Core Java, object-oriented design and back-end services, the stack many larger companies hire for, taught live with code review.' },
      { course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', code: 'RTJ / 03', title: 'AI coding agents, for adults', note: 'For learners over 18: working with Codex and Claude Code while keeping tests, review and judgement in your own hands.' }
    ]
  },

  sections: [
    {
      id: 'framework',
      eyebrow: 'What employers list',
      h2: 'What skills do remote software jobs ask for?',
      lede: 'The same skills as on-site jobs, with more weight on writing, listening and working without someone at the next desk. The clearest public source is O*NET, the US Department of Labor\'s occupational database; its profile of software developers draws on surveys of people in the job and on employers\' postings.',
      body: [
        { kind: 'two',
          leftH3: 'The technical core',
          left: [
            'O*NET lists programming among the transferable skills for software developers, with systems analysis and complex problem solving. Its detailed activities include developing testing routines and modifying software to improve performance. Its tool lists include Git for version control, Atlassian JIRA for tracking work and Slack for team messages.',
            'It flags certain tools as "Hot Technologies", which it defines as "requirements most frequently included across all employer job postings". That is a useful, evidence-based list to check a course syllabus against.'
          ],
          rightH3: 'The communication core',
          right: [
            'Among the essential skills O*NET lists are reading comprehension, active listening, writing and speaking. Among knowledge areas it lists "English Language". Among work activities: communicating with supervisors, peers or subordinates, and documenting information.',
            'Its work-context survey found teamwork rated extremely important by 71% of respondents. Its listed video tools include Zoom, Google Meet and Microsoft Teams. For a remote developer, those calls are where the job is visible.'
          ] },
        { kind: 'p', mt: true, html: 'O*NET describes the United States. Other countries\' employers differ in detail, but most remote roles advertised internationally are written in English and assume the same kinds of tools. Our reading of the framework is that for a remote developer, being understood is part of the technical skill, not an extra.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Write code others can read.</strong> Clear names, small functions, tests that explain intent.',
          '<strong>Work through Git.</strong> Every change as a pull request with a short English description.',
          '<strong>Write status updates.</strong> What you did, what is blocked, what is next, in three sentences.',
          '<strong>Speak on a call.</strong> Explain a technical decision aloud in under two minutes.',
          '<strong>Track your work.</strong> Tickets, estimates and honest updates when an estimate slips.',
          '<strong>Keep learning.</strong> O*NET lists updating and using relevant knowledge as a core work activity.'
        ] }
      ]
    },
    {
      id: 'english',
      tint: 'tint',
      eyebrow: 'English by job',
      h2: 'How good is English in Peru for tech work?',
      lede: 'Moderate overall and uneven across jobs. EF\'s English Proficiency Index 2025 gives Peru a score of 519, Lima 555, and breaks Peruvian test-takers down by job function. People working in IT score 522.',
      body: [
        { kind: 'table', numCols: [1], caption: 'EF EPI 2025, Peru: English score by job function', head: ['Job function', 'Score', 'EF band'], rows: [
          ['Strategy and project management', '589', 'High'],
          ['Customer service', '585', 'High'],
          ['Marketing', '565', 'High'],
          ['Operations', '554', 'High'],
          ['Sales', '547', 'Moderate'],
          ['Human resources', '542', 'Moderate'],
          ['Admin and clerical', '540', 'Moderate'],
          ['Legal', '532', 'Moderate'],
          ['Teacher', '532', 'Moderate'],
          ['IT', '522', 'Moderate'],
          ['Unspecified or unemployed', '506', 'Moderate'],
          ['Accounting and finance', '484', 'Low'],
          ['Student', '482', 'Low']
        ] },
        { kind: 'source', html: 'Source: EF English Proficiency Index 2025, Peru country page (job function data), read on 9 November 2026. EF bands: high from 550, moderate from 500, low from 450. EF tests adults who choose to take its online test, so these are indications, not a census.' },
        { kind: 'two', mt: true,
          leftH3: 'What stands out',
          left: [
            'IT sits in the middle of the Peruvian table, below project management, customer service and marketing. Technical people in Peru read plenty of English documentation; the numbers suggest the gap is in the rest of the language.',
            'EF\'s skill breakdown for Peru points the same way: reading scores 540, speaking 480. Speaking is exactly what a remote call demands.'
          ],
          rightH3: 'What to do about it',
          right: [
            'Our reading: practise English inside technical work, not beside it. Explaining your own code aloud, writing pull request descriptions, and arguing a design choice with a mentor all build the language a remote team uses.',
            'That is why every one of our classes is taught in English. Our mentors in India pace their English to the learner and get used to each accent, which keeps the practice steady rather than stressful.'
          ] }
      ]
    },
    {
      id: 'clock',
      eyebrow: 'The Lima clock',
      h2: 'Which time zones overlap with Peru for remote work?',
      lede: 'North America overlaps most. Peru stays on UTC minus 5 all year, with no daylight saving, so in the northern winter Lima shares New York\'s clock exactly and in the northern summer it is one hour behind. This short Python lesson measures the overlap instead of guessing it.',
      body: [
        { kind: 'two',
          leftH3: 'What the program does',
          left: [
            'For two dates in 2026, one in January and one in July, it asks: if everyone works 09:00 to 18:00 on their own clock, how many hours do Lima and each other city share? It uses Python\'s <code>zoneinfo</code>, which reads the tz database, so daylight saving is handled by the data, not by hand.',
            'The overlap of two intervals is the earlier end minus the later start. If that comes out negative, there is no overlap, so the function returns <code>max(hours, 0)</code>.'
          ],
          rightH3: 'What the output shows',
          right: [
            '<strong>New York:</strong> 9 shared hours in January, 8 in July. In July, New York moves to summer time and Lima does not.',
            '<strong>Los Angeles:</strong> 6 in January, 7 in July. Here summer time helps: the US west coast moves an hour closer to Lima.',
            '<strong>Madrid:</strong> 3 in January, 2 in July. Working with Spain is possible, but the shared window is short, and every meeting has to be planned.'
          ] },
        { kind: 'code', label: 'Shared office hours from Lima', lang: 'Python', code: CODE },
        { kind: 'code', label: 'What it prints', lang: 'Output', code: OUT, note: 'Exact output from our run with Python 3.14 and the tz data on that machine. The 09:00 to 18:00 working day is our assumption; teams vary.' },
        { kind: 'p', mt: true, html: 'The lesson in the lesson: never hard-code an offset like "minus 5" for a city that observes daylight saving. A remote developer who schedules a meeting with a fixed offset will be an hour wrong for half the year. Store times with their zone, convert at the edge, and let the tz database do the rest.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Predict.</strong> Before running it, guess the overlap with Madrid in July, and say why it shrinks.',
          '<strong>Add a city.</strong> Put <code>America/Sao_Paulo</code> in the list and explain the result.',
          '<strong>Change the day.</strong> Use a team that works 08:00 to 17:00 and compare.',
          '<strong>Find the edge.</strong> Pick a date in March when New York has changed clocks and Europe has not yet.'
        ] }
      ]
    },
    {
      id: 'tools',
      tint: 'tint',
      eyebrow: 'Team tools and home set-up',
      h2: 'What does a remote developer in Peru need at home?',
      lede: 'A reliable computer, a stable connection, a quiet place for calls, and fluency with the handful of tools distributed teams share. The first two are less common in Peru than people assume.',
      body: [
        { kind: 'two',
          leftH3: 'The numbers at home',
          left: [
            'INEI reports that in the second quarter of 2026, 95.2% of Peruvians aged 25 to 40 used the internet, but only 36.4% of households nationwide had at least one computer. In Lima Metropolitana, 84.7% of households had an internet service.',
            'Our reading: being online is nearly universal for working-age Peruvians; having a proper computer and a dependable connection for an eight-hour day is not. That is worth solving before applying for remote roles.'
          ],
          rightH3: 'The tools to know',
          right: [
            'Version control with Git and a hosting service; a ticket tracker such as JIRA; team chat such as Slack; and video calls in Zoom, Google Meet or Microsoft Teams. All appear in O*NET\'s tool lists for software developers.',
            'None is hard to learn alone. What takes practice is using them well in English: a clear ticket, a short status message, a review comment that is kind and precise.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'What remote teams commonly expect, and how we practise it in class (our mapping)', head: ['Expectation', 'Where it shows up', 'How we practise it'], rows: [
          ['Readable code', 'Code review', 'Mentor review of every project'],
          ['Tests', 'Pull requests', 'Tests written before features in later levels'],
          ['Git fluency', 'Every change', 'All projects kept in repositories'],
          ['Written English', 'Tickets and messages', 'Commit messages and short write-ups'],
          ['Spoken English', 'Daily calls', 'Explaining code aloud in every class'],
          ['Time awareness', 'Meetings across zones', 'The overlap lesson above, and booking in your own time zone']
        ] },
        { kind: 'source', html: 'The first two columns summarise O*NET\'s software developer profile (tasks, work activities and tools), read on 9 November 2026. The third column is our own teaching practice.' }
      ]
    },
    {
      id: 'plan',
      eyebrow: 'A skills plan',
      h2: 'How can someone in Peru prepare for remote tech work?',
      lede: 'In steps you can check, roughly in this order. This is our plan, built from the framework above; it is not a promise of any job.',
      body: [
        { kind: 'ol', items: [
          '<strong>Pick one language and get fluent.</strong> Python or Java for back end, JavaScript for web. Fluency means writing without notes.',
          '<strong>Learn Git properly.</strong> Branches, pull requests, resolving conflicts, writing good messages.',
          '<strong>Add data.</strong> SQL and one database, because almost every application stores something.',
          '<strong>Test your own work.</strong> Unit tests first, then a habit of asking "what input breaks this?"',
          '<strong>Build two finished projects.</strong> Deployed, documented in English, with a README a stranger can follow.',
          '<strong>Practise the call.</strong> Explain each project aloud in five minutes, then answer questions on it.',
          '<strong>Prepare the home office.</strong> A computer, a reliable connection, a headset and a quiet hour.',
          '<strong>Check each employer\'s terms.</strong> Contracts, taxes and legal status for remote work from Peru are matters for a qualified adviser in Peru, not for us.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What we found no data for',
          left: [
            'We looked for an official figure on how many Peruvians work remotely for employers abroad, and found none from a primary source. So this page gives no such number, and we would be wary of anyone who quotes one without a source.',
            'The same goes for pay. Salaries for remote roles vary by employer, country and contract, and we do not publish figures or promises.'
          ],
          rightH3: 'What we do teach',
          right: [
            'Everything in the plan above, taught live in English, whether you join a group at your level or study privately. Mentors read your code, make you explain it, and keep your projects in Git from the start.',
            'Our certificate of completion is our own. It is not a Peruvian qualification and does not stand in for experience; finished, explained projects do more.'
          ] },
        { kind: 'p', mt: true, html: 'Worth reading next: <a class="ag-inline-link" href="/java-course-peru">our Java course page for Peru</a>, the guide for <a class="ag-inline-link" href="/ai-and-coding-for-professionals-peru">working professionals</a>, the one for <a class="ag-inline-link" href="/coding-courses-for-university-students-peru">university students</a>, and, written in Spanish, <a class="ag-inline-link" href="/curso-de-desarrollo-web-en-ingles-peru">desarrollo web en inglés</a>. The full list is on the <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">Peru hub</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Readiness',
    h2: 'How do you know you are ready to apply for remote roles?',
    lede: 'Our own readiness levels, built from the employer framework on this page. Reaching level 6 does not guarantee a job; it means you can show what remote teams ask for.',
    table: { numCols: [], caption: 'Our remote-readiness levels', head: ['Level', 'In code', 'In writing', 'On a call'], rows: [
      ['1. Fluent', 'Solve small problems without notes', 'Comment your code in English', 'Say what a function does'],
      ['2. Versioned', 'Everything in Git, with branches', 'Clear commit messages', 'Walk through a diff'],
      ['3. Tested', 'Tests that catch your own bugs', 'A README that works', 'Explain what a test proves'],
      ['4. Collaborative', 'Review and be reviewed', 'Kind, precise review comments', 'Disagree politely and clearly'],
      ['5. Finished', 'Two deployed projects', 'A short project write-up', 'Present one in five minutes'],
      ['6. Remote-ready', 'Pair on a problem live', 'A daily status in three lines', 'Hold a 30-minute technical interview']
    ] },
    left: { h3: 'If you already code', ps: [
      'Most working developers in Peru reach level 1 quickly; levels 4 and 6 are where practice in English matters most.',
      'Record yourself presenting a project. Watch it once. Then do it again.'
    ] },
    right: { h3: 'If you are starting', ps: [
      'Levels 1 to 3 come first, whatever the job. Do not skip testing to get to projects faster.',
      'Keep everything in Git from day one, even exercises. It becomes your record.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for remote-ready skills',
    lede: 'Taught live, in English, by one mentor, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Web', sub: 'Front end and full stack', courses: [
        { code: 'RTJ / WEB / 01', slug: 'react-js-complete-masterclass-college', title: 'React', blurb: 'Components, state and real interfaces.' },
        { code: 'RTJ / WEB / 02', slug: 'complete-typescript-programming-masterclass-college', title: 'TypeScript', blurb: 'Types that make large codebases safer.' },
        { code: 'RTJ / WEB / 03', slug: 'mysql-database-complete-masterclass-college', title: 'MySQL', blurb: 'Queries, joins and schema design.' }
      ] },
      { num: 'II', h3: 'Data and AI', sub: 'Ages 18 and up', courses: [
        { code: 'RTJ / DATA / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python', blurb: 'From zero to files, APIs and automation.' },
        { code: 'RTJ / DATA / 02', slug: 'data-analysis-mastery-course-college', title: 'Data analysis', blurb: 'pandas, charts and careful conclusions.' },
        { code: 'RTJ / DATA / 03', slug: 'artificial-intelligence-complete-masterclass-college', title: 'Artificial intelligence', blurb: 'Machine learning foundations, built by hand.' }
      ] },
      { num: 'III', h3: 'Mobile and interviews', sub: 'Specialist routes', courses: [
        { code: 'RTJ / MORE / 01', slug: 'complete-kotlin-programming-masterclass-professional', title: 'Kotlin', blurb: 'Android and server-side Kotlin.' },
        { code: 'RTJ / MORE / 02', slug: 'complete-swift-programming-masterclass-college', title: 'Swift', blurb: 'iOS apps in Apple\'s language.' },
        { code: 'RTJ / MORE / 03', slug: 'competitive-programming-masterclass-college', title: 'Competitive programming', blurb: 'Timed problems, as in coding interviews.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it runs',
    h2: 'What our classes look like from a desk in Peru',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Morning', l: 'An early class on the Lima clock, before your own workday.' },
      { time: 'Night', l: 'A late slot for people already working full days.' },
      { time: '1-on-1', l: 'One mentor, hours that move with your job.' }
    ],
    cells: [
      { h3: 'Git from day one', p: 'Every project lives in a repository.' },
      { h3: 'Code read by a person', p: 'Your mentor reviews and questions it.' },
      { h3: 'English aloud', p: 'You explain your work in every class.' },
      { h3: 'Written English', p: 'Commit messages, READMEs and notes.' },
      { h3: 'Same mentor', p: 'One person for the whole course.' },
      { h3: 'Group or private', p: 'Join a level group, or book a mentor alone.' }
    ]
  },

  projectsH2: 'Projects built by our learners',
  projectsLede: 'Working tools and applications made by people who stayed the course. The <a class="ag-inline-link" href="/student-labs">student labs</a> collect many more.',
  reviewsLede: 'Google reviews left by our learners and their families, reproduced as written.',

  fees: {
    h2: 'Fees for learners in Peru',
    lede: 'Our courses are billed in US dollars each month to a card. What appears in soles depends on the rate your bank applies, so the figure can differ slightly between months.',
    free: ['A free live class', 'Your level assessed honestly', 'No card needed'],
    group: ['Fifteen to twenty learners per level', 'One mentor for the course', 'Two live classes a week', 'Monthly, stop at any time'],
    one: ['One learner, one mentor', 'A plan aimed at your goal', 'Hours around your work']
  },

  faq: {
    eyebrow: 'Learners ask',
    h2: 'Remote tech work from Peru: common questions',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Our teaching language is English, in every live online session. The mentors, who work from India, keep their speech clear and adjust to how fast you follow and to your accent. Using English for technical work every week is a large part of what the classes give you.' },
      { q: 'Will your course get me a remote job?', a: 'No course can promise that, and we do not. What we can do is train what the frameworks on this page describe, from code and tests to Git and spoken English, and see that your portfolio holds finished work. Whether to hire you is always the employer\'s call.' },
      { q: 'How many Peruvians work remotely for foreign companies?', a: 'We found no official figure from a primary source, so we do not quote one. Treat any number without a named source with care.' },
      { q: 'Which time zones are easiest to work with from Peru?', a: 'North American ones. Lima never changes its clock (UTC minus 5 year-round), so it shares New York\'s clock in the northern winter and is one hour behind in summer. Our Python lesson on this page measures the overlap for New York, Los Angeles and Madrid.' },
      { q: 'Is my English good enough?', a: 'If you can read documentation, you have a base. EF\'s 2025 index scores Peruvians in IT at 522, in its moderate band, with speaking the weakest skill nationally. Live classes in English work on exactly that.' },
      { q: 'Which language should I learn for remote work?', a: 'It depends on the role. JavaScript or TypeScript for web, Python for data and automation, Java or Kotlin for larger back-end systems. Fluency in one, plus Git and SQL, matters more than a little of everything.' },
      { q: 'What hours can I study from Lima?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India runs a constant 10 hours 30 minutes ahead of Lima, which makes a 07:00 Lima start 17:30 for the mentor.' },
      { q: 'Can you advise on contracts or taxes for remote work?', a: 'No. Contracts, taxes and legal status for working remotely from Peru are questions for a qualified adviser in Peru. We teach technical and communication skills only.' },
      { q: 'Do you give certificates?', a: 'Yes, our own certificate of completion. It is not a Peruvian qualification. For remote employers, finished projects you can explain usually say more.' },
      { q: 'How do I pay from Peru?', a: 'By card, monthly, in US dollars; your bank converts the amount into soles. The first class is free and needs no card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Further reading',
    h2: 'More for people building a tech career from Peru',
    lede: 'Pages for the next step.',
    items: [
      { href: '/how-we-teach', label: 'How we teach', p: 'Inside one live class.' },
      { href: '/we-teach-you-how-to-think', label: 'Reasoning first', p: 'Thinking before tools and shortcuts.' },
      { href: '/student-labs', label: 'Student labs', p: 'Projects by our learners.' },
      { href: '/ai-tools-age-guide', label: 'AI tools guide', p: 'Each tool\'s terms and age rules.' },
      { href: '/courses', label: 'Courses', p: 'All syllabuses, in full.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Peru hub', p: 'All our Peru pages.' }
    ]
  },

  start: {
    h2: 'Start with a free live class',
    lede: 'In one free class a mentor works through a real problem with you in English, sees where your code and your spoken English stand, and suggests where to begin: a language, Git and teamwork, or interview practice. You leave with a plan, whether or not you join.',
    readFirst: 'Reading first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> shows a class from start to finish; the <a class="ag-inline-link" href="/courses">course list</a> has every syllabus.',
    note: 'All classes are live video from India, in English. WhatsApp us in English for a quick reply.',
    formNote: 'Free, no card, no obligation.'
  },

  footer: {
    cols: [
      { h4: 'For learners', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/we-teach-you-how-to-think', label: 'Thinking first' },
        { href: '/courses', label: 'All courses' }
      ] },
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Peru hub' },
        { href: '/ai-and-coding-for-professionals-peru', label: 'Professionals' },
        { href: '/java-course-peru', label: 'Java course' },
        { href: '/curso-de-desarrollo-web-en-ingles-peru', label: 'En español: web' }
      ] }
    ],
    bottomRight: 'Never hard-code a time zone offset'
  },

  personalityCss: `
.ag-root.ag-rtj .ag-hero h1 { max-width: 18ch; letter-spacing: -0.01em; }
.ag-root.ag-rtj .ag-capsule { border-left-width: 4px; }
.ag-root.ag-rtj .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-rtj .ag-steps li { line-height: 1.62; }
.ag-root.ag-rtj .ag-code pre { font-size: 0.88em; }
`,

  dossier: {
    curriculumAuthority: 'O*NET OnLine 15-1252.00 Software Developers (US Department of Labor); EF EPI 2025 Peru page (job functions, skills, Lima); INEI TIC en los Hogares II Trimestre 2026; tz database via Python zoneinfo. Read 9 November 2026.',
    localProject: 'An original zoneinfo lesson in Python: shared 09:00 to 18:00 hours between Lima and New York (9 in January, 8 in July), Los Angeles (6, then 7) and Madrid (3, then 2) in 2026, because Peru keeps UTC-5 all year while the others change for summer. Lesson family: timezone-aware datetimes and interval overlap clamped at zero.',
    requiredMentions: ['America/Los_Angeles 7.0 shared office hours', 'Europe/Madrid 2.0 shared office hours', 'Never hard-code a time zone offset', 'Strategy and project management', 'Unspecified or unemployed', 'requirements most frequently included across all employer job postings', 'What we found no data for', 'Our remote-readiness levels', 'Hold a 30-minute technical interview'],
    sources: [
      { claim: 'O*NET 15-1252.00: programming, essential skills incl. writing and speaking, English Language knowledge, teamwork 71% extremely important, tools Git, JIRA, Slack, Zoom, Google Meet, Teams; Hot Technologies definition.', url: 'https://www.onetonline.org/link/summary/15-1252.00' },
      { claim: 'EF EPI 2025 Peru: score 519, Lima 555; job function scores from 589 to 482, IT 522; reading 540, speaking 480.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'INEI II Trimestre 2026: internet use 95.2% (25 to 40); 36.4% of households with a computer; 84.7% of Lima Metropolitana households with internet.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'Time zones America/Lima (UTC-5, no DST), America/New_York, America/Los_Angeles, Europe/Madrid, Asia/Kolkata.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Any count of Peruvians working remotely for foreign employers or any nearshoring statistic: no primary source found (MARKET.md 1.6); the page says so.',
      'O*NET wage, employment and growth figures: not used; no salary figures or promises on the page.',
      'Any job, placement or salary promise: not made.',
      'Legal, tax or immigration advice on remote contracts: not given; the page refers readers to a qualified adviser in Peru.',
      'Spanish-language teaching: none; the page says the classes are in English only.'
    ]
  }
};
