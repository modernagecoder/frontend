---
title: "Class 10 AI Formulas 2026-27 (417): One-Page Formula Sheet"
description: "Class 10 AI formulas for CBSE 417, 2026-27: accuracy, precision, recall, F1, error, TFIDF, pixels and the perceptron sum, each with a worked line."
canonical: https://learn.modernagecoders.com/cbse-class-10-ai-formula-sheet
source: src/pages/cbse-class-10-ai-formula-sheet.html
updated: 2026-11-06
---

> The class 10 AI formulas for CBSE 417 in 2026-27 come from four units. Evaluating Models: accuracy = (TP + TN) / total, error rate = 1 minus accuracy, precision = TP / (TP + FP), recall = TP / (TP + FN), F1 = 2PR / (P + R). Modeling: perceptron sum = inputs times weights, added, plus bias. Computer Vision: pixels = width x height, values = pixels x 3 for RGB, 2 to the power 8 = 256 levels. NLP: TFIDF = TF x log10(N / documents containing the word). Modern Age Coders drills them live, Monday and Wednesday at 9:00 PM IST, or one to one.

## What formulas are in class 10 AI? The complete list

Twenty formulas and rules cover every calculation in the 417 syllabus. Numbers 1 to 16 can appear in the theory paper; 17 to 20 belong to the practical units. The worked lines underneath use the same figures, so you can check each one.

- No. | Formula or rule | Unit | Worked one-liner

- 1 | Total = TP + FP + FN + TN | 3 | 56 + 14 + 8 + 122 = 200

- 2 | Accuracy = (TP + TN) / total | 3 | (56 + 122) / 200 = 0.89

- 3 | Error rate = (FP + FN) / total = 1 - accuracy | 3 | 22 / 200 = 0.11

- 4 | Precision = TP / (TP + FP) | 3 | 56 / 70 = 0.80

- 5 | Recall = TP / (TP + FN) | 3 | 56 / 64 = 0.875

- 6 | F1 = 2 x P x R / (P + R) | 3 | 2 x 0.80 x 0.875 / 1.675 = 0.84

- 7 | Error = |actual - predicted|; error rate = error / actual; accuracy = 1 - error rate | 3 | |250 - 230| = 20; 20 / 250 = 0.08; 0.92

- 8 | Train-test split: rows x share | 3 | 1,200 at 75:25 = 900 train, 300 test

- 9 | Perceptron sum = x1w1 + x2w2 + ... + bias; output 1 if it passes the threshold | 2 | 0.2 + 0 - 0.4 + 0.6 - 0.3 = 0.1, so 1

- 10 | Pixels = width x height | 5 | 1024 x 768 = 786,432

- 11 | Values stored = pixels x channels (1 grayscale, 3 RGB) | 5 | 786,432 x 3 = 2,359,296

- 12 | Levels = 2bits; values run 0 to 2bits - 1 | 5 | 28 = 256, so 0 to 255

- 13 | Tokens = words + punctuation marks | 6 | "Rain fell, and the match stopped." = 8

- 14 | Bag of Words vector = count of each dictionary word, in dictionary order | 6 | [ball, bat, run, out] for "bat ball bat run" = [1, 2, 1, 0]

- 15 | TF = count of the word in that document; IDF = N / DF | 6 | N 6, word in 3 documents: IDF = 6 / 3 = 2

- 16 | TFIDF = TF x log10(N / DF) | 6 | 2 x log10 2 = 0.602

- 17 | Mean = sum / count | 4, practical | 72 / 6 = 12

- 18 | Median = middle of the sorted list; even count: average of the two middle values | 4, practical | 9, 9, 11, 12, 14, 17: (11 + 12) / 2 = 11.5

- 19 | Mode = the most frequent value | 4, practical | 9 appears twice, so 9

- 20 | Convolution output size = n - k + 1 | 5, practical | 7 x 7 image, 3 x 3 kernel: 5 x 5

### Where these formulas earn marks

Evaluating Models, worth 10 theory marks, holds six of the twenty and supplies most of the calculation items in a paper. In the latest sample paper the perceptron sum appears only as a one-mark objective item, and pixel or token counts usually do too. TFIDF can come as a short calculation inside an NLP answer.

### Printing it

Print the table above on its own: choose Print in your browser, set the range to the first page, and save as PDF if you want a file. It is meant to be read the evening before the paper, after you have written each formula from memory first.

## Accuracy, precision, recall and F1 formula for class 10 AI

Accuracy is correct predictions over all predictions; precision is how many of the predicted positives were right; recall is how many of the real positives were caught; F1 combines precision and recall into one score. All four start from the confusion matrix, so build that first.

