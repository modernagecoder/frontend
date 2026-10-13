---
title: "CBSE Class 10 AI Board Exam Preparation | Theory and Practical"
description: "CBSE Class 10 AI (417) board exam preparation: the 50-mark theory paper, marks-weighted revision, worked answers, the two-phase board system and a countdown."
canonical: https://learn.modernagecoders.com/cbse-class-10-ai-board-exam-preparation
source: src/pages/cbse-class-10-ai-board-exam-preparation.html
---
> CBSE Class 10 AI (417) board exam preparation: the 50-mark theory paper, marks-weighted revision, worked answers, the two-phase board system and a countdown.

Start here

## The courses behind this preparation

The 417 batch, the other Class 10 board paper families most often pair with it, and the depth course for students who want the modelling units properly.

[![CBSE Computational Thinking and AI for Teens course thumbnail](/images/ct-ai-teens.webp)  The paper / 417 Class 10 batch CBSE AI for Class 9 to 12 The batch this preparation plan runs inside: theory on Mondays, practical on Wednesdays, three reviewed mocks and a dress rehearsal before the school practical. Open the syllabus →](/courses/cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843)[![CBSE Class 10 Maths board exam prep course thumbnail](/images/cbse-class-10-maths.webp)  The other paper / Class 10 maths CBSE Class 10 Maths Board preparation for the maths paper on the same principles: marks-weighted revision, timed mocks reviewed line by line, small live batches. Open the syllabus →](/courses/cbse-class-10-maths-board-exam-prep-course)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)  The heavy units / depth AI and ML for Teens Modelling and evaluation are 21 marks of the paper; this course teaches them the way engineers learn them, which makes the board questions feel easy. Open the syllabus →](/courses/ai-ml-masterclass-teens)

Ans. The short version

To prepare for the CBSE Class 10 AI (417) board exam, revise by marks: the 50-mark theory paper gives 21 marks to modelling and evaluation, eight to NLP, seven to the project cycle and ethics, four to computer vision, and ten to Part A's short employability answers, while the 50-mark practical, file, practical exam, project and two vivas, is assessed by the school before the theory paper. From 2026 CBSE holds Class 10 boards in two phases, a compulsory February to March exam and an optional May improvement exam framed around the main subjects. Modern Age Coders runs this preparation live in a Monday and Wednesday 9 PM batch: weighted revision, three reviewed mocks, a practical dress rehearsal and an eight-week countdown.

Q1. What does the theory paper look like?

## Fifty marks, two parts, and the question shapes that fill them

The marks scheme is fixed by the curriculum; the question shapes come from CBSE's sample papers. Read both before revising a single page.

### The fixed part: where the 50 marks come from

Part A, employability skills, is ten marks: five units, two marks each, on communication, self-management, ICT, entrepreneurial and green skills. Part B, the AI units, is forty marks: seven for the project cycle and ethical frameworks, eleven for advanced modelling, ten for evaluating models, four for computer vision and eight for natural language processing. Statistical Data and Advance Python carry no theory marks; they live in the practical half.

Two facts fall out immediately. Modelling plus evaluation is 21 of 50, more than two fifths of the paper from two conceptual units. And Part A is a fifth of the paper from material most students have never revised, which makes it the cheapest ten marks in the exam.

### The variable part: how CBSE asks

CBSE publishes a sample question paper and marking scheme for 417 every session on its academic website, and that document is the authority on the year's exact question count and split. What stays stable across sessions is the family of shapes: objective one-mark questions that reward precise vocabulary, two-mark short answers that reward definitions with an example, and longer questions, often case-based, that describe a scenario and ask the student to scope it, place it in the project cycle, build or read a confusion matrix, or choose and justify a metric.

The longer questions are where grades separate. They cannot be answered from a memorised paragraph, and they are the reason our Monday sessions teach the modelling and evaluation units as ideas rather than as lists.

Q2. How should revision time be divided?

## The weighted revision plan: hours follow marks

Take whatever revision time exists in the final two months and split it in the proportions below. The last column says how secure each unit's marks are once revised, which is the other half of the calculation.

