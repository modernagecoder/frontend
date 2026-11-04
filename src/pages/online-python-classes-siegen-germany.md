---
title: "Online Python Classes in Siegen: Live and Taught in English"
description: "Online Python classes in Siegen for ages 9 to adult: what live teaching adds, the path to real data, NRW Informatik and a project on missing weather days."
canonical: https://learn.modernagecoders.com/online-python-classes-siegen-germany
source: src/pages/online-python-classes-siegen-germany.html
---
> Online Python classes in Siegen with Modern Age Coders are live lessons in English over video: the learner types real Python in their own editor and the mentor follows on the shared screen, asking rather than telling. Children from about 9, teenagers and adults each have their own groups, from first programs to files, data and tests. Every learner keeps one India-based mentor who tunes speed and pronunciation to them; families pick a group of fifteen to twenty or private tuition.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / [Coding classes in North Rhine-Westphalia](/coding-classes-in-north-rhine-westphalia) / Siegen

Siegen · Python · Live online

# Online Python classes in Siegen

Plenty of Python courses can be watched from Siegen; far fewer can watch you back. In a live class the mentor sees the line you just typed, notices the moment you hesitate and asks the one question that gets you moving again. This page explains what that changes, the path from a first program to real data, what NRW schools teach, and a project on the Siegen weather station in which learners deliberately delete days they know and then try to guess them back.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Ages: 9 and up, adults included; Format: Live video, shared screen; Teaching language: English, adapted to the learner; Siegen times: Afternoons, evenings, weekends; Teachers: Mentors based in India; First class: Free, no card needed. Rated 4.9 across 547 Google reviews.

## Python courses for Siegen learners

Three starting points by age. The free first class settles which fits.

- [Python and AI for Kids](/courses/python-ai-kids-masterclass): For 9 to 12. Children write their first real programs, draw and play with them, and later try tiny programs that learn from examples.
- [Python for Teens](/courses/python-complete-masterclass-teens): For 13 to 18. From basic syntax to files, functions with tests and data work, alongside school Informatik.
- [Python Masterclass for Adults](/courses/python-programming-masterclass-zero-to-advanced-college): For adults who have never programmed. Foundations first, then real files and the libraries used at work.

## What does a live online Python class add to a video course?

Recorded courses are good at explaining. They cannot see what you are doing. For a beginner that difference decides whether they keep going.

**A recorded course and a live class compared (our own comparison)**

| Moment in learning | Recorded course | Live class with us |
|---|---|---|
| A typing mistake you cannot see | You search alone, sometimes for an hour | The mentor points to the line within seconds |
| An error message in English | You read it, or skip it | You read it aloud together and explain it |
| An idea that does not click | You rewatch the same video | The mentor explains it another way, more simply |
| Losing motivation in week three | Nobody notices | The same mentor notices and adjusts the plan |
| Knowing what to learn next | The next video in the list | The next step for this learner, chosen by someone who knows them |

Our own comparison of formats. Recorded material still has a place: learners sometimes rewatch a short clip after class. The teaching itself is always live.

### Only English, slowly

We teach in English, never in German, and we say so first. Mentors slow down, rephrase and wait. Many Siegen pupils find their school English is more than enough, because Python itself is built from English words.

### Your editor, your files

Learners write code on their own computer, not inside a website that disappears after the course. Everything they build stays with them, ready to change.

### Same mentor every week

Each learner keeps one mentor, based in India, who learns their habits: who rushes, who freezes, who learns most from breaking a working program.

## What is the Python path for a Siegen learner?

The same five steps for every age; children take longer over each, adults often move through the first two quickly.

1. **Talk to the computer.** Print, ask for input, calculate. Children make a quiz; adults make a small converter.
2. **Repeat and decide.** Loops and if statements, traced by hand on paper before the program runs.
3. **Store and reuse.** Lists, dictionaries and functions, each function with a few tests that prove it works.
4. **Work with real files.** Read published data, such as the Siegen weather file below, and describe its gaps before using it.
5. **Build your own.** A project the learner chose, documented so that someone else can run it.

