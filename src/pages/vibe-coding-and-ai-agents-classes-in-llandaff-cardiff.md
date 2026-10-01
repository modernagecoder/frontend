---
title: "Vibe Coding and AI Agents Classes in Llandaff, Cardiff | 6 to 67"
description: "Live online vibe coding, AI agents and Python lessons for Llandaff and Llandaff North learners in Cardiff, aged 6 to 67, with WJEC support. First lesson free."
canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-llandaff-cardiff
source: src/pages/vibe-coding-and-ai-agents-classes-in-llandaff-cardiff.html
---
> Llandaff ward in Cardiff counted 8,776 usual residents at the 2021 census, and the separate Llandaff North ward 8,425, on Nomis figures for 2022 ward boundaries. Both names are also recorded as suburban areas of the city. From age six to 67, learners here study vibe coding, AI agents, Python, coding and maths in live video lessons with tutors who teach from India, in a private slot or a class of five to ten at one stage. We teach reasoning about what a program can and cannot know before any tool, so learners can judge what an agent is working from. The opening lesson is free and ends with a suggested course. The Llandaff project asks what an agent standing in the street can see past the buildings, then where a team of agents should stand to see the most. Afterwards a class place costs USD 100 a month and private lessons USD 150 a month.

[Home](/) / [United Kingdom](/coding-classes-in-united-kingdom) / [Cardiff](/best-coding-class-in-cardiff) / Llandaff

Llandaff, Cardiff, Wales / Live online

# Vibe coding and AI agents classes in Llandaff, Cardiff

**Where can Llandaff learners find the best vibe coding and AI agents classes?** Llandaff ward in Cardiff counted 8,776 usual residents at the 2021 census, and the separate Llandaff North ward 8,425, on Nomis figures for 2022 ward boundaries. Both names are also recorded as suburban areas of the city. From age six to 67, learners here study vibe coding, AI agents, Python, coding and maths in live video lessons with tutors who teach from India, in a private slot or a class of five to ten at one stage. We teach reasoning about what a program can and cannot know before any tool, so learners can judge what an agent is working from. The opening lesson is free and ends with a suggested course. The Llandaff project asks what an agent standing in the street can see past the buildings, then where a team of agents should stand to see the most. Afterwards a class place costs USD 100 a month and private lessons USD 150 a month.

A robot, a drone or a camera only knows about the part of the world it can see, and buildings get in the way. The patch visible from one spot has a name borrowed from architecture: an isovist. Working it out is a matter of geometry, drawing straight lines from the observer and checking whether any wall crosses them. Once a program can do that for one position, a harder question opens up: given only a few agents, where should they stand so that together they see as much as possible? This project answers both for the streets of Llandaff, using the buildings mapped on OpenStreetMap as the walls.

Facts last verified 30 September 2026. Teaching is online; no Llandaff branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Llandaff courses in thinking, vibe coding and agents

Four ways to begin, by age. Whichever suits, lesson one is live and free, with no card details taken.

- [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids) (Ages 7 to 12): The how-to-think course: what can you see from here, what is hidden, and how do you know?
- [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev) (Ages 8 to 12): Scratch games imagined by the learner, coded with an AI and checked piece by piece.
- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python and web projects with AI help, including the line-of-sight agents on Llandaff streets.
- [Generative AI Course](/courses/complete-generative-ai-masterclass-college) (Students and adults): Agents that perceive, plan and act, and the limits of what they can observe.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Llandaff and Llandaff North in the census

Two Cardiff wards that carry the name, counted separately.

**Census 2021 usual residents, 2022 wards, via Nomis**

| Ward | Residents (2021) |
|---|---|
| Llandaff | 8,776 |
| Llandaff North | 8,425 |

These are two separate wards and the figures are not combined. Postcodes.io lists Llandaff (CF5) and Llandaff North (CF14) as suburban areas of Cardiff, and a postcode in the middle of our study rectangle, CF5 2ED, resolves to Llandaff ward. Schools here teach the Curriculum for Wales across Years 1 to 13. Send us your school holiday dates and no lesson will be booked inside them.

### Cardiff, Roath and WJEC support

