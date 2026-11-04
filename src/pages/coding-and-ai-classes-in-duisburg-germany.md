---
title: "Coding and AI Classes in Duisburg, Live Online in English"
description: "Coding and AI classes in Duisburg for children, teens and adults: live online in English, NRW Informatik rules, AI age limits and a Duisburg swimming pool project."
canonical: https://learn.modernagecoders.com/coding-and-ai-classes-in-duisburg-germany
source: src/pages/coding-and-ai-classes-in-duisburg-germany.html
---
> Modern Age Coders runs coding and AI classes for Duisburg learners of every age, live online and in English: children from 6 build Scratch games and move on to Python, teenagers learn Python, data and how machine learning works, and adults learn scripts and AI tools that save real hours. A regular mentor matches each learner's pace and accent, in a group of 15 to 20 or on their own, after school, after work or at weekends.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / [Coding classes in North Rhine-Westphalia](/coding-classes-in-north-rhine-westphalia) / Duisburg, all ages

Duisburg · Coding and AI · Ages 6 to adult

# Coding and AI classes in Duisburg

Duisburg has just over half a million residents, and on this page they could all be in one family: a primary pupil who wants to make a game, a teenager curious about how AI actually learns, and a parent who would like a spreadsheet to sort itself. We teach all three, live and in English. Below you will find how each age starts, what NRW schools already cover, the AI tools each age may legally use, and a project on the city's own swimming pool figures in which the first answer is wrong for a reason every learner should see once.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Ages: 6 to 12, 13 to 18, adults; Children start with: Scratch, then Python; Teenagers start with: Python and real data; Adults start with: Practical scripts and AI tools; Group: 15 to 20 learners, or 1-on-1; First class: Free, no card needed. Rated 4.9 across 547 Google reviews.

## Where a Duisburg child, teenager or adult begins

Three courses, one for each stage of life. The mentor confirms the right one in the free first class, after seeing what the learner can already do.

- [Python and AI for Kids](/courses/python-ai-kids-masterclass): Ages 9 to 12. Typed Python from the first week, turtle drawings, small games and child-safe AI projects that need no chatbot account. Younger children start with Scratch first.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens): Ages 13 to 18. Python and data first, then models the teenager trains, tests and explains, with the maths shown rather than hidden.
- [Data and AI for Non-Programmers](/courses/data-and-ai-analytics-for-non-programmers-course): Adults. Spreadsheets, a little Python and AI assistants used with care, for people who want data work done faster and checked properly.

## Who are coding and AI classes in Duisburg for?

Anyone from about six upwards. What changes with age is not the seriousness of the work but the tools, the pace and what "AI" sensibly means.

**How each age starts with us, and what AI means at that age (our plan)**

| Age | First tool | First real project | What AI means here |
|---|---|---|---|
| 6 to 8 | Scratch blocks | A story or a chase game | Sorting pictures by rules, then talking about how a machine might learn the rule |
| 9 to 12 | Scratch, then typed Python | A quiz or a turtle drawing | Training a tiny classifier on examples the child made up |
| 13 to 18 | Python | Reading a real data file | Building and testing a model against a simple guess |
| Adults | Python and spreadsheets | Automating a weekly chore | Using AI assistants and checking every answer they give |

Our own course plan. The age bands follow the providers' terms for AI tools, set out further down this page.

### For a child of 6 to 12

The youngest learners never sit through a lecture. They drag blocks, press the green flag and see a cat move, and within a few weeks they are making decisions a programmer makes: what should happen first, what repeats, what changes when a key is pressed.

Around nine or ten most children are ready to type. That switch to Python is where a regular mentor matters most, because typing errors frustrate quickly and a good mentor knows when to help and when to wait.

### For a teenager or an adult

Teenagers start where school Informatik often stops: real files, real errors and programs longer than one screen. The AI course then goes inside the models they already use, with numbers they can check.

Adults usually come with a specific job in mind, a report, a list of addresses, a folder of invoices. We start with that job, because a script that saves an hour every Monday keeps anyone motivated through the harder parts.

Duisburg had 502,270 residents on 31 December 2024, according to the Destatis municipal register, which makes it one of the largest cities in Nordrhein-Westfalen. Learners also join us from the towns around it: Oberhausen with 213,646 residents, Mülheim an der Ruhr with 173,050, Krefeld with 231,406 and Moers with 101,503, on the same register. Because every class is online, the city on the address makes no difference to the lesson; it only decides which school holidays apply.

