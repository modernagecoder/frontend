---
title: "Online Coding and Python Classes in Perth, WA | Live Teacher"
description: "Live online coding and Python classes for Perth teenagers and adults, from first scripts to data structures, taught by a real teacher. Your first lesson is free."
canonical: https://learn.modernagecoders.com/online-coding-and-python-classes-in-perth-western-australia
source: src/pages/online-coding-and-python-classes-in-perth-western-australia.html
---
> Live online coding and Python classes for Perth teenagers and adults, from first scripts to data structures, taught by a real teacher. Your first lesson is free.

Skip to contentCourse picks for Perth

## Four ways into Python for a Perth learner

Picked by what you want to do with code, then levelled in the free lesson. Nothing is charged and no card is needed to start.

[![Python for Teens course thumbnail](/images/python-teens.webp)Ages 13 to 17Python for TeensPython from the first print statement to classes and files, with every exercise run on real data.See the syllabus](/courses/python-complete-masterclass-teens)[![Data Science for Teens course thumbnail](/images/data-science-teens.webp)Ages 14 to 18Data Science for TeensReading spreadsheets with Python, counting and charting them, and asking whether a result can be trusted.See the syllabus](/courses/data-science-course-for-teens-python-data)[![Python Masterclass course thumbnail](/images/python-college.webp)University and adultPython MasterclassA full Python course from zero, including how dictionaries, sets and lists behave under the hood.See the syllabus](/courses/python-programming-masterclass-zero-to-advanced-college)[![PCEP and PCAP Python Certification Course course thumbnail](/images/pcep-python-certification.webp)Adults seeking a credentialPCEP and PCAP Python Certification CoursePreparation for the Python Institute entry and associate exams, with each topic implemented in code first.See the syllabus](/courses/pcep-pcap-python-certification-course)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Greater Perth in the Census

## A city of two million spread across separate houses

QuickStats figures for the Greater Perth capital city area from the 2021 Census, next to the Western Australian and national results.

| Measure | Greater Perth | Western Australia | Australia |
| --- | --- | --- | --- |
| People | 2,116,647 | Not compared | Not compared |
| Median age | 37 | 38 | 38 |
| Families | 570,121 | Not compared | Not compared |
| Private dwellings | 882,374 | Not compared | Not compared |
| Occupied homes that are separate houses | 605,453, or 77.8% | Not compared | 72.3% |
| Occupied homes that are a flat or apartment | 59,492, or 7.6% | 6.5% | 14.2% |
| Residents aged 15 and over with a bachelor degree or higher | 454,538, or 26.5% | 23.8% | 26.3% |

### Houses, not flats

Only 7.6% of Greater Perth's occupied homes were flats or apartments in 2021, about half the national share of 14.2%.

### A professional city

Professionals were 250,973 of Greater Perth's employed residents, 23.7%, ahead of the Western Australian figure of 22.0%.

### Teenagers in Perth

Greater Perth counted 123,315 residents aged 15 to 19 at the Census, 5.8% of its people.

One habit we keep when quoting a census. Each cell of a QuickStats table is lightly adjusted for privacy, so a column's pieces may not add up to its printed total. This page repeats the totals and percentages the bureau publishes and never builds a new total by adding pieces together.

Signature project

## How does a dictionary find one school among 747 without checking them all?

The 747 distinct school names in the North and South Metropolitan regions of the Department of Education list, stored in three kinds of hash table.

| Method and how full the table is | Average slots checked | Worst case |
| --- | --- | --- |
| Chaining, 747 buckets (as many buckets as names) | 1.459 | A bucket holding 4 names |
| Linear probing, half full | 1.431 | 11 slots |
| Linear probing, three quarters full | 2.134 | 30 slots |
| Linear probing, 90% full | 3.635 | 65 slots |
| Cuckoo hashing, any load that builds | At most 2 | 2 slots, always |

### 1. Chaining

Each name is hashed to one of 747 buckets and clashing names share a short list. The longest list held 4 names, and 265 buckets were left empty.

### 2. Linear probing

If a slot is taken, step to the next one. Fine when the table is half empty; at 90% full one lookup needed 65 steps.

### 3. Cuckoo hashing

Every name has two possible slots in two tables. A newcomer evicts the occupant, who moves to its other slot. Lookups never check more than two places.

| How full both tables are together | Failed builds | Longest chain of evictions |
| --- | --- | --- |
| 40% | 1 of 200 | 27 |
| 45% | 4 of 200 | 41 |
| 49% | 21 of 200 | 57 |
| 52% | 52 of 200 | 69 |
| 55% | 103 of 200 | 81 |

### Fast lookups, fragile inserts

