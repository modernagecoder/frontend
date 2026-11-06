---
title: "Orange Data Mining Class 10 AI: Penguins, Coral, Sentiment"
description: "Orange data mining for class 10 AI (CBSE 417, 2026-27): the Palmer penguins, coral bleaching and sentiment use cases, built widget by widget in tables."
canonical: https://learn.modernagecoders.com/orange-data-mining-class-10-ai
source: src/pages/orange-data-mining-class-10-ai.html
updated: 2026-11-06
---

> Orange data mining in Class 10 AI is the no-code tool CBSE 417 uses for three use case walkthroughs in 2026-27: predicting Palmer penguin species from body measurements (Unit 4, Statistical Data), classifying coral photos as bleached or unbleached (Unit 5, Computer Vision) and scoring the sentiment of text (Unit 6, NLP). Each follows the AI project cycle with widgets such as File, Impute, Data Sampler, Test and Score, Confusion Matrix and Predictions. These units are assessed in the practical. Modern Age Coders builds them live in a Monday and Wednesday 9:00 PM IST batch, or one to one.

## Which no-code AI use cases does CBSE name for Class 10 in 2026-27?

The 2026-27 CBSE 417 curriculum names three Orange walkthroughs, one per practical domain, and the handbook adds a short price-prediction example. All of them are assessed through the practical, not the theory paper.

- Use case | Unit and domain | Model type | Orange add-on needed

- Palmer penguins: predict the species | Unit 4, Statistical Data | Classification, three classes | None, core Orange

- Food price index: predict the price (handbook example) | Unit 4, Statistical Data | Regression | None, core Orange

- Coral bleaching: bleached or unbleached? | Unit 5, Computer Vision | Image classification, two classes | Image Analytics

- Sentiment analysis of reviews or posts | Unit 6, NLP | Positive, negative or neutral scoring | Text

### Before the first class: install and add-ons

-
**Install Orange** Download it from orangedatamining.com and install it like any desktop program.

-
**Add the two add-ons** Open Options, then Add-ons, tick Image Analytics and Text, and restart Orange.

-
**Check the toolbox** The left panel should now show Image Analytics and Text sections beside Data, Visualize, Model and Evaluate.

A missing add-on is the commonest reason a student cannot find Import Images or Sentiment Analysis on the day.

### Teachable Machine and Lobe

The same curriculum names two more no-code tools for Unit 5: Teachable Machine and Lobe, for a "smart sorter" that tells bottles, cans and paper apart. They train an image model in the browser or an app from photos you take. Orange differs because every step of the project cycle is a visible widget you can open and explain, which is why the walkthroughs below use it.

Where these units sit in the 50 practical marks is on [CBSE Class 10 AI practical exam questions](/cbse-class-10-ai-practical-exam-questions).

## Palmer penguins class 10 AI: the Orange workflow, step by step

The penguins model predicts a penguin's species, Adelie, Chinstrap or Gentoo, from its island and four body measurements. CBSE's own workflow file uses eleven widgets, and each one maps to a stage of the AI project cycle.

The data. CBSE's training file has 344 penguins: 152 Adelie, 124 Gentoo and 68 Chinstrap. Columns are species, island, culmen length and culmen depth (the culmen is the upper ridge of the bill), flipper length and body mass. Two penguins have all four measurements missing, which is why the workflow needs Impute.

- Step | Widget | Connect | What to set or read | Project cycle stage

- 1 | File (renamed TrainData) | Starts the chain | Load penguins_train.csv; check species shows as categorical | Data acquisition

- 2 | Impute | TrainData to Impute | Fill the missing measurements, for example with the average | Data exploration

- 3 | Feature Statistics | Impute to Feature Statistics | Read mean, spread and missing count per column; mean culmen length is about 43.9 mm | Data exploration

- 4 | Select Columns | Impute to Select Columns | Move species to Target; keep island and the four measurements as features | Modelling (set up)

- 5 | Data Sampler | Select Columns to Data Sampler | Fixed proportion 80 percent, stratified; about 275 penguins train, 69 are held back | Modelling (split)

- 6 | Data Info, twice | Data Sample to one, Remaining Data to the other | Confirm the two row counts add up to 344 | Checking the split

- 7 | Tree and Random Forest | Data Sample to each learner | Defaults are fine to start | Modelling

