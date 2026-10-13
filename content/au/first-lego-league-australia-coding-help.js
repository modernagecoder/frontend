'use strict';
// FIRST LEGO League Australia coding help (ag- competition door, Australia cluster Phase 3, row 97).
// Facts read raw on 7 October 2026 at firstaustralia.org (curl default agent): the FIRST LEGO League
// page (2026-2027 season BIOGLOW, part of FIRST CANOPY; Macquarie University biodiversity videos;
// divisions Future Edition, Challenge and Explore with ages) and the Compare Programs page (team
// sizes, coaches, registration from May 25, 2026, season kick-off August 4, 2026, robot match length
// 2:30, coding in Word Blocks, Icon Blocks or Python, events, weekly time, robot technology; FTC and
// FRC for older students). Fees printed there are not shown (one-currency rule). Spine: motor degrees
// to millimetres via wheel circumference, and how a 1 mm diameter error grows (family checked free
// site-wide on 7 October 2026; wheel sizes in the lesson are our own assumptions).

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'competition', tag: 'FIRST LEGO LEAGUE', label: 'FIRST LEGO League Australia coding help', blurb: 'The FIRST LEGO League divisions in Australia and the programming a robot game run really needs.' },
  slug: 'first-lego-league-australia-coding-help',
  code: 'flla',
  accent: '#386C64',
  accentRationale: 'FIRST LEGO League Australia: a sea green chosen by hand for the BIOGLOW season, muted, at least 10 RGB from every accent in use or claimed',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'FIRST LEGO League Australia coding help',
  title: 'FIRST LEGO League Australia: Coding Help for Teams',
  description: 'FIRST LEGO League in Australia: Explore, Challenge and the new Future Edition, the 2026-2027 BIOGLOW season, and the coding a 2:30 robot game run needs.',
  ogDescription: 'How FIRST LEGO League works in Australia for the 2026-2027 BIOGLOW season, division by division, and the programming habits that make a robot repeat the same run every time.',
  twitterDescription: 'FIRST LEGO League in Australia: divisions, the BIOGLOW season and the coding behind a reliable robot run.',
  pageName: 'FIRST LEGO League Australia Coding Help',
  webPageDescription: 'A guide to FIRST LEGO League for Australian students and coaches: Explore, Challenge and Future Edition, team sizes and year levels, the 2026-2027 BIOGLOW season, the robot game, coding options, and a worked lesson on turning motor degrees into accurate distances.',
  courseDescription: 'Live online programming classes for Australian students in FIRST LEGO League teams, from word blocks to Python, focused on accurate movement, sensors and repeatable robot game runs.',
  crumbs: [{ name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'FIRST LEGO League Australia',
  navLinks: [
    { href: '#divisions', label: 'Divisions' },
    { href: '#season', label: 'The season' },
    { href: '#distance', label: 'Distance lesson' },
    { href: '#help', label: 'How we help' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Years 1 to 10 &middot; Checked at FIRST Australia',
  h1: 'FIRST LEGO League Australia coding help',
  lede: 'FIRST LEGO League gives Australian students a real engineering season: a themed problem to research, a LEGO robot to design and program, and a robot game where every second of a two and a half minute run counts. Many teams build an impressive robot and then lose points because it stops a few centimetres short of a mission model. That is usually a programming problem, and it is fixable. This page explains the divisions and the 2026-2027 season as FIRST Australia publishes them, then shows the arithmetic behind accurate driving. We are independent of FIRST and help students program; the robot and the season\'s work stay the team\'s own.',
  secondaryCta: { href: '#distance', label: 'See the distance lesson' },
  wa: 'Hello Modern Age Coders, I would like a free class about programming for a FIRST LEGO League team in Australia.',
  heroNote: 'Checked at firstaustralia.org on 7 October 2026 &middot; Independent of FIRST &middot; The team\'s own robot',
  spec: [
    ['Program', 'FIRST LEGO League'],
    ['In Australia', 'FIRST Australia'],
    ['2026-2027 season', 'BIOGLOW, part of FIRST CANOPY'],
    ['Divisions', 'Explore, Challenge, Future Edition'],
    ['Robot match length', '2:30, autonomous'],
    ['Coding options', 'Word Blocks, Icon Blocks or Python'],
    ['We provide', 'Programming lessons for team members'],
    ['We are not', 'FIRST, a judge or a robot builder']
  ],
  capsuleQ: 'In short',
  capsule: 'FIRST LEGO League in Australia has three divisions: Explore for ages 6 to 10, Challenge for ages 9 to 16, and Future Edition for ages 8 to 16, new for 2026-2027. The 2026-2027 season is BIOGLOW, on biodiversity. Challenge robots run autonomous 2:30 matches and can be coded in Word Blocks, Icon Blocks or Python, according to FIRST Australia.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for FIRST LEGO League team members',
    lede: 'Blocks first, then text, with plenty of attention to movement and measurement.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'FLL / 01', title: 'Coding for kids', note: 'Loops, conditions and procedures in blocks, the same building blocks as a SPIKE word-block program.' },
      { course: 'python-ai-kids-masterclass', code: 'FLL / 02', title: 'Python and AI for kids', note: 'For team members ready to try the Python option FIRST Australia lists.' },
      { course: 'maths-through-coding', code: 'FLL / 03', title: 'Maths through coding', note: 'Circumference, ratios and angles used in code, which is exactly what accurate driving needs.' }
    ]
  },

  sections: [
    {
      id: 'divisions', tint: 'tint', eyebrow: 'Divisions',
      h2: 'Explore, Challenge and the new Future Edition',
      lede: 'FIRST Australia\'s program comparison sets out who each division is for and how it runs. These are its figures, read on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'FIRST LEGO League divisions in Australia, 2026-2027', head: ['', 'Explore', 'Challenge', 'Future Edition'], rows: [
          ['Students', 'Ages 6 to 10 (Years 1 to 4)', 'Ages 9 to 16 (Years 4 to 10)', 'Ages 8 to 16 (Years 3 to 10)'],
          ['Team size', 'Up to 6 students', 'Up to 10 students', 'Up to 8 students'],
          ['Coaches', 'At least 1', 'At least 2', 'At least 2'],
          ['Robot game', 'No matches; models built and shared', 'Autonomous matches of 2:30', 'Autonomous matches of 2:30'],
          ['Technology', 'LEGO Education SPIKE Essential', 'LEGO Education SPIKE Prime', 'LEGO Education Computer Science and AI kits'],
          ['Events', '12 Explore festivals and a National Festival in December, Sydney', '70+ qualifying competitions and national championships in December', 'Qualifying events to be confirmed; national championship in December, Sydney'],
          ['Weekly time, approx.', '1 hour', '2 hours', '2 hours']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Challenge, the best-known division, lists 950 or more teams nationally and four national championships in December, in Sydney, Perth, Melbourne and Brisbane. Explore lists 380 or more teams. Future Edition is in its first season in 2026-2027.',
            'For every division, FIRST Australia lists Word Blocks, Icon Blocks or Python as coding options, and says teams can be school or community based.'
          ],
          right: [
            'Registrations opened on May 25, 2026 and the season kicked off on August 4, 2026, so teams are now in the build-and-practise stretch of the year.',
            'Older students can move on to FIRST Tech Challenge, for ages 12 to 18, and FIRST Robotics Competition, for ages 14 to 18, which FIRST Australia describes in the same comparison.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.firstaustralia.org/compare-programs" rel="noopener" target="_blank">FIRST Australia, compare programs</a>; <a class="ag-inline-link" href="https://www.firstaustralia.org/first-lego-league" rel="noopener" target="_blank">FIRST Australia, FIRST LEGO League</a>. Read 7 October 2026. Registration costs, kit costs and budgets printed there are not repeated here.' }
      ]
    },
    {
      id: 'season', tint: 'deep', eyebrow: 'The season',
      h2: 'BIOGLOW, and what a season asks of a team',
      lede: 'Each FIRST LEGO League season has a theme. For 2026-2027 it is BIOGLOW, part of the global FIRST CANOPY season, on biodiversity.',
      body: [
        { kind: 'two',
          left: [
            'FIRST Australia describes BIOGLOW as an invitation to explore the variety of life on the planet, from microscopic organisms and glowing fungi to plants, animals and the ecosystems that connect them. Teams investigate real-world challenges, develop solutions, and design and code LEGO robots.',
            'To support the theme, Macquarie University\'s Faculty of Science and Engineering has produced a series of videos with biodiversity and conservation experts, according to FIRST Australia.'
          ],
          right: [
            'For Challenge teams, the season has two strands that both need programming thinking: the robot game, where an autonomous robot attempts missions on a shared table, and an innovation project researched and presented by the team.',
            'FIRST Australia offers free training modules for coaches, educators and volunteers, covering team management, robot building and programming, and competition preparation.'
          ] },
        { kind: 'table', mt: true, caption: 'Where programming shows up across a Challenge season', head: ['Stage of the season', 'Programming task', 'What good looks like'], rows: [
          ['Early weeks', 'Drive straight and turn accurately', 'The robot lands within a few millimetres, run after run'],
          ['Middle weeks', 'One mission at a time', 'Each mission is its own short, named program'],
          ['Later weeks', 'Chain missions into one run', 'Missions start from known positions, not from where the last one ended'],
          ['Before events', 'Reliability testing', 'Every program is tested many times and failures are logged'],
          ['Judging', 'Explaining the code', 'Every team member can describe how the robot decides what to do']
        ] }
      ]
    },
    {
      id: 'distance', tint: 'tint', eyebrow: 'Worked lesson',
      h2: 'Motor degrees into millimetres, and why small errors grow',
      lede: 'Most robot game misses come from distance, not from strategy. The arithmetic below is ours; the wheel sizes are examples, so measure your own.',
      body: [
        { kind: 'three', cells: [
          { h3: 'One turn of the wheel', p: 'A wheel moves the robot one circumference per full turn: pi times the diameter. Suppose the wheel is 56 mm across. One turn moves the robot about 175.9 mm.' },
          { h3: 'Degrees for a distance', p: 'Motors are usually told how many degrees to turn. For 500 mm: 500 divided by 175.9 is about 2.842 turns, and 2.842 times 360 is about 1,023 degrees.' },
          { h3: 'The hidden error', p: 'Tyres squash a little, so the wheel may act like 55 mm, not 56. Then 1,023 degrees moves only about 491.1 mm, almost 9 mm short of the mission.' }
        ] },
        { kind: 'table', mt: true, caption: 'Programmed for a 56 mm wheel, driven on one that behaves like 55 mm (our calculation)', head: ['Planned distance', 'Degrees programmed', 'Actual distance', 'Short by'], numCols: [0, 1, 2, 3], rows: [
          ['250 mm', '512', '245.5 mm', '4.5 mm'],
          ['500 mm', '1,023', '491.1 mm', '8.9 mm'],
          ['1,000 mm', '2,046', '982.1 mm', '17.9 mm'],
          ['2,000 mm', '4,093', '1,964.3 mm', '35.7 mm']
        ] },
        { kind: 'p', mt: true, text: 'The shortfall is always the same fraction, here 1 part in 56, so it grows in step with distance. Over a single short move it hardly matters; across a two and a half minute run that drives two metres or more, the robot can finish several centimetres from where the program believes it is, and a mission model is missed by a whisker. Two habits fix most of this. First, measure the real distance per turn by driving a known number of degrees and measuring with a ruler, then use that measured value in the program instead of the printed wheel size. Second, give the robot something real to line up against during a run, such as a wall or a line on the table, so each mission starts from a known position and errors cannot carry over.' },
        { kind: 'two', mt: true,
          leftH3: 'The same idea for turns',
          left: [
            'Turning on the spot works the same way, except the distance is part of a circle traced by the wheels. Small differences between the left and right wheels make a robot curve gently, which is why a gyro sensor reading is often used to correct the heading.',
            'Students who calculate a turn, test it and adjust from measurements learn more than those who keep nudging numbers by trial and error.'
          ],
          rightH3: 'Why judges care',
          right: [
            'Being able to explain how a program achieves accuracy is part of describing a robot\'s design. A team member who can say "we measured 172.8 mm per turn and line up on the wall before mission three" shows real understanding.',
            'The same measuring habit carries into secondary maths and science, where calibrating an instrument before trusting it is standard practice.'
          ] }
      ]
    },
    {
      id: 'help', tint: '', eyebrow: 'How we help',
      h2: 'Making team members stronger programmers',
      lede: 'FIRST LEGO League is a team\'s own season. Our role is to teach programming and debugging so the team\'s robot does what the team intends.',
      body: [
        { kind: 'two',
          left: [
            'Lessons cover movement and measurement, sensors such as colour and gyro, splitting a run into named missions, starting each mission from a known position, and testing until a result is repeatable. Students work on small exercises and then explain how they would apply the idea to their own robot.',
            'For students ready for text code, we introduce Python gently, since FIRST Australia lists it alongside Word Blocks and Icon Blocks. The ideas transfer directly; only the notation changes.'
          ],
          right: [
            'We do not write a team\'s robot game programs, design its robot or prepare its innovation project. Coaches and team members do that work, and judges expect it.',
            'We do not promise an award, a place at a national championship or any result. We teach the habits that make a robot reliable, which is what a season rewards.'
          ] },
        { kind: 'table', mt: true, caption: 'A term of programming support for a Challenge team member', head: ['Weeks', 'Focus', 'Sign of progress'], rows: [
          ['1 and 2', 'Measuring distance per turn', 'Drives 500 mm within a few millimetres, three times running'],
          ['3 and 4', 'Accurate turns with a gyro', 'Turns 90 degrees and recovers if nudged'],
          ['5 and 6', 'Missions as named programs', 'Can run any mission on its own from a known start'],
          ['7 and 8', 'Lining up on the table', 'Uses a wall or line to reset position between missions'],
          ['9 and 10', 'Testing and explaining', 'Keeps a run log and explains each design choice']
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Growing as a robot programmer',
    h2: 'Four rungs from Explore to Challenge and beyond',
    lede: 'Divisions follow age, but skill grows in its own order.',
    table: { caption: 'From first moving model to a reliable robot run', head: ['Around', 'Rung', 'The sign it is secure'], rows: [
      ['Years 1 to 4', '1. Makes a model move', 'Builds and codes a moving model in Explore'],
      ['Years 4 to 6', '2. Moves accurately', 'Drives and turns by measured amounts'],
      ['Years 6 to 8', '3. Plans a run', 'Splits a run into missions with known start points'],
      ['Years 8 to 10', '4. Engineers reliability', 'Tests, logs and fixes until runs repeat']
    ] },
    left: { h3: 'When the robot misses', ps: [
      'Measure before changing code. Was it short, long, or turned? Each points to a different fix.',
      'Run the same program five times. One miss is noise; five misses the same way is a pattern you can fix.'
    ] },
    right: { h3: 'Related reading', ps: [
      'For another robotics competition, see <a class="ag-inline-link" href="/robocup-junior-australia-coding-help">RoboCup Junior Australia coding help</a>.',
      'The <a class="ag-inline-link" href="/australian-coding-maths-and-ai-competitions-calendar">competitions calendar</a> lists coding and maths contests through the year.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for FIRST LEGO League students',
    lede: 'Grouped from first blocks to text code and reasoning. Each card opens its syllabus.',
    bands: [
      { num: 'I', h3: 'First coding', sub: 'Explore and early Challenge', courses: [
        { code: 'FLL / FC / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Blocks, loops and procedures.' },
        { code: 'FLL / FC / 02', slug: 'scratch-programming-complete-course', title: 'Scratch for kids', blurb: 'Programs you can watch run.' },
        { code: 'FLL / FC / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking', blurb: 'Breaking a mission into steps.' }
      ] },
      { num: 'II', h3: 'Measurement and maths', sub: 'Accurate robots', courses: [
        { code: 'FLL / MM / 01', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Circumference, ratio and angle in code.' },
        { code: 'FLL / MM / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Quick estimates before testing.' },
        { code: 'FLL / MM / 03', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle years maths', blurb: 'Geometry behind turning and driving.' }
      ] },
      { num: 'III', h3: 'Text code', sub: 'Python and beyond', courses: [
        { code: 'FLL / TX / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'A first text language.' },
        { code: 'FLL / TX / 02', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Structure for longer programs.' },
        { code: 'FLL / TX / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Logic for harder challenges.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live online lessons that fit around team meetings',
    lede: 'Teachers work from India, behind Australian clocks: Melbourne is four and a half hours ahead of India time in winter and five and a half in summer, and Perth two and a half all year. An Australian after-school lesson therefore runs in the Indian afternoon, so it can sit alongside a team\'s weekly meeting.',
    slots: [
      { time: 'Weekday afternoon', l: 'A programming idea learned and practised.' },
      { time: 'Weekend session', l: 'Applying the idea to the student\'s own robot.' },
      { time: 'Before a tournament', l: 'Reliability testing and explaining the code.' }
    ],
    cells: [
      { h3: 'Measure, then code', p: 'Students use real measurements instead of guessed numbers.' },
      { h3: 'The team\'s robot', p: 'We teach and question; the team builds and programs.' },
      { h3: 'Blocks or Python', p: 'Whichever the team uses, with a path to the other.' },
      { h3: 'Groups of fifteen to twenty', p: 'Students at a similar level sharing methods.' },
      { h3: 'One-to-one option', p: 'For the team member leading the programming.' },
      { h3: 'No result promised', p: 'Referees and judges decide; we build the skills.' }
    ]
  },

  projectsH2: 'Projects our students made themselves',
  projectsLede: 'Built for the joy of it, outside any season. More in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Reviews taken word for word from our Google listing.',

  fees: {
    h2: 'Fees',
    lede: 'Lessons are billed each month in US dollars at our international rate, with no joining fee and no contract. Team registration and kits are bought separately from FIRST Australia and its suppliers, not through us.',
    free: ['A first lesson that costs nothing', 'A look at how the student programs now', 'No card details'],
    group: ['Fifteen to twenty students at one level', 'One teacher for the whole term', 'Movement and sensor exercises done together', 'A certificate on finishing'],
    one: ['A teacher for a single student', 'Time on that student\'s own team programs', 'Times arranged around team meetings']
  },

  faq: {
    eyebrow: 'Questions about FIRST LEGO League',
    h2: 'What families and coaches ask',
    items: [
      { q: 'What is FIRST LEGO League?', a: 'A global robotics program in which teams research a themed problem and design, build and code LEGO robots. In Australia it is run by FIRST Australia in three divisions: Explore, Challenge and Future Edition.' },
      { q: 'Which division suits my child?', a: 'Explore is for ages 6 to 10 (Years 1 to 4), Challenge for ages 9 to 16 (Years 4 to 10) and Future Edition for ages 8 to 16 (Years 3 to 10), according to FIRST Australia.' },
      { q: 'What is the 2026-2027 season theme?', a: 'BIOGLOW, part of the global FIRST CANOPY season, which explores biodiversity from glowing fungi to whole ecosystems.' },
      { q: 'How long is a robot game match?', a: 'Challenge and Future Edition matches run for 2:30 and the robot is autonomous. Explore has no matches; teams build and share models instead.' },
      { q: 'What coding languages can teams use?', a: 'FIRST Australia lists Word Blocks, Icon Blocks or Python for its FIRST LEGO League divisions.' },
      { q: 'What is wheel circumference, and why does it matter?', a: 'The distance around a wheel, equal to pi times its diameter. It is how far a robot travels in one full wheel turn, so it turns motor degrees into millimetres.' },
      { q: 'How many students are in a team?', a: 'Up to 6 in Explore, up to 10 in Challenge and up to 8 in Future Edition, with at least one coach for Explore and two for the others.' },
      { q: 'Will you program our robot?', a: 'No. We teach team members programming, measurement and debugging so the team can program its own robot and explain it to judges.' },
      { q: 'When are the national championships?', a: 'FIRST Australia lists Challenge national championships in December in Sydney, Perth, Melbourne and Brisbane, and a Future Edition championship in December in Sydney.' },
      { q: 'Can lessons start mid-season?', a: 'Yes. Many students join once a robot exists and the team discovers its runs are not repeatable, which is exactly what the lessons address.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for Australian students',
    lede: 'Robotics, competitions and next steps in coding.',
    items: [
      { href: '/robocup-junior-australia-coding-help', label: 'RoboCup Junior Australia', p: 'Dance, rescue and soccer robots.' },
      { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar', p: 'Every contest by month.' },
      { href: '/after-scratch-next-step-python-australia', label: 'After Scratch, Python', p: 'Moving from blocks to text.' },
      { href: '/coding-for-year-7-australia', label: 'Coding for Year 7', p: 'The first year of secondary coding.' },
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'Every state and every age.' },
      { href: '/online-coding-classes-for-kids-australia', label: 'Coding classes for kids', p: 'What an online class looks like.' }
    ]
  },

  start: {
    h2: 'Book a free robot programming class',
    lede: 'Tell us the division, the year level and how the team codes now. The free class works through accurate driving with a teacher and ends with a clear next step.',
    readFirst: 'Would you rather read first? All course outlines sit on the <a class="ag-inline-link" href="/course-atlas">course atlas</a>, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains our lessons.',
    note: 'WhatsApp tends to be the fastest way to reach us. The number is Indian because we work from India; we have no Australian office.',
    formNote: 'No card and no obligation. One reply to set a time.'
  },

  footer: {
    cols: [
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/online-coding-classes-for-kids-australia', label: 'Coding for kids' },
        { href: '/coding-for-year-7-australia', label: 'Coding for Year 7' },
        { href: '/online-maths-tutoring-australia', label: 'Maths tutoring' }
      ] },
      { h4: 'Robotics and contests', links: [
        { href: '/robocup-junior-australia-coding-help', label: 'RoboCup Junior' },
        { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/course-atlas', label: 'Course atlas' }
      ] }
    ],
    bottomRight: 'Independent of FIRST and FIRST Australia; facts checked at source'
  },

  personalityCss: `
.ag-root.ag-flla .ag-hero-grid { gap: clamp(1rem, 2.5vw, 2.2rem); }
.ag-root.ag-flla .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-flla .ag-capsule { border-left-width: 9px; }
.ag-root.ag-flla .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-flla .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-flla .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-flla .ag-spec dt { letter-spacing: 0.1em; }
.ag-root.ag-flla .ag-slots { gap: 1.3rem; }
`,

  dossier: {
    curriculumAuthority: 'FIRST Australia pages, read 7 October 2026. FIRST LEGO League page: divisions with ages (Future Edition 8-16, Challenge 9-16, Explore 6-10); "Step into the vibrant world of biodiversity in the 2026-2027 FIRST LEGO League season, BIOGLOW"; part of "the global FIRST CANOPY season"; "Macquarie University\'s Faculty of Science and Engineering has developed a series of videos featuring biodiversity and conservation experts". Compare Programs: Explore 6-10 (Years 1-4), up to 6 students, minimum 1 coach, 380+ teams, no matches, 12 explore festivals, National Festival in December (Sydney), SPIKE Essential, about 1 hour a week; Challenge 9-16 (Years 4-10), up to 10, minimum 2 coaches, 950+ teams, "Robot matches are autonomous and run for 2:30 minutes", 70+ qualifying competitions, "4 National Championship in December: Sydney, Perth, Melbourne, Brisbane", SPIKE Prime, about 2 hours a week; Future Edition 8-16 (Years 3-10), up to 8, "2026-2027 will be the 1st season for Future Edition", qualifying TBC, 1 national championship in December (Sydney), LEGO Education Computer Science and AI kits; all list "Word Blocks, Icon Blocks or Python"; "Registrations open May 25, 2026"; "Season kicks off August 4, 2026"; FTC 12-18 (Years 7-12); FRC 14-18 (Years 9-12).',
    localProject: 'A worked distance lesson written by us with assumed wheel sizes: a 56 mm wheel travels about 175.9 mm per turn, so 500 mm needs about 1,023 degrees; if the wheel behaves like 55 mm the robot covers 491.1 mm. Planned 250, 500, 1,000 and 2,000 mm become 245.5, 491.1, 982.1 and 1,964.3 mm (short by 4.5, 8.9, 17.9 and 35.7 mm), a constant 1 part in 56; fixes are measuring distance per turn and lining up on a wall or line between missions.',
    requiredMentions: ['BIOGLOW', 'FIRST CANOPY', 'Future Edition', 'SPIKE Essential', 'Word Blocks, Icon Blocks or Python', 'August 4, 2026', '175.9 mm', '1,023 degrees', 'Sydney, Perth, Melbourne and Brisbane'],
    sources: [
      { claim: 'FIRST Australia, FIRST LEGO League: divisions, ages, BIOGLOW season and FIRST CANOPY, Macquarie University videos.', url: 'https://www.firstaustralia.org/first-lego-league' },
      { claim: 'FIRST Australia, compare programs: team sizes, coaches, dates, match length, coding options, events, weekly time, technology, FTC and FRC ages.', url: 'https://www.firstaustralia.org/compare-programs' },
      { claim: 'FIRST Australia home: Programs and events overview, FIRST Tech Challenge BIOBUZZ in the FIRST CANOPY season.', url: 'https://www.firstaustralia.org/' }
    ],
    rejectedClaims: [
      'Registration, kit and yearly budget figures printed by FIRST Australia: not shown (Australian dollars; one-currency rule).',
      'Exact dates and venues of 2026 qualifying events and national championships: only "December" and the cities are published on the pages read.',
      'Official SPIKE wheel diameters: not verified; the lesson uses stated assumptions and tells teams to measure their own.',
      'Any claim that we build robots, write team programs or prepare innovation projects: we do not.',
      'Any promise of an award or championship place: none made.',
      'Affiliation with FIRST, FIRST Australia or the LEGO Group: none; stated on the page.'
    ]
  }
};
