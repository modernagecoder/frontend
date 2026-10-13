'use strict';
// Software development course, Australia (ag- track door; AU cluster Phase 9, AU-P9B).
// Intent: Australians of any age looking for a software development course: how real software is built, tested,
// versioned and maintained, beyond learning one language. Not an exam page: HSC Software Engineering and VCE Software
// Development have their own pages (linked). Not app development (P9A) and not a single-language page.
// Sources, read raw on 14 October 2026:
//  - ABS, ANZSCO 2022, unit group 2613 Software and Applications Programmers: "design, develop, test, maintain and
//    document program code in accordance with user requirements, and system and technical specifications".
//  - ACARA, Australian Curriculum v9, Digital Technologies 7-10 (.docx): AC9TDI10P06 "validate algorithms and programs by
//    comparing their output against a range of test cases"; AC9TDI8P06 elaboration with the change-calculating test case
//    "input $1.45"; AC9TDI10P12 elaboration "a collaborative version control tool such as GitHub".
//  - Git documentation, git-bisect: "Use binary search to find the commit that introduced a bug"; exit code 125 skips.
// Lesson family: git bisect. Our repository (scratchpad au/p9b/proj/bis): 100 commits of a change-making function; commit
// 73 turns >= into >; the test change(145) == [100, 20, 20, 5] fails from there on; git bisect run found commit 73 after
// 7 test runs (ceil(log2 100) = 7). Checking oldest-first takes 73 runs, newest-first 28.

