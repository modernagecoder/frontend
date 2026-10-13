---
title: "AI and Programming Classes in Dulwich | Ages 6 to 67"
description: "Live online AI, programming, Python and maths classes for ages 6 to 67 in Dulwich, Dulwich Village, East Dulwich, Herne Hill and Nunhead. First lesson free."
canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-dulwich-london
source: src/pages/ai-and-programming-classes-in-dulwich-london.html
---
> Live online AI, programming, Python and maths classes for ages 6 to 67 in Dulwich, Dulwich Village, East Dulwich, Herne Hill and Nunhead. First lesson free.

Skip to contentDulwich course picks

## AI and programming courses for Dulwich learners

Choose by the age of the Dulwich learner. The first live lesson of each course is free, with no card details taken.

[![Problem Solving and Computational Thinking for Kids course thumbnail](/images/problem-solving-kids.webp)Ages 7 to 12Problem Solving and Computational Thinking for KidsLearning how to think: spotting a rule, then asking whether it holds on a new example.See the syllabus](/courses/problem-solving-and-computational-thinking-for-kids)[![Python and AI for Kids course thumbnail](/images/python-kids.webp)Ages 9 to 13Python and AI for KidsPython from the first line, with small models that learn from a table of numbers.See the syllabus](/courses/python-ai-kids-masterclass)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)Ages 13 to 17AI and Machine Learning for TeensMachine learning built by hand: training sets, test sets and the double descent curve.See the syllabus](/courses/ai-ml-masterclass-teens)[![Generative AI Course course thumbnail](/images/generative-ai-college.webp)Students and adultsGenerative AI CourseHow large models are built and why their size behaves so strangely.See the syllabus](/courses/complete-generative-ai-masterclass-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Dulwich and Southwark

## Dulwich Village, Dulwich Wood, Dulwich Hill and East Dulwich

Ward counts from the 2021 census, with the SE21, SE22 and SE24 place names.

| Ward | Residents (2021) |
| --- | --- |
| Dulwich Village | 10,255 |
| Dulwich Wood | 10,588 |
| Dulwich Hill | 9,591 |
| Goose Green | 13,612 |
| Champion Hill | 9,219 |

These are five separate published counts, and we keep them separate: Dulwich has no single official edge, so there is nothing for a total to describe. Postcodes.io lists Dulwich and Dulwich Village in SE21, East Dulwich in SE22, Herne Hill in SE24 and Nunhead in SE15, each in Southwark. State schools in Southwark teach the national curriculum for England; give us a Dulwich learner's term dates and the holidays stay free of lessons.

### Southwark, London and how we teach

For the borough, read [coding classes in Southwark](/coding-classes-in-southwark-london); for the capital, the [London page](/best-coding-class-in-london). Why thinking is taught ahead of tools is explained on [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

The Dulwich project

## Double descent: one model, grown from 5 features to 10,000

Make the model bigger step by step, and measure its error each time on areas it has never seen.

The Census divides Southwark into 959 output areas, 156 of them in the five wards above, where they hold 20,953 households. For every area in the borough we took three facts, its population density, its share of one-person households and its share of flats, and asked a model to predict a fourth: the share of households with no car. The model sees only 100 areas chosen at random and is tested on the other 859. Its size is set by one number, how many random features it builds from the three inputs. Each size is run 30 times with different random choices and the middle result is reported.

| Features | Error on training areas | Error on unseen areas |
| --- | --- | --- |
| 5 | 9.42 | 10.85 |
| 10 | 8.26 | 9.63 |
| 20 | 7.68 | 10.17 |
| 40 | 6.44 | 13.05 |
| 80 | 3.65 | 49.2 |
| 100 | 0.98 | 494.87 |
| 120 | 0.0 | 78.25 |
| 200 | 0.0 | 32.01 |
| 1,000 | 0.0 | 18.27 |
| 10,000 | 0.0 | 15.59 |

Read down the last column. With 10 features the model is at its most accurate, 9.63 points out on areas it has not seen. After that, more features help it on the training areas and hurt it everywhere else, which is ordinary overfitting. At 100 features, exactly one per training area, it can fit every training value almost perfectly, and to do so it has only one possible set of weights, a wild one: the typical error on unseen areas is 494.87 points, for a quantity that can only lie between 0 and 100. Past that threshold something changes. With more features than areas there are many ways to fit the training data exactly, the method picks the gentlest of them, and the error falls again: 78.25, 32.01, 18.27, 15.59.

That second fall is double descent, and it is real. But look at where it ends. At 10,000 features the error is 15.59, which is worse than the 9.63 of the ten-feature model and worse even than the 14.91 you get by ignoring the inputs and guessing the training average every time. On this small, noisy problem the giant model recovers from the peak without ever catching the small one. A tiny penalty on large weights, called ridge, removes the peak altogether, 12.55 at 100 features instead of 494.87, and still the lowest it reaches, at 1,000 features, is 11.95. Bigger can be better; here it was not, and only the test told us.

### Ages 8 to 11

Draw a wiggly line through every dot on a chart, then see how badly it guesses a new dot.

### Ages 11 to 15

Split the Southwark table into training and test areas in Python and score a simple model.

### Ages 15 and up

Code random features and the minimum-norm fit, plot both descents and add ridge.

### Census inputs, our experiment

The area figures are Office for National Statistics Census 2021 data from Nomis, under the Open Government Licence. They describe output areas of roughly a hundred or more households, never a person or a home. The features, fits and error figures are our own, and a different random split would move them a little.

Programming and AI

## What this teaches about AI and programming

Size is a setting with consequences, and the consequences have to be measured.

| In the Southwark experiment | In AI more widely |
| --- | --- |
| Training error hit 0.0 from 120 features | A perfect fit to training data proves little |
| Unseen error peaked at 494.87 | The risky size is "just big enough" |
| It fell again to 15.59 at 10,000 | Very large models can generalise |
| Ten features still won, at 9.63 | A small model may suit a small problem |
| Ridge cut the peak to 12.55 | Gentle constraints tame a model |

Today's language models live far out on the right of this curve, with vastly more adjustable numbers than a classroom could count, and the second descent is part of why they work. The Dulwich experiment gives learners the other half of the story: on a modest problem, a modest model can be the accurate one, and no rule of thumb replaces a held-back test set. We use the same discipline when Dulwich learners vibe code, stating what they want for an AI to write: the code is accepted when it passes a test the learner devised, never because it looks finished. AI agents come later, after Python is written with confidence, mostly from sixteen upward, and Copilot Studio agents are taught one-to-one only. More on that: [the AI agents course for UK students](/ai-agents-course-for-students-uk) and [understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-uk).

Modern Age Coders is independent of the Office for National Statistics, Nomis and postcodes.io, none of which has reviewed this page. Their published open data is all we drew on.

Stages

## From wiggly lines to models tested properly

We use a Dulwich learner's school year to propose a stage, then let the trial lesson decide.

Years 2 to 7

### How to think

Rules, exceptions and checking a guess against a fresh case.

[Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids)[Scratch Coding for Kids](/courses/scratch-programming-complete-course)Years 5 to 8

### Python and first AI

Typed code and small models that learn from examples.

[Python and AI for Kids](/courses/python-ai-kids-masterclass)[Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)Years 9 to 13

### Machine learning

Training, testing and overfitting beside GCSE and A level work.

[AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens)[Python for Teens](/courses/python-complete-masterclass-teens)Adults

### Large models

How generative AI is built, and the mathematics underneath it.

[Generative AI Course](/courses/complete-generative-ai-masterclass-college)[Data Structures & Algorithms Course](/courses/data-structures-algorithms-masterclass-college)AI and model size

## What is double descent in machine learning?

Double descent is the pattern in which a model's error on new data falls, climbs to a peak when the model is just large enough to fit its training data exactly, and then falls a second time as the model grows larger still.

On Census data for 959 Southwark areas, a model trained on 100 of them was 9.63 points out with 10 features, 494.87 with 100, and 15.59 with 10,000: the second descent happened but never beat the first.

Anyone who has plotted that curve stops asking "how big is the model?" and asks instead "how did it do on data it had never seen, and what simpler model was it compared with?"

For a Dulwich teenager, writing the experiment in Python turns a surprising fact about AI into something they have checked, and checking is the skill that lasts. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

How it works

## Herne Hill to Nunhead, on a live call

All a Dulwich learner needs is a computer with a camera and a connection steady enough for video.

### Code written by the learner

Nothing is typed for the Dulwich student. The tutor shares the view and asks how the result was tested.

### The trial finds the level

One lesson shows us what is secure, where to start and which exam board applies.

### First Dulwich lesson free

It runs to full length and ends with a course we would choose.

### One level per class

Fifteen to twenty learners, drawn from the whole UK, at a single stage.

### Two sessions weekly

Holiday weeks are taken out of the calendar.

### Same hour all year

The tutor moves with British clock changes; you do not.

Why Dulwich lessons are online

Five SE21 or SE22 learners at one level, all free at the same hour, is a rare find. Across the UK by video, such a class forms easily.

Fees

## Dulwich fees

A Dulwich family pays the international rate, identical in every country outside India.

First class**USD 0**

A complete first lesson at no cost, plus a course suggestion.

Group tuition**USD 100**

Around eight live group lessons each month.

Private tuition**USD 150**

Around eight live private lessons each month.

Our Dulwich prices are in US dollars, and no pound figure is published. The first payment is due only after the trial has agreed a course and a regular time. For holidays, absences and changing between a class and one-to-one, see the pricing page.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20may%20we%20book%20a%20free%20AI%20or%20programming%20lesson%20for%20a%20learner%20in%20Dulwich%3F)Reviews

## What Southwark families and UK learners say in Google reviews

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

## Book a free Dulwich lesson

Let us know the learner's age or year group and one thing they care about. The Dulwich trial is shaped to fit: a rule-spotting puzzle, a Scratch project, opening lines of Python, or a small model put to a fair test.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Dulwich one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20may%20we%20book%20a%20free%20AI%20or%20programming%20lesson%20for%20a%20learner%20in%20Dulwich%3F)

Submitted details are used for placement and follow-up.

FAQ

## Dulwich questions

Model size, the Southwark experiment, AI, vibe coding and the running of Dulwich lessons.

### How many people live in the Dulwich wards?

Census 2021 recorded 10,255 in Dulwich Village, 10,588 in Dulwich Wood and 9,591 in Dulwich Hill, with 13,612 in Goose Green and 9,219 in Champion Hill. Each is a separate published figure.

### Do you run AI and programming classes online for Dulwich?

Yes, on live video for ages 6 to 67 in Dulwich, Dulwich Village, East Dulwich, Herne Hill and Nunhead.

### What is the interpolation threshold?

The model size at which it can first fit every training example exactly. In the Dulwich project that is 100 features for 100 training areas, and it is where error on new data peaked.

### What is overfitting?

Learning the quirks of the training examples instead of the pattern behind them, so the model scores well on data it has seen and badly on data it has not.

### What happens in the Dulwich project?

Learners predict no-car shares for Southwark Census areas with models of 5 to 10,000 random features, chart training and test error, and find both descents of the double descent curve.

### Does the project show that bigger models are better?

No. The 10,000-feature model recovered to 15.59 points of error, but the 10-feature model scored 9.63. On this data the small model won.

### Do you teach vibe coding and AI agents?

Vibe coding at all ages, with the learner testing what the AI writes. Agents follow once Python is confident, usually from sixteen; Copilot Studio agents are one-to-one only.

### Can you help with GCSE and A level?

With computer science and maths, yes, taught so the ideas are understood. We do not promise a grade.

### What do Dulwich lessons cost?

Nothing for the trial; then USD 100 a month in a class or USD 150 a month for private lessons.

### Do you teach in school holidays?

No. Share the dates and we leave those weeks out.

Read on

## More Southwark and London pages

Every page has a project of its own: [Southwark](/coding-classes-in-southwark-london) (the golden ratio), [Lambeth](/coding-classes-in-lambeth-london), [Wimbledon](/ai-and-programming-classes-in-wimbledon-london) (testing a model without fooling yourself) and [Chiswick](/online-coding-and-python-classes-in-chiswick-london) (lopsided data put on a better scale). All of the capital is on [our London page](/best-coding-class-in-london); all of Britain is on the [UK hub](/coding-classes-in-united-kingdom).

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20may%20we%20book%20a%20free%20AI%20or%20programming%20lesson%20for%20a%20learner%20in%20Dulwich%3F)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-dulwich-london*
