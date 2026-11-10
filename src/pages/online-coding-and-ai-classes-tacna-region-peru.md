---
title: "Tacna Region, Peru: Online Coding and AI Classes in English"
description: "Live online coding and AI classes in English for Tacna, Peru: who they suit, census and home-computer data, and a Python project on university programmes."
canonical: https://learn.modernagecoders.com/online-coding-and-ai-classes-tacna-region-peru
source: src/pages/online-coding-and-ai-classes-tacna-region-peru.html
---
> Learners in the Tacna region of Peru, in Tacna city, Gregorio Albarracín, Ciudad Nueva, Alto de la Alianza, Pocollay or the highland provinces, can take live online coding, AI and maths classes in English with Modern Age Coders. Secundaria students, university students and working adults who read some English fit best: Python, Java, web and app development, data, and AI agents for adults, guided by a mentor in real time. Six year olds and older children start with blocks, frequently in private lessons. Classes run as a group of fifteen to twenty or one to one, scheduled around the learner, and trying the first one costs nothing.

[Home](/) / [Courses](/courses) / [Coding and AI classes in Peru](/coding-and-ai-classes-in-peru) / Tacna region

Tacna region · Live online, in English · Secundaria, university and work

# Online coding and AI classes in the Tacna region

Nearly everyone in the Tacna region lives in or around the city, from the old centre to Gregorio Albarracín, Ciudad Nueva, Alto de la Alianza and Pocollay, with a small population up in Tarata and Candarave. Homes here are better equipped than in most of Peru, and our classes, taught live online in English, fit many teenagers and adults well. This page sets out the facts, is honest about English, and uses SUNEDU's list of university programmes for a lesson in comparing two ways of counting the same thing.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Strong fit: Secundaria students, university students and professionals; Children: Welcome from six, often one to one; Language: English only, clear and steady; Formats: Fifteen to twenty in a group, or private; Schedule: Any hour that suits; First step: A free trial class with honest advice. Rated 4.9 across 547 Google reviews.

## Three courses Tacna learners often start with

One each for teenagers, university students and working adults, the three groups who usually settle fastest into English-taught lessons.

- [Python for Teens](/courses/python-complete-masterclass-teens): Secundaria pupils with no experience begin here. Short programs built from plain English keywords make Python the gentlest typed language to learn first.
- [Java for University Students](/courses/complete-java-programming-masterclass-college): For engineering and systems students. Core Java to Spring Boot, matched to what university courses expect.
- [AI Coding Agents for Professionals](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals): For working adults aged 18 and over. Use Codex and Claude Code to plan, write and check software, while staying in charge of the result.

## Who in Tacna are English-taught online classes right for?

Mostly teenagers, university students and adults who already read some English, and children whose parents can sit nearby at first. Lessons happen live on a video call and are delivered only in English; Spanish is never the teaching language.

### English in Tacna

In EF's English Proficiency Index 2025 the Tacna region scores 476, in EF's low band, a little below Peru's national 519, which EF rates moderate.

That is a picture of the average adult who took EF's test, not of your family. Many Tacna teenagers follow English well, and the free class shows where an individual learner stands.

### Who usually does well

Secundaria students who want programming and better English from the same hour. Students at Tacna's two universities, who read English in software, research papers and manuals. Professionals who want AI and coding skills for their work.

Children of six to nine can join too, most often one to one, where the mentor can repeat, demonstrate and wait, and the child can answer by building on the screen.

Think of the free class as a fair trial. The mentor gives a small task in simple English and sees how the learner responds. Where English is still too steep a climb, the mentor says so openly and proposes another route, such as individual lessons or waiting a few months. For a Spanish-language explanation for parents of younger children, see [clases de programación para niños, en español](/clases-de-programacion-para-ninos-online-peru); working adults may prefer [AI and coding for professionals in Peru](/ai-and-coding-for-professionals-peru).

## How many people live in the Tacna region?

The 2025 census counted 389,226 people in the department of Tacna. The province of Tacna alone holds 367,437, which makes this one of Peru's most urban regions.

**Tacna department by province, census population 2025**

| Province | Population |
|---|---|
| Tacna (capital: Tacna) | 367,437 |
| Jorge Basadre | 10,262 |
| Candarave | 5,797 |
| Tarata | 5,730 |
| Department of Tacna | 389,226 |

