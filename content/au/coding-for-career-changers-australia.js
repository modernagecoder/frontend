'use strict';
// Coding for career changers, Australia (ag- audience door; AU cluster Phase 9, AU-P9B).
// Intent: Australian adults in another field who want to change into, or add, programming: a realistic route from
// spreadsheets and office work to Python and data, with honest framing (no job or salary promises). Distinct from P9A's
// coding-classes-for-adults-australia (general adult learning) and learn-to-code-over-50; their sources (TGA ICT40120,
// ABS WRTAL, Be Connected, university units) are not used here.
// Sources, read raw on 14 October 2026:
//  - ABS, OSCA - Occupation Standard Classification for Australia, 2024, Version 1.0, released 6/12/2024; ANZSCO 2022
//    listed as the previous release.
//  - ABS, ANZSCO 2022, 2613 Software and Applications Programmers, indicative skill level: "At least five years of
//    relevant experience and/or relevant vendor certification may substitute for the formal qualification."
//  - Transport for NSW, station monthly usage (entry_exit.csv, Opal-based), CC BY: August 2026 train entry rows.
// Lesson family: spreadsheet lookup, exact vs approximate match. Our Python imitation: 289 train stations with an
// August 2026 entry row, keys sorted A to Z. 20 stations sampled (seed 2026) and typed without the word Station.
// Exact match: 20 of 20 #N/A. Approximate match (largest key not above the lookup value): 20 answers, 0 right.
// After cleaning the keys the same way: exact match 20 of 20 right. Examples: Coniston approx 49,767 vs true 6,375;
// Warwick Farm approx 2,721 vs true 55,679.

