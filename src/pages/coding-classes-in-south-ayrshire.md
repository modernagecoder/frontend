---
title: "Coding Classes in South Ayrshire | Live Online, Ages 6 to 67"
description: "Live online coding, Python and maths classes across South Ayrshire, from Ayr, Troon and Prestwick to Girvan, Maybole, Coylton, Tarbolton and Symington."
canonical: https://learn.modernagecoders.com/coding-classes-in-south-ayrshire
source: src/pages/coding-classes-in-south-ayrshire.html
---
> Live online coding, Python and maths classes across South Ayrshire, from Ayr, Troon and Prestwick to Girvan, Maybole, Coylton, Tarbolton and Symington.

Skip to contentCourses for South Ayrshire

## Typical first courses in South Ayrshire

A P3 in Troon who likes experiments, a P7 in Prestwick about to try typed code, an S5 in Ayr taking Higher, and an adult in Girvan learning to model costs at work. For each, the first step is a free lesson.

[![Scratch Coding for Kids course thumbnail](/images/scratch-kids.webp)Ages 6 to 11Scratch Coding for KidsScratch projects with heating, cooling and simple science simulations.See the syllabus](/courses/scratch-programming-complete-course)[![Maths Through Coding course thumbnail](/images/maths-through-coding.webp)Ages 10 to 15Maths Through CodingRatios, percentages and units handled properly, by writing code.See the syllabus](/courses/maths-through-coding)[![Python for Teens course thumbnail](/images/python-teens.webp)Ages 12 to 18Python for TeensComplete Python for teenagers, including physics models and checks.See the syllabus](/courses/python-complete-masterclass-teens)[![Data Analysis Course course thumbnail](/images/data-analysis-college.webp)AdultsData Analysis CourseData analysis for adults, from spreadsheets to what-if models in Python.See the syllabus](/courses/data-analysis-mastery-course-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)South Ayrshire figures

## About 111,600 people in South Ayrshire

The council-wide count is National Records of Scotland's rounded first result from the 2022 census. Figures for individual towns come from an NRS series for mid-2020.

| Locality | Residents | Locality | Residents |
| --- | --- | --- | --- |
| Ayr | 46,260 | Dundonald | 2,570 |
| Troon | 14,950 | Coylton | 2,160 |
| Prestwick | 14,880 | Mossblown | 2,100 |
| Girvan | 6,330 | Tarbolton | 1,860 |
| Maybole | 4,580 | Symington | 1,510 |

South Ayrshire has 91.3 residents per square kilometre, a little above the Scottish 69.8. Its population is older than the national average: our sums of the census age bands give 26.3 per cent of residents aged 65 or over, against Scotland's 20.1, and 14.1 per cent under 15, against 15.3. Nobody here has read South Ayrshire Council's term dates, so families tell us their holidays directly.

### Ayrshire neighbours and exams

Our [North Ayrshire](/coding-classes-in-north-ayrshire) page rotates the stars back to 1638. For Scottish exams, see [National 5 Computing Science](/national-5-computing-science-help) and [Higher Maths](/higher-maths-tuition-online).

The South Ayrshire project

## Boiling the sea, on paper first

A budget for water, heat and coal, and a test of every assumption.

Every number in the model is an assumption, labelled as one. Seawater is taken to hold 35 grams of salt per kilogram, a typical figure for the open sea. To get one tonne of salt, the pan must take in about 28,571 kilograms of seawater and boil off 27,571 kilograms of water. The water first has to be warmed from 10 degrees to boiling, and then turned into steam, which needs far more energy per kilogram than the warming. The learner adds the two parts, divides by the energy in a kilogram of coal, taken as 25 megajoules, and allows for a pan that turns only a fifth of the coal's heat into useful work.

| Quantity | Result |
| --- | --- |
| Seawater needed | 28,571 kg |
| Water boiled away | 27,571 kg |
| Heat needed | 73.0 gigajoules, 85 per cent of it for boiling rather than warming |
| Coal for a perfect pan | About 2.9 tonnes |
| Coal for a pan 20 per cent efficient | About 14.6 tonnes |
| Salinity typed as 3.5 instead of 35 | 285,714 kg of seawater, ten times too much |

