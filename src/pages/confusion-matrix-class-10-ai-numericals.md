---
title: "Confusion Matrix Class 10 AI: 12 Numericals with Solutions"
description: "Confusion matrix class 10 AI numericals for CBSE 417, 2026-27: twelve graded problems on accuracy, precision, recall and F1 score, with full working."
canonical: https://learn.modernagecoders.com/confusion-matrix-class-10-ai-numericals
source: src/pages/confusion-matrix-class-10-ai-numericals.html
updated: 2026-11-06
---

> A confusion matrix in class 10 AI is a two by two table that sorts a model's predictions into true positives (TP), false positives (FP), false negatives (FN) and true negatives (TN). From it: accuracy = (TP + TN) / total, precision = TP / (TP + FP), recall = TP / (TP + FN), and F1 score = 2 x precision x recall / (precision + recall). Board numericals ask you to build the matrix from a short paragraph, then compute and interpret these. Modern Age Coders sets such numericals live in a Monday and Wednesday 9:00 PM IST batch, or one to one.

## Confusion matrix class 10 AI: the layout and the accuracy formula

Draw the matrix with the real answer across the top and the prediction down the side, then fill four cells. Every formula below reads straight off those four numbers.

```
                 Reality: Yes   Reality: No
Predicted: Yes       TP             FP
Predicted: No        FN             TN

TP + FP = everything the model flagged
TP + FN = everything that was really yes
TP + FP + FN + TN = total cases
```

- Metric | Formula | Asks

- Accuracy | (TP + TN) / total | How often is it right overall?

- Precision | TP / (TP + FP) | When it says yes, how often is it right?

- Recall | TP / (TP + FN) | Of the real yeses, how many did it catch?

- F1 score | 2PR / (P + R) | A single balance of precision and recall

- Error rate | (FP + FN) / total | How often is it wrong? (1 minus accuracy)

### The method, every time

-
**Name the positive class** Write "positive = rain" or "positive = defective" at the top. Every later step depends on it.

-
**Fill the four cells and check the total** Add the cells. If they do not reach the number of cases in the question, a cell is wrong.

-
**Write the formula, then substitute** Formula line, numbers line, answer line. Marks are given for each, so never jump to the answer.

-
**Round at the end, to two decimal places** Carry full values into F1. Rounding precision and recall first can shift the last digit.

Why a model is tested this way, and how to choose between the metrics in words, is explained on [evaluating models class 10 questions and answers](/cbse-class-10-ai-evaluating-models-questions).

## Confusion matrix numericals with solutions: the matrix is given

Warm-up level. The four counts are printed for you, so the only skills tested are the formulas and the arithmetic. Problem 4 hides one trap in the table's layout.

```
positive = ripe

              Ripe   Not ripe
Pred ripe      42        8
Pred not ripe   6       44

Find accuracy, precision, recall, F1.
```

- Metric | Working | Answer

- Accuracy | (42 + 44) / 100 | 0.86

- Precision | 42 / (42 + 8) = 42 / 50 | 0.84

- Recall | 42 / (42 + 6) = 42 / 48 | 0.875

- F1 | 2 x 0.84 x 0.875 / (0.84 + 0.875) = 1.47 / 1.715 | 0.86

```
positive = spam

TP = 120   FP = 5
FN = 30    TN = 345

Find all four metrics and the
number of emails misclassified.
```

- Metric | Working | Answer

- Accuracy | (120 + 345) / 500 = 465 / 500 | 0.93

- Precision | 120 / 125 | 0.96

- Recall | 120 / 150 | 0.80

- F1 | 2 x 0.96 x 0.80 / 1.76 = 1.536 / 1.76 | 0.87

- Misclassified | 5 + 30 | 35

```
positive = diseased

TP = 33    FP = 17
FN = 11    TN = 139

Find F1. A student writes
(0.66 + 0.75) / 2 = 0.705.
What went wrong?
```

- Metric | Working | Answer

- Precision | 33 / 50 | 0.66

- Recall | 33 / 44 | 0.75

- F1 | 2 x 0.66 x 0.75 / 1.41 = 0.99 / 1.41 | 0.70

- Accuracy | (33 + 139) / 200 | 0.86

```
positive = fraud
(rows are REALITY here)

               Pred fraud  Pred genuine
Actual fraud       27           3
Actual genuine      9         161

Find precision and recall.
```

- Metric | Working | Answer

- Precision | 27 / (27 + 9) = 27 / 36 | 0.75

