---
title: "Coding and AI Classes in Münster, Live Online in English"
description: "Coding and AI classes in Münster for children, pupils, students and adults: live online in English, NRW Abitur 2027 dates and a Münster car park forecasting project."
canonical: https://learn.modernagecoders.com/coding-and-ai-classes-in-muenster-germany
source: src/pages/coding-and-ai-classes-in-muenster-germany.html
---
> Modern Age Coders teaches coding and AI to Münster learners of all ages in live online classes held in English. Children from 6 start with Scratch and move to Python; school pupils add data work, machine learning and support next to NRW Informatik; university students and professionals learn Python, data science and AI they can test. Learners keep one mentor, who gets used to their speed and the way they speak, and choose between a shared class of 15 to 20 and private lessons.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / [Coding classes in North Rhine-Westphalia](/coding-classes-in-north-rhine-westphalia) / Münster, all ages

Münster · Coding and AI · Children to professionals

# Coding and AI classes in Münster

Most of what people call AI is prediction: what word comes next, which film you will like, how busy a road will be at five. On this page Münster learners of every age try a prediction of their own, on the city's car park data, and discover that the most useful step is not a clever formula but choosing what to compare with. Around that project you will find who learns with us from Münster and where each starts, what NRW schools teach up to the 2027 Abitur, and when live classes in English fit a Münster day.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Ages: 6 to adult; Children: Scratch, then Python; School pupils: Python, data, Informatik support; Students and adults: Python, data science, AI; Group: 15 to 20 learners, or 1-on-1; First class: Free, no card needed. Rated 4.9 across 547 Google reviews.

## Three ways into coding and AI from Münster

One course for younger children, one for secondary pupils and one for students and adults. The free first class confirms the choice.

- [Coding for Kids](/courses/kids-coding-blocks-masterclass): For 6 to 12 year olds over ten to twelve months: Scratch games and stories, then simple apps and a first, account-free look at how AI learns.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens): For 13 to 18 year olds. Python and data, then forecasting and models they train and test themselves, of the kind used in the car park project.
- [Data Science Masterclass](/courses/data-science-complete-masterclass-college): For university students and working adults. Python, statistics and machine learning on real datasets, through to deep learning.

## Who learns coding and AI with us from Münster, and where do they start?

Münster is a city of schools, students and offices, and our Münster learners reflect that. Here are the four starting points we see most often.

1. **A primary pupil of 6 to 10.** Starts with Scratch: characters that move, talk and keep score. AI arrives as a game of rules, where the child sorts things by a rule and then watches a program learn one from examples. No accounts, no chatbots.
2. **A secondary pupil of 10 to 18.** Starts with typed Python, then data. Pupils in an NRW Informatik course use the classes to practise reading and tracing code, which the paper-based written Abitur rewards; others use them to go further than school offers.
3. **A university student.** Often studying something that is not computer science, and suddenly needing Python for a thesis, a statistics module or a lab. Starts with Python and pandas-style data work on their own files, then models.
4. **A working adult.** Wants to automate reports, understand what an AI tool is doing, or change direction. Starts from a real task at work and learns exactly the Python, data and AI skills it needs.

Our own placement plan. In every group, learners are placed with others of a similar age and level.

Every class is live and taught in English only, by mentors based in India who match each learner's pace and accent. For a child at a Münster Grundschule that means slow, clear speech and a lot of showing on screen; for a student or professional it means precise technical English, which is the language of nearly every programming manual anyway. Nobody is expected to follow a lecture: learners type, run and fix their own code in every lesson.

Our promise is the same in all four groups. We teach people to think a problem through, not to copy an answer from a classmate, a website or an AI tool. The project below is a good example: the program is short, but the thinking about which comparison is fair is the real work.

## Can a program predict how many spaces a Münster car park will have free?

Münster publishes how many spaces are free in its inner-city car parks, recorded through the day and updated every night, under the Datenlizenz Deutschland Namensnennung 2.0. The city's own description says the data is suitable for predicting how full a car park will be on a given day. So we tried.

### The data

The dataset is Parkhausbelegungen im Verlauf: 2019 bis heute, listed on the city's open data portal, which links to one CSV file per day kept by the Code for Münster group. On 3 November 2026 we downloaded the 29 daily files from 5 October to 2 November 2026.