INEI, Censos Nacionales 2025: Cuadro N° 1 of the national demographic-indicators workbook, total population including people estimated as missed, on 15 September 2025. The department total is INEI's own figure, not one we added up.

### The city and its districts

INEI counted 286,240 people in the city of Tacna in the 2017 census. In 2025 its largest district was Coronel Gregorio Albarracín Lanchipa with 124,652 people, ahead of the district of Tacna itself with 116,625.

Ciudad Nueva had 34,236 people in 2025, Alto de la Alianza 33,865 and Pocollay 23,844. In 2017 the populated centre of Alfonso Ugarte, in Gregorio Albarracín, counted 110,115 people, more than the 86,977 of central Tacna.

### Beyond the city

La Yarada Los Palos had 14,986 people in 2025. The other three provinces are small: Jorge Basadre, around Locumba and Ilabaya, had 10,262, and the highland provinces of Candarave and Tarata 5,797 and 5,730.

The 2017 city and populated-centre figures and the 2025 district figures are different measures from different years, so we never add them together.

## How many computing degrees can you study in Tacna?

It depends on how you decide what counts as computing, and a short program shows that two sensible methods disagree. The data is SUNEDU's open list of the programmes offered by Peru's licensed universities.

### The dataset

SUNEDU, the national university regulator, publishes "SUNEDU - Programas Académicos" on datosabiertos.gob.pe under an Open Data Commons Attribution licence (ODC-By), which allows reuse, commercial included, with credit. SUNEDU describes it as the academic programmes of licensed universities "por sede y local".

Our copy, programas-universidades.csv, has 8,112 rows for all of Peru, every one stamped with a cut-off of 28 August 2024, although the dataset page was last modified on 13 October 2026. Filtering for premises in the department of Tacna leaves 169 rows from two universities, 63 undergraduate and 106 postgraduate.

### Two ways to decide

Method one, a keyword rule: call a programme computing if its name contains INFORM, SISTEMAS, COMPUTA or SOFTWARE. Quick, and close to how a person skims a list.

Method two, the publisher's category: SUNEDU puts each programme in a field, and one field is INFORMÁTICA. Slower to understand, but decided by someone who looked at each programme. A careful analyst runs both and compares.

**Version 1: count by keyword** (Python)
```python
import csv

WORDS = ("INFORM", "SISTEMAS", "COMPUTA", "SOFTWARE")

with open("programas-universidades.csv", encoding="latin-1", newline="") as f:
    tacna = [r for r in csv.DictReader(f, delimiter="|") if r["DEPARTAMENTO_LOCAL"] == "TACNA"]

hits = [r for r in tacna if any(w in r["DENOMINACION_PROGRAMA"] for w in WORDS)]
print("Programme rows in Tacna:", len(tacna))
print("Computing, by keyword:", len(hits))
```
It prints: Programme rows in Tacna: 169 and Computing, by keyword: 9.

Nine looks like an answer. But a keyword rule is a classifier, and every classifier makes mistakes; the question is which ones. Version 2 runs both methods on every row, keeps a tally keyed by the pair of answers, and prints each row where they disagree.

**Version 2: compare the rule with the category** (Python)
```python
import csv
from collections import Counter

WORDS = ("INFORM", "SISTEMAS", "COMPUTA", "SOFTWARE")

with open("programas-universidades.csv", encoding="latin-1", newline="") as f:
    tacna = [r for r in csv.DictReader(f, delimiter="|") if r["DEPARTAMENTO_LOCAL"] == "TACNA"]

table = Counter()
for r in tacna:
    by_word = any(w in r["DENOMINACION_PROGRAMA"] for w in WORDS)
    by_class = r["NOMBRE_CLASE_PROGRAMA_N2"] == "INFORMÁTICA"
    table[by_word, by_class] += 1
    if by_word != by_class:
        print("Disagree:", r["DENOMINACION_PROGRAMA"][:48], "|", r["NOMBRE_CLASE_PROGRAMA_N2"])

print("Both say computing:", table[True, True])
print("Keyword only:", table[True, False])
print("Class only:", table[False, True])
print("Neither:", table[False, False])
```
It prints four lines starting Disagree:, then Both say computing: 6, Keyword only: 3, Class only: 1 and Neither: 159.

