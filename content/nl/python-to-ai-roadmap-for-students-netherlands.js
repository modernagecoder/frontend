'use strict';
// Python to AI roadmap for students, Netherlands (ag- topic door, national).
// This page fulfils the academy hub's promise of "a Dutch-specific version,
// written by school year with what a parent should expect to see at home at
// each stage". The school frame is quoted from Rijksoverheid's pages: vmbo
// lasts 4 years with four learning paths and ten profiles, among them Media,
// vormgeving en ICT, after which many pupils go to mbo and some to havo; havo
// lasts 5 years (onderbouw years 1 to 3, bovenbouw 4 and 5), with four
// profiles, a compulsory profielwerkstuk and final exams in 7 subjects; vwo
// lasts 6 years (bovenbouw 4 to 6), with the four profiles natuur en
// techniek, natuur en gezondheid, economie en maatschappij and cultuur en
// maatschappij, a compulsory profielwerkstuk and exams in at least 8
// subjects. The primary-school facts belong to the kids door and are linked.

module.exports = {
  cluster: 'ag',
  slug: 'python-to-ai-roadmap-for-students-netherlands',
  code: 'rmp',
  accent: '#860E2B',
  accentRationale: 'Roadmap door: a deep crimson from the solver, twenty-four units from every page it links to, the kids, teens and Python doors, the academy hub and both Dutch oranges among them, with an unlinked Hague district as its nearest neighbour',
  pageType: 'market',
  market: { name: 'Netherlands', iso: 'NL', dial: '+31', lang: 'en-NL', locale: 'en_NL', geoRegion: 'NL', brandTag: 'Netherlands', phonePlaceholder: '6 XXXX XXXX', minDigits: 9 },
  routeLabel: 'Python to AI roadmap for students, Netherlands',
  title: 'Python to AI Roadmap for Students in the Netherlands',
  description: 'A Python to AI roadmap by Dutch school year, from groep 6 to vwo 6 and beyond, with what a parent should see at home at each stage. Live online, first lesson free.',
  ogDescription: 'Vmbo, havo or vwo, groep 6 or the exam year: a roadmap from first Python to real AI, set against the Dutch school system, with what a parent should see at home at every stage.',
  twitterDescription: 'From first Python to real AI, year by year through Dutch school. Live online, first lesson free.',
  pageName: 'Python to AI Roadmap for Students in the Netherlands',
  webPageDescription: 'A year-by-year roadmap from first Python to machine learning and AI for pupils in the Dutch school system, vmbo, havo and vwo, with live online classes at every stage.',
  courseDescription: 'A live online route from typed Python to data, machine learning and AI agents, set against the Dutch school years from groep 6 to the end of havo or vwo, placed by ability and taught in English.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'AI and Python Academy, Netherlands', href: '/ai-and-python-academy-netherlands' }],
  crumbLabel: 'Python to AI roadmap',
  navLinks: [
    { href: '#system', label: 'The school system' },
    { href: '#roadmap', label: 'The roadmap' },
    { href: '#ladder', label: 'The ladder' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Netherlands &middot; Groep 6 to vwo 6 &middot; Live online',
  h1: 'Python to AI roadmap for students in the Netherlands',
  lede: 'Parents often ask two questions: when should my child start, and how will I know it is working? This page answers both against the Dutch school system itself. The system has three main routes through secondary school, vmbo, havo and vwo, lasting four, five and six years, and each has moments that shape what comes next: a profile chosen in the upper years, a profielwerkstuk in havo and vwo, final exams in seven or more subjects. A route from first Python to real AI fits around those moments rather than competing with them. Below, stage by stage, is what a learner should be learning, and, just as useful, what a parent should see at home: the programs, projects and questions that show real progress. The route is the same for every learner in our classes, taught live online and in English, and the free first lesson shows where a child actually starts.',
  secondaryCta: { href: '#roadmap', label: 'See the roadmap' },
  wa: 'Hello Modern Age Coders, I would like a free lesson and advice on the Python to AI roadmap for my child in the Netherlands.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; one route, placed by ability',
  spec: [
    ['Starts', 'Around groep 6'],
    ['Runs to', 'The end of havo or vwo, and beyond'],
    ['Covers', 'Python, data, models, agents'],
    ['Fits', 'Vmbo, havo, vwo, international schools'],
    ['Format', 'Live video with a teacher'],
    ['Groups', 'Five to ten, or one to one'],
    ['Language', 'English'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'This is the route Modern Age Coders teaches from a child\'s first typed Python to real AI, set out against the Dutch school years: first programs around groep 6 to 8, the full language and first data in the onderbouw, models and a first public project in the upper years, and agents and a portfolio by the end of havo or vwo. At each stage the page says what a parent should see at home. Classes are live online in English, in groups of five to ten at one level or one to one, and pupils are placed by ability rather than school year. Trying a lesson is free; staying on costs USD 100 a month in a small group or USD 150 a month with a private teacher.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses along the roadmap',
    lede: 'The first for the end of primary school, the second for the onderbouw, the third for the upper years. Each card opens its own syllabus and timetable.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'ROUTE / 01', title: 'Python and AI for Kids', note: 'The first stage: typed Python around groep 6 to 8, with small games and a first program that learns.' },
      { course: 'python-complete-masterclass-teens', code: 'ROUTE / 02', title: 'Python for Teens', note: 'The onderbouw stage: the whole language over two years, with files, functions and first data.' },
      { course: 'ai-ml-masterclass-teens', code: 'ROUTE / 03', title: 'AI and Machine Learning for Teens', note: 'The upper-school stage: statistics, models and neural networks, each tested and written up.' }
    ]
  },

  sections: [
    {
      id: 'system', tint: 'tint', eyebrow: 'The school system',
      h2: 'The Dutch secondary system, route by route',
      lede: 'The facts below are quoted from the government\'s own explanations of vmbo, havo and vwo on Rijksoverheid.nl. They set the frame the roadmap fits into.',
      body: [
        { kind: 'table', caption: 'Vmbo, havo and vwo at a glance, from Rijksoverheid.nl', head: ['Route', 'Length', 'Structure', 'At the end'], rows: [
          ['Vmbo', '4 years', 'Four learning paths, from the theoretische leerweg to the basisberoepsgerichte leerweg; the basis, kader and gemengde paths share ten profiles, among them Media, vormgeving en ICT', 'Many pupils go on to mbo; some move on to havo'],
          ['Havo', '5 years', 'Onderbouw in years 1 to 3, bovenbouw in years 4 and 5, with a choice of 4 profiles in the bovenbouw', 'A compulsory profielwerkstuk and final exams in 7 subjects'],
          ['Vwo', '6 years', 'Bovenbouw in years 4, 5 and 6, with a choice of 4 profiles', 'A compulsory profielwerkstuk and final exams in at least 8 subjects']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The four profiles in havo and vwo are natuur en techniek, natuur en gezondheid, economie en maatschappij and cultuur en maatschappij. The choice is made on entering the bovenbouw, which is why the third year matters so much for a pupil considering a technical future.',
            'In vmbo the picture is different: the ten profiles of the basis, kader and gemengde paths are vocational, and one of them, Media, vormgeving en ICT, sits closest to programming.'
          ],
          right: [
            'Every havo and vwo pupil must write a profielwerkstuk, a substantial project in the upper years. For a pupil on this roadmap it is a natural home for a first serious AI or data project, as long as the school\'s rules are followed and the work is the pupil\'s own.',
            'Primary school, the doorstroomtoets and the screen-time guidance for younger children are covered on the <a class="ag-inline-link" href="/coding-classes-for-kids-netherlands">kids page</a>.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.rijksoverheid.nl/onderwerpen/voortgezet-onderwijs/vraag-en-antwoord/hoe-zit-het-vmbo-in-elkaar" rel="noopener" target="_blank">Hoe zit het vmbo in elkaar?</a>; <a class="ag-inline-link" href="https://rijksoverheid.nl/onderwerpen/voortgezet-onderwijs/vraag-en-antwoord/hoe-zit-de-havo-in-elkaar" rel="noopener" target="_blank">Hoe zit de havo in elkaar?</a>; <a class="ag-inline-link" href="https://www.rijksoverheid.nl/onderwerpen/voortgezet-onderwijs/vraag-en-antwoord/hoe-zit-het-vwo-in-elkaar" rel="noopener" target="_blank">Hoe zit het vwo in elkaar?</a> (all Rijksoverheid.nl). Read 15 September 2026.' }
      ]
    },
    {
      id: 'roadmap', tint: 'deep', eyebrow: 'The roadmap',
      h2: 'The roadmap: what to learn at each stage, and what a parent should see at home',
      lede: 'The school years below are typical, not rules. A pupil moves on when the current stage is secure, which the teacher judges from the work, not the calendar.',
      body: [
        { kind: 'table', caption: 'From first Python to real AI, set against Dutch school years', head: ['Stage', 'What the learner works on', 'What a parent should see at home'], rows: [
          ['Groep 6 to 8', 'Typed Python: drawings, small games, a first program that learns from examples', 'A game or drawing the child made and can explain; errors fixed without tears'],
          ['Brugklas and year 2', 'The full language: loops, functions, files, first small datasets', 'Programs that solve a real problem the child chose; a first GitHub repository'],
          ['Year 3 (profile choice in havo and vwo)', 'Data: cleaning, plotting, first honest averages', 'Charts made from real data, with a sentence on what the data cannot say'],
          ['Havo 4 to 5, vwo 4 to 6', 'Models: training, testing against a simple guess, neural networks', 'A trained model with its error stated, and a write-up a stranger could follow'],
          ['Profielwerkstuk year', 'A larger project: a model, an app or an analysis', 'A finished project, the pupil\'s own, with its sources and limits recorded'],
          ['After school', 'Agents, deeper mathematics, a public portfolio', 'A repository that a university or employer can open and check']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The right-hand column is the one to watch. Progress in programming is visible: a child who is learning makes things, fixes things and can explain them. If months pass without anything a parent can see, something is wrong with the pace or the level, and the teacher should say so.',
            'For a vmbo pupil the same stages apply at a pace that suits the route, and the step to mbo, or to havo, is a good moment for a first larger project. The Media, vormgeving en ICT profile pairs naturally with it.'
          ],
          right: [
            'Parents sometimes worry that starting later means missing out. It does not. A pupil who starts in year 3 simply climbs the first stages faster, because they read and reason better than a nine-year-old. What matters is climbing in order.',
            'The one stage worth protecting is year 3, before the profile choice: a term of real programming there tells a pupil far more about a technical future than any open day.'
          ] },
        { kind: 'source', html: 'The roadmap is our teaching plan, set against the school structure quoted above. The school years are typical, not requirements.' }
      ]
    },
    {
      id: 'why', tint: '', eyebrow: 'Why this order',
      h2: 'Why the roadmap runs in this order',
      lede: 'Each stage supplies what the next depends on. The order is the same whatever age a learner starts.',
      body: [
        { kind: 'two',
          left: [
            'Python comes first because it is readable and because it is the language of data and AI; the <a class="ag-inline-link" href="/python-classes-netherlands">Python page</a> explains why. Data comes before models because a model is only as good as the data it learns from.',
            'Models come before agents because an agent that cannot be evaluated cannot be trusted; <a class="ag-inline-link" href="/machine-learning-for-school-students-netherlands">machine learning for school students</a> covers that stage in depth.'
          ],
          right: [
            'For each age group the route is described in more detail on <a class="ag-inline-link" href="/coding-classes-for-kids-netherlands">coding classes for kids</a> and <a class="ag-inline-link" href="/coding-classes-for-teens-netherlands">coding classes for teens</a>. Pupils taking informatica can follow it alongside the subject; see <a class="ag-inline-link" href="/coding-alongside-informatica-havo-vwo-netherlands">coding alongside informatica</a>.',
            'The national <a class="ag-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a> sets out the five rungs this roadmap follows.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The five rungs',
    h2: 'The rungs behind the roadmap, and the sign of readiness for each',
    lede: 'The roadmap follows five rungs. The right-hand column is how a teacher, and a parent, can tell a learner is ready to move on.',
    table: { caption: 'The rungs and the signs of readiness', head: ['Rung', 'Ready to move on when the learner can'], rows: [
      ['1. Python by hand', 'Write a small program from a blank file and fix their own errors'],
      ['2. Data', 'Load, clean and plot a real dataset and say who is missing from it'],
      ['3. Models', 'Train a model and show it beats the simplest possible guess'],
      ['4. Agents', 'Build a program that plans steps, uses tools and logs what it did'],
      ['5. Portfolio', 'Show finished work in public, with its limits written down']
    ] },
    left: { h3: 'Why readiness beats age', ps: [
      'Two twelve-year-olds can be two rungs apart. Placing each by what they can do, not by school year, keeps both learning; the free lesson is where that placement happens.',
      'Beyond school, the general <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a> continues where this one stops.'
    ] },
    right: { h3: 'Around toetsweken and exams', ps: [
      'Most pupils take two lessons a week and pause during test weeks. In the exam year, many keep lessons light or stop until the exams are over.',
      'Pupils at international schools follow the same rungs, placed by ability.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine live courses along the roadmap',
    lede: 'Grouped by stage. Each card opens the course page with schedule and fee; the free lesson places the learner.',
    bands: [
      { num: 'I', h3: 'End of primary school', sub: 'First code', courses: [
        { code: 'ROUTE / PRIM / 01', slug: 'scratch-programming-complete-course', title: 'Scratch Coding for Kids', blurb: 'Blocks first for the youngest, before typed code.' },
        { code: 'ROUTE / PRIM / 02', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'Typed Python and a first learning program for ages nine to twelve.' }
      ] },
      { num: 'II', h3: 'Onderbouw', sub: 'The full language and first data', courses: [
        { code: 'ROUTE / ONDER / 01', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'The full Python language over two years.' },
        { code: 'ROUTE / ONDER / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data Science for Teens', blurb: 'Real data in Python, cleaned, plotted and questioned.' },
        { code: 'ROUTE / ONDER / 03', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub for Teens', blurb: 'A public repository from the first project.' }
      ] },
      { num: 'III', h3: 'Bovenbouw and beyond', sub: 'Models, projects and what comes next', courses: [
        { code: 'ROUTE / BOVEN / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and Machine Learning for Teens', blurb: 'Models trained, tested and written up.' },
        { code: 'ROUTE / BOVEN / 02', slug: 'orange-data-mining-visual-machine-learning-course-for-teens', title: 'Orange Data Mining for Teens', blurb: 'Machine learning through visual workflows, beside code.' },
        { code: 'ROUTE / BOVEN / 03', slug: 'ai-ml-masterclass-complete-college', title: 'AI and Machine Learning Masterclass', blurb: 'The adult-level route, for pupils ready to go further.' },
        { code: 'ROUTE / BOVEN / 04', slug: 'data-structures-algorithms-masterclass-college', title: 'Data Structures and Algorithms', blurb: 'The algorithms university computing courses assume.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How the classes run',
    h2: 'A route that fits the school week',
    lede: 'Our teachers are in India, which keeps the same time all year, so they are three and a half hours ahead of the Netherlands in summer and four and a half in winter. Pupils usually learn in the late afternoon or at the weekend, at a regular time agreed with the family in the free lesson.',
    slots: [
      { time: 'After school', l: 'Late afternoon, Dutch time, for pupils of every age.' },
      { time: 'Early evening', l: 'By arrangement, for upper-school pupils with afternoon commitments.' },
      { time: 'Weekend', l: 'Saturday or Sunday, for longer project sessions.' }
    ],
    cells: [
      { h3: 'A free first lesson', p: 'The teacher sees what the pupil can already do and says honestly where on the roadmap they start.' },
      { h3: 'Groups by level', p: 'Five to ten pupils from several countries at the same stage, whatever their school year.' },
      { h3: 'One to one when it helps', p: 'For a profielwerkstuk, an exam year or a pupil far ahead of their age.' },
      { h3: 'Parents kept informed', p: 'Families hear what their child has built and what comes next, so the right-hand column of the roadmap stays visible.' },
      { h3: 'In English, with Dutch school terms', p: 'Lessons are in English; groep, brugklas, havo, vwo and profielwerkstuk keep their Dutch names.' },
      { h3: 'A portfolio from the start', p: 'Every stage leaves work in the pupil\'s own GitHub repository.' }
    ]
  },

  projectsH2: 'Work our students have published',
  projectsLede: 'Four live projects by our students. More, from every stage of the roadmap, on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'From Google, as written. We do not write or pay for reviews.',

  fees: {
    h2: 'Fees',
    lede: 'Paid monthly in US dollars, at one rate for every country outside India and every stage of the roadmap, with nothing to pay on joining and no yearly tie-in.',
    free: ['A real lesson and an honest placement', 'A roadmap stage agreed', 'No card needed'],
    group: ['Five to ten pupils at one stage', 'The same live teacher each week', 'Work reviewed every week', 'A certificate at the end'],
    one: ['A teacher for one pupil', 'Paced to the school year', 'Good for the profielwerkstuk']
  },

  faq: {
    eyebrow: 'Questions from parents',
    h2: 'What Dutch parents ask about the roadmap',
    items: [
      { q: 'When should my child start?', a: 'Around groep 6 to 8 for typed Python, or earlier with blocks. Starting later is fine: older pupils climb the first stages faster.' },
      { q: 'How will I know it is working?', a: 'You should see things: games, programs, charts and projects your child made and can explain. The roadmap table lists what to expect at each stage.' },
      { q: 'Does the roadmap work for vmbo pupils?', a: 'Yes. The stages are the same, at a pace that suits the route. The Media, vormgeving en ICT profile pairs well with it, and the step to mbo or havo is a good moment for a larger project.' },
      { q: 'How does this fit with the profile choice?', a: 'Havo and vwo pupils choose one of four profiles on entering the bovenbouw. A term of real programming in the third year helps a pupil choose from experience.' },
      { q: 'Can the roadmap support a profielwerkstuk?', a: 'Yes. A model, app or analysis makes a strong profielwerkstuk, as long as the work is the pupil\'s own and the school\'s rules are followed.' },
      { q: 'What if my child is ahead of their year?', a: 'They are placed by ability, not school year, so a quick learner moves on as soon as a stage is secure.' },
      { q: 'Are the lessons in English?', a: 'Yes, with Dutch school terms kept. Programming languages are written in English anyway.' },
      { q: 'What does it cost?', a: 'The first lesson costs nothing. From then on it is USD 100 a month for a seat in a group of five to ten, or USD 150 a month for private lessons, paid in US dollars, with no sign-up fee and no annual tie-in.' },
      { q: 'When are lessons held?', a: 'After school or at the weekend, Dutch time. Teachers are three and a half hours ahead in summer and four and a half in winter.' },
      { q: 'What happens after we send the form?', a: 'Someone from our team phones a parent back, at a time that suits a Dutch family, to book the free lesson, where the starting stage is agreed. There is no charge unless your child continues.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Pages for each stage of the roadmap',
    lede: 'Detail for each age group and each subject along the way.',
    items: [
      { href: '/coding-classes-for-kids-netherlands', label: 'Coding classes for kids', p: 'The first stage, with primary-school timing.' },
      { href: '/coding-classes-for-teens-netherlands', label: 'Coding classes for teens', p: 'The secondary-school stages in detail.' },
      { href: '/python-classes-netherlands', label: 'Python classes', p: 'The language the roadmap is built on.' },
      { href: '/machine-learning-for-school-students-netherlands', label: 'Machine learning for school students', p: 'The models stage in depth.' },
      { href: '/coding-alongside-informatica-havo-vwo-netherlands', label: 'Coding alongside informatica', p: 'For pupils taking the school subject.' },
      { href: '/ai-and-python-academy-netherlands', label: 'AI and Python Academy, Netherlands', p: 'The national ladder behind the roadmap.' }
    ]
  },

  start: {
    h2: 'Find your child\'s place on the roadmap',
    lede: 'Send a parent\'s number and we phone back at a convenient Dutch time. In the free lesson a teacher works with your child and tells you honestly where on the roadmap they start.',
    readFirst: 'Would you like to read first? See the <a class="ag-inline-link" href="/coding-roadmap">general coding roadmap</a>, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> and the <a class="ag-inline-link" href="/courses">course list</a>.',
    note: 'WhatsApp from a Dutch phone is free and usually quickest. The number is Indian; we have no office or premises in the Netherlands.',
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
      { h4: 'Roadmap', links: [
        { href: '/machine-learning-for-school-students-netherlands', label: 'Machine learning for pupils' },
        { href: '/coding-alongside-informatica-havo-vwo-netherlands', label: 'Alongside informatica' },
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Teaching Dutch pupils on CET and CEST'
  },

  personalityCss: `
.ag-root.ag-rmp .ag-hero-grid { gap: clamp(1.2rem, 3.2vw, 2.9rem); }
.ag-root.ag-rmp .ag-hero h1 { letter-spacing: -0.018em; }
.ag-root.ag-rmp .ag-capsule { border-left-width: 5px; }
.ag-root.ag-rmp .ag-section-head h2 { max-width: 36ch; }
.ag-root.ag-rmp .ag-band-head h3 { letter-spacing: -0.006em; }
.ag-root.ag-rmp .ag-table caption { text-align: left; }
.ag-root.ag-rmp .ag-spec dt { letter-spacing: 0.12em; }
.ag-root.ag-rmp .ag-slots { gap: 1.2rem; }
`,

  mustMention: ['Media, vormgeving en ICT', 'theoretische leerweg', 'natuur en techniek', 'cultuur en maatschappij', 'profielwerkstuk', 'final exams in 7 subjects', 'at least 8 subjects', 'Onderbouw in years 1 to 3']
};
