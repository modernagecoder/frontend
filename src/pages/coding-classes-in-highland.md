---
title: "Coding Classes in the Highlands | Live Online, Ages 6 to 67"
description: "Live online coding, Python and maths classes across the Highlands, from Inverness, Nairn, Thurso and Wick to Fort William, Aviemore, Portree and Mallaig."
canonical: https://learn.modernagecoders.com/coding-classes-in-highland
source: src/pages/coding-classes-in-highland.html
---
> Live online coding, Python and maths classes across the Highlands, from Inverness, Nairn, Thurso and Wick to Fort William, Aviemore, Portree and Mallaig.

Skip to contentCourses for the Highlands

## Where Highland learners usually start

A P3 in Thurso who loves drawing, an S1 in Aviemore curious about games, an S4 in Portree working towards National 5, and an adult in Invergordon learning to code for work. Each begins with one free lesson.

[![Coding for Kids course thumbnail](/images/kids-coding.webp)Ages 6 to 12Coding for KidsBlock coding that draws shapes, arcs and patterns with a moving pen.See the syllabus](/courses/kids-coding-blocks-masterclass)[![Maths Through Coding course thumbnail](/images/maths-through-coding.webp)Ages 10 to 15Maths Through CodingCoordinates, angles and curves learned by drawing them in code.See the syllabus](/courses/maths-through-coding)[![High School Mathematics course thumbnail](/images/high-school-maths.webp)Ages 14 to 18High School MathematicsSecondary maths in depth, including the trigonometry and polynomials behind curves.See the syllabus](/courses/complete-high-school-mathematics-mastery)[![Python Masterclass course thumbnail](/images/python-college.webp)AdultsPython MasterclassPython from zero for adults, through to graphics, data and automation.See the syllabus](/courses/python-programming-masterclass-zero-to-advanced-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Highland in numbers

## About 235,400 people over a vast area

Council totals come from the 2022 census first results, rounded to hundreds by National Records of Scotland. Town sizes are NRS estimates for mid-2020 and are not directly comparable.

| Locality | Residents | Locality | Residents |
| --- | --- | --- | --- |
| Inverness | 47,790 | Invergordon | 3,930 |
| Nairn | 10,190 | Culloden | 3,830 |
| Thurso | 7,390 | Tain | 3,570 |
| Wick | 6,870 | Caol | 3,310 |
| Alness | 5,950 | Aviemore | 3,230 |
| Fort William | 5,600 | Milton of Leys | 3,160 |
| Westhill (Highland) | 5,470 |   |   |
| Dingwall | 5,360 |   |   |

There are only 9.2 people per square kilometre across Highland, compared with 69.8 for Scotland, so most learners live a long way from any evening coding club. The census age bands, added up by us, give 14.7 per cent of residents under 15 and 23.7 per cent aged 65 and over; Scotland's shares are 15.3 and 20.1. Muir of Ord, Grantown-on-Spey, Portree and Conon Bridge are among the places just below the table. Highland Council sets the school terms; we have not read them and plan breaks around each family's dates.

### Inverness and the exams

The city has a page of its own, [Inverness](/best-coding-class-in-inverness), with a different project. Senior pupils can see [National 5 Computing Science](/national-5-computing-science-help) and [Higher Maths](/higher-maths-tuition-online).

The Highland project

## Drawing an arch that is almost a circle

Four control points, one algorithm, and an error you can measure.

A cubic Bezier curve is defined by four points: it starts at the first, ends at the last, and is pulled towards the two in between, called handles. It is how fonts describe letters, how SVG images store shapes, and how drawing apps turn a drag of the mouse into a smooth line. The learner writes the de Casteljau algorithm, which finds any point on the curve by repeatedly taking points part of the way along straight lines, then tries to draw a semicircular arch of radius 1, like the arch rings in the listing. The test is simple: every point on a true circle is exactly 1 from the centre, so the program measures how far each point on the curve strays.

| Pieces for the semicircle | Handle length | Worst error | On an invented 7.5 m radius arch |
| --- | --- | --- | --- |
| 1 piece | 1.3333 | 1.835 per cent | About 138 mm |
| 2 pieces | 0.5523 | 0.027 per cent | About 2 mm |
| 3 pieces | 0.3573 | 0.0024 per cent | Under 1 mm |
| 4 pieces | 0.2652 | 0.0004 per cent | About 0.03 mm |
| 2 pieces, handle set to a third of the chord | 0.4714 | 4.289 per cent | Not computed |

A single Bezier curve makes a poor semicircle: it bulges nearly 2 per cent off, which on an arch 15 metres across would be some 138 millimetres. Split the arch into two quarter circles and use the handle length 4/3 times the tangent of a quarter of the angle, which gives the famous 0.5523 for a quarter circle, and the worst error falls to 0.027 per cent. Four pieces bring it below a thousandth of a per cent. Each extra piece cuts the error dramatically, which is why software splits curves rather than using one long one.

The last row is the warning. A tempting guess, handles a third of the chord long, looks smooth on screen but is more than 150 times worse than the right choice for two pieces. Both curves look like arches. Only measurement tells them apart, and the learner who wrote the error check sees it at once. We make no claim about how the real viaduct was drawn or set out in 1901; it was built long before Bezier curves were developed for car design around 1960.

### Ages 8 to 11

Draw arches with a Scratch pen from many short straight steps and see how the number of steps changes the smoothness.

### Ages 11 to 15

Write de Casteljau in Python for a single curve, plot it with its handles, and drag the handles to shape an arch.

### Ages 15 and up

Measure the radial error for 1 to 6 pieces, derive 4/3 tan of a quarter angle, and compare with the naive handle length.

### Real listing, invented arch

The viaduct facts come from Historic Environment Scotland. The 7.5 metre radius and every error figure are from our own program, and do not describe any real arch at Glenfinnan.

Why Glenfinnan

## 21 concrete arches from 1901

What the Category A listing records.

| Listing detail | What it says |
| --- | --- |
| Opened | 1901 |
| Form | Long 21-arched concrete viaduct built on a curve |
| Arches | Continuous semicircular arch rings, with thicker pylons flanking the centre portion |
| Length | 416 yards, which the listing gives as 380 metres (380.4 by our conversion) |
| Significance | The longest concrete viaduct in Scotland |
| Railway | West Highland Extension, Fort William to Mallaig, opened 1901 |

Bezier curves run through almost every screen people use: the letters of this sentence, logos, maps, animation paths in games, and the curves a CNC machine or 3D printer follows. Knowing that they only approximate circles, and how to measure by how much, is the difference between drawing something that looks right and something that is right. A Highland pupil who has measured 138 millimetres of bulge on a one-piece arch will not trust a curve by eye again.

We have no connection with Historic Environment Scotland or Highland Council. The listing's facts are theirs; the arch program, its numbers and any slips belong to us.

Progression

## From pen arcs to Bezier curves

Stages here are approximate. The free lesson finds the real starting point.

P1 to P4

### Pens and shapes

Block coding with a pen that draws squares, stars and rainbows.

[Coding for Kids](/courses/kids-coding-blocks-masterclass)[Scratch Coding for Kids](/courses/scratch-programming-complete-course)P5 to S2

### Coordinates in Python

Typed Python drawing on a grid, with angles, points and loops.

[Maths Through Coding](/courses/maths-through-coding)[Python and AI for Kids](/courses/python-ai-kids-masterclass)S3 to S6

### Curves and functions

Trigonometry, polynomials and graphics programs beside National 5, Higher and Advanced Higher.

[High School Mathematics](/courses/complete-high-school-mathematics-mastery)[Python for Teens](/courses/python-complete-masterclass-teens)Adults

### Graphics and data

Python for adults, from plotting data to generating shapes and files.

[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)[Data Analysis Course](/courses/data-analysis-mastery-course-college)AI and curves

## An AI can write SVG in seconds. Will its circles really be round?

A curve can look perfect and be measurably wrong.

Ask an assistant to draw arches in SVG or Python and it will produce smooth curves that pass a glance. Whether it picked the right handle length, or used enough pieces, is invisible until someone measures, and a CNC cutter or a technical drawing will not be forgiving.

A Highland learner who has written the radial error check knows how to test generated geometry instead of admiring it. That habit carries over to any drawing, model or file an AI produces.

So for a young person in the Highlands, learning to code in 2026 means knowing how to check that a curve is what it claims to be. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

How lessons run

## Classes that cross the Highlands for you

From Caithness to Lochaber and Skye, the distances that make clubs hard make online lessons easy.

### Home, croft or flat

Any quiet corner with a laptop and a connection works; the teacher follows the learner's shared screen.

### Scottish stages, always

We say P5, S2, National 5, Higher and Advanced Higher, as Highland schools do, and teach in English.

### First lesson on us

The first lesson is free and complete. We then give an honest view of level and course.

### Classmates at the same stage

Groups of fifteen to twenty learners at one level, joining from several countries.

### Lessons follow the term

Twice a week during term; school holidays are breaks.

### UK time that stays put

Your booked UK time holds through the clock changes; our India time teachers do the adjusting.

Why a class by level, not by glen

Across a council area this size, finding five learners at one stage free on the same evening in any one town is nearly impossible. Pooling by level means a pupil near Tain or Muir of Ord still gets a class that fits.

Fees

## Fees in the Highlands

Wick or Fort William, the fee does not change, and it is the fee we charge everywhere outside India.

First class**USD 0**

A complete lesson at no cost, then a recommendation.

Group tuition**USD 100**

About eight lessons a month in a group of fifteen to twenty at one stage.

Private tuition**USD 150**

About eight lessons a month, learner and teacher only.

We price in US dollars and keep no sterling price list. No payment is taken until after the free lesson, when a course and weekly slot are agreed; holidays, missed lessons and switching formats are covered on the pricing page.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20the%20Highlands%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)Reviews

