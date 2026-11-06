---
title: "Class 10 AI Doubt Classes (CBSE 417), Live Doubt Solving"
description: "Class 10 AI doubt classes for CBSE 417, live: how doubt time works in the Monday and Wednesday batch, plus ten real doubts answered in full on this page."
canonical: https://learn.modernagecoders.com/cbse-class-10-ai-doubt-classes
source: src/pages/cbse-class-10-ai-doubt-classes.html
updated: 2026-11-06
---

> Class 10 AI doubt classes are live sessions where a teacher answers a student's questions on CBSE 417 as they arise, working through the student's own answer or code. In the Modern Age Coders batch, every Monday and Wednesday 9:00 PM IST class opens with doubts from the set work, doubts raised during the lesson are worked on a shared screen at once, and each full mock is followed by a review class run as a doubt session. Students who want all their time spent on their own doubts can take personalised one to one at their own hours.

## How do live doubt sessions work in a class 10 AI batch?

Doubts are not saved for a separate weekly hour. They are taken at three points: at the start of each class, during the lesson the moment they come up, and in the review class after each mock. The table shows what happens at each.

- When the doubt arises | When it is taken | How it is answered

- While doing set work at home | At the opening of the next Monday or Wednesday class, before new teaching | The student shows their attempt; the teacher finds the step where it went wrong

- During the lesson | Straight away, by unmuting or in the chat | Worked on the shared screen, often with a fresh example

- In a Python or Orange task | In the Wednesday lab, as it happens | The student shares their screen; the error is read together and fixed in their notebook

- In a full timed mock | In the review class that follows | Every lost mark becomes a doubt; each is explained, then re-attempted

- In a school test or worksheet | Brought to the next class | Answered if it is 417; the teacher shows how the board scheme would mark it

### Attempt first, then ask
A doubt with an attempt attached is solved in a minute, because the mistake is visible. "I did not understand Unit 3" takes a whole class and teaches less.

### One doubt, many students
In a batch of 15 to 20, one student's question is usually three other students' silent question. Answering it on the shared screen helps the whole room.

### Doubts become practice
When the same doubt comes up twice, it goes into the next practice set with new numbers, so the fix is tested and not just heard.

## AI 417 doubt solving: eight theory doubts, answered in full

These are written the way students ask them, and answered the way a teacher answers them live: the direct answer first, then the reason, then the habit that stops the doubt returning.

### Units 2 and 3: modeling and evaluation

- "Why can't I just average precision and recall to get F1?"
Answer Because F1 punishes a big gap between them and an average does not. Take precision 0.9 and recall 0.3. The average is 0.6, which looks fine. F1 = 2 x 0.9 x 0.3 / (0.9 + 0.3) = 0.54 / 1.2 = 0.45. The model misses most real cases, and F1 says so. Habit: write 2PR / (P + R) before touching the numbers.

- "My model is 99% accurate. Why did the answer get only half marks?"
Answer In a data set of 1,000 bank transactions with 10 frauds, a model that calls everything genuine is right 990 times, so 99% accurate, yet it catches no fraud at all: recall is 0. The examiner wanted you to say accuracy misleads when one class is rare, and to name recall as the metric to check. Habit: when one class is rare, look at the minority class first.

- "What is the bias actually doing in a perceptron?"
Answer It shifts how easily the neuron fires, whatever the inputs. With inputs 1, 1, 0, weights 0.5, -0.3, 0.8 and bias -0.1: 0.5 - 0.3 + 0 - 0.1 = 0.1. With a step rule that fires above 0, the output is 1. Make the bias -0.3 and the sum becomes -0.1, so it does not fire. Same inputs, different decision. Habit: add the bias last, as its own line of working.

- "Is a chatbot that answers from fixed menu options AI?"
Answer It is a script bot: it follows rules a person wrote and cannot handle a question outside them. A smart bot, such as a voice assistant, uses NLP and learns from data, so it copes with new phrasings. The board likes this as a difference question, so give one example of each. Habit: ask "who wrote the rule, a person or the data?"

### Units 1, 5, 6 and Part A

- "Is a 1920 x 1080 image 2 million or 6 million?"
Answer Both, depending on the question. It has 1920 x 1080 = 2,073,600 pixels. If it is a colour (RGB) image, each pixel stores three values, so it holds 6,220,800 numbers. Read whether the question asks for pixels or values. Habit: underline the word "pixels" or "values" before multiplying.

