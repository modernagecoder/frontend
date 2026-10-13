'use strict';
// Java classes online, Australia (ag- language and track door; AU cluster Phase 9, row 359).
// Intent: Australians from about 13 to 67 searching for live online Java lessons: teens moving to an
// object-oriented language, university students in a Java unit, and adults who want Java for work.
// Sources, read raw on 13 October 2026 (curl, default agent):
//  - UQ, CSSE2002 Programming in the Large (course page, Semester 1, 2027 entry): "concepts and techniques in modern
//    programming languages that help support good practice (such as OO concepts, genericity and exception handling)
//    with specific application to file IO and GUIs in Java."; 2 units; one semester; lecture 2 hours a week.
//  - University of Sydney, INFO1113 unit page: LO2 "reading, tracing and writing competence with the following
//    elements of Java programming language"; LO8 "Demonstrate experience with common interfaces and collections in
//    Java."
//  - ANU, COMP1110 (2026): "an industrial-strength object-oriented programming language"; "key standard data
//    structures, including lists, trees, hash tables, and graphs".
//  - Monash, FIT2099 handbook synopsis (2026): "will learn how to implement your designs using at least one".
//  - ACARA, Australian Curriculum v9, Digital Technologies 7-10 (.docx): Years 9-10 band "including in an
//    object-oriented programming language"; AC9TDI10P09 elaborations "defining their own classes to model and define
//    the actions that can be performed on data in their programs" (the book class example) and "such as Python,
//    JavaScript or C#" (Java is not named).
// Lesson family: the equals/hashCode contract. Our run (Java 22.0.1, seed 20261013): 1,000 loans of 120 titles
// (119 borrowed). equals only: HashSet size 1,000, contains 0 of 120, ArrayList.contains 119 of 120; constant
// hashCode: 119 but 59,671 equals calls; matching hashCode: 119 and 881 calls; record with title: blank-title
// lookup 0 of 120; plain String ISBN set: 119, the simplest and correct.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: {
    group: 'guide',
    tag: 'JAVA, ONLINE',
    blurb: 'Java classes online for Australians from 13 to 67: objects, collections and the equality contract, for school, university and work.'
  },
  slug: 'java-classes-online-australia',
  code: 'jvau',
  accent: '#8A525E',
  accentRationale: 'Java classes online, Australia: a muted dusty rose computed for the national doors, at least 20 RGB from every national AU accent, at least 10 from every AU accent and 6 from every colour in use',
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
  routeLabel: 'Java classes online, Australia',
  title: 'Java Classes Online in Australia | Teens, Uni and Adults',
  description: 'Live online Java classes for Australians aged 13 to 67: classes, collections, testing and the equals and hashCode contract, taught step by step. First class free.',
  ogDescription: 'A HashSet that should hold 119 books held 1,000. How our Java classes teach the equals and hashCode contract, with the run and every number shown.',
  twitterDescription: 'Java classes online for Australian teens, uni students and adults: objects, collections and testing, taught live. First class free.',
  pageName: 'Java Classes Online in Australia',
  webPageDescription: 'A guide to learning Java online from Australia: where Java appears in school and university, what a Java course covers, and a worked example on equality in Java collections.',
  courseDescription: 'Live online Java classes for Australians aged 13 to 67, from first classes and objects to collections, generics, exceptions and testing.',
  crumbs: [
    { name: 'Courses', href: '/courses' },
    { name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }
  ],
  crumbLabel: 'Java classes online',
  navLinks: [
    { href: '#where', label: 'Where Java sits' },
    { href: '#contract', label: 'A worked example' },
    { href: '#course', label: 'The course' },
    { href: '#first', label: 'Java or Python' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Ages 13 to 67 &middot; Java, live online',
  h1: 'Java classes online',
  lede: 'Java rarely appears on a primary school timetable in Australia, yet it is waiting for many students later on: in a second-year software unit, in an Android project, or in a job that runs on a large Java codebase. Our live online Java classes are for teenagers ready for a strongly typed, object-oriented language, for university students taking a Java unit this semester, and for adults who need Java at work. Lessons cover classes and objects, collections, interfaces, exceptions and tests, and every concept is run, broken and fixed on screen. Below we show where Java sits in Australian education, work through one bug that catches nearly every Java learner, and set out what a course looks like week by week.',
  secondaryCta: { href: '#contract', label: 'See the worked example' },
  wa: 'Hello Modern Age Coders, I am in Australia and interested in live online Java classes. Could we book a free first class?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Java taught by running and testing real code',
  spec: [
    ['For', 'Ages 13 to 67'],
    ['Language', 'Java, current long-term release'],
    ['Core', 'Classes, collections, interfaces'],
    ['Habit', 'Tests written alongside code'],
    ['Uni support', 'Concepts, never assessed work'],
    ['Format', 'Live online lessons'],
    ['Group', 'Five to ten, or one to one'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Java classes online teach Java, a strongly typed object-oriented language, through live lessons over video. Students write classes, use collections such as lists, sets and maps, handle exceptions and write tests. In Australia, Java appears mainly at university, for example in UQ\'s CSSE2002 and Sydney\'s INFO1113, rather than in school syllabuses. Modern Age Coders runs these Java lessons live for Australians aged 13 to 67, as a small class or privately, starting with a free trial lesson.',
  picks: {
    eyebrow: 'Start here',
    h2: 'Three Java courses, matched to where you are',
    lede: 'One for teenagers, one for university students and adults, and one for the data structures every Java unit leans on. Each card opens the full syllabus.',
    items: [
      {
        course: 'java-programming-masterclass-for-teens',
        code: 'JVAU / 01',
        title: 'Java for Teens',
        note: 'Beginner to advanced for ages 13 to 18: variables and loops first, then classes, collections and small projects.'
      },
      {
        course: 'complete-java-programming-masterclass-college',
        code: 'JVAU / 02',
        title: 'Java Course for University and Adults',
        note: 'Core Java to Spring Boot: object-oriented design, generics, exceptions, testing and a working web service.'
      },
      {
        course: 'data-structures-algorithms-masterclass-college',
        code: 'JVAU / 03',
        title: 'Data Structures and Algorithms',
        note: 'Lists, trees, hash tables and graphs, with the complexity reasoning that second-year units expect.'
      }
    ]
  },
  sections: [
    {
      id: 'where',
      tint: 'tint',
      eyebrow: 'Where Java sits',
      h2: 'Java in Australian schools and universities',
      lede: 'Knowing where a language is actually used saves a lot of wasted effort. Java\'s home in Australia is the university software unit, not the school syllabus.',
      body: [
        {
          kind: 'p',
          html: 'The Australian Curriculum asks Year 9 and 10 students to implement programs "including in an object-oriented programming language", but its own examples of suitable languages are Python, JavaScript and C#. Java is allowed, not named. Universities are different. Several name Java outright in their unit outlines, and others describe a language that, in practice, students meet as Java or something very close to it.'
        },
        {
          kind: 'table',
          caption: 'Where Java appears, read at each institution on 13 October 2026',
          head: ['Where', 'What the official page says', 'What it means for a learner'],
          rows: [
            [
              'Australian Curriculum, Years 9 and 10',
              'Students implement algorithms "including in an object-oriented programming language"; listed examples are Python, JavaScript or C#',
              'Object-oriented ideas start at school; Java itself is optional'
            ],
            [
              'UQ, CSSE2002 Programming in the Large',
              'Good practice "with specific application to file IO and GUIs in Java"',
              'A full Java unit, one semester, 2 units'
            ],
            [
              'University of Sydney, INFO1113',
              'LO8: "Demonstrate experience with common interfaces and collections in Java."',
              'Collections are an explicit learning outcome'
            ],
            [
              'ANU, COMP1110',
              'An "industrial-strength object-oriented programming language" and "lists, trees, hash tables, and graphs"',
              'Hash tables appear in the first year'
            ],
            [
              'Monash, FIT2099',
              'Students implement designs "using at least one" object-oriented language',
              'Design comes first; the language serves it'
            ]
          ]
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'What the outlines have in common',
          left: [
            'Every one of these units cares about classes that model real things, collections that hold them, and tests that prove the code works. Syntax is the easy part; the hard part is the set of rules a class must follow so that the rest of Java treats it correctly.',
            'That is why our Java course spends more time on equality, interfaces and testing than on memorising keywords.'
          ],
          rightH3: 'What we will not do',
          right: [
            'University assignments are the student\'s own work under each university\'s academic integrity rules. We teach the concepts behind an assignment with our own examples and never write, rewrite or debug assessed code.',
            'Students who bring a unit outline get a plan built around its topics and its order.'
          ]
        },
        {
          kind: 'source',
          html: 'Sources, read 13 October 2026: <a class="ag-inline-link" href="https://programs-courses.uq.edu.au/course.html?course_code=CSSE2002" rel="noopener" target="_blank">UQ CSSE2002</a>; <a class="ag-inline-link" href="https://www.sydney.edu.au/units/INFO1113" rel="noopener" target="_blank">University of Sydney INFO1113</a>; <a class="ag-inline-link" href="https://programsandcourses.anu.edu.au/2026/course/COMP1110" rel="noopener" target="_blank">ANU COMP1110</a>; <a class="ag-inline-link" href="https://handbook.monash.edu/2026/units/FIT2099" rel="noopener" target="_blank">Monash FIT2099</a>; ACARA, <a class="ag-inline-link" href="https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx" rel="noopener" target="_blank">Digital Technologies Years 7 to 10</a>.'
        }
      ]
    },
    {
      id: 'contract',
      tint: 'deep',
      eyebrow: 'A worked example',
      h2: 'The library that lent 119 books and counted 1,000',
      lede: 'The Australian Curriculum gives a familiar exercise for object-oriented programming: a class for a book in a library system. We built one and ran it, because it hides the most common bug in Java collections.',
      body: [
        {
          kind: 'p',
          html: 'ACARA\'s elaboration describes students "defining their own classes to model and define the actions that can be performed on data in their programs", with a book that stores an author, title and publisher. Our version keeps an ISBN and a title. We generated 1,000 loans spread across 120 titles with a fixed random seed (119 titles were borrowed at least once) and added a new <code>Book</code> object for each loan to a <code>HashSet</code>, expecting one entry per title. Then we changed one thing at a time.'
        },
        {
          kind: 'table',
          caption: 'Our run, Java 22.0.1, 1,000 loans of 120 titles (our calculation)',
          head: ['Version of the Book class', 'Set size', 'Lookups that found the book', 'equals() calls while adding'],
          numCols: [
            1,
            3
          ],
          rows: [
            ['equals() compares ISBNs, hashCode() not written', '1,000', '0 of 120', '0'],
            ['equals() plus hashCode() that always returns 1', '119', '119 of 120', '59,671'],
            ['equals() plus hashCode() built from the ISBN', '119', '119 of 120', '881'],
            ['A record holding ISBN and title, looked up by ISBN with a blank title', '119', '0 of 120', 'not counted'],
            ['No class at all: a set of ISBN strings', '119', '119 of 120', 'not needed']
          ]
        },
        {
          kind: 'three',
          mt: true,
          cells: [
            {
              h3: 'Why the first set grew to 1,000',
              p: 'A <code>HashSet</code> files each object under its hash code before it ever calls <code>equals()</code>. Without our own <code>hashCode()</code>, every new Book got the default identity hash, landed in a different place, and was never compared. The set called <code>equals()</code> zero times.'
            },
            {
              h3: 'Why the list disagreed',
              p: 'An <code>ArrayList</code> searches by calling <code>equals()</code> on each element, so <code>contains()</code> found 119 of 120 titles in the very same data. Two collections gave opposite answers to one question, which is exactly how this bug hides in real projects.'
            },
            {
              h3: 'Why "correct" can still be slow',
              p: 'A hash code of 1 for everything is legal and gives the right answer, but every insert compares against everything already stored: 59,671 calls instead of 881. Correctness and speed are separate tests.'
            }
          ]
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'The record surprise',
          left: [
            'Java records generate <code>equals()</code> and <code>hashCode()</code> for you, from every component. Our record held the ISBN and the title, so a lookup with the right ISBN and a blank title failed all 120 times. The record kept the contract perfectly; it simply defined "the same book" differently from the librarian.',
            'The lesson is to decide what identity means before choosing how to write it.'
          ],
          rightH3: 'When the simple baseline wins',
          right: [
            'If all a program needs is "which titles were borrowed and how often", a set or map keyed by the ISBN string is correct, shorter and needs no custom class: it reported 119 titles, with loan counts from 2 to 16.',
            'A <code>Book</code> class earns its place only when books carry behaviour, such as due dates and holds. We teach students to try the plain version first and to say so when it is enough.'
          ]
        },
        {
          kind: 'p',
          mt: true,
          html: 'The run is ours, the seed is fixed (20261013) and the code is short enough for students to rebuild in one lesson. Changing the seed changes the loan counts, not the shape of the result.'
        }
      ]
    },
    {
      id: 'course',
      tint: 'tint',
      eyebrow: 'The course',
      h2: 'What a Java course covers, in order',
      lede: 'The order matters more than the speed. Each stage depends on the one before, and the equality contract sits in the middle where students first need it.',
      body: [
        {
          kind: 'table',
          caption: 'Stages of our Java course',
          head: ['Stage', 'Topics', 'A typical exercise'],
          rows: [
            [
              '1. Typed basics',
              'Types, variables, loops, methods, arrays, reading compiler errors',
              'A quiz scorer that rejects text where a number belongs'
            ],
            [
              '2. Classes and objects',
              'Fields, constructors, encapsulation, references and the memory model',
              'A step counter class, then two references to one object'
            ],
            [
              '3. Equality and collections',
              'equals, hashCode, records, List, Set, Map, iteration',
              'The library loans run above, rebuilt and extended'
            ],
            [
              '4. Interfaces and inheritance',
              'Interfaces, abstract classes, polymorphism, when not to inherit',
              'Shapes that share an area method without sharing code'
            ],
            [
              '5. Generics and exceptions',
              'Type parameters, checked and unchecked exceptions, try-with-resources',
              'A typed queue that refuses the wrong element type'
            ],
            [
              '6. Testing',
              'JUnit tests, invariants, boundary cases, test-first fixes',
              'Tests that would have caught the 1,000-book set'
            ],
            [
              '7. Files and beyond',
              'File input and output, simple GUIs or a small web service',
              'A loan log saved to disk and read back'
            ]
          ]
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'Why testing comes early',
          left: [
            'A single test, "adding two equal books leaves the set at size one", fails instantly on the broken class. Students who write that test once tend to write it forever.',
            'The University of Sydney outline lists testing and debugging object-oriented programs as outcomes in their own right, and so do we.'
          ],
          rightH3: 'Which Java version',
          right: [
            'We teach a current long-term support release, so records and pattern matching are available. Students on a university machine with an older version are shown what changes and how to check.',
            'Tools are free: an editor or IDE, a terminal and the Java development kit.'
          ]
        }
      ]
    },
    {
      id: 'first',
      tint: 'deep',
      eyebrow: 'Java or Python',
      h2: 'Should Java be your first language?',
      lede: 'For most children, no. For some teenagers and many adults, it is a fine start. The honest answer depends on age, goals and patience with error messages.',
      body: [
        {
          kind: 'table',
          caption: 'Choosing a first text language',
          head: ['Situation', 'Our usual advice', 'Why'],
          rows: [
            ['Primary school child', 'Scratch, then Python', 'Java\'s ceremony gets in the way of early ideas'],
            ['Teen with some Python', 'Java next, for objects and types', 'Strong typing makes object-oriented design visible'],
            ['Teen new to text coding', 'Either; Python is gentler', 'Both lead to the same concepts'],
            ['University student in a Java unit', 'Java now, alongside the unit', 'Match the language the unit assesses'],
            ['Adult aiming at enterprise or Android work', 'Java early', 'Large codebases and Android tooling use it heavily'],
            ['Adult automating everyday tasks', 'Python first', 'Shorter scripts, faster payoff']
          ]
        },
        {
          kind: 'p',
          mt: true,
          html: 'Students who start with Python lose nothing. Our <a class="ag-inline-link" href="/python-ai-course-for-kids-australia">Python AI course for kids</a> and the <a class="ag-inline-link" href="/after-scratch-next-step-python-australia">next step after Scratch</a> cover the younger end. Teenagers choosing senior subjects can read our guide to <a class="ag-inline-link" href="/choosing-year-11-computing-subjects-australia">Year 11 computing subjects</a>.'
        }
      ]
    },
    {
      id: 'who',
      tint: '',
      eyebrow: 'Who joins',
      h2: 'Three kinds of Java student',
      lede: 'The same language, taught three ways.',
      body: [
        {
          kind: 'three',
          cells: [
            {
              h3: 'Teenagers, 13 to 18',
              p: 'Usually after some Python or JavaScript. Projects are games, quizzes and small simulations, and the object-oriented ideas from Years 9 and 10 get real practice.'
            },
            {
              h3: 'University students',
              p: 'Concept lessons running a week ahead of the unit: references, collections, interfaces and testing, with our own examples and never the assignment.'
            },
            {
              h3: 'Adults, up to 67',
              p: 'Java for a job that uses it, a move towards Android, or a structured second language. Lessons fit around work, and the pace follows the person.'
            }
          ]
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Progress',
    h2: 'Four levels of Java skill',
    lede: 'Weekly lessons usually reach the third level within two to three terms.',
    table: {
      caption: 'From first class to confident Java',
      head: ['Level', 'What you can do'],
      rows: [
        ['1. Reader', 'Follow a short Java program and predict what it prints'],
        ['2. Writer', 'Write classes with constructors, fields and methods that compile first time more often than not'],
        ['3. Collector', 'Choose between List, Set and Map, and write equals and hashCode that agree'],
        ['4. Tester', 'Prove a class works with JUnit tests, including the boundary cases']
      ]
    },
    left: {
      h3: 'Is Java too hard for a 13 year old?',
      ps: [
        'Not for one who already writes simple Python or JavaScript. The extra rules feel strict at first and then become a safety net.',
        'Complete beginners at 13 are often happier starting with Python and moving to Java a term later.'
      ]
    },
    right: {
      h3: 'Can adults with no coding start with Java?',
      ps: [
        'Yes. Adults are usually patient with structure, and Java rewards that.',
        'The first month goes slower than in Python; the second month often goes faster.'
      ]
    }
  },
  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Java and related courses',
    lede: 'Nine courses in three bands. Most Java learners take two of them, one after the other.',
    bands: [
      {
        num: 'I',
        h3: 'Java itself',
        sub: 'Teens to adults',
        courses: [
          { code: 'JVAU / JAV / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for Teens', blurb: 'Beginner to advanced, 13 to 18.' },
          {
            code: 'JVAU / JAV / 02',
            slug: 'complete-java-programming-masterclass-college',
            title: 'Java Course for University and Adults',
            blurb: 'Core Java to Spring Boot.'
          },
          {
            code: 'JVAU / JAV / 03',
            slug: 'complete-kotlin-programming-masterclass-professional',
            title: 'Kotlin and Android',
            blurb: 'The JVM language Android favours.'
          }
        ]
      },
      {
        num: 'II',
        h3: 'Thinking in structures',
        sub: 'For Java units',
        courses: [
          {
            code: 'JVAU / DSA / 01',
            slug: 'data-structures-algorithms-masterclass-college',
            title: 'Data Structures and Algorithms',
            blurb: 'Hash tables, trees, graphs.'
          },
          { code: 'JVAU / DSA / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem Solving for Teens', blurb: 'Logic and algorithms, 13 to 18.' },
          {
            code: 'JVAU / DSA / 03',
            slug: 'competitive-programming-masterclass-college',
            title: 'Competitive Programming',
            blurb: 'Speed and correctness together.'
          }
        ]
      },
      {
        num: 'III',
        h3: 'Around the code',
        sub: 'Habits that last',
        courses: [
          {
            code: 'JVAU / ARD / 01',
            slug: 'git-github-version-control-course-for-college-students',
            title: 'Git and GitHub for Students',
            blurb: 'Version control for team work.'
          },
          {
            code: 'JVAU / ARD / 02',
            slug: 'mysql-database-complete-masterclass-college',
            title: 'MySQL and Database Design',
            blurb: 'Where Java data usually lives.'
          },
          {
            code: 'JVAU / ARD / 03',
            slug: 'python-programming-masterclass-zero-to-advanced-college',
            title: 'Python Masterclass',
            blurb: 'The second language, or the first.'
          }
        ]
      }
    ]
  },
  how: {
    eyebrow: 'How lessons run',
    h2: 'When Java lessons happen',
    lede: 'Our teachers work from India, whose day runs alongside the Australian afternoon and evening. We fix each lesson in the student\'s local state time and move it with daylight saving where that state uses it.',
    slots: [
      { time: 'After school', l: 'Weekday lessons for teenagers.' },
      { time: 'Early evening', l: 'For university students and adults, by arrangement.' },
      { time: 'Weekend', l: 'Longer sessions for projects and testing.' }
    ],
    cells: [
      { h3: 'Free first class', p: 'A short Java exercise and an honest view of the right starting stage.' },
      { h3: 'Small groups', p: 'Five to ten students reading each other\'s code.' },
      { h3: 'One to one', p: 'For a unit, a job or a specific project.' },
      { h3: 'Code by the student', p: 'Teachers guide; students type, run and explain.' },
      { h3: 'Tests as standard', p: 'Every class a student writes gets at least one test.' },
      { h3: 'Integrity first', p: 'We never write assessed university or school work.' }
    ]
  },
  projectsH2: 'Code our students have published',
  projectsLede: 'A few things our learners have shipped and left online for anyone to try. More sit in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Copied word for word from our public Google listing. We do not edit or select reviews to suit a topic.',
  fees: {
    h2: 'Fees for Java classes online',
    lede: 'Java lessons are billed monthly in US dollars for learners in Australia. There is no enrolment charge, and a family or adult learner can leave at the end of any month.',
    free: ['A short Java exercise', 'Advice on the right starting stage', 'No card or bank details'],
    group: ['Five to ten students per class', 'Code reviews within the group', 'A regular teacher', 'Stop after any month'],
    one: ['Lessons around one student\'s goals', 'Unit-aligned or work-aligned plans', 'Times around study and work']
  },
  faq: {
    eyebrow: 'Students and parents ask',
    h2: 'Questions about Java classes online in Australia',
    items: [
      {
        q: 'What are Java classes online?',
        a: 'They are live lessons over video in which students learn the Java programming language, from types and classes to collections, exceptions and testing, writing and running their own code each lesson.'
      },
      {
        q: 'Is Java taught in Australian schools?',
        a: 'The Australian Curriculum asks Year 9 and 10 students to program in an object-oriented language, with Python, JavaScript or C# as its examples. Java is permitted but not named, so most students meet it at university.'
      },
      {
        q: 'Which Australian universities teach Java?',
        a: 'Among the pages we read, UQ\'s CSSE2002 applies its content to file input and output and GUIs in Java, and the University of Sydney\'s INFO1113 lists Java collections as a learning outcome.'
      },
      {
        q: 'What is the equals and hashCode contract?',
        a: 'Objects that are equal must return the same hash code. If a class overrides equals but not hashCode, hash-based collections such as HashSet treat equal objects as different, as our 1,000-book run showed.'
      },
      {
        q: 'Can you help with my university Java assignment?',
        a: 'We teach the concepts the assignment uses, with our own examples. We never write, rewrite or debug assessed work, and we follow each university\'s academic integrity rules.'
      },
      {
        q: 'What age can a student start Java?',
        a: 'Around 13 for a student who already writes some Python or JavaScript. Younger children usually do better with Scratch and then Python first.'
      },
      { q: 'Do I need to install anything?', a: 'A free Java development kit and an editor. We help set both up in the first lesson.' },
      {
        q: 'Is Java useful for Android apps?',
        a: 'Android development accepts Java, and Kotlin runs on the same platform. Our Kotlin and Android course follows on naturally.'
      },
      { q: 'What does it cost?', a: 'The first class is free and needs no card. Monthly group and one-to-one fees are shown in the fees section above.' }
    ]
  },
  elsewhere: {
    eyebrow: 'Also on this site',
    h2: 'Related pages',
    lede: 'Other language guides and our wider Australian pages.',
    items: [
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'The national guide to every Australian page.' },
      { href: '/kids-coding-languages-australia', label: 'Coding languages for kids', p: 'Which language when, from Scratch upwards.' },
      { href: '/choosing-year-11-computing-subjects-australia', label: 'Year 11 computing subjects', p: 'Senior subject choices state by state.' },
      { href: '/one-on-one-coding-tutor-australia', label: 'One-on-one coding tutor', p: 'Private lessons around one learner.' },
      { href: '/online-coding-tutor-australia', label: 'Online coding tutor', p: 'What to check before booking.' },
      { href: '/game-programming-course-australia', label: 'Game programming course', p: 'Where many teens first meet objects.' }
    ]
  },
  start: {
    h2: 'Book a free first Java class',
    lede: 'Leave a name and number and say roughly when a call suits. In the trial lesson the student writes and runs a little Java, and we finish by naming the stage that fits.',
    readFirst: 'Want detail first? Read <a class="ag-inline-link" href="/how-we-teach">our teaching method</a> or browse <a class="ag-inline-link" href="/courses">every course we run</a>.',
    note: 'Messages are answered by our team in India, which is why the number starts with +91. We have no office in Australia; WhatsApp from an Australian mobile is usually the fastest route.',
    formNote: 'Free, no card, no obligation.'
  },
  footer: {
    cols: [
      {
        h4: 'Languages',
        links: [
          { href: '/kids-coding-languages-australia', label: 'Coding languages for kids' },
          { href: '/after-scratch-next-step-python-australia', label: 'After Scratch: Python' },
          { href: '/game-programming-course-australia', label: 'Game programming' },
          { href: '/how-we-teach', label: 'How we teach' }
        ]
      },
      {
        h4: 'Australia',
        links: [
          { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
          { href: '/choosing-year-11-computing-subjects-australia', label: 'Year 11 computing subjects' },
          { href: '/one-on-one-coding-tutor-australia', label: 'One-on-one coding tutor' },
          { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' }
        ]
      }
    ],
    bottomRight: 'Equal objects, equal hash codes'
  },
  personalityCss: `
.ag-root.ag-jvau .ag-hero h1 { letter-spacing: -0.017em; }
.ag-root.ag-jvau .ag-capsule { border-left-width: 5px; border-radius: 3px; }
.ag-root.ag-jvau .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-jvau .ag-table caption { text-align: left; font-weight: 640; }
.ag-root.ag-jvau .ag-band-head h3 { letter-spacing: -0.008em; }
.ag-root.ag-jvau .ag-slots { gap: 0.9rem; }
`,
  dossier: {
    curriculumAuthority: 'Australia, Years 9 and 10 and university. ACARA, Australian Curriculum v9, Digital Technologies 7-10 (Word download): Years 9-10 band "including in an object-oriented programming language"; AC9TDI10P09 elaborations "defining their own classes to model and define the actions that can be performed on data in their programs" and "such as Python, JavaScript or C#". UQ CSSE2002 Programming in the Large; University of Sydney INFO1113 LO2 and LO8; ANU COMP1110; Monash FIT2099.',
    localProject: 'The equals/hashCode contract on a library loans model (our run, Java 22.0.1, seed 20261013, 1,000 loans of 120 titles, 119 borrowed): equals only gave a HashSet of 1,000 and 0 of 120 lookups (ArrayList.contains 119 of 120); constant hashCode 119 with 59,671 equals calls; matching hashCode 119 with 881; a record with title failed all 120 blank-title lookups; a plain String ISBN set (the simple baseline, which wins) 119. Lesson family: equals/hashCode contract.',
    requiredMentions: [
      'with specific application to file IO and GUIs in Java',
      'Programming in the Large',
      'Demonstrate experience with common interfaces and collections in Java',
      'INFO1113',
      'CSSE2002',
      'lists, trees, hash tables, and graphs',
      'defining their own classes to model and define the actions that can be performed on data in their programs',
      '59,671',
      'The library that lent 119 books and counted 1,000'
    ],
    sources: [
      {
        claim: 'UQ, CSSE2002 Programming in the Large: good practice "with specific application to file IO and GUIs in Java"; 2 units; one semester.',
        url: 'https://programs-courses.uq.edu.au/course.html?course_code=CSSE2002'
      },
      {
        claim: 'University of Sydney, INFO1113: LO2 Java programming competence; LO8 "Demonstrate experience with common interfaces and collections in Java."',
        url: 'https://www.sydney.edu.au/units/INFO1113'
      },
      {
        claim: 'ANU, COMP1110: "an industrial-strength object-oriented programming language"; "lists, trees, hash tables, and graphs".',
        url: 'https://programsandcourses.anu.edu.au/2026/course/COMP1110'
      },
      {
        claim: 'Monash, FIT2099 synopsis: implement designs "using at least one" modern object-oriented language.',
        url: 'https://handbook.monash.edu/2026/units/FIT2099'
      },
      {
        claim: 'ACARA, Digital Technologies 7-10 v9: Years 9-10 band and AC9TDI10P09 elaborations (book class; Python, JavaScript or C#).',
        url: 'https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx'
      }
    ],
    rejectedClaims: [
      'UNSW COMP2511 language: the handbook page is rendered by script and the raw HTML did not state the language, so it is not named.',
      'University of Melbourne subject pages: refused by a bot challenge to curl\'s default agent; not used and not circumvented.',
      'Job demand or salary figures for Java developers: no money or job promises on this page.',
      'Senior secondary syllabuses in Queensland and Western Australia: their authority pages returned 403 and were not used.',
      'Timing measurements: wall-clock times vary by machine, so the page reports deterministic counts of equals() calls instead.'
    ]
  }
};
