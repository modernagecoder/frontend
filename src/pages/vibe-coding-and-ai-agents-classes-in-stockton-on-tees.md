---
title: "Vibe Coding and AI Agents Classes in Stockton-on-Tees | 6 to 67"
description: "Live online vibe coding, AI agents, Python and coding classes for Stockton, Billingham, Thornaby and Yarm learners aged 6 to 67. First lesson free."
canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-stockton-on-tees
source: src/pages/vibe-coding-and-ai-agents-classes-in-stockton-on-tees.html
---
> Live online vibe coding, AI agents, Python and coding classes for Stockton, Billingham, Thornaby and Yarm learners aged 6 to 67. First lesson free.

Skip to contentStockton-on-Tees course picks

## Vibe coding, AI agents and how-to-think courses

Pair the course with the learner's age and enthusiasms. A complimentary live lesson comes first, and we never ask for card details to book it.

[![Problem Solving and Computational Thinking for Kids course thumbnail](/images/problem-solving-kids.webp)Ages 7 to 12Problem Solving and Computational Thinking for KidsThe how-to-think programme: memory games, logic and step-by-step reasoning.See the syllabus](/courses/problem-solving-and-computational-thinking-for-kids)[![Vibe Coding for Kids course thumbnail](/images/vibe-coding-kids.webp)Ages 8 to 12Vibe Coding for KidsScratch games, then small apps created by describing them to AI and testing.See the syllabus](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Ages 13 to 17Vibe Coding for TeensPython, web and AI builds for teenagers, including the forgetful agent.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Generative AI Course course thumbnail](/images/generative-ai-college.webp)Students and adultsGenerative AI CourseContext windows, retrieval and AI agents, understood and built in Python.See the syllabus](/courses/complete-generative-ai-masterclass-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Stockton-on-Tees borough

## More school-age children, fewer twenty-somethings

What Nomis shows for six age groups in the borough, measured against all of England.

| Ages | Borough residents | Borough share | England share |
| --- | --- | --- | --- |
| 5 to 9 | 12,429 | 6.3% | 5.9% |
| 10 to 14 | 13,021 | 6.6% | 6.0% |
| 20 to 24 | 9,689 | 4.9% | 6.0% |
| 25 to 29 | 11,918 | 6.1% | 6.6% |
| 60 to 64 | 12,734 | 6.5% | 5.8% |
| 65 to 69 | 10,793 | 5.5% | 4.9% |

The early twenties sit more than a point below England, while children aged 10 to 14 and adults in their early sixties are clearly above. The borough is made up of several distinct towns, and the ONS publishes each as its own built-up area: Stockton-on-Tees, Billingham, Ingleby Barwick, Thornaby-on-Tees, Egglescliffe, Yarm and Stillington, plus part of Wynyard. Local pupils study the English national curriculum, and lessons simply skip the half-terms you mention.

### Reasoning comes first

Why learners build thinking skills before leaning on AI is explained on [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk). Neighbouring [Middlesbrough](/ai-and-programming-classes-in-middlesbrough) has its own page.

The Stockton-on-Tees project

## An AI agent with a three-message memory

Stream the borough's towns to an agent that forgets, then design what it should remember.

The learner vibe codes a tiny agent and sends it one message per built-up area, largest first: Stockton-on-Tees 84,815, Billingham 33,920, Ingleby Barwick 23,380, Thornaby-on-Tees 23,350, Egglescliffe 10,250, Yarm 9,600, Wynyard 4,040 and Stillington 1,405. Like a chatbot with a very small context window, the agent can only see its last three messages. Asked "Which is the largest town?", it looks at what it can still see and answers Yarm. Asked for the total, it adds up three numbers and says 15,045. Both answers are delivered with complete confidence, because the agent has no idea what it has forgotten.

| Agent memory | Largest town | Second largest | Third largest |
| --- | --- | --- | --- |
| Last three messages only | Yarm (wrong) | Wynyard (wrong) | Stillington (wrong) |
| Running summary: top two, count and sum | Stockton-on-Tees | Billingham | Cannot answer |
| Running summary: top three, count and sum | Stockton-on-Tees | Billingham | Ingleby Barwick, by just 30 people |
| Every message kept | Stockton-on-Tees | Billingham | Ingleby Barwick |

The fix is a scratchpad memory: after each message, the agent updates a short summary instead of relying on raw history. Keeping the two largest towns, a count and a running sum is enough to answer the first questions correctly. But when the learner later asks for the third largest, the summary cannot help, because nobody told the agent that question was coming. Ingleby Barwick and Thornaby-on-Tees differ by only 30 people, so the answer genuinely needs the stored detail. Keeping the top three solves it. The lesson is that a summary is a decision about which future questions matter.

The running sum hides a final trap. Adding the published figures gives 190,760, not the borough total of 196,595. Smaller places and rural areas are not in the list, and Wynyard's 4,040 is counted whole even though only 2,799 of its residents live inside the borough. So the learner teaches the agent to report the official borough figure when asked for a total, and to describe its own sum as the sum of listed areas. Clear labels matter as much in memory as they do in answers.

### Ages 8 to 11

Hear a list of numbers once, keep only three in your head, and see which questions you can still answer.

### Ages 11 to 15

Let an AI help write a one-message-at-a-time program, then limit how much it may store.

### Ages 15 and up

Design running summaries, test them against surprise questions and label totals honestly.

### ONS figures, our agent

Population figures come from Census 2021 tables on Nomis and the ONS built-up area data. The agent, its memory designs and the results in the table are our own work.

Vibe coding and AI agents

## Memory is a design choice

What a context window means for anyone who uses or builds AI.

| Built-up area | People |
| --- | --- |
| Stockton-on-Tees | 84,815 |
| Billingham | 33,920 |
| Ingleby Barwick | 23,380 |
| Thornaby-on-Tees | 23,350 |
| Egglescliffe | 10,250 |
| Yarm | 9,600 |

Long chats with AI assistants and long-running AI agents both hit this limit. A learner who has watched an agent answer Yarm knows to restate key facts, ask for summaries, and test whether an agent still remembers the start of a task. That awareness grows in stages with us: memory and logic games for younger children in the how-to-think programme, self-tested vibe-coded projects for teenagers, and properly designed agent memory in Python for older students and adults. If Copilot Studio is the platform, those lessons are given individually. There is more on [vibe coding for teenagers](/vibe-coding-for-teens) and the [UK students' AI agents course](/ai-agents-course-for-students-uk).

Modern Age Coders is independent of the Office for National Statistics and Nomis. Credit for the statistics goes to them, and any slip in the forgetful agent is our own.

Stages

## From memory games to agent memory

The school year is a first guess; the free lesson sets the real starting point.

Years 2 to 7

### How to think

Memory games, logic and clear steps.

[Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids)[Coding for Kids](/courses/kids-coding-blocks-masterclass)Years 4 to 8

### Vibe coding for kids

Games and apps built with AI help, always tested.

[Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[Python and AI for Kids](/courses/python-ai-kids-masterclass)Years 9 to 13

### Python and AI systems

Data structures, streaming and AI beside GCSE and A level.

[Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[Data Structures & Algorithms Course](/courses/data-structures-algorithms-masterclass-college)Adults

### Agents with memory

Context, retrieval and agent memory in Python.

[Generative AI Course](/courses/complete-generative-ai-masterclass-college)[Python Automation Course](/courses/python-ai-automation-masterclass-college)AI agents and memory

## Has your AI forgotten the start of the chat?

It will not tell you if it has.

The Stockton-on-Tees agent named Yarm as the largest town with no hint of doubt. It had simply lost sight of the first five messages.

A learner who has built and fixed that agent knows to check what an AI can still see, and to design memory around the questions that matter.

Knowing why an AI forgets, and how to design around it, gives Stockton-on-Tees teenagers an edge with every tool they use, and building that knowledge is a strong reason to code in 2026. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

How it works

## Billingham to Yarm, all online

Every town in the borough is covered; a computer and broadband are all that is needed.

### The learner builds

Students write prompts, code and tests; the tutor follows over screen share and asks rather than tells.

### Placed at the right step

A Year 5 or a Year 12 starts where the free lesson shows they are ready, with the exam board kept in mind.

### First lesson free

A full lesson with no charge, ending with clear advice.

### Classes by stage

Five to ten UK learners working at the same level.

### Twice a week

No lessons in the school holidays.

### One steady hour

Our tutors handle the UK clock changes.

Why small groups meet online

Five learners across the borough at the same stage, free at the same hour, rarely share a street. Online, each joins a class that fits.

Fees

## Stockton-on-Tees fees

The borough pays our single international rate, used everywhere except India.

First class**USD 0**

A whole trial lesson free, followed by a course suggestion.

Group tuition**USD 100**

Approximately eight live small-group lessons each month.

Private tuition**USD 150**

Approximately eight live one-to-one lessons each month; Copilot Studio agents are one-to-one only.

Fees are charged in US dollars rather than sterling. The first invoice follows only after the trial settles the course and the weekly slot. Our pricing page sets out how breaks, missed lessons and switching format are handled.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20would%20love%20a%20free%20vibe%20coding%20or%20AI%20agents%20lesson%20for%20a%20Stockton-on-Tees%20learner.)Reviews

## Google reviews from Teesside households and beyond

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

## Book a free Stockton-on-Tees lesson

Drop us a note with the learner's age or year group and a favourite pastime. We might open with a remember-the-list challenge, an AI-assisted Scratch build, some starter Python, or a pocket-sized agent with a memory problem.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Stockton-on-Tees one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20would%20love%20a%20free%20vibe%20coding%20or%20AI%20agents%20lesson%20for%20a%20Stockton-on-Tees%20learner.)

Submitted details are used for placement and follow-up.

FAQ

## Stockton-on-Tees questions

AI agents, context windows, vibe coding and practical points.

### What is the population of Stockton-on-Tees?

The 2021 census counted 196,595 in the borough; the ONS gives 84,815 for the Stockton-on-Tees built-up area itself.

### What is a context window?

The amount of conversation or text an AI model can take into account at once; older material beyond it is effectively forgotten.

### Do you teach vibe coding here?

Yes, live online for every age, with learners planning first and testing the code the AI writes.

### When can a young person start on AI agents?

After a grounding in Python, typically mid-teens; our Copilot Studio agent lessons are private rather than group-based.

### What is the forgetful agent project?

Learners stream the borough's built-up areas to an agent with a three-message memory, watch it name Yarm as largest, then design better memory.

### Are lessons in person?

No. They take place live online.

### Is there support for exam years?

Yes, for GCSE and A level computer science and maths. We teach for understanding and never guarantee a grade.

### Is there an age range?

Our learners range from 6 to 67.

### How much does it cost?

Lesson one is on us. Group study then runs at USD 100 monthly and private study at USD 150 monthly.

### Do lessons pause for school holidays?

Yes; just send the dates.

Nearby

## Other pages around the Tees

Nearby, [Middlesbrough](/ai-and-programming-classes-in-middlesbrough), [Darlington](/vibe-coding-and-ai-agents-classes-in-darlington) and [Hartlepool](/online-coding-and-python-classes-in-hartlepool) each have a page. For the whole region see [North East England](/coding-and-ai-classes-in-north-east-england); the [UK hub](/coding-classes-in-united-kingdom) gathers the rest.

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20would%20love%20a%20free%20vibe%20coding%20or%20AI%20agents%20lesson%20for%20a%20Stockton-on-Tees%20learner.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-stockton-on-tees*
