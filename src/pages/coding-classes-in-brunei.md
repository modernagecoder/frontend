---
title: "Online Coding Classes in Brunei | Modern Age Coders"
description: "Live online coding and AI classes in Brunei for ages 6 to 67, scheduled around a working week no other country has. USD 100 a month, first class free."
canonical: "https://learn.modernagecoders.com/coding-classes-in-brunei"
region: "BN"
updated: "2026-08-17"
---

# Coding Classes in Brunei

> Brunei is the only country in the world whose working week is not continuous. Government division listings show hours on Monday to Thursday and Saturday, Friday varies, and Sunday appears on none of them, while much of the private sector runs Monday to Friday instead. Modern Age Coders teaches live online coding, AI and maths to ages 6 to 67 in Brunei from USD 100 a month, scheduled around the days your family is actually free. The first class is free.

## Which days do classes run on in Brunei?

Whichever days your household is free, and in Brunei that is a real question rather than a formality.

The Brunei Ministry of Finance and Economy publishes contact hours for its divisions, and several of them state their working days plainly as **Monday to Thursday and Saturday**. Read across the listings and a consistent pattern appears.

| Day | Government sector | What it means for a class |
|---|---|---|
| Monday to Thursday | Full working days | School and work. Evening slots only |
| Friday | Varies by division. Some closed, some open in a split shift around midday | Often free, and often the best day of the week for a longer session |
| Saturday | A working day for several divisions | Not a weekend. An offer of Saturday morning classes may not suit at all |
| Sunday | Appears on none of the listings | Reliably free, and the other good day for a longer session |

**And it depends on which sector the parents work in.** Much of the private sector, the energy industry in particular, runs a conventional Monday to Friday week. Two Bruneian families on the same street can have completely different free days, and neither of them is unusual.

That is why this guide will not print a fixed weekly slot. The honest thing is to ask which days you are free and build the schedule from the answer, rather than to advertise Saturday and hope. Almost every online provider offers weekend classes and means Saturday and Sunday, which in Brunei is wrong on both days at once.

