---
title: "Class 10 AI Notes 2026-27 (417): Unit-Wise Revision Sheets"
description: "Class 10 AI notes for CBSE 417, 2026-27: one revision sheet per unit in the CBSE session order, with unit marks, key terms, formulas and what gets asked."
canonical: https://learn.modernagecoders.com/cbse-class-10-ai-notes
source: src/pages/cbse-class-10-ai-notes.html
updated: 2026-11-06
---

> Class 10 AI notes for 2026-27 should follow the CBSE 417 curriculum in order: Part A employability skills (five units, 2 marks each), then Part B Unit 1, Revisiting AI Project Cycle and Ethical Frameworks (7 marks), Unit 2, Advanced Concepts of Modeling (11), Unit 3, Evaluating Models (10), Unit 5, Computer Vision (4) and Unit 6, Natural Language Processing (8). Unit 4, Statistical Data, and Unit 7, Advance Python, are practical only. Modern Age Coders revises each unit live in a Monday and Wednesday 9:00 PM IST batch, or personalised one to one.

## What do the class 10 AI notes need to cover in 2026-27?

Twelve units: five short Part A units and seven Part B units. This map, taken from the CBSE curriculum for the session, shows each unit's marks and where it is examined. Revise in this order and you follow the school timetable too.

- Unit, in CBSE order | Theory marks | Examined in | Sessions the curriculum names

- Part A, Units 1 to 5: Communication, Self-Management, ICT, Entrepreneurial and Green Skills | 10 | Theory paper | Two marks per unit

- Unit 1: Revisiting AI Project Cycle and Ethical Frameworks for AI | 7 | Theory paper | Project cycle, the three domains, ethical frameworks, bioethics case study

- Unit 2: Advanced Concepts of Modeling in AI | 11 | Theory paper | AI, ML and DL; data terms; rule-based and learning-based; learning types; neural networks

- Unit 3: Evaluating Models | 10 | Theory paper | Need for evaluation, train-test split, accuracy and error, classification metrics, ethics of evaluation

- Unit 4: Statistical Data | 0 | Practical only | No-code AI, statistics concepts, Orange, the penguins case study

- Unit 5: Computer Vision | 4 | Theory and practical | Tasks, pixels, resolution, grayscale and RGB in theory; convolution, CNN and no-code tools in practical

- Unit 6: Natural Language Processing | 8 | Theory and practical | Applications, stages, chatbots, text normalisation, Bag of Words; sentiment walkthrough in practical

- Unit 7: Advance Python | 0 | Practical only | Jupyter, virtual environments, packages, Python basics

### Read the marks before you plan

Units 2 and 3 together carry 21 of the 40 Part B theory marks, so their sheets deserve the most passes. Computer Vision is only 4 theory marks, yet it fills the most practical hours of any unit, which is why its sheet below separates the two halves.

### About a PDF

There is no separate download. Use your browser's Print and choose Save as PDF: the sheets below print cleanly, one unit after another. If your school uses an older chapter list, map it to these unit names before you start.

## Part B notes for class 10 AI: Unit 1 and Unit 2

Unit 1 is mostly lists and one framework to apply. Unit 2 is the largest theory unit and is mostly about telling one kind of model from another.

### Sheet 1. Revisiting AI Project Cycle and Ethical Frameworks (7 marks)

- Project cycle, in order: Problem Scoping, Data Acquisition, Data Exploration, Modelling, Evaluation. Some newer CBSE material adds Deployment as a final stage; if your school teaches it, learn it after Evaluation.

- 4Ws canvas: Who (stakeholders), What (the problem and its evidence), Where (the context or situation), Why (the benefit of solving it). Who is never "When".

- Three domains: Statistical Data (numbers and tables), Computer Vision (images and video), Natural Language Processing (text and speech).

- Ethical framework: a set of principles that guide right and wrong choices when AI is built and used, so that it does not cause unintended harm.

- Two types: sector-based (written for one field, such as bioethics for healthcare) and value-based (rights-based, utility-based, virtue-based).

- Four bioethics principles: respect for autonomy, do not harm, ensure maximum benefit, give justice.

Asked as: naming a stage from a description, sorting a framework into its type, and a case where a biased system is judged with the bioethics principles. The full unit is on [project cycle and ethics](/cbse-class-10-ai-project-cycle-and-ethics).

### Sheet 2. Advanced Concepts of Modeling in AI (11 marks)

- AI, ML, DL: AI is the widest idea; ML is AI that learns from data; DL is ML with many-layered neural networks. DL sits inside ML, which sits inside AI.

- Data terms: features are the inputs a model uses; a label is the answer it learns to predict; training data teaches; testing data checks.

- Rule-based against learning-based: rules are written by people and stay fixed; a learning-based model finds its own patterns and improves with data.

- Supervised (labelled): classification gives a category, regression gives a number.

