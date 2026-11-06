---
title: "Evaluating Models Class 10 Questions and Answers (417)"
description: "Evaluating models class 10 questions and answers for CBSE AI 417, 2026-27: train-test split, accuracy and error, precision or recall, and the ethics."
canonical: https://learn.modernagecoders.com/cbse-class-10-ai-evaluating-models-questions
source: src/pages/cbse-class-10-ai-evaluating-models-questions.html
updated: 2026-11-06
---

> Evaluating Models is Unit 3 of CBSE Class 10 AI (417), worth 10 of the 50 theory marks in 2026-27. It asks why a model is tested on data it has never seen (the train-test split), how accuracy and error are worked out, how a confusion matrix gives accuracy, precision, recall and F1 score, which metric matters when false positives or false negatives cost more, and the ethical concerns of bias, transparency and accountability. Modern Age Coders teaches the unit live in a Monday and Wednesday 9:00 PM IST batch, with written answers marked in class, or personalised one to one.

## Unit 3 AI class 10: why do we evaluate a model?

We evaluate a model to find out how well it will predict on new data it has never seen, before anyone relies on it. A model that looks perfect on the data it learnt from can still fail badly in the real world.

### The four reasons a written answer should give

- To measure reliability. A number such as accuracy tells us how often the model is right.

- To compare models. Two models built for one problem can only be ranked on the same test.

- To find the kind of mistake. Missing a sick patient and alarming a healthy one are different errors with different costs.

- To catch overfitting. A model that memorised its training examples scores high on them and low on anything new.

### Where evaluation sits in the project cycle

Evaluation is the last stage of the AI project cycle, after problem scoping, data acquisition, data exploration and modelling. Its result often sends the team back a step: a weak score can mean more data, cleaner data or a different model. In an answer, saying that evaluation can loop the project back earns credit that a bare definition misses.

The cycle itself, with its ethical frameworks, is covered on [the project cycle and ethics page](/cbse-class-10-ai-project-cycle-and-ethics).

- Unit 3 topic | What you must be able to do | Shape it usually takes

- Importance of evaluation | Give reasons, link to overfitting | Objective item or two-mark answer

- Train-test split | Define it, say why the test set stays unseen | Two-mark answer

- Accuracy and error | Find error, error rate and accuracy from actual and predicted values | Short calculation

- Classification metrics | Build a confusion matrix, find accuracy, precision, recall, F1 | Objective items and a case-based numerical

- Precision or recall | Pick the metric for a scenario and justify it | Two or four marks

- Ethical concerns | Explain bias, transparency and accountability with an example | Two-mark answer

## What is the train test split in class 10 AI?

The train-test split divides a labelled dataset into two parts: a training set the model learns from, and a testing set kept aside to check the model afterwards. Because the test set is unseen, its score is a fair guess of real-world performance.

```
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
cut = int(len(data) * 0.8)
train, test = data[:cut], data[cut:]
print(len(train), len(test))
print(train, test)

# Output:
# 8 2
# [1, 2, 3, 4, 5, 6, 7, 8] [9, 10]
```

- | Training set | Testing set

- Purpose | The model finds patterns in it | Checks the finished model

- Seen by the model while learning? | Yes | No, never

- Usual share | The larger part | The smaller part

- 1,200 photos at 80:20 | 960 | 240

- 1,200 photos at 70:30 | 840 | 360

### Why not test on training data?
The model has already seen those answers. A high score there can come from memory, not understanding, which is exactly what overfitting means.

### What ratio should I write?
The handbook explains the split without fixing a ratio. 80:20 and 70:30 are common in practice; name one as an example, not as a rule.

### When does it work well?
When the dataset is large enough that both parts still represent every kind of example. A tiny dataset split in two leaves each part too thin to trust.

## Accuracy and error class 10 AI: one worked table

Error is the gap between what the model predicted and what actually happened. For a number prediction, error = |actual minus predicted|, error rate = error divided by actual, and accuracy = 1 minus error rate.

