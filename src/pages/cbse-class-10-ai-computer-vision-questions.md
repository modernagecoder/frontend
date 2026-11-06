---
title: "Computer Vision Class 10 Questions and Answers, AI 417"
description: "Computer vision class 10 questions and answers for CBSE AI 417, 2026-27: 4 theory marks, a big practical share, pixel, RGB and kernel sums worked."
canonical: https://learn.modernagecoders.com/cbse-class-10-ai-computer-vision-questions
source: src/pages/cbse-class-10-ai-computer-vision-questions.html
updated: 2026-11-06
---

> Computer vision class 10 questions and answers for CBSE 417 come from Unit 5, which carries 4 of the 50 theory marks in 2026-27, the smallest theory unit, but 20 practical hours against 10 of theory. The theory paper asks about CV applications, CV tasks (classification, localisation, object detection, segmentation) and image basics: pixels, resolution, pixel values from 0 to 255, grayscale and RGB. Convolution, kernels, CNN layers and no-code image tools sit in the practical half, along with two image programs for the file. Modern Age Coders teaches both halves live, Monday and Wednesday at 9:00 PM IST, or personalised one to one.

## How many marks is computer vision in Class 10 AI for 2026-27?

Computer Vision carries 4 theory marks out of 50, the smallest share of any unit examined in the written paper. But the 2026-27 curriculum gives it 10 theory hours and 20 practical hours: no other theory unit has more practical time than theory time.

- Part of Unit 5 | Topics in the 2026-27 curriculum | Where it is assessed

- Introduction and applications | What CV is, where it is used | Theory paper

- CV concepts and tasks | Classification, classification with localisation, object detection, segmentation | Theory paper

- Basics of images | Pixel, resolution, pixel value, grayscale and RGB images | Theory paper

- No-code AI tools | Lobe, Teachable Machine, Orange; the coral bleaching walkthrough | Practical

- Image features and the convolution operator | Features such as edges and corners; applying a kernel | Practical

- Convolutional Neural Network | The kernel and the layers of a CNN | Practical

### What that means in the written paper

- Four one-mark objective items and one two-mark question in the 2025-26 sample paper, with no four-mark question from this unit.

- Short answers win. A definition, a count of pixels or values, or naming the right CV task.

- The 2026-27 sample paper for 417 is not out yet, so read these counts as last year's pattern.

### What it means in the practical

The practical exam covers Units 4 to 7, so CV is part of it. Two of CBSE's eight suggested programs are image programs: read an image and display it, and read an image and identify its shape. Early detection of coral bleaching is one of CBSE's sample projects. Expect the viva to ask what a kernel does or why pooling is used, even though those topics are not in the theory list.

The program list and file format are on [the 417 project and practical file page](/cbse-class-10-ai-project-and-practical-file).

## Pixel and resolution class 10: definitions and the sums

A pixel, short for picture element, is the smallest unit of a digital image. Resolution is the number of pixels in an image, written as width x height, so a 1920 x 1080 image has 1920 pixels across and 1080 down.

- Image | Pixels (width x height) | Values stored, grayscale | Values stored, RGB

- 800 x 600 | 480,000 | 480,000 | 1,440,000

- 1920 x 1080 (full HD) | 2,073,600 | 2,073,600 | 6,220,800

- 4000 x 3000 (a 12 megapixel photo) | 12,000,000 | 12,000,000 | 36,000,000

### Grayscale and RGB

Grayscale: each pixel holds one number for brightness. In a byte image that number runs from 0 (black) to 255 (white), because one byte has 8 bits and 2 to the power 8 is 256 possible values.

RGB: each pixel holds three numbers, one each for red, green and blue, each from 0 to 255. Mixing them gives the colour. That is why an RGB image stores three times as many values as a grayscale image of the same size.

One simple way to turn a colour pixel grey is to average its three values: (90, 180, 30) becomes 100. Image libraries such as OpenCV weight green most, which gives 136 for the same pixel, so say which method you used.

### Colours to know by their numbers

- (R, G, B) | Colour

- (0, 0, 0) | Black

- (255, 255, 255) | White

- (255, 0, 0) | Red

- (0, 255, 0) | Green

- (255, 255, 0) | Yellow (red plus green light)

- (128, 128, 128) | Mid grey: equal values give a shade of grey

## Computer vision tasks and applications, with the one-mark distinctions

Computer vision is the field of AI that lets a machine take in images or video and extract information from them to make a decision. Image processing, by contrast, only changes an image, such as brightening or resizing it; it is a subset of computer vision.

