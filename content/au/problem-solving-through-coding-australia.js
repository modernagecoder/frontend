'use strict';
// Problem solving through coding, Australia (ag- think door; AU cluster Phase 2, row 34).
// Sources, read raw on 7 October 2026:
//  - ACARA, Australian Curriculum v9, Digital Technologies F-6 and 7-10 (.docx): Years 1-2 band description
//    ("apply computational thinking by describing algorithms that include sequences of instructions and decisions");
//    Years 7-8 band description ("practising problem decomposition, using approaches such as divide and conquer").
//  - OEIS A006577, "number of halving and tripling steps to reach 1 in the 3x+1 problem" (values read raw:
//    0, 1, 7, 2, 5, 8, 16, 3, 19, 6, 14, 9, ... and a(27) = 111).
//  - Lagarias, J. C. (1985), "The 3x + 1 Problem and Its Generalizations", The American Mathematical Monthly 92(1),
//    3 (Crossref metadata, DOI 10.2307/2322189).
// Our computation (Python): 27 takes 111 steps and peaks at 9,232; up to 10,000, 6171 takes the most steps (261)
// and 9663 climbs highest (27,114,424) before falling to 1.
// Lesson family: Collatz 3x+1 exploration (evidence from computation versus proof).

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'guide', tag: 'PROBLEM SOLVING', blurb: 'Problem solving through coding for Australian students, taught with an unsolved maths puzzle: what a program can show, what it cannot prove, and how to break a problem down.' },
  slug: 'problem-solving-through-coding-australia',
  code: 'psau',
  accent: '#984438',
  accentRationale: 'Problem solving, Australia: a muted red-gum brick chosen by hand, at least 11 RGB units from every accent in use',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'Problem solving through coding, Australia',
  title: 'Problem Solving Through Coding | Australian Students',
  description: 'How coding builds problem solving for Australian students: decomposition from the curriculum, an unsolved puzzle to explore in code, and what a program cannot prove.',
  ogDescription: 'Start with 27, halve the evens, triple and add one to the odds: it takes 111 steps and climbs to 9,232. How a famous unsolved puzzle teaches Australian students to solve problems in code.',
  twitterDescription: 'Problem solving through coding for Australian students, taught with the Collatz puzzle and the curriculum\'s own words.',
  pageName: 'Problem Solving Through Coding',
  webPageDescription: 'A guide for Australian families on how coding develops problem solving, using decomposition, exploration and the difference between evidence and proof.',
  courseDescription: 'Live online courses for Australian students in which problems are defined, broken down, explored in code and explained, from logic for primary children to algorithms for teens and adults.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'Problem solving through coding',
  navLinks: [
    { href: '#curriculum', label: 'The curriculum' },
    { href: '#puzzle', label: 'The puzzle' },
    { href: '#explore', label: 'Exploring in code' },
    { href: '#proof', label: 'Evidence and proof' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Ages 8 and up &middot; Think it through, then code it',
  h1: 'Problem solving through coding',
  lede: 'Parents are often told that coding teaches problem solving, and it can, but only when children are given real problems rather than step-by-step instructions to follow. A real problem has an unclear path, needs breaking into parts, and rewards a child who tests an idea, notices a pattern and asks why. This page shows what that looks like in practice, using the Australian Curriculum\'s own description of problem decomposition and one of the most famous unsolved puzzles in mathematics, which a ten-year-old can explore with a short loop and which no mathematician has yet managed to prove.',
  secondaryCta: { href: '#puzzle', label: 'The puzzle' },
  wa: 'Hello Modern Age Coders, I would like my child to build problem-solving skills through coding. Could we book a free lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; real problems, not recipes',
  spec: [
    ['For', 'Ages 8 and up'],
    ['Focus', 'Defining, decomposing and testing'],
    ['Example', 'The Collatz puzzle'],
    ['Languages', 'Scratch, then Python'],
    ['Curriculum', 'Digital Technologies, F to 10'],
    ['Format', 'Live online video'],
    ['Group', 'Five to ten, or one to one'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Problem solving through coding means using programs to explore, test and explain a problem that has no ready-made recipe. Students define the problem, break it into parts, try ideas in code and check the results. The Collatz puzzle shows how: starting from 27, the rule takes 111 steps and climbs to 9,232 before reaching 1. Code gives strong evidence about such patterns, but it cannot prove them.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses built around real problems',
    lede: 'By age and readiness. The free first lesson decides which suits.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'PSAU / 01', title: 'Puzzles and logic for children', note: 'Ages 7 to 12. Step-by-step thinking before, during and after any code.' },
      { course: 'maths-through-coding', code: 'PSAU / 02', title: 'Maths explored in Python', note: 'Ages 10 to 15. Patterns, conjectures and experiments, written as programs.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'PSAU / 03', title: 'Algorithms for teens', note: 'Ages 13 to 18. Breaking hard problems into structures and steps.' }
    ]
  },

  sections: [
    {
      id: 'curriculum', tint: 'tint', eyebrow: 'The curriculum',
      h2: 'Problem solving, in the Australian Curriculum\'s words',
      lede: 'The Australian Curriculum v9 describes the problem-solving side of Digital Technologies as computational thinking, and it grows across the years from simple sequences to breaking real problems apart.',
      body: [
        { kind: 'table', caption: 'Computational thinking in the band descriptions, Australian Curriculum v9 Digital Technologies', head: ['Years', 'What students should have had the opportunity to do'], rows: [
          ['1 and 2', '"apply computational thinking by describing algorithms that include sequences of instructions and decisions"'],
          ['7 and 8', '"apply computational thinking by defining and decomposing real-world problems, creating user experiences, designing and modifying algorithms, and implementing them in a general-purpose programming language"'],
          ['7 and 8', '"practising problem decomposition, using approaches such as divide and conquer to more clearly understand a problem by describing its component parts"']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Decomposition, in plain words',
          left: [
            'Problem decomposition means breaking a big problem into smaller ones that can each be solved on its own. Divide and conquer is one way to do it: split the problem, solve the halves, combine the answers.',
            'It is how a game is built, how a school project is planned and how a hard maths question is tackled. Code makes the idea concrete, because each part becomes a function that either works or does not.'
          ],
          rightH3: 'Where children start',
          right: [
            'In the early years the curriculum asks for algorithms with sequences and decisions, which in Scratch means a stack of blocks with an <em>if</em> inside.',
            'By the middle years, children are defining the problem themselves, which is the hardest and most valuable step of all.'
          ] },
        { kind: 'source', html: 'Sources, read 7 October 2026: ACARA, Australian Curriculum v9, Digital Technologies content <a class="ag-inline-link" href="https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-f-6-v9.docx" rel="noopener" target="_blank">Foundation to Year 6</a> and <a class="ag-inline-link" href="https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx" rel="noopener" target="_blank">Years 7 to 10</a> (band descriptions).' }
      ]
    },
    {
      id: 'puzzle', tint: 'deep', eyebrow: 'The puzzle',
      h2: 'A rule a child can follow and no one can prove',
      lede: 'Pick any whole number. If it is even, halve it. If it is odd, multiply by three and add one. Repeat. The Collatz conjecture says you will always reach 1, whatever number you start with. No one has yet proved it.',
      body: [
        { kind: 'table', caption: 'Steps to reach 1, starting from 1 to 12 (our program, matching OEIS A006577)', head: ['Start', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'], rows: [
          ['Steps', '0', '1', '7', '2', '5', '8', '16', '3', '19', '6', '14', '9']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The surprise at 27',
          left: [
            'Small numbers settle quickly. Then a child tries 27 and the sequence wanders for a long time, climbing as high as 9,232 before finally dropping to 1 after 111 steps.',
            'Nothing about 27 looks special. That unpredictability is what makes the puzzle such a good problem-solving exercise: there is no shortcut, only exploration.'
          ],
          rightH3: 'Where the puzzle is recorded',
          right: [
            'The On-Line Encyclopedia of Integer Sequences lists the step counts as sequence A006577, which our program matches.',
            'The mathematician Jeffrey Lagarias surveyed the problem in a 1985 article, "The 3x + 1 Problem and Its Generalizations", in The American Mathematical Monthly, and it remains open.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://oeis.org/A006577" rel="noopener" target="_blank">OEIS A006577</a>, read 7 October 2026; Lagarias, J. C. (1985), The American Mathematical Monthly 92(1), <a class="ag-inline-link" href="https://doi.org/10.2307/2322189" rel="noopener" target="_blank">doi.org/10.2307/2322189</a> (details confirmed via Crossref).' }
      ]
    },
    {
      id: 'explore', tint: 'tint', eyebrow: 'Exploring in code',
      h2: 'From one number to ten thousand',
      lede: 'Following the rule by hand for 27 takes a patient afternoon. A program does it instantly, which lets a student ask bigger questions, and that is where problem solving really begins.',
      body: [
        { kind: 'table', caption: 'What our program found for starting numbers from 1 to 10,000 (Python)', head: ['Question', 'Answer'], rows: [
          ['How many steps does 27 take?', '111 steps, with a highest value of 9,232'],
          ['Which start takes the most steps?', '6171, with 261 steps'],
          ['Which start climbs highest?', '9663, which reaches 27,114,424 before falling to 1'],
          ['Did every start reach 1?', 'Yes, every one from 1 to 10,000']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Decompose', p: 'Split the job: one function applies the rule once, another counts steps, a third tracks the highest value, a loop tries every start.' },
          { h3: 'Test each part', p: 'Check the step counter against the known values for 1 to 12 before trusting it on ten thousand numbers.' },
          { h3: 'Ask a new question', p: 'Which starting numbers take exactly 100 steps? Do even starts finish faster? Each answer suggests the next question.' }
        ] },
        { kind: 'p', mt: true, html: 'Younger children do the same exploration in Scratch with a counter variable and a <em>repeat until</em> block, testing small numbers. Older students write it in Python, then chart the results, and some go on to time their program and make it faster by remembering answers they have already worked out.' }
      ]
    },
    {
      id: 'proof', tint: 'deep', eyebrow: 'Evidence and proof',
      h2: 'What a program can show, and what it cannot',
      lede: 'The most important problem-solving lesson in this puzzle is about the limits of checking.',
      body: [
        { kind: 'two',
          leftH3: 'Ten thousand is not all',
          left: [
            'Our program checked every start from 1 to 10,000, and every one reached 1. That is strong evidence. It is not a proof, because there are infinitely many whole numbers, and one counterexample anywhere would break the conjecture.',
            'Students who understand this difference think more clearly about every claim, including claims made by computers.'
          ],
          rightH3: 'An honest note on transfer',
          right: [
            'Coding builds problem solving most reliably for problems like the ones practised: defining, breaking down, testing and explaining. We do not claim it automatically makes children better at everything.',
            'What it does give is repeated practice at a process, with instant feedback, which is a sound way to learn any skill.'
          ] },
        { kind: 'capsule', q: 'A good question to ask any program', p: 'What did it actually check, and what is it only suggesting? A student who asks that habitually has learned something more valuable than any single algorithm.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Make a prediction', p: 'Before running the program on 1 to 10,000, students guess which start will take longest. Almost nobody guesses a number in the six thousands, which makes the answer memorable.' },
          { h3: 'Look for patterns', p: 'Students chart steps against starting number and notice that the chart is jagged, with no smooth trend. Describing what they see, in words, is part of the exercise.' },
          { h3: 'State the limits', p: 'Every write-up ends with a sentence on what was not checked. It is the habit that separates a careful investigator from someone who simply ran some code.' }
        ] }
      ]
    },
    {
      id: 'process', tint: '', eyebrow: 'The process',
      h2: 'Four steps we use on every problem',
      lede: 'Whatever the age or the language, our lessons follow the same problem-solving loop.',
      body: [
        { kind: 'table', caption: 'Our problem-solving loop', head: ['Step', 'The question the student answers'], rows: [
          ['1. Define', 'What exactly is being asked, and what would a correct answer look like?'],
          ['2. Decompose', 'What smaller problems is this made of, and in what order?'],
          ['3. Test', 'How will I know each part works, before I combine them?'],
          ['4. Explain', 'Can I describe my solution, and its limits, to someone else?']
        ] },
        { kind: 'p', mt: true, html: 'The same loop powers projects in our <a class="ag-inline-link" href="/game-development-for-kids-australia">game development path for kids</a> and the senior work on our <a class="ag-inline-link" href="/hsc-software-engineering-help">HSC Software Engineering page</a>. For checking answers from AI tools with the same care, see <a class="ag-inline-link" href="/learn-to-think-not-just-use-ai-tools-australia">learning to think, not just use AI tools</a>.' },
        { kind: 'p', mt: true, html: 'Parents sometimes ask how to tell whether the loop is working. Listen to how your child talks about a problem. Early on, they describe what they typed. Later, they describe what the problem needed, which parts they built first, how they knew each part worked, and what they would try next. That shift, from narrating keystrokes to explaining decisions, is the clearest sign that problem solving is growing, and our teachers often hear it after a term or so of regular lessons.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'How problem solving grows with age',
    lede: 'The same skills at four levels of independence.',
    table: { caption: 'Four stages of problem solving through coding', head: ['Stage', 'What the student does'], rows: [
      ['1. Follow', 'Follows a sequence with decisions and repeats, and predicts what it will do'],
      ['2. Fix', 'Finds and fixes the mistake in a short program that almost works'],
      ['3. Design', 'Breaks a new problem into parts and builds each one'],
      ['4. Investigate', 'Explores an open question, gathers evidence and explains its limits']
    ] },
    left: { h3: 'Primary years', ps: [
      'Stages one and two, mostly in Scratch, with puzzles that have satisfying answers.',
      'Children learn that mistakes are information, not failure.'
    ] },
    right: { h3: 'Secondary years and adults', ps: [
      'Stages three and four, in Python and beyond, including open questions like the Collatz puzzle.',
      'Students learn to say not just what they found, but how sure they are.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses built on real problems',
    lede: 'Grouped by age. The free first lesson places each learner.',
    bands: [
      { num: 'I', h3: 'Primary', sub: 'Ages 7 to 12', courses: [
        { code: 'PSAU / PRI / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Logic puzzles in code', blurb: 'Sequences, decisions and repeats.' },
        { code: 'PSAU / PRI / 02', slug: 'scratch-programming-complete-course', title: 'Scratch problem projects', blurb: 'Games that need planning.' },
        { code: 'PSAU / PRI / 03', slug: 'mental-maths-mastery-kids', title: 'Number sense', blurb: 'The maths behind good guesses.' }
      ] },
      { num: 'II', h3: 'Secondary', sub: 'Ages 10 to 18', courses: [
        { code: 'PSAU / SEC / 01', slug: 'maths-through-coding', title: 'Maths experiments in Python', blurb: 'Conjectures tested with code.' },
        { code: 'PSAU / SEC / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Structures and algorithms', blurb: 'Decomposition for harder problems.' },
        { code: 'PSAU / SEC / 03', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Timed problems, careful solutions.' }
      ] },
      { num: 'III', h3: 'Adults and keen students', sub: '15 and over', courses: [
        { code: 'PSAU / ADV / 01', slug: 'data-structures-algorithms-masterclass-college', title: 'Algorithms in depth', blurb: 'For university and interviews.' },
        { code: 'PSAU / ADV / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition mathematics', blurb: 'Problem solving without a calculator.' },
        { code: 'PSAU / ADV / 03', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python for problem solvers', blurb: 'For adults learning to code.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Lessons that start with a question, not a recipe',
    lede: 'Teachers bring a problem; students do the thinking. The teacher\'s job is to ask the next good question.',
    slots: [
      { time: 'After school', l: 'Weekday afternoons in your state.' },
      { time: 'Evenings', l: 'For teens and adults.' },
      { time: 'Weekends', l: 'Saturday and Sunday options.' }
    ],
    cells: [
      { h3: 'Define first', p: 'Students restate the problem before writing any code.' },
      { h3: 'Small parts', p: 'Every solution is built and tested in pieces.' },
      { h3: 'Mistakes welcome', p: 'A wrong guess is the start of the next idea.' },
      { h3: 'Explain it', p: 'Students describe their solution and its limits.' },
      { h3: 'Small groups', p: 'Five to ten learners, or one to one.' },
      { h3: 'Same teacher', p: 'One teacher who knows how each student thinks.' }
    ]
  },

  projectsH2: 'Problems our students have solved',
  projectsLede: 'Projects where the path was not given in advance. There are more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Google reviews written by our families, reproduced exactly.',

  fees: {
    h2: 'Fees',
    lede: 'Outside India the fee is monthly, in US dollars, and the same wherever you live. There is no enrolment charge and no requirement to stay for a term, so you can end after any month.',
    free: ['A first lesson that is free', 'An honest view of where to begin', 'No card needed'],
    group: ['Five to ten learners', 'A consistent teacher', 'Similar age and level', 'Monthly, cancel any time'],
    one: ['One teacher, one learner', 'A time that suits you', 'Pace set by the learner']
  },

  faq: {
    eyebrow: 'Questions from parents',
    h2: 'Common questions about problem solving through coding',
    items: [
      { q: 'Does coding really teach problem solving?', a: 'It does when children work on real problems, ones they must define, break down, test and explain, rather than following step-by-step instructions. We do not claim it automatically improves every other subject.' },
      { q: 'What is the Collatz conjecture?', a: 'The Collatz conjecture says that if you take any whole number, halve it when it is even and multiply by three and add one when it is odd, and repeat, you will always eventually reach 1. It has never been proved.' },
      { q: 'What is problem decomposition?', a: 'Problem decomposition is breaking a large problem into smaller parts that can each be solved and tested on their own, then combining them. The Australian Curriculum names it for Years 7 and 8.' },
      { q: 'Why use an unsolved maths problem with children?', a: 'Because it is easy to understand, impossible to shortcut and rewards exploration. It also teaches the difference between evidence from a program and a proof.' },
      { q: 'Can a computer prove the Collatz conjecture by checking numbers?', a: 'No. Checking any finite set of numbers, however large, gives evidence but not proof, because the conjecture is about every whole number.' },
      { q: 'What age is this suitable for?', a: 'Children from about 8 can follow the rule and explore small numbers in Scratch. Writing the full exploration in Python suits students from about 10.' },
      { q: 'Does my child need to be good at maths?', a: 'No. Halving, tripling and counting are enough to start. Problem solving through coding often builds maths confidence rather than requiring it.' },
      { q: 'Does this follow the Australian Curriculum?', a: 'It reinforces the computational thinking described in the Digital Technologies curriculum, from sequences and decisions in the early years to decomposition in Years 7 and 8.' },
      { q: 'Are lessons live?', a: 'Yes. Every lesson is live online with a teacher, in small groups of five to ten or one to one, at times set for your state.' },
      { q: 'How much does it cost?', a: 'The first lesson is free. After that, fees are monthly with no joining fee and no term lock-in; see the fees section on this page.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More on thinking skills, maths and coding for Australian students.',
    items: [
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'Our main page for Australian families.' },
      { href: '/understand-the-code-dont-copy-paste-australia', label: 'Understand the code', p: 'Contracts, tests and honest work.' },
      { href: '/learn-to-think-not-just-use-ai-tools-australia', label: 'Learn to think, not just use AI', p: 'Checking AI answers.' },
      { href: '/online-maths-tutoring-australia', label: 'Online maths tutoring in Australia', p: 'Maths taught with the same depth.' },
      { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar', p: 'Coding and maths competitions by month.' },
      { href: '/game-development-for-kids-australia', label: 'Game development for kids', p: 'Problem solving through games.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Tell us a number and a convenient time. The student tackles a small open problem with a teacher, and you watch how they think.',
    readFirst: 'If you prefer to look around first, read <a class="ag-inline-link" href="/how-we-teach">how a lesson runs</a> or browse <a class="ag-inline-link" href="/courses">the courses</a>.',
    note: 'For a quick reply from Australia, use WhatsApp. We are based in India and answer from a +91 number, with no Australian office.',
    formNote: 'Free first lesson, no card, no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Thinking skills', links: [
        { href: '/understand-the-code-dont-copy-paste-australia', label: 'Understand the code' },
        { href: '/learn-to-think-not-just-use-ai-tools-australia', label: 'Think, not just use AI' },
        { href: '/learn-to-train-ai-not-just-prompt-it-australia', label: 'Train AI' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] },
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/online-maths-tutoring-australia', label: 'Maths tutoring' },
        { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' },
        { href: '/naplan-numeracy-practice-online', label: 'NAPLAN numeracy' }
      ] }
    ],
    bottomRight: 'Evidence from a program, proof from an argument'
  },

  personalityCss: `
.ag-root.ag-psau .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-psau .ag-capsule { border-left-width: 3px; border-radius: 14px; }
.ag-root.ag-psau .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-psau .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-psau .ag-band-head h3 { letter-spacing: -0.005em; }
.ag-root.ag-psau .ag-slots { gap: 1.4rem; }
`,

  dossier: {
    curriculumAuthority: 'Australia, problem solving. ACARA v9 Digital Technologies band descriptions: Years 1-2 "apply computational thinking by describing algorithms that include sequences of instructions and decisions"; Years 7-8 "apply computational thinking by defining and decomposing real-world problems, creating user experiences, designing and modifying algorithms, and implementing them in a general-purpose programming language" and "practising problem decomposition, using approaches such as divide and conquer to more clearly understand a problem by describing its component parts". OEIS A006577 step counts; Lagarias (1985), The 3x + 1 Problem and Its Generalizations, The American Mathematical Monthly 92(1).',
    localProject: 'Collatz exploration in Python: step counts for 1 to 12 are 0, 1, 7, 2, 5, 8, 16, 3, 19, 6, 14, 9 (matching OEIS A006577); 27 takes 111 steps and peaks at 9,232; among starts 1 to 10,000, 6171 takes the most steps (261) and 9663 climbs highest (27,114,424); every start up to 10,000 reaches 1, which is evidence, not proof. Lesson family: Collatz 3x+1 exploration.',
    requiredMentions: ['Collatz', '9,232', '111 steps', 'A006577', 'Lagarias', '27,114,424', '261 steps', 'divide and conquer', 'problem decomposition', 'describing algorithms that include sequences of instructions and decisions'],
    sources: [
      { claim: 'ACARA, Australian Curriculum v9, Digital Technologies F-6: Years 1-2 band description.', url: 'https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-f-6-v9.docx' },
      { claim: 'ACARA, Australian Curriculum v9, Digital Technologies 7-10: Years 7-8 band description on decomposition.', url: 'https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx' },
      { claim: 'OEIS A006577: step counts in the 3x+1 problem, including a(27) = 111.', url: 'https://oeis.org/A006577' },
      { claim: 'Lagarias (1985), The 3x + 1 Problem and Its Generalizations, The American Mathematical Monthly 92(1) (Crossref metadata).', url: 'https://doi.org/10.2307/2322189' }
    ],
    rejectedClaims: [
      'How far the Collatz conjecture has been verified by computer: no primary source read raw, so the page gives no verification limit.',
      'Claims that coding improves general problem solving or school results: refused; the page states the transfer limit plainly.',
      'Any NAPLAN or achievement statistics linked to coding: no primary source.',
      'Contents of the Lagarias article beyond its title and publication details: not read raw.',
      'A claim that 27 is the smallest number with over 100 steps: not checked against a source, so not made.'
    ]
  }
};
