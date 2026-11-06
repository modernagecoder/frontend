---
title: "Class 10 AI Tuition Bangalore: CBSE 417, Live Online"
description: "Class 10 AI tuition for Bangalore students on CBSE: live online 417 classes at 9:00 PM IST on Monday and Wednesday, practicals and viva included. Free demo."
canonical: https://learn.modernagecoders.com/class-10-ai-tuition-bangalore
source: src/pages/class-10-ai-tuition-bangalore.html
updated: 2026-11-06
---

> Class 10 AI tuition in Bangalore applies to students at CBSE schools, because Artificial Intelligence (417) is a CBSE skill subject; Karnataka state board and ICSE students sit different papers. Modern Age Coders teaches 417 live online, with no Bengaluru centre. The group class meets every Monday and Wednesday evening from 9:00 PM IST; a private one to one plan is the other option, booked to the family's week. Teaching spans Part A, the five theory units, and the school-run practical: Python and Orange tasks, the program file, the project and both vivas, with timed mocks. Karnataka's CBSE schools come under the board's Bengaluru regional office.

## Which board is your child on? AI 417 belongs to CBSE only

Subject 417 exists only for students at CBSE-affiliated schools. In a city where neighbours on the same road may be on four different boards, it is worth checking before booking any tuition.

- Your child's school | Class 10 exam | The computing subject | Where to look

- CBSE | CBSE Class 10 board exam | Artificial Intelligence (417) as the skill subject; some take Information Technology (402) or Computer Applications (165) instead | This page

- ICSE (CISCE) | ICSE Class 10 | Computer Applications, taught in Java with BlueJ | ICSE computer tuition in Bangalore

- Karnataka state board | SSLC | The state syllabus; no subject 417 | Not covered by this series

- IB or Cambridge | MYP or IGCSE | Their own computing courses | Not covered by this series

Two traps worth knowing. First, 417 cannot be taken together with Computer Applications (165), so a CBSE student has one or the
other. Second, some CBSE schools offer 402 rather than 417; a student on IT does not need this page. If you are still choosing
for Class 9, the comparison is on [AI 417 vs IT 402](/ai-417-vs-it-402-class-10).

## CBSE schools in Karnataka report to the Bengaluru regional office

CBSE's Bengaluru regional office, on Hesaraghatta Main Road in Chikkabanavara, covers Karnataka. That is how the board's own list of regional offices read when we looked it up on 6 November 2026. Tamil Nadu, Andhra Pradesh and Telangana schools are under Chennai, not Bengaluru.

### What the school does
Enrols each Class 10 candidate with CBSE under code 417, passes on the admit card, which names the exam centre, and runs the practical half itself. Families seldom need the regional office directly.

### What is national
The 2026-27 curriculum, the 50-mark theory paper and the 50 practical marks are the same for a student in Jayanagar as in Jaipur. So is the date sheet when CBSE publishes it; see [the exam date and paper pattern page](/cbse-class-10-ai-exam-date-and-paper-pattern).

### What we did not find
An official count of Bengaluru CBSE schools that offer 417. We would rather print nothing than a guess, so there is no figure here. The school timetable tells you whether your child takes AI.

## A worked Computer Vision question, from paper to program

Unit 5, Computer Vision, is worth 4 theory marks, but its ideas run straight into the practical, so a good class takes one question from the written answer to working code. This question is ours.

### Question

A traffic camera records frames of 1280 x 720 pixels in colour. (a) How many pixels does one frame have? (b) How many values are stored for one frame in RGB? (c) If each value uses 8 bits, what range can a pixel value take? (d) A pixel reads (200, 120, 40). What is its grayscale value by the averaging method?

### Written answer

- Pixels = width x height = 1280 x 720 = 921,600.

- RGB stores three values per pixel: 921,600 x 3 = 2,764,800.

- 8 bits give 28 = 256 levels, so values run from 0 to 255.

- (200 + 120 + 40) / 3 = 360 / 3 = 120.

A follow-up we set in class: a 640 x 360 thumbnail has 230,400 pixels and 691,200 RGB values, a quarter of the full frame because both sides are halved.

### Where students lose the marks

- Multiplying by 3 in part (a), which asks for pixels, not values.

- Writing the range as 1 to 256 instead of 0 to 255.

- Leaving out the working: a bare 120 shows no method.

### The same idea as a practical program: a tiny RGB image turned grayscale

```
import numpy as np

img = np.array([[[200, 120, 40], [10, 10, 10]],
                [[255, 255, 255], [90, 0, 30]]], dtype=np.uint8)
print("Shape:", img.shape)
print("Pixels:", img.shape[0] * img.shape[1])
gray = img.mean(axis=2).astype(np.uint8)
print("Grayscale:")
print(gray)
print("Shape after:", gray.shape)
```