Families with more than one learner often ask whether siblings can share a class. They can share a mentor, but not a group: a seven year old and a fourteen year old learn at different speeds and should be with learners of their own age. Parents in a one-to-one plan can also add a second learner on a separate schedule.

## Which Duisburg swimming pool had the most visitors in 2024?

Stadt Duisburg publishes the number of visitors to its public pools every year, free to reuse under a CC BY 3.0 DE licence. The file is small enough to read by eye and still hides a trap that catches adults as often as children.

### The file

The dataset is called Besucherzahlen der Schwimmbäder in Duisburg. We downloaded its CSV version, Besucherstatistik_5.csv, on 3 November 2026: 601 bytes, separated by semicolons, with one column per year from 2015 to 2024.

It lists six pools by name: Allwetterbad Walsum, Rhein-Ruhr-Bad, HB Toeppersee, HB Neudorf, FB Homberg and the Schwimmstadion. Then comes a seventh line whose name cell is empty.

### The question

Which pool had the most visitors in 2024? A teenager can answer it in a dozen lines of Python, and the first attempt below does exactly what most people would write.

Run it before you read the explanation, and decide whether you believe the answer.

**Attempt 1: read every row and take the largest** (Python)
```python
import csv

with open("Besucherstatistik_5.csv", encoding="utf-8-sig") as f:
    rows = list(csv.reader(f, delimiter=";"))

years = rows[0][1:]
visits = {}
for row in rows[1:]:
    visits[row[0]] = [int(x) for x in row[1:]]

last = years.index("2024")
busiest = max(visits, key=lambda name: visits[name][last])
print("Rows read:", len(visits))
print("Busiest pool in 2024:", repr(busiest), visits[busiest][last])
```
It prints Rows read: 7 and Busiest pool in 2024: '' 478195.

The winner has no name. That seventh line is not a pool at all: it is the city's own total for each year, added at the bottom of the file the way people add a sum row in a spreadsheet. Python cannot know that, so it treats the total as one more pool, and the total of course beats every single pool. Nothing crashed and nothing looked broken; the answer was simply nonsense with a number attached.

**Attempt 2: set the totals row aside, then use it as a check** (Python)
```python
import csv

with open("Besucherstatistik_5.csv", encoding="utf-8-sig") as f:
    rows = list(csv.reader(f, delimiter=";"))

years = rows[0][1:]
pools = {}
total_row = None
for row in rows[1:]:
    numbers = [int(x) for x in row[1:]]
    if row[0].strip() == "":
        total_row = numbers          # the city's own sum, not a pool
    else:
        pools[row[0]] = numbers

i = years.index("2024")
busiest = max(pools, key=lambda name: pools[name][i])
print("Pools:", len(pools))
print("Busiest pool in 2024:", busiest, pools[busiest][i])

ours = [sum(p[k] for p in pools.values()) for k in range(len(years))]
print("Our sums match the total row:", ours == total_row)
```
It prints Pools: 6, Busiest pool in 2024: Rhein-Ruhr-Bad 132229 and Our sums match the total row: True.

The second attempt does two things. It keeps the totals row out of the ranking, and then it turns the trap into a tool: it adds up the six pools for every year itself and compares the result with the city's own totals. They match for all ten years, which tells us no pool is missing and no number was mistyped. The Rhein-Ruhr-Bad had the most visitors in 2024, 132,229 of them.

**Attempt 3: how far had each pool come back by 2024?** (Python)
```python
before = years.index("2019")
low = years.index("2021")
now = years.index("2024")
ranked = sorted(pools.items(), key=lambda kv: kv[1][now] / kv[1][before], reverse=True)
for name, v in ranked:
    print(f"{name:20} 2021: {100 * v[low] / v[before]:5.1f}%   2024: {100 * v[now] / v[before]:5.1f}% of 2019")
```
Run after Attempt 2. It prints six lines, from Schwimmstadion 2021: 23.9% 2024: 107.6% of 2019 down to Rhein-Ruhr-Bad 2021: 18.6% 2024: 69.6% of 2019.

**Visitors in 2021 and 2024 as a share of 2019, per pool (our calculation)**