```
A model predicts how long five long
bus journeys take, in minutes. Find
the error, error rate and accuracy of
each, then the overall accuracy.

error      = |actual - predicted|
error rate = error / actual
accuracy   = 1 - error rate

overall = (0.96 + 0.90 + 0.95
           + 1.00 + 0.95) / 5
        = 4.76 / 5 = 0.952, about 95%
```

- Journey | Actual | Predicted | Error | Error rate | Accuracy

- 1 | 250 | 240 | 10 | 0.04 | 0.96

- 2 | 180 | 198 | 18 | 0.10 | 0.90

- 3 | 320 | 304 | 16 | 0.05 | 0.95

- 4 | 150 | 150 | 0 | 0.00 | 1.00

- 5 | 400 | 380 | 20 | 0.05 | 0.95

- Overall accuracy (mean) | 0.952

### And for a yes or no model?

When the model sorts things into classes, accuracy is simply the share of correct predictions. If a leaf-disease model labels 50 test photos and gets 46 right, its accuracy is 46 / 50 = 0.92 and its error rate is 4 / 50 = 0.08. The two always add up to 1.

### Where the matrix questions live

Splitting those 50 predictions into true and false positives and negatives is the confusion matrix, and that is where most Unit 3 calculation marks sit. Twelve graded problems with full working are on [confusion matrix class 10 AI numericals](/confusion-matrix-class-10-ai-numericals), and every formula on one page is on [the 417 formula sheet](/cbse-class-10-ai-formula-sheet).

## Which metric is important, precision or recall?

Choose precision when a false alarm (false positive) is the costly mistake, and recall when a miss (false negative) is the costly mistake. When both matter and one class is rare, report the F1 score, which balances the two.

### The four outcomes, one sentence each

- True positive: predicted yes, and it really was yes.

- True negative: predicted no, and it really was no.

- False positive: predicted yes, but it was no. A false alarm.

- False negative: predicted no, but it was yes. A miss.

Precision asks: of everything the model flagged, how much was right? Recall asks: of everything that was really there, how much did the model catch?

- Scenario | Costlier error | Metric

- Screening for a serious illness | Missing a patient | Recall

- Moving emails to the spam folder | Hiding a real email | Precision

- Flagging card fraud | Letting a fraud through | Recall

- Approving a rocket launch on a forecast of good weather | Launching in bad weather | Precision

- Spotting forest fires from satellite images | An unseen fire | Recall

- Recommending a video to a child | An unsuitable video shown | Precision

- Rare defects, both errors costly | Neither clearly | F1 score

A four-mark answer names the positive class, says which wrong prediction hurts more and why, then names the metric. Writing only "recall" scores one mark at most. Is accuracy alone enough? No: on a dataset where 99 of 100 cases are negative, a model that always says no is 99% accurate and useless. Worked numbers for that trap sit on the numericals page, and objective practice on the same ideas is in [the class 10 AI MCQ bank](/cbse-class-10-ai-mcq-questions).

## What are the ethical concerns in model evaluation?

The ethical concerns are bias, transparency and accountability: the test must be fair to every group, the way a model was scored must be explained openly, and the people who chose the metric must answer for its effects. An honest accuracy figure is part of being transparent.

### Bias
If the test set holds mostly one kind of person, a high score says little about everyone else. A face-unlock model tested only on adults may fail for children and nobody notices. Fair evaluation tests every group the model will meet.

### Transparency
Users should know which data the model was tested on, which metric was used and what the score leaves out. Quoting 98% accuracy on a lopsided dataset while hiding a poor recall is misleading, even when the number is true.

### Accountability
Someone must take responsibility for the metric chosen and its consequences. If a loan model is tuned for precision and that turns away honest applicants, the team that chose it owns that result.

### A two-mark question to try

A school reports that its attendance face-recognition model is 97% accurate. Give two questions you would ask before trusting the figure.