Each file has a column per car park. The second line gives the capacity in brackets, and the cells after that hold the number of free spaces, or a short text code such as ges or kei when there is no number. We use one car park, PH Theater, listed with 743 spaces.

### The question

If you want to guess how many spaces will be free tomorrow at a given time, what should you look at? The obvious answer is today. The other answer is the same day last week.

We test both on two weeks the guesses have not seen, 20 October to 2 November 2026, between 09:00 and 19:45, and measure how far off each guess is on average.

**Part 1: read every quarter-hour reading for PH Theater** (Python)
```python
import csv
import glob
from datetime import date, timedelta

PARK = "PH Theater"
free = {}                                    # (day, "HH:MM") -> free spaces
for path in sorted(glob.glob("days/*.csv")):
    with open(path, encoding="utf-8") as f:
        rows = list(csv.reader(f))
    col = rows[0].index(PARK)
    for row in rows[2:]:
        day, clock = row[0].split(" ")
        if clock[3:] in ("00", "15", "30", "45") and row[col].isdigit():
            free.setdefault((day, clock), int(row[col]))

print("Readings kept:", len(free))
print("Capacity line:", rows[1][col])
```
It prints Readings kept: 2708 and Capacity line: (743). Readings with a text code instead of a number are skipped.

**Part 2: two simple forecasts, tested on two weeks** (Python)
```python
def error(days_back, test_days):
    misses = []
    for day in test_days:
        past = str(date.fromisoformat(day) - timedelta(days=days_back))
        for (d, clock), now in free.items():
            if d == day and "09:00" <= clock <= "19:45" and (past, clock) in free:
                misses.append(abs(free[(past, clock)] - now))
    return round(sum(misses) / len(misses), 1), len(misses)

test = [str(date(2026, 10, 20) + timedelta(days=i)) for i in range(14)]
print("Guess = yesterday, same time:", error(1, test))
print("Guess = same weekday last week:", error(7, test))
```
Run after Part 1. It prints Guess = yesterday, same time: (149.6, 572) and Guess = same weekday last week: (40.6, 568): the average miss in free spaces, and how many readings were tested.

Guessing from yesterday misses by about 150 spaces on average, a fifth of the car park. Guessing from the same weekday a week earlier misses by about 41. Same data, same simple rule, nearly four times better, just by comparing like with like. The car park clearly has a weekly rhythm, and Part 3 shows where it lives.

**Part 3: which days does each guess get wrong?** (Python)
```python
names = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
for back in (1, 7):
    line = []
    for wd in range(7):
        days = [d for d in test if date.fromisoformat(d).weekday() == wd]
        line.append(f"{names[wd]} {error(back, days)[0]}")
    print(back, "day(s) back:", ", ".join(line))
```
Run after Part 2. It prints 1 day(s) back: Mon 143.0, Tue 37.7, Wed 156.4, Thu 150.2, Fri 35.6, Sat 183.7, Sun 336.3 and 7 day(s) back: Mon 15.0, Tue 47.2, Wed 68.7, Thu 24.2, Fri 40.9, Sat 48.7, Sun 47.7.

**Average miss in free spaces at PH Theater, 20 October to 2 November 2026, 09:00 to 19:45 (our calculation)**

| Day being predicted | Using yesterday | Using the same day last week |
|---|---|---|
| Monday | 143.0 | 15.0 |
| Tuesday | 37.7 | 47.2 |
| Wednesday | 156.4 | 68.7 |
| Thursday | 150.2 | 24.2 |
| Friday | 35.6 | 40.9 |
| Saturday | 183.7 | 48.7 |
| Sunday | 336.3 | 47.7 |

Data: Stadt Münster, Parkhausbelegungen im Verlauf: 2019 bis heute, opendata.stadt-muenster.de, daily files kept by Code for Münster, licence Datenlizenz Deutschland Namensnennung 2.0, downloaded 3 November 2026. Errors, the test period and the weekday split are our own.