| Pool | 2021 | 2024 |
|---|---|---|
| Schwimmstadion | 23.9% | 107.6% |
| HB Toeppersee | 38.7% | 101.6% |
| HB Neudorf | 29.4% | 95.5% |
| FB Homberg | 39.5% | 82.6% |
| Allwetterbad Walsum | 23.8% | 69.8% |
| Rhein-Ruhr-Bad | 18.6% | 69.6% |

Data: Stadt Duisburg, Besucherzahlen der Schwimmbäder in Duisburg, opendata-duisburg.de via Open.NRW, licence Creative Commons Namensnennung 3.0 Deutschland (CC BY 3.0 DE), file Besucherstatistik_5.csv downloaded 3 November 2026. The city's totals row reads 584,860 visitors for 2019, 153,953 for 2021 and 478,195 for 2024. The percentages and the ranking are our own.

The table makes a second point that a ranking hides. The Rhein-Ruhr-Bad is the busiest pool in 2024 and also the one furthest below its own 2019 level, while the smaller Schwimmstadion is already above it. "Most visitors" and "recovered most" are different questions with different winners. The file does not say why visitor numbers fell in 2020 and 2021 or why some pools came back faster, so we do not guess; a good analyst writes down what the data cannot tell them.

1. **Ages 6 to 8, on paper.** Write the six pool numbers for 2024 on cards, then add a seventh card with their sum. Ask someone to pick the "biggest pool" from the pile.
2. **Ages 9 to 12, Scratch or Python.** Put the 2024 numbers in a list, find the largest, then add the total to the list and watch it win.
3. **Ages 13 to 18.** Run all three attempts, then draw one line per pool from 2015 to 2024 and describe each shape in one sentence.
4. **Adults.** Open the XLSX version the city also publishes and find the same totals row. Write a rule you would add to any import script at work.

## What do schools in Duisburg teach about computing?

Duisburg is in Nordrhein-Westfalen, and NRW is one of the Länder where Informatik is compulsory for a short stretch. The rules below are taken from the GI monitor of the subject and from the NRW school ministry.

**Computing in an NRW school career**

| Stage | What NRW sets |
|---|---|
| Grundschule, grades 1 to 4 | No separate Informatik subject |
| Grades 5 and 6 | Informatik is a compulsory subject at all general school types |
| Grades 7 to 10 | Informatik depends on the school and on the pupil's choices |
| End of grade 10 | Central ZP10 exams in German, maths and English |
| Qualifikationsphase | Informatik as a Grundkurs of three hours or a Leistungskurs of five, where offered |
| Written Abitur | Informatik tasks set centrally; no computer is used in the written exam |

Read on 2 November 2026: the NRW entry of the GI Informatik-Monitor 2026/27, plus the Schulministerium NRW pages on the Zentrale Prüfungen 10 and on the 2027 Zentralabitur dates.

### What that gives a Duisburg pupil

Two years of compulsory Informatik in grades 5 and 6 is more than many Länder offer. A Duisburg child meets the basic ideas, algorithms, data and how a computer follows instructions, around the age of ten or eleven.

After grade 6 the subject becomes a choice. Nationally, the Informatik-Monitor estimates that about 15 percent of pupils take it in the Qualifikationsphase, so most teenagers leave school with those two early years and little more.

### Where our classes fit

We teach alongside school, not instead of it; the school course is the one that counts for grades. For children before grade 5, our classes are a head start. For grades 7 to 10, they keep programming going when the timetable no longer does.

For an Oberstufe pupil with an Informatik Grundkurs or Leistungskurs, the written Abitur on paper rewards someone who can trace code by hand, which is a skill we practise on purpose. The NRW written Abitur main exams in 2027 run from 13 April to 5 May 2027.

## Which AI tools can each age use in a Duisburg class?

Every AI provider sets a minimum age in its own terms. Our classes follow those terms exactly, which shapes how AI is taught at each age.

### Children under 13

No chatbot accounts at all. Children learn what AI is by building tiny versions of it themselves: a program that sorts animals by rules, a game that gets better from examples. Our AI literacy course is built this way.

### Teenagers 13 to 17

OpenAI's terms allow ChatGPT from 13 with a parent's or guardian's permission. Our teen machine-learning course needs no chatbot: models are written in plain Python, so the teenager sees every number the model learns.

### Adults 18 and over

Adults can use the full range, including tools such as Claude that are for adults only. We teach them to give an assistant a clear task, then to check its work the way Attempt 2 above checks the city's totals.

