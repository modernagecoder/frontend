---
title: "Class 10 AI Project Ideas 2026-27: 15 SDG Projects (417)"
description: "Class 10 AI project ideas for CBSE 417, 2026-27: 15 SDG-linked projects graded easy to stretch, each mapped to an AI domain and the project cycle."
canonical: https://learn.modernagecoders.com/cbse-class-10-ai-project-ideas
source: src/pages/cbse-class-10-ai-project-ideas.html
updated: 2026-11-06
---

> Good class 10 AI project ideas for CBSE 417 are small, linked to one Sustainable Development Goal and built in one AI domain: Statistical Data, Computer Vision or NLP. Easy options include a leaf disease checker, a fruit ripeness sorter or a sentiment analysis project on clinic reviews; harder ones include coral bleaching detection or a complaint classifier. Each should follow the AI project cycle and report real evaluation numbers. The project carries 10 marks and its viva 5. Modern Age Coders guides projects from idea to viva in a live Monday and Wednesday 9:00 PM IST batch, or one to one.

## What makes a good AI project for class 10 SDG work

A good Class 10 AI project answers one clear question about one real problem, uses data you can get, and ends with numbers you can explain. CBSE asks that it relate to the Sustainable Development Goals, and its own sample, penguin species prediction, shows how small the scale can be.

- Grade on this page | Data | Tool | Typical build time

- Easy | A ready open dataset, or a few dozen photos you take | Orange, no code | Three to four weekends

- Medium | An open dataset that needs cleaning, or a survey you run | Orange, or short Python | Five to six weekends

- Stretch | Data you collect and label yourself | Python, comparing two models | Eight weekends or more

### Statistical Data
Rows and columns of numbers or categories: readings, surveys, records. The model predicts a label or a value from the columns.

### Computer Vision
Images sorted into labelled folders. The model learns to tell the classes apart from pixel patterns.

### Natural Language Processing
Short texts such as reviews, headlines or messages. The model scores or sorts them by their words.

Build times are from our batch's experience, not a CBSE rule. Easy does not mean fewer marks: a finished, honest easy project beats an abandoned ambitious one.

## Easy AI project class 10 ideas, then medium and stretch

Each idea lists its goal, domain and a one-line run through the cycle: scope, data, explore, model, evaluate. All fifteen are written for this page; adapt them to your town and your data.

### Easy: build in Orange with data you can get this week

- Leaf health checker. SDG 2, Zero Hunger · Computer Vision.Scope: small farmers notice leaf disease late. Data: your own photos of healthy and spotted leaves from one crop. Explore: view samples in Image Viewer. Model: Image Embedding with Logistic Regression. Evaluate: recall on diseased leaves, since a missed one spreads.

- Fruit ripeness sorter. SDG 12, Responsible Consumption · Computer Vision.Scope: shops throw away fruit that ripened unnoticed. Data: photos of bananas at three stages, taken over a week. Explore: are lighting and background consistent? Model: an image classifier in Orange. Evaluate: confusion matrix; which stages get mixed up.

- Sentiment analysis of clinic reviews. SDG 3, Good Health · NLP.Scope: what patients praise or complain about at local clinics. Data: public reviews, with names removed. Explore: Word Cloud after preprocessing. Model: Orange's Sentiment Analysis widget. Evaluate: label 50 reviews yourself and count agreement; 41 of 50 would be 0.82.

- Air quality band predictor. SDG 11, Sustainable Cities · Statistical Data.Scope: residents cannot read raw pollutant numbers. Data: an open city air-quality dataset. Explore: distributions of PM2.5 by band. Model: a classifier predicting the band from readings. Evaluate: accuracy, then which neighbouring bands it confuses.

- Sleep and screen-time survey. SDG 3, Good Health · Statistical Data.Scope: do students who use screens late feel less rested? Data: an anonymous survey of classmates, with consent. Explore: a scatter plot of screen time against sleep hours. Model: a classifier for "rested" or "not rested". Evaluate: accuracy, and an honest note on the small sample.

### Medium: more cleaning, a harder question or some Python

- Coral bleaching detection. SDG 14, Life Below Water · Computer Vision.Scope: reef surveys need to flag bleached coral quickly. Data: open image sets of healthy and bleached coral on data-sharing sites. Explore: check the two classes are balanced. Model: Image Embedding with a classifier. Evaluate: recall on bleached coral (worked below).

- Misleading headline flagger. SDG 16, Peace and Justice · NLP.Scope: false headlines spread faster than corrections. Data: an open labelled headline dataset. Explore: frequent words in each class. Model: Bag of Words with a classifier. Evaluate: precision, because calling a true story false does harm.

