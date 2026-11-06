---
title: "Class 10 AI Case Based Questions (417) with Answers, 2026-27"
description: "Class 10 AI case based questions for CBSE 417, 2026-27: original case passages for every theory unit, each with a model answer and where every mark sits."
canonical: https://learn.modernagecoders.com/cbse-class-10-ai-case-based-questions
source: src/pages/cbse-class-10-ai-case-based-questions.html
updated: 2026-11-06
---

> Class 10 AI case based questions give a short real-world situation and ask you to apply a 417 idea to it: name the AI domain or model, judge an ethical problem with the bioethics principles, build a confusion matrix and choose a metric, count pixels, or run Bag of Words on short texts. In the recent CBSE papers, cases appear as one-mark items, two-mark scenarios and four-mark questions of 50 to 80 words. Answer in three moves: identify, apply to the story, justify. Modern Age Coders practises these live on Monday and Wednesday at 9:00 PM IST, or one to one.

## What are case study questions in AI class 10, and how are they marked?

A case based question describes a situation, often a company, a school or a hospital using AI, and asks you to apply a concept to it. CBSE calls this competency: using an idea, not reciting it.

- Where cases appear | Marks | Typical ask, from the recent papers

- Section A objective items | 1 | Name the outcome (false negative), the model (association) or the NLP application from a two-line situation

- Section B short answers | 2 | Explain false positives and false negatives inside a fraud-detection story; describe how an RGB photo is stored

- Section B long answers | 4 | A biased selection system judged with bioethics; a confusion matrix built from a story; two scenarios matched to AI domains; a Bag of Words table

### 1. Identify
Name the exact idea the case points to: the domain, the learning type, the metric, the principle. One clear term, early in the answer, is usually the first mark.

### 2. Apply
Use the story's own words and numbers. "The model missed 6 leopards" earns what "false negatives are bad" does not.

### 3. Justify
Give the because. Most four-mark schemes split marks between naming something and explaining why it fits, so an unexplained right answer loses half.

CBSE's 2025 marking scheme also told examiners to credit a correct competency even when the wording differs from the scheme. So a sensible answer in your own words is safe, provided it names the idea and ties it to the case. The way marks split across a whole paper is on [the 417 marking scheme, explained](/cbse-class-10-ai-marking-scheme).

## Case based questions on the project cycle, ethics and modeling

Three original cases. Unit 1 cases test the ethics principles and the stages; Unit 2 cases test whether you can tell one kind of model from another from a description alone.

### Case 1. The canteen waste app (Unit 1, 4 marks)

A school notices that a lot of lunch is thrown away. Students plan an AI app that predicts how many meals to cook each day from attendance, the menu and the weather. They collect three months of canteen records, chart which dishes are wasted most, then train a model and check its predictions against two weeks they kept aside.

- Fill in the 4Ws for this problem. (2)
Model answer Who: the canteen staff and students. What: too much cooked food is wasted. Where: the school canteen, at lunch each day. Why: cooking the right amount saves food and money. Half a mark per W.

- Name the project cycle stage for (a) charting which dishes are wasted, and (b) checking predictions against the kept-aside fortnight. (2)
Model answer (a) Data Exploration, because the data is being visualised to find patterns. (b) Evaluation, because the model is tested on data it did not learn from. One mark each: the stage, plus a few words of reason.

### Case 2. The hospital queue (Unit 1, 4 marks)

A hospital uses AI to decide which emergency patients are seen first. Staff later find that patients who arrive without phone numbers in their records are pushed down the queue, because the model was trained mostly on patients who had registered online.

- Give two reasons the system is unfair, and two bioethics principles it breaks. (4)
Model answer Reasons: the training data under-represented patients who register in person, so the model learned a bias; a missing phone number has nothing to do with how ill someone is. Principles: do not harm, since sicker patients may wait too long; give justice, since equal medical need is not treated equally. One mark per reason, one per principle with its link to the case.

