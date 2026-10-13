'use strict';
// Competitive programming, Australia (ag- track door; AU cluster Phase 9, AU-P9B).
// Intent: Australians of any age (teens, university students, adults) searching for competitive programming: timed
// algorithm contests judged automatically, online judges, and the practical skills that decide marks (speed, input and
// output, testing). Distinct from aio-to-ioi-pathway-australia and australian-informatics-olympiad-preparation, which own
// the school olympiad route (linked, their facts and projects not repeated).
// Sources, read raw on 14 October 2026:
//  - Australian Maths Trust, Australian Informatics Olympiad page: "Allowed languages are C, C++, Java or Python 3.";
//    topics include "opening, reading and writing files".
//  - cppreference, std::ios_base::sync_with_stdio: "If the synchronization is turned off, the C++ standard streams are
//    allowed to buffer their I/O independently, which may be considerably faster in some cases."
// Lesson family: fast input reading. Our timings (best of 3, whole program run including start-up, Windows laptop,
// Python 3.13, MinGW g++ 6.3 -O2; seeded inputs of n integers): n = 1,000: input() per line 0.080 s, sys.stdin.buffer
// bulk read 0.075 s; n = 100,000: 0.144 s vs 0.089 s; n = 1,000,000: 0.735 s vs 0.208 s. C++ cin synced 1.434 s,
// unsynced 0.840 s at n = 1,000,000 (0.055 s and 0.052 s at n = 1,000).

