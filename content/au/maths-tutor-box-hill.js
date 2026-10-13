'use strict';
// Maths tutor in Box Hill (ag- maths by city; AU cluster Phase 10, row 383).
// Intent: families and adults in Box Hill, Victoria, searching for a maths tutor: Foundation to Year 12, VCE maths and
// online lessons in Melbourne time. Links the VCE maths doors. The Box Hill coding page's figures (population, Box Hill
// suburb area 3.52 sq km, university count and others) are not used.
// Sources, read raw on 14 October 2026:
//  - VCAA, VCE Mathematics Study Design: "Examination 1 for Mathematical Methods and Examination 1 for Specialist
//    Mathematics are technology-free examinations."; "Students must undertake Unit 3 and Unit 4 as a sequence."; "There are
//    no prerequisites for entry to Units 1, 2 and 3".
//  - Victorian Government, 2027 school terms (as on the Glen Waverley page; quoted here in prose only).
//  - ABS: Box Hill North (SAL20315) 3.9668 sq km and Box Hill South (SAL20316) 3.4903 sq km (ASGS 2021 boundary service);
//    2021 QuickStats, Box Hill (Vic.) SAL20314: attending primary 558; secondary 658; vocational 734; aged 5-9 464; 15-19 649.
// Lesson family: area scale factor (k squared) on scale drawings. Our calculation: map area = real area / (scale
// denominator squared). Box Hill North at 1:10,000 = 396.68 sq cm, at 1:25,000 = 63.47 sq cm (ratio 6.25 = 2.5 squared),
// at 1:5,000 = 1,586.72 sq cm; Box Hill South at 1:10,000 = 349.03 sq cm, at 1:25,000 = 55.84 sq cm. A square of 3.9668
// sq km has sides of 1.99 km, drawn 7.97 cm long at 1:25,000.

