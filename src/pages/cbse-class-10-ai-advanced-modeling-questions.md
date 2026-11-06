---
title: "Advanced Concepts of Modeling in AI Class 10: Questions"
description: "Advanced concepts of modeling in AI class 10 (CBSE 417, Unit 2), 2026-27: every question shape, a 15-scenario classify drill and model answers."
canonical: https://learn.modernagecoders.com/cbse-class-10-ai-advanced-modeling-questions
source: src/pages/cbse-class-10-ai-advanced-modeling-questions.html
updated: 2026-11-06
---

> Advanced Concepts of Modeling in AI is Unit 2 of CBSE Class 10 AI (417), worth 11 of the 50 theory marks in 2026-27. It covers AI, machine learning and deep learning; features, labels and training and testing data; rule-based against learning-based models; supervised learning (classification and regression), unsupervised learning (clustering and association) and reinforcement learning; and neural networks, with ANN, CNN and the perceptron. Most questions ask you to define, differentiate or identify the model type in a scenario. Modern Age Coders teaches it live in a Monday and Wednesday 9:00 PM IST batch, or one to one.

## What is in advanced concepts of modeling in AI class 10?

Unit 2 explains how an AI model learns and which family a model belongs to. It moves from AI, ML and DL, through the words used for data, to the three ways machines learn and the neural networks behind deep learning.

- Topic | One-line idea | How it is usually asked

- AI, ML and DL | DL is a part of ML, which is a part of AI | Objective item; draw or explain the nesting

- Data terms | Features are the inputs, the label is the answer to predict | Identify features and label in a small table

- Rule-based and learning-based | People write the rules, or the model finds them in data | Two-mark difference with examples

- Supervised, unsupervised, reinforcement | Labelled data, unlabelled data, or rewards from trial and error | Name the type for a scenario

- Classification and regression | Predict a category, or predict a number | Scenario; difference

- Clustering and association | Group similar items, or find items that occur together | Scenario; difference

- Neural networks | Layers of connected nodes; ANN in general, CNN for images | Label layers; perceptron sum; four-mark explanation

### Features and labels in one example

A table of past students lists hours studied, attendance and mock score, and a last column saying whether each student passed. The first three columns are features, the facts the model looks at. "Passed" is the label, the answer it learns to predict. Data that carries that last column is labelled data; without it, it is unlabelled.

### Why the unit carries the most marks

In the 2025-26 sample paper, Unit 2 supplied four objective items, and its ideas also feed Units 3, 5 and 6: you cannot evaluate a classifier, or see why a CNN suits images, without them. The same terms come back on [evaluating models questions and answers](/cbse-class-10-ai-evaluating-models-questions), where Unit 2's classifiers are scored.

## Rule based vs learning based AI: what is the difference?

In a rule-based model, a person writes the rules and the machine only follows them. In a learning-based model, the machine works out its own rules from examples, and can improve when given new data.

```
emails = ["win a free prize now",
          "maths class moved to 4 pm",
          "free prize inside, click"]
for e in emails:
    print("spam" if "free prize" in e
          else "not spam")

# Output: spam, not spam, spam
```

```
grams = {"guava": [180, 200, 190],
         "grape": [5, 6, 4]}
avg = {f: sum(g) / len(g)
       for f, g in grams.items()}
cut = (avg["guava"] + avg["grape"]) / 2
print(cut)
for g in [9, 150]:
    print(g, "guava" if g > cut else "grape")

# Output: 97.5, then 9 grape, 150 guava
```

- Point | Rule-based | Learning-based

- Who makes the rules | A developer | The model, from data

- Needs training data? | No | Yes

- Handles new situations | Only ones the rules foresee | Can adapt as data grows

- Easy to explain? | Yes, every rule is visible | Often harder

- Example | A help-desk bot with fixed questions and replies | A video app recommending what to watch next