### Case 3. A city's three AI projects (Unit 2, 4 marks)

A city council runs three projects. Project P predicts tomorrow's electricity demand in megawatts from past readings. Project Q sorts thousands of unlabelled complaint emails into groups of similar complaints. Project R trains a traffic-signal controller that gets a reward each time queues get shorter.

- Name the learning type and the model for each project, with a reason. (3)
Model answer P: supervised learning, regression, because it predicts a number from labelled past data. Q: unsupervised learning, clustering, because the emails have no labels and are grouped by similarity. R: reinforcement learning, because it learns by reward. One mark per project; half for the name, half for the reason.

- Why would a rule-based approach suit Project R badly? (1)
Model answer Traffic changes all the time, and fixed rules cannot adapt to new patterns the way a learning-based system can.

### A quick neural network item

A perceptron receives inputs 1, 0 and 1 with weights 0.6, 0.3 and 0.5 and a bias of -0.8. What is the weighted sum plus bias, and which layer of a network does this kind of processing?

Model answer 0.6 + 0 + 0.5 - 0.8 = 0.3. Processing happens in the hidden layers; the input and output layers only pass data in and out.
More scenario drills are on [Unit 2 modeling questions](/cbse-class-10-ai-advanced-modeling-questions), and the bioethics case worked in full on [project cycle and ethics](/cbse-class-10-ai-project-cycle-and-ethics).

## Competency based questions in 417: the evaluating models case

Every recent paper we read had a four-mark confusion matrix case. The competency is not the arithmetic alone: it is reading the story into the right cells and then saying which metric matters for this particular use.

```
Forest staff test an AI on 250 camera-trap
photos. It flags 30 photos as "leopard";
18 of them really show a leopard. It misses
6 photos that do show one. The rest are
correctly marked "no leopard".

(a) Build the confusion matrix.        1
(b) Find accuracy and precision.       1
(c) Find recall and F1.                1
(d) Staff want to count every leopard.
    Which metric should they watch,
    and why?                           1

              Reality: Yes  Reality: No
Predicted Yes   TP = 18      FP = 12
Predicted No    FN = 6       TN = 214

Accuracy  = (18 + 214) / 250 = 0.928
Precision = 18 / 30 = 0.60
Recall    = 18 / 24 = 0.75
F1 = 2 x 0.60 x 0.75 / 1.35 = 0.67 (approx.)
```

### Answer to part (d), and why it carries the mark

Recall. The goal is to miss no leopard, and recall measures how many real leopards the model caught, TP / (TP + FN). A false negative here is a leopard left uncounted, which is the costly mistake. Precision matters less: a few empty photos flagged by mistake only cost staff a minute each to check.

### What this case teaches about accuracy

An accuracy of 0.928 looks excellent, yet the model is wrong on 12 of the 30 photos it flags. Most photos show no leopard, so the large TN cell lifts accuracy. A case that asks "is this a good model?" wants exactly this point: accuracy flatters a model when one class is rare.

- Disease, fraud, missing a leopard: watch recall.

- Spam sent to the junk folder, an innocent person flagged: watch precision.

- Both mistakes costly: watch F1.

Ten more graded matrices are on [confusion matrix numericals](/confusion-matrix-class-10-ai-numericals).

## Scenario questions in AI class 10: computer vision and NLP cases

Computer Vision has only four theory marks, so its cases are short. NLP carries eight, and its long case is nearly always a Bag of Words table with a question or two about the method.

### Case 5. The ticket-free car park (Unit 5)

A mall's car park camera records 1920 x 1080 colour frames. It must spot every car in a frame and also read each number plate so it can charge the right owner.

- How many pixels does one frame have, and how many values does it store? (1)
Model answer 1920 x 1080 = 2,073,600 pixels. Each colour pixel stores red, green and blue, so 6,220,800 values.

