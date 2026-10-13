'use strict';
// AI classes for teens, Australia (ag- topic door; AU cluster Phase 2, row 19).
// Intent: Australian teenagers (about 13 to 18) and their parents looking for AI classes: using generative AI
// tools well and within each provider's age rules, checking what they produce, and building AI with Python.
// Children's AI is /ai-courses-for-kids-australia and /python-ai-course-for-kids-australia; both linked.
// Sources, read raw on 7 October 2026:
//  - ACARA, Australian Curriculum v9, Digital Technologies curriculum content F-6 (Word download): AC9TDI6P06
//    elaboration "verifying the correctness of AI-generated content against information known to be factually
//    accurate; for example, comparing the output from a generative text model providing a biography of a local
//    leader with the data published on their official website or other authoritative source".
//  - ACARA, Digital Technologies curriculum content 7-10: AC9TDI8K01 elaboration "GPUs are more efficient at
//    performing the mathematical calculations necessary for training generative AI than CPUs"; the AC9TDI8P09
//    elaboration "such as Python, JavaScript or C#"; AC9TDI10P01 zero problem elaboration; AC9TDIFK01 (the
//    Digital Technologies content begins at Foundation).
//  - NSW Department of Education, NSWEduChat: "NSW Department of Education staff and students in Years 5 to 12 now
//    have access to NSWEduChat, the department's generative artificial intelligence tool"; "NSWEduChat is the
//    secure, department-owned generative artificial intelligence (AI) tool".
//  - Anthropic, Consumer Terms of Service: minimum age 18 (quoted on /ai-courses-for-kids-australia).
// Lesson family: claim-by-claim verification. A sample AI answer about the Australian Curriculum (written by us)
// broken into 7 checkable claims and checked against ACARA's own document and the NSW Department of Education:
// 4 supported, 2 contradicted, 1 not supported by any source read.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'guide', tag: 'AI CLASSES, TEENS', blurb: 'AI classes for Australian teens: using AI tools well and within their age rules, checking every claim they make, and building AI in Python.' },
  slug: 'ai-classes-for-teens-australia',
  code: 'atau',
  accent: '#302D8A',
  accentRationale: 'AI classes for teens, Australia: a deep night indigo chosen by hand, muted, at least 16 RGB units from every accent in use, below the violet band and at least 40 from the other Phase 2 doors',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'AI classes for teens, Australia',
  title: 'AI Classes for Teens in Australia | Use, Check and Build AI',
  description: 'AI classes for Australian teens: use AI tools well within their age rules, check every claim they make and build real AI in Python. Live online, first class free.',
  ogDescription: 'An AI answer with seven claims, two of them wrong and one made up: how Australian teens learn to check AI claim by claim, and then build AI themselves.',
  twitterDescription: 'AI classes for Australian teens: using AI tools responsibly, checking what they say, building AI in Python. Live online, first class free.',
  pageName: 'AI Classes for Teens in Australia',
  webPageDescription: 'A guide to AI classes for Australian teenagers: responsible use of generative AI, verifying AI output against primary sources, and building machine learning in Python.',
  courseDescription: 'Live online AI classes for Australian teens: generative AI used well and within each provider\'s age rules, AI output verified claim by claim, and machine learning built in Python.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'AI classes for teens',
  navLinks: [
    { href: '#three', label: 'Use, check, build' },
    { href: '#verify', label: 'A worked example' },
    { href: '#school', label: 'At school' },
    { href: '#rules', label: 'Age rules' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Ages 13 to 18 &middot; Use, check, build',
  h1: 'AI classes for teens',
  lede: 'Australian teenagers already use AI, often daily, for homework help, coding and curiosity. Schools are responding: in New South Wales, the Department of Education has given students from Year 5 to Year 12 its own generative AI tool. What most teens have not been taught is how to check what AI tells them, when not to use it, and how it actually works underneath. Our AI classes for teens cover all three. Students learn to use AI tools well and within each provider\'s own age rules, to break an AI answer into claims and verify each one, and to build machine learning themselves in Python. This page explains the approach, works through one verification in full with a real score, and connects it to what the Australian Curriculum and NSW schools already expect.',
  secondaryCta: { href: '#verify', label: 'See a worked example' },
  wa: 'Hello Modern Age Coders, I am a teenager (or parent of one) in Australia interested in AI classes. Could we book a free first class?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; AI used with judgement, then built from scratch',
  spec: [
    ['For', 'Teens aged 13 to 18'],
    ['Use', 'Generative AI, within age rules'],
    ['Check', 'Every claim against a source'],
    ['Build', 'Machine learning in Python'],
    ['School', 'Never writes assessed work'],
    ['Format', 'Live online lessons'],
    ['Group', 'Fifteen to twenty, or one to one'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'AI classes for teens teach young people aged 13 to 18 to use generative AI tools effectively and within each provider\'s age rules, to verify AI output claim by claim against reliable sources, and to understand AI by building machine learning models in Python. The Australian Curriculum v9 already asks students to check AI-generated content against authoritative sources. Modern Age Coders runs these classes live online for Australian teens, in small groups or one to one, and the first class is free.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three AI courses for Australian teenagers',
    lede: 'Matched to whether a teen wants to use AI well, build it, or both. Each card opens the syllabus.',
    items: [
      { course: 'teens-ai-tools-mastery-course', code: 'ATAU / 01', title: 'AI Tools Course for Teens', note: 'Strictly 13 and over. Prompting to real projects, with each platform\'s own age rules part of the course.' },
      { course: 'ai-ml-masterclass-teens', code: 'ATAU / 02', title: 'AI and Machine Learning for Teens', note: 'Python to real models: training, testing and explaining machine learning, ages 13 to 18.' },
      { course: 'data-science-course-for-teens-python-data', code: 'ATAU / 03', title: 'Data Science for Teens', note: 'Data, statistics and first ML models in Python, ages 14 to 18.' }
    ]
  },

  sections: [
    {
      id: 'three', tint: 'tint', eyebrow: 'Use, check, build',
      h2: 'Three skills every teenager needs with AI',
      lede: 'Most AI courses for teens teach only the first. The second and third are what make the first safe and useful.',
      body: [
        { kind: 'table', caption: 'The three parts of our AI classes for teens', head: ['Skill', 'What students learn', 'What they can do afterwards'], rows: [
          ['Use', 'Writing clear prompts, giving context, asking for structure and sources', 'Get useful help with study, coding and projects, faster'],
          ['Check', 'Splitting an answer into claims and verifying each against a primary source', 'Catch wrong, outdated and invented statements before relying on them'],
          ['Build', 'Python, data, training a model, testing it on new data', 'Explain what is happening inside AI tools, not just what comes out']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why "check" matters most',
          left: [
            'Generative AI writes fluent, confident text whether or not it is correct. A teen who cannot check it ends up repeating mistakes in essays, code and conversations.',
            'Checking is a learnable skill with clear steps, and it transfers to everything else they read online, from news to social media.'
          ],
          rightH3: 'Why "build" matters too',
          right: [
            'A student who has trained even a small model knows that AI output is a prediction from training data, not a looked-up fact. That single idea changes how they read every AI answer.',
            'Building also opens doors: data science, machine learning and software engineering all start with the Python skills taught here.'
          ] }
      ]
    },
    {
      id: 'verify', tint: 'deep', eyebrow: 'A worked example',
      h2: 'Checking an AI answer, claim by claim',
      lede: 'This exercise is the centre of the course. We give students an AI-style answer, they split it into separate claims, and they check every one against a primary source.',
      body: [
        { kind: 'p', html: 'The question: <em>what does the Australian Curriculum say about coding and AI?</em> We wrote a sample answer in the fluent style AI tools produce, then split it into seven claims. Students check each claim against ACARA\'s own Version 9.0 Digital Technologies documents and, for the NSW claim, the NSW Department of Education\'s own page. Each claim ends up supported, contradicted, or not supported by any source they could find.' },
        { kind: 'table', caption: 'Our sample answer, split into claims and checked (checks done 7 October 2026)', head: ['#', 'Claim in the answer', 'What the source says', 'Verdict'], rows: [
          ['1', 'The Australian Curriculum is published by ACARA.', 'The Version 9.0 documents are published by ACARA.', 'Supported'],
          ['2', 'Digital Technologies starts in Year 3.', 'Content begins at Foundation, for example code AC9TDIFK01.', 'Contradicted'],
          ['3', 'In Years 7 and 8, students must learn Python.', 'The elaboration says a general-purpose language "such as Python, JavaScript or C#".', 'Contradicted'],
          ['4', 'The curriculum discusses the zero problem in AI training data.', 'An AC9TDI10P01 elaboration names "the zero problem".', 'Supported'],
          ['5', 'Students are expected to check AI-generated content against authoritative sources.', 'An AC9TDI6P06 elaboration says exactly this.', 'Supported'],
          ['6', 'NSW gave its Year 5 to 12 students a department AI tool.', 'The department says "staff and students in Years 5 to 12 now have access to NSWEduChat".', 'Supported'],
          ['7', 'ACARA rewrote the curriculum because of ChatGPT.', 'No statement found in the sources read.', 'Not supported: leave it out']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'The score', p: '4 of 7 claims supported, 2 contradicted and 1 with no support. The answer read smoothly from start to finish; nothing in its tone hinted that three claims were unsafe to use.' },
          { h3: 'The most dangerous claim', p: 'Claim 3 sounds the most authoritative and is wrong in a way that matters: a teen who repeats it in an assignment states a rule that does not exist.' },
          { h3: 'The habit it builds', p: 'One claim per line, one source per claim, and anything unsupported is left out. Students time themselves; most get faster within a few lessons.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What counts as a good source',
          left: [
            'The organisation that owns the fact: the curriculum authority for curriculum, the exam board for exam rules, the department for school policy. Second-hand summaries, including other AI answers, do not count.',
            'Students also learn to record the date they checked, because rules, dates and tools change.'
          ],
          rightH3: 'The curriculum asks for this',
          right: [
            'ACARA\'s Version 9.0 includes, for Years 5 and 6, "verifying the correctness of AI-generated content against information known to be factually accurate". Its example compares an AI biography of a local leader with "their official website or other authoritative source".',
            'Our teen classes take the same habit much further, to code, data and longer answers.'
          ] },
        { kind: 'source', html: 'Sources, read 7 October 2026: ACARA Version 9.0 Digital Technologies content for <a class="ag-inline-link" href="https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-f-6-v9.docx" rel="noopener" target="_blank">Foundation to Year 6</a> and <a class="ag-inline-link" href="https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx" rel="noopener" target="_blank">Years 7 to 10</a>; NSW Department of Education, <a class="ag-inline-link" href="https://education.nsw.gov.au/teaching-and-learning/education-for-a-changing-world/nsweduchat" rel="noopener" target="_blank">NSWEduChat</a>. The sample answer was written by us for teaching.' }
      ]
    },
    {
      id: 'school', tint: 'tint', eyebrow: 'At school',
      h2: 'AI in Australian schools, and where our classes fit',
      lede: 'Teenagers meet AI at school in two ways: as a topic in Digital Technologies, and as a tool their school may provide or regulate.',
      body: [
        { kind: 'two',
          leftH3: 'AI as a topic',
          left: [
            'The Version 9.0 elaborations for Years 7 to 10 cover training data, bias, machine learning and the hardware behind it. One notes that "GPUs are more efficient at performing the mathematical calculations necessary for training generative AI than CPUs" (AC9TDI8K01).',
            'Our build sessions make those ideas concrete: students see why training takes the time it does by running small models themselves.'
          ],
          rightH3: 'AI as a school tool',
          right: [
            'In NSW, the department describes NSWEduChat as "the secure, department-owned generative artificial intelligence (AI) tool", available to Department of Education students from Year 5 to Year 12. Other states and schools set their own approaches.',
            'Whatever tool a school provides, its rules on AI in assessment come first. We teach students to follow them and to say when they have used AI help.'
          ] },
        { kind: 'table', mt: true, caption: 'How our classes relate to school assessment', head: ['We do', 'We do not'], rows: [
          ['Teach how to use AI tools well and honestly', 'Write or rewrite assessed work'],
          ['Teach verification and citing of sources', 'Help students hide AI use where it is not allowed'],
          ['Build understanding through students\' own projects', 'Complete major projects or school tasks'],
          ['Explain each school\'s published AI rules when students bring them', 'Override what a school or exam authority says']
        ] },
        { kind: 'p', mt: true, html: 'Senior students in New South Wales will find more on assessment integrity in our <a class="ag-inline-link" href="/hsc-software-engineering-help">HSC Software Engineering help</a> page.' }
      ]
    },
    {
      id: 'rules', tint: 'deep', eyebrow: 'Age rules',
      h2: 'AI tools and their age rules',
      lede: 'Some AI services set minimum ages above 13. A responsible AI class for teens works within them, rather than around them.',
      body: [
        { kind: 'two',
          leftH3: 'How we handle age rules',
          left: [
            'Our AI Tools Course for Teens is firmly 13 and over, and each platform\'s own age rule is taught as part of the course. Where a tool requires users to be older than a student, that student does not use it in our lessons.',
            'For example, Anthropic\'s consumer terms set a minimum age of 18. Our page on <a class="ag-inline-link" href="/ai-courses-for-kids-australia">AI courses for kids</a> quotes that rule, and Google\'s for Gemini Apps, word for word.'
          ],
          rightH3: 'What teens can do at any age',
          right: [
            'Building and training machine learning models in Python needs no AI account at all. Students under a tool\'s minimum age still learn how AI works, and arguably learn it more deeply.',
            'Our <a class="ag-inline-link" href="/ai-tools-age-guide">AI tool age guide</a> collects age rules for many popular tools, each with its source.'
          ] }
      ]
    },
    {
      id: 'build', tint: '', eyebrow: 'Building AI',
      h2: 'What teens build in Python',
      lede: 'The build sessions turn AI from a mystery into a set of steps a student can explain.',
      body: [
        { kind: 'table', caption: 'Projects in the build sessions', head: ['Project', 'What the student does', 'What it teaches'], rows: [
          ['Text classifier', 'Trains a model to sort short texts by topic', 'Training data, testing and the zero problem'],
          ['Number recogniser', 'Trains on images of handwritten digits', 'Features, accuracy and confusion between classes'],
          ['Prediction from data', 'Uses public Australian data to predict a value', 'Regression, error and overfitting'],
          ['Fairness check', 'Compares results on balanced and unbalanced training sets', 'How data shapes outcomes'],
          ['Model explainer', 'Writes a plain-English report on a model\'s strengths and limits', 'Communicating AI honestly']
        ] },
        { kind: 'p', mt: true, html: 'Students who want to go further move on to <a class="ag-inline-link" href="/ai-and-machine-learning-classes-in-australia">AI and machine learning classes in Australia</a>. Younger siblings can start with the <a class="ag-inline-link" href="/python-ai-course-for-kids-australia">Python AI course for kids</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'Four levels of AI skill for teenagers',
    lede: 'Most students reach the third level in two to three terms of weekly lessons.',
    table: { caption: 'From user to builder', head: ['Level', 'What you can do'], rows: [
      ['1. Prompter', 'Ask clear, structured questions and get usable answers'],
      ['2. Checker', 'Split any AI answer into claims and verify each against a primary source'],
      ['3. Builder', 'Train and test a machine learning model in Python on real data'],
      ['4. Explainer', 'Write an honest account of what a model can and cannot do, and why']
    ] },
    left: { h3: 'Is this useful for Year 11 and 12?', ps: [
      'Yes, as a skill for research, coding and understanding, never as a way to produce assessed work. Senior students value the checking habit most.',
      'Students taking a computing subject also benefit from the Python and data work.'
    ] },
    right: { h3: 'Does it suit a teen who already uses AI a lot?', ps: [
      'Especially. Heavy users often have the most to gain from verification and from knowing how the tools work.',
      'Many arrive confident and leave sceptical in the best sense.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'AI and data courses for teens',
    lede: 'Grouped by focus. The free class decides where a student begins.',
    bands: [
      { num: 'I', h3: 'Using AI well', sub: 'Ages 13 to 18', courses: [
        { code: 'ATAU / USE / 01', slug: 'teens-ai-tools-mastery-course', title: 'AI Tools Course for Teens', blurb: 'Prompting to projects, 13 and over.' },
        { code: 'ATAU / USE / 02', slug: 'vibe-coding-for-teens-python-web-ai-projects-course', title: 'Vibe Coding for Teens', blurb: 'Python, web and AI projects, 13 to 17.' },
        { code: 'ATAU / USE / 03', slug: 'creative-media-design-masterclass-teens', title: 'Creative Media Design for Teens', blurb: 'Design work alongside AI tools.' }
      ] },
      { num: 'II', h3: 'Building AI', sub: 'Ages 13 to 18', courses: [
        { code: 'ATAU / BLD / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and Machine Learning for Teens', blurb: 'Python to real models.' },
        { code: 'ATAU / BLD / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data Science for Teens', blurb: 'Data and first models, 14 to 18.' },
        { code: 'ATAU / BLD / 03', slug: 'orange-data-mining-visual-machine-learning-course-for-teens', title: 'Orange Data Mining for Teens', blurb: 'Machine learning without code.' }
      ] },
      { num: 'III', h3: 'Foundations', sub: 'Any teen', courses: [
        { code: 'ATAU / FND / 01', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'The language underneath it all.' },
        { code: 'ATAU / FND / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem Solving and DSA for Teens', blurb: 'Algorithms and clear thinking.' },
        { code: 'ATAU / FND / 03', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'Cyber Security for Teens', blurb: 'Staying safe as tools get smarter.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'AI classes in Australian time',
    lede: 'Teachers are based in India, and the Indian working day overlaps Australian afternoons and early evenings. Lessons are booked in your own state\'s time, including through daylight saving.',
    slots: [
      { time: 'After school', l: 'Weekday lessons around homework.' },
      { time: 'Early evening', l: 'For senior students, by arrangement.' },
      { time: 'Weekend', l: 'Longer build sessions.' }
    ],
    cells: [
      { h3: 'Free first class', p: 'A short verification exercise and a first look at building a model.' },
      { h3: 'Small groups', p: 'Five to ten teens comparing checks and results.' },
      { h3: 'One to one', p: 'For a specific project, subject or pace.' },
      { h3: 'Age rules respected', p: 'No student uses a tool below its stated minimum age.' },
      { h3: 'School rules first', p: 'We never produce assessed work and we teach honest disclosure.' },
      { h3: 'Code by the student', p: 'Teachers guide; students type and explain every line.' }
    ]
  },

  projectsH2: 'Projects built by our students',
  projectsLede: 'Work our students built and published online. The <a class="ag-inline-link" href="/student-labs">student labs</a> list the rest.',
  reviewsLede: 'Published reviews from our Google profile, reproduced without edits.',

  fees: {
    h2: 'Fees for AI classes for teens',
    lede: 'Students outside India pay a flat monthly fee in US dollars, with nothing to pay at sign-up and no contract to see out.',
    free: ['A verification exercise and a first model', 'Honest advice on which course fits', 'No card or bank details'],
    group: ['Five to ten teens per class', 'Peer review of checks and models', 'A regular teacher', 'Stop after any month'],
    one: ['Lessons around one student\'s goals', 'Flexible depth and pace', 'Times around school and work']
  },

  faq: {
    eyebrow: 'Teens and parents ask',
    h2: 'Questions about AI classes for teens in Australia',
    items: [
      { q: 'What are AI classes for teens?', a: 'They are classes for 13 to 18 year olds covering how to use generative AI tools well and within their age rules, how to verify AI output against reliable sources, and how to build machine learning models in Python.' },
      { q: 'What is claim-by-claim verification?', a: 'It is splitting an AI answer into separate factual claims and checking each one against a primary source. In our worked example, 4 of 7 claims were supported, 2 were wrong and 1 had no support.' },
      { q: 'Can my teen use any AI tool in class?', a: 'Only tools whose own terms allow their age. Some services set a minimum age of 18. Building AI in Python needs no AI account at all, so every student can do that part.' },
      { q: 'Will these classes help with school assignments?', a: 'They build skills in research, checking and coding. We never write or rewrite assessed work, and we teach students to follow their school\'s AI rules and disclose AI help.' },
      { q: 'Is AI in the Australian Curriculum?', a: 'Yes. The Version 9.0 Digital Technologies elaborations include checking AI-generated content, training data issues, bias, machine learning and the hardware used to train AI.' },
      { q: 'What is NSWEduChat?', a: 'It is the NSW Department of Education\'s own generative AI tool. The department says its staff and students in Years 5 to 12 have access to it.' },
      { q: 'Does my teen need to know how to code?', a: 'Not to start. The use and check parts need no code; the build part starts with Python basics.' },
      { q: 'What age is right for these classes?', a: 'From 13. Younger students should look at our AI courses for kids or the Python AI course for kids instead.' },
      { q: 'Can adults join?', a: 'These classes are for teens. Adults have separate courses with their own groups.' },
      { q: 'What does it cost?', a: 'The opening lesson costs nothing and needs no card. Group and one-to-one monthly fees are given in the fees section above.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Also on this site',
    h2: 'Related pages',
    lede: 'Other AI pages and our wider Australian guides.',
    items: [
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'States, cities, exams and topics.' },
      { href: '/ai-courses-for-kids-australia', label: 'AI courses for kids', p: 'Choosing AI learning for under-13s.' },
      { href: '/python-ai-course-for-kids-australia', label: 'Python AI course for kids', p: 'Building small models, ages 9 to 13.' },
      { href: '/ai-and-machine-learning-classes-in-australia', label: 'AI and machine learning in Australia', p: 'The next step after these classes.' },
      { href: '/ai-tools-age-guide', label: 'AI tool age guide', p: 'Age rules for popular AI tools.' },
      { href: '/hsc-software-engineering-help', label: 'HSC Software Engineering help', p: 'For NSW senior computing students.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Fill in your details and we will phone at a time that suits. The trial lesson includes a short verification exercise and a first model, and ends with a clear recommendation.',
    readFirst: 'More about our approach: <a class="ag-inline-link" href="/how-we-teach">how lessons are taught</a>, and the <a class="ag-inline-link" href="/courses">complete course list</a>.',
    note: 'From an Australian phone, WhatsApp gets the quickest answer. The +91 number belongs to our India-based team; there is no Australian office.',
    formNote: 'Free, no card, no obligation.'
  },

  footer: {
    cols: [
      { h4: 'AI learning', links: [
        { href: '/ai-courses-for-kids-australia', label: 'AI courses for kids' },
        { href: '/python-ai-course-for-kids-australia', label: 'Python AI for kids' },
        { href: '/ai-tools-age-guide', label: 'AI tool age guide' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] },
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/hsc-software-engineering-help', label: 'HSC Software Engineering' },
        { href: '/ai-and-machine-learning-classes-in-australia', label: 'AI and machine learning' },
        { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' }
      ] }
    ],
    bottomRight: 'One claim, one source, or leave it out'
  },

  personalityCss: `
.ag-root.ag-atau .ag-hero h1 { letter-spacing: -0.019em; }
.ag-root.ag-atau .ag-capsule { border-left-width: 6px; border-radius: 5px; }
.ag-root.ag-atau .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-atau .ag-table caption { text-align: left; font-weight: 620; }
.ag-root.ag-atau .ag-band-head h3 { letter-spacing: -0.012em; }
.ag-root.ag-atau .ag-slots { gap: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'Australia, Years 5 to 10, and NSW. ACARA, Australian Curriculum v9, Technologies: Digital Technologies curriculum content F-6 and 7-10 (Word downloads): AC9TDI6P06 elaboration "verifying the correctness of AI-generated content against information known to be factually accurate; for example, comparing the output from a generative text model providing a biography of a local leader with the data published on their official website or other authoritative source"; AC9TDI8K01 elaboration "GPUs are more efficient at performing the mathematical calculations necessary for training generative AI than CPUs"; AC9TDIFK01 (content begins at Foundation); AC9TDI8P09 elaboration "such as Python, JavaScript or C#"; AC9TDI10P01 zero problem elaboration. NSW Department of Education, NSWEduChat page.',
    localProject: 'Claim-by-claim verification: a sample AI-style answer about the Australian Curriculum (written by us) split into 7 claims and checked against ACARA\'s Version 9.0 documents and the NSW Department of Education\'s NSWEduChat page: 4 supported, 2 contradicted (Digital Technologies starts at Foundation, not Year 3; Python is an example, not a requirement), 1 not supported by any source read. Lesson family: claim-by-claim verification.',
    requiredMentions: ['AC9TDI6P06', 'AC9TDI8K01', 'claim-by-claim', 'NSWEduChat', 'staff and students in Years 5 to 12', 'verifying the correctness of AI-generated content against information known to be factually accurate', 'GPUs are more efficient at performing the mathematical calculations necessary for training generative AI than CPUs', 'the secure, department-owned generative artificial intelligence (AI) tool'],
    sources: [
      { claim: 'ACARA, Australian Curriculum v9, Digital Technologies curriculum content F-6: AC9TDIFK01; AC9TDI6P06 elaboration on verifying AI-generated content.', url: 'https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-f-6-v9.docx' },
      { claim: 'ACARA, Australian Curriculum v9, Digital Technologies curriculum content 7-10: AC9TDI8K01 GPU elaboration; AC9TDI8P09 "such as Python, JavaScript or C#"; AC9TDI10P01 zero problem elaboration.', url: 'https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx' },
      { claim: 'NSW Department of Education, NSWEduChat: "NSW Department of Education staff and students in Years 5 to 12 now have access to NSWEduChat, the department\'s generative artificial intelligence tool"; "NSWEduChat is the secure, department-owned generative artificial intelligence (AI) tool".', url: 'https://education.nsw.gov.au/teaching-and-learning/education-for-a-changing-world/nsweduchat' },
      { claim: 'Anthropic, Consumer Terms of Service: minimum age 18 or the local age of consent to use the services, whichever is higher.', url: 'https://www.anthropic.com/legal/consumer-terms' }
    ],
    rejectedClaims: [
      'The NSWEduChat page\'s own description of the tool as the safest and most cost-effective option: a department claim we cannot test, so not repeated.',
      'Other states\' school AI tools: not read at their departments, so not named.',
      'OpenAI minimum age: its terms page returned 403 to curl\'s default agent and was not circumvented.',
      'Statistics on teen AI use in Australia: no primary source read raw; not quoted.',
      'Promised evening lesson hours: the hour is agreed in the free class (spec decision 7).'
    ]
  }
};
