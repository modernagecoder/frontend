---
title: "Maths Tuition in Glasgow | National 5 to Advanced Higher"
description: "Online maths tuition in Glasgow for ages 6 to 67: primary maths, National 5, Higher and Advanced Higher, plus adult learners, with a Subway circle geometry project."
canonical: https://learn.modernagecoders.com/maths-tuition-in-glasgow
source: src/pages/maths-tuition-in-glasgow.html
---
> Online maths tuition in Glasgow for ages 6 to 67: primary maths, National 5, Higher and Advanced Higher, plus adult learners, with a Subway circle geometry project.

In short

We teach maths live online to Glasgow learners aged 6 to 67: primary maths from P1 to P7, S1 to S3 maths in the broad general education, then SQA National 5, Higher and Advanced Higher Mathematics, plus adult refreshers. Classes hold fifteen to twenty learners at one level, or a learner can work one to one. Our Glasgow example is the Subway: a least-squares circle through its 15 stations has a radius of 1,600.1 metres, but the stations lie between 1,304.4 and 1,891.5 metres from its centre, a good test of the Higher Maths equation of a circle. A first lesson is free; ongoing places are USD 100 a month in a group or USD 150 a month one to one.

Typical starting points in Glasgow

## Three common first steps

Pick by stage. The full list, from early number to university study, is further down.

[![Elementary Maths for Grades 1-5 course thumbnail](/images/elementary-maths.webp)  GLA / 1 Primary maths, P1 to P7 Number, fractions, measure and shape, explained until each idea can be put into words. Open the syllabus →](/courses/elementary-mathematics-complete-masterclass)[![Middle School Mathematics Mastery course thumbnail](/images/middle-school-maths.webp)  GLA / 2 S1 to S3 maths Algebra, ratio, angles and data in the broad general education, so National 5 starts on firm ground. Open the syllabus →](/courses/comprehensive-middle-school-mathematics-mastery)[![A-Level Maths course thumbnail](/images/a-level-maths.webp)  GLA / 3 Higher-level maths Written for English A level; its pure content overlaps heavily with Higher and Advanced Higher, and we steer it to the SQA course specification. Open the syllabus →](/courses/a-level-maths-course-pure-mechanics-statistics)

Maths in Scotland

## National 5, Higher and Advanced Higher maths for Glasgow learners

Scotland has its own curriculum and exams. A Glasgow pupil does not sit GCSEs or A levels; those belong to the English system. Here is the Scottish route, and what our lessons focus on.

| Stage | Usual ages | Our focus |
| --- | --- | --- |
| P1 to P3 | 5 to 8 | Counting, place value, adding and subtracting with confidence, shape and pattern. |
| P4 to P7 | 8 to 12 | Times tables, fractions and decimals, measure, and explaining a strategy aloud. |
| S1 to S3 | 11 to 15 | Algebra, ratio, angles, Pythagoras and handling data in the broad general education. |
| National 5 | 14 to 16 | SQA National 5 Mathematics: algebra, geometry including arcs and sectors, trigonometry and statistics. |
| Higher | 15 to 17 | SQA Higher Mathematics: straight lines, circles, functions, calculus and vectors. |
| Advanced Higher | 16 to 18 | Further calculus, complex numbers, matrices, proof and series. |
| Adults | 18 to 67 | Rebuilding confidence, returning to National 5 or Higher, or maths for work. |

### National 5 maths tutor

SQA National 5 Mathematics (course code C847 75) sits at SCQF level 5. Its course specification lists, among much else, the "Relationship in a circle between the centre, chord and perpendicular bisector" and "Calculating the length of an arc". Both appear in our Subway project below.

Many learners who struggle at National 5 have one shaky foundation, usually fractions or algebraic manipulation. We find it in the trial lesson and fix it before anything else.

### Higher and Advanced Higher maths tutor

Higher Mathematics (C847 76) sits at SCQF level 6. The specification asks candidates to be "determining and using the equation of a circle" and to use "properties of medians, altitudes and perpendicular bisectors" with straight lines. Advanced Higher Mathematics (C847 77) at SCQF level 7 goes on to deeper calculus, complex numbers and proof.