| Unit | Theory marks | Share of revision | How to revise it |
| --- | --- | --- | --- |
| Advanced Concepts of Modeling in AI | 11 |   | Redraw the model tree from memory; place ten described problems on it |
| Evaluating Models | 10 |   | Compute metrics from six confusion matrices by hand; justify the metric each time |
| Part A: employability skills | 10 |   | Short-answer drills from the sample paper; two marks per unit, no essays |
| Natural Language Processing | 8 |   | Bag of words and TF-IDF by hand on fresh sentences; stages of NLP as a list |
| Revisiting AI Project Cycle and Ethical Frameworks | 7 |   | Scope three unseen problems end to end; one bioethics case study cold |
| Computer Vision | 4 |   | Pixels, resolution, grayscale versus RGB, what a convolution does: one evening |
| Theory paper | 50 |   | Plus three timed mocks, each reviewed question by question |

Half the revision time goes to two units, and that is the correct decision, not a lazy one: those two units carry the most marks and the most application-style questions, and they are the ones students think they know because the vocabulary is familiar. Part A gets less time than its marks suggest because its questions are short and predictable, which is exactly why it should never be skipped. Computer Vision gets an evening, because four marks is four marks.

The practical half is not on this table because it should be finished before this table begins. The file, project and vivas have their own plan on [the project and practical file page](/cbse-class-10-ai-project-and-practical-file), and the full unit contents are on [the syllabus explained](/cbse-class-10-ai-syllabus-explained).

Q3. What does a full-marks answer look like?

## One four-mark question from Evaluating Models, answered two ways

A spam filter was tested on 100 emails. It correctly flagged 40 spam emails, wrongly flagged 10 genuine emails as spam, missed 5 spam emails, and correctly passed 45 genuine emails. Find accuracy, precision, recall and F1 score, and comment on which metric matters most here.

***The one-mark answer**what most students write*

```
Accuracy = correct / total
         = (40 + 45) / 100
         = 85%

The model is 85% accurate,
so it is a good model.

# One metric, no matrix, no reasoning
# about the question's last sentence.
# Typically one mark out of four.
```

Accuracy is right, and it is the least informative of the four. The question told the student that two kinds of mistake exist and asked which matters; this answer never noticed.

***The four-mark answer**what the marking scheme rewards*

```
Confusion matrix
TP = 40   FP = 10
FN = 5    TN = 45

Accuracy  = (TP+TN)/total = 85/100 = 0.85
Precision = TP/(TP+FP)   = 40/50  = 0.80
Recall    = TP/(TP+FN)   = 40/45  = 0.889
F1 = 2 x P x R / (P + R)
   = 2 x 0.80 x 0.889 / 1.689 = 0.842

Which matters: a false positive sends a
genuine email to spam, which the user may
never see. Precision (0.80) is the metric
to improve here, even at some cost to recall.
```

Matrix, four metrics with working, and a judgement tied to the scenario. Each part earns marks independently, so even an arithmetic slip leaves most of the four intact.

Everything separating the two answers is method, and method is teachable in weeks: draw the matrix first, write each formula before substituting, and always answer the last sentence of the question, because in 417 the last sentence is usually where the judgement mark lives. Monday sessions in our batch run this drill on fresh scenarios until students do it without being asked.

Q4. What has changed about the board exam itself?

## The two-phase system, and what it does and does not mean for AI

### Phase one, compulsory

From 2026, every Class 10 student sits the main board exam in February to March; in 2026 it ran from 17 February to 9 March. This is the exam the whole year builds toward, and for the AI paper it is preceded by the school's 50-mark practical assessment, which is why the file and project cannot wait.

### Phase two, optional

A second exam in May, 15 May to 1 June in 2026, lets a student improve marks in a limited number of subjects, with the better score recorded. It is a second chance, not a second syllabus, and preparing as if it is the real attempt is how students waste it.

### Where AI fits

CBSE framed the improvement phase around the main subjects, so whether a skill subject like AI can be re-attempted is a question for your school for the current session. Plan on one attempt for 417: get the practical marks banked early and the theory paper right the first time.

One consequence of the new calendar is easy to miss. With phase one in February, the useful revision window closes earlier than families used to assume, and the school practical sits inside it. The countdown below is built around that: the practical half is closed by December so that January and February belong entirely to the theory paper.

Q5. What do the last eight weeks look like?

## The countdown we run, from the first mock to the paper

Assumes the file and project are already done. If they are not, that is the first fortnight, and everything below moves right.

1. #### Weeks 8 and 7: the diagnostic mock, then the heavy units

  A full 50-mark paper under time before any revision, so the marks lost show where to spend the weeks. Then modelling and evaluation get both Monday sessions and most of the home hours, because they carry 21 marks and the diagnostic almost always confirms they are where the losses are.
