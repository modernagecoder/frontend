'use strict';
// Python classes online, Australia (ag- language and track door; AU cluster Phase 9, row 358).
// Intent: Australians of any age from about 9 to 67 searching for live online Python classes: the language as a track
// across ages, not the Scratch-to-Python move (after-scratch-next-step-python-australia), not AI for children
// (python-ai-course-for-kids-australia) and not a place page (online-coding-and-python-classes-in-*).
// Sources, read raw on 13 October 2026 (curl, default agent):
//  - ACARA, Australian Curriculum v9, Digital Technologies F-6 (.docx): AC9TDI6P05 elaboration "writing a program to
//    draw a rotated shape a given number of times using Turtle Graphics" (in a visual programming environment).
//  - ACARA, Digital Technologies 7-10 (.docx): AC9TDI8P09 "implement, modify and debug programs involving control
//    structures and functions in a general-purpose programming language"; Years 7-8 band "implementing them in a
//    general-purpose programming language".
//  - Monash, FIT1045 handbook (2026): resources list "Additional Python language support" and "The Python Tutorial".
//  - ABS, website copyright statement (CC BY 4.0) and ABS Data API dataflow BA_SA2 (Building Approvals by SA2),
//    measure 1 number of dwelling units, total sectors, work type 1 New, building type 110 Houses, SA2 level, monthly,
//    July 2025 to June 2026.
// Lesson family: the truthiness bug, "if value:" treating legitimate zeros as missing. Our calculation on the BA_SA2
// download: 29,496 SA2-months (2,458 SA2s x 12), 10,478 zeros (35.5%), no blanks;
// mean per SA2-month 4.12 correctly vs 6.39 with the bug; 222 SA2s with no new houses all
// year reported as having no data. Parts are never summed into a national total.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: {
    group: 'guide',
    tag: 'PYTHON, ONLINE',
    blurb: 'Python classes online for Australians from 9 to 67: one language taught at every age, from first programs to data, automation and the web.'
  },
  slug: 'python-classes-online-australia',
  code: 'pyon',
  accent: '#863737',
  accentRationale: 'Python classes online, Australia: a muted brick red computed for the national doors, at least 20 RGB from every national AU accent, at least 10 from every AU accent and 6 from every colour in use',
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
  routeLabel: 'Python classes online, Australia',
  title: 'Python Classes Online in Australia | Ages 9 to 67, Live',
  description: 'Live Python classes online for Australians aged 9 to 67: first programs, data, automation and the web, taught by a teacher who reads your code. First class free.',
  ogDescription: 'One innocent "if value:" overstated a national average by more than half. How our Python classes teach the habits that real data demands, at every age.',
  twitterDescription: 'Python classes online for Australian kids, teens and adults: live lessons, real data, honest testing. First class free.',
  pageName: 'Python Classes Online in Australia',
  webPageDescription: 'A guide to learning Python online from Australia at any age: where Python sits in school and university, a worked example on ABS data, the Python track by age, and how lessons run.',
  courseDescription: 'Live online Python classes for Australians aged 9 to 67: fundamentals, data handling, automation, web development and testing, taught at the right level for each age.',
  crumbs: [
    { name: 'Courses', href: '/courses' },
    { name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }
  ],
  crumbLabel: 'Python classes online',
  navLinks: [
    { href: '#track', label: 'Python by age' },
    { href: '#zero', label: 'A worked example' },
    { href: '#school', label: 'School and uni' },
    { href: '#habits', label: 'Habits' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Ages 9 to 67 &middot; One language, every stage',
  h1: 'Python classes online',
  lede: 'Python is the rare language that suits a ten year old drawing shapes, a teenager analysing a dataset and an adult automating a report, without changing its rules. That is why so many Australians learn it, and why our live online Python classes run from age 9 to 67. The language is the same at every age; the projects, pace and examples change. This page sets out the Python track by age, works through one small mistake on real Australian Bureau of Statistics data that changes an answer by more than half, shows where Python appears in school and university, and lists the habits we teach so that code stays right after the lesson ends.',
  secondaryCta: { href: '#zero', label: 'See the worked example' },
  wa: 'Hello Modern Age Coders, I am in Australia and interested in live online Python classes. Could we book a free first class?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Python taught with real data and real tests',
  spec: [
    ['For', 'Ages 9 to 67'],
    ['Language', 'Python 3'],
    ['Children', 'Games, drawing, small tools'],
    ['Teens', 'Data, algorithms, projects'],
    ['Adults', 'Automation, data, the web'],
    ['Format', 'Live online lessons'],
    ['Group', 'Fifteen to twenty, or one to one'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Python classes online are live lessons over video in which learners write and run Python, a readable general-purpose language used for games, data analysis, automation and web development. The Australian Curriculum expects Years 7 and 8 students to program in a general-purpose language. Modern Age Coders teaches Python online to Australians aged 9 to 67, with projects matched to each age, in small groups or one to one, and the first class is free.',
  picks: {
    eyebrow: 'Start here',
    h2: 'One Python course for each age group',
    lede: 'Children, teenagers and adults each have their own Python course, with the same language underneath. Every card links to a full syllabus.',
    items: [
      {
        course: 'python-ai-kids-masterclass',
        code: 'PYON / 01',
        title: 'Python and AI for Kids',
        note: 'Ages 9 to 12: turtle art, games and small smart programs, at a child\'s pace.'
      },
      {
        course: 'python-complete-masterclass-teens',
        code: 'PYON / 02',
        title: 'Python for Teens',
        note: 'Ages 13 to 18: from first lines to files, data, algorithms and real projects.'
      },
      {
        course: 'python-programming-masterclass-zero-to-advanced-college',
        code: 'PYON / 03',
        title: 'Python Masterclass for Adults',
        note: 'Ages 18 and over: zero to advanced, with automation and data along the way.'
      }
    ]
  },
  sections: [
    {
      id: 'track',
      tint: 'tint',
      eyebrow: 'Python by age',
      h2: 'The Python track from 9 to 67',
      lede: 'The same language, four very different first months.',
      body: [
        {
          kind: 'table',
          caption: 'How Python lessons change with age',
          head: ['Age', 'First projects', 'What gets emphasis', 'Usually ready when'],
          rows: [
            [
              '9 to 12',
              'Turtle drawings, quizzes, guessing games',
              'Loops, decisions, typing accurately',
              'Comfortable with a keyboard and short words'
            ],
            [
              '13 to 15',
              'Text adventures, simple data charts, small games',
              'Functions, lists, debugging',
              'Any time; school Digital Technologies helps'
            ],
            [
              '16 to 18',
              'Data projects, algorithms, a larger program',
              'Testing, files, efficiency',
              'Ready for longer, structured work'
            ],
            [
              'Adults',
              'Scripts for real chores, spreadsheet automation',
              'Reading data, libraries, reliability',
              'Whenever there is a task worth automating'
            ]
          ]
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'Younger than 9?',
          left: [
            'Most children of 6 to 8 are better served by block coding first. The Australian Curriculum itself has younger students program "in a visual programming environment", including an example for Years 5 and 6 of "writing a program to draw a rotated shape a given number of times using Turtle Graphics".',
            'Our page on the <a class="ag-inline-link" href="/after-scratch-next-step-python-australia">step from Scratch to Python</a> covers that transition in detail.'
          ],
          rightH3: 'Older than 50?',
          right: [
            'Python is often the most comfortable first language later in life, because it reads almost like instructions in English.',
            'Learners from 50 to 67 can read our page on <a class="ag-inline-link" href="/learn-to-code-over-50-australia">learning to code over 50</a>.'
          ]
        }
      ]
    },
    {
      id: 'zero',
      tint: 'deep',
      eyebrow: 'A worked example',
      h2: 'Zero is not missing: one line that inflated an average by 55%',
      lede: 'A favourite Python shortcut is to write <code>if value:</code> to skip empty entries. It also skips every zero. On real Australian data, that changes the answer a lot.',
      body: [
        {
          kind: 'p',
          html: 'From the ABS Data API we downloaded the number of new houses approved each month in every Statistical Area Level 2 (SA2) across Australia, July 2025 to June 2026: 2,458 areas times 12 months, 29,496 figures. The file has no blanks at all, but 10,478 of the figures, 35.5%, are zero: months in which an area approved no new houses. We asked a simple question: on average, how many new houses does an SA2 approve in a month? Then we answered it two ways.'
        },
        {
          kind: 'table',
          caption: 'Average new houses approved per SA2 per month, July 2025 to June 2026 (our calculation on ABS data)',
          head: ['Code', 'Figures used', 'Average', 'Areas reported as "no data"'],
          numCols: [
            1,
            2,
            3
          ],
          rows: [
            ['<code>if value:</code> skips falsy values', '19,018', '6.39', '222'],
            ['<code>if value is not None:</code> skips only true blanks', '29,496', '4.12', '0'],
            ['No filter at all (this file has no blanks)', '29,496', '4.12', '0']
          ]
        },
        {
          kind: 'three',
          mt: true,
          cells: [
            {
              h3: 'What went wrong',
              p: 'In Python, <code>0</code>, empty text and empty lists all count as false. The shortcut threw away 10,478 real zeros, so the average described only the busy months and came out 55% too high.'
            },
            {
              h3: 'A second, quieter error',
              p: 'Some 222 areas approved no new houses in any of the 12 months. With the shortcut, those areas looked as if they had no data, when the data said something definite: zero.'
            },
            {
              h3: 'The simple baseline wins',
              p: 'Because the download has no blanks, the plainest code, with no filter at all, gives the right answer. The "clever" filter was the only thing that broke it. We teach learners to look at the data before deciding what to skip.'
            }
          ]
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'Why this suits every age',
          left: [
            'A twelve year old can see the problem with a list like <code>[3, 0, 5, 0]</code>. An adult meets it in every spreadsheet with a column of counts. The lesson is the same: decide what "missing" means, then write it exactly.',
            'It also introduces <code>None</code>, one of the ideas that separates writing Python from guessing at it.'
          ],
          rightH3: 'What we did not do',
          right: [
            'We report an average per area and month, our own calculation, and do not add the areas up into a national figure; the ABS publishes its own totals, and parts summed from a download need not match them.',
            'ABS material is licensed under Creative Commons Attribution 4.0, so learners can reuse it in their own projects with credit.'
          ]
        },
        {
          kind: 'source',
          html: 'Data: Australian Bureau of Statistics, Building Approvals by SA2 (Data API dataflow BA_SA2), number of dwelling units, new houses, all sectors, monthly, downloaded 13 October 2026, licensed under <a class="ag-inline-link" href="https://www.abs.gov.au/website-privacy-copyright-and-disclaimer" rel="noopener" target="_blank">CC BY 4.0</a>. All averages are our calculation.'
        }
      ]
    },
    {
      id: 'school',
      tint: 'tint',
      eyebrow: 'School and uni',
      h2: 'Where Python appears in Australian education',
      lede: 'Python is not compulsory anywhere in the national curriculum, but it fits the curriculum\'s language requirement and turns up again at university.',
      body: [
        {
          kind: 'table',
          caption: 'Python and its neighbours in official documents, read 13 October 2026',
          head: ['Where', 'What the document says', 'Where Python fits'],
          rows: [
            [
              'Australian Curriculum, Years 5 and 6',
              'Programs in a visual environment, for example "using Turtle Graphics"',
              'Python\'s turtle module is a natural next step'
            ],
            [
              'Australian Curriculum, Years 7 and 8 (AC9TDI8P09)',
              '"implement, modify and debug programs involving control structures and functions in a general-purpose programming language"',
              'Python is one of the languages ACARA lists as an example'
            ],
            [
              'Monash, FIT1045',
              'Its resources list "Additional Python language support" and "The Python Tutorial"',
              'First-year programming with Python support'
            ],
            ['Many first-year units elsewhere', 'Languages vary by university and unit', 'Check the unit outline; concepts transfer']
          ]
        },
        {
          kind: 'p',
          mt: true,
          html: 'University students taking a programming unit in any language can read our page on <a class="ag-inline-link" href="/coding-for-university-students-australia">coding for university students</a>. Teens choosing senior subjects will find our <a class="ag-inline-link" href="/choosing-year-11-computing-subjects-australia">Year 11 computing subjects</a> guide useful.'
        },
        {
          kind: 'source',
          html: 'Sources, read 13 October 2026: ACARA, Digital Technologies <a class="ag-inline-link" href="https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-f-6-v9.docx" rel="noopener" target="_blank">Foundation to Year 6</a> and <a class="ag-inline-link" href="https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx" rel="noopener" target="_blank">Years 7 to 10</a>; <a class="ag-inline-link" href="https://handbook.monash.edu/2026/units/FIT1045" rel="noopener" target="_blank">Monash FIT1045</a>.'
        }
      ]
    },
    {
      id: 'habits',
      tint: 'deep',
      eyebrow: 'Habits',
      h2: 'Five Python habits we teach at every age',
      lede: 'Syntax is learned in weeks. These habits take longer, and they are what make Python code trustworthy.',
      body: [
        {
          kind: 'table',
          caption: 'Habits and why they matter',
          head: ['Habit', 'In practice', 'The mistake it prevents'],
          rows: [
            ['Look at the data first', 'Print a few rows and count blanks before writing logic', 'Skipping real zeros, as above'],
            ['Say exactly what you mean', 'Write <code>is None</code> when you mean missing', 'Truthiness surprises'],
            ['Test the edges', 'Empty lists, zero, one item, very large inputs', 'Code that works only on the example'],
            [
              'Read the error message',
              'Find the line and the type of error before changing anything',
              'Random edits that create new bugs'
            ],
            ['Keep versions', 'Save working copies and use version control as projects grow', 'Losing the version that worked']
          ]
        },
        {
          kind: 'three',
          mt: true,
          cells: [
            { h3: 'For children', p: 'The habits arrive as games: "what happens if the list is empty?" becomes a challenge, not a lecture.' },
            { h3: 'For teenagers', p: 'Tests are written before code, and projects are kept under version control from the second term.' },
            { h3: 'For adults', p: 'Every script for real work keeps the original data untouched and prints counts before and after.' }
          ]
        }
      ]
    },
    {
      id: 'next',
      tint: '',
      eyebrow: 'Where Python leads',
      h2: 'After the basics',
      lede: 'Python opens several doors. Learners choose by interest, not by a fixed sequence.',
      body: [
        {
          kind: 'table',
          caption: 'Common next steps',
          head: ['Interest', 'Next course', 'Typical project'],
          rows: [
            ['Data', 'Data science or data analysis', 'Charts and summaries from public data'],
            ['Automation', 'Python automation', 'A script that tidies files or spreadsheets'],
            ['The web', 'Django and Flask', 'A small web app with a database'],
            ['AI', 'Machine learning courses', 'A model tested against a baseline'],
            ['Certification', 'PCEP and PCAP preparation', 'Exam-style practice for an industry certificate']
          ]
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'How we decide the next step',
          left: [
            'Near the end of each term the teacher and learner look back at the projects that flew and the ones that dragged. The next course usually follows whatever the learner kept doing without being asked.',
            'Families of younger learners get a short written note with the suggestion and the reason for it.'
          ],
          rightH3: 'Nothing is wasted',
          right: [
            'A learner who moves from Python to Java, JavaScript or C++ later keeps every idea from these lessons: variables, functions, data structures, tests and the habit of checking data before trusting it.',
            'Python simply makes those ideas easiest to see the first time.'
          ]
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Progress',
    h2: 'Four levels of Python skill',
    lede: 'Weekly lessons usually bring a learner to the third level in two or three terms, at any age.',
    table: {
      caption: 'From first program to dependable Python',
      head: ['Level', 'What you can do'],
      rows: [
        ['1. First programs', 'Use variables, loops and decisions to make a program that responds'],
        ['2. Functions and data', 'Organise code into functions and work with lists and dictionaries'],
        ['3. Real input', 'Read files and data, handle errors and test edge cases'],
        ['4. Projects', 'Build, test and explain a project that others can use']
      ]
    },
    left: {
      h3: 'Is Python a real language or just for learning?',
      ps: [
        'A real one. The same Python a child learns is used for data analysis, automation and web services.',
        'That continuity is the main reason we teach it at every age.'
      ]
    },
    right: {
      h3: 'Can a parent and child learn together?',
      ps: [
        'In separate groups matched to age and stage, yes, and families often compare projects at home.',
        'One-to-one lessons can also be arranged for each.'
      ]
    }
  },
  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Python courses for every stage',
    lede: 'Nine Python-based courses, grouped by who they are for.',
    bands: [
      {
        num: 'I',
        h3: 'Younger learners',
        sub: 'Ages 9 to 15',
        courses: [
          { code: 'PYON / YNG / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'Games and turtle art.' },
          { code: 'PYON / YNG / 02', slug: 'maths-through-coding', title: 'Maths Through Coding', blurb: 'Number puzzles solved in code.' },
          { code: 'PYON / YNG / 03', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'Beginner to advanced.' }
        ]
      },
      {
        num: 'II',
        h3: 'Using Python',
        sub: 'Teens and adults',
        courses: [
          {
            code: 'PYON / USE / 01',
            slug: 'data-science-course-for-teens-python-data',
            title: 'Data Science for Teens',
            blurb: 'Tables, charts and first predictions.'
          },
          { code: 'PYON / USE / 02', slug: 'python-ai-automation-masterclass-college', title: 'Python Automation', blurb: 'Scripts for real work.' },
          { code: 'PYON / USE / 03', slug: 'python-web-development-django-flask-course', title: 'Django and Flask', blurb: 'Python on the web.' }
        ]
      },
      {
        num: 'III',
        h3: 'Going deeper',
        sub: 'Adults',
        courses: [
          { code: 'PYON / DEP / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python Masterclass', blurb: 'Zero to advanced.' },
          { code: 'PYON / DEP / 02', slug: 'pcep-pcap-python-certification-course', title: 'PCEP and PCAP Certification', blurb: 'Industry certificates.' },
          {
            code: 'PYON / DEP / 03',
            slug: 'data-science-complete-masterclass-college',
            title: 'Data Science Course',
            blurb: 'From cleaning data to deep learning.'
          }
        ]
      }
    ]
  },
  how: {
    eyebrow: 'How lessons run',
    h2: 'Python lessons across Australian time zones',
    lede: 'Our India-based teachers cover Australian after-school hours, evenings and weekends. Every booking is made in the learner\'s state time, from Perth to Sydney, and moves with daylight saving where it applies.',
    slots: [
      { time: 'After school', l: 'Children and teenagers.' },
      { time: 'Evening', l: 'Adults and senior students.' },
      { time: 'Weekend', l: 'Longer project sessions.' }
    ],
    cells: [
      { h3: 'Free first class', p: 'A first Python program, whatever your age.' },
      { h3: 'Age-matched groups', p: 'Fifteen to twenty learners of a similar age and stage.' },
      { h3: 'One to one', p: 'For a goal, an exam or a project.' },
      { h3: 'Real data', p: 'Public Australian data in projects from the teens up.' },
      { h3: 'Tests early', p: 'Edge cases checked before code is called done.' },
      { h3: 'Your own code', p: 'Learners type and explain everything.' }
    ]
  },
  projectsH2: 'Python and other projects by our students',
  projectsLede: 'A handful of things our learners made and published. The <a class="ag-inline-link" href="/student-labs">student labs</a> list the others.',
  reviewsLede: 'Public Google reviews of our classes, word for word.',
  fees: {
    h2: 'Fees for Python classes online',
    lede: 'Python learners in Australia are charged monthly in US dollars, with no enrolment fee and freedom to stop at the end of any month.',
    free: ['A first Python program', 'A recommended course and level', 'No card details'],
    group: ['Fifteen to twenty learners, matched by age', 'Shared code reviews', 'A regular teacher', 'Stop at the end of any month'],
    one: ['Python around one learner\'s goal', 'Pace and depth to suit', 'Times around school or work']
  },
  faq: {
    eyebrow: 'Learners and parents ask',
    h2: 'Questions about Python classes online in Australia',
    items: [
      {
        q: 'What are Python classes online?',
        a: 'They are live lessons over video in which learners write and run Python programs with a teacher, from first programs to data, automation and web projects.'
      },
      {
        q: 'What age can someone start Python?',
        a: 'Around 9 for most children, after some block coding. There is no upper limit; our adult courses run to 67.'
      },
      {
        q: 'Is Python taught in Australian schools?',
        a: 'The Australian Curriculum expects Years 7 and 8 students to program in a general-purpose language, and lists Python among its examples. Schools choose their own language.'
      },
      {
        q: 'What is the truthiness bug?',
        a: 'Writing "if value:" to skip missing entries also skips zeros, because Python treats 0 as false. In our example on ABS data it raised an average from 4.12 to 6.39.'
      },
      {
        q: 'How long does it take to learn Python?',
        a: 'Most weekly learners write useful programs of their own within a term and reach confident, tested projects in two or three terms. The pace depends on practice between lessons more than on age.'
      },
      { q: 'Do I need to install Python?', a: 'Yes, it is free and runs on Windows, Mac and Linux. We help set it up in the first lesson.' },
      { q: 'Can adults join Python classes?', a: 'Yes. Adults learn in adult groups or one to one, often focusing on automation and data.' },
      { q: 'Is Python enough for AI?', a: 'Python is the main language of machine learning work, so it is the right foundation. AI courses build on it.' },
      {
        q: 'What do Python classes cost?',
        a: 'The first class is free with no card. Monthly fees for groups and one-to-one lessons are shown in the fees section.'
      }
    ]
  },
  elsewhere: {
    eyebrow: 'Also on this site',
    h2: 'Related pages',
    lede: 'Other language and age pages.',
    items: [
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'The guide to every Australian page.' },
      { href: '/after-scratch-next-step-python-australia', label: 'After Scratch: Python', p: 'The move from blocks to text.' },
      { href: '/python-ai-course-for-kids-australia', label: 'Python AI course for kids', p: 'Small AI programs, ages 9 to 13.' },
      { href: '/java-classes-online-australia', label: 'Java classes online', p: 'A second, stricter language.' },
      { href: '/coding-classes-for-adults-australia', label: 'Coding classes for adults', p: 'Python around work.' },
      { href: '/kids-coding-languages-australia', label: 'Coding languages for kids', p: 'Which language at which age.' }
    ]
  },
  start: {
    h2: 'Book a free first Python class',
    lede: 'Pop in a phone number and a time to call. The free lesson ends with a working Python program and a clear suggestion of where to begin.',
    readFirst: 'Interested in our method? Read <a class="ag-inline-link" href="/how-we-teach">how we teach Python and more</a>, or see <a class="ag-inline-link" href="/courses">the course list</a>.',
    note: 'The team that answers is in India, so our number starts +91; there is no Modern Age Coders office in Australia. WhatsApp from an Australian mobile is the quickest way in.',
    formNote: 'Free, no card, no obligation.'
  },
  footer: {
    cols: [
      {
        h4: 'Python',
        links: [
          { href: '/after-scratch-next-step-python-australia', label: 'After Scratch: Python' },
          { href: '/python-ai-course-for-kids-australia', label: 'Python AI for kids' },
          { href: '/kids-coding-languages-australia', label: 'Coding languages for kids' },
          { href: '/how-we-teach', label: 'How we teach' }
        ]
      },
      {
        h4: 'Australia',
        links: [
          { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
          { href: '/coding-classes-for-adults-australia', label: 'Coding classes for adults' },
          { href: '/coding-for-university-students-australia', label: 'Coding for university students' },
          { href: '/java-classes-online-australia', label: 'Java classes online' }
        ]
      }
    ],
    bottomRight: 'Zero is a value, not a blank'
  },
  personalityCss: `
.ag-root.ag-pyon .ag-hero h1 { letter-spacing: -0.019em; }
.ag-root.ag-pyon .ag-capsule { border-left-width: 6px; border-radius: 3px; }
.ag-root.ag-pyon .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-pyon .ag-table caption { text-align: left; font-weight: 635; }
.ag-root.ag-pyon .ag-band-head h3 { letter-spacing: -0.007em; }
.ag-root.ag-pyon .ag-slots { gap: 0.9rem; }
`,
  dossier: {
    curriculumAuthority: 'Australia, Years 5 to 8 and university. ACARA, Australian Curriculum v9, Digital Technologies F-6 (AC9TDI6P05 Turtle Graphics elaboration) and 7-10 (AC9TDI8P09 content description; Years 7-8 band, general-purpose language). Monash FIT1045 resources (Python support). ABS copyright statement (CC BY 4.0) and Data API BA_SA2.',
    localProject: 'Truthiness bug on ABS BA_SA2 new house approvals by SA2, July 2025 to June 2026 (our calculation): 29,496 SA2-months, 10,478 zeros (35.5%), no blanks; mean 4.12 correct vs 6.39 with "if value:" (55% too high); 222 all-zero SA2s reported as no data. No filter at all, the simple baseline, is correct. Lesson family: truthiness and zeros.',
    requiredMentions: [
      'writing a program to draw a rotated shape a given number of times using Turtle Graphics',
      'implement, modify and debug programs involving control structures and functions in a general-purpose programming language',
      'Additional Python language support',
      'Zero is not missing',
      'BA_SA2',
      'Statistical Area Level 2',
      'The Python track from 9 to 67',
      'Five Python habits we teach at every age'
    ],
    sources: [
      {
        claim: 'ACARA, Digital Technologies F-6 v9: AC9TDI6P05 elaboration on Turtle Graphics in a visual programming environment.',
        url: 'https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-f-6-v9.docx'
      },
      {
        claim: 'ACARA, Digital Technologies 7-10 v9: AC9TDI8P09 content description and Years 7-8 band (general-purpose programming language).',
        url: 'https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx'
      },
      {
        claim: 'Monash, FIT1045 (2026): resources list "Additional Python language support" and "The Python Tutorial".',
        url: 'https://handbook.monash.edu/2026/units/FIT1045'
      },
      {
        claim: 'ABS, BA_SA2 Building Approvals by SA2, new houses, number of dwelling units, monthly, July 2025 to June 2026; CC BY 4.0.',
        url: 'https://data.api.abs.gov.au/rest/data/BA_SA2/1.9.1.110.SA2..M?startPeriod=2025-07&endPeriod=2026-06'
      }
    ],
    rejectedClaims: [
      'A national total of new houses approved: the page does not sum SA2 figures; the ABS publishes its own totals.',
      'University of Melbourne COMP10001 language: refused by a bot challenge; not used.',
      'Which Australian schools teach Python: not published centrally; not claimed.',
      'Python popularity rankings: not Australian primary sources; not used.',
      'Value of building work approved: a money measure in the same dataflow, not used.'
    ]
  }
};
