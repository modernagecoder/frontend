---
title: "AI and Programming Classes in Horsham | Python, Ages 6 to 67"
description: "AI, programming, Python and vibe coding lessons for Horsham, Roffey, Broadbridge Heath and Warnham, ages 6 to 67. Taught live online. First lesson is free."
canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-horsham
source: src/pages/ai-and-programming-classes-in-horsham.html
---
> Horsham is a town in West Sussex whose built-up area held 50,215 usual residents at the 2021 census, according to the Office for National Statistics; the wider Horsham district had 146,778. The gazetteer lists Roffey as a suburban area of the district and Broadbridge Heath, Warnham and Mannings Heath as villages. Learners aged six to 67 in these places can join our AI, programming, Python, vibe coding and maths lessons, which run as live video calls led by tutors in India. You can have private lessons or sit in a class of five to ten people working at your level. We teach ideas so that a learner could carry them out with pencil and paper, and the computer comes second. Start with a free lesson; we finish it by telling you which course we would choose. In the Horsham project, learners fit curves to the district's age profile and use a count of bits to decide how complicated the curve deserves to be. Lessons after the trial cost USD 100 a month in a group and USD 150 a month one-to-one.

[Home](/) / [United Kingdom](/coding-classes-in-united-kingdom) / [South East England](/coding-and-ai-classes-in-south-east-england) / Horsham

Horsham, West Sussex, South East England / Live online

# AI and programming classes in Horsham

**Where can Horsham learners find the best AI and programming classes?** Horsham is a town in West Sussex whose built-up area held 50,215 usual residents at the 2021 census, according to the Office for National Statistics; the wider Horsham district had 146,778. The gazetteer lists Roffey as a suburban area of the district and Broadbridge Heath, Warnham and Mannings Heath as villages. Learners aged six to 67 in these places can join our AI, programming, Python, vibe coding and maths lessons, which run as live video calls led by tutors in India. You can have private lessons or sit in a class of five to ten people working at your level. We teach ideas so that a learner could carry them out with pencil and paper, and the computer comes second. Start with a free lesson; we finish it by telling you which course we would choose. In the Horsham project, learners fit curves to the district's age profile and use a count of bits to decide how complicated the curve deserves to be. Lessons after the trial cost USD 100 a month in a group and USD 150 a month one-to-one.

Give a model more knobs and it will fit your data more closely. That is always true and it is a trap, because past some point the extra knobs are fitting accidents. The old advice is Occam's razor: prefer the simpler explanation. But how much simpler, and who decides? Minimum description length turns the advice into arithmetic. Imagine sending your data to a friend down a slow line. You may send a model plus a list of corrections. A bigger model costs more bits to send and leaves smaller corrections. Add the two costs, and the model with the shortest total message wins. Horsham learners run that contest on census data.

Facts last verified 30 September 2026. Teaching is online; no Horsham branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Where Horsham learners usually start

Chosen by age. You try a full live lesson on any of them for free, and no card is involved.

- [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids) (Ages 7 to 12): The how-to-think course: simple rules, fair comparisons and knowing when an answer is too neat.
- [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev) (Ages 8 to 12): Children build Scratch games with an AI assistant and stay in charge of what goes in.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 13 to 17): Machine learning in Python for teenagers, including the Horsham curve-fitting contest.
- [Statistics & Probability](/courses/statistics-probability-maths-course) (Teens and adults): Statistics and probability for anyone who wants to judge a model, a chart or an AI claim.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Horsham, Roffey, Broadbridge Heath and Warnham

Published census figures first, then the places named in the postcode gazetteer.

**Horsham town and district, Census 2021 (ONS)**

| Area | Usual residents |
|---|---|
| Horsham built-up area | 50,215 |
| Horsham district | 146,778 |

The district is much larger than the town and includes other towns and villages, so the two lines are separate counts and should be read that way. On postcodes.io, Roffey is a suburban area in the RH12 district, Broadbridge Heath and Warnham are RH12 villages and Mannings Heath is a village in RH13, all in Horsham district, West Sussex. Local schools work to the English national curriculum. We group younger learners by school year, Year 2 to Year 13, and can match lessons to GCSE and A level computer science, maths and statistics.

### Around West Sussex

