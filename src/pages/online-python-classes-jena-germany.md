---
title: "Online Python Classes in Jena: Live Lessons in English"
description: "Online Python classes in Jena for ages 9 to adult: six checks before you book, Thuringia's MBI subject, and two centuries of Jena temperatures in Python."
canonical: https://learn.modernagecoders.com/online-python-classes-jena-germany
source: src/pages/online-python-classes-jena-germany.html
---
> Modern Age Coders runs online Python classes for Jena that are live, taught in English, and hands-on: on a video call the learner writes and runs Python in their own editor while the mentor watches the shared screen and asks questions. From about 9 children type their own programs; older learners go further, into data files and simple models. Classes of fifteen to twenty or one to one, with one India-based mentor who keeps to each learner's pace and accent.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / Jena

Jena · Python · Live online

# Online Python classes in Jena

Jena has measured its weather at the same observatory site for two centuries, and that record is now open data. It makes a fine first serious Python project, because it is long, real and full of gaps. This page is for Jena learners and parents weighing up an online Python class: six questions to ask before you book with anyone, what the new Thuringian school subject covers, and how our learners turn 195 years of temperatures into a trend they can defend.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Ages: 9 and up, adults welcome; Format: Live video with a shared screen; Teaching language: English, at the learner's pace; Jena times: Afternoons, evenings, weekends; Teachers: Mentors based in India; First class: Free, no card needed. Rated 4.9 across 547 Google reviews.

## Three Python courses for Jena learners

One for children, one for teenagers, one for adults. The free first class tells us which suits.

- [Python and AI for Kids](/courses/python-ai-kids-masterclass): Nine to twelve year olds type their first programs, draw with turtle graphics and build small games before trying a little machine learning.
- [Python for Teens](/courses/python-complete-masterclass-teens): Thirteen to eighteen. A full route from variables and loops to files, classes and data projects like the Jena temperature record.
- [Python Masterclass for Adults](/courses/python-programming-masterclass-zero-to-advanced-college): Adults with no experience. Clear foundations first, then the scripts and libraries that make Python useful at work.

## What should you check before booking an online Python class in Jena?

There are many online courses, and they differ more than their websites suggest. These six questions sort them quickly. They apply to us as much as to anyone.

1. **Is it live?** A recorded video cannot notice that a learner is stuck. Ask whether a person teaches in real time, and how often.
2. **Who types?** If the teacher writes the code and the learner watches, very little is learned. In our classes the learner types from the first minute.
3. **Is it the same teacher each time?** A mentor who knows the learner's gaps saves weeks. Ours stay with a learner for the whole course.
4. **In which language, and at what speed?** We teach only in English, slowly when needed, and we tell families before any trial.
5. **Which tools, at which age?** AI tools have minimum ages in their providers' terms. A course for children should not need any adult account.
6. **What will exist at the end?** Ask for an example of a finished project. A good course ends with something the learner built and can explain.

Our own checklist. Tool ages are quoted from the providers' terms in our [AI tools age guide](/ai-tools-age-guide); OpenAI sets 13 with a parent's permission under 18, Anthropic sets 18.

### What a week looks like

Two live classes of an hour each, usually a few days apart, and a short task in between. In class the mentor introduces one idea, the learner uses it to build something, then deliberately breaks it and explains the error message.

Between classes the learner finishes the task alone and brings questions. Nothing is marked; the point is to arrive with something to show.

### What you need in Jena

Any laptop or desktop made in the last ten years will do, plus a camera, headphones with a microphone and reliable internet. Python costs nothing; setting it up together is part of lesson one.

A quiet corner helps more than a fast machine. The programs on this page run in seconds on an ordinary laptop.

## What do Jena schools teach in Medienbildung und Informatik?

Thuringia is building up a new compulsory subject, Medienbildung und Informatik, or MBI, one year group at a time.

### A subject that grows each year

According to the Gesellschaft für Informatik's Informatik-Monitor 2026/27, MBI started in the 2024/25 school year at all general schools in Thuringia. It is currently taught in grades 5, 6 and 7 and is being extended one grade a year, reaching grade 10 in the 2029/30 school year.

A Jena pupil in grade 5 today will have MBI every year up to grade 10. An older sibling in grade 8 may have none at all, because the subject arrived after them.

### Ahead of most Länder