- Recall | 27 / (27 + 3) = 27 / 30 | 0.90

- F1 | 1.35 / 1.65 | 0.82

- Accuracy | (27 + 161) / 200 | 0.94

## Precision recall F1 score class 10: build the matrix from the words

This is the shape most case-based questions take. The paragraph gives totals and parts; you split them into the four cells, check the sum, and only then calculate.

```
A model predicted rain on 18 days;
it rained on 15 of them. On the 42
days it predicted dry, it rained on 5.

positive = rain
TP = 15        FP = 18 - 15 = 3
FN = 5         TN = 42 - 5 = 37
check: 15 + 3 + 5 + 37 = 60
```

- Metric | Working | Answer

- Accuracy | (15 + 37) / 60 = 52 / 60 | 0.87

- Precision | 15 / 18 | 0.83

- Recall | 15 / 20 | 0.75

- F1 | 2 x 0.833 x 0.75 / 1.583 = 1.25 / 1.583 | 0.79

```
40 people have the condition. The
model flags 70 people in all and
catches 30 of the 40.

positive = has the condition
TP = 30        FP = 70 - 30 = 40
FN = 40 - 30 = 10
TN = 1000 - 30 - 40 - 10 = 920
```

- Metric | Working | Answer

- Accuracy | (30 + 920) / 1000 | 0.95

- Precision | 30 / 70 | 0.43

- Recall | 30 / 40 | 0.75

- F1 | 2 x 0.429 x 0.75 / 1.179 | 0.55

Problem 6 is worth a sentence in your answer: 95% accuracy sounds excellent, yet more than half of the people flagged are healthy and a quarter of the real cases are missed.

```
25 parts are defective. The camera
rejects 32 parts, and 20 of those
really are defective.

positive = defective
TP = 20        FP = 32 - 20 = 12
FN = 25 - 20 = 5
TN = 400 - 20 - 12 - 5 = 363
```

- Metric | Working | Answer

- Accuracy | (20 + 363) / 400 = 383 / 400 | 0.96

- Precision | 20 / 32 | 0.625

- Recall | 20 / 25 | 0.80

- F1 | 2 x 0.625 x 0.80 / 1.425 = 1.0 / 1.425 | 0.70

```
The model predicts 50 students will
pass; 44 of them do. Of the 30 it
predicts will fail, 9 actually pass.

(a) positive = pass
TP 44  FP 6  FN 9  TN 21
(b) positive = fail
TP 21  FP 9  FN 6  TN 44
```

- Metric | (a) pass positive | (b) fail positive

- Accuracy | 65 / 80 = 0.81 | 65 / 80 = 0.81

- Precision | 44 / 50 = 0.88 | 21 / 30 = 0.70

- Recall | 44 / 53 = 0.83 | 21 / 27 = 0.78

- F1 | 0.85 | 0.74

## Is accuracy enough? Compare models and work backwards

No, accuracy is not enough when one class is rare or when the two kinds of error cost different amounts. These four problems show why, then reverse the direction: a metric is given and a cell is missing.

```
Model A says "healthy" to everyone.
  TP 0   FP 0   FN 10   TN 990
Model B:
  TP 8   FP 40  FN 2    TN 950

Which model would a clinic want?
```

- Metric | Model A | Model B

- Accuracy | 990 / 1000 = 0.99 | 958 / 1000 = 0.958

- Precision | 0 / 0, cannot be found | 8 / 48 = 0.17

- Recall | 0 / 10 = 0 | 8 / 10 = 0.80

- F1 | 0 | 0.28

- Choose | B: it catches 8 of 10 real cases. Missed cases matter most, so recall decides.

```
Filter X: TP 90   FP 10  FN 30  TN 370
Filter Y: TP 110  FP 30  FN 10  TN 350

Both are 92% accurate. Which should a
school office use, where a lost parent
email is worse than a stray spam?
```

- Metric | Filter X | Filter Y

- Accuracy | 460 / 500 = 0.92 | 460 / 500 = 0.92

- Precision | 90 / 100 = 0.90 | 110 / 140 = 0.79

- Recall | 90 / 120 = 0.75 | 110 / 120 = 0.92

- F1 | 0.82 | 0.85

- Choose | X, for its higher precision, even though Y has the higher F1.

