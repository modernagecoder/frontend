---
title: "Coding Classes in Bromley and Beckenham | Modern Age Coders"
description: "Live online coding, Python, AI and maths classes for Bromley: Beckenham, Orpington, Chislehurst, Penge, West Wickham and Biggin Hill. Ages 6 to 67."
canonical: https://learn.modernagecoders.com/coding-classes-in-bromley-london
source: src/pages/coding-classes-in-bromley-london.html
---
> Live online coding, Python, AI and maths classes for Bromley: Beckenham, Orpington, Chislehurst, Penge, West Wickham and Biggin Hill. Ages 6 to 67.

Skip to contentCourse picks for Bromley

## Four ways into coding from Bromley

Picture a Year 2 child in Penge who grows cress on the windowsill, a Year 9 pupil in Beckenham who asks "but how do you know?" in every science lesson, a Year 13 student in Orpington heading for biology or medicine, and a keen gardener in Chislehurst who would like to test their own planting trials properly. All four can start with a free lesson.

[![Scratch Coding for Kids course thumbnail](/images/scratch-kids.webp)Ages 6 to 10Scratch Coding for KidsA Scratch garden where two rows of plants grow at different speeds, and a first fair comparison.See the syllabus](/courses/scratch-programming-complete-course)[![Python and AI for Kids course thumbnail](/images/python-kids.webp)Ages 9 to 12Python and AI for KidsFirst Python with Darwin's table: average heights, the tallest plant, and how many pairs the crossed plant won.See the syllabus](/courses/python-ai-kids-masterclass)[![Python for Teens course thumbnail](/images/python-teens.webp)Ages 13 to 18Python for TeensPython for Key Stages 3 to 5, including the full 32,768-outcome test on this page.See the syllabus](/courses/python-complete-masterclass-teens)[![Data and AI Analytics for Non-Programmers (Excel, Sheets, Power BI) course thumbnail](/images/data-ai-analytics-non-programmers.webp)AdultsData and AI Analytics for Non-Programmers (Excel, Sheets, Power BI)For adults who read trial results or A/B tests at work and want to know what makes a comparison fair.See the syllabus](/courses/data-and-ai-analytics-for-non-programmers-course)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Bromley in figures

## 329,992 residents and eight Grade I entries

Each figure is published by the organisation named with it, or counted by us from that organisation's open data.

| Figure | Value | Source |
| --- | --- | --- |
| Usual residents, 2021 Census | 329,992 | ONS table TS001, via Nomis |
| National Heritage List entries inside the borough | 415: 8 Grade I, 23 Grade II*, 384 Grade II | Historic England data, counted 25 September 2026 |
| Services at Bromley South | Southeastern and Thameslink | TfL open data, checked 25 September 2026 |
| Pairs of maize plants in Darwin's table | 15 | Darwin, 1876, Table 1/1, drawn up by Francis Galton |

### Darwin's house

Down House is listed at Grade I. Historic England's entry records that Darwin occupied it from 1842 to 1882 and died there.

### Dinosaurs and a windmill

Also at Grade I: the prehistoric animal sculptures by the lower lake in Crystal Palace Park, and Keston Windmill, which the list entry says was built in 1716.

### Houses and a college

The rest of the Grade I list is Wickham Court, Holwood Mansion, Sundridge Park, Bromley College and its gateway.

The data

## Fifteen pairs of Zea mays, printed in 1876

Darwin asked the statistician Francis Galton to examine his measurements, and Galton's report, with the maize table, appears in the book. Heights were recorded in inches and eighths of an inch.

| Pair | Crossed plant | Self-fertilised plant | Crossed minus self |
| --- | --- | --- | --- |
| 1 | 23 4/8 | 17 3/8 | +6 1/8 |
| 2 | 12 | 20 3/8 | -8 3/8 |
| 7 | 22 1/8 | 18 5/8 | +3 4/8 |
| 13 | 22 1/8 | 12 6/8 | +9 3/8 |
| 15 | 12 | 18 | -6 |

Across all fifteen pairs the crossed plants average 20.19 inches and the self-fertilised ones 17.58 inches, and the crossed plant is taller in 13 pairs out of 15. In his report Galton smoothed the figures and gave the ratio of heights as 100 to 84; from the raw numbers we get 100 to 87. The book says the seeds were sown on opposite sides of the same pots, so each pair shared soil, light and water. That design choice is what makes the pairs worth keeping together.

We read the book in its public-domain Project Gutenberg text; printed copies from 1876 are held by the Internet Archive. Bromley's library branches are listed on its operator's website by a script our reader could not follow, so we do not name them here.

Signature project

## Every possible outcome: 32,768 sign patterns

Learners write an exact randomisation test, one of the purest ideas in statistics, in about ten lines of Python.

### 1. Suppose no effect

If crossing made no difference, then in each pair it was luck which plant grew taller. Each difference could just as well have had the opposite sign.

### 2. Try them all

Fifteen pairs, two signs each: 2 to the power 15 is 32,768 patterns. The program adds up the differences under every one of them.

### 3. Count the extremes

How many patterns give a total at least as large as Darwin's real one? That share is the chance of seeing his result if crossing did nothing.

| Test | What it uses | Chance of a result this strong with no real effect |
| --- | --- | --- |
| Exact sign-flip test | The size and sign of every difference | 863 of 32,768 one way, 2.6%; 5.3% counting both directions |
| Sign test | Only whether the crossed plant won: 13 of 15 | 0.37% one way |
| Paired t-test | Differences, assuming a bell-shaped spread | 5.0% counting both directions |
| Unpaired t-test | All heights, ignoring which pot they shared | 2.1% counting both directions |

The same data give answers from under half a per cent to over five per cent. The sign test looks strongest because it ignores the two pairs where the crossed plant lost badly, by over 8 inches and by 6. The unpaired test looks stronger than the paired one here, but it throws away the fact that each pair grew in the same pot, so it answers a question about a different experiment. The exact test uses everything and assumes nothing beyond "no effect means random signs", and it lands right on the edge of the conventional 5% line. A learner who sees this understands why a test must be chosen before looking at the results.

### Why an AI answer is not enough here

Give a chatbot these fifteen pairs and ask whether crossing helped. It may run whichever test is most common in its examples and report a tidy verdict. It will rarely point out that four reasonable tests disagree, that the choice should follow from how the plants were grown, or that dropping the two stunted 12-inch crossed plants would lift the average gap from 2.6 to 4.1 inches, which is tempting and wrong. Those judgements belong to the person, and they are what our learners practise.

Doing it fairly

## Three rules the maize table teaches

The code is short. The discipline around it is the part that transfers to every subject.

### Keep the design

Plants that shared a pot stay paired. Analyse the experiment that was actually run, not a simpler one that gives a nicer number.

### Choose first

Decide on the test before looking at results. Picking whichever of four tests looks most convincing afterwards is a way of fooling yourself.

### Keep awkward data

The two 12-inch crossed plants are inconvenient, not wrong. Removing them without a reason decided in advance changes the answer and the honesty of the work.

Pupils preparing for GCSE science can follow the fair-test ideas and the counting; sixth formers can go on to write the exact test and compare it with the t-test, which assumes a bell-shaped spread of differences. Darwin's measurements belong to history; the tests, counts and percentages on this page are our own work, run on 25 September 2026. None of Historic England, Bromley Council, TfL, the ONS, the Internet Archive or Project Gutenberg is linked to Modern Age Coders in any way.

Getting around

## From Bromley South to Biggin Hill, at home

Bromley stretches from Penge in the north to Biggin Hill in the south. Our classes shrink that to the width of a screen.

### Bromley South

TfL's open data lists Southeastern and Thameslink trains at Bromley South.

### Penge to Biggin Hill

Learners at opposite ends of the borough can sit in the same online class with no journey for either.

### Paired by level

Like Darwin's plants, our learners are grouped with like: five to ten at the same stage, at an agreed UK time.

Bromley among the boroughs

Bromley is one of London's 32 boroughs. The [London page](/best-coding-class-in-london) names each of them and the City, and links every page as it goes up, including [Croydon](/coding-classes-in-croydon-london) and [Sutton](/coding-classes-in-sutton-london) to the west.

Learning ladder

## From a fair race to an exact test

We place learners by what they do in the free lesson; a school year is a hint, not a rule.

Ages 6 to 10

### Fair races

Children build games where two sprites race under the same rules and learn what makes a comparison fair.

[Scratch Coding for Kids](/courses/scratch-programming-complete-course)[Coding for Kids](/courses/kids-coding-blocks-masterclass)Ages 10 to 13

### Counting outcomes

Python loops that list every outcome of coin tosses and count the ones that match.

[Python and AI for Kids](/courses/python-ai-kids-masterclass)[Maths Through Coding](/courses/maths-through-coding)Ages 13 to 18

### Tests that match the design

Paired data, exact randomisation tests and t-tests compared honestly, excellent material for a science or maths project.

[Python for Teens](/courses/python-complete-masterclass-teens)[Full Stack Web Development for Teens](/courses/full-stack-web-development-teens-masterclass)Ages 18 to 67

### Judging a trial

Adults learn to read a trial or experiment critically: the design, the test chosen, and what was left out.

[Data and AI Analytics for Non-Programmers (Excel, Sheets, Power BI)](/courses/data-and-ai-analytics-for-non-programmers-course)[Python Automation Course](/courses/python-ai-automation-masterclass-college)Coding and AI

## AI can run any statistical test instantly. Why should a Bromley teenager learn to write one?

Because the danger is not a wrong calculation; it is the wrong question asked confidently.

Statistical software, and now AI assistants, can produce a p-value from any dataset in a second. On Darwin's fifteen pairs they could produce four different ones, from 0.37% to 5.3%, all correctly calculated. Which is right depends on how the plants were grown and on a decision that should have been made before the data were seen. A person who has written the exact test by hand, counting all 32,768 patterns, knows what a p-value means and can tell when a tool has answered the wrong question.

That understanding carries far beyond botany: medical trials, product experiments and exam research all depend on it. Learners come away knowing to respect the design, to fix the test in advance and to keep inconvenient data. Machines will keep calculating faster. Deciding what is worth calculating stays with people.

Darwin checked his own conclusions by asking a statistician for help. A Bromley learner who can do that checking themselves carries on a very local tradition. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

Delivery

## Beckenham to Orpington, every lesson live

However far a learner is from central Bromley, the lesson is only a click away.

### Home is the classroom

Learners take part from home with a laptop or desktop, headphones and a steady internet connection.

### Stages used in England

We describe progress in the Key Stages of English schools, from Key Stage 1 to sixth form, with GCSE and A level where they are relevant. Lessons are in English throughout.

### A free lesson first

Real teaching from a real teacher, never a sales pitch. By the end we can recommend a starting level and a course, and nobody asks for a card.

### Matched classmates

Each group gathers fifteen to twenty learners who have reached one stage, drawn from all over the UK and abroad, which keeps a sensible hour within reach.

### Twice a week

Most groups meet on two evenings a week, taking breaks for half terms, holidays and exams by agreement.

### Local times

Our teachers work from India, but every time we send you is written in UK time.

A spread-out borough, one class

Around 330,000 people live in Bromley, yet a strong class still needs five learners at one level free at one hour, so our groups reach well beyond the borough.

Fees

## Fees for Bromley families

A free first lesson, then a single monthly fee that does not change from Penge to Biggin Hill.

First class**USD 0**

A full first lesson with a teacher at no charge, ending with our recommendation of level, course and time.

Group tuition**USD 100**

About eight live lessons a month in a class of fifteen to twenty at the same stage.

Private tuition**USD 150**

About eight live lessons a month, just the learner and the teacher.

Families in Bromley pay in US dollars, as all families outside India do, and no pound prices appear on the site. Nothing is due until the free lesson has taken place and a course and weekly time are settled. The pricing page sets out how pauses, missed lessons and a move between class and one-to-one teaching work.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20want%20a%20free%20coding%20class%20for%20a%20learner%20in%20Bromley.)Reviews

