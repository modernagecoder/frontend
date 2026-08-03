---
title: "AI and Machine Learning Classes in the Netherlands | Build AI"
description: "Live online AI and machine learning classes for students in the Netherlands, ages 6 to 67. Train real models on Dutch open data, not prompts. From USD 100 a month."
canonical: https://learn.modernagecoders.com/ai-and-machine-learning-classes-in-netherlands
source: src/pages/ai-and-machine-learning-classes-in-netherlands.html
---
> Live online AI and machine learning classes for students in the Netherlands, ages 6 to 67. Train real models on Dutch open data, not prompts. From USD 100 a month.

In short

Modern Age Coders teaches live online AI and machine learning to learners in the Netherlands between the ages of 6 and 67, in groups of five to eight or one to one. The subject here is model building rather than prompt writing: students work in Python, meet the mathematics that holds machine learning up, and finish able to train something and say how far off it is. Group fees are USD 100 a month, billed in US dollars, and the first class is free.

The catalogue

## Twelve live courses, placed by what a learner can do today

Three separate curricula rather than one course delivered at three speeds. Each has its own projects and its own end point. Every card opens the full schedule with fees and timings.

I

### Children, ages 6 to 12

A real language, and a truthful account of what AI is

NL / KIDS / 01

#### Python and AI for Kids

Written code from the first weeks rather than dragged blocks. Children draw with turtle graphics, make small games, and meet the idea that a machine can work out a rule from examples instead of being handed it.

[Open the syllabus](/courses/python-ai-kids-masterclass)

NL / KIDS / 02

#### AI Literacy for Kids

How a model can be fluent and wrong in the same sentence, and what a child can do to check it. The habit is worth more at this age than any tool, because it survives every product that comes next.

[Open the syllabus](/courses/ai-literacy-for-kids-course)

NL / KIDS / 03

#### Vibe Coding for Kids

Children direct an AI tool to build something, then read what came back and repair the parts that do not work. Asking is quick to learn. Assessing is the part that takes a term.

[Open the syllabus](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)II

### Teenagers, ages 13 to 18

From first syntax to a model with a number attached to its error

NL / TEEN / 01

#### AI and Machine Learning for Teens

The main route on this page. A year through Python, the required mathematics, classical algorithms, neural networks, vision and language, with something trained and measured at the close of every stage.

[Open the syllabus](/courses/ai-ml-masterclass-teens)

NL / TEEN / 02

#### Data Science for Teens

The stage before the model, taught properly. Loading, joining, plotting, and noticing the row that would have quietly poisoned everything downstream if nobody had looked.

[Open the syllabus](/courses/data-science-course-for-teens-python-data)

NL / TEEN / 03

#### Python for Teens

Two years from a first line to genuinely advanced Python. The right entry if a teenager arrives without code and wants the AI track standing on something that will hold.

[Open the syllabus](/courses/python-complete-masterclass-teens)

NL / TEEN / 04

#### Vibe Coding for Teens

Shipping real web and Python work with AI assistance, and learning to review what the assistant produced. Teenagers finish able to build, and able to defend what they built.

[Open the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)III

### University students and working professionals

Depth, generative systems, and the part where it goes into production

NL / PRO / 01

#### AI and Machine Learning Masterclass

The full engineering path. Supervised and unsupervised methods, deep networks, training discipline, evaluation that holds up under questioning, and deployment.

[Open the syllabus](/courses/ai-ml-masterclass-complete-college)

NL / PRO / 02

#### Generative AI: LLMs, RAG and Agents

How language models are trained, adapted and grounded against documents you control, and how agents are constrained so that failures are loud instead of quiet.

[Open the syllabus](/courses/complete-generative-ai-masterclass-college)

NL / PRO / 03

#### Python and AI Automation

For working people who want the applied half first: machine learning and language processing aimed at the spreadsheets, reports and pipelines already on the desk.

[Open the syllabus](/courses/python-ai-automation-masterclass-college)

NL / PRO / 04

#### Data Science Masterclass

Built around employment. Statistics, SQL, feature work, modelling and explaining yourself, ending in a portfolio written to be read by a hiring manager.

[Open the syllabus](/courses/data-science-complete-masterclass-college)

NL / PRO / 05

#### Data Structures and Algorithms

The interview gate, and the reason something that works on a thousand rows still works on ten million. Taught as reasoning rather than recall.

