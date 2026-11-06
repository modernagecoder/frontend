---
title: "Class 10 AI One Shot Revision 2026-27 (417) in 90 Minutes"
description: "Class 10 AI one shot for CBSE 417, 2026-27: the whole syllabus as a 90-minute timed path, Part A and Part B, with checkpoints and worked numbers."
canonical: https://learn.modernagecoders.com/cbse-class-10-ai-one-shot-revision
source: src/pages/cbse-class-10-ai-one-shot-revision.html
updated: 2026-11-06
---

> A class 10 AI one shot is a single read-through of the whole CBSE 417 syllabus. For 2026-27 it should cover Part A employability skills (10 theory marks) and the Part B units in proportion to their weight: Advanced Concepts of Modeling (11), Evaluating Models (10), Natural Language Processing (8), the AI Project Cycle and Ethical Frameworks (7) and Computer Vision (4), with Statistical Data and Advance Python kept short because they are practical only. This page does it in about 90 minutes. Modern Age Coders runs the same revision live, Monday and Wednesday at 9:00 PM IST, or one to one.

## How do you revise class 10 AI in one shot?

Read the seven stops below in order, keep to the minutes in the table, and answer each checkpoint before opening it. The heavy units get the most minutes, so the time you spend matches the marks at stake.

- Stop | Clock | Unit | Theory marks | You should leave able to

- 1 | 0 to 10 min | Part A: the five employability skills units | 10 | Recall one list and one example per unit

- 2 | 10 to 22 min | Unit 1: Revisiting AI Project Cycle and Ethical Frameworks | 7 | Place any task in the right stage; sort a framework by type

- 3 | 22 to 42 min | Unit 2: Advanced Concepts of Modeling in AI | 11 | Name the learning type of any scenario; do a perceptron sum

- 4 | 42 to 60 min | Unit 3: Evaluating Models | 10 | Build a confusion matrix from words and get four metrics

- 5 | 60 to 68 min | Unit 5: Computer Vision | 4 | Name the task; count pixels and stored values

- 6 | 68 to 82 min | Unit 6: Natural Language Processing | 8 | Normalise a sentence, make a vector, find an IDF

- 7 | 82 to 90 min | Units 4 and 7: Statistical Data and Advance Python | practical only | Explain mean, median, mode and the eight lab programs

### Three rules for the 90 minutes

- Pen and rough paper ready. Every number on this page is meant to be worked, not read.

- Checkpoint first, answer second. A checkpoint you get wrong is the most useful thing on the page: write it on a list.

- No detours. Do not open the deeper links during the run. Visit them afterwards, starting with the unit that cost you a checkpoint.

### The example that runs through every stop

A school canteen cooks about 600 lunches a day and throws away too many. The students' AI club decides to help. You will scope that problem, collect its data, pick a model, test it, point a camera at the waste bin and read the feedback students write. Seeing one problem through every unit is what makes the syllabus hang together the night before the paper.

## 417 one shot, Part A and Part B: employability skills and the project cycle

Part A is ten marks of short recall, so it gets ten minutes and no more. Unit 1 then sets up the vocabulary the rest of Part B leans on.

### Stop 1. Part A in ten minutes

Communication. A message travels from sender to receiver and comes back as feedback. It can be spoken or written, carried by gestures and posture, or shown as a chart or sign. The seven Cs are the test of a good one: clear, concise, concrete, correct, coherent, complete and courteous.

Self-management. Knowing your strengths, handling stress, keeping yourself motivated and planning time. A goal is SMART when it is specific, measurable, achievable, relevant and time-bound.

ICT. Looking after a device, recognising a virus or a spam message, using antivirus and keeping passwords and personal data private.

Entrepreneurship. Someone who spots an unmet need, takes a risk on meeting it and runs the business. The canteen club selling a waste-tracking app to other schools would be doing exactly that.

Green skills. Development that meets today's needs without spoiling tomorrow's, the Sustainable Development Goals, and everyday choices such as saving water, energy and food.

