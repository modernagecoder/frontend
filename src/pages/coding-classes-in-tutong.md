---
title: "Coding Classes in Tutong | Modern Age Coders"
description: "Live online coding and AI classes for Tutong district, where 47,210 people are spread across 1,166 square kilometres. USD 100 a month and a free first class."
canonical: "https://learn.modernagecoders.com/coding-classes-in-tutong"
region: "BN-TU"
updated: "2026-08-17"
---

# Coding Classes in Tutong

> Tutong's largest mukim recorded 13,253 residents and its smallest 980. A class that needs five to eight learners at one level, in one subject, free at one hour, has almost no chance of assembling itself from a pool that size, which is why families here are used to driving elsewhere for anything specialised. Modern Age Coders groups learners by what they can do, drawn from an intake across twenty-five countries, and teaches them live online for USD 100 a month. Ages six to sixty-seven. The first class costs nothing.

## Why does a district this size struggle to hold a specialist class?

The shape of Tutong is the whole argument, so it is worth setting out properly.

The district covers **1,166 square kilometres** and recorded **47,210** residents at the 2021 census. Tutong Town, or **Pekan Tutong**, is the administrative centre. The 137 kilometre Tutong River runs its length, **Bukit Bedawan** at 529 metres is the highest point, and **Tasek Merimbun**, Brunei's largest natural lake, has been an **ASEAN Heritage Park** since 29 November 1984. The population is Tutong, Dusun, Kedayan, Iban and Chinese.

| Mukim | 2021 census |
|---|---|
| Telisai | 13,253 |
| Pekan Tutong | 9,883 |
| Keriam | 8,589 |
| Kiudang | 5,063 |
| Tanjong Maya | 3,772 |
| Lamunin | 3,641 |
| Ukong | 2,029 |
| Rambai | 980 |
| **Total** | **47,210** |

Now consider what those figures do to a class. A worthwhile group needs five to eight learners who share a level, share a subject and are free at the same hour on the same evening. Each condition cuts the pool, and they multiply rather than add. Applied to Keriam's 8,589 people, of whom only a fraction are the right age in any given year, the pool clearing all four conditions at once is frequently empty. That is not a shortcoming of anybody in Tutong. It is what small numbers do.

### The one specialist institution the district does have

**Tutong Sixth Form Centre** provides A Level teaching here, alongside secondary schools including Muda Hashim, Raja Isteri Pengiran Anak Saleha, Sayyidina 'Othman, Sufri Bolkiah and Tanjong Maya.

Sixth form is where a subject stops being an introduction and becomes a specialism, and that cuts both ways. A learner arriving there having already designed, built and debugged several working programs spends two years going deeper. A learner arriving having only read about it spends the first of those two years catching up. **The years worth using are the ones before, when nothing is being examined.**

Sources: the district area of 1,166 square kilometres, the 2021 census population of 47,210 and its eight-mukim breakdown, the 137 kilometre Tutong River, Bukit Bedawan at 529 metres, Tasek Merimbun's designation as an ASEAN Heritage Park on 29 November 1984, the ethnic groups listed, the named secondary schools and Tutong Sixth Form Centre, all from the [Tutong District](https://en.wikipedia.org/wiki/Tutong_District) summary citing Brunei government material. The eight mukim figures sum to exactly 47,210, the published district total. Verified 17 August 2026.

## The Tutong student data project

Every page in this cluster works through one analytical mistake. Tutong's is a summary statistic that discards most of the data by construction, and almost nobody notices because it has the word middle in its definition: **the midrange is not the median.**

The learner is handed the eight mukim figures and asked a reasonable question. How big is a typical mukim in Tutong?

A common first move is to take the halfway point between the largest and the smallest. Telisai has 13,253 and Rambai has 980, so halfway is **7,116.5**. That is the midrange, it is one keystroke in any spreadsheet, and it feels like the middle because it sits exactly between the extremes.

**Five of the eight mukims are below that number.** Three are above it: Telisai, Pekan Tutong and Keriam. The other five, Kiudang, Tanjong Maya, Lamunin, Ukong and Rambai, are all smaller, and the last two by a very wide margin. So the number offered as typical is above most of the things it is meant to describe, and nothing in the arithmetic warned anybody.

The learner then computes the two statistics that use all the data:

| Statistic | Value | What it uses |
|---|---|---|
| Midrange | 7,116.5 | The largest and smallest values only |
| Mean | 5,901.25 | Every value, sensitive to extremes |
| Median | 4,417.5 | The middle two values once sorted |

Three defensible-looking answers to one question, spread from 4,417.5 to 7,116.5, and the one that took the least effort is the outlier among them. The 2,699 between midrange and median is larger than the entire recorded population of Ukong and nearly three times that of Rambai. The disagreement between two summary statistics is bigger than two of the places being summarised.

**Then comes the demonstration that makes it stick.** Delete the largest mukim and the smallest, Telisai and Rambai, and recompute. The midrange becomes the halfway point between Pekan Tutong's 9,883 and Ukong's 2,029, which is **5,956**: it has moved by more than a thousand. The median of the six remaining values is the average of 3,772 and 5,063, which is **4,417.5, exactly what it was before.** Not approximately. Identically.

That is the whole lesson in one line. **The midrange is computed entirely from the two most extreme values in the set, and the median is computed from everything except them.** The midrange is not a robust statistic that happens to be sensitive to outliers. It is a statistic made of nothing but outliers.

It survives in real reports because it is cheap, it sounds like the middle, and nobody checks how many of the underlying cases fall on each side of it. Counting them takes about ten seconds and settles the matter every time.

## Does coding still matter when AI can write it?

Here is a test worth two minutes. Give any assistant the eight Tutong figures and ask for the typical size of a mukim in the district.

