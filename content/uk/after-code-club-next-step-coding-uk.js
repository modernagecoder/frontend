'use strict';
// After Code Club: the next step in coding, UK (ag- community door; UK cluster Phase 3).
// Sources, read raw on 21 September 2026 (pages via curl):
//  - Code Club home (codeclub.org/en): "2+ million young people involved in Code Club over 10 years"; "100+
//    countries have active Code Clubs"; "Code Clubs are free and open to all school-aged young people.";
//    "You don't need any coding experience to run a Code Club."; hundreds of free projects.
//  - Code Club About: "Code Club is a part of the Raspberry Pi Foundation, an educational charity".
//  - Raspberry Pi Foundation, Learn page: club mentors help young people progress through free, step-by-step
//    project guides "to create games, animations, and web pages".
//  - Raspberry Pi Foundation blog, 7 October 2024, "How fun-filled Code Clubs drive learning: New evidence":
//    "Founded in the UK in 2012"; the Durham University Evidence Centre for Education independent evaluation:
//    young people "build their coding skills", "become more confident in learning coding, grow their interest
//    in it, and develop a sense of belonging"; "Researchers observed how each young person has their
//    individual projects to work on, which promote a sense of ownership and personalised learning"; clubs
//    help young people who "experience difficulties in formal classroom settings"; creator quote "Coding is
//    really fun when I know what to do, but sometimes it is hard. But I always keep trying."
//  - Raspberry Pi Foundation blog, 10 June 2025, Code Club annual survey report 2025: "775 mentors"; "7,494
//    Code Clubs have confirmed they have been active in the last two years, with clubs in 102 countries";
//    "We estimate 257,000 creators are involved in clubs"; clubs "run by teachers, educators, and volunteers
//    from all walks of life"; 96% of mentors agree creators increased skills (mentor-reported).
//  - Raspberry Pi Foundation blog, 3 November 2015 (merger): Code Clubs then focused on "9-11 year olds".
// Spine: Code Club works, and it is designed to be light. Free, volunteer-run, guided by
// step-by-step project guides, with mentors who need no coding experience. A child who outgrows the guides
// needs different things: a teacher who reads their code, a typed language, and projects with no guide.
// Not affiliated with Code Club or the Raspberry Pi Foundation; the page praises the model on the evidence.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'guide', tag: 'AFTER CODE CLUB', blurb: 'Code Club works, and it is built to be light. What a child who has outgrown the project guides needs next.' },
  slug: 'after-code-club-next-step-coding-uk',
  code: 'acc',
  accent: '#2A4C10',
  accentRationale: 'After Code Club: a deep moss green from the solver (7.97:1 on every paper tint, dE 7.6 from the nearest used accent), chosen as a calm, growing colour for a page about the next stage',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'After Code Club: the next step',
  title: 'After Code Club: The Next Step in Coding, UK',
  description: 'Your child loved Code Club and has outgrown the project guides. What Code Club does well, what the next step needs, and how to move from Scratch to Python.',
  ogDescription: 'Code Club is free and volunteer-run, and the evidence says it works. When a child outgrows the project guides, the next step looks different.',
  twitterDescription: 'After Code Club: what the evidence says clubs do well, and what a child who has outgrown the guides needs next.',
  pageName: 'After Code Club: The Next Step in Coding',
  webPageDescription: 'Live online coding lessons for UK children who have outgrown a Code Club, built on the Raspberry Pi Foundation\'s published evidence about how clubs work.',
  courseDescription: 'Live online coding for children moving on from Code Club: deeper Scratch, typed Python, web pages and games, with a teacher who reads and reviews their code.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'After Code Club',
  navLinks: [
    { href: '#works', label: 'What clubs do well' },
    { href: '#outgrown', label: 'Signs of outgrowing' },
    { href: '#next', label: 'The next step' },
    { href: '#bridge', label: 'Scratch to Python' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'UK &middot; Ages 9 to 13 &middot; Community coding',
  h1: 'After Code Club: the next step in coding',
  lede: 'Code Club started in the UK in 2012 and has since involved, by its own count, more than two million young people. It is free, it meets in schools, libraries and youth clubs, and it is run by teachers and volunteers, many of whom are not programmers; Code Club says plainly that "You don\'t need any coding experience to run a Code Club." Children work through step-by-step project guides at their own pace, and an independent evaluation by Durham University found they build real coding skills, confidence and a sense of belonging. That design is its strength. It is also why some children eventually outgrow it: they finish the guides, want to build something no guide describes, and need someone who can read their code and tell them what to try next. This page is about that moment, and what a sensible next step looks like.',
  secondaryCta: { href: '#outgrown', label: 'Signs of outgrowing' },
  wa: 'Hello Modern Age Coders, my child has been to Code Club and I would like a free first lesson for the next step.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Built on the Raspberry Pi Foundation\'s published evidence',
  spec: [
    ['For', 'Children who have outgrown a Code Club'],
    ['Usual age', 'About 9 to 13'],
    ['Code Club founded', 'UK, 2012'],
    ['Active clubs, 2025 survey', '7,494 in 102 countries'],
    ['Next step', 'A teacher who reads the code'],
    ['Languages', 'Deeper Scratch, then Python and web'],
    ['Group', 'Five to ten at one level'],
    ['Start', 'One free lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Code Club is a free network of coding clubs, founded in the UK in 2012 and now part of the Raspberry Pi Foundation, where school-aged children work through step-by-step project guides with volunteer or teacher mentors. The Foundation\'s 2025 survey counted 7,494 clubs active in the previous two years, in 102 countries, and an independent 2024 evaluation by Durham University found that children who attend build coding skills, confidence, interest and a sense of belonging. Because clubs are free and run by mentors who need no coding experience, a child who finishes the guides and wants to build their own projects may need more: a teacher who reads and reviews their code, a move from Scratch to a typed language such as Python, and projects with no instructions to follow. Modern Age Coders offers that next step in small live groups. We are not connected with Code Club. The first lesson is free, then USD 100 a month in a group or USD 150 one to one.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for life after Code Club',
    lede: 'Deeper Scratch for younger children, typed Python for the ready, and web pages for the curious. Each card opens its syllabus.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'CC / 01', title: 'Python for Kids', note: 'Typed Python for ages 10 to 13, the usual next language after Scratch.' },
      { course: 'scratch-programming-complete-course', code: 'CC / 02', title: 'Scratch, Complete', note: 'For younger children who want to go far beyond the project guides before changing language.' },
      { course: 'html-css-course-for-beginners-build-real-websites', code: 'CC / 03', title: 'HTML and CSS', note: 'Real web pages, for children who enjoyed the web projects at club.' }
    ]
  },

  sections: [
    {
      id: 'works', tint: 'tint', eyebrow: 'What clubs do well',
      h2: 'Code Club works, and the evidence says why',
      lede: 'From the Raspberry Pi Foundation\'s published survey and the independent evaluation it commissioned.',
      body: [
        { kind: 'table', caption: 'Code Club in numbers, as published', head: ['Measure', 'Figure'], rows: [
          ['Founded', 'In the UK, in 2012'],
          ['Young people involved', 'More than 2 million over its history, by Code Club\'s count'],
          ['Clubs active in the last two years', '7,494, in 102 countries (2025 survey)'],
          ['Creators in clubs', 'An estimated 257,000 (2025 survey)'],
          ['Cost to families', 'Free']
        ] },
        { kind: 'p', html: 'In 2024 the Durham University Evidence Centre for Education evaluated Code Club independently. The Foundation reports that it found children "build their coding skills", "become more confident in learning coding, grow their interest in it, and develop a sense of belonging". The researchers also noted the structure behind that: "each young person has their individual projects to work on, which promote a sense of ownership and personalised learning", alongside chances to collaborate and celebrate each other\'s work.' },
        { kind: 'two', mt: true,
          leftH3: 'Why the design works',
          left: [
            'Children pick projects and work at their own pace, so nobody is held back or left behind. The guides are written by specialist educators and are safe and age-appropriate.',
            'The evaluation also found clubs can suit children who find ordinary classrooms hard, which is a real gift for some families.'
          ],
          rightH3: 'Why it is kept light',
          right: [
            'Clubs are free and run by teachers, educators and volunteers from all walks of life. To make that possible, the guides carry the teaching, so mentors need no coding background.',
            'That is exactly what lets Code Club reach so many children. It also sets a natural ceiling for a child who races ahead.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://codeclub.org/en" rel="noopener" target="_blank">Code Club</a> and its About page, the Raspberry Pi Foundation\'s Learn page, and the Foundation\'s blog posts of 7 October 2024 (the Durham evaluation) and 10 June 2025 (the annual survey report). Survey figures come from mentors\' responses and the Foundation\'s estimates. We have no connection with Code Club or the Foundation.' }
      ]
    },
    {
      id: 'outgrown', tint: 'deep', eyebrow: 'Signs of outgrowing',
      h2: 'How to tell a child has outgrown the guides',
      lede: 'None of these means the club has failed. They mean it has done its job.',
      body: [
        { kind: 'table', caption: 'Signs a child is ready for more', head: ['What you notice', 'What it usually means'], rows: [
          ['They finish projects in one session and ask what is next', 'The guides no longer stretch them'],
          ['They change a project so much it no longer matches the guide', 'They want to design, not follow'],
          ['They ask how a game they play was made', 'They are ready for concepts the guides only touch'],
          ['They start building at home without instructions, and get stuck', 'They need someone who can read their code'],
          ['They are bored by drag-and-drop blocks', 'They may be ready to type a language such as Python'],
          ['A mentor says they know more than the mentor', 'The club\'s volunteer model has reached its limit for them']
        ] },
        { kind: 'p', html: 'One creator quoted in the Foundation\'s evaluation post put the joy and the frustration together: "Coding is really fun when I know what to do, but sometimes it is hard. But I always keep trying." The second half of that sentence is the moment that matters. When a child is stuck on their own idea, not a guide\'s, what helps is someone who can look at the actual code and ask the right question.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Keep the club', p: 'Outgrowing the guides is not a reason to leave. Many children keep the friendships and the fun of club while learning more elsewhere.' },
          { h3: 'Add depth, not pressure', p: 'The next step should feel like more of what they love, a bigger project and a better tool, not like extra homework.' },
          { h3: 'Let them lead', p: 'Children who have been choosing their own projects for years thrive when they keep choosing, with a teacher steering the skills.' }
        ] }
      ]
    },
    {
      id: 'next', tint: '', eyebrow: 'The next step',
      h2: 'What the next step needs',
      lede: 'Four things a child who has outgrown a club usually needs, and why each matters.',
      body: [
        { kind: 'table', caption: 'From club to the next stage', head: ['At club', 'Next step', 'Why'], rows: [
          ['Step-by-step project guides', 'Projects with no guide, designed by the child', 'Designing is the skill that follows, and guides cannot teach it'],
          ['A mentor who may not code', 'A teacher who reads and reviews the code', 'Stuck children need someone who understands what they wrote'],
          ['Sessions whenever the club meets', 'Regular lessons that build week on week', 'Concepts like variables, lists and functions need sequence'],
          ['Mostly Scratch and guided web or Python', 'Typed Python, and HTML and CSS written from scratch', 'Typed languages open the next level of projects']
        ] },
        { kind: 'p', html: 'The table is not a criticism. Code Club is built for breadth: to reach as many children as possible for free, with volunteers. The next step is built for depth, for a smaller number of children who are ready to go further. Both are good; they do different jobs.' },
        { kind: 'two', mt: true,
          leftH3: 'What we offer',
          left: [
            'Small live groups of five to ten children at the same level, with a teacher who reads every child\'s code and gives specific feedback.',
            'Projects the children choose, with the skills taught in order so each week builds on the last.'
          ],
          rightH3: 'What we are not',
          right: [
            'A replacement for Code Club, or connected with it. We are a separate paid service, and many of our students keep going to their club.',
            'A shortcut. Progress still comes from a child writing code, getting it wrong and fixing it.'
          ] }
      ]
    },
    {
      id: 'bridge', tint: 'tint', eyebrow: 'Scratch to Python',
      h2: 'Crossing from Scratch to Python',
      lede: 'The change most families ask about, and how to make it without losing the fun.',
      body: [
        { kind: 'table', caption: 'What carries over, and what is new', head: ['Carries straight over', 'New in Python'], rows: [
          ['Sequences of instructions', 'Typing exactly, with spelling and indentation that matter'],
          ['Loops and if-statements', 'Reading error messages and fixing them'],
          ['Variables', 'Lists and dictionaries for storing lots of data'],
          ['Making a game from an idea', 'Building programs in text files that grow over time']
        ] },
        { kind: 'p', html: 'Children who have made games in Scratch already understand loops, conditions and variables; they have used them for years. What is new is the typing, the precision and the error messages. We start Python with small programs that echo things children built in Scratch, so the ideas feel familiar while the tool changes, and we keep projects playful: quizzes, simple games, drawings with code.' },
        { kind: 'p', html: 'For children in upper primary, <a class="ag-inline-link" href="/ks2-coding-lessons-online">the Key Stage 2 coding page</a> covers what the curriculum expects. Children who own a micro:bit or a Raspberry Pi may like <a class="ag-inline-link" href="/after-microbit-next-step-python-uk">the page on the step after the micro:bit</a>, and competitive children <a class="ag-inline-link" href="/first-competitions-for-primary-school-children-uk">first competitions for primary children</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Four rungs after Code Club',
    lede: 'Placement follows what a child can build without a guide, which a first lesson shows quickly.',
    table: { caption: 'From guided projects to independent ones', head: ['Rung', 'Usually', 'What should be true'], rows: [
      ['1. Beyond the guides', 'Ages 9 to 11', 'Scratch projects designed from scratch, with variables, broadcasts and clones used on purpose'],
      ['2. First typed code', 'Ages 10 to 12', 'Short Python programs typed and debugged, reading error messages without panic'],
      ['3. Structures', 'Ages 11 to 13', 'Lists, functions and simple files, used to build a program that grows'],
      ['4. Own projects', 'Ages 12 and up', 'A multi-week project planned, built and improved with a teacher\'s review']
    ] },
    left: { h3: 'Rung one can take a while', ps: [
      'Some children need a term of deeper Scratch before typing feels natural. That is time well spent.',
      'The wider order of topics is on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Rung four is the goal', ps: [
      'A child who can plan and finish their own project has crossed from following to making.',
      'From there, the path leads to GCSE computing and beyond.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for children moving on',
    lede: 'Grouped by where a child is. The free lesson places them.',
    bands: [
      { num: 'I', h3: 'Deeper and first typed', sub: 'Ages 9 to 13', courses: [
        { code: 'UK / CC1 / 01', slug: 'scratch-programming-complete-course', title: 'Scratch, complete', blurb: 'Far beyond the guides, with design at the centre.' },
        { code: 'UK / CC1 / 02', slug: 'python-ai-kids-masterclass', title: 'Python for kids', blurb: 'The first typed language, taught gently.' },
        { code: 'UK / CC1 / 03', slug: 'game-development-masterclass-for-kids', title: 'Game development for kids', blurb: 'Bigger games than any club guide.' }
      ] },
      { num: 'II', h3: 'Making things', sub: 'Web, maths and logic', courses: [
        { code: 'UK / CC2 / 01', slug: 'html-css-course-for-beginners-build-real-websites', title: 'HTML and CSS', blurb: 'Websites written line by line.' },
        { code: 'UK / CC2 / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'From age 10, maths explored in code.' },
        { code: 'UK / CC2 / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Logic puzzles that sharpen thinking.' }
      ] },
      { num: 'III', h3: 'For teenagers', sub: 'Ages 13 and up', courses: [
        { code: 'UK / CC3 / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'From basics to real programs and apps.' },
        { code: 'UK / CC3 / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Interactive web pages and games.' },
        { code: 'UK / CC3 / 03', slug: 'complete-game-development-masterclass-for-teens', title: 'Game development for teens', blurb: 'Real games in a professional engine.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons work',
    h2: 'A teacher who reads the code',
    lede: 'Our teachers are in India, which keeps one time all year, so the UK is four and a half hours behind in summer and five and a half in winter. Lessons are arranged in UK time.',
    slots: [
      { time: 'After school', l: 'Short, lively sessions for this age.' },
      { time: 'Early evening', l: 'Before tea, on a club-free day.' },
      { time: 'Weekend', l: 'Longer project time for keen builders.' }
    ],
    cells: [
      { h3: 'Code actually read', p: 'Every child\'s program looked at by the teacher, with specific next steps.' },
      { h3: 'Their own projects', p: 'Children choose what to build; the teacher chooses which skill it needs.' },
      { h3: 'Skills in order', p: 'Variables, loops, lists and functions taught so each lesson builds on the last.' },
      { h3: 'Stuck is normal', p: 'Getting stuck treated as the lesson, not a failure, with a question rather than an answer.' },
      { h3: 'Show and tell', p: 'Children share what they made, as they did at club.' },
      { h3: 'Small groups', p: 'Five to ten children at one level, so everyone is seen.' }
    ]
  },

  projectsH2: 'Things our young students have built',
  projectsLede: 'Four projects from lessons, made by the children themselves. More in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents\' Google reviews, copied as written.',

  fees: {
    h2: 'Fees for next-step coding lessons',
    lede: 'Unlike Code Club, this is a paid service. We charge monthly in US dollars, at a single rate for families outside India; a first lesson costs nothing, and invoices start only after you choose a course and a weekly slot.',
    free: ['A lesson built around what your child made at club', 'An honest view of the right next step', 'A phone number is all we need'],
    group: ['Five to ten children at one level', 'The same teacher each week', 'Code reviewed in every lesson', 'Projects the children choose'],
    one: ['A teacher for one child', 'Paced to a child who races ahead', 'Suits a child with a big project in mind']
  },

  faq: {
    eyebrow: 'Questions about life after Code Club',
    h2: 'What parents ask',
    items: [
      { q: 'What is Code Club?', a: 'A free network of coding clubs for school-aged children, founded in the UK in 2012 and part of the Raspberry Pi Foundation. Children work through step-by-step project guides with teacher or volunteer mentors.' },
      { q: 'Does Code Club actually work?', a: 'The evidence says yes. An independent 2024 evaluation by Durham University found children build coding skills, confidence, interest and a sense of belonging.' },
      { q: 'How do I know my child has outgrown it?', a: 'Common signs are finishing projects too quickly, changing them beyond the guide, building at home and getting stuck, or being bored by blocks. None of these means the club failed; it did its job.' },
      { q: 'Should my child stop going to Code Club?', a: 'Not necessarily. Many children keep the friendships and fun of club while learning more elsewhere. The two do different jobs.' },
      { q: 'When should my child move from Scratch to Python?', a: 'When blocks start to feel limiting and they can plan a project, often between 10 and 12. Some children benefit from more time in deeper Scratch first.' },
      { q: 'Are you connected with Code Club?', a: 'No. We are a separate, paid service with no connection to Code Club or the Raspberry Pi Foundation. We describe their programme from their own published material.' },
      { q: 'What does your next step offer that a club cannot?', a: 'A teacher who reads and reviews each child\'s code, skills taught in sequence week by week, and support for projects no guide describes.' },
      { q: 'What ages do you teach?', a: 'Children from about 6 upward, and for this next step mostly ages 9 to 13, grouped by what they can already build rather than by age alone.' },
      { q: 'Is it online?', a: 'Yes, live and online, in small groups or one to one, at UK times that fit around school and club.' },
      { q: 'What does it cost?', a: 'Nothing for the first lesson. Lessons after that cost a monthly fee in US dollars, less in a group than one to one, with both amounts in the fees section; we never ask for payment up front.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for young coders in the UK',
    lede: 'The primary curriculum, hardware, and competitions to try.',
    items: [
      { href: '/after-microbit-next-step-python-uk', label: 'After the micro:bit', p: 'The next step for children who loved school micro:bits.' },
      { href: '/ks2-coding-lessons-online', label: 'Key Stage 2 coding lessons', p: 'What the curriculum expects from 7 to 11.' },
      { href: '/first-competitions-for-primary-school-children-uk', label: 'First competitions', p: 'Gentle contests for primary children.' },
      { href: '/best-python-classes-online-uk', label: 'Python classes online', p: 'How we teach Python to a high standard.' },
      { href: '/ai-classes-for-kids-uk', label: 'AI classes for kids', p: 'What children can safely learn about AI.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Every UK page we publish.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Leave a number and we will call at a UK time that suits. Bring something your child made at club; the lesson starts from it and ends with a clear next step.',
    readFirst: 'Curious before you call? Our <a class="ag-inline-link" href="/courses">courses</a> each list a full syllabus, the <a class="ag-inline-link" href="/how-we-teach">teaching approach</a> page explains what we do in lessons, and <a class="ag-inline-link" href="/student-labs">student labs</a> gathers projects children have made.',
    note: 'Send a WhatsApp for the quickest answer; it is free from a UK phone. The team replying is in India, so the number opens with +91.',
    formNote: 'No card, no contract; one reply with a time.'
  },

  footer: {
    cols: [
      { h4: 'Young coders', links: [
        { href: '/after-microbit-next-step-python-uk', label: 'After the micro:bit' },
        { href: '/ks2-coding-lessons-online', label: 'KS2 coding lessons' },
        { href: '/first-competitions-for-primary-school-children-uk', label: 'First competitions' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK coding classes' }
      ] },
      { h4: 'More', links: [
        { href: '/ai-classes-for-kids-uk', label: 'AI classes for kids' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'The next step, live on UK time'
  },

  personalityCss: `
.ag-root.ag-acc .ag-hero h1 { letter-spacing: -0.022em; font-weight: 710; }
.ag-root.ag-acc .ag-capsule { border-left-width: 5px; border-radius: 10px; }
.ag-root.ag-acc .ag-section-head h2 { max-width: 27ch; }
.ag-root.ag-acc .ag-table caption { text-align: left; font-weight: 660; }
.ag-root.ag-acc .ag-table td:first-child { font-weight: 620; }
.ag-root.ag-acc .ag-band-head h3 { letter-spacing: -0.011em; }
`,

  mustMention: ['Code Club', 'Raspberry Pi Foundation', '2012', '7,494', 'Durham University', 'project guides', 'Scratch', 'Python', 'no coding experience', 'not connected'],

  dossier: {
    curriculumAuthority: 'UK community coding. Code Club (codeclub.org): "2+ million young people involved in Code Club over 10 years"; "100+ countries have active Code Clubs"; "Code Clubs are free and open to all school-aged young people."; "You don\'t need any coding experience to run a Code Club."; part of the Raspberry Pi Foundation, an educational charity. Raspberry Pi Foundation Learn page: step-by-step project guides "to create games, animations, and web pages". Raspberry Pi Foundation blog, 7 October 2024: "Founded in the UK in 2012"; Durham University Evidence Centre for Education independent evaluation: young people "build their coding skills", "become more confident in learning coding, grow their interest in it, and develop a sense of belonging"; "Researchers observed how each young person has their individual projects to work on, which promote a sense of ownership and personalised learning"; benefits for young people who "experience difficulties in formal classroom settings"; creator quote "Coding is really fun when I know what to do, but sometimes it is hard. But I always keep trying." Raspberry Pi Foundation blog, 10 June 2025, Code Club annual survey report: 775 mentors; "7,494 Code Clubs have confirmed they have been active in the last two years, with clubs in 102 countries"; "We estimate 257,000 creators are involved in clubs"; clubs run by "teachers, educators, and volunteers from all walks of life". 2015 merger post: clubs then focused on 9 to 11 year olds.',
    localProject: 'Code Club works, and it is designed to be light. The page sets out, from the Raspberry Pi Foundation\'s own published material, what Code Club is (founded in the UK in 2012, free, run by mentors who need no coding experience, using step-by-step project guides) and what the independent 2024 Durham evaluation found (skills, confidence, interest, belonging, individual projects). It then describes the signs that a child has outgrown the guides, what the next step needs (projects without guides, a teacher who reads the code, sequenced lessons, a typed language), and how to cross from Scratch to Python without losing the fun, while insisting the two do different jobs and that we have no connection with Code Club. Lesson family: a free community programme built for breadth, and the depth that follows it.',
    requiredMentions: ['Code Club', '7,494', 'Durham University', 'no coding experience'],
    sources: [
      { claim: 'Code Club home and About pages: reach, countries, free access, no coding experience needed to run a club, part of the Raspberry Pi Foundation.', url: 'https://codeclub.org/en' },
      { claim: 'Raspberry Pi Foundation blog, 7 October 2024: founding in the UK in 2012 and the Durham University Evidence Centre for Education evaluation findings.', url: 'https://www.raspberrypi.org/blog/how-fun-filled-code-clubs-drive-learning-new-evidence/' },
      { claim: 'Raspberry Pi Foundation blog, 10 June 2025: Code Club annual survey report 2025 figures.', url: 'https://www.raspberrypi.org/blog/discover-the-incredible-impact-of-code-club-the-code-club-annual-survey-report-2025/' },
      { claim: 'Raspberry Pi Foundation Learn page: step-by-step project guides for games, animations and web pages.', url: 'https://www.raspberrypi.org/learn/' }
    ],
    rejectedClaims: [
      'A current count of UK-only clubs or attendees: the latest figures read are global; older UK figures (2015) are not presented as current.',
      'The structure of the Foundation\'s project pathways: the pathway pages require JavaScript and were not read, so no pathway levels are described.',
      'Any claim that clubs fall short: the page presents the model as designed for breadth, on the evidence.',
      'Any affiliation with Code Club or the Raspberry Pi Foundation: none, stated on the page.',
      'Any promise of progress, which we decline.'
    ]
  }
};
