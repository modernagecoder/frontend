---
title: "Online Coding and Python Classes in Hornsby, Sydney"
description: "Live online coding and Python classes for Hornsby Shire children, teenagers and adults, taught by real teachers in small groups or one to one. First lesson free."
canonical: https://learn.modernagecoders.com/online-coding-and-python-classes-in-hornsby-sydney
source: src/pages/online-coding-and-python-classes-in-hornsby-sydney.html
---
> Live online lessons in which a teacher writes Python with each Hornsby learner, from Scratch for younger children to strings, searching and real data for teenagers and adults. The 2021 Census counted 151,811 people in the Hornsby Shire council area, with a median age of 41. Classes run over video, one to one or in a small group at one level, and the opening lesson is free.

[Home](/) / [Australia](/coding-classes-in-australia) / [New South Wales](/coding-and-ai-classes-in-new-south-wales) / [Sydney](/best-coding-classes-in-sydney) / Hornsby

Hornsby Shire, Sydney, New South Wales / Live online

# Online coding and Python classes in Hornsby

**Where do Hornsby learners find the best online coding and Python classes?** Live online lessons in which a teacher writes Python with each Hornsby learner, from Scratch for younger children to strings, searching and real data for teenagers and adults. The 2021 Census counted 151,811 people in the Hornsby Shire council area, with a median age of 41. Classes run over video, one to one or in a small group at one level, and the opening lesson is free.

Type "E" into a search box of Hornsby's public schools and only Epping North Public School can match. Type "Pennant Hills" and two schools are still in play until the fifteenth character settles it. How many keystrokes does each of the 35 names need before it is the only possible answer? Comparing every name with every other would take 595 comparisons. Sort the list first and only neighbours matter: 34 comparisons, one for each adjacent pair, give every answer. Our Hornsby project builds that autocomplete in Python and finds that all 35 schools can be picked out in 226 keystrokes, against 881 characters for the full names.

Facts last verified 10 October 2026. Teaching is online; no Hornsby branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 15 to 20 students per group.

## Starting points for Hornsby learners of every age

All four connect to the autocomplete project. A free first lesson decides which suits, with no card needed.

- [Scratch Coding for Kids](/courses/scratch-programming-complete-course) (Ages 6 to 11): Blocks, sprites and simple lists, including a guessing game that narrows down a name letter by letter.
- [Python for Teens](/courses/python-complete-masterclass-teens) (Ages 13 to 17): Python from scratch: strings, lists, sorting and searching on real local data.
- [PCEP and PCAP Python Certification Course](/courses/pcep-pcap-python-certification-course) (Ages 15 and over): Preparation for the Python Institute certificates, with every topic written as working code first.
- [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college) (University and adult): A full Python course for adults who want to write their own search and data tools.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## An older shire of houses, degrees and teenagers

QuickStats for the Hornsby local government area from the 2021 Census, alongside New South Wales and the nation.

**Hornsby Shire, 2021 Census headline figures**

| Figure | Hornsby |
|---|---|
| Residents | 151,811 |
| Families | 42,716 |
| Private dwellings | 55,909 |
| Average household size | 2.8 |

**Hornsby next to the state and the country**

| Item | Hornsby | NSW | Australia |
|---|---|---|---|
| Median age | 41 | 39 | 38 |
| Bachelor degree or above, aged 15 and over | 44.2% (54,377) | 27.8% | 26.3% |
| Professionals among employed residents | 36.2% (27,084) | 25.8% | 24.0% |
| Residents aged 10 to 14 | 7.2% (10,958) | 6.2% | 6.2% |

### Mostly houses

35,868 occupied homes were separate houses in 2021, 69.5% of the total, a little above the state share of 65.6%.

### Teenagers at home

The Census counted 9,774 residents aged 15 to 19, 6.4% of the shire against 5.7% across New South Wales.

### Older than average

A median age of 41 makes Hornsby two years older than the state, while still home to many school-age children.

Census cells carry small deliberate random changes for privacy, so subtotals and totals do not always agree. We reproduce what the bureau published and do not invent totals by summing rows.

## How few keystrokes pick out each Hornsby school?

The NSW Department of Education lists 35 government schools in the Hornsby council area. We sorted their names and built an autocomplete that knows exactly when a typed prefix becomes unique.

**The longest prefixes shared by neighbouring names after sorting (our calculation)**

| Neighbouring names | Shared prefix | Characters |
|---|---|---|
| Pennant Hills High School, Pennant Hills Public School | Pennant Hills | 14 |
| Normanhurst Public School, Normanhurst West Public School | Normanhurst | 12 |
| Cherrybrook Public School, Cherrybrook Technology High School | Cherrybrook | 12 |
| Hornsby Heights Public School, Hornsby High School | Hornsby H | 9 |

