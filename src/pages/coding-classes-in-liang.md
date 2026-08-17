---
title: "Coding Classes in Liang and Lumut, Brunei | Modern Age Coders"
description: "Live online coding and AI classes for Liang and Lumut in Belait, the part of Brunei that grew 17.6 per cent between censuses. Ages 6 to 67, first class free."
canonical: "https://learn.modernagecoders.com/coding-classes-in-liang"
region: "BN-BE"
updated: "2026-08-17"
---

# Coding Classes in Liang and Lumut

> Mukim Liang held 14,301 people at the 2016 census and 16,813 at the 2021 one, a rise of 2,512 or 17.6 per cent in five years. Over the same period the water village in the capital lost about thirteen per cent. Most of that growth sits in the national housing schemes at Lumut, next to the Sungai Liang Industrial Park. Modern Age Coders teaches live online coding, AI and maths to ages 6 to 67 here from USD 100 a month, and the first class is free.

## What is Mukim Liang, in figures?

Mukim Liang sits in the northern part of Belait district, on the South China Sea. It recorded **14,301** residents at the 2016 census and **16,813** at the 2021 one, an increase of 2,512 people or **17.6 per cent** in five years. For comparison, the six water village mukims in the capital fell from 10,250 to 8,902 across the same interval, a drop of about thirteen per cent. Liang is where Brunei added people.

In 2016 the mukim was 32.3 per cent urban and 67.7 per cent rural, and 51.4 per cent male. It contains twenty listed settlements. The industrial anchor is the Sungai Liang Industrial Park, with Brunei Fertilizer Industries on the same site.

| Settlement, 2021 census | Population |
|---|---|
| RPN Kampong Lumut Area 2 | 5,605 |
| RPN Kampong Lumut Area 1 | 2,035 |
| Kampong Sungai Bakong | 1,642 |
| Kampong Sungai Tali | 1,051 |
| Kampong Tunggulian | 656 |
| Kampong Sungai Liang | 641 |
| Kampong Lumut | 171 |

### The village called Lumut is the smallest of the three places called Lumut

Kampong Lumut recorded 171 residents. The two national housing scheme areas that carry its name recorded 2,035 and 5,605. The settlements sharing the name hold **7,811** people between them, and the village itself is about one forty-fifth of that.

Nothing is wrong with any of those figures. They are three separate places with overlapping names, which is ordinary for a country that builds housing schemes beside existing villages, and a trap for anybody reading names as identifiers.

Sources: Mukim Liang at 14,301 in 2016 and 16,813 in 2021, its location, the 2016 urban and rural split, the twenty settlements and the individual 2021 figures above, and the presence of Sungai Liang Industrial Park and Brunei Fertilizer Industries, from the [Mukim Liang](https://en.wikipedia.org/wiki/Mukim_Liang) summary citing Brunei government material. The capital water village comparison is the sum of the six Kampong Ayer mukims, sourced on the [Bandar Seri Begawan page](https://learn.modernagecoders.com/coding-classes-in-bandar-seri-begawan). The seven settlements listed are the largest of the twenty and do not sum to the mukim total. Verified 17 August 2026.

## The Liang student data project: join on a name and you merge things that are not the same

The learner gets two files. One lists settlements and populations. The other lists, say, schools by settlement. The task is ordinary: how many people live in each place that has a school? They join on the settlement name, because that is the column both files share.

**The join turns 171 people into 7,811, and reports it without complaint.**

If the match is loose, by prefix or contains or anything fuzzy, the three Lumut rows collapse into one of 7,811. The village is now reported as forty-five times its real size, and every per-head figure computed from it is wrong by that factor. If the match is strict, the two housing scheme rows match nothing, get dropped, and **7,640 people vanish** with no error raised. One join, two opposite failures, no warning either way.

The fix is not a cleverer string comparison. It is to stop joining on names. Names get abbreviated, transliterated, prefixed with RPN, suffixed with Area 2, spelt with and without Kampong, and changed when a scheme is renamed. **An identifier is a value that exists in order to be matched, and a name is not one.** Where a real code exists, join on the code. Where none exists, build a lookup by hand once and keep it in version control, so the mapping is a documented decision instead of a lucky string comparison.

And the check that catches it every time: **count the rows before the join and count them after.** Up means something matched more than once. Down means something matched nothing. Either, unexpected, means stop.

## Does coding still matter when AI can write it?

Give any assistant the seven settlements above and ask it to total the population of Lumut. It will produce a number, cleanly, without hesitating. Which number depends entirely on an assumption it made and did not mention: whether the three Lumut rows are one place or three. Both readings are defensible, which is exactly why the answer should have arrived with the assumption attached.

Longer version: [is coding still worth learning in 2026?](https://learn.modernagecoders.com/blog/is-coding-worth-learning-2026)

## Practical questions

**Is there local provision coming?** Probably, eventually, and that is not much use to a twelve year old now. Provision follows population with a lag of years, and this mukim added 2,512 people in five.

**Which days?** The days your household names. Belait leans toward Monday to Friday because of the energy sector, but government households here keep the other pattern. See the [country page](https://learn.modernagecoders.com/coding-classes-in-brunei).

**What time?** A permanent **two and a half hours** to the teacher, because neither country moves its clocks. Seven in the evening in Lumut is half past four in the afternoon there.

## Course ladder

Placement follows a task in the free class. In a fast-growing mukim the year group is a poor guide.

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

## Is there a centre in Liang or Lumut?

Nowhere in the district and nowhere in the country. Lessons are live video from India and the number printed here rings in India. You need a computer with a keyboard, a connection that holds a call, audio the teacher can hear and a reasonably current browser.

Nearby guides: [Brunei](https://learn.modernagecoders.com/coding-classes-in-brunei) . [Kuala Belait](https://learn.modernagecoders.com/coding-classes-in-kuala-belait) . [Seria](https://learn.modernagecoders.com/coding-classes-in-seria) . [Tutong](https://learn.modernagecoders.com/coding-classes-in-tutong)

## About Modern Age Coders

Live online coding, AI and mathematics for ages 6 to 67, teaching since 2020, with 10,000+ students across 25+ countries and a 4.9 rating across 547 Google reviews.

If model building rather than programming foundations is what you want: [AI and machine learning classes in Brunei](https://learn.modernagecoders.com/ai-and-machine-learning-classes-in-brunei).

Contact: [WhatsApp](https://wa.me/919123366161) . [+91 91233 66161](tel:+919123366161) . [contact@modernagecoders.com](mailto:contact@modernagecoders.com)

Facts last verified 17 August 2026.