You will almost certainly get a fluent, well-structured answer. What you are unlikely to be told, unprompted, is which of the three possible numbers it chose, why that one, and how many of the eight mukims actually fall below the figure it just gave you. Ask directly and it will usually explain all three correctly, because the statistics are not hard and it knows them. **The gap is not knowledge. The gap is that nobody asked.**

That is the honest description of where these tools sit. They answer the question they were given, extremely well, and they do not spontaneously interrogate whether it was the right question. Somebody still has to be the person who says wait, how many cases does that actually describe. Building that reflex is slow, it is done by being wrong repeatedly on data you can check, and it is the point of the project above.

Longer version: [is coding still worth learning in 2026?](https://learn.modernagecoders.com/blog/is-coding-worth-learning-2026)

## Course ladder

Placement follows a task in the free class. In a district this spread out, a year group predicts very little.

**Primary years, before syntax**
[Kids Coding Blocks](https://learn.modernagecoders.com/courses/kids-coding-blocks-masterclass) · [Scratch Programming](https://learn.modernagecoders.com/courses/scratch-programming-complete-course) · [Creative Coding and Animation](https://learn.modernagecoders.com/courses/creative-coding-animation-mastery) · [Early Maths Foundations](https://learn.modernagecoders.com/courses/early-math-foundations)

**Lower secondary, the years with nothing at stake**
[Maths Through Coding](https://learn.modernagecoders.com/courses/maths-through-coding) · [Python and AI for Kids](https://learn.modernagecoders.com/courses/python-ai-kids-masterclass) · [Kids AI Web Development](https://learn.modernagecoders.com/courses/kids-ai-web-development-course) · [Middle School Mathematics](https://learn.modernagecoders.com/courses/comprehensive-middle-school-mathematics-mastery)

**Toward the sixth form centre**
[Python Complete for Teens](https://learn.modernagecoders.com/courses/python-complete-masterclass-teens) · [HTML and CSS](https://learn.modernagecoders.com/courses/html-css-course-for-beginners-build-real-websites) · [JavaScript for Teens](https://learn.modernagecoders.com/courses/javascript-course-for-teens-beginners-interactive-web) · [Problem Solving and DSA](https://learn.modernagecoders.com/courses/problem-solving-dsa-masterclass-teens) · [High School Mathematics](https://learn.modernagecoders.com/courses/complete-high-school-mathematics-mastery)

**University and working adults**
[Python, AI and Automation](https://learn.modernagecoders.com/courses/python-ai-automation-masterclass-college) · [Data Analysis Mastery](https://learn.modernagecoders.com/courses/data-analysis-mastery-course-college) · [Full Stack Web Development](https://learn.modernagecoders.com/courses/full-stack-web-development-masterclass-college) · [Statistics and Probability](https://learn.modernagecoders.com/courses/statistics-probability-maths-course)

Full catalogue on the [course atlas](https://learn.modernagecoders.com/course-atlas). Teaching order on the [coding roadmap](https://learn.modernagecoders.com/coding-roadmap).

## Practical questions

**Which days?** The ones your household names. Tutong has both government and private sector families, and those two keep different weeks in Brunei, so there is no pattern we can assume here. The [country page](https://learn.modernagecoders.com/coding-classes-in-brunei) explains why that question is not a formality.

**What time?** Brunei keeps UTC plus 8 all year and India keeps UTC plus 5:30 all year, so the gap is always **two and a half hours**. Seven in the evening in Tutong is half past four for the teacher, in January and in July alike. Nothing needs rescheduling when the seasons change, because nothing changes.

**Does the connection matter more than the address?** It is the only thing that matters. Rambai's 980 residents and Ukong's 2,029 change nothing about the class, because the group is not drawn from the mukim. Bandwidth does change things, and we will say honestly on the free call if it will not hold.

**Format?** Groups of **five to eight** or **one to one**, **twice a week**, around eight lessons a month, in **English**. A keyboard, a connection that holds and audio the teacher can hear.

## Fees

| Plan | Price | Included |
|---|---|---|
| First class | Free | One task, a specific recommendation, no card needed |
| Group | USD 100 per month | 8 live classes, 5 to 8 learners |
| Private | USD 150 per month | 8 live classes, one to one |

The same figure is published for every country we operate in, so Tutong has no local price and no negotiation attached to it. Nothing to enrol, nothing to buy, no minimum term. Terms on the [pricing page](https://learn.modernagecoders.com/pricing).

## Is there a centre in Tutong?

There is nothing of ours in the district, or anywhere in Brunei. Lessons happen over live video from India, and the telephone number given here rings in India.

For this subject, in this district, that is the point rather than a compromise: it is how a learner in Rambai ends up in a class of peers at their own level.

Other district guides: [Brunei](https://learn.modernagecoders.com/coding-classes-in-brunei) · [Bandar Seri Begawan](https://learn.modernagecoders.com/coding-classes-in-bandar-seri-begawan) · [Kuala Belait](https://learn.modernagecoders.com/coding-classes-in-kuala-belait) · [Temburong](https://learn.modernagecoders.com/coding-classes-in-temburong)

## About Modern Age Coders

Live online coding, AI and mathematics for ages 6 to 67, teaching since 2020, with 10,000+ students across 25+ countries and a 4.9 rating across 547 Google reviews.

If model building rather than programming foundations is what you want: [AI and machine learning classes in Brunei](https://learn.modernagecoders.com/ai-and-machine-learning-classes-in-brunei).

Contact: [WhatsApp](https://wa.me/919123366161) · [+91 91233 66161](tel:+919123366161) · [contact@modernagecoders.com](mailto:contact@modernagecoders.com)

Facts last verified 17 August 2026.
