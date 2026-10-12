---
title: "AI and Programming Classes in Berwick, Melbourne"
description: "Live online AI and programming classes for Berwick children, teenagers and adults: Scratch, Python and machine learning, in small groups or one to one."
canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-berwick-melbourne
source: src/pages/ai-and-programming-classes-in-berwick-melbourne.html
---
> Live online lessons where learners build models and then measure how good they are, honestly. Berwick is a family suburb: the 2021 Census counted 50,298 residents in 13,846 families, with 7.7% aged 10 to 14 against 6.0% across Victoria, and 89.0% of homes were separate houses.

[Home](/) / [Australia](/coding-classes-in-australia) / [Victoria](/coding-and-ai-classes-in-victoria) / [Melbourne](/vibe-coding-and-ai-agents-classes-in-melbourne) / Berwick

Berwick, City of Casey, Melbourne, Victoria / Live online

# AI and programming classes in Berwick

**What do AI and programming classes look like for Berwick learners?** Live online lessons where learners build models and then measure how good they are, honestly. Berwick is a family suburb: the 2021 Census counted 50,298 residents in 13,846 families, with 7.7% aged 10 to 14 against 6.0% across Victoria, and 89.0% of homes were separate houses.

Berwick station had 1,008,200 entries in FY24-25, up from 864,800 in FY18-19. That rise put it eighth of 219 Melbourne stations ranked by growth. Could a model have picked the top ten in advance? More importantly, how would you know whether it did well? That second question is where most machine learning projects go wrong.

Facts last verified 10 October 2026. Teaching is online; no Berwick branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Courses where models get measured

Each course here teaches learners to test a model before trusting it, the habit behind the ranking project. The free first class decides the starting point.

- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 13 to 17): Build models in Python, then score them against simple baselines.
- [Python for Teens](/courses/python-complete-masterclass-teens) (Ages 13 to 17): The Python needed to sort, rank and compare real data.
- [AI and ML Masterclass](/courses/ai-ml-masterclass-complete-college) (University and adult): Machine learning end to end, including evaluation metrics for ranking.
- [Data Science Course](/courses/data-science-complete-masterclass-college) (University and adult): Statistics and data work that make a metric mean something.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Houses, cars and school-age children

Figures for the Berwick suburb (ABS code SAL20224, listed as Berwick (Vic.)) from the 2021 Census QuickStats, set against Victoria.

**Berwick suburb, 2021 Census headline counts**

| Headline | Berwick |
|---|---|
| Residents | 50,298 |
| Median age | 38 |
| Families | 13,846 |
| Private dwellings | 17,981 |
| Average people per household | 2.9 |

**Berwick against Victoria**

| Measure | Berwick | Victoria |
|---|---|---|
| Separate houses | 89.0% (14,827) | 73.4% |
| Flats or apartments | 0.3% (52) | 12.1% |
| Residents aged 5 to 9 | 7.5% (3,750) | 6.2% |
| Residents aged 10 to 14 | 7.7% (3,890) | 6.0% |
| Workers who drove to work | 54.9% (13,925) | 49.9% |

### Two cars

Berwick homes averaged 2.1 motor vehicles each on Census night, with 2.9 people per household.

### Large area

The bureau measures the suburb at 33.20 square kilometres, in the City of Casey.

### Lockdown note

Because the Census fell in the August 2021 lockdown, the 6,401 residents who worked from home, 25.2%, describe that week only.

QuickStats adjusts small counts to protect privacy, so table rows may not sum to totals. Every figure here is quoted as published; we never add parts to make a new total.

## Which model finds the fastest-growing stations?

We took the 219 stations with figures in FY18-19, FY23-24 and FY24-25 and ranked them by FY24-25 entries as a share of FY18-19. Then we tried three ways of predicting that ranking and scored each one with two standard ranking metrics.

**Scores for each ranking model (our calculation from the station-entry files)**

| Model | Precision at 10 | NDCG at 10 | Berwick placed |
|---|---|---|---|
| Last year's growth, FY23-24 against FY18-19 | 0.8 | 0.9898 | 8th |
| Distance from Flinders Street | 0.2 | 0.6049 | 14th |
| Weekend share of trips in FY18-19 | 0.1 | 0.487 | 210th |
| Random order, average of 1,000 runs | 0.0475 | 0.553 | Anywhere |

### The plain model won

Assuming last year's growth continues found eight of the true top ten and put Berwick exactly where it finished, eighth.

### Cleverer, worse

Distance from the city and weekend share sound like sensible clues. Distance barely beat chance; weekend share did worse than chance on NDCG.

### Top of the list

Merinda Park grew most, to 1.882 times its FY18-19 entries, then Officer at 1.697; Berwick's ratio was 1.166.

### Read a metric next to its baseline

Random guessing scored 0.553 on NDCG at 10, because every station grew or shrank by a modest amount and so even a poor top ten earns partial credit. On its own, 0.6049 sounds respectable. Next to random, it shows distance from the city added very little. Always score a dumb baseline first.

The models, scores and rankings are ours, built on the department's published estimates, which are rounded to the nearest 50. They show what happened in our test; we make no claim about why any station grew.

## Two ways to score a ranked list

A ranking model is judged on its top results, because those are the ones anyone reads.

**Precision at k and NDCG at k**

| Metric | What it measures | Blind spot |
|---|---|---|
| Precision at 10 | How many of the model's top ten are in the true top ten | Ignores order inside the ten |
| NDCG at 10 | Rewards high true values placed near the top, discounted by position | Graded gains can flatter weak models |
| Spearman correlation | Agreement across the whole ranking | Treats rank 200 as seriously as rank 2 |

Last year's growth also had a Spearman correlation of 0.86 across all 219 stations, while distance from the city came out at minus 0.0429, essentially no relationship. NDCG divides the score of the model's list by the score of the perfect list, so 1 means the order was ideal.

