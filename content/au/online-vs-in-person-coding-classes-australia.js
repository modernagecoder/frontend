'use strict';
// Online vs in-person coding classes, Australia (ag- comparison door; AU cluster Phase 4, row 108).
// Sources, read raw on 7 October 2026:
//  - Microsoft Learn, "Prepare your organization's network for Microsoft Teams", bandwidth table (bitrate
//    kilobit/s up/down): video one-to-one minimum 150/150, recommended 1,500/1,500, best performance 4,000/4,000;
//    "Teams is always conservative on bandwidth utilization and can deliver HD video quality in under 1.5 Mbps".
//  - nbn co, "Speed" page: "new 2000Mbps wholesale download speed options, available from participating providers".
//  - Australian Tutoring Association, "In home tutoring": tutoring "should take place in an open area where the
//    parent/guardian can view and hear the process"; "Tutoring should NOT take place in the student's bedroom".
//  - Victorian Government, school term dates 2027: Term 1 27 January to 25 March, Term 2 12 April to 25 June,
//    Term 3 12 July to 17 September, Term 4 4 October to 17 December.
// Our arithmetic: kilobits per second x 3,600 / 8 = kilobytes per hour. 1,500 kbps for an hour is 675 megabytes each
// way, 1.35 gigabytes both ways; 80 one-hour lessons a year is 108 gigabytes. A 20-minute drive each way to a weekly
// class across the 40 Mondays inside Victoria's 2027 term dates is 1,600 minutes, about 26.7 hours, in the car.
// Lesson family: bits versus bytes, converting a video call's bitrate into data volume.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'guide', tag: 'ONLINE OR IN PERSON', blurb: 'Online and in-person coding classes for Australian children compared honestly, with the travel time and the internet data each one really uses.' },
  slug: 'online-vs-in-person-coding-classes-australia',
  code: 'ovau',
  accent: '#40649C',
  accentRationale: 'Online vs in-person, Australia: a steel blue chosen by hand, muted, at least 10 RGB units from every accent in use and outside the excluded hue bands',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'Online vs in-person coding classes, Australia',
  title: 'Online vs In-Person Coding Classes in Australia Compared',
  description: 'Online or in-person coding classes for Australian kids: travel time, internet data, screen sharing, supervision and focus, compared honestly so you can choose well.',
  ogDescription: 'How online and in-person coding classes really differ for Australian families, with the data a video lesson uses and the hours a weekly drive takes.',
  twitterDescription: 'Online vs in-person coding classes in Australia: travel, data, supervision and focus compared.',
  pageName: 'Online vs In-Person Coding Classes in Australia',
  webPageDescription: 'A comparison of online and in-person coding classes for Australian children, with worked figures for internet data and travel time.',
  courseDescription: 'Live online coding classes for Australian learners aged 6 to 67, taught over video with screen sharing, in small groups or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'Online or in person',
  navLinks: [
    { href: '#differences', label: 'Differences' },
    { href: '#data', label: 'Internet data' },
    { href: '#travel', label: 'Travel time' },
    { href: '#setup', label: 'Home setup' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Ages 6 to 67 &middot; Choosing a format',
  h1: 'Online vs in-person coding classes',
  lede: 'Some families picture coding classes as a room of children at laptops after school; others picture a teacher on a screen at the kitchen table. Both can teach well, and both can go badly. This page sets out where the formats genuinely differ, puts numbers on two things parents ask about most, the internet data an online lesson uses and the hours a weekly drive adds up to, and ends with a short checklist for a home setup that makes online lessons work.',
  secondaryCta: { href: '#data', label: 'Internet data' },
  wa: 'Hello Modern Age Coders, we are comparing online and in-person coding classes in Australia. Could we book a free first lesson online?',
  heroNote: 'Live online teaching since 2020 &middot; 10,000+ students &middot; screen sharing in every lesson',
  spec: [
    ['For', 'Ages 6 to 67'],
    ['Our format', 'Live online video'],
    ['Screen', 'Shared both ways'],
    ['Data per hour', 'Under 1.5 GB at HD'],
    ['Travel', 'None'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Times', 'Set for your state'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Online coding classes remove travel and let the teacher see the learner\'s screen up close; in-person classes offer a shared room and fewer home distractions. Neither format is automatically better for coding. A one-to-one video lesson at Microsoft\'s recommended 1,500 kilobits per second uses about 675 megabytes each way per hour, while a 20-minute drive each way to a weekly class adds up to about 26.7 hours a year.',

  picks: {
    eyebrow: 'Courses that work well online',
    h2: 'Three courses families often start online',
    lede: 'Coding suits online teaching because the work already lives on a screen. These are common first choices.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'OVAU / 01', title: 'Block coding for younger children', note: 'Ages 6 to 9. Scratch on a shared screen, with the teacher pointing at blocks.' },
      { course: 'python-ai-kids-masterclass', code: 'OVAU / 02', title: 'Python and AI for children', note: 'Ages 9 to 12. Typed code reviewed line by line over screen share.' },
      { course: 'python-complete-masterclass-teens', code: 'OVAU / 03', title: 'Python for teenagers', note: 'Ages 13 to 18. Projects built and debugged together live.' }
    ]
  },

  sections: [
    {
      id: 'differences', tint: 'tint', eyebrow: 'Where they differ',
      h2: 'What actually changes between online and in-person classes',
      lede: 'Most comparisons stop at "convenient" versus "social". For coding in particular, the differences are more specific than that.',
      body: [
        { kind: 'table', caption: 'Online and in-person coding classes, factor by factor', head: ['Factor', 'Online, live', 'In person'], rows: [
          ['Seeing the learner\'s code', 'Teacher sees the exact screen, line by line, through screen sharing', 'Teacher walks between desks and sees one screen at a time'],
          ['Travel', 'None', 'A drive or a trip on public transport, twice for each lesson'],
          ['Choice of teacher', 'Any teacher, anywhere, at a time that suits your state', 'Whoever teaches at the nearest venue on that afternoon'],
          ['Social contact', 'Classmates on video, talking and sharing screens', 'Classmates in the same room'],
          ['Distractions', 'Home: siblings, pets, other tabs', 'Venue: noise, waiting for help, other children\'s screens'],
          ['Equipment', 'The family\'s own computer and internet', 'Often the venue\'s computers'],
          ['Supervision', 'A parent nearby at home', 'Staff at the venue'],
          ['What happens when sick', 'Can often still join from home if well enough', 'Usually a missed session']
        ] },
        { kind: 'p', mt: true, html: 'The single biggest difference for coding is visibility. In a room, a teacher sees a child\'s program for a few seconds while walking past. Online, with the learner sharing their screen, the teacher reads the whole program and can ask the learner to scroll, run it, or change one line while everyone watches. That is why we teach live online rather than in a hall, and why we think the format suits coding better than, say, robotics with physical kits.' },
        { kind: 'two', mt: true,
          leftH3: 'Where in person wins',
          left: [
            'Hands-on hardware, such as robotics kits, soldering or drones, is easier with a teacher in the room who can hold the part and show where it goes.',
            'Some children concentrate better away from home, especially if the family computer sits in a busy living area with a television nearby.'
          ],
          rightH3: 'Where online wins',
          right: [
            'There is no drive across town on a weeknight, which matters a great deal in outer suburbs and regional areas with no local provider at all.',
            'The learner works on the same computer they will code on at home, so projects carry straight on between lessons without copying files across.'
          ] }
      ]
    },
    {
      id: 'data', tint: 'deep', eyebrow: 'Internet data',
      h2: 'How much internet data does an online lesson use?',
      lede: 'Families on limited plans, or sharing a connection with a busy household, sometimes ask whether video lessons will eat their allowance. Microsoft publishes the bandwidth its Teams video calls use, and turning that into data per hour is a neat lesson in bits and bytes.',
      body: [
        { kind: 'table', caption: 'Microsoft Teams one-to-one video, bandwidth by quality level (Microsoft Learn), and our data-per-hour arithmetic', head: ['Quality level', 'Bitrate, kilobit/s up/down', 'Data per hour, one way', 'Data per hour, both ways'], rows: [
          ['Minimum', '150/150', '67.5 megabytes', '135 megabytes'],
          ['Recommended', '1,500/1,500', '675 megabytes', '1.35 gigabytes'],
          ['Highest listed level', '4,000/4,000', '1,800 megabytes', '3.6 gigabytes']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The arithmetic, step by step',
          left: [
            'A bitrate is measured in bits per second, but data allowances are counted in bytes, and one byte is eight bits. So 1,500 kilobits per second is 1,500 &divide; 8 = 187.5 kilobytes every second.',
            'An hour has 3,600 seconds: 187.5 &times; 3,600 = 675,000 kilobytes, or 675 megabytes, in each direction. Sending and receiving together, that is 1.35 gigabytes for an hour at the recommended level.'
          ],
          rightH3: 'Over a whole year',
          right: [
            'At two one-hour lessons a week for about 40 school weeks, a learner has roughly 80 lessons a year. At the recommended level, 80 &times; 1.35 gigabytes comes to 108 gigabytes for the year.',
            'Microsoft notes that Teams "can deliver HD video quality in under 1.5 Mbps", and calls adapt downwards when bandwidth is short, so a real lesson usually uses less than the recommended figure.'
          ] },
        { kind: 'p', mt: true, html: 'This is a calculation children can do themselves in Python: <code>kbps * 3600 / 8 / 1000</code> gives megabytes per hour. The classic mistake, forgetting to divide by eight, makes every answer eight times too large, which is exactly why internet plans advertised in megabits per second seem to download files more slowly than the number suggests. On the speed side, nbn co now advertises "new 2000Mbps wholesale download speed options, available from participating providers", far above what a lesson needs; for a video lesson, a steady upload matters more than a fast download.' },
        { kind: 'source', html: 'Sources, read 7 October 2026: <a class="ag-inline-link" href="https://learn.microsoft.com/en-us/microsoftteams/prepare-network" rel="noopener" target="_blank">Microsoft Learn, Prepare your network for Teams</a> (bandwidth table, bitrate kilobit/s up/down) and <a class="ag-inline-link" href="https://www.nbnco.com.au/residential/learn/speed" rel="noopener" target="_blank">nbn co, speed</a>. Data-per-hour and yearly figures are our own arithmetic. We teach on our own video platform; Microsoft\'s published figures are used here as a well-documented reference point for video calls in general.' }
      ]
    },
    {
      id: 'travel', tint: 'tint', eyebrow: 'Travel time',
      h2: 'The hidden cost of in-person classes: time in the car',
      lede: 'A weekly class twenty minutes away sounds small. Added up over a school year, it is not.',
      body: [
        { kind: 'table', caption: 'Victorian school term dates, 2027 (Victorian Government)', head: ['Term', 'Start', 'Finish', 'Mondays inside the term'], rows: [
          ['Term 1', 'Wednesday 27 January', 'Thursday 25 March', '8'],
          ['Term 2', 'Monday 12 April', 'Friday 25 June', '11'],
          ['Term 3', 'Monday 12 July', 'Friday 17 September', '10'],
          ['Term 4', 'Monday 4 October', 'Friday 17 December', '11']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'A weekly class, worked through',
          left: [
            'Counting the Mondays between each term\'s start and finish gives 40 for the 2027 school year (public holidays are not removed, so a few of these will be days off).',
            'A class 20 minutes away means 40 minutes of driving per lesson, since you go there and back. Over 40 Mondays that is 1,600 minutes, or about 26.7 hours, before counting the wait while the lesson runs.'
          ],
          rightH3: 'What that time is worth',
          right: [
            'For a parent, 26.7 hours is more than three full working days a year spent driving to one activity. For a second sibling\'s activity on another night, double it.',
            'Online, the same lesson starts when the learner opens the laptop. The time saved is not a reason to choose online on its own, but it belongs in any honest comparison.'
          ] },
        { kind: 'p', mt: true, html: 'Other states\' terms differ by a few days, and travel times range from a five-minute walk to an hour in regional areas, so plug in your own numbers: lessons per year &times; minutes each way &times; 2 &divide; 60 gives hours a year. A family 45 minutes from the nearest provider, which is common outside the capitals, would spend 60 hours a year on the same weekly class.' },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.vic.gov.au/school-term-dates-and-holidays-victoria" rel="noopener" target="_blank">Victorian Government, school term dates and holidays</a>, read 7 October 2026. Monday counts and driving totals are our own arithmetic.' }
      ]
    },
    {
      id: 'setup', tint: 'deep', eyebrow: 'Home setup',
      h2: 'Making online lessons work at home',
      lede: 'Most problems with online classes are not about the teaching. They come from where and how the learner sits.',
      body: [
        { kind: 'table', caption: 'A home setup checklist for online coding lessons', head: ['Item', 'What works', 'Why'], rows: [
          ['Device', 'A laptop or desktop with a keyboard', 'Typing code on a tablet or phone is slow and hides the screen'],
          ['Place', 'A shared family space, not a bedroom', 'Parents can see and hear the lesson'],
          ['Connection', 'Wired or close to the router if possible', 'A steady upload keeps screen sharing smooth'],
          ['Headset', 'Wired earphones with a microphone', 'Clearer audio and no echo for younger children'],
          ['Tabs', 'Only the lesson and the code editor open', 'Fewer distractions, and easier screen sharing'],
          ['Start', 'Join two minutes early', 'Sound and screen checks do not eat the lesson']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Supervision, in a sensible place',
          left: [
            'The Australian Tutoring Association\'s guidance on in-home tutoring says tutoring "should take place in an open area where the parent/guardian can view and hear the process", and that it "should NOT take place in the student\'s bedroom".',
            'That advice was written for a tutor visiting the house, and it makes just as much sense for a video lesson: the kitchen table or the family study is the right spot.'
          ],
          rightH3: 'For younger children',
          right: [
            'Children of six to eight usually need a parent nearby for the first few lessons to help with logging in and the microphone.',
            'Once the routine is set, most children join on their own, with an adult within earshot rather than beside them.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://ata.edu.au/parent-info/in-home-tutoring/" rel="noopener" target="_blank">Australian Tutoring Association, in-home tutoring</a>, read 7 October 2026.' }
      ]
    },
    {
      id: 'choose', tint: '', eyebrow: 'Deciding',
      h2: 'Which format suits your child?',
      lede: 'A quick way to decide, based on the questions we ask families in the free first lesson.',
      body: [
        { kind: 'table', caption: 'Online or in person: a short decision guide', head: ['If your child', 'Lean towards', 'Reason'], rows: [
          ['Wants to code games, apps or AI on a computer', 'Online', 'The work lives on screen, where the teacher sees it most clearly'],
          ['Wants to build with robots or electronics kits', 'In person, or online with a kit at home', 'Hardware is easier with hands nearby'],
          ['Gets distracted easily at home', 'In person, or online in a quieter room', 'A change of place can help focus'],
          ['Lives far from any provider', 'Online', 'No travel, and a wider choice of teachers'],
          ['Is shy in a room of strangers', 'Online, possibly one to one', 'Less pressure, and the teacher still sees everything'],
          ['Has a parent who works late', 'Online', 'No pick-up needed']
        ] },
        { kind: 'p', mt: true, html: 'You do not have to choose forever. Some of our learners take a holiday camp in person and keep their weekly lessons online; others start online, then add a school code club. For the price side of the decision, our <a class="ag-inline-link" href="/coding-classes-cost-australia">guide to coding class costs in Australia</a> works through per-lesson and per-term figures, and <a class="ag-inline-link" href="/coding-classes-near-me-australia-online-or-local">coding classes near me</a> explains how to check a local provider.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Online, stage by stage',
    h2: 'How online learners progress',
    lede: 'What online coding lessons look like as a learner grows.',
    table: { caption: 'Four stages of live online coding lessons', head: ['Stage', 'What happens on screen'], rows: [
      ['1. Settling in', 'Logging in, sharing a screen, finding the code editor without help'],
      ['2. Guided building', 'The teacher watches the learner\'s screen and prompts each step'],
      ['3. Independent building', 'The learner builds alone, shares when stuck, and explains their code'],
      ['4. Presenting', 'The learner runs their project for the group and answers questions']
    ] },
    left: { h3: 'For younger children', ps: [
      'Screen sharing becomes second nature within a few lessons, and children enjoy showing their work to classmates on video.',
      'A parent nearby helps with the first logins, then steps back.'
    ] },
    right: { h3: 'For teens and adults', ps: [
      'Online lessons fit around school, sport and work, with no travel at the end of a long day.',
      'Projects stay on the learner\'s own computer, ready to continue between lessons.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses taught live online',
    lede: 'Every course is taught live over video with screen sharing.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 12', courses: [
        { code: 'OVAU / CHD / 01', slug: 'scratch-programming-complete-course', title: 'Scratch online', blurb: 'Games and animations on a shared screen.' },
        { code: 'OVAU / CHD / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Code that builds in a world.' },
        { code: 'OVAU / CHD / 03', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox game coding', blurb: 'Luau scripts for real games.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'OVAU / TEN / 01', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Interactive web pages.' },
        { code: 'OVAU / TEN / 02', slug: 'complete-game-development-masterclass-for-teens', title: 'Game development', blurb: 'Unity and C#.' },
        { code: 'OVAU / TEN / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'Models trained and tested.' }
      ] },
      { num: 'III', h3: 'Adults', sub: '18 and over', courses: [
        { code: 'OVAU / ADL / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python from zero', blurb: 'For beginners and career changers.' },
        { code: 'OVAU / ADL / 02', slug: 'full-stack-web-development-masterclass-college', title: 'Full-stack web', blurb: 'Front end to database.' },
        { code: 'OVAU / ADL / 03', slug: 'data-analysis-mastery-course-college', title: 'Data analysis', blurb: 'Excel, SQL and Python.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live online, with the screen at the centre',
    lede: 'Every lesson is taught live, with the learner\'s code visible to the teacher throughout.',
    slots: [
      { time: 'After school', l: 'Weekday afternoons in your state.' },
      { time: 'Evenings', l: 'For teens and adults.' },
      { time: 'Weekends', l: 'Saturday and Sunday slots.' }
    ],
    cells: [
      { h3: 'Screen sharing', p: 'The teacher reads the learner\'s actual code.' },
      { h3: 'Same teacher', p: 'One teacher, week after week.' },
      { h3: 'Groups', p: 'Fifteen to twenty learners, or one to one.' },
      { h3: 'No travel', p: 'Lessons start at home, on time.' },
      { h3: 'Family welcome', p: 'Parents can sit in on any lesson.' },
      { h3: 'Own computer', p: 'Projects carry on between lessons.' }
    ]
  },

  projectsH2: 'Built in online lessons',
  projectsLede: 'Projects made by learners in live online classes, shared screen and all. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Google reviews from families, quoted exactly as written.',

  fees: {
    h2: 'Fees',
    lede: 'Online lessons outside India are charged monthly in US dollars, the same rate in every country. There is no joining fee, no term contract and no travel cost, and you can stop after any month.',
    free: ['A free first lesson online', 'A check of sound and screen sharing', 'No card details'],
    group: ['Fifteen to twenty learners', 'One regular teacher', 'Screen sharing every lesson', 'Monthly'],
    one: ['A teacher to yourself', 'Your own pace', 'Your own projects']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'Online or in-person coding classes: common questions',
    items: [
      { q: 'What is the difference between online and in-person coding classes?', a: 'Online classes are taught live over video, with the teacher seeing the learner\'s screen through screen sharing; in-person classes happen in a room, with a teacher moving between desks. The teaching can be equally good; travel, visibility of the code and the home setup differ.' },
      { q: 'What is the difference between a bit and a byte?', a: 'A byte is eight bits. Internet speeds are usually given in bits per second, while data allowances and file sizes are counted in bytes, so speeds must be divided by eight to compare them with data.' },
      { q: 'How much data does an online coding lesson use?', a: 'At Microsoft\'s recommended 1,500 kilobits per second for one-to-one video, about 675 megabytes each way per hour, or 1.35 gigabytes in total. Real lessons often use less, because calls adapt to the connection.' },
      { q: 'Are online coding classes as good as in-person ones?', a: 'For coding on a computer, often better, because the teacher can read the learner\'s whole program through screen sharing. For robotics and other hardware, in-person teaching has a real advantage.' },
      { q: 'What internet speed do we need?', a: 'A steady connection matters more than a fast one. Microsoft lists 1,500 kilobits per second up and down as recommended for one-to-one video, which most Australian home connections exceed.' },
      { q: 'Where should my child sit for online lessons?', a: 'In a shared family space rather than a bedroom, so a parent can see and hear the lesson, in line with the Australian Tutoring Association\'s guidance on home tutoring.' },
      { q: 'Can my child use a tablet?', a: 'A laptop or desktop with a keyboard works much better for coding. Tablets make typing slow and screen sharing awkward.' },
      { q: 'How much time does online save?', a: 'For a weekly class 20 minutes away, about 26.7 hours a year of driving, based on the 40 Mondays inside Victoria\'s 2027 term dates.' },
      { q: 'Do online learners still make friends?', a: 'Yes. Groups of fifteen to twenty talk, share screens and present projects to each other, and many keep the same classmates for months.' },
      { q: 'How much do online lessons cost?', a: 'The first lesson is free. After that, lessons are paid monthly with no joining fee and no term lock-in, as shown in the fees section.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for families weighing up coding classes in Australia.',
    items: [
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'Our main page for Australian families.' },
      { href: '/coding-classes-near-me-australia-online-or-local', label: 'Coding classes near me', p: 'Checking a local provider.' },
      { href: '/coding-classes-cost-australia', label: 'What coding classes cost', p: 'Per lesson and per term.' },
      { href: '/online-coding-classes-for-kids-australia', label: 'Online classes for kids', p: 'Year levels and time zones.' },
      { href: '/online-coding-tutor-australia', label: 'Online coding tutor', p: 'What a tutor does and what to check.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our method in detail.' }
    ]
  },

  start: {
    h2: 'Try a free online lesson',
    lede: 'Book a time that suits your state. In the first lesson we check sound and screen sharing, then the learner builds something real with a teacher, so you can judge online teaching for yourself.',
    readFirst: 'Still deciding? See <a class="ag-inline-link" href="/how-we-teach">how a lesson runs</a> or browse <a class="ag-inline-link" href="/courses">every course</a>.',
    note: 'WhatsApp gets the quickest answer from Australia; our team is based in India and replies from a +91 number, and we have no Australian office.',
    formNote: 'The first lesson is free, with no card asked for.'
  },

  footer: {
    cols: [
      { h4: 'Choosing a format', links: [
        { href: '/coding-classes-near-me-australia-online-or-local', label: 'Coding classes near me' },
        { href: '/coding-classes-cost-australia', label: 'What lessons cost' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/online-coding-classes-for-kids-australia', label: 'Online classes for kids' },
        { href: '/school-holiday-coding-course-australia', label: 'School holiday course' },
        { href: '/one-on-one-coding-tutor-australia', label: 'One-on-one tutor' }
      ] }
    ],
    bottomRight: 'Divide by eight before you compare'
  },

  personalityCss: `
.ag-root.ag-ovau .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-ovau .ag-capsule { border-left-width: 4px; border-radius: 4px; }
.ag-root.ag-ovau .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-ovau .ag-table caption { text-align: left; font-style: normal; }
.ag-root.ag-ovau .ag-band-head h3 { letter-spacing: -0.005em; }
.ag-root.ag-ovau .ag-slots { gap: 1.1rem; }
`,

  dossier: {
    curriculumAuthority: 'Australia, online versus in-person classes. Microsoft Learn, Prepare your network for Teams: video one-to-one bitrate kilobit/s up/down minimum 150/150, recommended 1,500/1,500, best performance 4,000/4,000; HD video "in under 1.5 Mbps". nbn co speed page: "new 2000Mbps wholesale download speed options". Australian Tutoring Association, in-home tutoring: tutoring in "an open area where the parent/guardian can view and hear the process", not in the student\'s bedroom. Victorian Government 2027 term dates: 27 January to 25 March, 12 April to 25 June, 12 July to 17 September, 4 October to 17 December.',
    localProject: 'Bits versus bytes (our arithmetic): kbps x 3,600 / 8 / 1,000 = megabytes per hour. 150 kbps: 67.5 MB; 1,500 kbps: 675 MB each way, 1.35 GB both ways; 4,000 kbps: 1,800 MB. 80 lessons a year at 1,350 MB: 108 GB. Travel: 40 Mondays inside Victoria\'s 2027 term dates (8 + 11 + 10 + 11) x 40 minutes = 1,600 minutes, about 26.7 hours; 45 minutes each way gives 60 hours. Lesson family: bitrate to data volume.',
    requiredMentions: ['1,500/1,500', '150/150', '4,000/4,000', 'kilobit/s up/down', '675 megabytes', '1.35 gigabytes', '108 gigabytes', '2000Mbps wholesale download', 'open area where the parent', '26.7 hours'],
    sources: [
      { claim: 'Microsoft Learn: Teams bandwidth requirements table (video one-to-one minimum, recommended, best performance) and HD under 1.5 Mbps.', url: 'https://learn.microsoft.com/en-us/microsoftteams/prepare-network' },
      { claim: 'nbn co speed page: new 2000Mbps wholesale download speed options from participating providers.', url: 'https://www.nbnco.com.au/residential/learn/speed' },
      { claim: 'Australian Tutoring Association: in-home tutoring guidance (open area, not the bedroom).', url: 'https://ata.edu.au/parent-info/in-home-tutoring/' },
      { claim: 'Victorian Government: 2027 school term dates.', url: 'https://www.vic.gov.au/school-term-dates-and-holidays-victoria' }
    ],
    rejectedClaims: [
      'Zoom and Google Meet bandwidth figures: the Zoom help page rendered only through JavaScript and the Google Meet help URL returned 404, so only Microsoft\'s published table is used.',
      'eSafety Commissioner guidance on online lessons: esafety.gov.au timed out and was not circumvented.',
      'Research claims that online or in-person learning produces better results: no primary study was read, so none is cited.',
      'Average Australian broadband speeds or data allowances: no primary source read; the page uses only nbn co\'s own speed statement.',
      'Typical travel times to coding venues: the 20 and 45-minute figures are illustrations, labelled as such.'
    ]
  }
};
