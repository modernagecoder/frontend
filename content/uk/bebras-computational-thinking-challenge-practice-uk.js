'use strict';
// UK Bebras Challenge practice (ag- competition spoke, UK cluster Phase 2).
// Organiser facts read on 20 September 2026 at bebras.uk and the Raspberry Pi Foundation blog post
// "Join the UK Bebras Challenge 2026" (8 September 2026): "The Raspberry Pi Foundation runs the UK
// Bebras Challenge"; it is "open to all young people aged 6 to 19"; "Each student gets 45 minutes to
// tackle interactive, age-appropriate tasks online"; "The UK Bebras Challenge is entirely free to
// enter"; "The 2026 UK Bebras Challenge will run from 9th-20th November 2026"; "a teacher must sign up
// as the main school coordinator and can then enrol groups of students or even the entire school";
// "Last year, more than 526,000 students from across the UK took part"; there is "a tailored version for
// secondary students with severe sight impairments"; the Juniors group is ages 10 to 12; after the
// challenge, teachers and students can read the computer science concept behind each task through Ada
// Computer Science; the skills named are abstraction, decomposition and algorithmic thinking.
// Follow-on round, from bebras.uk: the Raspberry Pi Foundation Coding Challenge, open only to schools and
// students who took the previous UK Bebras Challenge, 45 minutes, block-based or text-based, two
// difficulty levels, designed to be accessible to students aged 10 and over.
// Same fortnight as the Primary Maths Challenge, which also runs 9 to 20 November 2026.
// Spine: you can count the answer without doing the work. Our own task, written for this page and
// checked in code on 20 September 2026: five parcels in the order 4 1 5 3 2, a robot that can only swap
// neighbours. Counting out-of-order pairs gives 6, and a breadth-first search over every possible
// sequence of swaps also gives 6. Counting beats shuffling, which is what a Bebras task is usually about.
// No Bebras task is reproduced; the organiser publishes its own past tasks with explanations.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'competition', tag: 'BEBRAS', label: 'UK Bebras Challenge', blurb: 'Forty-five minutes, no programming, and more than half a million UK entrants a year.' },
  slug: 'bebras-computational-thinking-challenge-practice-uk',
  code: 'beb',
  accent: '#1C6D9C',
  accentRationale: 'Bebras: a mid blue from the solver (4.59:1 on every paper tint), distinct inside the competition family of bronze, copper, plum and olive',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'UK Bebras Challenge practice',
  title: 'UK Bebras Challenge Practice | Computational Thinking, 6 to 19',
  description: 'Preparing for the UK Bebras Challenge: 45 minutes, free, ages 6 to 19, 9 to 20 November 2026, and what computational thinking tasks actually ask for.',
  ogDescription: 'More than 526,000 UK students sat the Bebras Challenge last year. It needs no programming at all, which is exactly what makes it worth practising.',
  twitterDescription: 'UK Bebras Challenge preparation: computational thinking, 45 minutes, free, ages 6 to 19.',
  pageName: 'UK Bebras Challenge Practice',
  webPageDescription: 'Preparation guidance for the UK Bebras Computational Thinking Challenge run by the Raspberry Pi Foundation, covering the format, the age groups, the November 2026 dates and the follow-on coding challenge.',
  courseDescription: 'Live online computing and problem-solving classes that build the abstraction, decomposition and algorithmic thinking the Bebras Challenge tests, for ages 6 upwards.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'UK competitions calendar', href: '/uk-coding-maths-and-ai-competitions-calendar' }],
  crumbLabel: 'UK Bebras Challenge',
  navLinks: [
    { href: '#challenge', label: 'The challenge' },
    { href: '#thinking', label: 'What it tests' },
    { href: '#after', label: 'What comes next' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United Kingdom &middot; Ages 6 to 19 &middot; 9 to 20 November 2026',
  h1: 'UK Bebras Challenge practice',
  lede: 'Bebras is the largest computing competition in British schools and the least like one. It takes forty-five minutes, it costs nothing, it is open from age six to nineteen, and it contains no programming whatsoever. More than 526,000 UK students sat it last year, most of them in an ordinary lesson, many without knowing it was a competition at all. That combination confuses parents who expect a coding contest, and it hides what the challenge is really testing: whether a young person can look at a situation and find the rule inside it. That is a teachable skill, and it is worth more than any language.',
  secondaryCta: { href: '#thinking', label: 'See a task worked through' },
  wa: 'Hello Modern Age Coders, my child is doing the Bebras Challenge and I would like a free class.',
  heroNote: 'Organiser facts, dated &middot; No Bebras task reproduced &middot; No promise about any score',
  spec: [
    ['Organiser', 'The Raspberry Pi Foundation'],
    ['For', 'Ages 6 to 19'],
    ['2026 window', '9 to 20 November'],
    ['Length', '45 minutes, online'],
    ['Cost', 'Free to enter'],
    ['Programming needed', 'None at all'],
    ['Took part last year', 'More than 526,000'],
    ['Signed up by', 'A school coordinator']
  ],
  capsuleQ: 'In short',
  capsule: 'The UK Bebras Challenge is run by the Raspberry Pi Foundation, is "entirely free to enter", and is "open to all young people aged 6 to 19". Each student gets 45 minutes of interactive, age-appropriate tasks online, and the 2026 challenge runs from 9 to 20 November 2026. A teacher signs up as the school coordinator and can enrol groups or the whole school; more than 526,000 UK students took part last year, and there is a tailored version for secondary students with severe sight impairments. No programming is involved: the tasks test abstraction, decomposition and algorithmic thinking, and afterwards the computer science concept behind each one can be read on Ada Computer Science. We teach the thinking underneath, live online for ages 6 to 67. The first class is free; a group place is USD 100 a month and one-to-one teaching USD 150.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses that build the thinking Bebras tests',
    lede: 'None of these is a Bebras course. All three grow the habit the tasks reward.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'BEB / 01', title: 'Coding for kids, blocks to AI', note: 'For ages 6 to 10: rules, sequences and what happens when one step changes.' },
      { course: 'python-ai-kids-masterclass', code: 'BEB / 02', title: 'Python and AI for kids', note: 'For ages 10 to 13: the first typed language, where a rule has to be exact or nothing runs.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'BEB / 03', title: 'Algorithms and data structures', note: 'For teenagers: the formal versions of the ideas Bebras tasks dress up as puzzles.' }
    ]
  },

  sections: [
    {
      id: 'challenge', tint: 'tint', eyebrow: 'The challenge',
      h2: 'Half a million students, forty-five minutes, no code',
      lede: 'Facts read at bebras.uk and the Raspberry Pi Foundation\'s own announcement on 20 September 2026.',
      body: [
        { kind: 'table', caption: 'The UK Bebras Challenge as its organiser describes it', head: ['Part', 'What the organiser says', 'What that means in practice'], rows: [
          ['Who runs it', '"The Raspberry Pi Foundation runs the UK Bebras Challenge"', 'Part of an international challenge that began in Lithuania and now runs worldwide'],
          ['Who can enter', '"open to all young people aged 6 to 19"', 'From Year 2 to sixth form, in age-appropriate groups; the Juniors group is ages 10 to 12'],
          ['When', '"The 2026 UK Bebras Challenge will run from 9th-20th November 2026"', 'A fortnight, inside which a school picks its own lesson'],
          ['Format', '"Each student gets 45 minutes to tackle interactive, age-appropriate tasks online"', 'Done on a computer, in class, marked automatically'],
          ['Cost', '"The UK Bebras Challenge is entirely free to enter"', 'No fee to a school or a family'],
          ['How to take part', '"a teacher must sign up as the main school coordinator and can then enrol groups of students or even the entire school"', 'Whole classes usually sit it together'],
          ['Scale', '"Last year, more than 526,000 students from across the UK took part"', 'Larger than any other computing competition in British schools'],
          ['Access', 'A tailored version exists for secondary students with severe sight impairments', 'The tasks are designed to be sat by more pupils, not fewer']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The most useful thing a parent can know is that no preparation is required and none is expected. Schools enter whole classes. A child who has never written a line of code can do well, and a child who has spent two years in Python has no particular advantage, because nothing in the challenge asks them to write any.',
            'That also explains the scale. Half a million students is not half a million volunteers; it is thousands of teachers deciding that forty-five minutes of this is a good computing lesson, which it is.'
          ],
          right: [
            'It shares its fortnight with the Primary Maths Challenge, which also runs from 9 to 20 November 2026. A Year 6 child could reasonably sit both in the same two weeks, and the two ask for almost opposite things: one is arithmetic under time pressure, the other is reading a situation carefully with no arithmetic at all.',
            'After the challenge, the Raspberry Pi Foundation links each task to an explanation of the computer science idea behind it on Ada Computer Science. That archive, not a tutor, is the best preparation there is.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.bebras.uk/" rel="noopener" target="_blank">UK Bebras</a> and the Raspberry Pi Foundation\'s <a class="ag-inline-link" href="https://www.raspberrypi.org/blog/join-the-uk-bebras-challenge-2026/" rel="noopener" target="_blank">Join the UK Bebras Challenge 2026</a>, 8 September 2026, both read 20 September 2026. Modern Age Coders is not connected with the Raspberry Pi Foundation or the Bebras challenge.' }
      ]
    },
    {
      id: 'thinking', tint: 'deep', eyebrow: 'The method',
      h2: 'You can count the answer without doing the work',
      lede: 'A task written by us in the Bebras spirit, and the idea underneath it. No Bebras question is reproduced anywhere on this page.',
      body: [
        { kind: 'p', html: '<strong>Five parcels come down a belt in the order 4, 1, 5, 3, 2. A robot arm can only swap two parcels standing next to each other. What is the smallest number of swaps that puts them in order 1, 2, 3, 4, 5?</strong> Most children start swapping. There is a faster way, and finding it is the whole point.' },
        { kind: 'three', cells: [
          { h3: 'Look for the rule', p: 'Every swap of neighbours can fix at most one pair that is in the wrong order. So the answer cannot be smaller than the number of wrong-order pairs, and it turns out it is never larger either.' },
          { h3: 'Count the wrong pairs', p: 'Go through every pair and ask whether the bigger number comes first. For 4 1 5 3 2 the wrong pairs are 4-1, 4-3, 4-2, 5-3, 5-2 and 3-2. That is six.' },
          { h3: 'Check it honestly', p: 'We searched every possible sequence of swaps by computer. The shortest is six, exactly as the count predicted. Counting was quicker than shuffling, and it also proved no shorter route exists.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'That is a Bebras task in miniature, and it shows the three habits the organiser names. Abstraction: throw away the parcels, keep the order. Decomposition: turn one big question into a count of pairs. Algorithmic thinking: a rule that works on any list, not just this one.',
            'It also has the quality good tasks share, that the fast route is not the clever route but the patient one. Nobody spots "six" by looking. They spot it by asking what a single swap can possibly achieve.'
          ],
          right: [
            'A child who meets this idea once will use it for years. It is the reason a sorted list can be searched quickly, the reason a program can say how much work a job will take before starting it, and the reason experienced programmers ask what a step can change before writing any steps.',
            'None of that needs a keyboard. Which is why, in our youngest classes, the answer to "when should my child start coding" is often that the thinking starts well before the typing does.'
          ] },
        { kind: 'source', html: 'The parcel task and both methods are ours, written for this page and checked in code on 20 September 2026: counting out-of-order pairs gives six, and a search over every sequence of neighbour swaps also gives six.' }
      ]
    },
    {
      id: 'practise', tint: 'plain', eyebrow: 'What to practise',
      h2: 'Nothing, and then the right sort of something',
      lede: 'Bebras is not a competition to cram for. It is one to grow into, which takes a different kind of preparation.',
      body: [
        { kind: 'table', caption: 'What helps, and what does not', head: ['Helps', 'Why', 'Does not help'], rows: [
          ['Working through past Bebras tasks with the explanation', 'The organiser publishes the idea behind each task; that is the syllabus', 'Timed drilling of tasks with no discussion'],
          ['Saying the rule out loud before answering', 'The tasks reward finding a rule, not spotting a pattern', 'Guessing quickly to finish inside the time'],
          ['Puzzles with no computer at all', 'Most Bebras ideas are about order, rules and information', 'Learning another programming language for it'],
          ['Explaining an answer to someone else', 'A rule that cannot be explained has not been found', 'Being told the answer without the reason'],
          ['Being allowed to find it slowly', 'Forty-five minutes is generous for the number of tasks', 'Any kind of pressure about the result']
        ] },
        { kind: 'two', mt: true,
          left: [
            'If a child enjoys the challenge, the good next step is not more Bebras. It is a language: the ideas in these tasks become visible the moment a child writes a loop that does something slightly wrong. Block-based coding is the usual door at eight or nine, Python at ten or eleven.',
            'If a child found it frustrating, the useful response is to do one task together, slowly, out of season, with no clock. Most frustration in Bebras comes from reading quickly rather than from the computing.'
          ],
          right: [
            'For teachers, the challenge doubles as a diagnostic. The pupils who do surprisingly well are often not the ones already writing code, and every computing teacher we have spoken to has a story about a child discovered this way.',
            'We do not reproduce Bebras tasks in lessons. Our own puzzles live in the same territory, and the Raspberry Pi Foundation\'s archive with its explanations is the place for the real ones.'
          ] }
      ]
    },
    {
      id: 'after', tint: 'tint', eyebrow: 'After November',
      h2: 'The coding challenge that follows, and who gets invited',
      lede: 'Bebras has a sequel with actual programming in it, and only Bebras entrants can take it.',
      body: [
        { kind: 'table', caption: 'The Raspberry Pi Foundation Coding Challenge, from the organiser\'s pages', head: ['Part', 'What the organiser says'], rows: [
          ['Who can enter', 'Only schools and students who took part in the previous UK Bebras Challenge; home-educated students are contacted directly by the UK Bebras team'],
          ['Ages', '"Designed to be accessible to all students aged 10+"'],
          ['Two kinds', 'Block-based programming and text-based programming, each with two difficulty levels'],
          ['Length', 'A 45-minute coding challenge, supervised by a school coordinator'],
          ['Instructions', 'Teachers are contacted through the UK Bebras emailing system during the challenge']
        ] },
        { kind: 'two', mt: true,
          left: [
            'This is the round that used to be called the Oxford University Computing Challenge, and a great many websites still call it that. The Bebras site now presents the follow-on as the Raspberry Pi Foundation Coding Challenge, so that is what we call it, while saying the old name plainly so that families searching for it find the right thing.',
            'The practical consequence for a parent is simple: sitting Bebras in November is the only way in. There is no separate entry and no way to enter a child directly.'
          ],
          right: [
            'Block-based and text-based tracks mean a ten-year-old in Scratch and a fifteen-year-old in Python can both take a version that fits. The programming is modest; the thinking is not, because the tasks come from the same tradition as Bebras.',
            'A student who enjoys that round is ready for something harder: the <a class="ag-inline-link" href="/british-informatics-olympiad-preparation">British Informatics Olympiad</a> in December and January is the next real step for a secondary pupil.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://bebras.uk/index.php?action=content&amp;id=132" rel="noopener" target="_blank">UK Bebras, Raspberry Pi Foundation Coding Challenge</a>, read 20 September 2026. The Oxford University Computing Challenge\'s own pages returned errors on the same day and nothing is claimed about them.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Getting ready',
    h2: 'Four rungs from puzzles to programs',
    lede: 'Bebras sits at the bottom of a ladder that ends at international olympiads. Almost nobody climbs all of it, and that is fine.',
    table: { caption: 'From reading a rule to writing one', head: ['Stage', 'Rung', 'The sign it is secure'], rows: [
      ['Ages 6 to 9', '1. Rules and order', 'Can say what a sequence of steps will do before it runs'],
      ['Ages 9 to 12', '2. Finding the rule', 'Looks for what is always true instead of trying cases'],
      ['Ages 12 to 15', '3. Writing the rule', 'Turns a found rule into code that works on any input'],
      ['Ages 15 to 18', '4. Proving the rule', 'Can say why a method is correct and how much work it does']
    ] },
    left: { h3: 'If November is next week', ps: [
      'Do nothing special. The challenge is designed to be sat cold, and a child who is told it matters will do worse than one who is told it is interesting.',
      'If you want to do something, do one past task together and talk about it. That is preparation; timed practice is not.'
    ] },
    right: { h3: 'If a child loved it', ps: [
      'Start a language. The ideas in the tasks become concrete the moment a child writes a loop that is nearly right.',
      'The <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a> shows what else is open at every age, from primary puzzles to the AI olympiad.'
    ] }
  },

  catalogue: {
    eyebrow: 'The full list',
    h2: 'Computing and maths courses by age',
    lede: 'Grouped by what a learner is ready for, with each syllabus one click away.',
    bands: [
      { num: 'I', h3: 'First steps', sub: 'Ages 6 to 10', courses: [
        { code: 'BEB / A / 01', slug: 'scratch-programming-complete-course', title: 'Scratch for kids', blurb: 'A first language, built on rules and order.' },
        { code: 'BEB / A / 02', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids, blocks to AI', blurb: 'Games, apps and a first look at AI.' },
        { code: 'BEB / A / 03', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Number sense, which the tasks quietly lean on.' }
      ] },
      { num: 'II', h3: 'Typing code', sub: 'Ages 10 to 13', courses: [
        { code: 'BEB / B / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'The first typed language, where a rule must be exact.' },
        { code: 'BEB / B / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Python as a way of checking whether a method works.' },
        { code: 'BEB / B / 03', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding for kids', blurb: 'From blocks to real code, in a world they know.' }
      ] },
      { num: 'III', h3: 'Real computing', sub: 'Ages 13 to 18', courses: [
        { code: 'BEB / C / 01', slug: 'python-complete-masterclass-teens', title: 'Python from start to finish', blurb: 'Every core idea, with prediction before running.' },
        { code: 'BEB / C / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms and data structures', blurb: 'The formal versions of Bebras ideas.' },
        { code: 'BEB / C / 03', slug: 'gcse-computer-science-course', title: 'GCSE Computer Science', blurb: 'Taught to the board the school actually uses.' }
      ] },
      { num: 'IV', h3: 'Beyond school', sub: 'For students who want more', courses: [
        { code: 'BEB / D / 01', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Speed and correctness under time limits.' },
        { code: 'BEB / D / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Where computational thinking goes next.' },
        { code: 'BEB / D / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad and competition maths', blurb: 'The mathematical half of the same instinct.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Weekly, live, and aimed at the thinking rather than the syntax',
    lede: 'Teachers work from India, five and a half hours ahead of the UK in winter and four and a half in summer. Younger children take an early evening slot; teenagers usually take a later one.',
    slots: [
      { time: 'Early weekday evening', l: 'For primary-age children, while they are still fresh.' },
      { time: 'Later weekday evening', l: 'The usual choice from about Year 8.' },
      { time: 'Weekend morning', l: 'For longer sessions on a single problem.' }
    ],
    cells: [
      { h3: 'Puzzles before syntax', p: 'Every new idea arrives as a problem to solve before it arrives as a thing to type.' },
      { h3: 'Our own tasks', p: 'Written by us in the same spirit. No Bebras task is copied into a lesson.' },
      { h3: 'Five to ten learners', p: 'Enough voices to hear a better rule than your own, few enough that nobody sits silent.' },
      { h3: 'Explaining is part of it', p: 'A learner who cannot explain a rule has not found it, and we say so kindly.' },
      { h3: 'One to one on request', p: 'For a child far ahead of their year, or one who will not speak in a group.' },
      { h3: 'Nothing promised', p: 'No score, no invitation to the coding challenge and no prize is promised by us.' }
    ]
  },

  projectsH2: 'What our students build',
  projectsLede: 'Four published projects by students at our school, none of them competition entries. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Families\' own words from our Google profile, unedited.',

  fees: {
    h2: 'Fees',
    lede: 'One monthly rate in US dollars, the same everywhere outside India. Nothing to join, nothing to cancel.',
    free: ['A full lesson on a real problem', 'A clear view of the right level', 'No card details'],
    group: ['Five to ten learners at one level', 'The same teacher each week', 'Work read and discussed', 'A certificate at the end'],
    one: ['One learner with one teacher', 'Aimed at a particular gap', 'For learners well ahead or behind their year']
  },

  faq: {
    eyebrow: 'Bebras questions',
    h2: 'What parents and teachers ask',
    items: [
      { q: 'When is the UK Bebras Challenge 2026?', a: 'The Raspberry Pi Foundation publishes a fortnight: the 2026 challenge runs from 9 to 20 November 2026, and each school picks its own lesson inside it.' },
      { q: 'What age is Bebras for?', a: 'The organiser says it is open to all young people aged 6 to 19, in age-appropriate groups. The Juniors group, for example, is ages 10 to 12.' },
      { q: 'Does my child need to know how to code?', a: 'No. The challenge contains no programming. It tests abstraction, decomposition and algorithmic thinking through interactive tasks, and a child who has never written code can do very well.' },
      { q: 'How long does it take and what does it cost?', a: 'Each student gets 45 minutes online, and the organiser says the challenge is entirely free to enter.' },
      { q: 'How many students take part?', a: 'More than 526,000 students across the UK took part last year, which makes it the largest computing competition in British schools.' },
      { q: 'How do we enter?', a: 'Through a school. A teacher signs up as the main school coordinator and can then enrol groups of students or the whole school. Families cannot enter a child directly, and neither can we.' },
      { q: 'Is there anything after Bebras?', a: 'Yes. The Raspberry Pi Foundation Coding Challenge, open only to schools and students who took the previous Bebras Challenge, is a 45-minute challenge for ages 10 and over with block-based and text-based versions at two difficulty levels. Many sites still call it the Oxford University Computing Challenge.' },
      { q: 'How should we prepare?', a: 'Lightly, if at all. Work through past tasks with the explanation the Raspberry Pi Foundation publishes, talk about the rule rather than the answer, and avoid timed drilling. The challenge is designed to be sat without preparation.' },
      { q: 'Do you use real Bebras tasks?', a: 'No. We write our own puzzles in the same territory. The organiser\'s archive, with an explanation of the computing idea behind each task, is the right place for the real ones.' },
      { q: 'What do classes cost?', a: 'The first lesson is free. A group place is then USD 100 a month and one-to-one teaching USD 150, with no joining fee and no minimum term.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for young computer scientists',
    lede: 'What runs in the same fortnight, what comes after, and the whole year in one place.',
    items: [
      { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'UK competitions calendar 2026-27', p: 'Every contest we could confirm, month by month.' },
      { href: '/primary-maths-challenge-practice', label: 'Primary Maths Challenge', p: 'The same fortnight in November, asking the opposite thing.' },
      { href: '/british-informatics-olympiad-preparation', label: 'British Informatics Olympiad', p: 'Where a secondary pupil goes after the coding challenge.' },
      { href: '/scottish-mathematical-challenge-practice', label: 'Scottish Mathematical Challenge', p: 'Marks for the explanation, not the answer.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Four school systems, and every UK page.' },
      { href: '/best-online-coding-classes-uk', label: 'Choosing an online class', p: 'Questions worth asking any provider.' }
    ]
  },

  start: {
    h2: 'Book a free class on problem solving',
    lede: 'Tell us your child\'s age and whether they have written any code. The free class is a real lesson on a real problem, and we say afterwards what we saw.',
    readFirst: 'Would rather read? Each course has its syllabus on its own <a class="ag-inline-link" href="/courses">course page</a>, the approach is on <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and the <a class="ag-inline-link" href="/coding-roadmap">roadmap</a> sets out the order.',
    note: 'WhatsApp costs a UK mobile nothing and usually gets to us fastest. The number is Indian, as we state on every page, and there is no UK office.',
    formNote: 'No card, no obligation. One reply to arrange a time.'
  },

  footer: {
    cols: [
      { h4: 'Competitions', links: [
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' },
        { href: '/british-informatics-olympiad-preparation', label: 'Informatics olympiad' },
        { href: '/primary-maths-challenge-practice', label: 'Primary Maths Challenge' },
        { href: '/scottish-mathematical-challenge-practice', label: 'Scottish Mathematical Challenge' }
      ] },
      { h4: 'Learning to code', links: [
        { href: '/courses/scratch-programming-complete-course', label: 'Scratch for kids' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python for kids' },
        { href: '/courses/problem-solving-dsa-masterclass-teens', label: 'Algorithms and data structures' },
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' }
      ] }
    ],
    bottomRight: 'We teach the thinking; the school runs the challenge'
  },

  personalityCss: `
.ag-root.ag-beb .ag-hero h1 { letter-spacing: -0.02em; }
.ag-root.ag-beb .ag-capsule { border-left-width: 8px; }
.ag-root.ag-beb .ag-section-head h2 { max-width: 24ch; }
.ag-root.ag-beb .ag-table caption { text-align: left; font-weight: 600; letter-spacing: 0.01em; }
.ag-root.ag-beb .ag-table th { text-transform: none; }
.ag-root.ag-beb .ag-spec dt { letter-spacing: 0.15em; }
.ag-root.ag-beb .ag-three h3 { letter-spacing: -0.002em; }
.ag-root.ag-beb .ag-slots { gap: 0.95rem; }
`,

  mustMention: ['more than 526,000 students', '9 to 20 November 2026', 'entirely free to enter', 'aged 6 to 19', '4, 1, 5, 3, 2', 'Raspberry Pi Foundation Coding Challenge', 'severe sight impairments']
};
