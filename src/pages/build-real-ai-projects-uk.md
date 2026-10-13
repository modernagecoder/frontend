---
title: "Build Real AI Projects in the UK | Live AI Course"
description: "Build real AI projects in the UK: data you may legally use, models you train and test, and evaluation with open tools. Teens and adults, first class free."
canonical: https://learn.modernagecoders.com/build-real-ai-projects-uk
source: src/pages/build-real-ai-projects-uk.html
---
> Build real AI projects in the UK: data you may legally use, models you train and test, and evaluation with open tools. Teens and adults, first class free.

In short

In the UK, copyright law includes an exception allowing copies of lawfully accessed material to be made for text and data mining, but only for non-commercial research, and contract terms that forbid such copying are unenforceable, according to the Intellectual Property Office. Public sector information under the Open Government Licence v3.0 may be used commercially and non-commercially with attribution, though the licence excludes personal data, logos and third party rights. Evaluation matters as much as data: the UK AI Security Institute co-develops Inspect, an open-source framework for large language model evaluations with over 200 pre-built evaluations. Modern Age Coders teaches UK teenagers and adults to build real AI projects live and online: choosing lawful data, training and fine-tuning models in Python, grounding assistants in licensed documents, and evaluating results. This is general information, not legal advice. Your first class costs nothing; after that, group places are USD 100 a month and one-to-one teaching USD 150 a month.

Start here

## Three ways into building AI

Machine learning for teenagers, generative AI engineering for adults, and a project sprint. Each card opens the full syllabus.

[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)  RAP / 01 AI and Machine Learning for Teens Python to real models, for ages 13 to 18, with school maths enough to start. Open the syllabus →](/courses/ai-ml-masterclass-teens)[![Generative AI Course course thumbnail](/images/generative-ai-college.webp)  RAP / 02 Generative AI: LLMs, RAG and Agents Retrieval, fine-tuning and evaluation for adults, built in Python. Open the syllabus →](/courses/complete-generative-ai-masterclass-college)[![Hackathon for Teens course thumbnail](/images/hackathon-teens.webp)  RAP / 03 Hackathon Prep for Teens Scoping, building and presenting an AI project against a clock. Open the syllabus →](/courses/hackathon-prep-for-teens-coding-ai-build-innovate-win-course)

Data you may use

## The first question: where did the data come from?

From the Intellectual Property Office's guidance on exceptions to copyright on gov.uk. Training data is where most student AI projects quietly go wrong.

The IPO describes text and data mining as "the use of automated analytical techniques to analyse text and data for patterns, trends and other useful information", and notes that it usually requires copying the work being analysed. The exception lets researchers make those copies when they already have lawful access to the work, that is, the right to read it. Two limits matter for anyone building AI: "This exception only permits the making of copies for the purpose of text and data mining for non-commercial research", and researchers still have to pay for access where access costs money.

| Data source | The question to ask | Usual answer for a learner |
| --- | --- | --- |
| Public sector data under the Open Government Licence | Have I credited the source as the licence asks? | Usable, including commercially, with attribution |
| Texts or images you can lawfully read | Is my project non-commercial research? | Possibly within the exception; not for a product |
| Datasets published with their own licence | What does that licence allow? | Read it; many allow research, some forbid commercial use |
| Data you create yourself | Does it include anyone else's personal data? | Usually the cleanest choice |
| Social media posts and profiles | Is this personal data about real people? | Avoid for learning projects |

### A contract cannot switch it off

The IPO adds that "Contract terms that stop researchers making copies to carry out text and data mining will be unenforceable." Publishers may still use reasonable measures to protect their networks.

That protects research. It does not turn a research project into permission to build a commercial product on the same material.

### The law is still being discussed

The Data (Use and Access) Act 2025 included "provisions requiring the government to prepare a progress update and a report on copyright works and artificial intelligence systems", which came into force in August 2025.

Anyone planning to commercialise a model trained on other people's work should take proper legal advice. This page, and the course, give general information only.

