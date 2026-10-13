'use strict';
// Maths tutor in Parramatta (ag- maths by city; AU cluster Phase 10, row 381).
// Intent: families and adults in Parramatta and nearby suburbs searching for a maths tutor: Kindergarten to Year 12, the
// NSW Stage 6 mathematics courses for the HSC, and online lessons in Sydney time. Links the NSW maths doors (OC, selective,
// NAPLAN, HSC Standard, Advanced, Extension 1 and 2). The Parramatta coding page's figures (LGA counts, schools) are not used.
// Sources, read raw on 14 October 2026:
//  - NESA, Stage 6 Mathematics learning area page: Mathematics Advanced Stage 6 (2017), Mathematics Extension 1 Stage 6
//    (2017), Mathematics Extension 2 Stage 6 (2017), Mathematics Life Skills Stage 6 (2017), Mathematics Standard Stage 6
//    (2017), Numeracy Stage 6 (CEC) (2021).
//  - NSW Department of Education, 2027 term dates (Eastern division): Term 1 28 January to 9 April; Term 2 27 April to
//    2 July; Term 3 19 July to 24 September; Term 4 11 October to 20 December.
//  - Greater Sydney Parklands home page: "Parramatta Park is 85 hectares"; Western Sydney Parklands "Covering 5,280
//    hectares and stretching over 27 km"; "more than 6,000 hectares of parklands across Greater Sydney".
//  - ABS: Parramatta suburb (SAL13167) area 5.2345 sq km (ASGS 2021 boundary service); 2021 QuickStats: attending primary
//    1,996; secondary 865; vocational 1,126; university 2,467.
// Lesson family: area units, square metres to hectares. Our calculation: 85 ha = 850,000 sq m = 0.85 sq km; Parramatta
// suburb 5.2345 sq km = 523.45 ha = 5,234,500 sq m; park as share of suburb area 16.2% (the park is not wholly inside the
// suburb boundary, so this is a size comparison only); Western Sydney Parklands 52.8 sq km, about 10.1 times the suburb;
// a square of 85 ha has sides of about 922 m.

