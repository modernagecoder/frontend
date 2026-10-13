'use strict';
// Maths tutor in Hobart (ag- maths by city; AU cluster Phase 10, row 379).
// Intent: families and adults in Greater Hobart searching for a maths tutor: Prep to Year 12 and adults, the TASC senior
// mathematics courses, and how live online lessons fit Hobart time. Links tasc-mathematics-methods-tutoring and the
// national maths doors rather than repeating them. Hobart, Sandy Bay, Kingston, Glenorchy and Clarence coding pages'
// figures are not used.
// Sources, read raw on 14 October 2026:
//  - TASC, Mathematics courses page (2026): Level 4 Mathematics Specialised MTS415118 and Mathematics Methods MTM415117;
//    Level 3 General Mathematics MTG315123 and Mathematics Methods - Foundation MTM315117; Level 2 Essential Mathematics -
//    Personal MEP215123, Essential Mathematics - Workplace MEW215123, General Mathematics MTG215123; 15 TCE credit points.
//  - DECYP, 2027 term dates: Term 1 4 February to 9 April; Term 2 26 April to 2 July; Term 3 19 July to 24 September;
//    Term 4 11 October to 16 December.
//  - ABS 2021 QuickStats, Greater Hobart (6GHOB): attending primary 20,455; secondary 14,563; vocational 7,808;
//    university or other higher education 12,087.
//  - the LIST (State of Tasmania, CC BY 3.0 AU): Pinnacle Road segments, 10 m contours, spot heights.
// Lesson family: gradient as rise over run, percent grade and angle. Our calculation: lower end of Pinnacle Road between
// the 460 m and 470 m contours (465 m used, range 460 to 470); highest spot height by the road's top 1,271 m (observed);
// rise 806 m (801 to 811). Road distance to the node nearest that spot height (47 m away) 10,574.5 m; straight line
// 3,043.8 m. Road 0.0762 = 7.62% (7.57 to 7.67), 4.36 degrees; straight line 0.2648 = 26.48%, 14.83 degrees.
// Small-angle shortcut: 4.37 degrees (road), 15.17 degrees (straight line).

