---
title: "Class 10 AI Textbook Solutions 2026-27: Handbook Guide"
description: "Class 10 AI textbook solutions for CBSE 417, 2026-27: a unit map of the official AI Facilitator Handbook and original model answers for each exercise type."
canonical: https://learn.modernagecoders.com/cbse-class-10-ai-textbook-solutions
source: src/pages/cbse-class-10-ai-textbook-solutions.html
updated: 2026-11-06
---

> Class 10 AI textbook solutions for 2026-27 start with the right book: the CBSE AI Facilitator Handbook for Class X, a free PDF on cbseacademic.nic.in made by CBSE with Intel. It is not an NCERT book. It covers Part B Units 1 to 6, ending each unit with Test Yourself MCQs, assertion-reasoning items, Reflection Time questions and cases. Only the MCQ answers are printed. For the rest, learn the answer method: definition, example, keyword, sized to the marks. Modern Age Coders teaches every handbook unit live, Monday and Wednesday at 9:00 PM IST, or personalised one to one.

## Which textbook is used for CBSE Class 10 AI, and is there an NCERT AI class 10 book?

The textbook for CBSE AI 417 in Class 10 is the AI Facilitator Handbook for Class X, published free by CBSE in collaboration with Intel. There is no NCERT textbook for this subject, so "NCERT AI class 10 solutions" usually means answers to this handbook.

### What the handbook covers, and what it does not

- Part B, Units 1 to 6. Project cycle and ethics, modeling, evaluating models, statistical data, computer vision and NLP, each with sessions, activities and end-of-unit exercises.

- Not Part A. The five employability skills units are set out separately; the curriculum points students to the CBSE website for them.

- Not Unit 7. Advance Python is in the 2026-27 curriculum and tested in the practical, but the Class X handbook has no chapter on it.

- Answers for MCQs only. A one-page key at the back gives the Test Yourself options. Nothing else is answered.

### Where to find the right edition

On cbseacademic.nic.in, the file to use is AI_Facilitators_Handbook_X.pdf. Its unit list matches the 2026-27 curriculum. An older Class 10 handbook from 2021 is still hosted on the same site; it follows the earlier chapter list, so its exercises do not line up with the current units.

Private publishers sell textbooks and guides written to the same units. How they compare with the free handbook is covered on [the best book for Class 10 AI](/best-book-for-cbse-class-10-ai).

## AI class 10 book exercise answers: the chapter map

Each handbook unit ends in a fixed set of exercise types. The table maps them, with the marks the unit carries in the 2026-27 theory paper, so you can see where answer practice pays most.

- Handbook unit | Main sessions | End-of-unit exercise types | Theory marks 2026-27

- Unit 1: Revisiting AI Project Cycle and Ethical Frameworks for AI | Project cycle, AI domains, ethical frameworks, bioethics | 12 MCQs, assertion-reasoning, Reflection Time, a case on business ethics | 7

- Unit 2: Advanced Concepts of Modeling in AI | AI, ML and DL; rule-based and learning-based models; supervised, unsupervised, reinforcement; neural networks | 12 MCQs, assertion-reasoning, Reflection Time, name-the-learning-type cases | 11

- Unit 3: Evaluating Models | Train-test split, accuracy and error, confusion matrix, precision, recall, F1, ethics of evaluation | 10 MCQs (several calculated), Reflection Time, assertion-reasoning, choose-the-metric and compute-the-metrics cases | 10

- Unit 4: Statistical Data | No-code and low-code AI, statistics concepts, Orange on the penguins data | Two sets of 5 MCQs, answer briefly, answer in detail, Reflection Time | practical only

- Unit 5: Computer Vision | CV tasks, pixels, RGB and grayscale, no-code tools, convolution, CNN layers, OpenCV | 12 MCQs, assertion-reasoning, Reflection Time with pixel-colour items, scenario cases | 4

- Unit 6: Natural Language Processing | NLP stages, chatbots, text normalisation, Bag of Words, TFIDF, sentiment in Orange | 12 MCQs, assertion-reasoning, Reflection Time with normalisation and a step-by-step TFIDF | 8

- Unit 7: Advance Python | Not in the handbook | Practical file, practical exam and viva | practical only

### Reflection Time
Short and long answers: define, explain with an example, differentiate, justify a statement. These are the board's 2-mark and 4-mark shapes.

### Cases and scenarios
A short situation, then a question that needs a concept applied to it. Unit 3's cases add a calculation.

### Assertion-reasoning
Two statements and four fixed options. They appeared in Section A of the 2025 and 2026 board papers.

## Facilitator handbook solutions, Units 1 and 2: model answers by question type

A handbook answer scores when it opens with a one-line definition, adds an example, uses the unit's own terms and stops at the length the marks deserve. The questions below are our own, written in the handbook's shapes.

