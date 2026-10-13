'use strict';
// JavaScript classes online, Australia (ag- language door; AU cluster Phase 9, AU-P9B).
// Intent: Australians of any age (teens and adults) searching for online JavaScript classes: the language itself, in the
// browser and in Node, including asynchronous code. Distinct from web-development-course-for-teens-australia (whole sites
// for teens) and from P9A's app development page (React Native). Linked to both.
// Sources, read raw on 14 October 2026:
//  - ACARA, Australian Curriculum v9, Digital Technologies 7-10, AC9TDI8P09 elaboration "in a general-purpose programming
//    language, such as Python, JavaScript or C#" (also the AC9TDI10P09 elaboration for object-oriented languages).
//  - ABS, ANZSCO 2022, 261212 Web Developer: "Plans, produces and maintains websites using web programming languages ...".
//  - MDN Web Docs: Promise.all() "takes an iterable of promises as input and returns a single Promise"; it "rejects when
//    any of the input's promises rejects"; forEach() "does not wait for promises".
//  - ABS Data API, ABS_ANNUAL_ERP_LGA2025 (CC BY 4.0), used as the remote data.
// Lesson family: sequential await vs Promise.all, and forEach(async) not waiting. Our Node 22.16.0 run, eight ABS council
// population requests: round 1 sequential 16,843 ms, Promise.all 2,190 ms; round 2 9,512 ms vs 1,940 ms; same results both
// ways; forEach(async ...) returned after 8.5 ms with 0 of 8 requests finished.

