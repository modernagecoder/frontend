---
title: "Coding Classes in the Orkney Islands | Live Online, Ages 6 to 67"
description: "Live online coding, Python and maths classes across the Orkney Islands, from Kirkwall and Stromness to Finstown, Hoy, Sanday, Westray and North Ronaldsay."
canonical: https://learn.modernagecoders.com/coding-classes-in-orkney
source: src/pages/coding-classes-in-orkney.html
---
> The Orkney Islands council area had about 22,000 residents in roughly 10,600 households at Scotland's 2022 census, at 22.2 people per square kilometre. Kirkwall is the main town, with Stromness second and Finstown the only other settlement NRS counts as a locality; many islanders live on farms and in smaller isles. Because every lesson is live online from India, an island address makes no difference, and a free first lesson decides where each learner starts, P1 to S6 or adult. Ages 6 to 67 learn coding, Python and maths, either one-to-one or in groups of five to ten. The Orkney project comes from North Ronaldsay's sheep dyke. After the free lesson, fees are USD 100 a month for a group or USD 150 a month one-to-one.

[Home](/) / [United Kingdom](/coding-classes-in-united-kingdom) / [Scotland](/coding-and-ai-classes-in-scotland) / Orkney Islands

Orkney Islands / Live online

# Coding classes in the Orkney Islands

**What are the best coding classes in Orkney?** The Orkney Islands council area had about 22,000 residents in roughly 10,600 households at Scotland's 2022 census, at 22.2 people per square kilometre. Kirkwall is the main town, with Stromness second and Finstown the only other settlement NRS counts as a locality; many islanders live on farms and in smaller isles. Because every lesson is live online from India, an island address makes no difference, and a free first lesson decides where each learner starts, P1 to S6 or adult. Ages 6 to 67 learn coding, Python and maths, either one-to-one or in groups of five to ten. The Orkney project comes from North Ronaldsay's sheep dyke. After the free lesson, fees are USD 100 a month for a group or USD 150 a month one-to-one.

Around the edge of North Ronaldsay runs a drystone wall 12 to 13 miles long and roughly six feet high, built around 1832. Historic Environment Scotland lists it at Category A and calls it probably the largest drystone construction conceived as a single entity in the world. It keeps the island's sheep on the shore, where they eat seaweed, and a sheep court oversaw its upkeep, with every farmer taking a hand in the repairs. Sharing out jobs among people with different wishes is a real computing problem. Give everyone their first choice and some sections go unrepaired; assign them carelessly and people quietly swap. This page's project solves it in Python with a famous algorithm that guarantees nobody has a reason to break the deal.

Facts last verified 26 September 2026. Teaching is online; no Orkney Islands branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Island starting points

A P3 pupil in Stromness who likes puzzles, a P7 in Kirkwall ready for Python, an S4 on Hoy thinking about Computing Science, and an adult in Finstown learning to automate. Each starts with a free lesson.

- [Coding for Kids](/courses/kids-coding-blocks-masterclass) (Ages 6 to 12): Block coding with sorting games, pairing puzzles and simple rules.
- [Python and AI for Kids](/courses/python-ai-kids-masterclass) (Ages 9 to 13): A first typed language, with lists, loops and small decision programs.
- [Problem Solving for Teens](/courses/problem-solving-dsa-masterclass-teens) (Ages 13 to 18): Algorithms and data structures for teenagers, including matching and scheduling problems.
- [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college) (Adults): Python from zero for adults, through to planning and allocation scripts.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## About 22,000 people across the islands

The islands-wide totals are 2022 census first results, rounded by National Records of Scotland. Settlement figures are NRS estimates for mid-2020.

**Orkney localities, NRS mid-2020 estimates**

| Locality | Residents |
|---|---|
| Kirkwall | 7,500 |
| Stromness | 1,790 |
| Finstown | 500 |

Orkney has 22.2 residents per square kilometre, about a third of Scotland's 69.8. From the census age bands, added up by us, 15.0 per cent of islanders are under 15, close to Scotland's 15.3, and 25.0 per cent are 65 or over, well above the national 20.1. Orkney Islands Council sets school terms; we have not read them and fit lessons around each family's dates.

### Other island and exam pages

See [the Western Isles](/coding-classes-in-na-h-eileanan-siar) and [the Highlands](/coding-classes-in-highland). For qualifications: [National 5 Computing Science](/national-5-computing-science-help) and [Higher Computing Science](/higher-computing-science-help).

## Nine crofters, nine stretches of wall

Everyone has preferences, and the job is to find a deal nobody wants to break.

The model is invented. Nine crofters must each take one of nine stretches of an island wall to repair. Each crofter ranks the stretches, preferring ones near home and ones that are easier. An imaginary court ranks the crofters for each stretch, preferring experienced wallers. A pairing is unstable if some crofter and some stretch both prefer each other to what they were given, because then that crofter has every reason to swap. Computer scientists call such a pair a blocking pair. The goal is a stable matching with none.

