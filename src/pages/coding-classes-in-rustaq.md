---
title: "Coding Classes in Rustaq | Modern Age Coders"
description: "Live online coding, Python and AI classes for Rustaq learners aged 6 to 67, with a falaj rotation project in real code, clear USD fees and a free first class."
canonical: https://learn.modernagecoders.com/coding-classes-in-rustaq
source: src/pages/coding-classes-in-rustaq.html
---
> Live online coding, Python and AI classes for Rustaq learners aged 6 to 67, with a falaj rotation project in real code, clear USD fees and a free first class.

Skip to contentCourse picks

## Divide, wrap, and land on the right day

Four routes from counting in groups to writing scheduling code that survives the end of a cycle.

[![Microsoft Office for Kids course thumbnail](/images/microsoft-office-kids.webp)Ages 8 to 13Microsoft Office for KidsBuild a rota nobody has to remember.See the syllabus](/courses/microsoft-office-kids-mastery)[![MySQL for Teens course thumbnail](/images/mysql-teens.webp)Ages 14 to 18MySQL for TeensStore a turn so a query can find it.See the syllabus](/courses/mysql-mastery-for-teens)[![Full-Stack Web for Teens course thumbnail](/images/react-teens.webp)Ages 14 to 18Full-Stack Web for TeensShow a schedule that wraps correctly.See the syllabus](/courses/full-stack-web-development-teens-masterclass)[![Python AI Automation course thumbnail](/images/python-automation-ai-college.webp)College and adultPython AI AutomationAutomate a rota and test the boundary.See the syllabus](/courses/python-ai-automation-masterclass-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex and Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex and Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Rustaq today

## A former capital that measures water in half hours

Rustaq sits under the central Al Hajar Mountains with date palm groves and aflaj, and its oldest technology is a scheduling system.

### A falaj on the UNESCO list

Falaj Al-Muyassar is one of the five aflaj inscribed by UNESCO in 2006, and it is among the most significant in Wilayat Al Rustaq. It is a Dawoodi falaj reaching a depth of 50 metres, with a recorded flow of 210 litres per second.

### Water measured in athar, not litres

A shareholder does not receive a volume, they receive a turn. An athar is 30 minutes of flow. Twenty four athar make a baddah of twelve hours, and the rotation, the dawaran, typically comes round every seven to fourteen days.

### Three named roles keeping it honest

A wakil is elected to run the falaj. Arifs regulate the timing of the underground and surface sections, and a qabidh keeps the financial records. At night, timing is read from a known set of stars, which the wakil knows.

This is a scheduling system, and it predates the word

Fixed-length slots, a repeating cycle, a named administrator, an audit role and a dispute process. Every property a software engineer would list for a scheduler is present in a system built with a shovel and a knowledge of the stars. A learner in Rustaq does not need the concept explained to them. They need the notation.

Verified local facts

## Rustaq facts with a trail behind them

Named, dated and measured, with the scope of each claim stated.

### A fort with a measured tower

Al Rustaq Fort dates to the 13th century, built on earlier ruins and expanded by the Ya'aruba dynasty between 1624 and 1649. It carries four tall towers, the tallest more than 18 metres high, with the old souq beside it.

### A castle from the early 18th century

Al Hazm Castle was built by Imam Sultan bin Saif al Yarubi in the early 18th century. Two fortifications, two centuries apart, in one wilayat: a dataset about them needs a construction date field and a period field, not one column called age.

### The largest spring in northern Oman

Ain Al Kasfa lies about 1,500 metres west of Rustaq Castle and irrigates the palm farms around it. It carries the largest water volume of any spring in northern Oman and is known for its hot sulphurous water.

### A spring that moved when it was buried

During the Abbasid era a governor attempted to cover the springs and destroy the falaj systems. The landfill did not hold. The water rerouted and burst out about ten metres from the original source, and that is the water visible today.

### A wadi that runs all year

Wadi Al Hoqain lies about 45 kilometres from the city centre and has year-round flowing streams. Niyabat Al Hoqain sits about 150 kilometres from Muscat, which is the practical reason a family here does not drive to the capital for a weekly class.

### Once the capital of Oman

Rustaq came to prominence when Imam Nasser bin Murshid al Yarubi began his reign, and the town was once the capital of the country. Handicrafts, agricultural produce and Omani honey remain part of its economy.

Nothing above should be read as an endorsement, and none was sought. Rustaq is cited because a scheduling system that has run for centuries is a better teacher than any example we could design, and because every part of it can be checked.

Signature project

## The rota that schedules a turn on day nine of an eight day cycle

Forty eight athar in a day, eight days in the dawaran, 384 turns in the cycle. The obvious division is wrong for eight of them, and its worst answer names a day that does not exist.

### 1. Set the cycle out

An athar is half an hour, so a day is 48 athar. An eight day dawaran is 384 turns. The learner writes those three numbers down before writing any code, which is already more discipline than most scheduling bugs survive.

### 2. Divide the obvious way

To find the day for turn number t, divide t by 48 and add one. It looks right, it works for turn 1, turn 49 and turn 97, and it is wrong for turn 48, turn 96 and every other turn that lands exactly on a day boundary.

### 3. Shift, divide, shift back

Because the turns are numbered from 1 and the arithmetic counts from 0, the fix is to subtract one before dividing and add one after. Two characters of code, and the day boundaries land where the water actually changes hands.

| Turn | Naive division | Correct division | What happens |
| --- | --- | --- | --- |
| 1 | Day 1 | Day 1 | Agrees, which is why nobody checks further |
| 48 | Day 2 | Day 1 | The last turn of day one is moved to day two |
| 49 | Day 2 | Day 2 | Agrees again, so the error looks isolated |
| 96 | Day 3 | Day 2 | The same fault, one day later |
| 97 | Day 3 | Day 3 | Agrees |
| 384 | Day 9 | Day 8 | A day the eight day cycle does not have |

### Eight wrong turns out of 384, and every one is a boundary

The program was run before this table was written. Exactly eight turns in the cycle are placed on the wrong day, one in every forty eight, and every one of them is the last athar of a day. Testing turn 1 and turn 100 finds nothing. Testing the boundary finds all eight, which is the whole argument for testing boundaries rather than middles.

Reliable pipeline

## Cycles need a boundary test, not more care

Off-by-one errors are not carelessness. They are what happens when a system that counts from one meets arithmetic that counts from zero.

| Stage | Rule | What it prevents | What it gives you |
| --- | --- | --- | --- |
| Define | Write down where the numbering starts | One rule counting from 1 and another from 0 | A convention you can point at |
| Convert | Shift to zero-based, do the arithmetic, shift back | The classic boundary error | Correct wrapping at both ends |
| Bound | Reject a turn outside 1 to the cycle length | A day nine in an eight day cycle | A refusal instead of a wrong answer |
| Test | Test first, last and both sides of every boundary | A test suite that only checks the middle | The eight failures, named |
| Explain | Print the day and the athar within the day | A number nobody can argue with or check | A schedule a shareholder can read |

### For younger learners

A circle of twelve positions and a counter that walks round it. Children work out where they land after twenty steps, then after twenty five, and discover wrapping without anybody using the word modulo.

### For teenagers

Python computes the day for every turn in the cycle under both rules, counts the disagreements, and the learner writes the boundary tests that would have caught them before the count was needed.

### For adults

The rota becomes a schema and a scheduled job. Turn numbers are bounded, the conversion lives in one function with tests, and a request for a turn outside the cycle is an error rather than a silent extra day.

The athar, baddah and dawaran definitions on this page are the real ones, and Falaj Al-Muyassar's inscription, depth and flow are published figures. The eight-day cycle used in the project sits inside the documented seven to fourteen day range and is chosen for the arithmetic. No claim is made about the actual rotation of any falaj, which belongs to its shareholders.

Learning ladder

## From walking round a circle to running a scheduler

The free class picks the rung where the next real gain sits.

Ages 6 to 10

### Wrap around and land somewhere

Counting past the end of a circle and arriving back at the start.

[Elementary Mathematics](/courses/elementary-mathematics-complete-masterclass)[Kids Coding Blocks](/courses/kids-coding-blocks-masterclass)Ages 11 to 13

### Remainders on purpose

Division with a remainder becomes a tool rather than a leftover.

[Maths Through Coding](/courses/maths-through-coding)[Python and AI for Kids](/courses/python-ai-kids-masterclass)Ages 14 to 18

### Write it and break it

Teenagers implement the cycle and test both ends of every boundary.

[Python for Teens](/courses/python-complete-masterclass-teens)[JavaScript for Teens](/courses/javascript-course-for-teens-beginners-interactive-web)Ages 18 to 67

### Schedule things that matter

Adults build bounded, tested rotations with readable output.

[MySQL Database](/courses/mysql-database-complete-masterclass-college)[Data Analysis](/courses/data-analysis-mastery-course-college)Delivery

## Classes reaching a wilayat under the Hajar range

Rustaq sits inland under the mountains, with Niyabat Al Hoqain about 150 kilometres from Muscat. Distance is the argument, and the format is agreed before payment.

### No drive to the capital

A hundred and fifty kilometres each way is not a weekly commitment anybody keeps for a year. The class arriving at the learner is the only version of this that survives a full course.

### The first class is free

A real task, a real recommendation, no card. If the honest answer is that the learner should start somewhere else, that is what the teacher will say.

### Groups of five to eight

Matched on level and goal rather than age, so a group can hold a strong fourteen year old and a determined adult beginner working at the same pace.

### One to one for a deadline

An examination, a school project or a specific work problem is usually better served by a single teacher and a single learner.

### Two lessons each week

Normally eight live lessons a month at a recurring time, fixed once at enrolment rather than negotiated weekly.

### Timed to Oman

Oman runs one and a half hours behind India. School, work, examination periods and Ramadan routines are all discussed before the slot is confirmed.

The question a recording will never ask

When a learner writes a division that works on turn 1 and turn 100, no video stops them. A live teacher asks what happens at turn 48, waits, and lets the learner find it. That pause is the entire difference between watching programming and learning it.

Fees

## One free class, then group or private tuition

Pricing is in USD and is confirmed with the selected format.

First class**USD 0**

Ability task, goal review and starting recommendation.

Group tuition**USD 100**

Per month, normally eight lessons, five to eight learners.

Private tuition**USD 150**

Per month, normally eight lessons, one student and one teacher.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20want%20a%20free%20coding%20class%20for%20a%20learner%20in%20Rustaq.)Reviews

