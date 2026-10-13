'use strict';
// Free coding classes for kids in Australia: what you actually get (ag- topic door; AU cluster Phase 2, row 29).
// Demand: en-AU autocomplete "coding classes for kids free", "free coding classes for kids near me".
// Sources, read raw on 7 October 2026:
//  - Code Club Australia home page and "For libraries" page (codeclubau.org): free, volunteer-led clubs for ages
//    8 to 13; over 165,000 Australian children, 1,300 clubs, 3,200 trained teachers; 13,000 active clubs worldwide;
//    250+ self-guided projects; computers can be shared; part of the Telstra Foundation; Moonhack.
//  - Digital Technologies Hub (Australian Government Department of Education), "After school activities and
//    courses" page: lists Code Camp, Code Club, code.org, Grok, Hour of Code and Junior Engineers; "Explore AI in
//    education": nine free modules, no log-in.
//  - hourofcode.com/au: the Hour of AI builds on the Hour of Code.
// Lesson family: a weighted decision matrix (two families score the same four options and get different winners).

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'guide', tag: 'FREE OPTIONS, KIDS', blurb: 'What free coding for Australian kids really includes: Code Club, self-guided projects, one-off activities and a free first lesson, compared honestly.' },
  slug: 'free-coding-classes-for-kids-australia-what-you-get',
  code: 'fcau',
  accent: '#385810',
  accentRationale: 'Free coding for kids, Australia: a muted olive chosen by hand, at least 11 RGB units from every accent in use and clear of the cyan and violet bands',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'Free coding classes for kids, Australia',
  title: 'Free Coding Classes for Kids in Australia: What You Get',
  description: 'Free coding for kids in Australia, compared honestly: Code Club, self-guided projects, Hour of Code and a free first lesson, with what each one gives and leaves out.',
  ogDescription: 'Australia has real free coding options for children. This guide sets out what each one includes, what it leaves out, and how a family can decide between them.',
  twitterDescription: 'Free coding for Australian kids, compared honestly: Code Club, self-guided projects, Hour of Code and a free first lesson.',
  pageName: 'Free Coding Classes for Kids in Australia',
  webPageDescription: 'A plain guide to free coding options for Australian children: volunteer clubs, self-guided projects, one-off activities and free trial lessons, with a decision method for families.',
  courseDescription: 'Live online coding for Australian children aged 6 to 12, starting with a free first lesson: Scratch, Python, web pages, apps and AI literacy.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'Free coding for kids',
  navLinks: [
    { href: '#options', label: 'Free options' },
    { href: '#code-club', label: 'Code Club' },
    { href: '#gaps', label: 'What free leaves out' },
    { href: '#decide', label: 'How to decide' },
    { href: '#first-lesson', label: 'Free first lesson' }
  ],
  eyebrow: 'Australia &middot; Ages 6 to 13 &middot; Free options compared',
  h1: 'Free coding classes for kids in Australia',
  lede: 'Plenty of Australian children learn their first lines of code without their family spending anything, and that is a good thing. Volunteer clubs, government resources and short global activities are all there for the taking. What a parent searching for free coding classes rarely sees is a plain account of what each option contains: how often an adult is in the room, whether the projects build on one another, and what happens when a child gets stuck. This page gives that account, including where our own free first lesson fits, and it ends with a short program a child can write to help the family choose.',
  secondaryCta: { href: '#options', label: 'Free options' },
  wa: 'Hello Modern Age Coders, we are looking at free coding options for our child in Australia. Could we book the free first lesson to see how a class works?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; a real teacher, live, every lesson',
  spec: [
    ['For', 'Children aged 6 to 13'],
    ['Free club', 'Code Club Australia, ages 8 to 13'],
    ['Free at home', 'Self-guided projects online'],
    ['Free one-off', 'Hour of Code and Hour of AI'],
    ['Our free part', 'A full first lesson'],
    ['After that', 'Monthly fees, no lock-in'],
    ['Format', 'Live online video'],
    ['Group', 'Fifteen to twenty, or one to one']
  ],
  capsuleQ: 'In short',
  capsule: 'Free coding for kids in Australia is real and worth using. Code Club Australia runs volunteer-led clubs for ages 8 to 13, the Australian Government\'s Digital Technologies Hub points families to after-school options, and global activities such as the Hour of Code cost nothing. Free options rarely include a regular teacher who reviews a child\'s work. Modern Age Coders offers a free first lesson so families can compare.',

  picks: {
    eyebrow: 'If you want more than free',
    h2: 'Three courses families move on to',
    lede: 'Most families start free and move to a class when a child wants more. These are the usual next steps; the free first lesson decides which one fits.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'FCAU / 01', title: 'Scratch, start to finish', note: 'Ages 6 to 12. For children who enjoyed a club or an Hour of Code and want to build complete games.' },
      { course: 'kids-coding-blocks-masterclass', code: 'FCAU / 02', title: 'A full year of young coding', note: 'Ages 6 to 12. A planned year that grows from blocks into apps and some early Python.' },
      { course: 'python-ai-kids-masterclass', code: 'FCAU / 03', title: 'Typed Python, with AI on the side', note: 'Ages 9 to 12. The step from blocks to typed code, taught live with feedback every week.' }
    ]
  },

  sections: [
    {
      id: 'options', tint: 'tint', eyebrow: 'Free options',
      h2: 'Where free coding actually happens in Australia',
      lede: 'Four kinds of free coding are open to Australian children. They differ less in price, since all are free to the family, than in how much adult support comes with them.',
      body: [
        { kind: 'table', caption: 'Free coding options for Australian children, as their organisers describe them', head: ['Option', 'Who runs it', 'What a child gets', 'How often'], rows: [
          ['A Code Club', 'Volunteers, often teachers, librarians or parents, with resources from Code Club Australia', 'Step-by-step projects in Scratch, Python, HTML and more, with an adult in the room', 'Usually weekly during term, if a club runs nearby'],
          ['Self-guided projects', 'The child, at home, using free online project libraries', 'Instructions to follow and finished games or pages to show', 'Whenever the child chooses'],
          ['One-off global activities', 'Schools, libraries or families, using Hour of Code or Hour of AI activities', 'A single hour of guided puzzles or a small AI activity', 'Whenever a school, library or family runs one'],
          ['A free first lesson', 'A paid provider, such as us, before any fees start', 'One live lesson with a teacher and an honest course suggestion', 'Once']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'A government starting point',
          left: [
            'The Digital Technologies Hub, which describes itself as "brought to you by the Australian Government Department of Education", keeps a page for families called "After school activities and courses".',
            'It notes that "some of these programs can be completed online in the comfort of your own home whilst some require a termly or holiday commitment", and lists Code Camp, Code Club, code.org, Grok, Hour of Code and Junior Engineers. Not every program on that list is free, so check each one before you plan around it.'
          ],
          rightH3: 'A global one',
          right: [
            'The Hour of Code has run worldwide for over a decade, and its organisers now also run the Hour of AI, which, in their words, builds "on over a decade of success with the Hour of Code".',
            'Both are designed for a single hour. They are an excellent taste of coding and a poor substitute for a year of it, which is exactly how their organisers present them.'
          ] },
        { kind: 'source', html: 'Sources, read 7 October 2026: <a class="ag-inline-link" href="https://www.digitaltechnologieshub.edu.au/for-families/ideas-to-get-started/after-school-activities-and-courses/" rel="noopener" target="_blank">Digital Technologies Hub, After school activities and courses</a> and <a class="ag-inline-link" href="https://hourofcode.com/au" rel="noopener" target="_blank">Hour of Code, Australia page</a>.' }
      ]
    },
    {
      id: 'code-club', tint: 'deep', eyebrow: 'Code Club',
      h2: 'Code Club Australia, in its own numbers',
      lede: 'If a free option deserves a family\'s attention first, it is a club with a real adult running it. Code Club Australia is the largest network of these, and its own pages say plainly what it offers.',
      body: [
        { kind: 'table', caption: 'Code Club Australia, as described on its own website', head: ['What', 'In Code Club\'s words or figures'], rows: [
          ['Who it is for', '"Free coding clubs to teach digital making skills to Aussie kids aged 8-13"'],
          ['Who runs a club', '"a nationwide network of volunteer-led coding clubs"'],
          ['How big it is in Australia', '"over 165,000 Australian children and 1,300 clubs", with 3,200 trained teachers'],
          ['How big it is worldwide', '13,000 active clubs worldwide'],
          ['What a club works from', '"250+ self-guided coding projects"'],
          ['What a club needs', '"computers for the kids (they can share) and access to the internet"'],
          ['Who backs it', 'It is "part of the Telstra Foundation, Telstra\'s registered Australian charity"']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why it works',
          left: [
            'A Code Club puts children in a room with an adult and other children, every week, for free. For a curious eight-year-old that combination is hard to beat, and the projects are written to be followed step by step.',
            'Its yearly Moonhack event also gives children a shared goal, which many find motivating.'
          ],
          rightH3: 'What to check first',
          right: [
            'Whether a club runs near you, and on a day you can make. Clubs are set up by volunteers at schools and libraries, so availability depends entirely on your area.',
            'Whether your child is in the age band. Clubs are aimed at eight to thirteen, so younger children and teenagers may need something else.'
          ] },
        { kind: 'source', html: 'Source, read 7 October 2026: <a class="ag-inline-link" href="https://codeclubau.org/" rel="noopener" target="_blank">Code Club Australia, home page</a> and <a class="ag-inline-link" href="https://codeclubau.org/for-libraries/" rel="noopener" target="_blank">For libraries</a>. Figures are the organisation\'s own and may change.' }
      ]
    },
    {
      id: 'gaps', tint: 'tint', eyebrow: 'What free leaves out',
      h2: 'What free coding usually does not include',
      lede: 'None of this is a criticism of free options. It is simply what a family gets for nothing, and what it does not.',
      body: [
        { kind: 'three', cells: [
          { h3: 'A teacher who knows your child', p: 'Volunteers change, clubs pause for holidays, and self-guided projects have no adult at all. A child who gets stuck often waits a week, or gives up.' },
          { h3: 'A plan that builds', p: 'Free projects are usually stand-alone. Finishing twenty of them is not the same as moving, step by step, from blocks to Python to a first real app.' },
          { h3: 'Feedback on their own work', p: 'Following instructions produces a working project. Explaining why it works, and changing it without instructions, is the part that needs someone to ask questions.' }
        ] },
        { kind: 'p', mt: true, html: 'For many families the right answer is both: a free club or project library for fun and friendship, and a weekly class for the planned progression and the feedback. Others find free is enough for years. The point is to know which you are choosing. If you want to see what paid classes cost before deciding, our <a class="ag-inline-link" href="/coding-classes-cost-australia">guide to coding class costs in Australia</a> sets out the arithmetic per lesson and per term.' },
        { kind: 'capsule', q: 'A rule of thumb', p: 'If your child is still asking to code after a term of free projects, the interest is real, and a teacher is likely to repay the cost. If interest fades after a few weeks, that is useful to know too, and it cost nothing to find out.' }
      ]
    },
    {
      id: 'decide', tint: 'deep', eyebrow: 'How to decide',
      h2: 'A weighted decision matrix your child can write',
      lede: 'Choosing between free options is a real decision with several factors, which makes it a perfect first program. A weighted decision matrix scores each option against each factor, multiplies by how much that factor matters to your family, and adds it up.',
      body: [
        { kind: 'table', caption: 'Our example scores, out of 5, for one family\'s view of four options', head: ['Option', 'Cost to the family', 'A regular adult giving feedback', 'A planned sequence', 'Fits the timetable', 'Other children to build with'], rows: [
          ['A local Code Club', '5', '4', '3', '2', '5'],
          ['Self-guided projects at home', '5', '1', '2', '5', '1'],
          ['One-off Hour of Code or Hour of AI activities', '5', '2', '1', '4', '3'],
          ['A weekly live class', '2', '5', '5', '4', '4']
        ] },
        { kind: 'table', mt: true, caption: 'Two families, two sets of weights, two different winners (our arithmetic)', head: ['Option', 'Family A: cost matters most (weights 5, 2, 2, 3, 2; maximum 70)', 'Family B: feedback matters most (weights 2, 5, 4, 3, 2; maximum 80)'], rows: [
          ['A local Code Club', '55', '58'],
          ['Self-guided projects at home', '48', '40'],
          ['One-off Hour of Code or Hour of AI activities', '49', '42'],
          ['A weekly live class', '50', '69']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the numbers show',
          left: [
            'For Family A, the local Code Club wins comfortably. For Family B, who care most about regular feedback and a planned sequence, the weekly class wins. Same options, same scores, different priorities.',
            'The scores above are our illustration, not a rating of anyone. The real value comes when your own family fills in the table.'
          ],
          rightH3: 'The program',
          right: [
            'A child stores the scores as a list of lists, the weights as a list, and multiplies and adds in a loop. Ten lines of Python, or a few Scratch lists, are enough.',
            'Then the fun part: change one weight and watch the winner change. Children discover that a decision depends on what you value, which is a lesson far bigger than coding.'
          ] },
        { kind: 'capsule', q: 'Try it together', p: 'Sit down with your child, agree five factors and their weights, score each option honestly, and let the program decide. If the answer surprises you, look at which weight caused it.' }
      ]
    },
    {
      id: 'first-lesson', tint: '', eyebrow: 'Free first lesson',
      h2: 'What our free first lesson includes, and what it does not',
      lede: 'We offer one full lesson at no cost before any fees, because a family deserves to see how we teach before deciding. Here is exactly what that means.',
      body: [
        { kind: 'table', caption: 'The free first lesson, plainly', head: ['It includes', 'It does not include'], rows: [
          ['A live lesson with a real teacher, at a time set for your state', 'An ongoing free course'],
          ['Your child building a small project themselves', 'Any requirement to sign up afterwards'],
          ['The teacher watching how your child thinks and works', 'A card number or payment details'],
          ['An honest course suggestion, or advice that a free option suits better', 'Pressure to decide on the day']
        ] },
        { kind: 'p', mt: true, html: 'Sometimes the honest advice is that a child is better served, for now, by a free club and self-guided projects. We say so when it is true. Families who later want a weekly class can read <a class="ag-inline-link" href="/online-coding-classes-for-kids-australia">how our online classes for kids work</a>, including year levels and lesson times by state.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From free taste to real projects',
    lede: 'A common path we see in Australian families, though every child moves at their own speed.',
    table: { caption: 'Four stages from a free first taste', head: ['Stage', 'What it looks like'], rows: [
      ['1. Taste', 'An Hour of Code puzzle or a first Code Club project, free'],
      ['2. Habit', 'A weekly club or a self-guided project every weekend, still free'],
      ['3. Plan', 'A structured course with a teacher, once the interest has lasted a term'],
      ['4. Own', 'Projects designed by the child, explained line by line, then shared']
    ] },
    left: { h3: 'When to stay free', ps: [
      'When your child is enjoying a club, finishing projects and not getting stuck for long, there is no reason to change anything.',
      'Free is also the right choice while you find out whether coding is a passing interest or a lasting one.'
    ] },
    right: { h3: 'When a teacher helps', ps: [
      'When projects start to feel repetitive, when the child wants to make their own game rather than follow one, or when they are stuck more often than they are building.',
      'That is usually the moment a planned sequence and weekly feedback make the biggest difference.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for children moving beyond free',
    lede: 'Arranged by age and interest. The free first lesson decides where your child joins.',
    bands: [
      { num: 'I', h3: 'First courses', sub: 'Ages 6 to 9', courses: [
        { code: 'FCAU / FST / 01', slug: 'scratch-programming-complete-course', title: 'Scratch games course', blurb: 'Three months, ending with a game your child designed.' },
        { code: 'FCAU / FST / 02', slug: 'kids-coding-blocks-masterclass', title: 'One year of young coding', blurb: 'Blocks first, apps by the end.' },
        { code: 'FCAU / FST / 03', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Vibe coding for beginners', blurb: 'Describe a game, build it with AI help, then fix it yourself.' }
      ] },
      { num: 'II', h3: 'Typed code', sub: 'Ages 9 to 12', courses: [
        { code: 'FCAU / TXT / 01', slug: 'python-ai-kids-masterclass', title: 'Python with small AI projects', blurb: 'Turtle art, quizzes and a first classifier.' },
        { code: 'FCAU / TXT / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox games in Luau', blurb: 'Scripts inside a world children already know.' },
        { code: 'FCAU / TXT / 03', slug: 'game-development-masterclass-for-kids', title: 'Making games, three ways', blurb: 'Scratch, Roblox and Minecraft, one after another.' }
      ] },
      { num: 'III', h3: 'Beyond the screen', sub: 'Ages 8 to 14', courses: [
        { code: 'FCAU / BYD / 01', slug: 'mental-maths-mastery-kids', title: 'Number sense for young coders', blurb: 'Mental maths that makes coding logic easier.' },
        { code: 'FCAU / BYD / 02', slug: 'microsoft-office-kids-mastery', title: 'Everyday digital skills', blurb: 'Documents, slides and first spreadsheets.' },
        { code: 'FCAU / BYD / 03', slug: 'hackathon-prep-for-kids-coding-innovation-ai-projects-course', title: 'Hackathon track for kids', blurb: 'One free event, then twelve weeks of building towards it.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'What a paid class adds to a free start',
    lede: 'The things a free option usually cannot promise are the things we build each lesson around.',
    slots: [
      { time: 'Weekday afternoons', l: 'After school, in your own time zone.' },
      { time: 'Saturday', l: 'Popular with younger children.' },
      { time: 'Sunday', l: 'For families with Saturday sport.' }
    ],
    cells: [
      { h3: 'The same teacher', p: 'Your child keeps one teacher, who remembers last week\'s project.' },
      { h3: 'A planned sequence', p: 'Each lesson builds on the one before, towards a clear next stage.' },
      { h3: 'Groups', p: 'Fifteen to twenty children close in age and ability, or one to one.' },
      { h3: 'Their own work', p: 'Children build every project themselves; teachers ask questions rather than take over.' },
      { h3: 'Stuck for minutes, not weeks', p: 'Help arrives in the lesson, which keeps momentum going.' },
      { h3: 'Free clubs still welcome', p: 'Many of our students keep going to a Code Club too. The two fit well together.' }
    ]
  },

  projectsH2: 'Projects built by our students',
  projectsLede: 'A few things our students made after their first lessons. More of them, grouped by age, sit on our <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'What families wrote on Google, copied word for word and left uncorrected.',

  fees: {
    h2: 'After the free lesson: fees',
    lede: 'Families outside India pay one monthly fee in US dollars, the same in every country. Nothing is charged to join, and nothing ties you to a whole term: leaving at the end of a month is fine.',
    free: ['One full live lesson', 'An honest course suggestion', 'No card asked, no obligation'],
    group: ['Classes of fifteen to twenty', 'A familiar teacher each week', 'Peers close in age and level', 'Stop whenever a month ends'],
    one: ['Undivided attention from a teacher', 'Times that fit around the school week', 'Pace set by your child']
  },

  faq: {
    eyebrow: 'Questions from parents',
    h2: 'What Australian parents ask about free coding classes',
    items: [
      { q: 'Are there free coding classes for kids in Australia?', a: 'Yes. Code Club Australia runs free, volunteer-led clubs for children aged 8 to 13 at schools and libraries, many children use free self-guided project libraries at home, and the Hour of Code and Hour of AI offer free one-off activities.' },
      { q: 'What is Code Club Australia?', a: 'Code Club Australia is a national network of free, volunteer-led coding clubs for children aged 8 to 13. Volunteers use its step-by-step projects and free training, and it is part of the Telstra Foundation.' },
      { q: 'What is a weighted decision matrix?', a: 'It is a table that scores each option against several factors, multiplies each score by how much that factor matters, and adds the results, so the option with the highest total suits your priorities. It also makes a good first coding project.' },
      { q: 'How do I find a Code Club near me?', a: 'Code Club Australia\'s website has a "Find a club" page. Clubs are run by volunteers at schools and libraries, so whether one runs near you, and when, depends on your area.' },
      { q: 'Is a free club enough to learn to code?', a: 'For many children it is a wonderful start and enough for a long time. Children who want a planned sequence, regular feedback on their own projects, or help when stuck usually benefit from a teacher as well.' },
      { q: 'What does your free first lesson include?', a: 'One full live lesson in which your child builds a small project with a teacher, followed by an honest course suggestion. There is no card required and no obligation to continue.' },
      { q: 'Will you tell us if a free option suits our child better?', a: 'Yes. If a free club or self-guided projects are the right fit for now, the teacher will say so after the first lesson.' },
      { q: 'Can my child do Code Club and your classes at the same time?', a: 'Yes, and several of our students do. A club offers friends and fun projects; a weekly class adds a planned sequence and feedback.' },
      { q: 'Is the Hour of Code only for one hour?', a: 'Each activity is designed to take about an hour. Many children go on to try more activities afterwards, but it is built as a first taste rather than a course.' },
      { q: 'What happens after the free lesson if we continue?', a: 'Families pay one month at a time with no joining fee and no term lock-in. The fees block on this page shows the group and one-to-one options.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Where to go next once you know what free does and does not cover.',
    items: [
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'Our main page for Australian families.' },
      { href: '/online-coding-classes-for-kids-australia', label: 'Online coding classes for kids', p: 'Year levels, school and time zones.' },
      { href: '/coding-classes-cost-australia', label: 'What coding classes cost', p: 'Per lesson and per term, in plain arithmetic.' },
      { href: '/game-development-for-kids-australia', label: 'Game development for kids', p: 'From Scratch games to a real engine.' },
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch coding classes', p: 'The usual first language.' },
      { href: '/best-age-to-start-coding', label: 'When to start coding', p: 'Readiness signs by age.' }
    ]
  },

  start: {
    h2: 'Book the free first lesson',
    lede: 'Tell us how to reach you and when, and we will call. Your child builds a small project with a teacher, and you get an honest view of whether a class, a free club or both suit them.',
    readFirst: 'Still weighing it up? Read <a class="ag-inline-link" href="/how-we-teach">how a lesson runs</a> or browse <a class="ag-inline-link" href="/courses">all of our courses</a> first.',
    note: 'WhatsApp from an Australian mobile reaches us quickest. Our team works from India, so replies come from a +91 number, and we have no office or shop in Australia.',
    formNote: 'Free, no card, no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Getting started', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch classes' },
        { href: '/best-age-to-start-coding', label: 'When to start' },
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] },
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/online-coding-classes-for-kids-australia', label: 'Online classes for kids' },
        { href: '/coding-classes-cost-australia', label: 'What classes cost' },
        { href: '/game-development-for-kids-australia', label: 'Game development for kids' }
      ] }
    ],
    bottomRight: 'Free is a fine place to start; knowing what it includes is better'
  },

  personalityCss: `
.ag-root.ag-fcau .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-fcau .ag-capsule { border-left-width: 4px; border-radius: 6px; }
.ag-root.ag-fcau .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-fcau .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-fcau .ag-band-head h3 { letter-spacing: -0.006em; }
.ag-root.ag-fcau .ag-slots { gap: 1.1rem; }
`,

  dossier: {
    curriculumAuthority: 'Australia, free coding options for children. Code Club Australia (codeclubau.org, read 7 October 2026): "Free coding clubs to teach digital making skills to Aussie kids aged 8-13"; "a nationwide network of volunteer-led coding clubs"; "over 165,000 Australian children and 1,300 clubs"; 3,200 trained teachers; 13,000 active clubs worldwide; "250+ self-guided coding projects"; "computers for the kids (they can share) and access to the internet"; "part of the Telstra Foundation, Telstra\'s registered Australian charity"; Moonhack. Digital Technologies Hub ("brought to you by the Australian Government Department of Education"), After school activities and courses: lists Code Camp, Code Club, code.org, Grok, Hour of Code, Junior Engineers. hourofcode.com/au: the Hour of AI builds "on over a decade of success with the Hour of Code".',
    localProject: 'A weighted decision matrix for choosing between free options: four options (a local Code Club, self-guided projects, one-off Hour of Code or Hour of AI activities, a weekly live class) scored 1 to 5 on five factors by one example family (labelled as our illustration); weights 5, 2, 2, 3, 2 give totals 55, 48, 49, 50 (maximum 70, the Code Club wins) and weights 2, 5, 4, 3, 2 give 58, 40, 42, 69 (maximum 80, the weekly class wins). Lesson family: weighted decision matrix, with sensitivity to the weights.',
    requiredMentions: ['165,000', '1,300 clubs', '3,200 trained teachers', '13,000 active clubs', '250+ self-guided', 'volunteer-led', 'Moonhack', 'Hour of AI', 'weighted decision matrix', 'Digital Technologies Hub'],
    sources: [
      { claim: 'Code Club Australia home page: free clubs for ages 8-13; over 165,000 Australian children and 1,300 clubs; 3,200 trained teachers; 13,000 active clubs worldwide; part of the Telstra Foundation; Moonhack.', url: 'https://codeclubau.org/' },
      { claim: 'Code Club Australia, For libraries: nationwide network of volunteer-led clubs; 250+ self-guided coding projects; computers can be shared.', url: 'https://codeclubau.org/for-libraries/' },
      { claim: 'Digital Technologies Hub (Australian Government Department of Education), After school activities and courses: the list of programs and the quoted description.', url: 'https://www.digitaltechnologieshub.edu.au/for-families/ideas-to-get-started/after-school-activities-and-courses/' },
      { claim: 'Hour of Code, Australia page: the Hour of AI builds on over a decade of the Hour of Code.', url: 'https://hourofcode.com/au' }
    ],
    rejectedClaims: [
      'Which programs on the Digital Technologies Hub list are free: not stated on that page, so the page tells families to check each one.',
      'Prices of any paid provider: not quoted (one currency rule, and most load prices in booking widgets).',
      'The number of Code Clubs in any particular state or city: not published on the pages read.',
      'Any claim that a free option is worse: refused; the page compares what each includes.',
      'The date of any Hour of Code or Hour of AI week: not confirmed raw, so no date is given.'
    ]
  }
};
