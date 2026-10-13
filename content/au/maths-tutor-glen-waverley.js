'use strict';
// Maths tutor in Glen Waverley (ag- maths by city; AU cluster Phase 10, row 382).
// Intent: families and adults in Glen Waverley searching for a maths tutor: Foundation to Year 12, the VCE mathematics
// studies, and online lessons in Melbourne time. Links the VCE maths doors (Foundation, General, Methods, Specialist) and
// the Victorian selective entry page. The Glen Waverley coding page's figures (population, families, 10-14 count, schools)
// are not used.
// Sources, read raw on 14 October 2026:
//  - VCAA, VCE Mathematics Study Design (2023MathematicsSD.docx): Foundation Mathematics, General Mathematics,
//    Mathematical Methods and Specialist Mathematics Units 1 to 4; "Enrolment in Specialist Mathematics Units 3 and 4
//    assumes a current enrolment in, or previous completion of, Mathematical Methods Units 3 and 4."
//  - Victorian Government, school term dates 2027: Term 1 Wednesday 27 January (students start Thursday 28 January in
//    government schools) to Thursday 25 March; Term 2 Monday 12 April to Friday 25 June; Term 3 Monday 12 July to Friday
//    17 September; Term 4 Monday 4 October to Friday 17 December.
//  - ABS 2021 QuickStats, Glen Waverley (SAL21013): attending primary 3,510; secondary 3,413; vocational 996; university
//    3,190; aged 5-9 2,547; 15-19 2,749.
// Lesson family: simultaneous equations from a sum and a difference. Our calculation: primary + secondary = 6,923 (our sum,
// not a published total) and difference 97; x = (6,923 + 97) / 2 = 3,510, y = (6,923 - 97) / 2 = 3,413. Second pair:
// university + vocational = 4,186, difference 2,194, giving 3,190 and 996.