[Open the syllabus](/courses/data-structures-algorithms-masterclass-college)

NL / ALL / 06

#### Everything else on the shelf

Mathematics from early number sense to university level, web and app building, game development, and preparation for the international examinations Dutch families sit.

[Open all courses](/courses)

What you actually build

## Is Dutch cycling in decline? The first project, and why the obvious answer is wrong

Every market we teach gets a first project built on its own country's published figures. The Netherlands gets cycling, partly because it is the obvious subject and mostly because the data contains a trap that catches almost every beginner. The numbers below come from Statistics Netherlands table 84710ENG, which reports travel per person per day by mode. Bicycle is mode A018984. The student pulls it from the open data API themselves in the first session, which is the point: nothing here is a teaching set that somebody tidied first.

| Year | Trips | Kilometres | Minutes |
| --- | --- | --- | --- |
| 2018 | 0.79 | 3.16 | 16.46 |
| 2019 | 0.76 | 3.01 | 16.26 |
| 2020 | 0.63 | 2.61 | 14.74 |
| 2021 | 0.64 | 2.68 | 15.18 |
| 2022 | 0.75 | 3.04 | 16.72 |
| 2023 | 0.73 | 2.92 | 15.81 |
| 2024 | 0.75 | 3.04 | 16.29 |

Fit a straight line through the kilometres column and it slopes downward. A student who stops there reports that the Netherlands is cycling less, which is a striking finding, easy to write up, and wrong.

The 2020 and 2021 rows are pandemic years. Cycling did not decline, it was interrupted and then came back: 3.04 kilometres in 2024 against 3.01 in 2019. The line is not measuring a trend, it is measuring an event that the model has no column for. Learning to see that in your own output, before somebody else sees it, is the single most valuable habit in this subject.

pandasCBS OData API scikit-learnmatplotlib linear regressionstructural break

1. #### Pull it yourself, from the source

  The student queries the CBS open data endpoint for table 84710ENG, filters to mode A018984, and gets back rows for the country and for the four regions. No prepared CSV arrives by email. Reading an unfamiliar API and working out which code means bicycle is the first real skill of the course.
2. #### Plot before you model

  Kilometres against year, seven points. The dip is visible instantly and no statistics are needed to see it. This is deliberate. Students who model first and look later spend the rest of the project explaining a number they never understood.
3. #### Fit the naive line, and believe it for ten minutes

  A linear regression on year alone. It returns a negative coefficient, and the class is asked to write down what that coefficient claims about the Netherlands in plain language. Saying the wrong conclusion out loud is what makes the correction stick.
4. #### Add the column the world has and the table does not

  An indicator for 2020 and 2021. Refit. The slope changes sign or flattens, and the student has just learned what a confounder is by building one, rather than by reading the definition in a glossary.
5. #### Report the error in kilometres

  Mean absolute error in the same unit as the data, not an abstract score. If the model is out by 0.12 kilometres per person per day, the student says so, and can explain what that means for a country of that size without reaching for a calculator.
6. #### Bring in the regions, and resist the easy story

  The four regional series behave differently. The south sits consistently lowest, at 2.73 kilometres in 2024 against 3.28 in the east. The class is asked whether the model explains that or merely reproduces it, which are not the same thing, and whether seven points per region is enough to claim either.
7. #### Write it up with the limitation in the first paragraph

  A short notebook published at a link: the chart, the two models, the error, and an honest note that seven annual observations cannot separate a trend from a recovery with any confidence. That last sentence is worth more to a university reader than a better score would have been.

The distinction

## Operating a model and constructing one are separate trades

We teach both, in that order, and we say clearly which of the two is still worth something in five years.

#### Working a finished tool

- Type a request, read the reply, adjust the wording and try again
- Learn the quirks of whichever product is in front of you this year
- Done well when the output reads convincingly
- The ceiling is set by whatever the vendor decided to expose
- A pricing change or an interface change resets much of it
- Genuinely useful, and roughly six weeks deep

#### Constructing the thing that replies

- Find data, clean it, and be able to justify every decision made over it
- Select a model knowing what it quietly assumes on your behalf
- Done well when you can state your own error in a real unit
- The ceiling is your mathematics and your patience
- Products change underneath it without touching the foundation
- Years deep, and the only version that lets you build something new

Why now, in the Netherlands

## A country building its own AI infrastructure needs people who can build