- Hand sign alphabet reader. SDG 10, Reduced Inequalities · Computer Vision.Scope: few people can read sign language. Data: your own photos of five letter signs from several hands. Explore: are signs from different hands alike? Model: an image classifier. Evaluate: per-letter accuracy, and which letters look alike.

- Forest fire risk from weather. SDG 15, Life on Land · Statistical Data.Scope: forest staff need warning of high-risk days. Data: an open dataset of weather readings with fire or no-fire labels. Explore: temperature and humidity on fire days. Model: a decision tree. Evaluate: recall on fire days.

- Household electricity use. SDG 7, Clean Energy · Statistical Data.Scope: families do not know which habits raise their bills. Data: a survey of appliances and monthly units from twenty or more homes. Explore: units against AC hours. Model: classify "high" or "normal" use. Evaluate: accuracy, with the limits of a small sample.

### Stretch: your own labelled data, two models compared

- Civic complaint sorter. SDG 11, Sustainable Cities · NLP.Scope: complaints reach the wrong department. Data: 150 or more short complaints you write or collect and label as water, roads or power. Explore: top words per label. Model: Bag of Words, two classifiers compared. Evaluate: confusion matrix across three classes.

- Pothole spotter. SDG 9, Infrastructure · Computer Vision.Scope: potholes are reported late. Data: your own road photos, labelled pothole or clear, taken safely from footpaths. Explore: variety of light and surface. Model: two classifiers compared. Evaluate: recall on potholes, then false alarms.

- Camera-trap filter. SDG 15, Life on Land · Computer Vision.Scope: volunteers sift thousands of empty trap frames. Data: open camera-trap images labelled animal or empty. Explore: night versus day frames. Model: image classifier in Python or Orange. Evaluate: recall on animal frames, so none are discarded.

- Solar output estimator. SDG 7, Clean Energy · Statistical Data.Scope: rooftop owners want to know what a cloudy week costs them in power. Data: open solar generation and weather records. Explore: output against cloud cover. Model: regression in Python or Orange. Evaluate: average error in units, compared with a simple guess.

- Mixed-language climate opinions. SDG 13, Climate Action · NLP.Scope: many posts mix Hindi and English, which English sentiment tools misread. Data: 200 or more posts you label positive, negative or neutral. Explore: words the English tool gets wrong. Model: your own Bag of Words classifier against the ready widget. Evaluate: which wins, and on what.

## Choosing your idea, and a coral bleaching project worked through

Pick the idea whose data you can actually get and whose question you care about; that interest is what carries you through the viva.

- If you are | Start with | Why

- New to Python and short of time | Ideas 1, 2 or 3 | All Orange, data ready in days

- Comfortable with tables and charts | Ideas 4, 9 or 10 | Statistical Data suits the Unit 4 practical too

- Interested in images | Ideas 6, 8 or 12 | Strong viva talking points on pixels and recall

- Interested in language | Ideas 3, 7 or 11 | Directly uses the Unit 6 theory

- Confident in Python, aiming high | Ideas 13, 14 or 15 | Own data and model comparison show depth

### Idea 6: the 4Ws canvas, filled

- Who: reef survey teams and the fishing communities that depend on reefs.

- What: bleached coral is spotted late, after many survey photos pile up unchecked.

- Where: in survey photos from shallow tropical reefs.

- Why: earlier flags let protection efforts start sooner, serving SDG 14.

```
Test set: 60 bleached, 60 healthy images.

              Actual: bleached  Actual: healthy
Pred bleached     TP = 51          FP = 6
Pred healthy      FN = 9           TN = 54

Accuracy  = 105 / 120 = 0.875
Precision = 51 / 57   = 0.89
Recall    = 51 / 60   = 0.85
```

How to write each stage up in the report is on [the project and practical file page](/cbse-class-10-ai-project-and-practical-file), and the metrics above are drilled on [evaluating models questions](/cbse-class-10-ai-evaluating-models-questions).

## Project ideas to avoid, and the safer version of each

Some ideas look exciting but fail on data, ethics or time. Each has a smaller cousin that works.

- Risky idea | The problem | Safer version

- Face recognition attendance for your class | Faces of minors collected without proper consent raise privacy issues | Hand sign reader (idea 8) on your own hands

- An app that diagnoses a disease | Claims a medical result a student project cannot support | Leaf health checker (idea 1), or clinic review sentiment (idea 3)

- Predicting the share market | No clear SDG, and no way to judge success in a term | Household electricity use (idea 10)

- A chatbot that answers everything | Too broad to build or evaluate | Civic complaint sorter (idea 11), one task done well