- Which CV task finds every car, and why not plain classification? (2)
Model answer Object detection, because there are many cars and each must be located with a box. Classification only says what one image shows, not where or how many.

- Reading the plate needs two domains. Name them. (1)
Model answer Computer Vision to find the plate and its characters; turning those characters into text the system can use draws on language processing. Give both, each with a reason.

Pixel and RGB questions with more figures are on [Unit 5 computer vision questions](/cbse-class-10-ai-computer-vision-questions).

### Case 6. The phone review desk (Unit 6, 4 marks)

An online shop wants to sort phone reviews automatically. Two reviews: Review 1, "The battery lasts long." Review 2, "The screen is bright and the battery is weak."

- Normalise both reviews and build the dictionary. (2)
Model answer Lower case and remove full stops. Dictionary in order of first appearance: the, battery, lasts, long, screen, is, bright, and, weak (9 words). One mark for the steps, one for the complete dictionary.

- Write the document vector for each review. (1)
Model answer Review 1: 1, 1, 1, 1, 0, 0, 0, 0, 0. Review 2: 2, 1, 0, 0, 1, 2, 1, 1, 1. "the" and "is" appear twice in Review 2, so they score 2.

- Which NLP application is the shop using, and should its help-desk chatbot be a script bot or a smart bot? (1)
Model answer Sentiment analysis, since it judges whether each review is positive or negative. A smart bot, because customers ask open questions a fixed script cannot cover.

How many tokens does Review 1 give before the full stop is removed? Five: four words plus the full stop. Corpora worked to TFIDF are on [Unit 6 NLP questions](/cbse-class-10-ai-nlp-questions).

## Part A situations, and why Units 4 and 7 have no theory cases

Employability questions are often small cases too: a student, a shopkeeper or a team leader in a situation, and you name the skill. Units 4 and 7 are examined only in the practical, so their scenarios turn up in the lab and the viva instead.

- Original Part A situation | Expected answer

- Kabir sets himself "finish three Unit 3 numericals every evening this week". Which goal-setting method is he using, and which letter is the time limit? | A SMART goal; T, time-bound

- A shop owner switches to cloth bags and solar lights. Which skill area is this, and name one benefit. | Green skills; it cuts waste and energy use for the future

- Riya clicks a link in an email promising a free phone and is asked for her bank password. What should she do? | Not share it, delete the email and report it; it is a phishing attempt

- A team leader explains a plan once, clearly, with a chart and no extra words. Which two of the 7 Cs is she following? | Clear and concise (concrete also fits, because of the chart)

- Aman spots that his building has no place to repair bicycles and opens one on weekends. Which entrepreneurial quality does he show? | Spotting an opportunity and acting on it; also taking a risk

### Practical-side scenarios to expect in the viva

- Orange Data Mining: which widget splits data for testing, and what the penguin model's accuracy tells you.

- NumPy: which function finds the median of marks you are given.

- Matplotlib: when a scatter chart suits better than a line chart.

### Assertion and reason built on a case

Recent papers placed assertion-reason items in Section A, sometimes resting on a short scenario. Treat them as two cases in one: test the claim, test the reason, then ask whether one explains the other. A full set is on [assertion and reason questions](/cbse-class-10-ai-assertion-reason-questions).

## How the live batch builds case-answer habits

Students rarely lose case marks for not knowing the idea. They lose them for writing around it. Habits fix that, and habits come from repetition with feedback.

### Plan before writing
On Mondays, a new case goes on the shared screen and students jot only the three moves: the term, the line from the story, the reason. The teacher checks plans before anyone writes a full answer.

### Written to the clock
On Wednesdays, a four-mark case is written in eight minutes within 50 to 80 words, then marked on screen against value points, with the half marks shown.

### Cases in every mock
From December each timed mock includes three long cases, and students practise choosing which three of five to attempt before they start.

To see which case shapes the board has already used, read [Class 10 AI previous year papers](/cbse-class-10-ai-previous-year-question-papers).

