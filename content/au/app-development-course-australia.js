'use strict';
// App development course, Australia (ag- language and track door; AU cluster Phase 9, row 360).
// Intent: Australians from 8 to 67 looking for an app development course: children making first apps with
// blocks, teens building cross-platform apps, and adults or university students working towards native apps.
// Sources, read raw on 13 October 2026 (curl, default agent):
//  - W3C, WCAG 2.2 (W3C Recommendation 12 December 2024): SC 2.5.8 Target Size (Minimum), Level AA, "The size of the
//    target for pointer inputs is at least 24 by 24 CSS pixels", with the Spacing, Equivalent, Inline, User Agent
//    Control and Essential exceptions; SC 2.5.5 Target Size (Enhanced), Level AAA, "at least 44 by 44 CSS pixels".
//  - ACARA, Australian Curriculum v9, Digital Technologies 7-10 (.docx): AC9TDI10P07 "design and prototype the user
//    experience of a digital system", elaboration "using a presentation tool or a no-code user interface prototyping
//    tool to design a simple mobile app"; AC9TDI10K01 elaboration "applications can treat input from a mouse and touch
//    screen in the same way"; AC9TDI10P11 elaboration on ALT tags and screen readers.
//  - Monash, FIT2081 handbook synopsis (2026): "object-oriented application development in the context of mobile
//    application development for smartphones and tablets".
//  - UQ, COMP2140 Web/Mobile Programming: "interactive, cross-platform web/native apps using JavaScript frameworks".
// Lesson family: touch target size audit. Our script measured every pointer target on this page at 390 CSS px wide
// (Playwright, Chromium) and applied 2.5.8 with an approximation of its spacing and inline exceptions; figures in
// measure.json. Store developer-account age rules were not read raw, so no age is quoted; under-18 publishing is
// described as going through a parent or guardian's account under the store's own terms.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: {
    group: 'guide',
    tag: 'APP DEVELOPMENT',
    blurb: 'App development courses for Australians from 8 to 67: block apps, cross-platform apps and native apps, built to accessibility rules.'
  },
  slug: 'app-development-course-australia',
  code: 'apdv',
  accent: '#435272',
  accentRationale: 'App development course, Australia: a muted slate blue computed for the national doors, at least 20 RGB from every national AU accent, at least 10 from every AU accent and 6 from every colour in use',
  pageType: 'market',
  market: {
    name: 'Australia',
    iso: 'AU',
    dial: '+61',
    lang: 'en-AU',
    locale: 'en_AU',
    geoRegion: 'AU',
    brandTag: 'AU',
    phoneLabel: 'Australian mobile number',
    phonePlaceholder: '491 570 156',
    gradeLabel: 'Year level or age',
    minDigits: 9,
    stripTrunk: true
  },
  routeLabel: 'App development course, Australia',
  title: 'App Development Course in Australia | Ages 8 to 67, Online',
  description: 'App development course for Australians aged 8 to 67: block apps for children, cross-platform apps for teens, native apps for adults. Live online, first class free.',
  ogDescription: 'We measured every tappable target on this page at phone width against WCAG 2.2. How our app course teaches touch, layout and accessibility from the first screen.',
  twitterDescription: 'App development course for Australian kids, teens and adults: design for touch, build, test on a phone. Live online, first class free.',
  pageName: 'App Development Course in Australia',
  webPageDescription: 'A guide to learning app development from Australia: where apps appear in school and university, the three ways to build an app, publishing for under-18s, and a touch target audit.',
  courseDescription: 'Live online app development for Australians aged 8 to 67, from block-based apps to cross-platform and native apps, with touch and accessibility built in.',
  crumbs: [
    { name: 'Courses', href: '/courses' },
    { name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }
  ],
  crumbLabel: 'App development course',
  navLinks: [
    { href: '#where', label: 'Apps at school and uni' },
    { href: '#targets', label: 'A worked example' },
    { href: '#routes', label: 'Three routes' },
    { href: '#publish', label: 'Publishing' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Ages 8 to 67 &middot; Apps for phones and tablets',
  h1: 'App development course',
  lede: 'An app is judged in the first few seconds by a thumb, not a mouse. Buttons that are too small, too close together or impossible to reach one-handed make good code feel broken. Our app development course teaches Australians from age 8 to 67 to design for touch from the first screen, then build, test on a real phone and improve. Children start with blocks, teenagers move to a cross-platform framework, and adults or university students go further into native tools. On this page we show where app development appears in Australian schools and universities, compare the three main ways to build an app, explain publishing for under-18s, and measure every tappable target on this very page against the international accessibility standard.',
  secondaryCta: { href: '#targets', label: 'See the measurement' },
  wa: 'Hello Modern Age Coders, I am in Australia and interested in your app development course. Could we book a free first class?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; apps designed for a thumb and tested on a phone',
  spec: [
    ['For', 'Ages 8 to 67'],
    ['Children', 'Block-based app making'],
    ['Teens', 'Cross-platform frameworks'],
    ['Adults', 'Cross-platform or native'],
    ['Standard', 'WCAG 2.2 from screen one'],
    ['Format', 'Live online lessons'],
    ['Group', 'Five to ten, or one to one'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'An app development course teaches how to design, build, test and publish software for phones and tablets. Beginners use block tools; later students use a cross-platform framework such as React Native or Flutter, or native tools for iOS and Android. Good courses teach touch-friendly design: WCAG 2.2 sets a 24 by 24 pixel minimum target size. Modern Age Coders teaches app development live online to Australians aged 8 to 67, and the first lesson is free.',
  picks: {
    eyebrow: 'Start here',
    h2: 'Three app courses for three stages',
    lede: 'Blocks for children, a JavaScript framework for teens, and Flutter with native tools for adults. Open a card to read the syllabus.',
    items: [
      {
        course: 'block-coding-app-development-masterclass',
        code: 'APDV / 01',
        title: 'App Making for Kids',
        note: 'Ages 8 to 12: real apps built with blocks, with buttons, screens and simple data.'
      },
      {
        course: 'complete-app-development-masterclass-for-teens',
        code: 'APDV / 02',
        title: 'App Development for Teens',
        note: 'React Native for 13 to 18: one codebase, two platforms, tested on the student\'s own phone.'
      },
      {
        course: 'complete-app-development-masterclass-college',
        code: 'APDV / 03',
        title: 'App Development for Adults and Uni',
        note: 'Flutter, iOS and Android: architecture, state, storage and release preparation.'
      }
    ]
  },
  sections: [
    {
      id: 'where',
      tint: 'tint',
      eyebrow: 'Apps at school and uni',
      h2: 'Where app development appears in Australian education',
      lede: 'Mobile apps are not a separate school subject in Australia, but the ideas behind them run from Year 9 into first and second-year university units.',
      body: [
        {
          kind: 'table',
          caption: 'App development in official course documents, read 13 October 2026',
          head: ['Where', 'What the document says', 'In practice'],
          rows: [
            [
              'Australian Curriculum, Years 9 and 10 (AC9TDI10P07)',
              'Students "design and prototype the user experience of a digital system", for example with "a no-code user interface prototyping tool to design a simple mobile app"',
              'Screens and flows are designed before code'
            ],
            [
              'Australian Curriculum, Years 9 and 10 (AC9TDI10K01)',
              'The operating system lets applications "treat input from a mouse and touch screen in the same way"',
              'Touch is an input the system abstracts; size is still the designer\'s job'
            ],
            [
              'Monash, FIT2081',
              'Object-oriented development "in the context of mobile application development for smartphones and tablets"',
              'A full unit built around phone apps'
            ],
            [
              'UQ, COMP2140 Web/Mobile Programming',
              'Students produce "interactive, cross-platform web/native apps using JavaScript frameworks"',
              'One codebase for web and phone'
            ]
          ]
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'Design comes first',
          left: [
            'ACARA puts prototyping before programming for a reason: most app problems are design problems. A wireframe tested with three people catches more issues than a week of coding.',
            'Our students sketch every screen, mark every tappable area and test the sketch before writing a line.'
          ],
          rightH3: 'Accessibility is part of the build',
          right: [
            'The same Years 9 and 10 content asks students to make content accessible with built-in features, such as text alternatives that screen readers can announce.',
            'We treat target sizes, labels and contrast as requirements, checked like any other test.'
          ]
        },
        {
          kind: 'source',
          html: 'Sources, read 13 October 2026: ACARA, <a class="ag-inline-link" href="https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx" rel="noopener" target="_blank">Digital Technologies Years 7 to 10</a>; <a class="ag-inline-link" href="https://handbook.monash.edu/2026/units/FIT2081" rel="noopener" target="_blank">Monash FIT2081</a>; <a class="ag-inline-link" href="https://programs-courses.uq.edu.au/course.html?course_code=COMP2140" rel="noopener" target="_blank">UQ COMP2140</a>.'
        }
      ]
    },
    {
      id: 'targets',
      tint: 'deep',
      eyebrow: 'A worked example',
      h2: 'We measured every tappable target on this page',
      lede: 'WCAG 2.2, the W3C accessibility standard, sets a minimum size for anything a finger or pointer must hit. We wrote a short script to check this page against it at phone width, the same audit students run on their own apps.',
      body: [
        {
          kind: 'p',
          html: 'Success criterion 2.5.8, at Level AA, says "The size of the target for pointer inputs is at least 24 by 24 CSS pixels", with exceptions. The two that matter most are <em>Spacing</em>, where a small target still passes if a 24 pixel circle centred on it touches no other target or circle, and <em>Inline</em>, for links inside a sentence. A stricter criterion, 2.5.5 Target Size (Enhanced) at Level AAA, asks for 44 by 44. Our script loaded this page in Chromium at 390 pixels wide, listed every link, button and form field, and tested each one.'
        },
        {
          kind: 'table',
          caption: 'Pointer targets on this page at 390 CSS pixels wide, measured 13 October 2026 (our calculation)',
          head: ['Check', 'Targets', 'What it means'],
          numCols: [
            1
          ],
          rows: [
            ['Targets measured (sticky booking bar excluded)', '63', 'Links, buttons and form fields that are visible'],
            ['Smaller than 24 by 24 in at least one direction', '36', 'A size-only check would flag all of these'],
            ['Of those, links inside a sentence', '9', 'Exempt under the Inline exception'],
            ['Of those, standalone small targets', '27', 'Must pass the Spacing test instead'],
            ['Standalone small targets passing the Spacing test', '27', 'Their 24 pixel circles touch nothing else'],
            ['Failing 2.5.8 after both exceptions', '0', 'Real problems to fix'],
            ['Smaller than 44 by 44 in at least one direction', '46', 'Short of the stricter AAA criterion']
          ]
        },
        {
          kind: 'three',
          mt: true,
          cells: [
            {
              h3: 'The size-only check over-reports',
              p: 'Flagging every target under 24 pixels would have listed 36 problems. Applying the exceptions properly left 0. An audit that ignores the rules it is checking produces noise, and people learn to ignore noise.'
            },
            {
              h3: 'Passing AA is not the same as easy',
              p: '46 of 63 targets are below 44 by 44. They are legal, but a reader with a tremor or a large thumb will still miss some of them. Apps aimed at older users or children deserve the larger size.'
            },
            {
              h3: 'Our approximation, stated',
              p: 'The Inline test is judged by a rule of thumb (a link inside a longer run of text), and the User Agent and Essential exceptions are not modelled. A human review still follows any automated check.'
            }
          ]
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'When the simple rule wins',
          left: [
            'For an app you are designing from scratch, the clever exceptions are not worth it. "Every tappable thing is at least 44 by 44" is one sentence, needs no geometry and passes both criteria.',
            'The spacing calculation earns its keep only when auditing a design you cannot change, which is exactly where we used it.'
          ],
          rightH3: 'What students take from it',
          right: [
            'The script is about forty lines: list elements, read their boxes, apply the rules. Students run it on their own apps each week and keep the numbers in a table, so improvement is visible.',
            'Native apps use their platform\'s accessibility inspectors, but the rule being checked is the same.'
          ]
        },
        {
          kind: 'source',
          html: 'Standard: W3C, <a class="ag-inline-link" href="https://www.w3.org/TR/WCAG22/" rel="noopener" target="_blank">Web Content Accessibility Guidelines 2.2</a>, W3C Recommendation 12 December 2024, success criteria 2.5.8 and 2.5.5. Measurement: our script, Playwright with Chromium, viewport 390 by 844 CSS pixels; the page changes as it is edited, so the figures are dated.'
        }
      ]
    },
    {
      id: 'routes',
      tint: 'tint',
      eyebrow: 'Three routes',
      h2: 'Native, cross-platform or web: three ways to build an app',
      lede: 'Each route suits a different learner and a different app. None is a wrong first choice; switching later is normal.',
      body: [
        {
          kind: 'table',
          caption: 'The three main routes',
          head: ['Route', 'Tools', 'Strengths', 'Costs'],
          rows: [
            [
              'Native',
              'Swift for iOS, Kotlin for Android',
              'Full access to the device and its accessibility tools',
              'Two codebases for two platforms'
            ],
            [
              'Cross-platform',
              'React Native, Flutter',
              'One codebase for both; large communities',
              'Some device features need extra work'
            ],
            [
              'Web and installable web apps',
              'HTML, CSS, JavaScript',
              'Runs anywhere; no store account needed',
              'Less access to phone hardware'
            ]
          ]
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'Our usual order',
          left: [
            'Children make block apps first, because the screen, button and event ideas are identical in every later tool. Teenagers then learn JavaScript and React Native, which also opens up the web.',
            'Adults choose by goal: Flutter for one codebase, Swift or Kotlin for platform depth.'
          ],
          rightH3: 'What every route shares',
          right: [
            'State that survives a phone call interrupting the app, data saved to the device, screens that work in portrait and landscape, and targets a thumb can hit.',
            'These are taught as habits, not as features of one framework.'
          ]
        }
      ]
    },
    {
      id: 'publish',
      tint: 'deep',
      eyebrow: 'Publishing',
      h2: 'Publishing an app, and what changes under 18',
      lede: 'Building an app needs no account. Putting it in a store does, and stores set their own rules for who may hold a developer account.',
      body: [
        {
          kind: 'two',
          leftH3: 'For students under 18',
          left: [
            'We do not ask under-18s to open store developer accounts in their own names. Their apps run on their own phones during development, and a finished app can be shared as an installable web app, which needs no store at all.',
            'Families who want a store listing do it through a parent or guardian\'s account, under that store\'s own terms, read by the family.'
          ],
          rightH3: 'For adults',
          right: [
            'Adults set up their own developer accounts when an app is ready, and we cover the review process: privacy information, screenshots, testing builds and responding to reviewer feedback.',
            'Most first apps never need a store; a working app shared with friends is already a real result.'
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'What students under 18 build, and how they share it',
          head: ['Age', 'Typical app', 'How it is shared'],
          rows: [
            ['8 to 12', 'A quiz, a pet-care timer, a story with choices', 'Inside the block tool, on a family device'],
            ['13 to 15', 'A habit tracker or class timetable app', 'As an installable web app or a test build on their own phone'],
            ['16 to 17', 'An app with sign-in and stored data', 'Installable web app; store listing only through a parent\'s account']
          ]
        }
      ]
    },
    {
      id: 'build',
      tint: '',
      eyebrow: 'Inside the course',
      h2: 'A term of app development, week by week',
      lede: 'An outline of a ten-week term for a teenager in our cross-platform course. Children and adults follow the same arc with different tools.',
      body: [
        {
          kind: 'table',
          caption: 'A sample ten-week term',
          head: ['Weeks', 'Focus', 'Finished by the end'],
          rows: [
            ['1 to 2', 'Sketches, user stories and a clickable prototype', 'A tested paper or no-code prototype'],
            ['3 to 4', 'Screens, layout and navigation', 'Three working screens with 44 pixel targets'],
            ['5 to 6', 'State and saving data on the device', 'Data that survives closing the app'],
            ['7', 'Accessibility review', 'Labels, contrast and target audit passed'],
            ['8 to 9', 'Fetching data and handling no connection', 'A friendly offline message instead of a crash'],
            ['10', 'Testing with real users and a demo', 'A short demo and a list of next fixes']
          ]
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Progress',
    h2: 'Four levels of app-building skill',
    lede: 'Students who build weekly usually reach the third level in two to three terms.',
    table: {
      caption: 'From first screen to finished app',
      head: ['Level', 'What you can do'],
      rows: [
        ['1. Screen maker', 'Lay out a screen with buttons that respond to touch'],
        ['2. Flow builder', 'Link several screens and keep track of what the user chose'],
        ['3. App builder', 'Save data, handle errors and pass an accessibility audit'],
        ['4. Releaser', 'Prepare a build others can install, test it with users and fix what they find']
      ]
    },
    left: {
      h3: 'Does my child need a phone of their own?',
      ps: [
        'No. Block apps run on a computer or a family tablet, and teen projects can be tested in an emulator on a laptop.',
        'A phone helps later, because nothing replaces testing with a real thumb.'
      ]
    },
    right: {
      h3: 'Should an adult start native or cross-platform?',
      ps: [
        'Cross-platform, unless there is a clear reason to choose one platform. One codebase halves the first year\'s work.',
        'Native comes naturally afterwards for those who want it.'
      ]
    }
  },
  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'App and front-end courses',
    lede: 'Three bands by age. Several students take one app course and one supporting course in parallel.',
    bands: [
      {
        num: 'I',
        h3: 'First apps',
        sub: 'Ages 8 to 12',
        courses: [
          { code: 'APDV / KID / 01', slug: 'block-coding-app-development-masterclass', title: 'App Making for Kids', blurb: 'Real apps with blocks.' },
          { code: 'APDV / KID / 02', slug: 'kids-ai-web-development-course', title: 'Web Development for Kids', blurb: 'Pages that work on any phone.' },
          { code: 'APDV / KID / 03', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'Scratch to games, apps and AI.' }
        ]
      },
      {
        num: 'II',
        h3: 'Cross-platform',
        sub: 'Ages 13 to 18',
        courses: [
          {
            code: 'APDV / TEN / 01',
            slug: 'complete-app-development-masterclass-for-teens',
            title: 'App Development for Teens',
            blurb: 'React Native, both platforms.'
          },
          {
            code: 'APDV / TEN / 02',
            slug: 'javascript-course-for-teens-beginners-interactive-web',
            title: 'JavaScript for Teens',
            blurb: 'The language under the framework.'
          },
          { code: 'APDV / TEN / 03', slug: 'react-for-teens-complete-masterclass', title: 'React for Teens', blurb: 'Components and state.' }
        ]
      },
      {
        num: 'III',
        h3: 'Further',
        sub: 'Adults and university',
        courses: [
          { code: 'APDV / ADL / 01', slug: 'complete-flutter-app-development-masterclass-college', title: 'Flutter Course', blurb: 'Dart to cross-platform apps.' },
          { code: 'APDV / ADL / 02', slug: 'complete-swift-programming-masterclass-college', title: 'Swift and iOS', blurb: 'SwiftUI from zero.' },
          { code: 'APDV / ADL / 03', slug: 'complete-kotlin-programming-masterclass-professional', title: 'Kotlin and Android', blurb: 'Native Android apps.' }
        ]
      }
    ]
  },
  how: {
    eyebrow: 'How lessons run',
    h2: 'App lessons, scheduled in your time',
    lede: 'The team teaches from India during hours that line up with Australian after-school and evening times. Bookings are made in the learner\'s own state time, and shift when that state changes its clocks.',
    slots: [
      { time: 'After school', l: 'Children and teenagers, on weekdays.' },
      { time: 'Evening', l: 'Adults and university students, by arrangement.' },
      { time: 'Weekend', l: 'Longer build and testing sessions.' }
    ],
    cells: [
      { h3: 'Free first class', p: 'One screen designed and built together, then advice on the right route.' },
      { h3: 'Small groups', p: 'Five to ten learners testing each other\'s apps.' },
      { h3: 'One to one', p: 'For a specific app idea, a unit or a deadline.' },
      { h3: 'Phones in the loop', p: 'Students test on real devices whenever they can.' },
      { h3: 'Accessibility checked', p: 'Every app gets a target and label audit.' },
      { h3: 'Their own app', p: 'Teachers advise; learners design and type.' }
    ]
  },
  projectsH2: 'Apps and sites our students have published',
  projectsLede: 'Live work from our learners, still online. The <a class="ag-inline-link" href="/student-labs">student labs</a> hold a longer list.',
  reviewsLede: 'These are reviews posted publicly on Google, quoted exactly as written.',
  fees: {
    h2: 'Fees for the app development course',
    lede: 'Learners in Australia are charged a flat monthly amount in US dollars. Nothing is due when enrolling, and lessons can stop at any month\'s end.',
    free: ['One screen designed and built together', 'A route recommendation for this learner', 'No payment details needed'],
    group: ['Five to ten learners per group', 'Peer testing on real phones', 'The same teacher each week', 'Cancel at any month\'s end'],
    one: ['Built around one learner\'s app idea', 'Pace set by the learner', 'Lesson times that suit the household']
  },
  faq: {
    eyebrow: 'Learners and parents ask',
    h2: 'Questions about app development courses in Australia',
    items: [
      {
        q: 'What is an app development course?',
        a: 'It is a course that teaches how to design, build, test and share software for phones and tablets, from screen layout and touch input to saving data and preparing a release.'
      },
      {
        q: 'What age can my child start making apps?',
        a: 'Around 8, with block-based tools. From about 13, students can move to a cross-platform framework such as React Native.'
      },
      {
        q: 'What is the minimum touch target size?',
        a: 'WCAG 2.2 success criterion 2.5.8, at Level AA, sets 24 by 24 CSS pixels with some exceptions. The stricter 2.5.5, at Level AAA, sets 44 by 44.'
      },
      {
        q: 'Is app development in the Australian Curriculum?',
        a: 'Years 9 and 10 Digital Technologies includes designing and prototyping user experiences, with a simple mobile app given as an example. Full app programming usually comes later, often at university.'
      },
      {
        q: 'Can a teenager publish an app on a store?',
        a: 'Stores set their own developer-account rules. We do not ask under-18s to open accounts in their own names; families who want a listing use a parent or guardian\'s account under the store\'s terms.'
      },
      {
        q: 'Native or cross-platform: which should I learn?',
        a: 'Cross-platform for most first apps, because one codebase runs on both major phone systems. Native tools suit learners who need full access to one platform.'
      },
      {
        q: 'Do I need a Mac to build apps?',
        a: 'Not to begin. Block tools, web apps, Flutter and React Native all start on Windows. Building and signing iOS releases needs Apple tooling later on.'
      },
      {
        q: 'What does the course cost?',
        a: 'The first lesson is free and needs no card. Monthly fees for groups and one-to-one lessons are listed in the fees section.'
      }
    ]
  },
  elsewhere: {
    eyebrow: 'Also on this site',
    h2: 'Related pages',
    lede: 'Neighbouring tracks and the national guide.',
    items: [
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'Every Australian guide, by place and topic.' },
      { href: '/game-programming-course-australia', label: 'Game programming course', p: 'Interactive software of a different kind.' },
      { href: '/java-classes-online-australia', label: 'Java classes online', p: 'The object-oriented base under many Android apps.' },
      { href: '/kids-coding-languages-australia', label: 'Coding languages for kids', p: 'Which language suits which age.' },
      { href: '/video-game-design-for-kids-australia', label: 'Video game design for kids', p: 'Design thinking for younger makers.' },
      { href: '/one-on-one-coding-tutor-australia', label: 'One-on-one coding tutor', p: 'Private lessons for one app idea.' }
    ]
  },
  start: {
    h2: 'Book a free first app lesson',
    lede: 'Send your details and a good time to talk. In the free lesson we design and build one screen together, and you leave knowing which route suits you.',
    readFirst: 'Curious about the method? See <a class="ag-inline-link" href="/how-we-teach">how a lesson works</a>, or look through <a class="ag-inline-link" href="/courses">all our courses</a>.',
    note: 'Calls and messages come from our India-based team, hence the +91 number; we do not run an Australian office. Australian mobiles reach us fastest on WhatsApp.',
    formNote: 'Free, no card, no obligation.'
  },
  footer: {
    cols: [
      {
        h4: 'Building',
        links: [
          { href: '/game-programming-course-australia', label: 'Game programming' },
          { href: '/java-classes-online-australia', label: 'Java classes online' },
          { href: '/kids-coding-languages-australia', label: 'Coding languages for kids' },
          { href: '/how-we-teach', label: 'How we teach' }
        ]
      },
      {
        h4: 'Australia',
        links: [
          { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
          { href: '/australian-student-hackathons', label: 'Student hackathons' },
          { href: '/one-on-one-coding-tutor-australia', label: 'One-on-one coding tutor' },
          { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' }
        ]
      }
    ],
    bottomRight: 'Designed for a thumb, tested on a phone'
  },
  personalityCss: `
.ag-root.ag-apdv .ag-hero h1 { letter-spacing: -0.021em; }
.ag-root.ag-apdv .ag-capsule { border-left-width: 7px; border-radius: 4px; }
.ag-root.ag-apdv .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-apdv .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-apdv .ag-band-head h3 { letter-spacing: -0.01em; }
.ag-root.ag-apdv .ag-slots { gap: 1.1rem; }
`,
  dossier: {
    curriculumAuthority: 'Australia, Years 9 and 10 and university. ACARA, Australian Curriculum v9, Digital Technologies 7-10 (Word download): AC9TDI10P07 "design and prototype the user experience of a digital system" and its no-code mobile app prototyping elaboration; AC9TDI10K01 mouse and touch elaboration; AC9TDI10P11 accessibility elaboration. Monash FIT2081; UQ COMP2140 Web/Mobile Programming. W3C WCAG 2.2 SC 2.5.8 and 2.5.5.',
    localProject: 'Touch target audit of this page at 390 CSS px (our script, Playwright Chromium, 13 October 2026): 63 targets, 36 under 24 px in a dimension, 9 inline, 27 of 27 standalone small targets pass the spacing test, 0 fail 2.5.8, 46 under 44 px. Simple rule that wins for new designs: every target at least 44 by 44. Lesson family: touch target size audit.',
    requiredMentions: [
      'The size of the target for pointer inputs is at least 24 by 24 CSS pixels',
      'Target Size (Enhanced)',
      'design and prototype the user experience of a digital system',
      'a no-code user interface prototyping tool to design a simple mobile app',
      'treat input from a mouse and touch screen in the same way',
      'in the context of mobile application development for smartphones and tablets',
      'interactive, cross-platform web/native apps using JavaScript frameworks',
      'We measured every tappable target on this page',
      'COMP2140'
    ],
    sources: [
      {
        claim: 'W3C, WCAG 2.2 (Recommendation 12 December 2024): SC 2.5.8 Target Size (Minimum) AA, 24 by 24 CSS pixels with Spacing, Equivalent, Inline, User Agent Control and Essential exceptions; SC 2.5.5 Target Size (Enhanced) AAA, 44 by 44.',
        url: 'https://www.w3.org/TR/WCAG22/'
      },
      {
        claim: 'ACARA, Digital Technologies 7-10 v9: AC9TDI10P07 and its mobile app prototyping elaboration; AC9TDI10K01 mouse and touch elaboration; AC9TDI10P11 accessibility elaboration.',
        url: 'https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx'
      },
      {
        claim: 'Monash, FIT2081 synopsis: object-oriented application development in the context of mobile application development for smartphones and tablets.',
        url: 'https://handbook.monash.edu/2026/units/FIT2081'
      },
      {
        claim: 'UQ, COMP2140 Web/Mobile Programming: interactive, cross-platform web/native apps using JavaScript frameworks.',
        url: 'https://programs-courses.uq.edu.au/course.html?course_code=COMP2140'
      }
    ],
    rejectedClaims: [
      'App store developer-account minimum ages: not read raw at Apple or Google, so no age is stated; the page says stores set their own rules.',
      'Australian Human Rights Commission advisory notes on web accessibility: the page returned 403 to curl\'s default agent and was not used.',
      'Digital Transformation Agency Digital Service Standard: the host did not answer from this network, so it is not cited.',
      'App market size or developer earnings in Australia: no money figures on this page.',
      'Platform design-guideline target sizes (points and density-independent pixels): not read raw, so only the WCAG figures are given.'
    ]
  }
};
