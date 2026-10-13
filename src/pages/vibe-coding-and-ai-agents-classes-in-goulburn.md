---
title: "Vibe Coding and AI Agents Classes in Goulburn | Live Online"
description: "Live online vibe coding and AI agents classes for Goulburn and Mulwaree teens and adults, taught by a real teacher in a small group or one to one. First lesson free."
canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-goulburn
source: src/pages/vibe-coding-and-ai-agents-classes-in-goulburn.html
---
> Lessons in which a Goulburn teenager or adult designs AI agents in Python, decides when an agent should stop and look at what it found, and tests the answers against open data with a teacher. The 2021 Census counted 24,565 people in the Goulburn urban area. Classes happen live over video, privately or in a small group at a matching level, and the opening lesson is free.

[Home](/) / [Australia](/coding-classes-in-australia) / [New South Wales](/coding-and-ai-classes-in-new-south-wales) / Goulburn

Goulburn, New South Wales, Australia / Live online

# Vibe coding and AI agents classes in Goulburn

**What are the best vibe coding and AI agents classes in Goulburn?** Lessons in which a Goulburn teenager or adult designs AI agents in Python, decides when an agent should stop and look at what it found, and tests the answers against open data with a teacher. The 2021 Census counted 24,565 people in the Goulburn urban area. Classes happen live over video, privately or in a small group at a matching level, and the opening lesson is free.

Give an AI agent the state's school list and ask how many government schools are in the town of Goulburn. One design writes its whole plan first: load the rows, keep those whose town reads "Goulburn", count. It follows the plan faithfully and reports 0. Another design looks at every result before choosing the next step. Seeing zero, it lists the town labels, spots a hidden space after the word, then a row in capitals, and reaches 9, or 10 if Goulburn North counts. Our Goulburn project builds both agents and asks when planning ahead helps and when it blinds.

Facts last verified 9 October 2026. Teaching is online; no Goulburn branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 15 to 20 students per group.

## Courses for agents that look before they answer

Every course here builds the skills behind the two-agent project further down. Book the free first lesson and the teacher will name the one that suits; no card is needed.

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Ask an AI for a program, then question, run and mend the code it produces, in Python and for the browser.
- [Codex & Claude Code for Teens](/courses/codex-and-claude-code-ai-coding-agents-course-for-teens) (Ages 13 to 18): Coding agents that edit real projects, and the habit of checking each change they make.
- [Vibe Coding for College](/courses/vibe-coding-for-college-fullstack-ai-dsa-career-course) (University and adult): Full applications made with AI assistance, plus the data structures and tests that keep them honest.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Adults and professionals): Directing coding agents through multi-step jobs, and catching the step where a plan stopped matching reality.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Eight thousand houses and very few flats

The 2021 QuickStats release for the Goulburn Significant Urban Area, set out as printed, with state and national rows for scale.

**Goulburn urban area, 2021 Census QuickStats**

| Item | Goulburn |
|---|---|
| People counted | 24,565 |
| Families | 6,245 |
| All private dwellings | 10,872 |
| Average household size | 2.3 people |

**Goulburn beside New South Wales and Australia**

| Census item | Goulburn | NSW | Australia |
|---|---|---|---|
| Median age | 40 | 39 | 38 |
| Homes that are a separate house | 84.4% (8,002) | 65.6% | 72.3% |
| Homes that are a flat or apartment | 3.8% (359) | 21.7% | 14.2% |
| Workers in technical and trade jobs | 14.3% (1,560) | 11.9% | 12.9% |

### Close to the state

A median age of 40 puts Goulburn one year above New South Wales as a whole.

### Detached living

8,002 occupied homes were separate houses, 84.4%, against 65.6% across the state.

### Young people

QuickStats lists 1,534 residents aged 5 to 9, 1,506 aged 10 to 14 and 1,294 aged 15 to 19.

A note on the numbers: the bureau adds tiny random adjustments to its counts to protect privacy, so rows in one table may not add up exactly to the figure printed as their total. We copy each total and percentage as published and never build a total by adding rows.

## Plan first, or look after every step?

Two scripted agents get the same question and the same tool, a function that reads the NSW Department of Education school list for the Goulburn Mulwaree council area, 14 rows. The only difference is when each one looks at what its tool returned.

**How many government schools are in the town of Goulburn? (our simulation)**

| Agent design | Tool calls | Answer |
|---|---|---|
| plan-and-execute, plan written before any data is seen | 3 | 0 |
| plan-and-execute with one check and replan at the end | 5 | 8 |
| Interleaved: reason, act, observe, repeat | 6 | 9, or 10 with Goulburn North |

**What the interleaved agent saw at each step**