The KMK's scientific commission recommends six compulsory weekly hours of Informatik across lower secondary by 2030. The monitor names Thuringia as one of only three Länder that already meet that target, with Mecklenburg-Vorpommern and Saarland.

Thuringian secondary pupils attend a Gymnasium, a Regelschule with two tracks or a Gemeinschaftsschule with three; MBI applies to all of them.

**MBI by grade for Jena pupils, school year 2026/27**

| Grade in 2026/27 | MBI this year? | MBI through to grade 10? |
|---|---|---|
| 5 | Yes | Yes |
| 6 | Yes | Yes |
| 7 | Yes | Yes, as the subject moves up |
| 8 | No | The rollout reaches grade 8 in 2027/28, after this year group |
| 9 and 10 | No | The rollout reaches these grades after this year group has left them |

Source: Gesellschaft für Informatik, Informatik-Monitor 2026/27, national summary and Thuringia page, read on 2 November 2026. The year-by-year reading in the right-hand column is our own, from the stated rollout of one grade per year to grade 10 in 2029/30.

Our classes run next to school and never replace it; school marks come from school. For a pupil who wants more programming than MBI offers, or who missed it, typed Python is the natural next step. Our [Informatik companion for Klasse 5 to 10](/courses/informatik-companion-course-klasse-5-10) follows school topics in English, and the [Thuringia page](/coding-classes-in-thuringia) covers the Land in more depth.

## Has Jena got warmer since the 1800s, and how can Python show it fairly?

The Deutscher Wetterdienst publishes the yearly mean temperature for its station Jena (Sternwarte) back to 1821, free to reuse under CC BY 4.0. A single year tells you little; a moving window over thirty years tells you a lot, as long as it refuses to fill holes it cannot see into.

### The data

The file we downloaded on 3 November 2026 holds one row per year, and the sixth column, called JA_TT, is the annual mean air temperature. A value of -999 means "missing". We saved the product file as jena_years.txt and read it with nothing but plain Python.

It has gaps of two kinds. Two years, 1823 and 1845, are present but marked -999. Eight years, 1843, 1870, 1875 to 1878, 1922 and 1945, are simply absent. A program that does not look for both kinds will quietly get wrong answers.

### Measured the same way?

The station's metadata says the early values come from three readings a day, at 08, 14 and 20 local time in 1821 and 1822 and at 07, 14 and 21 from 1824. Instruments and routines changed later too, and the station moved slightly over the years; it has stood at 154.5 metres since August 2004.

So we treat the very early decades with care, and we say so. Part of working with real data is writing down what you do not know.

**Version 1: read the years, skip the missing marks** (Python)
```python
mean_temp = {}
with open("jena_years.txt", encoding="latin-1") as f:
    next(f)                                   # skip the header line
    for line in f:
        cols = [c.strip() for c in line.split(";")]
        year, value = int(cols[1][:4]), float(cols[5])
        if value != -999:                     # -999 is the DWD code for "no value"
            mean_temp[year] = value

print("Years with a mean temperature:", len(mean_temp))
print("First:", min(mean_temp), " last:", max(mean_temp))
for y in (1864, 1990, 2024):
    print(y, mean_temp[y], "C")
```
It prints Years with a mean temperature: 195, First: 1821 last: 2025, then 1864 6.19 C, 1990 10.7 C and 2024 12.01 C.

Single years jump around. 1864 is the coldest year in the file at 6.19 degrees, 2024 the warmest at 12.01, and the years in between swing by a degree or more from one to the next. Comparing two chosen years can tell almost any story. A moving average does something fairer: for every end year it averages the thirty years up to and including it, so each value rests on three decades of weather rather than one.

**Version 2: a thirty-year window that refuses to guess** (Python)
```python
def window_mean(end, size=30):
    years = range(end - size + 1, end + 1)
    if any(y not in mean_temp for y in years):
        return None                           # a gap: refuse to guess
    return round(sum(mean_temp[y] for y in years) / size, 2)

for end in (1908, 1921, 1950, 1990, 2020, 2025):
    print("30 years to", end, ":", window_mean(end))
```
It prints 30 years to 1908 : 8.11, 30 years to 1921 : 8.61, 30 years to 1950 : None, 30 years to 1990 : 9.28, 30 years to 2020 : 10.3 and 30 years to 2025 : 10.51.

