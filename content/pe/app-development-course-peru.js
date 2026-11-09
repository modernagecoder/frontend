// SHIP: market (en subject door) | app development for Peru: store rules 2026, DS 016-2024-JUS, one status machine | finite state machine: a dict of allowed transitions refuses an impossible status change
'use strict';
// App development course, Peru (ag- English subject door, Peru cluster row PE012, hubGroup subjects, code ade, #0C5C3C).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Fees render in USD from the template only; no soles, no typed figure. British spelling.
// Audience: university students, graduates and working adults in Peru (18+) who want to build and publish mobile apps;
// teens are sent to /crear-apps-curso-para-adolescentes-peru and our teen course. Spanish twin (live):
// /curso-de-desarrollo-de-aplicaciones-en-ingles (its spine: weak signal, native vs cross-platform, retry with backoff,
// trade.gov and Findex). This page takes a different spine: an app has to obey three sets of rules, the stores' rules
// (Google Play and Apple, 2026), Peru's data rules (DS 016-2024-JUS) and its own rules (a status machine).
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/app-development-course-peru/ unless
// noted; fetched 9 November 2026 with curl -sL -A "Mozilla/5.0"; every quote string-matched in the raw text):
//  - Google, Android Developers, "Target API level requirements for Google Play apps",
//    https://developer.android.com/google/play/requirements/target-sdk (gplay_target.html/.txt): "Starting August 31
//    2026: New apps and app updates must target Android 16 (API level 36) or higher to be submitted to Google Play";
//    "Existing apps must target Android 15 (API level 35) or higher to remain available to new users on devices running
//    Android OS higher than your app's target API level."; Wear OS and Android Automotive OS "must target Android 15 (API
//    level 35) or higher", Android TV and Android XR "Android 14 (API level 34) or higher".
//  - Apple Developer, "Upcoming Requirements", https://developer.apple.com/news/upcoming-requirements/
//    (apple_upcoming.html/.txt): "Since September 9, 2026 iOS and iPadOS apps uploaded to App Store Connect must target
//    iOS 13 or later."; "Since April 28, 2026 Apps uploaded to App Store Connect must be built with Xcode 26 or later
//    using an SDK for iOS 26"; "Provide responses to the updated age rating questions for each of your apps by January
//    31, 2026".
//  - DS 016-2024-JUS, Reglamento de la Ley 29733 (official gob.pe copy,
//    https://cdn.www.gob.pe/uploads/document/file/7568330/6426760-decreto-supremo-n-016-2024-jus-reglamento-de-la-ley-n-29733-ley-de-proteccion-de-datos-personales-publicado-nov-2024.pdf;
//    raw text facts-market/src/legal/ds0162024_pdf.txt): published "Sábado 30 de noviembre de 2024"; "entra en vigencia
//    a partir de los 120 días calendario siguientes de su publicación" (our arithmetic: 30 March 2025); Art. VI.3.1
//    applies when the controller "no se encuentre en territorio peruano, pero realiza actividades relacionadas a la
//    oferta de bienes o servicios dirigidos a los titulares de datos personales ubicados en territorio peruano"; Art.
//    25.3 digital services "dirigida a menores de catorce años" need the consent of "patria potestad o tutela"; Art.
//    34.1 notify the authority "como máximo dentro de las 48 horas"; considerandos cite DL 1412 "el principio de
//    privacidad desde el diseño". Summarised, never offered as legal advice.
//  - INEI, Estadísticas de las TIC en los Hogares, II Trimestre 2026 (facts-market/src/inei_tic_iit2026.txt): "el
//    90,2% de la población usuaria de Internet de 6 y más años usó Internet a través de un teléfono celular"; "el 36,4%
//    de los hogares del país disponía de al menos una computadora".
//  - EF EPI 2025, Peru page (facts-market/src/ef_peru.raw): Peru 519 moderate; Lima 555 high; job function IT 522.
//  - MINEDU, Fábrica de Programadores (facts-school FACTS 45, 46): 1,000 students of 4° and 5° secundaria, Python, PCEP.
//  - Time (facts-geo/timezone.tsv): America/Lima UTC-5 all year, no summer time since 1994; India UTC+5:30; 10 h 30 min.
// Our own example (scratchpad pe/e3/code/ade_v1.py and ade_v2.py), run with python3 -I, exact output:
//    v1: A-17 -> accepted / A-17 -> on_the_way / A-17 -> delivered / A-17 -> cancelled / Final: cancelled
//    v2: A-17 -> accepted / A-17 -> on_the_way / A-17 -> delivered / A-17 refused: delivered -> cancelled /
//        A-17 refused: delivered -> on_the_way / Final: delivered / History: placed > accepted > on_the_way > delivered /
//        End states: ['delivered', 'cancelled'] / Allowed moves: 5 of 20
// Lesson family: finite state machine; a dictionary of allowed transitions makes an impossible status change (a
//    delivered order turning into a cancelled one) a refusal instead of a silent overwrite.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'order = {"id": "A-17", "status": "placed"}',
  '',
  'def update(order, new_status):',
  '    order["status"] = new_status',
  '    print(order["id"], "->", new_status)',
  '',
  'update(order, "accepted")',
  'update(order, "on_the_way")',
  'update(order, "delivered")',
  'update(order, "cancelled")      # the customer\'s late tap',
  'print("Final:", order["status"])'
].join('\n');

