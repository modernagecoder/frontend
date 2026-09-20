---
title: "UK Olympiad in AI Preparation | UKOAI and the Route to IOAI"
description: "Preparing for the UK Olympiad in Artificial Intelligence: a free three-hour exam for UK secondary students, PyTorch and transformers, and the route to the IOAI team."
canonical: https://learn.modernagecoders.com/uk-olympiad-in-artificial-intelligence-preparation
source: src/pages/uk-olympiad-in-artificial-intelligence-preparation.html
---
> The UK Olympiad in Artificial Intelligence says that "all secondary school students living in the UK are invited to take the free online UKOAI exam". The exam "consists of three long-form questions that test programming and mathematical ability in deep learning", with three hours to complete and submit it, and the published syllabus expects Python, PyTorch, machine learning, deep learning, transformers and word embeddings. High scorers go to video interviews and then a training camp, from which "four participants will be selected" to represent the UK. The international olympiad describes itself as "the International Science Olympiad in Artificial Intelligence for high school students", and its own site gives the 2026 edition as Astana, Kazakhstan, from 2 to 8 August, and the 2027 edition as Singapore, 4 to 10 July. We teach the Python and the machine learning underneath. A first class is free; a group place is USD 100 a month and one-to-one teaching USD 150.

[Home](/) / [Courses](/courses) / [UK competitions calendar](/uk-coding-maths-and-ai-competitions-calendar) / UK Olympiad in AI

United Kingdom · Secondary school students · Free online exam

# UK Olympiad in AI preparation

Most olympiads test a way of thinking. This one tests a toolkit. The UK Olympiad in Artificial Intelligence is a free online exam open to every secondary school student living in the UK, it lasts three hours, and it contains three long-form questions on programming and mathematics in deep learning, with a syllabus that names Python, PyTorch, machine learning, transformers and word embeddings. There is no version of this that a bright student improvises on the day, and that is the useful thing about it: what to learn is written down, and a student with a year can learn it.

At a glance: Organiser: The UKOAI committee; Open to: Secondary students living in the UK; Cost: Free; Exam: Three long-form questions; Length: Three hours; Expects: Python, PyTorch, transformers; Then: Interviews, then a training camp; Team: Four, for the international olympiad. Rated 4.9 across 547 Google reviews.

## Three courses for a UKOAI candidate

The syllabus is public, so the honest question is which part of it a student is missing.

- [AI and machine learning for teens](/courses/ai-ml-masterclass-teens): The core: what a model is, how it is trained, and how to tell whether it has learned anything.
- [Python from start to finish](/courses/python-complete-masterclass-teens): Before any of the rest. A three-hour exam is no place to be looking up how a loop works.
- [Data science with Python](/courses/data-science-course-for-teens-python-data): Arrays, data handling and the honest evaluation of a result, which is half of what a long-form question asks for.

## Three questions, three hours, and a named syllabus

Facts read at the organisers' own pages on 20 September 2026.

**The UK Olympiad in AI as its organisers describe it**

| Part | What the organiser says | What it means for a student |
|---|---|---|
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

## Why deep learning costs what it costs

A student who understands one piece of arithmetic will understand most of the practical decisions in the field. We ran it in plain Python, with no libraries, so the numbers are ours.

Almost everything a neural network does is multiplying matrices. Multiplying two n by n matrices takes n cubed multiply-and-add operations, which sounds abstract until you watch the clock. We wrote the three nested loops by hand and timed them.

**Our run of 20 September 2026: plain Python, no libraries**

| Matrix size | Multiply-adds | Time taken | Against the previous row |
|---|---|---|---|
| 50 by 50 | 125,000 | 0.012 seconds | &mdash; |
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

## Exam, interview, camp, team of four

The selection route is longer than most olympiads, and the last stage is not a paper.

**From an open exam to a national team**

| Stage | What happens | Notes |
|---|---|---|
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

## Four rungs to a syllabus that names its tools

A student moves up when they have built the thing, not when they have read about it.