- 8 | Test and Score | Data Sample to Data, Remaining Data to Test Data, both learners to Learner | Choose "Test on test data"; compare CA, Precision, Recall and F1 for the two models | Evaluation

- 9 | File (renamed TestData) | Starts a second chain | Load penguins_test.csv | New data

- 10 | Predictions | TestData to Data; Tree and Random Forest Model outputs to Predictors | Each row shows the true species beside each model's guess | Deployment, in miniature

### What the exploration should show

- Island gives a lot away. Gentoo appear only on Biscoe and Chinstrap only on Dream; Adelie live on all three islands.

- Flippers separate Gentoo. Their average flipper is about 217 mm against about 190 mm for Adelie.

- Culmen length separates Adelie from Chinstrap. About 38.8 mm against about 48.8 mm on average.

Drop a Scatter Plot on the Impute output with culmen length against flipper length, coloured by species, and the three groups are visible before any model is trained.

```
                 Predicted
Actual      Adelie Chinstrap Gentoo
Adelie        29       1        0
Chinstrap      2      12        0
Gentoo         0       0       25

Correct: 29 + 12 + 25 = 66 of 69
Accuracy: 66 / 69 = 0.957
Chinstrap recall: 12 / 14 = 0.857
Adelie precision: 29 / 31 = 0.935
```

### One honest caution about the CBSE test file

CBSE's penguins_test.csv holds the same 344 penguins as the training file, with the species column renamed "actual species". So the Predictions table will look almost perfect: the models have already seen those birds. The fair score is the one Test and Score reports on the 69 held-back penguins. If an examiner asks why Predictions looks better than Test and Score, that is the answer, and it is the same idea as never testing on training data in Unit 3. The full evaluation reasoning is on [CBSE Class 10 AI evaluating models questions](/cbse-class-10-ai-evaluating-models-questions).

## Coral bleaching project class 10: the image classification chain in Orange

Orange cannot learn from raw pixels directly. The Image Embedding widget turns every photo into a long row of numbers that describe its features, and from then on an ordinary classifier treats the photos like rows in a table.

The data. Two folders, Train and Test. Inside each, one sub-folder per class: Bleached and Unbleached. Import Images reads the sub-folder name as the label, so the folder layout is the labelling.

- Step | Widget | Connect | What to set or read

- 1 | Import Images (renamed Train Data) | Starts the chain | Choose the training folder; it should report two categories

- 2 | Image Viewer | Train Data to Image Viewer | Scroll the photos; check for blurred, duplicate or wrongly filed images

- 3 | Image Embedding | Train Data to Image Embedding | SqueezeNet runs offline and is the default; Inception v3 and the others need internet

- 4 | Data Table | Image Embedding to Data Table | See each image now as a row of numeric columns plus its category

- 5 | Logistic Regression, Random Forest, SVM | Each learner to Test and Score | Three models, so their scores can be compared

- 6 | Test and Score | Image Embedding to Data | Cross-validation is a sound choice here; compare CA, F1, Precision and Recall

- 7 | Confusion Matrix | Test and Score to Confusion Matrix | Switch between learners on its left to see which one misses bleached coral

- 8 | Import Images (Test Data), Image Viewer, Image Embedding | A second chain for the test folder | Point it at the test folder, not the training one

- 9 | Logistic Regression (second copy) | Train embeddings to its Data | Trains the chosen model on all training photos

- 10 | Predictions | Test embeddings to Data; the model to Predictors | Each test photo with its predicted class and probability

### Which model won
In the CBSE walkthrough, Logistic Regression gave the best accuracy of the three, which is why the final chain uses it. On your own photos another learner may win; the method of choosing is what earns marks.

### Which error matters
A bleached reef predicted as unbleached is a false negative, and it is the costly one, because the reef gets no attention. So read recall for the Bleached class, not only overall accuracy.

### A slip in the steps PDF
CBSE's step sheet tells you, at the prediction stage, to select the training folder. Choose the test folder: predicting photos the model trained on proves nothing.

Pixels, RGB channels and convolution, the theory behind what Image Embedding does, are on [CBSE Class 10 AI computer vision questions](/cbse-class-10-ai-computer-vision-questions). Coral as a full project with its 4Ws is on [CBSE Class 10 AI project ideas](/cbse-class-10-ai-project-ideas).

