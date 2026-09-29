---
title: "Coding and AI Classes in Southport | Python, Vibe Coding, 6-67"
description: "Online coding, AI, Python and vibe coding classes for Southport, Birkdale, Ainsdale and Formby learners aged 6 to 67, live online. First lesson free."
canonical: https://learn.modernagecoders.com/best-coding-and-ai-classes-in-southport
source: src/pages/best-coding-and-ai-classes-in-southport.html
---
> At the 2021 census, the ONS counted 94,440 people in the Southport built-up area, in a Sefton borough of 279,233 that also includes Formby and Maghull; Birkdale, Ainsdale, Churchtown and Crossens are among Southport's recorded suburbs. Any Sefton learner from 6 to 67 can study coding, AI, Python, vibe coding and maths over a live video link with our India-based tutors, as a private pupil or one of five to ten classmates of similar ability. Thinking skills come first in every course, so AI is a tool the learner understands rather than a black box. We charge nothing for the first lesson and close it with a recommended course. The Southport project opens up the very first step every chatbot takes: cutting text into tokens. Regular lessons then run at USD 100 per month in a shared class or USD 150 per month with a personal tutor.

[Home](/) / [United Kingdom](/coding-classes-in-united-kingdom) / [North West England](/coding-and-ai-classes-in-north-west-england) / Southport

Southport, Merseyside, England / Live online

# Coding and AI classes in Southport

**Where can Southport learners find the best coding and AI classes?** At the 2021 census, the ONS counted 94,440 people in the Southport built-up area, in a Sefton borough of 279,233 that also includes Formby and Maghull; Birkdale, Ainsdale, Churchtown and Crossens are among Southport's recorded suburbs. Any Sefton learner from 6 to 67 can study coding, AI, Python, vibe coding and maths over a live video link with our India-based tutors, as a private pupil or one of five to ten classmates of similar ability. Thinking skills come first in every course, so AI is a tool the learner understands rather than a black box. We charge nothing for the first lesson and close it with a recommended course. The Southport project opens up the very first step every chatbot takes: cutting text into tokens. Regular lessons then run at USD 100 per month in a shared class or USD 150 per month with a personal tutor.

Before a model like ChatGPT reads a single word of your question, a program called a tokenizer chops the text into pieces called tokens. Many AI models build their tokenizers with a method called byte-pair encoding, which learns its pieces from data by repeatedly gluing together the pair of symbols that appears most often. This project trains one from scratch in Python on every built-up area name in England, 6,406 of them, and watches it discover English place-name patterns on its own. It learns "ton" almost immediately, splits Southport neatly into "south" and "port", and then chops Ainsdale into four pieces that mean nothing at all, which is the most useful lesson of the lot.

Facts last verified 29 September 2026. Teaching is online; no Southport branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Southport courses in thinking, vibe coding and AI

Pick according to age and interest. A free live lesson begins every course, with no card taken to book it.

- [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids) (Ages 7 to 12): The how-to-think programme: word patterns, codes and spotting the pieces inside names.
- [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev) (Ages 8 to 12): Scratch word games, then apps built by describing them to an AI and testing them.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 13 to 17): How AI models read and learn, in Python, including training this tokenizer.
- [Generative AI Course](/courses/complete-generative-ai-masterclass-college) (Students and adults): Tokens, embeddings, language models and agents, explained from the inside.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Southport, Formby and Maghull

Census counts for three built-up areas in Sefton, and the suburbs recorded around Southport.

**Southport, Formby and Maghull, 2021 census counts published by the ONS**

| Built-up area | People (2021) |
|---|---|
| Southport | 94,440 |
| Formby | 22,890 |
| Maghull | 20,370 |

Each of these is a separate ONS figure, shown as published; the Sefton borough count of 279,233 comes from its own census table. Birkdale, Ainsdale, Churchtown, Crossens, Hillside, Blowick, Marshside, High Park and Woodvale are all recorded as suburban areas in Sefton. Schools here teach the national curriculum for England, so tell us the holiday weeks and lessons will skip them.

### Merseyside, the North West and how we teach

