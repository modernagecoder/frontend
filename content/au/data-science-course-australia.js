'use strict';
// Data science course, Australia (ag- track door; AU cluster Phase 9, AU-P9B).
// Intent: Australians (teens 14+ and adults) looking for a data science course: collecting, cleaning, summarising,
// visualising and modelling data with Python. Distinct from the VCE Data Analytics exam page (linked), from AI and machine
// learning pages (linked) and from P9A's forecasting project.
// Sources, read raw on 14 October 2026:
//  - ABS, ANZSCO 2022, 2241: 224114 Data Analyst "Gathers, cleans and interprets data ..."; 224115 Data Scientist
//    "Applies analytical techniques and scientific procedures to large datasets by creating advanced algorithms and data
//    models".
//  - ACARA, Australian Curriculum v9, Digital Technologies 7-10: AC9TDI8P01 "acquire, store and validate data from a range
//    of sources using software, including spreadsheets and databases"; Year 10 description "allowing greater exploration
//    of trends and outliers".
//  - ABS Data API, ABS_ANNUAL_ERP_LGA2025 1.0.0, key ERP.3.TOT..LGA2025.A, 2025 (CC BY 4.0).
// Lesson family: mean vs median on a skewed distribution. Our calculation: 548 rows; 6 unincorporated areas (codes ending
// 399) set aside; 542 LGAs; mean 50,025; median 13,306; 134 LGAs above the mean; largest Brisbane (31000) 1,375,301;
// smallest 102. Without Brisbane: mean 47,575, median 13,264. Geometric mean 12,292; 10% trimmed mean 28,921.

