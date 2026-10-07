'use strict';
// ICAS Digital Technologies practice (ag- competition door, Australia cluster Phase 3, row 95).
// Facts read raw on 7 October 2026 at ICAS Assessments' own pages (curl default agent):
// year levels and exam papers (Australia: Digital Technologies Years 2 to 7; papers Intro, A to E;
// 30, 30, 30, 35, 35, 40 questions in 30, 30, 30, 35, 35, 40 minutes), the Digital Technologies
// subject page (six areas; what each paper level asks), the 2026 dates page (Digital Technologies
// sitting window 3 to 7 August; school entries extended to Sunday 2 August, 11:59pm AEST), the
// achievement levels page (six levels; High Distinction top 1% nationally; medal per subject, year
// level and state) and the 2024 Reach and ICAS Digital Technologies assessment framework (PDF).
// Spine: absolute versus relative cell references when a formula is filled down (family checked
// free site-wide on 7 October 2026). No entry fees printed (one-currency rule). Independent of ICAS.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'competition', tag: 'ICAS DIGITAL TECHNOLOGIES', label: 'ICAS Digital Technologies practice', blurb: 'What each ICAS Digital Technologies paper covers for Years 2 to 7, and how to practise the skills behind it.' },
  slug: 'icas-digital-technologies-practice',
  code: 'idtp',
  accent: '#204480',
  accentRationale: 'ICAS Digital Technologies: a deep spreadsheet-grid blue chosen by hand, muted, at least 10 RGB from every accent in use or claimed',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'ICAS Digital Technologies practice',
  title: 'ICAS Digital Technologies Practice: Papers by Year Level',
  description: 'ICAS Digital Technologies for Years 2 to 7: papers, question counts, timing, the six tested areas and a worked spreadsheet lesson, all checked at ICAS.',
  ogDescription: 'How ICAS Digital Technologies works for Australian students in Years 2 to 7, paper by paper, with the six areas it tests and a worked spreadsheet example students can practise at home.',
  twitterDescription: 'ICAS Digital Technologies for Years 2 to 7: papers, timing, tested areas and a worked spreadsheet lesson.',
  pageName: 'ICAS Digital Technologies Practice',
  webPageDescription: 'A guide to the ICAS Digital Technologies assessment for Australian students in Years 2 to 7: which paper each year level sits, how many questions and minutes each paper has, the six areas tested, the 2026 sitting window, and a worked spreadsheet lesson on relative and absolute cell references.',
  courseDescription: 'Live online classes for Australian primary and lower secondary students in digital skills, block coding and spreadsheets, the ground the ICAS Digital Technologies papers stand on.',
  crumbs: [{ name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'ICAS Digital Technologies',
  navLinks: [
    { href: '#papers', label: 'The papers' },
    { href: '#areas', label: 'Six areas' },
    { href: '#lesson', label: 'Spreadsheet lesson' },
    { href: '#prepare', label: 'Preparing well' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Years 2 to 7 &middot; Checked at ICAS Assessments',
  h1: 'ICAS Digital Technologies practice',
  lede: 'ICAS Digital Technologies is one of the few school assessments in Australia that tests everyday digital skill and early programming in the same sitting. A Year 3 student might be asked to find a menu item or follow a short sequence of instructions; a Year 7 student might be asked to desk check a program with test data or sort a table on two columns. This page sets out which paper each year level sits, how long it runs, the six areas it covers and what the hardest questions look like, with every detail checked on the ICAS site. Then it walks through one spreadsheet skill that catches out strong students. We are independent of ICAS.',
  secondaryCta: { href: '#lesson', label: 'Try the spreadsheet lesson' },
  wa: 'Hello Modern Age Coders, I would like a free class about ICAS Digital Technologies and digital skills for my child in Australia.',
  heroNote: 'Checked at ICAS Assessments on 7 October 2026 &middot; Independent of ICAS &middot; Skills, not drilling',
  spec: [
    ['Assessment', 'ICAS Digital Technologies'],
    ['Run by', 'ICAS Assessments'],
    ['Australian year levels', 'Years 2 to 7'],
    ['Papers', 'Introductory, then A to E'],
    ['Length', '30 to 40 questions, 30 to 40 minutes'],
    ['2026 sitting window', '3 to 7 August'],
    ['We provide', 'Preparation classes in the underlying skills'],
    ['We are not', 'Part of ICAS or Janison']
  ],
  capsuleQ: 'In short',
  capsule: 'ICAS Digital Technologies is a school-based assessment for Australian students in Years 2 to 7. Year 2 sits the Introductory paper and Years 3 to 7 sit Papers A to E. Papers run from 30 questions in 30 minutes up to 40 questions in 40 minutes, across six areas from digital systems to programming. In 2026 the sitting window was 3 to 7 August, as published by ICAS Assessments.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses that build ICAS Digital Technologies skills',
    lede: 'Real use of real software, plus the logic behind a program, matter more than memorised terms.',
    items: [
      { course: 'microsoft-office-kids-mastery', code: 'IDT / 01', title: 'Office skills for kids', note: 'Word, PowerPoint and Excel used for real tasks, including the spreadsheet formulas ICAS likes to probe.' },
      { course: 'scratch-programming-complete-course', code: 'IDT / 02', title: 'Scratch for kids', note: 'Sequence, loops and conditions made visible, which is where the programming questions begin.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'IDT / 03', title: 'Computational thinking', note: 'Reading instructions carefully, spotting patterns and tracing steps, before any software at all.' }
    ]
  },

  sections: [
    {
      id: 'papers', tint: 'tint', eyebrow: 'The papers',
      h2: 'Which paper each year level sits, and how long it runs',
      lede: 'ICAS publishes one paper per year level for Digital Technologies in Australia. The figures below were read on the ICAS year levels page on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'ICAS Digital Technologies papers for Australian year levels', head: ['Australian year level', 'Paper', 'Questions', 'Time allowed'], numCols: [2], rows: [
          ['Year 2', 'Introductory', '30', '30 minutes'],
          ['Year 3', 'Paper A', '30', '30 minutes'],
          ['Year 4', 'Paper B', '30', '30 minutes'],
          ['Year 5', 'Paper C', '35', '35 minutes'],
          ['Year 6', 'Paper D', '35', '35 minutes'],
          ['Year 7', 'Paper E', '40', '40 minutes']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Every paper allows roughly one minute per question. That pace matters more than it first appears: a student who spends four minutes on one hard spreadsheet item has quietly given away three other questions. Practising at that rhythm, with a timer on the table, is part of good preparation.',
            'Digital Technologies stops at Year 7 in Australia. Other ICAS subjects such as Mathematics and English run to Year 12, but the Digital Technologies papers are aimed at primary and the first year of secondary school.'
          ],
          right: [
            'The 2026 sitting window for Digital Technologies was 3 to 7 August. ICAS extended school entries for English, Digital Technologies and Writing to Sunday 2 August at 11:59pm AEST, and its site showed entries closed for 2026 when we checked.',
            'Most students sit ICAS through their school. ICAS also lists testing centres for families whose school does not take part; its parents section explains how that works.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.icasassessments.com/icas-year-levels-and-exam-papers/" rel="noopener" target="_blank">ICAS year levels and exam papers</a>; <a class="ag-inline-link" href="https://www.icasassessments.com/event-calendar/" rel="noopener" target="_blank">ICAS 2026 dates</a>. Both read on 7 October 2026. Entry fees are set by ICAS and are not shown here.' }
      ]
    },
    {
      id: 'areas', tint: 'deep', eyebrow: 'What is tested',
      h2: 'The six areas, from Introductory to Paper E',
      lede: 'ICAS describes Digital Technologies as more than a computing quiz. Its subject page names six areas, and the assessment framework lists what questions in each may require.',
      body: [
        { kind: 'table', caption: 'The six ICAS Digital Technologies areas and how the demand grows', head: ['Area', 'Early papers may ask a student to', 'Paper E may ask a student to'], rows: [
          ['Digital Systems', 'Tell software from hardware and name parts of a menu bar', 'Interpret operating system performance indicators'],
          ['Word Processing', 'Create a document, cut, copy, paste and save', 'Work with longer documents and layout conventions'],
          ['Graphics and Multimedia', 'Resize, rotate and flip a picture; make a simple slideshow', 'Use concept mapping and brainstorming software'],
          ['Internet and Email', 'Find a web address and apply simple search terms', 'Use an HTML editor'],
          ['Spreadsheets and Databases', 'Read a simple chart; search a simple database', 'Conduct complex data sorts'],
          ['Programming', 'Recognise sequence in a set of instructions', 'Conduct desk checking using test data']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Papers C and D, for Years 5 and 6, carry what ICAS calls harder questions on the same six topics. Its examples include defining file management conventions, explaining what a peripheral is for, making responsible decisions about online data and recognising sequence and loops in pseudocode.',
            'Paper E, for Year 7, adds information systems, integrated multimedia, online collaborative projects, data visualisation and basic programming principles, according to the ICAS description.'
          ],
          right: [
            'The pattern across papers is useful for parents to see. The early papers reward careful reading and familiarity with ordinary software. The later papers reward reasoning: predicting what a program will do, or what a formula will return, before running it.',
            'That second skill is the one most often missing. Students who use software every day can still be unsure what happens when a formula is copied or a loop repeats. The lesson below targets exactly that gap.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.icasassessments.com/products-icas/subjects/digital-technologies/" rel="noopener" target="_blank">ICAS Digital Technologies subject page</a>; <a class="ag-inline-link" href="https://www.icasassessments.com/wp-content/uploads/2023/09/2024_Reach-and-ICAS-Framework-Digital-Technologies.pdf" rel="noopener" target="_blank">Reach and ICAS Digital Technologies assessment framework</a>. Read on 7 October 2026. Wording in the table is paraphrased from those pages and kept close to their own terms.' }
      ]
    },
    {
      id: 'lesson', tint: 'tint', eyebrow: 'Worked lesson',
      h2: 'The spreadsheet formula that breaks when it is filled down',
      lede: 'Spreadsheets and Databases is one of the six areas, and one idea in it trips up confident students: what happens to a cell reference when a formula is copied. The example below is ours, written for this page.',
      body: [
        { kind: 'three', cells: [
          { h3: 'The set-up', p: 'A class records house points. Cell B1 holds the points for one event win: 5. Column C, rows 3 to 7, holds how many events each house won. Column D should show each house\'s points.' },
          { h3: 'The first try', p: 'In D3 a student types =C3*B1 and gets 20 for a house with 4 wins. Correct. Then they fill the formula down to D7, expecting every row to work the same way.' },
          { h3: 'The surprise', p: 'Filling down shifts every reference one row at a time. D4 becomes =C4*B2, D5 becomes =C5*B3, and so on. B2 is empty, so D4 shows 0. The rest go wrong too.' }
        ] },
        { kind: 'table', mt: true, caption: 'What each copied formula becomes, with and without the dollar signs (B1 holds 5)', head: ['Row', 'Wins in column C', 'Filled down from =C3*B1', 'Result', 'Filled down from =C3*$B$1', 'Result'], numCols: [1, 3, 5], rows: [
          ['3', '4', '=C3*B1', '20', '=C3*$B$1', '20'],
          ['4', '6', '=C4*B2', '0 (B2 is empty)', '=C4*$B$1', '30'],
          ['5', '3', '=C5*B3', '12 (B3 holds the 4 above)', '=C5*$B$1', '15'],
          ['6', '5', '=C6*B4', '30 (B4 holds 6)', '=C6*$B$1', '25'],
          ['7', '2', '=C7*B5', '6 (B5 holds 3)', '=C7*$B$1', '10']
        ] },
        { kind: 'p', mt: true, text: 'In our set-up, column B under the heading repeats the win counts as a helper column, which is why the broken formulas return believable numbers rather than errors. That is the dangerous case: 12, 30 and 6 look like real answers. The dollar signs in $B$1 tell the spreadsheet to keep pointing at exactly B1 however far the formula travels, which is called an absolute reference. A reference without them, like C3, is relative: it moves with the formula, which is exactly what you want for the wins column and exactly what you do not want for the points value.' },
        { kind: 'two', mt: true,
          leftH3: 'How to check without a computer',
          left: [
            'Before filling down, say aloud what the formula should look like two rows lower. If the answer is "C5 times B1", then B1 must not move, so it needs to be absolute. This habit is the spreadsheet version of desk checking, and it is the same reasoning a question on a paper will ask for.',
            'A quick sense check also helps. If every house earns 5 points per win, every result must be a multiple of 5. The broken column contains 12 and 6, which cannot be right.'
          ],
          rightH3: 'Why it matters beyond the test',
          right: [
            'The same idea, that some values are fixed and others move with each row, appears later in programming as the difference between a constant and a loop variable. Students who understand it in a spreadsheet usually meet it in code with less confusion.',
            'It is also a real-world skill. Budgets, marking sheets and science results are all built by filling formulas down, and a single missing dollar sign can quietly corrupt a whole column.'
          ] }
      ]
    },
    {
      id: 'prepare', tint: '', eyebrow: 'Preparing well',
      h2: 'How we prepare students, and what we leave out',
      lede: 'The aim is digital confidence that lasts after August, not a memory of last year\'s questions.',
      body: [
        { kind: 'two',
          left: [
            'Lessons use real software for real tasks: a short report with a picture and a caption, a slideshow with a consistent layout, a spreadsheet of class data that has to be sorted and charted. Students then explain what they did and why, because explaining is how the reasoning questions are won.',
            'For the Programming area, students build small projects in Scratch first and later read short pseudocode, predicting each step before it runs. Desk checking with test data is introduced from around Year 6, when Paper E is on the horizon.'
          ],
          right: [
            'ICAS sells past papers on its own site. We do not reproduce them or any ICAS questions; every practice item we use is written by us in a similar spirit.',
            'We do not promise a High Distinction, a medal or any particular result. ICAS sets its own achievement levels, and a single sitting is a narrow sample of what a child can do.'
          ] },
        { kind: 'table', mt: true, caption: 'A six-week build-up before an August sitting', head: ['Week', 'Focus', 'Evidence it is working'], rows: [
          ['1', 'Everyday software: files, folders, menus, saving', 'Finds and renames a file without help'],
          ['2', 'Documents and slides with consistent formatting', 'Explains why one layout is clearer than another'],
          ['3', 'Spreadsheets: sorting, simple formulas, references', 'Predicts a filled-down formula before running it'],
          ['4', 'Searching and safe online habits', 'Chooses search terms that narrow results sensibly'],
          ['5', 'Sequence, loops and pseudocode', 'Traces a short program step by step on paper'],
          ['6', 'Mixed timed practice at about a minute a question', 'Finishes a set without rushing the last few items']
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Growing digital skill',
    h2: 'Four rungs from Year 2 to Year 7',
    lede: 'Year levels are a guide; the rung a child stands on matters more.',
    table: { caption: 'From first clicks to reasoning about programs', head: ['Around', 'Rung', 'The sign it is secure'], rows: [
      ['Years 2 and 3', '1. Confident with everyday software', 'Opens, edits and saves work without being shown'],
      ['Years 3 and 4', '2. Organising information', 'Sorts a list or table and explains the order chosen'],
      ['Years 5 and 6', '3. Following and fixing instructions', 'Spots the step that makes a sequence or loop go wrong'],
      ['Year 7', '4. Predicting before running', 'States what a formula or program will output, then checks']
    ] },
    left: { h3: 'If a result disappoints', ps: [
      'Look at which areas lost marks. A weak score in Spreadsheets and Databases with strong Programming tells a very different story from the reverse.',
      'Most gaps close with regular use of real software, not with more test papers.'
    ] },
    right: { h3: 'Related reading', ps: [
      'Our <a class="ag-inline-link" href="/australian-coding-maths-and-ai-competitions-calendar">Australian competitions calendar</a> shows where ICAS sits among Bebras, the CAT and the AMC.',
      'For younger coders, see <a class="ag-inline-link" href="/online-coding-classes-for-kids-australia">online coding classes for kids in Australia</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for the six ICAS areas',
    lede: 'Grouped by the kind of skill they build. Every card opens a full syllabus.',
    bands: [
      { num: 'I', h3: 'Everyday digital skill', sub: 'Documents, slides and spreadsheets', courses: [
        { code: 'IDT / DS / 01', slug: 'microsoft-office-kids-mastery', title: 'Office skills for kids', blurb: 'Word, PowerPoint and Excel with purpose.' },
        { code: 'IDT / DS / 02', slug: 'kids-ai-web-development-course', title: 'Web development for kids', blurb: 'How web pages are built, from the inside.' },
        { code: 'IDT / DS / 03', slug: 'html-css-course-for-beginners-build-real-websites', title: 'HTML and CSS', blurb: 'The editor skills Paper E hints at.' }
      ] },
      { num: 'II', h3: 'First programming', sub: 'Sequence, loops and conditions', courses: [
        { code: 'IDT / PR / 01', slug: 'scratch-programming-complete-course', title: 'Scratch for kids', blurb: 'Programs you can see run.' },
        { code: 'IDT / PR / 02', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Blocks to games, apps and simple AI.' },
        { code: 'IDT / PR / 03', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'A first text-based language from about age 9.' }
      ] },
      { num: 'III', h3: 'Reasoning', sub: 'Thinking before clicking', courses: [
        { code: 'IDT / TH / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking', blurb: 'Patterns, logic and careful reading.' },
        { code: 'IDT / TH / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Formulas and variables that make sense.' },
        { code: 'IDT / TH / 03', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Quick sense checks on any answer.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live classes after school, from India',
    lede: 'Our teachers work from India, which sits behind Australia on the clock: Sydney is four and a half hours ahead of India time in winter and five and a half in summer, while Perth is two and a half hours ahead all year. An Australian after-school class therefore lands in the Indian working afternoon, which makes weekday lessons straightforward to arrange.',
    slots: [
      { time: 'After school on a weekday', l: 'Short, regular practice with real software.' },
      { time: 'Saturday morning', l: 'A longer project session, such as a full spreadsheet task.' },
      { time: 'June and July', l: 'Mixed timed practice ahead of an August sitting.' }
    ],
    cells: [
      { h3: 'Real tasks', p: 'Every skill is practised on something a child actually wants to make.' },
      { h3: 'Our own practice', p: 'Questions written by us, never copied from ICAS papers.' },
      { h3: 'Predict, then run', p: 'Students say what will happen before they click.' },
      { h3: 'Groups of five to ten', p: 'Children at a similar level comparing answers and methods.' },
      { h3: 'One-to-one option', p: 'For a child who needs a particular area rebuilt.' },
      { h3: 'No result promised', p: 'We teach the skills; ICAS sets and marks the assessment.' }
    ]
  },

  projectsH2: 'Things our students have built',
  projectsLede: 'Projects made for their own sake, not for any test. More in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Reviews copied without edits from our Google listing.',

  fees: {
    h2: 'Fees',
    lede: 'Lessons are billed monthly in US dollars at our international rate. There is no joining fee and no long contract. The ICAS entry fee, if a family pays one, goes to ICAS and has nothing to do with us.',
    free: ['A real first lesson with a teacher', 'A short look at which areas need work', 'No card details asked'],
    group: ['Five to ten children at one level', 'One teacher across the term', 'Spreadsheet and coding tasks reviewed together', 'A certificate at the end'],
    one: ['A teacher working with one child', 'A plan built around the weaker areas', 'Weekly times chosen with you']
  },

  faq: {
    eyebrow: 'Questions about ICAS Digital Technologies',
    h2: 'What parents ask us',
    items: [
      { q: 'What is ICAS Digital Technologies?', a: 'An assessment run by ICAS Assessments that tests digital literacy and early programming. In Australia it is offered for Years 2 to 7, with one paper per year level.' },
      { q: 'Which paper does my child sit?', a: 'Year 2 sits the Introductory paper, Year 3 Paper A, Year 4 Paper B, Year 5 Paper C, Year 6 Paper D and Year 7 Paper E, according to ICAS.' },
      { q: 'How long is each paper?', a: 'The Introductory paper and Papers A and B have 30 questions in 30 minutes, Papers C and D have 35 questions in 35 minutes, and Paper E has 40 in 40 minutes.' },
      { q: 'When is ICAS Digital Technologies held?', a: 'In 2026 the sitting window was 3 to 7 August. ICAS publishes each year\'s dates on its own calendar page, which is the place to check for 2027.' },
      { q: 'Does it involve coding?', a: 'Yes, as one of six areas. Younger papers ask students to recognise sequence in instructions; older papers include loops in pseudocode and, in Paper E, desk checking with test data.' },
      { q: 'What is an absolute cell reference?', a: 'A spreadsheet reference written with dollar signs, such as $B$1, that keeps pointing at the same cell when a formula is copied. A reference without them moves with the formula.' },
      { q: 'Can my child sit ICAS if their school does not run it?', a: 'ICAS lists testing centres for families in that situation. Its parents section explains how entry works outside school.' },
      { q: 'Do you use ICAS past papers?', a: 'No. ICAS sells its own past papers. We write our own practice questions and never reproduce ICAS material.' },
      { q: 'Will lessons guarantee a High Distinction?', a: 'No. ICAS decides its achievement levels. We teach the skills the papers test and help children work calmly at about a minute a question.' },
      { q: 'What happens in the free first lesson?', a: 'Your child tries a short spreadsheet and a short coding task with a teacher, and you get an honest view of which areas are strong and which need practice.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for Australian families',
    lede: 'Competitions, coding and the national picture.',
    items: [
      { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar', p: 'Every coding and maths contest by month.' },
      { href: '/online-coding-classes-for-kids-australia', label: 'Coding classes for kids', p: 'What a live online class looks like.' },
      { href: '/kids-coding-languages-australia', label: 'Kids coding languages', p: 'Scratch, Python and the rest, compared.' },
      { href: '/naplan-numeracy-practice-online', label: 'NAPLAN numeracy', p: 'How the tailored test works.' },
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'Every state and every age.' },
      { href: '/australian-maths-trust-amc-aio-cat-preparation', label: 'AMT competitions', p: 'Bebras, the CAT, the AMC and the AIO.' }
    ]
  },

  start: {
    h2: 'Book a free digital skills class',
    lede: 'Tell us your child\'s year level and whether ICAS is planned this year. The free class tries one spreadsheet task and one coding task and ends with a short, honest plan.',
    readFirst: 'Prefer to read first? Every course outline sits on the <a class="ag-inline-link" href="/course-atlas">course atlas</a>, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a typical lesson.',
    note: 'A WhatsApp message usually gets the quickest answer. The number is Indian because our team is based in India; we have no Australian office.',
    formNote: 'No payment details and no commitment. We reply once to set up the class.'
  },

  footer: {
    cols: [
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/online-coding-classes-for-kids-australia', label: 'Coding for kids' },
        { href: '/naplan-numeracy-practice-online', label: 'NAPLAN numeracy' },
        { href: '/online-maths-tutoring-australia', label: 'Maths tutoring' }
      ] },
      { h4: 'Competitions', links: [
        { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' },
        { href: '/australian-maths-trust-amc-aio-cat-preparation', label: 'AMT competitions' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/course-atlas', label: 'Course atlas' }
      ] }
    ],
    bottomRight: 'Independent of ICAS Assessments; details checked at source'
  },

  personalityCss: `
.ag-root.ag-idtp .ag-hero-grid { gap: clamp(1rem, 2.4vw, 2.1rem); }
.ag-root.ag-idtp .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-idtp .ag-capsule { border-left-width: 6px; }
.ag-root.ag-idtp .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-idtp .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-idtp .ag-table caption { text-align: left; }
.ag-root.ag-idtp .ag-spec dt { letter-spacing: 0.11em; }
.ag-root.ag-idtp .ag-slots { gap: 1.1rem; }
`,

  dossier: {
    curriculumAuthority: 'ICAS Assessments\' own pages, read 7 October 2026. Year levels and exam papers: Digital Technologies offered in Australia for Years 2 to 7; papers Intro (Year 2), A (Year 3), B (Year 4), C (Year 5), D (Year 6), E (Year 7); questions 30, 30, 30, 35, 35, 40; times 30m, 30m, 30m, 35m, 35m, 40m. Subject page: six areas (Digital Systems, Word Processing, Graphics & Multimedia, Internet & Email, Spreadsheets & Databases, Programming); Papers C and D include "recognise sequence and loops in pseudocode"; Paper E (Year 7) includes "use an HTML editor, conduct complex data sorts, or conduct desk checking using test data". 2026 dates: Digital Technologies sitting window 3 to 7 August; school entries for English, Digital Technologies and Writing extended to Sunday 2 August (11:59pm AEST); "Entries closed for 2026". Achievement levels page: six levels from participation through to medal; "High Distinction: top 1% nationally"; medal "awarded to the highest-performing student per subject, year level and state".',
    localProject: 'A worked spreadsheet lesson written by us: house points with 5 points per win in B1 and wins 4, 6, 3, 5, 2 in C3:C7. Filling =C3*B1 down gives =C4*B2 and so on, returning 20, 0, 12, 30, 6 against the correct 20, 30, 15, 25, 10 from =C3*$B$1; a multiples-of-5 sense check exposes the broken column.',
    requiredMentions: ['Paper E', 'Introductory paper', '35 questions in 35 minutes', '3 to 7 August', 'Spreadsheets and Databases', '$B$1', 'desk checking using test data', 'Sunday 2 August', 'house points'],
    sources: [
      { claim: 'ICAS year levels and exam papers: Digital Technologies years by country, papers by year level, question counts and test times.', url: 'https://www.icasassessments.com/icas-year-levels-and-exam-papers/' },
      { claim: 'ICAS Digital Technologies subject page: six areas and what each paper level asks.', url: 'https://www.icasassessments.com/products-icas/subjects/digital-technologies/' },
      { claim: 'ICAS 2026 dates: sitting windows and entry deadlines.', url: 'https://www.icasassessments.com/event-calendar/' },
      { claim: 'ICAS achievement levels: six levels, High Distinction top 1% nationally, medals per subject, year level and state.', url: 'https://www.icasassessments.com/icas-achievement-levels/' },
      { claim: '2024 Reach and ICAS Digital Technologies assessment framework (PDF): areas and what questions may require at each paper.', url: 'https://www.icasassessments.com/wp-content/uploads/2023/09/2024_Reach-and-ICAS-Framework-Digital-Technologies.pdf' }
    ],
    rejectedClaims: [
      'ICAS entry fees: not shown (set by ICAS in Australian dollars; one-currency rule).',
      'Any 2027 sitting date: ICAS had not published 2027 dates on the pages read.',
      'Proportion of students earning each achievement level beyond the published High Distinction top 1%: not stated.',
      'Any ICAS question or past paper content: never reproduced; all practice is our own.',
      'Any promise of an achievement level, medal or result: none made.',
      'Affiliation with ICAS Assessments or Janison: none; stated on the page.'
    ]
  }
};
