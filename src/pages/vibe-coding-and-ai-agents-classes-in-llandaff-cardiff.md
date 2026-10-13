---
title: "Vibe Coding and AI Agents Classes in Llandaff, Cardiff | 6 to 67"
description: "Live online vibe coding, AI agents and Python lessons for Llandaff and Llandaff North learners in Cardiff, aged 6 to 67, with WJEC support. First lesson free."
canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-llandaff-cardiff
source: src/pages/vibe-coding-and-ai-agents-classes-in-llandaff-cardiff.html
---
> Live online vibe coding, AI agents and Python lessons for Llandaff and Llandaff North learners in Cardiff, aged 6 to 67, with WJEC support. First lesson free.

Skip to contentLlandaff course picks

## Llandaff courses in thinking, vibe coding and agents

Four ways to begin, by age. Whichever suits, lesson one is live and free, with no card details taken.

[![Problem Solving and Computational Thinking for Kids course thumbnail](/images/problem-solving-kids.webp)Ages 7 to 12Problem Solving and Computational Thinking for KidsThe how-to-think course: what can you see from here, what is hidden, and how do you know?See the syllabus](/courses/problem-solving-and-computational-thinking-for-kids)[![Vibe Coding for Kids course thumbnail](/images/vibe-coding-kids.webp)Ages 8 to 12Vibe Coding for KidsScratch games imagined by the learner, coded with an AI and checked piece by piece.See the syllabus](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Ages 13 to 17Vibe Coding for TeensPython and web projects with AI help, including the line-of-sight agents on Llandaff streets.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Generative AI Course course thumbnail](/images/generative-ai-college.webp)Students and adultsGenerative AI CourseAgents that perceive, plan and act, and the limits of what they can observe.See the syllabus](/courses/complete-generative-ai-masterclass-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Llandaff and Cardiff

## Llandaff and Llandaff North in the census

Two Cardiff wards that carry the name, counted separately.

| Ward | Residents (2021) |
| --- | --- |
| Llandaff | 8,776 |
| Llandaff North | 8,425 |

These are two separate wards and the figures are not combined. Postcodes.io lists Llandaff (CF5) and Llandaff North (CF14) as suburban areas of Cardiff, and a postcode in the middle of our study rectangle, CF5 2ED, resolves to Llandaff ward. Schools here teach the Curriculum for Wales across Years 1 to 13. Send us your school holiday dates and no lesson will be booked inside them.

### Cardiff, Roath and WJEC support

More is on [the Cardiff page](/best-coding-class-in-cardiff), [Roath](/best-coding-and-ai-classes-in-roath-cardiff) and [WJEC GCSE Digital Technology help](/wjec-gcse-digital-technology-help-wales). Our reasons for teaching thinking before tools are on [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

The Llandaff project

## What can an agent see? Isovists on Llandaff's streets, and where to post a team

Buildings as walls, 2,248 places to stand, and a contest between careful and careless placement.

The learner downloads OpenStreetMap data for a rectangle over Llandaff: 2,569 buildings, whose outlines give 19,452 wall segments, plus the streets and paths. Python marks 2,248 points along those streets and paths, roughly 20 m apart. Two points can see each other if they are no more than 120 m apart and the straight line between them crosses no building wall. That test, repeated for every nearby pair, gives each point its isovist: the set of other street points it can see.

From a typical point an observer sees 27 others, about two thirds of those within range. The spread is wide: one point in ten sees 9 or fewer, one in ten sees 51 or more, and the single most open spot sees 80. Then comes the team question. A greedy planner posts agents one at a time, always choosing the spot that adds the most street points nobody on the team can see yet. A careless planner posts them at random.

| Observers | Placed greedily | Placed at random (median of 200 tries) |
| --- | --- | --- |
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

Agents and perception

## What this teaches about vibe coding and AI agents

An agent can only reason about what reaches it.

| In the visibility project | When you build or use an agent |
| --- | --- |
| A typical point saw 27 others | Every agent has a limited view |
| Some points saw 9, some 80 | Where an agent sits changes what it knows |
| Greedy placement doubled coverage | Choosing what to observe is worth planning |
| 20 agents still saw under half | More agents do not remove blind spots |
| Trees and slopes were ignored | A model of the world is simpler than the world |

Software agents have isovists too. A coding agent sees only the files it was shown; a chatbot sees only the text in its context; a research agent sees only the pages it opened. Its answers can be confident and still miss whatever sat round the corner. Vibe coding means describing a program while an AI writes it, and our Llandaff learners make a habit of asking what the AI was given to look at before judging what it produced. Agent projects begin when a learner can build small Python programs alone, usually from Year 11 or as an adult, and Copilot Studio agents are private lessons only. See [the AI agents course for UK students](/ai-agents-course-for-students-uk) and [understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-uk).

OpenStreetMap, Nomis, the Office for National Statistics and postcodes.io publish the open data used here and have no connection with us. The model and its mistakes are ours.

Stages

## From toy streets to agents that perceive

The Welsh school year is our first guess at a level, and the trial lesson checks it.

Years 1 to 6

### How to think

Seen and hidden, points of view and testing a hunch.

[Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids)[Scratch Coding for Kids](/courses/scratch-programming-complete-course)Years 4 to 8

### Vibe coding for kids

Games and small apps built with an AI and checked by the learner.

[Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[Python and AI for Kids](/courses/python-ai-kids-masterclass)Years 9 to 13

### Python and geometry

Lines, intersections and simulations next to WJEC GCSE and A level.

[Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[High School Mathematics](/courses/complete-high-school-mathematics-mastery)Adults

### Agents and perception

What agents observe, how they plan, and building them in Python.

[Generative AI Course](/courses/complete-generative-ai-masterclass-college)[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)Agents and sight

## What is an isovist, and how does an AI agent work out what it can see?

An isovist is the area visible from one point; an agent computes it by casting straight lines outward and cutting each one off where it first meets a wall.

On Llandaff's streets, with 2,569 mapped buildings as walls and a 120 m reach, a typical point saw 27 of its neighbours, and ten observers placed greedily saw 25.9% of all street points against 11.7% for ten placed at random.

Learners who have built this ask of any agent: what could it actually see when it decided, and what was out of view?

A Llandaff teenager who has coded an agent's field of view understands why an AI can be sure and wrong at once, and that understanding comes from building, not from prompting. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

How it works

## Lessons for Llandaff, by video

One computer with a camera and a connection that streams video is the full equipment list.

### Learner-built

The student writes and runs every line. The tutor follows on a shared screen and asks what the program can and cannot see.

### Trial first

A free session shows what the learner already knows, and any WJEC course goes on the plan.

### No charge to start

The first lesson is free and closes with a course we would suggest.

### Classes at one level

Groups hold fifteen to twenty learners from around Britain, matched by stage.

### Twice a week

School holidays are left clear.

### Unmoving hour

UK clock changes are handled on the tutor's side.

Why online

Finding five learners at one stage who are free on the same evening within one ward is unlikely. A video class draws them from everywhere.

Fees

## Llandaff fees

Llandaff families are charged our international rate, the one that applies everywhere but India.

First class**USD 0**

A complete lesson without charge, followed by our advice.

Group tuition**USD 100**

Around eight live lessons each month in a small class.

Private tuition**USD 150**

Around eight live private lessons each month.

All prices are in US dollars and none in pounds. Billing begins after the trial has agreed a course and a regular slot, and the pricing page explains holiday breaks, missed lessons and moving between class and private tuition.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20could%20we%20book%20a%20free%20vibe%20coding%20or%20AI%20agents%20lesson%20for%20a%20learner%20in%20Llandaff%2C%20Cardiff%3F)Reviews

## Google reviews from Cardiff parents and learners elsewhere in Britain

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

## Book a free Llandaff lesson

Share an age or Year group and whatever the learner is keen on. The trial may be a what-can-you-see puzzle with toy buildings, a Scratch game made alongside an AI, a first Python program, or a sight-line test on a real street map.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Llandaff one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20could%20we%20book%20a%20free%20vibe%20coding%20or%20AI%20agents%20lesson%20for%20a%20learner%20in%20Llandaff%2C%20Cardiff%3F)

Submitted details are used for placement and follow-up.

FAQ

## Llandaff questions

Sight lines, observer agents, vibe coding, Python and how lessons are arranged.

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

Nearby

## Other Cardiff and south Wales pages

A different experiment on each: [Roath](/best-coding-and-ai-classes-in-roath-cardiff) (outlining a shopping area), [Cardiff](/best-coding-class-in-cardiff), [the Vale of Glamorgan](/coding-classes-in-vale-of-glamorgan) and [Newport](/best-coding-class-in-newport-wales). Go via the [Wales guide](/coding-and-ai-classes-in-wales) or the [UK hub](/coding-classes-in-united-kingdom) for anywhere else.

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20could%20we%20book%20a%20free%20vibe%20coding%20or%20AI%20agents%20lesson%20for%20a%20learner%20in%20Llandaff%2C%20Cardiff%3F)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-llandaff-cardiff*
