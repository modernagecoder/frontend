'use strict';
// Cyber security course for teens, Australia (ag- age and track door; AU cluster Phase 9, AU-P9B).
// Intent: Australian teenagers (13 to 18) and parents looking for a cyber security course. Defensive and ethical skills
// only: protecting accounts, recognising phishing and lookalike domains, understanding how systems are secured, and
// practising on systems the student owns or is explicitly allowed to test. No attack tooling. Capture the flag (CTF) is
// framed only as legal, organised practice.
// Sources, read raw on 14 October 2026:
//  - ACARA, Australian Curriculum v9, Digital Technologies 7-10: AC9TDI8P13 "explain how multi-factor authentication
//    protects an account when the password is compromised and identify phishing and other cyber security threats"; its
//    phishing elaboration "using an email address from an unofficial domain"; AC9TDI10P13 "develop cyber security threat
//    models, and explore a software, user or software supply chain vulnerability", elaboration "in their own software".
//  - Federal Register of Legislation, Criminal Code Act 1995 (No. 12, 1995), latest compilation C2026C00243: Part 10.7
//    Computer offences; 476.2 Meaning of unauthorised access, modification or impairment; 478.1 Unauthorised access to, or
//    modification of, restricted data (headings read from the table of contents).
//  - ABS, ANZSCO 2022, 262 Database and Systems Administrators, and ICT Security Specialists (definition).
// Not reachable: cyber.gov.au and esafety.gov.au timed out; scamwatch.gov.au returned 403 (not circumvented).
// Lesson family: defensive lookalike-domain checks. Our script (no domain registered or visited): 10 real Australian
// government domains, 72 lookalike spellings (29 homoglyph, 13 ASCII swaps, 10 extra word, 10 wrong ending, 10 subdomain
// trick). Exact allow-list match flags 72 of 72; a similarity score of 0.85 or more flags 43 and misses 29 (all 10
// subdomain tricks, all 10 wrong endings, 8 extra word, 1 ASCII swap); wrong endings and subdomain tricks use the reserved .example name; IDNA encoding shows xn-- for all 29 homoglyph variants.

