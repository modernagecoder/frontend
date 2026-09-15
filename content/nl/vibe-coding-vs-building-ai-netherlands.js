'use strict';
// Vibe coding vs building AI, Netherlands (ag- topic door, national).
// Spine: the Dutch government's own route with generative AI. Rijksoverheid
// news, 18 January 2024: the cabinet presents a vision on generative AI "als
// een van de eerste EU-lidstaten", with 6 actielijnen; minister Dijkgraaf:
// more knowledge and more skills; a Rijks AI validatieteam to assess available
// AI applications on, for example, non-discrimination. Kamerbrief of
// 22 April 2025 (Zsolt Szabó, staatssecretaris BZK, Digitalisering en
// Koninkrijksrelaties), read in the PDF itself: in 2023 the cabinet asked the
// Landsadvocaat about the legal room for 'online available' generative AI and
// asked the Autoriteit Persoonsgegevens for advice; both formed the basis of
// the provisional position of December 2023, which organisations found
// unclear on some points and often too restrictive; the handreiking is a
// living document to be updated regularly; under the motion of member Six
// Dijkstra (Kamerstuk 2024-2025, 26 643, nr. 1293) the state secretary will
// look at policy so that AI models in principle run locally on government
// systems. Rijksoverheid news of the same day: more room for civil servants,
// with clear risk analyses and reliable models, European and open-source
// options encouraged. The lesson: using AI well needs people who understand
// it. No legal advice is given.