## Google reviews from families, unedited

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

## Arrange a free lesson

Let us know the learner's age or year group and one thing they enjoy. We might start with a Scratch plant race, a Python count of coin tosses, or Darwin's maize test from this page.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Bromley one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20want%20a%20free%20coding%20class%20for%20a%20learner%20in%20Bromley.)

Submitted details are used for placement and follow-up.

FAQ

## Questions from Bromley families

About the borough, the Darwin project and our lessons.

### How many people live in Bromley?

At the 2021 Census Bromley had 329,992 usual residents. The figure is in ONS table TS001, which we read through the Nomis service.

### Did Darwin really live in Bromley?

Yes. Historic England's list entry for Down House, at Downe in the borough, records that Charles Darwin occupied it from 1842 to 1882 and died there. The house is listed at Grade I.

### Where do the maize measurements come from?

From Darwin's book The Effects of Cross and Self Fertilisation in the Vegetable Kingdom, published in 1876, in a table drawn up by Francis Galton. We used the public-domain Project Gutenberg text.

### What is an exact sign-flip test?

A test that assumes no real effect, so each pair's difference could equally have been positive or negative, and then checks every possible pattern of signs. With 15 pairs that is 32,768 patterns; 863 of them give a total at least as large as Darwin's.

### So did crossing make the plants taller?