module.exports = {
  "cluster": "ag",
  "clusterName": "Australia",
  "hub": {
    "group": "guide",
    "tag": "JAVASCRIPT",
    "blurb": "JavaScript classes online for Australians of any age: the language in the browser and in Node, including the asynchronous parts."
  },
  "slug": "javascript-classes-online-australia",
  "code": "jsau",
  "accent": "#244E0C",
  "accentRationale": "JavaScript classes online, Australia: a dark olive green (hue 98.2), 7.85:1 on #EDE7DA; 20.1 RGB from the nearest national AU accent, 10.8 from any other Australian accent and 7.5 from every other site colour",
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
  "routeLabel": "JavaScript classes online, Australia",
  "title": "JavaScript Classes Online in Australia | Browser and Node",
  "description": "Live online JavaScript classes for Australians of any age: the language, the browser, Node and async code, in small groups or one to one. First class free.",
  "ogDescription": "Eight data requests took 16.8 seconds one after another and 2.2 seconds together. What Australian learners discover about async JavaScript in our classes.",
  "twitterDescription": "JavaScript classes online for Australians: the language, the browser, Node and async code. First class free.",
  "pageName": "JavaScript Classes Online in Australia",
  "webPageDescription": "A guide to learning JavaScript online in Australia, from first scripts to asynchronous code, with a measured example using ABS data.",
  "courseDescription": "Live online JavaScript lessons for Australian teens and adults: core language, the browser, Node.js and asynchronous programming with real data.",
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
  "crumbLabel": "JavaScript classes online",
  "navLinks": [
    {
      "href": "#language",
      "label": "The language"
    },
    {
      "href": "#async",
      "label": "A worked example"
    },
    {
      "href": "#where",
      "label": "Where it runs"
    },
    {
      "href": "#route",
      "label": "Route"
    },
    {
      "href": "#fees",
      "label": "Fees"
    }
  ],
  "eyebrow": "Australia &middot; Ages 13 to adult &middot; Browser, Node and async",
  "h1": "JavaScript classes online",
  "lede": "JavaScript runs in every web browser and, through Node, on servers and laptops too. That makes it one of the most useful languages to know, and one of the easiest to get subtly wrong, because so much of it is asynchronous: code that asks for something and carries on before the answer arrives. Our JavaScript classes teach the language properly, live online, to Australian teens and adults, from the first variable to promises and async functions. This page sets out what is covered, measures one asynchronous mistake with real requests to the Australian Bureau of Statistics, and shows where JavaScript sits in the Australian Curriculum.",
  "secondaryCta": {
    "href": "#async",
    "label": "See the worked example"
  },
  "wa": "Hello Modern Age Coders, I am in Australia and interested in online JavaScript classes. Could we book a free first class?",
  "heroNote": "Live teaching since 2020 &middot; 10,000+ students &middot; The language first, then the frameworks",
  "spec": [
    [
      "For",
      "Teens 13+ and adults"
    ],
    [
      "Core",
      "Values, functions, objects, arrays"
    ],
    [
      "Browser",
      "Events and the page"
    ],
    [
      "Node",
      "Scripts and servers"
    ],
    [
      "Async",
      "Promises and await"
    ],
    [
      "Format",
      "Live online lessons"
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
  "capsule": "JavaScript classes online teach the JavaScript language for use in web browsers and on servers through Node.js: values, functions, objects, events and asynchronous code with promises and async functions. The Australian Curriculum names JavaScript as one example of a general-purpose language. Modern Age Coders teaches JavaScript live online to Australian teens and adults, in small groups or one to one, and the first class is free.",
  "picks": {
    "eyebrow": "Start here",
    "h2": "Three JavaScript courses",
    "lede": "Chosen by age and direction. Each card opens the syllabus.",
    "items": [
      {
        "course": "javascript-course-for-teens-beginners-interactive-web",
        "code": "JSAU / 01",
        "title": "JavaScript for Teens",
        "note": "Ages 13 to 18 from zero: interactive pages and browser games."
      },
      {
        "course": "complete-typescript-programming-masterclass-college",
        "code": "JSAU / 02",
        "title": "TypeScript Course",
        "note": "For 18 and over: JavaScript with types, then React and Node."
      },
      {
        "course": "react-js-complete-masterclass-college",
        "code": "JSAU / 03",
        "title": "React Masterclass",
        "note": "For adults who know the basics: JavaScript to production React."
      }
    ]
  },
  "sections": [
    {
      "id": "language",
      "tint": "tint",
      "eyebrow": "The language",
      "h2": "What a learner covers, in order",
      "lede": "Frameworks change every few years. The language underneath changes slowly, so we teach it first.",
      "body": [
        {
          "kind": "table",
          "caption": "Topics in our JavaScript classes",
          "head": [
            "Topic",
            "What learners practise",
            "Typical first mistake"
          ],
          "rows": [
            [
              "Values and types",
              "Numbers, strings, booleans, null and undefined",
              "Comparing with == instead of ==="
            ],
            [
              "Functions",
              "Declarations, arrow functions, parameters, return values",
              "Forgetting to return a value"
            ],
            [
              "Objects and arrays",
              "Building, reading and copying data structures",
              "Changing an object shared by two variables"
            ],
            [
              "The browser",
              "Selecting elements, handling clicks and form input",
              "Running code before the page has loaded"
            ],
            [
              "Asynchronous code",
              "Promises, async and await, error handling",
              "Starting work and not waiting for it"
            ]
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "Named in the curriculum",
          "left": [
            "Australian Curriculum content description AC9TDI8P09 asks Years 7 and 8 students to implement and debug programs, and its elaboration describes writing programs \"in a general-purpose programming language, such as Python, JavaScript or C#\".",
            "JavaScript is one of the languages schools can choose, and the one that runs on every device students own."
          ],
          "rightH3": "Named in the occupation list",
          "right": [
            "ANZSCO 261212 Web Developer \"Plans, produces and maintains websites using web programming languages, software applications, technologies and databases\".",
            "JavaScript is the language that runs in the browser for that work. We make no promise about jobs; we describe what the work involves."
          ]
        }
      ]
    },
    {
      "id": "async",
      "tint": "deep",
      "eyebrow": "A worked example",
      "h2": "Eight requests: one at a time, or all together",
      "lede": "Most real JavaScript waits for something: a server, a file, a database. How it waits changes how long a user sits watching a spinner.",
      "body": [
        {
          "kind": "p",
          "html": "We wrote a short Node program that asks the ABS Data API for the 2025 estimated resident population of seven capital-city councils (Sydney, Melbourne, Brisbane, Adelaide, Perth, Hobart and Darwin) plus the unincorporated ACT. It ran the eight requests three ways: awaiting each one before starting the next, starting all eight and awaiting them together with <code>Promise.all</code>, and the common mistake of calling an async function inside <code>forEach</code>."
        },
        {
          "kind": "table",
          "caption": "Eight ABS requests from Node 22 (our run, 14 October 2026)",
          "head": [
            "Approach",
            "Round 1",
            "Round 2",
            "Result"
          ],
          "rows": [
            [
              "await each request in a for loop",
              "16,843 ms",
              "9,512 ms",
              "All eight values"
            ],
            [
              "Promise.all over all eight",
              "2,190 ms",
              "1,940 ms",
              "The same eight values"
            ],
            [
              "async callback inside forEach",
              "8.5 ms",
              "not repeated",
              "Returned with 0 of 8 finished"
            ]
          ]
        },
        {
          "kind": "three",
          "mt": true,
          "cells": [
            {
              "h3": "Waiting together",
              "p": "Sequential awaits pay for every round trip one after another. Promise.all lets the eight requests overlap, which was between about five and eight times faster here."
            },
            {
              "h3": "The fast wrong answer",
              "p": "The forEach version looked fastest at 8.5 ms because it did not wait at all. MDN says plainly that forEach \"does not wait for promises\"."
            },
            {
              "h3": "When one at a time is right",
              "p": "If a service limits how many requests you may send at once, or each request needs the previous answer, the slow sequential loop is the correct choice. Speed is not the only test."
            }
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "What Promise.all promises",
          "left": [
            "MDN describes it as taking \"an iterable of promises as input\" and returning \"a single Promise\". It also warns that the result \"rejects when any of the input's promises rejects\", so one failed request fails the lot.",
            "Learners write the version that handles one failure without losing the other seven."
          ],
          "rightH3": "Why we used real requests",
          "right": [
            "Timings over a real network vary, which is why we show two rounds. The ratio between the approaches is the lesson, not the exact milliseconds.",
            "Eight small requests are a light load on a public data service, and we ran only two rounds."
          ]
        },
        {
          "kind": "source",
          "html": "Sources, read 14 October 2026: MDN Web Docs on <a class=\"ag-inline-link\" href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all\" rel=\"noopener\" target=\"_blank\">Promise.all()</a> and <a class=\"ag-inline-link\" href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach\" rel=\"noopener\" target=\"_blank\">Array.prototype.forEach()</a>; data from the <a class=\"ag-inline-link\" href=\"https://data.api.abs.gov.au/rest/data/ABS,ABS_ANNUAL_ERP_LGA2025,1.0.0/ERP.3.TOT..LGA2025.A?startPeriod=2025&endPeriod=2025\" rel=\"noopener\" target=\"_blank\">ABS Data API</a> (CC BY 4.0). The program and timings are our own."
        }
      ]
    },
    {
      "id": "where",
      "tint": "tint",
      "eyebrow": "Where it runs",
      "h2": "One language, three places",
      "lede": "Learners meet JavaScript in the browser first, then in Node, then inside frameworks.",
      "body": [
        {
          "kind": "table",
          "caption": "Where JavaScript runs and what learners build there",
          "head": [
            "Place",
            "What it is for",
            "A project in our classes"
          ],
          "rows": [
            [
              "The browser",
              "Making pages respond to people",
              "A quiz or game that keeps score"
            ],
            [
              "Node.js",
              "Scripts, tools and servers on a computer",
              "A program that fetches and summarises public data"
            ],
            [
              "Frameworks such as React",
              "Large interfaces built from components",
              "A small app with several screens"
            ]
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "For teenagers",
          "left": [
            "Teens usually start in the browser, because results appear instantly. Those who want to build whole websites should also look at <a class=\"ag-inline-link\" href=\"/web-development-course-for-teens-australia\">web development for teens</a>.",
            "Years 9 and 10 students meet object-oriented programming in the curriculum too, which JavaScript classes reach later."
          ],
          "rightH3": "For adults",
          "right": [
            "Adults often start in Node, writing scripts that save time at work, before moving to the browser or React.",
            "Career changers may prefer the broader <a class=\"ag-inline-link\" href=\"/coding-for-career-changers-australia\">coding for career changers</a> route."
          ]
        }
      ]
    },
    {
      "id": "route",
      "tint": "",
      "eyebrow": "Route",
      "h2": "From first script to confident developer",
      "lede": "Each project adds one idea and keeps the earlier ones in use.",
      "body": [
        {
          "kind": "table",
          "caption": "Project sequence in our JavaScript classes",
          "head": [
            "Project",
            "New idea",
            "Done when"
          ],
          "rows": [
            [
              "Tip calculator in the browser",
              "Variables, functions, events",
              "It handles empty and silly input"
            ],
            [
              "Card game",
              "Arrays, objects and state",
              "A full round plays without errors"
            ],
            [
              "Data fetcher in Node",
              "Promises and async functions",
              "All requests finish and failures are reported"
            ],
            [
              "Faster data fetcher",
              "Promise.all and error handling",
              "It is faster and still correct when one request fails"
            ],
            [
              "Small React app",
              "Components and props",
              "Another learner can add a screen"
            ]
          ]
        },
        {
          "kind": "p",
          "mt": true,
          "html": "Learners who want to understand how larger programs are kept working can add the <a class=\"ag-inline-link\" href=\"/software-development-course-australia\">software development course</a>. Those curious about a compiled language may enjoy <a class=\"ag-inline-link\" href=\"/c-plus-plus-classes-online-australia\">C++ classes</a>."
        }
      ]
    },
    {
      "id": "debug",
      "tint": "deep",
      "eyebrow": "Debugging",
      "h2": "Finding bugs with the tools already in the browser",
      "lede": "Every modern browser includes developer tools. Learners use them from the first week instead of guessing.",
      "body": [
        {
          "kind": "table",
          "caption": "Browser developer tools learners use",
          "head": [
            "Tool",
            "What it shows",
            "Typical use"
          ],
          "rows": [
            [
              "Console",
              "Errors, warnings and anything logged",
              "Reading the first error, not the last"
            ],
            [
              "Breakpoints",
              "The program paused on a chosen line",
              "Checking values one step at a time"
            ],
            [
              "Network panel",
              "Every request, its timing and its reply",
              "Seeing whether requests run one after another or together"
            ],
            [
              "Elements panel",
              "The live page and its styles",
              "Finding why a button does not respond"
            ],
            [
              "Performance panel",
              "Where time goes while a page runs",
              "Spotting slow loops and long tasks"
            ]
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "The async example, seen live",
          "left": [
            "In the network panel, the sequential version shows eight requests as a staircase; the Promise.all version shows them stacked side by side.",
            "Seeing the shape makes the timing difference obvious without reading a single number."
          ],
          "rightH3": "Reading errors calmly",
          "right": [
            "Learners practise reading an error message from the top: what kind of error, on which line, in which file.",
            "Most beginner bugs are solved by the first line of the first error."
          ]
        }
      ]
    },
    {
      "id": "modern",
      "tint": "",
      "eyebrow": "Modern JavaScript",
      "h2": "Old habits and modern replacements",
      "lede": "JavaScript has changed a great deal. Learners meet older code online, so we show both and explain why the newer form is preferred.",
      "body": [
        {
          "kind": "table",
          "caption": "Older patterns and what we teach instead",
          "head": [
            "Older pattern",
            "Modern form",
            "Why"
          ],
          "rows": [
            [
              "var",
              "let and const",
              "Clearer scope and fewer accidental changes"
            ],
            [
              "Nested callbacks",
              "Promises with async and await",
              "Code that reads top to bottom"
            ],
            [
              "== comparisons",
              "=== comparisons",
              "No surprising type conversions"
            ],
            [
              "String joining with +",
              "Template literals",
              "Easier to read and edit"
            ],
            [
              "Manual loops for everything",
              "map, filter and for...of",
              "Intent is clear at a glance"
            ]
          ]
        },
        {
          "kind": "p",
          "mt": true,
          "html": "Knowing the older forms still matters, because tutorials, answers online and existing projects are full of them. Learners rewrite a short old-style script in modern JavaScript as an exercise."
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "Reading AI-written JavaScript",
          "left": [
            "AI assistants produce JavaScript quickly, and it often mixes old and new styles or skips the waiting step in asynchronous code. Learners who know the patterns on this page can spot both.",
            "Teens use AI tools only where the age rules of each tool allow it; adults can use them more freely."
          ],
          "rightH3": "Small programs, read closely",
          "right": [
            "Each lesson includes a short program to read before running: what will it print, and in what order? Asynchronous code makes that question interesting.",
            "Predicting first, then running, is how the event loop stops being mysterious."
          ]
        }
      ]
    }
  ],
  "ladder": {
    "eyebrow": "Progress",
    "h2": "Four levels of JavaScript skill",
    "lede": "Each level is a set of things a learner can do, confirmed by a project.",
    "table": {
      "caption": "From scripts to applications",
      "head": [
        "Level",
        "What you can do"
      ],
      "rows": [
        [
          "1. Scripter",
          "Write functions that work on numbers, strings and arrays"
        ],
        [
          "2. Page builder",
          "Make a web page respond to clicks and typing"
        ],
        [
          "3. Async coder",
          "Fetch data, wait for it correctly and handle failures"
        ],
        [
          "4. App builder",
          "Structure a larger program in components or modules"
        ]
      ]
    },
    "left": {
      "h3": "JavaScript or Python first?",
      "ps": [
        "Either works. Python is gentler for complete beginners; JavaScript is better for someone who wants things on screen quickly.",
        "Many learners end up using both."
      ]
    },
    "right": {
      "h3": "Is TypeScript worth learning?",
      "ps": [
        "For adults building larger projects, yes. It adds types that catch mistakes before the code runs.",
        "We teach it after plain JavaScript feels comfortable."
      ]
    }
  },
  "catalogue": {
    "eyebrow": "The catalogue",
    "h2": "JavaScript courses",
    "lede": "Grouped by age and stage. The free class decides where a learner starts.",
    "bands": [
      {
        "num": "I",
        "h3": "Teens",
        "sub": "Ages 13 to 18",
        "courses": [
          {
            "code": "JSAU / TEN / 01",
            "slug": "javascript-course-for-teens-beginners-interactive-web",
            "title": "JavaScript for Teens",
            "blurb": "Interactive pages and games."
          },
          {
            "code": "JSAU / TEN / 02",
            "slug": "react-for-teens-complete-masterclass",
            "title": "React for Teens",
            "blurb": "JavaScript to real React apps."
          },
          {
            "code": "JSAU / TEN / 03",
            "slug": "backend-coding-masterclass-for-teens",
            "title": "Backend Development for Teens",
            "blurb": "Node, APIs and databases."
          }
        ]
      },
      {
        "num": "II",
        "h3": "Adults",
        "sub": "18 and over",
        "courses": [
          {
            "code": "JSAU / ADL / 01",
            "slug": "complete-typescript-programming-masterclass-college",
            "title": "TypeScript Course",
            "blurb": "Typed JavaScript, React and Node."
          },
          {
            "code": "JSAU / ADL / 02",
            "slug": "react-js-complete-masterclass-college",
            "title": "React Masterclass",
            "blurb": "To production React."
          },
          {
            "code": "JSAU / ADL / 03",
            "slug": "mern-stack-development-masterclass-college",
            "title": "MERN Stack Course",
            "blurb": "MongoDB, Express, React, Node."
          }
        ]
      },
      {
        "num": "III",
        "h3": "Around the language",
        "sub": "Useful companions",
        "courses": [
          {
            "code": "JSAU / CMP / 01",
            "slug": "html-css-course-for-beginners-build-real-websites",
            "title": "HTML and CSS for Beginners",
            "blurb": "The page JavaScript works on."
          },
          {
            "code": "JSAU / CMP / 02",
            "slug": "git-github-version-control-course-for-teens",
            "title": "Git and GitHub for Teens",
            "blurb": "Saving every version."
          },
          {
            "code": "JSAU / CMP / 03",
            "slug": "full-stack-web-development-masterclass-college",
            "title": "Full Stack Developer Course",
            "blurb": "React, Node and deployment, 18+."
          }
        ]
      }
    ]
  },
  "how": {
    "eyebrow": "How lessons run",
    "h2": "JavaScript lessons on Australian time",
    "lede": "Teachers work from India, and their day overlaps Australian afternoons and evenings. Times are set in your own state's time and move with daylight saving.",
    "slots": [
      {
        "time": "After school",
        "l": "For teens in term time."
      },
      {
        "time": "Evening",
        "l": "For adults after work, by arrangement."
      },
      {
        "time": "Weekend",
        "l": "Longer build sessions."
      }
    ],
    "cells": [
      {
        "h3": "Free first class",
        "p": "A first script in the browser and advice on where to start."
      },
      {
        "h3": "Small groups",
        "p": "Five to ten learners at the same stage."
      },
      {
        "h3": "One to one",
        "p": "For a particular project or pace."
      },
      {
        "h3": "Console open",
        "p": "Learners read errors in the browser console from day one."
      },
      {
        "h3": "Real data",
        "p": "Public Australian data in the async projects."
      },
      {
        "h3": "Code by the learner",
        "p": "Teachers guide; learners type every line."
      }
    ]
  },
  "projectsH2": "Published work by our students",
  "projectsLede": "Work our students built and published. More in the <a class=\"ag-inline-link\" href=\"/student-labs\">student labs</a>.",
  "reviewsLede": "Published Google reviews, copied without edits.",
  "fees": {
    "h2": "Fees for JavaScript classes",
    "lede": "Learners outside India pay one monthly fee in US dollars; nothing is due at sign-up and there is no contract.",
    "free": [
      "A first script running in your browser",
      "Advice on the right course",
      "No card needed"
    ],
    "group": [
      "Five to ten learners per class",
      "Code shared and discussed",
      "The same teacher each week",
      "Stop after any month"
    ],
    "one": [
      "Lessons around one learner's project",
      "Browser, Node or React focus",
      "Times around school or work"
    ]
  },
  "faq": {
    "eyebrow": "Learners ask",
    "h2": "Questions about online JavaScript classes in Australia",
    "items": [
      {
        "q": "What do online JavaScript classes cover?",
        "a": "The core language, how it works in the browser, Node.js for scripts and servers, and asynchronous code with promises and async functions."
      },
      {
        "q": "What is the difference between await in a loop and Promise.all?",
        "a": "Awaiting in a loop runs requests one after another; Promise.all lets them overlap. In our test with eight ABS requests, the loop took 16,843 ms and Promise.all 2,190 ms in the first round."
      },
      {
        "q": "Why does forEach with async not work as expected?",
        "a": "forEach does not wait for the promises its callback returns, so the code after it runs before the work is done. In our test it returned after 8.5 ms with none of eight requests finished."
      },
      {
        "q": "Is JavaScript in the Australian Curriculum?",
        "a": "It is named as an example. The elaboration for AC9TDI8P09 describes using a general-purpose language \"such as Python, JavaScript or C#\"."
      },
      {
        "q": "Do I need to know HTML first?",
        "a": "It helps for browser work but is not required. Learners can start with JavaScript in Node and add HTML later."
      },
      {
        "q": "What age can start?",
        "a": "Teens from 13 and adults of any age. Younger children usually start with Scratch or Python."
      },
      {
        "q": "How is this different from web development for teens?",
        "a": "Web development for teens is about building whole sites. These classes go deeper into the JavaScript language itself and are open to adults."
      },
      {
        "q": "Should I learn TypeScript?",
        "a": "Once plain JavaScript is comfortable, TypeScript is a good next step for larger projects."
      },
      {
        "q": "Will this get me a web developer job?",
        "a": "We make no job or salary promises. The classes build real projects and understanding you can show."
      },
      {
        "q": "How much are JavaScript classes?",
        "a": "The first class is on us, with no card asked for. Monthly group and one-to-one prices are listed in the fees panel."
      }
    ]
  },
  "elsewhere": {
    "eyebrow": "Also on this site",
    "h2": "Related pages",
    "lede": "Pages beside this one.",
    "items": [
      {
        "href": "/web-development-course-for-teens-australia",
        "label": "Web development for teens",
        "p": "Whole sites, designed and published."
      },
      {
        "href": "/software-development-course-australia",
        "label": "Software development course",
        "p": "Testing, Git and debugging."
      },
      {
        "href": "/c-plus-plus-classes-online-australia",
        "label": "C++ classes online",
        "p": "A compiled language."
      },
      {
        "href": "/coding-for-career-changers-australia",
        "label": "Coding for career changers",
        "p": "For adults switching fields."
      },
      {
        "href": "/coding-classes-in-australia",
        "label": "Coding classes in Australia",
        "p": "States, cities, exams and every subject door."
      },
      {
        "href": "/online-coding-tutor-australia",
        "label": "Online coding tutor",
        "p": "Private help in any language."
      }
    ]
  },
  "start": {
    "h2": "Book a free JavaScript lesson",
    "lede": "Leave your details and we will phone at a convenient time. The first class runs a first script and ends with a recommendation.",
    "readFirst": "Read about <a class=\"ag-inline-link\" href=\"/how-we-teach\">how we teach</a> or browse <a class=\"ag-inline-link\" href=\"/courses\">every course</a>.",
    "note": "Send a WhatsApp from your Australian number for the fastest answer. The +91 line is answered by our team in India; we have no Australian office.",
    "formNote": "Free, no card, no obligation."
  },
  "footer": {
    "cols": [
      {
        "h4": "Languages",
        "links": [
          {
            "href": "/c-plus-plus-classes-online-australia",
            "label": "C++ classes"
          },
          {
            "href": "/web-development-course-for-teens-australia",
            "label": "Web development for teens"
          },
          {
            "href": "/online-coding-tutor-australia",
            "label": "Online coding tutor"
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
            "href": "/data-science-course-australia",
            "label": "Data science course"
          },
          {
            "href": "/coding-for-career-changers-australia",
            "label": "Career changers"
          }
        ]
      }
    ],
    "bottomRight": "Start it, then wait for it"
  },
  "personalityCss": "\n.ag-root.ag-jsau .ag-hero h1 { letter-spacing: -0.022em; }\n.ag-root.ag-jsau .ag-capsule { border-left-width: 4px; border-radius: 5px; }\n.ag-root.ag-jsau .ag-section-head h2 { max-width: 34ch; }\n.ag-root.ag-jsau .ag-table caption { text-align: left; font-weight: 618; }\n.ag-root.ag-jsau .ag-band-head h3 { letter-spacing: -0.007em; }\n.ag-root.ag-jsau .ag-slots { gap: 1.2rem; }\n",
  "dossier": {
    "curriculumAuthority": "Australia, teens 13+ and adults. ACARA v9 Digital Technologies 7-10: AC9TDI8P09 \"implement, modify and debug programs involving control structures and functions in a general-purpose programming language\", elaboration \"such as Python, JavaScript or C#\". ABS ANZSCO 2022 261212 Web Developer: \"Plans, produces and maintains websites using web programming languages, software applications, technologies and databases\". MDN Promise.all() and Array.prototype.forEach() quotes. ABS Data API ABS_ANNUAL_ERP_LGA2025 (CC BY 4.0).",
    "localProject": "Sequential await vs Promise.all. Node v22.16.0, 8 requests to ABS_ANNUAL_ERP_LGA2025 (17200 Sydney, 24600 Melbourne, 31000 Brisbane, 40070 Adelaide, 57080 Perth, 62810 Hobart, 71000 Darwin, 89399 Unincorporated ACT; names from CL_LGA_2025): round 1 sequential 16,843 ms, Promise.all 2,190 ms; round 2 9,512 ms, 1,940 ms; identical results; forEach(async) returned after 8.5 ms with 0 of 8 finished. Baseline note: sequential is correct under rate limits or dependent requests. Lesson family: sequential await vs Promise.all.",
    "requiredMentions": [
      "261212 Web Developer",
      "Plans, produces and maintains websites using web programming languages",
      "AC9TDI8P09",
      "an iterable of promises as input",
      "16,843 ms",
      "2,190 ms",
      "does not wait for promises",
      "rejects when any of the input's promises rejects"
    ],
    "sources": [
      {
        "claim": "ACARA, Australian Curriculum v9, Digital Technologies 7-10: AC9TDI8P09 and its elaboration naming Python, JavaScript or C#.",
        "url": "https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx"
      },
      {
        "claim": "ABS, ANZSCO 2022, 2612 Multimedia Specialists and Web Developers: 261212 Web Developer.",
        "url": "https://www.abs.gov.au/statistics/classifications/anzsco-australian-and-new-zealand-standard-classification-occupations/2022/browse-classification/2/26/261/2612"
      },
      {
        "claim": "MDN Web Docs, Promise.all() and Array.prototype.forEach().",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all"
      },
      {
        "claim": "ABS Data API, Estimated Resident Population by LGA 2025, CC BY 4.0.",
        "url": "https://data.api.abs.gov.au/rest/data/ABS,ABS_ANNUAL_ERP_LGA2025,1.0.0/ERP.3.TOT..LGA2025.A?startPeriod=2025&endPeriod=2025"
      }
    ],
    "rejectedClaims": [
      "Council names: taken from the ABS codelist CL_LGA_2025, read 14 October 2026.",
      "Any claim that Promise.all is always better: not made; the sequential loop is right under rate limits.",
      "Job demand or salaries for JavaScript developers: not given."
    ]
  }
};
