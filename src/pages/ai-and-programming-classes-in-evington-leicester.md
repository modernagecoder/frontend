---
title: "AI and Programming Classes in Evington, Leicester | 6 to 67"
description: "Live online AI, programming, Python and vibe coding lessons for Evington, Crown Hills and Stoneygate learners in Leicester, aged 6 to 67. First lesson free."
canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-evington-leicester
source: src/pages/ai-and-programming-classes-in-evington-leicester.html
---
> The 2021 census put 17,268 usual residents in Evington, one of the City of Leicester's wards, and 23,917 in North Evington, which is a different ward. Postcodes.io records Evington, Crown Hills, Humberstone and Thurnby Lodge in the LE5 district, and Stoneygate in LE2. Tutors in India teach AI, programming, Python, vibe coding and maths over live video to Evington learners of any age from six to 67, singly or five to ten to a class sorted by level. Thinking comes before tooling in every course, which lets a learner question what a model has actually found. There is no fee for the opening lesson, and it closes with our course suggestion. The Evington project gives an isolation forest the outlines of 1,592 mapped buildings and no labels at all, and examines what it decides is unusual. Staying on is USD 100 monthly for a seat in a class, or USD 150 monthly with a tutor to yourself.

[Home](/) / [United Kingdom](/coding-classes-in-united-kingdom) / [Leicestershire](/coding-classes-in-leicestershire) / Evington

Evington, Leicester, England / Live online

# AI and programming classes in Evington

**Which are the best AI and programming classes in Evington?** The 2021 census put 17,268 usual residents in Evington, one of the City of Leicester's wards, and 23,917 in North Evington, which is a different ward. Postcodes.io records Evington, Crown Hills, Humberstone and Thurnby Lodge in the LE5 district, and Stoneygate in LE2. Tutors in India teach AI, programming, Python, vibe coding and maths over live video to Evington learners of any age from six to 67, singly or five to ten to a class sorted by level. Thinking comes before tooling in every course, which lets a learner question what a model has actually found. There is no fee for the opening lesson, and it closes with our course suggestion. The Evington project gives an isolation forest the outlines of 1,592 mapped buildings and no labels at all, and examines what it decides is unusual. Staying on is USD 100 monthly for a seat in a class, or USD 150 monthly with a tutor to yourself.

Most machine learning needs examples of the right answer. Anomaly detection often has none: nobody has marked which bank payments are fraud or which sensor readings are faults. The isolation forest, introduced in 2008, turns the problem round. It chops the data with random cuts and counts how many cuts it takes to fence each point off on its own. Ordinary points, packed in with many neighbours, take a long time to isolate. Odd ones fall out after a few cuts. This project tries it on something you can inspect by eye: the outlines of buildings mapped on OpenStreetMap around Evington, where most are houses and a few are very much not.

Facts last verified 30 September 2026. Teaching is online; no Evington branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Four routes in for Evington: thinking, vibe coding, machine learning, agents

One course per age range. A free live lesson opens each, booked with no card details.

- [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids) (Ages 7 to 12): The how-to-think course: spotting the odd one out and saying exactly why it is odd.
- [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev) (Ages 8 to 12): Scratch games imagined by the learner, coded with AI help and tested.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 13 to 17): Machine learning in Python, including the isolation forest on Evington buildings.
- [Generative AI Course](/courses/complete-generative-ai-masterclass-college) (Students and adults): How modern AI is built and checked, plus AI agents in Python.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Evington, Crown Hills, North Evington and Stoneygate

Census counts for two Leicester wards, and places recorded around them.

**Two wards of the City of Leicester, 2021 census usual residents (via Nomis)**

| Ward | Residents (2021) |
|---|---|
| Evington | 17,268 |
| North Evington | 23,917 |

These are two wards, each with a count of its own, and the page does not total them. On postcodes.io, Evington, North Evington, Crown Hills, Humberstone and Thurnby Lodge are suburban areas of Leicester in LE5, and Stoneygate is in LE2. Schools in Leicester teach England's national curriculum up to GCSE and A level. Share your term calendar and we keep lessons clear of the breaks.

### Leicestershire and the East Midlands

