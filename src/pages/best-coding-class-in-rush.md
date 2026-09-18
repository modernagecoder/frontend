---
title: "Best Coding Class in Rush | Modern Age Coders"
description: "Live online coding, Python, AI and data classes for Rush learners aged 6 to 67, in small groups at one level or one to one. The first lesson is free of charge."
canonical: https://learn.modernagecoders.com/best-coding-class-in-rush
source: src/pages/best-coding-class-in-rush.html
---
> Rush has 10,814 usual residents in 3,472 households, and 3,059 of those households are on broadband, which is how our lessons arrive. A teacher runs each lesson live on video with a small group at one level or with a single learner, about twice a week, for ages six to sixty-seven. The opening lesson is free of charge. Monthly fees then run at USD 100 for a group place and USD 150 for one-to-one teaching.

[Home](/) / [Ireland](/coding-classes-in-ireland) / [Fingal](/coding-classes-in-fingal) / Rush

Rush, Fingal, County Dublin / Live online

# Coding classes in Rush

**What is the best coding class in Rush?** Rush has 10,814 usual residents in 3,472 households, and 3,059 of those households are on broadband, which is how our lessons arrive. A teacher runs each lesson live on video with a small group at one level or with a single learner, about twice a week, for ages six to sixty-seven. The opening lesson is free of charge. Monthly fees then run at USD 100 for a group place and USD 150 for one-to-one teaching.

In Rush, 526 of the 7,744 residents who described their journey to work, school or college go by train. That suggests a simple rule for any town: if enough people take the train, it probably has a station. The rule is easy to write. Checking it properly is the real exercise, and it is the same check every machine-learning model has to pass. The learner scores the rule against Irish Rail's own list of 171 stations for 89 towns, counts the hits and both kinds of miss, and discovers that the usual score, accuracy, can be beaten by a rule that says every town has a station. Along the way the answer key turns out to need checking too: the station that serves Rush is called Rush and Lusk, and its address is in Lusk.

Facts last verified 19 September 2026. Teaching is online; no Rush branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## First courses for Rush learners

Choose the course by age and interest; its teacher places the learner properly in the free first lesson.

- [Coding for Kids](/courses/kids-coding-blocks-masterclass) (Ages 6 to 10): Block coding with sorting games where the rule sometimes gets it wrong, and the learner counts how often.
- [Python and AI for Kids](/courses/python-ai-kids-masterclass) (Ages 10 to 13): Python and first AI ideas: a rule that makes a guess, and a table of when it was right.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 13 to 18): Machine learning with proper scoring: confusion matrices, precision, recall and thresholds.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): For adults building alerts and filters at work, where false alarms and misses have different costs.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Test a rule that spots rail towns, and count every kind of mistake

The rule: call a town a rail town if at least a chosen share of its journeys are by train. The answer key: whether Irish Rail's station list names the town. The test: 89 towns of 5,000 or more, with the five cities left aside.

**The confusion matrix at a 2 percent threshold**

|  | Town has a station | No station |
|---|---|---|
| Rule says rail town | 29 correct | 1 false alarm |
| Rule says not | 26 missed | 33 correct |

**Three thresholds, and a rule that guesses the same thing every time**

| Rule | Precision | Recall | Accuracy |
|---|---|---|---|
| At least 1% by train | 88.4% | 69.1% | 75.3% |
| At least 2% by train | 96.7% | 52.7% | 69.7% |
| At least 5% by train | 100.0% | 27.3% | 55.1% |
| Every town has a station | 61.8% | 100.0% | 61.8% |

### Precision and recall

Precision asks how many of the flagged towns really have a station; recall asks how many of the towns with a station got flagged. Raise the threshold and precision climbs to 100 percent while recall falls to 27.3. One number is bought with the other.

### Accuracy flatters

Of the 89 towns, 55 have a station. A rule that simply says yes to every town is right 61.8 percent of the time, which beats the 5 percent rule on accuracy while learning nothing at all. When one answer is common, accuracy rewards guessing it.

### The mistakes teach most

At 2 percent the one false alarm is Naas, with 4.0 percent of journeys by train and no station of that name in the list. The misses include county towns such as Tralee and Castlebar, each 0.3 percent, which have a station but where few residents use it for daily journeys.

**The answer key was built by a rule too: whole-word name matching, then checked by hand**

