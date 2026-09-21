'use strict';
// WJEC GCSE Digital Technology help, Wales (ag- exam door; UK cluster Phase 3).
// Sources, read raw on 21 September 2026 (WJEC PDFs via curl + PyMuPDF; pages via curl):
//  - WJEC GCSE Digital Technology Specification, teaching from 2026, for award from 2028, Version 2,
//    February 2026, Qualification Approval Number C00/5167/7. Verbatim: Unit 1 The Digital World "Digital
//    examination: 1 hour 30 minutes", "40% of qualification", "80 marks"; Unit 2 Digital Practices
//    "Non-examination assessment: 20 hours", "40% of qualification", "80 marks", "Set by WJEC, marked by
//    the Centre and moderated by WJEC"; Unit 3 Communicating in the Digital World "Non-examination
//    assessment: 10 hours", "20% of qualification", "60 marks"; "It is not tiered"; Unit 1 exam "first
//    available in 2028"; Units 2 and 3 submission "for the first time in summer 2027"; first award 2028;
//    "All learners must produce a multi-page website, and they may choose to create either a computer game
//    or a 2D animation"; research time "does not form part of their non- examination assessment time" and
//    has internet access; "The client brief will change annually, the tasks and mark scheme will remain
//    the same."; Unit 3: "plan and create a video for a digital marketing campaign", research on social
//    media platforms, export the video; AO weights Unit 1 AO1 20 AO2 20, Unit 2 AO3 15 AO4 25, Unit 3 AO2 5
//    AO3 5 AO4 10; Unit 1 areas 1.1 Data, 1.2 Digital technology systems, 1.3 Digital Communication, 1.4 The
//    digital shift: work, trade, and monetisation, 1.5 Securing data and systems, 1.6 Emerging and evolving
//    digital technologies (incl. 1.6.2 Artificial intelligence (AI) models); "120 – 140 guided learning hours".
//  - WJEC Unit 2 Sample Assessment Materials (2025): 20 hours, suggested 2.5 / 1 / 2.5 / 13 / 1 hours for
//    Tasks 1-5; mark record 1(a) 5, 1(b) 5, 2(a) 5, 2(b) 5, 3(a) 10, 3(b) 5, 4(a) 10, 4(b) 25, 5(a) 5,
//    5(b) 5, total 80; high control: "No communication with peers is allowed", "No assistance may be given
//    by the teacher beyond reading the instructions"; research from non-supervised sessions must be
//    referenced; "If you receive help and guidance from someone other than your teacher, you must tell your
//    teacher who will then record the nature of the assistance given to you."; AI tools must be
//    referenced; skills graded basic, medium and complex in Appendix A; game top band "at least five
//    complex, five medium, and five basic game development techniques are applied".
//  - WJEC earlier GCSE Digital Technology page: "Summer 2027 will be the final full assessment opportunity
//    for this qualification. A resit opportunity for examinations will be available in January 2028,
//    subject to demand."; no Year 10 entries from September 2026.
// Spine: the mirror image of Computer Science. WJEC's two computing GCSEs are built in opposite ways:
// Computer Science is all exam, on screen, in Python; Digital Technology is sixty per cent made in school
// under supervision, where the one choice between a game and a 2D animation carries 25 of Unit 2's 80
// marks and the tasks never change from year to year. Help therefore has to come before the controlled
// hours, and any outside help must be declared.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'WJEC DIGITAL', blurb: 'The mirror image of Computer Science: sixty per cent made in school, and a game-or-animation choice worth 25 marks.' },
  slug: 'wjec-gcse-digital-technology-help-wales',
  code: 'wjdt',
  accent: '#4E0E39',
  accentRationale: 'Digital Technology: a deep plum from the solver (11.79:1 on every paper tint, dE 9.6 from the nearest used accent), a cooler partner to the red of the WJEC Computer Science page so the two Welsh GCSEs read as a pair',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'WJEC GCSE Digital Technology help',
  title: 'WJEC GCSE Digital Technology Help, Wales | From 2026',
  description: 'WJEC GCSE Digital Technology help in Wales: 60 per cent made in school, a website plus a game or 2D animation, and a video campaign. What to learn first.',
  ogDescription: 'WJEC\'s two computing GCSEs are opposites. Digital Technology is sixty per cent made in school, and one choice carries 25 marks.',
  twitterDescription: 'WJEC GCSE Digital Technology from 2026: the three units, the 25-mark choice between a game and an animation, and what help is allowed.',
  pageName: 'WJEC GCSE Digital Technology Help, Wales',
  webPageDescription: 'Live online teaching for the WJEC Made-for-Wales GCSE Digital Technology, first taught in September 2026, built from the specification and the Unit 2 sample pack.',
  courseDescription: 'Live online teaching for WJEC GCSE Digital Technology candidates in Wales: websites, game development, 2D animation, video, spreadsheet data skills and the Unit 1 theory, taught before any controlled work.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'WJEC GCSE Digital Technology',
  navLinks: [
    { href: '#mirror', label: 'Two opposite GCSEs' },
    { href: '#unit2', label: 'Unit 2' },
    { href: '#control', label: 'What help is allowed' },
    { href: '#unit1', label: 'Units 1 and 3' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Wales &middot; WJEC GCSE &middot; Years 10 and 11',
  h1: 'WJEC GCSE Digital Technology help, Wales',
  lede: 'Wales has two computing GCSEs from the same awarding body, and they are built as opposites. WJEC\'s Computer Science is entirely examined, both units on screen, with Python named in the rules. Its Digital Technology, first taught this month under the Made-for-Wales reforms, puts sixty per cent of the marks into non-examination work set by WJEC and marked in school: a multi-page website and either a computer game or a 2D animation for one client brief, then a marketing video for another. Inside that work, the choice between the game and the animation carries 25 of Unit 2\'s 80 marks, and WJEC says the tasks and mark scheme stay the same every year while only the client changes. So the skills can be learned well in advance, and that is exactly where outside help belongs. Once Unit 2\'s supervised hours begin, the rules leave no room for anyone but the candidate.',
  secondaryCta: { href: '#unit2', label: 'Unit 2 in detail' },
  wa: 'Hello Modern Age Coders, I would like a free first lesson for WJEC GCSE Digital Technology.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Drawn from WJEC\'s own specification and assessment pack',
  spec: [
    ['Qualification', 'WJEC GCSE Digital Technology, Made for Wales'],
    ['Made in school', '60 per cent, across two units'],
    ['Unit 2', 'Website plus game or 2D animation, 20 hours'],
    ['Unit 3', 'Marketing campaign video, 10 hours'],
    ['Unit 1', 'Digital exam, 1 hour 30 minutes, 40 per cent'],
    ['First award', 'Summer 2028'],
    ['Controlled work', 'Never touched by us'],
    ['Start', 'One free lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Digital Technology, the second of WJEC\'s two computing GCSEs for Wales, was first taught in September 2026 and is first awarded in 2028. It has three units. Unit 1, The Digital World, is a 1 hour 30 minute digital exam worth 40 per cent. Unit 2, Digital Practices, is 20 hours of non-examination assessment worth 40 per cent: data work in a spreadsheet, a proposal, design options, then a multi-page website plus either a computer game or a 2D animation, tested and evaluated. Unit 3, Communicating in the Digital World, is 10 hours worth 20 per cent: a digital marketing campaign and its video. Units 2 and 3 are set by WJEC, marked in school and moderated; Unit 2 runs under supervision where the teacher may give no help beyond reading the instructions, and any help from anyone else must be declared. Modern Age Coders teaches the skills those tasks grade, web, game development, animation, video and spreadsheets, on practice briefs of our own before the controlled hours start, and the Unit 1 theory. We never touch a candidate\'s brief, research, assets or assessed work. The first lesson is free, then USD 100 a month in a group or USD 150 one to one.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for the Unit 2 products',
    lede: 'The website everyone builds, and one course for each side of the game-or-animation choice. Cards open the full syllabus.',
    items: [
      { course: 'html-css-course-for-beginners-build-real-websites', code: 'DT / 01', title: 'HTML and CSS', note: 'Multi-page sites with navigation, media, links and consistent styles: the compulsory Unit 2 website.' },
      { course: 'complete-game-development-masterclass-for-teens', code: 'DT / 02', title: 'Game Development for Teens', note: 'Scripted game behaviour, characters, levels, sound and interfaces, for candidates choosing the game.' },
      { course: 'creative-coding-animation-mastery', code: 'DT / 03', title: 'Creative Coding and Animation', note: 'Animation, motion and video editing, for candidates choosing the 2D animation and for the Unit 3 video.' }
    ]
  },

  sections: [
    {
      id: 'mirror', tint: 'tint', eyebrow: 'Two opposite GCSEs',
      h2: 'Computer Science and Digital Technology, side by side',
      lede: 'Both are WJEC, both are Made for Wales, and a school may offer either or both. They assess almost opposite things.',
      body: [
        { kind: 'table', caption: 'WJEC\'s two computing GCSEs', head: ['', 'Computer Science', 'Digital Technology'], rows: [
          ['First taught', 'September 2025', 'September 2026'],
          ['First awarded', 'Summer 2027', 'Summer 2028'],
          ['Examined', 'All of it: two on-screen exams', 'Unit 1 only, 40 per cent'],
          ['Made in school', 'None', '60 per cent, in 30 hours of non-examination assessment'],
          ['At its core', 'Programming in Python, reading and extending code', 'Making digital products for a client: website, game or animation, video'],
          ['Data work', 'Data structures inside programs', 'Cleaning and analysing a dataset in a spreadsheet'],
          ['Tiered', 'No', 'No']
        ] },
        { kind: 'p', html: 'For a Year 9 student choosing options, the question is less which is harder than which kind of work they want graded. A student who enjoys solving problems in code and performs well in exams will find Computer Science a closer fit. A student who likes making things people use and look at, and works steadily over weeks, may do better in Digital Technology, where most of the marks are earned at a desk in school over many sessions rather than on two exam mornings.' },
        { kind: 'two', mt: true,
          leftH3: 'What Digital Technology rewards',
          left: [
            'Planning for an audience: the Unit 2 brief comes with qualitative data on styles and themes and a quantitative dataset to analyse for audience needs, trends and preferences.',
            'Finished, working products, built from a design the candidate chose and justified, and tested throughout.'
          ],
          rightH3: 'What it does not need',
          right: [
            'A particular programming language named in the rules. The products need scripting and web skills, but the specification does not fix one language the way Computer Science fixes Python.',
            'Exam technique for most of the marks. Only Unit 1 is sat as an exam.'
          ] },
        { kind: 'p', html: 'The <a class="ag-inline-link" href="/wjec-gcse-computer-science-help-wales">WJEC Computer Science page</a> covers the other GCSE in the same depth, and the <a class="ag-inline-link" href="/choosing-gcse-computer-science-year-9-options">page on Year 9 options</a> sets out what the evidence says about choosing a computing subject at 14.' },
        { kind: 'source', html: 'Source: the WJEC GCSE Digital Technology Specification, teaching from 2026, version 2, February 2026, and the WJEC GCSE Computer Science Specification, teaching from 2025, both linked from the <a class="ag-inline-link" href="https://www.wjec.co.uk/qualifications/gcse-digital-technology-teaching-from-2026/" rel="noopener" target="_blank">WJEC Digital Technology page</a> and its Computer Science counterpart.' }
      ]
    },
    {
      id: 'unit2', tint: 'deep', eyebrow: 'Unit 2: Digital Practices',
      h2: 'Twenty supervised hours, and one choice worth 25 marks',
      lede: 'From the Unit 2 sample assessment pack. WJEC sets a new client brief each September; the tasks and the mark scheme do not change.',
      body: [
        { kind: 'table', caption: 'Unit 2 tasks, marks and suggested hours', head: ['Task', 'What the candidate produces', 'Marks', 'Suggested hours'], rows: [
          ['1. Data', 'A cleaned, organised dataset, then analysis showing audience needs, trends and preferences, all in a spreadsheet', '10', '2.5'],
          ['2. Proposal', 'A digital product proposal and a time plan', '10', '1'],
          ['3. Design', 'Annotated design options, and a justified choice between them', '15', '2.5'],
          ['4a. Website', 'A functional multi-page website with media, navigation, links and consistent styles', '10', '13, shared'],
          ['4b. Game or animation', 'Either a multilevel computer game or a 2D animation', '25', '13, shared'],
          ['5. Evaluation', 'An evaluation of the ongoing testing and of the finished products', '10', '1']
        ] },
        { kind: 'p', html: 'Task 4 takes thirteen of the twenty hours and 35 of the 80 marks, and most of that sits in the second product. The website is compulsory but worth 10. The game or the animation is worth 25, nearly a third of the unit and its largest single allocation, so the choice between them is the decision with the most marks riding on it in Unit 2.' },
        { kind: 'two', mt: true,
          leftH3: 'If the candidate chooses the game',
          left: [
            'A multilevel game that uses scripting to control its behaviour, characters, objects and environments with animation, sound effects and background music, and an interface that is intuitive and engaging.',
            'The top band asks for "at least five complex, five medium, and five basic game development techniques" from WJEC\'s own list, all of them suitable. That is a volume of technique nobody learns inside thirteen supervised hours.'
          ],
          rightH3: 'If the candidate chooses the animation',
          right: [
            'A 2D animation built with suitable production skills, sound that supports it, and multiple animation sets for different scenes and actions, and timeline control of timing and movement, graded against its own list of basic, medium and complex techniques.',
            'The same logic applies: the techniques are graded by level, so they have to be familiar before the controlled hours begin.'
          ] },
        { kind: 'p', html: 'The website, the spreadsheet work and the second product are all graded partly by counting techniques at three levels, basic, medium and complex, from lists in the assessment pack. A candidate who has used those techniques many times before, on unrelated projects, spends the supervised hours building. One who meets them for the first time in the room spends the hours learning, and the marks show it.' },
        { kind: 'source', html: 'Source: WJEC GCSE Digital Technology Unit 2 Sample Assessment Materials (2025), including the candidate mark record sheet, the suggested timings and the mark bands for Task 4. The specification confirms that the client brief changes annually while the tasks and mark scheme stay the same.' }
      ]
    },
    {
      id: 'control', tint: '', eyebrow: 'What help is allowed',
      h2: 'High control, and why we step back before it starts',
      lede: 'Units 2 and 3 are marked in school and moderated by WJEC. The conditions are strict, and they cover outside help too.',
      body: [
        { kind: 'table', caption: 'Unit 2 conditions, from the sample pack', head: ['Condition', 'What it means'], rows: [
          ['Supervision', 'Work is done under formal supervision in class, and stays in school between sessions'],
          ['Teacher help', '"No assistance may be given by the teacher beyond reading the instructions"'],
          ['Other students', 'No communication with peers, even about unrelated topics'],
          ['Research', 'Allowed in separate research time, with internet access, and it must be referenced when brought in'],
          ['Outside help', 'Must be declared: "If you receive help and guidance from someone other than your teacher, you must tell your teacher who will then record the nature of the assistance given to you."'],
          ['AI tools', 'Must be referenced, and copying a solution produced by AI is treated as cheating']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What we do',
          left: [
            'Teach the techniques the tasks grade, at all three levels, on practice briefs we write ourselves: websites for invented clients, small multilevel games, short 2D animations, marketing videos, and messy spreadsheets to clean.',
            'Finish that work before the school\'s controlled hours begin, so nothing we set can be mistaken for, or merged into, assessed work.'
          ],
          rightH3: 'What we never do',
          right: [
            'Read a WJEC client brief, collect or edit assets for it, suggest designs for it, or look at any evidence a candidate is producing for Unit 2 or Unit 3.',
            'Help during research time for the real brief either. That time is part of the candidate\'s own preparation and the declaration rule applies to it.'
          ] },
        { kind: 'p', html: 'One practical point families miss. The software a candidate uses in the controlled hours is the school\'s, not ours. Before choosing a course for the game or the animation, ask the teacher which tools the department runs, and learn on the same or similar software so the techniques transfer without friction.' },
        { kind: 'p', html: '<a class="ag-inline-link" href="/understand-the-code-dont-copy-paste-uk">The page on declaring AI</a> covers the wider rules on AI in assessed work across the UK.' }
      ]
    },
    {
      id: 'unit1', tint: 'tint', eyebrow: 'Units 1 and 3',
      h2: 'The exam that comes last, and the video in between',
      lede: 'Unit 1 is the only exam, first sat in 2028. Unit 3 is ten more hours of non-examination assessment, around a marketing campaign.',
      body: [
        { kind: 'table', caption: 'Unit 1, The Digital World: the six areas', head: ['Area', 'What it takes in'], rows: [
          ['1.1 Data', 'Measuring and storing data; analogue and digital data'],
          ['1.2 Digital technology systems', 'Devices and connections, operating systems, software types, backup, cloud services, the systems development life cycle'],
          ['1.3 Digital communication', 'Communication methods, reliability of online sources, social networking practices and ownership'],
          ['1.4 The digital shift', 'Changing working practices, marketplace models, and the rise of services and monetised content'],
          ['1.5 Securing data and systems', 'Threats, the consequences of cyber-attacks on organisations, digital footprints, legal and ethical responsibilities'],
          ['1.6 Emerging technologies', 'How digital technologies develop, and artificial intelligence models']
        ] },
        { kind: 'p', html: 'Unit 1 is a 1 hour 30 minute digital exam worth 80 marks and 40 per cent of the GCSE, mixing objective, short and extended answers. It is first available in 2028, while work for Units 2 and 3 can be submitted from summer 2027, so a school may run the coursework first and the exam at the end. The theory is broad rather than deep, and it rewards steady weekly study over a last-minute push.' },
        { kind: 'two', mt: true,
          leftH3: 'Unit 3: Communicating in the Digital World',
          left: [
            'Ten hours of non-examination assessment worth 60 marks and 20 per cent. The candidate researches social media platforms, recommends one for the organisation in a second client brief, plans a campaign and produces a marketing video, then exports it in a suitable format.',
            'As in Unit 2, research time sits outside the assessed hours and the work is marked in school and moderated.'
          ],
          rightH3: 'Still on the earlier GCSE?',
          right: [
            'WJEC\'s earlier Digital Technology GCSE is closing: "Summer 2027 will be the final full assessment opportunity for this qualification", with a resit for the examinations in January 2028, subject to demand.',
            'Year 10 entries to it stopped in September 2026, so it concerns only students already on it.'
          ] },
        { kind: 'p', html: 'Our lessons are in English only, although WJEC publishes its qualifications in Welsh too. The <a class="ag-inline-link" href="/coding-and-ai-classes-in-wales">Wales page</a> sets out the whole system around both GCSEs.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Four rungs, finished before the controlled hours',
    lede: 'The order matters more than the pace: every rung below the last should be done before the school starts Unit 2.',
    table: { caption: 'What a Digital Technology candidate should be able to do', head: ['Rung', 'When', 'What should be true'], rows: [
      ['1. Spreadsheets and data', 'Year 9 or early Year 10', 'Cleaning, sorting and filtering a messy dataset, formulas and functions, charts that show a trend'],
      ['2. Websites', 'Early Year 10', 'Multi-page sites with navigation, media, links and one consistent style, built without a template'],
      ['3. The second product', 'Year 10', 'A small multilevel game or a short 2D animation, using techniques at basic, medium and complex level'],
      ['4. Theory and video', 'Through Year 11', 'The six Unit 1 areas studied weekly, and short practice videos edited and exported']
    ] },
    left: { h3: 'Rung three decides the most marks', ps: [
      'The game or animation carries 25 marks. Deciding which to learn early, with the school\'s software in mind, gives a candidate a year to build depth.',
      'The general order of skills runs down the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'The school sets the clock', ps: [
      'Units 2 and 3 can be done at any point in the course, once the teaching is complete. We plan back from the date the school gives.',
      'When the controlled hours begin, our lessons switch to Unit 1.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for Digital Technology candidates',
    lede: 'Sorted by unit. Where a student begins is decided in the free lesson.',
    bands: [
      { num: 'I', h3: 'Products for Unit 2', sub: 'The website and the game', courses: [
        { code: 'UK / DT1 / 01', slug: 'html-css-course-for-beginners-build-real-websites', title: 'HTML and CSS', blurb: 'Multi-page websites with clean navigation and one consistent style.' },
        { code: 'UK / DT1 / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Interactive pages, the step that lifts a website beyond the basic level.' },
        { code: 'UK / DT1 / 03', slug: 'complete-game-development-masterclass-for-teens', title: 'Game development for teens', blurb: 'Scripted behaviour, levels, characters and sound in real games.' }
      ] },
      { num: 'II', h3: 'Media for Units 2 and 3', sub: 'Animation, video and design', courses: [
        { code: 'UK / DT2 / 01', slug: 'creative-coding-animation-mastery', title: 'Creative coding and animation', blurb: 'Motion, animation and video editing from first principles.' },
        { code: 'UK / DT2 / 02', slug: 'creative-media-design-masterclass-teens', title: 'Creative media for teens', blurb: 'Photo, video and design, for the Unit 3 campaign video and its assets.' },
        { code: 'UK / DT2 / 03', slug: 'canva-ai-design-masterclass', title: 'Canva and design', blurb: 'Layout, typography and social graphics for design options and campaigns.' }
      ] },
      { num: 'III', h3: 'Data and theory', sub: 'Task 1 and Unit 1', courses: [
        { code: 'UK / DT3 / 01', slug: 'data-analysis-mastery-course-college', title: 'Data analysis', blurb: 'Spreadsheet cleaning, formulas and charts; pitched older, but its spreadsheet months are Task 1 exactly.' },
        { code: 'UK / DT3 / 02', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'Cybersecurity for teens', blurb: 'Threats, attacks and digital footprints, the heart of area 1.5.' },
        { code: 'UK / DT3 / 03', slug: 'gcse-computer-science-course', title: 'GCSE Computer Science', blurb: 'Systems, operating systems, cloud and the life cycle, shared with Unit 1.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons work',
    h2: 'Build the techniques, then step aside',
    lede: 'Our teachers are in India, which never moves its clocks, so Wales runs four and a half hours behind in summer and five and a half in winter. Every time is agreed in UK time.',
    slots: [
      { time: 'After school', l: 'The usual slot for Years 9 to 11.' },
      { time: 'Evening', l: 'For students with clubs or part-time work.' },
      { time: 'Weekend', l: 'Longer sessions suit game and animation work.' }
    ],
    cells: [
      { h3: 'Techniques by level', p: 'Each technique taught and practised at basic, medium and complex level, so the lists in the assessment pack hold no surprises.' },
      { h3: 'Invented clients', p: 'Practice briefs with their own data and style notes, written by us and never resembling a WJEC brief.' },
      { h3: 'Tested as built', p: 'Testing recorded throughout every practice product, because Task 5 grades the testing as well as the result.' },
      { h3: 'Spreadsheets early', p: 'Data cleaning and analysis first, since Task 1 opens the unit and sets up everything after it.' },
      { h3: 'Stop before control', p: 'Practice ends before the school\'s supervised hours start, and lessons turn to Unit 1.' },
      { h3: 'Small groups', p: 'Five to ten students at one rung, reviewing each other\'s practice products.' }
    ]
  },

  projectsH2: 'Things our students have made in class',
  projectsLede: 'A few pieces students made in ordinary lessons, none of it assessed. Plenty more sit in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents\' Google reviews, as they wrote them.',

  fees: {
    h2: 'Fees for Digital Technology lessons',
    lede: 'Fees are charged monthly in US dollars, at one rate for all families outside India. There is no charge for the first lesson, and none at all until a course and a weekly time are agreed.',
    free: ['A real lesson on Digital Technology skills', 'An honest view of which rung fits', 'A phone number is enough'],
    group: ['Five to ten students on one rung', 'One teacher through Years 10 and 11', 'Practice products reviewed each week', 'Unit 1 theory once controlled work starts'],
    one: ['A teacher for one student', 'Planned back from the school\'s dates', 'Suits a student deciding between game and animation']
  },

  faq: {
    eyebrow: 'Questions about WJEC GCSE Digital Technology',
    h2: 'What families in Wales ask',
    items: [
      { q: 'How is the new GCSE Digital Technology assessed?', a: 'In three units. Unit 1 is a 1 hour 30 minute digital exam worth 40 per cent. Unit 2 is 20 hours of non-examination assessment worth 40 per cent, and Unit 3 is 10 hours worth 20 per cent. Units 2 and 3 are set by WJEC, marked in school and moderated.' },
      { q: 'How is it different from Computer Science?', a: 'Computer Science is entirely examined and centres on programming in Python. Digital Technology is sixty per cent made in school and centres on digital products for a client: a website, a game or animation, and a marketing video.' },
      { q: 'What does a candidate make in Unit 2?', a: 'A cleaned and analysed dataset, a proposal and time plan, design options, a multi-page website, either a multilevel computer game or a 2D animation, and an evaluation of the testing and the products.' },
      { q: 'Should my child choose the game or the animation?', a: 'Whichever they can build to a higher level with the school\'s software. It is worth 25 of the unit\'s 80 marks, so the decision deserves a year of practice rather than a guess in the first session.' },
      { q: 'Do the tasks change each year?', a: 'The client brief changes every year. WJEC says the tasks and the mark scheme stay the same, which is why the skills can be prepared well in advance.' },
      { q: 'Can a tutor help with the coursework?', a: 'Not with the assessed work itself. In Unit 2 teachers may give no help beyond reading the instructions during the supervised hours, and help from anyone else must be declared and recorded. We teach the techniques beforehand, on our own briefs, and stay away from the real ones.' },
      { q: 'When is the first exam?', a: 'Unit 1 is first available in 2028. Work for Units 2 and 3 can first be submitted in summer 2027, and the first full award is in 2028.' },
      { q: 'Is it tiered?', a: 'No. Every candidate takes the same assessments.' },
      { q: 'What about the earlier Digital Technology GCSE?', a: 'Its final full assessment is in summer 2027, with a resit for the examinations in January 2028, subject to demand. It stopped taking Year 10 entries in September 2026.' },
      { q: 'What does it cost?', a: 'The first lesson is free. Afterwards one monthly fee in US dollars applies, lower for a group place than for a teacher of your own, shown in the fees section above and never charged ahead of time.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Other pages for Welsh families',
    lede: 'The other WJEC computing GCSE, the Welsh system, and choosing at 14.',
    items: [
      { href: '/wjec-gcse-computer-science-help-wales', label: 'WJEC GCSE Computer Science', p: 'The fully examined alternative, and its program you did not write.' },
      { href: '/coding-and-ai-classes-in-wales', label: 'Coding and AI classes in Wales', p: 'Primary school to sixth form across Wales.' },
      { href: '/choosing-gcse-computer-science-year-9-options', label: 'Choosing computing at Year 9', p: 'What the evidence says about the choice at 14.' },
      { href: '/understand-the-code-dont-copy-paste-uk', label: 'Understand the code, do not copy-paste it', p: 'AI tools near assessed work, and the declaration rules.' },
      { href: '/student-hackathons-uk', label: 'Student hackathons in the UK', p: 'Where young makers build things for real audiences outside school.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Where every UK page on this site is gathered.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Leave a number and we will call at a UK time that works for you. The lesson covers real Digital Technology skills and ends with a rung to begin on and a view on game or animation.',
    readFirst: 'Want to read first? Every <a class="ag-inline-link" href="/courses">course page</a> sets out its syllabus, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains who the method suits and who it does not, and <a class="ag-inline-link" href="/student-labs">student labs</a> shows real student work.',
    note: 'WhatsApp is quickest and free from a UK phone. Messages reach our office in India, so the number begins +91.',
    formNote: 'No card, no contract; we reply once with a time.'
  },

  footer: {
    cols: [
      { h4: 'Wales', links: [
        { href: '/coding-and-ai-classes-in-wales', label: 'Coding and AI in Wales' },
        { href: '/wjec-gcse-computer-science-help-wales', label: 'WJEC Computer Science' },
        { href: '/choosing-gcse-computer-science-year-9-options', label: 'Year 9 options' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK coding classes' }
      ] },
      { h4: 'More', links: [
        { href: '/understand-the-code-dont-copy-paste-uk', label: 'AI and assessed work' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/coding-roadmap', label: 'Coding roadmap' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Digital Technology teaching, live, on UK time'
  },

  personalityCss: `
.ag-root.ag-wjdt .ag-hero h1 { letter-spacing: -0.028em; font-weight: 700; }
.ag-root.ag-wjdt .ag-capsule { border-left-width: 5px; }
.ag-root.ag-wjdt .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-wjdt .ag-table caption { text-align: left; font-weight: 650; }
.ag-root.ag-wjdt .ag-table th:first-child { width: 22%; }
.ag-root.ag-wjdt .ag-band-head h3 { letter-spacing: -0.006em; }
`,

  mustMention: ['Digital Practices', 'multi-page website', '2D animation', '25 marks', '20 hours', 'the tasks and mark scheme', 'beyond reading the instructions', 'marketing video', 'Summer 2027', 'Made-for-Wales'],

  dossier: {
    curriculumAuthority: 'Wales, WJEC GCSE Digital Technology, Made for Wales, approved by Qualifications Wales. Specification, teaching from 2026, for award from 2028, Version 2, February 2026, Qualification Approval Number C00/5167/7: Unit 1 The Digital World "Digital examination: 1 hour 30 minutes", "40% of qualification", "80 marks"; Unit 2 Digital Practices "Non-examination assessment: 20 hours", "40% of qualification", "80 marks", "Set by WJEC, marked by the Centre and moderated by WJEC"; Unit 3 Communicating in the Digital World "Non-examination assessment: 10 hours", "20% of qualification", "60 marks"; "It is not tiered"; Unit 1 exam first available in 2028; Units 2 and 3 first submitted summer 2027; first award 2028; "All learners must produce a multi-page website, and they may choose to create either a computer game or a 2D animation"; research time outside NEA time with internet access; "The client brief will change annually, the tasks and mark scheme will remain the same."; Unit 3 "plan and create a video for a digital marketing campaign"; Unit 1 areas 1.1 Data, 1.2 Digital technology systems, 1.3 Digital Communication, 1.4 The digital shift: work, trade, and monetisation, 1.5 Securing data and systems, 1.6 Emerging and evolving digital technologies. Unit 2 Sample Assessment Materials (2025): 20 hours with suggested 2.5, 1, 2.5, 13 and 1 hours for Tasks 1 to 5; marks 1(a) 5, 1(b) 5, 2(a) 5, 2(b) 5, 3(a) 10, 3(b) 5, 4(a) 10, 4(b) 25, 5(a) 5, 5(b) 5, total 80; "No communication with peers is allowed"; "No assistance may be given by the teacher beyond reading the instructions"; research from non-supervised sessions referenced; "If you receive help and guidance from someone other than your teacher, you must tell your teacher who will then record the nature of the assistance given to you."; AI tools referenced; techniques categorised basic, medium and complex; game top band "at least five complex, five medium, and five basic game development techniques are applied". WJEC earlier Digital Technology page: "Summer 2027 will be the final full assessment opportunity for this qualification. A resit opportunity for examinations will be available in January 2028, subject to demand."; no Year 10 entries from September 2026.',
    localProject: 'The mirror image of Computer Science. WJEC\'s two Made-for-Wales computing GCSEs are built as opposites: Computer Science is entirely examined, on screen, in Python; Digital Technology puts sixty per cent into work made in school under high control. The page sets the two side by side for Year 9 choices, then walks Unit 2 from the sample pack: five tasks with marks and suggested hours, where the choice between a multilevel game and a 2D animation carries 25 of the 80 marks and the top band counts techniques at three levels. Because WJEC keeps the tasks and mark scheme fixed while the client brief changes, the techniques can be learned in advance; the page then sets out the high-control conditions, including the rule that outside help must be declared, and draws the line: we teach techniques on our own briefs before the controlled hours and never touch a brief, research, assets or evidence. It closes with Unit 1\'s six areas, the Unit 3 marketing video, and the closing dates of the earlier GCSE. Lesson family: a coursework-heavy qualification where honest help means preparation that ends before assessment begins.',
    requiredMentions: ['multi-page website', '2D animation', 'beyond reading the instructions', '25 marks'],
    sources: [
      { claim: 'WJEC GCSE Digital Technology Specification, teaching from 2026, Version 2: the three units with durations, marks, weightings and controls, first assessment and award dates, the Unit 2 and Unit 3 overviews, the annual client brief with fixed tasks and mark scheme, and the six Unit 1 areas.', url: 'https://www.wjec.co.uk/media/hulec4tj/wjec-gcse-digital-technology-specification-e.pdf' },
      { claim: 'WJEC GCSE Digital Technology Unit 2 Sample Assessment Materials: task marks and suggested hours, the high-control conditions, the declaration rule for outside help, AI referencing, and the technique-count mark bands.', url: 'https://www.wjec.co.uk/media/03zk1gp5/wjec-gcse-digital-technology-unit-2-sams-e.pdf' },
      { claim: 'WJEC earlier GCSE Digital Technology page: final full assessment in summer 2027, a January 2028 resit subject to demand, and no Year 10 entries from September 2026.', url: 'https://www.wjec.co.uk/qualifications/digital-technology-gcse/' },
      { claim: 'WJEC GCSE Computer Science Specification, teaching from 2025, for the side-by-side comparison.', url: 'https://www.wjec.co.uk/media/13im5was/wjec-gcse-computer-science-specification-e.pdf' }
    ],
    rejectedClaims: [
      'The contents of any live client brief: not read, and never used.',
      'The Unit 3 sample pack and its conditions in detail: not read for this build, so only the specification\'s overview of Unit 3 is given.',
      'The full Appendix A technique lists: summarised as three levels, not reproduced.',
      'A percentage of the whole GCSE for the 25-mark choice: the page states it only as marks within Unit 2, since grade calculation across units was not checked.',
      'Which software schools use for games or animation: varies by school, so families are told to ask.',
      'Any promise about a grade, and any work on a brief, research, assets or assessed evidence, all of which we decline.'
    ]
  }
};