Our national pages go further: [National 5 maths](/national-5-maths-tuition-online), [Higher maths](/higher-maths-tuition-online) and [Advanced Higher maths](/advanced-higher-maths-tuition-online).

Sources: [National 5 Mathematics course specification](https://www.sqa.org.uk/sqa/files_ccc/n5-course-spec-mathematics.pdf) and [Higher Mathematics course specification](https://www.sqa.org.uk/sqa/files_ccc/h-course-spec-mathematics.pdf), read on 1 October 2026. The awarding body's site now shows both the names Qualifications Scotland and SQA. Age ranges are typical, not rules.

The Glasgow project

## Is the Glasgow Subway really a circle?

Fifteen stations, one loop. The question is simple enough for P7 and deep enough for Higher, and it has a numerical answer.

On 1 October 2026 we downloaded the 15 Subway stations from OpenStreetMap, the volunteer-built map. We turned each station's latitude and longitude into flat coordinates in metres, which is accurate enough over a few kilometres, and then asked a computer for the circle that sits closest to all 15 points at once.

That fitted circle has a radius of 1,600.1 metres. Its centre lands roughly 100 metres from a postcode in the G3 district. Measured from that centre, St George's Cross is the closest station at 1,304.4 metres and Partick the furthest at 1,891.5 metres.

So the loop bulges in some places and pinches in others. The typical station sits about 176 metres off the fitted circle (root mean square 195.8 metres), roughly a ninth of the radius. Round enough to call it a circle in conversation; not round enough to call it one in a maths lesson.

There is a nice check on that. Join the stations in order with straight lines and the 15-sided shape has a perimeter of 10,261 metres. Divide by the fitted diameter and you get 3.206. For a true circle that ratio would approach π, and 3.206 is a surprisingly good guess at 3.14159 from a railway map.

| Station | Distance from centre | Off the circle by |
| --- | --- | --- |
| St George's Cross | 1,304.4 m | 295.8 m inside |
| Kinning Park | 1,333.8 m | 266.3 m inside |
| Kelvinbridge | 1,384.0 m | 216.1 m inside |
| Ibrox | 1,645.0 m | 44.9 m outside |
| Buchanan Street | 1,775.5 m | 175.4 m outside |
| Bridge Street | 1,839.8 m | 239.7 m outside |
| Partick | 1,891.5 m | 291.4 m outside |

Data: [OpenStreetMap contributors](https://www.openstreetmap.org/copyright), nodes tagged as Subway stations in Glasgow City, one Overpass query on 1 October 2026. Station positions are mapped points, not platform centres. The fitted circle, distances and ratios are Modern Age Coders' calculations; they are not published by SPT and they are not track lengths.

Higher Maths, on a real map

## The equation of the Subway circle, and the circle through three stations

Put the origin at Buchanan Street, measure in kilometres with east as x and north as y, and the fitted circle has an equation a Higher candidate can read at a glance.

### Centre and radius

With that origin, our fitted circle has centre (−1.775, −0.058) and radius 1.600, both rounded to the nearest metre. In the form Higher uses, that is (x + 1.775)² + (y + 0.058)² = 1.600². Expanded, it becomes x² + y² + 3.549x + 0.117y + 0.592 = 0, and a learner can work backwards from the expanded form to the centre and radius, which is a classic exam step.

Substitute a station into the left-hand side and the sign tells you which side of the circle it is on: negative inside, positive outside. Govan, at (−3.570, −0.018), gives a positive answer, so it lies outside, which matches the table above.

### Three stations, one circle

Any three points that are not in a straight line lie on exactly one circle. Its centre is where the perpendicular bisectors of two chords meet, the idea National 5 states and Higher puts to work. Choose different trios of stations and you get different circles.

Hillhead, St Enoch and Cessnock give a radius of 1.602 km, almost identical to our fitted circle. Govan, Buchanan Street and Shields Road give 1.831 km. That spread is the clearest possible evidence that the stations are not on one circle: if they were, every trio would agree.

| Three stations | Radius, km |
| --- | --- |
| Hillhead, St Enoch, Cessnock | 1.602 |
| Partick, Cowcaddens, Kinning Park | 1.599 |
| Kelvinbridge, Bridge Street, Ibrox | 1.625 |
| Govan, Buchanan Street, Shields Road | 1.831 |
| Least-squares fit to all 15 | 1.600 |

Arc length gives a National 5 version. Seen from the centre, neighbouring stations are on average 24.0° apart. The widest gap, Shields Road to Kinning Park, is 33.4°, an arc of about 933 metres on the fitted circle; the narrowest, Partick to Kelvinhall, is 14.8°, about 413 metres. Learners compute those with (angle ÷ 360) × 2πr, and then discuss why an arc is not the same as the tunnel between two stations.

All coordinates, equations and arcs are our calculations from the OpenStreetMap download above, rounded as shown. SQA wording from the [Higher Mathematics course specification](https://www.sqa.org.uk/sqa/files_ccc/h-course-spec-mathematics.pdf).

Maths beyond lessons

## Masterclasses, Maths Circles and the Scottish Mathematical Challenge

Glasgow has a lot going on for learners who enjoy maths. These details come from the University of Glasgow's public engagement page; we take part in none of it.

### Royal Institution Masterclasses

The page says the Strathclyde Series "is hosted by the University of Glasgow. It runs for 6 weeks in the autumn term, starting at the end of October." Each Saturday morning brings a different speaker.

### Maths Circles

Run with the charity We Solve Problems "for motivated pupils from P7-S4". The page adds that they "take place on Saturdays throughout the academic year and are free to attend (booking is required)".

### Scottish Mathematical Challenge

The page notes it "celebrated its 50th anniversary in 2026", with Junior (S1 and S2), Middle (S3 and S4) and Senior (S5 and S6) divisions, and a separate primary competition run by the University of Strathclyde.

The university page explains how to book each of these. A learner who loves problems would get a great deal from the Maths Circles, which are free.

UK-wide competitions, such as the UK Mathematics Trust challenges, are open to Scottish schools too. Our [competitions calendar](/uk-coding-maths-and-ai-competitions-calendar) keeps the dates in one place.

Our own teaching is live on video, so a learner in Partick, Shawlands or Dennistoun joins from home. Groups are formed by level, which means a Glasgow learner may share a class with someone in Edinburgh, Aberdeen or further afield.

The Subway project is good practice for challenge papers: it rewards a clear argument, such as the point that every trio of stations would agree if the loop were truly a circle.

Source: [University of Glasgow, School of Mathematics & Statistics, Community and Public Engagement](https://www.gla.ac.uk/schools/mathematicsstatistics/outreach/), read on 1 October 2026. Modern Age Coders has no connection with the University of Glasgow, the Royal Institution, We Solve Problems, the University of Strathclyde or any Glasgow school.

Adult learners

## Maths tuition for adults in Glasgow

Plenty of our learners are adults: some returning to a qualification, many simply wanting maths to make sense at last.

### From the beginning

Number, fractions, percentages and simple algebra, taken slowly and explained properly, without anyone watching the clock.

### Back to National 5 or Higher

For college entry, a change of career or personal satisfaction. We follow the SQA course specification and use past-paper style questions.

### Maths at work

Spreadsheets, rates, percentages and charts. Our [adult maths page](/online-maths-classes-for-adults-in-uk) explains how adult groups run.

Adults often light up at the Subway project, because so many have ridden the loop for years without ever asking how round it is. Ten minutes with a coordinate grid turns a familiar journey into a piece of geometry they can explain to anyone.

The route

## From counting to circle equations, in four steps

Each step relies on the one before. A learner enters at whatever step fits, which the free lesson reveals.

| Usually | Step | Secure when the learner |
| --- | --- | --- |
| P4 to P7 | 1. Number and measure | Converts between units and explains each step of a calculation |
| S1 to S3 | 2. Algebra and shape | Solves linear equations and uses Pythagoras on a coordinate grid |
| S4 | 3. National 5 geometry | Finds an arc length and the centre of a circle from two chords |
| S5 and S6 | 4. Higher reasoning | Writes and interprets the equation of a circle from given information |

### Joining in S4 or S5

It is not too late. We secure algebra first, because almost every Higher question leans on it, then build up the geometry.

If the gap is larger than the months left, we will say so plainly after the trial.

### Beyond Higher

Some learners continue to Advanced Higher; others try [statistics and probability](/courses/statistics-probability-maths-course) or [maths through coding](/courses/maths-through-coding), where a short program fits the Subway circle for them.

A few discover problem solving and head for competition maths.

Our courses

## Maths courses for Glasgow learners

Arranged by stage. Courses written for English exams are matched topic by topic to SQA content when a Glasgow learner takes them.

I

### Primary

P1 to P7

MTG / A1

#### Early number

Counting, shape and sorting for P1 and P2.

[Open the syllabus](/courses/early-math-foundations)

MTG / A2

#### Primary maths

Every primary topic, explained as well as practised.

[Open the syllabus](/courses/elementary-mathematics-complete-masterclass)

MTG / A3

#### Mental maths

Sharp calculation without pencil and paper.

[Open the syllabus](/courses/mental-maths-mastery-kids)

MTG / A4

#### Abacus maths

Counting beads that turn into a mental image.

[Open the syllabus](/courses/abacus-mental-maths-course-for-kids)II

### S1 to S4

BGE and National 5

MTG / B1

#### S1 to S3 maths

The broad general education years.

[Open the syllabus](/courses/comprehensive-middle-school-mathematics-mastery)

MTG / B2

#### Algebra foundations

For learners whose algebra needs rebuilding.

[Open the syllabus](/courses/algebra-foundations-masterclass)

MTG / B3

#### National 5 level maths

An English GCSE course used as a National 5 topic match.

[Open the syllabus](/courses/gcse-mathematics-mastery)

MTG / B4

#### IGCSE maths

For international school entries.

[Open the syllabus](/courses/igcse-mathematics-mastery)III

### S5, S6 and beyond

Higher and further

MTG / C1

#### Higher level maths

English A level content, steered to Higher and Advanced Higher.

[Open the syllabus](/courses/a-level-maths-course-pure-mechanics-statistics)

MTG / C2

#### Statistics

Data, probability and inference.

[Open the syllabus](/courses/statistics-probability-maths-course)

MTG / C3

#### University maths

Calculus and linear algebra at degree level.

[Open the syllabus](/courses/college-mathematics-complete-masterclass)

MTG / C4

#### Competition maths

Problem solving for challenge papers.

[Open the syllabus](/courses/olympiad-competition-mathematics-mastery)IV

### Applied and adult

Work and interest

MTG / D1

#### Business maths

Interest, loans and investment explained.

[Open the syllabus](/courses/complete-business-finance-mathematics-mastery)

MTG / D2

#### Data maths

The algebra and statistics behind analysis.

[Open the syllabus](/courses/data-analytics-mathematics-masterclass)

MTG / D3

#### Maths through coding

Exploring geometry and number in Python.

[Open the syllabus](/courses/maths-through-coding)

MTG / D4

#### Vedic maths

Quick calculation methods for the confident.

[Open the syllabus](/courses/vedic-maths-course-speed-calculation-mastery)

Timings

## When Glasgow learners have their lessons

Our teachers are in India, where the clocks stay put all year. Between late October and late March that puts India five and a half hours ahead of Glasgow; in British Summer Time it is four and a half. We agree every slot in UK time.

After school on weekdays

Primary pupils and S1 to S6.

Weekday evenings

Senior phase learners and adults.

Weekend mornings

A quiet hour before the weekend gets busy.

### The same teacher

Every week, so small habits and slips are noticed.

### Short updates

A note after lessons on what is secure and what is next.

### Groups by level

Fifteen to twenty learners, all working at one level.

### Real maps and data

Station coordinates, census tables and weather records in lessons.

### One to one

For a single difficult topic or the weeks before an exam.

### Reasons, not tricks

Learners explain why a method works before practising it.

Student work

## Projects our learners have gone on to build

Learners who began with coordinates and calculations made the four projects below. The [student labs](/student-labs) have more.

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

Charged monthly in US dollars, at one price for every country outside India, with no registration fee and no long contract.

Free first class

USD 0

no card required

- A complete lesson at the right level
- Our honest assessment
- No card needed

Book it

Group batch

USD 100

a month, billed in US dollars

- Fifteen to twenty learners at the same level
- A regular teacher
- Homework marked and explained
- A certificate on completion

Start here

One to one

USD 150

a month, billed in US dollars

- One learner, one teacher
- Targeted at the precise gap
- Valuable in the run-up to exams

Enquire

What families say

## Rated 4.9 across 547 Google reviews

Taken word for word from reviews families and learners left on Google.

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

Glasgow maths questions

## Questions Glasgow families and adult learners ask

### What is the equation of a circle?

A circle with centre (a, b) and radius r has equation (x − a)² + (y − b)² = r². It comes from Pythagoras: every point on the circle is exactly r from the centre. SQA Higher Mathematics also uses the expanded form x² + y² + 2gx + 2fy + c = 0.

### How much does a maths tutor cost in Glasgow?

The trial lesson is free. After that a group place is USD 100 a month and one to one lessons are USD 150 a month, with no extra fees.

### Are you a National 5 maths tutor?

Yes. We teach National 5 Mathematics, steering lessons to the SQA course specification and practising the kinds of question the course assessment uses.

### Do you offer Higher and Advanced Higher maths tutoring?

Yes, both. Higher covers straight lines, circles, functions, calculus and vectors; Advanced Higher adds further calculus, complex numbers, matrices and proof.

### Which school year is best for starting a maths tutor?

Whenever a learner first starts to feel lost, before the gap grows. We teach from P1 age through to adults of 67.

### Is online maths tuition as good as face to face?

For most learners it works very well: the teacher sees the working appear on screen and corrects it straight away. Every lesson is live with a real teacher, and groups keep the same teacher.

### Do you teach GCSE or A level?

Yes, for learners in the English system. Glasgow pupils normally sit SQA qualifications, so for them we teach to National 5, Higher and Advanced Higher instead.

### Do you teach adults in Glasgow?

Yes, from first steps to National 5 and Higher, in adult groups or one to one.

### Can you guarantee an A at Higher?

No. Nobody can honestly guarantee a grade. We teach thoroughly and keep you informed about progress.

### Are you part of the University of Glasgow or SQA?

No. We mention public events and documents so families know about them. We have no link with any university, the awarding body, or any school.

Related

## More for Glasgow learners

Scottish maths pages, our Scotland page and our coding page for the city.

### [National 5 maths tuition](/national-5-maths-tuition-online)

The National 5 course, topic by topic.

### [Higher maths tuition](/higher-maths-tuition-online)

Straight lines, circles, calculus and vectors.

### [Advanced Higher maths](/advanced-higher-maths-tuition-online)

The final step of Scottish school maths.

### [Coding classes in Glasgow](/best-coding-class-in-glasgow)

Our coding page for the city.

### [Maths tuition in Edinburgh](/maths-tuition-in-edinburgh)

Gradients up Arthur's Seat.

### [Scotland](/coding-and-ai-classes-in-scotland)

Our page for learners across Scotland.

Start here

## Book a free maths lesson

Tell us the learner's age or school year, P or S, and the topic that feels toughest. The trial is a real lesson, and we tell you honestly afterwards where the learner stands.

Would you like to browse first? See our [courses](/courses) or our page on [teaching method](/how-we-teach).

[WhatsApp us](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20maths%20lesson%20for%20a%20learner%20in%20Glasgow.) · [+91 91233 66161](tel:+919123366161) · [connect@modernagecoders.com](mailto:connect@modernagecoders.com)

Messages sent on WhatsApp are answered first. You will see an Indian country code, because that is where our team works; there is no office in Scotland, and every lesson takes place online.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/maths-tuition-in-glasgow*