## Google reviews from our families

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

## Book a free Highland lesson

Tell us the learner's age or school stage and something they enjoy. The first lesson might be a Scratch drawing, a first Python program, or the arch on this page.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Highland one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20the%20Highlands%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)

Submitted details are used for placement and follow-up.

FAQ

## Highland questions

The council area, the viaduct project and practical points.

### How many people live in the Highland council area?

About 235,400 people in roughly 111,700 households, from the rounded first results of Scotland's 2022 census.

### What are the biggest towns in the Highlands?

From NRS mid-2020 estimates: Inverness 47,790, then Nairn 10,190, Thurso 7,390, Wick 6,870 and Alness 5,950.

### What is the Glenfinnan project?

Learners draw a semicircular arch with cubic Bezier curves in Python and measure the error: 1.8 per cent with one piece, 0.027 per cent with two, and under a thousandth of a per cent with four.

### What is a Bezier curve?

A smooth curve set by a start point, an end point and handle points that pull it into shape. Fonts, SVG images and drawing apps are built from them.

### When did the Glenfinnan Viaduct open?

In 1901, according to Historic Environment Scotland, which lists it at Category A as the longest concrete viaduct in Scotland.

### Do learners in remote places need anything special?

A computer and an internet connection that can handle a video call. Lessons are online, so Portree and Thurso join like anywhere else.

### Can you help with Higher Maths?

Yes, and with National 5 Maths and Computing Science. We aim for real understanding and do not promise grades.

### What ages can join?

Ages 6 to 67: blocks for young children, Python and maths for secondary pupils, and Python for adults from the very beginning.

### What are the fees?

The first lesson is free. Then USD 100 a month for a group place or USD 150 a month one-to-one.

### Do you stop for Highland school holidays?

Yes. Send us your school's holiday dates and lessons pause for them.

More pages

## Near the Highlands

Visit [Inverness](/best-coding-class-in-inverness), or the [Argyll and Bute](/coding-classes-in-argyll-and-bute) and [Aberdeenshire](/coding-classes-in-aberdeenshire) council pages. Every council is listed on the [Scotland](/coding-and-ai-classes-in-scotland) page, and the [UK hub](/coding-classes-in-united-kingdom) covers the rest.

Book the free class[Book a priority demo](/book-demo)[WhatsApp us](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20the%20Highlands%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/coding-classes-in-highland*
