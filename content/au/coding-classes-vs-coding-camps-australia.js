'use strict';
// Coding classes vs coding camps, Australia (ag- comparison door; AU cluster Phase 4, row 109).
// Sources, read raw on 7 October 2026:
//  - Crossref metadata for Cepeda, Pashler, Vul, Wixted and Rohrer (2006), "Distributed practice in verbal recall
//    tasks: A review and quantitative synthesis", Psychological Bulletin 132(3), 354-380 (title and details only;
//    the article itself was not read, so none of its findings is quoted).
//  - Australian Tutoring Association, "When to start tutoring?": "One to three hours per week in a hands-on playgroup
//    style would not be considered too much for very young children. However more than this would not generally be
//    recommended except in exceptional circumstances (remediation, for example)."
//  - Victorian Government, school term dates 2027 and 2028: breaks between 2027 terms run 26 March to 11 April
//    (17 days), 26 June to 11 July (16 days) and 18 September to 3 October (16 days); Term 4 2027 ends Friday
//    17 December and Term 1 2028 starts Thursday 27 January, a summer break of 40 days (18 December to 26 January).
// Our toy model: memory strength S starts at 1 day; recall after t days is exp(-t/S); each new session after a gap g
// multiplies S by 1 + k(1 - exp(-g/S)). Ten one-hour blocks: a camp (two a day for five days), weekly (ten weeks) and
// twice weekly (five weeks). Recall 28 days after the last session: k = 3 gives 7.8%, 82.9% and 70.2%; k = 2 gives
// 2.4%, 74.4%, 57.8%; k = 1 gives 0.1%, 50.7%, 30.4%. The ordering is the same for every k tried.
// Lesson family: massed versus spaced practice with an exponential forgetting model.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'guide', tag: 'CLASSES OR CAMPS', blurb: 'Weekly coding classes and school-holiday coding camps compared for Australian children, with a forgetting-curve model you can run yourself.' },
  slug: 'coding-classes-vs-coding-camps-australia',
  code: 'cvca',
  accent: '#9C2018',
  accentRationale: 'Classes vs camps, Australia: a brick red chosen by hand, muted, at least 10 RGB units from every accent in use and outside the excluded hue bands',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'Coding classes vs coding camps, Australia',
  title: 'Coding Classes vs Coding Camps in Australia: Which Sticks?',
  description: 'Weekly coding classes or a school-holiday coding camp? What each does well for Australian kids, why spacing practice matters, and how to combine the two.',
  ogDescription: 'A holiday camp crams ten hours into a week; a weekly class spreads them over a term. What each format does well, and a forgetting-curve model to show why spacing matters.',
  twitterDescription: 'Coding classes vs coding camps in Australia: what each does well, and why spacing matters.',
  pageName: 'Coding Classes vs Coding Camps in Australia',
  webPageDescription: 'A comparison of weekly coding classes and school-holiday coding camps for Australian children, with a worked forgetting-curve model.',
  courseDescription: 'Weekly live online coding classes for Australian learners aged 6 to 67, plus holiday projects, taught by one regular teacher.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'Classes or camps',
  navLinks: [
    { href: '#compare', label: 'Compare' },
    { href: '#spacing', label: 'Spacing' },
    { href: '#holidays', label: 'Holidays' },
    { href: '#combine', label: 'Combining' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Ages 6 to 67 &middot; Weekly or intensive',
  h1: 'Coding classes vs coding camps',
  lede: 'School holidays bring a wave of coding camps: a week of games, robots and animation, often finishing with a showcase for parents. Weekly classes are quieter, an hour or two a week through the term. Families ask us which is better, and the honest answer is that they do different jobs. This page compares the two formats, uses a simple forgetting-curve model to show why spreading practice out tends to make skills stick, and suggests ways to combine a camp with weekly lessons.',
  secondaryCta: { href: '#spacing', label: 'Why spacing matters' },
  wa: 'Hello Modern Age Coders, we are deciding between a coding camp and weekly coding classes in Australia. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; weekly lessons with one regular teacher',
  spec: [
    ['For', 'Ages 6 to 67'],
    ['Our format', 'Weekly live lessons'],
    ['Rhythm', 'Twice a week, all term'],
    ['Holidays', 'Project weeks optional'],
    ['Teacher', 'The same one each week'],
    ['Delivery', 'Live online video'],
    ['Group size', 'Five to ten, or one to one'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'A coding camp packs many hours into a few holiday days, which is great for trying coding and finishing one project; weekly classes spread the same hours over a term, which tends to help skills stick. In our toy forgetting-curve model, ten hours as a five-day camp left 7.8% recall a month later, while the same ten hours spread weekly left 82.9%. Many families combine the two.',

  picks: {
    eyebrow: 'Weekly courses',
    h2: 'Three courses taught week by week',
    lede: 'Each of these builds skills steadily across terms, with the same teacher.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'CVCA / 01', title: 'Scratch, term after term', note: 'Ages 6 to 12. Games that grow more ambitious each week.' },
      { course: 'game-development-masterclass-for-kids', code: 'CVCA / 02', title: 'Game development for kids', note: 'Ages 8 to 12. Scratch, then Roblox and Minecraft worlds.' },
      { course: 'python-complete-masterclass-teens', code: 'CVCA / 03', title: 'Python for teenagers', note: 'Ages 13 to 18. Skills that build on each other.' }
    ]
  },

  sections: [
    {
      id: 'compare', tint: 'tint', eyebrow: 'Side by side',
      h2: 'What camps and weekly classes each do well',
      lede: 'Neither format is a lesser version of the other. They suit different goals.',
      body: [
        { kind: 'table', caption: 'Holiday coding camps and weekly coding classes compared', head: ['Factor', 'Holiday camp', 'Weekly class'], rows: [
          ['Hours', 'Many hours in a few days', 'An hour or two a week'],
          ['Good for', 'Trying coding, finishing one project', 'Building skills that carry forward'],
          ['Momentum', 'Intense, then a long pause', 'Steady, with practice between lessons'],
          ['Teacher', 'Often someone new each camp', 'Usually the same teacher all term'],
          ['Social side', 'A burst of new friends', 'A regular group across months'],
          ['Fit with school', 'Holidays only', 'Alongside school, through the term'],
          ['What a child keeps', 'A finished project and memories', 'Skills and a growing portfolio']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Where camps shine',
          left: [
            'A camp is a low-risk way to find out whether a child enjoys coding at all. Five days of games and making things is often enough to tell.',
            'Camps also suit one finished product: an animation, a game or a website built from start to end in a week, which is satisfying and easy to show off.'
          ],
          rightH3: 'Where weekly classes shine',
          right: [
            'Skills such as loops, variables and debugging take repeated practice over weeks. A weekly rhythm brings each idea back again and again, just as it is starting to fade.',
            'A teacher who sees a child every week notices what they keep getting wrong, and plans the next lesson around it.'
          ] }
      ]
    },
    {
      id: 'spacing', tint: 'deep', eyebrow: 'Spacing practice',
      h2: 'Massed practice versus spaced practice: a model you can run',
      lede: 'Psychologists call cramming massed practice, and spreading the same practice out spaced or distributed practice. A 2006 review in Psychological Bulletin by Cepeda, Pashler, Vul, Wixted and Rohrer is titled "Distributed practice in verbal recall tasks: A review and quantitative synthesis". We did not read the paper itself, so instead of quoting its results, here is a small model that shows the idea.',
      body: [
        { kind: 'table', caption: 'Recall 28 days after the last session, ten one-hour sessions (our toy model)', head: ['Schedule', 'Spread over', 'Boost k = 1', 'Boost k = 2', 'Boost k = 3'], rows: [
          ['Camp: two hours a day for five days', '4 days', '0.1%', '2.4%', '7.8%'],
          ['Twice a week for five weeks', '31 days', '30.4%', '57.8%', '70.2%'],
          ['Once a week for ten weeks', '63 days', '50.7%', '74.4%', '82.9%']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How the model works',
          left: [
            'Each skill has a memory strength S, counted in days. After t days without practice, the chance of recalling it is e to the power of minus t divided by S, the shape usually called a forgetting curve.',
            'When the learner practises again after a gap, S grows by a factor of 1 + k &times; (how much had been forgotten). A review straight after the last one adds little, because nothing has been forgotten yet; a review after a week, when the memory has faded a bit, adds a lot.'
          ],
          rightH3: 'What the numbers show',
          right: [
            'With the same ten hours, the camp leaves a weak memory a month later, while the weekly schedule leaves a strong one, for every boost value we tried. The ordering never changes, even though the exact percentages do.',
            'The model is ours and deliberately simple: real children practise between sessions, enjoy some topics more than others and revisit ideas at school. Treat the percentages as an illustration, not a prediction.'
          ] },
        { kind: 'p', mt: true, html: 'Learners can build this model in Python with a loop over the gaps between sessions and <code>math.exp</code>. It is a good first taste of simulation: change one number, the boost k, and see whether the conclusion survives. Ours does, which is why we teach in weekly lessons and keep holidays for projects.' },
        { kind: 'source', html: 'Source: Crossref metadata for <a class="ag-inline-link" href="https://doi.org/10.1037/0033-2909.132.3.354" rel="noopener" target="_blank">Cepeda et al. (2006), Psychological Bulletin 132(3), 354 to 380</a>, read 7 October 2026 (title, authors, journal and pages only). The recall table is our own toy model, labelled as such.' }
      ]
    },
    {
      id: 'holidays', tint: 'tint', eyebrow: 'Holiday dates',
      h2: 'How long Australian school holidays actually are',
      lede: 'Camps happen in the gaps between terms. Using Victoria\'s published dates, here is how long those gaps are in 2027.',
      body: [
        { kind: 'table', caption: 'Breaks between Victorian school terms, 2027 into 2028 (Victorian Government dates; day counts are our own)', head: ['Break', 'From', 'To', 'Length'], rows: [
          ['After Term 1', 'Friday 26 March', 'Sunday 11 April', '17 days, 11 weekdays'],
          ['After Term 2', 'Saturday 26 June', 'Sunday 11 July', '16 days, 10 weekdays'],
          ['After Term 3', 'Saturday 18 September', 'Sunday 3 October', '16 days, 10 weekdays'],
          ['Summer', 'Saturday 18 December', 'Wednesday 26 January 2028', '40 days, 28 weekdays']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the gaps mean for skills',
          left: [
            'A weekly learner who stops for the whole summer break goes 40 days without coding. In the forgetting model, that is a long stretch for a new skill, which is why the first lesson back often starts with a quick revision game.',
            'The shorter breaks, around two weeks each, are a natural place for a camp or a small holiday project.'
          ],
          rightH3: 'Other states',
          right: [
            'Every state and territory sets its own term dates, and they differ by days to a week. Our <a class="ag-inline-link" href="/school-holiday-coding-course-australia">school holiday coding course page</a> lists the dates we could verify for each state.',
            'Weekday counts here include any public holidays that fall inside the breaks, such as Easter Monday after Term 1.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.vic.gov.au/school-term-dates-and-holidays-victoria" rel="noopener" target="_blank">Victorian Government, school term dates and holidays</a>, read 7 October 2026. Break lengths are our own count from those dates.' }
      ]
    },
    {
      id: 'young', tint: 'deep', eyebrow: 'Young children',
      h2: 'How many hours suit younger children?',
      lede: 'Camps sometimes run full school-day hours. For young children, that is a lot of screen and concentration time.',
      body: [
        { kind: 'two',
          leftH3: 'What the tutoring body says',
          left: [
            'The Australian Tutoring Association, writing about tutoring for very young children, says: "One to three hours per week in a hands-on playgroup style would not be considered too much for very young children. However more than this would not generally be recommended except in exceptional circumstances (remediation, for example)."',
            'That guidance concerns pre-school-aged children, not school-aged coders, but the principle carries over: little and often suits young learners better than long blocks.'
          ],
          rightH3: 'What we do',
          right: [
            'Our youngest learners, from age six, have one-hour lessons with a break built in, and plenty of unplugged activity away from the screen.',
            'If a young child does a holiday camp, a half-day program usually suits better than a full day, and the child should be able to tell you what they made each day.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://ata.edu.au/parent-info/when-to-start-tutoring/" rel="noopener" target="_blank">Australian Tutoring Association, when to start tutoring</a>, read 7 October 2026.' }
      ]
    },
    {
      id: 'combine', tint: '', eyebrow: 'Combining',
      h2: 'Using a camp and weekly classes together',
      lede: 'The two formats pair up nicely. Here are combinations we see working for families.',
      body: [
        { kind: 'table', caption: 'Ways to combine camps and weekly coding classes', head: ['Plan', 'How it works', 'Suits'], rows: [
          ['Camp first, then weekly', 'A holiday camp to test interest, then weekly lessons from the next term', 'Children new to coding'],
          ['Weekly, with holiday projects', 'Weekly lessons in term, a small project to finish over each break', 'Children already coding regularly'],
          ['Weekly, plus one themed camp', 'Weekly skills all year, one camp on a new topic such as robotics or animation', 'Children who like variety'],
          ['Holiday intensive for a goal', 'Extra one-to-one lessons in a break before a competition or school project', 'Teenagers with a deadline']
        ] },
        { kind: 'p', mt: true, html: 'Whatever the plan, two habits help most: a few minutes of coding during long breaks, and a teacher who checks at the start of term what has faded. If cost is part of the decision, see <a class="ag-inline-link" href="/coding-classes-cost-australia">what coding classes cost in Australia</a>, and for the format question, <a class="ag-inline-link" href="/online-vs-in-person-coding-classes-australia">online versus in-person classes</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Across a year',
    h2: 'A year of weekly coding, term by term',
    lede: 'How skills build when practice is spread across the school year.',
    table: { caption: 'A typical first year of weekly lessons', head: ['Term', 'Focus'], rows: [
      ['Term 1', 'First programs, events and loops, one small game'],
      ['Term 2', 'Variables, scores and conditions, a bigger game'],
      ['Term 3', 'Lists, debugging habits, a project of the learner\'s choice'],
      ['Term 4', 'A showcase project, presented to the group']
    ] },
    left: { h3: 'For children', ps: [
      'Each term revisits the last one\'s ideas inside a new project, so nothing is learned once and dropped.',
      'Holiday breaks become project time rather than a full stop.'
    ] },
    right: { h3: 'For teens and adults', ps: [
      'Weekly lessons fit around school, sport and work, with steady progress through the year.',
      'Short intensives can be added before a deadline.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses taught weekly',
    lede: 'Every course runs as weekly live lessons through the year.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 12', courses: [
        { code: 'CVCA / CHD / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Blocks to games and apps.' },
        { code: 'CVCA / CHD / 02', slug: 'creative-coding-animation-mastery', title: 'Creative coding and animation', blurb: 'Art and motion in code.' },
        { code: 'CVCA / CHD / 03', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'Typed code, small AI projects.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'CVCA / TEN / 01', slug: 'complete-game-development-masterclass-for-teens', title: 'Game development', blurb: 'Unity and C#.' },
        { code: 'CVCA / TEN / 02', slug: 'frontend-development-masterclass-for-teens', title: 'Front-end web', blurb: 'HTML, CSS and JavaScript.' },
        { code: 'CVCA / TEN / 03', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Problem solving that compounds.' }
      ] },
      { num: 'III', h3: 'Adults', sub: '18 and over', courses: [
        { code: 'CVCA / ADL / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python from zero', blurb: 'Steady progress for beginners.' },
        { code: 'CVCA / ADL / 02', slug: 'artificial-intelligence-complete-masterclass-college', title: 'Artificial intelligence', blurb: 'Models, data and evaluation.' },
        { code: 'CVCA / ADL / 03', slug: 'react-js-complete-masterclass-college', title: 'React', blurb: 'Modern web apps.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Weekly lessons that build on each other',
    lede: 'Each lesson starts with what the learner remembers from the last.',
    slots: [
      { time: 'After school', l: 'Weekday afternoons in your state.' },
      { time: 'Evenings', l: 'For teens and adults.' },
      { time: 'Weekends', l: 'Saturday and Sunday slots.' }
    ],
    cells: [
      { h3: 'Warm-up recall', p: 'A two-minute challenge on last week\'s idea.' },
      { h3: 'Same teacher', p: 'Someone who knows what fades for your child.' },
      { h3: 'Projects that grow', p: 'Each term builds on the last.' },
      { h3: 'Holiday projects', p: 'Optional work to keep skills warm.' },
      { h3: 'Live, online', p: 'No travel, any state.' },
      { h3: 'Small groups', p: 'Five to ten, or one to one.' }
    ]
  },

  projectsH2: 'Projects built week by week',
  projectsLede: 'Learner projects that grew over several terms of weekly lessons. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'What families wrote on Google, quoted word for word.',

  fees: {
    h2: 'Fees',
    lede: 'Weekly lessons outside India are billed monthly in US dollars, one rate in every country. No joining fee, no term contract, and you can pause over a long holiday or stop after any month.',
    free: ['A free first lesson', 'A suggested weekly plan', 'No card details'],
    group: ['Five to ten learners', 'One regular teacher', 'Twice a week', 'Monthly'],
    one: ['A teacher to yourself', 'Your own pace', 'Holiday intensives possible']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'Coding classes or coding camps: common questions',
    items: [
      { q: 'What is the difference between a coding camp and a coding class?', a: 'A camp packs many hours of coding into a few days, usually in the school holidays; a class runs an hour or two a week through the term. Camps suit trying coding and finishing a project; classes suit building lasting skills.' },
      { q: 'What is massed practice?', a: 'Massed practice means doing a lot of practice in one block, such as a week of all-day sessions. Spaced or distributed practice spreads the same amount of practice out over a longer period.' },
      { q: 'What is a forgetting curve?', a: 'A forgetting curve describes how recall of something learned fades over time without practice. Our page models it with an exponential curve and shows how spaced reviews slow the fade.' },
      { q: 'Are coding camps worth it?', a: 'Yes, for trying coding, meeting other young coders and finishing one project. For skills that last, follow a camp with regular weekly practice.' },
      { q: 'Do skills from a camp fade?', a: 'Often, unless they are used again. In our toy model, ten hours as a five-day camp left far less recall a month later than the same ten hours spread over ten weeks.' },
      { q: 'How long are Australian school holidays?', a: 'In Victoria in 2027, the breaks between terms are 16 or 17 days, and the summer break from 18 December 2027 to 26 January 2028 is 40 days. Other states differ by a few days.' },
      { q: 'How many hours of coding suit a young child?', a: 'Short, regular sessions suit young children most. The Australian Tutoring Association suggests one to three hours a week for very young children in a hands-on style.' },
      { q: 'Can we combine a camp with weekly lessons?', a: 'Yes. Many families use a camp to test interest, then start weekly lessons, or keep weekly lessons and add one themed camp a year.' },
      { q: 'Do you run lessons in the holidays?', a: 'Weekly lessons can continue through the holidays, or pause, as the family prefers. Learners can also take a small holiday project to finish between terms.' },
      { q: 'How much do weekly lessons cost?', a: 'The first lesson is free. Weekly lessons are then billed monthly with no joining fee and no term lock-in, as shown in the fees section.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Australian families planning coding across the year.',
    items: [
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'Our main page for Australian families.' },
      { href: '/school-holiday-coding-course-australia', label: 'School holiday coding course', p: 'Holiday dates by state.' },
      { href: '/online-vs-in-person-coding-classes-australia', label: 'Online or in person', p: 'Comparing the two formats.' },
      { href: '/coding-classes-cost-australia', label: 'What coding classes cost', p: 'Per lesson and per term.' },
      { href: '/free-coding-classes-for-kids-australia-what-you-get', label: 'Free coding classes', p: 'What free options include.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our method in detail.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Tell us the learner\'s age and what they enjoy. After the first lesson, the teacher suggests a weekly plan, with or without holiday projects.',
    readFirst: 'Want more detail first? Read <a class="ag-inline-link" href="/how-we-teach">how a lesson runs</a> or look through <a class="ag-inline-link" href="/courses">our courses</a>.',
    note: 'The fastest way to reach us from Australia is WhatsApp; replies come from our team in India on a +91 number, and there is no Australian office.',
    formNote: 'Your first lesson is free and needs no card.'
  },

  footer: {
    cols: [
      { h4: 'Planning the year', links: [
        { href: '/school-holiday-coding-course-australia', label: 'School holiday course' },
        { href: '/coding-classes-cost-australia', label: 'What lessons cost' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/online-vs-in-person-coding-classes-australia', label: 'Online or in person' },
        { href: '/game-development-for-kids-australia', label: 'Game development for kids' },
        { href: '/coding-games-for-kids-australia', label: 'Coding games for kids' }
      ] }
    ],
    bottomRight: 'Little and often beats all at once'
  },

  personalityCss: `
.ag-root.ag-cvca .ag-hero h1 { letter-spacing: -0.013em; }
.ag-root.ag-cvca .ag-capsule { border-left-width: 6px; border-radius: 5px; }
.ag-root.ag-cvca .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-cvca .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-cvca .ag-band-head h3 { letter-spacing: -0.009em; }
.ag-root.ag-cvca .ag-slots { gap: 0.95rem; }
`,

  dossier: {
    curriculumAuthority: 'Australia, classes versus camps. Crossref metadata: Cepeda, Pashler, Vul, Wixted and Rohrer (2006), "Distributed practice in verbal recall tasks: A review and quantitative synthesis", Psychological Bulletin 132(3), 354-380. Australian Tutoring Association, when to start tutoring: "One to three hours per week in a hands-on playgroup style would not be considered too much for very young children." Victorian Government term dates: 2027 breaks 26 March to 11 April, 26 June to 11 July, 18 September to 3 October; summer 18 December 2027 to 26 January 2028.',
    localProject: 'Toy forgetting model (ours): S starts at 1 day, recall exp(-t/S), each session after gap g multiplies S by 1 + k(1 - exp(-g/S)). Ten one-hour blocks; recall 28 days after the last: camp (two a day, five days) 0.1%, 2.4%, 7.8% for k = 1, 2, 3; twice weekly for five weeks 30.4%, 57.8%, 70.2%; weekly for ten weeks 50.7%, 74.4%, 82.9%. Break lengths: 17, 16, 16 days and a 40-day summer (28 weekdays). Lesson family: massed versus spaced practice.',
    requiredMentions: ['Cepeda', 'Distributed practice in verbal recall tasks', 'Psychological Bulletin', 'massed practice', 'forgetting curve', 'One to three hours per week', 'playgroup style', '82.9%', '7.8%', '40 days'],
    sources: [
      { claim: 'Crossref metadata: Cepeda et al. (2006), Distributed practice in verbal recall tasks, Psychological Bulletin 132(3), 354-380.', url: 'https://doi.org/10.1037/0033-2909.132.3.354' },
      { claim: 'Australian Tutoring Association: when to start tutoring, hours per week for very young children.', url: 'https://ata.edu.au/parent-info/when-to-start-tutoring/' },
      { claim: 'Victorian Government: school term dates 2027 and 2028.', url: 'https://www.vic.gov.au/school-term-dates-and-holidays-victoria' }
    ],
    rejectedClaims: [
      'The effect sizes or recommended gaps from Cepeda et al. (2006): the article was not read raw, so only its title and details are cited.',
      'Prices of named holiday coding camps: camp prices were not quoted, and no provider is named or compared.',
      'Claims that camps do not work: refused; the page says camps suit trying coding and finishing a project.',
      'Real recall rates for children: the forgetting table is a toy model with invented constants, labelled as such.',
      'Holiday dates for other states: left to the school holiday course page, which lists only those verified.'
    ]
  }
};