- Task | What the output is | Example

- Classification | One label for the whole image | A leaf photo is labelled "healthy" or "diseased"

- Classification with localisation | One label plus a box around that one object | The app says "cat" and draws a box round the single cat

- Object detection | Boxes and labels for many objects in one image | A traffic camera boxes every car, bus and scooter

- Instance segmentation | The exact pixels of each separate object | Each person in a crowd photo is outlined separately

### Facial recognition
Phones unlock and schools mark attendance by matching a face to stored features.

### Face filters
The app finds the eyes, nose and mouth in each video frame and places the effect on them.

### Search by image
A photo of a plant or a shoe is used as the query instead of typed words.

### Retail
Cameras follow which shelves shoppers visit and spot empty racks for restocking.

### Self-driving cars
The car detects lanes, signs, vehicles and people around it, many times a second.

### Medical imaging
Scans and X-rays are checked for patterns a doctor then confirms.

The trap in task questions is one word: "every" or "all" objects means detection; "exact outline" or "pixels" means segmentation; a single object with a box is localisation. Pairs like these are collected on [Class 10 AI difference between questions](/cbse-class-10-ai-difference-between-questions).

## Convolution operator class 10 and the kernel, worked by hand, then CNN

Convolution is the operation of sliding a small matrix, the kernel, over an image, multiplying the overlapping values cell by cell and adding them up to give one output value per position. A kernel is that small matrix; its numbers decide the effect, such as blurring, sharpening or finding edges.

```
Image (a light stripe on a dark ground)
10  80  80  10  10
10  80  80  10  10
10  80  80  10  10
10  80  80  10  10
10  80  80  10  10

Kernel (vertical edge finder)
-1   0   1
-1   0   1
-1   0   1
```

### The first position, step by step

Place the kernel on the top-left 3 x 3 patch (columns 1 to 3). Each row gives -10 + 0 + 80 = 70, and three rows give 210.

Move one column right (columns 2 to 4). Each row now gives -80 + 0 + 10 = -70, so the sum is -210. One more step right gives -210 again.

A 5 x 5 image and a 3 x 3 kernel, with no padding, give a 3 x 3 output, because 5 - 3 + 1 = 3. Each output row is 210, -210, -210: a large positive value where dark turns light, a large negative one where light turns dark. That is an edge, found by arithmetic.

```
import numpy as np

img = np.array([[10, 80, 80, 10, 10]] * 5)
k = np.array([[-1, 0, 1]] * 3)
print(img.shape)

out = np.zeros((3, 3), dtype=int)
for i in range(3):
    for j in range(3):
        out[i, j] = (img[i:i+3, j:j+3] * k).sum()
print(out)
print(np.maximum(out, 0))
```

```
(5, 5)
[[ 210 -210 -210]
 [ 210 -210 -210]
 [ 210 -210 -210]]
[[210   0   0]
 [210   0   0]
 [210   0   0]]
```

### The four layers of a CNN class 10 students should name

- Layer | What it does | Worked numbers

- 1. Convolution layer | Applies kernels to pull out features such as edges, giving a feature map | The 3 x 3 map above

- 2. ReLU (Rectified Linear Unit) | Replaces every negative value with 0 and keeps positives as they are | -210 becomes 0; 210 stays 210

- 3. Pooling layer | Shrinks the feature map while keeping the important values; max pooling keeps the largest in each block, average pooling the mean | [[3,1,0,2],[5,4,1,1],[0,2,6,8],[1,3,7,2]] with 2 x 2 blocks: max gives [[5,2],[3,8]], average gives [[3.25,1],[1.5,5.75]]

- 4. Fully connected layer | Takes the final features and decides the label | "healthy coral" or "bleached coral"

How a perceptron and neural networks work in general belongs to Unit 2; see [CBSE Class 10 AI advanced modeling questions](/cbse-class-10-ai-advanced-modeling-questions).

## Computer vision class 10 questions and answers to practise

The first set is the shape of the theory paper. The second is what an examiner may ask in the practical viva, where kernels and CNN layers come up.

### For the theory paper

- How many pixels does an 800 x 600 image have, and how many values does it store in RGB?
Answer 800 x 600 = 480,000 pixels; x 3 = 1,440,000 values.

- A grayscale pixel reads 255. What does it show?
Answer White, the brightest possible value. 0 would be black.

- Which colour is (255, 255, 0)?
Answer Yellow: full red and full green, no blue.

- A model outlines the exact shape of each of three dogs in a photo. Name the task.
Answer Instance segmentation. Boxes alone would be object detection.

