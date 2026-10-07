'use strict';
// Coding classes for 5 and 6 year olds, Australia (ag- topic door; AU cluster Phase 2, row 21).
// Demand: Google autocomplete (en-AU) "coding classes for 5 year olds"; plan row covers single-age queries for
// ages 5 and 6 on one page to avoid near-duplicate single-age pages.
// Sources, read raw on 7 October 2026 (curl, default agent):
//  - ACARA, Australian Curriculum v9, Digital Technologies curriculum content F-6 (.docx): Foundation year level
//    description and achievement standard; AC9TDIFK01 with the "programmable toy" elaboration; AC9TDIFP01;
//    AC9TDI2P02 with the elaboration "socks must be put on before shoes but a jumper can be put on before or
//    after shoes"; Year 2 achievement standard.
//  - ABS, Schools methodology, 2025: the first year of primary school has a different name in each state and
//    territory.
// Lesson family: arrow-card grid programs, unplugged. Our worked example: on a 4 by 4 grid, getting from the
// bottom-left square to the top-right square takes 3 up moves and 3 right moves, and there are 20 different
// six-card programs that do it (6 choose 3, our arithmetic).

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'guide', tag: 'AGES 5 AND 6', blurb: 'Coding for Australian 5 and 6 year olds: what the Foundation year and Year 1 curriculum expects, unplugged activities that build real programming ideas, and when live classes make sense.' },
  slug: 'coding-classes-for-5-and-6-year-olds-australia',
  code: 'kfiv',
  accent: '#51511B',
  accentRationale: 'Coding classes for 5 and 6 year olds, Australia: a gum-leaf olive chosen by hand, muted, at least 10 RGB units from every accent in use and 40 from every Australian page',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'Coding classes for 5 and 6 year olds, Australia',
  title: 'Coding Classes for 5 and 6 Year Olds in Australia',
  description: 'Coding classes for 5 and 6 year olds in Australia: what the Foundation year curriculum expects, games that teach sequencing at home, and live classes from age 6.',
  ogDescription: 'Can a 5 year old learn to code? What Australia\'s Foundation year and Year 1 curriculum expects, arrow-card games that teach real programming ideas, and live lessons from age 6.',
  twitterDescription: 'Coding for 5 and 6 year olds in Australia: what is realistic, what the curriculum expects, and how live classes start at six.',
  pageName: 'Coding Classes for 5 and 6 Year Olds in Australia',
  webPageDescription: 'A guide for Australian parents of 5 and 6 year olds to early coding: the Foundation and Year 1 to 2 Digital Technologies curriculum, unplugged sequencing activities and live online classes from age 6.',
  courseDescription: 'Live online first coding lessons for Australian 6 year olds in Scratch, with unplugged sequencing activities families can use with younger children.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'Coding for 5 and 6 year olds',
  navLinks: [
    { href: '#ready', label: 'Is it too early?' },
    { href: '#curriculum', label: 'At school' },
    { href: '#arrows', label: 'Arrow cards' },
    { href: '#first-lessons', label: 'First lessons' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Ages 5 and 6 &middot; Live online from 6',
  h1: 'Coding classes for 5 and 6 year olds',
  lede: 'Five and six year olds can absolutely start thinking like programmers, but what that looks like is very different from what most parents picture. At this age, coding is not about typing or screens. It is about putting steps in order, noticing when the order matters, and spotting when the same step happens again and again. Australian schools start exactly there: the Foundation year of the Australian Curriculum talks about representing ideas with symbols and pictures, and Years 1 and 2 talk about following and describing sequences of steps. This page explains what is realistic at five and at six, gives you a simple arrow-card game that teaches a real programming idea at the kitchen table, and sets out how our live online lessons begin once a child turns six.',
  secondaryCta: { href: '#arrows', label: 'Try the arrow-card game' },
  wa: 'Hello Modern Age Coders, we are in Australia and our child is 5 or 6. Could you tell us whether they are ready for a first coding class?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; live classes from age 6',
  spec: [
    ['For', 'Children aged 5 and 6'],
    ['School years', 'Foundation year and Year 1'],
    ['Live classes', 'From age 6'],
    ['At age 5', 'Unplugged games at home'],
    ['First tool', 'Scratch, with blocks'],
    ['Reading needed', 'Simple words only'],
    ['Group', 'Five to ten, or one to one'],
    ['Start', 'A free first class at 6']
  ],
  capsuleQ: 'In short',
  capsule: 'Coding classes for 5 and 6 year olds teach the ideas underneath programming: putting instructions in order, making simple choices and repeating steps. At five, those ideas are easiest to learn through games without a screen. From six, most children can begin a block language such as Scratch in short, guided online lessons. The Australian Curriculum expects the same: by the end of Year 2 students "follow and describe basic algorithms involving a sequence of steps and branching".',

  picks: {
    eyebrow: 'Start here',
    h2: 'First courses for the youngest coders',
    lede: 'Live coding lessons begin at six. The third card is a maths course that suits curious five year olds.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'KFIV / 01', title: 'Scratch Coding for Kids', note: 'From age 6. Snap-together blocks, moving characters and first small games, at a gentle pace.' },
      { course: 'kids-coding-blocks-masterclass', code: 'KFIV / 02', title: 'Coding for Kids', note: 'From age 6. A longer path that starts with Scratch and grows into apps and simple games over the year.' },
      { course: 'early-math-foundations', code: 'KFIV / 03', title: 'Early Math Foundations', note: 'Ages 4 to 7. Playful number sense and patterns, the maths that early coding leans on.' }
    ]
  },

  sections: [
    {
      id: 'ready', tint: 'tint', eyebrow: 'Five or six?',
      h2: 'What is realistic at five, and what changes at six',
      lede: 'The difference between a five and a six year old is large for coding, mostly because of reading, attention and fine motor control. Neither age is too young for the ideas.',
      body: [
        { kind: 'table', caption: 'Coding at five and at six: a practical guide (our teaching experience)', head: ['', 'At five', 'At six'], rows: [
          ['Reading', 'Recognises some words; relies on pictures', 'Reads short labels such as "move" and "say"'],
          ['Attention', 'Short bursts with lots of movement', 'Can follow a short guided lesson with a teacher'],
          ['Mouse and keyboard', 'Dragging is still tricky for many', 'Can drag blocks and click accurately enough'],
          ['Format that suits', 'Games at home with a parent, no screen needed', 'Short live online lessons, ideally with a parent nearby'],
          ['What they build', 'Step-by-step instructions for a toy or a friend', 'A character that moves, speaks and reacts on screen']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why we start live classes at six',
          left: [
            'Our online lessons need a child to recognise a few words on screen, use a mouse with some control and stay with a teacher for a whole lesson. Most children can do that at six; many five year olds cannot yet, and that is entirely normal.',
            'Starting too early can turn coding into a frustration. Waiting a few months, while playing the kind of games below, usually means a child starts at six already confident.'
          ],
          rightH3: 'What five year olds can do now',
          right: [
            'Five year olds are often superb at the thinking itself: they notice when a story is told out of order, they argue about the right way to make a sandwich, and they love giving instructions to adults who follow them too literally.',
            'All of that is programming in disguise. The arrow-card game further down turns it into something deliberate, with no screen at all.'
          ] },
        { kind: 'p', mt: true, html: 'The name of the first school year varies around Australia (Kindergarten, Prep, Reception, Pre-primary or Transition, depending on where you live), but the curriculum calls it the Foundation year everywhere. Most five and six year olds are in the Foundation year or Year 1. Our page on <a class="ag-inline-link" href="/online-coding-classes-for-kids-australia">online coding classes for Australian kids</a> lists each state\'s name and starting age, and our guide to <a class="ag-inline-link" href="/best-age-to-start-coding">the right age to start coding</a> looks at readiness more generally.' }
      ]
    },
    {
      id: 'curriculum', tint: 'deep', eyebrow: 'The Australian Curriculum',
      h2: 'What the Foundation year and Years 1 and 2 expect',
      lede: 'Digital Technologies starts in the Foundation year of the Australian Curriculum v9. The early expectations are modest and very sensible, and they describe thinking more than screens.',
      body: [
        { kind: 'table', caption: 'Early Digital Technologies expectations, Australian Curriculum v9 (quoted)', head: ['When', 'What ACARA expects'], rows: [
          ['By the end of Foundation', '"students show familiarity with digital systems and use them for a purpose. They represent data using objects, pictures and symbols"'],
          ['Foundation, digital systems (AC9TDIFK01)', '"recognise and explore digital systems (hardware and software) for a purpose", for example a "programmable toy"'],
          ['Foundation, privacy (AC9TDIFP01)', '"identify some data that is personal and owned by them"'],
          ['By the end of Year 2', 'students "follow and describe basic algorithms involving a sequence of steps and branching"']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'A sun on a weather map',
          left: [
            'ACARA\'s description of the Foundation year gives a lovely example of early computational thinking: representing an idea "with a symbol, object or picture that is understood by others, such as a sun indicating fine conditions in a weather forecast".',
            'That is the same idea as a block in Scratch: a picture that everyone agrees means "move forward" or "say hello".'
          ],
          rightH3: 'Socks before shoes',
          right: [
            'For Years 1 and 2, ACARA suggests children work out when the order of steps matters, with the example that "socks must be put on before shoes but a jumper can be put on before or after shoes".',
            'Spotting which steps can swap and which cannot is a real programming skill. Professional programmers spend whole careers on the grown-up version of it.'
          ] },
        { kind: 'source', html: 'Checked on 7 October 2026 against ACARA\'s Word download of the <a class="ag-inline-link" href="https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-f-6-v9.docx" rel="noopener" target="_blank">Digital Technologies content for Foundation to Year 6</a>.' }
      ]
    },
    {
      id: 'arrows', tint: 'tint', eyebrow: 'Try this at home',
      h2: 'The arrow-card game: a first program with no screen',
      lede: 'This is the unplugged activity we recommend most for five year olds, and we use a version of it in first lessons with six year olds too. You need paper, a pencil and a small toy.',
      body: [
        { kind: 'three', cells: [
          { h3: '1. Draw a grid', p: 'Draw a 4 by 4 grid of squares, big enough for the toy. Put the toy in the bottom-left square and draw a star in the top-right square.' },
          { h3: '2. Make cards', p: 'Cut out small cards and draw one arrow on each: up or right to begin with. Each card means "move one square that way".' },
          { h3: '3. Program the toy', p: 'Your child lays cards in a row, then "runs" the program by moving the toy one card at a time. If it misses the star, they find the wrong card and fix it.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The maths hiding in the game',
          left: [
            'To reach the star, the toy must move up 3 squares and right 3 squares, so every shortest program uses exactly six cards. How many different six-card programs work? By our count, 20, because a program is just a choice of which 3 of the 6 cards point up (six choose three).',
            'Five year olds will not calculate that, but they will discover that "up, up, up, right, right, right" and "right, up, right, up, right, up" both work, which is the real lesson: there is more than one correct program.'
          ],
          rightH3: 'Making it harder, slowly',
          right: [
            'Add a "wall" square the toy cannot enter, and some of the 20 programs stop working. Add left and down arrows. Let your child design a grid for you to solve.',
            'For six year olds, add a "repeat" card: a card that says "do the next card three times". Suddenly six cards can become two, and the child has invented a loop.'
          ] },
        { kind: 'p', mt: true, html: 'Watch for the moment a child says "that one\'s wrong" and points at a single card. That is debugging, and it is the most important habit in programming. Praise the fix more than the first attempt.' }
      ]
    },
    {
      id: 'first-lessons', tint: '', eyebrow: 'From six',
      h2: 'What a first live lesson looks like for a six year old',
      lede: 'Our first lessons for six year olds are built around one small success at a time, with a teacher guiding every step and a parent welcome to sit alongside.',
      body: [
        { kind: 'table', caption: 'A typical first month for a six year old (Scratch)', head: ['Week', 'The child makes', 'The idea underneath'], rows: [
          ['1', 'A cat that walks across the screen when the green flag is clicked', 'A program runs in order, from the top'],
          ['2', 'The cat says hello, then waits, then says goodbye', 'Steps happen one after another; waiting is a step too'],
          ['3', 'The cat dances by repeating a few moves', 'Repeating saves blocks: the first loop'],
          ['4', 'A second character answers the first', 'Two characters can each have their own program']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Short and lively', p: 'Lessons for this age switch between watching, trying and talking often, because six year olds learn by doing, not by listening for long.' },
          { h3: 'A grown-up nearby', p: 'For six year olds we ask that a parent or carer is in the room, especially for the first few lessons, to help with the mouse if needed.' },
          { h3: 'Celebrating small wins', p: 'Each lesson ends with something on screen that moves, so the child leaves proud of what they made.' }
        ] },
        { kind: 'p', mt: true, html: 'Scratch is free and runs in a web browser, so there is nothing to buy. A laptop or desktop with a mouse is easier than a tablet for little hands. Once a child is comfortable, our guide to <a class="ag-inline-link" href="/coding-classes-for-7-and-8-year-olds-australia">coding at seven and eight</a> shows what comes next.' }
      ]
    },
    {
      id: 'screens', tint: 'deep', eyebrow: 'Screen time',
      h2: 'Coding and screen time for young children',
      lede: 'Parents of five and six year olds often worry about adding more screen time. It is a fair concern, and it is one reason the unplugged games matter so much at this age.',
      body: [
        { kind: 'two',
          leftH3: 'Making, not watching',
          left: [
            'An hour of coding is a different kind of screen time from an hour of videos: the child is deciding, testing and fixing, and nothing happens unless they make it happen.',
            'Even so, at five and six the right balance is plenty of off-screen play around a short lesson.'
          ],
          rightH3: 'Privacy from the first day',
          right: [
            'The Foundation curriculum asks children to "identify some data that is personal and owned by them". We follow the same principle: young children never need to share personal details in a lesson, and accounts are set up by a parent.',
            'If a class uses a username, it is chosen with a parent and contains no surname or school name.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'Four early stages, from cards to Scratch',
    lede: 'Five year olds usually spend months on the first two stages at home; six year olds in live lessons reach the third within a term.',
    table: { caption: 'Early coding stages for ages 5 and 6', head: ['Stage', 'What your child can do'], rows: [
      ['1. Orders steps', 'Puts picture cards for a familiar routine in the right order and explains why'],
      ['2. Programs a toy', 'Lays out arrow cards that move a toy to a target, then fixes a wrong card'],
      ['3. First Scratch', 'Snaps together blocks so a character moves and speaks when the green flag is clicked'],
      ['4. First loop', 'Uses a repeat block instead of copying the same blocks again and again']
    ] },
    left: { h3: 'Does my child need to read?', ps: [
      'For the arrow-card game, no. For Scratch lessons at six, only a little: blocks have short labels such as "move" and "say", and the teacher reads anything longer aloud.',
      'Coding often gives reluctant readers a reason to decode words, because the words make something happen.'
    ] },
    right: { h3: 'Fitting into the school week', ps: [
      'Six year olds are often tired after school, so many families choose a weekend lesson. Billing is monthly, so it is easy to stop over the holidays.',
      'We agree the day and time in the free first class.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Courses for young children',
    lede: 'Live coding courses start at six; the maths courses suit children from four.',
    bands: [
      { num: 'I', h3: 'First coding', sub: 'From age 6', courses: [
        { code: 'KFIV / CODE / 01', slug: 'scratch-programming-complete-course', title: 'Scratch Coding for Kids', blurb: 'Snap-together blocks, characters and first games.' },
        { code: 'KFIV / CODE / 02', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'A full year from first blocks to small apps.' },
        { code: 'KFIV / CODE / 03', slug: 'microsoft-office-kids-mastery', title: 'Microsoft Office for Kids', blurb: 'Computer confidence for children from seven.' }
      ] },
      { num: 'II', h3: 'Early maths', sub: 'From age 4', courses: [
        { code: 'KFIV / MATH / 01', slug: 'early-math-foundations', title: 'Early Math Foundations', blurb: 'Number sense, shapes and patterns through play.' },
        { code: 'KFIV / MATH / 02', slug: 'mental-maths-mastery-kids', title: 'Mental Maths for Kids', blurb: 'Quick, confident calculation for primary children.' },
        { code: 'KFIV / MATH / 03', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus Mental Maths', blurb: 'Calculation with an abacus, then in the head.' }
      ] },
      { num: 'III', h3: 'Next steps', sub: 'Ages 7 and up', courses: [
        { code: 'KFIV / NEXT / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem Solving for Kids', blurb: 'Patterns, logic and algorithms from age seven.' },
        { code: 'KFIV / NEXT / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft Coding for Kids', blurb: 'Coding inside a world children already love, from seven.' },
        { code: 'KFIV / NEXT / 03', slug: 'game-development-masterclass-for-kids', title: 'Game Development for Kids', blurb: 'Real games in Scratch and beyond, from eight.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Gentle live lessons, at Australian times',
    lede: 'Our teachers are in India, and India time is behind every Australian state, so weekend mornings and after-school times in Australia are easy for us to cover.',
    slots: [
      { time: 'Saturday or Sunday morning', l: 'Often when six year olds are freshest, before they tire.' },
      { time: 'Weekday, after school', l: 'Works for children who are fresh after school.' },
      { time: 'One to one', l: 'For a shy child or a family with an unusual timetable.' }
    ],
    cells: [
      { h3: 'A free first class', p: 'The teacher checks whether your six year old is ready, and tells you honestly if waiting would be better.' },
      { h3: 'Small groups', p: 'Five to ten children of a similar age and level, with plenty of turns.' },
      { h3: 'One to one', p: 'Every minute is your child\'s, at exactly their pace.' },
      { h3: 'Their own clicks', p: 'The child moves every block. The teacher guides with questions and demonstrations.' },
      { h3: 'Parents in the room', p: 'For this age we encourage it, and you will see exactly what your child learns.' },
      { h3: 'Nothing to install', p: 'Scratch runs in a browser; you just need a computer with a mouse.' }
    ]
  },

  projectsH2: 'Projects built by our students',
  projectsLede: 'Older students made these; every one of them started with a first program as small as a moving cat. More are in our <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'These are the families\' own words, unedited, from our Google listing.',

  fees: {
    h2: 'Fees for early coding',
    lede: 'Families in Australia pay a single monthly fee in US dollars. There is no joining fee, and lessons can stop after any month.',
    free: ['A short, playful first lesson', 'An honest view on readiness', 'No card or bank details'],
    group: ['Five to ten young children', 'A familiar teacher each week', 'Plenty of turns for everyone', 'Stop after any month'],
    one: ['A lesson shaped around one child', 'Pace set by attention span', 'Ideal for a shy first coder']
  },

  faq: {
    eyebrow: 'Questions from parents',
    h2: 'What parents of 5 and 6 year olds ask',
    items: [
      { q: 'Can a 5 year old learn coding?', a: 'Yes, the ideas: ordering steps, making simple choices and repeating actions. At five these are learned most easily through games without a screen, such as programming a toy with arrow cards. Typing and screen-based coding usually come a little later.' },
      { q: 'Are there coding classes for 5 year olds?', a: 'Our live online classes start at six, because they need a little reading and mouse control. For five year olds we suggest the unplugged games on this page and a first class once they turn six.' },
      { q: 'What do coding classes for 6 year olds involve?', a: 'Short, guided lessons in a block language such as Scratch, where children snap blocks together so a character moves, talks and reacts. Each lesson ends with something the child made and can show.' },
      { q: 'What is unplugged coding?', a: 'Unplugged coding teaches programming ideas without a computer: putting instructions in order, following them exactly and fixing mistakes, using cards, toys, drawings or games.' },
      { q: 'Does coding count as screen time?', a: 'It uses a screen, but it is active making rather than watching. For five and six year olds we still recommend short lessons and plenty of off-screen play around them.' },
      { q: 'Is coding part of the Foundation year at school?', a: 'Digital Technologies starts in the Foundation year of the Australian Curriculum v9, focused on recognising digital systems and representing ideas with objects, pictures and symbols. Sequencing steps follows in Years 1 and 2.' },
      { q: 'Should my child use a tablet or a computer?', a: 'A laptop or desktop with a mouse is easier for Scratch. Tablets are fine for picture-based apps, but dragging small blocks with a finger frustrates many young children.' },
      { q: 'Do I need to know how to code to help?', a: 'Not at all. Playing the arrow-card game, asking your child to explain their program and celebrating fixed mistakes help more than any technical knowledge.' },
      { q: 'How long should lessons be for a 6 year old?', a: 'Shorter and livelier than for older children, with frequent changes of activity. The teacher adjusts to your child\'s attention on the day.' },
      { q: 'What does it cost?', a: 'The first lesson is free and asks for no card. Group places and one-to-one lessons each have a monthly fee, listed under Fees above, with no sign-up charge.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for families of young children in Australia.',
    items: [
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'Where every page for Australian families is listed.' },
      { href: '/coding-classes-for-7-and-8-year-olds-australia', label: 'Coding for 7 and 8 year olds', p: 'The next stage, with first loops and stories.' },
      { href: '/online-coding-classes-for-kids-australia', label: 'Online coding for Australian kids', p: 'Year levels and lesson times by state.' },
      { href: '/kids-coding-languages-australia', label: 'Kids coding languages', p: 'Why blocks come before typing.' },
      { href: '/best-age-to-start-coding', label: 'The right age to start coding', p: 'Readiness at six, nine and twelve.' },
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch coding classes', p: 'The block language in detail.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Leave your details and we will call at a time that suits you. If your child is six, the free class is a short, playful first lesson. If they are five, we are happy to talk through the games on this page and suggest when to start.',
    readFirst: 'Before booking, you might like <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, which follows one lesson from start to finish, or the <a class="ag-inline-link" href="/courses">courses</a> for older children.',
    note: 'The quickest way to reach us from Australia is usually WhatsApp. The number starts with +91 because the team works in India; we have no office in Australia.',
    formNote: 'Free, no card, no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Young coders', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch classes' },
        { href: '/best-age-to-start-coding', label: 'The right age to start' },
        { href: '/coding-classes-for-7-and-8-year-olds-australia', label: 'Ages 7 and 8' },
        { href: '/coding-roadmap', label: 'The coding roadmap' }
      ] },
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/online-coding-classes-for-kids-australia', label: 'Online coding for kids' },
        { href: '/kids-coding-languages-australia', label: 'Kids coding languages' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Socks before shoes is an algorithm too'
  },

  personalityCss: `
.ag-root.ag-kfiv .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-kfiv .ag-capsule { border-radius: 10px; }
.ag-root.ag-kfiv .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-kfiv .ag-grid-3 h3 { font-weight: 640; }
.ag-root.ag-kfiv .ag-table caption { text-align: left; }
.ag-root.ag-kfiv .ag-pick-body h3 { letter-spacing: -0.006em; }
`,

  dossier: {
    curriculumAuthority: 'Australia, Foundation to Year 2. ACARA, Australian Curriculum v9, Digital Technologies F-6: Foundation description "with a symbol, object or picture that is understood by others, such as a sun indicating fine conditions in a weather forecast"; Foundation achievement standard "students show familiarity with digital systems and use them for a purpose. They represent data using objects, pictures and symbols"; AC9TDIFK01 with "programmable toy"; AC9TDIFP01 "identify some data that is personal and owned by them"; AC9TDI2P02 elaboration "socks must be put on before shoes but a jumper can be put on before or after shoes"; Year 2 achievement standard "follow and describe basic algorithms involving a sequence of steps and branching".',
    localProject: 'Arrow-card grid programs: on a 4 by 4 grid, the toy moves 3 up and 3 right, so every shortest program has 6 cards and there are 20 different ones (6 choose 3, our arithmetic); a repeat card turns six cards into two. Lesson family: unplugged arrow-card programs on a grid.',
    requiredMentions: ['arrow-card', 'six choose three', 'socks must be put on before shoes', 'a sun indicating fine conditions', 'AC9TDIFK01', 'AC9TDIFP01', 'programmable toy', 'Foundation year', 'follow and describe basic algorithms'],
    sources: [
      { claim: 'ACARA, Australian Curriculum v9, Digital Technologies curriculum content F-6: Foundation year level description and achievement standard; AC9TDIFK01, AC9TDIFP01; AC9TDI2P02 elaborations; Year 2 achievement standard.', url: 'https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-f-6-v9.docx' },
      { claim: 'ABS, Schools methodology, 2025: the first year of primary school (Pre-Year 1) has different names in different states and territories; it is the foundation year in the Australian Curriculum.', url: 'https://www.abs.gov.au/methodologies/schools-methodology/2025' },
      { claim: 'Scratch Foundation, scratch-blocks msg/json/en.json: block labels "move %1 steps", "say %1", "repeat %1", "when %1 clicked".', url: 'https://github.com/scratchfoundation/scratch-blocks' }
    ],
    rejectedClaims: [
      'Any research statistic on the benefits of early coding: none read raw, so no such figure is used.',
      'Screen-time limits by age: health guidance is outside this page\'s scope, so no recommended minutes are quoted.',
      'ScratchJr\'s stated age range: scratchjr.org renders by script and could not be read raw; ScratchJr is not recommended by name.',
      'Lesson length in minutes for young children: not in our brand facts, so the page describes lessons as short without a number.',
      'A promise that five year olds can join live classes: refused; live classes start at six.'
    ]
  }
};
