'use strict';
// Digital Technologies primary coding help (ag- curriculum door, Australia cluster Phase 3, row 82).
// Facts read raw on 7 October 2026 from ACARA's Version 9.0 Digital Technologies content F-6 (Word
// download): band level descriptions and achievement standards for Years 2, 4 and 6, and content
// descriptions with elaborations quoted exactly (AC9TDI2P01, AC9TDI2P03, AC9TDI4P01, AC9TDI4P02,
// AC9TDI4P05, AC9TDI6P01, AC9TDI6P07). Spine: the past-tense rule algorithm from the AC9TDI4P02
// elaboration, tested by us on twelve verbs in three versions (family checked free site-wide on
// 7 October 2026). Results were produced by running the rules in Python.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'exam', tag: 'PRIMARY DIGITAL TECHNOLOGIES', label: 'Primary Digital Technologies coding help', blurb: 'How primary schools teach coding under the Australian Curriculum, Foundation to Year 6, and an algorithm lesson built from ACARA\'s own example.' },
  slug: 'digital-technologies-primary-coding-help',
  code: 'dtpr',
  accent: '#247212',
  accentRationale: 'Primary Digital Technologies: a clear gum-leaf green chosen by hand, muted, at least 11 RGB from every accent on the site and above 4.8:1 on #EDE7DA',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'Digital Technologies primary coding help',
  title: 'Primary Digital Technologies Coding Help | Foundation to Year 6',
  description: 'Help with primary Digital Technologies coding in Australia: what ACARA\'s Version 9.0 content asks from Foundation to Year 6, and an algorithm lesson to try at home.',
  ogDescription: 'Primary coding in the Australian Curriculum, Version 9.0: algorithms, user stories and visual programs from Foundation to Year 6, with a past-tense rule lesson taken from ACARA\'s own example.',
  twitterDescription: 'Primary Digital Technologies coding, Foundation to Year 6, with a lesson to try at home.',
  pageName: 'Primary Digital Technologies Coding Help',
  webPageDescription: 'A guide for parents of Australian primary students to the coding side of Digital Technologies, Version 9.0: how algorithms, user stories and visual programs build from Foundation to Year 6, and a worked algorithm lesson on forming the past tense of regular verbs.',
  courseDescription: 'Live online coding classes for Australian primary students that build algorithms, visual programming and problem definition in the order the curriculum describes.',
  crumbs: [{ name: 'Digital Technologies curriculum help', href: '/australian-curriculum-digital-technologies-help' }],
  crumbLabel: 'Primary coding help',
  navLinks: [
    { href: '#progress', label: 'Progression' },
    { href: '#stories', label: 'User stories' },
    { href: '#rule', label: 'Algorithm lesson' },
    { href: '#homework', label: 'Homework' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Primary Digital Technologies &middot; Live online',
  h1: 'Primary Digital Technologies coding help',
  lede: 'In Australian primary schools, coding rarely looks like typing. It starts with following and describing steps, moves to building block programs, and by Year 6 expects children to design algorithms with several choices and repeats, use variables, and judge whether their solution actually helps the person it was made for. Parents are often asked to help with homework they never did themselves. This page walks through what the Version 9.0 curriculum asks at each stage, quotes ACARA directly, and then works a lesson built from one of ACARA\'s own examples: a rule for forming the past tense of verbs, written as an algorithm and tested until it breaks.',
  secondaryCta: { href: '#rule', label: 'Try the algorithm lesson' },
  wa: 'Hello Modern Age Coders, I would like a free class to help with primary Digital Technologies coding.',
  heroNote: 'Quoted from ACARA Version 9.0 F to 6 &middot; Lesson results run by us &middot; 7 October 2026',
  spec: [
    ['Years', 'Foundation to Year 6'],
    ['Bands', 'Foundation, 1 to 2, 3 to 4, 5 to 6'],
    ['Coding style', 'Following steps, then visual programs'],
    ['By Year 4', 'Branching and iteration as visual programs'],
    ['By Year 6', 'Variables and input added'],
    ['Problem side', 'User stories and design criteria'],
    ['Taught by', 'Your child\'s school, in its own way'],
    ['We offer', 'Live classes from age 6']
  ],
  capsuleQ: 'In short',
  capsule: 'Primary Digital Technologies builds coding in three steps. By Year 2 children follow and describe algorithms with steps and branching. By Year 4 they implement simple algorithms as visual programs with branching and iteration. By Year 6 they design algorithms with complex branching and iteration and build visual programs that include variables. Throughout, they define problems with user stories and judge solutions against design criteria.',

  picks: {
    eyebrow: 'For primary students',
    h2: 'Three courses that match primary Digital Technologies',
    lede: 'Unplugged thinking, visual programming, and a gentle step towards text code for confident Year 5 and 6 students.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'DTPR / 01', title: 'Thinking in steps', note: 'Sequencing, decisions and repetition through puzzles, before and alongside any screen.' },
      { course: 'scratch-programming-complete-course', code: 'DTPR / 02', title: 'Visual programming', note: 'Block programs with loops, conditions and variables: the Year 4 to Year 6 content in practice.' },
      { course: 'kids-coding-blocks-masterclass', code: 'DTPR / 03', title: 'Projects with blocks', note: 'Games and small apps that give children a reason to define a problem first.' }
    ]
  },

  sections: [
    {
      id: 'progress', tint: 'tint', eyebrow: 'Band by band',
      h2: 'How coding grows from Foundation to Year 6',
      lede: 'The band level descriptions say what children should have had the chance to do. These extracts are ACARA\'s words.',
      body: [
        { kind: 'table', caption: 'Primary Digital Technologies band level descriptions, Version 9.0, coding extracts', head: ['By the end of', 'ACARA says students should have had the opportunity to'], rows: [
          ['Year 2', '"apply computational thinking by describing algorithms that include sequences of instructions and decisions, and by using digital systems to produce simple solutions"'],
          ['Year 4', '"broaden their computational thinking by creating simple digital solutions, individually and in groups, that involve defining problems, and designing and implementing solutions as visual programs"'],
          ['Year 6', '"apply computational thinking by creating digital solutions that involve defining problems, designing and modifying algorithms, and implementing them as visual programs"']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Notice the word that keeps returning: problems. Even at Year 2 the curriculum is not asking for code for its own sake. AC9TDI2P01 asks children to "investigate simple problems for known users that can be solved with digital systems", and one of its examples is "deciding what to wear by checking the forecast on a weather app".',
            'AC9TDI2P03 then asks them to "discuss how existing digital systems satisfy identified needs for known users". A six-year-old explaining why a family uses a tablet for recipes is doing real Digital Technologies.'
          ],
          right: [
            'Visual programming arrives in the Years 3 to 4 band and stays through Year 6. The difference by Year 6 is variables and input: programs remember things and respond to the user, which is where most children first meet the idea that a program has a state.',
            'Text-based languages belong to the secondary bands. Some children are ready earlier, and we teach Python to confident Year 5 and 6 students, but the national content does not expect it before Year 7.'
          ] },
        { kind: 'source', html: 'Source: ACARA, <a class="ag-inline-link" href="https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-f-6-v9.docx" rel="noopener" target="_blank">Digital Technologies content F to 6, Version 9.0</a> (Word download), band level descriptions, AC9TDI2P01 and AC9TDI2P03, read on 7 October 2026. ACARA is not connected with us.' }
      ]
    },
    {
      id: 'stories', tint: 'deep', eyebrow: 'Defining the problem',
      h2: 'User stories and design criteria in primary school',
      lede: 'Primary children are asked to say who a solution is for and how they will know it works. It sounds grown-up; ACARA\'s examples show how ordinary it can be.',
      body: [
        { kind: 'table', caption: 'Problem definition and evaluation in the Years 3 to 6 content, quoted', head: ['Code', 'Content description', 'An example ACARA gives'], rows: [
          ['AC9TDI4P01', '"define problems with given design criteria and by co-creating user stories"', '"buying presents for family members within a specified budget"'],
          ['AC9TDI4P05', '"discuss how existing and student solutions satisfy the design criteria and user stories"', '"how maps help people to locate places in the community"'],
          ['AC9TDI6P01', '"define problems with given or codeveloped design criteria and by creating user stories"', 'a family in a bushfire or flood-prone area preparing for an emergency'],
          ['AC9TDI6P07', '"select and use appropriate digital tools effectively to create, locate and communicate content, applying common conventions"', '"modifying search terms to make the query more accurate"']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The Years 3 to 4 user story template is "A &lt;type of user&gt; has &lt;some goal&gt; so that &lt;some reason&gt;", with the example "a sports team wants to access league rankings online so that they can see their progress". Children fill it in before they build anything.',
            'At home, the same template works for any idea a child wants to code. "A younger brother wants a game that teaches times tables so that he can practise without a worksheet." Once that sentence exists, the child knows who to test the game on.'
          ],
          right: [
            'Design criteria are the checks that come out of the story: does it give a new question each time, does it say whether the answer was right, can a seven-year-old read it? The Years 5 to 6 content asks children to judge their solutions against criteria like these and against the wider impact on their community.',
            'Children who skip this step build impressive programs that nobody uses. Children who do it build smaller programs that someone actually enjoys, which is a better lesson in what software is for.'
          ] },
        { kind: 'source', html: 'Quotations: ACARA, Digital Technologies content F to 6, Version 9.0, AC9TDI4P01, AC9TDI4P05, AC9TDI6P01 and AC9TDI6P07 with elaborations, read on 7 October 2026.' }
      ]
    },
    {
      id: 'rule', tint: 'tint', eyebrow: 'A lesson from ACARA\'s own example',
      h2: 'An algorithm for the past tense, tested until it breaks',
      lede: 'One elaboration under AC9TDI4P02 describes "following rules to form the past tense of regular verbs such as \'create\' to \'created\', \'try\' to \'tried\' and \'cook\' to \'cooked\'". It makes a surprisingly good programming lesson, because the obvious rule is wrong in instructive ways.',
      body: [
        { kind: 'table', caption: 'Three versions of the rule, each run by us on the same twelve verbs', head: ['Version', 'The rule', 'Correct', 'What went wrong'], rows: [
          ['1', 'If the word ends in e, add d. If it ends in y, change y to ied. Otherwise add ed.', '7 of the 12 verbs', 'play became plaied, enjoy became enjoied, stop became stoped, hop became hoped, go became goed'],
          ['2', 'As version 1, but change y to ied only when the letter before the y is not a vowel.', '9 of the 12 verbs', 'stop, hop and go still wrong'],
          ['3', 'As version 2, and short words ending consonant, vowel, consonant double the last letter before ed.', '11 of the 12 verbs', 'go became goed']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The twelve test verbs were create, try, cook, play, jump, bake, carry, stop, enjoy, hop, go and dance. Version 1 is what most children write first, and it already handles the three words in ACARA\'s example. Testing on more words is what reveals the problem with play and enjoy.',
            'That is the heart of the lesson. A rule that works on the examples it was built from has not been tested. Children who see plaied appear on screen understand testing far better than children who are told about it.'
          ],
          right: [
            'The last failure is the most useful one. Go is not a regular verb, and ACARA\'s description says regular verbs. No rule will turn go into went; the fix is a short list of exceptions checked first, which is exactly how real programs handle irregular cases.',
            'In a block language the rule becomes nested if-then-else blocks with a list for the exceptions. Year 5 and 6 children can build it in about a lesson, then try to break each other\'s versions with new words.'
          ] },
        { kind: 'p', text: 'Every number in the table comes from running the three rules in Python on the twelve words listed. The point is not grammar; it is the habit of writing a rule, testing it on cases you did not think of, and improving it, which is the computational thinking every primary band description asks for.' },
        { kind: 'source', html: 'Quotation: ACARA, Digital Technologies content F to 6, Version 9.0, AC9TDI4P02 elaboration, read on 7 October 2026. The three rules and the twelve-verb test are ours.' }
      ]
    },
    {
      id: 'homework', tint: '', eyebrow: 'Helping with homework',
      h2: 'What to do when your child brings coding home',
      lede: 'You can help without knowing how to code. These three moves cover most primary homework.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Ask for the steps first', p: 'Before touching the computer, ask your child to say the steps out loud. If they cannot describe the algorithm, the code will not fix that.' },
          { h3: 'Predict, then run', p: 'Ask what will happen when they press go. A wrong prediction is the best moment to learn, because it shows exactly which block they misunderstood.' },
          { h3: 'Find someone to test it', p: 'If the task has a user, ask whether that person would understand it. Watching a sibling try a program is a lesson in design criteria.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'Most primary schools use a block-based environment, and many have their own accounts and rules for using them. Follow the school\'s instructions about which tools and logins to use at home; AC9TDI4P08 even asks children to remember their school password and explain why it should be hard for others to guess.',
            'If a task seems far beyond your child, it is worth asking the teacher which content description it is aimed at. The codes make that conversation much easier.'
          ],
          right: [
            'If you want steady practice outside school, our primary classes follow the same progression with more time on each step. Children start with us from age 6 and move from unplugged algorithms to block programs at their own pace.',
            'Anything the school assesses stays your child\'s own work. We teach the thinking; the homework is theirs.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Four steps',
    h2: 'Primary coding, step by step',
    lede: 'Year levels are a guide. Children move when they are ready.',
    table: { caption: 'A primary coding progression', head: ['Around', 'Step', 'The sign it is secure'], rows: [
      ['Foundation to Year 2', '1. Following steps', 'Follows and describes a short algorithm with a decision'],
      ['Years 3 to 4', '2. Block programs', 'Builds a program with a loop and an if-then block'],
      ['Years 5 to 6', '3. Variables and input', 'Keeps a score or a count that changes as the user plays'],
      ['Years 5 to 6 and up', '4. Testing on purpose', 'Tries inputs designed to break the program, then fixes it']
    ] },
    left: { h3: 'If your child finds it frustrating', ps: [
      'Frustration usually means a step was skipped. Going back to saying the algorithm out loud almost always helps.',
      'Short, frequent sessions beat long ones at this age.'
    ] },
    right: { h3: 'When they are ready for more', ps: [
      'Our page on <a class="ag-inline-link" href="/after-scratch-next-step-python-australia">moving from Scratch to Python</a> explains the step into text code.',
      'Primary competitions such as the Bebras Challenge reward exactly this kind of thinking, without any coding required.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for primary-age coders',
    lede: 'Grouped by stage. Each card opens the full course outline.',
    bands: [
      { num: 'I', h3: 'First steps', sub: 'Ages 6 to 8', courses: [
        { code: 'DTPR / A / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking', blurb: 'Steps, choices and repeats through puzzles.' },
        { code: 'DTPR / A / 02', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Creative coding for beginners', blurb: 'Making things move, with a teacher beside you.' },
        { code: 'DTPR / A / 03', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'What AI is and is not, explained simply.' }
      ] },
      { num: 'II', h3: 'Block programming', sub: 'Ages 8 to 11', courses: [
        { code: 'DTPR / B / 01', slug: 'scratch-programming-complete-course', title: 'Scratch programming', blurb: 'Loops, conditions and variables in real projects.' },
        { code: 'DTPR / B / 02', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Games and apps built from blocks.' },
        { code: 'DTPR / B / 03', slug: 'game-development-masterclass-for-kids', title: 'Game development for kids', blurb: 'Designing and building small games.' }
      ] },
      { num: 'III', h3: 'Ready for more', sub: 'Confident Years 5 and 6', courses: [
        { code: 'DTPR / C / 01', slug: 'python-ai-kids-masterclass', title: 'Python for kids', blurb: 'A first text language, taken slowly.' },
        { code: 'DTPR / C / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Using code to explore number patterns.' },
        { code: 'DTPR / C / 03', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Code that builds in a world children already know.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Short, live classes for primary children',
    lede: 'Our teachers are in India, behind every Australian state. A 4 pm lesson in Perth starts at 1.30 pm India time all year, as Western Australia has no daylight saving, which makes after-school times simple to keep.',
    slots: [
      { time: 'Straight after school', l: 'The most common choice for primary families.' },
      { time: 'Saturday morning', l: 'Calmer for younger children.' },
      { time: 'Holiday sessions', l: 'A few days on one project.' }
    ],
    cells: [
      { h3: 'Say it before coding it', p: 'Children describe the steps before building them.' },
      { h3: 'Testing as a game', p: 'Children try to break each other\'s programs, then fix their own.' },
      { h3: 'Small groups', p: 'Five to ten children at a similar stage.' },
      { h3: 'One-to-one option', p: 'For children who need a slower or faster pace.' },
      { h3: 'A note home', p: 'One line on what was learned and one thing to ask about.' },
      { h3: 'Homework stays theirs', p: 'We teach the idea; school tasks remain the child\'s own.' }
    ]
  },

  projectsH2: 'Projects made by our students',
  projectsLede: 'Built by learners because they wanted to, not for a grade. See more in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents\' comments, copied word for word from Google.',

  fees: {
    h2: 'Fees',
    lede: 'Families in Australia are charged monthly in US dollars, our usual rate everywhere outside India. There is nothing to pay in advance and you can stop at any month end.',
    free: ['A real lesson with a teacher', 'An honest view of your child\'s stage', 'No card details asked for'],
    group: ['Five to ten children at one stage', 'The same teacher each week', 'Projects reviewed with feedback', 'A certificate when the course ends'],
    one: ['A teacher for your child only', 'Paced to suit them', 'A weekly time you choose']
  },

  faq: {
    eyebrow: 'Questions about primary coding',
    h2: 'What parents of primary children ask',
    items: [
      { q: 'What coding do Australian primary schools teach?', a: 'Under Version 9.0, children follow and describe algorithms in the early years, then from Years 3 to 4 implement them as visual programs. By Year 6 their visual programs include variables and input.' },
      { q: 'What is a visual program?', a: 'A program built by joining blocks rather than typing text. Each block is an instruction, and loops and decisions are blocks that wrap around others.' },
      { q: 'Is my child behind if they are not typing code yet?', a: 'No. The national content does not ask for text-based languages until the Years 7 to 8 band. Many children start text code earlier by choice.' },
      { q: 'What is a user story for a primary child?', a: 'A sentence saying who a solution is for, what they want and why, such as "A sports team wants to access league rankings online so that they can see their progress".' },
      { q: 'What does the past-tense example teach?', a: 'How to write a rule as an algorithm, test it on many inputs, and improve it when it fails. It also shows why exceptions, like irregular verbs, need special handling.' },
      { q: 'How can I help if I cannot code?', a: 'Ask your child to explain the steps, predict what a program will do before running it, and test it on someone else. Those three habits matter more than knowing the blocks.' },
      { q: 'What age do your classes start?', a: 'From age 6. The youngest groups focus on steps and decisions before moving to block programming.' },
      { q: 'Do you follow my child\'s school programme?', a: 'We build the same skills the curriculum describes, in our own sequence. We do not complete school tasks; those stay the child\'s own.' },
      { q: 'Are you connected to ACARA or the school?', a: 'No. We are an independent online school. We quote ACARA because it publishes the curriculum.' },
      { q: 'When would lessons be?', a: 'We agree a weekly slot after the free class, usually after school in your state. All Australian states are ahead of India time, so after-school lessons fall in our working day.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for Australian primary families',
    lede: 'Coding by age, the whole curriculum, and the next steps.',
    items: [
      { href: '/australian-curriculum-digital-technologies-help', label: 'Digital Technologies curriculum help', p: 'The subject from Foundation to Year 10.' },
      { href: '/online-coding-classes-for-kids-australia', label: 'Online coding for kids', p: 'Classes for primary children across Australia.' },
      { href: '/coding-classes-for-7-and-8-year-olds-australia', label: 'Coding for 7 and 8 year olds', p: 'What a lesson looks like at that age.' },
      { href: '/after-scratch-next-step-python-australia', label: 'After Scratch: Python', p: 'Moving from blocks to text.' },
      { href: '/coding-games-for-kids-australia', label: 'Coding games for kids', p: 'Games that teach the same ideas.' },
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'Our main Australian page.' }
    ]
  },

  start: {
    h2: 'Try a free primary coding class',
    lede: 'Tell us your child\'s age and what they enjoy. The free class starts with steps and decisions, moves to blocks if they are ready, and ends with a plain answer about what would help next.',
    readFirst: 'Would you rather browse? The <a class="ag-inline-link" href="/course-atlas">course atlas</a> shows every course, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains our approach.',
    note: 'WhatsApp is normally the fastest way to reach us. Our number starts with +91, India\'s code, as the school is run from India and has no Australian premises.',
    formNote: 'Free, with no card and no follow-up pressure. We reply once to arrange it.'
  },

  footer: {
    cols: [
      { h4: 'Australia', links: [
        { href: '/australian-curriculum-digital-technologies-help', label: 'Digital Technologies help' },
        { href: '/online-coding-classes-for-kids-australia', label: 'Online coding for kids' },
        { href: '/after-scratch-next-step-python-australia', label: 'After Scratch: Python' },
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/course-atlas', label: 'Course atlas' },
        { href: '/coding-games-for-kids-australia', label: 'Coding games for kids' }
      ] }
    ],
    bottomRight: 'ACARA content quoted; our school is independent'
  },

  personalityCss: `
.ag-root.ag-dtpr .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-dtpr .ag-capsule { border-left-width: 5px; }
.ag-root.ag-dtpr .ag-table td:nth-child(3) { font-weight: 600; }
.ag-root.ag-dtpr .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-dtpr .ag-grid-3 h3 { letter-spacing: -0.005em; }
.ag-root.ag-dtpr .ag-spec dt { letter-spacing: 0.08em; }
`,

  dossier: {
    curriculumAuthority: 'ACARA, Australian Curriculum Version 9.0, Digital Technologies content F-6 (Word download), read 7 October 2026. Band level descriptions: Year 2 "apply computational thinking by describing algorithms that include sequences of instructions and decisions, and by using digital systems to produce simple solutions"; Year 4 "broaden their computational thinking by creating simple digital solutions, individually and in groups, that involve defining problems, and designing and implementing solutions as visual programs"; Year 6 "apply computational thinking by creating digital solutions that involve defining problems, designing and modifying algorithms, and implementing them as visual programs". AC9TDI2P01 (example "deciding what to wear by checking the forecast on a weather app"), AC9TDI2P03, AC9TDI4P01 (template "A <type of user> has <some goal> so that <some reason>", example "a sports team wants to access league rankings online so that they can see their progress"; "buying presents for family members within a specified budget"), AC9TDI4P05 ("how maps help people to locate places in the community"), AC9TDI6P01, AC9TDI6P07 ("modifying search terms to make the query more accurate"), AC9TDI4P02 elaboration "following rules to form the past tense of regular verbs such as \'create\' to \'created\', \'try\' to \'tried\' and \'cook\' to \'cooked\'".',
    localProject: 'Past-tense rule algorithm tested by us in Python on twelve verbs (create, try, cook, play, jump, bake, carry, stop, enjoy, hop, go, dance). Version 1 (e add d; y to ied; else ed): 7 of the 12 verbs (plaied, enjoied, stoped, hoped, goed). Version 2 (y to ied only after a consonant): 9 of 12. Version 3 (double final consonant in short consonant-vowel-consonant words): 11 of 12; go still goed, needing an exception list.',
    requiredMentions: ['AC9TDI2P01', 'AC9TDI2P03', 'AC9TDI4P01', 'AC9TDI4P05', 'AC9TDI6P01', 'AC9TDI6P07', 'plaied', '7 of the 12 verbs', '11 of the 12 verbs'],
    sources: [
      { claim: 'ACARA Version 9.0 Digital Technologies content F-6: band descriptions for Years 2, 4 and 6; AC9TDI2P01, 2P03, 4P01, 4P02, 4P05, 4P08, 6P01, 6P07 and elaborations.', url: 'https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-f-6-v9.docx' },
      { claim: 'ACARA Version 9.0 Digital Technologies content 7-10, for the point that text-based languages belong to the Years 7 to 8 band.', url: 'https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx' },
      { claim: 'ACARA Version 9.0 Mathematics, about the learning area (context for computational thinking across subjects).', url: 'https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/mathematics/mathematics-about-the-learning-area-v9.docx' }
    ],
    rejectedClaims: [
      'Which block-based tools Australian primary schools use: not stated; varies by school.',
      'Time allocated to Digital Technologies in primary school: not stated in the files read.',
      'Any claim that the Version 3 rule handles all English regular verbs: refused; it was tested on twelve words only.',
      'Any claim of alignment with or endorsement by ACARA: refused.'
    ]
  }
};
