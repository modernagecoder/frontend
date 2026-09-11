'use strict';
// AI and Python Academy, Eindhoven (ag- spoke of the Dutch academy hub).
// Spine: Eindhoven builds AI that has to move. TU/e's EAISI studies data and
// algorithms in machines; its student teams build robots and drones; Tech
// United's soccer robots (eight Middle Size League world titles) meet three
// problems a chatbot never does, quoted from the team's 2025 description:
// training data that is manufactured, calibration that drifts during a match,
// and a simulator that is not the pitch (a goalkeeper policy covering 23
// percent of the goal). The cg Eindhoven pages own Brainport, ASML, the High
// Tech Campus and the city figures; the hub owns the AI factory and the SLO
// figures. Roermond owns precision versus recall, so the team's own sentence
// on it is quoted as a detail only.

module.exports = {
  cluster: 'ag',
  slug: 'ai-and-python-academy-eindhoven',
  code: 'aeh',
  accent: '#076B29',
  accentRationale: 'Eindhoven academy: a deep green from the solver, forty units from every page it links to, the Eindhoven, Helmond and Noord-Brabant pages and all three academy pages among them, with an unlinked town as its nearest neighbour',
  pageType: 'market',
  market: { name: 'Netherlands', iso: 'NL', dial: '+31', lang: 'en-NL', locale: 'en_NL', geoRegion: 'NL', brandTag: 'Netherlands', phonePlaceholder: '6 XXXX XXXX', minDigits: 9 },
  routeLabel: 'AI and Python Academy, Eindhoven',
  title: 'AI and Python Academy, Eindhoven | Build Real AI',
  description: 'Eindhoven builds AI that has to move: soccer robots, drones and cars. Learn the Python, data and models behind it, live online for ages 6 to 67. First lesson free.',
  ogDescription: 'Eight-time robot soccer world champions, a university AI institute built around machines, and student teams flying autonomous drones. The ladder to that kind of AI, live online from Eindhoven.',
  twitterDescription: 'Python, vision models and AI that works in the real world, not only on a screen. Live online for Eindhoven, ages 6 to 67.',
  pageName: 'AI and Python Academy for Students in Eindhoven',
  webPageDescription: 'Live online Python, data, machine learning and AI agent classes for learners in Eindhoven aged 6 to 67, with a focus on AI that has to work in physical systems.',
  courseDescription: 'A live online programme for learners in Eindhoven aged 6 to 67: Python by hand, data, models with measured errors and agents, taught with the problems of AI in machines in view, from manufactured training data to the gap between a simulator and the real world.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'AI and Python Academy, Netherlands', href: '/ai-and-python-academy-netherlands' }],
  crumbLabel: 'Eindhoven',
  navLinks: [
    { href: '#machines', label: 'AI in machines' },
    { href: '#turtles', label: 'Three problems' },
    { href: '#ladder', label: 'The ladder' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Eindhoven &middot; Live online &middot; Ages 6 to 67',
  h1: 'AI and Python classes in Eindhoven, for AI that has to move',
  lede: 'Most AI that people meet lives on a screen: a chatbot, a recommendation, a filter. Eindhoven builds the other kind. Its university\'s AI institute studies data and algorithms inside machines, robots, autonomous cars and medical equipment, and its student teams build autonomous drones, race cars and the soccer robots that have won eight world titles in RoboCup\'s Middle Size League. AI in a machine meets problems a chatbot never does. Its training images may have to be manufactured. Its sensors drift after a collision in the middle of a match. And the simulator it learned in is never quite the pitch it plays on. This page teaches the Python, data and models underneath that kind of AI, with those problems in view from the first rung, live online for learners in Eindhoven.',
  secondaryCta: { href: '#turtles', label: 'See the three problems' },
  wa: 'Hello Modern Age Coders, I want a free class for a learner in Eindhoven, on the AI and Python track.',
  heroNote: 'Teaching live since 2020 &middot; 10,000+ students so far &middot; nothing pre-recorded',
  spec: [
    ['Learners', 'Eindhoven, ages 6 to 67'],
    ['Focus', 'Python, vision, models, agents'],
    ['Angle', 'AI that works outside the screen'],
    ['Format', 'Live video, one teacher, no recordings'],
    ['Group', '5 to 10 at one level, or one to one'],
    ['Times', 'Dutch afternoons, evenings and weekends'],
    ['Language', 'English'],
    ['First class', 'Free, no card']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders runs a live online AI and Python track for learners in Eindhoven aged six to sixty-seven: Python typed by hand, then data, then models with a measured error, then agents. Because Eindhoven\'s AI is so often AI in machines, the track keeps three real-world problems in view throughout: training data that has to be made, systems that drift and must recalibrate, and the gap between a simulation and reality. Teaching is in English, in groups of five to ten or one to one. The first lesson is free; after that a group place is USD 100 a month and one-to-one tuition USD 150.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for an Eindhoven learner heading towards AI in machines',
    lede: 'One for a child who wants to make things move on screen, one for a teenager ready to train an image model, one for the student or engineer who needs deep learning done properly. Each card opens its own syllabus and timetable.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'EHV / 01', title: 'Python and AI for Kids', note: 'Python\'s turtle module is the gentlest robot there is: a child types commands, a turtle moves, and a mistake shows up at once as a wrong line on the screen.' },
      { course: 'ai-ml-masterclass-teens', code: 'EHV / 02', title: 'AI and Machine Learning for Teens', note: 'From Python to neural networks and image models, with a teenager testing what they trained on photos taken in different light, the same test a robot faces.' },
      { course: 'ai-ml-masterclass-complete-college', code: 'EHV / 03', title: 'AI and Machine Learning Masterclass', note: 'Deep learning, careful evaluation and deployment for students and engineers whose models will run on hardware, not only in a notebook.' }
    ]
  },

  sections: [
    {
      id: 'machines', tint: 'tint', eyebrow: 'AI in machines',
      h2: 'Eindhoven builds AI that has to move',
      lede: 'The university\'s own descriptions make the local emphasis plain. Here AI is mostly about systems that sense, decide and act in the physical world.',
      body: [
        { kind: 'two',
          left: [
            'The <strong>Eindhoven Artificial Intelligence Systems Institute</strong>, <strong>EAISI</strong>, is the central hub for AI research at Eindhoven University of Technology. By its own description it focuses on the use of data and algorithms in machines, such as robots, autonomous cars and medical equipment, and on the interaction between people and systems, including trustworthy and transparent methods. It counts <strong>300 academic staff and 600 PhD candidates</strong>, organises its work in three domains, data and algorithms, engineering systems, and humans and ethics, and applies it to health, mobility and industry.',
            'Its teaching counterpart is the master in <strong>Artificial Intelligence and Engineering Systems</strong>, a two-year, 120 EC programme in English run jointly by seven departments and more than 40 research groups, with tracks from high-tech systems and robotics to mobility, healthcare and smart manufacturing.'
          ],
          right: [
            'Then there are the student teams, which TU/e lists on its own site: 21 of them at the time of reading. <strong>Serpentine</strong> works on artificial intelligence; Aero Team Eindhoven develops an autonomous drone network for zero-emission air delivery; Team Daedalus a solar-powered autonomous drone for long surveillance flights; InMotion race cars; Solar Team Eindhoven the sustainable mobility of the future.',
            'And <strong>Tech United</strong>, which represents TU/e in RoboCup. Its soccer robots have become world champions eight times in the <strong>Middle Size League</strong>. In July 2024 RoboCup came to Eindhoven itself: three hundred teams from forty countries across five leagues, including RoboCupJunior for school pupils, and Tech United won the final 6-1 against <strong>BigHeroX</strong>.'
          ] },
        { kind: 'table', mt: true, caption: 'Where AI meets hardware at TU/e, from the university\'s and the team\'s own pages', head: ['What', 'Published detail', 'The kind of AI it involves'], rows: [
          ['EAISI', 'Central AI hub; 300 academic staff, 600 PhD candidates', 'Data and algorithms in robots, cars and medical equipment'],
          ['AI and Engineering Systems master', 'Two years, 120 EC, seven departments, 40+ research groups', 'AI methods combined with engineering systems'],
          ['Tech United', 'Middle Size League since 2006; 14 world finals, 8 titles', 'Vision, a world model, strategy and motion, in real time'],
          ['Serpentine', 'Student team working on artificial intelligence', 'AI projects and competitions'],
          ['Aero Team Eindhoven', 'Autonomous drone network for zero-emission delivery', 'Navigation and control in the air'],
          ['Team Daedalus', 'Solar-powered autonomous drone for long flights', 'Autonomy with a tight energy budget']
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.tue.nl/en/research/institutes/eindhoven-artificial-intelligence-systems-institute" rel="noopener" target="_blank">TU/e, EAISI</a>; <a class="ag-inline-link" href="https://www.tue.nl/en/education/graduate-school/master-artificial-intelligence-and-engineering-systems" rel="noopener" target="_blank">TU/e, Master Artificial Intelligence and Engineering Systems</a>; <a class="ag-inline-link" href="https://www.tue.nl/en/our-university/student-teams/student-teams/explore-tue-student-teams" rel="noopener" target="_blank">TU/e, Explore TU/e Student Teams</a>; <a class="ag-inline-link" href="https://www.tue.nl/en/news-and-events/news-overview/21-07-2024-tech-united-becomes-robot-soccer-world-champion-in-eindhoven" rel="noopener" target="_blank">TU/e news, 21 July 2024</a>. Read 11 September 2026. We have no connection with TU/e, EAISI or any student team.' }
      ]
    },
    {
      id: 'turtles', tint: 'deep', eyebrow: 'Three problems',
      h2: 'What a soccer robot has to solve that a chatbot never meets',
      lede: 'Tech United\'s robots are called TURTLEs, short for Tech United Robocup Team: Limited Edition, now in their fifth generation. The team\'s 2025 description, written for RoboCup, is an unusually honest account of AI leaving the screen.',
      body: [
        { kind: 'three', cells: [
          { h3: 'The data has to be made', p: 'A vision model learns from thousands of labelled images, and labelling them by hand is, in the team\'s words, a long and gruelling process prone to error. So they manufacture the images: a few smartphone photos of a ball or robot become a photorealistic 3D model within an hour, placed in <strong>Unreal Engine</strong> with randomised lighting, angles and lens settings. Each labelled synthetic image takes about one second. A <strong>YOLOv8</strong> detector trained on about 2,500 of them reached a precision of 0.953 on real match footage. The limit is also stated: the synthetic images contain no motion blur, and a real match is full of it.' },
          { h3: 'The world drifts', p: 'Ball detection depends on the lighting, and collisions, which still happen often in a match, knock the shooting mechanism slightly out of line with the camera. So the robots now recalibrate themselves: when a robot passes, it tracks where the ball actually went, compares that with where it meant to send it, and corrects its shooting angle. When it decides one of its values is no longer right, it asks to be substituted so it can be fine-tuned at the side of the pitch. A system that knows when it is wrong is worth more than one that is right most of the time.' },
          { h3: 'The simulator is not the pitch', p: 'The team is building a four-legged goalkeeper from an MIT <strong>Mini Cheetah</strong>, trained with hierarchical reinforcement learning in simulation, with masses, frictions and forces randomised so that the policy would transfer to the real robot. It did transfer, but a delay in fetching camera images and the remaining gap between simulation and reality meant it covered <strong>23 percent</strong> of the goal area with a side-step skill. The next step is retraining on the real hardware. Every model trained in a simulator meets that gap sooner or later.' }
        ] },
        { kind: 'table', mt: true, caption: 'The four software modules of a TURTLE, and what each teaches a learner', head: ['Module', 'What it does on the robot', 'What a learner practises'], rows: [
          ['Vision', 'Finds the ball, the robots and the field in camera images', 'Image data, detection models, testing in bad light'],
          ['Worldmodel', 'Combines what each robot sees into one picture of the match', 'Keeping state, merging noisy measurements'],
          ['Strategy', 'Decides what the team does next', 'Rules, planning and agents that choose actions'],
          ['Motion', 'Turns decisions into movement', 'Control, timing and the cost of being late']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The modules exchange information through a real-time database, and the order matters: a decision made on an old picture of the match is a wrong decision, however clever the strategy. That is the deepest difference between AI in a machine and AI on a screen. A chatbot that takes an extra second is slow; a goalkeeper that sees the ball a moment late has already let it in.'
          ],
          right: [
            'The team also says which mistake it fears more. In robot soccer, it writes, precision matters more than recall, because a false positive, such as seeing a background object as the ball, leads straight to a wrong decision. Choosing which error to accept is an engineering decision, and it depends on what the machine does next.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://msl.robocup.org/wp-content/uploads/2025/03/TDP_TechUnited_2025.pdf" rel="noopener" target="_blank">Tech United Eindhoven Team Description 2025</a> (robot platform, software modules, synthetic data generation, automatic calibration, Mini Cheetah goalkeeper), read 11 September 2026. The lessons drawn for learners are ours, not the team\'s.' }
      ]
    },
    {
      id: 'build', tint: '', eyebrow: 'At a learner\'s size',
      h2: 'The same three problems, at a size a learner can build',
      lede: 'Nobody needs a soccer robot to learn these lessons. Each has a version that fits a laptop, and meeting it early changes how a learner thinks about every model afterwards.',
      body: [
        { kind: 'two',
          left: [
            'A child steering Python\'s turtle across the screen is already solving the motion problem: turn too far and the line goes wrong, and the error is visible at once. Add a simple sensor in code, stop at the edge, and the program starts to react instead of just following orders. That is the first step from a script to a machine.',
            'A teenager can meet all three problems in one project. Train an image model to recognise an object, then photograph the object in a darker room and watch the accuracy fall; that is drift. Generate extra training images by rotating and recolouring the originals; that is manufactured data. Build a small simulation, then compare it with the real measurements; that is the gap.'
          ],
          right: [
            'Adults in Eindhoven often meet the same problems at work under other names: a model that was accurate at launch and slipped as conditions changed, a dataset that had to be built because none existed, a test environment that behaved better than the factory floor. The upper rungs give those problems their proper names and methods.',
            'For the city\'s schools, neighbourhoods and figures, see <a class="ag-inline-link" href="/coding-classes-in-eindhoven">coding classes in Eindhoven</a>; for the towns around it, <a class="ag-inline-link" href="/coding-classes-in-helmond">Helmond</a> and <a class="ag-inline-link" href="/coding-classes-in-noord-brabant">Noord-Brabant</a>. The <a class="ag-inline-link" href="/ai-and-python-academy-netherlands">national academy page</a> covers the country as a whole.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The five rungs',
    h2: 'From a turtle on the screen to a model that survives the real world',
    lede: 'The rungs come in a fixed order because each supplies what the next needs. A learner who has never cleaned data cannot judge a vision model, and one who has never measured an error cannot tell whether a simulation was good enough.',
    table: { caption: 'The five rungs for an Eindhoven learner, with the machine-world problem met at each', head: ['Rung', 'Usually', 'What the learner builds'], rows: [
      ['1. Python by hand', 'Groep 6 to 8, or any adult beginner', 'Programs from an empty file, starting with a turtle that moves and turns'],
      ['2. Data', 'Brugklas to the third year', 'Real measurements, cleaned and plotted, with noise and gaps noticed'],
      ['3. Models', 'Havo 4 to vwo 6, students, engineers', 'Image and prediction models, tested in conditions they were not trained on'],
      ['4. Agents', 'Upper school and beyond', 'Programs that sense, decide and act in a loop, and know when to stop'],
      ['5. Publishing', 'At every stage', 'A public repository with results, limits and failures written down']
    ] },
    left: { h3: 'Why the real world arrives early', ps: [
      'Meeting noisy data and drifting conditions on rung 2 saves a great deal of disappointment on rung 3. A learner who expects the world to differ from the training set tests for it; one who does not is surprised by every deployment.',
      'The wider order we teach in, subject by subject, is on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Where it fits the Eindhoven school year', ps: [
      'Rung 1 fits the last years of the basisschool, kept light around the doorstroomtoets. The profielkeuze year is the moment to try rung 2, especially for a pupil weighing the Nature and Technology profile and a technical degree.',
      'Engineers and students usually start at rung 3 and take it one to one, around project deadlines.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Eleven live courses for Eindhoven learners, chosen by ability',
    lede: 'Grouped by stage of life. Every card opens the full course with schedule and fee, and the free lesson decides the starting point.',
    bands: [
      { num: 'I', h3: 'Children, groep 3 to 8', sub: 'Code that makes things move, and a clear idea of what AI is', courses: [
        { code: 'EHV / KIDS / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'Typed Python for ages nine to twelve: turtle drawings, small games and a first program that learns from examples.' },
        { code: 'EHV / KIDS / 02', slug: 'scratch-programming-complete-course', title: 'Scratch Coding for Kids', blurb: 'Games built from blocks for the youngest learners, with sprites that sense the edge of the stage and react to it.' },
        { code: 'EHV / KIDS / 03', slug: 'ai-literacy-for-kids-course', title: 'AI Literacy for Kids', blurb: 'How AI systems work, why they get things wrong, and how a child can tell a confident answer from a correct one.' }
      ] },
      { num: 'II', h3: 'Teenagers, havo and vwo', sub: 'From Python to vision models, tested against the real world', courses: [
        { code: 'EHV / TEEN / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and Machine Learning for Teens', blurb: 'Statistics, classical models, neural networks and image recognition, each project tested outside the conditions it was trained in.' },
        { code: 'EHV / TEEN / 02', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'The two-year foundation in Python, for a teenager who wants to build machines that think one day and needs solid code first.' },
        { code: 'EHV / TEEN / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data Science for Teens', blurb: 'Measurements, noise and missing values handled properly, the unglamorous work every sensor-driven system depends on.' },
        { code: 'EHV / TEEN / 04', slug: 'codex-and-claude-code-ai-coding-agents-course-for-teens', title: 'Coding Agents: Codex and Claude Code', blurb: 'Working with AI coding agents on real code and checking every change. Students hold their own accounts, within each tool\'s age limits.' }
      ] },
      { num: 'III', h3: 'Students, engineers and adults', sub: 'Deep learning, mathematics and systems that hold up outside the lab', courses: [
        { code: 'EHV / PRO / 01', slug: 'ai-ml-masterclass-complete-college', title: 'AI and Machine Learning Masterclass', blurb: 'The complete machine learning route, from classical methods to deep networks, with evaluation and deployment treated as seriously as training.' },
        { code: 'EHV / PRO / 02', slug: 'data-analytics-mathematics-masterclass', title: 'Maths for Data Science', blurb: 'Statistics, linear algebra and the calculus of learning, written as code, for engineers whose maths is rusty or was never applied.' },
        { code: 'EHV / PRO / 03', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python Masterclass', blurb: 'Python from the basics to advanced use at adult pace, for engineers moving from other languages or from spreadsheets.' },
        { code: 'EHV / PRO / 04', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI: LLMs, RAG and Agents', blurb: 'Language models, grounding and agents, with the same attention to limits and failure that physical systems demand.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How the classes run',
    h2: 'Eindhoven hours, a teacher in India',
    lede: 'The Netherlands switches between CET and CEST and India does not, so the teacher is three and a half hours ahead in summer and four and a half in winter. Late afternoons and weekends are easy, weekday evenings are arranged case by case, and the regular time is agreed during the free lesson.',
    slots: [
      { time: 'Late afternoon', l: 'Eindhoven time, after school. Suits children and younger teenagers; evening in India.' },
      { time: 'Evening', l: 'Eindhoven time, by arrangement. For older pupils, students and engineers after the working day.' },
      { time: 'Weekend', l: 'Saturday or Sunday, Eindhoven time. The easiest slot for adults and for families with busy weeks.' }
    ],
    cells: [
      { h3: 'A free lesson with real work', p: 'The learner tackles an actual problem while the teacher watches. That shows the right starting rung better than any placement test.' },
      { h3: 'Five to ten in a group', p: 'Learners from many countries grouped by ability, so a strong Eindhoven pupil is challenged and a newcomer is not rushed.' },
      { h3: 'One to one for engineers', p: 'For irregular project hours, a specific technical goal, or anyone who prefers the pace set around them.' },
      { h3: 'Code visible as it is written', p: 'Screens are shared both ways, so the teacher catches a misunderstanding while it is still small.' },
      { h3: 'English, as in the lab', p: 'Lessons, documentation and error messages are in English. Dutch school terms are used as families use them.' },
      { h3: 'Work kept in a repository', p: 'Every lesson ends with committed code in the learner\'s own GitHub repository, with results and limits written beside it.' }
    ]
  },

  projectsH2: 'Student projects still running',
  projectsLede: 'Four projects our students built and left online. Open them, push them, find where they fail; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'Reproduced from Google exactly as posted. We neither write nor edit nor pay for them.',

  fees: {
    h2: 'Fees',
    lede: 'Monthly, in US dollars, at the same two rates as every country outside India. Nothing extra for Eindhoven or the Netherlands, no sign-up fee, no annual contract. Copilot Studio courses are private tuition only and use the one-to-one rate.',
    free: ['A real lesson, not a sales call', 'Finds the right rung', 'No payment details needed'],
    group: ['Five to ten learners at one level', 'One live teacher throughout', 'Projects reviewed every week', 'Certificate at completion'],
    one: ['A teacher for one learner', 'Pace and focus set by the goal', 'The format for Copilot Studio courses']
  },

  faq: {
    eyebrow: 'Questions from Eindhoven',
    h2: 'What Eindhoven families, students and engineers ask first',
    items: [
      { q: 'Do you teach robotics with physical robots?', a: 'No. Lessons are live online, and learners work in Python on their own computers. What we teach is the software side that physical systems depend on: data, vision models, decision loops and testing against conditions a model was not trained on. Many of those skills are practised in simulation first, as they are in university labs.' },
      { q: 'What is RoboCupJunior?', a: 'One of the five leagues at RoboCup, the one for school pupils. RoboCup 2024 was held in Eindhoven with three hundred teams from forty countries. We have no connection with RoboCup, but a pupil who wants to take part will find the Python and data skills from our ladder useful.' },
      { q: 'My teenager wants to study at TU/e. What should they learn first?', a: 'Python written by hand, then data, then the first models, in that order. For a technical degree, fluent programming and the habit of measuring errors matter more than any particular framework. We have no connection with TU/e and cannot influence admission.' },
      { q: 'What is the gap between simulation and reality?', a: 'The difference between how a system behaves in a simulator and how it behaves in the real world. Tech United\'s goalkeeper, trained in simulation, covered 23 percent of the goal area on the real robot, and the team plans to retrain it on the hardware. Every model trained on artificial data faces the same question.' },
      { q: 'I am an engineer. Is this too basic for me?', a: 'Probably not if you start at the right rung. Engineers usually begin with the mathematics or the machine learning masterclass, often one to one, and move quickly past what they already know. The free lesson decides the level.' },
      { q: 'Is my child too young?', a: 'Children start from around groep 5 with blocks and from groep 6 to 8 with typed Python. A turtle that moves on the screen is a real program, and a child who writes one is already learning to control a machine.' },
      { q: 'Are the lessons in English?', a: 'Yes, as the technical world around Eindhoven largely is. Dutch school terms such as brugklas, havo and vwo are used as they are.' },
      { q: 'What does it cost?', a: 'USD 100 a month for a group place, USD 150 a month for one-to-one lessons, billed in US dollars. No joining fee, no yearly contract, and the first lesson is free.' },
      { q: 'Where do the teachers work from?', a: 'From India, live over video. The time difference with Eindhoven is three and a half hours in summer and four and a half in winter, so late afternoons and weekends are easiest.' },
      { q: 'What happens after I send the form?', a: 'We call at a Dutch hour to set up the free lesson. Nothing is charged and no place is held until the family has seen that lesson and chosen.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More pages for Eindhoven and the Netherlands',
    lede: 'This page covers the AI track and one local emphasis. These cover the rest.',
    items: [
      { href: '/coding-classes-in-eindhoven', label: 'Coding classes in Eindhoven', p: 'The city page for general programming, with its districts, schools and figures.' },
      { href: '/coding-classes-in-helmond', label: 'Coding classes in Helmond', p: 'The town east of Eindhoven, with a page of its own.' },
      { href: '/coding-classes-in-noord-brabant', label: 'Coding classes in Noord-Brabant', p: 'Every municipality in the province.' },
      { href: '/ai-and-python-academy-netherlands', label: 'AI and Python Academy, Netherlands', p: 'The national academy page, with the school figures and the country\'s AI plans.' },
      { href: '/ai-and-python-academy-groningen', label: 'AI and Python Academy, Groningen', p: 'The academy page built around a university AI degree.' },
      { href: '/ai-and-python-academy-amsterdam', label: 'AI and Python Academy, Amsterdam', p: 'The academy page built around the public algorithm register.' }
    ]
  },

  start: {
    h2: 'Book the free first lesson',
    lede: 'Leave a number and we will ring at a Dutch hour. The first session is a real lesson with a real teacher, and at its end we know the learner\'s starting rung, which matters more than anything else in this subject.',
    readFirst: 'Would rather read first? See the <a class="ag-inline-link" href="/courses">course catalogue</a>, <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and why we teach building AI at <a class="ag-inline-link" href="/learn-to-build-ai">Learn to Build AI</a>.',
    note: 'WhatsApp is free from the Netherlands and usually quickest. Our number is Indian; there is no office or address of ours in Eindhoven or elsewhere in the country.',
    formNote: 'No card, no obligation. One call to arrange the lesson.'
  },

  footer: {
    cols: [
      { h4: 'Eindhoven', links: [
        { href: '/coding-classes-in-eindhoven', label: 'Coding classes in Eindhoven' },
        { href: '/coding-classes-in-noord-brabant', label: 'Noord-Brabant' },
        { href: '/ai-and-python-academy-netherlands', label: 'Academy, Netherlands' },
        { href: '/coding-classes-in-netherlands', label: 'Coding in the Netherlands' }
      ] },
      { h4: 'The track', links: [
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/learn-to-build-ai', label: 'Learn to Build AI' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Teaching Eindhoven on CET and CEST'
  },

  personalityCss: `
.ag-root.ag-aeh .ag-hero-grid { gap: clamp(1.2rem, 3.2vw, 2.8rem); }
.ag-root.ag-aeh .ag-hero h1 { letter-spacing: -0.018em; }
.ag-root.ag-aeh .ag-capsule { border-left-width: 3px; }
.ag-root.ag-aeh .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-aeh .ag-band-head h3 { letter-spacing: 0; }
.ag-root.ag-aeh .ag-table caption { text-align: left; }
.ag-root.ag-aeh .ag-spec dt { letter-spacing: 0.14em; }
.ag-root.ag-aeh .ag-slots { gap: 1.1rem; }
`,

  mustMention: ['EAISI', '600 PhD candidates', 'Artificial Intelligence and Engineering Systems', 'Tech United', 'Middle Size League', 'BigHeroX', 'TURTLE', 'Worldmodel', 'Unreal Engine', 'YOLOv8', 'Mini Cheetah', '23 percent', 'Serpentine', 'RoboCupJunior']
};