```
200 cases. TP = 40, precision = 0.8,
recall = 0.5. Find FP, FN, TN,
accuracy and F1.

40 / (40 + FP) = 0.8  so 40 + FP = 50
                      FP = 10
40 / (40 + FN) = 0.5  so 40 + FN = 80
                      FN = 40
TN = 200 - 40 - 10 - 40 = 110
accuracy = (40 + 110) / 200 = 0.75
F1 = 2 x 0.8 x 0.5 / 1.3 = 0.62
```

```
100 cases. TP = 18, FN = 12 and
accuracy = 0.80. Find TN, FP,
precision, recall and F1.

(18 + TN) / 100 = 0.80
              TN = 80 - 18 = 62
FP = 100 - 18 - 12 - 62 = 8
precision = 18 / 26 = 0.69
recall    = 18 / 30 = 0.60
F1 = 2 x 0.692 x 0.6 / 1.292 = 0.64
```

More sets in this style, printable and with answer keys, are on [the Class 10 AI worksheets page](/cbse-class-10-ai-worksheets), and the same cases arrive as four-mark questions on [CBSE Class 10 AI case-based questions](/cbse-class-10-ai-case-based-questions).

## Accuracy formula class 10 AI and the slips that cost marks

Most marks in a matrix numerical are lost before any division happens: in reading the paragraph, in placing a number in the wrong cell, or in skipping the formula line. These are the slips we see most often when marking class work.

- Slip | How it shows up | The fix

- Row total taken as TP | "Flagged 70" written as TP = 70 | Ask: is this number all the yes predictions, or only the right ones?

- FP and FN swapped | Precision and recall come out reversed | Say each cell aloud: "predicted yes, really no" is FP

- No total check | A cell is off and every metric follows | Add the four cells before computing anything

- Averaged F1 | (P + R) / 2 in place of 2PR / (P + R) | Check with 2TP / (2TP + FP + FN), which gives the same F1

- Early rounding | F1 off in the second decimal | Keep fractions or three decimals until the last line

- Answer with no line of working | Correct number, partial marks | Formula, substitution, answer: three lines every time

### One level a week in class
Monday's class works one level on the shared screen. Each student then solves a fresh problem of the same kind while the teacher watches their working appear.

### New numbers on Wednesday
The Wednesday round repeats the week's problem shapes with different figures, timed, so a remembered answer is useless and only the method scores.

### Inside every mock
From December each full mock carries a matrix case question, marked line by line, so students see which of their steps earned credit.

All five formulas sit together on [the CBSE Class 10 AI formula sheet](/cbse-class-10-ai-formula-sheet); one-mark matrix items are in [the class 10 AI MCQ bank](/cbse-class-10-ai-mcq-questions); and the mock calendar is on [the sample paper and mock tests page](/cbse-class-10-ai-sample-paper-and-mock-tests).

## The courses behind this page

- [CBSE AI for Class 9 to 12](/courses/cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843): The full 417 course: Unit 3 numericals set with fresh figures each week and marked one step at a time on the shared screen.
- [Python for Teens](/courses/python-complete-masterclass-teens): Write a ten-line program that prints accuracy, precision, recall and F1 from four counts, then use it to check your hand working.
- [CBSE Class 10 Maths Prep](/courses/cbse-class-10-maths-board-exam-prep-course): For students who lose matrix marks to division and rounding slips rather than to the AI idea itself.

Families also look at [Visual Machine Learning with Orange for Teens](/courses/orange-data-mining-visual-machine-learning-course-for-teens), [AI and ML for Teens](/courses/ai-ml-masterclass-teens), [Data Science for Teens](/courses/data-science-course-for-teens-python-data), [CBSE and ICSE Computer Science Class 11 and 12](/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course), [CBSE Informatics Practices Class 11 and 12](/courses/cbse-informatics-practices-ip-class-11-12-python-pandas-sql-complete-course), [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course), [Hackathon Prep for Teens](/courses/hackathon-prep-for-teens-coding-ai-build-innovate-win-course), [Git and GitHub for Teens](/courses/git-github-version-control-course-for-teens).

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

**What is a confusion matrix in class 10 AI?** It is a two by two table that compares a classification model's predictions with reality. Its four cells count true positives, false positives, false negatives and true negatives. Accuracy, precision, recall and F1 score are all calculated from those four counts, which is why Unit 3 numericals start by filling the matrix.

**What is the accuracy formula in class 10 AI?** Accuracy = (TP + TN) / (TP + TN + FP + FN), the correct predictions divided by all predictions. Multiply by 100 for a percentage. For example, 86 correct out of 100 gives 0.86, or 86%. Error rate is the remaining share: (FP + FN) divided by the total.

