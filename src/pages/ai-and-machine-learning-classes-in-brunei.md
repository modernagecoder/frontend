---
title: "AI and Machine Learning Classes in Brunei | Build AI"
description: "Live online AI and machine learning classes for students in Brunei, ages 6 to 67. Train real models on Brunei's own published data, not prompts. From USD 100."
canonical: https://learn.modernagecoders.com/ai-and-machine-learning-classes-in-brunei
source: src/pages/ai-and-machine-learning-classes-in-brunei.html
---
> Live online AI and machine learning classes for students in Brunei, ages 6 to 67. Train real models on Brunei's own published data, not prompts. From USD 100.

In short

Brunei families can enrol a learner between six and sixty-seven with Modern Age Coders, either in a batch of five to eight or alone with a teacher, and every session is live. What gets taught is construction rather than conversation. Students write Python, pick up the mathematics as each piece of it becomes necessary, and leave able to do the thing most courses never mention: quote a model's error and then demonstrate that the error is better than what you would get by not modelling at all. Batches cost USD 100 monthly, private teaching USD 150, and the opening session is free.

The catalogue

## Twelve live courses, and a learner is placed by what they can do rather than by age

Three separate curricula rather than one course run at three speeds. Each carries its own projects and its own finishing point. Every card opens the full schedule, with fees and timings.

I

### Children, ages 6 to 12

A real language early, and a truthful account of what these systems are

BN / KIDS / 01

#### Python and AI for Kids

Real syntax arrives early here, not coloured blocks. Turtle drawings first, then small games, then the moment that matters: seeing a program work out a rule for itself from examples nobody explained to it.

[Open the syllabus](/courses/python-ai-kids-masterclass)

BN / KIDS / 02

#### AI Literacy for Kids

How something can sound completely certain and still be mistaken, and what a nine year old can do about that in practice. The checking habit is the durable part; whichever product is fashionable in five years, the habit still applies to it.

[Open the syllabus](/courses/ai-literacy-for-kids-course)

BN / KIDS / 03

#### Vibe Coding for Kids

The child instructs a tool, receives something, and then has to work out which bits of it are broken and mend them. Issuing the instruction is the easy half. Evaluating what comes back is where the whole course actually goes.

[Open the syllabus](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)II

### Teenagers, ages 13 to 18

From first syntax to a model with a defensible number attached to its error

BN / TEEN / 01

#### AI and Machine Learning for Teens

This is the principal track. Across a year it moves through Python, the necessary mathematics, the older algorithms, then networks, images and text, and every stage finishes with a trained model and a number stating how wrong it is.

[Open the syllabus](/courses/ai-ml-masterclass-teens)

BN / TEEN / 02

#### Data Science for Teens

Everything that has to happen before any modelling can. Reading files, merging them, drawing them, and developing an eye for the single bad row that would otherwise have corrupted every conclusion that followed.

[Open the syllabus](/courses/data-science-course-for-teens-python-data)

BN / TEEN / 03

#### Python for Teens

A two year climb from a blank file to Python most graduates would be pleased with. Choose this when a teenager has written nothing before and you would rather the machine learning came later, on firm ground.

[Open the syllabus](/courses/python-complete-masterclass-teens)

BN / TEEN / 04

#### Vibe Coding for Teens

Genuine web and Python projects, put together with an assistant helping, and then inspected line by line. The output of the course is a teenager who has shipped something and can answer hard questions about how it works.

[Open the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)III

### University students and working professionals

Depth, generative systems, and the part where it has to run in production

BN / PRO / 01

#### AI and Machine Learning Masterclass

The long route, taken seriously. Labelled and unlabelled methods, deep architectures, the discipline that keeps a training run honest, evaluation that holds up under interrogation, and finally getting the thing running where other people can use it.

[Open the syllabus](/courses/ai-ml-masterclass-complete-college)

BN / PRO / 02

#### Generative AI: LLMs, RAG and Agents

What actually happens when a language model is trained, fine-tuned and then pinned to a document collection you own. Also the part most courses omit: designing an agent so that when it goes wrong, somebody notices immediately.

