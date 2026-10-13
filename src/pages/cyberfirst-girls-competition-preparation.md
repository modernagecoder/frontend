---
title: "CyberFirst Girls Competition Preparation | Now TechFirst Girls"
description: "Preparing for the CyberFirst Girls Competition, now the TechFirst Girls Competition: Year 8 teams of four, cryptography and logic puzzles, and regional finals."
canonical: https://learn.modernagecoders.com/cyberfirst-girls-competition-preparation
source: src/pages/cyberfirst-girls-competition-preparation.html
---
> Preparing for the CyberFirst Girls Competition, now the TechFirst Girls Competition: Year 8 teams of four, cryptography and logic puzzles, and regional finals.

In short

The competition most families search for as the CyberFirst Girls Competition is now the TechFirst Girls Competition. Gov.uk says "TechFirst is the government's flagship tech skills programme", delivered by the Department for Science, Innovation and Technology, and that "national competitions will run throughout the year with prizes to be won, including the TechFirst Girls Competition this November"; CyberFirst became part of TechFirst from September 2026, with the NCSC continuing to lead the cyber pathway. The NCSC's own announcements describe the competition itself: "girls in Year 8 in England and Wales, S2 in Scotland, and Year 9 in Northern Ireland" entering in "teams of up to four", registered by "a teacher at their school or a school guardian"; an online qualifying round of "puzzles, covering topics from cryptography to AI to logic"; and the highest scoring teams going "to one of 13 finals held across the UK". Since 2017 more than 43,000 girls have taken part. We teach the coding and logic underneath. A first class is free; a group place is USD 100 a month and one-to-one teaching USD 150.

Where to start

## Three courses for a Year 8 team

The qualifying round rewards puzzle thinking and a little code, in that order.

[![Python and AI for Kids course thumbnail](/images/python-kids.webp)  CFG / 01 Python and AI for kids The right level for most Year 8 entrants: typed code, logic and a first look at how AI systems work. Open the syllabus →](/courses/python-ai-kids-masterclass)[![Python for Teens course thumbnail](/images/python-teens.webp)  CFG / 02 Python from start to finish For a student who already writes Python and wants the loops and string work a cryptography puzzle needs. Open the syllabus →](/courses/python-complete-masterclass-teens)[![Problem Solving for Teens course thumbnail](/images/problem-solving-teens.webp)  CFG / 03 Algorithms and data structures Searching, counting and the idea of how many steps a method needs, which is what a logic puzzle is really testing. Open the syllabus →](/courses/problem-solving-dsa-masterclass-teens)

The competition

## A new name, the same one school year

Facts read at gov.uk and ncsc.gov.uk on 20 September 2026, with each attributed where it came from.

| Part | What the source says | Source |
| --- | --- | --- |
| The programme | "TechFirst is the government's flagship tech skills programme opening pathways into the UK's fast-growing tech sector" | gov.uk guidance on TechFirst |
| The competition | "National competitions will run throughout the year with prizes to be won, including the TechFirst Girls Competition this November" | gov.uk guidance on TechFirst |
| The transition | CyberFirst became part of TechFirst from September 2026, with the NCSC continuing to lead the cyber pathway | gov.uk and NCSC |
| Who can enter | "Girls in Year 8 in England and Wales, S2 in Scotland, and Year 9 in Northern Ireland are encouraged to enter" | NCSC announcement |
| Team size | "teams of up to four" | NCSC announcement |
| Registration | "A teacher at their school or a school guardian must act as their mentor and register them" | NCSC announcement |
| The qualifying round | Online "puzzles, covering topics from cryptography to AI to logic" | NCSC announcement |
| The finals | The highest scoring teams go "to one of 13 finals held across the UK", "with one held in each of Scotland, Wales and Northern Ireland and in English regions" | NCSC announcement |
| Scale | "Since 2017, more than 43,000 girls have taken part in the CyberFirst Girls Competition" | NCSC announcement |

On dates we are deliberately vague, and here is why. The NCSC announcement we read gives a qualifying round opening at noon on a Monday in late November with finals on a Saturday in early February, but we could not establish which cycle that announcement belongs to, and gov.uk says only that the TechFirst Girls Competition runs "this November". Rather than print a date we cannot place in a year, this page describes the shape of the cycle and sends you to the organiser.

That shape is: an online qualifying round in November, sat by teams in school, and regional finals in February. A teacher registering a team in September or October is ahead of it.