### Type: justify why something is needed (Unit 1)

Q. Why should a team building an AI system follow an ethical framework? (3 marks)

Model answer. An ethical framework is a set of principles that guides decisions about right and wrong. An AI system makes decisions at scale, so a hidden bias or unsafe choice affects thousands of people at once. A framework makes the team check fairness, privacy and harm at each stage of the project cycle, before the system is deployed. For example, a loan-approval AI checked against a rights-based framework would be tested to make sure it does not refuse applicants because of where they live.

Why it scores: definition, the reason specific to AI, the link to the project cycle, one concrete example.

### Type: apply principles to a case (Unit 1)

Q. A fitness app's AI shares users' heart-rate data with insurers without asking. Which principle of bioethics is broken, and what should change? (2 marks)

Model answer. Respect for autonomy is broken, because users were not told and did not agree. The app should ask for clear consent and let users refuse without losing the service.

### Type: differentiate (Unit 2)

Q. Differentiate between classification and clustering. (2 marks)

- Classification | Clustering

- Supervised: trained on labelled data | Unsupervised: works on unlabelled data

- Puts each item into a known class | Finds groups that were not named in advance

- Example: marking a leaf photo "healthy" or "diseased" | Example: grouping shoppers by buying habits

A table with two or three matched rows is the clearest format for any "differentiate" question.

### Type: name the learning type and say why (Unit 2)

- A drone learns to land by trying, failing and being scored on each attempt. Reinforcement: it learns from rewards and penalties, not labels.

- A hospital model learns from past scans already marked "fracture" or "no fracture". Supervised: the data is labelled.

- A news site sorts thousands of untagged articles into topic groups. Unsupervised: no labels; it finds the groups itself.

Every Unit 2 shape, with the neural-network layers, is drilled on [Unit 2 advanced modeling questions](/cbse-class-10-ai-advanced-modeling-questions).

## NCERT AI class 10 solutions for the numerical exercises: Units 3, 5 and 6

Three handbook units end in work that needs a method, not a memory: metrics from a confusion matrix, pixel colours from RGB values, and TFIDF step by step. Here is each method on our own data.

### Unit 3: draw the matrix, then compute the metrics

```
A camera sorts 1,000 mangoes.
It rejects 150; 120 of them are bad.
It passes 850; 50 of those are bad.

            Actually bad  Actually good
Rejected      TP = 120      FP = 30
Passed        FN = 50       TN = 800

Accuracy  = (120 + 800) / 1000 = 0.92
Precision = 120 / (120 + 30)   = 0.80
Recall    = 120 / (120 + 50)   = 0.71
F1 = 2 x 0.80 x 0.71 / 1.51    = 0.75
```

Choose-the-metric type. State which error is worse, then name the metric that controls it.

- Smoke alarm: a missed fire is worse than a false alarm, so recall.

- Plagiarism checker: wrongly accusing an honest student is worse, so precision.

- Mango sorter above: 50 bad mangoes reach customers, so the seller would push recall up.

Ten more matrices are solved on [confusion matrix numericals](/confusion-matrix-class-10-ai-numericals).

### Unit 5: colour of a pixel from its RGB values

- R, G, B | Colour | Why

- 255, 0, 255 | Magenta | Full red and full blue, no green

- 0, 255, 255 | Cyan | Full green and full blue

- 128, 128, 128 | Mid grey | Equal values give a shade of grey

- 255, 0, 0 | Red | Only the red channel is on

Check the order the question gives: some write R, B, G. Read each letter, not the position.

### Unit 6: TFIDF, step by step

-
**Normalise** D1 "Riya plays chess.", D2 "Riya reads books.", D3 "Aman plays football." Lowercase and drop the full stops.

-
**Vocabulary and document frequency** riya 2, plays 2, chess 1, reads 1, books 1, aman 1, football 1.

-
**IDF = log(N / DF), N = 3** Words in two documents: log(3/2) = 0.176. Words in one: log(3) = 0.477.

-
**TFIDF = TF x IDF** In D1, "chess" scores 0.477 and "riya" and "plays" 0.176 each, so "chess" is the word that marks D1 out.

The full method on a longer corpus is on [Bag of Words and TFIDF](/bag-of-words-tfidf-class-10-ai).

## Assertion-reasoning and Unit 4 answers: the method that fits every handbook exercise

An assertion-reasoning item is solved in three checks: is A true, is R true, and does R explain A. Answer them in that order and the four options become easy to tell apart.

### An assertion-reasoning item of our own

Assertion (A): A model with high accuracy can still be a poor model.Reason (R): When one class is much larger than the other, a model can score high accuracy by always predicting the larger class.

