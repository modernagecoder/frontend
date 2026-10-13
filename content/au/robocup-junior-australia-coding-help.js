'use strict';
// RoboCup Junior Australia coding help (ag- competition door, Australia cluster Phase 3, row 96).
// Facts read raw on 7 October 2026 at robocupjunior.org.au (curl default agent): home page (challenges
// OnStage, Rescue Line, Rescue Maze, Soccer and the LEGO SPIKE Prime Challenge), the OnStage, Rescue
// Line, Rescue Maze and Soccer challenge pages (divisions, stage size, robot limits), the Beginners
// Guide (three challenge areas, teams of 2 to 4, regional, state and national events), the 2026 SPIKE
// Prime Challenge page (theme, entry from Monday 23 February 2026, everything due Friday 26 June 2026)
// and the 2026 Rescue Simulation demo post (Webots-Erebus). FIRST Australia's program comparison is
// cited only for SPIKE coding languages. Spine: beats per minute to milliseconds per beat, syncing an
// OnStage routine (family checked free site-wide on 7 October 2026). No entry fees (one-currency rule).

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'competition', tag: 'ROBOCUP JUNIOR', label: 'RoboCup Junior Australia coding help', blurb: 'The RoboCup Junior Australia challenges and divisions, and the programming each one asks of a team.' },
  slug: 'robocup-junior-australia-coding-help',
  code: 'rcja',
  accent: '#841834',
  accentRationale: 'RoboCup Junior Australia: a deep raspberry red chosen by hand, muted, at least 10 RGB from every accent in use or claimed',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'RoboCup Junior Australia coding help',
  title: 'RoboCup Junior Australia Coding Help: Challenges Explained',
  description: 'RoboCup Junior Australia explained: OnStage, Rescue Line, Rescue Maze, Soccer and the SPIKE Prime Challenge, the divisions, and the programming each one needs.',
  ogDescription: 'A clear guide to RoboCup Junior Australia for students and coaches: the four challenge areas and the SPIKE Prime Challenge, their divisions, and the programming skills that separate a working robot from a lucky one.',
  twitterDescription: 'RoboCup Junior Australia challenges and divisions, and the programming each one asks for.',
  pageName: 'RoboCup Junior Australia Coding Help',
  webPageDescription: 'A guide to RoboCup Junior Australia for students, parents and coaches: OnStage, Rescue Line, Rescue Maze and Soccer, the LEGO SPIKE Prime Challenge, their entry-level and open divisions, team sizes and event levels, with a worked lesson on timing an OnStage robot to music.',
  courseDescription: 'Live online programming classes for Australian students in robotics teams, covering block and Python programming, sensors, timing and debugging, while the team builds its own robot.',
  crumbs: [{ name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'RoboCup Junior Australia',
  navLinks: [
    { href: '#challenges', label: 'Challenges' },
    { href: '#divisions', label: 'Divisions' },
    { href: '#timing', label: 'OnStage timing' },
    { href: '#coaching', label: 'How we help' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Primary and secondary &middot; Checked at RoboCup Junior Australia',
  h1: 'RoboCup Junior Australia coding help',
  lede: 'RoboCup Junior Australia asks students to design, build and program robots that dance, rescue or play soccer without anyone touching a controller. The building is visible and exciting; the programming is where most teams quietly win or lose. A robot that follows a line in the practice room and wanders off on competition day usually has a code problem, not a hardware one. This page explains the challenges and divisions as RoboCup Junior Australia publishes them, then works through one programming skill every OnStage team needs. We are independent of RoboCup Junior Australia and help with the coding, never with building a team\'s robot for it.',
  secondaryCta: { href: '#timing', label: 'See the timing lesson' },
  wa: 'Hello Modern Age Coders, I would like a free class about programming for a RoboCup Junior team in Australia.',
  heroNote: 'Checked at robocupjunior.org.au on 7 October 2026 &middot; Independent of the organiser &middot; The team\'s own robot',
  spec: [
    ['Organiser', 'RoboCup Junior Australia'],
    ['Challenge areas', 'OnStage, Rescue (Line and Maze), Soccer'],
    ['Also run', 'LEGO SPIKE Prime Challenge'],
    ['Team size', 'Generally 2 to 4 students'],
    ['Event levels', 'Regional, state and national'],
    ['2026 SPIKE Prime theme', 'Survivors of the Future: Robots on a New World'],
    ['We provide', 'Programming lessons for team members'],
    ['We are not', 'An organiser, judge or robot builder']
  ],
  capsuleQ: 'In short',
  capsule: 'RoboCup Junior Australia runs robotics challenges for school students in three areas: OnStage, Rescue (Line and Maze) and Soccer, each with an entry-level division, plus a LEGO SPIKE Prime Challenge. Teams are generally 2 to 4 students, robots must work autonomously, and events run at regional, state and national level. Programming, not building, is where most teams gain or lose points.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for robotics team members',
    lede: 'Most RoboCup robots are programmed in blocks first and text later; these follow that path.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'RCJ / 01', title: 'Scratch for kids', note: 'Loops, conditions and events in blocks, the same ideas a SPIKE word-block program uses.' },
      { course: 'python-ai-kids-masterclass', code: 'RCJ / 02', title: 'Python and AI for kids', note: 'A first text language for primary students ready to move beyond blocks.' },
      { course: 'python-complete-masterclass-teens', code: 'RCJ / 03', title: 'Python for teens', note: 'For secondary students heading into the open divisions, where custom code is common.' }
    ]
  },

  sections: [
    {
      id: 'challenges', tint: 'tint', eyebrow: 'The challenges',
      h2: 'Four challenge areas and a SPIKE Prime Challenge',
      lede: 'RoboCup Junior Australia describes itself as a project-oriented educational initiative that supports local, regional and international robotic events for young students. Each challenge asks for something different from a team\'s code.',
      body: [
        { kind: 'table', caption: 'RoboCup Junior Australia challenges, as described by the organiser', head: ['Challenge', 'What the robot does', 'What the programming must handle'], rows: [
          ['OnStage', 'Performs a dance or theatrical piece to music on a 2 by 2 metre stage', 'Timing against the music, staying inside the boundary, repeatable moves'],
          ['Rescue Line', 'Follows a winding line over tiles to a rescue area, then deals with "the victim"', 'Line following, gaps and obstacles, finding and moving an object'],
          ['Rescue Maze', 'Explores a maze representing a damaged building and locates victims', 'Navigation, mapping, coping with holes, steps and ramps'],
          ['Soccer', 'Two robots play against an opposing pair', 'Finding the ball, facing the right way, staying in the field'],
          ['SPIKE Prime Challenge', 'An autonomous creation on a yearly theme, documented and filmed', 'A design the team explains through a learning journal and video']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The organiser\'s Beginners Guide splits RoboCup into three challenge areas: OnStage, Rescue (Line and Maze) and Soccer. Each has an entry-level division meant for beginners. Teams are generally between 2 and 4 students, and a school can enter several teams in any challenge.',
            'Events run at regional, state and national level, and RoboCup Junior Australia also runs workshops. Each state and territory keeps its own event calendar on the organiser\'s site.'
          ],
          right: [
            'The 2026 SPIKE Prime Challenge, themed "Survivors of the Future: Robots on a New World", opened for entry on Monday 23 February 2026 and asked for all registrations and submissions by Friday 26 June 2026. It is only for teams using the LEGO SPIKE platform, and the robot cannot be remote controlled.',
            'For the 2026 National Championships, the organiser announced a demonstration competition in Rescue Simulation, where teams program a virtual robot in the Webots-Erebus simulator instead of building a physical one.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.robocupjunior.org.au/" rel="noopener" target="_blank">RoboCup Junior Australia home</a>; <a class="ag-inline-link" href="https://www.robocupjunior.org.au/resources/beginners/" rel="noopener" target="_blank">Beginners Guide</a>; <a class="ag-inline-link" href="https://www.robocupjunior.org.au/spike-challenge/" rel="noopener" target="_blank">SPIKE Prime Challenge</a>; <a class="ag-inline-link" href="https://www.robocupjunior.org.au/2026-rescue-simulation/" rel="noopener" target="_blank">2026 Rescue Simulation demo</a>. Read 7 October 2026. Entry fees are set by the organiser and are not shown.' }
      ]
    },
    {
      id: 'divisions', tint: 'deep', eyebrow: 'Divisions',
      h2: 'From entry level to open, challenge by challenge',
      lede: 'Divisions let beginners compete fairly while experienced teams push further. The names and limits below are the organiser\'s.',
      body: [
        { kind: 'table', caption: 'Divisions listed on each RoboCup Junior Australia challenge page', head: ['Challenge', 'Entry level', 'Next steps', 'Top level'], rows: [
          ['OnStage', 'Novice: every member has 2 years or less of OnStage experience', 'None listed', 'Open: any team may enter'],
          ['Rescue Line', 'Riley Rover: primary and secondary students', 'Primary, then Secondary (adds tiles such as the "gridlock")', 'Open: for teams seeking a greater challenge, including international qualification'],
          ['Rescue Maze', 'Mighty Maisy Maze', 'Intermediate Maze, added from 2025', 'Open Maze'],
          ['Soccer', 'Simple Simon (run at select events) and Standard', 'Lightweight', 'Open: an orange ball found with cameras and computer vision']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Limits that shape the code',
          left: [
            'In Standard Soccer, robots must be built from LEGO parts (except certain sensors), weigh at most 1 kg and fit within a 22 cm cylinder, and they track a ball that emits infrared light. Lightweight allows any materials up to 1.4 kg in the same cylinder. Open Soccer swaps the infrared ball for a bright orange one, so robots need cameras and vision software.',
            'In OnStage, the stage is a 2 by 2 metre square marked with a 50 mm black tape boundary. Performances must run longer than 1 minute and less than 2 minutes, with at most 6 minutes on stage, and marks are deducted when a robot completely leaves the area.'
          ],
          rightH3: 'What the step up really means',
          right: [
            'Moving up a division is mostly a programming jump. A Secondary Rescue Line robot must contain or grab the victim and either move it out of the spill or lift it onto a platform, instead of simply pushing it. That needs a sequence of states, not one long block of instructions.',
            'The organiser notes that in Rescue Maze the challenge changes every round, and that a less complex but more reliable robot may beat a theoretically stronger one. Reliability is a coding habit: testing every branch, not just the one that worked last time.'
          ] }
      ]
    },
    {
      id: 'timing', tint: 'tint', eyebrow: 'Worked lesson',
      h2: 'Timing an OnStage routine to the beat',
      lede: 'OnStage robots perform to music, and judges notice immediately when a robot drifts behind the song. The fix is arithmetic, not luck. This example is ours.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Beats into milliseconds', p: 'Songs are described in beats per minute. One minute is 60,000 milliseconds, so one beat lasts 60,000 divided by the tempo. At 120 beats per minute a beat is 500 ms; at 96 it is 625 ms.' },
          { h3: 'Fit the time limit', p: 'A routine must run longer than 1 minute and less than 2. At 96 beats per minute, 128 beats take 128 times 625 ms, which is 80 seconds, comfortably inside the window.' },
          { h3: 'Plan in phrases', p: 'Music groups beats in bars of four and phrases of eight bars. At 96 beats per minute an eight-bar phrase is 32 beats, which is exactly 20 seconds. Four phrases make the 80-second routine.' }
        ] },
        { kind: 'table', mt: true, caption: 'How a small timing error grows when moves are simply chained (our illustration)', head: ['Beats danced', 'Planned time', 'Each move actually takes 640 ms, not 625', 'Behind the music'], numCols: [0, 1, 2, 3], rows: [
          ['8', '5.0 s', '5.12 s', '0.12 s'],
          ['32', '20.0 s', '20.48 s', '0.48 s'],
          ['64', '40.0 s', '40.96 s', '0.96 s'],
          ['128', '80.0 s', '81.92 s', '1.92 s']
        ] },
        { kind: 'p', mt: true, text: 'Motors take a moment to start and stop, so a move programmed as one beat often runs a little long. Fifteen extra milliseconds per move sounds harmless; after 128 beats the robot is almost two seconds late, which an audience can see. Chaining waits one after another lets those errors pile up. The steadier method is to start a timer when the music starts and, at the beginning of every phrase, wait until the timer reaches the phrase\'s planned start: 0, 20, 40 and 60 seconds in this example. Each phrase then begins on time, and the error can never grow beyond one phrase.' },
        { kind: 'two', mt: true,
          leftH3: 'Trying it in class',
          left: [
            'Students first measure the real duration of one move by running it ten times and dividing the total. Then they calculate the drift over a whole routine, predict it, and run the routine with a stopwatch to compare.',
            'Next they rewrite the program so each phrase waits for the timer, and run it again. Seeing the error vanish is usually the moment a team stops trusting guesswork.'
          ],
          rightH3: 'Where the same idea reappears',
          right: [
            'Resynchronising against a clock instead of adding up delays is how games keep animation smooth and how music software keeps tracks together. It is a real engineering pattern, met here first on a 2 metre stage.',
            'The same thinking helps Rescue and Soccer teams: a robot that checks its sensors at a steady rate behaves the same way every run, while one with uneven delays is hard to debug.'
          ] }
      ]
    },
    {
      id: 'coaching', tint: '', eyebrow: 'How we help',
      h2: 'Programming help, while the robot stays the team\'s own',
      lede: 'RoboCup is a team project. Our part is to make each member a stronger programmer, so the team\'s own robot does what the team designed it to do.',
      body: [
        { kind: 'two',
          left: [
            'Lessons cover the ideas behind every challenge: loops and conditions, reading sensors, thresholds, simple states for multi-step tasks, and timing. Students practise on small exercises and on their own code, explaining each decision.',
            'For younger teams we start in blocks. SPIKE kits can be programmed in word blocks, icon blocks or Python, as FIRST Australia notes for its LEGO programs, so moving a team member from blocks to Python is a natural next step.'
          ],
          right: [
            'We never write a team\'s competition program or design its robot. The SPIKE Prime Challenge page asks that a team\'s creation be its own design, and judges in OnStage interview teams about their technical work. A student who has learned the ideas can answer those questions honestly.',
            'We do not promise a placing or a trophy. We teach the programming and debugging habits that make a robot reliable, and the team does the rest.'
          ] },
        { kind: 'table', mt: true, caption: 'A term of programming support for a RoboCup team member', head: ['Weeks', 'Focus', 'Sign of progress'], rows: [
          ['1 and 2', 'Loops, conditions and events in blocks', 'Predicts what a short program will do before running it'],
          ['3 and 4', 'Sensors and thresholds', 'Chooses a light threshold from measured readings, not a guess'],
          ['5 and 6', 'Timing and synchronisation', 'Keeps a routine on the beat for its full length'],
          ['7 and 8', 'States for multi-step tasks', 'Writes a clear sequence such as find, grab, carry, release'],
          ['9 and 10', 'Testing and debugging', 'Keeps a test log and fixes one problem at a time']
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Growing as a robot programmer',
    h2: 'Four rungs from first robot to open division',
    lede: 'Year level matters less than how a student programs.',
    table: { caption: 'From moving a motor to a reliable autonomous robot', head: ['Around', 'Rung', 'The sign it is secure'], rows: [
      ['Upper primary', '1. Moves on purpose', 'Makes the robot drive a set distance and turn a set angle'],
      ['Upper primary to Year 8', '2. Reacts to the world', 'Uses a sensor reading to change what the robot does'],
      ['Years 7 to 10', '3. Plans in steps', 'Breaks a task into states and handles each one cleanly'],
      ['Years 9 to 12', '4. Reliable under change', 'Tests every branch and keeps working when the field changes']
    ] },
    left: { h3: 'When a run goes wrong', ps: [
      'Write down what the robot did and what it should have done before changing any code. Most fixes come from that one sentence.',
      'Change one thing at a time. A team that changes three things at once never learns which one mattered.'
    ] },
    right: { h3: 'Related reading', ps: [
      'The <a class="ag-inline-link" href="/australian-coding-maths-and-ai-competitions-calendar">Australian competitions calendar</a> lists other coding and maths contests across the year.',
      'Teams also often enter <a class="ag-inline-link" href="/first-lego-league-australia-coding-help">FIRST LEGO League in Australia</a>, which uses SPIKE kits too.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for robotics students',
    lede: 'From first blocks to code an open division needs. Each card opens the full syllabus.',
    bands: [
      { num: 'I', h3: 'Blocks', sub: 'Primary team members', courses: [
        { code: 'RCJ / BL / 01', slug: 'scratch-programming-complete-course', title: 'Scratch for kids', blurb: 'Events, loops and conditions.' },
        { code: 'RCJ / BL / 02', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Blocks to games and simple apps.' },
        { code: 'RCJ / BL / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking', blurb: 'Breaking a task into steps.' }
      ] },
      { num: 'II', h3: 'Text code', sub: 'Moving to Python', courses: [
        { code: 'RCJ / TX / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'A gentle first text language.' },
        { code: 'RCJ / TX / 02', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Functions, files and structure.' },
        { code: 'RCJ / TX / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Angles, distances and timing in code.' }
      ] },
      { num: 'III', h3: 'Advanced', sub: 'Open divisions and beyond', courses: [
        { code: 'RCJ / AD / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Searching, states and efficient logic.' },
        { code: 'RCJ / AD / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Reading sensor logs like data.' },
        { code: 'RCJ / AD / 03', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Fast, correct code under pressure.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Online programming lessons around team practice',
    lede: 'Lessons are taught live from India. Australian clocks run ahead of India\'s: Brisbane is four and a half hours ahead of India time all year, and Adelaide is four hours ahead in winter and five in summer. A lesson after an Australian school day falls in the Indian afternoon, so it slots easily around a team\'s practice nights.',
    slots: [
      { time: 'A weekday afternoon', l: 'Programming ideas, practised on small exercises.' },
      { time: 'A weekend session', l: 'Reviewing the student\'s own robot code together.' },
      { time: 'Before an event', l: 'Testing and debugging habits, run by run.' }
    ],
    cells: [
      { h3: 'Ideas first', p: 'Students learn why a program works, so they can fix it on the day.' },
      { h3: 'Their robot, their code', p: 'We explain and question; the team writes and builds.' },
      { h3: 'Blocks to Python', p: 'A clear path from SPIKE blocks to text code.' },
      { h3: 'Groups of fifteen to twenty', p: 'Students at a similar level comparing approaches.' },
      { h3: 'One-to-one option', p: 'For a team\'s lead programmer who wants to go further.' },
      { h3: 'No placing promised', p: 'We teach programming; judges and referees decide results.' }
    ]
  },

  projectsH2: 'Projects our students have built',
  projectsLede: 'Built because students wanted to, apart from any competition. Browse them in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Reviews from our Google listing, left exactly as written.',

  fees: {
    h2: 'Fees',
    lede: 'Programming lessons are charged monthly in US dollars, our international rate, without a joining fee or a lock-in. Any RoboCup entry fee or kit purchase is separate and paid to the organiser or supplier, not to us.',
    free: ['A first lesson with a teacher, free', 'A look at the student\'s current code if they have some', 'No card needed'],
    group: ['Fifteen to twenty students at a similar level', 'The same teacher through the term', 'Programming ideas tested on shared exercises', 'A certificate on completion'],
    one: ['A teacher for one student', 'Time spent on that student\'s own robot code', 'Weekly times that fit team practice']
  },

  faq: {
    eyebrow: 'Questions about RoboCup Junior',
    h2: 'What students and parents ask',
    items: [
      { q: 'What is RoboCup Junior Australia?', a: 'A project-oriented educational initiative, in the organiser\'s words, that supports local, regional and international robotics events for school students, in OnStage, Rescue and Soccer challenges.' },
      { q: 'Which challenge suits a beginner?', a: 'Each challenge has an entry-level division, such as Novice OnStage, Riley Rover Rescue Line, Mighty Maisy Maze and Standard Soccer. OnStage is often a gentle start because any platform can be used.' },
      { q: 'How big is a RoboCup team?', a: 'The organiser\'s Beginners Guide says teams are generally between 2 and 4 students, and schools can enter multiple teams in any challenge.' },
      { q: 'How long is an OnStage performance?', a: 'Longer than 1 minute and less than 2 minutes, with a maximum of 6 minutes on stage, on a 2 by 2 metre square marked with black tape.' },
      { q: 'What is the SPIKE Prime Challenge?', a: 'A nationally coordinated RoboCup Junior Australia challenge for teams using LEGO SPIKE. The 2026 theme was "Survivors of the Future: Robots on a New World", with everything due by Friday 26 June 2026.' },
      { q: 'What is beats per minute?', a: 'The tempo of a piece of music: how many beats fall in one minute. Divide 60,000 by the tempo to get milliseconds per beat, which is how a robot routine is timed to a song.' },
      { q: 'Do robots have to be autonomous?', a: 'Yes. RoboCup Junior robots must work without remote control; soccer robots, for example, must find the ball, face the right way and stay in the field on their own.' },
      { q: 'Will you program our robot for us?', a: 'No. We teach team members programming and debugging so the team can program its own robot. Judges expect a team\'s work to be its own.' },
      { q: 'Do we need to buy a kit first?', a: 'Not for lessons. Many programming ideas can be learned in Scratch or Python before a kit arrives, and then applied to the team\'s robot.' },
      { q: 'Can lessons help with Rescue Simulation?', a: 'Yes, in the programming sense. The 2026 demonstration competition uses a virtual robot in the Webots-Erebus simulator, so navigation and mapping code matter more than hardware.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for Australian students',
    lede: 'Other competitions and coding pathways.',
    items: [
      { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar', p: 'Coding and maths contests by month.' },
      { href: '/first-lego-league-australia-coding-help', label: 'FIRST LEGO League', p: 'Another robotics program using SPIKE.' },
      { href: '/game-development-for-kids-australia', label: 'Game development for kids', p: 'Programming that moves things on screen.' },
      { href: '/after-scratch-next-step-python-australia', label: 'After Scratch, Python', p: 'The step from blocks to text.' },
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'Every state and every age.' },
      { href: '/online-coding-classes-for-kids-australia', label: 'Coding classes for kids', p: 'What an online class looks like.' }
    ]
  },

  start: {
    h2: 'Start with a free programming class',
    lede: 'Tell us the year level, the challenge and how the team programs now. The free class works on one real programming idea from that challenge and ends with a practical next step.',
    readFirst: 'Want to look around first? All course outlines are on the <a class="ag-inline-link" href="/course-atlas">course atlas</a>, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> walks through a lesson.',
    note: 'WhatsApp is normally the quickest way to reach us. The number is Indian, because that is where we are based; there is no Australian office.',
    formNote: 'No card and no obligation. We reply once to arrange a time.'
  },

  footer: {
    cols: [
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/online-coding-classes-for-kids-australia', label: 'Coding for kids' },
        { href: '/game-development-for-kids-australia', label: 'Game development' },
        { href: '/online-maths-tutoring-australia', label: 'Maths tutoring' }
      ] },
      { h4: 'Competitions', links: [
        { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' },
        { href: '/first-lego-league-australia-coding-help', label: 'FIRST LEGO League' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/course-atlas', label: 'Course atlas' }
      ] }
    ],
    bottomRight: 'Independent of RoboCup Junior Australia; facts checked at source'
  },

  personalityCss: `
.ag-root.ag-rcja .ag-hero-grid { gap: clamp(1rem, 2.6vw, 2.2rem); }
.ag-root.ag-rcja .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-rcja .ag-capsule { border-left-width: 7px; }
.ag-root.ag-rcja .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-rcja .ag-table caption { font-style: italic; }
.ag-root.ag-rcja .ag-table th { letter-spacing: 0.015em; }
.ag-root.ag-rcja .ag-spec dt { letter-spacing: 0.12em; }
.ag-root.ag-rcja .ag-slots { gap: 1.2rem; }
`,

  dossier: {
    curriculumAuthority: 'RoboCup Junior Australia pages, read 7 October 2026. Home: "RoboCup Junior Australia is a project-oriented educational initiative that supports local, regional and international robotic events for young students"; challenges OnStage, Rescue Line, Rescue Maze, Soccer, LEGO SPIKE Challenge. Beginners Guide: "RoboCup is split into three challenge areas"; "Teams are generally between 2 to 4 students. Schools can enter multiple teams in any challenge." OnStage: 1-2 minute performance; "The stage is a 2x2m marked square with a 50mm black tape boundary"; "longer than 1 minute and less than 2 minutes with a maximum of 6 minutes on stage"; Novice (2 years or less experience) and Open divisions; scored on performance and technical interview. Rescue Line: Riley Rover, Primary, Secondary ("gridlock"), Open. Rescue Maze: Mighty Maisy Maze, Intermediate Maze (from 2025), Open Maze; "The challenge changes every round". Soccer: Simple Simon, Standard (LEGO, IR ball, max 1kg, 22cm cylinder), Lightweight (any materials, 1.4kg), Open (orange ball, cameras). SPIKE Prime Challenge 2026: theme "Survivors of the Future: Robots on a New World"; entry from Monday 23rd February 2026; all registrations and submissions due Friday June 26th 2026; own design; no remote control. 2026 Nationals demo: Rescue Simulation in Webots-Erebus.',
    localProject: 'A worked OnStage timing lesson written by us: one beat lasts 60,000 / tempo ms (500 ms at 120, 625 ms at 96); 128 beats at 96 take 80 s, inside the 1 to 2 minute window; an eight-bar phrase at 96 is 32 beats = 20 s. If each move takes 640 ms instead of 625, drift reaches 0.12 s after 8 beats, 0.48 s after 32, 0.96 s after 64 and 1.92 s after 128; resynchronising to a timer at each phrase (0, 20, 40, 60 s) caps the error at one phrase.',
    requiredMentions: ['Riley Rover', 'Mighty Maisy Maze', 'Simple Simon', '22 cm cylinder', 'Survivors of the Future', 'Webots-Erebus', '50 mm black tape', 'milliseconds per beat', 'Friday 26 June 2026'],
    sources: [
      { claim: 'RoboCup Junior Australia home page: description and challenge list.', url: 'https://www.robocupjunior.org.au/' },
      { claim: 'Beginners Guide: three challenge areas, team size, event levels.', url: 'https://www.robocupjunior.org.au/resources/beginners/' },
      { claim: 'OnStage challenge page: stage, time limits, divisions.', url: 'https://www.robocupjunior.org.au/onstage/' },
      { claim: 'Rescue Line, Rescue Maze and Soccer challenge pages: divisions and robot limits.', url: 'https://www.robocupjunior.org.au/soccer/' },
      { claim: 'SPIKE Prime Challenge 2026: theme, entry and due dates, specifications.', url: 'https://www.robocupjunior.org.au/spike-challenge/' },
      { claim: '2026 Rescue Simulation demonstration competition.', url: 'https://www.robocupjunior.org.au/2026-rescue-simulation/' },
      { claim: 'FIRST Australia program comparison: SPIKE programs can be coded in Word Blocks, Icon Blocks or Python.', url: 'https://www.firstaustralia.org/compare-programs' }
    ],
    rejectedClaims: [
      'National Championships 2026 dates and venue: not stated on the pages read; families are pointed to the national event page.',
      'Entry fees and kit prices, including those printed on the Beginners Guide: not shown (Australian dollars; one-currency rule).',
      'The organiser\'s phrase "up to five divisions" for Rescue Line: only four were named on the page, so the page lists those four.',
      'Any claim that we build, program or enter robots for teams: we do not.',
      'Any promise of a placing, trophy or qualification: none made.',
      'Affiliation with RoboCup Junior Australia or RoboCup Federation: none; stated on the page.'
    ]
  }
};
