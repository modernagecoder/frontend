---
title: "UK Olympiad in AI Preparation | UKOAI and the Route to IOAI"
description: "Preparing for the UK Olympiad in Artificial Intelligence: a free three-hour exam for UK secondary students, PyTorch and transformers, and the route to the IOAI team."
canonical: https://learn.modernagecoders.com/uk-olympiad-in-artificial-intelligence-preparation
source: src/pages/uk-olympiad-in-artificial-intelligence-preparation.html
---
> Preparing for the UK Olympiad in Artificial Intelligence: a free three-hour exam for UK secondary students, PyTorch and transformers, and the route to the IOAI team.

In short

The UK Olympiad in Artificial Intelligence says that "all secondary school students living in the UK are invited to take the free online UKOAI exam". The exam "consists of three long-form questions that test programming and mathematical ability in deep learning", with three hours to complete and submit it, and the published syllabus expects Python, PyTorch, machine learning, deep learning, transformers and word embeddings. High scorers go to video interviews and then a training camp, from which "four participants will be selected" to represent the UK. The international olympiad describes itself as "the International Science Olympiad in Artificial Intelligence for high school students", and its own site gives the 2026 edition as Astana, Kazakhstan, from 2 to 8 August, and the 2027 edition as Singapore, 4 to 10 July. We teach the Python and the machine learning underneath. A first class is free; a group place is USD 100 a month and one-to-one teaching USD 150.

Where to start

## Three courses for a UKOAI candidate

The syllabus is public, so the honest question is which part of it a student is missing.

[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)  UOA / 01 AI and machine learning for teens The core: what a model is, how it is trained, and how to tell whether it has learned anything. Open the syllabus →](/courses/ai-ml-masterclass-teens)[![Python for Teens course thumbnail](/images/python-teens.webp)  UOA / 02 Python from start to finish Before any of the rest. A three-hour exam is no place to be looking up how a loop works. Open the syllabus →](/courses/python-complete-masterclass-teens)[![Data Science for Teens course thumbnail](/images/data-science-teens.webp)  UOA / 03 Data science with Python Arrays, data handling and the honest evaluation of a result, which is half of what a long-form question asks for. Open the syllabus →](/courses/data-science-course-for-teens-python-data)

The exam

## Three questions, three hours, and a named syllabus

Facts read at the organisers' own pages on 20 September 2026.

| Part | What the organiser says | What it means for a student |
| --- | --- | --- |
| Who can sit it | "All secondary school students living in the UK are invited to take the free online UKOAI exam" | No qualifying round and no school nomination: it is open |
| Cost | Free | Nothing between a curious student and the paper |
| The exam | "three long-form questions that test programming and mathematical ability in deep learning" | Written answers and code, not multiple choice |
| Length | Three hours to complete and submit | A long sitting, done online |
| Syllabus | Python, PyTorch, machine learning, deep learning, transformers and word embeddings | The only UK olympiad whose syllabus names specific tools |
| Next stage | High scorers are invited to video interviews | A person, not just a paper |
| Then | A training camp, from which "four participants will be selected" | The camp is where the team is chosen |
| Committee | Members from the University of Cambridge, ARENA, Anthropic, Wise and BCG | Run by people working in the field |

The published cycle is registration in January and February, the exam on a Saturday in early March, interviews in mid-March and a camp in April or May, with the international olympiad in the summer. The dates on the organiser's pages when we read them were for the 2026 cycle, so a student planning for the next one should check the organiser rather than trust a date lifted from a page like this.

What will not change is the shape: an open, free exam early in the spring term. A student in Year 10 or 11 who wants to sit it has the autumn to prepare, which is exactly enough time.

The syllabus deserves a second look because of what it implies. Naming PyTorch means the exam expects a student who has trained something, not one who has read about training. Naming transformers and word embeddings means it expects a student who knows what an embedding is for, not one who can define it.

That makes UKOAI unusually honest about what it wants. Compare it with the [British Informatics Olympiad](/british-informatics-olympiad-preparation), which needs no library at all and tests how a student thinks about a problem.

