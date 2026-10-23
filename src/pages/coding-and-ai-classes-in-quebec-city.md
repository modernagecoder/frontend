---
title: "Coding and AI Classes in Quebec City | Live Online, in English"
description: "Live online coding, Python and AI classes in English for Quebec City learners: the Secondary IV math options, CEMC contest dates and a city tree data project."
canonical: https://learn.modernagecoders.com/coding-and-ai-classes-in-quebec-city
source: src/pages/coding-and-ai-classes-in-quebec-city.html
---
> Yes. Modern Age Coders offers live online coding, Python and AI to Quebec City learners from age 6 to adult, taught in English, either privately or in a class of fifteen to twenty. Elementary pupils take Python and AI for Kids, and Secondary students Python for Teens or Maths Through Coding. The first lesson is free.

[Home](/) / [Canada](/coding-classes-in-canada) / Quebec City

Quebec City, Quebec / Live online

# Coding and AI classes in Quebec City

**Can a Quebec City student learn coding and AI live online, taught in English?** Yes. Modern Age Coders offers live online coding, Python and AI to Quebec City learners from age 6 to adult, taught in English, either privately or in a class of fifteen to twenty. Elementary pupils take Python and AI for Kids, and Secondary students Python for Teens or Maths Through Coding. The first lesson is free.

Quebec City is the provincial capital, named in the Constitution Act, 1867 as the seat of government of Quebec, and its secondary students face a decision most of Canada never meets: in Secondary Cycle Two, they follow one of three math options. Quebec's own description of each option reads, almost line for line, like a description of a programming habit, from discrete mathematics to finding errors in a process to writing formal proofs. This page sets out those options in Quebec's words, the CEMC contests open to Quebec City students in 2026 to 2027, a new area code that arrives in February 2027 and what it means for software, and a project we built on the Ville de Québec list of potentially remarkable trees, where the numbers only make sense once you group them by how they were measured.

Facts last verified 22 October 2026. Teaching is online; no Quebec City branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 15 to 20 students per group.

## Four ways into coding from Quebec City

Chosen for each stage of a Quebec education, from elementary school through Secondary V and on, then confirmed in the free first lesson.

- [Python and AI for Kids](/courses/python-ai-kids-masterclass) (Ages 9 to 12): A first typed language for elementary students, with games and drawings that make loops and choices concrete.
- [Maths Through Coding](/courses/maths-through-coding) (Ages 10 to 15): Math learned by programming it: patterns, functions and proofs-by-checking that suit students heading toward the TS or Science option.
- [Python for Teens](/courses/python-complete-masterclass-teens) (Secondary I to V): Python from first program to files and data, including the grouping and medians used in the tree project on this page.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Secondary IV and V): Machine learning built in Python on checked data, so a student learns to doubt a model before trusting it.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Three math options, three programming habits

Quebec's Education Program for Secondary Cycle Two mathematics describes each option in its own words. We read the English version on 22 October 2026; the quotations are Quebec's, and the link to coding in the right-hand column is ours.

**The three Secondary Cycle Two math options as Quebec describes them, with the coding habit each one matches (descriptions quoted from the Quebec Education Program; the right-hand column is our reading)**

| Option | In Quebec's description | The coding habit it matches |
|---|---|---|
| Cultural, Social and Technical (CST) | It involves &ldquo;a greater use of statistics and discrete mathematics&rdquo; | Counting, sorting and summarising data, the daily work of a programmer with a spreadsheet or a file |
| Technical and Scientific (TS) | It builds the ability to &ldquo;identify errors and anomalies in processes or solutions&rdquo; | Debugging: finding the step where a process went wrong and fixing it |
| Science (S) | Students &ldquo;develop formal proofs&rdquo; where there is a need to confirm a truth | Testing and reasoning about code until you can say why it is correct, not only that it ran |

Quebec adds that all of these options allow students to enroll in a pre-university program, and the program even has an appendix on bridges between options. So the choice is not a locked door. It is a choice of emphasis, and a term of programming is a practical way for a Secondary III student to discover which emphasis suits them before the timetable fixes it. Our [guide to the Secondary 4 options](/quebec-secondary-4-math-cst-ts-science) goes into the choice itself, and [Secondary 5 math help](/quebec-secondary-5-math-tutor) covers the year after.

### After Secondary V

A student who goes on to a CEGEP receives, at the end of a college program, a Diploma of College Studies (DCS), in the words of quebec.ca. A CEGEP learner joins our adult-paced groups, not a teen class.

