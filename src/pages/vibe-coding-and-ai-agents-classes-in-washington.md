---
title: "Vibe Coding and AI Agents Classes in Washington, Tyne and Wear"
description: "Live online vibe coding, AI agents, Python and coding classes for Washington, Tyne and Wear: Concord, Oxclose, Biddick and Fatfield. Ages 6 to 67, first lesson free."
canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-washington
source: src/pages/vibe-coding-and-ai-agents-classes-in-washington.html
---
> Live online vibe coding, AI agents, Python and coding classes for Washington, Tyne and Wear: Concord, Oxclose, Biddick and Fatfield. Ages 6 to 67, first lesson free.

Skip to contentStarting courses

## Vibe coding and agent courses for Washington learners

Here is one course for each age group. All begin with a free live lesson, and no card is taken.

[![Vibe Coding for Kids course thumbnail](/images/vibe-coding-kids.webp)Ages 8 to 12Vibe Coding for KidsChildren build Scratch games by directing an AI, then decide whether the result is good enough to keep.See the syllabus](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[![Problem Solving and Computational Thinking for Kids course thumbnail](/images/problem-solving-kids.webp)Ages 7 to 12Problem Solving and Computational Thinking for KidsHow to think: setting a goal, searching sensibly and knowing when to stop.See the syllabus](/courses/problem-solving-and-computational-thinking-for-kids)[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Ages 13 to 17Vibe Coding for TeensVibe coding in Python for teenagers, with the Washington meeting-point agent as a project.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Masterclass course thumbnail](/images/python-college.webp)Students and adultsPython MasterclassPython from first steps to agents with budgets, targets and tests.See the syllabus](/courses/python-programming-masterclass-zero-to-advanced-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Local detail

## Washington, Concord, Oxclose, Biddick and Fatfield

Census populations and the suburb names recorded for the NE37 and NE38 postcode districts.

| Area | Usual residents |
| --- | --- |
| Washington built-up area | 51,320 |
| City of Sunderland | 274,172 |

Washington is counted by the ONS as its own built-up area within the Sunderland council area; the second row is the whole council area, including Sunderland itself and Houghton-le-Spring, and is not a total of the first. postcodes.io lists Blackfell, Concord, Donwell, Sulgrave, Usworth, Albany and Hertburn as suburban areas in NE37, and Barmston, Biddick, Columbia, Fatfield, Glebe, Harraton, Lambton, Oxclose, Rickleton, Ayton and Teal Farm in NE38. For every one of them the closest postcode belongs to the Washington built-up area. Schools follow the English national curriculum, so a year group from Year 2 to Year 13 places a learner for us, and we can teach alongside GCSE and A level.

### Tyne and Wear pages

Also see the [Tyne and Wear page](/coding-classes-in-tyne-and-wear), [Sunderland](/best-coding-class-in-sunderland) and [Gateshead](/ai-and-programming-classes-in-gateshead). Our approach is explained on [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

The Washington project

## Satisficing: an agent that stops at good enough

A made-up task on real data: choose a meeting point for the whole town.

The ONS splits the Washington built-up area into 179 census output areas, each with a published centre and a household count; our sum of those counts is 22,646 households. The task we invent is to choose one of the centres as a meeting point. A centre's score is the average straight-line distance a household would travel to it, so lower is better. Working out one score means measuring 179 distances. The lowest score of all is 1,550 metres, the middle one is 2,077 metres and the highest is 3,503 metres.

A thorough agent scores all 179 centres and takes the lowest. A satisficing agent is given a target instead. It scores centres one at a time in a random order and stops the moment one meets the target. The learner runs it 10,000 times for each target and records two things: how many centres were scored before stopping, and how far the chosen centre was from the true lowest.

| Target score | Centres that meet it | Scored before stopping (mean) | Worse than the lowest by (mean) |
| --- | --- | --- | --- |
| 1,600 m or less | 8 | 19.9 | 13 m |
| 1,700 m or less | 25 | 6.9 | 74 m |
| 1,800 m or less | 44 | 4.0 | 129 m |
| 2,000 m or less | 77 | 2.3 | 220 m |
| No target, check all | 179 | 179 | 0 m |

A target of 1,700 metres gave up 74 metres on average, under 5% of the lowest score, and did about one twenty-sixth of the work. Tightening the target to 1,600 roughly tripled the work to save a further 61 metres. Taking a single centre at random with no target at all was 557 metres worse on average. The pattern in the third column is one the learner can predict before running anything: with 8 acceptable centres among 179, the expected wait is 180 divided by 9, which is 20.

The dangerous case is a target nobody can meet. Ask for 1,500 metres or less, when the lowest score is 1,550, and the agent examines all 179 centres every time and still has nothing that passes. A real agent without a fallback would loop or give up. So the learner adds one: if nothing meets the target, return the lowest seen and say so. The meeting-point task and the targets are invented; the centres and household counts are real.

### Ages 8 to 11

Turn over number cards one at a time and stop at the first one under ten. How many did you need? Try under five.

### Ages 11 to 15

Code the stopping rule in Python on a shuffled list and chart looks against target.

### Ages 15 and up

Score the 179 real centres, run 10,000 orders per target, and add the fallback for an impossible target.

### What we used

Household counts are Census 2021 figures from Nomis and the centres are ONS population-weighted centroids, both Crown copyright under the Open Government Licence. Satisficing is Herbert Simon's idea (1956). The task, the targets and the results are our own.

Agents that know when to stop

## What satisficing teaches about vibe coding and AI agents

Every agent needs a rule for when it is finished, and somebody has to write it.

| In the Washington run | For an AI agent |
| --- | --- |
| A 1,700 m target saved about 96% of the work | A sensible bar is often worth a small loss in quality |
| Tightening to 1,600 m tripled the work | The last few per cent are the expensive ones |
| A 1,500 m target could never be met | Always set a limit on steps, and a fallback |
| Results were averaged over 10,000 orders | One lucky run proves nothing |
| The fallback reported that it had missed | An agent should say when it fell short |

In vibe coding you tell an AI what you want built and guide it as it writes. Ask for "an agent that finds a good meeting point" and you will be given one that checks everything, or one that stops early, and the assistant will not mention which. Washington learners practise stating the bar in the prompt, asking what happens when the bar cannot be met, and then testing that case. Agents that search the web, call tools or write code all run on the same decision. Building agents waits until a learner is fluent in Python, which in practice means sixth-formers and adults; Copilot Studio agent work is kept to private lessons. Two pages go deeper: [understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-uk) and [AI agents for UK students](/ai-agents-course-for-students-uk).

This page has no association with the Office for National Statistics, Nomis or postcodes.io. Their data is open and we have used it as published; the scenario is ours.

Four stages

## Card games first, agents with stopping rules later

We match the stage to the learner in the free lesson; the year group gets us close.

Years 2 to 6

### How to think

Goals, searching and stopping, played out as games.

[Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids)[Scratch Coding for Kids](/courses/scratch-programming-complete-course)Years 4 to 8

### Vibe coding for kids

Scratch games built with AI help and judged by the child.

[Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[Python and AI for Kids](/courses/python-ai-kids-masterclass)Years 9 to 13

### Vibe coding in Python

Search, simulation and web projects, each with a test.

[Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[Python for Teens](/courses/python-complete-masterclass-teens)Adults

### Agents with limits

Python agents with targets, budgets and honest fallbacks.

[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)[Generative AI Course](/courses/complete-generative-ai-masterclass-college)AI agents and stopping

## What is satisficing, and how does an AI agent know when to stop?

Satisficing means accepting the first option that meets a set standard instead of searching for the ideal one, and an AI agent knows when to stop only if its builder gives it that standard, a limit on steps and a fallback.

Choosing a meeting point among 179 centres in Washington, an agent with a 1,700-metre target scored 6.9 centres on average and landed 74 metres from the lowest possible score; checking all 179 found the lowest, and a 1,500-metre target could never be met.

Learners who have run those numbers ask three things of any agent: what counts as done, what is the limit, and what happens if neither is reached.

Washington teenagers who can write a stopping rule and test it are the ones who can put an AI agent to real use, which is a good reason to learn to code. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

Lessons explained

## Live online lessons for Washington

Learners need a computer, a webcam and a connection that holds a video call. No software has to be set up in advance of the trial.

### Active from minute one

The learner writes and runs code while sharing their screen; the tutor guides with questions.

### We assess in the trial

A course is suggested only after the free lesson has shown what the learner can do.

### Nothing to pay upfront

The first lesson is free and we do not ask for a card.

### Fifteen to twenty in a group

Groups share a level, and their members live all over the UK.

### Two sessions a week

In term time; Sunderland school holidays are left out on request.

### Lesson time never drifts

Clock changes in the UK are handled at the tutor's end.

Why online, why live

Online lets us put each learner with others at exactly their stage. Live means a tutor can stop, ask and explain in the moment, which a recording cannot.

Fees

## Washington lesson prices

UK learners, including those in Washington, pay the rates we charge everywhere outside India.

First class**USD 0**

A free first lesson of normal length that ends with our course advice.

Group tuition**USD 100**

A group place, with about eight lessons a month.

Private tuition**USD 150**

One-to-one teaching, with about eight lessons a month.

Our prices are in US dollars and we publish no sterling amount. Nothing is due for the trial, and charging starts once a course and a weekly slot are agreed. The pricing page sets out what happens with holidays, missed lessons and changes of format.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20Washington%2C%20Tyne%20and%20Wear%2C%20and%20would%20like%20a%20free%20trial%20lesson%20in%20vibe%20coding%20or%20AI%20agents.)Reviews

## North East families and UK learners in their own words on Google

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

## Book a free Washington lesson

Share an age or school year and one thing the learner enjoys. We might run the trial as a stop-or-continue card game, a Scratch game made with AI, first Python, or a small search agent.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Washington one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20Washington%2C%20Tyne%20and%20Wear%2C%20and%20would%20like%20a%20free%20trial%20lesson%20in%20vibe%20coding%20or%20AI%20agents.)

Submitted details are used for placement and follow-up.

FAQ

## Washington questions answered

Satisficing, the meeting-point project, vibe coding, agents and the practical side.

### What is the population of Washington, Tyne and Wear?

The ONS built-up area of Washington had 51,320 usual residents at the 2021 census. The city of Sunderland, which includes it, had 274,172.

### Are there vibe coding and AI agents classes in Washington?

Yes. Lessons are live online for ages 6 to 67 in Washington, Concord, Oxclose, Biddick, Fatfield, Usworth and the rest of the town.

### What is vibe coding?

Vibe coding is making software by describing what you want to an AI and then testing and improving the code it writes.

### What is bounded rationality?

It is Herbert Simon's idea that decision makers have limited time and information, so they aim for an acceptable choice and not a perfect one.

### What did the Washington project find?

With a target of 1,700 metres the agent scored 6.9 of 179 centres on average and was 74 metres off the lowest score. With a target of 1,600 it scored 19.9 and was 13 metres off.

### What goes wrong with satisficing?

If the target is impossible the agent never finds anything that passes. With a 1,500-metre target it checked all 179 centres every time, so it needs a step limit and a fallback.

### When are learners ready to build agents?

Once Python comes easily without help, typically at sixteen or older. Copilot Studio agent lessons are private only.

### Do lessons help with school computer science?

Yes, including GCSE and A level. We teach for understanding and make no promise about grades.

### What does it cost?

Your first lesson costs nothing. A group place is USD 100 per month afterwards, and private lessons are USD 150 per month.

### Can lessons pause over the holidays?

Yes. Give us the dates and we will skip them.

More in the North East

## Tyne and Wear pages with other projects

Visit [Sunderland](/best-coding-class-in-sunderland) (finding points fast with a tree of boxes), [South Shields](/best-coding-and-ai-classes-in-south-shields) and [Newcastle upon Tyne](/best-coding-class-in-newcastle-upon-tyne). The [Tyne and Wear page](/coding-classes-in-tyne-and-wear) and the [UK hub](/coding-classes-in-united-kingdom) list everything else.

Book the free class[Book a priority demo](/book-demo)[Reach us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20Washington%2C%20Tyne%20and%20Wear%2C%20and%20would%20like%20a%20free%20trial%20lesson%20in%20vibe%20coding%20or%20AI%20agents.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-washington*
