---
title: "AI Project Cycle Class 10 Questions, Ethics and Bioethics"
description: "AI project cycle class 10 questions for CBSE 417 Unit 1, 2026-27: the six stages, AI domains, ethical frameworks and the bioethics case worked for 4 marks."
canonical: https://learn.modernagecoders.com/cbse-class-10-ai-project-cycle-and-ethics
source: src/pages/cbse-class-10-ai-project-cycle-and-ethics.html
updated: 2026-11-06
---

> AI project cycle class 10 questions come from Unit 1 of CBSE 417, Revisiting AI Project Cycle and Ethical Frameworks for AI, worth 7 theory marks in 2026-27. Learn the six stages in order (problem scoping, data acquisition, data exploration, modelling, evaluation, deployment), the three AI domains (Statistical Data, Computer Vision, NLP), the two types of ethical framework (sector-based such as bioethics, value-based such as rights, utility and virtue) and the four bioethics principles applied to a case. Modern Age Coders teaches and marks these answers live in a Monday and Wednesday 9:00 PM IST batch, or one to one.

## Revisiting AI project cycle and ethical frameworks: the unit in one table

Unit 1 carries 7 of the 50 theory marks in the 2026-27 CBSE 417 curriculum. It has three sub-units, and the board has drawn questions from all three.

- Sub-unit (2026-27 curriculum) | What you must be able to do | How it has been asked

- AI Project Cycle | Name the six stages in order and say what happens in each | One-mark stage spotting; two-mark explanations of two stages

- Introduction to AI Domains | Place an application in Statistical Data, Computer Vision or NLP, with a reason | One-mark identification; a four-mark item with two scenarios in the 2026 paper

- Ethical Frameworks for AI | Define a framework and an ethical framework, give the types, apply the four bioethics principles to a case | A two-mark sector versus value answer and an assertion-reason item on bioethics in 2026; a four-mark biased-selection case in the 2025-26 sample paper

### Why "revisiting"?

The cycle was taught in Class 9. In Class 10 it is the spine of the course: Unit 2 is modelling, Unit 3 is evaluation in depth, and the no-code walkthroughs in Units 4, 5 and 6 each run the full cycle.

### Where Unit 1 marks leak

- Stage names drift. "Data collection" for data acquisition costs nothing; "testing" for evaluation sometimes does.

- Principles go unnamed. A case answer that describes fairness but never writes "justice" misses a value point.

- Examples are missing. Two-mark framework answers split marks between the difference and the examples.

How those papers looked as a whole is on [CBSE Class 10 AI previous year question papers](/cbse-class-10-ai-previous-year-question-papers).

## The six stages of the AI project cycle, on one worked example

The AI project cycle has six stages: problem scoping, data acquisition, data exploration, modelling, evaluation and deployment. It is called a cycle because what you learn at evaluation and after deployment sends you back to improve earlier stages.

One example makes the stages stick better than six definitions. Suppose a school canteen throws away trays of unsold lunch every week and wants an AI that predicts tomorrow's number of meals.

- Stage | The question it answers | In the canteen project

- 1. Problem scoping | What exactly are we solving, for whom, and why? | Cooks over-prepare; the goal is to predict meals needed per day so less food is wasted

- 2. Data acquisition | What data do we need, and from which reliable source? | Two terms of daily meal counts, the day of the week, exam days, holidays, weather

- 3. Data exploration | What patterns does the data show once we visualise it? | A bar chart shows Fridays and rainy days sell fewer meals; two days have impossible counts and are fixed

- 4. Modelling | Which model suits the problem, and which performs best? | The output is a number, so a regression model; two are tried

- 5. Evaluation | How well does the model do on data it has never seen? | Tested on the last three weeks, held back from training; the better model is kept

- 6. Deployment | How is it put to real use, and kept useful? | The cook sees each morning's prediction on a phone; counts keep flowing back so the model is retrained

### The 4Ws canvas and problem statement template

Problem scoping is done with the 4Ws: Who has the problem (the stakeholders), What the problem is, Where or when it arises (the context), and Why solving it matters (the benefit). The problem statement template then puts all four into one sentence you can return to later.

```
Our   canteen cooks and the school    (Who)
have  a problem of cooking more
      lunches than are sold           (What)
when  numbers change with the day,
      weather and exam timetable      (Where)
An ideal solution would predict each
      day's meals, cutting waste and
      cost                            (Why)
```

### AI project cycle class 10 questions with answers

