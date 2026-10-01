---
title: "AI and Programming Classes in Pontypool | Ages 6 to 67"
description: "Live online AI and programming classes for Pontypool, Griffithstown, New Inn and Trevethin, ages 6 to 67, with Python and maths. Your first lesson is free."
canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-pontypool
source: src/pages/ai-and-programming-classes-in-pontypool.html
---
> Census 2021 found 29,070 usual residents in the Pontypool built-up area and 92,276 across the county borough of Torfaen. Griffithstown, Sebastopol, New Inn, Pontnewynydd, Trevethin, Penygarn, Wainfelin and Tranch all sit within the built-up area. From the age of six up to 67, Pontypool learners study AI, programming, Python, vibe coding and maths with Modern Age Coders, live online, with India-based tutors teaching privately or to level-matched classes of five to ten. Every learner begins with a free trial lesson and a course recommendation. The Pontypool project trains a small neural network to tell which ward a postcode belongs to, teaches it the northern wards first and the southern wards second, and measures how much of the first lesson survives. Following the free trial, a class place is USD 100 monthly and individual tuition USD 150 monthly.

[Home](/) / [United Kingdom](/coding-classes-in-united-kingdom) / [Wales](/coding-and-ai-classes-in-wales) / Pontypool

Pontypool, Torfaen, Wales / Live online

# AI and programming classes in Pontypool

**Which are the best AI and programming classes for Pontypool?** Census 2021 found 29,070 usual residents in the Pontypool built-up area and 92,276 across the county borough of Torfaen. Griffithstown, Sebastopol, New Inn, Pontnewynydd, Trevethin, Penygarn, Wainfelin and Tranch all sit within the built-up area. From the age of six up to 67, Pontypool learners study AI, programming, Python, vibe coding and maths with Modern Age Coders, live online, with India-based tutors teaching privately or to level-matched classes of five to ten. Every learner begins with a free trial lesson and a course recommendation. The Pontypool project trains a small neural network to tell which ward a postcode belongs to, teaches it the northern wards first and the southern wards second, and measures how much of the first lesson survives. Following the free trial, a class place is USD 100 monthly and individual tuition USD 150 monthly.

People learn new things without forgetting old ones, mostly. Neural networks are not so lucky. Train one on a task, then train it on a different task, and it can lose the first almost entirely. McCloskey and Cohen described the effect in 1989 as catastrophic interference; today it is usually called catastrophic forgetting. It matters every time an AI model is updated with new data. In Pontypool we make it happen on purpose, with 721 local postcodes and five wards, and then fix it with one simple idea.

Facts last verified 1 October 2026. Teaching is online; no Pontypool branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## AI and programming courses for Pontypool learners

Pick by age. The opening live lesson is free on every course, and no card is needed.

- [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids) (Ages 7 to 12): Sorting, grouping and rule-finding games that lead into how machines learn.
- [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev) (Ages 8 to 12): Scratch games made with an AI helper, then played, tested and fixed.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 13 to 17): Machine learning in Python, including the Pontypool forgetting experiment.
- [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college) (Students and adults): Python from scratch through data work to models you can retrain safely.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Pontypool, Griffithstown, Sebastopol, New Inn and Trevethin

The census headline counts and the areas that make up the town.

**Census 2021 (ONS)**

| Area | Usual residents |
|---|---|
| Pontypool built-up area | 29,070 |
| Torfaen county borough | 92,276 |

Torfaen also contains Cwmbran, Blaenavon and Abersychan, so the borough is counted on its own rather than as a sum. On postcodes.io, Griffithstown, Sebastopol, New Inn, Pontnewynydd, Trevethin, Penygarn, Wainfelin and Tranch are suburban areas whose nearest postcode lies inside the Pontypool built-up area; Abersychan and Garndiffaith belong to a neighbouring one. The postcodes inside the town fall in five wards: Pontypool Fawr, Panteg, Pontnewynydd and Snatchwood, New Inn, and Trevethin and Penygarn. Schools follow the Curriculum for Wales, from progression step 1 to WJEC GCSEs and A levels; we teach in English and use the Welsh school year as an opening guess for the trial lesson to refine.

### Gwent pages

See [Cwmbran](/vibe-coding-and-ai-agents-classes-in-cwmbran), [Torfaen](/coding-classes-in-torfaen), [Newport](/best-coding-class-in-newport-wales) and [WJEC GCSE Computer Science help](/wjec-gcse-computer-science-help-wales). The case for training models rather than only prompting them is in [learn to train AI, not just prompt it](/learn-to-train-ai-not-just-prompt-it-uk).

## Teach it the north, then the south, and watch the north disappear

Postcode positions, five wards, a small neural network, and a test of what it still remembers.

Every NP4 postcode in Torfaen comes from Ordnance Survey's Code-Point Open, with its map position and its ward. Keeping only those inside the Pontypool built-up area leaves 721 postcodes in five wards. The model's job is simple to state: given a postcode's position, say which ward it is in. A quarter of each ward is held back for testing, and the network, two layers of 64 neurons written with scikit-learn, never sees those during training.

