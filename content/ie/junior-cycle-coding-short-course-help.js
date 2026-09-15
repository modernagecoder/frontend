'use strict';
// Junior Cycle Coding short course help (ag- door, Ireland cluster, Phase 2).
// Spine: the Classroom-Based Assessment as the NCCA's June 2025 guidelines and
// specification set it out, with the Framework for Junior Cycle 2015 (read at
// curriculumonline.ie and assets.gov.ie, 16 September 2026): one CBA, "Putting
// the Pieces Together", either a Software Project (teams of two or three, each
// student assessed on their own role, five aspects) or a Coding Portfolio
// (individual, between 3 and 5 pieces with reflections, four aspects); in
// second or third year, never first year for the JCPA; after all three strands;
// "approximately 6 - 8 hours"; four descriptors judged "best fit" against the
// Features of Quality, moderated at a review meeting and reported on the JCPA
// in the autumn after third year; short courses are school-assessed, with no
// State exam. AI outcomes 2.8 and 2.9; website outcome 2.5; students may pick
// their own language in Strand 3; schools may adapt the course and the CBA.
// The owned facts (100 hours as a headline, strand names, aim sentence, NFQ
// level, the AI-referencing line) are not repeated. We never do CBA work.

module.exports = {
  cluster: 'ag',
  clusterName: 'Ireland',
  hub: { group: 'guide', tag: 'JUNIOR CYCLE', blurb: 'The Coding short course and its Classroom-Based Assessment, explained, with the help a learner can have and the line we never cross.' },
  slug: 'junior-cycle-coding-short-course-help',
  code: 'jcc',
  accent: '#77436B',
  accentRationale: 'Junior Cycle Coding: a muted heather from the solver, separated from both Irish greens and every other Ireland page',
  pageType: 'market',
  market: { name: 'Ireland', iso: 'IE', dial: '+353', lang: 'en-IE', locale: 'en_IE', geoRegion: 'IE', brandTag: 'Ireland', phonePlaceholder: '87 123 4567', minDigits: 7 },
  routeLabel: 'Junior Cycle Coding short course help',
  title: 'Junior Cycle Coding Short Course Help | Live Online Support',
  description: 'Help with the Junior Cycle Coding short course: the strands, the Putting the Pieces Together CBA and the new AI outcomes, with a live teacher. First class free.',
  ogDescription: 'The Junior Cycle Coding short course ends in one Classroom-Based Assessment with two options. What each asks for, how it is judged, and the help a student can properly have.',
  twitterDescription: 'Junior Cycle Coding explained: the CBA, the descriptors and the AI outcomes, with live lessons that never touch assessed work.',
  pageName: 'Junior Cycle Coding Short Course Help',
  webPageDescription: 'A guide to the Junior Cycle Coding short course and its Classroom-Based Assessment, Putting the Pieces Together, from the NCCA\'s 2025 documents, with live online lessons that build the skills and never touch assessed work.',
  courseDescription: 'Live online coding lessons for Junior Cycle students in Ireland, covering the programming, web and AI topics of the Coding short course on separate examples, placed by ability.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Ireland', href: '/coding-classes-in-ireland' }],
  crumbLabel: 'Junior Cycle Coding help',
  navLinks: [
    { href: '#cba', label: 'The CBA' },
    { href: '#judged', label: 'How it is judged' },
    { href: '#ai', label: 'AI in the course' },
    { href: '#help', label: 'Fair help' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Ireland &middot; Junior Cycle &middot; Coding short course',
  h1: 'Junior Cycle Coding short course help',
  lede: 'The Coding short course is one of the few places in the Junior Cycle where a student builds real software, and it ends in a single piece of assessed work that the school, not the State, judges. Parents often hear about it for the first time when that work is due, and then the questions arrive together: what exactly has to be handed in, who marks it, what the words on the report mean, and what help is fair. This page answers those questions from the NCCA\'s own documents, the June 2025 specification and assessment guidelines, together with the Framework for Junior Cycle. It then explains what live lessons can do for a student taking the course: build the programming, web and AI skills behind it, on different examples, so the student arrives at the assessment able to do the work themselves. We never write, edit or check a student\'s assessed work, and the guidelines explain why that line matters.',
  secondaryCta: { href: '#cba', label: 'See what is assessed' },
  wa: 'Hello Modern Age Coders, my child is taking the Junior Cycle Coding short course. Could we book a free first class?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; skills taught, assessed work untouched',
  spec: [
    ['For', 'First, Second and Third Year'],
    ['Covers', 'Programming, web, AI topics'],
    ['Assessment', 'One CBA, two options'],
    ['Our role', 'Skills on separate examples'],
    ['Format', 'Live, with a teacher'],
    ['Groups', 'Five to ten, or one to one'],
    ['Hours', 'After school, Irish time'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'The Junior Cycle Coding short course has one Classroom-Based Assessment, called Putting the Pieces Together. Students choose a Software Project, built in a team of two or three but assessed on each student\'s own role, or an individual Coding Portfolio of 3 to 5 pieces with reflections. It takes place in second or third year, after all three strands, over about six to eight hours, and the school awards one of four descriptors, which appears on the Junior Cycle Profile of Achievement. Modern Age Coders teaches the skills behind the course live online, on separate examples, in groups of five to ten or one to one. We never touch assessed work. The first class is free; later a group place is USD 100 a month, and one-to-one USD 150.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses that match the short course\'s ground',
    lede: 'Programming, the web and AI are the three things the course asks students to handle. One card for each, each opening its syllabus.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'JC / 01', title: 'Python for Teens', note: 'Typed programming practised until loops, functions and debugging feel ordinary, the base for either assessment option.' },
      { course: 'html-css-course-for-beginners-build-real-websites', code: 'JC / 02', title: 'HTML and CSS for Beginners', note: 'Real web pages from the first tag, matching the course outcome that asks students to build a small website.' },
      { course: 'ai-literacy-for-kids-course', code: 'JC / 03', title: 'AI Literacy for Kids', note: 'What AI models are, where they are used in coding, and their limits and risks, for learners up to fourteen.' }
    ]
  },

  sections: [
    {
      id: 'cba', tint: 'tint', eyebrow: 'The assessment',
      h2: 'The Classroom-Based Assessment: Putting the Pieces Together',
      lede: 'The 2025 guidelines give the short course one Classroom-Based Assessment, and students choose between two ways of completing it.',
      body: [
        { kind: 'table', caption: 'The two options, from the NCCA assessment guidelines (June 2025)', head: ['', 'Software Project', 'Coding Portfolio'], rows: [
          ['Who does it', 'A team of two or three, each student assessed on their own role and contribution', 'The student alone; group work may be included if the student\'s part is clearly marked'],
          ['What is produced', 'One piece of software of the team\'s choice, researched, designed, implemented, tested, documented and presented to peers', 'Between 3 and 5 pieces of work from the three strands, each with a reason for choosing it and a short reflection, plus an overall reflection'],
          ['Aspects', 'Five: research and planning; design, implementation and testing; documentation of work and code; presentation; assessment of feedback', 'Four: choosing the pieces; curating them; explaining and reflecting on each; an overall reflection'],
          ['Form', 'Software, its documentation and a presentation', 'Digital, physical or a mix of both']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'When it happens',
          left: [
            'Students prepare for it over a suggested period in second or third year. The guidelines are firm that assessments for the Junior Cycle Profile of Achievement cannot be conducted in first year, and that work completed in year one cannot be included.',
            'The assessment begins only after the work in the three strands is complete, and either option is expected to take approximately 6 - 8 hours.'
          ],
          rightH3: 'Questions the portfolio asks',
          right: [
            'Students writing portfolio notes are given guiding questions, among them: "Why is the piece of work a good example of my learning and skills?" and "If there is a mistake in the work can I explain how I learned from it for a later piece of work".',
            'Those questions reward a student who understands their own code. A portfolio built from work the student cannot explain has nothing honest to reflect on.'
          ] },
        { kind: 'source', html: 'Sources, read 16 September 2026: <a class="ag-inline-link" href="https://www.curriculumonline.ie/getmedia/79e917af-e0ef-4bdc-9f38-bb7b6d11a372/CODING_Assessment_Guidelines_2025_EN.pdf" rel="noopener" target="_blank">NCCA, Junior Cycle Coding: Guidelines for the Classroom-Based Assessment (June 2025)</a>; <a class="ag-inline-link" href="https://www.curriculumonline.ie/getmedia/19fa6f7c-bd10-4dec-a80a-fa6b269315e4/NCCA-JC-Short-Course-Coding-EN-2025.pdf" rel="noopener" target="_blank">NCCA, Short Course Coding specification (June 2025)</a>; <a class="ag-inline-link" href="https://assets.gov.ie/static/documents/framework-for-junior-cycle-2015.pdf" rel="noopener" target="_blank">Framework for Junior Cycle 2015</a>. Schools may adapt the short course and its assessment, so always check the school\'s own version.' }
      ]
    },
    {
      id: 'judged', tint: 'deep', eyebrow: 'How it is judged',
      h2: 'Four descriptors, a best-fit judgement, and a line on the JCPA',
      lede: 'There are no marks or percentages. The teacher chooses the descriptor that best fits the work, measured against published Features of Quality.',
      body: [
        { kind: 'table', caption: 'The four descriptors, in the guidelines\' words', head: ['Descriptor', 'What it describes'], rows: [
          ['Exceptional', 'Work that reflects the Features of Quality to a very high standard; while not necessarily perfect, its strengths far outstrip its flaws, which are minor'],
          ['Above expectations', 'Work that reflects the Features of Quality very well'],
          ['In line with expectations', 'Work that reflects most of the Features of Quality well, shows a good understanding of the task and is free from significant error'],
          ['Yet to meet expectations', 'Work that falls someway short of the demands of the assessment and its Features of Quality']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The guidelines describe a "best fit" approach: the teacher selects the descriptor that on balance describes the work. They also say results should not be assumed to follow any distribution, because each student is judged against the Features of Quality, not against classmates.',
            'Descriptors are discussed at a subject review meeting in the school before students are told, and any query is dealt with by the school. Short courses are assessed by teachers and reported by the school; there is no State examination for them.'
          ],
          right: [
            'The result is reported to parents and appears on the Junior Cycle Profile of Achievement, which students receive in the autumn after third year. The Framework allows a maximum of four short courses on the profile where a student sits eight examination subjects, and two where they sit nine.',
            'A short course is also a lighter commitment than a subject: the Framework asks for its time over three years, against a minimum of 200 hours for most subjects and 240 for English, Irish and Mathematics.'
          ] }
      ]
    },
    {
      id: 'ai', tint: 'tint', eyebrow: 'AI in the course',
      h2: 'What the 2025 specification asks students to learn about AI',
      lede: 'The revised specification gives artificial intelligence its own topic in the second strand, and brings it into the first strand\'s look at computers in society.',
      body: [
        { kind: 'table', caption: 'AI and related outcomes in the June 2025 specification', head: ['Outcome', 'Wording', 'Assessed in'], rows: [
          ['2.8', 'identify different AI models and how they can be applied in coding', 'The Coding Portfolio option'],
          ['2.9', 'discuss the use of AI models when applied in coding, their potential advantages and limitations and any ethical and safety issues which may arise', 'The Software Project option'],
          ['2.5', 'create a small website using HTML and CSS to showcase their learning', 'Taught in the strands']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The first strand, taken before the others, includes a topic on the importance of computers in society, "including the ethical uses of computers, software, and Artificial Intelligence (AI)".',
            'The specification leaves room for choice: students may use a programming language of their choice in the third strand, and free and open-source software should be used where practical, so students can examine the source code of their tools.'
          ],
          right: [
            'Discussing AI\'s advantages, limitations and risks, as outcome 2.9 asks, is far easier for a student who has used AI tools with guidance and seen them get things wrong. Our lessons give students that experience on practice projects.',
            'For how AI tools and a student\'s own work fit together under Irish guidance, see <a class="ag-inline-link" href="/understand-the-code-dont-copy-paste-ireland">understanding the code instead of copy-pasting</a>.'
          ] }
      ]
    },
    {
      id: 'help', tint: '', eyebrow: 'Fair help',
      h2: 'What help is fair, and what we do',
      lede: 'The guidelines draw the line clearly. We teach on the right side of it.',
      body: [
        { kind: 'three', cells: [
          { h3: 'The rule', p: 'The guidelines state that "Work which cannot be authenticated by the teacher cannot be accepted" for the profile, and that only work which is the student\'s own can be accepted.' },
          { h3: 'What we teach', p: 'The programming, web and AI skills the strands cover, on practice projects that are not the assessed work, so the student can do the real thing alone.' },
          { h3: 'What we never do', p: 'Write, edit, debug or review any part of a student\'s Software Project or Coding Portfolio, or draft their reflections. During the assessment weeks our lessons move to different examples.' }
        ] },
        { kind: 'p', mt: true, html: 'After the short course, the specification itself points to what comes next: coding and computer science through Transition Year modules or, where the school offers it, Leaving Certificate Computer Science. Our pages on the <a class="ag-inline-link" href="/transition-year-coding-course-ireland">Transition Year coding course</a> and on <a class="ag-inline-link" href="/leaving-cert-computer-science-grinds-online">Leaving Cert Computer Science grinds</a> take up both paths.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The ladder',
    h2: 'Five rungs across the three Junior Cycle years',
    lede: 'The rungs follow the course\'s own order: the introductory strand first, then programming and the web, then the kind of work the assessment asks for.',
    table: { caption: 'Building towards the Classroom-Based Assessment', head: ['Usually', 'Rung', 'The student can'], rows: [
      ['First Year', '1. Computers in society', 'Explain how computers, software and AI shape everyday life, and their ethical questions'],
      ['First Year', '2. First programs', 'Write and fix small programs with loops, choices and variables'],
      ['Second Year', '3. The web', 'Build a small website in HTML and CSS'],
      ['Second Year', '4. Bigger projects', 'Plan, build, test and document a program of their own on a practice project'],
      ['Second or Third Year', '5. Reflect and present', 'Explain their own work, what went wrong and what they learned']
    ] },
    left: { h3: 'Why practice projects matter', ps: [
      'A student who has already planned, built and presented two or three practice projects meets the real assessment knowing the shape of the task. The assessed work then stays entirely their own.',
      'The full order of subjects is on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Around the school\'s timetable', ps: [
      'Schools choose when the course runs and may adapt it. We ask what the school is covering and fit practice around it, pausing during the assessment weeks.',
      'Students not taking the short course can follow the same rungs; see <a class="ag-inline-link" href="/best-online-coding-classes-ireland">the best online coding classes in Ireland</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine live courses for the Junior Cycle years',
    lede: 'Grouped by the course\'s three kinds of work. The free first class decides where a student starts.',
    bands: [
      { num: 'I', h3: 'Programming', sub: 'From blocks to typed code', courses: [
        { code: 'JC / CODE / 01', slug: 'scratch-programming-complete-course', title: 'Scratch Coding for Kids', blurb: 'Blocks for students not yet ready for typed code.' },
        { code: 'JC / CODE / 02', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'Typed programming, learned for depth.' },
        { code: 'JC / CODE / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem Solving for Teens', blurb: 'Breaking problems down and testing solutions.' }
      ] },
      { num: 'II', h3: 'The web', sub: 'Pages, then interactive sites', courses: [
        { code: 'JC / WEB / 01', slug: 'html-css-course-for-beginners-build-real-websites', title: 'HTML and CSS for Beginners', blurb: 'Real responsive pages from the first tag.' },
        { code: 'JC / WEB / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for Teens', blurb: 'Interactive pages and small browser games.' },
        { code: 'JC / WEB / 03', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub for Teens', blurb: 'A record of the student\'s own work over time.' }
      ] },
      { num: 'III', h3: 'AI', sub: 'Understanding it before relying on it', courses: [
        { code: 'JC / AI / 01', slug: 'ai-literacy-for-kids-course', title: 'AI Literacy for Kids', blurb: 'How AI works and where it fails, up to age fourteen.' },
        { code: 'JC / AI / 02', slug: 'teens-ai-tools-mastery-course', title: 'AI Tools for Teens', blurb: 'AI tools used well and safely, from thirteen.' },
        { code: 'JC / AI / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and Machine Learning for Teens', blurb: 'Models built and tested by the student.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Lessons that fit beside the school course',
    lede: 'Lessons are live and taught from India, at a regular hour set in Irish time; Irish time is five and a half hours behind India time in winter and four and a half in summer. Junior Cycle students usually take one or two lessons a week after school.',
    slots: [
      { time: 'After school', l: 'A weekday late afternoon, Irish time.' },
      { time: 'Weekend', l: 'Saturday or Sunday, for longer practice projects.' },
      { time: 'Assessment weeks', l: 'Lessons switch to unrelated examples while the CBA is under way.' }
    ],
    cells: [
      { h3: 'A first class, free', p: 'A short task in code, so the teacher can see where the student stands and suggest a starting point.' },
      { h3: 'Small groups', p: 'Five to ten students at the same level, many of them taking school computing courses of their own.' },
      { h3: 'One to one', p: 'For a student who wants the teacher\'s full attention, or who is far ahead of their class.' },
      { h3: 'Practice, not the real thing', p: 'Every project in our lessons is separate from school assessed work, by design.' },
      { h3: 'Irish terms kept', p: 'Strands, CBA, descriptors and JCPA are used as Irish schools use them; lessons are in English.' },
      { h3: 'A visible record', p: 'Practice work stays in the student\'s own folder, a record of how their skills grew.' }
    ]
  },

  projectsH2: 'Projects built by our students outside school',
  projectsLede: 'Four live projects by our students. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Reproduced from Google without changes. No review here was written or paid for by us.',

  fees: {
    h2: 'Fees',
    lede: 'A single monthly price in US dollars for families anywhere outside India. Joining costs nothing extra, and there is no contract for the school year.',
    free: ['A short coding task with a teacher', 'A suggested starting point', 'No payment details'],
    group: ['Five to ten students at one level', 'One teacher all term', 'Practice work reviewed each week', 'A certificate at the end'],
    one: ['A teacher for one student', 'Fitted around the school course', 'Paused for assessment weeks']
  },

  faq: {
    eyebrow: 'Questions from Junior Cycle families',
    h2: 'What parents and students ask about the Coding short course',
    items: [
      { q: 'How many Classroom-Based Assessments does the Coding short course have?', a: 'One. It is called Putting the Pieces Together, and students complete it as either a Software Project or a Coding Portfolio.' },
      { q: 'Can the assessment be done in First Year?', a: 'Not for the Junior Cycle Profile of Achievement. The guidelines say it takes place in second or third year, after all three strands are complete, and that first-year work cannot be included.' },
      { q: 'How long does the assessment take?', a: 'The guidelines expect either option to take approximately six to eight hours.' },
      { q: 'Is the Software Project marked as a team?', a: 'No. Students work in teams of two or three, but each student is assessed on their own role and contribution.' },
      { q: 'What do the descriptors mean?', a: 'There are four: Exceptional, Above expectations, In line with expectations and Yet to meet expectations. The teacher picks the best fit against published Features of Quality, and the result appears on the JCPA.' },
      { q: 'Is there a State exam for the short course?', a: 'No. Short courses are assessed by the student\'s teachers and reported by the school, including on the Junior Cycle Profile of Achievement.' },
      { q: 'Can you help with my child\'s CBA?', a: 'We teach the skills behind it on separate practice projects. We never write, edit, debug or review the assessed work itself, because only work the teacher can authenticate as the student\'s own can be accepted.' },
      { q: 'What does it cost?', a: 'The first class is free. After that, lessons cost USD 100 a month in a group or USD 150 a month one to one, paid in US dollars, with no joining fee and no year-long contract.' },
      { q: 'What time are lessons?', a: 'After school or at the weekend, at an hour fixed in Irish time. Our teachers are five and a half hours ahead in winter and four and a half in summer.' },
      { q: 'What happens after I fill in the form?', a: 'Someone from our team calls a parent at a sensible Irish time and books the free first class. Nothing is charged unless the student carries on.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'What comes before and after the short course',
    lede: 'Pages for the years around the Junior Cycle.',
    items: [
      { href: '/transition-year-coding-course-ireland', label: 'Transition Year coding course', p: 'The year after the Junior Cycle.' },
      { href: '/leaving-cert-computer-science-grinds-online', label: 'Leaving Cert Computer Science grinds', p: 'For students who take the subject.' },
      { href: '/understand-the-code-dont-copy-paste-ireland', label: 'Understand the code, do not copy-paste', p: 'AI tools and a student\'s own work.' },
      { href: '/best-online-coding-classes-ireland', label: 'Best online coding classes in Ireland', p: 'The whole school path, stage by stage.' },
      { href: '/after-coderdojo-next-step-coding-ireland', label: 'After CoderDojo', p: 'For students coming from a coding club.' },
      { href: '/coding-classes-in-ireland', label: 'Coding classes in Ireland', p: 'The national page.' }
    ]
  },

  start: {
    h2: 'Book a free first class for a Junior Cycle student',
    lede: 'Leave a parent\'s number and we will call when it suits an Irish household. In the first class the student tries a short coding task, and the teacher suggests where to begin, well away from any assessed work.',
    readFirst: 'To read more first: the <a class="ag-inline-link" href="/how-we-teach">way we teach</a>, the individual <a class="ag-inline-link" href="/courses">course syllabuses</a>, and the <a class="ag-inline-link" href="/coding-roadmap">order in which topics build</a>.',
    note: 'Messaging on WhatsApp is free from Irish phones and tends to get the fastest answer. The number belongs to our team in India; we have no premises in Ireland.',
    formNote: 'No card details and no obligation. A single call to arrange the class.'
  },

  footer: {
    cols: [
      { h4: 'Irish school years', links: [
        { href: '/best-online-coding-classes-ireland', label: 'Best online classes, Ireland' },
        { href: '/transition-year-coding-course-ireland', label: 'Transition Year coding' },
        { href: '/leaving-cert-computer-science-grinds-online', label: 'LC Computer Science grinds' },
        { href: '/coding-classes-in-ireland', label: 'Coding classes in Ireland' }
      ] },
      { h4: 'Doing it properly', links: [
        { href: '/understand-the-code-dont-copy-paste-ireland', label: 'Understand the code' },
        { href: '/how-to-read-code', label: 'Read code' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/coding-roadmap', label: 'The coding roadmap' }
      ] }
    ],
    bottomRight: 'Junior Cycle coding, on Irish time'
  },

  personalityCss: `
.ag-root.ag-jcc .ag-hero-grid { gap: clamp(1.15rem, 3.2vw, 2.75rem); }
.ag-root.ag-jcc .ag-hero h1 { letter-spacing: -0.021em; }
.ag-root.ag-jcc .ag-capsule { border-left-width: 4px; }
.ag-root.ag-jcc .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-jcc .ag-table caption { text-align: left; }
.ag-root.ag-jcc .ag-band-head h3 { letter-spacing: -0.007em; }
.ag-root.ag-jcc .ag-spec dt { letter-spacing: 0.13em; }
.ag-root.ag-jcc .ag-slots { gap: 1.1rem; }
`,

  mustMention: ['Putting the Pieces Together', 'Software Project', 'Coding Portfolio', 'Between 3 and 5 pieces', 'cannot be conducted in first year', 'approximately 6 - 8 hours', 'Yet to meet expectations', 'best fit', 'Work which cannot be authenticated by the teacher cannot be accepted', 'discuss the use of AI models when applied in coding', 'eight examination subjects']
};