The table explains itself once you read it slowly. "Yesterday" works on Tuesdays and Fridays, because Monday is a lot like Tuesday and Thursday a lot like Friday. It fails on Sundays, when yesterday was a Saturday: at noon on the four Saturdays in our files the car park had between 41 and 206 spaces free, and at noon on the four Sundays between 541 and 618. Wednesdays are busy too and stay hardest to predict. Why Wednesday and Saturday? The files do not say, so we leave that to learners to find out and check, which is the right order of things.

This is the honest core of a great deal of AI: before any neural network, find the pattern a simple guess should respect. The test fortnight also fell partly in the NRW Herbstferien, from 17 to 31 October 2026, a reminder that a forecast made for school weeks may need checking in the holidays. A machine-learning model built on top of the weekly rule has to beat 40.6 to be worth having.

1. **Ages 6 to 9.** Keep a week-long chart of how many cars are outside your house at breakfast. Which day looks most like which?
2. **Ages 10 to 12.** In Scratch or Python, store seven numbers for a week and guess next Monday two ways: from Sunday, and from last Monday.
3. **Ages 13 to 18.** Run Parts 1 to 3 for a different car park, then try an average of the last two same weekdays. Does it beat 40.6?
4. **Students and adults.** Count how often each text code appears per car park and decide, with reasons, whether skipping them could bias the error.

## What will a Münster pupil meet in Informatik, up to the 2027 Abitur?

Münster schools follow Nordrhein-Westfalen's rules. Here is the route from grade 5 to the written Abitur, with the 2027 dates the NRW school ministry has published.

**Informatik and key exams for a Münster pupil**

| When | What happens |
|---|---|
| Grades 5 and 6 | Informatik is compulsory at every general school type |
| Grades 7 to 10 | Optional: depends on each school's timetable and on what the pupil picks |
| End of grade 10 | ZP10, central exams in German, maths and English |
| Qualifikationsphase | Informatik possible as a three-hour Grundkurs or five-hour Leistungskurs |
| 19 March 2027 | Last teaching day for pupils in the Qualifikationsphase 2 |
| 13 April to 5 May 2027 | Written Abitur main exams; maths on Wednesday 5 May 2027 |

Sources: GI Informatik-Monitor 2026/27, NRW entry; Schulministerium NRW, Zentrale Prüfungen 10 and Zentralabitur 2027 Termine. Read on 2 November 2026.

### What this means in practice

Every Münster pupil gets two years of Informatik in grades 5 and 6, then the subject becomes optional. Across Germany, the monitor puts the share choosing it in the Qualifikationsphase at roughly 15 percent.

Central written Abitur papers in Informatik are sat with pen and paper, so reading, tracing and writing code on paper is a skill in its own right.

### How we help, and what we do not do

We teach next to school, at the pupil's pace, and practise the skills the subject needs, including tracing code by hand. Because the maths Abitur is part of the same spring, many pupils also work on the maths behind data and AI with us.

We do not set or mark school work and we award no German qualification. The school course and its Notenpunkte are what count.

Ambitious pupils sometimes ask about the BWKI, the national AI competition: its rules ask for machine learning and allow an entry written in English. A forecasting project like the one above, extended with a model that beats the weekly rule, is the kind of question such a project could start from. We are not connected with the competition.

## Which AI tools do Münster learners use in class?

It depends on age, because each provider sets its own minimum in its terms. Our courses are built so that no learner ever needs a tool they are too young for.

### Under 18

Children under 13 use no AI accounts at all; they build small learning programs in Scratch and Python. Teenagers build models in plain Python, like the forecasts above.

The general chat assistants are a separate question, decided by each provider's own minimum age and consent rules; our under-18 lessons are designed so that the answer never matters. Anthropic restricts Claude to adults.

### Students and adults

Over-18s can bring any assistant they like into class, including adult-only ones. We teach them to set an assistant a precise task and then to check the result against the data, the way Part 2 checks two guesses against two real weeks.

For anyone, the rule is the same: an AI answer is a forecast too, and a forecast is only as good as the comparison behind it.

Minimum ages from the providers' terms, quoted in our [AI tools age guide](/ai-tools-age-guide), which notes when each was last checked.

## When are coding and AI classes in Münster time?