Checkpoint 1: which SMART letter does "finish Unit 3 by Friday" satisfy most clearly? T, time-bound. It has a deadline. It is also specific, but the date is what makes it time-bound.
Part A with short answers for each unit: [Part A employability skills](/cbse-class-10-ai-employability-skills-part-a).

### Stop 2. The project cycle and ethics, twelve minutes

The canteen problem goes round the cycle in order:

- Problem Scoping. Fill the 4Ws canvas. Who is affected: cooks, students, the school paying for food. What is the problem: about one plate in six is thrown away. Where: the lunch hall, on weekdays. Why solve it: less wasted money and food.

- Data Acquisition. Collect day-by-day records: menu, weather, attendance, exam days and plates wasted.

- Data Exploration. Plot the records and look for patterns, such as more waste on rainy days.

- Modelling. Choose and train a model that predicts tomorrow's waste.

- Evaluation. Test it on days it has never seen. Some newer CBSE material names Deployment, putting the model to use, as a stage after this.

The project sits in one of three domains: Statistical Data (tables of numbers, like these records), Computer Vision (images) or NLP (language). Ethical frameworks are the guide-rails for right and wrong choices with AI. Sector-based ones are written for one field, bioethics for healthcare being the classic case, with its four principles: respect autonomy, do no harm, maximise benefit, act justly. Value-based ones are rights-based, utility-based or virtue-based.

Checkpoint 2: the club chooses the menu change that cuts the most waste overall, even though a few students lose a favourite dish. Which approach is that? Utility-based. It weighs the total good against the harm. A rights-based approach would protect every student's choice first.
The full unit, case study included: [project cycle and ethics](/cbse-class-10-ai-project-cycle-and-ethics).

## AI class 10 complete one shot: modeling and evaluating models

These two units carry more than half of the 40 Part B theory marks, so they get 38 of the 90 minutes. Slow down here.

### Stop 3. Modeling, twenty minutes

AI, ML and DL nest inside each other. AI is any machine behaviour that looks intelligent. Machine learning is the part of AI that improves from data. Deep learning is the part of ML that uses neural networks with many layers.

Rule-based or learning-based. "If it rains, cook 50 fewer plates" is a rule a person wrote, and it never changes on its own. A model that reads two years of records and works out the effect of rain for itself is learning-based, and it improves as new days are added.

- The canteen asks | Learning type | Task

- How many plates will be wasted tomorrow? | Supervised | Regression (a number)

- Will the paneer run out before 1 PM: yes or no? | Supervised | Classification (a label)

- Which groups of students eat in similar ways? (no labels) | Unsupervised | Clustering

- Which dishes are usually taken together? | Unsupervised | Association

- A program that adjusts daily orders and is rewarded when waste falls | Reinforcement | Reward and penalty

Neural networks. The input layer takes the features in, hidden layers do the processing, the output layer gives the answer. An ANN is the general network; a CNN is the one built for images. A single neuron, the perceptron, multiplies each input by its weight, adds them with the bias and fires if the total passes the threshold.

```
rainy = 1, exam day = 0, pizza on menu = 1
weights 0.3, 0.8, 0.5   bias -0.6
sum = 1 x 0.3 + 0 x 0.8 + 1 x 0.5 - 0.6 = ?
```

Fifteen scenarios to sort and the written answers: [Unit 2 modeling questions](/cbse-class-10-ai-advanced-modeling-questions).

### Stop 4. Evaluating models, eighteen minutes

The club has 750 days of lunch records. It keeps 20 per cent aside, trains on 600 and tests on 150 the model has never seen. Testing on the training days would flatter it, because a model can memorise data it has seen; that memorising is called overfitting.

For a number prediction, error is the gap between actual and predicted. For a yes or no prediction, the four outcomes go into a confusion matrix. Here the classifier answers "will the main dish run out early?" for the 150 test days:

```
              Actually ran out   Did not
Predicted yes     TP = 36         FP = 9
Predicted no      FN = 12         TN = 93

Accuracy  = (36 + 93) / 150   = 0.86
Error     = 1 - 0.86          = 0.14   (21 wrong)
Precision = 36 / (36 + 9)     = 0.80
Recall    = 36 / (36 + 12)    = 0.75
F1        = 2 x 0.80 x 0.75 / 1.55 = 0.77
```