| Town | Matched station | After checking the station's address |
|---|---|---|
| Navan | Navan Road Parkway | On the Navan Road, Dublin 15: not Navan |
| Shannon | Carrick on Shannon | In Co Leitrim: not Shannon |
| Passage West-Monkstown | Salthill and Monkstown | In Dun Laoghaire, Co Dublin: not this Monkstown |
| Celbridge | Hazelhatch | Found only through the list's alias, Celbridge (Hazelhatch) |
| Rush | Rush and Lusk | Address on Station Road, Lusk: counted for both towns |

### Score a rule by its mistakes, not by its accuracy

Every classifier, from a spam filter to a medical test, makes two kinds of error: false alarms and misses. A single accuracy figure hides which is which, and when one answer is far more common than the other it can make a useless rule look good. Report the full confusion matrix, say which error matters more for the job, and choose the threshold with that in mind. Then check the answer key, because the labels a model is scored against are often built by rules of their own.

The learner writes the rule as one line, prediction equals train share at or above a threshold, and a scoring function that fills the four cells of the confusion matrix and computes precision, recall and accuracy. A loop runs the thresholds; one more line scores the rule that always says yes. Building the answer key is its own small program: split each station name and alias into words, look for the town name as whole words, and print every match for a human to check. Three matches failed that check, and a fourth town only appeared once the alias field was included.

## One station, two towns

Rush is flagged correctly by the rule, but deciding that it "has a station" took a judgement.

### Named for both

Irish Rail lists a single station, Rush and Lusk, and its station page gives the address as Station Road, Lusk, Co. Dublin, Eircode K45 P825, with sheltered bike parking. The answer key counts it for both towns.

### Rush on the rule

With 526 of 7,744 stated journeys by train, 6.79 percent, Rush is flagged as a rail town at every threshold up to 5 percent and correctly matched to a station.

### Lusk on the rule

Lusk, sharing the same station, sends 4.9 percent of its journeys by train: flagged at 2 percent, missed at 5. The same station, two towns, two different outcomes at the stricter threshold.

**What this page does not claim** It does not rate rail services or say why some towns with a station have few train users. The answer key reflects one reasonable rule plus three hand corrections, and a different rule, such as distance to the nearest station, would change some labels. Irish Rail has no connection with us.

## What the 2022 census found in Rush

The Census 2022 small area tables for the town of Rush, Co Dublin, describing its usual residents and their homes.

**Rush at census time**

| Census count | Rush |
|---|---|
| Usual residents | 10,814 |
| Households | 3,472 |
| Households with broadband | 3,059 |
| Working residents in the travel table | 4,945 |
| Journeys to school, college or childcare | 3,193 |
| Children under fifteen in childcare | 749 |
| Journeys by train, work and school together | 526 |

### Work

Of 4,945 working residents, 2,605 drive; 622 work mainly at or from home, 430 take the bus, 324 the train, 281 a van, 217 walk, 141 travel as a car passenger and 61 cycle.

### School

Of 3,193 journeys to school, college or childcare, 1,062 are made as a car passenger and 974 on foot; 465 go by bus, 202 by train and 198 by bicycle.

### Home

Asked about working from home, 1,728 of Rush's working residents said they do some or all of the time, 2,842 said they never do, and 375 did not answer.

## Lessons for Rush learners

Two lessons a week is the usual rhythm, and a teacher leads every minute of each.

### Children

The census-night age table counts 1,224 children aged six to twelve in Rush. They start with blocks and games, and soon write rules that sort things and check when the rule was wrong.

### Teenagers

Rush has 1,094 residents aged thirteen to eighteen, the stage at which Python, websites, AI projects and data work like this rail-town test usually begin.

### Adults

Adults join from any starting point, including none, and the first lesson settles the level.

Census figures are reproduced as the Central Statistics Office published them, and the station list is Irish Rail's own, read with its aliases. The rule, the answer key and the scores were computed on 19 September 2026, and each of the three corrected labels was checked against Irish Rail's station page for its address.

## From sorting rules to scoring a classifier

Treat each age band as a suggestion; lesson one sets the real starting point.

- **Ages 6 to 10: Rules that sort** Block-coded games that sort things by a rule, and a tally of when the rule got it wrong. [Coding for Kids](/courses/kids-coding-blocks-masterclass), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **Ages 11 to 13: Right and wrong guesses** Python rules that make a guess, and a two-by-two table of hits, misses and false alarms. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [Maths Through Coding](/courses/maths-through-coding)
- **Ages 14 to 18: Scoring models** Confusion matrices, precision, recall and threshold choice on real public data. [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens), [Data Science for Teens](/courses/data-science-course-for-teens-python-data)
- **Ages 18 to 67: Alerts at work** Filters and alerts where false alarms and misses cost different amounts, and a threshold chosen to match. [Python Automation Course](/courses/python-ai-automation-masterclass-college), [Data Analysis Course](/courses/data-analysis-mastery-course-college)

