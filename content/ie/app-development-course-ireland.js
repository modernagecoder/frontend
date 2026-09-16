'use strict';
// App development course, Ireland (ag- door, Ireland cluster, Phase 2). Facts
// read at primary sources on 16 September 2026: gov.ie on the COVID Tracker
// app (source code published 26 June 2020 on the HSEIreland GitHub, before the
// app was released on 7 July 2020 on the App Store and Google Play; testing
// "was able to accurately detect 72% of close contacts using the Google Apple
// API"; 82% of the population said they would be willing to install a contact
// tracing app; on 2 October 2020 "nearly 2 million" downloads with an active
// user base of 1.3 million, 34% of the adult population aged 16 and over; the
// code was reused abroad as COVID Green in several US states and other
// jurisdictions through the Linux Foundation; the app left the stores on 30
// June 2023 and was switched off at the start of August 2023; it was co-funded
// by the European Union). The repository itself: covid-tracker-app, React
// Native for iOS and Android, primary language TypeScript, MIT licence,
// archived. The full stack page owns the backend repository, so this page does
// not repeat Fastify or PostgreSQL. TFI Live: launched 20 February 2023,
// replacing two earlier apps, real-time departures across operators, no account
// required, and the undated figures displayed on its page (over 1.5 million
// downloads, 400,000 daily users, over 1,600 timetables and routes), plus its
// own note that it still depends on operator systems. CSO: 96% of internet
// users aged 16 and over used a mobile phone or smartphone to go online in
// 2023, the latest year in the device table, with 100% at 30 to 44, 97% at 45
// to 59 and 92% at 60 to 74; 95% of households had internet in 2025, 87% fixed
// broadband and 29% mobile broadband; banking 94% and social networking 75% in
// 2025, with apps included in those activity figures. HSE Health App: over
// 125,000 registered and more than 210,000 downloads as of 5 January 2026, for
// ages 16 and over; its launch date is not stated, so none is printed.