Our own learning path. Typical pace: children of 9 to 12 reach step 4 in about six to ten months, teenagers and adults in two to four.

## Can Python fill a missing day in Siegen's weather record?

The Deutscher Wetterdienst publishes daily readings from its Siegen station from 1937 to 2018, free to reuse under CC BY 4.0. Real records have holes. Our learners find out how well a hole can be filled, by first making holes where they already know the answer.

### The data and its holes

The station is called Siegen (Kläranlage). The file we downloaded on 3 November 2026 has 28,033 days, one row each, and a column for the daily mean temperature. We saved it as siegen_days.txt.

Three stretches are missing entirely: 1945 to 1948, the whole of 1966, and January and February 2008. The last gap ends just as the station moved, on 1 March 2008, to a new site 34 metres lower. No program can honestly invent four lost years.

### A fair test

For short gaps, a guess might be good enough, but how good? The trick is to test on days we know. We take 2009 to 2017, nine complete years measured the same way after the move, hide every tenth day ourselves, and guess each hidden value from its neighbours.

Then we compare the guesses with the real values we hid. That turns "it looks plausible" into a number.

**Version 1: two ways to guess a hidden day** (Python)
```python
temps = []
with open("siegen_days.txt", encoding="latin-1") as f:
    next(f)
    for line in f:
        c = [x.strip() for x in line.split(";")]
        if "20090101" <= c[1] <= "20171231":
            temps.append(float(c[13]))          # daily mean temperature, C

print("Days 2009 to 2017:", len(temps))

hidden = range(10, len(temps) - 10, 10)      # we hide every tenth day ourselves
carry, line = [], []
for i in hidden:
    real = temps[i]
    carry.append(abs(temps[i - 1] - real))                 # copy yesterday
    line.append(abs((temps[i - 1] + temps[i + 1]) / 2 - real))  # halfway between neighbours
print("Hidden days:", len(carry))
print("Copy yesterday, average error:", round(sum(carry) / len(carry), 2), "C")
print("Halfway line, average error:", round(sum(line) / len(line), 2), "C")
```
It prints Days 2009 to 2017: 3287, Hidden days: 327, Copy yesterday, average error: 1.74 C and Halfway line, average error: 1.13 C.

Copying yesterday's value is the simplest possible guess, and it is wrong by 1.74 degrees on average. Taking the point halfway between the day before and the day after does clearly better, 1.13 degrees, because it uses information from both sides of the gap. That halfway point is a straight line drawn between two neighbours, and drawing such lines is called linear interpolation. It is used for everything from weather records to animation frames to the brightness of pixels in a resized photo.

**Version 2: longer gaps, straight lines** (Python)
```python
def fill(i, gap):
    before, after = temps[i - 1], temps[i + gap]
    step = (after - before) / (gap + 1)
    return [before + step * (k + 1) for k in range(gap)]

for gap in (1, 3, 7, 14):
    errors = []
    for i in range(20, len(temps) - 20, 20):
        guess = fill(i, gap)
        errors += [abs(g - temps[i + k]) for k, g in enumerate(guess)]
    print(f"{gap:>2}-day gap, average error:", round(sum(errors) / len(errors), 2), "C")
```
It prints 1-day gap, average error: 1.12 C, 3-day gap, average error: 1.77 C, 7-day gap, average error: 2.07 C and 14-day gap, average error: 2.55 C.

**How well a straight line fills hidden days, Siegen 2009 to 2017 (our test)**

| Length of the hidden gap | Average error |
|---|---|
| 1 day, copy the day before | 1.74 C |
| 1 day, straight line | 1.12 C |
| 3 days, straight line | 1.77 C |
| 7 days, straight line | 2.07 C |
| 14 days, straight line | 2.55 C |

