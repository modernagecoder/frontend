---
title: "Coding Classes in Jerudong, Brunei | Modern Age Coders"
description: "Live online coding and AI classes for Jerudong and Mukim Sengkurong in Brunei-Muara, for ages 6 to 67. USD 100 a month and a free first class, no card."
canonical: "https://learn.modernagecoders.com/coding-classes-in-jerudong"
region: "BN-BM"
updated: "2026-08-17"
---

# Coding Classes in Jerudong

> Kampong Jerudong is a settlement of Mukim Sengkurong, which at the 2021 census was the largest mukim in Brunei-Muara with 40,972 residents. Jerudong itself recorded 3,856 people at the 2016 census across 32.97 square kilometres and twenty-three settlements, about twenty-one kilometres from the capital, and it hosts institutions on a national scale rather than a village one. Modern Age Coders teaches live online coding, AI and maths to ages 6 to 67 here from USD 100 a month. The first class is free.

## Where is Jerudong, administratively?

Kampong Jerudong lies about twenty-one kilometres from Bandar Seri Begawan, covers 32.97 square kilometres and takes in twenty-three settlements. It recorded **3,856** residents at the 2016 census. Administratively it belongs to **Mukim Sengkurong**, which at the 2021 census held **40,972** people and is the largest of the eighteen mukims of Brunei-Muara.

What sits here is out of proportion to that. **Jerudong Park** opened in 1994, offered free admission for years, and was revamped and relaunched in 2014; its amphitheatre hosted internationally known performers in 1996. **Jerudong Park Medical Centre** houses Gleneagles JPMC, a specialist cardiac clinic. **The Empire**, a five-star beach resort, opened in 2000.

| Brunei-Muara, 2021 census | Population |
|---|---|
| Mukim Sengkurong, which contains Jerudong | 40,972 |
| Mukim Mentiri | 39,324 |
| Mukim Berakas B | 39,284 |
| Mukim Gadong B | 38,067 |
| Mukim Jerudong | no such mukim |
| District total, eighteen mukims | 318,530 |

### Why an online class suits an area built around people who commute into it

Jerudong is a small resident population wrapped around institutions that draw from the whole country. That shape is pleasant to live in and unhelpful for assembling a class, because the people passing through are not the people who would sit in one every Tuesday. Households here also sit across several different school systems, so a year group predicts even less than usual.

Our groups are formed on demonstrated ability from an intake across twenty-five countries, which sidesteps both problems, and placement is done by watching a learner work rather than by asking which school they attend.

