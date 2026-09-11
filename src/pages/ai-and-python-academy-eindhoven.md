---
title: "AI and Python Academy, Eindhoven | Build Real AI"
description: "Eindhoven builds AI that has to move: soccer robots, drones and cars. Learn the Python, data and models behind it, live online for ages 6 to 67. First lesson free."
canonical: https://learn.modernagecoders.com/ai-and-python-academy-eindhoven
source: src/pages/ai-and-python-academy-eindhoven.html
---
> Modern Age Coders runs a live online AI and Python track for learners in Eindhoven aged six to sixty-seven: Python typed by hand, then data, then models with a measured error, then agents. Because Eindhoven's AI is so often AI in machines, the track keeps three real-world problems in view throughout: training data that has to be made, systems that drift and must recalibrate, and the gap between a simulation and reality. Teaching is in English, in groups of five to ten or one to one. The first lesson is free; after that a group place is USD 100 a month and one-to-one tuition USD 150.

[Home](/) / [Courses](/courses) / [AI and Python Academy, Netherlands](/ai-and-python-academy-netherlands) / Eindhoven

Eindhoven · Live online · Ages 6 to 67

# AI and Python classes in Eindhoven, for AI that has to move

Most AI that people meet lives on a screen: a chatbot, a recommendation, a filter. Eindhoven builds the other kind. Its university's AI institute studies data and algorithms inside machines, robots, autonomous cars and medical equipment, and its student teams build autonomous drones, race cars and the soccer robots that have won eight world titles in RoboCup's Middle Size League. AI in a machine meets problems a chatbot never does. Its training images may have to be manufactured. Its sensors drift after a collision in the middle of a match. And the simulator it learned in is never quite the pitch it plays on. This page teaches the Python, data and models underneath that kind of AI, with those problems in view from the first rung, live online for learners in Eindhoven.

At a glance: Learners: Eindhoven, ages 6 to 67; Focus: Python, vision, models, agents; Angle: AI that works outside the screen; Format: Live video, one teacher, no recordings; Group: 5 to 10 at one level, or one to one; Times: Dutch afternoons, evenings and weekends; Language: English; First class: Free, no card. Rated 4.9 across 547 Google reviews.

## Three courses for an Eindhoven learner heading towards AI in machines

One for a child who wants to make things move on screen, one for a teenager ready to train an image model, one for the student or engineer who needs deep learning done properly. Each card opens its own syllabus and timetable.

- [Python and AI for Kids](/courses/python-ai-kids-masterclass): Python's turtle module is the gentlest robot there is: a child types commands, a turtle moves, and a mistake shows up at once as a wrong line on the screen.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens): From Python to neural networks and image models, with a teenager testing what they trained on photos taken in different light, the same test a robot faces.
- [AI and Machine Learning Masterclass](/courses/ai-ml-masterclass-complete-college): Deep learning, careful evaluation and deployment for students and engineers whose models will run on hardware, not only in a notebook.

## Eindhoven builds AI that has to move

The university's own descriptions make the local emphasis plain. Here AI is mostly about systems that sense, decide and act in the physical world.

The **Eindhoven Artificial Intelligence Systems Institute**, **EAISI**, is the central hub for AI research at Eindhoven University of Technology. By its own description it focuses on the use of data and algorithms in machines, such as robots, autonomous cars and medical equipment, and on the interaction between people and systems, including trustworthy and transparent methods. It counts **300 academic staff and 600 PhD candidates**, organises its work in three domains, data and algorithms, engineering systems, and humans and ethics, and applies it to health, mobility and industry.

Its teaching counterpart is the master in **Artificial Intelligence and Engineering Systems**, a two-year, 120 EC programme in English run jointly by seven departments and more than 40 research groups, with tracks from high-tech systems and robotics to mobility, healthcare and smart manufacturing.

Then there are the student teams, which TU/e lists on its own site: 21 of them at the time of reading. **Serpentine** works on artificial intelligence; Aero Team Eindhoven develops an autonomous drone network for zero-emission air delivery; Team Daedalus a solar-powered autonomous drone for long surveillance flights; InMotion race cars; Solar Team Eindhoven the sustainable mobility of the future.

And **Tech United**, which represents TU/e in RoboCup. Its soccer robots have become world champions eight times in the **Middle Size League**. In July 2024 RoboCup came to Eindhoven itself: three hundred teams from forty countries across five leagues, including RoboCupJunior for school pupils, and Tech United won the final 6-1 against **BigHeroX**.

**Where AI meets hardware at TU/e, from the university's and the team's own pages**