## Sentiment analysis in Orange for the NLP unit

Sentiment analysis decides whether a piece of text is positive, negative or neutral. In Orange, the Text add-on loads the texts as a corpus, cleans them, and the Sentiment Analysis widget adds a score to every document.

The curriculum names a sentiment walkthrough for Unit 6, but the shared CBSE folder for it does not hold a workflow file we could open, so the chain below is the standard route the Text add-on documents. Schools may use their own review or tweet dataset.

- Step | Widget | What it does | What to set or read

- 1 | Corpus (or Import Documents) | Loads the texts as documents | Pick the column that holds the text as the text feature

- 2 | Preprocess Text | Text normalisation | Lowercase, tokenise, remove punctuation and stopwords: the Unit 6 theory, as tick boxes

- 3 | Sentiment Analysis | Scores each document | Choose Vader: it adds positive, negative, neutral and compound columns; compound runs from -1 to +1

- 4 | Data Table | Shows the scores | Sort by compound to see the most negative and most positive texts

- 5 | Word Cloud | Shows frequent words | Compare clouds for the positive and the negative texts

- 6 | Box Plot or Distributions | Summarises the scores | How many texts fall on each side of zero

```
"The new library is bright,
 quiet and wonderful."           0.765
"The bus was late again and
 the driver was rude."          -0.459
"The canteen opens at noon."     0.000
"The food was not bad at all."   0.431
"Great, another power cut during
 my online exam."                0.459
```

### What the five scores teach

- Neutral is real. A plain fact scores 0, neither positive nor negative.

- Negation is handled. "Not bad" comes out mildly positive, because VADER reads "not" before "bad".

- Sarcasm is not. "Great" pulls the power-cut complaint positive. A lexicon counts words; it does not understand intent.

That last point answers a favourite viva question on the limits of NLP. Bag of Words and TFIDF, the counting ideas underneath, are worked by hand on [Bag of Words and TFIDF for Class 10 AI](/bag-of-words-tfidf-class-10-ai).

## No code AI class 10: price prediction, code versus no-code, and viva questions

No-code AI means building, training and testing a model by dragging and connecting ready-made blocks instead of writing a program. Low-code tools mix blocks with a little code.

### The handbook's regression example

In Unit 4 the handbook tells of Kayla, who budgets animal food at a zoo and needs to predict rising food prices without knowing how to code. The chain is short:

-
**File** Load the food price index data and set the price index as the target.

-
**Data Table** Look at the rows before modelling.

-
**Linear Regression** File to Linear Regression; the output is a number, so this is regression.

-
**Test and Score** File to Data, Linear Regression to Learner; read RMSE, MAE and R2 instead of accuracy.

-
**Predictions** Data to Data, and the Linear Regression model to Predictors.

The handbook's last step joins Test and Score to Predictions and mentions a logistic model. In Orange, Predictions takes data plus a trained model, as in the last step above, and a price is predicted with linear, not logistic, regression.

### Code versus no-code for statistical data

- Point | Code (Python) | No-code (Orange)

- Skill needed | Programming | Understanding the steps

- Flexibility | Anything you can write | Only the widgets that exist

- Speed to a first model | Slower | Minutes

- Risk | Bugs in your code | Trusting outputs without checking them, called automation bias

The handbook also warns that no-code platforms give less control over security, so they suit data that is not sensitive.

### Questions examiners ask at the Orange screen

- Why did you use Select Columns?
Answer To mark species as the target, the label the model must predict. Without a target, Test and Score has nothing to check against.

- What does Data Sampler do, and why stratified?
Answer It splits the data into a training part and a held-back test part. Stratified keeps the same share of each species in both parts.

- What does Image Embedding output?
Answer A row of numbers per image that describes its features, so a normal classifier can learn from photos.

- Which stage of the AI project cycle is Test and Score?
Answer Evaluation. Impute and the plots belong to data exploration; the learners to modelling.

- Is your sentiment tool always right?
Answer No. It scores word lists, so sarcasm and mixed reviews fool it. Checking a sample by hand shows how often it agrees with a person.

More of these, for every practical unit, are on [CBSE Class 10 AI viva questions](/cbse-class-10-ai-viva-questions).

## How the live batch teaches Orange for the 417 practical

