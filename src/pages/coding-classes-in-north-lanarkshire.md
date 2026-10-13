---
title: "Coding Classes in North Lanarkshire | Live Online, Ages 6 to 67"
description: "Live online coding, Python and maths classes across North Lanarkshire, from Cumbernauld, Coatbridge and Airdrie to Motherwell, Wishaw and Bellshill."
canonical: https://learn.modernagecoders.com/coding-classes-in-north-lanarkshire
source: src/pages/coding-classes-in-north-lanarkshire.html
---
> Live online coding, Python and maths classes across North Lanarkshire, from Cumbernauld, Coatbridge and Airdrie to Motherwell, Wishaw and Bellshill.

Skip to contentCourses for North Lanarkshire

## How North Lanarkshire learners usually begin

A P2 pupil in Wishaw who loves drawing, a P6 in Cumbernauld ready to type code, an S3 in Coatbridge interested in design, an adult in Motherwell building a portfolio. Each starts with a free lesson.

[![Scratch Coding for Kids course thumbnail](/images/scratch-kids.webp)Ages 6 to 11Scratch Coding for KidsScratch projects with colour, costumes and effects controlled by code.See the syllabus](/courses/scratch-programming-complete-course)[![Python and AI for Kids course thumbnail](/images/python-kids.webp)Ages 9 to 13Python and AI for KidsA first typed language, including programs that mix and compare colours.See the syllabus](/courses/python-ai-kids-masterclass)[![Python for Teens course thumbnail](/images/python-teens.webp)Ages 12 to 18Python for TeensComplete Python for teenagers, from lists and loops to image and colour work.See the syllabus](/courses/python-complete-masterclass-teens)[![Full Stack Developer Course course thumbnail](/images/full-stack-development-college.webp)AdultsFull Stack Developer CourseWeb development for adults, where colour, contrast and accessibility matter every day.See the syllabus](/courses/full-stack-web-development-masterclass-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)North Lanarkshire by numbers

## About 341,000 people in North Lanarkshire

The 341,000 is a 2022 census figure, rounded by National Records of Scotland; the town list below uses a different NRS series dated mid-2020, so the two should not be added together.

| Locality | Residents | Locality | Residents |
| --- | --- | --- | --- |
| Cumbernauld | 50,530 | Viewpark | 15,830 |
| Coatbridge | 43,950 | Kilsyth | 10,380 |
| Airdrie | 36,390 | Shotts | 8,630 |
| Motherwell | 32,840 | Chapelhall | 7,140 |
| Wishaw | 30,050 | Moodiesburn | 6,830 |
| Bellshill | 19,700 | Newarthill | 6,720 |

North Lanarkshire has 725.5 residents per square kilometre, more than ten times Scotland's 69.8. It is also one of the younger council areas: our sums of the census age bands give 16.5 per cent of residents under 15, above the Scottish 15.3, and 17.9 per cent aged 65 or over, below Scotland's 20.1. New Stevenston is the next locality after the table. North Lanarkshire Council sets the school terms; we have not read them, so each family tells us its own dates.

### Glasgow and the exams

The city has its own [Glasgow](/best-coding-class-in-glasgow) page. For qualifications, see [National 5 Computing Science](/national-5-computing-science-help) and [National 5 Maths](/national-5-maths-tuition-online).

The North Lanarkshire project

## Five units, five colours, one misleading distance

Red, green and blue numbers, a better colour space, and a check on readable signs.

The learner starts with thirteen standard web colours, each stored as three numbers from 0 to 255 for red, green and blue. Treating those as a point in a cube, the obvious measure of difference is the straight-line distance between two points. Then the learner converts each colour into CIELAB, a colour space designed so that equal distances look roughly equally different to a human eye, and measures again. The colours are standard ones chosen for the exercise, not the factory's actual paints.

| Pair | RGB distance | CIELAB difference | What it means |
| --- | --- | --- | --- |
| Grey and teal | 128 | 30.5 | Close to the eye |
| Grey and olive | 128 | 58.2 | Twice as distinct |
| Yellow and lime | 255 | 66.3 | Quite similar |
| Lime and cyan | 255 | 104.6 | Very different |
| Blue and navy | 127 | 56.9 | Clearly different |

