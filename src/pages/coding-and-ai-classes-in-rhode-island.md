---
title: "Coding and AI Classes in Rhode Island | Live Online"
description: "Live online coding and AI classes for Rhode Island students: the 0.5 credit CS proficiency expectation, six state CS concepts, and a Providence tree data project."
canonical: https://learn.modernagecoders.com/coding-and-ai-classes-in-rhode-island
source: src/pages/coding-and-ai-classes-in-rhode-island.html
---
> At minimum half a credit. Under Rhode Island&rsquo;s Readiness-Based Graduation Requirements, the default expectation is that every student earns 0.5 credits of computer science in middle or high school and shows proficiency against the state CS standards. Modern Age Coders teaches Rhode Island students live online, from a first block program to AP Computer Science Principles.

[Home](/) / [United States](/coding-classes-in-united-states) / Rhode Island

Rhode Island, United States / Live online

# Coding and AI classes in Rhode Island

**What computer science does a Rhode Island student need to graduate?** At minimum half a credit. Under Rhode Island&rsquo;s Readiness-Based Graduation Requirements, the default expectation is that every student earns 0.5 credits of computer science in middle or high school and shows proficiency against the state CS standards. Modern Age Coders teaches Rhode Island students live online, from a first block program to AP Computer Science Principles.

The smallest state has set one of the clearest expectations in the country. According to CS4RI, the state&rsquo;s computer science initiative, a Rhode Island student is expected to leave school proficient in computer science, and half a credit earned in sixth grade or in twelfth can carry that proof. Half a credit is a floor, not a ceiling. This page explains the six concepts that proficiency is measured against, what the published access and enrollment figures show, a distance-calculation project on the City of Providence street tree inventory, and how live online classes help a student go well past the minimum without leaving home in Woonsocket, Westerly or anywhere between.

Facts last verified 17 October 2026. Teaching is online; no Rhode Island branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 15 to 20 students per group.

## Four routes through the six concepts

Each course leans on different concepts from the state list. The free lesson tells us which route suits your student.

- [Coding for Kids](/courses/kids-coding-blocks-masterclass) (Grades K to 5): Computational thinking from the very start: sequences, loops and events in blocks, ending in games a child built alone.
- [JavaScript for Teens](/courses/javascript-course-for-teens-beginners-interactive-web) (Grades 6 to 9): Interactive web pages in JavaScript, a natural home for digital literacy and programming in the middle school band.
- [Cybersecurity for Teens](/courses/cybersecurity-course-for-teens-ethical-defensive) (Grades 9 to 12): Defensive, ethical security: passwords, networks and safe practice, matching the cybersecurity concept Rhode Island names.
- [AP Computer Science Principles](/courses/ap-computer-science-principles-exam-prep-course) (Grades 10 to 12): AP Computer Science Principles, including the Create task, for students who want proficiency on a national scale.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Rhode Island&rsquo;s computer science proficiency rule in plain terms

As CS4RI states it, read on 17 October 2026. The Rhode Island Department of Education site refused our request that day, so its own guidance is not quoted here.

**The CS proficiency expectation as CS4RI describes it**

| Question | Answer from CS4RI |
|---|---|
| What is expected? | That all students graduate proficient in computer science |
| Through which rules? | The Readiness-Based Graduation Requirements |
| How much course time? | At minimum, 0.5 credits of computer science |
| When can it be earned? | During secondary school, in middle or high school |
| What must the credit show? | Proficiency based on the Rhode Island Standards for Computer Science |
| Measured against what? | Six proficiency statements, one for each core concept, banded for grades 6 to 8 and 9 to 12 |

### Who CS4RI is

CS4RI describes itself as a state initiative launched in 2016 by the Governor&rsquo;s office, working in partnership with the Rhode Island Department of Education, schools, colleges and employers.

### A default, not a ceiling

The wording is a default expectation of at least half a credit. Districts decide how students meet it, and a determined student can take far more.

### Check with the school

The exact course that counts, and when a given class year is first affected, is set by the district and RIDE. We do not restate dates we could not read at the source.

## How far is each Providence street tree from its nearest neighbor?

The City of Providence publishes its street tree inventory under an Open Data Commons Attribution licence, credited to the Forestry Division. With 27,250 points it is big enough to need a clever algorithm and small enough to run on a laptop.

**Providence Tree Dataset: our results from the download of 17 October 2026 (27,250 trees, API count matched)**

| What we measured | Our result |
|---|---|
| Distinct species labels | 191 |
| Most common labels | Callery pear 3,283, honey locust 2,241, London plane 2,122 |
| Median distance to the nearest other tree | 9.7 meters |
| Mean distance to the nearest other tree | 11.2 meters |
| Trees more than 100 meters from any other | 13, with the loneliest 212 meters from its neighbor |
| Trees within half a meter of another tree | 74, a clue to duplicate records rather than twin trunks |
| Median distance to the nearest tree of the same species | London plane 11.5 meters, pin oak 13.9 meters |