[Open the syllabus](/courses/complete-generative-ai-masterclass-college)

BN / PRO / 03

#### Python and AI Automation

Aimed at adults already in a job. The techniques are turned directly on whatever is currently eating the working week: the monthly return assembled by hand, the spreadsheet nobody trusts, the report that takes two days to produce.

[Open the syllabus](/courses/python-ai-automation-masterclass-college)

BN / PRO / 04

#### Data Science Masterclass

Constructed backwards from a job description. Statistics, SQL, engineering the features, building the model, then the underrated skill of explaining all of it, ending with a portfolio designed for a hiring manager to read in ten minutes.

[Open the syllabus](/courses/data-science-complete-masterclass-college)

BN / PRO / 05

#### Data Structures and Algorithms

Two things at once: the barrier nearly every technical interview puts in the way, and the actual explanation of why code that copes with a thousand records survives ten million. Approached as thinking, never as memorisation.

[Open the syllabus](/courses/data-structures-algorithms-masterclass-college)

BN / ALL / 06

#### Everything else on the shelf

The rest of what we run: mathematics at every level from counting to undergraduate, sites and applications, games, and coaching for the international qualifications Bruneian households actually enter their children for.

[Open all courses](/courses)

What you actually build

## Predicting Brunei's temperature to a third of a degree, and why that is worth nothing

Every market we teach gets a first project built from its own country's published figures. Brunei gets its climate normals, because this country's weather demonstrates the most expensive mistake in machine learning more clearly than any constructed example could. The table below is the 1991 to 2020 normals for Bandar Seri Begawan, sourced from the World Meteorological Organisation. The student types it in themselves, which takes four minutes and is the last easy thing that happens.

| Month | Daily mean, C | Rainfall, mm |
| --- | --- | --- |
| January | 27.0 | 320.6 |
| February | 27.2 | 162.9 |
| March | 27.6 | 143.4 |
| April | 28.0 | 241.8 |
| May | 28.1 | 260.3 |
| June | 27.9 | 237.7 |
| July | 27.7 | 241.8 |
| August | 27.8 | 231.5 |
| September | 27.6 | 235.1 |
| October | 27.2 | 313.6 |
| November | 27.2 | 322.9 |
| December | 27.2 | 358.9 |

Look at the temperature column before reading on. The warmest month in Brunei averages 28.1 degrees and the coolest averages 27.0. The entire annual range is **1.1 degrees**. There is no summer here and no winter, only a wetter half and a slightly less wet one.

So a student trains a model to predict the monthly temperature and reports a mean absolute error of about a third of a degree. It sounds excellent. It is the number a beginner puts in a project write-up and a recruiter nods at.

Now compute what you get by ignoring the model entirely and always answering 27.5, the annual average. That constant, which contains no learning of any kind, scores a mean absolute error of **0.318 degrees**. The model has beaten a number you could have written on a napkin by almost nothing.

pandasscikit-learn matplotlibbaseline model mean absolute errorskill score

1. #### Predict the temperature, and enjoy it briefly

  Month in, temperature out. The student fits something, measures the error and writes down what they would tell somebody about it. Around a third of a degree, on a country's climate, reads like a triumph. Letting that stand for ten minutes is deliberate.
2. #### Write the stupidest model you can defend

  One line: always answer 27.5, whatever month you are asked about. This is the baseline, and almost nobody is taught to build one. Its error comes out at 0.318 degrees, which is not meaningfully worse than the trained model, and for most students this is the first genuinely uncomfortable moment of the course.
3. #### Work out what the number actually meant

  The third of a degree was never a measure of the model. It was a measure of Brunei. In a country whose annual temperature range is 1.1 degrees, any method at all lands close, because there is almost nothing to be wrong about. Low error was a property of the question, not evidence of an answer.
4. #### Run the identical method on the rainfall column

  Same table, same code, different column, and the world changes shape. Brunei's driest month averages 143.4 millimetres and its wettest 358.9, a factor of two and a half. The constant model now scores a mean absolute error of 49.5 millimetres, nearly a fifth of the average month. There is real structure here, and a model that finds it has genuinely earned something.