```
A plant-disease app checks 200 leaf photos.
                Really diseased   Healthy
Predicted sick     TP = 56        FP = 14
Predicted fine     FN = 8         TN = 122

Accuracy   = 178 / 200         = 0.89
Error rate = 22 / 200          = 0.11
Precision  = 56 / 70           = 0.80
Recall     = 56 / 64           = 0.875
F1         = 1.4 / 1.675       = 0.84
```

```
tp, fp, fn, tn = 56, 14, 8, 122
total = tp + fp + fn + tn
p = tp / (tp + fp)
r = tp / (tp + fn)
print(total, (tp + tn) / total, (fp + fn) / total)
print(p, r, round(2 * p * r / (p + r), 2))

# output
200 0.89 0.11
0.8 0.875 0.84
```

### Error for a number prediction (formula 7)

When a model predicts a number, not a yes or no, there is no matrix. Error is the gap, ignoring the sign. A bus app predicts a 230-second wait; the bus takes 250. Error = 20 seconds, error rate = 20 / 250 = 0.08, and accuracy for that prediction = 1 - 0.08 = 0.92.

### Train-test split (formula 8)

Multiply the rows by each share. 1,200 rows split 75:25 gives 900 to train on and 300 to test on. The test rows must be ones the model never saw in training.

### Which metric the question wants

- The costly mistake | Cell | Use

- Missing a real case (disease, fire, fraud) | FN | Recall

- A false alarm (good mail sent to spam) | FP | Precision

- Both matter, or classes are uneven | FP and FN | F1

- Both classes common and equal in cost | All four | Accuracy

Ten graded matrix problems are on [confusion matrix numericals](/confusion-matrix-class-10-ai-numericals), and the written answers for the rest of the unit on [evaluating models questions](/cbse-class-10-ai-evaluating-models-questions).

## TFIDF formula for class 10, with tokens and Bag of Words

TFIDF = TF x log10(N / DF), where TF is how often the word appears in this document, N is the number of documents and DF is how many of them contain the word. It is high for a word common in one document and rare in the rest.

### The four NLP rules in order

- Tokens. Split into words and keep each punctuation mark as its own token. "Rain fell, and the match stopped." has six words, a comma and a full stop: 8 tokens.

- Bag of Words. After normalising, list each unique word once as the dictionary, then count. Dictionary [ball, bat, run, out]; "bat ball bat run" becomes [1, 2, 1, 0]. Order follows the dictionary, not the sentence.

- TF and IDF. TF is the raw count from the vector. The CBSE handbook writes IDF as the ratio N / DF, and takes its logarithm in the next step.

- TFIDF. Multiply TF by log10 of that ratio. Base 10, not the natural log: a calculator's ln key gives different numbers that will not match the marking scheme.

- N = 6 documents | TF | DF | TFIDF

- Word in half the documents | 2 | 3 | 2 x log10(6/3) = 0.602

- Word in only this document | 1 | 1 | log10(6/1) = 0.778

- Word repeated, in two documents | 4 | 2 | 4 x log10(6/2) = 1.908

- Word in every document | any | 6 | log10(6/6) = 0

A word that appears in every document scores 0 however often it occurs, which is why stopwords such as "the" and "is" end up worthless for telling documents apart. The whole pipeline on a three-document corpus, cell by cell, is on [Bag of Words and TFIDF, worked](/bag-of-words-tfidf-class-10-ai); the rest of the unit is on [NLP questions and answers](/cbse-class-10-ai-nlp-questions).

## Pixel, colour value and perceptron formulas

The number of pixels is width times height; the number of values stored is pixels times channels; the perceptron's sum is each input times its weight, added, plus the bias. These are short one-mark calculations, so the only real risk is a slip.

```
inputs   1     0     1     1
weights  0.2   0.9   -0.4  0.6
bias     -0.3

sum = 0.2 + 0 - 0.4 + 0.6 - 0.3 = 0.1
0.1 > 0, so output = 1
```

```
import math
x = [1, 0, 1, 1]
w = [0.2, 0.9, -0.4, 0.6]
s = sum(a * b for a, b in zip(x, w)) - 0.3
print(round(s, 2), 1 if s > 0 else 0)
print(1024 * 768, 1024 * 768 * 3, 2 ** 8)
print(round(2 * math.log10(6 / 3), 3), round(math.log10(6 / 1), 3), math.log10(6 / 6))

# output
0.1 1
786432 2359296 256
0.602 0.778 0.0
```

- Image | Pixels (formula 10) | Values in grayscale | Values in RGB (formula 11)

- 1024 x 768 | 786,432 | 786,432 | 2,359,296

For formula 12, an 8-bit value has 28 = 256 possible levels, 0 (black) to 255 (white). The rule works for any bit depth: with 1 bit there are only 2 levels, black and white. The perceptron is drilled on [Unit 2 modeling questions](/cbse-class-10-ai-advanced-modeling-questions) and the image counts on [Unit 5 computer vision questions](/cbse-class-10-ai-computer-vision-questions).

