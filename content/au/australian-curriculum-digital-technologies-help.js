'use strict';
// Australian Curriculum: Digital Technologies help (ag- curriculum door, Australia cluster Phase 3, row 80).
// Facts read raw on 7 October 2026 from ACARA's Version 9.0 downloads (Word files) for Digital
// Technologies F-6 and 7-10: band and year level descriptions, achievement standards, strand and
// sub-strand names, content descriptions and elaborations quoted exactly with their codes. Spine:
// multi-factor authentication odds (AC9TDI8P13), family checked free site-wide on 7 October 2026.
// The arithmetic in the worked example is ours. States and territories implement the curriculum in
// their own ways; no claim is made about any one school's programme.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'exam', tag: 'DIGITAL TECHNOLOGIES', label: 'Digital Technologies curriculum help', blurb: 'How the Version 9.0 Digital Technologies curriculum is built, band by band, and what it asks of a student at each stage.' },
  slug: 'australian-curriculum-digital-technologies-help',
  code: 'acdt',
  accent: '#153384',
  accentRationale: 'Digital Technologies curriculum: a deep ink blue chosen by hand, muted, at least 12 RGB from every accent on the site and above 4.8:1 on #EDE7DA',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'Australian Curriculum Digital Technologies help',
  title: 'Australian Curriculum Digital Technologies Help | F to 10',
  description: 'Australian Curriculum Digital Technologies explained from ACARA\'s Version 9.0 files: the two strands, every sub-strand, what each band expects, and live help.',
  ogDescription: 'A parent\'s and student\'s map of Digital Technologies in the Australian Curriculum, Version 9.0: strands, sub-strands, bands from Foundation to Year 10, and a worked security example.',
  twitterDescription: 'Digital Technologies in the Australian Curriculum, band by band, with live help.',
  pageName: 'Australian Curriculum Digital Technologies Help',
  webPageDescription: 'A guide to the Australian Curriculum: Digital Technologies, Version 9.0, for families: how the subject is organised into strands and sub-strands, what students are expected to do by the end of each band from Foundation to Year 10, and a worked example on multi-factor authentication taken from the Years 7 to 8 content.',
  courseDescription: 'Live online coding and digital technologies classes for Australian students from Year 1 to Year 10, built around the same skills the curriculum names: algorithms, data, programming and security.',
  crumbs: [{ name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'Digital Technologies curriculum',
  navLinks: [
    { href: '#structure', label: 'Structure' },
    { href: '#bands', label: 'Bands' },
    { href: '#security', label: 'Worked example' },
    { href: '#home', label: 'At home' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Digital Technologies F to 10 &middot; Live online',
  h1: 'Digital Technologies curriculum help',
  lede: 'Digital Technologies is the part of the Australian Curriculum where children learn how computers represent information, how algorithms are designed, and how programs are written and tested. It runs from the first year of school to Year 10, and by the end it expects real programming in a general-purpose language and some thinking about security and privacy. Many parents never studied anything like it. This page sets out how Version 9.0 is organised, quotes what ACARA says students should manage at the end of each band, and works one example from the Years 7 to 8 content so you can see the level involved. We are an online school teaching coding and maths; we are not part of ACARA and we do not write anyone\'s school assessment.',
  secondaryCta: { href: '#bands', label: 'See what each band expects' },
  wa: 'Hello Modern Age Coders, I would like a free class to help with Digital Technologies at school.',
  heroNote: 'Quoted from ACARA\'s Version 9.0 files &middot; Checked on 7 October 2026',
  spec: [
    ['Subject', 'Digital Technologies'],
    ['Curriculum', 'Australian Curriculum, Version 9.0'],
    ['Range', 'Foundation to Year 10'],
    ['Bands', 'Foundation, 1 to 2, 3 to 4, 5 to 6, 7 to 8, 9 to 10'],
    ['Strands', 'Two, with sub-strands under each'],
    ['Programming', 'Visual programs to Year 6, then text languages'],
    ['Taught by', 'Your school, following your state or territory'],
    ['We offer', 'Live classes that build the same skills']
  ],
  capsuleQ: 'In short',
  capsule: 'Digital Technologies is the Australian Curriculum subject about computing. Version 9.0 has two strands, Knowledge and understanding and Processes and production skills, each split into sub-strands, and it is written in bands from Foundation to Year 10. Students move from following simple algorithms to writing visual programs by Year 6, then a general-purpose language in Years 7 and 8 and an object-oriented one by Year 10.',

  picks: {
    eyebrow: 'Matched to the curriculum',
    h2: 'Three courses that line up with Digital Technologies',
    lede: 'One for each stage the curriculum describes: visual programming, the first text language, and serious programming.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'ACDT / 01', title: 'Algorithms for primary students', note: 'Sequencing, branching and repetition, the ideas Years 1 to 6 build on, worked through puzzles and visual code.' },
      { course: 'python-complete-masterclass-teens', code: 'ACDT / 02', title: 'Python for Years 7 to 10', note: 'The general-purpose language most schools reach first, taught with tracing and testing from week one.' },
      { course: 'cybersecurity-course-for-teens-ethical-defensive', code: 'ACDT / 03', title: 'Security for teenagers', note: 'Passwords, authentication and threats, the privacy and security side of the curriculum, taught defensively.' }
    ]
  },

  sections: [
    {
      id: 'structure', tint: 'tint', eyebrow: 'How the subject is organised',
      h2: 'Two strands, several sub-strands, six bands',
      lede: 'Every content description in Digital Technologies sits in a strand, a sub-strand and a band. Knowing where a task sits tells you what it is really asking for.',
      body: [
        { kind: 'table', caption: 'The structure of Digital Technologies, Version 9.0, as set out in ACARA\'s Years 7 to 10 file', head: ['Strand', 'Sub-strand', 'What it covers in plain terms'], rows: [
          ['Knowledge and understanding', 'Digital systems', 'Hardware, software and networks: what the parts are and how they move data'],
          ['Knowledge and understanding', 'Data representation', 'How text, images, sound and numbers become integers and binary'],
          ['Processes and production skills', 'Acquiring, managing and analysing data', 'Collecting data, checking it and finding patterns with spreadsheets and databases'],
          ['Processes and production skills', 'Investigating and defining', 'Turning a vague need into a defined problem with design criteria and user stories'],
          ['Processes and production skills', 'Generating and designing', 'Designing algorithms and user experiences before building'],
          ['Processes and production skills', 'Producing and implementing', 'Writing, editing and debugging programs'],
          ['Processes and production skills', 'Evaluating', 'Judging a solution against its criteria, its users and its wider impact'],
          ['Processes and production skills', 'Collaborating and managing', 'Planning projects and working with others using digital tools'],
          ['Processes and production skills', 'Privacy and security', 'Accounts, passwords, authentication, digital footprints and threats']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The bands are Foundation, then Years 1 to 2, 3 to 4, 5 to 6, 7 to 8 and 9 to 10. Each band has a band level description, an achievement standard and a set of content descriptions with codes such as AC9TDI8P13, where the digits after TDI name the year at the end of the band and the P or K says which strand it belongs to.',
            'The codes are useful in conversations with a teacher. If a report says your child is working towards a standard in data representation, the code points to exactly which skill, and the elaborations under it show the kind of task schools use.'
          ],
          right: [
            'Not every sub-strand appears in every band. In the early years, for example, the Foundation content is short: recognising digital systems, representing data as objects, pictures and symbols, and identifying data that is personal and owned by the child. The data sub-strand under Processes and production skills appears as the bands rise.',
            'Your state or territory decides how the curriculum is taught. Some publish their own syllabuses built from it, and schools choose how much time it gets. What follows is the national content, the shared reference point underneath those choices.'
          ] },
        { kind: 'source', html: 'Source: ACARA, Australian Curriculum Version 9.0, <a class="ag-inline-link" href="https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-f-6-v9.docx" rel="noopener" target="_blank">Digital Technologies content F to 6</a> and <a class="ag-inline-link" href="https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx" rel="noopener" target="_blank">Digital Technologies content 7 to 10</a>, Word downloads read on 7 October 2026. We have no connection with ACARA.' }
      ]
    },
    {
      id: 'bands', tint: 'deep', eyebrow: 'Band by band',
      h2: 'What the achievement standards ask for, quoted',
      lede: 'An achievement standard says what a student should be able to do by the end of a band. These lines are taken word for word from the Version 9.0 files.',
      body: [
        { kind: 'table', caption: 'Opening of each Digital Technologies achievement standard, Version 9.0', head: ['By the end of', 'ACARA\'s wording (opening sentences)'], rows: [
          ['Foundation', '"students show familiarity with digital systems and use them for a purpose. They represent data using objects, pictures and symbols and identify examples of data that is owned by them."'],
          ['Year 2', '"students show how simple digital solutions meet a need for known users. Students represent and process data in different ways. They follow and describe basic algorithms involving a sequence of steps and branching."'],
          ['Year 4', '"students create simple digital solutions and use provided design criteria to check if solutions meet user needs. Students process and represent data for different purposes. They follow and describe simple algorithms involving branching and iteration and implement them as visual programs."'],
          ['Year 6', '"students develop and modify digital solutions, and define problems and evaluate solutions using user stories and design criteria. They process data and show how digital systems represent data. Students design algorithms involving complex branching and iteration and implement them as visual programs including variables."'],
          ['Year 8', '"students develop and modify creative digital solutions, decompose real-world problems, and evaluate alternative solutions against user stories and design criteria."'],
          ['Year 10', '"students develop and modify innovative digital solutions, decompose real-world problems, and critically evaluate alternative solutions against stakeholder elicited user stories."']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The two big shifts',
          left: [
            'The first shift happens between Year 6 and Year 8. Up to Year 6 the curriculum asks for visual programs, the block-based coding most primary schools use. The Years 7 to 8 band description says students should implement algorithms "in a general-purpose programming language", and the Year 8 standard repeats it: students "design and trace algorithms and implement them in a general-purpose programming language."',
            'The second shift comes in Years 9 to 10, where the Year 10 standard adds programs "including in an object-oriented programming language" and asks students to "model cyber security threats and explore a vulnerability." That is real software engineering vocabulary, and students who meet it cold often find it the hardest year.'
          ],
          rightH3: 'What does not change',
          right: [
            'Every band asks students to define problems before solving them and to judge solutions afterwards. Even in Years 1 to 2, the standard begins with showing how a digital solution meets a need for known users.',
            'Privacy and security also run the whole way through, from identifying personal data in Foundation to recorded usernames and passwords in Years 1 to 2, memorised passwords in Years 3 to 4, unique passphrases in Years 5 to 6, and authentication and threat models in secondary school.'
          ] }
      ]
    },
    {
      id: 'security', tint: 'tint', eyebrow: 'A worked example from Years 7 to 8',
      h2: 'Why a stolen password is not enough: AC9TDI8P13 in numbers',
      lede: 'One Years 7 to 8 content description asks students to "explain how multi-factor authentication protects an account when the password is compromised and identify phishing and other cyber security threats". Here is how we teach it, with arithmetic a Year 8 student can follow.',
      body: [
        { kind: 'two',
          left: [
            'ACARA\'s elaboration describes multi-factor authentication as preventing "unauthorised access by prompting the account owner for a token or single-use password", and gives the example of a funds transfer that needs "a one-time password received via SMS" as well as a login.',
            'The point students need to grasp is that the second factor is something the attacker does not have, even after a password leak. We make that concrete by counting. A six-digit one-time password can be any number from 000000 to 999999, so there are 1,000,000 possible codes, and a fresh one is issued each time.'
          ],
          right: [
            'Suppose an attacker has the password and a site allows five guesses at the code before locking the attempt. The chance of guessing right is at most 5 in 1,000,000, or 0.0005 per cent. Without the second factor, the leaked password alone gets them in every time.',
            'Students then test the idea against the phishing half of the description. ACARA\'s elaboration lists techniques such as "using an email address from an unofficial domain when pretending to be an online retailer". If a fake page asks for the code as well as the password, the maths stops protecting you, which is why the lesson ends with spotting the fake page rather than trusting the numbers.'
          ] },
        { kind: 'table', mt: true, caption: 'How hard is it to guess the second factor? Our arithmetic, for teaching', head: ['Second factor', 'Possible values', 'Chance with 5 guesses'], rows: [
          ['None (password only, already stolen)', 'Not applicable', 'Certain'],
          ['4-digit code', '10,000', '5 in 10,000 (0.05 per cent)'],
          ['6-digit code', '1,000,000', '5 in 1,000,000 (0.0005 per cent)'],
          ['6-digit code given away on a phishing page', '1,000,000', 'Certain: the attacker was handed it']
        ] },
        { kind: 'p', text: 'The last row is the reason the content description pairs authentication with phishing. A good lesson does not stop at "turn on two-factor". It shows why it works, then shows exactly how people defeat it, which is the habit of thinking about an attacker that the Years 9 to 10 band later formalises as a threat model.' },
        { kind: 'source', html: 'Quotations: ACARA, Digital Technologies content 7 to 10, Version 9.0, code AC9TDI8P13 and its elaborations, read on 7 October 2026. The guess limits and percentages are an illustration we wrote; real services set their own rules.' }
      ]
    },
    {
      id: 'home', tint: '', eyebrow: 'Helping at home',
      h2: 'What families can usefully do in each band',
      lede: 'You do not need to code to help. Most of the support a child needs is conversation about problems, steps and checking.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Foundation to Year 2', p: 'Talk through everyday algorithms: getting dressed, a recipe, the route to school. Ask what happens if a step is missed or swapped. That is the sequencing and branching the early standards describe.' },
          { h3: 'Years 3 to 6', p: 'Ask to see the visual program, then ask your child to predict what it will do before pressing run. Predicting first is the habit that later becomes tracing and debugging.' },
          { h3: 'Years 7 to 10', p: 'Ask how they tested it. A program that works on one example is not finished. The Years 9 to 10 content asks students to "validate algorithms and programs by comparing their output against a range of test cases".' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'Security is the area where family habits matter most. Content descriptions from Years 1 to 2 onwards deal with usernames, passwords and personal data. Setting up a passphrase together, or turning on a second factor on a shared account, makes the classroom content real.',
            'The Years 9 to 10 band also asks students to "investigate how hardware and software manage, control and secure access to data in networked digital systems" (AC9TDI10K01) and to apply the Australian Privacy Principles to the data that services collect (AC9TDI10P14). Reading a privacy policy together is a genuine curriculum activity.'
          ],
          right: [
            'When a teenager gets stuck on a project, the most useful question is about the problem, not the code: who is it for, and how will they know it works? The curriculum calls these user stories and design criteria, and most stalled projects are missing one or the other.',
            'If you want structured help, our classes teach the same skills in a steadier sequence than a school timetable allows. We teach technique and thinking; any assessed work a school sets stays the student\'s own.'
          ] },
        { kind: 'source', html: 'Quoted content descriptions: AC9TDI10P06, AC9TDI10K01 and AC9TDI10P14, ACARA Digital Technologies content 7 to 10, Version 9.0, read on 7 October 2026.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'From blocks to text',
    h2: 'Five rungs through Digital Technologies',
    lede: 'Children reach each rung at different ages. The order is what matters.',
    table: { caption: 'A path through the curriculum\'s programming content', head: ['Around', 'Rung', 'The sign it is secure'], rows: [
      ['Years 1 to 2', '1. Steps and choices', 'Describes a sequence with a decision in it, out loud'],
      ['Years 3 to 4', '2. Visual programs', 'Builds a block program with a loop and a condition'],
      ['Years 5 to 6', '3. Variables', 'Uses a variable to keep score or count, and explains why'],
      ['Years 7 to 8', '4. A text language', 'Writes and traces a short program with functions'],
      ['Years 9 to 10', '5. Testing and structure', 'Tests boundaries and invalid input on purpose']
    ] },
    left: { h3: 'If the jump to text code feels steep', ps: [
      'Most of the difficulty is typing and syntax, not ideas. Students who could build a working block program already understand loops and conditions; they need time with a text editor.',
      'Short daily practice beats occasional long sessions while that adjustment happens.'
    ] },
    right: { h3: 'Beyond the classroom', ps: [
      'Students who enjoy the puzzles often try the Bebras Challenge and the Australian Informatics Olympiad, both listed on our <a class="ag-inline-link" href="/australian-coding-maths-and-ai-competitions-calendar">Australian competitions calendar</a>.',
      'Senior computing subjects differ by state, and we cover several of them on separate pages.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for Australian students of Digital Technologies',
    lede: 'Grouped by where a student is in the curriculum. Each card opens a full syllabus.',
    bands: [
      { num: 'I', h3: 'Primary years', sub: 'Algorithms and visual code', courses: [
        { code: 'ACDT / P / 01', slug: 'scratch-programming-complete-course', title: 'Scratch programming', blurb: 'The visual language many primary classrooms use, taken further.' },
        { code: 'ACDT / P / 02', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Blocks to games, apps and a first look at AI.' },
        { code: 'ACDT / P / 03', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'How AI works, explained without hype.' }
      ] },
      { num: 'II', h3: 'Years 7 to 10', sub: 'Text programming and data', courses: [
        { code: 'ACDT / S / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Variables to files, with tests written as you go.' },
        { code: 'ACDT / S / 02', slug: 'mysql-mastery-for-teens', title: 'SQL and databases', blurb: 'Structured data and queries, as the 9 to 10 content describes.' },
        { code: 'ACDT / S / 03', slug: 'html-css-course-for-beginners-build-real-websites', title: 'HTML and CSS', blurb: 'Content, structure and presentation, built into real pages.' }
      ] },
      { num: 'III', h3: 'Further on', sub: 'For keen students', courses: [
        { code: 'ACDT / X / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving and algorithms', blurb: 'The step from writing code to designing efficient solutions.' },
        { code: 'ACDT / X / 02', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'Cyber security for teens', blurb: 'Threats, defences and ethics, taught from the defender\'s side.' },
        { code: 'ACDT / X / 03', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'An object-oriented language from first class to full programs.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live classes that fit around an Australian school day',
    lede: 'Our teachers work from India, behind every Australian state and territory. A 4.30 pm class in Adelaide in October, for example, starts at 11.30 am India time, so after-school slots are easy for us to staff and to keep steady all year.',
    slots: [
      { time: 'After school', l: 'The usual choice for primary and middle years.' },
      { time: 'Weekend mornings', l: 'Popular with secondary students who have sport after school.' },
      { time: 'School holidays', l: 'A short block on one topic, such as a first text language.' }
    ],
    cells: [
      { h3: 'Predict, then run', p: 'Students say what code will do before running it, every time.' },
      { h3: 'Testing taught early', p: 'Boundary and invalid inputs are part of every program, not an afterthought.' },
      { h3: 'Groups of fifteen to twenty', p: 'Placed by what students can already do, not only by year level.' },
      { h3: 'One-to-one if needed', p: 'For a gap that needs closing quickly, or a student ready to race ahead.' },
      { h3: 'Short parent notes', p: 'What was covered and one thing worth asking about at home.' },
      { h3: 'School work stays theirs', p: 'We teach the skill; assessed tasks are completed by the student under the school\'s rules.' }
    ]
  },

  projectsH2: 'Projects our students have published',
  projectsLede: 'Built by learners for their own reasons. More are in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Families describing their experience, quoted as they wrote it on Google.',

  fees: {
    h2: 'Fees',
    lede: 'Families in Australia pay monthly in US dollars, the rate we charge in every country outside India, with no deposit and the option to stop at the end of any month.',
    free: ['A live lesson with a teacher', 'A clear view of where your child sits', 'No payment details needed'],
    group: ['Fifteen to twenty students at one level', 'The same teacher each week', 'Homework reviewed and explained', 'A certificate at the end'],
    one: ['A teacher for your child alone', 'Built around one goal', 'Weekly time chosen with you']
  },

  faq: {
    eyebrow: 'Questions about Digital Technologies',
    h2: 'What Australian families ask',
    items: [
      { q: 'What is Digital Technologies in the Australian Curriculum?', a: 'It is the computing subject within the Technologies learning area. It teaches how digital systems work, how data is represented and analysed, and how to design, build and evaluate digital solutions, including programs.' },
      { q: 'What is the difference between the two strands?', a: 'Knowledge and understanding covers digital systems and data representation. Processes and production skills covers what students do: acquiring and analysing data, defining problems, designing, programming, evaluating, collaborating, and privacy and security.' },
      { q: 'When does text-based coding start?', a: 'Up to Year 6 the content asks for visual programs. The Years 7 to 8 band asks students to implement algorithms in a general-purpose programming language, and Years 9 to 10 add object-oriented programming.' },
      { q: 'What does a code like AC9TDI8P13 mean?', a: 'AC9 marks Australian Curriculum Version 9.0, TDI marks Technologies: Digital Technologies, the number is the year at the end of the band, P means Processes and production skills (K means Knowledge and understanding), and the last digits number the content description.' },
      { q: 'Is Digital Technologies taught the same way in every state?', a: 'No. The national curriculum is the shared reference, but each state and territory decides how it is implemented, and some publish their own syllabuses built on it.' },
      { q: 'What is multi-factor authentication, in curriculum terms?', a: 'A login that asks for more than a password, such as a one-time code. The Years 7 to 8 content asks students to explain how it protects an account when the password is compromised.' },
      { q: 'Can you help with a school project?', a: 'We teach the skills a project needs, such as defining the problem, designing the algorithm and testing. The project itself stays the student\'s own work under the school\'s rules.' },
      { q: 'Which language do you teach first?', a: 'For most students in Years 7 and above we start with Python. Younger students begin with visual programming, as the curriculum does.' },
      { q: 'Are your classes linked to ACARA?', a: 'No. ACARA writes the curriculum; we are an independent online school whose lessons build the same skills.' },
      { q: 'What time would lessons be for us?', a: 'We agree a weekly slot after the trial class, usually after school in your state. Every Australian state and territory is ahead of India time, by between two and a half and five and a half hours depending on the state and the season.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for Australian students',
    lede: 'Curriculum, competitions and coding pathways.',
    items: [
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'Our main page for Australian families.' },
      { href: '/coding-for-year-7-australia', label: 'Coding for Year 7', p: 'The step into a text language, in detail.' },
      { href: '/online-coding-classes-for-kids-australia', label: 'Online coding for kids', p: 'Primary-age classes, state by state.' },
      { href: '/hsc-software-engineering-help', label: 'HSC Software Engineering', p: 'Where Digital Technologies leads in NSW.' },
      { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar', p: 'Bebras, the AIO and more, month by month.' },
      { href: '/understand-the-code-dont-copy-paste-australia', label: 'Understand the code', p: 'Why copied code fails, and what to do instead.' }
    ]
  },

  start: {
    h2: 'Start with a free Digital Technologies class',
    lede: 'Tell us the year level and what the class is working on. The free lesson starts from there and ends with a straight answer about next steps.',
    readFirst: 'Prefer to look around first? Every course sits on the <a class="ag-inline-link" href="/course-atlas">course atlas</a>, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> walks through a real lesson.',
    note: 'WhatsApp usually gets the fastest reply. Our number begins +91 because the school runs from India; we have no Australian office.',
    formNote: 'No card, no commitment. We reply once to book the class.'
  },

  footer: {
    cols: [
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/online-coding-classes-for-kids-australia', label: 'Online coding for kids' },
        { href: '/coding-for-year-7-australia', label: 'Coding for Year 7' },
        { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/course-atlas', label: 'Course atlas' },
        { href: '/understand-the-code-dont-copy-paste-australia', label: 'Understand the code' }
      ] }
    ],
    bottomRight: 'Independent of ACARA; curriculum quoted from its published files'
  },

  personalityCss: `
.ag-root.ag-acdt .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-acdt .ag-capsule { border-left-width: 6px; }
.ag-root.ag-acdt .ag-table td:first-child { font-weight: 600; }
.ag-root.ag-acdt .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-acdt .ag-spec dd { font-variant-numeric: tabular-nums; }
.ag-root.ag-acdt .ag-grid-3 > div { padding-top: 0.25rem; }
`,

  dossier: {
    curriculumAuthority: 'ACARA, Australian Curriculum Version 9.0, Digital Technologies content F-6 and 7-10 (Word downloads), read 7 October 2026. Strands: Knowledge and understanding (Digital systems; Data representation); Processes and production skills (Acquiring, managing and analysing data; Investigating and defining; Generating and designing; Producing and implementing; Evaluating; Collaborating and managing; Privacy and security). Achievement standard openings quoted for Foundation, Years 2, 4, 6, 8 and 10. Years 7-8 band: implement "in a general-purpose programming language"; Year 10: "including in an object-oriented programming language", "model cyber security threats and explore a vulnerability". AC9TDI8P13 "explain how multi-factor authentication protects an account when the password is compromised and identify phishing and other cyber security threats", elaborations "a token or single-use password", "a one-time password received via SMS", "using an email address from an unofficial domain when pretending to be an online retailer". AC9TDI10P06 "validate algorithms and programs by comparing their output against a range of test cases"; AC9TDI10K01; AC9TDI10P14 Australian Privacy Principles.',
    localProject: 'Worked security example for AC9TDI8P13: a six-digit one-time code has 1,000,000 possible codes; with five guesses allowed the chance is at most 5 in 1,000,000 (0.0005 per cent); a four-digit code gives 5 in 10,000 (0.05 per cent); a stolen password alone, or a code typed into a phishing page, gives certain access. Guess limits are our illustration.',
    requiredMentions: ['AC9TDI8P13', 'AC9TDI10K01', 'AC9TDI10P14', 'Australian Privacy Principles', 'one-time password', 'Collaborating and managing', 'Producing and implementing', '1,000,000 possible codes', '5 in 1,000,000'],
    sources: [
      { claim: 'ACARA Version 9.0 Digital Technologies content F-6: Foundation, Year 2, Year 4 and Year 6 achievement standards; sub-strands.', url: 'https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-f-6-v9.docx' },
      { claim: 'ACARA Version 9.0 Digital Technologies content 7-10: band descriptions, Year 8 and Year 10 achievement standards, AC9TDI8P13, AC9TDI10P06, AC9TDI10K01, AC9TDI10P14 and elaborations.', url: 'https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx' },
      { claim: 'ACARA Version 9.0 Mathematics, about the learning area (used for the curriculum code convention context only).', url: 'https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/mathematics/mathematics-about-the-learning-area-v9.docx' }
    ],
    rejectedClaims: [
      'A list of what changed between Version 8.4 and Version 9.0: no change document was read, so none is given.',
      'Hours of Digital Technologies per week in any state: not published in the files read, so not stated.',
      'Which states publish their own Digital Technologies syllabuses: not named, as each state\'s pages were not all read.',
      'Any claim that our classes are aligned to or endorsed by ACARA: refused; we are independent.',
      'Any real service\'s guess limit for one-time codes: not claimed; the five-guess figure is an illustration.'
    ]
  }
};
