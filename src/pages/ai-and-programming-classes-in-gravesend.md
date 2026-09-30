---
title: "AI and Programming Classes in Gravesend | Python, Ages 6 to 67"
description: "AI, programming, Python and vibe coding taught live online for Gravesend, Chalk, Denton, Singlewell and Riverview Park, ages 6 to 67. The first lesson is free."
canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-gravesend
source: src/pages/ai-and-programming-classes-in-gravesend.html
---
> Gravesend is a town in the Kent borough of Gravesham, and its built-up area held 58,105 residents at the 2021 census according to the ONS. Chalk, Denton, Singlewell, Riverview Park and Westcourt are recorded suburbs inside it, and Northfleet is a separate built-up area in the same borough. Children from six, teenagers and adults up to 67 learn AI, programming, Python, vibe coding and maths here in live video lessons led by tutors in India, in private sessions or in groups of five to ten at one level. We teach how to reason about uncertainty before we teach any AI tool. A free first lesson comes with a course recommendation; continuing is USD 100 a month in a group or USD 150 a month one-to-one. In the Gravesend project, a short Python program estimates how different the borough's 327 Census areas are from one another by a method widely used in statistics and AI research: propose a guess, compare it, keep it or throw it away.

[Home](/) / [United Kingdom](/coding-classes-in-united-kingdom) / [South East England](/coding-and-ai-classes-in-south-east-england) / Gravesend

Gravesend, Gravesham, Kent / Live online

# AI and programming classes in Gravesend

**Which AI and programming classes are best for learners in Gravesend?** Gravesend is a town in the Kent borough of Gravesham, and its built-up area held 58,105 residents at the 2021 census according to the ONS. Chalk, Denton, Singlewell, Riverview Park and Westcourt are recorded suburbs inside it, and Northfleet is a separate built-up area in the same borough. Children from six, teenagers and adults up to 67 learn AI, programming, Python, vibe coding and maths here in live video lessons led by tutors in India, in private sessions or in groups of five to ten at one level. We teach how to reason about uncertainty before we teach any AI tool. A free first lesson comes with a course recommendation; continuing is USD 100 a month in a group or USD 150 a month one-to-one. In the Gravesend project, a short Python program estimates how different the borough's 327 Census areas are from one another by a method widely used in statistics and AI research: propose a guess, compare it, keep it or throw it away.

Some questions have no formula. Suppose you want to know not just the average of something across a borough but how much its neighbourhoods truly vary, after allowing for the fact that small samples wobble by chance. You can write down how plausible any particular answer is, given the data, yet you cannot solve for the full range of plausible answers on paper. The Metropolis-Hastings algorithm gets round this with a wandering guess. It takes a step, checks whether the new position explains the data better, and accepts or rejects the step by a simple rule. Where the wanderer spends its time turns out to be the answer. The Gravesend project builds one from scratch and then breaks it on purpose.

Facts last verified 30 September 2026. Teaching is online; no Gravesend branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## AI, Python and thinking courses for Gravesend

One suggestion for each age band. All start with a live lesson that is free and needs no card.

- [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids) (Ages 7 to 12): Learning how to think: guessing, checking, and deciding when to keep a guess.
- [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev) (Ages 8 to 12): Children tell an AI what game to build in Scratch, then check that it behaves.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 13 to 17): Machine learning in Python, with chance, sampling and models built by hand first.
- [Statistics & Probability](/courses/statistics-probability-maths-course) (Students and adults): Probability and statistics, the foundation under samplers like the one on this page.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Gravesend, Chalk, Denton, Singlewell and Riverview Park

Four ONS built-up areas in Gravesham, and the suburbs recorded within Gravesend.

**ONS built-up areas in Gravesham, 2021 census residents**

| Built-up area | Residents (2021) |
|---|---|
| Gravesend | 58,105 |
| Northfleet | 29,900 |
| Meopham | 4,350 |
| Istead Rise | 3,395 |

Each row is its own ONS figure; the table is not a breakdown of a total and we have not summed it. Chalk, Denton, Riverview Park, Singlewell, Windmill Hill and Westcourt appear on postcodes.io as suburban areas, and the Census output area closest to each is in the Gravesend built-up area. Perry Street and Rosherville are recorded suburbs too, but their closest output areas belong to Northfleet. Kent schools follow England's national curriculum through GCSE and A level, and our timetable gives way to whatever holidays you tell us about.

### Kent, the South East and thinking first

