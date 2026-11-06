---
title: "Class 10 AI Viva Questions 2026-27 (417) with Answers"
description: "Class 10 AI viva questions for CBSE 417, 2026-27: 54 original practical viva and project viva questions, each with a two-sentence answer to say aloud."
canonical: https://learn.modernagecoders.com/cbse-class-10-ai-viva-questions
source: src/pages/cbse-class-10-ai-viva-questions.html
updated: 2026-11-06
---

> Class 10 AI viva questions in CBSE 417 come in two orals worth 5 marks each: the practical viva, on the programs in your practical file and the practical units (Statistical Data, Computer Vision, NLP and Advance Python), and the project viva, on the project you built for the Sustainable Development Goals. CBSE publishes no viva question list, so examiners ask about your own work: what a line of code does, why you chose that dataset, what your accuracy means. Modern Age Coders rehearses vivas live in a Monday and Wednesday 9:00 PM IST batch, or personalised one to one.

## How the viva voce in AI class 10 is marked

There are two vivas in CBSE 417 Part C, 5 marks each, and both are conducted in school before the theory paper. The questions below are ours: CBSE does not publish a viva question list, so examiners draw on your own file and project.

- Oral | Marks | What it is about | The question behind every question

- Practical viva | 5 | Programs in your practical file and the practical units: Statistical Data, Computer Vision, NLP and Advance Python | Do you understand the code you submitted?

- Project viva | 5 | Your project, field visit or portfolio linked to the Sustainable Development Goals | Did you make the decisions in this project?

### The two-sentence rule

Say the fact first, then one reason, example or number from your own work. "Recall is TP divided by TP plus FN. In my project it was 0.89, which matters because a missed case costs more than a false alarm." That is a complete viva answer.

### Four habits that earn the marks

- Point at your own work, not a textbook line.

- Use the unit words: token, pixel, recall.

- Stop when you are done. Short answers invite easy follow-ups.

How the file and the project are assembled across the year is covered on [the project and practical file page](/cbse-class-10-ai-project-and-practical-file). This page is only the oral.

## AI practical viva questions: Python, NumPy, Pandas and charts

Questions 1 to 16 come from Advance Python and Statistical Data, the two units that appear only in the practical. Expect the examiner to point at a program in your file and start here.

### Python, Jupyter and packages

- Why did you use Jupyter Notebook for your file?
Say this Jupyter runs code in small cells and shows the output right under each one. That made it easy to test one step at a time and keep the real output next to every program.

- What is a virtual environment?
Say this It is a separate space with its own Python packages for one project. If two projects need different versions of a library, they do not clash.

- What is a library, and which ones did you use?
Say this A library is ready-made code we import instead of writing everything ourselves. I used NumPy for arrays and statistics, Pandas for CSV files and Matplotlib for charts.

- What does import numpy as np do?
Say this It loads NumPy and gives it the short name np. After that I can write np.mean instead of numpy.mean every time.

- What is the difference between a list and a NumPy array?
Say this A list can mix types, while an array holds one type and supports maths on every element at once. So [1, 2] + [3, 4] joins two lists, but adding two arrays gives [4, 6].

- How did you add the elements of two lists in your file?
Say this I looped over the positions and added the items at the same index into a new list. The lists must be the same length, or the loop runs past the end of the shorter one.

- What is an error and what is an exception?
Say this A syntax error stops the program before it runs, like a missing bracket. An exception happens while it runs, like dividing by zero or opening a file that is not there.

- What is the use of input() and int() together?
Say this input() always returns text, even when the user types a number. int() converts that text to a whole number so I can do arithmetic with it.

### Statistics, CSV files and charts

- What is the difference between mean, median and mode?
Say this The mean is the average, the median is the middle value after sorting and the mode is the most frequent value. For 4, 1, 9, 6, NumPy gives a median of 5.0 because the two middle values are 4 and 6.

- Why did you not use np.mode?
Say this NumPy has no mode function, so that line would raise an error. I used the mode function from Python's statistics module instead.

- When is the median better than the mean?
Say this When the data has an extreme value, because one very large number pulls the mean but not the median. For example, one very high salary in a small group makes the average misleading.

- What is a CSV file?
Say this It is a plain text table where each row is a line and values are separated by commas. Pandas reads it into a DataFrame with read_csv.

- What does df.head() show, and how do you show ten rows?
Say this head() shows the first five rows by default. I passed 10 inside the brackets to show ten.