- "Stemming and lemmatisation look the same to me."
Answer Both reduce a word to a base form, but stemming just cuts off the ending and may leave a non-word, while lemmatisation returns a real dictionary word. A stemmer that simply strips "-ing" turns "caring" into "car", a real word with the wrong meaning, while lemmatisation gives "care". Lemmatisation is slower because it needs a dictionary. Habit: learn one example where the stem is not a real word.

- "In the 4Ws canvas, what goes under Where?"
Answer The situation or context in which the problem happens: when and where the stakeholders meet it. For a canteen food-waste project, Where is the school canteen at lunch, where plates are scraped into bins. It is not the place the solution will be built. Habit: fill Who, What, Where and Why in order, one line each, before any data talk.

- "Is 'I will score well in AI' a SMART goal?"
Answer No. It is not specific or measurable and has no deadline. "I will score 40 or more out of 50 in my AI theory pre-board by revising one unit every three days until 15 January" is specific, measurable, achievable, relevant and time-bound. Part A asks this shape for two marks. Habit: check each of the five letters in turn.

More doubts in the evaluation unit are answered with numbers on [confusion matrix numericals](/confusion-matrix-class-10-ai-numericals); the NLP ones on [bag of words and TFIDF](/bag-of-words-tfidf-class-10-ai); and the word pairs students confuse most on [difference between questions](/cbse-class-10-ai-difference-between-questions).

## Live doubt session for class 10 AI Python errors

Most Wednesday doubts are error messages. The fix is almost never to memorise the correct code; it is to read the last line of the error, which names the problem. Here are two that arrive every year, run exactly as shown.

### Doubt 9: "I want to add 5 grace marks to everyone"

```
marks = [40, 55, 70]
print(marks + 5)

TypeError: can only concatenate
list (not "int") to list
```

```
import numpy as np
marks = np.array([40, 55, 70])
print(marks + 5)
print(marks.mean())

[45 60 75]
55.0
```

### Doubt 10: "NumPy has mean and median, so where is mode?"

```
import numpy as np
scores = [6, 8, 8, 9, 5]
print(np.mode(scores))

AttributeError: module 'numpy'
has no attribute 'mode'
```

```
import statistics
scores = [6, 8, 8, 9, 5]
print(statistics.mode(scores))

8
```

### Read the last line
TypeError, NameError, AttributeError and IndentationError each point to a different kind of fix. Students learn the four that cover most Class 10 errors.

### Orange doubts too
"My Test and Score widget is empty" is usually a missing link or no target column set. Shared screens make it a thirty-second fix.

### Into the file
A program whose error was solved and explained is a strong practical file entry, because the student can talk about it in the viva.

The full Python side of the subject is on [Python for CBSE Class 10 AI](/python-for-cbse-class-10-ai), and the no-code tool on [Orange Data Mining for Class 10 AI](/orange-data-mining-class-10-ai).

## How to ask a class 10 AI doubt so it is solved in one go

Bring three things: the exact question, what you tried, and where you got stuck. A doubt asked like that is usually solved in under two minutes and teaches the rest of the class something too.

-
**Name the source** "Worksheet question 4", "my school pre-board, Section B", or "file program 7". The teacher can then see the exact wording.

-
**Show the attempt** A photo of the written answer, or the notebook on screen. Even a wrong attempt shows where the thinking turned.

-
**Point to the stuck step** "I got TP and FP, but not FN" is far more useful than "I don't get confusion matrix".

-
**Try the check question** After the answer, the teacher gives a quick variant. Solving it is how both of you know the doubt is closed.

```
Question: Worksheet 3, Q6 (Unit 6)
Asked:   TFIDF of "rain" in doc 2
I did:   TF = 2, IDF = log(3/3)
         so I got 0. Answer key
         says 0 too, but why is a
         word used twice worth 0?
Stuck:   the meaning, not the maths
```

Students who are shy in a group can type the doubt in the class chat; the teacher reads it out without the name if asked. Those who prefer every minute spent on their own questions often choose [a Class 10 AI private tutor](/cbse-class-10-ai-private-tutor).

## Live doubt classes compared with doubt apps, forums, videos and school

An app or forum gives an answer; a live doubt class finds out why the doubt happened. For quick facts the free routes are fine. For doubts that keep coming back, especially numericals and Python errors, a teacher who sees the attempt is faster.

- Route | Speed | Sees your attempt | Knows the 2026-27 units | Checks the doubt is closed

- AI doubt-solving app | Instant | Only if you type it all | Not reliably | No