There are broader pages for [Kent](/coding-classes-in-kent) and [South East England](/coding-and-ai-classes-in-south-east-england). Why we teach reasoning before tools is explained on [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

## Metropolis-Hastings: sampling an answer that cannot be calculated

One Census table, two unknowns, 20,000 steps, and four step sizes.

The learner downloads one Census 2021 table from Nomis: for each of Gravesham's 327 output areas, the number of households and the number with no car or van. Across the borough that is 8,199 of 41,733 households, or 19.65%. But the areas differ a great deal, from 0.8% to 62.4%, with a standard deviation of 13.15 percentage points. If every household in the borough simply had the same 19.65% chance, luck alone would produce a spread of about 3.59 points. The gap between 3.59 and 13.15 is called overdispersion, and it says the areas are really different, not just noisy.

A beta-binomial model describes this with two unknowns: a typical share, and a number for how alike the areas are. The sampler starts from a deliberately bad guess, a typical share of 50%. At each step it nudges both unknowns by a small random amount, works out how well the new pair explains all 327 areas, and accepts the move always if it is better and sometimes if it is worse. It runs 20,000 steps and the first 5,000, the burn-in, are thrown away. The only thing the learner changes between runs is the size of the nudge.

**Four runs of our Metropolis-Hastings sampler on Gravesham's Census areas, 15,000 kept steps each**

| Step size | Moves accepted | Worth about this many independent draws |
|---|---|---|
| 0.005 (tiny) | 93.9% | 34 |
| 0.05 | 59.1% | 1,424 |
| 0.5 | 2.8% | 290 |
| 3.0 (huge) | 0.1% | 12 |

A high acceptance rate sounds good and is not. With tiny steps nearly every move is accepted, but the sampler shuffles along so slowly that its first 200 guesses still average 46.0% and 15,000 steps carry the information of only 34 independent draws. With huge steps almost every proposal lands somewhere absurd and is refused, so the chain sits still. The middle setting does the job: a typical share of 19.38%, with 95% of the kept draws between 18.02% and 20.88%, and a model that predicts a spread of 12.55 points between areas, close to the 13.15 observed. The sampler has measured how unlike one another Gravesham's neighbourhoods are, and it has also shown the learner how easily a badly tuned one reports nonsense with a straight face.

### Ages 8 to 11

Play a hot-and-cold game where a step towards "warmer" is always taken and a step towards "colder" only on a dice roll.

### Ages 11 to 15

Code a one-unknown sampler in Python for a biased coin and plot the path of its guesses.

### Ages 15 and up

Fit the two-unknown model to all 327 areas, vary the step size and compare acceptance rates.

### Source of the figures

Household counts come from the Office for National Statistics Census 2021, table TS045, through Nomis, under the Open Government Licence. The model, the sampler and every number it produced are our own, and the project says nothing about why any area has the share it has.

## What a sampler teaches about vibe coding and AI agents

Running without an error is not the same as being right.

**From the Gravesend sampler to AI-written code**

| In the sampling project | When an AI writes or runs the analysis |
|---|---|
| 93.9% accepted, yet only 34 useful draws | A healthy-looking number can hide a failed run |
| First 200 guesses averaged 46.0% | Check that early output has been discarded |
| Step size changed everything | Ask which settings the AI chose, and why |
| Spread of 3.59 expected, 13.15 seen | Compare the model with the raw data |
| Four runs, not one | Repeat with different settings before believing |

An AI assistant will write a working Metropolis-Hastings sampler in seconds, pick a step size without comment, and print a confident result. Every one of the four runs above finished without an error message. In vibe coding the learner explains the goal and the AI supplies code, and Gravesend students are taught that the explaining includes the checks: acceptance rate, burn-in, a plot of the chain. AI agents that run analyses unattended make the problem sharper, because no one is looking at the plot. Our learners build agents once they write Python confidently by themselves, in most cases from sixteen, and Copilot Studio agents are covered in one-to-one lessons only. More is on [the UK students' AI agents page](/ai-agents-course-for-students-uk) and on [understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-uk).

Neither the ONS, Nomis nor postcodes.io has any part in this page. We use the data they release openly and take responsibility for what we did with it.

## From hot-and-cold games to samplers in Python

Ages and years overlap. We settle the level in the free lesson.

- **Years 2 to 7: How to think** Guess, check, keep or discard: reasoning with chance. [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **Years 4 to 8: Vibe coding for kids** Small games and tools, drafted with AI and tested by the learner. [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev), [Python and AI for Kids](/courses/python-ai-kids-masterclass)
- **Years 9 to 13: Python and machine learning** Probability, models and sampling beside GCSE and A level study. [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens), [Python for Teens](/courses/python-complete-masterclass-teens)
- **Adults: Statistics and AI** Probability, inference, generative AI and agents. [Statistics & Probability](/courses/statistics-probability-maths-course), [Generative AI Course](/courses/complete-generative-ai-masterclass-college)

## What is the Metropolis-Hastings algorithm, and how does MCMC sampling work?

The Metropolis-Hastings algorithm is a way of drawing samples from a distribution you can score but cannot solve: it proposes a random step from the current guess, always accepts a step to a more plausible value and accepts a step to a less plausible one with a probability equal to the ratio of the two scores (for an even-handed step like ours; the Hastings correction adjusts for lopsided proposals), which is the accept-or-reject loop at the heart of MCMC, or Markov chain Monte Carlo.

Fitted to 327 Census areas in Gravesham, a sampler with a step size of 0.05 accepted 59.1% of its moves and settled on a typical no-car share of 19.38%, while a step size of 0.005 accepted 93.9% and produced the equivalent of only 34 independent draws.

Learners who have tuned one ask of any AI-run analysis: which settings were used, and what would show that it had failed?

Gravesend teenagers who have written a sampler line by line can tell a result from a rumour, and that is a skill which grows out of coding, not out of asking a chatbot. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## Online across Chalk, Denton and Singlewell

Bring a computer that has a real keyboard, and a connection that can carry video.

- **Learners write the code** Tutors watch a shared screen, ask what the learner thinks will happen, and let them find out.
- **We find the level** The opening lesson reveals what is solid and what is shaky, and we record the exam board where relevant.
- **A free first lesson** No fee is charged for it, and you leave with a named course.
- **Groups at one stage** Five to ten learners from across Britain, all at the same point.
- **Twice a week** Lessons pause whenever schools are on holiday.
- **One fixed time** Your lesson hour stays put when British clocks change.

**Why not in person** To teach a group well, every learner in it must be at the same stage and free at the same time. One borough cannot fill such a class at every level, but the whole of the UK can.

## What Gravesend learners pay

Gravesend falls under our international pricing, which applies to all countries other than India.

- First class: USD 0. A complete free lesson, with a course suggestion at the end.
- Group tuition: USD 100 a month. In the region of eight live group lessons a month.
- Private tuition: USD 150 a month. In the region of eight live private lessons a month.

We price in US dollars only, and there is no pound sterling list. You are invoiced after the free lesson, when the course and the weekly hour have been chosen. Holidays, absences and swapping between group and private are dealt with on the pricing page.

## Gravesend questions

### What is the population of Gravesend?

At the 2021 census the ONS put 58,105 residents in the Gravesend built-up area.

### Are there AI and programming classes for Gravesend?

Yes, taught live on video. Learners aged 6 to 67 join from Chalk, Denton, Singlewell, Riverview Park, Northfleet and the villages of Gravesham.

### What is an acceptance rate in MCMC?

The share of proposed moves the sampler accepts. Very high usually means the steps are too small to explore; very low means they are too big. In our test 59.1% worked well, and 93.9% and 0.1% both worked badly.

### What is overdispersion?

More variation between groups than chance alone would produce. No-car shares across Gravesham's 327 areas have a spread of 13.15 points where luck alone predicts about 3.59.

### What is the Gravesend project?

Writing a Metropolis-Hastings sampler in Python, fitting a beta-binomial model to Census counts for 327 areas, and seeing how the step size decides whether the result can be trusted.

### Does vibe coding feature in lessons?

It does. The learner states the goal and the checks, the AI drafts the code, and the learner verifies it.

### When are AI agents introduced?

After a learner writes Python confidently alone, usually from sixteen. Copilot Studio agents are limited to private lessons.

### Do you teach what GCSE and A level computer science and maths need?

Yes, topic by topic and for understanding. We give no guarantee of a grade.

### How much are lessons?

Lesson one is free. After it, the monthly fee is USD 100 for a group place and USD 150 for private tuition.

### Do you teach through the school holidays?

Only if you want us to. Otherwise we stop for the dates you send.

## More Kent pages

Other towns have their own projects: [Dartford](/best-coding-and-ai-classes-in-dartford), [Chatham](/ai-and-programming-classes-in-chatham), [Rochester](/best-coding-and-ai-classes-in-rochester) and [Maidstone](/online-coding-and-python-classes-in-maidstone). The [UK hub](/coding-classes-in-united-kingdom) lists every place we cover.

## Contact

Book the free class on [https://learn.modernagecoders.com/ai-and-programming-classes-in-gravesend](https://learn.modernagecoders.com/ai-and-programming-classes-in-gravesend#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