## The courses behind this page

- [CBSE AI for Class 9 to 12](/courses/cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843): The full 417 course: each unit closes with a case passage written to time and marked against the value points.
- [Visual ML with Orange](/courses/orange-data-mining-visual-machine-learning-course-for-teens): The penguin, coral bleaching and sentiment walkthroughs built by hand, so a scenario about them is something your child has actually done.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens): Real models trained and tested, for students who want to see why precision, bias and overfitting behave the way the cases say.

Families also look at [Python for Teens](/courses/python-complete-masterclass-teens), [Data Science for Teens](/courses/data-science-course-for-teens-python-data), [CBSE Class 10 Maths board exam prep](/courses/cbse-class-10-maths-board-exam-prep-course), [CBSE and ICSE Computer Science Class 11 and 12](/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course), [CBSE Informatics Practices Class 11 and 12](/courses/cbse-informatics-practices-ip-class-11-12-python-pandas-sql-complete-course), [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course), [Hackathon Prep for Teens](/courses/hackathon-prep-for-teens-coding-ai-build-innovate-win-course), [Git and GitHub for Teens](/courses/git-github-version-control-course-for-teens).

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

**What are case based questions in class 10 AI?** They describe a short real-world situation, such as a hospital, a shop or a city using AI, and ask you to apply a 417 concept to it: name the domain or model, judge an ethical problem, build a confusion matrix or run Bag of Words. They test use of an idea rather than recall of a definition.

**How many marks are case based questions worth in the AI 417 paper?** They appear across the paper rather than in one block. In the recent papers, cases showed up as one-mark objective items, two-mark scenario answers and four-mark long questions. Of the five four-mark questions printed, you answer three, and in the papers we read several of them were set as cases, the confusion matrix one every time.

**How do I write a case study answer for AI class 10?** Use three moves. Identify the exact idea the case points to; apply it using the case's own words and numbers; justify with a because. Keep two-mark answers to 20 to 30 words and four-mark answers to 50 to 80, as printed on the paper.

**What are competency based questions in 417?** Competency based questions check whether you can use what you learned in a new situation. In AI 417 they are mostly case and scenario questions. CBSE's 2025 marking scheme told examiners to give due marks when a student shows the right competency in their own words.

**Which unit has the most case questions in class 10 AI?** Evaluating Models gives the most reliable one: a confusion matrix case appeared as a four-mark question in every recent paper we read. Unit 1 ethics cases and Unit 6 Bag of Words cases were also regular. Computer Vision cases are short because the unit carries only four theory marks.

**Are there case questions on Python or statistical data?** Not in the theory paper. Unit 4 Statistical Data and Unit 7 Advance Python are assessed only in the practical, so scenarios from them come up in the lab exam and the viva, for example which NumPy function finds a median.

**Do I need to draw a table in a confusion matrix case?** Yes. Draw the two by two matrix with both axes labelled, reality and prediction, before any formula. Schemes give marks for the table itself, and a labelled table protects you whichever way round the question sets its axes. Then check that the four cells add up to the total given in the case.

**What are scenario questions in AI class 10?** A scenario question is a short case, often one or two lines, that asks you to name something: the AI domain, the learning type, the chatbot type or whether an error is a false positive or a false negative. Name the idea and add a few words of reason from the scenario.

**Where can I practise more AI class 10 case study questions?** This page has six original unit cases and five Part A situations, all with model answers, and each unit page in this series has more. In our classes a fresh case is set every week, planned on Monday and written to time on Wednesday, then marked on screen.

