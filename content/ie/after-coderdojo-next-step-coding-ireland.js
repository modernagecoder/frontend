'use strict';
// After CoderDojo: the next step in coding (ag- door, Ireland cluster, Phase 2).
// For children who have outgrown a free club. No affiliation with CoderDojo,
// Code Club or the Raspberry Pi Foundation is implied, and the clubs are never
// disparaged. Facts read at the Raspberry Pi Foundation's own pages and the
// CoderDojo sheet hosted on gov.ie, 16 September 2026: the first CoderDojo was
// in July 2011 at the National Software Centre in Cork, started by James
// Whelton and Bill Liao; the Foundation announced on 26 May 2017 that it was
// joining forces with the CoderDojo Foundation, which "will continue as an
// independent charity, based in Ireland"; the model is "non-formal education",
// "learning from each other and supported by mentors"; clubs are free, open
// and community-based for ages 7 to 17, the young people called Ninjas; in July
// 2026 "over 600 active CoderDojos" run worldwide within the Code Club movement
// (over 10,000 Code Clubs). The Foundation's 2023 club survey: "Almost 90% of
// club leaders" agree young people want more learning after a club; over 95%
// of clubs used Scratch; leaders want more AI activities. Older counts (1,250
// Dojos in 2017, 2,000 in 2019) are historical and never used in the present.

