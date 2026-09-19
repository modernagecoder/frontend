---
title: "Coding Classes in Stillorgan, Dublin | Modern Age Coders"
description: "Coding, Python, AI and maths lessons for Stillorgan learners from age 6 to 67, taught live online in small same-level groups or one to one. The first lesson is free."
canonical: https://learn.modernagecoders.com/coding-classes-in-stillorgan-dublin
source: src/pages/coding-classes-in-stillorgan-dublin.html
---
> Stillorgan learners are taught live on video by a teacher, either in a small group of people working at the same level or one to one, normally two lessons a week, and anyone aged six through sixty-seven can take part. Nobody has to travel. The opening lesson is free; each month after that is USD 100 in a group or USD 150 one to one.

[Home](/) / [Ireland](/coding-classes-in-ireland) / [Dún Laoghaire-Rathdown](/coding-classes-in-dun-laoghaire-rathdown) / Stillorgan

Stillorgan, County Dublin / Live online

# Coding classes in Stillorgan

**What are the best coding classes in Stillorgan?** Stillorgan learners are taught live on video by a teacher, either in a small group of people working at the same level or one to one, normally two lessons a week, and anyone aged six through sixty-seven can take part. Nobody has to travel. The opening lesson is free; each month after that is USD 100 in a group or USD 150 one to one.

The county council publishes the boundary of the Stillorgan Local Area Plan as a list of 735 corners, and it states the area inside as 161,513 square metres. Give those corners to a standard area formula without thinking and it returns 269,680, two thirds too much. Nothing is wrong with the formula or with the file. The corners are written in degrees, and at Stillorgan a degree east covers much less ground than a degree north. This page teaches a learner to spot that, fix it in three steps of increasing care, and land within half a square metre of the council's figure.

Facts last verified 20 September 2026. Teaching is online; no Stillorgan branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Four first courses for Stillorgan

Pick by age to begin with; the teacher confirms the level in the free first lesson and suggests a different course if it fits better.

- [Coding for Kids](/courses/kids-coding-blocks-masterclass) (Ages 6 to 10): Blocks on a grid: drawing a shape from its corners and counting the squares inside it.
- [Python and AI for Kids](/courses/python-ai-kids-masterclass) (Ages 10 to 13): Python with coordinates, turning a list of corners into a perimeter and an area.
- [Data Science for Teens](/courses/data-science-course-for-teens-python-data) (Ages 13 to 18): Map data in Python: reading GeoJSON, converting degrees to metres and checking results against an official figure.
- [Data Analysis Course](/courses/data-analysis-mastery-course-college) (College and adult): For adults who work with locations, sites or service areas and need numbers that hold up on the ground.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Degrees are not metres: measuring the Stillorgan plan area from its corners

The boundary comes from the council's development plan data, in two versions of the same 735 corners: one in latitude and longitude, one in metres on the Irish grid. The council's own figure for the area is 161,513 square metres.

**One boundary, four ways of measuring it**

| How the corners are treated | Area in square metres | Against the council figure |
|---|---|---|
| Degrees counted as 111,320 m in both directions | 269,680 | 67 percent too big |
| Longitude shrunk by the cosine of the latitude, round Earth | 160,846 | 0.41 percent too small |
| Separate north and east scales for the flattened Earth | 161,514 | within half a square metre |
| Irish grid coordinates, already in metres | 161,513 | the same figure |

### Why degrees mislead

At Stillorgan a degree of latitude is 111,292 metres of ground but a degree of longitude is only 66,688, because the lines of longitude draw together towards the pole. Count both as 111,320 metres, the length of a degree at the equator, and every east-west step is stretched, so the area comes out 1.670 times too large: almost exactly one over the cosine of the latitude.

### A round Earth

Shrinking each east-west step by the cosine of the latitude repairs nearly all of it: 160,846 square metres, 0.41 percent short. The remainder is there because the Earth is slightly flattened, and one radius cannot fit the north-south and east-west directions at once.

### A flattened Earth

Using the separate north-south and east-west scales of the GRS80 ellipsoid at Stillorgan's latitude gives 161,513.82 square metres, within half a square metre of the council's 161,513.34. The perimeter agrees as well, at 3,902.6 metres.

### Ask what one unit of each coordinate means on the ground

A pair like 53.29 and minus 6.20 looks like an ordinary x and y, and an area formula will turn a list of them into a number without complaint. The number is in square degrees, and a square degree is not a fixed patch of land: at Stillorgan it is a rectangle about 111 kilometres tall and 67 wide. Before any sum, check what a step in each coordinate is worth in metres, and convert both directions to the same thing. The formula was never the problem; the input was.

