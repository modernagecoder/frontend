'use strict';
// CodaKid alternative (ag- comparison door; US cluster Phase 3, row 59).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md. CodaKid facts read raw on codakid.com on 17 October 2026
// (copies in keyword-research-2026-09/us/src/codakid-alternative/):
//  - Home: "Ages 6 to 18"; three ways to learn: Self-paced "115+ self-study courses, including teacher support", "New students
//    get their first 14 days free"; Private 1:1 "hand-picked online teachers, structured curriculum, and homework
//    assignments", "New students get their first session free"; Virtual Camps "Live, small groups, every session recorded";
//    starting ages: Minecraft and Roblox coding with professional languages from 9, AI from 9, Python from 10, Unity, Unreal
//    and web from 12; "24/7 AI-powered learning support"; "Mastery Method", "a Socratic method"; "100,000+" students,
//    "140+ countries".
//  - FAQ: based in "Scottsdale, Arizona"; co-founded "in 2014"; languages "Python, JavaScript, Java, Lua, Scratch, C#, HTML,
//    CSS, and the Unreal Blueprints"; "Most of our courses can be completed within a couple of hours", advanced ones
//    "upwards of 20 hours"; self-study trial 14 days then billed every 30 days; private: free first session, card charged
//    before the 2nd session; Family Plan "up to 3 students".
//  - Private page: "the same one every week. Live 50-minute lessons over Zoom", progress report after every session, ages 6
//    to 18. Camps page: "One week. Two hours a day."; "Monday to Friday"; "A video recording of every session".
// Not used: prices, Google rating and review count, founders' and reviewers' names, award names.
// Our own material, labelled: the one-week self-paced log and Python summary (170 minutes, 29.4% stuck, 5 active days), the
// signals table, the hybrid plan.
// Lesson family: summing a log and computing a share (dictionary of tuples, sum, f-string percentage).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'COMPARISON', blurb: 'CodaKid&rsquo;s self-paced courses and private lessons beside live weekly classes at Modern Age Coders, from CodaKid&rsquo;s own pages.' },
  slug: 'codakid-alternative',
  code: 'coa',
  accent: '#376B52',
  accentRationale: 'CodaKid alternative: a sage teal, #376B52 as allocated, lighter than the other comparison greens and still above contrast on the paper',
  pageType: 'market',
  market: US,
  routeLabel: 'CodaKid alternative',
  title: 'CodaKid Alternative: Self-Paced Courses or Live Classes?',
  description: 'Comparing CodaKid with alternatives? Its self-paced courses, 1-on-1 lessons, camps and trials from its own site, beside live classes at Modern Age Coders, 2026.',
  ogDescription: 'CodaKid is mainly a self-paced video school for ages 6 to 18, with live private lessons and camps. Its published facts, how self-paced and live learning differ, and a one-week test.',
  twitterDescription: 'CodaKid and live online classes, compared on published facts.',
  pageName: 'CodaKid Alternative',
  webPageDescription: 'A neutral comparison of CodaKid and Modern Age Coders for US families, built from codakid.com as read on 17 October 2026, with a self-paced study log example labelled as ours.',
  courseDescription: 'Live online coding classes with a teacher for US kids and teens, in batches, mini batches or one to one, from Modern Age Coders.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'CodaKid alternative',
  navLinks: [
    { href: '#ways', label: 'Three ways' },
    { href: '#ages', label: 'Starting ages' },
    { href: '#selfpaced', label: 'Self-paced vs live' },
    { href: '#log', label: 'A one-week test' },
    { href: '#setup', label: 'Our setup' },
    { href: '#fees', label: 'Our fees' }
  ],
  eyebrow: 'United States &middot; Ages 6 to 18 &middot; codakid.com, 17 October 2026',
  h1: 'CodaKid alternative: self-paced or live, and for whom',
  lede: 'CodaKid, based in Scottsdale, Arizona, built its name on self-paced video courses where children code real games in tools like Roblox Studio, Minecraft and Unity, and it now also offers live private lessons and week-long camps. The real choice behind most searches for a CodaKid alternative is not one company against another but self-paced learning against a live class. Below are CodaKid&rsquo;s own published facts as of 17 October 2026, an honest look at what each way of learning asks of a child, and a one-week test you can run at home.',
  secondaryCta: { href: '#ways', label: 'CodaKid&rsquo;s three programs' },
  wa: 'Hello Modern Age Coders, my child has used CodaKid and we are thinking about live classes in the US. Could we book a free first lesson?',
  heroNote: 'Checked against codakid.com &middot; 17 October 2026 &middot; no winner declared',
  spec: [
    ['CodaKid ages', '6 to 18'],
    ['Self-paced library', '115+ courses'],
    ['Its private lessons', '50 minutes, live'],
    ['Its camps', 'A week, 2 hours a day'],
    ['Modern Age Coders', 'Live classes only'],
    ['Class options here', 'Batch, mini batch or private'],
    ['Schedule here', 'Weekdays or weekends, flexible'],
    ['First step', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'CodaKid offers three ways to learn for ages 6 to 18: more than 115 self-paced video courses with 24/7 AI-powered support and scheduled teacher sessions, live 50-minute 1-on-1 lessons on Zoom, and live small-group camps of two hours a day for a week. Modern Age Coders teaches only live: weekly classes with a teacher, in a batch, a mini batch of up to six, or privately, from age 6 into adulthood.',

  picks: {
    eyebrow: 'Live versions of familiar topics',
    h2: 'Three live courses in subjects CodaKid students know',
    lede: 'Minecraft, Roblox and Python are central to CodaKid&rsquo;s library. Here they are as live weekly courses.',
    items: [
      { course: 'minecraft-coding-for-kids-course', code: 'COA / 01', title: 'Minecraft coding', note: 'Younger children. From blocks to real code, with a teacher.' },
      { course: 'roblox-game-coding-for-kids-lua-course', code: 'COA / 02', title: 'Roblox game coding', note: 'Middle grades. Luau games built live.' },
      { course: 'python-ai-kids-masterclass', code: 'COA / 03', title: 'Python and AI for kids', note: 'Upper elementary and middle school. Python with a teacher on hand.' }
    ]
  },

  sections: [
    {
      id: 'ways', tint: 'tint', eyebrow: 'Three ways',
      h2: 'CodaKid&rsquo;s three ways to learn',
      lede: 'CodaKid presents its programs as three distinct options. Here they are in its terms, from codakid.com on 17 October 2026; prices are on its site.',
      body: [
        { kind: 'table', caption: 'CodaKid programs as published (codakid.com, read 17 October 2026)', head: ['Program', 'How it works', 'Trial'], rows: [
          ['Self-paced', 'More than 115 video courses; 24/7 AI-powered learning support; scheduled sessions with an instructor', 'First 14 days free'],
          ['Private 1:1', 'The same certified instructor each week; live 50-minute lessons over Zoom; homework; a progress report after each session', 'First session free'],
          ['Virtual camps', 'One week, Monday to Friday, two hours a day, live in a small group; every session recorded', 'Not stated']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What CodaKid teaches',
          left: [
            'Its FAQ lists Python, JavaScript, Java, Lua, Scratch, C#, HTML, CSS and Unreal Blueprints, using tools such as Roblox Studio, Unity and Unreal Engine. Children build games, mods and websites rather than isolated exercises.',
            'Its private tutors use what CodaKid calls the Mastery Method, a Socratic approach of asking guiding questions instead of handing over answers.'
          ],
          rightH3: 'How long courses take',
          right: [
            'CodaKid says most of its courses can be finished in a couple of hours, while intermediate and advanced ones can take upwards of 20 hours. That short course length suits bite-sized progress.',
            'A Family Plan covers up to three students on the self-study program, each with an account under one parent login.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://codakid.com/" rel="noopener" target="_blank">codakid.com</a>, its <a class="ag-inline-link" href="https://codakid.com/faq/" rel="noopener" target="_blank">FAQ</a>, <a class="ag-inline-link" href="https://codakid.com/private-online-coding-classes/" rel="noopener" target="_blank">private lessons</a> and <a class="ag-inline-link" href="https://codakid.com/camps/" rel="noopener" target="_blank">camps</a> pages, read 17 October 2026. CodaKid has no link to Modern Age Coders, and its programs may have changed since.' }
      ]
    },
    {
      id: 'ages', tint: 'deep', eyebrow: 'Starting ages',
      h2: 'When CodaKid starts each topic',
      lede: 'CodaKid publishes a starting age for every course family, which is useful for any parent planning a sequence.',
      body: [
        { kind: 'table', caption: 'Starting ages by topic, as CodaKid lists them (read 17 October 2026)', head: ['Topic', 'CodaKid starting age'], numCols: [1], rows: [
          ['Scratch and JavaScript courses', '6+'],
          ['Minecraft and Roblox', '8+'],
          ['Minecraft and Roblox with professional languages', '9+'],
          ['AI courses', '9+'],
          ['Python', '10+'],
          ['Unity, Unreal Engine and web development', '12+']
        ] },
        { kind: 'p', mt: true, html: 'Read across, the ages describe a common sequence: blocks first, then a game world with a real language, then Python, then full engines. Our own courses follow a similar order, which makes it easy to move between the two schools at a natural break.' }
      ]
    },
    {
      id: 'selfpaced', tint: 'tint', eyebrow: 'Self-paced vs live',
      h2: 'What each way of learning asks of a child',
      lede: 'The heart of the comparison. Neither model is better in general; each fits a different child and a different week.',
      body: [
        { kind: 'table', caption: 'Self-paced video and live classes compared (our summary)', head: ['Question', 'Self-paced video', 'Live class'], rows: [
          ['When does learning happen?', 'Any time, any length', 'At a set time each week'],
          ['Who notices when a child is stuck?', 'The child must ask; AI support and scheduled teacher sessions help', 'The teacher, during class'],
          ['What keeps the habit going?', 'The child&rsquo;s own drive, or a parent', 'The timetable and the group'],
          ['How fast can a child go?', 'As fast as they like', 'At the class pace, or faster 1-on-1'],
          ['Which child it suits', 'Independent, self-starting children', 'Children who need prompts and conversation']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'When self-paced shines',
          left: [
            'A child who already loves building, works happily alone and hates waiting for classmates can fly through a library of short courses. CodaKid&rsquo;s round-the-clock AI support is designed for exactly the moment when that child gets stuck at nine at night.',
            'It is also a sensible fit for a family whose schedule changes every week.'
          ],
          rightH3: 'When a live class helps',
          right: [
            'A child who stalls quietly, skips the hard parts or needs to talk ideas through usually learns more with a person present at a fixed time. The appointment itself does part of the work.',
            'CodaKid recognises this with its live private lessons and camps; our school is built only on live classes.'
          ] }
      ]
    },
    {
      id: 'log', tint: 'deep', eyebrow: 'A one-week test',
      h2: 'Log one week of self-paced study and read it',
      lede: 'Our suggestion for deciding with evidence: keep a simple log for a week, then let a few lines of Python summarise it. The numbers below are a made-up sample.',
      body: [
        { kind: 'ol', items: [
          '<b>Agree the rules with your child first.</b> The log is a test of the format, not of them, and they should know that.',
          '<b>Write two numbers each day:</b> minutes spent coding, and minutes spent stuck on one problem without progress.',
          '<b>Do not help during the week.</b> The point is to see how the format works without a parent filling the teacher&rsquo;s role.',
          '<b>Type the numbers into the script</b> on day seven, or simply add them on paper.',
          '<b>Talk about the stuck moments.</b> Ask what each one was about and how it ended.'
        ] },
        { kind: 'code', mt: true, label: 'study_log.py (our example)', lang: 'Python 3', code: '# minutes coded and minutes spent stuck, one week of self-paced study (our sample log)\nweek = {\n    "Mon": (30, 5), "Tue": (0, 0), "Wed": (45, 20), "Thu": (20, 0),\n    "Fri": (0, 0), "Sat": (60, 25), "Sun": (15, 0),\n}\n\ncoded = sum(m for m, s in week.values())\nstuck = sum(s for m, s in week.values())\nactive_days = [d for d, (m, s) in week.items() if m > 0]\n\nprint("minutes coded:", coded)\nprint("share stuck:", f"{stuck / coded:.1%}")\nprint("days with any coding:", len(active_days))', note: 'Output: minutes coded 170, share stuck 29.4%, days with any coding 5. The share is 50 / 170 = 0.294.' },
        { kind: 'table', mt: true, caption: 'Reading the log (our rule of thumb, not a test result)', head: ['What the week shows', 'What it may suggest'], rows: [
          ['Coding most days and rarely stuck', 'Self-paced is working; keep going'],
          ['Coding most days but stuck a lot', 'Add live help: a teacher session or private lessons'],
          ['Coding on few days', 'A fixed weekly class may build the habit'],
          ['Stuck time spent on one topic', 'A teacher can unblock that topic quickly']
        ] },
        { kind: 'p', mt: true, html: 'In the sample, almost a third of the coding time went on being stuck, mostly on two days. That is not failure; it is a sign the child is attempting hard things. The question is whether those stuck minutes end in a breakthrough or in closing the laptop, and only the child can tell you that.' }
      ]
    },
    {
      id: 'setup', tint: 'tint', eyebrow: 'Our setup',
      h2: 'How Modern Age Coders compares on the same points',
      lede: 'Differences stated as facts, so you can weigh them against your child.',
      body: [
        { kind: 'table', caption: 'CodaKid as described on 17 October 2026, and Modern Age Coders', head: ['Point', 'CodaKid', 'Modern Age Coders'], rows: [
          ['Main model', 'Self-paced video library', 'Live weekly classes'],
          ['Live options', '1-on-1 lessons; week-long camps', 'Batches, mini batches of up to six, 1-on-1'],
          ['Ages', '6 to 18; adults use self-study too', 'From 6, including adults'],
          ['Private lesson', '50 minutes, same instructor weekly', 'Same teacher weekly, times agreed with you'],
          ['Trial', '14 free days (self-paced); free first private session', 'A free first lesson'],
          ['Subjects', 'Coding and AI', 'Coding, AI and maths']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'CodaKid may suit', p: 'An independent child who wants a big library to explore at their own speed, or a family wanting a private tutor in a specific game tool.' },
          { h3: 'We may suit', p: 'A child who learns best with a teacher and classmates at a fixed time, or a family wanting maths as well.' },
          { h3: 'A mix may suit', p: 'Self-paced projects between weekly live classes, so practice and teaching support each other.' }
        ] },
        { kind: 'p', mt: true, html: 'Two practical differences are easy to miss. CodaKid&rsquo;s private lessons are 50 minutes with the same certified instructor, and its self-study program bills every 30 days after the trial; ours bill monthly for whichever live format you choose. And CodaKid publishes a starting age for every topic, which we find genuinely helpful; we place by a short check in the first lesson, so a younger child with real experience is not held back by a number.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your child is',
    h2: 'Signs a self-paced learner is ready for something more',
    lede: 'Stages we see in children who arrive after a self-paced program.',
    table: { caption: 'From self-paced to live (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Explorer', 'Finishes short courses happily; follows the videos closely'],
      ['2. Copier', 'Can repeat what the video did but not change it'],
      ['3. Tinkerer', 'Changes projects, sometimes gets stuck for days'],
      ['4. Designer', 'Wants to build their own idea from scratch']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 2 is where a teacher&rsquo;s questions help most: "what would happen if you changed this line?"',
      'At stage 4, a child needs feedback on design, not just code, which is easier live.'
    ] },
    right: { h3: 'For kids', ps: [
      'Try changing one thing in a finished course project without the video. That shows you what you really learned.',
      'Keep a list of ideas; a teacher can help you pick one to build.'
    ] }
  },

  catalogue: {
    eyebrow: 'Our catalogue',
    h2: 'Nine live courses for children leaving a video library',
    lede: 'Each taught weekly by one teacher, live, in a group, a mini batch or privately.',
    bands: [
      { num: 'I', h3: 'Game tools', sub: 'Ages 6 to 12', courses: [
        { code: 'COA / G / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Games from scratch.' },
        { code: 'COA / G / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Mods and logic.' },
        { code: 'COA / G / 03', slug: 'game-development-masterclass-for-kids', title: 'Game development for kids', blurb: 'Three platforms.' }
      ] },
      { num: 'II', h3: 'Real languages', sub: 'Ages 9 to 14', courses: [
        { code: 'COA / L / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox in Luau', blurb: 'Scripting games.' },
        { code: 'COA / L / 02', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'Typed code first.' },
        { code: 'COA / L / 03', slug: 'cpp-programming-for-kids-course', title: 'C++ for kids', blurb: 'Puzzles and games.' }
      ] },
      { num: 'III', h3: 'Engines and web', sub: 'Ages 12 to 18', courses: [
        { code: 'COA / E / 01', slug: 'complete-game-development-masterclass-for-teens', title: 'Unity for teens', blurb: 'C# and shipped games.' },
        { code: 'COA / E / 02', slug: 'frontend-development-masterclass-for-teens', title: 'Frontend for teens', blurb: 'CSS to React.' },
        { code: 'COA / E / 03', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The full language.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How our lessons run',
    h2: 'A teacher in the room, every time',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'A fixed after-school slot builds the habit.' },
      { time: 'Weekends', l: 'Morning classes in your time zone.' },
      { time: '1-on-1', l: 'For a child who wants to go faster.' }
    ],
    cells: [
      { h3: 'Questions answered live', p: 'No waiting for a support session.' },
      { h3: 'Changing, not copying', p: 'Students alter code, not replay videos.' },
      { h3: 'Classmates', p: 'Ideas from other children.' },
      { h3: 'Projects reviewed', p: 'Feedback on design as well as code.' },
      { h3: 'Teachers in India', p: 'Timed for US families.' },
      { h3: 'Monthly', p: 'Change format after a month.' }
    ]
  },

  projectsH2: 'Built in our live classes',
  projectsLede: 'Projects our students designed with a teacher alongside. See more at <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Reviews our families posted on Google, unaltered.',

  fees: {
    h2: 'Our fees',
    lede: 'We charge monthly in US dollars for live classes. CodaKid publishes its own subscription and lesson prices on its site, so we leave them there.',
    free: ['A free first lesson', 'Bring a CodaKid project', 'No card details'],
    group: ['Fifteen to twenty learners', 'One regular teacher', 'Choose your batch', 'Monthly'],
    one: ['A teacher to yourself', 'The same teacher weekly', 'Times agreed with you']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'CodaKid and alternatives: common questions',
    items: [
      { q: 'Is CodaKid self-paced or live?', a: 'Both. Its main program is self-paced video courses, more than 115 of them, and it also offers live 50-minute private lessons on Zoom and live week-long camps, according to its own site on 17 October 2026.' },
      { q: 'What ages does CodaKid teach?', a: 'Ages 6 to 18, with each course listing a starting age, from 6+ for Scratch to 12+ for Unity, Unreal and web development. Its FAQ says adults also use the self-study courses.' },
      { q: 'Does CodaKid have a free trial?', a: 'Its FAQ describes a 14-day free trial of the self-study program and a free first session for private tutoring, with billing starting afterwards.' },
      { q: 'Are CodaKid camps recorded?', a: 'Its camps page says every session is recorded, so a missed day can be caught up.' },
      { q: 'How is Modern Age Coders different from CodaKid?', a: 'We teach only live classes, in batches, mini batches of up to six or privately, for ages 6 and up, with maths as well as coding and teachers based in India. CodaKid is mainly self-paced, with live private lessons and camps.' },
      { q: 'Which is right for my child?', a: 'An independent child who enjoys working alone may do well self-paced; a child who needs prompts and conversation often does better live. Logging one week of self-paced study, as shown on this page, helps you see which.' },
      { q: 'Can my child use CodaKid and live classes together?', a: 'Yes. Self-paced projects between weekly classes give practice, and the teacher can help with whatever got stuck.' },
      { q: 'What languages does CodaKid teach?', a: 'Its FAQ lists Python, JavaScript, Java, Lua, Scratch, C#, HTML, CSS and the Unreal Blueprints scripting language, used in tools such as Roblox Studio, Unity and Unreal Engine.' },
      { q: 'When are your classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you related to CodaKid?', a: 'No. Modern Age Coders is a separate school. We summarise CodaKid\'s public pages and link to them.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Choosing between self-paced and live learning.',
    items: [
      { href: '/live-vs-recorded-coding-classes', label: 'Live vs recorded classes', p: 'The question at the heart of this page.' },
      { href: '/tynker-alternative', label: 'Tynker alternative', p: 'Another self-paced platform compared.' },
      { href: '/modern-age-coders-vs-tynker', label: 'Compared with Tynker', p: 'App or teacher.' },
      { href: '/minecraft-coding-classes-for-kids', label: 'Minecraft coding classes', p: 'Live Minecraft coding.' },
      { href: '/how-to-make-a-roblox-game', label: 'How to make a Roblox game', p: 'A guide for young builders.' },
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'Our US hub page.' },
      { href: '/coding-with-kids-alternative', label: 'Coding with Kids alternative', p: 'Coding with Kids and Modern Age Coders, compared on published facts.' },
      { href: '/khan-academy-computer-science-vs-live-classes', label: 'Khan Academy CS vs live classes', p: 'Khan Academy CS or live classes? A fair comparison, built from Khan Academy descriptions of its course.' },
      { href: '/best-online-coding-classes-for-kids-usa-compared', label: 'Online coding classes for kids, compared', p: 'Six US online coding class providers for kids, compared on their own published facts.' }
    ]
  },

  start: {
    h2: 'Try a live lesson',
    lede: 'Bring a project your child made on any platform. The teacher will ask them to change something in it, which is the quickest way to see what they understand.',
    readFirst: 'For background, read <a class="ag-inline-link" href="/how-we-teach">how we run a class</a> or open a syllabus from <a class="ag-inline-link" href="/courses">our courses</a>.',
    note: 'Every class is taught live by video from India, at US-friendly times, never replaced by a recording. Ask us anything on WhatsApp.',
    formNote: 'A free lesson; no card asked for.'
  },

  footer: {
    cols: [
      { h4: 'Learning formats', links: [
        { href: '/live-vs-recorded-coding-classes', label: 'Live vs recorded' },
        { href: '/tynker-alternative', label: 'Tynker alternative' },
        { href: '/modern-age-coders-vs-tynker', label: 'vs Tynker' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/online-coding-classes-for-kids-usa', label: 'Online classes for US kids' },
        { href: '/roblox-coding-classes-for-kids', label: 'Roblox coding' },
        { href: '/minecraft-coding-classes-for-kids', label: 'Minecraft coding' }
      ] }
    ],
    bottomRight: 'One week of evidence'
  },

  personalityCss: `
.ag-root.ag-coa .ag-hero h1 { letter-spacing: -0.009em; }
.ag-root.ag-coa .ag-capsule { border-left-width: 5px; border-radius: 6px; }
.ag-root.ag-coa .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-coa .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-coa .ag-slots { gap: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'codakid.com read raw 17 October 2026: ages 6 to 18; self-paced 115+ courses with 24/7 AI-powered support and scheduled instructor sessions, 14 free days; private 1:1, same certified instructor weekly, live 50-minute Zoom lessons, progress report, first session free; virtual camps one week, Monday to Friday, two hours a day, small groups, every session recorded; starting ages by topic (6+, 8+, 9+, 10+, 12+); languages incl. Unreal Blueprints; courses a couple of hours to upwards of 20 hours; Family Plan up to 3; Mastery Method; Scottsdale, Arizona; founded 2014.',
    localProject: 'Our one-week self-paced study log in Python (170 minutes coded, 29.4% stuck, 5 active days; 50 / 170 = 0.294) and our table for reading it. Lesson family: summing a log and computing a share.',
    requiredMentions: ['More than 115 video courses', '24/7 AI-powered learning support', 'live 50-minute lessons over Zoom', 'One week, Monday to Friday, two hours a day', 'First 14 days free', 'Unreal Blueprints', 'upwards of 20 hours', 'Scottsdale, Arizona', 'Mastery Method', 'share stuck 29.4%', 'up to three students', 'no link to Modern Age Coders'],
    sources: [
      { claim: 'CodaKid home: programs, ages, starting ages, trials.', url: 'https://codakid.com/' },
      { claim: 'CodaKid FAQ: languages, course length, trials, Family Plan, location.', url: 'https://codakid.com/faq/' },
      { claim: 'CodaKid private lessons: 50-minute Zoom lessons, same instructor.', url: 'https://codakid.com/private-online-coding-classes/' },
      { claim: 'CodaKid camps: one week, two hours a day, recorded.', url: 'https://codakid.com/camps/' }
    ],
    rejectedClaims: [
      'CodaKid prices: published on its site, not repeated.',
      'Its Google rating, review count and student totals: marketing figures, not used.',
      'Names of its founders, staff or reviewers, and award names: not used.',
      'That live learning is better than self-paced for every child: refused; the page says each suits different children.',
      'Any affiliation: none, stated on the page.'
    ]
  }
};