Following a step sheet builds a workflow once. Explaining every widget, and rebuilding it on data you have not seen, is what the practical and its viva reward, so that is what class time goes on.

### Built on a shared screen
The teacher builds one use case live while students build alongside on their own machines. Each widget is opened, its settings changed and the effect on the readout talked through.

### Same widgets, new data
The following class swaps the dataset, fruit photos for coral, shop reviews for tweets, and students rebuild the chain without the step sheet. The gaps show quickly and are fixed in the same session.

### Explain it aloud
Every student explains one widget per class in the words an examiner expects: target, held-back data, false negative, embedding. That rehearsal is what turns a working canvas into viva marks.

Students who are stuck on an add-on install or a broken connection share their screen and it is fixed live. How these walkthroughs feed the project and file is on [the project and practical file page](/cbse-class-10-ai-project-and-practical-file), and the project cycle they all follow is on [AI project cycle and ethics](/cbse-class-10-ai-project-cycle-and-ethics).

## The courses behind this page

- [Visual ML with Orange](/courses/orange-data-mining-visual-machine-learning-course-for-teens): File to Predictions on tables, images and text, with time to try other learners and settings until the readouts make sense.
- [CBSE AI for Class 9 to 12](/courses/cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843): The full 417 course, where each Orange walkthrough sits in the unit it belongs to and is rehearsed before the practical.
- [Python for Teens](/courses/python-complete-masterclass-teens): Pandas, NumPy and Matplotlib for Unit 7, and the code version of the steps Orange hides behind its widgets.

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

**What is Orange Data Mining in class 10 AI?** Orange is a free, open-source tool for data analysis and machine learning in which you build a model by dragging widgets onto a canvas and connecting them, without writing code. CBSE 417 uses it in 2026-27 for three practical walkthroughs: Palmer penguins (Statistical Data), coral bleaching (Computer Vision) and sentiment analysis (NLP).

**Is Orange Data Mining in the class 10 AI theory exam?** The walkthroughs belong to Units 4, 5 and 6 practical work, which is assessed through the practical file, practical exam and viva. Units 4 and 7 are practical only. Objective items about no-code tools can still appear, so know what Orange is and what its main widgets do.

**What is the Palmer penguins case study in class 10 AI?** It is the Unit 4 use case in which an Orange model predicts a penguin's species, Adelie, Chinstrap or Gentoo, from its island, culmen length and depth, flipper length and body mass. CBSE's training file has 344 penguins. The workflow runs File, Impute, Select Columns, Data Sampler, Tree and Random Forest, Test and Score, then Predictions.

**Which widgets are used for the coral bleaching project?** Import Images to load photos from Bleached and Unbleached sub-folders, Image Viewer to check them, Image Embedding to turn each photo into numbers, then Logistic Regression, Random Forest and SVM compared in Test and Score with a Confusion Matrix. A second Import Images chain feeds the test photos into Predictions.

**Why does Image Embedding need the internet?** Only some embedders do. SqueezeNet, the default in current versions, runs on your own computer. Inception v3, VGG-16, VGG-19 and the others send images to a server to be embedded, so they need a connection. If the lab has no internet, choose SqueezeNet.

**How do I do sentiment analysis in Orange?** Install the Text add-on, load your texts with Corpus, clean them with Preprocess Text, then connect Sentiment Analysis and choose a method such as Vader. It adds positive, negative, neutral and compound scores. View them in a Data Table sorted by compound, and use Word Cloud to compare frequent words.

**What is no code AI in class 10?** No-code AI means building and testing a model through a visual interface, dragging and connecting blocks, instead of programming. Examples in the curriculum are Orange, Teachable Machine and Lobe. Low-code tools combine blocks with some code. The trade-off is speed and ease against flexibility and control.

**Is Teachable Machine in the class 10 AI syllabus?** Yes. The 2026-27 CBSE 417 curriculum lists Teachable Machine with supervised learning in Unit 2 and, with Lobe, for a smart sorter activity in the Unit 5 practical, where a model learns to tell bottles, cans and paper apart from photos.

**Why are my Predictions almost 100 percent correct?** Usually because you are predicting rows the model was trained on. CBSE's penguins test file repeats the training penguins, so it will look near perfect. The honest measure is Test and Score on the data held back by Data Sampler.

