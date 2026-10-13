'use strict';
// C++ classes online, Australia (ag- language door; AU cluster Phase 9, AU-P9B).
// Intent: Australians of any age (teens and adults) searching for online C++ classes: the language itself, memory and
// performance, the standard library, and its uses in contests, games and systems. Distinct from
// competitive-programming-australia (contest skill, any language) and the AIO pages (linked).
// Sources, read raw on 14 October 2026:
//  - Australian Maths Trust, Australian Informatics Olympiad: "Allowed languages are C, C++, Java or Python 3."
//  - ACARA, Australian Curriculum v9, Digital Technologies 7-10: AC9TDI10P09 "implement, modify and debug modular
//    programs, applying selected algorithms and data structures, including in an object-oriented programming language".
//  - cppreference, reference declaration: "Declares a named variable as a reference, that is, an alias to an
//    already-existing object or function." and "References are not objects".
// Lesson family: pass by value vs const reference. Our benchmark (MinGW g++ 6.3 -O2, Windows laptop): a
// std::vector<std::string> of 17,218 station names from Transport for NSW's monthly usage file (CC BY), counted 2,000
// times; best of five runs: by value 2,766 ms, by const reference 31.3 ms. An int passed 50,000,000 times: by value
// 21.6 to 40.8 ms, by const reference 20.8 to 44.9 ms across five runs, no consistent difference.

