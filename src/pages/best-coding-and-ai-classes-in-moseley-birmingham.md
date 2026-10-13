---
title: "Coding and AI Classes in Moseley, Birmingham | Python, 6 to 67"
description: "Online coding, AI, Python and vibe coding lessons for Moseley, Wake Green, Moor Green and Billesley learners aged 6 to 67, taught live. First lesson free."
canonical: https://learn.modernagecoders.com/best-coding-and-ai-classes-in-moseley-birmingham
source: src/pages/best-coding-and-ai-classes-in-moseley-birmingham.html
---
> Online coding, AI, Python and vibe coding lessons for Moseley, Wake Green, Moor Green and Billesley learners aged 6 to 67, taught live. First lesson free.

Skip to contentMoseley course picks

## Moseley courses in thinking, Python and AI

Four options by age. Each begins with a live lesson at no cost, and nothing is asked for up front.

[![Problem Solving and Computational Thinking for Kids course thumbnail](/images/problem-solving-kids.webp)Ages 7 to 12Problem Solving and Computational Thinking for KidsThe how-to-think course: grouping things sensibly and questioning a score.See the syllabus](/courses/problem-solving-and-computational-thinking-for-kids)[![Vibe Coding for Kids course thumbnail](/images/vibe-coding-kids.webp)Ages 8 to 12Vibe Coding for KidsScratch games dreamt up by the learner, typed with an AI and tested by hand.See the syllabus](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)Ages 13 to 17AI and Machine Learning for TeensMachine learning in Python, including k-means and the Moseley silhouette test.See the syllabus](/courses/ai-ml-masterclass-teens)[![Generative AI Course course thumbnail](/images/generative-ai-college.webp)Students and adultsGenerative AI CourseHow AI systems group and embed data, how to evaluate them, and agents in Python.See the syllabus](/courses/complete-generative-ai-masterclass-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Moseley

## Moseley, Wake Green, Moor Green and Billesley

The Census 2021 count for Moseley ward, and places recorded in B13.

| Area | Residents (2021) |
| --- | --- |
| Moseley ward | 21,839 |

The ward as drawn by the ONS covers 5.87 square kilometres, and that boundary is the one the project uses. Postcodes.io lists Moseley, Wake Green, Moor Green and Billesley as suburban areas of Birmingham in the B13 district, and Balsall Heath in B12. Local schools teach England's national curriculum; pass us the term dates and lessons will keep clear of the holidays.

### Birmingham, Kings Heath and our approach

There is more on [coding classes in Birmingham](/coding-classes-in-birmingham) and on [Kings Heath](/vibe-coding-and-ai-agents-classes-in-kings-heath-birmingham). Why we teach thinking before tools is explained on [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

The Moseley project

## How many clusters? K-means and the silhouette score on Moseley's shops

One map, nine clusterings, and a score that prefers the dullest of them.

The learner downloads OpenStreetMap data for south Birmingham and keeps every shop, café, restaurant, takeaway, pub and bar whose position falls inside Moseley ward: 114 places. Their positions are converted to metres and k-means is run for every number of clusters from two to ten, twenty times each from different starts. For each result the program records the silhouette score and also the total squared distance of points from their cluster centres, the quantity k-means itself tries to shrink.

| Clusters | Silhouette score | Cluster sizes | Squared distance (sq km) |
| --- | --- | --- | --- |
| 2 | 0.775 | 107 and 7 | 21.19 |
| 3 | 0.757 | 103, 7 and 4 | 14.17 |
| 5 | 0.749 | 93, 8, 6, 4 and 3 | 5.53 |
| 6 | 0.507 | 61, 35, 6, 5, 4 and 3 | 3.85 |
| 10 | 0.514 | Two large, eight small | 1.34 |

The silhouette score peaks at two clusters, with 0.775. But look at what those two clusters are: 107 places in one and 7 in the other. The score is rewarding a split that says "nearly everything, plus a handful far away", which is true and tells a planner almost nothing. A result with two sizeable groups, of 61 and 35 places, appears only at six clusters, and the score drops to 0.507 when it does, because those two groups sit close together. Meanwhile the squared distance falls every single time a cluster is added, from 21.19 to 1.34, so it cannot choose a number at all.

One more check keeps the scores honest. The same number of points scattered at random across the same rectangle, with no structure whatever, scored between 0.38 and 0.43. So 0.5 is not far above meaningless, and a high score mainly signals that a few points are a long way from the rest. The right number of clusters depends on what the clusters are for, and no single score knows that.

### Ages 8 to 11

Put dots on a map and draw loops round the groups; compare your loops with a friend's.

### Ages 11 to 15

Run k-means on Moseley's shops in Python for two, three and six clusters and colour the map.

### Ages 15 and up

Compute silhouette scores, compare with random points and argue for a number of clusters.

### OpenStreetMap places, our clustering

Shop and venue positions are from OpenStreetMap and its contributors under the Open Database Licence; the ward boundary is from the ONS Open Geography Portal. The clustering and scores are our own work. No business is named, and mapped places are whatever volunteers have recorded.

Scores and AI

## What this teaches about vibe coding and AI agents

A score measures what it measures, which may not be what you wanted.

| What happened | What to take from it |
| --- | --- |
| The top score was a 107 and 7 split | The highest number is not always the useful answer |
| The 61 and 35 split scored only 0.507 | Useful distinctions can score poorly |
| Squared distance fell at every step | Some measures cannot choose for you |
| Random points scored about 0.4 | Compare every score with a no-structure baseline |
| The purpose decided the right number | State the goal before running the method |

Ask an AI assistant to cluster data and "pick the optimal number" and it will commonly run the silhouette score, take the peak and report it as settled. In vibe coding, the learner supplies the goal and an AI supplies the code; our Moseley learners also look at the size of every cluster and at a random baseline before they accept the peak. AI agents that segment, group or route things automatically rely on such scores constantly, and someone has to ask what the score rewards. Agent projects come once a learner is writing Python independently, usually in Years 12 and 13 or as an adult, and Copilot Studio agents are taught only one-to-one. See [the agents course for UK students](/ai-agents-course-for-students-uk), and for the thinking, [understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-uk).

Open data from OpenStreetMap, the ONS, Nomis and postcodes.io made this page possible. None of them is connected with Modern Age Coders, and the analysis, mistakes included, is ours.

Stages

## From loops on a map to judging clusters

School year is where we start guessing; the free lesson is where we find out.

Years 2 to 7

### How to think

Grouping, comparing answers and asking what a score means.

[Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids)[Scratch Coding for Kids](/courses/scratch-programming-complete-course)Years 4 to 8

### Vibe coding for kids

Small games and apps made with an AI, checked by the learner.

[Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[Python and AI for Kids](/courses/python-ai-kids-masterclass)Years 9 to 13

### Python and machine learning

Clustering, evaluation and baselines beside GCSE and A level.

[AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens)[Python for Teens](/courses/python-complete-masterclass-teens)Adults

### AI evaluation and agents

Unsupervised learning, honest metrics and AI agents in Python.

[Generative AI Course](/courses/complete-generative-ai-masterclass-college)[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)AI and clustering

## What is the silhouette score, and can it tell you how many clusters to use?

The silhouette score measures how much closer each point is to its own cluster than to the nearest other cluster, averaged from minus one to one; it can guide the choice of cluster count, but its peak often reflects a few distant points, so it cannot decide alone.

For 114 mapped shops and eating places in Moseley ward, the silhouette score peaked at 0.775 for two clusters of 107 and 7, while the more informative six-cluster result scored 0.507 and random points scored about 0.4.

Learners who have seen that ask of any AI-chosen "optimal" setting: optimal for which score, and what does the winning answer actually look like?

Looking inside the winner, not just at its score, is what keeps Moseley teenagers in charge of AI analysis, and they learn it by building the analysis themselves. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

How it works

## Moseley lessons, live and online

The essentials are a computer, a camera and internet that holds up on a video call.

### Made by the learner

Pupils type every line and prompt; the tutor watches over screen share and keeps asking why that choice.

### Level from the first session

The free lesson shows where to begin, with any exam board noted.

### Free trial lesson

It costs nothing and finishes with a suggested course.

### Classes matched by stage

Fifteen to twenty learners, drawn from the whole UK, at one level.

### Twice weekly

Holidays are left free.

### One regular time

Tutors shift for UK clock changes; you do not.

Why online

Finding five learners at one level who share a free evening is hard within a single suburb and easy across a country.

Fees

## Moseley fees

Moseley learners are charged our international rate, which applies outside India.

First class**USD 0**

A free lesson in full, then a recommendation.

Group tuition**USD 100**

About eight live group lessons monthly.

Private tuition**USD 150**

About eight live private lessons monthly.

We set fees in US dollars and do not list sterling. Nothing is charged until the trial has decided the course and the weekly slot; the pricing page covers holidays, missed lessons and switching between group and private.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20could%20we%20book%20a%20free%20coding%20or%20AI%20lesson%20for%20a%20learner%20in%20Moseley%3F)Reviews

## South Birmingham families and learners nationwide, on Google

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

## Book a free Moseley lesson

Send us an age or year group and a hobby. For the trial we could draw clusters on a paper map, guide an AI through a Scratch game, write a little Python, or colour real shops by group.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Moseley one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20could%20we%20book%20a%20free%20coding%20or%20AI%20lesson%20for%20a%20learner%20in%20Moseley%3F)

Submitted details are used for placement and follow-up.

FAQ

## Moseley questions

Clustering scores, the shops project, Python, vibe coding and practical matters.

### How many people live in Moseley, Birmingham?

Moseley ward had 21,839 usual residents at the 2021 census.

### Are coding and AI classes available online in Moseley?

Yes, by live video for ages 6 to 67 in Moseley, Wake Green, Billesley and the rest of Birmingham.

### What is k-means clustering?

A method that splits data into a chosen number of groups by repeatedly assigning each point to the nearest centre and moving each centre to the middle of its points.

### What is the elbow method?

Plotting the within-cluster squared distance against the number of clusters and looking for a bend. In our Moseley data the curve fell smoothly from 21.19 to 1.34, with no clear bend to choose.

### What does the Moseley project involve?

Clustering 114 mapped shops and eating places with k-means for two to ten clusters, scoring each with the silhouette score and comparing with random points.

### Is vibe coding taught?

Yes, in every course: learners explain what they want, an AI writes it, and learners test and fix it.

### When do learners start on AI agents?

Once they write Python independently, usually Years 12 and 13 or as adults; Copilot Studio agents are one-to-one only.

### Do you teach GCSE and A level content?

Yes, in computer science and maths, for understanding; no grade is promised.

### What are the fees?

Free for the first lesson, then USD 100 a month in a class or USD 150 a month privately.

### Do lessons pause for holidays?

Yes; send the dates.

Birmingham

## More Birmingham pages

Other Birmingham districts, each with its own project: [Kings Heath](/vibe-coding-and-ai-agents-classes-in-kings-heath-birmingham) (an agent with a tiny memory), [Harborne](/ai-and-programming-classes-in-harborne-birmingham), [Edgbaston](/online-coding-and-python-classes-in-edgbaston-birmingham) and [Birmingham](/coding-classes-in-birmingham) as a whole. The [UK hub](/coding-classes-in-united-kingdom) links everywhere else.

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20could%20we%20book%20a%20free%20coding%20or%20AI%20lesson%20for%20a%20learner%20in%20Moseley%3F)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/best-coding-and-ai-classes-in-moseley-birmingham*
