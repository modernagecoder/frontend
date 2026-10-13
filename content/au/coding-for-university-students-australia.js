'use strict';
// Coding for university students, Australia (ag- age and career door; AU cluster Phase 9, row 354).
// Intent: Australian university students (and those about to start) who want coding support alongside a first or
// second-year programming unit, or who study another discipline and need to code. Concepts only; never assessed work.
// Sources, read raw on 13 October 2026 (curl, default agent):
//  - ANU, COMP1100 (2026): "Apply fundamental programming concepts, using a functional programming language, to solve
//    problems."; reading list "Haskell: The Craft of Functional Programming"; the ANU Turnitin statement ("to assess
//    assignment submissions as a component of the University's approach to managing Academic Integrity").
//  - ANU, COMP1110 (2026): outcome "Understand their ethical responsibilities as a programmer with respect to Academic
//    integrity, the use of Artificial Intelligence and authorship of code."
//  - University of Sydney, INFO1110: "Students will obtain knowledge and skills with procedural programming."; LO9
//    "write a set of tests for a small program or function".
//  - UQ, CSSE1001 Introduction to Software Engineering: "using an exploratory problem-based approach"; 2 units; "A
//    standard study load is 8 units per semester"; Semester 1, 2027 runs 22/02/2027 to 19/06/2027; lecture 2 hours,
//    applied class 1 hour and practical 2 hours a week.
//  - Monash, FIT1045 (2026) synopsis "This unit introduces programming fundamentals."; outcome "Design, construct and
//    test programs that include user-defined functions and data structures".
// Lesson family: code similarity on normalised tokens with winnowing fingerprints (k = 5 tokens, window 4), against
// plain line and character diffs (difflib). Seven short Python programs written by us; figures in uni/res.json.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: {
    group: 'guide',
    tag: 'UNIVERSITY STUDENTS',
    blurb: 'Coding support for Australian university students: concepts a week ahead of the unit, testing habits and academic integrity, never assessed work.'
  },
  slug: 'coding-for-university-students-australia',
  code: 'unau',
  accent: '#444785',
  accentRationale: 'Coding for university students, Australia: a muted ink blue computed for the national doors, at least 20 RGB from every national AU accent, at least 10 from every AU accent and 6 from every colour in use',
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
  routeLabel: 'Coding for university students, Australia',
  title: 'Coding for University Students in Australia | Live Support',
  description: 'Coding support for Australian university students: the concepts behind first-year units, testing habits and academic integrity, taught live online. First class free.',
  ogDescription: 'A renamed copy scored 20% on a line diff and 100% on token fingerprints. What Australian uni students should know about code similarity, and how we teach.',
  twitterDescription: 'Coding support for Australian university students: concepts ahead of the unit, tests, integrity. Live online, first class free.',
  pageName: 'Coding for University Students in Australia',
  webPageDescription: 'A guide for Australian university students learning to code: how first-year units differ, the semester rhythm, how code similarity is measured, and concept-only support.',
  courseDescription: 'Live online coding lessons for Australian university students: programming concepts, data structures, testing and version control, taught alongside a unit and never on assessed work.',
  crumbs: [
    { name: 'Courses', href: '/courses' },
    { name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }
  ],
  crumbLabel: 'Coding for university students',
  navLinks: [
    { href: '#units', label: 'First-year units' },
    { href: '#semester', label: 'The semester' },
    { href: '#similarity', label: 'A worked example' },
    { href: '#integrity', label: 'Integrity' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; University students &middot; Concepts, not assignments',
  h1: 'Coding for university students',
  lede: 'Starting a programming unit at an Australian university can feel like joining a conversation halfway through. Lectures move quickly, practicals assume last week is settled, and the first assessment arrives before the ideas have. Students from engineering, science, commerce and the arts meet code too, often with no school computing behind them. Our live online lessons run alongside the unit: we teach the concepts a week ahead, build testing and version-control habits, and stay well clear of anything assessed. This page compares how different universities open their programming sequence, sets out the semester rhythm, and shows a small experiment in how code similarity is measured, because understanding it explains why your own work must be your own.',
  secondaryCta: { href: '#similarity', label: 'See the experiment' },
  wa: 'Hello Modern Age Coders, I am a university student in Australia and would like coding support alongside my unit. Could we book a free first class?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; concepts ahead of the lecture, never the assignment',
  spec: [
    ['For', 'University students, any discipline'],
    ['Timing', 'A week ahead of the unit'],
    ['Core', 'Concepts, tests, version control'],
    ['Languages', 'Python, Java, C, Haskell and more'],
    ['Assessed work', 'Never written or checked by us'],
    ['Format', 'Live online lessons'],
    ['Group', 'Fifteen to twenty, or one to one'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Coding for university students means learning the programming concepts a unit expects, such as functions, data structures, recursion and testing, alongside the lectures rather than after them. First-year units differ: ANU\'s COMP1100 uses a functional language, while Sydney\'s INFO1110 teaches procedural programming. Modern Age Coders gives Australian university students live online concept lessons, never help with assessed work, and the first class is free.',
  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses that sit alongside a degree',
    lede: 'Data structures for the second-year wall, C for systems units, and Git for every group project. The syllabus is one click away on each card.',
    items: [
      {
        course: 'data-structures-algorithms-masterclass-college',
        code: 'UNAU / 01',
        title: 'Data Structures and Algorithms',
        note: 'Lists, stacks, trees, hashing and graphs, with the complexity reasoning lecturers expect.'
      },
      {
        course: 'c-programming-course-for-college-beginners',
        code: 'UNAU / 02',
        title: 'C Programming for Beginners',
        note: 'Pointers, memory and structs, for systems and embedded units that start in C.'
      },
      {
        course: 'git-github-version-control-course-for-college-students',
        code: 'UNAU / 03',
        title: 'Git and GitHub for Students',
        note: 'Branches, merges and pull requests, so group projects stop losing work.'
      }
    ]
  },
  sections: [
    {
      id: 'units',
      tint: 'tint',
      eyebrow: 'First-year units',
      h2: 'Australian universities open programming in different ways',
      lede: 'Students often assume every first-year unit teaches the same thing in the same language. The official unit pages say otherwise.',
      body: [
        {
          kind: 'table',
          caption: 'Opening programming units, read at each university on 13 October 2026',
          head: ['University and unit', 'What the unit page says', 'What it suggests'],
          rows: [
            [
              'ANU, COMP1100',
              '"Apply fundamental programming concepts, using a functional programming language, to solve problems." The reading list is a Haskell text.',
              'Functions and types come before loops and objects'
            ],
            [
              'University of Sydney, INFO1110',
              '"Students will obtain knowledge and skills with procedural programming."',
              'Step-by-step programs, memory and recursion'
            ],
            [
              'UQ, CSSE1001',
              'Programming taught "using an exploratory problem-based approach"',
              'Learning by building and debugging'
            ],
            [
              'Monash, FIT1045',
              '"This unit introduces programming fundamentals."; students design, construct and test programs with their own functions and data structures',
              'Fundamentals with testing from the start'
            ]
          ]
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'Why the differences matter less than they seem',
          left: [
            'A function, a test, a data structure and a recursive definition mean the same thing in Haskell, Python, C or Java. Students who understand the idea in one language pick up the syntax of the next within weeks.',
            'Our lessons teach the idea first, then show it in the language the unit uses.'
          ],
          rightH3: 'Students from other faculties',
          right: [
            'Engineering, science and business students often take one programming unit with little school computing behind them. They are usually the fastest to improve with a weekly hour, because every concept is new rather than half-remembered.',
            'We start from their own discipline\'s examples wherever we can.'
          ]
        },
        {
          kind: 'source',
          html: 'Sources, read 13 October 2026: <a class="ag-inline-link" href="https://programsandcourses.anu.edu.au/2026/course/COMP1100" rel="noopener" target="_blank">ANU COMP1100</a>; <a class="ag-inline-link" href="https://www.sydney.edu.au/units/INFO1110" rel="noopener" target="_blank">University of Sydney INFO1110</a>; <a class="ag-inline-link" href="https://programs-courses.uq.edu.au/course.html?course_code=CSSE1001" rel="noopener" target="_blank">UQ CSSE1001</a>; <a class="ag-inline-link" href="https://handbook.monash.edu/2026/units/FIT1045" rel="noopener" target="_blank">Monash FIT1045</a>.'
        }
      ]
    },
    {
      id: 'semester',
      tint: 'deep',
      eyebrow: 'The semester',
      h2: 'The rhythm of a programming unit',
      lede: 'A semester is short. UQ\'s page for CSSE1001, for example, lists Semester 1, 2027 as running from 22/02/2027 to 19/06/2027, with a lecture, an applied class and a practical every week.',
      body: [
        {
          kind: 'table',
          caption: 'One unit, one week, as published for UQ CSSE1001',
          head: ['Item', 'Published value', 'Our reading'],
          rows: [
            ['Units of credit', '2', 'One of several units taken at once'],
            ['Standard load', '"A standard study load is 8 units per semester"', 'About four units like this one together'],
            ['Lecture', '2 hours a week', 'New concepts arrive weekly'],
            ['Applied class', '1 hour a week', 'Worked problems with a tutor'],
            ['Practical', '2 hours a week', 'Hands-on coding, where gaps show']
          ]
        },
        {
          kind: 'three',
          mt: true,
          cells: [
            { h3: 'Weeks 1 to 4', p: 'Concepts stack quickly. We run one week ahead, so lectures become revision rather than first contact.' },
            {
              h3: 'Middle weeks',
              p: 'Assessment pressure arrives. Lessons switch to our own practice problems on the same ideas, and to testing habits that catch errors early.'
            },
            {
              h3: 'Final weeks',
              p: 'Exam-style reasoning: tracing code by hand, predicting output and explaining why, with nothing taken from the unit\'s own papers.'
            }
          ]
        }
      ]
    },
    {
      id: 'similarity',
      tint: 'tint',
      eyebrow: 'A worked example',
      h2: 'How code similarity is measured: renamed is not different',
      lede: 'Students sometimes believe that renaming variables makes copied code "different". We tested that belief with seven short programs and two ways of comparing them.',
      body: [
        {
          kind: 'p',
          html: 'We wrote one Python program that counts words in a file and prints the five most common, then six others: an identical copy, a copy with every name changed, a copy that was renamed, reordered and given new comments, two solutions written independently in different styles, and an unrelated program. We compared each with the original in two ways. A plain diff measures matching lines and characters. The second method replaces every variable name with the same placeholder, splits the code into five-token sequences, hashes them and keeps a small set of fingerprints by <em>winnowing</em> (the smallest hash in each window of four). Similarity is the share of fingerprints two programs have in common.'
        },
        {
          kind: 'table',
          caption: 'Similarity to the original program (our calculation; Python difflib and our winnowing script)',
          head: ['Program compared with the original', 'Matching lines', 'Matching characters', 'Shared fingerprints'],
          numCols: [
            1,
            2,
            3
          ],
          rows: [
            ['Identical copy', '100.0%', '100.0%', '100.0%'],
            ['Every name changed', '20.0%', '40.7%', '100.0%'],
            ['Renamed, reordered, new comments', '16.9%', '14.6%', '72.7%'],
            ['Independent solution, hand-built dictionary', '15.4%', '12.5%', '16.0%'],
            ['Independent solution, library counter', '12.1%', '6.2%', '7.8%'],
            ['Unrelated temperature table', '6.5%', '21.0%', '1.4%']
          ]
        },
        {
          kind: 'three',
          mt: true,
          cells: [
            {
              h3: 'Renaming fools the diff, not the fingerprints',
              p: 'The renamed copy matched only 20.0% of lines, barely above the hand-built independent solution at 15.4%. On fingerprints it scored 100.0%, because the structure under the names never changed.'
            },
            {
              h3: 'Disguise only goes so far',
              p: 'Reordering functions and adding comments brought fingerprints down to 72.7%, still far above the independent solutions at 16.0% and 7.8%. The effort of disguising code is larger than the effort of writing it.'
            },
            {
              h3: 'Honest work overlaps a little',
              p: 'Two people solving the same small task share some structure by necessity: the hand-built solution shares 16.0% of fingerprints with ours. That is why a similarity score starts a conversation with a person rather than ending one.'
            }
          ]
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'When the simple baseline wins',
          left: [
            'For a word-for-word copy, the plain diff and the fingerprints agree at 100.0%. If verbatim copying were the only worry, a diff would be enough and far simpler.',
            'The character diff is the weakest of the three: it gave the unrelated program 21.0%, more than the library-counter solution, simply because short programs share common letters and symbols.'
          ],
          rightH3: 'What this is, and what it is not',
          right: [
            'This is a teaching experiment with seven programs we wrote ourselves, not a description of any university\'s software, which we have not seen. Real similarity tools also strip boilerplate shared by a whole class.',
            'The point for students is simple: write your own solution, and the question never arises.'
          ]
        }
      ]
    },
    {
      id: 'integrity',
      tint: 'deep',
      eyebrow: 'Integrity',
      h2: 'Academic integrity, AI and authorship of code',
      lede: 'Australian universities now name AI and code authorship directly in their programming outcomes.',
      body: [
        {
          kind: 'two',
          leftH3: 'What one university writes',
          left: [
            'ANU\'s COMP1110 lists as a learning outcome that students "Understand their ethical responsibilities as a programmer with respect to Academic integrity, the use of Artificial Intelligence and authorship of code."',
            'Its course pages also state that ANU uses Turnitin "to assess assignment submissions as a component of the University\'s approach to managing Academic Integrity".'
          ],
          rightH3: 'How our lessons stay on the right side',
          right: [
            'We teach with our own examples and our own practice problems. We do not look at, write, rewrite or debug any assessed task, and we decline when asked.',
            'If a unit allows AI tools under conditions, the student follows the unit outline; our lessons explain the concepts so the student can do the work alone.'
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Where we draw the line',
          head: ['We do', 'We do not'],
          rows: [
            ['Teach the concept behind a topic in the unit outline', 'Read, write or fix an assignment'],
            ['Set our own practice problems on the same ideas', 'Solve past or current assessment questions'],
            ['Explain error messages in code written for our lessons', 'Debug code that will be submitted'],
            ['Build testing and version-control habits', 'Advise on getting around any similarity check']
          ]
        }
      ]
    },
    {
      id: 'topics',
      tint: '',
      eyebrow: 'What we cover',
      h2: 'Concepts students ask for most',
      lede: 'Requests cluster around the same ideas, whichever university or language.',
      body: [
        {
          kind: 'table',
          caption: 'Common requests and how we teach them',
          head: ['Concept', 'Where students meet it', 'How a lesson approaches it'],
          rows: [
            ['Recursion', 'Functional and procedural first-year units', 'Trace small calls by hand before writing any'],
            ['References and memory', 'Procedural units and Java units', 'Draw boxes and arrows until the picture is automatic'],
            ['Testing', 'Most units, as an explicit outcome', 'Write the test first, then the code that passes it'],
            ['Complexity', 'Data structures units', 'Count operations on growing inputs, then name the pattern'],
            ['Version control', 'Group projects', 'Branch, commit, merge and recover from a conflict on purpose']
          ]
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Progress',
    h2: 'Four signs a student is on top of a unit',
    lede: 'Students who meet weekly from the first week usually reach the third sign by mid-semester.',
    table: {
      caption: 'From catching up to running ahead',
      head: ['Stage', 'What it looks like'],
      rows: [
        ['1. Following', 'Lectures make sense on the day, with notes'],
        ['2. Practising', 'Practicals are finished in the time given'],
        ['3. Testing', 'Own code is checked with tests before anyone else sees it'],
        ['4. Explaining', 'Can teach a classmate why a solution works, without the code in front of them']
      ]
    },
    left: {
      h3: 'I failed a programming unit. Is it too late?',
      ps: [
        'No. A repeated unit is often the easiest one to prepare for, because the topics are known. We rebuild the foundations before the semester starts.',
        'What changes most is the habit of testing early.'
      ]
    },
    right: {
      h3: 'Can you help before I start university?',
      ps: [
        'Yes. A summer of weekly lessons on functions, data and testing makes the first weeks far calmer.',
        'Tell us the unit code and we will read its public page with you.'
      ]
    }
  },
  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Courses for university students',
    lede: 'Organised by what the degree demands. Pick by the unit you are taking now.',
    bands: [
      {
        num: 'I',
        h3: 'Programming',
        sub: 'First and second year',
        courses: [
          {
            code: 'UNAU / PRG / 01',
            slug: 'python-programming-masterclass-zero-to-advanced-college',
            title: 'Python Masterclass',
            blurb: 'Zero to advanced Python.'
          },
          { code: 'UNAU / PRG / 02', slug: 'complete-java-programming-masterclass-college', title: 'Java Course', blurb: 'Core Java to Spring Boot.' },
          { code: 'UNAU / PRG / 03', slug: 'cpp-programming-complete-masterclass-college', title: 'C++ Masterclass', blurb: 'Fundamentals to modern C++.' }
        ]
      },
      {
        num: 'II',
        h3: 'Theory and maths',
        sub: 'The second-year wall',
        courses: [
          {
            code: 'UNAU / THY / 01',
            slug: 'data-structures-algorithms-masterclass-college',
            title: 'Data Structures and Algorithms',
            blurb: 'The core of most degrees.'
          },
          { code: 'UNAU / THY / 02', slug: 'college-mathematics-complete-masterclass', title: 'University Maths', blurb: 'Calculus and linear algebra.' },
          { code: 'UNAU / THY / 03', slug: 'competitive-programming-masterclass-college', title: 'Competitive Programming', blurb: 'Speed and correctness.' }
        ]
      },
      {
        num: 'III',
        h3: 'Beyond the unit',
        sub: 'Projects and data',
        courses: [
          {
            code: 'UNAU / BYD / 01',
            slug: 'git-github-version-control-course-for-college-students',
            title: 'Git and GitHub',
            blurb: 'Team-ready version control.'
          },
          { code: 'UNAU / BYD / 02', slug: 'mysql-database-complete-masterclass-college', title: 'MySQL and Databases', blurb: 'Design and query.' },
          { code: 'UNAU / BYD / 03', slug: 'data-science-complete-masterclass-college', title: 'Data Science', blurb: 'Python, ML and deep learning.' }
        ]
      }
    ]
  },
  how: {
    eyebrow: 'How lessons run',
    h2: 'Lessons around a university timetable',
    lede: 'Our teachers are in India, where the day overlaps Australian afternoons and evenings comfortably. Each booking uses the student\'s own state time, adjusted whenever daylight saving starts or ends there.',
    slots: [
      { time: 'Weekday evening', l: 'After lectures and practicals.' },
      { time: 'Weekend', l: 'Longer sessions before a busy week.' },
      { time: 'Semester break', l: 'Foundations before the next unit.' }
    ],
    cells: [
      { h3: 'Free first class', p: 'A short concept check against the unit\'s public outline.' },
      { h3: 'Groups', p: 'Fifteen to twenty students, often from different universities.' },
      { h3: 'One to one', p: 'For one unit, one language or a repeat attempt.' },
      { h3: 'A week ahead', p: 'Concepts taught before the lecture covers them.' },
      { h3: 'Our own problems', p: 'Practice written by us, never taken from the unit.' },
      { h3: 'Integrity kept', p: 'No assessed work, in any form.' }
    ]
  },
  projectsH2: 'Software our students have released',
  projectsLede: 'Projects our learners built for themselves and published. The <a class="ag-inline-link" href="/student-labs">student labs</a> show more of them.',
  reviewsLede: 'Unedited reviews from our Google business profile, exactly as their authors posted them.',
  fees: {
    h2: 'Fees for university coding support',
    lede: 'University students in Australia pay one monthly fee in US dollars. There is no joining charge, and lessons can end with any month.',
    free: ['A concept check against your unit', 'An honest plan for the semester', 'No card required'],
    group: ['Fifteen to twenty students per group', 'Practice problems written by us', 'One teacher all semester', 'Leave at any month\'s end'],
    one: ['Built around one unit and language', 'Pace matched to the semester', 'Evening and weekend times']
  },
  faq: {
    eyebrow: 'Students ask',
    h2: 'Questions about coding support for university students',
    items: [
      {
        q: 'What is coding support for university students?',
        a: 'It is live teaching of the programming concepts a university unit expects, such as functions, recursion, data structures and testing, given alongside the unit and never on assessed work.'
      },
      {
        q: 'Will you help with my assignment?',
        a: 'No. We teach the concepts with our own examples and practice problems. We do not read, write, rewrite or debug assessed work, in line with university academic integrity rules.'
      },
      {
        q: 'Which language does my first-year unit use?',
        a: 'It varies. ANU\'s COMP1100 uses a functional language, Sydney\'s INFO1110 teaches procedural programming, and other universities differ again. Check your unit outline; we teach the concepts in that language.'
      },
      {
        q: 'Does renaming variables make copied code original?',
        a: 'No. In our experiment, a copy with every name changed matched only 20.0% of lines but 100.0% of structural fingerprints. Writing your own solution is the only real answer.'
      },
      {
        q: 'What is winnowing?',
        a: 'It is a way of fingerprinting documents or code: hash every short sequence of tokens and keep only the smallest hash in each window, so two texts can be compared by the fingerprints they share.'
      },
      { q: 'I study engineering, not computing. Can I join?', a: 'Yes. Many of our university students take one programming unit inside another degree.' },
      { q: 'Can lessons happen in the evening?', a: 'Yes. Evening and weekend lessons are arranged in your own state time.' },
      { q: 'How much does it cost?', a: 'The first class is free and needs no card. Monthly fees for groups and one-to-one lessons are in the fees section.' }
    ]
  },
  elsewhere: {
    eyebrow: 'Also on this site',
    h2: 'Related pages',
    lede: 'Language guides and other Australian pages.',
    items: [
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'The front door to every Australian guide.' },
      { href: '/java-classes-online-australia', label: 'Java classes online', p: 'For Java units and the equality contract.' },
      { href: '/understand-the-code-dont-copy-paste-australia', label: 'Understand the code', p: 'Why pasted code fails its own promises.' },
      { href: '/atar-explained-for-coding-students', label: 'ATAR explained for coding students', p: 'For those still choosing a course.' },
      { href: '/one-on-one-coding-tutor-australia', label: 'One-on-one coding tutor', p: 'Private lessons for one unit.' },
      { href: '/learn-to-think-not-just-use-ai-tools-australia', label: 'Learn to think with AI', p: 'Checking AI output instead of trusting it.' }
    ]
  },
  start: {
    h2: 'Book a free first class',
    lede: 'Tell us your unit code and a time to call. The first lesson checks one concept from the unit\'s public outline and ends with a semester plan.',
    readFirst: 'Before booking, you can read <a class="ag-inline-link" href="/how-we-teach">how our lessons are run</a> or scan <a class="ag-inline-link" href="/courses">the full catalogue</a>.',
    note: 'Our team works from India, so replies come from a +91 number; we keep no Australian office. On an Australian mobile, a WhatsApp message usually gets the quickest reply.',
    formNote: 'Free, no card, no obligation.'
  },
  footer: {
    cols: [
      {
        h4: 'Study',
        links: [
          { href: '/java-classes-online-australia', label: 'Java classes online' },
          { href: '/understand-the-code-dont-copy-paste-australia', label: 'Understand the code' },
          { href: '/problem-solving-through-coding-australia', label: 'Problem solving through coding' },
          { href: '/how-we-teach', label: 'How we teach' }
        ]
      },
      {
        h4: 'Australia',
        links: [
          { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
          { href: '/atar-explained-for-coding-students', label: 'ATAR for coding students' },
          { href: '/australian-student-hackathons', label: 'Student hackathons' },
          { href: '/one-on-one-coding-tutor-australia', label: 'One-on-one coding tutor' }
        ]
      }
    ],
    bottomRight: 'Your own code, every time'
  },
  personalityCss: `
.ag-root.ag-unau .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-unau .ag-capsule { border-left-width: 4px; border-radius: 2px; }
.ag-root.ag-unau .ag-section-head h2 { max-width: 36ch; }
.ag-root.ag-unau .ag-table caption { text-align: left; font-weight: 650; }
.ag-root.ag-unau .ag-band-head h3 { letter-spacing: -0.006em; }
.ag-root.ag-unau .ag-slots { gap: 0.8rem; }
`,
  dossier: {
    curriculumAuthority: 'Australian universities, first-year programming. ANU COMP1100 ("using a functional programming language"; Haskell reading list; Turnitin statement) and COMP1110 (integrity, AI and authorship of code outcome); University of Sydney INFO1110 (procedural programming; LO9 tests); UQ CSSE1001 (exploratory problem-based approach; 2 units; 8 units per semester standard load; Semester 1, 2027 22/02/2027 to 19/06/2027; weekly class hours); Monash FIT1045 (programming fundamentals; design, construct and test).',
    localProject: 'Code similarity on normalised tokens with winnowing (k 5, window 4) versus difflib line and character similarity, seven Python programs written by us: identical 100/100/100; renamed 20.0% lines, 40.7% chars, 100.0% fingerprints; disguised 16.9%/14.6%/72.7%; independent manual 15.4%/12.5%/16.0%; independent Counter 12.1%/6.2%/7.8%; unrelated 6.5%/21.0%/1.4%. Plain diff suffices for verbatim copies (simple baseline wins there). Lesson family: winnowing code similarity.',
    requiredMentions: [
      'using a functional programming language, to solve problems',
      'Understand their ethical responsibilities as a programmer with respect to Academic integrity, the use of Artificial Intelligence and authorship of code',
      'to assess assignment submissions as a component of the University\'s approach to managing Academic Integrity',
      'Students will obtain knowledge and skills with procedural programming',
      'using an exploratory problem-based approach',
      'A standard study load is 8 units per semester',
      'This unit introduces programming fundamentals',
      'renamed is not different',
      'CSSE1001'
    ],
    sources: [
      {
        claim: 'ANU, COMP1100 (2026): functional programming language learning outcome; Haskell reading list; Turnitin statement.',
        url: 'https://programsandcourses.anu.edu.au/2026/course/COMP1100'
      },
      {
        claim: 'ANU, COMP1110 (2026): outcome on academic integrity, the use of Artificial Intelligence and authorship of code.',
        url: 'https://programsandcourses.anu.edu.au/2026/course/COMP1110'
      },
      {
        claim: 'University of Sydney, INFO1110: procedural programming; LO9 tests for a small program or function.',
        url: 'https://www.sydney.edu.au/units/INFO1110'
      },
      {
        claim: 'UQ, CSSE1001: exploratory problem-based approach; 2 units; standard study load 8 units per semester; Semester 1, 2027 dates; weekly class hours.',
        url: 'https://programs-courses.uq.edu.au/course.html?course_code=CSSE1001'
      },
      {
        claim: 'Monash, FIT1045 (2026): synopsis and learning outcome on designing, constructing and testing programs.',
        url: 'https://handbook.monash.edu/2026/units/FIT1045'
      }
    ],
    rejectedClaims: [
      'UNSW COMP1511: the handbook URL served a pre-2019 shell page with no unit content, so UNSW is not described.',
      'University of Melbourne COMP10001: refused by a bot challenge to curl\'s default agent; not used and not circumvented.',
      'Which similarity software any university uses for code: not read raw anywhere; the page says our experiment is not a description of any university\'s tool.',
      'Graduate outcomes, job rates or salaries: no job or money figures on this page.',
      'TEQSA guidance on generative AI: the host did not answer from this network, so it is not cited.'
    ]
  }
};