module.exports = {
  "cluster": "ag",
  "clusterName": "Australia",
  "hub": {
    "group": "city",
    "tag": "GLEN WAVERLEY MATHS",
    "label": "Maths tutor in Glen Waverley",
    "blurb": "Maths for Glen Waverley learners from Foundation to VCE Specialist and adults, with a simultaneous-equations puzzle built from local Census counts."
  },
  "slug": "maths-tutor-glen-waverley",
  "code": "mtgw",
  "accent": "#853855",
  "accentRationale": "Glen Waverley maths: a muted plum-rose computed for Victoria, at least 20 RGB from every Victorian page accent, 10 from every AU accent and 6 from every colour in use",
  "pageType": "city",
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
  "routeLabel": "Maths tutor in Glen Waverley",
  "title": "Maths Tutor in Glen Waverley | Foundation to VCE and Adults",
  "description": "Online maths tutor for Glen Waverley, Foundation to Year 12 and adults: Victorian Curriculum maths and VCE General, Methods and Specialist, in Melbourne time.",
  "ogDescription": "Two numbers add to 6,923 and differ by 97. What are they? The answer is two real Glen Waverley Census counts, and the method is a Year 9 classic.",
  "twitterDescription": "Glen Waverley maths tutoring, live online: Foundation to VCE Specialist and adults, in Melbourne time.",
  "pageName": "Maths Tutor in Glen Waverley",
  "webPageDescription": "Live online maths tutoring for Glen Waverley learners from Foundation to Year 12 and adults, following the Victorian Curriculum and the VCE mathematics studies, with a simultaneous-equations project on Census counts.",
  "courseDescription": "Live online maths lessons for Glen Waverley learners, privately or in classes of fifteen to twenty matched by level, from early number to VCE Specialist Mathematics and adult maths.",
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
  "crumbLabel": "Maths tutor in Glen Waverley",
  "navLinks": [
    {
      "href": "#puzzle",
      "label": "The puzzle"
    },
    {
      "href": "#vce",
      "label": "VCE maths"
    },
    {
      "href": "#foundation",
      "label": "Foundation to 10"
    },
    {
      "href": "#terms",
      "label": "Terms and times"
    },
    {
      "href": "#fees",
      "label": "Fees"
    }
  ],
  "eyebrow": "Glen Waverley &middot; Foundation to Year 12 and adults &middot; Maths by live video",
  "h1": "Maths tutor in Glen Waverley",
  "lede": "Here is a puzzle made from Glen Waverley itself. In the 2021 Census, the number of residents at primary school and the number at secondary school add up to 6,923, and the primary figure is 97 larger. What are the two numbers? Most Year 9 students reach for trial and error; the elegant answer takes two lines: add the sum and the difference and halve it. The result, 3,510 at primary and 3,413 at secondary, matches the published counts exactly. Simultaneous equations are where algebra stops being exercises and starts answering questions, and that is how we teach maths to Glen Waverley learners, from Foundation number to VCE Specialist Mathematics.",
  "secondaryCta": {
    "href": "#puzzle",
    "label": "Solve the Census puzzle"
  },
  "wa": "Hello Modern Age Coders, I would like a free maths lesson for a learner in Glen Waverley.",
  "heroNote": "Maths only on this page &middot; Foundation to adult &middot; Independent of every Glen Waverley school",
  "spec": [
    [
      "Ages",
      "6 to 67"
    ],
    [
      "Foundation to 6",
      "Number, fractions, measurement"
    ],
    [
      "Years 7 to 10",
      "Algebra and simultaneous equations"
    ],
    [
      "VCE",
      "Foundation, General, Methods, Specialist"
    ],
    [
      "Adults",
      "Work maths and refreshers"
    ],
    [
      "Lessons",
      "Live video, private or five to ten"
    ],
    [
      "Clock",
      "Melbourne time"
    ],
    [
      "Local puzzle",
      "Census sums and differences"
    ]
  ],
  "capsuleQ": "Maths tutor in Glen Waverley, in brief",
  "capsule": "Modern Age Coders is an online maths tutor for Glen Waverley learners aged 6 to 67: Victorian Curriculum maths from Foundation to Year 10, the VCE studies Foundation Mathematics, General Mathematics, Mathematical Methods and Specialist Mathematics, and adult maths. Lessons run on live video in Melbourne time, privately or in level-matched classes of fifteen to twenty. Our local example solves a pair of simultaneous equations whose answers are Glen Waverley's Census counts of primary and secondary students. The first lesson is free.",
  "picks": {
    "eyebrow": "Where Glen Waverley families start",
    "h2": "Three courses for three stages",
    "lede": "The courses Glen Waverley families ask for most, from early primary to VCE. Everything else is listed below.",
    "items": [
      {
        "course": "elementary-mathematics-complete-masterclass",
        "code": "GLW / 1",
        "title": "Foundation to Year 6",
        "note": "Number, fractions and measurement, with reasoning as important as speed."
      },
      {
        "course": "algebra-foundations-masterclass",
        "code": "GLW / 2",
        "title": "Algebra for Years 7 to 10",
        "note": "Expressions, equations and simultaneous equations, built carefully from arithmetic."
      },
      {
        "course": "complete-high-school-mathematics-mastery",
        "code": "GLW / 3",
        "title": "VCE maths",
        "note": "Functions, calculus, probability and proof for Methods and Specialist students."
      }
    ]
  },
  "sections": [
    {
      "id": "puzzle",
      "tint": "tint",
      "eyebrow": "A Glen Waverley worked example",
      "h2": "Two numbers from a sum and a difference",
      "lede": "The ABS publishes how many Glen Waverley residents attend each kind of educational institution. We hid two of the counts and kept only their sum and their difference.",
      "body": [
        {
          "kind": "p",
          "html": "Let <em>p</em> be the number at primary school and <em>s</em> the number at secondary school. We know <em>p</em> + <em>s</em> = 6,923 and <em>p</em> &minus; <em>s</em> = 97. Adding the two equations gives 2<em>p</em> = 7,020, so <em>p</em> = 3,510. Subtracting gives 2<em>s</em> = 6,826, so <em>s</em> = 3,413. Both match the 2021 QuickStats counts for Glen Waverley."
        },
        {
          "kind": "table",
          "caption": "Two hidden pairs and how they come back (our calculation from ABS counts)",
          "head": [
            "Pair",
            "Sum",
            "Difference",
            "(Sum + difference) / 2",
            "(Sum - difference) / 2"
          ],
          "rows": [
            [
              "Primary and secondary",
              "6,923",
              "97",
              "3,510",
              "3,413"
            ],
            [
              "University and vocational",
              "4,186",
              "2,194",
              "3,190",
              "996"
            ]
          ]
        },
        {
          "kind": "three",
          "mt": true,
          "cells": [
            {
              "h3": "The simple method wins",
              "p": "For a sum and a difference, halving (sum + difference) gives the larger number at once. Substitution, elimination or a matrix all reach the same place with more writing."
            },
            {
              "h3": "Why it always works",
              "p": "Adding p + s and p - s cancels s and doubles p. Once students see the cancellation, the shortcut is a consequence, not a trick to memorise."
            },
            {
              "h3": "A sum we made, not a total",
              "p": "The sums here are our own arithmetic. The ABS adjusts small counts for privacy, so we never present added-up parts as an official total."
            }
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "What students practise",
          "left": [
            "Writing two equations from words, eliminating a variable, checking the answer in both equations, and noticing when a quicker route exists.",
            "Years 9 and 10 students meet this as linear simultaneous equations; VCE students later solve larger systems with matrices and see the same idea."
          ],
          "rightH3": "When the shortcut stops",
          "right": [
            "If the second equation is not a plain difference, for example 2p - s = 3,607, halving no longer works and elimination is the honest tool.",
            "Knowing which situation you are in is the real skill."
          ]
        },
        {
          "kind": "source",
          "html": "Data: ABS, <a class=\"ag-inline-link\" href=\"https://abs.gov.au/census/find-census-data/quickstats/2021/SAL21013\" rel=\"noopener\" target=\"_blank\">2021 Census QuickStats, Glen Waverley</a>, read 14 October 2026. Sums, differences and solutions are our own."
        }
      ]
    },
    {
      "id": "wordproblems",
      "tint": "",
      "eyebrow": "Beyond the puzzle",
      "h2": "Where sum-and-difference problems turn up",
      "lede": "Once students recognise the pattern, they find it all over their textbooks and in everyday questions.",
      "body": [
        {
          "kind": "table",
          "caption": "The same structure in different clothes",
          "head": [
            "Situation",
            "Sum",
            "Difference",
            "What you find"
          ],
          "rows": [
            [
              "Ages of two siblings",
              "Their ages add to 26",
              "One is 4 years older",
              "15 and 11"
            ],
            [
              "Two-digit number",
              "Digits add to 11",
              "Digits differ by 3",
              "The digits 7 and 4"
            ],
            [
              "Speeds with and against a current",
              "Downstream speed",
              "Upstream speed",
              "Boat speed and current speed"
            ],
            [
              "Census counts, as above",
              "6,923",
              "97",
              "3,510 and 3,413"
            ]
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "The river-current version",
          "left": [
            "A boat going downstream moves at its own speed plus the current; upstream, its speed minus the current. Those two measured speeds are a sum and a difference, so the speed of the boat itself is their average and the current is half their difference.",
            "It is the same two-line method, and Year 10 students are often delighted to see a physics question fall to it."
          ],
          "rightH3": "Checking, every time",
          "right": [
            "Students substitute both answers back into both original equations before writing a conclusion. It takes ten seconds and catches most slips.",
            "In VCE, the same discipline applies to much longer systems, where a single sign error can undo a page of work."
          ]
        }
      ]
    },
    {
      "id": "vce",
      "tint": "deep",
      "eyebrow": "Senior maths in Victoria",
      "h2": "The four VCE mathematics studies",
      "lede": "The VCAA study design covers four mathematics studies, each running from Unit 1 to Unit 4.",
      "body": [
        {
          "kind": "table",
          "caption": "VCE mathematics studies (VCAA Mathematics Study Design, read 14 October 2026)",
          "head": [
            "Study",
            "Focus in a sentence",
            "Our detailed page"
          ],
          "rows": [
            [
              "Foundation Mathematics Units 1 to 4",
              "Maths for everyday, workplace and community contexts",
              "<a class=\"ag-inline-link\" href=\"/vce-foundation-maths-help\">VCE Foundation Maths</a>"
            ],
            [
              "General Mathematics Units 1 to 4",
              "Non-calculus and discrete mathematics",
              "<a class=\"ag-inline-link\" href=\"/vce-general-maths-tutoring\">VCE General Maths</a>"
            ],
            [
              "Mathematical Methods Units 1 to 4",
              "Functions, calculus, probability and statistics",
              "<a class=\"ag-inline-link\" href=\"/vce-maths-methods-tutoring\">VCE Maths Methods</a>"
            ],
            [
              "Specialist Mathematics Units 1 to 4",
              "Mathematical structures, reasoning and proof",
              "<a class=\"ag-inline-link\" href=\"/vce-specialist-maths-tutoring\">VCE Specialist Maths</a>"
            ]
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "Specialist depends on Methods",
          "left": [
            "The study design is explicit: \"Enrolment in Specialist Mathematics Units 3 and 4 assumes a current enrolment in, or previous completion of, Mathematical Methods Units 3 and 4.\"",
            "Students planning Specialist should make sure their Methods algebra is secure by the end of Year 11."
          ],
          "rightH3": "No promises about scores",
          "right": [
            "We teach the content and exam habits thoroughly. We do not promise a study score or an ATAR, because those depend on the student and the exams.",
            "School-assessed coursework stays the student's own work."
          ]
        },
        {
          "kind": "source",
          "html": "Source: VCAA, <a class=\"ag-inline-link\" href=\"https://www.vcaa.vic.edu.au/sites/default/files/2025-10/2023MathematicsSD.docx\" rel=\"noopener\" target=\"_blank\">VCE Mathematics Study Design</a>, read 14 October 2026."
        }
      ]
    },
    {
      "id": "foundation",
      "tint": "tint",
      "eyebrow": "Foundation to Year 10",
      "h2": "Maths before VCE in Glen Waverley",
      "lede": "Most of what decides how VCE goes is built between Foundation and Year 10. Each band below has a skill we make sure is secure.",
      "body": [
        {
          "kind": "table",
          "caption": "A secure skill for each band",
          "head": [
            "Band",
            "Skill we make secure",
            "A quick check"
          ],
          "rows": [
            [
              "Foundation to Year 2",
              "Counting on and back, tens and ones",
              "What is 10 more than 47?"
            ],
            [
              "Years 3 to 6",
              "Multiplication facts and fractions",
              "Which is larger, 3/8 or 2/5?"
            ],
            [
              "Years 7 and 8",
              "Expressions and one-step equations",
              "If 3x + 4 = 19, what is x?"
            ],
            [
              "Years 9 and 10",
              "Linear and simultaneous equations",
              "Two numbers add to 50 and differ by 8"
            ]
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "Selective entry and NAPLAN",
          "left": [
            "Year 8 families considering a selective school can read our <a class=\"ag-inline-link\" href=\"/victorian-selective-entry-exam-maths-practice\">Victorian selective entry maths</a> page, and NAPLAN numeracy has <a class=\"ag-inline-link\" href=\"/naplan-numeracy-practice-online\">its own page</a>.",
            "Everyday maths is what makes both manageable."
          ],
          "rightH3": "Glen Waverley learners",
          "right": [
            "The 2021 Census counted 2,547 Glen Waverley residents aged 5 to 9 and 2,749 aged 15 to 19, with 3,190 at university and 996 in vocational education.",
            "Lessons are online, so learners join from home after school."
          ]
        }
      ]
    },
    {
      "id": "terms",
      "tint": "deep",
      "eyebrow": "Terms and times",
      "h2": "The 2027 Victorian school year, on the Melbourne clock",
      "lede": "Lessons follow the Victorian terms and are booked in Melbourne time, which changes for daylight saving in October and April.",
      "body": [
        {
          "kind": "table",
          "caption": "Victorian school terms, 2027",
          "head": [
            "Term",
            "Dates"
          ],
          "rows": [
            [
              "Term 1",
              "Wednesday 27 January to Thursday 25 March (government school students start Thursday 28 January)"
            ],
            [
              "Term 2",
              "Monday 12 April to Friday 25 June"
            ],
            [
              "Term 3",
              "Monday 12 July to Friday 17 September"
            ],
            [
              "Term 4",
              "Monday 4 October to Friday 17 December"
            ]
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "On the teacher's side",
          "left": [
            "Teachers work from India, where clocks never change. A 6pm Glen Waverley lesson is 1:30pm for them in winter and 12:30pm in summer; nothing changes for the family.",
            "Holiday revision runs by arrangement."
          ],
          "rightH3": "Private or in a class",
          "right": [
            "A private lesson targets one gap or deadline. A class of fifteen to twenty keeps steady pace with classmates at the same level.",
            "Every lesson uses a shared board so the teacher sees each step."
          ]
        },
        {
          "kind": "source",
          "html": "Source: Victorian Government, <a class=\"ag-inline-link\" href=\"https://www.vic.gov.au/school-term-dates-and-holidays-victoria\" rel=\"noopener\" target=\"_blank\">school term dates and holidays</a>, read 14 October 2026."
        }
      ]
    },
    {
      "id": "adults",
      "tint": "",
      "eyebrow": "Adult learners",
      "h2": "Maths for grown-ups in Glen Waverley",
      "lede": "Adults learn in their own classes or privately, and the reasons are usually practical.",
      "body": [
        {
          "kind": "three",
          "cells": [
            {
              "h3": "Helping at home",
              "p": "Parents who want to understand how primary and secondary methods are taught now, so homework help does not contradict school."
            },
            {
              "h3": "Work and study",
              "p": "Spreadsheets, percentages and statistics for work, or a refresher before a university bridging subject."
            },
            {
              "h3": "Unfinished business",
              "p": "People who stopped maths early and want to understand algebra properly this time, at their own pace."
            }
          ]
        },
        {
          "kind": "p",
          "mt": true,
          "html": "The Census puzzle above works well with adults too. It turns a page of numbers into a question, and the two-line answer is a satisfying reminder that algebra is a tool, not a test."
        }
      ]
    }
  ],
  "ladder": {
    "eyebrow": "Progress",
    "h2": "From counting on to VCE algebra",
    "lede": "Each step is reached when the skill works on an unfamiliar problem, not after a fixed number of weeks.",
    "table": {
      "caption": "Steps on the way to VCE",
      "head": [
        "Around",
        "Step",
        "Reached when the learner can"
      ],
      "rows": [
        [
          "Foundation to Year 2",
          "1. Counting",
          "Count on and back in tens from any number"
        ],
        [
          "Years 3 to 6",
          "2. Fractions",
          "Compare fractions and explain the comparison"
        ],
        [
          "Years 7 to 10",
          "3. Equations",
          "Solve a pair of simultaneous equations two ways"
        ],
        [
          "VCE",
          "4. Systems",
          "Choose the quickest valid method and justify it"
        ]
      ]
    },
    "left": {
      "h3": "Joining in Year 11",
      "ps": [
        "Students who start late often need Years 9 and 10 algebra rebuilt first; we give a realistic timeline at the first lesson.",
        "Functions and equations are the usual gaps."
      ]
    },
    "right": {
      "h3": "Adults",
      "ps": [
        "Adults tend to move quickly once they see why methods work.",
        "Many start with percentages and equations."
      ]
    }
  },
  "catalogue": {
    "eyebrow": "Every course",
    "h2": "Maths courses for Glen Waverley",
    "lede": "Grouped by stage; card titles are our course names, lessons follow the Victorian Curriculum and VCE studies.",
    "bands": [
      {
        "num": "I",
        "h3": "Foundation to Year 6",
        "sub": "Primary",
        "courses": [
          {
            "code": "GLW / P1",
            "slug": "early-math-foundations",
            "title": "Early maths",
            "blurb": "Ages 4 to 7, hands on."
          },
          {
            "code": "GLW / P2",
            "slug": "elementary-mathematics-complete-masterclass",
            "title": "Primary maths",
            "blurb": "Every topic, properly."
          },
          {
            "code": "GLW / P3",
            "slug": "abacus-mental-maths-course-for-kids",
            "title": "Abacus",
            "blurb": "Mental calculation, 5 to 10."
          }
        ]
      },
      {
        "num": "II",
        "h3": "Years 7 to 10",
        "sub": "Secondary",
        "courses": [
          {
            "code": "GLW / S1",
            "slug": "comprehensive-middle-school-mathematics-mastery",
            "title": "Years 7 to 10 maths",
            "blurb": "The full junior course."
          },
          {
            "code": "GLW / S2",
            "slug": "maths-through-coding",
            "title": "Maths through coding",
            "blurb": "Python for maths ideas."
          },
          {
            "code": "GLW / S3",
            "slug": "olympiad-competition-mathematics-mastery",
            "title": "Competition maths",
            "blurb": "For strong problem solvers."
          }
        ]
      },
      {
        "num": "III",
        "h3": "VCE and adults",
        "sub": "Senior and beyond",
        "courses": [
          {
            "code": "GLW / H1",
            "slug": "complete-high-school-mathematics-mastery",
            "title": "VCE maths",
            "blurb": "Methods and Specialist."
          },
          {
            "code": "GLW / H2",
            "slug": "statistics-probability-maths-course",
            "title": "Statistics",
            "blurb": "Probability in depth."
          },
          {
            "code": "GLW / H3",
            "slug": "college-mathematics-complete-masterclass",
            "title": "University maths",
            "blurb": "Calculus and linear algebra."
          }
        ]
      }
    ]
  },
  "how": {
    "eyebrow": "How it runs",
    "h2": "A week of maths from Glen Waverley",
    "lede": "Fixed weekly times on the Melbourne clock, with the teacher's side adjusted at each daylight saving change.",
    "slots": [
      {
        "time": "After 4pm",
        "l": "Primary and Years 7 to 10."
      },
      {
        "time": "After 6pm",
        "l": "VCE students and adults."
      },
      {
        "time": "Weekends",
        "l": "Longer sessions on request."
      }
    ],
    "cells": [
      {
        "h3": "Same teacher",
        "p": "Continuity from week to week and term to term."
      },
      {
        "h3": "Parent notes",
        "p": "Short, honest updates after lessons."
      },
      {
        "h3": "Grouped by level",
        "p": "Classes form around what learners can do."
      },
      {
        "h3": "Local numbers",
        "p": "Census counts and maps alongside exercises."
      },
      {
        "h3": "Before exams",
        "p": "Extra private lessons can be added."
      },
      {
        "h3": "Methods explained",
        "p": "Why a method works comes before practice."
      }
    ]
  },
  "projectsH2": "Built by our learners",
  "projectsLede": "Projects by students who began with number work like this. The <a class=\"ag-inline-link\" href=\"/student-labs\">student labs</a> have more.",
  "reviewsLede": "Reviews from our Google profile, as written.",
  "fees": {
    "h2": "Fees for Glen Waverley maths lessons",
    "lede": "Families outside India pay a single monthly fee in US dollars. No sign-up charge and no fixed term.",
    "free": [
      "A full lesson at the learner's level",
      "Honest advice afterwards",
      "No card details"
    ],
    "group": [
      "A class of fifteen to twenty at one level",
      "The same teacher all term",
      "Practice marked",
      "Stop after any month"
    ],
    "one": [
      "Private teaching",
      "Shaped around one aim",
      "Useful before VCE exams"
    ]
  },
  "faq": {
    "eyebrow": "Glen Waverley maths questions",
    "h2": "Questions about a maths tutor in Glen Waverley",
    "items": [
      {
        "q": "Do you tutor maths for Glen Waverley students?",
        "a": "Yes, live online in Melbourne time, from Foundation to Year 12 and for adults, privately or in level-matched classes."
      },
      {
        "q": "Which VCE maths studies do you teach?",
        "a": "Foundation Mathematics, General Mathematics, Mathematical Methods and Specialist Mathematics, across Units 1 to 4."
      },
      {
        "q": "Can a student take Specialist without Methods?",
        "a": "The VCAA study design says enrolment in Specialist Mathematics Units 3 and 4 assumes current enrolment in, or completion of, Mathematical Methods Units 3 and 4."
      },
      {
        "q": "How do you find two numbers from their sum and difference?",
        "a": "Add the sum and difference and halve to get the larger; subtract and halve to get the smaller. With a sum of 6,923 and a difference of 97, the numbers are 3,510 and 3,413."
      },
      {
        "q": "Will tutoring guarantee a study score or ATAR?",
        "a": "No. We teach thoroughly and report honestly, but scores depend on the student and the exams."
      },
      {
        "q": "Do you help with selective entry maths?",
        "a": "Yes, on a separate page for the Victorian selective entry test; this page covers everyday maths at every level."
      },
      {
        "q": "What time are lessons?",
        "a": "At fixed Melbourne times, after school or in the evening; the daylight saving changes are handled on our side."
      },
      {
        "q": "Can adults learn maths with you?",
        "a": "Yes, in adult classes or privately."
      },
      {
        "q": "Is maths through coding useful for Glen Waverley students?",
        "a": "For many, yes. Writing a short Python program to test a guess, such as checking every pair of numbers with a given sum, makes algebra feel less abstract, and it suits students aged 10 to 15."
      },
      {
        "q": "Do you teach Foundation Mathematics as well as Methods?",
        "a": "Yes. Foundation and General Mathematics students get the same care as Methods and Specialist students, with examples chosen for practical, everyday contexts."
      },
      {
        "q": "How much are lessons?",
        "a": "The first lesson is free. Monthly fees for classes and private lessons appear in the fees panel on this page."
      }
    ]
  },
  "elsewhere": {
    "eyebrow": "Also on this site",
    "h2": "More for Glen Waverley learners",
    "lede": "VCE pages, the Melbourne maths page and our Glen Waverley coding page.",
    "items": [
      {
        "href": "/vce-maths-methods-tutoring",
        "label": "VCE Maths Methods",
        "p": "Functions, calculus, probability."
      },
      {
        "href": "/vce-specialist-maths-tutoring",
        "label": "VCE Specialist Maths",
        "p": "Proof and structures."
      },
      {
        "href": "/victorian-selective-entry-exam-maths-practice",
        "label": "Selective entry maths",
        "p": "For Year 8 applicants."
      },
      {
        "href": "/maths-tutor-melbourne",
        "label": "Maths tutor in Melbourne",
        "p": "The citywide page."
      },
      {
        "href": "/maths-tutor-cost-australia-explained",
        "label": "Maths tutoring costs",
        "p": "Prices explained."
      },
      {
        "href": "/best-coding-and-ai-classes-in-glen-waverley-melbourne",
        "label": "Coding in Glen Waverley",
        "p": "Programming for the suburb."
      }
    ]
  },
  "start": {
    "h2": "Book a free Glen Waverley lesson",
    "lede": "Tell us the learner's year level and what is hard at the moment. We teach a real lesson and then give a frank view of next steps.",
    "readFirst": "Read first if you like: <a class=\"ag-inline-link\" href=\"/how-we-teach\">how we teach</a> and <a class=\"ag-inline-link\" href=\"/online-maths-tutoring-australia\">online maths tutoring in Australia</a>.",
    "note": "Our team is based in India, which is why the number begins +91; we have no office in Glen Waverley. WhatsApp is the fastest way to reach us.",
    "formNote": "Free, no card, no obligation."
  },
  "footer": {
    "cols": [
      {
        "h4": "Victorian maths",
        "links": [
          {
            "href": "/vce-general-maths-tutoring",
            "label": "VCE General Maths"
          },
          {
            "href": "/vce-foundation-maths-help",
            "label": "VCE Foundation Maths"
          },
          {
            "href": "/year-10-maths-methods-preparation",
            "label": "Year 10 Methods preparation"
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
            "href": "/online-maths-tutoring-australia",
            "label": "Online maths tutoring"
          },
          {
            "href": "/maths-tutor-melbourne",
            "label": "Maths tutor in Melbourne"
          },
          {
            "href": "/australian-mathematics-competition-practice-by-year",
            "label": "Maths competitions"
          }
        ]
      }
    ],
    "bottomRight": "Add, halve, check both equations"
  },
  "personalityCss": "\n.ag-root.ag-mtgw .ag-hero h1 { letter-spacing: -0.016em; }\n.ag-root.ag-mtgw .ag-capsule { border-left-width: 5px; border-radius: 6px; }\n.ag-root.ag-mtgw .ag-section-head h2 { max-width: 31ch; }\n.ag-root.ag-mtgw .ag-table caption { text-align: left; font-weight: 605; }\n.ag-root.ag-mtgw .ag-band-head h3 { letter-spacing: -0.013em; }\n.ag-root.ag-mtgw .ag-slots { gap: 1.05rem; }\n",
  "dossier": {
    "curriculumAuthority": "Victoria: VCAA VCE Mathematics Study Design (Foundation Mathematics, General Mathematics, Mathematical Methods, Specialist Mathematics Units 1 to 4; Specialist Units 3 and 4 assumes Methods Units 3 and 4). Victorian Government 2027 term dates. ABS SAL21013 QuickStats attendance and age counts.",
    "localProject": "Sum and difference: primary 3,510 + secondary 3,413 = 6,923 (our sum), difference 97; (6,923 + 97) / 2 = 3,510; (6,923 - 97) / 2 = 3,413. University 3,190 + vocational 996 = 4,186, difference 2,194. Lesson family: simultaneous equations from a sum and a difference.",
    "requiredMentions": [
      "Enrolment in Specialist Mathematics Units 3 and 4 assumes a current enrolment in, or previous completion of, Mathematical Methods Units 3 and 4.",
      "6,923",
      "3,510",
      "3,413",
      "2,194",
      "2,547",
      "Monday 12 July to Friday 17 September",
      "Foundation Mathematics Units 1 to 4"
    ],
    "sources": [
      {
        "claim": "VCAA, VCE Mathematics Study Design (2023): the four studies, Units 1 to 4, and the Specialist enrolment assumption.",
        "url": "https://www.vcaa.vic.edu.au/sites/default/files/2025-10/2023MathematicsSD.docx"
      },
      {
        "claim": "Victorian Government, school term dates 2027.",
        "url": "https://www.vic.gov.au/school-term-dates-and-holidays-victoria"
      },
      {
        "claim": "ABS, 2021 Census QuickStats, Glen Waverley (SAL21013): education attendance and age counts.",
        "url": "https://abs.gov.au/census/find-census-data/quickstats/2021/SAL21013"
      }
    ],
    "rejectedClaims": [
      "Glen Waverley population, family count and 10 to 14 age count: used on the Glen Waverley coding page, not repeated.",
      "School names or school results: none on this page.",
      "Census rows by school sector: excluded.",
      "The sum of two published counts presented as an official total: not done; sums are labelled as our arithmetic.",
      "Named tutoring businesses: none named."
    ]
  }
};