- Online forum or group | Hours to days | Rarely | Depends who answers | No

- Recorded video | Instant, if one fits | No | Check the date | No

- School teacher | Next period, if time allows | Yes | Yes | Sometimes

- Live batch doubt time | Same class or the next one | Yes, on screen | Yes | Yes, with a check question

- One to one | Within the session | Yes | Yes | Yes, and re-tested later

A word on AI apps: they can be useful for a definition, but on 417 they sometimes answer from the older chapter list or set long theory answers on Unit 4, which is practical only this year. Check any app answer against the unit list on [the syllabus explained](/cbse-class-10-ai-syllabus-explained), or bring it to class as a doubt.

## The courses behind this page

- [CBSE AI for Class 9 to 12](/courses/cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843): The board course with doubt time inside every class, from Part A to the project viva.
- [Python for Teens](/courses/python-complete-masterclass-teens): For students whose doubts are mostly error messages: the language taught slowly enough that errors start to make sense.
- [Visual ML with Orange](/courses/orange-data-mining-visual-machine-learning-course-for-teens): Widget by widget practice in the no-code tool, so "my workflow shows nothing" stops being a weekly doubt.

Families also look at [AI and ML for Teens](/courses/ai-ml-masterclass-teens), [Data Science for Teens](/courses/data-science-course-for-teens-python-data), [CBSE Class 10 Maths board exam prep](/courses/cbse-class-10-maths-board-exam-prep-course), [CBSE and ICSE Computer Science Class 11 and 12](/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course), [CBSE Informatics Practices Class 11 and 12](/courses/cbse-informatics-practices-ip-class-11-12-python-pandas-sql-complete-course), [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course), [Hackathon Prep for Teens](/courses/hackathon-prep-for-teens-coding-ai-build-innovate-win-course), [Git and GitHub for Teens](/courses/git-github-version-control-course-for-teens).

## Batch or personalised, and the fees

Option 1, fixed batch: Monday and Wednesday at 9:00 PM IST, live online, fifteen to twenty students. Option 2, personalised one to one: days and time chosen by the family, the right choice for time zones where the batch falls in school hours or late at night. Monthly billing, no admission fee, stop at any month end. Fees are shown on the page in the visitor's own currency. The first class is a free demo; a paid priority demo (about 45 to 60 minutes, written skill report afterwards) is also available.

## Batch times outside India

- Where you live | Mon and Wed 9:00 PM IST | Best format

- India (IST)every Indian city | 9:00 PM | Batch fits

- UAE and OmanDubai, Abu Dhabi, Sharjah, Muscat | 7:30 PM | Batch fits

- Saudi Arabia, Qatar, Kuwait, BahrainRiyadh, Jeddah, Dammam, Doha, Kuwait City, Manama | 6:30 PM | Batch fits

- NepalKathmandu | 9:15 PM | Batch fits

- Ethiopia and East AfricaAddis Ababa and East Africa Time | 6:30 PM | Batch fits

- Singapore and MalaysiaSingapore, Kuala Lumpur | 11:30 PM | Choose 1-on-1

## Frequently asked questions

**Where can I ask class 10 AI doubts?** In our live batch, doubts are asked in every Monday and Wednesday 9:00 PM IST class: doubts from set work are taken first, and doubts during the lesson are answered on the shared screen at once. One to one students can spend whole sessions on their doubts. The first class is a free demo, so you can bring a doubt to it.

**Are doubt classes separate from regular classes?** No. Doubt time is built into every class rather than held as a separate session, so no doubt waits for a special day. After each full mock, the review class works as a dedicated doubt session on lost marks.

**Can I ask doubts from my school worksheet or pre-board?** Yes, if they are 417 questions. Bring the question and your attempt; the teacher answers it and shows how the CBSE marking scheme would award the marks.

**How are Python doubts solved online?** The student shares their screen, the error message is read together, and the code is fixed in the student's own notebook so the corrected program can go into the practical file. Most Class 10 errors fall into a few types, such as TypeError and AttributeError, which students learn to read themselves.

**Can I ask doubts on Orange Data Mining?** Yes. Orange doubts are taken in the Wednesday lab with the student's workflow on the shared screen. Common ones are a widget with no output because a link is missing, or a model that will not train because no target column is set.

**What if I am too shy to ask a doubt in front of the batch?** Type it in the class chat; the teacher can read it out without your name. Students who prefer complete privacy usually do better one to one, where every question is theirs.