More is on [the Cardiff page](/best-coding-class-in-cardiff), [Roath](/best-coding-and-ai-classes-in-roath-cardiff) and [WJEC GCSE Digital Technology help](/wjec-gcse-digital-technology-help-wales). Our reasons for teaching thinking before tools are on [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

## What can an agent see? Isovists on Llandaff's streets, and where to post a team

Buildings as walls, 2,248 places to stand, and a contest between careful and careless placement.

The learner downloads OpenStreetMap data for a rectangle over Llandaff: 2,569 buildings, whose outlines give 19,452 wall segments, plus the streets and paths. Python marks 2,248 points along those streets and paths, roughly 20 m apart. Two points can see each other if they are no more than 120 m apart and the straight line between them crosses no building wall. That test, repeated for every nearby pair, gives each point its isovist: the set of other street points it can see.

From a typical point an observer sees 27 others, about two thirds of those within range. The spread is wide: one point in ten sees 9 or fewer, one in ten sees 51 or more, and the single most open spot sees 80. Then comes the team question. A greedy planner posts agents one at a time, always choosing the spot that adds the most street points nobody on the team can see yet. A careless planner posts them at random.

**Share of Llandaff's 2,248 street points seen by a team of observers, our Python run on OpenStreetMap data**

| Observers | Placed greedily | Placed at random (median of 200 tries) |
|---|---|---|
| 1 | 3.6% | Not run |
| 5 | 14.5% | 6.2% |
| 10 | 25.9% | 11.7% |
| 20 | 43.9% | 22.1% |

Careful placement sees about twice as much as random placement at every team size: ten well-placed observers cover more than twenty careless ones. Even so, twenty agents see under half the streets, because 120 m is a short reach and corners hide a great deal. The model is also generous. It knows nothing of trees, garden walls, slopes or parked vans, so real visibility would be lower. Greedy placement is not guaranteed to be the perfect arrangement either, only a good one that is quick to compute.

### Years 3 to 6

Stand toy figures on a model street and mark what each can see past the box buildings.

### Years 7 to 9

Test in Python whether the line between two Llandaff street points crosses a building wall.

### Years 10 and up

Compute isovists for every point, then place a team greedily and compare with random placement.

### OpenStreetMap buildings, our sight lines

Buildings, streets and paths are from OpenStreetMap and its contributors under the Open Database Licence. The sample points, the 120 m limit, the sight-line tests and every percentage are our own work. This is a geometry exercise about imaginary observers, not a plan for cameras or surveillance.

## What this teaches about vibe coding and AI agents

An agent can only reason about what reaches it.

**From the Llandaff sight lines to real AI agents**

| In the visibility project | When you build or use an agent |
|---|---|
| A typical point saw 27 others | Every agent has a limited view |
| Some points saw 9, some 80 | Where an agent sits changes what it knows |
| Greedy placement doubled coverage | Choosing what to observe is worth planning |
| 20 agents still saw under half | More agents do not remove blind spots |
| Trees and slopes were ignored | A model of the world is simpler than the world |

Software agents have isovists too. A coding agent sees only the files it was shown; a chatbot sees only the text in its context; a research agent sees only the pages it opened. Its answers can be confident and still miss whatever sat round the corner. Vibe coding means describing a program while an AI writes it, and our Llandaff learners make a habit of asking what the AI was given to look at before judging what it produced. Agent projects begin when a learner can build small Python programs alone, usually from Year 11 or as an adult, and Copilot Studio agents are private lessons only. See [the AI agents course for UK students](/ai-agents-course-for-students-uk) and [understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-uk).

OpenStreetMap, Nomis, the Office for National Statistics and postcodes.io publish the open data used here and have no connection with us. The model and its mistakes are ours.

## From toy streets to agents that perceive

The Welsh school year is our first guess at a level, and the trial lesson checks it.

- **Years 1 to 6: How to think** Seen and hidden, points of view and testing a hunch. [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **Years 4 to 8: Vibe coding for kids** Games and small apps built with an AI and checked by the learner. [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev), [Python and AI for Kids](/courses/python-ai-kids-masterclass)
- **Years 9 to 13: Python and geometry** Lines, intersections and simulations next to WJEC GCSE and A level. [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course), [High School Mathematics](/courses/complete-high-school-mathematics-mastery)
- **Adults: Agents and perception** What agents observe, how they plan, and building them in Python. [Generative AI Course](/courses/complete-generative-ai-masterclass-college), [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)

## What is an isovist, and how does an AI agent work out what it can see?

An isovist is the area visible from one point; an agent computes it by casting straight lines outward and cutting each one off where it first meets a wall.

On Llandaff's streets, with 2,569 mapped buildings as walls and a 120 m reach, a typical point saw 27 of its neighbours, and ten observers placed greedily saw 25.9% of all street points against 11.7% for ten placed at random.

Learners who have built this ask of any agent: what could it actually see when it decided, and what was out of view?

A Llandaff teenager who has coded an agent's field of view understands why an AI can be sure and wrong at once, and that understanding comes from building, not from prompting. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## Lessons for Llandaff, by video

One computer with a camera and a connection that streams video is the full equipment list.

- **Learner-built** The student writes and runs every line. The tutor follows on a shared screen and asks what the program can and cannot see.
- **Trial first** A free session shows what the learner already knows, and any WJEC course goes on the plan.
- **No charge to start** The first lesson is free and closes with a course we would suggest.
- **Classes at one level** Groups hold five to ten learners from around Britain, matched by stage.
- **Twice a week** School holidays are left clear.
- **Unmoving hour** UK clock changes are handled on the tutor's side.

**Why online** Finding five learners at one stage who are free on the same evening within one ward is unlikely. A video class draws them from everywhere.

## Llandaff fees

Llandaff families are charged our international rate, the one that applies everywhere but India.

- First class: USD 0. A complete lesson without charge, followed by our advice.
- Group tuition: USD 100 a month. Around eight live lessons each month in a small class.
- Private tuition: USD 150 a month. Around eight live private lessons each month.

All prices are in US dollars and none in pounds. Billing begins after the trial has agreed a course and a regular slot, and the pricing page explains holiday breaks, missed lessons and moving between class and private tuition.

## Llandaff questions

### How many people live in Llandaff?

Llandaff ward had 8,776 usual residents at the 2021 census. Llandaff North is a separate ward with 8,425.

### Are vibe coding and AI agents classes available online in Llandaff?

Yes. They run as live video lessons for ages 6 to 67 in Llandaff, Llandaff North and the rest of Cardiff.

### What is ray casting?

Sending an imaginary straight line from a point and finding the first thing it hits. It is how programs test what is visible, and how some early 3D games drew their view.

### What is a greedy algorithm for placing observers?

Add one observer at a time, each time choosing the spot that sees the most ground not yet covered. In our Llandaff test it roughly doubled what random placement saw.

### What does the Llandaff project involve?

Testing sight lines between 2,248 street points past 2,569 mapped buildings, then placing teams of observer agents greedily and at random to compare coverage.

### Is vibe coding taught?

Yes, to all ages. Learners explain what they want built, then check and correct what the AI produces.

### When can a learner build AI agents?

When they can write small Python programs alone, usually from Year 11 or as adults. Copilot Studio agents are taught one-to-one only.

### Do you support WJEC courses?

Yes: GCSE and A level Computer Science, GCSE Digital Technology and Maths, taught so the ideas make sense. We promise no grades.

### What do lessons cost?

The trial is free. Continuing costs USD 100 a month in a class or USD 150 a month one-to-one.

### Are there lessons in school holidays?

No. Send us the dates and we plan around them.

## Other Cardiff and south Wales pages

A different experiment on each: [Roath](/best-coding-and-ai-classes-in-roath-cardiff) (outlining a shopping area), [Cardiff](/best-coding-class-in-cardiff), [the Vale of Glamorgan](/coding-classes-in-vale-of-glamorgan) and [Newport](/best-coding-class-in-newport-wales). Go via the [Wales guide](/coding-and-ai-classes-in-wales) or the [UK hub](/coding-classes-in-united-kingdom) for anywhere else.

## Contact

Book the free class on [https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-llandaff-cardiff](https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-llandaff-cardiff#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