## What families and learners say

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

## Tell us where the learner is and what they want to build

The first task might be walking a circle, writing the day calculation, or checking a rota the learner already has to keep.

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [contact@modernagecoders.com](mailto:contact@modernagecoders.com). This is Modern Age Coders' actual contact and not an invented Rustaq number.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20want%20a%20free%20coding%20class%20for%20a%20learner%20in%20Rustaq.)

Submitted details are used for placement and follow-up.

FAQ

## Rustaq coding class questions

Local sources, project detail and service terms, answered separately.

### Is the falaj material on this page accurate?

The definitions are the published ones. An athar is 30 minutes, a baddah is 12 hours or 24 athar, and the dawaran typically runs seven to fourteen days, administered by an elected wakil with arifs on timing and a qabidh on the accounts. Falaj Al-Muyassar is one of the five aflaj UNESCO inscribed in 2006 and is in Wilayat Al Rustaq. Corrections from anyone who holds shares in a falaj are genuinely welcome.

### Does the project describe a real falaj rotation?

No, and the page says so. The eight day cycle is chosen from inside the documented seven to fourteen day range because the arithmetic is clearest there. A real rotation belongs to the shareholders who hold it and is not ours to publish. The scheduling behaviour is real and reproduces in any language.

### Is there a Modern Age Coders branch in Rustaq?

