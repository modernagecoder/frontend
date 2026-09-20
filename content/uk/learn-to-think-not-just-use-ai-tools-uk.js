'use strict';
// Learn to think, not just use AI tools (ag- door, national; UK cluster Phase 3, Think group).
// Source: "AI Skills for Life and Work: Rapid Evidence Review", published on gov.uk 28 January 2026,
// authored by Prof Rob Procter, Warwick University and the Alan Turing Institute, supported by DSIT
// and the R&D Science and Analysis Programme at DCMS, developed between November 2023 and March 2025.
// The report states that "Any primary research, subsequent findings or recommendations do not
// represent UK Government views or policy", which this page prints. Read raw from gov.uk on
// 20 September 2026. Verbatim material used:
//  - THE SPINE, Schuetz and Venkatesh (2020) as the review presents them, Table 1 "Broken and revised
//    assumptions about Information Systems": humans are users / bilateral human-AI relationship; the
//    developer defines the inputs / AI is aware of the environment; IT artifact use leads to consistent
//    outcomes / AI can be functionally inconsistent; the way the tool derives its outcomes is
//    comprehensible and can be verified / AI can be functionally not transparent; there is an
//    artificial interface / humans can be unaware of their AI use.
//  - And the line under it: "CCS [cognitive computer systems] are no longer simple tools and users are
//    no longer simple users. Rather, CCS and users form complex systems in which artifacts use users to
//    achieve their objectives."
//  - Long and Magerko (2020), the most frequently cited definition: AI literacy is "A set of
//    competencies that enables individuals to critically evaluate AI technologies; communicate and
//    collaborate effectively with AI; and use AI as a tool online, at home, and in the workplace."
//    Their framework has 17 competencies in five themes: What is AI? (1-4), What can AI do? (5-6),
//    How does AI work? (7-15), How should AI be used? (16), How do people perceive AI? (17). The
//    review notes the framework "is heavily weighted with respect to the first three themes".
//  - "AI literacy is broadly defined as the competencies to understand, evaluate and use AI systems
//    (Long and Magerko, 2021), while AI skills refer to the technical abilities linked to those
//    competencies."
//  - Schuetz and Venkatesh argue AI literacy "requires a conceptual reframing because AI systems are
//    adaptive and context aware, and so 'break' the assumptions that people have about digital
//    technologies".
//  - "With the average skills lifespan now under three years and likely to fall further, employers will
//    need to take increasing responsibility to create a learning culture."
//  - "current definitions of AI competencies and skills are neither as detailed and nor as mature as
//    those for digital competencies and skills."
// Spine: five assumptions that broke. Everything people know about using software - that you are the
// user, that you define the input, that the same input gives the same output, that you can check how it
// got there, and that you know when you are using it - appears in a DSIT-supported review as an
// assumption AI breaks. A tool you cannot assume any of that about does not need a better prompter. It
// needs a user who can think, and nine of the seventeen AI-literacy competencies in the most-cited
// framework are about how the thing works.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'guide', tag: 'THINK', blurb: 'Five assumptions about software that AI breaks, why nine of seventeen AI-literacy competencies are about how it works, and what that means for a learner.' },
  slug: 'learn-to-think-not-just-use-ai-tools-uk',
  code: 'ltt',
  accent: '#79152E',
  accentRationale: 'Learn to think, UK: a deep claret from the solver (8.70:1 on every paper tint), set apart from the oxblood and orchid on the other two Think pages',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Learn to think, not just use AI tools',
  title: 'Learn to Think, Not Just Use AI Tools | UK Classes',
  description: 'AI breaks five assumptions people hold about software. A review for DSIT explains why AI literacy is mostly about how it works, not prompting. First class free.',
  ogDescription: 'A government-supported review lists five assumptions about software that AI breaks, including that you always know when you are using it.',
  twitterDescription: 'Why AI literacy is mostly understanding, not prompting. Live UK classes, first one free.',
  pageName: 'Learn to Think, Not Just Use AI Tools',
  webPageDescription: 'What a DSIT-supported evidence review says about AI literacy, the assumptions AI breaks, and why understanding how these systems work matters more than prompting them.',
  courseDescription: 'Live online teaching for UK learners that builds understanding of how AI systems work, alongside the programming and data skills that make that understanding usable.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Learn to think, UK',
  navLinks: [
    { href: '#broken', label: 'Five broken assumptions' },
    { href: '#literacy', label: 'What AI literacy is' },
    { href: '#lasts', label: 'What does not expire' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United Kingdom &middot; AI literacy &middot; Ages 10 to 67',
  h1: 'Learn to think, not just use AI tools',
  lede: 'There is a table buried in a government-supported evidence review that deserves a much wider audience. It lists five things everybody assumes about software, and next to each one it says what AI does to that assumption. You are the user. You choose the inputs. The same input gives the same output. You can check how the answer was produced. You know when you are using it. All five, the review reports, are broken. The same paper quotes researchers describing systems in which "artifacts use users to achieve their objectives", which is a sentence worth sitting with. A tool you cannot assume any of those things about does not need a better prompter. It needs a user who understands what is happening, and that is a teachable thing.',
  secondaryCta: { href: '#literacy', label: 'What AI literacy means' },
  wa: 'Hello Modern Age Coders, I would like a free first class in the UK.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Understanding before tooling',
  spec: [
    ['The problem', 'AI breaks five software assumptions'],
    ['The evidence', 'A DSIT-supported review, 2026'],
    ['AI literacy', 'Understand, evaluate, then use'],
    ['Weighting', 'Nine of seventeen are how it works'],
    ['We teach', 'The how, with code to prove it'],
    ['Group', 'Five to ten at one level'],
    ['Or', 'One to one'],
    ['Start', 'One free lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Prompting is a skill with a short shelf life. Understanding is not. A rapid evidence review published for the Department for Science, Innovation and Technology sets out why: AI systems are adaptive and context aware, and so break the assumptions people hold about digital tools, including the assumption that you can verify how an answer was produced and the assumption that you always know when AI is involved. The most cited definition of AI literacy in that review puts critical evaluation first, and of its seventeen competencies, nine sit under the heading of how AI works. That is the part a class can actually teach, and the part that survives the next model release. We teach it alongside the programming and data work that makes it concrete, to learners from about ten to sixty-seven, in groups of five to ten or one to one. The first lesson is free, then USD 100 a month in a group or USD 150 one to one.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses that teach the how',
    lede: 'Understanding these systems means building small ones and breaking them. Each card opens a full syllabus.',
    items: [
      { course: 'ai-ml-masterclass-teens', code: 'THINK / 01', title: 'AI and Machine Learning for Teens', note: 'Models trained, tested and deliberately broken by the student, which is how the word training stops being a metaphor.' },
      { course: 'ai-literacy-for-kids-course', code: 'THINK / 02', title: 'AI Literacy for Kids', note: 'The same ideas for younger learners: what a model is, what it learnt from, and why it can be confidently wrong.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', code: 'THINK / 03', title: 'Data and AI for Non-Programmers', note: 'For adults who need to judge these systems at work without becoming developers.' }
    ]
  },

  sections: [
    {
      id: 'broken', tint: 'tint', eyebrow: 'Five broken assumptions',
      h2: 'What AI does to the way we expect software to behave',
      lede: 'From a rapid evidence review published on 28 January 2026, presenting a framework by Schuetz and Venkatesh. The left column is how people expect software to work. The right is what the researchers say AI does to it.',
      body: [
        { kind: 'table', caption: 'Broken and revised assumptions, as the review presents them', head: ['What we assume about software', 'What the researchers say about AI', 'Why it matters to a learner'], rows: [
          ['Humans are users', 'A bilateral human-AI relationship', 'You are not simply operating it. It is also responding to you, and shaping what you do next'],
          ['The developer defines the inputs', 'AI is aware of the environment', 'What goes in is wider than what you typed, and you did not choose all of it'],
          ['Using the tool leads to consistent outcomes', 'AI can be functionally inconsistent', 'The same question twice can produce two different answers, so one good answer proves nothing'],
          ['How the tool reached its outcome is comprehensible and can be verified', 'AI can be functionally not transparent', 'You may not be able to check the reasoning, which means you have to be able to check the result'],
          ['There is an artificial interface', 'Humans can be unaware of their AI use', 'Some of the time you will not know AI was involved at all']
        ] },
        { kind: 'capsule', mt: true, q: 'The sentence underneath the table', p: 'The review quotes Schuetz and Venkatesh directly: cognitive computer systems "are no longer simple tools and users are no longer simple users. Rather, CCS and users form complex systems in which artifacts use users to achieve their objectives."' },
        { kind: 'two', mt: true,
          leftH3: 'Take the third row seriously',
          left: [
            'Functional inconsistency is the one that catches students out. A tool gives a working answer on Monday and a subtly broken one on Thursday to the same question, and a learner who judged it by the Monday answer has no way of knowing.',
            'The only defence is being able to evaluate the output on its merits. That is not a prompting skill. It is subject knowledge, and it is the same subject knowledge an exam asks for.'
          ],
          rightH3: 'And the fourth',
          right: [
            'If you cannot see how a result was produced, verification has to move to the result itself. In programming this is unusually easy, because a program either does what you said it would or it does not, and running it settles the argument in seconds.',
            'That is why we make the prediction first and the run second. The prediction is the check that survives when the reasoning is invisible.'
          ] },
        { kind: 'p', html: 'The review is careful to say where these ideas come from, and so are we. Schuetz and Venkatesh, Long and Magerko and the other researchers named here are the review\'s citations rather than ours, and the review itself states that its findings and recommendations "do not represent UK Government views or policy".' },
        { kind: 'source', html: 'Source, read 20 September 2026: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/ai-skills-for-life-and-work-rapid-evidence-review/ai-skills-for-life-and-work-rapid-evidence-review" rel="noopener" target="_blank">AI Skills for Life and Work: Rapid Evidence Review</a>, published 28 January 2026, authored by Prof Rob Procter of Warwick University and the Alan Turing Institute, supported by the Department for Science, Innovation and Technology and by the R&amp;D Science and Analysis Programme at DCMS.' }
      ]
    },
    {
      id: 'literacy', tint: 'deep', eyebrow: 'What AI literacy is',
      h2: 'Nine of seventeen competencies are about how it works',
      lede: 'If AI literacy were mostly about using the tools, the frameworks would say so. The most cited one does not.',
      body: [
        { kind: 'capsule', q: 'The definition the review cites most', p: 'Long and Magerko define AI literacy as "a set of competencies that enables individuals to critically evaluate AI technologies; communicate and collaborate effectively with AI; and use AI as a tool online, at home, and in the workplace". Critical evaluation comes first in that sentence, and using it as a tool comes last.' },
        { kind: 'table', mt: true, caption: 'How the seventeen competencies are distributed', head: ['Theme', 'Competencies', 'What it asks of a learner'], rows: [
          ['What is AI?', 'Four', 'Telling AI apart from other digital technology, and knowing why the difference matters'],
          ['What can AI do?', 'Two', 'Recognising the kinds of problem these systems are suited to'],
          ['How does AI work?', 'Nine', 'Understanding the principal technical elements: the largest group by a distance'],
          ['How should AI be used?', 'One', 'The ethical questions raised by using it'],
          ['How do people perceive AI?', 'One', 'Common misconceptions, and how trustworthy it actually is']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'The shape is the argument', p: 'More than half the competencies sit under how it works. The review notes the framework is "heavily weighted with respect to the first three themes", which are all about understanding rather than operating.' },
          { h3: 'Prompting is not in the list', p: 'Not as a theme, and not as a competency. It is a technique for operating today\'s interfaces, and interfaces are the part that changes fastest.' },
          { h3: 'The field is young', p: 'The review says plainly that current definitions of AI competencies and skills are "neither as detailed and nor as mature as those for digital competencies and skills". Anyone selling a settled syllabus is ahead of the evidence.' }
        ] },
        { kind: 'p', html: 'The review draws a distinction worth carrying into any conversation about a course: AI literacy is the competence to understand, evaluate and use these systems, while AI skills are "the technical abilities linked to those competencies". A class that teaches only the technical abilities is teaching the smaller half, and a class that teaches only the vocabulary is teaching none of it.' },
        { kind: 'p', html: 'Our answer to that is to teach the understanding through the building. A child who trains a classifier on their own drawings learns what training means in a way no explanation achieves, and that is what the <a class="ag-inline-link" href="/ai-classes-for-kids-uk">AI classes for kids page</a> describes in detail.' }
      ]
    },
    {
      id: 'lasts', tint: '', eyebrow: 'What does not expire',
      h2: 'Under three years, and falling',
      lede: 'One line in the review\'s summary settles the argument about what is worth learning.',
      body: [
        { kind: 'two',
          leftH3: 'The half-life problem',
          left: [
            'The review reports that "the average skills lifespan now under three years and likely to fall further", and draws the conclusion that employers will have to build a learning culture because individual skills will not last.',
            'Apply that to anything taught as a set of steps for a particular interface. A course in prompting a named tool is a course with an expiry date somewhere inside the same three years, and possibly inside the same term.'
          ],
          rightH3: 'What survives it',
          right: [
            'Three things outlast a model release. Knowing what a system is doing, well enough to say why it produced that. Being able to evaluate an output against something other than how confident it sounds. And being able to build a small version yourself, which is the fastest way to acquire the first two.',
            'None of those are tied to a product, and all three are ordinary teachable content with a sequence.'
          ] },
        { kind: 'table', mt: true, caption: 'Two ways of spending the same year', head: ['Learning the tool', 'Learning the subject'], rows: [
          ['Techniques for a particular interface', 'How the class of system behaves, whatever the interface'],
          ['Obsolete when the product changes', 'Still true after the product changes'],
          ['Judged by whether the answer looked good', 'Judged by whether the answer is right'],
          ['Cannot be checked without the tool', 'Checkable by running, testing or reasoning'],
          ['Transfers to nothing', 'Transfers to the next system of the same kind']
        ] },
        { kind: 'p', html: 'None of this is an argument against using the tools. We use them in lessons, openly, once a learner can predict what the answer ought to be, and we keep a short record of what the tool contributed. The order is the whole point: understand, predict, then ask. A learner who asks first has outsourced the part that was supposed to be theirs.' },
        { kind: 'p', html: 'For students working towards UK qualifications there is a harder reason to get this order right, and it is set out on <a class="ag-inline-link" href="/understand-the-code-dont-copy-paste-uk">the page on understanding the code</a>: work reproduced from an AI tool cannot earn marks even when it is properly declared.' },
        { kind: 'p', html: 'And for anyone tempted by the broader promise, we would rather point at the evidence than the pitch. What coding does and does not do for general problem-solving is covered honestly on <a class="ag-inline-link" href="/problem-solving-skills-through-coding-uk">the problem-solving page</a>, including the claim we refuse to make.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Four stages of understanding a system',
    lede: 'Each stage is content a learner can be taught and then examined on, rather than a disposition they are said to acquire.',
    table: { caption: 'What understanding looks like at each stage', head: ['Stage', 'What the learner can do', 'What it protects them from'], rows: [
      ['1. Tell it apart', 'Say whether a product uses AI and what kind', 'Treating everything digital as if it were the same thing'],
      ['2. Know what it suits', 'Identify problems these systems are and are not good at', 'Asking a tool for something it structurally cannot supply'],
      ['3. Know how it works', 'Explain training, data and evaluation, having built a small model', 'Believing a confident answer because it sounds confident'],
      ['4. Judge it', 'Evaluate an output against evidence, and say what would change their mind', 'Functional inconsistency, and answers that cannot be verified']
    ] },
    left: { h3: 'Stage three is the one that sticks', ps: [
      'It is also the largest group of competencies in the framework the review cites, and the only one that really needs teaching rather than telling.',
      'Building a small model is the shortest route into it, whatever the learner\'s age.'
    ] },
    right: { h3: 'Adults start at three as often as children', ps: [
      'Plenty of professionals can already tell AI apart and know what it suits, and have never once seen what training actually involves.',
      'Where an adult starts is settled in the free lesson rather than assumed from a job title.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses that build understanding',
    lede: 'Grouped by how close a learner is to building the thing themselves. Syllabuses sit behind each card.',
    bands: [
      { num: 'I', h3: 'Seeing the machine', sub: 'What it is and what it is doing', courses: [
        { code: 'UK / LT1 / 01', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'Training, testing and breaking a model, with examples a child gathers themselves.' },
        { code: 'UK / LT1 / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking', blurb: 'Describing rules precisely, which is the foundation everything else sits on.' },
        { code: 'UK / LT1 / 03', slug: 'data-and-ai-analytics-for-non-programmers-course', title: 'Data and AI for non-programmers', blurb: 'The concepts and the vocabulary for adults who need to judge rather than build.' }
      ] },
      { num: 'II', h3: 'Building a small one', sub: 'Where understanding actually forms', courses: [
        { code: 'UK / LT2 / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Models trained from data and then pushed until they fail, on purpose.' },
        { code: 'UK / LT2 / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science with Python', blurb: 'Real datasets, where evaluation is a judgement you have to defend out loud.' },
        { code: 'UK / LT2 / 03', slug: 'python-complete-masterclass-teens', title: 'Python in full', blurb: 'The language all of the above is written in, taught by predicting before running.' }
      ] },
      { num: 'III', h3: 'Working alongside it', sub: 'For learners who will use these tools anyway', courses: [
        { code: 'UK / LT3 / 01', slug: 'vibe-coding-for-teens-python-web-ai-projects-course', title: 'Building with AI assistance', blurb: 'Reviewing, testing and recording what came from where, on projects of our own.' },
        { code: 'UK / LT3 / 02', slug: 'python-ai-automation-masterclass-college', title: 'Python and AI automation', blurb: 'Putting these systems to work on real tasks, with checks that catch them failing.' },
        { code: 'UK / LT3 / 03', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI, properly', blurb: 'What these models are doing underneath, for adults who need more than an interface tour.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons work',
    h2: 'Understand, predict, then ask',
    lede: 'India runs one clock all year, so the UK sits five and a half hours behind from October and four and a half from March. Slots are set in UK time and stay put.',
    slots: [
      { time: 'After school', l: 'The usual choice for school-age learners.' },
      { time: 'Evening', l: 'Sixth formers, and adults once work is finished.' },
      { time: 'Weekend morning', l: 'Longer, and better for building something end to end.' }
    ],
    cells: [
      { h3: 'The order is fixed', p: 'Understand the problem, predict the answer, then ask a tool. A learner who asks first has given away the part that was theirs.' },
      { h3: 'Build the small version', p: 'Nothing explains training like training something. Every learner ends up with a model they made and then broke.' },
      { h3: 'Evaluate out loud', p: 'A learner says why an answer is right or wrong and what would change their mind. That is the competency the frameworks put first.' },
      { h3: 'A record of tool use', p: 'What was suggested, what was kept and why. A minute a week, and it becomes automatic long before it matters.' },
      { h3: 'Groups by level', p: 'Five to ten learners at one stage, which is where disagreeing about an answer becomes possible.' },
      { h3: 'No product tours', p: 'We do not teach a named interface as a syllabus. Interfaces change faster than a term.' }
    ]
  },

  projectsH2: 'What our learners have built and broken',
  projectsLede: 'Four published projects. The <a class="ag-inline-link" href="/student-labs">student labs</a> page has the rest.',
  reviewsLede: 'From Google, word for word, unprompted and unpaid.',

  fees: {
    h2: 'What it costs',
    lede: 'One monthly fee, quoted in US dollars for everyone outside India. The free lesson comes first, and nothing is charged until a course and a slot are settled.',
    free: ['A proper lesson, not a sales call', 'A frank view of the right stage', 'Nothing needed but a phone number'],
    group: ['Five to ten learners at one stage', 'One teacher, kept across the course', 'Weekly written feedback on real work', 'A certificate at the end of a syllabus'],
    one: ['Just the learner and the teacher', 'Shaped around a specific target', 'Suits learners far from the middle of a group']
  },

  faq: {
    eyebrow: 'Questions about AI literacy',
    h2: 'What people ask about this',
    items: [
      { q: 'Is prompting a skill worth learning?', a: 'It is worth knowing, and it is not what AI literacy frameworks are made of. The most cited framework in the review has seventeen competencies across five themes, and prompting is not one of them.' },
      { q: 'What assumptions does AI break?', a: 'The review presents five: that humans are simply users, that the developer defines the inputs, that use leads to consistent outcomes, that the way a result was produced can be verified, and that there is always an obvious interface so you know when you are using it.' },
      { q: 'Why does inconsistency matter so much?', a: 'Because one good answer proves nothing. If the same question can produce different answers, a learner has to be able to judge the answer on its merits, which requires knowing the subject.' },
      { q: 'What is AI literacy, exactly?', a: 'The review defines it broadly as the competencies to understand, evaluate and use AI systems, and distinguishes that from AI skills, which are the technical abilities linked to those competencies.' },
      { q: 'How much of it is technical?', a: 'More than most people expect. Nine of the seventeen competencies in the framework sit under the question of how AI works.' },
      { q: 'Why not just teach the current tools?', a: 'Because the review reports the average skills lifespan is now under three years and likely to fall further. A course built on one interface expires with it.' },
      { q: 'Is this government policy?', a: 'No. The review was supported by DSIT and DCMS, and it states that its findings and recommendations do not represent UK Government views or policy. It reviews evidence.' },
      { q: 'What age is this suitable for?', a: 'From about ten upwards, and for adults at any age. Younger children start with what a model is and how it was trained, which is covered on our AI classes for kids page.' },
      { q: 'Do you let students use AI in lessons?', a: 'Yes, in a fixed order: understand the problem, predict the answer, then ask. And we keep a short record of what the tool contributed and what was kept.' },
      { q: 'What does it cost?', a: 'The first lesson is free. A group place is then USD 100 a month and one-to-one teaching USD 150, charged monthly with nothing taken in advance.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Read further',
    lede: 'Each of these takes one strand somewhere specific.',
    items: [
      { href: '/understand-the-code-dont-copy-paste-uk', label: 'Understand the code, do not copy-paste it', p: 'What the awarding bodies say, and why declared AI work earns nothing.' },
      { href: '/problem-solving-skills-through-coding-uk', label: 'Problem-solving skills through coding', p: 'The transfer claim the research does not support, refused in full.' },
      { href: '/ai-classes-for-kids-uk', label: 'AI classes for kids in the UK', p: 'What training a model actually looks like for a nine-year-old.' },
      { href: '/best-coding-classes-for-teens-uk', label: 'Coding classes for teens in the UK', p: 'What Ofcom found about British teenagers, AI and checking.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'The national page, and the index of every UK page we publish.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'The method in full, including where it does not suit a learner.' }
    ]
  },

  start: {
    h2: 'Try one lesson, free',
    lede: 'Leave a number and we will reply at a British hour you pick. The lesson is real teaching, and it finishes by naming the stage the learner is actually on.',
    readFirst: 'Would rather read? Each <a class="ag-inline-link" href="/courses">course page</a> publishes its syllabus, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> covers the method and its limits, and the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a> sets out the whole sequence.',
    note: 'WhatsApp gets the fastest reply and costs nothing from a British handset. The number is an Indian one, which we say here rather than leave you to spot.',
    formNote: 'No card, no contract. One answer from us, with a time.'
  },

  footer: {
    cols: [
      { h4: 'United Kingdom', links: [
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' },
        { href: '/coding-and-ai-classes-in-england', label: 'England' },
        { href: '/coding-and-ai-classes-in-wales', label: 'Wales' },
        { href: '/coding-and-ai-classes-in-northern-ireland', label: 'Northern Ireland' }
      ] },
      { h4: 'Thinking about AI', links: [
        { href: '/ai-classes-for-kids-uk', label: 'AI classes for kids' },
        { href: '/understand-the-code-dont-copy-paste-uk', label: 'Understand the code' },
        { href: '/problem-solving-skills-through-coding-uk', label: 'Problem solving' },
        { href: '/student-labs', label: 'Student labs' }
      ] }
    ],
    bottomRight: 'Live lessons for UK learners, on UK time'
  },

  personalityCss: `
.ag-root.ag-ltt .ag-hero h1 { letter-spacing: -0.026em; font-weight: 700; line-height: 1.04; }
.ag-root.ag-ltt .ag-capsule { border-left-width: 6px; padding-left: 1.25rem; }
.ag-root.ag-ltt .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-ltt .ag-table caption { text-align: left; font-weight: 700; letter-spacing: 0.015em; }
.ag-root.ag-ltt .ag-table th:first-child { width: 30%; }
.ag-root.ag-ltt .ag-table td:first-child { font-weight: 600; }
.ag-root.ag-ltt .ag-band-head h3 { letter-spacing: -0.01em; }
`,

  mustMention: ['functionally inconsistent', 'functionally not transparent', 'unaware of their AI use', 'artifacts use users', 'critically evaluate AI technologies', 'under three years', 'do not represent UK Government views or policy', '28 January 2026', 'seventeen', 'understand, evaluate and use'],

  dossier: {
    curriculumAuthority: 'United Kingdom, AI literacy. "AI Skills for Life and Work: Rapid Evidence Review", published on gov.uk 28 January 2026, authored by Prof Rob Procter of Warwick University and the Alan Turing Institute, supported by DSIT and the R&D Science and Analysis Programme at DCMS, developed between November 2023 and March 2025, and stating that "Any primary research, subsequent findings or recommendations do not represent UK Government views or policy". Read raw from gov.uk on 20 September 2026. Schuetz and Venkatesh (2020), Table 1, broken and revised assumptions about Information Systems: "Humans are users" becomes "Bilateral human-AI relationship"; "The developer defines the inputs" becomes "AI is aware of the environment"; "IT artifact use leads to consistent outcomes" becomes "AI can be functionally inconsistent"; "The way the tool derives its outcomes is comprehensible and can be verified" becomes "AI can be functionally not transparent"; "There is an artificial interface" becomes "Humans can be unaware of their AI use". Quoted from the same authors: cognitive computer systems "are no longer simple tools and users are no longer simple users. Rather, CCS and users form complex systems in which artifacts use users to achieve their objectives." The review also reports that Schuetz and Venkatesh argue AI literacy "requires a conceptual reframing because AI systems are adaptive and context aware". Definitions: "AI literacy is broadly defined as the competencies to understand, evaluate and use AI systems (Long and Magerko, 2021), while AI skills refer to the technical abilities linked to those competencies." Long and Magerko (2020): AI literacy is "A set of competencies that enables individuals to critically evaluate AI technologies; communicate and collaborate effectively with AI; and use AI as a tool online, at home, and in the workplace", with a framework of 17 competencies in five themes: What is AI? (competencies 1-4), What can AI do? (5-6), How does AI work? (7-15), How should AI be used? (16), How do people perceive AI? (17); the review notes the framework "is heavily weighted with respect to the first three themes". The review states that "current definitions of AI competencies and skills are neither as detailed and nor as mature as those for digital competencies and skills", and that "With the average skills lifespan now under three years and likely to fall further, employers will need to take increasing responsibility to create a learning culture".',
    localProject: 'Five assumptions that broke. A DSIT-supported evidence review carries a table listing everything people assume about software beside what AI does to each assumption: you are the user, you define the input, the same input gives the same output, you can verify how the answer was produced, and there is an interface so you know when you are using it. All five are reported as broken, and the researchers quoted describe systems "in which artifacts use users to achieve their objectives". The page treats the third and fourth rows as the ones that decide how to learn: functional inconsistency means one good answer proves nothing, and functional opacity means verification has to move to the result, which in programming is unusually cheap because running it settles the question. From there the page uses the distribution of the most-cited AI-literacy framework as its second argument: nine of seventeen competencies sit under how AI works, and prompting is not a competency at all. The third section turns on the review\'s line that the average skills lifespan is now under three years, and contrasts learning a tool with learning the subject in a five-row table. Attribution is explicit throughout, including that the review does not represent government policy. Lesson family: a published framework whose shape, rather than its content, makes the argument.',
    requiredMentions: ['functionally inconsistent', 'functionally not transparent', 'artifacts use users', 'under three years', '28 January 2026'],
    sources: [
      { claim: 'AI Skills for Life and Work: Rapid Evidence Review, published 28 January 2026: the five broken assumptions from Schuetz and Venkatesh, the cognitive computer systems quotation, the Long and Magerko definition and its seventeen competencies in five themes, the weighting note, the immaturity of current definitions, the average skills lifespan, and the statement that findings do not represent UK Government views or policy.', url: 'https://www.gov.uk/government/publications/ai-skills-for-life-and-work-rapid-evidence-review/ai-skills-for-life-and-work-rapid-evidence-review' }
    ],
    rejectedClaims: [
      'That the review is UK Government policy: it states the opposite, and the page prints that statement.',
      'Attribution of the cited findings to the Government or to the author: Schuetz and Venkatesh and Long and Magerko are the review\'s citations, and the page says so.',
      'The content of any individual competency among the seventeen: the review lists them in an appendix not quoted here, so only the five themes and their counts are used.',
      'Any figure for AI skills gaps, labour demand or regional inequality from the same review: not used here, to keep this page distinct from the adults page.',
      'That learning to code makes someone AI literate: the page argues understanding is teachable through building, not that one equals the other.',
      'Any claim about specific AI products, their accuracy or their safety: none was read at a primary source for this build.'
    ]
  }
};
