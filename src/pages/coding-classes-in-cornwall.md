---
title: "Coding Classes in Cornwall | Live Online, Ages 6 to 67"
description: "Live online coding, Python, algorithms and maths classes across Cornwall and Scilly, from Newquay, St Austell and Falmouth to Truro, Camborne, Penzance and Bude."
canonical: https://learn.modernagecoders.com/coding-classes-in-cornwall
source: src/pages/coding-classes-in-cornwall.html
---
> Live online coding, Python, algorithms and maths classes across Cornwall and Scilly, from Newquay, St Austell and Falmouth to Truro, Camborne, Penzance and Bude.

Skip to contentCourses for Cornwall

## Four ways Cornish learners begin

A seven-year-old in Hayle who makes up secret codes, a Year 6 in Helston who has just visited the Lizard, a Year 10 in Penryn who enjoys hard puzzles, and a parent in Liskeard retraining for remote work. Each begins with a free lesson.

[![Problem Solving and Computational Thinking for Kids course thumbnail](/images/problem-solving-kids.webp)Ages 7 to 12Problem Solving and Computational Thinking for KidsComputational thinking and logic puzzles for children, including codes, patterns and rules.See the syllabus](/courses/problem-solving-and-computational-thinking-for-kids)[![Python and AI for Kids course thumbnail](/images/python-kids.webp)Ages 10 to 13Python and AI for KidsFirst typed Python, where a dictionary turns letters into dots and dashes and back again.See the syllabus](/courses/python-ai-kids-masterclass)[![Competitive Programming for Teens course thumbnail](/images/competitive-programming-teens.webp)Ages 13 to 18Competitive Programming for TeensAlgorithms and contest technique in Python or C++, with recursion, backtracking and dynamic programming.See the syllabus](/courses/competitive-programming-for-teens-course)[![Python Masterclass course thumbnail](/images/python-college.webp)AdultsPython MasterclassPython from nothing for adults, through to object-oriented design, files and exceptions.See the syllabus](/courses/python-programming-masterclass-zero-to-advanced-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Cornwall in figures

## 572,358 people, twenty-one towns, and none of them large

Head counts for the two councils are Census 2021 figures published on Nomis. For the towns we list the ONS built-up areas and confirmed each one against small-area census counts we summed ourselves.

| Council | Usual residents | Largest places |
| --- | --- | --- |
| Cornwall Council | 570,305 | Newquay, St Austell, Falmouth, Truro, Camborne, Bodmin, Redruth |
| Council of the Isles of Scilly | 2,053 | St Mary's and the off-islands |

Most counties this size have a town of fifty or a hundred thousand at their heart. Cornwall does not. Its four biggest built-up areas, Newquay, St Austell, Falmouth and Truro, each hold between about 23,000 and 24,500 people, and the next dozen are smaller still. For a teenager keen on programming, that often means the nearest club with others at their level is an hour away, and on the Isles of Scilly it may be across the sea. A class that comes through the laptop makes the map irrelevant.

| Town | Residents | Town | Residents |
| --- | --- | --- | --- |
| Newquay | 24,545 | Liskeard | 10,900 |
| St Austell | 24,360 | Hayle | 9,040 |
| Falmouth | 24,070 | Pool and Illogan | 8,585 |
| Truro | 23,060 | Launceston | 8,425 |
| Camborne | 20,450 | Bude | 7,350 |
| Bodmin | 16,910 | Torpoint | 7,160 |
| Redruth | 15,455 | St Blazey | 6,575 |
| Saltash | 15,435 | Wadebridge | 5,625 |
| Penzance | 14,960 | St Ives | 5,410 |
| Helston | 11,360 | Looe | 5,310 |
| Penryn | 11,195 |   |   |

Every row matches our own output-area count to within rounding, and every town lies wholly inside Cornwall. The Isles of Scilly have no built-up area over five thousand at all. We tried to read Cornwall Council's 2026-27 term dates and the address returned "not found", so we print none; lesson breaks are agreed with each family around the dates their school gives.

The Cornwall project

## Why Morse needs its silences, counted

The Poldhu story, the international Morse timing rules, and a program that counts every possible misreading.

The ITU's Morse recommendation sets the timing precisely: a dot is one unit, and "A dash is equal to three dots"; the gap inside a letter is one unit, between letters three, between words seven. The learner first writes an encoder and uses those rules to time every letter. E, a single dot, lasts one unit. J, Q and Y each last thirteen. S lasts five units with only three units of key-down time, while O, three dashes, lasts eleven with nine units of key-down. That difference is exactly the wear on Poldhu's switches that the Marconi Centre describes.

| Word | Morse with no letter gaps | Possible readings | Work without memory |
| --- | --- | --- | --- |
| SOS | ...---... | 192 | 400 calls |
| MARCONI | --.-.-.-.-.----... | 59,364 | 123,808 calls |
| POLDHU | .--.---.-..-........- | 524,361 | 1,089,674 calls |
| CORNWALL | -.-.---.-.-..--.-.-...-.. | 6,138,768 | 12,759,484 calls |

Morse is not a prefix-free code: the code for E is the start of the code for S, and S is the start of H. So when the three-unit gaps between letters disappear, a stream of dots and dashes can be carved up in many different ways, each giving valid letters. The learner writes a recursive function that tries every way to take the first letter and then counts the readings of what is left. For CORNWALL there are 6,138,768 of them. The gaps are not decoration. They are the information that makes Morse readable at all.

The last column is the programming lesson. The plain recursive count for CORNWALL makes 12,759,484 function calls, because it keeps re-solving the same tail of the message. Add a memory, so that each tail's answer is stored the first time and simply looked up after that, and the program meets only 26 distinct subproblems, one for each position in the 25-element signal plus the empty end. Same answer, a tiny fraction of the work. That trick, memoisation, turns up everywhere from spell checkers to route planners.

### Ages 10 to 13

Write a Morse encoder with a Python dictionary, send your name, then time each letter using the dot, dash and gap rules.

### Ages 13 to 16

Write the recursive reading counter, reproduce 192 for SOS, and add a counter to see how many calls it makes for longer words.

### Ages 16 and up

Add memoisation, compare call counts, and prove why the memoised version does work proportional to the length of the signal.

### Being fair to the choice of S

Our own check shows S is only one flipped, missing or extra element away from nine other letters, including I, H and U, so it is not the most distinctive letter in every sense. The Marconi Centre's reasons were specific: switch wear from dashes, and static that ran dots and dashes together. An engineering choice is robust against the failures its designers expected, and a good learner asks which failures those were.

Why Poldhu

## Three dots from the Lizard to Newfoundland

The Cornwall link, from the Marconi Centre at Poldhu, run by the Poldhu Amateur Radio Club on behalf of the National Trust.

| Topic | What the centre says |
| --- | --- |
| The site | Bought in 1900; built between October 1900 and January 1901. |
| The signal | Poldhu was to send the Morse letter S, dot dot dot, daily from 3.00 pm to 6.00 pm GMT, 11.30 am to 2.30 pm in St John's. |
| Why S | The switches could not stand the wear of long dashes, and static tended to run dots and dashes together. |
| The day | On 12 December 1901 the three dots were heard at Signal Hill, St John's, Newfoundland. |
| The transmitter | Roughly 13 kW, on a wavelength usually estimated at 366 metres. |

The centre points out that many people then believed radio waves could not follow the curve of the Earth, and that Poldhu's three dots proved otherwise. For a learner, the equally striking fact is how little was sent. One letter, repeated for hours, chosen for how it would survive the equipment and the weather. Choosing a representation that survives the conditions it will meet is the core of designing any code, from Morse to a QR code to a file format.

We are not connected with the Marconi Centre, the Poldhu Amateur Radio Club, the National Trust, the ITU or Cornwall Council, and should not be taken to be. They supplied the history and the timing rules; the counting, and any slip in it, is our own.

Nearby pages

[Truro](/best-coding-class-in-truro) has a page of its own about Cornish place names, [Plymouth](/best-coding-class-in-plymouth) is just over the Tamar, and the [UK hub](/coding-classes-in-united-kingdom) links everything else.

Levels

## From secret codes to programs that remember

The free lesson decides where to start. Year group is a guide; ability decides.

Ages 6 to 10

### Codes and patterns

Scratch and puzzle projects that swap letters for symbols, where children first build a code and break it.

[Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids)[Scratch Coding for Kids](/courses/scratch-programming-complete-course)Ages 10 to 13

### Dictionaries and strings

Python that translates text both ways, and the discovery that a program can check its own translations.

[Python and AI for Kids](/courses/python-ai-kids-masterclass)[Coding for Kids](/courses/kids-coding-blocks-masterclass)Ages 13 to 18

### Recursion and memory

Recursive functions, dynamic programming and the habit of counting work before and after an optimisation.

[Competitive Programming for Teens](/courses/competitive-programming-for-teens-course)[Problem Solving for Teens](/courses/problem-solving-dsa-masterclass-teens)Ages 18 to 67

### Python for real tasks

Adults learn Python properly, with files, text processing and the efficiency ideas that make scripts scale.

[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)[Data Structures & Algorithms Course](/courses/data-structures-algorithms-masterclass-college)AI and old codes

## An AI can decode Morse instantly. Would it notice when the gaps are missing?

It will usually pick one reading and present it confidently.

Give a chatbot a string of dots and dashes and it will translate it. If the spacing is damaged, it will still produce an answer, usually the most familiar-looking word, without saying that the same signal has 192 or six million valid readings. That is the general risk with generated answers to ambiguous input: one plausible interpretation is returned, and the ambiguity disappears from view.

A Cornish student who has counted the readings of CORNWALL knows to ask whether the input actually determines the output, and how many alternatives there are. That question matters well beyond Morse, in speech recognition, handwriting, search queries and every AI system that turns messy input into tidy text.

So a Cornwall teenager should learn to code in 2026 to recognise when an answer only looks certain, a lesson that goes back to three dots heard off Newfoundland. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

Practicalities

## Bude to Penzance, and St Mary's too

Cornwall is long and its towns are far apart. An online class treats them all as next door.

### Taught at home

A bedroom in Wadebridge, a kitchen in Looe, a table in St Ives. The learner types; the teacher watches the same screen and steers.

### School terms you recognise

Year groups, GCSE options and A levels are called what Cornish schools call them, and teaching is in English.

### A free lesson first

A proper lesson with real work, then a straight recommendation. There is no card to enter.

### A group that fits

Between five and ten learners who can already do roughly what you can, gathered from far and wide so that one exists at your level.

### Term time, your way

Two lessons a week suits most learners, stopping when your own school stops, whoever sets its dates.

### UK time, clearly

Teachers work on India time, 4.5 hours ahead of UK summer time and 5.5 hours ahead of Greenwich Mean Time. We book everything in UK time.

Why groups are formed by level

With no town above 25,000 and many small ones, a class built around one place would rarely fill at any single level. Level-based groups let a Bodmin learner and a Scilly learner share a class.

Fees

## Fees in Cornwall

The same prices for every Cornish town, the islands included, and every country except India.

First class**USD 0**

A full lesson of real work, ending with a recommended level and course.

Group tuition**USD 100**

About eight lessons a month, in a group of fifteen to twenty at the same level.

Private tuition**USD 150**

About eight lessons a month, one teacher for one learner.

Outside India, prices are always quoted in US dollars, never pounds. No money changes hands until after the free lesson, when the course and a weekly time are agreed; how pauses, missed lessons and moves between group and private places work is explained on the pricing page.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20please%20could%20we%20have%20a%20free%20lesson%20for%20a%20learner%20in%20Cornwall%3F)Reviews

