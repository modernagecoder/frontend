---
title: "Coding Classes in Jalan Bani Bu Ali | Modern Age Coders"
description: "Live online coding, Python and AI classes for Jalan Bani Bu Ali learners aged 6 to 67, with a rial and baisa money project, USD fees and a free first class."
canonical: https://learn.modernagecoders.com/coding-classes-in-jalan-bani-bu-ali
source: src/pages/coding-classes-in-jalan-bani-bu-ali.html
---
> Live online coding, Python and AI classes for Jalan Bani Bu Ali learners aged 6 to 67, with a rial and baisa money project, USD fees and a free first class.

Skip to contentCourse picks

## Price it, total it, and prove the total

Four routes from counting coins to writing financial code that reconciles against a real drawer.

[![Kids Coding Blocks course thumbnail](/images/kids-coding.webp)Ages 6 to 10Kids Coding BlocksCount in whole units before counting in parts.See the syllabus](/courses/kids-coding-blocks-masterclass)[![MySQL for Teens course thumbnail](/images/mysql-teens.webp)Ages 14 to 18MySQL for TeensPick a column type money can survive.See the syllabus](/courses/mysql-mastery-for-teens)[![Full-Stack Web for Teens course thumbnail](/images/react-teens.webp)Ages 14 to 18Full-Stack Web for TeensShow a price without inventing a baisa.See the syllabus](/courses/full-stack-web-development-teens-masterclass)[![Python AI Automation course thumbnail](/images/python-automation-ai-college.webp)College and adultPython AI AutomationReconcile a day of takings, exactly.See the syllabus](/courses/python-ai-automation-masterclass-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex and Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex and Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Jalan Bani Bu Ali today

## A commercial town where the arithmetic is already careful

This is a trading place with an unusual amount of counted, measured detail in its own record, which makes it a good setting for a project about exactness.

### Fifty two domes of equal size

Jami Al-Hamoda carries 52 domes of mud brick, with a falaj flowing beneath the building. Locals call it Al Qibab, the Mosque of Domes. The record says all 52 domes are of equal size, and equal is the load-bearing word: somebody counted them, and somebody measured them.

### Openings that let in light by design

The domes carry openings called mabariq that admit natural light and air. Inside there are 24 cylinders, five corridors and a large number of arches, and the building holds more than 700 worshippers. Every one of those is a whole number.

### A souq with a fixed opening

The traditional souq sits about a kilometre south of the centre and trades on Friday mornings, selling modern and traditional goods. A market with a fixed day and a fixed place is a dataset with a natural key already built into it.

Three decimal places is not a rounding preference

Most currencies split into hundredths, so most programming advice about money assumes two decimal places. The rial splits into a thousand baisa. Anybody copying a two-decimal solution into an Omani system has already lost a digit, and the digit they lost is the one people actually pay in.

Verified local facts

## Jalan Bani Bu Ali detail with a source behind it

Counted, dated and located, with the scope of each claim stated.

### A mosque roughly five centuries old

Jami Al-Hamoda was built almost 500 years ago and is renowned for its domes and for the geometric decoration across the building. It serves as a centre for study and for the preservation of the Holy Qur'an, not only as a monument.

### Sand dunes holding standing water

The wilayat has sand dunes with pools of standing water between them, and wadis carrying varied vegetation. Water sitting on sand in a dry country is worth a dataset of its own, and it needs a measurement date beside every reading.

### A summer rainy season

Jalan Bani Bu Ali experiences a distinct summer rainy season, which is unusual for Oman's climate. Any weather model built on a national average will describe this wilayat wrongly, which is the clearest possible argument for local data.

### An 1821 expedition on the record

British East India Company forces mounted an expedition here in 1821 in support of the Sultan against local tribes. A dated event with named parties is exactly what a learner needs when they are building a timeline they can defend.

### A town, not a village

The wilayat is described as a commercial town and tourist destination with many shops and supermarkets. It is among the most populous wilayats in Ash Sharqiyah South, which means retail arithmetic here is done at real volume.

### Coastline and visitors

The wilayat receives coastal visitors, which puts seasonal demand on top of local trade. Two demand patterns in one till is a good reason to record what kind of sale a sale was, rather than only how much it came to.

None of the above is affiliated with Modern Age Coders in any way. They appear because a project about exactness deserves a setting where the numbers were counted rather than estimated, and Jalan Bani Bu Ali is that kind of place.

Signature project

## The basket that totals 11.325 and fails its own check

Six lines from a Friday souq basket. The printed total is right. The stored total is not, and the till finds out at closing.

### 1. Price the basket in rials

Dates at 0.375 a kilo, limes at 1.250, bread at 0.075, cloth at 2.400, coffee at 0.850, cardamom at 0.125. Every price carries three decimal places, because the rial holds a thousand baisa and the third place is real money.

### 2. Total it as a decimal number

Adding those six lines as ordinary floating point numbers gives 11.325000000000001. Printing it to three places gives 11.325, which is correct, so the receipt is perfect and nobody suspects anything.

### 3. Compare it to the drawer

The till compares its computed total to the exact amount and the comparison returns false, on a basket where every line is right. Count the same money in whole baisa and the comparison passes, because whole numbers do not have this problem.

| Method | What it stores | Total it produces | Does it reconcile? |
| --- | --- | --- | --- |
| Floating point rials | 11.325 as a binary fraction | 11.325000000000001 | No |
| Floating point, printed | The same value, formatted | 11.325 on the receipt | Looks fine, still no |
| Decimal type | The digits as written | 11.325 | Yes |
| Whole baisa as integers | 11325 baisa | 11325, shown as 11.325 | Yes |
| Rounding at every step | A value re-rounded repeatedly | Drifts further each time | Worse than doing nothing |

### The receipt is right and the reconciliation is wrong

Both totals were computed before this table was written. This is what makes float money so expensive: the number a customer sees is correct, so the bug never surfaces at the counter. It surfaces at the end of the day, in a reconciliation that is out by an amount nobody can find, on a day when every individual sale was rung up correctly.

Reliable pipeline

## Store money as whole units of the smallest thing you can spend

The rule is short. Count in baisa, not in rials, and only convert to rials when a human is going to read it.

| Stage | Rule | What it prevents | What it gives you |
| --- | --- | --- | --- |
| Store | Whole baisa as integers, or a decimal type | A binary fraction standing in for a price | Money that adds up exactly |
| Compute | Do arithmetic in the smallest unit | Error accumulating across a day | A total that survives reconciliation |
| Round | Round once, at the boundary, with a stated rule | Drift from re-rounding at every step | A rule an auditor can apply |
| Compare | Never test two money values for exact float equality | A reconciliation that fails on correct data | A check that means something |
| Display | Format to three places for a human reader | A price shown to two places in a three place currency | A receipt in real rials |

### For younger learners

Coins and notes on a table, counted in baisa first and only then written as rials. Children discover that counting whole things is easier and safer than counting parts of things, which is the entire lesson in one activity.

### For teenagers

Python totals the basket as floats and as integers, prints both, and compares them. The learner writes the equality test that fails, then changes the storage and watches the same test pass without the test itself changing.

### For adults

The column type is chosen deliberately in the schema, arithmetic happens in baisa, the rounding rule is written down beside the code, and a daily reconciliation job fails loudly rather than absorbing a difference.

The prices in the basket are illustrative and the page says so. The three decimal places are not illustrative: the rial genuinely divides into 1000 baisa, and the floating point behaviour shown here is a property of the number format rather than of any particular price list.

Learning ladder

## From counting coins to reconciling a day

The free class finds which rung is the useful one to stand on.

Ages 6 to 10

### Count in whole units

Baisa before rials, and why whole things are easier to be sure about.

[Elementary Mathematics](/courses/elementary-mathematics-complete-masterclass)[Maths Through Coding](/courses/maths-through-coding)Ages 11 to 13

### Meet the decimal that will not sit still

Learners print more decimal places than usual and see what appears.

[Python and AI for Kids](/courses/python-ai-kids-masterclass)[Microsoft Office for Kids](/courses/microsoft-office-kids-mastery)Ages 14 to 18

### Choose the type on purpose

Teenagers write the failing comparison and fix it at the storage layer.

[Python for Teens](/courses/python-complete-masterclass-teens)[JavaScript for Teens](/courses/javascript-course-for-teens-beginners-interactive-web)Ages 18 to 67

### Make the books balance

Adults build reconciliation that fails loudly instead of absorbing a gap.

[MySQL Database](/courses/mysql-database-complete-masterclass-college)[Data Analysis](/courses/data-analysis-mastery-course-college)Delivery

## Live classes for a town on the Sharqiyah coast

Jalan Bani Bu Ali is a long way from any capital, and a weekly class should not depend on that road.

### The class travels instead of the learner

A town with its own souq, its own school run and its own working week does not need to send anybody to a city for a lesson. The lesson comes here.

### Nothing charged for the first one

A real placement task, a real recommendation and no card requested. The recommendation is sometimes that a different course fits better, and that is what gets said.

### Groups of five to eight

Matched on level and objective. A shopkeeper wanting to automate a stock sheet and a sixteen year old wanting the same skill belong in the same room.

### One to one where it is warranted

A single learner and a single teacher for an exam deadline or a specific business problem that a group cannot be shaped around.

### Eight lessons in a month

Two live lessons a week at a recurring agreed time, not a video library and not a slot that has to be renegotiated.

### Set to Oman, and to the season

Oman is one and a half hours behind India. The summer rainy season, school terms, examination periods and Ramadan routines all belong in the conversation before a time is fixed.

The bug that only a person will ask about

A learner whose receipt prints 11.325 has every reason to believe the code is finished. Nothing on the screen suggests otherwise. It takes somebody sitting with them and asking what the till would say at closing time, and then waiting while they work out how to find out.

Fees

## One free class, then group or private tuition

Pricing is in USD and is confirmed with the selected format.

First class**USD 0**

Ability task, goal review and starting recommendation.

Group tuition**USD 100**

Per month, normally eight lessons, five to eight learners.

Private tuition**USD 150**

Per month, normally eight lessons, one student and one teacher.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20want%20a%20free%20coding%20class%20for%20a%20learner%20in%20Jalan%20Bani%20Bu%20Ali.)Reviews

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

