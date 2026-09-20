'use strict';
// Pearson Edexcel GCSE Computer Science 1CP2 help (ag- exam door, England; UK cluster Phase 3).
// Source: Pearson Edexcel Level 1/Level 2 GCSE (9-1) in Computer Science specification, Issue 1,
// January 2020, read from Pearson's own PDF on 20 September 2026. Verbatim:
//  - "The Pearson Edexcel Level 1/Level 2 GCSE (9-1) in Computer Science consists of two
//    externally-examined papers. Paper 1 is a written examination and Paper 2 is a practical onscreen
//    assessment."
//  - Paper 1: Principles of Computer Science, paper code 1CP2/01. "Written examination: 1 hour and 30
//    minutes", "50% of the qualification", "75 marks". Assesses Topics 1 to 5: computational thinking
//    (including "ability to construct truth tables"), data, computers, networks, and issues and impact.
//    THE SPINE: "This paper consists of five compulsory questions, each one focused on one of the topic
//    areas. The questions consist of multiple-choice, short-, medium- and extended-open-response,
//    tabular and diagrammatic items."
//  - Paper 2: Application of Computational Thinking, paper code 1CP2/02. "Onscreen examination: 2
//    hours", "50% of the qualification", "75 marks". Assesses Topic 6 only, "Problem solving with
//    programming", focused on algorithms in relation to creating programs, decomposing and analysing
//    problems, and the "ability to read, write, refine and evaluate programs". "This practical paper
//    requires students to design, write, test and refine programs in order to solve problems."
//    "Students will complete this assessment onscreen using their Integrated Development Environment
//    (IDE) of choice." Provided with coding files, a hard copy of the question paper, and the
//    Programming Language Subset "as an insert in the question paper and in electronic format".
//    "Students should then answer the questions onscreen using Python 3." "This assessment consists of
//    six compulsory questions." Elsewhere the specification adds that students "must not have access to
//    the internet".
//  - The Practical Programming Statement, signed by a member of the centre's senior leadership team.
// Spine: five questions, five topics, nowhere to hide. Paper 1 devotes exactly one compulsory question
// to each of the five topic areas, so a weak topic is not a few scattered marks, it is a whole question
// on a 75-mark paper. And Paper 2 is the only GCSE Computer Science paper in England sat at a keyboard.
// Deliberately NOT re-explained here: the contents of the Programming Language Subset, which is the
// spine of /best-python-classes-online-uk and is only referenced from this page.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'EDEXCEL 1CP2', blurb: 'One compulsory question per topic on Paper 1, and a Paper 2 sat at a keyboard in Python 3. Neither is like the other English boards.' },
  slug: 'edexcel-gcse-computer-science-1cp2-help',
  code: 'edx',
  accent: '#4E360E',
  accentRationale: 'Edexcel 1CP2: a dark bronze from the solver (9.17:1 on every paper tint), distinct from the slate navy and teal used for the AQA and OCR specification pages',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Edexcel GCSE Computer Science 1CP2 help',
  title: 'Edexcel GCSE Computer Science 1CP2 Help | Onscreen Paper 2',
  description: 'Help with Pearson Edexcel 1CP2: one question per topic on Paper 1, and Paper 2 sat onscreen in Python 3 with no internet. Taught live. First class free.',
  ogDescription: 'Paper 1 gives one compulsory question to each of the five topics. Paper 2 is sat at a keyboard in Python 3, with no internet.',
  twitterDescription: 'Edexcel GCSE Computer Science 1CP2 tutoring, including the onscreen paper. First class free.',
  pageName: 'Edexcel GCSE Computer Science 1CP2 Help',
  webPageDescription: 'Live online tuition for Pearson Edexcel GCSE Computer Science 1CP2, covering the written Paper 1 and the onscreen Python Paper 2.',
  courseDescription: 'Live online teaching for students taking Pearson Edexcel GCSE Computer Science 1CP2, covering the five written topics and the onscreen programming paper in Python 3.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Edexcel 1CP2 help',
  navLinks: [
    { href: '#paper1', label: 'One question per topic' },
    { href: '#paper2', label: 'The onscreen paper' },
    { href: '#prepare', label: 'How to prepare' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'England &middot; Pearson Edexcel 1CP2 &middot; Years 10 and 11',
  h1: 'Edexcel GCSE Computer Science 1CP2 help',
  lede: 'Two things about this qualification are unlike anything the other English boards do, and both change how a student should revise. The first is in a single line of the specification: Paper 1 "consists of five compulsory questions, each one focused on one of the topic areas". Five topics, five questions, so a weak topic is not a scattering of lost marks, it is a whole question on a paper worth seventy-five. There is nowhere to hide networks if networks never went in. The second is that Paper 2 is not a written paper at all. It is sat at a keyboard, in the student\'s own development environment, in Python 3, with no internet. This page covers both, and what a year of preparation should actually look like for each.',
  secondaryCta: { href: '#paper2', label: 'The onscreen paper' },
  wa: 'Hello Modern Age Coders, I would like a free first class for Edexcel GCSE Computer Science 1CP2.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Python 3, typed, every week',
  spec: [
    ['Qualification', 'Pearson Edexcel GCSE 1CP2'],
    ['Paper 1', 'Written, 1h30, 75 marks, 50 per cent'],
    ['Paper 2', 'Onscreen, 2 hours, 75 marks, 50 per cent'],
    ['Paper 1 structure', 'Five questions, one per topic'],
    ['Paper 2 structure', 'Six compulsory questions'],
    ['Language', 'Python 3, in your own IDE'],
    ['Internet', 'Not permitted'],
    ['Start', 'One free lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Edexcel 1CP2 is two externally examined papers of equal weight, 75 marks each. Paper 1 is written, an hour and a half, and covers five topics in five compulsory questions, one per topic. Paper 2 is an onscreen practical of two hours, covering a sixth topic only, in which candidates design, write, test and refine programs in their own development environment using Python 3, with coding files supplied, a printed question paper, the programming language subset as an insert, and no internet access. That structure rewards two specific things: even coverage across the five written topics, because each one is a whole question, and genuine keyboard fluency, because the practical paper is a real programming session under a clock. We teach both. The first lesson is free, then USD 100 a month in a group or USD 150 one to one.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for Edexcel candidates',
    lede: 'One for the written paper, one for the keyboard, one for the algorithms both lean on. Cards open the full syllabus.',
    items: [
      { course: 'gcse-computer-science-course', code: 'EDX / 01', title: 'GCSE Computer Science', note: 'All five written topics covered evenly, because on this paper each one is a whole question rather than a few marks.' },
      { course: 'python-complete-masterclass-teens', code: 'EDX / 02', title: 'Python for Teens', note: 'Python 3 typed at speed in a real editor, which is precisely the medium of Paper 2.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'EDX / 03', title: 'Algorithms and Data Structures', note: 'Decomposition and algorithm design, which Topic 1 tests on paper and Topic 6 tests at a keyboard.' }
    ]
  },

  sections: [
    {
      id: 'paper1', tint: 'tint', eyebrow: 'One question per topic',
      h2: 'Five topics, five questions, no shelter',
      lede: 'From the Pearson Edexcel specification, Issue 1, January 2020. The structure of Paper 1 is unusual and it changes what revision should look like.',
      body: [
        { kind: 'capsule', q: 'The line that shapes the year', p: 'Paper 1 "consists of five compulsory questions, each one focused on one of the topic areas. The questions consist of multiple-choice, short-, medium- and extended-open-response, tabular and diagrammatic items."' },
        { kind: 'table', mt: true, caption: 'The five topics on Paper 1', head: ['Topic', 'What the specification says it covers'], rows: [
          ['1. Computational thinking', '"Understanding of what algorithms are, what they are used for and how they work; ability to follow, amend and write algorithms; ability to construct truth tables"'],
          ['2. Data', '"Understanding of binary, data representation, data storage and compression"'],
          ['3. Computers', '"Understanding of hardware and software components of computer systems and characteristics of programming languages"'],
          ['4. Networks', '"Understanding of computer networks and network security"'],
          ['5. Issues and impact', '"Awareness of emerging trends in computing technologies, and the impact of computing on individuals, society and the environment, including ethical, legal and ownership issues"']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the structure matters',
          left: [
            'On a paper where questions are scattered across topics, a weak area costs a few marks here and there and a good student can absorb it. Here, a weak topic is a question, and on a 75-mark paper across five questions that is a substantial share of half the qualification.',
            'So the revision rule for Paper 1 is coverage before depth. A student who is excellent at three topics and vague on two is in worse shape than one who is solid at five.'
          ],
          rightH3: 'And the question types',
          right: [
            'Each question mixes multiple choice, short, medium and extended open response, tabular and diagrammatic items. The diagrammatic and tabular items reward practice rather than knowledge, and most students have never drawn one under time pressure.',
            'Truth tables are named explicitly in Topic 1, which makes them one of the safest marks on the paper for anyone who has built a few.'
          ] },
        { kind: 'p', html: 'A practical consequence for anyone tutoring themselves: work through the five topics in rotation rather than in a block. Finishing networks in November and never returning is exactly the pattern this paper punishes, and it is the commonest revision plan there is.' },
        { kind: 'source', html: 'Source, read 20 September 2026: <a class="ag-inline-link" href="https://qualifications.pearson.com/en/qualifications/edexcel-gcses/computer-science-2020.html" rel="noopener" target="_blank">Pearson Edexcel Level 1/Level 2 GCSE (9-1) in Computer Science</a> specification, Issue 1, January 2020. Check the current issue on Pearson\'s site, and your school will confirm which applies.' }
      ]
    },
    {
      id: 'paper2', tint: 'deep', eyebrow: 'The onscreen paper',
      h2: 'Two hours at a keyboard, in Python 3',
      lede: 'Paper 2 is a practical assessment rather than a written one, which makes Edexcel unlike the other English boards at GCSE.',
      body: [
        { kind: 'table', caption: 'How Paper 2 runs, in the specification\'s own terms', head: ['Element', 'What the specification says'], rows: [
          ['Format', '"Onscreen examination: 2 hours", 75 marks, 50 per cent of the qualification'],
          ['Content', 'Topic 6 only, "Problem solving with programming"'],
          ['The task', '"This practical paper requires students to design, write, test and refine programs in order to solve problems"'],
          ['The environment', '"Students will complete this assessment onscreen using their Integrated Development Environment (IDE) of choice"'],
          ['What is supplied', 'Coding files, a hard copy of the question paper, and the programming language subset "as an insert in the question paper and in electronic format"'],
          ['The language', '"Students should then answer the questions onscreen using Python 3"'],
          ['The questions', '"This assessment consists of six compulsory questions"'],
          ['The internet', 'Students "must not have access to the internet"']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Your own IDE', p: 'A candidate sits the paper in the environment they have used all year, which is a real advantage and only if they have actually used one all year.' },
          { h3: 'No internet', p: 'No documentation, no search, no assistant. Whatever a student can do at that keyboard unaided is what the paper measures.' },
          { h3: 'Six questions, two hours', p: 'Twenty minutes a question on average, which is a pace problem as much as a programming one and is the thing least often practised.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What this rewards',
          left: [
            'Fluency at the keyboard, reading an error message without panic, and knowing the standard library well enough not to need to look anything up. None of those come from revision notes; they come from having written a lot of Python.',
            'It also rewards testing as you go, because the paper asks candidates to design, write, test and refine, and a program that has never been run halfway through is a risk taken for no reason.'
          ],
          rightH3: 'And what it exposes',
          right: [
            'A student who has learnt computer science mostly on paper. They can define a while loop and cannot type one at speed, and on this paper that gap is the whole difference.',
            'The remedy is unromantic and effective: write Python every week for two years. There is no substitute and no shortcut, which at least makes the plan simple.'
          ] },
        { kind: 'p', html: 'The subset booklet supplied with the paper is worth understanding in its own right, and it is covered properly on <a class="ag-inline-link" href="/best-python-classes-online-uk">the Python classes page</a>, which sets out what it does and does not include and why a class should aim above it rather than inside it.' },
        { kind: 'p', html: 'One more requirement sits behind the scenes. Centres must complete a Practical Programming Statement, signed by a member of the senior leadership team, confirming that each candidate had the opportunity to design, write, test and refine programs in Python during the course. A board does not create a signed declaration unless it considers the alternative a genuine risk, which tells a parent what to ask their school about.' }
      ]
    },
    {
      id: 'prepare', tint: '', eyebrow: 'How to prepare',
      h2: 'Two different plans for two different papers',
      lede: 'The commonest mistake with 1CP2 is preparing for both papers the same way. They reward almost opposite habits.',
      body: [
        { kind: 'table', caption: 'Preparing for each paper', head: ['', 'Paper 1', 'Paper 2'], rows: [
          ['Main risk', 'A topic that never went in', 'Keyboard hesitancy under a clock'],
          ['Best weekly habit', 'Rotate through all five topics rather than blocking one', 'Write and run Python, every week, without exception'],
          ['What to practise', 'Diagrams, tables, truth tables and extended written answers', 'Reading errors, testing as you go, and finishing within twenty minutes'],
          ['What not to do', 'Master three topics and hope', 'Learn programming from notes rather than from an editor'],
          ['Mark profile', 'Five whole questions, one per topic', 'Six compulsory questions across one topic']
        ] },
        { kind: 'p', html: 'For the written paper the highest-value activity is spaced rotation: a little of each topic every week, all year, rather than a block on data in October that is never revisited. The structure of the paper makes this worth more here than on any other board, because coverage is scored directly.' },
        { kind: 'p', html: 'For the practical paper the highest-value activity is volume. A student who has written two hundred small programs arrives fluent; one who has written twenty arrives hoping. We use the whole of Year 10 for that, and Year 11 for timing and for the written topics.' },
        { kind: 'two', mt: true,
          leftH3: 'What we do in lessons',
          left: [
            'Typed Python every week in a real editor, with the learner driving the keyboard. Prediction before running, so that an unexpected result becomes information rather than a scare.',
            'And timed practice from the spring of Year 11, six questions in two hours, because pace is a skill that only improves when it is measured.'
          ],
          rightH3: 'What we will not do',
          right: [
            'We do not take part in any assessed work. There is none at GCSE with this board, which keeps the line easy, but it holds at A level too, where a project does count.',
            'And we do not promise grades. We teach the content, the fluency and the pacing, and what happens in the hall is the student\'s.'
          ] },
        { kind: 'p', html: 'For students continuing to sixth form, the change is significant: a project starts counting and the rules on acknowledgement bite. <a class="ag-inline-link" href="/a-level-computer-science-nea-help">The A-level coursework page</a> sets out where the marks sit at AQA and OCR, and <a class="ag-inline-link" href="/understand-the-code-dont-copy-paste-uk">the page on understanding the code</a> covers what the awarding bodies say about AI in assessed work.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Four rungs to a confident pair of papers',
    lede: 'Position is judged by what a student can type unaided and how evenly the five topics have landed.',
    table: { caption: 'Where a 1CP2 candidate should be', head: ['Rung', 'When', 'What should be true'], rows: [
      ['1. Typing without friction', 'The first term of the course', 'Short Python programs written in an editor without copying an example'],
      ['2. Five topics started', 'By the end of the first year', 'Every written topic has been covered at least once, none left for later'],
      ['3. Programs that get tested', 'Second year', 'Testing as you go, reading errors calmly, and refining rather than restarting'],
      ['4. Working to a clock', 'The spring before the papers', 'Six questions in two hours, and five written topics answered in rotation']
    ] },
    left: { h3: 'Rung two is where plans fail', ps: [
      'Because it is invisible. A student who is enjoying programming will happily leave networks and impact until later, and on this paper later is a whole question.',
      'The full topic order past the GCSE runs down the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Rung four cannot be crammed', ps: [
      'Pace comes from repetition under timing, and a candidate who first sees a two-hour practical in May will spend the first half of it adjusting.',
      'Lessons ease off in the fortnight before the papers and restart once they are done.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for Edexcel candidates',
    lede: 'Grouped by which paper they serve. The free lesson decides the starting point.',
    bands: [
      { num: 'I', h3: 'For Paper 2', sub: 'Keyboard fluency in Python', courses: [
        { code: 'UK / ED1 / 01', slug: 'python-complete-masterclass-teens', title: 'Python in full', blurb: 'Written in a real editor every week, which is the only preparation an onscreen paper accepts.' },
        { code: 'UK / ED1 / 02', slug: 'python-ai-kids-masterclass', title: 'First Python', blurb: 'For Year 9 and early Year 10 students who arrived from blocks and need the keyboard stage properly.' },
        { code: 'UK / ED1 / 03', slug: 'vibe-coding-for-teens-python-web-ai-projects-course', title: 'Building with AI assistance', blurb: 'Using tools properly on our own projects, so the habit is reviewing rather than pasting.' }
      ] },
      { num: 'II', h3: 'For Paper 1', sub: 'Five topics, evenly', courses: [
        { code: 'UK / ED2 / 01', slug: 'gcse-computer-science-course', title: 'GCSE Computer Science', blurb: 'All five written topics in rotation rather than in blocks, which is what this paper rewards.' },
        { code: 'UK / ED2 / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms and data structures', blurb: 'Following, amending and writing algorithms, which is Topic 1 almost word for word.' },
        { code: 'UK / ED2 / 03', slug: 'mysql-database-complete-masterclass-college', title: 'Databases and SQL', blurb: 'Background for the data and systems topics, and essential for anyone continuing to A level.' }
      ] },
      { num: 'III', h3: 'Past the GCSE', sub: 'For students carrying on', courses: [
        { code: 'UK / ED3 / 01', slug: 'full-stack-web-development-teens-masterclass', title: 'Full stack web development', blurb: 'A real application with data behind it, built once the specification feels routine.' },
        { code: 'UK / ED3 / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science with Python', blurb: 'Published datasets questioned rather than accepted, which sixth form rewards.' },
        { code: 'UK / ED3 / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'Models trained and broken, where programming and mathematics start pulling together.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons work',
    h2: 'In an editor, weekly, against the clock later',
    lede: 'Our teachers work from India, where the clock does not shift, so the UK runs five and a half hours behind from October and four and a half from March. Times are agreed in UK time.',
    slots: [
      { time: 'Straight after school', l: 'The usual slot for Years 10 and 11.' },
      { time: 'Later in the evening', l: 'For students whose day finishes late.' },
      { time: 'Weekend morning', l: 'Long enough for a full two-hour practical and a proper review.' }
    ],
    cells: [
      { h3: 'The student types', p: 'Every lesson, in a real development environment. Watching somebody else code builds nothing an onscreen paper can use.' },
      { h3: 'Predict before running', p: 'A learner says what the program will do first. That habit is what turns an unexpected error into information.' },
      { h3: 'Testing as you go', p: 'Run it early and often, because the paper asks for programs that are tested and refined rather than merely written.' },
      { h3: 'Topics in rotation', p: 'The five written topics revisited across the year rather than blocked, because each one is a whole question.' },
      { h3: 'Timed practice later', p: 'From the spring of Year 11, six questions in two hours, with the clock visible.' },
      { h3: 'Groups by level', p: 'Five to ten students at one stage, comparing two solutions to the same problem.' }
    ]
  },

  projectsH2: 'Python our students have written',
  projectsLede: 'Four published projects from candidates of about this age. The <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'Taken from Google unedited, from families who volunteered them.',

  fees: {
    h2: 'What 1CP2 tuition costs',
    lede: 'One monthly charge in US dollars, the rate for every country outside India. The free lesson comes first and billing starts only when a course and a weekly slot are fixed.',
    free: ['A full lesson using real 1CP2 material', 'A frank view of which paper is the weaker', 'Nothing needed but a number to call'],
    group: ['Five to ten candidates at one stage', 'One named teacher throughout', 'Code read and returned every week', 'Timed practice added in the final spring'],
    one: ['Only the student and the teacher', 'Planned back from the paper dates', 'Suits a candidate chasing a specific grade']
  },

  faq: {
    eyebrow: 'Questions about Edexcel 1CP2',
    h2: 'What Edexcel candidates and parents ask',
    items: [
      { q: 'How is 1CP2 assessed?', a: 'Two externally examined papers of equal weight, 75 marks each. Paper 1 is a written examination of an hour and a half. Paper 2 is an onscreen practical of two hours.' },
      { q: 'Is Paper 2 really taken on a computer?', a: 'Yes. Students complete it onscreen in their own development environment, answering in Python 3, with coding files and a printed question paper supplied and no internet access.' },
      { q: 'How many questions are there?', a: 'Paper 1 has five compulsory questions, one focused on each topic area. Paper 2 has six compulsory questions.' },
      { q: 'Why does one question per topic matter?', a: 'Because a weak topic is a whole question rather than a scattering of marks. Even coverage across the five topics is worth more on this paper than depth in three of them.' },
      { q: 'Which language is Paper 2 in?', a: 'Python 3. The specification says the requirements of the qualification can be met using Python 3 and that students answer the onscreen questions in it.' },
      { q: 'What is supplied in the exam?', a: 'Coding files, a hard copy of the question paper, and the programming language subset both as an insert and in electronic format.' },
      { q: 'Is there any coursework?', a: 'No assessed coursework. Centres do have to complete a Practical Programming Statement, signed by a member of the senior leadership team, confirming candidates had the opportunity to program during the course.' },
      { q: 'How should my child practise for the practical paper?', a: 'By writing Python in an editor every week for two years. There is no substitute for volume, and from the spring of Year 11 add timed practice at six questions in two hours.' },
      { q: 'Do you help with the exam itself?', a: 'No. We teach the content, the fluency and the pacing beforehand. What happens in the hall is the student\'s own work, which is the whole point of an unaided practical.' },
      { q: 'What does it cost?', a: 'The opening lesson costs nothing. After that a group place is USD 100 a month and a teacher to yourself USD 150, billed monthly with nothing in advance.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Where to read next',
    lede: 'Each page takes a different part of this further.',
    items: [
      { href: '/best-python-classes-online-uk', label: 'Python classes online in the UK', p: 'What the programming language subset contains, and why to aim above it.' },
      { href: '/aqa-gcse-computer-science-8525-help', label: 'AQA GCSE Computer Science 8525', p: 'Where questions arrive in AQA pseudo-code and answers must match the form asked.' },
      { href: '/ocr-gcse-computer-science-j277-help', label: 'OCR GCSE Computer Science J277', p: 'The Not required column, and the notation choice in Section B.' },
      { href: '/coding-and-ai-classes-in-england', label: 'Coding and AI classes in England', p: 'Why most secondary schools are not required to teach computing at all.' },
      { href: '/a-level-computer-science-nea-help', label: 'A-level Computer Science coursework', p: 'What changes once a project counts towards the grade.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'The national page, and the index of every UK page we publish.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Send a number and we will reply at a British hour that suits. The lesson uses real 1CP2 material, at a keyboard, and ends with a straight view of which paper needs the work.',
    readFirst: 'Prefer reading? Syllabuses sit on each <a class="ag-inline-link" href="/courses">course page</a>, the method and its limits are in <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and the topic order runs down the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.',
    note: 'A WhatsApp message is free from a British mobile and gets the fastest answer. The number is an Indian one, said here rather than noticed later.',
    formNote: 'Nothing to pay and nothing to sign. One reply, with a time.'
  },

  footer: {
    cols: [
      { h4: 'England', links: [
        { href: '/coding-and-ai-classes-in-england', label: 'The English system' },
        { href: '/aqa-gcse-computer-science-8525-help', label: 'AQA 8525' },
        { href: '/ocr-gcse-computer-science-j277-help', label: 'OCR J277' },
        { href: '/best-python-classes-online-uk', label: 'Python classes' }
      ] },
      { h4: 'Exam help', links: [
        { href: '/a-level-computer-science-nea-help', label: 'A-level coursework' },
        { href: '/understand-the-code-dont-copy-paste-uk', label: 'AI and assessed work' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student labs' }
      ] }
    ],
    bottomRight: 'Live 1CP2 teaching, at a British hour'
  },

  personalityCss: `
.ag-root.ag-edx .ag-hero h1 { letter-spacing: -0.026em; font-weight: 650; }
.ag-root.ag-edx .ag-capsule { border-left-width: 7px; }
.ag-root.ag-edx .ag-section-head h2 { max-width: 26ch; }
.ag-root.ag-edx .ag-table caption { text-align: left; font-weight: 700; font-style: italic; }
.ag-root.ag-edx .ag-table th:first-child { width: 26%; }
.ag-root.ag-edx .ag-table td:first-child { font-weight: 650; }
.ag-root.ag-edx .ag-band-head h3 { letter-spacing: -0.006em; }
`,

  mustMention: ['five compulsory questions', 'six compulsory questions', 'Onscreen examination', 'Integrated Development Environment', 'Python 3', 'must not have access to the internet', '75 marks', 'truth tables', 'Practical Programming Statement', 'design, write, test and refine'],

  dossier: {
    curriculumAuthority: 'England, Pearson Edexcel GCSE (9-1) Computer Science 1CP2. Specification Issue 1, January 2020, read from Pearson\'s own PDF on 20 September 2026. "The Pearson Edexcel Level 1/Level 2 GCSE (9-1) in Computer Science consists of two externally-examined papers. Paper 1 is a written examination and Paper 2 is a practical onscreen assessment." Paper 1: Principles of Computer Science, code 1CP2/01, "Written examination: 1 hour and 30 minutes", "50% of the qualification", "75 marks", assessing Topics 1 to 5: computational thinking, "understanding of what algorithms are, what they are used for and how they work; ability to follow, amend and write algorithms; ability to construct truth tables"; data, "understanding of binary, data representation, data storage and compression"; computers, "understanding of hardware and software components of computer systems and characteristics of programming languages"; networks, "understanding of computer networks and network security"; issues and impact, "awareness of emerging trends in computing technologies, and the impact of computing on individuals, society and the environment, including ethical, legal and ownership issues". "This paper consists of five compulsory questions, each one focused on one of the topic areas. The questions consist of multiple-choice, short-, medium- and extended-open-response, tabular and diagrammatic items." Paper 2: Application of Computational Thinking, code 1CP2/02, "Onscreen examination: 2 hours", "50% of the qualification", "75 marks", assessing Topic 6 "Problem solving with programming", focused on algorithms in relation to creating programs, decomposing and analysing problems, and the "ability to read, write, refine and evaluate programs". "This practical paper requires students to design, write, test and refine programs in order to solve problems." "Students will complete this assessment onscreen using their Integrated Development Environment (IDE) of choice." Supplied with coding files, a hard copy of the question paper and the Programming Language Subset "as an insert in the question paper and in electronic format". "Students should then answer the questions onscreen using Python 3." "This assessment consists of six compulsory questions." Students "must not have access to the internet". Centres must complete a Practical Programming Statement signed by a member of the senior leadership team.',
    localProject: 'Five questions, five topics, nowhere to hide. Paper 1 gives exactly one compulsory question to each of the five topic areas, so a weak topic is not a scattering of marks but a whole question on a seventy-five mark paper, which makes even coverage worth more than depth and makes the common revision plan, a block on one topic in October never revisited, the single worst approach available. The second half handles the other oddity: Paper 2 is the only GCSE Computer Science paper in England sat at a keyboard, two hours in the candidate\'s own IDE, in Python 3, with coding files and a printed paper supplied and no internet, across six compulsory questions, which works out at twenty minutes each and makes pace a skill in its own right. The preparation section sets two opposite plans side by side, rotation for the written paper and sheer volume of typed Python for the practical, and names what each paper exposes. The programming language subset is referenced rather than explained, because it is the spine of the Python page. Lesson family: an assessment whose structure, rather than its content, dictates the revision plan.',
    requiredMentions: ['five compulsory questions', 'six compulsory questions', 'Onscreen examination', 'must not have access to the internet'],
    sources: [
      { claim: 'Pearson Edexcel Level 1/Level 2 GCSE (9-1) in Computer Science specification, Issue 1, January 2020: both papers with codes, formats, lengths, marks and weightings, the five topics and the one-question-per-topic structure, the question types, Topic 6, the onscreen arrangements, Python 3, the six compulsory questions, the internet prohibition and the Practical Programming Statement.', url: 'https://qualifications.pearson.com/en/qualifications/edexcel-gcses/computer-science-2020.html' }
    ],
    rejectedClaims: [
      'That Issue 1 is the current specification: it is the issue read, later ones may exist, and the page tells readers to check Pearson and ask their school.',
      'The contents of the Programming Language Subset: that is the spine of the Python classes page and is referenced here rather than repeated.',
      'Grade boundaries, pass rates or entry numbers for 1CP2: none was read at a primary source for this build.',
      'The average marks per question on Paper 1: the specification gives a total and a question count but does not publish a per-question tariff, so the page says a whole question rather than a number.',
      'Any promise about a grade: the page describes structure, habits and pacing.',
      'Examination entry fees: published in pounds, and this site prices in one currency.'
    ]
  }
};