module.exports = {
  "cluster": "ag",
  "clusterName": "Australia",
  "hub": {
    "group": "guide",
    "tag": "SOFTWARE DEVELOPMENT",
    "blurb": "A software development course for Australians: build, test, version and fix real programs the way working teams do."
  },
  "slug": "software-development-course-australia",
  "code": "sdau",
  "accent": "#122A72",
  "accentRationale": "Software development course, Australia: a deep ink blue (hue 225.0), 10.65:1 on #EDE7DA; 20.3 RGB from the nearest national AU accent, 10.2 from any other Australian accent and 6.4 from every other site colour",
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
  "routeLabel": "Software development course, Australia",
  "title": "Software Development Course in Australia | Build, Test, Ship",
  "description": "A live online software development course for Australians: write code, test it, track it in Git and find bugs fast. Teens and adults, small groups, first class free.",
  "ogDescription": "One wrong character in commit 73 of 100. Git bisect found it in 7 test runs. How a software development course teaches the habits that make that possible.",
  "twitterDescription": "Software development for Australians: testing, Git, debugging and real projects. Live online, first class free.",
  "pageName": "Software Development Course in Australia",
  "webPageDescription": "A guide to learning software development in Australia: requirements, testing, version control and debugging, with a worked git bisect example.",
  "courseDescription": "Live online software development lessons for Australian teens and adults: programming, automated testing, Git, debugging and team projects.",
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
  "crumbLabel": "Software development course",
  "navLinks": [
    {
      "href": "#craft",
      "label": "The craft"
    },
    {
      "href": "#bisect",
      "label": "A worked example"
    },
    {
      "href": "#curriculum",
      "label": "At school"
    },
    {
      "href": "#path",
      "label": "Paths"
    },
    {
      "href": "#fees",
      "label": "Fees"
    }
  ],
  "eyebrow": "Australia &middot; Ages 13 to adult &middot; Build, test, ship",
  "h1": "Software development course",
  "lede": "Writing code that runs once is the start. Software development is everything after that: deciding what the program must do, proving it does it, keeping a history of every change, and finding the change that broke it when something goes wrong. The Australian occupation classification describes the work in five verbs, and only one of them is writing code. Our software development course teaches all five, live online, to teenagers and adults across Australia. This page shows the approach, works through one real debugging exercise with our own numbers, and shows where the same habits already sit in the Australian Curriculum.",
  "secondaryCta": {
    "href": "#bisect",
    "label": "See the worked example"
  },
  "wa": "Hello Modern Age Coders, I am in Australia and interested in a software development course. Could we book a free first class?",
  "heroNote": "Live teaching since 2020 &middot; 10,000+ students &middot; Tests and version control from the first project",
  "spec": [
    [
      "For",
      "Teens 13+ and adults"
    ],
    [
      "Languages",
      "Python first, then JavaScript or Java"
    ],
    [
      "Testing",
      "Automated, from week one"
    ],
    [
      "History",
      "Git on every project"
    ],
    [
      "Debugging",
      "Systematic, not guesswork"
    ],
    [
      "Format",
      "Live online lessons"
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
  "capsule": "A software development course teaches how programs are designed, tested, versioned, debugged and maintained, not only how to write them. ANZSCO describes software and applications programmers as people who design, develop, test, maintain and document program code. Modern Age Coders teaches those habits live online to Australian teens and adults, in small groups or one to one, starting with a free class.",
  "picks": {
    "eyebrow": "Start here",
    "h2": "Three ways into software development",
    "lede": "Chosen by age and starting point. Each card opens the full syllabus.",
    "items": [
      {
        "course": "python-complete-masterclass-teens",
        "code": "SDAU / 01",
        "title": "Python for Teens",
        "note": "Ages 13 to 18, from zero. Functions, files and tests, the base every later project stands on."
      },
      {
        "course": "python-programming-masterclass-zero-to-advanced-college",
        "code": "SDAU / 02",
        "title": "Python Masterclass for Adults",
        "note": "For 18 and over: the same craft at an adult pace, with real automation projects."
      },
      {
        "course": "git-github-version-control-course-for-teens",
        "code": "SDAU / 03",
        "title": "Git and GitHub for Teens",
        "note": "Commits, branches, pull requests and history, ages 13 to 18."
      }
    ]
  },
  "sections": [
    {
      "id": "craft",
      "tint": "tint",
      "eyebrow": "The craft",
      "h2": "Five verbs, and only one of them is coding",
      "lede": "ABS's occupation classification, ANZSCO, gives a one-line definition of the work that is a useful course outline in itself.",
      "body": [
        {
          "kind": "p",
          "html": "Unit group <strong>2613 Software and Applications Programmers</strong> is defined as people who \"design, develop, test, maintain and document program code in accordance with user requirements, and system and technical specifications\". Beginners usually practise only the second verb. Our course gives each of the five its own skills and its own projects."
        },
        {
          "kind": "table",
          "caption": "The five verbs as course content",
          "head": [
            "Verb",
            "What students practise",
            "Evidence they can do it"
          ],
          "rows": [
            [
              "Design",
              "User stories, inputs and outputs, sketches before code",
              "A one-page plan another student can build from"
            ],
            [
              "Develop",
              "Python first, then a second language; small functions",
              "Programs that read like the plan"
            ],
            [
              "Test",
              "Expected and actual output, boundary cases, automated tests",
              "A test file that fails when the code is wrong"
            ],
            [
              "Maintain",
              "Git history, small commits, finding what changed",
              "A repository with a readable log"
            ],
            [
              "Document",
              "README files, comments that explain why, usage notes",
              "A stranger can run the project in five minutes"
            ]
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "Why testing comes early",
          "left": [
            "A test is a sentence that says what correct means. Writing it first forces the question every project needs answered: how will we know this works?",
            "Students who learn to test in their first month treat it as normal rather than as extra work added later."
          ],
          "rightH3": "Why version control comes early",
          "right": [
            "Git turns a project into a history of small, named changes. That history is what makes the debugging technique below possible.",
            "It also makes group work safe: two people can change the same project without losing each other's work."
          ]
        }
      ]
    },
    {
      "id": "bisect",
      "tint": "deep",
      "eyebrow": "A worked example",
      "h2": "One wrong character in 100 commits",
      "lede": "This exercise shows why tests and version control belong together. We built the repository ourselves so every number on this page can be checked.",
      "body": [
        {
          "kind": "p",
          "html": "The program is a small function that works out the coins and notes for an amount of money, in cents. It sits in a Git repository with <strong>100 commits</strong>. At <strong>commit 73</strong>, one character changes: <code>while cents &gt;= n</code> becomes <code>while cents &gt; n</code>. Nothing crashes. The function simply stops giving the last coin when the amount left equals a coin's value, so change for $1.45 comes back as $1, 20c and 20c, five cents short."
        },
        {
          "kind": "table",
          "caption": "Finding the bad commit three ways (our repository, 14 October 2026)",
          "head": [
            "Method",
            "Test runs needed",
            "Notes"
          ],
          "rows": [
            [
              "Check every commit from the oldest",
              "73",
              "Stops at the first failing commit"
            ],
            [
              "Check backwards from the newest",
              "28",
              "Stops at the last passing commit"
            ],
            [
              "git bisect run with the test file",
              "7",
              "Halves the remaining range at every step"
            ]
          ]
        },
        {
          "kind": "three",
          "mt": true,
          "cells": [
            {
              "h3": "What bisect does",
              "p": "The Git documentation describes it in one line: \"Use binary search to find the commit that introduced a bug\". Mark one good commit and one bad one, and Git checks out the middle."
            },
            {
              "h3": "Why the test matters",
              "p": "git bisect run needs a program that exits 0 when the code is good and non-zero when it is bad. Our test, change(145) == [100, 20, 20, 5], is that program."
            },
            {
              "h3": "When it is not worth it",
              "p": "With four commits, reading the four diffs is quicker than setting up bisect. The method earns its keep as history grows: 1,000 commits need only about 10 test runs."
            }
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "The commits that cannot be tested",
          "left": [
            "Real histories contain commits that do not build. Git reserves a special exit code for them: \"The special exit code 125 should be used when the current source code cannot be tested.\" The test script returns 125 and bisect steps around that commit.",
            "Students write that case into their scripts too, so a broken build is skipped rather than mistaken for the bug."
          ],
          "rightH3": "What students take away",
          "right": [
            "A failing test plus a clean history turns \"something broke last month\" into a seven-step search. Without the test, there is nothing to run at each step; without small commits, the culprit is a week of mixed changes.",
            "That is the point of the exercise: the debugging trick only works because of habits formed much earlier."
          ]
        },
        {
          "kind": "source",
          "html": "Sources, read 14 October 2026: <a class=\"ag-inline-link\" href=\"https://git-scm.com/docs/git-bisect\" rel=\"noopener\" target=\"_blank\">Git documentation, git-bisect</a>; the repository, test and timings are our own."
        }
      ]
    },
    {
      "id": "curriculum",
      "tint": "tint",
      "eyebrow": "At school",
      "h2": "The same habits in the Australian Curriculum",
      "lede": "The Digital Technologies curriculum for Years 7 to 10 already asks for testing and shared version control. Our course takes them further.",
      "body": [
        {
          "kind": "table",
          "caption": "Australian Curriculum v9, Digital Technologies 7 to 10",
          "head": [
            "Code",
            "What it asks for",
            "Where it appears in our course"
          ],
          "rows": [
            [
              "AC9TDI8P06",
              "An elaboration specifies test cases for a change-calculating algorithm, with input $1.45",
              "The same function, under automated test, in the bisect exercise"
            ],
            [
              "AC9TDI10P06",
              "\"validate algorithms and programs by comparing their output against a range of test cases\"",
              "Test files written before features"
            ],
            [
              "AC9TDI10P12",
              "An elaboration on sharing code development using \"a collaborative version control tool such as GitHub\"",
              "Git from the first project, GitHub for group work"
            ]
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "For students taking senior computing",
          "left": [
            "Senior courses add their own requirements. NSW students will find the detail on our <a class=\"ag-inline-link\" href=\"/hsc-software-engineering-help\">HSC Software Engineering help</a> page and Victorian students on <a class=\"ag-inline-link\" href=\"/vce-applied-computing-software-development-help\">VCE Software Development help</a>.",
            "This course builds the general craft underneath both. It never writes assessed work."
          ],
          "rightH3": "For everyone else",
          "right": [
            "Adults and younger teens do not need a school subject to start. The order is the same: plan, code, test, commit, then read the history when something goes wrong.",
            "Teenagers in Years 7 to 10 will recognise the curriculum language above from class."
          ]
        },
        {
          "kind": "source",
          "html": "Source, read 14 October 2026: ACARA, <a class=\"ag-inline-link\" href=\"https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx\" rel=\"noopener\" target=\"_blank\">Digital Technologies curriculum content, Years 7 to 10, Version 9.0</a>."
        }
      ]
    },
    {
      "id": "path",
      "tint": "",
      "eyebrow": "Paths",
      "h2": "What a learner builds, step by step",
      "lede": "Each project adds one professional habit to the last.",
      "body": [
        {
          "kind": "table",
          "caption": "Project sequence in the software development course",
          "head": [
            "Project",
            "New habit",
            "Done when"
          ],
          "rows": [
            [
              "Coin change calculator",
              "Writing tests before code",
              "Boundary amounts like 5c and $100 pass"
            ],
            [
              "Command-line to-do list",
              "Small commits with clear messages",
              "The Git log reads like a diary"
            ],
            [
              "Quiz with a saved high-score file",
              "Handling bad input without crashing",
              "Text typed instead of a number is rejected politely"
            ],
            [
              "Team project on GitHub",
              "Branches and pull requests",
              "Two students merge work without losing any"
            ],
            [
              "Find the planted bug",
              "git bisect with an automated test",
              "The culprit commit is named in under ten runs"
            ]
          ]
        },
        {
          "kind": "p",
          "mt": true,
          "html": "Learners who want a web or mobile focus continue with <a class=\"ag-inline-link\" href=\"/web-development-course-for-teens-australia\">web development for teens</a> or <a class=\"ag-inline-link\" href=\"/javascript-classes-online-australia\">JavaScript classes</a>. Adults changing careers may find <a class=\"ag-inline-link\" href=\"/coding-for-career-changers-australia\">coding for career changers</a> the better door."
        }
      ]
    },
    {
      "id": "review",
      "tint": "tint",
      "eyebrow": "Reading code",
      "h2": "Most of the job is reading code someone else wrote",
      "lede": "Developers spend much of their time reading, reviewing and changing existing programs. The course practises that from the second term.",
      "body": [
        {
          "kind": "table",
          "caption": "A review checklist learners use on each other's pull requests",
          "head": [
            "Question",
            "Why it is asked"
          ],
          "rows": [
            [
              "Does a test show the change works?",
              "A change without a test can quietly break later"
            ],
            [
              "Is each commit about one thing?",
              "Small commits make history searchable"
            ],
            [
              "Do names say what things are?",
              "The next reader should not need to guess"
            ],
            [
              "What happens with empty or wrong input?",
              "Edge cases are where most bugs hide"
            ],
            [
              "Is anything copied that could be a function?",
              "Repeated code drifts apart when one copy is fixed"
            ]
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "Giving useful feedback",
          "left": [
            "Learners practise writing review comments that describe the problem and suggest a fix, rather than just saying something is wrong.",
            "Kind, specific comments are a skill teams value, and they are rarely taught."
          ],
          "rightH3": "Receiving it",
          "right": [
            "Having code questioned can sting at first. Seeing that every developer's code is reviewed, the teacher's included, makes it routine.",
            "By the team project, learners ask for reviews before they are told to."
          ]
        }
      ]
    }
  ],
  "ladder": {
    "eyebrow": "Progress",
    "h2": "Four stages from coder to developer",
    "lede": "A learner moves up when a project proves the skill, whatever the calendar says.",
    "table": {
      "caption": "From first program to maintained project",
      "head": [
        "Stage",
        "What you can do"
      ],
      "rows": [
        [
          "1. Coder",
          "Write a working program from a clear description"
        ],
        [
          "2. Tester",
          "Write tests that fail when the code is wrong, including edge cases"
        ],
        [
          "3. Maintainer",
          "Keep a clean Git history and use it to find when a bug arrived"
        ],
        [
          "4. Team developer",
          "Plan, review and merge work with others through pull requests"
        ]
      ]
    },
    "left": {
      "h3": "Is this a job-ready course?",
      "ps": [
        "It teaches the habits the occupation description names. We make no promise about jobs or pay; those depend on far more than one course.",
        "What it does promise is a portfolio of tested, versioned projects a learner can show and explain."
      ]
    },
    "right": {
      "h3": "Which language comes first?",
      "ps": [
        "Python, because its syntax gets out of the way of the habits. JavaScript or Java follow once testing and Git feel routine.",
        "The habits carry over to any language unchanged."
      ]
    }
  },
  "catalogue": {
    "eyebrow": "The catalogue",
    "h2": "Software development courses",
    "lede": "Grouped by stage. The free class decides where a learner starts.",
    "bands": [
      {
        "num": "I",
        "h3": "Foundations",
        "sub": "Teens and adults",
        "courses": [
          {
            "code": "SDAU / FND / 01",
            "slug": "python-complete-masterclass-teens",
            "title": "Python for Teens",
            "blurb": "Ages 13 to 18, from zero."
          },
          {
            "code": "SDAU / FND / 02",
            "slug": "python-programming-masterclass-zero-to-advanced-college",
            "title": "Python Masterclass",
            "blurb": "Adults, zero to advanced."
          },
          {
            "code": "SDAU / FND / 03",
            "slug": "problem-solving-dsa-masterclass-teens",
            "title": "Problem Solving and DSA for Teens",
            "blurb": "Algorithms and clear thinking."
          }
        ]
      },
      {
        "num": "II",
        "h3": "Version control",
        "sub": "Every project",
        "courses": [
          {
            "code": "SDAU / GIT / 01",
            "slug": "git-github-version-control-course-for-teens",
            "title": "Git and GitHub for Teens",
            "blurb": "History and teamwork, 13 to 18."
          },
          {
            "code": "SDAU / GIT / 02",
            "slug": "git-github-version-control-course-for-college-students",
            "title": "Git and GitHub for College Students",
            "blurb": "Team-ready version control."
          },
          {
            "code": "SDAU / GIT / 03",
            "slug": "git-github-advanced-version-control-masterclass-for-professionals",
            "title": "Advanced Git for Professionals",
            "blurb": "For working developers."
          }
        ]
      },
      {
        "num": "III",
        "h3": "Building larger systems",
        "sub": "After the foundations",
        "courses": [
          {
            "code": "SDAU / SYS / 01",
            "slug": "java-programming-masterclass-for-teens",
            "title": "Java for Teens",
            "blurb": "Object-oriented design, 13 to 18."
          },
          {
            "code": "SDAU / SYS / 02",
            "slug": "full-stack-web-development-masterclass-college",
            "title": "Full Stack Developer Course",
            "blurb": "React, Node.js and deployment, 18+."
          },
          {
            "code": "SDAU / SYS / 03",
            "slug": "data-structures-algorithms-masterclass-college",
            "title": "Data Structures and Algorithms",
            "blurb": "The theory under fast code, 18+."
          }
        ]
      }
    ]
  },
  "how": {
    "eyebrow": "How lessons run",
    "h2": "Software lessons in Australian time",
    "lede": "Teachers work from India, whose day overlaps Australian afternoons and evenings. Lesson times are agreed in your own state's time and follow daylight saving changes.",
    "slots": [
      {
        "time": "After school",
        "l": "For teenagers during term."
      },
      {
        "time": "Evening",
        "l": "For adults after work, by arrangement."
      },
      {
        "time": "Weekend",
        "l": "Longer project sessions."
      }
    ],
    "cells": [
      {
        "h3": "Free first class",
        "p": "A short coding task and its first test, then advice on where to begin."
      },
      {
        "h3": "Small groups",
        "p": "Five to ten learners reviewing each other's code."
      },
      {
        "h3": "One to one",
        "p": "For a specific project, pace or language."
      },
      {
        "h3": "Real repositories",
        "p": "Every project lives in Git from the first lesson."
      },
      {
        "h3": "Code review",
        "p": "Teachers comment on pull requests as a team lead would."
      },
      {
        "h3": "Your keyboard",
        "p": "The learner types every line; teachers guide."
      }
    ]
  },
  "projectsH2": "What our students have shipped",
  "projectsLede": "Work our students built and published. More in the <a class=\"ag-inline-link\" href=\"/student-labs\">student labs</a>.",
  "reviewsLede": "Published reviews from our Google profile, reproduced without edits.",
  "fees": {
    "h2": "Fees for the software development course",
    "lede": "Learners outside India pay one monthly fee in US dollars, with nothing due at sign-up and no contract.",
    "free": [
      "A short task with a first automated test",
      "A plain recommendation on where to start",
      "No card details needed"
    ],
    "group": [
      "Five to ten learners at a similar stage",
      "Peer code review every week",
      "One regular teacher",
      "Stop after any month"
    ],
    "one": [
      "Lessons shaped around one learner's project",
      "Any language we teach",
      "Times around school or work"
    ]
  },
  "faq": {
    "eyebrow": "Learners ask",
    "h2": "Questions about software development courses in Australia",
    "items": [
      {
        "q": "What is a software development course?",
        "a": "A course that teaches the whole job of making software: planning what it must do, writing it, testing it, keeping its history in version control, debugging and documenting it."
      },
      {
        "q": "How is it different from learning to code?",
        "a": "Learning to code covers writing programs. Software development adds testing, version control, debugging methods and teamwork, the parts that keep a program working as it grows."
      },
      {
        "q": "What is git bisect?",
        "a": "A Git command that uses binary search through a project's history to find the commit that introduced a bug. In our 100-commit example it found the faulty commit in 7 test runs."
      },
      {
        "q": "Do I need to know a language first?",
        "a": "No. The course starts with Python from zero and introduces testing and Git alongside the first programs."
      },
      {
        "q": "Is this the same as HSC Software Engineering?",
        "a": "No. HSC Software Engineering is a NSW senior subject with its own syllabus. This course teaches general skills that help such students, and we never complete assessed work."
      },
      {
        "q": "What age can start?",
        "a": "Teenagers from 13 and adults of any age. Younger children usually begin with Scratch or Python for kids first."
      },
      {
        "q": "What does ANZSCO say software programmers do?",
        "a": "ANZSCO unit group 2613 describes them as people who design, develop, test, maintain and document program code in line with user requirements and specifications."
      },
      {
        "q": "Will I get a job after the course?",
        "a": "We do not promise jobs or salaries. The course builds tested, versioned projects and the habits behind them, which you can show and explain."
      },
      {
        "q": "Which languages are taught?",
        "a": "Python first, then JavaScript, Java or C++ depending on the learner's goals."
      },
      {
        "q": "How much is the course?",
        "a": "Your first class costs nothing and no card is taken. The monthly prices for groups and private lessons sit in the fees panel on this page."
      }
    ]
  },
  "elsewhere": {
    "eyebrow": "Also on this site",
    "h2": "Related pages",
    "lede": "Other doors that sit next to this one.",
    "items": [
      {
        "href": "/coding-classes-in-australia",
        "label": "Coding classes in Australia",
        "p": "The national guide to every state, city and track."
      },
      {
        "href": "/hsc-software-engineering-help",
        "label": "HSC Software Engineering help",
        "p": "For NSW senior students."
      },
      {
        "href": "/vce-applied-computing-software-development-help",
        "label": "VCE Software Development help",
        "p": "For Victorian senior students."
      },
      {
        "href": "/javascript-classes-online-australia",
        "label": "JavaScript classes online",
        "p": "The language of the web."
      },
      {
        "href": "/c-plus-plus-classes-online-australia",
        "label": "C++ classes online",
        "p": "Close to the machine."
      },
      {
        "href": "/coding-for-career-changers-australia",
        "label": "Coding for career changers",
        "p": "For adults switching fields."
      }
    ]
  },
  "start": {
    "h2": "Start with a free class",
    "lede": "Leave your details and we will call at a time that suits. The first class includes a short task with its first test and ends with a clear recommendation.",
    "readFirst": "More about our approach: <a class=\"ag-inline-link\" href=\"/how-we-teach\">how lessons are taught</a>, and the <a class=\"ag-inline-link\" href=\"/courses\">full course list</a>.",
    "note": "Messages on WhatsApp from Australian numbers are answered first. Our phone number starts with +91 because the team works from India; we have no office in Australia.",
    "formNote": "Free, no card, no obligation."
  },
  "footer": {
    "cols": [
      {
        "h4": "Build software",
        "links": [
          {
            "href": "/javascript-classes-online-australia",
            "label": "JavaScript classes"
          },
          {
            "href": "/c-plus-plus-classes-online-australia",
            "label": "C++ classes"
          },
          {
            "href": "/data-science-course-australia",
            "label": "Data science course"
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
            "href": "/hsc-software-engineering-help",
            "label": "HSC Software Engineering"
          },
          {
            "href": "/vce-applied-computing-software-development-help",
            "label": "VCE Software Development"
          },
          {
            "href": "/competitive-programming-australia",
            "label": "Competitive programming"
          }
        ]
      }
    ],
    "bottomRight": "Test it, commit it, then find it"
  },
  "personalityCss": "\n.ag-root.ag-sdau .ag-hero h1 { letter-spacing: -0.021em; }\n.ag-root.ag-sdau .ag-capsule { border-left-width: 5px; border-radius: 4px; }\n.ag-root.ag-sdau .ag-section-head h2 { max-width: 30ch; }\n.ag-root.ag-sdau .ag-table caption { text-align: left; font-weight: 610; }\n.ag-root.ag-sdau .ag-band-head h3 { letter-spacing: -0.01em; }\n.ag-root.ag-sdau .ag-slots { gap: 0.9rem; }\n",
  "dossier": {
    "curriculumAuthority": "Australia, all ages from 13. ABS ANZSCO 2022 unit group 2613 Software and Applications Programmers: \"design, develop, test, maintain and document program code in accordance with user requirements, and system and technical specifications\". ACARA Australian Curriculum v9 Digital Technologies 7-10: AC9TDI8P06 (elaboration, change-calculating test case with input $1.45); AC9TDI10P06 \"validate algorithms and programs by comparing their output against a range of test cases\"; AC9TDI10P12 elaboration \"sharing code development using a collaborative version control tool such as GitHub\". Git documentation git-bisect: \"Use binary search to find the commit that introduced a bug\"; \"The special exit code 125 should be used when the current source code cannot be tested.\"",
    "localProject": "git bisect. Repository of 100 commits; commit 73 changes while cents >= n to while cents > n in change(); test change(145) == [100, 20, 20, 5] fails (returns [100, 20, 20]). git bisect run python test_change.py: 7 runs, first bad commit = commit 73. Oldest-first 73 runs, newest-first 28. ceil(log2 1000) = 10. Lesson family: git bisect.",
    "requiredMentions": [
      "2613 Software and Applications Programmers",
      "design, develop, test, maintain and document program code",
      "AC9TDI10P06",
      "AC9TDI10P12",
      "a collaborative version control tool such as GitHub",
      "Use binary search to find the commit that introduced a bug",
      "commit 73",
      "The special exit code 125 should be used when the current source code cannot be tested."
    ],
    "sources": [
      {
        "claim": "ABS, ANZSCO 2022, unit group 2613 Software and Applications Programmers: definition and tasks.",
        "url": "https://www.abs.gov.au/statistics/classifications/anzsco-australian-and-new-zealand-standard-classification-occupations/2022/browse-classification/2/26/261/2613"
      },
      {
        "claim": "ACARA, Australian Curriculum v9, Digital Technologies 7-10: AC9TDI8P06, AC9TDI10P06, AC9TDI10P12 and elaborations.",
        "url": "https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx"
      },
      {
        "claim": "Git documentation, git-bisect: binary search for the commit that introduced a bug; exit code 125 for untestable commits.",
        "url": "https://git-scm.com/docs/git-bisect"
      }
    ],
    "rejectedClaims": [
      "Employment outlook, vacancies or salaries for software developers: not given (no job or salary promises).",
      "ANZSCO skill-level text on qualifications: used on the career changers page instead, not here.",
      "NESA Software Engineering syllabus detail: the page loads by script and was not read raw; linked to our own HSC page instead.",
      "Any claim that bisect always finds a single culprit: not made; merges and untestable commits complicate real histories."
    ]
  }
};