module.exports = {
  cluster: 'ag',
  clusterName: 'Ireland',
  hub: { group: 'guide', tag: 'APP DEVELOPMENT', blurb: 'Building and shipping real mobile apps, with two Irish public apps read as worked examples.' },
  slug: 'app-development-course-ireland',
  code: 'adi',
  accent: '#952755',
  accentRationale: 'App development, Ireland: a deep raspberry from the solver, separated from both Irish greens and every other Ireland page',
  pageType: 'market',
  market: { name: 'Ireland', iso: 'IE', dial: '+353', lang: 'en-IE', locale: 'en_IE', geoRegion: 'IE', brandTag: 'Ireland', phonePlaceholder: '87 123 4567', minDigits: 7 },
  routeLabel: 'App development course, Ireland',
  title: 'App Development Course in Ireland | Live Online',
  description: 'An app development course for learners in Ireland: build, test and publish a real mobile app, with Irish public apps read as worked examples. First class free.',
  ogDescription: 'Ireland published the full source code of its COVID Tracker app. Reading a real shipped app teaches more than any tutorial.',
  twitterDescription: 'Live online app development for learners in Ireland: design, build, test and publish a real app. First class free.',
  pageName: 'App Development Course in Ireland',
  webPageDescription: 'An app development course for learners in Ireland: what Irish public apps show about building for phones, how many people here actually use them, and live online classes that end with a published app.',
  courseDescription: 'Live online app development classes for learners in Ireland, from block-based first apps for children to cross-platform and native development for teenagers, students and adults, ending in a published app.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Ireland', href: '/coding-classes-in-ireland' }],
  crumbLabel: 'App development, Ireland',
  navLinks: [
    { href: '#open', label: 'An Irish app in the open' },
    { href: '#live', label: 'An app people use daily' },
    { href: '#phones', label: 'Ireland on phones' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Ireland &middot; Mobile apps &middot; Ages 8 to adult',
  h1: 'App development course in Ireland',
  lede: 'Almost nobody learning to build apps ever sees a real one from the inside. Ireland is unusual here: when the State built its COVID Tracker app, it published the source code on GitHub on 26 June 2020, eleven days before the app itself appeared on the App Store and Google Play. Anyone can still read it. That single decision makes this country a better place to learn app development than most, because the gap between a tutorial app and a shipped one, the permissions, the privacy notices, the testing, the updates, the eventual retirement, is exactly where beginners are usually left guessing. This page uses two Irish public apps as worked examples, sets out what the national figures say about how people here actually use their phones, and explains how our classes take a learner from an idea to something published.',
  secondaryCta: { href: '#open', label: 'Read a shipped Irish app' },
  wa: 'Hello Modern Age Coders, I am in Ireland and would like a free first class on app development.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; apps finished, not just started',
  spec: [
    ['For', 'Ages 8 to adult'],
    ['Builds', 'A real app, published'],
    ['Covers', 'Design, code, test, release'],
    ['Platforms', 'Android and iOS'],
    ['Group', 'Five to ten at one level'],
    ['Or', 'One to one'],
    ['Hours', 'After school and evenings, Irish time'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'App development is taught here as the whole job: decide what the app is for, design screens that make sense, write the code, test it on real devices, publish it, then keep it working. Children start with block-based apps, teenagers and adults build cross-platform apps with real data behind them. Ireland gives us unusually good material, because the code of a nationally used app is public and readable. Classes are live, in groups of five to ten at one level or one to one. The first is free, then USD 100 a month in a group or USD 150 a month one to one.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three ways to build an app',
    lede: 'For younger builders, for teenagers, and for students and adults who want a professional stack. Each card opens the syllabus.',
    items: [
      { course: 'complete-app-development-masterclass-for-teens', code: 'APP / 01', title: 'App Development for Teens', note: 'A complete phone app designed by the student, built over a few months and put in the hands of friends and family.' },
      { course: 'complete-app-development-masterclass-college', code: 'APP / 02', title: 'App Development Masterclass', note: 'For college students and adults: a cross-platform app with real data, proper navigation, testing and a release process.' },
      { course: 'complete-flutter-app-development-masterclass-college', code: 'APP / 03', title: 'Flutter Masterclass', note: 'One codebase for Android and iOS, the approach many small teams choose when they cannot maintain two apps.' }
    ]
  },

  sections: [
    {
      id: 'open', tint: 'tint', eyebrow: 'An Irish app in the open',
      h2: 'The COVID Tracker app, still readable today',
      lede: 'It is the most widely used Irish app whose code is public, and it is a full course in itself. These are the facts as the State published them.',
      body: [
        { kind: 'table', caption: 'The COVID Tracker app, from gov.ie and its public repository', head: ['Event or detail', 'What was published'], rows: [
          ['Source code', 'Released on 26 June 2020 on a GitHub site under the HSEIreland organisation, before launch'],
          ['Launch', '7 July 2020, on the App Store and Google Play'],
          ['How it was built', 'React Native, targeting iOS and Android, with TypeScript as the repository\'s main language, under an MIT licence'],
          ['Detection testing', 'Testing showed the app "was able to accurately detect 72% of close contacts using the Google Apple API"'],
          ['Uptake', 'By 2 October 2020, "nearly 2 million" downloads and an active user base of 1.3 million, which the Department put at 34% of adults'],
          ['Reuse abroad', 'The code was released as COVID Green through the Linux Foundation and used by other jurisdictions, including several US states'],
          ['Retirement', 'Removed from the stores on 30 June 2023 and switched off completely at the start of August 2023']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Publishing code is a decision', p: 'The Department framed it as transparency: the code "provides complete transparency in relation to how the app functions" for people who can read it. Being one of those people is a real form of citizenship.' },
          { h3: 'A number worth understanding', p: 'The 72% detection figure is not a flaw hidden in a footnote. It is a measured limitation, published before launch. Students learn to look for that number in any system.' },
          { h3: 'Apps end', p: 'This one had a retirement date, a plan and an announcement. Most tutorials never mention that an app is a thing you must eventually switch off.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'In class, learners read the repository rather than admire it: how screens are organised, where settings live, how the project is configured for two platforms from one codebase.',
            'It is archived, so it is a 2020 codebase. Reading older code and saying what you would do differently now is a professional skill, and a satisfying one.'
          ],
          right: [
            'The server side of the same system was published separately and is covered on our <a class="ag-inline-link" href="/full-stack-software-development-course-ireland">full stack page</a>.',
            'One more detail worth noticing: before launch, the State reported that 82% of the population said they would be willing to install a contact tracing app. Stated intention and actual installs are different things, and comparing the two is a good lesson in reading claims about adoption.'
          ] },
        { kind: 'source', html: 'Sources, read 16 September 2026: <a class="ag-inline-link" href="https://www.gov.ie/en/department-of-health/services/covid-tracker-app/" rel="noopener" target="_blank">gov.ie, COVID Tracker app</a>; <a class="ag-inline-link" href="https://www.gov.ie/en/department-of-health/press-releases/department-of-health-and-the-hse-announce-the-publication-of-the-covid-tracker-app-data-protection-impact-assessment-and-source-code/" rel="noopener" target="_blank">publication of the source code, 26 June 2020</a>; <a class="ag-inline-link" href="https://www.gov.ie/en/department-of-health/press-releases/minister-for-health-welcomes-launch-of-contact-tracing-apps-in-new-york-and-new-jersey-based-on-the-irish-contact-tracing-app/" rel="noopener" target="_blank">uptake and reuse, 2 October 2020</a>; the repository <a class="ag-inline-link" href="https://github.com/HSEIreland/covid-tracker-app" rel="noopener" target="_blank">HSEIreland/covid-tracker-app</a>. We have no connection with the HSE or the Department of Health.' }
      ]
    },
    {
      id: 'live', tint: 'deep', eyebrow: 'An app people use daily',
      h2: 'TFI Live, and the hard part of any app',
      lede: 'The transport app most people in Ireland have on their phone shows a truth that no tutorial conveys: the code is rarely the difficult part.',
      body: [
        { kind: 'two',
          leftH3: 'What it is',
          left: [
            'TFI Live launched on 20 February 2023, replacing two earlier apps, and gives real-time departures across Bus Éireann, Dublin Bus, Go-Ahead Ireland, Luas and Iarnród Éireann, with journey planning across licensed operators. No account is needed to use those features.',
            'Its own page displays over 1.5 million downloads, 400,000 daily users and more than 1,600 timetables and routes. Those figures carry no date on the page, so we quote them as displayed when we read it.'
          ],
          rightH3: 'What it admits',
          right: [
            'The same page says the app "is still reliant on information from numerous systems and business processes within transport operators", even on a more reliable platform than before.',
            'That sentence is the whole lesson. An app that shows live information is a thin layer over other people\'s data, and its reputation depends on feeds it does not control. Students design for that: what does the screen show when a feed is late, missing or wrong?'
          ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Design for the bad day', p: 'Every screen gets three states in our classes: loading, empty and broken. Most student apps only ever get the happy path.' },
          { h3: 'Respect the network', p: 'Irish commuters lose signal in tunnels and on trains. Caching and graceful failure are not advanced topics; they are the job.' },
          { h3: 'Another public example', p: 'The HSE Health App reported over 125,000 registrations and more than 210,000 downloads in January 2026, and is open to people aged 16 and over.' }
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.transportforireland.ie/available-apps/tfi-live/" rel="noopener" target="_blank">Transport for Ireland, TFI Live</a> and its <a class="ag-inline-link" href="https://www.transportforireland.ie/news/new-tfi-live-app-is-available-now/" rel="noopener" target="_blank">launch announcement</a>; <a class="ag-inline-link" href="https://www.gov.ie/en/department-of-health/press-releases/minister-for-health-welcomes-increase-in-hse-health-app-usage-as-registrations-pass-125000/" rel="noopener" target="_blank">gov.ie on the HSE Health App</a>, read 16 September 2026. We are not connected with either body.' }
      ]
    },
    {
      id: 'phones', tint: 'tint', eyebrow: 'Ireland on phones',
      h2: 'How people in Ireland actually use their phones',
      lede: 'Worth knowing before you design anything. These are the Central Statistics Office\'s figures, with their dates attached, because the device numbers are not annual.',
      body: [
        { kind: 'table', caption: 'Connectivity and devices in Ireland, CSO', head: ['Measure', 'Figure', 'Year'], rows: [
          ['Internet users aged 16 and over who used a mobile phone or smartphone to go online', '96%', '2023, the latest year in the device table'],
          ['The same measure, aged 30 to 44', '100%', '2023'],
          ['Aged 45 to 59', '97%', '2023'],
          ['Aged 60 to 74', '92%', '2023'],
          ['Households with internet access', '95%, mainly fixed broadband at 87%, with 29% using mobile broadband', '2025'],
          ['Internet users doing internet or mobile banking', '94%, up seven percentage points on 2024', '2025'],
          ['Using social networking', '75%', '2025']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The practical conclusion is blunt: in Ireland you design for a phone first, and for older users as much as younger ones, since even the 60 to 74 group was at 92% in 2023.',
            'Note what we are not doing here. There is no 2024 or 2025 device figure published, so we date the 96% to 2023 rather than implying it is current. That habit matters in a portfolio too.'
          ],
          right: [
            'The banking and social figures include activity through apps, by the CSO\'s own definition, which is why they belong on a page about app development at all.',
            'Younger users and their habits are covered on <a class="ag-inline-link" href="/best-coding-classes-for-teens-ireland">coding classes for teens</a>, and the adult picture on <a class="ag-inline-link" href="/best-coding-classes-for-adults-ireland">coding classes for adults</a>.'
          ] },
        { kind: 'source', html: 'Sources: CSO tables <a class="ag-inline-link" href="https://data.cso.ie/table/ICA101" rel="noopener" target="_blank">ICA101</a> and <a class="ag-inline-link" href="https://data.cso.ie/table/ICA102" rel="noopener" target="_blank">ICA102</a>; <a class="ag-inline-link" href="https://www.cso.ie/en/releasesandpublications/ep/p-isshict/internetcoverageandusageinireland2025/householdinternetconnectivity/" rel="noopener" target="_blank">Internet Coverage and Usage in Ireland 2025</a>; <a class="ag-inline-link" href="https://www.cso.ie/en/releasesandpublications/ep/p-isshdcb/householddigitalconsumerbehaviour2025/internetactivities/" rel="noopener" target="_blank">Household Digital Consumer Behaviour 2025</a>, read 16 September 2026.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The rungs',
    h2: 'Five rungs from idea to published app',
    lede: 'Children move slowly and adults quickly, but nobody skips a rung. Publishing is part of the course, not an optional extra.',
    table: { caption: 'The app route', head: ['Rung', 'What the learner does'], rows: [
      ['1. The idea, narrowed', 'Describes one thing the app does for one kind of person'],
      ['2. Screens that make sense', 'Sketches the flow before writing code, and cuts half of it'],
      ['3. It works', 'Builds the real screens, with data, on a real device'],
      ['4. It survives', 'Handles loading, empty and broken states, and slow connections'],
      ['5. It ships', 'Publishes or distributes it, then fixes what real users find']
    ] },
    left: { h3: 'Which technology?', ps: [
      'Most learners build cross-platform, so one codebase serves Android and iOS. Learners aiming at a specific platform go native instead, and the free class helps decide.',
      'How this fits with everything else is on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'About the app stores', ps: [
      'Publishing to a store needs a developer account, which costs money and, for under-18s, an adult. Many students distribute directly to friends and family instead, which teaches the same lessons.',
      'We are honest about that from the start, so nobody is surprised at the end of a project.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine live courses for app builders',
    lede: 'By age and stage. The free first class decides where a learner begins.',
    bands: [
      { num: 'I', h3: 'Young builders', sub: 'First apps', courses: [
        { code: 'APP / YOUNG / 01', slug: 'block-coding-app-development-masterclass', title: 'Block Coding App Development', blurb: 'A first working app, without typing.' },
        { code: 'APP / YOUNG / 02', slug: 'complete-app-development-masterclass-for-teens', title: 'App Development for Teens', blurb: 'A real phone app, designed and finished.' },
        { code: 'APP / YOUNG / 03', slug: 'kids-ai-web-development-course', title: 'Web and AI for Kids', blurb: 'The web side, for younger makers.' }
      ] },
      { num: 'II', h3: 'Students and adults', sub: 'Professional stacks', courses: [
        { code: 'APP / PRO / 01', slug: 'complete-app-development-masterclass-college', title: 'App Development Masterclass', blurb: 'Cross-platform apps with real data.' },
        { code: 'APP / PRO / 02', slug: 'complete-flutter-app-development-masterclass-college', title: 'Flutter Masterclass', blurb: 'One codebase, both platforms.' },
        { code: 'APP / PRO / 03', slug: 'complete-swift-programming-masterclass-college', title: 'Swift Masterclass', blurb: 'Native building on Apple platforms.' }
      ] },
      { num: 'III', h3: 'Behind the app', sub: 'What it talks to', courses: [
        { code: 'APP / BACK / 01', slug: 'complete-kotlin-programming-masterclass-professional', title: 'Kotlin Masterclass', blurb: 'The modern language of Android work.' },
        { code: 'APP / BACK / 02', slug: 'mern-stack-development-masterclass-college', title: 'MERN Stack Development', blurb: 'The server and database an app needs.' },
        { code: 'APP / BACK / 03', slug: 'git-github-advanced-version-control-masterclass-for-professionals', title: 'Git and GitHub for Professionals', blurb: 'Releases you can roll back.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How the classes run',
    h2: 'Building on a real device, week by week',
    lede: 'Classes are live, taught from India at a weekly hour fixed in Irish time. Because India holds one clock all year and Ireland changes twice, our teachers are four and a half hours ahead through the Irish summer and five and a half in winter. Younger learners take after-school slots and adults evenings.',
    slots: [
      { time: 'After school', l: 'Children and teenagers, Irish time.' },
      { time: 'Evening', l: 'College students and working adults.' },
      { time: 'Weekend', l: 'Longer sessions when a release is close.' }
    ],
    cells: [
      { h3: 'A free first class', p: 'You sketch an app idea with a teacher and build the first screen, then hear what building the rest involves.' },
      { h3: 'Groups of five to ten', p: 'Learners at one level who test each other\'s apps, which is how real bugs get found.' },
      { h3: 'One to one', p: 'For a specific product, a deadline or a platform choice that differs from the group.' },
      { h3: 'On a real phone', p: 'Apps run on the learner\'s own device early, because simulators hide the problems that matter.' },
      { h3: 'Three states per screen', p: 'Loading, empty and broken are designed alongside the happy path, every time.' },
      { h3: 'A finished thing', p: 'Every course ends with an app somebody else can install and use, and a short write-up of how it works.' }
    ]
  },

  projectsH2: 'Apps and projects our students shipped',
  projectsLede: 'Four things our students built and published. There are many more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Google reviews from our students and parents, reproduced exactly as they were left.',

  fees: {
    h2: 'Fees',
    lede: 'One monthly price in US dollars, the same in every country outside India, for any course here and any age. No enrolment fee, no annual commitment, and no charge for the first class.',
    free: ['An app idea sketched and a first screen built', 'An honest view of the right course', 'No card required'],
    group: ['Five to ten learners at one level', 'The same teacher throughout', 'Apps tested by the group weekly', 'A certificate at the end'],
    one: ['A teacher to yourself', 'Your own product or platform', 'Good for a deadline']
  },

  faq: {
    eyebrow: 'Questions',
    h2: 'What learners in Ireland ask about building apps',
    items: [
      { q: 'What age can a child start building apps?', a: 'From about eight with block-based tools, which produce a genuinely working app. Typed code usually starts around twelve or thirteen.' },
      { q: 'Android or iPhone first?', a: 'Most learners build cross-platform so one codebase covers both. If you must pick one, pick the phone you own, because testing on a real device matters more than the platform.' },
      { q: 'Do I need a Mac?', a: 'Not for cross-platform work or Android. Publishing to Apple\'s store does require a Mac at some point, and we will tell you before you choose that route.' },
      { q: 'Can my app go on the App Store or Google Play?', a: 'It can, though both require a paid developer account, and under-18s need an adult to hold it. Many students distribute to friends and family instead.' },
      { q: 'Is there real Irish app code I can read?', a: 'Yes. The State published the COVID Tracker app\'s source code in June 2020 under an MIT licence. It is archived now, so read it as a 2020 codebase.' },
      { q: 'How long does a first app take?', a: 'A small finished app usually takes two to four months of weekly lessons plus practice. The ideas can be built in a week; finishing takes longer.' },
      { q: 'Do we need to design as well as code?', a: 'Yes, and it is part of the course. Sketching screens before coding saves more time than any technical trick.' },
      { q: 'What does it cost?', a: 'The first class is free. After that a group place is USD 100 a month and one-to-one lessons are USD 150 a month, billed in US dollars, with no enrolment fee.' },
      { q: 'When do classes run?', a: 'After school, evenings or weekends, at a weekly hour agreed in the free class. Our teachers are four and a half hours ahead of Irish time in summer and five and a half in winter.' },
      { q: 'What happens after I send the form?', a: 'We ring at a sensible Irish hour and arrange the free class. Nothing is charged unless the learner continues.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'What sits either side of an app.',
    items: [
      { href: '/full-stack-software-development-course-ireland', label: 'Full stack software development', p: 'The server an app talks to.' },
      { href: '/java-classes-ireland', label: 'Java classes in Ireland', p: 'A route into Android work.' },
      { href: '/best-coding-classes-for-teens-ireland', label: 'Best coding classes for teens in Ireland', p: 'For secondary students.' },
      { href: '/transition-year-coding-course-ireland', label: 'Transition Year coding course', p: 'An app as a TY project.' },
      { href: '/best-coding-classes-for-adults-ireland', label: 'Best coding classes for adults in Ireland', p: 'Starting later.' },
      { href: '/coding-classes-in-ireland', label: 'Coding classes in Ireland', p: 'The national page.' }
    ]
  },

  start: {
    h2: 'Sketch your app in a free first class',
    lede: 'Leave a number and we will ring at a time that suits you in Ireland. In the free class you describe the app you want, sketch its screens with a teacher and build the first one.',
    readFirst: 'Prefer to read first? See <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, the <a class="ag-inline-link" href="/courses">course list</a>, and <a class="ag-inline-link" href="/student-labs">apps and projects our students published</a>.',
    note: 'WhatsApp reaches us fastest and is free from an Irish number. Ours is an Indian number, because our teachers are based in India, and there is no office in Ireland.',
    formNote: 'No card, no commitment, one phone call.'
  },

  footer: {
    cols: [
      { h4: 'Build', links: [
        { href: '/full-stack-software-development-course-ireland', label: 'Full stack development' },
        { href: '/java-classes-ireland', label: 'Java classes' },
        { href: '/best-python-classes-online-ireland', label: 'Python classes' },
        { href: '/coding-roadmap', label: 'The coding roadmap' }
      ] },
      { h4: 'Ireland', links: [
        { href: '/coding-classes-in-ireland', label: 'Coding classes in Ireland' },
        { href: '/best-coding-classes-for-teens-ireland', label: 'Coding for teens' },
        { href: '/transition-year-coding-course-ireland', label: 'Transition Year coding' },
        { href: '/student-labs', label: 'Student labs' }
      ] }
    ],
    bottomRight: 'Apps built, tested and actually shipped'
  },

  personalityCss: `
.ag-root.ag-adi .ag-hero-grid { gap: clamp(1.28rem, 3.22vw, 2.96rem); }
.ag-root.ag-adi .ag-hero h1 { letter-spacing: -0.0235em; }
.ag-root.ag-adi .ag-capsule { border-left-width: 4px; }
.ag-root.ag-adi .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-adi .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-adi .ag-band-head h3 { letter-spacing: -0.0015em; }
.ag-root.ag-adi .ag-spec dt { letter-spacing: 0.138em; }
.ag-root.ag-adi .ag-slots { gap: 1.24rem; }
`,

  mustMention: ['26 June 2020', '7 July 2020', 'React Native', '72% of close contacts', 'nearly 2 million', '1.3 million', 'COVID Green', '30 June 2023', '20 February 2023', '400,000 daily users', '96%', '87%']
};
