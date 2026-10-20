'use strict';
// iD Tech alternative (ag- comparison door; US cluster Phase 3, row 58).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md. iD Tech facts read raw on idtech.com on 17 October 2026
// (copies in keyword-research-2026-09/us/src/id-tech-alternative/):
//  - Home: "founded in 1999"; "iD Tech serves kids and teens ages 7-19. Summer camps are for ages 7-17. Teen academies are
//    for ages 13-18. Private lessons are for ages 7-19."; camps are week-long, "held at one of over 75 prestigious
//    universities"; day and overnight options; teen academies "two-week, immersive"; "50+ topics"; "100% USA-based adult
//    instructors"; "adhere to American Camp Association accredited guidelines"; "Registration for Summer '27 opens November
//    8th"; support "Monday through Friday: 8am - 5pm Pacific Time".
//  - /tutoring and the Private Lessons Packs page: "live, 1-on-1 online lessons for kids and teens ages 7-19"; "1, 4, 8, or
//    12 lessons per month"; "4 lessons per month is our most popular package"; "Each 60-minute lesson takes place over Zoom";
//    "rescheduled up to 24 hours ahead"; "post-session progress report"; Discovery Lessons; Fall Pack of 8 or 12; AI & Machine
//    Learning with NVIDIA, "20 lessons, 1 hour per lesson"; topics include Scratch, Python, Java, C++, Roblox and Lua, Unity
//    with C#, Godot, Fortnite, and maths from homework help to Calculus.
//  - /virtual: virtual camps "Ages : 7-17", "Duration : 1 week, daily for 2 hours", "Format : Small-group"; "Campers spend 2
//    hours together with their peers and instructors and 2 hours working independently on their project"; "no-cost
//    cancellations up to 72 hours prior to the start of camp".
// Not used: prices (shown on iD Tech's site), alumni and parent totals, Trustpilot score, named universities and partner
// brands (marketing; not needed for a neutral comparison).
// Our own material, labelled: the twelve-month plan mixing a camp week and weekly lessons; the arithmetic 4 x 60 = 240
// minutes = 4 hours a month on iD Tech's most popular package, and 2 + 2 = 4 hours a camp day of which 2 with instructors;
// the Pacific-to-Eastern conversion of iD Tech's support hours (8am to 5pm PT = 11am to 8pm ET).
// Lesson family: time arithmetic and time-zone conversion.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'COMPARISON', blurb: 'iD Tech&rsquo;s camps and private lessons beside Modern Age Coders&rsquo; year-round classes, from iD Tech&rsquo;s own pages.' },
  slug: 'id-tech-alternative',
  code: 'ita',
  accent: '#0C522E',
  accentRationale: 'iD Tech alternative: a pine green, #0C522E as allocated, cooler than the fern of the Create & Learn page and strong on the paper',
  pageType: 'market',
  market: US,
  routeLabel: 'iD Tech alternative',
  title: 'iD Tech Alternative: Camps, Private Lessons, Weekly Classes',
  description: 'Thinking beyond iD Tech? Its summer camps, teen academies and 1-on-1 online lessons as it describes them, set beside year-round classes at Modern Age Coders.',
  ogDescription: 'iD Tech is best known for week-long summer tech camps and live 1-on-1 online lessons for ages 7 to 19. What it publishes, how a year-round school differs, and a plan that uses both.',
  twitterDescription: 'iD Tech camps and lessons beside year-round live classes, compared on published facts.',
  pageName: 'iD Tech Alternative',
  webPageDescription: 'A neutral comparison of iD Tech and Modern Age Coders for US families, built from idtech.com as read on 17 October 2026, with a twelve-month plan and time arithmetic labelled as ours.',
  courseDescription: 'Year-round live online coding classes for US kids and teens, in batches, mini batches or one to one, from Modern Age Coders.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'iD Tech alternative',
  navLinks: [
    { href: '#programs', label: 'Three programs' },
    { href: '#lessons', label: 'Private lessons' },
    { href: '#camps', label: 'Virtual camps' },
    { href: '#year', label: 'A twelve-month plan' },
    { href: '#contrast', label: 'Contrast' },
    { href: '#fees', label: 'Our fees' }
  ],
  eyebrow: 'United States &middot; Ages 7 to 19 &middot; idtech.com, 17 October 2026',
  h1: 'iD Tech alternative: camps, lessons or a year-round class?',
  lede: 'For many American families iD Tech means summer: a week of tech camp on a university campus. It also runs two-week academies for teens and live private lessons online all year. People look for an alternative for different reasons, usually because they want something weekly in the school year, or a different price, schedule or teacher. This page lays out iD Tech&rsquo;s programs exactly as its website described them on 17 October 2026, shows how a year-round online school like ours is organised instead, and suggests how the two can even fit together.',
  secondaryCta: { href: '#programs', label: 'See iD Tech&rsquo;s programs' },
  wa: 'Hello Modern Age Coders, my child did an iD Tech camp and we want weekly coding classes in the US school year. Could we book a free first lesson?',
  heroNote: 'Sourced from idtech.com &middot; 17 October 2026 &middot; comparison without rankings',
  spec: [
    ['iD Tech founded', '1999'],
    ['iD Tech ages', '7 to 19'],
    ['Its lesson length', '60 minutes, 1-on-1'],
    ['Its camps', 'A week, online or on campus'],
    ['With us', 'Ages 6 to 67, all year'],
    ['Group choices here', 'Batch, mini batch or private'],
    ['Scheduling here', 'Weekdays or weekends, flexible'],
    ['Try us', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'iD Tech, founded in 1999, offers week-long summer camps for ages 7 to 17 (on campus or virtual), two-week teen academies for 13 to 18, and live 60-minute 1-on-1 online lessons for 7 to 19, taught by US-based adult instructors. Modern Age Coders is a year-round online school: weekly live classes in batches, mini batches of up to six, or privately, for learners from age 6, with teachers in India.',

  picks: {
    eyebrow: 'After the camp ends',
    h2: 'Three weekly courses that continue common camp topics',
    lede: 'Roblox, Python and Unity are among iD Tech&rsquo;s popular topics; these are our weekly courses in the same areas.',
    items: [
      { course: 'roblox-game-coding-for-kids-lua-course', code: 'ITA / 01', title: 'Roblox game coding', note: 'Middle grades. Weekly Luau projects in Roblox Studio.' },
      { course: 'python-complete-masterclass-teens', code: 'ITA / 02', title: 'Python for teens', note: 'Ages 13 to 18. From scripts to real projects.' },
      { course: 'complete-game-development-masterclass-for-teens', code: 'ITA / 03', title: 'Game development for teens', note: 'Teens. Unity, C# and finished games.' }
    ]
  },

  sections: [
    {
      id: 'programs', tint: 'tint', eyebrow: 'Three programs',
      h2: 'iD Tech&rsquo;s three programs, as it describes them',
      lede: 'iD Tech groups everything into three offers, each with its own age band. Read on idtech.com on 17 October 2026; prices are on its site.',
      body: [
        { kind: 'table', caption: 'iD Tech programs and ages (idtech.com, read 17 October 2026)', head: ['Program', 'Ages', 'Format and length'], rows: [
          ['Summer camps', '7 to 17', 'Week-long; day camp everywhere, overnight at many university locations; also virtual'],
          ['Teen academies', '13 to 18', 'Two weeks, immersive, living on a university campus'],
          ['Private lessons', '7 to 19', 'Live 1-on-1 online, 60 minutes, over Zoom, year-round']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What stands out',
          left: [
            'Range. The site lists more than 50 topics, from Scratch, Python, Java and C++ to Roblox and Lua, Unity with C#, Godot, 3D design and maths tutoring from homework help to calculus.',
            'Instructors are described as 100% USA-based adults, background and reference checked, who follow American Camp Association accredited guidelines.'
          ],
          rightH3: 'What to plan around',
          right: [
            'Camps and academies are seasonal. The home page said registration for the summer of 2027 opens on November 8, so popular weeks are booked months ahead.',
            'Private lessons run all year, but they are one teacher and one student, with no group of classmates.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.idtech.com/" rel="noopener" target="_blank">idtech.com</a> and its <a class="ag-inline-link" href="https://www.idtech.com/tutoring" rel="noopener" target="_blank">private lessons page</a>, read 17 October 2026. Terms and dates change by season. Modern Age Coders and iD Tech are unrelated companies.' }
      ]
    },
    {
      id: 'lessons', tint: 'deep', eyebrow: 'Private lessons',
      h2: 'How iD Tech&rsquo;s online private lessons work',
      lede: 'The year-round part of iD Tech, and the part most comparable with a weekly online school.',
      body: [
        { kind: 'table', caption: 'iD Tech private lessons, from its tutoring and lesson-pack pages (read 17 October 2026)', head: ['Point', 'What iD Tech says'], rows: [
          ['Who', 'Kids and teens ages 7 to 19'],
          ['Length', 'Each lesson is 60 minutes, on Zoom'],
          ['Packages', '1, 4, 8 or 12 lessons a month; 4 a month is the most popular'],
          ['Choosing', 'Pick a topic, then an instructor and a time'],
          ['Changes', 'Topics can change any time; lessons rescheduled up to 24 hours ahead'],
          ['After each lesson', 'A progress report by email'],
          ['Other options', 'A commitment-free Discovery Lesson; Fall Packs of 8 or 12; a 20-lesson AI and machine learning course']
        ] },
        { kind: 'p', mt: true, html: 'Our arithmetic on the most popular package: 4 lessons x 60 minutes = 240 minutes, or 4 hours of live 1-on-1 time a month. That is a useful unit for comparing any private teacher, ours included: ask how many live minutes a month you are buying, and how many students share them.' },
        { kind: 'two', mt: true,
          leftH3: 'Lesson packs: what they suit',
          left: [
            'A pack lets a family buy exactly the number of lessons it wants and switch topic as interest moves, from Python one month to 3D modeling the next. For a curious child who wants to sample, that breadth is the point.',
            'Because a new instructor can be chosen for each booking, it is worth asking whether your child will keep the same person, and how the next teacher learns what the last one covered.'
          ],
          rightH3: 'Monthly classes: what they suit',
          right: [
            'A monthly class fixes the day, the teacher and, in a group, the classmates. It suits a child who needs routine more than variety, and a family that would rather not rebook each week.',
            'The trade-off is less topic hopping: a weekly course follows a syllabus for months before moving on. Neither model is right for every child, and some families use one for a term and the other the next.'
          ] }
      ]
    },
    {
      id: 'camps', tint: 'tint', eyebrow: 'Virtual camps',
      h2: 'Inside an iD Tech virtual camp day',
      lede: 'iD Tech&rsquo;s online camps are small-group weeks for ages 7 to 17. Its virtual camp page spells out how the day is split.',
      body: [
        { kind: 'table', caption: 'iD Tech virtual camp format (idtech.com/virtual, read 17 October 2026)', head: ['Point', 'Published detail'], rows: [
          ['Ages', '7 to 17, with course filters for ages 7-9, 10-12 and 13-19'],
          ['Length', 'One week, two hours a day with the group'],
          ['Group', 'Small-group format'],
          ['Each day', 'Two hours with peers and instructors, two hours working independently on the project'],
          ['Example courses', 'Python Coding and AI Agents; Roblox Game Design; Game Development 101 with Unreal Engine 5'],
          ['Changes', 'No-cost cancellation up to 72 hours before camp starts']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Our arithmetic on a camp day',
          left: [
            'Two hours together plus two hours alone makes four hours of project time a day, of which two are with an instructor (2 + 2 = 4). Over a camp week that adds up to a solid burst of focused work.',
            'The strength of a camp is exactly that intensity: one project, one week, finished.'
          ],
          rightH3: 'What happens in week two',
          right: [
            'The common problem is not the camp but the eleven months after it. Skills built in a week fade without practice, and a child who loved Roblox in July may not touch it again until next summer.',
            'That gap is where families tend to look for a weekly class, whether a private lesson pack or a group course.'
          ] }
      ]
    },
    {
      id: 'year', tint: 'deep', eyebrow: 'A twelve-month plan',
      h2: 'A year that uses a camp and a weekly class together',
      lede: 'Our example for a 12-year-old who wants to make games. It treats a summer camp and a weekly class as partners, not rivals. Months follow the US school year.',
      body: [
        { kind: 'table', caption: 'A twelve-month plan mixing one camp week and weekly lessons (our example)', head: ['Months', 'Activity', 'Goal'], rows: [
          ['June to July', 'One camp week in a game topic', 'Finish a first complete project'],
          ['August', 'Rest, play the game, show friends', 'Keep the interest alive'],
          ['September to December', 'Weekly class in the same language', 'Turn camp tricks into understanding'],
          ['January to March', 'Weekly class, a bigger project', 'Plan, build and test alone'],
          ['April to May', 'Weekly class, polish and present', 'A portfolio piece before summer']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>Pick one language for the year.</b> If the camp used Luau, keep Luau; if Python, keep Python.',
          '<b>Bring the camp project to the first class.</b> A teacher can see in minutes what the child understood and what they copied.',
          '<b>Set one big project for the winter.</b> It gives weekly classes a direction.',
          '<b>Book next summer early.</b> iD Tech said 2027 registration opens on November 8.'
        ] }
      ]
    },
    {
      id: 'contrast', tint: 'tint', eyebrow: 'Contrast',
      h2: 'How Modern Age Coders is organised instead',
      lede: 'Stated as differences, with no claim that one model beats the other.',
      body: [
        { kind: 'table', caption: 'iD Tech as published on 17 October 2026, and how our school is set up', head: ['Point', 'iD Tech', 'Modern Age Coders'], rows: [
          ['Rhythm', 'Seasonal camps plus year-round private lessons', 'Year-round weekly classes'],
          ['Group learning', 'Camps and academies in groups', 'Weekly batches all year, mini batches of up to six'],
          ['Private', '60-minute 1-on-1 lessons, booked in packs', 'Private classes on a monthly plan'],
          ['In person', 'Campuses across the US in summer', 'Online only'],
          ['Ages', '7 to 19', 'From 6, adults welcome'],
          ['Instructors', 'USA-based adults', 'Our teachers, live from India']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'iD Tech may fit when', p: 'You want an on-campus summer experience, a teen academy, or 1-on-1 lessons in an unusual topic from a very wide menu.' },
          { h3: 'We may fit when', p: 'You want a steady weekly class with the same classmates all year, coding with maths, or a monthly plan.' },
          { h3: 'Both may fit when', p: 'A summer camp sparks interest and a weekly class keeps it going, as in the plan above.' }
        ] },
        { kind: 'p', mt: true, html: 'A practical note on hours: iD Tech lists its support line as Monday to Friday, 8am to 5pm Pacific Time, which is 11am to 8pm Eastern (our conversion). Our team answers on WhatsApp, and our class times are set in your own US time zone.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your child is',
    h2: 'From one great week to steady skill',
    lede: 'Four stages we see in children who first met coding at a camp.',
    table: { caption: 'After a camp (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Sparked', 'Loved the camp week; can show the project'],
      ['2. Stalled', 'Has not coded since; remembers the fun more than the code'],
      ['3. Practising', 'Codes weekly with a teacher; can explain their own code'],
      ['4. Independent', 'Starts projects alone and asks for help on hard parts']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 2 is normal and fixable. The camp project is a good starting point for a teacher.',
      'Steady weekly time matters more than the number of hours in any one week.'
    ] },
    right: { h3: 'For kids', ps: [
      'Open your camp project again and change one thing. If you get stuck, that is the lesson to bring to class.',
      'Make next summer&rsquo;s camp harder by practising now.'
    ] }
  },

  catalogue: {
    eyebrow: 'Our catalogue',
    h2: 'Nine weekly courses in typical camp topics',
    lede: 'Year-round versions of subjects children often first meet at camp, taught weekly by one teacher.',
    bands: [
      { num: 'I', h3: 'Game worlds', sub: 'Ages 7 to 12', courses: [
        { code: 'ITA / W / 01', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Blocks to real code.' },
        { code: 'ITA / W / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox game coding', blurb: 'Luau, weekly.' },
        { code: 'ITA / W / 03', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'For the youngest campers.' }
      ] },
      { num: 'II', h3: 'Engines', sub: 'Ages 10 and up', courses: [
        { code: 'ITA / E / 01', slug: 'godot-game-development-course-for-kids-and-teens', title: 'Godot game development', blurb: 'GDScript, 2D and 3D.' },
        { code: 'ITA / E / 02', slug: 'complete-game-development-masterclass-for-teens', title: 'Game development for teens', blurb: 'Unity and C#.' },
        { code: 'ITA / E / 03', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ for teens', blurb: 'The language under engines.' }
      ] },
      { num: 'III', h3: 'Code and AI', sub: 'Teens', courses: [
        { code: 'ITA / C / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Beginner to advanced.' },
        { code: 'ITA / C / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'Models, not just prompts.' },
        { code: 'ITA / C / 03', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Toward AP CS A.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How our lessons run',
    h2: 'Weekly classes through the school year',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'One evening slot a week suits most families.' },
      { time: 'Weekends', l: 'Saturday or Sunday mornings, US time.' },
      { time: '1-on-1', l: 'Times agreed with the teacher.' }
    ],
    cells: [
      { h3: 'All year', p: 'Classes continue between summers.' },
      { h3: 'Same classmates', p: 'A batch that grows together.' },
      { h3: 'Same teacher', p: 'Who remembers last week&rsquo;s bug.' },
      { h3: 'Project-led', p: 'A bigger build each term.' },
      { h3: 'Online only', p: 'No campus; any US state.' },
      { h3: 'Pay monthly', p: 'Adjust after any month.' }
    ]
  },

  projectsH2: 'Games and apps from our weekly classes',
  projectsLede: 'Work students built over months, not days. Browse more on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Families&rsquo; Google reviews of our classes, word for word.',

  fees: {
    h2: 'Our fees',
    lede: 'Our classes are priced per month in US dollars. iD Tech lists its camp, academy and lesson-pack prices on its own website, which is the right place to read them.',
    free: ['A free first lesson', 'Bring the camp project', 'No card details'],
    group: ['Fifteen to twenty learners', 'One regular teacher', 'Choose your batch', 'Monthly'],
    one: ['A teacher to yourself', 'All school year', 'Your times']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'iD Tech and alternatives: common questions',
    items: [
      { q: 'What ages does iD Tech serve?', a: 'Its site says ages 7 to 19: summer camps for 7 to 17, teen academies for 13 to 18, and private lessons for 7 to 19.' },
      { q: 'How long is an iD Tech private lesson?', a: 'Sixty minutes on Zoom, according to its private lessons pages, bought in packs of 1, 4, 8 or 12 a month. Four a month is described as the most popular package.' },
      { q: 'What is an iD Tech virtual camp like?', a: 'Its virtual camp page describes a one-week, small-group camp for ages 7 to 17, with two hours a day alongside peers and instructors and two hours of independent project work.' },
      { q: 'When does iD Tech summer registration open?', a: 'On 17 October 2026 its home page said registration for summer 2027 opens on November 8.' },
      { q: 'How is Modern Age Coders different from iD Tech?', a: 'We are a year-round online school with weekly group or private classes, for ages 6 and up, teaching coding and maths, with teachers in India. iD Tech centres on summer camps and academies plus 1-on-1 lessons with US-based instructors.' },
      { q: 'Can we do an iD Tech camp and weekly classes with you?', a: 'Yes. Many families pair a summer camp with weekly classes in the school year. Bring the camp project to your first lesson.' },
      { q: 'Does iD Tech teach maths as well as coding?', a: 'Its private lesson topics include math homework help, elementary math, mental math, pre-algebra, Algebra I and II, geometry, pre-calculus and calculus. We also teach maths, in weekly courses alongside coding.' },
      { q: 'Do you run in-person camps?', a: 'No. All our classes are live online, which means any US state but no campus experience.' },
      { q: 'When are your classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you connected with iD Tech?', a: 'No. We are a separate company; this page reports iD Tech\'s public information and links to it.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Camps, summer and year-round options.',
    items: [
      { href: '/summer-coding-camp', label: 'Summer coding camp', p: 'Our online summer option.' },
      { href: '/roblox-coding-classes-for-kids', label: 'Roblox coding classes', p: 'Weekly Roblox, all year.' },
      { href: '/minecraft-coding-classes-for-kids', label: 'Minecraft coding classes', p: 'For younger game fans.' },
      { href: '/live-vs-recorded-coding-classes', label: 'Live vs recorded', p: 'Choosing a format.' },
      { href: '/modern-age-coders-vs-outschool', label: 'Compared with Outschool', p: 'Another comparison.' },
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'Where our US pages live.' },
      { href: '/codakid-alternative', label: 'CodaKid alternative', p: 'CodaKid and live online classes, compared on published facts.' },
      { href: '/coding-with-kids-alternative', label: 'Coding with Kids alternative', p: 'Coding with Kids and Modern Age Coders, compared on published facts.' },
      { href: '/khan-academy-computer-science-vs-live-classes', label: 'Khan Academy CS vs live classes', p: 'Khan Academy CS or live classes? A fair comparison, built from Khan Academy descriptions of its course.' }
    ]
  },

  start: {
    h2: 'Keep the camp momentum going',
    lede: 'Book a free first lesson and bring whatever your child built at camp. The teacher will pick up from there rather than starting over.',
    readFirst: 'If useful, look at <a class="ag-inline-link" href="/how-we-teach">the way our lessons are structured</a> and the <a class="ag-inline-link" href="/courses">syllabus for each course</a>.',
    note: 'Teaching happens live over video from India, at times matched to US evenings and weekends. WhatsApp is the fastest channel to us.',
    formNote: 'Free lesson; we take no card details.'
  },

  footer: {
    cols: [
      { h4: 'Year-round coding', links: [
        { href: '/summer-coding-camp', label: 'Summer coding camp' },
        { href: '/roblox-coding-classes-for-kids', label: 'Roblox coding' },
        { href: '/minecraft-coding-classes-for-kids', label: 'Minecraft coding' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/online-coding-classes-for-kids-usa', label: 'Online classes for US kids' },
        { href: '/modern-age-coders-vs-juni-learning', label: 'vs Juni Learning' },
        { href: '/modern-age-coders-vs-outschool', label: 'vs Outschool' }
      ] }
    ],
    bottomRight: 'One week, then every week'
  },

  personalityCss: `
.ag-root.ag-ita .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-ita .ag-capsule { border-left-width: 4px; border-radius: 0; }
.ag-root.ag-ita .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-ita .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-ita .ag-slots { gap: 1.15rem; }
`,

  dossier: {
    curriculumAuthority: 'idtech.com read raw 17 October 2026: founded 1999; ages 7-19 (camps 7-17, academies 13-18, private lessons 7-19); week-long camps, day and overnight options; two-week teen academies; 50+ topics; USA-based adult instructors following American Camp Association accredited guidelines; summer 2027 registration opens November 8; private lessons 60 minutes on Zoom in packs of 1, 4, 8 or 12, four most popular, reschedule 24 hours ahead, progress reports, Discovery Lessons, Fall Packs, 20-lesson AI course; virtual camps one week, 2 hours together plus 2 independent, small-group, 72-hour cancellation; support 8am-5pm Pacific.',
    localProject: 'Our twelve-month plan mixing one camp week with weekly classes; our arithmetic 4 x 60 = 240 minutes a month and 2 + 2 = 4 hours a camp day; our conversion 8am-5pm PT = 11am-8pm ET. Lesson family: time arithmetic and time-zone conversion.',
    requiredMentions: ['ages 7 to 19', 'Two weeks, immersive', '1, 4, 8 or 12 lessons a month', 'Each lesson is 60 minutes, on Zoom', '4 lessons x 60 minutes = 240 minutes', '2 + 2 = 4', 'up to 72 hours before camp starts', 'November 8', '11am to 8pm Eastern', 'American Camp Association', 'unrelated companies', 'founded in 1999'],
    sources: [
      { claim: 'iD Tech home: programs, ages, instructors, registration date, support hours.', url: 'https://www.idtech.com/' },
      { claim: 'iD Tech private lessons: format, packages, length.', url: 'https://www.idtech.com/tutoring' },
      { claim: 'iD Tech private lesson packs: rescheduling, topics, options.', url: 'https://www.idtech.com/courses/tutoring-choose-your-own-path' },
      { claim: 'iD Tech virtual camps: ages, duration, daily split, cancellation.', url: 'https://www.idtech.com/virtual' }
    ],
    rejectedClaims: [
      'iD Tech prices for camps, academies, lesson packs and Discovery Lessons: published on its site, not repeated here.',
      'Alumni and parent totals and its Trustpilot rating: marketing figures, not used.',
      'Named universities and partner brands: not needed for the comparison.',
      'That weekly classes outperform camps or the reverse: refused.',
      'Any affiliation: none, stated on the page.'
    ]
  }
};