Sources: [the UK Olympiad in AI](https://ukoai.org/) and [the International Olympiad in AI](https://ioai-official.org/), read 20 September 2026. Modern Age Coders is not connected with either, nor with any organisation whose staff sit on the UKOAI committee.

The method

## Why deep learning costs what it costs

A student who understands one piece of arithmetic will understand most of the practical decisions in the field. We ran it in plain Python, with no libraries, so the numbers are ours.

Almost everything a neural network does is multiplying matrices. Multiplying two n by n matrices takes n cubed multiply-and-add operations, which sounds abstract until you watch the clock. We wrote the three nested loops by hand and timed them.

| Matrix size | Multiply-adds | Time taken | Against the previous row |
| --- | --- | --- | --- |
| 50 by 50 | 125,000 | 0.012 seconds | — |
| 100 by 100 | 1,000,000 | 0.082 seconds | 7.1 times as long |
| 200 by 200 | 8,000,000 | 0.641 seconds | 7.8 times as long |

### Doubling costs eight times

Twice the size is two times more rows, two times more columns and two times more terms in each sum. Two cubed is eight, and the clock agreed: 7.1 and 7.8.

### Attention is quadratic

A transformer compares every token with every other, so 128 tokens is 16,384 comparisons and 1,024 tokens is 1,048,576. Eight times the text is sixty-four times the work.

### What follows from that

Context windows, batch sizes, GPUs and the price of training a model all fall out of these two facts. They are not engineering trivia; they are the shape of the subject.

A student who can do this arithmetic answers a long-form exam question very differently from one who cannot. Asked why a model was trained on short sequences, they can say what the alternative would have cost. Asked to choose between two designs, they can compare them in operations rather than in adjectives.

It also inoculates against the commonest mistake in a three-hour paper: proposing something that would take a week to run and not noticing.

The same arithmetic explains why a laptop is fine for learning and not for competing at the frontier. Nothing in the UKOAI syllabus requires a large machine: PyTorch on a modest computer trains the kind of model the exam is about.

We ran the timings in plain Python precisely because it is slow. A library would have used optimised code and hidden the growth; the naive version shows the arithmetic honestly.

The timings are ours, run on 20 September 2026 in plain Python with no numerical libraries. The attention figures are the exact counts of pairs for sequences of 128, 256, 512 and 1,024 tokens.

The route

## Exam, interview, camp, team of four

The selection route is longer than most olympiads, and the last stage is not a paper.

| Stage | What happens | Notes |
| --- | --- | --- |
| Registration | January to February in the published cycle | Open to any UK secondary student |
| The exam | Three long-form questions, three hours, online | Free, and sat at home rather than in school |
| Interviews | High scorers are invited to video interviews in mid-March | A conversation, not a second paper |
| Training camp | April or May | Where the real teaching happens |
| Selection | "Four participants will be selected from this camp" | The team for the international olympiad |
| The olympiad | IOAI, for high school students | Astana in 2026, 2 to 8 August; Singapore in 2027, 4 to 10 July |

One honest note about a disagreement between sources. The UKOAI site gives the 2026 international contests as 2 to 8 August in Abu Dhabi; the International Olympiad in AI gives the same dates in Astana, Kazakhstan. We follow the olympiad's own site for its own venue and record the conflict here rather than quietly picking one, because a reader deserves to know when two official pages disagree.

The practical consequence is small. For a student sitting the exam in March, where the summer contest lands matters far less than what is on the paper.

The interview stage is worth preparing for in a way almost nobody does. A student who can explain a model they built, including what went wrong with it, does better than one who can recite definitions, and that is a conversation a family can practise at the kitchen table.

And a student who does not reach the camp has still spent a winter learning PyTorch, which is the thing that will still matter in five years. Every other page on our [competitions calendar](/uk-coding-maths-and-ai-competitions-calendar) makes the same point, but it is truest here.

Getting ready

## Four rungs to a syllabus that names its tools

A student moves up when they have built the thing, not when they have read about it.

| Stage | Rung | The sign it is secure |
| --- | --- | --- |
| Years 8 to 9 | 1. Fluent Python | Writes and debugs a hundred-line program without help |
| Years 9 to 10 | 2. Data and arrays | Loads, cleans and reshapes data without looking up every step |
| Years 10 to 11 | 3. A model trained | Has trained something, watched it fail, and fixed it |
| Years 11 to 13 | 4. Why it works | Can explain what an embedding is for and what attention costs |

### If March is close

Train one small model end to end this month rather than reading three papers. The exam asks what a student can do.

Do the matrix arithmetic once by hand. It changes how every later answer is written.

### If this is the field

Everything on the UKOAI syllabus is the ordinary working knowledge of the subject, which makes the exam a good map even for a student who never sits it.

The [informatics olympiad](/british-informatics-olympiad-preparation) is the companion for a student who prefers algorithms to models.

The full list

## Courses on the UKOAI syllabus

Arranged by which part of the published syllabus a student still needs.

I

### The language

Before anything else

UOA / A / 01

#### Python from start to finish

Fluency, so the exam is not spent on syntax.

[Open the syllabus](/courses/python-complete-masterclass-teens)

UOA / A / 02

#### Python and AI for kids

The younger route into the same language.

[Open the syllabus](/courses/python-ai-kids-masterclass)

UOA / A / 03

#### Algorithms and data structures

Counting operations, which this exam rewards.

[Open the syllabus](/courses/problem-solving-dsa-masterclass-teens)II

### Machine learning

The named syllabus

UOA / B / 01

#### AI and machine learning for teens

Models trained, evaluated and understood.

[Open the syllabus](/courses/ai-ml-masterclass-teens)

UOA / B / 02

#### Data science with Python

Arrays, data and honest evaluation.

[Open the syllabus](/courses/data-science-course-for-teens-python-data)

UOA / B / 03

#### Statistics and probability

The mathematics the long-form questions lean on.

[Open the syllabus](/courses/statistics-probability-maths-course)III

### The mathematics

Underneath the tools

UOA / C / 01

#### High school mathematics

Algebra and calculus at the pace this needs.

[Open the syllabus](/courses/complete-high-school-mathematics-mastery)

UOA / C / 02

#### A-level maths

The qualification running alongside.

[Open the syllabus](/courses/a-level-maths-course-pure-mechanics-statistics)

UOA / C / 03

#### Olympiad and competition maths

Problem solving that transfers to any olympiad.

[Open the syllabus](/courses/olympiad-competition-mathematics-mastery)IV

### Building with it

Beyond the exam

UOA / D / 01

#### Full stack web development

Somewhere to put a model once it works.

[Open the syllabus](/courses/full-stack-web-development-teens-masterclass)

UOA / D / 02

#### Competitive programming

Writing correct code against a clock.

[Open the syllabus](/courses/competitive-programming-for-teens-course)

UOA / D / 03

#### GCSE Computer Science

The exam running underneath, board by board.

[Open the syllabus](/courses/gcse-computer-science-course)

How lessons run

## Weekly sessions where something gets trained

Teaching is live on video from India, five and a half hours ahead of the UK in winter and four and a half in summer, at a time agreed and kept in UK time.

Weekday evening

The usual slot for Years 10 to 13.

Weekend morning

Long enough to train and evaluate something properly.

Holiday intensives

For the winter run-up to a March exam.

### Models actually trained

Every idea arrives as something the student runs, not as a slide about it.

### Arithmetic first

We count the operations before we admire the results, because that is what an exam answer needs.

### Fifteen to twenty students

Enough for two designs to be compared, small enough for every notebook to be looked at.

### Our own datasets

Written or chosen by us. No olympiad task is reproduced in a lesson.

### One to one when useful

For a student well ahead of their year or preparing for an interview stage.

### Nothing promised

We cannot influence selection and promise no score, invitation or place.

Student work

## What our students build

Four finished pieces of work from students here, one of them a trained model. The [student labs](/student-labs) page collects the rest.

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

## Fees

A monthly fee in US dollars, identical in every country but India, with no registration charge and no tie-in.

Free first class

USD 0

no card required

- A proper lesson with a subject teacher
- A frank view of what is missing
- No payment details requested

Book it

Group batch

USD 100

a month, billed in US dollars

- Fifteen to twenty students at one level
- The same teacher weekly
- Notebooks read and discussed
- A certificate at the end

Start here

One to one

USD 150

a month, billed in US dollars

- A teacher working with one student
- Shaped around the gap in the syllabus
- Useful before an interview stage

Enquire

What families say

## Rated 4.9 across 547 Google reviews

From our Google profile, in the words families used.

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

UK Olympiad in AI questions

## What students and parents ask

### Who can enter the UK Olympiad in AI?

The organiser says all secondary school students living in the UK are invited to take the free online UKOAI exam. There is no qualifying round and no school nomination.

### What is the exam like?

Three long-form questions testing programming and mathematical ability in deep learning, with three hours to complete and submit it, sat online.

### What does it expect a student to know?

The published syllabus names Python, PyTorch, machine learning, deep learning, transformers and word embeddings. It is the only UK olympiad we know of whose syllabus names specific tools.

### What happens after the exam?

High scorers are invited to video interviews, then to a training camp, and four participants are selected from that camp to represent the UK at the International Olympiad in AI.

### When does it run?

The cycle published when we read the site was registration in January and February, the exam on a Saturday in early March, interviews mid-March and a camp in April or May. Check the organiser for the current cycle rather than trusting a date copied from anywhere else.

### Where is the international olympiad held?

The International Olympiad in AI gives its 2026 edition as Astana, Kazakhstan, from 2 to 8 August, and its 2027 edition as Singapore, 4 to 10 July. The UKOAI site gives the same 2026 dates in Abu Dhabi; we follow the international olympiad for its own venue and record the disagreement.

### Does my child need a powerful computer?

No. Nothing on the syllabus requires a large machine, and PyTorch on an ordinary laptop trains the kind of model the exam is about.

### What is the single most useful thing to understand?

The arithmetic. Multiplying two n by n matrices takes n cubed operations, so doubling the size costs eight times as much, and attention compares every token with every other, so doubling the text costs four times as much. Most practical decisions in the field follow from those two facts.

### Is it worth entering if selection is unlikely?

Yes, because the syllabus is the ordinary working knowledge of the field. A student who prepares and is not selected has still learned the thing that lasts.

### What do classes cost?

The first lesson is free. A group place is then USD 100 a month and one-to-one teaching USD 150, with nothing to pay to register.

Related pages

## Other routes for a computing student

The algorithms olympiad, the coding contests, and the whole season in a table.

### [British Informatics Olympiad](/british-informatics-olympiad-preparation)

Three hours, three questions, no libraries.

### [Perse Coding Team Challenge](/perse-coding-team-challenge-preparation)

Teams of three, hidden tests, January and March.

### [National Cipher Challenge](/national-cipher-challenge-preparation)

Ten challenges, and a rule against using AI.

### [UK competitions calendar 2026-27](/uk-coding-maths-and-ai-competitions-calendar)

Every competition we could confirm, laid out by month.

### [AI and machine learning classes in the UK](/ai-and-machine-learning-classes-in-uk)

The subject itself, taught from the beginning.

### [Coding classes in the UK](/coding-classes-in-united-kingdom)

The four school systems, and every UK page.

Start here

## Book a free AI lesson

Tell us the year group and what your child has already built. The free lesson trains something small and real, and we say afterwards what we saw.

Rather read first? Syllabuses sit on the [course pages](/courses), the method on [how we teach](/how-we-teach), and the topic order on the [roadmap](/coding-roadmap).

[WhatsApp us](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20my%20child%20wants%20to%20enter%20the%20UK%20Olympiad%20in%20AI%20and%20I%20would%20like%20a%20free%20class.) · [+91 91233 66161](tel:+919123366161) · [connect@modernagecoders.com](mailto:connect@modernagecoders.com)

WhatsApp usually gets an answer fastest and is free from a UK mobile. Our number is registered in India, which we state openly, and there is no UK office behind it.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/uk-olympiad-in-artificial-intelligence-preparation*