The learner's program opens the council's GeoJSON file, pulls out the 735 corners (the file lists 736 points because the last repeats the first to close the ring) and adds up the cross-products of neighbouring corners, the shoelace formula, first on the raw degrees and then after each conversion. It then reads the shapefile, a binary format with the same boundary in Irish grid metres, and gets 161,513.3, the council's own number, which shows the file and the method agree. Two details come up on the way. The signed area is positive in one file and negative in the other, because the GeoJSON walks round the boundary anticlockwise and the shapefile clockwise, so the program takes the size and ignores the sign. And the perimeter suffers less than the area in the naive version, 5,294 metres against 3,902.6, because stretching the map east-west lengthens the east-west part of each edge and leaves the north-south part almost as it was.

### Inside the line

With the boundary in hand, the program tests named points. Stillorgan Library is inside. Of the 290 traffic-signal sites the council lists, four are inside, and of the 14 whose names begin with Stillorgan Road only one, at Stillorgan Park, falls within the plan area.

### A link that moved

The plan-area file stores a web address for the Stillorgan plan, and that address now returns a page-not-found error; the plan sits at a different address on the council's site. Data outlives its links, so a careful program records where each fact came from and checks it still resolves.

### Rounded for the reader

The same file rounds the area to 16 hectares. At 10,000 square metres to the hectare, the unrounded figure is 16.15, which is the kind of detail a program should keep until the final line.

## Stillorgan in the words of its council, its water utility and its schools

Each line below is taken from the body responsible for the place.

**Named places in Stillorgan**

| Place | What its own source says |
|---|---|
| Stillorgan Library | St Laurence's Park, A94 XT02 |
| St Raphaela's Primary School | St Raphaela's Road, A94 R7N8 |
| Stillorgan Reservoir | A covered store for 160 million litres of treated drinking water |
| Stillorgan Local Area Plan | Adopted 10 September 2018, extended 13 November 2023 |

### The reservoir

Uisce Éireann says the covered reservoir holds 160 million litres of treated drinking water for more than 200,000 people in south Dublin. It was built within the footprint of the Gray Reservoir, which had not been fully drained since it was built in 1885; construction began in November 2018.

### Where the water comes from

The utility names two treatment plants that feed it, Vartry in County Wicklow and Ballymore Eustace in County Kildare. The original Vartry scheme included a four-kilometre tunnel under Callowhill and 40 kilometres of trunk mains to Stillorgan.

### The plan

The council adopted the Stillorgan Local Area Plan on 10 September 2018 for six years, and on 13 November 2023 extended it for a further five. St Raphaela's Primary School lists STEM among its school initiatives.

**What this page does not claim** No population is stated for Stillorgan, because the page uses only what named bodies publish about the place. The plan boundary is a planning line, not the edge of the village, and the reservoir figures are Uisce Éireann's own.

## A Stillorgan learner's week

Most weeks bring two lessons, each one taught live by the teacher throughout.

### Children

Children start with block code and grid games, drawing shapes from their corners and counting what fits inside.

### Teenagers

Teenagers go on to Python, websites, AI projects and real map files like the plan boundary, with the maths laid bare by the code.

### Adults

Adults can arrive with no experience; the first lesson decides the course.

Boundary, library and signal-site data are Dún Laoghaire-Rathdown County Council's; the areas, perimeters and inside-or-outside results are our own calculations, run on 20 September 2026. Reservoir details are Uisce Éireann's and school details the school's own.

## From squares on a grid to shapes on the Earth

Use the bands as a first guess; lesson one sets the level.

- **Ages 6 to 10: Count the squares** Block-coded shapes on a grid, with areas found by counting. [Coding for Kids](/courses/kids-coding-blocks-masterclass), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **Ages 11 to 13: Corners to area** Python that walks round a list of corners and adds up an area. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [Maths Through Coding](/courses/maths-through-coding)
- **Ages 14 to 18: Degrees to metres** Latitude, longitude and the conversions that make map arithmetic honest. [Data Science for Teens](/courses/data-science-course-for-teens-python-data), [Python for Teens](/courses/python-complete-masterclass-teens)
- **Ages 18 to 67: Location data at work** Sites, catchments and boundaries measured so that the numbers match the ground. [Data Analysis Course](/courses/data-analysis-mastery-course-college), [Data and AI Analytics for Non-Programmers (Excel, Sheets, Power BI)](/courses/data-and-ai-analytics-for-non-programmers-course)

## Ask an assistant to find the area of a boundary