module.exports = {
  "cluster": "ag",
  "clusterName": "Australia",
  "hub": {
    "group": "city",
    "tag": "PARRAMATTA MATHS",
    "label": "Maths tutor in Parramatta",
    "blurb": "Maths for Parramatta learners from Kindergarten to the HSC and adults, with an area project on Parramatta Park measured in hectares."
  },
  "slug": "maths-tutor-parramatta",
  "code": "mtpr",
  "accent": "#296D66",
  "accentRationale": "Parramatta maths: a river-teal green computed for New South Wales, at least 20 RGB from every NSW page accent, 10 from every AU accent and 6 from every colour in use",
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
  "routeLabel": "Maths tutor in Parramatta",
  "title": "Maths Tutor in Parramatta | K to 12, HSC Maths and Adults",
  "description": "Online maths tutor for Parramatta, Kindergarten to Year 12 and adults: NSW syllabus maths and the HSC Standard, Advanced and Extension courses, in Sydney time.",
  "ogDescription": "Parramatta Park is 85 hectares. Is that big? In square metres it is 850,000; in square kilometres 0.85. An area-units lesson for Parramatta learners.",
  "twitterDescription": "Parramatta maths tutoring, live online: K to HSC and adults, with an area project on the park.",
  "pageName": "Maths Tutor in Parramatta",
  "webPageDescription": "Live online maths tutoring for Parramatta learners from Kindergarten to Year 12 and adults, following the NSW syllabus and the Stage 6 mathematics courses, with an area-units project on Parramatta Park.",
  "courseDescription": "Live online maths lessons for Parramatta learners, one to one or in groups of five to ten matched by level, from early number to HSC Mathematics Extension 2 and adult maths.",
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
  "crumbLabel": "Maths tutor in Parramatta",
  "navLinks": [
    {
      "href": "#hsc",
      "label": "Stage 6 maths"
    },
    {
      "href": "#hectares",
      "label": "A worked example"
    },
    {
      "href": "#stages",
      "label": "Every stage"
    },
    {
      "href": "#when",
      "label": "When lessons run"
    },
    {
      "href": "#fees",
      "label": "Fees"
    }
  ],
  "eyebrow": "Parramatta &middot; Kindergarten to Year 12 and adults &middot; Maths online",
  "h1": "Maths tutor in Parramatta",
  "lede": "Parramatta Park is 85 hectares, according to the agency that looks after it. Most people nod at a number like that without picturing it. A hectare is a square 100 metres on each side, so 85 hectares is 850,000 square metres, or 0.85 of a square kilometre: about a square 922 metres wide. Put it beside the whole suburb of Parramatta, 523.45 hectares by the ABS boundary, and the park is roughly a sixth of that size. Units of area are a Year 7 topic that keeps coming back, in HSC Mathematics Standard, in science and at work. This page shows how we teach them, and every other part of maths, to Parramatta learners from Kindergarten to Extension 2.",
  "secondaryCta": {
    "href": "#hectares",
    "label": "See the hectares lesson"
  },
  "wa": "Hello Modern Age Coders, I would like a free maths lesson for a learner in Parramatta.",
  "heroNote": "Maths only on this page &middot; Kindergarten to adult &middot; Independent of every Parramatta school and university",
  "spec": [
    [
      "For",
      "Learners aged 6 to 67"
    ],
    [
      "Kindy to Year 6",
      "Number and measurement"
    ],
    [
      "Years 7 to 10",
      "Algebra, area and data"
    ],
    [
      "Stage 6",
      "Standard, Advanced, Extension 1 and 2"
    ],
    [
      "Adults",
      "Refreshers and work maths"
    ],
    [
      "Teaching",
      "Live video, private or five to ten"
    ],
    [
      "Timetable",
      "Sydney time, both seasons"
    ],
    [
      "Local maths",
      "Parramatta Park in hectares"
    ]
  ],
  "capsuleQ": "Maths tutor in Parramatta, in brief",
  "capsule": "Modern Age Coders tutors maths online for Parramatta learners aged 6 to 67: the NSW syllabus from Kindergarten to Year 10, the Stage 6 courses for the HSC, Mathematics Standard, Advanced, Extension 1 and Extension 2, and adult maths. Lessons are on live video in Sydney time, privately or in classes of five to ten at one level. Our local example converts Parramatta Park, 85 hectares, into 850,000 square metres and compares it with the 523.45-hectare suburb. A first lesson costs nothing.",
  "picks": {
    "eyebrow": "Popular in Parramatta",
    "h2": "Primary, Years 7 to 10 and HSC maths",
    "lede": "The three requests we hear most from Parramatta families. Other courses are listed further down.",
    "items": [
      {
        "course": "elementary-mathematics-complete-masterclass",
        "code": "PAR / 1",
        "title": "Kindergarten to Year 6",
        "note": "Place value, fractions and measuring, taught for understanding rather than speed alone."
      },
      {
        "course": "comprehensive-middle-school-mathematics-mastery",
        "code": "PAR / 2",
        "title": "Years 7 to 10",
        "note": "Algebra, area and volume, ratios and statistics: the ground under every Stage 6 course."
      },
      {
        "course": "complete-high-school-mathematics-mastery",
        "code": "PAR / 3",
        "title": "HSC maths",
        "note": "Functions, calculus, financial maths and statistics, matched to Standard, Advanced or Extension."
      }
    ]
  },
  "sections": [
    {
      "id": "hsc",
      "tint": "tint",
      "eyebrow": "Stage 6 in NSW",
      "h2": "The NSW Stage 6 mathematics courses",
      "lede": "NESA lists the Stage 6 mathematics syllabuses on its learning area page. A Parramatta student in Years 11 and 12 takes one or more of these.",
      "body": [
        {
          "kind": "table",
          "caption": "Stage 6 mathematics on the NESA learning area page (read 14 October 2026)",
          "head": [
            "Syllabus as listed",
            "In brief",
            "Our page"
          ],
          "rows": [
            [
              "Mathematics Standard Stage 6 (2017)",
              "Applied maths for life and work",
              "<a class=\"ag-inline-link\" href=\"/hsc-maths-standard-tutoring\">HSC Standard</a>"
            ],
            [
              "Mathematics Advanced Stage 6 (2017)",
              "Functions, calculus, statistics",
              "<a class=\"ag-inline-link\" href=\"/hsc-maths-advanced-tutoring\">HSC Advanced</a>"
            ],
            [
              "Mathematics Extension 1 Stage 6 (2017)",
              "More depth for strong Advanced students",
              "<a class=\"ag-inline-link\" href=\"/hsc-maths-extension-1-tutoring\">Extension 1</a>"
            ],
            [
              "Mathematics Extension 2 Stage 6 (2017)",
              "Proof and the hardest problems",
              "<a class=\"ag-inline-link\" href=\"/hsc-maths-extension-2-tutoring\">Extension 2</a>"
            ],
            [
              "Mathematics Life Skills Stage 6 (2017)",
              "For students on Life Skills outcomes",
              "Taught one to one"
            ],
            [
              "Numeracy Stage 6 (CEC) (2021)",
              "A content endorsed course in numeracy",
              "Taught one to one"
            ]
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "Year 11 first",
          "left": [
            "Year 11 is where the habits form. Our <a class=\"ag-inline-link\" href=\"/preliminary-hsc-maths-year-11-help\">Year 11 maths page</a> covers the first year of senior study in detail.",
            "A student unsure between Standard and Advanced is better served by one honest diagnostic lesson than by guessing."
          ],
          "rightH3": "What tutoring cannot do",
          "right": [
            "It cannot promise a band, a mark or an ATAR. Those depend on the student and the exams, and we say so plainly.",
            "Assessment tasks set by schools stay the student's own work."
          ]
        },
        {
          "kind": "source",
          "html": "Source: NSW Education Standards Authority, <a class=\"ag-inline-link\" href=\"https://www.educationstandards.nsw.edu.au/wps/portal/nesa/11-12/stage-6-learning-areas/stage-6-mathematics\" rel=\"noopener\" target=\"_blank\">Stage 6 Mathematics</a>, read 14 October 2026."
        }
      ]
    },
    {
      "id": "hectares",
      "tint": "deep",
      "eyebrow": "A Parramatta worked example",
      "h2": "How big is 85 hectares?",
      "lede": "Area units confuse people because each step is a factor of 100 or 10,000, not 10. Parramatta's own park makes the conversions concrete.",
      "body": [
        {
          "kind": "p",
          "html": "Greater Sydney Parklands writes that \"Parramatta Park is 85 hectares\". A hectare is 100 m by 100 m, so it holds 10,000 square metres, and a square kilometre holds 100 hectares. The ABS boundary for the suburb of Parramatta encloses 5.2345 square kilometres. Students convert each figure into all three units before comparing anything."
        },
        {
          "kind": "table",
          "caption": "The same areas in three units (our calculation)",
          "head": [
            "Area",
            "Square metres",
            "Hectares",
            "Square kilometres"
          ],
          "rows": [
            [
              "One hectare",
              "10,000",
              "1",
              "0.01"
            ],
            [
              "Parramatta Park",
              "850,000",
              "85",
              "0.85"
            ],
            [
              "Parramatta suburb (ABS boundary)",
              "5,234,500",
              "523.45",
              "5.2345"
            ],
            [
              "Western Sydney Parklands",
              "52,800,000",
              "5,280",
              "52.8"
            ]
          ]
        },
        {
          "kind": "three",
          "mt": true,
          "cells": [
            {
              "h3": "The quick way wins",
              "p": "To go from square metres to hectares, divide by 10,000: move the decimal point four places. From hectares to square kilometres, divide by 100. Learners who remember that a hectare is a 100 m square never need a formula sheet for it."
            },
            {
              "h3": "A picture of 85 ha",
              "p": "A square with an area of 850,000 square metres has sides of about 922 m, since 922 times 922 is close to 850,000. That is a walk of just under a kilometre along each edge."
            },
            {
              "h3": "A size comparison only",
              "p": "Parramatta Park is about 16.2% of the suburb's area, but the park does not sit wholly inside the suburb boundary, so this is a comparison of sizes, not a share of land."
            }
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "The common mistake",
          "left": [
            "Students who know 1 m is 100 cm often assume 1 square metre is 100 square centimetres. It is 10,000, because both sides scale. The hectare table makes that visible.",
            "Western Sydney Parklands, \"Covering 5,280 hectares and stretching over 27 km\", is about ten times the suburb of Parramatta."
          ],
          "rightH3": "Where it appears later",
          "right": [
            "Area and volume conversions return in Years 9 and 10 measurement, in HSC Mathematics Standard, and in science practicals.",
            "Getting the factor of 10,000 right once saves a lot of marks later."
          ]
        },
        {
          "kind": "source",
          "html": "Sources: <a class=\"ag-inline-link\" href=\"https://www.parrapark.com.au/\" rel=\"noopener\" target=\"_blank\">Greater Sydney Parklands</a> home page; ABS, <a class=\"ag-inline-link\" href=\"https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer\" rel=\"noopener\" target=\"_blank\">ASGS 2021 suburbs and localities</a>, read 14 October 2026. Conversions are our own."
        }
      ]
    },
    {
      "id": "stages",
      "tint": "tint",
      "eyebrow": "Kindergarten to Year 10",
      "h2": "Maths at every stage for Parramatta learners",
      "lede": "From first counting to the edge of Stage 6, each stage has its own sticking points.",
      "body": [
        {
          "kind": "table",
          "caption": "Sticking points we see most, by stage",
          "head": [
            "Stage",
            "Years",
            "Common sticking point",
            "How we approach it"
          ],
          "rows": [
            [
              "Early Stage 1 and Stage 1",
              "Kindergarten to Year 2",
              "Teen numbers and place value",
              "Bundles of ten, then digits"
            ],
            [
              "Stages 2 and 3",
              "Years 3 to 6",
              "Fractions of shapes and amounts",
              "Fraction walls and number lines"
            ],
            [
              "Stage 4",
              "Years 7 and 8",
              "Area units and algebra",
              "The hectare table above"
            ],
            [
              "Stage 5",
              "Years 9 and 10",
              "Quadratics and trigonometry",
              "Graphs first, then algebra"
            ]
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "Entry tests",
          "left": [
            "Year 4 families preparing for the opportunity class test can read <a class=\"ag-inline-link\" href=\"/oc-test-maths-practice-nsw\">OC test maths</a>; Year 6 families can read <a class=\"ag-inline-link\" href=\"/nsw-selective-test-mathematical-reasoning-practice\">selective test mathematical reasoning</a>.",
            "NAPLAN numeracy has its own <a class=\"ag-inline-link\" href=\"/naplan-numeracy-practice-online\">practice page</a>."
          ],
          "rightH3": "Learners in Parramatta",
          "right": [
            "The 2021 Census counted 1,996 primary school students and 865 secondary students living in the suburb of Parramatta, alongside 1,126 in vocational education and 2,467 at university.",
            "Lessons are online, so where in Parramatta a learner lives makes no difference."
          ]
        },
        {
          "kind": "source",
          "html": "Source: ABS, <a class=\"ag-inline-link\" href=\"https://abs.gov.au/census/find-census-data/quickstats/2021/SAL13167\" rel=\"noopener\" target=\"_blank\">2021 Census QuickStats, Parramatta (suburb)</a>, read 14 October 2026."
        }
      ]
    },
    {
      "id": "when",
      "tint": "deep",
      "eyebrow": "When lessons run",
      "h2": "Lessons on Sydney time through the 2027 school year",
      "lede": "We follow the NSW school terms and keep lessons on the Sydney clock, including across the daylight saving changes.",
      "body": [
        {
          "kind": "table",
          "caption": "NSW public school terms, 2027 (Eastern division)",
          "head": [
            "Term",
            "Dates"
          ],
          "rows": [
            [
              "Term 1",
              "Thursday 28 January to Friday 9 April"
            ],
            [
              "Term 2",
              "Tuesday 27 April to Friday 2 July"
            ],
            [
              "Term 3",
              "Monday 19 July to Friday 24 September"
            ],
            [
              "Term 4",
              "Monday 11 October to Monday 20 December"
            ]
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "The teacher's clock",
          "left": [
            "Our teachers are in India, which has no daylight saving. In winter a Parramatta lesson at 5pm is 12:30pm for the teacher; in summer it is 11:30am. Families never need to work that out.",
            "Holiday revision is available on request."
          ],
          "rightH3": "Private or a class",
          "right": [
            "A private lesson suits a deadline or a specific gap. A class of five to ten at one level suits steady progress, with other students' questions often answering your own.",
            "Both use a shared board so the teacher sees every step."
          ]
        },
        {
          "kind": "source",
          "html": "Source: NSW Department of Education, <a class=\"ag-inline-link\" href=\"https://education.nsw.gov.au/schooling/calendars/future-and-past-nsw-term-and-vacation-dates\" rel=\"noopener\" target=\"_blank\">future and past term dates</a>, read 14 October 2026."
        }
      ]
    },
    {
      "id": "volume",
      "tint": "",
      "eyebrow": "Going further",
      "h2": "From hectares to cubic metres",
      "lede": "Once area units make sense, volume follows the same logic with one more dimension, and the factors grow again.",
      "body": [
        {
          "kind": "table",
          "caption": "How the factors grow with each dimension",
          "head": [
            "Measure",
            "Small unit to large unit",
            "Factor"
          ],
          "rows": [
            [
              "Length",
              "Centimetres to metres",
              "100"
            ],
            [
              "Area",
              "Square centimetres to square metres",
              "10,000"
            ],
            [
              "Area",
              "Square metres to hectares",
              "10,000"
            ],
            [
              "Volume",
              "Cubic centimetres to cubic metres",
              "1,000,000"
            ],
            [
              "Capacity",
              "Litres in one cubic metre",
              "1,000"
            ]
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "A question students enjoy",
          "left": [
            "If rain fell evenly to a depth of 1 millimetre across all 85 hectares of Parramatta Park, how much water would land? The area is 850,000 square metres and the depth is 0.001 metres, so the volume is 850 cubic metres, or 850,000 litres.",
            "It is a two-line calculation once the units are under control, and a confusing one until they are."
          ],
          "rightH3": "Why we keep returning to units",
          "right": [
            "Unit slips are among the most common reasons a correct method still loses marks, from Year 7 tests to HSC Mathematics Standard measurement questions.",
            "Students learn to write the unit at every step, so a wrong factor shows up before the final line."
          ]
        },
        {
          "kind": "p",
          "mt": true,
          "html": "Adults meet the same ideas when comparing land sizes, reading plans or estimating materials. Our adult learners often start here, because the maths is immediately useful and the examples are real."
        }
      ]
    }
  ],
  "ladder": {
    "eyebrow": "Progression",
    "h2": "From counting to calculus in Parramatta",
    "lede": "Learners join at the step that fits; the free lesson finds it.",
    "table": {
      "caption": "Steps and the test of each",
      "head": [
        "Around",
        "Step",
        "Passed when the learner can"
      ],
      "rows": [
        [
          "Kindergarten to Year 2",
          "1. Tens and ones",
          "Show 34 as three tens and four ones"
        ],
        [
          "Years 3 to 6",
          "2. Measures",
          "Convert metres to kilometres and explain why"
        ],
        [
          "Years 7 to 10",
          "3. Area and volume",
          "Turn square metres into hectares without a formula sheet"
        ],
        [
          "Years 11 and 12",
          "4. Modelling",
          "Choose a function to describe real data and defend it"
        ]
      ]
    },
    "left": {
      "h3": "Arriving in Year 11",
      "ps": [
        "Senior students who join late usually need a short burst of Stage 5 algebra first; we estimate the time honestly.",
        "It is the fastest route to coping with Stage 6."
      ]
    },
    "right": {
      "h3": "Adults in Parramatta",
      "ps": [
        "Adults learn in their own groups or privately, often for work calculations or a bridging course.",
        "Most are surprised how quickly it comes back."
      ]
    }
  },
  "catalogue": {
    "eyebrow": "Course list",
    "h2": "Maths courses for Parramatta",
    "lede": "By stage. International course names on the cards; NSW stages and courses in the lessons.",
    "bands": [
      {
        "num": "I",
        "h3": "Kindergarten to Year 6",
        "sub": "Primary",
        "courses": [
          {
            "code": "PAR / P1",
            "slug": "early-math-foundations",
            "title": "Early maths",
            "blurb": "Hands-on number, ages 4 to 7."
          },
          {
            "code": "PAR / P2",
            "slug": "mental-maths-mastery-kids",
            "title": "Mental maths",
            "blurb": "Quick, reasoned arithmetic."
          },
          {
            "code": "PAR / P3",
            "slug": "vedic-maths-course-speed-calculation-mastery",
            "title": "Speed arithmetic",
            "blurb": "Once the basics are firm."
          }
        ]
      },
      {
        "num": "II",
        "h3": "Years 7 to 10",
        "sub": "Stages 4 and 5",
        "courses": [
          {
            "code": "PAR / S1",
            "slug": "algebra-foundations-masterclass",
            "title": "Algebra foundations",
            "blurb": "For a student who fell behind."
          },
          {
            "code": "PAR / S2",
            "slug": "comprehensive-middle-school-mathematics-mastery",
            "title": "Years 7 to 10",
            "blurb": "The full junior course."
          },
          {
            "code": "PAR / S3",
            "slug": "olympiad-competition-mathematics-mastery",
            "title": "Competition maths",
            "blurb": "Stretch for strong students."
          }
        ]
      },
      {
        "num": "III",
        "h3": "Stage 6 and adults",
        "sub": "Senior and beyond",
        "courses": [
          {
            "code": "PAR / H1",
            "slug": "complete-high-school-mathematics-mastery",
            "title": "HSC maths",
            "blurb": "Standard to Extension."
          },
          {
            "code": "PAR / H2",
            "slug": "statistics-probability-maths-course",
            "title": "Statistics",
            "blurb": "For Standard and Advanced statistics."
          },
          {
            "code": "PAR / H3",
            "slug": "complete-business-finance-mathematics-mastery",
            "title": "Financial maths",
            "blurb": "Interest, loans and growth."
          }
        ]
      }
    ]
  },
  "how": {
    "eyebrow": "Routine",
    "h2": "A Parramatta week with us",
    "lede": "Two short commitments a week, booked on the Sydney clock, with nothing for families to convert.",
    "slots": [
      {
        "time": "From 4pm",
        "l": "Primary and Years 7 to 10."
      },
      {
        "time": "From 6:30pm",
        "l": "Stage 6 students and adults."
      },
      {
        "time": "Weekend mornings",
        "l": "Longer lessons, by request."
      }
    ],
    "cells": [
      {
        "h3": "Continuity",
        "p": "The same teacher stays with a learner from term to term."
      },
      {
        "h3": "Feedback",
        "p": "A brief update to parents after lessons."
      },
      {
        "h3": "Level, not age",
        "p": "Classes are grouped by what learners can do."
      },
      {
        "h3": "Real measurements",
        "p": "Parks, maps and Census tables in lessons."
      },
      {
        "h3": "Exam blocks",
        "p": "Extra private lessons before HSC trials."
      },
      {
        "h3": "Understanding first",
        "p": "Learners can say why a method works."
      }
    ]
  },
  "projectsH2": "Things our learners have built",
  "projectsLede": "Work by students who started with everyday maths. See the <a class=\"ag-inline-link\" href=\"/student-labs\">student labs</a> for more.",
  "reviewsLede": "Google reviews, exactly as families wrote them.",
  "fees": {
    "h2": "Fees for Parramatta maths lessons",
    "lede": "A flat monthly fee in US dollars for families outside India, with no enrolment fee and no lock-in.",
    "free": [
      "A real lesson at the right level",
      "A frank report afterwards",
      "No card needed"
    ],
    "group": [
      "Five to ten learners at one level",
      "One teacher across the term",
      "Marked practice",
      "Leave at any month end"
    ],
    "one": [
      "A teacher to yourself",
      "Built around one aim",
      "Good before HSC trials"
    ]
  },
  "faq": {
    "eyebrow": "Parramatta maths questions",
    "h2": "Questions about a maths tutor in Parramatta",
    "items": [
      {
        "q": "Do you offer maths tutoring for Parramatta students?",
        "a": "Yes, live online in Sydney time, privately or in level-matched classes of five to ten, from Kindergarten to Year 12 and for adults."
      },
      {
        "q": "Which Stage 6 maths courses do you teach?",
        "a": "Mathematics Standard, Mathematics Advanced, Mathematics Extension 1 and Mathematics Extension 2, plus one-to-one support for Life Skills and Numeracy."
      },
      {
        "q": "How many square metres are in a hectare?",
        "a": "10,000. A hectare is a square 100 metres on each side, so Parramatta Park's 85 hectares is 850,000 square metres."
      },
      {
        "q": "How many hectares is the suburb of Parramatta?",
        "a": "By the ABS boundary, 5.2345 square kilometres, which is 523.45 hectares."
      },
      {
        "q": "Can you promise an HSC band?",
        "a": "No. We teach thoroughly and report honestly, but bands and ATARs depend on the student and the exams."
      },
      {
        "q": "Do you help with the OC and selective tests?",
        "a": "Yes, through separate pages and courses for those tests; this page covers everyday maths at every stage."
      },
      {
        "q": "Are lessons affected by daylight saving?",
        "a": "No. Lessons stay at the same Sydney time all year; we adjust the teacher's side."
      },
      {
        "q": "Do adults learn with you?",
        "a": "Yes, in adult classes or privately, for work, study or confidence."
      },
      {
        "q": "How much water is 1 mm of rain over Parramatta Park?",
        "a": "About 850 cubic metres, or 850,000 litres: 850,000 square metres of park times a depth of 0.001 metres. It is a favourite units question in our Years 7 to 10 lessons."
      },
      {
        "q": "Which Stage 6 maths course should my child take?",
        "a": "It depends on what they enjoy and plan to study next. Standard suits applied maths; Advanced suits calculus-based study; Extension 1 and 2 add depth. One diagnostic lesson usually makes the choice clear."
      },
      {
        "q": "What do lessons cost?",
        "a": "The first lesson is free. Monthly fees for classes and private lessons are in the fees panel on this page."
      }
    ]
  },
  "elsewhere": {
    "eyebrow": "Also on this site",
    "h2": "More for Parramatta families",
    "lede": "NSW maths pages and our Parramatta coding page.",
    "items": [
      {
        "href": "/hsc-maths-standard-tutoring",
        "label": "HSC Mathematics Standard",
        "p": "Applied senior maths."
      },
      {
        "href": "/hsc-maths-extension-1-tutoring",
        "label": "HSC Extension 1",
        "p": "Depth beyond Advanced."
      },
      {
        "href": "/oc-test-maths-practice-nsw",
        "label": "OC test maths",
        "p": "For Year 4."
      },
      {
        "href": "/maths-tutor-sydney",
        "label": "Maths tutor in Sydney",
        "p": "The citywide page."
      },
      {
        "href": "/maths-tutor-cost-australia-explained",
        "label": "Maths tutoring costs",
        "p": "What lessons cost."
      },
      {
        "href": "/best-coding-and-ai-classes-in-parramatta-sydney",
        "label": "Coding in Parramatta",
        "p": "Programming classes for the suburb."
      }
    ]
  },
  "start": {
    "h2": "Book a free Parramatta maths lesson",
    "lede": "Tell us the learner's year and what is going wrong, or right. We teach a full lesson and then give a straight assessment.",
    "readFirst": "To read first: <a class=\"ag-inline-link\" href=\"/how-we-teach\">how we teach</a>, or <a class=\"ag-inline-link\" href=\"/online-maths-tutoring-australia\">online maths tutoring in Australia</a>.",
    "note": "You will be talking to our team in India, hence the +91 number; we have no Parramatta premises. WhatsApp tends to get the quickest reply.",
    "formNote": "Free, no card, no obligation."
  },
  "footer": {
    "cols": [
      {
        "h4": "NSW maths",
        "links": [
          {
            "href": "/hsc-maths-advanced-tutoring",
            "label": "HSC Advanced"
          },
          {
            "href": "/hsc-maths-extension-2-tutoring",
            "label": "HSC Extension 2"
          },
          {
            "href": "/nsw-selective-test-mathematical-reasoning-practice",
            "label": "Selective test maths"
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
            "href": "/australian-curriculum-maths-year-7-to-10-help",
            "label": "Years 7 to 10 maths"
          }
        ]
      }
    ],
    "bottomRight": "A hectare is a 100 metre square"
  },
  "personalityCss": "\n.ag-root.ag-mtpr .ag-hero h1 { letter-spacing: -0.02em; }\n.ag-root.ag-mtpr .ag-capsule { border-left-width: 6px; border-radius: 2px; }\n.ag-root.ag-mtpr .ag-section-head h2 { max-width: 28ch; }\n.ag-root.ag-mtpr .ag-table caption { text-align: left; font-weight: 630; }\n.ag-root.ag-mtpr .ag-band-head h3 { letter-spacing: -0.008em; }\n.ag-root.ag-mtpr .ag-slots { gap: 1.1rem; }\n",
  "dossier": {
    "curriculumAuthority": "NSW: NESA Stage 6 Mathematics learning area page (Mathematics Advanced, Extension 1, Extension 2, Life Skills, Standard Stage 6 (2017); Numeracy Stage 6 (CEC) (2021)). NSW Department of Education 2027 term dates (Eastern). ABS SAL13167 QuickStats attendance counts and ASGS area 5.2345 sq km. Greater Sydney Parklands: Parramatta Park 85 hectares; Western Sydney Parklands 5,280 hectares, 27 km.",
    "localProject": "Area units: 85 ha = 850,000 sq m = 0.85 sq km; suburb 5.2345 sq km = 523.45 ha = 5,234,500 sq m; ratio 16.2% (size comparison only); WSP 5,280 ha = 52.8 sq km = 10.1 times the suburb; side of an 85 ha square about 922 m. Lesson family: area units, square metres to hectares.",
    "requiredMentions": [
      "Parramatta Park is 85 hectares",
      "Covering 5,280 hectares and stretching over 27 km",
      "523.45",
      "5,234,500",
      "850,000",
      "Numeracy Stage 6 (CEC) (2021)",
      "Mathematics Life Skills Stage 6 (2017)",
      "1,126 in vocational education",
      "850 cubic metres"
    ],
    "sources": [
      {
        "claim": "NESA, Stage 6 Mathematics learning area: syllabus list.",
        "url": "https://www.educationstandards.nsw.edu.au/wps/portal/nesa/11-12/stage-6-learning-areas/stage-6-mathematics"
      },
      {
        "claim": "Greater Sydney Parklands home page: Parramatta Park 85 hectares; Western Sydney Parklands 5,280 hectares, 27 km.",
        "url": "https://www.parrapark.com.au/"
      },
      {
        "claim": "ABS, 2021 Census QuickStats, Parramatta (SAL13167): education attendance.",
        "url": "https://abs.gov.au/census/find-census-data/quickstats/2021/SAL13167"
      },
      {
        "claim": "ABS ASGS 2021 SAL boundary service: Parramatta area 5.2345 sq km.",
        "url": "https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer"
      },
      {
        "claim": "NSW Department of Education, 2027 term dates.",
        "url": "https://education.nsw.gov.au/schooling/calendars/future-and-past-nsw-term-and-vacation-dates"
      }
    ],
    "rejectedClaims": [
      "The share of Parramatta Park inside the suburb boundary: not computed; the comparison is of sizes only.",
      "Parramatta LGA counts and school names used on the Parramatta coding page: not repeated.",
      "HSC results or school comparisons for Parramatta: none on this page.",
      "Named tutoring or coaching businesses: none named."
    ]
  }
};
