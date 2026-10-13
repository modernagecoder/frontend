---
title: "CBSE Class 10 AI Important Questions 2027 (417), Unit-Wise"
description: "CBSE Class 10 AI (417) important questions 2027, unit-wise: MCQs, confusion matrix numericals, Bag of Words, Part A and viva questions, practised live."
canonical: https://learn.modernagecoders.com/cbse-class-10-ai-important-questions
source: src/pages/cbse-class-10-ai-important-questions.html
updated: 2026-10-13
---

> The most important questions for CBSE Class 10 AI (417) in 2027 follow the blueprint: about half the 50 theory marks are one-mark objective questions, and the rest are two-mark answers of 20 to 30 words and four-mark answers of 50 to 80 words. The highest-value shapes are the confusion matrix numerical (accuracy, precision, recall, F1 score), the AI project cycle and bioethics case study, supervised versus unsupervised models, the Bag of Words vector, token counting, stemming versus lemmatisation, and pixel and image basics, plus ten marks of Part A employability skills. Modern Age Coders practises every one of these live, marked against the CBSE value points, in a Monday and Wednesday 9 PM IST batch or personalised one to one.

## Important means frequent, heavily weighted or easy to lose marks on

      We do not guess what will be asked. The list below comes from three things CBSE publishes: the 2026-27 curriculum, the blueprint that counts questions per unit, and the sample paper's question shapes.

        - Question shape | Marks | Where it comes from | How students lose it

          - Objective: MCQ, assertion and reason, fill in, true or false | 1 | Every theory unit and Part A | Reading the reason as a fact rather than as an explanation of the assertion

          - Short answer, 20 to 30 words | 2 | Part A, and Units 1, 2, 3, 5, 6 | One point when the question wanted two

          - Case study, 50 to 80 words | 4 | Units 1, 2, 3, 6 | Answering the story, not the sub-parts

          - Numerical: confusion matrix and metrics | 1 to 4 | Unit 3, Evaluating Models | Swapping false positives and false negatives

          - Text processing: tokens, Bag of Words | 1 to 4 | Unit 6, Natural Language Processing | Counting tokens without the punctuation

          - Program and tool questions | Practical | Units 4 and 7, practical file, viva | Code that runs but cannot be explained

      Statistical Data and Advance Python are assessed only through the practical, so questions from them sit
      in the practical and viva section at the end of this page, not among the theory questions. The marks behind each
      unit, and the full blueprint, are on [CBSE Class 10 AI exam date and paper pattern](/cbse-class-10-ai-exam-date-and-paper-pattern).

## Project cycle, ethics and the families of AI models

      Unit 1 carries seven theory marks and Unit 2 eleven, with two long answers in Unit 2 alone. Together they make up more than a third of the theory paper.

### Unit 1: Revisiting the AI Project Cycle and Ethical Frameworks

          - Name the stages of the AI project cycle in order, and say what happens in the second and third stages.

          - Fill the 4Ws problem canvas (who, what, where, why) for a given school problem and write the problem statement.

          - Name the three domains of AI by the type of data each uses, with one application of each.

          - What is an ethical framework, and why does AI need one?

          - Distinguish sector-based from value-based frameworks; name the rights-based, utility-based and virtue-based approaches.

          - State the four principles of bioethics and apply two of them to a case study.

          - A case study of a biased system: give two reasons the output was unfair and one fix.

          - Assertion and reason questions on frameworks, where the reason may be true without explaining the assertion.

### Unit 2: Advanced Concepts of Modeling in AI

          - Differentiate artificial intelligence, machine learning and deep learning, with an example of each.

          - Rule-based versus learning-based approach: which adapts to new data, and why?

          - Define features, labels, training data and testing data in a given dataset.

          - Supervised, unsupervised and reinforcement learning: one line on each and one example.

          - Classification versus regression: identify which one a scenario needs.

          - Clustering versus association, the two kinds of unsupervised model, with an example of each.

          - Identify ANN or CNN from a description of how the model works.

          - Perceptron: compute a weighted sum plus bias. In the latest blueprint this appears only as a one-mark objective question.

      Most marks in Unit 2 are lost on scenario questions. Students learn the definitions, but the paper describes
      a fitness tracker or a wildlife camera and asks which kind of model it is. In class, every definition is
      followed by three short scenarios to sort, and doubts are settled before the next definition is taught.