Which metric matters? Ask which mistake hurts more. Here a false negative means hungry students with no main dish, so recall matters. For a spam filter, a false positive buries a real email, so precision matters. When both hurt, use F1. The ethics of evaluation asks whether the test data was fair to every group and whether the score was reported honestly.

Checkpoint 4: the cook says, "Of the days your model warned me, how many really ran out?" Which metric is that? Precision, 36 of 45 warnings, 0.80. "Of the days that really ran out, how many did you warn me about?" would be recall.
Ten graded problems, including ones that run backwards from a metric: [confusion matrix numericals](/confusion-matrix-class-10-ai-numericals).

## Computer vision and NLP in the class 10 AI one shot

The club now adds a camera above the waste bin and a box for written feedback. Vision gets eight minutes because it carries four theory marks; language gets fourteen for its eight.

### Stop 5. Computer vision, eight minutes

Computer vision lets a machine take meaning from images and video. The tasks grow in detail:

- Bin camera wants to know | Task

- Is this plate rice or roti? | Classification

- What is on the plate, and where in the frame? | Classification and localisation

- Box every plate on the tray | Object detection

- Trace the exact outline of each leftover | Instance segmentation

An image is a grid of pixels. The camera saves frames of 960 x 540, so each frame has 518,400 pixels. In grayscale each pixel holds one value; in colour it holds three, red, green and blue, so a colour frame stores 1,555,200 numbers. With 8 bits per value there are 28 = 256 levels, from 0 for black to 255 for full brightness.

Checkpoint 5: a grayscale frame of 960 x 540 is converted to colour. How many more numbers does it store? 1,036,800 more. Colour stores 1,555,200 and grayscale 518,400; the colour frame holds three times as many.
Pixel counts and the practical side of the unit: [Unit 5 computer vision questions](/cbse-class-10-ai-computer-vision-questions).

### Stop 6. Natural Language Processing, fourteen minutes

NLP lets a machine work with human language: voice assistants, translation, captions, sentiment analysis, keyword extraction. Language is hard for machines because one sentence can be grammatical and still mean nothing, or mean two things.

Stages: lexical (the words), syntactic (the grammar), semantic (the meaning), then logical analysis of the whole text. Chatbots are script bots that follow fixed replies or smart bots that learn from data.

A feedback slip reads "Pasta was cold, again!". Text normalisation splits it into tokens (Pasta, was, cold, the comma, again, the exclamation mark: 6 tokens), drops stopwords such as "was" and the punctuation, lowers the case, and reduces words to a base form, by stemming (cut the ending) or lemmatisation (return a real dictionary word).

Bag of Words then lists every unique word of all the slips as a dictionary and turns each slip into a row of counts. TFIDF scores how special a word is to one slip: TF is its count in that slip, and TFIDF = TF x log10(total slips / slips containing the word).

Checkpoint 6: in 5 slips, "cold" appears once in a slip and in 2 slips overall. What is its TFIDF there, and what would it be if every slip said "cold"? 1 x log10(5/2) = 0.398, and log10(5/5) = 0 if all five slips use it: a word found everywhere tells the slips apart not at all.
A corpus taken to the last TFIDF cell: [Bag of Words and TFIDF, worked](/bag-of-words-tfidf-class-10-ai).

## The practical units, then a final check on the whole one shot

Statistical Data and Advance Python are not in the written paper. They earn their marks in the practical file, the lab exam and the viva, so the one shot gives them a quick look and moves on.

### Stop 7. Two practical units, eight minutes

Statistical Data is about building models without writing code (no-code tools such as Orange Data Mining) and the statistics underneath. Five days of wasted plates, 40, 25, 30, 25, 50, have a mean of 34, a median of 30 once sorted, and a mode of 25.

Advance Python covers Jupyter Notebook, virtual environments, installing packages and the Python basics. CBSE suggests eight programs for the file, from adding two lists to reading an image and finding its shape; examiners ask you to run one and explain it.