### 1. Distance on a sphere

Latitude and longitude are angles, not meters. Students write the haversine formula in Python and test it on two points they can check on a map.

### 2. Make it fast

Comparing every tree with every other means about 370 million pairs. Dropping trees into a grid of small squares and searching only nearby squares turns minutes into seconds.

### 3. Doubt the outliers

Seventy-four trees sit almost on top of another. Are they real, or the same tree entered twice? Students decide how to treat them and say what changed.

### Ours, and dated

These distances are our own calculation from one download. The city&rsquo;s description says the inventory began in 2006 with trained volunteers and that trees in parks and on other public property were not included, so a large gap may simply be a park. None of these figures is an official City of Providence statistic.

This is Data and Analysis, one of Rhode Island&rsquo;s six concepts, done properly: gather the data, compute something defensible, and explain its limits. A ninth grader can run the haversine step on a sample of a few hundred trees; an AP student can build the grid search and compare its answers with a slow brute-force check.

## What Rhode Island means by proficient in computer science

CS4RI lists six proficiency statements tied to the Rhode Island CS Education Standards, which it says were endorsed by the Rhode Island Council for Elementary and Secondary Education.

**The six core concepts named by CS4RI, with a short paraphrase, and where each appears in our classes (third column ours)**

| Concept | In brief | In our classes |
|---|---|---|
| Computational Thinking and Programming | Writing programs; breaking problems down, then testing and evaluating solutions | Every course, from blocks to Java |
| Computing Systems and Networks | Troubleshooting hardware and software errors in networked devices | Setup, debugging and web projects |
| Cybersecurity | Recognizing online risks and responding to security breaches | The teen cybersecurity course |
| Data and Analysis | Gathering, analyzing and presenting data, aware of bias in collection | The Providence tree project above |
| Digital Literacy | Choosing the right software tools and synthesizing digital information | Research and documentation habits in every project |
| Responsible Computing in Society | Safe, ethical use of technology and its effects on people | Discussion in each AI unit |

CS4RI&rsquo;s mission statement aims for computer science instruction as early as kindergarten and for access that meets the 2018 CS Education Standards, with high school pathways meeting the 2018 CS CTE standards. Cybersecurity standing as a concept of its own is unusual among state frameworks, and it makes the state list a useful checklist even for families outside a school course.

## Access, enrollment and AP in Rhode Island

Quoted from Code.org and the College Board. Empty years stay empty.

**Rhode Island high schools offering foundational CS, as a percentage, Code.org (2025)**

| Year | Rhode Island |
|---|---|
| 2018 to 2019 | 86% |
| 2019 to 2020 | 86% |
| 2020 to 2021 | 86% |
| 2021 to 2022 | 80% |
| 2022 to 2023 | 82.5% |
| 2023 to 2024 | 79.4%, which the latest count gives as 50 of 63 high schools |
| 2024 to 2025 | Not published for Rhode Island |

### Enrollment

Code.org reports 8,172 of 44,533 high school students in a CS course in 2022 to 2023, or 18.35%, up from 11.3% the year before. The base is NCES enrollment for fall 2022.

### AP schools

The College Board counts Rhode Island schools giving any AP exam at 72, then 78 between 2023 and 2024: public schools 55 and 59, non-public 17 and 19.

### Reading it

Access was already high in 2018 to 2019 and has hovered near four in five schools since. Enrollment is where the movement shows, which fits a rule that asks every student for a credit.

Citation for the access and enrollment figures: Code.org (2025). 2025 State of AI + CS Education. We print single Rhode Island values; the full dataset belongs to its publisher. The link we draw between the rule and the enrollment rise is our reading, not a finding either source states.

## Eastern Time in the Ocean State

Rhode Island is in the IANA database&rsquo;s US eastern group, which uses the America/New_York zone.

### Autumn 2026

Clocks in Providence fall back on Sunday, November 1, 2026. From then, India time runs ten and a half hours ahead of Rhode Island.

### Spring 2027

They spring forward on Sunday, March 14, 2027, and the difference shrinks to nine and a half hours for the summer.

### What families see

Every class time we send is written in Eastern Time first, so nobody has to do the arithmetic.

## Past the half credit, one rung at a time

Suggested grade ranges only. The placement lesson decides the first rung.