module.exports = {
  "cluster": "ag",
  "clusterName": "Australia",
  "hub": {
    "group": "guide",
    "tag": "C++",
    "blurb": "C++ classes online for Australians: the language, memory and speed, the standard library, and where C++ is used."
  },
  "slug": "c-plus-plus-classes-online-australia",
  "code": "cppa",
  "accent": "#5C3620",
  "accentRationale": "C++ classes online, Australia: a dark walnut brown (hue 22.0), 8.51:1 on #EDE7DA; 23.0 RGB from the nearest national AU accent, 11.7 from any other Australian accent and 6.8 from every other site colour",
  "pageType": "market",
  "market": {
    "name": "Australia",
    "iso": "AU",
    "dial": "+61",
    "lang": "en-AU",
    "locale": "en_AU",
    "geoRegion": "AU",
    "brandTag": "AU",
    "phoneLabel": "Australian mobile number",
    "phonePlaceholder": "491 570 156",
    "gradeLabel": "Year level or age",
    "minDigits": 9,
    "stripTrunk": true
  },
  "routeLabel": "C++ classes online, Australia",
  "title": "C++ Classes Online in Australia | Modern C++ from Zero",
  "description": "Live online C++ classes for Australian teens and adults: modern C++, memory, the standard library and fast code, in small groups or one to one. First class free.",
  "ogDescription": "One missing ampersand made a C++ function about 88 times slower on 17,218 rows of station names. What Australian learners discover in our online C++ classes.",
  "twitterDescription": "C++ classes online for Australians: modern C++, memory, the STL and speed. Live online, first class free.",
  "pageName": "C++ Classes Online in Australia",
  "webPageDescription": "A guide to learning C++ online in Australia, from first programs to the standard library and performance, with a measured pass-by-reference example.",
  "courseDescription": "Live online C++ lessons for Australian teens and adults: core language, references and memory, the standard library, object-oriented design and performance.",
  "crumbs": [
    {
      "name": "Courses",
      "href": "/courses"
    },
    {
      "name": "Coding classes in Australia",
      "href": "/coding-classes-in-australia"
    }
  ],
  "crumbLabel": "C++ classes online",
  "navLinks": [
    {
      "href": "#why",
      "label": "Why C++"
    },
    {
      "href": "#copy",
      "label": "A worked example"
    },
    {
      "href": "#learn",
      "label": "What we teach"
    },
    {
      "href": "#uses",
      "label": "Where it is used"
    },
    {
      "href": "#fees",
      "label": "Fees"
    }
  ],
  "eyebrow": "Australia &middot; Ages 13 to adult &middot; Modern C++",
  "h1": "C++ classes online",
  "lede": "C++ gives a programmer control that most languages hide: where data lives in memory, when it is copied, and how much each line costs. That control is why it is used for games, simulations, contest programming and systems software, and why small mistakes can be expensive. In our classes, Australian teenagers and adults work through modern C++ over live video, starting with a first program and ending with the standard library and their own classes. This page shows what we cover, measures what one missing character costs, and explains where C++ fits for Australian students and adults.",
  "secondaryCta": {
    "href": "#copy",
    "label": "See the worked example"
  },
  "wa": "Hello Modern Age Coders, I am in Australia and interested in online C++ classes. Could we book a free first class?",
  "heroNote": "Live teaching since 2020 &middot; 10,000+ students &middot; Modern C++, measured",
  "spec": [
    [
      "For",
      "Teens 13+ and adults"
    ],
    [
      "Standard",
      "Modern C++ (C++17 and later)"
    ],
    [
      "Core",
      "Types, functions, references"
    ],
    [
      "Library",
      "Vectors, strings, maps, algorithms"
    ],
    [
      "Design",
      "Classes and objects"
    ],
    [
      "Speed",
      "Measured, not guessed"
    ],
    [
      "Group",
      "Five to ten, or one to one"
    ],
    [
      "Start",
      "A free first class"
    ]
  ],
  "capsuleQ": "In short",
  "capsule": "C++ classes online teach the C++ language: types, functions, references and memory, the standard library, object-oriented design and writing fast code, usually in modern C++17 or later. C++ is one of the four languages allowed in the Australian Informatics Olympiad. Modern Age Coders runs these lessons over live video for learners across Australia, either in a small level-matched group or privately, beginning with a free class.",
  "picks": {
    "eyebrow": "Start here",
    "h2": "Three C++ courses",
    "lede": "Chosen by age and goal. Each card opens the syllabus.",
    "items": [
      {
        "course": "cpp-programming-masterclass-for-teens",
        "code": "CPPA / 01",
        "title": "C++ for Teens",
        "note": "Ages 13 to 18 from zero: fundamentals, the STL, algorithms and real games."
      },
      {
        "course": "cpp-programming-complete-masterclass-college",
        "code": "CPPA / 02",
        "title": "C++ Masterclass",
        "note": "For 18 and over: fundamentals to modern C++ and systems programming."
      },
      {
        "course": "c-programming-course-for-college-beginners",
        "code": "CPPA / 03",
        "title": "C Programming for Beginners",
        "note": "Pointers, memory and structs: the C underneath C++, for adults."
      }
    ]
  },
  "sections": [
    {
      "id": "why",
      "tint": "tint",
      "eyebrow": "Why C++",
      "h2": "Control, speed and responsibility",
      "lede": "C++ trades convenience for control. Learners who understand that trade write code that is both fast and correct.",
      "body": [
        {
          "kind": "table",
          "caption": "What C++ makes visible",
          "head": [
            "Idea",
            "In Python or JavaScript",
            "In C++"
          ],
          "rows": [
            [
              "Types",
              "Decided while the program runs",
              "Declared and checked when compiling"
            ],
            [
              "Copies",
              "Mostly hidden",
              "Every copy is a choice you make"
            ],
            [
              "Memory",
              "Managed for you",
              "Managed by the language rules and by you"
            ],
            [
              "Speed",
              "Good enough for most tasks",
              "Close to what the hardware allows"
            ],
            [
              "Errors",
              "Often at run time",
              "Many at compile time, some very subtle"
            ]
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "In school computing",
          "left": [
            "Australian Curriculum content description AC9TDI10P09 asks Years 9 and 10 students to \"implement, modify and debug modular programs, applying selected algorithms and data structures, including in an object-oriented programming language\".",
            "C++ is a full object-oriented language, so it can carry that work well beyond what the curriculum requires."
          ],
          "rightH3": "In competitions",
          "right": [
            "The Australian Informatics Olympiad lists its languages plainly: \"Allowed languages are C, C++, Java or Python 3.\"",
            "Students preparing for contests should also read our <a class=\"ag-inline-link\" href=\"/competitive-programming-australia\">competitive programming</a> page."
          ]
        }
      ]
    },
    {
      "id": "copy",
      "tint": "deep",
      "eyebrow": "A worked example",
      "h2": "The ampersand that saved 2.7 seconds",
      "lede": "In C++ a function can receive a copy of its argument or a reference to the original. With big data the difference is dramatic; with small data it is nothing.",
      "body": [
        {
          "kind": "p",
          "html": "We loaded the <strong>17,218</strong> station-name rows (383 different stations, repeated across months) from Transport for NSW's monthly usage file into a <code>std::vector&lt;std::string&gt;</code> and wrote two identical counting functions. One takes <code>std::vector&lt;std::string&gt; v</code>, so every call copies all 17,218 strings. The other takes <code>const std::vector&lt;std::string&gt;&amp; v</code>, a reference to the original. Each was called 2,000 times; we kept the fastest of five runs."
        },
        {
          "kind": "table",
          "caption": "Timing two ways of passing data (our benchmark, g++ -O2, 14 October 2026)",
          "head": [
            "Function parameter",
            "Data",
            "Calls",
            "Fastest time"
          ],
          "rows": [
            [
              "std::vector&lt;std::string&gt; (by value)",
              "17,218 strings",
              "2,000",
              "2,766 ms"
            ],
            [
              "const std::vector&lt;std::string&gt;&amp; (by const reference)",
              "17,218 strings",
              "2,000",
              "31.3 ms"
            ],
            [
              "int (by value)",
              "one number",
              "50,000,000",
              "21.6 ms fastest"
            ],
            [
              "const int&amp; (by const reference)",
              "one number",
              "50,000,000",
              "20.8 ms fastest"
            ]
          ]
        },
        {
          "kind": "three",
          "mt": true,
          "cells": [
            {
              "h3": "Big data: copy costs",
              "p": "Copying the vector on every call made the function about 88 times slower. The counting itself was the same; almost all the time went on copying strings."
            },
            {
              "h3": "Small data: no gain",
              "p": "For a single int, the two versions swapped places between runs, from about 21 to 45 ms either way. Passing a small value by value is just as good, and simpler."
            },
            {
              "h3": "The rule learners keep",
              "p": "Pass large objects you only read by const reference; pass small built-in types by value. Then measure, because compilers and machines differ."
            }
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "What a reference is",
          "left": [
            "cppreference describes a reference declaration as one that \"Declares a named variable as a reference, that is, an alias to an already-existing object or function\".",
            "It adds that \"References are not objects\", which is why passing one does not copy the data."
          ],
          "rightH3": "Why const matters too",
          "right": [
            "A plain reference would let the function change the caller's vector. Adding const promises it will not, and the compiler enforces the promise.",
            "Learners try removing const, then changing the vector inside the function, and read the compiler error."
          ]
        },
        {
          "kind": "source",
          "html": "Sources, read 14 October 2026: <a class=\"ag-inline-link\" href=\"https://en.cppreference.com/w/cpp/language/reference\" rel=\"noopener\" target=\"_blank\">cppreference, reference declaration</a>; data from Transport for NSW, <a class=\"ag-inline-link\" href=\"https://opendata.transport.nsw.gov.au/data/dataset/train-station-entries-and-exits-data\" rel=\"noopener\" target=\"_blank\">station monthly usage</a> (Creative Commons Attribution). The benchmark and timings are our own."
        }
      ]
    },
    {
      "id": "learn",
      "tint": "tint",
      "eyebrow": "What we teach",
      "h2": "Modern C++, in a sensible order",
      "lede": "We teach the safe, modern parts first and the sharp edges once learners can see why they matter.",
      "body": [
        {
          "kind": "table",
          "caption": "Topics in our C++ classes",
          "head": [
            "Stage",
            "Topics",
            "A project"
          ],
          "rows": [
            [
              "Foundations",
              "Types, input and output, conditions, loops, functions",
              "A unit converter that rejects bad input"
            ],
            [
              "The standard library",
              "std::vector, std::string, std::map, algorithms",
              "A word counter for a long text"
            ],
            [
              "References and memory",
              "References, const, scope, object lifetime",
              "The copy benchmark on this page"
            ],
            [
              "Classes",
              "Constructors, member functions, encapsulation",
              "A small bank account or inventory class"
            ],
            [
              "Performance",
              "Measuring, choosing data structures, complexity",
              "Speeding up a slow program without changing its output"
            ]
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "Why not start with pointers?",
          "left": [
            "Raw pointers and manual memory are important, but modern C++ offers safer tools for most tasks. Beginners who start with the standard library write working programs sooner and make fewer memory mistakes.",
            "Pointers come once references and object lifetime are clear."
          ],
          "rightH3": "Compiler messages as teachers",
          "right": [
            "C++ compilers catch many mistakes before a program runs, but their messages can be long. Learners practise reading them from the first line that mentions their own code.",
            "It is one of the most useful habits in the language."
          ]
        }
      ]
    },
    {
      "id": "uses",
      "tint": "",
      "eyebrow": "Where it is used",
      "h2": "Who learns C++ and why",
      "lede": "Learners come to C++ for different reasons. The course adapts the projects; the language stays the same.",
      "body": [
        {
          "kind": "table",
          "caption": "Common reasons Australians take C++ classes",
          "head": [
            "Learner",
            "Goal",
            "Where to look next"
          ],
          "rows": [
            [
              "Secondary student",
              "Contests such as the AIO, or stretching beyond school",
              "AIO preparation and competitive programming pages"
            ],
            [
              "University student",
              "A unit that uses C or C++, or systems interest",
              "The adult C++ and C courses"
            ],
            [
              "Game-curious teen",
              "Understanding how games run fast",
              "C++ for Teens and game programming"
            ],
            [
              "Working adult",
              "Performance-sensitive or embedded work",
              "The C++ Masterclass"
            ]
          ]
        },
        {
          "kind": "p",
          "mt": true,
          "html": "School students heading for the olympiad should read <a class=\"ag-inline-link\" href=\"/australian-informatics-olympiad-preparation\">AIO preparation</a>. Learners interested in games can see <a class=\"ag-inline-link\" href=\"/game-programming-course-australia\">the game programming course</a>. Those who would rather start with an easier language can begin with <a class=\"ag-inline-link\" href=\"/javascript-classes-online-australia\">JavaScript classes</a> or Python."
        }
      ]
    },
    {
      "id": "errors",
      "tint": "deep",
      "eyebrow": "Compiler errors",
      "h2": "Turning long error messages into short fixes",
      "lede": "C++ compilers report many mistakes before the program runs. Their messages can be long, so learners practise reading them.",
      "body": [
        {
          "kind": "table",
          "caption": "Common beginner errors and what they usually mean",
          "head": [
            "Message mentions",
            "Usual cause",
            "Usual fix"
          ],
          "rows": [
            [
              "was not declared in this scope",
              "A typo, a missing include or a variable used outside its block",
              "Check the spelling and where it was declared"
            ],
            [
              "expected a semicolon",
              "The previous line is missing its semicolon",
              "Look one line above the reported one"
            ],
            [
              "no matching function for call",
              "Arguments of the wrong type or number",
              "Compare the call with the function's parameters"
            ],
            [
              "discards qualifiers",
              "Changing something passed as const",
              "Remove the change or make a copy"
            ],
            [
              "undefined reference",
              "A function declared but never defined or linked",
              "Write the function body or add the file to the build"
            ]
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "Read from your own code",
          "left": [
            "Errors about the standard library often run to dozens of lines. The useful line is usually the first one that names a file the learner wrote.",
            "Learners highlight that line before reading anything else."
          ],
          "rightH3": "Warnings are hints",
          "right": [
            "Turning on compiler warnings catches mistakes that are legal but probably wrong, such as an unused variable or a comparison between signed and unsigned values.",
            "We compile with warnings on from the first lesson."
          ]
        }
      ]
    },
    {
      "id": "setup",
      "tint": "",
      "eyebrow": "Getting started",
      "h2": "Setting up for C++ in the first lesson",
      "lede": "C++ needs a compiler as well as an editor. The first lesson gets both working so the learner can practise between lessons.",
      "body": [
        {
          "kind": "table",
          "caption": "What a learner needs",
          "head": [
            "Item",
            "Notes"
          ],
          "rows": [
            [
              "A computer",
              "Windows, macOS or Linux; a school or home laptop is fine"
            ],
            [
              "A compiler",
              "A free, modern C++ compiler set up together in lesson one"
            ],
            [
              "An editor",
              "A free code editor with C++ highlighting"
            ],
            [
              "A practice folder",
              "One folder per project, kept under version control later"
            ]
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "Why we compile from the command line first",
          "left": [
            "Running the compiler by hand shows what an editor's build button hides: source file in, program out, errors in between.",
            "Once that is clear, editor shortcuts make sense."
          ],
          "rightH3": "Timing on your own machine",
          "right": [
            "Learners rerun the copy benchmark from this page on their own computer. The exact times will differ; the point is to see the gap between copying and referencing for themselves.",
            "Measuring for yourself is the habit we want."
          ]
        },
        {
          "kind": "p",
          "mt": true,
          "html": "Learners who already know another language usually move faster through the first stage and spend more time on references, object lifetime and the standard library, where C++ differs most from Python, Java or JavaScript."
        }
      ]
    }
  ],
  "ladder": {
    "eyebrow": "Progress",
    "h2": "Four levels of C++ skill",
    "lede": "A learner moves on once a project shows the level has been reached.",
    "table": {
      "caption": "From first program to fast, correct code",
      "head": [
        "Level",
        "What you can do"
      ],
      "rows": [
        [
          "1. Beginner",
          "Write programs with loops, functions and input checks"
        ],
        [
          "2. Library user",
          "Solve problems with vectors, strings, maps and standard algorithms"
        ],
        [
          "3. Careful programmer",
          "Use references and const correctly and explain object lifetimes"
        ],
        [
          "4. Performance-minded",
          "Measure a program, find the slow part and fix it without breaking it"
        ]
      ]
    },
    "left": {
      "h3": "Is C++ too hard for a first language?",
      "ps": [
        "It is harder than Python, but motivated teens and adults can start with it. Many learn Python first and move to C++ once loops and functions feel natural.",
        "The free class helps decide."
      ]
    },
    "right": {
      "h3": "Which compiler and editor?",
      "ps": [
        "Any modern compiler and a free editor. We help set them up in the first lesson, on Windows, macOS or Linux.",
        "Nothing has to be bought."
      ]
    }
  },
  "catalogue": {
    "eyebrow": "The catalogue",
    "h2": "C++ and related courses",
    "lede": "Laid out by age and by stage; the trial lesson settles which one comes first.",
    "bands": [
      {
        "num": "I",
        "h3": "C++",
        "sub": "Teens and adults",
        "courses": [
          {
            "code": "CPPA / CPP / 01",
            "slug": "cpp-programming-masterclass-for-teens",
            "title": "C++ for Teens",
            "blurb": "Fundamentals, STL and games."
          },
          {
            "code": "CPPA / CPP / 02",
            "slug": "cpp-programming-complete-masterclass-college",
            "title": "C++ Masterclass",
            "blurb": "Modern C++ and systems, 18+."
          },
          {
            "code": "CPPA / CPP / 03",
            "slug": "c-programming-course-for-college-beginners",
            "title": "C Programming for Beginners",
            "blurb": "Pointers and memory, 18+."
          }
        ]
      },
      {
        "num": "II",
        "h3": "Algorithms",
        "sub": "Where C++ shines",
        "courses": [
          {
            "code": "CPPA / ALG / 01",
            "slug": "problem-solving-dsa-masterclass-teens",
            "title": "Problem Solving for Teens",
            "blurb": "Logic first, then structures."
          },
          {
            "code": "CPPA / ALG / 02",
            "slug": "data-structures-algorithms-masterclass-college",
            "title": "DSA Course for Adults",
            "blurb": "Trees, graphs and complexity in depth."
          },
          {
            "code": "CPPA / ALG / 03",
            "slug": "competitive-programming-for-teens-course",
            "title": "Contest Track for Teens",
            "blurb": "Where fast C++ pays off."
          }
        ]
      },
      {
        "num": "III",
        "h3": "Other languages",
        "sub": "Alongside or before",
        "courses": [
          {
            "code": "CPPA / OTH / 01",
            "slug": "python-complete-masterclass-teens",
            "title": "Python for Teens",
            "blurb": "An easier first language."
          },
          {
            "code": "CPPA / OTH / 02",
            "slug": "java-programming-masterclass-for-teens",
            "title": "Java for Teens",
            "blurb": "Object-oriented design, 13 to 18."
          },
          {
            "code": "CPPA / OTH / 03",
            "slug": "complete-java-programming-masterclass-college",
            "title": "Java Course for College",
            "blurb": "Core Java to Spring Boot, 18+."
          }
        ]
      }
    ]
  },
  "how": {
    "eyebrow": "How lessons run",
    "h2": "C++ lessons on your schedule",
    "lede": "Teaching happens from India during the hours that line up with Australian afternoons and evenings, booked in your own state's clock and moved when daylight saving changes.",
    "slots": [
      {
        "time": "After school",
        "l": "For teens in term time."
      },
      {
        "time": "Evening",
        "l": "For uni students and adults, by arrangement."
      },
      {
        "time": "Weekend",
        "l": "Longer projects and reviews."
      }
    ],
    "cells": [
      {
        "h3": "Free first class",
        "p": "A compiler set up and a first program running."
      },
      {
        "h3": "Group size",
        "p": "Between five and ten classmates, all at a similar stage."
      },
      {
        "h3": "One to one",
        "p": "For a contest, a uni unit or a project."
      },
      {
        "h3": "Measured code",
        "p": "Learners time their programs, as on this page."
      },
      {
        "h3": "Compiler errors read",
        "p": "Every error message is read, not guessed at."
      },
      {
        "h3": "Hands on keys",
        "p": "Every line is typed by the learner, with the teacher steering."
      }
    ]
  },
  "projectsH2": "Student projects online",
  "projectsLede": "Apps and sites made by our learners. The <a class=\"ag-inline-link\" href=\"/student-labs\">student labs</a> hold many more.",
  "reviewsLede": "Families and learners in their own words, from our Google profile.",
  "fees": {
    "h2": "Fees for C++ classes",
    "lede": "Outside India, C++ lessons are billed monthly in US dollars. You pay nothing to sign up and can leave at the end of any month.",
    "free": [
      "A compiler set up and a first program run",
      "Advice on the right course",
      "No card required"
    ],
    "group": [
      "Five to ten learners per class",
      "Code review of each project",
      "A regular teacher",
      "Stop after any month"
    ],
    "one": [
      "Lessons around one learner's goal",
      "Contest, uni or project focus",
      "Times around school or work"
    ]
  },
  "faq": {
    "eyebrow": "Learners ask",
    "h2": "Questions about online C++ classes in Australia",
    "items": [
      {
        "q": "What do online C++ classes cover?",
        "a": "Core language, references and memory, the standard library, classes and objects, and measuring and improving performance, in modern C++."
      },
      {
        "q": "What is the difference between pass by value and pass by reference?",
        "a": "By value copies the argument; by reference gives the function the original. In our test, copying a vector of 17,218 strings on each call took 2,766 ms for 2,000 calls, against 31.3 ms by const reference."
      },
      {
        "q": "Should I always pass by reference?",
        "a": "No. For small built-in types such as int, passing by value is just as fast and simpler; our int test showed no consistent difference."
      },
      {
        "q": "Is C++ allowed in the Australian Informatics Olympiad?",
        "a": "Yes. The AIO allows C, C++, Java or Python 3."
      },
      {
        "q": "Should I learn Python before C++?",
        "a": "Many learners do, because Python is gentler. Motivated beginners can start with C++ directly."
      },
      {
        "q": "Which version of C++ do you teach?",
        "a": "Modern C++, C++17 and later, with notes where older code differs."
      },
      {
        "q": "What age can start?",
        "a": "Teens from 13 and adults. Younger students usually begin with Scratch or Python."
      },
      {
        "q": "Is C++ good for game development?",
        "a": "Our C++ for Teens course includes real games, and our game programming course page covers the wider route from Scratch to engines."
      },
      {
        "q": "Will C++ help me get a job?",
        "a": "We make no job or salary promises. The classes build skills and projects you can show and explain."
      },
      {
        "q": "What do C++ classes cost?",
        "a": "Your first class is free and needs no card. Monthly fees for small groups and private lessons are in the fees panel."
      }
    ]
  },
  "elsewhere": {
    "eyebrow": "Also on this site",
    "h2": "Related pages",
    "lede": "Pages beside this one.",
    "items": [
      {
        "href": "/competitive-programming-australia",
        "label": "Competitive programming",
        "p": "Contest skills for every age."
      },
      {
        "href": "/australian-informatics-olympiad-preparation",
        "label": "AIO preparation",
        "p": "The school olympiad."
      },
      {
        "href": "/game-programming-course-australia",
        "label": "Game programming course",
        "p": "Building games step by step."
      },
      {
        "href": "/javascript-classes-online-australia",
        "label": "JavaScript classes online",
        "p": "The language of the web."
      },
      {
        "href": "/software-development-course-australia",
        "label": "Software development course",
        "p": "Testing, Git and debugging."
      },
      {
        "href": "/coding-classes-in-australia",
        "label": "Coding classes in Australia",
        "p": "Every Australian page, grouped by place and topic."
      }
    ]
  },
  "start": {
    "h2": "Book a free C++ lesson",
    "lede": "Send us a few details and we will arrange a call. In the first class we install a compiler with you, run a program and suggest a starting course.",
    "readFirst": "Read <a class=\"ag-inline-link\" href=\"/how-we-teach\">how we teach</a> or see <a class=\"ag-inline-link\" href=\"/courses\">all courses</a>.",
    "note": "WhatsApp is the easiest way to reach us from Australia. The +91 number is our India-based teaching team; there is no Australian shopfront.",
    "formNote": "Free, no card, no obligation."
  },
  "footer": {
    "cols": [
      {
        "h4": "Languages",
        "links": [
          {
            "href": "/javascript-classes-online-australia",
            "label": "JavaScript classes"
          },
          {
            "href": "/competitive-programming-australia",
            "label": "Competitive programming"
          },
          {
            "href": "/game-programming-course-australia",
            "label": "Game programming"
          },
          {
            "href": "/how-we-teach",
            "label": "How we teach"
          }
        ]
      },
      {
        "h4": "Australia",
        "links": [
          {
            "href": "/coding-classes-in-australia",
            "label": "Coding classes in Australia"
          },
          {
            "href": "/australian-informatics-olympiad-preparation",
            "label": "AIO preparation"
          },
          {
            "href": "/software-development-course-australia",
            "label": "Software development"
          },
          {
            "href": "/data-science-course-australia",
            "label": "Data science course"
          }
        ]
      }
    ],
    "bottomRight": "Big things by reference, small things by value"
  },
  "personalityCss": "\n.ag-root.ag-cppa .ag-hero h1 { letter-spacing: -0.024em; }\n.ag-root.ag-cppa .ag-capsule { border-left-width: 5px; border-radius: 5px; }\n.ag-root.ag-cppa .ag-section-head h2 { max-width: 27ch; }\n.ag-root.ag-cppa .ag-table caption { text-align: left; font-weight: 635; }\n.ag-root.ag-cppa .ag-band-head h3 { letter-spacing: -0.015em; }\n.ag-root.ag-cppa .ag-slots { gap: 0.8rem; }\n",
  "dossier": {
    "curriculumAuthority": "Australia, teens 13+ and adults. Australian Maths Trust AIO: \"Allowed languages are C, C++, Java or Python 3.\" ACARA v9 Digital Technologies 7-10, AC9TDI10P09: \"implement, modify and debug modular programs, applying selected algorithms and data structures, including in an object-oriented programming language\". cppreference reference declaration: \"Declares a named variable as a reference, that is, an alias to an already-existing object or function\"; \"References are not objects\".",
    "localProject": "Pass by value vs const reference. 17,218 station-name rows, 383 distinct (TfNSW entry_exit.csv, spaces replaced by underscores) in std::vector<std::string>; count_by_value vs count_by_cref, keys rotating over four station names, 2,000 calls; MinGW g++ 6.3 -O2; five runs: by value 2,766 to 2,902 ms, by const ref 31.3 to 48.6 ms (best 2,766 vs 31.3, about 88x). int by value vs const int&, 50,000,000 calls: 21.6 to 40.8 ms vs 20.8 to 44.9 ms, no consistent difference. Baseline note: by value is as good for small types. Lesson family: pass by value vs const reference.",
    "requiredMentions": [
      "AC9TDI10P09",
      "including in an object-oriented programming language",
      "an alias to an already-existing object or function",
      "References are not objects",
      "17,218",
      "2,766 ms",
      "31.3 ms",
      "The ampersand that saved 2.7 seconds"
    ],
    "sources": [
      {
        "claim": "Australian Maths Trust, Australian Informatics Olympiad: allowed languages.",
        "url": "https://www.amt.edu.au/australian-informatics-olympiad"
      },
      {
        "claim": "ACARA, Australian Curriculum v9, Digital Technologies 7-10: AC9TDI10P09.",
        "url": "https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx"
      },
      {
        "claim": "cppreference, reference declaration.",
        "url": "https://en.cppreference.com/w/cpp/language/reference"
      },
      {
        "claim": "Transport for NSW, station monthly usage (entry_exit.csv), Creative Commons Attribution: the 17,218 station-name rows used as benchmark data.",
        "url": "https://opendata.transport.nsw.gov.au/data/dataset/train-station-entries-and-exits-data"
      }
    ],
    "rejectedClaims": [
      "Which Australian universities teach C or C++ in first year: P9A read university unit pages; not repeated here.",
      "Claims about game studios, engines or industry use of C++: no primary source read raw; not made.",
      "Any job, salary or grade promise: not made."
    ]
  }
};
