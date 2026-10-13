---
title: "AI and Programming Classes in Pontypool | Ages 6 to 67"
description: "Live online AI and programming classes for Pontypool, Griffithstown, New Inn and Trevethin, ages 6 to 67, with Python and maths. Your first lesson is free."
canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-pontypool
source: src/pages/ai-and-programming-classes-in-pontypool.html
---
> Live online AI and programming classes for Pontypool, Griffithstown, New Inn and Trevethin, ages 6 to 67, with Python and maths. Your first lesson is free.

Skip to contentFirst courses

## AI and programming courses for Pontypool learners

Pick by age. The opening live lesson is free on every course, and no card is needed.

[![Problem Solving and Computational Thinking for Kids course thumbnail](/images/problem-solving-kids.webp)Ages 7 to 12Problem Solving and Computational Thinking for KidsSorting, grouping and rule-finding games that lead into how machines learn.See the syllabus](/courses/problem-solving-and-computational-thinking-for-kids)[![Vibe Coding for Kids course thumbnail](/images/vibe-coding-kids.webp)Ages 8 to 12Vibe Coding for KidsScratch games made with an AI helper, then played, tested and fixed.See the syllabus](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)Ages 13 to 17AI and Machine Learning for TeensMachine learning in Python, including the Pontypool forgetting experiment.See the syllabus](/courses/ai-ml-masterclass-teens)[![Python Masterclass course thumbnail](/images/python-college.webp)Students and adultsPython MasterclassPython from scratch through data work to models you can retrain safely.See the syllabus](/courses/python-programming-masterclass-zero-to-advanced-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Pontypool in brief

## Pontypool, Griffithstown, Sebastopol, New Inn and Trevethin

The census headline counts and the areas that make up the town.

| Area | Usual residents |
| --- | --- |
| Pontypool built-up area | 29,070 |
| Torfaen county borough | 92,276 |

Torfaen also contains Cwmbran, Blaenavon and Abersychan, so the borough is counted on its own rather than as a sum. On postcodes.io, Griffithstown, Sebastopol, New Inn, Pontnewynydd, Trevethin, Penygarn, Wainfelin and Tranch are suburban areas whose nearest postcode lies inside the Pontypool built-up area; Abersychan and Garndiffaith belong to a neighbouring one. The postcodes inside the town fall in five wards: Pontypool Fawr, Panteg, Pontnewynydd and Snatchwood, New Inn, and Trevethin and Penygarn. Schools follow the Curriculum for Wales, from progression step 1 to WJEC GCSEs and A levels; we teach in English and use the Welsh school year as an opening guess for the trial lesson to refine.

### Gwent pages

See [Cwmbran](/vibe-coding-and-ai-agents-classes-in-cwmbran), [Torfaen](/coding-classes-in-torfaen), [Newport](/best-coding-class-in-newport-wales) and [WJEC GCSE Computer Science help](/wjec-gcse-computer-science-help-wales). The case for training models rather than only prompting them is in [learn to train AI, not just prompt it](/learn-to-train-ai-not-just-prompt-it-uk).

The Pontypool project

## Teach it the north, then the south, and watch the north disappear

Postcode positions, five wards, a small neural network, and a test of what it still remembers.

Every NP4 postcode in Torfaen comes from Ordnance Survey's Code-Point Open, with its map position and its ward. Keeping only those inside the Pontypool built-up area leaves 721 postcodes in five wards. The model's job is simple to state: given a postcode's position, say which ward it is in. A quarter of each ward is held back for testing, and the network, two layers of 64 neurons written with scikit-learn, never sees those during training.

The lesson comes in two parts. Task A is the three northern wards, Pontnewynydd and Snatchwood, Pontypool Fawr, and Trevethin and Penygarn. Task B is the two wards whose postcodes lie furthest south on average, New Inn and Panteg. The network learns task A first and is tested. Then it carries on training, but only on task B, as a real model might be updated with only the newest data. The learner runs the whole thing with 20 different random starts.

| Training | Northern wards (A) | Southern wards (B) |
| --- | --- | --- |
| A only | 97.8% | not yet taught |
| A, then B only | 0.1% | 99.3% |
| A, then B with 30 A points replayed | 92.0% | 99.4% |
| A and B together from the start | 97.6% | 99.2% |

After the second round of training the network was almost perfect on the southern wards and had forgotten the northern ones completely: on average it got 0.1% of them right, and it labelled 99.9% of the northern test postcodes as New Inn or Panteg. Nothing about the northern postcodes changed. The network simply rebuilt its weights for the new task, because nothing in its training told it the old one still mattered.

The fix is replay, sometimes called rehearsal. The learner keeps a tiny memory of the first task, just 10 postcodes from each northern ward, 30 in all, and mixes them into every round of the second training. Northern accuracy then stays at 92.0% on average, though it varied from 81.7% to 98.3% between runs, depending on which 30 postcodes were remembered. Training on both tasks at once does a little better again, at 97.6%, but only if all the old data is still to hand, which in real systems it often is not.

### Ages 8 to 11

Learn five new words a day without revising old ones, then test yourself on day one's words.

### Ages 11 to 15

Plot the postcodes by ward in Python and train a simple classifier on the northern wards.

### Ages 15 and up

Reproduce the forgetting, add a replay memory, and measure how its size changes what survives.

### Sources and limits

Postcodes and wards are from Ordnance Survey Code-Point Open 2026.3.0 (Royal Mail and OS data, Open Government Licence) with postcodes.io lookups; census figures are from the ONS. The model, the 20 random starts and every percentage in the table come from our own run with scikit-learn. A ward classifier is a teaching task, not a tool anyone needs: the official ward of a postcode is already published.

Updating AI

## What a forgetful network teaches about updating real AI models

Every time a model is retrained on new data, the same question applies: what will it lose?

| Seen with the five wards | Meaning for AI that gets updated |
| --- | --- |
| New training wiped out the old task | Updating a model can quietly break what worked |
| The network gave confident wrong wards | Forgetting does not announce itself |
| 30 replayed postcodes kept 92.0% | A small sample of old data protects a lot |
| Results varied run to run | Test retrained models more than once |
| Joint training worked but needed all the data | Real systems rarely keep everything |

Large AI models are fine-tuned for new jobs all the time, and researchers spend real effort stopping them losing earlier skills, with methods such as replay and Kirkpatrick and colleagues' elastic weight consolidation. A learner who has watched 97.8% fall to 0.1% will always ask, after any update, "what did we test that it still knows?" An assistant could draft this experiment in moments through vibe coding, but the insight comes from running it and reading the numbers. Designing an agent of their own is a later stage, reached once a learner's Python no longer needs a guiding hand; that tends to be the sixth form years or adulthood, and Copilot Studio is kept for one-to-one lessons. Related: [how agents are taught to UK students](/ai-agents-course-for-students-uk), and [problem-solving skills through coding](/problem-solving-skills-through-coding-uk).

We are not affiliated with Ordnance Survey, the ONS or postcodes.io, whose open data made the experiment possible; the network and its scores are our own.

Learning journey

## From sorting games at seven to retraining neural networks at seventeen

We start from the Welsh school year, and the trial lesson tells us where a learner really is.

Years 2 to 6

### Groups and rules

Sorting, grouping and rule-spotting, much of it away from the screen.

[Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids)[Scratch Coding for Kids](/courses/scratch-programming-complete-course)Years 4 to 8

### Making things with AI

AI-assisted Scratch games, then a first step into Python.

[Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[Python and AI for Kids](/courses/python-ai-kids-masterclass)Years 9 to 13

### Training models

Classifiers, test sets and experiments on what models keep and lose.

[AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens)[Python for Teens](/courses/python-complete-masterclass-teens)Adults

### Models in practice

Python and machine learning for work, including safe retraining.

[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)[Data Structures & Algorithms Course](/courses/data-structures-algorithms-masterclass-college)Forgetting and AI

## What is catastrophic forgetting in AI?

Catastrophic forgetting is what happens when a neural network trained on one task is then trained on another and loses most of its ability on the first, because the new training overwrites the shared weights the old knowledge depended on; mixing in a small replay of old examples is one of the simplest ways to prevent it.

In Pontypool, a network that placed 97.8% of northern-ward postcodes correctly fell to 0.1% after being trained only on New Inn and Panteg, and recovered to 92.0% when 30 northern postcodes were replayed during that training.

Learners who have produced that collapse treat every model update as something to test, not something to trust.

For a Pontypool teenager, knowing how a model can lose what it knew is part of staying in charge of AI, and that knowledge comes from training models themselves. The longer argument is in [why training your own models still matters in 2026](/blog/is-coding-worth-learning-2026).

Lesson details

## How classes work for a Pontypool learner

Lessons happen live on video. A computer with a keyboard is needed; a tablet alone cannot run Python comfortably.

### Learner in charge of the keys

The learner writes and runs every line, explaining it to the tutor.

### Level comes first

The trial lesson shows where to start before we recommend anything.

### No charge to begin

The first lesson is free and needs no card.

### Groups by level

Fifteen to twenty learners at the same stage, from across the UK.

### Two a week

About eight lessons a month in term, with Torfaen holidays left free on request.

### Fixed UK time

The lesson stays at its UK hour when the clocks change.

Why online lessons

Fifteen to twenty learners at one exact level are far easier to bring together across the UK than in a single town, and on video nobody travels.

Fees

## Fees for Pontypool families

Pontypool learners pay what everyone outside India pays.

First class**USD 0**

First lesson: free and complete, finishing with a course recommendation.

Group tuition**USD 100**

Group class, generally eight lessons each month.

Private tuition**USD 150**

Private one-to-one lessons, generally eight each month.

Fees are in US dollars only, with no sterling version. The trial is never billed; charges start once a course and a weekly time are agreed. The pricing page sets out holidays, missed lessons and moving between group and private.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20would%20like%20to%20book%20a%20free%20AI%20or%20programming%20trial%20lesson.%20We%20are%20in%20Pontypool.)Reviews

## Google reviews from families in Wales and across Britain

Rated 4.9 across 547 Google reviews. These are real reviews, reproduced as written.

★★★★★

"The one step solution for my son. Modern Age Coders make learning coding so simple that kids love it. The teachers explain complex concepts clearly with practical exercises and interactive content."

Ria Mukherjee

Parent

★★★★★

"Modern Age Coders has been a game-changer for me. I struggled to grasp IT concepts and coding before joining, but their classes transformed everything. I can now confidently write complex programs with ease."

Samriddha Mondal

Student

★★★★★

"One of the most wonderful education centres out there. Education is not limited to school syllabus but focuses on skill development."

Vansh Agarwal

Student

★★★★★

"My child Dhairya is really enjoying the Modern Age Coders classes. This is his first online class and he eagerly looks forward to it. I can already see his improvement, and the teachers are very cooperative."

Sonam Oswal

Parent of Dhairya

★★★★★

"Modern Age Coders have wonderful teachers who teach in a clear, easy and practical way. The teacher boosts students' confidence and inspires them to learn without hesitation."

Sonu Goyal

Parent

★★★★★

"I highly recommend this computer coding class! The teachers are incredibly knowledgeable and passionate about coding."

Ritu Kedia

Parent

Free placement class

## Book a free Pontypool lesson

Send the learner's age or year group and something they love doing. We might open with a sorting challenge, a Scratch build guided by an AI, a handful of Python lines, or a first small model to train.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Pontypool one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20would%20like%20to%20book%20a%20free%20AI%20or%20programming%20trial%20lesson.%20We%20are%20in%20Pontypool.)

Submitted details are used for placement and follow-up.

FAQ

## Pontypool questions

The forgetting project, neural networks, vibe coding and practical details.

### How many people live in Pontypool?

The ONS counted 29,070 usual residents in the Pontypool built-up area at the 2021 census. Torfaen had 92,276.

### Can Pontypool learners join these AI and programming classes?

Yes. Anyone from 6 to 67 can join live from Pontypool, Griffithstown, Sebastopol, New Inn, Trevethin or elsewhere in Torfaen.

### What is continual learning?

Training a model on a stream of tasks or data over time, so that it gains new abilities without losing the ones it already had.

### What is replay in machine learning?

Keeping a small sample of old training examples and mixing them into new training so the model keeps practising what it learned before.

### What did the Pontypool project show?

A network that placed 97.8% of northern-ward postcodes correctly fell to 0.1% after training only on New Inn and Panteg, and held 92.0% when 30 old postcodes were replayed.

### What is vibe coding?

Describing a program to an AI and then running, reading and correcting what it writes. We teach it in typed Python so learners can judge the results.

### When do learners build their own AI agents?

Once their Python is reliable without help, typically from Year 12 or as adults. Copilot Studio agents are taught one-to-one only.

### Is this relevant to WJEC exams?

Programming, data and algorithms sit at the core of WJEC GCSE and A level computer science and get careful attention in class, though no result is promised.

### How much do classes cost?

Free for the trial; then USD 100 per month for a group seat and USD 150 per month for private teaching.

### Do lessons pause for half term?

Yes. Share the Torfaen term calendar and no lessons are booked in the breaks.

In the area

## More pages for Gwent and South Wales

Look at [Cwmbran](/vibe-coding-and-ai-agents-classes-in-cwmbran), [Torfaen](/coding-classes-in-torfaen), [Monmouthshire](/coding-classes-in-monmouthshire) and [Blaenau Gwent](/coding-classes-in-blaenau-gwent). Other Welsh towns are on [the Wales page](/coding-and-ai-classes-in-wales), and the whole UK on the [UK hub](/coding-classes-in-united-kingdom).

Book the free class[Book a priority demo](/book-demo)[Contact us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20would%20like%20to%20book%20a%20free%20AI%20or%20programming%20trial%20lesson.%20We%20are%20in%20Pontypool.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-pontypool*