Pupils after school, students between lectures, adults after work, and anyone at the weekend. The mentor teaches from India, ahead of Münster on the clock.

**Example Münster times next to the time in India**

| Münster | India until 28 March 2027 | India after 28 March 2027 |
|---|---|---|
| 15:20 on a school day | 19:50 | 18:50 |
| 18:10 after work | 22:40 | 21:40 |
| Saturday 09:45 | 14:15 | 13:15 |
| Sunday 12:30 | 17:00 | 16:00 |

Under the Einheitenzeitgesetz German legal time is MEZ, UTC+1, through the winter and MESZ, UTC+2, through the summer; the switch back happened on 25 October 2026 and the switch forward is due on 28 March 2027. India is on UTC+5:30 all year round, four and a half hours ahead of Münster in winter and three and a half in summer. Sample times, not fixed batches.

NRW holidays in 2026/27 run from 17 to 31 October 2026 (Herbstferien), 23 December 2026 to 6 January 2027 (Christmas), 22 March to 3 April 2027 (Osterferien), 18 May 2027 (Pfingsten) and 19 July to 31 August 2027 (Sommerferien), according to the KMK. Classes continue through them unless a learner asks to pause. University students often shift their slot each semester, which a one-to-one plan makes easy.

Münster had 308,258 residents on 31 December 2024 on the Destatis municipal register. Learners in Hamm (179,968), across the Land border in Osnabrück (166,057), and in Greven, Telgte or Steinfurt join the same online classes; only Osnabrück, in Niedersachsen, follows a different school holiday calendar.

## From first program to first honest forecast

Our milestones, in the same order for every age. Each learner, or each parent, sees the current one in a monthly note.

**Coding and AI milestones (ours)**

| Milestone | Children | Pupils, students, adults |
|---|---|---|
| Exact instructions | Ages 6 to 8 | Week 1 |
| Reading a real file | Ages 10 to 12 | Month 1 |
| A fair comparison | Ages 11 to 12 | Month 2 |
| A tested forecast | From 12 | Month 3 |
| A model that beats a simple rule | From 13 | Months 4 to 6 |

### For learners

Before you guess tomorrow, ask which past day it most resembles.
Every model needs a simple rule to beat. Write the rule down first.

### For parents

Ask your child what their program compared, not only what it predicted.
A forecast that is honest about its error is worth more than one that sounds sure.

## Nine more courses for Münster learners

Grouped by stage. All taught live in English by a regular mentor, in a shared class or privately.

### Children

Ages 6 to 12

- [Scratch for kids](/courses/scratch-programming-complete-course): A short, complete first course in games and stories.
- [Python and AI for kids](/courses/python-ai-kids-masterclass): Real Python for nine to twelve year olds, games included.
- [AI literacy for kids](/courses/ai-literacy-for-kids-course): How AI learns, explained with no chatbot sign-ups.

### School pupils

Ages 10 to 19

- [Informatik companion](/courses/informatik-companion-course-klasse-5-10): Klasse 5 to 10, alongside the NRW school subject.
- [Informatik Abitur in English](/courses/informatik-abitur-course-java-python): Oberstufe topics, including code traced on paper.
- [Abitur maths in English](/courses/abitur-mathematics-course-in-english): Analysis and Stochastik for the spring 2027 exams.

### Students and professionals

Ages 18 and up

- [Python from zero](/courses/python-programming-masterclass-zero-to-advanced-college): For theses, labs and work, starting from nothing.
- [Statistics and probability](/courses/statistics-probability-maths-course): Errors, averages and uncertainty, behind every forecast.
- [Generative AI](/courses/complete-generative-ai-masterclass-college): Large language models, retrieval and agents, built and tested.

## Inside a Münster learner's week of live lessons

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **School afternoons** From mid-afternoon, for children and pupils.
- **Evenings** Early evening, often chosen by students and adults.
- **Weekends** Saturday or Sunday, morning or midday.

- **Hands on keys** Learners write and run the code themselves.
- **Tested ideas** Every forecast is measured against real data.
- **English at your speed** Repeated, rephrased and never rushed.
- **One mentor** The same teacher across the weeks and months.
- **Age rules kept** No adult-only tools for anyone under 18.
- **Shared or solo** Join a class of 15 to 20 people, or book a mentor alone.