Model answer (1) Was it tested on faces it had not been trained on, and did the test set include students of every age, skin tone and lighting condition (bias)? (2) What were its false positives and false negatives, since marking an absent student present matters more than one accuracy number shows (transparency)?

### Where ethics links back

Unit 1 introduces the ethical frameworks; Unit 3 asks you to apply that thinking to the scoring step. A strong answer uses the word from the question (bias, transparency or accountability) and attaches one concrete example to it. More case-style practice like this is on [the case-based questions page](/cbse-class-10-ai-case-based-questions).

## Evaluating models class 10 questions and answers, by mark band

Twelve original questions in the shapes the paper uses. Write your answer first, then open the model answer and check it against the points in bold, which is how an examiner reads it.

### One mark

- Name the stage of the AI project cycle that checks how well a model performs.
Answer Evaluation, the final stage.

- What is the part of a dataset kept aside to check a trained model called?
Answer The testing set (test data).

- A model predicted "no" for a case that was actually "yes". Name this outcome.
Answer A false negative.

- Which metric is the harmonic mean of precision and recall?
Answer The F1 score.

### Two marks

- What is overfitting, and how does the train-test split expose it?
Answer Overfitting is when a model memorises its training data and does poorly on new data. Its training score is high but its score on the unseen test set drops, and that gap reveals the problem.

- Differentiate between a false positive and a false negative, with one example each.
Answer A false positive predicts yes when the truth is no, such as a real email sent to spam. A false negative predicts no when the truth is yes, such as a sick patient told they are healthy.

- Why is accuracy alone not a good measure for a rare event?
Answer When almost every case is negative, a model that always predicts negative scores very high accuracy while catching none of the positives, so recall or F1 must be checked too.

- A model predicted that a parcel would take 36 minutes to arrive; it actually took 40 minutes. Find its error rate and accuracy.
Answer Error = |40 minus 36| = 4 minutes. Error rate = 4 / 40 = 0.1. Accuracy = 1 minus 0.1 = 0.9, or 90%.

### Four marks

- Explain the train-test split. Why is it needed, and what can go wrong if the dataset is small?
Answer The labelled data is divided into a training set for learning and a testing set kept unseen (1). The test set gives an honest estimate of performance on new data and shows overfitting (1). Common splits are 80:20 or 70:30 (1). With a small dataset, each part may miss some kinds of example, so the score becomes unreliable (1).

- An app warns farmers of locust swarms. Which metric should its makers focus on, and why?
Answer Positive = a swarm is coming (1). A false negative, no warning before a real swarm, can destroy a season's crop, while a false alarm costs only some precaution (1). So the costlier error is the miss (1), and the makers should focus on recall (1).

- Explain any two ethical concerns around model evaluation, with an example each.
Answer Bias: if the test data under-represents a group, the score hides poor performance for them, as with a voice assistant tested only on one accent (2). Transparency: how the model was tested and which metric was used must be disclosed, for example reporting recall beside accuracy for a medical model (2). Accountability is an equally good second choice.

- Two models predict exam results. Model A has precision 0.9 and recall 0.5; Model B has precision 0.7 and recall 0.7. Which would you pick to find students needing extra help, and why?
Answer Positive = needs help (1). Missing a struggling student (a false negative) costs more than giving extra help to one who did not need it (1). So recall matters more (1), and Model B, with the higher recall, is the better choice (1).

In class, each of these shapes is written to the clock, then marked on the shared screen point by point, so students see exactly which phrase earned the mark and which did not. Unit 2, the other heavy theory unit, is answered the same way on [advanced concepts of modeling questions](/cbse-class-10-ai-advanced-modeling-questions),
and the cross-unit list is on [CBSE Class 10 AI important questions](/cbse-class-10-ai-important-questions).

## The courses behind this page