## The confusion matrix numerical, solved the weak way and the full-marks way

      An AI model checks whether mangoes are ripe; ripe is the positive class. Of 200 mangoes, it correctly calls 90 ripe ones ripe and 70 unripe ones unripe. It calls 30 unripe mangoes ripe and misses 10 ripe ones. Draw the confusion matrix and find accuracy, precision, recall and F1 score.

```
TP = 90  TN = 70
FP = 10  FN = 30      # swapped

Accuracy  = 160 / 200 = 80%
Precision = 90 / 100  = 0.9
Recall    = 90 / 120  = 0.75
F1        = (0.9 + 0.75) / 2
          = 0.825

# accuracy right by luck,
# FP and FN reversed, so
# precision and recall swap,
# and F1 taken as an average.
```

```
              Reality: Yes  Reality: No
Predicted Yes   TP = 90      FP = 30
Predicted No    FN = 10      TN = 70

Accuracy  = (TP + TN) / total
          = (90 + 70) / 200 = 0.80
Precision = TP / (TP + FP)
          = 90 / 120 = 0.75
Recall    = TP / (TP + FN)
          = 90 / 100 = 0.90
F1 = 2 x P x R / (P + R)
   = 1.35 / 1.65 = 0.82
```

### The Unit 3 questions to drill

          - Why is a model not evaluated on the data it was trained on? (overfitting, an over-optimistic score)

          - Explain the train-test split in two sentences.

          - Find the error of a prediction: predicted 52, actual 50, so error = |52 - 50| / 50 = 0.04.

          - Build a confusion matrix from a paragraph, then find accuracy and the number of wrong predictions.

          - Which metric matters more for a disease test, and which for a spam filter? Justify in 30 words.

          - Ethical concerns in evaluation: bias, transparency and accuracy.

### Why the metric question decides grades

        The four-mark version of this question often ends with "which metric would you use, and why?" For a disease test, a missed patient (a false negative) is the costly error, so recall matters most. For a spam filter, a real email sent to spam (a false positive) is the costly error, so precision matters. Students who learn the formulas but not this reasoning lose the last mark every time.

        Every Monday unit test on Evaluating Models uses fresh numbers, so a student who memorised last week's answer gains nothing. Only a student who can build the matrix from words scores.

## Pixels and images for four marks, text processing for eight

      Computer Vision has no long answer in the latest blueprint, so its four marks come from objective and short questions. Natural Language Processing carries eight, including a four-mark text processing question.

### Unit 5: Computer Vision

          - Identify the CV task from an application: image classification, object detection or segmentation.

          - Image processing versus computer vision: which is a subset of which?

          - What is a pixel, and what does a pixel value of 0 or 255 mean in a grayscale image?

          - What does a resolution of 1280 x 720 mean, and how many pixels is it? (921,600)

          - Grayscale versus RGB: how many values does each pixel carry?

          - What is the byte image format, and why does it give 256 levels?

          - What does a convolution kernel do to an image, in one line?

### Unit 6: Natural Language Processing

          - Why is natural language hard for a computer? Give an example of one word with two meanings.

          - Name the NLP application in a scenario: voice assistant, captions, translation, sentiment analysis, text classification or keyword extraction.

          - identify the stage of NLP (lexical, syntactic, semantic, discourse integration, pragmatic) from a pair of sentences.

          - Script bot versus smart bot: four differences.

          - Count the tokens in a sentence, where every word, number and punctuation mark is a separate token.

          - Stemming versus lemmatisation: "studies" becomes "studi" when stemmed and "study" when lemmatised.

          - Build the dictionary and the document vectors for two or three short documents.

          - What does TFIDF capture that a plain word count does not?

