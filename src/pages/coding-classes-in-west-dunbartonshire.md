---
title: "Coding Classes in West Dunbartonshire | Live Online, Ages 6 to 67"
description: "Live online coding, Python and maths classes across West Dunbartonshire, from Clydebank and Dumbarton to Alexandria, Bonhill, Balloch and Old Kilpatrick."
canonical: https://learn.modernagecoders.com/coding-classes-in-west-dunbartonshire
source: src/pages/coding-classes-in-west-dunbartonshire.html
---
> Live online coding, Python and maths classes across West Dunbartonshire, from Clydebank and Dumbarton to Alexandria, Bonhill, Balloch and Old Kilpatrick.

Skip to contentCourses for West Dunbartonshire

## First courses in West Dunbartonshire

A P3 in Clydebank who builds boats in the bath, a P6 in Alexandria ready for typed code, an S5 in Dumbarton taking Higher Maths, and an adult in Balloch retraining in engineering. A free lesson comes first for each.

[![Scratch Coding for Kids course thumbnail](/images/scratch-kids.webp)Ages 6 to 11Scratch Coding for KidsScratch projects with floating, sinking and racing boats.See the syllabus](/courses/scratch-programming-complete-course)[![Maths Through Coding course thumbnail](/images/maths-through-coding.webp)Ages 10 to 15Maths Through CodingRatios, square roots and scale drawings brought to life in code.See the syllabus](/courses/maths-through-coding)[![High School Mathematics course thumbnail](/images/high-school-maths.webp)Ages 14 to 18High School MathematicsSecondary maths in depth, including logarithms and the algebra of scaling.See the syllabus](/courses/complete-high-school-mathematics-mastery)[![Python Masterclass course thumbnail](/images/python-college.webp)AdultsPython MasterclassPython for adults from zero, up to engineering calculations and plots.See the syllabus](/courses/python-programming-masterclass-zero-to-advanced-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)West Dunbartonshire figures

## About 88,400 people in West Dunbartonshire

National Records of Scotland publishes the rounded council total from the first 2022 census results. The town figures belong to a different NRS series, dated mid-2020.

| Locality | Residents | Locality | Residents |
| --- | --- | --- | --- |
| Clydebank | 25,620 | Balloch and Haldane | 6,010 |
| Dumbarton | 20,480 | Faifley | 4,740 |
| Bonhill | 9,060 | Old Kilpatrick | 4,470 |
| Alexandria | 6,710 | Renton | 2,350 |
| Duntocher and Hardgate | 6,680 |   |   |

West Dunbartonshire packs 556.8 residents into each square kilometre, eight times the Scottish 69.8. The age mix is close to the national one: by our addition of the census bands, 15.7 per cent of residents are under 15 and 19.9 per cent are 65 or over, against 15.3 and 20.1 for Scotland. We have not read West Dunbartonshire Council's term dates, so each family simply tells us when school is out.

### Glasgow and qualifications

The [Glasgow](/best-coding-class-in-glasgow) page covers the city. For Scottish exams, see [Higher Maths](/higher-maths-tuition-online) and [National 5 Computing Science](/national-5-computing-science-help).

The West Dunbartonshire project

## A four-metre model, a hundred-metre ship

Two dimensionless numbers, one that can be matched and one that cannot.

The ship and model are invented. The ship is 100 metres long and should cruise at 15 knots, about 7.7 metres a second. The model is built at a scale of 1 to 25, so it is 4 metres long. How fast should it be towed? The waves a hull makes depend on the Froude number, speed divided by the square root of gravity times length. For the model to make the same pattern of waves as the ship, the two Froude numbers must match, which means the model runs at the ship's speed divided by the square root of 25: about 1.54 metres a second. The learner checks it in Python: both Froude numbers come out at 0.2464.

| Quantity | Model | Ship |
| --- | --- | --- |
| Length | 4 m | 100 m |
| Speed | 1.54 m/s | 7.72 m/s |
| Froude number | 0.2464 | 0.2464 |
| Reynolds number | 5.4 million | 648 million |
| Friction coefficient | 0.00335 | 0.00162 |
| Resistance | 30.0 N measured (invented) | 348 kN predicted; 481 kN if scaled naively |