Sources, read 21 September 2026: [Intellectual Property Office, Exceptions to copyright](https://www.gov.uk/guidance/exceptions-to-copyright); [Data Use and Access Act 2025: plans for commencement](https://www.gov.uk/guidance/data-use-and-access-act-2025-plans-for-commencement). Not legal advice.

Open data

## The Open Government Licence: data built to be reused

Much UK public sector information is published under the Open Government Licence v3.0, maintained by The National Archives. It is the most generous licence a learner is likely to meet.

|   | As the licence states |
| --- | --- |
| The spirit | "You are encouraged to use and re-use the Information that is available under this licence freely and flexibly, with only a few conditions." |
| The grant | A worldwide, royalty-free, perpetual, non-exclusive licence |
| Commercial use | You may "exploit the Information commercially and non-commercially", including in your own product or application |
| The main condition | Acknowledge the source; the default statement is "Contains public sector information licensed under the Open Government Licence v3.0." |
| Not covered | Personal data, logos and crests, third party rights, other intellectual property such as trade marks |
| No endorsement | You may not suggest official status or that the provider endorses your use |

### Why it suits AI projects

Because commercial use is allowed, a model or app trained on OGL data can keep going after the course, as long as every use keeps the attribution.

Students learn to put the attribution statement in the project README and the app itself from the first commit.

### What to check first

Not everything on a government website is OGL. Each dataset states its own licence, and some include third party material the government cannot license.

And the licence never covers personal data, which brings in data protection law instead.

Source, read 21 September 2026: [The National Archives, Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).

Proving it works

## The last question: how do you know it works?

A demo shows a model working once. An evaluation shows how often it works, on cases chosen before the results were known.

The UK AI Security Institute, with Meridian Labs, develops Inspect, described in its documentation as "An open-source framework for large language model evaluations". It is built from "datasets, agents, tools, and scorers", ships "A collection of over 200 pre-built evaluations ready to run on any model", and can run untrusted model code in a sandbox. It is used for serious frontier model testing, and it is free for a student to install and learn.

| Part | What it is | In a student project |
| --- | --- | --- |
| Dataset | The test cases, with the answers you expect | Thirty to a hundred real examples, written before looking at results |
| Solver or agent | How the model is asked, with any tools | The prompt, retrieval step or fine-tuned model being tested |
| Scorer | How each answer is marked | Exact match, a rubric, or a second model with its own checks |
| Report | The score, and where it fails | A pass rate, the failures listed, and what changed between runs |

### Classical machine learning too

For models trained from scratch, the same idea appears as a held-out test set: data the model never saw in training, used only once to measure it.

Students learn why accuracy alone can mislead, and when precision, recall or a confusion matrix tell the real story.

### Honest numbers

A project that reports 60% on a fair test is better work than one that reports 99% on the data it was trained on. The course rewards the first.

How models learn and are assured is also covered on [learn to train AI, not just prompt it](/learn-to-train-ai-not-just-prompt-it-uk).

Source, read 21 September 2026: [Inspect documentation](https://inspect.aisi.org.uk/), UK AI Security Institute and Meridian Labs. We are not connected with either organisation.

Project ideas

## Projects that answer both questions

Each one names its data source and its evaluation before any code is written.

| Project | Data | How it is evaluated |
| --- | --- | --- |
| A guidance assistant | Public guidance pages published under the Open Government Licence, credited | Fifty questions with known answers from the pages, scored for accuracy and citation |
| A handwritten digit or leaf classifier | A public benchmark dataset, or photos the student takes | A held-out test set and a confusion matrix |
| A local air quality forecaster | Public environmental monitoring data under an open licence | Error on months the model never saw |
| A study-notes quiz generator | The student's own notes | A rubric marking whether each question is answerable from the notes |
| A text classifier for research | Texts the student can lawfully read, for a non-commercial project | Precision and recall on a labelled sample |

### Written before coding

Each project starts with a one-page plan: the data, its licence, the test set and what counts as success.

### Kept in the open

Code and results live in the student's own repository, with attribution statements where licences require them.

### Presented honestly

Every project ends with a short write-up of what the model gets wrong, not only what it gets right.

Younger learners start gently: our [AI classes for kids](/ai-classes-for-kids-uk) build the ideas behind this. Students who want an audience can take a finished project to [a student hackathon](/student-hackathons-uk) or the [UK Olympiad in Artificial Intelligence](/uk-olympiad-in-artificial-intelligence-preparation). We never work on coursework, NEA or anything submitted for assessment.

Stages

## Four stages to a real AI project

Where you begin depends on your Python and maths, not your age.

| Stage | What should be true |
| --- | --- |
| 1. Data first | You can find a dataset, read its licence and describe what is in it |
| 2. A first model | You train a simple model in Python and understand every line |
| 3. Grounded or fine-tuned | You build a retrieval assistant or fine-tune a model on lawful data |
| 4. Measured | You evaluate on a fair test set, report the failures and improve the score honestly |

### Stage one is not optional

A brilliant model on data you may not use is not a finished project.

The wider sequence of subjects is on the [coding roadmap](/coding-roadmap).

### Stage four is the proof

The evaluation is what turns a demo into evidence.

It is also what employers and competition judges look for first.

The catalogue

## Nine courses for building AI

From first models to generative AI engineering, and the data skills underneath.

I

### Machine learning

By age

RAP / ML / 01

#### Python and AI for Kids

The first step, for younger learners.

[Open the syllabus](/courses/python-ai-kids-masterclass)

RAP / ML / 02

#### AI and Machine Learning for Teens

Python to real models, ages 13 to 18.

[Open the syllabus](/courses/ai-ml-masterclass-teens)

RAP / ML / 03

#### AI and Machine Learning for Adults

Models, evaluation and deployment.

[Open the syllabus](/courses/ai-ml-masterclass-complete-college)II

### Generative AI

Engineering, not prompting

RAP / GEN / 01

#### Generative AI: LLMs, RAG and Agents

Retrieval, fine-tuning and evaluation.

[Open the syllabus](/courses/complete-generative-ai-masterclass-college)

RAP / GEN / 02

#### Artificial Intelligence Masterclass

The wider field, from search to neural networks.

[Open the syllabus](/courses/artificial-intelligence-complete-masterclass-college)

RAP / GEN / 03

#### AI Projects for Teens

Python, web and AI projects, reviewed line by line.

[Open the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)III

### Data and delivery

Under and around the model

RAP / DAT / 01

#### Data Science for Teens

Cleaning and exploring the data first.

[Open the syllabus](/courses/data-science-course-for-teens-python-data)

RAP / DAT / 02

#### Data Science for Adults

Python, SQL and machine learning.

[Open the syllabus](/courses/data-science-complete-masterclass-college)

RAP / DAT / 03

#### Hackathon Prep for Teens

Building and presenting under time pressure.

[Open the syllabus](/courses/hackathon-prep-for-teens-coding-ai-build-innovate-win-course)

How lessons run

## Live lessons around a real project

Classes come from India, which never changes its clocks. Against the UK that means a four and a half hour gap in summer and five and a half in winter, so weekday evenings and weekends in UK time are easy to schedule.

After school or work

A weekday evening session.

Saturday

A longer block for training runs.

Sunday

For evaluation and write-ups.

### A free first class

We check your Python and maths and agree a first project with you.

### Small groups

Between five and ten learners, grouped by ability.

### One to one

For a competition deadline or a particular idea.

### Licence checked

No dataset is used until its licence has been read and recorded.

### Evaluation built in

A test set is written before the model is judged.

### Your own accounts

Code, data notes and results stay in your own repository.

Student work

## Projects our students have built

Four projects completed by our students. The rest, across every age group, are in [student labs](/student-labs).

![NutriLife AI nutrition coach project screenshot](/images/projects/nutrilife.webp)

AI and ML

#### NutriLife

An AI nutrition coach that reads what you eat and works you toward a target.

by Bhavya · [Open it](https://nutrilife-bhavya.lovable.app)

![Misti AI chatbot for maths and coding screenshot](/images/projects/misti.webp)

AI and ML

#### Misti

A chatbot that answers mathematics and programming questions, built and deployed by a student.

by Harshit · [Open it](https://misti.modernagecoders.com)

![GuardianX AI internet safety assistant screenshot](/images/projects/guardianx.webp)

AI and ML

#### GuardianX

An assistant that helps a young person recognise unsafe situations online.

by Vivaan · [Open it](https://guardianx-cybersaver.lovable.app)

![SkyCast weather forecast application screenshot](/images/projects/skycast.webp)

Web app

#### SkyCast

A weather forecasting site with live conditions for any location.

by Krish

Fees

## Fees for AI projects

Billed monthly in US dollars, at the same rate for every country outside India, with no joining charge and no commitment past the current month. Most tools used are free; any paid AI service is your own choice and your own account.

Free first class

USD 0

no card required

- A look at your Python and maths
- A first project agreed with you
- Nothing to pay that day

Book it

Group batch

USD 100

a month, billed in US dollars

- Fifteen to twenty learners at one level
- The same teacher each week
- Data and evaluation reviewed
- Stop at the end of any month

Start here

One to one

USD 150

a month, billed in US dollars

- One teacher, one learner
- Your own project at the centre
- Suits a competition deadline

Enquire

What families say

## Rated 4.9 across 547 Google reviews

Reviews on Google from our students and their families, shown as written.

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

Questions about AI projects

## What UK learners ask about building AI

### Can I train an AI model on anything I find online?

Not safely. The UK text and data mining exception covers copies made for non-commercial research from material you can lawfully access. Commercial projects need data licensed for that use. This is general information, not legal advice.

### What is the Open Government Licence?

A licence from The National Archives for public sector information, allowing commercial and non-commercial reuse with attribution. It excludes personal data, logos and third party rights.

### Can a website stop me text and data mining for research?

The IPO says contract terms that stop researchers making copies to carry out text and data mining will be unenforceable, though publishers may use reasonable measures to protect their networks.

### What is Inspect?

An open-source framework for large language model evaluations, developed by the UK AI Security Institute and Meridian Labs, with over 200 pre-built evaluations. We use tools like it to teach evaluation; we are not connected with either organisation.

### Do I need to be good at maths?

School maths is enough to start the teen course. The maths grows with the projects, and it is taught as needed.

### Which language is used?

Python throughout, with standard machine learning and data libraries.

### Can younger children build AI projects?

Younger learners start with Python and AI for Kids, which builds the ideas step by step before full projects.

### Do you help with school coursework?

No. We never work on coursework, NEA or anything submitted for assessment. Projects are separate and the student's own.

### How much are lessons?

Nothing for the first class. Then a group place is USD 100 a month and one-to-one teaching USD 150 a month, and nothing is charged for joining.

### What time of day are classes?

Usually a weekday evening, or a longer weekend block for training runs, set in UK time at the first class. India is four and a half hours ahead of British Summer Time and five and a half ahead in winter.

Elsewhere on this site

## Related pages

Training, data and competitions around AI.

### [Learn to train AI, not just prompt it](/learn-to-train-ai-not-just-prompt-it-uk)

How models are measured and assured.

### [Data science course](/data-science-course-uk)

The data skills underneath every model.

### [UK Olympiad in Artificial Intelligence](/uk-olympiad-in-artificial-intelligence-preparation)

A competition for AI projects.

### [AI classes for kids](/ai-classes-for-kids-uk)

Where younger learners start.

### [AI agents for students](/ai-agents-course-for-students-uk)

Agents as portfolio evidence.

### [Coding classes in the UK](/coding-classes-in-united-kingdom)

All our UK pages.

Start here

## Bring an AI idea to a free class

Leave a number and we will call at a UK time that suits you. Bring an idea; the class checks your level and turns it into a plan with a data source and a test.

Reading first? Every [course page](/courses) lists its syllabus, [how we teach](/how-we-teach) sets out the approach, and [student labs](/student-labs) gathers finished projects.

[WhatsApp us](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20first%20class%20on%20building%20real%20AI%20projects%20in%20the%20UK.) · [+91 91233 66161](tel:+919123366161) · [connect@modernagecoders.com](mailto:connect@modernagecoders.com)

WhatsApp from a UK number is usually the fastest way to reach us. We are based in India, so our number starts +91; there is no UK office.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/build-real-ai-projects-uk*
