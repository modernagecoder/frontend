'use strict';
// Create & Learn alternative (ag- comparison door; US cluster Phase 3, row 57).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md. Create & Learn facts read raw on its own site on 17 October
// 2026 (copies in keyword-research-2026-09/us/src/create-and-learn-alternative/):
//  - Home: "Live Online Small-Group Classes with Expert Instructors"; "just 3-5 students per class" (en dash on site,
//    paraphrased); "Less than 5% of teacher candidates are selected as instructors"; "100% Satisfaction Guarantee", "Find the
//    perfect class, or get a full refund"; grade bands K-2, 2-4, 4-6, 6-9, 9-12; FAQ comparison row "6 free intro classes on
//    diverse topics to find best fits"; free intros incl. "Free Intro to Scratch Coding Grades 2-5", "Free Intro to Python
//    Coding Grades 5-10"; teachers are professional teachers, CS majors in college, or software engineers; "These one-hour
//    sessions are designed to introduce learners"; most kids start with Scratch, 8th grade and up may start with Python.
//  - About: founded in 2017, headquartered in Palo Alto; "100% US Based"; "30+ Courses for K-12"; "25+ Countries";
//    "small groups of 5 students max".
//  - Learning pathways page: levels "from Level 50 for kindergarteners" to "Level 1000 for advanced high schoolers";
//    "Levels start at 100 and go up at increments of 100 for most courses"; Scratch Ninja level 100; Python Level 600;
//    "Levels 800-1000" may resemble introductory college CS; Game Creators pathway: Scratch Ninja (100), Minecraft Modding
//    Quest (200), Beginner Roblox Game Coding (500), Unity (800); AI & Data Science pathway: AI Explorers (400), Python for
//    AI (600), Data Science with Pandas (800); "Age and level are related, but they are not the same thing."
//  - Private page: private classes for grades K-12; instructors "US-based, background checked".
// Not used: prices, review counts and ratings, founder and teacher names.
// Our own material, labelled: the two-year path example (theirs from the published pathway, ours from our catalogue), the
// level-gap arithmetic (500 - 100 = 400 levels, four steps of 100), the trial plan.
// Lesson family: ordering steps by prerequisite (a learning path as a sequence).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'COMPARISON', blurb: 'Create &amp; Learn and Modern Age Coders side by side: group size, levels, trials and teachers, from Create &amp; Learn&rsquo;s own pages.' },
  slug: 'create-and-learn-alternative',
  code: 'cre',
  accent: '#1E4C0B',
  accentRationale: 'Create & Learn alternative: a deep fern green, #1E4C0B as allocated, separate from the olive and blue comparison accents, strong on the paper',
  pageType: 'market',
  market: US,
  routeLabel: 'Create & Learn alternative',
  title: 'Create & Learn Alternative: Small Groups, Levels, Trials',
  description: 'Weighing Create & Learn against alternatives? Its group size, levels, free intro classes and teachers from its own site, beside Modern Age Coders, read October 2026.',
  ogDescription: 'Create & Learn teaches live groups of three to five for grades K to 12, organised by levels from 50 to 1000. Its published facts, how we differ, and a fair way to test both.',
  twitterDescription: 'Create & Learn and Modern Age Coders, compared on published facts.',
  pageName: 'Create & Learn Alternative',
  webPageDescription: 'A neutral comparison of Create & Learn and Modern Age Coders for US families, built from Create & Learn&rsquo;s own website read on 17 October 2026, with a worked learning-path example.',
  courseDescription: 'Live online coding and AI classes for US children and teens, in batches, mini batches or one to one, from Modern Age Coders.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Create & Learn alternative',
  navLinks: [
    { href: '#facts', label: 'Their facts' },
    { href: '#levels', label: 'Levels' },
    { href: '#path', label: 'A two-year path' },
    { href: '#differ', label: 'How we differ' },
    { href: '#trial', label: 'Testing both' },
    { href: '#fees', label: 'Our fees' }
  ],
  eyebrow: 'United States &middot; Grades K to 12 &middot; Read 17 October 2026',
  h1: 'Create &amp; Learn alternative: comparing the two fairly',
  lede: 'Create &amp; Learn is a Palo Alto online school that teaches computer science to children from kindergarten to grade 12 in very small live groups, and lets families try several free introductory classes before choosing. Families searching for an alternative usually want to know how its tiny groups and level system compare with other ways of learning. Below is what Create &amp; Learn says about itself on its own website, read on 17 October 2026, our own offer in the same terms, and a simple way to test both with your child.',
  secondaryCta: { href: '#facts', label: 'Start with their facts' },
  wa: 'Hello Modern Age Coders, I am comparing you with Create & Learn for my child in the US. Could we book a free first lesson?',
  heroNote: 'Facts from create-learn.us &middot; read 17 October 2026 &middot; neutral, no rankings',
  spec: [
    ['Their grades', 'K to 12'],
    ['Their group size', 'Three to five'],
    ['Their levels', '50 to 1000'],
    ['Their free intros', 'Six topics listed'],
    ['Modern Age Coders ages', '6 to 67'],
    ['Class sizes with us', 'Up to 20, up to 6, or one'],
    ['When we teach', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Create &amp; Learn teaches live online computer science classes for grades K to 12 in groups of three to five students, with free introductory classes, a full-refund satisfaction guarantee, US-based teachers and courses ranked by levels from 50 to 1000. By contrast, Modern Age Coders takes learners from age 6 to adulthood, teaches coding and maths, and runs larger live batches alongside mini batches capped at six and private lessons, with teachers based in India.',

  picks: {
    eyebrow: 'Like-for-like courses to try',
    h2: 'Three of our courses that match popular Create &amp; Learn first classes',
    lede: 'Scratch, Python with AI, and Roblox are common first steps at both schools, so they make a fair trial.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'CRE / 01', title: 'Scratch coding', note: 'Elementary grades. Games and animations from zero.' },
      { course: 'python-ai-kids-masterclass', code: 'CRE / 02', title: 'Python and AI for kids', note: 'Upper elementary and middle school. Python with AI projects.' },
      { course: 'roblox-game-coding-for-kids-lua-course', code: 'CRE / 03', title: 'Roblox game coding', note: 'Middle grades. Luau in Roblox Studio.' }
    ]
  },

  sections: [
    {
      id: 'facts', tint: 'tint', eyebrow: 'What Create &amp; Learn publishes',
      h2: 'Create &amp; Learn, summarised from its own pages',
      lede: 'We read the home, about, pathways and private-class pages on 17 October 2026. Prices and review figures are left on their site, where they can be read in context.',
      body: [
        { kind: 'table', caption: 'Create &amp; Learn summary, taken from create-learn.us on 17 October 2026', head: ['Point', 'What Create &amp; Learn says'], rows: [
          ['Format', 'Live online small-group classes with expert instructors; private classes also offered'],
          ['Group size', 'Three to five students per class; five at most'],
          ['Grades', 'K to 12, browsed in bands K-2, 2-4, 4-6, 6-9 and 9-12'],
          ['Courses', 'More than 30 courses for K-12'],
          ['Free classes', 'Free intro classes on a range of topics, six listed in its FAQ comparison'],
          ['Guarantee', 'Find the right class or receive a full refund'],
          ['Teachers', 'Fewer than 5% of candidates selected; US-based and background checked'],
          ['Who teaches', 'Professional teachers, college computer science majors and software engineers'],
          ['Company', 'Founded in 2017 and headquartered in Palo Alto']
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.create-learn.us/" rel="noopener" target="_blank">create-learn.us</a>, its <a class="ag-inline-link" href="https://www.create-learn.us/about" rel="noopener" target="_blank">about page</a> and <a class="ag-inline-link" href="https://www.create-learn.us/private-online-coding-classes" rel="noopener" target="_blank">private classes page</a>, read 17 October 2026. Check the site for current classes and terms. Modern Age Coders has no connection with Create &amp; Learn.' }
      ]
    },
    {
      id: 'levels', tint: 'deep', eyebrow: 'The level system',
      h2: 'How Create &amp; Learn&rsquo;s levels from 50 to 1000 work',
      lede: 'Create &amp; Learn ranks every class on a difficulty scale and groups related classes into pathways. It is the feature most worth understanding before you compare.',
      body: [
        { kind: 'table', caption: 'Example classes and their published levels (Create &amp; Learn learning pathways page, read 17 October 2026)', head: ['Class', 'Level', 'Pathway'], numCols: [1], rows: [
          ['Scratch Ninja', '100', 'Game Creators'],
          ['Minecraft Modding Quest', '200', 'Game Creators'],
          ['AI Explorers', '400', 'AI &amp; Data Science'],
          ['Beginner Roblox Game Coding', '500', 'Game Creators'],
          ['Python for AI', '600', 'AI &amp; Data Science'],
          ['Unity', '800', 'Game Creators'],
          ['Data Science with Pandas', '800', 'AI &amp; Data Science']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the numbers mean',
          left: [
            'Levels run from 50, for kindergarteners, to 1000, for advanced high schoolers. Most classes sit at multiples of 100, and Create &amp; Learn says classes at 800 to 1000 may cover material close to introductory college computer science.',
            'Its pathway page is careful on one point families often miss: "Age and level are related, but they are not the same thing." An older beginner may start low and a young expert high.'
          ],
          rightH3: 'Levels against pathways',
          right: [
            'A level says how hard a class is. A pathway says what it leads to. Game Creators runs from Scratch to Unity; AI and Data Science from AI Explorers to Pandas.',
            'A child can follow one pathway, switch, or mix. The structure helps a family see a next class without committing to a fixed multi-year program.'
          ] },
        { kind: 'p', mt: true, html: 'Create &amp; Learn&rsquo;s FAQ also gives a sense of spread within one age: a third grader may have suitable classes from roughly Level 100 to Level 400, while middle schoolers may range from about Level 400 up to Level 1000. Most elementary classes sit between 100 and 500, and classes from 600 to 1000 are generally for middle and high school students. For a parent this is useful even outside Create &amp; Learn, because it puts a number on something every teacher knows: two eleven-year-olds can be years apart in coding. When you compare any school, ask how it places a child who is older but new, or younger but experienced, and whether it will move them after the first week if the placement was wrong.' }
      ]
    },
    {
      id: 'path', tint: 'tint', eyebrow: 'A worked example',
      h2: 'A fourth grader who loves games: two possible paths',
      lede: 'Our example of how one child might move through each school over about two years. The Create &amp; Learn steps come from its published Game Creators pathway; the Modern Age Coders steps come from our catalogue. Pace depends on the child.',
      body: [
        { kind: 'table', caption: 'Two game-focused paths for a fourth grader (our example)', head: ['Step', 'Create &amp; Learn (published pathway)', 'Modern Age Coders (our courses)'], rows: [
          ['1', 'Scratch Ninja, level 100', 'Scratch coding'],
          ['2', 'Minecraft Modding Quest, level 200', 'Minecraft coding for kids'],
          ['3', 'Beginner Roblox Game Coding, level 500', 'Roblox game coding in Luau'],
          ['4', 'Toward Unity, level 800', 'Python and AI, then game development']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Reading the gap',
          left: [
            'Between Scratch Ninja at 100 and Beginner Roblox at 500 sit four steps of 100 on Create &amp; Learn&rsquo;s scale (500 - 100 = 400). The pathway only shows a few of the classes in between, which is why its FAQ explains how to choose a next class.',
            'The order matters more than the names: blocks, then a guided game world, then a real scripting language, then a full engine.'
          ],
          rightH3: 'Where the two paths differ',
          right: [
            'Both start in Scratch and both reach Roblox. Ours moves to Python earlier because we teach coding and maths together and Python carries into both. Theirs keeps a longer run inside game tools before Unity.',
            'Neither order is wrong. Ask your child which part of a game they like making, the world or the rules, and choose the path that spends longer there.'
          ] }
      ]
    },
    {
      id: 'differ', tint: 'deep', eyebrow: 'How we differ',
      h2: 'Structural differences, stated plainly',
      lede: 'Not better or worse: different. Read the table for the points your family cares about and skip the rest.',
      body: [
        { kind: 'table', caption: 'Create &amp; Learn as published on 17 October 2026, beside our own setup', head: ['Point', 'Create &amp; Learn', 'Modern Age Coders'], rows: [
          ['Ages', 'Grades K to 12', '6 to 67'],
          ['Group size', 'Three to five', 'Standard batch of fifteen to twenty; six or fewer in a mini batch; private'],
          ['Course map', 'Levels 50 to 1000 and pathways', 'Courses by age band and goal'],
          ['Trial', 'Several free intro classes; satisfaction guarantee', 'A free first lesson'],
          ['Teachers', 'US-based', 'Teaching live online from India'],
          ['Subjects', 'Computer science, AI, robotics and design', 'Coding, AI and mathematics']
        ] },
        { kind: 'p', mt: true, html: 'The biggest single difference is group size. Create &amp; Learn&rsquo;s whole model is built on classes of five or fewer, and that is a real strength for a child who needs to be noticed. Our standard batches are larger, and we offer mini batches of up to six or a private teacher when that closer attention is what a child needs. The second is where teachers are: Create &amp; Learn says its teachers are US-based; ours teach from India at times set for US families. A trial lesson is the honest way to weigh both.' }
      ]
    },
    {
      id: 'trial', tint: 'tint', eyebrow: 'Testing both',
      h2: 'A three-week plan to compare the two',
      lede: 'Our suggested plan for a family that wants an answer in under a month, using each school&rsquo;s published trial route.',
      body: [
        { kind: 'table', caption: 'Three weeks to compare (our plan)', head: ['Week', 'Create &amp; Learn', 'Modern Age Coders', 'Write down'], rows: [
          ['1', 'One free intro in the subject your child likes', 'Free first lesson in the same subject', 'What did they make?'],
          ['2', 'A second free intro in a new topic', 'Ask the teacher for a level check', 'Which topic excited them?'],
          ['3', 'Read the level and pathway advice', 'Ask for a written next-step plan', 'Which plan fits your calendar?']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>Keep the subject the same in week 1.</b> A Scratch class against a Python class tells you about the subjects, not the schools.',
          '<b>Let your child talk first.</b> Ask "what did you make?" before "did you like it?" The answer is more honest.',
          '<b>Notice the group.</b> In a group of three to five, is your child speaking? In a larger batch, are their questions still answered?',
          '<b>Look at the next step.</b> A good trial ends with a clear suggestion of what to take next.',
          '<b>Decide on fit, not price alone.</b> Then compare fees on each school&rsquo;s own site.'
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your child is',
    h2: 'Matching a child to a level, whichever school',
    lede: 'A rough guide that works with Create &amp; Learn&rsquo;s levels and with our age bands alike.',
    table: { caption: 'Stage and rough starting point (ours)', head: ['Stage', 'Likely starting point'], rows: [
      ['1. Kindergarten to grade 2, new', 'Very first block coding'],
      ['2. Grades 2 to 5, new', 'Scratch from the beginning'],
      ['3. Grades 5 to 8, some Scratch', 'A first typed language, often Python'],
      ['4. High school, some code', 'Projects, AI, data or AP prep']
    ] },
    left: { h3: 'For parents', ps: [
      'Create &amp; Learn&rsquo;s own advice, that age and level are not the same, applies everywhere. Place by what your child can do.',
      'Bring a recent project to any trial; it speeds up placement.'
    ] },
    right: { h3: 'For kids', ps: [
      'If a class is too easy, say so in the first week. Both schools can move you.',
      'Pick a pathway you would study even without a grade.'
    ] }
  },

  catalogue: {
    eyebrow: 'Our catalogue',
    h2: 'Nine of our courses, set out as pathways',
    lede: 'Laid out as three interest pathways for an easy side-by-side with the levels above.',
    bands: [
      { num: 'I', h3: 'Game makers', sub: 'Blocks to engines', courses: [
        { code: 'CRE / G / 01', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Code in a familiar world.' },
        { code: 'CRE / G / 02', slug: 'game-development-masterclass-for-kids', title: 'Game development for kids', blurb: 'Scratch, Roblox and Minecraft.' },
        { code: 'CRE / G / 03', slug: 'godot-game-development-course-for-kids-and-teens', title: 'Godot game development', blurb: 'A real engine, GDScript.' }
      ] },
      { num: 'II', h3: 'AI and data', sub: 'Thinking machines', courses: [
        { code: 'CRE / D / 01', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'How AI works.' },
        { code: 'CRE / D / 02', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'Smart projects in Python.' },
        { code: 'CRE / D / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Real datasets.' }
      ] },
      { num: 'III', h3: 'Makers', sub: 'Apps and the web', courses: [
        { code: 'CRE / M / 01', slug: 'block-coding-app-development-masterclass', title: 'App making for kids', blurb: 'Apps with blocks.' },
        { code: 'CRE / M / 02', slug: 'kids-ai-web-development-course', title: 'Web development for kids', blurb: 'Real websites.' },
        { code: 'CRE / M / 03', slug: 'complete-app-development-masterclass-for-teens', title: 'App development for teens', blurb: 'React Native apps.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How our lessons run',
    h2: 'What a week with us looks like',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After-school batches across US time zones.' },
      { time: 'Weekends', l: 'Weekend morning batches.' },
      { time: '1-on-1', l: 'Booked around your week.' }
    ],
    cells: [
      { h3: 'Live, always', p: 'Every class has a teacher on video.' },
      { h3: 'Small when needed', p: 'Mini batches of up to six.' },
      { h3: 'Private option', p: 'One teacher, one student.' },
      { h3: 'Coding and maths', p: 'Two subjects under one roof.' },
      { h3: 'Teachers in India', p: 'Classes timed for US evenings.' },
      { h3: 'Monthly plans', p: 'No long commitment.' }
    ]
  },

  projectsH2: 'Projects our students made',
  projectsLede: 'Real games, apps and AI projects from our classes. Compare them with any school&rsquo;s showcase. More at <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Verbatim Google reviews left by families who study with us.',

  fees: {
    h2: 'Our fees',
    lede: 'We list our fees in US dollars, billed month by month. Create &amp; Learn publishes its own pricing and discounts on its site, so we do not restate them.',
    free: ['A free first lesson', 'Same subject as your other trial', 'No card details'],
    group: ['Fifteen to twenty learners', 'One regular teacher', 'Choose your batch', 'Monthly'],
    one: ['A teacher to yourself', 'Paced to your child', 'Flexible times']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'Create &amp; Learn and alternatives: common questions',
    items: [
      { q: 'What is Create & Learn?', a: 'Its site, which we read on 17 October 2026, describes a Palo Alto online school, founded in 2017, teaching live computer science to kindergarten through grade 12 in groups of three to five.' },
      { q: 'How small are Create & Learn classes?', a: 'Its site says three to five students per class, and five at most.' },
      { q: 'What do Create & Learn levels mean?', a: 'Its pathways page ranks classes from Level 50 for kindergarteners to Level 1000 for advanced high schoolers. Scratch Ninja is at 100 and Python at 600; classes at 800 to 1000 may resemble introductory college CS.' },
      { q: 'Does Create & Learn have free classes?', a: 'Yes. Its site lists free introductory classes on several topics, and a satisfaction guarantee with a full refund.' },
      { q: 'How is Modern Age Coders different?', a: 'Create & Learn keeps every group at five or fewer with US-based teachers. Our learners range from six-year-olds to adults, our usual groups are bigger, with a six-student mini batch or private teacher as alternatives, and our teachers are in India. We also teach maths.' },
      { q: 'Which should we choose?', a: 'Try both in the same subject. If your child needs a very small group, that points one way; if you want maths too, a private teacher or month-to-month plans, that may point the other.' },
      { q: 'Can a child do both?', a: 'Some families do, for example a Create & Learn class in one topic and a private maths or Python course with us. Just avoid overloading the week.' },
      { q: 'When are your classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you linked to Create & Learn?', a: 'No. Modern Age Coders is independent; this page only summarises what Create & Learn publishes, with links.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Further reading on choosing classes.',
    items: [
      { href: '/modern-age-coders-vs-outschool', label: 'Compared with Outschool', p: 'Small online classes, another model.' },
      { href: '/modern-age-coders-vs-juni-learning', label: 'Compared with Juni Learning', p: 'Live private and group lessons.' },
      { href: '/group-vs-one-to-one-maths-tuition', label: 'Group or one to one', p: 'How group size changes learning.' },
      { href: '/roblox-coding-classes-for-kids', label: 'Roblox coding classes', p: 'A popular next step.' },
      { href: '/coding-for-10-year-olds', label: 'Coding for 10-year-olds', p: 'Starting points by age.' },
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'The hub for American families.' }
    ]
  },

  start: {
    h2: 'Book a free lesson to compare',
    lede: 'Choose the same subject your child tried elsewhere and tell us their grade. We will start where they are, not at the beginning by default.',
    readFirst: 'You may want to read <a class="ag-inline-link" href="/how-we-teach">our approach to teaching</a> or browse <a class="ag-inline-link" href="/courses">all course outlines</a> first.',
    note: 'Classes are live over video from India, scheduled for US time zones. For a quick answer, message us on WhatsApp.',
    formNote: 'Free, and no card is needed.'
  },

  footer: {
    cols: [
      { h4: 'Compare', links: [
        { href: '/modern-age-coders-vs-outschool', label: 'vs Outschool' },
        { href: '/modern-age-coders-vs-juni-learning', label: 'vs Juni Learning' },
        { href: '/codingal-alternative', label: 'Codingal alternative' },
        { href: '/live-vs-recorded-coding-classes', label: 'Live vs recorded' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/online-coding-classes-for-kids-usa', label: 'Online classes for US kids' },
        { href: '/roblox-coding-classes-for-kids', label: 'Roblox coding' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'From level 100 to your next step'
  },

  personalityCss: `
.ag-root.ag-cre .ag-hero h1 { letter-spacing: -0.006em; }
.ag-root.ag-cre .ag-capsule { border-left-width: 3px; border-radius: 8px; }
.ag-root.ag-cre .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-cre .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-cre .ag-band-head h3 { letter-spacing: 0.005em; }
`,

  dossier: {
    curriculumAuthority: 'Create & Learn website read raw 17 October 2026: live online small groups of 3 to 5 (5 max); grades K-12 in bands K-2, 2-4, 4-6, 6-9, 9-12; 30+ courses; free intro classes (six in its FAQ comparison); full-refund satisfaction guarantee; fewer than 5% of teacher candidates; US-based, background-checked teachers; founded 2017, Palo Alto; levels 50 to 1000, multiples of 100; Scratch Ninja 100, Python 600, 800-1000 near college intro CS; Game Creators and AI & Data Science pathways with levels; age and level are not the same.',
    localProject: 'Our two-year game path for a fourth grader (their published pathway vs our catalogue), the level-gap arithmetic 500 - 100 = 400, and our three-week comparison plan. Lesson family: ordering steps by prerequisite.',
    requiredMentions: ['Three to five students per class', 'Scratch Ninja', 'Minecraft Modding Quest', 'Beginner Roblox Game Coding', 'Data Science with Pandas', 'Age and level are related, but they are not the same thing.', '500 - 100 = 400', 'Founded in 2017 and headquartered in Palo Alto', 'Fewer than 5% of candidates selected', 'K-2, 2-4, 4-6, 6-9 and 9-12', 'no connection with Create &amp; Learn', 'read on 17 October 2026'],
    sources: [
      { claim: 'Create & Learn home: format, group size, guarantee, free intros, teachers.', url: 'https://www.create-learn.us/' },
      { claim: 'Create & Learn about: founded 2017, Palo Alto, US based, courses.', url: 'https://www.create-learn.us/about' },
      { claim: 'Create & Learn learning pathways: levels and pathways.', url: 'https://www.create-learn.us/computer-science-learning-pathways' },
      { claim: 'Create & Learn private classes: K-12, US-based instructors.', url: 'https://www.create-learn.us/private-online-coding-classes' }
    ],
    rejectedClaims: [
      'Create & Learn prices, discounts and review totals: not printed.',
      'Names of its founders and featured teachers: not used.',
      'That either school produces better outcomes: refused.',
      'A count of all its classes per level: not published on the pages read.',
      'Any affiliation: none, stated on the page.'
    ]
  }
};
