---
title: "Coding Classes in Shinas | Modern Age Coders"
description: "Live online coding, Python and AI classes for Shinas learners aged 6 to 67, with a bilingual text-handling project, clear USD fees and a free first class."
canonical: https://learn.modernagecoders.com/coding-classes-in-shinas
source: src/pages/coding-classes-in-shinas.html
---
> Live online coding, Python and AI classes for Shinas learners aged 6 to 67, with a bilingual text-handling project, clear USD fees and a free first class.

Skip to contentCourse picks

## Store a name, size a field, keep the name whole

Four routes from typing in two scripts to designing schemas that hold every name somebody actually has.

[![Microsoft Office for Kids course thumbnail](/images/microsoft-office-kids.webp)Ages 8 to 13Microsoft Office for KidsType in two scripts and watch the column.See the syllabus](/courses/microsoft-office-kids-mastery)[![Maths Through Coding course thumbnail](/images/maths-through-coding.webp)Ages 9 to 14Maths Through CodingCounting things that are not all the same size.See the syllabus](/courses/maths-through-coding)[![MySQL for Teens course thumbnail](/images/mysql-teens.webp)Ages 14 to 18MySQL for TeensChoose a column length in the right unit.See the syllabus](/courses/mysql-mastery-for-teens)[![Python AI Automation course thumbnail](/images/python-automation-ai-college.webp)College and adultPython AI AutomationImport a bilingual file without losing letters.See the syllabus](/courses/python-ai-automation-masterclass-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex and Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex and Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Shinas today

## A border wilayat that records everything twice

Trade across a frontier means paperwork in two languages, and two languages mean two very different answers to how long is this name.

### One of the Sultanate's main land crossings

Shinas is one of the six coastal wilayats of Al Batinah North and is bordered to the north by the United Arab Emirates, overlooking some of the Sultanate's most important land crossings. A crossing is where two record systems have to agree with each other.

### A port with a measured throughput

Shinas Port handled 88,000 tonnes over a twelve month period, mainly building materials, food, live animals and chemical and pharmaceutical products traded between Oman and Iran. Traditional dhows still sail from it and fresh fish still supplies local markets.

### Plains irrigated by aflaj

The wilayat has fertile agricultural plains using aflaj irrigation to produce a range of fruit and vegetables. Farm records, port records and market records all describe the same place in different vocabularies, which is its own kind of translation problem.

Length is not one measurement, it is three

A string has a length in characters, a length in bytes, and a width on screen, and those three numbers are equal only for plain English. Software that says length without saying which one has already made a decision on your behalf, and it is usually the wrong one for anywhere bilingual.

Verified local facts

## Shinas detail with a trail behind it

Measured, located and dated, with the scope of each claim stated.

### Eighty eight thousand tonnes in a year

That figure covers a twelve month period at Shinas Port. It is a throughput, not a capacity and not a peak, and the difference between those three matters as much here as anywhere the number gets quoted.

### Four cargo categories, not one

Building materials, food, live animals, and chemical and pharmaceutical products are four categories with four different handling rules. Any total that mixes live animals with cement has answered a question nobody sensible asked.

### Dhows alongside the commercial berths

Traditional dhows still work from the port and fresh fish is landed for local markets. Two kinds of vessel and two kinds of record, running through the same water.

### A frontier that is also a data boundary

A wilayat bordering another country handles documents produced under two systems of transliteration. The same place name can arrive spelled several ways, which is why the identifier and the display name have to be separate fields.

### One of six coastal wilayats

Shinas is one of the six coastal wilayats of Al Batinah North, alongside Sohar, Saham, Al Khaburah, As Suwaiq and Liwa. Six neighbours on one coast is six sets of records that will eventually need joining.

### Agriculture beside the trade

The fertile plains behind the port produce a diverse range of fruit and vegetables under aflaj irrigation. A wilayat with both a port and a harvest has two economies on two calendars, and a single monthly figure describes neither.

No organisation named above has any connection to Modern Age Coders. They appear because a project about bilingual text needs a genuinely bilingual place, and Shinas is one whose published record a learner can go and read.

Signature project

## The field that fits every English name and cuts an Arabic one

Twenty is a perfectly reasonable size for a name field. It just means two different things depending on which unit somebody had in mind.

### 1. Take the same names in both scripts

The learner writes out place names from the wilayat and its neighbours in Latin script and in Arabic, then counts each one two ways: how many characters, and how many bytes when stored as UTF-8.

### 2. Find where the two counts diverge

A Latin letter costs one byte. An Arabic letter costs two. So a name of eleven Latin characters is eleven bytes, and a name of eleven Arabic characters is twenty two. The character count says they are the same size. The storage says otherwise.

### 3. Watch a field cut one and not the other

Put both through a field limited to twenty bytes. Every Latin name of twenty characters or fewer survives. A fourteen character Arabic name loses three of its letters, and what comes back is a word that is not the name of anywhere.

| Name | Latin characters | Latin bytes | Arabic characters | Arabic bytes | Result |
| --- | --- | --- | --- | --- | --- |
| Shinas | 6 | 6 | 4 | 8 | Both fit |
| Al Khaburah | 11 | 11 | 8 | 16 | Both fit |
| Sanaa Bani Ghafir | 17 | 17 | 14 | 26 | Arabic loses 3 of its 14 characters |
| A twenty character Latin name | 20 | 20 | n/a | n/a | Fits exactly |
| A twenty character Arabic name | n/a | n/a | 20 | 40 | Half of it is discarded |

### The field is not too small, the unit was never stated

Nobody chose to truncate anybody's name. Somebody wrote twenty, somebody else implemented it in bytes, and the two never spoke. That is why this is worth an hour: it is not a hard bug, it is an invisible one, and the people it affects are exactly the people whose names were not the default.

Reliable pipeline

## Say which unit, then pick a size that fits reality

Three habits, none of them difficult, and together they remove a whole family of problems that only shows up in production.

| Stage | Rule | What it prevents | What you get |
| --- | --- | --- | --- |
| Declare | Say whether a limit is characters or bytes | Two people implementing two different fields | A spec that can be checked |
| Encode | Use UTF-8 end to end and say so | A name arriving as question marks | Text that survives every hop |
| Size | Size the field for the longest real name, not the average | A limit that works until it does not | Room for the names you actually serve |
| Validate | Reject an over-length value instead of trimming it | A silently shortened name nobody notices | An error somebody can act on |
| Test | Put a real Arabic name in the test suite | A suite that only ever sees ASCII | A failure before a customer finds it |

### For younger learners

Two words of the same visible length written in the two scripts, and a box drawn round each to show how much room the computer gives them. Children see the mismatch before anybody uses the word encoding.

### For teenagers

Python counts the same strings with len and with len of the encoded bytes, and the learner explains the gap. They then write the check that rejects an over-length value rather than quietly cutting it.

### For adults

Column types are chosen with the unit stated, imports validate before writing, and the test data includes at least one name in each script the system will actually receive.

The port throughput, the border position, the cargo categories and the aflaj are published facts. The field limit of twenty is a teaching value chosen because it makes the arithmetic legible. The byte costs are not a choice: they are how UTF-8 works, everywhere, for everyone.

Learning ladder

## From two words in a box to a schema that holds every name

The free class finds the rung with the next real gain on it.

Ages 6 to 10

### Same word, different room

Seeing that two scripts do not take the same space.

[Elementary Mathematics](/courses/elementary-mathematics-complete-masterclass)[Kids Coding Blocks](/courses/kids-coding-blocks-masterclass)Ages 11 to 13

### Counting what a computer counts

Learners meet the idea that a length depends on the unit.

[Maths Through Coding](/courses/maths-through-coding)[Python and AI for Kids](/courses/python-ai-kids-masterclass)Ages 14 to 18

### Measure it both ways and choose

Teenagers write the counts, the check and the failing case.

[Python for Teens](/courses/python-complete-masterclass-teens)[JavaScript for Teens](/courses/javascript-course-for-teens-beginners-interactive-web)Ages 18 to 67

### Design for the names you serve

Adults specify the unit, size the column and test in both scripts.

[MySQL Database](/courses/mysql-database-complete-masterclass-college)[Data Analysis](/courses/data-analysis-mastery-course-college)Delivery

## Live classes for a wilayat on the frontier

Shinas is at the far north of the governorate, which makes any journey south a long one, and the format is settled before anybody pays.

### The border is not a barrier to a lesson

A wilayat at the top of the coast is a long way from most of the country's teaching. A class delivered where the learner already is removes that distance completely.

### Free before anything is decided

The placement lesson carries a real task and a real recommendation, with no card requested and no course committed to until a family has seen a lesson run.

### Five to eight to a group

Grouped on level and objective rather than age. A port administrator and a sixteen year old wanting the same data skill belong in the same room.

### One to one where it fits better

A single teacher and a single learner for an examination, a school project or one specific problem at work.

### Eight live lessons a month

Two a week at a recurring agreed time, settled once rather than renegotiated around shifts every week.

### Timed to Oman and to the work

Oman runs one and a half hours behind India. Port shifts, school terms, examination periods and Ramadan routines all belong in the conversation before a slot is fixed.

The test nobody writes for themselves

A learner whose code passes on every English name has no reason to look further, and no recording will suggest they should. What changes that is a teacher putting one Arabic name into the same function while the learner watches, and then not explaining what happened.

Fees

## One free class, then group or private tuition

Pricing is in USD and is confirmed with the selected format.

First class**USD 0**

Ability task, goal review and starting recommendation.

Group tuition**USD 100**

Per month, normally eight lessons, five to eight learners.

Private tuition**USD 150**

Per month, normally eight lessons, one student and one teacher.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20want%20a%20free%20coding%20class%20for%20a%20learner%20in%20Shinas.)Reviews

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