- Any idea with no data source | Stalls at data acquisition | Pick an idea whose data you can see before you commit

Ethics is part of the project viva, so mention consent, privacy and possible bias in your report. The vocabulary is revised on [project cycle and ethics](/cbse-class-10-ai-project-cycle-and-ethics), and the questions you will be asked about your project are on [class 10 AI viva questions](/cbse-class-10-ai-viva-questions).

## How the live batch takes a project from idea to viva

The teacher never builds the project. The student does, with checkpoints that stop small problems becoming late ones.

### Idea and data check
Each student shortlists two ideas from a list like this one, then shows the class the data for each. The idea with data in hand wins.

### Stage reviews on screen
One Wednesday a month, students share their Orange canvas or notebook, and the teacher asks what each step does and why.

### Evaluation before polish
Numbers come before the report: the teacher checks the test split and confusion matrix, then the student writes up what the model gets wrong.

If your school asks for a Python project, the libraries are covered on [Python for CBSE Class 10 AI](/python-for-cbse-class-10-ai); for the Orange route, see [Orange Data Mining for Class 10 AI](/orange-data-mining-class-10-ai).

## The courses behind this page

- [CBSE AI for Class 9 to 12](/courses/cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843): The full 417 course, with the project chosen in the first term and each stage reviewed in the Wednesday lab.
- [Visual ML with Orange](/courses/orange-data-mining-visual-machine-learning-course-for-teens): Image, text and table workflows in Orange, the no-code route that most of the ideas below can be built in.
- [Data Science for Teens](/courses/data-science-course-for-teens-python-data): Pandas, charts and simple models in Python, for students taking one of the stretch ideas in code.

Families also look at [Python for Teens](/courses/python-complete-masterclass-teens), [AI and ML for Teens](/courses/ai-ml-masterclass-teens), [CBSE Class 10 Maths board exam prep](/courses/cbse-class-10-maths-board-exam-prep-course), [CBSE and ICSE Computer Science Class 11 and 12](/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course), [CBSE Informatics Practices Class 11 and 12](/courses/cbse-informatics-practices-ip-class-11-12-python-pandas-sql-complete-course), [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course), [Hackathon Prep for Teens](/courses/hackathon-prep-for-teens-coding-ai-build-innovate-win-course), [Git and GitHub for Teens](/courses/git-github-version-control-course-for-teens).

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

**What are some easy AI project ideas for class 10?** A leaf health checker from photos, a fruit ripeness sorter, a sentiment analysis of clinic reviews, an air quality band predictor or a survey on sleep and screen time. Each can be built in Orange without code, uses data you can get within a week and links to one Sustainable Development Goal.

**Does the class 10 AI project have to be linked to an SDG?** CBSE asks that the Class 10 AI project relate to the Sustainable Development Goals. Name the goal in your problem scoping, explain who benefits, and keep the link specific: for example SDG 14, Life Below Water, for a coral bleaching project, rather than a general claim about helping the planet.

**How do I do a sentiment analysis project in class 10?** Collect short texts such as public reviews, remove names, and load them into Orange with the Corpus widget. Clean them with Preprocess Text, score them with Sentiment Analysis and view the results in a Data Table. To evaluate, label about fifty texts yourself and count how often the tool agrees with you.

**Is coral bleaching a good class 10 AI project?** Yes, as a medium-level Computer Vision project for SDG 14. Use an open image set of healthy and bleached coral, build an image classifier in Orange with Image Embedding, and report recall on bleached coral, since a missed bleached reef is the costly error. Check that both classes have similar numbers of images.

**What is the class 10 AI project worth in marks?** The project carries 10 marks and the viva on it carries 5, out of the 50 practical marks in Part C of CBSE 417. CBSE allows a project, a field visit or a student portfolio for those 10 marks; your school tells you which it expects.

**Can I make the class 10 AI project without coding?** Yes. Orange, which is part of the 417 curriculum, lets you build image, text and table models by connecting widgets. Every idea on this page can be built in Orange, including the stretch ones, though students confident in Python often find comparing models quicker in code.

**Which AI domain should my project use?** One of the three in the curriculum: Statistical Data for tables of numbers, Computer Vision for images, or Natural Language Processing for text. Pick the domain whose data you can most easily get, and keep to one domain so the project stays finishable.

**Can I use a dataset from the internet for my AI project?** Yes, open datasets are fine if you name the source in your report and can explain what each column or folder means. Data you collect yourself, with consent where people are involved, is often easier to defend in the viva because you know exactly how it was made.