5. #### Report skill, not error

  The student stops publishing raw error and starts publishing the comparison: how much better than the baseline, expressed as a fraction. On temperature that figure is close to zero however good the raw error looks. On rainfall it is substantial. One number, two honest verdicts, from a table that fits on a postcard.
6. #### Check that the data is what it claims

  The twelve monthly rainfall figures are added up. They come to 3,070.5 millimetres, which is exactly the annual total the source publishes. That reconciliation takes fifteen seconds and is the cheapest insurance in the subject: when parts match the published whole, the columns were read correctly, and when they do not, something needs finding before any modelling begins.
7. #### Write it up with the limitation in the opening paragraph

  A short published notebook: both columns, both baselines, both skill scores, and a plain statement that twelve monthly normals cannot support a claim about any individual year. That last sentence is worth more to a university admissions reader than a better score would have been, because it is the sentence most applicants never write.

The distinction

## Driving a finished system and engineering one are two different jobs

We teach both, in that order, and we are direct about which of the two still pays in five years.

#### Operating something somebody else built

- Compose a request, read what comes back, rephrase, repeat
- Accumulate the habits of whichever interface is current this year
- Counted a success when the output reads persuasively
- Limited by whatever the vendor chose to make reachable
- A rewrite of the product resets a good deal of what you knew
- Real value, and roughly a month and a half of actual depth

#### Engineering the thing that answers

- Locate data, clean it, and be prepared to justify every decision taken over it
- Pick a method while knowing what it silently assumes for you
- Counted a success when you can state your error against a stated baseline
- Limited by your mathematics and your willingness to keep going
- Underlying products can be replaced without disturbing any of it
- Years of depth, and the only version that lets you make something that did not exist

Why now, in Brunei

## A country that has decided to build its own AI needs people who can build

Brunei's national digital plan, **Digital Brunei 2030**, consolidates four strategies into one framework: a Digital Government Strategy, a Digital Society Strategy, a Digital Business Strategy, and cutting across all three, a **Data and Artificial Intelligence Strategy**. Its stated vision is "Together Towards a Digital Brunei".

The flagship initiatives named under it are worth reading slowly, because of what kind of things they are. They include AI-capable data centres, a national sovereign cloud with artificial intelligence computing capability, and the development of a **National Large Language Model** built in a Brunei context.

None of those is a subscription. Every one of them is a construction project, and construction projects need people who can build rather than people who can operate. A national language model requires engineers who understand tokenisation, training runs, evaluation and the cost of getting any of it wrong at national scale.

Set that beside **Wawasan Brunei 2035**, the long-term vision whose central concern is diversifying an economy that has rested on hydrocarbons since the Seria field was found in 1929. Diversification is a word that only becomes real when specific people can do specific things, and this is one of the specific things.

Someone aged twelve here now reaches the job market around the middle of the next decade, roughly when that vision comes due. What will be scarce then is not familiarity with AI products; Brunei has no shortage of that and neither does anywhere else. What will be scarce is the person who can take a national dataset, produce something defensible from it, and then sit in a room full of sceptical people and hold the line.

That is the reason this page exists, and the reason we will not sell a course in prompt writing and call it an AI education. Universiti Brunei Darussalam and Universiti Teknologi Brunei will take the students who arrive able to build. So will every employer under that strategy.

School and university

## Where this sits against the system your child is already in

### SPN21, and the years worth using

Brunei's national system runs primary from Year 1 to Year 6, ending in the Primary School Assessment, then Years 7 and 8 as lower secondary and Years 9 to 11 as upper secondary, finishing in the Brunei-Cambridge GCE Ordinary Level. There is also a shorter two year upper secondary route, awarded on the strength of a learner's lower secondary record.

Read that structure for where the room is, and it points at Years 7 and 8. Those two carry no national certificate, they sit before the point at which a direction narrows, and the record being built during them is what opens the faster route. If a family intends to find out whether their child takes to this, that is the window, and it is short.

### International and expatriate routes

A significant minority of households here, concentrated around Belait, follow British-influenced international programmes instead. Those qualifications are taught here too, IGCSE Computer Science 0478 among them, along with AP Computer Science A and Principles and the IB Diploma course, and they are taught by the same person doing the building work so that revision and construction never end up bidding against each other for the same evening.