- A team draws scatter plots of the collected data to look for trends before choosing a model. Name the stage. (1)
Answer Data exploration. Choosing the model comes next, in modelling.

- At which stage is the model tested on newly fetched data it was not trained on? (1)
Answer Evaluation. Students who write "modelling" have mixed up building with checking.

- In the 4Ws canvas, which block records the stakeholders? (1)
Answer Who. A two-statement item in an earlier board paper placed stakeholders under "When" to catch this.

- Explain the second and third stages of the AI project cycle. (2)
Answer Data acquisition [1]: collecting relevant data from reliable, authentic sources; it is the base the whole project rests on. Data exploration [1]: arranging the data into graphs, charts or tables so that patterns, trends and errors become visible and the right model can be chosen.

- Why is the AI project cycle drawn as a cycle and not a straight line? (2)
Answer Evaluation can show the model is not good enough, so the team returns to collect more data or try another model [1]. After deployment, new data and feedback keep arriving, so the model is improved and redeployed [1].

- What is deployment, and why does it matter? (2)
Answer Deployment is putting the evaluated model into real use, inside an app, a website or a device, where people rely on it [1]. Without it the project helps nobody, and only real use shows problems that testing missed [1].

The same six stages are what the project report and its viva are built on; how to write each one up is on [the project and practical file page](/cbse-class-10-ai-project-and-practical-file).

## The three AI domains: Statistical Data, Computer Vision and NLP

AI is grouped into domains by the type of data the model is fed. Numbers and tables mean Statistical Data, images and video mean Computer Vision, and spoken or written human language means Natural Language Processing.

- Domain | The input it works on | Clue words in a question | An example to quote

- Statistical Data | Records, numbers, tables | predict a price, sales figures, records, compare, forecast | Price comparison websites

- Computer Vision | Photos, video, camera feeds, scans | camera, image, scan, detect, recognise faces, count vehicles | Crop monitoring from drone images

- Natural Language Processing | Spoken or written words | reviews, essays, translate, voice command, chat, captions | Spam filters, machine translation

Note the curriculum's name: the 2026-27 handbook calls the first domain Statistical Data. Older books say Data Science, and the 2026 board paper used Statistical Data as the answer to a price-comparison item.

### Six scenarios: name the domain

- A railway app answers "When does the next train to Pune leave?" typed in Marathi.
Answer NLP: the input is written human language.

- A dairy forecasts next month's milk demand from three years of daily sales.
Answer Statistical Data: past numbers predict a future number.

- A toll gate reads number plates from its camera.
Answer Computer Vision: the input is an image of the plate.

- An app writes subtitles for a lecture video as the teacher speaks.
Answer NLP: it converts speech to text. The word "video" is the trap; the AI works on the audio.

- A tablet app checks a child's handwritten digits on a worksheet photo.
Answer Computer Vision: it reads shapes from an image.

### A four-mark domain answer, marked

Q. Identify the AI domain for each, with a justification. (a) A hospital app reads patients' typed symptoms and suggests which department to visit. (b) A dam's cameras watch the spillway and raise an alarm when debris blocks it. (2 + 2)

(a) Natural Language Processing [1]. The app must understand sentences that patients type in their own words, which is the core of NLP [1].

(b) Computer Vision [1]. The system interprets images from cameras to spot debris, so it processes visual data [1].

The 2026 marking scheme split its two-scenario item the same way: one mark for the domain, one for a relevant justification. A bare domain name earns half the question.

## Ethical frameworks for AI, class 10: meaning, need and types

An ethical framework is a step-by-step guide that helps us make sure the choices we make, and the choices our AI makes, do not cause unintended harm. A framework on its own is any structured set of steps for solving a problem; adding ethics points those steps at right and wrong.

### Why AI needs one
AI now decides or influences who gets a loan, a job interview or a hospital bed. If it learns from biased data, it repeats that bias at scale. A framework applied while building the system catches the harm before it happens, not after.

### What sways our choices
The curriculum's "My Goodness" activity asks students to donate to charity and then shows what swayed them: who the recipient was, where they lived, a pull towards relatives, whether hidden details were revealed. Culture, religion, intuition and values shape decisions without our noticing.

### The two types
Sector-based frameworks are written for one field, such as bioethics for healthcare, or finance, education and transport. Value-based frameworks rest on moral principles that apply anywhere: rights-based, utility-based and virtue-based.

### The one-question test for any framework

Ask: is it written for a particular industry? If yes, it is sector-based. If it is a moral principle you could carry into any field, it is value-based, and then ask which value leads:

- Protect each person's rights and dignity first: rights-based.

