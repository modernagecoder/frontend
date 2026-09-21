'use strict';
// National 5 Computing Science help (ag- exam door, Scotland; UK cluster Phase 3).
// Sources, read raw on 21 September 2026:
//  - National 5 Computing Science Course Specification, course code C816 75, course assessment code
//    X816 75, SCQF level 5 (24 SCQF credit points), valid from session 2023-24, this edition May 2023
//    (version 3.0), read from the PDF on sqa.org.uk. Verbatim:
//    * "The notional length of time for a candidate to complete the course is 160 hours."
//    * Question paper: 80 marks, "1 hour and 30 minutes", "67% of the overall marks for the course
//      assessment (120 marks)". "Section 1 is mandatory, and candidates have the option to complete
//      either section 2 or section 3." Section 1 Software design and development, and Computer systems,
//      55 marks; Section 2 Database design and development, 25 marks; Section 3 Web design and
//      development, 25 marks. The questions will "assess application of understanding, with very few
//      questions requiring direct recall of knowledge".
//    * Assignment: 40 marks, "33% of the overall marks". "Task 1 is mandatory, and candidates have the
//      option to complete either task 2 or task 3." Task 1 Software design and development, 25 marks;
//      Task 2 Database design and development, 15 marks; Task 3 Web design and development, 15 marks.
//      It is "set by SQA, on an annual basis" and "conducted under a high degree of supervision and
//      control"; evidence is externally marked. "The assignment must be carried out within 6 hours";
//      "It is not anticipated that this is a continuous 6-hour session but conducted over several shorter
//      sessions"; it "is conducted under open-book conditions, but supervised".
//    * NOTE: the specification prints its section and task labels with em-dashes; the page restates
//      them in plain words and never reproduces the dash.
//  - Qualifications Scotland, National 5 Computing Science course page: "On 1 February 2026,
//    Qualifications Scotland replaced SQA and became Scotland's new national awarding body. The
//    documents on this page remain current and you can continue to use them."
// Spine: choose database or web, twice. Software design and development is compulsory in both
// components and together carries 80 of the 120 marks. Then a candidate picks database or web in the
// question paper, and separately picks database or web in the assignment. The two choices are
// independent, most candidates make them by default, and they should be made on purpose.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'NATIONAL 5', blurb: 'Software design is compulsory and worth two-thirds of the marks. Then a candidate chooses database or web, twice, and the two choices are independent.' },
  slug: 'national-5-computing-science-help',
  code: 'nfc',
  accent: '#7E1B6E',
  accentRationale: 'National 5: a deep magenta plum from the solver (7.51:1 on every paper tint) at dE 10.4, distinct from the Scotland nation page indigo and from every English exam door',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'National 5 Computing Science help',
  title: 'National 5 Computing Science Help | Paper and Assignment',
  description: 'Help with National 5 Computing Science: the 80-mark question paper, the 40-mark assignment, and the database or web choice you make twice. First class free.',
  ogDescription: 'Software design is compulsory and worth 80 of 120 marks. The database or web choice comes twice, in the paper and in the assignment, and they are separate.',
  twitterDescription: 'National 5 Computing Science tutoring, question paper and assignment. First class free.',
  pageName: 'National 5 Computing Science Help',
  webPageDescription: 'Live online tuition for National 5 Computing Science in Scotland, covering the question paper, the assignment, and the optional database and web sections.',
  courseDescription: 'Live online teaching for National 5 Computing Science candidates, covering software design and development, computer systems, and database or web design and development.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'National 5 Computing',
  navLinks: [
    { href: '#twice', label: 'The choice you make twice' },
    { href: '#paper', label: 'The question paper' },
    { href: '#assignment', label: 'The assignment' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Scotland &middot; National 5 &middot; S4',
  h1: 'National 5 Computing Science help',
  lede: 'National 5 Computing Science has a structure that rewards reading it once, carefully. Software design and development is compulsory in both parts of the assessment, and between them those compulsory parts carry 80 of the 120 marks. After that, a candidate makes a choice between database design and web design in the question paper, and then makes that choice again in the assignment. The course specification says "Section 1 is mandatory, and candidates have the option to complete either section 2 or section 3" for the paper, and "Task 1 is mandatory, and candidates have the option to complete either task 2 or task 3" for the assignment. The two choices are independent. Most candidates make them by default, often late, and they are worth making on purpose. This page explains both, and how to prepare for the compulsory two-thirds that decides most of the grade.',
  secondaryCta: { href: '#twice', label: 'The choice you make twice' },
  wa: 'Hello Modern Age Coders, I would like a free first class for National 5 Computing Science.',
  heroNote: 'Teaching live since 2020 &middot; 10,000+ students &middot; Built on the course specification line by line',
  spec: [
    ['Course', 'National 5 Computing Science C816 75'],
    ['Question paper', '80 marks, 1 hour 30 minutes'],
    ['Assignment', '40 marks, within 6 hours'],
    ['Compulsory', 'Software design, 80 of 120 marks'],
    ['Choose twice', 'Database or web, paper and assignment'],
    ['Awarding body', 'Qualifications Scotland'],
    ['Group', 'Five to ten at one level'],
    ['Start', 'One free lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'National 5 Computing Science is assessed by a question paper worth 80 marks and an hour and a half, and an assignment worth 40 marks completed within six hours. Software design and development, with computer systems in the paper, is compulsory in both and carries 80 of the 120 marks between them, so it decides most of the grade. Beyond that, a candidate chooses database design or web design in the paper, and separately chooses database or web in the assignment, and the two choices are independent. The assignment is set annually, supervised, open book and externally marked, and the paper has very few questions that test straight recall. Qualifications Scotland replaced SQA as the awarding body on 1 February 2026, and the existing course documents remain current. We teach both components. The first lesson is free, then USD 100 a month in a group or USD 150 one to one.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for National 5 candidates',
    lede: 'The compulsory programming, and one course for each of the two optional areas. Cards open the full syllabus.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'N5 / 01', title: 'Python for Teens', note: 'Software design and development is compulsory in both components and worth two-thirds of the marks. This is where most of the grade comes from.' },
      { course: 'mysql-database-complete-masterclass-college', code: 'N5 / 02', title: 'Databases and SQL', note: 'For candidates choosing the database section and task, including entity-relationship design and SQL queries.' },
      { course: 'full-stack-web-development-teens-masterclass', code: 'N5 / 03', title: 'Full Stack Web Development for Teens', note: 'For candidates choosing the web section and task, covering structure, interface design and prototyping.' }
    ]
  },

  sections: [
    {
      id: 'twice', tint: 'tint', eyebrow: 'The choice you make twice',
      h2: 'Database or web, in the paper and again in the assignment',
      lede: 'From the National 5 Computing Science Course Specification, May 2023 (version 3.0), valid from session 2023 to 24.',
      body: [
        { kind: 'table', caption: 'How the 120 marks are divided', head: ['Component', 'Compulsory part', 'Optional part: choose one'], rows: [
          ['Question paper, 80 marks', 'Section 1: Software design and development, and Computer systems, 55 marks', 'Section 2 Database design and development, or Section 3 Web design and development, 25 marks'],
          ['Assignment, 40 marks', 'Task 1: Software design and development, 25 marks', 'Task 2 Database design and development, or Task 3 Web design and development, 15 marks'],
          ['Total, 120 marks', '80 marks, two-thirds of the course', '40 marks, one-third of the course']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The two choices are independent',
          left: [
            'Nothing in the specification ties the paper choice to the assignment choice. A candidate could answer the database section in the paper and complete the web task in the assignment, or the same area in both.',
            'Most candidates choose the same area twice, usually whichever their class covered in more depth. That is often sensible, but it should be a decision rather than a default.'
          ],
          rightH3: 'How to choose',
          right: [
            'Choose on strength, and choose early. A candidate who knows by the start of S4 which area they will answer spends revision time where it counts, rather than half-preparing both and committing in the exam hall.',
            'If one area clearly suits a student better, doing it twice consolidates it. If they are genuinely even, the assignment choice can reasonably follow whichever area has the more interesting task that year.'
          ] },
        { kind: 'capsule', mt: true, q: 'The number that matters most', p: 'Software design and development is compulsory in both components and together carries 80 of the 120 marks. Whatever a candidate chooses, programming decides most of the grade, which is where preparation should go first.' },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.sqa.org.uk/files_ccc/n5-course-spec-computing-science.pdf" rel="noopener" target="_blank">National 5 Computing Science Course Specification</a>, May 2023, version 3.0; and the <a class="ag-inline-link" href="https://www.sqa.org.uk/sqa/56923.html" rel="noopener" target="_blank">Qualifications Scotland National 5 Computing Science page</a>, which states that "On 1 February 2026, Qualifications Scotland replaced SQA and became Scotland\'s new national awarding body. The documents on this page remain current and you can continue to use them."' }
      ]
    },
    {
      id: 'paper', tint: 'deep', eyebrow: 'The question paper',
      h2: 'Eighty marks, and very little straight recall',
      lede: 'An hour and a half, three sections, of which a candidate answers two.',
      body: [
        { kind: 'table', caption: 'What the question paper asks for', head: ['Feature', 'What the specification says'], rows: [
          ['Length and marks', '80 marks in 1 hour and 30 minutes, 67 per cent of the course assessment'],
          ['Structure', 'Section 1 compulsory; then either section 2 or section 3'],
          ['How sections open', 'With short, stand-alone questions, predominantly C-grade questions in a simple or familiar context'],
          ['How sections develop', 'Context-based questions with multiple parts, including designing solutions and writing code, with both C and A-grade marks'],
          ['What is tested', 'The questions "assess application of understanding, with very few questions requiring direct recall of knowledge"']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Application, not memory', p: 'Very few questions test straight recall. A candidate who has memorised definitions without using them will find the paper harder than one who has written a lot of code.' },
          { h3: 'Code on paper', p: 'Questions ask candidates to design solutions and write code. Doing that by hand, without an editor, is a separate skill and needs practice of its own.' },
          { h3: 'The A-grade questions', p: 'The harder questions ask candidates to integrate knowledge, explain in detail, or analyse, compare and evaluate. Those marks separate the top grades.' }
        ] },
        { kind: 'p', html: 'The questions also ask candidates to explain how a program works and to communicate computing ideas "clearly and concisely, using appropriate terminology", and to understand the legal implications and environmental impact of contemporary technologies. Explaining clearly in writing is practised far less than coding, and it carries real marks.' },
        { kind: 'p', html: 'The habit that serves the whole paper is predicting what a program will do before running it, then explaining why. It is the same skill the harder questions reward, and it is set out with the research behind it on <a class="ag-inline-link" href="/problem-solving-skills-through-coding-uk">the problem-solving page</a>.' }
      ]
    },
    {
      id: 'assignment', tint: '', eyebrow: 'The assignment',
      h2: 'Six hours, open book, supervised, and externally marked',
      lede: 'The coursework component is tightly controlled, and the conditions are worth knowing before it starts.',
      body: [
        { kind: 'table', caption: 'How the assignment is set and run', head: ['Condition', 'What the specification says'], rows: [
          ['Marks', '40 marks, 33 per cent of the course assessment'],
          ['Tasks', 'Task 1 software design and development compulsory, then task 2 database or task 3 web'],
          ['Who sets it', '"Set by SQA, on an annual basis", now the responsibility of Qualifications Scotland'],
          ['Supervision', '"Conducted under a high degree of supervision and control"'],
          ['Time', '"Must be carried out within 6 hours", over "several shorter sessions" rather than one continuous session'],
          ['Materials', '"Conducted under open-book conditions, but supervised to ensure that the work presented is the candidate\'s own work"'],
          ['Marking', 'Evidence is submitted for external marking, and all marking is quality assured']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Open book is not a shortcut',
          left: [
            'Open-book conditions mean a candidate can consult materials, but the work is supervised and must be their own. Six hours is not long for a real programming task, and a candidate who has to look things up constantly will run out of time.',
            'Fluency is what open book rewards. The notes help a candidate who already knows the material; they do not rescue one who does not.'
          ],
          rightH3: 'What we will not do',
          right: [
            'We do not work on any candidate\'s assignment, and we will decline if asked. It is set each year, supervised, and externally marked as the candidate\'s own work.',
            'What we teach is everything it draws on: designing a program before writing it, testing it properly, and building database or web solutions on projects of our own.'
          ] },
        { kind: 'p', html: 'For the rules on AI and assessed work, which apply to coursework across the UK, <a class="ag-inline-link" href="/understand-the-code-dont-copy-paste-uk">the page on declaring AI</a> sets out why identified AI content earns nothing even when properly acknowledged. For the wider Scottish system, including the stages and what comes after National 5, see <a class="ag-inline-link" href="/coding-and-ai-classes-in-scotland">coding and AI classes in Scotland</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Four rungs through S3 and S4',
    lede: 'A candidate is placed by what they can do unaided, which is what both components measure.',
    table: { caption: 'What a National 5 candidate should be able to do', head: ['Rung', 'When', 'What should be true'], rows: [
      ['1. Programming fluency', 'Before or early in S4', 'Writing and debugging programs without copying examples, in the language the school uses'],
      ['2. Design before code', 'S4', 'Planning a solution with the design techniques the course names, then implementing it'],
      ['3. The chosen area', 'S4', 'Secure in either database or web design, chosen on purpose rather than by default'],
      ['4. Explaining and applying', 'Before the paper', 'Answering context questions in writing, and explaining how code works, rather than reciting']
    ] },
    left: { h3: 'Rung one carries most of the grade', ps: [
      'Software design and development is compulsory in both components and worth 80 of 120 marks. Everything else sits on top of it.',
      'The full topic order runs down the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Rung three is a decision', ps: [
      'Choosing database or web early focuses a year of revision. Choosing late splits it.',
      'After National 5 comes Higher, covered on <a class="ag-inline-link" href="/higher-computing-science-help">the Higher Computing Science page</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for National 5 candidates',
    lede: 'Arranged around the compulsory two-thirds and the two optional routes. Where to begin is decided in the free lesson.',
    bands: [
      { num: 'I', h3: 'Software design and development', sub: 'Compulsory, two-thirds of the marks', courses: [
        { code: 'UK / N51 / 01', slug: 'python-ai-kids-masterclass', title: 'First Python', blurb: 'For S2 and S3 students moving from blocks to typed code before the course starts.' },
        { code: 'UK / N51 / 02', slug: 'python-complete-masterclass-teens', title: 'Python in full', blurb: 'Programming to the standard both components reward.' },
        { code: 'UK / N51 / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms and data structures', blurb: 'Standard algorithms and efficient use of coding constructs, worked on paper.' }
      ] },
      { num: 'II', h3: 'The optional areas', sub: 'Database or web', courses: [
        { code: 'UK / N52 / 01', slug: 'mysql-database-complete-masterclass-college', title: 'Databases and SQL', blurb: 'Entity relationships, data dictionaries and SQL for the database route.' },
        { code: 'UK / N52 / 02', slug: 'full-stack-web-development-teens-masterclass', title: 'Full stack web development', blurb: 'Structure, interface design and prototyping for the web route.' },
        { code: 'UK / N52 / 03', slug: 'kids-ai-web-development-course', title: 'AI and web projects', blurb: 'A gentler way into web design for students who want a project first.' }
      ] },
      { num: 'III', h3: 'Beyond National 5', sub: 'For students heading to Higher', courses: [
        { code: 'UK / N53 / 01', slug: 'data-science-course-for-teens-python-data', title: 'Data science with Python', blurb: 'Working with real data, which Higher and Advanced Higher lean on.' },
        { code: 'UK / N53 / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'Training and testing models, for students well ahead of the course.' },
        { code: 'UK / N53 / 03', slug: 'gcse-computer-science-course', title: 'Computer science theory', blurb: 'The wider theory behind computer systems, taught to whichever course a student is on.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons work',
    h2: 'Programming first, the chosen area second',
    lede: 'Our teachers work from India on a clock that never changes, so Scotland is five and a half hours behind from October and four and a half from March. Slots are agreed in UK time.',
    slots: [
      { time: 'After school', l: 'Where most S3 and S4 students settle.' },
      { time: 'Early evening', l: 'For students with sport, music or a long journey.' },
      { time: 'Weekend morning', l: 'Good for timed practice of a full paper.' }
    ],
    cells: [
      { h3: 'The compulsory two-thirds', p: 'Programming comes first and gets most of the time, because it carries most of the marks.' },
      { h3: 'An area chosen early', p: 'We help a candidate decide database or web at the start of S4, then prepare for that one properly.' },
      { h3: 'Code by hand', p: 'Regular handwritten code, because the question paper asks for it and an editor hides weaknesses.' },
      { h3: 'Explaining in writing', p: 'Short written explanations of how code works, marked, because the paper rewards them.' },
      { h3: 'Nothing assessed', p: 'We never work on a candidate\'s assignment. We teach the skills it draws on.' },
      { h3: 'Groups by level', p: 'Five to ten students at one stage, comparing solutions to the same problem.' }
    ]
  },

  projectsH2: 'What our students have built',
  projectsLede: 'Four projects from lessons, none of them assessed work. More in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Six Google reviews, printed exactly as families left them.',

  fees: {
    h2: 'What National 5 tuition costs',
    lede: 'Priced monthly in US dollars, as it is for every family outside India. Nothing is charged before the free lesson, and nothing after it until a course and a weekly slot are fixed.',
    free: ['A real lesson on National 5 material', 'A straight view of the strongest optional area', 'Only a phone number needed'],
    group: ['Five to ten S4 candidates at the same point', 'The same teacher from August to the exam diet', 'Handwritten code returned with comments each week', 'Fewer lessons as the exam diet approaches'],
    one: ['One candidate and one teacher', 'Planned back from the exam diet', 'Useful for a specific grade target']
  },

  faq: {
    eyebrow: 'Questions about National 5 Computing Science',
    h2: 'What candidates and parents ask',
    items: [
      { q: 'How is National 5 Computing Science assessed?', a: 'By a question paper worth 80 marks, lasting an hour and a half, and an assignment worth 40 marks, completed within six hours. The paper is 67 per cent of the course assessment and the assignment 33 per cent.' },
      { q: 'What is compulsory?', a: 'Software design and development, in both components, with computer systems in the paper. Together those compulsory parts carry 80 of the 120 marks.' },
      { q: 'What can I choose?', a: 'Database design and development or web design and development, once in the question paper and once in the assignment.' },
      { q: 'Do I have to choose the same area twice?', a: 'The specification does not require it. The paper choice and the assignment choice are separate, though many candidates sensibly choose the same area in both.' },
      { q: 'How long is the assignment?', a: 'It must be completed within six hours, usually over several shorter sessions rather than one continuous block.' },
      { q: 'Can I use notes in the assignment?', a: 'It is conducted under open-book conditions but supervised to ensure the work is the candidate\'s own, and it is marked externally.' },
      { q: 'Is it all about memorising?', a: 'No. The specification says the questions assess application of understanding, with very few questions requiring direct recall.' },
      { q: 'Who is the awarding body now?', a: 'Qualifications Scotland, which replaced SQA on 1 February 2026. It says the existing course documents remain current and can still be used.' },
      { q: 'Will you help with my assignment?', a: 'No. It is set each year, supervised and externally marked as your own work. We teach the skills it draws on, using our own projects.' },
      { q: 'What does it cost?', a: 'The first lesson is free. After that a group place is USD 100 a month and one-to-one teaching USD 150, charged monthly with nothing in advance.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Further in Scotland',
    lede: 'The system around National 5, and the step after it.',
    items: [
      { href: '/coding-and-ai-classes-in-scotland', label: 'Coding and AI classes in Scotland', p: 'The Scottish stages and qualifications, and the move to Qualifications Scotland.' },
      { href: '/higher-computing-science-help', label: 'Higher Computing Science', p: 'What changes at Higher, the usual next step after National 5.' },
      { href: '/understand-the-code-dont-copy-paste-uk', label: 'Understand the code, do not copy-paste it', p: 'Why declared AI content earns nothing in assessed work.' },
      { href: '/best-python-classes-online-uk', label: 'Python classes online in the UK', p: 'The language most Scottish schools teach, and how the boards treat it.' },
      { href: '/best-coding-classes-for-teens-uk', label: 'Coding classes for teens in the UK', p: 'What Ofcom found about British teenagers, AI and checking.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'The national page, and the index of every UK page we publish.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Send a number and we will reply at a UK hour you choose. The lesson uses real National 5 material and ends with a straight view of which optional area suits the candidate.',
    readFirst: 'Happier to browse first? Full syllabuses sit on the <a class="ag-inline-link" href="/courses">course pages</a>, our method and its honest limits are in <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a> shows what follows what.',
    note: 'The quickest route is WhatsApp, free from any UK phone. Our number is Indian, so a message from Glasgow or Aberdeen will show a +91 code, and that is us.',
    formNote: 'Nothing to pay and nothing to sign. One reply, with a time.'
  },

  footer: {
    cols: [
      { h4: 'Scotland', links: [
        { href: '/coding-and-ai-classes-in-scotland', label: 'Coding and AI in Scotland' },
        { href: '/higher-computing-science-help', label: 'Higher Computing Science' },
        { href: '/scottish-mathematical-challenge-practice', label: 'Scottish Mathematical Challenge' },
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' }
      ] },
      { h4: 'More', links: [
        { href: '/understand-the-code-dont-copy-paste-uk', label: 'Declaring AI' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/student-labs', label: 'Student labs' }
      ] }
    ],
    bottomRight: 'Live National 5 teaching, on UK time'
  },

  personalityCss: `
.ag-root.ag-nfc .ag-hero h1 { letter-spacing: -0.025em; font-weight: 700; }
.ag-root.ag-nfc .ag-capsule { border-left-width: 6px; }
.ag-root.ag-nfc .ag-section-head h2 { max-width: 27ch; }
.ag-root.ag-nfc .ag-table caption { text-align: left; font-weight: 700; }
.ag-root.ag-nfc .ag-table th:first-child { width: 24%; }
.ag-root.ag-nfc .ag-table td:first-child { font-weight: 650; }
.ag-root.ag-nfc .ag-band-head h3 { letter-spacing: -0.006em; }
`,

  mustMention: ['80 marks', '40 marks', 'either section 2 or section 3', 'either task 2 or task 3', '80 of the 120 marks', 'open-book conditions', 'within 6 hours', 'very few questions requiring direct recall', 'Qualifications Scotland', '1 February 2026'],

  dossier: {
    curriculumAuthority: 'Scotland, National 5 Computing Science. National 5 Computing Science Course Specification, course code C816 75, course assessment code X816 75, SCQF level 5 (24 SCQF credit points), valid from session 2023-24, May 2023 (version 3.0), read from the sqa.org.uk PDF: "The notional length of time for a candidate to complete the course is 160 hours"; question paper 80 marks, 1 hour and 30 minutes, "67% of the overall marks for the course assessment (120 marks)", "Section 1 is mandatory, and candidates have the option to complete either section 2 or section 3", Section 1 Software design and development, and Computer systems 55 marks, Section 2 Database design and development 25 marks, Section 3 Web design and development 25 marks; each section opens with short stand-alone questions, predominantly C marks, then context-based questions with both C and A marks; the questions "assess application of understanding, with very few questions requiring direct recall of knowledge"; candidates communicate key concepts "clearly and concisely, using appropriate terminology" and understand "the legal implications and environmental impact of contemporary technologies". Assignment 40 marks, "33% of the overall marks", "Task 1 is mandatory, and candidates have the option to complete either task 2 or task 3", Task 1 Software design and development 25 marks, Task 2 Database design and development 15 marks, Task 3 Web design and development 15 marks; "set by SQA, on an annual basis" and "conducted under a high degree of supervision and control"; evidence externally marked; "The assignment must be carried out within 6 hours"; "It is not anticipated that this is a continuous 6-hour session but conducted over several shorter sessions"; "conducted under open-book conditions, but supervised to ensure that the work presented is the candidate\'s own work". Qualifications Scotland, National 5 Computing Science page: "On 1 February 2026, Qualifications Scotland replaced SQA and became Scotland\'s new national awarding body. The documents on this page remain current and you can continue to use them." The specification prints its section and task labels with em-dashes; the page restates them in plain words.',
    localProject: 'Choose database or web, twice. Software design and development is compulsory in both National 5 components and together carries 80 of the 120 marks, so the page puts that figure at the centre: programming decides most of the grade whatever else a candidate picks. It then surfaces a structural decision most candidates make by default: the question paper offers a database section or a web section, the assignment offers a database task or a web task, and the specification links the two not at all. The page advises choosing on strength and choosing early, while noting that doing the same area twice is often sensible. The question-paper section stresses that very few questions test straight recall and that written explanation carries real marks, and the assignment section sets out the unusual conditions, six hours over several sessions, open book but supervised, set annually and externally marked, with a clear statement that we never work on a candidate\'s assignment. The move from SQA to Qualifications Scotland on 1 February 2026 is stated with its source. Lesson family: an assessment whose optional parts hide a decision most candidates never notice making.',
    requiredMentions: ['either section 2 or section 3', 'either task 2 or task 3', '80 of the 120 marks', 'Qualifications Scotland'],
    sources: [
      { claim: 'National 5 Computing Science Course Specification, May 2023, version 3.0: course codes, notional hours, both components with marks, durations and weightings, the compulsory and optional sections and tasks, question design, and the assignment conditions.', url: 'https://www.sqa.org.uk/files_ccc/n5-course-spec-computing-science.pdf' },
      { claim: 'Qualifications Scotland, National 5 Computing Science page: the replacement of SQA on 1 February 2026 and the continued validity of the course documents.', url: 'https://www.sqa.org.uk/sqa/56923.html' }
    ],
    rejectedClaims: [
      'That a candidate scores better by choosing database or web: the specification weights them identically and the page offers only advice about choosing on strength.',
      'The contents of any year\'s assignment task: set annually and not read.',
      'Pass rates, grade boundaries or entry numbers: none read at a primary source for this build.',
      'Which programming language a Scottish school uses: the specification does not prescribe one, and the page refers to the language the school uses.',
      'Any change to the course since Qualifications Scotland took over: its own page says the documents remain current, and the page says no more.',
      'Any promise about a grade, and any offer to work on a candidate\'s assignment, which we decline.'
    ]
  }
};