A Counter can be keyed by a tuple, so table[by_word, by_class] keeps four counts at once, one for each combination of True and False. Six rows are computing by both methods. Three are caught only by the keywords: two teacher-training degrees whose names include computación alongside mathematics, which SUNEDU files under education, and a second specialisation in territorial planning and geographic information systems, matched because of the word SISTEMAS. One row is computing only by category: a second specialisation in telecommunications engineering, whose name contains none of the keywords. Neither method is wrong; they answer slightly different questions, and only reading the four disagreements tells you which one fits yours.

**Tacna programme rows: keyword rule against SUNEDU category (our calculation, data cut-off 28 August 2024)**

|  | Category INFORMÁTICA | Other category |
|---|---|---|
| Keyword found | 6 | 3 |
| No keyword | 1 | 159 |

Data: SUNEDU, Programas Académicos, ODC-By, rows with DEPARTAMENTO_LOCAL equal to TACNA. The keyword list and every count are ours. A row is one programme at one set of premises, and the list includes postgraduate and second-specialisation programmes, so it is not a count of undergraduate degrees.

1. **Ages 6 to 8.** Sort a pile of toys into "has wheels" and "is a car". Find a toy that has wheels but is not a car, and one that is a car but is drawn without wheels.
2. **Ages 8 to 11, in Scratch.** Make a list of ten words and a rule that says "yes" if a word contains "ball". Which words fool it?
3. **Ages 11 to 13.** Add "TELECOM" to the keyword tuple and run Version 2 again. Which disagreement disappears, and does a new one appear?
4. **Teenagers.** Restrict both methods to undergraduate rows (TIPO_NIVEL_ACADEMICO equal to PREGRADO). How many computing degrees does each method find now?
5. **University and adults.** Run the comparison for every department in Peru and rank departments by how often the two methods disagree.

The same thinking applies to AI. A model that labels things is a classifier too, and checking it against a trusted label, then reading the mistakes, is how you learn when to rely on it. Teenagers who want to go further can look at [our page on coding classes for teens in Peru](/coding-classes-for-teens-peru).

## Do Tacna schools teach programming?

Not as a timetable subject. Tacna follows the national curriculum, which expects digital skills to be developed inside every area, and the regional education office has been working on equipment, technology fairs and a regional curriculum.

### The national framework

Ley 28044 sets primaria at six years and secundaria at five. MINEDU fixes a normative age per grade, counted on 31 March: six for first grade of primaria, sixteen for fifth of secundaria.

The CNEB's ICT competency, number 28, is transversal, meaning no single area owns it. Of the 35 weekly hours in regular secundaria, four go to Matemática and three to Inglés; none is labelled programming.

### What the DRE Tacna has reported

On 29 November 2024 the Dirección Regional de Educación Tacna held a technology fair on digital skills, artificial intelligence and educational robotics, with 32 student projects on 30 stands from its four UGELs.

On 21 July 2025 it received 616 retired items of equipment, mainly computers, donated by SUNAT's customs office in Tacna, to be checked and passed to schools in the UGELs of Tacna, Tarata, Candarave and Jorge Basadre. Earlier that month it began consultations towards a regional curriculum for Tacna.

Fábrica de Programadores, the ministry's Python scheme for older secundaria pupils, launched in Lima Norte in July 2025 for a first cohort of 1,000, and nothing we read places it in Tacna so far. Olympiads are a different story: ONEM 2026 opened with a school round on 8 July 2026 involving over 1.7 million pupils across Peru, and UTEC charges nothing for its computing olympiads. We are not connected with the DRE, SUNEDU, MINEDU, UTEC, either university or any contest, and our problems are our own.

## How well connected are homes in Tacna?

Better than the Peruvian average. In 2025, 42.4 per cent of Tacna homes had a computer against 33.9 per cent nationally, and 84.5 per cent of residents from age six upwards were internet users.

**Tacna and Peru: computers and internet, ENAHO (per cent)**

| Indicator | Tacna 2022 | Tacna 2025 | Peru 2025 |
|---|---|---|---|
| Computer in the home | 44.2 | 42.4 | 33.9 |
| Internet service in the home | 66.2 | 60.9 | 56.8 |
| Share of people 6+ who go online | 79.9 | 84.5 | 81.1 |

Figures from the ENAHO household survey as published by INEI in the 2026 statistical compendium (volume 1, tables 11.5, 11.6, 11.13), decimal commas turned into points.

