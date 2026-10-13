---
title: "Vibe Coding and AI Agents Classes in Oldbury, Sandwell"
description: "Vibe coding, AI agents, Python and coding classes online for Oldbury, Langley Green, Brandhall, Causeway Green and Titford, ages 6 to 67. The first lesson is free."
canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-oldbury
source: src/pages/vibe-coding-and-ai-agents-classes-in-oldbury.html
---
> Vibe coding, AI agents, Python and coding classes online for Oldbury, Langley Green, Brandhall, Causeway Green and Titford, ages 6 to 67. The first lesson is free.

Skip to contentCourse choices

## Courses for Oldbury in vibe coding, agents and thinking

One course per age band. Its first lesson is live and free, and reserving it needs no payment card.

[![Vibe Coding for Kids course thumbnail](/images/vibe-coding-kids.webp)Ages 8 to 12Vibe Coding for KidsChildren get an AI to build a Scratch quiz that remembers answers, then trick it with a lookalike question.See the syllabus](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[![Problem Solving and Computational Thinking for Kids course thumbnail](/images/problem-solving-kids.webp)Ages 7 to 12Problem Solving and Computational Thinking for KidsHow to think: two friends both called Sam live in different streets; what must a message include?See the syllabus](/courses/problem-solving-and-computational-thinking-for-kids)[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Ages 13 to 17Vibe Coding for TeensPython and web vibe coding for teenagers, with the Sandwell street cache as a build.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Masterclass course thumbnail](/images/python-college.webp)Students and adultsPython MasterclassFrom first Python to data structures, caching and agents that know what they do not know.See the syllabus](/courses/python-programming-masterclass-zero-to-advanced-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Sandwell by postcode

## Oldbury's B68 and B69 among Sandwell's postcode districts

The answers in the Oldbury project are postcode districts, so here is how Sandwell's postcodes divide between them.

| Postcode district | Postcodes in Sandwell |
| --- | --- |
| DY4 | 935 |
| B70 | 834 |
| B69 | 729 |
| B71 | 687 |
| B68 | 588 |
| B66 | 563 |
| WS10 | 546 |
| B67 | 523 |
| B65 | 506 |
| B64 | 469 |
| B43 | 373 |
| WS5 | 126 |

A handful of postcodes from a few other districts also fall inside the borough edge and are left out of the table. Oldbury's own suburban areas, as postcodes.io records them, carry B68 and B69 codes, while Tividale and Brades Village, though nearby, resolve to the Rowley Regis built-up area. Schools in Oldbury follow the national curriculum for England, and our lessons fit round the term dates you send.

### The West Midlands and how we teach

The county page is [coding classes in the West Midlands](/coding-classes-in-the-west-midlands) and the regional one is [the West Midlands region](/coding-and-ai-classes-in-west-midlands-region). The reasons thinking always comes before tools are set out in [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

The Oldbury project

## A cache for 3,815 Sandwell streets, and what it gets wrong

An agent answers "which postcode district is this street in?" and remembers its answers. The question is what to remember them by.

The learner pulls every named road inside the Sandwell boundary from OpenStreetMap with one Overpass request and keeps 9,485 road segments. Each segment is given the postcode district of the nearest of Sandwell's 6,906 postcodes, typically about 37 m from its middle. Segments with the same name whose centres lie within 400 m of each other are joined into one street. That leaves 3,815 streets but only 3,450 different names, because 263 names are used by two or more separate streets. High Street appears eight times, in six districts; Park Street also spans six districts and Church Street four.

Now the agent. It receives 20,000 questions, each about a street picked at random, and must answer with a postcode district. Looking the answer up properly always works but costs effort, so the agent keeps a cache: before looking anything up it checks whether it has answered an "equivalent" question already, and if so it reuses that answer. The only thing that changes between our four agents is what counts as equivalent, in other words the cache key. We ran each agent 20 times with different random question streams.

| Cache key | Questions answered from the cache | Answers that were wrong |
| --- | --- | --- |
| Exact street name | 82.8% | 7.90% |
| Name without its road-type word ("Church Road" and "Church Lane" count as one) | 86.7% | 23.39% |
| First word only | 88.9% | 31.15% |
| Exact name plus the ward it is in | 81.2% | 0.11% |

Even the strictest-looking key, the exact name, gets almost one answer in twelve wrong, because a remembered High Street in DY4 is handed out for the High Street in B64. Loosening the key, which is what a "semantic" cache does, buys four to six more points of cache use and roughly triples or quadruples the error. The fix runs the other way. Adding the ward, a piece of context the answer actually depends on, costs 1.6 points of cache use and cuts wrong answers to about one in a thousand. The leftover errors come from the few streets whose ward and district do not line up, and the learner is asked to find them.

### Ages 8 to 11

Play a memory game where the answer card depends on two clues, then play it again with one clue hidden.

### Ages 11 to 15

Build a dictionary cache in Python for a list of streets and count its hits and mistakes.

### Ages 15 and up

Load the real Sandwell data, test four cache keys over 20 runs, and explain every remaining error.

### Sources and honesty notes

Road names © OpenStreetMap contributors (Open Database Licence). Postcode positions contain OS data © Crown copyright and database right 2026 and Royal Mail data © Royal Mail copyright and database right 2026. Joining segments into streets by a 400 m rule is our own simplification, so one long road with a gap can count as two streets. The agent, the questions and every percentage come from our simulation.

Agents that remember

## What a street-name cache teaches about AI agents and vibe coding

Reusing answers is only safe when the key captures everything the answer depends on.

| In the project | When building agents |
| --- | --- |
| Eight separate High Streets | Similar requests can need different answers |
| Exact name: 7.90% wrong | An exact match on the wrong key is still wrong |
| Looser keys: up to 31.15% wrong | A similarity threshold trades mistakes for speed |
| Name plus ward: 0.11% wrong | Put the context the answer depends on into the key |
| 20 runs, narrow ranges | Measure a cache before trusting it |

Semantic caches are used in real AI products to avoid paying for the same model call twice: if a new prompt is close enough to an old one, the old reply is served. The risk is exactly the one Oldbury learners measure. The words "what is the weather in Newport?" can be about more than one Newport in the UK, and a cache keyed on the words alone cannot tell them apart. Ask an AI assistant to vibe code a cache for an agent and it will usually key on the prompt text alone, because that is the simplest version. Our learners know to ask what else the answer depends on. We move on to building AI agents with learners who can write Python unaided, usually sixth-formers and adults, and Copilot Studio agents are taught only in one-to-one lessons. Further reading: [AI agents, the UK student route](/ai-agents-course-for-students-uk) and [understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-uk).

OpenStreetMap, Ordnance Survey, Royal Mail, the Office for National Statistics and postcodes.io have no part in this page beyond publishing the open data we used. Mistakes in the analysis are ours.

The journey

## From memory games to agents with a cache

School years are a rough guide. We place learners from what they show us in the free lesson.

Years 2 to 6

### How to think

Clues, memory and noticing when two things only look the same.

[Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids)[Scratch Coding for Kids](/courses/scratch-programming-complete-course)Years 4 to 8

### Vibe coding for kids

Quiz and memory games made with AI help, then tested with tricky questions.

[Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[Python and AI for Kids](/courses/python-ai-kids-masterclass)Years 9 to 13

### Vibe coding in Python

Dictionaries, caches and data projects, built with an assistant and checked by hand.

[Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[Python for Teens](/courses/python-complete-masterclass-teens)Adults

### Agents in production

Reliable Python, then agents that remember safely and say when they are unsure.

[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)[Generative AI Course](/courses/complete-generative-ai-masterclass-college)Agents and memory

## What is a semantic cache, and when does it give an AI agent the wrong answer?

A semantic cache stores an AI system's earlier answers and reuses one whenever a new request is judged similar enough to an old request, not only when it is identical; this saves time and cost, but it returns a wrong answer whenever two similar-looking requests actually need different replies.

An agent answering 20,000 questions about Sandwell streets gave 7.90% wrong answers when it cached by exact street name and 31.15% when it matched on the first word only.

Keying the cache on the street name plus its ward cut the error to 0.11% while still answering 81.2% of questions from memory.

Oldbury teenagers who have counted a cache's mistakes ask every agent what its memory is keyed on. That question comes from building the cache in code, and it is exactly why learning to code still matters in 2026. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

How it works

## Langley Green, Brandhall and Titford in one online class

Bring a computer, a webcam and an internet connection strong enough for video.

### Learner at the keyboard

The student writes and runs the code while the tutor watches and asks why.

### Level set by the trial

We see how a learner works before we recommend anything.

### First lesson on us

A normal-length lesson, no card needed, and our advice at the end.

### Same-stage classes

Fifteen to twenty learners at one level, from anywhere in the UK.

### Two a week

Tell us your holiday weeks and they come out of the timetable.

### Fixed UK time

The spring and autumn clock changes are handled by our tutors.

Why it runs online

Filling a class with learners at exactly the same stage takes a national pool. One borough cannot always manage it.

Fees

## Oldbury lesson prices

Oldbury is charged our international rates, which cover every country except India.

First class**USD 0**

A full first lesson free, closing with the course we would pick.

Group tuition**USD 100**

About eight lessons a month in a small group.

Private tuition**USD 150**

About eight lessons a month on a one-to-one basis.

Everything is priced in US dollars and nothing in pounds. Billing begins after the trial, once you have chosen a course and a weekly time. Holidays, missed lessons and changing format are all explained on the pricing page.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20vibe%20coding%20or%20AI%20agents%20lesson%20for%20a%20learner%20in%20Oldbury.)Reviews

## Google reviews from West Midlands families and learners around the UK

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

## Get a free Oldbury lesson

Send an age or school year and one thing the learner likes. The trial might be a memory puzzle, a Scratch quiz built with AI, a first Python program, or a first cache to test.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Oldbury one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20vibe%20coding%20or%20AI%20agents%20lesson%20for%20a%20learner%20in%20Oldbury.)

Submitted details are used for placement and follow-up.

FAQ

## Oldbury questions

Semantic caching, the street project, vibe coding, agents and the arrangements.

### What is the population of Oldbury?

ONS figures give the Oldbury built-up area 45,180 usual residents at the 2021 census. Sandwell borough had 341,832.

### Are vibe coding and AI agents classes available in Oldbury?

Yes, live online for ages 6 to 67, covering Oldbury, Langley Green, Brandhall, Causeway Green, Titford and the rest of Sandwell.

### What is a cache key?

The piece of information a cache uses to decide whether a new request matches a stored one. If the key leaves out something the answer depends on, the cache will hand back wrong answers.

### Why did the exact street name still give wrong answers?

Because Sandwell has several separate streets with the same name. The cache remembered one of them and reused its district for the others.

### What did the Oldbury project show?

That loosening a cache key raised its reuse rate only slightly while multiplying wrong answers, and that adding the ward cut errors to about one in a thousand.

### What is vibe coding?

Producing software by describing it to an AI and letting the AI write the code. The learner stays responsible for reading and testing all of it.

### When can a learner start building AI agents?

When they can write Python without support, which is usually sixth form or later. Copilot Studio agents are one-to-one only.

### Can lessons support GCSE and A level?

Yes, in computer science and maths, focused on understanding. We never promise grades.

### What are the fees?

Nothing for the first lesson, then USD 100 a month in a group or USD 150 a month privately.

### Do lessons run in school holidays?

Only if you want them to; send the dates and we pause.

Around Sandwell

## More West Midlands pages

Separate projects run on the pages for [West Bromwich](/vibe-coding-and-ai-agents-classes-in-west-bromwich), [Smethwick](/best-coding-and-ai-classes-in-smethwick) and [Halesowen](/vibe-coding-and-ai-agents-classes-in-halesowen), and the county is on [the West Midlands](/coding-classes-in-the-west-midlands). Everywhere else is reached from the [UK hub](/coding-classes-in-united-kingdom).

Book the free class[Book a priority demo](/book-demo)[WhatsApp us](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20vibe%20coding%20or%20AI%20agents%20lesson%20for%20a%20learner%20in%20Oldbury.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-oldbury*