```
Shape: (2, 2, 3)
Pixels: 4
Grayscale:
[[120  10]
 [255  40]]
Shape after: (2, 2)
```

More questions on pixels, convolution and CNNs are on [the Computer Vision questions page](/cbse-class-10-ai-computer-vision-questions).

## The 417 week for a Bengaluru student, around a 9 PM start

The class starts at 9:00 PM because by then the school day, the ride home and most activities are done. Each class has a little work before it and a little after, so the week adds up without taking over the evening.

- | Before class | In class, 9:00 PM | After class

- Monday | Read the textbook pages named last time, ten minutes | One theory topic taught, then objective, short and case questions answered and marked on screen | A worksheet on the same topic, marked in the next class

- Wednesday | Open Jupyter and run last week's program once | A file program or Orange workflow built, broken and fixed, then explained aloud; a project step | Write the program into the file with its output and two lines on what it does

- From January | Revise the unit named for the mock | Mock papers reviewed question by question | Rewrite every answer that lost marks

Doubts are taken when they arise, not saved for a separate session: a student unmutes or shares their screen and the class pauses
on it. Full papers come from [the sample paper and mock
test series](/cbse-class-10-ai-sample-paper-and-mock-tests).

## Python or Orange in the school practical: prepare for both

Your school sets the practical task, the date and the examiner, and the 417 curriculum leaves room for both code and no-code tools. So students prepare the same task both ways and arrive able to do whichever the school asks.

### The 50 practical marks, as the school awards them

- Practical file, 15: at least 15 programs, written and run during the year.

- Practical exam, 15: a task on the day, drawn from the practical units: Statistical Data, Computer Vision, NLP and Advance Python.

- Viva, 5: questions on the file and the practical units.

- Project, 10, and project viva, 5: one AI project taken through the project cycle and explained aloud.

### How each piece is prepared online

The file grows by one program most Wednesdays. The program above, for example, goes in with its output and a short explanation. Each image task is also done in Orange, so a student who meets a no-code task on the day has already built that workflow once.

In December there is a timed rehearsal on an unseen task, watched over a shared screen. Mock vivas follow, with the habit we drill hardest: answer, then give the reason. The question bank is on [the viva questions page](/cbse-class-10-ai-viva-questions), and the project stages on [the project ideas page](/cbse-class-10-ai-project-ideas).

## The courses behind this page

- [CBSE AI for Class 9 to 12](/courses/cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843): Five theory units and Part A on Mondays, the practical units, file and project on Wednesdays, and mock papers in the last weeks.
- [Python for Teens](/courses/python-complete-masterclass-teens): Arrays, images as numbers, text and charts in Jupyter: the programs behind the Computer Vision and statistics tasks in the practical.
- [AI and ML for Teens](/courses/ai-ml-masterclass-teens): For the student who enjoyed 417 and wants real models, datasets and projects once Class 10 is finished.

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

**Do you offer class 10 AI tuition in Bangalore?** Yes, as live online classes; there is no Modern Age Coders centre in Bengaluru. Students taking Artificial Intelligence (417) at a CBSE school log in to the twice-weekly group at 9:00 PM IST (Mondays and Wednesdays) or book private classes on days that suit them. Both the written paper and the lab half are taught.

**My child is on the Karnataka state board. Is AI 417 for them?** No. Subject 417 is a CBSE skill subject, so it is examined only for students at CBSE-affiliated schools. State board students write the SSLC, which has its own syllabus. This page and its classes are for CBSE students. If your child moves from a state board school to a CBSE school for Class 9, 417 becomes an option then.

**We are on ICSE. Is there a Java equivalent?** Yes. ICSE students take Computer Applications in Java with BlueJ, a different paper with its own internal assessment. We teach it in a separate small batch; see the ICSE computer tuition in Bangalore page linked on this page. It is a mini batch for families in India, with one to one as the other choice.

**How do I find a 417 tutor in Bangalore?** Check four things: the tutor teaches the 2026-27 unit names, knows that Statistical Data and Advance Python are tested only in the practical, uses Python and Orange, and prepares the file, project and viva. A free live class shows you those things better than a phone call.

**Which CBSE regional office covers Bengaluru schools?** The Bengaluru regional office, on Hesaraghatta Main Road in Chikkabanavara, covers Karnataka, according to the regional offices page on cbse.gov.in. Your school deals with it for registration and admit cards; families normally do not need to. Schools in Tamil Nadu, Andhra Pradesh and Telangana are under Chennai instead.

**Are AI classes for Bengaluru CBSE students only theory?** No. Half of the 100 marks are practical, awarded by the school for the program file, a task on lab day, the project and two oral rounds. Wednesday classes teach Python and Orange for those tasks, build the file and project, and rehearse the viva.

**Is 9 PM too late for a Class 10 student?** For many it is the first hour without school, travel or activities. If it is too late for your child, one to one can be set earlier in the evening or on a weekend, and moved when the school calendar changes.