## Statistics and convolution: the formulas for the practical and viva

Statistical Data and Advance Python are not in the theory paper, and convolution sits on the practical side of Computer Vision. Examiners ask about these in the lab exam and viva, usually as "what will this program print?".

```
import numpy as np
from statistics import mode
d = [14, 9, 11, 9, 17, 12]
print(np.mean(d), np.median(d), mode(d))

# output
12.0 11.5 9
```

```
output size = n - k + 1
7 x 7 image, 3 x 3 kernel -> 5 x 5

one output cell = multiply and add
patch  [[1, 2],    kernel [[0, 1],
        [3, 4]]            [1, 0]]
= 1x0 + 2x1 + 3x1 + 4x0 = 5
```

The eight suggested lab programs, written and explained, are on [Python for CBSE Class 10 AI](/python-for-cbse-class-10-ai).

## AI class 10 cheat sheet: the slips that cost formula marks

Students rarely forget a formula outright. They lose marks by feeding it the wrong number. These are the slips we see most often when marking timed numerical sets.

- Formula | The slip | The check that catches it

- Precision and recall | FP and FN swapped, so the two answers trade places | Precision's denominator is the "predicted yes" row; recall's is the "really yes" column

- F1 | Taking the plain average | F1 must be at or below the average; if it is above, redo it

- Accuracy | Dividing by TP + TN only, giving 1 | The denominator is always all four cells

- Error, number model | A negative error | Use the gap without its sign

- Perceptron | Bias left out, or a 0 input still counted | Write one product per input, then the bias, then add

- RGB values | Answering in pixels when values were asked | Underline "pixels" or "values" in the question

- Tokens | Punctuation not counted | Circle every mark before counting

- TFIDF | Natural log, or IDF written upside down as DF / N | Use log10; a word in every document must come out 0

### One family per Monday
Each Monday class takes one family of formulas, metrics or NLP or images, builds it from the idea up, and works examples on screen with the class calling out each step.

### Fresh numbers on Wednesday
The Wednesday class sets a timed numerical set on new figures, marked live, so a remembered answer is no use and only the method scores.

### Formula recall inside mocks
Before each full mock, students write this sheet from memory in five minutes. Any formula missing from their version is drilled again that week.

One-mark items that use these formulas, with answers and reasons, are on [Class 10 AI MCQ with answers](/cbse-class-10-ai-mcq-questions).

## The courses behind this page

- [CBSE AI for Class 9 to 12](/courses/cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843): The full 417 course: each formula taught from its idea, then practised as timed numericals marked in class.
- [Python for Teens](/courses/python-complete-masterclass-teens): NumPy and plain Python versions of the formulas, the way the lab exam and viva ask about them.
- [Data Science for Teens](/courses/data-science-course-for-teens-python-data): Accuracy, precision and recall computed on real data sets in notebooks, a step past the board unit.

Families also look at [Visual Machine Learning with Orange for Teens](/courses/orange-data-mining-visual-machine-learning-course-for-teens), [AI and ML for Teens](/courses/ai-ml-masterclass-teens), [CBSE Class 10 Maths board exam prep](/courses/cbse-class-10-maths-board-exam-prep-course), [CBSE and ICSE Computer Science Class 11 and 12](/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course), [CBSE Informatics Practices Class 11 and 12](/courses/cbse-informatics-practices-ip-class-11-12-python-pandas-sql-complete-course), [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course), [Hackathon Prep for Teens](/courses/hackathon-prep-for-teens-coding-ai-build-innovate-win-course), [Git and GitHub for Teens](/courses/git-github-version-control-course-for-teens).

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

**What are the formulas in class 10 AI?** Most are in Evaluating Models: accuracy, error rate, precision, recall and F1 score from a confusion matrix, plus error for number predictions and the train-test split. The others are the perceptron weighted sum, pixel and colour-value counts in Computer Vision, and token counts, Bag of Words and TFIDF in NLP. Mean, median, mode and convolution belong to the practical.

**What is the formula of accuracy, precision and recall?** Accuracy = (TP + TN) / (TP + TN + FP + FN). Precision = TP / (TP + FP), the share of predicted positives that were right. Recall = TP / (TP + FN), the share of real positives the model caught. For TP 56, FP 14, FN 8, TN 122 they are 0.89, 0.80 and 0.875.

**What is the F1 score formula in class 10 AI?** F1 = 2 x precision x recall / (precision + recall). It balances the two and is pulled toward the lower one. With precision 0.80 and recall 0.875, F1 = 1.4 / 1.675 = 0.84, slightly below their plain average of 0.8375. Never take the simple average.