- [CBSE AI for Class 9 to 12](/courses/cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843): The full 417 course: Unit 3 taught as ideas first, then written answers and case studies marked in class against the value points.
- [AI and ML for Teens](/courses/ai-ml-masterclass-teens): Train a small model, hold back a test set and watch its score change, so the reasons behind evaluation are seen, not memorised.
- [Data Science for Teens](/courses/data-science-course-for-teens-python-data): Python notebooks where the train-test split, accuracy and error are computed on real data, a step beyond the board unit.

Families also look at [Python for Teens](/courses/python-complete-masterclass-teens), [Visual Machine Learning with Orange for Teens](/courses/orange-data-mining-visual-machine-learning-course-for-teens), [CBSE Class 10 Maths board exam prep](/courses/cbse-class-10-maths-board-exam-prep-course), [CBSE and ICSE Computer Science Class 11 and 12](/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course), [CBSE Informatics Practices Class 11 and 12](/courses/cbse-informatics-practices-ip-class-11-12-python-pandas-sql-complete-course), [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course), [Hackathon Prep for Teens](/courses/hackathon-prep-for-teens-coding-ai-build-innovate-win-course), [Git and GitHub for Teens](/courses/git-github-version-control-course-for-teens).

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

**What is evaluation in class 10 AI?** Evaluation is the final stage of the AI project cycle, where a trained model is tested on data it has not seen to check how reliable its predictions are. It uses measures such as accuracy, error, precision, recall and F1 score, and its result can send a project back to collect more data or try another model.

**How many marks is Evaluating Models in CBSE Class 10 AI?** Unit 3, Evaluating Models, carries 10 of the 50 theory marks in the 417 curriculum for 2026-27, second only to Unit 2, Advanced Concepts of Modeling, at 11. In the 2025-26 sample paper it supplied six of the 24 objective items in the AI part, alongside written questions.

**What is train test split in class 10 AI?** It is dividing a labelled dataset into a training set, which the model learns from, and a testing set, which is held back and used only to check the finished model. Because the model never saw the test data, its score there is a fair estimate of how it will do on new data.

**Why should a model not be tested on its training data?** The model has already seen those examples and may simply have memorised them. Its score would look excellent while hiding overfitting, so it would tell you nothing about how the model handles new cases. Only unseen test data gives an honest measure.

**What is the difference between accuracy and error?** Error measures how far a prediction is from the actual value, while accuracy measures how close it is. For a number prediction, error rate is the error divided by the actual value, and accuracy is 1 minus the error rate, so the two always add up to 1.

**How do I know whether to use precision or recall?** Ask which wrong prediction hurts more. If a false alarm is costly, as when real emails go to spam, use precision. If a miss is costly, as when a disease or a fraud goes undetected, use recall. If both matter, especially with a rare class, use the F1 score.

**What are the ethical concerns around model evaluation?** Bias, transparency and accountability. The test data must represent every group the model will serve, the way a model was scored and its weak spots must be reported openly, and the people who chose the metric must take responsibility for its effects. Reporting accuracy honestly falls under transparency.

**Is accuracy enough to judge an AI model?** Not always. When one class is rare, a model that always predicts the common class can score very high accuracy while missing every case that matters. That is why Unit 3 also teaches precision, recall and the F1 score, and asks you to choose between them.

**Where can I find evaluation class 10 notes and practice numericals?** This page holds the concepts and written answers for Unit 3. Confusion matrix numericals with full working are on our separate numericals page, the formulas are collected on the 417 formula sheet, and objective items on the unit are in the class 10 AI MCQ bank.

