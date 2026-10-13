---
title: "AI and Programming Classes in Gillingham | Coding for 6 to 67"
description: "Online AI, programming and Python classes for Gillingham, Chatham, Rochester and Hoo learners in Medway aged 6 to 67, one-to-one or in groups. First lesson free."
canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-gillingham
source: src/pages/ai-and-programming-classes-in-gillingham.html
---
> Online AI, programming and Python classes for Gillingham, Chatham, Rochester and Hoo learners in Medway aged 6 to 67, one-to-one or in groups. First lesson free.

Skip to contentGillingham course picks

## Courses Gillingham learners often start with

Let age and interests guide the choice; each course begins with a free live lesson and needs no card.

[![Coding for Kids course thumbnail](/images/kids-coding.webp)Ages 6 to 9Coding for KidsBlock coding with ships, maps and treasure-hunt games.See the syllabus](/courses/kids-coding-blocks-masterclass)[![Python and AI for Kids course thumbnail](/images/python-kids.webp)Ages 9 to 12Python and AI for KidsFirst Python with distances, coordinates and small AI jobs.See the syllabus](/courses/python-ai-kids-masterclass)[![Python for Teens course thumbnail](/images/python-teens.webp)Ages 13 to 17Python for TeensComplete teen Python, including the Adams distances project.See the syllabus](/courses/python-complete-masterclass-teens)[![Python Masterclass course thumbnail](/images/python-college.webp)Adults and studentsPython MasterclassAdult Python from scratch through to data and maps.See the syllabus](/courses/python-programming-masterclass-zero-to-advanced-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Medway

## A young-leaning Medway

Census results are published for Medway as a whole; six age bands from Nomis, set beside England.

| Ages | Medway total | Medway % | England % |
| --- | --- | --- | --- |
| 0 to 4 | 17,308 | 6.2% | 5.4% |
| 5 to 9 | 18,336 | 6.6% | 5.9% |
| 30 to 34 | 20,368 | 7.3% | 7.0% |
| 75 to 79 | 8,934 | 3.2% | 3.6% |
| 80 to 84 | 6,025 | 2.2% | 2.5% |
| 85 and over | 5,163 | 1.8% | 2.4% |

The youngest bands sit well above England and the oldest below it, with adults in their early thirties slightly over the national share. The ONS lists Chatham at 76,955 and Rochester at 67,285, along with Hoo St Werburgh and Cuxton, among Medway's built-up areas. Medway schools teach the national curriculum for England; send us your term dates and lessons will stay clear of the holidays.

### County and region

For the county see [Kent](/coding-classes-in-kent), and for the region [South East England](/coding-and-ai-classes-in-south-east-england).

The Gillingham project

## Two miles to Rochester, one to Chatham?

Measure the three towns, compare with Adams, and work out what kind of error it is.

The learner looks up the three towns in the Ordnance Survey's gazetteer of place names, which gives a single reference point for each, and measures the distances between them on the Earth's surface with the geographiclib package. Gillingham to Rochester comes out at 5,697 metres, which is 3.54 statute miles. Gillingham to Chatham is 4,085 metres, or 2.54 miles. Chatham to Rochester is 1,618 metres, 1.01 miles. Adams said 2 and 1. So both of his figures are short by a mile and a half. The obvious guess is that the "English mile" of 1611 was a different length from ours, and that guess is exactly what the program is built to test.

| Pair | Adams (English miles) | Measured (statute miles) | Measured minus Adams |
| --- | --- | --- | --- |
| Gillingham to Rochester | 2 | 3.54 | 1.54 |
| Gillingham to Chatham | 1 | 2.54 | 1.54 |
| Chatham to Rochester | 1 (implied, if in a line) | 1.01 | 0.01 |
| Ratio of the first two | 2.0 | 1.39 | Does not match |
| Straightness: GC + CR minus GR | Zero if in a line | 6 metres | Almost perfectly in line |

If the problem were the unit, every distance would be off by the same factor, so the ratio of the two distances would survive. It does not: Adams's ratio is 2.0 and today's is 1.39. Working backwards, his "mile" would have to be 2.85 kilometres long from one pair and 4.08 kilometres from the other, which is impossible for a single unit. Now try the other explanation, a shifted starting point. The differences are 1.54 and 1.54 miles, identical to two decimal places. One constant offset explains both numbers perfectly.

The geometry shows why. Adding Gillingham to Chatham and Chatham to Rochester gives only 6 metres more than the direct Gillingham to Rochester distance, so the three reference points lie almost exactly on one line with Chatham in the middle. Adams's own numbers make the same shape: 2 miles minus 1 mile leaves 1 mile from Chatham to Rochester, and today's figure is 1.01. His description fits the modern map beautifully, provided his Gillingham stood about a mile and a half nearer Chatham than the point the gazetteer uses today. The learner concludes that the evidence points to a reference-point difference, not a faulty mile, and writes down what would be needed to go further: where the town centre lay in 1611.

### Ages 8 to 11

Put three coins in a line, measure between them with a ruler, then move one and see what changes.

### Ages 11 to 15

Compute the three distances in Python and compare differences and ratios.

### Ages 15 and up

Test scale against offset properly and check how straight the line really is.

### Adams's words, our measurements

The quotations come from the Project Gutenberg edition of the Diary of Richard Cocks, edited by Edward Maunde Thompson. Town positions are Ordnance Survey Open Names points, read through postcodes.io. All distances and comparisons are our own calculations.

Why William Adams

## A Kentish pilot who taught geometry in Japan

What the editor of Cocks's diary records about him.

| Detail | From the source |
| --- | --- |
| Birthplace | "a town called Gillingham" |
| His distances | "two English miles from Rochester, one mile from Chatham" |
| His role at sea | Senior pilot of a Dutch trading fleet that sailed in 1598 |
| Arrival in Japan | The ship anchored in Bungo on 19 April 1600 |
| What he taught | "some points of geometry and understanding of the arts of mathematics" |
| Our finding | Both distances short by 1.54 miles; an offset, not a unit |

Diagnosing a systematic error, and in particular telling a scale error from an offset error, is a daily task in science and engineering. A thermometer that always reads two degrees high needs a different fix from one that reads ten percent high; a GPS track shifted sideways is a different fault from one stretched along its length. Sensors, surveys and machine learning models all get checked this way, by looking at differences and ratios side by side. A Gillingham learner who has done it with a four-hundred-year-old letter will recognise the pattern in any dataset.

Modern Age Coders has no link with Project Gutenberg, Ordnance Survey, postcodes.io or the census office. Their texts and data are theirs; the measurements and any error in them are ours.

Stages

## From rulers to real error analysis

Year groups are a starting guess; the free lesson makes the call.

Years 1 to 4

### Maps in blocks

Block coding with maps, routes and measuring.

[Coding for Kids](/courses/kids-coding-blocks-masterclass)[Scratch Coding for Kids](/courses/scratch-programming-complete-course)Years 5 to 8

### Python and distance

Coordinates, distances and comparisons in Python.

[Python and AI for Kids](/courses/python-ai-kids-masterclass)[Maths Through Coding](/courses/maths-through-coding)Years 9 to 13

### Errors, data and AI

Error analysis, geometry and AI beside GCSE and A level.

[Python for Teens](/courses/python-complete-masterclass-teens)[High School Mathematics](/courses/complete-high-school-mathematics-mastery)Adults

### Data and measurement

Adult Python towards data and measurement work.

[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)[Data Analysis Course](/courses/data-analysis-mastery-course-college)AI and old claims

## Would an AI blame the old mile?

A neat story can be more tempting than a test.

Ask a chatbot why Adams's distances look wrong and it may explain, confidently, that old English miles were longer. It sounds right, but the numbers on this page show that no single mile length fits both distances.

A Gillingham learner who has compared ratios and differences knows to test an explanation against every number, not just the one that suits it.

Testing a plausible explanation before accepting it is a strong reason for Gillingham teenagers to keep learning to code in 2026. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

How it works

## Rochester to Rainham, all online

Any home in Medway with a computer and reliable broadband is ready.

### Code by the learner

Students type every program themselves, and the tutor, watching by screen share, helps them along with questions.

### Placed by ability

A Year 5 or a Year 12 begins at the level the free lesson finds, with the exam board noted.

### Opening lesson free

A complete lesson with no charge, ending in a clear course suggestion.

### One level per group

Five to ten UK learners at a shared stage.

### Two lessons a week

None in the school holidays.

### A time that stays put

Our tutors handle the UK clock changes.

Why small groups meet online

Five Medway learners at the same level, free at the same hour, rarely live on one street. Online classes let each join a well-matched group.

Fees

## Gillingham fees

Gillingham families pay our standard rate for every country except India.

First class**USD 0**

One whole lesson for free, followed by a course suggestion.

Group tuition**USD 100**

Roughly eight live small-group lessons per month.

Private tuition**USD 150**

Roughly eight live private lessons per month.

We charge in US dollars, not sterling. Billing begins only after the trial has chosen a course and a regular weekly time; holidays, missed lessons and switching formats are all on the pricing page.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20would%20love%20a%20free%20AI%20or%20programming%20lesson%20for%20a%20learner%20in%20Gillingham.)Reviews

