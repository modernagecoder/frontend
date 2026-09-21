'use strict';
// Full stack software development course, UK (ag- language and track door; UK cluster Phase 3).
// Sources, read raw on 21 September 2026:
//  - GOV.UK Service Manual, Service Standard (first published 29 June 2016, updated 7 June 2019): "The Service
//    Standard helps teams to create and run great public services."; the 14 points by title.
//  - Service Standard point 12, Make new source code open (updated 30 May 2022): "write code in the open from the
//    start, and publish it in an open repository - minus any sensitive information, like secret keys and
//    credentials".
//  - Service Standard point 5, Make sure everyone can use the service (updated 30 May 2022): "Inclusive,
//    accessible services are better for everyone."; teams should "meet accessibility standards, including both
//    online and offline parts".
//  - gov.uk, Understanding accessibility requirements for public sector bodies (first published 9 May 2018,
//    updated 30 September 2024): "At least 1 in 5 people in the UK have a long term illness, impairment or
//    disability."; SocITM study: "4 in 10 local council homepages failed basic tests for accessibility";
//    common problems quoted; regulations in force for public sector bodies on 23 September 2018; perceivable,
//    operable, understandable and robust; legal requirement met by WCAG 2.2 AA plus an accessibility statement;
//    full name of the regulations; "All UK service providers have a legal obligation to make reasonable
//    adjustments under the Equality Act 2010 or the Disability Discrimination Act 1995 (in Northern Ireland)."
//  - GOV.UK Design System home page: "Use this design system to make government services consistent with GOV.UK.
//    Learn from the research and experience of other service teams and avoid repeating work that's already been
//    done."
//  - Our course JSONs: accessibility is taught in the teen full stack, teen frontend, adult full stack, MERN and
//    React courses (checked by meta.slug).
// Spine: the UK government publishes how it builds for the web. Its Service Standard asks teams to code in the
// open and make services everyone can use, and for public sector sites the accessibility bar (WCAG 2.2 AA plus
// a statement) is law. The course treats that published standard as a free syllabus for full stack quality. No
// affiliation with GDS or GOV.UK is claimed, and no GOV.UK branding is imitated. The Ireland page's CSO labour
// market figures are not repeated.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'guide', tag: 'FULL STACK', blurb: 'Full stack development in the UK: the Service Standard the government publishes, WCAG 2.2 AA accessibility law, and a live React and Node course.' },
  slug: 'full-stack-software-development-course-uk',
  code: 'fsu',
  accent: '#223935',
  accentRationale: 'Full stack software development, UK: a deep slate-green from the solver (10.0:1 on every paper tint, dE 7.3 from the nearest used accent), deliberately unlike any government palette',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Full stack software development course, UK',
  title: 'Full Stack Software Development Course, UK | Live Online',
  description: 'A live full stack course in the UK for teens and adults: React, Node and databases, built to the accessibility and openness standards UK public services publish.',
  ogDescription: 'At least 1 in 5 people in the UK have a long term illness, impairment or disability. A full stack developer who cannot build for them is only half finished.',
  twitterDescription: 'Full stack development for UK learners: front end, back end, databases and deployment, with WCAG 2.2 AA accessibility built in. First class free.',
  pageName: 'Full Stack Software Development Course in the UK',
  webPageDescription: 'A live online full stack software development course for UK teenagers and adults, using the published GOV.UK Service Standard and accessibility requirements as a quality bar.',
  courseDescription: 'Live online full stack development for UK learners: HTML, CSS, JavaScript and TypeScript, React, Node and Express, SQL and MongoDB, authentication, testing, deployment and accessibility to WCAG 2.2 AA.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Full stack development',
  navLinks: [
    { href: '#standard', label: 'A published standard' },
    { href: '#accessibility', label: 'Accessibility' },
    { href: '#stack', label: 'The stack' },
    { href: '#open', label: 'Working in the open' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'UK &middot; Teens and adults &middot; Front end to database',
  h1: 'Full stack software development course in the UK',
  lede: 'Most full stack courses measure success by whether the app runs. The UK government publishes a stricter test for its own web services, and anyone can read it. Its Service Standard sets 14 points, among them "Make sure everyone can use the service" and "Make new source code open", and its guidance on accessibility is blunt about why the first matters: "At least 1 in 5 people in the UK have a long term illness, impairment or disability". For public sector websites, meeting the Web Content Accessibility Guidelines at level WCAG 2.2 AA, and publishing an accessibility statement, is how a site meets the legal requirement; the same guidance reports a study that found "4 in 10 local council homepages failed basic tests for accessibility". Our course trains UK teenagers and adults to build complete web applications, front end, back end and database, and treats that published standard as the quality bar: keyboard-navigable interfaces, readable contrast, real HTML forms, code kept in the open without its secrets.',
  secondaryCta: { href: '#accessibility', label: 'What accessibility requires' },
  wa: 'Hello Modern Age Coders, I would like a free first full stack development class in the UK.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; full stack, accessible by design',
  spec: [
    ['Front end', 'HTML, CSS, JavaScript, React'],
    ['Back end', 'Node and Express, APIs'],
    ['Data', 'SQL and MongoDB'],
    ['Quality bar', 'WCAG 2.2 AA accessibility'],
    ['Practice', 'Code in the open, secrets out'],
    ['For', 'Teens 13 to 18 and adults'],
    ['Group', 'Five to ten, or one to one'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'The GOV.UK Service Standard, published by the government for teams building public services, has 14 points, including making sure everyone can use a service, creating a secure service that protects privacy, choosing the right tools and technology, and making new source code open. Accessibility regulations have applied to public sector websites since 23 September 2018, and a site meets the legal requirement by meeting WCAG 2.2 AA and publishing an accessibility statement; all UK service providers also have a duty to make reasonable adjustments under the Equality Act 2010, or the Disability Discrimination Act 1995 in Northern Ireland. Modern Age Coders teaches full stack development live and online to UK teenagers and adults, covering HTML, CSS, JavaScript and TypeScript, React, Node and Express, SQL and MongoDB, testing and deployment, with accessibility and open, secret-free repositories built into every project. We have no connection with GOV.UK or the Government Digital Service. The first class is free; afterwards a group place is USD 100 a month and one-to-one lessons USD 150 a month.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three ways into full stack development',
    lede: 'A full stack course for teenagers, one for adults, and the MERN stack. Each card opens the full syllabus.',
    items: [
      { course: 'full-stack-web-development-teens-masterclass', code: 'FSU / 01', title: 'Full Stack for Teens', note: 'React and Node.js for ages 13 to 18, with keyboard use and accessibility part of every project.' },
      { course: 'full-stack-web-development-masterclass-college', code: 'FSU / 02', title: 'Full Stack for Adults', note: 'React, Node.js and DevOps basics for university students, graduates and career switchers.' },
      { course: 'mern-stack-development-masterclass-college', code: 'FSU / 03', title: 'MERN Stack', note: 'MongoDB, Express, React and Node, ending with an accessible web application.' }
    ]
  },

  sections: [
    {
      id: 'standard', tint: 'tint', eyebrow: 'A published standard',
      h2: 'The standard UK public services publish for building on the web',
      lede: 'The GOV.UK Service Manual introduces it in one line: "The Service Standard helps teams to create and run great public services." Several of its 14 points are, in practice, a full stack developer\'s checklist.',
      body: [
        { kind: 'table', caption: 'Six of the 14 Service Standard points, and what each means for a developer', head: ['Point', 'Title', 'In a full stack project'], rows: [
          ['5', 'Make sure everyone can use the service', 'Keyboard navigation, readable contrast, meaningful labels, screen reader testing'],
          ['9', 'Create a secure service which protects users\' privacy', 'Hashed passwords, validated input, least data collected, HTTPS throughout'],
          ['11', 'Choose the right tools and technology', 'A stack chosen for the problem, not for fashion, and a reason written down'],
          ['12', 'Make new source code open', 'A public repository from day one, with secrets kept out of it'],
          ['13', 'Use and contribute to open standards, common components and patterns', 'Reusing well-tested components instead of rebuilding them'],
          ['14', 'Operate a reliable service', 'Tests, error handling, logging and a deployment that can be repeated']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why a private learner should care',
          left: [
            'The Service Standard is written for government teams, and nobody outside government is bound by it. It is simply one of the clearest public descriptions of what good web software looks like, free to read and backed by years of use.',
            'The other eight points cover understanding users, solving whole problems, joining up channels, simplicity, multidisciplinary teams, agile working, iterating, and publishing performance data.'
          ],
          rightH3: 'Components with research behind them',
          right: [
            'The GOV.UK Design System invites teams to "Learn from the research and experience of other service teams and avoid repeating work that\'s already been done." Studying why its form patterns are built the way they are is a free lesson in accessible interface design.',
            'We teach from the principles, not the branding: student projects use their own designs, never an imitation of GOV.UK.'
          ] },
        { kind: 'source', html: 'Sources, read 21 September 2026: <a class="ag-inline-link" href="https://www.gov.uk/service-manual/service-standard" rel="noopener" target="_blank">GOV.UK Service Manual, Service Standard</a>; <a class="ag-inline-link" href="https://design-system.service.gov.uk/" rel="noopener" target="_blank">GOV.UK Design System</a>. Modern Age Coders has no connection with GOV.UK or the Government Digital Service.' }
      ]
    },
    {
      id: 'accessibility', tint: 'deep', eyebrow: 'Accessibility',
      h2: 'WCAG 2.2 AA: the accessibility bar in UK law for public sector sites',
      lede: 'From gov.uk\'s guidance on accessibility requirements for public sector bodies, first published in 2018 and updated on 30 September 2024.',
      body: [
        { kind: 'table', caption: 'What the guidance says', head: ['Point', 'As published'], rows: [
          ['Who it affects', '"At least 1 in 5 people in the UK have a long term illness, impairment or disability"'],
          ['In force', 'For public sector bodies from 23 September 2018'],
          ['The regulations', 'The Public Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018'],
          ['Meeting the requirement', 'Meet WCAG 2.2 AA and publish an accessibility statement'],
          ['The four principles', 'Perceivable, operable, understandable and robust'],
          ['Everyone else', '"All UK service providers have a legal obligation to make reasonable adjustments under the Equality Act 2010 or the Disability Discrimination Act 1995 (in Northern Ireland)."']
        ] },
        { kind: 'table', mt: true, caption: 'The common problems the guidance names, and the full stack fix for each', head: ['Common problem', 'The fix, in code'], rows: [
          ['Websites that are not easy to use on a mobile', 'Responsive layouts tested at phone width, not just shrunk'],
          ['Websites that cannot be navigated using a keyboard', 'Real buttons and links, a visible focus state, a logical tab order'],
          ['Inaccessible PDF forms that screen readers cannot read', 'HTML forms with labels, error messages tied to fields, and server-side validation'],
          ['Poor colour contrast that makes text difficult to read', 'Contrast checked against WCAG thresholds as part of the build']
        ] },
        { kind: 'p', mt: true, html: 'The guidance puts the scale of the problem plainly: "Most public sector websites and mobile apps do not currently meet accessibility requirements", citing the finding that "4 in 10 local council homepages failed basic tests for accessibility". A developer who can build accessible interfaces from the start is solving a problem that large organisations still have.' },
        { kind: 'source', html: 'Source, read 21 September 2026: <a class="ag-inline-link" href="https://www.gov.uk/guidance/accessibility-requirements-for-public-sector-websites-and-apps" rel="noopener" target="_blank">gov.uk, Understanding accessibility requirements for public sector bodies</a>, updated 30 September 2024. This page is not legal advice; private organisations should take their own advice on the Equality Act.' }
      ]
    },
    {
      id: 'stack', tint: 'tint', eyebrow: 'The stack',
      h2: 'Front end, back end and database, taught as one system',
      lede: 'Full stack means understanding how a click in a browser becomes a query in a database and comes back as a page, and being able to build every step.',
      body: [
        { kind: 'table', caption: 'The layers, and where each is taught', head: ['Layer', 'What you learn', 'Course'], rows: [
          ['Structure and style', 'Semantic HTML, CSS layout, responsive design', 'HTML and CSS, Frontend for Teens'],
          ['Behaviour', 'JavaScript, then TypeScript for larger codebases', 'JavaScript for Teens, TypeScript'],
          ['Interface', 'React components, state, forms and routing', 'React, the full stack courses'],
          ['Server', 'Node and Express, REST APIs, authentication', 'Backend for Teens, full stack courses'],
          ['Data', 'Relational design with SQL; document stores with MongoDB', 'MySQL, MERN'],
          ['Quality', 'Testing, accessibility checks, logging', 'Every course, every project'],
          ['Delivery', 'Git, deployment and environment variables', 'Git and GitHub, full stack courses']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'A booking app', p: 'Slots, sign-ups and confirmations for a club or tutor, with accessible forms and a database behind them.' },
          { h3: 'A community noticeboard', p: 'Posts, moderation and accounts, with passwords hashed and only necessary data stored.' },
          { h3: 'An open data dashboard', p: 'Public data fetched through an API and presented with charts that also work as tables for screen readers.' }
        ] },
        { kind: 'p', mt: true, html: 'Mobile apps usually talk to exactly this kind of back end; our <a class="ag-inline-link" href="/app-development-course-uk">app development course</a> covers the phone side. Security on the server connects to the <a class="ag-inline-link" href="/cyber-security-course-for-teens-uk">cyber security course for teens</a>.' }
      ]
    },
    {
      id: 'open', tint: '', eyebrow: 'Working in the open',
      h2: 'Code in the open, secrets out',
      lede: 'Service Standard point 12 asks teams to "write code in the open from the start, and publish it in an open repository - minus any sensitive information, like secret keys and credentials". It is a good habit for any learner.',
      body: [
        { kind: 'two',
          leftH3: 'Why public repositories help learners',
          left: [
            'A public repository with a readable history shows how you work, not just what you finished. It is also the easiest way for a teacher to read your code between lessons.',
            'Every student keeps projects in their own GitHub account, so the work stays theirs.'
          ],
          rightH3: 'Keeping secrets out',
          right: [
            'The hard part of point 12 is the exception: keys, passwords and connection strings must never reach the repository. Students learn environment variables, ignore files and what to do if a secret leaks.',
            'It is the kind of mistake that is cheap to learn in class and expensive to learn at work.'
          ] },
        { kind: 'table', mt: true, caption: 'Which route fits which learner', head: ['You are', 'A sensible route'], rows: [
          ['A teenager new to code', 'HTML, CSS and JavaScript, then Full Stack for Teens'],
          ['A teenager who already codes', 'Frontend or Backend for Teens, then the full stack course'],
          ['An adult career switcher', 'Full Stack for Adults, from HTML to deployment'],
          ['A developer adding a skill', 'React, TypeScript or MERN on their own'],
          ['A student aiming at a degree apprenticeship', 'Full stack plus Git, for the software engineering option']
        ] },
        { kind: 'p', mt: true, html: 'Learners heading for a software degree apprenticeship can read how the route works on <a class="ag-inline-link" href="/coding-before-a-degree-apprenticeship-uk">coding before a degree apprenticeship</a>. We never work on coursework, NEA or assessed projects.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'Four stages to full stack',
    lede: 'Where you start depends on what you can already build, not on age.',
    table: { caption: 'From first page to a deployed application', head: ['Stage', 'What should be true'], rows: [
      ['1. Pages', 'You build accessible, responsive pages with semantic HTML and CSS'],
      ['2. Interfaces', 'You write JavaScript and React components with forms that work by keyboard'],
      ['3. Servers and data', 'You build an API with Node and Express and store data safely in a database'],
      ['4. Deployed and maintained', 'A tested application runs online from an open repository with its secrets kept out']
    ] },
    left: { h3: 'Stage two is where accessibility lives', ps: [
      'Most accessibility failures are interface failures, fixed in the component, not afterwards.',
      'The wider sequence of subjects is on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Stage four is a habit', ps: [
      'Deployment, logging and fixing things after launch are part of the job.',
      'A site that goes live is the point where real users start finding the bugs.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'The full stack catalogue: nine courses',
    lede: 'Front end, back end and the practice around them.',
    bands: [
      { num: 'I', h3: 'Front end', sub: 'What the user sees', courses: [
        { code: 'FSU / FE / 01', slug: 'html-css-course-for-beginners-build-real-websites', title: 'HTML and CSS', blurb: 'Responsive websites from the first tag.' },
        { code: 'FSU / FE / 02', slug: 'frontend-development-masterclass-for-teens', title: 'Frontend for Teens', blurb: 'CSS craft to React, ending with accessibility.' },
        { code: 'FSU / FE / 03', slug: 'react-js-complete-masterclass-college', title: 'React', blurb: 'JavaScript to production React, for adults.' }
      ] },
      { num: 'II', h3: 'Back end and data', sub: 'What happens on the server', courses: [
        { code: 'FSU / BE / 01', slug: 'backend-coding-masterclass-for-teens', title: 'Backend for Teens', blurb: 'Node, APIs and databases.' },
        { code: 'FSU / BE / 02', slug: 'complete-typescript-programming-masterclass-college', title: 'TypeScript', blurb: 'Typed JavaScript, React and Node.' },
        { code: 'FSU / BE / 03', slug: 'mysql-database-complete-masterclass-college', title: 'MySQL Databases', blurb: 'Relational design and SQL.' }
      ] },
      { num: 'III', h3: 'Practice', sub: 'Around the code', courses: [
        { code: 'FSU / PR / 01', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub for Teens', blurb: 'Open repositories, done properly.' },
        { code: 'FSU / PR / 02', slug: 'git-github-version-control-course-for-college-students', title: 'Git and GitHub for Adults', blurb: 'Branches, reviews and history.' },
        { code: 'FSU / PR / 03', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'Cybersecurity for Teens', blurb: 'Why the server must be defended.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live lessons on UK time',
    lede: 'The team teaches from India, which has no daylight saving. That gap is four and a half hours while British Summer Time runs and five and a half in winter, which leaves UK afternoons, weeknights and weekends open for lessons.',
    slots: [
      { time: 'Weekday late afternoon', l: 'Teen groups, once homework allows.' },
      { time: 'Weeknight', l: 'Adult learners fitting code around a job.' },
      { time: 'Saturday or Sunday', l: 'Two-hour blocks for wiring front end to back end.' }
    ],
    cells: [
      { h3: 'A free first class', p: 'We check your level and choose a route through the stack with you.' },
      { h3: 'Small groups', p: 'Five to ten learners of similar age and level.' },
      { h3: 'One to one', p: 'For a career switch deadline or a faster pace.' },
      { h3: 'Accessibility checked', p: 'Every project is tried with a keyboard and checked for contrast before it counts as done.' },
      { h3: 'Your repository', p: 'Projects live in your own GitHub account, with secrets kept out.' },
      { h3: 'Code read closely', p: 'A teacher reads your front end and back end and explains what to change.' }
    ]
  },

  projectsH2: 'Web applications and projects from our students',
  projectsLede: 'Four finished projects by our students. The rest, from every age group, are in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Reviews our students and their families left on Google, word for word.',

  fees: {
    h2: 'Fees for full stack development',
    lede: 'Priced per month in US dollars at a single rate for all learners outside India. Nothing is charged to join, and each month stands alone. Hosting for deployed projects can usually run on free tiers.',
    free: ['A look at what you can already build', 'A route through the stack', 'Nothing to pay on the day'],
    group: ['Five to ten learners at one level', 'The same teacher each week', 'Accessibility checks on every project', 'Stop at the end of any month'],
    one: ['A teacher for you alone', 'Built around your own project', 'Paced to your goal']
  },

  faq: {
    eyebrow: 'Questions about full stack development',
    h2: 'What UK learners ask about full stack',
    items: [
      { q: 'What does full stack mean?', a: 'Building every layer of a web application: the interface in the browser, the server and API behind it, and the database that stores its data.' },
      { q: 'What is the GOV.UK Service Standard?', a: 'A set of 14 points the government publishes for teams building public services, including making sure everyone can use a service and making new source code open. Private learners can read it freely.' },
      { q: 'Is website accessibility a legal requirement in the UK?', a: 'For public sector websites, the accessibility regulations have applied since 23 September 2018, and meeting WCAG 2.2 AA with an accessibility statement meets the requirement. All UK service providers also have a reasonable adjustments duty under the Equality Act 2010, or the Disability Discrimination Act 1995 in Northern Ireland.' },
      { q: 'How many people does accessibility affect?', a: 'gov.uk\'s guidance says at least 1 in 5 people in the UK have a long term illness, impairment or disability, and many more have a temporary one.' },
      { q: 'Which languages does the course use?', a: 'HTML, CSS and JavaScript, then TypeScript for larger projects, with Node and Express on the server and SQL or MongoDB for data.' },
      { q: 'Can a teenager learn full stack?', a: 'Yes. Our teen full stack course, with React and Node.js, starts from absolute beginner for ages 13 to 18.' },
      { q: 'Are you connected with GOV.UK?', a: 'No. We use the published Service Standard and accessibility guidance as a quality bar, and have no connection with GOV.UK or the Government Digital Service.' },
      { q: 'Do you help with coursework?', a: 'No. We never work on coursework, NEA or anything submitted for assessment.' },
      { q: 'What does it cost?', a: 'The first class is free. After that it is USD 100 a month in a group or USD 150 a month one to one, with no enrolment fee.' },
      { q: 'What times can I book?', a: 'Late weekday afternoons for teenagers, weeknights for adults, or a weekend block, set in UK time during the free class. India runs four and a half hours ahead of British Summer Time and five and a half ahead of winter time.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Apps, security, and the routes into software work.',
    items: [
      { href: '/app-development-course-uk', label: 'App development course', p: 'The phone side of the same back end.' },
      { href: '/cyber-security-course-for-teens-uk', label: 'Cyber security for teens', p: 'Defending what you build.' },
      { href: '/java-classes-uk', label: 'Java classes in the UK', p: 'Another back-end language.' },
      { href: '/coding-before-a-degree-apprenticeship-uk', label: 'Coding before a degree apprenticeship', p: 'The software route into work.' },
      { href: '/coding-for-university-students-uk', label: 'Coding for university students', p: 'Projects alongside a degree.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'All our UK pages.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Leave a number and we will call at a UK time that suits you. Tell us what you want to build; the class checks your level and maps a route from front end to database.',
    readFirst: 'Want to look first? The <a class="ag-inline-link" href="/courses">course pages</a> hold each syllabus, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains the method, and <a class="ag-inline-link" href="/student-labs">student labs</a> shows finished builds.',
    note: 'WhatsApp from a UK phone reaches us fastest. Our team works from India, so the number starts +91, and there is no UK office.',
    formNote: 'Free, and you only give a phone number.'
  },

  footer: {
    cols: [
      { h4: 'Web and apps', links: [
        { href: '/app-development-course-uk', label: 'Building mobile apps' },
        { href: '/coding-before-a-degree-apprenticeship-uk', label: 'Degree apprenticeships' },
        { href: '/understand-the-code-dont-copy-paste-uk', label: 'Understanding the code' },
        { href: '/coding-roadmap', label: 'The coding roadmap' }
      ] },
      { h4: 'UK', links: [
        { href: '/coding-classes-in-united-kingdom', label: 'UK coding classes' },
        { href: '/coding-for-university-students-uk', label: 'University students' },
        { href: '/best-coding-classes-for-adults-uk', label: 'Coding for adults' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Full stack, and usable by everyone'
  },

  personalityCss: `
.ag-root.ag-fsu .ag-hero h1 { letter-spacing: -0.025em; font-weight: 700; }
.ag-root.ag-fsu .ag-capsule { border-left-width: 5px; border-radius: 1px; }
.ag-root.ag-fsu .ag-section-head h2 { max-width: 35ch; }
.ag-root.ag-fsu .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-fsu .ag-table th:first-child { width: 27%; }
.ag-root.ag-fsu .ag-slots { gap: 1.14rem; }
`,

  mustMention: ['Service Standard', '14 points', 'Make new source code open', 'WCAG 2.2 AA', 'accessibility statement', '23 September 2018', '1 in 5', 'Equality Act 2010', 'React', 'Node', 'full stack'],

  dossier: {
    curriculumAuthority: 'United Kingdom, web service standards. GOV.UK Service Manual, Service Standard: "The Service Standard helps teams to create and run great public services."; 14 points. Point 12: "write code in the open from the start, and publish it in an open repository - minus any sensitive information, like secret keys and credentials". Point 5: "Inclusive, accessible services are better for everyone." gov.uk, Understanding accessibility requirements for public sector bodies (updated 30 September 2024): "At least 1 in 5 people in the UK have a long term illness, impairment or disability"; "Most public sector websites and mobile apps do not currently meet accessibility requirements."; "4 in 10 local council homepages failed basic tests for accessibility"; common problems; in force 23 September 2018; WCAG 2.2 AA plus an accessibility statement; regulations\' full name; Equality Act reasonable adjustments duty quoted. GOV.UK Design System: "Learn from the research and experience of other service teams and avoid repeating work that\'s already been done."',
    localProject: 'The UK government publishes how it builds for the web. The page reads six technical points of the GOV.UK Service Standard as a developer checklist, sets out the public sector accessibility requirement (WCAG 2.2 AA plus a statement, 1 in 5 people, 4 in 10 council homepages failing basic tests) with a code fix for each common problem the guidance names, teaches the stack layer by layer, and adopts point 12 (open code, secrets out) as a learner habit. No affiliation with GOV.UK or GDS; no GOV.UK styling. Lesson family: a published public-sector standard used as a free quality bar.',
    requiredMentions: ['Service Standard', 'WCAG 2.2 AA', '1 in 5', 'Make new source code open'],
    sources: [
      { claim: 'GOV.UK Service Manual, Service Standard: purpose line and the 14 points.', url: 'https://www.gov.uk/service-manual/service-standard' },
      { claim: 'Service Standard point 12, Make new source code open: open repository minus secrets.', url: 'https://www.gov.uk/service-manual/service-standard/point-12-make-new-source-code-open' },
      { claim: 'Service Standard point 5, Make sure everyone can use the service.', url: 'https://www.gov.uk/service-manual/service-standard/point-5-make-sure-everyone-can-use-the-service' },
      { claim: 'gov.uk, Understanding accessibility requirements for public sector bodies: 1 in 5, SocITM finding, common problems, dates, WCAG 2.2 AA, statement, Equality Act duty.', url: 'https://www.gov.uk/guidance/accessibility-requirements-for-public-sector-websites-and-apps' },
      { claim: 'GOV.UK Design System home page: learning from other service teams\' research.', url: 'https://design-system.service.gov.uk/' }
    ],
    rejectedClaims: [
      'That private websites must legally meet WCAG 2.2 AA: the guidance ties WCAG to the public sector regulations; for others it states only the Equality Act reasonable adjustments duty, which the page quotes.',
      'Any affiliation with GOV.UK or the Government Digital Service: explicitly denied; no GOV.UK styling used.',
      'UK developer salary or vacancy figures: not read for this build.',
      'The date of the SocITM study: not given in the guidance, so not stated.',
      'Any help with coursework, NEA or assessed projects: refused.'
    ]
  }
};