**Our invented dyke repairs, three ways of sharing out nine jobs, 26 September 2026**

| Method | Blocking pairs | Crofters' choice ranks added up | Worst-off crofter |
|---|---|---|---|
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

## A wall around a whole island

What Historic Environment Scotland records.

**North Ronaldsay, Sheep Dyke and Associated Punds, HES listing LB46400**

| Listing detail | What it records |
|---|---|
| Date | Circa 1832, with later alterations |
| Size | 12 to 13 miles long, roughly six feet high, drystone, around the island's perimeter |
| Purpose | Keeping sheep on the foreshore, grazing on seaweed, for most of the year |
| Pens | Nine circular punds at the north end, near Dennis Head |
| Punding | A communal gathering six times a year, for numbering, clipping, dipping and selection |
| Upkeep | Overseen by a sheep court; regulations agreed between laird and crofters in 1839 |

Stable matching is not a toy. Versions of Gale-Shapley are used to allocate school places, match trainee doctors to hospitals and assign students to university housing, and Lloyd Shapley later shared a Nobel prize in economics for this line of work. An Orkney pupil who has built it from scratch understands one of the most useful algorithms ever written, and why the rules of an allocation matter as much as the code.

We are not connected with Historic Environment Scotland or Orkney Islands Council. The listing facts are theirs; the crofters, the stretches, the preferences and any errors belong to our model.

## From card games to algorithms

Stages are a rough guide. The free lesson places each learner properly.

- **P1 to P4: Pairs and puzzles** Block coding with matching games and simple rules. [Coding for Kids](/courses/kids-coding-blocks-masterclass), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **P5 to S2: Lists and loops** Typed Python with lists, choices and small simulations. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [Maths Through Coding](/courses/maths-through-coding)
- **S3 to S6: Algorithms** Classic algorithms and proofs beside National 5, Higher and Advanced Higher Computing Science. [Problem Solving for Teens](/courses/problem-solving-dsa-masterclass-teens), [Python for Teens](/courses/python-complete-masterclass-teens)
- **Adults: Planning with code** Python for adults who schedule, allocate and plan. [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college), [Data Analysis Course](/courses/data-analysis-mastery-course-college)

## An AI can produce a rota in seconds. Will anyone want to swap?

A neat-looking allocation can hide ten reasons to break it.

Ask a chatbot to allocate people to jobs from a list of preferences and it will produce a tidy table. Whether any pair would both rather be together, and whose side the method quietly favours, is rarely checked unless someone asks.

An Orkney learner who has written a blocking-pair checker can test any allocation in seconds, and knows that choosing who proposes is a decision about fairness, not a detail. That is the kind of scrutiny AI output needs.

An Orkney teenager should still learn to code in 2026 for exactly this reason: to check whether a clever-looking answer is also a fair one. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## From Kirkwall to the North Isles, online

For learners on Mainland and on the smaller isles alike, lessons arrive by video.

- **A connection is the only commute** Any island home with a laptop and steady internet works; the teacher follows the learner's screen live.
- **Scottish stages in use** We talk in P and S stages and National 5, Higher and Advanced Higher, like Orkney schools, and teach in English.
- **No-cost first lesson** A real lesson, free, followed by honest advice.
- **Groups by stage** Five to ten learners at the same stage, from many different places.
- **Lessons in term time** Two lessons a week during term, with breaks for the holidays.
- **Same UK time year-round** Your lesson keeps its UK time through the clock changes; our teachers on India time adapt.

**Why island groups are wide** On any one island there may be no other learner at your stage. Grouping by stage across a wide pool gives a pupil in Stromness or on Sanday a class that fits.

## Fees in Orkney

Kirkwall or Westray, the fee is the same, matching every country we teach outside India.

- First class: USD 0. A whole lesson at no charge, then a clear suggestion.
- Group tuition: USD 100 a month. About eight lessons a month in a group of five to ten.
- Private tuition: USD 150 a month. About eight lessons a month, one-to-one.

Prices are in US dollars and we have no sterling list. We bill only once a course and a weekly time are agreed after the free lesson; holidays, missed lessons and format changes are explained on the pricing page.

## Orkney questions

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

## Beyond Orkney

See [the Western Isles](/coding-classes-in-na-h-eileanan-siar), [the Highlands](/coding-classes-in-highland) and [Inverness](/best-coding-class-in-inverness), or every council on the [Scotland](/coding-and-ai-classes-in-scotland) page. The [UK hub](/coding-classes-in-united-kingdom) covers the rest.

## Contact

Book the free class on [https://learn.modernagecoders.com/coding-classes-in-orkney](https://learn.modernagecoders.com/coding-classes-in-orkney#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email contact@modernagecoders.com. Rated 4.9 across 547 Google reviews.