**Keystrokes needed to make each name the only match (our calculation)**

| Measure | Result |
|---|---|
| Comparisons needed after sorting | 34 neighbour pairs, not 595 pairs |
| Total keystrokes for all 35 schools | 226, against 881 characters typed in full |
| Average keystrokes per school | 6.46, against an average name length of 25.17 |
| Names settled by a single letter | 4, including Epping North Public School |
| Hardest names | 2 Pennant Hills schools, 15 characters each |

### 1. Sort

sorted(names) puts names that share a beginning next to each other, so any name's closest rival is always one of its two neighbours.

### 2. Compare neighbours

A short loop measures the longest common prefix of each adjacent pair; os.path.commonprefix does the same in one call.

### 3. Add one

A name becomes unique one character after the longer of its two neighbour prefixes. A brute-force check over every name confirms all 35 answers.

### Why sorting is enough

If two names share their first nine characters, every name that sorts between them shares those nine characters too. So the strongest competition for any name always sits right beside it in the sorted list, and the comparisons drop from one per pair to one per neighbour. That single observation is how real autocomplete boxes, dictionaries and database indexes stay fast.

All prefixes and keystroke counts are our own, calculated from the school names exactly as the department publishes them. The project is about strings and says nothing about any school's results, enrolment or catchment.

## Small changes that teach big Python lessons

Once the autocomplete works, a few tweaks reveal traps that catch real programmers.

**Experiments on the Hornsby names list**

| Try this | What happens | Lesson |
|---|---|---|
| Type "hornsby" in lower case | 0 matches until the names are case-folded, then 5 | Normalise text before comparing it |
| Sort "Hornsby High" and "Hornsby Heights" | Heights comes first, because e sorts before i | Sorting compares characters, not words |
| Search with bisect instead of a loop | The first matching name is found in a handful of steps | Binary search on sorted text |
| Add a new school name | Only its two new neighbours need rechecking | Incremental updates |

Strings look simple and hide a lot: capital letters, spaces, punctuation and the order of characters all change results. Building something useful with them, on names a learner recognises, is one of the quickest ways to make Python feel concrete.

### Younger learners

A Scratch guessing game that keeps a list of names and removes the ones that cannot match after each letter.

### Teenagers

The full autocomplete in Python, with case-folding, bisect and a test that compares it with brute force.

### Adults

Prefix search over large lists, then the leap to tries and database indexes used in production systems.

The NSW Department of Education, Hornsby Shire Council, Transport for NSW and the statistics bureau publish this information openly and are not connected with Modern Age Coders. The sorting, prefixes and counts are the output of our own scripts.

## A school from 1850 and the busy northern interchange

More facts from the same files and the state school calendar.

### The oldest date

West Pennant Hills Public School records its first teacher in 1850, the earliest in the shire. The most recent dates belong to Cherrybrook Technology High School and Oakhill Drive Public School, both 1992.

### A name that crosses a border

Mount Kuring-gai Public School sits in the Hornsby council area, not in neighbouring Ku-ring-gai, a useful reminder that place names and council boundaries do not always line up.

### Hornsby Station

Transport for NSW recorded 289,451 Opal entries at Hornsby Station in August 2026, twenty-seventh among the stations in its monthly file.

**Term dates for 2027** NSW Eastern division schools, which include those in Sydney, begin Term 1 on Wednesday 3 February 2027 and end Term 3 on Friday 24 September 2027. Lessons can pause for the school holidays in between or keep running, as each family prefers.

## From guessing names in Scratch to indexing text in Python

The ages are suggestions; the trial lesson finds the real starting point.

- **Ages 6 to 11: Lists and guesses** Scratch projects with lists of names, letters and simple searches. [Scratch Coding for Kids](/courses/scratch-programming-complete-course), [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids)
- **Ages 12 to 15: Python strings** Sorting, slicing, comparing and searching text in Python. [Python for Teens](/courses/python-complete-masterclass-teens), [Maths Through Coding](/courses/maths-through-coding)
- **Ages 15 to 18: Algorithms on text** Binary search, prefixes and tries, timed and tested on real lists. [Problem Solving for Teens](/courses/problem-solving-dsa-masterclass-teens), [PCEP and PCAP Python Certification Course](/courses/pcep-pcap-python-certification-course)
- **University and adult: Search that scales** Indexes, data structures and search tools for large datasets at work. [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college), [Data Structures & Algorithms Course](/courses/data-structures-algorithms-masterclass-college)

## AI completes your sentences already. Why build an autocomplete in Hornsby?