- Do the most good for the most people: utility-based.

- Act as an honest, caring person would: virtue-based.

Side-by-side difference tables for these, with the two-mark answer, are on [CBSE Class 10 AI difference between questions](/cbse-class-10-ai-difference-between-questions).

### Sort these, then check

- A banking regulator's code for fair AI credit scoring.
Answer Sector-based: written for finance only.

- A city refuses a face-recognition rollout because no citizen consented, though it would cut crime.
Answer Rights-based: consent and privacy come before the overall gain.

- A flood app sends rescue boats where the most people can be reached first.
Answer Utility-based: the greatest benefit for the greatest number.

- A developer reports a flaw in her own team's model though nobody asked her to.
Answer Virtue-based: honesty and integrity of the person acting.

- Assertion: Bioethics is a value-based framework. Reason: Bioethics deals with ethical issues in health, medicine and the life sciences.
Answer Assertion false, reason true. Because it belongs to one field, bioethics is sector-based. The 2026 board paper set this same trap.

- Assertion: Ethical frameworks help an AI avoid unintended outcomes. Reason: They are applied while the solution is being built.
Answer Both true, and the reason explains the assertion: harm is caught before deployment.

More items in this two-statement shape are on [CBSE Class 10 AI assertion reason questions](/cbse-class-10-ai-assertion-reason-questions).

## Bioethics class 10 AI: the four principles and the case study, in exam format

Bioethics is the sector-based framework used in healthcare and the life sciences. Its four principles are respect for autonomy, do not harm, ensure maximum benefit for all, and give justice. A case answer names a principle, then shows how it applies to the story.

- Principle | Formal name | In plain words | What it asks of an AI system

- Respect for autonomy | Autonomy | People decide for themselves, knowing the facts | Tell users how it works; make its data and decisions open to checking

- Do not harm | Non-maleficence | Avoid harm to anyone, human or not; if every path harms, take the least harmful | Train on data that spreads risk fairly, not only for some groups

- Ensure maximum benefit | Beneficence | Go beyond avoiding harm and actively do good | Meet clinical standards, and help every group of patients

- Give justice | Justice | Share benefits and burdens fairly, whatever a person's background | Understand the social causes of bias and work against them

### The handbook case, in brief

The CBSE handbook's case is a hospital tool built to flag high-risk patients so that extra care went to those who needed it most. It learned from past healthcare spending, treating money spent on a patient as a stand-in for how ill they were. In the place it was built, less had historically been spent on patients from one group, which the handbook calls the western region. So two patients with the same risk score were not equally ill: the patient from that region was usually sicker, and the tool would have sent care away from them.

The lesson: the data looked neutral, but the measure it used carried an old inequality into the model.

### Exam question on this case (4 marks)

(a) Give two reasons the algorithm's risk scores were unfair. (2)(b) Name two bioethics principles the designers should have applied, and explain how each would change the system. (2)

(a) It measured illness through money spent, not through the patient's actual health [1]. Less money had been spent on patients from one region, so the model learned to under-rate their needs even when they were sicker [1].

(b) Do not harm [&frac12;]: the tool would have denied care to the sickest group, so it must be trained on data such as diagnoses and test results that reflect real illness for everyone [&frac12;]. Justice [&frac12;]: care must be shared fairly whatever a patient's background, so designers should check scores group by group before use [&frac12;].

This split, one mark per reason and half a mark each for the principle and its explanation, follows the scheme for the four-mark biased-selection case in the 2025-26 sample paper.

### Practise on a fresh case

A state health mission screens diabetic patients' eyes with an AI that reads photographs of the retina. It was trained only on sharp images from an expensive camera used in city hospitals. In village camps, cheaper cameras produce softer images and the AI misses far more early disease. Patients are not told an AI made the call.

- Which stage of the AI project cycle should have caught the problem before rollout? (1)
Answer Evaluation: testing on images from the village cameras would have shown the drop. Data acquisition is also a fair answer if explained, since the training data left those cameras out.

- Name the bioethics principle broken by not telling patients, and give a fix. (2)
Answer Respect for autonomy [1]. Tell each patient that an AI screened the photo, what it can miss, and how to ask for a doctor's reading [1].

- Explain two more principles the screening breaks and how to repair the system. (4)
Answer Do not harm [&frac12;]: missed disease can lead to lost sight [&frac12;]; retrain with images from the cheaper cameras and send unclear images to a doctor [1]. Justice [&frac12;]: village patients get a worse service than city patients for the same disease [&frac12;]; report accuracy separately for camp and hospital images and deploy only when both meet the same standard [1].