Neither program is something the theory paper asks you to write; they show the idea. Comparison questions of this kind, across all seven units, are gathered on [CBSE Class 10 AI difference between questions](/cbse-class-10-ai-difference-between-questions).

## Supervised, unsupervised or reinforcement learning? Fifteen class 10 scenarios

For each scenario, name the type of learning and, where it applies, the sub-type. Ask two questions: are the right answers given in the data, and is the output a category, a number, a group, a pattern or a reward?

- A bank labels past loan applications "repaid" or "defaulted" and trains a model to judge new ones.
Answer Supervised, classification. Labels are given and the output is one of two categories.

- A model predicts how many litres of milk a dairy will sell next Sunday.
Answer Supervised, regression. The output is a quantity, not a category.

- A music app sorts millions of songs into groups by tempo and mood, with no genres given.
Answer Unsupervised, clustering. No labels; similar songs are grouped.

- A stationery shop finds that pencil boxes and erasers are usually bought together.
Answer Unsupervised, association. It finds items that occur together, not groups of customers.

- A computer learns chess by playing itself, winning points for victories and losing them for defeats.
Answer Reinforcement learning. No labelled moves; rewards and penalties guide it.

- An app reads a photo of a leaf and names the plant species.
Answer Supervised, classification. Trained on photos labelled with species names.

- A model estimates a used scooter's resale value from its age and kilometres driven.
Answer Supervised, regression. The output is a continuous value.

- A school groups students by their study habits so that each group gets its own revision plan, with no groups decided in advance.
Answer Unsupervised, clustering. The groups emerge from the data.

- A robot vacuum learns the quickest path round a room, scoring points for clean floor and losing them for bumps.
Answer Reinforcement learning. It improves through reward and penalty.

- A model predicts tomorrow's air quality index as a number.
Answer Supervised, regression. A number, learnt from past readings with known values.

- The same model instead says whether tomorrow's air will be "good", "moderate" or "poor".
Answer Supervised, classification. Same data, but now the output is a category. The output decides, not the topic.

- A streaming site notices that viewers who watch one cooking show often watch a particular travel show next.
Answer Unsupervised, association. A rule of the form "if this, then often that".

- An email service learns from mails users have marked as spam.
Answer Supervised, classification. Users' marks are the labels.

- A news site gathers thousands of untagged articles into topics such as sport and politics on its own.
Answer Unsupervised, clustering. Even if the groups look like topics, nobody labelled them.

- A game character learns to cross a level, earning points for coins and losing a life for each fall.
Answer Reinforcement learning. Trial, error and a score.

In class this drill is run against a timer with new scenarios every week, and each student must say the reason aloud, not just the type. A no-code version, where students build a classifier and a clustering model themselves, is on [Orange data mining for Class 10 AI](/orange-data-mining-class-10-ai).

## Classification vs regression, and clustering vs association, class 10

Classification predicts a category and regression predicts a number; both are supervised. Clustering forms groups of similar items and association finds items that occur together; both are unsupervised.

- | Classification | Regression

- Output | A label from a fixed set | A continuous number

- Data | Labelled | Labelled

- Example | Will this train be late: yes or no? | How many minutes late will it be?

- Scored with | Confusion matrix metrics | Error between predicted and actual

- | Clustering | Association

- Finds | Groups of similar records | Items that occur together

- Data | Unlabelled | Unlabelled

- Example | Grouping shoppers by spending habits | Shoppers who buy bread often buy butter

- Result looks like | Group 1, group 2, group 3 | If A, then often B

### The output test
Cover the scenario's topic and look only at what comes out. A category means classification, a number means regression. Questions 10 and 11 above use the same data to prove it.

### The groups or links test
If the result is a set of groups of people or things, it is clustering. If it is a link between items, it is association.

### Clustering is not classification
Both end in groups, but classification sorts into groups decided in advance using labels; clustering discovers the groups with no labels at all.