## Kent and UK families on Google

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

## Book a free Gillingham lesson

Tell us how old the learner is, or their school year, plus one interest. First-lesson ideas: a Scratch ship game, a first Python program, a short AI experiment, or measuring Adams's three distances.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Gillingham one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20would%20love%20a%20free%20AI%20or%20programming%20lesson%20for%20a%20learner%20in%20Gillingham.)

Submitted details are used for placement and follow-up.

FAQ

## Gillingham questions

The Adams project, Medway figures and practical points.

### What is the population of Gillingham?

The ONS gives 108,480 for the Gillingham built-up area at the 2021 census; Medway as a whole had 279,776.

### Can Gillingham learners take AI and programming classes online?

Yes. Learners aged 6 to 67 across Medway join our live online AI, programming, Python and maths lessons.

### Who was William Adams?

A navigator who described himself as born in Gillingham, two English miles from Rochester and one from Chatham; he reached Japan in 1600.

### Were his distances right?

Measured between today's gazetteer points, both are 1.54 miles too short, which fits a different starting point better than a different mile.

### How can you tell a unit error from an offset?

A unit error keeps ratios the same; an offset keeps differences the same. Here the differences match and the ratios do not.

### Are lessons held face to face?

No. Lessons happen live online only.

### Do you help with GCSE and A level?

Yes, in maths and computing, focused on understanding and never on promised grades.

### Which ages can join?

Everyone from 6 to 67.

### How much does it cost?

The trial lesson is free. Afterwards it is USD 100 per month in a group, or USD 150 per month one-to-one.

### Do you pause for school holidays?

Yes; tell us when they are.

Nearby

## More pages in Kent and the South East

Elsewhere in Kent, [Maidstone](/online-coding-and-python-classes-in-maidstone) has a Hazlitt project, and [Canterbury](/best-coding-class-in-canterbury) has its own page. County options are on [Kent](/coding-classes-in-kent), the region on [South East England](/coding-and-ai-classes-in-south-east-england), and every page is linked from the [UK hub](/coding-classes-in-united-kingdom).

Book the free class[Book a priority demo](/book-demo)[Talk to us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20would%20love%20a%20free%20AI%20or%20programming%20lesson%20for%20a%20learner%20in%20Gillingham.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-gillingham*
