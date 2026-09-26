---
title: "Coding Classes in the Highlands | Live Online, Ages 6 to 67"
description: "Live online coding, Python and maths classes across the Highlands, from Inverness, Nairn, Thurso and Wick to Fort William, Aviemore, Portree and Mallaig."
canonical: https://learn.modernagecoders.com/coding-classes-in-highland
source: src/pages/coding-classes-in-highland.html
---
> Dividing the census population by its density, we estimate Highland covers roughly a third of Scotland's land, yet the 2022 census counted about 235,400 residents in roughly 111,700 households. Inverness is by far the biggest place, with Nairn, Thurso, Wick, Alness and Fort William some way behind, and a long list of villages from Mallaig to Grantown-on-Spey. Distance is exactly why live online lessons suit the Highlands; our teachers work from India, and a free first lesson decides each learner's starting stage, P1 to S6 or adult. Anyone from 6 to 67 can learn coding, Python or maths in a group of five to ten or one-to-one. The Highland project comes from the Glenfinnan Viaduct. After the free lesson it costs USD 100 a month in a group, or USD 150 a month one-to-one.

[Home](/) / [United Kingdom](/coding-classes-in-united-kingdom) / [Scotland](/coding-and-ai-classes-in-scotland) / Highland

Highland council area / Live online

# Coding classes in the Highlands

**What are the best coding classes in the Highlands?** Dividing the census population by its density, we estimate Highland covers roughly a third of Scotland's land, yet the 2022 census counted about 235,400 residents in roughly 111,700 households. Inverness is by far the biggest place, with Nairn, Thurso, Wick, Alness and Fort William some way behind, and a long list of villages from Mallaig to Grantown-on-Spey. Distance is exactly why live online lessons suit the Highlands; our teachers work from India, and a free first lesson decides each learner's starting stage, P1 to S6 or adult. Anyone from 6 to 67 can learn coding, Python or maths in a group of five to ten or one-to-one. The Highland project comes from the Glenfinnan Viaduct. After the free lesson it costs USD 100 a month in a group, or USD 150 a month one-to-one.

Historic Environment Scotland lists the Glenfinnan Viaduct at Category A. Opened in 1901 on the railway from Fort William to Mallaig, it is described in the listing as a 21-arch concrete viaduct built on a curve, 380 metres long, with continuous semicircular arch rings, and as the longest concrete viaduct in Scotland. Semicircles look simple, but the curves inside every drawing program, font and web page cannot make an exact circle. They make Bezier curves, and a circle is only ever an approximation. How close can the approximation get, and how would you measure it? This page's project draws an arch in Python and finds out.

Facts last verified 26 September 2026. Teaching is online; no Highland branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Where Highland learners usually start

A P3 in Thurso who loves drawing, an S1 in Aviemore curious about games, an S4 in Portree working towards National 5, and an adult in Invergordon learning to code for work. Each begins with one free lesson.

- [Coding for Kids](/courses/kids-coding-blocks-masterclass) (Ages 6 to 12): Block coding that draws shapes, arcs and patterns with a moving pen.
- [Maths Through Coding](/courses/maths-through-coding) (Ages 10 to 15): Coordinates, angles and curves learned by drawing them in code.
- [High School Mathematics](/courses/complete-high-school-mathematics-mastery) (Ages 14 to 18): Secondary maths in depth, including the trigonometry and polynomials behind curves.
- [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college) (Adults): Python from zero for adults, through to graphics, data and automation.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## About 235,400 people over a vast area

Council totals come from the 2022 census first results, rounded to hundreds by National Records of Scotland. Town sizes are NRS estimates for mid-2020 and are not directly comparable.

**Highland localities above 3,000 people, NRS mid-2020 estimates**

| Locality | Residents | Locality | Residents |
|---|---|---|---|
| Inverness | 47,790 | Invergordon | 3,930 |
| Nairn | 10,190 | Culloden | 3,830 |
| Thurso | 7,390 | Tain | 3,570 |
| Wick | 6,870 | Caol | 3,310 |
| Alness | 5,950 | Aviemore | 3,230 |
| Fort William | 5,600 | Milton of Leys | 3,160 |
| Westhill (Highland) | 5,470 |  |  |
| Dingwall | 5,360 |  |  |

There are only 9.2 people per square kilometre across Highland, compared with 69.8 for Scotland, so most learners live a long way from any evening coding club. The census age bands, added up by us, give 14.7 per cent of residents under 15 and 23.7 per cent aged 65 and over; Scotland's shares are 15.3 and 20.1. Muir of Ord, Grantown-on-Spey, Portree and Conon Bridge are among the places just below the table. Highland Council sets the school terms; we have not read them and plan breaks around each family's dates.

### Inverness and the exams

The city has a page of its own, [Inverness](/best-coding-class-in-inverness), with a different project. Senior pupils can see [National 5 Computing Science](/national-5-computing-science-help) and [Higher Maths](/higher-maths-tuition-online).

## Drawing an arch that is almost a circle

Four control points, one algorithm, and an error you can measure.