Sources: Kampong Jerudong at 3,856 in 2016, its area, twenty-three settlements, distance from the capital and its position within Mukim Sengkurong, together with Jerudong Park opening in 1994 with free admission and being revamped in 2014, the 1996 amphitheatre concerts, Gleneagles JPMC and The Empire opening in 2000, from the [Jerudong](https://en.wikipedia.org/wiki/Jerudong) summary. The eighteen mukims of Brunei-Muara with their 2021 populations, containing no Mukim Jerudong and summing to exactly the published district total of 318,530, from the [Brunei-Muara District](https://en.wikipedia.org/wiki/Brunei%E2%80%93Muara_District) summary. Verified 17 August 2026.

## The Jerudong student data project: an absent record is not a zero

The learner has a list of Brunei-Muara mukims with populations, and a second list of places they are interested in. The task is to look each place up and report its population. Jerudong is on the second list. It is not on the first.

**The lookup returns nothing, and the program has to decide what nothing means.**

The commonest choice is the worst. A default of zero, or a fill of zero after the merge, turns a fact the data does not contain into a fact the data appears to assert: **Jerudong, population 0**. That row then behaves like every other. It goes into the sum, where it does no harm. Into the mean, where it drags the average down. Into the minimum, where it wins. It appears at the bottom of the sorted table looking exactly like a real finding about a real place, and nothing warns anybody.

Three states get separated that ordinary code mashes together. **A genuine zero** is a measurement: somewhere with nobody living in it. **A missing value** means nobody measured. **A value under another key** means it was measured and filed elsewhere, which is the situation here. Those call for three different responses, and only the first belongs in an average.

The rule is short and holds far outside this example. **Never let a lookup failure become a value.** Keep missing as missing, count how many rows are missing and print that count beside every summary, and find out why before filling anything in. Here the finding is not an error at all: Jerudong exists, it has thousands of residents, and it is recorded under Sengkurong. The zero was never a fact about Jerudong. It was a fact about the join.

## Does coding still matter when AI can write it?

Ask any assistant for the population of Mukim Jerudong. The interesting part is which of the several possible wrong answers you get. Sometimes a number for Kampong Jerudong presented as the mukim. Sometimes Sengkurong quietly substituted. Occasionally an invented figure, because a confident answer is more probable in the training data than a statement that the entity does not exist. What you rarely get unprompted is the useful reply: there is no such mukim, and here is why you thought there was.

Longer version: [is coding still worth learning in 2026?](https://learn.modernagecoders.com/blog/is-coding-worth-learning-2026)

## Practical questions

**We may be posted elsewhere. Is it worth starting?** It is the strongest argument for starting. Nothing depends on a building or a country: a learner keeps the same teacher and the same group through a move, and what they take with them is three or four things they built and can explain.

**Which days?** The days your household names. Brunei does not run a single working week. See the [country page](https://learn.modernagecoders.com/coding-classes-in-brunei).

**What time?** A permanent **two and a half hours** to the teacher, all year, because neither country moves its clocks.

## Course ladder

Placement follows a task in the free class, which is curriculum-independent by design.

**Primary years, before syntax**
[Kids Coding Blocks](https://learn.modernagecoders.com/courses/kids-coding-blocks-masterclass) . [Scratch Programming](https://learn.modernagecoders.com/courses/scratch-programming-complete-course) . [Creative Coding and Animation](https://learn.modernagecoders.com/courses/creative-coding-animation-mastery) . [Early Maths Foundations](https://learn.modernagecoders.com/courses/early-math-foundations)

**Lower secondary, the years with nothing at stake**
[Maths Through Coding](https://learn.modernagecoders.com/courses/maths-through-coding) . [Python and AI for Kids](https://learn.modernagecoders.com/courses/python-ai-kids-masterclass) . [Kids AI Web Development](https://learn.modernagecoders.com/courses/kids-ai-web-development-course) . [Middle School Mathematics](https://learn.modernagecoders.com/courses/comprehensive-middle-school-mathematics-mastery)

**Examination years**
[Python Complete for Teens](https://learn.modernagecoders.com/courses/python-complete-masterclass-teens) . [HTML and CSS](https://learn.modernagecoders.com/courses/html-css-course-for-beginners-build-real-websites) . [JavaScript for Teens](https://learn.modernagecoders.com/courses/javascript-course-for-teens-beginners-interactive-web) . [Problem Solving and DSA](https://learn.modernagecoders.com/courses/problem-solving-dsa-masterclass-teens) . [High School Mathematics](https://learn.modernagecoders.com/courses/complete-high-school-mathematics-mastery)

**University and working adults**
[Python, AI and Automation](https://learn.modernagecoders.com/courses/python-ai-automation-masterclass-college) . [Data Analysis Mastery](https://learn.modernagecoders.com/courses/data-analysis-mastery-course-college) . [Full Stack Web Development](https://learn.modernagecoders.com/courses/full-stack-web-development-masterclass-college) . [Statistics and Probability](https://learn.modernagecoders.com/courses/statistics-probability-maths-course)

Full catalogue on the [course atlas](https://learn.modernagecoders.com/course-atlas). Teaching order on the [coding roadmap](https://learn.modernagecoders.com/coding-roadmap).

## Fees

| Plan | Price | Included |
|---|---|---|
| First class | Free | One task, a specific recommendation, no card needed |
| Group | USD 100 per month | 8 live classes, 5 to 8 learners |
| Private | USD 150 per month | 8 live classes, one to one |

One figure is published for every country we operate in, so there is no local rate and nothing to negotiate. Nothing to enrol, nothing to buy, no minimum term. Terms on the [pricing page](https://learn.modernagecoders.com/pricing).

## Is there a centre in Jerudong?

No, and none anywhere in Brunei. Lessons are live video taught from India, and the telephone number rings in India rather than locally. You need a computer with a keyboard, a connection that holds a video call, audio the teacher can hear and a reasonably current browser.

Nearby guides: [Brunei](https://learn.modernagecoders.com/coding-classes-in-brunei) . [Bandar Seri Begawan](https://learn.modernagecoders.com/coding-classes-in-bandar-seri-begawan) . [Gadong](https://learn.modernagecoders.com/coding-classes-in-gadong) . [Temburong](https://learn.modernagecoders.com/coding-classes-in-temburong)

## About Modern Age Coders

Live online coding, AI and mathematics for ages 6 to 67, teaching since 2020, with 10,000+ students across 25+ countries and a 4.9 rating across 547 Google reviews.

If model building rather than programming foundations is what you want: [AI and machine learning classes in Brunei](https://learn.modernagecoders.com/ai-and-machine-learning-classes-in-brunei).

Contact: [WhatsApp](https://wa.me/919123366161) . [+91 91233 66161](tel:+919123366161) . [contact@modernagecoders.com](mailto:contact@modernagecoders.com)

Facts last verified 17 August 2026.
