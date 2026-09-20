---
title: "A-Level Computer Science NEA Help | AQA 7517 and OCR H446"
description: "Help with the A-level Computer Science project: what AQA and OCR mark, how to scope and design it, and the AI rules. We never write any of your coursework."
canonical: https://learn.modernagecoders.com/a-level-computer-science-nea-help
source: src/pages/a-level-computer-science-nea-help.html
---
> At AQA, A-level Computer Science 7517 is marked out of 375 scaled marks: two papers of 100 raw marks each, scaled to 150, and the non-exam assessment at 75, with AQA's guidance putting 42 of the 75 on the technical solution. At OCR, H446 has two papers of 140 marks each, 2 hours 30 minutes and 40 per cent apiece, and the programming project, H446/03, at 70 marks and 20 per cent, split into analyse a problem (10 marks), design (15), develop and test (25) and evaluate and document (20). Both reward evidence of thinking, not just a working program. The commonest mistake is scope, and the fix is to design the states of the program before writing it. On AI, OCR is explicit that only independent candidate work should be credited. Our classes teach the programming, design and testing behind the project, and never produce any part of it. The opening lesson costs nothing, and after it a group place runs at USD 100 monthly, private teaching at USD 150.

[Home](/) / [Courses](/courses) / [Coding classes in the UK](/coding-classes-in-united-kingdom) / A-level Computer Science NEA

United Kingdom · AQA 7517 and OCR H446 · Live online

# A-level Computer Science coursework help

The programming project is the part of A-level Computer Science that students remember, and the part that goes wrong quietly. It is worth a fifth of the qualification, it runs for months with no exam hall to concentrate the mind, and the most common failure is not a lack of skill: it is a project that was too big to finish, designed in the writing rather than before it. This page sets out exactly what AQA and OCR give marks for, shows a design method that makes a project finishable, and quotes what the boards say about using AI, because that question now comes up in every first conversation. We teach the skills the project needs. We never write, edit or supply any part of anyone's coursework.

At a glance: Boards: AQA 7517, OCR H446; Weight: A fifth of the A level; AQA marks: 75, with 42 for the solution; OCR marks: 70, in four sections; Runs for: Months, in school time and out; AI: Allowed narrowly, and declared; We provide: Teaching and review of skills; We never: Write or edit the project. Rated 4.9 across 547 Google reviews.

## Three courses for A-level programmers

Most students need fluency, structure and testing, in that order.

- [Python from start to finish](/courses/python-complete-masterclass-teens): When the obstacle is the language and not the idea: files, classes, error handling and how to lay a program out.
- [Algorithms and data structures](/courses/problem-solving-dsa-masterclass-teens): Paper 2 ground, and the source of anything in a project worth analysing or evaluating.
- [Full stack web development](/courses/full-stack-web-development-teens-masterclass): For projects with a database and an interface: how the parts fit and where the data lives.

## Where the marks actually are, at AQA and OCR

Two boards, two structures, one common message: the program is not the whole of it. Figures read at each board's own specification pages on 20 September 2026.

**A-level Computer Science assessment, as each board publishes it**

| Board | Components | The project |
|---|---|---|
| AQA 7517 | Paper 1 and Paper 2, each 100 raw marks scaled to 150; NEA 75 marks unscaled; total 375 scaled marks | A computing practical project; AQA's guidance puts 42 of the 75 marks on the technical solution, the rest on the documentation |
| OCR H446 | Component 01 Computer systems, 140 marks, 2 hours 30 mins, 40 per cent; Component 02 Algorithms and programming, 140 marks, 2 hours 30 mins, 40 per cent | Component 03 Programming project, 70 marks, 20 per cent: analyse a problem (10 marks), design (15 marks), develop and test (25 marks), evaluate and document (20 marks) |

Read the OCR split slowly, because it settles most arguments about how to spend the autumn. Analysis and design together are worth 25 of the 70 marks, the same as developing and testing the program. A student who codes for three months and writes the documentation in the last fortnight is competing for half the paper with a quarter of the effort in the wrong place.

AQA weights the solution more heavily, 42 of 75, but the remaining 33 marks are still a third of the project and they are the ones lost by silence: no analysis of a real user, no design that anyone could follow, no evaluation against the original criteria.

Both boards want evidence of a process, not a finished artefact dropped on the desk. That is why scope matters more than ambition. A modest program, analysed with a real user, designed clearly, tested against its own criteria and evaluated honestly, outscores a half-built ambitious one every time.

Neither board is in the business of surprises: the criteria are published, and a student who reads them in September writes a different project from one who reads them in March.