- What is the difference between info() and describe()?
Say this info() lists the columns, their data types and how many values are not missing. describe() gives numbers such as count, mean, minimum and maximum for the numeric columns.

- When would you use a scatter plot instead of a line chart?
Say this A scatter plot shows separate points, so it suits checking whether two quantities are related. A line chart joins points in order, so it suits something that changes over time.

- Why did you add labels and a title to your chart?
Say this Without them, the reader cannot tell what each axis measures. xlabel, ylabel and title make the chart readable on its own, which examiners look for.

## Oral questions for 417: images, Orange, NLP and model evaluation

Questions 17 to 32. Computer Vision and NLP are in the theory paper as well as the practical, so these orals reuse theory ideas, but in the form of "show me" and "why".

### Images and computer vision

- What is a pixel?
Say this A pixel is the smallest dot of an image, stored as numbers. In a grayscale image each pixel holds one value from 0 for black to 255 for white.

- Why are pixel values between 0 and 255?
Say this Each value is stored in one byte, which has 8 bits. Two to the power 8 is 256 possible values, numbered 0 to 255.

- What did the shape of your image tell you?
Say this It gives height, width and the number of colour channels, in that order. A colour image has three numbers in its shape and a grayscale image has only two.

- How many values does a 50 by 40 RGB image store?
Say this 50 times 40 times 3, which is 6,000 values. Each pixel stores a red, a green and a blue value.

- Why did the colours look wrong when you showed an OpenCV image with Matplotlib?
Say this OpenCV reads colour images in BGR order, while Matplotlib expects RGB. Converting with cvtColor fixes the red and blue swap.

- What is the difference between image classification and object detection?
Say this Classification gives one label to the whole image, like "cat". Detection finds each object and draws a box around it, so it can find three cats in one photo.

- How did Orange handle images in your practical?
Say this I loaded a folder of images with the Import Images widget and passed them to Image Embedding. Embedding turns each image into a list of numbers, so a model can learn from it.

- What is Orange, and why use it?
Say this Orange is a visual tool where you build a workflow by connecting widgets instead of typing code. It lets me focus on the data and the model, and see the result at each step.

### NLP and evaluating a model

- What is tokenisation?
Say this It splits text into smaller pieces called tokens, usually words and punctuation marks. It is the first step before a computer can count or compare words.

- Why do we remove stopwords?
Say this Words like "the" and "is" appear everywhere and add little meaning. Removing them leaves the words that tell documents apart.

- What does Bag of Words produce?
Say this It makes a vocabulary of unique words and counts how often each appears in each document. The result is a table of numbers, one row per document.

- Which Orange widgets did you use for text?
Say this Corpus to load the text, Preprocess Text to tokenise and clean it, then Bag of Words or Word Cloud. For opinions, the Sentiment Analysis widget gives each text a score showing how positive or negative it is.

- Why do we split data into training and testing sets?
Say this The model learns from the training data and is checked on test data it has never seen. Testing on training data would hide whether it only memorised the answers.

- A model got 40 true positives, 10 false positives, 5 false negatives and 45 true negatives. What is its accuracy?
Say this Correct predictions are 40 plus 45, which is 85 out of 100, so accuracy is 0.85. Precision would be 40 out of 50, which is 0.8.

- When is recall more important than precision?
Say this When missing a real case is costly, like a disease or a fire alarm. Recall tells us how many real cases the model caught.

- What does the Confusion Matrix widget in Orange show?
Say this It shows how many items of each actual class were predicted as each class. The diagonal holds the correct predictions and everything else is a mistake.

The metric numericals behind questions 29 to 31 are worked step by step on [confusion matrix numericals for Class 10 AI](/confusion-matrix-class-10-ai-numericals), and the exam-day tasks these orals sit beside are on [CBSE Class 10 AI practical exam questions](/cbse-class-10-ai-practical-exam-questions).

## Project viva questions for class 10 AI, stage by stage

Questions 33 to 54 follow the AI project cycle, then ethics. Answers mention a sample project, a model that sorts water samples as safe or unsafe for SDG 6; swap in your own project's details.

### Scoping, data and exploration

- What problem does your project solve?
Say this It predicts whether a water sample is safe to drink from simple measurements like pH and turbidity. Villages without a lab could check water faster.

- Which Sustainable Development Goal does it support, and how?
Say this SDG 6, clean water and sanitation. Safe drinking water is its first target, and my model helps flag unsafe samples early.