- Is A true? Yes.

- Is R true? Yes.

- Does R explain A? Yes: class imbalance is exactly why accuracy can mislead.

Answer: both A and R are true, and R is the correct explanation of A. More items in this format are on [assertion and reason questions](/cbse-class-10-ai-assertion-reason-questions).

### Unit 4: answer briefly, then in detail

Briefly (1 to 2 marks). Do no-code tools need programming knowledge? No. They work by dragging and connecting visual blocks, so a person with no coding background can build a model, though knowing the AI project cycle still helps.

In detail (4 marks). Give the benefits and limits of no-code AI tools. Benefits: quick to build, usable by non-programmers, low cost, results shown visually. Limits: less control over the model, harder to customise for unusual problems, and reliance on what the tool offers. A low-code tool sits between the two, letting small pieces of code be added. Example: Orange, where a decision tree is built from widgets on penguin data.

Unit 4 is assessed in the practical and viva, so say these answers aloud as well as writing them.

- Marks | Length to aim for | What it must contain

- 1 | one line or a word | the exact term

- 2 | two or three sentences | definition plus one example or difference

- 4 | six to eight sentences or a labelled table | definition, explanation, two points or steps, an example, the unit's keywords

## How the live batch works through the handbook exercises

Reading a solution shows one answer. Writing your own, then having it marked against what CBSE rewards, is what changes the next answer.

### Unit taught from the handbook
Monday's class follows the handbook's own sessions, with its examples and no-code walkthroughs done live, so the exercise questions refer to things students have actually seen.

### Exercises answered, then marked
On Wednesday students write answers to new questions in the unit's exercise shapes. The teacher marks a few on a shared screen, showing where the keyword was missing or the example too vague.

### Gaps the handbook leaves
Part A and Unit 7 are not in the handbook, so the batch adds them: Part A drills from November and Python practicals for the file through the year.

Any student can stop the class to ask about a handbook exercise they are stuck on, and it is worked through for everyone. Short unit notes to read before attempting the exercises are on [Class 10 AI notes](/cbse-class-10-ai-notes), and the important questions for each mark band are on [CBSE Class 10 AI important questions](/cbse-class-10-ai-important-questions).

## The courses behind this page

- [CBSE AI for Class 9 to 12](/courses/cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843): Each handbook unit taught, then its exercise types answered in writing and marked live, so the method sticks before the board paper.
- [Python for Teens](/courses/python-complete-masterclass-teens): Jupyter, NumPy and Matplotlib for Advance Python, the practical-only unit the Class X handbook does not have a chapter for.
- [Visual ML with Orange](/courses/orange-data-mining-visual-machine-learning-course-for-teens): The penguin data, image and sentiment walkthroughs from the handbook, built hands-on in Orange so the case questions make sense.

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

**Which is the textbook for CBSE Class 10 AI 417?** The official book is the AI Facilitator Handbook for Class X, published free by CBSE with Intel on cbseacademic.nic.in. Its units match the 2026-27 curriculum for Part B Units 1 to 6. Schools may also use a publisher's textbook written to the same units.

**Is there an NCERT book for class 10 Artificial Intelligence?** No. AI 417 is a CBSE skill subject, and its book is the CBSE AI Facilitator Handbook, not an NCERT textbook. Searches for NCERT AI class 10 solutions usually mean answers to the handbook exercises, which this page maps unit by unit.

**Where can I find the class 10 AI handbook pdf?** On cbseacademic.nic.in, under the Skill Education material for AI. The current Class X file is named AI_Facilitators_Handbook_X.pdf. An older 2021 Class 10 handbook is still hosted on the site, but it follows the earlier chapter list, so check that the units match the 2026-27 curriculum.

**Does the CBSE AI handbook have answers to the exercises?** Only for the Test Yourself MCQs, in a one-page answer key at the end of the book. The Reflection Time questions, the cases, the assertion-reasoning items and the calculations have no printed answers, which is why students look for solutions.

**Are facilitator handbook solutions enough for the board exam?** They cover the concepts, but the board paper uses new cases and new numbers. What carries over is the method: definition, example and keywords for written answers, and formula-first working for numericals. Practise that method on fresh questions, then sit timed sample papers.

**Does the handbook cover Advance Python and Part A?** No. The Class X handbook covers Part B Units 1 to 6. Unit 7, Advance Python, is in the 2026-27 curriculum and assessed in the practical, and the Part A employability skills units are set out separately by CBSE. Plan for both alongside the handbook, because together they carry the 10 Part A marks and part of the practical.

**How should I write answers to handbook reflection questions?** Start with a one-line definition in the unit's own terms, add an example that fits, and size the answer to the marks: two or three sentences for 2 marks, six to eight or a table for 4. For "differentiate" questions, a two-column table scores most clearly.