### Reading the table

Tacna is above the national figure on all three measures in 2025. Even so, home computers and home internet both dipped between 2022 and 2025, while personal internet use kept climbing.

More than half of Tacna homes still have no computer, so it is worth checking before booking rather than assuming.

### What we ask for

For the youngest, a tablet is fine for dragging blocks. Typed code, usually from nine or so, needs a laptop or desktop for most of the hour.

Phones are fine for joining a call or reviewing notes, but not for writing programs. If no computer is available, the mentor will tell you honestly in the free class.

## Which course should a learner in Tacna take first?

Pick by age and English, then confirm the computer. The guide below is ours, and the age ranges are our course ranges.

**First courses for Tacna learners (our suggestions)**

| Who is learning | Their English | Course to start | Set-up |
|---|---|---|---|
| Child, 6 to 8 | Beginning | Scratch, with puzzles | One to one |
| Child, 8 to 12 | A little from lessons | Coding for Kids, or Python and AI for kids | Group or one to one |
| 1° to 3° de secundaria | School level | Python for Teens | Group |
| 4° and 5° de secundaria | Reads with ease | Python, then Java, web or apps | Group |
| University student | Reads technical English | Java, DSA or data science | Group or one to one |
| Professional, 18 and over | Works with English | AI coding agents, or Python for beginners | Usually private |

Our suggestions. Grade placement follows MINEDU's age at 31 March, so classmates can be nearly a year apart in age.

### Under twelve

Visual, playful lessons where every on-screen action is named in English.

### Secundaria

Typed code from the start; Python first, then Java, websites, apps or certification.

### University and work

Java, data and AI agents for systems and engineering students and for professionals.

University students can read [coding courses for university students in Peru](/coding-courses-for-university-students-peru), and every Peru guide, English and Spanish, is listed on [coding and AI classes in Peru](/coding-and-ai-classes-in-peru).

## What time is it in India when it is morning in Tacna?

Mid-to-late afternoon or evening. India is 10 hours 30 minutes ahead of Tacna all year, and the class hour is chosen by the learner.

**Example conversions, Tacna to India (not a timetable)**

| Tacna | India | Mentor's time |
|---|---|---|
| 06:15 | 16:45 | Afternoon |
| 08:00 | 18:30 | Evening |
| 09:45 | 20:15 | Evening |
| 12:30 | 23:00 | Late night |
| 17:15 | 03:45 | Early hours |
| 19:00 | 05:30 | Dawn |

Per the tz database, Peru (zone America/Lima) has stayed five hours behind UTC without summer time since 1994, and India keeps UTC plus five and a half hours. Neither changes its clocks.

Book in your own time zone and the hour stays fixed through the year. Schools went back for 2026 on 16 March; school-age learners often use the summer months of January to March to get going, while professionals start whenever their work allows.

## How a learner in Tacna progresses

Our six stages, used for every age, so that families and adult learners can see what has been achieved and what is next.

**Our stages, from first steps to comparing methods**

| Stage | Typical age | The learner can |
|---|---|---|
| 1. Follow | 6 to 7 | Run a short sequence of steps on a sprite |
| 2. Repeat | 7 to 9 | Replace copied steps with a loop |
| 3. Test | 8 to 10 | Use if to react to what happens |
| 4. Build | 9 to 12 | Write Python with lists, loops and functions |
| 5. Classify | 11 to adult | Write a rule that sorts rows into yes and no |
| 6. Compare | 13 to adult | Check a rule against a trusted label and explain the disagreements |

### For families

The programmes project works on stages 5 and 6. A learner who finishes it will ask "counted how?" whenever a number is quoted.
Each month you hear what was built and explained.

### For learners

A rule is only as good as its mistakes.
Read the disagreements before choosing a method.

## Nine more courses for Tacna learners

Three age bands, all live, in English, with a mentor who stays with the learner, in a group or one to one.

### Children

Ages 6 to 12

- [Coding for Kids](/courses/kids-coding-blocks-masterclass): Blocks to games and simple apps.
- [Python and AI for kids](/courses/python-ai-kids-masterclass): Turtle art, games and smart projects.
- [Maths competitions](/courses/middle-school-math-competitions-course): Problem solving for contest-minded pupils.

### Teenagers

Ages 13 to 18