module.exports = {
  "cluster": "ag",
  "clusterName": "Australia",
  "hub": {
    "group": "guide",
    "tag": "DATA SCIENCE",
    "blurb": "A data science course for Australians: Python, real public data, honest summaries, charts and first models."
  },
  "slug": "data-science-course-australia",
  "code": "dsau",
  "accent": "#4E360E",
  "accentRationale": "Data science course, Australia: a dark ochre (hue 37.5), 9.17:1 on #EDE7DA; 24.4 RGB from the nearest national AU accent, 12.0 from any other Australian accent and 9.6 from every other site colour",
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
  "routeLabel": "Data science course, Australia",
  "title": "Data Science Course in Australia | Python and Real Data",
  "description": "A live online data science course for Australians: Python, real public data, honest averages, clear charts and first models. Teens 14+ and adults, first class free.",
  "ogDescription": "The average Australian council has 50,025 residents. The typical one has 13,306. Why a data science course starts with that gap, using ABS data.",
  "twitterDescription": "Data science for Australians: Python, ABS data, honest summaries and first models. Live online, first class free.",
  "pageName": "Data Science Course in Australia",
  "webPageDescription": "A guide to learning data science in Australia with Python and public data, with a worked example on 2025 council populations from the ABS.",
  "courseDescription": "Live online data science lessons for Australian teens and adults: Python, data cleaning, summary statistics, visualisation and first machine learning models.",
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
  "crumbLabel": "Data science course",
  "navLinks": [
    {
      "href": "#cycle",
      "label": "The cycle"
    },
    {
      "href": "#average",
      "label": "A worked example"
    },
    {
      "href": "#school",
      "label": "At school"
    },
    {
      "href": "#projects",
      "label": "Projects"
    },
    {
      "href": "#fees",
      "label": "Fees"
    }
  ],
  "eyebrow": "Australia &middot; Ages 14 to adult &middot; Question, clean, summarise, model",
  "h1": "Data science course",
  "lede": "Data science is the craft of turning a messy table into an answer you can defend. Before any model, it means choosing the right data, cleaning it, and summarising it in a way that does not mislead, which is harder than it sounds. Our data science course teaches Australians from 14 to adulthood to do all of that in Python, live online, using real public data from Australian agencies. This page sets out the approach, works through one example on the latest council population figures from the Australian Bureau of Statistics, and shows where the same skills appear in the Australian Curriculum and in the national occupation classification.",
  "secondaryCta": {
    "href": "#average",
    "label": "See the worked example"
  },
  "wa": "Hello Modern Age Coders, I am in Australia and interested in a data science course. Could we book a free first class?",
  "heroNote": "Live teaching since 2020 &middot; 10,000+ students &middot; Real Australian data in every unit",
  "spec": [
    [
      "For",
      "Teens 14+ and adults"
    ],
    [
      "Language",
      "Python with pandas"
    ],
    [
      "Data",
      "Public Australian sources"
    ],
    [
      "Statistics",
      "Summaries that do not mislead"
    ],
    [
      "Charts",
      "Built to answer a question"
    ],
    [
      "Models",
      "First machine learning, tested"
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
  "capsule": "A data science course teaches how to collect, clean, summarise, visualise and model data to answer real questions, usually in Python. ANZSCO describes a data scientist as someone who applies analytical techniques and scientific procedures to large datasets. Modern Age Coders teaches data science live online to Australian teens from 14 and adults, with ABS and other public data, in small groups or one to one, and the first class is free.",
  "picks": {
    "eyebrow": "Start here",
    "h2": "Three data science courses",
    "lede": "Picked by age and experience. Each card opens the syllabus.",
    "items": [
      {
        "course": "data-science-course-for-teens-python-data",
        "code": "DSAU / 01",
        "title": "Data Science for Teens",
        "note": "Ages 14 to 18 with basic Python: real data, statistics and first models."
      },
      {
        "course": "data-science-complete-masterclass-college",
        "code": "DSAU / 02",
        "title": "Data Science Course for Adults",
        "note": "For 18 and over: Python, machine learning and deep learning from the beginning."
      },
      {
        "course": "statistics-probability-maths-course",
        "code": "DSAU / 03",
        "title": "Statistics and Probability",
        "note": "The maths underneath: distributions, averages and testing ideas against data."
      }
    ]
  },
  "sections": [
    {
      "id": "cycle",
      "tint": "tint",
      "eyebrow": "The cycle",
      "h2": "Five steps, and the model is only one of them",
      "lede": "Beginners rush to the model. Most of the work, and most of the mistakes, come earlier.",
      "body": [
        {
          "kind": "table",
          "caption": "The data science cycle as taught in our course",
          "head": [
            "Step",
            "The question at this step",
            "Typical trap"
          ],
          "rows": [
            [
              "Ask",
              "What exactly do we want to know, and for whom?",
              "A question too vague to answer"
            ],
            [
              "Acquire",
              "Where does trustworthy data come from, and what does each row mean?",
              "Rows that are not what they seem, such as totals mixed with parts"
            ],
            [
              "Clean",
              "What is missing, duplicated or wrongly coded?",
              "Silently dropping awkward rows"
            ],
            [
              "Summarise and chart",
              "What is typical, and what is unusual?",
              "Reporting a mean for skewed data"
            ],
            [
              "Model and check",
              "Does a model beat a simple baseline on new data?",
              "Testing on the data used for training"
            ]
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "Two occupations, one skill set",
          "left": [
            "ANZSCO lists 224114 Data Analyst, who \"Gathers, cleans and interprets data\", and 224115 Data Scientist, who \"Applies analytical techniques and scientific procedures to large datasets by creating advanced algorithms and data models\".",
            "The course covers the analyst's work first, because the scientist's work stands on it."
          ],
          "rightH3": "Why public data",
          "right": [
            "Australian agencies publish high-quality data under open licences. Learners can check every number they produce against the source, which is the habit we want.",
            "Real data is also messier than textbook data, and that mess is the lesson."
          ]
        }
      ]
    },
    {
      "id": "average",
      "tint": "deep",
      "eyebrow": "A worked example",
      "h2": "The average council that does not exist",
      "lede": "One question, asked of the ABS's 2025 estimated resident population for every local government area: how big is a typical Australian council?",
      "body": [
        {
          "kind": "p",
          "html": "We downloaded the 2025 figures from the ABS Data API. The file has 548 rows. Six are unincorporated areas, labelled as such in the ABS codelist, which are not councils, so a careful analyst sets them aside first and says so. That leaves <strong>542 local government areas</strong>. Then come two different answers to \"how big is a typical council?\""
        },
        {
          "kind": "table",
          "caption": "Summaries of 2025 council populations (our calculation from ABS data)",
          "head": [
            "Summary",
            "Value",
            "What it tells you"
          ],
          "rows": [
            [
              "Mean (average)",
              "50,025",
              "Pulled up by a few very large councils"
            ],
            [
              "Median (middle council)",
              "13,306",
              "Half the councils are smaller than this"
            ],
            [
              "Councils above the mean",
              "134 of 542",
              "About one in four is above \"average\""
            ],
            [
              "Largest council",
              "Brisbane, 1,375,301",
              "Over 13,000 times the smallest"
            ],
            [
              "Smallest council",
              "Maralinga Tjarutja, 102",
              "Its whole 2025 estimate"
            ]
          ]
        },
        {
          "kind": "three",
          "mt": true,
          "cells": [
            {
              "h3": "One council moves the mean",
              "p": "Take Brisbane out and the mean falls from 50,025 to 47,575. The median barely moves, from 13,306 to 13,264."
            },
            {
              "h3": "The simple summary wins",
              "p": "Here the plain median describes a typical council far better than the mean. A 10% trimmed mean, 28,921, sits in between and is still well above most councils."
            },
            {
              "h3": "Show the shape",
              "p": "A histogram on a log scale shows why: most councils are small, with a long tail of big cities. Students draw it before writing any summary."
            }
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "The skill being taught",
          "left": [
            "Choosing a summary is a decision, not a default. For skewed data such as populations, incomes or house sizes, the median usually tells the truth about the typical case, while the mean answers a different question: what each council would get if everyone were shared out equally.",
            "Both are correct calculations. Only one fits the question asked."
          ],
          "rightH3": "Checking our own work",
          "right": [
            "Every number above comes from one Python script that reads the ABS file directly. Learners rerun it, then change one thing at a time and predict the result before running it again.",
            "We do not add the councils up to compare with a national total, because published parts and published totals are produced separately."
          ]
        },
        {
          "kind": "source",
          "html": "Source, read 14 October 2026: ABS Data API, <a class=\"ag-inline-link\" href=\"https://data.api.abs.gov.au/rest/data/ABS,ABS_ANNUAL_ERP_LGA2025,1.0.0/ERP.3.TOT..LGA2025.A?startPeriod=2025&endPeriod=2025\" rel=\"noopener\" target=\"_blank\">Estimated Resident Population by LGA, 2025</a>, Creative Commons Attribution 4.0. Summaries are our own calculations."
        }
      ]
    },
    {
      "id": "school",
      "tint": "tint",
      "eyebrow": "At school",
      "h2": "Data skills in the Australian Curriculum",
      "lede": "Students meet data handling in Digital Technologies well before senior school.",
      "body": [
        {
          "kind": "two",
          "leftH3": "Years 7 and 8",
          "left": [
            "Content description AC9TDI8P01 asks students to \"acquire, store and validate data from a range of sources using software, including spreadsheets and databases\".",
            "Our course moves the same work from spreadsheets into Python, so it can be repeated, checked and scaled."
          ],
          "rightH3": "Years 9 and 10",
          "right": [
            "By Year 10 the curriculum describes students visualising data \"allowing greater exploration of trends and outliers to support or challenge their analyses\".",
            "The council example above is exactly that: an outlier challenging a summary."
          ]
        },
        {
          "kind": "p",
          "mt": true,
          "html": "Victorian senior students taking Data Analytics will find exam-specific help on our <a class=\"ag-inline-link\" href=\"/vce-applied-computing-data-analytics-help\">VCE Applied Computing: Data Analytics</a> page. This course builds the general skills and never completes assessed work."
        },
        {
          "kind": "source",
          "html": "Sources, read 14 October 2026: ACARA, <a class=\"ag-inline-link\" href=\"https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx\" rel=\"noopener\" target=\"_blank\">Digital Technologies curriculum content, Years 7 to 10</a>; ABS, <a class=\"ag-inline-link\" href=\"https://www.abs.gov.au/statistics/classifications/anzsco-australian-and-new-zealand-standard-classification-occupations/2022/browse-classification/2/22/224/2241\" rel=\"noopener\" target=\"_blank\">ANZSCO 2022 unit group 2241</a>."
        }
      ]
    },
    {
      "id": "projects",
      "tint": "",
      "eyebrow": "Projects",
      "h2": "What learners build",
      "lede": "Each project uses public data and ends with a short written finding a non-specialist can follow.",
      "body": [
        {
          "kind": "table",
          "caption": "Project sequence in the data science course",
          "head": [
            "Project",
            "Data",
            "Main skill"
          ],
          "rows": [
            [
              "Typical council",
              "ABS population by local government area",
              "Mean, median and skew"
            ],
            [
              "Weather extremes",
              "Public daily weather observations",
              "Cleaning gaps and spotting outliers"
            ],
            [
              "School holiday calendar",
              "State education department term dates",
              "Dates, joins and tidy tables"
            ],
            [
              "Commuter patterns",
              "Public transport usage files",
              "Grouping, time series and charts"
            ],
            [
              "First model",
              "A labelled public dataset",
              "Train, test and beat a baseline"
            ]
          ]
        },
        {
          "kind": "p",
          "mt": true,
          "html": "Learners drawn to the modelling end can continue with <a class=\"ag-inline-link\" href=\"/ai-and-machine-learning-classes-in-australia\">AI and machine learning classes</a>. Those who want stronger programming habits first can take the <a class=\"ag-inline-link\" href=\"/software-development-course-australia\">software development course</a>."
        }
      ]
    },
    {
      "id": "charts",
      "tint": "tint",
      "eyebrow": "Charts",
      "h2": "Choosing a chart that answers the question",
      "lede": "A chart is an argument. Learners pick the type by the question, then check that it cannot be misread.",
      "body": [
        {
          "kind": "table",
          "caption": "Questions and the charts that suit them",
          "head": [
            "Question",
            "Chart that fits",
            "What to watch"
          ],
          "rows": [
            [
              "How are values spread out?",
              "Histogram, often on a log scale for populations",
              "Bin widths that hide the shape"
            ],
            [
              "How do groups compare?",
              "Bar chart starting at zero",
              "Truncated axes that exaggerate gaps"
            ],
            [
              "How does something change over time?",
              "Line chart",
              "Missing periods drawn as if continuous"
            ],
            [
              "Are two measures related?",
              "Scatter plot",
              "Reading a pattern as cause and effect"
            ],
            [
              "What share does each part make?",
              "A sorted bar chart rather than many pie slices",
              "Parts that do not add up to the whole"
            ]
          ]
        },
        {
          "kind": "two",
          "mt": true,
          "leftH3": "The council data again",
          "left": [
            "Drawn on an ordinary axis, the council populations look like one tall bar and hundreds of invisible ones. On a log scale the shape appears, and the gap between mean and median makes sense at a glance.",
            "Learners draw both and write one sentence on what each would lead a reader to believe."
          ],
          "rightH3": "Charts with captions",
          "right": [
            "Every chart in the course has a title that states the finding, a labelled source and a date.",
            "If the caption cannot be written in one sentence, the chart is not finished."
          ]
        }
      ]
    },
    {
      "id": "ethics",
      "tint": "",
      "eyebrow": "Using data responsibly",
      "h2": "Data about people needs care",
      "lede": "Much useful data describes people. Learners practise handling it responsibly from the first project.",
      "body": [
        {
          "kind": "two",
          "leftH3": "Aggregates, not individuals",
          "left": [
            "Course datasets are chosen from aggregate public data, such as counts for a council or a month, so no individual can be identified.",
            "Learners discuss why agencies adjust small counts and why those adjustments mean parts are not added up to match a published total."
          ],
          "rightH3": "Saying what the data cannot show",
          "right": [
            "A finding is only as good as the data behind it. Each written result ends with one sentence on what the data does not cover.",
            "That habit protects readers from conclusions the numbers cannot support."
          ]
        },
        {
          "kind": "p",
          "mt": true,
          "html": "Students who want to see how data skills connect to AI can read <a class=\"ag-inline-link\" href=\"/learn-to-train-ai-not-just-prompt-it-australia\">learn to train AI, not just prompt it</a>."
        }
      ]
    }
  ],
  "ladder": {
    "eyebrow": "Progress",
    "h2": "Four levels of data skill",
    "lede": "Progress is measured by what a learner can do with a fresh dataset, not by time served.",
    "table": {
      "caption": "From table reader to modeller",
      "head": [
        "Level",
        "What you can do"
      ],
      "rows": [
        [
          "1. Reader",
          "Load a public dataset and explain what each row and column means"
        ],
        [
          "2. Cleaner",
          "Find and fix missing, duplicated and miscoded values, and record what you changed"
        ],
        [
          "3. Analyst",
          "Choose summaries and charts that fit the data and the question"
        ],
        [
          "4. Modeller",
          "Train a model, test it on new data, and compare it with a simple baseline"
        ]
      ]
    },
    "left": {
      "h3": "How much maths is needed?",
      "ps": [
        "School maths is enough to begin. Averages, percentages and graphs come first; the statistics behind models is taught as it is needed.",
        "Learners who want more depth can add our statistics course."
      ]
    },
    "right": {
      "h3": "Is data science a guaranteed career?",
      "ps": [
        "We make no job or salary promises. The course builds real, checkable projects and the judgement behind them.",
        "Those projects are what a learner can show and talk through."
      ]
    }
  },
  "catalogue": {
    "eyebrow": "The catalogue",
    "h2": "Data courses",
    "lede": "Grouped by stage. The free class decides where a learner starts.",
    "bands": [
      {
        "num": "I",
        "h3": "Getting started",
        "sub": "Teens and adults",
        "courses": [
          {
            "code": "DSAU / ST / 01",
            "slug": "data-science-course-for-teens-python-data",
            "title": "Data Science for Teens",
            "blurb": "Ages 14 to 18, basic Python."
          },
          {
            "code": "DSAU / ST / 02",
            "slug": "data-analysis-mastery-course-college",
            "title": "Data Analysis Course",
            "blurb": "Excel, SQL, Python and BI, 18+."
          },
          {
            "code": "DSAU / ST / 03",
            "slug": "data-and-ai-analytics-for-non-programmers-course",
            "title": "Data and AI for Non-Programmers",
            "blurb": "Spreadsheets to dashboards."
          }
        ]
      },
      {
        "num": "II",
        "h3": "The maths",
        "sub": "Alongside the code",
        "courses": [
          {
            "code": "DSAU / MA / 01",
            "slug": "statistics-probability-maths-course",
            "title": "Statistics and Probability",
            "blurb": "From data to hypothesis tests."
          },
          {
            "code": "DSAU / MA / 02",
            "slug": "data-analytics-mathematics-masterclass",
            "title": "Maths for Data Science",
            "blurb": "Statistics, linear algebra, ML."
          },
          {
            "code": "DSAU / MA / 03",
            "slug": "mysql-database-complete-masterclass-college",
            "title": "MySQL Course",
            "blurb": "Querying data at scale, 18+."
          }
        ]
      },
      {
        "num": "III",
        "h3": "Models",
        "sub": "After the basics",
        "courses": [
          {
            "code": "DSAU / ML / 01",
            "slug": "data-science-complete-masterclass-college",
            "title": "Data Science Course",
            "blurb": "Python, ML and deep learning, 18+."
          },
          {
            "code": "DSAU / ML / 02",
            "slug": "ai-ml-masterclass-teens",
            "title": "AI and Machine Learning for Teens",
            "blurb": "Models for 13 to 18."
          },
          {
            "code": "DSAU / ML / 03",
            "slug": "orange-data-mining-machine-learning-course-for-college-students",
            "title": "Orange Data Mining for College Students",
            "blurb": "Visual machine learning."
          }
        ]
      }
    ]
  },
  "how": {
    "eyebrow": "How lessons run",
    "h2": "Data lessons in your time zone",
    "lede": "Teachers are based in India, and the Indian working day overlaps Australian afternoons and evenings. Times are agreed in your state's time and adjusted for daylight saving.",
    "slots": [
      {
        "time": "After school",
        "l": "For teens in term time."
      },
      {
        "time": "Evening",
        "l": "For adults, by arrangement."
      },
      {
        "time": "Weekend",
        "l": "Longer analysis sessions."
      }
    ],
    "cells": [
      {
        "h3": "Free first class",
        "p": "A real dataset loaded and one honest summary written."
      },
      {
        "h3": "Groups",
        "p": "Fifteen to twenty learners comparing answers to the same question."
      },
      {
        "h3": "One to one",
        "p": "For a particular dataset, job need or pace."
      },
      {
        "h3": "Sources shown",
        "p": "Every dataset is cited, with its licence and date."
      },
      {
        "h3": "Reproducible",
        "p": "Every result comes from a script the learner can rerun."
      },
      {
        "h3": "Code by the learner",
        "p": "Teachers guide; learners write and explain the code."
      }
    ]
  },
  "projectsH2": "Student work, published",
  "projectsLede": "Applications our students built and published. Browse more in the <a class=\"ag-inline-link\" href=\"/student-labs\">student labs</a>.",
  "reviewsLede": "Published reviews from our Google profile, reproduced as written.",
  "fees": {
    "h2": "Fees for the data science course",
    "lede": "Learners outside India pay a monthly fee in US dollars. Nothing is due at sign-up and there is no contract.",
    "free": [
      "A dataset loaded and summarised in the lesson",
      "Advice on where to start",
      "No card details"
    ],
    "group": [
      "Fifteen to twenty learners per class",
      "Shared datasets, compared answers",
      "The same teacher each week",
      "Stop after any month"
    ],
    "one": [
      "Lessons around one learner's data",
      "Flexible depth and pace",
      "Times around school or work"
    ]
  },
  "faq": {
    "eyebrow": "Learners ask",
    "h2": "Questions about data science courses in Australia",
    "items": [
      {
        "q": "What does a data science course teach?",
        "a": "How to ask a clear question, find and clean data, summarise and chart it honestly, and build and test simple models, usually in Python."
      },
      {
        "q": "What is the difference between the mean and the median?",
        "a": "The mean adds everything up and divides by the count; the median is the middle value. For Australian councils in 2025 the mean is 50,025 residents but the median is 13,306, because a few large councils pull the mean up."
      },
      {
        "q": "Do I need to know Python first?",
        "a": "Adults can start from zero in the adult course. The teen data science course expects basic Python, which our Python for Teens course provides."
      },
      {
        "q": "What data do learners use?",
        "a": "Public Australian data such as ABS population figures, weather observations and transport usage, always cited with its licence."
      },
      {
        "q": "What does ANZSCO say a data scientist does?",
        "a": "ANZSCO 224115 Data Scientist applies analytical techniques and scientific procedures to large datasets by creating advanced algorithms and data models."
      },
      {
        "q": "How is this different from machine learning classes?",
        "a": "Data science covers the whole process from question to answer. Machine learning is one part of it, which our AI and machine learning classes cover in more depth."
      },
      {
        "q": "Will this help with VCE Data Analytics?",
        "a": "It builds the general skills. Exam-specific help is on our VCE Data Analytics page, and we never complete assessed work."
      },
      {
        "q": "What age can start?",
        "a": "From 14 with basic Python in the teen course, or 18 and over in the adult course."
      },
      {
        "q": "Will I get a data job afterwards?",
        "a": "We do not promise jobs or salaries. The course gives you checkable projects and the judgement to explain them."
      },
      {
        "q": "Is there a fee for the first lesson?",
        "a": "No. The first lesson is free and needs no card. After that, a monthly fee applies, shown in the fees panel."
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
        "p": "Where all our Australian pages start."
      },
      {
        "href": "/ai-and-machine-learning-classes-in-australia",
        "label": "AI and machine learning classes",
        "p": "Models in more depth."
      },
      {
        "href": "/vce-applied-computing-data-analytics-help",
        "label": "VCE Data Analytics help",
        "p": "For Victorian senior students."
      },
      {
        "href": "/software-development-course-australia",
        "label": "Software development course",
        "p": "Testing, Git and debugging."
      },
      {
        "href": "/coding-for-career-changers-australia",
        "label": "Coding for career changers",
        "p": "For adults switching fields."
      },
      {
        "href": "/ai-classes-for-teens-australia",
        "label": "AI classes for teens",
        "p": "Use, check and build AI."
      }
    ]
  },
  "start": {
    "h2": "Book a free data lesson",
    "lede": "Leave your details and we will call when it suits you. The first class loads a real dataset and ends with a recommendation.",
    "readFirst": "Read about <a class=\"ag-inline-link\" href=\"/how-we-teach\">how our lessons work</a>, or browse <a class=\"ag-inline-link\" href=\"/courses\">all courses</a>.",
    "note": "The quickest reply comes through WhatsApp. Calls from Australia reach our India-based staff on the +91 number; we do not run an Australian office.",
    "formNote": "Free, no card, no obligation."
  },
  "footer": {
    "cols": [
      {
        "h4": "Data and AI",
        "links": [
          {
            "href": "/ai-and-machine-learning-classes-in-australia",
            "label": "AI and machine learning"
          },
          {
            "href": "/software-development-course-australia",
            "label": "Software development"
          },
          {
            "href": "/coding-for-career-changers-australia",
            "label": "Career changers"
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
            "href": "/vce-applied-computing-data-analytics-help",
            "label": "VCE Data Analytics"
          },
          {
            "href": "/ai-classes-for-teens-australia",
            "label": "AI classes for teens"
          },
          {
            "href": "/australian-coding-maths-and-ai-competitions-calendar",
            "label": "Competitions calendar"
          }
        ]
      }
    ],
    "bottomRight": "Pick the summary that fits the shape"
  },
  "personalityCss": "\n.ag-root.ag-dsau .ag-hero h1 { letter-spacing: -0.015em; }\n.ag-root.ag-dsau .ag-capsule { border-left-width: 6px; border-radius: 3px; }\n.ag-root.ag-dsau .ag-section-head h2 { max-width: 33ch; }\n.ag-root.ag-dsau .ag-table caption { text-align: left; font-weight: 640; }\n.ag-root.ag-dsau .ag-band-head h3 { letter-spacing: -0.014em; }\n.ag-root.ag-dsau .ag-slots { gap: 0.95rem; }\n",
  "dossier": {
    "curriculumAuthority": "Australia, ages 14 and over. ABS ANZSCO 2022 unit group 2241: 224114 Data Analyst \"Gathers, cleans and interprets data by processing and applying information technology tools\"; 224115 Data Scientist \"Applies analytical techniques and scientific procedures to large datasets by creating advanced algorithms and data models\". ACARA v9 Digital Technologies: AC9TDI8P01 \"acquire, store and validate data from a range of sources using software, including spreadsheets and databases\"; Year 9-10 band description \"allowing greater exploration of trends and outliers to support or challenge their analyses\". ABS Data API ABS_ANNUAL_ERP_LGA2025 1.0.0, 2025, CC BY 4.0.",
    "localProject": "Mean vs median. 548 rows; 6 unincorporated (codes ending 399: 19399 975, 29399 917, 49399 3,001, 79399 8,207, 89399 484,630, 99399 2,498) set aside; 542 LGAs; mean 50,025; median 13,306; 134 above mean; max Brisbane 31000 1,375,301; min 102; without Brisbane mean 47,575, median 13,264; geometric mean 12,292; 10% trimmed mean 28,921. Baseline note: the plain median describes the typical council better than the mean. Lesson family: mean vs median on a skewed distribution.",
    "requiredMentions": [
      "224115 Data Scientist",
      "Gathers, cleans and interprets data",
      "AC9TDI8P01",
      "trends and outliers to support or challenge their analyses",
      "542 local government areas",
      "50,025",
      "13,306",
      "47,575"
    ],
    "sources": [
      {
        "claim": "ABS, Estimated Resident Population by LGA 2025 (ABS_ANNUAL_ERP_LGA2025), ABS Data API, CC BY 4.0.",
        "url": "https://data.api.abs.gov.au/rest/data/ABS,ABS_ANNUAL_ERP_LGA2025,1.0.0/ERP.3.TOT..LGA2025.A?startPeriod=2025&endPeriod=2025"
      },
      {
        "claim": "ABS, ANZSCO 2022, unit group 2241 (224114 Data Analyst, 224115 Data Scientist).",
        "url": "https://www.abs.gov.au/statistics/classifications/anzsco-australian-and-new-zealand-standard-classification-occupations/2022/browse-classification/2/22/224/2241"
      },
      {
        "claim": "ACARA, Australian Curriculum v9, Digital Technologies 7-10: AC9TDI8P01 and the Years 9-10 band description.",
        "url": "https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx"
      }
    ],
    "rejectedClaims": [
      "A national population total built by adding council figures: not given (published parts are not summed).",
      "Area names and the six unincorporated codes (Unincorporated NSW, Vic, SA, NT, ACT and Other Territories) confirmed in the ABS codelist CL_LGA_2025.",
      "Demand, vacancies or salaries for data scientists: not given (no job or salary promises).",
      "Bureau of Meteorology and transport datasets in the project list: named as types of data only, not quoted."
    ]
  }
};