module.exports = {
  cluster: 'ag',
  clusterName: 'Ireland',
  hub: { group: 'guide', tag: 'AFTER A CODING CLUB', blurb: 'For children who have outgrown a free coding club: the step from Scratch to Python and AI, with a teacher and a clear path.' },
  slug: 'after-coderdojo-next-step-coding-ireland',
  code: 'acq',
  accent: '#800515',
  accentRationale: 'After CoderDojo: a deep claret from the solver, separated from both Irish greens and every other Ireland page',
  pageType: 'market',
  market: { name: 'Ireland', iso: 'IE', dial: '+353', lang: 'en-IE', locale: 'en_IE', geoRegion: 'IE', brandTag: 'Ireland', phonePlaceholder: '87 123 4567', minDigits: 7 },
  routeLabel: 'After CoderDojo: the next step in coding, Ireland',
  title: 'After CoderDojo: The Next Step in Coding in Ireland',
  description: 'Outgrown a free coding club? The next step after CoderDojo for Irish children: Scratch to Python and AI, with a live teacher and a clear path. First class free.',
  ogDescription: 'CoderDojo began in Cork in 2011 and still runs free clubs for young people. When a child wants more than a club can give, here is the next step, and how to keep the club too.',
  twitterDescription: 'For Irish children who have outgrown a free coding club: Scratch to Python and AI with a live teacher. First class free.',
  pageName: 'After CoderDojo: The Next Step in Coding',
  webPageDescription: 'For Irish families whose child has outgrown a free coding club such as CoderDojo: how clubs work, the signs a child is ready for more, and a structured path from Scratch to Python and AI.',
  courseDescription: 'Live online classes that take children who started at a free coding club from Scratch to typed Python, data and first AI projects, placed by ability and taught by the same teacher each week.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Ireland', href: '/coding-classes-in-ireland' }],
  crumbLabel: 'After CoderDojo',
  navLinks: [
    { href: '#dojo', label: 'About the clubs' },
    { href: '#ready', label: 'Ready for more?' },
    { href: '#bridge', label: 'The next step' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Ireland &middot; After a coding club &middot; Live online',
  h1: 'After CoderDojo: the next step in coding',
  lede: 'Many Irish children meet coding for the first time at a CoderDojo: a free club, run by volunteers, where young people build games and animations alongside friends. The movement began in Cork in 2011 and it still does something a paid class cannot, which is to make coding a social, open, free part of childhood. Sooner or later, though, many children want more. They have built everything they can think of in Scratch, they ask questions a busy volunteer has no time to answer, or they have heard about Python and AI and want to try the real thing. This page is for that moment. It sets out what the clubs are, as their own organisation describes them, the signs that a child is ready for a next step, and what a structured path from Scratch to Python and AI looks like. The best answer is often to keep the club and add a class, not to swap one for the other. We are not connected with CoderDojo in any way.',
  secondaryCta: { href: '#ready', label: 'Is my child ready?' },
  wa: 'Hello Modern Age Coders, my child has been going to a coding club and wants to go further. Could we book a free first class?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; not affiliated with CoderDojo',
  spec: [
    ['For', 'Children and teens, about 7 to 17'],
    ['Starts from', 'Wherever the club left off'],
    ['Path', 'Scratch, Python, data, AI'],
    ['Teacher', 'The same one each week'],
    ['Groups', 'Five to ten, placed by level'],
    ['Or', 'One to one'],
    ['Hours', 'After school, Irish time'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'CoderDojo is a network of free, volunteer-run coding clubs that began in Cork in July 2011; today there are over 600 active Dojos worldwide, part of the Raspberry Pi Foundation\'s Code Club movement. Clubs are brilliant for a first taste, for friendship and for confidence. When a child wants more, such as typed Python, a structured path or a teacher who reads their code every week, a live class is the natural next step, and many families keep the club as well. Modern Age Coders teaches live online for ages 6 to 67, in groups of five to ten placed by ability or one to one, and is not connected with CoderDojo. The first class is free; after it a group place is USD 100 a month and one-to-one lessons USD 150.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for the step after the club',
    lede: 'One for the jump from Scratch to typed code, one for children who came to the club to make games, and one that brings AI in the right way. Each card opens its syllabus.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'NEXT / 01', title: 'Python and AI for Kids', note: 'The step from blocks to typed Python for children about nine to twelve, with games and a first program that learns from examples.' },
      { course: 'game-development-masterclass-for-kids', code: 'NEXT / 02', title: 'Game Development for Kids', note: 'For the child who came to the club to make games: levels, scores and physics, built properly and finished.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', code: 'NEXT / 03', title: 'Vibe Coding for Kids', note: 'Scratch and games with AI help, where the child still plans and explains every part of the project.' }
    ]
  },

  sections: [
    {
      id: 'dojo', tint: 'tint', eyebrow: 'About the clubs',
      h2: 'Where CoderDojo came from, and what it gives a child',
      lede: 'Everything below is taken from the Raspberry Pi Foundation\'s own posts and from the CoderDojo description the Irish government hosts. The clubs deserve to be described in their own words.',
      body: [
        { kind: 'table', caption: 'CoderDojo, in its own organisation\'s words', head: ['When', 'What happened'], rows: [
          ['July 2011', 'The first CoderDojo took place at the National Software Centre in Cork, set up by James Whelton and Bill Liao to share their passion for computing'],
          ['26 May 2017', 'The Raspberry Pi Foundation announced it was joining forces with the CoderDojo Foundation, which would continue as an independent charity, based in Ireland'],
          ['2023', 'A survey of clubs found that over 95% had used Scratch in the previous year, with micro:bit and Python also popular, and that leaders wanted to offer more activities around AI'],
          ['July 2026', 'Fifteen years on, over 600 active CoderDojos run around the world, part of the Code Club movement of more than 10,000 clubs']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The founding idea was simple, in the Foundation\'s words: "provide a safe and social place for young people to acquire programming skills, learning from each other and supported by mentors." Clubs are free, open and community-based, for young people aged 7 to 17, whom the movement calls Ninjas, helped by volunteer mentors and led by Champions.',
            'The Foundation describes the approach as non-formal education: fun, creativity, collaboration and openness, rather than lessons and tests.'
          ],
          right: [
            'That is exactly why clubs work so well as a first step. A child tries things, sees what friends make, and discovers that coding is something they can do. Nothing a paid class offers replaces that.',
            'It also explains the moment this page is about. A club built on learning from each other, with volunteers giving their free time, is not set up to take one child steadily through Python and into AI over two or three years. That is a different job, and it needs a different kind of help.'
          ] },
        { kind: 'source', html: 'Sources, read 16 September 2026: <a class="ag-inline-link" href="https://www.raspberrypi.org/blog/raspberry-pi-and-coderdojo-join-forces/" rel="noopener" target="_blank">Raspberry Pi Foundation, "Raspberry Pi and CoderDojo join forces" (26 May 2017)</a>; <a class="ag-inline-link" href="https://www.raspberrypi.org/blog/from-one-club-to-a-global-movement-celebrating-15-years-of-coderdojo/" rel="noopener" target="_blank">"From one club to a global movement: celebrating 15 years of CoderDojo" (July 2026)</a>; <a class="ag-inline-link" href="https://www.raspberrypi.org/blog/code-club-coderdojo-survey-2023/" rel="noopener" target="_blank">Code Club and CoderDojo survey 2023</a>; <a class="ag-inline-link" href="https://assets.gov.ie/43674/6f422f24c69845c0aa70d0fb49032ef5.pdf" rel="noopener" target="_blank">"What is CoderDojo?" on gov.ie</a>. Modern Age Coders is not connected with CoderDojo, Code Club or the Raspberry Pi Foundation.' }
      ]
    },
    {
      id: 'ready', tint: 'deep', eyebrow: 'Ready for more?',
      h2: 'Signs a child is ready for the next step after a coding club',
      lede: 'The club leaders themselves see it. In the Foundation\'s 2023 survey, "Almost 90% of club leaders" agreed that after attending a club, young people are interested in more learning about computing and programming.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Scratch has run out of surprises', p: 'The child has made the games, the quizzes and the animations, and now copies projects rather than inventing them. That is not boredom with coding; it is readiness for typed code.' },
          { h3: 'The questions got harder', p: 'Why does this loop never stop? How does a game remember a high score? A mentor with twenty children in the room cannot always stop to explain, and the child notices.' },
          { h3: 'Python and AI keep coming up', p: 'Friends, school or the news mention Python and AI, and the child wants the real thing. Club leaders in the same survey said they would like to offer more AI activities themselves.' }
        ] },
        { kind: 'table', mt: true, caption: 'A coding club and a weekly class, side by side', head: ['', 'A free coding club', 'A weekly live class'], rows: [
          ['Cost', 'Free', 'Paid monthly, after a free first class'],
          ['Who helps', 'Volunteer mentors, often parents and professionals giving their time', 'A teacher whose job is to teach this learner'],
          ['How learning happens', 'Learning from each other, with mentors on hand', 'A planned path, placed by level, with each step checked'],
          ['Who is in the room', 'Young people of many ages and levels', 'Five to ten learners at the same stage, or one to one'],
          ['What it builds best', 'Confidence, creativity and friendship around technology', 'Steady progress from blocks to Python, data and AI']
        ] },
        { kind: 'source', html: 'The table compares two kinds of help, not two organisations. It makes no claim about any particular club, which each set their own activities.' }
      ]
    },
    {
      id: 'bridge', tint: 'tint', eyebrow: 'The next step',
      h2: 'From Scratch to Python to AI: the bridge after the club',
      lede: 'The jump from dragging blocks to typing code is where many young coders stall. Taken in the right order, it is not a jump at all.',
      body: [
        { kind: 'table', caption: 'How a club coder moves on, step by step', head: ['Step', 'What changes', 'What the child makes'], rows: [
          ['1. Scratch, explained', 'The child explains their own Scratch projects out loud, block by block', 'A game they can describe as a list of rules'],
          ['2. The same idea, typed', 'The rules of a familiar Scratch game are rewritten in Python', 'Their first typed game, recognisably their own'],
          ['3. Real Python', 'Loops, functions and lists, practised until they stop being new', 'Small tools and puzzles they chose themselves'],
          ['4. Data', 'Reading a small file, counting and drawing a chart', 'A chart about something they care about'],
          ['5. A first AI', 'Teaching a program to recognise examples, then testing it', 'A model that learns, and a sentence about where it fails']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The second step is the secret. Rewriting a Scratch game the child already knows means the only new thing is the typing. Once a familiar game works in Python, the child believes typed code is theirs, and everything after it goes faster.',
            'AI comes last on purpose. A child who can already read a program can understand what a learning program does, and can see when it gets things wrong.'
          ],
          right: [
            'Many families keep the club going alongside the class. The club stays the social, creative place; the class supplies the steady path and a teacher who reads the code. A child who brings a Python project to the Dojo is often the one helping others with it.',
            'If the club is ending for a child because of age, a move or a timetable, a weekly class keeps the habit going while it is still fresh.'
          ] }
      ]
    },
    {
      id: 'honest', tint: '', eyebrow: 'Plainly',
      h2: 'What we are, and what we are not',
      lede: 'A few facts families should have before choosing.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Not connected with CoderDojo', p: 'Modern Age Coders has no link with CoderDojo, Code Club or the Raspberry Pi Foundation. We mention them because many Irish children start there, and we respect what they do.' },
          { h3: 'A paid class, after a free one', p: 'Clubs are free and should stay that way. Our first class is free too; after it, classes are paid monthly in US dollars, at the same rate for every country outside India.' },
          { h3: 'Online, from India', p: 'Our teachers work from India. Irish time is five and a half hours behind India time in winter and four and a half in summer, so classes run after school or at the weekend, Irish time.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The ladder',
    h2: 'Five rungs from club projects to a first AI',
    lede: 'The free first class shows which rung a club coder is already on. Most start higher than their parents expect.',
    table: { caption: 'The climb after a coding club', head: ['Rung', 'The child can'], rows: [
      ['1. Explain', 'Describe what each part of their own Scratch project does'],
      ['2. Translate', 'Rebuild a familiar Scratch game in typed Python'],
      ['3. Build', 'Write small Python programs of their own and fix their mistakes'],
      ['4. Measure', 'Read a small dataset, count, chart and describe it honestly'],
      ['5. Teach a machine', 'Train a simple model and say where it goes wrong']
    ] },
    left: { h3: 'Why the child explains first', ps: [
      'A child who can explain their Scratch project already thinks like a programmer. Saying it out loud turns the blocks into rules, and rules are what Python is written in.',
      'The whole order of subjects is on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Ages and pace', ps: [
      'Club coders aged about nine to twelve usually reach the third rung within a school year. Teenagers from a club often move faster and head on towards data and AI.',
      'For the Irish school years around it, see <a class="ag-inline-link" href="/best-online-coding-classes-ireland">the best online coding classes in Ireland</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine live courses for young coders moving on',
    lede: 'Grouped by where a club coder usually is. A card opens the syllabus; the free first class decides the starting point.',
    bands: [
      { num: 'I', h3: 'Beyond Scratch', sub: 'Games and stories, finished properly', courses: [
        { code: 'NEXT / KIDS / 01', slug: 'game-development-masterclass-for-kids', title: 'Game Development for Kids', blurb: 'Complete games with levels, scores and rules.' },
        { code: 'NEXT / KIDS / 02', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Vibe Coding for Kids', blurb: 'Scratch and games with careful AI help.' },
        { code: 'NEXT / KIDS / 03', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox Game Coding for Kids', blurb: 'Typed code in Lua, inside a world children already know.' }
      ] },
      { num: 'II', h3: 'First typed code', sub: 'Python, the web and AI for children', courses: [
        { code: 'NEXT / TYPE / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'The step from blocks to Python.' },
        { code: 'NEXT / TYPE / 02', slug: 'kids-ai-web-development-course', title: 'Web and AI for Kids', blurb: 'A first website, built line by line.' },
        { code: 'NEXT / TYPE / 03', slug: 'ai-literacy-for-kids-course', title: 'AI Literacy for Kids', blurb: 'What AI is, how it learns and where it fails.' }
      ] },
      { num: 'III', h3: 'Teenagers from a club', sub: 'The full language, data and AI', courses: [
        { code: 'NEXT / TEEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'The whole language, learned for depth.' },
        { code: 'NEXT / TEEN / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and Machine Learning for Teens', blurb: 'Models trained and tested properly.' },
        { code: 'NEXT / TEEN / 03', slug: 'complete-app-development-masterclass-for-teens', title: 'App Development for Teens', blurb: 'A real app, often a first public project.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How the classes run',
    h2: 'A weekly class that sits beside the club',
    lede: 'Classes are live, taught from India at a fixed hour in Irish time. Irish time runs five and a half hours behind India time in winter and four and a half in summer, so most children join after school or on a weekend morning, on a different day from their club.',
    slots: [
      { time: 'After school', l: 'Late afternoon, Irish time, on a weekday.' },
      { time: 'Saturday morning', l: 'For longer game and project sessions.' },
      { time: 'Sunday', l: 'For families whose Saturdays are taken.' }
    ],
    cells: [
      { h3: 'A free first class', p: 'The child shows the teacher a club project and explains it, and the teacher places them on the right rung.' },
      { h3: 'The same teacher', p: 'One teacher who gets to know the child\'s projects, week after week.' },
      { h3: 'Groups by level', p: 'Five to ten children at the same stage, from Ireland and other countries.' },
      { h3: 'One to one if preferred', p: 'For a child who is far ahead, or who learns best with a teacher alone.' },
      { h3: 'Parents kept informed', p: 'Families hear what their child has built and what comes next.' },
      { h3: 'Projects that last', p: 'Work is saved in the child\'s own space, ready to show at the club or at school.' }
    ]
  },

  projectsH2: 'Projects our students built after their first steps',
  projectsLede: 'Four live projects by our students. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Copied from Google as written. We do not write or pay for reviews.',

  fees: {
    h2: 'Fees',
    lede: 'Monthly, in US dollars, the one rate we use for every country outside India. No enrolment fee and nothing to sign for a year.',
    free: ['A real class with a teacher', 'An honest placement on the ladder', 'No card needed'],
    group: ['Five to ten children at one level', 'The same teacher each week', 'Projects reviewed weekly', 'A certificate at the end'],
    one: ['A teacher for one child', 'Paced to the child', 'Good for fast movers']
  },

  faq: {
    eyebrow: 'Questions from club families',
    h2: 'What parents ask when a child outgrows a coding club',
    items: [
      { q: 'Are you part of CoderDojo?', a: 'No. Modern Age Coders is not connected with CoderDojo, Code Club or the Raspberry Pi Foundation. We are a separate, paid online school, and we recommend the clubs warmly.' },
      { q: 'Should my child stop going to the club?', a: 'Usually not. Many children keep the club for friendship and creativity and add a weekly class for steady progress. Choose a class day that does not clash with the club.' },
      { q: 'When did CoderDojo start?', a: 'The first CoderDojo took place in July 2011 at the National Software Centre in Cork, started by James Whelton and Bill Liao, according to the Raspberry Pi Foundation.' },
      { q: 'How many CoderDojos are there now?', a: 'The Raspberry Pi Foundation said in July 2026 that there are over 600 active CoderDojos around the world, part of the Code Club movement of more than 10,000 clubs.' },
      { q: 'My child only knows Scratch. Is that enough to start?', a: 'Yes. Scratch is a strong start. The first step in our classes is rebuilding a familiar Scratch game in Python, so nothing new arrives except the typing.' },
      { q: 'What age is right for the next step?', a: 'Club coders usually move to typed code at about nine or ten. Teenagers from a club can start straight on Python and move towards data and AI.' },
      { q: 'Will my child use AI tools?', a: 'Yes, once they can read and explain their own code. AI comes after the basics, so the child understands what the tool is doing.' },
      { q: 'What does it cost?', a: 'The first class is free. After it, a group place is USD 100 a month and one-to-one lessons are USD 150 a month, charged in US dollars, with no enrolment fee and no yearly contract.' },
      { q: 'When are classes, in Irish time?', a: 'At a weekly hour agreed in the free first class, usually after school or at the weekend. Irish time is five and a half hours behind India time in winter and four and a half in summer.' },
      { q: 'What happens after I send the form?', a: 'We ring back at a suitable Irish hour to book the free first class. You pay nothing unless your child continues.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for young Irish coders',
    lede: 'Pages for the next few years of a young coder\'s path.',
    items: [
      { href: '/best-online-coding-classes-ireland', label: 'Best online coding classes in Ireland', p: 'Where coding sits in Irish schools, stage by stage.' },
      { href: '/understand-the-code-dont-copy-paste-ireland', label: 'Understand the code, do not copy-paste', p: 'Using AI tools and still owning the code.' },
      { href: '/best-coding-class-in-the-world', label: 'The best coding class in the world', p: 'Eight tests any class should pass.' },
      { href: '/coding-classes-in-ireland', label: 'Coding classes in Ireland', p: 'The national page.' },
      { href: '/best-coding-class-in-dublin', label: 'Coding classes in Dublin', p: 'For families in the capital.' },
      { href: '/coding-roadmap', label: 'The coding roadmap', p: 'What comes after what.' }
    ]
  },

  start: {
    h2: 'Bring a club project to a free first class',
    lede: 'Leave a number and we will ring at a suitable Irish hour. In the first class your child shows the teacher something they made at the club, explains it, and finds out what the next step looks like.',
    readFirst: 'Would you like to read first? See <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, the <a class="ag-inline-link" href="/courses">course pages</a>, or the <a class="ag-inline-link" href="/coding-roadmap">roadmap from blocks to AI</a>.',
    note: 'WhatsApp from an Irish phone is free and usually the quickest way to reach us. Our number is Indian, as we say everywhere; there is no Irish office.',
    formNote: 'No card and no commitment. One call to book.'
  },

  footer: {
    cols: [
      { h4: 'Ireland', links: [
        { href: '/coding-classes-in-ireland', label: 'Coding classes in Ireland' },
        { href: '/best-online-coding-classes-ireland', label: 'Best online classes, Ireland' },
        { href: '/best-coding-class-in-dublin', label: 'Dublin' },
        { href: '/understand-the-code-dont-copy-paste-ireland', label: 'Understand the code' }
      ] },
      { h4: 'For young coders', links: [
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/best-coding-class-in-the-world', label: 'Eight tests for a class' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student labs' }
      ] }
    ],
    bottomRight: 'The step after the club, on Irish time'
  },

  personalityCss: `
.ag-root.ag-acq .ag-hero-grid { gap: clamp(1.1rem, 3vw, 2.6rem); }
.ag-root.ag-acq .ag-hero h1 { letter-spacing: -0.02em; }
.ag-root.ag-acq .ag-capsule { border-left-width: 5px; }
.ag-root.ag-acq .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-acq .ag-table caption { text-align: left; }
.ag-root.ag-acq .ag-band-head h3 { letter-spacing: -0.004em; }
.ag-root.ag-acq .ag-spec dt { letter-spacing: 0.1em; }
.ag-root.ag-acq .ag-slots { gap: 1.2rem; }
`,

  mustMention: ['July 2011', 'National Software Centre', 'James Whelton', 'Bill Liao', 'non-formal education', 'over 600 active CoderDojos', '26 May 2017', 'independent charity', 'Almost 90% of club leaders', 'over 95%', 'volunteer mentors']
};
