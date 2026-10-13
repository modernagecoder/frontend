'use strict';
// Online coding classes for kids, Australia (ag- kids door; AU cluster Phase 1 preview, row 2).
// Demand: en-AU autocomplete "online coding classes for kids australia"; "coding classes for kids" plus every
// capital; "coding classes for 5/7/8/9/10/11 year olds".
// Sources, read raw on 7 October 2026:
//  - ABS, Schools, 2025 (released 5 March 2026): 4,160,918 students enrolled in 9,673 schools; apparent
//    retention years 7/8 to 12 81.3%; 62.8% government, 20.0% Catholic, 17.2% independent.
//  - ABS, Schools methodology, 2025: primary school runs from Pre-Year 1 to Year 6 and secondary from Year 7 to
//    Year 12 in all states and territories; Pre-Year 1 names by state; minimum starting ages by state.
//  - ACARA, Australian Curriculum v9, Digital Technologies curriculum content F-6 (.docx): AC9TDIFK02,
//    AC9TDI2P02, AC9TDI2P06, AC9TDI2P07.
//  - IANA time zone database, release 2026e (tzdata, file "australasia"): eastern states and SA move clocks
//    forward on the first Sunday in October and back on the first Sunday in April; Queensland, WA and the NT
//    keep standard time. India is UTC+5:30 all year. Offsets checked with Python zoneinfo.
// Lesson family: clock arithmetic modulo 24 hours with half-hour offsets (a child's first program that converts
// a lesson time between Australian and India time, including the wrap past midnight).

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'guide', tag: 'KIDS, ONLINE', blurb: 'Live online coding classes for Australian children from Prep, Kindy or Reception to Year 6, with year levels by state and lesson times by time zone.' },
  slug: 'online-coding-classes-for-kids-australia',
  code: 'ocau',
  accent: '#963F2A',
  accentRationale: 'Online coding for kids, Australia: a red-ochre chosen by hand, muted, at least 11 RGB units from every accent in use and clear of the cyan and violet bands',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'Online coding classes for kids, Australia',
  title: 'Online Coding Classes for Kids in Australia | Ages 6 to 12',
  description: 'Live online coding classes for kids in Australia, Prep to Year 6: Scratch, Python, apps and AI in small groups or one to one, at times set for your state.',
  ogDescription: 'Coding for Australian kids from the first year of school to Year 6: what they learn at each stage, how the curriculum fits, and how lesson times work across the time zones.',
  twitterDescription: 'Live online coding classes for Australian kids, Prep to Year 6: Scratch, Python, apps and AI, in small groups or one to one. First class free.',
  pageName: 'Online Coding Classes for Kids in Australia',
  webPageDescription: 'Live online coding classes for Australian primary school children, with year levels by state, the Digital Technologies curriculum and lesson times across Australian time zones.',
  courseDescription: 'Live online coding for Australian children aged 6 to 12: Scratch, then Python, web pages, apps and AI literacy, taught in small groups or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'Online coding for kids',
  navLinks: [
    { href: '#year-levels', label: 'Year levels' },
    { href: '#school', label: 'At school' },
    { href: '#time-zones', label: 'Time zones' },
    { href: '#safety', label: 'Online safety' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Ages 6 to 12 &middot; Live online',
  h1: 'Online coding classes for kids in Australia',
  lede: 'A six-year-old in Hobart, a nine-year-old in Townsville and an eleven-year-old in Perth can all sit in the same kind of coding class, because the class happens on a screen. What changes between them is the name of their school year, the time on their clock and what they already meet in Digital Technologies at school. This page sets those differences out plainly. It explains what coding looks like at each stage of primary school, how it lines up with the Australian Curriculum, how a live lesson fits across Australian time zones, and what we do to keep young children safe online. It also includes a tiny program that converts a lesson time between Australia and India, which is the very first thing some of our students write.',
  secondaryCta: { href: '#year-levels', label: 'Year levels' },
  wa: 'Hello Modern Age Coders, my child is in primary school in Australia and would like to try an online coding class. Could we book a free first class?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; a real teacher, live, every lesson',
  spec: [
    ['For', 'Children aged 6 to 12'],
    ['Year levels', 'First year of school to Year 6'],
    ['Starts with', 'Scratch, then Python'],
    ['Also', 'Web pages, apps and AI literacy'],
    ['Format', 'Live online video lessons'],
    ['Group', 'Fifteen to twenty, or one to one'],
    ['Times', 'Set for your state\'s clock'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Online coding classes for kids are live lessons over video in which a teacher guides a small group of children, or one child, as they build games, animations and simple programs. For Australian primary students the natural start is Scratch, a free block-based language, followed by Python from about age nine. Modern Age Coders teaches children aged 6 to 12 across every Australian state and territory, at times set for your own time zone, in groups of fifteen to twenty or one to one. The first class is free.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three good first courses',
    lede: 'Matched to age. Tap a card for its complete outline; the trial lesson decides which one your child actually starts.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'OCAU / 01', title: 'Scratch Coding for Kids', note: 'Ages 6 to 12. Animations and games made on Scratch, which costs nothing to use.' },
      { course: 'kids-coding-blocks-masterclass', code: 'OCAU / 02', title: 'Coding for Kids', note: 'Ages 6 to 12. A year-long course that grows from block games into apps and some early Python.' },
      { course: 'python-ai-kids-masterclass', code: 'OCAU / 03', title: 'Python and AI for Kids', note: 'Ages 9 to 12. The step from blocks to typed code, with games and gentle AI experiments.' }
    ]
  },

  sections: [
    {
      id: 'year-levels', tint: 'tint', eyebrow: 'Year levels',
      h2: 'One first year of school, six different names',
      lede: 'Families who move interstate notice it at once: the first year of school has a different name in nearly every state. The Australian Bureau of Statistics uses the neutral term Pre-Year 1 and lists them all.',
      body: [
        { kind: 'table', caption: 'The first year of school by state and territory, as listed by the ABS', head: ['State or territory', 'Name of the first year', 'Compulsory schooling, as the ABS summarises it'], rows: [
          ['New South Wales', 'Kindergarten', 'From the age of six'],
          ['Australian Capital Territory', 'Kindergarten', 'From the age of six'],
          ['Victoria', 'Preparatory (Prep)', 'From the age of six; children turning five before 30 April may start that year'],
          ['Queensland', 'Preparatory (Prep)', 'From the age of six years and six months'],
          ['Tasmania', 'Preparatory (Prep)', 'From the age of five'],
          ['South Australia', 'Reception', 'From the age of six; children turning five before 1 May can start in term 1'],
          ['Western Australia', 'Pre-primary', 'From the beginning of the year in which a child will reach five years and six months'],
          ['Northern Territory', 'Transition', 'From the age of six']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The same structure everywhere',
          left: [
            'Beneath the names, the structure is national. In the ABS\'s words, formal schooling consists of primary school "from Pre-Year 1 to Year 6, and secondary school from Year 7 to Year 12 in all states and territories". The Australian Curriculum calls the first year the Foundation year.',
            'So when we group children for coding, we use age and readiness, and we treat a Prep child in Brisbane and a Kindergarten child in Sydney as being at the same stage.'
          ],
          rightH3: 'How many children that is',
          right: [
            'In 2025, according to the ABS, 4,160,918 students were enrolled in 9,673 schools across Australia, an increase of 0.7% on 2024.',
            'Of those students, 62.8% were in government schools, 20.0% in Catholic schools and 17.2% in independent schools. Coding at home is not tied to any of these; children from every kind of school join the same classes.'
          ] },
        { kind: 'table', mt: true, caption: 'What coding looks like at each stage of primary school', head: ['Stage', 'Typical ages', 'What children build with us'], rows: [
          ['First year to Year 2', '5 to 8', 'Short Scratch animations, a character that follows the arrow keys, a first quiz with a score'],
          ['Years 3 and 4', '8 to 10', 'Complete Scratch games with timers, levels and sound, and simple web pages'],
          ['Years 5 and 6', '10 to 12', 'Larger Scratch projects, a move into Python, block-built phone apps and an introduction to how AI learns']
        ] },
        { kind: 'source', html: 'Sources, read 7 October 2026: <a class="ag-inline-link" href="https://www.abs.gov.au/methodologies/schools-methodology/2025" rel="noopener" target="_blank">ABS, Schools methodology, 2025</a> (schooling structure, first-year names and starting ages) and <a class="ag-inline-link" href="https://www.abs.gov.au/statistics/people/education/schools/2025" rel="noopener" target="_blank">ABS, Schools, 2025</a>, released 5 March 2026. Starting-age rules are set by each state\'s own legislation and can change; check with your school.' }
      ]
    },
    {
      id: 'school', tint: 'deep', eyebrow: 'At school',
      h2: 'Where this meets Digital Technologies at school',
      lede: 'The Australian Curriculum v9, published by ACARA, includes Digital Technologies from the very first year. Coding at home works best when it reinforces what children meet in class rather than racing past it.',
      body: [
        { kind: 'table', caption: 'Early Digital Technologies content descriptions, Australian Curriculum v9', head: ['Band', 'Code', 'Content description, as published'], rows: [
          ['Foundation', 'AC9TDIFK02', '"represent data as objects, pictures and symbols"'],
          ['Years 1 and 2', 'AC9TDI2P02', '"follow and describe algorithms involving a sequence of steps, branching (decisions) and iteration (repetition)"'],
          ['Years 1 and 2', 'AC9TDI2P06', '"access their school account with a recorded username and password"']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Sequence, decision, repeat',
          left: [
            'The Years 1 and 2 description names the three ideas every program is built from: a sequence of steps, a decision and a repetition. In Scratch those become a stack of blocks, an <em>if</em> block and a <em>repeat</em> block.',
            'A child who has used all three in a game of their own tends to find the classroom version easy, and often ends up helping a classmate.'
          ],
          rightH3: 'Not a replacement for school',
          right: [
            'We do not teach to any particular school\'s program, and states and territories implement the curriculum in their own ways. What we add is time: an hour a week of building, with a teacher, on projects the child chose.',
            'For older primary students moving towards Python, the <a class="ag-inline-link" href="/game-development-for-kids-australia">game development path</a> shows how this continues into Years 7 to 10.'
          ] },
        { kind: 'source', html: 'Where the quotations come from: ACARA publishes the <a class="ag-inline-link" href="https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-f-6-v9.docx" rel="noopener" target="_blank">Foundation to Year 6 Digital Technologies content</a> for version 9 as a Word file, which we checked on 7 October 2026.' }
      ]
    },
    {
      id: 'time-zones', tint: 'tint', eyebrow: 'Time zones',
      h2: 'How lesson times work across Australia',
      lede: 'Clocks in India stay the same all year, and that is where our teachers work. Australia has three standard time zones, and only some states use daylight saving, so the gap between a child\'s clock and the teacher\'s clock depends on where you live and the time of year.',
      body: [
        { kind: 'table', caption: 'How far Australian clocks are ahead of India time', head: ['Where', 'April to October', 'October to April'], rows: [
          ['NSW, Victoria, the ACT and Tasmania', '4 hours 30 minutes (AEST)', '5 hours 30 minutes (AEDT)'],
          ['Queensland', '4 hours 30 minutes (AEST)', '4 hours 30 minutes (no daylight saving)'],
          ['South Australia', '4 hours (ACST)', '5 hours (ACDT)'],
          ['Northern Territory', '4 hours (ACST)', '4 hours (no daylight saving)'],
          ['Western Australia', '2 hours 30 minutes (AWST)', '2 hours 30 minutes (no daylight saving)']
        ] },
        { kind: 'p', mt: true, html: 'Daylight saving in the states that use it begins on the first Sunday in October and ends on the first Sunday in April; for this season that is 4 October 2026 to 4 April 2027. We take this from the IANA time zone database, the same data computers and phones use, release 2026e. So an Australian after-school slot lands around midday or early afternoon for the teacher, an easy fit. Your family\'s exact slot gets fixed during the trial lesson.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'A first program', p: 'Some children\'s very first Python program converts a time between their city and India. It sounds dull until they discover the half hour, and then the midnight problem.' },
          { h3: 'The half hour', p: 'India runs at UTC plus five and a half hours. So converting means subtracting hours and minutes, not just hours, and children quickly learn to work in minutes: 4:30 pm becomes 990 minutes after midnight.' },
          { h3: 'The midnight problem', p: 'A day has 1,440 minutes. Subtract 330 minutes from 2:00 am Sydney summer time and you get minus 210, which makes no sense on a clock. Taking the answer modulo 1,440 gives 1,230 minutes: 8:30 pm the previous evening in India.' }
        ] },
        { kind: 'table', mt: true, caption: 'Our worked examples: an Australian lesson time in India time', head: ['Lesson in Australia', 'Gap to India', 'Same moment in India'], rows: [
          ['4:30 pm in Brisbane', '4 hours 30 minutes', '12:00 noon'],
          ['4:30 pm in Perth', '2 hours 30 minutes', '2:00 pm'],
          ['4:00 pm in Darwin', '4 hours', '12:00 noon'],
          ['5:00 pm in Adelaide in January', '5 hours', '12:00 noon'],
          ['4:00 pm in Melbourne in July', '4 hours 30 minutes', '11:30 am']
        ] },
        { kind: 'source', html: 'Source, read 7 October 2026: <a class="ag-inline-link" href="https://data.iana.org/time-zones/tzdata-latest.tar.gz" rel="noopener" target="_blank">IANA time zone database</a>, release 2026e, file australasia (rules AN, AV, AS and AT: clocks forward on the first Sunday in October, back on the first Sunday in April). The conversions in the table are our own arithmetic.' }
      ]
    },
    {
      id: 'safety', tint: 'deep', eyebrow: 'Online safety',
      h2: 'How we keep young children safe in a live class',
      lede: 'Parents are right to ask hard questions before a young child joins any online class. Here is how our classes work, and what we suggest families set up at home.',
      body: [
        { kind: 'three', cells: [
          { h3: 'A teacher, always', p: 'Every lesson is led live by a teacher from start to finish. Children are never left in an unsupervised room together.' },
          { h3: 'Your accounts, your rules', p: 'Parents set up any accounts a course needs and decide what is shared. Children never need a social media account for our lessons.' },
          { h3: 'Parents can sit in', p: 'You are welcome to sit beside your child, especially in the first few weeks.' }
        ] },
        { kind: 'p', mt: true, html: 'The curriculum itself starts teaching personal data early. For Years 1 and 2, ACARA includes a description about recognising that "some websites and apps store their personal data online", and another about accessing a school account with a username and password. We build on the same habits: children use only the accounts their parents set up, choose usernames that do not reveal their real name, and learn why a password is never shared, even with a friend.' },
        { kind: 'two', mt: true,
          leftH3: 'Accounts children need',
          left: [
            'Scratch can be used without an account to start with; saving and sharing projects later needs one, created by a parent.',
            'Python is installed on the family computer or used in a browser editor we recommend in the first lesson. No social features are involved.'
          ],
          rightH3: 'What we suggest at home',
          right: [
            'Keep the computer in a shared room for younger children, so lessons happen where an adult is nearby.',
            'Teach children not to share their full name, school or address in any online space, a habit the curriculum itself encourages from Year 1.'
          ] }
      ]
    },
    {
      id: 'what-they-learn', tint: '', eyebrow: 'Beyond Scratch',
      h2: 'What else Australian kids learn with us',
      lede: 'Coding is the core, but by the upper primary years many children want to branch out. These are the most common next steps.',
      body: [
        { kind: 'table', caption: 'Common directions after a first Scratch course', head: ['Direction', 'Typical age', 'What it involves'], rows: [
          ['Python', '9 to 12', 'Text-based code for the first time, turtle drawings, small games and quizzes'],
          ['Web pages', '9 to 12', 'HTML and CSS for a page about a hobby, then a little JavaScript to make it interactive'],
          ['Phone apps', '8 to 12', 'Block-built apps that install on a real phone or tablet'],
          ['AI literacy', '8 to 14', 'How AI learns from data, where it goes wrong, and how to check what it says'],
          ['Minecraft and Roblox', '7 to 14', 'Coding inside worlds children already love, with MakeCode blocks or Luau'],
          ['Problem solving', '7 to 12', 'Logic puzzles and step-by-step thinking that carry into maths and every subject']
        ] },
        { kind: 'p', mt: true, html: 'Families sometimes worry that an online class cannot hold a young child\'s attention. In practice, a small group in which every child is building something, sharing their screen and seeing classmates\' work holds attention better than many in-person settings. Unsure about readiness? Read <a class="ag-inline-link" href="/best-age-to-start-coding">our note on starting ages</a>, or simply book the trial lesson and let the teacher judge it in person.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'Four stages through primary school',
    lede: 'Children move at different speeds; these are the milestones we look for rather than a fixed timetable.',
    table: { caption: 'Milestones in a young coder\'s first years', head: ['Stage', 'What your child can do'], rows: [
      ['1. Follow', 'Follow a sequence of blocks to make a character move, talk and play a sound'],
      ['2. Decide', 'Use if and repeat blocks to build a game with a score and a way to win or lose'],
      ['3. Design', 'Plan a game or story on paper first, then build it, test it and fix it without help'],
      ['4. Type', 'Write a short Python program from scratch and explain what every line does']
    ] },
    left: { h3: 'Can a six-year-old really do this?', ps: [
      'Yes, if they can read simple words and use a mouse or trackpad. Younger children learn in shorter bursts, with plenty of movement on screen and quick results.',
      'Children under about six usually do better with unplugged games and picture-based activities first.'
    ] },
    right: { h3: 'Around school terms', ps: [
      'Australian schools have four terms, with longer breaks over summer. You pay one month at a time, which makes a holiday break easy to take and easy to end.',
      'Classes keep going through short breaks for families who want them to.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for primary-age coders',
    lede: 'Arranged by age and by interest. Where your child joins is worked out in the trial lesson.',
    bands: [
      { num: 'I', h3: 'First steps', sub: 'Ages 6 to 8', courses: [
        { code: 'OCAU / FST / 01', slug: 'scratch-programming-complete-course', title: 'Scratch Coding for Kids', blurb: 'Games and animations from the very first block.' },
        { code: 'OCAU / FST / 02', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'Twelve months that start with blocks and end with apps.' },
        { code: 'OCAU / FST / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem Solving for Kids', blurb: 'Logic and step-by-step thinking, ages 7 to 12.' }
      ] },
      { num: 'II', h3: 'Real code', sub: 'Ages 9 to 12', courses: [
        { code: 'OCAU / TXT / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'First text code, Pygame games and AI projects.' },
        { code: 'OCAU / TXT / 02', slug: 'kids-ai-web-development-course', title: 'Web Development for Kids', blurb: 'HTML, CSS and a first taste of JavaScript.' },
        { code: 'OCAU / TXT / 03', slug: 'ai-literacy-for-kids-course', title: 'AI Literacy for Kids', blurb: 'How AI works, and how to check what it says.' }
      ] },
      { num: 'III', h3: 'Building more', sub: 'Ages 8 to 12', courses: [
        { code: 'OCAU / BLD / 01', slug: 'block-coding-app-development-masterclass', title: 'App Making for Kids', blurb: 'Real apps on a real phone, built with blocks.' },
        { code: 'OCAU / BLD / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft Coding for Kids', blurb: 'MakeCode blocks inside a familiar world.' },
        { code: 'OCAU / BLD / 03', slug: 'maths-through-coding', title: 'Maths Through Coding', blurb: 'Python projects that teach maths, ages 10 to 15.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live lessons built for young children',
    lede: 'Every lesson is live, with a teacher who knows each child by name, and is broken into short activities so younger children stay with it.',
    slots: [
      { time: 'Weekday afternoons', l: 'What most primary families pick, straight after the school day.' },
      { time: 'Saturday morning', l: 'Popular with younger children and busy families.' },
      { time: 'Sunday', l: 'For families with Saturday sport.' }
    ],
    cells: [
      { h3: 'A trial at no cost', p: 'The teacher watches how your child works before suggesting a course or a group.' },
      { h3: 'Kept small', p: 'A class holds fifteen to twenty children close in age and ability, so each one gets noticed.' },
      { h3: 'Individual lessons', p: 'Helpful for children who are very quick, very quiet, or bursting with one idea.' },
      { h3: 'Their own work', p: 'Children build every project themselves. Teachers explain and ask questions; they do not take over the mouse.' },
      { h3: 'Progress you can see', p: 'Finished projects can be played at home, so you see what was learned each week.' },
      { h3: 'One teacher', p: 'Children keep the same teacher from week to week, which matters a great deal at this age.' }
    ]
  },

  projectsH2: 'Projects built by our students',
  projectsLede: 'Real projects our learners completed. Browse the wider gallery, sorted by age and subject, on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Unedited Google reviews from parents and students, shown exactly as written.',

  fees: {
    h2: 'Fees for online coding classes',
    lede: 'Outside India, fees are charged monthly in US dollars at one rate for every country. There is no joining fee and no lock-in for a term, so a family can finish at the end of whichever month suits, school holidays included.',
    free: ['Your child builds something real', 'A clear course suggestion afterwards', 'Nothing to pay, no card asked'],
    group: ['Classes of fifteen to twenty', 'A familiar teacher each week', 'Peers close in age and level', 'Finish whenever a month ends'],
    one: ['Undivided attention from a teacher', 'Times that fit around the school week', 'Pace set entirely by your child']
  },

  faq: {
    eyebrow: 'Questions from parents',
    h2: 'What Australian parents ask about online coding classes',
    items: [
      { q: 'What are online coding classes for kids?', a: 'They are live video lessons in which a teacher guides a small group of children, or one child, as they build games, animations and simple programs. Each child works on their own computer and shares their screen when they need help.' },
      { q: 'What is Scratch?', a: 'Scratch is a free, block-based programming language in which children snap instructions together like puzzle pieces instead of typing them. It is the usual first language for primary school children.' },
      { q: 'What age can my child start?', a: 'Around six is typical, provided simple reading and handling a mouse or trackpad are comfortable. Typed languages such as Python tend to click from roughly age nine.' },
      { q: 'My child is in Prep in Queensland and their cousin is in Kindergarten in Sydney. Are they at the same stage?', a: 'Yes. Kindergarten in NSW and the ACT, Prep in Victoria, Queensland and Tasmania, Reception in South Australia, Pre-primary in Western Australia and Transition in the Northern Territory are all the first year of school.' },
      { q: 'Does this follow the Australian Curriculum?', a: 'It reinforces it. The Australian Curriculum v9 includes Digital Technologies from the Foundation year, and our early lessons use the same ideas of sequence, decisions and repetition, in projects children choose.' },
      { q: 'What time are lessons in Australia?', a: 'Whenever suits your family on weekday afternoons or weekends, in your own local time; we settle it during the trial. Because our teachers work from India, their clocks run two and a half to five and a half hours behind Australia\'s, which puts your after-school hours in their working day.' },
      { q: 'Do we need to change lesson times when daylight saving starts?', a: 'Only in the states that use it. NSW, Victoria, the ACT, Tasmania and South Australia change clocks on the first Sunday in October and the first Sunday in April. Lesson times are set in your local time, so check the time with us when the clocks change.' },
      { q: 'Is an online class safe for a young child?', a: 'Every lesson is led live by a teacher from start to finish, children are never left alone together in a class, parents set up any accounts a course needs, and you are welcome to sit in on any lesson.' },
      { q: 'Which computer and accessories are needed?', a: 'A laptop or desktop computer with a keyboard, a mouse or trackpad, a webcam, headphones and a steady internet connection. A tablet alone is not enough for most courses.' },
      { q: 'How much are online coding classes for kids?', a: 'Trying a class costs nothing and we never ask for card details beforehand. After that, families pay month by month; the group and private prices sit in the fees block further down, and there is neither a joining fee nor a term commitment.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Where to go next, whether your child loves games, maths or simply wants to know which language comes first.',
    items: [
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'Our main page for Australian families.' },
      { href: '/game-development-for-kids-australia', label: 'Game development for kids', p: 'From Scratch games to a real engine by Year 10.' },
      { href: '/online-maths-tutoring-australia', label: 'Online maths tutoring in Australia', p: 'The same teachers, for maths.' },
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch coding classes', p: 'The first language, in detail.' },
      { href: '/blog/scratch-vs-python-which-better-young-learners', label: 'Scratch or Python first?', p: 'How to choose a first language.' },
      { href: '/best-age-to-start-coding', label: 'When to start coding', p: 'Readiness signs by age.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us how to reach you and when, and we will phone. In the trial lesson your child makes a small project alongside a teacher; you then get a straight answer on the right course and on lesson times that work in your state.',
    readFirst: 'Not ready to talk yet? Read <a class="ag-inline-link" href="/how-we-teach">how a lesson runs</a> or look through <a class="ag-inline-link" href="/courses">all of our courses</a> first; the free class will still be there.',
    note: 'For the fastest answer, WhatsApp us from your Australian mobile. We are based in India, so expect a +91 number; there is no Australian branch or shopfront.',
    formNote: 'Free, no card, no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Young coders', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch classes' },
        { href: '/minecraft-coding-classes-for-kids', label: 'Minecraft classes' },
        { href: '/roblox-coding-classes-for-kids', label: 'Roblox classes' },
        { href: '/coding-roadmap', label: 'The coding roadmap' }
      ] },
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/game-development-for-kids-australia', label: 'Game development for kids' },
        { href: '/online-maths-tutoring-australia', label: 'Maths tutoring' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Different clocks, different year names, the same first block'
  },

  personalityCss: `
.ag-root.ag-ocau .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-ocau .ag-capsule { border-left-width: 3px; border-radius: 8px; }
.ag-root.ag-ocau .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-ocau .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-ocau .ag-band-head h3 { letter-spacing: -0.008em; }
.ag-root.ag-ocau .ag-slots { gap: 1.2rem; }
`,

  dossier: {
    curriculumAuthority: 'Australia, Foundation to Year 6. ABS, Schools methodology, 2025: primary from Pre-Year 1 to Year 6 and secondary from Year 7 to Year 12 in all states and territories; Pre-Year 1 is the foundation year in the Australian Curriculum, kindergarten in the ACT and NSW, preparatory in Queensland, Tasmania and Victoria, pre-primary in WA, reception in SA, transition in the NT; minimum starting ages by state (NSW, Victoria, SA, NT, ACT from six; Queensland six years and six months; Tasmania five; WA the year a child reaches five years and six months). ABS, Schools, 2025 (released 5 March 2026): 4,160,918 students in 9,673 schools, up 0.7% on 2024; 62.8% government, 20.0% Catholic, 17.2% independent. ACARA v9 Digital Technologies F-6: AC9TDIFK02, AC9TDI2P02, AC9TDI2P06, AC9TDI2P07 quoted.',
    localProject: 'Clock arithmetic for a live class across Australia: a child\'s first Python program converts an Australian lesson time to India time in minutes, subtracting 270 (AEST), 330 (AEDT), 240 (ACST), 300 (ACDT) or 150 (AWST), and fixes the midnight wrap by taking the answer modulo 1,440 (2:00 am Sydney summer time minus 330 minutes is minus 210, which is 1,230 minutes, 8:30 pm the previous evening in India). Daylight-saving dates from the IANA tz database release 2026e: first Sunday in October to first Sunday in April (4 October 2026 to 4 April 2027). Lesson family: clock arithmetic modulo 24 hours with half-hour offsets.',
    requiredMentions: ['4,160,918', '9,673', 'Pre-Year 1', 'AC9TDIFK02', 'AC9TDI2P02', 'AC9TDI2P06', 'six years and six months', 'five years and six months', '1,440 minutes', '2026e'],
    sources: [
      { claim: 'ABS, Schools methodology, 2025: schooling structure, Pre-Year 1 names by state and territory, minimum starting ages.', url: 'https://www.abs.gov.au/methodologies/schools-methodology/2025' },
      { claim: 'ABS, Schools, 2025, released 5 March 2026: 4,160,918 students in 9,673 schools; 0.7% increase; 62.8% government, 20.0% Catholic, 17.2% independent.', url: 'https://www.abs.gov.au/statistics/people/education/schools/2025' },
      { claim: 'ACARA, Australian Curriculum v9, Digital Technologies curriculum content F-6: AC9TDIFK02, AC9TDI2P02, AC9TDI2P06, AC9TDI2P07.', url: 'https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-f-6-v9.docx' },
      { claim: 'IANA time zone database, release 2026e, file australasia: daylight saving rules for NSW, Victoria, SA and Tasmania (first Sunday in October to first Sunday in April); Queensland, WA and NT on standard time.', url: 'https://data.iana.org/time-zones/tzdata-latest.tar.gz' }
    ],
    rejectedClaims: [
      'State education department pages on school starting ages: several (SA, NT, ACT) returned bot checks or 403 and were not circumvented; the ABS methodology summary is used instead and the page tells parents to check with their school.',
      'Promised evening or fixed lesson hours: the hour is agreed in the free class (spec decision 7).',
      'Scratch user numbers or age range: the Scratch site renders by script and was not read raw, so none are quoted.',
      'Any claim that the classes cover a particular school\'s program or assessment: refused.',
      'Australian-specific online safety statistics: no primary source read raw, so none used.'
    ]
  }
};
