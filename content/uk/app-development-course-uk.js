'use strict';
// App development course, UK (ag- language and track door; UK cluster Phase 3).
// Sources, read raw on 21 September 2026:
//  - DSIT, Code of practice for app store operators and app developers (updated), gov.uk, updated 24 October 2023
//    (first published December 2022; implementation period extended to June 2024): "This voluntary Code of Practice
//    sets out practical steps for App Store Operators and App Developers to protect users."; eight principles (list
//    quoted as headings); developer provisions 2.1 encryption, 2.2 "Developers shall ensure that the primary
//    function of an app operates if a user chooses to disable its optional functionality and permissions.", 2.3
//    "Developers should not request permissions and privileges which are not functionally required by the app.",
//    2.5 simple uninstall, 2.6 dependency monitoring, 2.7 deletion mechanism, 3.1 vulnerability disclosure process,
//    4.1 and 4.2 security updates including SDK updates, 4.5 operators contact developers after 2 years without an
//    update, 5.2 information about data storage and last update.
//  - ICO, Children's code (Age appropriate design code), Code standards page and Introduction page: 15 standards,
//    each summary quoted where used; "If children are likely to access your service, even if they are not your
//    target audience or user, then you need to consider the Children's code."; applies to "UK-based companies and
//    non-UK companies who process the personal data of UK children"; does not apply to schools processing for
//    education.
//  - ICO, what the DUAA means for organisations: online services likely to be used by children must take their
//    needs into account; "You should already satisfy this requirement if you conform to our Age appropriate design
//    code (AADC)."
// Spine: an app has two rulebooks before it has users. DSIT's voluntary app code sets developer duties
// (permissions, deletion, updates, disclosure); the ICO's Children's code applies whenever children are likely
// to use the app, even when they are not the audience. The course designs both in from the first build. The
// Ireland page's COVID Tracker material is not repeated.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'guide', tag: 'APP DEVELOPMENT', blurb: 'Building apps in the UK: the government\'s app code of practice, the ICO Children\'s code, and live courses in React Native, Flutter, Swift and Kotlin.' },
  slug: 'app-development-course-uk',
  code: 'adu',
  accent: '#851DA5',
  accentRationale: 'App development, UK: a vivid app-icon purple from the solver (6.27:1 on every paper tint, dE 9.5 from the nearest used accent)',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'App development course, UK',
  title: 'App Development Course in the UK | Live Online',
  description: 'A live app development course in the UK for teens and adults: React Native, Flutter, Swift and Kotlin, built to the app code of practice and the Children\'s code.',
  ogDescription: 'Before a UK app has a single user, two rulebooks apply: the government\'s app code of practice and, if children might use it, the ICO\'s Children\'s code.',
  twitterDescription: 'Learn app development in the UK: real apps in React Native, Flutter, Swift or Kotlin, with permissions, privacy and updates done properly. First class free.',
  pageName: 'App Development Course in the UK',
  webPageDescription: 'A live online app development course for UK teenagers and adults, built around DSIT\'s app code of practice and the ICO\'s Children\'s code.',
  courseDescription: 'Live online app development for UK learners: React Native for teens, Flutter, Swift and Kotlin for adults, with minimal permissions, data deletion, high-privacy defaults and dependency updates designed in.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'App development',
  navLinks: [
    { href: '#app-code', label: 'The app code' },
    { href: '#childrens-code', label: 'The Children\'s code' },
    { href: '#designed-in', label: 'Designed in' },
    { href: '#routes', label: 'Which route' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'UK &middot; Teens and adults &middot; iOS and Android',
  h1: 'App development course in the UK',
  lede: 'Most app courses start with a button and end with a store listing. In the UK, two sets of rules sit between those points. The Department for Science, Innovation and Technology\'s code of practice for app store operators and app developers asks developers, among other things, not to "request permissions and privileges which are not functionally required by the app", to let people delete the personal data an app gathers, and to keep fixing security problems after launch. And if children are likely to use an app, the Information Commissioner\'s Office says its Children\'s code needs to be considered, whether or not children were ever the intended audience: "Settings must be \'high privacy\' by default", geolocation off unless there is a compelling reason, no nudging children into giving away more data. The code covers what the law calls information society services, which the ICO says includes most for-profit online services, so a young developer planning to publish needs to know it exists. This course teaches UK teenagers and adults to build real apps in React Native, Flutter, Swift or Kotlin with both rulebooks designed in from the first screen, because retrofitting privacy is harder than building it.',
  secondaryCta: { href: '#app-code', label: 'What the rules ask' },
  wa: 'Hello Modern Age Coders, I would like a free first app development class in the UK.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; apps with permissions, privacy and updates done properly',
  spec: [
    ['Teens', 'React Native, ages 13 to 18'],
    ['Adults', 'Flutter, Swift and Kotlin'],
    ['App code', 'DSIT, eight principles'],
    ['Children\'s code', 'ICO, 15 standards'],
    ['Designed in', 'Minimal permissions, data deletion'],
    ['Default', 'High privacy, location off'],
    ['Group', 'Five to ten, or one to one'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'App developers in the UK work under two sets of guidance. DSIT\'s voluntary code of practice for app store operators and app developers, updated in October 2023, sets eight principles, including that developers use industry-standard encryption, request only the permissions an app functionally needs, keep the primary function working when optional permissions are refused, offer a way to delete personal data, run a vulnerability disclosure process and ship security updates. The ICO\'s Children\'s code sets 15 standards for online services likely to be accessed by children, even if they are not the target audience, including high-privacy default settings, data minimisation, geolocation off by default and no nudge techniques; it applies to non-UK companies processing UK children\'s data too. Modern Age Coders teaches app development live and online to UK teenagers, in React Native, and adults, in Flutter, Swift and Kotlin, with those rules built into every project. The first class is free; afterwards a group place is USD 100 a month and one-to-one lessons USD 150 a month.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three ways into app development',
    lede: 'React Native for teenagers, a cross-platform course for adults, and native iOS. Each card opens the full syllabus.',
    items: [
      { course: 'complete-app-development-masterclass-for-teens', code: 'ADU / 01', title: 'App Development for Teens', note: 'Real apps with React Native, for ages 13 to 18, from first screen to a finished project.' },
      { course: 'complete-app-development-masterclass-college', code: 'ADU / 02', title: 'App Development for Adults', note: 'Flutter, iOS and Android, for university students, graduates and professionals.' },
      { course: 'complete-swift-programming-masterclass-college', code: 'ADU / 03', title: 'Swift and iOS', note: 'SwiftUI apps from zero, for adults who want to build natively for Apple devices.' }
    ]
  },

  sections: [
    {
      id: 'app-code', tint: 'tint', eyebrow: 'The app code',
      h2: 'What the UK\'s app code of practice asks of developers',
      lede: 'DSIT published the code in December 2022 and updated it on 24 October 2023. It describes itself plainly: "This voluntary Code of Practice sets out practical steps for App Store Operators and App Developers to protect users."',
      body: [
        { kind: 'table', caption: 'Developer duties in the code, by provision', head: ['Provision', 'What it asks', 'In a student\'s app'], rows: [
          ['2.1', 'Industry-standard encryption for data in transit and data stored locally', 'HTTPS only; no secrets saved in plain text'],
          ['2.2', '"Developers shall ensure that the primary function of an app operates if a user chooses to disable its optional functionality and permissions."', 'A weather app still works when location is refused; the user types a town instead'],
          ['2.3', '"Developers should not request permissions and privileges which are not functionally required by the app."', 'No contacts or microphone permission for a to-do list'],
          ['2.5', 'A simple uninstall process', 'Nothing left running after removal'],
          ['2.6', 'A process to update and monitor software dependencies for known vulnerabilities', 'Libraries checked and updated as part of every release'],
          ['2.7', 'A way for users to request deletion of personal data the app gathered', 'A delete-my-account option that actually deletes'],
          ['3.1', 'A vulnerability disclosure process, such as contact details or a form, accessible in the app store', 'A security contact on the listing'],
          ['4.1 and 4.2', 'Security updates, including when a third-party library or SDK receives a security or privacy update', 'Updates shipped after launch, not only before it']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Voluntary, but not optional in spirit',
          left: [
            'The code is voluntary, and responsibility for the principles is shared between app store operators, app developers and platform developers. The government also notes that some of the principles are already mandated by existing legislation, including data protection law.',
            'App stores are asked to vet submissions, remove clearly malicious apps within 48 hours of verifying them, and contact any developer whose app has had no update for two years to check it is still supported.'
          ],
          rightH3: 'The eight principles',
          right: [
            'The code lists them in no priority order: apps meeting a security and privacy baseline; apps adhering to baseline requirements; a vulnerability disclosure process; keeping apps updated; accessible security and privacy information for users; guidance for developers; clear feedback to developers; and steps when a personal data breach arises.',
            'Four of those are aimed mainly at developers, and they are the four a course can teach.'
          ] },
        { kind: 'source', html: 'Source, read 21 September 2026: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/code-of-practice-for-app-store-operators-and-app-developers/code-of-practice-for-app-store-operators-and-app-developers-new-updated-version" rel="noopener" target="_blank">DSIT, Code of practice for app store operators and app developers (updated)</a>, 24 October 2023.' }
      ]
    },
    {
      id: 'childrens-code', tint: 'deep', eyebrow: 'The Children\'s code',
      h2: 'If children might use your app, the Children\'s code applies',
      lede: 'The ICO\'s Children\'s code, also called the Age appropriate design code, sets 15 standards. Its scope is the part developers most often miss.',
      body: [
        { kind: 'p', html: 'In the ICO\'s own words: "If children are likely to access your service, even if they are not your target audience or user, then you need to consider the Children\'s code." It applies to "UK-based companies and non-UK companies who process the personal data of UK children", and children here means anyone under 18. It covers information society services, which the ICO says means most for-profit online services, and it does not apply to schools processing pupils\' information for education.' },
        { kind: 'table', mt: true, caption: 'Seven of the 15 standards, as the ICO summarises them, and what each means in code', head: ['Standard', 'The ICO\'s summary', 'In the app'], rows: [
          ['Default settings', '"Settings must be \'high privacy\' by default"', 'Profiles private and sharing off until a child chooses otherwise'],
          ['Data minimisation', '"Collect and retain only the minimum amount of personal data you need"', 'No date of birth, contacts or photos unless a feature needs them'],
          ['Geolocation', '"Switch geolocation options off by default"', 'Location off at install, with an obvious sign when it is on'],
          ['Profiling', '"Switch options which use profiling \'off\' by default"', 'No personalised feeds for children by default'],
          ['Nudge techniques', '"Do not use nudge techniques to lead or encourage children to provide unnecessary personal data or weaken or turn off their privacy protections."', 'No guilt-trip buttons or pre-ticked boxes'],
          ['Transparency', 'Privacy information "concise, prominent and in clear language suited to the age of the child"', 'A privacy screen a 12-year-old can read'],
          ['Online tools', '"Provide prominent and accessible tools to help children exercise their data protection rights and report concerns."', 'Report and delete options in plain sight']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The standards work together',
          left: [
            'The other eight cover the best interests of the child, data protection impact assessments, age appropriate application, detrimental use of data, upholding your own policies, data sharing, parental controls and connected toys and devices.',
            'For a first app, the practical ones are the defaults: what the app does before anyone changes a setting.'
          ],
          rightH3: 'A newer duty points the same way',
          right: [
            'The Data (Use and Access) Act 2025 added an explicit requirement for online services likely to be used by children to take their needs into account when deciding how to use their information. The ICO\'s view: "You should already satisfy this requirement if you conform to our Age appropriate design code (AADC)."',
            'So one well-designed set of defaults answers both.'
          ] },
        { kind: 'source', html: 'Sources, read 21 September 2026: <a class="ag-inline-link" href="https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/childrens-code-guidance-and-resources/age-appropriate-design-a-code-of-practice-for-online-services/code-standards/" rel="noopener" target="_blank">ICO, Children\'s code standards</a>; <a class="ag-inline-link" href="https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/childrens-code-guidance-and-resources/introduction-to-the-childrens-code/" rel="noopener" target="_blank">Introduction to the Children\'s code</a>; <a class="ag-inline-link" href="https://ico.org.uk/about-the-ico/what-we-do/legislation-we-cover/data-use-and-access-act-2025/the-data-use-and-access-act-2025-what-does-it-mean-for-organisations/" rel="noopener" target="_blank">ICO, the Data Use and Access Act 2025 for organisations</a>. This page is not legal advice.' }
      ]
    },
    {
      id: 'designed-in', tint: 'tint', eyebrow: 'Designed in',
      h2: 'What students build, with the rules already inside',
      lede: 'Every project on the course carries the same small checklist. It costs a few extra lessons and saves rewriting an app later.',
      body: [
        { kind: 'table', caption: 'Project features and the rule each one meets', head: ['Feature every project gets', 'The rule behind it'], rows: [
          ['Permissions requested at the moment they are needed, with a reason shown', 'App code 2.3'],
          ['The main feature still works when a permission is refused', 'App code 2.2'],
          ['Location off by default, with a visible indicator when used', 'Children\'s code, geolocation'],
          ['A plain-language privacy screen', 'Children\'s code, transparency; app code 5.2'],
          ['A delete-my-data option that removes the data from the server too', 'App code 2.7'],
          ['A dependency check before every release', 'App code 2.6 and 4.2'],
          ['A contact for security reports in the store listing', 'App code 3.1']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'A revision app', p: 'Flashcards and quizzes for a subject the student knows, with progress stored locally and nothing shared by default.' },
          { h3: 'A club organiser', p: 'Events and sign-ups for a school club or sports team, with parental controls explained clearly to the children who use it.' },
          { h3: 'A local guide', p: 'A map of places for a town or campus, where the app works without location and asks only when the user taps near me.' }
        ] },
        { kind: 'p', mt: true, html: 'None of this makes an app legally compliant on its own, and the course does not claim to. It builds the habits the codes describe, so that a student who publishes an app later starts from the right defaults. How apps talk to servers safely connects directly to our <a class="ag-inline-link" href="/cyber-security-course-for-teens-uk">cyber security course for teens</a>.' }
      ]
    },
    {
      id: 'routes', tint: '', eyebrow: 'Which route',
      h2: 'React Native, Flutter, Swift or Kotlin',
      lede: 'The right framework depends on age, devices and what the learner already knows. The free first class settles it.',
      body: [
        { kind: 'table', caption: 'Our app routes', head: ['Route', 'Who it suits', 'Builds for'], rows: [
          ['React Native (teens course)', 'Ages 13 to 18, especially with some JavaScript', 'iOS and Android from one codebase'],
          ['Flutter', 'Adults who want one codebase and a clean UI toolkit', 'iOS, Android and more, in Dart'],
          ['Swift and SwiftUI', 'Adults building for iPhone, iPad and Mac', 'Apple platforms natively'],
          ['Kotlin, within the adult app course', 'Adults building for Android natively', 'Android']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Do you need to code first?',
          left: [
            'Teenagers can start the React Native course as complete beginners, and adults can start the app courses from zero. Some JavaScript or Python beforehand makes the first months smoother.',
            'Web foundations help too, and our <a class="ag-inline-link" href="/full-stack-software-development-course-uk">full stack software development</a> page covers the servers most apps rely on.'
          ],
          rightH3: 'Publishing is optional',
          right: [
            'Students can run apps on their own phones and emulators without publishing anything. Publishing to a store involves the store\'s own developer accounts and rules, which the learner or a parent controls.',
            'We never publish apps on a student\'s behalf or hold their store accounts.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'Four stages to a finished app',
    lede: 'Placement follows what you can already do.',
    table: { caption: 'From first screen to a maintained app', head: ['Stage', 'What should be true'], rows: [
      ['1. Screens', 'You build screens with layout, navigation and input'],
      ['2. Data', 'You store data locally and fetch it from an API safely'],
      ['3. Permissions and privacy', 'Your app asks only what it needs, works when refused, and deletes data on request'],
      ['4. Finished and maintained', 'A complete app runs on a real phone, with dependencies updated and a plan for fixes']
    ] },
    left: { h3: 'Stage three is the UK part', ps: [
      'It is where the app code and the Children\'s code turn into code.',
      'The wider sequence of subjects is on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Stage four never ends', ps: [
      'Apps need updates after launch; the code of practice expects security fixes.',
      'Students learn to treat a release as a beginning.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for app builders',
    lede: 'The app courses themselves, the foundations under them, and the back end they talk to.',
    bands: [
      { num: 'I', h3: 'Apps', sub: 'By framework', courses: [
        { code: 'ADU / APP / 01', slug: 'complete-app-development-masterclass-for-teens', title: 'App Development for Teens', blurb: 'React Native, ages 13 to 18.' },
        { code: 'ADU / APP / 02', slug: 'complete-app-development-masterclass-college', title: 'App Development for Adults', blurb: 'Flutter, iOS and Android.' },
        { code: 'ADU / APP / 03', slug: 'complete-flutter-app-development-masterclass-college', title: 'Flutter', blurb: 'Dart to real cross-platform apps.' }
      ] },
      { num: 'II', h3: 'Foundations', sub: 'Before or alongside', courses: [
        { code: 'ADU / FND / 01', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for Teens', blurb: 'The language under React Native.' },
        { code: 'ADU / FND / 02', slug: 'complete-swift-programming-masterclass-college', title: 'Swift and iOS', blurb: 'SwiftUI apps from zero.' },
        { code: 'ADU / FND / 03', slug: 'java-programming-masterclass-for-teens', title: 'Java for Teens', blurb: 'Object-oriented foundations for Android work.' }
      ] },
      { num: 'III', h3: 'Behind the app', sub: 'Servers and data', courses: [
        { code: 'ADU / BCK / 01', slug: 'backend-coding-masterclass-for-teens', title: 'Backend Coding for Teens', blurb: 'APIs and databases for teen developers.' },
        { code: 'ADU / BCK / 02', slug: 'mern-stack-development-masterclass-college', title: 'MERN Stack', blurb: 'Full stack JavaScript for adults.' },
        { code: 'ADU / BCK / 03', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'Cybersecurity for Teens', blurb: 'Why the security rules exist.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live lessons, real phones',
    lede: 'Teaching comes from India, which keeps one clock all year; the UK is four and a half hours behind India in British Summer Time and five and a half in winter. After-school, evening and weekend slots in UK time are all possible.',
    slots: [
      { time: 'After school', l: 'For teenagers on weekdays.' },
      { time: 'Evening', l: 'For adults after work or lectures.' },
      { time: 'Weekend', l: 'Longer sessions for building features.' }
    ],
    cells: [
      { h3: 'A free first class', p: 'We check your starting point and choose a framework with you.' },
      { h3: 'Small groups', p: 'Five to ten learners of similar age and level.' },
      { h3: 'One to one', p: 'For a specific app idea or a faster pace.' },
      { h3: 'Your own device', p: 'Apps run on your phone or an emulator from the early weeks.' },
      { h3: 'Privacy checklist', p: 'Every project passes the same short checklist before it counts as done.' },
      { h3: 'Your accounts, your apps', p: 'Code lives in your own repository; store accounts stay yours.' }
    ]
  },

  projectsH2: 'Projects built by our students',
  projectsLede: 'Four projects our students finished. More, from every age group, are in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews from our students and their families, in their own words.',

  fees: {
    h2: 'Fees for app development',
    lede: 'One monthly fee in US dollars, the same for every country outside India, with no enrolment fee and nothing to commit to beyond the current month. Store developer accounts, if you choose to publish, are separate and paid to the store.',
    free: ['A look at your starting point', 'A framework chosen with you', 'No payment details needed'],
    group: ['Five to ten learners at one level', 'The same teacher each week', 'A privacy checklist on every project', 'Stop at the end of any month'],
    one: ['A teacher for you alone', 'Built around your own app idea', 'Paced to suit you']
  },

  faq: {
    eyebrow: 'Questions about app development',
    h2: 'What UK learners ask about building apps',
    items: [
      { q: 'Does the UK have rules for app developers?', a: 'DSIT publishes a voluntary code of practice for app store operators and app developers, updated in October 2023, with eight principles on security and privacy. Data protection law applies regardless.' },
      { q: 'What is the Children\'s code?', a: 'The ICO\'s Age appropriate design code: 15 standards for online services likely to be accessed by under-18s, such as high-privacy defaults, data minimisation and geolocation off by default.' },
      { q: 'My app is not for children. Does the code apply?', a: 'Possibly. The ICO says that if children are likely to access your service, even if they are not your target audience, you need to consider the code.' },
      { q: 'Which framework should a teenager learn?', a: 'Our teen course uses React Native, which builds for iOS and Android from one codebase. Some JavaScript first helps but is not required.' },
      { q: 'Which should an adult learn?', a: 'Flutter for one codebase across platforms, Swift for Apple devices, or Kotlin for Android. The free class helps you choose.' },
      { q: 'Do I need a Mac?', a: 'For Swift and publishing to Apple\'s store, a Mac is generally needed. React Native and Flutter work can begin on Windows, with Android devices or emulators.' },
      { q: 'Will you publish my app?', a: 'No. Apps can run on your own devices without publishing. If you publish, you or a parent control the store account.' },
      { q: 'Does following your checklist make my app compliant?', a: 'No course can promise that. The checklist builds the habits the codes describe; compliance depends on the real app and how it handles data.' },
      { q: 'What does it cost?', a: 'The first class is free. After that it is USD 100 a month in a group or USD 150 a month one to one, with no enrolment fee.' },
      { q: 'When are lessons?', a: 'After school, evenings or weekends in UK time, agreed in the free class. Teachers are four and a half hours ahead of the UK in summer and five and a half in winter.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'The servers behind apps, security, and the languages underneath.',
    items: [
      { href: '/full-stack-software-development-course-uk', label: 'Full stack software development', p: 'The back end your app talks to.' },
      { href: '/cyber-security-course-for-teens-uk', label: 'Cyber security for teens', p: 'Why the security rules exist.' },
      { href: '/java-classes-uk', label: 'Java classes in the UK', p: 'Object-oriented foundations.' },
      { href: '/best-coding-classes-for-teens-uk', label: 'Coding classes for teens', p: 'How we teach teenagers.' },
      { href: '/best-coding-classes-for-adults-uk', label: 'Coding classes for adults', p: 'Starting as an adult.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'All our UK pages.' }
    ]
  },

  start: {
    h2: 'Bring an app idea to a free class',
    lede: 'Leave a number and we will call at a UK time that suits you. Bring an idea, however rough; the class checks your level, chooses a framework and sketches the first screens.',
    readFirst: 'Reading first? Browse the <a class="ag-inline-link" href="/courses">course list</a>, see <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or look at <a class="ag-inline-link" href="/student-labs">what students have built</a>.',
    note: 'A WhatsApp message from a UK phone is the quickest way to reach us. We work from India, so the number starts +91; there is no UK office.',
    formNote: 'Free class, no card, no contract.'
  },

  footer: {
    cols: [
      { h4: 'Build', links: [
        { href: '/full-stack-software-development-course-uk', label: 'Full stack development' },
        { href: '/java-classes-uk', label: 'Java classes' },
        { href: '/cyber-security-course-for-teens-uk', label: 'Cyber security for teens' },
        { href: '/coding-roadmap', label: 'The coding roadmap' }
      ] },
      { h4: 'UK', links: [
        { href: '/coding-classes-in-united-kingdom', label: 'UK coding classes' },
        { href: '/best-coding-classes-for-teens-uk', label: 'Coding for teens' },
        { href: '/best-coding-classes-for-adults-uk', label: 'Coding for adults' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Two rulebooks, built in from the first screen'
  },

  personalityCss: `
.ag-root.ag-adu .ag-hero h1 { letter-spacing: -0.02em; font-weight: 690; }
.ag-root.ag-adu .ag-capsule { border-left-width: 4px; border-radius: 8px; }
.ag-root.ag-adu .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-adu .ag-table caption { text-align: left; font-weight: 640; }
.ag-root.ag-adu .ag-table th:first-child { width: 26%; }
.ag-root.ag-adu .ag-band-head h3 { letter-spacing: -0.009em; }
`,

  mustMention: ['code of practice', 'app developers', 'Children\'s code', '15 standards', 'high privacy', 'geolocation', 'permissions', 'React Native', 'Flutter', 'Swift', 'Kotlin', 'ICO'],

  dossier: {
    curriculumAuthority: 'United Kingdom, app development rules. DSIT, Code of practice for app store operators and app developers (updated 24 October 2023; first published December 2022; implementation extended to June 2024): "This voluntary Code of Practice sets out practical steps for App Store Operators and App Developers to protect users."; eight principles; developer provisions 2.1 encryption, 2.2 primary function works without optional permissions (quoted), 2.3 no unneeded permissions (quoted), 2.5 uninstall, 2.6 dependency monitoring, 2.7 deletion, 3.1 vulnerability disclosure, 4.1 and 4.2 security and SDK updates; operator duties incl. 48-hour removal of verified malicious apps and 2-year update check. ICO Children\'s code: 15 standards (summaries quoted); scope quote; applies to non-UK companies processing UK children\'s data; not schools. ICO on the DUAA: "You should already satisfy this requirement if you conform to our Age appropriate design code (AADC)."',
    localProject: 'An app has two rulebooks before it has users. The page sets out DSIT\'s voluntary app code developer provisions and the ICO Children\'s code (15 standards, scope beyond the target audience), then turns them into a seven-item project checklist (just-in-time permissions, works when refused, location off, plain privacy screen, real deletion, dependency checks, security contact), and compares React Native, Flutter, Swift and Kotlin routes. It does not claim compliance and never publishes on a student\'s behalf. Lesson family: regulatory codes turned into default settings in code.',
    requiredMentions: ['code of practice', 'Children\'s code', 'high privacy', 'permissions'],
    sources: [
      { claim: 'DSIT, Code of practice for app store operators and app developers (updated): principles, developer provisions, operator duties, dates.', url: 'https://www.gov.uk/government/publications/code-of-practice-for-app-store-operators-and-app-developers/code-of-practice-for-app-store-operators-and-app-developers-new-updated-version' },
      { claim: 'ICO, Children\'s code standards: the 15 standard summaries.', url: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/childrens-code-guidance-and-resources/age-appropriate-design-a-code-of-practice-for-online-services/code-standards/' },
      { claim: 'ICO, Introduction to the Children\'s code: scope, non-UK companies, schools.', url: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/childrens-code-guidance-and-resources/introduction-to-the-childrens-code/' },
      { claim: 'ICO, the DUAA for organisations: children\'s needs duty satisfied by conforming to the AADC.', url: 'https://ico.org.uk/about-the-ico/what-we-do/legislation-we-cover/data-use-and-access-act-2025/the-data-use-and-access-act-2025-what-does-it-mean-for-organisations/' }
    ],
    rejectedClaims: [
      'That following the course checklist makes an app legally compliant: explicitly disclaimed.',
      'App developer survey statistics from DSIT: not read in full for this build, so not used.',
      'Store fees and account requirements: platform-specific and not read, so only mentioned as separate.',
      'That the app code is mandatory: it is voluntary, though some principles are mandated by other law, as the code says.',
      'Publishing apps for students or holding their store accounts: refused.'
    ]
  }
};