## From families, on Google

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

## Your free first lesson

All we ask for is an age or school year, and something the learner enjoys. The first lesson could be a secret-code puzzle, a first Python Morse translator, or the reading counter on this page.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Cornwall one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20please%20could%20we%20have%20a%20free%20lesson%20for%20a%20learner%20in%20Cornwall%3F)

Submitted details are used for placement and follow-up.

FAQ

## Cornwall questions

The county, the Poldhu project and how lessons run.

### How many people live in Cornwall?

Cornwall and the Isles of Scilly had 572,358 usual residents at the 2021 Census, from ONS figures on Nomis: 570,305 in Cornwall and 2,053 on the Isles of Scilly.

### What is the largest town in Cornwall?

By ONS built-up area, Newquay at 24,545, just ahead of St Austell at 24,360, Falmouth at 24,070 and Truro at 23,060. No Cornish town reaches 25,000.

### What is the Morse project?

Learners build a Morse encoder using the ITU timing rules, then count how many ways a word could be read if the gaps between letters were lost. CORNWALL has 6,138,768 readings, found with memoised recursion.

### Why was the letter S sent from Poldhu?

The Marconi Centre says the switches at Poldhu could not stand the wear of long dashes, and static tended to run dots and dashes together, so three dots were the easiest signal to pick out.