Compare [coding classes in West Sussex](/coding-classes-in-west-sussex), [Crawley](/online-coding-and-python-classes-in-crawley) and [Worthing](/best-coding-and-ai-classes-in-worthing). Why reasoning comes before tools in our lessons: [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

## Occam's razor in bits: minimum description length

A curve is only worth sending if it saves more than it costs.

The data is one column from the 2021 census: the number of people in Horsham district at each single year of age, from babies under one to people aged 99. That is 100 numbers. They rise to 2,368 at age 55, dip sharply to 980 at age 19, and drop from 1,955 at age 74 to 1,437 at age 75. The whole table counts 146,776 people, a figure two away from the district total above because the census protects privacy by adjusting each table slightly. Sent raw, each number needs 12 bits, so the message is 1,200 bits long.

Now the learner tries to do better by sending a smooth curve and then the corrections. The curve is a polynomial; its degree is how many bends it is allowed. We charge 3.32 bits for every number needed to describe the curve, which is half of log2(100), a standard price when there are 100 data points. The corrections are charged by how large they are: small corrections are cheap to send, large ones are dear. Python fits each curve by least squares and adds up the bill.

**Polynomial curves fitted to the Horsham district age profile, 100 ages, our Python run on Census 2021 data**

| Degree of curve | Typical miss (people) | Whole message (bits) |
|---|---|---|
| 0 (a flat line) | 581.4 | 1,126.4 |
| 2 | 286.1 | 1,030.7 |
| 6 | 148.3 | 949.2 |
| 12 | 137.7 | 958.5 |
| 20 | 78.8 | 904.5 |
| 30 | 67.9 | 916.3 |
| 40 | 55.0 | 919.0 |

Read the middle column alone and the advice is simple and wrong: the miss keeps shrinking, so use the biggest curve you can. The right-hand column tells the fuller story. Going from degree 6 to degree 12 cut the miss from 148.3 to 137.7, but the message grew from 949.2 to 958.5 bits. Those six extra numbers did not pay for themselves. Pushing on to degree 20 did pay: the curve finally had enough bends to follow the sharp features, and the total fell to 904.5 bits, the shortest of any degree from 0 to 40. After that, every added bend cost more than it saved.

The learner then checks the verdict a second way, with data the curve has not seen. Fit each curve using only the even ages and test it on the odd ages. Degree 20 again gives the smallest miss, 99.0. Degree 30 gives 32,689.1: between the points it was shown, the curve swings wildly. Two honest limits finish the write-up. Even the winning curve saves only about a quarter of the raw 1,200 bits, and it still misses age 19 by 295 people, because smooth curves are a poor language for a profile with sudden steps. And everything here describes the district as a whole, not the town alone.

### Ages 8 to 11

Describe a dot picture to a friend in as few words as you can, then count the words and the mistakes.

### Ages 11 to 15

Fit straight lines and gentle curves in Python and plot how the miss shrinks as bends are added.

### Ages 15 and up

Code the two-part bill in bits, find the degree with the shortest message, and test it on held-back ages.

### Source and method

Age counts are Census 2021 table TS007 for Horsham district from the Office for National Statistics via Nomis, read 30 September 2026, Open Government Licence. The people aged 100 and over are published as one open-ended group and were left out of the fit. The pricing of bits is a common textbook scheme; other fair schemes would give somewhat different totals.

## What the shortest message teaches about AI, vibe coding and agents

Learning and compressing are close relatives.

**From the Horsham curves to AI practice**

| What the bits showed | The habit it builds |
|---|---|
| The miss fell all the way to degree 40 | Never choose a model on training error alone |
| Degree 12 cost more bits than degree 6 | Extra parts must earn their place |
| Degree 20 gave the shortest message | Simplicity is a trade, not a rule |
| Degree 30 failed wildly on unseen ages | Always test on data held back |
| Only a quarter of the bits were saved | Ask whether the model family fits the problem |

A model that predicts data well can also compress it, and the reverse holds too. That link runs through modern AI: a language model is trained to predict the next word, which is the same as finding a short description of a great deal of text. It also explains why big models can go wrong. With enough knobs a model can store its training examples instead of learning the pattern behind them. Vibe coding is the practice of describing a program in plain language and having an AI write it. Ask one for "a curve that fits this data" and it may hand back degree 40 with a proud note about the tiny error. A learner who has done the Horsham sums asks how it does on ages it never saw. An AI agent that tunes its own settings needs that same rule built in. Agent projects begin when a learner programs Python comfortably, most often in the older teens or adulthood, and Copilot Studio agents are offered in one-to-one lessons only. See [AI agents for students in the UK](/ai-agents-course-for-students-uk) and [understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-uk).

We are independent of the Office for National Statistics, Nomis and postcodes.io. The figures come from their open data and the analysis, including any error in it, is our own.

## From describing pictures to judging models

We estimate the right step from the school year and confirm it in the free lesson.

- **Years 2 to 6: How to think** Short, exact instructions; fair tests; spotting a rule that explains too little or too much. [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **Years 4 to 8: Vibe coding for kids** Build with an AI helper, then check the result against what was asked. [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev), [Python and AI for Kids](/courses/python-ai-kids-masterclass)
- **Years 9 to 13: Python and AI** Fitting, testing and model choice, in step with GCSE and A level. [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens), [Python for Teens](/courses/python-complete-masterclass-teens)
- **Adults: Statistics and AI** Evidence, models and agents in Python, for work or for curiosity. [Statistics & Probability](/courses/statistics-probability-maths-course), [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)

## What is minimum description length, and what is Occam's razor in machine learning?

Minimum description length is the rule of choosing the model that gives the shortest total message, counting the bits to describe the model and the bits to correct its mistakes, and it is Occam's razor made measurable for machine learning: a more complex model is accepted only when it saves more than it costs.

On the Horsham district age profile, a degree 12 curve missed by less than a degree 6 curve and still needed a longer message, 958.5 bits against 949.2.

The shortest message, 904.5 bits, came at degree 20, and a test on unseen ages picked the same degree.

Horsham teenagers who can run that test themselves will be the ones checking AI models in 2026, not just using them. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## How teaching reaches Horsham

Lessons are live and online. What you need at home is a computer with a working camera, and a place to sit and think.

- **The learner does the work** They type and share their screen. The tutor asks, hints and checks understanding.
- **A full lesson to try** We teach a complete free session and use it to find the right course.
- **Card-free booking** The trial is arranged without any payment details.
- **Classes built by level** Five to ten learners at the same point, brought together from around the UK.
- **Two sessions weekly** During term, stopping for West Sussex school holidays on the dates you give us.
- **Steady UK timetable** The clock change is absorbed at our end; your lesson time is unchanged.

**The case for online** A tutor who can see the learner's screen can see their thinking, and recruiting nationally lets every class sit at one level.

## Horsham fees

Every learner outside India is on the same international fee.

- First class: USD 0. A whole first lesson, free, with a recommended course at the end.
- Group tuition: USD 100 a month. A class of five to ten, around eight lessons a month.
- Private tuition: USD 150 a month. Private one-to-one tuition, around eight lessons a month.

All prices are in US dollars; we do not quote pounds. You are billed only after the trial, when the course and lesson time have been agreed. Holidays, missed sessions and changes of format are dealt with on the pricing page.

## Horsham: common questions

### What is the population of Horsham?

At the 2021 census the ONS recorded 50,215 usual residents in the Horsham built-up area and 146,778 in Horsham district.

### Are there AI and programming classes for Horsham learners?

Yes. We teach live online for ages 6 to 67, so Horsham, Roffey, Broadbridge Heath, Warnham and Mannings Heath can all take part.

### What is minimum description length?

It is a way of choosing between models: prefer the one for which the model and its corrections together take the fewest bits to write down.

### What is overfitting?

Overfitting is when a model matches its training data very closely, including the accidents in it, and then predicts new data badly.

### What did the Horsham project find?

Among curves of degree 0 to 40 fitted to the district age profile, degree 20 gave the shortest message at 904.5 bits, against 1,200 bits for the raw numbers.

### Do children do vibe coding?

Yes. They brief an AI in plain words, read what it builds in Scratch or Python, and test it against the brief.

### When can a learner build AI agents?

Once Python is comfortable, typically older teens and adults. Work in Copilot Studio is taught in private lessons only.

### Does it fit with A level maths or computer science?

Curve fitting, statistics and programming all connect to those courses. We teach understanding and make no promises about grades.

### What do lessons cost?

The first is free. From then on a group place is USD 100 per month and one-to-one is USD 150 per month.

### What happens in school holidays?

Tell us the dates and lessons take a break.

## Other West Sussex projects

See how the projects differ: [Crawley](/online-coding-and-python-classes-in-crawley) (why an average of averages misleads), [Worthing](/best-coding-and-ai-classes-in-worthing) (who speaks after whom in a play) and [Bognor Regis](/vibe-coding-and-ai-agents-classes-in-bognor-regis). The [South East England page](/coding-and-ai-classes-in-south-east-england) and the [UK hub](/coding-classes-in-united-kingdom) have the full list.

## Contact

Book the free class on [https://learn.modernagecoders.com/ai-and-programming-classes-in-horsham](https://learn.modernagecoders.com/ai-and-programming-classes-in-horsham#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