module.exports = {
  "cluster": "ag",
  "clusterName": "Australia",
  "hub": {
    "group": "guide",
    "tag": "COMPETITIVE PROGRAMMING",
    "blurb": "Competitive programming for Australians of any age: algorithms, automatic judges, time limits and the details that decide marks."
  },
  "slug": "competitive-programming-australia",
  "code": "cpau",
  "accent": "#8E3816",
  "accentRationale": "Competitive programming, Australia: a burnt orange (hue 17.0), 6.25:1 on #EDE7DA; 21.0 RGB from the nearest national AU accent, 13.0 from any other Australian accent and 6.7 from every other site colour",
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
  "routeLabel": "Competitive programming, Australia",
  "title": "Competitive Programming in Australia | Algorithms and Speed",
  "description": "Competitive programming coaching for Australians of any age: algorithms, online judges, time limits and fast input and output. Live online classes, first class free.",
  "ogDescription": "Reading a million numbers took 0.735 s one way and 0.208 s another, in the same language. The details that decide competitive programming marks.",
  "twitterDescription": "Competitive programming for Australians: algorithms, judges, time limits, fast input. Live online, first class free.",
  "pageName": "Competitive Programming in Australia",
  "webPageDescription": "A guide to competitive programming for Australian students and adults: how contests are judged, what to practise, and a measured example on reading input quickly.",
  "courseDescription": "Live online competitive programming coaching for Australian teens and adults: algorithms, data structures, judge systems, time limits and efficient input and output.",
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
  "crumbLabel": "Competitive programming",
  "navLinks": [
    {
      "href": "#what",
      "label": "What it is"
    },
    {
      "href": "#input",
      "label": "A worked example"
    },
    {
      "href": "#practice",
      "label": "How to practise"
    },
    {
      "href": "#routes",
      "label": "Routes"
    },
    {
      "href": "#fees",
      "label": "Fees"
    }
  ],
  "eyebrow": "Australia &middot; Teens, uni students and adults &middot; Algorithms against the clock",
  "h1": "Competitive programming",
  "lede": "Competitive programming is solving well-defined problems with code, fast and correctly, while a computer judges the answer. It rewards clear thinking about algorithms, but marks are often won or lost on smaller things: an off-by-one boundary, a slow way of reading input, an untested edge case. Our coaching covers both the big ideas and the small ones, live online, for Australian school students, university students and adults who simply enjoy puzzles. This page explains how contests work, measures one of those small things with real timings, and shows where it leads, including the school olympiad route.",
  "secondaryCta": {
    "href": "#input",
    "label": "See the worked example"
  },
  "wa": "Hello Modern Age Coders, I am in Australia and interested in competitive programming coaching. Could we book a free first class?",
  "heroNote": "Live teaching since 2020 &middot; 10,000+ students &middot; Algorithms, then the details that decide marks",
  "spec": [
    [
      "For",
      "Teens, uni students and adults"
    ],
    [
      "Languages",
      "Python or C++, also Java"
    ],
    [
      "Core",
      "Algorithms and data structures"
    ],
    [
      "Judge",
      "Automatic, timed, unforgiving"
    ],
    [
      "Practice",
      "Past problems and mock contests"
    ],
    [
      "Habits",
      "Testing and timing every solution"
    ],
    [
      "Group",
      "Fifteen to twenty, or one to one"
    ],
    [
      "Start",
      "A free first class"
    ]
  ],
  "capsuleQ": "In short",
  "capsule": "Competitive programming is solving algorithm problems with code against a time limit, judged automatically on correctness and speed. Success depends on algorithms and data structures, but also on careful testing and efficient input and output. Modern Age Coders coaches competitive programming live online for Australian teens, university students and adults, in small groups or one to one, and the first class is free.",
  "picks": {
    "eyebrow": "Start here",
    "h2": "Three courses for contest programmers",
    "lede": "Chosen by age and experience. Each card opens the syllabus.",
    "items": [
      {
        "course": "competitive-programming-for-teens-course",
        "code": "CPAU / 01",
        "title": "Competitive Programming for Teens",
        "note": "Ages 13 to 18 who can already write basic programs and want contest-level problem solving."
      },
      {
        "course": "competitive-programming-masterclass-college",
        "code": "CPAU / 02",
        "title": "Competitive Programming Course",
        "note": "For 18 and over, from first contests to university team competitions."
      },
      {
        "course": "problem-solving-dsa-masterclass-teens",
        "code": "CPAU / 03",
        "title": "Problem Solving and DSA for Teens",
        "note": "The algorithms and data structures underneath every contest, from scratch."
      }
    ]
  },
  "sections": [
    {
      "id": "what",
      "tint": "tint",
      "eyebrow": "What it is",
      "h2": "A problem, a time limit and a judge",
      "lede": "Every contest follows the same shape, whichever organisation runs it.",
      "body": [
        {
          "kind": "table",
          "caption": "Parts of a competitive programming problem",
          "head": [
            "Part",
            "What it says",
            "Common mistake"
          ],
          "rows": [
            [
              "Statement",
              "The task in plain words, often a short story",
              "Solving the story instead of the task"
            ],
            [
              "Input format",
              "Exactly what the program will read",
              "Reading it in a way that is too slow"
            ],
            [
              "Constraints",
              "How large the input can be",
              "Ignoring them and choosing a slow algorithm"
            ],
            [
              "Time and memory limits",
              "How long and how much memory the program may use",
              "Testing only on the small sample"
            ],
            [
              "Sample tests",
              "One or two small examples",
              "Assuming passing them means the solution is right"
            ]
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "Who takes part",
          "left": [
            "School students meet it first through the Australian Informatics Olympiad, which accepts four languages: \"Allowed languages are C, C++, Java or Python 3.\"",
            "University students compete in team contests such as the ICPC, and adults keep practising on online judges for the pleasure of the puzzles."
          ],
          "rightH3": "What it builds",
          "right": [
            "Precise reading, algorithmic thinking, and the discipline of testing before submitting.",
            "Those habits carry into any programming work, even for people who never enter a contest."
          ]
        }
      ]
    },
    {
      "id": "input",
      "tint": "deep",
      "eyebrow": "A worked example",
      "h2": "Same language, same answer, over three times faster",
      "lede": "Problems often begin with a long list of numbers. How a program reads them can matter as much as the algorithm.",
      "body": [
        {
          "kind": "p",
          "html": "We generated files of 1,000, 100,000 and 1,000,000 random integers with a fixed seed and wrote programs that add them up. Each was run three times and the fastest whole-program time kept, start-up included, on an ordinary Windows laptop. Every version printed the same sum."
        },
        {
          "kind": "table",
          "caption": "Time to read and add n integers (our timings, 14 October 2026)",
          "head": [
            "Program",
            "n = 1,000",
            "n = 100,000",
            "n = 1,000,000"
          ],
          "rows": [
            [
              "Python, input() once per line",
              "0.080 s",
              "0.144 s",
              "0.735 s"
            ],
            [
              "Python, sys.stdin.buffer read all at once",
              "0.075 s",
              "0.089 s",
              "0.208 s"
            ],
            [
              "C++, cin with default settings",
              "0.055 s",
              "not run",
              "1.434 s"
            ],
            [
              "C++, cin with sync_with_stdio(false)",
              "0.052 s",
              "not run",
              "0.840 s"
            ]
          ]
        },
        {
          "kind": "three",
          "mt": true,
          "cells": [
            {
              "h3": "Small inputs: no difference",
              "p": "At 1,000 numbers every version finishes in well under a tenth of a second. The plain input() loop is fine, and simpler to write."
            },
            {
              "h3": "Large inputs: a big one",
              "p": "At a million numbers, reading everything at once is about 3.5 times faster in Python. That can be the gap between passing and a time-limit failure."
            },
            {
              "h3": "The surprise",
              "p": "On this machine's older compiler, Python's bulk read beat C++ cin even with synchronisation turned off. The language matters less than the reading method."
            }
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "Why C++ cin is slower by default",
          "left": [
            "By default C++ streams stay in step with C's input functions. cppreference explains the switch: \"If the synchronization is turned off, the C++ standard streams are allowed to buffer their I/O independently, which may be considerably faster in some cases.\"",
            "In our run, turning it off cut 1.434 s to 0.840 s."
          ],
          "rightH3": "The lesson students keep",
          "right": [
            "Measure on input as large as the constraints allow, not on the sample. Simple code is right for small inputs; switch to bulk reading only when the numbers say it matters.",
            "Our timings depend on the machine and compiler, so students repeat them on their own."
          ]
        },
        {
          "kind": "source",
          "html": "Sources, read 14 October 2026: <a class=\"ag-inline-link\" href=\"https://en.cppreference.com/w/cpp/io/ios_base/sync_with_stdio\" rel=\"noopener\" target=\"_blank\">cppreference, std::ios_base::sync_with_stdio</a>; <a class=\"ag-inline-link\" href=\"https://www.amt.edu.au/australian-informatics-olympiad\" rel=\"noopener\" target=\"_blank\">Australian Maths Trust, Australian Informatics Olympiad</a>. Programs, inputs and timings are our own."
        }
      ]
    },
    {
      "id": "practice",
      "tint": "tint",
      "eyebrow": "How to practise",
      "h2": "A weekly routine that works",
      "lede": "Progress in competitive programming comes from steady practice with honest review, not from cramming.",
      "body": [
        {
          "kind": "table",
          "caption": "A typical week for a coached learner",
          "head": [
            "Session",
            "Activity",
            "Purpose"
          ],
          "rows": [
            [
              "Lesson 1",
              "A new topic, such as prefix sums or graph search, with worked problems",
              "Add one idea to the toolkit"
            ],
            [
              "Lesson 2",
              "A timed set of three problems, then a review of every attempt",
              "Practise under pressure, learn from mistakes"
            ],
            [
              "Own time",
              "Two or three problems on an online judge at the right level",
              "Keep the habit going"
            ],
            [
              "Every few weeks",
              "A full mock contest",
              "Pacing, choosing which problem to try first"
            ]
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "Testing before submitting",
          "left": [
            "Students write a slow but obviously correct version, generate random small inputs, and compare it with the fast version before they submit.",
            "They also build the largest input the constraints allow and time the program on it, exactly as in the example above."
          ],
          "rightH3": "Choosing a language",
          "right": [
            "Python is quickest to write and fine for most problems at school level. C++ gives more headroom when time limits are tight.",
            "Many learners start in Python and add C++ later; our <a class=\"ag-inline-link\" href=\"/c-plus-plus-classes-online-australia\">C++ classes</a> cover the language itself."
          ]
        }
      ]
    },
    {
      "id": "routes",
      "tint": "",
      "eyebrow": "Routes",
      "h2": "Where competitive programming leads in Australia",
      "lede": "Different ages follow different routes. This page covers the skill; dedicated pages cover the school olympiad.",
      "body": [
        {
          "kind": "table",
          "caption": "Routes by stage",
          "head": [
            "Stage",
            "Route",
            "Where to read more"
          ],
          "rows": [
            [
              "School, up to Year 12",
              "The Australian Informatics Olympiad and the training that follows it",
              "AIO preparation and the AIO to IOI pathway pages"
            ],
            [
              "University",
              "Team contests such as the ICPC, and university programming clubs",
              "This page and our adult course"
            ],
            [
              "Adults",
              "Online judges and rated contests, for skill and enjoyment",
              "This page"
            ],
            [
              "Anyone",
              "Algorithm practice to sharpen general programming",
              "The software development course"
            ]
          ]
        },
        {
          "kind": "p",
          "mt": true,
          "html": "School students should read <a class=\"ag-inline-link\" href=\"/australian-informatics-olympiad-preparation\">Australian Informatics Olympiad preparation</a> and <a class=\"ag-inline-link\" href=\"/aio-to-ioi-pathway-australia\">the AIO to IOI pathway</a> for dates, divisions and the selection route. This page does not repeat them."
        }
      ]
    },
    {
      "id": "mistakes",
      "tint": "deep",
      "eyebrow": "Common mistakes",
      "h2": "Why correct ideas still fail the judge",
      "lede": "Many failed submissions have the right algorithm and a small slip around it. Reviews focus on these as much as on the big idea.",
      "body": [
        {
          "kind": "table",
          "caption": "Frequent reasons a good idea is marked wrong",
          "head": [
            "Slip",
            "What happens",
            "The habit that prevents it"
          ],
          "rows": [
            [
              "Output format",
              "An extra space or missing line fails an exact checker",
              "Copy the sample output format exactly"
            ],
            [
              "Boundary values",
              "The smallest or largest allowed input breaks the code",
              "Test n = 1 and the maximum before submitting"
            ],
            [
              "Leftover debug prints",
              "Extra text in the output is marked wrong",
              "Print debugging to the error stream, not the output"
            ],
            [
              "Slow input or output",
              "Correct answers arrive after the time limit",
              "Time the program on the largest input"
            ],
            [
              "Integer size in C or C++",
              "Sums overflow a 32-bit int",
              "Use 64-bit types when values can grow large"
            ]
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "Reviewing an attempt",
          "left": [
            "After a timed set, each learner explains one wrong submission: what the judge said, what they guessed, and what the fault really was.",
            "Writing the fault down turns one mistake into a rule they keep."
          ],
          "rightH3": "Not every failure is a slip",
          "right": [
            "Sometimes the algorithm itself is too slow or wrong, and no amount of tidying will fix it. Telling the two apart quickly is a skill that grows with practice.",
            "The review asks which kind each failure was."
          ]
        }
      ]
    },
    {
      "id": "mindset",
      "tint": "",
      "eyebrow": "Mindset",
      "h2": "Getting better at problems you cannot yet solve",
      "lede": "Competitive programming means being stuck often. Learning how to be stuck productively is part of the coaching.",
      "body": [
        {
          "kind": "table",
          "caption": "What to do when stuck on a problem",
          "head": [
            "Minutes stuck",
            "Next step"
          ],
          "rows": [
            [
              "10",
              "Reread the statement and work a small example by hand"
            ],
            [
              "20",
              "Write the slowest correct solution you can think of"
            ],
            [
              "40",
              "Look for a pattern in the brute force outputs"
            ],
            [
              "60 or more",
              "Read a hint or editorial, then solve it again from scratch the next day"
            ]
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "Why the brute force helps",
          "left": [
            "A slow correct answer is never wasted. It confirms the problem is understood and gives a way to test a faster idea later.",
            "Many solutions are found by looking hard at what the brute force prints."
          ],
          "rightH3": "Reading solutions is allowed",
          "right": [
            "After a fair attempt, reading someone else's solution is how most competitors learn new techniques.",
            "The rule is to close it and write your own version without looking."
          ]
        }
      ]
    }
  ],
  "ladder": {
    "eyebrow": "Progress",
    "h2": "Four levels of contest skill",
    "lede": "Each level is a set of skills, not a fixed timetable; the reviews show when a learner is ready for the next.",
    "table": {
      "caption": "From first solve to contest-ready",
      "head": [
        "Level",
        "What you can do"
      ],
      "rows": [
        [
          "1. Solver",
          "Read a problem precisely and solve easy ones with loops and arrays"
        ],
        [
          "2. Analyst",
          "Estimate whether an approach fits the constraints before coding it"
        ],
        [
          "3. Toolkit",
          "Use sorting, prefix sums, binary search, graphs and simple dynamic programming"
        ],
        [
          "4. Competitor",
          "Pace a full contest, test under time pressure, and review afterwards"
        ]
      ]
    },
    "left": {
      "h3": "Is it only for maths prodigies?",
      "ps": [
        "No. It rewards persistence and careful reading more than talent. Most of the skill is learnable patterns plus practice.",
        "School maths is enough to begin."
      ]
    },
    "right": {
      "h3": "Can adults start now?",
      "ps": [
        "Yes. Many adults take it up for enjoyment or to sharpen their programming. The adult course starts from the basics.",
        "There is no age limit on online judges."
      ]
    }
  },
  "catalogue": {
    "eyebrow": "The catalogue",
    "h2": "Courses for competitive programmers",
    "lede": "Grouped by stage. The free class decides where a learner starts.",
    "bands": [
      {
        "num": "I",
        "h3": "Foundations",
        "sub": "Before contests",
        "courses": [
          {
            "code": "CPAU / FND / 01",
            "slug": "problem-solving-dsa-masterclass-teens",
            "title": "Problem Solving and DSA for Teens",
            "blurb": "Logic and algorithms, 13 to 18."
          },
          {
            "code": "CPAU / FND / 02",
            "slug": "python-complete-masterclass-teens",
            "title": "Python for Teens",
            "blurb": "The fastest language to start in."
          },
          {
            "code": "CPAU / FND / 03",
            "slug": "data-structures-algorithms-masterclass-college",
            "title": "Data Structures and Algorithms",
            "blurb": "For 18 and over."
          }
        ]
      },
      {
        "num": "II",
        "h3": "Contest training",
        "sub": "Timed problem solving",
        "courses": [
          {
            "code": "CPAU / CON / 01",
            "slug": "competitive-programming-for-teens-course",
            "title": "Competitive Programming for Teens",
            "blurb": "Contest problems, 13 to 18."
          },
          {
            "code": "CPAU / CON / 02",
            "slug": "competitive-programming-masterclass-college",
            "title": "Competitive Programming Course",
            "blurb": "Online judges to team contests, 18+."
          },
          {
            "code": "CPAU / CON / 03",
            "slug": "olympiad-competition-mathematics-mastery",
            "title": "Maths Olympiad and Competition Course",
            "blurb": "The maths behind harder problems."
          }
        ]
      },
      {
        "num": "III",
        "h3": "Faster languages",
        "sub": "When time is tight",
        "courses": [
          {
            "code": "CPAU / LNG / 01",
            "slug": "cpp-programming-masterclass-for-teens",
            "title": "C++ for Teens",
            "blurb": "STL and speed, 13 to 18."
          },
          {
            "code": "CPAU / LNG / 02",
            "slug": "cpp-programming-complete-masterclass-college",
            "title": "C++ Masterclass",
            "blurb": "Modern C++ for adults."
          },
          {
            "code": "CPAU / LNG / 03",
            "slug": "java-programming-masterclass-for-teens",
            "title": "Java for Teens",
            "blurb": "Another allowed contest language."
          }
        ]
      }
    ]
  },
  "how": {
    "eyebrow": "How lessons run",
    "h2": "Coaching in Australian time",
    "lede": "Coaches are based in India, where the working day overlaps Australian afternoons and evenings. Times are set in your own state's time and follow daylight saving.",
    "slots": [
      {
        "time": "After school",
        "l": "Weekday lessons for school students."
      },
      {
        "time": "Evening",
        "l": "For university students and adults, by arrangement."
      },
      {
        "time": "Weekend",
        "l": "Mock contests and long reviews."
      }
    ],
    "cells": [
      {
        "h3": "Free first class",
        "p": "One problem solved together and a check of the learner's current level."
      },
      {
        "h3": "Groups",
        "p": "Fifteen to twenty learners at the same level, comparing solutions."
      },
      {
        "h3": "One to one",
        "p": "For a particular contest, language or gap."
      },
      {
        "h3": "Every attempt reviewed",
        "p": "Wrong answers are studied, not skipped."
      },
      {
        "h3": "Timed on real sizes",
        "p": "Solutions are tested on inputs as big as the constraints allow."
      },
      {
        "h3": "Learner's own code",
        "p": "Coaches guide; learners write every solution."
      }
    ]
  },
  "projectsH2": "Built by our learners",
  "projectsLede": "Work our students built and published. The <a class=\"ag-inline-link\" href=\"/student-labs\">student labs</a> list more.",
  "reviewsLede": "Published reviews from our Google profile, quoted exactly.",
  "fees": {
    "h2": "Fees for competitive programming coaching",
    "lede": "Learners outside India pay one monthly fee in US dollars. There is nothing to pay at sign-up and no contract.",
    "free": [
      "One problem solved together",
      "An honest view of the learner's level",
      "No card details"
    ],
    "group": [
      "Fifteen to twenty learners at one level",
      "Timed sets and group review",
      "A regular coach",
      "Stop after any month"
    ],
    "one": [
      "Coaching around one learner's goals",
      "Any of Python, C++ or Java",
      "Times around school, uni or work"
    ]
  },
  "faq": {
    "eyebrow": "Learners ask",
    "h2": "Questions about competitive programming in Australia",
    "items": [
      {
        "q": "What is competitive programming?",
        "a": "Solving algorithm problems with code against time and memory limits, with answers checked automatically by a judge on correctness and speed."
      },
      {
        "q": "Which language should I use for competitive programming?",
        "a": "Python is quickest to write and enough for many problems; C++ gives more speed when limits are tight. The Australian Informatics Olympiad allows C, C++, Java or Python 3."
      },
      {
        "q": "Does reading input really affect speed?",
        "a": "Yes, for large inputs. In our test, reading a million numbers took 0.735 s with input() per line and 0.208 s with one bulk read in the same Python program."
      },
      {
        "q": "What does sync_with_stdio(false) do in C++?",
        "a": "It stops C++ streams keeping in step with C's input and output, so they can buffer independently. In our run it cut reading a million numbers from 1.434 s to 0.840 s."
      },
      {
        "q": "Is competitive programming only for school students?",
        "a": "No. University students compete in team contests such as the ICPC, and adults practise on online judges. We coach all ages."
      },
      {
        "q": "How is this page different from the AIO pages?",
        "a": "The AIO pages cover the school olympiad itself: dates, divisions and selection. This page covers the skill and contests for every age."
      },
      {
        "q": "How much maths do I need?",
        "a": "School maths is enough to start. Harder contests use more, which is taught as needed."
      },
      {
        "q": "How long until I improve?",
        "a": "It varies from learner to learner. Steady weekly practice matters more than talent, and the review after each timed set shows the progress."
      },
      {
        "q": "Will it help with programming jobs or school results?",
        "a": "We make no job, salary or grade promises. It builds algorithmic thinking and testing habits that are useful in any programming."
      },
      {
        "q": "How is coaching priced?",
        "a": "The first session is free and no card is needed. Monthly prices for group and individual coaching are shown in the fees panel."
      }
    ]
  },
  "elsewhere": {
    "eyebrow": "Also on this site",
    "h2": "Related pages",
    "lede": "Pages beside this one.",
    "items": [
      {
        "href": "/australian-informatics-olympiad-preparation",
        "label": "AIO preparation",
        "p": "For the school olympiad."
      },
      {
        "href": "/aio-to-ioi-pathway-australia",
        "label": "AIO to IOI pathway",
        "p": "The selection route."
      },
      {
        "href": "/c-plus-plus-classes-online-australia",
        "label": "C++ classes online",
        "p": "The language in depth."
      },
      {
        "href": "/software-development-course-australia",
        "label": "Software development course",
        "p": "Testing, Git and debugging."
      },
      {
        "href": "/australian-coding-maths-and-ai-competitions-calendar",
        "label": "Competitions calendar",
        "p": "Contest dates through the year."
      },
      {
        "href": "/coding-classes-in-australia",
        "label": "Coding classes in Australia",
        "p": "The starting point for every Australian topic."
      }
    ]
  },
  "start": {
    "h2": "Book a free coaching session",
    "lede": "Leave your details and we will call at a good time. The first class solves a problem together and ends with a clear recommendation.",
    "readFirst": "Read <a class=\"ag-inline-link\" href=\"/how-we-teach\">how we teach</a> or see the <a class=\"ag-inline-link\" href=\"/courses\">full course list</a>.",
    "note": "WhatsApp from an Australian phone is the fastest route to a coach. The +91 number is our India office; nothing is based in Australia.",
    "formNote": "Free, no card, no obligation."
  },
  "footer": {
    "cols": [
      {
        "h4": "Algorithms",
        "links": [
          {
            "href": "/australian-informatics-olympiad-preparation",
            "label": "AIO preparation"
          },
          {
            "href": "/aio-to-ioi-pathway-australia",
            "label": "AIO to IOI pathway"
          },
          {
            "href": "/c-plus-plus-classes-online-australia",
            "label": "C++ classes"
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
            "href": "/australian-coding-maths-and-ai-competitions-calendar",
            "label": "Competitions calendar"
          },
          {
            "href": "/software-development-course-australia",
            "label": "Software development"
          },
          {
            "href": "/javascript-classes-online-australia",
            "label": "JavaScript classes"
          }
        ]
      }
    ],
    "bottomRight": "Time it on the biggest input"
  },
  "personalityCss": "\n.ag-root.ag-cpau .ag-hero h1 { letter-spacing: -0.023em; }\n.ag-root.ag-cpau .ag-capsule { border-left-width: 5px; border-radius: 2px; }\n.ag-root.ag-cpau .ag-section-head h2 { max-width: 30ch; }\n.ag-root.ag-cpau .ag-table caption { text-align: left; font-weight: 625; }\n.ag-root.ag-cpau .ag-band-head h3 { letter-spacing: -0.013em; }\n.ag-root.ag-cpau .ag-slots { gap: 0.85rem; }\n",
  "dossier": {
    "curriculumAuthority": "Australia, teens to adults. Australian Maths Trust AIO page: \"Allowed languages are C, C++, Java or Python 3.\"; topics include \"opening, reading and writing files\". cppreference std::ios_base::sync_with_stdio: \"If the synchronization is turned off, the C++ standard streams are allowed to buffer their I/O independently, which may be considerably faster in some cases.\"",
    "localProject": "Fast input reading. Seed 2026 inputs of n integers (1..1e9). Best of 3 whole runs: n=1,000 slow.py 0.080 s, fast.py 0.075 s; n=100,000 0.144 vs 0.089; n=1,000,000 0.735 vs 0.208; sums equal (499485000670649 at 1e6). C++ (MinGW g++ 6.3 -O2): cin synced n=1,000 0.055 s, unsynced 0.052 s; n=1e6 1.434 s vs 0.840 s. Baseline note: at n=1,000 the plain input() loop is as good. Lesson family: fast input reading.",
    "requiredMentions": [
      "sync_with_stdio(false)",
      "allowed to buffer their I/O independently",
      "sys.stdin.buffer",
      "0.735 s",
      "0.208 s",
      "1.434 s",
      "0.840 s",
      "Same language, same answer, over three times faster"
    ],
    "sources": [
      {
        "claim": "Australian Maths Trust, Australian Informatics Olympiad: allowed languages; topics include file input and output.",
        "url": "https://www.amt.edu.au/australian-informatics-olympiad"
      },
      {
        "claim": "cppreference, std::ios_base::sync_with_stdio: unsynchronised streams may buffer independently and may be considerably faster.",
        "url": "https://en.cppreference.com/w/cpp/io/ios_base/sync_with_stdio"
      },
      {
        "claim": "Python documentation, sys module: sys.stdin and its underlying binary buffer.",
        "url": "https://docs.python.org/3/library/sys.html"
      }
    ],
    "rejectedClaims": [
      "ICPC South Pacific regional details (dates, sites, team rules): the regional site is parked and icpc.global loads by script; only the contest name is used.",
      "AIO dates, divisions and award bands: left to the AIO pages to avoid duplicating them.",
      "Rankings or ratings on named online judges: not quoted.",
      "Any promise of grades, ATAR, jobs or salaries: not made."
    ]
  }
};
