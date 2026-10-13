'use strict';
// Coding classes for teens, Australia (ag- age and career door; AU cluster Phase 9, row 351).
// Intent: Australian teenagers (13 to 18) and parents looking for coding classes in general: text languages,
// projects, testing and the road to senior computing subjects. AI for teens is ai-classes-for-teens-australia (linked);
// Year 7 is coding-for-year-7-australia; 11 and 12 year olds have their own page. Kept AI out of the centre.
// Sources, read raw on 13 October 2026 (curl, default agent):
//  - ACARA, Australian Curriculum v9, Digital Technologies 7-10 (.docx), Years 9-10: band description "applying
//    computational thinking by defining and decomposing real-world problems, creating user experiences, designing and
//    modifying algorithms"; AC9TDI10P06 "validate algorithms and programs by comparing their output against a range of
//    test cases", elaborations "determining boundary test cases and testing that they are handled correctly by a
//    program" and "identifying that a loop has finished one iteration too early"; AC9TDI10P09 elaboration "using the
//    codebase of an existing adventure game and building new characters, levels or abilities"; AC9TDI10P12
//    elaboration "a collaborative version control tool such as GitHub"; AC9TDI10P05 elaboration "fixing a bug in an
//    algorithm to detect if 2 shapes intersect when the shapes just touch".
//  - Anthropic, Consumer Terms (re-read raw 13 October 2026): "You must be at least 18 years old or the minimum age
//    required to consent to use the Services in your location, whichever is higher."
// Lesson family: first-click safety in a mine-finding grid game. Our simulation (Python, seed 20261013, 200,000 boards
// of 9 by 9 with 10 mines, first click at the centre): first click hits a mine on 12.41% of naive boards (exact
// 12.35%); "move the mine to the first free cell" puts a mine in the top-left corner on 23.32% of boards (others
// 12.17% to 13.69%); moving it to a random free cell 12.48%; regenerating until safe 12.49% with 1.143 tries on
// average (expected 1.141). The simplest correct method, regenerate, wins. The game is described generically.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: {
    group: 'guide',
    tag: 'TEENS',
    blurb: 'Coding classes for Australian teens from 13 to 18: text languages, real projects, testing habits and a clear road to senior computing.'
  },
  slug: 'coding-classes-for-teens-australia',
  code: 'ctns',
  accent: '#103B63',
  accentRationale: 'Coding classes for teens, Australia: a deep muted navy computed for the national doors, at least 20 RGB from every national AU accent, at least 10 from every AU accent and 6 from every colour in use',
  pageType: 'market',
  market: {
    name: 'Australia',
    iso: 'AU',
    dial: '+61',
    lang: 'en-AU',
    locale: 'en_AU',
    geoRegion: 'AU',
    brandTag: 'AU',
    phoneLabel: 'Australian mobile number',
    phonePlaceholder: '491 570 156',
    gradeLabel: 'Year level or age',
    minDigits: 9,
    stripTrunk: true
  },
  routeLabel: 'Coding classes for teens, Australia',
  title: 'Coding Classes for Teens in Australia | Ages 13 to 18, Online',
  description: 'Coding classes for teens in Australia, ages 13 to 18: Python, JavaScript and Java through real projects, with testing built in. Live online, first class free.',
  ogDescription: 'One innocent-looking fix put a mine in the corner on 23% of boards. How our teen coding classes teach testing through a game every teenager knows.',
  twitterDescription: 'Coding classes for Australian teens: real projects, tests that catch real bugs, and a route into senior computing. First class free.',
  pageName: 'Coding Classes for Teens in Australia',
  webPageDescription: 'A guide to coding classes for Australian teenagers: what Years 9 and 10 Digital Technologies expects, a worked game-logic example with a simulation, language paths and school rules.',
  courseDescription: 'Live online coding classes for Australian teenagers aged 13 to 18: Python, JavaScript, Java and C++, taught through projects with testing and version control.',
  crumbs: [
    { name: 'Courses', href: '/courses' },
    { name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }
  ],
  crumbLabel: 'Coding classes for teens',
  navLinks: [
    { href: '#years', label: 'Years 9 and 10' },
    { href: '#board', label: 'A worked example' },
    { href: '#paths', label: 'Language paths' },
    { href: '#tools', label: 'Tools and rules' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Ages 13 to 18 &middot; Projects, tests, real code',
  h1: 'Coding classes for teens',
  lede: 'By thirteen, many Australian students have outgrown block coding and want to write the real thing: games with proper logic, websites that do something, programs that solve problems they care about. Our live online coding classes for teens aged 13 to 18 teach text languages through projects, and they treat testing as part of programming rather than an afterthought. That matches what the Australian Curriculum asks of Years 9 and 10, and it is the habit senior computing subjects reward. This page sets out what those years expect, works through a small bug in a classic grid game with a simulation of 200,000 boards, maps the language paths that suit different starting points, and explains the tools and rules we follow with under-18s.',
  secondaryCta: { href: '#board', label: 'See the worked example' },
  wa: 'Hello Modern Age Coders, I am a teenager (or parent of one) in Australia interested in coding classes. Could we book a free first class?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; teenagers write, test and explain their own code',
  spec: [
    ['For', 'Teens aged 13 to 18'],
    ['Languages', 'Python, JavaScript, Java, C++'],
    ['Method', 'Projects with tests'],
    ['Habits', 'Version control, debugging'],
    ['School', 'Never writes assessed work'],
    ['Format', 'Live online lessons'],
    ['Group', 'Fifteen to twenty, or one to one'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Coding classes for teens teach 13 to 18 year olds to program in text languages such as Python, JavaScript and Java by building projects, testing them and fixing what breaks. The Australian Curriculum asks Years 9 and 10 students to validate programs against a range of test cases, including boundary cases. Modern Age Coders runs live online coding classes for Australian teenagers, in small groups or one to one, starting with a free first class.',
  picks: {
    eyebrow: 'Start here',
    h2: 'Three first courses for teenage coders',
    lede: 'Python for most beginners, JavaScript for those drawn to the web and games in the browser, Java for teens ready for strict types. Each card leads to the full syllabus.',
    items: [
      {
        course: 'python-complete-masterclass-teens',
        code: 'CTNS / 01',
        title: 'Python for Teens',
        note: 'Beginner to advanced: logic, data, files and projects, with tests from the first month.'
      },
      {
        course: 'javascript-course-for-teens-beginners-interactive-web',
        code: 'CTNS / 02',
        title: 'JavaScript for Teens',
        note: 'Interactive websites and browser games, built and debugged in the browser.'
      },
      {
        course: 'java-programming-masterclass-for-teens',
        code: 'CTNS / 03',
        title: 'Java for Teens',
        note: 'Classes, objects and collections for teens ready for a strongly typed language.'
      }
    ]
  },
  sections: [
    {
      id: 'years',
      tint: 'tint',
      eyebrow: 'Years 9 and 10',
      h2: 'What the Australian Curriculum asks of teenage coders',
      lede: 'Digital Technologies in Years 9 and 10 expects more than writing code that runs once. It expects code that has been tested, changed and explained.',
      body: [
        {
          kind: 'table',
          caption: 'Years 9 and 10 Digital Technologies, Version 9.0 (read 13 October 2026)',
          head: ['Code', 'What ACARA writes', 'What it looks like in a lesson'],
          rows: [
            [
              'Band description',
              'Students apply computational thinking by "defining and decomposing real-world problems, creating user experiences, designing and modifying algorithms"',
              'Projects start with a problem statement, not a tutorial'
            ],
            [
              'AC9TDI10P06',
              '"validate algorithms and programs by comparing their output against a range of test cases"',
              'Every project has a test list written before the code'
            ],
            [
              'AC9TDI10P06',
              '"determining boundary test cases and testing that they are handled correctly by a program"',
              'Edges, corners and empty inputs tested on purpose'
            ],
            [
              'AC9TDI10P05',
              '"fixing a bug in an algorithm to detect if 2 shapes intersect when the shapes just touch"',
              'Collision and overlap bugs in games'
            ],
            [
              'AC9TDI10P09',
              '"using the codebase of an existing adventure game and building new characters, levels or abilities"',
              'Reading and extending code someone else wrote'
            ],
            [
              'AC9TDI10P12',
              'Sharing code with "a collaborative version control tool such as GitHub"',
              'Commits, branches and reviews in team projects'
            ]
          ]
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'Why testing is the heart of it',
          left: [
            'One elaboration describes "identifying that a loop has finished one iteration too early". Off-by-one errors like that are the most common bug teenagers write, and the most satisfying to catch with a test.',
            'Students who test from the start progress faster, because they spend less time staring at code that "should work".'
          ],
          rightH3: 'Where this leads',
          right: [
            'Senior computing subjects in each state build directly on these habits. Our guide to <a class="ag-inline-link" href="/choosing-year-11-computing-subjects-australia">Year 11 computing subjects</a> compares them, and NSW students can read about <a class="ag-inline-link" href="/hsc-software-engineering-help">HSC Software Engineering</a>.',
            'Teens interested in competitions can start with the <a class="ag-inline-link" href="/australian-informatics-olympiad-preparation">Australian Informatics Olympiad</a> page.'
          ]
        },
        {
          kind: 'source',
          html: 'Source: ACARA, Australian Curriculum Version 9.0, <a class="ag-inline-link" href="https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx" rel="noopener" target="_blank">Digital Technologies curriculum content, Years 7 to 10</a>, read 13 October 2026.'
        }
      ]
    },
    {
      id: 'board',
      tint: 'deep',
      eyebrow: 'A worked example',
      h2: 'The first click that should never lose',
      lede: 'In the classic mine-finding grid game, the first click should always be safe. Teenagers love building this game, and the first-click rule hides a lesson about fairness that only a simulation reveals.',
      body: [
        {
          kind: 'p',
          html: 'On a 9 by 9 board with 10 hidden mines, a random layout puts a mine under the first click 10 times in 81, about 12.35%. Our students\' first fix is usually: <em>if the first click lands on a mine, move that mine to the first empty square</em>, scanning from the top-left. It works; nobody loses on click one. But is the board still fair? We simulated 200,000 boards for three fixes, with the first click in the centre, and counted how often each square held a mine.'
        },
        {
          kind: 'table',
          caption: 'How often a mine sits in each square, 200,000 simulated boards per method (our calculation)',
          head: ['Method', 'Top-left corner', 'Every other square', 'First click hits a mine'],
          numCols: [
            1,
            2
          ],
          rows: [
            ['No fix (random layout)', 'about 12.35% everywhere', 'about 12.35%', '12.41% of boards'],
            ['Move the mine to the first empty square', '23.32%', '12.17% to 13.69%', 'Never'],
            ['Move the mine to a random empty square', '12.48%', '12.33% to 12.64%', 'Never'],
            ['Throw the board away and deal again', '12.49%', '12.34% to 12.71%', 'Never']
          ]
        },
        {
          kind: 'three',
          mt: true,
          cells: [
            {
              h3: 'The hidden bias',
              p: 'The first-empty-square fix nearly doubles the chance of a mine in the top-left corner, to 23.32% against the fair 12.5%. A player who learns that trick wins more often than the game intends, and the code passes every "does it crash?" test.'
            },
            {
              h3: 'Two fair fixes',
              p: 'Moving the mine to a random empty square, or dealing a whole new board, both give every square close to 12.5%. The differences left are the normal wobble of random sampling.'
            },
            {
              h3: 'The simple one wins',
              p: 'Dealing again sounds wasteful, but it needed only 1.143 attempts on average (theory says 1.141). It is the shortest code, obviously fair and fast enough. The clever fix was the one with the bug.'
            }
          ]
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'Boundary cases, as ACARA asks',
          left: [
            'The same game is full of edges. A corner square has 3 neighbours, an edge square 5 and an inside square 8. Most first versions of the neighbour count crash or miscount on the edges.',
            'Students write a test for each of the three cases before writing the counting code, exactly the boundary testing the curriculum describes.'
          ],
          rightH3: 'What the project teaches',
          right: [
            'Two-dimensional lists, loops, random sampling, recursion for opening empty areas, and the idea that "it works" and "it is fair" are different tests.',
            'It also teaches a habit worth more than any of those: when a result matters, measure it rather than trust it.'
          ]
        },
        {
          kind: 'p',
          mt: true,
          html: 'The simulation is ours, written in Python with a fixed seed, and short enough to rebuild in a lesson. Running it again with another seed moves the percentages by a few hundredths, not the conclusion.'
        }
      ]
    },
    {
      id: 'paths',
      tint: 'tint',
      eyebrow: 'Language paths',
      h2: 'Which language should a teenager learn?',
      lede: 'It depends on where they start and what they want to make. There is no wrong first text language; there are better and worse fits.',
      body: [
        {
          kind: 'table',
          caption: 'Common starting points and the paths we suggest',
          head: ['Starting point', 'First language', 'Then', 'Typical projects'],
          rows: [
            ['Some Scratch, no text coding', 'Python', 'JavaScript or Java', 'Text adventures, quizzes, simple games'],
            ['Wants to make websites', 'HTML, CSS and JavaScript', 'React', 'Personal sites, browser games'],
            ['Enjoys maths and puzzles', 'Python', 'C++', 'Competition problems, simulations'],
            ['Wants to make big games', 'C# or JavaScript', 'A game engine', 'Platformers, top-down games'],
            ['Already writes some Python', 'Java or C++', 'Data structures', 'Larger programs with classes']
          ]
        },
        {
          kind: 'p',
          mt: true,
          html: 'Teens drawn to artificial intelligence have their own page on <a class="ag-inline-link" href="/ai-classes-for-teens-australia">AI classes for teens</a>, and game makers will find more on the <a class="ag-inline-link" href="/game-programming-course-australia">game programming course</a>. Our <a class="ag-inline-link" href="/java-classes-online-australia">Java classes</a> page explains when Java is worth choosing.'
        }
      ]
    },
    {
      id: 'tools',
      tint: 'deep',
      eyebrow: 'Tools and rules',
      h2: 'The tools teenagers use with us, and the age rules we follow',
      lede: 'Everything a teenager needs for coding is free. The rules about which online services they may use come from the services themselves.',
      body: [
        {
          kind: 'two',
          leftH3: 'What students install',
          left: [
            'A code editor, the language itself and, from around the second term, a version control tool. All are free and run on ordinary Windows, Mac or Linux computers.',
            'We help families set everything up in the first lessons, with no accounts needed for the core tools.'
          ],
          rightH3: 'Age rules, followed exactly',
          right: [
            'Some online services set minimum ages above 13. Anthropic\'s consumer terms, for example, set 18, so students under 18 do not use that service in our lessons. Where an account is needed for any service, its own age rule decides, and parents are involved.',
            'Our <a class="ag-inline-link" href="/ai-tools-age-guide">AI tool age guide</a> lists the published rules for many tools.'
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'How our teen classes relate to school work',
          head: ['We do', 'We do not'],
          rows: [
            ['Teach the concepts behind school programming tasks', 'Write, rewrite or debug assessed work'],
            ['Set our own projects and practice problems', 'Complete school projects or major works'],
            ['Teach students to explain and test their own code', 'Help hide AI or outside help where it is not allowed']
          ]
        }
      ]
    },
    {
      id: 'groups',
      tint: '',
      eyebrow: 'Who joins',
      h2: 'Three kinds of teenage coder',
      lede: 'Teen groups are formed by stage, not just by age.',
      body: [
        {
          kind: 'three',
          cells: [
            { h3: 'The new starter', p: 'Thirteen or fourteen, finished with blocks, ready to type. Starts with Python and a small game in the first month.' },
            {
              h3: 'The builder',
              p: 'Has made a few things and wants bigger projects: websites, multiplayer games, tools for friends. Learns structure, testing and Git.'
            },
            {
              h3: 'The senior student',
              p: 'Fifteen to eighteen, possibly taking a computing subject, wanting depth: data structures, algorithms and larger codebases.'
            }
          ]
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Progress',
    h2: 'Four levels for teenage programmers',
    lede: 'With weekly lessons, most teenagers reach the third level within three terms.',
    table: {
      caption: 'From typing code to owning it',
      head: ['Level', 'What you can do'],
      rows: [
        ['1. Writer', 'Write short programs with variables, loops and decisions'],
        ['2. Tester', 'Write tests first, including boundary cases, and make them pass'],
        ['3. Builder', 'Finish a project of several files, kept in version control'],
        ['4. Reader', 'Understand, extend and improve code someone else wrote']
      ]
    },
    left: {
      h3: 'My teen has done some coding at school. Where would they start?',
      ps: [
        'Usually at level one or two, moving quickly. The free class includes a short task that shows us where.',
        'Teens who find it easy are moved up; nobody repeats what they already know.'
      ]
    },
    right: {
      h3: 'Is coding useful for a teen not planning a computing career?',
      ps: [
        'Yes. Breaking problems down, testing ideas and explaining reasoning carry into science, maths and almost any later study.',
        'And many teenagers simply enjoy making things that work.'
      ]
    }
  },
  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Coding courses for teenagers',
    lede: 'Nine teen courses in three bands. The free class points each student to a band.',
    bands: [
      {
        num: 'I',
        h3: 'Make things',
        sub: 'Projects first',
        courses: [
          {
            code: 'CTNS / MAK / 01',
            slug: 'complete-game-development-masterclass-for-teens',
            title: 'Game Development for Teens',
            blurb: 'Unity, C# and shipped games.'
          },
          { code: 'CTNS / MAK / 02', slug: 'full-stack-web-development-teens-masterclass', title: 'Full Stack Web for Teens', blurb: 'React and Node.js.' },
          { code: 'CTNS / MAK / 03', slug: 'complete-app-development-masterclass-for-teens', title: 'App Development for Teens', blurb: 'React Native apps.' }
        ]
      },
      {
        num: 'II',
        h3: 'Think harder',
        sub: 'Algorithms and depth',
        courses: [
          { code: 'CTNS / THK / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem Solving for Teens', blurb: 'Logic and data structures.' },
          { code: 'CTNS / THK / 02', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ for Teens', blurb: 'STL, algorithms and games.' },
          {
            code: 'CTNS / THK / 03',
            slug: 'competitive-programming-for-teens-course',
            title: 'Competitive Programming for Teens',
            blurb: 'Contest-style problems.'
          }
        ]
      },
      {
        num: 'III',
        h3: 'Work like a developer',
        sub: 'Habits that last',
        courses: [
          { code: 'CTNS / DEV / 01', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub for Teens', blurb: 'Version control from zero.' },
          { code: 'CTNS / DEV / 02', slug: 'backend-coding-masterclass-for-teens', title: 'Backend for Teens', blurb: 'APIs and databases.' },
          { code: 'CTNS / DEV / 03', slug: 'mysql-mastery-for-teens', title: 'MySQL for Teens', blurb: 'SQL for real apps.' }
        ]
      }
    ]
  },
  how: {
    eyebrow: 'How lessons run',
    h2: 'Teen lessons after school, in your time',
    lede: 'The teaching team is in India, and its working hours cover Australian after-school time and early evenings. We book in the family\'s own state time, so daylight saving changes are handled for you.',
    slots: [
      { time: 'After school', l: 'Weekday lessons around homework.' },
      { time: 'Early evening', l: 'For senior students, by arrangement.' },
      { time: 'Weekend', l: 'Longer project and testing sessions.' }
    ],
    cells: [
      { h3: 'Free first class', p: 'A short coding task that shows the right starting level.' },
      { h3: 'Small groups', p: 'Five to ten teens, reviewing each other\'s code.' },
      { h3: 'One to one', p: 'For a project, a competition or a faster pace.' },
      { h3: 'Tests first', p: 'Each project starts with the cases it must pass.' },
      { h3: 'Age rules kept', p: 'No service is used below its stated minimum age.' },
      { h3: 'School rules first', p: 'No assessed work, ever.' }
    ]
  },
  projectsH2: 'Projects teenagers built with us',
  projectsLede: 'Some of the games, sites and tools our students published. Browse the <a class="ag-inline-link" href="/student-labs">student labs</a> for the full set.',
  reviewsLede: 'Reviews from families and students on our Google profile, reproduced word for word.',
  fees: {
    h2: 'Fees for teen coding classes',
    lede: 'Families in Australia pay a monthly fee in US dollars. There is no sign-up charge, and classes can stop when any month ends.',
    free: ['A short coding task', 'Advice on the right course and level', 'No payment details'],
    group: ['Five to ten teens per class', 'Code reviews between students', 'A regular teacher', 'Stop when any month ends'],
    one: ['Lessons around one teen\'s goals', 'Faster or slower pace', 'Times around school and sport']
  },
  faq: {
    eyebrow: 'Teens and parents ask',
    h2: 'Questions about coding classes for teens in Australia',
    items: [
      {
        q: 'What are coding classes for teens?',
        a: 'They are lessons for 13 to 18 year olds in text programming languages such as Python, JavaScript and Java, taught through projects that students build, test and explain themselves.'
      },
      {
        q: 'What does the Australian Curriculum expect in Years 9 and 10?',
        a: 'Digital Technologies asks students to design and modify algorithms, implement them, and validate programs against a range of test cases, including boundary cases. Version 9.0 also mentions working with an existing game codebase and version control.'
      },
      {
        q: 'Which language should my teenager learn first?',
        a: 'Python suits most beginners. Teens focused on websites can start with HTML, CSS and JavaScript, and those already comfortable with Python often move to Java or C++.'
      },
      {
        q: 'Are these AI classes?',
        a: 'No. These are general coding classes. Teens interested in AI have a separate page and courses, and any AI service used follows its own minimum age.'
      },
      {
        q: 'Will you help with school assignments?',
        a: 'We teach the skills behind them with our own projects. We never write, rewrite or debug assessed work.'
      },
      {
        q: 'Does my teen need a powerful computer?',
        a: 'No. Any reasonably recent Windows, Mac or Linux computer with a keyboard runs everything used in these classes.'
      },
      {
        q: 'Can a 13 year old join a class with 17 year olds?',
        a: 'Groups are formed by stage and age band, so younger teens usually learn alongside students close to their own age.'
      },
      {
        q: 'What does it cost?',
        a: 'The first class is free with no card required. Monthly fees for groups and one-to-one lessons appear in the fees section.'
      }
    ]
  },
  elsewhere: {
    eyebrow: 'Also on this site',
    h2: 'Related pages',
    lede: 'Other pages for teenagers and their families.',
    items: [
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'Every Australian guide in one place.' },
      { href: '/ai-classes-for-teens-australia', label: 'AI classes for teens', p: 'Using, checking and building AI.' },
      { href: '/coding-for-year-7-australia', label: 'Coding for Year 7', p: 'For the first year of high school.' },
      { href: '/choosing-year-11-computing-subjects-australia', label: 'Year 11 computing subjects', p: 'Senior options by state.' },
      { href: '/australian-informatics-olympiad-preparation', label: 'Australian Informatics Olympiad', p: 'For competitive teenagers.' },
      { href: '/game-programming-course-australia', label: 'Game programming course', p: 'Engines, physics and game logic.' }
    ]
  },
  start: {
    h2: 'Book a free first class',
    lede: 'Send a phone number and a time that works. The free lesson includes a short coding task, and we finish by recommending a course and level.',
    readFirst: 'Parents often look at <a class="ag-inline-link" href="/how-we-teach">how we run lessons</a> and <a class="ag-inline-link" href="/courses">the course list</a> before booking.',
    note: 'Our team is based in India, so calls and messages show a +91 number, and we have no Australian office. Families usually find WhatsApp from an Australian mobile the quickest way to reach us.',
    formNote: 'Free, no card, no obligation.'
  },
  footer: {
    cols: [
      {
        h4: 'Teens',
        links: [
          { href: '/ai-classes-for-teens-australia', label: 'AI classes for teens' },
          { href: '/coding-for-year-7-australia', label: 'Coding for Year 7' },
          { href: '/game-programming-course-australia', label: 'Game programming' },
          { href: '/how-we-teach', label: 'How we teach' }
        ]
      },
      {
        h4: 'Australia',
        links: [
          { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
          { href: '/choosing-year-11-computing-subjects-australia', label: 'Year 11 computing subjects' },
          { href: '/hsc-software-engineering-help', label: 'HSC Software Engineering' },
          { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' }
        ]
      }
    ],
    bottomRight: 'Works and fair are different tests'
  },
  personalityCss: `
.ag-root.ag-ctns .ag-hero h1 { letter-spacing: -0.02em; }
.ag-root.ag-ctns .ag-capsule { border-left-width: 5px; border-radius: 1px; }
.ag-root.ag-ctns .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-ctns .ag-table caption { text-align: left; font-weight: 660; }
.ag-root.ag-ctns .ag-band-head h3 { letter-spacing: -0.016em; }
.ag-root.ag-ctns .ag-slots { gap: 0.95rem; }
`,
  dossier: {
    curriculumAuthority: 'Australia, Years 9 and 10. ACARA, Australian Curriculum v9, Digital Technologies 7-10 (Word download): Years 9-10 band description; AC9TDI10P06 and its boundary test and loop elaborations; AC9TDI10P05 shape intersection elaboration; AC9TDI10P09 adventure game codebase elaboration; AC9TDI10P12 version control elaboration.',
    localProject: 'First-click safety in a mine-finding grid game (our Python simulation, seed 20261013, 200,000 boards of 9 by 9 with 10 mines, click at centre): naive first click hits 12.41% (exact 12.35%); move to first empty square puts a mine in the top-left corner on 23.32% of boards; move to random empty square 12.48%; regenerate 12.49% with 1.143 tries on average. Regenerate, the simplest, wins. Lesson family: first-click safety.',
    requiredMentions: [
      'validate algorithms and programs by comparing their output against a range of test cases',
      'determining boundary test cases and testing that they are handled correctly by a program',
      'identifying that a loop has finished one iteration too early',
      'fixing a bug in an algorithm to detect if 2 shapes intersect when the shapes just touch',
      'using the codebase of an existing adventure game and building new characters, levels or abilities',
      'a collaborative version control tool such as GitHub',
      'The first click that should never lose',
      '23.32%'
    ],
    sources: [
      {
        claim: 'ACARA, Digital Technologies 7-10 v9, Years 9-10: band description; AC9TDI10P06 with boundary test case and loop elaborations; AC9TDI10P05 shape intersection elaboration; AC9TDI10P09 adventure game elaboration; AC9TDI10P12 version control elaboration.',
        url: 'https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx'
      },
      {
        claim: 'Anthropic, Consumer Terms of Service: minimum age 18 (verbatim in the site\'s AI tool age audit).',
        url: 'https://www.anthropic.com/legal/consumer-terms'
      }
    ],
    rejectedClaims: [
      'Senior secondary syllabuses in Queensland and Western Australia: their authority sites returned 403 and were not used; the page links our existing senior-subject guides instead.',
      'Statistics on how many Australian teenagers code: no primary source read raw; not quoted.',
      'The trade name of the best-known mine-finding game: described generically.',
      'Claims that coding improves school results: no grade or ATAR promises.',
      'GitHub\'s own minimum age: not read raw, so the page says each service\'s rule decides.'
    ]
  }
};