**How do you calculate precision and recall?** Precision = TP / (TP + FP): of everything the model labelled positive, the share that really was. Recall = TP / (TP + FN): of everything that really was positive, the share the model found. Both use TP on top; only the second number below the line differs.

**How do you find the F1 score in class 10 AI?** F1 = 2 x precision x recall / (precision + recall). Find precision and recall first, keep three decimals, then substitute. A quick check is 2TP / (2TP + FP + FN), which gives the same value. Never take the plain average of precision and recall: that is a different, wrong number.

**How do I make a confusion matrix from a paragraph?** Name the positive class first. Then find TP (predicted yes, really yes), use the predicted-yes total to get FP, the real-yes total to get FN, and subtract all three from the grand total for TN. Add the four cells to confirm they match the number of cases before calculating.

**Is accuracy enough to evaluate a model?** No. When one class is rare, a model that always predicts the common class can score 99% accuracy and still find nothing. Two models with the same accuracy can also make very different mistakes. Precision, recall and F1 show what accuracy hides, and Unit 3 numericals often test this.

**What is the difference between a false positive and a false negative?** A false positive is a yes prediction that turns out to be no, such as a healthy person flagged as ill. A false negative is a no prediction that turns out to be yes, such as an ill person told they are fine. Which one matters more decides whether precision or recall is the key metric.

**How many decimal places should I give?** Two decimal places is the usual safe choice unless the question asks otherwise, and a percentage is acceptable where it fits. Keep more decimals in your working and round only on the final line, because rounding precision and recall early can shift the F1 score.

**How many marks do confusion matrix questions carry?** Evaluating Models carries 10 theory marks in CBSE 417, and matrix numericals appear both as one-mark objective items and inside longer case-based questions. The exact split for the 2027 paper will be clear only when CBSE releases the 2026-27 sample paper, so practise both shapes.

**Do your classes include confusion matrix practice?** Yes. Matrix numericals are taught and practised in the Monday and Wednesday 9:00 PM IST batch and in personalised one to one, with working marked step by step. The monthly fee shown on this page, in your own currency, covers it. There is no admission fee and the first class is a free demo.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Mon and Wed 9 PM AI batch](/cbse-class-10-ai-classes-online), [CBSE AI classes in the Gulf and abroad](/cbse-class-10-ai-online-classes-gulf-and-abroad).

**Unit by unit:** [CBSE AI 417 syllabus explained](/cbse-class-10-ai-syllabus-explained), [Python for Class 10 AI](/python-for-cbse-class-10-ai), [Part A employability skills](/cbse-class-10-ai-employability-skills-part-a), [Unit 3: Evaluating Models](/cbse-class-10-ai-evaluating-models-questions), [Unit 2: Advanced modeling](/cbse-class-10-ai-advanced-modeling-questions), [Unit 6: Natural Language Processing](/cbse-class-10-ai-nlp-questions), [Bag of Words and TFIDF, worked](/bag-of-words-tfidf-class-10-ai), [Unit 5: Computer Vision](/cbse-class-10-ai-computer-vision-questions).

**Questions and practice:** [CBSE AI important questions](/cbse-class-10-ai-important-questions), [Sample paper and mock tests](/cbse-class-10-ai-sample-paper-and-mock-tests), [Class 10 AI MCQ, unit wise](/cbse-class-10-ai-mcq-questions), [Previous year papers, solved](/cbse-class-10-ai-previous-year-question-papers), [AI practical and project viva](/cbse-class-10-ai-viva-questions), [Case based questions](/cbse-class-10-ai-case-based-questions), [Employability skills MCQ](/employability-skills-class-10-mcq).

**Notes and revision:** [Class 10 AI notes, unit wise](/cbse-class-10-ai-notes), [Class 10 AI one shot revision](/cbse-class-10-ai-one-shot-revision), [30, 7 and 1 day revision plan](/cbse-class-10-ai-revision-plan), [Worksheets with answers](/cbse-class-10-ai-worksheets).

**Exam, marks and practicals:** [CBSE AI board exam preparation](/cbse-class-10-ai-board-exam-preparation), [AI project and practical file](/cbse-class-10-ai-project-and-practical-file), [Exam date 2027 and paper pattern](/cbse-class-10-ai-exam-date-and-paper-pattern), [AI practical exam questions](/cbse-class-10-ai-practical-exam-questions).

---

*Canonical: https://learn.modernagecoders.com/confusion-matrix-class-10-ai-numericals*
