---
title: "AI and Python Classes for Teens in the SF Bay Area | Live"
description: "Live online AI and Python classes for San Francisco Bay Area teens: machine learning, data science and a project on San Francisco street tree planting dates."
canonical: https://learn.modernagecoders.com/ai-and-python-classes-for-teens-in-san-francisco-bay-area
source: src/pages/ai-and-python-classes-for-teens-in-san-francisco-bay-area.html
---
> Modern Age Coders teaches Bay Area teens Python and AI live online, on Pacific Time: Python from scratch, then data science and machine learning built by hand, in batches of fifteen to twenty or one to one. The first class is free. Our signature project uses DataSF, where San Francisco Public Works publishes its street tree inventory, to teach the unglamorous skill of trusting dates carefully.

[Home](/) / [United States](/coding-classes-in-united-states) / [California](/coding-classes-in-california) / San Francisco Bay Area

San Francisco Bay Area, California / Live online

# AI and Python classes for teens in the San Francisco Bay Area

**Where can a Bay Area teen learn Python and AI from a live teacher?** Modern Age Coders teaches Bay Area teens Python and AI live online, on Pacific Time: Python from scratch, then data science and machine learning built by hand, in batches of fifteen to twenty or one to one. The first class is free. Our signature project uses DataSF, where San Francisco Public Works publishes its street tree inventory, to teach the unglamorous skill of trusting dates carefully.

Plenty of Bay Area teens already know what an AI model is; many have used one to finish homework. Fewer have built one, and fewer still have spent an hour discovering that the data a model would learn from is quietly broken. That hour is what this page is about. It describes a project on a public San Francisco dataset whose dates are stored as text, mostly missing, and occasionally from the future, and it explains how our Python and AI courses lead a teenager from first syntax to models they can defend.

Facts last verified 18 October 2026. Teaching is online; no San Francisco Bay Area branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 15 to 20 students per group.

## Four routes into Python and AI

Teens start where their skills are, not where their grade is. The free class decides which one fits.

- [Python for Teens](/courses/python-complete-masterclass-teens) (Grades 7 to 12): Python from the first print statement to files, functions and classes, with the date project as a milestone.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Grades 9 to 12): Machine learning in Python: train, test and break real models, then explain what went wrong.
- [Data Science for Teens](/courses/data-science-course-for-teens-python-data) (Grades 8 to 12): pandas, charts and the cleaning work that comes before any model, on public city data.
- [Problem Solving for Teens](/courses/problem-solving-dsa-masterclass-teens) (Grades 9 to 12): Algorithms and data structures for teens heading toward competitions or AP Computer Science A.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## When was each San Francisco street tree planted? A project in trusting dates

DataSF is the open data portal of the City and County of San Francisco. Its Street Tree Inventory, published by San Francisco Public Works, has a planting date column. Teens find out how much of it they can actually use.

**The planteddate column in the San Francisco Street Tree Inventory, dataset tkzw-k3nq (our counts, queried 18 October 2026)**

| What we checked | Result |
|---|---|
| Records in the inventory | 144,519 |
| Records with no planting date | 105,867 |
| Records with a planting date | 38,652 |
| Column type | text, always written YYYY-MM-DD |
| Earliest planting year | 1955 |
| Dated after the extract date of 2026-10-17 | 8 |

**Planting years with the most dated records (our count)**

| Year | Records |
|---|---|
| 2018 | 2,261 |
| 2024 | 1,927 |
| 2017 | 1,734 |
| 2025 | 1,725 |

### Text is not a date

The planting date arrives as text. Before any filtering, teens parse each value with datetime.strptime and the format %Y-%m-%d, so that comparing two dates compares time rather than characters.

### Most values are missing

Fewer than three in ten records carry a date. A chart of plantings per year therefore describes the dated trees only, and the caption has to say so in plain words.

### Some dates are impossible

The newest data_as_of value was 2026-10-17, yet eight records were planted after it, the latest on 2026-10-20. A filter that drops dates later than the extract is the honest fix.

Why would a record carry a planting date three days in the future? Possibly a planned planting entered ahead of time, possibly a typing slip; the dataset does not say, and we do not guess for it. What teens practise is the decision: state the rule, apply it in code, report how many rows it removed. Their final chart shows 17,312 dated plantings from 2015 onward, peaking in 2018, with the eight future rows excluded and named in a footnote.

The inventory also carries a legal status for each tree. Teens group by it and find 136,258 trees maintained by Public Works, 2,156 marked Significant Tree and 232 marked Landmark tree. That small table becomes the first feature a teen ever chooses for a model, and the first time they ask whether a label means what its name suggests.

### Ours, and dated

The counts above are ours, taken on 18 October 2026. Public Works updates the inventory daily and noted on 9/9/2026 that it corrected the data in place after moving to a new asset management system in December 2024, so tomorrow&rsquo;s numbers may differ. The dataset is released under the Open Data Commons Public Domain Dedication and License.

## Where California high school computer science stands

A short trend line, from one published source.

In the Code.org (2025). 2025 State of AI + CS Education data, the share of California high schools offering computer science rises from 40% in 2018 to 2019 and 45% in 2022 to 2023 to about 58% in the most recent California value. The source for that latest figure is school catalogs and teacher surveys, and the two tabs of the sheet assign it different school years, so we leave the year off. The California Department of Education site turned away our automated reading on 18 October 2026, so we quote no state rule here; our [California page](/coding-classes-in-california) has the statewide overview.

Even at the high end, a school offering one computer science course is not the same as a teen getting to machine learning. Most Bay Area students who want to build AI, rather than use it, end up learning outside the timetable.

## After-school Pacific Time, with teachers in India

A Bay Area late afternoon is early morning in India, which is how classes fit around high school.

