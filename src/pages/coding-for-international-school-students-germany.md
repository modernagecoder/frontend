---
title: "Coding for International School Students in Germany"
description: "Live coding classes in English for pupils at international schools in Germany, ages 6 to 18: Scratch and Python first, then IGCSE, IB or AP Computer Science."
canonical: https://learn.modernagecoders.com/coding-for-international-school-students-germany
source: src/pages/coding-for-international-school-students-germany.html
---
> Coding for international school students in Germany at Modern Age Coders means live online classes in English for pupils aged 6 to 18: Scratch and Python for younger children, then support for IGCSE Computer Science, IB Diploma Computer Science or AP Computer Science, matched to the school's programme. One regular mentor keeps to your child's pace and accent, in a group of fifteen to twenty or one to one.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / International school students

Germany · International schools · Ages 6 to 18

# Coding for international school students in Germany

Children at international schools in Germany learn in English, often move country every few years, and end school with the IB Diploma, IGCSE and A levels, or an American diploma with AP. Computing turns up in all of these routes, but at different ages and under different names. This page sets out what these schools say they offer, a coding route from age six to the final exams, and a project in which pupils tidy and count those very programmes in Python.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Ages: 6 to 18; Younger pupils: Scratch, then Python; Older pupils: IGCSE, IB or AP Computer Science; Group size: Fifteen to twenty, or one to one; German times: After school, Sunday mornings; First class: Free, no card needed. Rated 4.9 across 547 Google reviews.

## Three courses for international school pupils in Germany

One for the youngest coders, one for the IGCSE years, and one for the IB Diploma, the programme most international schools in Germany list.

- [Python and AI for kids](/courses/python-ai-kids-masterclass): Ages 8 to 12. Real Python, typed by the child, with small projects on games, numbers and simple AI ideas.
- [IGCSE Computer Science](/courses/igcse-computer-science-0478-course): Ages 14 to 16. Cambridge 0478, both papers, pseudocode and Python.
- [IB Diploma Computer Science](/courses/ib-diploma-computer-science-course): Ages 16 to 19. Standard or Higher Level, from writing programs to the theory papers and the project the school marks.

## What do international schools in Germany offer?

Mostly IB programmes, but not only. The association AGIS and the KMK give the clearest public picture, and neither publishes a count of pupils.

### What AGIS says about its members

AGIS, the Arbeitsgemeinschaft der Internationalen Schulen in Deutschland, states that each member is authorised by the IB and runs one or more of its four programmes (Primary Years, Middle Years, Diploma, Career-related). It says the schools bring together children from up to 65 nations and use English as the common language of lessons, and that they are non-profit organisations.

In the association's words, its IB Diploma counts as gleichwertig, of equal standing, with the German Abitur provided the required subject mix is taken, while members offering the Middle Years Programme or IGCSE give pupils a qualification equivalent to the Mittlere Reife.

### Other English-medium and bilingual options

The KMK's description of the German school system mentions five European Schools in Germany, which teach a European model. Berlin's Staatliche Europa-Schule is a network of bilingual streams at 33 schools with about 6,000 pupils, in German and a partner language.

The KMK also says the Deutsches Internationales Abitur is awarded at German schools abroad, so it is not a route inside Germany. And in the KMK agreement on the IB Diploma, the annex dated 26 March 2026 numbers 59 schools in Germany under a special arrangement on maths at Standard Level.

Sources: AGIS, agis-schools.org (homepage, Wer wir sind and school directory), read 2 November 2026; KMK, Eurydice dossier on the German education system; KMK, Vereinbarung über die Anerkennung des International Baccalaureate Diploma, Anlage 1. AGIS pages give two different member counts, 23 on the homepage and 20 on Wer wir sind, so we print neither as a fact. We are not connected with AGIS, the KMK or any school.

## When should a child at an international school start coding, and what comes next?

Our suggested route follows the IB stages most of these schools use, with the Cambridge and American routes beside them. It is our plan, not any school's.

**A coding route for pupils at international schools in Germany (ours)**