2. #### Weeks 6 and 5: NLP, project cycle and ethics, and the first Part A drill

  Bag of words and TF-IDF by hand until automatic, the stages of NLP as a list, three unseen problems scoped end to end, one bioethics case written cold. Part A begins as a ten-question drill at the end of each session, two marks per unit, no essays.
3. #### Week 4: the second mock and its review

  Full paper, timed, then the review that matters: every lost mark re-attempted on the spot the following Monday. Students see the gap between mock one and mock two, which is the single most motivating number in the whole year.
4. #### Weeks 3 and 2: Computer Vision, Part A finished, weak spots by name

  Computer Vision in one evening, four marks secured. Part A completed as a set of practised short answers. Then a list, per student, of the specific question types still losing marks, and those get the remaining Monday time, nothing else.
5. #### Week 1: the third mock, and then stop revising new things

  The final full paper, reviewed. After it, the rule is maintenance only: the model tree redrawn once a day, one confusion matrix a day, ten Part A answers, sleep. New material in the last week costs more marks than it earns.

Q6. Where are marks actually lost?

## Six errors that cost capable students a grade in 417

### Precision and recall swapped

The formulas are similar enough that a nervous student transposes them. The fix is not more memorising; it is drawing the confusion matrix every single time and reading each metric off it, which makes the swap physically hard to make.

### Part A abandoned

Ten marks left to chance because the employability units feel like padding. They are short, predictable and two marks each, and the students who lose them are usually the ones who would have scored a distinction with them.

### Writing Python in the theory paper

No Python is examined in theory, and a code block where a concept was asked earns nothing. The paper wants the idea behind the program, in words; the program belongs in the practical file.

### Ignoring the last sentence

Case-based questions end with a judgement: which metric, which domain, which ethical concern. Students answer the calculation and skip the judgement, leaving the mark that separates a good answer from a full one on the table.

### Revising by chapter count

Equal time to seven units gives Computer Vision as much attention as modelling, which is a four-mark unit treated like an eleven-mark one. The weighted table above exists because this error is the most common and the most invisible.

### Practical left to January

The school practical sits before the theory paper, so a file finished in January collides with theory revision. Every hour spent on the file in January is an hour taken from the 21-mark units, which is a bad trade at any exchange rate.

Q7. What does it cost?

## Monthly fees, the same for every course we teach

No board-prep premium: the batch is priced like everything else, monthly, with no admission fee and the option to stop at any month end. The free demo includes a short diagnostic.

Group batch · Mon and Wed 9 PM

₹1,499

per month

- Ten to fifteen students, one teacher all year
- Three timed theory mocks, each reviewed
- Practical dress rehearsal and viva practice
- Certificate on completion

Book the free demo

Mini batch

₹2,999

per month

- Four to five students
- Other timings than the Monday and Wednesday batch
- Mock reviews with more time per student

Ask about timings

One to one

₹4,999

per month

- Private teaching on your own schedule
- The countdown compressed to the weeks left
- The honest choice for a start after November

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

The rest of the Class 10 series

## Nine more pages for Class 10 board students

Four more on CBSE AI 417, and five on the ICSE Computer Applications paper for families on the other board.

[The Mon and Wed 9 PM batch/cbse-class-10-ai-classes-online](/cbse-class-10-ai-classes-online)[The 417 syllabus explained/cbse-class-10-ai-syllabus-explained](/cbse-class-10-ai-syllabus-explained)[Python for Class 10 AI/python-for-cbse-class-10-ai](/python-for-cbse-class-10-ai)[Project and practical file/cbse-class-10-ai-project-and-practical-file](/cbse-class-10-ai-project-and-practical-file)[ICSE Class 10 Java classes/icse-class-10-java-classes-online](/icse-class-10-java-classes-online)[ICSE Computer Applications syllabus/icse-class-10-computer-applications-syllabus-explained](/icse-class-10-computer-applications-syllabus-explained)[ICSE Java programs practice/icse-class-10-java-programs-practice](/icse-class-10-java-programs-practice)[ICSE BlueJ Java coaching/icse-class-10-bluej-java-coaching](/icse-class-10-bluej-java-coaching)[ICSE board exam preparation/icse-class-10-computer-applications-board-exam-preparation](/icse-class-10-computer-applications-board-exam-preparation)

Questions about the board exam

## What families ask as the paper approaches

### What is the structure of the CBSE Class 10 AI theory paper?

Fifty marks in total: Part A, employability skills, contributes ten marks from five units at two marks each, and Part B, the AI units, contributes forty, weighted seven, eleven, ten, four and eight across the project cycle and ethics, modelling, evaluation, computer vision and NLP units. CBSE publishes a sample question paper and marking scheme for 417 each session on its academic site, and that document, not any coaching summary, is the authority on the exact question count and shapes for the year your child sits.

