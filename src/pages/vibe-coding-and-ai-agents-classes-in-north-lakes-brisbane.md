---
title: "Vibe Coding and AI Agents Classes in North Lakes, Brisbane"
description: "Live online vibe coding and AI agents classes for North Lakes learners: AI tools, Python and agents whose every action is logged, in small groups or one to one."
canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-north-lakes-brisbane
source: src/pages/vibe-coding-and-ai-agents-classes-in-north-lakes-brisbane.html
---
> Live online vibe coding and AI agents classes for North Lakes learners: AI tools, Python and agents whose every action is logged, in small groups or one to one.

Skip to contentCourse picks for North Lakes

## Courses in AI tools and agents

Each course mixes AI assistance with code the learner understands. The trial lesson picks the starting point.

[![AI Tools Course for Teens (13+) course thumbnail](/images/ai-tools-kids.webp)Ages 13 to 17AI Tools Course for Teens (13+)Practical AI tools with judgement about when to trust them.See the syllabus](/courses/teens-ai-tools-mastery-course)[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Ages 13 to 17Vibe Coding for TeensProjects built with AI help, then tested and explained.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Vibe Coding for Kids course thumbnail](/images/vibe-coding-kids.webp)Ages 8 to 12Vibe Coding for KidsScratch games and stories made with kid-safe AI.See the syllabus](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Adults 18 and overCodex & Claude CodeCoding agents on real projects, with review and rollback.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)North Lakes in the 2021 Census

## Families, houses and school-age children

Counts for the North Lakes suburb (ABS SAL32178) from its 2021 Census QuickStats page, read on 12 October 2026.

| Measure | North Lakes |
| --- | --- |
| People | 23,030 |
| Median age | 35 |
| Families | 6,444 |
| Private dwellings | 8,135 |
| People per household | 2.9 |
| Motor vehicles per dwelling | 1.9 |

| Share | North Lakes | Queensland |
| --- | --- | --- |
| Aged 5 to 9 | 8.3% (1,913) | 6.4% |
| Aged 10 to 14 | 8.8% (2,018) | 6.6% |
| Separate house | 84.9% (6,499) | 74.8% |
| Car as driver to work | 60.0% (6,995) | 59.5% |

### Train commuters

Although no train stops in the suburb, 264 workers (2.3%) said they took a train to work, against 1.1% across Queensland.

### Teen years

There were 1,749 residents aged 15 to 19, 7.6% of the suburb.

### Read with care

The August 2021 Census fell during the pandemic, so how people travelled that week may not be typical.

The bureau publishes rounded percentages and nudges small counts for privacy. We show its numbers exactly and do not combine rows into totals of our own.

Signature project

## Eight steps, one slip, one replay

A commuter asks an agent to track the North Lakes stops with the most Wednesday buses. Our scripted agent records every change as an event, and the watchlist is rebuilt from those events. Coverage counts the scheduled visits at watched stops between 6:30am and 8:30am.

| Event | Action | Morning visits covered |
| --- | --- | --- |
| 1 | Add North Lakes station, platform 2 | 42 |
| 2 | Add Endeavour Bvd near Bergin St | 67 |
| 3 | Add Endeavour Bvd near Kerr Rd East | 84 |
| 4 | Add North Lakes station, platform 1 | 96 |
| 5 | Remove Endeavour Bvd near Kerr Rd East | 79 |
| 6 | Add Endeavour Bvd near Oxley St | 90 |
| 7 | Remove North Lakes station, platform 2 (the slip) | 48 |
| 8 | Add Endeavour Bvd near Astley Pde | 58 |

### The slip

At step seven the agent was meant to remove the Oxley St stop. It removed the busiest platform instead, and the watchlist lost almost half its morning coverage.

### State alone hides it

If the agent had only saved the final list, we would see four stops and 58 morning visits, with no way to tell which step went wrong.

### Replay with a fix

Because each action is stored, we replace event 7 with the intended removal and rebuild. The corrected list covers 89 morning visits.

### Why agents need this

Agents act in steps, and any step can be wrong. An append-only log lets a person audit what happened, undo a single action, and test a fix by replaying, instead of guessing.

Stop names and visit counts come from the Translink timetable. The agent, its eight actions and the mistake are our own script, written to show the idea, and we left the North Lakes Health Precinct stops out of the watchlist.

Event sourcing in Python

## Save the events, derive the state

Event sourcing stores each change as a record, such as ("add", stop) or ("remove", stop), and computes the current state by applying them in order.

| Step | What learners build |
| --- | --- |
| 1 | Count Wednesday visits per North Lakes stop from the feed. |
| 2 | Write an apply function that turns one event into a state change. |
| 3 | Replay the eight events and print coverage after each one. |
| 4 | Correct event 7, replay again, and compare. |

Version control works in a similar spirit: Git keeps every commit, so a bad change can be found and reverted. Banking ledgers record transactions rather than overwriting balances for the same reason.

### Kids

Keep a step-by-step diary while moving pieces on a board, then rewind.

### Teenagers

Build the log and the replay in Python, then add an undo command.

### Adults

Design audit trails for agents that change files, tickets or databases.

Around North Lakes

## A bus station and the 2027 school year

Translink counts for Wednesday 21 October 2026 plus Queensland Department of Education dates.