### For CEGEP computing

Students thinking about a computing program at college can read our page on [CEGEP computer science preparation](/cegep-computer-science-preparation), which covers the step from secondary math to a first college programming course.

### A word on language

Under Quebec's Charter of the French language, French is the official language of the province. Our classes are taught entirely in English, which we state here so families can decide with the facts in front of them.

### Alongside school, not part of it

We teach alongside a student's school or CEGEP courses and we do not grant Quebec credits, diplomas or option placements. We are not connected with the Ministère de l'Éducation, any school service centre, any CEGEP or the Ville de Québec.

## Which trees are the biggest? Group the measurements first

The Ville de Québec publishes, through the Données Québec portal, an inventory of trees on its territory that it considers potentially remarkable. It is short enough for a beginner and tricky enough to teach a real lesson. All figures below are ours, from the file downloaded on 22 October 2026.

**DIAMETRE by measurement position, summarised by us from the Ville de Québec list of potentially remarkable trees (684 trees; downloaded 22 October 2026). The file gives no unit, so none is shown**

| POSITION_MESURE code | Trees | Median DIAMETRE | Rows with DIAMETRE 0 |
|---|---|---|---|
| DHP | 592 | 79 | 3 |
| M | 65 | 86 | 0 |
| DHS | 27 | 85 | 0 |

A beginner sorts the whole file by DIAMETRE and announces the biggest tree. The file will not allow that so quickly. Each diameter comes with a code saying where on the tree it was measured, and three different codes are in use, so a number from one group is not directly comparable with a number from another. The program below groups the diameters by that code before taking any median, counts the species and checks who owns the land. It uses Python's built-in csv and statistics modules and expects the CSV next to the script:

```
import csv
import statistics

by_position = {}
species = {}
private = 0

with open("vdq-arbrepotentielremarquable.csv", encoding="utf-8-sig") as trees:
    for row in csv.DictReader(trees):
        by_position.setdefault(row["POSITION_MESURE"], []).append(int(row["DIAMETRE"]))
        species[row["NOM_LATIN"]] = species.get(row["NOM_LATIN"], 0) + 1
        if row["TYPE_PROP"].startswith("Priv"):
            private += 1

for position, values in by_position.items():
    print(position, len(values), "median", statistics.median(values), "zeros", values.count(0))
top = max(species, key=species.get)
print(len(species), "species; most common", top, species[top])
print("TYPE_PROP starting Priv:", private)
```

### 1. Group before you summarise

Putting every DIAMETRE into one list would mix three measuring methods. A dictionary of lists, keyed by POSITION_MESURE, keeps them apart, and the medians, 79, 86 and 85, are then reported per group, never as one figure.

### 2. Prefer the median

Three DHP rows record a diameter of 0, which is almost certainly a missing value rather than a tree. A median shrugs off a few such rows; an average would be dragged down. Students then decide, and write down, whether to drop them.

### 3. Read the other columns

Seventy-five Latin names appear, and Quercus rubra, the red oak, is the most common with 145 trees. TYPE_PROP shows 609 of the 684 trees on land recorded as private, so most of these trees are seen from the street rather than visited.

**Further checks on the same Ville de Québec file (our counts)**

| Check | Result |
|---|---|
| Distinct tree IDs | 684, one per row |
| Largest DIAMETRE value in the file | 185 |
| Trees recorded with more than one trunk (MULTI_TRONC O) | 62 |
| Rows with a planting date filled in | 8 |
| Trees listed on Chemin Saint-Louis | 168 |

### Limits we teach with the data

The file does not say what unit DIAMETRE uses or exactly what each position code means, and we do not guess; a student who needs to know asks the city. A potentially remarkable tree is the city's category, not a ranking, and a list with only 8 planting dates cannot tell us how old the trees are.