A cubic Bezier curve is defined by four points: it starts at the first, ends at the last, and is pulled towards the two in between, called handles. It is how fonts describe letters, how SVG images store shapes, and how drawing apps turn a drag of the mouse into a smooth line. The learner writes the de Casteljau algorithm, which finds any point on the curve by repeatedly taking points part of the way along straight lines, then tries to draw a semicircular arch of radius 1, like the arch rings in the listing. The test is simple: every point on a true circle is exactly 1 from the centre, so the program measures how far each point on the curve strays.

**Our Bezier arches, worst distance from a true semicircle, 26 September 2026**

| Pieces for the semicircle | Handle length | Worst error | On an invented 7.5 m radius arch |
|---|---|---|---|
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

## 21 concrete arches from 1901

What the Category A listing records.

**Glenfinnan Railway Viaduct over River Finnan, HES listing LB310**

| Listing detail | What it says |
|---|---|
| Opened | 1901 |
| Form | Long 21-arched concrete viaduct built on a curve |
| Arches | Continuous semicircular arch rings, with thicker pylons flanking the centre portion |
| Length | 416 yards, which the listing gives as 380 metres (380.4 by our conversion) |
| Significance | The longest concrete viaduct in Scotland |
| Railway | West Highland Extension, Fort William to Mallaig, opened 1901 |

Bezier curves run through almost every screen people use: the letters of this sentence, logos, maps, animation paths in games, and the curves a CNC machine or 3D printer follows. Knowing that they only approximate circles, and how to measure by how much, is the difference between drawing something that looks right and something that is right. A Highland pupil who has measured 138 millimetres of bulge on a one-piece arch will not trust a curve by eye again.

We have no connection with Historic Environment Scotland or Highland Council. The listing's facts are theirs; the arch program, its numbers and any slips belong to us.

## From pen arcs to Bezier curves

Stages here are approximate. The free lesson finds the real starting point.

- **P1 to P4: Pens and shapes** Block coding with a pen that draws squares, stars and rainbows. [Coding for Kids](/courses/kids-coding-blocks-masterclass), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **P5 to S2: Coordinates in Python** Typed Python drawing on a grid, with angles, points and loops. [Maths Through Coding](/courses/maths-through-coding), [Python and AI for Kids](/courses/python-ai-kids-masterclass)
- **S3 to S6: Curves and functions** Trigonometry, polynomials and graphics programs beside National 5, Higher and Advanced Higher. [High School Mathematics](/courses/complete-high-school-mathematics-mastery), [Python for Teens](/courses/python-complete-masterclass-teens)
- **Adults: Graphics and data** Python for adults, from plotting data to generating shapes and files. [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college), [Data Analysis Course](/courses/data-analysis-mastery-course-college)

## An AI can write SVG in seconds. Will its circles really be round?

A curve can look perfect and be measurably wrong.

Ask an assistant to draw arches in SVG or Python and it will produce smooth curves that pass a glance. Whether it picked the right handle length, or used enough pieces, is invisible until someone measures, and a CNC cutter or a technical drawing will not be forgiving.

A Highland learner who has written the radial error check knows how to test generated geometry instead of admiring it. That habit carries over to any drawing, model or file an AI produces.

So for a young person in the Highlands, learning to code in 2026 means knowing how to check that a curve is what it claims to be. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## Classes that cross the Highlands for you

From Caithness to Lochaber and Skye, the distances that make clubs hard make online lessons easy.

- **Home, croft or flat** Any quiet corner with a laptop and a connection works; the teacher follows the learner's shared screen.
- **Scottish stages, always** We say P5, S2, National 5, Higher and Advanced Higher, as Highland schools do, and teach in English.
- **First lesson on us** The first lesson is free and complete. We then give an honest view of level and course.
- **Classmates at the same stage** Groups of five to ten learners at one level, joining from several countries.
- **Lessons follow the term** Twice a week during term; school holidays are breaks.
- **UK time that stays put** Your booked UK time holds through the clock changes; our India time teachers do the adjusting.

**Why a class by level, not by glen** Across a council area this size, finding five learners at one stage free on the same evening in any one town is nearly impossible. Pooling by level means a pupil near Tain or Muir of Ord still gets a class that fits.

## Fees in the Highlands

Wick or Fort William, the fee does not change, and it is the fee we charge everywhere outside India.

- First class: USD 0. A complete lesson at no cost, then a recommendation.
- Group tuition: USD 100 a month. About eight lessons a month in a group of five to ten at one stage.
- Private tuition: USD 150 a month. About eight lessons a month, learner and teacher only.

We price in US dollars and keep no sterling price list. No payment is taken until after the free lesson, when a course and weekly slot are agreed; holidays, missed lessons and switching formats are covered on the pricing page.

## Highland questions

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

## Near the Highlands

Visit [Inverness](/best-coding-class-in-inverness), or the [Argyll and Bute](/coding-classes-in-argyll-and-bute) and [Aberdeenshire](/coding-classes-in-aberdeenshire) council pages. Every council is listed on the [Scotland](/coding-and-ai-classes-in-scotland) page, and the [UK hub](/coding-classes-in-united-kingdom) covers the rest.

## Contact

Book the free class on [https://learn.modernagecoders.com/coding-classes-in-highland](https://learn.modernagecoders.com/coding-classes-in-highland#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email contact@modernagecoders.com. Rated 4.9 across 547 Google reviews.