```
Doc 1: [rain, helps, crops]
Doc 2: [crops, need, rain, and, sun]

(a) Dictionary of unique words
(b) Document vector for Doc 2
(c) Why is word order ignored?
```

```
(a) rain, helps, crops, need, and, sun

(b)  rain helps crops need and sun
       1    0     1     1    1   1

(c) Bag of Words records which words
    occur and how often, not where.
    It treats the text as a collection
    of words, so the order is not stored.
```

## Ten theory marks in Part A, and the questions examiners ask in the lab

### Part A, employability skills: questions worth drilling

          - Communication: verbal versus non-verbal communication; identify a gesture or posture; parts of speech with an example.

          - Self-management: steps to build self-motivation; SMART goals; two ways to manage stress.

          - ICT: what a computer virus does, two ways personal data can leak, basic care of a computer.

          - Entrepreneurship: functions of an entrepreneur from a short story; the enter, survive, grow stages.

          - Green skills: what sustainable development means; organic farming and two of its benefits; which SDG an action supports.

        Students answer four of six objective questions and three of five written ones, so preparing every unit lightly beats preparing two units deeply. The full unit-by-unit guide is on [Part A employability skills](/cbse-class-10-ai-employability-skills-part-a).

### Practical and viva questions (Units 4 and 7, file and project)

          - Write a program to add the elements of two lists, and explain each line.

          - Find the mean, median and mode of a list using NumPy.

          - Draw a line chart and a scatter chart from given points with Matplotlib.

          - Read a CSV file and show its first ten rows, then its information.

          - Read an image in Python, display it and report its shape.

          - Viva: what is no-code AI, and what did you do in Orange Data Mining?

          - Viva: which stage of the AI project cycle took your project longest, and why?

          - Viva: which Sustainable Development Goal does your project relate to?

        The file and project themselves are planned on [the AI project and practical file page](/cbse-class-10-ai-project-and-practical-file).

## A question bank is a starting point; marking is what makes it work

      Students who work through a list of questions alone usually check only whether they got the idea right. The CBSE marking scheme checks whether they wrote the value points. Live practice closes that gap.

### Timed, then marked aloud
Each Monday the class writes a set of the unit's question shapes against a timer: objective questions at about a minute each, two-mark answers in three. Answers are then marked on screen against the value points, and students see exactly which phrase earned the mark.

### Rewritten until it scores
A two-mark answer that scored one is rewritten in class, not just corrected. The second attempt is when the official vocabulary actually sticks: the names of the stages, the metrics and the principles that examiners look for.

### Doubts settled before moving on
Any student can stop the class and ask why their answer lost a mark. The teacher works through it on the shared screen while the confusion is fresh. Doubts from homework open the next class, and with two classes a week they never wait for long.

      From December, the same question shapes appear in full papers: the official sample paper solved live, then
      three timed mocks, described on [the sample paper and mock tests page](/cbse-class-10-ai-sample-paper-and-mock-tests).
      For revision in the last weeks before the paper, see [CBSE Class 10 AI board exam preparation](/cbse-class-10-ai-board-exam-preparation).

## The courses behind this page

- [CBSE AI for Class 9 to 12](/courses/cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843): The full 417 course: every theory unit taught and then practised as objective, short and long questions, marked against the CBSE value points.
- [Python for Teens](/courses/python-complete-masterclass-teens): The NumPy, pandas, Matplotlib and image programs that the practical exam and viva ask students to write and explain.
- [Visual ML with Orange](/courses/orange-data-mining-visual-machine-learning-course-for-teens): Orange Data Mining, the no-code tool the curriculum uses for statistical data, computer vision and sentiment analysis case studies.

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

**What are the most important questions for CBSE Class 10 AI?** Those that are frequent, heavily weighted or easy to lose marks on: the confusion matrix numerical with accuracy, precision, recall and F1 score; the AI project cycle and bioethics case study; supervised, unsupervised and reinforcement learning; classification versus regression; the Bag of Words vector and token counting; stemming versus lemmatisation; pixels and resolution; and the ten marks of Part A employability skills.

