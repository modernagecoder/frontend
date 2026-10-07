'use strict';
// NSW Selective High School Placement Test: Thinking Skills practice (ag- exam door, Australia cluster
// Phase 3, row 45). Facts read raw on 7 October 2026 from the NSW Department of Education: selective high
// school practice tests page (Thinking Skills: 40 questions, 40 minutes, multiple choice; "No previous
// knowledge is required for this test."; the section tests "general critical thinking and problem-solving
// abilities"; the student video: "40 minutes to answer 40 questions", "multiple choice with four possible
// answers"; the department's statement on coaching) and the placement test page (computer-based; example
// timetable with Thinking Skills after the long break; Year 7 entry in 2027 test dates). Opportunity class
// comparison from the OC practice tests page (Thinking Skills 30 questions, 30 minutes).
// Lesson family: spotting the flaw in an argument (checked free site-wide on 7 October 2026). Arguments are
// our own. No admissions, placement or appeals advice. No score promised.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'exam', tag: 'NSW SELECTIVE TEST', label: 'NSW selective test: Thinking Skills', blurb: 'Forty questions in forty minutes that need no prior knowledge, what the department says about preparation, and practice at finding the flaw in an argument.' },
  slug: 'nsw-selective-test-thinking-skills-practice',
  code: 'nsts',
  accent: '#383C9C',
  accentRationale: 'NSW selective Thinking Skills: a deep indigo (7.4:1 on #EDE7DA), at least 14 RGB from every accent on the site',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'NSW selective test Thinking Skills practice',
  title: 'NSW Selective Test Thinking Skills Practice | Format, Flaws',
  description: 'NSW selective test Thinking Skills: 40 questions in 40 minutes, no prior knowledge needed, what the department says about coaching, and argument-flaw practice.',
  ogDescription: 'The Thinking Skills section of the NSW Selective High School Placement Test, described from the department\'s own pages, with honest advice and practice at spotting weak reasoning.',
  twitterDescription: 'NSW selective Thinking Skills: the format and practice spotting flawed arguments.',
  pageName: 'NSW Selective Test Thinking Skills Practice',
  webPageDescription: 'A guide to the Thinking Skills section of the NSW Selective High School Placement Test: format and timing from the NSW Department of Education, its advice on preparation, and original practice in identifying flaws in short arguments.',
  courseDescription: 'Live online classes for upper-primary students that build logical reasoning, problem solving and computational thinking, taught as lasting skills rather than as test coaching.',
  crumbs: [{ name: 'Coding and AI classes in New South Wales', href: '/coding-and-ai-classes-in-new-south-wales' }],
  crumbLabel: 'Selective test: Thinking Skills',
  navLinks: [
    { href: '#section', label: 'The section' },
    { href: '#prepare', label: 'Preparing well' },
    { href: '#flaws', label: 'Spot the flaw' },
    { href: '#musttrue', label: 'Must be true' },
    { href: '#coding', label: 'Logic and code' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'NSW &middot; Selective High School Placement Test &middot; Reasoning',
  h1: 'NSW selective test Thinking Skills practice',
  lede: 'Thinking Skills is the section of the NSW Selective High School Placement Test that families find hardest to picture, because the department says it needs no previous knowledge at all. It is 40 multiple-choice questions in 40 minutes, testing critical thinking and problem solving. This page sets out the format from the NSW Department of Education, repeats its view that coaching is unnecessary, and then practises one skill that sits at the heart of critical thinking: finding exactly where an argument goes wrong. There is no school-choice or placement advice here, and no score is promised.',
  secondaryCta: { href: '#flaws', label: 'Try the argument puzzles' },
  wa: 'Hello Modern Age Coders, I would like a free class for my upper-primary child on logic and problem solving.',
  heroNote: 'Format from the NSW Department of Education &middot; Arguments written by us &middot; No placement advice',
  spec: [
    ['Test', 'Selective High School Placement Test'],
    ['Entry year', 'Year 7'],
    ['Section', 'Thinking Skills'],
    ['Questions', '40, multiple choice'],
    ['Options', 'Four per question'],
    ['Time', '40 minutes'],
    ['Prior knowledge', 'None required'],
    ['Delivery', 'On department computers']
  ],
  capsuleQ: 'In short',
  capsule: 'Of the four parts of the NSW Selective High School Placement Test for Year 7 entry, Thinking Skills is the one that tests reasoning rather than school content. Children get 40 minutes for 40 multiple-choice questions, four options each, on a department computer. The department says it assesses critical thinking and problem solving and that no previous knowledge is required. Its free practice tests show every question type.',

  picks: {
    eyebrow: 'Skills that last',
    h2: 'Three courses that build clear thinking',
    lede: 'Chosen because logical reasoning is worth learning whatever school a child attends.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'NTS / 01', title: 'Problem solving and computational thinking', note: 'Logic puzzles, patterns and step-by-step reasoning.' },
      { course: 'maths-through-coding', code: 'NTS / 02', title: 'Maths through coding', note: 'Conditions, rules and testing ideas in real programs.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'NTS / 03', title: 'Competition maths', note: 'Puzzles that reward careful reasoning over speed.' }
    ]
  },

  sections: [
    {
      id: 'section', tint: 'tint', eyebrow: 'The section, as published',
      h2: 'Forty questions, forty minutes, four options',
      lede: 'Taken from the NSW Department of Education\'s placement test pages on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'Thinking Skills in the two NSW placement tests', head: ['Test', 'Questions', 'Time', 'Options per question'], rows: [
          ['Selective High School Placement Test (Year 7 entry)', '40', '40 minutes', 'Four'],
          ['Opportunity Class Placement Test (Year 5 entry)', '30', '30 minutes', 'Four']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The department describes Thinking Skills as a test of general critical thinking and problem-solving abilities, and states: "No previous knowledge is required for this test." Its video for students adds that there is a range of question types, all visible in the practice tests.',
            'In the department\'s example timetable for the selective test, Thinking Skills comes after Mathematical Reasoning and the longer break, so students sit it in the middle of the day.'
          ],
          right: [
            'Children sit every section at a test centre, on a computer the department supplies. The latest sitting, for students starting Year 7 in 2027, took place over the first weekend of May 2026, with a make-up day later that month.',
            'Forty questions in forty minutes is one minute each. Many Thinking Skills questions are short to read but need a careful second look, which is why accuracy matters more than rushing.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://education.nsw.gov.au/schooling/parents-and-carers/choosing-a-school-setting/selective-high-schools/placement-test/selective-high-school-practice-tests" rel="noopener" target="_blank">Selective high school practice tests</a>; <a class="ag-inline-link" href="https://education.nsw.gov.au/schooling/parents-and-carers/choosing-a-school-setting/selective-high-schools/placement-test/opportunity-class-practice-tests" rel="noopener" target="_blank">Opportunity class practice tests</a>; <a class="ag-inline-link" href="https://education.nsw.gov.au/schooling/parents-and-carers/choosing-a-school-setting/selective-high-schools/placement-test" rel="noopener" target="_blank">Placement test</a>. Checked on 7 October 2026. Modern Age Coders is independent of the department.' }
      ]
    },
    {
      id: 'prepare', tint: 'deep', eyebrow: 'Preparing well',
      h2: 'What the department advises, and what we add',
      lede: 'The department is clear that paid coaching is not needed. We agree, and say so before anything else.',
      body: [
        { kind: 'capsule', q: 'The NSW Department of Education', p: 'puts it plainly on its practice test page: paid coaching gives no advantage, the department does not back coaching for the placement test, and piling on coaching can hurt a child\'s wellbeing.' },
        { kind: 'two', mt: true,
          leftH3: 'Free and official',
          left: [
            'The department publishes online computer-based practice tests that simulate the real screens and timer, and PDF practice tests for families who prefer paper.',
            'Its Student Resource Hub has activities, quizzes and practice items. A child who has worked through those has seen every question style the section uses.'
          ],
          rightH3: 'Where we fit',
          right: [
            'Some children love logic puzzles and want more of them. Critical thinking, reasoning about rules and spotting weak arguments are also skills that matter in every subject, long after any test.',
            'Our classes teach those skills through puzzles and programming. We do not run Thinking Skills drills, and we will tell you honestly if your child simply needs the free practice tests and a good night\'s sleep.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://education.nsw.gov.au/schooling/parents-and-carers/choosing-a-school-setting/selective-high-schools/placement-test/selective-high-school-practice-tests" rel="noopener" target="_blank">Selective high school practice tests, "Helping your child prepare"</a>. Checked on 7 October 2026.' }
      ]
    },
    {
      id: 'flaws', tint: '', eyebrow: 'Puzzles we wrote',
      h2: 'Spot the flaw in the argument',
      lede: 'Each short argument below sounds reasonable but contains one weakness. The skill is naming the weakness precisely, not just feeling that something is off.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Find the conclusion', p: 'Ask what the speaker wants you to believe. It is often the sentence starting with "so" or "therefore".' },
          { h3: 'Find the reasons', p: 'List what is offered as support. Then ask: if the reasons were true, would the conclusion have to be true?' },
          { h3: 'Name the gap', p: 'The flaw is the step between reasons and conclusion that does not hold. Naming it exactly is what earns the mark.' }
        ] },
        { kind: 'table', caption: 'Original arguments and the flaw in each', head: ['Argument', 'The flaw', 'Why it fails'], rows: [
          ['Every time our netball team wears the green bibs, we win. So the green bibs make us win.', 'Treats two things that happen together as cause and effect', 'The team may wear green bibs for home games, which they win for other reasons'],
          ['I read two books by this author and both were boring. Her books are all boring.', 'Generalises from too few examples', 'Two books cannot represent everything an author has written'],
          ['If it rains, the oval is closed. The oval is closed today. So it must have rained.', 'Reverses the rule', 'The oval could be closed for many other reasons, such as maintenance'],
          ['Only students with a signed note can go on the excursion. Lena has a signed note, so she is definitely going.', 'Treats a requirement as a guarantee', 'A note is needed, but Lena could still be unwell or miss the bus'],
          ['Most students in our class prefer cricket, so most children in Australia prefer cricket.', 'Relies on an unrepresentative sample', 'One class is not a fair sample of a whole country'],
          ['Either we finish the project tonight or we will fail it.', 'Offers a false choice', 'There may be other options, such as finishing tomorrow before school']
        ] },
        { kind: 'p', text: 'The third and fourth arguments are the trickiest and the most useful to understand. A rule of the form "if A, then B" does not mean "if B, then A". And a requirement, such as needing a note, is not the same as a promise. Once students can name these two patterns, a surprising number of reasoning questions become straightforward.' },
        { kind: 'p', text: 'A good classroom routine is to make the argument stronger after naming its flaw. For the netball argument, the speaker would need to show the team also wins more with green bibs in away games. Fixing an argument proves you understood what was wrong with it.' }
      ]
    },
    {
      id: 'musttrue', tint: 'deep', eyebrow: 'A second puzzle type we wrote',
      h2: 'What must be true, and what only might be',
      lede: 'Many reasoning puzzles give a few facts and ask which statement must follow. The trap is choosing something that could be true rather than something that has to be.',
      body: [
        { kind: 'p', text: 'Here is a short set of facts. All the children in the chess club are in Year 6. Some of the children in the chess club also play in the band. Priya is in the band. Which statement must be true? Option one says Priya is in Year 6. Option two says some band members are in Year 6. Option three says every Year 6 child plays chess. Option four says Priya plays chess.' },
        { kind: 'p', text: 'Only option two has to be true. Some chess club members play in the band, and every chess club member is in Year 6, so those band members must be in Year 6. Options one and four might be true, but nothing says Priya is in the chess club at all. Option three reverses the first fact: the rule says chess players are in Year 6, not that Year 6 children play chess.' },
        { kind: 'p', text: 'Drawing the facts helps. A circle for the chess club sits inside a bigger circle for Year 6, and the band circle overlaps the chess circle. Priya can be placed anywhere in the band circle, which shows at once why the statements about her are only possibilities. Students who sketch the circles before choosing make far fewer mistakes than those who reason in their heads.' }
      ]
    },
    {
      id: 'coding', tint: 'tint', eyebrow: 'Logic and code',
      h2: 'Why programming sharpens the same thinking',
      lede: 'Rules, conditions and careful checking are the daily work of a programmer.',
      body: [
        { kind: 'two',
          leftH3: 'In a program',
          left: [
            'An if statement is a rule: if the oval is wet, close it. Programmers learn quickly that the reverse rule is a different statement, because code that confuses the two produces bugs.',
            'Testing code means hunting for the case that breaks an assumption, which is exactly what spotting a flawed argument asks a student to do.'
          ],
          rightH3: 'In our classes',
          right: [
            'Upper-primary students write short programs with conditions and loops, then try to break each other\'s programs with unusual inputs.',
            'The same students discuss arguments and puzzles aloud. Explaining why an answer is right, not only choosing it, is the habit we care about most.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Critical thinking, step by step',
    h2: 'Four stages for upper-primary thinkers',
    lede: 'These develop over time through discussion and practice, not overnight.',
    table: { caption: 'Reasoning about arguments', head: ['Stage', 'The student can', 'Secure when'], rows: [
      ['1. Conclusion and reasons', 'Separate what is claimed from why', 'Underlines the conclusion in any short argument'],
      ['2. Testing the link', 'Ask whether the reasons force the conclusion', 'Finds a case where reasons hold but the conclusion fails'],
      ['3. Naming patterns', 'Recognise cause confusion, reversed rules, small samples', 'Names the flaw in a few words'],
      ['4. Repairing', 'Add what an argument would need to work', 'Strengthens the netball argument convincingly']
    ] },
    left: { h3: 'Balance matters', ps: [
      'The department warns against too much coaching. Reading widely, playing strategy games and talking through everyday decisions build the same thinking.',
      'If practice becomes stressful, stop and play a logic game together instead.'
    ] },
    right: { h3: 'The maths section', ps: [
      'Mathematical Reasoning is covered on <a class="ag-inline-link" href="/nsw-selective-test-mathematical-reasoning-practice">our Mathematical Reasoning page</a>.',
      'Younger students sitting the Opportunity Class test can start with <a class="ag-inline-link" href="/oc-test-maths-practice-nsw">OC test maths practice</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'Courses for reasoning',
    h2: 'Courses that build logical thinking',
    lede: 'Grouped by approach. Each card shows its full syllabus.',
    bands: [
      { num: 'I', h3: 'Logic and problems', sub: 'Puzzles and reasoning', courses: [
        { code: 'NTS / L / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving and computational thinking', blurb: 'Structured puzzles and clear explanations.' },
        { code: 'NTS / L / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Reasoning puzzles for keen students.' },
        { code: 'NTS / L / 03', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths', blurb: 'Solid maths underneath the logic.' }
      ] },
      { num: 'II', h3: 'Logic in code', sub: 'Conditions and testing', courses: [
        { code: 'NTS / C / 01', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Ideas tested in real programs.' },
        { code: 'NTS / C / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Quick, accurate calculation.' },
        { code: 'NTS / C / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Samples, chance and fair conclusions.' }
      ] },
      { num: 'III', h3: 'Looking ahead', sub: 'For secondary school', courses: [
        { code: 'NTS / A / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle years maths', blurb: 'Early secondary maths, taken calmly.' },
        { code: 'NTS / A / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Rules written in symbols.' },
        { code: 'NTS / A / 03', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Patterns in calculation.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Inside our classes',
    h2: 'Discussion-led lessons, live online',
    lede: 'Our teachers are in India, which is behind New South Wales. In Sydney during daylight saving, a 4 pm class starts at 10.30 am India time, so weekday afternoons are easy to schedule.',
    slots: [
      { time: 'Weekday afternoon', l: 'A popular slot for Years 4 to 6.' },
      { time: 'Weekend', l: 'Unhurried time for puzzles and discussion.' },
      { time: 'School holidays', l: 'Short logic and coding workshops.' }
    ],
    cells: [
      { h3: 'Arguments discussed aloud', p: 'Students explain the flaw before the class moves on.' },
      { h3: 'Puzzles with reasons', p: 'Every answer needs a sentence of justification.' },
      { h3: 'Five to ten per group', p: 'Small enough for everyone to speak.' },
      { h3: 'Private lessons', p: 'For a child who wants focused one-to-one time.' },
      { h3: 'Not test coaching', p: 'We teach thinking skills for life, as the department advises.' },
      { h3: 'No promises', p: 'Selection decisions belong to the department; we claim nothing about them.' }
    ]
  },

  projectsH2: 'What students have built',
  projectsLede: 'Projects our learners made by choice. Browse the <a class="ag-inline-link" href="/student-labs">student labs</a> for more.',
  reviewsLede: 'Reviews parents left on Google, quoted in full.',

  fees: {
    h2: 'Fees',
    lede: 'We charge NSW families monthly in US dollars, as we do in every country outside India. No deposit, and no minimum number of months.',
    free: ['A real lesson with a teacher', 'Honest advice, even if it is that no classes are needed', 'No card details'],
    group: ['Five to ten students at one level', 'A regular teacher', 'Discussion and feedback every week', 'Certificate at the end'],
    one: ['One-to-one teaching', 'Focus on chosen skills', 'Flexible weekly time']
  },

  faq: {
    eyebrow: 'Questions about Thinking Skills',
    h2: 'What families ask about this section',
    items: [
      { q: 'How many questions are in the selective test Thinking Skills section?', a: '40 multiple-choice questions in 40 minutes, each with four possible answers, according to the NSW Department of Education.' },
      { q: 'What does Thinking Skills test?', a: 'The department describes it as testing general critical thinking and problem-solving abilities.' },
      { q: 'Does my child need to learn anything new for it?', a: 'No. The department says no previous knowledge is required for this test.' },
      { q: 'Is the OC Thinking Skills section the same?', a: 'It is shorter. The Opportunity Class Placement Test has 30 Thinking Skills questions in 30 minutes, also with four options each.' },
      { q: 'Is coaching needed?', a: 'No, in the department\'s view: it calls coaching unnecessary and does not back it. Working through the official practice tests at home is enough for most children.' },
      { q: 'What does "spot the flaw" mean?', a: 'Finding the step in an argument where the reasons do not actually support the conclusion, such as treating two things that happen together as cause and effect.' },
      { q: 'Is the test on paper?', a: 'No. Every section is answered on screen, using a department computer at the test centre.' },
      { q: 'Can you help us choose a selective school?', a: 'No. We give no school-choice, placement or appeals advice.' },
      { q: 'Will your classes raise my child\'s chance of a place?', a: 'Nobody can honestly promise a place, and we do not try. We teach reasoning that is worth having anyway.' },
      { q: 'When would classes run?', a: 'We fix one weekly time after the free trial. In Sydney during daylight saving, 4 pm is 10.30 am India time.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for New South Wales',
    lede: 'Other test sections, maths and coding.',
    items: [
      { href: '/nsw-selective-test-mathematical-reasoning-practice', label: 'Selective test Mathematical Reasoning', p: 'The 35-question maths section.' },
      { href: '/oc-test-maths-practice-nsw', label: 'OC test maths', p: 'For Year 4 students.' },
      { href: '/coding-and-ai-classes-in-new-south-wales', label: 'Coding and AI in NSW', p: 'Our New South Wales overview.' },
      { href: '/problem-solving-through-coding-australia', label: 'Problem solving through coding', p: 'Logic built through programming.' },
      { href: '/learn-to-think-not-just-use-ai-tools-australia', label: 'Learn to think, not just use AI', p: 'Reasoning skills in an AI age.' },
      { href: '/online-maths-tutoring-australia', label: 'Maths tutoring in Australia', p: 'From primary right through to Year 12.' }
    ]
  },

  start: {
    h2: 'Book a free reasoning class',
    lede: 'Let us know which puzzles your child enjoys and what year they are in. The trial is a real lesson in logical thinking, and we will be honest about whether more classes would help.',
    readFirst: 'Want to look first? The <a class="ag-inline-link" href="/course-atlas">course atlas</a> lists every course, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains a lesson.',
    note: 'Replies on WhatsApp tend to come quickest. The +91 number is Indian because we teach from India; we do not have an Australian office.',
    formNote: 'No card and no commitment. We reply once to set it up.'
  },

  footer: {
    cols: [
      { h4: 'NSW tests', links: [
        { href: '/nsw-selective-test-mathematical-reasoning-practice', label: 'Mathematical Reasoning' },
        { href: '/oc-test-maths-practice-nsw', label: 'OC test maths' },
        { href: '/coding-and-ai-classes-in-new-south-wales', label: 'NSW overview' },
        { href: '/naplan-numeracy-practice-online', label: 'NAPLAN numeracy' }
      ] },
      { h4: 'Thinking skills', links: [
        { href: '/problem-solving-through-coding-australia', label: 'Problem solving through coding' },
        { href: '/learn-to-think-not-just-use-ai-tools-australia', label: 'Learn to think' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Reasoning taught for life; no placement promised'
  },

  personalityCss: `
.ag-root.ag-nsts .ag-hero-grid { gap: clamp(1rem, 3.1vw, 2.7rem); }
.ag-root.ag-nsts .ag-hero h1 { letter-spacing: -0.017em; }
.ag-root.ag-nsts .ag-capsule { border-left-width: 4px; }
.ag-root.ag-nsts .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-nsts .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-nsts .ag-table td { line-height: 1.6; }
.ag-root.ag-nsts .ag-spec dt { letter-spacing: 0.07em; }
.ag-root.ag-nsts .ag-slots { gap: 1.05rem; }
`,

  dossier: {
    curriculumAuthority: 'NSW Department of Education, read 7 October 2026. Selective high school practice tests: Thinking Skills Test, number of questions 40, time 40 minutes, multiple-choice; "No previous knowledge is required for this test."; the section tests general critical thinking and problem-solving abilities; student video: "For the Thinking Skills test you will have 40 minutes to answer 40 questions. The questions are all multiple choice with four possible answers."; "It is important to know that coaching or tutoring for the placement test is not necessary."; "The department does not recommend or endorse coaching for the placement test."; free online computer-based and PDF practice tests; Student Resource Hub. Opportunity class practice tests: Thinking Skills 30 questions, 30 minutes; "For the Thinking Skills test, you\'ll have 30 minutes to answer 30 questions." Placement test page: computer-based; Year 7 entry in 2027 test Friday 1 to Saturday 2 May 2026, make-up Friday 22 May 2026; example timetable Thinking Skills Test 12:20 to 1:00 pm after the long break. Sydney during daylight saving UTC+11; India UTC+5:30.',
    localProject: 'Six original short arguments for upper-primary students, each with a named flaw: cause confused with coincidence (green netball bibs), generalising from two books, reversing an if-then rule (the closed oval), a requirement treated as a guarantee (Lena\'s signed note), an unrepresentative sample (one class and cricket), and a false choice (finish tonight or fail).',
    requiredMentions: ['spot the flaw', 'No previous knowledge is required for this test', '40 multiple-choice questions in 40 minutes', '30 Thinking Skills questions in 30 minutes', 'green bibs', 'Reverses the rule', 'Treats a requirement as a guarantee', 'Offers a false choice', 'Lena has a signed note'],
    sources: [
      { claim: 'Selective high school practice tests: Thinking Skills format, no prior knowledge, coaching statement, practice tests.', url: 'https://education.nsw.gov.au/schooling/parents-and-carers/choosing-a-school-setting/selective-high-schools/placement-test/selective-high-school-practice-tests' },
      { claim: 'Opportunity class practice tests: Thinking Skills 30 questions, 30 minutes.', url: 'https://education.nsw.gov.au/schooling/parents-and-carers/choosing-a-school-setting/selective-high-schools/placement-test/opportunity-class-practice-tests' },
      { claim: 'Placement test: computer-based, dates, example timetable.', url: 'https://education.nsw.gov.au/schooling/parents-and-carers/choosing-a-school-setting/selective-high-schools/placement-test' }
    ],
    rejectedClaims: [
      'A list of the official Thinking Skills question types: shown only in the department\'s practice tests, which were not reproduced, so none is listed.',
      'Copying any department practice question: refused; all arguments are original.',
      'Any claim that coaching or our classes improve selection: refused.',
      'School-choice, placement or appeals advice: not given.',
      'Test dates for later intakes: not yet read, so only the published 2026 dates appear.'
    ]
  }
};