Each program written out and explained: [Python for CBSE Class 10 AI](/python-for-cbse-class-10-ai).

### Final check: ten questions, five minutes

- Which stage comes straight after Data Acquisition? Answer Data Exploration.

- Predicting a price in rupees: classification or regression? Answer Regression, because the output is a number.

- Grouping customers when no labels exist is called what? Answer Clustering, a kind of unsupervised learning.

- Which layer of a neural network does no processing? Answer The input layer; it only receives the data.

- Write the F1 formula. Answer 2 x precision x recall / (precision + recall).

- For a fraud alarm, which costs more: FP or FN? Answer FN, a missed fraud, so recall matters most.

- How many pixels in a 100 x 50 image? Answer 5,000; a colour version stores 15,000 values.

- Which gives a real word: stemming or lemmatisation? Answer Lemmatisation.

- Name the four principles of bioethics. Answer Respect for autonomy, do no harm, maximum benefit, justice.

- Is Advance Python in the theory paper? Answer No. It is assessed only in the practical.

Eight or more right means the one shot has done its job; now practise papers. Fewer than six means the units behind your misses need a proper revision round, and [the 30, 7 and 1 day revision plan](/cbse-class-10-ai-revision-plan) shows how to fit that in before the exam.

## AI revision in one day: when a one shot helps, and how the live class runs it

A one shot is a review, not a first lesson. It works when the units were taught during the year and you need them all in your head at once, typically in the final weeks and once more the day before the paper.

- Your situation | Use the one shot for | Then

- Units studied, exam three or four weeks away | Finding the weak units | A full revision round on each one you missed

- One week left | Day 1 of the week, to rank the units | Two timed papers, each corrected the same day

- The day before the paper | A calm read in the morning | Formulas and your error list in the evening, then sleep

- Units never studied | Not much: it is too fast | Learn the heavy units first: Modeling, then Evaluating Models

### Stops taught at speed
From January the Monday class takes two or three stops of this path in one sitting, with the teacher working the numbers on screen and students answering aloud.

### Checkpoint tests on Wednesday
The Wednesday class opens with a short written test on the stops just covered, marked against the value points, and every miss goes on the student's own error list.

### Doubts settled the same night
A student who loses a checkpoint can ask why on the spot. The teacher reworks it with fresh numbers until the method holds, rather than leaving it for the next week.

## The courses behind this page

- [CBSE AI for Class 9 to 12](/courses/cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843): The full 417 course: every unit taught in the term, then revised in fast rounds like this one, each closed by a marked test.
- [Python for Teens](/courses/python-complete-masterclass-teens): Lists, NumPy, Matplotlib and CSV reading: the programs the lab exam and viva ask about.
- [Visual ML with Orange](/courses/orange-data-mining-visual-machine-learning-course-for-teens): The no-code tool of the Statistical Data unit, used hands-on so the practical questions feel familiar.

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

**What is a class 10 AI one shot?** It is a single sitting that revises the whole CBSE Class 10 AI (417) syllabus from start to end, instead of one unit at a time. This page does it as a text path of seven timed stops, about 90 minutes in all, covering Part A, the five theory units of Part B and the two practical-only units, with a checkpoint question at each stop.

**Can I complete class 10 AI in one day?** You can revise it in one day if you studied the units during the year: read the one shot in the morning, rework the numericals in the afternoon and write one timed paper in the evening. Learning it from nothing in one day is not realistic, because Units 2 and 3 alone carry 21 theory marks and need practice, not just reading.

**How long is the AI class 10 complete one shot?** About 90 minutes of focused reading, with a pen for the numbers. The minutes follow the marks: 20 for Advanced Concepts of Modeling, 18 for Evaluating Models, 14 for NLP, 12 for the project cycle unit, 10 for Part A, 8 for Computer Vision and 8 for the two practical units.