The catch is friction. Friction along the hull depends on a different quantity, the Reynolds number, speed times length divided by the water's viscosity. The model's Reynolds number is 120 times smaller than the ship's, and matching it would mean towing the 4 metre model at about 185 metres a second, which is impossible and would wreck the wave pattern anyway. So the model has proportionally about twice as much friction as the ship. Froude's solution, still the basis of practice, is to split the measured drag: estimate the friction part from a formula, scale only the remainder by the cube of the scale, and add back the ship's own, smaller friction.

With an invented measured drag of 30 newtons, friction accounts for about 16 of them. Splitting and rebuilding gives a ship resistance of about 348 kilonewtons. Scaling the whole 30 newtons by the cube of 25 instead gives 481, 38 per cent too high, which would mean specifying engines far bigger than needed. The learner also sees how the tow speed changes with scale: a 1 to 10 model runs at 2.44 metres a second, a 1 to 50 model at just 1.09.

### Ages 8 to 11

Race paper boats of different sizes along a gutter of water and time them, then build a Scratch race with the results.

### Ages 11 to 15

Compute Froude numbers in Python and find the right tow speed for models at several scales.

### Ages 15 and up

Add Reynolds numbers and the friction formula, split the drag properly, and compare with naive cube scaling.

### A real tank, an imaginary ship

The tank's history comes from the Historic Environment Scotland listing. The ship, the model, the measured drag and every result are invented or calculated by us, using standard formulas and typical water properties, and do not describe any test carried out at Dumbarton.

Why the Denny tank

## The world's first privately owned test tank

What the Category A listing records.

| Listing detail | What it records |
| --- | --- |
| Built | 1882 to 1883, for Denny's of Dumbarton |
| People | E R Mumford, superintendent; he and William Froude had earlier set up a tank at Torquay |
| Frontage | A carved panel of William Froude; inscribed Leven Ship Yard Experimental Tank |
| Inside | A long narrow brick-lined tank with teak walkways and tracks for sliding platforms |
| First experiment | 21 February 1883, according to Experiment Book No. 1 |
| Significance | The first privately owned experimental tank in the world, said to be the oldest still in existence |

Scaling from a model is everywhere in engineering and science: wind tunnels for cars and buildings, wave tanks for offshore wind turbines, lab reactors for chemical plants, and small computer simulations that stand in for big ones. In each case some quantities scale neatly and others refuse to. A West Dunbartonshire student who has split a model's drag before scaling it knows to ask which parts of any model really carry over.

We have no link with Historic Environment Scotland or West Dunbartonshire Council. The listing's facts belong to them; the model ship, the calculations and any errors belong to us.

Learning path

## From paper boats to similarity laws

Stages are guides; the free trial decides where to begin.

P1 to P4

### Races and timers

Block coding with moving objects, speeds and stopwatches.

[Scratch Coding for Kids](/courses/scratch-programming-complete-course)[Coding for Kids](/courses/kids-coding-blocks-masterclass)P5 to S2

### Ratios in Python

Typed Python with scale, ratios and square roots.

[Maths Through Coding](/courses/maths-through-coding)[Python and AI for Kids](/courses/python-ai-kids-masterclass)S3 to S6

### Physics in code

Formulas, logarithms and models beside National 5, Higher and Advanced Higher courses.

[High School Mathematics](/courses/complete-high-school-mathematics-mastery)[Python for Teens](/courses/python-complete-masterclass-teens)Adults

### Engineering Python

Python for adults, from quick calculations to full simulations.

[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)[Data Analysis Course](/courses/data-analysis-mastery-course-college)AI and scaling

## An AI can scale a test result in seconds. Will it split the friction first?

Multiplying by the cube of the scale is simple, confident and 38 per cent wrong here.

Ask a chatbot to turn a model ship's measured drag into a full-size figure and it may simply multiply by the cube of the scale. The arithmetic is tidy, the answer looks authoritative, and the engines it implies are far bigger than the ship needs.