- Is brightening a dark photo computer vision or image processing?
Answer Image processing: it changes the image but extracts no information.

- Differentiate between grayscale and RGB images. (2 marks)
Answer A grayscale image stores one value per pixel, from 0 for black to 255 for white, showing only brightness. An RGB image stores three values per pixel, for red, green and blue, each from 0 to 255, and mixes them to show colour, so it holds three times as much data.

### For the practical and viva

- A 6 x 6 image is convolved with a 3 x 3 kernel without padding. What size is the output?
Answer 4 x 4, since 6 - 3 + 1 = 4.

- Kernel [[0,1,0],[1,-4,1],[0,1,0]] is placed on the patch [[2,4,6],[1,3,5],[0,2,4]]. What is the result?
Answer 0. The four neighbours add to 4 + 1 + 5 + 2 = 12 and the centre gives 3 x -4 = -12. A smooth region gives no edge response.

- The same kernel on a patch of 1s with a 9 in the centre gives -32. What does ReLU turn it into?
Answer 0, because ReLU replaces every negative value with 0.

- Why is pooling used in a CNN?
Answer It makes the feature map smaller, so later layers have less to process, and it keeps the result steady when the object shifts slightly in the image.

- What is the first layer of a CNN, and what does it produce?
Answer The convolution layer. It produces feature maps that show where features such as edges occur.

More one-mark items on this unit sit beside the others on [Class 10 AI MCQ with answers](/cbse-class-10-ai-mcq-questions), and the full list of spoken questions is on [CBSE Class 10 AI viva questions](/cbse-class-10-ai-viva-questions).

## How the batch teaches a unit that is mostly practical

Because the written paper gives Computer Vision so few marks, the class keeps its theory tight and spends the rest of the unit where CV is really assessed: building, running and explaining.

### Theory in one tight block
Pixels, resolution, grayscale, RGB and the four tasks are taught on Monday with quick counting drills, then folded into the timed objective sets so those four marks stay safe.

### Kernels you can see
On Wednesday students apply kernels to small grids by hand, then to real photos in Python, and watch an edge appear. ReLU and pooling are done on numbers first, pictures second.

### Programs, project and viva
The two image programs go into the practical file with their output. The coral bleaching walkthrough is built in Orange, and every student rehearses explaining kernels and CNN layers aloud for the viva.

The hands-on tool has its own page, [Orange Data Mining for Class 10 AI](/orange-data-mining-class-10-ai). The next theory unit, worth twice as much, is answered on [NLP class 10 questions and answers](/cbse-class-10-ai-nlp-questions).

## The courses behind this page

- [CBSE AI for Class 9 to 12](/courses/cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843): Unit 5 for both halves of the exam: short theory answers on pixels and tasks, then kernels, CNN layers and image programs for the practical.
- [Visual ML with Orange](/courses/orange-data-mining-visual-machine-learning-course-for-teens): Image classification without code, including the coral bleaching use case the curriculum names for Unit 5.
- [AI and ML for Teens](/courses/ai-ml-masterclass-teens): Train a small image classifier and watch convolution, ReLU and pooling change a picture, layer by layer.

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

**How many marks is computer vision in class 10 AI 2026-27?** Unit 5, Computer Vision, carries 4 of the 50 theory marks in CBSE 417 for 2026-27, the smallest theory unit. The curriculum gives it 10 theory hours but 20 practical hours, so much of its weight is felt in the practical exam, the practical file and the viva rather than in the written paper.

**What questions come from computer vision in the class 10 AI paper?** In the 2025-26 sample paper there were four one-mark objective items and one two-mark question from this unit, and no four-mark question. Expect pixel or value counts, grayscale against RGB, naming a CV task from a description and examples of applications. The 2026-27 sample paper for 417 is not out yet.

**What is CNN in class 10 AI?** A Convolutional Neural Network is a deep learning model built for images. It passes an image through a convolution layer that finds features, a ReLU layer that removes negative values, a pooling layer that shrinks the result, and a fully connected layer that gives the final label. In 2026-27 it is listed in the practical part of Unit 5.

**What is the convolution operator in class 10?** Convolution slides a small matrix called a kernel across an image. At each position the overlapping numbers are multiplied cell by cell and added, giving one value of the output. With a 5 x 5 image and a 3 x 3 kernel and no padding, the output is 3 x 3. It is used to find features such as edges.

**What is a kernel in class 10 AI?** A kernel is a small matrix of numbers, often 3 x 3, that is slid over an image during convolution. Its values decide the effect: one kernel blurs, another sharpens, another finds vertical edges. In a CNN, the kernel values are learned during training instead of being typed in.

