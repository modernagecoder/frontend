'use strict';
// NSW Opportunity Class Placement Test: Mathematical Reasoning practice (ag- exam door, Australia cluster
// Phase 3, row 46). Facts read raw on 7 October 2026 from the NSW Department of Education: opportunity class
// practice tests page (3 sections: reading, thinking skills and maths; concepts from the NSW curriculum up to
// Year 4; computer-based; Reading 14 questions (3 multi-part), 40 minutes; Mathematical Reasoning 35
// questions, 40 minutes, five possible answers; Thinking Skills 30 questions, 30 minutes; "Students cannot use
// a calculator during this, or any other, test."; "Each individual response is worth 1 mark. Some questions
// ask for multiple responses and so are worth more than 1 mark."; the department's coaching statement) and
// the placement test page (Year 5 entry in 2027: Friday 8 to Saturday 9 May 2026, make-up Friday 22 May
// 2026; example OC timetable). Practice problems are our own.
// Lesson family: the organised list, counting every case systematically (checked free site-wide on
// 7 October 2026). No admissions, placement or appeals advice. No score promised.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'exam', tag: 'NSW OC TEST', label: 'OC test maths practice', blurb: 'The Year 4 Opportunity Class test explained from the department\'s pages, with honest advice and practice in listing every possibility in order.' },
  slug: 'oc-test-maths-practice-nsw',
  code: 'ocmt',
  accent: '#445820',
  accentRationale: 'OC test maths: a muted olive (6.4:1 on #EDE7DA), at least 11 RGB from every accent on the site',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'OC test maths practice (NSW)',
  title: 'OC Test Maths Practice NSW | Year 4, Format, Organised Lists',
  description: 'OC test maths practice for NSW Year 4 students: the Mathematical Reasoning section, how marking works, the department\'s advice, and organised-list problems.',
  ogDescription: 'The NSW Opportunity Class Placement Test maths section for Year 4 children, from the department\'s own pages, with calm advice and counting problems solved by careful lists.',
  twitterDescription: 'OC test maths for Year 4: the format, honest advice and organised-list practice.',
  pageName: 'OC Test Maths Practice NSW',
  webPageDescription: 'A guide for NSW families to the maths section of the Opportunity Class Placement Test for Year 5 entry: format and marking from the NSW Department of Education, its view on coaching, and original organised-list problems for Year 4 children.',
  courseDescription: 'Live online maths classes for NSW children in Years 3 and 4 that build number sense, patterns and systematic problem solving from the curriculum, taught gently and never as test coaching.',
  crumbs: [{ name: 'Coding and AI classes in New South Wales', href: '/coding-and-ai-classes-in-new-south-wales' }],
  crumbLabel: 'OC test maths',
  navLinks: [
    { href: '#octest', label: 'The OC test' },
    { href: '#marks', label: 'How marking works' },
    { href: '#lists', label: 'Organised lists' },
    { href: '#calm', label: 'Keeping it calm' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'NSW &middot; Opportunity Class Placement Test &middot; Year 4',
  h1: 'OC test maths practice',
  lede: 'The Opportunity Class Placement Test is sat in Year 4, which makes it the first high-stakes test many New South Wales children meet. Its maths section asks 35 multiple-choice questions in 40 minutes, on a computer, without a calculator, using ideas from the curriculum up to Year 4. This page explains the section and its marking straight from the NSW Department of Education, shares the department\'s view that coaching is unnecessary, and practises one gentle but powerful habit for young problem solvers: making an organised list so that no possibility is missed. We give no advice about placement, and promise no score.',
  secondaryCta: { href: '#lists', label: 'Try the counting problems' },
  wa: 'Hello Modern Age Coders, I would like a free maths class for my Year 3 or Year 4 child, on problem solving.',
  heroNote: 'Format from the NSW Department of Education &middot; Problems written by us &middot; Gentle, honest advice',
  spec: [
    ['Test', 'Opportunity Class Placement Test'],
    ['Sat in', 'Year 4, for Year 5 entry'],
    ['Sections', 'Reading, Mathematical Reasoning, Thinking Skills'],
    ['Maths questions', '35'],
    ['Maths time', '40 minutes'],
    ['Options', 'Five per maths question'],
    ['Calculator', 'Not allowed'],
    ['Content', 'Curriculum up to Year 4']
  ],
  capsuleQ: 'In short',
  capsule: 'The OC test is the NSW Opportunity Class Placement Test, sat in Year 4 for entry to an opportunity class in Year 5. It has three computer-based sections. The maths section, Mathematical Reasoning, has 35 multiple-choice questions with five possible answers and lasts 40 minutes, with no calculator. Questions use concepts from the NSW curriculum up to Year 4.',

  picks: {
    eyebrow: 'Gentle next steps',
    h2: 'Three courses for curious eight- and nine-year-olds',
    lede: 'Maths worth learning for its own sake, at a pace young children enjoy.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'OCM / 01', title: 'Problem solving for kids', note: 'Puzzles, patterns and organised thinking, explained aloud.' },
      { course: 'mental-maths-mastery-kids', code: 'OCM / 02', title: 'Mental maths', note: 'Confident calculation without a calculator or a rush.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'OCM / 03', title: 'Primary maths', note: 'Every strand of the early primary curriculum, taught with care.' }
    ]
  },

  sections: [
    {
      id: 'octest', tint: 'tint', eyebrow: 'The test, from the department',
      h2: 'Three sections in Year 4, all on screen',
      lede: 'Facts below are from the NSW Department of Education, checked on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'Opportunity Class Placement Test sections', head: ['Section', 'Number of questions', 'Time'], rows: [
          ['Reading', '14 (3 with multiple parts)', '40 minutes'],
          ['Mathematical Reasoning', '35, each with five possible answers', '40 minutes'],
          ['Thinking Skills', '30, each with four possible answers', '30 minutes']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The department describes the OC test as having three sections: reading, thinking skills and maths. The questions draw on concepts from the NSW curriculum up to Year 4, and the department says it reviews every question so that students do not need any extra knowledge.',
            'Everything is answered on a computer the department provides, at a test centre that is usually a local public high school. Children may do working out on paper, but calculators are not permitted in any section.'
          ],
          right: [
            'For Year 5 entry in 2027, the OC test was held on Friday 8 to Saturday 9 May 2026, with a make-up session on Friday 22 May 2026. Children attend on one day only, and all students from a primary school are tested on the same day.',
            'The department\'s example timetable runs from a 9.30 am arrival to dismissal at 12.35 pm, with short breaks between sections and no long snack break, unlike the longer selective test.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://education.nsw.gov.au/schooling/parents-and-carers/choosing-a-school-setting/selective-high-schools/placement-test/opportunity-class-practice-tests" rel="noopener" target="_blank">Opportunity class practice tests</a>; <a class="ag-inline-link" href="https://education.nsw.gov.au/schooling/parents-and-carers/choosing-a-school-setting/selective-high-schools/placement-test" rel="noopener" target="_blank">Placement test</a>. Read on 7 October 2026; we are not part of, or endorsed by, the department.' }
      ]
    },
    {
      id: 'marks', tint: 'deep', eyebrow: 'Marking and preparation',
      h2: 'How the practice tests are marked, and what the department advises',
      lede: 'Two things every OC family should read before buying anything.',
      body: [
        { kind: 'two',
          leftH3: 'Marking, as described for the practice tests',
          left: [
            'The department explains that in its online practice tests "Each individual response is worth 1 mark. Some questions ask for multiple responses and so are worth more than 1 mark."',
            'Its practice tests are timed with an on-screen countdown, which a child can hide if it makes them nervous. At the end, the child sees which answers were right and can review any they got wrong, with the correct answer shown.'
          ],
          rightH3: 'The department on coaching',
          right: [
            'On the same page, the department says coaching or tutoring for the placement test is not necessary, that extra paid coaching outside school will not give a child an advantage, and that it does not recommend or endorse coaching.',
            'We share that view for an eight-year-old more strongly than for anyone. The official practice tests, a quiet week and a good breakfast are what a Year 4 child needs for test day.'
          ] },
        { kind: 'p', text: 'Where do our classes fit, then? Some young children are hungry for more maths than school offers, and some find Year 3 and 4 topics such as multiplication facts or fractions shaky. In both cases good teaching helps, test or no test. Our lessons teach mathematics; they are not OC coaching, and we will say so plainly in the free trial.' },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://education.nsw.gov.au/schooling/parents-and-carers/choosing-a-school-setting/selective-high-schools/placement-test/opportunity-class-practice-tests" rel="noopener" target="_blank">Opportunity class practice tests</a>. Checked on 7 October 2026.' }
      ]
    },
    {
      id: 'lists', tint: '', eyebrow: 'Problems we wrote',
      h2: 'The organised list: count every case, miss none',
      lede: 'Many young problem solvers find some answers and stop. An organised list fixes the order in which possibilities are written, so the child knows when every case has been found.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Fix the first choice', p: 'Write every option that starts with the first item, then every option starting with the second, and so on. Order is what makes a list organised.' },
          { h3: 'Never go backwards', p: 'When pairing friends, A with B already covers B with A. Only pair each person with the people after them in the list.' },
          { h3: 'Count the pattern', p: 'Once a list is in order, its shape often shows a pattern, such as 3, then 2, then 1, that makes the total easy to check.' }
        ] },
        { kind: 'table', caption: 'Original Year 4 counting problems with the organised list written out', head: ['Problem', 'Organised list', 'Answer'], rows: [
          ['Using the digits 2, 4 and 7 once each, how many two-digit numbers can you make?', '24, 27; 42, 47; 72, 74', '6'],
          ['A cafe offers chocolate, mango or vanilla ice cream, in a cone or a cup. How many choices are there?', 'Chocolate cone, chocolate cup; mango cone, mango cup; vanilla cone, vanilla cup', '6'],
          ['Four friends each shake hands once with everyone else. How many handshakes?', 'A with B, C, D; B with C, D; C with D', '6'],
          ['How many ways can 10 be made by adding three different counting numbers? (Order does not matter.)', '1 + 2 + 7, 1 + 3 + 6, 1 + 4 + 5, 2 + 3 + 5', '4'],
          ['A strip of 3 squares in a row. How many rectangles can you find (count squares too)?', 'Length 1: three; length 2: two; length 3: one', '6'],
          ['Using 1, 2 and 3 once each, how many three-digit numbers are there, and which is the largest even one?', '123, 132; 213, 231; 312, 321', '6 numbers; 312 is the largest even one']
        ] },
        { kind: 'p', text: 'Several answers here are 6, and that is no accident. Three things arranged in order, three ice cream flavours each with two containers, and four people paired up all happen to give six cases. Spotting that different-looking problems share a structure is exactly the kind of reasoning a maths section rewards.' },
        { kind: 'p', text: 'Try the handshake problem with a child and watch the list grow. Ava shakes hands with Ben, Cal and Dev: three handshakes. Ben has already met Ava, so he only needs Cal and Dev: two more. Cal still has Dev: one more. Dev has met everyone. Three, then two, then one makes six. Ask what happens with five friends, and a child who has understood the list will predict four, three, two and one, which is ten, before drawing anything.' },
        { kind: 'p', text: 'The fourth problem shows why order matters. A child who writes sums at random may list 1 + 2 + 7 and 2 + 1 + 7 as different, or miss 2 + 3 + 5 entirely. Starting with the smallest first number and keeping each list increasing guarantees every set appears exactly once.' }
      ]
    },
    {
      id: 'calm', tint: 'tint', eyebrow: 'Keeping it calm',
      h2: 'Helping a Year 4 child on test day',
      lede: 'Practical, low-pressure ideas, most of them echoing the department\'s own guidance.',
      body: [
        { kind: 'two',
          leftH3: 'Before the day',
          left: [
            'Try one official online practice test together, mainly so the screens and the timer are familiar.',
            'Keep the week ordinary. Late nights of extra practice tend to make young children more anxious, not more ready.',
            'Pack what the department lists: a printed Test Admission Ticket, two 2B pencils, an eraser, a sharpener and a clear water bottle, with school uniform on.'
          ],
          rightH3: 'During the test',
          right: [
            'Remind your child that it is fine to skip a hard question and come back to it.',
            'Scrap paper is for drawing and listing. An organised list on paper is quicker than holding cases in your head.',
            'Afterwards, ask what was fun or interesting rather than how many they got right.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Systematic thinking',
    h2: 'Four steps for young problem solvers',
    lede: 'These develop naturally between about Year 2 and Year 5 with good teaching.',
    table: { caption: 'From guessing to listing', head: ['Step', 'What it looks like', 'Secure when the child can'], rows: [
      ['1. Trying cases', 'Finds a few answers by trial', 'Give two different ways to make 10'],
      ['2. Ordered lists', 'Writes cases in a fixed order', 'List all ice cream choices without repeats'],
      ['3. No double counting', 'Recognises that A with B equals B with A', 'Count four friends\' handshakes correctly'],
      ['4. Spotting structure', 'Sees a pattern in the list', 'Explain why 3, 2, 1 adds to 6 handshakes']
    ] },
    left: { h3: 'Wellbeing first', ps: [
      'The department notes that too much coaching can harm wellbeing. For a Year 4 child, enjoyment of maths matters far more than any single test.',
      'If your child becomes worried, put tests away and play counting games instead.'
    ] },
    right: { h3: 'Older students', ps: [
      'The Year 7 selective test has its own maths section, described on <a class="ag-inline-link" href="/nsw-selective-test-mathematical-reasoning-practice">our Mathematical Reasoning page</a>.',
      'Its Thinking Skills section is covered on <a class="ag-inline-link" href="/nsw-selective-test-thinking-skills-practice">our Thinking Skills page</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'Courses for Years 3 and 4',
    h2: 'Maths courses for younger primary students',
    lede: 'Grouped by what a child enjoys or needs. Each card opens the full syllabus.',
    bands: [
      { num: 'I', h3: 'Problem solving', sub: 'Patterns, lists and logic', courses: [
        { code: 'OCM / P / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving and computational thinking', blurb: 'Logical steps, explained aloud.' },
        { code: 'OCM / P / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Fun puzzles for keen young minds.' },
        { code: 'OCM / P / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Counting and patterns brought to life in code.' }
      ] },
      { num: 'II', h3: 'Number', sub: 'Facts and fluency', courses: [
        { code: 'OCM / N / 01', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Times tables and mental strategies.' },
        { code: 'OCM / N / 02', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus mental maths', blurb: 'Place value made visible.' },
        { code: 'OCM / N / 03', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Patterns that speed up calculation.' }
      ] },
      { num: 'III', h3: 'All strands', sub: 'The full curriculum', courses: [
        { code: 'OCM / A / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths', blurb: 'Measurement, shape and data too.' },
        { code: 'OCM / A / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Chance and data for curious kids.' },
        { code: 'OCM / A / 03', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle years maths', blurb: 'For the rare child far ahead.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How we teach young children',
    h2: 'Short, warm, live lessons',
    lede: 'Teachers work from India, behind Sydney. During daylight saving a 4 pm Sydney class begins at 10.30 am India time, so early-afternoon slots suit young learners.',
    slots: [
      { time: 'Right after school', l: 'Before tiredness sets in for Years 3 and 4.' },
      { time: 'Saturday morning', l: 'Unhurried, with time for questions.' },
      { time: 'Holiday sessions', l: 'A few relaxed lessons on one idea.' }
    ],
    cells: [
      { h3: 'Short tasks', p: 'Young children work in bursts with plenty of variety.' },
      { h3: 'Lists on paper', p: 'Children learn to write possibilities down in order.' },
      { h3: 'Five to ten per group', p: 'Small groups where every child is heard.' },
      { h3: 'One-to-one lessons', p: 'For a child who prefers quiet, individual time.' },
      { h3: 'Not OC coaching', p: 'We teach maths, in line with the department\'s advice.' },
      { h3: 'No placement claims', p: 'Placement is the department\'s decision alone.' }
    ]
  },

  projectsH2: 'Made by our students',
  projectsLede: 'Young learners\' projects, built for fun. See the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews from parents, exactly as written.',

  fees: {
    h2: 'Fees',
    lede: 'NSW families pay monthly in US dollars, our rate for everywhere except India. Nothing is paid in advance and you can stop whenever a month ends.',
    free: ['A gentle trial lesson', 'Honest advice, including when classes are not needed', 'No card required'],
    group: ['Five to ten children at one level', 'The same friendly teacher', 'Short tasks with feedback', 'A certificate at the end'],
    one: ['One teacher for one child', 'Calm, focused practice', 'Times that suit young children']
  },

  faq: {
    eyebrow: 'Questions about OC test maths',
    h2: 'What Year 3 and 4 families ask',
    items: [
      { q: 'What is the OC test?', a: 'The NSW Opportunity Class Placement Test, sat in Year 4 for entry to an opportunity class in Year 5. It has reading, mathematical reasoning and thinking skills sections, all done on a computer.' },
      { q: 'How many maths questions are in the OC test?', a: 'The Mathematical Reasoning section has 35 multiple-choice questions, each with five possible answers, and lasts 40 minutes.' },
      { q: 'Can children use a calculator?', a: 'No. The department says students cannot use a calculator in any section, but they can work out on paper.' },
      { q: 'What maths does the OC test use?', a: 'Concepts from the NSW curriculum up to Year 4. The department says students do not need extra knowledge.' },
      { q: 'How are answers marked?', a: 'For its practice tests, the department says each individual response is worth 1 mark, and questions that ask for multiple responses are worth more than 1 mark.' },
      { q: 'What is an organised list?', a: 'A way of writing every possibility in a fixed order, such as all choices starting with the first item, then the second, so that none is missed or counted twice.' },
      { q: 'Is coaching needed for the OC test?', a: 'The department says it is not necessary and does not recommend or endorse it. Its free practice tests are designed to familiarise children with the format.' },
      { q: 'When was the latest OC test?', a: 'For Year 5 entry in 2027 it was held on Friday 8 to Saturday 9 May 2026, with a make-up on Friday 22 May 2026.' },
      { q: 'Can you advise on placement or appeals?', a: 'No. We give no placement, school-choice or appeals advice, and promise no score.' },
      { q: 'What time would lessons be?', a: 'We agree a weekly time after the free trial, usually straight after school. In Sydney during daylight saving, 4 pm is 10.30 am India time.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for young NSW learners',
    lede: 'NAPLAN, coding and the later selective test.',
    items: [
      { href: '/naplan-year-3-numeracy-practice', label: 'NAPLAN Year 3 numeracy', p: 'Number line strategies for Year 3.' },
      { href: '/nsw-selective-test-mathematical-reasoning-practice', label: 'Selective test maths', p: 'The Year 6 test for Year 7 entry.' },
      { href: '/coding-classes-for-9-and-10-year-olds-australia', label: 'Coding for 9 and 10 year olds', p: 'Logic and patterns in Scratch.' },
      { href: '/coding-and-ai-classes-in-new-south-wales', label: 'Coding and AI in NSW', p: 'Our state page.' },
      { href: '/online-maths-tutoring-australia', label: 'Online maths tutoring', p: 'Live lessons across Australia.' },
      { href: '/maths-challenges', label: 'Maths challenges', p: 'Puzzles to enjoy together.' }
    ]
  },

  start: {
    h2: 'Book a free maths class for your young learner',
    lede: 'Share your child\'s year and what they enjoy. The trial is a friendly lesson in problem solving, and we will tell you honestly what we think comes next.',
    readFirst: 'Looking around first? The <a class="ag-inline-link" href="/course-atlas">course atlas</a> lists all our courses, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a typical lesson.',
    note: 'A WhatsApp message is usually the quickest way to reach us. Our +91 number is Indian; we teach from India and have no Australian premises.',
    formNote: 'No card, no pressure. One reply to book the class.'
  },

  footer: {
    cols: [
      { h4: 'NSW tests', links: [
        { href: '/nsw-selective-test-mathematical-reasoning-practice', label: 'Selective test maths' },
        { href: '/nsw-selective-test-thinking-skills-practice', label: 'Selective Thinking Skills' },
        { href: '/naplan-year-3-numeracy-practice', label: 'NAPLAN Year 3' },
        { href: '/naplan-year-5-numeracy-practice', label: 'NAPLAN Year 5' }
      ] },
      { h4: 'Australia', links: [
        { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' },
        { href: '/online-maths-tutoring-australia', label: 'Maths tutoring' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Maths for young learners; no OC coaching, no placement promised'
  },

  personalityCss: `
.ag-root.ag-ocmt .ag-hero-grid { gap: clamp(1rem, 2.4vw, 2.1rem); }
.ag-root.ag-ocmt .ag-hero h1 { letter-spacing: -0.011em; }
.ag-root.ag-ocmt .ag-capsule { border-left-width: 6px; }
.ag-root.ag-ocmt .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-ocmt .ag-table caption { text-align: left; }
.ag-root.ag-ocmt .ag-table th { letter-spacing: 0.025em; }
.ag-root.ag-ocmt .ag-spec dt { letter-spacing: 0.09em; }
.ag-root.ag-ocmt .ag-slots { gap: 1.15rem; }
`,

  dossier: {
    curriculumAuthority: 'NSW Department of Education, read 7 October 2026. Opportunity class practice tests: "There are 3 test sections: reading, thinking skills and maths. The questions draw upon concepts from the NSW curriculum up to Year 4"; computer-based; Reading 14 (3 questions have multiple parts), 40 minutes; Mathematical Reasoning 35, 40 minutes, multiple-choice ("multiple choice with five possible answers", video); Thinking Skills 30, 30 minutes; "Students cannot use a calculator during this, or any other, test."; "Each individual response is worth 1 mark. Some questions ask for multiple responses and so are worth more than 1 mark."; practice tests timed with a countdown that can be hidden; coaching "not necessary"; "does not recommend or endorse coaching". Placement test: Opportunity class, Year 5 entry in 2027, Friday 8 to Saturday 9 May 2026, make-up Friday 22 May 2026; "All students from your child\'s primary school will be tested on the same day."; checklist items (printed Test Admission Ticket, two 2B pencils, eraser, sharpener, clear water bottle, school uniform); OC example timetable 9:30 am arrival to 12:35 pm dismissal.',
    localProject: 'Original Year 4 organised-list problems: two-digit numbers from 2, 4 and 7 (6), ice cream flavour and container choices (6), handshakes among four friends (6), sums of three different counting numbers making 10 (4), rectangles in a 3-square strip (6), and three-digit numbers from 1, 2 and 3 (6, largest even 312).',
    requiredMentions: ['organised list', 'Opportunity Class Placement Test', 'Friday 8 to Saturday 9 May 2026', 'Each individual response is worth 1 mark', 'NSW curriculum up to Year 4', 'four friends', '1 + 4 + 5', '312 is the largest even one', 'Never go backwards'],
    sources: [
      { claim: 'Opportunity class practice tests: sections, question counts and times, curriculum up to Year 4, calculator rule, marking, coaching statement.', url: 'https://education.nsw.gov.au/schooling/parents-and-carers/choosing-a-school-setting/selective-high-schools/placement-test/opportunity-class-practice-tests' },
      { claim: 'Placement test: OC test dates for Year 5 entry in 2027, test day checklist, example OC timetable.', url: 'https://education.nsw.gov.au/schooling/parents-and-carers/choosing-a-school-setting/selective-high-schools/placement-test' },
      { claim: 'Selective high school practice tests (for comparison with the Year 7 test).', url: 'https://education.nsw.gov.au/schooling/parents-and-carers/choosing-a-school-setting/selective-high-schools/placement-test/selective-high-school-practice-tests' }
    ],
    rejectedClaims: [
      'OC test dates for Year 5 entry in 2028: not yet read on the department site, so only 2026 dates appear.',
      'How OC results are combined or scaled for placement: not stated on the pages read, so not described.',
      'Any claim that coaching or our classes improve placement: refused.',
      'Placement, school-choice or appeals advice: not given.',
      'Copying any department practice question: refused; all problems are original.'
    ]
  }
};