## Neural network class 10: layers, ANN and CNN, and the perceptron

A neural network is a model made of layers of connected nodes, loosely modelled on the brain: an input layer takes the data, hidden layers process it, and an output layer gives the result. Deep learning uses networks with many hidden layers.

```
inputs (1 = yes, 0 = no):
  x1 sunny     weight 0.6
  x2 holiday   weight 0.3
  x3 homework  weight 0.5
bias = -0.7

total = 0.6 x1 + 0.3 x2 + 0.5 x3 - 0.7
output 1 if total > 0, else 0
```

- Sunny | Holiday | Homework done | Total | Output

- 1 | 1 | 0 | 0.6 + 0.3 - 0.7 = 0.2 | 1

- 0 | 1 | 1 | 0.3 + 0.5 - 0.7 = 0.1 | 1

- 1 | 0 | 0 | 0.6 - 0.7 = -0.1 | 0

- 0 | 0 | 1 | 0.5 - 0.7 = -0.2 | 0

### ANN and CNN in one line each

- ANN, artificial neural network: the general layered network, used for tasks such as predicting prices or powering a support chatbot.

- CNN, convolutional neural network: a network built for images, which slides small filters across a picture to pick out edges, shapes and then whole objects.

The CNN returns in Unit 5, on [computer vision questions](/cbse-class-10-ai-computer-vision-questions).

### What a neural network question usually asks

- Name the three layers and what each does.

- Say what weights and bias are.

- Work out a perceptron total, as in the table.

- Give one use of an ANN and one of a CNN.

- Say why deep learning needs a lot of data.

## Advanced modeling class 10 questions and answers, by marks

Ten original questions, from one mark to four. The bold words in each model answer are the points an examiner looks for; an answer that misses one usually loses that mark.

### One and two marks

- Which is the widest of the three: AI, machine learning or deep learning?
Answer AI. ML sits inside AI and DL sits inside ML.

- In a dataset of houses with area, rooms and price, which column is the label if we want to predict price?
Answer Price. Area and rooms are features.

- Name the type of learning in which an agent learns from rewards and penalties.
Answer Reinforcement learning.

- Give two differences between supervised and unsupervised learning.
Answer Supervised learning uses labelled data; unsupervised uses unlabelled data. Supervised predicts a known kind of answer (a class or a number); unsupervised discovers structure such as groups or associations.

- Why is a learning-based model better suited to spam filtering than a rule-based one?
Answer Spammers keep changing their wording, so fixed rules soon miss new spam. A learning-based model learns from newly marked emails and adapts without anyone rewriting rules.

- State one difference between classification and clustering.
Answer Classification sorts data into categories defined in advance, using labels; clustering finds its own groups in unlabelled data.

### Four marks

- Explain the three categories of machine learning, with one example each.
Answer Supervised: learns from labelled data, such as predicting exam results from past marked records (1). Unsupervised: finds patterns in unlabelled data, such as grouping customers (1). Reinforcement: learns by trial and error with rewards, such as a robot learning to walk (1). One clear example for each (1).

- A city wants to (a) predict the number of buses needed each hour and (b) group bus stops with similar crowd patterns. Name the model type for each and justify.
Answer (a) Regression, supervised (1): the output is a number learnt from past hourly records (1). (b) Clustering, unsupervised (1): stops are grouped by similarity with no labels given (1).

- Draw and explain the structure of an artificial neural network.
Answer Diagram of three columns of nodes joined by lines (1). Input layer receives the features (1). Hidden layers process the data using weights and bias (1). Output layer gives the prediction (1).

- A perceptron has inputs 1 and 1, weights 0.4 and 0.3 and bias -0.5. It outputs 1 if the total is above 0. Find the total and the output, and say what would happen with a bias of -0.8.
Answer Total = 0.4 + 0.3 - 0.5 = 0.2 (1), above 0, so output 1 (1). With bias -0.8 the total is 0.7 - 0.8 = -0.1 (1), so output 0: a more negative bias makes a yes harder to reach (1).