Two more ethics cases with model answers, in the other case shapes the paper uses, are on [CBSE Class 10 AI case based questions](/cbse-class-10-ai-case-based-questions). How examiners award these value points across the whole paper is on [the class 10 AI marking scheme, explained](/cbse-class-10-ai-marking-scheme).

## How the live batch teaches the project cycle and ethics

Unit 1 looks easy because it has no formulas. The marks go to students who can apply each term to a story they have not seen, in the words the scheme looks for, and that takes practice with feedback.

### A new problem every week
Each Monday the class takes a fresh problem, a bus route, a school library, a local clinic, and scopes it with the 4Ws, then walks it through all six stages aloud. By December the stages come in order without effort.

### Case answers marked on screen
On Wednesdays students write a four-mark ethics answer in ten minutes. The teacher marks one on the shared screen against the value points: is the principle named, is the explanation tied to the story, is the fix specific.

### Revisited with every unit
When the class reaches evaluating models or NLP, the teacher asks which stage of the cycle it belongs to and what could go wrong ethically. Unit 1 becomes the frame for the rest of the course, not a chapter left behind.

Students can stop the class at any point to ask why an answer lost its half mark. The one-sheet summary of this unit is on [CBSE Class 10 AI notes](/cbse-class-10-ai-notes), and the no-code walkthroughs that run the whole cycle on real data are on [Orange Data Mining for Class 10 AI](/orange-data-mining-class-10-ai).

## The courses behind this page

- [CBSE AI for Class 9 to 12](/courses/cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843): Unit 1 taught in the opening weeks, then revisited with every later unit, since each one is a stage of the same cycle.
- [Visual ML with Orange](/courses/orange-data-mining-visual-machine-learning-course-for-teens): Problem scoping to evaluation done on a real dataset in a no-code tool, so the stages stop being a list to memorise.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens): Where biased data comes from and how models are checked for it, the idea underneath every bioethics case answer.

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

**What are the 6 stages of the AI project cycle in class 10?** Problem scoping, data acquisition, data exploration, modelling, evaluation and deployment. Problem scoping sets the goal with the 4Ws, acquisition collects reliable data, exploration visualises it to find patterns, modelling chooses and trains a model, evaluation tests it on unseen data, and deployment puts it into real use. Learn them in this order; one-mark items often describe a stage and ask for its name.

**How many marks is Unit 1 in CBSE Class 10 AI?** Unit 1, Revisiting AI Project Cycle and Ethical Frameworks for AI, carries 7 of the 50 theory marks in the 2026-27 CBSE 417 curriculum. Expect a mix of one-mark objective items, two-mark short answers such as sector-based versus value-based frameworks, and sometimes a four-mark case or scenario answer.

**What is an ethical framework in AI class 10?** An ethical framework is a step-by-step guide that helps make sure the choices we make, including those built into an AI system, do not cause unintended harm. AI needs one because it is used to make or influence decisions, and a model trained on biased data can repeat that bias for thousands of people.

**What is the difference between sector based and value based frameworks?** A sector-based framework is written for the ethical problems of one industry, for example bioethics for healthcare. A value-based framework rests on general moral principles that apply in any field: rights-based, utility-based or virtue-based. In the 2026 marking scheme, this two-mark answer earned one mark for a correct difference and half a mark for each example.

**What are the four principles of bioethics in class 10 AI?** Respect for autonomy (people decide with full knowledge), do not harm or non-maleficence, ensure maximum benefit or beneficence, and give justice (benefits and burdens shared fairly). In a case answer, name the principle and then explain how it applies to the story; the name and the explanation usually carry half a mark each.

**Is bioethics a value based or sector based framework?** Sector-based. Bioethics is written for one field, healthcare and the life sciences. The 2026 CBSE Class 10 AI paper tested this with an assertion that called bioethics value-based: the assertion was false and the reason, that bioethics deals with health and medicine, was true.

**What is the bioethics case study in class 10 AI?** The CBSE handbook describes a hospital tool that flagged high-risk patients using past healthcare spending as a stand-in for illness. Because less had been spent on one group of patients, the tool rated them as less at risk even when they were sicker. Applying the bioethics principles, especially do not harm and justice, would have caught this before use.

**What are the three domains of AI in class 10?** Statistical Data (numbers and records, such as price comparison websites), Computer Vision (images and video, such as crop monitoring from drones) and Natural Language Processing (spoken and written language, such as spam filters and translation). The 2026-27 handbook uses the name Statistical Data where older books said Data Science.

