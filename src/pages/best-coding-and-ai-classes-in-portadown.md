---
title: "Coding and AI Classes in Portadown | Python, Ages 6 to 67"
description: "Online coding, AI, Python and vibe coding lessons for Portadown, Seagoe, Killycomain and Mahon learners aged 6 to 67, taught live online. First lesson free."
canonical: https://learn.modernagecoders.com/best-coding-and-ai-classes-in-portadown
source: src/pages/best-coding-and-ai-classes-in-portadown.html
---
> Online coding, AI, Python and vibe coding lessons for Portadown, Seagoe, Killycomain and Mahon learners aged 6 to 67, taught live online. First lesson free.

Skip to contentPortadown course picks

## Four courses Portadown learners start with

Sorted by age, from P3 to grown-ups. The first class on any of them is live, free of charge, and booked without payment details.

[![Problem Solving and Computational Thinking for Kids course thumbnail](/images/problem-solving-kids.webp)Ages 7 to 12Problem Solving and Computational Thinking for KidsThe how-to-think course: maps, networks and deciding what "central" should mean before measuring it.See the syllabus](/courses/problem-solving-and-computational-thinking-for-kids)[![Vibe Coding for Kids course thumbnail](/images/vibe-coding-kids.webp)Ages 8 to 12Vibe Coding for KidsScratch games planned by the learner, built with AI help and tested properly.See the syllabus](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[![Python for Teens course thumbnail](/images/python-teens.webp)Ages 13 to 17Python for TeensPython from first steps to graphs and data, including the Portadown centrality project.See the syllabus](/courses/python-complete-masterclass-teens)[![Generative AI Course course thumbnail](/images/generative-ai-college.webp)Students and adultsGenerative AI CourseHow AI ranks and recommends, network data, and AI agents built in Python.See the syllabus](/courses/complete-generative-ai-masterclass-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Portadown in the census

## Portadown, Seagoe, Killycomain and Mahon

NISRA Census 2021 counts for the district electoral areas around the town and for the urban settlement they share.

| Area | Census geography | Usual residents |
| --- | --- | --- |
| Portadown | District Electoral Area | 32,926 |
| Lurgan | District Electoral Area | 38,198 |
| Craigavon | District Electoral Area | 29,188 |
| Craigavon Urban Area including Aghacommon | Settlement | 72,301 |

NISRA treats Portadown, Lurgan and Craigavon as one urban settlement, so there is no separate settlement count for Portadown; the electoral area also takes in countryside around the town. The figures come from different geographies and are never added together here. Ballyhannon, Ballyoran, Baltytum, Bocombra, Kernan, Killycomain, Mahon, Seagoe and Tavanagh are neighbourhood names placed on OpenStreetMap inside our study area. Schools here follow the Northern Ireland Curriculum, so we plan by primary class and post-primary year and help with CCEA GCSE and A level subjects. Send the holiday dates and lessons will fit round them.

### Northern Ireland pages and CCEA help

See [coding and AI classes in Northern Ireland](/coding-and-ai-classes-in-northern-ireland), [Armagh](/best-coding-class-in-armagh) and [CCEA GCSE Digital Technology help](/ccea-gcse-digital-technology-programming-help). Our reasons for teaching thinking first are on [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

The Portadown project

## Degree against closeness: which Portadown junction is really central?

Two definitions of importance, every junction measured, and a check against the map's own label.

The learner downloads OpenStreetMap data for a rectangle around Portadown and keeps every way a pedestrian may use. Joining points where a path merely bends leaves 4,504 junctions and dead ends linked by 5,625 segments. Degree is easy to count: the number of streets meeting at each junction. Closeness needs the walking distance from every junction to every other, over 20 million pairs, which Python computes with Dijkstra's algorithm on a sparse matrix; a junction's closeness is one over its average distance to all the rest.

| Measure | Result |
| --- | --- |
| Junctions where three streets meet | 2,797 |
| Dead ends (one street) | 1,200 |
| Junctions with five or six streets | 6 |
| Average walk from the most central junction | 1,620 m |
| Average walk from a typical junction | 2,440 m |
| Most central junction to the town label point | 91 m |
| Correlation between degree and closeness | 0.205 |

Closeness finds the town centre with surprising accuracy: the junction with the shortest average walk to everywhere else sits 91 m from the point OpenStreetMap uses to label Portadown, and half the network lies within 1,659 m of it. Degree tells a different story. The twenty most central junctions all have just three or four streets, while the six junctions where five or more streets meet have a median closeness rank of 1,904 out of 4,504. A rank correlation of 0.205 means that knowing how many streets meet somewhere tells you very little about how central it is.

One caution: closeness also rises with distance from the edge of our rectangle (correlation 0.777), partly because the town centre really is in the middle and partly because cutting the map makes edge junctions look remote. Moving the rectangle would shift the scores near its borders, which is why the learner reruns it before trusting the details.

### P5 to P7

Draw a small street map, count the roads at each crossing, then find the crossing closest to everywhere on average.

### Years 8 to 10

Build a little network of Portadown streets in Python and work out degree for each junction.

### Years 11 to 14

Compute closeness with Dijkstra on the full network and compare the two rankings.

### OpenStreetMap paths, our measures

Paths, streets and buildings are from OpenStreetMap and its contributors under the Open Database Licence. The rectangle, the network and every centrality figure are our own calculations, not a planning assessment.

Importance and AI

## What this teaches about vibe coding and AI agents

Behind any league table sits a choice about what counts.

| In the network project | When AI ranks things for you |
| --- | --- |
| Degree and closeness disagreed | Different definitions give different winners |
| Busiest junctions were not central | A local signal can mislead about the whole |
| Closeness found the centre within 91 m | A good measure can be checked against reality |
| Edge junctions looked remote | The boundary of the data shapes the answer |
| Correlation was only 0.205 | Two plausible scores may barely agree |

Search results, recommendations and AI assistants all rank things, and every ranking rests on a choice of what counts as important. Ask an AI to "find the most important places" and it will pick a definition without telling you. Vibe coding means the learner explains a program in plain words while an AI drafts the code; in Portadown lessons the learner also names the measure the code must use and tests the output against an outside check, the way the town label served here. AI agents that rank options for you should be asked the same question. Agents enter the course when a learner writes Python without a crutch, which for most is Year 12 onwards or adulthood, and Copilot Studio agents are covered in private lessons alone. Two pages go further: [understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-uk), and [how UK learners move on to building agents](/ai-agents-course-for-students-uk).

We are not connected with OpenStreetMap, NISRA or Armagh City, Banbridge and Craigavon Borough Council. We used only their openly published data; the network analysis and any mistakes in it are ours.

Stages

## From counting crossroads to network algorithms

Primary class or school year gives us a starting point; the free lesson confirms it.

P1 to P7

### How to think

Maps, counting and asking what a word like "central" means.

[Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids)[Scratch Coding for Kids](/courses/scratch-programming-complete-course)P5 to Year 9

### Vibe coding for kids

Games and apps planned by the learner and built with AI help.

[Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[Python and AI for Kids](/courses/python-ai-kids-masterclass)Years 10 to 14

### Python and networks

Graphs, shortest paths and rankings alongside CCEA GCSE and A level.

[Python for Teens](/courses/python-complete-masterclass-teens)[Data Structures & Algorithms Course](/courses/data-structures-algorithms-masterclass-college)Adults

### Data, AI and agents

Network data, ranking and AI agents, step by step in Python.

[Generative AI Course](/courses/complete-generative-ai-masterclass-college)[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)Networks and code

## What is closeness centrality, and how is it different from degree centrality?

Closeness centrality ranks a point by how short its average distance is to every other point in a network, while degree centrality simply counts how many links meet at that point; the first measures global reach, the second local busyness.

On Portadown's 4,504-junction walking network, the most central junction by closeness sat 91 m from the map's town label, while the six junctions with the most streets ranked a median 1,904th for closeness, with a correlation between the two measures of only 0.205.

Learners who have compared the two ask of any AI ranking: important by what definition, and has anyone checked it?

A Portadown teenager who asks which definition sits behind a ranking will not take an AI league table on trust, and writing the code yourself is the quickest way to learn that. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

How it works

## Seagoe to Tavanagh, all online

A computer with a webcam and a connection that manages video calls is all you need.

### Hands on the keys

Every keystroke is the learner's own. Watching via screen share, the tutor keeps asking what each figure tells us.

### Level from the trial

The free lesson shows where to start, and any CCEA exam is noted.

### First lesson free

We charge nothing for the opening lesson and suggest a course at the end.

### Matched classes

Fifteen to twenty learners from around the UK, grouped by stage.

### Two a week in term

Lessons stop for school holidays.

### Clock changes handled

When summer time starts or ends, the tutor adjusts and your lesson hour does not move.

Why online

Five learners at one level, free on the same evening, rarely live on the same street. Video removes the distance.

Fees

## Portadown fees

For Portadown we use the international price list, the same one that applies everywhere outside India.

First class**USD 0**

A full free lesson, then our recommendation.

Group tuition**USD 100**

About eight live group lessons a month.

Private tuition**USD 150**

About eight live one-to-one lessons a month.

County Armagh families are invoiced in US dollars; there is no pound price. The first bill follows the trial once a course and a regular slot are settled, and the pricing page explains breaks, absences and changes of format.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20could%20we%20book%20a%20free%20coding%20or%20AI%20lesson%20for%20a%20learner%20in%20Portadown%3F)Reviews

## Google reviews: what Armagh, Banbridge and Craigavon families say

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

## Book a free Portadown lesson

An age or school year and one interest are all we ask. We might open with counting roads at crossings on a map, an AI-assisted Scratch game, a first Python script, or ranking real Portadown junctions.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Portadown one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20could%20we%20book%20a%20free%20coding%20or%20AI%20lesson%20for%20a%20learner%20in%20Portadown%3F)

Submitted details are used for placement and follow-up.

FAQ

## Portadown questions

Centrality, the network project, Python, vibe coding and practical details.

### How many people live in Portadown?

NISRA's Census 2021 counts 32,926 usual residents in the Portadown District Electoral Area. The town is part of the Craigavon Urban Area settlement, 72,301 people, for which NISRA gives no separate Portadown figure.

### Are coding and AI classes available online in Portadown?

Yes, as live video lessons for ages 6 to 67 across Portadown and County Armagh.

### What is degree centrality?

The number of links meeting at a point in a network. For a street network it is how many streets join at a junction, a measure of local busyness rather than overall reach.

### How can you find the centre of a town with data?

One way is closeness centrality: find the junction with the shortest average walk to every other junction. On Portadown's mapped paths it landed 91 m from the map's town label.

### What does the Portadown project involve?

Computing degree and closeness centrality for 4,504 junctions on 272.9 km of mapped Portadown paths, then comparing the two rankings and checking for edge effects.

### Is vibe coding included?

From primary age up: learners set out what they want, then test and repair the AI's code.

### At what stage do learners build AI agents?

Once Python is secure, usually from Year 12 or as adults; Copilot Studio agents are one-to-one only.

### Do you help with CCEA GCSE and A level?

Yes, in computing and maths subjects, taught for understanding; we never promise grades.

### How much are lessons?

No fee for the trial. After that it is USD 100 per month in a class or USD 150 per month with a tutor to yourself.

### Do lessons pause in the holidays?

We break when the schools do; just pass on the dates.

Nearby

## More Northern Ireland pages

Pages with their own projects: [Lurgan](/vibe-coding-and-ai-agents-classes-in-lurgan) (an agent that plans for slips), [Armagh](/best-coding-class-in-armagh), [Newry](/best-coding-class-in-newry) and [Lisburn](/best-coding-class-in-lisburn). Further afield, start from [Northern Ireland](/coding-and-ai-classes-in-northern-ireland) or the [UK hub](/coding-classes-in-united-kingdom).

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20could%20we%20book%20a%20free%20coding%20or%20AI%20lesson%20for%20a%20learner%20in%20Portadown%3F)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/best-coding-and-ai-classes-in-portadown*