module.exports = {
  "cluster": "ag",
  "clusterName": "Australia",
  "hub": {
    "group": "guide",
    "tag": "CAREER CHANGERS",
    "blurb": "Coding for Australian career changers: from spreadsheets to Python and data, honestly, around a working week."
  },
  "slug": "coding-for-career-changers-australia",
  "code": "ccau",
  "accent": "#785E48",
  "accentRationale": "Coding for career changers, Australia: a warm taupe (hue 27.5), 4.88:1 on #EDE7DA; 24.9 RGB from the nearest national AU accent, 11.0 from any other Australian accent and 7.3 from every other site colour",
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
  "routeLabel": "Coding for career changers, Australia",
  "title": "Coding for Career Changers in Australia | From Spreadsheets",
  "description": "Coding for Australian career changers: move from spreadsheets to Python and data with a realistic plan, around your working week. Live online, first class free.",
  "ogDescription": "Twenty lookups, twenty confident answers, all of them wrong. Why career changers who know spreadsheets make strong programmers once they learn exact matching.",
  "twitterDescription": "Coding for Australian career changers: spreadsheets to Python, around work. Live online, first class free.",
  "pageName": "Coding for Career Changers in Australia",
  "webPageDescription": "A guide for Australian adults changing into programming: what transfers from spreadsheet work, an honest plan, and a worked example on lookup errors.",
  "courseDescription": "Live online coding lessons for Australian career changers: Python, data and automation built on existing spreadsheet and office skills, scheduled around work.",
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
  "crumbLabel": "Coding for career changers",
  "navLinks": [
    {
      "href": "#transfer",
      "label": "What transfers"
    },
    {
      "href": "#lookup",
      "label": "A worked example"
    },
    {
      "href": "#plan",
      "label": "A realistic plan"
    },
    {
      "href": "#honest",
      "label": "Honest answers"
    },
    {
      "href": "#fees",
      "label": "Fees"
    }
  ],
  "eyebrow": "Australia &middot; Adults &middot; From your current work to code",
  "h1": "Coding for career changers",
  "lede": "Many adults who decide to learn programming already do half of it at work: they build spreadsheets, clean up lists, match records from two systems and notice when the numbers look wrong. Our coding for career changers programme starts from those skills instead of pretending you are a beginner at everything. Lessons are live online and timed around a working week, and the plan is honest about how long things take. This page shows what carries over, works through a spreadsheet mistake that Python makes visible, and answers the questions career changers usually ask, without promising jobs or salaries.",
  "secondaryCta": {
    "href": "#lookup",
    "label": "See the worked example"
  },
  "wa": "Hello Modern Age Coders, I am an adult in Australia thinking about changing into programming. Could we book a free first class?",
  "heroNote": "Live teaching since 2020 &middot; 10,000+ students &middot; Built on the skills you already use at work",
  "spec": [
    [
      "For",
      "Adults changing or adding a skill"
    ],
    [
      "Start",
      "From spreadsheets and office work"
    ],
    [
      "Language",
      "Python, then SQL"
    ],
    [
      "Focus",
      "Data, automation, real projects"
    ],
    [
      "Pace",
      "Two lessons a week around work"
    ],
    [
      "Format",
      "Live online"
    ],
    [
      "Group",
      "Five to ten, or one to one"
    ],
    [
      "First step",
      "A free first class"
    ]
  ],
  "capsuleQ": "In short",
  "capsule": "Coding for career changers helps adults in other fields learn programming by building on what they already know, such as spreadsheets, data checking and process work, then moving to Python, SQL and real projects. It is honest about timescales and makes no job promises. Modern Age Coders teaches career changers in Australia live online around a working week, in small groups or one to one, and the first class is free.",
  "picks": {
    "eyebrow": "Start here",
    "h2": "Three starting points for adults",
    "lede": "Chosen by where you are now. Each card opens the syllabus.",
    "items": [
      {
        "course": "data-and-ai-analytics-for-non-programmers-course",
        "code": "CCAU / 01",
        "title": "Data and AI for Non-Programmers",
        "note": "For people who live in spreadsheets: Excel, Sheets and Power BI, then the step to code."
      },
      {
        "course": "python-programming-masterclass-zero-to-advanced-college",
        "code": "CCAU / 02",
        "title": "Python Masterclass",
        "note": "Python from zero for adults, at a pace that fits around work."
      },
      {
        "course": "data-analysis-mastery-course-college",
        "code": "CCAU / 03",
        "title": "Data Analysis Course",
        "note": "Excel, SQL, Python and dashboards for adults moving into data work."
      }
    ]
  },
  "sections": [
    {
      "id": "transfer",
      "tint": "tint",
      "eyebrow": "What transfers",
      "h2": "You are not starting from zero",
      "lede": "Office, admin, finance, retail and trades work all build habits programmers need. The course names them and builds on them.",
      "body": [
        {
          "kind": "table",
          "caption": "Skills career changers already have",
          "head": [
            "Skill from current work",
            "Where it shows up in programming"
          ],
          "rows": [
            [
              "Building spreadsheet formulas",
              "Writing functions and expressions"
            ],
            [
              "Matching records from two systems",
              "Joining tables in Python or SQL"
            ],
            [
              "Noticing a total that looks wrong",
              "Testing and debugging"
            ],
            [
              "Following and improving a process",
              "Turning steps into automation"
            ],
            [
              "Explaining things to customers or colleagues",
              "Documentation and code review"
            ]
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "Why spreadsheet people do well",
          "left": [
            "Spreadsheets are programming with a friendly face: cells are variables, formulas are expressions, and a lookup is a join. Moving to Python makes those ideas explicit and repeatable.",
            "The first projects usually automate something learners do by hand at work today."
          ],
          "rightH3": "What is genuinely new",
          "right": [
            "Writing code from a blank file, version control, and testing. These take practice, and the course gives them time.",
            "Reading error messages calmly is a skill in itself, and an early one."
          ]
        }
      ]
    },
    {
      "id": "lookup",
      "tint": "deep",
      "eyebrow": "A worked example",
      "h2": "Twenty confident answers, all wrong",
      "lede": "A lookup is the most common spreadsheet operation, and one setting decides whether a missing match shows as an error or as a believable wrong number.",
      "body": [
        {
          "kind": "p",
          "html": "We took Transport for NSW's monthly station usage file and kept the August 2026 entry counts for the <strong>289</strong> train stations with an August entry row, sorted A to Z by name, as a lookup table would be. The names in the file end in the word Station. We picked 20 stations at random and typed them the way a person would, without the word Station, then looked each one up in Python two ways: an exact match, and an imitation of a spreadsheet's approximate match, which returns the last row whose key is not above the lookup value."
        },
        {
          "kind": "table",
          "caption": "20 lookups of station names typed without the word Station (our run, 14 October 2026)",
          "head": [
            "Method",
            "Result",
            "Right answers"
          ],
          "rows": [
            [
              "Exact match",
              "#N/A for all 20",
              "0, but every failure is visible"
            ],
            [
              "Approximate match",
              "A number for all 20",
              "0, and nothing looks wrong"
            ],
            [
              "Exact match after cleaning both sides the same way",
              "A number for all 20",
              "20"
            ]
          ]
        },
        {
          "kind": "three",
          "mt": true,
          "cells": [
            {
              "h3": "The quiet failure",
              "p": "Approximate match returned a figure for every name, taken from whichever station sorted just before it. Coniston came back as 49,767 entries; its real August figure is 6,375."
            },
            {
              "h3": "The loud failure is better",
              "p": "Exact match failed all 20, but it failed with #N/A where anyone can see it. A visible error is a gift; a plausible wrong number can travel into a report."
            },
            {
              "h3": "The fix",
              "p": "Decide what a key is, clean both sides to that form, then match exactly. All 20 lookups were then correct, including Warwick Farm at 55,679 entries."
            }
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "Why this matters for a career change",
          "left": [
            "The habit being taught, preferring a loud error to a quiet wrong answer, is one of the most valuable a programmer has. Career changers who have been burned by a bad lookup at work grasp it immediately.",
            "In Python the exact behaviour is written in the code, so a reviewer can see it."
          ],
          "rightH3": "What learners build next",
          "right": [
            "A small script that joins two real files, reports every key it could not match, and refuses to guess.",
            "It replaces a spreadsheet task many learners do weekly at work."
          ]
        },
        {
          "kind": "source",
          "html": "Data: Transport for NSW, <a class=\"ag-inline-link\" href=\"https://opendata.transport.nsw.gov.au/data/dataset/train-station-entries-and-exits-data\" rel=\"noopener\" target=\"_blank\">Train, Metro and Light Rail Station Monthly Usage</a> (Opal-based, Creative Commons Attribution), downloaded 14 October 2026. The lookups and counts are our own; the approximate match is our Python imitation of the spreadsheet rule."
        }
      ]
    },
    {
      "id": "plan",
      "tint": "tint",
      "eyebrow": "A realistic plan",
      "h2": "A plan that fits around work",
      "lede": "Two live lessons a week plus some practice. Each stage ends with something real you can show and explain.",
      "body": [
        {
          "kind": "table",
          "caption": "A typical route for a career changer",
          "head": [
            "Stage",
            "Focus",
            "Ends with"
          ],
          "rows": [
            [
              "First stage",
              "Python basics through work-style tasks",
              "A script that tidies a messy file"
            ],
            [
              "Second stage",
              "Data with Python and SQL",
              "A report built from two joined sources"
            ],
            [
              "Third stage",
              "Automation and testing",
              "A tested tool that replaces a manual task"
            ],
            [
              "Fourth stage",
              "A portfolio project in your own field",
              "A project you can demonstrate and explain"
            ]
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "How occupations are classified",
          "left": [
            "The ABS released OSCA, the Occupation Standard Classification for Australia, 2024, Version 1.0, on 6/12/2024. ANZSCO 2022 is now listed as the previous release.",
            "Career changers reading job descriptions or official occupation lists may meet either name."
          ],
          "rightH3": "What ANZSCO said about experience",
          "right": [
            "For software and applications programmers, ANZSCO 2022 notes: \"At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification.\"",
            "That describes how the classification groups jobs. It is not a hiring rule, and we do not treat it as a promise of anything."
          ]
        },
        {
          "kind": "source",
          "html": "Sources, read 14 October 2026: ABS, <a class=\"ag-inline-link\" href=\"https://www.abs.gov.au/statistics/classifications/osca-occupation-standard-classification-australia/2024-version-1-0/browse-classification\" rel=\"noopener\" target=\"_blank\">OSCA 2024, Version 1.0</a>; ABS, <a class=\"ag-inline-link\" href=\"https://www.abs.gov.au/statistics/classifications/anzsco-australian-and-new-zealand-standard-classification-occupations/2022/browse-classification/2/26/261/2613\" rel=\"noopener\" target=\"_blank\">ANZSCO 2022, unit group 2613</a>."
        }
      ]
    },
    {
      "id": "honest",
      "tint": "",
      "eyebrow": "Honest answers",
      "h2": "What we will and will not tell you",
      "lede": "Career changers deserve straight answers. These are ours.",
      "body": [
        {
          "kind": "table",
          "caption": "Our position on common promises",
          "head": [
            "Question",
            "Our answer"
          ],
          "rows": [
            [
              "Will I get a programming job?",
              "We do not promise jobs. Hiring depends on far more than one course."
            ],
            [
              "How much will I earn?",
              "We make no salary claims."
            ],
            [
              "How long will it take?",
              "It depends on time per week and starting point; we agree a plan after the first class."
            ],
            [
              "Do I need a degree?",
              "Not to learn. Employers set their own requirements."
            ],
            [
              "Is it too late for me?",
              "Our students range from 6 to 67. Age is not the barrier; regular practice is the requirement."
            ]
          ]
        },
        {
          "kind": "p",
          "mt": true,
          "html": "Adults learning for interest rather than a change of career may prefer <a class=\"ag-inline-link\" href=\"/coding-classes-for-adults-australia\">coding classes for adults</a>. Those set on building software can go further with the <a class=\"ag-inline-link\" href=\"/software-development-course-australia\">software development course</a>, and those drawn to analysis with the <a class=\"ag-inline-link\" href=\"/data-science-course-australia\">data science course</a>."
        }
      ]
    },
    {
      "id": "automate",
      "tint": "deep",
      "eyebrow": "First automation",
      "h2": "Picking the first task to automate",
      "lede": "The ideal first project is a dull task you already do every week. It gives a working tool and a clear before-and-after.",
      "body": [
        {
          "kind": "table",
          "caption": "Common weekly tasks and the Python that replaces them",
          "head": [
            "Task done by hand",
            "Python approach",
            "Skill learnt"
          ],
          "rows": [
            [
              "Combining monthly spreadsheets into one",
              "Read every file in a folder and stack the rows",
              "Files, loops and tables"
            ],
            [
              "Matching two lists of names or codes",
              "Clean both keys, then join exactly and report misses",
              "Joins and data cleaning"
            ],
            [
              "Checking a report for missing values",
              "Count blanks and odd values per column",
              "Validation"
            ],
            [
              "Renaming or sorting many files",
              "Build new names from a rule and apply them",
              "Strings and the file system"
            ],
            [
              "Copying figures into a summary",
              "Calculate the summary and write it to a new file",
              "Grouping and output"
            ]
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "Keep it safe",
          "left": [
            "Work on a copy of the data, never the original, and keep personal information out of practice files.",
            "Check your employer's rules before using work data at all; many learners rebuild the task with public data instead."
          ],
          "rightH3": "Measure the result",
          "right": [
            "Learners note how long the task took by hand and how long the script takes, including the time spent writing it.",
            "For a task done once, doing it by hand can still be quicker. For a weekly task, the script can repay the time spent writing it."
          ]
        }
      ]
    },
    {
      "id": "balance",
      "tint": "",
      "eyebrow": "Study and life",
      "h2": "Keeping learning going around work and family",
      "lede": "Most career changers study alongside a job and other responsibilities. A sustainable rhythm beats an intense start.",
      "body": [
        {
          "kind": "two",
          "leftH3": "A rhythm that lasts",
          "left": [
            "Two fixed lessons a week give structure; short practice sessions on other days keep the ideas fresh. Missing a week is normal and recoverable.",
            "Learners keep a short log of what they built each week, which doubles as a record of progress."
          ],
          "rightH3": "When life gets busy",
          "right": [
            "Lessons can be paused month by month, and one-to-one times can move. The plan is reviewed rather than abandoned.",
            "Coming back after a break usually takes one revision lesson, not a restart."
          ]
        },
        {
          "kind": "p",
          "mt": true,
          "html": "Adults who want private lessons around shift work can also look at <a class=\"ag-inline-link\" href=\"/online-coding-tutor-australia\">an online coding tutor</a>."
        }
      ]
    }
  ],
  "ladder": {
    "eyebrow": "Progress",
    "h2": "Four stages from spreadsheet user to programmer",
    "lede": "Each stage is a set of skills, checked by a project rather than a date on a calendar.",
    "table": {
      "caption": "From formulas to code",
      "head": [
        "Stage",
        "What you can do"
      ],
      "rows": [
        [
          "1. Scripter",
          "Write short Python programs that read and tidy a file"
        ],
        [
          "2. Analyst",
          "Join, group and summarise data from more than one source"
        ],
        [
          "3. Automator",
          "Build a tested tool that replaces a manual process"
        ],
        [
          "4. Developer",
          "Plan, build, document and explain a portfolio project"
        ]
      ]
    },
    "left": {
      "h3": "How many hours a week?",
      "ps": [
        "Two live lessons plus a few hours of practice is a pace most working adults can keep.",
        "Busy weeks happen; the plan bends rather than breaks."
      ]
    },
    "right": {
      "h3": "Group or one to one?",
      "ps": [
        "Groups of fifteen to twenty give you peers at the same stage. One to one suits irregular hours or a specific goal.",
        "Many adults start in a group and switch if their week changes."
      ]
    }
  },
  "catalogue": {
    "eyebrow": "The catalogue",
    "h2": "Courses for career changers",
    "lede": "Grouped by direction. The free class decides where you start.",
    "bands": [
      {
        "num": "I",
        "h3": "From spreadsheets",
        "sub": "No coding yet",
        "courses": [
          {
            "code": "CCAU / SHT / 01",
            "slug": "data-and-ai-analytics-for-non-programmers-course",
            "title": "Data and AI for Non-Programmers",
            "blurb": "Excel, Sheets and Power BI."
          },
          {
            "code": "CCAU / SHT / 02",
            "slug": "data-analysis-mastery-course-college",
            "title": "Data Analysis Course",
            "blurb": "Excel, SQL, Python and BI."
          },
          {
            "code": "CCAU / SHT / 03",
            "slug": "mysql-database-complete-masterclass-college",
            "title": "MySQL Course",
            "blurb": "Databases and SQL."
          }
        ]
      },
      {
        "num": "II",
        "h3": "Into code",
        "sub": "Python and automation",
        "courses": [
          {
            "code": "CCAU / COD / 01",
            "slug": "python-programming-masterclass-zero-to-advanced-college",
            "title": "Python Masterclass",
            "blurb": "Zero to advanced."
          },
          {
            "code": "CCAU / COD / 02",
            "slug": "python-ai-automation-masterclass-college",
            "title": "Python Automation Course",
            "blurb": "Scripts, scraping and applied AI."
          },
          {
            "code": "CCAU / COD / 03",
            "slug": "git-github-version-control-course-for-college-students",
            "title": "Git and GitHub",
            "blurb": "Team-ready version control."
          }
        ]
      },
      {
        "num": "III",
        "h3": "Choose a direction",
        "sub": "Once the basics are solid",
        "courses": [
          {
            "code": "CCAU / DIR / 01",
            "slug": "full-stack-web-development-masterclass-college",
            "title": "Full Stack Developer Course",
            "blurb": "Built for career switchers, 18+."
          },
          {
            "code": "CCAU / DIR / 02",
            "slug": "data-science-complete-masterclass-college",
            "title": "Data Science Course",
            "blurb": "Python, ML and deep learning."
          },
          {
            "code": "CCAU / DIR / 03",
            "slug": "codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals",
            "title": "AI Coding Agents for Professionals",
            "blurb": "Working with coding agents, 18+."
          }
        ]
      }
    ]
  },
  "how": {
    "eyebrow": "How lessons run",
    "h2": "Lessons around a working week",
    "lede": "Teachers are based in India, whose working day overlaps Australian afternoons and evenings. Times are agreed in your state's time and adjusted for daylight saving.",
    "slots": [
      {
        "time": "Evening",
        "l": "After work, by arrangement."
      },
      {
        "time": "Weekend",
        "l": "Longer project sessions."
      },
      {
        "time": "Daytime",
        "l": "For shift workers and those between jobs."
      }
    ],
    "cells": [
      {
        "h3": "Free first class",
        "p": "A short script on a messy file, and an honest plan."
      },
      {
        "h3": "Adult groups",
        "p": "Five to ten adults at a similar stage."
      },
      {
        "h3": "One to one",
        "p": "For irregular hours or a specific project."
      },
      {
        "h3": "Your field's data",
        "p": "Projects built around the kind of work you know."
      },
      {
        "h3": "No jargon wall",
        "p": "Terms are explained the first time they appear."
      },
      {
        "h3": "Your keyboard",
        "p": "You write every line; the teacher guides."
      }
    ]
  },
  "projectsH2": "Projects from our learners",
  "projectsLede": "Work our students built and published. More in the <a class=\"ag-inline-link\" href=\"/student-labs\">student labs</a>.",
  "reviewsLede": "Reviews from our Google profile, reproduced without edits.",
  "fees": {
    "h2": "Fees for career changers",
    "lede": "Learners outside India pay a monthly fee in US dollars, with nothing due at sign-up and no contract.",
    "free": [
      "A first script on a messy file",
      "An honest plan and starting course",
      "No card details"
    ],
    "group": [
      "Five to ten adults per class",
      "Projects from real work",
      "A regular teacher",
      "Stop after any month"
    ],
    "one": [
      "Lessons shaped around your goal",
      "Flexible pace and times",
      "Your own project data"
    ]
  },
  "faq": {
    "eyebrow": "Career changers ask",
    "h2": "Questions about changing into coding in Australia",
    "items": [
      {
        "q": "Can I learn to code while working full time?",
        "a": "Yes. Lessons are live online, timed around work, two a week plus some practice, and the plan adjusts to busy periods."
      },
      {
        "q": "Do my spreadsheet skills help?",
        "a": "A lot. Formulas, lookups and data checking map directly onto functions, joins and testing in Python."
      },
      {
        "q": "What is the difference between exact and approximate lookup?",
        "a": "Exact match returns an error when a key is missing. Approximate match returns the nearest earlier row instead; in our 20-lookup test it gave 20 believable answers, all wrong."
      },
      {
        "q": "Which language should a career changer learn first?",
        "a": "Python for most people, then SQL for data. Web or other languages follow once the basics are solid."
      },
      {
        "q": "Do I need a degree to work in software?",
        "a": "Employers set their own requirements. ANZSCO 2022 notes that relevant experience or vendor certification may substitute for formal qualifications, but that is a classification note, not a hiring rule."
      },
      {
        "q": "What is OSCA?",
        "a": "The Occupation Standard Classification for Australia, released by the ABS on 6 December 2024 as the successor to ANZSCO."
      },
      {
        "q": "Will this get me a job?",
        "a": "We do not promise jobs or salaries. We help you build skills and a portfolio you can show and explain."
      },
      {
        "q": "Am I too old to start?",
        "a": "No. Our students range from 6 to 67. Regular practice matters far more than age."
      },
      {
        "q": "Group or one to one?",
        "a": "Groups suit regular schedules and peer support; one to one suits irregular hours or a specific goal."
      },
      {
        "q": "What will it cost me?",
        "a": "Nothing for the first class, and no card details. Monthly fees for group and private lessons are in the fees panel."
      }
    ]
  },
  "elsewhere": {
    "eyebrow": "Also on this site",
    "h2": "Related pages",
    "lede": "Other pages for adult learners.",
    "items": [
      {
        "href": "/coding-classes-for-adults-australia",
        "label": "Coding classes for adults",
        "p": "Learning for interest at any age."
      },
      {
        "href": "/software-development-course-australia",
        "label": "Software development course",
        "p": "Testing, Git and debugging."
      },
      {
        "href": "/data-science-course-australia",
        "label": "Data science course",
        "p": "From questions to answers with data."
      },
      {
        "href": "/javascript-classes-online-australia",
        "label": "JavaScript classes online",
        "p": "The language of the web."
      },
      {
        "href": "/coding-classes-in-australia",
        "label": "Coding classes in Australia",
        "p": "All Australian pages in one place."
      },
      {
        "href": "/one-on-one-coding-tutor-australia",
        "label": "One-on-one coding tutor",
        "p": "Private lessons around your hours."
      }
    ]
  },
  "start": {
    "h2": "Book a free first lesson",
    "lede": "Leave your details and we will call when it suits you. The first class writes a short script on a messy file and ends with an honest plan.",
    "readFirst": "Read <a class=\"ag-inline-link\" href=\"/how-we-teach\">how we teach</a> or browse the <a class=\"ag-inline-link\" href=\"/courses\">course list</a>.",
    "note": "Working adults often find WhatsApp easiest. Our number begins +91 since the team is in India, and we have no Australian office to visit.",
    "formNote": "Free, no card, no obligation."
  },
  "footer": {
    "cols": [
      {
        "h4": "Adults",
        "links": [
          {
            "href": "/coding-classes-for-adults-australia",
            "label": "Coding classes for adults"
          },
          {
            "href": "/data-science-course-australia",
            "label": "Data science course"
          },
          {
            "href": "/one-on-one-coding-tutor-australia",
            "label": "One-on-one tutor"
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
            "href": "/software-development-course-australia",
            "label": "Software development"
          },
          {
            "href": "/javascript-classes-online-australia",
            "label": "JavaScript classes"
          },
          {
            "href": "/c-plus-plus-classes-online-australia",
            "label": "C++ classes"
          }
        ]
      }
    ],
    "bottomRight": "A loud error beats a quiet wrong answer"
  },
  "personalityCss": "\n.ag-root.ag-ccau .ag-hero h1 { letter-spacing: -0.018em; }\n.ag-root.ag-ccau .ag-capsule { border-left-width: 4px; border-radius: 3px; }\n.ag-root.ag-ccau .ag-section-head h2 { max-width: 28ch; }\n.ag-root.ag-ccau .ag-table caption { text-align: left; font-weight: 605; }\n.ag-root.ag-ccau .ag-band-head h3 { letter-spacing: -0.012em; }\n.ag-root.ag-ccau .ag-slots { gap: 1rem; }\n",
  "dossier": {
    "curriculumAuthority": "Australia, adults. ABS OSCA - Occupation Standard Classification for Australia, 2024, Version 1.0, released 6/12/2024 (ANZSCO 2022 listed as previous release). ABS ANZSCO 2022 unit group 2613 indicative skill level: \"At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification.\" Transport for NSW station monthly usage (CC BY).",
    "localProject": "Exact vs approximate lookup. 289 train stations with an August 2026 Entry row, keys sorted; 20 sampled (random.seed(2026)) and typed without the word Station. Exact 20/20 #N/A; approximate (bisect_right - 1) 20 answers, 0 right; cleaned keys exact 20/20 right. Coniston approx 49,767 vs 6,375; Warwick Farm approx 2,721 vs 55,679. Lesson family: spreadsheet lookup exact vs approximate match.",
    "requiredMentions": [
      "OSCA",
      "6/12/2024",
      "At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification.",
      "289",
      "Twenty confident answers, all wrong",
      "49,767",
      "6,375",
      "55,679"
    ],
    "sources": [
      {
        "claim": "ABS, OSCA - Occupation Standard Classification for Australia, 2024, Version 1.0, released 6 December 2024.",
        "url": "https://www.abs.gov.au/statistics/classifications/osca-occupation-standard-classification-australia/2024-version-1-0/browse-classification"
      },
      {
        "claim": "ABS, ANZSCO 2022, unit group 2613, indicative skill level note on experience and vendor certification.",
        "url": "https://www.abs.gov.au/statistics/classifications/anzsco-australian-and-new-zealand-standard-classification-occupations/2022/browse-classification/2/26/261/2613"
      },
      {
        "claim": "Transport for NSW, Train, Metro and Light Rail Station Monthly Usage (entry_exit.csv), Creative Commons Attribution.",
        "url": "https://opendata.transport.nsw.gov.au/data/dataset/train-station-entries-and-exits-data"
      }
    ],
    "rejectedClaims": [
      "Fee-Free TAFE and Skills Checkpoint for Older Workers program details: dewr.gov.au timed out; not quoted.",
      "Jobs and Skills Australia occupation outlooks: the site timed out; and job outlooks would edge towards job promises, so not used.",
      "TGA ICT40120, ABS WRTAL, Be Connected and university units: P9A sources, left to their pages.",
      "Any salary, vacancy or placement claim: not made."
    ]
  }
};
