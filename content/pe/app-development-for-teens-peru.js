// SHIP: market (en subject door, teens) | app development for teens in Peru: the age-14 line in accounts, law and tools | date comparison with tuples: age from a birth date, the day-before-birthday bug and 29 February
'use strict';
// App development for teens, Peru (ag- English subject door, Peru cluster row PE013, hubGroup subjects, code apte, #1D6746).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Fees render in USD from the template only; no soles, no typed figure. British spelling. Under-18 page: no 18+ tool is
// recommended (Claude 18+, Replit "an adult"); ChatGPT only with a parent's permission; see content/ai-tool-age-audit.json.
// Audience: teenagers of 13 to 17 in secundaria and their parents in Peru. Spanish twin (live):
// /crear-apps-curso-para-adolescentes-peru (its spine: INEI phone use by age, CNEB "crea objetos virtuales", AI app builders,
// a sign-up form that collects every error). This page takes a different spine: the age lines a Peruvian teenager meets
// when building an app (Google Account 14+ in Peru, DS 016-2024-JUS article 22, vendor terms), what to build in each
// secundaria grade, and one lesson that computes an age correctly.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/app-development-for-teens-peru/ unless
// noted; fetched 9 November 2026 with curl -sL -A "Mozilla/5.0"; quotes string-matched in the raw text):
//  - Google Account Help, "Age requirements on Google Accounts", https://support.google.com/accounts/answer/1350409?hl=en
//    (google_age.html/.txt): "Below are the minimum age requirements to manage your own Google Account."; "For younger
//    children, parents can help create and manage a Google Account with Family Link ."; "For all countries not listed
//    below, 13 is the minimum age to manage your own Google Account."; "Americas ... Chile: 14+ Colombia: 14+ ... Peru: 14+".
//  - Apple Support, "Create an Apple Account for your child", https://support.apple.com/en-us/102617 (apple_age.html/.txt):
//    "Parents or guardians have to create an Apple Account for children under 13 ( age requirements vary by country or
//    region )."
//  - DS 016-2024-JUS (official gob.pe copy; raw facts-market/src/legal/ds0162024_pdf.txt): Art. 22.1 minors' data lawful
//    with the consent of "patria potestad o tutela"; 22.2 "Los mayores de catorce y menores de dieciocho años, de acuerdo a
//    su capacidad, pueden otorgar el consentimiento ... siempre que la información proporcionada haya sido expresada en
//    un lenguaje comprensible para ellos"; 25.3 digital services "dirigida a menores de catorce años" need parental consent.
//  - Vendor terms via content/ai-tool-age-audit.json (audited 2026-07-15): GitHub Copilot floor 13; ChatGPT "at least 13 ...
//    If you are under 18 you must have your parent or legal guardian's permission"; Gemini "13 (or the applicable age in
//    your country)"; Claude "at least 18"; Replit "You must be an adult"; Glide Apps 13 with the guardian accepting.
//  - MINEDU Edades normativas (FACTS 13, 14): age at 31 March; 1° secundaria 12 ... 5° secundaria 16.
//  - CNEB (FACTS 32, 33, 39): competency 28 is transversal; secundaria JER 35-hour week with no computing area.
//  - MINEDU Fábrica de Programadores (FACTS 45, 46): 1,000 students of 4° and 5° secundaria, Lima Norte, Python, PCEP.
//  - UTEC OPI (FACTS 111, 116): free for every secundaria student; 2025 rules ban generative AI to solve problems.
//  - EF EPI 2025 Peru page (facts-market/src/ef_peru.raw): 18 to 20 year olds score 469 (low); Lima 555 (high).
//  - Time (facts-geo/timezone.tsv): America/Lima UTC-5 all year; India UTC+5:30; 10 h 30 min.
// Our own example (scratchpad pe/e3/code/apte_v1.py and apte_v2.py), run with python3 -I, exact output:
//    v1: Lucía 14 signs in alone / Mateo 14 signs in alone / Valeria 14 signs in alone
//    v2: Lucía 14 signs in alone / Mateo 13 needs a parent / Valeria 14 signs in alone / Mateo on 24 Dec 2026: 13 /
//        Mateo on 25 Dec 2026: 14 / Valeria on 28 Feb 2026: 13 / Valeria on 1 Mar 2026: 14
// Lesson family: computing an age from a birth date; subtracting years is wrong until the birthday has passed, compared
//    as (month, day) tuples; a 29 February birthday counts from 1 March in other years, a choice the code makes explicit.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'from datetime import date',
  '',
  'def age(born, today):',
  '    return today.year - born.year',
  '',
  'today = date(2026, 11, 9)',
  'for name, born in [("Lucía", date(2012, 11, 9)),',
  '                   ("Mateo", date(2012, 12, 25)),',
  '                   ("Valeria", date(2012, 2, 29))]:',
  '    years = age(born, today)',
  '    print(name, years, "signs in alone" if years >= 14 else "needs a parent")'
].join('\n');