- Unsupervised (unlabelled): clustering forms groups, association finds items that occur together.

- Reinforcement: an agent learns by reward and penalty, trial after trial.

- Deep learning: ANN, the general network; CNN, the network built for images.

- Neural network layers: input (receives data, no processing), hidden (all the processing), output (gives the result).

```
inputs 0.7 and 0.2, weights 0.4 and 1
sum = 0.7 x 0.4 + 0.2 x 1 = 0.48
if 0.48 passes the threshold: fire, else: do not
```

Asked as: classify-this-scenario items, a labelled diagram of the layers, and supervised against unsupervised with examples. Drills are on [Unit 2 modeling questions](/cbse-class-10-ai-advanced-modeling-questions).

## 417 revision notes for Evaluating Models: every formula on one sheet

Evaluation tells you how good a model is before anyone relies on it. The sheet is short because the unit is one table and four formulas, used again and again.

- Why evaluate: to find a model's strengths and weaknesses and improve it in a feedback loop before deployment.

- Train-test split: keep part of the data (often 20 to 30 per cent) aside; train on the rest; test on the unseen part. Testing on training data hides overfitting.

- Overfitting: the model memorises its training data and does badly on new data.

- Accuracy and error: accuracy is the share of correct predictions; error is the share of wrong ones, so the two add to 1.

- Confusion matrix: TP (predicted yes, really yes), FP (predicted yes, really no), FN (predicted no, really yes), TN (predicted no, really no).

- Pick the metric by the costly mistake: when a miss is dangerous (disease, fraud), recall; when a false alarm is costly (spam to the inbox, a wrong arrest), precision; when both matter, F1.

- Ethics of evaluation: bias in the test data, transparency about how the score was found, and accuracy that holds for every group.

```
Accuracy  = (TP + TN) / total
          = (35 + 45) / 100 = 0.80
Error     = 1 - 0.80 = 0.20
Precision = TP / (TP + FP)
          = 35 / 40 = 0.875
Recall    = TP / (TP + FN)
          = 35 / 50 = 0.70
F1        = 2 x P x R / (P + R)
          = 2 x 0.875 x 0.70 / 1.575
          = 0.78 (approx.)
```

Ten graded problems with full working are on [confusion matrix numericals](/confusion-matrix-class-10-ai-numericals).

## AI class 10 short notes: Computer Vision and Natural Language Processing

Unit 4 comes between them in the curriculum but is practical only, so its sheet is in the next section. Here are the two domains that the theory paper asks about.

### Sheet 5. Computer Vision (4 marks)

- Computer vision: the AI domain that lets machines take in images or video and draw meaning from them. Image processing only changes an image; CV understands it, so CV is the wider idea.

- Tasks for one object: classification (what is it?), classification plus localisation (what and where?).

- Tasks for many objects: object detection (boxes around each), instance segmentation (exact outline of each).

- Pixel: the smallest unit of a digital image. Resolution: width x height in pixels.

- Pixel value: in a byte image each pixel is 8 bits, so 28 = 256 values, 0 (black) to 255 (white).

- Grayscale: one value per pixel. RGB: three values per pixel, one per channel. A 64 x 64 image stores 4,096 values in grayscale and 12,288 in RGB.

- Practical side only: convolution with a kernel, CNN layers, and the no-code tools (Teachable Machine, Lobe, Orange with the coral bleaching case).

Pixel and kernel arithmetic, worked, is on [Unit 5 computer vision questions](/cbse-class-10-ai-computer-vision-questions).

### Sheet 6. Natural Language Processing (8 marks)

- NLP: the AI domain that lets machines read, understand and produce human language, which is ambiguous in ways code never is.

- Applications the curriculum lists: voice assistants, auto-generated captions, translation, sentiment analysis, text classification, keyword extraction.

- Stages: lexical analysis (words), syntactic analysis (grammar), semantic analysis (meaning), then logical analysis of the whole text.

- Chatbots: a script bot follows fixed replies and suits narrow tasks; a smart bot learns, handles open questions and uses large data.

- Text normalisation: sentence segmentation, tokenisation, removing stop words and special characters, converting case, then stemming or lemmatisation.

- Stemming against lemmatisation: stemming cuts endings and may leave a non-word; lemmatisation returns a dictionary word.

- Bag of Words, four steps: normalise, build the dictionary, make a vector per document, stack the vectors into a table.

- TFIDF: term frequency x log(N / documents containing the word). In 4 documents, a word in one of them has IDF log10 4 = 0.602; in two of them, 0.301; in all four, 0.

Corpora worked to the last cell are on [Bag of Words and TFIDF, worked](/bag-of-words-tfidf-class-10-ai).

## Notes for the practical-only units and the ten Part A marks

