'use strict';
// Python AI course for kids, Australia (ag- topic door; AU cluster Phase 2, row 17).
// Demand: our Search Console, Australia, 16 months: "python ai course for kids" 106 impressions at position 8.8;
// "ai projects for kids using python" 30 at 10.8.
// Intent: a Python course in which children aged about 9 to 13 build small AI programs themselves, in Python,
// without signing up to adult AI chatbots. The broader "which AI course for my child" question is answered on
// /ai-courses-for-kids-australia and teens on /ai-classes-for-teens-australia; both are linked, not repeated.
// Sources, read raw on 7 October 2026:
//  - ACARA, Australian Curriculum v9, Digital Technologies curriculum content 7-10 (Word download): AC9TDI10P02
//    elaborations "exploring machine learning, a form of artificial intelligence where an algorithm is trained
//    using a data set, for example to classify images into categories" and "adjusting parameters of an AI model
//    to observe the impact of different factors on predicted outcomes; for example, changing the weighting of
//    different input variables to see how much it changes the model's outputs".
//  - Machine Learning for Kids (machinelearningforkids.co.uk), meta description: "An educational tool for teaching
//    kids about machine learning, by letting them train a computer to recognise text, pictures, numbers, or
//    sounds, and then make things with it in tools like Scratch."
//  - Python Software Foundation, About (python.org/about): Python "is friendly & easy to learn".
// Lesson family: hand-written rules versus a learned word-count model. Our own data: 12 training sentences
// (6 space, 6 ocean) and 8 new test sentences; a hand-written rule ("rocket" or "moon" means space) gets 3 of 8
// right, a word-count model learned from the training sentences gets 6 of 8 right, 1 wrong and answers "not sure"
// once.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'guide', tag: 'PYTHON AND AI, KIDS', blurb: 'A Python AI course for Australian kids aged about 9 to 13: build small AI programs in Python and learn how a computer learns from examples.' },
  slug: 'python-ai-course-for-kids-australia',
  code: 'pyau',
  accent: '#574B99',
  accentRationale: 'Python AI course for kids, Australia: a dusk indigo chosen by hand, muted, at least 15 RGB units from every accent in use, below the violet band and at least 40 from the other Phase 2 doors',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'Python AI course for kids, Australia',
  title: 'Python AI Course for Kids in Australia | Build, Not Just Use',
  description: 'A Python AI course for Australian kids aged 9 to 13: write small AI programs, train them on examples and test them honestly. No adult chatbots. First class free.',
  ogDescription: 'Why a rule written by hand got 3 out of 8 right and a model that learned from examples got 6: a Python AI course for Australian kids that teaches how AI actually learns.',
  twitterDescription: 'Python AI for Australian kids aged 9 to 13: build and test small AI programs in Python, no adult chatbots needed. First class free.',
  pageName: 'Python AI Course for Kids in Australia',
  webPageDescription: 'A live online Python and AI course for Australian children aged about 9 to 13, building small machine learning programs in Python and testing them on new data.',
  courseDescription: 'Live online Python and AI for Australian kids: first Python programs, then small machine learning projects children build, train and test themselves.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'Python AI course for kids',
  navLinks: [
    { href: '#why-python', label: 'Why Python' },
    { href: '#learn', label: 'A worked example' },
    { href: '#projects', label: 'Projects' },
    { href: '#safe', label: 'No adult chatbots' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Ages 9 to 13 &middot; Python and AI',
  h1: 'Python AI course for kids',
  lede: 'Children meet AI every day, in search boxes, games and video recommendations, and many have already asked a chatbot a question. Very few have built an AI program themselves, or seen how a computer can get better at a task by looking at examples. That is the gap this course fills. Children aged about nine to thirteen learn Python, then use it to build small, real AI programs: a sorter that learns from examples, a guessing game that improves as it plays, a simple model they train and then test on things it has never seen. Everything runs in their own Python code, so nobody needs an account with an adult AI service. This page explains why Python, works through one AI idea in full with real numbers, and shows what Australian children build along the way.',
  secondaryCta: { href: '#learn', label: 'See a worked example' },
  wa: 'Hello Modern Age Coders, my child in Australia wants to learn Python and AI. Could we book a free first class?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; AI programs built and tested by the child',
  spec: [
    ['For', 'Children aged about 9 to 13'],
    ['Language', 'Python'],
    ['AI ideas', 'Training data, models, testing'],
    ['Accounts', 'No adult AI chatbots needed'],
    ['Before this', 'Scratch helps, not required'],
    ['Format', 'Live online lessons'],
    ['Group', 'Five to ten, or one to one'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'A Python AI course for kids teaches children to program in Python and then use it to build small artificial intelligence programs of their own, such as a text sorter that learns from labelled examples. Children learn the core ideas of machine learning: training data, a model, testing on new examples and spotting mistakes. Our course is for Australian children aged about 9 to 13, runs live online in small groups or one to one, needs no account with an adult AI chatbot, and starts with a free class.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for young Python and AI learners',
    lede: 'Chosen by age and confidence with code. Each card opens the full syllabus.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'PYAU / 01', title: 'Python and AI for Kids', note: 'For 9 to 12 year olds: first Python programs, turtle drawings and games, then small AI projects.' },
      { course: 'ai-literacy-for-kids-course', code: 'PYAU / 02', title: 'AI Literacy for Kids', note: 'For 8 to 14 year olds: how AI works and where it goes wrong, with less code and more thinking.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', code: 'PYAU / 03', title: 'Vibe Coding for Kids', note: 'For 8 to 12 year olds who want to make things with an AI helper and still know what each step does.' }
    ]
  },

  sections: [
    {
      id: 'why-python', tint: 'tint', eyebrow: 'Why Python',
      h2: 'Why Python is the right first language for AI',
      lede: 'There is a practical reason to start AI with Python, and a more important one.',
      body: [
        { kind: 'two',
          leftH3: 'It reads like plain English',
          left: [
            'The Python Software Foundation describes Python as "friendly &amp; easy to learn". A line such as <code>if score > 10: print("You win")</code> can be read aloud by a nine-year-old and understood.',
            'That matters for AI, because children need to see exactly what their program does with the examples it is given. Hidden steps make AI feel like magic; readable code makes it make sense.'
          ],
          rightH3: 'It grows with the child',
          right: [
            'The same language a child uses to draw a spiral with turtle graphics is used later for data science and machine learning. Nothing has to be thrown away and relearned.',
            'Children who later move to more advanced AI work, in our teen courses, keep their Python habits and simply add new libraries.'
          ] },
        { kind: 'table', mt: true, caption: 'How the course is paced', head: ['Weeks', 'Python skills', 'AI ideas'], rows: [
          ['1 to 4', 'Variables, input, if statements, loops', 'What is a rule? Writing rules by hand'],
          ['5 to 8', 'Lists, strings, functions', 'Examples and labels: the idea of training data'],
          ['9 to 12', 'Dictionaries and counting', 'A model that learns word counts from examples'],
          ['13 to 16', 'Files and testing', 'Testing on new data, measuring how often it is right'],
          ['17 onwards', 'Projects of the child\'s choice', 'Improving a model and explaining its mistakes']
        ] },
        { kind: 'source', html: 'Source, read 7 October 2026: Python Software Foundation, <a class="ag-inline-link" href="https://www.python.org/about/" rel="noopener" target="_blank">About Python</a>. Pacing is our plan for a typical learner; quick learners move faster.' }
      ]
    },
    {
      id: 'learn', tint: 'deep', eyebrow: 'A worked example',
      h2: 'Hand-written rules versus learning from examples',
      lede: 'This project is the heart of the course. Children build the same program twice, once with hand-written rules and once with a model that learns, and then test both on sentences neither has seen.',
      body: [
        { kind: 'p', html: 'The task: decide whether a sentence is about <strong>space</strong> or the <strong>ocean</strong>. First, the child writes a rule by hand: if the sentence contains "rocket" or "moon", say space; otherwise say ocean. Then they build a learning version. They give the program twelve example sentences, six labelled space and six labelled ocean, and it counts how often each word appears in each group. To judge a new sentence, it adds up the counts for its words and picks the bigger total. If the totals are equal, it says "not sure".' },
        { kind: 'table', caption: 'Our test: 8 new sentences, judged by both programs (our own sentences and results)', head: ['New sentence', 'Correct answer', 'Hand-written rule', 'Learned word counts'], rows: [
          ['astronauts saw stars from the space station', 'Space', 'Ocean (wrong)', 'Space'],
          ['a turtle swam near the reef', 'Ocean', 'Ocean', 'Ocean'],
          ['the comet flew past mars', 'Space', 'Ocean (wrong)', 'Space'],
          ['the boat sailed across deep water', 'Ocean', 'Ocean', 'Ocean'],
          ['the earth looks blue from space', 'Space', 'Ocean (wrong)', 'Space'],
          ['fish hide from the shark', 'Ocean', 'Ocean', 'Ocean'],
          ['the moon pulls the ocean to make tides', 'Ocean', 'Space (wrong)', 'Space (wrong)'],
          ['a satellite circles the planet', 'Space', 'Ocean (wrong)', 'Not sure']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'The score', p: 'The hand-written rule got 3 out of 8 right. The learned word counts got 6 out of 8 right, made 1 mistake and said "not sure" once. Same task, same test, very different results.' },
          { h3: 'Why learning won', p: 'The rule only knew two words. The learned model picked up dozens from the examples, such as "astronauts", "comet" and "mars", without anyone listing them.' },
          { h3: 'Why it still failed', p: 'Neither program has seen "satellite" or "planet", so the model cannot decide. And "the moon pulls the ocean" really is about both, which shows that labels are a human choice.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What children take away',
          left: [
            'AI is not magic. A model is a program that turns examples into decisions, and it can only be as good as the examples it was given.',
            'Testing on new sentences, never the ones it learned from, is the only honest way to find out whether a model works. Children who mark their own homework with the training sentences always get a perfect score, and learn nothing.'
          ],
          rightH3: 'How it links to the curriculum',
          right: [
            'The Australian Curriculum v9 includes, as an elaboration of AC9TDI10P02, "exploring machine learning, a form of artificial intelligence where an algorithm is trained using a data set, for example to classify images into categories".',
            'Another elaboration suggests "changing the weighting of different input variables to see how much it changes the model\'s outputs". Our students do exactly that when they decide that some words should count more than others.'
          ] },
        { kind: 'source', html: 'Both elaborations were taken on 7 October 2026 from the Years 7 to 10 Digital Technologies <a class="ag-inline-link" href="https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx" rel="noopener" target="_blank">curriculum document</a> published by ACARA (Version 9.0). ACARA lists them under Years 9 and 10; we teach a simpler version earlier.' }
      ]
    },
    {
      id: 'projects', tint: 'tint', eyebrow: 'Projects',
      h2: 'AI projects children build in Python',
      lede: 'Every project is small enough to finish in a few lessons, and each one teaches a single AI idea properly.',
      body: [
        { kind: 'table', caption: 'Projects and the idea each one teaches', head: ['Project', 'What it does', 'The AI idea'], rows: [
          ['Space or ocean?', 'Sorts sentences after learning from examples', 'Training data and testing on new data'],
          ['Number guesser', 'Narrows down a secret number in as few tries as possible', 'Searching a space of answers'],
          ['Rock, paper, scissors bot', 'Notices a player\'s habits and plays against them', 'Learning patterns from past moves'],
          ['Mood checker', 'Guesses whether a short message is happy or sad', 'Word counts and why some words mislead'],
          ['Pet picker', 'Recommends a pet from answers to a few questions', 'Decisions made from several inputs'],
          ['Fair or not?', 'Shows how a lopsided training set gives lopsided answers', 'Bias in training data']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Free tools we sometimes use too',
          left: [
            'For younger children, or as a warm-up, we may use Machine Learning for Kids, which describes itself as "An educational tool for teaching kids about machine learning, by letting them train a computer to recognise text, pictures, numbers, or sounds, and then make things with it in tools like Scratch."',
            'These tools are excellent for seeing results quickly. We always follow them with Python, where children write the learning step themselves.'
          ],
          rightH3: 'Why we keep the code visible',
          right: [
            'A child who has written their own word-counting model knows exactly why it made each decision. That understanding transfers to every AI system they will meet later, including the large ones.',
            'It also makes them sceptical in a healthy way: they know that a confident answer from a model is still only a guess based on examples.'
          ] },
        { kind: 'source', html: 'Source, read 7 October 2026: <a class="ag-inline-link" href="https://machinelearningforkids.co.uk/" rel="noopener" target="_blank">Machine Learning for Kids</a>, site description. We are independent of it.' }
      ]
    },
    {
      id: 'safe', tint: 'deep', eyebrow: 'No adult chatbots',
      h2: 'Learning AI without adult AI accounts',
      lede: 'Many popular AI chatbots set minimum ages in their own terms, and some do not allow children at all. This course does not need them.',
      body: [
        { kind: 'two',
          leftH3: 'Everything runs in Python',
          left: [
            'The models children build in this course are their own programs, running on their own computer. There is no sign-up, no chat history stored by a company and no age limit to work around.',
            'That also means no surprise content: the only text a model sees is the examples the child gives it.'
          ],
          rightH3: 'When teens are ready for more',
          right: [
            'Older students eventually meet large AI tools, and should, once they meet each service\'s own age rules. Our <a class="ag-inline-link" href="/ai-classes-for-teens-australia">AI classes for teens</a> cover using and checking those tools responsibly.',
            'For a wider view of what a good AI course for children should include, see <a class="ag-inline-link" href="/ai-courses-for-kids-australia">AI courses for kids in Australia</a>.'
          ] },
        { kind: 'table', mt: true, caption: 'How this course compares with "AI for kids" that means chatting with a bot', head: ['Question', 'This course', 'Chatbot-based activities'], rows: [
          ['Who builds the AI?', 'The child, in Python', 'A company'],
          ['Is an account needed?', 'No', 'Usually, with age rules'],
          ['Can the child explain each decision?', 'Yes, line by line', 'Rarely'],
          ['What does the child learn?', 'How learning from examples works', 'How to phrase questions']
        ] }
      ]
    },
    {
      id: 'ready', tint: '', eyebrow: 'Is my child ready?',
      h2: 'Signs your child is ready for Python and AI',
      lede: 'Age is only a rough guide. These signs matter more.',
      body: [
        { kind: 'table', caption: 'Readiness signs and what to do', head: ['What you notice', 'What it suggests', 'Where to start'], rows: [
          ['Reads comfortably and types a little', 'Ready for typed Python', 'This course'],
          ['Has finished Scratch projects alone', 'Ready to move from blocks to text', 'This course, from week one'],
          ['Asks how AI or chatbots work', 'Curious about the ideas', 'This course, or AI Literacy for Kids'],
          ['Prefers drawing and games to puzzles', 'May enjoy a gentler start', 'Scratch first, then Python']
        ] },
        { kind: 'p', mt: true, html: 'Younger children usually start with blocks. Our page on <a class="ag-inline-link" href="/coding-games-for-kids-australia">coding games for kids</a> explains how puzzle games prepare them, and <a class="ag-inline-link" href="/online-coding-classes-for-kids-australia">online coding classes for kids in Australia</a> describes how live lessons run.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'Four stages from first Python to first AI',
    lede: 'Most children reach the third stage in about two terms of weekly lessons.',
    table: { caption: 'From typing Python to testing a model', head: ['Stage', 'What your child can do'], rows: [
      ['1. Coder', 'Write Python with variables, loops and if statements, and fix simple errors'],
      ['2. Rule maker', 'Write a hand-made rule for a task and explain where it fails'],
      ['3. Trainer', 'Build a model that learns from labelled examples and test it on new ones'],
      ['4. Critic', 'Explain a model\'s mistakes, improve its data and say what it cannot know']
    ] },
    left: { h3: 'Does my child need to be good at maths?', ps: [
      'Counting, comparing and simple percentages are enough to start. The course builds number sense rather than requiring it.',
      'Children who love maths often enjoy seeing how a model\'s score is calculated.'
    ] },
    right: { h3: 'How much time each week?', ps: [
      'One or two live lessons a week, plus optional practice. Many children happily spend extra time improving their own projects.',
      'Billing is monthly, so a break over the summer holidays is easy.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Courses around Python and AI for children',
    lede: 'Three bands, from before Python to beyond this course. The trial lesson tells us which one fits.',
    bands: [
      { num: 'I', h3: 'Before Python', sub: 'Ages 6 to 9', courses: [
        { code: 'PYAU / PRE / 01', slug: 'scratch-programming-complete-course', title: 'Scratch Coding for Kids', blurb: 'Logic and loops in blocks.' },
        { code: 'PYAU / PRE / 02', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'From blocks towards typed code.' },
        { code: 'PYAU / PRE / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem Solving for Kids', blurb: 'Breaking problems into steps.' }
      ] },
      { num: 'II', h3: 'Python and AI', sub: 'Ages 8 to 14', courses: [
        { code: 'PYAU / PAI / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'The course this page describes.' },
        { code: 'PYAU / PAI / 02', slug: 'ai-literacy-for-kids-course', title: 'AI Literacy for Kids', blurb: 'Understanding AI, ages 8 to 14.' },
        { code: 'PYAU / PAI / 03', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Vibe Coding for Kids', blurb: 'Building with AI help, ages 8 to 12.' }
      ] },
      { num: 'III', h3: 'After this course', sub: 'Ages 13 and up', courses: [
        { code: 'PYAU / AFT / 01', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'Deeper Python for teenagers.' },
        { code: 'PYAU / AFT / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and Machine Learning for Teens', blurb: 'Real models with real libraries, 13 to 18.' },
        { code: 'PYAU / AFT / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data Science for Teens', blurb: 'Data and first ML models, 14 to 18.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Python AI lessons in Australian time',
    lede: 'Our teachers work from India, where the working day overlaps Australian afternoons in every state. Lessons are booked in your own state\'s time, and daylight saving in the east is handled for you.',
    slots: [
      { time: 'After school', l: 'Weekday lessons for primary and lower secondary.' },
      { time: 'Saturday', l: 'Longer project sessions.' },
      { time: 'Sunday', l: 'When weeknights are full of sport and homework.' }
    ],
    cells: [
      { h3: 'Free first class', p: 'Your child writes a first Python program, and a first rule, with a teacher.' },
      { h3: 'Small groups', p: 'Five to ten children comparing how their models perform.' },
      { h3: 'Private lessons', p: 'When your child has one AI idea they want to chase.' },
      { h3: 'Code by the child', p: 'Teachers explain and question; children type every line.' },
      { h3: 'No chatbot accounts', p: 'Everything runs in the child\'s own Python code.' },
      { h3: 'Honest testing', p: 'Every model is tested on data it has not seen, every time.' }
    ]
  },

  projectsH2: 'Projects built by our students',
  projectsLede: 'Programs and apps our students finished and put online. The <a class="ag-inline-link" href="/student-labs">student labs</a> hold the rest.',
  reviewsLede: 'Copied word for word from families\' reviews on our Google profile.',

  fees: {
    h2: 'Fees for the Python AI course',
    lede: 'Outside India, lessons are billed once a month in US dollars, with no sign-up fee. Leave whenever you like; there is no term to finish.',
    free: ['A first Python program and a first rule', 'Honest advice on readiness', 'No card or bank details'],
    group: ['Five to ten children per class', 'Models compared and discussed together', 'A regular teacher', 'Stop after any month'],
    one: ['Lessons around your child\'s own AI project', 'Pace set by your child', 'Times around school and activities']
  },

  faq: {
    eyebrow: 'Parents ask',
    h2: 'What Australian parents ask about Python and AI for kids',
    items: [
      { q: 'What is a Python AI course for kids?', a: 'It is a course in which children learn the Python programming language and then use it to build small artificial intelligence programs themselves, such as a text sorter that learns from labelled examples, and test them on new data.' },
      { q: 'What is the difference between a rule and a trained model?', a: 'A rule is written by a person, such as "if the sentence says rocket, it is about space". A trained model works out its own decision-making from labelled examples. In our worked example, the rule got 3 of 8 test sentences right and the model got 6.' },
      { q: 'What age is right for a Python AI course?', a: 'Usually about 9 to 13, once a child reads comfortably and can type a little. Younger children often start with Scratch and move across later.' },
      { q: 'Does my child need to know how to code already?', a: 'No. The course starts with Python basics. Children who have done Scratch move a little faster at the beginning.' },
      { q: 'Will my child use ChatGPT or other chatbots?', a: 'No. The AI programs in this course are written by the children in Python and run on their own computer. No adult AI account is needed.' },
      { q: 'Is AI part of the Australian Curriculum?', a: 'Yes. The Australian Curriculum v9 Digital Technologies includes machine learning and AI in its elaborations, for example exploring how an algorithm is trained using a data set to classify images.' },
      { q: 'What computer does my child need?', a: 'A laptop or desktop with a keyboard and internet access. Python and the tools we use run well on ordinary computers.' },
      { q: 'What happens after this course?', a: 'Many children move to our Python for Teens or AI and Machine Learning for Teens courses, where they use real machine learning libraries.' },
      { q: 'Can my child build an AI chatbot in this course?', a: 'They build a simple rule-based chat program and learn why real chatbots need enormous amounts of data. Building with large language models is left for teen courses.' },
      { q: 'What does it cost?', a: 'Nothing for the opening lesson, and no payment details are asked for. After that it is a flat monthly fee for either a small group or private lessons, set out in the fees panel above.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Also on this site',
    h2: 'Related pages',
    lede: 'Other AI and coding pages for Australian families.',
    items: [
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'All of our Australian guides together.' },
      { href: '/ai-courses-for-kids-australia', label: 'AI courses for kids', p: 'What a good AI course for children includes.' },
      { href: '/ai-classes-for-teens-australia', label: 'AI classes for teens', p: 'Using and checking AI tools, for teenagers.' },
      { href: '/ai-and-machine-learning-classes-in-australia', label: 'AI and machine learning in Australia', p: 'Deeper AI study for older learners.' },
      { href: '/coding-games-for-kids-australia', label: 'Coding games for kids', p: 'Puzzle games that prepare younger children.' },
      { href: '/online-coding-classes-for-kids-australia', label: 'Online coding classes for kids', p: 'Year levels, time zones and online safety.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us a little about your child and pick a time for a call. During the trial lesson they type their first lines of Python and invent a first AI rule, and you leave knowing which course, if any, makes sense.',
    readFirst: 'If you prefer to read first, see <a class="ag-inline-link" href="/how-we-teach">how we teach a lesson</a> or browse <a class="ag-inline-link" href="/courses">our courses by age</a>.',
    note: 'Messages on WhatsApp reach our India-based team (the +91 number) fastest. We do not run an office in Australia.',
    formNote: 'Free, no card, no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Python and AI', links: [
        { href: '/ai-courses-for-kids-australia', label: 'AI courses for kids' },
        { href: '/ai-classes-for-teens-australia', label: 'AI classes for teens' },
        { href: '/ai-and-machine-learning-classes-in-australia', label: 'AI and machine learning' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] },
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/online-coding-classes-for-kids-australia', label: 'Online coding for kids' },
        { href: '/coding-classes-cost-australia', label: 'What coding classes cost' },
        { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' }
      ] }
    ],
    bottomRight: 'A model is only as good as its examples'
  },

  personalityCss: `
.ag-root.ag-pyau .ag-hero h1 { letter-spacing: -0.017em; }
.ag-root.ag-pyau .ag-capsule { border-left-width: 5px; border-radius: 8px; }
.ag-root.ag-pyau .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-pyau .ag-table caption { text-align: left; font-weight: 580; }
.ag-root.ag-pyau .ag-band-head h3 { letter-spacing: -0.008em; }
.ag-root.ag-pyau .ag-slots { gap: 0.95rem; }
`,

  dossier: {
    curriculumAuthority: 'Australia, Years 9 and 10 (introduced earlier in simpler form). ACARA, Australian Curriculum v9, Technologies: Digital Technologies curriculum content 7-10 (Word download): AC9TDI10P02 "analyse and visualise data interactively using a range of software, including spreadsheets and databases, to draw conclusions and make predictions by identifying trends and outliers", with elaborations "exploring machine learning, a form of artificial intelligence where an algorithm is trained using a data set, for example to classify images into categories" and "adjusting parameters of an AI model to observe the impact of different factors on predicted outcomes; for example, changing the weighting of different input variables to see how much it changes the model\'s outputs".',
    localProject: 'Hand-written rules versus learned word counts on our own data: 12 training sentences (6 space, 6 ocean, common words removed) and 8 new test sentences; the rule ("rocket" or "moon" means space) gets 3 of 8 right; the word-count model gets 6 of 8 right, 1 wrong ("the moon pulls the ocean to make tides") and "not sure" on "a satellite circles the planet" (our run). Lesson family: hand-written rules versus a learned model.',
    requiredMentions: ['AC9TDI10P02', 'exploring machine learning, a form of artificial intelligence where an algorithm is trained using a data set', 'changing the weighting of different input variables', 'train a computer to recognise text, pictures, numbers, or sounds', 'hand-written rules', 'the moon pulls the ocean to make tides', 'a satellite circles the planet', 'Machine Learning for Kids'],
    sources: [
      { claim: 'ACARA, Australian Curriculum v9, Digital Technologies curriculum content 7-10: AC9TDI10P02 and its machine learning elaborations.', url: 'https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx' },
      { claim: 'Machine Learning for Kids, site description: "An educational tool for teaching kids about machine learning, by letting them train a computer to recognise text, pictures, numbers, or sounds, and then make things with it in tools like Scratch."', url: 'https://machinelearningforkids.co.uk/' },
      { claim: 'Python Software Foundation, About: Python "is friendly & easy to learn".', url: 'https://www.python.org/about/' }
    ],
    rejectedClaims: [
      'Minimum ages of named AI chatbots: vendor terms were not all read raw (one returned 403), so the page says only that services set their own age rules.',
      'Teachable Machine description: its page renders by script and could not be read raw, so it is not quoted.',
      'Claims that the course prepares children for AI careers: not made.',
      'Statistics on how many Australian children use AI: no primary source read raw; not quoted.',
      'Promised evening lesson hours: the hour is agreed in the free class (spec decision 7).'
    ]
  }
};