RGB distance says grey is exactly as far from teal as from olive, 128 either way. CIELAB says teal is only about half as distinct as olive, which the learner can judge by putting the two pairs side by side. Yellow and lime sit as far apart in RGB as lime and cyan, yet look much more alike. The reason is that the eye is far more sensitive to some changes than others, while RGB treats every step of every channel as equal.

Next the learner picks five colours for five factory units, trying to make the closest pair as different as possible. A greedy method, adding at each step whichever colour is furthest from those already chosen, reaches a smallest CIELAB difference of 74.2. Checking all 1,287 possible five-colour sets finds a better answer, red, blue, lime, cyan and olive, at 85.8: greedy is fast, not guaranteed. Finally, labels must be readable. The WCAG contrast ratio, used by web designers, gives white text on yellow just 1.07 to 1, almost invisible, against 19.56 to 1 for black on yellow. White on red scores 4.00, below the 4.5 usually recommended for normal text.

### Ages 8 to 11

Mix colours in Scratch with number sliders, then test friends on which pairs look most alike.

### Ages 11 to 15

Compute RGB distances between colours in Python and find pairs that the numbers get wrong.

### Ages 15 and up

Convert to CIELAB, compare greedy and exhaustive choices of five colours, and add the contrast ratio check.

### A real listing, standard colours

The factory facts come from Historic Environment Scotland. The thirteen colours are standard web colours, and every distance and ratio in the table comes from our own program; none describe the paints actually used at Shotts.

Why the Shotts factory

## A Category A engine works

What Historic Environment Scotland records.

| Listing detail | What it records |
| --- | --- |
| Design | Ahrends, Burton and Koralek, 1975 to 1983, with Ove Arup and Partners |
| Size | Approximately 50,000 square metres inside |
| Layout | Five main units along an east to west axis, following the production flow |
| Colour | Primary colours coding individual units; services painted yellow, green or purple |
| Details | A yellow-painted silo and red-painted tubular and lattice gates |
| Significance | Possibly Scotland's only ergonomic factory building |

Colour decisions made in code are everywhere: charts and dashboards, maps, game interfaces, warning lights and every website. Choosing colours that people can actually tell apart, and text that people can actually read, is now a routine part of software work. A North Lanarkshire student who has caught RGB distance lying knows to measure the way people see.

We have no connection with Historic Environment Scotland, the building's owners or North Lanarkshire Council. The listing facts are theirs; the colour calculations and any errors are ours.

Learning path

## From colour sliders to colour science

The free lesson decides the real starting point; stages are a guide.

P1 to P4

### Colours and effects

Block coding with colours, costumes and simple animations.

[Scratch Coding for Kids](/courses/scratch-programming-complete-course)[Coding for Kids](/courses/kids-coding-blocks-masterclass)P5 to S2

### Numbers behind colour

Typed Python using RGB values, lists and comparisons.

[Python and AI for Kids](/courses/python-ai-kids-masterclass)[Maths Through Coding](/courses/maths-through-coding)S3 to S6

### Design and data

Colour spaces, charts and larger programs beside National 5, Higher and Advanced Higher courses.

[Python for Teens](/courses/python-complete-masterclass-teens)[High School Mathematics](/courses/complete-high-school-mathematics-mastery)Adults

### Web and visual work

Web development and data visualisation for adults.

[Full Stack Developer Course](/courses/full-stack-web-development-masterclass-college)[Data Analysis Course](/courses/data-analysis-mastery-course-college)AI and design

## An AI can choose a colour palette in seconds. Will people be able to read it?

Pleasant-looking colours can still fail the test that matters.

Ask a chatbot for five colours for a dashboard or a map and it will offer something attractive. Whether the closest two can be told apart, or whether white labels on the yellow one can be read at all, usually goes unchecked unless you ask.

A North Lanarkshire learner who has computed CIELAB differences and contrast ratios can check a palette in seconds instead of trusting it. That is the kind of verification every AI-generated design needs.

Measuring whether a design really works for the people using it is the reason a North Lanarkshire teenager should still learn to code in 2026. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

How lessons run