The Ville de Québec publishes the dataset on Données Québec with a CC BY 4.0 licence, which allows reuse, including commercial reuse, with credit to the source. Source: Ville de Québec, Arbres potentiellement remarquables ([dataset page](https://www.donneesquebec.ca/recherche/dataset/vque_82), [licence](https://www.donneesquebec.ca/licence/)). The medians and counts are ours, and the city does not endorse this page or our teaching.

## CEMC contests for Quebec City students and CEGEP learners, 2026 to 2027

CEMC at the University of Waterloo publishes its contests in grades, which Quebec schools translate to their own levels; ask the school which paper its students write. Dates are those CEMC lists for North and South America, as of 22 October 2026.

**Selected CEMC contests a Quebec City learner can enter in 2026 to 2027, with CEMC's own wording on language and eligibility**

| Contest | Date | Language or eligibility, per CEMC |
|---|---|---|
| Canadian Computing Competition | Wednesday 17 February 2027 | Available in English and French; Junior or Senior chosen by skill |
| Beaver Computing Challenge | 9 to 20 November 2026 | English only; three levels up to Grade 10 |
| Euclid | Tuesday 6 April 2027 | Final-year secondary students or C&Eacute;GEP students |

### A French paper exists

Because CEMC offers the CCC in French as well as English, a Quebec City student can write in the language of their school even though our coaching is in English. The code itself, in Python, C++, Java or C, reads the same either way.

### Entry is through the school

CEMC is firm that all students must participate through their school. A student at a school that does not take part can ask a nearby school, or at college their CEGEP, to let them write.

### Free past papers

CEMC posts a decade of past contests free. We send students to [those papers](https://cemc.uwaterloo.ca/resources/past-contests) for practice and teach with problems we have written, never with CEMC's.

Grouping the tree measurements before summarising them is the kind of step a CCC Junior problem quietly tests: read structured input, put each record in the right bucket, and answer the question asked about each bucket. Our [CCC preparation page](/canadian-computing-competition-ccc-prep) sets out how we build toward it, and the math contests have [a page of their own](/cemc-waterloo-contests-preparation). We have no affiliation with CEMC or with the University of Waterloo.

## Quebec City clocks, India clocks, and the area code arriving in 2027

Quebec City runs on Eastern time, with one change in November and another in March; India, where our teachers are, never changes. The two example hours below are conversions, not a timetable.

**Two Quebec City example hours shown in India time, 2026 to 2027 (Quebec uses the America/Toronto zone; offsets from IANA tzdb 2026e; conversions ours)**

| Period | Quebec City offset | Wednesday 3:30 to 4:30 pm here is, in India | Sunday 1 to 2 pm here is, in India |
|---|---|---|---|
| Now, to 1 November 2026 | UTC-4 | Thursday 1 to 2 am | Sunday 10:30 to 11:30 pm |
| Winter 2026 to 2027, to 14 March | UTC-5 | Thursday 2 to 3 am | Sunday 11:30 pm to Monday 12:30 am |
| Spring and summer 2027 | UTC-4 | Thursday 1 to 2 am | Sunday 10:30 to 11:30 pm |

### A fourth area code

Quebec City and the rest of eastern Quebec use 418, 581 and 367. In Telecom Decision 2025-269, the CRTC set area code 273 to join them, taking effect on 27 February 2027. Our form already accepts all four as ten digits after the +1.

### A software lesson in a phone number

The CRTC timed the change to give providers and customers the necessary time to update their systems, databases and equipment. Any program that checks phone numbers against a fixed list of area codes will reject a valid 273 number, which is a neat example of why validation rules should follow the standard, not a list.

### Times in Eastern first

We confirm every Quebec City class in Eastern time, and send it again in the week of each clock change, so nobody has to convert.

## From elementary block coding to Secondary V and CEGEP

Stages are approximate. A teacher sets the real starting point in the free lesson.

- **Elementary, early years: Blocks and order** Block programs and animations where a child learns that the order of steps matters. [Coding for Kids](/courses/kids-coding-blocks-masterclass), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **Elementary, later years: Typed code** Python with loops and conditions, and an honest first look at how AI tools guess. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [AI Literacy for Kids (Ages 8 to 14)](/courses/ai-literacy-for-kids-course)
- **Secondary I to III: Math meets code** Python taken properly and math through programming, before the Cycle Two option is chosen. [Python for Teens](/courses/python-complete-masterclass-teens), [Maths Through Coding](/courses/maths-through-coding)
- **Secondary IV, V and CEGEP: Data and AI** Machine learning for older teens, and adult-paced Python for CEGEP students. [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens), [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)

## Ask an AI for the biggest tree in Quebec City. What will it miss?

The column that says how each tree was measured.

An AI assistant handed the tree file will happily sort by DIAMETRE and name a winner, and it may even average all 684 values. Unless someone asks, it will not notice that three different measuring positions are mixed together, or that three trees with a diameter of 0 are almost certainly blanks. The code will look clean. The answer will not survive a question from anyone who knows trees.

We teach students to look at the columns, plan the grouping and test the result before believing it. Older students meet AI tools under the age rules we keep, and use them to check work they understand rather than to produce work they do not.

Quebec asks Technical and Scientific students to identify errors and anomalies in a process; that is exactly the habit that keeps an AI-written answer honest. The longer argument is in [why we think learning to code is still worth it alongside AI](/blog/is-coding-worth-learning-2026).

## Live online lessons for Quebec City and Lévis

Lessons are online, so a learner in Sainte-Foy, Charlesbourg or across the river in Lévis joins the same teacher.

- **When classes run** Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.
- **Group or one to one** Fifteen to twenty learners sharing one level, or a dedicated teacher for one learner who wants a quicker pace or a particular goal.
- **Placed by Secondary level** Teachers place Quebec students by Secondary level and skill, and CEGEP learners with adults.
- **English only** Everything we teach, hand out or write back is in English. Students who think in French can ask in simple English, and often find code easier than prose.
- **Equipment** A computer with a keyboard, a microphone, sound and an internet connection that can carry live video. Phones and tablets make typing code slow.
- **Free first lesson** A complete lesson without charge. It closes with our advice on level, course and time, and nobody asks for a card.

**No Quebec City office** Modern Age Coders has no office or classroom in Quebec City or anywhere in Quebec, and claims none. Lessons are taught live online from India.

## What lessons cost from Quebec City

Three lines, each shown with its currency code.

- First class: Free. A full live lesson free of charge, after which the teacher suggests a level, course and time.
- Group tuition: CAD 140 a month. The monthly fee for a place in a class of fifteen to twenty learners at the same level.
- Private tuition: CAD 210 a month. The monthly fee for lessons with a dedicated teacher, scheduled around the learner.

A Quebec City learner pays the same monthly fee as a learner anywhere else in Canada. Billing begins after the free lesson, when you are happy with the course and the hour. The pricing page sets out what happens on holidays and after a missed lesson.

## Quebec City coding and AI questions

### Are there coding classes for kids in Quebec City?

Yes. From age 6 a child can join a live online class taught by a real teacher, in a group of fifteen to twenty or in private lessons. We have no classroom in the city.

### Are the lessons in French?

No. Lessons, materials and feedback are entirely in English. Many bilingual Quebec City students are comfortable with that, but we would rather a French-only family know before booking.

### How does coding help with the Secondary IV math options?

Each option's Quebec description names a habit coding trains: statistics and discrete mathematics in CST, finding errors and anomalies in TS, and formal proof in Science. Programming practises all three.

### Do your classes give Quebec credits?

No. We do not grant Quebec credits, diplomas or option placements. Our classes sit beside school and CEGEP, where all credits are earned.

### Can my child take Python classes in Quebec City?

Yes. Younger children start with Python and AI for Kids; Secondary students take Python for Teens or Maths Through Coding, then AI and machine learning.

### Do you teach robotics classes in Quebec City?

We teach the code that drives a robot, not the robot: Python, logic and sensor data. For building hardware, a school or community team is the right partner for our classes.

### Which AI tools do teenagers use in your classes?

Only age-appropriate ones. Adult-rated tools, Claude for one, stay out of under-18 lessons, and a teenager uses ChatGPT only with a parent's permission.

### Can a Quebec City student write the CCC in French?

Yes. The 2027 contest, set by CEMC for Wednesday 17 February 2027, comes in French as well as English, and students write it through their school. Our coaching for it is in English.

### What times do classes run for Quebec City?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Each time is confirmed in Eastern time.

### Will a 418 or new 273 number work in the form?

Yes. Numbers with 418, 581 or 367 work now, and 273 numbers, which the CRTC introduces on 27 February 2027, will work too. Type the ten digits; the +1 is supplied.

### How are fees shown for Quebec City?

Look in the fees section: the free first lesson comes first, then the monthly price of a class place and of a dedicated teacher, with the currency code next to each figure. You are not billed until after the free lesson.

## Other pages for Quebec City and Quebec learners

For the option choice, read [choosing a Secondary 4 math option](/quebec-secondary-4-math-cst-ts-science); for the year after, [Secondary 5 math](/quebec-secondary-5-math-tutor); for college, [CEGEP computer science preparation](/cegep-computer-science-preparation). The Canada-wide view is on [our Canada page](/coding-classes-in-canada).

## Contact

Book the free class on [https://learn.modernagecoders.com/coding-and-ai-classes-in-quebec-city](https://learn.modernagecoders.com/coding-and-ai-classes-in-quebec-city#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
