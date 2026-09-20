'use strict';
// Best coding classes for adults in the UK (ag- door, national; UK cluster Phase 3, Best group).
// Facts read at primary sources on 20 September 2026:
//  - Ofcom, Adults' Media Use and Attitudes Report, published 2 April 2026, read from Ofcom's PDF:
//    * "Most online adults (89%) say they feel confident as an internet user. Confidence is strong for
//      tasks such as recognising scam messages (82%) and identifying online advertising (81%), but
//      fewer adults feel confident judging whether online information is true or false (72%)".
//    * "Just over half of adults (53%) feel very confident at an overall level, but far fewer feel very
//      confident in specific skills: 30% for recognising advertising, 29% for spotting scams, and only
//      21% for judging whether information is true or false."
//    * The regression, which is the spine: "the analysis shows that breadth of online activity is the
//      strongest marker of digital confidence. Broad and medium internet users were significantly more
//      likely than narrow users to feel confident across all areas." And: "Confidence also varies by
//      age, although to a lesser extent than by breadth of internet use." Age: 25-34 and 35-44 both
//      72%, 16-24 62%, 45-54 64%, 55-64 58%, 65-74 47%, 75+ 46%, a 26-point spread, against broad 78%
//      to medium 61% to narrow 42%, a 36-point spread.
//    * AI in search: "Three-quarters of online adults (75%) say they read these summaries at least some
//      of the time and more than two in five (42%) say they read them 'often' or 'always'." Trust in
//      AI-generated news: 57% would trust it less, 27% the same, 7% more.
//  - GOV.UK, Lifelong learning entitlement (LLE): overview, updated 31 July 2026: "Learners will be
//    able to apply for their funding in September 2026 for courses and modules starting from January
//    2027 onwards"; the LLE funds "full courses at level 4 to 6, such as degrees, technical
//    qualifications" plus some level 7 and modules from those levels; a funded module must "be worth at
//    least 30 credits, or a bundle of modules from the same parent course equalling at least 30
//    credits"; and the line this page turns on: "LLE tuition loans will be available for people up to
//    the age of 60 at the start of their course", with those aged 60 and over able to access
//    maintenance support only.
//  - DfE, Find training and employment schemes for your business, Skills Bootcamps: "Skills Bootcamps
//    are flexible training courses for adults aged 19 and over"; "They last up to 16 weeks and offer
//    participants a job interview on completion"; an employer training an existing employee contributes
//    "10% if you are a small to medium employer with 1 to 249 employees" and "30% if you are a large
//    employer with 250 or more employees"; "There is no cost to your business to recruit individuals
//    who have completed Skills Bootcamps."
//  - School of Code's own site: "We deliver free, intensive Bootcamps around the UK throughout the
//    year", with "fully remote and blended courses". Duration and eligibility are not stated on that
//    page and are therefore not claimed here.
// Spine: age is the weaker variable. Ofcom's own regression finds breadth of online activity a stronger
// marker of digital confidence than age, and the spread proves it: 36 points between broad and narrow
// users against 26 points across every age band. Meanwhile the funded routes are built for one kind of
// adult, the career changer, and the tuition loan stops at 60. This page says plainly when a free
// bootcamp is the better answer, and what is left for everyone the funding was not designed for.
// Deliberately NOT reused from best-online-coding-classes-uk: the Ofqual entry figures, Code Club, the
// seven checks, and the Skills Bootcamps sentences that page already quotes.
// PRICE RULE: the LLE cash ceiling is published in pounds and this site prices in one currency, so the
// figure stays in the dossier and off the page. The age limit carries the argument without it.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'guide', tag: 'ADULTS', blurb: 'What Ofcom found about adult digital confidence, where the free and funded routes stop, and weekly lessons for everyone they were not designed for.' },
  slug: 'best-coding-classes-for-adults-uk',
  code: 'bau',
  accent: '#676812',
  accentRationale: 'Adults, UK: a dark olive gold from the solver (4.78:1 on every paper tint), set apart from the crimson on the teens page and every green in the cluster',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Best coding classes for adults in the UK',
  title: 'Best Coding Classes for Adults in the UK | Beginners Welcome',
  description: 'Coding classes for UK adults, complete beginners included: Python, data and AI taught live in the evening by a teacher who reads your code. The first class is free.',
  ogDescription: 'Ofcom found breadth of online activity predicts digital confidence better than age does. The funded routes stop at 60. We teach to 67.',
  twitterDescription: 'Live online coding for UK adults, evenings and weekends, beginners welcome. First class free.',
  pageName: 'Best Coding Classes for Adults in the UK',
  webPageDescription: 'Coding classes for adults in the UK, set against Ofcom 2026 findings on digital confidence and against what Skills Bootcamps and the Lifelong Learning Entitlement actually fund.',
  courseDescription: 'Live online coding, Python, data and AI classes for adults in the UK, from complete beginners to working professionals, taught in the evening and at weekends in UK time.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Coding for adults, UK',
  navLinks: [
    { href: '#confidence', label: 'What predicts confidence' },
    { href: '#funded', label: 'What is already free' },
    { href: '#us', label: 'Where we fit' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United Kingdom &middot; Adults &middot; Evenings and weekends',
  h1: 'Best coding classes for adults in the UK',
  lede: 'Most adults who write to us about learning to code open with their age. Forty-four, fifty-two, sixty-one, and then a version of the same question. Ofcom has, without meaning to, answered it. When it modelled what actually predicts digital confidence in British adults this year, the strongest marker was not age but breadth of online activity, and the gap between broad and narrow internet users was wider than the gap between the youngest and oldest age groups. Age is the weaker variable. This page sets out what Ofcom found, what the free and government-funded routes cover and where they stop, and what is honestly left for everyone those routes were not designed for.',
  secondaryCta: { href: '#funded', label: 'What is already free' },
  wa: 'Hello Modern Age Coders, I am an adult in the UK and would like a free first coding class.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Learners from 6 to 67',
  spec: [
    ['For', 'Adults, complete beginners included'],
    ['Covers', 'Python, data, AI, automation'],
    ['When', 'Evenings and weekend mornings'],
    ['Pace', 'Weekly, alongside a job'],
    ['Group', 'Five to ten at one level'],
    ['Or', 'One to one'],
    ['Upper limit', 'None we have met yet'],
    ['Start', 'One free lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'An adult in the UK who wants to learn to code has three honest options. A Skills Bootcamp is free, lasts up to sixteen weeks and ends with a job interview, which makes it the right answer for someone changing career now. A free bootcamp such as School of Code does something similar. And from January 2027 the Lifelong Learning Entitlement funds modular study at levels 4 to 6, with tuition loans available to people up to the age of 60 at the start of a course. All three are built for a career switch, and one of them has an age ceiling. Weekly evening lessons are for everybody else: people learning alongside a job, at a pace a life allows, with no intention of becoming a developer by Christmas. That is what we do, for learners up to 67, and the first lesson is free. After that it is USD 100 a month in a group or USD 150 one to one.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for adults in the UK',
    lede: 'Written for grown-ups with jobs: no school framing, no homework for its own sake. Each card opens a full syllabus.',
    items: [
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'ADULT / 01', title: 'Python from Zero to Advanced', note: 'A complete route for an adult who has never programmed, starting from what a variable is and ending somewhere useful.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', code: 'ADULT / 02', title: 'Data and AI Analytics for Non-Programmers', note: 'For people whose work involves data but whose job title does not contain the word developer.' },
      { course: 'python-ai-automation-masterclass-college', code: 'ADULT / 03', title: 'Python and AI Automation', note: 'Automating the repetitive parts of an actual job, which is where most adults first see the point.' }
    ]
  },

  sections: [
    {
      id: 'confidence', tint: 'tint', eyebrow: 'What predicts confidence',
      h2: 'Ofcom modelled it, and age came second',
      lede: 'From Ofcom\'s Adults\' Media Use and Attitudes Report, published 2 April 2026. The regression in it is more interesting than any of its headlines.',
      body: [
        { kind: 'two',
          left: [
            'Ofcom asked online adults how confident they feel, and the topline looks reassuring: 89 per cent say they feel confident as an internet user, 82 per cent about recognising scam messages and 81 per cent about identifying online advertising. Then it asked about judging whether online information is true or false, and the figure drops to 72 per cent, down slightly on last year.',
            'Split confident from very confident and the floor gives way. Fifty-three per cent are very confident overall, but only 30 per cent about recognising advertising, 29 per cent about spotting scams, and 21 per cent about judging whether information is true.'
          ],
          right: [
            'Then Ofcom did the thing that matters. It ran a binary logistic regression across general internet use, scam detection, recognising advertising and judging accuracy, and reported that "breadth of online activity is the strongest marker of digital confidence", with broad and medium users significantly more likely than narrow users to feel confident across every area.',
            'On age, its own conclusion is explicit: confidence "varies by age, although to a lesser extent than by breadth of internet use".'
          ] },
        { kind: 'table', mt: true, caption: 'Two ways of splitting the same adults, Ofcom 2026', head: ['Split by breadth of internet use', 'Confident', 'Split by age', 'Confident'], rows: [
          ['Broad users', '78 per cent', '25 to 34 and 35 to 44', '72 per cent'],
          ['Medium users', '61 per cent', '45 to 54', '64 per cent'],
          ['Narrow users', '42 per cent', '16 to 24', '62 per cent'],
          ['', '', '55 to 64', '58 per cent'],
          ['', '', '65 to 74', '47 per cent'],
          ['Spread', '36 points', '75 and over', '46 per cent']
        ] },
        { kind: 'p', text: 'Read the two columns together. Thirty-six points separate the broadest internet users from the narrowest. Twenty-six points separate a 30-year-old from someone over 75, and the youngest adults are not even at the top of that column. If you are 58 and wondering whether it is too late, Ofcom\'s data says you are worrying about the smaller of the two effects, and about the one you cannot change rather than the one you can.' },
        { kind: 'two', mt: true,
          left: [
            'None of which means learning is effortless at any age. It means the variable that moves is the range of things you do, and learning to write a program is about as decisive a widening of that range as exists.',
            'It is also worth knowing where adults are already meeting AI without choosing to. Three-quarters of online adults read AI search summaries at least some of the time, and more than two in five read them often or always.'
          ],
          right: [
            'Adults are more sceptical than teenagers about the results. Fifty-seven per cent say they would trust a news story written by AI less than one written by a person, 27 per cent about the same and 7 per cent more. The <a class="ag-inline-link" href="/best-coding-classes-for-teens-uk">teens page</a> shows the opposite pattern in children, which is worth a conversation at home.',
            'Scepticism without a way to check is just unease. Writing code converts it into something testable, which is the practical case for an adult learning it.'
          ] },
        { kind: 'source', html: 'Source, read 20 September 2026: <a class="ag-inline-link" href="https://www.ofcom.org.uk/media-use-and-attitudes/media-habits-adults/adults-media-use-and-attitudes" rel="noopener" target="_blank">Ofcom, Adults\' Media Use and Attitudes Report</a>, published 2 April 2026.' }
      ]
    },
    {
      id: 'funded', tint: 'deep', eyebrow: 'What is already free',
      h2: 'Two free routes, one funded one, and where each stops',
      lede: 'If one of these fits you, take it. We would rather say so here than have you find out after paying us.',
      body: [
        { kind: 'table', caption: 'The funded and free routes for adults in the UK', head: ['Route', 'What it is', 'Where it stops'], rows: [
          ['Skills Bootcamps', 'Government-funded training for adults aged 19 and over, lasting up to sixteen weeks and offering a job interview on completion', 'Built around moving into a job now. Intensive, and not designed for someone studying alongside full-time work'],
          ['School of Code', 'In its own words, "free, intensive Bootcamps around the UK throughout the year", including fully remote and blended courses', 'Places are limited and intake is periodic; the site does not publish a duration or eligibility rules, so we do not state any'],
          ['Lifelong Learning Entitlement', 'From January 2027, loan funding for full courses and modules at levels 4 to 6 and some level 7, with applications opening in September 2026', 'Tuition loans are available to people up to the age of 60 at the start of a course. Those aged 60 and over can access maintenance support only'],
          ['Weekly lessons', 'What this page is about: one or two lessons a week with a teacher, at a pace that fits a job and a family', 'Not a career-change programme, and it comes with no job interview at the end']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The Skills Bootcamp design is worth understanding properly, because it explains who it is for. Employers sending an existing employee contribute 10 per cent of the training cost if they have between 1 and 249 staff and 30 per cent if they have 250 or more, while recruiting someone who has already completed one costs an employer nothing. The whole structure points at employment, which is exactly why it is the right answer for a career changer and the wrong one for someone who simply wants to become capable.',
            'If that is you, stop reading and go and apply. We are not competing with free.'
          ],
          right: [
            'The Lifelong Learning Entitlement is the bigger structural change, and it is modular by design: a funded module has to be worth at least 30 credits, or a bundle from the same parent course adding up to 30. That makes genuinely part-time study fundable in a way it has not been.',
            'And then there is the sentence that made this page worth writing. Tuition loans under the LLE run to the age of 60 at the start of a course. Not sixty-five, not state pension age. Sixty.'
          ] },
        { kind: 'p', text: 'We teach people from 6 to 67, and the oldest students on our roll are past the point at which the state will lend them tuition money for a level 4 course. We are not suggesting that is a scandal, and public money has to stop somewhere. It does mean that for a substantial group of adults in this country there is no funded route at all, and what is left is paying for a weekly lesson or teaching yourself from videos.' }
      ]
    },
    {
      id: 'us', tint: '', eyebrow: 'Where we fit',
      h2: 'For the adult nobody designed a programme for',
      lede: 'Being clear about what this is worth more than a list of features.',
      body: [
        { kind: 'two',
          left: [
            'This is weekly teaching, one or two lessons a week, with a named teacher who reads what you wrote and tells you why it is wrong. It runs in the evening or at the weekend in UK time. It assumes you have a job, that some weeks will be bad, and that nobody is going to become employable in sixteen weeks doing two hours a week, because they are not.',
            'What it does produce, over a year, is an adult who can write a working program, read someone else\'s, automate a piece of their own job and tell when an AI tool has handed them something wrong. For a great many people that is the actual goal, and it never needed a bootcamp.'
          ],
          right: [
            'Three groups tend to find it fits. Professionals whose work is drowning in spreadsheets and who want the repetitive part automated. Parents who want to understand what their children are being taught, and often end up going further than the children. And people who have retired or semi-retired and want something difficult and useful to do that is not a puzzle book.',
            'One group it does not fit: anyone who needs to be job-ready by a date. Go to a bootcamp. If you want to build up to one first, a few months of weekly lessons beforehand is a good use of time, and plenty of our adult students have done exactly that.'
          ] },
        { kind: 'table', mt: true, caption: 'What an adult can expect, term by term', head: ['After', 'What you can do', 'What you still cannot'], rows: [
          ['Three months', 'Write and debug short Python programs from an empty file; read simple code and predict what it does', 'Build anything with a database behind it'],
          ['Six months', 'Handle files and data, use libraries, and automate a repetitive task from your own work', 'Pass a technical interview for a developer role'],
          ['Twelve months', 'Build a small application end to end, test it, and explain every decision in it', 'Substitute for a computer science degree, and we would not claim otherwise'],
          ['Beyond', 'Move into data, AI or web development with a portfolio of your own work', 'Skip the part where you build things nobody asked for']
        ] },
        { kind: 'p', text: 'Every promise in that table is about capability rather than employment. We do not place anyone in jobs, we have no employer partners and we do not run a hiring pipeline, so any claim about outcomes would be one we could not stand behind. <a class="ag-inline-link" href="/how-we-teach">How we teach</a> sets out the method in full, and the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a> gives the order topics come in.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Four stages, at the pace a working week allows',
    lede: 'Adults move through these faster than children on reading and slower on practice hours. It evens out.',
    table: { caption: 'What each stage looks like for an adult learner', head: ['Stage', 'Starting point', 'Evidence it is done'], rows: [
      ['1. The basics land', 'Never written a line of code', 'Short programs written unaided, and errors read rather than feared'],
      ['2. Useful quickly', 'Can type code but cannot yet structure it', 'A repetitive task from your own work automated end to end'],
      ['3. Real projects', 'Comfortable with the language', 'An application with data behind it, built, tested and explained'],
      ['4. A direction', 'Wants to go somewhere specific', 'Depth in data, AI or web development, with published work to point at']
    ] },
    left: { h3: 'Nobody is too old for stage one', ps: [
      'Our oldest learners are in their sixties and they do not move more slowly than a twenty-five-year-old at the same stage. They ask better questions and they practise less, and those roughly cancel out.',
      'Ofcom\'s own analysis, above, points the same way: breadth of activity matters more than the year on a birth certificate.'
    ] },
    right: { h3: 'Stopping and restarting is fine', ps: [
      'Work gets busy and people pause. Coming back a month later costs a lesson of revision, not a term, and we would rather someone paused than quietly dropped out.',
      'Group and private lessons can be swapped either way as circumstances change.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses taught live to adults in the UK',
    lede: 'Grouped by what an adult is trying to get done rather than by difficulty. The free lesson settles the starting point.',
    bands: [
      { num: 'I', h3: 'From nothing', sub: 'For adults who have never programmed', courses: [
        { code: 'UK / AD1 / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python, zero to advanced', blurb: 'The full route for a complete beginner, taken at whatever speed a working week allows.' },
        { code: 'UK / AD1 / 02', slug: 'data-and-ai-analytics-for-non-programmers-course', title: 'Data and AI for non-programmers', blurb: 'The concepts and the vocabulary, for people who need to follow the argument rather than write the code.' },
        { code: 'UK / AD1 / 03', slug: 'mysql-database-complete-masterclass-college', title: 'Databases and SQL', blurb: 'Where the data actually lives, which is often the first thing an adult genuinely needs at work.' }
      ] },
      { num: 'II', h3: 'Making work easier', sub: 'For adults automating a real job', courses: [
        { code: 'UK / AD2 / 01', slug: 'python-ai-automation-masterclass-college', title: 'Python and AI automation', blurb: 'The repetitive parts of a week turned into something that runs by itself.' },
        { code: 'UK / AD2 / 02', slug: 'data-analysis-mastery-course-college', title: 'Data analysis', blurb: 'Cleaning, questioning and charting real data, with the limits of each chart stated out loud.' },
        { code: 'UK / AD2 / 03', slug: 'orange-data-mining-machine-learning-course-for-college-students', title: 'Machine learning without the maths wall', blurb: 'Models built and tested visually first, so the ideas land before the notation does.' }
      ] },
      { num: 'III', h3: 'Going professional', sub: 'For adults heading towards a change', courses: [
        { code: 'UK / AD3 / 01', slug: 'data-science-complete-masterclass-college', title: 'Data science, complete', blurb: 'The full path from spreadsheets to models, for adults with a destination in mind.' },
        { code: 'UK / AD3 / 02', slug: 'python-web-development-django-flask-course', title: 'Web development with Python', blurb: 'Building and deploying the kind of application an employer can open and click.' },
        { code: 'UK / AD3 / 03', slug: 'data-structures-algorithms-masterclass-college', title: 'Algorithms and data structures', blurb: 'The material technical interviews are built on, worked through slowly and properly.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons work',
    h2: 'An evening slot, a named teacher, and code that gets read',
    lede: 'Our teachers are in India, where the clocks do not shift, so the UK runs five and a half hours behind in winter and four and a half in summer. Adults almost always pick an evening or a weekend morning.',
    slots: [
      { time: 'Early evening', l: 'Straight after work, which most people find easiest to keep.' },
      { time: 'Later evening', l: 'For anyone whose evening does not free up until the house is quiet.' },
      { time: 'Weekend morning', l: 'Longer sessions, better for finishing something in one sitting.' }
    ],
    cells: [
      { h3: 'No school framing', p: 'Adults are taught as adults. No badges, no gamification, and questions answered properly rather than simplified.' },
      { h3: 'Your own work as material', p: 'Where it is possible, the examples come from a learner\'s actual job, which is what makes the skill stick.' },
      { h3: 'A person reads your code', p: 'Weekly, with reasons. This is the single thing a recorded course cannot give an adult beginner.' },
      { h3: 'Pauses are expected', p: 'Work travel, deadlines, illness. Tell us and we hold the slot rather than quietly dropping you.' },
      { h3: 'Groups by level', p: 'Five to ten adults at the same stage. Nobody is the only beginner in a room of graduates.' },
      { h3: 'Or one to one', p: 'For a specific target, an awkward schedule, or someone who would rather not learn in front of others.' }
    ]
  },

  projectsH2: 'What adult learners have built',
  projectsLede: 'Four published projects. More are on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Copied from Google as written. Nobody is paid or prompted to leave one.',

  fees: {
    h2: 'What adults pay',
    lede: 'One figure a month, quoted in US dollars because that is how we price outside India. Nothing is taken in advance, and there is no year-long contract to sign.',
    free: ['A full lesson with a teacher', 'A frank view of where to start', 'No card details taken'],
    group: ['Five to ten adults at one level', 'The same teacher throughout', 'Your code read and commented on weekly', 'Pause and restart when work demands it'],
    one: ['One teacher, one learner', 'Built around a specific target', 'Right for tight schedules and specific goals']
  },

  faq: {
    eyebrow: 'Questions from UK adults',
    h2: 'What adults ask before they start',
    items: [
      { q: 'Am I too old to learn to code?', a: 'Ofcom\'s 2026 analysis found breadth of online activity a stronger marker of digital confidence than age, and said so explicitly. The spread between broad and narrow internet users was wider than the spread across every age band. We teach learners up to 67.' },
      { q: 'Should I do a Skills Bootcamp instead?', a: 'If you want to move into a tech job now, probably yes. They are free for adults aged 19 and over, last up to sixteen weeks and offer a job interview on completion. We are weekly lessons alongside a job, which is a different thing.' },
      { q: 'What is School of Code?', a: 'A provider that runs what it describes as free, intensive bootcamps around the UK throughout the year, including fully remote and blended courses. Its site does not publish a duration or eligibility rules, so we do not state any.' },
      { q: 'What is the Lifelong Learning Entitlement?', a: 'A new student finance system covering full courses and modules at levels 4 to 6 and some level 7. Applications open in September 2026 for courses and modules starting from January 2027.' },
      { q: 'Is there an age limit on that funding?', a: 'Yes. Tuition loans under the LLE are available to people up to the age of 60 at the start of their course. Those aged 60 and over can access maintenance support only.' },
      { q: 'I have never written a line of code. Where do I start?', a: 'With Python, and with a free lesson that tells you honestly whether the pace suits you. Roughly three months of weekly lessons is enough to write and debug short programs unaided.' },
      { q: 'Will this get me a job?', a: 'We make no claim that it will. We do not place anyone, we have no employer partners and we run no hiring pipeline. What a year produces is capability and a portfolio, and what you do with those is yours.' },
      { q: 'Can I pause if work gets busy?', a: 'Yes, and we would rather you did than drop out quietly. Coming back costs a lesson of revision. The slot is held.' },
      { q: 'Are the classes with other adults?', a: 'Yes. Groups are built by level, and adult groups are adults. Nobody is placed in a room of teenagers.' },
      { q: 'What does it cost?', a: 'Nothing for the first lesson. A group place is then USD 100 a month and a private one USD 150, taken monthly, with no advance payment and no minimum term.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Other pages worth reading',
    lede: 'Each covers one part of this in more depth.',
    items: [
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Where the four nations differ, with an index of everything we have written.' },
      { href: '/best-online-coding-classes-uk', label: 'How to judge a coding class', p: 'Seven checks that work whoever is doing the teaching.' },
      { href: '/best-coding-classes-for-teens-uk', label: 'Coding classes for teens in the UK', p: 'The same question for a teenager, with very different data behind it.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'The method, set out in full, with its limits.' },
      { href: '/coding-roadmap', label: 'The coding roadmap', p: 'What order topics come in, well past the beginner stage.' },
      { href: '/student-labs', label: 'Student labs', p: 'Work our learners have built and published.' }
    ]
  },

  start: {
    h2: 'Try one lesson, free',
    lede: 'Send a number and we will come back at a UK time that suits you. The free lesson is real teaching on a real problem, and it ends with a straight view of whether this is the right fit.',
    readFirst: 'Prefer to read first? Syllabuses are on the <a class="ag-inline-link" href="/courses">course pages</a>, the method is in <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and the topic order is on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.',
    note: 'A WhatsApp message from a British mobile is free to send and gets the fastest reply. The number belongs to our office in India, which we would rather state here than leave you to notice.',
    formNote: 'Nothing to pay and nothing to sign. One reply from us, to fix a time.'
  },

  footer: {
    cols: [
      { h4: 'United Kingdom', links: [
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' },
        { href: '/coding-and-ai-classes-in-england', label: 'England' },
        { href: '/coding-and-ai-classes-in-northern-ireland', label: 'Northern Ireland' },
        { href: '/coding-and-ai-classes-in-wales', label: 'Wales' }
      ] },
      { h4: 'For adults', links: [
        { href: '/best-online-coding-classes-uk', label: 'Choosing a class' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/student-labs', label: 'Student labs' }
      ] }
    ],
    bottomRight: 'Live evening lessons for UK adults, on UK time'
  },

  personalityCss: `
.ag-root.ag-bau .ag-hero h1 { letter-spacing: -0.022em; font-weight: 650; }
.ag-root.ag-bau .ag-capsule { border-left-width: 4px; padding-left: 1.4rem; }
.ag-root.ag-bau .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-bau .ag-section-head p { max-width: 64ch; }
.ag-root.ag-bau .ag-table caption { text-align: left; font-weight: 650; letter-spacing: 0.02em; }
.ag-root.ag-bau .ag-table td:first-child { font-weight: 650; }
.ag-root.ag-bau .ag-band-head h3 { letter-spacing: 0.005em; }
`,

  mustMention: ['breadth of online activity', 'up to the age of 60', '36 points', '19 and over', '30 credits', 'January 2027', 'School of Code', '21 per cent', '57 per cent', '2 April 2026'],

  dossier: {
    curriculumAuthority: 'United Kingdom, adults. Ofcom, Adults\' Media Use and Attitudes Report, published 2 April 2026, read from Ofcom\'s PDF on 20 September 2026: "Most online adults (89%) say they feel confident as an internet user. Confidence is strong for tasks such as recognising scam messages (82%) and identifying online advertising (81%), but fewer adults feel confident judging whether online information is true or false (72%)"; "Just over half of adults (53%) feel very confident at an overall level, but far fewer feel very confident in specific skills: 30% for recognising advertising, 29% for spotting scams, and only 21% for judging whether information is true or false"; the binary logistic regression across general internet use, scam detection, recognising advertising and judging accuracy found that "breadth of online activity is the strongest marker of digital confidence" and that "Broad and medium internet users were significantly more likely than narrow users to feel confident across all areas", with Ofcom stating that confidence "varies by age, although to a lesser extent than by breadth of internet use"; by breadth, broad 78 per cent, medium 61 per cent, narrow 42 per cent; by age, 25-34 and 35-44 both 72 per cent, 45-54 64 per cent, 16-24 62 per cent, 55-64 58 per cent, 65-74 47 per cent, 75+ 46 per cent; AI in search, "Three-quarters of online adults (75%) say they read these summaries at least some of the time and more than two in five (42%) say they read them \'often\' or \'always\'"; trust in AI-generated news, 57 per cent less, 27 per cent the same, 7 per cent more. GOV.UK, Lifelong learning entitlement (LLE): overview, updated 31 July 2026: "Learners will be able to apply for their funding in September 2026 for courses and modules starting from January 2027 onwards"; funds "full courses at level 4 to 6, such as degrees, technical qualifications" plus some level 7 and modules; a funded module must "be worth at least 30 credits, or a bundle of modules from the same parent course equalling at least 30 credits"; "LLE tuition loans will be available for people up to the age of 60 at the start of their course", with those aged 60 and over able to access maintenance support only; the maximum entitlement is published as a cash figure in pounds based on the current maximum fee limit, deliberately left off the page because this site prices in one currency. DfE, Find training and employment schemes for your business, Skills Bootcamps: "Skills Bootcamps are flexible training courses for adults aged 19 and over"; "They last up to 16 weeks and offer participants a job interview on completion"; employer contribution for an existing employee is "10% if you are a small to medium employer with 1 to 249 employees" and "30% if you are a large employer with 250 or more employees"; "There is no cost to your business to recruit individuals who have completed Skills Bootcamps." School of Code, own site: "We deliver free, intensive Bootcamps around the UK throughout the year", with "fully remote and blended courses"; no duration or eligibility published there, so none claimed.',
    localProject: 'Age is the weaker variable. Ofcom ran a regression on what predicts adult digital confidence in the UK and found breadth of online activity the strongest marker, saying in its own words that confidence varies by age "to a lesser extent than by breadth of internet use". The arithmetic makes the point unarguable: 36 points separate broad from narrow internet users, 26 points separate the most from the least confident age band, and the youngest adults are not at the top of the age column. Set against that, the page maps the funded landscape honestly and tells a career changer to go and take a free Skills Bootcamp instead, then lands on the sentence that justifies the page: LLE tuition loans stop at the age of 60 at the start of a course, while we teach to 67, so a real group of British adults has no funded route at all. The term-by-term table states what a year of weekly lessons cannot do as plainly as what it can, and the page makes no employment claim of any kind. Lesson family: a published regression that contradicts the assumption in the reader\'s own question; distinct from the teens page, which turns on base lines, and from the best-online page, which is a seven-check comparison.',
    requiredMentions: ['breadth of online activity', 'up to the age of 60', '19 and over', '30 credits', '2 April 2026'],
    sources: [
      { claim: 'Ofcom, Adults\' Media Use and Attitudes Report, published 2 April 2026: confidence figures, the very-confident split, the regression finding breadth of online activity the strongest marker, confidence by breadth and by age, AI search summaries and trust in AI-generated news.', url: 'https://www.ofcom.org.uk/media-use-and-attitudes/media-habits-adults/adults-media-use-and-attitudes' },
      { claim: 'GOV.UK, Lifelong learning entitlement (LLE): overview, updated 31 July 2026: application and start dates, levels covered, the 30-credit module rule, and the age 60 limit on tuition loans.', url: 'https://www.gov.uk/government/publications/lifelong-learning-entitlement-lle-overview/lifelong-learning-entitlement-overview' },
      { claim: 'DfE, Find training and employment schemes for your business: Skills Bootcamps are for adults aged 19 and over, last up to 16 weeks, offer a job interview on completion, and carry a 10 or 30 per cent employer contribution for existing employees.', url: 'https://find-employer-schemes.education.gov.uk/schemes/skills-bootcamps' },
      { claim: 'School of Code, own site: free, intensive bootcamps around the UK throughout the year, fully remote and blended courses.', url: 'https://schoolofcode.co.uk/' }
    ],
    rejectedClaims: [
      'The maximum LLE entitlement in pounds: published as a cash figure, and this site prices in one currency, so it stays in the dossier and off the page. The age 60 limit carries the argument without it.',
      'School of Code\'s course length, eligibility rules or cohort size: not published on the page read, so nothing is stated.',
      'Any employment or salary outcome from our classes: we place nobody, have no employer partners and run no hiring pipeline, so the term-by-term table promises capability only.',
      'A claim that older adults learn as fast as younger ones: Ofcom measured confidence, not learning rate, and the page keeps to what was measured.',
      'Completion or outcome rates for Skills Bootcamps: not read at a primary source for this build.',
      'Devolved variations in adult skills funding across Scotland, Wales and Northern Ireland: not read at primary sources for this build, so the page does not claim UK-wide coverage for any scheme beyond what each source states.'
    ]
  }
};
