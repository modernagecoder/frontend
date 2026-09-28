---
title: "Coding and AI Classes in Walsall | Python, Vibe Coding, 6 to 67"
description: "Online coding, AI, Python and vibe coding classes for Walsall, Bloxwich, Willenhall and Aldridge learners aged 6 to 67, taught live online. First lesson free."
canonical: https://learn.modernagecoders.com/best-coding-and-ai-classes-in-walsall
source: src/pages/best-coding-and-ai-classes-in-walsall.html
---
> Walsall borough had 284,124 usual residents at the 2021 census. The ONS puts 70,775 in the Walsall built-up area itself, 51,875 in Bloxwich and 49,580 in Willenhall, with Brownhills, Aldridge and Pelsall also listed separately. Learners there, aged anywhere from 6 to 67, can take coding, AI, Python, vibe coding and maths with us live on video, taught from India in private lessons or in a group of five to ten at the same stage. Before any AI tool, we teach learners how to think, so they can question what a tool gives them. The first lesson is free and closes with a course recommendation. For Walsall the project turns an old history of Willenhall into word embeddings, the number lists AI uses for meaning. After the free lesson, a group place costs USD 100 a month and private lessons USD 150 a month.

[Home](/) / [United Kingdom](/coding-classes-in-united-kingdom) / [West Midlands region](/coding-and-ai-classes-in-west-midlands-region) / Walsall

Walsall, West Midlands, England / Live online

# Coding and AI classes in Walsall

**Where can Walsall learners find the best coding and AI classes?** Walsall borough had 284,124 usual residents at the 2021 census. The ONS puts 70,775 in the Walsall built-up area itself, 51,875 in Bloxwich and 49,580 in Willenhall, with Brownhills, Aldridge and Pelsall also listed separately. Learners there, aged anywhere from 6 to 67, can take coding, AI, Python, vibe coding and maths with us live on video, taught from India in private lessons or in a group of five to ten at the same stage. Before any AI tool, we teach learners how to think, so they can question what a tool gives them. The first lesson is free and closes with a course recommendation. For Walsall the project turns an old history of Willenhall into word embeddings, the number lists AI uses for meaning. After the free lesson, a group place costs USD 100 a month and private lessons USD 150 a month.

Frederick Hackwood's Annals of Willenhall, free on Project Gutenberg in its 1908 edition, calls Willenhall "the town of locks and keys". It also records a patent, "James Carpenter, of Willenhall", and "the Carpenter and Young invention of 1830". Those two details turn out to matter to a computer. Modern AI does not store words as words: it turns each one into a long list of numbers, called an embedding, placed so that words used in similar ways sit close together. This project builds simple embeddings from Hackwood's book in Python, asks which words land nearest to "lock", and discovers what a model learns when all it has is one town's history.

Facts last verified 28 September 2026. Teaching is online; no Walsall branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Courses for thinking, vibe coding and AI in Walsall

Choose by age and by what the learner enjoys. A free live lesson opens every course, and booking asks for no card.

- [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids) (Ages 7 to 12): The how-to-think programme: word puzzles, grouping, and saying exactly why two things belong together.
- [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev) (Ages 8 to 12): Scratch first, then small apps described to an AI and tested by the young coder.
- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects, including building word embeddings from a real book.
- [Generative AI Course](/courses/complete-generative-ai-masterclass-college) (Students and adults): Embeddings, retrieval, language models and AI agents, from the ground up.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Walsall, Bloxwich, Willenhall and nearby towns

ONS 2021 census populations for built-up areas that sit inside Walsall borough.

**Built-up areas within Walsall borough, ONS 2021 published populations**

| Built-up area | People (2021) |
|---|---|
| Walsall | 70,775 |
| Bloxwich | 51,875 |
| Willenhall | 49,580 |
| Brownhills | 21,240 |
| Aldridge | 15,835 |
| Pelsall | 10,455 |
| Pheasey | 9,495 |

We print each area as the ONS released it and leave the column unadded, since the published borough count of 284,124 comes from a separate table. Darlaston and Streetly are left out here because their built-up areas cross into neighbouring boroughs. Walsall schools teach the national curriculum for England; share your half-term dates and no lessons will be booked in them.

### Wider pages and why thinking comes first