Statistical Data and Advance Python earn their marks in the lab, file and viva, not the written paper. Part A is the reverse: pure theory, ten marks, and often the quickest to secure.

### Sheet 4. Statistical Data (practical only)

- No-code AI: building models by dragging blocks instead of writing code; low-code needs a little code.

- Statistics to know: mean, median, mode. For 12, 15, 15, 18, 20 they are 16, 15 and 15.

- Orange Data Mining: the CBSE no-code tool; the penguin species case study takes data through exploration, modelling and evaluation.

### Sheet 7. Advance Python (practical only)

- Setup: Jupyter Notebook, virtual environments, installing packages.

- CBSE's eight suggested programs: add two lists element by element; mean, median and mode with NumPy; a line chart; a scatter chart; read a CSV and show ten rows; show a CSV's information; read and display an image; read an image and find its shape.

Each program, written and explained, is on [Python for CBSE Class 10 AI](/python-for-cbse-class-10-ai).

### Part A short notes (2 marks per unit)

- Unit | Learn these

- Communication Skills | The 7 Cs (clear, concise, concrete, correct, coherent, complete, courteous); verbal, non-verbal and visual; parts of speech and sentence types

- Self-Management Skills | Stress management, self-awareness, self-motivation steps, SMART goals, time management

- ICT Skills | Device care, viruses and antivirus, spam, keeping personal data safe

- Entrepreneurial Skills | What entrepreneurs do, their qualities, the entrepreneurship process

- Green Skills | Sustainable development, the SDGs, organic farming, saving water and energy

Every Part A unit with short answers is on [Part A employability skills](/cbse-class-10-ai-employability-skills-part-a).

## How to revise from AI class 10 notes, and what the live class adds

Notes are for recall, not first learning. A student who reads a sheet and then answers three questions on it remembers far more than one who reads it three times.

- Read one sheet, cover it, write it out. Whatever you could not write is what you revise tomorrow.

- Answer in the board's word limits. Turn two bullets into a 20 to 30 word answer and one list into a 50 to 80 word answer.

- Redo the worked line with new numbers. The formula sheet is only safe once you can apply it without looking.

- Go round the units again in a week, weighted by marks: Units 2 and 3 twice, Computer Vision once.

### A sheet a Monday
Each Monday class teaches one unit from its sheet, with examples on screen and every doubt taken as it comes up, not saved for later.

### Tested on Wednesday
The Wednesday class opens with a short written test on the same unit, marked in front of the class against the board's value points.

### Full revision before boards
From January the batch goes round all the sheets again, in mark order, with timed papers between rounds.

For a single sitting through the whole subject, read [the Class 10 AI one shot revision](/cbse-class-10-ai-one-shot-revision).

## The courses behind this page

- [CBSE AI for Class 9 to 12](/courses/cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843): The full 417 course, taught in curriculum order, with each unit closed by a short written test in the board format.
- [Python for Teens](/courses/python-complete-masterclass-teens): Jupyter, lists, NumPy and Matplotlib: everything the eight suggested programs and the lab exam need.
- [Visual ML with Orange](/courses/orange-data-mining-visual-machine-learning-course-for-teens): The no-code tool behind the penguin, coral bleaching and sentiment walkthroughs, used hands-on rather than read about.

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

**Where can I find class 10 AI notes for 2026-27?** This page has one revision sheet for each unit of the CBSE 417 curriculum for 2026-27, in the order CBSE lists them, with each unit's theory marks. The sheets cover Part A, the five theory units and the two practical-only units.

**Is there an AI class 10 notes PDF?** We do not offer a separate file. Open this page, choose Print in your browser and select Save as PDF; the unit sheets print one after another, with the marks table first. That way your copy always matches the latest version of the page, and you can print only the units you want.

**Which chapters are in class 10 AI for 2026-27?** Part B has seven units: Revisiting AI Project Cycle and Ethical Frameworks, Advanced Concepts of Modeling, Evaluating Models, Statistical Data, Computer Vision, Natural Language Processing and Advance Python. Part A has five employability skills units: communication, self-management, ICT, entrepreneurial and green skills.

**Which units are practical only in class 10 AI?** Unit 4, Statistical Data, and Unit 7, Advance Python. They carry no theory marks and are assessed through the practical file, the practical exam and the viva. Computer Vision and NLP have both a theory part and a practical part.

**Which unit carries the most marks in class 10 AI?** Unit 2, Advanced Concepts of Modeling in AI, with 11 of the 40 Part B theory marks. Unit 3, Evaluating Models, follows with 10, then Natural Language Processing with 8, the project cycle unit with 7 and Computer Vision with 4.

**Are these notes enough to score full marks?** Notes help you recall what you have learned; they do not replace practice. Pair each sheet with questions in the board shapes, written within the word limits, and timed papers near the exam. That is how our classes use them.

