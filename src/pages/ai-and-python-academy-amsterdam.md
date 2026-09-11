---
title: "AI and Python Academy, Amsterdam | Build Real AI"
description: "Amsterdam publishes 73 of its algorithms in a public register, with their data, risks and human checks. Learn to build AI that way, live online for ages 6 to 67."
canonical: https://learn.modernagecoders.com/ai-and-python-academy-amsterdam
source: src/pages/ai-and-python-academy-amsterdam.html
---
> Modern Age Coders teaches Amsterdam learners aged six to sixty-seven a live online AI and Python track: Python typed by hand, then real data, then models whose error is measured, then agents whose mistakes show. Every project finishes with a short public write-up in the shape the City of Amsterdam uses for its own 73 entries in the national Algoritmeregister: purpose, data, human involvement, risks and how to object. Classes are in English, in groups of five to ten or one to one. The first lesson is free; after it, a group place costs USD 100 a month and one-to-one tuition USD 150.

[Home](/) / [Courses](/courses) / [AI and Python Academy, Netherlands](/ai-and-python-academy-netherlands) / Amsterdam

Amsterdam · Live online · Ages 6 to 67

# AI and Python classes in Amsterdam, built to be explained

The City of Amsterdam uses algorithms to check parked cars, count crowds, spot households slipping into debt and help its own staff write. It also writes each of them down in public. In the Dutch government's Algoritmeregister, Gemeente Amsterdam has 73 entries, and each one states what the system is for, what data it uses, where a person steps in and what can go wrong. That is an unusual thing for a city to publish, and it is exactly the habit most AI courses never teach. A model that works is half a project. The other half is a plain account of what it does, how well, who checks it and how someone it gets wrong can put that right. This page teaches both halves, from a child's first program to an adult's working agent, live online for Amsterdam learners.

At a glance: Who: Amsterdam learners from 6 to 67; What: Python, data, models, agents; Habit: Every project ends with a public write-up; How: Live video with one teacher; Group size: 5 to 10, or one to one; When: Dutch afternoons, evenings, weekends; Language: English, with Dutch school words kept; Start: A free first lesson. Rated 4.9 across 547 Google reviews.

## Three courses for three ages in Amsterdam

One for a child meeting AI for the first time, one for a teenager ready to train real models, one for the adult who uses or builds language-model tools at work. Each card opens the course itself, with syllabus and timetable.

- [AI Literacy for Kids](/courses/ai-literacy-for-kids-course): What a chatbot is, why it can be confidently wrong, and the questions a child should ask before believing one: the same risks the city names for its own staff assistant, in words a ten-year-old uses.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens): Python first, then statistics, then models the teenager trains and tests, each one finished with a written account of its data, its error and who it could treat unfairly.
- [Generative AI: LLMs, RAG and Agents](/courses/complete-generative-ai-masterclass-college): How language models work, how to ground them in documents you control, and how to build an assistant whose risks are written down before anyone relies on it.

## Seventy-three algorithms, written down in public

The Algoritmeregister is where Dutch government organisations publish information about the algorithms they use in their work. It is the most useful teaching document about applied AI in the country, and almost nobody outside government reads it.

The register is the responsibility of the Ministry of the Interior, working with the **Autoriteit Persoonsgegevens** as the algorithm supervisor, and its first version went live in **December 2022**. Its stated purpose is to make algorithms findable, to explain them better and to make their use and impact understandable. On 11 September 2026 it held **1,553** algorithm descriptions. Publishing is not yet compulsory for government bodies; the register says plainly that the obligation is coming.

The register focuses on **impactvolle algoritmes**, those with real effects on people, including high-risk AI systems, and lists everything else as overige algoritmes. Each entry carries a status: in use, in development or out of use.

**Gemeente Amsterdam** has 73 entries. They range from the scan cars that enforce parking to object recognition on bridges and quays, crowd counting, systems that decide income brackets for poverty support, a summariser for legal objection advice and a generative AI assistant for municipal staff. The city once ran a register of its own; its old address now forwards to the city's page in the national one.

For a student, the value is the format. Every entry answers the same questions under the same headings, general information, responsible use and how it works, and each question is one a student project should answer too. Most coursework never asks them.

**Four Gemeente Amsterdam entries in the Algoritmeregister, as read on 11 September 2026**

| Entry | What it does | Category and status | Where a person steps in |
|---|---|---|---|
| Fiscaal handhaven: Parkeercontrole | Scan cars read number plates and check parking rights in the Nationaal Parkeerregister | Impactvol, in use | Controllers review the images for special situations before a fine |
| Public Eye | Counts pedestrians in camera images to manage crowding at Arena Boulevard, the Marineterrein and the Dam | Impactvol, out of use | Staff check whether the algorithm rightly recognises people as people |
| Vroegsignalering gemeente Amsterdam | Links creditors' payment-arrears notifications to poverty-support data so help arrives early | Impactvol, in use | The matching is automated, but a person has to start it |
| ChatAmsterdam | A generative AI assistant for writing, summarising, structuring and translating | Overige, in use | The user decides whether an answer is used, changed or ignored |