### When is the practical exam held relative to the theory paper?

The school conducts the 50-mark practical assessment, file, practical examination, vivas and project, in the weeks before the theory paper, on a schedule the school announces. That ordering matters for planning: the practical file and project must be finished before the final theory revision begins, or the two collide in January. Our batch closes the file and project by the end of December for exactly this reason.

### How does the two-phase board exam system work?

From 2026, CBSE holds Class 10 board exams twice: a compulsory first phase in February to March, and an optional second phase in May for students who want to improve marks in a limited number of subjects, with the better score recorded. In 2026 the phases ran from 17 February to 9 March and from 15 May to 1 June. CBSE has framed the improvement exam around the main subjects, so whether a skill subject like AI can be re-attempted is a question to put to your school for the current session.

### Which units should get the most revision time?

Follow the marks. Advanced Concepts of Modeling and Evaluating Models are 21 of the 50 theory marks between them and both reward understanding over memory, so they get the largest share. Natural Language Processing carries eight, the project cycle and ethics unit seven, Computer Vision only four. Part A is ten marks of short answers that a few hours of focused practice secures. Revising by chapter count instead of by marks is the most common way capable students underperform in 417.

### Are the questions memory-based or application-based?

Increasingly application-based, in line with CBSE's move toward competency-focused questions across Class 10. In 417 that shows up as scenarios: a described problem to scope and place in the project cycle, a confusion matrix to build and read, a metric to choose and justify. Definitions still earn marks, but the four-mark questions are where grades separate, and they are answered by students who can do the thing, not recite it.

### Is a coaching batch worth it if school already prepares students?

School delivers the syllabus and conducts the practical, and for many students that is enough for a pass. A batch changes two things: the modelling and evaluation units get taught for understanding at a depth school periods rarely have time for, and the practical file, project and vivas are built across the year with someone checking. Families choose the batch for the difference between a pass and a distinction, and we say plainly on the free demo whether that gap exists for a particular child.

### How do you run mock exams?

Three full theory papers under time in the final two months, each reviewed question by question the following Monday, plus monthly timed practical mocks on unseen programs from the second term. The reviews are the point: a mock that is marked and returned teaches little, while a mock in which the student re-attempts every lost mark on the spot teaches a great deal. Students see their marks climb across the three papers, which is also the best cure for exam nerves we know.

### My child is strong in Python but weak in theory. What changes?

The balance of their week. Practical marks are secured early for such a student, so from November their Monday time shifts toward the two heavy theory units and the case-based question shapes, with the Wednesday lab kept only as maintenance. The reverse profile, strong on theory and anxious about Python, gets the opposite tilt. Ten to fifteen students per batch is what makes that per-student tilt possible.

### What does the board preparation batch cost?

The same monthly figures as every course we run, with no separate board-prep premium: the fee is shown on this page in your own currency for the group batch, the mini batch and one to one. Monthly billing, no admission fee, and the first class is a free demo that includes a short diagnostic on where your child stands against the marks ledger.

### How late is too late to join for this year's boards?

For the group batch, joining after the first term means catching up on file programs, which is doable with the catch-up slots we run until about October. From November, one to one is the honest recommendation, because a private schedule can compress the file and project into the weeks that remain while the group batch is already in its mock phase. Whichever it is, the free demo tells you what is realistic for the months left.

Start

## The free demo includes a diagnostic

Before the demo, your child attempts a short set of questions drawn from the weighted table above, one per unit, so the session begins with a real picture of where marks are being lost rather than a guess. The teacher then works one of those questions live, usually the confusion matrix, the way the four-mark answer on this page works it. You leave with a marks map for your child and an honest read on whether a batch, a mini batch or one to one fits the months that remain.

Reading further first? The [syllabus explained](/cbse-class-10-ai-syllabus-explained) holds every unit's contents, and the [batch page](/cbse-class-10-ai-classes-online) describes the Monday and Wednesday rhythm the countdown runs inside.

[WhatsApp us](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders.%20I%20want%20board%20exam%20preparation%20for%20CBSE%20Class%2010%20AI%20417.) · [+91 91233 66161](tel:+919123366161) · [connect@modernagecoders.com](mailto:connect@modernagecoders.com)

Every class is live video. The form requests a callback and reserves nothing.

---

*Canonical: https://learn.modernagecoders.com/cbse-class-10-ai-board-exam-preparation*