**Can my child take both AI 417 and Computer Applications 165?** No. CBSE does not allow 417 to be taken with Computer Applications (165), so a student has one or the other. If your child is on 165, these classes are not the right match. Check the subject list on the school timetable or the registration slip if you are unsure which code your child has.

**How are fees paid?** Month by month. The fees panel on this page shows the group batch and the one to one plan as monthly amounts; there is no admission charge and no term lock-in, so you can stop after any month. The trial class costs nothing.

**How do we begin?** Send your number through the form, or message on WhatsApp. We ring back, fix a time, and your child sits a full live 417 class for free. You choose between the batch and one to one only after that, with the mentor's honest view of which suits.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Mon and Wed 9 PM AI batch](/cbse-class-10-ai-classes-online), [CBSE AI classes in the Gulf and abroad](/cbse-class-10-ai-online-classes-gulf-and-abroad), [Live doubt classes](/cbse-class-10-ai-doubt-classes), [Class 10 AI tuition online](/cbse-class-10-ai-tuition), [Class 10 AI crash course](/cbse-class-10-ai-crash-course), [1-on-1 private AI tutor](/cbse-class-10-ai-private-tutor), [AI tuition in Delhi](/class-10-ai-tuition-delhi), [AI tuition in Gurgaon](/class-10-ai-tuition-gurgaon), [AI tuition in Noida](/class-10-ai-tuition-noida), [AI tuition in Pune](/class-10-ai-tuition-pune).

**Unit by unit:** [CBSE AI 417 syllabus explained](/cbse-class-10-ai-syllabus-explained), [Python for Class 10 AI](/python-for-cbse-class-10-ai), [Part A employability skills](/cbse-class-10-ai-employability-skills-part-a), [Unit 3: Evaluating Models](/cbse-class-10-ai-evaluating-models-questions), [Confusion matrix numericals](/confusion-matrix-class-10-ai-numericals), [Unit 2: Advanced modeling](/cbse-class-10-ai-advanced-modeling-questions), [Unit 6: Natural Language Processing](/cbse-class-10-ai-nlp-questions), [Bag of Words and TFIDF, worked](/bag-of-words-tfidf-class-10-ai), [Unit 5: Computer Vision](/cbse-class-10-ai-computer-vision-questions), [Orange Data Mining for Class 10 AI](/orange-data-mining-class-10-ai), [Unit 1: Project cycle and ethics](/cbse-class-10-ai-project-cycle-and-ethics).

**Questions and practice:** [CBSE AI important questions](/cbse-class-10-ai-important-questions), [Sample paper and mock tests](/cbse-class-10-ai-sample-paper-and-mock-tests), [Class 10 AI MCQ, unit wise](/cbse-class-10-ai-mcq-questions), [Previous year papers, solved](/cbse-class-10-ai-previous-year-question-papers), [AI practical and project viva](/cbse-class-10-ai-viva-questions), [Case based questions](/cbse-class-10-ai-case-based-questions), [Employability skills MCQ](/employability-skills-class-10-mcq), [Difference between questions](/cbse-class-10-ai-difference-between-questions), [Assertion and reason questions](/cbse-class-10-ai-assertion-reason-questions).

**Notes and revision:** [Class 10 AI notes, unit wise](/cbse-class-10-ai-notes), [Class 10 AI one shot revision](/cbse-class-10-ai-one-shot-revision), [30, 7 and 1 day revision plan](/cbse-class-10-ai-revision-plan), [Worksheets with answers](/cbse-class-10-ai-worksheets), [AI handbook exercise answers](/cbse-class-10-ai-textbook-solutions), [Best book for Class 10 AI](/best-book-for-cbse-class-10-ai), [Formula sheet](/cbse-class-10-ai-formula-sheet), [Class 10 AI notes in Hindi](/cbse-class-10-ai-notes-in-hindi).

**Exam, marks and practicals:** [CBSE AI board exam preparation](/cbse-class-10-ai-board-exam-preparation), [AI project and practical file](/cbse-class-10-ai-project-and-practical-file), [Exam date 2027 and paper pattern](/cbse-class-10-ai-exam-date-and-paper-pattern), [AI practical exam questions](/cbse-class-10-ai-practical-exam-questions), [Paper analysis and answer key](/cbse-class-10-ai-paper-analysis), [Marking scheme, explained](/cbse-class-10-ai-marking-scheme), [AI project ideas](/cbse-class-10-ai-project-ideas), [Passing marks](/cbse-class-10-ai-passing-marks), [The second board exam in May](/cbse-class-10-ai-second-board-exam).

**Choosing the subject:** [AI 417 or IT 402?](/ai-417-vs-it-402-class-10), [AI, IT or Computer Applications?](/ai-vs-computer-applications-class-10).

---

*Canonical: https://learn.modernagecoders.com/class-10-ai-tuition-bangalore*