Data: Deutscher Wetterdienst, Climate Data Center, daily values for station 04692 Siegen (Kläranlage), daily mean temperature, CC BY 4.0, downloaded 3 November 2026. The hidden days, the guesses and the errors are our own work.

The longer the gap, the worse the line, because weather has fronts and cold snaps that a straight line simply skips. A one-day gap filled by a line is off by about a degree; a two-week gap by more than two and a half. So the honest rule our learners write down is: fill short gaps, label every filled value as estimated, and leave long gaps empty. The four missing years from 1945 to 1948 stay missing.

One more detail rewards careful reading of the metadata. Until 2007 the daily mean at Siegen was calculated from three readings a day, with the evening reading counted twice; from March 2008 it is the average of at least 21 hourly values. That is why we tested only on 2009 to 2017: mixing two methods in one test would blur the answer.

1. **Ages 9 to 12.** Write the numbers 2, 4, 6, ?, 10 and fill the gap. Then try 2, 4, 9, ?, 10. Is the halfway guess still sensible?
2. **Teenagers.** Run both versions, then hide every fifth day instead of every tenth. Do the errors change?
3. **Adults.** Decide the longest gap you would fill in a work dataset, and write one sentence that a colleague could check.
4. **Going further.** Use the average of the same calendar day in other years as a third guess and compare it with the line for a 14-day gap.

## What Informatik will a Siegen pupil meet at school?

A compulsory start in grades 5 and 6, then choices. Siegen schools follow North Rhine-Westphalia's rules.

### The NRW pattern

According to the Gesellschaft für Informatik, every general school in North Rhine-Westphalia teaches compulsory Informatik in grades 5 and 6. A nine-year Gymnasium offers it again as a Wahlpflicht subject in grades 9 and 10.

In the last two years of the Oberstufe a school can run Informatik as a basic three-hour course or an advanced five-hour one. The written Informatik Abitur is set centrally and, as the monitor notes, answered without a computer.

### Exams and contests in 2026/27

NRW pupils take central exams, the ZP10, in German, maths and English at the end of grade 10. The written Abitur in 2027 runs from 13 April to 5 May 2027, with Mathematik on the last day.

For older pupils, the 45th Bundeswettbewerb Informatik has its first round from 1 September to 23 November 2026, open to young people up to 21 who are not yet studying or working, and group entries are allowed in that round.

Sources: Gesellschaft für Informatik, Informatik-Monitor 2026/27, North Rhine-Westphalia page; Ministerium für Schule und Bildung NRW, ZP10 and Abitur 2027; Bundesweite Informatikwettbewerbe, Bundeswettbewerb Informatik pages. Read on 2 November 2026.

We teach alongside school and do not replace it; only the school awards marks and the Abitur. For pupils who take the subject, the [Informatik Abitur course in Java and Python](/courses/informatik-abitur-course-java-python) includes plenty of paper tracing, which the NRW written exam rewards. Our [Bundeswettbewerb Informatik page](/bundeswettbewerb-informatik-preparation) covers the contest. We are not connected with BWINF.

## When do online Python classes run in Siegen time?

Siegen afternoons and evenings fall in the Indian evening, weekend mornings in the Indian afternoon. Most learners find a slot quickly.

**Example Siegen times beside the mentor's clock**

| Siegen | India this winter | India from 28 March 2027 |
|---|---|---|
| 15:35 | 20:05 | 19:05 |
| 17:05 | 21:35 | 20:35 |
| Saturday 08:45 | 13:15 | 12:15 |
| Sunday 11:45 | 16:15 | 15:15 |

The Einheitenzeitgesetz puts Siegen on UTC+1 in winter (since 25 October 2026) and UTC+2 in summer (from 28 March 2027); India keeps UTC+5:30. These rows only show the difference between the clocks.