Sources: [Algoritmeregister, over het register](https://algoritmes.overheid.nl/nl/footer/over) (responsibility, supervisor, December 2022, voluntary publication); [register home page](https://algoritmes.overheid.nl/nl) (1,553 descriptions); [Gemeente Amsterdam in the register](https://algoritmes.overheid.nl/nl/organisatie/gemeente-amsterdam) (73 entries, categories, statuses). Read 11 September 2026. The register is in Dutch; entry names are quoted as published. We have no connection with the City of Amsterdam or the register.

## What a parking scanner, a crowd counter, a debt alert and a chatbot teach a programmer

Each of these entries answers the questions a good project write-up should answer. Read side by side, they are a short course in how AI systems fail and how responsible builders plan for it.

### Parkeercontrole: plan for the error

Amsterdam checks more than 190,000 official parking spaces with scan cars. A camera photographs the number plate, an image-recognition algorithm reads it, and the Nationaal Parkeerregister says whether parking was paid for or a permit exists. The entry names its main risk directly: a misread plate, and a fine for someone who did nothing wrong. Human controllers review the images for special situations, and anyone fined can object in writing within 6 weeks on a website that shows the photos. The lesson: every model makes mistakes, so the correction route is part of the design.

### Public Eye: keep only what you need

The system counted how many people appeared in camera images and sent only that number to a dashboard for municipal staff, so crowding could be managed with information boards or one-way routes. The entry says the video images are deleted as soon as the people have been counted, and that only a very small number are kept, encrypted, for training. Staff checked whether the algorithm recognised people as people. It is now marked out of use. The lesson: collect the least data that answers the question, and say what happens to the rest.

### Vroegsignalering: automate, but let a person start it

Health insurers, housing corporations, energy suppliers, water companies and some government bodies notify the city when a customer falls behind on payments, under the Wet gemeentelijke schuldhulpverlening. In a system called RIS Matching those notifications are linked to the poverty department's data, automatically, but a person has to start each linking run. The city then tries to contact the resident within 14 days and makes a first analysis within 28. The lesson: automation that affects people's lives works best with a deliberate human step and a promise about what happens next.

**ChatAmsterdam** is the entry closest to what a student uses every day. It is a generative AI assistant for municipal staff, built on GPT 5.5 from OpenAI and **Mistral Large 3** from Mistral AI, general language models that are not trained or adapted on the city's internal data. Conversations are kept for 30 days and then deleted.

What makes the entry worth reading is its list of risks: using the assistant as a search engine, relying on information that is wrong or out of date, and typing in confidential information or personal data. The measures include security standards, a warning when a document that may contain personal data is uploaded, and periodic evaluation. The final judgement stays with the user, who decides whether an answer is used, changed or ignored.

That list of risks is, almost word for word, what a teenager needs to understand before handing homework to a chatbot, and what an adult needs before pasting a client file into one. A student who can write the same paragraph about their own tool understands it.

The entries also show that a write-up is never finished. Every entry carries a last-modified date: 13 July 2026 for parking control, 25 August 2026 for ChatAmsterdam, 2 July 2026 for Public Eye, which changed status. Models are replaced, systems are switched off, risks are found. A write-up that is not kept current describes a system that no longer exists.

Sources: Algoritmeregister entries [Fiscaal handhaven: Parkeercontrole](https://algoritmes.overheid.nl/nl/algoritme/78451490), [Public Eye](https://algoritmes.overheid.nl/nl/algoritme/38748497), [Vroegsignalering gemeente Amsterdam](https://algoritmes.overheid.nl/nl/algoritme/66453169) and [ChatAmsterdam](https://algoritmes.overheid.nl/nl/algoritme/23189993), each read on 11 September 2026. The lessons drawn from them are ours, not the city's.

## Every project on our ladder ends with an entry like these

The register's questions work at every level, from a child's guessing game to an adult's document assistant. Learners answer them in the README of their own repository.

**The register's questions, asked of a student project**

| Question the register asks | What the student writes | Where it starts on the ladder |
|---|---|---|
| What is it for? | One sentence on the problem, and who has it | Rung 1, with a first program |
| What data does it use? | Where the data came from, what was removed and why | Rung 2, the data rung |
| How does it work? | The method in plain words, and how well it performs, with the error in a real unit | Rung 3, models |
| Where does a person step in? | Which decisions the program makes and which it hands back | Rung 4, agents |
| What can go wrong? | The known failures, who they would affect, and what is done about them | Every rung |
| How can someone object? | How a wrong result is reported and corrected | Rungs 4 and 5 |

For a child the questions are simple and still revealing. A program that guesses whether a picture shows a cat or a dog can be wrong; who would mind, and how would they tell you? Children who answer that at nine are not easily impressed by a chatbot at fourteen.

For a teenager at an Amsterdam havo, vwo or international school, the write-up becomes the part of a portfolio a university reads first. A model with an honest paragraph about its data and its failures says more than a model with a higher score and no explanation.

For adults the register is not an exercise. Many people in Amsterdam work for organisations that already publish in it, or will have to, and the questions arrive at their desk. Knowing how to answer them, and how to build systems that can be answered for, is a working skill.

The general coding page, [coding classes in Amsterdam](/coding-classes-in-amsterdam), covers the city's districts and schools, and [Amstelveen](/coding-classes-in-amstelveen) has its own page. The [national academy page](/ai-and-python-academy-netherlands) covers the country's picture. This page covers the AI track, and the habit that finishes every project on it.

## From a first program to an agent with its own write-up

Each rung depends on the one below it. A learner who skips the data rung cannot say what their model learned from, and one who skips the models rung cannot say how often their agent is wrong.

**The five rungs for an Amsterdam learner, and what the write-up adds at each**

| Rung | Usually | The learner builds, then writes |
|---|---|---|
| 1. Python by hand | Groep 6 to 8, or any adult beginner | Small programs from an empty file; a first sentence on what each is for |
| 2. Data | Brugklas to the third year | Loads, cleans and plots a real dataset; records where it came from and what was dropped |
| 3. Models | Havo 4 to vwo 6, students, adults | Trains and tests a model; states its error and who it serves worst |
| 4. Agents | Upper school and beyond | An agent that plans and uses tools; names the decisions it may not take alone |
| 5. Publishing | At every stage | A public repository with the full write-up, kept up to date |

### Why the write-up runs through every rung

Writing about a program is a different skill from writing the program, and it improves the program. A learner asked where a person should step in finds the cases where the code should stop and ask. One asked what data was dropped finds the rows that would have skewed the result.
The subject-by-subject order we teach in is on the [coding roadmap](/coding-roadmap).

### Where it fits in the Amsterdam school year

Rung 1 suits the last years of the basisschool, kept light around the doorstroomtoets. The profielkeuze year is a good moment to test rung 2. International-school pupils following IB or IGCSE timetables fit the same rungs at the same ages.
Adults usually start at rung 1 or 2 and move at their own pace, often one to one around working hours.

## Eleven live courses for Amsterdam learners, placed by what they can do

Three stages of life, three curricula. Every card leads to the full course with its own schedule and fee, and the free first lesson places the learner.

### Children, groep 3 to 8

Real code early, and a clear idea of what AI can and cannot do

- [Python and AI for Kids](/courses/python-ai-kids-masterclass): Typed Python for children of nine to twelve: pictures drawn in code, simple games and a small program that learns from examples and can be caught out.
- [AI Literacy for Kids](/courses/ai-literacy-for-kids-course): How AI tools produce answers, when not to trust them, and what personal information never goes into a chat box.
- [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev): A child asks an AI tool for a game, then finds and fixes what it got wrong. The fixing teaches more than the asking.

### Teenagers, havo, vwo and international schools

From Python to trained models, each with an honest account of itself

- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens): The main teenage track: Python, statistics, classical models, neural networks, images and text, each project documented and defended.
- [Data Science for Teens](/courses/data-science-course-for-teens-python-data): Where every model begins: reading, cleaning, joining and plotting real data, and recording what was removed and why.
- [Python for Teens](/courses/python-complete-masterclass-teens): Two years from a blank file to well-built programs, the right start for a teenager who has not yet written real code.
- [AI Tools for Teens](/courses/teens-ai-tools-mastery-course): Using AI tools well for projects and study, including what to check, what to keep private and when a tool is the wrong choice.

### Students and working adults

Language models, machine learning and tools that hold up at work

- [Generative AI: LLMs, RAG and Agents](/courses/complete-generative-ai-masterclass-college): How large language models are built and grounded, and how to wrap them in agents with limits, logs and a written account of their risks.
- [AI and Machine Learning Masterclass](/courses/ai-ml-masterclass-complete-college): The complete machine learning route at adult pace, from classical methods to deep learning, with evaluation that stands up to questions.
- [Data and AI Analytics for Non-Programmers](/courses/data-and-ai-analytics-for-non-programmers-course): Spreadsheets, dashboards and AI assistants for people who do not code, with clear rules on what data may go where.
- [Python and AI Automation](/courses/python-ai-automation-masterclass-college): Scripts that take over the repetitive part of a job, with every automated step logged and every decision point marked.

## An Amsterdam timetable, taught from India

Amsterdam moves between CET and CEST each year and India stays on one time, so the teacher is four and a half hours ahead in winter and three and a half in summer. Late afternoons and weekends work easily, weekday evenings are arranged case by case, and the regular slot is agreed on the free lesson rather than promised here.

- **After school** Amsterdam time, late afternoon. Best for children and younger teenagers; evening for the teacher.
- **Evening** Amsterdam time, after dinner, by arrangement. For older teenagers, students and adults after work.
- **Weekend** Saturday or Sunday, Amsterdam time. The simplest choice for working adults and families with full weekdays.

- **The free first lesson** A proper lesson on a real problem. Watching how the learner works tells the teacher where to start, more reliably than any form.
- **Groups of five to ten** Grouped by ability across many countries, so an advanced Amsterdam learner is stretched and a beginner has company at their level.
- **One to one if preferred** For irregular working hours, a narrow goal, an exam year, or the Copilot Studio courses, which are only taught individually.
- **Both screens shared** The teacher sees the learner's code as it is written, so misunderstandings are fixed while they are small.
- **English, with Dutch terms** Lessons are in English. Groep, havo, vwo and profielkeuze keep their Dutch names, as Amsterdam families use them.
- **A repository from day one** Each lesson's work goes into the learner's own GitHub repository, with its write-up beside it.

## What it costs

Monthly, in US dollars, at the same two rates as every country outside India. No Amsterdam surcharge, no registration fee, no yearly contract. Copilot Studio courses are one to one only and use that rate.

- Free first class: USD 0. A taught lesson, not a pitch. Sets the starting rung. No payment details asked.
- Group batch: USD 100 a month. Five to ten learners at one level. The same live teacher throughout. Weekly review of built work. Certificate at the end.
- One to one: USD 150 a month. A teacher for one learner. Pace and content fitted to the goal. The only format for Copilot Studio.

## What Amsterdam families and adults ask before the first lesson

### What is the Algoritmeregister?

A public register where Dutch government organisations describe the algorithms they use: what each is for, what data it uses, where a person is involved and what the risks are. The Ministry of the Interior is responsible for it, it went live in December 2022, and on 11 September 2026 it held 1,553 descriptions, 73 of them from Gemeente Amsterdam.

### Why does an AI course talk about a government register?

Because its entries are the best public examples of the part of AI work most courses skip: explaining a system, naming its failures and planning for them. Our students write the same kind of account for every project.

### Is my child too young for AI?

Not for the right version of it. From about groep 5 children can learn what AI tools do, why they are sometimes wrong, and what not to type into them. Typed Python starts from about groep 6 to 8, and models come later, once code and data are familiar.

### We are at an international school. Does the ladder still fit?

Yes. The rungs follow what a learner can do rather than a national curriculum, and lessons are in English. A pupil following IB or IGCSE joins at the rung the free lesson shows.

### I use AI tools at work. What should I learn first?

Usually Python automation or data analytics, depending on your job, together with the habit this page describes: knowing what a tool does with your data, where it can be wrong, and who checks it. Adults often study one to one.

### Do students build chatbots like ChatAmsterdam?

Older students build smaller assistants on top of language models in the generative AI course, and write down their risks the way the ChatAmsterdam entry does: wrong or outdated answers, use as a search engine, and personal data typed in.

### Is there a connection with the City of Amsterdam?

No. We quote the city's published register entries because they are public and useful. We have no relationship with the city, the register or any school in Amsterdam.

### What does it cost?

USD 100 a month for a group place, USD 150 a month for one-to-one lessons, billed in US dollars. There is no joining fee or annual contract, and the first lesson is free.

### Where are the teachers?

In India, teaching live over video. The gap with Amsterdam is three and a half hours in summer and four and a half in winter, which is why late afternoons and weekends are the easiest slots.

### What happens after I send the form?

We call at a Dutch hour to arrange the free lesson. Nothing is charged and no place is booked until the family has seen that lesson and decided.

## More pages for Amsterdam and the Netherlands

- [Coding classes in Amsterdam](/coding-classes-in-amsterdam): The city page for general programming, with its districts and schools.
- [Coding classes in Amstelveen](/coding-classes-in-amstelveen): The municipality on Amsterdam's southern edge, with a page of its own.
- [Coding classes in Noord-Holland](/coding-classes-in-noord-holland): Every municipality in the province around the capital.
- [AI and Python Academy, Netherlands](/ai-and-python-academy-netherlands): The national academy page, with the school figures and the country's AI investment.
- [AI and Python Academy, Groningen](/ai-and-python-academy-groningen): The academy page built around a university AI degree.
- [Learn to Build AI](/learn-to-build-ai): Why we teach building AI systems rather than only using them.

## Contact

Book the free first class at [https://learn.modernagecoders.com/ai-and-python-academy-amsterdam](https://learn.modernagecoders.com/ai-and-python-academy-amsterdam#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email contact@modernagecoders.com.