| Step | What it tried | Rows matched |
|---|---|---|
| 1 | Town label exactly "Goulburn" | 0 |
| 2 | List the distinct town labels | 7 labels |
| 3 | Remove spaces around each label | 8 |
| 4 | Ignore capital letters as well | 9 (adds Bradfordville Public School) |
| 5 | Any label starting with "Goulburn" | 10 (adds Goulburn North Public School) |

### The hidden space

In 11 of the 14 rows the town label ends with an invisible space, so "Goulburn " never equals "Goulburn". A plan written in advance cannot know that.

### The capital letters

One school's label is typed GOULBURN and another TALLONG. A single replan that only strips spaces still misses the first, which is why the replanned agent stops at 8.

### The judgement call

Whether Goulburn North belongs in "the town of Goulburn" is a question about meaning, not data. A good agent reports both counts and says why, instead of picking one silently.

### Planning is not the mistake

Writing a plan first is quick, cheap and easy to audit, and for familiar, clean data it works well. The failure here comes from never comparing the plan with what came back. Zero schools in a town that appears in the council's own name should have been a warning. Learners add that kind of check to the planning agent and watch it recover part of the way, then see why some messes only show up one observation at a time.

Both agents are short Python scripts we wrote to make the two designs visible; neither is a commercial AI product, and the step counts describe our scripts only. The department's file is used as found, including its untidy labels, and nothing on this page rates any school.

## Habits the Goulburn agents teach about any AI helper

The same pattern appears whenever an assistant runs a sequence of actions: in spreadsheets, in code changes, in searches across a shared drive.

**Design choices and what the Goulburn data shows**

| Choice | In this project | Rule of thumb |
|---|---|---|
| When should the agent look? | The fixed plan never inspected its own result | Check every result that would surprise a person |
| What counts as suspicious? | Zero matches for a town in the council's own name | Write expected ranges down before running |
| How far should one replan go? | Stripping spaces gave 8 and missed GOULBURN | Inspect the data again after each fix |
| Who settles definitions? | Goulburn North in or out | Return both figures and ask the person |

Ask a chat assistant to "count the Goulburn schools in this file" and it may well write the three-line filter our first agent used, then state 0 with confidence. Someone who has watched the interleaved agent work knows to ask for the list of distinct values first, and to treat a suspiciously round answer as a prompt to look again rather than a result.

### Teenagers

Build both agents as plain Python loops, print every observation, and find the step where the plan went wrong.

### University students

Tool design, validation steps and the trade between planning cost and checking cost in agent frameworks.

### Adults

Supervising coding and office agents on multi-step jobs, and knowing which intermediate result to inspect.

Modern Age Coders is independent of Goulburn Mulwaree Council, the NSW education department and the Australian Bureau of Statistics. They publish the school list and the census tables; the two agents and their answers belong to our teaching material.

## Schools from 1858 to 1971 across Goulburn Mulwaree

Founding dates from the same department file, plus the NSW school calendar.

### First in the list

Goulburn Public School has the earliest first-teacher date in the council area, July 1858.

### Outside the town

First teachers are recorded at Marulan in 1860, Tallong Public School in 1865, Windellama Public School in 1871 and Tarago in 1878.

### Two high schools

The file gives Goulburn High School a first-teacher date in 1913 and Mulwaree High School one in 1971.

**The 2027 school year** Term 1 for NSW Eastern division students begins on Wednesday 3 February 2027 and ends on Friday 9 April. We plan holiday breaks and exam weeks around the NSW calendar, so lessons pause when families expect them to.

## From first prompts to agents you can supervise

Ages here are rough guides; the free first lesson sets the real starting point.

- **Ages 13 to 14: Code you can question** Small Python programs written with an AI, read line by line and run on real files such as the school list. [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course), [Python for Teens](/courses/python-complete-masterclass-teens)
- **Ages 15 to 18: Agents in loops** Agents that call a tool, print what came back and decide the next move from it, built step by step. [Codex & Claude Code for Teens](/courses/codex-and-claude-code-ai-coding-agents-course-for-teens), [AI Tools Course for Teens (13+)](/courses/teens-ai-tools-mastery-course)
- **University: Planning and checking** Plan-then-act versus act-then-observe designs, validation, retries and cost in real agent systems. [Vibe Coding for College](/courses/vibe-coding-for-college-fullstack-ai-dsa-career-course), [Generative AI Course](/courses/complete-generative-ai-masterclass-college)
- **Adults: Agents at work** Coding and workplace agents trusted with several steps, and the checkpoints that catch a plan going stale. [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals), [Copilot Studio Agent Masterclass for Professionals](/courses/ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals)

## Why does a Goulburn learner need to know how agents plan?