For planning: NRW's 2026/27 holidays in the Kultusministerkonferenz table are 17 to 31 October 2026 in autumn, 23 December 2026 to 6 January 2027 at Christmas, 22 March to 3 April 2027 at Easter, 18 May 2027 as a single day, and 19 July to 31 August 2027 in summer. Lessons carry on through holidays unless you pause. Learners join from across Siegen and from nearby Kreuztal, Netphen, Wilnsdorf, Freudenberg and Hilchenbach.

## How a Siegen learner shows progress

Our own checks. Each is something the learner does unaided.

**Progress checks (ours)**

| Check | What the learner does | Usually by |
|---|---|---|
| Trace | Predict a short program's output on paper | Month 1 |
| Debug | Fix a planted error from its message alone | Month 2 |
| Test | Write a function with three tests, one at an edge | Month 3 |
| Measure | Hide known values and measure a method's error | Month 4 to 6 |
| Explain | Present a project, limits included | Later |

### For parents

The "Measure" check is the Siegen project: a learner who tests a guess on known answers has learned how science checks itself.
We report what your child can do and explain.

### For learners

Before you trust a method, try it where you already know the answer.
A filled-in value is an estimate. Label it, every time.

## Nine more courses for Siegen learners

All live, all in English, with one mentor, in a class or one to one.

### Younger learners

Ages 9 to 15

- [Maths through coding](/courses/maths-through-coding): Patterns, sequences and averages in Python.
- [Problem solving](/courses/problem-solving-and-computational-thinking-for-kids): Logic first, for children who love puzzles.
- [JavaScript for teens](/courses/javascript-course-for-teens-beginners-interactive-web): A second language for interactive pages.

### Teenagers

Ages 13 to 18

- [Data science for teens](/courses/data-science-course-for-teens-python-data): Real data, honest gaps, first models.
- [Informatik Abitur](/courses/informatik-abitur-course-java-python): Java and Python for the Abitur, in English.
- [German informatics contests](/courses/german-informatics-competitions-course-biber-bwinf-bwki): Biber, BwInf and BWKI preparation.

### Adults

Ages 18 and up

- [Python automation](/courses/python-ai-automation-masterclass-college): Scripts that save hours every week.
- [Maths for data science](/courses/data-analytics-mathematics-masterclass): Statistics and algebra behind the tools.
- [Git and GitHub](/courses/git-github-version-control-course-for-college-students): Version control for team projects.

## How live Python classes are set up for Siegen

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **After school** Pupils log in once the school day ends.
- **After work** Adults join on weekday evenings.
- **One to one** Your own time, any day, with your mentor.

- **Twice a week** Two live hours, a small task between.
- **Learner types** The mentor guides from the shared screen.
- **Tests from early on** Functions come with proof they work.
- **One mentor** Continuity for the whole course.
- **English, adapted** Slower and simpler when needed.
- **Group or private** Fifteen to twenty learners, or one.

## Fees for online Python in Siegen

Eight live classes make up a month. Shown here in euro by way of the ECB reference rate, the fee is actually collected in US dollars; your bank converts it at its own rate, so its euro total may be a touch different.

- Free first class: Free. A free first class. A short Python task at your level. No card needed.
- Group batch: €90 (charged in US dollars) a month. Fifteen to twenty learners of similar level. One mentor throughout. Two live classes a week. Pay by the month.
- One to one: €134 (charged in US dollars) a month. A mentor just for you. Projects you choose. Times you agree.

## Online Python classes in Siegen: common questions

### Are the classes in German?

No. We teach only in English, always live, with a mentor who adapts pace and accent to the learner. Python's keywords are English, so lesson and code use the same words.

### Why choose live classes over a video course?

Because a live mentor sees your screen. Small mistakes are spotted in seconds, ideas are explained again in other words, and someone notices when motivation drops. Video can supplement that, not replace it.

### What age can a child start Python?

Around 9, when reading and typing are comfortable. Younger children begin with Scratch blocks.