**What is the TFIDF formula for class 10?** TFIDF(W) = TF(W) x log10(N / DF(W)). TF is how many times the word appears in the document, N is the total number of documents, and DF is how many documents contain the word. For a word appearing twice in a document and in 3 of 6 documents, TFIDF = 2 x log10 2 = 0.602.

**Is log base 10 or natural log used for TFIDF in class 10 AI?** Base 10. The CBSE handbook for Class 10 AI takes log to base 10 of N divided by DF. Natural log, or the smoothed version software libraries use, gives different numbers that will not match the marking scheme, so use the log button for base 10 when you check your work.

**How do you calculate error in class 10 AI?** For a model that predicts a number, error = |actual - predicted|, error rate = error / actual, and accuracy = 1 minus the error rate. A wait predicted as 230 seconds that was really 250 gives error 20, rate 0.08 and accuracy 0.92. For a classifier, error rate = (FP + FN) / total, which is 1 minus accuracy.

**How do you calculate the number of pixels in an image?** Multiply width by height in pixels. A 1024 x 768 image has 786,432 pixels. A grayscale image stores one value per pixel, so 786,432 values; an RGB image stores three, one each for red, green and blue, so 2,359,296. With 8 bits per value each one runs from 0 to 255.

**How is the perceptron output calculated?** Multiply each input by its weight, add the products, add the bias, then compare with the threshold. Inputs 1, 0, 1, 1 with weights 0.2, 0.9, -0.4, 0.6 and bias -0.3 give 0.1, above a threshold of 0, so the output is 1. In the latest sample paper this appears only as an objective item.

**Is there an AI class 10 cheat sheet I can print?** Yes, the numbered table at the top of this page is the cheat sheet: twenty formulas and rules with a worked line each. Use your browser's Print option and save it as a PDF if you want a file. It is for revision at home; nothing can be taken into the board exam hall.

**Are mean, median and mode asked in the class 10 AI theory paper?** No. They belong to Statistical Data, which is assessed only in the practical, together with Advance Python. Expect them in the lab exam and viva, often as a NumPy program whose output you must predict, such as the median of an even-length list.

**Do your classes cover all these numericals?** Yes. Every formula on this sheet is taught from its idea and then drilled on fresh figures in timed sets, marked live, in the Monday and Wednesday 9:00 PM IST batch or one to one. It is covered by the monthly fee shown on this page, with no admission fee, and the first class is a free demo.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Mon and Wed 9 PM AI batch](/cbse-class-10-ai-classes-online), [CBSE AI classes in the Gulf and abroad](/cbse-class-10-ai-online-classes-gulf-and-abroad).

**Unit by unit:** [CBSE AI 417 syllabus explained](/cbse-class-10-ai-syllabus-explained), [Python for Class 10 AI](/python-for-cbse-class-10-ai), [Part A employability skills](/cbse-class-10-ai-employability-skills-part-a), [Unit 3: Evaluating Models](/cbse-class-10-ai-evaluating-models-questions), [Confusion matrix numericals](/confusion-matrix-class-10-ai-numericals), [Unit 2: Advanced modeling](/cbse-class-10-ai-advanced-modeling-questions), [Unit 6: Natural Language Processing](/cbse-class-10-ai-nlp-questions), [Bag of Words and TFIDF, worked](/bag-of-words-tfidf-class-10-ai), [Unit 5: Computer Vision](/cbse-class-10-ai-computer-vision-questions).

**Questions and practice:** [CBSE AI important questions](/cbse-class-10-ai-important-questions), [Sample paper and mock tests](/cbse-class-10-ai-sample-paper-and-mock-tests), [Class 10 AI MCQ, unit wise](/cbse-class-10-ai-mcq-questions), [Previous year papers, solved](/cbse-class-10-ai-previous-year-question-papers), [AI practical and project viva](/cbse-class-10-ai-viva-questions), [Case based questions](/cbse-class-10-ai-case-based-questions), [Employability skills MCQ](/employability-skills-class-10-mcq).

**Notes and revision:** [Class 10 AI notes, unit wise](/cbse-class-10-ai-notes), [Class 10 AI one shot revision](/cbse-class-10-ai-one-shot-revision), [30, 7 and 1 day revision plan](/cbse-class-10-ai-revision-plan), [Worksheets with answers](/cbse-class-10-ai-worksheets), [AI handbook exercise answers](/cbse-class-10-ai-textbook-solutions).

**Exam, marks and practicals:** [CBSE AI board exam preparation](/cbse-class-10-ai-board-exam-preparation), [AI project and practical file](/cbse-class-10-ai-project-and-practical-file), [Exam date 2027 and paper pattern](/cbse-class-10-ai-exam-date-and-paper-pattern), [AI practical exam questions](/cbse-class-10-ai-practical-exam-questions).

---

*Canonical: https://learn.modernagecoders.com/cbse-class-10-ai-formula-sheet*
