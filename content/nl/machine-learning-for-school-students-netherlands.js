'use strict';
// Machine learning for school students, Netherlands (ag- topic door).
// Spine: the Netherlands runs a national lab for AI in schools, NOLAI, at
// Radboud University, for primary, secondary and special needs education;
// its projects start with a question from a school (ru.nl). The National
// Growth Fund conditionally awarded 51.1 million euros, round 1, 2022 to
// 2035, aiming at 77 co-creation projects, 15 validated intelligent
// educational technologies and at least 9 AI products shown in practice
// (nationaalgroeifonds.nl). NOLAI studies AI that pupils meet as users; this
// page teaches pupils to build and test a model themselves. Worked example
// (invented): the majority-class trap, 183 of 200 against 180 of 200. Roermond
// owns precision and recall by name; this page counts caught and wrongly
// flagged cases per class without those terms. The hub owns the SLO figures.

module.exports = {
  cluster: 'ag',
  slug: 'machine-learning-for-school-students-netherlands',
  code: 'mln',
  accent: '#821E00',
  accentRationale: 'Machine learning school door: a burnt red from the solver, more than sixteen units from every page it links to, the academy hub, the kids, teens and projects doors and both Dutch oranges among them, with an academy page it does not link as its nearest neighbour',
  pageType: 'market',
  market: { name: 'Netherlands', iso: 'NL', dial: '+31', lang: 'en-NL', locale: 'en_NL', geoRegion: 'NL', brandTag: 'Netherlands', phonePlaceholder: '6 XXXX XXXX', minDigits: 9 },
  routeLabel: 'Machine learning for school students, Netherlands',
  title: 'Machine Learning for School Students, Netherlands | Live',
  description: 'Machine learning for Dutch school pupils aged 10 to 18: first models in Python, tested honestly, taught live online in English. First lesson free.',
  ogDescription: 'The Netherlands has a national lab for AI in its schools. This is the other side: pupils who build a model themselves and learn why 90 percent accuracy can mean nothing. Live online.',
  twitterDescription: 'First machine learning models for Dutch pupils aged 10 to 18, built and tested live online. First lesson free.',
  pageName: 'Machine Learning for School Students in the Netherlands',
  webPageDescription: 'Live online machine learning classes for school pupils in the Netherlands aged 10 to 18, from a first learning program to trained and honestly tested models in Python.',
  courseDescription: 'A live online machine learning programme for Dutch school pupils aged 10 to 18: Python, data, first models, fair testing against a baseline and a plain write-up, placed by ability and taught in English.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'AI and Python Academy, Netherlands', href: '/ai-and-python-academy-netherlands' }],
  crumbLabel: 'Machine learning for pupils',
  navLinks: [
    { href: '#lab', label: 'AI in Dutch schools' },
    { href: '#build', label: 'What pupils build' },
    { href: '#ladder', label: 'The ladder' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Netherlands &middot; Ages 10 to 18 &middot; Live online',
  h1: 'Machine learning for school students in the Netherlands',
  lede: 'Artificial intelligence is arriving in Dutch classrooms whether pupils learn how it works or not. The country even has a national laboratory, NOLAI, where schools, researchers and companies develop and study AI for primary, secondary and special needs education, starting from questions the schools themselves ask. That work is about AI that pupils meet as users: practice programs that adapt, dashboards that teachers read. This page is about the other side. A pupil of twelve can write a program that learns from examples; a pupil of fifteen can train a real model and test it fairly; a pupil of seventeen can explain in plain words why a model that is right nine times out of ten might still be useless. Those are the ideas we teach, in Python, live online and in English, alongside a Dutch or international school.',
  secondaryCta: { href: '#build', label: 'See what pupils build' },
  wa: 'Hello Modern Age Coders, I would like a free machine learning lesson for a school pupil in the Netherlands.',
  heroNote: 'Live classes since 2020 &middot; over 10,000 students &middot; every lesson with a teacher',
  spec: [
    ['Ages', '10 to 18'],
    ['Builds', 'Learning programs, trained models'],
    ['Habit', 'Every model tested against a simple guess'],
    ['Language', 'Python, taught in English'],
    ['Format', 'Live video with a teacher'],
    ['Groups', 'Five to ten, or one to one'],
    ['Times', 'After school and weekends'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders teaches machine learning live online to school pupils in the Netherlands aged ten to eighteen. Younger pupils write a first program that learns from examples; older pupils train models in Python on real data, test them against a simple baseline, count what the model gets right and wrong in each group, and write up what it can and cannot do. Pupils are placed by ability, in groups of five to ten or one to one, alongside a Dutch or international school. The first lesson is free; after that a group place is USD 100 a month and one-to-one lessons USD 150.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three ways into machine learning for school pupils',
    lede: 'One for a younger pupil ready to type, one for a teenager ready for real models, and one for a teenager who wants to explore machine learning visually before coding it. Each card opens its own syllabus and timetable.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'ML / 01', title: 'Python and AI for Kids', note: 'For pupils of nine to twelve: typed Python and a first program that learns a rule from examples, then fails on one the pupil chose on purpose.' },
      { course: 'ai-ml-masterclass-teens', code: 'ML / 02', title: 'AI and Machine Learning for Teens', note: 'Statistics, classical models, neural networks, images and text, every model tested against a baseline and explained.' },
      { course: 'orange-data-mining-visual-machine-learning-course-for-teens', code: 'ML / 03', title: 'Orange Data Mining for Teens', note: 'Machine learning through visual workflows, a way to understand training and testing before writing the code.' }
    ]
  },

  sections: [
    {
      id: 'lab', tint: 'tint', eyebrow: 'AI in Dutch schools',
      h2: 'A national lab for AI in schools, which starts from the schools\' own questions',
      lede: 'NOLAI, the Nationaal Onderwijslab AI, is based at Radboud University in Nijmegen. The figures below come from its own pages and from the National Growth Fund, which finances it.',
      body: [
        { kind: 'table', caption: 'NOLAI in its own words and the fund\'s', head: ['Item', 'Detail', 'Source'], rows: [
          ['What it is', 'The National Education Lab AI for elementary, secondary and special needs education in the Netherlands', 'Radboud University'],
          ['How a project starts', 'With a question asked by a school, developed into a proposal with business and scientific partners', 'Radboud University'],
          ['Funding', 'The National Growth Fund, and the European Union\'s NextGenerationEU', 'Radboud University'],
          ['Amount conditionally awarded', '51.1 million euros, first round', 'National Growth Fund'],
          ['Period', 'From 2022 to 2035', 'National Growth Fund'],
          ['Goals', '77 co-creation projects, 15 validated intelligent educational technologies, at least 9 AI products shown in practice', 'National Growth Fund'],
          ['Sharing', 'Proceeds shared open source as much as possible from 2026', 'Radboud University']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The lab brings together pedagogy, ethics, data and AI technology, and describes co-operation between education, business and science as its key principle. It works on dozens of projects with schools across the country, and the fund page adds a second aim: making the pedagogical, social and societal consequences of digital innovation in education visible.',
            'For a parent, the point is simple. AI is becoming part of how Dutch pupils are taught and assessed, and the country is investing seriously in doing that responsibly.'
          ],
          right: [
            'What that work does not do, and is not meant to do, is teach pupils to build AI themselves. A pupil who uses an adaptive practice program learns the subject it teaches; a pupil who builds a small model learns how such programs decide, why they can be wrong and what questions to ask of them.',
            'That is the gap our classes fill. Informatica, the school subject closest to it, is optional and offered at a minority of schools; the <a class="ag-inline-link" href="/ai-and-python-academy-netherlands">national academy page</a> gives the figures.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.ru.nl/en/nolai" rel="noopener" target="_blank">Radboud University, NOLAI</a>; <a class="ag-inline-link" href="https://www.nationaalgroeifonds.nl/overzicht-lopende-projecten/thema-onderwijs/nationaal-onderwijslab" rel="noopener" target="_blank">Nationaal Groeifonds, Nationaal Onderwijslab AI</a>. Read 15 September 2026. We have no connection with NOLAI, Radboud University or the fund.' }
      ]
    },
    {
      id: 'build', tint: 'deep', eyebrow: 'What pupils build',
      h2: 'What a school pupil can build, and the test that separates a real model from a lucky one',
      lede: 'Machine learning at school age is not a watered-down version of the adult subject. It is the same core ideas, learned on smaller problems, with one habit above all: never trust a model until it has beaten a simple guess.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Ages 10 to 12: a program that learns', p: 'A pupil gives a program labelled examples, such as short and long words or cats and dogs described by a few numbers, and lets it guess the label of a new one by finding the most similar example. Then the pupil chooses a case that fools it. The lesson, that a model only knows what its examples showed it, lasts for years.' },
          { h3: 'Ages 13 to 15: train, then test on new data', p: 'The pupil splits real data into a part the model learns from and a part it never sees, and measures the model only on the unseen part. They also write down the score of the simplest possible guess. A model that cannot beat that guess has learned nothing useful, however clever it looks.' },
          { h3: 'Ages 16 to 18: count what it misses', p: 'Older pupils look past a single score. They count, for each kind of case, how many the model caught and how many it wrongly flagged, and they write a short account of what the model is for, what data it learned from and where it fails. That account is often the strongest part of a profile project.' }
        ] },
        { kind: 'table', mt: true, caption: 'An invented example: 200 plant photos, 180 healthy and 20 diseased', head: ['Model', 'Diseased plants caught', 'Healthy plants wrongly flagged', 'Share of photos labelled correctly'], rows: [
          ['Always says healthy', '0 of 20', '0 of 180', '180 of 200, 90 percent'],
          ['A trained model', '15 of 20', '12 of 180', '183 of 200, 91.5 percent']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The first row is the trap. A model that never finds a diseased plant still scores 90 percent, because nine photos in ten show healthy plants. Anyone who reported only that single figure would be praising a model that does nothing.',
            'The second row is barely higher overall, 91.5 percent against 90, yet it is far more useful: it finds three quarters of the diseased plants, at the cost of wrongly flagging a few healthy ones. The arithmetic is 15 plus 168 correct healthy labels, which makes 183 of 200.'
          ],
          right: [
            'Seeing that once, on numbers a pupil worked out themselves, is worth more than any definition. From then on the pupil asks of every model: compared with what, and for which cases?',
            'Our pupils also meet the same idea on real Dutch data; the page on <a class="ag-inline-link" href="/build-real-ai-projects-netherlands">building real AI projects in the Netherlands</a> shows the public sources they use.'
          ] },
        { kind: 'source', html: 'The plant example is invented for teaching and describes no real dataset. The age bands are our teaching plan, not a national standard.' }
      ]
    },
    {
      id: 'school', tint: '', eyebrow: 'Beside school',
      h2: 'How machine learning fits beside a Dutch school career',
      lede: 'Pupils learn this alongside their schoolwork, not instead of it. The timing below is what usually works.',
      body: [
        { kind: 'two',
          left: [
            'For a pupil at the end of the basisschool, the first learning program is a natural next step after Scratch or first Python. The <a class="ag-inline-link" href="/coding-classes-for-kids-netherlands">kids page</a> covers that stage.',
            'Between the brugklas and the third year, pupils build the Python and data skills a real model needs. The profielkeuze is a good moment to try a first trained model, because it shows quickly whether data and technology appeal.'
          ],
          right: [
            'In the upper years of havo and vwo, a model with an honest write-up makes a strong profile project or portfolio piece. The <a class="ag-inline-link" href="/coding-classes-for-teens-netherlands">teens page</a> covers the wider teenage route.',
            'For pupils thinking about a university AI degree, the <a class="ag-inline-link" href="/ai-and-python-academy-groningen">Groningen academy page</a> sets out what a first year asks.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The rungs for pupils',
    h2: 'From a program that guesses to a model that is tested fairly',
    lede: 'Each rung prepares the next. A pupil who has never split data cannot test a model honestly, and one who has never written Python cannot see inside the model at all.',
    table: { caption: 'The machine learning route for school pupils', head: ['Rung', 'Usually', 'What the pupil can do'], rows: [
      ['1. Python by hand', 'Ages 10 to 12', 'Write small programs, including one that learns from examples'],
      ['2. Data', 'Ages 12 to 14', 'Clean, plot and split real data into learning and testing parts'],
      ['3. First models', 'Ages 13 to 16', 'Train a model and compare it with the simplest guess'],
      ['4. Deeper models', 'Ages 15 to 18', 'Neural networks, images and text, each tested fairly'],
      ['5. Write-up', 'Throughout', 'A public repository with the model, its data and its limits']
    ] },
    left: { h3: 'Why the simple guess comes first', ps: [
      'Pupils love a high score. Teaching them to write down the score of the dullest possible guess before training anything protects them from the most common mistake in machine learning, at any age.',
      'The complete order of subjects is on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Around toetsweken and exams', ps: [
      'Most pupils take two lessons a week and pause during school test weeks. In the eindexamen year, many keep lessons light or stop until the exams are over.',
      'Pupils at international schools follow the same rungs, placed by ability rather than by grade.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Eight live courses for pupils learning machine learning',
    lede: 'Grouped by stage. Every card leads to the full course with its schedule and fee, and the free lesson settles where a pupil starts.',
    bands: [
      { num: 'I', h3: 'Ages 9 to 12', sub: 'First code and a first learning program', courses: [
        { code: 'ML / YOUNG / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'Typed Python and a small program that learns from examples, for pupils in the last years of primary school.' },
        { code: 'ML / YOUNG / 02', slug: 'ai-literacy-for-kids-course', title: 'AI Literacy for Kids', blurb: 'How AI systems learn and why they get things wrong, the understanding a young pupil needs before building one.' }
      ] },
      { num: 'II', h3: 'Ages 12 to 15', sub: 'Python, data and a first fair test', courses: [
        { code: 'ML / MID / 01', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'The Python foundation every machine learning project depends on, built over two years.' },
        { code: 'ML / MID / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data Science for Teens', blurb: 'Real datasets, cleaning, plotting and the split between learning and testing data.' },
        { code: 'ML / MID / 03', slug: 'orange-data-mining-visual-machine-learning-course-for-teens', title: 'Orange Data Mining for Teens', blurb: 'Training and testing models through visual workflows, before or alongside code.' }
      ] },
      { num: 'III', h3: 'Ages 15 to 18', sub: 'Real models, honestly tested', courses: [
        { code: 'ML / UPPER / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and Machine Learning for Teens', blurb: 'Classical models to neural networks, each compared with a baseline and written up.' },
        { code: 'ML / UPPER / 02', slug: 'teens-ai-tools-mastery-course', title: 'AI Tools for Teens', blurb: 'Using AI tools well in projects and study, with the judgement a model-builder brings.' },
        { code: 'ML / UPPER / 03', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub for Teens', blurb: 'A public home for every model and its write-up, from the first commit onwards.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How the classes run',
    h2: 'After school, at home, with a teacher watching the model train',
    lede: 'Our teachers work from India, which never switches to summer time, while Dutch clocks do. The gap is therefore three and a half hours in summer and four and a half in winter, which puts pupils\' lessons comfortably in the late afternoon or at the weekend. The regular time is chosen with the family during the free lesson.',
    slots: [
      { time: 'After school', l: 'Late afternoon, Dutch time. The usual choice for pupils of every age.' },
      { time: 'Early evening', l: 'By arrangement, for older pupils with sport or a part-time job in the afternoon.' },
      { time: 'Weekend', l: 'Saturday or Sunday, for longer sessions on a project.' }
    ],
    cells: [
      { h3: 'A first lesson with a real model', p: 'Even in the free lesson a pupil makes something that learns. The teacher watches how they reason and chooses the right starting rung.' },
      { h3: 'Groups by level', p: 'Five to ten pupils from several countries who can already do the same things, so nobody is rushed or held back.' },
      { h3: 'One to one for projects', p: 'For a profile project, a competition entry or a pupil who prefers a teacher to themselves.' },
      { h3: 'Parents informed', p: 'We speak with a parent before anything is booked and keep them in the loop, as Dutch rules on consent for under-sixteens expect.' },
      { h3: 'English, with Dutch school words', p: 'Lessons are in English; brugklas, havo, vwo and profielkeuze are used as families use them.' },
      { h3: 'Models kept and explained', p: 'Every model goes into the pupil\'s own GitHub repository with a short note on its data, its test and its limits.' }
    ]
  },

  projectsH2: 'Work our students have published',
  projectsLede: 'Four projects our students built and left online. More, including school-age work, are on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Quoted from Google as parents and students wrote them. We do not edit or pay for reviews.',

  fees: {
    h2: 'Fees for school pupils',
    lede: 'Monthly, in US dollars, the same as for every country outside India. No separate Dutch rate, no joining fee, no annual contract.',
    free: ['A real lesson with a real model', 'Places the pupil at the right rung', 'No card or bank details'],
    group: ['Five to ten pupils at one level', 'The same live teacher every week', 'Models reviewed every week', 'A certificate at the end'],
    one: ['A teacher for one pupil', 'Pace set by the pupil and the project', 'Ideal for profile projects']
  },

  faq: {
    eyebrow: 'Questions from parents and pupils',
    h2: 'What Dutch families ask about machine learning at school age',
    items: [
      { q: 'Is machine learning too advanced for a school pupil?', a: 'Not in the form we teach it. The core ideas, learning from examples, testing on unseen data and comparing with a simple guess, can be learned from about ten. The mathematics deepens as the pupil does.' },
      { q: 'What is NOLAI, and is this connected to it?', a: 'NOLAI is the national education lab for AI at Radboud University, working with schools on AI used in education. We have no connection with it. It studies AI that pupils use; our classes teach pupils to build and test models themselves.' },
      { q: 'Why can a 90 percent accurate model be useless?', a: 'Because the simplest guess may already score that. If nine cases in ten belong to one group, a model that always picks that group is 90 percent accurate and never finds the rest. Our pupils always compare a model with that simple guess.' },
      { q: 'Does my child need informatica at school?', a: 'No. Many Dutch schools do not offer it, and our classes start from the beginning with Python. For a pupil who does take informatica, the classes go further into machine learning.' },
      { q: 'Can this become a profile project?', a: 'Yes. A trained model with a clear write-up of its data, its test and its limits makes a strong profielwerkstuk. We teach the skills; the project and its conclusions are the pupil\'s own.' },
      { q: 'What does a pupil need at home?', a: 'A laptop or desktop and a steady internet connection. No phone and no special software are needed at the start.' },
      { q: 'Are the lessons in English?', a: 'Yes. Python and its libraries are in English anyway, and teachers keep explanations clear for pupils at Dutch schools.' },
      { q: 'What does it cost?', a: 'A group place is USD 100 a month and one-to-one lessons are USD 150 a month, billed in US dollars, with no joining fee and no yearly contract. The first lesson is free.' },
      { q: 'When are lessons held?', a: 'After school or at the weekend, Dutch time. The teacher is three and a half hours ahead of Dutch summer time and four and a half ahead of winter time.' },
      { q: 'What happens after we send the form?', a: 'We call a parent at a Dutch hour to arrange the free lesson. There is nothing to pay unless the family decides to continue afterwards.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for pupils and parents in the Netherlands',
    lede: 'Pages for the stages before and after, and for the projects pupils build.',
    items: [
      { href: '/coding-classes-for-kids-netherlands', label: 'Coding classes for kids', p: 'The stage before, for children aged 6 to 12.' },
      { href: '/coding-classes-for-teens-netherlands', label: 'Coding classes for teens', p: 'The wider teenage route beyond machine learning.' },
      { href: '/build-real-ai-projects-netherlands', label: 'Build real AI projects', p: 'Projects on real Dutch open data.' },
      { href: '/ai-and-python-academy-groningen', label: 'AI and Python Academy, Groningen', p: 'What a university AI first year asks of a pupil.' },
      { href: '/ai-and-python-academy-netherlands', label: 'AI and Python Academy, Netherlands', p: 'The national ladder and the informatica figures.' },
      { href: '/ai-ml-course-for-teens', label: 'AI and ML course for teens', p: 'The global teenage machine learning course page.' }
    ]
  },

  start: {
    h2: 'Book a free machine learning lesson',
    lede: 'Leave a parent\'s number and we will call at a Dutch hour. In the free lesson your child builds something that learns, with a real teacher, and by the end we know where they should start.',
    readFirst: 'Prefer to read first? See the <a class="ag-inline-link" href="/ai-ml-course-for-teens">AI and ML course for teens</a>, <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.',
    note: 'A WhatsApp message from a Dutch phone is free and gets the fastest reply. The number is Indian; we have no office or premises in the Netherlands.',
    formNote: 'No card needed. One call with a parent to arrange the lesson.'
  },

  footer: {
    cols: [
      { h4: 'Netherlands', links: [
        { href: '/ai-and-python-academy-netherlands', label: 'Academy, Netherlands' },
        { href: '/coding-classes-for-teens-netherlands', label: 'Coding for teens' },
        { href: '/coding-classes-for-kids-netherlands', label: 'Coding for kids' },
        { href: '/build-real-ai-projects-netherlands', label: 'Real AI projects' }
      ] },
      { h4: 'Machine learning', links: [
        { href: '/ai-ml-course-for-teens', label: 'AI and ML for teens' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Teaching Dutch pupils on CET and CEST'
  },

  personalityCss: `
.ag-root.ag-mln .ag-hero-grid { gap: clamp(1.25rem, 3.3vw, 2.9rem); }
.ag-root.ag-mln .ag-hero h1 { letter-spacing: -0.017em; }
.ag-root.ag-mln .ag-capsule { border-left-width: 4px; }
.ag-root.ag-mln .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-mln .ag-band-head h3 { letter-spacing: -0.007em; }
.ag-root.ag-mln .ag-table caption { text-align: left; }
.ag-root.ag-mln .ag-spec dt { letter-spacing: 0.12em; }
.ag-root.ag-mln .ag-slots { gap: 1.1rem; }
`,

  mustMention: ['NOLAI', 'Radboud University', 'special needs education', 'NextGenerationEU', '51.1 million euros', '2035', '77 co-creation projects', 'open source as much as possible from 2026', '183 of 200', '91.5 percent']
};