**Is copying answers from solution websites a good idea?** Reading a model answer is useful; memorising one is risky, because board questions change the case and the numbers. Write your own answer first, compare it with a model, and note what the model has that yours lacks. That habit improves every later answer.

**Do your classes teach from the CBSE handbook?** Yes. Each unit is taught from the handbook, its exercise types are answered in class and marked live, and Part A and Python practicals are added because the handbook leaves them out. It is all covered by the monthly fee shown on this page, in your own currency, with a free first class.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Mon and Wed 9 PM AI batch](/cbse-class-10-ai-classes-online), [CBSE AI classes in the Gulf and abroad](/cbse-class-10-ai-online-classes-gulf-and-abroad), [Live doubt classes](/cbse-class-10-ai-doubt-classes), [Class 10 AI tuition online](/cbse-class-10-ai-tuition), [Class 10 AI crash course](/cbse-class-10-ai-crash-course), [1-on-1 private AI tutor](/cbse-class-10-ai-private-tutor), [AI tuition in Delhi](/class-10-ai-tuition-delhi), [AI tuition in Gurgaon](/class-10-ai-tuition-gurgaon), [AI tuition in Noida](/class-10-ai-tuition-noida), [AI tuition in Bangalore](/class-10-ai-tuition-bangalore), [AI tuition in Pune](/class-10-ai-tuition-pune).

**Unit by unit:** [CBSE AI 417 syllabus explained](/cbse-class-10-ai-syllabus-explained), [Python for Class 10 AI](/python-for-cbse-class-10-ai), [Part A employability skills](/cbse-class-10-ai-employability-skills-part-a), [Unit 3: Evaluating Models](/cbse-class-10-ai-evaluating-models-questions), [Confusion matrix numericals](/confusion-matrix-class-10-ai-numericals), [Unit 2: Advanced modeling](/cbse-class-10-ai-advanced-modeling-questions), [Unit 6: Natural Language Processing](/cbse-class-10-ai-nlp-questions), [Bag of Words and TFIDF, worked](/bag-of-words-tfidf-class-10-ai), [Unit 5: Computer Vision](/cbse-class-10-ai-computer-vision-questions), [Orange Data Mining for Class 10 AI](/orange-data-mining-class-10-ai), [Unit 1: Project cycle and ethics](/cbse-class-10-ai-project-cycle-and-ethics).

**Questions and practice:** [CBSE AI important questions](/cbse-class-10-ai-important-questions), [Sample paper and mock tests](/cbse-class-10-ai-sample-paper-and-mock-tests), [Class 10 AI MCQ, unit wise](/cbse-class-10-ai-mcq-questions), [Previous year papers, solved](/cbse-class-10-ai-previous-year-question-papers), [AI practical and project viva](/cbse-class-10-ai-viva-questions), [Case based questions](/cbse-class-10-ai-case-based-questions), [Employability skills MCQ](/employability-skills-class-10-mcq), [Difference between questions](/cbse-class-10-ai-difference-between-questions), [Assertion and reason questions](/cbse-class-10-ai-assertion-reason-questions).

**Notes and revision:** [Class 10 AI notes, unit wise](/cbse-class-10-ai-notes), [Class 10 AI one shot revision](/cbse-class-10-ai-one-shot-revision), [30, 7 and 1 day revision plan](/cbse-class-10-ai-revision-plan), [Worksheets with answers](/cbse-class-10-ai-worksheets), [Best book for Class 10 AI](/best-book-for-cbse-class-10-ai), [Formula sheet](/cbse-class-10-ai-formula-sheet), [Class 10 AI notes in Hindi](/cbse-class-10-ai-notes-in-hindi).

**Exam, marks and practicals:** [CBSE AI board exam preparation](/cbse-class-10-ai-board-exam-preparation), [AI project and practical file](/cbse-class-10-ai-project-and-practical-file), [Exam date 2027 and paper pattern](/cbse-class-10-ai-exam-date-and-paper-pattern), [AI practical exam questions](/cbse-class-10-ai-practical-exam-questions), [Paper analysis and answer key](/cbse-class-10-ai-paper-analysis), [Marking scheme, explained](/cbse-class-10-ai-marking-scheme), [AI project ideas](/cbse-class-10-ai-project-ideas), [Passing marks](/cbse-class-10-ai-passing-marks), [The second board exam in May](/cbse-class-10-ai-second-board-exam).

**Choosing the subject:** [AI 417 or IT 402?](/ai-417-vs-it-402-class-10), [AI, IT or Computer Applications?](/ai-vs-computer-applications-class-10).

---

*Canonical: https://learn.modernagecoders.com/cbse-class-10-ai-textbook-solutions*