module.exports = {
  "cluster": "ag",
  "clusterName": "Australia",
  "hub": {
    "group": "city",
    "tag": "BOX HILL MATHS",
    "label": "Maths tutor in Box Hill",
    "blurb": "Maths for Box Hill learners from Foundation to VCE and adults, with a scale-drawing project that shows why areas scale by the square."
  },
  "slug": "maths-tutor-box-hill",
  "code": "mtbh",
  "accent": "#265839",
  "accentRationale": "Box Hill maths: a deep garden green computed for Victoria, at least 20 RGB from every Victorian page accent, 10 from every AU accent and 6 from every colour in use",
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
  "routeLabel": "Maths tutor in Box Hill",
  "title": "Maths Tutor in Box Hill | Foundation to VCE Maths, Online",
  "description": "Online maths tutor for Box Hill, Victoria: Foundation to Year 12 and adults, Victorian Curriculum maths and VCE Methods and Specialist, live in Melbourne time.",
  "ogDescription": "Change a map from 1:10,000 to 1:25,000 and a Box Hill suburb shrinks from 396.68 to 63.47 square centimetres. Why areas scale by the square.",
  "twitterDescription": "Box Hill maths tutoring, live online: Foundation to VCE and adults, with a scale-drawing project.",
  "pageName": "Maths Tutor in Box Hill",
  "webPageDescription": "Live online maths tutoring for Box Hill learners from Foundation to Year 12 and adults, following the Victorian Curriculum and VCE mathematics, with an area scale factor project on suburb maps.",
  "courseDescription": "Live online maths lessons for Box Hill learners in classes of fifteen to twenty at one level, or one to one, from early number to VCE Specialist Mathematics and adult maths.",
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
  "crumbLabel": "Maths tutor in Box Hill",
  "navLinks": [
    {
      "href": "#scale",
      "label": "Scale drawings"
    },
    {
      "href": "#exams",
      "label": "VCE exams"
    },
    {
      "href": "#ladder-years",
      "label": "By year"
    },
    {
      "href": "#rhythm",
      "label": "Weekly rhythm"
    },
    {
      "href": "#fees",
      "label": "Fees"
    }
  ],
  "eyebrow": "Box Hill &middot; Foundation to Year 12 and adults &middot; Online maths lessons",
  "h1": "Maths tutor in Box Hill",
  "lede": "Print a map of Box Hill North at a scale of 1:10,000 and the suburb covers about 396 square centimetres of paper, roughly a sheet the size of a large paperback. Reprint it at 1:25,000 and the suburb shrinks to about 63 square centimetres. The scale only changed by a factor of 2.5, so why did the area shrink by more than six? Because area depends on two lengths, and both shrink: 2.5 times 2.5 is 6.25. Scale factors for area trip up students from Year 8 to VCE, and they are one of many ideas we teach Box Hill learners with real data, from Foundation counting to VCE Specialist Mathematics.",
  "secondaryCta": {
    "href": "#scale",
    "label": "See the scale project"
  },
  "wa": "Hello Modern Age Coders, I would like a free maths lesson for a learner in Box Hill.",
  "heroNote": "Maths only on this page &middot; Foundation to adult &middot; Independent of every Box Hill school and institute",
  "spec": [
    [
      "Learners",
      "6 to 67"
    ],
    [
      "Foundation to 6",
      "Number sense and measurement"
    ],
    [
      "Years 7 to 10",
      "Ratio, scale and algebra"
    ],
    [
      "VCE",
      "General, Methods, Specialist, Foundation"
    ],
    [
      "Adults",
      "Practical and refresher maths"
    ],
    [
      "Classes",
      "Five to ten, or one to one"
    ],
    [
      "Time zone",
      "Melbourne"
    ],
    [
      "Box Hill project",
      "Area scale factors on maps"
    ]
  ],
  "capsuleQ": "Maths tutor in Box Hill, in brief",
  "capsule": "Modern Age Coders teaches maths online to Box Hill learners aged 6 to 67, following the Victorian Curriculum from Foundation to Year 10, the VCE mathematics studies including Mathematical Methods and Specialist Mathematics, and adult maths. Lessons are live, booked in Melbourne time, in level-matched classes of fifteen to twenty or one to one. Our Box Hill example uses ABS suburb areas to show that changing a map scale by 2.5 changes areas by 6.25. The first lesson is free.",
  "picks": {
    "eyebrow": "Most asked for in Box Hill",
    "h2": "From number sense to VCE",
    "lede": "The three courses that answer most Box Hill enquiries; the rest of the list follows.",
    "items": [
      {
        "course": "abacus-mental-maths-course-for-kids",
        "code": "BXH / 1",
        "title": "Abacus and mental maths",
        "note": "Ages 5 to 10: beads first, then fast and accurate calculation in the head."
      },
      {
        "course": "comprehensive-middle-school-mathematics-mastery",
        "code": "BXH / 2",
        "title": "Years 7 to 10",
        "note": "Ratio, scale, geometry and algebra, taught so that VCE builds on solid ground."
      },
      {
        "course": "complete-high-school-mathematics-mastery",
        "code": "BXH / 3",
        "title": "VCE Methods and Specialist",
        "note": "Functions, calculus and proof, with plenty of technology-free practice."
      }
    ]
  },
  "sections": [
    {
      "id": "scale",
      "tint": "tint",
      "eyebrow": "A Box Hill worked example",
      "h2": "Why a map at a smaller scale shrinks areas so fast",
      "lede": "A scale of 1:10,000 means 1 cm on paper is 10,000 cm, or 100 m, on the ground. Lengths scale by the scale factor; areas scale by its square.",
      "body": [
        {
          "kind": "p",
          "html": "The ABS gives the area of Box Hill North as <strong>3.9668 square kilometres</strong> and Box Hill South as 3.4903 square kilometres. To find each suburb's area on a map, divide the real area in square centimetres by the square of the scale's second number. At 1:10,000 that divisor is 100,000,000."
        },
        {
          "kind": "table",
          "caption": "Suburb areas as they would appear on paper (our calculation from ABS areas)",
          "head": [
            "Map scale",
            "Box Hill North",
            "Box Hill South"
          ],
          "rows": [
            [
              "1:5,000",
              "1,586.72 sq cm",
              "1,396.12 sq cm"
            ],
            [
              "1:10,000",
              "396.68 sq cm",
              "349.03 sq cm"
            ],
            [
              "1:25,000",
              "63.47 sq cm",
              "55.84 sq cm"
            ],
            [
              "1:50,000",
              "15.87 sq cm",
              "13.96 sq cm"
            ]
          ]
        },
        {
          "kind": "three",
          "mt": true,
          "cells": [
            {
              "h3": "The quick rule wins",
              "p": "Going from 1:10,000 to 1:25,000 multiplies lengths by 1/2.5, so areas by 1/6.25. Dividing 396.68 by 6.25 gives 63.47 straight away, with no need to start again from square kilometres."
            },
            {
              "h3": "The classic mistake",
              "p": "Halving a map's scale does not halve an area; it quarters it. From 1:5,000 to 1:10,000, Box Hill North drops from 1,586.72 to 396.68 square centimetres, exactly a quarter."
            },
            {
              "h3": "A length check",
              "p": "A square with Box Hill North's area would have sides of about 1.99 km. At 1:25,000 that side is 7.97 cm, and 7.97 squared is 63.5, matching the table."
            }
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "What students practise",
          "left": [
            "Reading map scales, converting between kilometres, metres and centimetres, and applying the rule that areas scale by k squared and volumes by k cubed.",
            "Years 8 and 9 students work with the table; VCE students later meet the same idea in transformations of functions."
          ],
          "rightH3": "Where it matters",
          "right": [
            "Similar figures, scale drawings, enlargements and models all use the same rule. Students who own it stop guessing which power to use.",
            "The suburb boundaries are real, so the numbers mean something."
          ]
        },
        {
          "kind": "source",
          "html": "Data: ABS, <a class=\"ag-inline-link\" href=\"https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer\" rel=\"noopener\" target=\"_blank\">ASGS 2021 suburbs and localities boundary service</a> (areas), read 14 October 2026. Map areas are our own calculations."
        }
      ]
    },
    {
      "id": "volume",
      "tint": "",
      "eyebrow": "One dimension more",
      "h2": "From k squared to k cubed",
      "lede": "The rule that surprised students on the map grows again in three dimensions. Models and scale replicas make it concrete.",
      "body": [
        {
          "kind": "table",
          "caption": "What happens to length, area and volume when a model is scaled by k",
          "head": [
            "Scale factor k",
            "Lengths multiply by",
            "Areas multiply by",
            "Volumes multiply by"
          ],
          "rows": [
            [
              "2",
              "2",
              "4",
              "8"
            ],
            [
              "2.5",
              "2.5",
              "6.25",
              "15.625"
            ],
            [
              "10",
              "10",
              "100",
              "1,000"
            ],
            [
              "1/2",
              "1/2",
              "1/4",
              "1/8"
            ]
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "A question for Year 9",
          "left": [
            "A model of a building is made at one tenth of full size. The model needs 2 litres of paint for its walls. How much would the real building need? The walls are areas, so the answer is 100 times as much, 200 litres, not 20.",
            "If the model is solid and weighs 3 kilograms, the full-size version, made of the same material, would weigh 1,000 times as much."
          ],
          "rightH3": "Why students get it wrong",
          "right": [
            "Most errors come from applying the length factor to everything. Writing k, k squared or k cubed beside each quantity before calculating removes nearly all of them.",
            "VCE students meet the same idea again with dilations of graphs, where stretching one axis scales areas under curves."
          ]
        }
      ]
    },
    {
      "id": "exams",
      "tint": "deep",
      "eyebrow": "VCE in Victoria",
      "h2": "VCE maths and the technology-free exam",
      "lede": "Victorian senior students take one or more of four VCE mathematics studies. One feature of the exams shapes how we teach Methods and Specialist.",
      "body": [
        {
          "kind": "two",
          "leftH3": "Two exams without a calculator",
          "left": [
            "The VCAA study design states: \"Examination 1 for Mathematical Methods and Examination 1 for Specialist Mathematics are technology-free examinations.\"",
            "So mental arithmetic, exact values and clean algebra still matter at the very top of school maths. Our scale problems are done by hand for exactly that reason."
          ],
          "rightH3": "Units come in a sequence",
          "right": [
            "The design adds that \"Students must undertake Unit 3 and Unit 4 as a sequence\", while \"There are no prerequisites for entry to Units 1, 2 and 3\".",
            "In practice, Methods and Specialist assume strong Year 10 algebra, which is where many students who come to us need help first."
          ]
        },
        {
          "kind": "table",
          "mt": true,
          "caption": "The four VCE mathematics studies and our pages",
          "head": [
            "Study",
            "Our page"
          ],
          "rows": [
            [
              "Foundation Mathematics",
              "<a class=\"ag-inline-link\" href=\"/vce-foundation-maths-help\">VCE Foundation Maths help</a>"
            ],
            [
              "General Mathematics",
              "<a class=\"ag-inline-link\" href=\"/vce-general-maths-tutoring\">VCE General Maths tutoring</a>"
            ],
            [
              "Mathematical Methods",
              "<a class=\"ag-inline-link\" href=\"/vce-maths-methods-tutoring\">VCE Maths Methods tutoring</a>"
            ],
            [
              "Specialist Mathematics",
              "<a class=\"ag-inline-link\" href=\"/vce-specialist-maths-tutoring\">VCE Specialist Maths tutoring</a>"
            ]
          ]
        },
        {
          "kind": "p",
          "mt": true,
          "html": "We never promise a study score or an ATAR; we teach the content well and say honestly how things are going. School-assessed coursework is the student's own."
        },
        {
          "kind": "source",
          "html": "Source: VCAA, <a class=\"ag-inline-link\" href=\"https://www.vcaa.vic.edu.au/sites/default/files/2025-10/2023MathematicsSD.docx\" rel=\"noopener\" target=\"_blank\">VCE Mathematics Study Design</a>, read 14 October 2026."
        }
      ]
    },
    {
      "id": "ladder-years",
      "tint": "tint",
      "eyebrow": "Foundation to Year 10",
      "h2": "What Box Hill learners work on before VCE",
      "lede": "Our lessons follow the Victorian Curriculum year by year, with measurement and ratio threaded through.",
      "body": [
        {
          "kind": "table",
          "caption": "Measurement and ratio across the years",
          "head": [
            "Years",
            "Measurement focus",
            "Ratio and scale focus"
          ],
          "rows": [
            [
              "Foundation to 2",
              "Comparing lengths with informal units",
              "More, fewer, the same"
            ],
            [
              "3 to 6",
              "Metres, kilometres, area of rectangles",
              "Simple map scales and doubling"
            ],
            [
              "7 and 8",
              "Area of triangles and circles",
              "Ratios, rates and scale drawings"
            ],
            [
              "9 and 10",
              "Surface area and volume",
              "Similarity and the k squared rule"
            ]
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "Learners in Box Hill",
          "left": [
            "The 2021 Census counted 558 Box Hill residents at primary school and 658 at secondary school, with 734 in vocational education. There were 464 residents aged 5 to 9 and 649 aged 15 to 19.",
            "Every one of them could join a lesson from home."
          ],
          "rightH3": "Selective entry and NAPLAN",
          "right": [
            "Families preparing for the selective entry test can read <a class=\"ag-inline-link\" href=\"/victorian-selective-entry-exam-maths-practice\">Victorian selective entry maths</a>; NAPLAN numeracy has its own <a class=\"ag-inline-link\" href=\"/naplan-numeracy-practice-online\">practice page</a>.",
            "This page stays with everyday maths."
          ]
        },
        {
          "kind": "source",
          "html": "Source: ABS, <a class=\"ag-inline-link\" href=\"https://abs.gov.au/census/find-census-data/quickstats/2021/SAL20314\" rel=\"noopener\" target=\"_blank\">2021 Census QuickStats, Box Hill (Vic.)</a>, read 14 October 2026."
        }
      ]
    },
    {
      "id": "rhythm",
      "tint": "deep",
      "eyebrow": "Weekly rhythm",
      "h2": "How Box Hill lessons fit around school",
      "lede": "Lessons run through the four Victorian terms and pause in the holidays unless a family asks for revision.",
      "body": [
        {
          "kind": "two",
          "leftH3": "The 2027 school year",
          "left": [
            "Victoria's 2027 Term 1 starts on Wednesday 27 January, with government school students starting the next day, and Term 4 ends on Friday 17 December.",
            "We plan revision blocks for the weeks before end-of-year exams."
          ],
          "rightH3": "Melbourne and India clocks",
          "right": [
            "Teachers work from India, where there is no daylight saving. A 7pm Box Hill lesson falls at 2:30pm for the teacher in winter and 1:30pm in summer.",
            "The lesson time for the family never moves."
          ]
        },
        {
          "kind": "three",
          "mt": true,
          "cells": [
            {
              "h3": "Classes of fifteen to twenty",
              "p": "Grouped by level so explanations land at the right depth for everyone."
            },
            {
              "h3": "One to one",
              "p": "For a particular gap, a test coming up, or a learner who prefers private lessons."
            },
            {
              "h3": "Visible working",
              "p": "A shared board means the teacher sees every line, not only the answer."
            }
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
      "tint": "tint",
      "eyebrow": "Grown-up learners",
      "h2": "Adults learning maths in Box Hill",
      "lede": "Adults join our classes for practical reasons, and scale and measurement are often where they start.",
      "body": [
        {
          "kind": "three",
          "cells": [
            {
              "h3": "Plans and drawings",
              "p": "Reading floor plans and site maps, and working out real areas from them, for renovation or work."
            },
            {
              "h3": "Numbers at work",
              "p": "Percentages, rates and estimates, with checks that catch an answer that is ten times too big."
            },
            {
              "h3": "Helping children",
              "p": "Understanding how schools now teach fractions, ratio and algebra, so homework help matches class."
            }
          ]
        },
        {
          "kind": "p",
          "mt": true,
          "html": "Adult classes are kept separate from school students, and private lessons are available for anyone who prefers them. Steady weekly practice, with real examples, is what brings the skills back."
        }
      ]
    }
  ],
  "ladder": {
    "eyebrow": "Progress",
    "h2": "From comparing lengths to scaling areas",
    "lede": "A learner moves up a level when the skill holds in a problem they have not seen before.",
    "table": {
      "caption": "Levels and what shows each is secure",
      "head": [
        "Typically",
        "Level",
        "Secure when"
      ],
      "rows": [
        [
          "Foundation to Year 2",
          "1. Measuring",
          "They compare two lengths and say which is longer and by how much"
        ],
        [
          "Years 3 to 6",
          "2. Scales",
          "They use a map scale to find a real distance"
        ],
        [
          "Years 7 to 10",
          "3. Similarity",
          "They predict an area after a scale change without recalculating"
        ],
        [
          "VCE",
          "4. Transformations",
          "They connect dilations of graphs to scale factors"
        ]
      ]
    },
    "left": {
      "h3": "Late starters",
      "ps": [
        "Students who arrive in Year 11 often need ratio and algebra strengthened first; we say how long that will take.",
        "It saves time in the end."
      ]
    },
    "right": {
      "h3": "Adult learners",
      "ps": [
        "Adults pick up measurement and percentages quickly once they see the reasoning.",
        "They learn in adult classes or privately."
      ]
    }
  },
  "catalogue": {
    "eyebrow": "Course list",
    "h2": "Maths courses for Box Hill",
    "lede": "Sorted by stage; titles are our course names, lessons follow the Victorian Curriculum and VCE.",
    "bands": [
      {
        "num": "I",
        "h3": "Primary",
        "sub": "Foundation to Year 6",
        "courses": [
          {
            "code": "BXH / P1",
            "slug": "early-math-foundations",
            "title": "First number",
            "blurb": "Ages 4 to 7, concrete and playful."
          },
          {
            "code": "BXH / P2",
            "slug": "elementary-mathematics-complete-masterclass",
            "title": "Primary maths",
            "blurb": "Topic by topic."
          },
          {
            "code": "BXH / P3",
            "slug": "mental-maths-mastery-kids",
            "title": "Mental maths",
            "blurb": "Number sense first."
          }
        ]
      },
      {
        "num": "II",
        "h3": "Secondary",
        "sub": "Years 7 to 10",
        "courses": [
          {
            "code": "BXH / S1",
            "slug": "algebra-foundations-masterclass",
            "title": "Algebra foundations",
            "blurb": "For anyone who fell behind."
          },
          {
            "code": "BXH / S2",
            "slug": "maths-through-coding",
            "title": "Maths through coding",
            "blurb": "Python, ages 10 to 15."
          },
          {
            "code": "BXH / S3",
            "slug": "olympiad-competition-mathematics-mastery",
            "title": "Competition problems",
            "blurb": "Stretch for keen students."
          }
        ]
      },
      {
        "num": "III",
        "h3": "VCE and adults",
        "sub": "Senior and beyond",
        "courses": [
          {
            "code": "BXH / H1",
            "slug": "complete-high-school-mathematics-mastery",
            "title": "Senior maths",
            "blurb": "For VCE studies."
          },
          {
            "code": "BXH / H2",
            "slug": "data-analytics-mathematics-masterclass",
            "title": "Maths for data",
            "blurb": "Statistics and linear algebra."
          },
          {
            "code": "BXH / H3",
            "slug": "complete-business-finance-mathematics-mastery",
            "title": "Business maths",
            "blurb": "Finance and growth, for adults."
          }
        ]
      }
    ]
  },
  "how": {
    "eyebrow": "Practicalities",
    "h2": "Box Hill lessons in practice",
    "lede": "A simple weekly routine that holds steady across daylight saving changes.",
    "slots": [
      {
        "time": "Late afternoon",
        "l": "Primary and junior secondary."
      },
      {
        "time": "Evening",
        "l": "VCE and adults."
      },
      {
        "time": "Weekend",
        "l": "Unhurried longer lessons."
      }
    ],
    "cells": [
      {
        "h3": "Consistent teacher",
        "p": "The same person each week, who knows the learner."
      },
      {
        "h3": "Short reports",
        "p": "Parents hear plainly how lessons are going."
      },
      {
        "h3": "Level groups",
        "p": "Classes built around current skill."
      },
      {
        "h3": "Hand calculation",
        "p": "Practice for the technology-free exams."
      },
      {
        "h3": "Exam run-up",
        "p": "Private lessons can be added before exams."
      },
      {
        "h3": "Reasoning",
        "p": "Learners explain before they practise."
      }
    ]
  },
  "projectsH2": "From our learners",
  "projectsLede": "Projects by students who started with maths like this. More in the <a class=\"ag-inline-link\" href=\"/student-labs\">student labs</a>.",
  "reviewsLede": "Our Google reviews, word for word.",
  "fees": {
    "h2": "Fees for Box Hill maths lessons",
    "lede": "Families outside India pay one monthly fee in US dollars. There is no registration charge and no minimum period.",
    "free": [
      "A real lesson at the right level",
      "A frank summary",
      "No card details"
    ],
    "group": [
      "Fifteen to twenty learners at one level",
      "One teacher all term",
      "Practice reviewed",
      "Leave after any month"
    ],
    "one": [
      "Private lessons",
      "Built around one aim",
      "Good before VCE exams"
    ]
  },
  "faq": {
    "eyebrow": "Box Hill maths questions",
    "h2": "Maths tutoring in Box Hill: questions families ask",
    "items": [
      {
        "q": "Do you provide maths tutoring for Box Hill students?",
        "a": "Yes, live online in Melbourne time, from Foundation to Year 12 and for adults, in level-matched classes or one to one."
      },
      {
        "q": "Which VCE maths do you teach?",
        "a": "Foundation Mathematics, General Mathematics, Mathematical Methods and Specialist Mathematics."
      },
      {
        "q": "Are VCE maths exams done without a calculator?",
        "a": "Examination 1 for Mathematical Methods and Examination 1 for Specialist Mathematics are technology-free, according to the VCAA study design. The other VCE maths exams assume approved technology."
      },
      {
        "q": "Why does an area shrink by more than the map scale changes?",
        "a": "Because area has two dimensions. Changing the scale by a factor k changes areas by k squared, so a change of 2.5 shrinks areas by 6.25."
      },
      {
        "q": "How big is Box Hill North on a 1:25,000 map?",
        "a": "About 63.47 square centimetres, from the ABS area of 3.9668 square kilometres."
      },
      {
        "q": "Can tutoring guarantee a study score?",
        "a": "No. We teach thoroughly and report honestly, but no tutor can promise a study score or an ATAR."
      },
      {
        "q": "Do lesson times change with daylight saving?",
        "a": "Not for the family. Lessons stay at the same Melbourne time; only the teacher's side moves."
      },
      {
        "q": "Do you teach adults in Box Hill?",
        "a": "Yes, in adult classes or one to one."
      },
      {
        "q": "How do volumes change when a model is scaled?",
        "a": "By the cube of the scale factor. A model at one tenth of full size has one hundredth of the surface area and one thousandth of the volume."
      },
      {
        "q": "Is mental arithmetic still worth practising for VCE?",
        "a": "Yes. Two VCE exams are technology-free, and quick, accurate arithmetic also helps learners notice when a calculator answer cannot be right."
      },
      {
        "q": "What are the fees?",
        "a": "The first lesson is free. Monthly fees for classes and private lessons are in the fees panel above."
      }
    ]
  },
  "elsewhere": {
    "eyebrow": "Also on this site",
    "h2": "More for Box Hill learners",
    "lede": "VCE pages, the Melbourne page and our Box Hill coding page.",
    "items": [
      {
        "href": "/vce-specialist-maths-tutoring",
        "label": "VCE Specialist Maths",
        "p": "Structures and proof."
      },
      {
        "href": "/vce-general-maths-tutoring",
        "label": "VCE General Maths",
        "p": "Discrete and applied maths."
      },
      {
        "href": "/year-10-maths-methods-preparation",
        "label": "Year 10 Methods preparation",
        "p": "Before VCE starts."
      },
      {
        "href": "/maths-tutor-glen-waverley",
        "label": "Maths tutor in Glen Waverley",
        "p": "A nearby suburb page."
      },
      {
        "href": "/maths-tutor-melbourne",
        "label": "Maths tutor in Melbourne",
        "p": "The citywide page."
      },
      {
        "href": "/vibe-coding-and-ai-agents-classes-in-box-hill-melbourne",
        "label": "Coding in Box Hill",
        "p": "Programming and AI classes."
      }
    ]
  },
  "start": {
    "h2": "Arrange a free Box Hill lesson",
    "lede": "Share the learner's year and the topic that is causing trouble. We teach a proper lesson, then tell you honestly what would help most.",
    "readFirst": "Or read about <a class=\"ag-inline-link\" href=\"/how-we-teach\">how we teach</a> and <a class=\"ag-inline-link\" href=\"/online-maths-tutoring-australia\">online maths tutoring across Australia</a> first.",
    "note": "The +91 number is our team in India; we do not have premises in Box Hill. A WhatsApp message usually gets the quickest answer.",
    "formNote": "Free, no card, no obligation."
  },
  "footer": {
    "cols": [
      {
        "h4": "Victorian maths",
        "links": [
          {
            "href": "/vce-maths-methods-tutoring",
            "label": "VCE Maths Methods"
          },
          {
            "href": "/vce-foundation-maths-help",
            "label": "VCE Foundation Maths"
          },
          {
            "href": "/victorian-selective-entry-exam-maths-practice",
            "label": "Selective entry maths"
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
            "href": "/maths-tutor-glen-waverley",
            "label": "Maths tutor in Glen Waverley"
          },
          {
            "href": "/maths-tutor-cost-australia-explained",
            "label": "Tutoring costs"
          }
        ]
      }
    ],
    "bottomRight": "Lengths scale by k, areas by k squared"
  },
  "personalityCss": "\n.ag-root.ag-mtbh .ag-hero h1 { letter-spacing: -0.019em; }\n.ag-root.ag-mtbh .ag-capsule { border-left-width: 3px; border-radius: 5px; }\n.ag-root.ag-mtbh .ag-section-head h2 { max-width: 29ch; }\n.ag-root.ag-mtbh .ag-table caption { text-align: left; font-weight: 625; }\n.ag-root.ag-mtbh .ag-band-head h3 { letter-spacing: -0.011em; }\n.ag-root.ag-mtbh .ag-slots { gap: 0.85rem; }\n",
  "dossier": {
    "curriculumAuthority": "Victoria: VCAA VCE Mathematics Study Design: technology-free Examination 1 for Mathematical Methods and Specialist Mathematics; Unit 3 and Unit 4 as a sequence; no prerequisites for Units 1, 2 and 3. Victorian Government 2027 term dates. ABS SAL20314 attendance and age counts; ABS SAL areas for Box Hill North (3.9668) and Box Hill South (3.4903).",
    "localProject": "Area scale factor: map area (sq cm) = area (sq km) x 1e10 / n^2. Box Hill North 1:5,000 1,586.72; 1:10,000 396.68; 1:25,000 63.47; 1:50,000 15.87. Box Hill South 1,396.12; 349.03; 55.84; 13.96. 396.68 / 63.47 = 6.25 = 2.5 squared; equivalent square side 1.99 km, 7.97 cm at 1:25,000. Lesson family: area scale factor (k squared) on scale drawings.",
    "requiredMentions": [
      "Examination 1 for Mathematical Methods and Examination 1 for Specialist Mathematics are technology-free examinations.",
      "Students must undertake Unit 3 and Unit 4 as a sequence",
      "3.9668 square kilometres",
      "396.68 sq cm",
      "63.47 sq cm",
      "1,586.72",
      "658",
      "649"
    ],
    "sources": [
      {
        "claim": "VCAA, VCE Mathematics Study Design: exam technology rules, sequencing and entry.",
        "url": "https://www.vcaa.vic.edu.au/sites/default/files/2025-10/2023MathematicsSD.docx"
      },
      {
        "claim": "ABS ASGS 2021 SAL boundary service: Box Hill North and Box Hill South areas.",
        "url": "https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer"
      },
      {
        "claim": "ABS, 2021 Census QuickStats, Box Hill (Vic.) SAL20314: education attendance and age counts.",
        "url": "https://abs.gov.au/census/find-census-data/quickstats/2021/SAL20314"
      },
      {
        "claim": "Victorian Government, 2027 school terms.",
        "url": "https://www.vic.gov.au/school-term-dates-and-holidays-victoria"
      }
    ],
    "rejectedClaims": [
      "Box Hill suburb area, population and university count: used on the Box Hill coding page, not repeated.",
      "Box Hill Institute course details: the home page gave no course facts relevant to maths; not quoted.",
      "Census rows by school sector: excluded.",
      "Named tutoring businesses or school results: none."
    ]
  }
};