### What a portfolio does that a grade cannot

Brunei is a small country with a centrally run school system, which means grades here compress even more than they do elsewhere: a great many strong candidates arrive with nearly identical transcripts. A published project does not compress, because it can be opened, read and interrogated by the person doing the deciding.

The climate project above is a small illustration of the shape we aim at. It is not impressive because the model is clever, since a first year could write it. It is impressive because the student discovered that their own excellent-looking result meant nothing, proved it with a one line baseline, and then said so in writing. That reads as judgement, and judgement is what is actually scarce.

The same holds for work. Under a strategy that involves building national AI infrastructure, the roles that matter are the ones where a named person is accountable for whether a system is right. Nobody has ever been made accountable for a prompt.

How the classes run

## Brunei evenings, a gap that never moves, and days we ask about rather than assume

Brunei holds UTC plus 8 for the whole year and India, where the teaching operation sits, holds UTC plus 5:30 for the whole year. The difference is a permanent two and a half hours, so a Brunei evening lands in the middle of our teaching afternoon and a slot agreed once never needs revisiting. The days are the interesting question here, and they are the one thing we will not put on a page.

18:00 to 19:30

Brunei time. Primary age children, after school and before the evening closes in.

19:45 to 21:15

Brunei time. The main teenage block, after dinner and after homework.

21:30 to 23:00

Brunei time. University students and working adults on weeknights.

### What a session is

An hour and a half on camera with somebody who remembers, unprompted, exactly where your child got stuck seven days ago. Both screens are visible to both parties, which means the teacher sees the wrong idea forming in real time and stops it there instead of finding it in homework the following weekend. Batches run five to eight; private is one.

The work set between lessons is construction, not exercises to hand in. If a question comes up on a Tuesday it goes to the same person who taught on Monday, never to a support address.

### Which days, and why we ask

Brunei is the one country in the world whose working week is not continuous, so which days a household is free depends on which sector its adults work in. Publishing a standard weekend slot here would be a confession that we had not looked.

We ask on the free call and build the schedule from the answer. The full evidence for that, taken from published ministry hours, is on our [Brunei coding page](/coding-classes-in-brunei), along with district guides for [Bandar Seri Begawan](/coding-classes-in-bandar-seri-begawan), [Kuala Belait](/coding-classes-in-kuala-belait), [Tutong](/coding-classes-in-tutong) and [Temburong](/coding-classes-in-temburong).

Student work

## Applications students wrote and left running

Not mockups. Each has a live URL, and you are welcome to go and break them. A larger collection sits in [Student Labs](/student-labs).

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

## What a Brunei family pays

Two figures, charged monthly and quoted in US dollars, identical in every country we operate in outside India: one hundred to sit in a batch, one hundred and fifty to have the teacher to yourself. Joining costs nothing and no term length is required of anybody.

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
- Sensible during a certificate year, or for an adult with one free evening
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

Questions from Brunei

## What Bruneian families ask before they begin

### What time do the live classes run in Brunei time?

Early evening on the days your household is free, most often between six and half past nine. Brunei holds UTC plus 8 all year and India, where the teaching operation sits, holds UTC plus 5:30 all year, so the gap is a permanent two and a half hours: seven in the evening in Bandar Seri Begawan is half past four in the afternoon for the teacher. Nothing shifts seasonally at either end, so a slot agreed in January is still the correct slot in July.

### Which days, though? Our week here is not the standard one.

That is exactly why we ask instead of publishing a timetable. Brunei is the one country whose working week is not continuous, so a household's free days depend on which sector the adults work in, and a provider offering you Saturday morning has not looked. Government families and energy-sector families in the same street can have completely different answers. The working week is set out in full on our Brunei coding page, and we fix the recurring slot only after you have told us yours.

### How is this different from the AI courses being advertised everywhere?

