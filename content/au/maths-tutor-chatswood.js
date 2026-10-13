'use strict';
// Maths tutor in Chatswood (ag- maths by city; AU cluster Phase 10, row 385).
// Intent: families and adults in Chatswood searching for a maths tutor: Kindergarten to Year 12, HSC mathematics, and
// online lessons in Sydney time. Links the NSW maths doors and the Sydney and Parramatta maths pages. The Chatswood
// coding page's figures (population, households, station counts, schools) are not used.
// Sources, read raw on 14 October 2026:
//  - Visit Chatswood, Lunar New Year festival page: "Thank you for a fantastic Year of the Horse celebration. See you in
//    February 2027 for Year of the Goat!"; event dated 13 Feb 2027; "In pictures: Chatswood's Year of the Dragon".
//  - Willoughby City Council home page: site footer lists "Chatswood Year of the Horse Festival".
//  - NESA, Stage 6 Mathematics page: "Look at past HSC exam papers for Mathematics courses with marking guidelines and
//    feedback to help you get ready for your exams."; the Stage 6 mathematics syllabuses.
//  - NSW Department of Education, 2027 terms (Term 4 Monday 11 October to Monday 20 December).
//  - ABS 2021 QuickStats, Chatswood (SAL10891): attending primary 1,979; secondary 1,592; vocational 719; university
//    1,836; aged 15-19 1,227.
// Lesson family: lowest common multiple of repeating cycles. Our calculation (Python calendar): the zodiac year repeats
// every 12 years and leap years every 4; LCM(12, 4) = 12, so Goat years (2027, 2039, ...) leave remainder 3 on division by
// 4 and are never leap years, while Dragon years (2024, 2036, ...) are always leap years until the 2100 exception. Twelve
// years from 13 February 2027 contain 3 leap days: 4,383 days = 626 weeks + 1 day, so 13 February moves one weekday per
// cycle: Saturday 2027, Sunday 2039, Monday 2051, Tuesday 2063, Wednesday 2075, Thursday 2087, Friday 2099; 2099 to 2111
// has only 2 leap days (2100 is not a leap year), so 2111 is again a Friday. LCM(12, 7 x 12) reasoning gives 84 years
// without the century rule.