Cuckoo hashing makes reading cheap and writing risky. Past roughly half full, a growing share of builds ran into an endless loop of evictions and had to start again with new hash functions: 103 of 200 attempts failed at 55%. Linear probing never fails outright but slows sharply as it fills. Neither is better in every case, which is why measuring your own data beats choosing by name.

The figures are ours. The hash function is BLAKE2b with a different salt for each attempt, chosen so the results can be repeated; Python's own hashing of strings changes from one run to the next. The school list changes as schools open and close, so a later download will give slightly different counts. Only the school names are used, with no enrolment or results data.

Hash tables in practice

## What a Perth learner takes from 747 school names

The same ideas sit under every dictionary, set, cache and database index a programmer will use.

| Idea from the project | Where it shows up in Python | The habit it builds |
| --- | --- | --- |
| Load factor | Dictionaries and sets grow themselves before they fill | Expect resizing and do not fear it |
| Collisions | Two keys can share a hash slot | Never assume a hash is unique |
| Worst case versus average | Average lookups are quick; unlucky ones are not | Look at the worst case, not just the mean |
| Deterministic hashing | String hashes change between runs unless fixed | Fix a seed when you need repeatable results |
| Measure, do not guess | Count probes with a small wrapper | Claims about speed come with numbers |

The Python documentation answers the question directly: "CPython’s dictionaries are implemented as resizable hash tables." Learners who have built one by hand read that sentence differently. They know a resizable table exists because a full one slows down, and they know why their dictionary still feels instant with thousands of keys.

### Teenagers

Write each hash table in plain Python, load the real Perth school names, and graph probe counts as the table fills.

### University students

Compare the three methods on larger lists and explain the results in terms of load factor and clustering.

### Adults

Use dictionaries and sets with confidence in scripts at work, and know when a lookup table will beat repeated searching.

Modern Age Coders is independent of the Western Australian Department of Education, the statistics bureau and the Python Software Foundation. The census counts are published by the bureau; the probe counts and failed builds on this page are our own calculations from the department's public school list.

Around Perth

## Two and a half hours from India and a school year in four terms

Two facts that shape when a Perth learner can study with us.

### Western Standard Time

Perth runs on Australian Western Standard Time, eight hours ahead of UTC, and does not use daylight saving, according to the IANA time zone database.

### Daylight saving trials

The same database records several trial periods of daylight saving in Western Australia; the last one ended in March 2009.

### Terms in 2027

The Department of Education lists four terms for 2027, starting on Monday 1 February and ending on Thursday 16 December.

Why the time gap is good news

Perth is only two and a half hours ahead of India time, the smallest gap of any Australian capital. A 6pm lesson in Perth is 3:30pm for our teachers, comfortably inside their working day, and the gap stays the same all year.

Learning ladder

## From a first Python script to choosing the right data structure

Treat the ages as signposts only. The trial lesson sets the true starting point.

Ages 13 to 14

### First scripts

Variables, loops and lists in Python, ending with a script that reads a file and counts what is in it.

[Python for Teens](/courses/python-complete-masterclass-teens)[Maths Through Coding](/courses/maths-through-coding)Ages 15 to 18

### Dictionaries and sets

Hashing by hand, collisions and load factor, and when a dictionary beats a list by thousands of steps.

[Problem Solving for Teens](/courses/problem-solving-dsa-masterclass-teens)[Data Science for Teens](/courses/data-science-course-for-teens-python-data)University

### Structures and performance

Hash tables, trees and heaps compared on large data, with timing and counting built into every experiment.

[Data Structures & Algorithms Course](/courses/data-structures-algorithms-masterclass-college)[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)Adults

### Python at work

Automating reports, cleaning spreadsheets and building small web tools that hold up under real use.

[Python Automation Course](/courses/python-ai-automation-masterclass-college)[Python Web Development with Django and Flask Course](/courses/python-web-development-django-flask-course)Coding and AI

## If an AI assistant can write Python, why should a Perth student learn how a dictionary works?

Because generated code leans on dictionaries constantly, and only someone who understands them can tell when that choice is wrong.

Ask an assistant to remove duplicates or count words and the answer will almost always reach for a dictionary or a set, and usually that is right. Sometimes it is not: a generated script may rebuild a dictionary inside a loop, use a list where a set would be thousands of times faster, or rely on dictionary order in a way that breaks with older data. The code runs, so nobody notices until a file is ten times bigger than the test.

Learners who have pushed a hash table to 90% full and watched a lookup take 65 steps read generated code with sharper eyes. They spot the list scan that should be a set lookup, the table rebuilt on every pass and the assumption that keys never clash. That reading skill is what turns an assistant from a crutch into a useful colleague.

