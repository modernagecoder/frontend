'use strict';
// App development course, Netherlands (ag- track door, national).
// Spine: the app millions of Dutch people rely on is an identity app. Logius,
// 11 June 2026: DigiD was used 645 million times in 2025, a sharp rise on
// 2024; DigiD Machtigen 16.6 million times; 431 organisations sent more than
// 92 million messages through the MijnOverheid Berichtenbox. Logius,
// 17 August 2026: almost 370 million successful DigiD logins in the first
// half of 2026, almost three quarters of them with the DigiD app, and more
// than half with the app plus ID-check. The lesson for a builder: apps that
// matter are about trust, security and reliability as much as screens. The
// page sells app development from blocks to Flutter, React Native, Kotlin and
// Swift. No claim is made about how DigiD is built.

module.exports = {
  cluster: 'ag',
  slug: 'app-development-course-netherlands',
  code: 'adn',
  accent: '#35366B',
  accentRationale: 'App door: a deep indigo from the solver, nearly thirty units from every page it links to, the teens, adults, full stack and Java doors, the academy hub and both Dutch oranges among them, with an unlinked province page as its nearest neighbour',
  pageType: 'market',
  market: { name: 'Netherlands', iso: 'NL', dial: '+31', lang: 'en-NL', locale: 'en_NL', geoRegion: 'NL', brandTag: 'Netherlands', phonePlaceholder: '6 XXXX XXXX', minDigits: 9 },
  routeLabel: 'App development course, Netherlands',
  title: 'App Development Course in the Netherlands | Live Online',
  description: 'Learn app development in the Netherlands, from a first app to Flutter, React Native, Kotlin and Swift, taught live online in English. First lesson free.',
  ogDescription: 'DigiD was used 645 million times in 2025, mostly through its app. The apps that matter are built on trust as much as screens. App development from blocks to Flutter, live online.',
  twitterDescription: 'Apps from blocks to Flutter, React Native, Kotlin and Swift, live online for learners in the Netherlands. First lesson free.',
  pageName: 'App Development Course in the Netherlands',
  webPageDescription: 'Live online app development courses for children, teenagers and adults in the Netherlands: block-based apps, React Native, Flutter, Kotlin for Android and Swift for iOS, taught with security and reliability in view.',
  courseDescription: 'A live online app development programme for learners in the Netherlands, from block-based apps for children through React Native and Flutter to native Android and iOS development, with data security and reliability taught from the start.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the Netherlands', href: '/coding-classes-in-netherlands' }],
  crumbLabel: 'App development',
  navLinks: [
    { href: '#digid', label: 'An app everyone uses' },
    { href: '#trust', label: 'Built on trust' },
    { href: '#ladder', label: 'The ladder' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Netherlands &middot; App development &middot; Live online',
  h1: 'App development course in the Netherlands',
  lede: 'Ask which app matters most in Dutch daily life and the honest answer is not a game or a social network. It is DigiD, the login for dealing with the government. According to Logius, which runs it, DigiD was used 645 million times in 2025, and in the first half of 2026 almost three quarters of its logins went through the DigiD app. An app like that is judged less by its screens than by whether people can trust it with who they are, whether it works every time and whether it handles their data with care. Those are the qualities that separate a finished app from a demonstration, and they are what we teach alongside the code. This page covers app development for learners in the Netherlands, from a child\'s first block-built app to teenagers in React Native and adults in Flutter, Kotlin and Swift, live online and in English.',
  secondaryCta: { href: '#trust', label: 'What trusted apps teach' },
  wa: 'Hello Modern Age Coders, I would like a free app development lesson in the Netherlands.',
  heroNote: 'Live teaching since 2020 &middot; more than 10,000 students &middot; every app built with a live teacher',
  spec: [
    ['Children', 'Apps built with blocks'],
    ['Teens', 'React Native'],
    ['Adults', 'Flutter, Kotlin, Swift'],
    ['Built in', 'Security and reliability from the start'],
    ['Format', 'Live video with a teacher'],
    ['Groups', 'Five to ten, or one to one'],
    ['Language', 'English'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders teaches app development live online to learners in the Netherlands: children from about eight build real apps with blocks; teenagers build phone apps in React Native; students and adults work in Flutter for both platforms, Kotlin for Android or Swift for iOS. Every course treats the parts users never see, such as how data is stored, what an app asks permission for and what happens when something fails, as part of building the app. Lessons are live and in English, in groups of five to ten or one to one. The first lesson is free; after that a group place is USD 100 a month and private lessons USD 150.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three app courses for three ages',
    lede: 'One for children building their first app, one for teenagers making phone apps, and one for adults building for both Android and iOS. Each card opens its own page.',
    items: [
      { course: 'block-coding-app-development-masterclass', code: 'APP / 01', title: 'App Making for Kids', note: 'Children aged eight to twelve build real apps with blocks, a quiz, a timer, a drawing tool, and show them on a tablet.' },
      { course: 'complete-app-development-masterclass-for-teens', code: 'APP / 02', title: 'App Development for Teens', note: 'Phone apps in React Native, from the first screen to something friends can install, with data handled carefully.' },
      { course: 'complete-flutter-app-development-masterclass-college', code: 'APP / 03', title: 'Flutter Course', note: 'Dart and Flutter for apps that run on both Android and iOS, for students and adults.' }
    ]
  },

  sections: [
    {
      id: 'digid', tint: 'tint', eyebrow: 'An app everyone uses',
      h2: 'The most important app in the Netherlands is an identity app',
      lede: 'The figures below come from two Logius announcements, published on 11 June and 17 August 2026. Logius is the government organisation that runs DigiD.',
      body: [
        { kind: 'table', caption: 'DigiD and MijnOverheid in Logius\'s own figures', head: ['Measure', 'Figure', 'Published'], rows: [
          ['DigiD uses in 2025', '645 million, a sharp rise on 2024', '11 June 2026'],
          ['DigiD Machtigen, acting on someone else\'s behalf, in 2025', '16.6 million times', '11 June 2026'],
          ['Messages through the MijnOverheid Berichtenbox', 'more than 92 million messages from 431 organisations', '11 June 2026'],
          ['Successful DigiD logins, first half of 2026', 'almost 370 million', '17 August 2026'],
          ['Share of those logins with the DigiD app', 'almost three quarters', '17 August 2026'],
          ['Share with the app plus ID-check', 'more than half', '17 August 2026']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The shift is striking. In the first half of 2026, almost three quarters of successful DigiD logins used the app, and more than half used the app with ID-check, an extra verification step users can add so they can log in to organisations that ask for it.',
            'In other words, for most people in the Netherlands the phone has become the place where they prove who they are to their government, their health insurer and their tax office.'
          ],
          right: [
            'We make no claim about how DigiD is built; we have no connection with Logius. What its figures show is that the apps with the greatest reach are not always the flashiest. They are the ones people trust with something that matters, and that work every time they are opened.',
            'That is the standard we hold learners\' apps to, from a child\'s quiz app to an adult\'s Flutter project.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.logius.nl/actueel/digid-gebruik-groeit-naar-645-miljoen-inlogacties" rel="noopener" target="_blank">Logius, DigiD-gebruik groeit naar 645 miljoen inlogacties (11 June 2026)</a>; <a class="ag-inline-link" href="https://www.logius.nl/actueel/ruim-de-helft-van-alle-digid-logins-wordt-gedaan-met-digid-app-en-id-check" rel="noopener" target="_blank">Logius, Ruim de helft van alle DigiD-logins wordt gedaan met DigiD app en ID-check (17 August 2026)</a>. Read 15 September 2026.' }
      ]
    },
    {
      id: 'trust', tint: 'deep', eyebrow: 'Built on trust',
      h2: 'What an app millions rely on teaches a builder',
      lede: 'A learner\'s app will not carry anyone\'s identity. But the habits that matter for DigiD matter for every app, and they are easiest to learn from the start.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Ask for as little as possible', p: 'Every permission and every piece of stored data is a risk. Our learners decide what their app really needs, a location, a contact list, a login, and leave out the rest. An app that knows less has less to lose.' },
          { h3: 'Work every time', p: 'An app opened hundreds of millions of times cannot fail often. Learners test their apps on slow connections, full screens and wrong input, and write down what happens when something goes wrong.' },
          { h3: 'Be clear to everyone', p: 'An app for everyone has to be usable by everyone: readable text, clear buttons, sensible behaviour when the user makes a mistake. Learners review each other\'s apps with that in mind.' }
        ] },
        { kind: 'table', mt: true, caption: 'Which app technology, for which learner', head: ['Technology', 'What it builds', 'Who it suits'], rows: [
          ['Blocks', 'Simple apps on tablets and phones', 'Children aged about 8 to 12'],
          ['React Native', 'Phone apps written in JavaScript', 'Teenagers, and web developers moving to mobile'],
          ['Flutter', 'Apps for Android and iOS from one codebase, in Dart', 'Students and adults who want both platforms'],
          ['Kotlin', 'Native Android apps', 'Learners heading into Android development'],
          ['Swift', 'Native iOS apps', 'Learners heading into iPhone development']
        ] },
        { kind: 'two', mt: true,
          left: [
            'A fourth habit is less visible: keeping secrets out of the code. Beginners often paste a password or an API key straight into their app and then publish the code on GitHub for anyone to read. Our learners keep keys in configuration that is never committed, and they learn why on the first project that talks to an online service.',
            'A fifth is updating. The libraries an app depends on receive security fixes, and an app that is never updated slowly collects known weaknesses.'
          ],
          right: [
            'None of these habits makes an app look better in a screenshot. They are what separates an app a learner shows to friends from one a stranger can safely install, and they cost little to learn early and a great deal to add later.',
            'By the end of the route, a learner can explain for every app they have built what data it holds, where that data is stored and what the app does when a request fails.'
          ] },
        { kind: 'source', html: 'The habits in this section are our teaching practice. They describe no particular app and make no claim about DigiD\'s design.' }
      ]
    },
    {
      id: 'routes', tint: '', eyebrow: 'Routes',
      h2: 'App development for children, teenagers and adults',
      lede: 'The same goal, a finished app people can use, reached at different ages.',
      body: [
        { kind: 'two',
          left: [
            'Children start with blocks and see an app on a real device within weeks; the <a class="ag-inline-link" href="/coding-classes-for-kids-netherlands">kids page</a> covers the wider route.',
            'Teenagers move to React Native, often after some JavaScript; see <a class="ag-inline-link" href="/coding-classes-for-teens-netherlands">coding classes for teens</a>.'
          ],
          right: [
            'Adults and students choose Flutter for both platforms, or Kotlin or Swift for one; see <a class="ag-inline-link" href="/coding-and-ai-classes-for-adults-netherlands">coding and AI classes for adults</a>. Apps with a server behind them connect to the <a class="ag-inline-link" href="/full-stack-software-development-course-netherlands">full stack course</a>.',
            'Kotlin shares much with Java, covered on <a class="ag-inline-link" href="/java-classes-netherlands">Java classes in the Netherlands</a>.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The app ladder',
    h2: 'From a first screen to an app people trust',
    lede: 'Each rung adds something a real app needs. The last two, reliability and publishing, are the ones most courses leave out.',
    table: { caption: 'The app development route', head: ['Rung', 'What the learner can do'], rows: [
      ['1. First app', 'Build a working app with screens, buttons and simple logic'],
      ['2. Real code', 'Write the app in a language: JavaScript, Dart, Kotlin or Swift'],
      ['3. Data', 'Store and fetch data safely, locally or from a server'],
      ['4. Reliability', 'Test on real devices, handle errors and poor connections'],
      ['5. Publishing', 'Prepare an app others can install, with its code in a public repository']
    ] },
    left: { h3: 'Why data comes before polish', ps: [
      'An app that looks good but stores data carelessly is worse than a plain one that handles it well. Learners reach the data rung before they spend time on animations.',
      'The <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a> shows which subjects come before app development and which build on it.'
    ] },
    right: { h3: 'Pace for each group', ps: [
      'Children usually finish a small app every few weeks. Teenagers and adults build one larger app per stage, improving it rung by rung.',
      'One-to-one lessons suit a learner with an app idea of their own and a date in mind.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine live app development courses',
    lede: 'Grouped by age. Every card opens the course page with its schedule and fee, and the free lesson places the learner.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'First apps with blocks', courses: [
        { code: 'APP / KIDS / 01', slug: 'block-coding-app-development-masterclass', title: 'App Making for Kids', blurb: 'Real apps built with blocks for ages eight to twelve.' },
        { code: 'APP / KIDS / 02', slug: 'kids-ai-web-development-course', title: 'Web Development for Kids', blurb: 'A first website, often the step before a first coded app.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Phone apps in code', courses: [
        { code: 'APP / TEEN / 01', slug: 'complete-app-development-masterclass-for-teens', title: 'App Development for Teens', blurb: 'React Native apps from the first screen to an installable app.' },
        { code: 'APP / TEEN / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for Teens', blurb: 'The language behind React Native, learned through interactive projects.' },
        { code: 'APP / TEEN / 03', slug: 'react-for-teens-complete-masterclass', title: 'React for Teens', blurb: 'Components and state, the ideas React Native builds on.' }
      ] },
      { num: 'III', h3: 'Students and adults', sub: 'Both platforms, or one natively', courses: [
        { code: 'APP / PRO / 01', slug: 'complete-flutter-app-development-masterclass-college', title: 'Flutter Course', blurb: 'Dart and Flutter for Android and iOS from one codebase.' },
        { code: 'APP / PRO / 02', slug: 'complete-app-development-masterclass-college', title: 'App Development Course', blurb: 'Flutter, iOS and Android development for students and adults.' },
        { code: 'APP / PRO / 03', slug: 'complete-kotlin-programming-masterclass-professional', title: 'Kotlin and Android Course', blurb: 'Native Android apps in Kotlin, from zero to publish-ready.' },
        { code: 'APP / PRO / 04', slug: 'complete-swift-programming-masterclass-college', title: 'Swift and iOS Course', blurb: 'SwiftUI apps for iPhone, from the first view onwards.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How the classes run',
    h2: 'Building apps live, with a device in hand',
    lede: 'Teachers work from India, which does not change its clocks, so the gap to the Netherlands is three and a half hours in summer and four and a half in winter. Children and teenagers usually learn after school, adults in the evening or at the weekend, at a regular time agreed in the free lesson.',
    slots: [
      { time: 'After school', l: 'Late afternoon, Dutch time, for children and teenagers.' },
      { time: 'Evening', l: 'By arrangement, for students and adults.' },
      { time: 'Weekend', l: 'Saturday or Sunday, good for testing apps on devices.' }
    ],
    cells: [
      { h3: 'A free first lesson', p: 'You build a first screen with a teacher and see it running, and the teacher proposes the right route.' },
      { h3: 'Groups of five to ten', p: 'Learners at the same level from several countries, testing each other\'s apps.' },
      { h3: 'One to one for your own idea', p: 'For a learner with an app idea of their own, a deadline or a specific platform.' },
      { h3: 'Tested on real devices', p: 'Apps are run on phones and tablets, not only in simulators, so real problems show up early.' },
      { h3: 'In English', p: 'The language of the frameworks and the app stores; Dutch school terms are kept for younger learners.' },
      { h3: 'Code kept', p: 'Every app\'s code goes into the learner\'s own GitHub repository.' }
    ]
  },

  projectsH2: 'What our students have built',
  projectsLede: 'Four live projects by our students. More, including apps, on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'As written on Google. We do not write or pay for reviews.',

  fees: {
    h2: 'App development fees',
    lede: 'A single monthly rate in US dollars, identical in every country outside India and for every kind of app. You pay nothing to register and sign no annual contract.',
    free: ['A real lesson building an app', 'A route proposed', 'No card needed'],
    group: ['Five to ten learners at one level', 'The same live teacher each week', 'Apps reviewed every week', 'A certificate at the end'],
    one: ['A teacher for one learner', 'Built around your own app idea', 'Pace set by your goal']
  },

  faq: {
    eyebrow: 'Questions about app development',
    h2: 'What learners in the Netherlands ask about building apps',
    items: [
      { q: 'Which technology should I learn for apps?', a: 'For children, blocks. For teenagers, React Native. For adults who want both Android and iOS, Flutter; for one platform natively, Kotlin or Swift. The free lesson helps decide.' },
      { q: 'Why does this page talk about DigiD?', a: 'Because it is the app most people in the Netherlands depend on. Logius reports 645 million DigiD uses in 2025, and almost three quarters of logins in the first half of 2026 went through the app. It shows that the apps that matter most are built on trust and reliability.' },
      { q: 'Are you connected with DigiD or Logius?', a: 'No. We quote Logius\'s public figures and make no claim about how DigiD is built.' },
      { q: 'Can a child really build an app?', a: 'Yes, from about eight, with blocks. Children see their app running on a real device within weeks.' },
      { q: 'Do I need a Mac for iOS apps?', a: 'For publishing to the App Store, Apple\'s tools require a Mac. Flutter and React Native let learners start on other computers and test on Android first.' },
      { q: 'Will my app be published?', a: 'Many learners prepare their apps for installation by friends and family, and some publish to the stores. The code always goes into the learner\'s own repository.' },
      { q: 'Are lessons in English?', a: 'Yes, like the frameworks and their documentation.' },
      { q: 'What does it cost?', a: 'Once the free trial is over, a seat in a group is USD 100 a month and private lessons USD 150 a month, billed in US dollars. There is no enrolment charge and you can leave at the end of any month.' },
      { q: 'When are lessons held?', a: 'After school, in the evening or at the weekend, Dutch time. Teaching from India, where clocks never change, our staff are three and a half hours ahead in Dutch summer and four and a half in winter.' },
      { q: 'What happens after I send the form?', a: 'We phone back at a reasonable time for the Netherlands and book the trial lesson, where you build a first screen. You pay only if you decide to carry on.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for app builders in the Netherlands',
    lede: 'Pages for each age and for the server side of apps.',
    items: [
      { href: '/full-stack-software-development-course-netherlands', label: 'Full stack software development', p: 'The server and data behind an app.' },
      { href: '/java-classes-netherlands', label: 'Java classes', p: 'The language Kotlin grew from.' },
      { href: '/coding-classes-for-teens-netherlands', label: 'Coding classes for teens', p: 'The teenage route, including apps.' },
      { href: '/coding-classes-for-kids-netherlands', label: 'Coding classes for kids', p: 'The first steps, including block-built apps.' },
      { href: '/coding-and-ai-classes-for-adults-netherlands', label: 'Coding and AI classes for adults', p: 'For adults building apps for work or a new career.' },
      { href: '/ai-and-python-academy-netherlands', label: 'AI and Python Academy, Netherlands', p: 'Five rungs from first Python to working AI, for the whole country.' }
    ]
  },

  start: {
    h2: 'Book a free app development lesson',
    lede: 'Leave your number and someone calls back when it suits a Dutch day. In the first lesson you build a first screen with a teacher, and by the end you will know your route.',
    readFirst: 'Want to look around first? The <a class="ag-inline-link" href="/courses">courses on offer</a>, <a class="ag-inline-link" href="/how-we-teach">our way of teaching</a> and the <a class="ag-inline-link" href="/coding-roadmap">roadmap</a> are a good place to begin.',
    note: 'From a Dutch phone, WhatsApp costs nothing and tends to be quickest. We use an Indian number and have no office or premises in the Netherlands.',
    formNote: 'No card, no commitment. One call to arrange the lesson.'
  },

  footer: {
    cols: [
      { h4: 'Netherlands', links: [
        { href: '/coding-classes-in-netherlands', label: 'Coding in the Netherlands' },
        { href: '/ai-and-python-academy-netherlands', label: 'Academy, Netherlands' },
        { href: '/full-stack-software-development-course-netherlands', label: 'Full stack' },
        { href: '/java-classes-netherlands', label: 'Java classes' }
      ] },
      { h4: 'Apps', links: [
        { href: '/coding-classes-for-teens-netherlands', label: 'Coding for teens' },
        { href: '/coding-classes-for-kids-netherlands', label: 'Coding for kids' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Teaching app builders in the Netherlands on CET and CEST'
  },

  personalityCss: `
.ag-root.ag-adn .ag-hero-grid { gap: clamp(1.25rem, 3.2vw, 2.8rem); }
.ag-root.ag-adn .ag-hero h1 { letter-spacing: -0.02em; }
.ag-root.ag-adn .ag-capsule { border-left-width: 5px; }
.ag-root.ag-adn .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-adn .ag-band-head h3 { letter-spacing: -0.007em; }
.ag-root.ag-adn .ag-table caption { text-align: left; }
.ag-root.ag-adn .ag-spec dt { letter-spacing: 0.11em; }
.ag-root.ag-adn .ag-slots { gap: 1.2rem; }
`,

  mustMention: ['DigiD', 'Logius', '645 million', '11 June 2026', 'almost 370 million', 'almost three quarters', 'ID-check', '17 August 2026', '16.6 million', '431 organisations', 'Berichtenbox']
};
