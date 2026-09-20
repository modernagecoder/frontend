'use strict';
// Key Stage 2 coding lessons online (ag- door, England; UK cluster Phase 3).
// Source: GOV.UK, "National curriculum in England: computing programmes of study", statutory, first
// published 11 September 2013, read raw from gov.uk on 20 September 2026. The key stage 2 programme
// of study, verbatim and in full. Pupils should be taught to:
//  - "design, write and debug programs that accomplish specific goals, including controlling or
//    simulating physical systems; solve problems by decomposing them into smaller parts"
//  - "use sequence, selection, and repetition in programs; work with variables and various forms of
//    input and output"
//  - "use logical reasoning to explain how some simple algorithms work and to detect and correct errors
//    in algorithms and programs"
//  - "understand computer networks, including the internet; how they can provide multiple services,
//    such as the World Wide Web, and the opportunities they offer for communication and collaboration"
//  - "use search technologies effectively, appreciate how results are selected and ranked, and be
//    discerning in evaluating digital content"
//  - "select, use and combine a variety of software (including internet services) on a range of digital
//    devices to design and create a range of programs, systems and content that accomplish given goals,
//    including collecting, analysing, evaluating and presenting data and information"
//  - "use technology safely, respectfully and responsibly; recognise acceptable/unacceptable behaviour;
//    identify a range of ways to report concerns about content and contact"
// Purpose of study, for context: "A high-quality computing education equips pupils to use computational
// thinking and creativity to understand and change the world."
// Key stage 2 covers Years 3 to 6, ages 7 to 11, per GOV.UK's national curriculum page.
// Spine: variables, selection and repetition are named in the statutory curriculum for primary school.
// Parents read "coding at primary" and picture a Scratch animation. The programme of study names the
// constructs, names debugging, and names explaining how an algorithm works, all by the end of Year 6.
// Deliberately NOT reused: the key stage 1 quotations, which belong to /best-online-coding-classes-uk.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'guide', tag: 'KEY STAGE 2', blurb: 'The statutory programme of study names variables, selection and repetition by the end of Year 6. Most parents have never been shown it.' },
  slug: 'ks2-coding-lessons-online',
  code: 'kstw',
  accent: '#392822',
  accentRationale: 'Key Stage 2: a very dark warm brown from the solver (11.36:1 on every paper tint), quiet enough for a primary page and clear of every accent in the cluster',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Key Stage 2 coding lessons online',
  title: 'Key Stage 2 Coding Lessons Online | Years 3 to 6',
  description: 'What the statutory curriculum asks of Years 3 to 6, and live lessons that teach it: variables, selection, repetition and debugging. First class free.',
  ogDescription: 'The Key Stage 2 programme of study names variables, selection and repetition. Most Year 6 children have never used a variable.',
  twitterDescription: 'Live online coding lessons for Years 3 to 6, taught to the statutory computing curriculum.',
  pageName: 'Key Stage 2 Coding Lessons Online',
  webPageDescription: 'Live online coding lessons for children in Years 3 to 6 in England, taught against the statutory key stage 2 computing programme of study.',
  courseDescription: 'Live online coding teaching for children aged 7 to 11, covering sequence, selection, repetition, variables, input and output, and debugging, as the key stage 2 programme of study requires.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Key Stage 2 coding',
  navLinks: [
    { href: '#required', label: 'What is required' },
    { href: '#gap', label: 'What usually happens' },
    { href: '#teach', label: 'How we teach it' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'England &middot; Years 3 to 6 &middot; Ages 7 to 11',
  h1: 'Key Stage 2 coding lessons online',
  lede: 'Ask most parents what coding at primary school involves and they will describe a Scratch animation with a cat in it. Then read what the statutory curriculum actually requires by the end of Year 6: pupils should be taught to "use sequence, selection, and repetition in programs; work with variables and various forms of input and output", to "design, write and debug programs that accomplish specific goals", and to "use logical reasoning to explain how some simple algorithms work and to detect and correct errors in algorithms and programs". Variables. Selection. Debugging. Explaining an algorithm. Those are named requirements for eleven-year-olds, and a great many Year 6 children have never met one of them. This page sets out the whole programme of study, plainly, and what it looks like taught properly.',
  secondaryCta: { href: '#gap', label: 'What usually happens' },
  wa: 'Hello Modern Age Coders, I would like a free first coding class for a primary-age child in the UK.',
  heroNote: 'Teaching live since 2020 &middot; 10,000+ students &middot; Read against the programme of study itself',
  spec: [
    ['For', 'Years 3 to 6, ages 7 to 11'],
    ['Curriculum', 'Statutory key stage 2 computing'],
    ['Named in it', 'Sequence, selection, repetition'],
    ['Also named', 'Variables, input and output'],
    ['And', 'Debugging, and explaining algorithms'],
    ['Group', 'Five to ten at one level'],
    ['Or', 'One to one'],
    ['Start', 'One free lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'The statutory computing curriculum for key stage 2 is more ambitious than most families realise. By the end of Year 6 pupils are supposed to use sequence, selection and repetition, work with variables and with input and output, design, write and debug programs that accomplish specific goals, solve problems by decomposing them, and use logical reasoning to explain how simple algorithms work and to find errors in them. Whether a particular school covers all of that varies enormously, and a parent can check simply by asking a child to explain a program they wrote. We teach exactly this content live online, in groups of five to ten at one level or one to one, for children roughly seven to eleven. The first lesson is free, then USD 100 a month in a group or USD 150 one to one.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for Years 3 to 6',
    lede: 'Blocks done properly, then the first typed code. Each card opens a full syllabus.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'KS2 / 01', title: 'Scratch Games and Stories', note: 'Where variables, selection and repetition are actually used rather than mentioned, which is what the programme of study asks for.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'KS2 / 02', title: 'Problem Solving and Computational Thinking', note: 'Decomposition and explaining how an algorithm works, both named in the curriculum and rarely taught directly.' },
      { course: 'python-ai-kids-masterclass', code: 'KS2 / 03', title: 'First Python', note: 'For Year 5 and 6 children ready for typed code, which puts them comfortably ahead of what key stage 3 will expect.' }
    ]
  },

  sections: [
    {
      id: 'required', tint: 'tint', eyebrow: 'What is required',
      h2: 'The whole programme of study, in plain terms',
      lede: 'Seven statutory lines cover key stage 2. Here they are as written, with what each one means a child can actually do.',
      body: [
        { kind: 'table', caption: 'Key stage 2 computing, as the national curriculum states it', head: ['Pupils should be taught to', 'Which means a child can'], rows: [
          ['"Design, write and debug programs that accomplish specific goals, including controlling or simulating physical systems; solve problems by decomposing them into smaller parts"', 'Plan a program before writing it, get it working, and break a big idea into pieces small enough to build'],
          ['"Use sequence, selection, and repetition in programs; work with variables and various forms of input and output"', 'Use an if, use a loop, store a value in a variable and change it, and take input from a user'],
          ['"Use logical reasoning to explain how some simple algorithms work and to detect and correct errors in algorithms and programs"', 'Say why a program does what it does, and find the mistake rather than start again'],
          ['"Understand computer networks, including the internet; how they can provide multiple services, such as the World Wide Web"', 'Describe roughly what happens when they open a website'],
          ['"Use search technologies effectively, appreciate how results are selected and ranked, and be discerning in evaluating digital content"', 'Understand that search results are ordered by something, and question what they find'],
          ['"Select, use and combine a variety of software ... including collecting, analysing, evaluating and presenting data and information"', 'Use the right tool for a job and put results together sensibly'],
          ['"Use technology safely, respectfully and responsibly; recognise acceptable/unacceptable behaviour; identify a range of ways to report concerns"', 'Know what to do when something online is wrong, and who to tell']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The second line is the one to notice',
          left: [
            'Sequence, selection and repetition are the three control structures every programming language has. Variables are how a program remembers anything. Input and output are how it talks to a person.',
            'Between them, those five ideas are most of what programming is, and the statutory curriculum puts them in primary school rather than secondary.'
          ],
          rightH3: 'And the third is the rarest',
          right: [
            'Explaining how an algorithm works, and detecting and correcting errors, is a different activity from making something. It is slower, it is less exciting to demonstrate at a parents\' evening, and it is where actual understanding lives.',
            'A child who can only make things work by trial and error has met the first half of that line and not the second.'
          ] },
        { kind: 'source', html: 'Source, read 20 September 2026: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/national-curriculum-in-england-computing-programmes-of-study/national-curriculum-in-england-computing-programmes-of-study" rel="noopener" target="_blank">National curriculum in England: computing programmes of study</a>, statutory guidance first published 11 September 2013. Key stage 2 covers Years 3 to 6, ages 7 to 11.' }
      ]
    },
    {
      id: 'gap', tint: 'deep', eyebrow: 'What usually happens',
      h2: 'Why so many Year 6 children have never used a variable',
      lede: 'Not because primary teachers are doing anything wrong. Because of how the subject sits in a primary week, and who is required to teach it.',
      body: [
        { kind: 'three', cells: [
          { h3: 'It is one subject among many', p: 'A primary teacher covers every subject. Computing competes with reading, writing and maths for a slot, and it is the newest of them by decades.' },
          { h3: 'Blocks reward the visible', p: 'A colourful animation looks like success and can be built without a single variable. A program using selection and a variable may look plainer and be far more advanced.' },
          { h3: 'And not every school must', p: 'Academies are not required to follow the national curriculum at all. Just under half of primary schools are academies, so for many children this programme of study is a reference rather than an obligation.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How to check, kindly',
          left: [
            'Ask your child to show you something they made and to explain how it works. Not whether it works, how. Where does it decide something? What does it remember? What happens if you give it an unexpected answer?',
            'If those questions land comfortably, the school is doing this well and the child is in good shape for Year 7. If they draw a blank, that is ordinary and fixable, and it is far easier to fix at nine than at fourteen.'
          ],
          rightH3: 'Why it matters for later',
          right: [
            'Key stage 3 assumes all of this and then asks for two programming languages, at least one of them textual. A child who arrives in Year 7 without selection, repetition and variables is starting that from behind.',
            'The full picture of what comes next is on <a class="ag-inline-link" href="/ks3-computing-tuition-online">the key stage 3 page</a>, and what the English system requires of schools generally is on <a class="ag-inline-link" href="/coding-and-ai-classes-in-england">the England page</a>.'
          ] },
        { kind: 'p', html: 'None of this is an argument that primary schools should teach more computing at the expense of reading. It is an argument that a parent who wants their child to arrive at secondary school able to program has a specific, short and entirely achievable list to work from, and that the list is published by the Government.' }
      ]
    },
    {
      id: 'teach', tint: '', eyebrow: 'How we teach it',
      h2: 'Blocks properly, then a keyboard',
      lede: 'Same constructs, two mediums. The order matters more than the software.',
      body: [
        { kind: 'table', caption: 'The sequence we use across Years 3 to 6', head: ['Stage', 'Usually', 'What the child can do at the end'], rows: [
          ['Sequence and repetition', 'Years 3 and 4', 'Builds something that runs, and uses a loop because repeating the blocks was tedious'],
          ['Selection and variables', 'Years 4 and 5', 'Uses an if to make the program behave differently, and a variable to keep a score or a state'],
          ['Input, output and debugging', 'Year 5', 'Takes an answer from a user, handles a wrong one, and finds a bug by reasoning rather than by guessing'],
          ['Explaining and planning', 'Years 5 and 6', 'Says what a program will do before running it, and plans one on paper before starting'],
          ['Typed code, if ready', 'Year 6', 'Writes short Python programs, which puts them ahead of what Year 7 expects']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why we ask children to predict',
          left: [
            'Before anything runs, the child says what will happen. It is the fastest way to find out what they actually believe, and being wrong out loud in a small group is how the belief gets corrected.',
            'It also happens to be the skill the curriculum names: using logical reasoning to explain how a program works.'
          ],
          rightH3: 'And to fix rather than restart',
          right: [
            'When something breaks, we do not start again. We find out why. That habit is the difference between a child who can make things and a child who can make things work, and it is explicitly in the programme of study.',
            'It is also slower and less immediately satisfying, which is why it rarely survives a busy classroom.'
          ] },
        { kind: 'p', html: 'Typed code is a Year 6 question rather than a Year 3 one. Some children are ready earlier and some are not ready until Year 7, and pushing it early usually produces a child who can copy syntax and cannot reason. <a class="ag-inline-link" href="/best-python-classes-online-uk">The Python page</a> covers what happens after the crossing.' },
        { kind: 'p', html: 'For AI specifically, which primary children now meet whether or not anybody planned it, <a class="ag-inline-link" href="/ai-classes-for-kids-uk">the AI classes for kids page</a> explains what can be taught properly at this age and why none of it needs an account with an AI company.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Four steps across the primary years',
    lede: 'A child is placed by what they can build and explain, not by their year group. Plenty of Year 4 children are ahead of plenty of Year 6 children.',
    table: { caption: 'What each step looks like finished', head: ['Step', 'What is being learnt', 'How a parent can tell'], rows: [
      ['1. Making something run', 'Sequence, and the idea that order matters', 'They can show you a thing that works and say what each part does'],
      ['2. Repeating and deciding', 'Loops and selection', 'The program behaves differently depending on what you do'],
      ['3. Remembering', 'Variables, input and output', 'It keeps a score, or a name, or a state, and uses it later'],
      ['4. Reasoning', 'Debugging and explaining algorithms', 'When it breaks they look rather than guess, and they can say why the fix worked']
    ] },
    left: { h3: 'Step four is the goal', ps: [
      'Every earlier step can be reached by copying. Step four cannot, which is why it is the one worth paying attention to.',
      'The whole sequence past primary runs down the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'And step one takes a while', ps: [
      'Younger children need time at step one, and rushing it produces a child who can follow instructions and not much else.',
      'The free lesson is where we work out honestly which step a child is actually on.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for primary-age children',
    lede: 'Grouped by where a child usually is. The free lesson settles which one fits.',
    bands: [
      { num: 'I', h3: 'Starting out', sub: 'Years 3 and 4', courses: [
        { code: 'UK / K21 / 01', slug: 'kids-coding-blocks-masterclass', title: 'Block coding for younger children', blurb: 'The first year of dragging blocks, where the talking about why matters more than the making.' },
        { code: 'UK / K21 / 02', slug: 'scratch-programming-complete-course', title: 'Scratch games and stories', blurb: 'A score that changes, a level that unlocks, and a sprite that behaves differently depending on what you do.' },
        { code: 'UK / K21 / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking', blurb: 'Decomposing a problem and describing rules aloud, which the curriculum names directly.' }
      ] },
      { num: 'II', h3: 'Getting serious', sub: 'Years 5 and 6', courses: [
        { code: 'UK / K22 / 01', slug: 'python-ai-kids-masterclass', title: 'First Python', blurb: 'Typed code for children who are ready, with programs short enough to hold in your head.' },
        { code: 'UK / K22 / 02', slug: 'minecraft-coding-for-kids-course', title: 'Coding in Minecraft', blurb: 'Loops and conditions written to change a world the child already spends time in.' },
        { code: 'UK / K22 / 03', slug: 'game-development-masterclass-for-kids', title: 'Game development', blurb: 'The request behind most children wanting to learn in the first place, taken seriously.' }
      ] },
      { num: 'III', h3: 'Going further', sub: 'For children well ahead', courses: [
        { code: 'UK / K23 / 01', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'What training a model means, using examples the child gathers themselves.' },
        { code: 'UK / K23 / 02', slug: 'kids-ai-web-development-course', title: 'AI and web projects', blurb: 'Something that lives on a page and does something clever, built end to end.' },
        { code: 'UK / K23 / 03', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox coding in Lua', blurb: 'Typing real code because the game will not work otherwise, which is the strongest reason there is.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons work',
    h2: 'Short, busy, and with an adult in the house',
    lede: 'Our teachers work from India, where the clocks never change, so the UK is five and a half hours behind from October and four and a half from March. Times are agreed in UK time.',
    slots: [
      { time: 'Straight after school', l: 'Where almost every primary-age child settles.' },
      { time: 'Early evening', l: 'Workable for families with a longer school run.' },
      { time: 'Weekend morning', l: 'Unhurried, and the best slot for seeing a project through to the end.' }
    ],
    cells: [
      { h3: 'Something built every week', p: 'A child who has made nothing has not had a lesson. Finished things are what keep a nine-year-old coming back.' },
      { h3: 'Predictions before running', p: 'The child says what will happen first. Being wrong out loud is the mechanism, not the embarrassment.' },
      { h3: 'Fixing, not restarting', p: 'When it breaks we find out why, which is the part the curriculum names and the part that is usually skipped.' },
      { h3: 'Someone within earshot', p: 'A parent or carer at home and contactable. No need to watch the lesson, only to be findable.' },
      { h3: 'Groups by level', p: 'Five to ten children at the same step, so nobody is the youngest in a room of teenagers.' },
      { h3: 'Work you can open', p: 'Finished projects are saved where a family can see them, which is usually how a parent finds out it is going well.' }
    ]
  },

  projectsH2: 'Things primary-age children have made',
  projectsLede: 'Four projects from children of about this age. Many more sit in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Taken from Google exactly as parents wrote them.',

  fees: {
    h2: 'What primary lessons cost',
    lede: 'One monthly charge in US dollars, the rate outside India. The free lesson comes first and nothing is taken until a course and a weekly time are agreed.',
    free: ['A real lesson, with something built in it', 'An honest view of the step the child is on', 'Only a phone number needed'],
    group: ['Five to ten children at the same step', 'One named teacher throughout', 'Work saved where a parent can open it', 'A certificate when a course finishes'],
    one: ['One child and one teacher', 'Good for a very shy or very advanced child', 'Fitted around clubs and the school run']
  },

  faq: {
    eyebrow: 'Questions from primary parents',
    h2: 'What parents of Years 3 to 6 ask',
    items: [
      { q: 'What should a Year 6 child be able to do?', a: 'The statutory curriculum expects pupils to use sequence, selection and repetition, work with variables, input and output, design, write and debug programs, and explain how simple algorithms work.' },
      { q: 'My child only does Scratch animations. Is that enough?', a: 'It depends what is inside them. An animation with no selection and no variable meets very little of the programme of study, however good it looks.' },
      { q: 'How do I check without putting them on the spot?', a: 'Ask them to show you something and explain how it works. Where does it decide something? What does it remember? What happens if you type the wrong thing?' },
      { q: 'Should a primary child learn Python?', a: 'In Year 6, often yes, if they are ready. Earlier than that it usually produces a child who can copy syntax without reasoning, which is worse than waiting.' },
      { q: 'Does every primary school have to teach this?', a: 'No. Academies are not required to follow the national curriculum, and just under half of primary schools are academies.' },
      { q: 'What age do you start from?', a: 'About six for block-based coding. Key stage 2 material suits roughly seven to eleven, and we place by what a child can do rather than by year group.' },
      { q: 'Do I need to sit with them?', a: 'No. We only ask that an adult is at home and contactable, since a seven-year-old sometimes needs a hand opening a file or sharing a screen.' },
      { q: 'How long is a lesson?', a: 'Short enough that a child is still concentrating at the end. The right length is agreed in the free lesson, because it differs by age and by child.' },
      { q: 'What if they are ahead of their class?', a: 'Then they work on harder problems rather than more of the same, and often move to typed code earlier. Groups are built by level, not by age.' },
      { q: 'What does it cost?', a: 'The first lesson is free. After that a group place is USD 100 a month and one-to-one teaching USD 150, charged monthly with nothing in advance.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related reading',
    lede: 'Each takes one part of this further.',
    items: [
      { href: '/ks3-computing-tuition-online', label: 'Key Stage 3 computing tuition', p: 'What Years 7 to 9 are supposed to cover, including two programming languages.' },
      { href: '/online-coding-classes-for-kids-uk', label: 'Coding classes for kids in the UK', p: 'The general door for children, key stage by key stage.' },
      { href: '/ai-classes-for-kids-uk', label: 'AI classes for kids in the UK', p: 'What training a model looks like for a child, with no accounts involved.' },
      { href: '/coding-and-ai-classes-in-england', label: 'Coding and AI classes in England', p: 'Who is actually required to teach the national curriculum.' },
      { href: '/best-python-classes-online-uk', label: 'Python classes online in the UK', p: 'What happens after a child crosses from blocks to typed code.' },
      { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'UK competitions calendar', p: 'Puzzle rounds and challenges open to Years 3 to 6 this year.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Leave a number and we will come back at a UK time that suits. The child builds something in the lesson, and it ends with an honest view of the step they are on.',
    readFirst: 'Rather read first? Every <a class="ag-inline-link" href="/courses">course page</a> lists its syllabus, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains the method and its limits, and the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a> shows the order of topics.',
    note: 'WhatsApp is free from a British mobile and gets the fastest answer. The number is registered in India, said here rather than noticed later.',
    formNote: 'No card, no contract. One reply, with a time.'
  },

  footer: {
    cols: [
      { h4: 'Primary years', links: [
        { href: '/online-coding-classes-for-kids-uk', label: 'Coding for kids' },
        { href: '/ai-classes-for-kids-uk', label: 'AI classes for kids' },
        { href: '/ks3-computing-tuition-online', label: 'Key Stage 3' },
        { href: '/coding-and-ai-classes-in-england', label: 'The English system' }
      ] },
      { h4: 'More', links: [
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/student-labs', label: 'Student labs' }
      ] }
    ],
    bottomRight: 'Live primary teaching, at a British hour'
  },

  personalityCss: `
.ag-root.ag-kstw .ag-hero h1 { letter-spacing: -0.02em; font-weight: 650; }
.ag-root.ag-kstw .ag-capsule { border-left-width: 5px; border-radius: 0 6px 6px 0; }
.ag-root.ag-kstw .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-kstw .ag-table caption { text-align: left; font-weight: 650; }
.ag-root.ag-kstw .ag-table th:first-child { width: 52%; }
.ag-root.ag-kstw .ag-band-head h3 { letter-spacing: 0.004em; }
.ag-root.ag-kstw .ag-spec-row dt { letter-spacing: 0.04em; }
`,

  mustMention: ['sequence, selection, and repetition', 'work with variables', 'detect and correct errors', 'design, write and debug programs', 'decomposing them into smaller parts', '11 September 2013', 'Years 3 to 6', 'selected and ranked', 'logical reasoning', 'input and output'],

  dossier: {
    curriculumAuthority: 'England, key stage 2 computing. GOV.UK, "National curriculum in England: computing programmes of study", statutory guidance first published 11 September 2013, read raw from gov.uk on 20 September 2026. Key stage 2 covers Years 3 to 6, ages 7 to 11. The programme of study, verbatim: pupils should be taught to "design, write and debug programs that accomplish specific goals, including controlling or simulating physical systems; solve problems by decomposing them into smaller parts"; "use sequence, selection, and repetition in programs; work with variables and various forms of input and output"; "use logical reasoning to explain how some simple algorithms work and to detect and correct errors in algorithms and programs"; "understand computer networks, including the internet; how they can provide multiple services, such as the World Wide Web, and the opportunities they offer for communication and collaboration"; "use search technologies effectively, appreciate how results are selected and ranked, and be discerning in evaluating digital content"; "select, use and combine a variety of software (including internet services) on a range of digital devices to design and create a range of programs, systems and content that accomplish given goals, including collecting, analysing, evaluating and presenting data and information"; "use technology safely, respectfully and responsibly; recognise acceptable/unacceptable behaviour; identify a range of ways to report concerns about content and contact". Purpose of study: "A high-quality computing education equips pupils to use computational thinking and creativity to understand and change the world." Academy status figures are cross-referenced to the England page rather than restated in full.',
    localProject: 'Variables, selection and repetition are named in the statutory curriculum for primary school. Parents hear "coding at primary" and picture a Scratch animation; the programme of study names the three control structures, names variables, input and output, names debugging, and names using logical reasoning to explain how an algorithm works, all by the end of Year 6. The page prints all seven statutory lines beside a plain translation of what each means a child can actually do, then explains without blaming anybody why the gap exists: computing competes with every other subject in a primary week, block environments reward the visible over the structural, and academies need not follow the curriculum at all. It gives a parent a kind three-question test, ask the child to explain a program, where does it decide, what does it remember, what happens on a wrong answer, and points out that the gap is far cheaper to close at nine than at fourteen. The teaching section maps the same constructs across Years 3 to 6 and treats typed code as a Year 6 question rather than an early badge. Lesson family: a published entitlement most families have never been shown.',
    requiredMentions: ['sequence, selection, and repetition', 'work with variables', 'detect and correct errors', '11 September 2013'],
    sources: [
      { claim: 'GOV.UK, National curriculum in England: computing programmes of study, statutory guidance first published 11 September 2013: the full key stage 2 programme of study and the purpose of study.', url: 'https://www.gov.uk/government/publications/national-curriculum-in-england-computing-programmes-of-study/national-curriculum-in-england-computing-programmes-of-study' },
      { claim: 'GOV.UK, The national curriculum: key stage 2 covers Years 3 to 6, ages 7 to 11, and academies do not have to follow the national curriculum.', url: 'https://www.gov.uk/national-curriculum' }
    ],
    rejectedClaims: [
      'The key stage 1 programme of study: quoted on the best-online-coding-classes-uk page, and referenced rather than repeated here.',
      'Any figure for how many primary schools actually teach the full programme of study: no source measures it, and the page says variation is wide without quantifying it.',
      'Criticism of primary teachers: the page explains the structural reasons for the gap and states explicitly that it is not an argument for teaching less reading.',
      'Any claim that learning to code early improves other subjects: refused across this cluster, with the evidence set out on the problem-solving page.',
      'The exact share of primary schools that are academies: the figure lives on the England page with its source, and this page says just under half without repeating the citation.',
      'Any age at which a child "should" start typed code: the page says Year 6 is the usual question and that readiness varies.'
    ]
  }
};
