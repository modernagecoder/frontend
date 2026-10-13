---
title: "Vibe Coding and AI Agents Classes in Morningside, Edinburgh"
description: "Live online vibe coding, AI agents and Python lessons for Morningside, Bruntsfield, Greenbank and Comiston learners in Edinburgh, aged 6 to 67. First lesson free."
canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-morningside-edinburgh
source: src/pages/vibe-coding-and-ai-agents-classes-in-morningside-edinburgh.html
---
> Live online vibe coding, AI agents and Python lessons for Morningside, Bruntsfield, Greenbank and Comiston learners in Edinburgh, aged 6 to 67. First lesson free.

Skip to contentMorningside course picks

## Morningside courses in thinking, vibe coding and agents

Four courses by age. The opening lesson on each is live and free, and we ask for no card.

[![Problem Solving and Computational Thinking for Kids course thumbnail](/images/problem-solving-kids.webp)Ages 7 to 12Problem Solving and Computational Thinking for KidsThe how-to-think course: choosing when you cannot be sure, and saying which rule you used.See the syllabus](/courses/problem-solving-and-computational-thinking-for-kids)[![Vibe Coding for Kids course thumbnail](/images/vibe-coding-kids.webp)Ages 8 to 12Vibe Coding for KidsScratch games thought up by the learner, built with an AI and tested fully.See the syllabus](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Ages 13 to 17Vibe Coding for TeensPython and web projects with AI help, including the deciding agent on a Morningside map.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Generative AI Course course thumbnail](/images/generative-ai-college.webp)Students and adultsGenerative AI CourseAgents that plan, decide under uncertainty and explain their choices, in Python.See the syllabus](/courses/complete-generative-ai-masterclass-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Morningside in the EH9 and EH10 postcodes

## Morningside, Bruntsfield, Greenbank and Comiston

Recorded suburbs in EH9 and EH10, and why no population appears.

| Postcode district | Recorded suburban areas |
| --- | --- |
| EH10 | Morningside, Churchhill, Greenbank, Comiston |
| EH9 | Bruntsfield, Marchmont, Blackford |

We looked for a National Records of Scotland figure covering exactly Morningside and found none, so the only count on this page is the city's. Edinburgh schools teach the Curriculum for Excellence, and our lessons follow its P and S stages, with SQA Computing Science and Maths help at National 5, Higher and Advanced Higher. Give us the school holiday dates and no lesson will fall in them.

### Edinburgh, Scotland and exam support

The city page is [Edinburgh](/best-coding-class-in-edinburgh); see also [Scotland](/coding-and-ai-classes-in-scotland) and [Advanced Higher Maths tuition](/advanced-higher-maths-tuition-online). Why we teach reasoning first is on [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

The Morningside project

## Expected value, maximin or minimax regret? An agent picks a meeting point

Real walking distances, one unknown, and three rules that do not all agree.

The learner builds a walking network from OpenStreetMap, 130.0 km of streets and paths, and finds the points the map uses to label 14 neighbourhoods in the area, from Firrhill and Greenbank to Merchiston and Greenhill. Dijkstra's algorithm gives the walking distance between every pair. The agent's job: choose one of five venues, the places the map tags as suburbs, for a learner who will walk from one of the 14 neighbourhoods. The agent does not know which. For each venue the program works out the average walk if all 14 starts are equally likely, the longest possible walk, and the largest regret, meaning the most extra distance compared with the venue that would have suited that walker.

| Venue | Average walk | Longest walk | Largest regret |
| --- | --- | --- | --- |
| Comiston | 1,387 | 1,990 | 1,967 |
| Morningside | 1,414 | 2,830 | 1,839 |
| Merchiston | 1,551 | 3,250 | 2,692 |
| Greenbank | 1,840 | 2,692 | 2,692 |
| Braid Hills | 2,068 | 3,248 | 2,560 |

An agent told to minimise the average walk chooses the Comiston label point, at 1,387 m. So does a cautious agent using maximin, since Comiston's longest walk, 1,990 m from the Flower Colonies, is the shortest of the five worst cases. But an agent told to minimise regret chooses Morningside: its largest regret is 1,839 m, against 1,967 m for Comiston, whose weak spot is a walker from Merchiston who had a venue on the doorstep. A fourth rule, pure optimism, is useless here: every venue has a shortest possible walk of 0 m. None of the rules is wrong. They answer different questions, and the agent must be told which question it is answering.

### P5 to P7

Pick where to meet a friend who could come from three different places, first by averages and then by the worst case.

### S1 to S3

Build the table of walking distances in Python and find each venue's average and longest walk.

### S4 and up

Code expected value, maximin and minimax regret and explain why they split.

### OpenStreetMap places, our agent

Paths and place labels are from OpenStreetMap and its contributors under the Open Database Licence. A label point is where the map prints a name, not the edge of a neighbourhood. The distances, rules and picks are our own teaching exercise, not advice about where to meet.

Agents that decide

## Why every deciding agent carries a rule

An agent cannot avoid a decision rule; it can only hide one.

| In the meeting-point project | When an agent chooses for you |
| --- | --- |
| Average and worst-case rules chose Comiston | Some goals happen to agree |
| Minimax regret chose Morningside | A different goal gives a different action |
| Optimism tied every venue at 0 m | Some rules cannot tell options apart |
| All 14 starts were treated as equally likely | Hidden assumptions drive the average |
| The table was built from real distances | Decisions are only as good as the payoffs fed in |

Ask an AI agent to "pick the most convenient place" and it will choose something, using an unstated mix of averages and guesses. With vibe coding, where the learner describes a program and an AI writes it, our Morningside learners write the decision rule into the description, average, worst case or regret, and check the code really applies it. For agents that book, buy or schedule on your behalf, that one line of instruction is the difference between cautious and optimistic behaviour. Agent building begins when a learner can write Python on their own, in practice around S5 or later, and Copilot Studio agents are taught one-to-one only. Two longer reads: [the AI agents course for students](/ai-agents-course-for-students-uk), then [understanding code instead of pasting it](/understand-the-code-dont-copy-paste-uk).

OpenStreetMap, National Records of Scotland and postcodes.io published the open data used here and have no tie to us; the agent and any error in it belong to Modern Age Coders.

Stages

## From fair guesses to deciding agents

The P or S year gives a first hint; the trial shows the real starting point.

P1 to P7

### How to think

Choices, worst cases and explaining a decision.

[Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids)[Scratch Coding for Kids](/courses/scratch-programming-complete-course)P5 to S2

### Vibe coding for kids

Games and apps planned by the learner and built with AI help.

[Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[Python and AI for Kids](/courses/python-ai-kids-masterclass)S3 to S6

### Python and decisions

Tables of outcomes, averages and risk, beside SQA Maths and Computing Science.

[Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[Statistics & Probability](/courses/statistics-probability-maths-course)Adults

### Agents that choose

Decision rules, planning and tool use in Python agents.

[Generative AI Course](/courses/complete-generative-ai-masterclass-college)[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)Agents and uncertainty

## How should an AI agent decide when it does not know what will happen?

By an explicit decision rule: minimise the expected cost if chances can be estimated, minimise the worst case (maximin) if caution matters most, or minimise regret if being far from the ideal choice is the real danger; the rules can disagree, so the designer has to pick one.

Choosing a meeting point for a walker from an unknown one of 14 neighbourhoods around Morningside, the average-walk and worst-case rules both chose Comiston, at 1,387 m and 1,990 m, while minimax regret chose Morningside, with a largest regret of 1,839 m.

Learners who have coded the three rules ask of any agent: which rule did it use, and who decided that?

A Morningside teenager who can name the rule behind a choice will not mistake an agent's confidence for wisdom, and writing such agents is how that judgement is earned. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

How it works

## Bruntsfield to Comiston, by video

Equipment is simple: a computer, a webcam and a connection that holds a video call.

### The learner decides and types

Code, prompts and design choices are the student's; the tutor watches the shared screen and asks which rule they chose and why.

### Trial finds the level

The free session shows what to teach first; any SQA course is noted.

### A free opening lesson

Lesson one costs nothing, and its last minutes go on which course fits.

### Classmates at your stage

Groups have fifteen to twenty learners at one level, from around the UK.

### Two a week

In term time only.

### Time that holds

Our tutors absorb the UK clock changes, so your slot is constant.

Why online

Five learners at one stage, free on one evening, rarely share a neighbourhood. On video that stops mattering.

Fees

## Morningside fees

Learners in Morningside pay our international rates, the ones for every country except India.

First class**USD 0**

A complete free lesson, then advice on a course.

Group tuition**USD 100**

About eight live group lessons each month.

Private tuition**USD 150**

About eight live one-to-one lessons each month.

Billing is in US dollars with no sterling price, and starts when the trial has agreed a course and a regular time. The pricing page sets out holidays, absences and switching between class and private lessons.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20could%20we%20book%20a%20free%20vibe%20coding%20or%20AI%20agents%20lesson%20for%20a%20learner%20in%20Morningside%3F)Reviews

## Edinburgh families and learners around Britain, on Google

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

## Book a free Morningside lesson

Send an age or school stage and something the learner likes. The trial might be a where-shall-we-meet puzzle, a Scratch game made with an AI, a first Python script, or a small agent that has to choose.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Morningside one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20could%20we%20book%20a%20free%20vibe%20coding%20or%20AI%20agents%20lesson%20for%20a%20learner%20in%20Morningside%3F)

Submitted details are used for placement and follow-up.

FAQ

## Morningside questions

Decision rules, the meeting-point agent, vibe coding and how lessons run.

### What is the population of Morningside?

We found no official figure for exactly Morningside and quote none. The City of Edinburgh as a whole had about 512,700 people in the 2022 census.

### Can someone in Morningside learn vibe coding and agent building online?

Yes, as live video lessons for ages 6 to 67 in Morningside, Bruntsfield, Greenbank and the rest of Edinburgh.

### What is the maximin rule?

Choose the option whose worst outcome is the least bad. It suits cautious decisions where nothing is known about the chances.

### What is minimax regret?

For each option, find the most you could regret choosing it, compared with the ideal choice in each situation, and pick the option where that figure is smallest. In our Morningside table it chose a different venue from the other rules.

### What is the Morningside project?

An agent picks one of five meeting points for a walker from an unknown one of 14 neighbourhoods, using real walking distances and three decision rules.

### How do Morningside learners use vibe coding?

They tell an AI what the program must do, including which decision rule to apply, read the code it returns, and test it until it behaves as asked.

### When can a learner start building AI agents?

Once they write Python on their own, in practice around S5 or later; Copilot Studio agents are private lessons only.

### Do you help with SQA Maths and Computing Science?

Yes, from National 5 to Advanced Higher, aiming for understanding and promising no grades.

### What are the fees?

Nothing for the trial lesson. A place in a class then costs USD 100 each month, and a tutor to yourself costs USD 150 each month.

### Do lessons stop in the holidays?

Yes, during school holidays, once you send the dates.

Nearby

## More Edinburgh and Lothian pages

Each page runs a different experiment: [Edinburgh](/best-coding-class-in-edinburgh) (why summer nights never get dark), [Musselburgh](/online-coding-and-python-classes-in-musselburgh), [Livingston](/best-coding-and-ai-classes-in-livingston) and [Midlothian](/coding-classes-in-midlothian). The [UK hub](/coding-classes-in-united-kingdom) links everywhere else.

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20could%20we%20book%20a%20free%20vibe%20coding%20or%20AI%20agents%20lesson%20for%20a%20learner%20in%20Morningside%3F)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-morningside-edinburgh*