module.exports = {
  cluster: 'ag',
  slug: 'vibe-coding-vs-building-ai-netherlands',
  code: 'vbn',
  accent: '#72393E',
  accentRationale: 'Vibe door: a dark rosewood from the solver, more than twenty units from every page it links to, the agents, machine learning and Python doors, the academy hub and both Dutch oranges among them, with an unlinked Brabant town as its nearest neighbour',
  pageType: 'market',
  market: { name: 'Netherlands', iso: 'NL', dial: '+31', lang: 'en-NL', locale: 'en_NL', geoRegion: 'NL', brandTag: 'Netherlands', phonePlaceholder: '6 XXXX XXXX', minDigits: 9 },
  routeLabel: 'Vibe coding vs building AI, Netherlands',
  title: 'Vibe Coding vs Building AI in the Netherlands | Live Online',
  description: 'Vibe coding or building AI? What the Dutch government learned about generative AI, and a live route from AI-assisted coding to real models. First lesson free.',
  ogDescription: 'The Dutch government went from a cautious stance on generative AI to more room, with risk analyses and a living guide. The same lesson applies to learners: use the tools, and understand them.',
  twitterDescription: 'Vibe coding gets you started; building AI lets you judge what the tools produce. Live online, first lesson free.',
  pageName: 'Vibe Coding vs Building AI in the Netherlands',
  webPageDescription: 'The difference between vibe coding and building AI, set against the Dutch government\'s own route with generative AI from 2023 to 2025, with live online classes that teach both.',
  courseDescription: 'A live online route that starts with AI-assisted coding and moves to Python, machine learning and generative AI built and evaluated by the learner, for teenagers, students and adults in the Netherlands, taught in English.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'AI and Python Academy, Netherlands', href: '/ai-and-python-academy-netherlands' }],
  crumbLabel: 'Vibe coding vs building AI',
  navLinks: [
    { href: '#state', label: 'The government route' },
    { href: '#difference', label: 'The difference' },
    { href: '#ladder', label: 'The ladder' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Netherlands &middot; Generative AI &middot; Live online',
  h1: 'Vibe coding vs building AI in the Netherlands',
  lede: 'Vibe coding means describing what you want to an AI tool and letting it write the code. It is quick, it is fun, and it gets beginners to a working app in an afternoon. Building AI means something else: understanding how a model learns, testing whether it is right, and knowing when not to trust it. The Dutch government has walked the line between the two in public. In December 2023 it took a cautious provisional position on generative AI; in January 2024 it presented a vision on the technology as one of the first EU member states to do so; in April 2025 it gave civil servants more room, on condition of clear risk analyses and reliable models, and called its guidance a living document. The lesson for a learner is the same one the government drew: the tools are worth using, and someone has to understand them well enough to judge them. This page explains both skills and how our live online classes teach them, in that order.',
  secondaryCta: { href: '#difference', label: 'See the difference' },
  wa: 'Hello Modern Age Coders, I would like a free lesson on vibe coding and building AI, for a learner in the Netherlands.',
  heroNote: 'Live classes since 2020 &middot; 10,000+ students &middot; AI tools used, and understood',
  spec: [
    ['Starts with', 'AI-assisted coding'],
    ['Moves to', 'Python written by hand'],
    ['Then', 'Models trained and tested'],
    ['Aim', 'Judging what AI produces'],
    ['For', 'Kids, teens, students, adults'],
    ['Format', 'Live video with a teacher'],
    ['Groups', 'Five to ten, or one to one'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Vibe coding is building software by describing it to an AI tool; building AI is understanding, training and testing the models themselves. Modern Age Coders teaches both, live online to learners in the Netherlands, and in that order: learners start by making real things with AI assistants, then learn to read and write the code themselves in Python, then train and evaluate models of their own, so that by the end they can judge what an AI tool gives them rather than simply accept it. Classes run in English, in groups of five to ten at one level or one to one. There is no charge for the first lesson; from then on it is USD 100 a month in a group or USD 150 a month one to one.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses, from vibe coding to building AI',
    lede: 'The first puts AI tools to work, the second teaches how models learn, the third opens up the generative models behind the tools. Each card leads to its own syllabus.',
    items: [
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', code: 'VIBE / 01', title: 'Vibe Coding for Teens', note: 'Real projects built with AI assistants, and the Python and web basics to understand what the assistant wrote.' },
      { course: 'ai-ml-masterclass-teens', code: 'VIBE / 02', title: 'AI and Machine Learning for Teens', note: 'Models trained on real data, tested against a simple guess and written up honestly.' },
      { course: 'complete-generative-ai-masterclass-college', code: 'VIBE / 03', title: 'Generative AI Masterclass', note: 'How large language models work, and how to build and evaluate applications on top of them.' }
    ]
  },

  sections: [
    {
      id: 'state', tint: 'tint', eyebrow: 'The government route',
      h2: 'How the Dutch government moved from caution to room, with conditions',
      lede: 'The steps below come from two Rijksoverheid news items and from the letter to parliament of 22 April 2025, signed by Zsolt Szabó, state secretary for digitalisation. They are quoted or closely paraphrased; nothing is added.',
      body: [
        { kind: 'table', caption: 'Generative AI and the Dutch government, 2023 to 2025', head: ['When', 'What happened'], rows: [
          ['2023', 'The cabinet asked the Landsadvocaat, the state\'s lawyer, what room current law left for using generative AI that is available online, and asked the Autoriteit Persoonsgegevens, the data protection authority, for advice'],
          ['December 2023', 'Both advices became the basis of a provisional position on generative AI for the national government'],
          ['18 January 2024', 'The cabinet presented a vision on generative AI as one of the first EU member states to do so, with six action lines; among its measures was a Rijks AI validatieteam to assess available AI applications on, for example, non-discrimination'],
          ['22 April 2025', 'A government-wide position and a practical guide followed; government organisations had said the provisional position was unclear on some points and often too restrictive'],
          ['22 April 2025', 'Civil servants were given more room to use generative AI, with clear risk analyses and reliable models, and with applications developed in Europe and open-source options encouraged'],
          ['Same letter', 'The guide was called a living document, to be updated regularly as developments require']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The route is instructive. A government that started by asking its lawyers what was allowed ended by writing its own guide and promising to keep rewriting it. Neither the ban nor the free-for-all survived; what survived was a demand for judgement: risk analyses, reliable models and people who know what they are doing.',
            'The 2024 vision was explicit about people. Minister Robbert Dijkgraaf said that making full use of the opportunities of generative AI means investing in more knowledge and more skills.'
          ],
          right: [
            'The same letter looks further ahead. Following a motion by the member of parliament Six Dijkstra, Kamerstuk 26 643, nr. 1293, the state secretary would examine how policy could be shaped so that AI models, not only generative ones, in principle run locally on government systems. Running a model locally is not vibe coding; it is building and operating AI.',
            'We quote these documents because they show, in public and in writing, why understanding AI matters as much as using it. This page describes public documents and gives no legal advice.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.rijksoverheid.nl/actueel/nieuws/2024/01/18/kabinet-presenteert-visie-op-generatieve-ai" rel="noopener" target="_blank">Kabinet presenteert visie op generatieve AI (18 January 2024)</a>; <a class="ag-inline-link" href="https://www.rijksoverheid.nl/documenten/kamerstukken/2025/04/22/kamerbrief-overheidsbreed-standpunt-inzet-generatieve-ai" rel="noopener" target="_blank">Kamerbrief, Overheidsbreed standpunt generatieve AI (22 April 2025)</a>; <a class="ag-inline-link" href="https://www.rijksoverheid.nl/actueel/nieuws/2025/04/22/overheid-verruimt-standpunt-inzet-generatieve-ai" rel="noopener" target="_blank">Overheid verruimt standpunt inzet generatieve AI (22 April 2025)</a>, all Rijksoverheid.nl, in Dutch. Read 15 September 2026.' }
      ]
    },
    {
      id: 'difference', tint: 'deep', eyebrow: 'The difference',
      h2: 'Vibe coding and building AI are two different skills',
      lede: 'Both are worth learning. They answer different questions, and they fail in different ways.',
      body: [
        { kind: 'table', caption: 'Vibe coding and building AI, side by side', head: ['', 'Vibe coding', 'Building AI'], rows: [
          ['What you do', 'Describe the program you want and accept or adjust what the tool writes', 'Collect data, train a model, test it and decide whether to use it'],
          ['What you need to know', 'What you want, and enough code to check the result', 'Programming, statistics and how models learn and fail'],
          ['How it goes wrong', 'Code that runs but hides errors, leaks secrets or cannot be maintained', 'A model that looks accurate but is biased, overfitted or tested on the wrong data'],
          ['Who notices', 'Someone who can read the code', 'Someone who can evaluate the model'],
          ['Where it leads', 'Faster prototypes and a first taste of building', 'The ability to build, run and judge AI systems']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Vibe coding is a real start', p: 'For a beginner, seeing an idea become a working app in an hour is powerful. We use AI assistants early, because motivation matters and because these tools are now part of how software is written.' },
          { h3: 'It is not the finish', p: 'An assistant writes plausible code, not guaranteed code. A learner who cannot read what it wrote cannot tell a clever solution from a subtle bug, and cannot fix the program when the assistant gets stuck.' },
          { h3: 'Building AI is the depth', p: 'Training a small model by hand, and watching it fail on data it has not seen, teaches more about AI than a hundred prompts. It is also what lets a learner judge the big models everyone uses.' }
        ] },
        { kind: 'source', html: 'This comparison is our teaching view. It describes skills, not any particular AI product.' }
      ]
    },
    {
      id: 'judge', tint: '', eyebrow: 'Judgement',
      h2: 'Why judgement is the skill that lasts',
      lede: 'Tools change every few months. The ability to decide whether their output is right does not go out of date.',
      body: [
        { kind: 'two',
          left: [
            'Think of the conditions the government set in 2025: a clear risk analysis before use, and models that can be relied on. A learner meets the same questions on a small scale. Does this code do what I asked, and only that? What happens with unexpected input? Where does my data go when I paste it into a tool? Which of these answers can I check?',
            'Those questions can only be answered by someone who understands code and models. That is why our route moves from using AI to understanding it, and why the final rung is judging, not prompting.'
          ],
          right: [
            'For younger learners the start is gentle; <a class="ag-inline-link" href="/what-is-vibe-coding">what is vibe coding</a> and the <a class="ag-inline-link" href="/parents-guide-to-vibe-coding">parents\' guide to vibe coding</a> explain it in plain terms. For school pupils who want to go further, <a class="ag-inline-link" href="/machine-learning-for-school-students-netherlands">machine learning for school students</a> covers model building.',
            'Students ready to build systems that plan and act can continue with <a class="ag-inline-link" href="/ai-agents-course-for-students-netherlands">the AI agents course for students</a>, and the language underneath everything is on <a class="ag-inline-link" href="/python-classes-netherlands">Python classes in the Netherlands</a>.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The ladder',
    h2: 'From describing a program to judging an AI system',
    lede: 'Five rungs, each resting on the one below. The free lesson shows where a learner already stands.',
    table: { caption: 'From vibe coding to building AI', head: ['Rung', 'What the learner can do'], rows: [
      ['1. Describe', 'Build a small working app with an AI assistant from a clear description'],
      ['2. Read', 'Explain every line the assistant wrote, and find the bug in code that almost works'],
      ['3. Write', 'Write the same kind of program by hand in Python, without the assistant'],
      ['4. Build', 'Train a model on real data and show whether it beats a simple guess'],
      ['5. Judge', 'Assess an AI tool or model: what it is for, where it fails and what data it touches']
    ] },
    left: { h3: 'Why reading comes before writing', ps: [
      'Learners who have vibe coded already have programs in front of them. Reading those programs line by line is the fastest route into real programming, because every line answers a question the learner actually had.',
      'Where these rungs sit among all our subjects is shown on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Pace for each age', ps: [
      'Children spend longer on the first two rungs, with blocks before typed code. Teenagers usually climb to the fourth rung within a school year or two, and adults at a pace set by work.',
      'The fifth rung is never finished; each new tool is a new thing to judge.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine live courses, from vibe coding to building AI',
    lede: 'Three bands: vibe coding done properly, the foundations beneath it, and building AI. Each card leads to a syllabus and timetable; a trial lesson decides the first one.',
    bands: [
      { num: 'I', h3: 'Vibe coding, done properly', sub: 'AI assistants, with understanding', courses: [
        { code: 'VIBE / TOOL / 01', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Vibe Coding for Kids', blurb: 'Games and stories with blocks and AI help, for ages eight to twelve.' },
        { code: 'VIBE / TOOL / 02', slug: 'vibe-coding-for-teens-python-web-ai-projects-course', title: 'Vibe Coding for Teens', blurb: 'Web and Python projects built with AI assistants, and read line by line.' },
        { code: 'VIBE / TOOL / 03', slug: 'vibe-coding-for-college-fullstack-ai-dsa-career-course', title: 'Vibe Coding for College Students', blurb: 'Full stack projects with AI tools, backed by algorithms and data structures.' }
      ] },
      { num: 'II', h3: 'The foundations underneath', sub: 'What makes the tools make sense', courses: [
        { code: 'VIBE / BASE / 01', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'The language most AI tools write, learned so it can be read and checked.' },
        { code: 'VIBE / BASE / 02', slug: 'teens-ai-tools-mastery-course', title: 'AI Tools for Teens', blurb: 'The main AI tools used well and safely, for learners from thirteen.' },
        { code: 'VIBE / BASE / 03', slug: 'ai-tools-mastery-complete-college', title: 'AI Tools Mastery', blurb: 'AI tools for study and work, with their limits made clear.' }
      ] },
      { num: 'III', h3: 'Building AI', sub: 'Models made, tested and judged', courses: [
        { code: 'VIBE / BUILD / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and Machine Learning for Teens', blurb: 'From statistics to neural networks, each model tested on unseen data.' },
        { code: 'VIBE / BUILD / 02', slug: 'ai-ml-masterclass-complete-college', title: 'AI and Machine Learning Masterclass', blurb: 'The adult route through machine learning, deep learning and evaluation.' },
        { code: 'VIBE / BUILD / 03', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI Masterclass', blurb: 'Language models understood from the inside, and applications built on them.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How the classes run',
    h2: 'Live lessons, AI tools on the screen, a teacher beside them',
    lede: 'Teachers work from India, which does not use summer time, so they sit three and a half hours ahead of the Netherlands from spring to autumn and four and a half ahead in winter. Children and teenagers usually take lessons after school, adults in the evening or at the weekend, at a regular time fixed in the trial lesson.',
    slots: [
      { time: 'After school', l: 'Late afternoon, Dutch time, for children and teenagers.' },
      { time: 'Evening', l: 'By arrangement, for students and working adults.' },
      { time: 'Weekend', l: 'Saturday or Sunday, for longer building sessions.' }
    ],
    cells: [
      { h3: 'A free first lesson', p: 'The learner builds something with an AI assistant and then explains it to the teacher, which shows quickly which rung they are on.' },
      { h3: 'Small groups by level', p: 'Five to ten learners at the same stage, from several countries, comparing what their tools produced.' },
      { h3: 'One to one when it helps', p: 'For a learner far ahead of their age, a specific project, or an adult with a deadline.' },
      { h3: 'Tools used openly', p: 'Assistants are part of the lesson, not a secret. The teacher shows when to use them and when to switch them off.' },
      { h3: 'Data handled carefully', p: 'Learners are taught what not to paste into an online tool, from passwords to other people\'s personal data.' },
      { h3: 'Work kept in public', p: 'Projects go into the learner\'s own GitHub repository, with notes on what the AI wrote and what they changed.' }
    ]
  },

  projectsH2: 'Projects our students built and understood',
  projectsLede: 'Four live projects by our students. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Taken from Google without edits. We do not write or pay for reviews.',

  fees: {
    h2: 'Fees',
    lede: 'One monthly rate in US dollars for every country outside India, whether a learner is on the first rung or the fifth. There is no joining fee and nothing to sign for a year.',
    free: ['A real lesson with an AI assistant', 'An honest view of the starting rung', 'No card needed'],
    group: ['Five to ten learners at one level', 'The same live teacher each week', 'Work read and discussed every week', 'A certificate at the end'],
    one: ['A teacher for one learner', 'Paced to a project or goal', 'Good for ambitious learners']
  },

  faq: {
    eyebrow: 'Questions',
    h2: 'What Dutch families and learners ask about vibe coding',
    items: [
      { q: 'What is vibe coding?', a: 'Building software by describing what you want to an AI tool and letting it write the code. It is a quick way to start, and it works best when the person using it can read the result.' },
      { q: 'Is vibe coding bad?', a: 'No. It is a useful way in, and professionals use AI assistants every day. The risk is stopping there, with programs nobody involved can check or repair.' },
      { q: 'What is the difference with building AI?', a: 'Vibe coding uses AI to write ordinary programs. Building AI means making and testing the models themselves: collecting data, training, measuring errors and deciding whether to trust the result.' },
      { q: 'Why mention the Dutch government?', a: 'Because its own route shows the point. It moved from a provisional position that organisations found too restrictive to more room for civil servants, on condition of risk analyses and reliable models, and called its guide a living document.' },
      { q: 'Is my child too young for this?', a: 'Children from about eight can start with blocks and AI help. Typed code and model building come later, when they are ready.' },
      { q: 'Will my child just copy from AI?', a: 'Not in our lessons. Every program an assistant writes is read and explained, and learners also write programs by hand without it.' },
      { q: 'Which AI tools do you use?', a: 'Common coding assistants and chat tools, chosen by age and course. Some tools set their own age limits, and we follow them.' },
      { q: 'What does it cost?', a: 'Nothing for the first lesson. After that, USD 100 per month buys a place in a group of five to ten and USD 150 per month buys lessons with a teacher to yourself, both charged in US dollars, with no joining fee and no annual contract.' },
      { q: 'When are lessons held?', a: 'After school, in the evening or at the weekend, in Dutch time. Teachers are three and a half hours ahead in summer and four and a half in winter.' },
      { q: 'What happens after we send the form?', a: 'Someone from our team calls back when it suits you in the Netherlands and books the trial lesson. You only pay if the learner carries on.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More on vibe coding and building AI',
    lede: 'Explanations for newcomers, and pages for learners ready to go further.',
    items: [
      { href: '/what-is-vibe-coding', label: 'What is vibe coding', p: 'A plain explanation for newcomers.' },
      { href: '/parents-guide-to-vibe-coding', label: 'Parents\' guide to vibe coding', p: 'What families should know before a child starts.' },
      { href: '/vibe-coding-classes', label: 'Vibe coding classes', p: 'Our vibe coding courses for every age.' },
      { href: '/machine-learning-for-school-students-netherlands', label: 'Machine learning for school students', p: 'Building models while still at school.' },
      { href: '/ai-agents-course-for-students-netherlands', label: 'AI agents course for students', p: 'Systems that plan, use tools and act.' },
      { href: '/ai-and-python-academy-netherlands', label: 'AI and Python Academy, Netherlands', p: 'The national ladder this page belongs to.' }
    ]
  },

  start: {
    h2: 'Book a free lesson, with an AI assistant and a teacher',
    lede: 'Leave a number and a member of our team calls back at a suitable Dutch hour. In the trial lesson the learner builds something with an AI assistant and then explains it, and by the end the teacher can say which rung to start on.',
    readFirst: 'Curious first? Read <a class="ag-inline-link" href="/what-is-vibe-coding">what vibe coding is</a>, how <a class="ag-inline-link" href="/how-we-teach">we teach</a>, or browse <a class="ag-inline-link" href="/courses">every course</a>.',
    note: 'On a Dutch phone, WhatsApp is free and usually the quickest option. The number belongs to our team in India; there is no office or premises in the Netherlands.',
    formNote: 'No card, no commitment. One call to book the lesson.'
  },

  footer: {
    cols: [
      { h4: 'Netherlands', links: [
        { href: '/ai-and-python-academy-netherlands', label: 'Academy, Netherlands' },
        { href: '/machine-learning-for-school-students-netherlands', label: 'Machine learning for pupils' },
        { href: '/ai-agents-course-for-students-netherlands', label: 'AI agents for students' },
        { href: '/python-classes-netherlands', label: 'Python classes' }
      ] },
      { h4: 'Vibe coding', links: [
        { href: '/what-is-vibe-coding', label: 'What is vibe coding' },
        { href: '/vibe-coding-classes', label: 'Vibe coding classes' },
        { href: '/parents-guide-to-vibe-coding', label: 'Parents\' guide' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Teaching learners in the Netherlands on CET and CEST'
  },

  personalityCss: `
.ag-root.ag-vbn .ag-hero-grid { gap: clamp(1.15rem, 3vw, 2.75rem); }
.ag-root.ag-vbn .ag-hero h1 { letter-spacing: -0.019em; }
.ag-root.ag-vbn .ag-capsule { border-left-width: 4px; }
.ag-root.ag-vbn .ag-section-head h2 { max-width: 37ch; }
.ag-root.ag-vbn .ag-band-head h3 { letter-spacing: -0.005em; }
.ag-root.ag-vbn .ag-table caption { text-align: left; }
.ag-root.ag-vbn .ag-spec dt { letter-spacing: 0.11em; }
.ag-root.ag-vbn .ag-slots { gap: 1.15rem; }
`,

  mustMention: ['18 January 2024', 'one of the first EU member states', 'six action lines', 'Rijks AI validatieteam', '22 April 2025', 'Landsadvocaat', 'Autoriteit Persoonsgegevens', 'too restrictive', 'living document', '26 643, nr. 1293', 'Six Dijkstra', 'Zsolt Szabó']
};
