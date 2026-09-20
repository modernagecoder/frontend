'use strict';
// FIRST LEGO League UK coding help (ag- competition spoke, UK cluster Phase 2).
// Facts read on 20 September 2026:
//  - LEGO Education: "The 2026-2027 FIRST LEGO League season will be our last together", ending a
//    partnership of nearly three decades; the 2026-2027 challenge is "BIOGLOW", on biodiversity and
//    protecting the planet; the Founders Edition uses SPIKE technology with a final season of 2027/2028,
//    and a Future Edition using Computer Science and AI hardware launches in 2026/2027; a season is
//    described as "16+ hours of building, coding and researching".
//  - IET: "The Institution of Engineering and Technology (IET) are proud to be the UK delivery partners
//    for FIRST LEGO League"; FIRST LEGO League Explore is "suitable for children age 6 to 10", Challenge
//    is "suitable for students aged 9 to 16 years old" and the Futures Edition is "suitable for students
//    aged 5 to 16 years old"; in Challenge, "students complete missions through autonomous robot
//    programming and present their innovation projects to judges", with "options to compete at Regional
//    and National Tournaments".
//  - RoboCupJunior, named here because its own UK page publishes no organiser, entry route or dates and
//    so gets no page of its own: junior.robocup.org describes three leagues, Soccer, Rescue and OnStage,
//    "students up to age 19", and gives the next RoboCup as Songdo, South Korea, 30 June to 6 July 2026.
//    We state plainly that we could not confirm a current UK national organiser.
// Spine: the robot runs alone. Our simulation of 20 September 2026, 5,000 runs per row: a robot driving
// legs of 30 cm with each heading within 2 degrees of true misses by 1.1 cm on average after 2 legs,
// 3.6 cm after 5, 9.6 cm after 10 and 26.0 cm after 20, with a worst case of 43.0 cm at ten legs and
// 126.2 cm at twenty. The errors are unbiased and the miss still grows, which is why teams re-align
// against a wall rather than buying better motors.
// Lesson family: dead reckoning, where unbiased errors still accumulate into position error. Screened
// 20 September 2026 as distinct from errors that share a direction (Leidschendam-Voorburg) and from
// truncation against rounding (Yanqul).

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'competition', tag: 'FLL', label: 'FIRST LEGO League', blurb: 'Autonomous robots, an innovation project, and a partnership that ends after the 2026-27 season.' },
  slug: 'first-lego-league-uk-coding-help',
  code: 'fll',
  accent: '#4D7231',
  accentRationale: 'FIRST LEGO League: a mid olive-green from the solver (4.52:1 on every paper tint), warmer and lighter than the Surrey, Scottish Challenge and intermediate olympiad greens',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'FIRST LEGO League UK coding help',
  title: 'FIRST LEGO League UK Coding Help | Explore, Challenge, Futures',
  description: 'Help with FIRST LEGO League in the UK: the IET as delivery partner, age ranges, autonomous robot missions, the BIOGLOW season and what happens after it.',
  ogDescription: 'A FIRST LEGO League robot runs with nobody touching it. Small heading errors add up: ten legs of thirty centimetres can miss by more than forty.',
  twitterDescription: 'FIRST LEGO League UK help: autonomous missions, the BIOGLOW season, and why robots drift.',
  pageName: 'FIRST LEGO League UK Coding Help',
  webPageDescription: 'Guidance for UK teams in FIRST LEGO League, covering the IET as delivery partner, the Explore, Challenge and Futures Edition age ranges, autonomous robot programming, and what the end of the LEGO Education partnership means.',
  courseDescription: 'Live online coding classes for children and teenagers in robotics teams, covering block programming, Python and the logic of autonomous movement.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'UK competitions calendar', href: '/uk-coding-maths-and-ai-competitions-calendar' }],
  crumbLabel: 'FIRST LEGO League',
  navLinks: [
    { href: '#programmes', label: 'The programmes' },
    { href: '#drift', label: 'Why robots drift' },
    { href: '#after', label: 'After 2026-27' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United Kingdom &middot; Ages 5 to 16 &middot; BIOGLOW season',
  h1: 'FIRST LEGO League UK coding help',
  lede: 'The thing that makes FIRST LEGO League different from every other robotics activity a child meets is a single rule: once the match starts, nobody touches the robot. It drives out, does what it was told, and comes back, and any mistake in the programming happens in front of everybody at full speed. That rule is why teams spend their season arguing about centimetres, and it produces a lesson about the physical world that no amount of screen programming teaches. This page covers the three programmes and their ages, what the coding actually involves, and the change coming after the 2026-27 season.',
  secondaryCta: { href: '#drift', label: 'See how far a robot drifts' },
  wa: 'Hello Modern Age Coders, my child is in a FIRST LEGO League team and I would like a free coding class.',
  heroNote: 'Quoted from LEGO Education and the IET with the date we read it &middot; Our own simulation, labelled &middot; We coach the coding, not the team',
  spec: [
    ['UK delivery partner', 'The IET'],
    ['Explore', 'Ages 6 to 10'],
    ['Challenge', 'Ages 9 to 16'],
    ['Futures Edition', 'Ages 5 to 16'],
    ['This season', 'BIOGLOW'],
    ['Robot', 'Autonomous: nobody touches it'],
    ['Also judged', 'An innovation project'],
    ['Tournaments', 'Regional and national']
  ],
  capsuleQ: 'In short',
  capsule: '"The Institution of Engineering and Technology (IET) are proud to be the UK delivery partners for FIRST LEGO League." There are three programmes: Explore, "suitable for children age 6 to 10"; Challenge, "suitable for students aged 9 to 16 years old"; and the Futures Edition, "suitable for students aged 5 to 16 years old". In Challenge, "students complete missions through autonomous robot programming and present their innovation projects to judges", with options to compete at regional and national tournaments, and the 2026-27 season is called BIOGLOW, about ecosystems and protecting the planet. LEGO Education has said that "the 2026-2027 FIRST LEGO League season will be our last together", ending a partnership of nearly three decades, with its own Founders Edition running a final season in 2027/2028 and a Future Edition using computer science and AI hardware launching in 2026/2027. We teach the coding. A first class is free; a group place is USD 100 a month and one-to-one teaching USD 150.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for a robotics team',
    lede: 'Robot programming is ordinary programming with consequences. Pick by what the child can already write.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'FLL / 01', title: 'Coding for kids, blocks to AI', note: 'For Explore and younger Challenge teams: sequence, repetition and conditions in a block language.' },
      { course: 'python-ai-kids-masterclass', code: 'FLL / 02', title: 'Python and AI for kids', note: 'For a team moving from blocks to typed code, which several robot platforms now allow.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'FLL / 03', title: 'Algorithms and data structures', note: 'For older Challenge teams: planning a mission sequence and reasoning about what can go wrong in it.' }
    ]
  },

  sections: [
    {
      id: 'programmes', tint: 'tint', eyebrow: 'The programmes',
      h2: 'Three programmes, one rule about the robot',
      lede: 'Facts read at the IET and LEGO Education on 20 September 2026.',
      body: [
        { kind: 'table', caption: 'FIRST LEGO League in the UK, as the organisers describe it', head: ['Programme', 'Ages', 'What a team does'], rows: [
          ['Explore', '"children age 6 to 10"', 'A first structured team experience with models and simple programming'],
          ['Challenge', '"students aged 9 to 16 years old"', '"Students complete missions through autonomous robot programming and present their innovation projects to judges"'],
          ['Futures Edition', '"students aged 5 to 16 years old"', 'The newer edition, spanning the whole age range'],
          ['This season', 'All', 'BIOGLOW, about how the world\'s ecosystems thrive'],
          ['Tournaments', 'Challenge', '"Options to compete at Regional and National Tournaments"'],
          ['UK delivery', 'All', 'The Institution of Engineering and Technology'],
          ['A season', 'All', 'LEGO Education describes "16+ hours of building, coding and researching"']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Two halves, and families usually only prepare for one. The robot missions get the attention because they are visible and exciting, but Challenge teams also present an innovation project to judges, which is a research and communication task much closer to a science fair than to robotics.',
            'A team that builds a superb robot and prepares the project in the last fortnight leaves marks on the table. The same is true in reverse, and the split is worth agreeing in September rather than in January.'
          ],
          right: [
            'The age bands overlap deliberately. A nine-year-old can be in Explore or in Challenge depending on the child and the team, and the Futures Edition spans five to sixteen, so a school running a club across year groups has a way to include everyone.',
            'Sixteen hours of building, coding and researching is the organiser\'s own description of a season, which is a useful expectation to set with parents: this is a term of lunchtimes, not a weekend.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://education.theiet.org/first-lego-league-programmes/" rel="noopener" target="_blank">the IET on FIRST LEGO League</a> and <a class="ag-inline-link" href="https://education.lego.com/en-gb/first-lego-league/" rel="noopener" target="_blank">LEGO Education</a>, read 20 September 2026. Modern Age Coders is not connected with the IET, LEGO Education or FIRST.' }
      ]
    },
    {
      id: 'drift', tint: 'deep', eyebrow: 'The method',
      h2: 'The robot runs alone, and small errors add up',
      lede: 'A team can only program the robot in advance, so the whole season turns on one question: how wrong will it be by the end of the run? We simulated it.',
      body: [
        { kind: 'p', html: 'Imagine a robot driving a mission as a sequence of straight legs, each thirty centimetres, turning between them. Suppose each leg is driven within two degrees of the intended heading, which is a good robot on a good surface. Two degrees is nothing. Ten legs of nothing is not nothing.' },
        { kind: 'table', caption: 'Our simulation of 20 September 2026: 5,000 runs per row, legs of 30 cm, each heading within 2 degrees', head: ['Legs driven', 'Average miss', 'Worst of 5,000 runs'], rows: [
          ['2', '1.1 cm', '3.1 cm'],
          ['5', '3.6 cm', '14.2 cm'],
          ['10', '9.6 cm', '43.0 cm'],
          ['20', '26.0 cm', '126.2 cm']
        ] },
        { kind: 'three', cells: [
          { h3: 'Nothing here is biased', p: 'Each heading is as likely to be two degrees left as two degrees right. There is no systematic fault to fix, and the miss still grows with every leg.' },
          { h3: 'Why long missions fail', p: 'A ten-leg mission misses by about ten centimetres on average and can miss by forty. On a competition mat, forty centimetres is a different postcode.' },
          { h3: 'The fix is not better motors', p: 'It is to touch something known. Drive into a wall, square up against it, and the accumulated error is gone. Teams that do this run long missions; teams that do not, cannot.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'This is the single most useful thing to teach a Challenge team in their first month, and it is genuinely counterintuitive. Children assume that a more accurate robot is the answer, and it is not: halving the error only delays the problem, because the miss still grows with the number of legs.',
            'What actually works is structural. Break a long mission into short runs, re-align against a fixed feature between them, and design the attachments so that hitting a wall is safe rather than expensive.'
          ],
          right: [
            'The same reasoning runs through professional robotics, where the technique has a name, dead reckoning, and the same answer: correct against something you can measure, as often as you can afford to.',
            'For a team who want more robotics after the season, RoboCupJunior runs three leagues, Soccer, Rescue and OnStage, for students up to age 19, with the next RoboCup in Songdo, South Korea, from 30 June to 6 July 2026. We could not confirm a current UK national organiser for it on the pages we read, so ask before planning a year around it.'
          ] },
        { kind: 'source', html: 'The simulation is ours, run on 20 September 2026 over 5,000 trials per row. The RoboCupJunior facts are from junior.robocup.org, read the same day.' }
      ]
    },
    {
      id: 'after', tint: 'plain', eyebrow: 'What changes',
      h2: 'The 2026-27 season is the last of the partnership',
      lede: 'This is the fact a family should know before committing a club to several years, and it comes from LEGO Education itself.',
      body: [
        { kind: 'table', caption: 'What LEGO Education has published', head: ['Statement', 'What it means'], rows: [
          ['"The 2026-2027 FIRST LEGO League season will be our last together"', 'The partnership ends after this season, having run for nearly three decades'],
          ['The 2026-2027 challenge is BIOGLOW', 'This season runs normally, on biodiversity and protecting the planet'],
          ['The Founders Edition uses SPIKE technology, with a final season of 2027/2028', 'Existing kit keeps a season beyond this one'],
          ['A Future Edition using computer science and AI hardware launches in 2026/2027', 'The successor programme starts alongside the last shared season']
        ] },
        { kind: 'two', mt: true,
          left: [
            'For a club, the practical reading is that this season is normal and the one after is not yet clear. A school buying kit should ask which edition it is buying into and what tournament route it will have in 2028, rather than assuming continuity.',
            'For a child, it changes nothing at all. The skills a Challenge team builds, programming something that must work unattended, dividing work across people, presenting a project to adults, do not belong to any brand.'
          ],
          right: [
            'We have deliberately not repeated the many second-hand accounts of what replaces what. Everything in the table above comes from LEGO Education\'s own page, and the rest is not ours to guess at.',
            'The <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a> carries the rest of the year, and <a class="ag-inline-link" href="/coolest-projects-uk-project-ideas">Coolest Projects</a> takes hardware entries from any age with no ranking at all, which suits a club that loses its tournament route.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Getting ready',
    h2: 'Four rungs for a robotics programmer',
    lede: 'Rungs are about reliability, because a robot that works four times in five loses.',
    table: { caption: 'From a first sequence to a mission that repeats', head: ['Stage', 'Rung', 'The sign it is secure'], rows: [
      ['Ages 6 to 9', '1. Sequence', 'Can predict where the robot will stop before pressing go'],
      ['Ages 9 to 11', '2. Repeatability', 'Runs the same program three times and gets the same result'],
      ['Ages 11 to 14', '3. Re-alignment', 'Uses a wall or a line to cancel accumulated error mid-mission'],
      ['Ages 13 to 16', '4. Sensors and decisions', 'Programs the robot to react to what it finds, not just to what was expected']
    ] },
    left: { h3: 'If a tournament is close', ps: [
      'Run every mission five times and count the failures. A mission that works four times in five is the one that will fail on the day.',
      'Add one re-alignment against a wall in the middle of the longest mission. It is usually worth more than any code change.'
    ] },
    right: { h3: 'Beyond the season', ps: [
      'The programming transfers directly: everything a Challenge team does is ordinary code with a physical consequence.',
      'The <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a> lists what else is open to the same age group.'
    ] }
  },

  catalogue: {
    eyebrow: 'The full list',
    h2: 'Courses for a robotics club member',
    lede: 'Grouped by what a child can already write, with the syllabus behind each card.',
    bands: [
      { num: 'I', h3: 'Blocks', sub: 'Ages 6 to 11', courses: [
        { code: 'FLL / A / 01', slug: 'scratch-programming-complete-course', title: 'Scratch for kids', blurb: 'Sequence, loops and conditions, visually.' },
        { code: 'FLL / A / 02', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids, blocks to AI', blurb: 'Building things that move, before anything is typed.' },
        { code: 'FLL / A / 03', slug: 'block-coding-app-development-masterclass', title: 'App making with blocks', blurb: 'Real programs without a semicolon.' }
      ] },
      { num: 'II', h3: 'Typed code', sub: 'Ages 10 to 14', courses: [
        { code: 'FLL / B / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'The first typed language, taught patiently.' },
        { code: 'FLL / B / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding for kids', blurb: 'Real code, in a world a child already knows.' },
        { code: 'FLL / B / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Angles, distances and why the arithmetic matters.' }
      ] },
      { num: 'III', h3: 'Real programming', sub: 'Ages 13 to 16', courses: [
        { code: 'FLL / C / 01', slug: 'python-complete-masterclass-teens', title: 'Python from start to finish', blurb: 'Structure, testing and debugging your own work.' },
        { code: 'FLL / C / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms and data structures', blurb: 'Planning a sequence and reasoning about failure.' },
        { code: 'FLL / C / 03', slug: 'gcse-computer-science-course', title: 'GCSE Computer Science', blurb: 'The qualification waiting at the end of the club.' }
      ] },
      { num: 'IV', h3: 'The other half', sub: 'The innovation project', courses: [
        { code: 'FLL / D / 01', slug: 'data-science-course-for-teens-python-data', title: 'Data science with Python', blurb: 'Turning measurements into something a judge believes.' },
        { code: 'FLL / D / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'When the innovation project needs a model in it.' },
        { code: 'FLL / D / 03', slug: 'complete-app-development-masterclass-for-teens', title: 'App development', blurb: 'Screens and buttons, for a project with a phone in it.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Weekly coding, taught with a physical consequence in mind',
    lede: 'Lessons are live on video from India, five and a half hours ahead of the UK in winter and four and a half in summer, at a time agreed and kept in UK time.',
    slots: [
      { time: 'Early weekday evening', l: 'For primary-age club members.' },
      { time: 'Later weekday evening', l: 'For older Challenge teams.' },
      { time: 'Weekend morning', l: 'For a long session on mission logic.' }
    ],
    cells: [
      { h3: 'Reliability taught first', p: 'We count how often a program works, not whether it worked once.' },
      { h3: 'Predict then run', p: 'Children say where the robot will end up before pressing go, which is where the learning is.' },
      { h3: 'Five to ten learners', p: 'Enough that two approaches meet, few enough that every program is read.' },
      { h3: 'Platform agnostic', p: 'We teach the programming ideas. Whatever kit the club owns, the logic is the same.' },
      { h3: 'One to one when useful', p: 'For a team member handling the hardest missions.' },
      { h3: 'We do not coach the team', p: 'We teach individuals to program. We have no role in any tournament and no relationship with the organisers.' }
    ]
  },

  projectsH2: 'What our students have built',
  projectsLede: 'Four pieces of finished, published work by students here, made for their own reasons. More of them sit on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Reviews from our Google profile, in the words families used.',

  fees: {
    h2: 'Fees',
    lede: 'A single monthly rate in US dollars outside India, no registration charge, and you can stop whenever a month ends.',
    free: ['A genuine lesson on the programming', 'A plain view of where the gaps are', 'No card, no details beyond a number'],
    group: ['Five to ten learners at one level', 'The same teacher weekly', 'Programs read line by line', 'A certificate at the end'],
    one: ['A teacher working with one learner', 'Shaped around the missions', 'Useful before a regional tournament']
  },

  faq: {
    eyebrow: 'FIRST LEGO League questions',
    h2: 'What parents and coaches ask',
    items: [
      { q: 'Who runs FIRST LEGO League in the UK?', a: 'The Institution of Engineering and Technology. The IET describes itself as the UK delivery partner for FIRST LEGO League.' },
      { q: 'What ages are the programmes for?', a: 'The IET gives Explore as suitable for children aged 6 to 10, Challenge for students aged 9 to 16, and the Futures Edition for students aged 5 to 16.' },
      { q: 'What does a Challenge team actually do?', a: 'In the IET\'s words, students complete missions through autonomous robot programming and present their innovation projects to judges, with options to compete at regional and national tournaments.' },
      { q: 'How much time does a season take?', a: 'LEGO Education describes a season as more than 16 hours of building, coding and researching, so a term of club sessions rather than a weekend.' },
      { q: 'What is this season called?', a: 'BIOGLOW, the 2026-27 challenge, about how the world\'s ecosystems thrive and protecting the planet.' },
      { q: 'Is FIRST LEGO League ending?', a: 'LEGO Education has said that the 2026-2027 season will be its last in partnership with FIRST, after nearly three decades. Its Founders Edition runs a final season in 2027/2028 and a Future Edition using computer science and AI hardware launches in 2026/2027. We have not repeated second-hand accounts of what follows.' },
      { q: 'Why does our robot end up in the wrong place?', a: 'Because small heading errors accumulate. Our simulation of legs of 30 cm, each within 2 degrees of true, misses by about 1 cm after two legs, 9.6 cm after ten and 26 cm after twenty, with worst cases of 43 cm and 126 cm. Nothing in that is biased; the miss grows anyway.' },
      { q: 'How do teams fix drift?', a: 'Not with better motors. By touching something known: drive into a wall, square up against it, and the accumulated error disappears. Teams that re-align mid-mission can run long missions; teams that do not, cannot.' },
      { q: 'What else can a robotics team enter?', a: 'RoboCupJunior runs Soccer, Rescue and OnStage leagues for students up to 19, with the next RoboCup in Songdo, South Korea, from 30 June to 6 July 2026. We could not confirm a current UK national organiser, so check before planning around it.' },
      { q: 'Do you coach teams?', a: 'No. We teach individuals to program, in live online classes. We have no role in any tournament and no relationship with the IET, LEGO Education or FIRST.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for makers and builders',
    lede: 'Showcases, project competitions and the whole year in one table.',
    items: [
      { href: '/coolest-projects-uk-project-ideas', label: 'Coolest Projects UK', p: 'Hardware entries, any age, no ranking.' },
      { href: '/big-bang-competition-project-help', label: 'Big Bang Competition', p: 'Teams of any size, judged on a five-minute video.' },
      { href: '/astro-pi-mission-zero-and-space-lab-help', label: 'Astro Pi Mission Zero', p: 'Run a Python program on the space station.' },
      { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'UK competitions calendar 2026-27', p: 'The season in one table, with each organiser named.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'The four school systems, and every UK page.' },
      { href: '/online-coding-classes-for-kids-uk', label: 'Coding classes for UK children', p: 'What a primary-age child learns first, and in what order.' }
    ]
  },

  start: {
    h2: 'Book a free coding lesson',
    lede: 'Tell us the age and what kit the club uses. The free lesson works on the programming logic, and afterwards we say plainly what we saw.',
    readFirst: 'Rather read first? Syllabuses are on the <a class="ag-inline-link" href="/courses">course pages</a>, the method on <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and the topic order on the <a class="ag-inline-link" href="/coding-roadmap">roadmap</a>.',
    note: 'Send a WhatsApp if you would rather not wait; it costs a UK mobile nothing. Our number is registered in India, a fact we put on every page, and there is no British branch.',
    formNote: 'No card, no obligation. One reply to arrange a time.'
  },

  footer: {
    cols: [
      { h4: 'Making and building', links: [
        { href: '/coolest-projects-uk-project-ideas', label: 'Coolest Projects UK' },
        { href: '/big-bang-competition-project-help', label: 'Big Bang Competition' },
        { href: '/astro-pi-mission-zero-and-space-lab-help', label: 'Astro Pi' },
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' }
      ] },
      { h4: 'Learning to code', links: [
        { href: '/courses/scratch-programming-complete-course', label: 'Scratch for kids' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python for kids' },
        { href: '/courses/problem-solving-dsa-masterclass-teens', label: 'Algorithms and data structures' },
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' }
      ] }
    ],
    bottomRight: 'We teach the code; the robot runs on its own'
  },

  personalityCss: `
.ag-root.ag-fll .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-fll .ag-capsule { border-left-width: 9px; border-radius: 0 6px 6px 0; }
.ag-root.ag-fll .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-fll .ag-table caption { text-align: left; font-weight: 600; letter-spacing: 0.016em; }
.ag-root.ag-fll .ag-table td:nth-child(2) { font-variant-numeric: tabular-nums; }
.ag-root.ag-fll .ag-spec dt { letter-spacing: 0.132em; }
.ag-root.ag-fll .ag-three h3 { letter-spacing: -0.0035em; }
.ag-root.ag-fll .ag-slots { gap: 1.26rem; }
`,

  mustMention: ['delivery partners for FIRST LEGO League', 'aged 9 to 16 years old', 'BIOGLOW', 'will be our last together', '9.6 cm', '126.2 cm', 'RoboCupJunior']
};