- Fill the 4Ws for your project.
Say this Who: families in areas without testing labs; What: they cannot tell if water is safe; Where: at home and at village wells. Why: early warnings prevent waterborne illness.

- What is your problem statement?
Say this Village families have a problem: they cannot tell whether their well water is safe when they draw it every day. An ideal solution would warn them quickly, so they can boil or avoid unsafe water.

- Where did your data come from?
Say this From an open water-quality dataset, and I wrote its source in my report. I checked that its columns matched the measurements I wanted to use.

- What are the features and the label in your data?
Say this The features are the measurements, like pH, hardness and turbidity. The label is the answer the model must learn: safe or unsafe.

- Was any data missing, and what did you do?
Say this Some rows had blank pH values. I removed those rows, and I noted how many, so the reader knows the data shrank.

- What did your exploration chart show?
Say this The distribution chart showed most unsafe samples had a pH outside the normal range. That told me pH would be a useful feature before I built any model.

- Is your data balanced?
Say this Not fully, there were more safe samples than unsafe ones. That is why I looked at recall for the unsafe class and not only at accuracy.

- Why did you not collect more data yourself?
Say this Testing water needs kits and time that I did not have for hundreds of samples. An open dataset gave me enough rows, and I would add local samples next.

- Rule-based or learning-based: which did you use?
Say this Learning-based, because the model found the pattern from labelled examples. A rule-based version would need me to write every threshold by hand.

### Modelling, evaluation and ethics

- Is your model supervised or unsupervised, and why?
Say this Supervised, because every sample in my data already had the label safe or unsafe. The model learnt from those answers.

- Is it classification or regression?
Say this Classification, because the output is a category, safe or unsafe. Predicting an exact pH value would have been regression.

- Which model did you use, and how did you choose it?
Say this I tried two classifiers in Orange's Test and Score and kept the one with the higher recall on unsafe water. I chose it on the metric that matched my goal, not on accuracy alone.

- What was your train and test split?
Say this I kept 80 percent of the rows for training and 20 percent for testing. The test rows were never shown to the model while it learnt.

- Your accuracy is 85 percent. Is that good enough?
Say this It is good for a first model, but 15 in 100 predictions are still wrong. For drinking water, I care most about the unsafe samples it misses, so I look at recall.

- What mistakes does your model make?
Say this It sometimes calls slightly cloudy but safe water unsafe, which is a false positive. That is the safer mistake, because a false negative could make someone ill.

- How would you improve your project?
Say this I would add samples from local wells and more unsafe examples. Then I would retrain and check whether recall improves.

- Could your model be biased?
Say this Yes, if most data came from one region, it may fail on water from somewhere else. Testing it on samples from other places would show that.

- Which ethical framework fits your project?
Say this A utility-based view fits, because the goal is the most benefit for the most families. I also respect autonomy, since the tool advises and the family still decides.

- Who is responsible if the model is wrong?
Say this The people who build and deploy it, which is why the report says it is an early warning, not a lab test. A real deployment would need checking by experts.

- What did you learn from this project?
Say this I learnt that choosing the right metric matters more than a high accuracy number. I also learnt that cleaning data took longer than building the model.

If you have not picked a project yet, fifteen goal-linked options with their AI domain are on [Class 10 AI project ideas](/cbse-class-10-ai-project-ideas), and the ethics vocabulary for questions 51 and 52 is revised on [project cycle and ethics](/cbse-class-10-ai-project-cycle-and-ethics).

## Viva voce AI class 10: the follow-up chains examiners use

Most viva marks are decided by the second or third question. Each chain starts from a common opener and shows where it usually goes. If you do not know, say so and reason aloud.

- Opening question | Likely follow-up | Then

- Run this program for me. | Change the input. What will it print now? | Which line would you change to print only the even values?

- What is the mean of this column? | Why is the median different? | Which would you report for house prices, and why?

- What is the shape of this image? | How many pixels is that? | What changes in the shape after grayscale conversion?

- What does your Word Cloud show? | Why are "the" and "and" missing? | What would happen without preprocessing?

- What is your accuracy? | Show me the confusion matrix. | Which error matters more for your goal?

- Which SDG does this serve? | Who exactly benefits? | What could go wrong if people trust it too much?

Slipped on a word? Correct yourself at once: "Sorry, I meant recall, not precision." Unsure what is being asked? Restate it: "Do you mean training or test accuracy?" Both moves show understanding.

## How our live batch rehearses both vivas