module.exports = {
  "cluster": "ag",
  "clusterName": "Australia",
  "hub": {
    "group": "guide",
    "tag": "CYBER SECURITY, TEENS",
    "blurb": "Defensive, ethical cyber security for Australian teens: accounts, phishing, lookalike domains and safe, legal practice."
  },
  "slug": "cyber-security-course-for-teens-australia",
  "code": "csta",
  "accent": "#7A2842",
  "accentRationale": "Cyber security for teens, Australia: a deep claret (hue 341.0), 7.71:1 on #EDE7DA; 22.1 RGB from the nearest national AU accent, 10.6 from any other Australian accent and 6.8 from every other site colour",
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
  "routeLabel": "Cyber security course for teens, Australia",
  "title": "Cyber Security Course for Teens in Australia | Defend First",
  "description": "Defensive cyber security for Australian teens aged 13 to 18: protect accounts, spot phishing and lookalike domains, practise legally. Live online, first class free.",
  "ogDescription": "72 fake spellings of real government web addresses. A clever similarity score caught 43. A plain allow-list caught all 72. Defensive cyber security for teens.",
  "twitterDescription": "Defensive cyber security for Australian teens: accounts, phishing, lookalike domains and legal practice. Live online, first class free.",
  "pageName": "Cyber Security Course for Teens in Australia",
  "webPageDescription": "A guide to defensive, ethical cyber security learning for Australian teenagers, with a worked example on detecting lookalike web addresses.",
  "courseDescription": "Live online defensive cyber security lessons for Australian teens aged 13 to 18: account protection, phishing, lookalike domains, how systems are secured and legal practice.",
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
  "crumbLabel": "Cyber security for teens",
  "navLinks": [
    {
      "href": "#defend",
      "label": "Defend first"
    },
    {
      "href": "#lookalike",
      "label": "A worked example"
    },
    {
      "href": "#law",
      "label": "The law"
    },
    {
      "href": "#practice",
      "label": "Legal practice"
    },
    {
      "href": "#fees",
      "label": "Fees"
    }
  ],
  "eyebrow": "Australia &middot; Ages 13 to 18 &middot; Defensive and ethical",
  "h1": "Cyber security course for teens",
  "lede": "Teenagers are online all day, and most of what goes wrong for them online is not clever hacking. It is a convincing message, a web address that is nearly right, or a password used in three places. Our cyber security course for teens teaches the defensive side of the field: how accounts are protected, how phishing works, how to recognise a lookalike address, and how real systems keep data safe. Every practical exercise happens on the student's own work or on systems built for practice. This page explains the approach, measures three ways of catching fake web addresses, and sets out what Australian law and the Australian Curriculum say.",
  "secondaryCta": {
    "href": "#lookalike",
    "label": "See the worked example"
  },
  "wa": "Hello Modern Age Coders, I am a teenager in Australia (or a parent of one) interested in the cyber security course for teens. Could we book a free first class?",
  "heroNote": "Live teaching since 2020 &middot; 10,000+ students &middot; Defensive skills, practised only where allowed",
  "spec": [
    [
      "For",
      "Teens aged 13 to 18"
    ],
    [
      "Focus",
      "Defence and ethics"
    ],
    [
      "Accounts",
      "Passwords and multi-factor sign-in"
    ],
    [
      "Threats",
      "Phishing and lookalike domains"
    ],
    [
      "Systems",
      "How data is secured"
    ],
    [
      "Practice",
      "Own projects and organised challenges"
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
  "capsule": "A cyber security course for teens teaches young people aged 13 to 18 to protect accounts, recognise phishing and lookalike web addresses, understand how systems secure data, and practise only on systems they own or are permitted to test. The Australian Curriculum asks Year 7 and 8 students to identify phishing and explain multi-factor authentication. Modern Age Coders teaches the defensive side live online, in small groups or one to one, and the first class is free.",
  "picks": {
    "eyebrow": "Start here",
    "h2": "Three courses for a teen interested in security",
    "lede": "All three are for under-18s. Each card opens the syllabus.",
    "items": [
      {
        "course": "cybersecurity-course-for-teens-ethical-defensive",
        "code": "CSTA / 01",
        "title": "Cyber Security for Teens",
        "note": "Ages 13 to 18, no coding needed. Online safety and white-hat defence."
      },
      {
        "course": "python-complete-masterclass-teens",
        "code": "CSTA / 02",
        "title": "Python for Teens",
        "note": "The language most security tools and scripts are written in, from zero."
      },
      {
        "course": "backend-coding-masterclass-for-teens",
        "code": "CSTA / 03",
        "title": "Backend Development for Teens",
        "note": "Build a server and a database, then learn how to keep the data in them safe."
      }
    ]
  },
  "sections": [
    {
      "id": "defend",
      "tint": "tint",
      "eyebrow": "Defend first",
      "h2": "What a defensive course covers",
      "lede": "Security starts with the student's own accounts and devices, then moves to how websites and apps keep data safe.",
      "body": [
        {
          "kind": "table",
          "caption": "Course topics",
          "head": [
            "Topic",
            "What students learn",
            "What they can do afterwards"
          ],
          "rows": [
            [
              "Accounts",
              "Long passphrases, password managers, multi-factor sign-in",
              "Secure their own accounts and explain why each step helps"
            ],
            [
              "Phishing",
              "How messages create urgency and copy trusted brands",
              "Pick apart a suspicious message without clicking anything"
            ],
            [
              "Web addresses",
              "How domains work and how lookalikes are made",
              "Check where a link really goes before trusting it"
            ],
            [
              "How data is protected",
              "Encryption, hashing and secure connections in plain terms",
              "Explain what the padlock in a browser does and does not mean"
            ],
            [
              "Threat models",
              "Who might attack a system, what they want, and how",
              "Write a simple threat model for their own project"
            ]
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "What we do not teach",
          "left": [
            "We do not teach teenagers to break into systems, use attack tools against real services, or get around protections. That is both unlawful without permission and the wrong place to start.",
            "Learning how attacks work is part of defence, and it is taught by explaining them and by testing a student's own code."
          ],
          "rightH3": "Why defence is the right start",
          "right": [
            "Every security professional spends most of their time preventing problems, not causing them. Defensive skills are useful from the first lesson, to the student and to their family.",
            "They also build the careful, permission-first habits the field depends on."
          ]
        }
      ]
    },
    {
      "id": "lookalike",
      "tint": "deep",
      "eyebrow": "A worked example",
      "h2": "72 fake addresses and three ways to catch them",
      "lede": "A phishing message only works if the link looks right. Students measure which simple checks actually catch lookalike web addresses.",
      "body": [
        {
          "kind": "p",
          "html": "We took 10 real Australian government web addresses, such as <code>ato.gov.au</code> and <code>my.gov.au</code>, and wrote a script that produces lookalike spellings of them: letters swapped for identical-looking letters from another alphabet, 0 for o, an extra word, a different ending, and the real name placed at the front of someone else's domain. That gave <strong>72 lookalikes</strong>. None of them was registered or visited; they exist only inside the script."
        },
        {
          "kind": "table",
          "caption": "Three checks against 72 lookalike addresses (our script, 14 October 2026)",
          "head": [
            "Check",
            "Lookalikes flagged",
            "What it misses"
          ],
          "rows": [
            [
              "Is it exactly on my list of real addresses?",
              "72 of 72",
              "Nothing in this test"
            ],
            [
              "Is it at least 85% similar to a real address?",
              "43 of 72",
              "All 10 subdomain tricks and 10 wrong-ending fakes, 8 extra-word fakes, 1 swap"
            ],
            [
              "Does it turn into an xn-- address when encoded?",
              "29 of 29 homoglyph fakes",
              "Only applies to other-alphabet letters"
            ]
          ]
        },
        {
          "kind": "three",
          "mt": true,
          "cells": [
            {
              "h3": "The plain rule wins",
              "p": "The simplest check, comparing the exact address with a short list of sites you actually use, caught every fake. The cleverer similarity score missed 29."
            },
            {
              "h3": "Why similarity fails",
              "p": "An address like ato.gov.au.secure-check.example contains the real name but belongs to whoever owns secure-check.example. It scores low on similarity, so a similarity check waves it through."
            },
            {
              "h3": "The hidden letters",
              "p": "A Cyrillic a looks exactly like a Latin a. Encoded for the internet, the fake becomes xn--to-6kc.gov.au, which gives it away at once."
            }
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "The curriculum link",
          "left": [
            "Australian Curriculum content description AC9TDI8P13 asks students to \"explain how multi-factor authentication protects an account when the password is compromised and identify phishing and other cyber security threats\".",
            "One of its elaborations describes phishing that uses \"an email address from an unofficial domain\", which is exactly what this exercise trains students to spot."
          ],
          "rightH3": "What students take away",
          "right": [
            "Bookmarks and typed addresses beat links in messages. Reading a domain from the right-hand end tells you who owns it.",
            "And a smart-looking check is not automatically a good one: measure it before trusting it."
          ]
        },
        {
          "kind": "source",
          "html": "Source, read 14 October 2026: ACARA, <a class=\"ag-inline-link\" href=\"https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx\" rel=\"noopener\" target=\"_blank\">Digital Technologies curriculum content, Years 7 to 10</a>. The script and its counts are our own; no lookalike address was registered or visited."
        }
      ]
    },
    {
      "id": "law",
      "tint": "tint",
      "eyebrow": "The law",
      "h2": "Permission is the line",
      "lede": "Australian law treats access to a computer without authority as an offence. Students learn where the line is before they learn anything else.",
      "body": [
        {
          "kind": "two",
          "leftH3": "What the Criminal Code covers",
          "left": [
            "The Commonwealth Criminal Code, set out in the Schedule to the Criminal Code Act 1995, has a Part 10.7 headed Computer offences. Its sections include 476.2, \"Meaning of unauthorised access, modification or impairment\", and 478.1, \"Unauthorised access to, or modification of, restricted data\".",
            "States and territories have their own computer offence laws as well. We teach the principle, not legal advice."
          ],
          "rightH3": "How that shapes the course",
          "right": [
            "Every practical task is on the student's own code, on flawed code samples written for teaching, or in organised challenges whose rules give permission.",
            "If a student is unsure whether something is allowed, the answer is to stop and ask."
          ]
        },
        {
          "kind": "table",
          "mt": true,
          "caption": "How our course draws the line",
          "head": [
            "We do",
            "We do not"
          ],
          "rows": [
            [
              "Explain how attacks work so they can be prevented",
              "Teach or run attacks on real services"
            ],
            [
              "Test students' own projects for weaknesses",
              "Scan, probe or log in to systems without written permission"
            ],
            [
              "Review flawed code samples written for teaching",
              "Share tools for getting around protections"
            ],
            [
              "Prepare students for organised, rule-bound challenges",
              "Help anyone access someone else's account"
            ]
          ]
        },
        {
          "kind": "source",
          "html": "Source, read 14 October 2026: Federal Register of Legislation, <a class=\"ag-inline-link\" href=\"https://www.legislation.gov.au/C2004A04868/latest/text\" rel=\"noopener\" target=\"_blank\">Criminal Code Act 1995</a>, compilation C2026C00243, Part 10.7 table of contents."
        }
      ]
    },
    {
      "id": "practice",
      "tint": "",
      "eyebrow": "Legal practice",
      "h2": "Capture the flag, the legal way",
      "lede": "Capture the flag (CTF) challenges are puzzles in which every target is built to be solved and permission is given in the rules. They are where teens practise safely.",
      "body": [
        {
          "kind": "table",
          "caption": "Practice that stays on the right side of the line",
          "head": [
            "Practice",
            "Why it is allowed",
            "Skill it builds"
          ],
          "rows": [
            [
              "Securing their own website",
              "They own it",
              "Finding and fixing weaknesses in their own code"
            ],
            [
              "Teaching code samples with planted mistakes",
              "The code is ours and is read and fixed, not used against anything",
              "Spotting and correcting unsafe code"
            ],
            [
              "Organised student CTF events",
              "Entry rules grant permission for the challenge targets only",
              "Puzzles in encoding, cryptography and careful reading"
            ],
            [
              "Threat model for a school club app",
              "It is a paper exercise on their own design",
              "Thinking like a defender"
            ]
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "Year 9 and 10 students go further",
          "left": [
            "Content description AC9TDI10P13 asks students to \"develop cyber security threat models, and explore a software, user or software supply chain vulnerability\".",
            "Its elaboration places the hands-on part \"in their own software\", the same rule our course follows."
          ],
          "rightH3": "Where it can lead",
          "right": [
            "ANZSCO groups security work with database and systems administration in minor group 262, whose definition includes maintaining \"security policies and procedures\".",
            "We make no promise about careers. The course builds understanding and safe habits that are valuable whatever a teen goes on to do."
          ]
        }
      ]
    },
    {
      "id": "home",
      "tint": "deep",
      "eyebrow": "At home",
      "h2": "A family security check students run",
      "lede": "One of the first practical tasks is to help the household, with permission, tighten its own accounts and devices.",
      "body": [
        {
          "kind": "table",
          "caption": "The household check, step by step",
          "head": [
            "Step",
            "What the student does",
            "Why it helps"
          ],
          "rows": [
            [
              "Accounts list",
              "With a parent, list the important accounts: email, banking, school, games",
              "You cannot protect what you have not listed"
            ],
            [
              "Sign-in strength",
              "Help switch reused passwords to long passphrases in a password manager",
              "One leaked password no longer opens everything"
            ],
            [
              "Second step at sign-in",
              "Turn on multi-factor sign-in where it is offered",
              "A stolen password alone is not enough"
            ],
            [
              "Updates",
              "Check devices and apps are set to update automatically",
              "Known holes are closed quickly"
            ],
            [
              "Saved links",
              "Bookmark the real addresses of the most important sites",
              "The allow-list from the worked example, in practice"
            ]
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "Permission and privacy",
          "left": [
            "Students never handle anyone else's passwords; the account owner types them. The task is to explain and help, not to take over.",
            "This mirrors the professional rule: security work happens with the owner's agreement."
          ],
          "rightH3": "Why it is a good first task",
          "right": [
            "It is concrete, it can be finished in one sitting, and it helps someone straight away.",
            "It also shows the student that security is about people as much as code."
          ]
        }
      ]
    }
  ],
  "ladder": {
    "eyebrow": "Progress",
    "h2": "Four levels of defensive skill",
    "lede": "Students move on when they can demonstrate a level on their own work.",
    "table": {
      "caption": "From careful user to defender",
      "head": [
        "Level",
        "What you can do"
      ],
      "rows": [
        [
          "1. Careful user",
          "Secure your own accounts and devices and explain each step"
        ],
        [
          "2. Spotter",
          "Recognise phishing, lookalike addresses and suspicious requests"
        ],
        [
          "3. Builder",
          "Write code that handles input safely and stores data properly"
        ],
        [
          "4. Defender",
          "Threat-model a small system and test your own code for weaknesses"
        ]
      ]
    },
    "left": {
      "h3": "Does a teen need to code first?",
      "ps": [
        "Not for the first course, which needs no coding. Python helps from level three onwards.",
        "Many students take Python for Teens alongside it."
      ]
    },
    "right": {
      "h3": "Is this for a teen who wants to hack?",
      "ps": [
        "It is for a teen curious about how security works. We channel that curiosity into defence and legal practice, and we are clear with students about the law.",
        "Curiosity plus permission is how the field is actually learnt."
      ]
    }
  },
  "catalogue": {
    "eyebrow": "The catalogue",
    "h2": "Courses for security-minded teens",
    "lede": "All for under-18s. The free class decides where a student starts.",
    "bands": [
      {
        "num": "I",
        "h3": "Security",
        "sub": "Ages 13 to 18",
        "courses": [
          {
            "code": "CSTA / SEC / 01",
            "slug": "cybersecurity-course-for-teens-ethical-defensive",
            "title": "Cyber Security for Teens",
            "blurb": "Online safety and white-hat defence."
          },
          {
            "code": "CSTA / SEC / 02",
            "slug": "teens-ai-tools-mastery-course",
            "title": "AI Tools Course for Teens",
            "blurb": "AI tools used safely, 13 and over."
          },
          {
            "code": "CSTA / SEC / 03",
            "slug": "git-github-version-control-course-for-teens",
            "title": "Git and GitHub for Teens",
            "blurb": "Tracking every change to your code."
          }
        ]
      },
      {
        "num": "II",
        "h3": "Code to defend",
        "sub": "Ages 13 to 18",
        "courses": [
          {
            "code": "CSTA / COD / 01",
            "slug": "python-complete-masterclass-teens",
            "title": "Python for Teens",
            "blurb": "Scripts and automation from zero."
          },
          {
            "code": "CSTA / COD / 02",
            "slug": "javascript-course-for-teens-beginners-interactive-web",
            "title": "JavaScript for Teens",
            "blurb": "Where most web weaknesses live."
          },
          {
            "code": "CSTA / COD / 03",
            "slug": "html-css-course-for-beginners-build-real-websites",
            "title": "HTML and CSS for Beginners",
            "blurb": "Your own site to protect."
          }
        ]
      },
      {
        "num": "III",
        "h3": "Thinking skills",
        "sub": "Any teen",
        "courses": [
          {
            "code": "CSTA / THK / 01",
            "slug": "problem-solving-dsa-masterclass-teens",
            "title": "Problem Solving for Teens",
            "blurb": "Logic and algorithms."
          },
          {
            "code": "CSTA / THK / 02",
            "slug": "frontend-development-masterclass-for-teens",
            "title": "Frontend Development for Teens",
            "blurb": "Building interfaces you can secure."
          },
          {
            "code": "CSTA / THK / 03",
            "slug": "hackathon-prep-for-teens-coding-ai-build-innovate-win-course",
            "title": "Hackathon Prep for Teens",
            "blurb": "Building under time pressure, 13 to 17."
          }
        ]
      }
    ]
  },
  "how": {
    "eyebrow": "How lessons run",
    "h2": "Security lessons around school",
    "lede": "Teachers are based in India and teach Australian afternoons and evenings. Times are fixed in your state's time, including across daylight saving.",
    "slots": [
      {
        "time": "After school",
        "l": "Weekday lessons in term."
      },
      {
        "time": "Early evening",
        "l": "For older students, by arrangement."
      },
      {
        "time": "Weekend",
        "l": "Longer practice sessions."
      }
    ],
    "cells": [
      {
        "h3": "Free first class",
        "p": "A suspicious message taken apart safely, and a first look at domains."
      },
      {
        "h3": "Small groups",
        "p": "Five to ten teens comparing what they spotted."
      },
      {
        "h3": "One to one",
        "p": "For a particular interest or pace."
      },
      {
        "h3": "Permission first",
        "p": "Every exercise is on the student's own work or a practice system."
      },
      {
        "h3": "Parents informed",
        "p": "Families can see the topics and rules for each term."
      },
      {
        "h3": "Age rules respected",
        "p": "No tool is used below the minimum age its own terms set."
      }
    ]
  },
  "projectsH2": "Things our students built",
  "projectsLede": "Apps our students built and published, including one on staying safe online. More in the <a class=\"ag-inline-link\" href=\"/student-labs\">student labs</a>.",
  "reviewsLede": "Published reviews from our Google profile, unchanged.",
  "fees": {
    "h2": "Fees for cyber security for teens",
    "lede": "Families outside India pay one monthly fee in US dollars, with nothing due at sign-up and no contract.",
    "free": [
      "A phishing message examined safely",
      "Advice on the right first course",
      "No card needed"
    ],
    "group": [
      "Five to ten teens per class",
      "Shared challenges and discussion",
      "A regular teacher",
      "Stop after any month"
    ],
    "one": [
      "Lessons around one teen's interests",
      "Their pace",
      "Times around school"
    ]
  },
  "faq": {
    "eyebrow": "Teens and parents ask",
    "h2": "Questions about cyber security courses for teens",
    "items": [
      {
        "q": "What does a cyber security course for teens cover?",
        "a": "Protecting accounts, recognising phishing and lookalike web addresses, how systems secure data, threat modelling, and safe, legal practice on the student's own projects."
      },
      {
        "q": "Does the course teach hacking?",
        "a": "It teaches how attacks work so they can be prevented. It does not teach attacking real systems, and all hands-on work is on systems the student owns or is permitted to test."
      },
      {
        "q": "What is a lookalike domain?",
        "a": "A web address made to resemble a real one, using a swapped or foreign-alphabet letter, an extra word or a different ending. In our test an exact allow-list caught all 72 fakes; a similarity score caught 43."
      },
      {
        "q": "Is cyber security in the Australian Curriculum?",
        "a": "Yes. AC9TDI8P13 covers multi-factor authentication and phishing in Years 7 and 8, and AC9TDI10P13 covers threat models and vulnerabilities in Years 9 and 10."
      },
      {
        "q": "Is it legal for teens to practise security skills?",
        "a": "On their own systems and in organised challenges whose rules give permission, yes. Accessing computers without authority is an offence; the Commonwealth Criminal Code covers it in Part 10.7."
      },
      {
        "q": "What is a capture the flag event?",
        "a": "A security puzzle competition where every target is built for the event and the rules grant permission to solve it. It is the legal way to practise."
      },
      {
        "q": "Does my teen need to code?",
        "a": "Not for the first course. Python helps later, when students secure their own code."
      },
      {
        "q": "What age is it for?",
        "a": "Teenagers aged 13 to 18. Adults have separate courses."
      },
      {
        "q": "Will this lead to a security career?",
        "a": "We make no career or salary promises. The course builds understanding and safe habits that help whatever a teen chooses next."
      },
      {
        "q": "How much does the cyber security course cost?",
        "a": "The opening class is free and asks for no card. Group and private monthly fees appear in the fees panel."
      }
    ]
  },
  "elsewhere": {
    "eyebrow": "Also on this site",
    "h2": "Related pages",
    "lede": "Other pages for curious teenagers.",
    "items": [
      {
        "href": "/coding-classes-in-australia",
        "label": "Coding classes in Australia",
        "p": "States, cities and every national track."
      },
      {
        "href": "/web-development-course-for-teens-australia",
        "label": "Web development for teens",
        "p": "Build the sites you will secure."
      },
      {
        "href": "/ai-classes-for-teens-australia",
        "label": "AI classes for teens",
        "p": "Use, check and build AI."
      },
      {
        "href": "/digital-technologies-years-7-to-10-coding",
        "label": "Digital Technologies, Years 7 to 10",
        "p": "Help with the school subject."
      },
      {
        "href": "/ai-tools-age-guide",
        "label": "AI tool age guide",
        "p": "Minimum ages for popular tools."
      },
      {
        "href": "/australian-coding-maths-and-ai-competitions-calendar",
        "label": "Competitions calendar",
        "p": "Organised events for students."
      }
    ]
  },
  "start": {
    "h2": "Book a free security lesson",
    "lede": "Send your details and we will call at a good time. The first class takes apart a suspicious message safely and ends with a recommendation.",
    "readFirst": "See <a class=\"ag-inline-link\" href=\"/how-we-teach\">how we teach</a>, or the <a class=\"ag-inline-link\" href=\"/courses\">course list</a>.",
    "note": "From Australia, WhatsApp is the simplest channel. The +91 number connects to our team in India; we keep no Australian premises.",
    "formNote": "Free, no card, no obligation."
  },
  "footer": {
    "cols": [
      {
        "h4": "Teens",
        "links": [
          {
            "href": "/web-development-course-for-teens-australia",
            "label": "Web development for teens"
          },
          {
            "href": "/ai-classes-for-teens-australia",
            "label": "AI classes for teens"
          },
          {
            "href": "/ai-tools-age-guide",
            "label": "AI tool age guide"
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
            "href": "/digital-technologies-years-7-to-10-coding",
            "label": "Digital Technologies 7 to 10"
          },
          {
            "href": "/software-development-course-australia",
            "label": "Software development"
          },
          {
            "href": "/australian-coding-maths-and-ai-competitions-calendar",
            "label": "Competitions calendar"
          }
        ]
      }
    ],
    "bottomRight": "Read the address from the right"
  },
  "personalityCss": "\n.ag-root.ag-csta .ag-hero h1 { letter-spacing: -0.02em; }\n.ag-root.ag-csta .ag-capsule { border-left-width: 6px; border-radius: 2px; }\n.ag-root.ag-csta .ag-section-head h2 { max-width: 31ch; }\n.ag-root.ag-csta .ag-table caption { text-align: left; font-weight: 630; }\n.ag-root.ag-csta .ag-band-head h3 { letter-spacing: -0.011em; }\n.ag-root.ag-csta .ag-slots { gap: 1.05rem; }\n",
  "dossier": {
    "curriculumAuthority": "Australia, ages 13 to 18. ACARA v9 Digital Technologies 7-10: AC9TDI8P13 \"explain how multi-factor authentication protects an account when the password is compromised and identify phishing and other cyber security threats\", elaboration \"using an email address from an unofficial domain when pretending to be an online retailer\"; AC9TDI10P13 \"develop cyber security threat models, and explore a software, user or software supply chain vulnerability\", elaboration \"bypassing a known vulnerability in their own software\". Criminal Code Act 1995 No. 12, 1995, compilation C2026C00243, Part 10.7 Computer offences, 476.2, 478.1 (headings). ABS ANZSCO 262 definition including \"security policies and procedures\".",
    "localProject": "Defensive lookalike-domain checks. 10 real domains (my.gov.au, ato.gov.au, servicesaustralia.gov.au, abs.gov.au, data.gov.au, legislation.gov.au, cyber.gov.au, esafety.gov.au, scamwatch.gov.au, australia.gov.au); 72 variants (homoglyph 29, ascii swap 13, extra word 10, wrong ending 10, subdomain trick 10). Exact allow-list 72/72; difflib ratio >= 0.85 flags 43, misses subdomain 10, wrong ending 10, extra word 8, ascii swap 1 (wrong endings name.gov-au.example, subdomain tricks domain.secure-check.example, reserved TLD); IDNA xn-- 29/29 homoglyphs, e.g. Cyrillic a in ato.gov.au -> xn--to-6kc.gov.au. Baseline note: the plain allow-list beats the similarity score. Nothing registered or visited. Lesson family: defensive lookalike-domain checks.",
    "requiredMentions": [
      "AC9TDI8P13",
      "AC9TDI10P13",
      "an email address from an unofficial domain",
      "Part 10.7",
      "Unauthorised access to, or modification of, restricted data",
      "72 lookalikes",
      "xn--to-6kc.gov.au",
      "ato.gov.au.secure-check.example"
    ],
    "sources": [
      {
        "claim": "ACARA, Australian Curriculum v9, Digital Technologies 7-10: AC9TDI8P13, AC9TDI10P13 and elaborations.",
        "url": "https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx"
      },
      {
        "claim": "Federal Register of Legislation, Criminal Code Act 1995, compilation C2026C00243: Part 10.7 Computer offences, sections 476.2 and 478.1 (headings).",
        "url": "https://www.legislation.gov.au/C2004A04868/latest/text"
      },
      {
        "claim": "ABS, ANZSCO 2022, minor group 262 Database and Systems Administrators, and ICT Security Specialists.",
        "url": "https://www.abs.gov.au/statistics/classifications/anzsco-australian-and-new-zealand-standard-classification-occupations/2022/browse-classification/2/26/262"
      }
    ],
    "rejectedClaims": [
      "Australian Cyber Security Centre passphrase and phishing guidance: cyber.gov.au timed out; not quoted.",
      "eSafety Commissioner material: esafety.gov.au timed out; not quoted.",
      "Scamwatch phishing statistics: scamwatch.gov.au returned 403, not circumvented.",
      "Named CTF platforms or events: not named, because each sets its own age rules and dates that we did not read raw.",
      "Any offensive tool, technique or target: excluded by design.",
      "Legal advice: not given; the Criminal Code headings are quoted only to show that unauthorised access is an offence."
    ]
  }
};