### What will my child learn in Informatik at school in Siegen?

Two compulsory years, in grades 5 and 6, at all general schools in the Land, the Gesellschaft für Informatik reports. After that pupils opt in, up to an Abitur course of three or five hours a week in the last two years.

### When are classes in Siegen time?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Most pupils come after school and adults in the evening.

### Who teaches?

Experienced mentors based in India, live over video and in English. Each learner keeps the same mentor.

### How are fees charged?

Each month. We print euro after converting at the ECB reference rate, then charge in US dollars; your bank's own exchange decides the exact euro booked. There is no fee for the first class.

### What is the weather gap project?

Learners hide known days in the Siegen temperature record for 2009 to 2017 and guess them back. A straight line between neighbours is off by 1.13 degrees on average, copying the day before by 1.74, and gaps of two weeks are too long to fill well.

### Is the Bundeswettbewerb Informatik open to my teenager?

It is open to young people up to 21 who are not yet studying or working. The first round of the 45th contest runs from 1 September to 23 November 2026 and allows group work. We are not connected with the organiser.

### Can adults join?

Yes, in adult groups or one to one, starting from the very first line of Python.

## Related pages

- [Coding classes in Germany](/coding-classes-in-germany): All our Germany pages in one place.
- [Coding classes in North Rhine-Westphalia](/coding-classes-in-north-rhine-westphalia): NRW school rules and dates.
- [Python course in Germany](/python-course-germany): Our national Python page.
- [Bundeswettbewerb Informatik](/bundeswettbewerb-informatik-preparation): Preparing for the national contest.
- [Coding for career changers](/online-coding-course-for-career-changers-germany): For adults moving into tech.
- [How we teach](/how-we-teach): A live class from the inside.

## More pages for this Land

Part of the guide: [Coding classes in North Rhine-Westphalia](/coding-classes-in-north-rhine-westphalia)

### Cities and pages in North Rhine-Westphalia

- [Coding and AI classes in Bergisch Gladbach](/coding-and-ai-classes-in-bergisch-gladbach-germany)
- [Coding and AI classes in Bielefeld](/coding-and-ai-classes-in-bielefeld-germany)
- [Coding and AI classes in Duisburg](/coding-and-ai-classes-in-duisburg-germany)
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
- [Programmieren lernen für Kinder in Düsseldorf (auf Englisch)](/programmieren-lernen-kinder-duesseldorf)
- [Programmieren lernen für Kinder in Köln (auf Englisch)](/programmieren-lernen-kinder-koeln)

More guides: [Coding classes in Lower Saxony](/coding-classes-in-lower-saxony), [Coding classes in Land Bremen](/coding-classes-in-land-bremen), [Coding classes in Hesse](/coding-classes-in-hesse), [Coding classes in Bavaria](/coding-classes-in-bavaria), [Coding classes in Saxony-Anhalt](/coding-classes-in-saxony-anhalt), [Coding classes in Schleswig-Holstein](/coding-classes-in-schleswig-holstein), [Coding classes in Baden-Württemberg](/coding-classes-in-baden-wuerttemberg), [Coding classes in Saarland](/coding-classes-in-saarland), [Coding classes in Rhineland-Palatinate](/coding-classes-in-rhineland-palatinate), [Coding and maths in Berlin](/coding-and-maths-classes-in-berlin-germany), [Coding and maths in Hamburg](/coding-and-maths-classes-in-hamburg-germany), [Coding classes in Saxony](/coding-classes-in-saxony), [Coding classes in Thuringia](/coding-classes-in-thuringia), [Coding classes in Brandenburg](/coding-classes-in-brandenburg), [Coding classes in Mecklenburg-Vorpommern](/coding-classes-in-mecklenburg-vorpommern)

## Contact

Book the free first class at [https://learn.modernagecoders.com/online-python-classes-siegen-germany](https://learn.modernagecoders.com/online-python-classes-siegen-germany#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