Machines can produce Python quickly; the value in 2026 is knowing which structure the problem needs and checking that the machine picked it, and a Perth learner who has built three hash tables can do exactly that. The longer argument is in [should teenagers still learn to code in 2026](/blog/is-coding-worth-learning-2026).

Delivery

## Joondalup to Rockingham, one lesson, no freeway

Greater Perth stretches a long way along the coast, and an online lesson reaches the northern suburbs, the hills and the south in exactly the same way.

### No drive across the city

Learners in Joondalup, Midland or Rockingham join the same live lesson from home, with nothing to book but the time.

### Western Australian year levels

Teachers use the same year levels as Perth schools and plan around the four WA school terms. Every lesson is in English.

### Trial lesson first

Bring a question or a project idea; leave with a working piece of code and a recommended course and time. No payment details are taken.

### Level-matched groups

Groups of fifteen to twenty at the same stage, drawn from Perth and other places in a similar time zone, so evening slots fill easily.

### Two lessons a week

Around eight a month in a regular slot, with breaks for school holidays and exams arranged with the teacher in advance.

### Two and a half hours to India time

Perth is 2 hours 30 minutes ahead of our teachers throughout the year, so a 4:30pm Perth lesson is at 2pm in India.

No clock change to plan for

Western Australia does not use daylight saving, and neither does India, so a Perth lesson time never shifts during the year. Times are still always confirmed in Perth time.

Fees

## What classes cost in Perth

Three numbers, set out plainly.

First class**USD 0**

One whole lesson at no cost, after which you get a level, a suggested course and a regular time.

Group tuition**USD 100**

A month of lessons, typically eight, alongside fifteen to twenty learners at your level.

Private tuition**USD 150**

About eight lessons each month in the same pattern, with one teacher for one learner.

Every family outside India pays in US dollars at a single rate, so Fremantle and Ellenbrook see the same bill and there is no Perth price list. Nothing is charged until the trial is done and a course and time are agreed; the pricing page covers holidays, missed lessons and switching between group and private.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20online%20coding%20or%20Python%20class%20for%20a%20learner%20in%20Perth.)Reviews

## Google reviews in our families' own words

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

## Tell us what you want to build

We set the first task to suit: a first Python loop for a Year 8 student, a dictionary challenge for someone in Year 11, or the full school-name hashing project for an adult.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Perth one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20online%20coding%20or%20Python%20class%20for%20a%20learner%20in%20Perth.)

Submitted details are used for placement and follow-up.

FAQ

## Perth online coding and Python questions

Questions Perth learners and parents ask us before starting.

### How many people live in Greater Perth?

Greater Perth had 2,116,647 residents at the 2021 Census, with a median age of 37, a year younger than both Western Australia and Australia.

### What is a hash table?

A hash table stores items by turning each key into a number, called a hash, and using that number to pick a slot. Looking up a key means hashing it again and checking that slot, so most lookups take a step or two however many items are stored.

### What is cuckoo hashing?

Cuckoo hashing gives every key two possible slots in two separate tables. When a new key lands on an occupied slot it pushes the old key out, and the old key moves to its other slot. Lookups only ever check two places, but inserts can fail if the tables get too full.

### What is the Perth school-name project?

Learners store the 747 distinct school names from the Department of Education list for the North and South Metropolitan regions in three kinds of hash table, then count how many slots each lookup checks and how often each table fails as it fills.

### Do I need to know any programming before starting?

No. Beginners start with simple Python scripts, and the free lesson places everyone at the right level. Learners who already code move straight on to data structures and projects.

### What time are lessons for Perth learners?

After school, in the evening or at the weekend, chosen during the trial and always given in Perth time. Perth is two and a half hours ahead of India time all year.

### Can younger children learn with you?

Yes. We teach from age 6, starting younger learners with Scratch and visual projects. This page is written for teenagers and adults, but the free lesson works for any age.

### Is there a Modern Age Coders centre in Perth?

No, and none is claimed. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.

### What do Perth coding classes cost?

The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.

### How big are the groups?

Fifteen to twenty learners, matched on level, pace and what they want to build rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.

Explore Australia

## More for Perth and Australian learners

Younger Western Australian students working towards the GATE program can read [WA GATE and ASET maths practice](/wa-gate-aset-maths-practice). Learners moving on from block coding should see [the step from Scratch to Python](/after-scratch-next-step-python-australia), and anyone unsure which language to start with can compare them in [coding languages for Australian learners](/kids-coding-languages-australia). All our Australian pages are listed on the [Australia coding page](/coding-classes-in-australia).

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20online%20coding%20or%20Python%20class%20for%20a%20learner%20in%20Perth.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/online-coding-and-python-classes-in-perth-western-australia*