### North Lakes station

In the timetable feed this is a bus station; platform 2 takes 271 Wednesday visits and platform 1 takes 102.

### Eleven routes

All 11 routes in the suburb that day are bus routes numbered in the 600s.

### Term dates

Term 1 of 2027 for Queensland state schools runs from Wednesday 27 January to Thursday 25 March.

Outline used

North Lakes is the ABS suburb outline of about 11.73 square kilometres; it holds 47 stop records by our own point-in-polygon test. Figures for the wider City of Moreton Bay belong on our Moreton Bay page.

Learning ladder

## From step diaries to agent logs

Age bands are rough; the free lesson sets the level.

Ages 6 to 9

### Steps in order

Scratch programs that follow and undo instructions.

[Scratch Coding for Kids](/courses/scratch-programming-complete-course)[AI Literacy for Kids (Ages 8 to 14)](/courses/ai-literacy-for-kids-course)Ages 8 to 12

### Making with AI

Games built with AI help and checked by hand.

[Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[Python and AI for Kids](/courses/python-ai-kids-masterclass)Ages 13 to 17

### Tools and logs

Python programs that record and replay what they do.

[AI Tools Course for Teens (13+)](/courses/teens-ai-tools-mastery-course)[Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course)University and adult

### Trustworthy agents

Auditing, rollback and review for working agents.

[Python Automation Course](/courses/python-ai-automation-masterclass-college)[Generative AI Course](/courses/complete-generative-ai-masterclass-college)Coding and AI

## If an agent can do the work, why learn to code?

So you can check what it did.

Vibe coding lets a learner describe a goal and get working code quickly. Agents go further and take actions on their own. Both are useful, and both make mistakes that look like success.

Our watchlist agent never crashed; it just quietly removed the wrong stop. Learners who can read a log, find step seven and replay a fix are the ones who can safely hand real work to an agent.

North Lakes learners practise directing AI and auditing its actions. The longer argument is in [whether learning to code is still worthwhile](/blog/is-coding-worth-learning-2026).

Delivery

## Online lessons for North Lakes

Lessons run over live video, so learners join from home.

### Live sessions

A teacher guides each lesson and reviews code as it is written.

### Queensland terms

Weekly classes follow the school terms and break for holidays.

### First class free

A complete trial lesson, then a written suggestion for next steps.

### Level groups

Fifteen to twenty learners at one level, or private lessons.

### Frequency

Two classes a week, about eight a month.

### Teachers in India

A 5:30pm North Lakes class is 1pm in India, every week.

No daylight saving

According to the IANA time zone database, Queensland's last daylight saving ended in March 1992, so the time gap with India stays at four and a half hours.

Fees

## North Lakes class fees

The same fees apply to everyone.

First class**USD 0**

The first class is free and finishes with a plan.

Group tuition**USD 100**

Group classes: close to eight a month, fifteen to twenty learners.

Private tuition**USD 150**

Private classes: close to eight a month, one teacher, one learner.

North Lakes fees are in US dollars and begin only when the trial has settled the course and weekly times. Holiday and missed-class rules are on the pricing page.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20vibe%20coding%20or%20AI%20agents%20class%20for%20a%20learner%20in%20North%20Lakes.)Reviews

## Google reviews from learners and parents

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

## Book a free North Lakes class

Tell us the learner's age and interests. A child could start with an undo game in Scratch; a teenager could build the replayable watchlist.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented North Lakes one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20vibe%20coding%20or%20AI%20agents%20class%20for%20a%20learner%20in%20North%20Lakes.)

Submitted details are used for placement and follow-up.

FAQ

## North Lakes vibe coding and AI agents questions

Questions we hear from North Lakes families and adult learners.

### How many people live in North Lakes?

The 2021 Census counted 23,030 people in the North Lakes suburb, with a median age of 35 and 6,444 families.

### What is event sourcing?

A way of storing data as the list of changes that happened, in order, and rebuilding the current state by replaying them.

### Why should an AI agent keep a log?

So people can see every action it took, spot a wrong one, undo it and replay the rest, rather than trusting only the final result.

### What is vibe coding?

Describing a program in plain language to an AI tool, letting it draft the code, then reading, testing and correcting that draft.

### Can younger children learn about agents?

They learn the ideas, such as steps, order and undo, through Scratch and kid-safe tools. Real agent building suits teenagers and adults.

### Is there a train station in North Lakes?

Not inside the suburb outline. North Lakes station in the Translink feed is a bus station, and every Wednesday visit there is by bus.

### Do you have a centre in North Lakes?

No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.

### What do North Lakes classes cost?

The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.

### Who is in each group?

Fifteen to twenty learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.

### Is the adult coding agents course open to teens?

No, it is for ages 18 and over. Teenagers take the teen AI tools and vibe coding courses.

More nearby

## Related pages

Visit the [Moreton Bay page](/online-coding-and-python-classes-in-moreton-bay) for the council area, the [Brisbane page](/best-coding-classes-in-brisbane) for the region, and the [Queensland guide](/coding-and-ai-classes-in-queensland) for the state.

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20vibe%20coding%20or%20AI%20agents%20class%20for%20a%20learner%20in%20North%20Lakes.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-north-lakes-brisbane*
