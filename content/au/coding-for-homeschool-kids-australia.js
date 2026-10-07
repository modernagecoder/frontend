'use strict';
// Coding for homeschool kids, Australia (ag- topic door; AU cluster Phase 2, row 38).
// Sources, read raw on 7 October 2026 (curl, default agent):
//  - NSW Government, Home schooling (nsw.gov.au/education-and-training/home-schooling): "To be home schooled, a
//    child must: be registered by the NSW Department of Education, and reside in NSW."
//  - NSW Government, Applying to register for home schooling: the parent is responsible for the educational
//    program's "planning preparation delivery"; "Home schooling does not mean operating like a school in the
//    home."; registration "if they turn 5 on or before 31 July of that year up to the age of 18 years"; children
//    "younger than 6 and older than 17 are not required to be" enrolled or registered; the program is "based on
//    NESA's syllabuses"; a "certificate of home schooling registration".
//  - Victorian Government, Home schooling (vic.gov.au/home-schooling, updated 26 March 2026): "Home schooling is
//    where you take on responsibility for teaching your child."; partial enrolment is "when students combine home
//    education and attend certain subjects or activities at a registered school".
//  - ACARA, Australian Curriculum v9, Digital Technologies content F-6 and 7-10 (.docx), for planning.
// Other states' home education pages returned 403 (South Australia, the ACT, the Northern Territory) or 404 at
// the addresses tried (Queensland, Western Australia); none was circumvented, so no rules are stated for them.
// Lesson family: exit tickets as a home-education record: three short lines written by the child at the end of
// every lesson, then a small Python program that counts the ideas covered across a term (our own design).

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'guide', tag: 'HOMESCHOOL CODING', blurb: 'Coding for home-schooled children in Australia: fitting live coding lessons into a home education program, using the Australian Curriculum to plan, and keeping simple records of learning.' },
  slug: 'coding-for-homeschool-kids-australia',
  code: 'hsch',
  accent: '#723618',
  accentRationale: 'Coding for homeschool kids, Australia: a rust ochre chosen by hand, muted, at least 10 RGB units from every accent in use and 40 from every Australian page',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'Coding for homeschool kids, Australia',
  title: 'Coding for Homeschool Kids in Australia | Live Online',
  description: 'Coding for homeschool kids in Australia: live online lessons that fit a home education program, planning with the Australian Curriculum, and simple learning records.',
  ogDescription: 'Live coding lessons for home-schooled children in Australia: how they fit a home education program, how to plan with the Digital Technologies curriculum, and a simple way to record learning.',
  twitterDescription: 'Coding for home-schooled kids in Australia: live online lessons, curriculum-aware planning and simple learning records.',
  pageName: 'Coding for Homeschool Kids in Australia',
  webPageDescription: 'A guide for Australian home-schooling families to adding coding to a home education program: live online lessons, the Australian Curriculum Digital Technologies content as a planning tool, and exit tickets as a simple learning record.',
  courseDescription: 'Live online coding lessons for home-schooled Australian children from age 6, scheduled in the school day, with a short written record of each lesson.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'Coding for homeschool kids',
  navLinks: [
    { href: '#fit', label: 'Fitting it in' },
    { href: '#rules', label: 'State rules' },
    { href: '#planning', label: 'Planning' },
    { href: '#exit-tickets', label: 'Exit tickets' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Home education &middot; Live online',
  h1: 'Coding for homeschool kids',
  lede: 'Home-schooling families tend to be the most thoughtful about what their children learn and why. Coding fits naturally into a home education program: it is creative, it is cross-curricular (maths, writing, design and logic all turn up), and it can be taught live online by a specialist while you handle the subjects you most enjoy teaching. It also has one big practical advantage for home educators: lessons can happen during the school day, when most children are in class and teachers\' timetables are open. This page explains how families typically fit coding in, what two state governments say about home education (quoted, not interpreted), how to use the Australian Curriculum as a planning tool, and a simple record-keeping habit called the exit ticket that our students use after every lesson.',
  secondaryCta: { href: '#exit-tickets', label: 'See the exit-ticket habit' },
  wa: 'Hello Modern Age Coders, we home school in Australia and would like to add coding to our program. Could we book a free first class?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; daytime lessons for home-educated children',
  spec: [
    ['For', 'Home-schooled children, 6 to 18'],
    ['Lesson times', 'School-day slots available'],
    ['Records', 'An exit ticket after each lesson'],
    ['Planning aid', 'Australian Curriculum v9'],
    ['Subjects', 'Coding, AI, web, apps, maths'],
    ['Format', 'Live online lessons'],
    ['Group', 'Five to ten, or one to one'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Coding for homeschool kids means adding live, specialist-taught programming lessons to a home education program. In Australia, home education is regulated separately by each state and territory, so families plan their program to meet their own authority\'s requirements. Our role is the teaching: live online lessons in Scratch, Python, web development and AI, scheduled in the school day if you wish, with a short written exit ticket after every lesson that families can keep with their own records.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three ways to add coding to a home program',
    lede: 'Choose by age. Each course runs for months, so it can anchor a whole year\'s technology learning.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'HSCH / 01', title: 'Coding for Kids', note: 'Ages 6 to 12. A year-long path from Scratch to games, apps and a first look at Python.' },
      { course: 'python-ai-kids-masterclass', code: 'HSCH / 02', title: 'Python and AI for Kids', note: 'Ages 9 to 12. Real Python with games, drawings and small AI projects.' },
      { course: 'python-complete-masterclass-teens', code: 'HSCH / 03', title: 'Python for Teens', note: 'Ages 13 to 18. A full year of Python, from first lines to well-structured programs.' }
    ]
  },

  sections: [
    {
      id: 'fit', tint: 'tint', eyebrow: 'Fitting it in',
      h2: 'How home-schooling families use live coding lessons',
      lede: 'Families use coding lessons in different ways depending on their approach to home education. These are the patterns we see most often.',
      body: [
        { kind: 'table', caption: 'Common ways home-educating families include coding', head: ['Approach', 'How coding fits', 'What the family handles'], rows: [
          ['Structured, curriculum-led', 'A weekly lesson treated as the technology subject', 'Linking it to their written program and records'],
          ['Project-based', 'Coding as the tool for projects in other subjects', 'Choosing themes: a history timeline website, a science quiz game'],
          ['Interest-led', 'Lessons follow what the child is excited to build', 'Noticing the maths and literacy inside the projects'],
          ['Mixed with school', 'Coding taken alongside part-time school subjects', 'Coordinating with the school on what each covers']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'School-day lessons',
          left: [
            'Our teachers work from India, behind every Australian state by a few hours, so an Australian morning or early afternoon is easy to schedule. Home-schooled children can take lessons during the school day, often in smaller or quieter groups.',
            'Many families like coding late in the morning, after core subjects, as a reward that is still learning.'
          ],
          rightH3: 'A specialist for one subject',
          right: [
            'Home educators often tell us coding is the subject they feel least able to teach themselves. Handing it to a specialist frees time for the subjects they teach with confidence.',
            'Parents are always welcome to sit in, and many find they learn alongside their child.'
          ] },
        { kind: 'p', mt: true, html: 'Families outside Australia, or wanting a broader overview of planning a home coding program, may also find our general <a class="ag-inline-link" href="/homeschool-coding-curriculum">homeschool coding curriculum</a> page useful.' }
      ]
    },
    {
      id: 'rules', tint: 'deep', eyebrow: 'State rules',
      h2: 'What state governments say about home education',
      lede: 'Home education in Australia is regulated by each state and territory, and the rules differ. We are a coding school, not an adviser on registration, so below we only quote what two state governments publish, word for word. Always check your own authority.',
      body: [
        { kind: 'two',
          leftH3: 'New South Wales',
          left: [
            'The NSW Government says: "To be home schooled, a child must: be registered by the NSW Department of Education, and reside in NSW." Its registration page adds that the parent is responsible for the educational program\'s "planning preparation delivery", and that "Home schooling does not mean operating like a school in the home."',
            'On age, the same page says children may be registered "if they turn 5 on or before 31 July of that year up to the age of 18 years", that the program is "based on NESA\'s syllabuses", and that children "younger than 6 and older than 17 are not required to be" enrolled in school or registered for home schooling.'
          ],
          rightH3: 'Victoria',
          right: [
            'The Victorian Government\'s page (updated 26 March 2026) puts it simply: "Home schooling is where you take on responsibility for teaching your child."',
            'It also describes partial enrolment, which is "when students combine home education and attend certain subjects or activities at a registered school". Victoria\'s regulator, the VRQA, publishes guidance on registering and on developing a learning plan.'
          ] },
        { kind: 'p', mt: true, html: '<strong>Other states and territories.</strong> We could not read the home education pages for South Australia, the ACT and the Northern Territory (their sites blocked automated reading), and the Queensland and Western Australian addresses we tried no longer exist. Rather than guess, we say nothing about their rules. Please go to your own state or territory education department for current requirements.' },
        { kind: 'source', html: 'Sources, read 7 October 2026: NSW Government, <a class="ag-inline-link" href="https://www.nsw.gov.au/education-and-training/home-schooling" rel="noopener" target="_blank">Home schooling</a> and <a class="ag-inline-link" href="https://www.nsw.gov.au/education-and-training/home-schooling/applying-to-register" rel="noopener" target="_blank">Applying to register for home schooling</a>; Victorian Government, <a class="ag-inline-link" href="https://www.vic.gov.au/home-schooling" rel="noopener" target="_blank">Home schooling</a>. Nothing on this page is legal or registration advice.' }
      ]
    },
    {
      id: 'planning', tint: 'tint', eyebrow: 'Planning',
      h2: 'Using the Australian Curriculum as a planning tool',
      lede: 'Whatever your approach, the Australian Curriculum v9 Digital Technologies content is a handy map of what children typically learn at each stage. It is free to download and written in plain language.',
      body: [
        { kind: 'table', caption: 'Digital Technologies by band, as a planning map (summarised from ACARA)', head: ['Band', 'Programming focus', 'A coding project that covers it'], rows: [
          ['Foundation to Year 2', 'Following and describing sequences of steps', 'Programming a toy or a character to reach a goal'],
          ['Years 3 and 4', 'Simple algorithms as visual programs', 'A Scratch story or quiz with repeats and decisions'],
          ['Years 5 and 6', 'Visual programs with variables and input', 'A Scratch game with a score, lives and keyboard controls'],
          ['Years 7 and 8', 'A general-purpose language, with flowcharts and pseudocode', 'A Python quiz or text adventure, planned on paper first'],
          ['Years 9 and 10', 'Modular and object-oriented programs', 'A larger Python or web project split into parts']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Mapping lessons to the curriculum',
          left: [
            'Each of our courses can be described in curriculum terms, and our teachers can tell you which content descriptions a term\'s projects touched. Families who keep curriculum-linked plans find that useful.',
            'NSW families should note that the state\'s registration page refers to NESA\'s syllabuses, which NSW publishes separately from the national curriculum.'
          ],
          rightH3: 'Beyond Digital Technologies',
          right: [
            'Coding projects also generate work for other subjects: written explanations for English, coordinates and angles for maths, and research for history or science themes.',
            'We do not certify or assess for registration purposes; we teach, and we give you clear information about what was taught.'
          ] },
        { kind: 'source', html: 'Planning map summarised from ACARA\'s Digital Technologies content files for <a class="ag-inline-link" href="https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-f-6-v9.docx" rel="noopener" target="_blank">Foundation to Year 6</a> and <a class="ag-inline-link" href="https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx" rel="noopener" target="_blank">Years 7 to 10</a>, read 7 October 2026.' }
      ]
    },
    {
      id: 'exit-tickets', tint: 'deep', eyebrow: 'A worked example',
      h2: 'Exit tickets: three lines after every lesson',
      lede: 'An exit ticket is a tiny piece of writing a student does at the very end of a lesson. Our home-schooled students write one after every class, and over a term the tickets become a clear, child-written record of what they learned.',
      body: [
        { kind: 'table', caption: 'The exit ticket our students write (our design)', head: ['Line', 'Prompt', 'An example from a 10 year old'], rows: [
          ['1', 'Today I made...', 'A maze game where the cat goes back to the start if it touches a wall'],
          ['2', 'The coding idea was...', 'If-then: checking whether one sprite is touching another'],
          ['3', 'Next time I want to...', 'Add a timer so the player has 60 seconds']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why three lines',
          left: [
            'Three lines take a couple of minutes, so children actually do them. Writing the coding idea in their own words is a quick check that they understood it, not just copied it.',
            'The third line gives the next lesson a starting point that came from the child, which keeps motivation high.'
          ],
          rightH3: 'A term at a glance',
          right: [
            'A child with one lesson a week across a ten-week term writes ten tickets; with two lessons a week, twenty. Read together, they show progress far better than a single test would.',
            'Families can keep the tickets with their own home education records in whatever form suits them.'
          ] },
        { kind: 'p', mt: true, html: '<strong>The coding twist.</strong> Older students turn their own tickets into a programming project. They type each ticket\'s "coding idea" line into a Python list, then write a short program that counts how often each idea appears across the term, for example how many lessons used loops, decisions or variables. It is a real data task, built on their own learning, and the printed summary sits neatly beside the handwritten tickets.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Honest records', p: 'Tickets are in the child\'s words, unedited by teachers, so they reflect what the child actually understood.' },
          { h3: 'Easy to share', p: 'Families can show tickets to anyone reviewing their program, alongside their own planning documents.' },
          { h3: 'Good for the child', p: 'Explaining what you learned is one of the most reliable ways to remember it.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'Four stages over a home-education year',
    lede: 'With a weekly lesson, most children move through the first three stages within a year, whatever age they start.',
    table: { caption: 'A year of coding in a home program', head: ['Stage', 'What your child can do'], rows: [
      ['1. Builds', 'Completes small projects with a teacher and writes an exit ticket each time'],
      ['2. Explains', 'Describes the coding idea behind each project in their own words'],
      ['3. Plans', 'Chooses and plans a project of their own, often linked to another subject'],
      ['4. Reflects', 'Reviews a term of exit tickets and explains how their skills have grown']
    ] },
    left: { h3: 'Social learning', ps: [
      'Group lessons give home-schooled children regular contact with peers who share an interest, often from different states and countries.',
      'Children who prefer a quieter setting can learn one to one.'
    ] },
    right: { h3: 'Flexible across the year', ps: [
      'Home-educating families rarely follow school terms exactly. Lessons continue whenever you like, and billing is monthly.',
      'Day and time are agreed in the free first class.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Courses home-schooled children choose',
    lede: 'Grouped by age. Every course suits a home program, and none requires school enrolment.',
    bands: [
      { num: 'I', h3: 'Younger children', sub: 'Ages 6 to 9', courses: [
        { code: 'HSCH / YNG / 01', slug: 'scratch-programming-complete-course', title: 'Scratch Coding for Kids', blurb: 'Stories, games and animations in Scratch.' },
        { code: 'HSCH / YNG / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem Solving for Kids', blurb: 'Logic, patterns and algorithms.' },
        { code: 'HSCH / YNG / 03', slug: 'early-math-foundations', title: 'Early Math Foundations', blurb: 'Playful maths for the youngest learners.' }
      ] },
      { num: 'II', h3: 'Middle years', sub: 'Ages 9 to 12', courses: [
        { code: 'HSCH / MID / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'First Python and small AI projects.' },
        { code: 'HSCH / MID / 02', slug: 'kids-ai-web-development-course', title: 'Web Development for Kids', blurb: 'Websites for projects in any subject.' },
        { code: 'HSCH / MID / 03', slug: 'maths-through-coding', title: 'Maths Through Coding', blurb: 'Maths learned with Python, from ten.' }
      ] },
      { num: 'III', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'HSCH / TEEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'A full year of Python.' },
        { code: 'HSCH / TEEN / 02', slug: 'full-stack-web-development-teens-masterclass', title: 'Full Stack Web Development for Teens', blurb: 'Front end and back end, project by project.' },
        { code: 'HSCH / TEEN / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data Science for Teens', blurb: 'Python for real data, a natural partner to maths.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live lessons around a home-education day',
    lede: 'Because India time is behind every Australian state, our teachers can offer Australian mornings and early afternoons as well as after-school slots, which suits families who learn at home during the day.',
    slots: [
      { time: 'Weekday, late morning', l: 'A favourite for home-educated children.' },
      { time: 'Weekday, early afternoon', l: 'After lunch, before afternoon activities.' },
      { time: 'After school or weekend', l: 'For families who mix home and part-time school.' }
    ],
    cells: [
      { h3: 'A free first class', p: 'Your child tries a short project, and we discuss how coding could fit your program.' },
      { h3: 'Small groups', p: 'Five to ten learners at a similar level, sometimes including other home-schooled children.' },
      { h3: 'One to one', p: 'Shaped entirely around your child and your program.' },
      { h3: 'Exit tickets', p: 'A short written record after every lesson, in your child\'s words.' },
      { h3: 'Parents welcome', p: 'Sit in on any lesson; many parents learn too.' },
      { h3: 'Teaching, not certifying', p: 'We teach and describe what was taught. Registration decisions belong to your state\'s authority.' }
    ]
  },

  projectsH2: 'Projects built by our students',
  projectsLede: 'Projects finished by our students, some of them home-educated. See more in our <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Exactly as left by parents and students on our Google profile.',

  fees: {
    h2: 'Fees for home-schooling families',
    lede: 'Home-schooling families in Australia pay a monthly fee in US dollars. There is no joining fee and no commitment beyond the current month.',
    free: ['A short project with a teacher', 'A conversation about your program', 'No card or bank details'],
    group: ['Five to ten learners per class', 'A consistent teacher', 'Daytime groups where available', 'Stop after any month'],
    one: ['Lessons built around your program', 'Daytime scheduling', 'Exit tickets after every lesson']
  },

  faq: {
    eyebrow: 'Questions from home educators',
    h2: 'What home-schooling families ask about coding',
    items: [
      { q: 'Can home-schooled children take your coding classes?', a: 'Yes. Our classes are live and online, need no school enrolment, and can be scheduled during the school day, which suits many home-educating families.' },
      { q: 'What is an exit ticket?', a: 'An exit ticket is a short piece of writing a student completes at the end of a lesson. Ours has three lines: what the child made, the coding idea behind it, and what they want to do next.' },
      { q: 'Will your lessons meet my state\'s home education requirements?', a: 'We cannot say: requirements differ between states and territories and are set by each authority. We teach and give you clear information about what was taught, which you can use in your own planning and records.' },
      { q: 'Do you follow the Australian Curriculum?', a: 'Our courses can be mapped to the Australian Curriculum v9 Digital Technologies content, and teachers can tell you which content areas a term covered. NSW families should note their state refers to NESA\'s syllabuses.' },
      { q: 'Can lessons happen during the school day?', a: 'Yes. Our teachers are in India, which is behind every Australian state, so Australian mornings and early afternoons are available as well as after-school times.' },
      { q: 'What age can home-schooled children start?', a: 'Live coding lessons start at age 6, with Scratch. Older beginners, including teenagers, start at the level that suits them.' },
      { q: 'Is coding a good subject for home education?', a: 'Many families find it is: it is creative, connects naturally to maths, writing and design, and is often the subject parents feel least able to teach themselves.' },
      { q: 'Do you assess or certify children for registration?', a: 'No. We teach coding and provide a record of lessons and exit tickets. Assessment and registration are matters for your state or territory authority.' },
      { q: 'Can my child join group lessons with other home-schooled children?', a: 'Where daytime groups run, they often include home-educated learners. One-to-one lessons are always available.' },
      { q: 'What does it cost?', a: 'Your first lesson is free, with no card asked for. Group and private lessons each carry a monthly fee, shown in the Fees section, and nothing is charged to join.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Australian home-educating families.',
    items: [
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'The full list of our Australian pages and guides.' },
      { href: '/homeschool-coding-curriculum', label: 'Homeschool coding curriculum', p: 'Our general guide to planning coding at home.' },
      { href: '/kids-coding-languages-australia', label: 'Kids coding languages', p: 'Which language to start with at each age.' },
      { href: '/coding-classes-for-9-and-10-year-olds-australia', label: 'Coding for 9 and 10 year olds', p: 'What children of this age can build.' },
      { href: '/online-coding-classes-for-kids-australia', label: 'Online coding for Australian kids', p: 'Year levels and lesson times by state.' },
      { href: '/online-maths-tutoring-australia', label: 'Online maths tutoring in Australia', p: 'For the maths side of a home program.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Send your details and we will call at a time that suits your day. In the free class your child tries a short project, and we talk through how coding could fit into your home education program.',
    readFirst: 'If you like to research first, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains our lessons in depth and the <a class="ag-inline-link" href="/courses">course list</a> shows every subject and age.',
    note: 'WhatsApp is often the easiest way to reach us from Australia. Our team is in India (hence +91), and we have no Australian office.',
    formNote: 'Free, no card, no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Home education', links: [
        { href: '/homeschool-coding-curriculum', label: 'Homeschool coding curriculum' },
        { href: '/kids-coding-languages-australia', label: 'Kids coding languages' },
        { href: '/online-maths-tutoring-australia', label: 'Maths tutoring in Australia' },
        { href: '/coding-roadmap', label: 'The coding roadmap' }
      ] },
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/online-coding-classes-for-kids-australia', label: 'Online coding for kids' },
        { href: '/coding-for-year-7-australia', label: 'Coding for Year 7' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Three lines a lesson add up to a year of evidence'
  },

  personalityCss: `
.ag-root.ag-hsch .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-hsch .ag-capsule { border-left-width: 5px; border-radius: 8px; }
.ag-root.ag-hsch .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-hsch .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-hsch .ag-grid-2 h3 { letter-spacing: -0.006em; }
.ag-root.ag-hsch .ag-slots { gap: 1.05rem; }
`,

  dossier: {
    curriculumAuthority: 'Australia, home education. NSW Government, Home schooling: "To be home schooled, a child must: be registered by the NSW Department of Education, and reside in NSW." NSW Government, Applying to register for home schooling: the parent is responsible for the program\'s "planning preparation delivery"; "Home schooling does not mean operating like a school in the home."; "if they turn 5 on or before 31 July of that year up to the age of 18 years"; "based on NESA\'s syllabuses"; children "younger than 6 and older than 17 are not required to be" enrolled or registered. Victorian Government, Home schooling (updated 26 March 2026): "Home schooling is where you take on responsibility for teaching your child."; partial enrolment "when students combine home education and attend certain subjects or activities at a registered school". ACARA Digital Technologies F-6 and 7-10 used as a planning map.',
    localProject: 'Exit tickets as a home-education record: three lines after every lesson (what I made, the coding idea, what next); ten tickets in a ten-week term at one lesson a week, twenty at two; older students load the "coding idea" lines into a Python list and count how often each idea appears. Our own design. Lesson family: exit tickets as a learning record, analysed in Python.',
    requiredMentions: ['exit ticket', 'planning preparation delivery', 'does not mean operating like a school in the home', 'reside in NSW', 'partial enrolment', 'take on responsibility for teaching your child', 'turn 5 on or before 31 July', 'younger than 6 and older than 17', 'Today I made...'],
    sources: [
      { claim: 'NSW Government, Home schooling: registration by the NSW Department of Education and residence in NSW.', url: 'https://www.nsw.gov.au/education-and-training/home-schooling' },
      { claim: 'NSW Government, Applying to register for home schooling: parent responsibility for planning, preparation and delivery; age rules; NESA syllabuses; certificate of registration.', url: 'https://www.nsw.gov.au/education-and-training/home-schooling/applying-to-register' },
      { claim: 'Victorian Government, Home schooling (updated 26 March 2026): definition of home schooling and partial enrolment.', url: 'https://www.vic.gov.au/home-schooling' },
      { claim: 'ACARA, Australian Curriculum v9, Digital Technologies content F-6 and 7-10, summarised as a planning map.', url: 'https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-f-6-v9.docx' }
    ],
    rejectedClaims: [
      'Home education rules for Queensland, Western Australia, South Australia, Tasmania, the ACT and the Northern Territory: pages returned 404 or 403 to automated reading and were not circumvented, so no rules are stated.',
      'Numbers of home-schooled children in Australia: no primary source read raw, so none quoted.',
      'Any claim that our lessons satisfy registration or reporting requirements: refused; the page says requirements are set by each authority.',
      'VRQA page content beyond its published menu headings: the VRQA site renders by script, so only its section names are referred to.',
      'Lesson length in minutes: not in our brand facts, so not stated.'
    ]
  }
};