It may write the formula perfectly and still get the answer wrong.

Give an AI assistant a list of latitude and longitude pairs and ask for the area inside, and it may well produce correct-looking code for the shoelace formula and a confident number. Unless it converts the degrees first, that number is in the wrong unit, and for the Stillorgan boundary it is two thirds too big. The code runs; the answer is still wrong.

The learner who has done this project knows the question to ask next: what is a degree of longitude worth in metres here, and does the result match the council's own figure? An assistant can then help with the conversion, and the official number is the check.

Correct code on the wrong units gives a wrong answer. A learner who checks the units catches it. The longer argument is in [why learning to code is still worth the time](/blog/is-coding-worth-learning-2026).

## How lessons run for Stillorgan

The essentials.

- **In real time** No recorded video stands in for the teacher: every lesson happens live, with help on each learner's own code.
- **Matched by stage** Five to ten learners at the same stage, whether they join from Stillorgan, another county or another country.
- **Fixed days** Two set days a week, which comes to about eight lessons in a month.
- **Term-aware** The plan leaves room for school holidays, mid-terms and exams.
- **Equipment** A laptop or desktop computer, a microphone, something to listen through, and broadband that copes with a video call.
- **One to one** Private teaching when a learner is well ahead, needs extra time, or can only manage unusual hours.

**Nothing to travel to** There is no Modern Age Coders building in Stillorgan or anywhere in Ireland. Lessons happen on video and are identical wherever the learner sits.

## Fees for Stillorgan

Briefly.

- First class: USD 0. The first lesson, level check included, costs nothing.
- Group tuition: USD 100 a month. One month in a same-level group of five to ten: roughly eight live lessons.
- Private tuition: USD 150 a month. One month of one-to-one teaching on the same pattern.

Outside India every family pays the same fee in US dollars, a month at a time. The opening lesson carries no obligation and billing starts only when the course does; the pricing page explains holidays, missed lessons and moving between group and private lessons.

## Stillorgan coding class questions

### Is there a Modern Age Coders centre in Stillorgan?

No. We teach live over video and have no premises in Ireland. A learner needs a computer, a microphone and sound, and a reliable connection. The phone number on this page is an Indian one.

### What is the plan boundary project?

The learner takes the 735 corners of the Stillorgan Local Area Plan boundary from the council's files and works out the area inside: 269,680 square metres if the degrees are treated as metres, 161,513.82 once north and east are converted properly, against the council's 161,513.34.

### Is the plan boundary the edge of Stillorgan?

No. It is the area the council's local plan covers. The page uses it as a real, published shape to measure, not as a definition of the district.

### Why does this page give no population for Stillorgan?

District pages here print only what named bodies publish about the place, in this case the council, Uisce Éireann and a school, and none of them gives a head count for Stillorgan.

### What times are the lessons?

After school on weekdays and through the evening, plus daytime at weekends. Times are quoted in Irish time. India, where the teachers are based, sits five and a half hours ahead of Stillorgan from the end of October to the end of March and four and a half hours ahead for the rest of the year, and the timetable only uses hours that suit both.

### Can an adult sign up?

Yes. Anyone up to sixty-seven is welcome, including complete beginners, and after the free lesson they choose between a same-level group and one-to-one lessons.

### Will my child be with other children from Stillorgan?

Only by chance. Groups are formed by level, so classmates may live anywhere in Ireland or further away.

### What do coding classes in Stillorgan cost?

The first lesson is free. After that a group place is USD 100 a month for about eight live lessons, two a week, in a group of five to ten learners, and one-to-one teaching on the same schedule is USD 150 a month. Terms are agreed before anything is paid.

### How large are the groups?

Five to ten learners, matched by level, pace and goals rather than by age or postcode. If no group fits a workable time, the lessons are one to one.

## Around Stillorgan

To the north-east, [Blackrock](/coding-classes-in-blackrock-dublin) has a project on DART waiting times, while [Sandyford](/coding-classes-in-sandyford-dublin) and [Dundrum](/coding-classes-in-dundrum-dublin) are neighbouring districts with pages of their own. The [Dún Laoghaire-Rathdown](/coding-classes-in-dun-laoghaire-rathdown) page covers the county, and the [Ireland hub](/coding-classes-in-ireland) lists everywhere else.

## Contact

Book the free class on [https://learn.modernagecoders.com/coding-classes-in-stillorgan-dublin](https://learn.modernagecoders.com/coding-classes-in-stillorgan-dublin#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email contact@modernagecoders.com. Rated 4.9 across 547 Google reviews.
