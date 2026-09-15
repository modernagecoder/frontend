'use strict';
// AI and Python Academy for girls, Netherlands (ag- topic door, national).
// Hard rules, as for the Oman girls page: no claim that girls learn
// differently, and no girls-only batches. The classes are the same mixed
// classes everyone takes; the page is about the numbers and what helps.
// Spine: CBS Emancipatiemonitor 2024. Work: women were 17.0 percent of those
// in ICT occupations in 2023 against 13.3 percent in 2014; of maths and
// science graduates, 19 percent of men and 7 percent of women had an ICT job;
// of ICT graduates, 58 percent of men and 34 percent of women. Study: women
// among wo informatica students rose from 22 to 29 percent (2015/'16 to
// 2023/'24), in hbo informatica from just over 6 to just over 13 percent;
// girls in vmbo techniek from 9 to 16 percent. The gap is closing in study
// and staying wide at work.

module.exports = {
  cluster: 'ag',
  slug: 'ai-and-python-academy-for-girls-netherlands',
  code: 'gan',
  accent: '#594E86',
  accentRationale: 'Girls door: a dusk violet from the solver, nearly sixty units from every page it links to, the academy hub, the teens, college and machine learning doors and both Dutch oranges among them, with an unlinked city as its nearest neighbour',
  pageType: 'market',
  market: { name: 'Netherlands', iso: 'NL', dial: '+31', lang: 'en-NL', locale: 'en_NL', geoRegion: 'NL', brandTag: 'Netherlands', phonePlaceholder: '6 XXXX XXXX', minDigits: 9 },
  routeLabel: 'AI and Python Academy for girls, Netherlands',
  title: 'AI and Python Academy for Girls, Netherlands | Live Online',
  description: 'AI and Python for girls in the Netherlands, ages 6 to 18: the same live classes as everyone, and the national figures on who studies ICT today. First lesson free.',
  ogDescription: 'Women are 17 percent of people in Dutch ICT jobs, up from 13 percent a decade earlier. More girls now study informatica; fewer of them end up in ICT work. AI and Python classes that start early and finish projects.',
  twitterDescription: 'AI and Python for girls in the Netherlands, in the same live classes as everyone. First lesson free.',
  pageName: 'AI and Python Academy for Girls in the Netherlands',
  webPageDescription: 'Live online AI and Python classes for girls in the Netherlands aged 6 to 18, taught in mixed small groups or one to one, with the national figures on women in ICT study and work.',
  courseDescription: 'A live online AI and Python programme open to every learner, described here for girls in the Netherlands aged 6 to 18: typed Python, data, machine learning and apps, in mixed small groups or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'AI and Python Academy, Netherlands', href: '/ai-and-python-academy-netherlands' }],
  crumbLabel: 'For girls',
  navLinks: [
    { href: '#numbers', label: 'The numbers' },
    { href: '#gap', label: 'Where the gap opens' },
    { href: '#ladder', label: 'The ladder' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Netherlands &middot; Girls, ages 6 to 18 &middot; Live online',
  h1: 'AI and Python academy for girls in the Netherlands',
  lede: 'In 2023 women made up 17.0 percent of the people working in ICT jobs in the Netherlands, according to the national statistics office\'s emancipation monitor. A decade earlier it was 13.3 percent. The numbers in education are moving faster: the share of women among university informatica students rose from 22 to 29 percent in eight years, and in hbo informatica it roughly doubled. Yet the same monitor shows the gap reopening after graduation, when far fewer women with an ICT degree go on to work in ICT than men with the same degree. This page is for families with a daughter who is curious about computers, AI or building things. It does not claim that girls learn differently, because there is no good evidence that they do, and our groups are mixed. What it does offer is an honest look at the figures, and classes that start early, build confidence through finished projects and leave a portfolio that speaks for itself.',
  secondaryCta: { href: '#gap', label: 'See where the gap opens' },
  wa: 'Hello Modern Age Coders, I would like a free AI and Python lesson for my daughter in the Netherlands.',
  heroNote: 'Teaching live since 2020 &middot; 10,000+ students &middot; mixed classes, every lesson with a real teacher',
  spec: [
    ['For', 'Girls aged 6 to 18'],
    ['Classes', 'Mixed groups of five to ten, or one to one'],
    ['Subjects', 'Python, AI, data, apps'],
    ['Approach', 'Early start, finished projects, portfolio'],
    ['Format', 'Live video with a teacher'],
    ['Times', 'After school and weekends'],
    ['Language', 'English'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders teaches AI and Python live online to learners in the Netherlands, and this page describes that teaching for girls aged six to eighteen and their families. The classes are the same as for everyone: mixed groups of five to ten learners at one level, or one-to-one lessons, with a live teacher, in English. We make no claim that girls learn differently. What helps, we find, is starting early, finishing real projects and keeping a public portfolio, so that a girl\'s ability is visible to herself and to others. The first lesson is free; after it a group place is USD 100 a month and private lessons USD 150.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses many girls start with',
    lede: 'The same courses every learner takes: one for the younger child ready to type, one for the teenager curious about AI, one for the teenager who wants to build an app people can use. Each card opens its own syllabus.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'GIRLS / 01', title: 'Python and AI for Kids', note: 'Typed Python from about nine: drawings, games and a first program that learns, finished and shown to the family every few lessons.' },
      { course: 'ai-ml-masterclass-teens', code: 'GIRLS / 02', title: 'AI and Machine Learning for Teens', note: 'For a teenager who uses AI and wants to understand it: statistics, models and neural networks, each project written up and kept.' },
      { course: 'complete-app-development-masterclass-for-teens', code: 'GIRLS / 03', title: 'App Development for Teens', note: 'A real app built from an idea the teenager chooses, ending with something friends can install.' }
    ]
  },

  sections: [
    {
      id: 'numbers', tint: 'tint', eyebrow: 'The numbers',
      h2: 'Women in Dutch ICT study and work, from the national emancipation monitor',
      lede: 'All figures below come from the CBS Emancipatiemonitor 2024, the national statistics office\'s regular report on differences between women and men, in its chapters on learning and working.',
      body: [
        { kind: 'table', caption: 'Women and men in ICT, CBS Emancipatiemonitor 2024', head: ['Measure', 'Figure'], rows: [
          ['Women among people in ICT occupations, 2023', '17.0 percent'],
          ['The same, 2014', '13.3 percent'],
          ['Maths and natural science graduates with an ICT job, 2023', '19 percent of men, 7 percent of women'],
          ['ICT graduates working in an ICT occupation', '58 percent of men, 34 percent of women'],
          ['Women among university (wo) informatica students', 'from 22 percent in 2015/\'16 to 29 percent in 2023/\'24'],
          ['Women among hbo informatica students', 'from just over 6 percent to just over 13 percent over the same years'],
          ['Women in university technology, industry and construction', 'from 26 percent to 31 percent'],
          ['Girls choosing techniek in vmbo', 'from 9 percent to 16 percent']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Read down the table and two stories appear. In education the numbers are rising steadily: more girls choose technical routes in vmbo, and the share of women studying informatica has grown at both hbo and university level.',
            'In work the picture changes more slowly. Women still make up fewer than one in five of the people in ICT occupations, although the share has risen since 2014.'
          ],
          right: [
            'The sharpest contrast is in the step from diploma to job. Among people with an ICT degree, 58 percent of men worked in an ICT occupation, against 34 percent of women. Among maths and science graduates the gap is wider still in relative terms: 19 percent of men and 7 percent of women had an ICT job.',
            'Those figures do not explain why; the monitor describes the difference without assigning a single cause. They do suggest that the years between choosing a subject and choosing a job matter a great deal.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://longreads.cbs.nl/emancipatiemonitor-2024/werken/" rel="noopener" target="_blank">CBS Emancipatiemonitor 2024, Werken</a>; <a class="ag-inline-link" href="https://longreads.cbs.nl/emancipatiemonitor-2024/van-leren-naar-werken/" rel="noopener" target="_blank">CBS Emancipatiemonitor 2024, Van leren naar werken</a>. Read 15 September 2026; figures quoted as published.' }
      ]
    },
    {
      id: 'gap', tint: 'deep', eyebrow: 'Where the gap opens',
      h2: 'Where the gap opens, and what classes can and cannot do about it',
      lede: 'A coding class cannot change a labour market. It can change what a girl knows she can do, and what she can show. That is where we put our effort.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Start before the choices', p: 'Profile and study choices come early in the Dutch system: a profile in the third or fourth year of havo and vwo, a sector in vmbo. A girl who has already built programs by then chooses from experience rather than from impressions. That is the strongest reason to begin at nine or ten rather than sixteen.' },
          { h3: 'Finish real things', p: 'Confidence in a technical subject comes from finished work more than from praise. Our learners, girls and boys alike, complete projects every few weeks: a game, an app, a trained model with its results. Each finished project is evidence a learner can point to.' },
          { h3: 'Make ability visible', p: 'The step from diploma to job is where the monitor shows the widest gap. A public portfolio of real work, begun at school age, makes a candidate\'s ability visible to employers, universities and, not least, to herself.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'What we do not do matters too. We do not run girls-only groups, because the classes themselves are not the problem and separate groups can signal that they are. We do not teach a different curriculum, because there is no evidence that girls need one. And we do not promise to fix the figures above.'
          ],
          right: [
            'What families tell us helps is simpler: a teacher who expects a lot, groups where a learner is placed by ability rather than assumption, and projects a daughter is proud to show. The free first lesson is a good way to see whether that fits.'
          ] },
        { kind: 'source', html: 'The approach in this section is ours. It draws on the CBS figures above for context and makes no claim about differences in how girls and boys learn.' }
      ]
    },
    {
      id: 'routes', tint: '', eyebrow: 'Routes',
      h2: 'The same routes as every learner, described for girls and their families',
      lede: 'There is no separate girls\' track. These are the ordinary routes, with pointers to the pages that describe each stage.',
      body: [
        { kind: 'two',
          left: [
            'For girls aged six to twelve, the route starts with Scratch and moves to typed Python; see <a class="ag-inline-link" href="/coding-classes-for-kids-netherlands">coding classes for kids in the Netherlands</a>. For teenagers, the <a class="ag-inline-link" href="/coding-classes-for-teens-netherlands">teens page</a> covers Python, AI, apps and the web.',
            'A girl drawn to AI in particular can go further on <a class="ag-inline-link" href="/machine-learning-for-school-students-netherlands">machine learning for school students</a>, where pupils build and test models themselves.'
          ],
          right: [
            'For the language itself, <a class="ag-inline-link" href="/python-classes-netherlands">Python classes in the Netherlands</a> covers every age. The global page on <a class="ag-inline-link" href="/coding-classes-for-girls">coding classes for girls</a> describes the same approach internationally.',
            'For women returning to technology later in life, <a class="ag-inline-link" href="/coding-comeback-women">coding comeback for women</a> is the page to read.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The ladder',
    h2: 'The same five rungs, climbed with finished work at each',
    lede: 'Every learner climbs the same ladder. At each rung, the aim is a finished piece of work the learner can show, because finished work builds the kind of confidence that lasts.',
    table: { caption: 'The route, with the finished work at each rung', head: ['Rung', 'Usually', 'Finished work to show'], rows: [
      ['1. First code', 'Ages 6 to 10', 'A game or animation in Scratch, then first typed Python'],
      ['2. Real programs', 'Ages 10 to 13', 'A program with files, choices and loops that solves a real problem'],
      ['3. Data and models', 'Ages 13 to 16', 'A trained model with its results written up'],
      ['4. Apps and projects', 'Ages 14 to 18', 'An app or a larger project other people can use'],
      ['5. Portfolio', 'Throughout', 'A public repository that shows what the learner can do']
    ] },
    left: { h3: 'Why finished work matters so much', ps: [
      'A learner who has finished five projects knows she can finish the sixth. That knowledge is worth more than any reassurance, and it is the same for every learner.',
      'The complete order of subjects is on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Around the Dutch school years', ps: [
      'Starting in the last years of the basisschool leaves time to build real experience before the profile or sector choice. In exam years, most families keep lessons light.',
      'Girls at international schools follow the same rungs, placed by ability.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Eight live courses, the same for every learner',
    lede: 'Grouped by age. Each card opens the course page with its schedule and fee; the free lesson settles where a learner starts.',
    bands: [
      { num: 'I', h3: 'Ages 6 to 12', sub: 'First code and first AI ideas', courses: [
        { code: 'GIRLS / YOUNG / 01', slug: 'scratch-programming-complete-course', title: 'Scratch Coding for Kids', blurb: 'Games and animations from blocks, the gentlest first step, with something finished every few lessons.' },
        { code: 'GIRLS / YOUNG / 02', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'Typed Python and a first learning program for ages nine to twelve.' },
        { code: 'GIRLS / YOUNG / 03', slug: 'ai-literacy-for-kids-course', title: 'AI Literacy for Kids', blurb: 'How AI tools work and when not to trust them, for children from eight.' }
      ] },
      { num: 'II', h3: 'Ages 12 to 18', sub: 'Python, AI, data and apps', courses: [
        { code: 'GIRLS / TEEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'The full Python language over two years, the base for everything after.' },
        { code: 'GIRLS / TEEN / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and Machine Learning for Teens', blurb: 'Models trained, tested and written up, from statistics to neural networks.' },
        { code: 'GIRLS / TEEN / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data Science for Teens', blurb: 'Real datasets in Python, cleaned, plotted and modelled.' },
        { code: 'GIRLS / TEEN / 04', slug: 'complete-app-development-masterclass-for-teens', title: 'App Development for Teens', blurb: 'An app from idea to installable, built with React Native.' },
        { code: 'GIRLS / TEEN / 05', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub for Teens', blurb: 'A public portfolio from the first commit, so finished work is always visible.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How the classes run',
    h2: 'Mixed groups, a teacher who expects a lot',
    lede: 'Teachers are based in India, which keeps one time all year, so they are three and a half hours ahead of the Netherlands in summer and four and a half in winter. Lessons for girls, as for every learner, usually fall in the late afternoon or at the weekend, at a regular time agreed during the free lesson.',
    slots: [
      { time: 'After school', l: 'Late afternoon, Dutch time. The most common choice.' },
      { time: 'Early evening', l: 'By arrangement, for older teenagers with afternoon commitments.' },
      { time: 'Weekend', l: 'Saturday or Sunday, for longer project sessions.' }
    ],
    cells: [
      { h3: 'A free first lesson', p: 'Your daughter builds something real while the teacher watches how she thinks, and the right starting rung becomes clear.' },
      { h3: 'Mixed groups of five to ten', p: 'Learners from several countries at the same level. Groups are formed by ability, never by gender.' },
      { h3: 'One to one if preferred', p: 'For a learner who prefers a teacher to herself, has a project deadline, or is far ahead of her age.' },
      { h3: 'Parents informed', p: 'We talk with a parent before anything is booked and keep the family up to date, as Dutch consent rules expect for under-sixteens.' },
      { h3: 'In English', p: 'Lessons are in English; Dutch school terms are used as families use them.' },
      { h3: 'A portfolio from the start', p: 'Every finished project goes into her own GitHub repository.' }
    ]
  },

  projectsH2: 'What our students have built',
  projectsLede: 'Four live projects by our students. More, by learners of every age and background, are on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'From Google, as families and students wrote them. We do not write or pay for reviews.',

  fees: {
    h2: 'Fees',
    lede: 'Monthly, in US dollars, the same for every learner and every country outside India. No enrolment fee and no annual contract.',
    free: ['A real lesson on a real task', 'Places the learner at the right rung', 'No card details needed'],
    group: ['Five to ten learners at one level', 'Mixed groups, the same live teacher', 'Work reviewed every week', 'A certificate at the end'],
    one: ['A teacher for one learner', 'Pace set around her goals', 'Good for projects and deadlines']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'What families with daughters ask us',
    items: [
      { q: 'Do you run girls-only groups?', a: 'No. Our groups are mixed and formed by ability. We do not think the classes themselves are the problem, and separate groups can suggest that they are. One-to-one lessons are available for any learner who prefers them.' },
      { q: 'Do girls learn coding differently?', a: 'We make no such claim, because the evidence does not support it. Every learner gets the same curriculum, the same expectations and the same teachers.' },
      { q: 'How many women work in ICT in the Netherlands?', a: 'According to the CBS Emancipatiemonitor 2024, women made up 17.0 percent of people in ICT occupations in 2023, up from 13.3 percent in 2014.' },
      { q: 'Are more girls studying informatica?', a: 'Yes. The share of women among university informatica students rose from 22 percent in 2015/\'16 to 29 percent in 2023/\'24, and in hbo informatica it roughly doubled over the same years.' },
      { q: 'What age should my daughter start?', a: 'From six with blocks, and typed Python from about nine. Starting before the profile or sector choice gives her real experience to choose from.' },
      { q: 'Will the teacher be a woman?', a: 'We cannot promise a particular teacher. Every teacher is chosen for the subject and the level, and every learner gets the same high expectations.' },
      { q: 'Are the lessons in English?', a: 'Yes, with Dutch school terms kept. Programming languages and tools are in English anyway.' },
      { q: 'What does it cost?', a: 'USD 100 a month for a group place and USD 150 a month for one-to-one lessons, billed in US dollars, with no enrolment fee and no yearly contract. The first lesson is free.' },
      { q: 'When are lessons held?', a: 'After school or at the weekend, Dutch time. The teacher is three and a half hours ahead in summer and four and a half in winter.' },
      { q: 'What happens after we send the form?', a: 'We call a parent at a Dutch hour to arrange the free lesson. Nothing is charged unless you decide to continue.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for girls, women and families',
    lede: 'Pages for each stage, and for the wider picture.',
    items: [
      { href: '/coding-classes-for-girls', label: 'Coding classes for girls', p: 'The same approach, described internationally.' },
      { href: '/coding-comeback-women', label: 'Coding comeback for women', p: 'For women returning to technology later.' },
      { href: '/coding-classes-for-kids-netherlands', label: 'Coding classes for kids', p: 'Ages 6 to 12, from Scratch to first Python.' },
      { href: '/coding-classes-for-teens-netherlands', label: 'Coding classes for teens', p: 'Ages 12 to 18, Python, AI and apps.' },
      { href: '/machine-learning-for-school-students-netherlands', label: 'Machine learning for school students', p: 'For pupils who want to build and test models.' },
      { href: '/ai-and-python-academy-netherlands', label: 'AI and Python Academy, Netherlands', p: 'The national ladder behind every route.' }
    ]
  },

  start: {
    h2: 'Book a free lesson for your daughter',
    lede: 'Leave a parent\'s number and we will call at a Dutch hour. In the free lesson your daughter builds something real with a teacher, and by the end we know where she should start.',
    readFirst: 'Would you like to read first? See the <a class="ag-inline-link" href="/courses">course list</a>, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> and the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.',
    note: 'WhatsApp from a Dutch phone is free and usually fastest. The number is Indian; we have no office or premises in the Netherlands.',
    formNote: 'No card, no commitment. One call with a parent.'
  },

  footer: {
    cols: [
      { h4: 'Netherlands', links: [
        { href: '/ai-and-python-academy-netherlands', label: 'Academy, Netherlands' },
        { href: '/coding-classes-for-kids-netherlands', label: 'Coding for kids' },
        { href: '/coding-classes-for-teens-netherlands', label: 'Coding for teens' },
        { href: '/python-classes-netherlands', label: 'Python classes' }
      ] },
      { h4: 'For girls and women', links: [
        { href: '/coding-classes-for-girls', label: 'Coding classes for girls' },
        { href: '/coding-comeback-women', label: 'Coding comeback for women' },
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Teaching learners in the Netherlands on CET and CEST'
  },

  personalityCss: `
.ag-root.ag-gan .ag-hero-grid { gap: clamp(1.2rem, 3.2vw, 2.8rem); }
.ag-root.ag-gan .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-gan .ag-capsule { border-left-width: 5px; }
.ag-root.ag-gan .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-gan .ag-band-head h3 { letter-spacing: -0.005em; }
.ag-root.ag-gan .ag-table caption { text-align: left; }
.ag-root.ag-gan .ag-spec dt { letter-spacing: 0.12em; }
.ag-root.ag-gan .ag-slots { gap: 1.25rem; }
`,

  mustMention: ['Emancipatiemonitor 2024', '17.0 percent', '13.3 percent', '58 percent of men, 34 percent of women', '19 percent of men, 7 percent of women', 'from 22 percent', '29 percent', 'from 9 percent to 16 percent', 'girls-only']
};