## Tell us the learner's level and what they are trying to build

The first task might be counting in baisa, writing the comparison that fails, or looking at a real price sheet the learner already maintains.

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [contact@modernagecoders.com](mailto:contact@modernagecoders.com). This is Modern Age Coders' actual contact and not an invented Jalan Bani Bu Ali number.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20want%20a%20free%20coding%20class%20for%20a%20learner%20in%20Jalan%20Bani%20Bu%20Ali.)

Submitted details are used for placement and follow-up.

FAQ

## Jalan Bani Bu Ali coding class questions

Local facts, project detail and service terms, kept separate.

### Why does this page talk about baisa rather than rials?

Because the rial divides into 1000 baisa, so an Omani price carries three decimal places where most currencies carry two. Almost every published guide to handling money in code assumes two places. A learner here needs the version that holds a thousandth, and the safest way to hold it is to count in whole baisa and convert only for display.

### Are the basket prices real souq prices?

No, and the page says so. They are illustrative prices chosen to show the arithmetic. What is not illustrative is the currency structure and the floating point behaviour: both are properties of the rial and of the number format, and they reproduce on any price list you substitute.

### Is there a Modern Age Coders branch in Jalan Bani Bu Ali?

No. No premises are claimed here or anywhere in Ash Sharqiyah South. Classes are live online and need a laptop or desktop, working audio, a current browser and a stable connection. This page describes service availability, not a location.

