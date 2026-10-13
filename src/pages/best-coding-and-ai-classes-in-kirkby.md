---
title: "Coding and AI Classes in Kirkby, Merseyside | Ages 6 to 67"
description: "Live online coding and AI classes for Kirkby, Northwood, Southdene, Tower Hill and Westvale, ages 6 to 67: Python, vibe coding and agents. The first lesson is free."
canonical: https://learn.modernagecoders.com/best-coding-and-ai-classes-in-kirkby
source: src/pages/best-coding-and-ai-classes-in-kirkby.html
---
> Live online coding and AI classes for Kirkby, Northwood, Southdene, Tower Hill and Westvale, ages 6 to 67: Python, vibe coding and agents. The first lesson is free.

Skip to contentFirst courses

## Coding and AI courses for Kirkby learners

A place to begin for each age. Whichever you pick, lesson one is free and no card is needed.

[![Problem Solving and Computational Thinking for Kids course thumbnail](/images/problem-solving-kids.webp)Ages 7 to 12Problem Solving and Computational Thinking for KidsHow to think like a programmer: shapes, measurements and precise instructions.See the syllabus](/courses/problem-solving-and-computational-thinking-for-kids)[![Vibe Coding for Kids course thumbnail](/images/vibe-coding-kids.webp)Ages 8 to 12Vibe Coding for KidsVibe coding for children: Scratch games built with an AI, then checked and fixed.See the syllabus](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[![Maths Through Coding course thumbnail](/images/maths-through-coding.webp)Ages 10 to 15Maths Through CodingMaths and Python together, including area, perimeter and the Kirkby shape project.See the syllabus](/courses/maths-through-coding)[![Python Masterclass course thumbnail](/images/python-college.webp)Students and adultsPython MasterclassPython from the start to data, geometry and a first AI agent.See the syllabus](/courses/python-programming-masterclass-zero-to-advanced-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Kirkby and Knowsley

## Kirkby, Northwood, Southdene, Tower Hill and Westvale

Census totals, where the built-up area ends, and the suburb names inside it.

| Area | Population |
| --- | --- |
| Kirkby built-up area | 45,560 |
| Knowsley borough | 154,519 |

Knowsley also contains Huyton, Prescot, Halewood and other places, so the two rows overlap and are not added together. Using the ONS lookup from output areas to built-up areas, the learner finds 137 output areas of the Kirkby built-up area inside Knowsley, holding 43,003 people between them; the rest of the published total lies over the borough edge. postcodes.io lists Northwood and Tower Hill in L33 and Southdene and Westvale in L32 as suburban areas whose nearest postcodes are in the Kirkby built-up area. Local schools follow England's national curriculum. Send the year group, anything from Year 2 up to Year 13, and we can tie lessons to GCSE or A level computer science.

### Merseyside pages

Try [Huyton with Roby](/vibe-coding-and-ai-agents-classes-in-huyton-with-roby), [St Helens](/best-coding-and-ai-classes-in-st-helens), [Liverpool](/best-coding-class-in-liverpool) or the [Merseyside page](/coding-classes-in-merseyside). We set out why thinking comes before AI tools in [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

The Kirkby project

## Scoring 137 neighbourhood shapes, two ways

Census boundaries, two formulas, and a check on how much the drawing itself matters.

Output areas are the smallest areas the census reports on. The learner downloads the full-resolution boundaries of Kirkby's 137 from the ONS: 38,657 corner points in British National Grid metres. Their areas range from about 1.7 hectares to 449, with a median near 5.1. Python computes each area with the shoelace formula and each perimeter by adding up the edges.

Score one is the Polsby-Popper score, four pi times the area divided by the perimeter squared. A circle scores 1 and a square about 0.785; long, ragged shapes score low. Score two is the convex hull ratio: stretch an imaginary rubber band round the shape, and divide the shape's area by the area inside the band. A shape with no dents scores 1. Both are standard; they simply measure different things. Polsby-Popper punishes a long or wiggly edge, while the hull ratio punishes bites taken out of the outline.

| Measure | Lowest | Median | Highest |
| --- | --- | --- | --- |
| Polsby-Popper, full-resolution boundaries | 0.131 | 0.350 | 0.764 |
| Convex hull ratio, full-resolution boundaries | 0.432 | 0.730 | 0.998 |
| Polsby-Popper, generalised boundaries | n/a | 0.412 | n/a |
| Convex hull ratio, generalised boundaries | n/a | 0.757 | n/a |

Mostly the two scores agree: ranked from least to most compact, their rank correlation is 0.913. But they crown different winners. The oddest shape by Polsby-Popper, output area E00032611 with a score of 0.131, is only third by hull ratio. The oddest by hull ratio, E00032982 at 0.432, is sixth by Polsby-Popper. Of the ten least compact areas on each list, seven appear on both. The sharpest disagreement is E00172034, 125th of 137 by one score and 80th by the other.

Then the learner repeats everything on the generalised boundaries the ONS also publishes, drawn with 2,331 corner points instead of 38,657. The median Polsby-Popper score jumps from 0.350 to 0.412, because a smoother edge is a shorter one, while the median hull ratio moves only from 0.730 to 0.757. E00032611 is still the oddest, now scoring 0.159. So a single number reported without its formula and its boundary file is not really a result.

### Ages 8 to 11

Make shapes from the same length of string and find which one holds the most squares.

### Ages 11 to 15

Code the shoelace formula in Python and test it on shapes whose areas you already know.

### Ages 15 and up

Load the ONS boundaries, compute both scores at both resolutions, and compare the rankings.

### Boundaries and credits

Output area boundaries and the output area to built-up area lookup are from the Office for National Statistics under the Open Government Licence. The convex hulls use SciPy. The areas, perimeters, scores and rankings are all from our own run.

Measurement and AI

## What two shape scores teach about AI answers

A confident ranking can rest on choices nobody mentioned.

| What the scores showed | What to ask of AI answers |
| --- | --- |
| Two sound formulas named different oddest areas | Which definition was used? |
| Seven of ten least compact areas matched | How much do the alternatives agree? |
| Smoother boundaries raised one score by 18% | What data, at what detail? |
| The hull ratio barely moved | Which measures are robust to that choice? |
| Every figure came from our own code | Can the result be reproduced? |

Ask an AI chatbot which neighbourhood in a town has the most irregular shape and it may reply with a name and a number, stated with total confidence. Behind that answer sit two decisions, which formula and which boundary file, and a change to either can change the answer. Kirkby learners practise vibe coding with this in mind: they get an AI to draft the geometry code, then check the formula against shapes with known answers and ask what the result depends on. The same scepticism is what makes AI agents trustworthy later. Agents enter the picture once a learner's Python stands on its own, commonly around sixth form or in adult life, and Copilot Studio work happens in private lessons alone. Read [understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-uk) alongside [our agents route for UK students](/ai-agents-course-for-students-uk).

The Office for National Statistics and postcodes.io have no connection with Modern Age Coders. We used their open data; the analysis is ours.

The journey

## String shapes at seven, computational geometry at seventeen

Starting points come from the trial lesson, with the school year as a guide only.

Years 2 to 6

### Shapes and rules

Measuring, comparing and giving exact instructions.

[Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids)[Scratch Coding for Kids](/courses/scratch-programming-complete-course)Years 4 to 8

### Making with code

Scratch projects built with AI help, then first Python.

[Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[Python and AI for Kids](/courses/python-ai-kids-masterclass)Years 9 to 13

### Maths meets Python

Geometry, statistics and algorithms turned into working code.

[Maths Through Coding](/courses/maths-through-coding)[Python for Teens](/courses/python-complete-masterclass-teens)Adults

### Data and agents

Python for real datasets, then agents built on code you understand.

[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)[Data Structures & Algorithms Course](/courses/data-structures-algorithms-masterclass-college)Geometry and AI

## What is a compactness score, and why does it matter when AI gives you a ranking?

A compactness score is a number that says how close a shape is to a circle or to its own outline without dents, and it matters because different scores and different boundary files rank the same places differently, choices an AI answer seldom reveals.

For 137 Kirkby output areas the Polsby-Popper median was 0.350 on full-resolution boundaries and 0.412 on generalised ones, and the oddest area by one score was only third by the other.

A learner who has seen that asks of any ranking, including an AI's, which definition and which data produced it.

For Kirkby teenagers, knowing that every measurement hides a choice is what keeps them in charge of AI tools, and that knowledge comes from coding the measurement yourself. The longer argument is in [whether learning to code is still worth it in 2026](/blog/is-coding-worth-learning-2026).

Lesson set-up

## How Kirkby lessons work

Lessons take place live over video. You need a computer with a keyboard; a tablet on its own is not suitable for Python.

### Learner does the typing

Code is written and run by the learner, with the tutor asking why.

### Level set by the trial

We see the learner's skills in the free lesson before naming a course.

### No payment to try

The first lesson is free and needs no card.

### Classes of fifteen to twenty

Groups share a level, with classmates from across the UK.

### About eight a month

Two lessons a week in term, with Knowsley holidays left free on request.

### No clock-change confusion

Your UK lesson time holds steady all year.

Why lessons are online

Finding fifteen to twenty learners at exactly the same stage is easier across the country than in one town. Video brings them together without travel.

Fees

## Costs for Kirkby learners

Kirkby families pay the same as every learner we teach outside India.

First class**USD 0**

First lesson: free and full length, with our course advice at the end.

Group tuition**USD 100**

Group class, about eight lessons per month.

Private tuition**USD 150**

Private lessons, about eight per month.

Everything is priced in US dollars, with no pound equivalent from us. No charge applies before the trial, and billing starts only when you have settled on a course and a weekly time. The pricing page deals with holidays, absences and a switch from group to private or back.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20would%20love%20a%20free%20coding%20or%20AI%20trial%20lesson.%20We%20are%20in%20Kirkby.)Reviews

## Merseyside families and learners across the UK, reviewing us on Google

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

## Ask for a free Kirkby lesson

Send us an age or school year and one of the learner's interests. A trial could be a string-and-squares puzzle, a Scratch game built with AI, a first Python program, or a first shape measured in code.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Kirkby one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20would%20love%20a%20free%20coding%20or%20AI%20trial%20lesson.%20We%20are%20in%20Kirkby.)

Submitted details are used for placement and follow-up.

FAQ

## Kirkby FAQs

The shape project, compactness, coding, vibe coding and lesson details.

### What is the population of Kirkby?

The ONS gives 45,560 usual residents for the Kirkby built-up area at the 2021 census. Knowsley borough had 154,519.

### Can learners in Kirkby join these coding and AI classes?

Yes, everything is taught over live video to anyone from 6 to 67, whether in Kirkby, Northwood, Southdene, Tower Hill, Westvale or elsewhere in Knowsley.

### What is the Polsby-Popper score?

Four pi times a shape's area divided by its perimeter squared. A circle scores 1, a square about 0.785, and long or ragged shapes score close to 0.

### What is a convex hull?

The smallest shape with no dents that contains every point of an outline, like a rubber band stretched round it. The convex hull ratio divides the shape's area by the hull's.

### What did the Kirkby project find?

Across 137 output areas the two scores mostly agreed, with a rank correlation of 0.913, but named different oddest areas. Smoother boundaries raised the median Polsby-Popper score from 0.350 to 0.412.

### What is vibe coding?

Vibe coding is describing a program to an AI and then running, reading and correcting what it produces. We teach it with typed Python so learners can check it.

### When do learners build AI agents?

When their Python is independent, usually from sixth form or as adults. Copilot Studio agents are one-to-one only.

### Will this help with GCSE maths or computer science?

Area, perimeter, formulas and programming all appear on GCSE courses, which is partly why the project uses them. Grades are never promised.

### How much are lessons?

The first lesson is free. After that, a group costs USD 100 per month and private tuition USD 150 per month.

### Do lessons continue in the holidays?

Only if you want them to. Tell us the dates and we pause.

In the area

## More Merseyside and North West pages

See [Huyton with Roby](/vibe-coding-and-ai-agents-classes-in-huyton-with-roby), [St Helens](/best-coding-and-ai-classes-in-st-helens), [Southport](/best-coding-and-ai-classes-in-southport) and [Liverpool](/best-coding-class-in-liverpool). The [North West page](/coding-and-ai-classes-in-north-west-england) and the [UK hub](/coding-classes-in-united-kingdom) list the rest.

Book the free class[Book a priority demo](/book-demo)[WhatsApp the team](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20would%20love%20a%20free%20coding%20or%20AI%20trial%20lesson.%20We%20are%20in%20Kirkby.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/best-coding-and-ai-classes-in-kirkby*
