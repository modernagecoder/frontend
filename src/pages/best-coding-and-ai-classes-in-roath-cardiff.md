---
title: "Coding and AI Classes in Roath, Cardiff | Python, Ages 6 to 67"
description: "Online coding, AI, Python and vibe coding lessons for Roath, Penylan, Plasnewydd and Cathays learners in Cardiff, aged 6 to 67, with WJEC help. First lesson free."
canonical: https://learn.modernagecoders.com/best-coding-and-ai-classes-in-roath-cardiff
source: src/pages/best-coding-and-ai-classes-in-roath-cardiff.html
---
> Roath (Y Rhath) is recorded on postcodes.io as a suburban area of Cardiff, next to Roath Park, and postcode lookups put points in Roath inside Plasnewydd and Penylan wards, which counted 18,277 and 12,911 residents at the 2021 census; no separate figure is published for Roath itself. Our tutors, who work from India, teach coding, AI, Python, vibe coding and maths by live video to learners of six to 67, alone or in a class of five to ten pitched at one level. We start with how to reason, so learners can question a neat answer a computer draws for them. Lesson one is free, and we finish it by suggesting a course. The Roath project takes 529 shops, cafes and pubs mapped on OpenStreetMap and asks a computer to draw the outline of the local shopping streets, then shows how one setting changes the answer from one big blob to twenty-one tight clusters. From there, a class place is USD 100 each month and a private tutor USD 150 each month.

[Home](/) / [United Kingdom](/coding-classes-in-united-kingdom) / [Cardiff](/best-coding-class-in-cardiff) / Roath

Roath, Cardiff, Wales / Live online

# Coding and AI classes in Roath, Cardiff

**Where can Roath learners find the best coding and AI classes?** Roath (Y Rhath) is recorded on postcodes.io as a suburban area of Cardiff, next to Roath Park, and postcode lookups put points in Roath inside Plasnewydd and Penylan wards, which counted 18,277 and 12,911 residents at the 2021 census; no separate figure is published for Roath itself. Our tutors, who work from India, teach coding, AI, Python, vibe coding and maths by live video to learners of six to 67, alone or in a class of five to ten pitched at one level. We start with how to reason, so learners can question a neat answer a computer draws for them. Lesson one is free, and we finish it by suggesting a course. The Roath project takes 529 shops, cafes and pubs mapped on OpenStreetMap and asks a computer to draw the outline of the local shopping streets, then shows how one setting changes the answer from one big blob to twenty-one tight clusters. From there, a class place is USD 100 each month and a private tutor USD 150 each month.

Draw a line round every shop in a neighbourhood and you get a shape. The simplest shape, the convex hull, is what a rubber band would make if stretched round all the points: it never dents inwards, so it swallows parks, back streets and houses along with the shops. A better outline hugs the points. The standard way to get one is an alpha shape: join the points into triangles, then throw away any triangle that is too big to belong to a crowd. What counts as too big is a choice, and that choice decides how many separate shopping areas the computer finds. This project runs the idea on Roath and its neighbouring streets.

Facts last verified 30 September 2026. Teaching is online; no Roath branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Roath courses in shapes, Python and AI

Pick a course by age. The first live lesson on each is free, and booking takes no card.

- [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids) (Ages 7 to 12): The how-to-think course: drawing boundaries round groups and arguing about where they should go.
- [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev) (Ages 8 to 12): Scratch games planned by the learner, built with AI help and tested to destruction.
- [Python for Teens](/courses/python-complete-masterclass-teens) (Ages 13 to 17): Python from first programs to geometry and maps, including the Roath shop outlines.
- [Generative AI Course](/courses/complete-generative-ai-masterclass-college) (Students and adults): How AI finds structure in data, where its choices hide, and AI agents in Python.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Roath, Plasnewydd, Penylan and Roath Park

Census counts for the wards Roath's streets fall in, and how the area is recorded.

**Census 2021 usual residents, 2022 wards, via Nomis**

| Ward | Residents (2021) |
|---|---|
| Plasnewydd | 18,277 |
| Penylan | 12,911 |
| Cathays | 21,821 |

Roath is a name people use, not an official boundary, so no count exists for it. Postcode lookups place a point in the heart of Roath in Penylan ward and a nearby postcode, CF24 3HG, in Plasnewydd ward; Cathays is shown because the analysis rectangle runs into it. The ward figures are printed as Nomis publishes them and are not added up. Cardiff schools teach the Curriculum for Wales in Years 1 to 13, and we plan lessons around your school's holiday dates once you share them.