For the whole county see [coding classes in the West Midlands](/coding-classes-in-the-west-midlands), and for the region [our West Midlands region page](/coding-and-ai-classes-in-west-midlands-region). Our case for reasoning before prompting is on [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

## Word embeddings from the Annals of Willenhall

Count which words appear together, turn the counts into vectors, then ask what sits nearest to "lock".

The learner strips the Project Gutenberg header and footer, lowercases the text, keeps only letters and drops single letters. That leaves 59,238 words, 8,224 of them different, of which 745 appear ten or more times; those 745 form the vocabulary. For every vocabulary word the program counts which other vocabulary words appear within four places of it. Each word is now a row of co-occurrence counts, a first, crude embedding, and two words can be compared by the angle between their rows, a measure called cosine similarity that runs from 0 for nothing in common up to 1.

**Nearest words by raw co-occurrence counts, our Python run on the Annals of Willenhall, 28 September 2026**

| Word | Six nearest neighbours |
|---|---|
| lock | year, of, was, however, at, last |
| church | in, and, for, which, by, being |
| walsall | town, one, in, two, and |

The raw counts produce nonsense, and the reason is frequency. Words such as "the", "of" and "and" appear next to almost everything, so they dominate every row and make every word look like every other. The fix is a weighting called positive pointwise mutual information, PPMI for short, which asks whether two words appear together more often than their separate frequencies would predict, and keeps only the pairs that do. With PPMI weighting the neighbours change completely.

**Nearest words after PPMI weighting, with cosine similarity for "lock", same text and run**

| Word | Nearest neighbours |
|---|---|
| lock | making 0.342, carpenter 0.279, young 0.262, keys 0.255, not 0.246, key 0.242 |
| locks | industry, key, trade, are, keys, various |
| iron | brass, founder, master, key, lock, patent |
| church | st, parish, collegiate, the, wolverhampton, willenhall |

Most of that looks sensible, yet two neighbours of "lock" deserve a second look. "Carpenter" is not about woodwork: it is James Carpenter, whose name appears within four words of "lock" five times in the book. "Young" is not about age either. Because the text was lowercased, the surname in "the Carpenter and Young invention" was merged with the ordinary word "young". The model has no way to tell a name from a meaning; it only knows which words keep company. A learner who spots this has found, in miniature, why AI systems sometimes link things for reasons nobody intended.

**Test: how many of the five nearest neighbours of 13 town names are also town names (65 places)**

| Method | Town neighbours found | Of which "willenhall" or "wolverhampton" |
|---|---|---|
| Raw counts | 15 of 65 | 11 |
| PPMI weighting | 14 of 65 | 3 |

A quick score makes the two methods look almost equal, 15 against 14. Opening up the results tells a different story. In the book, "willenhall" is used 504 times and "wolverhampton" 216, far more than any other town on the list, so the raw method lists them next to almost every place name for the same reason it lists "the". Eleven of its fifteen hits are those two words. PPMI finds a wider mix of genuine town pairs, such as "darlaston" beside "wednesbury". Checking what sits behind a score, and not only the score, is the habit this project is built to teach.

### Ages 8 to 11

Play odd one out with word cards, then explain in a sentence what the others share.

### Ages 11 to 15

Count word neighbours in Python and list the most common company a word keeps.

### Ages 15 and up

Build PPMI vectors, rank neighbours by cosine and design a fair test of the result.

### Hackwood's text, our vectors

The book is the Project Gutenberg transcription of The Annals of Willenhall by Frederick Wm. Hackwood. The word counts, the embeddings, the similarity scores and the town test are our own work.

## What this teaches about vibe coding and AI agents

Big systems use far better embeddings, and meet the same questions.

**The Walsall embeddings beside modern AI**

| Our small embeddings | Embeddings in modern AI |
|---|---|
| Learned from one 1908 book | Learned from enormous amounts of text |
| Counts of nearby words, reweighted | Learned by training a neural network |
| Merged a surname with the word "young" | Can still link things for unintended reasons |
| Frequent words swamped the raw counts | Need weighting and care with common words |
| Checked by opening up a test score | Should be checked on examples you understand |

Embeddings sit behind a great deal of everyday AI. When an AI agent searches your notes or a document store for relevant passages, it usually compares embeddings, so the question "why did it fetch that?" often has an answer like "carpenter" beside "lock". In our vibe coding lessons, where learners describe a program and AI writes the first draft, that understanding helps them test search features instead of assuming they work. Agents are taught to older teenagers and adults once Python is in place, and Copilot Studio agent building is one-to-one only. See our [AI agents course page for UK students](/ai-agents-course-for-students-uk), or read [understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-uk).

Modern Age Coders is independent of Project Gutenberg and the Office for National Statistics. The book and the census counts come from them; the embeddings, and any errors in them, come from us.

## From word games to embeddings

School year gives us a first idea; the free lesson decides where the learner begins.

- **Years 2 to 7: How to think** Grouping, word logic and explaining a pattern clearly. [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **Years 4 to 8: Vibe coding for kids** Games and small apps built with AI help, each tested by the learner. [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev), [Python and AI for Kids](/courses/python-ai-kids-masterclass)
- **Years 9 to 13: Python and AI** Text, data and embeddings next to GCSE and A level study. [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course), [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens)
- **Adults: Retrieval and agents** Embeddings, search, language models and agents, built in Python. [Generative AI Course](/courses/complete-generative-ai-masterclass-college), [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)

## Does an AI understand what a word means?

It knows which words keep company, which is not quite the same thing.

The Walsall embeddings put "keys" beside "lock" and "brass" beside "iron", yet also put a surname beside "lock" because of one patent. Larger AI systems are much better at this, but they learn in the same spirit, from patterns of use.

A learner who has watched "young" end up next to "lock" asks a useful question of any AI result: what in the data could have produced this?

A Walsall teenager who knows how words become numbers will use AI tools with far more judgement, and that is a strong reason to learn to code in 2026. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## Brownhills to Willenhall, all online

A computer and a reliable connection are all a Walsall household needs.

- **Hands on the keyboard** Learners write, prompt and run their own programs, with the tutor following their screen and asking questions as they go.
- **Started at the right level** Whether in Year 4 or Year 12, a learner starts where the trial lesson shows they should, with any exam board noted.
- **Free to try** The first lesson costs nothing and ends with a suggested course.
- **Matched groups** Five to ten UK learners at about the same point share a class.
- **Two lessons weekly** No lessons in the school holidays.
- **Times that hold** Tutors adjust when UK clocks change, so the lesson hour does not move.

**Why lessons run online** Five learners at one stage, all free at the same hour, rarely live on the same side of a borough. Online they can share a lesson wherever they are.

## Walsall fees

Walsall is charged our international rate, which applies in every country except India.

- First class: USD 0. A full opening lesson free of charge, then a course suggestion.
- Group tuition: USD 100 a month. Around eight live small-group lessons each month.
- Private tuition: USD 150 a month. Around eight live one-to-one lessons each month.

Our fees are set in US dollars, not pounds. You are invoiced only after the free lesson has fixed a course and a weekly slot, and the pricing page explains breaks, absences and changing format.

## Walsall questions

### What is the population of Walsall?

At the 2021 census the Walsall built-up area had 70,775 people and the borough 284,124 usual residents, according to the ONS.

### Do your coding and AI classes cover Walsall?

Yes. Every lesson is live online, so learners from 6 to 67 anywhere in the borough can join.

### Can Walsall learners study vibe coding?

Yes, children, teenagers and adults, always planning first and testing the code an AI produces.

### Do you teach AI agents?

Yes, once a learner has some Python, usually from the later teenage years. Copilot Studio agents are taught one-to-one only.

### What is the embeddings project?

Learners turn Hackwood's Annals of Willenhall into word vectors, find each word's nearest neighbours and test what the vectors really captured.

### Are there face-to-face lessons?

No. We teach live online only.

### Do you support GCSE and A level students?

Yes, in computer science and maths, aiming at real understanding without promising grades.

### What age range do you teach?

Learners aged 6 to 67.

### How much do lessons cost?

Lesson one is free. After it, groups are USD 100 per month and one-to-one lessons USD 150 per month.

### Are there lessons in the school holidays?

No, lessons stop for them. Just tell us the dates.

## More pages across the West Midlands

Neighbouring [Wolverhampton](/best-coding-class-in-wolverhampton) and [West Bromwich](/vibe-coding-and-ai-agents-classes-in-west-bromwich) each have a page with a different project, and families aiming at grammar school places can see [11 plus maths tuition for Wolverhampton and Walsall](/11-plus-maths-tuition-wolverhampton-and-walsall). [Birmingham](/coding-classes-in-birmingham) is covered too, and our [United Kingdom hub](/coding-classes-in-united-kingdom) links to every other area.

## Contact

Book the free class on [https://learn.modernagecoders.com/best-coding-and-ai-classes-in-walsall](https://learn.modernagecoders.com/best-coding-and-ai-classes-in-walsall#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
