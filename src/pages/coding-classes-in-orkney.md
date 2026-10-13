---
title: "Coding Classes in the Orkney Islands | Live Online, Ages 6 to 67"
description: "Live online coding, Python and maths classes across the Orkney Islands, from Kirkwall and Stromness to Finstown, Hoy, Sanday, Westray and North Ronaldsay."
canonical: https://learn.modernagecoders.com/coding-classes-in-orkney
source: src/pages/coding-classes-in-orkney.html
---
> Live online coding, Python and maths classes across the Orkney Islands, from Kirkwall and Stromness to Finstown, Hoy, Sanday, Westray and North Ronaldsay.

Skip to contentCourses for Orkney

## Island starting points

A P3 pupil in Stromness who likes puzzles, a P7 in Kirkwall ready for Python, an S4 on Hoy thinking about Computing Science, and an adult in Finstown learning to automate. Each starts with a free lesson.

[![Coding for Kids course thumbnail](/images/kids-coding.webp)Ages 6 to 12Coding for KidsBlock coding with sorting games, pairing puzzles and simple rules.See the syllabus](/courses/kids-coding-blocks-masterclass)[![Python and AI for Kids course thumbnail](/images/python-kids.webp)Ages 9 to 13Python and AI for KidsA first typed language, with lists, loops and small decision programs.See the syllabus](/courses/python-ai-kids-masterclass)[![Problem Solving for Teens course thumbnail](/images/problem-solving-teens.webp)Ages 13 to 18Problem Solving for TeensAlgorithms and data structures for teenagers, including matching and scheduling problems.See the syllabus](/courses/problem-solving-dsa-masterclass-teens)[![Python Masterclass course thumbnail](/images/python-college.webp)AdultsPython MasterclassPython from zero for adults, through to planning and allocation scripts.See the syllabus](/courses/python-programming-masterclass-zero-to-advanced-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Orkney figures

## About 22,000 people across the islands

The islands-wide totals are 2022 census first results, rounded by National Records of Scotland. Settlement figures are NRS estimates for mid-2020.

| Locality | Residents |
| --- | --- |
| Kirkwall | 7,500 |
| Stromness | 1,790 |
| Finstown | 500 |

Orkney has 22.2 residents per square kilometre, about a third of Scotland's 69.8. From the census age bands, added up by us, 15.0 per cent of islanders are under 15, close to Scotland's 15.3, and 25.0 per cent are 65 or over, well above the national 20.1. Orkney Islands Council sets school terms; we have not read them and fit lessons around each family's dates.

### Other island and exam pages

See [the Western Isles](/coding-classes-in-na-h-eileanan-siar) and [the Highlands](/coding-classes-in-highland). For qualifications: [National 5 Computing Science](/national-5-computing-science-help) and [Higher Computing Science](/higher-computing-science-help).

The Orkney project

## Nine crofters, nine stretches of wall

Everyone has preferences, and the job is to find a deal nobody wants to break.

The model is invented. Nine crofters must each take one of nine stretches of an island wall to repair. Each crofter ranks the stretches, preferring ones near home and ones that are easier. An imaginary court ranks the crofters for each stretch, preferring experienced wallers. A pairing is unstable if some crofter and some stretch both prefer each other to what they were given, because then that crofter has every reason to swap. Computer scientists call such a pair a blocking pair. The goal is a stable matching with none.

| Method | Blocking pairs | Crofters' choice ranks added up | Worst-off crofter |
| --- | --- | --- | --- |
| First come, first served | 10 | 34 | Ninth choice |
| Gale-Shapley, crofters propose | 0 | 32 | Seventh choice |
| Gale-Shapley, sections propose | 0 | 32 | Seventh choice |

First come, first served feels fair: crofters pick in turn, each taking their favourite free stretch. The early pickers do well, the last one gets their ninth choice, and ten pairs of crofter and stretch would both rather be together, so the arrangement would not last. The Gale-Shapley algorithm, invented in 1962, does better. Unmatched crofters propose to their favourite stretch not yet tried; each stretch holds on to its most preferred offer so far and drops the rest. It always ends, here after 32 proposals, and always gives a stable matching. The learner confirms it by brute force: of all 362,880 possible ways to pair nine crofters with nine stretches, exactly one is stable, and the algorithm found it. Stability even helped the crofters overall, with a lower rank total than first come, first served.

Who proposes can matter enormously. The learner builds a tiny three-by-three example with circular preferences. When crofters propose, all three get their first choice. When the stretches propose, all three crofters get their third choice. Both results are stable. The algorithm always favours the side that proposes, a fact with real consequences when it is used to place doctors in hospitals or pupils in schools.

### Ages 8 to 11

Play the matching game with cards for jobs and people, then spot any pair that would rather swap.

### Ages 11 to 15

Code first come, first served in Python and write a function that finds every blocking pair.

### Ages 15 and up

Implement Gale-Shapley, check stability by brute force, and build the example where proposing changes everything.

### A real wall, an imaginary rota

The dyke, the sheep court and the shared repairs come from the Historic Environment Scotland listing. How repairs were actually shared out is not described there; the crofters, stretches and preferences here are all invented.

Why the North Ronaldsay dyke

## A wall around a whole island

What Historic Environment Scotland records.

| Listing detail | What it records |
| --- | --- |
| Date | Circa 1832, with later alterations |
| Size | 12 to 13 miles long, roughly six feet high, drystone, around the island's perimeter |
| Purpose | Keeping sheep on the foreshore, grazing on seaweed, for most of the year |
| Pens | Nine circular punds at the north end, near Dennis Head |
| Punding | A communal gathering six times a year, for numbering, clipping, dipping and selection |
| Upkeep | Overseen by a sheep court; regulations agreed between laird and crofters in 1839 |

Stable matching is not a toy. Versions of Gale-Shapley are used to allocate school places, match trainee doctors to hospitals and assign students to university housing, and Lloyd Shapley later shared a Nobel prize in economics for this line of work. An Orkney pupil who has built it from scratch understands one of the most useful algorithms ever written, and why the rules of an allocation matter as much as the code.

We are not connected with Historic Environment Scotland or Orkney Islands Council. The listing facts are theirs; the crofters, the stretches, the preferences and any errors belong to our model.

Learning path

## From card games to algorithms

Stages are a rough guide. The free lesson places each learner properly.

P1 to P4

### Pairs and puzzles

Block coding with matching games and simple rules.

[Coding for Kids](/courses/kids-coding-blocks-masterclass)[Scratch Coding for Kids](/courses/scratch-programming-complete-course)P5 to S2

### Lists and loops

Typed Python with lists, choices and small simulations.

[Python and AI for Kids](/courses/python-ai-kids-masterclass)[Maths Through Coding](/courses/maths-through-coding)S3 to S6

### Algorithms

Classic algorithms and proofs beside National 5, Higher and Advanced Higher Computing Science.

[Problem Solving for Teens](/courses/problem-solving-dsa-masterclass-teens)[Python for Teens](/courses/python-complete-masterclass-teens)Adults

### Planning with code

Python for adults who schedule, allocate and plan.

[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)[Data Analysis Course](/courses/data-analysis-mastery-course-college)AI and fairness

## An AI can produce a rota in seconds. Will anyone want to swap?

A neat-looking allocation can hide ten reasons to break it.

Ask a chatbot to allocate people to jobs from a list of preferences and it will produce a tidy table. Whether any pair would both rather be together, and whose side the method quietly favours, is rarely checked unless someone asks.

An Orkney learner who has written a blocking-pair checker can test any allocation in seconds, and knows that choosing who proposes is a decision about fairness, not a detail. That is the kind of scrutiny AI output needs.

An Orkney teenager should still learn to code in 2026 for exactly this reason: to check whether a clever-looking answer is also a fair one. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

Island lessons

## From Kirkwall to the North Isles, online

For learners on Mainland and on the smaller isles alike, lessons arrive by video.

### A connection is the only commute

Any island home with a laptop and steady internet works; the teacher follows the learner's screen live.

### Scottish stages in use

We talk in P and S stages and National 5, Higher and Advanced Higher, like Orkney schools, and teach in English.

### No-cost first lesson

A real lesson, free, followed by honest advice.

### Groups by stage

Fifteen to twenty learners at the same stage, from many different places.

### Lessons in term time

Two lessons a week during term, with breaks for the holidays.

### Same UK time year-round

Your lesson keeps its UK time through the clock changes; our teachers on India time adapt.

Why island groups are wide

On any one island there may be no other learner at your stage. Grouping by stage across a wide pool gives a pupil in Stromness or on Sanday a class that fits.

Fees

## Fees in Orkney

Kirkwall or Westray, the fee is the same, matching every country we teach outside India.

First class**USD 0**

A whole lesson at no charge, then a clear suggestion.

Group tuition**USD 100**

About eight lessons a month in a group of fifteen to twenty.

Private tuition**USD 150**

About eight lessons a month, one-to-one.

Prices are in US dollars and we have no sterling list. We bill only once a course and a weekly time are agreed after the free lesson; holidays, missed lessons and format changes are explained on the pricing page.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20Orkney%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)Reviews