Because predicting the next character is where every text AI begins, and building the simplest version shows how much it depends on the list behind it.

A language model suggesting the rest of a word is a far larger cousin of our prefix search: it narrows the possibilities with every character typed. Ask an AI assistant to write an autocomplete and it will produce one quickly, but it will rarely point out that capital letters break the match, that sorting order is about characters rather than words, or that two names sharing fourteen characters need fifteen keystrokes.

A learner who has built the Hornsby version knows to check exactly those things in any text tool, AI or otherwise. They test lower-case input, look for the near-duplicate names that cause trouble, and ask what list the suggestions are actually drawn from.

In 2026 suggestions appear before you finish typing, and the Hornsby learner who has built one understands what is being matched and what is being missed. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## Brooklyn to Epping North, one lesson

In the department's file the most northerly school in the shire is Brooklyn Public School and the most southerly is Epping North Public School, about 23 kilometres apart by latitude, and a live online class reaches both without a drive.

- **No travel** Wherever in the shire a learner lives, the lesson starts at home and the hour goes on programming rather than travelling.
- **In step with NSW** Lessons follow the NSW stages and year levels, take breaks with the state school holidays, and can support senior computing subjects.
- **A real first class** The free trial is a proper lesson; afterwards the teacher suggests a course, level and time, and nothing is billed.
- **Small, matched groups** Groups hold fifteen to twenty learners at one level, mixing Hornsby learners with others from different places.
- **Twice weekly** Two fixed lessons each week, about eight a month, with holiday pauses arranged ahead of time.
- **Teachers in India** A 5pm Hornsby lesson in summer starts at 11:30am India time, and at 12:30pm there once Sydney leaves daylight saving.

**Clock changes** Sydney starts daylight saving on Sunday 4 October 2026 and ends it on Sunday 4 April 2027, while India keeps the same time all year. Lesson times are always stated in Sydney time so nothing shifts for the family.

## Fees for Hornsby learners

Three numbers cover everything.

- First class: USD 0. The first lesson is free and ends with a recommendation.
- Group tuition: USD 100 a month. About eight group lessons a month with fifteen to twenty learners at one level.
- Private tuition: USD 150 a month. About eight private lessons a month with one teacher.

Outside India we invoice in US dollars, which means one price for the whole shire and no Hornsby-specific rates. Nothing is charged until a course and time are confirmed after the trial; the pricing page covers holidays, absences and format changes.

## Hornsby Python class questions

### How many people live in Hornsby Shire?

151,811 at the 2021 Census, according to QuickStats for the Hornsby local government area, with a median age of 41.

### What is a longest common prefix?

It is the longest run of characters that two strings share at their start. "Pennant Hills High School" and "Pennant Hills Public School" share "Pennant Hills ", fourteen characters.

### What is the Hornsby autocomplete project?

Learners sort the names of the 35 government schools in the Hornsby council area, compare each name only with its neighbours, and work out how many characters each needs before it is the only match. All 35 can be selected in 226 keystrokes.

### Why sort the names first?

After sorting, the name most similar to any given name is always next to it, so 34 neighbour comparisons replace 595 comparisons of every pair.

### Does the project judge schools?

No. It only uses the published names to practise working with text. Nothing here concerns results, enrolment or catchment areas.

### Can teenagers prepare for Python certificates?

Yes. Our certification course prepares for the Python Institute's entry and associate exams, with every topic written and tested as real code before any practice questions.

### Can primary school children learn here?

Yes, from age six. Younger children start with Scratch blocks and games, and move to typed Python when reading and typing are comfortable.

### Do you have a Hornsby centre?

No. We teach only online and have no premises in Australia. A learner needs a computer with sound and a steady internet connection; our contact number is Indian.

### How much are Python classes for Hornsby learners?

The first lesson is free. After that, a group place is USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, or USD 150 a month one to one. Course, format and time are agreed before any payment.

### What size are the groups?

Fifteen to twenty learners grouped by level and goals, not by age or suburb. One-to-one lessons are available when no group suits the required time.

## More for Hornsby learners

Neighbouring [Ku-ring-gai](/ai-and-programming-classes-in-ku-ring-gai-sydney) has its own page, as does the city-wide [Sydney guide](/best-coding-classes-in-sydney). Students heading for senior computing can read [HSC Software Engineering help](/hsc-software-engineering-help), and the [New South Wales page](/coding-and-ai-classes-in-new-south-wales) covers the state.

## Contact

Book the free class on [https://learn.modernagecoders.com/online-coding-and-python-classes-in-hornsby-sydney](https://learn.modernagecoders.com/online-coding-and-python-classes-in-hornsby-sydney#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