### Flexible by design

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

### The offset

While daylight time lasts, the Bay Area trails India by twelve and a half hours; on standard time the lag is thirteen and a half, since India keeps one clock all year.

### This year&rsquo;s switches

Bay Area clocks change on November 1, 2026 and again on March 14, 2027. Class times are stated in Pacific Time, and we resend them around both dates.

**Time zones are dates too** The date project has a sequel. The IANA database files the Bay Area under America/Los_Angeles, and a teen who converts the planting dates to timestamps learns why zone-aware datetimes beat naive ones once a clock change sits in the range.

## From first Python to models a teen can defend

Grade bands are rough. Some ninth graders are ready for the AI course; some seniors need the foundation first.

- **Grades 7 to 8: Foundations** Python syntax, loops, functions and small programs that read files. [Python for Teens](/courses/python-complete-masterclass-teens), [JavaScript for Teens](/courses/javascript-course-for-teens-beginners-interactive-web)
- **Grades 9 to 10: Data** Cleaning, grouping and charting real datasets such as the tree inventory. [Data Science for Teens](/courses/data-science-course-for-teens-python-data), [Git & GitHub Course for Teens](/courses/git-github-version-control-course-for-teens)
- **Grades 10 to 11: Algorithms** Data structures, complexity and problem solving for contests and AP. [Problem Solving for Teens](/courses/problem-solving-dsa-masterclass-teens), [AP Computer Science A](/courses/ap-computer-science-a-java-exam-prep-course)
- **Grades 11 to 12: Machine learning** Models trained and evaluated in Python, with honest reports of their limits. [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens), [Competitive Programming for Teens](/courses/competitive-programming-for-teens-course)

## Why a Bay Area teen should build AI rather than only use it

Models are only as honest as the data cleaning behind them.

Feed the raw tree inventory to a model that predicts planting year and it will learn from 38,652 dated rows while silently treating the other 105,867 as something else. It will also learn from eight dates that have not happened. Nothing in the output warns you. A teen who did the cleaning by hand knows to look.

That is why our AI course begins with data and ends with evaluation. Teens use AI coding tools where the provider&rsquo;s own age rules allow, but they are graded on whether they can explain each step, including what the model cannot know.

In a region full of AI products, the scarce skill is the person who asks what the training data got wrong. The longer argument is in [why learning to code still pays off](/blog/is-coding-worth-learning-2026).

## One live class for the whole Bay

Whether home is in the city, across the bridge or down the Peninsula, the class is the same distance away.

- **Anywhere around the Bay** A teen in the Richmond District and another in Oakland can share a batch without either crossing a bridge.
- **Code reviewed live** The teacher reads the student&rsquo;s code on a shared screen and asks why, rather than pasting a correction.
- **A free first class** One real task, then a recommended course and time. We never take card details at that stage.
- **Batches by level** Fifteen to twenty teens at the same stage, from the Bay Area and the rest of the US.
- **One to one** A single teacher for a single teen, for competition training, AP review or a faster pace.
- **Honest about schoolwork** We teach concepts and projects. Graded assignments and exam work stay the student&rsquo;s own.

**Online, from India** There is no Modern Age Coders office in the Bay Area, and none is claimed. Classes are live online; a teen needs a laptop or desktop, a headset and a steady connection.

## Fees for Bay Area families

A free start, then one of two monthly plans.

- First class: USD 0. A full first class with a teacher at no cost, ending in a suggested course and schedule.
- Group tuition: USD 100 a month. A month of live classes in a level-matched batch of fifteen to twenty teens.
- Private tuition: USD 150 a month. A month of one-to-one classes, scheduled around school and activities.

Bay Area families pay in US dollars at the same rate as every other US family. Billing begins only after the free class, when course and time are agreed; the pricing page covers breaks and missed classes.

## Bay Area teen and parent questions

### Is there an in-person class anywhere in the Bay Area?

No. All classes are live online, so a teen joins from home anywhere around the Bay.

### Does my teen need to know Python before the AI course?

Yes, the basics. Teens new to code start with the Python course, and the teacher moves them to AI when their projects show they are ready.

### What time are the classes?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience. Times are confirmed in Pacific Time.

### What is the street tree date project?

Teens query the DataSF Street Tree Inventory, parse its text planting dates, handle the many blank ones, and remove dates later than the extract date before charting plantings by year.

### Which portal does the project use?

Only DataSF, the open data portal of the City and County of San Francisco. Other Bay Area cities publish their own data, which this page does not use.

### Can my teen use AI chatbots and coding assistants in class?

Where the provider allows it for their age, as a helper after they can write and check the code themselves. We teach the reasoning first.

### Do you prepare students for AP Computer Science?

Yes, AP Computer Science A and Principles, alongside the school course. School assignments and exams always remain the student's own work.

### How large are the batches?

Fifteen to twenty teens at the same level. One-to-one classes are available instead.

### What equipment is needed?

A laptop or desktop that can run Python, a headset and a reliable connection. Chromebooks work for some courses; the free class checks.

### Are you connected with DataSF or San Francisco Public Works?

No. We teach with public data they publish, but we are not connected with the City and County of San Francisco or any school district.

## More for Bay Area teens

For a broader look at AI study paths, read [AI and machine learning classes in the USA](/ai-and-machine-learning-classes-in-usa) and [AI projects for high school students](/ai-projects-for-high-school-students). Contest-minded teens can see [USACO preparation](/usaco-preparation-online-coaching), and the [California page](/coding-classes-in-california) covers the state.

## Contact

Book the free class on [https://learn.modernagecoders.com/ai-and-python-classes-for-teens-in-san-francisco-bay-area](https://learn.modernagecoders.com/ai-and-python-classes-for-teens-in-san-francisco-bay-area#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