Artificial intelligence is one of the six priorities of the Netherlands Digitalisation Strategy, and the national approach is being developed by an acceleration team chaired by Larissa Zegveld. Two objectives sit at the centre of it: using AI to improve public services and address societal problems, and building high quality AI infrastructure aligned with public values.

That second objective is the one a parent should read twice. Named initiatives under the strategy include Vlam.ai, GPT-NL and the AI Factory. Whatever each of those becomes, they have a property in common: they are construction projects. A national language model needs people who understand tokenisation, training and evaluation. Public sector AI infrastructure needs engineers who can be handed a messy public dataset and return a defensible result.

The phrase "aligned with public values" is doing real work there too. Alignment is not a slogan you can implement by prompting carefully. It requires people who can measure what a system actually does, notice where it fails, and say so in public. That is an engineering skill and a statistical one, and it is not taught by any course that stops at the chat box.

A child who is twelve now will be applying for those roles in the 2030s. The shortage they will meet is not a shortage of people who can use AI tools. The Netherlands has plenty of those already. It is a shortage of people who can open a public dataset, build something correct from it, and defend the result.

That is the whole reason this page exists, and the reason we decline to sell a prompt course as an AI education.

School and university

## Where this sits against the Dutch system your child is already in

### VMBO, HAVO and VWO

Dutch secondary education streams students into VMBO, HAVO and VWO, and informatica is an elective rather than a compulsory subject. The practical consequence is easy to miss: a capable student can pass through the entire system, reach university, and never once have trained a model or written a line of Python for a purpose.

Our teens track is built to sit beside that rather than against it. The mathematics a VWO student is doing anyway, particularly statistics and the beginnings of linear algebra, is exactly the mathematics machine learning runs on. We use it on data rather than on exercises, which tends to change how a student feels about the subject in both directions.

### International and bilingual schools

Families on international, IB and British curricula in the Netherlands follow the same ladder, and we teach the specific examinations those routes set alongside it, including IGCSE Computer Science 0478, AP Computer Science A and Principles, and IB Diploma Computer Science. One teacher, both tracks, so exam preparation and real building are not competing for the same evening.

### What a portfolio does that a grade cannot

Dutch universities with strong computing and AI reputations, Delft, Amsterdam, Eindhoven and Utrecht among them, receive applications from students with very similar marks. Marks compress. A published project does not, because it can be opened, read and interrogated by the person deciding.

The cycling project above is a small example of the shape we aim for. It is not impressive because the model is sophisticated, since it is a linear regression a first year could write. It is impressive because the student noticed a confounder, said so, and quantified how little seven observations can support. That reads as judgement, and judgement is the scarce thing.

The same applies to employment. The Dutch technology sector is unusually strong for the size of the country, and the roles that pay well are the ones where somebody has to be accountable for whether a model is right. Nobody is hired to be accountable for a prompt.

How the classes run

## Dutch evenings, and a time difference that moves twice a year

The Netherlands keeps CET in winter and CEST in summer. India, where our teaching operation sits, never changes its clocks at all. So the gap between us is 3 hours 30 minutes in summer and 4 hours 30 minutes in winter. Your slot does not move when the clocks do; the distance does, and we absorb it.

17:00 to 18:30

Dutch time. Primary age children, after school and before the evening properly begins.

18:45 to 20:15

Dutch time. The main teenage block, after dinner and homework.

20:30 to 22:00

Dutch time. University students and working adults on weeknights.

### What a session is

Ninety minutes of live video with a teacher who can tell you where your child stopped last week without checking anything. Screens are shared both ways, so the teacher watches the code being written and interrupts at the moment the misconception forms rather than marking it days later. Five to eight students, or one to one.

Between sessions there is something to build rather than something to complete. Questions during the week reach the same teacher, not a ticket queue.

### The Dutch year

School holidays here are staggered by region, with the north, middle and south taking the main breaks at different times. That makes a single national intake date meaningless, so we set start dates per family instead.

In practice most families begin either in the fortnight before the school year opens or during the Christmas break, because a new weekly commitment settles more easily into a quiet timetable. Admission runs continuously, so nobody waits for a cohort to open.

Student work

## Applications students wrote and left running

Every one of these is at a public address and can be opened right now. More of them in [Student Labs](/student-labs).

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