For the wider area see [coding classes in Merseyside](/coding-classes-in-merseyside) and [North West England](/coding-and-ai-classes-in-north-west-england). Our case for thinking before prompting is on [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

## How ChatGPT-style tokenizers learn: byte-pair encoding on England's town names

Train a tokenizer on 5,124 names, test it on 1,282 it has never seen, and read what its tokens do and do not capture.

The learner takes the ONS list of built-up areas in England from the 2021 census, removes the bracketed district labels, and splits each name into words. Every word starts as a row of single letters with an end-of-word marker, written here as an underscore. Byte-pair encoding then counts every pair of neighbouring symbols across all the names, glues the most common pair into a new single symbol, and repeats. Each glue step is called a merge, and the list of merges is the tokenizer. Four names in five are used for training and the rest are kept back for testing.

The first merges read like a lesson in English place names: "n" at the end of a word, then "on" at the end, then "ton" at the end, all within the first three steps. That is no accident. Of the 6,406 names, 1,049 end in "ton", far more than any other ending we counted: "ham" ends 354, "ley" 309, "ford" 201, "field" 147 and "port" just 14. Soon the tokenizer has whole endings such as "ham", "ley", "ford", "ington" and "ston" as single tokens.

**How many tokens an unseen English place name needs, on average, after each number of merges, our Python run, 29 September 2026**

| Merges learned | Tokens per unseen name |
|---|---|
| 0 (single letters and word ends) | 11.39 |
| 50 | 7.01 |
| 200 | 5.00 |
| 500 | 3.95 |

**Local names cut into tokens after 200 and after 500 merges (| separates tokens, _ ends a word)**

| Name | 200 merges | 500 merges |
|---|---|---|
| Southport | sou|th|p|or|t_ | south|port_ |
| Birkdale | bi|r|k|d|al|e_ | bir|k|dale_ |
| Ainsdale | a|in|s|d|al|e_ | a|in|s|dale_ |
| Churchtown | ch|ur|ch|t|own_ | ch|ur|ch|town_ |

More merges mean fewer, bigger tokens: an unseen name shrinks from 11.39 symbols to 3.95 tokens, which is why tokenizers exist, since shorter sequences are cheaper for a model to process. And because every single letter stays in the vocabulary, any name can still be written down, even one the tokenizer has never met. But look at the pieces. After 500 merges, Southport splits into "south" and "port", which happens to match its meaning. Ainsdale becomes "a", "in", "s" and "dale", and Churchtown "ch", "ur", "ch" and "town". The tokenizer knows nothing about meaning; it only knows which letters are common together, and a rarer word simply gets cut into more pieces.

### Ages 8 to 11

Collect local street and town names and hunt for the endings that repeat, like "ton" and "dale".

### Ages 11 to 15

Count letter pairs across a list of names in Python and make the first few merges by hand.

### Ages 15 and up

Write the full byte-pair encoder, test it on unseen names and measure tokens per name.

### ONS names, our tokenizer

The place names are from the Office for National Statistics 2021 census built-up area tables. The tokenizer, the merges, the counts and the examples are our own work, and real AI companies' tokenizers are trained on far more text.

## What this teaches about vibe coding and AI agents

What reaches the model is tokens, never your words as typed.

**From Southport's tokens to the AI tools you use**

| In the tokenizer project | In ChatGPT-style models and agents |
|---|---|
| "ton" was learned in three merges | Common patterns become single tokens |
| Ainsdale split into four pieces | Rare words and names use more tokens |
| Pieces follow frequency, not meaning | Tokens are not the same as words or ideas |
| 500 merges cut names to 3.95 tokens | Usage and limits are often counted in tokens |
| Every letter kept, so nothing is unreadable | Unusual text still works, just less efficiently |

Knowing about tokens explains several everyday puzzles with AI tools: why prices and limits are quoted in tokens, why a long local name can cost more than a common word, and one reason models sometimes stumble over spelling or counting letters, since they see chunks rather than letters. Vibe coding, describing a program and letting an AI write it, goes better once you know this: Southport learners keep their prompts plain and double-check anything the AI does letter by letter. AI agents, which read tools' output as tokens too, follow the same rules. Agent building opens up to older teens and adults with confident Python, and Copilot Studio agents are always taught privately. For the full route, visit [our agents course for students across the UK](/ai-agents-course-for-students-uk), and for our reasons, [understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-uk).

Modern Age Coders has no connection with the Office for National Statistics, postcodes.io or any AI company. Their data and ideas made this project possible; the tokenizer and any flaws in it are ours.

## From word patterns to tokenizers

The school year is our starting guess, and the free lesson confirms the real level.

- **Years 2 to 7: How to think** Word patterns, codes and careful counting. [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **Years 4 to 8: Vibe coding for kids** Word games and apps built with AI help and tested by the learner. [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev), [Python and AI for Kids](/courses/python-ai-kids-masterclass)
- **Years 9 to 13: Python and language AI** Text, tokens and simple language models alongside GCSE and A level. [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course), [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens)
- **Adults: Inside language models** Tokenizers, embeddings, models and agents, built in Python. [Generative AI Course](/courses/complete-generative-ai-masterclass-college), [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)

## What is a token in AI, and why does it matter?

A token is a chunk of text, often part of a word, that a language model reads as one unit.

In Southport's project a tokenizer trained on English place names learned "ton", "ham" and "ford" as tokens by itself, and cut rarer names such as Ainsdale into several meaningless pieces.

Learners who have built one understand why AI tools count tokens, why unusual words cost more and why letter-level questions can trip a model up.

Understanding how models read text helps Southport teenagers prompt better and catch more errors, and that makes 2026 a good year to learn coding. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## Birkdale to Churchtown, online

Bring a laptop or desktop and a broadband line fit for video calls.

- **Learners at the keyboard** Students write, prompt and run each program themselves while the tutor follows on screen and asks questions.
- **Level from the trial** A learner's first topic comes from what they show in the free session, not from their year; we log any exam board.
- **First lesson free** The opening lesson costs nothing and ends with our suggestion.
- **Matched groups** Classes bring together five to ten British learners at one stage.
- **Two a week** Paused during school holidays.
- **Stable times** Tutors shift with the UK clocks, so your lesson time holds.

**Why the classes are online** Five learners at one level, all free on the same evening, rarely live near each other. Online, they can learn side by side anyway.

## Southport fees

For Southport, as for every country bar India, our international prices apply.

- First class: USD 0. A full lesson free to start, finishing with a course suggestion.
- Group tuition: USD 100 a month. About eight live group lessons a month.
- Private tuition: USD 150 a month. About eight live private lessons a month.

We price in US dollars rather than sterling. Nothing is billed until the trial has settled a course and a lesson time, and the pricing page covers holidays away, missed sessions and switching format.

## Southport questions

### What is the population of Southport?

The ONS gives 94,440 for the Southport built-up area at the 2021 census.

### Do you offer coding and AI classes in Southport?

We do, over live video, for anyone between 6 and 67 in Southport, Formby, Maghull or elsewhere in Sefton.

### What is byte-pair encoding?

A way of building a tokenizer by repeatedly merging the most common pair of neighbouring symbols in a body of text, until common chunks become single tokens.

### What is the Southport project?

Learners train a byte-pair tokenizer on all 6,406 built-up area names in England, test it on names it has not seen and see how it cuts Southport, Birkdale and Ainsdale into tokens.

### Can Southport learners try vibe coding?

Yes, from primary age upwards: the learner decides what to make, an AI drafts it, and the learner tests it.

### Is there an AI agents course?

Python comes first, so agents usually start in the late teens or for adults; Copilot Studio work is private tuition.

### Is there a Southport classroom?

No; all teaching happens online.

### Can exam-year students get support?

GCSE and A level computer science and maths are both covered, taught for understanding; grades are not promised.

### What are the fees?

The opening lesson is free. Continuing costs USD 100 monthly in a group, or USD 150 monthly one-to-one.

### Do lessons stop for school holidays?

Yes. Send us the dates.

## More Merseyside and North West pages

[Liverpool](/best-coding-class-in-liverpool) and [Birkenhead](/best-coding-and-ai-classes-in-birkenhead) have pages and projects of their own, as does [Wigan](/online-coding-and-python-classes-in-wigan). The [UK hub](/coding-classes-in-united-kingdom) lists every area.

## Contact

Book the free class on [https://learn.modernagecoders.com/best-coding-and-ai-classes-in-southport](https://learn.modernagecoders.com/best-coding-and-ai-classes-in-southport#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
