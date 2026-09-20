'use strict';
// Understand the code, do not copy-paste it (ag- door, national; UK cluster Phase 3, Think group).
// Source: JCQ, "AI Use in Assessments: Protecting the Integrity of Qualifications, Guidance for
// Teachers & Assessors", produced on behalf of the JCQ awarding organisations, read on 20 September
// 2026. jcq.org.uk returns 403 to automated reads and was NOT worked around; the document was read
// from a copy published by Gatehouse Awards, an Ofqual-recognised awarding organisation, exactly as
// the Kent booklet was read from a school mirror. Verbatim, from the executive summary and the
// "What is AI misuse?" and "Acknowledging AI use" sections:
//  - "all work submitted for qualification assessments must be the students' own";
//  - "Students who misuse AI such that the work they submit for assessment is not their own will have
//    committed malpractice, in accordance with JCQ regulations, and may attract severe sanctions";
//  - THE SPINE: "Students must make sure that work submitted for assessment is demonstrably their own.
//    If any sections of their work are reproduced directly from AI generated responses, those elements
//    must be identified by the student and they must understand that this will not allow them to
//    demonstrate that they have independently met the marking criteria and therefore will not be
//    rewarded";
//  - "AI tools must only be used when the conditions of the assessment permit the use of the internet
//    and where the student is able to demonstrate that the final submission is the product of their own
//    independent work and independent thinking";
//  - six listed examples of misuse: copying or paraphrasing sections; copying or paraphrasing whole
//    responses; "Using AI to complete parts of the assessment so that the work does not reflect the
//    student's own work, analysis, evaluation or calculations"; "Failing to acknowledge use of AI tools
//    when they have been used as a source of information"; "Incomplete or poor acknowledgement of AI
//    tools"; "Submitting work with intentionally incomplete or misleading references or bibliographies";
//  - "The malpractice sanctions available for the offences of 'making a false declaration of
//    authenticity' and 'plagiarism' include disqualification and debarment from taking qualifications
//    for a number of years";
//  - acknowledgement mechanics: "a student's acknowledgement must show the name of the AI source used
//    and should show the date the content was generated", and "The student must retain a copy of the
//    question(s) and computer-generated content for reference and authentication purposes, in a
//    non-editable format (such as a screenshot) and provide a brief explanation of how it has been
//    used", submitted with the work;
//  - scope: the guidance is "primarily intended to provide guidance in relation to" assessments where
//    internet access is permitted, mostly NEAs, coursework and internal assessments, since supervised
//    exams already bar the tools.
// Spine: acknowledged is not the same as rewarded. Students half-remember a rule that says "declare
// it". JCQ's actual sentence is sharper: declaring protects you from a malpractice charge and earns
// you nothing, because a reproduced element cannot demonstrate that you independently met the marking
// criteria. Pasted code is, at its very best, worth zero marks.
// Distinct from /a-level-computer-science-nea-help, which quotes OCR's board-specific NEA rules and
// runs on a state-machine design spine.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'guide', tag: 'THINK', blurb: 'JCQ does not just ask students to declare AI use. It says declared work will not be rewarded, which changes the arithmetic entirely.' },
  slug: 'understand-the-code-dont-copy-paste-uk',
  code: 'ucp',
  accent: '#4E0E0E',
  accentRationale: 'Understand the code, UK: a deep oxblood from the solver (12.23:1 on every paper tint), the widest separation left and sober enough for a page about malpractice rules',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Understand the code, do not copy-paste it',
  title: 'Understand the Code, Do Not Copy-Paste It | UK Students',
  description: 'What JCQ says about AI in UK assessments, why declared work earns no marks, and how to learn code well enough never to paste it. First class free.',
  ogDescription: 'JCQ: work reproduced from AI "will not be rewarded". Declaring it protects you from malpractice and earns you zero marks. Here is what to do instead.',
  twitterDescription: 'What JCQ really says about AI in UK coursework, and how to learn code you do not need to paste.',
  pageName: 'Understand the Code, Do Not Copy-Paste It',
  webPageDescription: 'What the JCQ guidance on AI use in assessments requires of UK students, why acknowledged AI content cannot earn marks, and how to build understanding instead.',
  courseDescription: 'Live online coding teaching for UK students that builds the ability to read, predict and explain code, so that assessment work is demonstrably the student\'s own.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Understand the code, UK',
  navLinks: [
    { href: '#rule', label: 'What JCQ says' },
    { href: '#acknowledge', label: 'How to acknowledge' },
    { href: '#instead', label: 'What to do instead' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United Kingdom &middot; Coursework and NEA &middot; All boards',
  h1: 'Understand the code, do not copy-paste it',
  lede: 'Most UK students have absorbed a version of the AI rule that goes: you are allowed to use it, you just have to say so. That is half of it, and the missing half is the half that costs marks. The guidance the awarding bodies publish says that reproduced elements must be identified, and then adds that doing so "will not allow them to demonstrate that they have independently met the marking criteria and therefore will not be rewarded". Declaring protects you from a malpractice charge. It does not earn you a single mark. So a pasted function is worth nothing at the very most, and at the other end it is a disqualification. This page sets out what the guidance actually requires, the acknowledgement steps almost nobody completes, and how to reach the point where pasting stops being tempting.',
  secondaryCta: { href: '#instead', label: 'What to do instead' },
  wa: 'Hello Modern Age Coders, I would like a free first coding class for a UK student working on coursework.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; We never touch a candidate\'s coursework',
  spec: [
    ['Applies to', 'NEA, coursework, internal assessment'],
    ['Rule', 'Work must be demonstrably your own'],
    ['Declared AI', 'Permitted, and not rewarded'],
    ['Sanctions', 'Up to disqualification and debarment'],
    ['We teach', 'Reading, predicting, rebuilding'],
    ['We never', 'Work on a candidate\'s task'],
    ['Group', 'Five to ten at one level'],
    ['Start', 'One free lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'The guidance the UK awarding bodies publish on AI in assessments is stricter than most students think, and the strictness is not where they expect. It is not simply that undeclared AI is malpractice, though it is. It is that declared AI content cannot earn marks, because a reproduced element does not demonstrate that the student independently met the marking criteria. So the highest outcome available for pasted work is zero, and the lowest includes disqualification and debarment from taking qualifications for a number of years. The way out is not avoidance; it is competence. A student who can read a piece of code, predict what it does and rebuild it from memory has nothing to paste, because they can write it. That is what we teach, in groups of five to ten at one level or one to one. The first lesson is free, then USD 100 a month in a group or USD 150 one to one.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses that make pasting unnecessary',
    lede: 'The shortest route out of copy-paste is being able to write the thing. Each card opens a full syllabus.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'THINK / 01', title: 'Python for Teens', note: 'The language behind almost every UK specification, taught until a student can produce working code from an empty file.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'THINK / 02', title: 'Algorithms and Data Structures', note: 'The problems that more typing will not solve, worked out on paper before any code exists to copy.' },
      { course: 'gcse-computer-science-course', code: 'THINK / 03', title: 'GCSE Computer Science', note: 'Theory and programming to the board a school has chosen, with the practical work owned by the student.' }
    ]
  },

  sections: [
    {
      id: 'rule', tint: 'tint', eyebrow: 'What the guidance says',
      h2: 'Acknowledged is not the same as rewarded',
      lede: 'Quoted from the awarding bodies\' joint guidance on AI use in assessments. This is the sentence that changes the arithmetic.',
      body: [
        { kind: 'capsule', q: 'The sentence itself', p: 'Students "must make sure that work submitted for assessment is demonstrably their own. If any sections of their work are reproduced directly from AI generated responses, those elements must be identified by the student and they must understand that this will not allow them to demonstrate that they have independently met the marking criteria and therefore will not be rewarded".' },
        { kind: 'two', mt: true,
          leftH3: 'What that means in marks',
          left: [
            'Read it as a decision tree. You paste an AI-generated function and declare it: the element is identified, you have not committed malpractice, and it earns nothing, because it cannot show you met the criteria yourself. You paste it and do not declare it: that is malpractice.',
            'There is no third branch where pasting helps. The best available outcome is zero marks for that part, which is the same as leaving it blank but takes longer.'
          ],
          rightH3: 'And what the sanctions are',
          right: [
            'The guidance is explicit about the downside. Misuse "constitutes malpractice", and the sanctions available for "making a false declaration of authenticity" and for plagiarism "include disqualification and debarment from taking qualifications for a number of years".',
            'Debarment means not being allowed to sit qualifications at all for a period. For a sixteen-year-old that is not a mark penalty; it is a lost year or more.'
          ] },
        { kind: 'table', mt: true, caption: 'What the guidance lists as misuse', head: ['Example of misuse', 'What a student usually thinks they are doing'], rows: [
          ['Copying or paraphrasing sections of AI-generated content so that the work is no longer the student\'s own', 'Borrowing a bit of structure'],
          ['Copying or paraphrasing whole responses of AI-generated content', 'Getting unstuck'],
          ['Using AI to complete parts of the assessment so that the work does not reflect the student\'s own work, analysis, evaluation or calculations', 'Saving time on the boring part'],
          ['Failing to acknowledge use of AI tools when they have been used as a source of information', 'It was only for ideas'],
          ['Incomplete or poor acknowledgement of AI tools', 'Mentioning it somewhere'],
          ['Submitting work with intentionally incomplete or misleading references or bibliographies', 'Tidying up the references']
        ] },
        { kind: 'p', html: 'Note the fifth line. Poor acknowledgement is itself listed as misuse, so a vague sentence at the end of a project is not a safe harbour. Either the use is documented properly, in the way the next section describes, or it is a problem.' },
        { kind: 'p', html: 'One more scope point that students get wrong in the other direction. The guidance is aimed mainly at assessments where internet access is permitted, which in practice means non-examined assessment, coursework and internal assessment. Ordinary written exams already bar the tools, so none of this is a reason to worry about a supervised paper. It is a reason to be careful with the piece of work you do at home over several months.' },
        { kind: 'source', html: 'Source, read 20 September 2026: JCQ, <em>AI Use in Assessments: Protecting the Integrity of Qualifications, Guidance for Teachers and Assessors</em>. JCQ\'s own site returns an automated-access error, so the document was read from the copy published by <a class="ag-inline-link" href="https://gatehouseawards.org/uploads/doc-library/jcq-ai-use-in-assessments-protecting-the-integrity-of-qualifications.pdf" rel="noopener" target="_blank">Gatehouse Awards</a>, an Ofqual-recognised awarding organisation. Your school will hold the current version and its own malpractice policy, which is the one that applies to you.' }
      ]
    },
    {
      id: 'acknowledge', tint: 'deep', eyebrow: 'How to acknowledge',
      h2: 'Four steps almost nobody completes',
      lede: 'If AI is used at all in a piece of coursework, the guidance sets out exactly what has to be submitted alongside it. Most students do roughly one of these four.',
      body: [
        { kind: 'table', caption: 'What the guidance requires with the work', head: ['Step', 'What it says'], rows: [
          ['Name the tool', 'The acknowledgement "must show the name of the AI source used"'],
          ['Date it', 'It "should show the date the content was generated", with the guidance\'s own example giving a tool, a link and a date'],
          ['Keep the evidence', 'The student "must retain a copy of the question(s) and computer-generated content for reference and authentication purposes, in a non-editable format (such as a screenshot)"'],
          ['Explain the use', 'They must "provide a brief explanation of how it has been used", and this is submitted with the work so the assessor can review it']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Why non-editable matters', p: 'A screenshot cannot be quietly revised later. The requirement exists so that what was asked and what came back are fixed at the moment they happened, which is the whole point of authentication.' },
          { h3: 'Why the prompt is kept too', p: 'The question is as revealing as the answer. An assessor reading "write my solution" learns something different from one reading "why does this loop not terminate".' },
          { h3: 'Why sources still need verifying', p: 'If a tool cites sources, the guidance says the student must verify them and reference them normally. If it cites none, the student must independently verify the content before using it.' }
        ] },
        { kind: 'p', html: 'There is a sentence in the guidance that is worth reading twice if you are a student who intends to use AI legitimately: tools may be used only where "the student is able to demonstrate that the final submission is the product of their own independent work and independent thinking". The burden sits with the student, and it is a burden of demonstration rather than of assertion. Saying it was mostly yours is not the test.' },
        { kind: 'p', html: 'In our own lessons we keep the same record habit, on ordinary projects that no board will ever see, because a habit formed on low-stakes work is one a student still has in February of Year 11. What the tool suggested, what was kept, what was thrown away and why. It takes a minute and it makes the coursework version automatic.' },
        { kind: 'p', html: 'For A-level students specifically, the board-level rules sit on top of this, and <a class="ag-inline-link" href="/a-level-computer-science-nea-help">the A-level coursework page</a> goes through what AQA and OCR each say about their own projects.' }
      ]
    },
    {
      id: 'instead', tint: '', eyebrow: 'What to do instead',
      h2: 'Read it, predict it, rebuild it',
      lede: 'Nobody pastes code they can write. The honest fix for copy-paste is not willpower, it is fluency, and it is trainable in a term.',
      body: [
        { kind: 'two',
          leftH3: 'The three-step habit',
          left: [
            'Read it. Take the code, whoever wrote it, and say out loud what each part is for. If a line cannot be explained, that is the line to work on, and it is usually the line that will break.',
            'Predict it. Before running anything, state what the output will be. Being wrong here is not a failure, it is the entire mechanism: the gap between what you expected and what happened is where the learning is.'
          ],
          rightH3: 'And the one that sticks',
          right: [
            'Rebuild it. Close the original and write it again from memory. Not word for word, but working. A student who can do that owns the code in the only sense that matters to an examiner or an employer.',
            'Doing this weekly for a term changes what a student reaches for when they are stuck. The reflex stops being paste and starts being read, which is the whole objective.'
          ] },
        { kind: 'table', mt: true, caption: 'What each step proves', head: ['Step', 'What a student can do afterwards', 'What an assessor sees'], rows: [
          ['Read', 'Explain any line, in their own words, without the file open', 'A candidate who can answer a question about their own work'],
          ['Predict', 'Say what the program will output before it runs', 'Exactly what the national curriculum asks for: logical reasoning about program behaviour'],
          ['Rebuild', 'Reproduce a working version from memory', 'Work that is demonstrably their own, which is the test the guidance sets']
        ] },
        { kind: 'p', html: 'That middle row is not our invention. Predicting what a program will do is written into the statutory curriculum in England, and it is the thing an AI tool cannot do on a student\'s behalf, because the prediction is a statement about what is in the student\'s head rather than about the code.' },
        { kind: 'p', html: 'Using AI properly sits comfortably inside this. Once a student can predict an answer, asking a tool to critique their approach, to suggest a test case they had not thought of, or to explain why a loop misbehaves is genuinely useful and entirely defensible. The sequence matters more than the tool: predict first, ask second, record what changed.' },
        { kind: 'p', html: 'One line we do not cross. We do not work on a candidate\'s coursework or non-examined assessment, at any board, in any nation. Those tasks are set, supervised and certified inside a school, and outside help puts an entry at risk. We teach the skills they draw on, using projects of our own.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'From pasting to writing, in four steps',
    lede: 'Where a student starts is judged by what they can explain, not by what they have submitted.',
    table: { caption: 'Four steps out of copy-paste', head: ['Step', 'Where a student is', 'What moves them on'], rows: [
      ['1. Reliant', 'Cannot start a problem without an example to modify', 'Short problems with no example available, and permission to be stuck for ten minutes'],
      ['2. Reading', 'Can follow code but not produce it', 'Explaining code aloud, line by line, until the vocabulary is theirs'],
      ['3. Predicting', 'Can say what code will do before running it', 'Deliberately wrong predictions, examined rather than corrected'],
      ['4. Writing', 'Produces working code from a blank file', 'Bigger problems, then reviewing other people\'s code including a machine\'s']
    ] },
    left: { h3: 'Step one is common and fixable', ps: [
      'A student who can only modify examples has usually been taught by being given examples to modify. It is a teaching artefact rather than a limit, and it clears in weeks once the examples stop.',
      'The topic order past that point is on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Step four is where AI becomes useful', ps: [
      'A student who can write code is in a position to judge code, which is when a tool turns from a crutch into a colleague.',
      'That is also the point at which competitions start to be worth entering; the <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a> lists what is open.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses that build code a student owns',
    lede: 'Grouped by what a learner needs before they can stop leaning on examples. The free lesson settles where to start.',
    bands: [
      { num: 'I', h3: 'Being able to write it', sub: 'Fluency in the language itself', courses: [
        { code: 'UK / UC1 / 01', slug: 'python-ai-kids-masterclass', title: 'First Python', blurb: 'The move to typed code, with programs short enough to hold in your head.' },
        { code: 'UK / UC1 / 02', slug: 'python-complete-masterclass-teens', title: 'Python in full', blurb: 'Every core construct, taught by predicting the output before running it.' },
        { code: 'UK / UC1 / 03', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python for adults', blurb: 'The same route for university students and adults starting from nothing.' }
      ] },
      { num: 'II', h3: 'Being able to reason about it', sub: 'The part no tool can do for you', courses: [
        { code: 'UK / UC2 / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms and data structures', blurb: 'Worked on paper first, where there is nothing to paste and nowhere to hide.' },
        { code: 'UK / UC2 / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking', blurb: 'Decomposition and pattern-finding for younger learners, before any syntax arrives.' },
        { code: 'UK / UC2 / 03', slug: 'gcse-computer-science-course', title: 'GCSE Computer Science', blurb: 'Theory and programming to the board a school actually uses.' }
      ] },
      { num: 'III', h3: 'Working properly with AI', sub: 'For students who will use it anyway', courses: [
        { code: 'UK / UC3 / 01', slug: 'vibe-coding-for-teens-python-web-ai-projects-course', title: 'Building with AI assistance', blurb: 'Reviewing, testing and recording what came from where, on projects that are ours.' },
        { code: 'UK / UC3 / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'Models trained and broken by the student, which is the fastest cure for treating them as oracles.' },
        { code: 'UK / UC3 / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data science with Python', blurb: 'Published datasets questioned rather than accepted, base lines and all.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons work',
    h2: 'Say it before you run it, every week',
    lede: 'India keeps one clock all year, which puts the UK five and a half hours behind between October and March and four and a half between March and October. You pick a slot in UK time and it stays yours.',
    slots: [
      { time: 'After school', l: 'The common slot for GCSE and Nationals students.' },
      { time: 'Evening', l: 'For sixth formers, and for adults after work.' },
      { time: 'Weekend morning', l: 'Longer, and better for a project that should be finished in one go.' }
    ],
    cells: [
      { h3: 'Predictions out loud', p: 'A learner states the output before anything runs. Wrong predictions are the material, not the embarrassment.' },
      { h3: 'Explaining line by line', p: 'A student who cannot explain a line does not keep it. This is the habit that makes pasting pointless.' },
      { h3: 'Rebuild from memory', p: 'Close the file, write it again working. The second version is where the understanding actually forms.' },
      { h3: 'An AI record', p: 'What the tool suggested, what was kept and why, on ordinary projects, so the coursework version is already a habit.' },
      { h3: 'A hard line on coursework', p: 'We do not work on a candidate\'s NEA, coursework or controlled assessment at any board, in any nation.' },
      { h3: 'Small groups', p: 'Five to ten learners at one level, reading each other\'s code, which is where most of the real arguing happens.' }
    ]
  },

  projectsH2: 'Work our students wrote themselves',
  projectsLede: 'Four published projects. More sit on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Copied from Google as written. Nobody was paid or asked.',

  fees: {
    h2: 'What it costs',
    lede: 'A flat monthly fee, set in US dollars everywhere except India. The free lesson happens first and payment only starts once a course and a weekly slot are settled.',
    free: ['Real teaching on a real problem', 'A frank answer about the right starting point', 'Nothing asked for beyond a phone number'],
    group: ['A room of five to ten at the same stage', 'One teacher, kept for the whole course', 'Every week, somebody reads what you wrote', 'A certificate at the end of the syllabus'],
    one: ['Nobody in the room but the two of you', 'Shaped around a deadline if there is one', 'Suits learners well ahead of, or well behind, their year']
  },

  faq: {
    eyebrow: 'Questions about AI and UK coursework',
    h2: 'What students and parents ask',
    items: [
      { q: 'Is using AI in coursework allowed?', a: 'Only where the conditions of the assessment permit internet access, and only where the student can demonstrate the final submission is the product of their own independent work and independent thinking. Your school\'s malpractice policy is the version that applies to you.' },
      { q: 'If I declare it, does it count?', a: 'No. The guidance says reproduced elements must be identified and that this "will not allow them to demonstrate that they have independently met the marking criteria and therefore will not be rewarded". Declaring protects you from a malpractice charge; it earns nothing.' },
      { q: 'What happens if I do not declare it?', a: 'That is malpractice. The available sanctions for making a false declaration of authenticity and for plagiarism include disqualification and debarment from taking qualifications for a number of years.' },
      { q: 'Is a vague mention enough?', a: 'No. Incomplete or poor acknowledgement is itself listed as an example of misuse.' },
      { q: 'What exactly has to be submitted?', a: 'The name of the AI source, the date the content was generated, a copy of the question and the generated content in a non-editable format such as a screenshot, and a brief explanation of how it was used.' },
      { q: 'Does this apply to written exams?', a: 'Not really. The guidance is aimed at assessments where internet access is permitted, mostly non-examined assessment, coursework and internal assessment. Supervised exams already bar the tools.' },
      { q: 'Will you help with my coursework?', a: 'No. We do not work on a candidate\'s NEA, coursework or controlled assessment at any board or in any nation. We teach the skills those tasks draw on, using our own projects.' },
      { q: 'How do I stop relying on examples?', a: 'By reading code aloud, predicting output before running it, and rebuilding from memory. A term of doing that weekly usually changes what a student reaches for when they get stuck.' },
      { q: 'Is there a legitimate way to use AI while learning?', a: 'Yes, and we teach it. Predict the answer first, then ask the tool to critique your approach or suggest a test you missed, then record what changed. The order is what makes it defensible.' },
      { q: 'What does it cost?', a: 'The first lesson is free. After that a group place is USD 100 a month and one-to-one teaching USD 150, charged monthly with nothing in advance.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Read further',
    lede: 'Each goes further into one part of this.',
    items: [
      { href: '/a-level-computer-science-nea-help', label: 'A-level Computer Science coursework', p: 'What AQA and OCR each say about their own projects, and where the marks sit.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'The national page, and the index of every UK page we publish.' },
      { href: '/best-coding-classes-for-teens-uk', label: 'Coding classes for teens in the UK', p: 'What Ofcom found about British teenagers, AI and checking.' },
      { href: '/best-python-classes-online-uk', label: 'Python classes online in the UK', p: 'What the exam boards actually examine, and what sits above it.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'The method in full, including where it does not suit a learner.' },
      { href: '/student-labs', label: 'Student labs', p: 'Projects our learners built and published themselves.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Send us a number. We reply at a British hour you choose, teach a proper lesson, and finish by telling you plainly which step the learner belongs on.',
    readFirst: 'Rather read first? Syllabuses sit on the <a class="ag-inline-link" href="/courses">course pages</a>, the method is set out in <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and the topic order runs down the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.',
    note: 'A WhatsApp message gets the quickest answer and is free from a British handset. Our number is an Indian one, stated here so nobody discovers it mid-conversation.',
    formNote: 'No card, no contract. One reply, with a time.'
  },

  footer: {
    cols: [
      { h4: 'United Kingdom', links: [
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' },
        { href: '/coding-and-ai-classes-in-england', label: 'England' },
        { href: '/coding-and-ai-classes-in-wales', label: 'Wales' },
        { href: '/coding-and-ai-classes-in-northern-ireland', label: 'Northern Ireland' }
      ] },
      { h4: 'Coursework and AI', links: [
        { href: '/a-level-computer-science-nea-help', label: 'A-level coursework' },
        { href: '/best-coding-classes-for-teens-uk', label: 'Coding for teens' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student labs' }
      ] }
    ],
    bottomRight: 'Live lessons for UK students, on UK time'
  },

  personalityCss: `
.ag-root.ag-ucp .ag-hero h1 { letter-spacing: -0.028em; font-weight: 700; }
.ag-root.ag-ucp .ag-capsule { border-left-width: 8px; }
.ag-root.ag-ucp .ag-section-head h2 { max-width: 25ch; }
.ag-root.ag-ucp .ag-table caption { text-align: left; font-weight: 700; }
.ag-root.ag-ucp .ag-table td:first-child { font-weight: 600; }
.ag-root.ag-ucp .ag-table th:last-child { width: 38%; }
.ag-root.ag-ucp .ag-band-head h3 { letter-spacing: -0.01em; }
`,

  mustMention: ['will not be rewarded', 'demonstrably their own', 'disqualification and debarment', 'independent work and independent thinking', 'non-editable format', 'Incomplete or poor acknowledgement', 'date the content was generated', 'predict', 'rebuild', 'we do not work on a candidate'],

  dossier: {
    curriculumAuthority: 'United Kingdom, AI in assessments. JCQ, "AI Use in Assessments: Protecting the Integrity of Qualifications, Guidance for Teachers & Assessors", produced on behalf of the JCQ awarding organisations, read 20 September 2026 from the copy published by Gatehouse Awards, an Ofqual-recognised awarding organisation, because jcq.org.uk returns an automated-access error that was not worked around. Verbatim: "all work submitted for qualification assessments must be the students\' own"; "Students who misuse AI such that the work they submit for assessment is not their own will have committed malpractice, in accordance with JCQ regulations, and may attract severe sanctions"; "Students must make sure that work submitted for assessment is demonstrably their own. If any sections of their work are reproduced directly from AI generated responses, those elements must be identified by the student and they must understand that this will not allow them to demonstrate that they have independently met the marking criteria and therefore will not be rewarded"; "AI tools must only be used when the conditions of the assessment permit the use of the internet and where the student is able to demonstrate that the final submission is the product of their own independent work and independent thinking". Six listed examples of misuse: "Copying or paraphrasing sections of AI-generated content so that the work is no longer the student\'s own"; "Copying or paraphrasing whole responses of AI-generated content"; "Using AI to complete parts of the assessment so that the work does not reflect the student\'s own work, analysis, evaluation or calculations"; "Failing to acknowledge use of AI tools when they have been used as a source of information"; "Incomplete or poor acknowledgement of AI tools"; "Submitting work with intentionally incomplete or misleading references or bibliographies". Sanctions: "The malpractice sanctions available for the offences of \'making a false declaration of authenticity\' and \'plagiarism\' include disqualification and debarment from taking qualifications for a number of years." Acknowledgement: "a student\'s acknowledgement must show the name of the AI source used and should show the date the content was generated"; "The student must, retain a copy of the question(s) and computer-generated content for reference and authentication purposes, in a non-editable format (such as a screenshot) and provide a brief explanation of how it has been used." Scope: the document is "primarily intended to provide guidance in relation to" assessments where internet access is permitted in the preparatory, research or production stages, mostly NEAs, coursework and internal assessments.',
    localProject: 'Acknowledged is not the same as rewarded. Students carry a half-remembered rule that AI is fine if you declare it; the guidance says reproduced elements must be identified AND that identifying them "will not allow them to demonstrate that they have independently met the marking criteria and therefore will not be rewarded". Read as a decision tree there is no branch where pasting helps: declared it earns zero, undeclared it is malpractice carrying disqualification and debarment. The page then sets out the four acknowledgement steps almost nobody completes, including the non-editable screenshot of both the prompt and the output, and notes that "Incomplete or poor acknowledgement" is itself listed as misuse, so a vague closing sentence is not a safe harbour. The constructive half is read, predict, rebuild, with the middle step tied to the statutory expectation that pupils use logical reasoning to predict program behaviour, which is a statement about what is in the student\'s head and therefore the one thing a tool cannot supply. A hard line is stated: we never work on a candidate\'s coursework. Lesson family: a rule whose second clause is the one that matters; distinct from the A-level NEA page, which quotes OCR board rules and runs on a state-machine design spine.',
    requiredMentions: ['will not be rewarded', 'demonstrably their own', 'disqualification and debarment', 'non-editable format'],
    sources: [
      { claim: 'JCQ, AI Use in Assessments: Protecting the Integrity of Qualifications: the requirement that work be demonstrably the student\'s own, that identified AI content will not be rewarded, the six examples of misuse, the sanctions including disqualification and debarment, the acknowledgement requirements, and the scope of the guidance.', url: 'https://gatehouseawards.org/uploads/doc-library/jcq-ai-use-in-assessments-protecting-the-integrity-of-qualifications.pdf' },
      { claim: 'JCQ\'s own page for the guidance. Returns an automated-access error; the awarding organisation copy above was used instead and the block was not worked around.', url: 'https://www.jcq.org.uk/exams-office/malpractice/artificial-intelligence/' }
    ],
    rejectedClaims: [
      'A revision number or publication date for the guidance: the copy read carries a 2023 JCQ copyright line and later revisions exist, so the page dates nothing and tells the reader their school holds the version that applies.',
      'Any board-specific NEA rule: those belong to the A-level coursework page, which quotes AQA and OCR directly.',
      'That any particular use of AI is or is not permitted in a named assessment: that depends on the assessment conditions and the centre policy, and the page says so.',
      'Detection rates or the reliability of AI detection tools: no primary source was read, and the guidance itself does not endorse a tool.',
      'Any figure for how many students use AI in coursework: not read at a primary source for this build.',
      'That our teaching improves coursework marks: we do not touch coursework, and the page promises a habit rather than an outcome.'
    ]
  }
};