**What is a pixel and resolution in class 10?** A pixel is the smallest unit of a digital image, one dot holding a value. Resolution is the number of pixels, written as width x height, so a 1920 x 1080 image has 2,073,600 pixels. Higher resolution means more pixels and finer detail, and a larger file.

**What is the difference between grayscale and RGB?** A grayscale image stores one number per pixel, from 0 for black to 255 for white. An RGB image stores three numbers per pixel, for red, green and blue, each from 0 to 255. So an RGB image of the same size stores three times as many values: 800 x 600 gives 480,000 grayscale values but 1,440,000 RGB values.

**Why do pixel values go from 0 to 255?** A byte image gives each value 8 bits. Eight bits can form 2 to the power 8, or 256, different patterns, so the values run from 0 to 255. That is also why each of R, G and B has 256 levels in a standard colour image.

**Which computer vision programs are in the class 10 AI practical file?** CBSE's suggested list for 2026-27 includes two image programs: read an image and display it using Python, and read an image and identify its shape. The shape is the array's height, width and number of colour channels. Your school may add more; at least 15 programs are needed in the file.

**Is it worth studying computer vision if it is only 4 marks?** Yes, for two reasons. The theory marks are among the easiest to secure, since most are short definitions or counts. And the practical exam, file and viva together are worth far more than 4 marks, and Computer Vision is part of them, so skipping the unit costs marks there.

**Do your classes cover both the theory and the practical of Unit 5?** Yes. The batch teaches the theory topics with timed drills, then does kernels, CNN layers, the image programs and the Orange coral bleaching walkthrough in class, with viva rehearsal. It is included in the monthly fee shown on this page, for the batch or one to one, and the first class is a free demo.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Mon and Wed 9 PM AI batch](/cbse-class-10-ai-classes-online), [CBSE AI classes in the Gulf and abroad](/cbse-class-10-ai-online-classes-gulf-and-abroad).

**Unit by unit:** [CBSE AI 417 syllabus explained](/cbse-class-10-ai-syllabus-explained), [Python for Class 10 AI](/python-for-cbse-class-10-ai), [Part A employability skills](/cbse-class-10-ai-employability-skills-part-a), [Unit 3: Evaluating Models](/cbse-class-10-ai-evaluating-models-questions), [Confusion matrix numericals](/confusion-matrix-class-10-ai-numericals), [Unit 2: Advanced modeling](/cbse-class-10-ai-advanced-modeling-questions), [Unit 6: Natural Language Processing](/cbse-class-10-ai-nlp-questions), [Bag of Words and TFIDF, worked](/bag-of-words-tfidf-class-10-ai).

**Questions and practice:** [CBSE AI important questions](/cbse-class-10-ai-important-questions), [Sample paper and mock tests](/cbse-class-10-ai-sample-paper-and-mock-tests), [Class 10 AI MCQ, unit wise](/cbse-class-10-ai-mcq-questions), [Previous year papers, solved](/cbse-class-10-ai-previous-year-question-papers), [AI practical and project viva](/cbse-class-10-ai-viva-questions), [Case based questions](/cbse-class-10-ai-case-based-questions), [Employability skills MCQ](/employability-skills-class-10-mcq), [Difference between questions](/cbse-class-10-ai-difference-between-questions), [Assertion and reason questions](/cbse-class-10-ai-assertion-reason-questions).

**Notes and revision:** [Class 10 AI notes, unit wise](/cbse-class-10-ai-notes), [Class 10 AI one shot revision](/cbse-class-10-ai-one-shot-revision), [30, 7 and 1 day revision plan](/cbse-class-10-ai-revision-plan), [Worksheets with answers](/cbse-class-10-ai-worksheets), [AI handbook exercise answers](/cbse-class-10-ai-textbook-solutions), [Best book for Class 10 AI](/best-book-for-cbse-class-10-ai), [Formula sheet](/cbse-class-10-ai-formula-sheet).

**Exam, marks and practicals:** [CBSE AI board exam preparation](/cbse-class-10-ai-board-exam-preparation), [AI project and practical file](/cbse-class-10-ai-project-and-practical-file), [Exam date 2027 and paper pattern](/cbse-class-10-ai-exam-date-and-paper-pattern), [AI practical exam questions](/cbse-class-10-ai-practical-exam-questions), [AI project ideas](/cbse-class-10-ai-project-ideas).

---

*Canonical: https://learn.modernagecoders.com/cbse-class-10-ai-computer-vision-questions*