**Is Unit 3 taught in your live classes, and what does it cost?** Yes. It is taught in the Monday and Wednesday 9:00 PM IST batch, with written answers marked in class, or in personalised one to one at a time you choose. The monthly fee shown on this page, in your own currency, covers it. There is no admission fee and the first class is a free demo.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Mon and Wed 9 PM AI batch](/cbse-class-10-ai-classes-online), [CBSE AI classes in the Gulf and abroad](/cbse-class-10-ai-online-classes-gulf-and-abroad), [Live doubt classes](/cbse-class-10-ai-doubt-classes), [Class 10 AI tuition online](/cbse-class-10-ai-tuition), [Class 10 AI crash course](/cbse-class-10-ai-crash-course), [1-on-1 private AI tutor](/cbse-class-10-ai-private-tutor), [AI tuition in Delhi](/class-10-ai-tuition-delhi), [AI tuition in Gurgaon](/class-10-ai-tuition-gurgaon), [AI tuition in Noida](/class-10-ai-tuition-noida), [AI tuition in Bangalore](/class-10-ai-tuition-bangalore), [AI tuition in Pune](/class-10-ai-tuition-pune).

**Unit by unit:** [CBSE AI 417 syllabus explained](/cbse-class-10-ai-syllabus-explained), [Python for Class 10 AI](/python-for-cbse-class-10-ai), [Part A employability skills](/cbse-class-10-ai-employability-skills-part-a), [Confusion matrix numericals](/confusion-matrix-class-10-ai-numericals), [Unit 2: Advanced modeling](/cbse-class-10-ai-advanced-modeling-questions), [Unit 6: Natural Language Processing](/cbse-class-10-ai-nlp-questions), [Bag of Words and TFIDF, worked](/bag-of-words-tfidf-class-10-ai), [Unit 5: Computer Vision](/cbse-class-10-ai-computer-vision-questions), [Orange Data Mining for Class 10 AI](/orange-data-mining-class-10-ai), [Unit 1: Project cycle and ethics](/cbse-class-10-ai-project-cycle-and-ethics).

**Questions and practice:** [CBSE AI important questions](/cbse-class-10-ai-important-questions), [Sample paper and mock tests](/cbse-class-10-ai-sample-paper-and-mock-tests), [Class 10 AI MCQ, unit wise](/cbse-class-10-ai-mcq-questions), [Previous year papers, solved](/cbse-class-10-ai-previous-year-question-papers), [AI practical and project viva](/cbse-class-10-ai-viva-questions), [Case based questions](/cbse-class-10-ai-case-based-questions), [Employability skills MCQ](/employability-skills-class-10-mcq), [Difference between questions](/cbse-class-10-ai-difference-between-questions), [Assertion and reason questions](/cbse-class-10-ai-assertion-reason-questions).

**Notes and revision:** [Class 10 AI notes, unit wise](/cbse-class-10-ai-notes), [Class 10 AI one shot revision](/cbse-class-10-ai-one-shot-revision), [30, 7 and 1 day revision plan](/cbse-class-10-ai-revision-plan), [Worksheets with answers](/cbse-class-10-ai-worksheets), [AI handbook exercise answers](/cbse-class-10-ai-textbook-solutions), [Best book for Class 10 AI](/best-book-for-cbse-class-10-ai), [Formula sheet](/cbse-class-10-ai-formula-sheet), [Class 10 AI notes in Hindi](/cbse-class-10-ai-notes-in-hindi).

**Exam, marks and practicals:** [CBSE AI board exam preparation](/cbse-class-10-ai-board-exam-preparation), [AI project and practical file](/cbse-class-10-ai-project-and-practical-file), [Exam date 2027 and paper pattern](/cbse-class-10-ai-exam-date-and-paper-pattern), [AI practical exam questions](/cbse-class-10-ai-practical-exam-questions), [Paper analysis and answer key](/cbse-class-10-ai-paper-analysis), [Marking scheme, explained](/cbse-class-10-ai-marking-scheme), [AI project ideas](/cbse-class-10-ai-project-ideas), [Passing marks](/cbse-class-10-ai-passing-marks), [The second board exam in May](/cbse-class-10-ai-second-board-exam).

**Choosing the subject:** [AI 417 or IT 402?](/ai-417-vs-it-402-class-10), [AI, IT or Computer Applications?](/ai-vs-computer-applications-class-10).

---

*Canonical: https://learn.modernagecoders.com/cbse-class-10-ai-evaluating-models-questions*