- **Grades K to 5: Think like a programmer** Blocks, patterns and small games that a child can explain step by step. [Coding for Kids](/courses/kids-coding-blocks-masterclass), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **Grades 6 to 8: The proficiency band** Typed code, web pages and first datasets, aligned to the grade 6 to 8 statements. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [JavaScript for Teens](/courses/javascript-course-for-teens-beginners-interactive-web)
- **Grades 9 to 10: Depth and security** Python in depth and defensive cybersecurity, two concepts many schools touch only briefly. [Python for Teens](/courses/python-complete-masterclass-teens), [Cybersecurity for Teens](/courses/cybersecurity-course-for-teens-ethical-defensive)
- **Grades 11 to 12: AP and AI** AP Computer Science Principles and machine learning on data the student has examined. [AP Computer Science Principles](/courses/ap-computer-science-principles-exam-prep-course), [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens)

## Responsible computing is the part AI cannot do for you

Rhode Island lists Responsible Computing in Society as a concept in its own right, and AI tools make it urgent.

Ask an AI assistant for the average gap between Providence street trees and it will produce a number. Whether that number counts the 74 near-duplicate points, or knows that park trees were left out of the inventory, is another matter. Only someone who has handled the data can tell.

We teach students to use AI the way the state concept describes technology: safely, ethically, and with an eye on who is affected. That means checking outputs against the source, citing what they used, and keeping graded school work their own. Students under 18 use only AI tools whose terms allow their age.

A half-credit course can introduce these ideas; building real projects is how they stick. The longer argument is in [the case for learning to code now](/blog/is-coding-worth-learning-2026).

## From Newport to Pawtucket, the same live lesson

In a state this compact, the hardest part of an after-school class is often the drive. Online removes it.

- **Taught live** The teacher sees the student&rsquo;s screen and code as they work, which is how small misunderstandings get fixed before they grow.
- **School-aware** Lessons follow US grade levels and the school year, and can connect to a school CS course. The student&rsquo;s graded assignments stay their own work.
- **Pick a time** Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.
- **Group batches** Between fifteen and twenty learners matched on level, from Rhode Island and across the US.
- **One to one** A dedicated teacher for a student who wants speed, AP support or help with a particular project.
- **Free start** The opening lesson costs nothing, uses a real task, and ends with a suggested course and level.

**No Rhode Island premises** We do not have, and do not claim, any center in Rhode Island. Teaching happens live online from India; a computer, sound and a dependable internet connection are all a student needs.

## Fees for Rhode Island families

Three numbers, the same in every town.

- First class: USD 0. A complete first lesson with no charge, followed by a recommendation for course, level and time.
- Group tuition: USD 100 a month. One month of live lessons in a skill-matched batch of fifteen to twenty.
- Private tuition: USD 150 a month. One month on the same schedule with a single teacher for a single student.

Rhode Island families pay one rate in US dollars. We bill only after the free lesson and after you have agreed the course and time; the pricing page covers holidays and missed sessions.

## Rhode Island coding and AI questions

### How much computer science does Rhode Island expect for graduation?

CS4RI says the Readiness-Based Graduation Requirements set a default expectation of at least 0.5 credits of computer science, earned in middle or high school, with proficiency shown against the state CS standards.

### Can a middle school course count?

Yes. CS4RI says the half credit can be earned during the secondary school experience, in middle or high school.

### What are the six Rhode Island CS concepts?

Computational Thinking and Programming, Computing Systems and Networks, Cybersecurity, Data and Analysis, Digital Literacy, and Responsible Computing in Society.

### When were the Rhode Island CS standards written?

CS4RI refers to the 2018 CS Education Standards and says they were endorsed by the Rhode Island Council for Elementary and Secondary Education.

### How many Rhode Island high schools offer computer science?

Code.org (2025) reports 50 of 63 Rhode Island high schools, about 79.4%, offering foundational computer science in 2023 to 2024.

### How many Rhode Island students take computer science?

Code.org reports 8,172 of 44,533 high school students, or 18.35%, enrolled in computer science in 2022 to 2023.

### Do your classes meet the Rhode Island requirement?

No. Only school courses approved locally count. We add skill, speed and portfolio projects on the side, while anything a school grades remains the student's work.

### When do classes run for Rhode Island students?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are given in Eastern Time.

### Is there a Rhode Island office?

No. Modern Age Coders has no office or center in Rhode Island. All classes are live and online, taught from India.

### Where are the fees shown?

Scroll up to the fees panel. It shows three figures, for the no-cost opening lesson, a month in a group and a month one to one, and we bill nothing until after that opening lesson.

## Where Rhode Island students go next

For the national exam route, see [AP Computer Science Principles coaching](/ap-computer-science-principles-online-coaching). Students who like building under a deadline can read about [hackathons for high school students](/hackathons-for-high-school-students), and the [North Carolina page](/coding-and-ai-classes-in-north-carolina) shows how another state wrote CS into graduation.

## Contact

Book the free class on [https://learn.modernagecoders.com/coding-and-ai-classes-in-rhode-island](https://learn.modernagecoders.com/coding-and-ai-classes-in-rhode-island#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