**Does the 417 one shot cover both Part A and Part B?** Yes. Part A, the five employability skills units, is worth 10 theory marks and takes the first ten minutes. Part B, the AI units worth 40 theory marks, takes the rest. Statistical Data and Advance Python are included briefly, because they are assessed only in the practical.

**Which units carry the most marks in class 10 AI?** Advanced Concepts of Modeling in AI carries 11 of the 40 Part B theory marks and Evaluating Models carries 10, so those two are more than half. Natural Language Processing has 8, the AI project cycle and ethics unit 7, and Computer Vision 4. Part A adds 10 marks across five units.

**Are numericals asked in class 10 AI?** Yes. Expect accuracy, error, precision, recall and F1 score from a confusion matrix, the perceptron weighted sum, pixel and colour-value counts, and Bag of Words or TFIDF calculations. In the latest sample paper the perceptron appears only as an objective question.

**Is a one shot enough to score full marks in class 10 AI?** On its own, no. A one shot tells you what you remember; marks come from writing answers to the board word limits and solving numericals quickly. Use the one shot to find weak units, then revise those and write timed papers, which is how our batch uses it.

**When should I do AI revision in one day before the board exam?** Twice is best: once three to four weeks before the paper to find your weak units, and once the day before, as a calm read in the morning. In between, work through timed papers and the units you missed. Do not leave the first run to the final evening, when there is no time left to fix what it shows.

**Is a video one shot better than a text one?** A video is good for a first explanation. For revision, text is faster: you can read at your own speed, skip what you know, stop at a number and work it yourself. If you prefer a teacher, our live classes run the same path with a test after each part.

**Do your classes include a full revision before the AI board exam?** Yes. From January the Monday and Wednesday 9:00 PM IST batch revises the whole syllabus in rounds, with a checkpoint test every Wednesday and timed mock papers in between. It is covered by the monthly fee shown on this page, with no admission fee, and the first class is a free demo.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Mon and Wed 9 PM AI batch](/cbse-class-10-ai-classes-online), [CBSE AI classes in the Gulf and abroad](/cbse-class-10-ai-online-classes-gulf-and-abroad).

**Unit by unit:** [CBSE AI 417 syllabus explained](/cbse-class-10-ai-syllabus-explained), [Python for Class 10 AI](/python-for-cbse-class-10-ai), [Part A employability skills](/cbse-class-10-ai-employability-skills-part-a), [Unit 3: Evaluating Models](/cbse-class-10-ai-evaluating-models-questions), [Confusion matrix numericals](/confusion-matrix-class-10-ai-numericals), [Unit 2: Advanced modeling](/cbse-class-10-ai-advanced-modeling-questions), [Unit 6: Natural Language Processing](/cbse-class-10-ai-nlp-questions), [Bag of Words and TFIDF, worked](/bag-of-words-tfidf-class-10-ai), [Unit 5: Computer Vision](/cbse-class-10-ai-computer-vision-questions).

**Questions and practice:** [CBSE AI important questions](/cbse-class-10-ai-important-questions), [Sample paper and mock tests](/cbse-class-10-ai-sample-paper-and-mock-tests), [Class 10 AI MCQ, unit wise](/cbse-class-10-ai-mcq-questions), [Previous year papers, solved](/cbse-class-10-ai-previous-year-question-papers), [AI practical and project viva](/cbse-class-10-ai-viva-questions), [Case based questions](/cbse-class-10-ai-case-based-questions), [Employability skills MCQ](/employability-skills-class-10-mcq).

**Notes and revision:** [Class 10 AI notes, unit wise](/cbse-class-10-ai-notes), [30, 7 and 1 day revision plan](/cbse-class-10-ai-revision-plan), [Worksheets with answers](/cbse-class-10-ai-worksheets).

**Exam, marks and practicals:** [CBSE AI board exam preparation](/cbse-class-10-ai-board-exam-preparation), [AI project and practical file](/cbse-class-10-ai-project-and-practical-file), [Exam date 2027 and paper pattern](/cbse-class-10-ai-exam-date-and-paper-pattern).

---

*Canonical: https://learn.modernagecoders.com/cbse-class-10-ai-one-shot-revision*
