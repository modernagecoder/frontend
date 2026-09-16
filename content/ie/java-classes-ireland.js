'use strict';
// Java classes, Ireland (ag- door, Ireland cluster, Phase 2). Facts read at
// primary sources on 16 September 2026. MAIN FINDING, which the page leads
// with: Java is NOT the usual first-year language in Irish computer science
// degrees; it mostly arrives in second year. Verified first-year Java: Trinity
// College Dublin, CSU11012 Introduction to Programming II, Semester 2, 5 ECTS,
// whose live Year 1 page says programs are written "in an object-oriented
// language (in this case Java)" (CSU11011 in Semester 1 names no language, so
// "Java from week one" is not supported); Maynooth CS162, whose outcomes say
// "write simple programmes in jva [sic]", with first-year status resting on a
// 2020 first-year guide. Java later: University of Galway states "The main
// languages covered are C and Javascript in first year and then Java from
// second year onwards"; DCU's CA116 and CA117 are Python; UCD's Introduction
// to Java, COMP20250, is a Level 2 module and its conversion Java module builds
// on Python; ATU Galway teaches Java in a Year 2 module and mentions Oracle
// certification in year 3. UL's CS4141 names no language in prose but its prime
// text is a Java book, so the page says exactly that. Second level: standalone
// "java" appears zero times in the Leaving Certificate Computer Science
// specification and in both Junior Cycle Coding short course PDFs; the LCCS
// assessment-language sentence is owned by another page and is not reused. UCC
// CS1117 and UCD COMP10110 belong to the college students page.