### When was the Poldhu signal received?

On 12 December 1901 at Signal Hill, St John's, Newfoundland. Poldhu had been told to send the letter S daily from 3.00 pm to 6.00 pm GMT.

### Is there a classroom anywhere in Cornwall?

No. All lessons are live online, so a learner in Launceston and one in Penzance share a class without travelling.

### What ages do you teach?

From six to sixty-seven. Puzzles and Scratch for young children, typed Python from about ten, algorithms and AI for teenagers, and Python or data routes for adults. The free lesson places each learner.

### Do you teach algorithms and dynamic programming?

Yes. The teen competitive programming course covers recursion, backtracking, graphs and dynamic programming in Python or C++.

### How much are lessons?

Nothing for the first. Continuing costs USD 100 a month in a small group or USD 150 a month one to one, and there is neither a sign-up charge nor a minimum commitment.

### Can learners on the Isles of Scilly join?

Yes. Lessons need only a laptop and an internet connection, so the islands are no different from the mainland.

Across the UK

## Pages beyond the Tamar

[Truro](/best-coding-class-in-truro) has its own page, and [Plymouth](/best-coding-class-in-plymouth) is the nearest city over the border. Other county pages include [Cheshire](/coding-classes-in-cheshire) and [Kent](/coding-classes-in-kent), and the [UK hub](/coding-classes-in-united-kingdom) has the rest.

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20please%20could%20we%20have%20a%20free%20lesson%20for%20a%20learner%20in%20Cornwall%3F)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/coding-classes-in-cornwall*