Then the sensitivity check. The learner moves one assumption at a time between a low and a high value and records how much the coal changes. Pan efficiency, from 10 to 30 per cent, swings the answer by about 19.5 tonnes. The energy in the coal, from 20 to 30 megajoules per kilogram, swings it by about 6 tonnes, and the saltiness of the sea, from 30 to 38 grams per kilogram, by about 3.7 tonnes. The temperature of the incoming sea, from 5 to 15 degrees, barely matters: less than a quarter of a tonne. So if a historian wanted a better estimate, the first thing to find out would be how efficient the pans were, not how warm the sea was.

The last row is the bug. Salinity is often quoted as 3.5 per cent, and typing 3.5 into code that expects grams per kilogram silently makes everything ten times too large. Two simple checks, that the seawater must weigh more than the salt and the water boiled must weigh less than the seawater, will not catch it. A better test compares the answer with a rough figure worked out by hand, which is the habit this project builds.

### Ages 8 to 11

Dissolve salt in warm water, leave it to evaporate, and build a Scratch animation of a pan boiling dry.

### Ages 11 to 15

Write the mass budget in Python for one tonne of salt and try different saltiness values.

### Ages 15 and up

Add the energy terms, run the one-at-a-time sensitivity check, and draw a bar chart ranking the assumptions.

### Real salt works, invented numbers

The buildings and their history come from the Historic Environment Scotland listing. Salinity, temperatures, coal energy, pan efficiency and every result are assumptions or outputs of our own model, not records of how the Maryburgh Salt Works operated.

Why the Prestwick salt pans

## Salt boiling on the Ayrshire coast

What the Category A listing records.

| Listing detail | What it records |
| --- | --- |
| Built | Circa 1760, for the salt boiling industry, as the Maryburgh Salt Works |
| Form | A pair of parallel two-storey blocks, probably salt pans with housing above |
| Rarity | Appear to be the most complete salt-boiling remains to survive in Scotland |
| Early mention | Prestwick burgh records use the term salt pan hous on 12 February 1480 |
| Later records | Applications for salt pans discussed on 25 June 1763 and 7 September 1765 |

Energy budgets and sensitivity checks sit behind decisions about heating homes, running data centres, planning solar farms and designing batteries. The question is always the same: which assumption, if wrong, would change the answer most? A South Ayrshire student who has ranked the guesses in a salt budget has learned where to spend effort when checking any model.

Neither Historic Environment Scotland nor South Ayrshire Council has any link with us. The listing facts are theirs; the salt budget and any slips in it are ours.

Stages

## From evaporating dishes to energy models

A rough guide; the free lesson sets the actual starting point.

P1 to P4

### Science games

Block coding with simple experiments, timers and changing states.

[Scratch Coding for Kids](/courses/scratch-programming-complete-course)[Coding for Kids](/courses/kids-coding-blocks-masterclass)P5 to S2

### Units and ratios

Typed Python with units, percentages and conversions.

[Maths Through Coding](/courses/maths-through-coding)[Python and AI for Kids](/courses/python-ai-kids-masterclass)S3 to S6

### Models and checks

Physics and data models beside National 5, Higher and Advanced Higher courses.

[Python for Teens](/courses/python-complete-masterclass-teens)[High School Mathematics](/courses/complete-high-school-mathematics-mastery)Adults

### What-if analysis

Python and data analysis for adults building estimates and scenarios.

[Data Analysis Course](/courses/data-analysis-mastery-course-college)[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)AI and estimates

## An AI can build an energy model in seconds. Will it tell you which guess matters?

A precise-looking answer can rest on one shaky number.

Ask a chatbot how much coal it takes to make a tonne of salt and it will give a figure, perhaps with a formula. It rarely shows how much that figure would move if the efficiency were half or double, and it will not know whether you meant per cent or grams per kilogram.

A South Ayrshire learner who has run a sensitivity check knows to ask which input drives the result, and to check units before trusting a number. Those two questions turn an AI's answer into something you can defend.

