'use strict';
// Web development course for teens, Australia (ag- age and track door; AU cluster Phase 9, AU-P9B).
// Intent: Australian teenagers (13 to 18) and parents looking for a web development course: building real websites with
// HTML, CSS and JavaScript, designing for users, and publishing them. Distinct from javascript-classes-online-australia
// (the language, all ages) and from app development (P9A, React Native). Linked to both.
// Sources, read raw on 14 October 2026:
//  - ACARA, Australian Curriculum v9, Digital Technologies 7-10: AC9TDI10K02 "represent documents online as content (text),
//    structure (markup) and presentation (styling) and explain why such representations are important" and its HTML/CSS
//    elaboration; AC9TDI8P07 "design the user experience of a digital system" (wireframes elaboration); AC9TDI8P11
//    elaboration on heading hierarchy and captions.
//  - ABS, ANZSCO 2022, 2612 Multimedia Specialists and Web Developers (occupation 261212 Web Developer).
//  - MDN Web Docs, image file type and format guide: JPEG "particularly useful for photographs"; lossy compression on
//    diagrams "can produce unsatisfactory results"; "WebP offers much better compression than PNG or JPEG".
// Lesson family: choosing an image format by content. Our measurement (Pillow 11.3.0): a 1200 by 1200 photo (our meetup
// photo) PNG 1,262,932 bytes, JPEG q80 136,738, WebP q80 68,624, WebP lossless 941,332; a 1200 by 800 flat wireframe we
// drew: PNG 4,219, JPEG q80 40,839, WebP q80 3,568, WebP lossless 264. JPEG, the usual default, is the worst choice for the
// wireframe.