by Krish · [Open it](https://krish-shroff.github.io/AuraWeatherTech/)

Fees

## What a Dutch family pays

Billed monthly in US dollars: USD 100 for a group batch and USD 150 for one to one, the same flat figures everywhere outside India. Nothing is charged to enrol and nothing commits you to a year.

Free first class

USD 0

no card required

- Taught, not sold
- Also settles which band your child belongs in
- You watch it, then decide

Book it

Group batch

USD 100

a month, billed in US dollars

- Five to eight students, one teacher throughout
- Live video, never a recording
- Weekly build work reviewed by the teacher
- Certificate on completion

Start here

One to one

USD 150

a month, billed in US dollars

- Private teaching at your own pace
- Suits examination years and adults with few free evenings
- Syllabus shaped to the goal

Enquire

What families say

## Rated 4.9 across 547 Google reviews

Real reviews from real families. We neither write nor commission them.

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

Questions from the Netherlands

## What Dutch families ask before they begin

### What time do the live classes run in Dutch time?

Evening slots at 17:00, 18:45 and 20:30 Dutch time, plus a Saturday morning batch. The Netherlands moves between CET in winter and CEST in summer, while Indian Standard Time never shifts at all. That means our teaching operation sits 3 hours 30 minutes ahead of you in summer and 4 hours 30 minutes ahead in winter, so a Dutch evening lands comfortably inside our teaching day in both halves of the year. Your slot stays where it is; the gap moves, not the lesson.

### How is this different from the AI courses already sold in the Netherlands?

Most of them teach prompting. A student finishes able to phrase a request well and unable to say whether the answer is correct. We teach the layer underneath: finding data, cleaning it, choosing a model, training it, measuring the error in units a non-specialist can check, and then improving it. Prompting is knowledge of one product in one year. Model building rests on statistics, linear algebra and code, and none of those get a version bump.

### What does it cost?

A group batch of five to eight students is USD 100 a month and one to one teaching is USD 150 a month, billed in US dollars, the same flat figures everywhere outside India. There is no enrolment fee, no annual contract, and the first class is free without a card.

### My child is in VWO. Does this compete with school or support it?

It supports it, and the overlap is real rather than marketing. Dutch secondary education splits into VMBO, HAVO and VWO, and informatica is an elective rather than a compulsory subject, so a motivated student can leave school without ever having trained a model. Our teens track covers the Python, the statistics and the linear algebra that a VWO student meets in mathematics anyway, applied to data instead of exercises. Students on international, IB and British curricula in the Netherlands follow the same ladder.

### What will my child actually build?

Working things at a real web address. The first Dutch project models how far the country cycles, using Statistics Netherlands travel data, and it is deliberately chosen because the honest answer is not the obvious one. After that students move to their own ideas. Past students have shipped an AI nutrition coach, a chatbot that explains mathematics and coding, an online safety assistant and a weather application, all live and inspectable.

### Does my child need to be good at mathematics first?

No, and waiting until they are is the common mistake. The working set is linear algebra for how data is shaped, calculus for how a model corrects itself, and statistics for whether a result means anything. We introduce each one at the moment it explains something the student has already watched happen on their own screen, which is a very different experience from meeting it as a chapter. Children who believe they are bad at mathematics usually revise that view once it stops being abstract.

### Do the classes run in English or Dutch?

English. That is worth saying plainly rather than hiding, because it is a real decision for a Dutch family. In practice it suits this subject: the libraries, the documentation, the error messages and the research are all in English, so a student who learns machine learning in English is not translating anything later. For younger children we go slowly with vocabulary and check understanding rather than assuming it.

### When in the Dutch school year do families usually start?

Most often in the fortnight before the school year opens in late summer, or during the Christmas break, because a new weekly commitment settles more easily when the school timetable is quiet around it. Dutch school holidays are staggered by region, with the north, middle and south taking the main breaks at different times, so we set start dates per family rather than running one national intake. Admission is continuous, so there is no closed cohort to wait for.

Start here

## Book the free first class

Leave a number and a mentor calls you back at an hour that works in the Netherlands. The first class is taught by a real teacher on real material, and it also settles which band your child starts in, so nobody spends a term at the wrong level.

Rather read first? See [how we teach](/how-we-teach), the [full catalogue](/courses), or the thesis behind this page at [Learn to Build AI](/learn-to-build-ai).

---

*Canonical: https://learn.modernagecoders.com/ai-and-machine-learning-classes-in-netherlands*