No. No premises are claimed in Rustaq or anywhere in Al Batinah South. Classes are live online and need a laptop or desktop, working audio, a current browser and a stable connection. The page describes where the service reaches, not a building.

### Why does the naive day calculation fail?

Because the turns are numbered from one and integer division counts from zero. Dividing turn 48 by 48 gives one, so adding one gives day two, but turn 48 is the last turn of day one. Subtracting one before dividing and adding one after puts every boundary back where it belongs. It is two characters and it is the most common bug in scheduling code anywhere.

### Can an adult in Rustaq study rather than a school student?

Yes, up to 67. Adults take Python, databases, web development, data analysis or AI automation subject to placement and teacher availability. A work or farm problem can shape the project as long as the data is public or the learner is authorised to use it, and confidential records are never uploaded into a class.

### What does a learner have after the Rustaq project?

A working rotation calculator, a set of boundary tests that fail on the old version, and the habit of asking where the numbering starts before writing the arithmetic. That last one transfers to every scheduling, paging and indexing problem they will ever meet.

### How much do Rustaq coding classes cost?

The first class is free. Standard group tuition is USD 100 per month for two live lessons each week, normally eight lessons monthly. Standard private tuition is USD 150 per month for one learner with one teacher on the same usual frequency. Course, format, recurring time and availability are confirmed before payment.

