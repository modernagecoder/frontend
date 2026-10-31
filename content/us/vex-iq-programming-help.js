'use strict';
// VEX IQ programming help (ag- competition door; UK and US exams cluster, row US072). Plan
// docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. Read raw with curl on 31 October 2026; copies in
// keyword-research-2026-09/uk-us-gap/src/vex-iq-programming-help/:
//  - vexrobotics.com, kb.vex.com, api.vex.com, codeiq.vex.com, education.vex.com, content.vexrobotics.com,
//    competition.vex.com, roboticseducation.org: all HTTP 403; not circumvented. So no VEX game name, VEXcode command,
//    language list or VEX competition rule is printed.
//  - robotevents.com (robotevents.html): "RECF is not authorized to organize, promote, approve, or manage VEX Robotics
//    competitions." and RECF competitions with VEX products "will not qualify teams for the 2026 to 2027 VEX Robotics World
//    Championship" (en dash in original; written "2026 to 2027" on the page).
//  - recf.org (recf.html, teams_recf-robotics-competition.html, about-us_news.html): RECF Engage for "Under 12 /
//    elementary school or Under 15 / middle school teams of 2+ students", "Robots built of specific VEX IQ®, Hexbug®,
//    and LEGO® electronics and components"; "In some matches, team members drive the robot. In others, the robot drives
//    itself based on pre-programmed code written by the students."; news teaser "the 2027 RECF World Championship in St.
//    Louis"; RECF serves students "from 3rd grade through college".
//  - games.recf.org/engage (engage.html, the RECF Engage 2026-2027 game manual v2.0): game "Tier Takeover"; "6’x8’
//    field"; bean bags; five challenges; solo coding "operated entirely by segments of code to no controller!" (em dash in
//    original, not quoted on the page); "60 seconds" for solo driving, solo coding and alliance matches; "up to five total
//    solo match attempts per competition"; rule 4.1.2 "The robot can be reset as a strategy" and "multiple small segments
//    that are each launched from the starting position after a reset"; 2.3.1 "Adults may teach coding concepts, but may
//    not tell students what should or should not be included in their code."; 2.3.2 libraries as starting points;
//    ages "12 years of age or younger on May 6, 2027" and "15 years of age or younger on May 6, 2027"; start size "11”
//    wide by 20” long by 15” tall"; "up to 6 motors per robot"; one VEX IQ brain (1st Gen or 2nd Gen); legal VEX IQ
//    sensors (Color, Optical, Distance, Touch, Gyro, AI Vision, Vision); LEGO SPIKE, EV3, Pybricks named; scoring
//    floor 1, L1 5, L2 10, L3 25, L4 50 (yellow only), parked 25; release schedule incl. "November 10, 2026 - Major v3.0
//    release"; "not sponsored by, affiliated with, or endorsed by VEX Robotics, Inc. or Innovation First, Inc.";
//    engineering notebook judged.
// Our own material, labelled on the page: the points-per-second plan (hypothetical timings 8 s, 14 s, 6 s; plans
// scoring 60 in 60, 58 and 56 seconds checked by brute force in Python), the segment pseudocode, the sensor checkpoint
// example, the 8-week club plan. Lesson family: segmented autonomous routines with sensor checkpoints.
// Siblings read so as not to repeat: first-lego-league-uk-coding-help, first-lego-league-australia-coding-help.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SEGMENTS = '# Our pseudocode for one solo coding run, in three segments.\n# Command names are ours; your VEXcode or LEGO tool will spell them differently.\n\nsegment_A():            # launched from the start position\n    drive_forward(400 mm)\n    turn_right(90 degrees)\n    drive_until(distance_sensor < 80 mm)   # stop on a reading, not a guess\n    lift_to(L2)\n    release()\n\n# robot reset to the start position by a team member (rule 4.1.2)\n\nsegment_B():\n    drive_forward(250 mm)\n    turn_left(45 degrees)\n    if optical_sensor sees RED:\n        lift_to(L2)\n    else:\n        lift_to(FLOOR)\n    release()\n\nsegment_C():            # the last 6 seconds\n    drive_backward_until(bumper_pressed)\n    stop()               # parked in the load zone';

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'COMPETITION', blurb: 'VEX IQ coding help for 2026 to 2027: the RECF Engage Tier Takeover solo coding rules, segment-and-reset routines, sensor checkpoints and a 60-second plan.' },
  slug: 'vex-iq-programming-help',
  code: 'vip',
  accent: '#793457',
  accentRationale: 'VEX IQ programming help: a plum #793457 from the US allocation table, 8.11:1 on paper #FBF8F2, kept away from the robotics greens used on the FIRST LEGO League pages',
  pageType: 'market',
  market: US,
  routeLabel: 'VEX IQ programming help',
  title: 'VEX IQ Programming Help: Coding Tutorial for 2026-27',
  description: 'VEX IQ coding help for 2026-27: solo coding rules in the RECF Engage Tier Takeover manual, segment-and-reset routines, sensor checkpoints and a 60-second plan.',
  ogDescription: 'VEX IQ robots now compete in two separate programs. How a 60-second solo coding run works in RECF Engage Tier Takeover, and how to code one that scores reliably, with our worked plan.',
  twitterDescription: 'VEX IQ coding for 2026-27: segments, resets and sensors, explained.',
  pageName: 'VEX IQ Programming Help',
  webPageDescription: 'A guide for US students, parents and coaches to programming a VEX IQ robot in the 2026 to 2027 season, from the RECF Engage Tier Takeover game manual and RECF pages, with original pseudocode and a points-per-second plan.',
  courseDescription: 'Live online coding classes for robotics students aged about 8 to 15 that teach the programming behind a VEX IQ solo coding run: sequences, sensors, loops and planning, in a batch of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'VEX IQ programming help',
  navLinks: [
    { href: '#programs', label: 'Two programs' },
    { href: '#solo', label: 'Solo coding' },
    { href: '#segments', label: 'Segments' },
    { href: '#sensors', label: 'Sensors' },
    { href: '#plan', label: '60-second plan' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Ages about 8 to 15 &middot; The 2026 to 2027 season',
  h1: 'VEX IQ programming help',
  lede: 'A VEX IQ robot that scores in a solo coding match is running code the students wrote, with nobody holding a controller. This page explains how that match works in the 2026 to 2027 RECF Engage game, Tier Takeover, read from its manual on 31 October 2026, and then teaches the programming ideas that matter most: splitting a run into segments, stopping on sensor readings rather than guesses, and planning 60 seconds for points. One thing first: VEX IQ hardware now appears in two separate competition programs, and a team should know which one it is in.',
  secondaryCta: { href: '#segments', label: 'See the segment method' },
  wa: 'Hello Modern Age Coders, my child is on a VEX IQ robotics team in the US and wants help with coding the robot. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; students write their own code, always',
  spec: [
    ['Hardware', 'VEX IQ brain, motors and sensors'],
    ['RECF game', 'Engage: Tier Takeover'],
    ['Solo coding match', '60 seconds, no controller'],
    ['Solo attempts', 'Up to five per event, shared'],
    ['Ages', '12U and 15U, at May 6, 2027'],
    ['Motors', 'Up to 6 per robot'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'VEX IQ programming means writing the code a VEX IQ robot runs on its own. In the 2026 to 2027 RECF Engage game, Tier Takeover, a solo coding match lasts 60 seconds with no controller, and teams may split code into segments launched after a reset. Modern Age Coders teaches the coding behind it live online, in a batch or 1-on-1.',

  picks: {
    eyebrow: 'Learn with a teacher',
    h2: 'Courses for young robot programmers',
    lede: 'Block coding first, then Python, then the logic and planning a coded run depends on.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'VIP / 01', title: 'Coding for kids: blocks', note: 'Ages about 8 to 12. Sequences, events, loops and conditions.' },
      { course: 'python-ai-kids-masterclass', code: 'VIP / 02', title: 'Python for kids', note: 'Text code once blocks feel slow, with real projects.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'VIP / 03', title: 'Problem solving', note: 'Breaking a task into steps, the core of a coded run.' }
    ]
  },

  sections: [
    {
      id: 'programs', tint: 'tint', eyebrow: 'Two programs',
      h2: 'Which VEX IQ competition is my team in for 2026 to 2027?',
      lede: 'For this season VEX IQ robots appear in two separate programs: the VEX Robotics competitions, and the RECF Engage Robotics Competition run by the Robotics Education & Competition Foundation. They have different games, events and championships.',
      body: [
        { kind: 'table', caption: 'The two programs that use VEX IQ hardware in 2026 to 2027, as each source describes it (read 31 October 2026)', head: ['Point', 'RECF Engage Robotics Competition', 'VEX Robotics competitions'], rows: [
          ['Run by', 'The Robotics Education & Competition Foundation, a 501(c)(3) nonprofit', 'VEX Robotics, Inc.'],
          ['2026 to 2027 game', 'Tier Takeover', 'Not printed here: the VEX site refused our request'],
          ['Hardware', 'Specific VEX IQ, Hexbug and LEGO electronics and components', 'Not printed here'],
          ['Teams', 'Two or more students; 12U elementary and 15U middle school', 'Not printed here'],
          ['Championship', 'The 2027 RECF World Championship in St. Louis', 'The 2026 to 2027 VEX Robotics World Championship'],
          ['Relationship', 'The manual says Engage is not sponsored by, affiliated with or endorsed by VEX Robotics, Inc. or Innovation First, Inc.', 'RobotEvents states RECF events with VEX products will not qualify teams for the VEX Robotics World Championship']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Ask your coach one question',
          left: [
            'Ask: "Which program are we registered in, and where is our game manual?" RECF Engage teams register on RECFevents.org and read their manual on games.recf.org. Teams in VEX&rsquo;s own competition follow VEX&rsquo;s manual.',
            'The coding ideas on this page work in both, because they are about how to program a robot that runs alone. The rules quoted are from the RECF Engage manual only.'
          ],
          rightH3: 'Why the VEX side is thin here',
          right: [
            'When we tried to read vexrobotics.com, its knowledge base and its coding sites on 31 October 2026, every one returned an access-denied error. We do not work around blocks like that.',
            'So this page prints no VEX game name, VEX rule or VEXcode command. Check those directly on VEX&rsquo;s site, and use what follows for the programming method.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://recf.org/teams/recf-robotics-competition/" rel="noopener" target="_blank">RECF Robotics Competitions</a>, the <a class="ag-inline-link" href="https://games.recf.org/engage" rel="noopener" target="_blank">RECF Engage Tier Takeover game manual</a> and the <a class="ag-inline-link" href="https://www.robotevents.com/" rel="noopener" target="_blank">RobotEvents</a> notice, read 31 October 2026. VEX, VEX IQ and VEXcode are trademarks of Innovation First, Inc. We are not connected with RECF, VEX Robotics or Innovation First.' }
      ]
    },
    {
      id: 'solo', tint: 'deep', eyebrow: 'Solo coding',
      h2: 'How does a Tier Takeover solo coding match work?',
      lede: 'In a solo coding match a team has 60 seconds to score using only pre-written code, with up to three members at the field and no controller. Solo matches are not scheduled; each team gets up to five solo attempts per event, split between driving and coding as it likes.',
      body: [
        { kind: 'table', caption: 'Tier Takeover facts a programmer needs (RECF Engage 2026-2027 game manual, version 2.0, read 31 October 2026)', head: ['Rule', 'What the manual says'], rows: [
          ['Field', 'A 6 by 8 foot field; robots collect bean bags and place them in and on matching goals'],
          ['Match length', '60 seconds for solo driving, solo coding and alliance matches'],
          ['Solo attempts', 'Up to five per competition, shared between solo driving and solo coding'],
          ['Resets', 'In solo coding, a robot reset can be used as a strategy, with code in small segments each launched from the starting position'],
          ['Drive team', 'In solo coding, team members do not have to stay in the driver box'],
          ['Starting size', 'No larger than 11 inches wide, 20 inches long and 15 inches tall'],
          ['Motors', 'Up to 6 motors per robot'],
          ['Points', 'Floor goal 1, L1 5, L2 10, L3 25 per matching or yellow bean bag; L4 50 per yellow bean bag; a parked robot 25']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why solo coding deserves practice',
          left: [
            'The manual advises teams to complete at least one solo coding match at each event, because some awards consider a team&rsquo;s solo coding score. A team that only practices driving gives that away.',
            'Coding also changes how students think about the robot. A driver corrects mistakes by instinct; a programmer has to predict them, and that is where the real learning sits.'
          ],
          rightH3: 'The code must be the students&rsquo;',
          right: [
            'Rule 2.3.1 is clear: "Adults may teach coding concepts, but may not tell students what should or should not be included in their code." Our lessons follow that rule exactly: we teach ideas with our own practice robots and tasks, and students write their team&rsquo;s code.',
            'Coding libraries are allowed as a starting point, but the manual expects teams to change them, explain how their code works and credit outside sources in the engineering notebook.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://games.recf.org/engage" rel="noopener" target="_blank">RECF Engage 2026-2027 game manual</a> (version 2.0, September 29, 2026). The manual lists a major version 3.0 release for November 10, 2026, so check for later changes.' }
      ]
    },
    {
      id: 'segments', tint: 'tint', eyebrow: 'Segments',
      h2: 'How do you code a VEX IQ autonomous run in segments?',
      lede: 'Break the 60 seconds into short segments, each started from the starting position after a reset, as rule 4.1.2 allows. A short segment is easier to test, and when one fails the rest of the run is not lost.',
      body: [
        { kind: 'code', label: 'A three-segment solo coding run (our pseudocode)', lang: 'Pseudocode', code: SEGMENTS, note: 'Our own illustration, not a working program for any particular tool. The structure is the lesson: each segment is short, ends in a known state, and makes at least one decision from a sensor.' },
        { kind: 'ol', mt: true, items: [
          '<b>List the scoring actions.</b> Write every action the robot could do in a run, with the points it earns from the manual&rsquo;s table.',
          '<b>Time each one.</b> Drive each action by hand five times and write down the slowest time, not the fastest.',
          '<b>Group into segments.</b> Two or three actions that start from the same place belong in one segment.',
          '<b>End every segment in a known state.</b> Lift down, claw open, motors stopped, so the reset is quick.',
          '<b>Test one segment ten times.</b> Count how many of the ten score. Fix the worst segment first.',
          '<b>Practice the resets.</b> Time spent moving the robot back to the start is part of the 60 seconds, so team members rehearse it.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why segments beat one long program',
          left: [
            'A single 60-second program has one failure mode that ruins everything: an early miss leaves the robot in the wrong place for every later step. Segments contain the damage to one part of the run.',
            'Segments also make testing honest. A student can run segment B twenty times in ten minutes, which would take an hour if the whole program had to run first.'
          ],
          rightH3: 'Naming and comments',
          right: [
            'We ask students to name segments by what they do, such as <code>score_red_L2</code>, and to write one comment line per decision. Judges may ask how the code works, and a readable program is easier to explain.',
            'The same habits carry straight into school computer science later, which is part of why we teach them.'
          ] }
      ]
    },
    {
      id: 'sensors', tint: 'deep', eyebrow: 'Sensors',
      h2: 'Which sensors can a VEX IQ robot use, and how should code use them?',
      lede: 'The Engage manual lists the legal VEX IQ sensors: Color, Optical, Distance, Touch, Gyro, AI Vision and Vision. The programming idea that matters is to stop or decide on a reading, not on a fixed distance or time alone.',
      body: [
        { kind: 'table', caption: 'Legal VEX IQ sensors in RECF Engage (game manual, rule 2.2.4) and one coding use for each (uses are ours)', head: ['Sensor', 'One use in a coded run (our suggestion)'], rows: [
          ['Distance Sensor', 'Drive until the goal is a set distance away, then stop'],
          ['Optical Sensor', 'Check a bean bag&rsquo;s color before choosing a goal'],
          ['Color Sensor', 'Detect a colored line or tile edge on the field'],
          ['Touch Sensor (bumper)', 'Back up until the wall is touched, a reliable reset point'],
          ['Gyro Sensor', 'Turn to a heading instead of a guessed motor rotation'],
          ['AI Vision and Vision Sensors', 'Find a bean bag by color in front of the robot; added as legal parts in version 2.0']
        ] },
        { kind: 'p', mt: true, html: '<b>Worked example, a sensor checkpoint (ours).</b> Suppose a robot must stop 80 mm from a goal. Coded as "drive 600 mm", it stops wherever the wheels say 600 mm, which shifts if the start was a little off or a wheel slipped on a bean bag. Coded as "drive until the distance sensor reads under 80 mm", it stops in the same place relative to the goal every time, whatever happened before. The second version takes one more line and turns a near miss into a score.' },
        { kind: 'two', mt: true,
          leftH3: 'Teaching the idea without a robot',
          left: [
            'Students without a robot at home can still learn sensor logic. In our classes a student writes the same "repeat until" logic in a block coding game, where a sprite moves until it touches a colored edge.',
            'When they return to the team robot, the structure is already familiar, and only the sensor block changes.'
          ],
          rightH3: 'Checks before trusting a sensor',
          right: [
            'Print the sensor value on the brain&rsquo;s screen while moving the robot by hand. If the reading jumps around, the threshold in the code needs a margin.',
            'Test under the event&rsquo;s lighting where possible: optical and vision readings can change between a classroom and a gym.'
          ] }
      ]
    },
    {
      id: 'plan', tint: 'tint', eyebrow: 'Planning',
      h2: 'How do you plan a 60-second solo coding run for points?',
      lede: 'Divide each action&rsquo;s points by its time to find points per second, then fit the best actions into 60 seconds with time to spare. The timings below are invented for teaching; the point values are from the manual.',
      body: [
        { kind: 'table', caption: 'A points-per-second table for a made-up robot (point values from the Tier Takeover manual; timings and arithmetic ours)', head: ['Action', 'Points', 'Our assumed time', 'Points per second'], numCols: [1, 2, 3], rows: [
          ['Place a matching bean bag on L1', '5', '8 seconds', '0.63'],
          ['Place a matching bean bag on L2', '10', '14 seconds', '0.71'],
          ['Park in the load zone', '25', '6 seconds', '4.17']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Three plans that all score 60',
          left: [
            'With these timings we searched every combination in Python. Three plans reach 60 points: five L1 bags, one L2 bag and a park (60 seconds exactly); three L1, two L2 and a park (58 seconds); one L1, three L2 and a park (56 seconds).',
            'They score the same on paper, but they are not equal. The last one leaves 4 seconds spare, and a plan with no spare time fails on the first slow reset.'
          ],
          rightH3: 'What the table teaches',
          right: [
            'Parking is worth far more per second than any placement for this robot, so it goes in every plan, and the code for it should be the most reliable segment.',
            'For a real team the timings come from their own robot, measured as in the segment steps above. The method stays the same; the numbers are the team&rsquo;s.'
          ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Measure', p: 'Slowest of five timed attempts per action.' },
          { h3: 'Rank', p: 'Points per second, highest first.' },
          { h3: 'Fit', p: 'Fill 60 seconds, keep a few spare.' }
        ] }
      ]
    },
    {
      id: 'season', tint: 'deep', eyebrow: 'A season plan',
      h2: 'An eight-week coding plan for a VEX IQ club member',
      lede: 'Our plan for a student who meets their team weekly and adds one live coding lesson a week with us. It assumes the team has a working robot.',
      body: [
        { kind: 'table', caption: 'Eight weeks of coding practice (our plan)', head: ['Week', 'Lesson with us', 'Practice with the team'], rows: [
          ['1', 'Sequences and units: distance, degrees, time', 'Drive a square and measure the error'],
          ['2', 'Loops and repeat-until', 'Drive until a bumper press, ten times'],
          ['3', 'Conditions: if and else', 'Choose a goal from an optical reading'],
          ['4', 'Functions: one segment, one name', 'Split the run into segments'],
          ['5', 'Sensor thresholds and margins', 'Print readings; set safe thresholds'],
          ['6', 'Points per second', 'Time each action, build the table'],
          ['7', 'Debugging: one change at a time', 'Ten-run reliability counts per segment'],
          ['8', 'Explaining code to a judge', 'Notebook pages on how the code works']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Blocks or text?',
          left: [
            'Younger students in the 12U group often start with blocks, which let them think about order and logic without typing errors. Many move to text code in the 15U years.',
            'Our courses follow the same path: block coding first, then Python. The ideas, not the syntax, are what transfer to the robot.'
          ],
          rightH3: 'The engineering notebook',
          right: [
            'RECF Engage judges look at a notebook documenting the engineering design process. Coding belongs in it: the plan, the test counts and the changes made.',
            'We help students learn how to record that well. The notebook and the code remain the team&rsquo;s own work.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Readiness',
    h2: 'Four steps from driving the robot to coding it',
    lede: 'Many young robotics students can drive well long before they can code a run that scores. These are the steps between.',
    table: { caption: 'From driver to programmer (our steps)', head: ['Step', 'How it shows'], rows: [
      ['1. Sequencer', 'Writes a list of moves that runs start to finish'],
      ['2. Sensor user', 'Stops and decides on readings, not on fixed distances alone'],
      ['3. Segmenter', 'Splits a run into short named parts, each tested alone'],
      ['4. Planner', 'Chooses actions by points per second and keeps spare time']
    ] },
    left: { h3: 'For parents and coaches', ps: [
      'Ask your student to explain one segment out loud. If they can say what it does and why, they understand it; if not, the next lesson should start there.',
      'Under rule 2.3.1, adults teach concepts but do not decide what goes into the team&rsquo;s code. That is how we teach too.'
    ] },
    right: { h3: 'For students', ps: [
      'Count successes out of ten for every segment. A segment that scores seven times in ten is worth fixing before adding a new one.',
      'Keep the last working version of your code before every change. Going back is faster than guessing what broke.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine coding courses for robotics students',
    lede: 'Live online classes with one regular teacher, as a group or one to one.',
    bands: [
      { num: 'I', h3: 'First code', sub: 'Ages about 8 to 12', courses: [
        { code: 'VIP / KID / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Blocks, games and logic.' },
        { code: 'VIP / KID / 02', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Loops and events, deeply.' },
        { code: 'VIP / KID / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving', blurb: 'Steps and decomposition.' }
      ] },
      { num: 'II', h3: 'Text code', sub: 'Ages about 10 to 15', courses: [
        { code: 'VIP / TXT / 01', slug: 'python-ai-kids-masterclass', title: 'Python for kids', blurb: 'From blocks to Python.' },
        { code: 'VIP / TXT / 02', slug: 'cpp-programming-for-kids-course', title: 'C++ for kids', blurb: 'For future V5-level code.' },
        { code: 'VIP / TXT / 03', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Angles and distances in code.' }
      ] },
      { num: 'III', h3: 'Build and invent', sub: 'Beyond the robot', courses: [
        { code: 'VIP / MAK / 01', slug: 'game-development-masterclass-for-kids', title: 'Game development', blurb: 'Logic with instant feedback.' },
        { code: 'VIP / MAK / 02', slug: 'hackathon-prep-for-kids-coding-innovation-ai-projects-course', title: 'Hackathon prep', blurb: 'Project planning for kids.' },
        { code: 'VIP / MAK / 03', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'How vision and AI work.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live coding lessons between team practices',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school, before or after team meetings.' },
      { time: 'Weekends', l: 'A calm slot before Saturday events.' },
      { time: '1-on-1', l: 'Paced to one student&rsquo;s robot and role.' }
    ],
    cells: [
      { h3: 'Concepts only', p: 'We teach ideas; the team writes its code.' },
      { h3: 'Practice robots', p: 'Our own tasks, never the team&rsquo;s run.' },
      { h3: 'Ten-run counts', p: 'Reliability measured, not hoped for.' },
      { h3: 'Blocks to Python', p: 'One path, at each child&rsquo;s pace.' },
      { h3: 'Any state', p: 'Live online, coast to coast.' },
      { h3: 'Group size', p: 'Fifteen to twenty per batch, or one student.' }
    ]
  },

  projectsH2: 'Projects from our students',
  projectsLede: 'Games, apps and AI projects built by our learners. More in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents&rsquo; reviews from Google, as they wrote them.',

  fees: {
    h2: 'Fees',
    lede: 'Team registration and event fees go to the competition program; our fee is for coding lessons only. We bill monthly, so a student can take lessons through the season and pause after the last event.',
    free: ['A free first lesson', 'A short logic and sequencing check', 'No card details'],
    group: ['Fifteen to twenty students', 'One regular teacher', 'Choose your batch', 'Monthly'],
    one: ['A private coding teacher', 'Lessons around your season', 'Concepts matched to your robot type']
  },

  faq: {
    eyebrow: 'Questions from families and coaches',
    h2: 'VEX IQ coding: what families ask',
    items: [
      { q: 'What is the 2026-27 VEX IQ game?', a: 'It depends on the program. The RECF Engage Robotics Competition, which uses VEX IQ hardware, plays Tier Takeover in 2026 to 2027. VEX Robotics runs its own competitions with their own game; its site refused our request, so check vexrobotics.com directly.' },
      { q: 'How long is a VEX IQ solo coding match in Tier Takeover?', a: 'The RECF Engage manual gives 60 seconds, the same as solo driving and alliance matches. The robot runs on pre-written code with no controller.' },
      { q: 'Can you reset the robot during a solo coding match?', a: 'Yes, in RECF Engage. Rule 4.1.2 says a reset can be used as a strategy, so code can be split into small segments, each launched from the starting position after a reset.' },
      { q: 'How many solo coding attempts does a team get?', a: 'Up to five solo match attempts per competition, shared between solo driving and solo coding however the team likes. The manual advises doing at least one solo coding match, because some awards use that score.' },
      { q: 'Can a parent or tutor write the robot\'s code?', a: 'No. The RECF Engage manual says adults may teach coding concepts but may not tell students what should or should not be in their code. We teach concepts on our own practice tasks; students write their team\'s code.' },
      { q: 'Which sensors are legal on a VEX IQ robot in RECF Engage?', a: 'The manual lists the VEX IQ Color, Optical, Distance, Touch and Gyro sensors, plus the AI Vision and Vision sensors added in version 2.0. Some LEGO sensors are legal on LEGO-based robots.' },
      { q: 'What ages can compete in RECF Engage?', a: 'Students in the 12U elementary category must be 12 or younger on May 6, 2027, and in the 15U middle school category 15 or younger on May 6, 2027. Each team has two or more students.' },
      { q: 'Do RECF events qualify teams for the VEX Robotics World Championship?', a: 'No. RobotEvents states that RECF competitions involving VEX products are not sanctioned by VEX Robotics and will not qualify teams for the 2026 to 2027 VEX Robotics World Championship. RECF Engage leads to the RECF World Championship instead.' },
      { q: 'Should my child learn blocks or Python for VEX IQ?', a: 'Younger students often start with blocks and move to text code later. We teach block coding first, then Python, because the logic transfers to whichever tool the team uses.' },
      { q: 'When are your coding lessons?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you connected with VEX or RECF?', a: 'No. Modern Age Coders is independent and has no tie to VEX Robotics, Innovation First or the Robotics Education & Competition Foundation. VEX and VEX IQ are their owners\' trademarks.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for young coders and builders',
    lede: 'Competitions, coding classes and next steps.',
    items: [
      { href: '/us-coding-math-and-ai-competitions-calendar', label: 'US competitions calendar', p: 'Coding, math and AI contest dates for 2026 to 2027.' },
      { href: '/coding-classes-for-elementary-students', label: 'Coding for elementary students', p: 'First steps in code, grades K to 5.' },
      { href: '/coding-classes-for-middle-school-students', label: 'Coding for middle schoolers', p: 'Where 15U robotics students go next.' },
      { href: '/c-plus-plus-for-kids', label: 'C++ for kids', p: 'A first look at a compiled language.' },
      { href: '/acsl-competition-preparation', label: 'ACSL preparation', p: 'A computer science contest with no robot.' },
      { href: '/congressional-app-challenge-guide', label: 'Congressional App Challenge', p: 'Build an app instead of a robot.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Tell us your child&rsquo;s age, their robot&rsquo;s brain type and whether they code in blocks or text. The teacher runs a short logic and sequencing task and suggests where to begin.',
    readFirst: 'To see our teaching style, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or explore the <a class="ag-inline-link" href="/courses">full list of courses</a>.',
    note: 'Lessons are live video with teachers in India, booked at US after-school and weekend times. WhatsApp is usually the quickest way for families to reach us.',
    formNote: 'There is no charge for the first lesson and no card to enter.'
  },

  footer: {
    cols: [
      { h4: 'Competitions', links: [
        { href: '/us-coding-math-and-ai-competitions-calendar', label: 'Competitions calendar' },
        { href: '/acsl-competition-preparation', label: 'ACSL preparation' },
        { href: '/congressional-app-challenge-guide', label: 'Congressional App Challenge' },
        { href: '/math-competitions-for-middle-school-students', label: 'Middle school math contests' }
      ] },
      { h4: 'Coding by age', links: [
        { href: '/coding-classes-for-elementary-students', label: 'Elementary coding' },
        { href: '/coding-classes-for-middle-school-students', label: 'Middle school coding' },
        { href: '/app-inventor-for-kids', label: 'App Inventor for kids' },
        { href: '/coding-classes-in-united-states', label: 'All US pages' }
      ] }
    ],
    bottomRight: 'Stop on a reading, not a guess'
  },

  personalityCss: `
.ag-root.ag-vip .ag-hero h1 { letter-spacing: -0.018em; }
.ag-root.ag-vip .ag-capsule { border-left-width: 5px; border-radius: 6px; }
.ag-root.ag-vip .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-vip .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-vip .ag-steps li { line-height: 1.66; }
.ag-root.ag-vip .ag-slots { gap: 0.95rem; }
`,

  dossier: {
    curriculumAuthority: 'Read raw on 31 October 2026: the RECF Engage 2026-2027 game manual on games.recf.org (Tier Takeover, 6 by 8 foot field, five challenges, 60-second matches, five shared solo attempts, rule 4.1.2 reset strategy and segments, rule 2.3.1 adults teach concepts only, 2.3.2 libraries, 12U and 15U ages at May 6 2027, starting size, 6 motors, legal VEX IQ sensors including AI Vision added in v2.0, point values, release schedule with v3.0 on November 10 2026, non-affiliation statement); recf.org Robotics Competitions page (Engage teams and hardware, driver and coded matches) and news (2027 RECF World Championship in St. Louis); the RobotEvents notice (RECF not authorized to run VEX competitions; RECF events do not qualify for the 2026 to 2027 VEX Robotics World Championship). VEX and RECF legacy hosts returned 403.',
    localProject: 'Our points-per-second table for a made-up robot (0.63, 0.71 and 4.17 points per second), three 60-point plans found by brute force in Python (60, 58 and 56 seconds), three-segment pseudocode with sensor checkpoints, the distance-sensor worked example, an eight-week plan. Lesson family: segmented autonomous routines with sensor checkpoints.',
    requiredMentions: ['Tier Takeover', 'Adults may teach coding concepts, but may not tell students what should or should not be included in their code.', 'Up to five per competition, shared between solo driving and solo coding', 'No larger than 11 inches wide, 20 inches long and 15 inches tall', '12 or younger on May 6, 2027', 'will not qualify teams for the 2026 to 2027 VEX Robotics World Championship', 'The 2027 RECF World Championship in St. Louis', 'one L1, three L2 and a park (56 seconds)', 'drive until the distance sensor reads under 80 mm', 'Stop on a reading, not a guess', 'added as legal parts in version 2.0'],
    sources: [
      { claim: 'RECF Engage 2026-2027 Tier Takeover game manual: match types and lengths, solo attempts, reset strategy, coding rules, ages, robot limits, legal sensors, point values, release schedule, non-affiliation statement.', url: 'https://games.recf.org/engage' },
      { claim: 'RECF Robotics Competitions: Engage age groups, team size, VEX IQ, Hexbug and LEGO hardware, driver and coded matches.', url: 'https://recf.org/teams/recf-robotics-competition/' },
      { claim: 'RECF news: the 2027 RECF World Championship in St. Louis.', url: 'https://recf.org/about-us/news/' },
      { claim: 'RobotEvents notice: RECF not authorized to run VEX Robotics competitions; RECF events do not qualify for the 2026 to 2027 VEX Robotics World Championship.', url: 'https://www.robotevents.com/' }
    ],
    rejectedClaims: [
      'The 2026 to 2027 VEX IQ Robotics Competition game run by VEX Robotics, its rules and dates: vexrobotics.com and other VEX hosts returned HTTP 403 on 31 October 2026; not circumvented; not printed.',
      'VEXcode IQ languages (blocks, Python, C++) and command names: kb.vex.com, api.vex.com and codeiq.vex.com returned 403; the page uses its own labelled pseudocode and prints no VEXcode command.',
      'roboticseducation.org (the research row\'s owner URL) returned 403; recf.org was used instead.',
      'Full Tier Takeover scoring rules, field diagrams and penalties: summarized only; the manual is linked.',
      'Any account of why RECF and VEX separated: not given on the pages read; not speculated on.',
      'Event registration fees: not printed.',
      'Any affiliation with VEX Robotics, Innovation First or RECF: none, stated on the page.'
    ]
  }
};