Source: division contact listings published by the [Brunei Ministry of Finance and Economy](https://www.mofe.gov.bn/), which state working days including "Monday - Thursday and Saturday" and show Friday hours varying by division, with no division listing Sunday. The characterisation of Brunei as the only country with a non-contiguous working week is widely reported rather than stated in a single official document, and it is given here as reported. Verified 17 August 2026. Confirm your own child's school timetable, because schools and sectors differ.

## When does computing start in the Brunei school system?

Later than most families expect, which is the practical reason a lot of Bruneian parents look outside school.

Brunei's National Education System for the 21st Century, **SPN21**, runs six years of primary from Year 1 to Year 6, ending in the **Penilaian Sekolah Rendah** or Primary School Assessment. Secondary runs Year 7 to Year 11. Years 7 and 8 are lower secondary and end in the **Student Progress Assessment**. Years 9 to 11 are upper secondary and end in the **Brunei-Cambridge GCE Ordinary Level**.

Two details in that structure matter more than the rest:

- The O Level is **jointly branded with Cambridge**, so a Bruneian learner finishes school holding an internationally recognised qualification rather than a purely national one
- A learner **may opt for a shorter two years of upper secondary** instead of three, subject to an evaluation of their lower secondary academic record

Both push the same conclusion. Years 7 and 8 carry no national certificate, which makes them the year group with the most room in the entire system, and they are also the years whose record opens or closes the faster route.

| Stage | What we would do |
|---|---|
| Year 1 to 6 | Before any of it counts. Ordering, counting, predicting what a program will do before running it |
| Year 7 and 8 | The best window in SPN21. No national certificate, and the record that gates the express route is being written |
| Year 9 to 11 | Brunei-Cambridge GCE preparation. Narrow the goal or reduce the load. Not the year to add something new |

For scale, the Ministry of Education administered or oversaw **232 schools** across preschool, primary and secondary as of 2019, in a country whose four districts total **458,604** people. That is a dense, centrally run system in a small population, so variation between schools is smaller here than in most markets we teach.

**What we will not claim:** nobody can tell you nationally how many hours of computing a Bruneian child receives. No such published figure was found, and any provider quoting you one has invented it. Ask the school. It is a fair question and they will have an answer.

Sources: SPN21 structure, the PSR, the Student Progress Assessment, the Brunei-Cambridge GCE Ordinary Level, the shorter two-year upper secondary option and the figure of 232 schools as of 2019, as summarised in the [overview of education in Brunei](https://en.wikipedia.org/wiki/Education_in_Brunei) citing Ministry of Education material. District populations from Brunei's Department of Economic Planning and Statistics, reproduced in the [districts of Brunei](https://en.wikipedia.org/wiki/Districts_of_Brunei) summary; these are later estimates. The district guides linked below quote each district's own 2021 census return instead, so Belait reads 65,531 there against 67,887 here, Tutong 47,210 against 48,691, and Temburong 9,444 against 9,564. Both sets are real and neither corrects the other: a census return and a subsequent estimate are different measurements, which is the "as of when" question these pages spend their time on. Verified 17 August 2026.

## The Brunei student data project

Every market page here works through one analytical trap. Brunei's is the one its own calendar creates, and it is a genuine programming bug rather than a metaphor: **the weekend is an input, not a constant.**

The task is one every working programmer has written. Given two dates, how many working days are there between them? A learner writes it, tests it, and it passes.

Then they run it for a family in Brunei, and it is wrong. Not by a rounding error. Wrong by roughly a day a week, compounding, forever.

Every mainstream date library, spreadsheet function and tutorial treats the weekend as Saturday and Sunday. It is usually not even a parameter. So a working-days calculation written anywhere else in the world silently produces the wrong answer for Brunei, and it produces it confidently, in the right format, with no error and no warning. The learner discovers this by checking a case they already know the answer to, which is the only way anybody ever discovers it.

The fix reframes the whole function. The set of non-working days stops being a constant inside the code and becomes an argument passed into it. Which means the caller has to know it. Which means somebody has to ask. And in Brunei asking is unavoidable, because the answer differs between a government household and an oil-sector one. **One program, two correct answers, depending on an input the original version did not have.**

That is the transferable lesson and it goes far past calendars. Any value hardcoded because it was true where the code was written is a bug waiting for a different country, a different currency, a different name order, a different alphabet. The learner ends the project with a function that refuses to guess, and with the habit of asking what else they assumed.

The working pattern used in the exercise is the ministry listing linked above. No individual family, school or employer is described, and the learner supplies their own dates.

## Does coding still matter when AI can write it?

Brunei is the best possible illustration, and you can run the test yourself.

Ask any assistant how many working days fall between two dates in Brunei. Most of the time you will get a number computed on the assumption that the weekend is Saturday and Sunday, delivered without hesitation, because that assumption is in essentially all of the material these systems learned from.

The answer will look exactly like a correct answer. No formatting difference, no hedge, no flag. You would only catch it if you already knew that Brunei's week is unusual, which is precisely the knowledge the machine did not apply.

So the work that stays with people is knowing which of your assumptions are assumptions. That is what the project above trains, and it is why we put logic before syntax rather than the other way round.

Longer version: [is coding still worth learning in 2026?](https://learn.modernagecoders.com/blog/is-coding-worth-learning-2026)

## Course ladder

Placement follows a task in the free class, never the year group. A year group tells us less than fifteen minutes of watching does.

**Year 1 to 6, before syntax**
[Kids Coding Blocks](https://learn.modernagecoders.com/courses/kids-coding-blocks-masterclass) · [Scratch Programming](https://learn.modernagecoders.com/courses/scratch-programming-complete-course) · [Creative Coding and Animation](https://learn.modernagecoders.com/courses/creative-coding-animation-mastery) · [Early Maths Foundations](https://learn.modernagecoders.com/courses/early-math-foundations)

**Year 7 and 8, the best window in SPN21**
[Maths Through Coding](https://learn.modernagecoders.com/courses/maths-through-coding) · [Python and AI for Kids](https://learn.modernagecoders.com/courses/python-ai-kids-masterclass) · [Kids AI Web Development](https://learn.modernagecoders.com/courses/kids-ai-web-development-course) · [Middle School Mathematics](https://learn.modernagecoders.com/courses/comprehensive-middle-school-mathematics-mastery)

**Year 9 to 11, alongside GCE preparation**
[Python Complete for Teens](https://learn.modernagecoders.com/courses/python-complete-masterclass-teens) · [HTML and CSS](https://learn.modernagecoders.com/courses/html-css-course-for-beginners-build-real-websites) · [JavaScript for Teens](https://learn.modernagecoders.com/courses/javascript-course-for-teens-beginners-interactive-web) · [Problem Solving and DSA](https://learn.modernagecoders.com/courses/problem-solving-dsa-masterclass-teens) · [High School Mathematics](https://learn.modernagecoders.com/courses/complete-high-school-mathematics-mastery)

**University and working adults**
[Python, AI and Automation](https://learn.modernagecoders.com/courses/python-ai-automation-masterclass-college) · [Data Analysis Mastery](https://learn.modernagecoders.com/courses/data-analysis-mastery-course-college) · [Full Stack Web Development](https://learn.modernagecoders.com/courses/full-stack-web-development-masterclass-college) · [Statistics and Probability](https://learn.modernagecoders.com/courses/statistics-probability-maths-course)

Full catalogue on the [course atlas](https://learn.modernagecoders.com/course-atlas). Teaching order on the [coding roadmap](https://learn.modernagecoders.com/coding-roadmap).

## What about the time difference?

Comfortable, and it never moves.

Brunei runs on **UTC plus 8 with no daylight saving**, and Indian Standard Time is UTC plus 5:30 with none either. So Brunei is exactly **two and a half hours ahead** in every month of the year. An evening class here is a late afternoon for the teacher, and a recurring slot agreed in January is still correct in July. There is no clock-change conversation on this market, ever.

Otherwise: groups of **five to eight** or **one to one**, **twice a week** for normally eight lessons a month, classes in **English**, and a laptop or desktop with stable internet, working audio and a current browser.

## Fees

| Plan | Price | Included |
|---|---|---|
| First class | Free | One task, a specific recommendation, no card needed |
| Group | USD 100 per month | 8 live classes, 5 to 8 learners |
| Private | USD 150 per month | 8 live classes, one to one |

A single published international rate, with no separate Brunei one. No enrolment charge, nothing to buy, no minimum term. Details on the [pricing page](https://learn.modernagecoders.com/pricing).

## Is there a location in Brunei?

No. **No Brunei office, branch or classroom is claimed.** Every lesson is live online from India, and the phone number is Indian rather than a Brunei number.

Distance is not the constraint here, and that matters most in the smallest district. Brunei-Muara holds 332,462 of the country's people, Belait 67,887, Tutong 48,691 and Temburong 9,564. A learner in Temburong is in a district physically separated from the rest of the country by Malaysian territory, and one of under ten thousand people, so a local class at the right level for the right age is close to impossible to assemble. Online, they sit in the same group as everybody else.

District guides: [Bandar Seri Begawan](https://learn.modernagecoders.com/coding-classes-in-bandar-seri-begawan) · [Kuala Belait](https://learn.modernagecoders.com/coding-classes-in-kuala-belait) · [Tutong](https://learn.modernagecoders.com/coding-classes-in-tutong) · [Temburong](https://learn.modernagecoders.com/coding-classes-in-temburong)

Across the region: [Singapore](https://learn.modernagecoders.com/coding-classes-in-singapore) · [Hong Kong](https://learn.modernagecoders.com/coding-classes-in-hong-kong) · [Australia](https://learn.modernagecoders.com/coding-classes-in-australia) · [New Zealand](https://learn.modernagecoders.com/coding-classes-in-new-zealand) · [India](https://learn.modernagecoders.com/coding-classes-in-india)

## About Modern Age Coders

Live online coding, AI and mathematics for ages 6 to 67, teaching since 2020, with 10,000+ students across 25+ countries and a 4.9 rating across 547 Google reviews.

If model building rather than programming foundations is what you want, that is a separate guide: [AI and machine learning classes in Brunei](https://learn.modernagecoders.com/ai-and-machine-learning-classes-in-brunei).

Contact: [WhatsApp](https://wa.me/919123366161) · [+91 91233 66161](tel:+919123366161) · [contact@modernagecoders.com](mailto:contact@modernagecoders.com)

Facts last verified 17 August 2026.