module.exports = {
  cluster: 'ag',
  clusterName: 'Ireland',
  hub: { group: 'guide', tag: 'JAVA', blurb: 'Where Java actually sits in Irish computing education, and how to learn it properly at school, in college or at work.' },
  slug: 'java-classes-ireland',
  code: 'jvi',
  accent: '#00617F',
  accentRationale: 'Java, Ireland: a deep petrol blue from the solver, separated from both Irish greens and every other Ireland page',
  pageType: 'market',
  market: { name: 'Ireland', iso: 'IE', dial: '+353', lang: 'en-IE', locale: 'en_IE', geoRegion: 'IE', brandTag: 'Ireland', phonePlaceholder: '87 123 4567', minDigits: 7 },
  routeLabel: 'Java classes, Ireland',
  title: 'Java Classes in Ireland | Live Online, Teens to Adults',
  description: 'Java classes for learners in Ireland: where Java sits in Irish degrees, and live online teaching from first objects to data structures. First class free.',
  ogDescription: 'Java is rarely the first language in Irish computing degrees. Knowing where it does appear, and when, saves a lot of wasted effort.',
  twitterDescription: 'Live online Java classes for learners in Ireland, taught for understanding rather than syntax drills. First class free.',
  pageName: 'Java Classes in Ireland',
  webPageDescription: 'Java classes for learners in Ireland, with a researched account of where Java appears in Irish university modules and where it does not, and live online teaching from first classes and objects through data structures.',
  courseDescription: 'Live online Java classes for learners in Ireland: objects, classes, collections, data structures and testing, taught to secondary students, college students and working adults.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Ireland', href: '/coding-classes-in-ireland' }],
  crumbLabel: 'Java classes, Ireland',
  navLinks: [
    { href: '#where', label: 'Java in Irish degrees' },
    { href: '#school', label: 'Java and school' },
    { href: '#learn', label: 'Learning it well' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Ireland &middot; Java &middot; Teens, students and adults',
  h1: 'Java classes in Ireland',
  lede: 'There is a piece of folklore worth correcting before anyone spends a summer on it: Java is not the standard first language of Irish computing degrees. We read the module descriptors, and the picture is mixed. Trinity College Dublin does teach it in first year, in the second semester, where its Year 1 page says students write programs "in an object-oriented language (in this case Java)". Maynooth names it in its second first-year module. But the University of Galway states plainly that its students meet "C and Javascript in first year and then Java from second year onwards", Dublin City University\'s first programming modules are Python, and University College Dublin lists Introduction to Java as a second-level module. So Java matters in Irish computing, and it usually arrives once you can already program. This page sets out where it appears, and how we teach it to secondary students, college students and adults who need it for work.',
  secondaryCta: { href: '#where', label: 'Where Java appears' },
  wa: 'Hello Modern Age Coders, I am in Ireland and would like a free first Java class.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; objects explained, not memorised',
  spec: [
    ['For', 'Teens, students and adults'],
    ['Covers', 'Objects, collections, data structures'],
    ['Includes', 'Testing and tooling'],
    ['Suits', 'Second-year modules and work'],
    ['Group', 'Five to ten at one level'],
    ['Or', 'One to one'],
    ['Hours', 'Evenings and weekends, Irish time'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Java is a strict, verbose, extremely well-established language, and it is worth learning for exactly those reasons: it forces you to say what you mean about types and structure. In Irish higher education it usually appears after a first language rather than as one, with Trinity a notable exception in first year and several universities introducing it in second year. We teach it live online, from the first class and object through collections, data structures and testing, to secondary students, college students and working adults. The first class is free, then USD 100 a month in a group of five to ten or USD 150 a month one to one.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three Java courses',
    lede: 'One for secondary students, one for college level and adults, one for where Java leads on mobile. Each card opens its syllabus.',
    items: [
      { course: 'java-programming-masterclass-for-teens', code: 'JAVA / 01', title: 'Java for Teens', note: 'A first strict language for secondary students, where the compiler insists on precision and the student learns to give it.' },
      { course: 'complete-java-programming-masterclass-college', code: 'JAVA / 02', title: 'Java Masterclass', note: 'The full language for college students and adults: objects, collections, generics, exceptions, files and tests, built into real programs.' },
      { course: 'complete-kotlin-programming-masterclass-professional', code: 'JAVA / 03', title: 'Kotlin Masterclass', note: 'The modern companion language on the same platform, widely used for Android work and increasingly on the server.' }
    ]
  },

  sections: [
    {
      id: 'where', tint: 'tint', eyebrow: 'Java in Irish degrees',
      h2: 'Where Java actually appears, module by module',
      lede: 'Read from the institutions\' own catalogues and handbooks. Departments change their choices, so treat this as a snapshot and check your own descriptor.',
      body: [
        { kind: 'table', caption: 'Java in Irish computing programmes, from official module documents', head: ['Institution', 'What the documents say', 'When'], rows: [
          ['Trinity College Dublin', 'Introduction to Programming II teaches programs "in an object-oriented language (in this case Java)"', 'Year 1, Semester 2'],
          ['Maynooth University', 'Introduction to Computer Science II lists an outcome to "write simple programmes in jva", a typo for Java in the descriptor itself', 'First-year pair of modules'],
          ['University of Galway', '"The main languages covered are C and Javascript in first year and then Java from second year onwards"', 'From year 2'],
          ['Dublin City University', 'The first two programming modules are Python, with Python textbooks on the reading list', 'Java not in those modules'],
          ['University College Dublin', 'Introduction to Java is a Level 2 module, described as building on prior programming', 'After a first language'],
          ['ATU Galway', 'A Year 2 module introduces "advanced topics in the Java programming language", with Oracle certification offered in year 3', 'Year 2']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'One honest caveat',
          left: [
            'At the University of Limerick, the introduction to programming module names no language at all in its syllabus prose. Its prime text, though, is a Java textbook. That is worth stating precisely rather than turning into a claim: the module sets a Java book, and the descriptor does not say what language students write in.',
            'Several other institutions publish no language for their first programming module, so we make no claim about them either.'
          ],
          rightH3: 'What this means for a learner',
          right: [
            'If you are starting a degree, learn to program first and worry about the language second. The concepts carry over; the syntax takes a fortnight.',
            'If you are heading into second year, or into a placement that uses Java, a focused course before term is genuinely useful, and that is when most of our Irish college students take one.'
          ] },
        { kind: 'source', html: 'Sources, read 16 September 2026: <a class="ag-inline-link" href="https://teaching.scss.tcd.ie/integrated-computer-science/ics-year-1/" rel="noopener" target="_blank">Trinity, Integrated Computer Science Year 1</a>; <a class="ag-inline-link" href="https://apps.maynoothuniversity.ie/courses/?TARGET=MODULE&MODE=VIEW&MODULE_CODE=CS162&YEAR=2025" rel="noopener" target="_blank">Maynooth CS162</a>; <a class="ag-inline-link" href="https://www.universityofgalway.ie/courses/undergraduate-courses/computer-science-and-information-technology.html" rel="noopener" target="_blank">University of Galway</a>; <a class="ag-inline-link" href="https://modspec.dcu.ie/registry/module_contents.php?function=2&subcode=CA116" rel="noopener" target="_blank">DCU CA116</a>; <a class="ag-inline-link" href="https://www.ucd.ie/modules/COMP20250" rel="noopener" target="_blank">UCD COMP20250</a>; <a class="ag-inline-link" href="https://bookofmodules.ul.ie/Default.aspx?ModuleCodeParameter=%7CCS4141%7C" rel="noopener" target="_blank">UL CS4141</a>. We are not affiliated with any of these institutions.' }
      ]
    },
    {
      id: 'school', tint: 'deep', eyebrow: 'Java and school',
      h2: 'Java is not on the Irish school curriculum',
      lede: 'Parents often ask whether a teenager should learn Java for school. The specifications answer that clearly.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Leaving Certificate Computer Science', p: 'The word Java does not appear anywhere in the specification. Searching the whole document for it as a standalone word returns nothing at all.' },
          { h3: 'Junior Cycle Coding', p: 'The same is true of both published versions of the short course specification: no mention of Java, with visual languages named among the resources instead.' },
          { h3: 'So why learn it?', p: 'Because of what comes after school. Java is where many Irish degrees go in second year, and it remains ordinary in Irish workplaces, particularly in finance and enterprise systems.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'For a teenager, the honest advice is to learn one language well first. If that is Python, brilliant. Java as a second language then takes weeks rather than months, and the strictness teaches things Python lets you skip.',
            'The reverse order also works. Students who start with Java tend to find dynamic languages easy afterwards, though they sometimes carry more ceremony than those languages need.'
          ],
          right: [
            'For school itself, our <a class="ag-inline-link" href="/leaving-cert-computer-science-grinds-online">Leaving Cert Computer Science page</a> covers the subject as it is actually assessed, and <a class="ag-inline-link" href="/junior-cycle-coding-short-course-help">Junior Cycle Coding help</a> covers the short course.',
            'A caveat worth stating: a revised Coding short course was signalled for September 2026, and we could not find the new specification, so the statement above covers the published versions we could read.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.curriculumonline.ie/getmedia/cff6eb86-9ff8-4e68-abf9-e42ca637492d/LC-Computer-Science-specification-updated.pdf" rel="noopener" target="_blank">Leaving Certificate Computer Science specification</a>; <a class="ag-inline-link" href="https://www.curriculumonline.ie/getmedia/cc254b82-1114-496e-bc4a-11f5b14a557f/NCCA-JC-Short-Course-Coding.pdf" rel="noopener" target="_blank">Junior Cycle Coding short course</a>, read 16 September 2026.' }
      ]
    },
    {
      id: 'learn', tint: 'tint', eyebrow: 'Learning it well',
      h2: 'How Java should be taught, and how it usually is',
      lede: 'Java gets a reputation for being tedious, and badly taught it deserves one. Taught well it is the clearest way to learn how large programs are structured.',
      body: [
        { kind: 'table', caption: 'Two ways to teach the same language', head: ['Topic', 'The tedious version', 'How we teach it'], rows: [
          ['Classes and objects', 'Copy a class definition and fill in blanks', 'Model something real, then discover why the fields need to be private'],
          ['Inheritance', 'Animal, Dog, Cat, forever', 'Refactor working code where duplication actually hurts'],
          ['Collections', 'Memorise the interface names', 'Choose a structure for a stated reason and measure the difference'],
          ['Exceptions', 'Wrap everything in try and catch', 'Decide what should fail loudly and what should be handled'],
          ['Tests', 'Mentioned at the end', 'Written from the second week, because Java makes them easy']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'The compiler is a teacher', p: 'Java refuses to run until types line up. That feels hostile for a fortnight and then becomes the fastest feedback in programming.' },
          { h3: 'Tooling matters', p: 'Students learn a real environment, a build tool and version control, because Java projects in the wild are never a single file.' },
          { h3: 'Data structures fit here', p: 'Java is a good language for a first serious data structures course, which is exactly why it turns up in second-year modules.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'Where Java leads next depends on the learner. On mobile, Kotlin runs on the same platform and shares its libraries, which is why it appears in the catalogue below.'
          ],
          right: [
            'On the server, the same skills lead into large systems work. Our <a class="ag-inline-link" href="/full-stack-software-development-course-ireland">full stack page</a> covers where that sits, and <a class="ag-inline-link" href="/app-development-course-ireland">app development</a> covers the mobile route.'
          ] },
        { kind: 'two', mt: true,
          leftH3: 'Certificates, and what they are worth',
          left: [
            'Java is one of the few languages with a long-established certification path, and some Irish institutions build it in: ATU Galway tells students they may take a professional certification such as an Oracle Java qualification in third year.',
            'Our own view is that a certificate helps at the margins, particularly for career changers with no degree in the field, and that a repository of finished work does more. We prepare students for certification when they want it, and say so plainly when we think their time is better spent building.'
          ],
          rightH3: 'Where Irish employers use it',
          right: [
            'Java tends to sit where systems are large, long-lived and cannot be rewritten on a whim: banking and payments, insurance, enterprise software, public-sector systems. Those are steady places to work and they value people who write clear, testable code over people who know the newest framework.',
            'It is also common in Android work alongside Kotlin, which is why mobile developers so often end up knowing both. The practical route through that is set out on our app development page.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The rungs',
    h2: 'Five rungs of Java',
    lede: 'Learners with another language behind them usually take half the time, because only the syntax and the ceremony are new.',
    table: { caption: 'The Java route', head: ['Rung', 'The learner can'], rows: [
      ['1. Syntax and types', 'Write, compile and run small programs with confidence'],
      ['2. Objects', 'Design classes that hide their data and expose sensible behaviour'],
      ['3. Collections', 'Use lists, maps and sets deliberately, knowing what each costs'],
      ['4. Structure', 'Split a program across files and packages, with tests'],
      ['5. Real projects', 'Build and run something with a build tool, dependencies and version control']
    ] },
    left: { h3: 'Java or Python first?', ps: [
      'For most beginners Python first, then Java. For students who already program, Java teaches structure faster than anything else.',
      'The whole order of languages and subjects is on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'For college students', ps: [
      'Students preparing for a second-year Java module usually take a focused course over the summer or alongside the first weeks of term.',
      'More on studying here is on <a class="ag-inline-link" href="/coding-for-college-students-ireland">coding for college students in Ireland</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine live courses around Java',
    lede: 'By stage, with the languages and tools that sit closest to it. The free first class settles the level.',
    bands: [
      { num: 'I', h3: 'School years', sub: 'A first strict language', courses: [
        { code: 'JV / SCHOOL / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for Teens', blurb: 'Objects and types for secondary students.' },
        { code: 'JV / SCHOOL / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem Solving for Teens', blurb: 'The reasoning Java rewards.' },
        { code: 'JV / SCHOOL / 03', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub for Teens', blurb: 'Projects kept properly from the start.' }
      ] },
      { num: 'II', h3: 'College and adults', sub: 'The language in full', courses: [
        { code: 'JV / COLLEGE / 01', slug: 'complete-java-programming-masterclass-college', title: 'Java Masterclass', blurb: 'Objects to generics, with tests throughout.' },
        { code: 'JV / COLLEGE / 02', slug: 'data-structures-algorithms-masterclass-college', title: 'Data Structures and Algorithms', blurb: 'The second-year module, made clear.' },
        { code: 'JV / COLLEGE / 03', slug: 'mysql-database-complete-masterclass-college', title: 'MySQL Masterclass', blurb: 'The database most Java systems talk to.' }
      ] },
      { num: 'III', h3: 'Around Java', sub: 'Neighbouring languages', courses: [
        { code: 'JV / NEAR / 01', slug: 'complete-kotlin-programming-masterclass-professional', title: 'Kotlin Masterclass', blurb: 'The same platform, less ceremony.' },
        { code: 'JV / NEAR / 02', slug: 'complete-typescript-programming-masterclass-college', title: 'TypeScript Masterclass', blurb: 'Static types, on the web side.' },
        { code: 'JV / NEAR / 03', slug: 'cpp-programming-complete-masterclass-college', title: 'C++ Masterclass', blurb: 'For learners who want to go lower.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How the classes run',
    h2: 'Live lessons, with code compiling in front of you',
    lede: 'Teaching is live, from India, at one fixed hour each week set in Irish time. India keeps a single clock all year and Ireland switches twice, so our teachers are four and a half hours ahead of you in summer and five and a half in winter. Students and working adults usually take evening slots.',
    slots: [
      { time: 'Weekday evening', l: 'The usual choice, Irish time.' },
      { time: 'Weekend', l: 'Longer project sessions.' },
      { time: 'Summer intensives', l: 'Before a second-year module starts.' }
    ],
    cells: [
      { h3: 'A free first class', p: 'You write and compile real Java with a teacher and get a clear view of the right starting rung.' },
      { h3: 'Groups of five to ten', p: 'Learners at one level, reading each other\'s classes and suggesting better designs.' },
      { h3: 'One to one', p: 'For a deadline, a placement or a particular codebase at work.' },
      { h3: 'Real tooling', p: 'A proper editor, a build tool and version control from early on, as used in any Java job.' },
      { h3: 'Tests from week two', p: 'Java makes automated tests straightforward, so students write them as a habit.' },
      { h3: 'Never assessed work', p: 'We do not write, edit or review anything being submitted for marks.' }
    ]
  },

  projectsH2: 'Programs our students wrote',
  projectsLede: 'Four projects our students published, across several languages. The full set lives on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Reviews as left on Google by our students and their families, unedited and unpaid.',

  fees: {
    h2: 'Java class fees',
    lede: 'One monthly price in US dollars, the same in every country outside India and at every level. Nothing to pay to enrol, and no term or year to sign up for.',
    free: ['Real Java written and compiled', 'An honest view of the right rung', 'No card taken'],
    group: ['Five to ten learners at one level', 'The same teacher each week', 'Code reviewed weekly', 'A certificate at the end'],
    one: ['A teacher to yourself', 'Built around a module or a job', 'Good before a second-year course']
  },

  faq: {
    eyebrow: 'Questions',
    h2: 'What learners in Ireland ask about Java',
    items: [
      { q: 'Do Irish universities teach Java in first year?', a: 'Some do and many do not. Trinity names Java in a first-year module, while the University of Galway states that Java comes from second year onwards and DCU teaches Python first. Check your own module descriptor.' },
      { q: 'Is Java on the Leaving Cert Computer Science course?', a: 'No. The word Java does not appear in the specification, and it does not appear in the Junior Cycle Coding short course either.' },
      { q: 'Should my teenager learn Java or Python first?', a: 'Python first for most beginners. Java afterwards is quick, and its strictness teaches structure that Python lets you postpone.' },
      { q: 'Is Java still used at work in Ireland?', a: 'Yes, particularly in enterprise systems and financial services, and it remains a common language for large, long-lived codebases.' },
      { q: 'What about Kotlin?', a: 'Kotlin runs on the same platform and works with the same libraries. It is widely used for Android work, and Java knowledge transfers to it easily.' },
      { q: 'Can you help me prepare for a Java module in second year?', a: 'Yes, and that is when most of our Irish college students come. We teach the skills, never the assessed work itself.' },
      { q: 'Do I need a powerful computer?', a: 'No. Any reasonably current laptop runs a Java development environment comfortably.' },
      { q: 'What do classes cost?', a: 'The first is free. After that a group place is USD 100 a month and one-to-one lessons are USD 150 a month, in US dollars, with no enrolment fee.' },
      { q: 'When are classes held?', a: 'Evenings and weekends at a weekly hour agreed in the free class. Our teachers are four and a half hours ahead of Irish time in summer and five and a half in winter.' },
      { q: 'What happens after I send the form?', a: 'We ring at a reasonable Irish hour and arrange the free class. There is no charge unless you continue.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Where Java sits among everything else.',
    items: [
      { href: '/coding-for-college-students-ireland', label: 'Coding for college students in Ireland', p: 'Modules, terms and portfolios.' },
      { href: '/app-development-course-ireland', label: 'App development course in Ireland', p: 'The mobile route from here.' },
      { href: '/full-stack-software-development-course-ireland', label: 'Full stack software development', p: 'Where server languages live.' },
      { href: '/best-coding-classes-for-teens-ireland', label: 'Best coding classes for teens in Ireland', p: 'The school years.' },
      { href: '/leaving-cert-computer-science-grinds-online', label: 'Leaving Cert Computer Science grinds', p: 'The subject as assessed.' },
      { href: '/coding-classes-in-ireland', label: 'Coding classes in Ireland', p: 'The national page.' }
    ]
  },

  start: {
    h2: 'Write your first Java class in a free lesson',
    lede: 'Leave a number and we will ring at a time that suits you in Ireland. In the free class you write and compile real Java with a teacher, and find out honestly where to begin.',
    readFirst: 'Want to look first? See <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, the <a class="ag-inline-link" href="/courses">course syllabuses</a>, and <a class="ag-inline-link" href="/student-labs">what our students built</a>.',
    note: 'WhatsApp is free from an Irish phone and usually quickest. The number is Indian, since our teachers work from India, and we have no Irish office.',
    formNote: 'No card, no obligation, one call.'
  },

  footer: {
    cols: [
      { h4: 'Languages', links: [
        { href: '/best-python-classes-online-ireland', label: 'Python classes' },
        { href: '/app-development-course-ireland', label: 'App development' },
        { href: '/full-stack-software-development-course-ireland', label: 'Full stack development' },
        { href: '/coding-roadmap', label: 'The coding roadmap' }
      ] },
      { h4: 'Ireland', links: [
        { href: '/coding-classes-in-ireland', label: 'Coding classes in Ireland' },
        { href: '/coding-for-college-students-ireland', label: 'Coding for college students' },
        { href: '/best-coding-classes-for-teens-ireland', label: 'Coding for teens' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Java, where it actually belongs'
  },

  personalityCss: `
.ag-root.ag-jvi .ag-hero-grid { gap: clamp(1.16rem, 3.36vw, 2.74rem); }
.ag-root.ag-jvi .ag-hero h1 { letter-spacing: -0.017em; }
.ag-root.ag-jvi .ag-capsule { border-left-width: 5px; }
.ag-root.ag-jvi .ag-section-head h2 { max-width: 37ch; }
.ag-root.ag-jvi .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-jvi .ag-band-head h3 { letter-spacing: -0.0095em; }
.ag-root.ag-jvi .ag-spec dt { letter-spacing: 0.126em; }
.ag-root.ag-jvi .ag-slots { gap: 1.11rem; }
`,

  mustMention: ['in this case Java', 'Introduction to Programming II', 'jva', 'from second year onwards', 'Level 2 module', 'Python', 'prime text', 'does not appear', 'Kotlin', 'ATU', 'Oracle', 'Maynooth']
};