| Age | School stage, roughly | What we teach |
|---|---|---|
| 6 to 8 | IB Primary Years, early grades | Scratch: sequences, loops and events through small animated stories |
| 8 to 11 | Primary Years, upper grades | Python basics typed by the child; simple games and number puzzles |
| 11 to 14 | Middle Years, or Cambridge Lower Secondary | Python projects, data, a first look at the web and at algorithms |
| 14 to 16 | MYP years 4 and 5, or IGCSE | IGCSE Computer Science 0478, or MYP Design and personal projects |
| 16 to 19 | IB Diploma, A levels or AP | IB Computer Science, Cambridge 9618, or AP CSA and CSP |

Our own route. Stage names follow the programmes listed in the AGIS school directory; the age bands are approximate and each school sets its own.

### Why start early, and gently

Children who move between schools and countries meet computing in very different forms: one school teaches Scratch in grade 2, another nothing until grade 7. A steady weekly class keeps a thread running through those moves, in the same language as school.

For six to eight year olds the aim is not exam content. It is getting used to giving exact instructions and spotting why they went wrong.

### Why the exam years need a plan

From about fourteen the route forks: IGCSE Computer Science on a Cambridge track, or the MYP and then the IB Diploma, or AP on an American track. Each has its own exam language, from Cambridge pseudocode to Java for AP Computer Science A.

A pupil who can already write and test programs arrives at that fork with a free choice, instead of avoiding Computer Science because it looks too late to start.

## Can pupils use Python to find out which programmes these schools list?

Yes, and it teaches the most underrated skill in data work: cleaning labels before you count them. We copied the qualifications listed on 25 AGIS directory pages into a text file, one school per line.

**Three lines of our file agis_offers.txt** (Text)
```text
Bonn International School | IB Primary Years Programme (PYP); IB Diploma Programme (DP); IB Middle Years Programme (MYP)
International School of Ulm/Neu-Ulm | IB Primary Years Programme (PYP); International Baccalaureate (IB); International General Certificate of Secondary Education ( IGCSE)
John F. Kennedy School Berlin | Advanced Placement (AP); American High School Diploma; Deutsches Abitur
```
The labels are exactly as the AGIS pages give them, including the stray spaces in "( IGCSE)".

Look at the first two lines. Bonn lists "IB Diploma Programme (DP)". Ulm/Neu-Ulm lists "International Baccalaureate (IB)", which could mean the Diploma or the IB in general; the label does not say. A careless count would either drop Ulm/Neu-Ulm or add it to the Diploma column. Both are guesses. Our program keeps it as its own answer instead.

**Our program: tidy the labels, then count schools** (Python)
```python
raw_labels = set()
schools = []
with open("agis_offers.txt", encoding="utf-8") as f:
    for line in f:
        name, offers = line.strip().split(" | ")
        labels = [x.strip() for x in offers.split(";") if x.strip() not in ("", "-")]
        raw_labels.update(labels)
        schools.append((name, labels))

def tidy(label):
    if "Diploma" in label and label.startswith("IB"):
        return "IB Diploma"
    if label == "International Baccalaureate (IB)":
        return "IB, programme not named"
    if "IGCSE" in label:
        return "IGCSE"
    if "AS / A Levels" in label:
        return "A levels"
    if "Advanced Placement" in label:
        return "AP"
    if "Abitur" in label:
        return "Abitur"
    return None

counts = {}
for name, labels in schools:
    for group in {tidy(x) for x in labels} - {None}:
        counts[group] = counts.get(group, 0) + 1

print("Schools read:", len(schools))
print("Different labels before tidying:", len(raw_labels))
for group in sorted(counts, key=counts.get, reverse=True):
    print(group, counts[group])
```
It prints Schools read: 25, Different labels before tidying: 27, then IB Diploma 13, IB, programme not named 9, IGCSE 8, AP 3, Abitur 2 and A levels 1.

**Schools among the 25 AGIS directory pages we read that list each qualification (our count)**

| Qualification | Schools |
|---|---|
| IB Diploma, named as such | 13 |
| IB, programme not named | 9 |
| IGCSE | 8 |
| AP | 3 |
| German Abitur | 2 |
| Cambridge AS and A levels | 1 |

Data: AGIS school directory pages, agis-schools.org, read 2 November 2026; 25 pages, not a complete list of international schools in Germany. The grouping and the counts are ours. A school can appear in several rows.