Sources: [AQA, A-level Computer Science 7517 scheme of assessment](https://www.aqa.org.uk/subjects/computer-science/a-level/computer-science-7517/specification/scheme-of-assessment) and its [NEA subject content](https://www.aqa.org.uk/subjects/computer-science/a-level/computer-science-7517/specification/subject-content/non-exam-assessment-the-computing-practical-project); [OCR, H446 specification at a glance](https://www.ocr.org.uk/qualifications/as-and-a-level/computer-science-h046-h446-from-2015/specification-at-a-glance/). Read 20 September 2026. Modern Age Coders is not connected with AQA or OCR.

## Draw the states before you write the code

Most unfinished projects are not short of programming. They are short of a design that says what the program does in every situation, so the writing never ends.

### 1. List the states

What is the program doing at any moment? A quiz app might sit in five: waiting to start, showing a question, showing feedback, between rounds, and finished. Write them down before anything else.

### 2. List the events

What can happen? An answer submitted, a timer expiring, a back button, a lost connection. Four events across five states makes a grid of twenty squares.

### 3. Fill every square

For each state and each event, say what happens next. The squares nobody thinks about, a timer expiring on the finished screen, a back button mid-question, are exactly where finished projects break.

**A worked illustration: a five-state quiz project, four events, twenty transitions to decide**

| State | Answer submitted | Timer expires | Back pressed |
|---|---|---|---|
| Waiting to start | Not possible: ignore it and say so in the design | Not possible | Leave the quiz |
| Showing a question | Mark it, go to feedback | Count as wrong, go to feedback | Confirm, then leave |
| Showing feedback | Ignore: the answer is already marked | Move to the next question | Confirm, then leave |
| Between rounds | Ignore | Start the next round | Leave the quiz |
| Finished | Ignore | Ignore: no timer runs here | Return to the start |

That table is a state machine, and it is worth more than it looks. It is design evidence a marker can follow, it is a test plan in disguise, because each row becomes a test, and it puts a hard edge around the project: twenty decisions, all made, nothing left to invent at midnight in February.

It also stops the commonest scope failure. Each new feature adds a state or an event, and the grid grows by a row or a column. A student can see the cost of an idea before agreeing to it.

The same habit answers the evaluation section. When a project is described as a set of states and transitions, the evaluation writes itself: which transitions work, which were cut, what a user did that the design did not expect.

Students who prefer flowcharts or pseudocode can keep them. The point is that every combination of state and event has an answer decided in advance, in a form someone else can read.

## What the boards say about AI in the project

Every family asks this, so here is the answer from an exam board rather than from us. The quotes below are OCR's own guidance for the A Level Computer Science project.

**OCR's guidance on AI in the A Level Computer Science NEA**

| Question | What OCR says |
|---|---|
| Can AI be used at all? | AI tools may be used to support debugging, and could also be used to suggest ideas and methods to troubleshoot non-functional code |
| Can it suggest code? | A candidate may ask how a method or object could be written, but must show clearly how this suggestion has been adapted to suit their project |
| What counts as misuse? | Using or modifying AI responses without acknowledgement, disguising the use of AI, and using it for substantial sections of work |
| What gets the marks? | Only independent candidate work should be credited when marking the NEA |
| What must be kept? | A copy of the AI content in a non-editable format, such as a screenshot, with an explanation of how it was used |
| What do teachers watch for? | Sudden changes in work production, changes in coding style and very erratic work rates |

undefined

undefined

## When to do what, across the project year

Dates vary by school, since teachers set internal deadlines. The order does not.

**A sensible order for the project year**

| Stage | What happens | The trap to avoid |
|---|---|---|
| Choosing | Find a real user with a real problem, small enough to finish | A project chosen because it sounds impressive |
| Analysis | Interview the user, write criteria that can be tested later | Criteria so vague that nothing can fail them |
| Design | States, events, data structures and interfaces on paper | Designing in the code and writing it up afterwards |
| Development | Build in slices, each one tested and recorded | One long unbroken sprint with no evidence |
| Testing | Test against the criteria, including the cases you expect to fail | Screenshots that only show things working |
| Evaluation | Judge the project against its own criteria and the user's view | A conclusion that says it went well |

undefined

## Four rungs to a project that finishes

Where a student starts depends on their programming, not their year group.

**From confident coder to completed project**

| Stage | Rung | The sign it is secure |
|---|---|---|
| Year 11 to 12 | 1. Fluency | Can write and debug a program of a few hundred lines without help |
| Year 12 | 2. Structure | Splits a program into functions, classes and files that make sense to someone else |
| Year 12 into 13 | 3. Design | Can state every state and event of a planned program before coding |
| Year 13 | 4. Evidence | Tests against written criteria and records what changed and why |

### If the project is stuck

Stalled projects are usually too big. Cutting features is not failure; the boards reward a finished, well-evidenced small project over an unfinished ambitious one.
Paper 2 practice often unsticks a project, because the algorithms it teaches are the ones a project needs.

### Beyond the A level

The habits here, design before code and evidence as you go, are what university projects and first jobs expect.
Students who enjoy the problem-solving side often try the [British Informatics Olympiad](/british-informatics-olympiad-preparation).

## Nine courses for A-level Computer Science students

Sorted by the thing that usually gets in the way. Syllabuses open from the cards.

### Programming fluency

The language stops getting in the way

- [Python from start to finish](/courses/python-complete-masterclass-teens): Every core idea, with prediction before running.
- [Java for teens](/courses/java-programming-masterclass-for-teens): For schools and students working in Java.
- [App development](/courses/complete-app-development-masterclass-for-teens): Interfaces, events and state, which projects lean on heavily.

### Theory and algorithms

Paper 1 and Paper 2 ground

- [Algorithms and data structures](/courses/problem-solving-dsa-masterclass-teens): Searching, sorting, trees and graphs, reasoned before coded.
- [GCSE Computer Science](/courses/gcse-computer-science-course): For students who came to the A level without the GCSE.
- [Competitive programming](/courses/competitive-programming-for-teens-course): Speed and correctness under time limits, which sharpens paper 2.

### Building real systems

Databases, web and data

- [Full stack web development](/courses/full-stack-web-development-teens-masterclass): A site with its own database, built in slices and tested.
- [Data science with Python](/courses/data-science-course-for-teens-python-data): For projects that analyse data rather than manage it.
- [AI and machine learning for teens](/courses/ai-ml-masterclass-teens): When the project needs a trained model, and an honest account of how well it works.

## Weekly teaching, and a clear line around the coursework

Lessons run on video with a teacher in India, where the clock sits five and a half hours ahead of Britain in winter and four and a half in summer. Sixth formers generally settle on an evening, written into the diary in UK time.

- **Weekday evening** The usual choice for Year 12 and Year 13.
- **Weekend morning** For longer sessions on algorithms or a full past paper.
- **Holiday intensives** For catching up on paper 1 and paper 2 content.

- **Skills, not solutions** We teach programming, design and testing with our own examples, never with the student's project code.
- **Design taught explicitly** States, events, data models and interfaces, practised on projects that are not the student's own.
- **Papers practised** Algorithms, data structures, systems and the written technique both papers reward.
- **Groups of a size that works** Between five and ten students of similar ability, arguing over the same question until the method is clear.
- **One to one when needed** For a student with a gap to close before a mock or a deadline.
- **No promises** No grade is promised, and nothing we do forms part of an assessed submission.

## Fees

Monthly, in US dollars, the rate for every country outside India. No joining fee, no annual tie.

- Free first class: USD 0. A real lesson with a teacher. An honest view of the gaps. No card details.
- Group batch: USD 100 a month. Five to ten students at one level. The same teacher each week. Work read and discussed. A certificate at the end.
- One to one: USD 150 a month. A teacher for one student. Aimed at specific gaps. Useful before mocks and deadlines.

## What A-level students and parents ask

### How much is the programming project worth?

A fifth of the A level at both boards. At AQA it is 75 of 375 scaled marks; at OCR it is 70 marks, 20 per cent of H446.

### How are the OCR project marks split?

OCR publishes the split as analyse a problem (10 marks), design (15 marks), develop and test (25 marks) and evaluate and document (20 marks).

### How much of the AQA project is the program itself?

AQA's guidance allocates 42 of the 75 marks to the technical solution, with the rest across the documentation.

### Will you help write my NEA?

No. We teach the programming, design and testing skills the project needs, and we do not write, edit, debug or review coursework that will be submitted. Only independent candidate work can be credited.

### Can my child use AI for the project?

Within limits their board sets. OCR says AI tools may support debugging and suggest how a method could be written, provided the candidate shows how the suggestion was adapted, keeps a non-editable copy of the AI content, and acknowledges it. Using or modifying AI responses without acknowledgement is misuse.

### What makes projects fail?

Scope, almost always. A project chosen to impress, designed while being written, and evidenced at the end loses marks in analysis, design and evaluation even when the program works.

### What is the state machine method?

List what the program can be doing, list what can happen, and decide the outcome for every combination before coding. It produces design evidence, a test plan and a hard limit on scope at the same time.

### Do you teach the exam papers too?

Yes. Most of our A-level students come for algorithms, data structures and systems, which are paper 1 and paper 2 content, and the project benefits from the same work.

### What do classes cost?

Nothing for the opening lesson. From then on it is USD 100 a month to share a group or USD 150 for private teaching, and you can stop at the end of any month.

### When are lessons, in UK time?

Whatever weekly time is agreed once the free lesson is done, most often after school in the evening. The clock in India sits five and a half hours ahead of Britain in winter, four and a half in summer.

## More for UK computing students

- [GCSE Computer Science tutoring](/uk-gcse-computer-science-tutoring): AQA, OCR and Edexcel compared, taught to your board.
- [British Informatics Olympiad](/british-informatics-olympiad-preparation): For students who enjoy the problem-solving side.
- [UK competitions calendar 2026-27](/uk-coding-maths-and-ai-competitions-calendar): Every contest we could confirm, month by month.
- [Choosing an online class in the UK](/best-online-coding-classes-uk): The questions worth putting to any provider before you pay.
- [Coding classes in the UK](/coding-classes-in-united-kingdom): Four school systems, and every UK page.
- [AI and machine learning classes in the UK](/ai-and-machine-learning-classes-in-uk): For projects with a model in them.

## Contact

Book the free first class at [https://learn.modernagecoders.com/a-level-computer-science-nea-help](https://learn.modernagecoders.com/a-level-computer-science-nea-help#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email contact@modernagecoders.com.
