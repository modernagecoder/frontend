'use strict';
// Video game design for kids, Australia (ag- topic door; AU cluster Phase 2, row 13).
// Demand: our Search Console, Australia, 16 months: "video game design kids" 39 impressions at position 52.2,
// "video game designing for kids" 26 at 51.6.
// Intent: DESIGN before code: what makes a level fair and fun, how a new idea is introduced, playtesting with
// real players, user experience. Making and programming games are separate intents served by
// /game-development-for-kids-australia and /game-programming-course-australia, which this page links.
// Sources, read raw on 7 October 2026:
//  - ACARA, Australian Curriculum v9, Digital Technologies curriculum content F-6 and 7-10 (Word downloads):
//    AC9TDI6P03 "design a user interface for a digital system"; AC9TDI8P07 "design the user experience of a
//    digital system"; AC9TDI10P07 "design and prototype the user experience of a digital system".
//  - ACMI, About: "ACMI (the Australian Centre for the Moving Image)", located in "Naarm/Melbourne's Fed Square".
//  - ACMI, Game Worlds (past event, on until Sunday 29 March 2026): "Spanning over 50 years of play, Game Worlds
//    features more than 30 videogames from the 1970s to today, with 44 playable moments, original builds, rare
//    design materials and hands-on prototypes you won't find anywhere else."
//  - ACMI home page listing: Melbourne International Games Week 2026, Thursday 8 to Sunday 11 October 2026.
// Lesson family: level gating. One new mechanic per level, then combinations; with n mechanics there are
// 2 to the power of n, minus 1 non-empty combinations (3 gives 7, 4 gives 15, 5 gives 31), our arithmetic, which
// is why designers choose which combinations to teach instead of testing them all.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'guide', tag: 'VIDEO GAME DESIGN, KIDS', blurb: 'Video game design for Australian kids: levels, rules, fairness and playtesting first, then the code that brings a design to life.' },
  slug: 'video-game-design-for-kids-australia',
  code: 'vgau',
  accent: '#36570F',
  accentRationale: 'Video game design for kids, Australia: a deep moss green chosen by hand, muted, at least 12 RGB units from every accent in use and at least 40 from the other Phase 2 doors',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'Video game design for kids, Australia',
  title: 'Video Game Design for Kids in Australia | Levels and Playtesting',
  description: 'Video game design for kids in Australia: how to plan fair, fun levels, teach a new idea without words and playtest with real players. Live online, first class free.',
  ogDescription: 'Why the first level of a good game teaches without a single word of instructions, and how Australian kids learn to design levels, test them on real players and then build them.',
  twitterDescription: 'Video game design for Australian kids: levels, fairness and playtesting first, then the code. Live online, first class free.',
  pageName: 'Video Game Design for Kids in Australia',
  webPageDescription: 'A parent guide to video game design for Australian children: level design, introducing mechanics, playtesting and user experience, mapped to the Digital Technologies curriculum.',
  courseDescription: 'Live online game design and development for Australian kids: plan levels on paper, playtest with real players, then build them in Scratch, Roblox Studio or Python.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'Video game design for kids',
  navLinks: [
    { href: '#design', label: 'What design means' },
    { href: '#gating', label: 'A worked example' },
    { href: '#playtest', label: 'Playtesting' },
    { href: '#school', label: 'At school' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Ages 7 to 16 &middot; Design, then build',
  h1: 'Video game design for kids',
  lede: 'Ask a child what they want to make and the answer is usually enormous: an open world, twenty weapons, a boss that changes shape. Game design is the skill of turning that dream into something a stranger can pick up and enjoy in the first thirty seconds. It is about rules, choices, difficulty and fairness, and it can be practised with paper and a pencil before a single line of code exists. This page is for Australian parents whose child loves inventing games more than anything. It explains what video game design actually involves, works through one design idea in detail, shows how playtesting with real players changes a game, and links that work to what the Digital Technologies curriculum asks for at school.',
  secondaryCta: { href: '#gating', label: 'See a worked example' },
  wa: 'Hello Modern Age Coders, my child in Australia loves designing video games. Could we book a free first class?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; designs tested on real players, then built',
  spec: [
    ['For', 'Children and teens, 7 to 16'],
    ['First tool', 'Paper, then Scratch'],
    ['Later tools', 'Roblox Studio, Python, Godot'],
    ['Core skills', 'Rules, levels, feedback, fairness'],
    ['Habit', 'Test on real players'],
    ['Format', 'Live online lessons'],
    ['Group', 'Five to ten, or one to one'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Video game design for kids is planning how a game plays before or alongside building it: its goal, its rules, how each level introduces a new idea, how hard it gets and how a player knows what to do without being told. Children learn it by sketching levels on paper, testing them on real players and changing what does not work, then building the design in Scratch, Roblox Studio or Python. Modern Age Coders teaches design and code together, live online, and the first class is free.',

  picks: {
    eyebrow: 'Where designers start',
    h2: 'Three courses that turn designs into playable games',
    lede: 'Every one pairs a design habit with the code to build it.',
    items: [
      { course: 'game-development-masterclass-for-kids', code: 'VGAU / 01', title: 'Game Development for Kids', note: 'Ages 8 to 12. Designs drawn on paper first, then built in Scratch, Roblox and Minecraft.' },
      { course: 'creative-media-design-masterclass-teens', code: 'VGAU / 02', title: 'Creative Media Design for Teens', note: 'For teens who care how a game looks and feels: layout, colour and visual storytelling.' },
      { course: 'complete-game-development-masterclass-for-teens', code: 'VGAU / 03', title: 'Game Development for Teens', note: 'Ages 13 to 18. Designs built properly in Unity and C#, then tested and refined.' }
    ]
  },

  sections: [
    {
      id: 'design', tint: 'tint', eyebrow: 'What design means',
      h2: 'Design is the part of a game you cannot see',
      lede: 'Players notice art and music. What makes them keep playing is a set of decisions they never see written down. Those decisions are the designer\'s job.',
      body: [
        { kind: 'table', caption: 'The questions a game designer answers', head: ['Question', 'An example answer', 'What goes wrong if nobody asks'], rows: [
          ['What is the goal?', 'Reach the flag before the timer reaches zero', 'Players wander, unsure whether they are winning'],
          ['What can the player do?', 'Run, jump and push crates', 'Controls feel random, or some do nothing useful'],
          ['How does the player learn?', 'A safe first room where only jumping is needed', 'A wall of instructions nobody reads'],
          ['How hard is it, and when?', 'Gentle at first, a spike at the end of each world', 'Children quit on level two or get bored on level ten'],
          ['Is it fair?', 'Every danger can be seen before it hurts you', 'Players feel cheated and stop trusting the game'],
          ['How does it feel?', 'A sound and a small bounce when a coin is collected', 'Success goes unnoticed, so nothing feels rewarding']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why design suits children so well',
          left: [
            'Design needs imagination, empathy and judgement more than technical knowledge, so a seven-year-old can do real design work long before they can write much code.',
            'It also teaches a habit that matters far beyond games: imagining how someone else will experience what you made, and being willing to change it when they struggle.'
          ],
          rightH3: 'Why design is not enough on its own',
          right: [
            'A design that is never built is never tested. Many brilliant paper ideas turn out to be dull, confusing or impossible once real players touch them.',
            'That is why our lessons swing between the two: sketch, build a rough version, test, then redesign. Children who only design never learn what their ideas cost to make; children who only code often build games nobody enjoys.'
          ] }
      ]
    },
    {
      id: 'gating', tint: 'deep', eyebrow: 'A worked example',
      h2: 'Level gating: one new idea at a time',
      lede: 'Here is a single design idea worked through in full. It is one of the first things we teach, and it changes how children plan every game afterwards.',
      body: [
        { kind: 'p', html: 'A child is designing a platform game with three mechanics: jumping, moving platforms and spikes. Their first plan puts all three in level one, "so it is exciting". Testers fall onto spikes before they have learned to jump, cannot tell why they died and give up. The fix is called <strong>level gating</strong>: each level introduces exactly one new idea in a safe place, lets the player practise it, and only later combines ideas the player already knows.' },
        { kind: 'table', caption: 'The same three mechanics, ungated and gated', head: ['Level', 'Ungated plan', 'Gated plan'], rows: [
          ['1', 'Jumping, moving platforms and spikes, all at once', 'Jumping only, over gaps that cannot hurt you'],
          ['2', 'Harder versions of everything', 'Moving platforms only, with a soft floor underneath'],
          ['3', 'A boss', 'Spikes only, placed where the player can see them early'],
          ['4', 'Another boss', 'Jumping plus spikes: two ideas the player already owns'],
          ['5', 'More spikes', 'Moving platforms plus spikes'],
          ['6', 'The end', 'All three together, as the final test']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'The counting question', p: 'With three mechanics, how many different mixes could a level use? Three on their own, three pairs and one with all three: seven in total.' },
          { h3: 'The general rule', p: 'For n mechanics the count of non-empty mixes is 2 to the power of n, minus 1. Four mechanics give 15, five give 31 (our arithmetic). The list doubles with each new idea.' },
          { h3: 'The design lesson', p: 'No designer can build a level for every mix once a game has a handful of mechanics. They choose which mixes teach something and leave the rest out, deliberately.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Teaching without words',
          left: [
            'A well gated first level needs no instructions at all. If the only way forward is a small gap over a safe floor, the player will try jumping, and the game has taught them without a sentence of text.',
            'Children love discovering this, because it means their game can be played by a younger sibling who cannot yet read the instructions.'
          ],
          rightH3: 'What children do next',
          right: [
            'Older students extend the idea to difficulty: after introducing an idea, raise the challenge, then give a short easy stretch before the next new idea. They plan it as a simple chart before building anything.',
            'They also learn to cut. A mechanic that does not combine well with the others is usually better removed than kept for its own sake.'
          ] }
      ]
    },
    {
      id: 'playtest', tint: 'tint', eyebrow: 'Playtesting',
      h2: 'Watching someone else play your game',
      lede: 'The most important design tool costs nothing: another person playing your game while you stay silent and watch.',
      body: [
        { kind: 'table', caption: 'A simple playtest routine children can run at home', head: ['Step', 'What the designer does', 'Why it matters'], rows: [
          ['1. Stay quiet', 'Hands the game over with no explanation', 'Real players will not have the designer beside them'],
          ['2. Watch hands and face', 'Notes where the player hesitates, frowns or laughs', 'Confusion shows long before a player says anything'],
          ['3. Count', 'Writes down how many tries each level takes', 'Turns "it feels hard" into something you can compare'],
          ['4. Ask one question', 'Asks "what were you trying to do there?"', 'Reveals whether the player understood the goal'],
          ['5. Change one thing', 'Fixes the biggest problem only, then tests again', 'Changing everything at once hides what helped']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Who to test with',
          left: [
            'Siblings, cousins, friends from school and classmates in a lesson all make good testers. The most useful are people who have not watched the game being made.',
            'In our group lessons, students regularly play each other\'s games and report back, which gives every young designer honest testers of their own age.'
          ],
          rightH3: 'Taking criticism well',
          right: [
            'The hardest part of playtesting for a child is hearing that their favourite level is confusing. We teach them to treat it as information about the game, not a judgement of themselves.',
            'A useful rule is to believe what testers do and be more careful with what they suggest. If three players miss the same door, the door needs fixing; how to fix it is still the designer\'s call.'
          ] }
      ]
    },
    {
      id: 'school', tint: 'deep', eyebrow: 'At school and beyond',
      h2: 'Game design and the Digital Technologies curriculum',
      lede: 'Game design is not just a hobby that happens to involve computers. The Australian Curriculum v9 asks students to design interfaces and user experiences, which is exactly what level design is.',
      body: [
        { kind: 'table', caption: 'Design content descriptions that game design practises', head: ['Band', 'Code', 'Content description, as published'], rows: [
          ['Years 5 and 6', 'AC9TDI6P03', '"design a user interface for a digital system"'],
          ['Years 7 and 8', 'AC9TDI8P07', '"design the user experience of a digital system"'],
          ['Years 9 and 10', 'AC9TDI10P07', '"design and prototype the user experience of a digital system"']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Games as culture, in Australia',
          left: [
            'Melbourne\'s ACMI, "the Australian Centre for the Moving Image" in Fed Square, treats videogames as part of screen culture alongside film and television. Its Game Worlds exhibition, which closed on 29 March 2026, featured "more than 30 videogames from the 1970s to today, with 44 playable moments, original builds, rare design materials and hands-on prototypes".',
            'Rare design materials and prototypes are exactly what children make in a design lesson: sketches, paper levels and rough first versions. Seeing that professionals work the same way is a powerful message.'
          ],
          rightH3: 'Events to look out for',
          right: [
            'ACMI listed Melbourne International Games Week 2026 for Thursday 8 to Sunday 11 October 2026. Check the organisers\' own pages for what is open to families and young people before you go.',
            'Children who enjoy competitions can find coding and design events in our <a class="ag-inline-link" href="/australian-coding-maths-and-ai-competitions-calendar">Australian competitions calendar</a>.'
          ] },
        { kind: 'source', html: 'Sources, read 7 October 2026: ACARA, Australian Curriculum Version 9.0, Digital Technologies content for <a class="ag-inline-link" href="https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-f-6-v9.docx" rel="noopener" target="_blank">Foundation to Year 6</a> and <a class="ag-inline-link" href="https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx" rel="noopener" target="_blank">Years 7 to 10</a>; ACMI <a class="ag-inline-link" href="https://www.acmi.net.au/about/" rel="noopener" target="_blank">About</a> and <a class="ag-inline-link" href="https://www.acmi.net.au/whats-on/game-worlds/" rel="noopener" target="_blank">Game Worlds</a> pages, and the ACMI home page event listing. We are not connected to ACMI.' }
      ]
    },
    {
      id: 'next', tint: '', eyebrow: 'From design to code',
      h2: 'Turning a paper design into a playable game',
      lede: 'Designs are tested best when they can be played. Here is how a child moves from sketch to working game.',
      body: [
        { kind: 'table', caption: 'From paper to playable, by age', head: ['Age', 'Design work', 'Building tool'], rows: [
          ['7 to 9', 'Draw one level on squared paper and play it with counters', 'Scratch, with a teacher\'s help'],
          ['9 to 12', 'Plan a world of four gated levels and a difficulty chart', 'Scratch on their own, or Roblox Studio'],
          ['12 to 14', 'Write a one-page design document and run playtests', 'Python with Pygame, or Roblox Studio'],
          ['14 to 16', 'Design systems such as scoring, saving and progression', 'Godot or Unity']
        ] },
        { kind: 'p', mt: true, html: 'For the building side in detail, see <a class="ag-inline-link" href="/game-development-for-kids-australia">game development for kids in Australia</a>. Teens and adults who want the programming underneath, including physics and timing, should look at our <a class="ag-inline-link" href="/game-programming-course-australia">game programming course</a>. Children who are still at the stage of solving puzzle games will enjoy <a class="ag-inline-link" href="/coding-games-for-kids-australia">coding games for kids</a> first.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Growth',
    h2: 'Four stages of a young game designer',
    lede: 'Children move through these at their own pace. Most reach the third stage in a year of weekly lessons.',
    table: { caption: 'From dreamer to designer', head: ['Stage', 'What your child can do'], rows: [
      ['1. Dream', 'Describe a game idea with a clear goal and one main action'],
      ['2. Sketch', 'Draw a level that teaches one new idea without written instructions'],
      ['3. Test', 'Run a quiet playtest, count tries and change one thing at a time'],
      ['4. Shape', 'Plan a whole game\'s difficulty and cut ideas that do not earn their place']
    ] },
    left: { h3: 'Does my child need to code to design games?', ps: [
      'Not at first. Younger children can do real design work on paper and with simple tools.',
      'Learning to build designs soon matters, though, because building and testing is how a designer finds out whether an idea works.'
    ] },
    right: { h3: 'What if my child only wants to make huge games?', ps: [
      'Almost every young designer does. We keep the dream and shrink the first version until it can be finished in a few weeks.',
      'Finishing a small game teaches more than starting ten large ones, and the big dream becomes the long-term project.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Courses for young game designers',
    lede: 'Grouped by age. The free class decides which band fits your child right now.',
    bands: [
      { num: 'I', h3: 'Design and build', sub: 'Ages 7 to 12', courses: [
        { code: 'VGAU / DB / 01', slug: 'game-development-masterclass-for-kids', title: 'Game Development for Kids', blurb: 'Plan, then build in Scratch, Roblox and Minecraft.' },
        { code: 'VGAU / DB / 02', slug: 'scratch-programming-complete-course', title: 'Scratch Coding for Kids', blurb: 'The quickest way to test a paper design.' },
        { code: 'VGAU / DB / 03', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Vibe Coding for Kids', blurb: 'Games built with AI help, understood step by step.' }
      ] },
      { num: 'II', h3: 'Worlds', sub: 'Ages 8 to 14', courses: [
        { code: 'VGAU / WD / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox Game Coding for Kids', blurb: 'Design spaces other people can explore.' },
        { code: 'VGAU / WD / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft Coding for Kids', blurb: 'Build and script inside a familiar world.' },
        { code: 'VGAU / WD / 03', slug: 'creative-media-design-masterclass-teens', title: 'Creative Media Design for Teens', blurb: 'The look and feel of a game, done well.' }
      ] },
      { num: 'III', h3: 'Serious games', sub: 'Ages 13 to 16', courses: [
        { code: 'VGAU / SG / 01', slug: 'complete-game-development-masterclass-for-teens', title: 'Game Development for Teens', blurb: 'Unity and C# for real, finished games.' },
        { code: 'VGAU / SG / 02', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'Typed code to build designs with Pygame.' },
        { code: 'VGAU / SG / 03', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for Teens', blurb: 'Browser games anyone can play from a link.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Design lessons in Australian time',
    lede: 'Our teachers are based in India. While daylight saving runs, Sydney and Melbourne sit five and a half hours ahead of India time and Perth two and a half, so a lesson after school in Australia lands in the Indian afternoon.',
    slots: [
      { time: 'Weekday afternoon', l: 'Right after school, for younger designers.' },
      { time: 'Saturday', l: 'Longer sessions for building and testing.' },
      { time: 'Sunday', l: 'For families with busy weekdays.' }
    ],
    cells: [
      { h3: 'First class free', p: 'Your child sketches and tests a tiny level with a teacher. No card is asked for.' },
      { h3: 'Testers included', p: 'In groups of fifteen to twenty, classmates playtest each other\'s games every few weeks.' },
      { h3: 'Private option', p: 'One-to-one lessons for a child with one big game to plan and build.' },
      { h3: 'Their ideas', p: 'Teachers question and suggest; the design decisions stay with the child.' },
      { h3: 'Paper welcome', p: 'Squared paper and coloured pencils are real tools in our lessons, not a break from them.' },
      { h3: 'Parents can play', p: 'Finished games can be played at home, and parents make excellent testers.' }
    ]
  },

  projectsH2: 'Projects built by our students',
  projectsLede: 'A selection of games and apps our students designed, built and published. The <a class="ag-inline-link" href="/student-labs">student labs</a> hold many more.',
  reviewsLede: 'Reproduced as written by families on our Google profile.',

  fees: {
    h2: 'Fees for game design lessons',
    lede: 'Families outside India are charged a single monthly fee in US dollars. No enrolment fee, no term lock-in: you can stop after any month.',
    free: ['A tiny level designed and tested together', 'Advice on the right course for your child', 'No card or bank details'],
    group: ['Five to ten young designers per class', 'Regular peer playtesting', 'The same teacher week to week', 'Stop after any month'],
    one: ['Lessons shaped around your child\'s own game', 'Flexible pace and focus', 'Times arranged around school and sport']
  },

  faq: {
    eyebrow: 'Parents ask',
    h2: 'What Australian parents ask about game design for kids',
    items: [
      { q: 'What is video game design for kids?', a: 'It is planning how a game plays: its goal, rules, levels, difficulty and feedback, so that someone else can enjoy it. Children practise it on paper and in simple tools, then build and test their designs.' },
      { q: 'What is level gating in game design?', a: 'It is introducing one new idea per level in a safe place, letting the player practise it, and only combining ideas the player already knows later on. It lets a game teach itself without written instructions.' },
      { q: 'Is game design different from game development?', a: 'Design decides how a game should play; development builds it. They overlap constantly, and children learn most by doing both: designing, building a rough version, testing and redesigning.' },
      { q: 'What age can my child start learning game design?', a: 'From about seven, using paper levels and Scratch. Design needs imagination and empathy more than technical skill, so it suits younger children well.' },
      { q: 'Does game design count for anything at school?', a: 'It practises the design strand of the Australian Curriculum v9 Digital Technologies, which asks students to design user interfaces and user experiences from Years 5 and 6 onwards.' },
      { q: 'How do I help my child playtest at home?', a: 'Play their game without asking for help while they watch quietly, count how many tries each level takes, and answer honestly when they ask what you were trying to do.' },
      { q: 'Will my child just play games in lessons?', a: 'No. Lessons are for sketching, building, testing and fixing. Playing each other\'s games is a short, structured part of testing.' },
      { q: 'Which tools will my child use?', a: 'Paper first, then Scratch for younger children, Roblox Studio or Python for older ones, and Godot or Unity for teens. The tool follows the design, not the other way round.' },
      { q: 'Can my child design without a powerful computer?', a: 'Yes. Paper design needs no computer, and Scratch runs in a normal browser. We check your computer before recommending a heavier engine.' },
      { q: 'What does it cost?', a: 'The first class is free with no card required. Monthly fees for group and one-to-one lessons are shown in the fees section of this page.' }
    ]
  },

  elsewhere: {
    eyebrow: 'More on this site',
    h2: 'Related pages',
    lede: 'Other ways into games, and our wider Australian pages.',
    items: [
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'Our full set of Australian guides.' },
      { href: '/game-development-for-kids-australia', label: 'Game development for kids', p: 'Building games from Scratch to an engine.' },
      { href: '/game-programming-course-australia', label: 'Game programming course', p: 'The code under games, for teens and adults.' },
      { href: '/coding-games-for-kids-australia', label: 'Coding games for kids', p: 'Puzzles that teach programming ideas.' },
      { href: '/roblox-coding-classes-australia', label: 'Roblox coding classes', p: 'Designing and scripting Roblox experiences.' },
      { href: '/blog/30-plus-scratch-project-ideas-kids-fun-coding-beginner-advanced', label: 'Scratch project ideas', p: 'Ideas to design and build next.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Send us your details and we will phone when it suits you. In the free class your child designs and tests a tiny level with a teacher, and you hear clearly which course fits.',
    readFirst: 'Before booking, you can see <a class="ag-inline-link" href="/how-we-teach">how a lesson is taught</a> or browse <a class="ag-inline-link" href="/courses">all our courses by age</a>.',
    note: 'WhatsApp from an Australian number usually gets the fastest reply. We work from India, which is why our number begins +91; we have no Australian office.',
    formNote: 'Free, no card, no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Games', links: [
        { href: '/game-development-for-kids-australia', label: 'Game development for kids' },
        { href: '/game-programming-course-australia', label: 'Game programming course' },
        { href: '/coding-games-for-kids-australia', label: 'Coding games for kids' },
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch classes' }
      ] },
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/online-coding-classes-for-kids-australia', label: 'Online coding for kids' },
        { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'A good first level needs no instructions'
  },

  personalityCss: `
.ag-root.ag-vgau .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-vgau .ag-capsule { border-left-width: 7px; border-radius: 3px; }
.ag-root.ag-vgau .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-vgau .ag-table caption { text-align: left; font-weight: 560; }
.ag-root.ag-vgau .ag-band-head h3 { letter-spacing: 0.01em; }
.ag-root.ag-vgau .ag-slots { gap: 0.9rem; }
`,

  dossier: {
    curriculumAuthority: 'Australia, Years 5 to 10. ACARA, Australian Curriculum v9, Technologies: Digital Technologies curriculum content F-6 and 7-10 (Word downloads): AC9TDI6P03 "design a user interface for a digital system"; AC9TDI8P07 "design the user experience of a digital system"; AC9TDI10P07 "design and prototype the user experience of a digital system".',
    localProject: 'Level gating for a platformer with three mechanics (jumping, moving platforms, spikes): a six-level gated plan that introduces each mechanic alone before combining them; with n mechanics there are 2 to the power of n, minus 1 non-empty combinations (3 gives 7, 4 gives 15, 5 gives 31), our arithmetic. Australian anchor: ACMI, Melbourne, and its Game Worlds exhibition. Lesson family: level gating.',
    requiredMentions: ['AC9TDI6P03', 'AC9TDI8P07', 'AC9TDI10P07', 'level gating', 'Game Worlds', '44 playable moments', 'Melbourne International Games Week 2026', 'Australian Centre for the Moving Image', '2 to the power of n, minus 1'],
    sources: [
      { claim: 'ACARA, Australian Curriculum v9, Digital Technologies curriculum content F-6: AC9TDI6P03.', url: 'https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-f-6-v9.docx' },
      { claim: 'ACARA, Australian Curriculum v9, Digital Technologies curriculum content 7-10: AC9TDI8P07 and AC9TDI10P07.', url: 'https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx' },
      { claim: 'ACMI, About: "ACMI (the Australian Centre for the Moving Image)", located in Naarm/Melbourne\'s Fed Square.', url: 'https://www.acmi.net.au/about/' },
      { claim: 'ACMI, Game Worlds (on until Sun 29 Mar 2026): "Spanning over 50 years of play, Game Worlds features more than 30 videogames from the 1970s to today, with 44 playable moments, original builds, rare design materials and hands-on prototypes you won\'t find anywhere else."', url: 'https://www.acmi.net.au/whats-on/game-worlds/' },
      { claim: 'ACMI home page event listing: Melbourne International Games Week 2026, Thu 8 Oct to Sun 11 Oct 2026.', url: 'https://www.acmi.net.au/' }
    ],
    rejectedClaims: [
      'Named commercial game examples used as design case studies: not verified at a primary source, so the worked example is our own.',
      'Melbourne International Games Week family or youth programme details: not read at the organiser, so the page sends readers to the organisers.',
      'Any figure for how many children play video games in Australia: no primary source read raw, so none used.',
      'Claims that game design improves school results: no evidence read; not made.',
      'Promised evening lesson hours: the hour is agreed in the free class (spec decision 7).'
    ]
  }
};
