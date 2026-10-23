---
title: "Online Coding and Python Classes in Saint John, NB | Live"
description: "Live online coding and Python classes for Saint John, NB learners aged 6 to adult: one live lesson explained, a Python path, and a project on the city address data."
canonical: https://learn.modernagecoders.com/online-coding-and-python-classes-in-saint-john-new-brunswick
source: src/pages/online-coding-and-python-classes-in-saint-john-new-brunswick.html
---
> Yes. Modern Age Coders gives Saint John learners, from age 6 to adult, live online coding and Python lessons with a teacher, in a group of fifteen to twenty or one to one. Children typically begin with Python and AI for Kids, teens with Python for Teens and adults with the Python Masterclass. The first lesson is free.

[Home](/) / [Canada](/coding-classes-in-canada) / Saint John

Saint John, New Brunswick / Live online

# Online coding and Python classes in Saint John, New Brunswick

**Can a learner in Saint John, New Brunswick take live Python classes online?** Yes. Modern Age Coders gives Saint John learners, from age 6 to adult, live online coding and Python lessons with a teacher, in a group of fifteen to twenty or one to one. Children typically begin with Python and AI for Kids, teens with Python for Teens and adults with the Python Masterclass. The first lesson is free.

Saint John families who look for coding classes find plenty of apps and video courses, and fewer people who will actually sit with a learner while the code goes wrong. That is what a live online class is for. Below we describe one lesson from the learner's side of the screen, lay out a Python path from age 9 to adulthood, walk through a Python and math project on the City of Saint John's own address file, and set out what New Brunswick schools already teach in Computer Science 110.

Facts last verified 23 October 2026. Teaching is online; no Saint John branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 15 to 20 students per group.

## Four Python courses, including one with a certificate at the end

A Python course for each age group, and certification preparation for teens and adults who want an outside benchmark of their Python.

- [Python and AI for Kids](/courses/python-ai-kids-masterclass) (Ages 9 to 12): A first proper programming language for children: games, drawings and quizzes built line by line, with the child explaining each one.
- [Python for Teens](/courses/python-complete-masterclass-teens) (Ages 13 to 18): Python from the first program to files, dictionaries and data, which is the toolkit the address project below relies on.
- [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college) (Adults): Adults with no coding background build real Python habits, from clean functions to reading and writing files.
- [PCEP and PCAP Python Certification Course](/courses/pcep-pcap-python-certification-course) (Teens and adults): Preparation for the Python Institute PCEP and PCAP exams, for learners who want a recognised check on what they know.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## A live online Python lesson, seen from the learner's chair

What does a Saint John teenager actually do during a live online class? These are the stages of a typical lesson in our group classes, in the order they happen.

**The stages of one live group lesson (our own description of how we teach; one-to-one lessons follow the same shape)**

| Stage | The teacher | The learner |
|---|---|---|
| Warm-up | Puts last lesson's program on screen with one line changed | Predicts what it will print before anyone runs it |
| New idea | Explains one idea, for instance counting with a dictionary, with a tiny example | Asks questions; nobody is expected to follow silently |
| Try it | Watches screens and stops at the first learner who is stuck | Types the code on their own computer and runs it |
| Break it | Asks the group to make the program fail on purpose | Reads the error message aloud and finds the line |
| Explain it | Picks two different working solutions to compare | Says in plain words why each one works |
| Take it away | Sets one short task to do alone | Does it before next lesson without an AI tool writing it |

The "break it" stage is the one parents notice. A learner who changes `counts[first] + 1` to `counts[frist] + 1` sees Python complain that frist is not defined, and learns more about variables from that one typo than from a page of notes. A live teacher turns the mistake into the lesson; a video cannot, because it does not know the mistake happened.

### Getting started

Send the form or a WhatsApp message with an age or grade. We arrange a free lesson of 30 to 45 minutes and recommend a level at the end of it.

### Equipment

A laptop or desktop, headphones or speakers, and an internet connection good enough for a video call. Python 3 is free and is installed together in the first lessons.

### Language of teaching

Every lesson is in English. New Brunswick has two official languages, and learners from French-language schools are welcome; Python looks the same either way.