module.exports = {
  "cluster": "ag",
  "clusterName": "Australia",
  "hub": {
    "group": "guide",
    "tag": "WEB DEVELOPMENT, TEENS",
    "blurb": "Web development for Australian teens: real sites in HTML, CSS and JavaScript, designed for users and published online."
  },
  "slug": "web-development-course-for-teens-australia",
  "code": "wdtn",
  "accent": "#106A10",
  "accentRationale": "Web development for teens, Australia: a leaf green (hue 120.0), 5.51:1 on #EDE7DA; 20.1 RGB from the nearest national AU accent, 10.4 from any other Australian accent and 8.1 from every other site colour",
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
  "routeLabel": "Web development course for teens, Australia",
  "title": "Web Development Course for Teens in Australia | Real Sites",
  "description": "Web development for Australian teens aged 13 to 18: build and publish real websites in HTML, CSS and JavaScript, designed for users. Live online, first class free.",
  "ogDescription": "The same wireframe saved as a JPEG was ten times the size of the PNG. What Australian teens learn when they build real websites, byte by byte.",
  "twitterDescription": "Web development for Australian teens: HTML, CSS, JavaScript and real published sites. Live online, first class free.",
  "pageName": "Web Development Course for Teens in Australia",
  "webPageDescription": "A guide to web development for Australian teenagers: structure, styling, user experience, images and publishing, with a measured image-format example.",
  "courseDescription": "Live online web development lessons for Australian teens aged 13 to 18: HTML, CSS, JavaScript, design for users and publishing real sites.",
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
  "crumbLabel": "Web development for teens",
  "navLinks": [
    {
      "href": "#layers",
      "label": "Three layers"
    },
    {
      "href": "#images",
      "label": "A worked example"
    },
    {
      "href": "#design",
      "label": "Design for users"
    },
    {
      "href": "#publish",
      "label": "Publishing"
    },
    {
      "href": "#fees",
      "label": "Fees"
    }
  ],
  "eyebrow": "Australia &middot; Ages 13 to 18 &middot; Build and publish",
  "h1": "Web development course for teens",
  "lede": "Most teenagers have used thousands of websites and built none. Our web development course for teens closes that gap: students write the structure in HTML, the look in CSS and the behaviour in JavaScript, then publish what they make so friends and family can open it on a phone. Along the way they learn the decisions professionals make without thinking, such as which image format keeps a page fast. This page explains the course, measures one of those decisions with real files, and connects it to the Australian Curriculum that teens meet at school.",
  "secondaryCta": {
    "href": "#images",
    "label": "See the worked example"
  },
  "wa": "Hello Modern Age Coders, I am a teenager in Australia (or a parent of one) interested in a web development course. Could we book a free first class?",
  "heroNote": "Live teaching since 2020 &middot; 10,000+ students &middot; Every student publishes a real site",
  "spec": [
    [
      "For",
      "Teens aged 13 to 18"
    ],
    [
      "Structure",
      "HTML"
    ],
    [
      "Style",
      "CSS, phone first"
    ],
    [
      "Behaviour",
      "JavaScript"
    ],
    [
      "Design",
      "Wireframes and user stories"
    ],
    [
      "Finish",
      "A published site"
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
  "capsule": "A web development course for teens teaches young people aged 13 to 18 to build websites in HTML, CSS and JavaScript, to design them around real users, and to publish them online. The Australian Curriculum already asks Year 9 and 10 students to separate a page's content, structure and presentation. Modern Age Coders teaches web development live online in small groups or one to one, and the first class is free.",
  "picks": {
    "eyebrow": "Start here",
    "h2": "Three web courses for teenagers",
    "lede": "Chosen by where a teen is starting from. Each card opens the syllabus.",
    "items": [
      {
        "course": "html-css-course-for-beginners-build-real-websites",
        "code": "WDTN / 01",
        "title": "HTML and CSS for Beginners",
        "note": "From the first tag to a responsive site that works on a phone. No experience needed."
      },
      {
        "course": "javascript-course-for-teens-beginners-interactive-web",
        "code": "WDTN / 02",
        "title": "JavaScript for Teens",
        "note": "Ages 13 to 18. Buttons, forms and browser games that respond to the user."
      },
      {
        "course": "frontend-development-masterclass-for-teens",
        "code": "WDTN / 03",
        "title": "Frontend Development for Teens",
        "note": "From careful CSS to React interfaces, ages 13 to 18."
      }
    ]
  },
  "sections": [
    {
      "id": "layers",
      "tint": "tint",
      "eyebrow": "Three layers",
      "h2": "Structure, style and behaviour, kept apart",
      "lede": "The first idea in web development is that a page is three separate things. Teens who grasp it early write sites that are easier to change.",
      "body": [
        {
          "kind": "table",
          "caption": "The three layers of a web page",
          "head": [
            "Layer",
            "Language",
            "What it controls",
            "A first project"
          ],
          "rows": [
            [
              "Structure",
              "HTML",
              "Headings, paragraphs, lists, links, images and forms",
              "A page about a hobby with a proper heading order"
            ],
            [
              "Presentation",
              "CSS",
              "Colour, type, spacing and layout on every screen size",
              "The same page restyled twice without touching the HTML"
            ],
            [
              "Behaviour",
              "JavaScript",
              "What happens when someone clicks, types or scrolls",
              "A quiz that scores itself"
            ]
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "The curriculum asks for this",
          "left": [
            "Australian Curriculum content description AC9TDI10K02 asks students to \"represent documents online as content (text), structure (markup) and presentation (styling) and explain why such representations are important\".",
            "An elaboration names the tools directly: HTML for content and structure, CSS for styling."
          ],
          "rightH3": "Why keeping them apart pays off",
          "right": [
            "A site whose colours live in one stylesheet can be redesigned in an afternoon. A site with styling scattered through its HTML takes a week.",
            "Teens feel this the first time a friend asks for a dark mode."
          ]
        }
      ]
    },
    {
      "id": "images",
      "tint": "deep",
      "eyebrow": "A worked example",
      "h2": "The same picture, four file sizes",
      "lede": "Images are usually the heaviest part of a page. Choosing the format by the kind of picture, not by habit, is a decision students measure for themselves.",
      "body": [
        {
          "kind": "p",
          "html": "We saved two images at the same size in four formats and counted the bytes. The first is a photograph from one of our own events, scaled to 1,200 by 1,200 pixels. The second is a flat wireframe we drew, 1,200 by 800 pixels, made only of a few solid colours and lines, the kind of picture a student sketches when planning a site."
        },
        {
          "kind": "table",
          "caption": "Bytes per file (our measurement, Pillow 11.3.0, 14 October 2026)",
          "head": [
            "Format",
            "Photo",
            "Flat wireframe"
          ],
          "rows": [
            [
              "PNG",
              "1,262,932",
              "4,219"
            ],
            [
              "JPEG, quality 80",
              "136,738",
              "40,839"
            ],
            [
              "WebP, quality 80",
              "68,624",
              "3,568"
            ],
            [
              "WebP lossless",
              "941,332",
              "264"
            ]
          ]
        },
        {
          "kind": "three",
          "mt": true,
          "cells": [
            {
              "h3": "For the photo",
              "p": "Lossy WebP is about half the JPEG and about one eighteenth of the PNG. PNG keeps every pixel exactly, which a photo does not need."
            },
            {
              "h3": "For the wireframe",
              "p": "JPEG, the format many beginners reach for, is the worst choice: almost ten times the PNG. Lossless WebP shrinks it to 264 bytes."
            },
            {
              "h3": "The simple rule wins",
              "p": "A plain old PNG beats JPEG on flat graphics by a wide margin. Students who choose by picture type, not by the newest format, get most of the saving."
            }
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "What the documentation says",
          "left": [
            "MDN Web Docs describes JPEG as \"particularly useful for photographs\" and warns that lossy compression on \"content requiring sharpness, like diagrams or charts, can produce unsatisfactory results\".",
            "It also notes that \"WebP offers much better compression than PNG or JPEG\", which our photo row bears out."
          ],
          "rightH3": "What students do with it",
          "right": [
            "They write a short rule for their own site: photos as lossy WebP with a JPEG fallback if needed, diagrams and logos as lossless, icons as SVG.",
            "Then they measure the page before and after, so the rule is backed by their own numbers."
          ]
        },
        {
          "kind": "source",
          "html": "Source, read 14 October 2026: <a class=\"ag-inline-link\" href=\"https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types\" rel=\"noopener\" target=\"_blank\">MDN Web Docs, image file type and format guide</a>. The images and byte counts are our own."
        }
      ]
    },
    {
      "id": "design",
      "tint": "tint",
      "eyebrow": "Design for users",
      "h2": "Planning a site before writing a tag",
      "lede": "Good websites start on paper. The Years 7 and 8 curriculum describes the same habit.",
      "body": [
        {
          "kind": "table",
          "caption": "Design habits from the Australian Curriculum, Years 7 and 8",
          "head": [
            "Code",
            "What it asks for",
            "In our course"
          ],
          "rows": [
            [
              "AC9TDI8P07",
              "\"design the user experience of a digital system\", with an elaboration on sketching pages with wireframes and storyboards",
              "Every site starts as a wireframe like the one measured above"
            ],
            [
              "AC9TDI8P11",
              "An elaboration on organising content \"within a heading hierarchy\" and writing captions to describe images",
              "Headings in order and text alternatives for every image"
            ]
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "Users first",
          "left": [
            "Before building, students write two or three user stories: who visits, what they want, and how they will know they found it.",
            "A site for a netball club needs the fixture list one tap from the home page, whatever else it has."
          ],
          "rightH3": "Readable by everyone",
          "right": [
            "Headings in order help screen reader users jump around a page, and descriptions of images tell them what is there.",
            "These habits cost nothing at the start and are painful to add later."
          ]
        }
      ]
    },
    {
      "id": "publish",
      "tint": "",
      "eyebrow": "Publishing",
      "h2": "From a file on a laptop to a link",
      "lede": "A site nobody can open is a draft. Students finish each project by putting it online with a free static host chosen with their parents.",
      "body": [
        {
          "kind": "table",
          "caption": "Projects in the web development course for teens",
          "head": [
            "Project",
            "New skill",
            "Finished when"
          ],
          "rows": [
            [
              "Personal interest page",
              "Semantic HTML and heading order",
              "It reads sensibly with styles switched off"
            ],
            [
              "Club or school event site",
              "Responsive CSS and a navigation bar",
              "It works on a phone held upright"
            ],
            [
              "Photo gallery",
              "Image formats, sizes and lazy loading",
              "The page weight is measured and halved"
            ],
            [
              "Quiz or browser game",
              "JavaScript events and state",
              "A friend can play it without help"
            ],
            [
              "Portfolio",
              "Bringing projects together, publishing",
              "A link works on someone else's phone"
            ]
          ]
        },
        {
          "kind": "p",
          "mt": true,
          "html": "Teens who want to go deeper into the language itself can continue with <a class=\"ag-inline-link\" href=\"/javascript-classes-online-australia\">JavaScript classes online</a>. Those curious about the work behind the page can look at <a class=\"ag-inline-link\" href=\"/software-development-course-australia\">the software development course</a>."
        }
      ]
    },
    {
      "id": "everyone",
      "tint": "tint",
      "eyebrow": "Sites for everyone",
      "h2": "Making a site work for every visitor",
      "lede": "A good site works with a keyboard, a screen reader, a small phone and a slow connection. Teens check their own sites against a short list.",
      "body": [
        {
          "kind": "table",
          "caption": "The checks teens run on every site they publish",
          "head": [
            "Check",
            "How they test it",
            "What it protects"
          ],
          "rows": [
            [
              "Headings in order",
              "Read the outline of the page on its own",
              "Readers who jump between headings"
            ],
            [
              "Text for every image",
              "Turn images off and read what remains",
              "Readers who cannot see the picture"
            ],
            [
              "Keyboard only",
              "Use the site with the Tab and Enter keys",
              "Visitors who do not use a mouse"
            ],
            [
              "Small screens",
              "Open it on a phone held upright",
              "Most visitors, most of the time"
            ],
            [
              "Page weight",
              "Measure the total download size",
              "Visitors on slow or capped connections"
            ]
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "Why teens care",
          "left": [
            "When a grandparent, a younger cousin or a friend with a screen reader tries their site, students see straight away who it works for and who it leaves out.",
            "Fixing it is usually a few lines of HTML, which makes the lesson stick."
          ],
          "rightH3": "Small habits, early",
          "right": [
            "Each check takes minutes when built in from the start and hours when added at the end.",
            "That is the same lesson the image formats taught: decide well early and the site stays light and usable."
          ]
        }
      ]
    },
    {
      "id": "parents",
      "tint": "",
      "eyebrow": "For parents",
      "h2": "What parents can expect from a teen web course",
      "lede": "A short guide for families deciding whether this is the right course.",
      "body": [
        {
          "kind": "table",
          "caption": "Parent questions, answered briefly",
          "head": [
            "Question",
            "Answer"
          ],
          "rows": [
            [
              "Will my teen need accounts online?",
              "Only to publish, and only on a service a parent agrees to and whose age rules allow it"
            ],
            [
              "Is personal information published?",
              "No. Sites are about interests and projects, not addresses, schools or photos of the student"
            ],
            [
              "How much time outside lessons?",
              "An hour or two of practice a week keeps progress steady"
            ],
            [
              "What will we see at the end of a term?",
              "At least one working site, open on a phone, that your teen can explain line by line"
            ]
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "Screen time that builds something",
          "left": [
            "Many parents worry about time on screens. Building a site is a different kind of screen time: planned, finished and shown to others.",
            "A finished site is something a teen can open on a phone and show the family."
          ],
          "rightH3": "Safety while publishing",
          "right": [
            "We teach teens to keep personal details off public pages and to check what a page reveals before sharing the link.",
            "Our <a class=\"ag-inline-link\" href=\"/cyber-security-course-for-teens-australia\">cyber security course for teens</a> goes further for those who are interested."
          ]
        }
      ]
    }
  ],
  "ladder": {
    "eyebrow": "Progress",
    "h2": "Four levels of web skill for teenagers",
    "lede": "Teens move up when their own site shows the skill, not after a set number of weeks.",
    "table": {
      "caption": "From page to published project",
      "head": [
        "Level",
        "What you can do"
      ],
      "rows": [
        [
          "1. Page builder",
          "Write a correct HTML page with headings, links and images"
        ],
        [
          "2. Stylist",
          "Lay out a page with CSS that works on phone and laptop"
        ],
        [
          "3. Developer",
          "Add JavaScript behaviour and keep a page fast and accessible"
        ],
        [
          "4. Publisher",
          "Plan, build, measure and publish a multi-page site"
        ]
      ]
    },
    "left": {
      "h3": "Is it useful for school?",
      "ps": [
        "Yes, as skill and understanding. The curriculum covers HTML, CSS and user experience, and students who build real sites understand those topics well.",
        "We never build assessed school projects for students."
      ]
    },
    "right": {
      "h3": "What if a teen has used website builders?",
      "ps": [
        "Good. Drag-and-drop builders show what is possible; this course shows how it works underneath.",
        "Many students rebuild their old builder site by hand and are surprised how much lighter it becomes."
      ]
    }
  },
  "catalogue": {
    "eyebrow": "The catalogue",
    "h2": "Web courses for teens",
    "lede": "Grouped by stage. The free class decides where a student begins.",
    "bands": [
      {
        "num": "I",
        "h3": "First sites",
        "sub": "No experience",
        "courses": [
          {
            "code": "WDTN / FST / 01",
            "slug": "html-css-course-for-beginners-build-real-websites",
            "title": "HTML and CSS for Beginners",
            "blurb": "Responsive sites from zero."
          },
          {
            "code": "WDTN / FST / 02",
            "slug": "javascript-course-for-teens-beginners-interactive-web",
            "title": "JavaScript for Teens",
            "blurb": "Interactive pages and games."
          },
          {
            "code": "WDTN / FST / 03",
            "slug": "vibe-coding-for-teens-python-web-ai-projects-course",
            "title": "Vibe Coding for Teens",
            "blurb": "Web projects with AI help, 13 to 17."
          }
        ]
      },
      {
        "num": "II",
        "h3": "Interfaces",
        "sub": "After the basics",
        "courses": [
          {
            "code": "WDTN / UI / 01",
            "slug": "frontend-development-masterclass-for-teens",
            "title": "Frontend Development for Teens",
            "blurb": "CSS craft to React UI."
          },
          {
            "code": "WDTN / UI / 02",
            "slug": "react-for-teens-complete-masterclass",
            "title": "React for Teens",
            "blurb": "Components and state."
          },
          {
            "code": "WDTN / UI / 03",
            "slug": "git-github-version-control-course-for-teens",
            "title": "Git and GitHub for Teens",
            "blurb": "Saving and sharing every version."
          }
        ]
      },
      {
        "num": "III",
        "h3": "Full sites",
        "sub": "For keen teens",
        "courses": [
          {
            "code": "WDTN / FUL / 01",
            "slug": "backend-coding-masterclass-for-teens",
            "title": "Backend Development for Teens",
            "blurb": "Node, APIs and databases."
          },
          {
            "code": "WDTN / FUL / 02",
            "slug": "full-stack-web-development-teens-masterclass",
            "title": "Full Stack Web Development for Teens",
            "blurb": "React and Node together."
          },
          {
            "code": "WDTN / FUL / 03",
            "slug": "cybersecurity-course-for-teens-ethical-defensive",
            "title": "Cyber Security for Teens",
            "blurb": "Keeping a site and its users safe."
          }
        ]
      }
    ]
  },
  "how": {
    "eyebrow": "How lessons run",
    "h2": "Web lessons around the school week",
    "lede": "Our teachers are in India, where the working day overlaps Australian afternoons. Times are set in your state's time and move with daylight saving where it applies.",
    "slots": [
      {
        "time": "After school",
        "l": "Weekday lessons during term."
      },
      {
        "time": "Early evening",
        "l": "For senior students, by arrangement."
      },
      {
        "time": "Weekend",
        "l": "Longer build-and-publish sessions."
      }
    ],
    "cells": [
      {
        "h3": "Free first class",
        "p": "A first page built and opened on the student's own phone."
      },
      {
        "h3": "Small groups",
        "p": "Five to ten teens showing each other their sites."
      },
      {
        "h3": "One to one",
        "p": "For a particular site, pace or interest."
      },
      {
        "h3": "Measured, not guessed",
        "p": "Students check page weight and heading order themselves."
      },
      {
        "h3": "Parents involved",
        "p": "Publishing and accounts are agreed with a parent first."
      },
      {
        "h3": "Code by the student",
        "p": "Teachers guide; every tag is typed by the learner."
      }
    ]
  },
  "projectsH2": "Sites and apps our students made",
  "projectsLede": "Websites and apps our students built and published. The <a class=\"ag-inline-link\" href=\"/student-labs\">student labs</a> show more.",
  "reviewsLede": "Published reviews from our Google profile, unedited.",
  "fees": {
    "h2": "Fees for web development for teens",
    "lede": "Families outside India pay one monthly fee in US dollars, with nothing owed at sign-up and no lock-in.",
    "free": [
      "A first web page made in the lesson",
      "Advice on the right starting course",
      "No card needed"
    ],
    "group": [
      "Five to ten teens per group",
      "Show-and-tell of each site",
      "A regular teacher",
      "Stop after any month"
    ],
    "one": [
      "Lessons around one teen's own site",
      "Their pace and interests",
      "Times around school"
    ]
  },
  "faq": {
    "eyebrow": "Teens and parents ask",
    "h2": "Questions about web development courses for teens",
    "items": [
      {
        "q": "What does a web development course for teens cover?",
        "a": "HTML for structure, CSS for style, JavaScript for behaviour, planning sites around users, keeping pages fast and accessible, and publishing finished sites online."
      },
      {
        "q": "Which image format should a website use?",
        "a": "It depends on the picture. In our test a photo was smallest as lossy WebP, while a flat wireframe was nearly ten times larger as JPEG than as PNG and smallest as lossless WebP."
      },
      {
        "q": "Is web development in the Australian Curriculum?",
        "a": "Yes. AC9TDI10K02 asks Years 9 and 10 students to separate a page's content, structure and presentation, and its elaboration names HTML and CSS."
      },
      {
        "q": "Does my teen need coding experience?",
        "a": "No. The first course starts from a blank file. Teens who already code can begin with JavaScript or React."
      },
      {
        "q": "Will my teen publish a real website?",
        "a": "Yes, every student finishes with sites online, published through a free static host that a parent agrees to."
      },
      {
        "q": "What age is this course for?",
        "a": "Teenagers aged 13 to 18. Children aged 9 to 12 can start with our web development course for kids."
      },
      {
        "q": "How is this different from JavaScript classes?",
        "a": "This course is about building whole websites, design and publishing. JavaScript classes go deeper into the language itself and are open to adults too."
      },
      {
        "q": "Do students need special software?",
        "a": "A laptop with a modern browser and a free code editor. Nothing has to be bought."
      },
      {
        "q": "Does this help with app development?",
        "a": "It is a good base. App development builds on the same JavaScript, and our app development course for teens uses React Native."
      },
      {
        "q": "What do lessons cost?",
        "a": "The trial lesson is free, with no payment details asked for. The fees panel above lists the monthly group and private prices."
      }
    ]
  },
  "elsewhere": {
    "eyebrow": "Also on this site",
    "h2": "Related pages",
    "lede": "Pages that sit beside this one.",
    "items": [
      {
        "href": "/coding-classes-in-australia",
        "label": "Coding classes in Australia",
        "p": "Every Australian page, from states to exams."
      },
      {
        "href": "/javascript-classes-online-australia",
        "label": "JavaScript classes online",
        "p": "The language in depth, any age."
      },
      {
        "href": "/software-development-course-australia",
        "label": "Software development course",
        "p": "Testing, Git and debugging."
      },
      {
        "href": "/cyber-security-course-for-teens-australia",
        "label": "Cyber security for teens",
        "p": "Defending sites and accounts."
      },
      {
        "href": "/ai-classes-for-teens-australia",
        "label": "AI classes for teens",
        "p": "Using and building AI."
      },
      {
        "href": "/digital-technologies-years-7-to-10-coding",
        "label": "Digital Technologies, Years 7 to 10",
        "p": "Help with the school subject."
      }
    ]
  },
  "start": {
    "h2": "Try a first web lesson free",
    "lede": "Send your details and we will phone at a convenient time. The first class ends with a page the student built, open on their phone, and a clear recommendation.",
    "readFirst": "Read more about <a class=\"ag-inline-link\" href=\"/how-we-teach\">how we teach</a> or browse the <a class=\"ag-inline-link\" href=\"/courses\">course list</a>.",
    "note": "Parents in Australia usually find WhatsApp the easiest way to reach us. The +91 number is our teaching team in India, and there is no Australian branch.",
    "formNote": "Free, no card, no obligation."
  },
  "footer": {
    "cols": [
      {
        "h4": "Web and software",
        "links": [
          {
            "href": "/javascript-classes-online-australia",
            "label": "JavaScript classes"
          },
          {
            "href": "/software-development-course-australia",
            "label": "Software development"
          },
          {
            "href": "/cyber-security-course-for-teens-australia",
            "label": "Cyber security for teens"
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
            "href": "/ai-classes-for-teens-australia",
            "label": "AI classes for teens"
          },
          {
            "href": "/digital-technologies-years-7-to-10-coding",
            "label": "Digital Technologies 7 to 10"
          },
          {
            "href": "/australian-student-hackathons",
            "label": "Student hackathons"
          }
        ]
      }
    ],
    "bottomRight": "Choose the format by the picture"
  },
  "personalityCss": "\n.ag-root.ag-wdtn .ag-hero h1 { letter-spacing: -0.017em; }\n.ag-root.ag-wdtn .ag-capsule { border-left-width: 4px; border-radius: 6px; }\n.ag-root.ag-wdtn .ag-section-head h2 { max-width: 32ch; }\n.ag-root.ag-wdtn .ag-table caption { text-align: left; font-weight: 600; }\n.ag-root.ag-wdtn .ag-band-head h3 { letter-spacing: -0.008em; }\n.ag-root.ag-wdtn .ag-slots { gap: 1.1rem; }\n",
  "dossier": {
    "curriculumAuthority": "Australia, ages 13 to 18. ACARA Australian Curriculum v9 Digital Technologies 7-10: AC9TDI10K02 \"represent documents online as content (text), structure (markup) and presentation (styling) and explain why such representations are important\" with elaboration \"writing webpages using HyperText Markup Language (HTML) for the content and structure and Cascading Style Sheets (CSS) for styling the page\"; AC9TDI8P07 \"design the user experience of a digital system\" with the wireframes elaboration; AC9TDI8P11 elaboration \"organising content in paragraphs and within a heading hierarchy, writing captions to describe images\". ABS ANZSCO 2612 Multimedia Specialists and Web Developers. MDN image format guide quotes.",
    "localProject": "Image format by content. Pillow 11.3.0: photo (meetup1.jpg resized to 1200x1200) PNG optimize 1,262,932; JPEG q80 136,738; WebP q80 68,624; WebP lossless 941,332. Flat wireframe 1200x800 drawn by us: PNG 4,219; JPEG q80 40,839; WebP q80 3,568; WebP lossless 264. Baseline note: PNG beats JPEG about tenfold on the wireframe. Lesson family: choosing an image format by content.",
    "requiredMentions": [
      "AC9TDI10K02",
      "AC9TDI8P07",
      "represent documents online as content (text), structure (markup) and presentation (styling)",
      "within a heading hierarchy",
      "particularly useful for photographs",
      "WebP offers much better compression than PNG or JPEG",
      "1,262,932",
      "40,839"
    ],
    "sources": [
      {
        "claim": "ACARA, Australian Curriculum v9, Digital Technologies 7-10: AC9TDI10K02, AC9TDI8P07, AC9TDI8P11 and elaborations.",
        "url": "https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx"
      },
      {
        "claim": "MDN Web Docs, image file type and format guide: JPEG for photographs; lossy compression and diagrams; WebP compression.",
        "url": "https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types"
      },
      {
        "claim": "ABS, ANZSCO 2022, 2612 Multimedia Specialists and Web Developers (261212 Web Developer).",
        "url": "https://www.abs.gov.au/statistics/classifications/anzsco-australian-and-new-zealand-standard-classification-occupations/2022/browse-classification/2/26/261/2612"
      }
    ],
    "rejectedClaims": [
      "Australian Government accessibility policy pages (Digital Transformation Agency, Style Manual): requests timed out; not quoted.",
      "WCAG touch-target sizes: used on the P9A app development page, not repeated here.",
      "Any promise of jobs, pay or school grades: not made.",
      "Named hosting providers: not named; the host is chosen with a parent."
    ]
  }
};