## From Cumbernauld to Shotts, lessons at home

Busy towns and smaller villages across North Lanarkshire join in the same way.

### Hands on the keyboard

Learners write and run their own code; the teacher watches the shared screen and helps at the right moment.

### P, S and National 5, not years

Teachers use the Curriculum for Excellence stages that Motherwell and Airdrie schools use, from P1 to Advanced Higher, and teach in English.

### A free first lesson

A proper lesson at no cost, then a clear suggestion for what to take next.

### Groups by stage

Fifteen to twenty learners at one stage in each group, with classmates from other countries.

### Term time only

Twice weekly in term, stopping for the school holidays.

### UK time that does not shift

Once booked, your lesson stays at its UK time across the clock changes; our India time teachers adjust.

Why stage matters more than town

Even in a town the size of Cumbernauld, five learners at one stage free at one time are hard to find. Grouping by stage across a wider pool places a pupil from Chapelhall or Newarthill in a class that fits.

Fees

## Fees in North Lanarkshire

Airdrie or Kilsyth, the fee is the same, and it matches what we charge in every country outside India.

First class**USD 0**

One full lesson for free, then our recommendation.

Group tuition**USD 100**

About eight lessons a month in a group of fifteen to twenty at one stage.

Private tuition**USD 150**

About eight lessons a month with your own teacher.

Fees are in US dollars, and there is no sterling price list. No money changes hands until the trial lesson has fixed a course and a weekly slot. Holiday breaks, missed sessions and swaps between formats are covered on our pricing page.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20North%20Lanarkshire%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)Reviews

## Google reviewers on our lessons

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

## Book a free North Lanarkshire lesson

Who is learning, how old are they or what stage are they in, and what do they enjoy? With that we might open with a Scratch animation, a Python program, or the colour project on this page.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented North Lanarkshire one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20North%20Lanarkshire%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)

Submitted details are used for placement and follow-up.

FAQ

## North Lanarkshire questions

The council area, the colour project and practical details.

### What is the population of North Lanarkshire?

The 2022 census, rounded by NRS, puts it at roughly 341,000 residents in about 151,400 households.

### What are the biggest towns in North Lanarkshire?

NRS mid-2020 estimates: Cumbernauld 50,530, Coatbridge 43,950, Airdrie 36,390, Motherwell 32,840 and Wishaw 30,050.

### What is the Shotts colour project?

Learners compare how different colours are in RGB numbers and in CIELAB, find pairs RGB gets badly wrong, choose five distinct colours greedily and exhaustively, and check label contrast.

### What is CIELAB?

A way of describing colours designed so that equal distances between them look roughly equally different to people, unlike raw red, green and blue numbers.

### What is the Cummins factory in Shotts?

A former diesel engine plant by Ahrends, Burton and Koralek, built 1975 to 1983 and listed at Category A by Historic Environment Scotland, noted for colour-coding its units.

### Do lessons take place in person?

Never in a hall or centre. A pupil in Bellshill and one in Kilsyth both open the same video link from home.

### Do you teach National 5 Computing Science?

Yes, and Higher too, along with maths at both levels. We teach understanding and never promise grades.

### What ages can join?

Ages 6 to 67: blocks for young children, Python and exam maths in secondary, and web or Python courses for adults.

### What does it cost?

Zero for the trial lesson; then USD 100 monthly in a group of fifteen to twenty, or USD 150 monthly on your own with a teacher.

### What happens in the school holidays?

We break when your school breaks. Forward the dates North Lanarkshire Council gives your school and those weeks stay lesson-free.

More nearby

## Pages around North Lanarkshire

Our [Falkirk](/coding-classes-in-falkirk) page grows seeds at the golden angle, [East Dunbartonshire](/coding-classes-in-east-dunbartonshire) splits a long walk into fair days, and [Glasgow](/best-coding-class-in-glasgow) has its own city page. Every other council is on the [Scotland](/coding-and-ai-classes-in-scotland) page. The [UK hub](/coding-classes-in-united-kingdom) covers the rest.

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20North%20Lanarkshire%20and%20would%20like%20to%20book%20a%20free%20lesson%2C%20please.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/coding-classes-in-north-lanarkshire*