## Why do so many Saint John house numbers start with 1? Python, math and the city address file

The City of Saint John publishes its civic address points, which it calls "the official source for civic address information for the City of Saint John", as open data under the Open Government Licence - City of Saint John. Our students use them to test a famous piece of math. The counts are ours, from data read on 22 October 2026.

**First digit of the 25,401 whole-number civic numbers in the City of Saint John file, against the share Benford's law predicts (our count and our calculation)**

| First digit | Addresses | Share in Saint John | Benford's law predicts |
|---|---|---|---|
| 1 | 7,970 | 31.4% | 30.1% |
| 2 | 4,765 | 18.8% | 17.6% |
| 3 | 3,013 | 11.9% | 12.5% |
| 4 | 2,334 | 9.2% | 9.7% |
| 5 | 1,974 | 7.8% | 7.9% |
| 6 | 1,645 | 6.5% | 6.7% |
| 7 | 1,260 | 5.0% | 5.8% |
| 8 | 1,276 | 5.0% | 5.1% |
| 9 | 1,164 | 4.6% | 4.6% |

The script behind the table. It uses only Python's standard library, skips anything that is not a whole number, and prints both shares side by side:

```
import csv
import math

counts = {}
skipped = 0
with open("saint-john-civic-addresses.csv", encoding="utf-8") as f:
    for row in csv.DictReader(f):
        number = row["Civic_Numb"].strip()
        if not number.isdigit():
            skipped += 1
            continue
        first = number[0]
        counts[first] = counts.get(first, 0) + 1

total = sum(counts.values())
print(total, "whole numbers,", skipped, "skipped")
for digit in "123456789":
    share = 100 * counts[digit] / total
    benford = 100 * math.log10(1 + 1 / int(digit))
    print(digit, counts[digit], round(share, 1), round(benford, 1))
```

### 1. Clean before you count

The layer holds 25,577 address points. 176 of the civic numbers are not plain whole numbers, values like 57 1/2, 107 A or 37A, so the script counts and skips them openly rather than crashing or guessing.

### 2. The math

Benford's law says that in many real collections of numbers the first digit d appears with probability log10(1 + 1/d), about 30.1% for a 1 and 4.6% for a 9. Saint John's civic numbers come close: 31.4% start with 1 and 4.6% with 9.

### 3. Why it happens here

Numbering starts low on every street and only long streets reach the thousands. In this file 1,947 numbers have one digit, 11,095 two, 10,471 three and 1,887 four, and the largest is 10050. Students explain how that spread pushes the first digit toward 1.

**Street designators in the same file, in English and French (our count of address points; the file stores both)**

| English designator | French designator | Address points |
|---|---|---|
| Street | rue | 7,013 |
| Road | chemin | 5,022 |
| Drive | promenade | 3,516 |
| Avenue | avenue | 3,270 |
| Court | cour | 1,590 |
| Crescent | croissant | 1,565 |
| Place and Plaza | place | 410 and 6 |

### A translation table that is not one to one

Leaving out blanks, the file has 48 different English designators but only 47 French ones, because Place and Plaza both become place. A student who builds an English-to-French dictionary from it works fine; one who builds the reverse dictionary finds that place now means Place, and the 6 Plaza points have silently changed type. Seven rows have no designator in either language. Finding that kind of quiet loss is what data work in a bilingual city looks like.