**Thirty-year mean temperature at the Jena Sternwarte, by last year of the window (our calculation)**

| Thirty years ending | Mean temperature |
|---|---|
| 1908 (1879 to 1908) | 8.11 C |
| 1921 (1892 to 1921) | 8.61 C |
| 1950 | No answer: 1922 and 1945 missing |
| 1990 (1961 to 1990) | 9.28 C |
| 2020 (1991 to 2020) | 10.3 C |
| 2025 (1996 to 2025) | 10.51 C |

Data: Deutscher Wetterdienst, Climate Data Center, annual values for station 02444 Jena (Sternwarte), column JA_TT, CC BY 4.0, downloaded 3 November 2026. The windows, the None results and the table are our own work.

Look at the None. Any window that contains 1922 or 1945 has a hole, and the function returns nothing rather than averaging 29 years and calling it 30. That rule costs a lot: complete windows exist only for end years 1908 to 1921 and 1975 to 2025, 65 windows in all. But the ones it does give are honest, and they climb: from 8.11 degrees for the thirty years to 1908, to 9.28 for 1961 to 1990, to 10.51 for 1996 to 2025. Over the two complete stretches the Jena record has warmed by more than two degrees on a thirty-year average. That is our reading of this one station's data, not a forecast and not a statement about anywhere else.

1. **Ages 9 to 12.** Write down the temperature at noon every day for a week. Average each three days in a row. Is the line of averages smoother than the daily one?
2. **Teenagers.** Run both versions, then change the window to ten years. How many more answers do you get, and how much jumpier are they?
3. **Adults.** Change the refusal rule to allow at most one missing year per window. Which numbers change, and would you trust them?
4. **Going further.** Print the five warmest and five coldest single years. How many of the warmest fall after 2000?

## When are online Python classes in Jena time?

A Jena afternoon is an Indian evening, and a Jena weekend morning is an Indian afternoon, which leaves plenty of room for both sides.

**Example slots in Jena and on the mentor's clock**

| Jena | India in winter | India from 28 March 2027 |
|---|---|---|
| 16:40 | 21:10 | 20:10 |
| 17:20 | 21:50 | 20:50 |
| Saturday 14:00 | 18:30 | 17:30 |
| Sunday 12:00 | 16:30 | 15:30 |

Jena keeps German legal time under the Einheitenzeitgesetz: UTC+1 from 25 October 2026 and UTC+2 from 28 March 2027. India stays at UTC+5:30. The rows are illustrations, not fixed batch times.

Thuringian school holidays in 2026/27, per the Kultusministerkonferenz table: autumn 12 to 24 October 2026, Christmas 23 December 2026 to 2 January 2027, winter 1 to 6 February 2027, Easter 22 March to 3 April 2027, a free day on 7 May 2027, and summer from 10 July to 20 August 2027. Classes continue through them unless a family pauses. Learners join from across Jena and from nearby Weimar, Apolda, Stadtroda, Kahla and Erfurt.

For pupils who want a contest alongside the course: the Informatik-Biber runs from 9 to 20 November 2026 through schools, and pupils from grade 3 can also try the Jugendwettbewerb Informatik. Our [competitions calendar](/math-and-coding-competitions-germany) lists the dates. We are not connected with any organiser.

## The Python skills a Jena learner builds

Our own ladder. Each rung is a thing the learner can do without help.

**Python skills ladder (ours)**

| Rung | Skill | Shown by |
|---|---|---|
| 1 | Variables, input and output | A program that asks a question and answers it |
| 2 | Loops and decisions | Tracing a loop on paper before running it |
| 3 | Lists and dictionaries | Storing a year and its value, like the Jena file |
| 4 | Functions with clear rules | A function that returns None when it cannot answer |
| 5 | Files and real data | Reading a published file and naming its gaps |

### For parents

Rung 4 is the heart of the Jena project: a function that knows when to refuse.
Progress is reported as things your child can do, not hours spent.

### For learners

Before you average anything, count how many values you actually have.
A program that says "I cannot tell" is more useful than one that guesses quietly.

## Nine more courses for Jena learners

Each one live and in English, with a mentor who stays with the learner, in a class or on its own.

### Children

Ages 8 to 12

- [Coding for kids](/courses/kids-coding-blocks-masterclass): Scratch first for children not yet ready to type.
- [Maths through coding](/courses/maths-through-coding): Averages and patterns explored in Python.
- [AI literacy for kids](/courses/ai-literacy-for-kids-course): How machines learn, with no adult accounts.