**Is case practice part of your classes?** Yes. Weekly cases, timed writing and mocks with long cases are all covered by the monthly fee shown on this page, in your own currency, for the batch or one to one. There is no admission fee and the first class is a free demo.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Mon and Wed 9 PM AI batch](/cbse-class-10-ai-classes-online), [CBSE AI classes in the Gulf and abroad](/cbse-class-10-ai-online-classes-gulf-and-abroad), [Live doubt classes](/cbse-class-10-ai-doubt-classes), [Class 10 AI tuition online](/cbse-class-10-ai-tuition), [Class 10 AI crash course](/cbse-class-10-ai-crash-course), [1-on-1 private AI tutor](/cbse-class-10-ai-private-tutor), [AI tuition in Delhi](/class-10-ai-tuition-delhi), [AI tuition in Gurgaon](/class-10-ai-tuition-gurgaon), [AI tuition in Noida](/class-10-ai-tuition-noida), [AI tuition in Bangalore](/class-10-ai-tuition-bangalore).

**Unit by unit:** [CBSE AI 417 syllabus explained](/cbse-class-10-ai-syllabus-explained), [Python for Class 10 AI](/python-for-cbse-class-10-ai), [Part A employability skills](/cbse-class-10-ai-employability-skills-part-a), [Unit 3: Evaluating Models](/cbse-class-10-ai-evaluating-models-questions), [Confusion matrix numericals](/confusion-matrix-class-10-ai-numericals), [Unit 2: Advanced modeling](/cbse-class-10-ai-advanced-modeling-questions), [Unit 6: Natural Language Processing](/cbse-class-10-ai-nlp-questions), [Bag of Words and TFIDF, worked](/bag-of-words-tfidf-class-10-ai), [Unit 5: Computer Vision](/cbse-class-10-ai-computer-vision-questions), [Orange Data Mining for Class 10 AI](/orange-data-mining-class-10-ai), [Unit 1: Project cycle and ethics](/cbse-class-10-ai-project-cycle-and-ethics).

**Questions and practice:** [CBSE AI important questions](/cbse-class-10-ai-important-questions), [Sample paper and mock tests](/cbse-class-10-ai-sample-paper-and-mock-tests), [Class 10 AI MCQ, unit wise](/cbse-class-10-ai-mcq-questions), [Previous year papers, solved](/cbse-class-10-ai-previous-year-question-papers), [AI practical and project viva](/cbse-class-10-ai-viva-questions), [Employability skills MCQ](/employability-skills-class-10-mcq), [Difference between questions](/cbse-class-10-ai-difference-between-questions), [Assertion and reason questions](/cbse-class-10-ai-assertion-reason-questions).

**Notes and revision:** [Class 10 AI notes, unit wise](/cbse-class-10-ai-notes), [Class 10 AI one shot revision](/cbse-class-10-ai-one-shot-revision), [30, 7 and 1 day revision plan](/cbse-class-10-ai-revision-plan), [Worksheets with answers](/cbse-class-10-ai-worksheets), [AI handbook exercise answers](/cbse-class-10-ai-textbook-solutions), [Best book for Class 10 AI](/best-book-for-cbse-class-10-ai), [Formula sheet](/cbse-class-10-ai-formula-sheet).

**Exam, marks and practicals:** [CBSE AI board exam preparation](/cbse-class-10-ai-board-exam-preparation), [AI project and practical file](/cbse-class-10-ai-project-and-practical-file), [Exam date 2027 and paper pattern](/cbse-class-10-ai-exam-date-and-paper-pattern), [AI practical exam questions](/cbse-class-10-ai-practical-exam-questions), [Paper analysis and answer key](/cbse-class-10-ai-paper-analysis), [AI project ideas](/cbse-class-10-ai-project-ideas), [Passing marks](/cbse-class-10-ai-passing-marks), [The second board exam in May](/cbse-class-10-ai-second-board-exam).

**Choosing the subject:** [AI 417 or IT 402?](/ai-417-vs-it-402-class-10), [AI, IT or Computer Applications?](/ai-vs-computer-applications-class-10).

---

*Canonical: https://learn.modernagecoders.com/cbse-class-10-ai-case-based-questions*
