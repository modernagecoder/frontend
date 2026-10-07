'use strict';
// Coding class or maths tutor first? Australia (ag- comparison door; AU cluster Phase 4, row 111).
// Sources, read raw on 7 October 2026:
//  - ACARA, Australian Curriculum v9 Mathematics F-6 curriculum content (docx): AC9M3N07 "follow and create algorithms
//    involving a sequence of steps and decisions to investigate numbers; describe any emerging patterns"; AC9M4N09
//    "follow and create algorithms involving a sequence of steps and decisions that use addition or multiplication to
//    generate sets of numbers; identify and describe any emerging patterns"; AC9M6A01 "recognise and use rules that
//    generate visually growing patterns and number patterns involving rational numbers"; AC9M6A03 "create and use
//    algorithms involving a sequence of steps and decisions that use rules to generate sets of numbers; identify,
//    interpret and explain emerging patterns".
//  - ACARA, Australian Curriculum v9 Mathematics 7-10 curriculum content (docx): Year 7 "design and create algorithms
//    involving a sequence of steps and decisions that will sort and classify sets of shapes according to their
//    attributes, and describe how the algorithms work".
//  - Australian Tutoring Association, "When to start tutoring?": "Tutoring may be appropriate for students who have
//    particular difficulties or those that are intellectually advanced."
// Our worked example: a row of n square garden beds bordered by tiles needs 2n + 6 tiles (8, 10, 12, 14, 16 for n = 1
// to 5). The term-to-term rule (add 2) reaches the 100th term after 99 additions; the explicit formula gives 206 tiles in
// one multiplication and one addition; working backwards, 100 tiles fit a row of 47 beds.
// Lesson family: term-to-term rule versus explicit formula for a growing pattern.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'guide', tag: 'CODING OR MATHS FIRST', blurb: 'Whether an Australian child should start with a coding class or a maths tutor, how the curriculum already links the two, and a pattern task that needs both.' },
  slug: 'coding-class-or-maths-tutor-first-australia',
  code: 'cotf',
  accent: '#282874',
  accentRationale: 'Coding or maths first, Australia: a deep navy chosen by hand, muted, at least 10 RGB units from every accent in use and outside the excluded hue bands',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'Coding class or maths tutor first, Australia',
  title: 'Coding Class or Maths Tutor First? A Guide for Australian Parents',
  description: 'Should your child start with a coding class or a maths tutor? How the Australian Curriculum links the two, signs that point each way, and a task that needs both.',
  ogDescription: 'Coding class or maths tutor first: what the Australian Curriculum already says about algorithms in maths, the signs that suggest one or the other, and a growing-pattern task to try at home.',
  twitterDescription: 'Coding class or maths tutor first? How Australian maths and coding connect, and how to decide.',
  pageName: 'Coding Class or Maths Tutor First?',
  webPageDescription: 'A decision guide for Australian parents choosing between a coding class and a maths tutor, with curriculum links and a worked pattern example.',
  courseDescription: 'Live online coding and maths lessons for Australian learners aged 6 to 67, separately or combined, with one regular teacher.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'Coding or maths first',
  navLinks: [
    { href: '#signs', label: 'Signs' },
    { href: '#curriculum', label: 'Curriculum links' },
    { href: '#pattern', label: 'A pattern task' },
    { href: '#plans', label: 'Plans' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Ages 6 to 12 and beyond &middot; Where to start',
  h1: 'Coding class or maths tutor first?',
  lede: 'Parents often ask us which comes first: a coding class, because their child loves games and screens, or a maths tutor, because school reports mention numeracy. It is a fair question, and the answer depends on the child. This page sets out the signs that point each way, shows how the Australian Curriculum already asks primary children to write and follow algorithms in maths, and walks through a growing-pattern task that is half maths and half code, which is often where the answer lies.',
  secondaryCta: { href: '#signs', label: 'Which way the signs point' },
  wa: 'Hello Modern Age Coders, we are deciding whether our child should start coding or maths tutoring in Australia. Could we book a free first lesson?',
  heroNote: 'Coding and maths taught live since 2020 &middot; 10,000+ students &middot; one teacher can cover both',
  spec: [
    ['For', 'Ages 6 to 12, and older'],
    ['Options', 'Coding, maths or both'],
    ['Combined course', 'Maths through coding'],
    ['Teacher', 'The same one each week'],
    ['Delivery', 'Live online video'],
    ['Group size', 'Five to ten, or one to one'],
    ['Times', 'Set for your state'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Start with a maths tutor if gaps in number basics, such as place value or times tables, are holding your child back in class; start with coding if maths is fine and your child is keen on games and making things. Often the two go together: the Australian Curriculum already asks children in Years 3 to 6 to follow and create algorithms that generate number patterns, which is coding thinking inside maths.',

  picks: {
    eyebrow: 'Three starting points',
    h2: 'A coding course, a maths course, or both at once',
    lede: 'Pick the one that matches what your child needs most right now.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'COTF / 01', title: 'Coding first', note: 'Ages 6 to 12. Scratch games, apps and early Python.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'COTF / 02', title: 'Maths first', note: 'Foundation to Year 5. Number sense, place value and fractions.' },
      { course: 'maths-through-coding', code: 'COTF / 03', title: 'Both together', note: 'Maths ideas explored and checked in code.' }
    ]
  },

  sections: [
    {
      id: 'signs', tint: 'tint', eyebrow: 'Reading the signs',
      h2: 'Signs that point to maths first, coding first, or both',
      lede: 'There is no rule that one must come first. These are the patterns we look for in the free first lesson.',
      body: [
        { kind: 'table', caption: 'What points towards maths first, coding first or both', head: ['What you notice', 'Points towards', 'Why'], rows: [
          ['Struggles with times tables or place value in Years 3 to 5', 'Maths first', 'Coding uses these constantly, and gaps make coding frustrating'],
          ['Avoids maths homework but builds things for hours', 'Coding first, with maths woven in', 'Motivation is the way in; maths can ride along'],
          ['Fine at maths, bored in class', 'Coding first', 'A new kind of problem to solve, at their level'],
          ['Teacher reports "careless errors"', 'Maths first, with diagnosis', 'Careless errors are often one misunderstood idea'],
          ['Loves puzzles and patterns', 'Both together', 'Patterns are where maths and code meet'],
          ['Anxious about maths', 'Coding first, or a gentle maths tutor', 'Success elsewhere can rebuild confidence']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'When a maths tutor should come first',
          left: [
            'If a child cannot yet multiply single digits quickly, even a simple game becomes hard: scoring, movement and timing all use multiplication and number sense.',
            'The Australian Tutoring Association notes that "Tutoring may be appropriate for students who have particular difficulties or those that are intellectually advanced." A clear gap in number basics is exactly that kind of difficulty.'
          ],
          rightH3: 'When coding can come first',
          right: [
            'If maths is broadly fine, coding offers a new kind of challenge, and many children discover that they enjoy logic and patterns once they meet them in a game.',
            'Coding also gives maths a reason. A child who needs to work out how far a sprite moves each second suddenly cares about multiplication.'
          ] },
        { kind: 'source', html: 'Quoted from the <a class="ag-inline-link" href="https://ata.edu.au/parent-info/when-to-start-tutoring/" rel="noopener" target="_blank">Australian Tutoring Association page on starting tutoring</a>, checked on 7 October 2026.' }
      ]
    },
    {
      id: 'curriculum', tint: 'deep', eyebrow: 'Curriculum links',
      h2: 'The Australian Curriculum already puts algorithms inside maths',
      lede: 'Many parents are surprised to learn that "algorithm" is a maths word in the Australian Curriculum, not only a Digital Technologies one. These maths content descriptions are quoted exactly.',
      body: [
        { kind: 'table', caption: 'Algorithm and pattern content descriptions in Australian Curriculum v9 Mathematics (ACARA)', head: ['Year', 'Code', 'Content description (quoted)'], rows: [
          ['Year 3', 'AC9M3N07', 'follow and create algorithms involving a sequence of steps and decisions to investigate numbers; describe any emerging patterns'],
          ['Year 4', 'AC9M4N09', 'follow and create algorithms involving a sequence of steps and decisions that use addition or multiplication to generate sets of numbers; identify and describe any emerging patterns'],
          ['Year 6', 'AC9M6A01', 'recognise and use rules that generate visually growing patterns and number patterns involving rational numbers'],
          ['Year 6', 'AC9M6A03', 'create and use algorithms involving a sequence of steps and decisions that use rules to generate sets of numbers; identify, interpret and explain emerging patterns']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What this means for parents',
          left: [
            'From Year 3, children are expected to follow and create step-by-step procedures in maths. That is the core of programming, written in maths language.',
            'In secondary school the idea continues: the Year 7 maths curriculum asks students to "design and create algorithms involving a sequence of steps and decisions that will sort and classify sets of shapes according to their attributes, and describe how the algorithms work".'
          ],
          rightH3: 'So the choice is smaller than it looks',
          right: [
            'A good coding class practises the algorithm and pattern skills the maths curriculum names, and a good maths tutor can use simple code to explore patterns.',
            'The real question is which need is more urgent: closing a number gap, or building confidence and interest through making things.'
          ] },
        { kind: 'source', html: 'Sources, read 7 October 2026: ACARA, Australian Curriculum v9 <a class="ag-inline-link" href="https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/mathematics/mathematics-curriculum-content-f-6-v9.docx" rel="noopener" target="_blank">Mathematics F to 6 content</a> and <a class="ag-inline-link" href="https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/mathematics/mathematics-curriculum-content-7-10-v9.docx" rel="noopener" target="_blank">Mathematics 7 to 10 content</a>.' }
      ]
    },
    {
      id: 'pattern', tint: 'tint', eyebrow: 'A task for both',
      h2: 'A growing pattern: term-to-term rule or explicit formula?',
      lede: 'Here is a pattern task in the spirit of AC9M6A01 that works as a maths lesson and a coding lesson at once.',
      body: [
        { kind: 'table', caption: 'Square garden beds in a row, with a border of square tiles (our example)', head: ['Beds in the row (n)', 'Border tiles', 'Change from the last'], rows: [
          ['1', '8', 'start'],
          ['2', '10', '+2'],
          ['3', '12', '+2'],
          ['4', '14', '+2'],
          ['5', '16', '+2'],
          ['100', '206 tiles', 'by formula']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Two ways to describe it',
          left: [
            'The term-to-term rule says: start at 8 and add 2 each time. It is easy to see, but reaching the 100th row of beds takes 99 additions.',
            'The explicit formula links the number of beds directly to the tiles: tiles = 2n + 6. One bed: 2 + 6 = 8. A hundred beds: 200 + 6 = 206 tiles, in one multiplication and one addition.'
          ],
          rightH3: 'Why 2n + 6?',
          right: [
            'Each bed adds a tile above it and a tile below it, which is the 2n. The two ends each need three more tiles to close the border, which is the 6.',
            'Working backwards answers a different question: with 100 tiles, 2n + 6 = 100 gives n = 47, so 100 tiles border a row of 47 beds.'
          ] },
        { kind: 'p', mt: true, html: 'In Python, the term-to-term rule is a loop and the explicit formula is one line, and children can check that both agree for every n up to 100:<br><code>tiles = 8</code><br><code>for n in range(2, 101): tiles = tiles + 2</code><br><code>print(tiles, 2 * 100 + 6)</code><br>Both print 206. Seeing the loop do 99 steps while the formula does one is a child\'s first taste of why mathematicians look for explicit formulas, and why programmers care about how much work a program does.' },
        { kind: 'p', mt: true, html: 'This single task covers the Year 6 pattern description and the coding idea of a loop. That is why our <a class="ag-inline-link" href="/courses/maths-through-coding">Maths through Coding</a> course exists: for children who need maths practice but come alive when they build something.' }
      ]
    },
    {
      id: 'plans', tint: 'deep', eyebrow: 'Three plans',
      h2: 'Three ways to start, depending on your child',
      lede: 'Families usually settle on one of these after the first lesson.',
      body: [
        { kind: 'table', caption: 'Three starting plans', head: ['Plan', 'What a week looks like', 'Suits'], rows: [
          ['Maths first', 'Two maths lessons a week on the specific gap, then coding once it closes', 'Children with a clear number gap'],
          ['Coding first', 'Two coding lessons a week, with maths ideas built into projects', 'Children fine at maths, keen to make things'],
          ['Combined', 'One maths lesson and one coding lesson, or a combined course', 'Children who need both and enjoy patterns'],
          ['Maths through coding', 'Maths topics explored and checked in Python or Scratch', 'Children who resist worksheets but love screens']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How long before switching',
          left: [
            'A specific gap, such as times tables or fractions, often closes within one or two terms of focused work. After that, coding can join or replace the maths lessons.',
            'We tell families plainly when a gap is closed, so nobody pays for maths help that is no longer needed.'
          ],
          rightH3: 'Keeping both going',
          right: [
            'Some families keep one maths and one coding lesson a week for years, especially through the upper primary and early secondary years.',
            'The same teacher can often teach both, which keeps the links between them visible.'
          ] },
        { kind: 'p', mt: true, html: 'Choosing the maths format is a separate question; our guide to <a class="ag-inline-link" href="/tutor-vs-tutoring-centre-maths-australia">a maths tutor versus a tutoring centre</a> covers it. For the coding side, see <a class="ag-inline-link" href="/online-coding-classes-for-kids-australia">online coding classes for kids in Australia</a>.' }
      ]
    },
    {
      id: 'ages', tint: '', eyebrow: 'By age',
      h2: 'How the answer changes with age',
      lede: 'The right first step depends a lot on where a child is at school.',
      body: [
        { kind: 'table', caption: 'Coding or maths first, by stage of schooling', head: ['Stage', 'Usual advice', 'Reason'], rows: [
          ['Foundation to Year 2', 'Playful maths first, unplugged coding alongside', 'Counting and number sense come before screens'],
          ['Years 3 to 4', 'Either, guided by times tables', 'Multiplication fluency unlocks both'],
          ['Years 5 to 6', 'Often both', 'Fractions, patterns and algorithms all appear in maths'],
          ['Years 7 to 10', 'Depends on goals', 'Algebra gaps first; otherwise coding for interest'],
          ['Years 11 to 12', 'Follow the subject choices', 'Senior maths and computing subjects set the priorities']
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'How combined learners progress',
    lede: 'What we see when children learn maths and coding side by side.',
    table: { caption: 'Four stages for combined maths and coding learners', head: ['Stage', 'What it looks like'], rows: [
      ['1. Close the gap', 'Number basics secured, so coding is not blocked'],
      ['2. Patterns in code', 'Loops generate the patterns maths lessons describe'],
      ['3. Formulas', 'Children replace loops with formulas and check they agree'],
      ['4. Own projects', 'Games and tools that use the maths they know']
    ] },
    left: { h3: 'For primary children', ps: [
      'Times tables, place value and patterns come first, then appear inside Scratch games.',
      'Parents see maths confidence grow through things the child builds.'
    ] },
    right: { h3: 'For secondary students', ps: [
      'Algebra, functions and statistics connect naturally to Python.',
      'Students who enjoy both often lean towards computing and maths subjects later.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for coding, maths or both',
    lede: 'Every course is taught live, in small groups or one to one.',
    bands: [
      { num: 'I', h3: 'Maths', sub: 'Foundation to Year 10', courses: [
        { code: 'COTF / MAT / 01', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Number sense, not tricks.' },
        { code: 'COTF / MAT / 02', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths', blurb: 'The full primary journey.' },
        { code: 'COTF / MAT / 03', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle-years maths', blurb: 'Fractions to early algebra.' }
      ] },
      { num: 'II', h3: 'Coding', sub: 'Ages 6 to 18', courses: [
        { code: 'COTF / COD / 01', slug: 'scratch-programming-complete-course', title: 'Scratch', blurb: 'Games and animations.' },
        { code: 'COTF / COD / 02', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'From blocks to typed Python.' },
        { code: 'COTF / COD / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Logic before syntax.' }
      ] },
      { num: 'III', h3: 'Both', sub: 'Combined', courses: [
        { code: 'COTF / BTH / 01', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Maths explored in code.' },
        { code: 'COTF / BTH / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Data, chance and code.' },
        { code: 'COTF / BTH / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'For keen problem solvers.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'One teacher who sees both sides',
    lede: 'Lessons are planned around the learner, whichever subject comes first.',
    slots: [
      { time: 'After school', l: 'Weekday afternoons in your state.' },
      { time: 'Evenings', l: 'For older learners.' },
      { time: 'Weekends', l: 'Saturday and Sunday slots.' }
    ],
    cells: [
      { h3: 'Diagnosis first', p: 'A short check shows where to begin.' },
      { h3: 'Same teacher', p: 'Week after week.' },
      { h3: 'Maths in code', p: 'Patterns checked by programs.' },
      { h3: 'Code with maths', p: 'Games that use real numbers.' },
      { h3: 'Live, online', p: 'No travel, any state.' },
      { h3: 'Honest switching', p: 'We say when a gap is closed.' }
    ]
  },

  projectsH2: 'Where maths meets code',
  projectsLede: 'Projects from learners combining maths and coding. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Reviews from families on Google, reproduced unchanged.',

  fees: {
    h2: 'Fees',
    lede: 'Coding and maths lessons outside India are billed monthly in US dollars at one rate for every country. You can switch between subjects as needs change, with no joining fee and no term contract.',
    free: ['A free first lesson', 'Advice on which to start with', 'No card details'],
    group: ['Five to ten learners', 'One regular teacher', 'Coding or maths', 'Monthly'],
    one: ['A teacher to yourself', 'Coding, maths or both', 'Your own pace']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'Coding or maths first: common questions',
    items: [
      { q: 'Should my child learn coding or maths first?', a: 'Start with maths if number basics are holding your child back in class; start with coding if maths is broadly fine and your child is keen to make things. Many children benefit from both together.' },
      { q: 'What is a term-to-term rule?', a: 'A term-to-term rule describes how to get from one term of a pattern to the next, such as add 2 each time. It is easy to follow but slow for finding a term far along the pattern.' },
      { q: 'What is an explicit formula?', a: 'An explicit formula gives any term of a pattern directly from its position, such as tiles = 2n + 6. It finds the 100th term in one step instead of 99 additions.' },
      { q: 'Does the Australian Curriculum include algorithms in maths?', a: 'Yes. For example, AC9M3N07 asks Year 3 students to follow and create algorithms to investigate numbers, and AC9M6A03 asks Year 6 students to create and use algorithms that use rules to generate sets of numbers.' },
      { q: 'Do you need to be good at maths to code?', a: 'Not to start. Early coding uses counting, simple arithmetic and patterns. Gaps in times tables or place value can make it frustrating, which is when maths help first makes sense.' },
      { q: 'Can coding help with maths?', a: 'Often. Coding gives maths a purpose, and writing a program that generates a pattern is a direct way to practise the algorithm and pattern skills the maths curriculum names.' },
      { q: 'Can one teacher teach both coding and maths?', a: 'Yes. We teach both, and the same teacher can often cover both for a child, which keeps the connections visible.' },
      { q: 'What is the Maths through Coding course?', a: 'A course that explores maths topics, such as patterns, fractions and statistics, by building and checking them in code.' },
      { q: 'How long does maths tutoring usually last before switching?', a: 'A specific gap often closes within one or two terms of focused work. We tell families when it is closed so they can move on.' },
      { q: 'How much do lessons cost?', a: 'Nothing for the first lesson. After it, coding or maths is paid month by month, never by the term, and there is no joining fee; see the fees section.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Australian families planning coding and maths.',
    items: [
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'Every Australian guide in one place.' },
      { href: '/online-maths-tutoring-australia', label: 'Online maths tutoring', p: 'Maths help for every year level.' },
      { href: '/tutor-vs-tutoring-centre-maths-australia', label: 'Tutor or tutoring centre?', p: 'Choosing the maths format.' },
      { href: '/kids-coding-languages-australia', label: 'Kids coding languages', p: 'Scratch, Python and more.' },
      { href: '/naplan-numeracy-practice-online', label: 'NAPLAN numeracy practice', p: 'How the numeracy test works.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What happens in a live lesson.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Tell us the year level, how maths is going and what your child enjoys. The teacher runs a short check and recommends coding, maths or both, honestly.',
    readFirst: 'Reading first? See <a class="ag-inline-link" href="/how-we-teach">how lessons are taught</a> or the <a class="ag-inline-link" href="/courses">course list</a>.',
    note: 'WhatsApp is the quickest way to reach us from Australia; we answer from India on a +91 number, and every lesson is online because we keep no office in Australia.',
    formNote: 'First lesson free; no card needed.'
  },

  footer: {
    cols: [
      { h4: 'Deciding', links: [
        { href: '/tutor-vs-tutoring-centre-maths-australia', label: 'Tutor or tutoring centre' },
        { href: '/online-maths-tutoring-australia', label: 'Online maths tutoring' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/online-coding-classes-for-kids-australia', label: 'Online classes for kids' },
        { href: '/coding-classes-for-9-and-10-year-olds-australia', label: 'Ages 9 and 10' },
        { href: '/problem-solving-through-coding-australia', label: 'Problem solving' }
      ] }
    ],
    bottomRight: 'Add two each time, or 2n plus 6'
  },

  personalityCss: `
.ag-root.ag-cotf .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-cotf .ag-capsule { border-left-width: 4px; border-radius: 7px; }
.ag-root.ag-cotf .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-cotf .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-cotf .ag-band-head h3 { letter-spacing: -0.004em; }
.ag-root.ag-cotf .ag-slots { gap: 1.15rem; }
`,

  dossier: {
    curriculumAuthority: 'Australia, coding or maths first. ACARA Australian Curriculum v9 Mathematics: AC9M3N07 (follow and create algorithms to investigate numbers), AC9M4N09 (algorithms that use addition or multiplication to generate sets of numbers), AC9M6A01 (rules that generate visually growing patterns), AC9M6A03 (create and use algorithms that use rules to generate sets of numbers); Year 7 algorithms to sort and classify shapes. Australian Tutoring Association: "Tutoring may be appropriate for students who have particular difficulties or those that are intellectually advanced."',
    localProject: 'Growing pattern (ours): a row of n square garden beds bordered by tiles needs 2n + 6 tiles: 8, 10, 12, 14, 16 for n = 1 to 5. Term-to-term rule (add 2) reaches n = 100 after 99 additions; explicit formula gives 206 tiles directly; 2n + 6 = 100 gives n = 47. Python loop and formula agree. Lesson family: term-to-term rule versus explicit formula.',
    requiredMentions: ['AC9M3N07', 'AC9M4N09', 'AC9M6A01', 'AC9M6A03', 'term-to-term rule', 'explicit formula', '2n + 6', '206 tiles', 'particular difficulties or those that are intellectually advanced', '47 beds'],
    sources: [
      { claim: 'ACARA: Australian Curriculum v9 Mathematics F-6 curriculum content (AC9M3N07, AC9M4N09, AC9M6A01, AC9M6A03).', url: 'https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/mathematics/mathematics-curriculum-content-f-6-v9.docx' },
      { claim: 'ACARA: Australian Curriculum v9 Mathematics 7-10 curriculum content (Year 7 algorithms to sort and classify shapes).', url: 'https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/mathematics/mathematics-curriculum-content-7-10-v9.docx' },
      { claim: 'Australian Tutoring Association: when to start tutoring.', url: 'https://ata.edu.au/parent-info/when-to-start-tutoring/' }
    ],
    rejectedClaims: [
      'Research that coding improves maths results: no primary study read, so the page says only that coding and maths share named curriculum skills.',
      'Typical time to close a maths gap: "one or two terms" is our own teaching experience, not a measured statistic, and is worded as such.',
      'Digital Technologies content codes: left unquoted here because other Australian pages already use them.',
      'Claims that every child should start with coding: refused; the page recommends maths first when number gaps block progress.',
      'The garden-bed pattern: our own example, not a curriculum elaboration.'
    ]
  }
};