- [Java for teens](/courses/java-programming-masterclass-for-teens): Objects, classes and real programs.
- [App development](/courses/complete-app-development-masterclass-for-teens): Mobile apps with React Native.
- [Competitive programming](/courses/competitive-programming-for-teens-course): Algorithms for olympiad-style contests.

### University and adults

18 and over

- [Data structures and algorithms](/courses/data-structures-algorithms-masterclass-college): Interview-ready problem solving.
- [Data science](/courses/data-science-complete-masterclass-college): Python, machine learning and models.
- [Python masterclass](/courses/python-programming-masterclass-zero-to-advanced-college): From zero to automation and projects.

## How live online classes run for learners in Tacna

Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.

- **Morning** A Tacna morning is the Indian afternoon or evening.
- **After class or work** Afternoon and evening hours in Peru also work.
- **Private** For tight schedules or English that needs time.

- **One mentor** The same person, week after week.
- **Steady English** Clear speech with key terms on screen.
- **Learner types** Every program is written by the student.
- **Ages apart** Children, teenagers and adults in separate groups.
- **Straight talk** Families and adults hear real progress.
- **Group or private** Fifteen to twenty, or one learner alone.

## Fees for learners in Tacna

Plans are priced in US dollars and charged monthly to a card. Your bank converts the charge into soles at its rate on the day, so the soles figure can change slightly from one month to the next.

- Free first class: Free. A free trial class. A check of English and computer. No card needed.
- Group batch: USD 100 a month. Fifteen to twenty learners of a similar age. A regular mentor. Weekly live classes. Monthly, cancel any time.
- One to one: USD 150 a month. One learner and one mentor. Pace set around the learner. Hours you pick.

## Online coding and AI classes in Tacna: frequent questions

### Are the classes in Spanish?

No. Our teaching is live, online and entirely in English. The mentor keeps a calm, clear voice, adjusts to how fast the learner goes and how they sound, and turns a Spanish reply into English together with them, yet never teaches in Spanish.

### How does EF rate English in Tacna?

EF's 2025 index scores the Tacna region at 476, in its low band, below the national 519. It is an average; the free class tells us about your child or you.

### We live in Gregorio Albarracín, Ciudad Nueva or Pocollay. Can we join?

Yes, from any district, and from Tarata, Candarave or Jorge Basadre too. All that matters is a connection that lasts the lesson and a suitable device.

### Does a learner need a computer?

For typed programming, yes, from about nine. Younger children can start block coding on a tablet. A phone works for joining a call but not for writing code.

### When are classes held?

Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India stays 10 hours 30 minutes ahead of Tacna whatever the month: 08:00 in Tacna means 18:30 in India.

### Do Tacna schools teach coding?

There is no coding subject. Peru's curriculum spreads digital skills through every area, and the standard secundaria timetable reserves no hours for programming.

### What do university students in Tacna get from these classes?

Usually a lot. Java, data structures, data science and Python taught in English support engineering and systems degrees, where most documentation is already in English.

### Can adults learn AI agents with you?

Yes. Adults aged 18 and over can take our course on AI coding agents such as Codex and Claude Code, learning to plan, review and test what the agent produces. Teenagers learn AI through courses suited to their age.

### How is payment made?

A card payment each month, set in US dollars, which your bank changes into soles. Browsing from India shows rupees instead. There is nothing to pay for the trial class.

### Is there a certificate?

Some courses end with our own certificate of completion, which lists the learner's projects. SUNEDU, MINEDU, the DRE and universities play no part in issuing or endorsing it, and it is not a Peruvian qualification.

## More pages for learners in Tacna

- [Coding and AI classes in Peru](/coding-and-ai-classes-in-peru): The Peru hub, with every guide listed.
- [AI and coding for professionals](/ai-and-coding-for-professionals-peru): For working adults in Peru.
- [Coding classes for teens in Peru](/coding-classes-for-teens-peru): Routes for secundaria students.
- [Courses for university students](/coding-courses-for-university-students-peru): Java, Python and DSA in English.
- [AI tools age guide](/ai-tools-age-guide): Age limits for common AI tools.
- [How we teach](/how-we-teach): Inside a live lesson.

## Contact

Book the free first class at [https://learn.modernagecoders.com/online-coding-and-ai-classes-tacna-region-peru](https://learn.modernagecoders.com/online-coding-and-ai-classes-tacna-region-peru#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