In the batch, these answers are written to the clock and marked on screen point by point, and the scenario drill comes back every week with new cases until no student hesitates. Unit 2 objective items are in [the class 10 AI MCQ bank](/cbse-class-10-ai-mcq-questions), revision notes for every unit are on [CBSE Class 10 AI notes](/cbse-class-10-ai-notes), and the oral version of these questions is rehearsed on [the viva questions page](/cbse-class-10-ai-viva-questions).

## The courses behind this page

- [CBSE AI for Class 9 to 12](/courses/cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843): The full 417 course: Unit 2 taught one model family at a time, then drilled with fresh scenarios and written answers marked in class.
- [Visual ML with Orange](/courses/orange-data-mining-visual-machine-learning-course-for-teens): Drag-and-drop classification, regression and clustering on real datasets, so each category in Unit 2 is something your child has actually built.
- [AI and ML for Teens](/courses/ai-ml-masterclass-teens): Python models from a first classifier to a small neural network, for students who want to see the perceptron idea run.

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

**What is advanced concepts of modeling in AI class 10?** It is Unit 2 of CBSE Class 10 Artificial Intelligence (417). It explains how AI models learn: AI, machine learning and deep learning, features and labels, rule-based and learning-based models, supervised, unsupervised and reinforcement learning with their sub-types, and neural networks including ANN, CNN and the perceptron.

**How many marks is Unit 2 in CBSE Class 10 AI?** Advanced Concepts of Modeling in AI carries 11 of the 50 theory marks in the 417 curriculum for 2026-27, the most of any unit. In the 2025-26 sample paper it supplied four of the objective items in the AI part, with the rest of its marks in written answers.

**What is the difference between supervised, unsupervised and reinforcement learning?** Supervised learning trains on labelled data, so the right answers are known. Unsupervised learning works on unlabelled data and finds its own structure, such as groups. Reinforcement learning has no dataset of answers at all: an agent tries actions and learns from rewards and penalties.

**What is the difference between classification and regression in class 10?** Both are supervised learning. Classification predicts a category, such as spam or not spam, or pass or fail. Regression predicts a continuous number, such as a temperature, a price or a delivery time. Look at the output: a label means classification, a quantity means regression.

**What is the difference between clustering and association?** Both are unsupervised. Clustering places similar records in the same group, for example customers with similar spending. Association finds items or events that tend to occur together, for example people who buy notebooks often buy pens. Groups mean clustering; if-this-then-that links mean association.

**What is the difference between rule based and learning based AI?** In rule-based AI, a developer writes every rule and the system follows them, so it cannot cope with cases the rules did not foresee. In learning-based AI, the model works out patterns from training data and can improve as new data arrives. A fixed-reply help-desk bot is rule-based; a recommendation system is learning-based.

**What is a neural network in class 10 AI?** A neural network is a model made of layers of connected nodes: an input layer that takes the data, one or more hidden layers that process it using weights and bias, and an output layer that gives the result. Networks with many hidden layers are what deep learning uses.

**What is the difference between ANN and CNN?** An artificial neural network (ANN) is the general layered network used for many tasks, such as predicting values. A convolutional neural network (CNN) is a special kind designed for images: it slides small filters over the picture to detect edges and shapes, which makes it the standard choice in computer vision.

**How do I identify the type of learning in a scenario question?** Ask first whether the data comes with correct answers. If yes, it is supervised; then check if the output is a category (classification) or a number (regression). If no labels and the result is groups, it is clustering; if it is items found together, association. If learning comes from rewards, it is reinforcement.