Most of what is sold under this heading is instruction in how to phrase a request. A student comes out of it good at asking and with no way of telling whether the answer they got back is true. Our subject is the machinery underneath: where data comes from, how to make it usable, which method to apply, how to train it, how to express the resulting error in a unit an outsider can verify, and how to establish that it beats doing nothing. Technique with a particular interface is worth exactly as long as that interface lasts. Nobody ships a new version of linear algebra.

### What does it cost?

One hundred US dollars a month puts a learner in a batch of five to eight. One hundred and fifty gets them the teacher on their own. Those two figures are the same in every country we work in outside India, they are charged monthly, and there is no joining fee and no term you are locked into. The opening lesson costs nothing and we do not ask for card details to book it.

### My child is heading for the Brunei-Cambridge GCE. Does this help or interfere?

It sits alongside and it certifies nothing of its own, which we would rather say plainly. The mathematics underneath machine learning, particularly statistics and the first ideas of linear algebra, is mathematics an upper secondary student is meeting anyway, and using it on real data tends to change how a student feels about it. During the examination year itself our advice is usually fewer lessons rather than more, and we will say so even though it costs us the month.

### What will my child actually build?

Software with a URL somebody else can open. The Brunei starting project uses this country's published climate normals, and it was chosen because it walks a student straight into the error nearly everyone makes at least once: quoting how accurate a model is without ever asking what accuracy you would have got for free. From there the ideas become the student's own. Things previous students have finished and left running include a nutrition adviser, a bot that talks through maths and programming problems, a tool about staying safe online, and a weather site.

### Does my child need to be strong at mathematics before starting?

They do not, and holding a child back until they are is how families lose two useful years. Three areas end up mattering: the algebra of arrays because that is the shape data comes in, a little calculus because that is how a model corrects itself, and statistics because without it you cannot say whether anything you found is real. None of it is delivered as a chapter to revise. Each piece arrives at the exact moment it explains something the student has already seen happen on their own screen, and that ordering does something to how children feel about the subject. We regularly watch a learner who described themselves as hopeless at maths quietly stop saying it.

### Are the classes in English or Malay?

English, stated plainly here rather than left for you to discover later. In this particular field that turns out to be the useful option anyway: the tools, their manuals, the messages they print when something breaks and the papers behind all of it are English-language, so nothing a student learns has to be converted afterwards. Younger children get the vocabulary introduced slowly, and we check comprehension out loud instead of assuming it.

### Is there a centre in Brunei we could visit?

No, and there is no branch, office or representative anywhere in the country. Every session is live video taught from India, and the telephone number on this page rings in India rather than in Brunei. What is needed at your end is a computer with a keyboard, a connection that holds a video call, working audio and a reasonably current browser.

### When do Brunei families usually start?

Whenever the household week is calm enough to absorb a new fixed commitment, which for most families here means either the weeks before a school year opens or the long break in the middle of it. Admission runs continuously, so there is no closed cohort and nothing to wait for. What we do ask is that you start when you can protect two evenings, because two protected evenings beat four optimistic ones every time.

Start here

## Book the free first class

Give us a number and somebody rings it at a Brunei-friendly hour. That opening session is a lesson rather than a pitch: real material, a real teacher, and by the end of it we know which band the learner belongs in, which is how nobody ends up wasting a term in the wrong one. Have your free days ready when we call, because in Brunei that answer varies from household to household and we would rather ask than guess.

Rather read first? See [how we teach](/how-we-teach), the [full catalogue](/courses), the thesis behind this page at [Learn to Build AI](/learn-to-build-ai), or the [Brunei coding guide](/coding-classes-in-brunei) if programming foundations come first.

[WhatsApp us](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20want%20a%20free%20AI%20and%20machine%20learning%20class%20for%20a%20learner%20in%20Brunei.) · [+91 91233 66161](tel:+919123366161) · [contact@modernagecoders.com](mailto:contact@modernagecoders.com)

WhatsApp reaches us fastest from Brunei and costs nothing to use. The number is Indian, not a Brunei office.

[Chat with us](https://wa.me/919123366161?text=Hi%2C%20I'm%20interested%20in%20learning%20more%20about%20your%20courses!)

---

*Canonical: https://learn.modernagecoders.com/ai-and-machine-learning-classes-in-brunei*