module.exports = {
  "cluster": "ag",
  "clusterName": "Australia",
  "hub": {
    "group": "city",
    "tag": "HOBART MATHS",
    "label": "Maths tutor in Hobart",
    "blurb": "A maths tutor for Hobart learners from Prep to Year 12 and adults, with the TASC courses explained and a gradient project on the road up kunanyi."
  },
  "slug": "maths-tutor-hobart",
  "code": "mthb",
  "accent": "#365284",
  "accentRationale": "Hobart maths: a cool harbour blue computed for Tasmania, at least 20 RGB from every Tasmanian page accent, 10 from every AU accent and 6 from every colour in use",
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
  "routeLabel": "Maths tutor in Hobart",
  "title": "Maths Tutor in Hobart | Prep to Year 12, TASC and Adults",
  "description": "Online maths tutor for Hobart, Prep to Year 12 and adults: the Tasmanian curriculum and TASC Mathematics Methods and Specialised, live in Hobart time.",
  "ogDescription": "Pinnacle Road climbs about 806 metres in 10.6 kilometres: a 7.6% average grade. How a Hobart maths tutor turns a mountain road into gradient, percent and angle.",
  "twitterDescription": "Hobart maths tutoring, live online: Prep to TASC and adult maths, with problems from Tasmania's own map data.",
  "pageName": "Maths Tutor in Hobart",
  "webPageDescription": "Live online maths tutoring for Greater Hobart learners from Prep to Year 12 and adults, following the Tasmanian curriculum and TASC mathematics courses, with a gradient project on Pinnacle Road.",
  "courseDescription": "Live online maths lessons for Hobart learners, privately or in level-matched classes of fifteen to twenty, from early number to TASC Mathematics Specialised and adult maths.",
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
  "crumbLabel": "Maths tutor in Hobart",
  "navLinks": [
    {
      "href": "#gradient",
      "label": "The kunanyi road"
    },
    {
      "href": "#tasc",
      "label": "TASC courses"
    },
    {
      "href": "#years",
      "label": "By year"
    },
    {
      "href": "#clock",
      "label": "Lesson times"
    },
    {
      "href": "#fees",
      "label": "Fees"
    }
  ],
  "eyebrow": "Hobart &middot; Prep to Year 12 and adults &middot; Live online maths",
  "h1": "Maths tutor in Hobart",
  "lede": "Anyone who has driven up kunanyi knows the road is steep, but how steep? The LIST, Tasmania's official map data, lets us measure it. Pinnacle Road starts between the 460 and 470 metre contour lines and climbs to a spot height of 1,271 metres, over about 10.6 kilometres of road. That is an average grade of about 7.6%, an angle of only 4.4 degrees. Draw a straight line from the bottom to the top instead and the grade jumps to 26.5%. Two honest answers to one question, and the difference is the whole point of gradient: it depends on what you count as the run. That is how we teach maths to Hobart learners, from Prep number work to TASC Mathematics Specialised.",
  "secondaryCta": {
    "href": "#gradient",
    "label": "See the gradient project"
  },
  "wa": "Hello Modern Age Coders, I would like a free maths lesson for a learner in Hobart.",
  "heroNote": "Maths only on this page &middot; Prep to adult &middot; Independent of every Tasmanian school and college",
  "spec": [
    [
      "Learners",
      "Aged 6 to 67"
    ],
    [
      "Prep to 6",
      "Number, fractions, measuring"
    ],
    [
      "Years 7 to 10",
      "Algebra, graphs, trigonometry"
    ],
    [
      "TASC",
      "Levels 2, 3 and 4"
    ],
    [
      "Grown-ups",
      "Work maths and refreshers"
    ],
    [
      "Format",
      "Private or a class of fifteen to twenty"
    ],
    [
      "Clock",
      "Booked in Hobart time"
    ],
    [
      "Local project",
      "Pinnacle Road gradient"
    ]
  ],
  "capsuleQ": "Maths tutor in Hobart, in brief",
  "capsule": "Modern Age Coders is an online maths tutor for Hobart learners aged 6 to 67, teaching primary and high school maths and the TASC senior courses, including General Mathematics, Mathematics Methods and Mathematics Specialised, plus adult maths. Teaching happens over live video, booked in Hobart time, privately or in a class of fifteen to twenty matched by level. Our Hobart example measures Pinnacle Road from LIST data: about 806 metres of climb over 10,574 metres of road, a 7.62% grade. The opening lesson is free.",
  "picks": {
    "eyebrow": "Start here in Hobart",
    "h2": "Three courses most Hobart learners need",
    "lede": "Chosen for the three moments families usually get in touch: number sense slipping in primary, algebra wobbling in high school, and the step up to a TASC course.",
    "items": [
      {
        "course": "mental-maths-mastery-kids",
        "code": "HBA / 1",
        "title": "Number sense, ages 5 to 10",
        "note": "Calculating in the head with understanding, the base for every later topic."
      },
      {
        "course": "algebra-foundations-masterclass",
        "code": "HBA / 2",
        "title": "Algebra, rebuilt",
        "note": "For a Year 7 to 10 student who has lost the thread of letters and equations."
      },
      {
        "course": "complete-high-school-mathematics-mastery",
        "code": "HBA / 3",
        "title": "College maths",
        "note": "Functions, trigonometry and calculus for students heading into TASC Mathematics Methods."
      }
    ]
  },
  "sections": [
    {
      "id": "gradient",
      "tint": "tint",
      "eyebrow": "A Hobart worked example",
      "h2": "How steep is the road up kunanyi?",
      "lede": "Gradient is rise divided by run. The LIST gives both, once you decide what the run should be.",
      "body": [
        {
          "kind": "p",
          "html": "We took every segment of Pinnacle Road from the LIST and linked them into one route. Its lower end lies between the 460 m and 470 m contour lines, so we use 465 m and carry the 10 m uncertainty. The highest spot height beside the road's top is <strong>1,271 m</strong>. The rise is therefore 806 m, give or take 5 m. Following the road from its lower end to the point nearest that spot height covers <strong>10,574.5 m</strong>; a straight line between the same two points is 3,043.8 m."
        },
        {
          "kind": "table",
          "caption": "Two runs, two gradients (our calculation from LIST data)",
          "head": [
            "Run used",
            "Run (m)",
            "Gradient",
            "Percent grade",
            "Angle"
          ],
          "rows": [
            [
              "Along the road",
              "10,574.5",
              "806 / 10,574.5 = 0.0762",
              "7.62%",
              "4.36 degrees"
            ],
            [
              "Straight line, bottom to top",
              "3,043.8",
              "806 / 3,043.8 = 0.2648",
              "26.48%",
              "14.83 degrees"
            ]
          ]
        },
        {
          "kind": "three",
          "mt": true,
          "cells": [
            {
              "h3": "Percent and angle are different",
              "p": "A 7.62% grade is not 7.62 degrees. The angle is the inverse tangent of the gradient, which gives 4.36 degrees here. Mixing the two up is one of the most common gradient mistakes."
            },
            {
              "h3": "The quick method wins on the road",
              "p": "For small slopes, the gradient itself is almost the angle in radians. That shortcut gives 4.37 degrees for the road, out by 0.01 of a degree. For everyday road grades it is all you need."
            },
            {
              "h3": "And fails on the steep line",
              "p": "For the straight line the same shortcut gives 15.17 degrees against the true 14.83. The steeper the slope, the more the shortcut overstates the angle."
            }
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "What students practise",
          "left": [
            "Rise over run, converting a gradient to a percent and to an angle with inverse tangent, and carrying an uncertainty (801 to 811 m) through to the answer: 7.57% to 7.67%.",
            "Younger students compare \"steep\" and \"gentle\" with simple ratios; senior students meet the small-angle approximation properly."
          ],
          "rightH3": "Why the run matters",
          "right": [
            "The road zigzags, so it is more than three times as long as the straight line and its grade is far gentler. Both numbers are correct; they answer different questions.",
            "Real maths starts with choosing which question you are asking."
          ]
        },
        {
          "kind": "source",
          "html": "Data: the LIST, State of Tasmania (CC BY 3.0 AU), <a class=\"ag-inline-link\" href=\"https://services.thelist.tas.gov.au/arcgis/rest/services/Public/TopographyAndRelief/MapServer\" rel=\"noopener\" target=\"_blank\">transport, contour and spot height layers</a>, queried 14 October 2026. Lengths and gradients are our own calculations."
        }
      ]
    },
    {
      "id": "one-road",
      "tint": "",
      "eyebrow": "One road, every year level",
      "h2": "The same Pinnacle Road numbers, from Year 5 to Year 12",
      "lede": "Good data can carry a whole maths course. Here is how the two measurements above, 806 metres of rise and 10,574.5 metres of road, become tasks at different stages.",
      "body": [
        {
          "kind": "table",
          "caption": "Tasks built on the Pinnacle Road figures (our worked answers)",
          "head": [
            "Stage",
            "Question",
            "Worked answer"
          ],
          "rows": [
            [
              "Years 5 and 6",
              "Walking at 4 km/h, how long would the road take?",
              "10.57 km / 4 km/h, about 2 hours 39 minutes"
            ],
            [
              "Years 7 and 8",
              "How many metres higher for each kilometre of road?",
              "806 / 10.57, about 76 m per km"
            ],
            [
              "Years 7 and 8",
              "Write the grade as \"1 in something\"",
              "10,574.5 / 806, about 1 in 13"
            ],
            [
              "Years 9 and 10",
              "A cyclist averages 12 km/h. How fast do they climb?",
              "About 53 minutes, so about 15 m of height per minute"
            ],
            [
              "Years 11 and 12",
              "Why is the average grade not the steepest grade?",
              "An average spreads the climb evenly; real roads have steeper and gentler stretches"
            ]
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "Why one data set helps",
          "left": [
            "When a learner meets the same numbers in a new form each year, the earlier work stops being a forgotten topic and becomes a tool. A Year 9 student who once found the walking time already trusts the 10.57 km figure.",
            "It also shows that units and rounding matter: 10,574.5 metres and 10.6 kilometres are the same road described at different precisions."
          ],
          "rightH3": "Averages and rates of change",
          "right": [
            "The last question leads to a big idea in senior maths. A 7.62% average grade hides the variation along the road, just as an average speed hides stops and starts. Calculus describes how a rate changes from point to point.",
            "Students who have walked or driven a steep road understand this quickly, because they have felt it."
          ]
        }
      ]
    },
    {
      "id": "tasc",
      "tint": "deep",
      "eyebrow": "Years 11 and 12 in Tasmania",
      "h2": "The TASC mathematics courses",
      "lede": "The Tasmanian Assessment, Standards and Certification office lists its senior mathematics courses by level, each with a course code and TCE credit points.",
      "body": [
        {
          "kind": "table",
          "caption": "TASC mathematics courses (TASC course list, read 14 October 2026)",
          "head": [
            "Level",
            "Course",
            "Code",
            "TCE credit points"
          ],
          "rows": [
            [
              "4",
              "Mathematics Specialised",
              "MTS415118",
              "15"
            ],
            [
              "4",
              "Mathematics Methods",
              "MTM415117",
              "15"
            ],
            [
              "3",
              "General Mathematics",
              "MTG315123",
              "15"
            ],
            [
              "3",
              "Mathematics Methods - Foundation",
              "MTM315117",
              "15"
            ],
            [
              "2",
              "Essential Mathematics - Personal",
              "MEP215123",
              "15"
            ],
            [
              "2",
              "Essential Mathematics - Workplace",
              "MEW215123",
              "15"
            ],
            [
              "2",
              "General Mathematics",
              "MTG215123",
              "15"
            ]
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "Which level suits whom",
          "left": [
            "Mathematics Methods - Foundation at Level 3 is a common bridge into Mathematics Methods at Level 4; Mathematics Specialised sits beside Methods for students who want the most mathematics. General Mathematics suits students who want useful, applied maths.",
            "Our <a class=\"ag-inline-link\" href=\"/tasc-mathematics-methods-tutoring\">TASC Mathematics Methods tutoring</a> page goes deeper into that one course."
          ],
          "rightH3": "Our limits",
          "right": [
            "Tutoring builds understanding and exam habits. It cannot promise a particular TASC rating, a score or an ATAR, and we never claim it does.",
            "Folios and internal tasks belong to the student; we teach the maths behind them and leave the writing to the student."
          ]
        },
        {
          "kind": "source",
          "html": "Source: <a class=\"ag-inline-link\" href=\"https://www.tasc.tas.gov.au/students/courses/mathematics/\" rel=\"noopener\" target=\"_blank\">TASC, Mathematics courses</a>, read 14 October 2026."
        }
      ]
    },
    {
      "id": "years",
      "tint": "tint",
      "eyebrow": "Prep to Year 12",
      "h2": "What a Hobart learner works on, year by year",
      "lede": "Each stage has one idea that matters more than the rest, and we build lessons around it.",
      "body": [
        {
          "kind": "table",
          "caption": "The idea at the centre of each stage, with a Hobart-flavoured example",
          "head": [
            "Years",
            "Central idea",
            "An example we might use"
          ],
          "rows": [
            [
              "Prep to 2",
              "Numbers are made of tens and ones",
              "Counting boats at the waterfront in groups of ten"
            ],
            [
              "3 to 6",
              "Fractions of a quantity",
              "Splitting a 2.4 km walk into equal stages"
            ],
            [
              "7 and 8",
              "Letters stand for numbers",
              "A rule for the cost of n bus trips"
            ],
            [
              "9 and 10",
              "Straight-line graphs and their slopes",
              "The grade of a street, as a gradient"
            ],
            [
              "11 and 12",
              "Functions, rates of change and calculus",
              "How fast height changes along a road"
            ],
            [
              "Adults",
              "Whatever was skipped",
              "Percentages for work, rebuilt from scratch"
            ]
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "Tests along the way",
          "left": [
            "Year 3, 5, 7 and 9 students sit NAPLAN; our <a class=\"ag-inline-link\" href=\"/naplan-numeracy-practice-online\">NAPLAN numeracy</a> page covers it. Students who like a challenge can work through <a class=\"ag-inline-link\" href=\"/australian-mathematics-competition-practice-by-year\">Australian Mathematics Competition practice</a>.",
            "This page is about the week-to-week maths underneath those tests."
          ],
          "rightH3": "Two kinds of learner",
          "right": [
            "One kind wants to go further than class allows. The other has lost confidence after a bad topic. The free lesson shows which one we are teaching.",
            "Adult learners have their own groups."
          ]
        }
      ]
    },
    {
      "id": "census",
      "tint": "deep",
      "eyebrow": "Learning in Hobart",
      "h2": "Hobart learners in numbers, and the 2027 school year",
      "lede": "The Census counts who was studying in Greater Hobart, and the education department publishes the 2027 terms our lessons follow.",
      "body": [
        {
          "kind": "table",
          "caption": "Greater Hobart residents attending education, 2021 Census",
          "head": [
            "Where they study",
            "People"
          ],
          "numCols": [
            1
          ],
          "rows": [
            [
              "Primary school",
              "20,455"
            ],
            [
              "Secondary school",
              "14,563"
            ],
            [
              "TAFE and other vocational education",
              "7,808"
            ],
            [
              "University or other higher education",
              "12,087"
            ]
          ]
        },
        {
          "kind": "table",
          "mt": true,
          "caption": "Tasmanian government school terms, 2027",
          "head": [
            "Term",
            "Dates"
          ],
          "rows": [
            [
              "Term 1",
              "4 February to 9 April"
            ],
            [
              "Term 2",
              "26 April to 2 July"
            ],
            [
              "Term 3",
              "19 July to 24 September"
            ],
            [
              "Term 4",
              "11 October to 16 December"
            ]
          ]
        },
        {
          "kind": "p",
          "mt": true,
          "html": "Lessons pause in the school holidays unless a family asks for revision sessions. We have no connection with any Hobart school, college or university."
        },
        {
          "kind": "source",
          "html": "Sources: ABS, <a class=\"ag-inline-link\" href=\"https://abs.gov.au/census/find-census-data/quickstats/2021/6GHOB\" rel=\"noopener\" target=\"_blank\">2021 Census QuickStats, Greater Hobart</a>; <a class=\"ag-inline-link\" href=\"https://www.decyp.tas.gov.au/learning/term-dates/\" rel=\"noopener\" target=\"_blank\">Department for Education, Children and Young People, term dates</a>, read 14 October 2026."
        }
      ]
    },
    {
      "id": "clock",
      "tint": "",
      "eyebrow": "Lesson times",
      "h2": "A Hobart afternoon is our teachers' midday",
      "lede": "India does not use daylight saving; Hobart does, from the first Sunday in October to the first Sunday in April. So the same Hobart lesson time falls at a different hour for the teacher, and we handle that, not you.",
      "body": [
        {
          "kind": "table",
          "caption": "Two sample Hobart lesson times and the matching hour in India",
          "head": [
            "Hobart lesson",
            "Winter (AEST)",
            "Summer (AEDT)"
          ],
          "rows": [
            [
              "4:30pm after school",
              "12:00 noon in India",
              "11:00am in India"
            ],
            [
              "7:00pm evening",
              "2:30pm in India",
              "1:30pm in India"
            ]
          ]
        },
        {
          "kind": "three",
          "mt": true,
          "cells": [
            {
              "h3": "A private teacher",
              "p": "One learner, one teacher, a fixed weekly slot. Good before a TASC exam or after a topic test that went badly."
            },
            {
              "h3": "A level-matched class",
              "p": "Between five and ten learners who are at the same point, taught by the same person each week."
            },
            {
              "h3": "Working we can see",
              "p": "Learners write their steps on a shared board, so mistakes are caught at the step where they start."
            }
          ]
        }
      ]
    }
  ],
  "ladder": {
    "eyebrow": "Progress",
    "h2": "Four milestones on the way to TASC maths",
    "lede": "Milestones, not ages: a learner moves on when the skill holds up in a new problem.",
    "table": {
      "caption": "Milestones and how we check them",
      "head": [
        "Usually around",
        "Milestone",
        "How we check it"
      ],
      "rows": [
        [
          "Prep to Year 3",
          "1. Place value",
          "They explain why 56 is five tens and six ones"
        ],
        [
          "Years 4 to 6",
          "2. Rates",
          "They compare two slopes written as \"1 in 13\" and \"1 in 4\""
        ],
        [
          "Years 7 to 10",
          "3. Gradient",
          "They turn the same rise and run into a fraction, a percent and an angle"
        ],
        [
          "Years 11 and 12",
          "4. Approximation",
          "They say when a shortcut is safe and prove it with numbers"
        ]
      ]
    },
    "left": {
      "h3": "Starting late in college",
      "ps": [
        "A student who joins in Year 11 often needs some Year 9 and 10 algebra mended first. We give an honest estimate of how long at the start.",
        "Trigonometry and functions are the usual gaps."
      ]
    },
    "right": {
      "h3": "Grown-ups",
      "ps": [
        "Adults tend to make quick progress once the words come back to them.",
        "Common reasons: work calculations, a bridging unit, or helping a child."
      ]
    }
  },
  "catalogue": {
    "eyebrow": "All courses",
    "h2": "Maths courses for Hobart learners",
    "lede": "Laid out by stage. Titles are our international course names; the lessons follow the Tasmanian year a learner is in.",
    "bands": [
      {
        "num": "I",
        "h3": "Prep to Year 6",
        "sub": "Primary",
        "courses": [
          {
            "code": "HBA / P1",
            "slug": "early-math-foundations",
            "title": "Early number",
            "blurb": "Ages 4 to 7, with objects to touch."
          },
          {
            "code": "HBA / P2",
            "slug": "elementary-mathematics-complete-masterclass",
            "title": "Primary maths",
            "blurb": "Every primary topic, one at a time."
          },
          {
            "code": "HBA / P3",
            "slug": "abacus-mental-maths-course-for-kids",
            "title": "Abacus",
            "blurb": "Beads first, then mental images."
          }
        ]
      },
      {
        "num": "II",
        "h3": "Years 7 to 10",
        "sub": "High school",
        "courses": [
          {
            "code": "HBA / S1",
            "slug": "comprehensive-middle-school-mathematics-mastery",
            "title": "High school maths",
            "blurb": "Ratio, geometry and equations."
          },
          {
            "code": "HBA / S2",
            "slug": "maths-through-coding",
            "title": "Maths through coding",
            "blurb": "Python as a maths tool, 10 to 15."
          },
          {
            "code": "HBA / S3",
            "slug": "olympiad-competition-mathematics-mastery",
            "title": "Problem solving",
            "blurb": "Harder problems for keen students."
          }
        ]
      },
      {
        "num": "III",
        "h3": "Years 11, 12 and adults",
        "sub": "College and beyond",
        "courses": [
          {
            "code": "HBA / C1",
            "slug": "complete-high-school-mathematics-mastery",
            "title": "Senior maths",
            "blurb": "For TASC Levels 3 and 4."
          },
          {
            "code": "HBA / C2",
            "slug": "statistics-probability-maths-course",
            "title": "Statistics",
            "blurb": "Probability and data in depth."
          },
          {
            "code": "HBA / C3",
            "slug": "complete-business-finance-mathematics-mastery",
            "title": "Money maths",
            "blurb": "Interest and growth for adults."
          }
        ]
      }
    ]
  },
  "how": {
    "eyebrow": "Week to week",
    "h2": "What a Hobart family can expect",
    "lede": "The routine is simple, and it stays the same through the clock changes in October and April.",
    "slots": [
      {
        "time": "Weekday afternoons",
        "l": "Primary and Years 7 to 10."
      },
      {
        "time": "Weekday evenings",
        "l": "College students and adults."
      },
      {
        "time": "Saturday or Sunday",
        "l": "For a slower lesson."
      }
    ],
    "cells": [
      {
        "h3": "A familiar face",
        "p": "Learners keep the same teacher, who knows their history."
      },
      {
        "h3": "A note home",
        "p": "Parents hear briefly and honestly how it went."
      },
      {
        "h3": "Matched classmates",
        "p": "Classes are formed by level, not age alone."
      },
      {
        "h3": "Real numbers",
        "p": "Maps and Census tables sit beside textbook work."
      },
      {
        "h3": "Exam weeks",
        "p": "Extra private lessons can be added before TASC exams."
      },
      {
        "h3": "Why before how",
        "p": "A method is explained before it is drilled."
      }
    ]
  },
  "projectsH2": "What learners build with their maths",
  "projectsLede": "Projects by students who started with number work like this. More in the <a class=\"ag-inline-link\" href=\"/student-labs\">student labs</a>.",
  "reviewsLede": "Unedited reviews from our Google profile.",
  "fees": {
    "h2": "Fees for maths lessons in Hobart",
    "lede": "One monthly fee, charged in US dollars to families outside India; there is no joining fee and no minimum term.",
    "free": [
      "A complete lesson at the right level",
      "Plain advice on next steps",
      "No card required"
    ],
    "group": [
      "A class of fifteen to twenty at one level",
      "One teacher all term",
      "Homework marked",
      "Cancel at the end of any month"
    ],
    "one": [
      "A teacher just for the learner",
      "Shaped around one goal",
      "Handy before TASC exams"
    ]
  },
  "faq": {
    "eyebrow": "Hobart maths questions",
    "h2": "Maths tutoring in Hobart: common questions",
    "items": [
      {
        "q": "Do you tutor maths for Hobart students online?",
        "a": "Yes. Every lesson is live on video and booked in Hobart time, either privately or in a class of fifteen to twenty learners at the same level."
      },
      {
        "q": "Which TASC maths courses can you help with?",
        "a": "General Mathematics at Levels 2 and 3, Mathematics Methods - Foundation, Mathematics Methods and Mathematics Specialised at Level 4, and the Essential Mathematics courses."
      },
      {
        "q": "What is the difference between a percent grade and an angle?",
        "a": "A percent grade is rise over run times 100; the angle is the inverse tangent of rise over run. Pinnacle Road averages a 7.62% grade but only a 4.36 degree angle."
      },
      {
        "q": "How steep is Pinnacle Road on average?",
        "a": "By our calculation from LIST data, about 806 metres of climb over 10,574.5 metres of road: a 7.62% grade, or 4.36 degrees."
      },
      {
        "q": "Will tutoring guarantee a TASC rating or an ATAR?",
        "a": "No. We teach carefully and report honestly, but no tutor can promise a rating, a score or an ATAR."
      },
      {
        "q": "Can a Prep or Year 1 child start?",
        "a": "Yes. Young children begin with counting, place value and shapes, with plenty of objects and pictures."
      },
      {
        "q": "What happens when the clocks change?",
        "a": "Nothing changes for you. Lessons stay at the same Hobart time; we move the teacher's side."
      },
      {
        "q": "Can adults learn too?",
        "a": "Yes, in adult classes or privately, for work, study or simply to understand maths properly."
      },
      {
        "q": "What are the fees?",
        "a": "The first lesson is free. After that a monthly fee applies, shown in the fees panel on this page."
      }
    ]
  },
  "elsewhere": {
    "eyebrow": "Also on this site",
    "h2": "More pages for Tasmanian learners",
    "lede": "Deeper pages on TASC and national maths, and our Hobart coding page.",
    "items": [
      {
        "href": "/tasc-mathematics-methods-tutoring",
        "label": "TASC Mathematics Methods",
        "p": "The Level 4 course in depth."
      },
      {
        "href": "/naplan-numeracy-practice-online",
        "label": "NAPLAN numeracy",
        "p": "Years 3, 5, 7 and 9."
      },
      {
        "href": "/australian-curriculum-maths-year-7-to-10-help",
        "label": "Maths, Years 7 to 10",
        "p": "Help across the national curriculum."
      },
      {
        "href": "/year-12-maths-holiday-revision-australia",
        "label": "Year 12 holiday revision",
        "p": "Short courses in the breaks."
      },
      {
        "href": "/maths-tutor-cost-australia-explained",
        "label": "What a maths tutor costs",
        "p": "Prices and what affects them."
      },
      {
        "href": "/best-coding-classes-in-hobart",
        "label": "Coding classes in Hobart",
        "p": "Programming for Hobart learners."
      }
    ]
  },
  "start": {
    "h2": "Try a free maths lesson",
    "lede": "Tell us the learner's year and what feels hard right now. We teach a proper lesson, then say plainly what would help.",
    "readFirst": "Prefer to read first? See <a class=\"ag-inline-link\" href=\"/how-we-teach\">how we teach</a> or <a class=\"ag-inline-link\" href=\"/online-maths-tutoring-australia\">online maths tutoring across Australia</a>.",
    "note": "Messages reach our India-based team, which is why the number starts with +91; there is no office in Tasmania. WhatsApp is usually the fastest route.",
    "formNote": "Free, no card, no obligation."
  },
  "footer": {
    "cols": [
      {
        "h4": "Tasmanian maths",
        "links": [
          {
            "href": "/tasc-mathematics-methods-tutoring",
            "label": "TASC Mathematics Methods"
          },
          {
            "href": "/naplan-numeracy-practice-online",
            "label": "NAPLAN numeracy"
          },
          {
            "href": "/year-12-maths-holiday-revision-australia",
            "label": "Year 12 revision"
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
            "href": "/maths-tutor-sydney",
            "label": "Maths tutor in Sydney"
          },
          {
            "href": "/australian-mathematics-competition-practice-by-year",
            "label": "Maths competitions"
          }
        ]
      }
    ],
    "bottomRight": "Rise over run, once you choose the run"
  },
  "personalityCss": "\n.ag-root.ag-mthb .ag-hero h1 { letter-spacing: -0.017em; }\n.ag-root.ag-mthb .ag-capsule { border-left-width: 4px; border-radius: 3px; }\n.ag-root.ag-mthb .ag-section-head h2 { max-width: 30ch; }\n.ag-root.ag-mthb .ag-table caption { text-align: left; font-weight: 615; }\n.ag-root.ag-mthb .ag-band-head h3 { letter-spacing: -0.012em; }\n.ag-root.ag-mthb .ag-slots { gap: 0.95rem; }\n",
  "dossier": {
    "curriculumAuthority": "Tasmania: TASC Mathematics courses (Level 4 Mathematics Specialised MTS415118, Mathematics Methods MTM415117; Level 3 General Mathematics MTG315123, Mathematics Methods - Foundation MTM315117; Level 2 Essential Mathematics - Personal MEP215123, - Workplace MEW215123, General Mathematics MTG215123; 15 TCE credit points). DECYP 2027 terms. ABS QuickStats 6GHOB attendance counts.",
    "localProject": "Gradient on Pinnacle Road (LIST): 52 segments, lower end between 460 m and 470 m contours (465 m used); spot height 1,271 m observed; rise 806 m (801 to 811); road distance 10,574.5 m (shortest path over segment lengths to the node 47 m from the spot height); straight line 3,043.8 m. Road 0.0762, 7.62%, 4.36 deg (7.57 to 7.67%); straight 0.2648, 26.48%, 14.83 deg; small-angle shortcut 4.37 and 15.17 deg. Lesson family: gradient as rise over run, percent grade and angle.",
    "requiredMentions": [
      "MTS415118",
      "MTM315117",
      "MEW215123",
      "10,574.5",
      "3,043.8",
      "7.62%",
      "14.83 degrees",
      "20,455",
      "14,563",
      "26 April to 2 July"
    ],
    "sources": [
      {
        "claim": "TASC, Mathematics courses: levels, course names, codes and TCE credit points.",
        "url": "https://www.tasc.tas.gov.au/students/courses/mathematics/"
      },
      {
        "claim": "DECYP, Tasmanian government school term dates for 2027.",
        "url": "https://www.decyp.tas.gov.au/learning/term-dates/"
      },
      {
        "claim": "ABS, 2021 Census QuickStats, Greater Hobart: type of educational institution attending.",
        "url": "https://abs.gov.au/census/find-census-data/quickstats/2021/6GHOB"
      },
      {
        "claim": "the LIST, State of Tasmania (CC BY 3.0 AU): Pinnacle Road segments, 10 m contours, spot heights.",
        "url": "https://services.thelist.tas.gov.au/arcgis/rest/services/Public/TopographyAndRelief/MapServer"
      }
    ],
    "rejectedClaims": [
      "University of Tasmania mathematics pages: returned 403, not circumvented and not quoted.",
      "Census rows by school sector: excluded (sector categories touch religion).",
      "Exact height of the road's lower end: not claimed; it lies between two contour lines and is carried as a range.",
      "Any TASC results, ratings distributions or school comparisons: none on this page.",
      "Named tutoring businesses in Hobart: none named."
    ]
  }
};