Minimum ages from the providers' terms, quoted with links in our [AI tools age guide](/ai-tools-age-guide). Terms change; that page records when each was last read.

Our rule for every age is the one the pool project teaches: an answer is not finished when it appears on the screen, whether a person, a script or an AI assistant produced it. The habit of asking "what would make this wrong?" is worth more than any single tool, and it is the difference between a learner who thinks and one who copies.

Teenagers who want to go further can enter the Bundeswettbewerb Künstliche Intelligenz, which requires machine-learning methods and accepts projects in German or in English. Its 2026 final takes place in Tübingen on 13 November 2026. Jugend forscht, which covers informatics and maths among other fields, asks for online registration by 30 November each year. We are not connected with either competition.

## When do classes run in Duisburg time, and do they stop in the holidays?

Children usually come after school or on weekend mornings, adults after work. The mentors are in India, where the clock is ahead of Duisburg all year.

**Example Duisburg class times and the mentor's time in India**

| Class time in Duisburg | Mentor's clock this winter | Mentor's clock after the spring change |
|---|---|---|
| 15:45, after school | 20:15 | 19:15 |
| 18:15, after work | 22:45 | 21:45 |
| Saturday 11:15 | 15:45 | 14:45 |
| Sunday 10:15 | 14:45 | 13:45 |

Clocks: Duisburg runs on MEZ (UTC+1) from late October and on MESZ (UTC+2) from late March, as the Einheitenzeitgesetz lays down. The 2026 change back happened on 25 October, and the 2027 change forward falls on Sunday 28 March. India never changes its clocks (UTC+5:30), so the gap is four and a half hours this winter and three and a half from the end of March. The rows are illustrations, not fixed batch times.

**NRW school holidays 2026/27**

| Holiday | Dates |
|---|---|
| Herbstferien | 17 October to 31 October 2026 |
| Christmas | 23 December 2026 to 6 January 2027 |
| Osterferien | 22 March to 3 April 2027 |
| Pfingsten | 18 May 2027 |
| Sommerferien | 19 July to 31 August 2027 |

Source: Kultusministerkonferenz, Ferien im Schuljahr 2026/2027, Nordrhein-Westfalen row, Stand 9 October 2025. First and last holiday day shown.

Classes do not stop for the NRW holidays, because the mentor's calendar is not tied to them. Many families keep going through the Herbstferien and use the long summer break for a short project course, while others pause for a trip and start again when school does. Just tell your mentor in advance.

## What progress looks like at each age

Our own milestones, used to place learners and to report to them, or to their parents, every month.

**Milestones by age group (ours)**

| Milestone | Children | Teenagers and adults |
|---|---|---|
| First month | A working Scratch game with a score | A script that reads a file and prints a count |
| Third month | Loops, conditions and lists without help | Cleaned data and a chart that answers a question |
| Sixth month | First typed Python programs | A model or an automation tested against a simple baseline |
| After a year | A project shown to the family | A project they can explain to a stranger, limits included |

### Parents of younger learners

A finished game matters less than a child who can tell you why it broke and how they mended it.
Ask your child to show you one bug a week. It turns screen time into a conversation.

### Teenagers and adults

Before you trust a ranking, look for the row that is not like the others.
If your sum matches the publisher's, say so. If it does not, find out why before you go on.

## More coding and AI courses for Duisburg learners

Grouped by age. Each is live, in English, with the same mentor every week, either in a group or solo.

### Children

Ages 6 to 12

- [Scratch for kids](/courses/scratch-programming-complete-course): Three to four months from a blank stage to finished games.
- [AI literacy for kids](/courses/ai-literacy-for-kids-course): What AI is and is not, taught without adult accounts.
- [Vibe coding for kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev): Games made with careful, supervised AI help, 8 to 12.

### Teenagers

Ages 13 to 18

- [Python for teens](/courses/python-complete-masterclass-teens): The full language, from variables to classes and files.
- [Data science for teens](/courses/data-science-course-for-teens-python-data): Real datasets, charts and a first model of their own.
- [Informatik companion](/courses/informatik-companion-course-klasse-5-10): Support next to school Informatik, Klasse 5 to 10.

### Adults

Ages 18 and up

- [Python from zero](/courses/python-programming-masterclass-zero-to-advanced-college): A complete Python course for adult beginners.
- [AI tools for adults](/courses/ai-tools-mastery-complete-college): Assistants and automation for everyday work, checked by you.
- [Generative AI](/courses/complete-generative-ai-masterclass-college): How large language models work and how to build on them.