const V2 = [
  'from datetime import date',
  '',
  'def age(born, today):',
  '    years = today.year - born.year',
  '    if (today.month, today.day) < (born.month, born.day):',
  '        years -= 1          # birthday not reached yet this year',
  '    return years',
  '',
  'today = date(2026, 11, 9)',
  'for name, born in [("Lucía", date(2012, 11, 9)),',
  '                   ("Mateo", date(2012, 12, 25)),',
  '                   ("Valeria", date(2012, 2, 29))]:',
  '    years = age(born, today)',
  '    print(name, years, "signs in alone" if years >= 14 else "needs a parent")',
  '',
  'print("Mateo on 24 Dec 2026:", age(date(2012, 12, 25), date(2026, 12, 24)))',
  'print("Mateo on 25 Dec 2026:", age(date(2012, 12, 25), date(2026, 12, 25)))',
  'print("Valeria on 28 Feb 2026:", age(date(2012, 2, 29), date(2026, 2, 28)))',
  'print("Valeria on 1 Mar 2026:", age(date(2012, 2, 29), date(2026, 3, 1)))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'subjects', label: 'App development for teens' },
  slug: 'app-development-for-teens-peru',
  code: 'apte',
  accent: '#1D6746',
  accentRationale: 'App development for teens in Peru: a mid forest green #1D6746 allocated to this row, a shade lighter than the adult app page so the two read as siblings; it keeps above 4.5:1 on #FBF8F2, #F5F1E8 and #EDE7DA',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'App development for teens, Peru',
  title: 'App Development for Teens in Peru: Live Online, in English',
  description: 'App development for teens in Peru, live online in English: what to build in each year of secundaria, the age-14 rules for accounts and AI tools, flexible hours.',
  ogDescription: 'Live online app development for Peruvian teenagers of 13 to 17, taught in English at any hour: a route through 1° to 5° de secundaria, the age lines Google, Apple and Peru\'s data regulation draw at 13 and 14, which AI tools a teenager may use, and a worked lesson on checking an age.',
  twitterDescription: 'Apps for Peruvian teens, live online in English: a route by school year, the age-14 rules, and a real lesson.',
  pageName: 'App Development for Teens in Peru',
  webPageDescription: 'A guide for teenagers in Peru and their parents to learning app development live online in English: MINEDU school ages, the account and consent ages published by Google, Apple and DS 016-2024-JUS, vendor age terms for AI tools, and an original Python lesson on computing an age from a birth date.',
  courseDescription: 'Live online app development for teenagers in Peru aged 13 to 18, taught in English: JavaScript, React and React Native with Expo and Firebase, from a first screen to a finished app, in a group of fifteen to twenty or one to one, at flexible hours.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'App development for teens',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#grades', label: 'By school year' },
    { href: '#ages', label: 'The age-14 line' },
    { href: '#tools', label: 'AI tools' },
    { href: '#lesson', label: 'Lesson' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Peru &middot; Ages 13 to 17 &middot; Live online, in English',
  h1: 'App development for teens in Peru',
  lede: 'Teenagers in Peru use apps all day; very few have been shown how one is made. This page is for secundaria students who want to build their own, and for the parents who will be asked to sign the account forms. It covers what a teenager can build in each school year, why the number 14 keeps appearing in Peru\'s rules, which AI tools fit which age, and a lesson where a teenager writes the age check that their own app will need.',
  secondaryCta: { href: '#lesson', label: 'Try the age-check lesson' },
  wa: 'Hello Modern Age Coders, my teenager in Peru would like to learn app development, live online in English. Could we book a free first class?',
  heroNote: 'Live classes since 2020 &middot; 10,000+ learners in many countries &middot; teen groups kept separate from adults',
  spec: [
    ['Ages', '13 to 18, in teen-only groups'],
    ['School years', '1° to 5° de secundaria'],
    ['What they use', 'JavaScript, React Native, Expo, Firebase'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Peru time', 'Any day, the hour your family picks'],
    ['First class', 'Free, no card']
  ],
  capsuleQ: 'The short answer',
  capsule: 'Modern Age Coders runs app development classes for teenagers in Peru aged 13 to 17, live, online and in English, and every class has a real mentor on video. Teens start from zero with JavaScript, then build phone apps in React Native with Expo and Firebase, finishing a working app of their own. Groups of fifteen to twenty are for teenagers only, or a teen can learn one to one, at any hour the family chooses. We teach them to think through each feature, not to paste code from a chatbot, and we keep to the age rules of every tool.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for teenagers who want to build apps',
    lede: 'One complete app course, and two that build the foundations it rests on. All three are for ages 13 to 18 and start from nothing.',
    items: [
      { course: 'complete-app-development-masterclass-for-teens', code: 'PE / TEEN APP / 01', title: 'App development for teens', note: 'For 13 to 18 year olds with no experience, running for roughly a year (10 to 12 months). JavaScript, React and React Native with Expo and Firebase, ending with a launched capstone app.' },
      { course: 'javascript-course-for-teens-beginners-interactive-web', code: 'PE / TEEN APP / 02', title: 'JavaScript for teens', note: 'Ages 13 to 18, six months. The language React Native is written in, learned through browser games, for teens who want a gentler first step.' },
      { course: 'react-for-teens-complete-masterclass', code: 'PE / TEEN APP / 03', title: 'React for teens', note: 'Ages 13 to 18, 9 to 11 months. Components and state in React, the same ideas a React Native app is built from.' }
    ]
  },

  sections: [
    {
      id: 'school',
      eyebrow: 'School and apps',
      h2: 'Do Peruvian secondary schools teach app development?',
      lede: 'Not as a subject. The national curriculum treats digital skills as something every area should use, and the secundaria timetable has no computing course. App building happens outside school, in a pilot, or at home.',
      body: [
        { kind: 'two',
          leftH3: 'What the curriculum asks for',
          left: [
            'MINEDU\'s national curriculum, the CNEB, lists competency 28, about working in virtual environments created by technology, among the competencies that cross all areas rather than belonging to one. A regular-day secundaria timetable fills 35 hours a week with Matemática, Comunicación, Inglés, sciences and Educación para el Trabajo; no slot in it is called computing or programming.',
            'So a student can finish 5° de secundaria having used many apps for schoolwork without once seeing how one is put together.'
          ],
          rightH3: 'Where Peru is testing more',
          right: [
            'A thousand students in the last two years of secundaria in Lima Norte are learning Python in the Fábrica de Programadores, a MINEDU pilot that ends with the PCEP certification exam. And the OPI, the Peruvian computing olympiad run by UTEC, costs nothing to enter for any secundaria student.',
            'Both are good signs, and both are about programming in general. Neither teaches a teenager how to design screens, store a user\'s data or publish to a phone, which is the gap an app course fills.'
          ] },
        { kind: 'p', mt: true, html: 'Our Spanish-language page for the same teenagers, <a class="ag-inline-link" href="/crear-apps-curso-para-adolescentes-peru">crear apps: curso para adolescentes</a>, looks at how Peruvian teens actually go online and teaches a sign-up form lesson. Here we look at something parents ask us about just as often: the age rules.' }
      ]
    },
    {
      id: 'grades',
      eyebrow: 'Year by year',
      h2: 'What can a teenager build in each year of secundaria?',
      lede: 'A route of our own, set against the school year MINEDU expects at each age. A student who joins in 4° does not start where a 1° student starts; the mentor places each teen after the free class.',
      body: [
        { kind: 'table', numCols: [], caption: 'A suggested app route by year of secundaria (our plan, set against MINEDU normative ages)', head: ['School year', 'Normative age at 31 March', 'Where we usually start', 'A project at the end of the year'], rows: [
          ['1° de secundaria', '12', 'JavaScript through browser games', 'A quiz game that keeps a score'],
          ['2° de secundaria', '13', 'JavaScript, then first React screens', 'A to-do list that remembers its items'],
          ['3° de secundaria', '14', 'React Native with Expo', 'A phone app with two screens and navigation'],
          ['4° de secundaria', '15', 'Firebase sign-in and a database', 'A club or class app with accounts'],
          ['5° de secundaria', '16', 'A capstone app, tested and documented', 'A finished app for a portfolio']
        ] },
        { kind: 'source', html: 'Normative ages: MINEDU, Edades normativas (age reached by 31 March of the school year). The route and projects are ours. Our teen courses take learners from 13, so a 12 year old in 1° de secundaria usually begins in our coding courses for children and moves across.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Younger teens, 13 and 14', p: 'Short projects with fast results: a game, a timer, a list. The aim is to make JavaScript feel familiar and to show that a program can be fixed by reasoning, not only by trial and error.' },
          { h3: 'Middle teens, 15', p: 'The first real phone app, running on their own handset through Expo. This is where state, screens and data arrive, and where the age lessons on this page start to matter.' },
          { h3: 'Older teens, 16 and 17', p: 'A capstone the student designs. Many pick something for their school or family: a revision planner, a football league table, an order list for a relative\'s shop.' }
        ] }
      ]
    },
    {
      id: 'ages',
      tint: 'tint',
      eyebrow: 'The age-14 line',
      h2: 'At what age can a teenager in Peru have their own app accounts?',
      lede: 'In Peru the number that matters is usually 14, not 13. Google sets 14 for Peru, and Peru\'s data protection regulation lets young people from that age give consent for their own data in some cases. Here are the lines, from each organisation\'s own page.',
      body: [
        { kind: 'table', numCols: [], caption: 'Age lines a teenager in Peru meets when building apps', head: ['Who sets it', 'The line', 'In their words, summarised'], rows: [
          ['Google', 'Peru: 14+', 'Minimum age to manage your own Google Account in Peru; parents can create and manage an account for younger children with Family Link'],
          ['Google', '13 elsewhere', 'Thirteen for every country not on Google\'s list'],
          ['Apple', 'Under 13', 'Parents or guardians create the Apple Account for children under 13; ages vary by country or region'],
          ['DS 016-2024-JUS, art. 22.2', 'Over 14 and under 18', 'May consent to the use of their own personal data, according to their capacity, if the information is in language they understand'],
          ['DS 016-2024-JUS, art. 25.3', 'Under 14', 'A digital service aimed at them requires consent from a parent or guardian']
        ] },
        { kind: 'source', html: 'Sources: Google Account Help, "Age requirements on Google Accounts"; Apple Support, "Create an Apple Account for your child"; Decreto Supremo N.° 016-2024-JUS, articles 22 and 25 (official copy on gob.pe). Read on 9 November 2026. A teaching summary, not legal advice.' },
        { kind: 'two', mt: true,
          leftH3: 'Why this matters in an app course',
          left: [
            'Our teen app course uses Firebase for sign-in and storage, and Firebase works with a Google account. In Peru, a 13 year old is below Google\'s line for managing an account alone, so a parent sets it up through Family Link or creates a project the teen works inside. We explain this at the free class rather than in week six.',
            'It also matters for the apps teenagers build. If a 16 year old writes an app for classmates in 2° de secundaria, those users are under 14, and Peru\'s regulation expects a parent\'s consent for a digital service aimed at them.'
          ],
          rightH3: 'What we do in class',
          right: [
            'Teenagers learn to design an app that asks for as little as possible: a nickname instead of a full name, no phone number, no photo unless the feature truly needs one. When an app must know a user\'s age, they learn to compute it correctly, which is the lesson further down this page.',
            'Parents of under-14s give consent for their child to join our classes, and we never ask a child to type in their parents\' work or money details, which the regulation also protects.'
          ] }
      ]
    },
    {
      id: 'tools',
      eyebrow: 'AI tools by age',
      h2: 'Which AI tools can a teenager use to build apps?',
      lede: 'Fewer than most adults assume. Each vendor sets its own minimum age in its terms, and several are 18. On an under-18 course we only use tools whose terms allow the learner\'s age.',
      body: [
        { kind: 'table', numCols: [], caption: 'Minimum ages in vendor terms for tools teenagers ask about (from our audit of the vendors\' own pages)', head: ['Tool', 'Vendor\'s minimum age', 'What we do with teens'], rows: [
          ['GitHub Copilot', '13', 'Used from 13, with a mentor reviewing every suggestion'],
          ['ChatGPT', '13, with a parent\'s permission under 18', 'Only with a parent\'s permission, and never to write the answer for them'],
          ['Google Gemini', '13, or the applicable age in your country', 'Treated with care in Peru, where Google\'s own account line is 14'],
          ['Glide Apps', '13, with a parent accepting the terms', 'Possible for no-code prototypes, with a parent\'s acceptance'],
          ['Claude', '18', 'Not used in teen classes'],
          ['Replit', 'An adult', 'Not used in teen classes']
        ] },
        { kind: 'source', html: 'Source: our AI tool age audit, which quotes each vendor\'s terms (audited 15 July 2026); the <a class="ag-inline-link" href="/ai-tools-age-guide">AI tools age guide</a> lists the quotes. Terms change, so we recheck before each course module that uses a tool.' },
        { kind: 'p', mt: true, html: 'The age rule is the minimum, not the method. Even where a tool is allowed, we teach teenagers to write the feature themselves first, then ask the assistant to review it, not the other way round. The Peruvian computing olympiad makes the same point in its own way: UTEC\'s 2025 rules banned generative AI for solving the problems. A teen who can only build with a chatbot open cannot build when it is closed, and contests, exams and interviews close it.' }
      ]
    },
    {
      id: 'lesson',
      eyebrow: 'A lesson teens enjoy',
      h2: 'How does an app work out how old someone is?',
      lede: 'Most first attempts subtract the birth year from this year. That is wrong for about half the year. Here is the lesson, with three invented users and a date of 9 November 2026.',
      body: [
        { kind: 'two',
          leftH3: 'The task',
          left: [
            'An app for teenagers in Peru must decide whether a new user may sign in alone, at 14 or over, or needs a parent first. Three users try on 9 November 2026: Lucía, born 9 November 2012; Mateo, born 25 December 2012; and Valeria, born 29 February 2012.',
            'Before running anything, the mentor asks the class for the right answers. Lucía turns 14 today. Mateo will not be 14 until Christmas. Valeria has a birthday that only exists in leap years.'
          ],
          rightH3: 'Why it matters',
          right: [
            'With the age-14 line from the table above, a wrong age is not a small bug. It decides whether a parent is asked for consent at all.',
            'It is also a classic test of whether a student checks their own code. Version 1 looks correct, runs without errors and gives three plausible answers. One of them is wrong.'
          ] },
        { kind: 'code', label: 'Version 1: subtract the years', lang: 'Python', code: V1, note: 'It prints <code>Lucía 14 signs in alone</code>, <code>Mateo 14 signs in alone</code> and <code>Valeria 14 signs in alone</code>. Mateo is 13, and he has just been let in without a parent.' },
        { kind: 'p', mt: true, html: 'The fix is one comparison. If this year\'s birthday has not happened yet, the person is one year younger than the subtraction says. Python compares pairs of numbers element by element, so <code>(today.month, today.day) &lt; (born.month, born.day)</code> asks exactly "is today earlier in the year than the birthday?".' },
        { kind: 'code', label: 'Version 2: has the birthday happened yet this year?', lang: 'Python', code: V2, note: 'It prints <code>Lucía 14 signs in alone</code>, <code>Mateo 13 needs a parent</code>, <code>Valeria 14 signs in alone</code>, then <code>Mateo on 24 Dec 2026: 13</code>, <code>Mateo on 25 Dec 2026: 14</code>, <code>Valeria on 28 Feb 2026: 13</code> and <code>Valeria on 1 Mar 2026: 14</code>.' },
        { kind: 'p', mt: true, html: 'The last two lines start the liveliest discussion of the lesson. In 2026 there is no 29 February, so when does Valeria turn 14? Version 2 says 1 March, because 28 February comes before 29 February in the comparison. Some systems choose 28 February instead. Neither is a bug; it is a decision, and good code makes the decision visible with a test, so nobody changes it by accident.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Predict first.</strong> Without running it, what does Version 1 say for someone born on 31 December 2012, checked on 1 January 2027?',
          '<strong>Write the tests.</strong> Turn the four extra lines of Version 2 into checks that stop the program if any answer changes.',
          '<strong>Move it into the app.</strong> In the React Native course the same rule is written in JavaScript. Translate it, then run the same four tests.',
          '<strong>Ask less.</strong> Could the app work with "Are you 14 or over?" and no birth date at all? Discuss what you gain and what you lose.'
        ] },
        { kind: 'source', html: 'We wrote the code, the three users, the dates and the printed output for this page; it ran under Python 3 on 9 November 2026. The threshold of 14 follows the line Google publishes for Peru.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Language of the classes',
      h2: 'Are the classes in Spanish?',
      lede: 'No. English is the one teaching language in all our live online classes, and our mentors in India are used to teenagers who are still growing into it.',
      body: [
        { kind: 'two',
          leftH3: 'How it feels for a Peruvian teenager',
          left: [
            'Mentors speak slowly, repeat instructions in other words, and give a student time to answer. A teen who replies half in Spanish is understood and given the English phrase. After a few weeks most stop noticing, because the class is mainly about the code on the screen.',
            'App development is a good subject to learn in English: JavaScript keywords, error messages, React Native documentation and nearly every tutorial are in English already.'
          ],
          rightH3: 'What the English figures suggest',
          right: [
            'EF\'s English Proficiency Index 2025 scores Lima 555, in its high band. The same edition scores Peruvians aged 18 to 20 at 469, in the low band, which suggests many young people leave school before their English is comfortable.',
            'An hour of app building in English twice a week is extra listening and speaking practice that a teenager does not experience as a lesson. Parents tell us this is half the reason they chose it.'
          ] },
        { kind: 'p', mt: true, html: 'If you are not sure whether your teenager\'s English is ready, the free class answers that. The mentor checks how comfortably they follow, and tells you honestly. For a broader look at teen coding in Peru, our page on <a class="ag-inline-link" href="/clases-de-programacion-para-adolescentes-peru">clases de programación para adolescentes</a> covers games, competitions and AI too.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When are the classes, in Peru time?',
      lede: 'At whatever hour fits around colegio, homework and sport. Peru and India both keep the same clock all year.',
      body: [
        { kind: 'table', numCols: [], caption: 'Peru time beside India time, as examples only, not a schedule', head: ['Peru time', 'India time', 'A typical fit for a teen'], rows: [
          ['07:30', '18:00', 'Before school, on days with a late start'],
          ['15:30', '02:00, next day', 'After school'],
          ['17:00', '03:30, next day', 'Before homework'],
          ['10:00', '20:30', 'Weekends and the summer break']
        ] },
        { kind: 'source', html: 'Peru sits at UTC minus 5 with no summer time (tz database, America/Lima), India at UTC plus 5:30, so the difference is a steady 10 hours 30 minutes in every month.' },
        { kind: 'p', mt: true, html: 'Many teens begin during the summer holidays that open the Peruvian year, then keep the same slot once colegio is back in March. Booking happens in your own Peru clock, and the system converts it for the mentor.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'How parents can see a teenager progressing',
    lede: 'Our own stages. Each one ends with something the teen can show on a phone and explain in their own words.',
    table: { caption: 'Five stages from first code to a finished app (ours)', head: ['Stage', 'The teen can', 'What they show you'], rows: [
      ['1. Logic', 'Write JavaScript with conditions, loops and functions', 'A browser game they can explain line by line'],
      ['2. Screens', 'Build screens from components and pass data between them', 'Two screens that share a score or a list'],
      ['3. Phone', 'Run their app on their own handset through Expo', 'The app on the family phone'],
      ['4. Accounts', 'Add sign-in and saved data, asking for as little as possible', 'A sign-in screen and what it stores, and why'],
      ['5. Release', 'Test, document and prepare an app for others to use', 'A short demo and a page describing the app']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 4 is where the age lessons on this page become real, because the teen is now handling other people\'s data.',
      'You receive short updates on what was built and what was difficult, never a count of hours on a screen.'
    ] },
    right: { h3: 'For teens', ps: [
      'If your code says Mateo is 14, it is not lying. It is doing exactly what you wrote. Find the line.',
      'A working app you can explain beats a beautiful app you cannot.'
    ] }
  },

  catalogue: {
    eyebrow: 'More for teenagers',
    h2: 'Nine more courses for teens in Peru',
    lede: 'Grouped by what a teenager wants next. Every course is for ages 13 to 18 unless it says otherwise, live and in English.',
    bands: [
      { num: 'I', h3: 'Foundations', sub: 'Good first steps', courses: [
        { code: 'PE / TEEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Programming from zero in Python, the language of MINEDU\'s pilot.' },
        { code: 'PE / TEEN / 02', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub', blurb: 'Saving and sharing code properly, in twenty-four classes.' },
        { code: 'PE / TEEN / 03', slug: 'frontend-development-masterclass-for-teens', title: 'Frontend development', blurb: 'HTML, CSS and JavaScript for screens that look right.' }
      ] },
      { num: 'II', h3: 'Building more', sub: 'Behind the app', courses: [
        { code: 'PE / TEEN / 04', slug: 'backend-coding-masterclass-for-teens', title: 'Backend for teens', blurb: 'Node, APIs and databases: the server an app talks to.' },
        { code: 'PE / TEEN / 05', slug: 'mysql-mastery-for-teens', title: 'MySQL for teens', blurb: 'SQL from a first query to the data behind real apps.' },
        { code: 'PE / TEEN / 06', slug: 'complete-game-development-masterclass-for-teens', title: 'Game development', blurb: 'For teens whose app idea is really a game.' }
      ] },
      { num: 'III', h3: 'Thinking and testing', sub: 'Sharper problem solving', courses: [
        { code: 'PE / TEEN / 07', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving and DSA', blurb: 'Logic, data structures and algorithms, useful for the OPI.' },
        { code: 'PE / TEEN / 08', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'Cybersecurity for teens', blurb: 'Defensive security: how apps are attacked and protected.' },
        { code: 'PE / TEEN / 09', slug: 'hackathon-prep-for-teens-coding-ai-build-innovate-win-course', title: 'Hackathon preparation', blurb: 'Twelve weeks of building in teams, ages 13 to 17.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'How live classes work for a teenager in Peru',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'After colegio', l: 'Late afternoon in Peru is the small hours in India, and our mentors teach then.' },
      { time: 'Mornings', l: 'Peru mornings meet the Indian evening, handy on weekends and in summer.' },
      { time: '1-on-1', l: 'A slot of your own, built around exams and sport.' }
    ],
    cells: [
      { h3: 'Teens only', p: 'No adults and no young children in the group.' },
      { h3: 'The teen types', p: 'The mentor asks and guides; the keyboard stays with the student.' },
      { h3: 'Same mentor', p: 'One person who learns how your teen thinks.' },
      { h3: 'Clear English', p: 'Unhurried, repeated when needed, answers in their own words.' },
      { h3: 'Age rules kept', p: 'Only tools whose terms allow the learner\'s age.' },
      { h3: 'Notes for parents', p: 'The week\'s build, the sticking point, the next step.' }
    ]
  },

  projectsH2: 'What our teenage learners have made',
  projectsLede: 'A handful of finished pieces appear below, and the <a class="ag-inline-link" href="/student-labs">student labs</a> collect the rest.',
  reviewsLede: 'Reviews from parents and students on Google, as written.',

  fees: {
    h2: 'Fees for app development for teens',
    lede: 'Monthly, with no long contract. We price in US dollars and charge the card in dollars; your bank applies its own exchange rate into soles, which is why a statement can differ by a little.',
    free: ['A free first class', 'A small coding task and a chat with the mentor', 'No card asked'],
    group: ['Fifteen to twenty teenagers of similar age', 'One mentor all the way through', 'Two live classes a week', 'Pay monthly, stop any time'],
    one: ['One teenager, one mentor', 'An app idea of their own', 'Days and hours the family picks']
  },

  faq: {
    eyebrow: 'Parents and teens ask',
    h2: 'App development for teens in Peru: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. English is the only teaching language in every live online class. Mentors keep a calm pace, rephrase when a teen looks unsure and soon get used to each accent; if a student answers partly in Spanish, the mentor replies with the English word. JavaScript and its error messages are in English in any case.' },
      { q: 'How old must my child be to start app development?', a: 'Our teen app course starts at 13. A younger child, or a 12 year old in 1° de secundaria, usually starts with our coding courses for children and moves across later.' },
      { q: 'Does my teenager need any coding experience?', a: 'No. The teen app course starts from zero. If they already know some JavaScript or Python, the mentor moves faster through the early weeks.' },
      { q: 'Can a 13 year old in Peru have a Google account for the course?', a: 'Google lists 14 as the minimum age in Peru to manage your own Google Account. For a 13 year old, a parent creates and manages one with Family Link, or sets up the project the teen works in. We explain it at the free class.' },
      { q: 'Which AI tools will my teenager use?', a: 'Only tools whose terms allow their age, such as GitHub Copilot from 13 with a mentor reviewing, or ChatGPT with a parent\'s permission. We do not use tools set at 18, such as Claude or Replit, in teen classes.' },
      { q: 'Will my teen just copy code from AI?', a: 'No. They write each feature themselves first and use an assistant, where allowed, to review it afterwards. Mentors ask them to explain every line they hand in.' },
      { q: 'What time are classes?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India runs 10 hours 30 minutes ahead of Peru in every season, so a 17:00 class in Peru is 03:30 the following day for the mentor.' },
      { q: 'Does my teen need an iPhone or an Android phone?', a: 'Either works. With Expo, teens test their app on whatever phone the family has. A computer is needed to write the code; a phone alone is not enough.' },
      { q: 'How much does it cost?', a: 'Fees appear here in US dollars and the card is charged in dollars, which your bank changes into soles. Opened from India, the page shows rupees instead. No card is needed for the free first class.' },
      { q: 'Will it help at school?', a: 'It sits alongside school, not inside it: secundaria has no computing course, and we award no Peruvian grade. What it builds is logical thinking, English and a project portfolio, useful for university applications and contests like the OPI.' },
      { q: 'Is there a certificate?', a: 'Passing the final exam earns a certificate of completion that we issue ourselves. MINEDU and schools have no part in it, so treat it as a record of the course; the app your teenager built is the better proof.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'Related pages',
    lede: 'For Peruvian teenagers and their parents.',
    items: [
      { href: '/crear-apps-curso-para-adolescentes-peru', label: 'Crear apps: curso para adolescentes', p: 'The Spanish page on teen app building, with a sign-up form lesson.' },
      { href: '/clases-de-programacion-para-adolescentes-peru', label: 'Programación para adolescentes', p: 'Games, competitions, AI and certification for secundaria.' },
      { href: '/curso-de-ia-para-adolescentes-peru', label: 'Curso de IA para adolescentes', p: 'Building AI, not just using it, inside the age rules.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'The Peru index: ages, subjects, cities.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Each vendor\'s minimum age, quoted from its terms.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A live class, step by step.' }
    ]
  },

  start: {
    h2: 'Book a free app class for your teenager',
    lede: 'The free class is a short coding puzzle and a conversation about the app your teen would like to make. From it the mentor learns how your teen reasons and how much of the English lands, and recommends a starting course.',
    readFirst: 'Rather read before booking? See <a class="ag-inline-link" href="/how-we-teach">how we teach</a> for a class in detail, or browse <a class="ag-inline-link" href="/courses">all our courses</a>.',
    note: 'All classes are live online with mentors in India, taught in English only. WhatsApp is the fastest way to reach us, in English.',
    formNote: 'Free and without obligation.'
  },

  footer: {
    cols: [
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Peru hub' },
        { href: '/crear-apps-curso-para-adolescentes-peru', label: 'Apps for teens, in Spanish' },
        { href: '/clases-de-programacion-para-adolescentes-peru', label: 'Teen coding' },
        { href: '/curso-de-ia-para-adolescentes-peru', label: 'AI for teens' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Has the birthday happened yet?'
  },

  personalityCss: `
.ag-root.ag-apte .ag-hero h1 { letter-spacing: -0.01em; max-width: 19ch; }
.ag-root.ag-apte .ag-capsule { border-left-width: 5px; border-radius: 6px; }
.ag-root.ag-apte .ag-section-head h2 { max-width: 27ch; }
.ag-root.ag-apte .ag-table td:nth-child(2) { font-weight: 600; }
.ag-root.ag-apte .ag-code-head b { letter-spacing: 0.03em; }
`,

  dossier: {
    curriculumAuthority: 'Google Account Help (age requirements by country), Apple Support (Apple Account for a child), DS 016-2024-JUS articles 22 and 25 (official gob.pe copy), our AI tool age audit of vendor terms (2026-07-15), MINEDU Edades normativas, CNEB, Fábrica de Programadores, UTEC OPI 2025 rules, EF EPI 2025, tz database America/Lima.',
    localProject: 'How does an app work out how old someone is? An original Python lesson for Peruvian teens: Version 1 subtracts years and lets Mateo (born 25 December 2012) in at 14 on 9 November 2026; Version 2 compares (month, day) tuples, prints Mateo 13 needs a parent, and shows a 29 February birthday counting from 1 March. Lesson family: computing an age from a birth date.',
    requiredMentions: ['Mateo 13 needs a parent', 'Valeria on 1 Mar 2026: 14', 'Mateo 14 signs in alone', 'Peru: 14+', 'Over 14 and under 18', 'Has the birthday happened yet?', 'GitHub Copilot', 'scores Peruvians aged 18 to 20 at 469'],
    sources: [
      { claim: 'Google Account minimum age, Peru 14+, 13 elsewhere, Family Link.', url: 'https://support.google.com/accounts/answer/1350409?hl=en' },
      { claim: 'Apple: parents create the Apple Account for children under 13.', url: 'https://support.apple.com/en-us/102617' },
      { claim: 'DS 016-2024-JUS articles 22 and 25 on minors.', url: 'https://cdn.www.gob.pe/uploads/document/file/7568330/6426760-decreto-supremo-n-016-2024-jus-reglamento-de-la-ley-n-29733-ley-de-proteccion-de-datos-personales-publicado-nov-2024.pdf' },
      { claim: 'Normative ages by grade at 31 March.', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' },
      { claim: 'CNEB transversal TIC competency and secundaria timetable.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Fábrica de Programadores: 1,000 students, Python, PCEP.', url: 'https://www.gob.pe/institucion/minedu/noticias/1214050-minedu-impulsa-iniciativa-fabrica-de-programadores-para-formar-a-escolares-con-certificacion-internacional-en-programacion' },
      { claim: 'OPI free for secundaria students; 2025 rules ban generative AI.', url: 'https://opi.utec.edu.pe/' },
      { claim: 'EF EPI 2025: Lima 555, ages 18 to 20 score 469.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' }
    ],
    rejectedClaims: [
      'Recommending Claude, Replit or any 18+ tool to under-18s: refused.',
      'Expo account age terms: not verified, so no age is printed for Expo.',
      'A legal ruling on whether 14 itself is "mayor de catorce": the page quotes Google\'s 14+ and the regulation\'s wording without deciding it.',
      'Teen app-store publishing ages: not verified per store for Peru, so the page does not state them.',
      'Spanish-language teaching: every class is in English, and the page says so.',
      'Any connection with Google, Apple, MINEDU, UTEC or any school: none.'
    ]
  }
};