**Are your Unit 1 classes part of the regular course?** Yes. Unit 1 is taught at the start of the 417 course and revisited with every later unit, with case answers written and marked in class. It is all covered by the monthly fee shown on this page, in your own currency, for the batch or one to one. There is no admission fee and the first class is a free demo.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Mon and Wed 9 PM AI batch](/cbse-class-10-ai-classes-online), [CBSE AI classes in the Gulf and abroad](/cbse-class-10-ai-online-classes-gulf-and-abroad), [Live doubt classes](/cbse-class-10-ai-doubt-classes), [Class 10 AI tuition online](/cbse-class-10-ai-tuition), [Class 10 AI crash course](/cbse-class-10-ai-crash-course), [1-on-1 private AI tutor](/cbse-class-10-ai-private-tutor), [AI tuition in Delhi](/class-10-ai-tuition-delhi), [AI tuition in Gurgaon](/class-10-ai-tuition-gurgaon), [AI tuition in Noida](/class-10-ai-tuition-noida), [AI tuition in Bangalore](/class-10-ai-tuition-bangalore), [AI tuition in Pune](/class-10-ai-tuition-pune).

**Unit by unit:** [CBSE AI 417 syllabus explained](/cbse-class-10-ai-syllabus-explained), [Python for Class 10 AI](/python-for-cbse-class-10-ai), [Part A employability skills](/cbse-class-10-ai-employability-skills-part-a), [Unit 3: Evaluating Models](/cbse-class-10-ai-evaluating-models-questions), [Confusion matrix numericals](/confusion-matrix-class-10-ai-numericals), [Unit 2: Advanced modeling](/cbse-class-10-ai-advanced-modeling-questions), [Unit 6: Natural Language Processing](/cbse-class-10-ai-nlp-questions), [Bag of Words and TFIDF, worked](/bag-of-words-tfidf-class-10-ai), [Unit 5: Computer Vision](/cbse-class-10-ai-computer-vision-questions), [Orange Data Mining for Class 10 AI](/orange-data-mining-class-10-ai).

**Questions and practice:** [CBSE AI important questions](/cbse-class-10-ai-important-questions), [Sample paper and mock tests](/cbse-class-10-ai-sample-paper-and-mock-tests), [Class 10 AI MCQ, unit wise](/cbse-class-10-ai-mcq-questions), [Previous year papers, solved](/cbse-class-10-ai-previous-year-question-papers), [AI practical and project viva](/cbse-class-10-ai-viva-questions), [Case based questions](/cbse-class-10-ai-case-based-questions), [Employability skills MCQ](/employability-skills-class-10-mcq), [Difference between questions](/cbse-class-10-ai-difference-between-questions), [Assertion and reason questions](/cbse-class-10-ai-assertion-reason-questions).

**Notes and revision:** [Class 10 AI notes, unit wise](/cbse-class-10-ai-notes), [Class 10 AI one shot revision](/cbse-class-10-ai-one-shot-revision), [30, 7 and 1 day revision plan](/cbse-class-10-ai-revision-plan), [Worksheets with answers](/cbse-class-10-ai-worksheets), [AI handbook exercise answers](/cbse-class-10-ai-textbook-solutions), [Best book for Class 10 AI](/best-book-for-cbse-class-10-ai), [Formula sheet](/cbse-class-10-ai-formula-sheet), [Class 10 AI notes in Hindi](/cbse-class-10-ai-notes-in-hindi).

**Exam, marks and practicals:** [CBSE AI board exam preparation](/cbse-class-10-ai-board-exam-preparation), [AI project and practical file](/cbse-class-10-ai-project-and-practical-file), [Exam date 2027 and paper pattern](/cbse-class-10-ai-exam-date-and-paper-pattern), [AI practical exam questions](/cbse-class-10-ai-practical-exam-questions), [Paper analysis and answer key](/cbse-class-10-ai-paper-analysis), [Marking scheme, explained](/cbse-class-10-ai-marking-scheme), [AI project ideas](/cbse-class-10-ai-project-ideas), [Passing marks](/cbse-class-10-ai-passing-marks), [The second board exam in May](/cbse-class-10-ai-second-board-exam).

**Choosing the subject:** [AI 417 or IT 402?](/ai-417-vs-it-402-class-10), [AI, IT or Computer Applications?](/ai-vs-computer-applications-class-10).

---

*Canonical: https://learn.modernagecoders.com/cbse-class-10-ai-project-cycle-and-ethics*