## How live classes work for Duisburg learners

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **After school** Late afternoon in Duisburg, for children and teenagers.
- **After work** Early evening slots for adults, by agreement.
- **Weekends** Saturday and Sunday mornings, popular with younger children.

- **Live, never recorded** Every lesson has a mentor on the call.
- **One mentor** A familiar face on screen, week after week.
- **English, at their pace** Clear speech, repeated in simpler words when needed.
- **Grouped by age** Children, teenagers and adults never share a group.
- **Monthly reports** A short note on progress, sticking points and the next goal.
- **Two formats** A shared class of 15 to 20, or private lessons.

## Fees for Duisburg learners

Eight live classes a month for one fee, whatever the learner's age. You see that fee in euro, derived from the European Central Bank reference rate; the charge itself goes through in US dollars, and your bank turns it back into euro at its own rate, so expect a few cents of difference.

- Free first class: Free. A free first class for each learner. A short task matched to their age. No card needed.
- Group batch: €90 (charged in US dollars) a month. 15 to 20 learners of a similar age. A regular mentor. Two classes a week. Monthly, cancel any month.
- One to one: €134 (charged in US dollars) a month. One learner, one mentor. A plan built around their goal. Times agreed with you.

## Coding and AI classes in Duisburg: questions and answers

### Are the classes in German?

No. All classes are live and taught in English only. Mentors speak clearly, adjust to the learner's pace and accent, and rephrase when something is not understood. Code itself reads the same in any language.

### What is the youngest age you teach in Duisburg?

Six. Children of six to eight start with Scratch blocks, so they do not need to type or read long instructions. From about nine they can move to typed Python.

### Can adults with no experience join?

Yes. The adult courses start from zero and are built around a task the learner actually has, such as a weekly report or a list that needs sorting. Adults are never placed in a group with children or teenagers.

### Do schools in Duisburg teach Informatik?

Yes, for two years. NRW makes Informatik compulsory in grades 5 and 6 at all general school types. After that it depends on the school and the pupil's choices, and in the Oberstufe it can be a three-hour Grundkurs or a five-hour Leistungskurs.

### Which AI tools will my child use?

Under 13, none that need an account: children build small AI ideas themselves in Scratch or Python. From 13, OpenAI's terms allow ChatGPT with a parent's permission, but our teen course writes models in plain Python and does not need it. Adult-only tools are used only in adult courses.

### When are classes in Duisburg time?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Children usually take late afternoon or weekend morning slots; adults often prefer the early evening.

### Do classes pause during the NRW holidays?

Only if you want them to. The mentors are not on the NRW school calendar, so classes can continue through the Herbstferien, Christmas and summer. Families who travel simply tell the mentor and pick up again afterwards.

### Where are the mentors?

In India. Lessons are live over video, and because India is 4 hours 30 minutes ahead of Duisburg in winter, a 15:45 class in Duisburg is 20:15 for the mentor.

### How much does it cost, and in which currency?

You pay monthly. On this page the fee appears in euro, worked out from the European Central Bank reference rate, while the card is charged in US dollars; the conversion is done by your own bank, which is why a statement rarely shows the euro figure to the cent. Trying a first class costs nothing.

### Can two people in one family learn at the same time?

Yes, in separate groups or separate one-to-one plans, each matched to their age and level. Siblings of very different ages learn better apart, even when they share the same mentor.

## Related pages

- [Coding classes in Germany](/coding-classes-in-germany): Every page we have written for Germany.
- [Coding classes in North Rhine-Westphalia](/coding-classes-in-north-rhine-westphalia): NRW rules, holidays and data.
- [AI and machine learning](/ai-and-machine-learning-classes-in-germany): Models built from first principles.
- [Coding for adults in Germany](/coding-classes-for-adults-germany): Starting from zero after school is over.
- [Python classes for kids](/python-classes-for-kids-germany): When and how children start typing code.
- [Informatik by Land](/informatik-in-german-schools-by-state): How every Land handles the subject.

## More pages for this Land

Part of the guide: [Coding classes in North Rhine-Westphalia](/coding-classes-in-north-rhine-westphalia)

### Cities and pages in North Rhine-Westphalia