| What | Published detail | The kind of AI it involves |
|---|---|---|
| EAISI | Central AI hub; 300 academic staff, 600 PhD candidates | Data and algorithms in robots, cars and medical equipment |
| AI and Engineering Systems master | Two years, 120 EC, seven departments, 40+ research groups | AI methods combined with engineering systems |
| Tech United | Middle Size League since 2006; 14 world finals, 8 titles | Vision, a world model, strategy and motion, in real time |
| Serpentine | Student team working on artificial intelligence | AI projects and competitions |
| Aero Team Eindhoven | Autonomous drone network for zero-emission delivery | Navigation and control in the air |
| Team Daedalus | Solar-powered autonomous drone for long flights | Autonomy with a tight energy budget |

Sources: [TU/e, EAISI](https://www.tue.nl/en/research/institutes/eindhoven-artificial-intelligence-systems-institute); [TU/e, Master Artificial Intelligence and Engineering Systems](https://www.tue.nl/en/education/graduate-school/master-artificial-intelligence-and-engineering-systems); [TU/e, Explore TU/e Student Teams](https://www.tue.nl/en/our-university/student-teams/student-teams/explore-tue-student-teams); [TU/e news, 21 July 2024](https://www.tue.nl/en/news-and-events/news-overview/21-07-2024-tech-united-becomes-robot-soccer-world-champion-in-eindhoven). Read 11 September 2026. We have no connection with TU/e, EAISI or any student team.

## What a soccer robot has to solve that a chatbot never meets

Tech United's robots are called TURTLEs, short for Tech United Robocup Team: Limited Edition, now in their fifth generation. The team's 2025 description, written for RoboCup, is an unusually honest account of AI leaving the screen.

### The data has to be made

A vision model learns from thousands of labelled images, and labelling them by hand is, in the team's words, a long and gruelling process prone to error. So they manufacture the images: a few smartphone photos of a ball or robot become a photorealistic 3D model within an hour, placed in **Unreal Engine** with randomised lighting, angles and lens settings. Each labelled synthetic image takes about one second. A **YOLOv8** detector trained on about 2,500 of them reached a precision of 0.953 on real match footage. The limit is also stated: the synthetic images contain no motion blur, and a real match is full of it.

### The world drifts

Ball detection depends on the lighting, and collisions, which still happen often in a match, knock the shooting mechanism slightly out of line with the camera. So the robots now recalibrate themselves: when a robot passes, it tracks where the ball actually went, compares that with where it meant to send it, and corrects its shooting angle. When it decides one of its values is no longer right, it asks to be substituted so it can be fine-tuned at the side of the pitch. A system that knows when it is wrong is worth more than one that is right most of the time.

### The simulator is not the pitch

The team is building a four-legged goalkeeper from an MIT **Mini Cheetah**, trained with hierarchical reinforcement learning in simulation, with masses, frictions and forces randomised so that the policy would transfer to the real robot. It did transfer, but a delay in fetching camera images and the remaining gap between simulation and reality meant it covered **23 percent** of the goal area with a side-step skill. The next step is retraining on the real hardware. Every model trained in a simulator meets that gap sooner or later.

**The four software modules of a TURTLE, and what each teaches a learner**

| Module | What it does on the robot | What a learner practises |
|---|---|---|
| Vision | Finds the ball, the robots and the field in camera images | Image data, detection models, testing in bad light |
| Worldmodel | Combines what each robot sees into one picture of the match | Keeping state, merging noisy measurements |
| Strategy | Decides what the team does next | Rules, planning and agents that choose actions |
| Motion | Turns decisions into movement | Control, timing and the cost of being late |

The modules exchange information through a real-time database, and the order matters: a decision made on an old picture of the match is a wrong decision, however clever the strategy. That is the deepest difference between AI in a machine and AI on a screen. A chatbot that takes an extra second is slow; a goalkeeper that sees the ball a moment late has already let it in.

The team also says which mistake it fears more. In robot soccer, it writes, precision matters more than recall, because a false positive, such as seeing a background object as the ball, leads straight to a wrong decision. Choosing which error to accept is an engineering decision, and it depends on what the machine does next.

Source: [Tech United Eindhoven Team Description 2025](https://msl.robocup.org/wp-content/uploads/2025/03/TDP_TechUnited_2025.pdf) (robot platform, software modules, synthetic data generation, automatic calibration, Mini Cheetah goalkeeper), read 11 September 2026. The lessons drawn for learners are ours, not the team's.

## The same three problems, at a size a learner can build

Nobody needs a soccer robot to learn these lessons. Each has a version that fits a laptop, and meeting it early changes how a learner thinks about every model afterwards.

A child steering Python's turtle across the screen is already solving the motion problem: turn too far and the line goes wrong, and the error is visible at once. Add a simple sensor in code, stop at the edge, and the program starts to react instead of just following orders. That is the first step from a script to a machine.

A teenager can meet all three problems in one project. Train an image model to recognise an object, then photograph the object in a darker room and watch the accuracy fall; that is drift. Generate extra training images by rotating and recolouring the originals; that is manufactured data. Build a small simulation, then compare it with the real measurements; that is the gap.

Adults in Eindhoven often meet the same problems at work under other names: a model that was accurate at launch and slipped as conditions changed, a dataset that had to be built because none existed, a test environment that behaved better than the factory floor. The upper rungs give those problems their proper names and methods.

For the city's schools, neighbourhoods and figures, see [coding classes in Eindhoven](/coding-classes-in-eindhoven); for the towns around it, [Helmond](/coding-classes-in-helmond) and [Noord-Brabant](/coding-classes-in-noord-brabant). The [national academy page](/ai-and-python-academy-netherlands) covers the country as a whole.

## From a turtle on the screen to a model that survives the real world

The rungs come in a fixed order because each supplies what the next needs. A learner who has never cleaned data cannot judge a vision model, and one who has never measured an error cannot tell whether a simulation was good enough.

**The five rungs for an Eindhoven learner, with the machine-world problem met at each**

| Rung | Usually | What the learner builds |
|---|---|---|
| 1. Python by hand | Groep 6 to 8, or any adult beginner | Programs from an empty file, starting with a turtle that moves and turns |
| 2. Data | Brugklas to the third year | Real measurements, cleaned and plotted, with noise and gaps noticed |
| 3. Models | Havo 4 to vwo 6, students, engineers | Image and prediction models, tested in conditions they were not trained on |
| 4. Agents | Upper school and beyond | Programs that sense, decide and act in a loop, and know when to stop |
| 5. Publishing | At every stage | A public repository with results, limits and failures written down |

### Why the real world arrives early

Meeting noisy data and drifting conditions on rung 2 saves a great deal of disappointment on rung 3. A learner who expects the world to differ from the training set tests for it; one who does not is surprised by every deployment.
The wider order we teach in, subject by subject, is on the [coding roadmap](/coding-roadmap).

### Where it fits the Eindhoven school year

Rung 1 fits the last years of the basisschool, kept light around the doorstroomtoets. The profielkeuze year is the moment to try rung 2, especially for a pupil weighing the Nature and Technology profile and a technical degree.
Engineers and students usually start at rung 3 and take it one to one, around project deadlines.

## Eleven live courses for Eindhoven learners, chosen by ability

Grouped by stage of life. Every card opens the full course with schedule and fee, and the free lesson decides the starting point.

### Children, groep 3 to 8

Code that makes things move, and a clear idea of what AI is

- [Python and AI for Kids](/courses/python-ai-kids-masterclass): Typed Python for ages nine to twelve: turtle drawings, small games and a first program that learns from examples.
- [Scratch Coding for Kids](/courses/scratch-programming-complete-course): Games built from blocks for the youngest learners, with sprites that sense the edge of the stage and react to it.
- [AI Literacy for Kids](/courses/ai-literacy-for-kids-course): How AI systems work, why they get things wrong, and how a child can tell a confident answer from a correct one.

### Teenagers, havo and vwo

From Python to vision models, tested against the real world

- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens): Statistics, classical models, neural networks and image recognition, each project tested outside the conditions it was trained in.
- [Python for Teens](/courses/python-complete-masterclass-teens): The two-year foundation in Python, for a teenager who wants to build machines that think one day and needs solid code first.
- [Data Science for Teens](/courses/data-science-course-for-teens-python-data): Measurements, noise and missing values handled properly, the unglamorous work every sensor-driven system depends on.
- [Coding Agents: Codex and Claude Code](/courses/codex-and-claude-code-ai-coding-agents-course-for-teens): Working with AI coding agents on real code and checking every change. Students hold their own accounts, within each tool's age limits.

### Students, engineers and adults

Deep learning, mathematics and systems that hold up outside the lab

- [AI and Machine Learning Masterclass](/courses/ai-ml-masterclass-complete-college): The complete machine learning route, from classical methods to deep networks, with evaluation and deployment treated as seriously as training.
- [Maths for Data Science](/courses/data-analytics-mathematics-masterclass): Statistics, linear algebra and the calculus of learning, written as code, for engineers whose maths is rusty or was never applied.
- [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college): Python from the basics to advanced use at adult pace, for engineers moving from other languages or from spreadsheets.
- [Generative AI: LLMs, RAG and Agents](/courses/complete-generative-ai-masterclass-college): Language models, grounding and agents, with the same attention to limits and failure that physical systems demand.

## Eindhoven hours, a teacher in India

The Netherlands switches between CET and CEST and India does not, so the teacher is three and a half hours ahead in summer and four and a half in winter. Late afternoons and weekends are easy, weekday evenings are arranged case by case, and the regular time is agreed during the free lesson.

- **Late afternoon** Eindhoven time, after school. Suits children and younger teenagers; evening in India.
- **Evening** Eindhoven time, by arrangement. For older pupils, students and engineers after the working day.
- **Weekend** Saturday or Sunday, Eindhoven time. The easiest slot for adults and for families with busy weeks.

- **A free lesson with real work** The learner tackles an actual problem while the teacher watches. That shows the right starting rung better than any placement test.
- **Five to ten in a group** Learners from many countries grouped by ability, so a strong Eindhoven pupil is challenged and a newcomer is not rushed.
- **One to one for engineers** For irregular project hours, a specific technical goal, or anyone who prefers the pace set around them.
- **Code visible as it is written** Screens are shared both ways, so the teacher catches a misunderstanding while it is still small.
- **English, as in the lab** Lessons, documentation and error messages are in English. Dutch school terms are used as families use them.
- **Work kept in a repository** Every lesson ends with committed code in the learner's own GitHub repository, with results and limits written beside it.

## Fees

Monthly, in US dollars, at the same two rates as every country outside India. Nothing extra for Eindhoven or the Netherlands, no sign-up fee, no annual contract. Copilot Studio courses are private tuition only and use the one-to-one rate.

- Free first class: USD 0. A real lesson, not a sales call. Finds the right rung. No payment details needed.
- Group batch: USD 100 a month. Five to ten learners at one level. One live teacher throughout. Projects reviewed every week. Certificate at completion.
- One to one: USD 150 a month. A teacher for one learner. Pace and focus set by the goal. The format for Copilot Studio courses.

## What Eindhoven families, students and engineers ask first

### Do you teach robotics with physical robots?

No. Lessons are live online, and learners work in Python on their own computers. What we teach is the software side that physical systems depend on: data, vision models, decision loops and testing against conditions a model was not trained on. Many of those skills are practised in simulation first, as they are in university labs.

### What is RoboCupJunior?

One of the five leagues at RoboCup, the one for school pupils. RoboCup 2024 was held in Eindhoven with three hundred teams from forty countries. We have no connection with RoboCup, but a pupil who wants to take part will find the Python and data skills from our ladder useful.

### My teenager wants to study at TU/e. What should they learn first?

Python written by hand, then data, then the first models, in that order. For a technical degree, fluent programming and the habit of measuring errors matter more than any particular framework. We have no connection with TU/e and cannot influence admission.

### What is the gap between simulation and reality?

The difference between how a system behaves in a simulator and how it behaves in the real world. Tech United's goalkeeper, trained in simulation, covered 23 percent of the goal area on the real robot, and the team plans to retrain it on the hardware. Every model trained on artificial data faces the same question.

### I am an engineer. Is this too basic for me?

Probably not if you start at the right rung. Engineers usually begin with the mathematics or the machine learning masterclass, often one to one, and move quickly past what they already know. The free lesson decides the level.

### Is my child too young?

Children start from around groep 5 with blocks and from groep 6 to 8 with typed Python. A turtle that moves on the screen is a real program, and a child who writes one is already learning to control a machine.

### Are the lessons in English?

Yes, as the technical world around Eindhoven largely is. Dutch school terms such as brugklas, havo and vwo are used as they are.

### What does it cost?

USD 100 a month for a group place, USD 150 a month for one-to-one lessons, billed in US dollars. No joining fee, no yearly contract, and the first lesson is free.

### Where do the teachers work from?

From India, live over video. The time difference with Eindhoven is three and a half hours in summer and four and a half in winter, so late afternoons and weekends are easiest.

### What happens after I send the form?

We call at a Dutch hour to set up the free lesson. Nothing is charged and no place is held until the family has seen that lesson and chosen.

## More pages for Eindhoven and the Netherlands

- [Coding classes in Eindhoven](/coding-classes-in-eindhoven): The city page for general programming, with its districts, schools and figures.
- [Coding classes in Helmond](/coding-classes-in-helmond): The town east of Eindhoven, with a page of its own.
- [Coding classes in Noord-Brabant](/coding-classes-in-noord-brabant): Every municipality in the province.
- [AI and Python Academy, Netherlands](/ai-and-python-academy-netherlands): The national academy page, with the school figures and the country's AI plans.
- [AI and Python Academy, Groningen](/ai-and-python-academy-groningen): The academy page built around a university AI degree.
- [AI and Python Academy, Amsterdam](/ai-and-python-academy-amsterdam): The academy page built around the public algorithm register.

## Contact

Book the free first class at [https://learn.modernagecoders.com/ai-and-python-academy-eindhoven](https://learn.modernagecoders.com/ai-and-python-academy-eindhoven#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email contact@modernagecoders.com.
