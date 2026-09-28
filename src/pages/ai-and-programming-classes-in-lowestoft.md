---
title: "AI and Programming Classes in Lowestoft | Coding for 6 to 67"
description: "Online AI, programming, Python and vibe coding classes for Lowestoft, Oulton Broad, Pakefield and Carlton Colville learners aged 6 to 67. First lesson free."
canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-lowestoft
source: src/pages/ai-and-programming-classes-in-lowestoft.html
---
> The ONS counted 71,315 people in the Lowestoft built-up area at the 2021 census, within an East Suffolk district of 246,058 that also includes Beccles, Bungay, Halesworth and Kessingland. Whether home is Pakefield, Oulton Broad, Carlton Colville or the town centre, a learner of 6, 16 or 67 can join our India-based tutors on live video for AI, programming, Python, vibe coding and maths, privately or as one of five to ten classmates at a similar point. We teach how to think first, so that learners stay in charge of the AI tools they use. The free first lesson ends with our course suggestion. For Lowestoft the project puts a popular AI trick, data augmentation, to a fair test using two old histories of the town. Beyond the trial, lessons cost USD 100 a month in a group or USD 150 a month one-to-one.

[Home](/) / [United Kingdom](/coding-classes-in-united-kingdom) / [East of England](/coding-and-ai-classes-in-east-of-england) / Lowestoft

Lowestoft, East Suffolk, England / Live online

# AI and programming classes in Lowestoft

**Which are the best AI and programming classes in Lowestoft?** The ONS counted 71,315 people in the Lowestoft built-up area at the 2021 census, within an East Suffolk district of 246,058 that also includes Beccles, Bungay, Halesworth and Kessingland. Whether home is Pakefield, Oulton Broad, Carlton Colville or the town centre, a learner of 6, 16 or 67 can join our India-based tutors on live video for AI, programming, Python, vibe coding and maths, privately or as one of five to ten classmates at a similar point. We teach how to think first, so that learners stay in charge of the AI tools they use. The free first lesson ends with our course suggestion. For Lowestoft the project puts a popular AI trick, data augmentation, to a fair test using two old histories of the town. Beyond the trial, lessons cost USD 100 a month in a group or USD 150 a month one-to-one.

Two histories of Lowestoft are free on Project Gutenberg. Edmund Gillingwater's, reprinted in 1897, opens with the Island of Lothingland: "THIS island (lately become a peninsula)". Francis Davy Longe's Lowestoft in Olden Times began as "lectures read before the members of St. Margaret's Institute, at Lowestoft". A computer can learn to tell their sentences apart, but only if it has enough examples. When examples are scarce, AI builders often use data augmentation: making extra, slightly altered copies of the examples they have. This project tests whether that really helps, and finds two ways it can mislead anyone who does not check.

Facts last verified 28 September 2026. Teaching is online; no Lowestoft branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Lowestoft courses in thinking, vibe coding and AI

Let age and curiosity steer the choice. The first live lesson on every course is free, and booking needs no card.

- [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids) (Ages 7 to 12): The how-to-think programme: fair tests, clues and spotting when a result is too good to be true.
- [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev) (Ages 8 to 12): Scratch games, then small apps built by describing them to AI and testing them carefully.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 13 to 17): Machine learning in Python, from a first text classifier to honest testing, including this project.
- [Generative AI Course](/courses/complete-generative-ai-masterclass-college) (Students and adults): How modern AI is trained and evaluated, plus language models, retrieval and agents.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Lowestoft and other East Suffolk towns

ONS 2021 census populations for Lowestoft and some of the district's smaller built-up areas.

**Lowestoft beside four smaller East Suffolk settlements, 2021 census (ONS)**

| Built-up area | People (2021) |
|---|---|
| Lowestoft | 71,315 |
| Beccles | 9,810 |
| Bungay | 5,010 |
| Halesworth | 4,925 |
| Kessingland | 4,240 |

These are individual ONS figures, printed as released and never added together; the district count of 246,058 comes from its own census table and covers many places not listed here. Oulton Broad, Pakefield, Carlton Colville, Gunton and Kirkley are all within East Suffolk district. Suffolk schools follow the English national curriculum; send us your holiday dates and we will keep those weeks free of lessons.

### Suffolk, the region and how we teach