**Is Orange practice part of your regular classes?** Yes. Each use case is built live and then rebuilt on fresh data in the batch or one to one, all covered by the monthly fee shown on this page in your own currency. There is no admission fee and the first class is a free demo.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Mon and Wed 9 PM AI batch](/cbse-class-10-ai-classes-online), [CBSE AI classes in the Gulf and abroad](/cbse-class-10-ai-online-classes-gulf-and-abroad), [Live doubt classes](/cbse-class-10-ai-doubt-classes), [Class 10 AI tuition online](/cbse-class-10-ai-tuition), [Class 10 AI crash course](/cbse-class-10-ai-crash-course), [1-on-1 private AI tutor](/cbse-class-10-ai-private-tutor), [AI tuition in Delhi](/class-10-ai-tuition-delhi), [AI tuition in Gurgaon](/class-10-ai-tuition-gurgaon), [AI tuition in Noida](/class-10-ai-tuition-noida), [AI tuition in Bangalore](/class-10-ai-tuition-bangalore), [AI tuition in Pune](/class-10-ai-tuition-pune).

**Unit by unit:** [CBSE AI 417 syllabus explained](/cbse-class-10-ai-syllabus-explained), [Python for Class 10 AI](/python-for-cbse-class-10-ai), [Part A employability skills](/cbse-class-10-ai-employability-skills-part-a), [Unit 3: Evaluating Models](/cbse-class-10-ai-evaluating-models-questions), [Confusion matrix numericals](/confusion-matrix-class-10-ai-numericals), [Unit 2: Advanced modeling](/cbse-class-10-ai-advanced-modeling-questions), [Unit 6: Natural Language Processing](/cbse-class-10-ai-nlp-questions), [Bag of Words and TFIDF, worked](/bag-of-words-tfidf-class-10-ai), [Unit 5: Computer Vision](/cbse-class-10-ai-computer-vision-questions), [Unit 1: Project cycle and ethics](/cbse-class-10-ai-project-cycle-and-ethics).

**Questions and practice:** [CBSE AI important questions](/cbse-class-10-ai-important-questions), [Sample paper and mock tests](/cbse-class-10-ai-sample-paper-and-mock-tests), [Class 10 AI MCQ, unit wise](/cbse-class-10-ai-mcq-questions), [Previous year papers, solved](/cbse-class-10-ai-previous-year-question-papers), [AI practical and project viva](/cbse-class-10-ai-viva-questions), [Case based questions](/cbse-class-10-ai-case-based-questions), [Employability skills MCQ](/employability-skills-class-10-mcq), [Difference between questions](/cbse-class-10-ai-difference-between-questions), [Assertion and reason questions](/cbse-class-10-ai-assertion-reason-questions).

**Notes and revision:** [Class 10 AI notes, unit wise](/cbse-class-10-ai-notes), [Class 10 AI one shot revision](/cbse-class-10-ai-one-shot-revision), [30, 7 and 1 day revision plan](/cbse-class-10-ai-revision-plan), [Worksheets with answers](/cbse-class-10-ai-worksheets), [AI handbook exercise answers](/cbse-class-10-ai-textbook-solutions), [Best book for Class 10 AI](/best-book-for-cbse-class-10-ai), [Formula sheet](/cbse-class-10-ai-formula-sheet), [Class 10 AI notes in Hindi](/cbse-class-10-ai-notes-in-hindi).

**Exam, marks and practicals:** [CBSE AI board exam preparation](/cbse-class-10-ai-board-exam-preparation), [AI project and practical file](/cbse-class-10-ai-project-and-practical-file), [Exam date 2027 and paper pattern](/cbse-class-10-ai-exam-date-and-paper-pattern), [AI practical exam questions](/cbse-class-10-ai-practical-exam-questions), [Paper analysis and answer key](/cbse-class-10-ai-paper-analysis), [Marking scheme, explained](/cbse-class-10-ai-marking-scheme), [AI project ideas](/cbse-class-10-ai-project-ideas), [Passing marks](/cbse-class-10-ai-passing-marks), [The second board exam in May](/cbse-class-10-ai-second-board-exam).

**Choosing the subject:** [AI 417 or IT 402?](/ai-417-vs-it-402-class-10), [AI, IT or Computer Applications?](/ai-vs-computer-applications-class-10).

---

*Canonical: https://learn.modernagecoders.com/orange-data-mining-class-10-ai*