The crossed plant was taller in 13 of 15 pairs, by 2.6 inches on average. The exact test puts the chance of a gap this large with no real effect at 2.6% one way or 5.3% counting both directions, so on this table alone the evidence is suggestive rather than overwhelming.

### When would a Bromley learner have lessons?

Once the free lesson is done we offer a weekly slot in a class at the right level with a seat free. Teachers sit in India; the times in our messages are always Bromley times.

### Which equipment is required?

Any laptop or desktop computer with sound through headphones or speakers, plus a steady connection. For the Darwin project, Python and fifteen pairs of numbers are all that is required.

### Is there a Modern Age Coders centre in Bromley?

No. There is no Bromley centre and no premises anywhere in the UK, because every lesson is live online. A learner needs a computer with sound and a stable connection, and our phone number is Indian.

### What do coding classes in Bromley cost?

The first lesson is free. After that, a group place costs USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, and one-to-one teaching on the same timetable costs USD 150 a month. Nothing is charged until the course, format and time are agreed.

### How are the groups made up?

By level, pace and goals rather than by age or neighbourhood, with fifteen to twenty learners at one stage. Where no group fits the learner's week, one-to-one lessons are offered.

Explore London

## Across London and the wider UK

Every borough and the City sit on the [London page](/best-coding-class-in-london), each linked once its own page exists, from [Sutton](/coding-classes-in-sutton-london) in the south to [Barnet](/coding-classes-in-barnet-london) in the north. Learners curious about statistics and prediction can continue with our [AI and machine learning classes for London](/ai-and-machine-learning-classes-in-london), and the [UK coding page](/coding-classes-in-united-kingdom) compares school stages across the four nations.

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20want%20a%20free%20coding%20class%20for%20a%20learner%20in%20Bromley.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/coding-classes-in-bromley-london*