**Which unit is most important in CBSE Class 10 AI?** Advanced Concepts of Modeling carries the most theory marks, 11, and is the only unit with two long-answer questions in the latest blueprint. Evaluating Models follows with 10 marks and its confusion matrix numerical. Natural Language Processing carries 8, the AI project cycle and ethics unit 7, and Computer Vision 4.

**Are numericals asked in CBSE Class 10 AI?** Yes. Evaluating Models brings confusion matrix questions: building the matrix from a paragraph, then finding accuracy, precision, recall or F1 score, and sometimes the error of a single prediction. The perceptron weighted sum also appears, as a one-mark objective question. Token counts and Bag of Words vectors in NLP are calculation-style questions too.

**Are questions asked from Statistical Data and Python in the theory paper?** Not in the current scheme. Statistical Data (Unit 4) and Advance Python (Unit 7) are assessed through the practical: the practical file, the practical exam and the viva. Their questions appear when your child writes programs and explains them to the examiner, which is why our Wednesday classes rehearse them.

**How many MCQs are there in the CBSE Class 10 AI paper?** In the latest official sample paper, Section A has 30 one-mark objective questions, of which students answer 24: four of six from Part A and twenty of twenty-four from the AI units. They include multiple choice, assertion and reason, fill in the blank and true or false. There is no negative marking.

**How long should a two-mark or four-mark answer be?** The paper sets 20 to 30 words for two-mark answers and 50 to 80 words for four-mark answers. Writing more earns nothing extra and costs time. In our classes students practise hitting every value point inside the limit, and answers that run long are trimmed in class.

**Do you give a list of important questions or teach them?** Both, but the teaching matters more. Students get the question shapes unit by unit, then practise them in class against a timer, see them marked against the CBSE value points on screen and rewrite weak answers. Doubts are answered live. A list worked through alone rarely shows a student where their marks actually go.

**Are these questions enough to score full marks?** They cover the shapes the paper uses, but full marks also need the 50 practical marks and clean timing in the two-hour paper. That is why the batch also builds the practical file and project on Wednesdays and runs full timed mocks from January.

**Can students abroad practise these questions in your batch?** Yes. CBSE schools abroad teach the same 417 curriculum. The 9 PM IST batch is 7:30 PM in the UAE and Oman and 6:30 PM in Saudi Arabia, Qatar, Kuwait, Bahrain and East Africa. In Singapore and Malaysia it falls at 11:30 PM, so families there choose personalised one to one at their own time.

**Is there an extra charge for question practice?** No. Question practice, unit tests and Part A drills are part of ordinary teaching, covered by the monthly fee for the group batch or personalised one to one, shown on this page in your own currency. There is no admission fee, and the first class is a free demo.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

Related pages: /cbse-class-10-ai-classes-online, /cbse-class-10-ai-syllabus-explained, /python-for-cbse-class-10-ai, /cbse-class-10-ai-board-exam-preparation, /cbse-class-10-ai-project-and-practical-file, /cbse-class-10-ai-exam-date-and-paper-pattern, /cbse-class-10-ai-sample-paper-and-mock-tests, /cbse-class-10-ai-employability-skills-part-a, /cbse-class-10-ai-online-classes-gulf-and-abroad, /icse-class-10-java-classes-online, /icse-class-10-computer-applications-syllabus-explained, /icse-class-10-java-programs-practice, /icse-class-10-bluej-java-coaching, /icse-class-10-computer-applications-board-exam-preparation, /icse-class-10-computer-applications-exam-date-and-paper-pattern, /icse-class-10-computer-applications-specimen-paper-and-mock-tests, /icse-class-10-computer-applications-important-questions, /icse-class-10-computer-applications-project-and-internal-assessment, /icse-class-10-computer-applications-classes-gulf-and-abroad.

---

*Canonical: https://learn.modernagecoders.com/cbse-class-10-ai-important-questions*