For the rest of the county see [coding classes in Suffolk](/coding-classes-in-suffolk), and for the region [the East of England page](/coding-and-ai-classes-in-east-of-england). The thinking behind judgement before prompting is on [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

## Does data augmentation really help? Two histories as a test

Teach a model to tell Gillingwater from Longe with very few examples, then add altered copies and measure fairly.

The learner splits each book into sentences, keeping those of 8 to 60 words and leaving out later additions and footnotes: 1,922 sentences from Gillingwater and 938 from Longe. A simple word-count classifier, known as naive Bayes, learns which words each author favours. To imitate a shortage of data, it is trained on only a handful of sentences per author and tested on 300 unseen sentences from each. The augmented version gets four extra copies of every training sentence, each with about one word in ten deleted and a pair of words swapped. Longe's remark that the oldest record naming the town is Domesday Book, lowercased as "the most ancient record in which we find any mention of lowestoft is domesday book" becomes, for example, "the most ancient record which of find any mention we lowestoft is domesday book". Every result is averaged over 200 random splits.

**Mean accuracy on 600 unseen sentences, 200 random splits, our Python run, 28 September 2026**

| Training sentences per author | Without augmentation | With augmentation |
|---|---|---|
| 5 | 55.1% | 55.7% |
| 10 | 57.6% | 58.4% |
| 20 | 61.8% | 62.6% |
| 50 | 68.6% | 68.9% |

At first glance augmentation works. It adds a little under a point at every size, and at 20 sentences per author it wins in 133 of the 200 splits and loses in 56. A beginner might stop there and report success. The careful next step is a control: what happens if, instead of altered copies, the program simply adds four exact copies of each sentence? That changes nothing about the information available, only how heavily the training examples count.

**Controls at 20 training sentences per author, same 600 test sentences and 200 splits**

| Training data | Mean accuracy |
|---|---|
| Original sentences only | 61.8% |
| Plus four exact copies of each | 62.6% |
| Plus four copies with words swapped only | 62.6% |
| Plus four copies with words deleted only | 62.6% |
| Plus four copies with both changes | 62.6% |

Every version lands on the same figure. Exact copies do just as well as the clever ones, so the small gain comes from giving the training examples more weight, not from new information. The swapped copies are the clearest case: their results match the exact copies in every one of the 200 splits, because a word-count model never sees word order at all. An augmentation only helps if it changes something the model can actually notice.

**The leakage trap, 95 original sentences per author, 80% train and 20% test**

| Order of steps | Mean accuracy |
|---|---|
| Augment all sentences, then split into train and test | 99.2% |
| Split first, then augment only the training sentences | 71.5% |

The second trap is far more dangerous. If every sentence is augmented first and the copies are then shuffled into training and test sets, near-identical versions of test sentences sit in the training data. The model recognises them and scores 99.2%, a result that looks spectacular and means nothing. Split first, augment only the training part, and the honest figure is 71.5%. Order matters: set the test data aside before doing anything else.

### Ages 8 to 11

Run a fair-test experiment with a control group and see why the control matters.

### Ages 11 to 15

Split two texts into sentences in Python and count which words each writer prefers.

### Ages 15 and up

Build the augmentation, add the copy control, then reproduce and fix the leakage.

### Their histories, our experiment

The texts are the Project Gutenberg transcriptions of Gillingwater's History of Lowestoft and Lowestoft in Olden Times by Francis Davy Longe. The sentence splits, the classifier, the augmentations and every accuracy figure are our own work.

## What this teaches about vibe coding and AI agents

Treat any striking result as a prompt to dig further.

**From the Lowestoft experiment to everyday AI**

| In the history project | When AI builds or reports something |
|---|---|
| Augmentation looked like a win | A reported improvement needs a control |
| Exact copies scored the same | Ask whether the simplest version does just as well |
| Swaps were invisible to the model | Check that a change touches what the system uses |
| 99.2% came from test data leaking in | A near-perfect score is a reason to look for a leak |
| Set the test aside first | Keep some checks the AI never sees |

Ask an AI assistant to improve a model and it may well suggest data augmentation, write the code and report a better score. Vibe coding means explaining the program you want and letting an AI write a draft; for our learners, this project becomes the prompt to ask what the score was compared with and whether test data could have slipped into training. AI agents can run whole experiments without a person watching each step, which makes built-in controls and a sealed test set even more important. Agent building comes after Python for older teenagers and adults, and Copilot Studio agents are taught in one-to-one lessons only. Follow-up reading: [our agents course for students in the UK](/ai-agents-course-for-students-uk), and the guide [understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-uk).

Modern Age Coders has no connection with Project Gutenberg, the Office for National Statistics or postcodes.io. We borrowed their words and numbers; the testing, and whatever we got wrong, is down to us.

## From fair tests to honest AI

We use the school year as a first estimate and let the free lesson decide the level.

- **Years 2 to 7: How to think** Fair tests, patterns and checking a surprising answer. [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **Years 4 to 8: Vibe coding for kids** Games and apps made with AI help, each tested by the learner. [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev), [Python and AI for Kids](/courses/python-ai-kids-masterclass)
- **Years 9 to 13: Python and machine learning** Text, data and fair model testing alongside GCSE and A level. [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course), [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens)
- **Adults: Models and agents** Training, evaluation, language models and agents in Python. [Generative AI Course](/courses/complete-generative-ai-masterclass-college), [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)

## Can you trust a score an AI reports?

Only after asking what it was compared with and what it was tested on.

In the Lowestoft project the same model scored 99.2% or 71.5% depending only on the order of two steps. Nothing about the model changed; only the test did.

Learners who have produced a fake 99.2% themselves become quick to spot one elsewhere, including in results that AI tools present with confidence.

Spotting a leaky test is a habit that serves Lowestoft teenagers with every AI tool they touch, which makes coding well worth learning in 2026. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## Pakefield to Oulton Broad, online

All a Lowestoft home needs is a computer and a dependable connection.

- **Students at the controls** Learners write, prompt and run the code; the tutor watches on screen share and asks the questions that move them on.
- **The trial sets the level** From Year 3 to Year 13, the free lesson decides where to begin, and we record any exam board.
- **No cost to start** The first lesson is free and ends with a suggested course.
- **Groups by stage** Five to ten UK learners at a similar level in each class.
- **Two sessions weekly** Lessons are paused over school holidays.
- **Stable lesson hours** Tutors follow UK clock changes, so the time you chose stays the same.

**Why the classes are online** Five East Suffolk learners at the same stage, all free on the same evening, seldom live near each other. Online, they can share a class.

## Lowestoft fees

Lowestoft learners pay our international rate, which covers every country but India.

- First class: USD 0. A full lesson at no charge first, followed by our course suggestion.
- Group tuition: USD 100 a month. Around eight live group lessons per month.
- Private tuition: USD 150 a month. Around eight live private lessons per month.

Fees are in US dollars rather than pounds. Billing begins only after the trial fixes the course and the regular slot, and our pricing page deals with holidays away, missed sessions and moving between formats.

## Lowestoft questions

### What is the population of Lowestoft?

The ONS gives 71,315 for the Lowestoft built-up area at the 2021 census, and 246,058 for East Suffolk district.

### Are the AI and programming lessons open to families in Lowestoft?

Yes. Everything is taught live online, so learners aged 6 to 67 across East Suffolk can take part.

### Is vibe coding on offer?

Yes, for children, teenagers and adults, with learners planning first and testing what the AI writes.

### At what point do AI agents come in?

Python comes first, so agents usually begin in the later teens or adulthood; anything on Copilot Studio is taught privately.

### What is the data augmentation project?

Learners teach a classifier to tell two Lowestoft histories apart, add altered copies of the training sentences, and test whether that really helps or just looks as if it does.

### Do you teach in person?

No, only live online.

### Do you cover GCSE and A level?

Yes, computer science and maths, with the focus on understanding rather than promised grades.

### What ages can learn with you?

From 6 up to 67.

### What do lessons cost?

Nothing for the first. Then USD 100 a month for a group place or USD 150 a month for one-to-one.

### What happens in school holidays?

We stop for them; just let us know when they fall.

## More East Anglia pages

In Suffolk, [Ipswich](/best-coding-and-ai-classes-in-ipswich) has its own page and project, and across the county line [Norwich](/best-coding-class-in-norwich) and [Norfolk](/coding-classes-in-norfolk) are covered too. Our [UK hub](/coding-classes-in-united-kingdom) links to every area.

## Contact

Book the free class on [https://learn.modernagecoders.com/ai-and-programming-classes-in-lowestoft](https://learn.modernagecoders.com/ai-and-programming-classes-in-lowestoft#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