The single-year-group rule is the thing most parents are surprised by. This is a Year 8 competition in England and Wales, S2 in Scotland and Year 9 in Northern Ireland: one cohort, nationally, with no discretion to enter a keen Year 7 or a strong Year 9 alongside them.

Which makes the timing worth knowing a year early. A girl in Year 7 who would enjoy this has one shot at it, next autumn, and a teacher who realises that in the summer term has time to form a team.

Sources: [gov.uk, TechFirst](https://www.gov.uk/guidance/techfirst) and the [NCSC CyberFirst Girls Competition pages](https://www.ncsc.gov.uk/cyberfirst/girls-competition), read 20 September 2026. The NCSC's competition page no longer carries the competition's details, which is part of why this page exists. Modern Age Coders is not connected with DSIT, the NCSC or IBM.

The method

## How many questions does it take to find one thing?

Cryptography and logic puzzles look like different subjects. Underneath a great many of them is a single idea about information, and it can be taught in ten minutes.

**I am thinking of a number between 1 and 1,000. You may ask yes or no questions. How many do you need to be certain?** Most people guess a large number or say it depends on luck. The answer is exactly ten, it does not depend on luck, and knowing why changes how a team attacks a puzzle round.

| Possibilities | Questions needed | Why |
| --- | --- | --- |
| 10 | 4 | 2 to the power 3 is 8, too few; 2 to the power 4 is 16 |
| 100 | 7 | 2 to the power 6 is 64, too few; 2 to the power 7 is 128 |
| 1,000 | 10 | 2 to the power 9 is 512, too few; 2 to the power 10 is 1,024 |
| 43,000 | 16 | Enough to identify any one of the girls who have entered since 2017 |

### Each question halves it

A good question splits the possibilities as near to evenly as it can. "Is it more than 500?" leaves 500 either way. "Is it 7?" leaves 999 if the answer is no.

### Why ten and not nine

Nine questions can distinguish at most 512 things, and there are 1,000. No cleverness gets round that, which is what makes it a bound rather than a tactic.

### What it means in a puzzle

When a puzzle gives you a small number of chances, count how many possibilities each one can eliminate. If the arithmetic does not work, you are meant to find extra information somewhere, not guess harder.

We checked this by simulating every target from 1 to 1,000 rather than trusting the formula, because the formula is exactly the sort of thing that is right in general and wrong at the edges. It came out at ten, matching the arithmetic.

The habit worth teaching a team is to ask, before starting: how many possibilities are there, and how much does each move cut them down? Teams that do this stop brute-forcing puzzles that were never meant to be brute-forced.

It transfers directly to the cryptography end of a qualifying round. A cipher with a small number of possible keys can be broken by trying them all; one with an enormous number cannot, and the puzzle is then about finding a weakness rather than a bigger computer. Counting the possibilities tells you which kind you are looking at.

And it is a genuinely good thing for a thirteen-year-old to carry away from a competition, whatever their score: the difference between a problem that is hard and a problem that is impossible.

The figures are ours, computed on 20 September 2026 by simulating every possible target rather than applying the formula. No competition puzzle is reproduced anywhere on this page.

How to practise

## A team, an hour a week, and no pressure at all

The qualifying round is online, in school, and sat by four girls who may never have done anything like it.

| Worth doing | Why | Not worth doing |
| --- | --- | --- |
| Splitting the puzzles by taste | A four-person team will contain someone who likes codes and someone who likes logic | Everyone working on the same puzzle at once |
| Writing down what has been ruled out | Most logic puzzles are won by elimination, and elimination that is not written down is lost | Holding the deductions in four separate heads |
| A little Python | Counting letters, trying possibilities and checking a pattern are all faster written down | A full programming course started in October |
| Counting the possibilities first | It tells the team whether to try everything or look for a shortcut | Guessing quickly to feel productive |
| Treating it as an afternoon out | It is a puzzle round for thirteen-year-olds, not an exam | Any talk of a result before the round |

The most useful thing a school can do is enter a team at all. More than 43,000 girls have taken part since 2017, and the great majority of them were not planning a career in cyber security when their teacher signed them up.

For a girl who enjoys it, the follow-on is not more cyber: it is programming. Almost everything interesting in the qualifying round gets easier once you can write twenty lines of Python.

We teach the coding and the logic and nothing about entering: registration is a teacher's job, and we have no role in the competition or any relationship with the people who run it.

Other competitions in the same term are on the [competitions calendar](/uk-coding-maths-and-ai-competitions-calendar), including the [Bebras Challenge](/bebras-computational-thinking-challenge-practice-uk) in November, which is open to every year group and needs no programming at all.

Getting ready

## Four rungs, and a Year 7 girl has a year to climb them

The competition comes once, in one school year, so the preparation that matters happens before it.

| Stage | Rung | The sign it is secure |
| --- | --- | --- |
| Year 6 to 7 | 1. Enjoying puzzles | Will sit with a logic problem rather than ask for the answer |
| Year 7 | 2. Writing deductions down | Keeps a record of what has been ruled out and why |
| Year 7 to 8 | 3. A little code | Can write a loop that tries every possibility |
| Year 8 | 4. Counting first | Asks how many possibilities there are before starting |

### If November is close

Do one puzzle a week as a team, out loud, with someone writing down what has been eliminated. That is the round.

Do not start a programming course in October. A few lines of Python helps; a half-finished course does not.

### After the competition

Programming is the natural next step, and everything in the qualifying round becomes easier with it.

The [competitions calendar](/uk-coding-maths-and-ai-competitions-calendar) lists what else is open, including contests with no year-group restriction at all.

The full list

## Courses for a curious Year 7 or Year 8

Grouped by what a student can do now, with the syllabus behind each card.

I

### Starting out

Ages 9 to 12

CFG / A / 01

#### Scratch for kids

Logic and sequence, before the typing.

[Open the syllabus](/courses/scratch-programming-complete-course)

CFG / A / 02

#### Coding for kids, blocks to AI

Games and apps, then a first look at AI.

[Open the syllabus](/courses/kids-coding-blocks-masterclass)

CFG / A / 03

#### Maths through coding

Counting and patterns, written as programs.

[Open the syllabus](/courses/maths-through-coding)II

### The competition year

Ages 12 to 14

CFG / B / 01

#### Python and AI for kids

Typed code and how AI systems actually work.

[Open the syllabus](/courses/python-ai-kids-masterclass)

CFG / B / 02

#### Python from start to finish

Strings, loops and functions, to fluency.

[Open the syllabus](/courses/python-complete-masterclass-teens)

CFG / B / 03

#### Minecraft coding for kids

From blocks to real code, in a world she knows.

[Open the syllabus](/courses/minecraft-coding-for-kids-course)III

### Going further

Ages 14 to 18

CFG / C / 01

#### Algorithms and data structures

How many steps a method needs, and why it matters.

[Open the syllabus](/courses/problem-solving-dsa-masterclass-teens)

CFG / C / 02

#### GCSE Computer Science

Taught to the board the school uses.

[Open the syllabus](/courses/gcse-computer-science-course)

CFG / C / 03

#### AI and machine learning for teens

What is actually happening inside the tools she hears about.

[Open the syllabus](/courses/ai-ml-masterclass-teens)IV

### Building things

For students who want a project

CFG / D / 01

#### Full stack web development

A site with its own database.

[Open the syllabus](/courses/full-stack-web-development-teens-masterclass)

CFG / D / 02

#### App development

Screens, taps and what the app remembers.

[Open the syllabus](/courses/complete-app-development-masterclass-for-teens)

CFG / D / 03

#### Data science with Python

Patterns in real data rather than exercises.

[Open the syllabus](/courses/data-science-course-for-teens-python-data)

How lessons run

## Small groups, early evening, and puzzles talked through out loud

Lessons are live on video from India, five and a half hours ahead of the UK in winter and four and a half in summer, at a time agreed and kept in UK time.

Early weekday evening

The usual slot for Years 7 and 8.

Later weekday evening

For older students.

Weekend morning

For a longer session on one problem.

### Reasoning out loud

Students say what they have ruled out and why, which is the habit a team round needs.

### Girls-only groups where wanted

We run mixed groups by default and girls-only groups where a family prefers one.

### Fifteen to twenty students

Enough for a better method to surface, small enough that nobody stays quiet.

### Our own puzzles

Written by us. We do not reproduce competition material.

### One to one on request

For a student who would rather think aloud without an audience.

### No part in the competition

A teacher registers a team. We have no role in the competition and promise nothing about it.

Student work

## What our students build

Four things students here have made and published, none of them for a contest. The [student labs](/student-labs) page has more.

![NutriLife AI nutrition coach project screenshot](/images/projects/nutrilife.webp)

AI and ML

#### NutriLife

An AI nutrition coach that reads what you eat and works you toward a target.

by Bhavya · [Open it](https://nutrilife-bhavya.lovable.app)

![Misti AI chatbot for maths and coding screenshot](/images/projects/misti.webp)

AI and ML

#### Misti

A chatbot that answers mathematics and programming questions, built and deployed by a student.

by Harshit · [Open it](https://misti.modernagecoders.com)

![GuardianX AI internet safety assistant screenshot](/images/projects/guardianx.webp)

AI and ML

#### GuardianX

An assistant that helps a young person recognise unsafe situations online.

by Vivaan · [Open it](https://guardianx-cybersaver.lovable.app)

![SkyCast weather forecast application screenshot](/images/projects/skycast.webp)

Web app

#### SkyCast

A weather forecasting site with live conditions for any location.

by Krish

Fees

## Fees

The same monthly price in US dollars wherever a family lives outside India. Nothing to join, and you can stop at the end of any month.

Free first class

USD 0

no card required

- A full lesson on a real puzzle
- A straight read on the level
- No card details taken

Book it

Group batch

USD 100

a month, billed in US dollars

- Fifteen to twenty students at one level
- The same teacher every week
- Work talked through together
- A certificate at the end

Start here

One to one

USD 150

a month, billed in US dollars

- A teacher working with one student
- Shaped around what she finds hard
- Useful when a group hour will not fit

Enquire

What families say

## Rated 4.9 across 547 Google reviews

Reviews left on our Google profile by families, printed as written.

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

CyberFirst Girls questions

## What parents and teachers ask

### Is the CyberFirst Girls Competition still running?

Yes, under a new name. Gov.uk says the government runs a TechFirst Girls Competition in November, and CyberFirst became part of TechFirst from September 2026, with the NCSC continuing to lead the cyber pathway.

### Who can enter?

The NCSC's own announcement says girls in Year 8 in England and Wales, S2 in Scotland and Year 9 in Northern Ireland, in teams of up to four.

### Who registers a team?

A teacher at the school or a school guardian must act as mentor and register the team. A family cannot enter a girl directly, and neither can we.

### What is in the qualifying round?

An online set of puzzles covering topics from cryptography to AI to logic, sat by the team.

### What happens to the top teams?

The highest scoring teams go to one of 13 finals held across the UK, with one in each of Scotland, Wales and Northern Ireland and the rest in English regions.

### When exactly does it run?

The shape is a November qualifying round and finals in February. We do not print exact dates because gov.uk says only that the competition runs in November and we could not date the NCSC announcement that carries specific dates. Check the organiser.

### How many girls take part?

The NCSC says more than 43,000 girls have taken part since 2017.

### Does my daughter need to be able to code?

No. The round is puzzles rather than programming, though a little Python makes several kinds of puzzle much quicker. A full programming course started in October is not the answer.

### What is the one idea worth teaching first?

Counting the possibilities. Ten yes or no questions can pin any number from 1 to 1,000 and nine cannot, because nine questions can only distinguish 512 things. Knowing whether a puzzle can be brute-forced saves more time than any trick.

### What do classes cost?

The first lesson is free. A group place is then USD 100 a month and one-to-one teaching USD 150, with nothing to pay to register.

Related pages

## Other contests in the same term

What else is open to a Year 8 student in the autumn, and where the whole year is listed.

### [UK Bebras Challenge](/bebras-computational-thinking-challenge-practice-uk)

November, free, every year group, no programming.

### [National Cipher Challenge](/national-cipher-challenge-preparation)

Ten challenges from September to January.

### [Perse Coding Team Challenge](/perse-coding-team-challenge-preparation)

Teams, hidden tests, January and March.

### [UK competitions calendar 2026-27](/uk-coding-maths-and-ai-competitions-calendar)

Dates for every contest, checked with the people who run them.

### [Coding classes in the UK](/coding-classes-in-united-kingdom)

The four school systems, and every UK page.

### [Choosing an online class](/best-online-coding-classes-uk)

How to tell a serious provider from a well-designed one.

Start here

## Book a free lesson

Tell us the year group and whether she has written any code. The free lesson works through a real puzzle, and we say afterwards what we saw.

Rather read first? Syllabuses are on the [course pages](/courses), the method on [how we teach](/how-we-teach), and the topic order on the [roadmap](/coding-roadmap).

[WhatsApp us](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20my%20daughter%20is%20entering%20the%20CyberFirst%20or%20TechFirst%20Girls%20Competition%20and%20I%20would%20like%20a%20free%20class.) · [+91 91233 66161](tel:+919123366161) · [connect@modernagecoders.com](mailto:connect@modernagecoders.com)

The quickest route to us is usually a WhatsApp message, which is free from a UK mobile. The number is Indian, as we state everywhere, and there is no office in Britain.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/cyberfirst-girls-competition-preparation*