### Cardiff, Wales and WJEC help

See [Cardiff](/best-coding-class-in-cardiff), the [Wales guide](/coding-and-ai-classes-in-wales) and [WJEC GCSE Computer Science help](/wjec-gcse-computer-science-help-wales). Why reasoning comes first is on [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

## Where does a shopping area end? Alpha shapes round Roath's 529 shops and cafes

One set of real points, a rubber-band outline, and an outline that hugs the crowd at five different settings.

The learner downloads OpenStreetMap data for a rectangle over Roath and its neighbours and keeps every mapped shop, cafe, restaurant, takeaway, pub and bar: 529 places. The convex hull round all of them covers 4.842 square kilometres, far more than any shopping street, because it has to reach every outlier. Python then joins the places into a Delaunay triangulation, a mesh of triangles with no point inside any triangle's circle, and keeps only triangles whose circle is smaller than a chosen radius, called alpha. Triangles that touch along an edge form one piece of the outline.

**Alpha shapes round Roath's shops and food places at five settings, our Python run on OpenStreetMap data**

| Alpha (circle radius) | Area covered | Share of the convex hull | Separate pieces |
|---|---|---|---|
| 60 m | 0.181 km2 | 3.7% | 21 |
| 100 m | 0.531 km2 | 11.0% | 13 |
| 150 m | 1.268 km2 | 26.2% | 9 |
| 250 m | 2.440 km2 | 50.4% | 3 |
| 400 m | 3.714 km2 | 76.7% | 1 |

At 60 m the outline breaks into 21 tight pieces. The largest holds 235 places, and the street most often written in their address tags is Wellfield Road; the second holds 101, mostly tagged Crwys Road. At 150 m those streets merge into one piece of 451 places, and at 400 m everything is a single blob covering three quarters of the hull. None of these answers is wrong. Each alpha is a different definition of "one shopping area", and the table shows how much hangs on it.

### Years 3 to 6

Stretch an elastic band round pins on a map, then trace a tighter outline by hand and compare.

### Years 7 to 9

Plot Roath's shops in Python and draw their convex hull, then measure how much empty space it takes in.

### Years 10 and up

Build alpha shapes from a Delaunay triangulation and chart area and piece count against alpha.

### OpenStreetMap data, our outlines

Shops, cafes and address tags are from OpenStreetMap and its contributors under the Open Database Licence. The triangulation, outlines and counts are our own work; street names are only the most common address tag in each piece, not official boundaries.

## What this teaches about vibe coding and AI agents

A neat boundary on a map is the product of a dial someone turned.

**From the Roath outlines to working with AI**

| In the alpha shape project | When AI groups or outlines data |
|---|---|
| The convex hull covered 4.842 km2 | The simplest summary can be very misleading |
| 60 m gave 21 pieces, 400 m gave 1 | One parameter can change the whole answer |
| No alpha was the right one | Some questions need a stated definition |
| Street names came from address tags | Labels depend on what the data records |
| Five settings were compared | Show the answer under several settings |

Ask an AI assistant to "find the shopping areas" in a list of points and it will return clean outlines without mentioning the setting that produced them. In vibe coding a learner describes the program and an AI writes it; our Roath learners also ask which parameter shaped the answer and rerun it at several values before trusting any map. AI agents that summarise data into regions or segments make the same hidden choice. We hold back agent projects until Python is no longer the obstacle, which tends to mean sixth form or adult learners, and anything built in Copilot Studio is taught in private sessions. The thinking is laid out on [understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-uk), and the next steps on [our agents course page for UK learners](/ai-agents-course-for-students-uk).

Modern Age Coders has no link with OpenStreetMap, Nomis, the Office for National Statistics or postcodes.io; we used their open data, and the outlines and any errors are ours.

## From elastic bands to computational geometry

Welsh school years, Years 1 to 13, guide where we begin; the trial settles it.

- **Years 1 to 6: How to think** Shapes, groups and deciding where a boundary goes. [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **Years 4 to 8: Vibe coding for kids** Games and apps planned by the learner and built with AI help. [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev), [Python and AI for Kids](/courses/python-ai-kids-masterclass)
- **Years 9 to 13: Python and geometry** Coordinates, triangulations and maps alongside WJEC GCSE and A level. [Python for Teens](/courses/python-complete-masterclass-teens), [High School Mathematics](/courses/complete-high-school-mathematics-mastery)
- **Adults: Data, AI and agents** Spatial data, machine learning and AI agents, built in Python. [Generative AI Course](/courses/complete-generative-ai-masterclass-college), [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)

## What is an alpha shape, and how is it different from a convex hull?

A convex hull is the tightest outline with no dents, like an elastic band round all the points; an alpha shape keeps only the small triangles between nearby points, so it can dent inwards, leave holes and split into pieces, with the alpha value setting how close counts as close.

Round Roath's 529 mapped shops and cafes, the convex hull covered 4.842 square km, while alpha shapes covered 3.7% of that in 21 pieces at 60 m and 76.7% in one piece at 400 m.

Learners who have run that comparison ask of any outline an AI draws: which setting made this shape, and what happens if it changes?

Seeing the choice behind a boundary lets Roath teenagers question AI-drawn maps and segments, and building them in code is the quickest way to learn that in 2026. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## How lessons reach Roath

You supply a computer with a webcam and a line fast enough for video; we supply the tutor.

- **The learner codes** Everything is typed and run by the student; the tutor watches the shared screen and asks why each step works.
- **Level from the trial** The free session shows where to start, and any WJEC course is noted.
- **First lesson free** No fee for lesson one, which ends with a course recommendation.
- **Classes by level** Five to ten learners from around the UK, all working at one stage.
- **Two a week in term** We stop for school holidays.
- **Same slot all year** Our tutors absorb UK clock changes, so your time stays put.

**Why online** Five learners at one level, free on the same evening, are rarely neighbours even in a busy district. Over video it does not matter.

## Roath fees

Roath is billed at the international rate, the same one every country outside India pays.

- First class: USD 0. A full lesson free, then a recommendation.
- Group tuition: USD 100 a month. About eight live group lessons a month.
- Private tuition: USD 150 a month. About eight live one-to-one lessons a month.

Tuition is quoted in US dollars only. No invoice goes out until the trial has fixed both the course and the weekly hour, and the pricing page answers questions about holidays, absences and swapping format.

## Roath questions

### What is the population of Roath?

No official figure exists for Roath, which is not a census area. Postcode lookups put points in Roath inside Plasnewydd ward (18,277 residents in 2021) and Penylan ward (12,911).

### Can Roath learners join coding and AI classes online?

They are. Every lesson is a live video call, so Penylan, Cathays and the rest of Cardiff are all within reach for ages 6 to 67.

### What is a convex hull?

The smallest outline with no inward dents that contains every point, the shape an elastic band makes round a set of pins.

### What does the alpha value control in an alpha shape?

How big a gap between points can be bridged. Small values give tight outlines in many pieces; large values approach the convex hull. In Roath, 60 m gave 21 pieces and 400 m gave one.

### What does the Roath project involve?

Mapping 529 shops, cafes and pubs from OpenStreetMap, drawing their convex hull and alpha shapes, and measuring how the outline changes with alpha.

### Does the course include vibe coding?

It does, whatever the age. The learner sets out what the program must do, an AI drafts it, and the learner hunts for what it got wrong.

### When do learners start on AI agents?

Once they write Python unaided, usually Year 11 or later or as adults; Copilot Studio agents are one-to-one only.

### Is WJEC exam support offered?

For GCSE and A level Computer Science, Digital Technology and Maths, yes. We teach the ideas and promise no grade.

### How much are lessons?

Nothing for the trial. Monthly tuition after it is USD 100 in a class, or USD 150 with a tutor to yourself.

### Do lessons stop in the holidays?

They pause; tell us when your school breaks up.

## More Cardiff and south Wales pages

Each of these is built round a different experiment: [Cardiff](/best-coding-class-in-cardiff) (city size and Zipf's law), [Llandaff](/vibe-coding-and-ai-agents-classes-in-llandaff-cardiff), [the Vale of Glamorgan](/coding-classes-in-vale-of-glamorgan) and [Newport](/best-coding-class-in-newport-wales). The [Wales guide](/coding-and-ai-classes-in-wales) and the [UK hub](/coding-classes-in-united-kingdom) cover everywhere else.

## Contact

Book the free class on [https://learn.modernagecoders.com/best-coding-and-ai-classes-in-roath-cardiff](https://learn.modernagecoders.com/best-coding-and-ai-classes-in-roath-cardiff#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