Knowing which assumption drives an answer is why a young person in South Ayrshire should still learn to code in 2026. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

How it runs

## From Troon to Girvan, lessons over video

Coastal towns and inland villages alike join from a laptop at home.

### Hands-on from minute one

The learner writes the code; the teacher watches the shared screen and guides the next step.

### Stages as schools name them

A Prestwick S2 or an Ayr P5 will hear the Curriculum for Excellence names they know, through to Advanced Higher. Lessons are in English.

### Try it free

One whole lesson without charge, then an honest word on what fits.

### Fifteen to twenty per class

Classmates are grouped by stage and come from several countries.

### Term time, twice weekly

Lessons run twice a week in term and stop for the holidays.

### Clock changes covered

Your lesson holds its UK time when the clocks move; the teachers in India time adjust.

Why classes mix towns

Five learners at one stage, all free at the same hour, rarely live in one Ayrshire town. Grouping by stage across a wide pool gives someone in Maybole or Coylton a class that suits.

Fees

## Fees in South Ayrshire

Ayr or Maybole, the fee is identical, and the same everywhere we teach apart from India.

First class**USD 0**

A complete trial lesson, free, then a clear suggestion.

Group tuition**USD 100**

About eight lessons a month with fifteen to twenty classmates.

Private tuition**USD 150**

About eight lessons a month, just you and the teacher.

Fees are set in US dollars, and there is no sterling list. Payment starts only after the trial has fixed a course and a weekly time; the pricing page explains holidays, missed lessons and switching between group and one-to-one.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20South%20Ayrshire%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)Reviews

## Comments and ratings on Google

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

## Book a free South Ayrshire lesson

Let us know the learner's age or school stage and what they enjoy, and we will plan a first lesson around it, perhaps a Scratch experiment, a Python program or the salt budget on this page.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented South Ayrshire one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20South%20Ayrshire%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)

Submitted details are used for placement and follow-up.

FAQ

## South Ayrshire questions

The council area, the salt pan project and how lessons work.

### What is the population of South Ayrshire?

Rounded census figures for 2022 put South Ayrshire at about 111,600 residents in roughly 52,500 households.

### What are the biggest towns in South Ayrshire?

NRS mid-2020 estimates give Ayr 46,260, Troon 14,950, Prestwick 14,880, Girvan 6,330 and Maybole 4,580.

### What is the salt pan project?

Learners build a Python budget for boiling seawater down to a tonne of salt, find it needs about 73 gigajoules of heat, and use a sensitivity check to show that pan efficiency matters far more than sea temperature.

### What is latent heat?

The energy needed to change a substance from one state to another without changing its temperature, such as turning boiling water into steam.

### How old are the Prestwick salt pan houses?

Historic Environment Scotland dates them to about 1760, built as the Maryburgh Salt Works, and lists them at Category A.

### Are classes held in Ayr?

No; everything is online, so a learner in Tarbolton joins in exactly the way one in Ayr does.

### Can you help with Higher Maths?

Yes, along with National 5 Maths and Computing Science. We build understanding and never promise grades.

### What ages do you teach?

From 6 up to 67: blocks for young children, Python and exam maths for secondary pupils, and Python or data skills for adults.

### What does it cost?

Nothing for the trial lesson. After that it is USD 100 per month in a group or USD 150 per month one-to-one.

### What happens during school holidays?

Classes pause. Tell us your school's holiday weeks and we leave them clear.

Close at hand

## More Ayrshire and south-west pages

[East Ayrshire](/coding-classes-in-east-ayrshire) hunts for a verse form in Burns, [North Ayrshire](/coding-classes-in-north-ayrshire) rotates star positions, and [Dumfries and Galloway](/coding-classes-in-dumfries-and-galloway) counts stars under dark skies. See all councils on our [Scotland](/coding-and-ai-classes-in-scotland) page, or the [UK hub](/coding-classes-in-united-kingdom) for everywhere else.

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20South%20Ayrshire%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/coding-classes-in-south-ayrshire*