### Teenagers

Ages 13 to 18

- [Data science for teens](/courses/data-science-course-for-teens-python-data): Long datasets, charts and first models.
- [Competitive programming](/courses/competitive-programming-for-teens-course): Contest problems and fast solutions.
- [Git and GitHub for teens](/courses/git-github-version-control-course-for-teens): Saving and sharing code properly.

### Adults

Ages 18 and up

- [Data analysis](/courses/data-analysis-mastery-course-college): Python, SQL and spreadsheets for real work.
- [AI and machine learning](/courses/ai-ml-masterclass-complete-college): From Python to deep learning.
- [Python certification prep](/courses/pcep-pcap-python-certification-course): PCEP and PCAP, for a recognised milestone.

## How live Python classes are arranged for Jena

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **School afternoons** For pupils after lessons and homework.
- **Early evenings** For adults on working days.
- **Private slots** Agreed with the mentor, weekends included.

- **Live every time** A person teaches, nothing is replayed.
- **Learner at the keys** The mentor asks; the learner types.
- **One mentor** Continuity from first loop to project.
- **Plain English** Slowed down and repeated when needed.
- **Age-correct tools** No adult accounts in children's classes.
- **Your choice of size** A class of fifteen to twenty, or private.

## Fees for online Python in Jena

Eight live classes are included in each monthly fee. For Jena we print the price in euro, using the ECB reference rate of the day, but you are charged in US dollars; the bank exchanges it on your side, so cents may differ.

- Free first class: Free. A free first class. A first Python task at the right level. No card needed.
- Group batch: €90 (charged in US dollars) a month. Fifteen to twenty learners of a similar level. One mentor throughout. Two classes a week. Pay monthly, stop any time.
- One to one: €134 (charged in US dollars) a month. Private lessons with one mentor. Your own projects. Times you agree.

## Online Python classes in Jena: common questions

### Are the classes in German?

No. Lessons are only in English, and always live. Mentors adapt their speed and accent to the learner and explain again in simpler words when needed, so pupils who learn English at school can follow comfortably.

### How do I know an online class is any good?

Ask whether it is live, who types the code, whether the teacher stays the same and what the learner will have built at the end. A free first class lets you see all four for yourself.

### What does my child learn in MBI at school?

Medienbildung und Informatik is a new compulsory subject in Thuringia, taught in grades 5 to 7 in 2026/27 and growing by one grade a year to grade 10 in 2029/30, according to the Gesellschaft für Informatik.

### At what age can my child start Python?

Nine is a good age, when a child reads fluently and can find letters on a keyboard. Six to eight year olds begin in Scratch and switch later.

### Is the Jena temperature project too hard for a child?

The full version suits teenagers and adults. Children of 9 to 12 do a shorter version with a week of their own noon temperatures, then a short list of Jena years.

### When are classes in Jena time?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Pupils usually come after school and adults in the evening.

### Who teaches?

Mentors based in India who teach live online in English. A learner keeps the same mentor for the whole course.

### How is payment handled?

By the month. We quote euro using the ECB reference rate, collect the payment in US dollars, and leave the exchange to your bank, which is why the amount you see on the statement can be marginally different. You pay nothing for the first class.

### Do you use AI tools in class?

Only where the provider's age limit allows. Children's courses use none. Teenagers may use ChatGPT from 13 with a parent's permission; Claude is kept to adult courses because Anthropic sets 18.

### Can adults join?

Yes, in their own classes, starting from the very first line of Python.

## Related pages

- [Coding classes in Germany](/coding-classes-in-germany): Our pages for every part of Germany.
- [Coding classes in Thuringia](/coding-classes-in-thuringia): MBI, holidays and the Land in detail.
- [Python course in Germany](/python-course-germany): Python for learners anywhere in Germany.
- [Coding for teens in Germany](/coding-classes-for-teens-germany): Courses for 13 to 18.
- [Informatik by Land](/informatik-in-german-schools-by-state): How all sixteen Länder compare.
- [How we teach](/how-we-teach): Our method, class by class.

## Contact

Book the free first class at [https://learn.modernagecoders.com/online-python-classes-jena-germany](https://learn.modernagecoders.com/online-python-classes-jena-germany#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
