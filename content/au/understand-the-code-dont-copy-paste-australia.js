'use strict';
// Understand the code, do not copy-paste, Australia (ag- think door; AU cluster Phase 2, row 32).
// Sources, read raw on 7 October 2026:
//  - NESA (NSW Education Standards Authority) home page: "All My Own Work gives students the opportunity to
//    understand, value and use ethical practices when locating and using information during their studies."
//  - ACARA, Australian Curriculum v9, Digital Technologies 7-10 (.docx): Years 9-10 band description ("using test
//    cases to confirm the correctness of their solutions"); AC9TDI10P09 elaboration on reading and interpreting
//    programs split across files, functions or classes.
//  - Python Language Reference 3.14, "The assert statement": assert is equivalent to "if __debug__: if not
//    expression: raise AssertionError"; "The current code generator emits no code for an assert statement when
//    optimization is requested at compile time."
// Our experiment: a pasted median function checked against two postconditions on 10,000 random lists (seed 2026).
// Lesson family: postconditions as contracts (design by contract); a loose contract passes a wrong program.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'guide', tag: 'UNDERSTAND, DO NOT PASTE', blurb: 'Why Australian students should understand every line they submit, with a pasted function that passed a loose test and failed an exact one 4,219 times.' },
  slug: 'understand-the-code-dont-copy-paste-australia',
  code: 'ucau',
  accent: '#70481C',
  accentRationale: 'Understand the code, Australia: a muted ironbark brown chosen by hand, at least 11 RGB units from every accent in use',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'Understand the code, do not copy-paste, Australia',
  title: 'Understand the Code, Don\'t Copy-Paste | Australian Students',
  description: 'For Australian students: why pasted code fails quietly, how a written contract catches it, and how understanding each line keeps school work honest and your own.',
  ogDescription: 'A pasted median function passed a loose check on 10,000 lists and failed an exact one 4,219 times. What that teaches Australian students about owning their code.',
  twitterDescription: 'Understand the code, do not copy-paste: contracts, tests and honest work for Australian students.',
  pageName: 'Understand the Code, Don\'t Copy-Paste',
  webPageDescription: 'A guide for Australian secondary students on understanding code rather than pasting it, using postconditions, assertions and the curriculum\'s expectations on testing.',
  courseDescription: 'Live online programming courses for Australian students in which every line is explained, predicted and tested by the student who writes it.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'Understand the code',
  navLinks: [
    { href: '#why', label: 'Why it matters' },
    { href: '#experiment', label: 'The experiment' },
    { href: '#contracts', label: 'Writing contracts' },
    { href: '#integrity', label: 'Honest work' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Years 7 to 12 and adults &middot; Own every line',
  h1: 'Understand the code, don\'t copy-paste',
  lede: 'Copying code has never been easier. A forum answer, a tutorial or an AI assistant will hand a student a function that runs first time, and it is tempting to drop it in and move on. The trouble is that code which runs is not the same as code which is right, and a student who does not understand a function cannot tell the difference. This page shows the problem with a real experiment: one short, pasted function, ten thousand test inputs, and two ways of checking it. One check passed it every time. The other caught it failing thousands of times. The difference was whether the person checking understood what the function was supposed to do.',
  secondaryCta: { href: '#experiment', label: 'The experiment' },
  wa: 'Hello Modern Age Coders, my child copies code without really understanding it. Could we book a free lesson to work on that?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; predict it, write it, test it',
  spec: [
    ['For', 'Secondary students and adults'],
    ['Focus', 'Reading, predicting and testing code'],
    ['Tools', 'Assertions and written contracts'],
    ['Languages', 'Python first, then Java or JavaScript'],
    ['Integrity', 'We never write assessed work'],
    ['Format', 'Live online video'],
    ['Group', 'Five to ten, or one to one'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Understanding code means being able to say what a function should return for any input, then checking that it does. A precise statement of that promise is called a postcondition. In our test, a pasted median function passed a loose postcondition on all 10,000 random lists, yet gave the wrong answer 4,219 times, which an exact postcondition caught every time. Pasting skips the understanding that writes the exact check.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses built on reading and testing code',
    lede: 'Each one asks students to predict, explain and test what they write. The free first lesson chooses between them.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'UCAU / 01', title: 'Python, line by line', note: 'Ages 13 to 18. Every program predicted on paper before it runs.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'UCAU / 02', title: 'Logic and algorithms for teens', note: 'Ages 13 to 18. Data structures you can explain, not just use.' },
      { course: 'git-github-version-control-course-for-teens', code: 'UCAU / 03', title: 'Version control, honestly', note: 'Ages 13 to 18. A history of your own work that shows how it grew.' }
    ]
  },

  sections: [
    {
      id: 'why', tint: 'tint', eyebrow: 'Why it matters',
      h2: 'Running is not the same as right',
      lede: 'Pasted code usually fails in one of two ways. Either it crashes, which is easy to notice, or it quietly returns a wrong answer for some inputs, which is not. The second kind is the dangerous one, and only understanding catches it.',
      body: [
        { kind: 'two',
          leftH3: 'What the curriculum expects',
          left: [
            'The Australian Curriculum v9 says that by the end of Year 10 students verify their solutions "by validating their algorithms, represented as flowcharts and pseudocode, and using test cases to confirm the correctness of their solutions".',
            'A test case confirms correctness only if the student knows what the correct answer is. That knowledge is exactly what pasting skips.'
          ],
          rightH3: 'Reading other people\'s code',
          right: [
            'The same curriculum includes, as an example for Years 9 and 10, "reading and interpreting programs split across files, functions or classes, and modifying them to add functionality".',
            'Reading code is a skill to practise, not a sign of laziness. The difference from pasting is that reading ends in understanding.'
          ] },
        { kind: 'source', html: 'Source, read 7 October 2026: ACARA, <a class="ag-inline-link" href="https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx" rel="noopener" target="_blank">Australian Curriculum v9, Digital Technologies content, Years 7 to 10</a> (Year 10 band description, and an elaboration under AC9TDI10P09).' }
      ]
    },
    {
      id: 'experiment', tint: 'deep', eyebrow: 'The experiment',
      h2: 'One pasted function, ten thousand lists',
      lede: 'We took a short median function of the kind that circulates online: sort the list and return the middle item. It runs without error on any list of numbers. Then we checked it two ways on 10,000 random lists of 1 to 12 whole numbers between 0 and 20.',
      body: [
        { kind: 'table', caption: 'The pasted function against two postconditions (our experiment, Python, fixed random seed 2026)', head: ['What we measured', 'Result'], rows: [
          ['Random lists tested', '10,000'],
          ['Lists with an even number of items', '4,962'],
          ['Wrong answers returned by the pasted function', '4,219'],
          ['Failures caught by the loose postcondition: no more than half the items below the answer, no more than half above', '0'],
          ['Failures caught by the exact postcondition: the middle item for odd lengths, the mean of the two middle items for even lengths', '4,219']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the function is wrong',
          left: [
            'For a list with an odd number of items, the middle item is the median, and the pasted code is right. For an even number, the median is halfway between the two middle items, and the code returns only the upper one.',
            'It was right for every odd-length list and for even-length lists whose two middle items happened to be equal, which is why it looks fine in a quick test.'
          ],
          rightH3: 'Why the loose check missed it',
          right: [
            'The loose check is true of the real median, so it sounds sensible. But it is also true of any value between the two middle items, so it cannot tell a right answer from a nearly right one.',
            'Only someone who knows the definition of a median writes the exact check. That knowledge is the understanding that pasting skips.'
          ] },
        { kind: 'capsule', q: 'The lesson in one line', p: 'A test can only be as precise as the tester\'s understanding. Weak understanding writes weak tests, and weak tests pass wrong code.' }
      ]
    },
    {
      id: 'contracts', tint: 'tint', eyebrow: 'Writing contracts',
      h2: 'Postconditions: promises a function must keep',
      lede: 'A postcondition is a statement that must be true when a function finishes. Writing it down forces the writer to understand what the function promises, and checking it automatically catches the moment the promise is broken. The approach is often called design by contract.',
      body: [
        { kind: 'table', caption: 'Postconditions for three everyday functions', head: ['Function', 'Its postcondition, in words'], rows: [
          ['Sort a list', 'The result has the same items as the input, and each item is no larger than the next'],
          ['Find the median', 'For an odd length, the middle item; for an even length, the mean of the two middle items'],
          ['Convert minutes to hours and minutes', 'Hours times 60, plus minutes, equals the input, and minutes is between 0 and 59']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Checking with assert',
          left: [
            'In Python, the simplest way to check a postcondition is an <code>assert</code> statement. The Python Language Reference describes it as "a convenient way to insert debugging assertions into a program", equivalent to raising an <code>AssertionError</code> when the condition is false.',
            'A student who writes <code>assert</code> lines for their own functions is writing their understanding down, where the computer can check it.'
          ],
          rightH3: 'A catch worth knowing',
          right: [
            'The same reference explains that assertions run only while the built-in <code>__debug__</code> is true, and that "the current code generator emits no code for an assert statement when optimization is requested at compile time".',
            'So asserts are for checking during development, not for guarding a finished program. Real input validation needs ordinary <code>if</code> statements.'
          ] },
        { kind: 'source', html: 'Source, read 7 October 2026: <a class="ag-inline-link" href="https://docs.python.org/3/reference/simple_stmts.html" rel="noopener" target="_blank">The Python Language Reference, simple statements, "The assert statement"</a>.' }
      ]
    },
    {
      id: 'integrity', tint: 'deep', eyebrow: 'Honest work',
      h2: 'Understanding is also what keeps school work yours',
      lede: 'Every Australian state sets its own rules on what help is allowed in assessed work, and the rules are tightening as AI tools spread. A student who understands every line of their code is safe under any of them.',
      body: [
        { kind: 'two',
          leftH3: 'An example from NSW',
          left: [
            'In New South Wales, NESA describes its All My Own Work program as one that "gives students the opportunity to understand, value and use ethical practices when locating and using information during their studies".',
            'Other states have their own equivalents and their own rules on AI in assessment. Check the rules that apply to your school and course.'
          ],
          rightH3: 'What we do and do not do',
          right: [
            'We teach students to read, predict, write and test code until they understand it. We never write a student\'s assessed work, major project or take-home task.',
            'NSW students working on a senior project can read our <a class="ag-inline-link" href="/hsc-software-engineering-help">HSC Software Engineering page</a> for how we help with technique while the work stays theirs.'
          ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Predict before running', p: 'Say what the program will print before you run it. A wrong prediction is the start of real understanding.' },
          { h3: 'Rebuild without looking', p: 'If you learned something from an example, close it and write it again from memory. What you cannot rebuild, you have not yet learned.' },
          { h3: 'Write the contract', p: 'For every function, write its postcondition first. If you cannot state it, you are not ready to write the function.' }
        ] },
        { kind: 'source', html: 'Source, read 7 October 2026: <a class="ag-inline-link" href="https://educationstandards.nsw.edu.au/" rel="noopener" target="_blank">NSW Education Standards Authority</a>, key services, All My Own Work.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From pasting to owning',
    lede: 'The steps students take as they stop copying and start understanding.',
    table: { caption: 'Four stages of owning your code', head: ['Stage', 'What the student does'], rows: [
      ['1. Read', 'Read a short program and say, in words, what it does'],
      ['2. Predict', 'Predict exact output for a given input before running it'],
      ['3. Contract', 'Write postconditions and assertions for their own functions'],
      ['4. Defend', 'Explain and justify every line of a project to someone else']
    ] },
    left: { h3: 'Using examples well', ps: [
      'Examples are how everyone learns. The question is what happens after you read one.',
      'Read it, close it, rebuild it, test it. That turns someone else\'s code into your own understanding.'
    ] },
    right: { h3: 'Using AI well', ps: [
      'An AI assistant is a fast source of examples, and the same rules apply: never keep a line you cannot explain.',
      'Our page on <a class="ag-inline-link" href="/learn-to-think-not-just-use-ai-tools-australia">learning to think, not just use AI tools</a> covers how many AI answers to check.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses where students own their code',
    lede: 'Grouped by stage. The free first lesson finds the right starting point.',
    bands: [
      { num: 'I', h3: 'Foundations', sub: 'Ages 11 to 15', courses: [
        { code: 'UCAU / FND / 01', slug: 'python-ai-kids-masterclass', title: 'Python with explanations', blurb: 'First programs, every line discussed.' },
        { code: 'UCAU / FND / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript you can read', blurb: 'Interactive pages and browser games.' },
        { code: 'UCAU / FND / 03', slug: 'maths-through-coding', title: 'Maths you can test', blurb: 'Python programs that check maths.' }
      ] },
      { num: 'II', h3: 'Secondary', sub: 'Ages 13 to 18', courses: [
        { code: 'UCAU / SEC / 01', slug: 'python-complete-masterclass-teens', title: 'Complete Python for teens', blurb: 'Beginner to advanced, tested as you go.' },
        { code: 'UCAU / SEC / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java, classes and objects', blurb: 'Object-oriented code you can explain.' },
        { code: 'UCAU / SEC / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms with proofs of behaviour', blurb: 'Data structures and their contracts.' }
      ] },
      { num: 'III', h3: 'Adults', sub: '18 and over', courses: [
        { code: 'UCAU / ADL / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python from the ground up', blurb: 'For adults who want to understand, not copy.' },
        { code: 'UCAU / ADL / 02', slug: 'data-structures-algorithms-masterclass-college', title: 'Data structures and algorithms', blurb: 'Interview-ready because understood.' },
        { code: 'UCAU / ADL / 03', slug: 'git-github-version-control-course-for-college-students', title: 'Team-ready Git', blurb: 'Your work, its history, your name on it.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Lessons where nothing is pasted',
    lede: 'Students type, predict and test everything they keep. Teachers ask "what will this print?" far more often than they explain.',
    slots: [
      { time: 'After school', l: 'Weekday afternoons in your state.' },
      { time: 'Evenings', l: 'For senior students and adults.' },
      { time: 'Weekends', l: 'Saturday and Sunday options.' }
    ],
    cells: [
      { h3: 'Prediction first', p: 'Every new idea starts with a guess about what the code will do.' },
      { h3: 'Contracts written', p: 'Students state what each function promises before writing it.' },
      { h3: 'Tests by the student', p: 'Students write their own checks, including the awkward cases.' },
      { h3: 'Explain it back', p: 'A program is finished when the student can explain every line.' },
      { h3: 'Small groups', p: 'Five to ten students, or one to one.' },
      { h3: 'Never your assessment', p: 'We teach technique; assessed work stays the student\'s own.' }
    ]
  },

  projectsH2: 'Projects our students can explain line by line',
  projectsLede: 'Each of these was typed, tested and defended by the student who built it. Find more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Reviews posted on Google by our families, shown without edits.',

  fees: {
    h2: 'Fees',
    lede: 'Families outside India are billed monthly in US dollars at a rate that does not change between countries. No sign-up fee applies and nothing locks you in for a term; any month can be the last.',
    free: ['A full trial lesson, free', 'An honest read of current level', 'No card required'],
    group: ['Five to ten students', 'One steady teacher', 'Matched by level', 'Month by month'],
    one: ['One teacher, one student', 'Around school and exams', 'Your pace']
  },

  faq: {
    eyebrow: 'Questions from students and parents',
    h2: 'Common questions about understanding code',
    items: [
      { q: 'What does understand the code, don\'t copy-paste mean?', a: 'It means being able to explain what every line of a program does and why, and to predict and test its output, rather than inserting code from elsewhere that you cannot explain.' },
      { q: 'What is a postcondition?', a: 'A postcondition is a statement that must be true when a function finishes, such as "the result is sorted and contains the same items as the input". Writing and checking postconditions is the heart of design by contract.' },
      { q: 'What is design by contract?', a: 'Design by contract is a way of writing software in which each function states what it needs before it runs and what it promises when it finishes, and those statements are checked, often with assertions.' },
      { q: 'Is copying code from examples cheating?', a: 'Learning from examples is normal. What matters is whether you understand and can rebuild what you keep, and whether your school\'s rules allow it in assessed work.' },
      { q: 'Why did the pasted median function pass the loose check?', a: 'The loose check only required no more than half the items below and above the answer. Any value between the two middle items meets that, so it could not tell the correct median from a nearly correct one.' },
      { q: 'Can I use AI to help with coding assignments?', a: 'That depends on your state and school rules, which differ and are changing. Whatever is allowed, keep only code you understand and can explain.' },
      { q: 'Do you write students\' assessed work or major projects?', a: 'No. We teach reading, writing and testing code until the student understands it. Assessed work, including major projects and take-home tasks, stays the student\'s own.' },
      { q: 'Should asserts be used to check user input?', a: 'No. Python skips assert statements when optimisation is switched on, so they suit checks during development. Use ordinary if statements to validate input in a finished program.' },
      { q: 'What age is this for?', a: 'Mostly secondary students from Year 7 and adults. Younger children learn the same habit through predicting what Scratch programs will do.' },
      { q: 'How much are lessons?', a: 'The first lesson is free. After that, families pay monthly with no joining fee and no term lock-in; see the fees section on this page.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More on thinking with AI, building it and senior school computing.',
    items: [
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'Our main page for Australian families.' },
      { href: '/learn-to-think-not-just-use-ai-tools-australia', label: 'Learn to think, not just use AI', p: 'How many AI answers to check.' },
      { href: '/learn-to-train-ai-not-just-prompt-it-australia', label: 'Learn to train AI', p: 'Building models, not prompting them.' },
      { href: '/problem-solving-through-coding-australia', label: 'Problem solving through coding', p: 'Thinking skills that transfer.' },
      { href: '/hsc-software-engineering-help', label: 'HSC Software Engineering', p: 'For NSW senior students.' },
      { href: '/coding-for-year-7-australia', label: 'Coding for Year 7', p: 'Starting secondary school computing.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Send a number and a good time to call. The student works through a short program with a teacher, predicting and testing it, and you see the difference understanding makes.',
    readFirst: 'Would you like more detail first? Read <a class="ag-inline-link" href="/how-we-teach">how a lesson runs</a> or look over <a class="ag-inline-link" href="/courses">our courses</a>.',
    note: 'From Australia, WhatsApp gets the quickest reply. We are an India-based team, so messages come from a +91 number; there is no Australian office.',
    formNote: 'The trial lesson is free and needs no card.'
  },

  footer: {
    cols: [
      { h4: 'Owning your code', links: [
        { href: '/learn-to-think-not-just-use-ai-tools-australia', label: 'Think, not just use AI' },
        { href: '/problem-solving-through-coding-australia', label: 'Problem solving' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/hsc-software-engineering-help', label: 'HSC Software Engineering' },
        { href: '/coding-for-year-7-australia', label: 'Coding for Year 7' },
        { href: '/online-coding-tutor-australia', label: 'Online coding tutor' }
      ] }
    ],
    bottomRight: 'State the promise, then test it'
  },

  personalityCss: `
.ag-root.ag-ucau .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-ucau .ag-capsule { border-left-width: 3px; border-radius: 2px; }
.ag-root.ag-ucau .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-ucau .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-ucau .ag-band-head h3 { letter-spacing: -0.012em; }
.ag-root.ag-ucau .ag-slots { gap: 1.25rem; }
`,

  dossier: {
    curriculumAuthority: 'Australia, understanding code. ACARA v9 Digital Technologies 7-10: Year 10 band description, students verify solutions "by validating their algorithms, represented as flowcharts and pseudocode, and using test cases to confirm the correctness of their solutions"; elaboration under AC9TDI10P09 "reading and interpreting programs split across files, functions or classes, and modifying them to add functionality". NESA: All My Own Work "gives students the opportunity to understand, value and use ethical practices when locating and using information during their studies". Python Language Reference: assert as "a convenient way to insert debugging assertions into a program"; "The current code generator emits no code for an assert statement when optimization is requested at compile time".',
    localProject: 'A pasted median function (sort and return the middle item) checked on 10,000 random lists of 1 to 12 integers in 0..20 (Python, seed 2026): 4,962 even-length lists; 4,219 wrong answers; a loose postcondition (no more than half below and half above) caught 0 of them; the exact postcondition (middle item for odd lengths, mean of the two middle items for even) caught all 4,219. Lesson family: postconditions as contracts (design by contract).',
    requiredMentions: ['postcondition', 'design by contract', '4,219', 'All My Own Work', 'ethical practices when locating and using information', 'test cases to confirm the correctness', 'reading and interpreting programs split across files', '__debug__', 'emits no code for an assert statement', 'AssertionError'],
    sources: [
      { claim: 'NESA, All My Own Work description.', url: 'https://educationstandards.nsw.edu.au/' },
      { claim: 'ACARA, Australian Curriculum v9, Digital Technologies content 7-10: Year 10 band description and AC9TDI10P09 elaboration.', url: 'https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx' },
      { claim: 'Python Language Reference, The assert statement: equivalence with __debug__ and AssertionError; no code emitted under optimisation.', url: 'https://docs.python.org/3/reference/simple_stmts.html' }
    ],
    rejectedClaims: [
      'VCAA authentication rules: the guessed VCAA pages returned 404, so no Victorian rule is quoted; families are told each state has its own rules.',
      'NESA notice wording on AI in assessment: already covered on the HSC Software Engineering page and not repeated here.',
      'Any statistic on how much student code is copied: no primary source.',
      'Claims that any AI tool produced the median function: refused; it is described as a snippet of the kind that circulates online.',
      'TEQSA guidance for universities: teqsa.gov.au timed out, so it is not cited.'
    ]
  }
};