### If the receipt prints correctly, is there really a problem?

Yes, and this is the part worth understanding. The display is fine because formatting hides the extra digits. The stored value is not fine, so any exact comparison against another total fails. The damage shows up in reconciliation at the end of a day on which every individual sale was correct, which is the hardest kind of bug to trace.

### Can an adult running a shop here learn this?

Yes. Adults up to 67 study Python, databases, data analysis and automation, and a real stock or price sheet is the best exercise there is because the learner already cares whether it is right. The data must be the learner's own or public, and customer records must never be uploaded into a class.

### What can a learner show at the end of this project?

A basket calculator that reconciles, a test that failed before the storage changed and passes after it without being edited, and the habit of asking what unit a number is stored in. That habit transfers to every measurement problem, not only money.

### How much do Jalan Bani Bu Ali coding classes cost?

The first class is free. Standard group tuition is USD 100 per month for two live lessons each week, normally eight lessons monthly. Standard private tuition is USD 150 per month for one learner with one teacher on the same usual frequency. Course, format, recurring time and availability are confirmed before payment.

### What is the class size for Jalan Bani Bu Ali learners?

A group normally contains five to eight compatible learners. Compatibility includes current level, learning pace and objective, not age alone. Private tuition is one learner with one teacher. If no suitable group is ready, a learner can discuss private tuition or wait for an appropriate cohort.

### How are Jalan Bani Bu Ali class times arranged?

Oman is one and a half hours behind India. The teacher and learner agree a recurring time before payment, generally for two live lessons each week. Friday and Saturday options may be discussed subject to availability. School, work and transport schedules, examinations and Ramadan routines should be mentioned before confirmation.

### What happens in the free Jalan Bani Bu Ali class?

The teacher establishes what the learner wants to be able to do, then sets one task at that level. A child counts coins in baisa, a teenager totals a basket two ways and explains the difference, and an adult brings a price sheet and is asked what happens when the day is added up. The teacher then recommends a course, a format and a time, and states the USD fee. That class is free.

Explore Oman

## Two more wilayats, two more faults worth knowing

The [Oman coding hub](/coding-classes-in-oman) covers national delivery and fees. Read [Sur](/coding-classes-in-sur) for asking what a rising line actually measures, and [Ash Sharqiyah South](/coding-classes-in-ash-sharqiyah-south) for the governorate this wilayat belongs to.

Book the free class[Close with WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20want%20a%20free%20coding%20class%20for%20a%20learner%20in%20Jalan%20Bani%20Bu%20Ali.)Free Jalan Bani Bu Ali class[Call +91 91233 66161](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/coding-classes-in-jalan-bani-bu-ali*
