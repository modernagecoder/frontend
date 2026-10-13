'use strict';
// Maths tutor in Sunnybank (ag- maths by city; AU cluster Phase 10, row 384).
// Intent: families and adults in Sunnybank, Brisbane, searching for a maths tutor: Prep to Year 12, Queensland senior
// maths, and online lessons in Brisbane time (no daylight saving). Links the Queensland Academies entry page and national
// maths doors. The Sunnybank coding page's figures are not used.
// Sources, read raw on 14 October 2026:
//  - Queensland Department of Education, future school dates: 2027 Term 1 Wednesday 27 January to Thursday 25 March (9
//    weeks); Term 2 Monday 12 April to Friday 25 June (11 weeks); Term 3 Monday 12 July to Friday 17 September (10 weeks);
//    Term 4 Tuesday 5 October to Friday 10 December (10 weeks).
//  - The University of Queensland, Bachelor of Science program page (acad_prog=2461): prerequisites "Queensland Year 12
//    (or equivalent): General English subject (Units 3 & 4, C) Mathematical Methods (Units 3 & 4, C)".
//  - ABS 2021 QuickStats, Sunnybank (SAL32694): attending primary 611; secondary 518; tertiary total 1,119 (of which
//    vocational 432, university 682); aged 15-19 477. (Population and the 5-9 count appear on the Sunnybank coding page; not used.)
//  - IANA time zone database: Australia/Brisbane has no daylight saving rule in force.
// Not read: QCAA pages returned 403 (not circumvented), so Queensland senior maths subjects other than Mathematical
// Methods are not named from a primary source.
// Lesson family: probability without replacement vs the with-replacement approximation. Our calculation: two Sunnybank residents
// in tertiary education chosen at random, both at university: with replacement (682/1,119)^2 = 0.37146; without
// (682 x 681)/(1,119 x 1,118) = 0.37124; difference 0.06%. Both vocational: 0.14904 vs 0.14883. In a class of 10 with
// 3 Year 12 students: 0.09 vs 0.0667, 35% apart.