**What are Part B notes in class 10 AI?** Part B is the subject-specific half: the seven AI units, worth 40 theory marks. Part A is the employability skills half, worth 10. Sheets 1 to 7 on this page are the Part B notes; the Part A table covers the other ten marks.

**How many stages does the AI project cycle have in class 10?** The five core stages are Problem Scoping, Data Acquisition, Data Exploration, Modelling and Evaluation. Some newer CBSE material adds Deployment as a sixth, final stage, so learn it too if your school teaches it. Learn the order carefully, because papers ask which stage comes straight after a given one.

**Do I need Python for the class 10 AI theory paper?** No. Advance Python is assessed only in the practical, so the written paper does not ask you to write code. For the lab, learn the eight programs CBSE suggests, such as finding mean, median and mode with NumPy, drawing line and scatter charts, and reading a CSV file.

**Do your classes follow the same order as these notes?** Yes. The batch teaches the units in CBSE order, one sheet at a time, and tests each one the same week. All of it is covered by the monthly fee shown on this page, with no admission fee, and the first class is a free demo.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Mon and Wed 9 PM AI batch](/cbse-class-10-ai-classes-online), [CBSE AI classes in the Gulf and abroad](/cbse-class-10-ai-online-classes-gulf-and-abroad), [Live doubt classes](/cbse-class-10-ai-doubt-classes), [Class 10 AI tuition online](/cbse-class-10-ai-tuition), [Class 10 AI crash course](/cbse-class-10-ai-crash-course), [1-on-1 private AI tutor](/cbse-class-10-ai-private-tutor), [AI tuition in Delhi](/class-10-ai-tuition-delhi), [AI tuition in Gurgaon](/class-10-ai-tuition-gurgaon), [AI tuition in Noida](/class-10-ai-tuition-noida).

**Unit by unit:** [CBSE AI 417 syllabus explained](/cbse-class-10-ai-syllabus-explained), [Python for Class 10 AI](/python-for-cbse-class-10-ai), [Part A employability skills](/cbse-class-10-ai-employability-skills-part-a), [Unit 3: Evaluating Models](/cbse-class-10-ai-evaluating-models-questions), [Confusion matrix numericals](/confusion-matrix-class-10-ai-numericals), [Unit 2: Advanced modeling](/cbse-class-10-ai-advanced-modeling-questions), [Unit 6: Natural Language Processing](/cbse-class-10-ai-nlp-questions), [Bag of Words and TFIDF, worked](/bag-of-words-tfidf-class-10-ai), [Unit 5: Computer Vision](/cbse-class-10-ai-computer-vision-questions), [Orange Data Mining for Class 10 AI](/orange-data-mining-class-10-ai), [Unit 1: Project cycle and ethics](/cbse-class-10-ai-project-cycle-and-ethics).

**Questions and practice:** [CBSE AI important questions](/cbse-class-10-ai-important-questions), [Sample paper and mock tests](/cbse-class-10-ai-sample-paper-and-mock-tests), [Class 10 AI MCQ, unit wise](/cbse-class-10-ai-mcq-questions), [Previous year papers, solved](/cbse-class-10-ai-previous-year-question-papers), [AI practical and project viva](/cbse-class-10-ai-viva-questions), [Case based questions](/cbse-class-10-ai-case-based-questions), [Employability skills MCQ](/employability-skills-class-10-mcq), [Difference between questions](/cbse-class-10-ai-difference-between-questions), [Assertion and reason questions](/cbse-class-10-ai-assertion-reason-questions).

**Notes and revision:** [Class 10 AI one shot revision](/cbse-class-10-ai-one-shot-revision), [30, 7 and 1 day revision plan](/cbse-class-10-ai-revision-plan), [Worksheets with answers](/cbse-class-10-ai-worksheets), [AI handbook exercise answers](/cbse-class-10-ai-textbook-solutions), [Best book for Class 10 AI](/best-book-for-cbse-class-10-ai), [Formula sheet](/cbse-class-10-ai-formula-sheet).

**Exam, marks and practicals:** [CBSE AI board exam preparation](/cbse-class-10-ai-board-exam-preparation), [AI project and practical file](/cbse-class-10-ai-project-and-practical-file), [Exam date 2027 and paper pattern](/cbse-class-10-ai-exam-date-and-paper-pattern), [AI practical exam questions](/cbse-class-10-ai-practical-exam-questions), [AI project ideas](/cbse-class-10-ai-project-ideas), [Passing marks](/cbse-class-10-ai-passing-marks), [The second board exam in May](/cbse-class-10-ai-second-board-exam).

**Choosing the subject:** [AI 417 or IT 402?](/ai-417-vs-it-402-class-10), [AI, IT or Computer Applications?](/ai-vs-computer-applications-class-10).

---

*Canonical: https://learn.modernagecoders.com/cbse-class-10-ai-notes*
