---
title: "Online Coding and Python Classes in Edgbaston, Birmingham | AI"
description: "Live online coding, Python, AI and vibe coding lessons for Edgbaston, North Edgbaston, Lee Bank and Harborne learners aged 6 to 67. First lesson free."
canonical: https://learn.modernagecoders.com/online-coding-and-python-classes-in-edgbaston-birmingham
source: src/pages/online-coding-and-python-classes-in-edgbaston-birmingham.html
---
> Live online coding, Python, AI and vibe coding lessons for Edgbaston, North Edgbaston, Lee Bank and Harborne learners aged 6 to 67. First lesson free.

Skip to contentEdgbaston course picks

## Edgbaston courses in algorithms, Python and AI

Start from the learner's age. The opening lesson of any course is live and free, and we take no payment details for it.

[![Problem Solving and Computational Thinking for Kids course thumbnail](/images/problem-solving-kids.webp)Ages 7 to 12Problem Solving and Computational Thinking for KidsThe how-to-think course: sorting into buckets, spotting near-matches and avoiding wasted work.See the syllabus](/courses/problem-solving-and-computational-thinking-for-kids)[![Vibe Coding for Kids course thumbnail](/images/vibe-coding-kids.webp)Ages 8 to 12Vibe Coding for KidsScratch games imagined by the learner, coded with an AI and tested properly.See the syllabus](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[![Python for Teens course thumbnail](/images/python-teens.webp)Ages 13 to 17Python for TeensPython from the first program to sets, hashing and the Edgbaston duplicate finder.See the syllabus](/courses/python-complete-masterclass-teens)[![Data Structures & Algorithms Course course thumbnail](/images/dsa-college.webp)Students and adultsData Structures & Algorithms CourseHashing, sketches and algorithms that scale, in depth.See the syllabus](/courses/data-structures-algorithms-masterclass-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Edgbaston

## Edgbaston, North Edgbaston and Lee Bank

Census 2021 residents in two Birmingham wards, and places recorded in B15.

| Ward | Residents (2021) |
| --- | --- |
| Edgbaston | 18,730 |
| North Edgbaston | 22,565 |

The two wards are counted separately by the ONS, and we leave them as two figures. On postcodes.io, Edgbaston and Lee Bank are suburban areas of Birmingham in the B15 postcode district, with Harborne in B17 and Selly Park in B29. Birmingham schools follow England's national curriculum; once we know the holiday dates, lessons are timetabled to skip them.

### Birmingham, the region and our method

For the city as a whole see [coding classes in Birmingham](/coding-classes-in-birmingham), and for the county [the West Midlands](/coding-classes-in-the-west-midlands). Our reasons for teaching thinking before tools are on [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

The Edgbaston project

## Finding near-duplicate names with MinHash and locality-sensitive hashing

One list of real names, 11.7 million pairs, and a way to look at about a thousandth of them.

The learner downloads OpenStreetMap data for a rectangle of south-west Birmingham that includes Edgbaston, and collects every mapped place that has a name and is tagged as a shop, amenity, office, leisure, tourism, craft or healthcare site: 4,842 places. Each name is lower-cased, stripped of punctuation and cut into overlapping three-letter pieces called shingles. Two names are compared by their Jaccard similarity: the shingles they share divided by all the shingles either has. Comparing every pair takes 11,720,061 comparisons and 23.5 seconds in plain Python, and finds 1,901 pairs with a similarity of 0.6 or more.

MinHash replaces each set of shingles with a short signature, here 128 numbers, built so that the chance two signatures agree in any one position equals the Jaccard similarity. Locality-sensitive hashing then chops each signature into bands, and only names that match exactly on at least one whole band become candidate pairs. More rows per band means stricter matching and fewer candidates.

| Bands and rows | Candidate pairs checked | True similar pairs found |
| --- | --- | --- |
| Every pair (no hashing) | 11,720,061 | 1,901 of 1,901 |
| 64 bands of 2 | 310,693 | 1,901 (100%) |
| 32 bands of 4 | 11,152 | 1,901 (100%) |
| 16 bands of 8 | 1,820 | 1,635 (86.0%) |

With 32 bands of 4, the program examines 11,152 candidate pairs, about one in a thousand of the full set, and still finds every one of the 1,901 similar pairs; building the signatures took 4.7 seconds and the bucketing half a second. Push the setting further, to 16 bands of 8, and the candidates shrink to 1,820 but 14% of the true pairs slip through. That is the trade every user of the method has to make. Are the pairs really duplicates? Only some. Of the 1,901, just 288 are within 100 metres of each other, and 90 share the same type of place within 30 metres. Many of the rest look like branches sharing a brand name, or two features of one site such as an attraction and its car park. A similar name is evidence, not proof.

### Ages 8 to 11

Cut two shop names into three-letter chunks on paper and count how many chunks they share.

### Ages 11 to 15

Write Jaccard similarity in Python with sets and test it on pairs of real place names.

### Ages 15 and up

Build MinHash signatures and banded buckets, then tune bands and rows against the exact answer.

### OpenStreetMap names, our matching

Place names and tags are from OpenStreetMap and its contributors under the Open Database Licence. The shingling, hashing and counts are our own work; no business is named here and no pair is claimed to be a mapping error.

Similarity and AI

## What this teaches about vibe coding and AI agents

Approximate methods are how big problems get solved at all; the skill is knowing what they miss.

| In the MinHash project | When AI works with large data |
| --- | --- |
| Every pair meant 11.7 million comparisons | Brute force stops scaling quickly |
| 32 bands of 4 checked about 0.1% of pairs | A good index prunes nearly all the work |
| 16 bands of 8 missed 14% of true pairs | Faster settings trade away recall |
| Only 288 similar pairs were also close on the map | Similar is not the same as duplicate |
| The exact answer was computed once as a check | Validate an approximation before relying on it |

The same family of ideas sits underneath AI search: when a chatbot looks up relevant documents, it uses approximate nearest-neighbour indexes that, like the banded buckets here, trade a little accuracy for a great deal of speed. Vibe coding puts the learner in the role of designer while an AI writes the code; our Edgbaston learners ask it for the brute-force version as well, on a small sample, so the fast version can be checked against the truth. Agents that deduplicate or merge records on your behalf need exactly that safeguard. Learners move on to agents once their Python is fluent, most often in Years 12 and 13 or as adults, and Copilot Studio agents are one-to-one lessons only. Read [understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-uk) for the principle and [our AI agents course for UK students](/ai-agents-course-for-students-uk) for the route.

This page has no link to OpenStreetMap, the ONS, Nomis or postcodes.io beyond using their open data; the code and any errors in it are ours.

Stages

## From matching chunks to scalable algorithms

A year group tells us roughly where to start; the free lesson tells us exactly.

Years 2 to 7

### How to think

Sorting, matching and doing less work for the same answer.

[Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids)[Scratch Coding for Kids](/courses/scratch-programming-complete-course)Years 4 to 8

### Vibe coding for kids

Games and apps the learner plans and an AI helps to write.

[Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[Python and AI for Kids](/courses/python-ai-kids-masterclass)Years 9 to 13

### Python and algorithms

Sets, hashing and efficiency alongside GCSE and A level computer science.

[Python for Teens](/courses/python-complete-masterclass-teens)[Data Structures & Algorithms Course](/courses/data-structures-algorithms-masterclass-college)Adults

### Data engineering and AI

Scalable data work, search and AI agents in Python.

[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)[Generative AI Course](/courses/complete-generative-ai-masterclass-college)Python and similarity

## What is MinHash, and how does locality-sensitive hashing find similar items quickly?

MinHash turns each item into a short signature whose agreement rate estimates Jaccard similarity, and locality-sensitive hashing groups items whose signatures match on a band, so only likely matches are compared instead of every pair.

On 4,842 place names around Edgbaston, comparing every pair took 11,720,061 comparisons, while MinHash with 32 bands of 4 checked 11,152 candidates and still found all 1,901 similar pairs.

Learners who have built both ask of any fast AI search: what did it skip, and how was that checked?

Understanding the shortcut, and its price, lets Edgbaston teenagers use large-scale AI tools with their eyes open, which is what learning Python is for. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

How it works

## Edgbaston lessons, taught by video

Any reasonably modern computer with a camera will do, given internet that can carry a call.

### Learner writes, tutor asks

Code and prompts come from the student; the tutor watches the screen share and asks what each step is for.

### Level found in the trial

The free lesson shows what to teach first, and exam boards are recorded.

### Trial at no cost

The first lesson is free and ends with the course we recommend.

### Matched classes

Fifteen to twenty learners at one level, from around the UK.

### Two a week

Not in school holidays.

### Your slot stays put

UK clock changes are absorbed at our end.

Why online

Matching five learners by level and by free evening is far easier across the country than across one postcode.

Fees

## Edgbaston fees

Edgbaston learners pay the international prices we use outside India.

First class**USD 0**

A whole lesson free, then a recommendation.

Group tuition**USD 100**

About eight live lessons a month in a class.

Private tuition**USD 150**

About eight live lessons a month one-to-one.

Prices are stated in US dollars and we publish none in pounds. No invoice is raised until the trial has agreed a course and a weekly hour; the pricing page covers holidays, absences and switching format.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20could%20we%20book%20a%20free%20coding%20or%20Python%20lesson%20for%20a%20learner%20in%20Edgbaston%3F)Reviews

## Birmingham families and learners around the UK on Google

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

## Book a free Edgbaston lesson

Give us an age or school year and what the learner enjoys. A trial could be a paper matching game, a Scratch project built with AI help, a gentle start in Python, or comparing real names with sets.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Edgbaston one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20could%20we%20book%20a%20free%20coding%20or%20Python%20lesson%20for%20a%20learner%20in%20Edgbaston%3F)

Submitted details are used for placement and follow-up.

FAQ

## Edgbaston questions

MinHash, the duplicate project, Python, vibe coding and practical points.

### How many people live in Edgbaston?

Edgbaston ward had 18,730 usual residents at the 2021 census, and the separate North Edgbaston ward 22,565.

### Can I take online Python classes in Edgbaston?

Yes. Lessons are live video calls for ages 6 to 67 in Edgbaston, Harborne and the rest of Birmingham.

### What is Jaccard similarity?

The size of the overlap between two sets divided by the size of their union. Two names that share most of their three-letter chunks score close to 1.

### What is locality-sensitive hashing used for?

Finding similar items in very large collections: near-duplicate web pages, plagiarism, similar images and the nearest-neighbour search behind many AI systems.

### What does the Edgbaston project involve?

Finding near-duplicate names among 4,842 mapped places by brute force and by MinHash with banded buckets, then comparing speed and what each setting misses.

### Is vibe coding included?

Yes, at all ages: learners describe the program to an AI, then test and fix what comes back.

### When do learners reach AI agents?

When Python is fluent, most often Years 12 and 13 or adulthood; Copilot Studio agents are private lessons only.

### Do you help with GCSE and A level computer science?

Yes, and with maths, taught for understanding and with no promised grades.

### How much do lessons cost?

The trial is free. Then USD 100 a month for a class or USD 150 a month for private lessons.

### Do lessons stop in the holidays?

Yes, once you send us the dates.

Nearby

## More Birmingham pages

Neighbouring pages with their own projects: [Harborne](/ai-and-programming-classes-in-harborne-birmingham) (a mixture model of building sizes), [Moseley](/best-coding-and-ai-classes-in-moseley-birmingham), [Kings Heath](/vibe-coding-and-ai-agents-classes-in-kings-heath-birmingham) and [Birmingham](/coding-classes-in-birmingham). The [UK hub](/coding-classes-in-united-kingdom) covers the rest.

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20could%20we%20book%20a%20free%20coding%20or%20Python%20lesson%20for%20a%20learner%20in%20Edgbaston%3F)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/online-coding-and-python-classes-in-edgbaston-birmingham*