## Fees for Münster learners

Eight live classes are covered by each monthly fee. We convert that fee to euro for display with the European Central Bank reference rate; the payment is collected in US dollars, and the bank that issued your card converts it, so the booked euro sum may be marginally different.

- Free first class: Free. A free first class at your level. A short, real task. No card needed.
- Group batch: €90 (charged in US dollars) a month. 15 to 20 learners of similar age and level. A regular mentor. Two classes a week. Monthly, no fixed term.
- One to one: €134 (charged in US dollars) a month. One learner, one mentor. Projects chosen around your goals. Times that move with your week.

## Coding and AI classes in Münster: your questions

### Are the classes in German?

No. We teach only in English, always live. A mentor slows down, rephrases and shows on screen until the idea has landed, and gets used to each learner's accent within a few weeks. Since Python and its documentation are in English, learners rarely find this a drawback.

### I am a university student in Münster. Is this for me?

Yes. Many students come to us needing Python, data analysis or machine learning for a thesis or a module outside computer science. We start with your own files and questions.

### What age does a child need to be?

Six. Children of six to eight learn with Scratch blocks, without typing. From about nine they can move on to typed Python.

### What does NRW teach in Informatik?

Two compulsory years first: the GI Informatik-Monitor 2026/27 records the subject as obligatory in grades 5 and 6 for every general school type in NRW. Later it is optional; in the Oberstufe a pupil may take it with three weekly hours or, at the higher level, five. The central written Abitur in Informatik is done on paper.

### When is the written Abitur in NRW in 2027?

The NRW school ministry lists the written main exams from Tuesday 13 April to Wednesday 5 May 2027, with maths on 5 May. The last teaching day for pupils in the Qualifikationsphase 2 is Friday 19 March 2027.

### When do classes run in Münster time?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Pupils tend to choose afternoons, students and adults evenings or weekends.

### Will my teenager need an AI account?

No account is needed. Teenagers write their forecasts and models themselves in Python, so there is nothing to sign up for. Where a provider allows younger users at all, its own terms set the age and any parental consent, and adult-only assistants appear only in adult courses.

### Where are the mentors?

In India, teaching live online. In winter India is four and a half hours ahead of Münster, so an 18:10 class in Münster is 22:40 for the mentor.

### How are fees shown and paid?

Monthly, for eight classes. The euro figure on this page comes from the European Central Bank reference rate; the card itself is debited in US dollars, and the euro amount your bank books after converting can be a touch higher or lower. There is no charge for the first class.

### Do classes stop during NRW school holidays?

Not automatically. School holidays in NRW do not apply to the mentors, so lessons go on unless you ask for a break, which many families do for a summer trip.

## Related pages

- [Coding classes in Germany](/coding-classes-in-germany): All our pages for Germany.
- [Coding classes in North Rhine-Westphalia](/coding-classes-in-north-rhine-westphalia): NRW rules, holidays and data.
- [AI and machine learning](/ai-and-machine-learning-classes-in-germany): Our national page on learning ML properly.
- [Abitur computer science](/abitur-computer-science-in-english): Informatik in the Oberstufe, in English.
- [Python for international students](/python-and-dsa-for-international-students-germany): For students at German universities.
- [Career changers](/online-coding-course-for-career-changers-germany): Learning to code later in life.

## More pages for this Land

Part of the guide: [Coding classes in North Rhine-Westphalia](/coding-classes-in-north-rhine-westphalia)

### Cities and pages in North Rhine-Westphalia

- [Coding and AI classes in Bergisch Gladbach](/coding-and-ai-classes-in-bergisch-gladbach-germany)
- [Coding and AI classes in Bielefeld](/coding-and-ai-classes-in-bielefeld-germany)
- [Coding and AI classes in Duisburg](/coding-and-ai-classes-in-duisburg-germany)
- [Coding and AI classes in Gütersloh](/coding-and-ai-classes-in-guetersloh-germany)
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

Book the free first class at [https://learn.modernagecoders.com/coding-and-ai-classes-in-muenster-germany](https://learn.modernagecoders.com/coding-and-ai-classes-in-muenster-germany#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