The county page is [coding classes in Leicestershire](/coding-classes-in-leicestershire) and the regional one [the East Midlands](/coding-and-ai-classes-in-east-midlands). For why reasoning leads in our lessons, read [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

## Finding unusual buildings with an isolation forest

No labels, six measurements per building, 200 random trees, and a list to inspect.

Through the Overpass service the learner downloads every building outline in a rectangle around Evington: 1,592 of them. Six numbers are computed per outline in Python: floor area, corner count, a roundness score, the share of its snuggest bounding rectangle it covers, its length over its width, and a count of outlines joined to it. Mappers have given a type to only 256 of the buildings, and the model is never shown those tags. An isolation forest of 200 random trees then scores every outline by how easily it is isolated.

**What the isolation forest flagged around Evington, our Python run on OpenStreetMap data**

| Check | Result |
|---|---|
| Typical footprint, all buildings | 130.8 sq m |
| Typical footprint, most anomalous 5% (79 buildings) | 999 sq m |
| Typed buildings in that 5% that are not homes | 15 of 28 (54%) |
| Non-homes among all typed buildings | 56 of 256 (21.9%) |
| Mapped schools caught in the 5% | 9 of 13 |
| Top 1% that are simply among the 15 largest | 26.7% |

Without ever seeing a label, the forest concentrates on the buildings a person would call unusual for a residential area: non-homes are 54% of the typed buildings it flags against 21.9% overall, and nine of the thirteen mapped schools land in its top 5%. It is not just a size detector either, since only about a quarter of its top 1% are among the very largest; odd shapes and many corners count too. The flags are scores, not verdicts: the thirteen flagged homes include apartment blocks, which are unusual in shape without being wrong.

Stability matters as much as the list. Re-run with a different random seed and a forest of 200 trees agrees with itself on 88.7% of its top 1%. Cut the forest to 10 trees and agreement drops to 63.4%. An anomaly list that changes every time you run it is telling you about the randomness, not the data.

### Ages 8 to 11

Play twenty questions with building cards and count how few questions single out the strangest one.

### Ages 11 to 15

Measure a handful of Evington outlines in Python and guess which the computer will flag.

### Ages 15 and up

Fit the isolation forest, check flags against map tags and test stability across seeds.

### OpenStreetMap outlines, our model

Building outlines and tags are from OpenStreetMap and its contributors under the Open Database Licence. The measurements, the model and the scores are our own; being flagged says nothing about a building other than that its mapped outline is unusual.

## Alarms, vibe coding and AI agents: reading a flag properly

A flag reports rarity in a dataset. Whether anything is amiss is a separate question.

**Five things the Evington outlines showed, and the question each one puts to an AI alert**

| Seen in the outlines | Question for the alert |
|---|---|
| Nothing was labelled in advance | Unusual against which crowd? |
| Non-homes were 54% of the flagged, typed outlines | Is there an outside fact to compare with? |
| Apartment blocks scored as odd | Is odd the same as faulty here? |
| A ten-tree forest repeated itself 63.4% of the time | Does a second run say the same? |
| 1,336 outlines carried no type at all | How much of this can anyone confirm? |

Fraud alerts, spam filters and monitoring tools all lean on anomaly detection, and an AI assistant asked to "find the outliers" will produce a list in seconds. With vibe coding, where the learner sets the goal and an AI writes the code, our Evington learners rerun the detector with new seeds and look at what was flagged before trusting it. An AI agent set to raise alarms on your behalf should carry both of those checks in its brief. Nobody builds agents with us before their Python stands up unaided, which tends to mean sixteen and above, and Copilot Studio is kept to private tuition. Two pages go further: [how UK students get to AI agents](/ai-agents-course-for-students-uk), and our rule that you should [understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-uk).

Credit for open data goes to OpenStreetMap, the ONS and postcodes.io. They have no connection with Modern Age Coders, and any slip in the analysis is our own.

## Odd-one-out games up to anomaly detection

Treat the year bands as approximate. Placement rests on what we watch the learner do.

- **Years 2 to 7: How to think** Odd ones out, reasons and careful questions. [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **Years 4 to 8: Vibe coding for kids** Games and apps the learner plans and an AI helps build. [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev), [Python and AI for Kids](/courses/python-ai-kids-masterclass)
- **Years 9 to 13: Python and machine learning** Features, models and honest checking alongside GCSE and A level. [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens), [Python for Teens](/courses/python-complete-masterclass-teens)
- **Adults: Machine learning and agents** Detection, evaluation and AI agents in Python. [Generative AI Course](/courses/complete-generative-ai-masterclass-college), [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)

## What is an isolation forest, and how does it find anomalies without labels?

An isolation forest is a machine learning method that splits data with random cuts and scores each point by how few cuts isolate it; points that separate quickly are anomalies, and no labelled examples are needed.

Given only the shapes of 1,592 mapped buildings around Evington, it put nine of thirteen schools in its top 5%, and non-homes made up 54% of the typed buildings it flagged against 21.9% overall.

Learners who have built one ask of any AI alert: unusual compared with what, and would the same flags appear on a second run?

An Evington teenager who has coded a detector in 2026 knows to test an alert before obeying it. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## The shape of an Evington lesson

Kit list: one computer, its webcam, and home internet good enough for a video call.

- **Hands on the keyboard** Every line is typed and run by the learner. The tutor sees the screen and keeps asking why the output came out that way.
- **Level set by evidence** The trial tells us the starting point, and we jot down the exam board if there is one.
- **A trial at no cost** You pay nothing, and leave with a course named.
- **Classes kept small** Between five and ten people, level-matched, logging in from different parts of Britain.
- **Two lessons each week** With a rest over school breaks.
- **Your slot stays put** When British clocks change, the tutor adjusts and you do not.

**Why online** One Leicester ward will seldom supply five learners at one stage with one evening spare. A national pool will.

## Evington fees

The rate card for Evington is our international one, the same for every country but India.

- First class: USD 0. A whole lesson, unpaid, plus our advice on a course.
- Group tuition: USD 100 a month. Around eight live classes in a month.
- Private tuition: USD 150 a month. Around eight live lessons alone with a tutor in a month.

We bill in US dollars and keep no sterling price list. You are invoiced once the trial has produced a course and a weekly slot you are happy with. For breaks, missed lessons and swapping between class and private, see the pricing page.

## Asked by Evington families

### What is the population of Evington?

Evington ward in Leicester had 17,268 usual residents at the 2021 census.

### Do Evington learners need to travel for AI and programming classes?

No. Every lesson is a live video call, open to ages 6 to 67 anywhere in Evington or the wider city.

### What is anomaly detection?

Finding data points that differ markedly from the rest, such as an odd transaction or a faulty reading, usually without labelled examples of what is abnormal.

### Is an anomaly the same as an error?

No. It only means unusual. In our Evington test, apartment blocks were flagged for their shape although nothing was wrong with them.

### What does the Evington project involve?

Scoring 1,592 mapped building outlines with an isolation forest, comparing the flags with map tags and testing how stable the list is.

### Where does vibe coding fit in?

In every age band. Learners say what they want built, then put the AI's code through their own tests.

### Is there an age for starting on AI agents?

It depends on Python, not birthdays, though few are ready before sixteen. Copilot Studio is private tuition.

### Will this help with school exams?

GCSE and A level computer science and maths are taught so the ideas are understood. No grade is guaranteed.

### What will we pay?

Nothing for the trial lesson. After it, USD 100 per month for a class place or USD 150 per month for private lessons.

### What about half term?

Lessons rest whenever school does, as long as we have your dates.

## More Leicester and Leicestershire pages

Four pages, four separate projects: [Oadby](/vibe-coding-and-ai-agents-classes-in-oadby-leicester) (agents bidding for jobs), [Wigston](/online-coding-and-python-classes-in-wigston-leicester) (simplifying a boundary), [Leicestershire](/coding-classes-in-leicestershire) and [Loughborough](/best-coding-and-ai-classes-in-loughborough). All remaining UK pages are indexed at the [UK hub](/coding-classes-in-united-kingdom).

## Contact

Book the free class on [https://learn.modernagecoders.com/ai-and-programming-classes-in-evington-leicester](https://learn.modernagecoders.com/ai-and-programming-classes-in-evington-leicester#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