## Google reviews of our teaching

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

## Book a free Orkney lesson

Tell us which island, the learner's age or stage, and what they enjoy. The first lesson could be a Scratch puzzle, a first Python program, or the matching problem on this page.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Orkney Islands one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20Orkney%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)

Submitted details are used for placement and follow-up.

FAQ

## Orkney questions

The islands, the sheep dyke project and how lessons work.

### How many people live in Orkney?

About 22,000 residents in roughly 10,600 households, from the rounded first results of Scotland's 2022 census.

### What are the main towns in Orkney?

NRS mid-2020 estimates give Kirkwall 7,500 and Stromness 1,790, with Finstown at 500.

### What is the North Ronaldsay project?

Learners share out nine invented repair jobs on an island wall using the Gale-Shapley algorithm in Python, check that no pair would rather swap, and see how first come, first served leaves ten such pairs.

### What is a stable matching?

A pairing in which no two sides would both prefer each other to the partners they were given, so nobody has a reason to break the arrangement.

### How long is the North Ronaldsay sheep dyke?

Historic Environment Scotland describes it as 12 to 13 miles long and roughly six feet high, built around 1832, and lists it at Category A.

### Can learners on the smaller isles join?

Yes. Lessons are online, so anyone with a reliable internet connection can take part.

### Do you teach Higher Computing Science?

Yes, along with National 5 Computing Science and maths. We teach understanding and do not promise grades.

### What ages can learn?

Anyone aged 6 to 67, from block coding for children to algorithms for teenagers and Python for adults.

### What does it cost?

The first lesson is free. After that, USD 100 a month in a group or USD 150 a month one-to-one.

### Do lessons stop in the school holidays?

Yes. Send us your school's holiday dates and we pause for them.

Further pages

## Beyond Orkney

See [the Western Isles](/coding-classes-in-na-h-eileanan-siar), [the Highlands](/coding-classes-in-highland) and [Inverness](/best-coding-class-in-inverness), or every council on the [Scotland](/coding-and-ai-classes-in-scotland) page. The [UK hub](/coding-classes-in-united-kingdom) covers the rest.

Book the free class[Book a priority demo](/book-demo)[WhatsApp us](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20Orkney%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/coding-classes-in-orkney*
