'use strict';
// Problem-solving skills through coding, UK (ag- door, national; UK cluster Phase 3, Think group).
// Source: Ofsted, "Research review series: computing", published 16 May 2022, applies to England,
// read raw from gov.uk on 20 September 2026. Verbatim:
//  - THE SPINE: "in their discussion of the role of CT, Tedre and Denning point out that we should be
//    cautious about the scope of CT and avoid exaggerated claims that it develops problem-solving
//    skills that are transferrable to other domains. Learning computing as a subject and the knowledge
//    related to CT is a worthwhile pursuit in itself, and does not need to be justified with tenuous
//    claims about broader benefits."
//  - Barr and Stephenson: CT is, in part, an "approach to solving problems in a way that can be
//    implemented with a computer".
//  - Grover and Pea's list of concepts and practices: logic and logical thinking; algorithms and
//    algorithmic thinking; patterns and pattern recognition; abstraction and generalisation;
//    evaluation; automation.
//  - "The above list sets out areas of problem-solving in computing; however, it does not describe how
//    pupils become better at problem-solving in these areas. These areas do not develop through a
//    'learned skill'; Tricot and Sweller argue that teaching generic skills does not work and 'learned
//    skill, especially problem-solving skill, derives primarily from the accumulation of a large store
//    of domain-specific knowledge stored in long-term memory'."
//  - "CT can be seen as difficult to teach, which may be because there is no clear definition of it, or
//    a belief that it is a generic skill. Research shows that it is possible to design a curriculum to
//    teach CT. This requires a structured curriculum, with well-defined content, instruction and
//    activities, and suitable formative and summative assessment."
//  - Features of high-quality computing education include: "The curriculum sets out the knowledge
//    pupils need to build a mental model of program execution" and "Development of CT and
//    problem-solving is underpinned by domain-specific knowledge that is identified and sequenced in
//    the curriculum."
//  - The notional machine: Du Boulay, "Learning to program is like learning to use a toy construction
//    set, such as Meccano, to build a mechanism, but as if inside a darkened room with only very
//    limited ways of seeing the innards of one's creation working"; Sorva, pupils "commonly lack a
//    viable model of program execution. In other words they fail to understand the notional machine
//    they are learning to control"; "A notional machine is an abstracted mental model of how a program
//    will be executed within a programming language. Put simply, it is the knowledge of what a program
//    will do when it is run." The national curriculum expects pupils to "use logical reasoning to
//    predict the behaviour of simple programs".
//  - Worked examples: Tuovinen and Sweller; Skudder and Luxton-Reilly on reduced effectiveness as
//    expertise grows; "The use of faded worked examples, where steps are removed from worked examples
//    over time, can be sequenced in the curriculum as pupils develop expertise"; labelled subgoals,
//    which "help pupils see past the surface-level features in problems"; Margulieux and others found
//    novices using subgoals "were able to complete more steps, more quickly"; subgoals are "less useful
//    for pupils with substantial prior knowledge".
//  - Block languages encourage two habits "at odds with the accepted practice of computer science": a
//    bottom-up focus on blocks rather than algorithm design, and a fine-grained approach in which
//    pupils avoid "the use of the most important structures: conditional execution and bounded loops".
// Spine: the transfer claim we will not make. Every competitor sells coding as general-purpose
// problem-solving training. Ofsted's own review of the research says to avoid exactly that claim, and
// says the subject does not need it. The page refuses the claim on the front, then spends the rest of
// its length on what actually does get a learner better at solving problems in this domain.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'guide', tag: 'THINK', blurb: 'Ofsted\'s research review warns against the transfer claim every coding school makes. This page refuses it, then explains what actually works.' },
  slug: 'problem-solving-skills-through-coding-uk',
  code: 'psc',
  accent: '#883A88',
  accentRationale: 'Problem solving, UK: an orchid purple from the solver (5.67:1 on every paper tint) with the widest separation in the whole cluster at dE 13.7',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Problem-solving skills through coding',
  title: 'Problem-Solving Skills Through Coding | What Research Says',
  description: 'Does coding teach general problem-solving? Ofsted\'s research review says be cautious. What it does build, how it is taught, and why we say so. First class free.',
  ogDescription: 'Ofsted\'s computing research review warns against claiming coding builds transferable problem-solving skills. We are not going to make that claim.',
  twitterDescription: 'What coding really does for problem-solving, according to Ofsted\'s own research review.',
  pageName: 'Problem-Solving Skills Through Coding',
  webPageDescription: 'What the research says about computational thinking, transfer and problem-solving in computing, and how domain-specific knowledge is actually built in a class.',
  courseDescription: 'Live online coding teaching for UK learners built on sequenced domain knowledge, worked examples and prediction, rather than on claims about transferable skills.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Problem solving through coding',
  navLinks: [
    { href: '#claim', label: 'The claim we refuse' },
    { href: '#real', label: 'What it does build' },
    { href: '#method', label: 'How it is taught' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United Kingdom &middot; What the research says &middot; All ages',
  h1: 'Problem-solving skills through coding',
  lede: 'Almost every coding school in Britain sells the same promise: learn to code and your child will become a better problem solver in general, at maths, at school, at life. Ofsted\'s own review of the research on computing education says to be careful with exactly that claim. It cites work arguing that we should "avoid exaggerated claims that it develops problem-solving skills that are transferrable to other domains", and then makes a point worth putting on a poster: the subject "does not need to be justified with tenuous claims about broader benefits". We are not going to make the claim either. What follows is what coding genuinely does build, what the research says actually makes someone better at it, and how that shapes a lesson.',
  secondaryCta: { href: '#real', label: 'What it does build' },
  wa: 'Hello Modern Age Coders, I would like a free first coding class in the UK.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Sequenced knowledge, not generic skills',
  spec: [
    ['The claim', 'Transfer to other subjects'],
    ['The research', 'Be cautious about it'],
    ['What works', 'Domain-specific knowledge'],
    ['How', 'Worked examples, then faded'],
    ['Test', 'Predict the output first'],
    ['Group', 'Five to ten at one level'],
    ['Or', 'One to one'],
    ['Start', 'One free lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Coding is worth learning on its own terms, and it does not need a transfer claim propping it up. Ofsted\'s research review on computing cites the argument that we should avoid exaggerated claims about problem-solving skills transferring to other domains, and says the subject is a worthwhile pursuit in itself. What the same review does say is that problem-solving skill "derives primarily from the accumulation of a large store of domain-specific knowledge stored in long-term memory". In other words, a learner gets better at solving computing problems by knowing more computing, sequenced properly, not by being trained in a generic skill. That is how we teach: worked examples that fade, labelled steps, and a prediction before every program runs. Groups of five to ten at one level, or one to one. The first lesson is free, then USD 100 a month in a group or USD 150 one to one.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses built on sequenced knowledge',
    lede: 'Each one has a defined order of content rather than a promise about general benefits. Cards open the full syllabus.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'SOLVE / 01', title: 'Problem Solving and Computational Thinking', note: 'Decomposition, patterns and describing rules aloud, taught as content with a sequence rather than as a mindset.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'SOLVE / 02', title: 'Algorithms and Data Structures', note: 'The clearest example of domain knowledge doing the work: you solve these by knowing the structures, not by thinking harder.' },
      { course: 'python-complete-masterclass-teens', code: 'SOLVE / 03', title: 'Python for Teens', note: 'The language in which most of that knowledge gets built, taught by predicting output before running anything.' }
    ]
  },

  sections: [
    {
      id: 'claim', tint: 'tint', eyebrow: 'The claim we refuse',
      h2: 'What Ofsted\'s review actually says about transfer',
      lede: 'From Ofsted\'s research review series on computing, published 16 May 2022 and applying to England. It reviews the research literature rather than setting policy, which is what makes it useful here.',
      body: [
        { kind: 'capsule', q: 'The passage in full', p: 'Discussing the role of computational thinking, the review notes that "Tedre and Denning point out that we should be cautious about the scope of CT and avoid exaggerated claims that it develops problem-solving skills that are transferrable to other domains. Learning computing as a subject and the knowledge related to CT is a worthwhile pursuit in itself, and does not need to be justified with tenuous claims about broader benefits."' },
        { kind: 'two', mt: true,
          leftH3: 'Why this matters to a parent',
          left: [
            'It matters because the transfer claim is the one most often used to sell lessons. If coding made children better at everything, it would be worth paying for whatever else was true about the teaching, and that is a comfortable position for a provider to be in.',
            'Take the claim away and the teaching has to justify itself on what it actually delivers, which is a much harder and more honest sell.'
          ],
          rightH3: 'What it does not mean',
          right: [
            'It does not mean computing is not worth learning. The review says the opposite in the same breath: a worthwhile pursuit in itself. It means the reason to learn it is the subject, not a side effect.',
            'Nor does it mean nothing transfers ever. It means the evidence for broad transfer is weaker than the marketing implies, and that a school which needs the claim to be true should be treated carefully.'
          ] },
        { kind: 'p', html: 'There is a second reason the review is worth reading if you are choosing a class. It notes that computational thinking "can be seen as difficult to teach, which may be because there is no clear definition of it, or a belief that it is a generic skill", and then says research shows it is possible to teach, but that this "requires a structured curriculum, with well-defined content, instruction and activities, and suitable formative and summative assessment". A provider who cannot show you the content and the order is describing a mindset, not a course.' },
        { kind: 'source', html: 'Source, read 20 September 2026: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/research-review-series-computing/research-review-series-computing" rel="noopener" target="_blank">Ofsted, Research review series: computing</a>, published 16 May 2022, applies to England. Quotations are the review\'s summaries of the literature it cites, and the named researchers are its citations, not ours.' }
      ]
    },
    {
      id: 'real', tint: 'deep', eyebrow: 'What it does build',
      h2: 'Six areas, and the thing underneath all of them',
      lede: 'The review sets out what problem-solving in computing consists of, and then makes a point about how anyone actually gets better at it.',
      body: [
        { kind: 'table', caption: 'Concepts and practices the review lists', head: ['Area', 'What a learner is actually doing'], rows: [
          ['Logic and logical thinking', 'Working out what must follow, and what a condition really tests'],
          ['Algorithms and algorithmic thinking', 'Describing a method precisely enough that something else can carry it out'],
          ['Patterns and pattern recognition', 'Noticing that this problem is the last one wearing different clothes'],
          ['Abstraction and generalisation', 'Deciding what to ignore, which is the hardest of the six'],
          ['Evaluation', 'Judging whether a solution is any good, not just whether it runs'],
          ['Automation', 'Handing the repetitive part to a machine, correctly']
        ] },
        { kind: 'capsule', mt: true, q: 'And then the important sentence', p: 'The review says the list "does not describe how pupils become better at problem-solving in these areas. These areas do not develop through a \'learned skill\'", and cites Tricot and Sweller: teaching generic skills does not work, and "learned skill, especially problem-solving skill, derives primarily from the accumulation of a large store of domain-specific knowledge stored in long-term memory".' },
        { kind: 'three', mt: true, cells: [
          { h3: 'What that rules out', p: 'Lessons built around thinking skills in the abstract. You cannot practise abstraction in general; you abstract something, and knowing the something is most of the work.' },
          { h3: 'What it rules in', p: 'A sequence. Specific content, in a deliberate order, revisited until it is in long-term memory rather than in this week\'s notes.' },
          { h3: 'How you can tell', p: 'Ask any provider what a learner will know in twelve weeks that they do not know now. A sequenced course answers in a list. A mindset course answers with adjectives.' }
        ] },
        { kind: 'p', html: 'The review is equally specific about one piece of knowledge that underpins the rest. Among the features of high-quality computing education it lists, the curriculum should set out "the knowledge pupils need to build a mental model of program execution". That model has a name in the literature, and it is the single most useful idea a parent can take from any of this.' },
        { kind: 'two', mt: true,
          leftH3: 'The notional machine',
          left: [
            'The review quotes Sorva: pupils "commonly lack a viable model of program execution. In other words they fail to understand the notional machine they are learning to control". It then defines it plainly: "A notional machine is an abstracted mental model of how a program will be executed within a programming language. Put simply, it is the knowledge of what a program will do when it is run."',
            'Du Boulay\'s image for learning without one is the best line in the document. It is like building with Meccano "inside a darkened room with only very limited ways of seeing the innards of one\'s creation working".'
          ],
          rightH3: 'Which is why we predict',
          right: [
            'The statutory curriculum in England already asks for this, expecting pupils to "use logical reasoning to predict the behaviour of simple programs". A prediction is a direct readout of the learner\'s notional machine: it says what they believe the machine will do.',
            'So every lesson we run asks for the prediction before the run. When the prediction is wrong, the gap is the lesson, and it is a gap in a specific piece of knowledge rather than in a general capacity.'
          ] }
      ]
    },
    {
      id: 'method', tint: '', eyebrow: 'How it is taught',
      h2: 'Worked examples that fade, and labelled steps',
      lede: 'The review is unusually concrete about instruction for novices. These are the techniques it describes, and they are what a lesson here is built from.',
      body: [
        { kind: 'table', caption: 'What the review says about teaching novices', head: ['Technique', 'What the research found', 'What we do with it'], rows: [
          ['Worked examples', 'Novices benefit substantially; the benefit shrinks as expertise grows', 'Heavy use early, then withdrawn deliberately rather than by accident'],
          ['Faded worked examples', 'Steps removed over time as pupils develop expertise, sequenced through the curriculum', 'Each week a little more of the example is missing, and the learner fills it'],
          ['Labelled subgoals', 'Help novices tackle parts of a larger problem and see past surface features; novices completed more steps, more quickly', 'Problems handed over already broken into named parts, until learners break them up themselves'],
          ['Subgoals with experts', 'Less useful for pupils with substantial prior knowledge', 'Dropped once a learner is structuring problems without being asked'],
          ['Cognitive load', 'Computing content has intrinsically high demands on short-term memory', 'Short programs, one new idea at a time, nothing clever for its own sake']
        ] },
        { kind: 'p', html: 'Two things follow from that table that most classes get wrong in opposite directions. Beginners are given open-ended projects when they need worked examples, and confident learners are still being given worked examples when the research says the benefit has gone. Both waste time, and the second is the more common in a class that never regroups people by level.' },
        { kind: 'two', mt: true,
          leftH3: 'A note on block languages',
          left: [
            'The review is careful here, and so are we. Block-based languages genuinely help with syntax, but it cites research finding two habits they encourage that are "at odds with the accepted practice of computer science": a bottom-up focus on the blocks rather than on designing the algorithm, and a fine-grained style in which pupils avoid "the use of the most important structures: conditional execution and bounded loops".',
            'The risk is that those habits travel with a pupil into a typed language. Blocks are a good beginning and a bad plateau.'
          ],
          rightH3: 'Which is why the crossing is planned',
          right: [
            'We move learners from blocks to typed code deliberately, at the point where the block habits would start to cost them, rather than when a school year says so.',
            'What that looks like in practice is on the <a class="ag-inline-link" href="/best-python-classes-online-uk">Python classes page</a>, and the order of topics well past that point is on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
          ] },
        { kind: 'p', html: 'None of this is exotic. It is ordinary, sequenced teaching by somebody who knows the subject, which is unglamorous next to a promise that coding will improve a child at everything. It has the advantage of being what the evidence supports.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Knowledge in an order, not a mindset',
    lede: 'Each step names what a learner knows at the end of it. That is the test the research implies, so it is the test we publish.',
    table: { caption: 'What a learner knows at each stage', head: ['Stage', 'Knowledge gained', 'How you can tell'], rows: [
      ['1. Sequence and repetition', 'That order matters and that repetition can be described rather than repeated', 'Predicts the output of a short program before it runs, correctly, most of the time'],
      ['2. Decisions and data', 'Conditions, lists and how a value changes as a program executes', 'Traces a program by hand and says what each variable holds at each step'],
      ['3. Structure', 'Functions, dictionaries, files, and when each is the right choice', 'Chooses a structure before writing the loop, and can say why'],
      ['4. Real problems', 'Algorithms, complexity and the standard solutions to recurring problems', 'Recognises a new problem as an old one and reaches for the right method']
    ] },
    left: { h3: 'Nothing here is a general skill', ps: [
      'Every row names content. That is deliberate: the research says skill comes from accumulated domain knowledge, so a ladder made of adjectives would be a ladder made of nothing.',
      'A learner who owns a stage does not repeat it. Placement is by evidence in their code, settled in the free lesson.'
    ] },
    right: { h3: 'Where it goes next', ps: [
      'Stage four is where competitions start being genuinely enjoyable rather than bruising; the <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a> lists what is open.',
      'For students well past it, the <a class="ag-inline-link" href="/british-informatics-olympiad-preparation">British Informatics Olympiad</a> is the national round that rewards exactly this kind of accumulated knowledge.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses with a published order of content',
    lede: 'Grouped by stage. Every syllabus lists what is taught and in what order, which is the point.',
    bands: [
      { num: 'I', h3: 'Building the model', sub: 'Knowing what a program will do', courses: [
        { code: 'UK / PS1 / 01', slug: 'scratch-programming-complete-course', title: 'Scratch, in sequence', blurb: 'Blocks used to build the model of execution, then left behind on purpose.' },
        { code: 'UK / PS1 / 02', slug: 'python-ai-kids-masterclass', title: 'First Python', blurb: 'Typed code with short programs, so that a prediction is possible before every run.' },
        { code: 'UK / PS1 / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking', blurb: 'Decomposition and pattern-finding taught as content, with worked examples that fade.' }
      ] },
      { num: 'II', h3: 'Accumulating knowledge', sub: 'The store the research is about', courses: [
        { code: 'UK / PS2 / 01', slug: 'python-complete-masterclass-teens', title: 'Python in full', blurb: 'Every core construct, revisited until it sits in long-term memory rather than in notes.' },
        { code: 'UK / PS2 / 02', slug: 'gcse-computer-science-course', title: 'GCSE Computer Science', blurb: 'Theory and programming to the board a school uses, sequenced across two years.' },
        { code: 'UK / PS2 / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data science with Python', blurb: 'Real datasets, where evaluation stops being abstract and becomes a judgement you defend.' }
      ] },
      { num: 'III', h3: 'Using it on hard problems', sub: 'Where the store pays off', courses: [
        { code: 'UK / PS3 / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms and data structures', blurb: 'The standard solutions to recurring problems, worked on paper before any code.' },
        { code: 'UK / PS3 / 02', slug: 'competitive-programming-masterclass-college', title: 'Competitive programming', blurb: 'Speed under constraint, which is only possible once the knowledge is automatic.' },
        { code: 'UK / PS3 / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'Models trained and broken, with evaluation as the main event rather than an afterthought.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons work',
    h2: 'A prediction, a run, and a reason',
    lede: 'Teachers work from India, where the clock never shifts, leaving the UK five and a half hours behind from October and four and a half from March. Pick a slot in UK time and it stays yours.',
    slots: [
      { time: 'After school', l: 'Where most school-age learners settle.' },
      { time: 'Evening', l: 'Sixth formers, and adults once the day is done.' },
      { time: 'Weekend morning', l: 'Longer sessions for work that should be finished in one sitting.' }
    ],
    cells: [
      { h3: 'Predict, then run', p: 'Nothing executes until the learner has said what it will do. The answer is a direct reading of what they actually understand.' },
      { h3: 'Examples that fade', p: 'Worked examples early, with steps removed week by week, which is what the research says to do as expertise grows.' },
      { h3: 'Named subgoals', p: 'Problems arrive broken into labelled parts, until the learner starts breaking them up unprompted.' },
      { h3: 'One new idea at a time', p: 'Computing content is heavy on short-term memory, so lessons add one thing and revisit three.' },
      { h3: 'Groups by level', p: 'Five to ten at one stage, which is the only way the fading actually fits the learner in front of you.' },
      { h3: 'No mindset language', p: 'We talk about what a learner knows and can build. Nobody in a lesson is described as having become a better thinker.' }
    ]
  },

  projectsH2: 'Problems our learners have solved',
  projectsLede: 'Four published projects. The <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'Lifted from Google word for word, by families who were never asked.',

  fees: {
    h2: 'What it costs',
    lede: 'A single monthly figure, priced in US dollars outside India. The free lesson comes first and nothing is charged until a course and a slot are agreed.',
    free: ['A proper lesson, not a sales call', 'A straight answer about the right stage', 'Only a phone number needed'],
    group: ['Five to ten learners at one stage', 'One teacher for the whole course', 'Written feedback on the learner\'s code each week', 'A certificate at the end of a syllabus'],
    one: ['A teacher working with one learner', 'Useful when a learner is far from the middle of a group', 'Arranged around exam dates if there are any']
  },

  faq: {
    eyebrow: 'Questions about coding and problem solving',
    h2: 'What parents ask about this',
    items: [
      { q: 'Does coding make my child better at maths?', a: 'We are not going to claim it does. Ofsted\'s research review cites work advising caution about claims that computational thinking develops problem-solving skills transferrable to other domains, and says computing is worth learning in itself.' },
      { q: 'So why learn it at all?', a: 'Because the subject is worth knowing, because it is assessed at every stage of UK education, and because the ability to build working things is useful on its own terms. None of that needs a transfer claim.' },
      { q: 'What is computational thinking, then?', a: 'The review cites a definition of it as, in part, an approach to solving problems in a way that can be implemented with a computer, and lists six areas: logic, algorithms, patterns, abstraction, evaluation and automation.' },
      { q: 'How does someone get better at it?', a: 'By accumulating domain knowledge. The review cites the argument that problem-solving skill derives primarily from a large store of domain-specific knowledge in long-term memory, rather than from training a generic skill.' },
      { q: 'What is a notional machine?', a: 'The review defines it as an abstracted mental model of how a program will be executed, or put simply, the knowledge of what a program will do when it is run. Pupils who lack one tend to develop misconceptions.' },
      { q: 'Why do you ask for a prediction before running code?', a: 'Because the prediction is a readout of the notional machine, and because the statutory curriculum in England asks pupils to use logical reasoning to predict the behaviour of simple programs.' },
      { q: 'Is Scratch a problem?', a: 'No, but it is a beginning rather than a destination. The review cites research finding that block languages can encourage habits at odds with accepted computer science practice, including avoiding conditional execution and bounded loops.' },
      { q: 'How do I judge a coding class?', a: 'Ask what a learner will know in twelve weeks that they do not know now. A sequenced course answers with a list of content. A course built on mindset answers with adjectives.' },
      { q: 'Do you teach to the UK curriculum?', a: 'We teach to whichever qualification a learner is working towards, across the English boards, Scottish Nationals and Highers, WJEC and CCEA, and we use each system\'s own vocabulary.' },
      { q: 'What does it cost?', a: 'The opening lesson is free. After that a group place is USD 100 a month and a teacher to yourself is USD 150, charged monthly with nothing taken up front.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Read further',
    lede: 'Each page takes one strand of this somewhere specific.',
    items: [
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'The national page, and the index of every UK page we publish.' },
      { href: '/understand-the-code-dont-copy-paste-uk', label: 'Understand the code, do not copy-paste it', p: 'What the awarding bodies say about AI, and why declared work earns nothing.' },
      { href: '/best-python-classes-online-uk', label: 'Python classes online in the UK', p: 'The examined subset, and the work that sits above it.' },
      { href: '/coding-and-ai-classes-in-england', label: 'Coding and AI classes in England', p: 'What the computing curriculum requires and who has to follow it.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'The method set out in full, including where it does not suit a learner.' },
      { href: '/coding-roadmap', label: 'The coding roadmap', p: 'The sequence of topics, published in order.' }
    ]
  },

  start: {
    h2: 'Try one lesson, free',
    lede: 'Send a number and we will reply at a British hour that suits you. The lesson is real teaching, and it ends by naming the stage the learner is actually on.',
    readFirst: 'Prefer to read? Every <a class="ag-inline-link" href="/courses">course page</a> publishes its syllabus in order, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains the method and its limits, and the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a> lays out the whole sequence.',
    note: 'WhatsApp is the fastest route and costs nothing from a British mobile. The number belongs to our office in India, which we would rather state than have you work out.',
    formNote: 'Nothing to pay, nothing to sign. We answer once, with a time.'
  },

  footer: {
    cols: [
      { h4: 'United Kingdom', links: [
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' },
        { href: '/coding-and-ai-classes-in-england', label: 'England' },
        { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
        { href: '/coding-and-ai-classes-in-wales', label: 'Wales' }
      ] },
      { h4: 'How we think', links: [
        { href: '/understand-the-code-dont-copy-paste-uk', label: 'Understand the code' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/student-labs', label: 'Student labs' }
      ] }
    ],
    bottomRight: 'Live lessons for UK learners, on UK time'
  },

  personalityCss: `
.ag-root.ag-psc .ag-hero h1 { letter-spacing: -0.03em; font-weight: 650; }
.ag-root.ag-psc .ag-capsule { border-left-width: 5px; border-bottom: 2px solid var(--ag-accent); }
.ag-root.ag-psc .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-psc .ag-table caption { text-align: left; font-weight: 650; font-style: italic; }
.ag-root.ag-psc .ag-table th { letter-spacing: 0.02em; }
.ag-root.ag-psc .ag-table td:first-child { font-weight: 650; }
.ag-root.ag-psc .ag-band-head h3 { letter-spacing: -0.008em; }
`,

  mustMention: ['transferrable to other domains', 'worthwhile pursuit in itself', 'domain-specific knowledge', 'notional machine', 'faded worked examples', 'labelled subgoals', 'predict the behaviour of simple programs', 'conditional execution and bounded loops', '16 May 2022', 'abstraction and generalisation'],

  dossier: {
    curriculumAuthority: 'United Kingdom, problem solving. Ofsted, "Research review series: computing", published 16 May 2022, applies to England, read raw from gov.uk on 20 September 2026. Verbatim: "in their discussion of the role of CT, Tedre and Denning point out that we should be cautious about the scope of CT and avoid exaggerated claims that it develops problem-solving skills that are transferrable to other domains. Learning computing as a subject and the knowledge related to CT is a worthwhile pursuit in itself, and does not need to be justified with tenuous claims about broader benefits." Barr and Stephenson: CT is, in part, an "approach to solving problems in a way that can be implemented with a computer". Grover and Pea list logic and logical thinking, algorithms and algorithmic thinking, patterns and pattern recognition, abstraction and generalisation, evaluation, automation. "The above list sets out areas of problem-solving in computing; however, it does not describe how pupils become better at problem-solving in these areas. These areas do not develop through a \'learned skill\'; Tricot and Sweller argue that teaching generic skills does not work and \'learned skill, especially problem-solving skill, derives primarily from the accumulation of a large store of domain-specific knowledge stored in long-term memory\'." "CT can be seen as difficult to teach, which may be because there is no clear definition of it, or a belief that it is a generic skill. Research shows that it is possible to design a curriculum to teach CT. This requires a structured curriculum, with well-defined content, instruction and activities, and suitable formative and summative assessment." Features of high-quality computing education include "The curriculum sets out the knowledge pupils need to build a mental model of program execution" and "Development of CT and problem-solving is underpinned by domain-specific knowledge that is identified and sequenced in the curriculum." Notional machine: Du Boulay, "Learning to program is like learning to use a toy construction set, such as Meccano, to build a mechanism, but as if inside a darkened room with only very limited ways of seeing the innards of one\'s creation working"; Sorva, pupils "commonly lack a viable model of program execution. In other words they fail to understand the notional machine they are learning to control"; "A notional machine is an abstracted mental model of how a program will be executed within a programming language. Put simply, it is the knowledge of what a program will do when it is run"; the national curriculum expects pupils to "use logical reasoning to predict the behaviour of simple programs". Instruction: worked examples benefit novices substantially with reduced effectiveness as expertise develops; "The use of faded worked examples, where steps are removed from worked examples over time, can be sequenced in the curriculum as pupils develop expertise"; labelled subgoals help novices "see past the surface-level features in problems", and novices using them "were able to complete more steps, more quickly", while being "less useful for pupils with substantial prior knowledge"; computing content has intrinsically high cognitive load. Block languages encourage two habits "at odds with the accepted practice of computer science": a bottom-up focus on blocks rather than algorithm design, and a fine-grained approach in which pupils avoid "the use of the most important structures: conditional execution and bounded loops".',
    localProject: 'The transfer claim we will not make. Every coding school in Britain sells general-purpose problem solving; Ofsted\'s own review of the research cites work advising caution about exactly that claim and adds that computing "does not need to be justified with tenuous claims about broader benefits". The page refuses the claim in its opening paragraph, which is the commercial opposite of what a lead page normally does, then spends its length on what the same review says does work: not a generic skill but "the accumulation of a large store of domain-specific knowledge stored in long-term memory". From that follow the notional machine, defined by the review as the knowledge of what a program will do when it is run, and the statutory expectation that pupils predict program behaviour, which together justify the predict-before-you-run habit as a readout of what a learner actually believes. The teaching section converts the review\'s instructional findings into a table of what we do with each one, including fading worked examples deliberately and dropping subgoals once a learner structures problems unprompted. It also handles block languages honestly: a good beginning and a bad plateau. Lesson family: a marketing claim the evidence does not support, refused on the page that would most benefit from making it.',
    requiredMentions: ['transferrable to other domains', 'worthwhile pursuit in itself', 'domain-specific knowledge', 'notional machine', '16 May 2022'],
    sources: [
      { claim: 'Ofsted, Research review series: computing, published 16 May 2022: the caution about transfer claims, the definition and six areas of computational thinking, the domain-specific knowledge argument, the features of high-quality computing education, the notional machine, worked examples, faded worked examples, labelled subgoals, cognitive load, and the habits block languages encourage.', url: 'https://www.gov.uk/government/publications/research-review-series-computing/research-review-series-computing' }
    ],
    rejectedClaims: [
      'That coding improves maths, school performance or general reasoning: the review advises caution about precisely this, and the page refuses the claim rather than softening it.',
      'That the review is government policy: it reviews research literature and says so, and the page describes it as a review of the evidence rather than a requirement.',
      'Attribution of the cited findings to Ofsted itself: Tedre and Denning, Barr and Stephenson, Grover and Pea, Tricot and Sweller, Du Boulay, Sorva, Tuovinen and Sweller, Skudder and Luxton-Reilly and Margulieux are the review\'s citations, and the page says so.',
      'Any effect size or figure from the studies cited: the review summarises them without numbers we could quote, so none is given.',
      'That the review applies outside England: it states that it applies to England, and the page prints that.',
      'Any claim that our specific sequence is evidence-based in itself: what is evidenced is the principle of sequencing domain knowledge, not our particular order.'
    ]
  }
};