- [Coding and AI classes in Bergisch Gladbach](/coding-and-ai-classes-in-bergisch-gladbach-germany)
- [Coding and AI classes in Bielefeld](/coding-and-ai-classes-in-bielefeld-germany)
- [Coding and AI classes in Gütersloh](/coding-and-ai-classes-in-guetersloh-germany)
- [Coding and AI classes in Münster](/coding-and-ai-classes-in-muenster-germany)
- [Coding and AI classes in Neuss](/coding-and-ai-classes-in-neuss-germany)
- [Coding and AI classes in Recklinghausen](/coding-and-ai-classes-in-recklinghausen-germany)
- [Coding classes for kids in Bonn](/coding-classes-for-kids-bonn)
- [Coding classes for kids in Cologne](/coding-classes-for-kids-cologne)
- [Coding classes for kids in Dortmund](/coding-classes-for-kids-dortmund)
- [Coding classes for kids in Düsseldorf](/coding-classes-for-kids-dusseldorf)
- [Coding classes for kids in Essen](/coding-classes-for-kids-essen)
- [Coding classes for kids in Aachen](/coding-classes-for-kids-in-aachen-germany)
- [Coding classes for kids in Krefeld](/coding-classes-for-kids-in-krefeld-germany)
- [Coding classes for kids in Leverkusen](/coding-classes-for-kids-in-leverkusen-germany)
- [Coding classes for kids in Moers](/coding-classes-for-kids-in-moers-germany)
- [Coding classes for kids in Solingen](/coding-classes-for-kids-in-solingen-germany)
- [Coding classes for kids in Wuppertal](/coding-classes-for-kids-in-wuppertal-germany)
- [Coding for international school students in Düsseldorf](/coding-for-international-school-students-dusseldorf)
- [Informatik-Abitur NRW (Unterricht auf Englisch)](/informatik-abitur-nrw)
- [Maths tutor in Cologne, in English](/math-tutor-cologne-in-english)
- [Online Python classes in Bochum](/online-python-classes-bochum-germany)
- [Online Python classes in Bottrop](/online-python-classes-bottrop-germany)
- [Online Python classes in Hagen](/online-python-classes-hagen-germany)
- [Online Python classes in Hamm](/online-python-classes-hamm-germany)
- [Online Python classes in Herne](/online-python-classes-herne-germany)
- [Online Python classes in Mönchengladbach](/online-python-classes-moenchengladbach-germany)
- [Online Python classes in Mülheim an der Ruhr](/online-python-classes-muelheim-an-der-ruhr-germany)
- [Online Python classes in Oberhausen](/online-python-classes-oberhausen-germany)
- [Online Python classes in Remscheid](/online-python-classes-remscheid-germany)
- [Online Python classes in Siegen](/online-python-classes-siegen-germany)
- [Programmieren lernen für Kinder in Düsseldorf (auf Englisch)](/programmieren-lernen-kinder-duesseldorf)
- [Programmieren lernen für Kinder in Köln (auf Englisch)](/programmieren-lernen-kinder-koeln)

More guides: [Coding classes in Lower Saxony](/coding-classes-in-lower-saxony), [Coding classes in Land Bremen](/coding-classes-in-land-bremen), [Coding classes in Hesse](/coding-classes-in-hesse), [Coding classes in Bavaria](/coding-classes-in-bavaria), [Coding classes in Saxony-Anhalt](/coding-classes-in-saxony-anhalt), [Coding classes in Schleswig-Holstein](/coding-classes-in-schleswig-holstein), [Coding classes in Baden-Württemberg](/coding-classes-in-baden-wuerttemberg), [Coding classes in Saarland](/coding-classes-in-saarland), [Coding classes in Rhineland-Palatinate](/coding-classes-in-rhineland-palatinate), [Coding and maths in Berlin](/coding-and-maths-classes-in-berlin-germany), [Coding and maths in Hamburg](/coding-and-maths-classes-in-hamburg-germany), [Coding classes in Saxony](/coding-classes-in-saxony), [Coding classes in Thuringia](/coding-classes-in-thuringia), [Coding classes in Brandenburg](/coding-classes-in-brandenburg), [Coding classes in Mecklenburg-Vorpommern](/coding-classes-in-mecklenburg-vorpommern)

## Contact

Book the free first class at [https://learn.modernagecoders.com/coding-and-ai-classes-in-duisburg-germany](https://learn.modernagecoders.com/coding-and-ai-classes-in-duisburg-germany#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