**How long does a class 10 AI project take?** An easy Orange project takes about three to four weekends of steady work; a stretch project with your own labelled data can take eight or more. Start in the first term, so the project is finished well before the school practical and the theory paper.

**Do you help students with their AI project?** Yes. The project is guided inside the batch and one to one sessions: choosing an idea, checking the data, reviewing each stage and rehearsing the viva. The student builds the project themselves. There is no separate project charge: it sits inside the monthly fee on this page, the first class is a free demo and nobody pays an admission fee.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Mon and Wed 9 PM AI batch](/cbse-class-10-ai-classes-online), [CBSE AI classes in the Gulf and abroad](/cbse-class-10-ai-online-classes-gulf-and-abroad), [Live doubt classes](/cbse-class-10-ai-doubt-classes), [Class 10 AI tuition online](/cbse-class-10-ai-tuition), [Class 10 AI crash course](/cbse-class-10-ai-crash-course), [1-on-1 private AI tutor](/cbse-class-10-ai-private-tutor), [AI tuition in Delhi](/class-10-ai-tuition-delhi), [AI tuition in Gurgaon](/class-10-ai-tuition-gurgaon), [AI tuition in Noida](/class-10-ai-tuition-noida), [AI tuition in Bangalore](/class-10-ai-tuition-bangalore), [AI tuition in Pune](/class-10-ai-tuition-pune).

**Unit by unit:** [CBSE AI 417 syllabus explained](/cbse-class-10-ai-syllabus-explained), [Python for Class 10 AI](/python-for-cbse-class-10-ai), [Part A employability skills](/cbse-class-10-ai-employability-skills-part-a), [Unit 3: Evaluating Models](/cbse-class-10-ai-evaluating-models-questions), [Confusion matrix numericals](/confusion-matrix-class-10-ai-numericals), [Unit 2: Advanced modeling](/cbse-class-10-ai-advanced-modeling-questions), [Unit 6: Natural Language Processing](/cbse-class-10-ai-nlp-questions), [Bag of Words and TFIDF, worked](/bag-of-words-tfidf-class-10-ai), [Unit 5: Computer Vision](/cbse-class-10-ai-computer-vision-questions), [Orange Data Mining for Class 10 AI](/orange-data-mining-class-10-ai), [Unit 1: Project cycle and ethics](/cbse-class-10-ai-project-cycle-and-ethics).

**Questions and practice:** [CBSE AI important questions](/cbse-class-10-ai-important-questions), [Sample paper and mock tests](/cbse-class-10-ai-sample-paper-and-mock-tests), [Class 10 AI MCQ, unit wise](/cbse-class-10-ai-mcq-questions), [Previous year papers, solved](/cbse-class-10-ai-previous-year-question-papers), [AI practical and project viva](/cbse-class-10-ai-viva-questions), [Case based questions](/cbse-class-10-ai-case-based-questions), [Employability skills MCQ](/employability-skills-class-10-mcq), [Difference between questions](/cbse-class-10-ai-difference-between-questions), [Assertion and reason questions](/cbse-class-10-ai-assertion-reason-questions).

**Notes and revision:** [Class 10 AI notes, unit wise](/cbse-class-10-ai-notes), [Class 10 AI one shot revision](/cbse-class-10-ai-one-shot-revision), [30, 7 and 1 day revision plan](/cbse-class-10-ai-revision-plan), [Worksheets with answers](/cbse-class-10-ai-worksheets), [AI handbook exercise answers](/cbse-class-10-ai-textbook-solutions), [Best book for Class 10 AI](/best-book-for-cbse-class-10-ai), [Formula sheet](/cbse-class-10-ai-formula-sheet), [Class 10 AI notes in Hindi](/cbse-class-10-ai-notes-in-hindi).

**Exam, marks and practicals:** [CBSE AI board exam preparation](/cbse-class-10-ai-board-exam-preparation), [AI project and practical file](/cbse-class-10-ai-project-and-practical-file), [Exam date 2027 and paper pattern](/cbse-class-10-ai-exam-date-and-paper-pattern), [AI practical exam questions](/cbse-class-10-ai-practical-exam-questions), [Paper analysis and answer key](/cbse-class-10-ai-paper-analysis), [Marking scheme, explained](/cbse-class-10-ai-marking-scheme), [Passing marks](/cbse-class-10-ai-passing-marks), [The second board exam in May](/cbse-class-10-ai-second-board-exam).

**Choosing the subject:** [AI 417 or IT 402?](/ai-417-vs-it-402-class-10), [AI, IT or Computer Applications?](/ai-vs-computer-applications-class-10).

---

*Canonical: https://learn.modernagecoders.com/cbse-class-10-ai-project-ideas*