A West Dunbartonshire learner who has matched one dimensionless number and corrected for the other knows which scaling rule applies to which part. That judgement is what turns AI arithmetic into sound engineering.

Knowing what a model can and cannot tell you is the reason a West Dunbartonshire teenager should still learn to code in 2026. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

How classes work

## From Clydebank to Balloch, lessons at home

Every town in the council area joins classes in exactly the same way.

### Real typing, real bugs

The learner writes each program; the teacher sees the shared screen and helps at the right moment.

### School stage names

A Faifley P5 or a Dumbarton S4 hears the stages they already use, up to Advanced Higher. Lessons are in English.

### Free trial lesson

A full lesson with no charge, then straightforward advice.

### Groups matched by stage

Fifteen to twenty learners at one stage in each group, some local and some far away.

### Term time schedule

Two lessons a week in term; the holidays are free.

### UK time that holds

Your lesson stays at its UK hour through the clock changes; our teachers on India time shift instead.

Why groups reach beyond one town

Five learners at the same stage, free at the same hour, rarely live in one small town. Grouping by stage across a wide pool gives a pupil in Renton or Old Kilpatrick a class that fits.

Fees

## Fees in West Dunbartonshire

Clydebank or Alexandria, the fee is identical, our standard rate for every country outside India.

First class**USD 0**

A full trial lesson at no cost, then a recommendation.

Group tuition**USD 100**

About eight lessons a month in a group of fifteen to twenty.

Private tuition**USD 150**

About eight lessons a month, one-to-one.

Fees are in US dollars; there is no sterling price. We bill only once the trial has settled a course and a weekly time, and the pricing page explains holidays, missed lessons and switching formats.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20West%20Dunbartonshire%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)Reviews

## Google reviewers on our teaching

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

## Book a free West Dunbartonshire lesson

Give us the learner's age or stage and one interest, and we will build a first lesson around it: a Scratch boat race, a Python program, or the model ship on this page.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented West Dunbartonshire one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20West%20Dunbartonshire%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)

Submitted details are used for placement and follow-up.

FAQ

## West Dunbartonshire questions

The council area, the test tank project and practical points.

### What is the population of West Dunbartonshire?

Roughly 88,400 residents in about 42,600 households, according to NRS's rounded 2022 census figures.

### What are the main towns in West Dunbartonshire?

NRS mid-2020 estimates: Clydebank 25,620, Dumbarton 20,480, Bonhill 9,060, Alexandria 6,710 and Duntocher and Hardgate 6,680.

### What is the Denny tank project?

Learners scale an invented 1:25 model ship test up to a 100 metre ship in Python, match Froude numbers, correct for friction using Reynolds numbers, and find naive scaling 38 per cent too high.

### What is a Froude number?

Speed divided by the square root of gravity times length. Ships and models with the same Froude number make similar wave patterns.

### How old is the Dumbarton ship model tank?

Historic Environment Scotland dates it to 1882 and 1883, with the first experiment on 21 February 1883, and lists it at Category A.

### Where do lessons take place?

Online only, so learners join from home anywhere in West Dunbartonshire.

### Do you teach Higher Maths?

Yes, along with National 5 Maths and Computing Science. We teach for understanding and never guarantee grades.

### What ages can learn?

From 6 to 67, from block coding for young children to Python for adults.

### What does it cost?

The trial lesson is free, then USD 100 a month in a group or USD 150 a month one-to-one.

### Are there lessons in the school holidays?

No, lessons pause. Send us your school's holiday weeks.

Nearby pages

## Pages near West Dunbartonshire

[East Dunbartonshire](/coding-classes-in-east-dunbartonshire) splits the West Highland Way into fair days, [Inverclyde](/coding-classes-in-inverclyde) floods a dry dock and [Renfrewshire](/coding-classes-in-renfrewshire) rolls a lifting bridge. All councils are on our [Scotland](/coding-and-ai-classes-in-scotland) page, and the [UK hub](/coding-classes-in-united-kingdom) covers the rest.

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20West%20Dunbartonshire%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/coding-classes-in-west-dunbartonshire*