**Do your classes cover Unit 2, and how much do they cost?** Yes. Unit 2 is taught in the Monday and Wednesday 9:00 PM IST batch with weekly scenario drills and marked written answers, or in personalised one to one at your time. The monthly fee shown on this page, in your own currency, covers it. There is no admission fee and the first class is a free demo.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Mon and Wed 9 PM AI batch](/cbse-class-10-ai-classes-online), [CBSE AI classes in the Gulf and abroad](/cbse-class-10-ai-online-classes-gulf-and-abroad), [Live doubt classes](/cbse-class-10-ai-doubt-classes), [Class 10 AI tuition online](/cbse-class-10-ai-tuition), [Class 10 AI crash course](/cbse-class-10-ai-crash-course), [1-on-1 private AI tutor](/cbse-class-10-ai-private-tutor), [AI tuition in Delhi](/class-10-ai-tuition-delhi), [AI tuition in Gurgaon](/class-10-ai-tuition-gurgaon), [AI tuition in Noida](/class-10-ai-tuition-noida).

**Unit by unit:** [CBSE AI 417 syllabus explained](/cbse-class-10-ai-syllabus-explained), [Python for Class 10 AI](/python-for-cbse-class-10-ai), [Part A employability skills](/cbse-class-10-ai-employability-skills-part-a), [Unit 3: Evaluating Models](/cbse-class-10-ai-evaluating-models-questions), [Confusion matrix numericals](/confusion-matrix-class-10-ai-numericals), [Unit 6: Natural Language Processing](/cbse-class-10-ai-nlp-questions), [Bag of Words and TFIDF, worked](/bag-of-words-tfidf-class-10-ai), [Unit 5: Computer Vision](/cbse-class-10-ai-computer-vision-questions), [Orange Data Mining for Class 10 AI](/orange-data-mining-class-10-ai), [Unit 1: Project cycle and ethics](/cbse-class-10-ai-project-cycle-and-ethics).

**Questions and practice:** [CBSE AI important questions](/cbse-class-10-ai-important-questions), [Sample paper and mock tests](/cbse-class-10-ai-sample-paper-and-mock-tests), [Class 10 AI MCQ, unit wise](/cbse-class-10-ai-mcq-questions), [Previous year papers, solved](/cbse-class-10-ai-previous-year-question-papers), [AI practical and project viva](/cbse-class-10-ai-viva-questions), [Case based questions](/cbse-class-10-ai-case-based-questions), [Employability skills MCQ](/employability-skills-class-10-mcq), [Difference between questions](/cbse-class-10-ai-difference-between-questions), [Assertion and reason questions](/cbse-class-10-ai-assertion-reason-questions).

**Notes and revision:** [Class 10 AI notes, unit wise](/cbse-class-10-ai-notes), [Class 10 AI one shot revision](/cbse-class-10-ai-one-shot-revision), [30, 7 and 1 day revision plan](/cbse-class-10-ai-revision-plan), [Worksheets with answers](/cbse-class-10-ai-worksheets), [AI handbook exercise answers](/cbse-class-10-ai-textbook-solutions), [Best book for Class 10 AI](/best-book-for-cbse-class-10-ai), [Formula sheet](/cbse-class-10-ai-formula-sheet).

**Exam, marks and practicals:** [CBSE AI board exam preparation](/cbse-class-10-ai-board-exam-preparation), [AI project and practical file](/cbse-class-10-ai-project-and-practical-file), [Exam date 2027 and paper pattern](/cbse-class-10-ai-exam-date-and-paper-pattern), [AI practical exam questions](/cbse-class-10-ai-practical-exam-questions), [AI project ideas](/cbse-class-10-ai-project-ideas), [Passing marks](/cbse-class-10-ai-passing-marks), [The second board exam in May](/cbse-class-10-ai-second-board-exam).

**Choosing the subject:** [AI 417 or IT 402?](/ai-417-vs-it-402-class-10), [AI, IT or Computer Applications?](/ai-vs-computer-applications-class-10).

---

*Canonical: https://learn.modernagecoders.com/cbse-class-10-ai-advanced-modeling-questions*