Reading answers silently does little for an oral, so the batch makes students say them aloud to a teacher who keeps asking.

### Explain it back, every week
Each Wednesday program ends with a two-minute oral on what each block does and what changes if one value changes.

### Project check-ins with questions
Once a month, each student presents one project stage and takes three questions. Weak answers become homework.

### A mock viva with a stranger
Before the school practical, an unfamiliar teacher runs both vivas on camera and names the answers to fix.

Students can ask for any viva answer to be reworked in doubt time. The rest of the year's plan sits on [CBSE Class 10 AI board exam preparation](/cbse-class-10-ai-board-exam-preparation), and the programs these questions point at are written out on [Python for CBSE Class 10 AI](/python-for-cbse-class-10-ai).

## The courses behind this page

- [CBSE AI for Class 9 to 12](/courses/cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843): The full 417 course, where every file program and project decision is explained aloud in class long before an examiner asks.
- [Python for Teens](/courses/python-complete-masterclass-teens): Lists, NumPy, Pandas and Matplotlib understood line by line, so "what does this line do" has a ready answer.
- [AI and ML for Teens](/courses/ai-ml-masterclass-teens): Supervised learning, train and test data and the metrics behind a project, taught to a depth that survives follow-up questions.

Families also look at [Visual Machine Learning with Orange for Teens](/courses/orange-data-mining-visual-machine-learning-course-for-teens), [Data Science for Teens](/courses/data-science-course-for-teens-python-data), [CBSE Class 10 Maths board exam prep](/courses/cbse-class-10-maths-board-exam-prep-course), [CBSE and ICSE Computer Science Class 11 and 12](/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course), [CBSE Informatics Practices Class 11 and 12](/courses/cbse-informatics-practices-ip-class-11-12-python-pandas-sql-complete-course), [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course), [Hackathon Prep for Teens](/courses/hackathon-prep-for-teens-coding-ai-build-innovate-win-course), [Git and GitHub for Teens](/courses/git-github-version-control-course-for-teens).

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

**What questions are asked in the class 10 AI viva?** Examiners ask about your own work. The practical viva covers your file programs and the practical units: lists, NumPy statistics, Pandas, Matplotlib, image shape, Orange widgets, tokenisation and evaluation. The project viva covers your problem, its SDG, your data, model, metrics and next steps.

**How many marks is the viva in CBSE Class 10 AI?** Ten marks in total across two orals in Part C of CBSE 417 for 2026-27: 5 marks for the viva on the practical work and 5 marks for the viva on the project. Part C carries 50 marks overall, with the practical file 15, the practical exam 15 and the project 10.

**Does CBSE give a list of viva questions for AI 417?** No. CBSE sets the marks for each viva in the curriculum but does not publish a question list or a fixed set of oral questions. Examiners ask about the student's own file and project, which is why rehearsing explanations of your own work matters more than memorising a list.

**How should I answer AI practical viva questions?** In two sentences: state the fact, then give a reason or an example from your own file. For instance, "head() shows the first five rows. I passed 10 to show ten rows of my CSV." Short, specific answers invite easier follow-ups and show the work is yours.

**What are common project viva questions for class 10 AI?** Why this problem, which SDG it supports, where the data came from, what the features and label are, whether the model is supervised, what the accuracy is, which error matters more, what the model gets wrong, whether it could be biased and how you would improve it.

**Is the AI viva in English or Hindi?** The curriculum does not fix a viva language, so the school and the examiner decide. Most students answer in the language they were taught in. Technical terms such as precision, token, pixel and confusion matrix are usually kept in English either way, so learn those words exactly as they appear in your file.

**What if I forget an answer in the viva?** Say you are not sure, then reason aloud from what you do know, for example from a program in your file. Examiners usually rephrase the question or give a hint. A calm, honest attempt earns more than silence, or a confident wrong answer that the very next question exposes.

**Are viva voce questions asked on Orange in class 10 AI?** Often, when the student used Orange in the practical work or the project. Expect to name widgets such as File, Data Table, Scatter Plot, Test and Score, Confusion Matrix, Import Images, Image Embedding, Corpus, Preprocess Text and Word Cloud, and to say what each step did to the data.

**When is the class 10 AI viva conducted?** The school conducts both orals as part of Part C, on dates it sets, before the theory board paper. Ask your school for the exact date, and finish your file and project well before it so you have time to practise speaking about them.