We never print individual addresses; the project uses only counts. Contains information licensed under the Open Government Licence - City of Saint John ([open data catalogue](https://catalogue-saintjohn.opendata.arcgis.com/), [dataset and licence text](https://www.arcgis.com/home/item.html?id=88d9dbea7fad4767a9870c5666ec4c71)). The licence carries no endorsement of our classes, and the City gives none.

## Computer Science 110 and the rest of what New Brunswick schools offer

Saint John high schools follow New Brunswick's curriculum framework. We read the province's curriculum site on 22 October 2026; words in quotation marks are the province's.

### Computer Science 110

Listed under Grade 11, the course says "Learners will gain a strong foundation in coding while demonstrating operational skills, using computational thinking". Its achievement indicators include "Create pseudocode to represent a solution to a problem".

### AI, with authorship kept

Computer Science 110 allows AI-assisted tools for explaining and debugging code, and on comments it adds the condition "while maintaining student authorship". That is the line we hold in our classes too: help is fine, handing in a tool's work is not.

### The wider subcluster

The digital and information technology courses listed beside it include Computer Science 120, Cybersecurity 120, Cybersecurity and Technical Support 110 and Technology 9.

Another Computer Science 110 indicator asks students to "Parse one complete logical line of code in a script or code block". The digit-counting script above has a good candidate: `share = 100 * counts[digit] / total`. Saying out loud what each part does, in order, is a skill we practise every lesson, and it transfers straight into the course.

**CEMC computing contests for Saint John students in 2026 to 2027 (dates and language notes as listed by CEMC on 22 October 2026)**

| Contest | Who | Date | Language |
|---|---|---|---|
| Beaver Computing Challenge | Grade 10 or below, no coding needed | 9 to 20 November 2026 | English only |
| Canadian Computing Competition | Junior or Senior, by skill not grade | Wednesday 17 February 2027 | English and French |

### Our place beside school

We teach alongside school courses and do not grant New Brunswick credits. CEMC contests are entered through a school, since CEMC says "all students must participate through their school". We are not connected with the New Brunswick Department of Education and Early Childhood Development, any school district, CEMC or the City of Saint John.

## Saint John on Atlantic time, one of the nearest Canadian clocks to India's

Saint John keeps Atlantic time, an hour ahead of Toronto. That makes it one of the easier places in Canada to schedule with teachers in India, and the November change shifts things by an hour.

**Sample Saint John class times and the same moment in India, 2026 to 2027 (Atlantic offsets from the IANA tz database 2026e; our arithmetic; examples, not fixed batches)**

| Season | Saint John offset | 4 pm Thursday in Saint John | 9 am Saturday in Saint John |
|---|---|---|---|
| Late October 2026 | UTC-3 | 12:30 am Friday in India | 5:30 pm Saturday in India |
| From 1 November 2026 | UTC-4 | 1:30 am Friday in India | 6:30 pm Saturday in India |
| From 14 March 2027 | UTC-3 | 12:30 am Friday in India | 5:30 pm Saturday in India |

A Saturday morning class in Saint John falls in the Indian evening, which suits everybody, and after-school weekday classes land around midnight to the early hours in India, which our teachers plan for. Before each clock change we send every time again in Atlantic time. The whole country is set out on our [Canada time zones page](/canada-time-zones-2026-online-class-times).

## A Python route for Saint John learners, from first blocks to certification

Ages are approximate. The free lesson finds the right rung by seeing what the learner can already do.

- **Ages 6 to 8: Thinking in steps** Blocks and puzzles that teach order, repeats and choices, so typed code later feels familiar rather than strange. [Coding for Kids](/courses/kids-coding-blocks-masterclass), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **Ages 9 to 12: Writing Python** Real Python typed by hand, with drawings and games; variables, loops and if statements, each one explained back. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [AI Literacy for Kids (Ages 8 to 14)](/courses/ai-literacy-for-kids-course)
- **Ages 13 to 18: Python with data** Files, dictionaries and real data like the address points, then Computer Science 110 support, contests or data science. [Python for Teens](/courses/python-complete-masterclass-teens), [Data Science for Teens](/courses/data-science-course-for-teens-python-data)
- **Adults: Python and a benchmark** From zero to confident scripts, then PCEP and PCAP preparation for those who want a certificate to show. [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college), [PCEP and PCAP Python Certification Course](/courses/pcep-pcap-python-certification-course)

## An AI tool will happily lose your Plaza addresses

Because nothing tells it they matter.

Ask an assistant to translate Saint John street types from French back to English using the city file and it will build a dictionary in one line. Place and Plaza both map to place, so the reverse dictionary keeps one and drops the other. The code runs, the output looks tidy, and 6 address points have quietly changed street type.

Our teaching is about thinking first: what does each column mean, can two values collide, what should the total be before and after? Older learners use AI tools in our classes, inside each tool's age rules, as a draft to test. New Brunswick asks for the same thing in its own words, help from AI "while maintaining student authorship".

A learner who can explain why the Benford table looks the way it does has learned something no tool can hand over. The longer argument is in [is it still worth learning to code in 2026](/blog/is-coding-worth-learning-2026).

## Live online classes for Saint John and southern New Brunswick

Everything is taught live online. These are the arrangements that matter day to day.

- **Choose your times** Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.
- **Group or private** A group class has fifteen to twenty learners working at the same stage. Private lessons give one learner a teacher alone, often chosen by adults and by certificate candidates.
- **Nearby communities** Learners in Rothesay, Quispamsis, Grand Bay-Westfield and Hampton take exactly the same classes, all on Atlantic time with Saint John.
- **Local numbers** Numbers on the 506 and 428 area codes work in the form. The country code is already in place, so only the ten digits are needed.
- **School work** We explain school assignments and Computer Science 110 tasks but never write graded work. The learner submits only their own code.
- **Free first lesson** Lesson one costs nothing and asks for no card. Afterwards you get a recommended level, course and time.

**No office in Saint John** Modern Age Coders has no centre in Saint John or anywhere in New Brunswick and claims none. Every lesson is live and online, in English, taught by teachers based in India.

## Fees for Saint John learners

Three lines, each showing the currency for your region.

- First class: USD 0. One complete live lesson, free, with a recommended level and course at the end.
- Group tuition: USD 100 a month. The monthly fee for a class of fifteen to twenty learners at one level.
- Private tuition: USD 150 a month. The monthly fee for a single learner with a teacher, at agreed times.

Saint John learners pay the same fee as everyone in Canada. Payment begins only after the free lesson, once you have chosen a course and a time; the pricing page covers holidays and missed lessons.

## Saint John online Python and coding questions

### Do you run coding classes in Saint John, New Brunswick?

Yes, live and online. There is no Saint John classroom. A teacher teaches each lesson in real time while the learner codes at home.

### What happens during a live online lesson?

A warm-up prediction, one new idea, time to type and run it, a deliberate mistake to read and fix, then a short task to do alone before next time.

### Are classes in English or French?

English. New Brunswick has two official languages, and learners from French-language schools are welcome in our English-taught classes.

### What age is right for Python?

About 9 for most children. Those aged 6 to 8 start with blocks and puzzles. Teens and adults can go straight to Python.

### How long is the free lesson?

Between 30 and 45 minutes, taught live at the learner's level. It finishes with a recommended course and time, and no card is needed.

### Can adults in Saint John learn Python with you?

Yes. Adults start in the Python Masterclass. Some go on to PCEP and PCAP certification preparation, others to automation for work.

### Do your classes count toward a New Brunswick high school credit?

No. Credits such as Computer Science 110 come from school. We teach alongside them with practice and projects, and never write graded work.

### Can my teen prepare for the CCC?

Yes. CEMC lists the 2027 CCC for Wednesday 17 February 2027, in English and French. Students write it through their school; we prepare them with our own problems.

### What time zone are Saint John classes in?

Atlantic time. Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

### Does a 506 phone number work in the form?

Yes. Numbers on 506 and 428 both work. Enter the ten digits and leave out the leading 1.

### Where can I see what it costs?

The fees section on this page shows the free lesson, the monthly group fee and the monthly private fee, in your own currency. You pay nothing before the free lesson.

## Other pages for Saint John and Atlantic Canada learners

Start from [coding classes in Canada](/coding-classes-in-canada) or [Python classes in Canada](/python-classes-in-canada). The [coding curriculum by province](/canada-coding-curriculum-by-province) compares New Brunswick with the rest of the country, and contest students can read about [the Beaver Computing Challenge](/beaver-computing-challenge-guide) and [the CCC Junior](/ccc-junior-guide).

## Contact

Book the free class on [https://learn.modernagecoders.com/online-coding-and-python-classes-in-saint-john-new-brunswick](https://learn.modernagecoders.com/online-coding-and-python-classes-in-saint-john-new-brunswick#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