**From Python to a trained model**

| Stage | Rung | The sign it is secure |
|---|---|---|
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

## Courses on the UKOAI syllabus

Arranged by which part of the published syllabus a student still needs.

### The language

Before anything else

- [Python from start to finish](/courses/python-complete-masterclass-teens): Fluency, so the exam is not spent on syntax.
- [Python and AI for kids](/courses/python-ai-kids-masterclass): The younger route into the same language.
- [Algorithms and data structures](/courses/problem-solving-dsa-masterclass-teens): Counting operations, which this exam rewards.

### Machine learning

The named syllabus

- [AI and machine learning for teens](/courses/ai-ml-masterclass-teens): Models trained, evaluated and understood.
- [Data science with Python](/courses/data-science-course-for-teens-python-data): Arrays, data and honest evaluation.
- [Statistics and probability](/courses/statistics-probability-maths-course): The mathematics the long-form questions lean on.

### The mathematics

Underneath the tools

- [High school mathematics](/courses/complete-high-school-mathematics-mastery): Algebra and calculus at the pace this needs.
- [A-level maths](/courses/a-level-maths-course-pure-mechanics-statistics): The qualification running alongside.
- [Olympiad and competition maths](/courses/olympiad-competition-mathematics-mastery): Problem solving that transfers to any olympiad.

### Building with it

Beyond the exam

- [Full stack web development](/courses/full-stack-web-development-teens-masterclass): Somewhere to put a model once it works.
- [Competitive programming](/courses/competitive-programming-for-teens-course): Writing correct code against a clock.
- [GCSE Computer Science](/courses/gcse-computer-science-course): The exam running underneath, board by board.

## Weekly sessions where something gets trained

Teaching is live on video from India, five and a half hours ahead of the UK in winter and four and a half in summer, at a time agreed and kept in UK time.

- **Weekday evening** The usual slot for Years 10 to 13.
- **Weekend morning** Long enough to train and evaluate something properly.
- **Holiday intensives** For the winter run-up to a March exam.

- **Models actually trained** Every idea arrives as something the student runs, not as a slide about it.
- **Arithmetic first** We count the operations before we admire the results, because that is what an exam answer needs.
- **Five to ten students** Enough for two designs to be compared, small enough for every notebook to be looked at.
- **Our own datasets** Written or chosen by us. No olympiad task is reproduced in a lesson.
- **One to one when useful** For a student well ahead of their year or preparing for an interview stage.
- **Nothing promised** We cannot influence selection and promise no score, invitation or place.

## Fees

A monthly fee in US dollars, identical in every country but India, with no registration charge and no tie-in.

- Free first class: USD 0. A proper lesson with a subject teacher. A frank view of what is missing. No payment details requested.
- Group batch: USD 100 a month. Five to ten students at one level. The same teacher weekly. Notebooks read and discussed. A certificate at the end.
- One to one: USD 150 a month. A teacher working with one student. Shaped around the gap in the syllabus. Useful before an interview stage.

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

## Other routes for a computing student

- [British Informatics Olympiad](/british-informatics-olympiad-preparation): Three hours, three questions, no libraries.
- [Perse Coding Team Challenge](/perse-coding-team-challenge-preparation): Teams of three, hidden tests, January and March.
- [National Cipher Challenge](/national-cipher-challenge-preparation): Ten challenges, and a rule against using AI.
- [UK competitions calendar 2026-27](/uk-coding-maths-and-ai-competitions-calendar): Every competition we could confirm, laid out by month.
- [AI and machine learning classes in the UK](/ai-and-machine-learning-classes-in-uk): The subject itself, taught from the beginning.
- [Coding classes in the UK](/coding-classes-in-united-kingdom): The four school systems, and every UK page.

## Contact

Book the free first class at [https://learn.modernagecoders.com/uk-olympiad-in-artificial-intelligence-preparation](https://learn.modernagecoders.com/uk-olympiad-in-artificial-intelligence-preparation#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email contact@modernagecoders.com.
