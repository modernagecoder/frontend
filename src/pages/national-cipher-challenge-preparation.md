---
title: "National Cipher Challenge Preparation | Ten Challenges, A and B"
description: "Preparing for the National Cipher Challenge: ten challenges from September to January, who can win prizes, how accuracy is scored and why you write your own tools."
canonical: https://learn.modernagecoders.com/national-cipher-challenge-preparation
source: src/pages/national-cipher-challenge-preparation.html
---
> The National Cipher Challenge is run from the University of Southampton and runs from "September 2026 - January 2027", with the prizegiving "at Bletchley Park on March 10th". There are ten challenges, each in two parts, A and B. "The competition is open to anyone but only individuals in full time school level education in the UK and Channel Islands qualify for prizes", and "entries may be received from individuals or from teams", which "may be of any size". Scoring uses the accuracy of an entrant's strongest submission for a challenge and the order in which submissions arrive, with accuracy measured by the Damerau-Levenshtein metric, and the organiser states plainly that "accuracy is more important than speed". Entrants may write their own software and may not use online deciphering tools or AI. We teach the programming that makes your own tools possible. The first class is free; a group place is USD 100 a month and one-to-one teaching USD 150.

[Home](/) / [Courses](/courses) / [UK competitions calendar](/uk-coding-maths-and-ai-competitions-calendar) / National Cipher Challenge

United Kingdom · School-level education · September 2026 to January 2027

# National Cipher Challenge preparation

Most competitions tell you what you may not bring into the room. The National Cipher Challenge does something rarer: it tells you what to build. Entrants may use spreadsheets, text editors and the organiser's own tools, and "any software that you write yourself" &mdash; and they may not use deciphering tools found elsewhere online, or an AI to break a message or to write the software that breaks it. That single rule turns a puzzle competition into a programming one, and it is the reason this is such a rewarding way for a curious fourteen-year-old to spend an autumn term.

At a glance: Organiser: University of Southampton; Runs: September 2026 to January 2027; Challenges: Ten, each in parts A and B; Prizes open to: School-level education, UK and Channel Islands; Teams: Any size, or enter alone; Scored on: Accuracy first, then order received; AI: Not permitted, on pain of disqualification; Prizegiving: Bletchley Park, 10 March. Rated 4.9 across 547 Google reviews.

## Three courses for a cipher breaker

The competition is won by whoever can turn an idea into a working script the same evening.

- [Python from start to finish](/courses/python-complete-masterclass-teens): The language almost every entrant uses: strings, counting, files and the loops that try every possibility.
- [Python and AI for kids](/courses/python-ai-kids-masterclass): For a younger entrant meeting typed code for the first time this autumn.
- [Algorithms and data structures](/courses/problem-solving-dsa-masterclass-teens): For the later challenges, where a brute-force search has to be pruned before it finishes this century.

## Ten challenges, two parts each, one autumn term

Facts read at the organiser's own pages on 20 September 2026.

**The National Cipher Challenge as its organiser describes it**

| Part | What the organiser says | What it means for an entrant |
|---|---|---|
| Who runs it | The University of Southampton | An academic competition, not a commercial one |
| When | "September 2026 - January 2027" | A whole term, with challenges released across it |
| How many | Ten challenges, each in two parts, A and B | Part B is the harder half of each pair |
| Who can enter | "The competition is open to anyone but only individuals in full time school level education in the UK and Channel Islands qualify for prizes" | Anyone may play; prizes are for school-age entrants here |
| Alone or together | "Entries may be received from individuals or from teams. The teams may be of any size" | A club, a class or one pupil at a kitchen table |
| Adults | A teachers and alumni leaderboard exists for entrants who do not qualify for prizes | Parents and teachers can play without muddying the school table |
| The end | "Prizegiving at Bletchley Park on March 10th" | Gold and silver medals, with certificates for participants |

A whole term is the feature. Unlike almost everything else on our [competitions calendar](/uk-coding-maths-and-ai-competitions-calendar), this is not an afternoon in a hall: challenges arrive through the autumn, and a pupil comes back to them across weeks. That suits a different sort of learner entirely, including several who do badly under a clock.

It also means a school club has something to do every week from September, which is why so many computing departments build a lunchtime club around it.

Teams of any size is worth reading twice. A pupil can enter alone, with a friend, or as part of a whole class, and the organiser only reserves the right to limit how many names appear on the leaderboard. Nobody has to find three other people first.

The prize fund is published by the organiser in pounds and we do not print it, as we do not print prices in two currencies anywhere. It is on the organiser's own site.