**Is viva practice included in your Class 10 AI classes?** Yes. Oral explanation is built into the ordinary teaching: a short oral after every Wednesday program, monthly project check-ins and a mock viva before the school practical. It is all covered by the monthly fee shown on this page, for the batch or one to one, with no admission fee and a free first class.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Mon and Wed 9 PM AI batch](/cbse-class-10-ai-classes-online), [CBSE AI classes in the Gulf and abroad](/cbse-class-10-ai-online-classes-gulf-and-abroad), [Live doubt classes](/cbse-class-10-ai-doubt-classes), [Class 10 AI tuition online](/cbse-class-10-ai-tuition), [Class 10 AI crash course](/cbse-class-10-ai-crash-course), [1-on-1 private AI tutor](/cbse-class-10-ai-private-tutor), [AI tuition in Delhi](/class-10-ai-tuition-delhi), [AI tuition in Gurgaon](/class-10-ai-tuition-gurgaon), [AI tuition in Noida](/class-10-ai-tuition-noida), [AI tuition in Bangalore](/class-10-ai-tuition-bangalore), [AI tuition in Pune](/class-10-ai-tuition-pune).

**Unit by unit:** [CBSE AI 417 syllabus explained](/cbse-class-10-ai-syllabus-explained), [Python for Class 10 AI](/python-for-cbse-class-10-ai), [Part A employability skills](/cbse-class-10-ai-employability-skills-part-a), [Unit 3: Evaluating Models](/cbse-class-10-ai-evaluating-models-questions), [Confusion matrix numericals](/confusion-matrix-class-10-ai-numericals), [Unit 2: Advanced modeling](/cbse-class-10-ai-advanced-modeling-questions), [Unit 6: Natural Language Processing](/cbse-class-10-ai-nlp-questions), [Bag of Words and TFIDF, worked](/bag-of-words-tfidf-class-10-ai), [Unit 5: Computer Vision](/cbse-class-10-ai-computer-vision-questions), [Orange Data Mining for Class 10 AI](/orange-data-mining-class-10-ai), [Unit 1: Project cycle and ethics](/cbse-class-10-ai-project-cycle-and-ethics).

**Questions and practice:** [CBSE AI important questions](/cbse-class-10-ai-important-questions), [Sample paper and mock tests](/cbse-class-10-ai-sample-paper-and-mock-tests), [Class 10 AI MCQ, unit wise](/cbse-class-10-ai-mcq-questions), [Previous year papers, solved](/cbse-class-10-ai-previous-year-question-papers), [Case based questions](/cbse-class-10-ai-case-based-questions), [Employability skills MCQ](/employability-skills-class-10-mcq), [Difference between questions](/cbse-class-10-ai-difference-between-questions), [Assertion and reason questions](/cbse-class-10-ai-assertion-reason-questions).

**Notes and revision:** [Class 10 AI notes, unit wise](/cbse-class-10-ai-notes), [Class 10 AI one shot revision](/cbse-class-10-ai-one-shot-revision), [30, 7 and 1 day revision plan](/cbse-class-10-ai-revision-plan), [Worksheets with answers](/cbse-class-10-ai-worksheets), [AI handbook exercise answers](/cbse-class-10-ai-textbook-solutions), [Best book for Class 10 AI](/best-book-for-cbse-class-10-ai), [Formula sheet](/cbse-class-10-ai-formula-sheet), [Class 10 AI notes in Hindi](/cbse-class-10-ai-notes-in-hindi).

**Exam, marks and practicals:** [CBSE AI board exam preparation](/cbse-class-10-ai-board-exam-preparation), [AI project and practical file](/cbse-class-10-ai-project-and-practical-file), [Exam date 2027 and paper pattern](/cbse-class-10-ai-exam-date-and-paper-pattern), [AI practical exam questions](/cbse-class-10-ai-practical-exam-questions), [Paper analysis and answer key](/cbse-class-10-ai-paper-analysis), [Marking scheme, explained](/cbse-class-10-ai-marking-scheme), [AI project ideas](/cbse-class-10-ai-project-ideas), [Passing marks](/cbse-class-10-ai-passing-marks), [The second board exam in May](/cbse-class-10-ai-second-board-exam).

**Choosing the subject:** [AI 417 or IT 402?](/ai-417-vs-it-402-class-10), [AI, IT or Computer Applications?](/ai-vs-computer-applications-class-10).

---

*Canonical: https://learn.modernagecoders.com/cbse-class-10-ai-viva-questions*