Twenty-seven different labels came down to six groups, and one design decision mattered more than any line of code. The order of the tests inside tidy decides where a label lands: Augsburg lists "IB Diploma (including German Abitur recognition)", which contains both "Diploma" and "Abitur". Because the IB test comes first, it counts once, as an IB Diploma, and the Abitur row shows only the two schools that list the Abitur in its own right. Swap the order of those two tests and the answer changes. A pupil who can explain that has understood something many adults with spreadsheets have not.

1. **Run it.** Make your own agis_offers.txt from the three sample lines and check what your shorter file prints.
2. **Move one test.** Put the Abitur test before the IB Diploma test and predict the new Abitur count before running it.
3. **Add a group.** Count the Middle Years Programme too. How many label spellings does it need?
4. **Say what is missing.** Write two sentences on why 25 directory pages cannot tell us how many international schools Germany has.

## What happens to coding when a family moves to or from Germany?

Online classes travel. The mentor, the course and the progress stay the same when the school changes.

### Arriving in Germany

A child joining an international school mid-year keeps the same weekly class through the move, which is one fewer thing that changes at once.

### Between programmes

Moving from a Cambridge school to an IB one, or the reverse, we map what the new school expects and fill the gap in order.

### Leaving Germany

Classes continue from the next country. Only the clock changes, and families choose times in their own time zone.

Some families at international schools also follow the German system for a younger child, or plan a later move into a German Gymnasium. For them we teach the Informatik that German schools now ask for, in English, through our [Informatik companion course for Klasse 5 to 10](/courses/informatik-companion-course-klasse-5-10), and explain the German side on our [Informatik-Nachhilfe page](/informatik-nachhilfe-online).

With children under 18 we keep to the age rules the AI providers set in their own terms: no tool with an adult minimum age is used in their classes. The [AI tools age guide](/ai-tools-age-guide) quotes the rules tool by tool.

## When can a pupil in Germany fit in a coding class?

International school days often end later than German ones, so many families choose late afternoon or Sunday morning. India, where the mentors are, runs 4 h 30 ahead in winter and 3 h 30 in summer.

**Sample slots in German time, with the matching time in India**

| Germany | India before 28 March 2027 | India from 28 March 2027 |
|---|---|---|
| 14:15 | 18:45 | 17:45 |
| 16:15 | 20:45 | 19:45 |
| Sunday 09:45 | 14:15 | 13:15 |

Under the Einheitenzeitgesetz Germany keeps UTC+1 (MEZ) in winter and UTC+2 (MESZ) in summer; the clocks changed on 25 October 2026 and change again on 28 March 2027. India is UTC+5:30 throughout. These are sample times, not fixed groups.

Younger children usually do best with one class at the same time each week; exam-year pupils often add a second. The free first class is booked in your own clock.

## From a first Scratch story to an exam project

How we track a pupil's progress across the years, whatever programme their school runs. These steps are ours.

**Coding steps for international school pupils (ours)**

| Step | Age, usually | What the pupil does |
|---|---|---|
| 1. Instructions | 6 to 8 | Builds a Scratch story with loops and events, and fixes it when it misbehaves |
| 2. Typed code | 8 to 11 | Writes a Python game with variables, conditions and a score |
| 3. Data | 11 to 14 | Reads a file, cleans it and counts, like the AGIS project above |
| 4. Exam foundations | 14 to 16 | Traces algorithms and writes tested programs for IGCSE or the MYP |
| 5. Own project | 16 to 19 | Plans, builds and defends a project for IB, A level or AP |

### For pupils

When a label is unclear, count it as unclear. Guessing is not data.
Keep your old projects. Moving schools is easier with a portfolio.

### For parents

Ask the school which computing courses run in which years before choosing options.
A weekly class in the language of school survives a move better than a local club.

## Nine more courses for international school pupils

Live and in English throughout, and the mentor a child starts with is the mentor they keep.

### Primary years

Ages 6 to 11

- [Scratch programming](/courses/scratch-programming-complete-course): Stories, games and the first loops.
- [Minecraft coding](/courses/minecraft-coding-for-kids-course): Code in a world children already know.
- [Computational thinking](/courses/problem-solving-and-computational-thinking-for-kids): Puzzles that train exact thinking.

### Middle years

Ages 11 to 15

