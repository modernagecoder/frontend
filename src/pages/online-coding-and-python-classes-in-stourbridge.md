---
title: "Online Coding and Python Classes in Stourbridge | Ages 6 to 67"
description: "Python, coding, AI and vibe coding classes online and live for Stourbridge, Amblecote, Wollaston, Pedmore and Lye learners aged 6 to 67. First lesson free."
canonical: https://learn.modernagecoders.com/online-coding-and-python-classes-in-stourbridge
source: src/pages/online-coding-and-python-classes-in-stourbridge.html
---
> Python, coding, AI and vibe coding classes online and live for Stourbridge, Amblecote, Wollaston, Pedmore and Lye learners aged 6 to 67. First lesson free.

Skip to contentStourbridge course picks

## Python, maths and thinking courses for Stourbridge

Here are four, by age. A live first lesson comes free with each, and no card is needed to reserve it.

[![Problem Solving and Computational Thinking for Kids course thumbnail](/images/problem-solving-kids.webp)Ages 7 to 12Problem Solving and Computational Thinking for KidsLearning to think: balance points, fair summaries and what an average hides.See the syllabus](/courses/problem-solving-and-computational-thinking-for-kids)[![Vibe Coding for Kids course thumbnail](/images/vibe-coding-kids.webp)Ages 8 to 12Vibe Coding for KidsA Scratch game from a spoken idea, built with an AI and checked by the child.See the syllabus](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[![Python for Teens course thumbnail](/images/python-teens.webp)Ages 13 to 17Python for TeensPython to the point of using numpy on coordinates, averages and spread.See the syllabus](/courses/python-complete-masterclass-teens)[![High School Mathematics course thumbnail](/images/high-school-maths.webp)Teens and adultsHigh School MathematicsSecondary maths in full, including the vectors and statistics this project leans on.See the syllabus](/courses/complete-high-school-mathematics-mastery)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Stourbridge and Dudley borough

## Stourbridge, Amblecote, Wollaston, Pedmore and Lye

Two ONS built-up areas in the borough, and the suburbs recorded within Stourbridge.

| Built-up area | Residents (2021) |
| --- | --- |
| Stourbridge | 56,950 |
| Kingswinford | 51,910 |

Each figure is published by the ONS for that built-up area alone, and they are not combined here. Postcodes.io records Amblecote, Wollaston, Pedmore, Norton, Lye, Wollescote, Stambermill and Old Swinford as suburban areas, and in each case the Census output area closest to the recorded point is part of the Stourbridge built-up area. Wordsley, tested the same way, belongs to Kingswinford. Schools in Dudley borough teach England's national curriculum and prepare pupils for GCSE and A level; tell us the term dates and lessons will fit round them.

### Other Dudley borough pages and our approach

See [Dudley](/online-coding-and-python-classes-in-dudley), [Halesowen](/vibe-coding-and-ai-agents-classes-in-halesowen), the [West Midlands county page](/coding-classes-in-the-west-midlands) and the [West Midlands region](/coding-and-ai-classes-in-west-midlands-region). The thinking-first idea is laid out on [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

The Stourbridge project

## Mean centre and standard deviational ellipse: the shape of a town in five numbers

A balance point, two axes and a bearing, from 186 centre points.

The ONS publishes a population-weighted centre point for every Census output area, as an easting and a northing in metres. The Stourbridge built-up area has 186 of them, holding 56,961 residents when we add up the areas ourselves. The learner loads the points into Python and takes the average easting and the average northing, counting each area as many times as it has residents. That is the mean centre: 390495 east, 283903 north, or grid reference SO 904 839. Ignoring population and treating every area equally moves it by only 73 metres.

Next comes spread. The program builds a two-by-two covariance matrix, which records how much the points vary east to west, how much north to south, and how far the two go together. Its eigenvectors are the directions of greatest and least spread, and the square roots of its eigenvalues are the spreads themselves. Python's numpy does this in one call. For Stourbridge the long axis of the ellipse is 1,409 metres either side of the centre and the short axis 904 metres, and the long axis points along a bearing of 110.3 degrees from grid north, a little south of due east.

| Built-up area | Long and short axis | Long divided by short | Bearing of long axis |
| --- | --- | --- | --- |
| Stourbridge | 1,409 m and 904 m | 1.56 | 110.3 degrees |
| Halesowen | 1,733 m and 974 m | 1.78 | 69.3 degrees |
| Sedgley | 1,296 m and 621 m | 2.09 | 4.5 degrees |
| Brierley Hill | 909 m and 769 m | 1.18 | not meaningful |
| Kingswinford | 1,202 m and 1,051 m | 1.14 | not meaningful |

Two lessons hide in that table. First, a direction only means something when the shape is stretched. Kingswinford and Brierley Hill are close to round, so their long axis could swing a long way with a small change in the data, and we decline to report it. Stourbridge is stretched enough to be stable: removing the five areas farthest from the centre changes the axes to 1,370 and 905 metres and the bearing to 110.4 degrees. Second, "one standard deviation" does not hold what most people expect. On a number line, about 68% of bell-shaped data lies within one standard deviation. On a map the matching figure is only about 39%, and Stourbridge's one-standard-deviation ellipse actually contains 28.8% of residents. Enlarging it by the square root of two, as some mapping software does, raises that to 52.0%. Two tools can draw different ovals from the same data and both call them the standard ellipse.

### Ages 8 to 11

Find the balance point of coins on a ruler, then of counters on squared paper, by averaging their positions.

### Ages 11 to 15

Compute a weighted mean centre for 186 points in Python and plot it on a scatter of the town.

### Ages 15 and up

Build the covariance matrix, find its eigenvectors with numpy, draw the ellipse and count who is inside.

### Sources and ownership

Resident counts are Office for National Statistics Census 2021 data from Nomis. Centre points and the area lookup come from the ONS Open Geography Portal. Both are used under the Open Government Licence. The centres, ellipses and percentages are calculated by us, and the ellipse is a statistical summary, not a boundary of any kind.

Summaries and AI

## What an ellipse teaches about vibe coding and AI agents

A neat summary is a claim about the data. It deserves a test.

| In the ellipse project | When AI summarises or plots for you |
| --- | --- |
| 28.8% inside, where many expect 68% | Ask what a label such as "one standard deviation" covers |
| Root-two scaling raised it to 52.0% | Two libraries can differ by an unstated convention |
| Round shapes gave no usable bearing | Some outputs should be withheld, not printed |
| Dropping five areas barely moved it | Check a result by removing a little data |
| Weighting moved the centre 73 m | Know whether the summary counts places or people |

Ask an AI assistant for "the directional distribution of these points" and it will return an ellipse and a bearing to one decimal place, whether or not the shape is stretched enough for the bearing to mean anything. In vibe coding the learner describes and the AI writes, and Stourbridge learners are taught to read the numbers back against the picture and to ask which convention the code used. AI agents that chain several tools together inherit each tool's silent conventions, and a factor of root two can pass unnoticed from one step to the next. Learners move on to building agents when they handle Python without support, commonly at sixteen or older, and Copilot Studio agents are taught privately, one learner at a time. There is more on [our page on AI agents for UK students](/ai-agents-course-for-students-uk) and on [understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-uk).

The ONS, Nomis and postcodes.io are credited as data sources only. They are not partners in this page and have not approved it.

The ladder

## From balance points to numpy

Year groups are guides, not gates. We place learners after a free lesson.

Years 2 to 7

### How to think

Averages, balance and asking what a summary leaves out.

[Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids)[Scratch Coding for Kids](/courses/scratch-programming-complete-course)Years 4 to 8

### Vibe coding for kids

Scratch and starter Python, with an AI drafting and the child testing.

[Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[Python and AI for Kids](/courses/python-ai-kids-masterclass)Years 9 to 13

### Python and maths

Coordinates, vectors and statistics to go with GCSE and A level.

[Python for Teens](/courses/python-complete-masterclass-teens)[High School Mathematics](/courses/complete-high-school-mathematics-mastery)Adults

### Python for data

Programming from scratch through to data analysis and agents.

[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)[Statistics & Probability](/courses/statistics-probability-maths-course)AI and spatial summaries

## What is a standard deviational ellipse, and how is the mean centre of a place calculated?

A standard deviational ellipse is an oval that summarises where a set of points lies, centred on their mean centre and stretched along the direction of greatest spread, and the mean centre is calculated by averaging the eastings and the northings of the points, weighting each by its population if you want the centre of people and not of places.

For the 186 Census areas of Stourbridge the population-weighted mean centre is at grid reference SO 904 839, and the ellipse around it measures 1,409 by 904 metres along a bearing of 110.3 degrees, yet holds only 28.8% of residents.

After drawing it, a learner asks of any AI-made summary what it contains, which convention produced it and whether it would survive losing a few data points.

Stourbridge teenagers who can derive an ellipse from raw coordinates do not mistake a tidy picture for a fact, and it is coding that gives them the means to check. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

Lesson set-up

## Amblecote, Wollaston and Pedmore, by video

What you need at home: a computer with a proper keyboard and a video-capable connection.

### Code written by the learner

Our tutors follow along on a shared screen and ask for a reason behind each line, but do not take over.

### Assessment in lesson one

A free first session shows us the learner's level and, where it applies, the exam board.

### Try before paying

Lesson one is free of charge and concludes with a course we think fits.

### Level-based groups

Fifteen to twenty learners from anywhere in the UK, all at the same stage.

### A twice-weekly rhythm

We break when schools break.

### Hour held constant

Summer time and winter time make no difference to your slot.

Why online works

Level matters more than location. There are seldom five learners at exactly one stage in one town on one evening, and online there always are.

Fees

## Stourbridge fees

Stourbridge comes under the international fees that we charge outside India.

First class**USD 0**

A free lesson, complete in itself, then a course recommendation.

Group tuition**USD 100**

Eight live group lessons a month, give or take.

Private tuition**USD 150**

Eight live private lessons a month, give or take.

Our fees are in US dollars, and we do not publish them in pounds. You receive a first invoice only after the trial, with the course and weekly time agreed. How holidays, absences and format changes work is on the pricing page.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20am%20looking%20for%20a%20free%20coding%20or%20Python%20lesson%20for%20a%20learner%20in%20Stourbridge.)Reviews

## Google reviews by West Midlands families and learners around the UK

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

## Book a free Stourbridge lesson

Share the learner's age or year and one thing they are keen on. The trial could be a balance-point puzzle, a Scratch game drafted by an AI, some early Python, or the mean centre of a handful of real points.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Stourbridge one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20am%20looking%20for%20a%20free%20coding%20or%20Python%20lesson%20for%20a%20learner%20in%20Stourbridge.)

Submitted details are used for placement and follow-up.

FAQ

## Stourbridge questions

Ellipses, mean centres, the Census project, Python and arrangements.

### What is the population of Stourbridge?

According to the ONS, the Stourbridge built-up area had 56,950 residents at the 2021 census.

### Are online coding and Python classes offered in Stourbridge?

Yes. Lessons are live video sessions for ages 6 to 67, open to Amblecote, Wollaston, Pedmore, Lye and all of Dudley borough.

### What is a mean centre?

The average position of a set of points: the mean of their eastings paired with the mean of their northings. Weighting by population gives the balance point of the people.

### How much of the data does a standard deviational ellipse contain?

Less than people expect. For bell-shaped data in two dimensions a one-standard-deviation ellipse holds about 39%, not 68%. For Stourbridge it held 28.8%, and 52.0% when scaled by the square root of two.

### What is the Stourbridge project?

Using Python and numpy to find the population-weighted mean centre and standard deviational ellipse of 186 Census areas, then comparing the result with four other built-up areas in the borough.

### Where does vibe coding fit in?

Learners use it to draft programs: they describe, the AI writes, and they check the output against what they know should be true.

### When does work on AI agents begin?

When Python no longer needs support, commonly at sixteen or older. Copilot Studio agents are private-lesson work.

### Will lessons match GCSE and A level content?

They cover the computer science and maths involved, explained in depth. We cannot and do not promise grades.

### What does it cost?

Your first lesson is free. Then it is USD 100 a month in a group or USD 150 a month for private lessons.

### Do you stop for school holidays?

We do, for whichever dates you tell us.

Also in the area

## More West Midlands pages

Separate pages and separate projects: [Dudley](/online-coding-and-python-classes-in-dudley), [Halesowen](/vibe-coding-and-ai-agents-classes-in-halesowen) (an agent that knows when it is unsure), [Wolverhampton](/best-coding-class-in-wolverhampton) and [Kidderminster](/vibe-coding-and-ai-agents-classes-in-kidderminster). The [UK hub](/coding-classes-in-united-kingdom) links to all the rest.

Book the free class[Book a priority demo](/book-demo)[Reach us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20am%20looking%20for%20a%20free%20coding%20or%20Python%20lesson%20for%20a%20learner%20in%20Stourbridge.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/online-coding-and-python-classes-in-stourbridge*
