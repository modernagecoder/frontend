'use strict';
// NSW Selective High School Placement Test: Mathematical Reasoning practice (ag- exam door, Australia
// cluster Phase 3, row 44). Facts read raw on 7 October 2026 from the NSW Department of Education
// (education.nsw.gov.au): placement test page (computer-based on department computers; Year 7 entry in 2027
// tested Friday 1 to Saturday 2 May 2026, make-up Friday 22 May 2026; from 2026 tests held only in NSW;
// calculators not allowed; example timetable Mathematical Reasoning 40 minutes) and the selective high
// school practice tests page (4 sections; questions draw on the NSW curriculum up to Year 6; Mathematical
// Reasoning 35 questions, 40 minutes, multiple choice with five possible answers; "Students cannot use a
// calculator during this, or any other, test."; the department's statement that coaching is not necessary
// and that it does not recommend or endorse coaching). Practice problems are our own.
// Lesson family: tape diagrams for multi-step word problems (checked free site-wide, 7 October 2026).
// No admissions, catchment, appeals or selection-chance advice. No score promised.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'exam', tag: 'NSW SELECTIVE TEST', label: 'NSW selective test: Mathematical Reasoning', blurb: 'The 35-question, 40-minute Mathematical Reasoning section, what the department says about coaching, and tape diagrams for multi-step problems.' },
  slug: 'nsw-selective-test-mathematical-reasoning-practice',
  code: 'nsmr',
  accent: '#147064',
  accentRationale: 'NSW selective Mathematical Reasoning: a deep teal (4.8:1 on #EDE7DA), at least 11 RGB from every accent on the site',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'NSW selective test Mathematical Reasoning practice',
  title: 'NSW Selective Test Mathematical Reasoning Practice',
  description: 'NSW selective test Mathematical Reasoning: 35 questions in 40 minutes, no calculator, what the department says about coaching, and original tape diagram practice.',
  ogDescription: 'The Mathematical Reasoning section of the NSW Selective High School Placement Test, from the department\'s own pages, with honest advice on preparation and multi-step practice we wrote.',
  twitterDescription: 'NSW selective test Mathematical Reasoning: the format, honest advice and practice.',
  pageName: 'NSW Selective Test Mathematical Reasoning Practice',
  webPageDescription: 'A guide to the Mathematical Reasoning section of the NSW Selective High School Placement Test for Year 7 entry: format, timing and calculator rule from the NSW Department of Education, its position on coaching, free official practice, and original tape diagram problems.',
  courseDescription: 'Live online maths classes for upper-primary students in New South Wales that build fractions, ratio and multi-step reasoning from the NSW curriculum, taught as mathematics rather than as test coaching.',
  crumbs: [{ name: 'Coding and AI classes in New South Wales', href: '/coding-and-ai-classes-in-new-south-wales' }],
  crumbLabel: 'Selective test: Mathematical Reasoning',
  navLinks: [
    { href: '#format', label: 'Format' },
    { href: '#coaching', label: 'On coaching' },
    { href: '#tape', label: 'Tape diagrams' },
    { href: '#timing', label: 'Pacing' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'NSW &middot; Selective High School Placement Test &middot; Maths',
  h1: 'NSW selective test Mathematical Reasoning practice',
  lede: 'The NSW Selective High School Placement Test has four sections, and Mathematical Reasoning is the one most families ask us about. It is 35 multiple-choice questions in 40 minutes, on a department computer, with no calculator. This page gives the format exactly as the NSW Department of Education publishes it, repeats plainly what the department says about coaching, points you to its free practice tests, and then teaches one tool that makes multi-step word problems manageable: the tape diagram. It contains no advice about school choice, placement or appeals, and no promise of any score.',
  secondaryCta: { href: '#tape', label: 'Try the tape diagram problems' },
  wa: 'Hello Modern Age Coders, I would like a free maths class for my Year 5 or 6 child, on multi-step problem solving.',
  heroNote: 'Format from the NSW Department of Education &middot; Practice written by us &middot; No placement advice',
  spec: [
    ['Test', 'Selective High School Placement Test'],
    ['Entry year', 'Year 7'],
    ['Section', 'Mathematical Reasoning'],
    ['Questions', '35, multiple choice'],
    ['Options', 'Five possible answers'],
    ['Time', '40 minutes'],
    ['Calculator', 'Not allowed'],
    ['Content', 'NSW curriculum up to Year 6']
  ],
  capsuleQ: 'In short',
  capsule: 'Mathematical Reasoning is one of four sections in the NSW Selective High School Placement Test for Year 7 entry. Students answer 35 multiple-choice questions, each with five possible answers, in 40 minutes on a department computer. No calculator is allowed in any section. The department says questions draw on the NSW curriculum up to Year 6 and that coaching is not necessary.',

  picks: {
    eyebrow: 'Maths worth learning anyway',
    h2: 'Three courses that build reasoning, not tricks',
    lede: 'Useful for any capable upper-primary student, test or no test.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'NMR / 01', title: 'Problem solving', note: 'Multi-step thinking, drawn and explained before calculated.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'NMR / 02', title: 'Primary maths in depth', note: 'Fractions, ratio and measurement from the upper-primary curriculum.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'NMR / 03', title: 'Competition maths', note: 'For students who enjoy harder problems for their own sake.' }
    ]
  },

  sections: [
    {
      id: 'format', tint: 'tint', eyebrow: 'The section, as published',
      h2: '35 questions, 40 minutes, five options each',
      lede: 'Every detail comes from the NSW Department of Education, read on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'Selective High School Placement Test sections (department practice test page)', head: ['Section', 'Questions', 'Time', 'Type'], rows: [
          ['Reading', '17 (3 questions have multiple parts)', '45 minutes', 'Multiple choice'],
          ['Mathematical Reasoning', '35', '40 minutes', 'Multiple choice, five possible answers'],
          ['Thinking Skills', '40', '40 minutes', 'Multiple choice, four possible answers'],
          ['Writing', '1', '30 minutes', 'Open response']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The test is computer-based and sat on computers the department provides, at test centres that are mostly local public high schools. Students can do working out on paper; the department\'s video for students says they "can use paper for working out" in Mathematical Reasoning.',
            'Calculators are on the list of items not allowed, and the practice page states: "Students cannot use a calculator during this, or any other, test."'
          ],
          right: [
            'For Year 7 entry in 2027, the department lists the test on Friday 1 to Saturday 2 May 2026, with a make-up test on Friday 22 May 2026. Each student sits on one day only. From 2026 the placement tests are held only in New South Wales.',
            'The department describes the section as testing "mathematical reasoning skills" in which a child "will use different concepts from maths to solve problems", and notes that the concepts are based on what the child already learns at school.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://education.nsw.gov.au/schooling/parents-and-carers/choosing-a-school-setting/selective-high-schools/placement-test" rel="noopener" target="_blank">NSW Department of Education, Placement test</a>; <a class="ag-inline-link" href="https://education.nsw.gov.au/schooling/parents-and-carers/choosing-a-school-setting/selective-high-schools/placement-test/selective-high-school-practice-tests" rel="noopener" target="_blank">Selective high school practice tests</a>. Checked on 7 October 2026. We are independent of the department.' }
      ]
    },
    {
      id: 'coaching', tint: 'deep', eyebrow: 'What the department says',
      h2: 'Coaching is not necessary, in the department\'s own words',
      lede: 'We think families deserve to read this before paying anyone, including us.',
      body: [
        { kind: 'capsule', q: 'From the NSW Department of Education', p: '"It is important to know that coaching or tutoring for the placement test is not necessary. The test will not need your child to know any new or special knowledge. So, extra paid coaching outside of school will not give your child an advantage."' },
        { kind: 'two', mt: true,
          left: [
            'The department goes further: it "does not recommend or endorse coaching for the placement test", and it warns that too much coaching can harm a child\'s wellbeing. It provides free resources, including online computer-based practice tests and PDF practice tests, in its Student Resource Hub.',
            'Our advice is the same. Start with the department\'s free practice tests. They show the real screens, the timer and the question styles, and they cost nothing.'
          ],
          right: [
            'So what is this page for? Some children genuinely love problem solving and want more of it, whether or not they sit the test. Others find upper-primary fractions and ratio shaky, which will matter in Year 7 regardless of school.',
            'Our classes teach mathematics: fractions, ratio and multi-step reasoning from the curriculum the test already draws on. We do not run test-coaching courses, and we will tell you honestly if we think your child does not need us.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://education.nsw.gov.au/schooling/parents-and-carers/choosing-a-school-setting/selective-high-schools/placement-test/selective-high-school-practice-tests" rel="noopener" target="_blank">Selective high school practice tests, "Helping your child prepare for the placement test"</a>. Checked on 7 October 2026.' }
      ]
    },
    {
      id: 'tape', tint: '', eyebrow: 'Problems we wrote',
      h2: 'Tape diagrams for multi-step problems',
      lede: 'A tape diagram turns a word problem into equal units drawn as strips. Once the picture is right, the arithmetic is small. All problems below use only upper-primary content and need no calculator.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Draw equal units', p: 'If one amount is four times another, draw one strip of 1 unit and one strip of 4 units. Equal-sized boxes are the whole idea.' },
          { h3: 'Label what you know', p: 'Write the total, or the difference, against the strips it belongs to. The question usually tells you one of these.' },
          { h3: 'Find one unit', p: 'Divide to find the value of a single unit, then build every answer from it. Check by putting the numbers back into the story.' }
        ] },
        { kind: 'table', caption: 'Original practice problems with the tape diagram reasoning', head: ['Problem', 'The diagram', 'One unit', 'Answer'], rows: [
          ['Three fifths of a class are girls. There are 12 more girls than boys. How many students are in the class?', 'Girls 3 units, boys 2 units; the difference is 1 unit', '12', '60 students'],
          ['Sam has 4 times as many cards as Lee. Together they have 85. How many does Sam have?', 'Lee 1 unit, Sam 4 units: 5 units altogether', '17', '68 cards'],
          ['Red and blue beads are in the ratio 2 to 3. There are 10 more blue beads than red. How many beads in total?', 'Red 2 units, blue 3 units; the difference is 1 unit', '10', '50 beads'],
          ['A tank is two fifths full. Adding 18 litres makes it seven tenths full. What does the tank hold?', 'Tenths: 4 shaded, then 7 shaded; 3 tenths added', '6 litres per tenth', '60 litres'],
          ['Ana uses a quarter of her stickers, then a third of what is left. She has 30 left. How many did she start with?', 'Quarters: 1 used, 3 left; a third of those 3 used, 2 quarters left', '15 per quarter', '60 stickers'],
          ['Three consecutive whole numbers add to 72. What is the largest?', 'Three equal strips plus 0, 1 and 2 extra', '23', '25']
        ] },
        { kind: 'p', text: 'Notice how the ratio and fraction problems collapse into the same move: find the gap or total in units, divide once, then rebuild. The sticker problem looks like two separate fraction steps, but on a diagram the second step simply halves what is left, and the whole question becomes "2 quarters are 30".' },
        { kind: 'p', text: 'Walk through the first problem slowly. The class is split into fifths, so draw five equal boxes: three for girls, two for boys. The girls have one box more than the boys, and the story says that difference is 12 students, so one box is 12. Five boxes make 60. To check, three fifths of 60 is 36 girls and two fifths is 24 boys, and 36 is indeed 12 more than 24. Every problem in the table can be read back into its story the same way.' },
        { kind: 'p', text: 'With five options per question, a tape diagram also helps eliminate answers. If the class must be a multiple of 5 units, any option that is not a multiple of 5 can be crossed out before any calculation.' }
      ]
    },
    {
      id: 'timing', tint: 'tint', eyebrow: 'Pacing',
      h2: 'About 68 seconds per question',
      lede: 'Our arithmetic: 40 minutes divided by 35 questions is roughly 68.6 seconds each.',
      body: [
        { kind: 'two',
          leftH3: 'Habits that help',
          left: [
            'Read the last sentence of a question first, so you know what is being asked before reading the story.',
            'Draw small and fast. A tape diagram on scrap paper takes five seconds and saves a muddled calculation.',
            'Use the five options as a check, not a shortcut. If your answer is not among them, the diagram needs another look.'
          ],
          rightH3: 'Habits to avoid',
          right: [
            'Spending three minutes on one problem. A question left for later is better than five questions never reached.',
            'Guessing from the look of the numbers. Options are often built from common mistakes.',
            'Practising under time pressure every day. Calm, accurate reasoning first; speed follows.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Building multi-step reasoning',
    h2: 'Four stages across Years 4 to 6',
    lede: 'Most capable students move through these over two or three years of ordinary good teaching.',
    table: { caption: 'Reasoning with units', head: ['Stage', 'What the student does', 'Secure when'], rows: [
      ['1. Part and whole', 'Draws a total split into parts', 'Solves "together they have 85" problems'],
      ['2. Comparison', 'Draws two strips and marks the difference', 'Solves "12 more girls than boys" problems'],
      ['3. Fractions of a whole', 'Divides a strip into fifths or tenths', 'Solves the tank problem without converting'],
      ['4. Two-step changes', 'Redraws the strip after each change', 'Solves the sticker problem in one diagram']
    ] },
    left: { h3: 'Keeping it healthy', ps: [
      'The department warns that too much coaching can harm wellbeing, and we agree. An hour a week of enjoyable maths is plenty for most children.',
      'If your child is stressed, stop practising tests and go back to puzzles they choose themselves.'
    ] },
    right: { h3: 'The other sections', ps: [
      'Thinking Skills is a separate 40-minute section; our <a class="ag-inline-link" href="/nsw-selective-test-thinking-skills-practice">Thinking Skills page</a> covers it in the same honest way.',
      'For the Year 4 Opportunity Class test, see <a class="ag-inline-link" href="/oc-test-maths-practice-nsw">OC test maths practice</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'Courses for upper primary',
    h2: 'Maths courses for Years 4 to 6',
    lede: 'Grouped by focus. Each card links to a full syllabus.',
    bands: [
      { num: 'I', h3: 'Reasoning', sub: 'Problem solving and logic', courses: [
        { code: 'NMR / R / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving and computational thinking', blurb: 'Breaking problems into clear steps.' },
        { code: 'NMR / R / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Harder problems for keen students.' },
        { code: 'NMR / R / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Patterns and logic explored in code.' }
      ] },
      { num: 'II', h3: 'Core maths', sub: 'Fractions, ratio and measurement', courses: [
        { code: 'NMR / C / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths', blurb: 'The upper-primary curriculum, taught deeply.' },
        { code: 'NMR / C / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Fast, careful calculation without a device.' },
        { code: 'NMR / C / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Data and chance for upper primary.' }
      ] },
      { num: 'III', h3: 'Looking ahead', sub: 'For students ready for secondary maths', courses: [
        { code: 'NMR / A / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle years maths', blurb: 'Years 7 to 9, started early.' },
        { code: 'NMR / A / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Units in tape diagrams become letters.' },
        { code: 'NMR / A / 03', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus mental maths', blurb: 'Visual calculation for younger learners.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Our lessons',
    h2: 'Mathematics first, for children who enjoy it',
    lede: 'Teachers work from India, which is behind Sydney. During daylight saving a 4.30 pm Sydney class starts at 11 am India time, so after-school slots are simple to keep.',
    slots: [
      { time: 'After school', l: 'The usual slot for Years 4 to 6.' },
      { time: 'Saturday', l: 'For families with weekday commitments.' },
      { time: 'Holidays', l: 'Short blocks on fractions or ratio.' }
    ],
    cells: [
      { h3: 'Diagrams before numbers', p: 'Students draw the problem before they calculate anything.' },
      { h3: 'Explain every answer', p: 'A correct answer without a reason counts as half done.' },
      { h3: 'Groups of five to ten', p: 'Children at a similar level learn together.' },
      { h3: 'One-to-one available', p: 'For a child who wants a particular topic strengthened.' },
      { h3: 'No test coaching', p: 'We teach maths from the curriculum, as the department advises.' },
      { h3: 'No placement promises', p: 'Selection is the department\'s decision; we make no claims about it.' }
    ]
  },

  projectsH2: 'Student projects',
  projectsLede: 'Made by learners who wanted to build something. More in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parent reviews from Google, copied exactly.',

  fees: {
    h2: 'Fees',
    lede: 'Families in New South Wales pay monthly in US dollars, the rate we charge in every country other than India. There is no up-front payment and no minimum term.',
    free: ['A real lesson with a teacher', 'Our honest view, including if no help is needed', 'No card details'],
    group: ['Five to ten children at one level', 'The same teacher each week', 'Work explained and checked', 'A certificate at the end'],
    one: ['One teacher for one child', 'Focus on chosen topics', 'Times to suit your family']
  },

  faq: {
    eyebrow: 'Questions about Mathematical Reasoning',
    h2: 'What NSW families ask us',
    items: [
      { q: 'How many questions are in the selective test Mathematical Reasoning section?', a: '35 multiple-choice questions, each with five possible answers, in 40 minutes, according to the NSW Department of Education.' },
      { q: 'Can students use a calculator?', a: 'No. The department says students cannot use a calculator during Mathematical Reasoning or any other section, though they can work out on paper.' },
      { q: 'Is the selective test on a computer?', a: 'Yes. It is computer-based and sat on computers provided by the department at test centres, mostly local public high schools.' },
      { q: 'What maths does it cover?', a: 'The department says questions draw on concepts from the NSW curriculum up to Year 6, and that children do not need to study extra concepts.' },
      { q: 'Does my child need coaching?', a: 'The department says coaching or tutoring for the placement test is not necessary and that it does not recommend or endorse coaching. Its free practice tests are the place to start.' },
      { q: 'What is a tape diagram?', a: 'A drawing of a word problem as equal-sized strips or boxes, so that totals, differences and fractions can be seen as units before any calculation.' },
      { q: 'When is the test?', a: 'For Year 7 entry in 2027 the department listed Friday 1 to Saturday 2 May 2026, with a make-up test on Friday 22 May 2026. Check the department\'s site for later years.' },
      { q: 'Can you advise on which school to choose?', a: 'No. We do not give school-choice, placement or appeals advice. Those questions belong with the department and the schools.' },
      { q: 'Will lessons improve my child\'s chances?', a: 'We make no promise about scores or placement. We teach mathematics that is worth knowing regardless of the test.' },
      { q: 'When would lessons run?', a: 'We agree one weekly time after the free trial, usually after school. During daylight saving Sydney is five and a half hours ahead of India time.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for NSW families',
    lede: 'Other test sections, NAPLAN and coding.',
    items: [
      { href: '/nsw-selective-test-thinking-skills-practice', label: 'Selective test Thinking Skills', p: 'The 40-question reasoning section.' },
      { href: '/oc-test-maths-practice-nsw', label: 'OC test maths', p: 'The Year 4 Opportunity Class test.' },
      { href: '/coding-and-ai-classes-in-new-south-wales', label: 'Coding and AI in NSW', p: 'Our state page for New South Wales.' },
      { href: '/naplan-year-5-numeracy-practice', label: 'NAPLAN Year 5 numeracy', p: 'Upper-primary maths in NAPLAN.' },
      { href: '/online-maths-tutoring-australia', label: 'Maths tutoring in Australia', p: 'Live classes for every year.' },
      { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar', p: 'Contests for students who love problems.' }
    ]
  },

  start: {
    h2: 'Book a free maths class',
    lede: 'Tell us your child\'s year and what they enjoy or find hard. The trial is a real maths lesson, and we will say honestly whether ongoing classes make sense.',
    readFirst: 'Prefer to read first? Every course is on the <a class="ag-inline-link" href="/course-atlas">course atlas</a>, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a lesson in full.',
    note: 'WhatsApp is the quickest way to reach us. Our number is Indian (+91) because the school is based in India; we have no office in Australia.',
    formNote: 'No payment details and no obligation. We reply once to arrange it.'
  },

  footer: {
    cols: [
      { h4: 'NSW tests', links: [
        { href: '/nsw-selective-test-thinking-skills-practice', label: 'Thinking Skills' },
        { href: '/oc-test-maths-practice-nsw', label: 'OC test maths' },
        { href: '/hsc-software-engineering-help', label: 'HSC Software Engineering' },
        { href: '/coding-and-ai-classes-in-new-south-wales', label: 'NSW overview' }
      ] },
      { h4: 'Australia', links: [
        { href: '/online-maths-tutoring-australia', label: 'Maths tutoring' },
        { href: '/naplan-numeracy-practice-online', label: 'NAPLAN numeracy' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Maths taught, not test coaching; no placement promised'
  },

  personalityCss: `
.ag-root.ag-nsmr .ag-hero-grid { gap: clamp(1rem, 2.7vw, 2.4rem); }
.ag-root.ag-nsmr .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-nsmr .ag-capsule { border-left-width: 5px; }
.ag-root.ag-nsmr .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-nsmr .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-nsmr .ag-table td { line-height: 1.5; }
.ag-root.ag-nsmr .ag-spec dt { letter-spacing: 0.1em; }
.ag-root.ag-nsmr .ag-slots { gap: 0.95rem; }
`,

  dossier: {
    curriculumAuthority: 'NSW Department of Education, read 7 October 2026. Placement test page: "Students take the placement test on computers provided by the department."; Selective high school, Year 7 entry in 2027: Friday 1 to Saturday 2 May 2026, make-up Friday 22 May 2026; "Each student is only required to sit the placement test on one day."; "From 2026 the placement tests will only be held in NSW."; calculators on the not-allowed list; example timetable Mathematical Reasoning Test 40 mins. Practice tests page: "There are 4 test sections: reading, thinking skills, maths, and writing. The questions draw upon concepts from the NSW curriculum up to Year 6"; Reading 17 (3 multi-part), 45 minutes; Mathematical Reasoning 35, 40 minutes, multiple-choice; Thinking Skills 40, 40 minutes; Writing 1, 30 minutes; "Students cannot use a calculator during this, or any other, test."; video: "40 minutes to answer 35 questions. The questions are all multiple choice with five possible answers", "You can\'t use a calculator but can use paper for working out"; "It is important to know that coaching or tutoring for the placement test is not necessary. The test will not need your child to know any new or special knowledge. So, extra paid coaching outside of school will not give your child an advantage."; "The department does not recommend or endorse coaching for the placement test."',
    localProject: 'Original tape diagram problems at upper-primary level: three fifths girls with 12 more girls than boys gives 60 students; 4 times as many cards, 85 together, gives Sam 68; beads 2 to 3 with 10 more blue gives 50; a tank two fifths full plus 18 litres reaching seven tenths holds 60 litres; a quarter then a third of the rest used, 30 left, means 60 at the start; three consecutive numbers totalling 72 have largest 25. Pacing: 40 minutes over 35 questions is about 68.6 seconds each (our arithmetic).',
    requiredMentions: ['tape diagram', 'Ana uses a quarter of her stickers', '35 multiple-choice questions', '12 more girls than boys', 'Friday 1 to Saturday 2 May 2026', 'does not recommend or endorse coaching', 'NSW curriculum up to Year 6', '68.6 seconds', 'two fifths full'],
    sources: [
      { claim: 'NSW Department of Education, Placement test: computer-based, dates for Year 7 entry in 2027, held only in NSW from 2026, items not allowed including calculators, example timetable.', url: 'https://education.nsw.gov.au/schooling/parents-and-carers/choosing-a-school-setting/selective-high-schools/placement-test' },
      { claim: 'NSW Department of Education, Selective high school practice tests: four sections, question counts and times, five options, no calculator, curriculum up to Year 6, statement on coaching, free practice tests.', url: 'https://education.nsw.gov.au/schooling/parents-and-carers/choosing-a-school-setting/selective-high-schools/placement-test/selective-high-school-practice-tests' },
      { claim: 'NSW Department of Education, Opportunity class practice tests (for comparison with the OC test).', url: 'https://education.nsw.gov.au/schooling/parents-and-carers/choosing-a-school-setting/selective-high-schools/placement-test/opportunity-class-practice-tests' }
    ],
    rejectedClaims: [
      'Test dates for Year 7 entry in 2028: not yet read on the department site, so only the published 2026 dates are given with that label.',
      'Any score needed for a place, any school ranking or cut-off: not given; no placement advice is offered.',
      'Any claim that coaching or our classes improve selection chances: refused, and the department\'s statement is quoted.',
      'Marking scheme details for Mathematical Reasoning: not stated on the selective page read, so not claimed.',
      'Application fees or processes: not covered.'
    ]
  }
};