## Ask an assistant how good the rule is

It may quote an accuracy. Ask it for the whole matrix.

An AI assistant asked to evaluate a rule like this will often report a single accuracy figure, because it is the most familiar score. Here that figure would rank a rule that always says yes above a rule that actually looks at the data, and it would say nothing about whether the errors are false alarms or misses.

The learner who built this test then asks the assistant for the confusion matrix, precision and recall at several thresholds, and a list of the labels it trusted without checking. Those three requests turn a flattering score into an honest evaluation.

Models are easy to build now. Scoring them honestly, labels included, is the skill that matters. The longer argument is in [why learning to code is worth starting now](/blog/is-coding-worth-learning-2026).

## How Rush lessons run

In practice.

- **Live, every lesson** A teacher runs each lesson in real time and works from the learner's own code.
- **Groups at one level** Five to ten learners who have reached the same point in the course, from Fingal, the rest of Ireland and abroad.
- **Twice a week, mostly** Around eight lessons a month, on days and at hours fixed before the course starts.
- **Built round the school year** Breaks, holidays and exam weeks are planned in from the outset.
- **Equipment** A laptop or desktop with a keyboard, sound in both directions, and a broadband line that copes with live video.
- **Private lessons** One-to-one teaching is there for any learner whose level, speed or free hours leave them without a suitable group.

**Taught online only** Rush learners take every lesson on video. We have no premises in Rush or anywhere in Ireland, and the lesson is the same from any connected home.

## Fees for Rush

The complete list.

- First class: USD 0. A full first lesson with the level assessed, free.
- Group tuition: USD 100 a month. A month in a group of five to ten at the same level, about eight live lessons.
- Private tuition: USD 150 a month. A month of private lessons at the same weekly frequency.

One monthly price in US dollars applies to every family outside India. The free first lesson carries no charge, fees begin when the course does, and the pricing page covers holidays, missed lessons and switching between a group and private lessons.

## Rush coding class questions

### How many people live in Rush?

The Census 2022 small area tables record 10,814 usual residents in Rush, in 3,472 households, and 3,059 of those households have broadband.

### What is the data project on this page?

Testing a simple rule that guesses whether a town has a railway station from the share of its journeys made by train, then scoring it against Irish Rail's station list for 89 towns. At a 2 percent threshold it has a precision of 96.7 percent and a recall of 52.7, and a rule that says every town has a station beats the strictest version on accuracy.

### Does Rush have a railway station?

Irish Rail lists Rush and Lusk as one station, with its address on Station Road, Lusk, Eircode K45 P825. The project counts it for both towns, which is exactly the kind of judgement an answer key hides.

### How do Rush residents get to work?

Of 4,945 working residents in the travel table, 2,605 drive, 622 work mainly at or from home, 430 take the bus, 324 the train and 281 use a van.

### When are lessons?

Late afternoons, evenings and weekend slots. Rush lessons are fixed in Irish time; India runs four and a half hours ahead through Irish summer time and five and a half through the winter, and every slot we open has to work on both clocks.

### Can adults sign up?

Yes, up to sixty-seven, and beginners are welcome. An adult's free first lesson shows which suits better, a small group at the same level or a teacher one to one.

### Will a Rush learner be taught with other Rush learners?

Groups are formed by level rather than town, so classmates may be in Fingal, elsewhere in Ireland or abroad.

### Is there a Modern Age Coders classroom in Rush?

No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.

### What do coding classes in Rush cost?

The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.

### How many learners are in a group?

Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.

## North Fingal and beyond

Rush sits under the [Fingal](/coding-classes-in-fingal) page, beside the town pages for [Swords](/best-coding-class-in-swords), [Balbriggan](/best-coding-class-in-balbriggan) and [Malahide](/best-coding-class-in-malahide), with [Leinster](/coding-and-ai-classes-in-leinster) above. A neutral comparison of online coding schools is on [this page](/best-online-coding-classes-ireland), and the [Ireland hub](/coding-classes-in-ireland) brings the series together.

## Contact

Book the free class on [https://learn.modernagecoders.com/best-coding-class-in-rush](https://learn.modernagecoders.com/best-coding-class-in-rush#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email contact@modernagecoders.com. Rated 4.9 across 547 Google reviews.
