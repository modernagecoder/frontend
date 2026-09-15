'use strict';
// Full stack software development course, Netherlands (ag- track door).
// Spine: UWV, "Ontwikkeling krapte naar beroep" (18 December 2025), linking
// ROA's forecasts to 2030 with the tightness at the end of 2024: 32 of 112
// occupational groups are (very) tight with ROA expecting a further rise;
// almost 545 thousand people work in ICT occupations; software and
// application developers number 371,500, with a very tight market in the
// fourth quarter of 2024 that is expected to become (somewhat) less tight;
// ICT user support (53,500) likewise; ICT managers (32,900) tight. The
// honest reading: a market still very tight but slowly easing rewards depth
// over a quick certificate. No promise of jobs is made.

module.exports = {
  cluster: 'ag',
  slug: 'full-stack-software-development-course-netherlands',
  code: 'fsn',
  accent: '#00722A',
  accentRationale: 'Full stack door: a deep emerald from the solver, thirty units from every page it links to, the college, adults and Python doors, the academy hub and both Dutch oranges among them, with an unlinked academy page as its nearest neighbour',
  pageType: 'market',
  market: { name: 'Netherlands', iso: 'NL', dial: '+31', lang: 'en-NL', locale: 'en_NL', geoRegion: 'NL', brandTag: 'Netherlands', phonePlaceholder: '6 XXXX XXXX', minDigits: 9 },
  routeLabel: 'Full stack software development course, Netherlands',
  title: 'Full Stack Software Development Course, Netherlands | Live',
  description: 'Full stack software development for learners in the Netherlands: front end, back end, databases and deployment, taught live online in English. First lesson free.',
  ogDescription: '371,500 software and application developers work in the Netherlands, in a labour market UWV calls very tight but slowly easing. Full stack development taught for depth, live online.',
  twitterDescription: 'Front end, back end, databases and deployment, taught live online for learners in the Netherlands. First lesson free.',
  pageName: 'Full Stack Software Development Course in the Netherlands',
  webPageDescription: 'Live online full stack software development courses for teenagers, students and adults in the Netherlands: HTML, CSS and JavaScript, React, Node.js, Python and Java back ends, databases, Git and deployment.',
  courseDescription: 'A live online full stack programme for learners in the Netherlands, from HTML, CSS and JavaScript through React and a back end in Node.js, Python or Java, to databases, version control and deployment, taught in English.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the Netherlands', href: '/coding-classes-in-netherlands' }],
  crumbLabel: 'Full stack',
  navLinks: [
    { href: '#market', label: 'The market' },
    { href: '#stack', label: 'The whole stack' },
    { href: '#ladder', label: 'The ladder' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Netherlands &middot; Full stack &middot; Live online',
  h1: 'Full stack software development course in the Netherlands',
  lede: 'According to the Dutch employee insurance agency, UWV, 371,500 people work as software and application developers in the Netherlands, and at the end of 2024 their labour market was very tight. UWV\'s outlook to 2030, based on forecasts by the research centre ROA, expects it to become somewhat less tight. That combination matters for anyone learning to build software now. A very tight market has room for newcomers; a market that is slowly easing lets employers be more selective. The developers who stay in demand are those who understand the whole application, from the page a user sees to the data behind it and the server it runs on, rather than those who completed a short course in one framework. This page covers full stack development for learners in the Netherlands, from a teenager\'s first website to an adult\'s career change, taught live online and in English with depth as the aim.',
  secondaryCta: { href: '#stack', label: 'See what the stack involves' },
  wa: 'Hello Modern Age Coders, I would like a free lesson on the full stack development course in the Netherlands.',
  heroNote: 'Live teaching since 2020 &middot; more than 10,000 students &middot; every lesson with a working developer as teacher',
  spec: [
    ['Front end', 'HTML, CSS, JavaScript, React'],
    ['Back end', 'Node.js, Python or Java'],
    ['Data', 'SQL databases'],
    ['Practice', 'Git, testing, deployment'],
    ['For', 'Teens, students, career changers'],
    ['Format', 'Live video with a teacher'],
    ['Groups', 'Five to ten, or one to one'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders teaches full stack software development live online to learners in the Netherlands: the front end in HTML, CSS, JavaScript and React; a back end in Node.js, Python or Java; SQL databases; and the working practices of version control, testing and deployment. Teenagers start with websites and move up; students and adults can take the full route towards a first developer role. Each learner joins at the rung their skills justify, in a class of five to ten or alone with a teacher, always live and in English. A trial lesson is free, and a month of group study then costs USD 100, or USD 150 with a private teacher.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three full stack courses for three starting points',
    lede: 'One for students and adults aiming at a developer role, one for teenagers, and one for the front end most applications begin with. Each opens its own page.',
    items: [
      { course: 'full-stack-web-development-masterclass-college', code: 'STACK / 01', title: 'Full Stack Developer Course', note: 'React, Node.js, databases and deployment basics for students and career changers, ending in an application with real users and a portfolio to match.' },
      { course: 'full-stack-web-development-teens-masterclass', code: 'STACK / 02', title: 'Full Stack Web Development for Teens', note: 'A teenager builds a working site with its own front end, back end and data, one layer at a time.' },
      { course: 'react-js-complete-masterclass-college', code: 'STACK / 03', title: 'React Masterclass', note: 'Modern front-end development from JavaScript fundamentals to production-ready React.' }
    ]
  },

  sections: [
    {
      id: 'market', tint: 'tint', eyebrow: 'The market',
      h2: 'Very tight, and slowly easing: the Dutch market for software developers',
      lede: 'UWV published "Ontwikkeling krapte naar beroep" on 18 December 2025. It links the tightness of each occupational group at the end of 2024 to ROA\'s forecasts for 2030, and it includes three ICT groups.',
      body: [
        { kind: 'table', caption: 'ICT occupations in UWV\'s outlook, tightness at the end of 2024 and the expected direction to 2030', head: ['Occupational group', 'Workers', 'Labour market, end of 2024', 'Expected to 2030'], rows: [
          ['Software and application developers', '371,500', 'Very tight', '(Somewhat) less tight'],
          ['ICT user support', '53,500', 'Very tight', '(Somewhat) less tight'],
          ['ICT managers', '32,900', 'Tight', '(Somewhat) less tight'],
          ['All ICT occupations', 'almost 545 thousand', '', 'Less tight overall, according to UWV']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Across the whole economy, UWV found 32 of the 112 occupational groups currently tight or very tight, with ROA expecting their tightness to rise further. ICT is not among those: for ICT occupations, UWV expects the labour market to become less tight towards 2030.',
            'No other occupational group in ICT comes close in size to software and application developers, at 371,500 workers. It is, in other words, a large and still very tight market that is expected to loosen a little.'
          ],
          right: [
            'We read that as an argument for depth. When employers can choose, they choose developers who can work across the stack, reason about data and performance, and show real, finished work. A short course in a single framework is a weaker position in an easing market than it was in a tight one.',
            'We make no promise of jobs. We teach the skills and help learners build a portfolio that shows them; the market does the rest.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.uwv.nl/assets-kai/files/3dadda9c-258e-4d9f-b60c-eac75496816b/ontwikkeling-krapte-naar-beroep-2024-2030.pdf" rel="noopener" target="_blank">UWV, Ontwikkeling krapte naar beroep, 18 December 2025</a>, section 2.8 and table 2.8. Read 15 September 2026; figures quoted as published. The report is in Dutch.' }
      ]
    },
    {
      id: 'stack', tint: 'deep', eyebrow: 'The whole stack',
      h2: 'What full stack actually means, layer by layer',
      lede: 'Full stack is often used loosely. Here is what we mean by it, and why each layer matters.',
      body: [
        { kind: 'three', cells: [
          { h3: 'The front end', p: 'What the user sees and touches: HTML for structure, CSS for layout, JavaScript for behaviour and React for building interfaces from components. A good front end is fast, accessible and works on a phone as well as a laptop.' },
          { h3: 'The back end and the data', p: 'The server that answers requests, written in Node.js, Python or Java, and the database behind it, queried in SQL. This is where most of the logic lives and where most real bugs hide.' },
          { h3: 'The practice around it', p: 'Version control in Git, tests that catch mistakes before users do, and deployment, putting the application online where others can use it. Without these, code is a private experiment rather than software.' }
        ] },
        { kind: 'table', mt: true, caption: 'The stack, and where each layer is taught', head: ['Layer', 'Technologies', 'Course'], rows: [
          ['Structure and style', 'HTML, CSS', 'HTML and CSS for Beginners'],
          ['Behaviour', 'JavaScript', 'JavaScript for Teens, React Masterclass'],
          ['Interfaces', 'React', 'React for Teens, React Masterclass'],
          ['Server', 'Node.js, Python (Django, Flask) or Java (Spring Boot)', 'Full Stack courses, Python Web Development, Java Course for College'],
          ['Data', 'SQL databases', 'MySQL Course'],
          ['Practice', 'Git, testing, deployment', 'Git and GitHub courses, Full Stack courses']
        ] },
        { kind: 'two', mt: true,
          left: [
            'An example makes the layers concrete. Imagine a small feature: members of a sports club book a court for an hour. On the front end there is a form with a date, a time and a court, which must work on a phone at the side of a pitch. It sends a request to the back end, which checks that the member exists, that the court is free and that nobody else booked it a second earlier.',
            'The database holds courts, members and bookings in tables designed so that a double booking cannot be stored even if two requests arrive together.'
          ],
          right: [
            'Around all of that sit the practices: the change lives on its own branch in Git, a test tries to book the same court twice and expects to be refused, and the feature is deployed only when the tests pass. A developer who can build that feature end to end, and explain each decision, is a full stack developer.',
            'Our learners build features like this one many times over, each a little harder than the last, and they are examples, not a specific client project.'
          ] },
        { kind: 'two', mt: true,
          left: [
            'A learner does not need every technology in the table. They need one path through every layer, learned well: for example JavaScript and React at the front, Node.js at the back, and one SQL database.'
          ],
          right: [
            'AI coding tools can now write much of the code in each layer. That makes understanding the whole stack more valuable, not less, because someone has to judge whether the generated code fits together and holds up.'
          ] }
      ]
    },
    {
      id: 'routes', tint: '', eyebrow: 'Routes',
      h2: 'Full stack for teenagers, students and career changers',
      lede: 'The same stack, reached from different starting points.',
      body: [
        { kind: 'two',
          left: [
            'Teenagers usually start with a first website, move to JavaScript and React, and add a back end in the upper school years; see <a class="ag-inline-link" href="/coding-classes-for-teens-netherlands">coding classes for teens</a>.',
            'University students often use full stack projects as internship portfolio pieces; see <a class="ag-inline-link" href="/coding-for-college-students-netherlands">coding for college students</a>.'
          ],
          right: [
            'Adults changing career follow the full route over one to two years of steady study; see <a class="ag-inline-link" href="/coding-and-ai-classes-for-adults-netherlands">coding and AI classes for adults</a>.',
            'For a back end in a particular language, see <a class="ag-inline-link" href="/python-classes-netherlands">Python classes</a> or <a class="ag-inline-link" href="/java-classes-netherlands">Java classes</a> in the Netherlands.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The full stack ladder',
    h2: 'From a first page to a deployed application',
    lede: 'Each rung depends on the one below. A learner who starts with a framework before understanding JavaScript can follow a tutorial but cannot fix what breaks.',
    table: { caption: 'The full stack route', head: ['Rung', 'What the learner can do'], rows: [
      ['1. Web basics', 'Build a page in HTML and CSS that works on any screen'],
      ['2. JavaScript', 'Make pages interactive and reason about the code'],
      ['3. A front-end framework', 'Build interfaces from components in React'],
      ['4. Back end and data', 'Write a server, design a database and connect the two'],
      ['5. Practice and deployment', 'Use Git, write tests and put the application online']
    ] },
    left: { h3: 'Why JavaScript comes before React', ps: [
      'React is JavaScript with conventions. A learner who knows the language well learns React in weeks; one who does not spends months confused by errors that are really JavaScript errors.',
      'Where full stack sits among the other subjects, before it and after it, is shown on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Pace for career changers', ps: [
      'Adults working towards a developer role usually take two lessons a week for one to two years, building a portfolio project at each rung.',
      'Students often move faster during quieter blocks and pause around exams.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Ten live courses across the stack',
    lede: 'Arranged from a first web page to a professional back end. A card leads to the syllabus, timetable and fee, and a trial lesson finds the right rung.',
    bands: [
      { num: 'I', h3: 'Teenagers', sub: 'From a first page to a full site', courses: [
        { code: 'STACK / TEEN / 01', slug: 'html-css-course-for-beginners-build-real-websites', title: 'HTML and CSS for Beginners', blurb: 'Real responsive websites from the first tag, for beginners from about ten.' },
        { code: 'STACK / TEEN / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for Teens', blurb: 'The language of the browser, through interactive sites and small games.' },
        { code: 'STACK / TEEN / 03', slug: 'react-for-teens-complete-masterclass', title: 'React for Teens', blurb: 'Interfaces built from components, from JavaScript foundations up.' },
        { code: 'STACK / TEEN / 04', slug: 'full-stack-web-development-teens-masterclass', title: 'Full Stack Web Development for Teens', blurb: 'Front end, back end and data together in one working site.' }
      ] },
      { num: 'II', h3: 'Students and adults', sub: 'Towards a developer role', courses: [
        { code: 'STACK / PRO / 01', slug: 'full-stack-web-development-masterclass-college', title: 'Full Stack Developer Course', blurb: 'React, Node.js and deployment basics, with a portfolio project at each stage.' },
        { code: 'STACK / PRO / 02', slug: 'react-js-complete-masterclass-college', title: 'React Masterclass', blurb: 'JavaScript to production React for students and adults.' },
        { code: 'STACK / PRO / 03', slug: 'python-web-development-django-flask-course', title: 'Python Web Development with Django and Flask', blurb: 'A Python back end for learners who already know the language.' },
        { code: 'STACK / PRO / 04', slug: 'complete-java-programming-masterclass-college', title: 'Java Course for College', blurb: 'Core Java to Spring Boot, the back end of many enterprise systems.' }
      ] },
      { num: 'III', h3: 'Data and practice', sub: 'The layers every stack needs', courses: [
        { code: 'STACK / DATA / 01', slug: 'mysql-database-complete-masterclass-college', title: 'MySQL Course', blurb: 'SQL, database design and administration for the data layer.' },
        { code: 'STACK / DATA / 02', slug: 'git-github-version-control-course-for-college-students', title: 'Git and GitHub for College Students', blurb: 'Branches, reviews and pull requests, as teams actually work.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How the classes run',
    h2: 'Building software, live, around your week',
    lede: 'Our developers teach from India. India does not change its clocks, so the gap to the Netherlands moves with Dutch summer time: three and a half hours while it lasts, four and a half in winter. Most teenagers on the full stack route build after school; students and career changers tend to choose evenings or weekends, and a fixed weekly slot is settled during the trial lesson.',
    slots: [
      { time: 'After school', l: 'Late afternoon, Dutch time, for teenagers.' },
      { time: 'Evening', l: 'By arrangement, for students and career changers.' },
      { time: 'Weekend', l: 'Saturday or Sunday, good for longer building sessions.' }
    ],
    cells: [
      { h3: 'A free first lesson', p: 'You build something small but real with a teacher, who sees your level and proposes a route through the stack.' },
      { h3: 'Groups of five to ten', p: 'Classmates at the same stage, joining from several countries, each building an application of their own.' },
      { h3: 'One to one for career changers', p: 'For adults with a timetable to hit, a specific project, or a portfolio to finish before applying.' },
      { h3: 'Code reviewed like at work', p: 'Teachers review learners\' code as a senior developer would, so habits form early.' },
      { h3: 'In English', p: 'The language of the tools, the documentation and most Dutch development teams.' },
      { h3: 'Deployed, not just written', p: 'Projects go online, with their code in the learner\'s own GitHub repository.' }
    ]
  },

  projectsH2: 'Applications our students deployed',
  projectsLede: 'Four live projects built and deployed by our students. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'As posted on Google. We do not write, change or pay for reviews.',

  fees: {
    h2: 'Fees for the full stack courses',
    lede: 'Billed monthly in US dollars at one rate for every country outside India. The career route costs the same as any other course, with no joining fee and no contract for the year.',
    free: ['A real building lesson', 'A route through the stack', 'No card needed'],
    group: ['Five to ten learners at one level', 'The same live teacher each week', 'Code reviewed every week', 'A certificate at the end'],
    one: ['A teacher for one learner', 'Paced to a career goal', 'Good for finishing a portfolio']
  },

  faq: {
    eyebrow: 'Questions about full stack',
    h2: 'What learners in the Netherlands ask about full stack development',
    items: [
      { q: 'Is there still demand for developers in the Netherlands?', a: 'Yes. UWV counted 371,500 software and application developers, with a very tight labour market at the end of 2024. Its outlook to 2030 expects that market to become somewhat less tight, so depth and a real portfolio matter more.' },
      { q: 'Will this course get me a job?', a: 'We make no job promises. We teach the skills and help you build finished, deployed projects that show them; employers decide.' },
      { q: 'What does full stack mean?', a: 'The whole application: the front end a user sees, the back end and database behind it, and the practices of version control, testing and deployment that make it real software.' },
      { q: 'Which back-end language should I learn?', a: 'Node.js if you want one language across the stack, Python if you also want data and AI, Java if you are heading for enterprise systems. The free lesson helps decide.' },
      { q: 'Can a teenager learn full stack?', a: 'Yes, step by step: HTML and CSS first, then JavaScript and React, then a back end, usually in the upper school years.' },
      { q: 'Do AI coding tools make this skill less useful?', a: 'They make it more useful. Tools can write code in each layer; someone still has to understand how the layers fit together and whether the result holds up.' },
      { q: 'Are the lessons in English?', a: 'Yes, as are the tools and most Dutch development teams.' },
      { q: 'What does it cost?', a: 'Group study is USD 100 per month and one-to-one teaching USD 150 per month, charged in US dollars. There is no registration fee, you can stop after any month, and the trial lesson is free.' },
      { q: 'When are lessons held?', a: 'Whenever suits you in Dutch time, whether after school, in the evening or at the weekend. Our teachers work three and a half hours ahead of you in summer and four and a half in winter.' },
      { q: 'What happens after I send the form?', a: 'One of our team phones you at a sensible Dutch time and books the trial lesson. You are not charged anything unless you choose to keep going.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for future developers',
    lede: 'Pages for each stage and each back-end language.',
    items: [
      { href: '/coding-for-college-students-netherlands', label: 'Coding for college students', p: 'Algorithms, Git and projects beside a degree.' },
      { href: '/coding-and-ai-classes-for-adults-netherlands', label: 'Coding and AI classes for adults', p: 'For career changers and working adults.' },
      { href: '/coding-classes-for-teens-netherlands', label: 'Coding classes for teens', p: 'The teenage route, including the web.' },
      { href: '/python-classes-netherlands', label: 'Python classes', p: 'A back end in Python, and the route to data and AI.' },
      { href: '/java-classes-netherlands', label: 'Java classes', p: 'A back end in Java, and AP preparation.' },
      { href: '/ai-and-python-academy-netherlands', label: 'AI and Python Academy, Netherlands', p: 'The five-rung national route from Python to AI.' }
    ]
  },

  start: {
    h2: 'Book a free full stack lesson',
    lede: 'Leave a phone number and we call back in the Dutch daytime or early evening. In the first lesson you build something small and real with a teacher, and by the end you will know your route through the stack.',
    readFirst: 'Rather read before talking? Browse the <a class="ag-inline-link" href="/courses">courses</a>, the way <a class="ag-inline-link" href="/how-we-teach">our teaching works</a> and the <a class="ag-inline-link" href="/coding-roadmap">order of subjects</a>.',
    note: 'A WhatsApp message costs nothing from a Dutch phone and is often the fastest way to reach us. The number is registered in India; we do not have an office or any premises in the Netherlands.',
    formNote: 'No card, no commitment. One call to arrange the lesson.'
  },

  footer: {
    cols: [
      { h4: 'Netherlands', links: [
        { href: '/coding-classes-in-netherlands', label: 'Coding in the Netherlands' },
        { href: '/ai-and-python-academy-netherlands', label: 'Academy, Netherlands' },
        { href: '/coding-for-college-students-netherlands', label: 'Coding for students' },
        { href: '/coding-and-ai-classes-for-adults-netherlands', label: 'Coding for adults' }
      ] },
      { h4: 'Full stack', links: [
        { href: '/python-classes-netherlands', label: 'Python classes' },
        { href: '/java-classes-netherlands', label: 'Java classes' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Teaching developers in the Netherlands on CET and CEST'
  },

  personalityCss: `
.ag-root.ag-fsn .ag-hero-grid { gap: clamp(1.25rem, 3.3vw, 2.9rem); }
.ag-root.ag-fsn .ag-hero h1 { letter-spacing: -0.021em; }
.ag-root.ag-fsn .ag-capsule { border-left-width: 4px; }
.ag-root.ag-fsn .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-fsn .ag-band-head h3 { letter-spacing: -0.008em; }
.ag-root.ag-fsn .ag-table caption { text-align: left; }
.ag-root.ag-fsn .ag-spec dt { letter-spacing: 0.1em; }
.ag-root.ag-fsn .ag-slots { gap: 1.25rem; }
`,

  mustMention: ['UWV', '18 December 2025', 'ROA', '371,500', 'Very tight', 'almost 545 thousand', '53,500', '32,900', '32 of the 112']
};
