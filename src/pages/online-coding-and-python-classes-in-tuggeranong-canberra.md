---
title: "Online Coding and Python Classes in Tuggeranong, Canberra"
description: "Live online coding and Python classes for Tuggeranong, ages 6 to adult, with a Python string project that cleans real ACT shelter and barbecue records."
canonical: https://learn.modernagecoders.com/online-coding-and-python-classes-in-tuggeranong-canberra
source: src/pages/online-coding-and-python-classes-in-tuggeranong-canberra.html
---
> Live online coding and Python classes for Tuggeranong, ages 6 to adult, with a Python string project that cleans real ACT shelter and barbecue records.

Skip to contentCourse picks for Tuggeranong

## Python, step by step

Courses that build careful string handling. The free trial lesson places the learner.

[![Python for Teens course thumbnail](/images/python-teens.webp)Ages 13 to 17Python for TeensStrings, methods and tests on messy public data.See the syllabus](/courses/python-complete-masterclass-teens)[![Python Masterclass course thumbnail](/images/python-college.webp)University and adultPython MasterclassPython from basics to dependable scripts.See the syllabus](/courses/python-programming-masterclass-zero-to-advanced-college)[![Python and AI for Kids course thumbnail](/images/python-kids.webp)Ages 8 to 12Python and AI for KidsFirst typed Python for children, one idea at a time.See the syllabus](/courses/python-ai-kids-masterclass)[![Data Analysis Course course thumbnail](/images/data-analysis-college.webp)University and adultData Analysis CourseCleaning text columns before any analysis.See the syllabus](/courses/data-analysis-mastery-course-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Tuggeranong in the 2021 Census

## Houses, cars and a big public tree count

Figures for the Tuggeranong statistical area (ABS SA3 80107) from 2021 Census QuickStats, read on 13 October 2026, with the ABS 2025 estimate.

| Measure | Value |
| --- | --- |
| Residents, 2021 Census | 89,461 |
| Estimated residents, 2025 | 90,199 |
| Median age | 38 |
| Families | 25,320 |
| Private dwellings | 35,314 |
| Motor vehicles per dwelling | 2.0 |

| Share | Tuggeranong | ACT |
| --- | --- | --- |
| Separate houses | 79.5% (26,178) | 63.2% |
| Drove a car to work | 66.8% (31,605) | 59.0% |
| Bachelor degree or higher | 28.7% (20,752) | 42.9% |
| Residents aged 10 to 14 | 6.4% (5,768) | 6.0% |

### A driving district

Two in three Tuggeranong workers drove to work in 2021, the highest share among the eight districts on our pages.

### Steady size

The 2021 count of 89,461 and the ABS 2025 estimate of 90,199 sit close together, unlike faster-growing districts.

### Courts

The ACT basketball court list places 13 public courts in Tuggeranong, more than any other district by our count.

The 2021 Census fell during the pandemic, so commuting answers describe that week. ABS figures are rounded and small counts lightly adjusted for privacy; parts may not sum to totals, and we print them as published.

Signature project

## The method that eats letters

Each ACT shelter record has a name such as "Clift Crescent Pedestrian Parkland Shelter". A learner wants the place without the last word and reaches for rstrip. The trouble is that rstrip(" SHELTER") does not look for the word; it removes any of the characters space, S, H, E, L, T and R from the end, for as long as it can.

| Records | rstrip result | removesuffix result |
| --- | --- | --- |
| 61 shelters, 49 ending in " SHELTER" | 9 names damaged | 49 trimmed, 12 untouched |
| Tuggeranong Town Centre Shelter | TUGGERANONG TOWN CEN | TUGGERANONG TOWN CENTRE |
| Pine Island / Point Hut Shelter | PINE ISLAND / POINT HU | PINE ISLAND / POINT HUT |
| Pine Island Central (no suffix) | PINE ISLAND CENTRA | PINE ISLAND CENTRAL |
| 33 barbecues ending in " BARBECUE" | All 33 end in ELECTRI | All 33 end in ELECTRIC |

### Why CENTRE dies

After removing " SHELTER", rstrip keeps going: the last letters of CENTRE are E, R, T and E, all in its set, so they go too and it stops at N.

### Why ELECTRIC loses its C

The barbecue suffix contains C, so every "Electric Barbecue" loses the final C of ELECTRIC as well.

### Right method

str.removesuffix, added in Python 3.9, removes the exact ending once and only if it is there. It even spares Pine Island Central, a name with no suffix that rstrip still clips to CENTRA.

### A second surprise

Across the whole ACT barbecue list, 311 names end in BARBECUE and 34 in BARBEQUE. Even the correct method leaves the 34 untouched, so learners count both spellings before choosing what to remove, and report how many records each rule changed.

Names come from the ACTGOV Shelter Assets and Barbecue Assets datasets on data.act.gov.au, licensed CC BY 4.0, downloaded on 13 October 2026. Which records are in Tuggeranong is decided by each record's suburb and our district mapping; all counts are from our own script.

Fixing it in Python

## Test the edge cases first

The lesson is as much about testing as about one method.

| Step | Learner task |
| --- | --- |
| 1 | Load Tuggeranong shelter and barbecue names and print ten of each. |
| 2 | Apply rstrip and list every name whose result is not the expected place. |
| 3 | Switch to removesuffix and check that untouched names really lacked the suffix. |
| 4 | Count suffix spellings across the ACT and write a rule that handles both. |

A good test set includes a name ending in CENTRE, a name ending in HUT and a name with no suffix at all. Learners who test only "Park Shelter" will see rstrip pass, because PARK ends in K, a letter outside the set. Tuggeranong data happen to contain all three cases, which makes them better teaching material than any invented list.

### Younger learners

Remove letters from the end of a word while they appear in a bag, and see which words survive.

### Teenagers

Write both versions with tests, then explain the bug in their own words.

### Adults

Audit clean-up scripts at work for rstrip, lstrip and strip used as if they removed whole words.

Around Tuggeranong

## Trees, bin days and the 2027 calendar

Local details from ACT Government open data.

### Most public trees

Tuggeranong suburbs hold 188,908 public tree records by our count, more than any other district, though 88,151 carry no native or exotic label.

### Tuesday bins

In the ACT NOWaste list, 17 of the 18 Tuggeranong suburbs put their garbage out on a Tuesday.

### Term 1, 2027

ACT public schools welcome new students on Monday 1 February 2027; Canberra Day is Monday 8 March.

District used

Tuggeranong is the ABS statistical area of about 159.6 square kilometres, with 18 named suburbs assigned by our test of ABS suburb outlines.

Learning ladder

## From letter games to string methods

A rough age guide; the trial decides.

Ages 6 to 10

### Blocks first

Scratch projects with words, lists and careful rules.

[Scratch Coding for Kids](/courses/scratch-programming-complete-course)[Coding for Kids](/courses/kids-coding-blocks-masterclass)Ages 10 to 14

### Typed Python

Strings, loops and first tests.

[Python and AI for Kids](/courses/python-ai-kids-masterclass)[Maths Through Coding](/courses/maths-through-coding)Ages 14 to 18

### Python with data

Cleaning real text and checking every change.

[Python for Teens](/courses/python-complete-masterclass-teens)[Data Science for Teens](/courses/data-science-course-for-teens-python-data)University and adult

### Python at work

Reliable scripts for data and automation.

[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)[Python Automation Course](/courses/python-ai-automation-masterclass-college)Python and AI

## Would an AI assistant make this mistake?

It can, and the result still looks plausible.

rstrip with a word argument looks right at a glance, so assistants and people both reach for it. On "Park Shelter" it works, which is exactly why nobody notices the Town Cen problem until a report goes out.

Tuggeranong learners test generated code on awkward real names and read the documentation for the method they are about to trust.

Our Python classes use AI as a fast helper and testing as the safety net. The longer argument is in [why reading code beats trusting it in 2026](/blog/is-coding-worth-learning-2026).

Delivery

## How Tuggeranong classes work

Lessons are live over video, so nobody has to drive into town after school.

### Live lessons

A teacher leads every class and checks code as it is typed.

### School terms

Classes follow ACT terms and pause during holidays.

### Free trial

One free lesson, then a written course plan.

### Groups

Fifteen to twenty learners at one level, or one to one.

### Rhythm

Two lessons a week, roughly eight a month.

### India timing

In winter a 5pm Tuggeranong lesson is 12:30pm in India; in summer it is 11:30am.

Canberra time

The IANA database links Canberra to Sydney time, with daylight saving from the first Sunday in October to the first Sunday in April.

Fees

## Tuggeranong class fees

Fees are the same for all learners.

First class**USD 0**

No charge for the first lesson, which includes a plan.

Group tuition**USD 100**

Groups: about eight lessons a month, fifteen to twenty learners.

Private tuition**USD 150**

One-to-one: about eight lessons a month with a single teacher.

Fees are billed in US dollars and only start when the trial has fixed the course and a weekly time. Holidays and missed lessons are covered on the pricing page.

Request placement[Check availability](https://wa.me/919123366161?text=Hi%20Modern%20Age%20Coders%2C%20I%20live%20in%20Tuggeranong%20and%20would%20like%20to%20book%20a%20free%20Python%20or%20coding%20lesson.)Reviews

## What families say on Google

Rated 4.9 across 547 Google reviews. These are real reviews, reproduced as written.

★★★★★

"The one step solution for my son. Modern Age Coders make learning coding so simple that kids love it. The teachers explain complex concepts clearly with practical exercises and interactive content."

Ria Mukherjee

Parent

★★★★★

"Modern Age Coders has been a game-changer for me. I struggled to grasp IT concepts and coding before joining, but their classes transformed everything. I can now confidently write complex programs with ease."

Samriddha Mondal

Student

★★★★★

"One of the most wonderful education centres out there. Education is not limited to school syllabus but focuses on skill development."

Vansh Agarwal

Student

★★★★★

"My child Dhairya is really enjoying the Modern Age Coders classes. This is his first online class and he eagerly looks forward to it. I can already see his improvement, and the teachers are very cooperative."

Sonam Oswal

Parent of Dhairya

★★★★★

"Modern Age Coders have wonderful teachers who teach in a clear, easy and practical way. The teacher boosts students' confidence and inspires them to learn without hesitation."

Sonu Goyal

Parent

★★★★★

"I highly recommend this computer coding class! The teachers are incredibly knowledgeable and passionate about coding."

Ritu Kedia

Parent

Free placement class

## Book a free Tuggeranong lesson

Tell us the learner's age and interests. Children might play the letter-bag game; teenagers might fix the shelter names.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Tuggeranong one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hi%20Modern%20Age%20Coders%2C%20I%20live%20in%20Tuggeranong%20and%20would%20like%20to%20book%20a%20free%20Python%20or%20coding%20lesson.)

Submitted details are used for placement and follow-up.

FAQ

## Tuggeranong coding and Python questions

Questions from Tuggeranong families and adult learners.

### What was Tuggeranong's population?

The 2021 Census counted 89,461 residents in the district, median age 38. The ABS estimate for 2025 is 90,199.

### What does rstrip actually do?

It removes characters from the end of a string while they belong to the set you pass in. It never treats the argument as one word.

### What should I use instead?

str.removesuffix, available from Python 3.9, removes an exact ending once if it is present.

### Why test with real data?

Real names include awkward cases such as CENTRE and HUT that invented examples tend to miss.

### Is Python suitable for 10-year-olds?

Many start typed Python around 9 or 10 after some block coding. The free lesson checks readiness.

### How many shelters are in Tuggeranong?

The ACT shelter asset list places 61 shelters in Tuggeranong suburbs, as downloaded on 13 October 2026.

### Do you have a centre in Tuggeranong?

No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.

### What do Tuggeranong classes cost?

The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.

### How do you group learners?

By level and pace in groups of fifteen to twenty, not by age or suburb. One-to-one lessons suit anyone no group time fits.

### Can adults take Python lessons?

Yes. Adults learn in adult groups or privately, often to clean and report on data at work.

More for Canberra learners

## Other pages to try

South-side families can also read the [Canberra page](/vibe-coding-and-ai-agents-classes-in-canberra), our [ACT guide](/coding-and-ai-classes-in-australian-capital-territory), and [moving from Scratch to Python](/after-scratch-next-step-python-australia).

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hi%20Modern%20Age%20Coders%2C%20I%20live%20in%20Tuggeranong%20and%20would%20like%20to%20book%20a%20free%20Python%20or%20coding%20lesson.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/online-coding-and-python-classes-in-tuggeranong-canberra*