The lesson comes in two parts. Task A is the three northern wards, Pontnewynydd and Snatchwood, Pontypool Fawr, and Trevethin and Penygarn. Task B is the two wards whose postcodes lie furthest south on average, New Inn and Panteg. The network learns task A first and is tested. Then it carries on training, but only on task B, as a real model might be updated with only the newest data. The learner runs the whole thing with 20 different random starts.

**Share of held-back postcodes placed in the right ward, average of 20 runs, our Python run**

| Training | Northern wards (A) | Southern wards (B) |
|---|---|---|
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

## What a forgetful network teaches about updating real AI models

Every time a model is retrained on new data, the same question applies: what will it lose?

**From the Pontypool wards to AI in the wild**

| Seen with the five wards | Meaning for AI that gets updated |
|---|---|
| New training wiped out the old task | Updating a model can quietly break what worked |
| The network gave confident wrong wards | Forgetting does not announce itself |
| 30 replayed postcodes kept 92.0% | A small sample of old data protects a lot |
| Results varied run to run | Test retrained models more than once |
| Joint training worked but needed all the data | Real systems rarely keep everything |

Large AI models are fine-tuned for new jobs all the time, and researchers spend real effort stopping them losing earlier skills, with methods such as replay and Kirkpatrick and colleagues' elastic weight consolidation. A learner who has watched 97.8% fall to 0.1% will always ask, after any update, "what did we test that it still knows?" An assistant could draft this experiment in moments through vibe coding, but the insight comes from running it and reading the numbers. Designing an agent of their own is a later stage, reached once a learner's Python no longer needs a guiding hand; that tends to be the sixth form years or adulthood, and Copilot Studio is kept for one-to-one lessons. Related: [how agents are taught to UK students](/ai-agents-course-for-students-uk), and [problem-solving skills through coding](/problem-solving-skills-through-coding-uk).

We are not affiliated with Ordnance Survey, the ONS or postcodes.io, whose open data made the experiment possible; the network and its scores are our own.

## From sorting games at seven to retraining neural networks at seventeen

We start from the Welsh school year, and the trial lesson tells us where a learner really is.

- **Years 2 to 6: Groups and rules** Sorting, grouping and rule-spotting, much of it away from the screen. [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **Years 4 to 8: Making things with AI** AI-assisted Scratch games, then a first step into Python. [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev), [Python and AI for Kids](/courses/python-ai-kids-masterclass)
- **Years 9 to 13: Training models** Classifiers, test sets and experiments on what models keep and lose. [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens), [Python for Teens](/courses/python-complete-masterclass-teens)
- **Adults: Models in practice** Python and machine learning for work, including safe retraining. [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college), [Data Structures & Algorithms Course](/courses/data-structures-algorithms-masterclass-college)

## What is catastrophic forgetting in AI?

Catastrophic forgetting is what happens when a neural network trained on one task is then trained on another and loses most of its ability on the first, because the new training overwrites the shared weights the old knowledge depended on; mixing in a small replay of old examples is one of the simplest ways to prevent it.

In Pontypool, a network that placed 97.8% of northern-ward postcodes correctly fell to 0.1% after being trained only on New Inn and Panteg, and recovered to 92.0% when 30 northern postcodes were replayed during that training.

Learners who have produced that collapse treat every model update as something to test, not something to trust.

For a Pontypool teenager, knowing how a model can lose what it knew is part of staying in charge of AI, and that knowledge comes from training models themselves. The longer argument is in [why training your own models still matters in 2026](/blog/is-coding-worth-learning-2026).

## How classes work for a Pontypool learner

Lessons happen live on video. A computer with a keyboard is needed; a tablet alone cannot run Python comfortably.

- **Learner in charge of the keys** The learner writes and runs every line, explaining it to the tutor.
- **Level comes first** The trial lesson shows where to start before we recommend anything.
- **No charge to begin** The first lesson is free and needs no card.
- **Groups by level** Five to ten learners at the same stage, from across the UK.
- **Two a week** About eight lessons a month in term, with Torfaen holidays left free on request.
- **Fixed UK time** The lesson stays at its UK hour when the clocks change.

**Why online lessons** Five to ten learners at one exact level are far easier to bring together across the UK than in a single town, and on video nobody travels.

## Fees for Pontypool families

Pontypool learners pay what everyone outside India pays.

- First class: USD 0. First lesson: free and complete, finishing with a course recommendation.
- Group tuition: USD 100 a month. Group class, generally eight lessons each month.
- Private tuition: USD 150 a month. Private one-to-one lessons, generally eight each month.

Fees are in US dollars only, with no sterling version. The trial is never billed; charges start once a course and a weekly time are agreed. The pricing page sets out holidays, missed lessons and moving between group and private.

## Pontypool questions

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

## More pages for Gwent and South Wales

Look at [Cwmbran](/vibe-coding-and-ai-agents-classes-in-cwmbran), [Torfaen](/coding-classes-in-torfaen), [Monmouthshire](/coding-classes-in-monmouthshire) and [Blaenau Gwent](/coding-classes-in-blaenau-gwent). Other Welsh towns are on [the Wales page](/coding-and-ai-classes-in-wales), and the whole UK on the [UK hub](/coding-classes-in-united-kingdom).

## Contact

Book the free class on [https://learn.modernagecoders.com/ai-and-programming-classes-in-pontypool](https://learn.modernagecoders.com/ai-and-programming-classes-in-pontypool#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