module.exports = {
  "cluster": "ag",
  "clusterName": "Australia",
  "hub": {
    "group": "city",
    "tag": "SUNNYBANK MATHS",
    "label": "Maths tutor in Sunnybank",
    "blurb": "Maths for Sunnybank learners from Prep to Year 12 and adults, with a probability project that shows when a shortcut is safe."
  },
  "slug": "maths-tutor-sunnybank",
  "code": "mtsb",
  "accent": "#152B4E",
  "accentRationale": "Sunnybank maths: a deep river navy computed for Queensland, at least 20 RGB from every Queensland page accent, 10 from every AU accent and 6 from every colour in use",
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
  "routeLabel": "Maths tutor in Sunnybank",
  "title": "Maths Tutor in Sunnybank | Prep to Year 12 and Adults",
  "description": "Online maths tutor for Sunnybank, Brisbane: Prep to Year 12 and adults, Australian Curriculum maths and Queensland senior Mathematical Methods, in Brisbane time.",
  "ogDescription": "Pick two Sunnybank tertiary students at random. How likely is it that both are at university? With or without replacement, the answers differ by 0.06%.",
  "twitterDescription": "Sunnybank maths tutoring, live online: Prep to Year 12 and adults, in Brisbane time all year.",
  "pageName": "Maths Tutor in Sunnybank",
  "webPageDescription": "Live online maths tutoring for Sunnybank learners from Prep to Year 12 and adults, following the Australian Curriculum and Queensland senior mathematics, with a probability project on Census counts.",
  "courseDescription": "Live online maths lessons for Sunnybank learners, private or in groups of five to ten at the same level, from early number to senior Mathematical Methods and adult maths.",
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
  "crumbLabel": "Maths tutor in Sunnybank",
  "navLinks": [
    {
      "href": "#chance",
      "label": "The probability project"
    },
    {
      "href": "#senior",
      "label": "Senior maths"
    },
    {
      "href": "#prep",
      "label": "Prep to Year 10"
    },
    {
      "href": "#calendar",
      "label": "Calendar and clock"
    },
    {
      "href": "#fees",
      "label": "Fees"
    }
  ],
  "eyebrow": "Sunnybank &middot; Prep to Year 12 and adults &middot; Live maths lessons online",
  "h1": "Maths tutor in Sunnybank",
  "lede": "At the 2021 Census, 1,119 Sunnybank residents were in tertiary education, and 682 of them were at university. Choose two of those students at random: what is the chance both are at university? A careful student says the second choice is out of 1,118 people, not 1,119, and works it through without replacement. A hurried student squares 682 over 1,119. The two answers are 0.37124 and 0.37146, a difference of 0.06%. So the shortcut is fine here, but try the same shortcut in a class of ten and it is out by a third. Knowing when a shortcut is safe is the heart of probability, and of how we teach maths to Sunnybank learners from Prep to Year 12.",
  "secondaryCta": {
    "href": "#chance",
    "label": "Work through the probability"
  },
  "wa": "Hello Modern Age Coders, I would like a free maths lesson for a learner in Sunnybank.",
  "heroNote": "Maths only on this page &middot; Prep to adult &middot; Independent of every Sunnybank school",
  "spec": [
    [
      "Age range",
      "6 to 67"
    ],
    [
      "Prep to Year 6",
      "Number, fractions, chance"
    ],
    [
      "Years 7 to 10",
      "Algebra, probability, statistics"
    ],
    [
      "Years 11 and 12",
      "Including Mathematical Methods"
    ],
    [
      "Adults",
      "Practical and refresher maths"
    ],
    [
      "Lessons",
      "Live video, one to one or five to ten"
    ],
    [
      "Clock",
      "Brisbane time, no daylight saving"
    ],
    [
      "Sunnybank project",
      "With and without replacement"
    ]
  ],
  "capsuleQ": "Maths tutor in Sunnybank, in brief",
  "capsule": "Modern Age Coders is an online maths tutor for Sunnybank learners aged 6 to 67, teaching Australian Curriculum maths from Prep to Year 10, Queensland senior mathematics including Mathematical Methods, and adult maths. Lessons are live video in Brisbane time, one to one or in groups of five to ten at the same level. Our Sunnybank example compares probabilities with and without replacement using Census counts: 0.37146 against 0.37124. Your first lesson is free.",
  "picks": {
    "eyebrow": "Popular with Sunnybank families",
    "h2": "Primary, secondary and senior maths",
    "lede": "The three courses Sunnybank families ask about most; the full list is lower down.",
    "items": [
      {
        "course": "elementary-mathematics-complete-masterclass",
        "code": "SNB / 1",
        "title": "Prep to Year 6",
        "note": "Place value, fractions, measurement and early chance, built carefully."
      },
      {
        "course": "statistics-probability-maths-course",
        "code": "SNB / 2",
        "title": "Probability and statistics",
        "note": "Counting outcomes, with and without replacement, and reading data honestly."
      },
      {
        "course": "complete-high-school-mathematics-mastery",
        "code": "SNB / 3",
        "title": "Senior maths",
        "note": "Functions, calculus and probability for students taking Mathematical Methods."
      }
    ]
  },
  "sections": [
    {
      "id": "chance",
      "tint": "tint",
      "eyebrow": "A Sunnybank worked example",
      "h2": "Choosing two people: with or without replacement?",
      "lede": "When you pick two different people, the second pick comes from a slightly smaller group. Whether that matters depends on how big the group is.",
      "body": [
        {
          "kind": "p",
          "html": "The 2021 Census counted <strong>1,119</strong> Sunnybank residents in tertiary education, of whom <strong>682</strong> were at university and 432 in vocational education. Without replacement, the chance that two different tertiary students chosen at random are both at university is (682 &times; 681) / (1,119 &times; 1,118). With replacement, which treats the two picks as independent, it is (682 / 1,119) squared."
        },
        {
          "kind": "table",
          "caption": "Two ways to calculate the same chance (our calculation from ABS counts)",
          "head": [
            "Method",
            "Calculation",
            "Probability",
            "About 1 in"
          ],
          "rows": [
            [
              "Both at university, without replacement (exact)",
              "(682 x 681) / (1,119 x 1,118)",
              "0.37124",
              "about 0.37"
            ],
            [
              "Both at university, with replacement (shortcut)",
              "(682 / 1,119) squared",
              "0.37146",
              "about 0.37"
            ],
            [
              "Both in vocational education, exact",
              "(432 x 431) / (1,119 x 1,118)",
              "0.14883",
              "about 0.15"
            ],
            [
              "Both in vocational education, shortcut",
              "(432 / 1,119) squared",
              "0.14904",
              "about 0.15"
            ]
          ]
        },
        {
          "kind": "three",
          "mt": true,
          "cells": [
            {
              "h3": "Here the shortcut wins",
              "p": "In a group of over a thousand, removing one person barely changes the odds. The with-replacement shortcut is quicker and only 0.06% off for the university pair, which is plenty accurate."
            },
            {
              "h3": "In a small group it fails",
              "p": "Take a class of 10 with 3 students in Year 12. Without replacement the chance both picks are Year 12 is 6/90, about 0.067; the shortcut gives 0.09. That is 35% too high."
            },
            {
              "h3": "The rule of thumb",
              "p": "When the sample is a tiny fraction of the group, the shortcut is safe. When it is a noticeable fraction, use the exact method."
            }
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "What students practise",
          "left": [
            "Tree diagrams, multiplying along branches, the difference between independent and dependent events, and comparing an exact answer with an approximation.",
            "Senior students meet the same ideas in the binomial and related distributions."
          ],
          "rightH3": "Why use real counts",
          "right": [
            "Made-up numbers hide the question that matters: is the group big enough for the shortcut? Real Census counts make students decide.",
            "The counts are as the ABS published them; the probabilities are our own calculation."
          ]
        },
        {
          "kind": "source",
          "html": "Data: ABS, <a class=\"ag-inline-link\" href=\"https://abs.gov.au/census/find-census-data/quickstats/2021/SAL32694\" rel=\"noopener\" target=\"_blank\">2021 Census QuickStats, Sunnybank</a>, read 14 October 2026."
        }
      ]
    },
    {
      "id": "simulate",
      "tint": "",
      "eyebrow": "Checking by experiment",
      "h2": "Simulating the draw in Python",
      "lede": "A formula gives the probability; a simulation shows what happens in practice. Older students do both and compare.",
      "body": [
        {
          "kind": "table",
          "caption": "Drawing two of the 1,119 tertiary students at random, repeated (our simulation, seed 2026)",
          "head": [
            "Number of repeats",
            "Times both were at university",
            "Observed proportion",
            "Exact probability"
          ],
          "rows": [
            [
              "1,000",
              "371",
              "0.371",
              "0.37124"
            ],
            [
              "100,000",
              "37,294",
              "0.37294",
              "0.37124"
            ]
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "What the simulation shows",
          "left": [
            "With 1,000 repeats the observed proportion, 0.371, happens to land very close to the exact value. With 100,000 repeats it is 0.37294, which is still within the normal wobble of a random experiment.",
            "Students learn that simulations get closer to the truth on average as repeats grow, but never land on it exactly."
          ],
          "rightH3": "Why it is worth doing",
          "right": [
            "Writing ten lines of Python to draw two names from a list makes \"without replacement\" concrete: the code literally removes the first name before drawing the second.",
            "Students taking <a class=\"ag-inline-link\" href=\"/courses/maths-through-coding\">maths through coding</a> build this as one of their first probability projects."
          ]
        }
      ]
    },
    {
      "id": "senior",
      "tint": "deep",
      "eyebrow": "Years 11 and 12 in Queensland",
      "h2": "Senior maths for Sunnybank students",
      "lede": "Queensland students study senior subjects across Units 1 to 4. University entry requirements show which maths subject many courses expect.",
      "body": [
        {
          "kind": "two",
          "leftH3": "Mathematical Methods and university entry",
          "left": [
            "The University of Queensland lists, for its Bachelor of Science, the prerequisites \"Queensland Year 12 (or equivalent): General English subject (Units 3 & 4, C) Mathematical Methods (Units 3 & 4, C)\" together with a science subject.",
            "So Mathematical Methods matters for many science, engineering and economics pathways, and it is the senior subject we are asked about most."
          ],
          "rightH3": "What we teach, and what we do not promise",
          "right": [
            "We teach senior maths content, exam technique and checking habits, for Mathematical Methods and the other senior maths subjects. We never promise a result or an ATAR.",
            "Internal assessments remain the student's own work."
          ]
        },
        {
          "kind": "p",
          "mt": true,
          "html": "The Queensland Curriculum and Assessment Authority publishes the full list of senior subjects; its pages did not load for us when we checked, so we do not list the other maths subjects here from memory."
        },
        {
          "kind": "source",
          "html": "Source: The University of Queensland, <a class=\"ag-inline-link\" href=\"https://my.uq.edu.au/programs-courses/program.html?acad_prog=2461\" rel=\"noopener\" target=\"_blank\">Bachelor of Science program page</a>, read 14 October 2026."
        }
      ]
    },
    {
      "id": "prep",
      "tint": "tint",
      "eyebrow": "Prep to Year 10",
      "h2": "What Sunnybank learners build before senior school",
      "lede": "Probability starts long before Year 11, with words like likely and unlikely, and grows into fractions, tree diagrams and data.",
      "body": [
        {
          "kind": "table",
          "caption": "Chance and data through the years",
          "head": [
            "Years",
            "Chance and data focus",
            "A typical task"
          ],
          "rows": [
            [
              "Prep to 2",
              "Likely, unlikely, certain, impossible",
              "Sorting everyday events by how likely they are"
            ],
            [
              "3 to 6",
              "Fractions as chances, simple experiments",
              "Rolling a dice 60 times and comparing with 1/6"
            ],
            [
              "7 and 8",
              "Sample spaces and relative frequency",
              "Listing outcomes for two coins"
            ],
            [
              "9 and 10",
              "Two-step events, with and without replacement",
              "The Sunnybank question above"
            ]
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "Sunnybank learners in 2021",
          "left": [
            "The Census counted 611 Sunnybank residents at primary school and 518 at secondary school, and 477 residents aged 15 to 19, the years when senior maths choices are made.",
            "Online lessons mean every one of them could join from home."
          ],
          "rightH3": "Academies and tests",
          "right": [
            "Year 9 families interested in the Queensland Academies can read our <a class=\"ag-inline-link\" href=\"/queensland-academies-entry-maths-practice\">Queensland Academies entry maths</a> page. NAPLAN numeracy has <a class=\"ag-inline-link\" href=\"/naplan-numeracy-practice-online\">its own page</a>.",
            "This page stays with everyday maths."
          ]
        }
      ]
    },
    {
      "id": "calendar",
      "tint": "deep",
      "eyebrow": "Calendar and clock",
      "h2": "The 2027 Queensland school year, on Brisbane time",
      "lede": "Queensland keeps the same clock all year, which makes lesson times simple.",
      "body": [
        {
          "kind": "table",
          "caption": "Queensland state school terms, 2027",
          "head": [
            "Term",
            "Dates",
            "Length"
          ],
          "rows": [
            [
              "Term 1",
              "Wednesday 27 January to Thursday 25 March",
              "9 weeks"
            ],
            [
              "Term 2",
              "Monday 12 April to Friday 25 June",
              "11 weeks"
            ],
            [
              "Term 3",
              "Monday 12 July to Friday 17 September",
              "10 weeks"
            ],
            [
              "Term 4",
              "Tuesday 5 October to Friday 10 December",
              "10 weeks"
            ]
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "No daylight saving",
          "left": [
            "Brisbane does not change its clocks, and neither does India, where our teachers work. So the gap is the same all year: Brisbane is 4 hours 30 minutes ahead. A 5pm Sunnybank lesson is always 12:30pm for the teacher.",
            "Families in New South Wales see the gap move twice a year; Sunnybank families do not."
          ],
          "rightH3": "One to one or in a group",
          "right": [
            "Private lessons suit a specific gap or an exam. Groups of five to ten at one level suit steady progress, and the shared board shows the teacher every step.",
            "Holiday revision is available on request."
          ]
        },
        {
          "kind": "source",
          "html": "Sources: Queensland Department of Education, <a class=\"ag-inline-link\" href=\"https://education.qld.gov.au/about-us/calendar/future-dates\" rel=\"noopener\" target=\"_blank\">future school dates</a>; IANA time zone database, Australia/Brisbane. Read 14 October 2026."
        }
      ]
    },
    {
      "id": "grownups",
      "tint": "tint",
      "eyebrow": "Adults in Sunnybank",
      "h2": "Probability and statistics for grown-ups",
      "lede": "Many adults who join us want to read numbers with confidence: risks, averages and percentages in the news and at work.",
      "body": [
        {
          "kind": "three",
          "cells": [
            {
              "h3": "Reading risk",
              "p": "Understanding what a one in a thousand chance means, and why two small risks are not simply added together."
            },
            {
              "h3": "Workplace data",
              "p": "Averages, spread and simple charts for reports, with the habit of asking how a number was produced."
            },
            {
              "h3": "Supporting a student",
              "p": "Following tree diagrams and probability tables well enough to help a teenager with homework."
            }
          ]
        },
        {
          "kind": "p",
          "mt": true,
          "html": "Adult learners have their own classes, separate from school students, or private lessons at a time that suits shift work. The with-and-without replacement question above is a favourite first lesson for adults too, because it shows that a sensible shortcut has limits."
        }
      ]
    }
  ],
  "ladder": {
    "eyebrow": "Progress",
    "h2": "From likely and unlikely to Mathematical Methods",
    "lede": "Learners step up once a skill works on a problem they have not met before.",
    "table": {
      "caption": "Steps in chance and reasoning",
      "head": [
        "Usually",
        "Step",
        "Shown when the learner can"
      ],
      "rows": [
        [
          "Prep to Year 2",
          "1. Language of chance",
          "Place events on a likely-to-unlikely line and explain why"
        ],
        [
          "Years 3 to 6",
          "2. Chance as a fraction",
          "Write the chance of rolling a 5 and test it"
        ],
        [
          "Years 7 to 10",
          "3. Two-step events",
          "Decide whether replacement matters and calculate both ways"
        ],
        [
          "Years 11 and 12",
          "4. Distributions",
          "Use a probability model and judge whether it fits"
        ]
      ]
    },
    "left": {
      "h3": "Coming in at Year 11",
      "ps": [
        "Students who join late often need algebra and fractions shored up first; we say how long that should take.",
        "It is the quickest path to coping with senior work."
      ]
    },
    "right": {
      "h3": "Adults",
      "ps": [
        "Adults often come for statistics at work or to help with homework.",
        "They learn in adult groups or one to one."
      ]
    }
  },
  "catalogue": {
    "eyebrow": "All courses",
    "h2": "Maths courses for Sunnybank learners",
    "lede": "Grouped by stage; card titles are our course names, lessons follow the Australian Curriculum and Queensland senior subjects.",
    "bands": [
      {
        "num": "I",
        "h3": "Prep to Year 6",
        "sub": "Primary",
        "courses": [
          {
            "code": "SNB / P1",
            "slug": "early-math-foundations",
            "title": "Early number",
            "blurb": "Ages 4 to 7, with objects."
          },
          {
            "code": "SNB / P2",
            "slug": "mental-maths-mastery-kids",
            "title": "Mental maths",
            "blurb": "Reasoned quick arithmetic."
          },
          {
            "code": "SNB / P3",
            "slug": "abacus-mental-maths-course-for-kids",
            "title": "Abacus",
            "blurb": "Beads to mental images."
          }
        ]
      },
      {
        "num": "II",
        "h3": "Years 7 to 10",
        "sub": "Secondary",
        "courses": [
          {
            "code": "SNB / S1",
            "slug": "comprehensive-middle-school-mathematics-mastery",
            "title": "Years 7 to 10 maths",
            "blurb": "Algebra, geometry and chance."
          },
          {
            "code": "SNB / S2",
            "slug": "algebra-foundations-masterclass",
            "title": "Algebra foundations",
            "blurb": "For a learner who slipped."
          },
          {
            "code": "SNB / S3",
            "slug": "maths-through-coding",
            "title": "Maths through coding",
            "blurb": "Simulate probability in Python."
          }
        ]
      },
      {
        "num": "III",
        "h3": "Senior and adults",
        "sub": "Years 11, 12 and beyond",
        "courses": [
          {
            "code": "SNB / H1",
            "slug": "complete-high-school-mathematics-mastery",
            "title": "Senior maths",
            "blurb": "For Mathematical Methods."
          },
          {
            "code": "SNB / H2",
            "slug": "statistics-probability-maths-course",
            "title": "Statistics and probability",
            "blurb": "In depth, for older learners."
          },
          {
            "code": "SNB / H3",
            "slug": "college-mathematics-complete-masterclass",
            "title": "University maths",
            "blurb": "Calculus and linear algebra."
          }
        ]
      }
    ]
  },
  "how": {
    "eyebrow": "Routine",
    "h2": "A Sunnybank week of maths",
    "lede": "Fixed weekly times on Brisbane time, which never shifts for daylight saving.",
    "slots": [
      {
        "time": "Weekday afternoons",
        "l": "Prep to Year 10."
      },
      {
        "time": "Weekday evenings",
        "l": "Senior students and adults."
      },
      {
        "time": "Weekends",
        "l": "Longer lessons on request."
      }
    ],
    "cells": [
      {
        "h3": "One teacher",
        "p": "The same teacher each week."
      },
      {
        "h3": "Family updates",
        "p": "A short, honest note after lessons."
      },
      {
        "h3": "Grouped by level",
        "p": "Classmates working at the same point."
      },
      {
        "h3": "Real data",
        "p": "Census counts and simulations in lessons."
      },
      {
        "h3": "Extra before exams",
        "p": "Private lessons can be added."
      },
      {
        "h3": "Explain first",
        "p": "Learners say why before they drill how."
      }
    ]
  },
  "projectsH2": "What our learners have made",
  "projectsLede": "Projects by students who started with maths like this. More in the <a class=\"ag-inline-link\" href=\"/student-labs\">student labs</a>.",
  "reviewsLede": "Reviews posted on our Google profile, unedited.",
  "fees": {
    "h2": "Fees for Sunnybank maths lessons",
    "lede": "Families outside India pay a set monthly fee in US dollars, with no joining fee and no contract.",
    "free": [
      "A full lesson at the right level",
      "An honest summary",
      "No card required"
    ],
    "group": [
      "Five to ten learners at one level",
      "The same teacher all term",
      "Practice checked",
      "Stop after any month"
    ],
    "one": [
      "Private teaching",
      "One goal at a time",
      "Helpful before senior exams"
    ]
  },
  "faq": {
    "eyebrow": "Sunnybank maths questions",
    "h2": "Questions about a maths tutor in Sunnybank",
    "items": [
      {
        "q": "Do you tutor maths for Sunnybank students?",
        "a": "Yes, live online in Brisbane time, from Prep to Year 12 and for adults, one to one or in level-matched groups."
      },
      {
        "q": "Do you teach Mathematical Methods?",
        "a": "Yes, along with the other senior maths subjects and Years 7 to 10 maths."
      },
      {
        "q": "Why do universities mention Mathematical Methods?",
        "a": "Many list it as a prerequisite. The University of Queensland, for example, lists Mathematical Methods (Units 3 and 4, C) among the prerequisites for its Bachelor of Science."
      },
      {
        "q": "What is the difference between with and without replacement?",
        "a": "Without replacement, the second pick comes from a group one smaller. For two Sunnybank tertiary students both at university, the answers are 0.37124 exact and 0.37146 with the shortcut."
      },
      {
        "q": "When is the with-replacement shortcut safe?",
        "a": "When you choose only a tiny fraction of the group. In a class of 10 the shortcut can be a third out; for over a thousand Sunnybank tertiary students it is about 0.06% out."
      },
      {
        "q": "Can tutoring guarantee a result or ATAR?",
        "a": "No. We teach carefully and report honestly, but no tutor can promise a result or an ATAR."
      },
      {
        "q": "Do lesson times change during the year?",
        "a": "No. Brisbane has no daylight saving, so lessons stay at the same time all year."
      },
      {
        "q": "Can adults learn too?",
        "a": "Yes, in adult groups or one to one."
      },
      {
        "q": "Can a simulation replace the formula?",
        "a": "No, but it is a good check. In our 100,000-repeat simulation the proportion of university pairs was 0.37294, close to the exact 0.37124."
      },
      {
        "q": "What is a tree diagram used for?",
        "a": "It lays out each stage of a chance experiment as branches, so probabilities can be multiplied along a path and added across paths. It makes with and without replacement easy to compare."
      },
      {
        "q": "How much are lessons?",
        "a": "The first lesson is free. Monthly fees for groups and private lessons are in the fees panel on this page."
      }
    ]
  },
  "elsewhere": {
    "eyebrow": "Also on this site",
    "h2": "More for Sunnybank learners",
    "lede": "Queensland and national maths pages and our Sunnybank coding page.",
    "items": [
      {
        "href": "/queensland-academies-entry-maths-practice",
        "label": "Queensland Academies entry maths",
        "p": "For Year 9 applicants."
      },
      {
        "href": "/naplan-numeracy-practice-online",
        "label": "NAPLAN numeracy",
        "p": "Years 3, 5, 7 and 9."
      },
      {
        "href": "/australian-curriculum-maths-year-7-to-10-help",
        "label": "Years 7 to 10 maths",
        "p": "The national curriculum."
      },
      {
        "href": "/australian-mathematics-competition-practice-by-year",
        "label": "Maths competitions",
        "p": "Practice by year."
      },
      {
        "href": "/maths-tutor-cost-australia-explained",
        "label": "Maths tutoring costs",
        "p": "What lessons cost."
      },
      {
        "href": "/best-coding-and-ai-classes-in-sunnybank-brisbane",
        "label": "Coding in Sunnybank",
        "p": "Programming for the suburb."
      }
    ]
  },
  "start": {
    "h2": "Book a free Sunnybank lesson",
    "lede": "Tell us the learner's year and what feels difficult. We teach a full lesson and then give a straight answer about next steps.",
    "readFirst": "Read first: <a class=\"ag-inline-link\" href=\"/how-we-teach\">how we teach</a> and <a class=\"ag-inline-link\" href=\"/online-maths-tutoring-australia\">online maths tutoring in Australia</a>.",
    "note": "We are a team in India, hence the +91 number, with no office in Brisbane. WhatsApp is usually the quickest way to reach us.",
    "formNote": "Free, no card, no obligation."
  },
  "footer": {
    "cols": [
      {
        "h4": "Queensland maths",
        "links": [
          {
            "href": "/queensland-academies-entry-maths-practice",
            "label": "Queensland Academies maths"
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
            "href": "/coding-and-ai-classes-in-queensland",
            "label": "Coding in Queensland"
          },
          {
            "href": "/maths-tutor-sydney",
            "label": "Maths tutor in Sydney"
          }
        ]
      }
    ],
    "bottomRight": "Ask whether the group is big enough"
  },
  "personalityCss": "\n.ag-root.ag-mtsb .ag-hero h1 { letter-spacing: -0.021em; }\n.ag-root.ag-mtsb .ag-capsule { border-left-width: 5px; border-radius: 3px; }\n.ag-root.ag-mtsb .ag-section-head h2 { max-width: 32ch; }\n.ag-root.ag-mtsb .ag-table caption { text-align: left; font-weight: 610; }\n.ag-root.ag-mtsb .ag-band-head h3 { letter-spacing: -0.009em; }\n.ag-root.ag-mtsb .ag-slots { gap: 1.15rem; }\n",
  "dossier": {
    "curriculumAuthority": "Queensland: Department of Education future school dates (2027 terms); The University of Queensland Bachelor of Science prerequisites (General English and Mathematical Methods, Units 3 and 4, C). QCAA pages 403, not used. ABS SAL32694 QuickStats. IANA Australia/Brisbane.",
    "localProject": "Without vs with replacement among Sunnybank tertiary students (published total 1,119; university 682; vocational 432): both university exact (682 x 681)/(1,119 x 1,118) = 0.37124, shortcut (682/1,119)^2 = 0.37146, 0.06% apart; both vocational 0.14883 vs 0.14904. Class of 10 with 3: 6/90 = 0.0667 vs 0.09, 35% apart. Lesson family: probability without replacement vs with-replacement approximation.",
    "requiredMentions": [
      "Mathematical Methods (Units 3 & 4, C)",
      "Tuesday 5 October to Friday 10 December",
      "1,119",
      "0.37124",
      "0.37146",
      "0.14883",
      "(682 x 681) / (1,119 x 1,118)",
      "611"
    ],
    "sources": [
      {
        "claim": "Queensland Department of Education, future school dates: 2027 terms.",
        "url": "https://education.qld.gov.au/about-us/calendar/future-dates"
      },
      {
        "claim": "The University of Queensland, Bachelor of Science program: Queensland Year 12 prerequisites.",
        "url": "https://my.uq.edu.au/programs-courses/program.html?acad_prog=2461"
      },
      {
        "claim": "ABS, 2021 Census QuickStats, Sunnybank (SAL32694): education attendance and age counts.",
        "url": "https://abs.gov.au/census/find-census-data/quickstats/2021/SAL32694"
      },
      {
        "claim": "IANA time zone database: Australia/Brisbane, no daylight saving.",
        "url": "https://data.iana.org/time-zones/tzdb/australasia"
      }
    ],
    "rejectedClaims": [
      "Queensland senior maths subjects other than Mathematical Methods: QCAA returned 403 and was not circumvented, so they are not named.",
      "Sunnybank coding page figures: not repeated.",
      "Census rows by school sector, birthplace or language: excluded.",
      "Named tutoring businesses or school results: none."
    ]
  }
};