Because more and more AI tools now take several actions in a row on our behalf, and each action rests on the one before.

A chat reply can be read and judged in a moment. An agent that edits files, queries data and sends results does its work out of sight, and if its plan was fixed before it looked, one wrong assumption at step two carries all the way to a confident final answer, like the 0 our first agent gave for Goulburn.

We teach learners to design agents that pause at the right moments, to read the trace of what an agent actually did, and to decide which questions are about data and which about meaning. Those skills transfer to every assistant they will use, whichever company makes it.

In 2026 an agent can finish a task in seconds, and a Goulburn learner who can tell when it skipped a look is the one who gets the answer right. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## Goulburn, Marulan or Tarago, one live lesson

The schools in our project include Tallong, Windellama, Marulan and Tarago as well as Goulburn itself, and a video class reaches all of them equally.

- **No drive needed** A learner in Marulan and another in central Goulburn can debug the same agent together without anyone leaving home.
- **Fits the NSW year** Plans move with the learner's school stage and the four NSW terms, and senior students can connect agent projects to the computing or maths they are taking.
- **Trial with substance** The free lesson is a real class with working code; afterwards we propose a level, a course and a weekly slot, with no card details asked.
- **Matched groups** Groups hold fifteen to twenty learners at the same stage, drawn from across Australia and further afield, so a suitable class always exists.
- **A steady rhythm** Classes run on the same two weekdays at the same hour, close to eight sessions a month, with exam and holiday pauses set in advance.
- **Teachers in India** A 6pm Goulburn class in winter begins at 1:30pm in India; once NSW daylight saving starts it begins at 12:30pm there.

**Clocks change, lesson times do not** NSW clocks go forward on Sunday 4 October 2026 and back on Sunday 4 April 2027, and India does not change at all. We always book in Goulburn time, so the hour on the timetable is the hour the lesson starts.

## Fees for Goulburn learners

Three prices, nothing hidden.

- First class: USD 0. A full lesson with no charge, ending with a suggested level, course and time.
- Group tuition: USD 100 a month. Roughly eight lessons a month with fifteen to twenty learners at the same stage.
- Private tuition: USD 150 a month. Roughly eight lessons a month, just the learner and a teacher.

Billing outside India is always in US dollars, so a family in Tarago pays the same figure as one in central Goulburn and there is no separate local tariff. Payment waits until the trial has agreed a course and a regular time, and the pricing page sets out pauses, missed lessons and moves between group and private.

## Goulburn vibe coding and AI agents questions

### How many people live in Goulburn?

The 2021 Census QuickStats for the Goulburn Significant Urban Area recorded 24,565 people, 6,245 families and 10,872 private dwellings, with a median age of 40.

### What is a plan-and-execute agent?

A plan-and-execute agent writes out all of its steps first and then carries them out in order. It is fast and easy to audit, but it cannot react to anything surprising in the results unless a checking step is added.

### What is an interleaved agent?

An interleaved agent alternates between reasoning, taking one action and observing the result, then decides its next step from what it saw. The 2022 ReAct paper by Yao and colleagues describes this pattern for language-model agents.

### What is the Goulburn agents project?

Learners build two small agents that count the government schools in the town of Goulburn from the NSW school list. The planning agent answers 0 because of a hidden space in the data; the agent that observes each step reaches 9, or 10 counting Goulburn North.

### What is vibe coding?

Vibe coding means describing what you want in plain English and letting an AI write the code. We teach it together with reading, testing and fixing that code, because the AI is often confidently wrong.

### When are lessons held?

Times are fixed at the trial and stated in Goulburn time, mostly after school or on weekends. India runs 4.5 hours behind Goulburn in winter and 5.5 hours behind during NSW daylight saving.

### Can children younger than 13 join?

Yes, from age six. Younger learners begin with Scratch and visual projects, while the agent project on this page suits teenagers and adults.

### Do you have a centre in Goulburn?

No, and none is claimed. All lessons are live and online and we have no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection; the contact number shown is Indian.

### What do Goulburn vibe coding and AI agents classes cost?

The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are settled before any payment.

### How big are the groups?

Fifteen to twenty learners, grouped by level, pace and goals rather than by age or postcode. When no group suits the time a learner needs, one-to-one lessons are offered instead.

## More for Goulburn Mulwaree learners

You may also like the [New South Wales page](/coding-and-ai-classes-in-new-south-wales) for state-wide courses and terms, or [AI and programming classes in Taree](/ai-and-programming-classes-in-taree) for a machine learning project on the same school list. Every other place and subject sits on the [Australia hub](/coding-classes-in-australia).

## Contact

Book the free class on [https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-goulburn](https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-goulburn#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