## Tell us the learner's level and the system they want to fix

The first task might be two words in two boxes, a byte count in Python, or a real form the learner has watched mangle somebody's name.

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [contact@modernagecoders.com](mailto:contact@modernagecoders.com). This is Modern Age Coders' actual contact and not an invented Shinas number.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20want%20a%20free%20coding%20class%20for%20a%20learner%20in%20Shinas.)

Submitted details are used for placement and follow-up.

FAQ

## Shinas coding class questions

Local facts, project method and service terms, kept separate.

### Why does a coding page talk about Arabic and bytes?

Because Shinas is bilingual by necessity and the problem is invisible until it is not. A Latin letter costs one byte in UTF-8 and an Arabic letter costs two, so a field sized at twenty holds twenty of one and ten of the other. The people that silently harms are always the ones whose names were not the default the system was built around.

### Is the port figure real?

Yes. Shinas Port is reported as handling 88,000 tonnes over a twelve month period, mainly building materials, food, live animals and chemical and pharmaceutical products traded with Iran. The twenty unit field limit in the project is a teaching value, chosen because it makes the arithmetic easy to follow.

### Is there a Modern Age Coders centre in Shinas?

No. No premises are claimed in Shinas or anywhere in Al Batinah North. Classes are live online and need a laptop or desktop, working audio, a current browser and a stable connection. The page describes where the service reaches, not a building.