module.exports = {
  "cluster": "ag",
  "clusterName": "Australia",
  "hub": {
    "group": "city",
    "tag": "CHATSWOOD MATHS",
    "label": "Maths tutor in Chatswood",
    "blurb": "Maths for Chatswood learners from Kindergarten to HSC Extension 2 and adults, with a cycles project built on the Lunar New Year calendar."
  },
  "slug": "maths-tutor-chatswood",
  "code": "mtcw",
  "accent": "#5A5E9B",
  "accentRationale": "Chatswood maths: a muted lantern-dusk blue computed for New South Wales, at least 20 RGB from every NSW page accent, 10 from every AU accent and 6 from every colour in use",
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
  "routeLabel": "Maths tutor in Chatswood",
  "title": "Maths Tutor in Chatswood | K to 12, HSC Maths and Adults",
  "description": "Online maths tutor for Chatswood, Kindergarten to Year 12 and adults: NSW syllabus maths and HSC Standard, Advanced, Extension 1 and 2, live in Sydney time.",
  "ogDescription": "Chatswood celebrates the Year of the Goat in February 2027. Will a Goat year ever be a leap year? A lowest-common-multiple puzzle for Chatswood learners.",
  "twitterDescription": "Chatswood maths tutoring, live online: K to HSC Extension 2 and adults, with a calendar puzzle.",
  "pageName": "Maths Tutor in Chatswood",
  "webPageDescription": "Live online maths tutoring for Chatswood learners from Kindergarten to Year 12 and adults, following the NSW syllabus and HSC mathematics, with a lowest-common-multiple project on the Lunar New Year calendar.",
  "courseDescription": "Live online maths lessons for Chatswood learners, privately or in level-matched classes of five to ten, from early number to HSC Mathematics Extension 2 and adult maths.",
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
  "crumbLabel": "Maths tutor in Chatswood",
  "navLinks": [
    {
      "href": "#cycles",
      "label": "Calendar cycles"
    },
    {
      "href": "#hsc-path",
      "label": "HSC maths"
    },
    {
      "href": "#k10",
      "label": "K to 10"
    },
    {
      "href": "#sydney-time",
      "label": "Sydney time"
    },
    {
      "href": "#fees",
      "label": "Fees"
    }
  ],
  "eyebrow": "Chatswood &middot; Kindergarten to Year 12 and adults &middot; Maths taught live online",
  "h1": "Maths tutor in Chatswood",
  "lede": "Chatswood's Lunar New Year festival has just finished the Year of the Horse, and its organisers say they will see everyone \"in February 2027 for Year of the Goat\". The animal years come round every 12 years; leap years every 4. So here is a question for a Year 7 student: will a Year of the Goat ever be a leap year? The answer is no, never, and the reason is a lowest common multiple. Because 12 is a multiple of 4, every Goat year leaves the same remainder when divided by 4. The festival's Celebration Day on 13 February 2027 opens a second puzzle about weekdays, worked through below. That is how we teach maths in Chatswood, from Kindergarten counting to HSC Extension 2.",
  "secondaryCta": {
    "href": "#cycles",
    "label": "Work through the calendar puzzle"
  },
  "wa": "Hello Modern Age Coders, I would like a free maths lesson for a learner in Chatswood.",
  "heroNote": "Maths only on this page &middot; Kindergarten to adult &middot; Independent of every Chatswood school and the festival",
  "spec": [
    [
      "Ages",
      "6 to 67"
    ],
    [
      "Kindergarten to Year 6",
      "Number, patterns and multiples"
    ],
    [
      "Years 7 to 10",
      "Factors, algebra and proof ideas"
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
      "Clock",
      "Sydney time, both seasons"
    ],
    [
      "Chatswood puzzle",
      "Calendar cycles and LCM"
    ]
  ],
  "capsuleQ": "Maths tutor in Chatswood, in brief",
  "capsule": "For Chatswood, Modern Age Coders provides live online maths teaching to anyone from 6 to 67: Kindergarten to Year 10 under the NSW syllabus, all four HSC maths courses up to Extension 2, and adult maths. Teaching happens over video at Sydney times, either privately or with up to ten classmates at the same stage. Our Chatswood example uses lowest common multiples to show why a Year of the Goat is never a leap year. The first lesson is free.",
  "picks": {
    "eyebrow": "Where Chatswood learners start",
    "h2": "Number sense, junior algebra and HSC maths",
    "lede": "Three courses for the most common Chatswood requests; the full list is below.",
    "items": [
      {
        "course": "mental-maths-mastery-kids",
        "code": "CHW / 1",
        "title": "Number sense for young learners",
        "note": "Multiples, factors and patterns, the ideas behind every later cycle puzzle."
      },
      {
        "course": "comprehensive-middle-school-mathematics-mastery",
        "code": "CHW / 2",
        "title": "Years 7 to 10 maths",
        "note": "Factors and multiples, algebra and geometry, with reasoning written out."
      },
      {
        "course": "complete-high-school-mathematics-mastery",
        "code": "CHW / 3",
        "title": "HSC maths",
        "note": "Functions, calculus and proof for Advanced, Extension 1 and Extension 2."
      }
    ]
  },
  "sections": [
    {
      "id": "cycles",
      "tint": "tint",
      "eyebrow": "A Chatswood worked example",
      "h2": "Will a Year of the Goat ever be a leap year?",
      "lede": "Two repeating cycles, a 12-year cycle of animal years and a 4-year cycle of leap years, line up in a fixed pattern. The lowest common multiple tells us the pattern.",
      "body": [
        {
          "kind": "p",
          "html": "Chatswood's festival page says \"Thank you for a fantastic Year of the Horse celebration. See you in February 2027 for Year of the Goat!\"; it also shows pictures from \"Chatswood's Year of the Dragon\". The Goat years are 2027, 2039, 2051 and so on, 12 apart. Leap years are, almost always, the years divisible by 4. Since LCM(12, 4) = 12, adding 12 never changes a year's remainder on division by 4, so the pattern locks in."
        },
        {
          "kind": "table",
          "caption": "Animal years and leap years (our calculation with the Gregorian calendar rules)",
          "head": [
            "Animal years",
            "Example years",
            "Remainder when divided by 4",
            "Leap years?"
          ],
          "rows": [
            [
              "Dragon",
              "2024, 2036, 2048",
              "0",
              "Always, until the century rule"
            ],
            [
              "Horse",
              "2026, 2038, 2050",
              "2",
              "Never"
            ],
            [
              "Goat",
              "2027, 2039, 2051",
              "3",
              "Never"
            ]
          ]
        },
        {
          "kind": "table",
          "mt": true,
          "caption": "The weekday of 13 February in each Goat year (our calculation)",
          "head": [
            "Year",
            "Weekday of 13 February",
            "Leap days since the previous Goat year"
          ],
          "rows": [
            [
              "2027",
              "Saturday",
              "n/a"
            ],
            [
              "2039",
              "Sunday",
              "3"
            ],
            [
              "2051",
              "Monday",
              "3"
            ],
            [
              "2063",
              "Tuesday",
              "3"
            ],
            [
              "2075",
              "Wednesday",
              "3"
            ],
            [
              "2087",
              "Thursday",
              "3"
            ],
            [
              "2099",
              "Friday",
              "3"
            ],
            [
              "2111",
              "Friday",
              "2 (2100 is not a leap year)"
            ]
          ]
        },
        {
          "kind": "three",
          "mt": true,
          "cells": [
            {
              "h3": "One weekday per cycle",
              "p": "Twelve years with three leap days are 4,383 days, which is 626 weeks and 1 day. So 13 February slides one weekday later every Goat year, from Saturday in 2027 to Friday in 2099."
            },
            {
              "h3": "The simple rule wins, for a while",
              "p": "Counting \"one day per year plus one per leap day\" predicts every row correctly until 2099. No calendar software is needed for most of this century."
            },
            {
              "h3": "Then the century rule bites",
              "p": "The year 2100 is divisible by 4 but not by 400, so it is not a leap year. That cycle has only 2 leap days and 4,382 days, exactly 626 weeks, so 2111 is a Friday again."
            }
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "What students practise",
          "left": [
            "Multiples, factors, remainders, the lowest common multiple and the greatest common divisor, and reasoning about repeating patterns rather than listing every case.",
            "Years 7 and 8 students handle the leap-year table; senior students can prove that a 12-year shift preserves the remainder modulo 4."
          ],
          "rightH3": "Why a festival calendar",
          "right": [
            "The festival is a real Chatswood event with real dates: Willoughby City Council lists the Chatswood Year of the Horse Festival among its sites. Neither the festival nor the council is connected with us; we only use the published years and dates.",
            "The calendar arithmetic is ours, checked with the standard Gregorian rules."
          ]
        },
        {
          "kind": "source",
          "html": "Sources: <a class=\"ag-inline-link\" href=\"https://www.visitchatswood.com.au/LNY/Home\" rel=\"noopener\" target=\"_blank\">Visit Chatswood, Lunar New Year festival</a> and <a class=\"ag-inline-link\" href=\"https://www.willoughby.nsw.gov.au/\" rel=\"noopener\" target=\"_blank\">Willoughby City Council</a>, read 14 October 2026. Calendar calculations are our own."
        }
      ]
    },
    {
      "id": "more-cycles",
      "tint": "",
      "eyebrow": "More cycle puzzles",
      "h2": "The same idea in everyday questions",
      "lede": "Once students see that repeating cycles meet at the lowest common multiple, they find the pattern everywhere.",
      "body": [
        {
          "kind": "table",
          "caption": "Cycles that meet, and when (our worked answers)",
          "head": [
            "Two cycles",
            "Lengths",
            "They line up again after"
          ],
          "rows": [
            [
              "A weekly class and a fortnightly test",
              "7 days and 14 days",
              "14 days"
            ],
            [
              "Buses every 4 minutes and every 6 minutes",
              "4 and 6",
              "12 minutes"
            ],
            [
              "A 12-year animal cycle and the 7-day week, ignoring leap days",
              "12 and 7",
              "84 (LCM of 12 and 7)"
            ],
            [
              "Lights flashing every 3, 4 and 5 seconds",
              "3, 4 and 5",
              "60 seconds"
            ]
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "LCM and HCF together",
          "left": [
            "For two numbers, the lowest common multiple times the highest common factor equals the product. For 4 and 6 that is 12 times 2, which equals 24. Students check the rule on several pairs before they trust it.",
            "The calendar puzzle uses the LCM; simplifying fractions uses the HCF. They are two sides of the same factor list."
          ],
          "rightH3": "When the simple model breaks",
          "right": [
            "Real calendars carry exceptions, like the year 2100. Good maths students learn to state the model, use it, and then ask where it stops being true.",
            "That habit matters far beyond calendars, from timetables to physics."
          ]
        }
      ]
    },
    {
      "id": "hsc-path",
      "tint": "deep",
      "eyebrow": "HSC mathematics",
      "h2": "Choosing HSC maths in Chatswood",
      "lede": "NSW students in Years 11 and 12 choose among the Stage 6 mathematics courses published by NESA.",
      "body": [
        {
          "kind": "table",
          "caption": "The main Stage 6 mathematics courses and our pages",
          "head": [
            "Course",
            "Suits",
            "More detail"
          ],
          "rows": [
            [
              "Mathematics Standard",
              "Practical, applied maths",
              "<a class=\"ag-inline-link\" href=\"/hsc-maths-standard-tutoring\">HSC Standard tutoring</a>"
            ],
            [
              "Mathematics Advanced",
              "Calculus-based study",
              "<a class=\"ag-inline-link\" href=\"/hsc-maths-advanced-tutoring\">HSC Advanced tutoring</a>"
            ],
            [
              "Mathematics Extension 1",
              "Strong Advanced students",
              "<a class=\"ag-inline-link\" href=\"/hsc-maths-extension-1-tutoring\">HSC Extension 1 tutoring</a>"
            ],
            [
              "Mathematics Extension 2",
              "Proof and the hardest problems",
              "<a class=\"ag-inline-link\" href=\"/hsc-maths-extension-2-tutoring\">HSC Extension 2 tutoring</a>"
            ]
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "Past papers, used well",
          "left": [
            "NESA encourages students to \"Look at past HSC exam papers for Mathematics courses with marking guidelines and feedback to help you get ready for your exams.\"",
            "We use them that way: one paper at a time, marked against the guidelines, with the mistakes turned into the next lesson."
          ],
          "rightH3": "No band promises",
          "right": [
            "Tutoring improves understanding and exam habits; it cannot promise a band, a mark or an ATAR, and we never suggest otherwise.",
            "Schools set assessment tasks for students to complete themselves, and we keep it that way."
          ]
        },
        {
          "kind": "source",
          "html": "Quoted from the <a class=\"ag-inline-link\" href=\"https://www.educationstandards.nsw.edu.au/wps/portal/nesa/11-12/stage-6-learning-areas/stage-6-mathematics\" rel=\"noopener\" target=\"_blank\">NESA Stage 6 Mathematics page</a> as it read on 14 October 2026."
        }
      ]
    },
    {
      "id": "k10",
      "tint": "tint",
      "eyebrow": "Kindergarten to Year 10",
      "h2": "Patterns and multiples from Kindergarten up",
      "lede": "The calendar puzzle rests on ideas that start in the first years of school and grow every year.",
      "body": [
        {
          "kind": "table",
          "caption": "Multiples and patterns through the years",
          "head": [
            "Years",
            "Idea",
            "A Chatswood-style task"
          ],
          "rows": [
            [
              "Kindergarten to 2",
              "Repeating patterns",
              "Continue a pattern of red and gold lanterns"
            ],
            [
              "3 to 6",
              "Multiples and times tables",
              "Which years between 2024 and 2060 are leap years?"
            ],
            [
              "7 and 8",
              "Factors, multiples, LCM and HCF",
              "When do a 12-year and a 4-year cycle line up?"
            ],
            [
              "9 and 10",
              "Remainders and simple proof",
              "Show that adding 12 keeps the remainder on division by 4"
            ]
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "Tests along the way",
          "left": [
            "Families with OC and selective tests in mind can read <a class=\"ag-inline-link\" href=\"/oc-test-maths-practice-nsw\">OC test maths</a> and <a class=\"ag-inline-link\" href=\"/nsw-selective-test-mathematical-reasoning-practice\">selective test mathematical reasoning</a>. Problem solvers may enjoy the <a class=\"ag-inline-link\" href=\"/australian-mathematics-competition-practice-by-year\">Australian Mathematics Competition practice</a>.",
            "Everything else on this page is about ordinary week-to-week maths."
          ],
          "rightH3": "Chatswood learners",
          "right": [
            "The 2021 Census counted 1,979 Chatswood residents at primary school and 1,592 at secondary school, with 719 in vocational education and 1,836 at university. There were 1,227 residents aged 15 to 19.",
            "Every one of them could join a lesson from home."
          ]
        },
        {
          "kind": "source",
          "html": "Source: ABS, <a class=\"ag-inline-link\" href=\"https://abs.gov.au/census/find-census-data/quickstats/2021/SAL10891\" rel=\"noopener\" target=\"_blank\">2021 Census QuickStats, Chatswood</a>, read 14 October 2026."
        }
      ]
    },
    {
      "id": "sydney-time",
      "tint": "deep",
      "eyebrow": "Sydney time",
      "h2": "Lessons through the 2027 NSW school year",
      "lede": "Lessons follow the NSW terms on the Sydney clock, which moves for daylight saving in October and April.",
      "body": [
        {
          "kind": "two",
          "leftH3": "The 2027 calendar",
          "left": [
            "NSW public schools in the Eastern division start Term 1 on Thursday 28 January 2027, and Term 4 runs from Monday 11 October to Monday 20 December.",
            "Revision blocks before the HSC exams are planned around those dates."
          ],
          "rightH3": "The teacher's side of the clock",
          "right": [
            "Our teachers work in India, which has no daylight saving. A 6:30pm Chatswood lesson is 2pm for the teacher in winter and 1pm in summer.",
            "Families keep the same lesson time all year."
          ]
        },
        {
          "kind": "three",
          "mt": true,
          "cells": [
            {
              "h3": "Private lessons",
              "p": "One teacher, one learner: ideal for a gap, a deadline or a learner who prefers it."
            },
            {
              "h3": "Small classes",
              "p": "Five to ten learners at one level, with questions that help everyone."
            },
            {
              "h3": "Working on show",
              "p": "Each line of reasoning goes up on a shared whiteboard for the teacher to follow."
            }
          ]
        },
        {
          "kind": "source",
          "html": "Source: NSW Department of Education, <a class=\"ag-inline-link\" href=\"https://education.nsw.gov.au/schooling/calendars/future-and-past-nsw-term-and-vacation-dates\" rel=\"noopener\" target=\"_blank\">term dates</a>, read 14 October 2026."
        }
      ]
    },
    {
      "id": "adults",
      "tint": "",
      "eyebrow": "Adult learners",
      "h2": "Maths for adults in Chatswood",
      "lede": "Adults study in their own classes or privately, usually for practical reasons.",
      "body": [
        {
          "kind": "three",
          "cells": [
            {
              "h3": "Back to basics",
              "p": "Fractions, percentages and ratio, rebuilt calmly with time for every question."
            },
            {
              "h3": "For work",
              "p": "Estimating, checking figures and reading charts, with an eye for numbers that do not add up."
            },
            {
              "h3": "For the family",
              "p": "Understanding how schools teach methods now, so homework help agrees with class."
            }
          ]
        },
        {
          "kind": "p",
          "mt": true,
          "html": "The calendar puzzle is a good first lesson for adults too: it needs only multiples and remainders, and it ends with a genuine surprise in the year 2100."
        }
      ]
    }
  ],
  "ladder": {
    "eyebrow": "Progress",
    "h2": "From patterns to proof",
    "lede": "A learner moves to the next stage when the skill works on a fresh problem.",
    "table": {
      "caption": "Stages and their checks",
      "head": [
        "Typically",
        "Stage",
        "Checked by"
      ],
      "rows": [
        [
          "Kindergarten to Year 2",
          "1. Patterns",
          "Continuing and describing a repeating pattern"
        ],
        [
          "Years 3 to 6",
          "2. Multiples",
          "Listing multiples and spotting common ones"
        ],
        [
          "Years 7 to 10",
          "3. LCM and remainders",
          "Explaining when two cycles line up"
        ],
        [
          "Years 11 and 12",
          "4. Proof",
          "Proving a pattern holds for every case"
        ]
      ]
    },
    "left": {
      "h3": "Arriving in Year 11",
      "ps": [
        "Late starters usually need algebra and functions strengthened first; we say how long that should take.",
        "It makes Stage 6 far more manageable."
      ]
    },
    "right": {
      "h3": "Adults",
      "ps": [
        "Adults often enjoy pattern and number puzzles more than they expect.",
        "Adult classes are kept separate from school students."
      ]
    }
  },
  "catalogue": {
    "eyebrow": "Course list",
    "h2": "Maths courses for Chatswood",
    "lede": "By stage. Cards use our international course names; lessons follow the NSW stages and HSC courses.",
    "bands": [
      {
        "num": "I",
        "h3": "Kindergarten to Year 6",
        "sub": "Primary",
        "courses": [
          {
            "code": "CHW / P1",
            "slug": "early-math-foundations",
            "title": "Early number",
            "blurb": "Ages 4 to 7, hands on."
          },
          {
            "code": "CHW / P2",
            "slug": "elementary-mathematics-complete-masterclass",
            "title": "Primary maths",
            "blurb": "Each topic in turn."
          },
          {
            "code": "CHW / P3",
            "slug": "abacus-mental-maths-course-for-kids",
            "title": "Abacus",
            "blurb": "Mental arithmetic, 5 to 10."
          }
        ]
      },
      {
        "num": "II",
        "h3": "Years 7 to 10",
        "sub": "Stages 4 and 5",
        "courses": [
          {
            "code": "CHW / S1",
            "slug": "algebra-foundations-masterclass",
            "title": "Algebra foundations",
            "blurb": "A fresh start on algebra."
          },
          {
            "code": "CHW / S2",
            "slug": "olympiad-competition-mathematics-mastery",
            "title": "Competition maths",
            "blurb": "Number theory and puzzles."
          },
          {
            "code": "CHW / S3",
            "slug": "maths-through-coding",
            "title": "Maths through coding",
            "blurb": "Calendars and patterns in Python."
          }
        ]
      },
      {
        "num": "III",
        "h3": "Stage 6 and adults",
        "sub": "Senior and beyond",
        "courses": [
          {
            "code": "CHW / H1",
            "slug": "complete-high-school-mathematics-mastery",
            "title": "HSC maths",
            "blurb": "Standard to Extension 2."
          },
          {
            "code": "CHW / H2",
            "slug": "statistics-probability-maths-course",
            "title": "Statistics",
            "blurb": "Data and probability."
          },
          {
            "code": "CHW / H3",
            "slug": "college-mathematics-complete-masterclass",
            "title": "University maths",
            "blurb": "Beyond the HSC."
          }
        ]
      }
    ]
  },
  "how": {
    "eyebrow": "How it works",
    "h2": "A maths week for Chatswood families",
    "lede": "Lessons sit at fixed Sydney times, with the October and April clock changes absorbed on our side.",
    "slots": [
      {
        "time": "After school",
        "l": "Kindergarten to Year 10."
      },
      {
        "time": "Evenings",
        "l": "HSC students and adults."
      },
      {
        "time": "Weekends",
        "l": "Longer lessons by request."
      }
    ],
    "cells": [
      {
        "h3": "A steady teacher",
        "p": "The same teacher week after week."
      },
      {
        "h3": "Notes home",
        "p": "Brief, honest updates for parents."
      },
      {
        "h3": "Levelled classes",
        "p": "Grouped by skill, not just age."
      },
      {
        "h3": "Real puzzles",
        "p": "Local dates and data alongside textbook work."
      },
      {
        "h3": "HSC run-up",
        "p": "Private lessons can be added before trials."
      },
      {
        "h3": "Reasoning aloud",
        "p": "Learners explain before practising."
      }
    ]
  },
  "projectsH2": "Projects our learners built",
  "projectsLede": "Things made by students who began with maths like this. More in the <a class=\"ag-inline-link\" href=\"/student-labs\">student labs</a>.",
  "reviewsLede": "Families reviewing us on Google, verbatim.",
  "fees": {
    "h2": "Fees for Chatswood maths lessons",
    "lede": "Outside India, lessons are billed once a month in US dollars. Joining is free and you can stop whenever a month ends.",
    "free": [
      "A real lesson at the right level",
      "Straight advice afterwards",
      "No card needed"
    ],
    "group": [
      "Five to ten learners at one level",
      "One teacher across the term",
      "Marked practice",
      "Stop at any month end"
    ],
    "one": [
      "Private teaching",
      "One goal at a time",
      "Helpful before HSC trials"
    ]
  },
  "faq": {
    "eyebrow": "Chatswood maths questions",
    "h2": "Questions about a maths tutor in Chatswood",
    "items": [
      {
        "q": "Can Chatswood students have maths lessons with you?",
        "a": "Yes. Lessons are online and scheduled on Sydney time, for Kindergarten to Year 12 and adults, as private lessons or level-matched classes."
      },
      {
        "q": "Which of the HSC maths courses can you help with?",
        "a": "All four: Standard for applied maths, Advanced for calculus, and Extension 1 and Extension 2 for students who want more depth."
      },
      {
        "q": "Is a Year of the Goat ever a leap year?",
        "a": "No. Goat years are 12 apart and 12 is a multiple of 4, so every Goat year leaves remainder 3 on division by 4. 2027, 2039 and 2051 are all ordinary years."
      },
      {
        "q": "What is a lowest common multiple?",
        "a": "The smallest number that is a multiple of two or more numbers. LCM(12, 4) is 12, which is why the animal-year and leap-year cycles line up the same way every time."
      },
      {
        "q": "What weekday is 13 February 2027?",
        "a": "A Saturday. In each later Goat year it moves one weekday on, reaching Friday in 2099; because 2100 is not a leap year, it is Friday again in 2111."
      },
      {
        "q": "Can you guarantee an HSC band?",
        "a": "No tutor can. We aim for real understanding and tell you frankly how it is going; the band and the ATAR are earned in the exams."
      },
      {
        "q": "Do lessons move when the clocks change?",
        "a": "No. Lessons stay at the same Sydney time; we adjust the teacher's schedule."
      },
      {
        "q": "Do you teach adults?",
        "a": "Yes, in adult classes or one to one."
      },
      {
        "q": "Why is 2100 not a leap year?",
        "a": "Under the Gregorian rules, a year divisible by 100 is a leap year only if it is also divisible by 400. 2000 was a leap year; 2100 will not be."
      },
      {
        "q": "Is there a charge for the first lesson?",
        "a": "No. It is free; monthly fees after that are shown in the fees panel."
      }
    ]
  },
  "elsewhere": {
    "eyebrow": "Also on this site",
    "h2": "More for Chatswood families",
    "lede": "NSW maths pages and our Chatswood coding page.",
    "items": [
      {
        "href": "/hsc-maths-extension-2-tutoring",
        "label": "HSC Extension 2",
        "p": "Proof and complex numbers."
      },
      {
        "href": "/hsc-maths-advanced-tutoring",
        "label": "HSC Advanced",
        "p": "Calculus-based senior maths."
      },
      {
        "href": "/nsw-selective-test-mathematical-reasoning-practice",
        "label": "Selective test maths",
        "p": "For Year 6 applicants."
      },
      {
        "href": "/maths-tutor-parramatta",
        "label": "Maths tutor in Parramatta",
        "p": "Another Sydney suburb page."
      },
      {
        "href": "/maths-tutor-sydney",
        "label": "Maths tutor in Sydney",
        "p": "The citywide page."
      },
      {
        "href": "/vibe-coding-and-ai-agents-classes-in-chatswood-sydney",
        "label": "Coding in Chatswood",
        "p": "Programming and AI classes."
      }
    ]
  },
  "start": {
    "h2": "Book a free Chatswood lesson",
    "lede": "Let us know the year level and the topic causing trouble. The free lesson is taught properly, and afterwards you get our honest recommendation.",
    "readFirst": "Background reading: <a class=\"ag-inline-link\" href=\"/how-we-teach\">our teaching approach</a>, and <a class=\"ag-inline-link\" href=\"/online-maths-tutoring-australia\">online maths lessons across Australia</a>.",
    "note": "Replies come from India, where our teachers are based, so the number has a +91 code. We do not have a Chatswood office. WhatsApp is usually quickest.",
    "formNote": "Free, no card, no obligation."
  },
  "footer": {
    "cols": [
      {
        "h4": "NSW maths",
        "links": [
          {
            "href": "/hsc-maths-standard-tutoring",
            "label": "HSC Standard"
          },
          {
            "href": "/hsc-maths-extension-1-tutoring",
            "label": "HSC Extension 1"
          },
          {
            "href": "/oc-test-maths-practice-nsw",
            "label": "OC test maths"
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
            "href": "/maths-tutor-cost-australia-explained",
            "label": "Tutoring costs"
          }
        ]
      }
    ],
    "bottomRight": "When two cycles meet, look for the LCM"
  },
  "personalityCss": "\n.ag-root.ag-mtcw .ag-hero h1 { letter-spacing: -0.022em; }\n.ag-root.ag-mtcw .ag-capsule { border-left-width: 4px; border-radius: 5px; }\n.ag-root.ag-mtcw .ag-section-head h2 { max-width: 33ch; }\n.ag-root.ag-mtcw .ag-table caption { text-align: left; font-weight: 620; }\n.ag-root.ag-mtcw .ag-band-head h3 { letter-spacing: -0.014em; }\n.ag-root.ag-mtcw .ag-slots { gap: 1rem; }\n",
  "dossier": {
    "curriculumAuthority": "NSW: NESA Stage 6 Mathematics page (syllabuses; past HSC papers sentence). NSW Department of Education 2027 terms. ABS SAL10891 QuickStats attendance and 15-19 counts. Visit Chatswood Lunar New Year festival page (Year of the Horse 2026, Year of the Goat February 2027, event 13 Feb 2027, Year of the Dragon); Willoughby City Council (Chatswood Year of the Horse Festival).",
    "localProject": "LCM of cycles: LCM(12, 4) = 12; Goat years mod 4 = 3 (never leap), Horse mod 4 = 2 (never), Dragon mod 4 = 0 (leap until 2100 exception). 13 Feb 2027 Saturday; 12 years with 3 leap days = 4,383 days = 626 weeks + 1 day; weekdays Sat 2027 to Fri 2099; 2099 to 2111 has 2 leap days (4,382 days) so 2111 Friday. Lesson family: lowest common multiple of repeating cycles.",
    "requiredMentions": [
      "See you in February 2027 for Year of the Goat",
      "Chatswood Year of the Horse Festival",
      "Look at past HSC exam papers for Mathematics courses with marking guidelines and feedback",
      "4,383 days",
      "626 weeks",
      "LCM(12, 4) = 12",
      "1,979",
      "719 in vocational education",
      "1,227"
    ],
    "sources": [
      {
        "claim": "Visit Chatswood, Lunar New Year festival page: Year of the Horse thanks, Year of the Goat in February 2027, 13 Feb 2027 event, Year of the Dragon gallery.",
        "url": "https://www.visitchatswood.com.au/LNY/Home"
      },
      {
        "claim": "Willoughby City Council home page: Chatswood Year of the Horse Festival listed among council sites.",
        "url": "https://www.willoughby.nsw.gov.au/"
      },
      {
        "claim": "NESA, Stage 6 Mathematics: syllabuses and past HSC papers.",
        "url": "https://www.educationstandards.nsw.edu.au/wps/portal/nesa/11-12/stage-6-learning-areas/stage-6-mathematics"
      },
      {
        "claim": "ABS, 2021 Census QuickStats, Chatswood (SAL10891): education attendance and age counts.",
        "url": "https://abs.gov.au/census/find-census-data/quickstats/2021/SAL10891"
      },
      {
        "claim": "NSW Department of Education, 2027 term dates.",
        "url": "https://education.nsw.gov.au/schooling/calendars/future-and-past-nsw-term-and-vacation-dates"
      }
    ],
    "rejectedClaims": [
      "Exact dates of future Lunar New Year festivals beyond 13 February 2027: not claimed; only the published years and the 2027 date are used.",
      "Cultural meaning of the zodiac animals: not discussed; the page uses only the 12-year cycle.",
      "Chatswood population, households and station figures: used on the Chatswood coding page, not repeated.",
      "Census rows by school sector, birthplace or language: excluded.",
      "Named tutoring businesses or school results: none."
    ]
  }
};