### Younger learners

Guess the top five in a class vote, then count how many guesses made the real top five.

### Secondary students

Code precision at k and NDCG in Python and test them on the station files.

### Adults

Score a search or recommendation feature at work against a random baseline before reporting it.

## One station, twelve schools

More detail from the state files.

### Berwick station

The only metropolitan station inside the suburb, on the Pakenham line, with 1,008,200 entries in FY24-25.

### Schools

The 2025 school locations file places 12 open schools in Berwick: nine government, two Catholic and one independent, including Berwick Primary School and Berwick Secondary College.

### Term 1, 2027

Victorian government school students start on Thursday 28 January 2027; Term 1 ends on Thursday 25 March.

**Which Berwick** This page is about the Berwick suburb in Melbourne's south-east, in the City of Casey. Places with similar names elsewhere have their own figures, and none of them are used here.

## From class votes to ranking models

Ages are a rough guide; the free first class sets each learner's level.

- **Ages 6 to 10: Scratch** Games with scores, leaderboards and simple sorting. [Scratch Coding for Kids](/courses/scratch-programming-complete-course), [AI Literacy for Kids (Ages 8 to 14)](/courses/ai-literacy-for-kids-course)
- **Ages 10 to 14: Python and AI ideas** Lists, sorting and first guesses about what makes a model good. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [Maths Through Coding](/courses/maths-through-coding)
- **Ages 14 to 18: Machine learning** Train models, then measure them against baselines. [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens), [Data Science for Teens](/courses/data-science-course-for-teens-python-data)
- **University and adult: Applied AI** Evaluation, ranking and models that hold up in use. [AI and ML Masterclass](/courses/ai-ml-masterclass-complete-college), [Data Science Course](/courses/data-science-complete-masterclass-college)

## If an AI can build the model, why should a Berwick learner learn to score it?

Because building a model takes minutes now, and knowing whether it is any good is the part that still takes a person.

Ask an assistant for a model to predict station growth and it will give you one, often with an impressive sounding feature like distance from the city. It will rarely volunteer that a random guess scores 0.553 on the same metric, or that last year's numbers beat its idea easily.

A learner who has computed precision at 10 by hand and watched a sensible feature lose to chance knows to ask for the baseline every time. That question saves more projects than any new algorithm.

The Berwick learner who measures a model against a baseline is the one who can tell real progress from a good story. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## Berwick lessons, live online

Everything happens on screen, which suits a suburb where most trips mean the car.

- **Log in and build** At lesson time the learner opens the link, shares a screen and codes with the teacher watching.
- **Term calendar** Courses follow Victoria's school terms and pause in the state holidays.
- **Trial class** The free class is a normal lesson; afterwards we recommend a course and a weekly slot.
- **Matched groups** Five to ten learners per group, matched on level and pace.
- **Steady pace** Two fixed lessons a week, about eight each month, with breaks agreed early.
- **Teachers in India** Our teachers are in India: a 5:30pm Berwick lesson in summer is noon India time, then 1pm after Melbourne's clocks go back.

**Daylight saving** Melbourne's daylight saving began on Sunday 4 October 2026 and ends on Sunday 4 April 2027. India has no daylight saving, so we always confirm times in Melbourne time.

## Berwick class fees

Three prices, set out plainly.

- First class: USD 0. The first lesson is free and finishes with a clear recommendation.
- Group tuition: USD 100 a month. A month of group lessons, usually eight, with five to ten learners at the same level.
- Private tuition: USD 150 a month. About eight lessons a month, one teacher with one learner.

Families outside India are billed in US dollars, so Berwick pays the same as other families abroad. Billing starts only after the trial has settled course and time; holidays, absences and changing format are covered on the pricing page.

## Berwick AI and programming questions

### How many people live in Berwick?

The 2021 Census QuickStats for the Berwick suburb record 50,298 residents, 13,846 families and 17,981 private dwellings.

### What is precision at 10?

The share of a model's top ten that are truly in the top ten. Our strongest station model scored 0.8, meaning eight of its ten picks were right.

### What is NDCG?

Normalised discounted cumulative gain: a score from 0 to 1 that rewards putting the most relevant items at the very top of a list.

### What did the Berwick ranking project show?

That the simplest model, assuming last year's growth continues, beat two cleverer-sounding ones, and that a metric only means something next to a random baseline.

### At what age can children start AI classes?

From six, with Scratch and simple AI activities. Training and testing real models usually starts in the early teens, once Python is familiar.

### Do learners need maths for machine learning?

Some helps, and we teach it as needed. Ranking metrics like these need only fractions, sorting and logarithms explained with examples.

### Is there a Berwick centre?

No. All teaching is live online, we have no premises in Australia, and the phone number shown is an Indian number.

### What do AI classes cost for Berwick learners?

The first lesson is free. Group classes then cost USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, or USD 150 a month for one-to-one lessons. Course, format and time are agreed before paying.

### How many are in a group?

Five to ten learners, grouped by level, pace and goals. Private lessons are offered when no group time works.

### Can adults join AI classes?

Yes. Adults have their own groups or study privately, often to evaluate AI tools they already use at work.

## More for Berwick learners

For younger learners, read about [coding classes for kids in Melbourne](/coding-classes-for-kids-melbourne). Families weighing selective entry can see [Victorian selective entry maths practice](/victorian-selective-entry-exam-maths-practice), and the [Victoria guide](/coding-and-ai-classes-in-victoria) covers the state.

## Contact

Book the free class on [https://learn.modernagecoders.com/ai-and-programming-classes-in-berwick-melbourne](https://learn.modernagecoders.com/ai-and-programming-classes-in-berwick-melbourne#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