### Does this only matter for Arabic?

No. It applies to every script outside plain ASCII, which is most of them. Arabic and Hebrew cost two bytes a letter in UTF-8, many Indic and East Asian characters cost three, and an emoji can cost four. Any system that has only ever been tested in English has an untested assumption in it.

### Can an adult working at the port or on a farm enrol?

Yes, up to 67. Adults take Python, databases, data analysis and automation, and a real import or a real form is the best possible exercise because the learner already cares whether it works. The data must be public or theirs to use, and confidential customer or shipment records must never be uploaded into a class.

### What does a learner have at the end?

Both length counts computed on the same strings, a validation check that refuses an over-length value instead of trimming it, and at least one test case in a script other than English. That last one is a single line and it is the difference between a system that works and a system that works for everybody.

### How much do Shinas coding classes cost?

The first class is free. Standard group tuition is USD 100 per month for two live lessons each week, normally eight lessons monthly. Standard private tuition is USD 150 per month for one learner with one teacher on the same usual frequency. Course, format, recurring time and availability are confirmed before payment.

### What is the class size for Shinas learners?

A group normally contains five to eight compatible learners. Compatibility includes current level, learning pace and objective, not age alone. Private tuition is one learner with one teacher. If no suitable group is ready, a learner can discuss private tuition or wait for an appropriate cohort.

### How are Shinas class times arranged?

Oman is one and a half hours behind India. The teacher and learner agree a recurring time before payment, generally for two live lessons each week. Friday and Saturday options may be discussed subject to availability. School, work and transport schedules, examinations and Ramadan routines should be mentioned before confirmation.

### What happens in the free Shinas class?

The teacher establishes what the learner wants to be able to do, then sets one task at that level. A child compares two words in two boxes, a teenager counts a string two ways and explains the gap, and an adult brings a form or an import and is asked what it does with a name it was not designed for. The teacher then recommends a course, a format and a time, and states the USD fee. That class is free.

Explore Oman

## Down the same coast, two other faults

The [Oman coding hub](/coding-classes-in-oman) covers national delivery and fees. Read [Sohar](/coding-classes-in-sohar) for keeping a unit attached to every number, and [Al Khaburah](/coding-classes-in-al-khaburah) for why adding up every peak invents one.

Book the free class[Close with WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20want%20a%20free%20coding%20class%20for%20a%20learner%20in%20Shinas.)Free Shinas class[Call +91 91233 66161](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/coding-classes-in-shinas*