Sources: [the National Cipher Challenge](https://www.cipherchallenge.org/) and its [rules](https://www.cipherchallenge.org/rules/), read 20 September 2026. Modern Age Coders is not connected with the University of Southampton or the challenge.

## Write your own tool, because the rules say so

The tools rule is the most interesting sentence any UK competition publishes, and it deserves quoting in full.

"You may use spreadsheets and text editors to help you tackle the challenges and any software we provide on the Official BOSS Deciphering Tools page. You can also use any software that you write yourself. You should not use deciphering tools you find elsewhere on the web and nor should you use AI to decipher messages or to write software to do so. This can result in disqualification."

Read it as an instruction rather than a restriction. The organiser has drawn a line around exactly one kind of help: the kind you built. That makes the National Cipher Challenge, in practice, a programming competition with a historical costume on, and it is the only UK competition we know of that states an AI rule this plainly.

It is also a rule with teeth, since it names disqualification. A pupil who pastes a message into a chatbot has not taken a shortcut; they have left the competition.

The good news is that a first useful tool is about fifteen lines long. Counting letters is enough to break the earliest challenges, and a pupil who writes that counter themselves has learned more in an evening than a term of watching videos would give them.

Below is one we wrote to show what "your own tool" actually means at the start. Nothing here comes from a past challenge: the sentence is ours.

**Our run of 20 September 2026: a sentence we wrote, shifted seven places, and a counter**

| Step | What we did | What came back |
|---|---|---|
| 1. Make a message | Took a sentence of our own and shifted every letter seven places along the alphabet | The ciphertext begins "aol xbhspaf vm h jshzz" |
| 2. Count the letters | Fifteen lines of Python counting how often each letter appears | L 15, H 15, A 13, V 11, S 10 |
| 3. Compare with English | Scored all 26 possible shifts against ordinary English letter frequencies | Shift 7 fits far better than any other |
| 4. Undo it | Shifted back by seven | "the quality of a class is decided by the teacher in the room" |

### Why counting works

A shift cipher moves every letter by the same amount, so the shape of the letter frequencies survives. E is still the commonest letter; it is just wearing a different hat.

### Why the computer helps

Trying 26 shifts by hand is twenty minutes of tedium. Trying them in code takes a second and can be reused on every message for the rest of the competition.

### Where it stops working

The later challenges use ciphers that flatten the frequencies deliberately. That is the point at which an entrant has to learn something new, which is the whole design.

The sentence, the shift and the letter counts are ours, produced on 20 September 2026. No challenge text is reproduced anywhere on this page; the organiser publishes its own archive of past challenges.

## Nearly right still counts, and the organiser says so

The scoring rules are unusual, and understanding them changes what an entrant does at eleven o'clock at night.

**What earns points, from the organiser's rules**

| Element | How it works | What follows |
|---|---|---|
| Accuracy | Points reflect "the accuracy of your best submission for that challenge", measured by the Damerau-Levenshtein metric | A decryption with a few wrong letters still scores; it is not all or nothing |
| Speed | "Time points will be based on a schedule published alongside the challenge" | Early submissions earn more, but not at any cost |
| The trade-off | "Accuracy is more important than speed" | Do not send a half-broken message to beat a clock |
| Multiple attempts | The score reflects the strongest attempt an entrant sends for that challenge | Send an improvement when you have one |
| Recognition | Gold and silver medals at Bletchley Park, certificates for participants, a leaderboard for schools | Most entrants finish with a certificate and a new skill |

The accuracy metric is the part worth explaining to a pupil. It measures how far your text is from the true plaintext, counting insertions, deletions, substitutions and swapped neighbours. A message that is ninety per cent deciphered scores far more than nothing, which means an entrant who is stuck should still submit what they have.

That is the opposite of the instinct most pupils bring from school exams, where an incomplete answer feels like an admission. Here it is a score.

The rule that accuracy beats speed also settles the commonest argument in a school club: whether to submit now or check first. Check first. The schedule rewards being early, and the organiser has said in as many words which matters more.

For a pupil who enjoys the code more than the ciphers, the [British Informatics Olympiad](/british-informatics-olympiad-preparation) in December and January is a natural companion, and it runs in the same weeks.

## Four rungs from counting letters to breaking something hard

Each rung is a tool the entrant has written and can run again next week.

**The toolkit, built one challenge at a time**

| Stage | Rung | The tool at the end of it |
|---|---|---|
| First week | 1. Count and shift | A letter counter and a script that tries all 26 shifts |
| Early autumn | 2. Substitution | A frequency table, a guessing loop and a way to print partial decryptions |
| Mid autumn | 3. Transposition | Tools that rearrange rather than replace, and a way to test a guess quickly |
| Late autumn | 4. Search that stops early | A program that prunes the possibilities instead of trying all of them |

### If the term has started

Write the letter counter tonight. Everything else in the competition is built on top of it, and it is fifteen lines.
Submit partial answers. The accuracy metric means a nearly-right decryption scores, and waiting for perfection scores nothing.

### What this leads to

Every tool an entrant writes is ordinary programming: counting, searching, testing. It is the most thoroughly disguised introduction to real software we know.
The [competitions calendar](/uk-coding-maths-and-ai-competitions-calendar) lists everything else open to a UK student this year.

## Courses for an entrant who wants to build the tools

Sorted by what a student can already write alone, with the syllabus on every card.

### First programs

Ages 9 to 13

- [Python and AI for kids](/courses/python-ai-kids-masterclass): A first typed language, taught patiently.
- [Maths through coding](/courses/maths-through-coding): Counting, patterns and why a method works.
- [Scratch for kids](/courses/scratch-programming-complete-course): The logic, before the typing.

### Real Python

Ages 13 to 18

- [Python from start to finish](/courses/python-complete-masterclass-teens): Strings, files, loops and functions, to fluency.
- [Algorithms and data structures](/courses/problem-solving-dsa-masterclass-teens): Searching and pruning, for the later challenges.
- [Competitive programming](/courses/competitive-programming-for-teens-course): Writing correct code quickly, under pressure.

### Alongside school

Qualifications

- [GCSE Computer Science](/courses/gcse-computer-science-course): Taught to the board the school uses.
- [Cambridge A Level 9618](/courses/cambridge-a-level-computer-science-9618-course): For international and independent schools.
- [Java for teens](/courses/java-programming-masterclass-for-teens): For students whose school teaches Java.

### Further afield

Where the curiosity goes next

- [AI and machine learning for teens](/courses/ai-ml-masterclass-teens): Understanding the tools the rules forbid here.
- [Data science with Python](/courses/data-science-course-for-teens-python-data): Frequencies and distributions, on real data.
- [Full stack web development](/courses/full-stack-web-development-teens-masterclass): For students who would rather build than break.

## Weekly Python, aimed at tools a student can keep

Lessons are live on video from India, five and a half hours ahead of the UK in winter and four and a half in summer, at a time fixed in UK time.

- **Weekday evening** The usual slot during the autumn term.
- **Weekend morning** For a longer session building one tool properly.
- **Half term** When several challenges are open at once.

- **Tools, not exercises** Every lesson leaves the student with a script they can run again on the next challenge.
- **We do not touch the challenges** We teach programming. We do not decipher a live challenge message or help with one, and we say so if asked.
- **Five to ten students** Enough for two approaches to be compared, small enough for every script to be read.
- **Our own examples** Written by us. The organiser publishes an archive of past challenges for the real thing.
- **One to one when useful** For a student well ahead of their year, or one building something specific.
- **No AI shortcuts** The competition forbids AI for this work, and we teach accordingly.

## Fees

One monthly rate in US dollars for families outside India, with nothing to pay to register and no minimum term.

- Free first class: USD 0. A full lesson building something. A straight read on the level. No card details taken.
- Group batch: USD 100 a month. Five to ten students at one level. The same teacher every week. Code read line by line. A certificate at the end.
- One to one: USD 150 a month. A teacher working with one student. Shaped around what they are building. Useful when a group hour will not fit.

## What students and parents ask

### Who runs the National Cipher Challenge?

The University of Southampton. The 2026-27 competition runs from September 2026 to January 2027, with prizegiving at Bletchley Park on 10 March.

### Who can enter and who can win?

The organiser says the competition is open to anyone, but only individuals in full-time school-level education in the UK and Channel Islands qualify for prizes. There is a separate leaderboard for teachers and alumni.

### Can my child enter alone?

Yes. Entries may come from individuals or from teams of any size, and the organiser only reserves the right to limit how many team members appear on the leaderboard.

### How many challenges are there?

Ten, each in two parts, A and B, released across the autumn term rather than sat in a single session.

### Is AI allowed?

No. The rules say plainly that you should not use deciphering tools found elsewhere on the web, nor use AI to decipher messages or to write software to do so, and that this can result in disqualification.

### What tools are allowed?

Spreadsheets, text editors, the software on the organiser's Official BOSS Deciphering Tools page, and any software the entrant writes themselves.

### How is it scored?

On the accuracy of an entrant's strongest submission for each challenge and the order in which submissions are received. Accuracy is measured with the Damerau-Levenshtein metric and time points come from a published schedule, and the organiser states that accuracy is more important than speed.

### Should we submit a partial decryption?

Yes. Because accuracy is measured as a distance from the true text rather than as right or wrong, a message that is mostly deciphered still scores.

### What is the first tool to build?

A letter counter. Count how often each letter appears in the ciphertext, compare with ordinary English frequencies, and try all 26 shifts. It is about fifteen lines of Python and everything later is built on top of it.

### Do you help with the live challenges?

No. We teach programming, and we do not decipher or assist with a live challenge message. Doing so would be against the competition's rules and against how we teach.

## Other contests in the same term

- [British Informatics Olympiad](/british-informatics-olympiad-preparation): Sat in school in December and January.
- [Perse Coding Team Challenge](/perse-coding-team-challenge-preparation): Teams, hidden tests, January and March.
- [UK Bebras Challenge](/bebras-computational-thinking-challenge-practice-uk): The November challenge with no programming in it.
- [UK competitions calendar 2026-27](/uk-coding-maths-and-ai-competitions-calendar): Dates for every contest, checked with the people who run them.
- [Coding classes in the UK](/coding-classes-in-united-kingdom): The four school systems, and every UK page.
- [GCSE Computer Science tutoring](/uk-gcse-computer-science-tutoring): The qualification most entrants are working towards.

## Contact

Book the free first class at [https://learn.modernagecoders.com/national-cipher-challenge-preparation](https://learn.modernagecoders.com/national-cipher-challenge-preparation#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email contact@modernagecoders.com.