### What is the class size for Rustaq learners?

A group normally contains five to eight compatible learners. Compatibility includes current level, learning pace and objective, not age alone. Private tuition is one learner with one teacher. If no suitable group is ready, a learner can discuss private tuition or wait for an appropriate cohort.

### How are Rustaq class times arranged?

Oman is one and a half hours behind India. The teacher and learner agree a recurring time before payment, generally for two live lessons each week. Friday and Saturday options may be discussed subject to availability. School, work and transport schedules, examinations and Ramadan routines should be mentioned before confirmation.

### What happens in the free Rustaq class?

The teacher asks what the learner wants to be able to do and sets one task at that level. A child walks a circle of positions, a teenager writes the day calculation and is asked about turn 48, and an adult brings a real repeating schedule and is asked what happens at its boundary. The teacher then recommends a course, a format and a time, and states the USD fee. Nothing is charged for it.

Explore Oman

## Two other wilayats, two other faults in the same governorate and beyond

The [Oman coding hub](/coding-classes-in-oman) sets out national delivery and fees. Read [Barka](/coding-classes-in-barka) for parsing a date before sorting it, and [Al Batinah South](/coding-classes-in-al-batinah-south) for the governorate this wilayat sits in.

Book the free class[Close with WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20want%20a%20free%20coding%20class%20for%20a%20learner%20in%20Rustaq.)Free Rustaq class[Call +91 91233 66161](tel:+919123366161)

## Keep exploring Modern Age Coders

### Coding classes in nearby places

- [Coding Classes in Saham](/coding-classes-in-saham)
- [Online Coding Classes in Qurum](/coding-classes-in-qurum)
- [Coding Classes in Salalah](/coding-classes-in-salalah)
- [Coding Classes in Qurayyat](/coding-classes-in-qurayyat)
- [Coding Classes in Samail](/coding-classes-in-samail)
- [Online Coding Classes in Seeb](/coding-classes-in-seeb)
- [AI and Python Academy for Students in Salalah](/ai-and-python-academy-salalah)
- [AI and Python Academy for Students in Nizwa](/ai-and-python-academy-nizwa)
- [AI and Machine Learning Classes in Muscat](/ai-and-machine-learning-classes-in-muscat)

### Learn more

- [Python for 11 Year Olds: Functions](/python-for-11-year-olds)

### Free resources

- [Java Tutorial for Beginners to Advanced](/resources/java)
- [Loop Control and Pattern Printing](/resources/java/loop-control-and-patterns)
- [SQL Interview Masterclass](/resources/sql/sql-interview-masterclass)
- [Taking Input with Scanner](/resources/java/taking-input-in-java)

### From the blog

- [Python vs JavaScript: Which Should You Learn First?](/blog/python-vs-javascript-which-to-learn-first)
- [20 HTML, CSS, and JavaScript Project Ideas (With Code)](/blog/html-css-javascript-project-ideas)
- [How to Find HCF and LCM in Python (5 Easy Methods)](/blog/how-to-find-hcf-and-lcm-in-python)

### Start here

- [About Modern Age Coders, teaching since 2020](/about)
- [Modern Age Coders pricing, one honest price per plan](/pricing)

---

*Canonical: https://learn.modernagecoders.com/coding-classes-in-rustaq*