**Is there doubt support for the practical file and viva?** Yes. Doubts about any program in the file are taken in class, and the viva is rehearsed, which tends to surface the doubts a student did not know they had.

**Are AI doubt-solving apps good for CBSE 417?** For a quick definition, sometimes. But apps may answer from the older chapter list, or treat Statistical Data as a theory unit when in 2026-27 it is practical only. They also cannot see why you made a mistake. Check app answers against the current unit list.

**Is live doubt solving included in the fee?** Yes. Doubt time is part of every class and is covered by the monthly fee shown on this page, for the batch or one to one. There is no separate doubt fee and no admission fee.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Mon and Wed 9 PM AI batch](/cbse-class-10-ai-classes-online), [CBSE AI classes in the Gulf and abroad](/cbse-class-10-ai-online-classes-gulf-and-abroad), [Class 10 AI tuition online](/cbse-class-10-ai-tuition), [Class 10 AI crash course](/cbse-class-10-ai-crash-course), [1-on-1 private AI tutor](/cbse-class-10-ai-private-tutor), [AI tuition in Delhi](/class-10-ai-tuition-delhi), [AI tuition in Gurgaon](/class-10-ai-tuition-gurgaon), [AI tuition in Noida](/class-10-ai-tuition-noida).

**Unit by unit:** [CBSE AI 417 syllabus explained](/cbse-class-10-ai-syllabus-explained), [Python for Class 10 AI](/python-for-cbse-class-10-ai), [Part A employability skills](/cbse-class-10-ai-employability-skills-part-a), [Unit 3: Evaluating Models](/cbse-class-10-ai-evaluating-models-questions), [Confusion matrix numericals](/confusion-matrix-class-10-ai-numericals), [Unit 2: Advanced modeling](/cbse-class-10-ai-advanced-modeling-questions), [Unit 6: Natural Language Processing](/cbse-class-10-ai-nlp-questions), [Bag of Words and TFIDF, worked](/bag-of-words-tfidf-class-10-ai), [Unit 5: Computer Vision](/cbse-class-10-ai-computer-vision-questions), [Orange Data Mining for Class 10 AI](/orange-data-mining-class-10-ai), [Unit 1: Project cycle and ethics](/cbse-class-10-ai-project-cycle-and-ethics).

**Questions and practice:** [CBSE AI important questions](/cbse-class-10-ai-important-questions), [Sample paper and mock tests](/cbse-class-10-ai-sample-paper-and-mock-tests), [Class 10 AI MCQ, unit wise](/cbse-class-10-ai-mcq-questions), [Previous year papers, solved](/cbse-class-10-ai-previous-year-question-papers), [AI practical and project viva](/cbse-class-10-ai-viva-questions), [Case based questions](/cbse-class-10-ai-case-based-questions), [Employability skills MCQ](/employability-skills-class-10-mcq), [Difference between questions](/cbse-class-10-ai-difference-between-questions), [Assertion and reason questions](/cbse-class-10-ai-assertion-reason-questions).

**Notes and revision:** [Class 10 AI notes, unit wise](/cbse-class-10-ai-notes), [Class 10 AI one shot revision](/cbse-class-10-ai-one-shot-revision), [30, 7 and 1 day revision plan](/cbse-class-10-ai-revision-plan), [Worksheets with answers](/cbse-class-10-ai-worksheets), [AI handbook exercise answers](/cbse-class-10-ai-textbook-solutions), [Best book for Class 10 AI](/best-book-for-cbse-class-10-ai), [Formula sheet](/cbse-class-10-ai-formula-sheet).

**Exam, marks and practicals:** [CBSE AI board exam preparation](/cbse-class-10-ai-board-exam-preparation), [AI project and practical file](/cbse-class-10-ai-project-and-practical-file), [Exam date 2027 and paper pattern](/cbse-class-10-ai-exam-date-and-paper-pattern), [AI practical exam questions](/cbse-class-10-ai-practical-exam-questions), [AI project ideas](/cbse-class-10-ai-project-ideas), [Passing marks](/cbse-class-10-ai-passing-marks), [The second board exam in May](/cbse-class-10-ai-second-board-exam).

**Choosing the subject:** [AI 417 or IT 402?](/ai-417-vs-it-402-class-10), [AI, IT or Computer Applications?](/ai-vs-computer-applications-class-10).

---

*Canonical: https://learn.modernagecoders.com/cbse-class-10-ai-doubt-classes*