const V2 = [
  'ALLOWED = {',
  '    "placed":     {"accepted", "cancelled"},',
  '    "accepted":   {"on_the_way", "cancelled"},',
  '    "on_the_way": {"delivered"},',
  '    "delivered":  set(),',
  '    "cancelled":  set(),',
  '}',
  '',
  'def update(order, new_status):',
  '    now = order["status"]',
  '    if new_status not in ALLOWED[now]:',
  '        print(order["id"], "refused:", now, "->", new_status)',
  '        return False',
  '    order["status"] = new_status',
  '    order["history"].append(new_status)',
  '    print(order["id"], "->", new_status)',
  '    return True',
  '',
  'order = {"id": "A-17", "status": "placed", "history": ["placed"]}',
  'for event in ["accepted", "on_the_way", "delivered", "cancelled", "on_the_way"]:',
  '    update(order, event)',
  '',
  'print("Final:", order["status"])',
  'print("History:", " > ".join(order["history"]))',
  'print("End states:", [s for s, nxt in ALLOWED.items() if not nxt])',
  'print("Allowed moves:", sum(len(nxt) for nxt in ALLOWED.values()), "of", len(ALLOWED) * (len(ALLOWED) - 1))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'subjects', label: 'App development course' },
  slug: 'app-development-course-peru',
  code: 'ade',
  accent: '#0C5C3C',
  accentRationale: 'App development in Peru: a deep forest green #0C5C3C allocated to this row, read as "go" on a release checklist; dark enough to clear 4.5:1 on all three paper tones, #FBF8F2, #F5F1E8 and #EDE7DA',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'App development course, Peru',
  title: 'App Development Course in Peru: Live Online, in English',
  description: 'App development course for Peru, live online in English: Flutter, Kotlin or Swift, the 2026 Google Play and Apple rules, Peru\'s data rules, flexible hours.',
  ogDescription: 'Learn to build and publish mobile apps from Peru with a live mentor, in English and at any hour: which framework to start with, what Google Play and the App Store demand in 2026, what DS 016-2024-JUS means for an app, and a worked status-machine lesson.',
  twitterDescription: 'App development from Peru, live online in English: store rules for 2026, Peru\'s data rules, and a real lesson.',
  pageName: 'App Development Course in Peru',
  webPageDescription: 'A guide for university students and working adults in Peru who want to build mobile apps, taught live online in English: the 2026 publishing requirements of Google Play and Apple, the parts of DS 016-2024-JUS an app developer meets, INEI and EF EPI context, and an original Python lesson on order status.',
  courseDescription: 'Live online app development courses in English for learners in Peru aged 18 and over: cross-platform apps with Flutter, Android with Kotlin, iOS with Swift, plus databases and version control, in a group of fifteen to twenty or one to one, at flexible hours.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'App development course',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#stores', label: 'Store rules' },
    { href: '#data', label: 'Peru data rules' },
    { href: '#status', label: 'Lesson' },
    { href: '#framework', label: 'Which framework' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Peru &middot; App development &middot; Live online, in English &middot; 18 and over',
  h1: 'App development course in Peru',
  lede: 'Building an app is the easy half. Getting it accepted by Google Play and the App Store, keeping the personal data of Peruvian users the way Peruvian law expects, and making sure the app never shows a status that cannot be true: that is the half employers notice. This page explains all three, with the 2026 rules quoted from their own sources and a lesson we teach in the first month.',
  secondaryCta: { href: '#status', label: 'See the status lesson' },
  wa: 'Hello Modern Age Coders, I am in Peru and would like to learn app development, live online in English. Could I book a free first class?',
  heroNote: 'Teaching live since 2020 &middot; 10,000+ learners worldwide &middot; mentors who slow down when you ask',
  spec: [
    ['For', 'University students, graduates and working adults, 18 and over'],
    ['Tracks', 'Flutter for both stores, Kotlin for Android, Swift for iOS'],
    ['Starting point', 'No coding needed; we begin with the language'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Peru time', 'Any day and hour you choose'],
    ['First class', 'Free, no card asked']
  ],
  capsuleQ: 'The short answer',
  capsule: 'Modern Age Coders teaches app development to adults and university students in Peru, live online and in English, with a mentor on video in every class. You can start from zero and build cross-platform apps with Flutter, Android apps with Kotlin or iPhone apps with Swift, then learn to publish them under the 2026 rules of Google Play and Apple and to handle personal data the way Peru\'s 2024 regulation expects. You learn either with fifteen to twenty other adults or one to one, on whatever days and hours suit you.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three app development courses for learners in Peru',
    lede: 'All three begin from nothing and assume no earlier programming. Pick by the phones you want to reach: both kinds, Android only, or a single cross-platform codebase.',
    items: [
      { course: 'complete-app-development-masterclass-college', code: 'PE / APP / 01', title: 'App development: Flutter, iOS and Android', note: 'For complete beginners aged 18 and over, 10 to 12 months. A broad route through cross-platform and native tools, ending with an app prepared for both stores.' },
      { course: 'complete-flutter-app-development-masterclass-college', code: 'PE / APP / 02', title: 'Flutter and Dart', note: 'One codebase for Android and iPhone, 10 to 12 months from zero. The quickest way for one developer to reach both halves of the phone market.' },
      { course: 'complete-kotlin-programming-masterclass-professional', code: 'PE / APP / 03', title: 'Kotlin and Android', note: 'Kotlin from first principles, then Android apps, 10 to 12 months. For learners who want to know the platform most Peruvian phones run on in depth.' }
    ]
  },

  sections: [
    {
      id: 'course',
      eyebrow: 'What you learn',
      h2: 'What does an app development course actually teach?',
      lede: 'Much more than screens. A phone app is a small program that must remember things, talk to a server, survive being closed at any moment and pass a store review. Our courses teach each of those as a separate skill.',
      body: [
        { kind: 'three', cells: [
          { h3: 'The language first', p: 'Dart, Kotlin or Swift, learned as a language before any framework: variables, functions, classes, lists and errors. Learners who skip this step end up copying widget code they cannot change.' },
          { h3: 'Screens and state', p: 'Layouts that adapt to a small Android phone and a large iPhone, then state: what the app knows right now, what changes it, and which screen must redraw when it does. Most app bugs live here.' },
          { h3: 'Data and the network', p: 'Saving data on the phone, calling a web service, handling a slow or failed reply, and storing records in a database. Learners write their own small server so the app has something real to talk to.' }
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Privacy as a feature', p: 'Asking only for the data the app needs, explaining why in plain words, letting users delete their account, and knowing what Peru\'s data regulation says about minors and about leaks.' },
          { h3: 'Testing and release', p: 'Automated tests for the parts that must not break, a build signed for release, store listings, screenshots and the review questions both stores now ask before an app goes live.' },
          { h3: 'Working like a team', p: 'Git from the first month, small commits with clear messages, and code reviews with the mentor. A portfolio of three or four apps on GitHub says more to an employer than any certificate.' }
        ] },
        { kind: 'p', mt: true, html: 'The order matters. We see many adults in Peru who have followed long video playlists and can assemble a screen, yet freeze when the app must do something the video did not show. Our mentors keep the learner\'s hands on the keyboard and ask them to predict what a line will do before running it. That habit, think first and then type, is what lets someone build an app nobody has filmed yet.' }
      ]
    },
    {
      id: 'phone',
      eyebrow: 'Why phones',
      h2: 'Why learn app development in Peru?',
      lede: 'Because in Peru the phone is the internet for most people. The national statistics office measures it every quarter.',
      body: [
        { kind: 'two',
          leftH3: 'What INEI measured in 2026',
          left: [
            'In its bulletin on household technology for the second quarter of 2026, INEI reports that 90.2% of internet users aged six and over went online through a mobile phone. In the same quarter, only 36.4% of households in the country had at least one computer.',
            'Put those two figures side by side and the case for apps writes itself. A Peruvian business that wants to reach customers reaches them on a phone screen, often a modest Android phone, and often with a patchy connection.'
          ],
          rightH3: 'What that means for a learner',
          right: [
            'Building for that reality is a skill in itself: small downloads, screens that still make sense on a narrow display, and an app that behaves well when the signal drops between two districts. We build those constraints into the projects rather than treating them as an afterthought.',
            'One practical point for learners themselves: you write apps on a computer, not on the phone. If your home is among the many without one, tell us at the free class and the mentor will suggest the lightest setup that still works.'
          ] },
        { kind: 'p', mt: true, html: 'Our Spanish-language page on the same subject, <a class="ag-inline-link" href="/curso-de-desarrollo-de-aplicaciones-en-ingles">curso de desarrollo de aplicaciones en inglés</a>, looks at the weak-signal problem in detail and teaches a retry lesson. This English page takes a different route: the rules an app must obey before anyone in Peru can install it.' }
      ]
    },
    {
      id: 'stores',
      eyebrow: 'Store rules, 2026',
      h2: 'What do Google Play and the App Store require of a new app in 2026?',
      lede: 'Both stores now publish dated technical floors. An app that misses them is refused at upload, or quietly disappears for new users. Here are the 2026 rules in the stores\' own words, summarised.',
      body: [
        { kind: 'table', numCols: [], caption: 'Publishing requirements that apply in 2026, from Google and Apple', head: ['Store', 'Since or from', 'What the store requires', 'Who it affects'], rows: [
          ['Google Play', '31 August 2026', 'New apps and updates must target Android 16 (API level 36) or higher', 'Phone and tablet apps'],
          ['Google Play', '31 August 2026', 'Existing apps must target Android 15 (API level 35) or higher to stay available to new users on newer Android versions', 'Apps already in the store'],
          ['Google Play', '31 August 2026', 'Wear OS and Android Automotive OS: Android 15 (API level 35); Android TV and Android XR: Android 14 (API level 34)', 'Watch, car, TV and XR apps'],
          ['Apple App Store', '31 January 2026', 'Answers to the updated age rating questions for each app', 'Every app'],
          ['Apple App Store', '28 April 2026', 'Built with Xcode 26 or later, using an SDK for iOS 26 or the matching platform', 'Every upload'],
          ['Apple App Store', '9 September 2026', 'iOS and iPadOS apps must target iOS 13 or later', 'Every iPhone and iPad upload']
        ] },
        { kind: 'source', html: 'Sources: Google, Android Developers, "Target API level requirements for Google Play apps"; Apple Developer, "Upcoming Requirements". Both pages read on 9 November 2026. Dates are the stores\' own; requirements change every year, so we check them again before each cohort reaches its release module.' },
        { kind: 'two', mt: true,
          leftH3: 'What a "target API level" is',
          left: [
            'Every Android version has a number, its API level. When you build an app you declare which level you have tested against. Google uses that number to decide whether your app has been kept up to date with newer privacy and battery rules, and refuses uploads that point too far into the past.',
            'For a learner this has one practical meaning: tutorials written two or three years ago often produce an app that targets an old level. Our mentors start every project on a current template, so the first app a learner builds could actually be submitted.'
          ],
          rightH3: 'Why Apple asks about age',
          right: [
            'Apple redesigned its age ratings and asked developers to answer new questions for every app by the end of January 2026. A developer answers questions about the app\'s content and features; the store turns the answers into a rating shown to families.',
            'This links straight to Peru\'s own rules on minors, below. An app that a 12 year old might use is a different product, legally and ethically, from one meant only for adults, and the developer is expected to know which one they are building.'
          ] }
      ]
    },
    {
      id: 'data',
      tint: 'tint',
      eyebrow: 'Peru\'s data rules',
      h2: 'What does Peru\'s data protection law mean for an app developer?',
      lede: 'Peru updated the regulation of its personal data law, Ley 29733, with Supreme Decree DS 016-2024-JUS, published in El Peruano on Saturday 30 November 2024. Several of its articles land directly on the desk of whoever builds an app. This is a teaching summary, not legal advice.',
      body: [
        { kind: 'table', numCols: [], caption: 'Five parts of DS 016-2024-JUS an app developer meets, in plain English', head: ['Where in the regulation', 'What it says', 'What it means when you build an app'], rows: [
          ['Final provision on entry into force', 'In force 120 calendar days after publication', 'Our arithmetic: from 30 March 2025, so every app launched in Peru today falls under it'],
          ['Article VI, 3.1', 'Covers a controller outside Peru that offers goods or services aimed at people located in Peru', 'A developer abroad who targets Peruvian users is not outside the rules'],
          ['Article 25, 25.3', 'Digital services aimed at children under fourteen need the consent of a parent or guardian', 'Know your audience before you design the sign-up screen'],
          ['Article 34, 34.1', 'Serious data incidents are notified to the national authority within 48 hours at most', 'Logging and alerting are part of the app, not extras'],
          ['Recitals, citing DL 1412', 'The principle of privacy from the design stage for digital services', 'Collect less, explain why, and build deletion in from the start']
        ] },
        { kind: 'source', html: 'Source: Decreto Supremo N.° 016-2024-JUS, Reglamento de la Ley N.° 29733, Ley de Protección de Datos Personales, official copy on gob.pe. The 30 March 2025 date is our own calculation from the 120-day rule. We summarise for teaching; for a real product, ask a Peruvian lawyer.' },
        { kind: 'p', mt: true, html: 'In class this turns into habits rather than law lectures. A sign-up form that asks for a birthday has to do something with the answer. A login screen should not store a password in plain text on the phone. A crash report should not contain the user\'s phone number. Each of these is a few lines of code, and each is easier to write on the first day than to retrofit after launch.' },
        { kind: 'p', html: 'The same regulation is why we design our own forms carefully: a learner under 14 joins our classes with a parent\'s consent, and adults on this page sign up for themselves.' }
      ]
    },
    {
      id: 'status',
      eyebrow: 'A lesson from month one',
      h2: 'Why does an app sometimes show an order as cancelled after it was delivered?',
      lede: 'Because somewhere in the code, any status is allowed to replace any other. Our learners meet this bug in their first delivery-app project, and fix it with one of the oldest ideas in computing: the state machine.',
      body: [
        { kind: 'two',
          leftH3: 'The situation',
          left: [
            'A delivery app tracks an order through five statuses: placed, accepted, on the way, delivered and cancelled. The rider taps "delivered" at the door. A second later, a customer who has not refreshed the screen taps "cancel", and the request reaches the server after the rider\'s.',
            'Version 1 below does what many first apps do: whatever status arrives last wins. The order that was handed over ends up marked as cancelled, and a real system might then refund it.'
          ],
          rightH3: 'The question for the learner',
          right: [
            'Before running anything, the mentor asks: which changes of status should be possible at all? Can a delivered order be cancelled? Can a cancelled order go back on the road? Learners write the answer on paper as arrows between boxes.',
            'Those arrows are the program. Version 2 turns them into a dictionary, and the update function refuses every move that is not one of the arrows.'
          ] },
        { kind: 'code', label: 'Version 1: the last status to arrive wins', lang: 'Python', code: V1, note: 'It prints the four moves in turn, ending with <code>A-17 -&gt; cancelled</code>, and then <code>Final: cancelled</code>.' },
        { kind: 'code', label: 'Version 2: only the arrows on the diagram are allowed', lang: 'Python', code: V2, note: 'It prints <code>A-17 -&gt; accepted</code>, <code>A-17 -&gt; on_the_way</code>, <code>A-17 -&gt; delivered</code>, then <code>A-17 refused: delivered -&gt; cancelled</code> and <code>A-17 refused: delivered -&gt; on_the_way</code>, followed by <code>Final: delivered</code>, <code>History: placed &gt; accepted &gt; on_the_way &gt; delivered</code>, <code>End states: [\'delivered\', \'cancelled\']</code> and <code>Allowed moves: 5 of 20</code>.' },
        { kind: 'p', mt: true, html: 'The last line is the one learners remember. With five statuses there are 20 possible changes from one status to a different one, and only 5 of them make sense. Version 1 accepted all 20. Version 2 accepts exactly the 5 on the diagram and keeps a history, so a support agent can see what happened to order A-17 without guessing.' },
        { kind: 'p', html: 'The examples are written in Python so the idea is visible without any framework around it. In the Flutter course the same dictionary becomes a Dart map, in Kotlin a sealed class with a <code>when</code> expression, and in Swift an enum. The thinking is identical, which is the point: a learner who understands why the refusal belongs in the code can write it in any language.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Draw it.</strong> Add a status called <em>ready for pickup</em> between accepted and on the way. Which arrows change?',
          '<strong>Break it.</strong> Allow a cancel from on the way. Which real situation is this useful for, and what must the app also do about the rider?',
          '<strong>Test it.</strong> Write a check that tries all 20 changes and prints how many are refused. It should print 15 before you change anything.',
          '<strong>Store it.</strong> Save the history with a time for each step, and show it on a screen in the app.'
        ] },
        { kind: 'source', html: 'The code, its output and the practice tasks are ours, written for this page and run with Python 3 on 9 November 2026. Order A-17 is invented.' }
      ]
    },
    {
      id: 'framework',
      eyebrow: 'Choosing a track',
      h2: 'Should I learn Flutter, Kotlin or Swift first?',
      lede: 'Choose by who will use your app and what you want to do next, not by which framework is fashionable. The table is our own advice, based on how our learners have fared.',
      body: [
        { kind: 'table', numCols: [], caption: 'Which of our app tracks fits which goal (our advice)', head: ['Your goal', 'Track we suggest', 'Language you learn', 'What you can publish'], rows: [
          ['Reach Android and iPhone users with one app', 'Flutter', 'Dart', 'One codebase for both stores'],
          ['Work on Android apps in a company', 'Kotlin and Android', 'Kotlin', 'Android apps for Google Play'],
          ['Build for iPhone and iPad', 'Swift and iOS', 'Swift', 'Apps for the App Store; a Mac is needed'],
          ['Explore before choosing', 'App development masterclass', 'Several, step by step', 'Small apps on both platforms'],
          ['Already a web developer', 'React, then a mobile track', 'JavaScript first', 'Web apps, then mobile']
        ] },
        { kind: 'source', html: 'Our advice, not a ranking. Apple requires Xcode for App Store builds, and Xcode runs on a Mac; Android and Flutter work can be done on Windows, macOS or Linux.' },
        { kind: 'two', mt: true,
          leftH3: 'A common path in Peru',
          left: [
            'Many of our adult learners start with Flutter, because a single project reaches both stores and a portfolio app can be shown on whatever phone the interviewer carries. Once comfortable, some move to Kotlin to understand what Flutter is doing underneath on Android.',
            'Learners without a Mac usually leave Swift for later. That is not a judgement on iOS, only a practical point about what the store requires to build.'
          ],
          rightH3: 'Where Python fits',
          right: [
            'Python is not used to build most phone apps, but it is how we teach the first logic, as in the lesson above, and it is the language of the server many apps talk to. MINEDU\'s Fábrica de Programadores pilot taught Python to 1,000 students in 4° and 5° de secundaria, so some younger adults arrive already knowing it.',
            'If you have that background, we skip ahead. If you do not, the first weeks of any track teach programming itself.'
          ] }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Language of the classes',
      h2: 'Are the classes in Spanish?',
      lede: 'No. English is the only teaching language, in every live online session, with a mentor based in India. Better to know that now than after enrolling; the mentor adapts to you.',
      body: [
        { kind: 'two',
          leftH3: 'How the mentor teaches in English',
          left: [
            'Mentors speak at a measured pace, rephrase when you hesitate and get used to your accent within a couple of classes. You can ask a question in imperfect English and be answered patiently; nobody is marked down for grammar.',
            'Most of a class is spent looking at the same code on a shared screen. Error messages, documentation, store consoles and almost every framework tutorial are written in English anyway, so the language of the class matches the language of the work.'
          ],
          rightH3: 'What the English figures say about Peru',
          right: [
            'In the 2025 edition of EF\'s English Proficiency Index, Peru is placed 52nd among 123 countries on 519 points, which EF calls moderate. Lima reaches 555, inside EF\'s high band, and Peruvians in IT jobs average 522.',
            'For many adults in Peru, then, English is a working language that is not yet fully comfortable. Studying app development in it is practice that pays twice: in the code, and in the interviews and calls that come after.'
          ] },
        { kind: 'p', mt: true, html: 'If you are deciding between this and a Spanish-language course, try the free class first. It is a short coding task and a conversation, and the mentor tells you honestly whether the English will be a help or a hurdle at your current level.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'What time are live classes from Peru?',
      lede: 'Whenever you choose. Peru keeps one clock all year, and so does India, which makes planning simple.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example conversions from Peru time to India time (not a timetable)', head: ['Peru time', 'India time', 'Same day in India?'], rows: [
          ['06:30', '17:00', 'Yes'],
          ['08:00', '18:30', 'Yes'],
          ['12:30', '23:00', 'Yes'],
          ['19:00', '05:30', 'No, the next day'],
          ['21:30', '08:00', 'No, the next day']
        ] },
        { kind: 'source', html: 'Clock facts: Peru runs on UTC minus 5 in every month, without daylight saving since 1994 (zone America/Lima in the tz database; INACAL publishes the official hour). India runs on UTC plus 5:30. The gap is therefore 10 hours 30 minutes, every day.' },
        { kind: 'p', mt: true, html: 'Working adults often choose an early slot before the office or a late one after it; university students fit classes between lectures. You pick the time in Peru time when you book, the mentor sees the India time, and because neither country moves its clocks, the slot never drifts between March and October.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'How do you know you are becoming an app developer?',
    lede: 'Our own milestones. The mentor checks each one with something you build and explain, not with a quiz.',
    table: { caption: 'Six app development milestones (ours)', head: ['Milestone', 'You can', 'The mentor checks'], rows: [
      ['1. Language', 'Write functions, classes and loops without a template', 'A small program written live from a spoken brief'],
      ['2. Screens', 'Build a layout that works on a small and a large phone', 'The same screen on two device sizes'],
      ['3. State', 'Explain which data changes which screen', 'A diagram of states and the arrows between them'],
      ['4. Data', 'Save, load and sync records with a server', 'The app working with the network switched off and on'],
      ['5. Trust', 'Ask for little data, explain it and allow deletion', 'A privacy screen and a delete-account flow'],
      ['6. Release', 'Prepare a signed build and a store listing', 'A release checklist against the current store rules']
    ] },
    left: { h3: 'For learners', ps: [
      'Milestone 3 is where most self-taught developers get stuck. The status lesson on this page is milestone 3 in miniature.',
      'Milestones 5 and 6 change every year with the stores and the law, so we teach how to read the rules, not only today\'s version of them.'
    ] },
    right: { h3: 'For employers and families', ps: [
      'Each milestone leaves something on the learner\'s GitHub: a project, a test file, a diagram. That is the evidence we encourage them to show.',
      'Our certificate of completion records the course; it is our own and is not a Peruvian university qualification.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses around app development',
    lede: 'For teenagers who want to start early, for university students filling gaps, and for professionals adding a skill. Every course is live and taught in English.',
    bands: [
      { num: 'I', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'PE / TEEN / 01', slug: 'complete-app-development-masterclass-for-teens', title: 'App development for teens', blurb: 'React Native apps from zero, for 13 to 18 year olds, over 10 to 12 months.' },
        { code: 'PE / TEEN / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'The language behind React Native, taught through browser games.' },
        { code: 'PE / TEEN / 03', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub for teens', blurb: 'Twenty-four classes on saving, sharing and reviewing code.' }
      ] },
      { num: 'II', h3: 'University students', sub: '18 and over', courses: [
        { code: 'PE / UNI / 01', slug: 'complete-swift-programming-masterclass-college', title: 'Swift and iOS', blurb: 'SwiftUI apps from zero, for learners who have a Mac.' },
        { code: 'PE / UNI / 02', slug: 'react-js-complete-masterclass-college', title: 'React', blurb: 'From JavaScript to production React, a bridge to mobile.' },
        { code: 'PE / UNI / 03', slug: 'mysql-database-complete-masterclass-college', title: 'MySQL and databases', blurb: 'SQL and database design for the server behind an app.' }
      ] },
      { num: 'III', h3: 'Professionals', sub: 'Working adults', courses: [
        { code: 'PE / PRO / 01', slug: 'git-github-advanced-version-control-masterclass-for-professionals', title: 'Advanced Git and GitHub', blurb: 'Branching, reviews and releases for working teams.' },
        { code: 'PE / PRO / 02', slug: 'full-stack-web-development-masterclass-college', title: 'Full stack development', blurb: 'React, Node.js and the basics of deployment.' },
        { code: 'PE / PRO / 03', slug: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', title: 'AI coding agents', blurb: 'Using coding agents well, with a developer who still checks every line.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'How the live app development classes run',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Before work', l: 'An early Peru morning lands in the Indian evening, a calm hour for both of you.' },
      { time: 'After work', l: 'Peru evenings fall in India\'s early morning, and our mentors cover them too.' },
      { time: '1-on-1', l: 'Your own slot and pace, agreed with one mentor who follows your app.' }
    ],
    cells: [
      { h3: 'Your code, your screen', p: 'You type; the mentor watches, asks and nudges.' },
      { h3: 'A mentor who stays', p: 'You keep one mentor, who knows your project by heart.' },
      { h3: 'English, unhurried', p: 'Plain words, repeated on request, time to think.' },
      { h3: 'Real devices', p: 'Apps tested on an emulator and on your own phone.' },
      { h3: 'Work between classes', p: 'A short task each time, reviewed at the next class.' },
      { h3: 'Group or one to one', p: 'Fifteen to twenty adults, or just you.' }
    ]
  },

  projectsH2: 'Apps and tools our learners have built',
  projectsLede: 'A few finished projects are shown below; the <a class="ag-inline-link" href="/student-labs">student labs</a> hold many more.',
  reviewsLede: 'What learners and parents wrote on Google, unedited.',

  fees: {
    h2: 'Fees for the app development course',
    lede: 'You pay month by month. We set the fee in US dollars and take it from your card in that currency; the conversion to soles is done by your bank, so your statement can show a slightly different amount.',
    free: ['A free first class', 'A short coding task and a talk about your goals', 'No card asked'],
    group: ['Fifteen to twenty adults at a similar level', 'One regular mentor', 'Two live classes a week', 'Monthly, cancel when you choose'],
    one: ['Just you and the mentor', 'Projects built around your idea or job', 'Days and hours you set']
  },

  faq: {
    eyebrow: 'Questions from Peru',
    h2: 'App development course in Peru: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. We teach in English only, live and online, and our mentors in India keep their speech clear, follow your pace, get used to your accent and say it again more simply whenever you ask. The code, the documentation and the store consoles are English as well.' },
      { q: 'Can I learn app development from zero?', a: 'Yes. All three starting courses on this page assume no programming. The first weeks teach the language itself, Dart, Kotlin or Swift, before any app screen appears.' },
      { q: 'Flutter or Kotlin: which should I learn first in Peru?', a: 'Flutter if you want one app on both Android and iPhone; Kotlin if you want to work on Android apps in depth. Many learners start with Flutter and add Kotlin later. The free class is a good place to decide with a mentor.' },
      { q: 'Do I need a Mac?', a: 'Only for iPhone apps built with Swift, because Apple requires Xcode for App Store builds and Xcode runs on macOS. Flutter and Kotlin work on Windows, macOS or Linux; Flutter can still produce an iPhone build later on a Mac.' },
      { q: 'What does Google Play require in 2026?', a: 'From 31 August 2026, new apps and updates must target Android 16 (API level 36) or higher, and existing apps need Android 15 (API level 35) or higher to stay available to new users on newer Android versions. We start every project on a current template.' },
      { q: 'Does Peru\'s data protection law apply to my app?', a: 'If your app collects personal data from people in Peru, very likely: DS 016-2024-JUS covers even controllers outside Peru that offer services to people there, and it has been in force since 2025. We teach privacy habits, not legal advice; ask a lawyer for a real product.' },
      { q: 'What time are the classes?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Peru is 10 hours 30 minutes behind India all year, so 08:00 in Peru is 18:30 for the mentor.' },
      { q: 'How long does it take to build a first app?', a: 'Most learners have a small working app within the first few months and a store-ready project towards the end of the course. Our app courses run 10 to 12 months for a complete beginner; the pace depends on your weekly practice.' },
      { q: 'How much does it cost?', a: 'See the monthly fee in US dollars in the fees section; that is the currency your card pays in, with your bank handling the switch to soles. Browsing from India shows rupees. Your first class costs nothing and no card is taken.' },
      { q: 'Will I get a certificate?', a: 'The course ends with our own certificate of completion when you pass the final exam. It is not issued by a Peruvian university or by any ministry; the apps on your GitHub are the stronger evidence.' },
      { q: 'Is there an app course for teenagers?', a: 'Yes, a separate one for ages 13 to 18, taught in its own groups. Our Spanish page for Peruvian teenagers explains it, and the teen course appears in the list above.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'Related pages',
    lede: 'More for adults in Peru who want to build software.',
    items: [
      { href: '/curso-de-desarrollo-de-aplicaciones-en-ingles', label: 'Desarrollo de aplicaciones en inglés', p: 'The Spanish-language page on mobile apps, with a lesson on retrying when the signal drops.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Every Peru page in one place, sorted by age and subject.' },
      { href: '/crear-apps-curso-para-adolescentes-peru', label: 'Crear apps: curso para adolescentes', p: 'For secundaria students who want to make their own app.' },
      { href: '/cursos-de-programacion-para-universitarios-peru', label: 'Programación para universitarios', p: 'Python, Java and algorithms next to a Peruvian degree.' },
      { href: '/student-labs', label: 'Student labs', p: 'Projects that learners finished and published.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What happens in one live class, minute by minute.' }
    ]
  },

  start: {
    h2: 'Book a free app development class',
    lede: 'The free class is a short task in code and a conversation about the app you have in mind. The mentor sees how you approach a problem and how comfortable the English feels, then suggests a track and a group.',
    readFirst: 'Not ready to book? Read <a class="ag-inline-link" href="/how-we-teach">how a live class runs</a>, or look through <a class="ag-inline-link" href="/courses">every syllabus we teach</a>.',
    note: 'Every session is live and online, led from India, in English only. For the quickest reply, message us on WhatsApp in English.',
    formNote: 'Free, no card, nothing to cancel.'
  },

  footer: {
    cols: [
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Peru hub' },
        { href: '/curso-de-desarrollo-de-aplicaciones-en-ingles', label: 'Apps, in Spanish' },
        { href: '/cursos-de-programacion-para-universitarios-peru', label: 'University students' },
        { href: '/english-medium-coding-classes-lima', label: 'English-medium, Lima' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/what-is-vibe-coding', label: 'Vibe coding explained' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Five arrows out of twenty'
  },

  personalityCss: `
.ag-root.ag-ade .ag-hero h1 { letter-spacing: -0.016em; max-width: 20ch; }
.ag-root.ag-ade .ag-capsule { border-left-width: 6px; border-radius: 2px; }
.ag-root.ag-ade .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-ade .ag-table th { text-transform: uppercase; letter-spacing: 0.04em; font-size: 0.8rem; }
.ag-root.ag-ade .ag-code-note code { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'Google Android Developers (target API level requirements) and Apple Developer (Upcoming Requirements), read 9 November 2026; DS 016-2024-JUS (Reglamento de la Ley 29733), official gob.pe copy; INEI Estadísticas de las TIC en los Hogares, II Trimestre 2026; EF EPI 2025 Peru page; MINEDU Fábrica de Programadores; tz database America/Lima.',
    localProject: 'Why does an app show a delivered order as cancelled? An original Python lesson: Version 1 lets the last status win (Final: cancelled); Version 2 stores the allowed transitions in a dictionary, refuses delivered to cancelled and delivered to on_the_way, keeps a history and counts Allowed moves: 5 of 20. Lesson family: finite state machine.',
    requiredMentions: ['Allowed moves: 5 of 20', 'A-17 refused: delivered -&gt; cancelled', 'Android 16 (API level 36)', 'Xcode 26 or later', 'DS 016-2024-JUS', 'Saturday 30 November 2024', 'within 48 hours at most', 'Five arrows out of twenty', '90.2% of internet users aged six and over'],
    sources: [
      { claim: 'Google Play target API level rules from 31 August 2026.', url: 'https://developer.android.com/google/play/requirements/target-sdk' },
      { claim: 'Apple App Store upload requirements in 2026.', url: 'https://developer.apple.com/news/upcoming-requirements/' },
      { claim: 'DS 016-2024-JUS: scope, minors under 14, 48-hour incident notice, entry into force.', url: 'https://cdn.www.gob.pe/uploads/document/file/7568330/6426760-decreto-supremo-n-016-2024-jus-reglamento-de-la-ley-n-29733-ley-de-proteccion-de-datos-personales-publicado-nov-2024.pdf' },
      { claim: 'Internet through a mobile phone 90.2%; households with a computer 36.4%, II quarter 2026.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'EF EPI 2025: Peru 519, Lima 555, IT job function 522.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Fábrica de Programadores: 1,000 students, Python, PCEP.', url: 'https://www.gob.pe/institucion/minedu/noticias/1214050-minedu-impulsa-iniciativa-fabrica-de-programadores-para-formar-a-escolares-con-certificacion-internacional-en-programacion' },
      { claim: 'Peru time UTC-5 without summer time.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Peruvian app-developer salaries or job counts: no primary source verified, so none printed.',
      'A ranking of Flutter, Kotlin and Swift by popularity in Peru: no Peru-specific source; the table is labelled as our advice.',
      'Legal advice on whether a specific app must register a database or name a representative: out of scope; the page says ask a lawyer.',
      'Spanish-language teaching: every class is in English, and the page says so.',
      'Any connection with Google, Apple, the Ministry of Justice or any Peruvian university: none.'
    ]
  }
};