- [Python for teens](/courses/python-complete-masterclass-teens): From first script to real projects.
- [JavaScript for teens](/courses/javascript-course-for-teens-beginners-interactive-web): Interactive pages and browser games.
- [Informatics competitions](/courses/german-informatics-competitions-course-biber-bwinf-bwki): Biber and beyond, with puzzles of our own.

### Final exams

Ages 15 to 19

- [AP Computer Science A](/courses/ap-computer-science-a-java-exam-prep-course): Java for pupils on an American track.
- [A Level Computer Science](/courses/cambridge-a-level-computer-science-9618-course): Cambridge 9618 after IGCSE.
- [IB Maths AA and AI](/courses/ib-mathematics-aa-ai-masterclass): Compulsory for every Diploma pupil.

## How live classes fit an international school week in Germany

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Afternoon** Weekday slots once the school day is over.
- **Sunday morning** A calm slot before the week starts.
- **One to one** A time fixed with the mentor that moves with the school calendar.

- **The child types** Every program is built by the pupil, not shown on screen.
- **School's language** English, as at school, at a pace that suits.
- **Programme-aware** IB, Cambridge or American, the plan follows it.
- **One mentor** The same person through school moves.
- **Age-safe tools** No adult-only AI tools for under-18s.
- **Class size** A class of fifteen to twenty, or private lessons.

## Fees for coding classes for international school pupils

Each month of eight live classes has a single fee. You see it here in euro, based on the European Central Bank reference rate; the payment is processed in US dollars and your bank converts it, which can leave a small difference on your statement.

- Free first class: Free. A free first class. A short task matched to age and school stage. No card needed.
- Group batch: €90 (charged in US dollars) a month. Fifteen to twenty pupils of a similar age and level. One regular mentor. Two classes a week. Month to month.
- One to one: €134 (charged in US dollars) a month. One pupil, one mentor. Plan built around the school programme. Continues through a move abroad.

## Coding for international school pupils in Germany: your questions

### Are the classes in German?

No. All classes are live and in English only, the language AGIS says its member schools teach in. The mentor keeps to your child's pace and accent.

### From what age can my child start?

From 6, with Scratch. Most children move to typed Python around 8 to 10. There is no upper limit for school-age pupils.

### Do you teach IB, IGCSE and AP Computer Science?

Yes: IB Diploma Computer Science at SL and HL, Cambridge IGCSE Computer Science 0478, and AP Computer Science A and Principles. We follow whichever programme your child's school runs.

### Are you connected with my child's school or with AGIS?

No. We are an independent online school. We name schools on this page only as context from the AGIS directory, and we do not award grades or qualifications.

### Is the IB Diploma recognised in Germany?

AGIS describes its IB Diploma as equal in standing to the Abitur when the required subjects are taken. The KMK sets those combinations in its recognition agreement; your school's IB coordinator can say how they apply to your child.

### What if we move to another country?

Classes continue online with the same mentor. You choose new times in your new time zone.

### When are classes in German time?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Many international school families pick late afternoon or Sunday morning.

### How do we pay?

Fees appear in euro, converted at the European Central Bank reference rate, and are charged in US dollars; your bank does the conversion, so its figure can be a little different. The first class is free.

### Will my child use AI tools?

Only tools whose providers allow your child's age. Several set 18 as the minimum and we never use those with under-18 pupils.

### Can siblings of different ages join?

Yes, in different groups by age and level, or one to one each. Families with two children often book back-to-back slots.

## Related pages

- [Coding classes in Germany](/coding-classes-in-germany): Our main page for families in Germany.
- [IB Computer Science, worldwide page](/ib-computer-science-online-tuition): The Diploma course in depth.
- [IGCSE Computer Science tuition](/cambridge-igcse-computer-science-tuition): Cambridge 0478 in depth.
- [AP Computer Science A classes](/ap-computer-science-a-online-classes): Java for the AP exam.
- [Coding roadmap](/coding-roadmap): How the skills build over the years.
- [AI tools age guide](/ai-tools-age-guide): Tool ages from the providers' terms.

## Contact

Book the free first class at [https://learn.modernagecoders.com/coding-for-international-school-students-germany](https://learn.modernagecoders.com/coding-for-international-school-students-germany#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
