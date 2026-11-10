---
title: "Amazonas Region, Peru: Online Coding and AI Classes in English"
description: "Live online coding and AI classes in English for Amazonas, Peru: who they suit, census and home-computer figures, and a Python project on school altitudes."
canonical: https://learn.modernagecoders.com/online-coding-and-ai-classes-amazonas-region-peru
source: src/pages/online-coding-and-ai-classes-amazonas-region-peru.html
---
> Learners anywhere in the Amazonas region of Peru, from Chachapoyas and Bagua Grande to Bagua, Rodríguez de Mendoza and Nieva, can study coding, AI and maths live online in English with Modern Age Coders. Secundaria pupils, university students and adults who read a little English benefit most: Python, Java, apps, data and AI with a mentor on a live call. Children aged six and over can start with blocks, usually in private lessons. Pick a group of fifteen to twenty or one to one, at hours you decide; the first class is free.

[Home](/) / [Courses](/courses) / [Coding and AI classes in Peru](/coding-and-ai-classes-in-peru) / Amazonas region

Amazonas, Peru · Live online, in English · Teenagers and adults first

# Online coding and AI classes in the Amazonas region of Peru

Peru's Amazonas runs from the cool valleys around Chachapoyas down to the warm rivers of Bagua, Imaza and Nieva, and its schools sit anywhere between about 170 and 4,000 metres above the sea. Our classes reach any of them in the same way: live, online and in English. This page gives the census picture, explains frankly where English and home computers make the classes hard, and turns the regional school register into a short lesson on sorting numbers into bands.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Most suited to: Secundaria students, university students and adults with some English; Young children: From six, often privately; Taught in: English, at a gentle pace; Formats: Fifteen to twenty together, or one; Timing: Set by the learner; To begin: A free class that checks English and equipment. Rated 4.9 across 547 Google reviews.

## Three courses Amazonas learners usually begin with

Two for older learners, where English-taught lessons fit most easily, and one gentle start for younger children.

- [Python for Teens](/courses/python-complete-masterclass-teens): For secundaria students from scratch. Clean, readable code whose keywords are everyday English words, so both skills move forward together.
- [Data Analysis](/courses/data-analysis-mastery-course-college): Aimed at undergraduates and working people: cleaning and summarising real tables in a spreadsheet, in SQL and in Python, just like the school register further down.
- [Scratch Programming](/courses/scratch-programming-complete-course): For children from about six. Drag-and-drop blocks mean little reading and no typing while English is still new.

## Can a learner in Amazonas manage classes taught in English?

Many teenagers and adults can, with a careful start. Young children from Spanish-only homes usually need private lessons. Every lesson is live, online and in English, never in Spanish, which is why we look at English and devices before anything else.

### What we know about English here

EF's 2025 English Proficiency Index gives Peru 519 (moderate) and scores fifteen of its regions separately. Amazonas is missing from that list, so we have no regional number to quote.

The regular secundaria timetable gives Inglés three weekly hours from first to fifth grade. A teenager in Bagua Grande or Chachapoyas has therefore had years of lessons, though confidence in speaking varies widely.

### Learners who tend to settle quickly

Teenagers who enjoy English and want to use it for something real. Students at the region's universities and institutes, who already read documentation and error messages in English. Adults whose work brings English messages or manuals.

A child of six to nine is welcome too. In a private lesson the mentor can repeat, point, demonstrate on the screen and wait, and a young learner can answer by building rather than by speaking.

Treat the free class as a test drive. The mentor gives a small task in plain English and sees how the learner gets on. If the language is a real barrier today, you will hear that directly, with an alternative such as private lessons or a later start. Parents who prefer to read in Spanish can open [our guide for Spanish-speaking families](/clases-de-programacion-para-ninos-online-peru), and teenagers can compare paths on [coding classes for teenagers in Peru](/coding-classes-for-teens-peru).

## How many people live in the Amazonas region of Peru?

INEI counted 467,688 people in the department of Amazonas in its 2025 census, across seven provinces. Utcubamba, with Bagua Grande, is the largest; Chachapoyas, the capital's province, is fourth.

**Amazonas province populations in the 2025 census**

| Province | Population, 2025 |
|---|---|
| Utcubamba | 114,927 |
| Bagua | 95,858 |
| Condorcanqui | 82,416 |
| Chachapoyas (capital: Chachapoyas) | 65,528 |
| Luya | 48,322 |
| Rodríguez de Mendoza | 33,854 |
| Bongará | 26,783 |
| Department of Amazonas | 467,688 |

INEI, Censos Nacionales 2025, demographic indicators file, Cuadro N° 1, which reports población total (people counted plus those estimated as missed) at 15 September 2025. All eight figures are published by INEI; the department total is not a sum we made.

### A small capital, high up

INEI's 2017 census counted 32,026 people in the city of Chachapoyas, and its directory of populated centres records the town at 2,483 metres. In 2025 the district of Chachapoyas had 40,953 people.

Those are a 2017 city figure and a 2025 district figure, measuring different areas in different years, so we show both and compare neither.

### The larger lowland districts

The biggest districts in 2025 were Bagua Grande with 55,619 people, Imaza with 45,503 and Nieva with 42,522. Bagua district had 28,597 and Cajaruro 24,194.

In 2017 the town of Bagua Grande counted 32,519 people and Bagua 24,224, as single populated centres. For a teenager in any of these places, a live lesson at home replaces a long trip to a city with a coding school.

## At what altitude are the schools in Amazonas?

The regional school register gives an altitude for every entry, from 174 to 4,050 metres. Sorting them into height bands looks like a five-minute job. Done carelessly, it quietly loses five rows, and the way it loses them is worth learning.

### The register

The Gobierno Regional Amazonas publishes "Instituciones Educativas Amazonas 2026" on datosabiertos.gob.pe under the Open Data Commons Attribution licence (ODC-By): free to reuse, including commercially, as long as the source is named. It was released on 24 August 2026 and modified on 27 August 2026.

Our copy, ie-amazonas-2026.csv, has 3,211 rows, one per school level or programme, with ten education offices, a level such as Primaria or Secundaria, coordinates and an altitude in metres. It also holds names and addresses, which this lesson never prints.

### The plan

Split the altitudes into four bands: below 500 metres, 500 to 1,500, 1,500 to 2,500, and 2,500 and up. Count the rows in each, and separately count the secundaria rows, because those are the pupils closest to our teenage courses.

A good program should be able to prove that it counted every row exactly once. That is the check most first attempts skip.

**Version 1: an if chain with strict comparisons** (Python)
```python
import csv

bands = {"below 500 m": 0, "500 to 1,500 m": 0, "1,500 to 2,500 m": 0, "2,500 m and up": 0}
with open("ie-amazonas-2026.csv", encoding="latin-1", newline="") as f:
    rows = list(csv.DictReader(f, delimiter=";"))

for row in rows:
    alt = int(row["Altitud"])
    if alt < 500:
        bands["below 500 m"] += 1
    elif 500 < alt < 1500:
        bands["500 to 1,500 m"] += 1
    elif 1500 < alt < 2500:
        bands["1,500 to 2,500 m"] += 1
    elif alt > 2500:
        bands["2,500 m and up"] += 1

print(bands)
print("Rows:", len(rows), "Counted:", sum(bands.values()))
```
It prints: {'below 500 m': 1133, '500 to 1,500 m': 897, '1,500 to 2,500 m': 965, '2,500 m and up': 211} and Rows: 3211 Counted: 3206.

Five rows vanished, and no error appeared. Look at the conditions: alt < 500, then 500 < alt < 1500. A school at exactly 500 metres is not less than 500, and it is not more than 500 either, so it falls through every branch and is never counted. The register has three rows at exactly 500 metres, one at 1,500 and one at 2,500. The bug is invisible unless the program compares its total with the number of rows, which Version 1 only does because we added that last line.

**Version 2: half-open bands with bisect, and an assert** (Python)
```python
import csv
from bisect import bisect_right

EDGES = [500, 1500, 2500]
NAMES = ["below 500 m", "500 to 1,500 m", "1,500 to 2,500 m", "2,500 m and up"]
counts = [0, 0, 0, 0]
secondary = [0, 0, 0, 0]

with open("ie-amazonas-2026.csv", encoding="latin-1", newline="") as f:
    rows = list(csv.DictReader(f, delimiter=";"))

for row in rows:
    band = bisect_right(EDGES, int(row["Altitud"]))
    counts[band] += 1
    if row["Nivel / Modalidad"] == "Secundaria":
        secondary[band] += 1

assert sum(counts) == len(rows), "a row fell between the bands"
for name, n, s in zip(NAMES, counts, secondary):
    print(name, n, "rows,", s, "secundaria")
```
It prints: below 500 m 1133 rows, 122 secundaria, 500 to 1,500 m 900 rows, 89 secundaria, 1,500 to 2,500 m 966 rows, 115 secundaria and 2,500 m and up 212 rows, 15 secundaria.

Version 2 describes the bands by their edges only, [500, 1500, 2500], and lets bisect_right find the band. It returns how many edges are less than or equal to the altitude, so 499 gives band 0, 500 gives band 1, and 4,050 gives band 3. Every band now includes its lower edge and excludes its upper one, which means each possible altitude has exactly one home. The assert line turns "I think I counted everything" into something the computer checks; if a future edit breaks it, the program stops with a message instead of printing a wrong table.

**Rows in the Amazonas school register by altitude band, 2026 file (our calculation)**

| Altitude band | All rows | Secundaria rows |
|---|---|---|
| Below 500 m | 1,133 | 122 |
| 500 m to under 1,500 m | 900 | 89 |
| 1,500 m to under 2,500 m | 966 | 115 |
| 2,500 m and above | 212 | 15 |
| All rows | 3,211 | 341 |

Data: Gobierno Regional Amazonas, Instituciones Educativas Amazonas 2026, ODC-By. Counts are ours. A row is one level or programme at one site, not a whole school, and altitudes come from several measuring methods named in the file's own "Fuente de coordenadas" column.

1. **Ages 6 to 8.** Draw three boxes labelled "short", "medium" and "tall", with a rule that a child exactly 120 cm tall goes in "medium". Where does each classmate go? Did anyone end up with no box?
2. **Ages 8 to 11, in Scratch.** Ask for a number and say which band it is in. Test it with 499, 500 and 501 before you trust it.
3. **Ages 11 to 13.** Rewrite Version 1 using <= so it counts all 3,211 rows, then explain why Version 2 needs no comparisons at all.
4. **Teenagers.** Add a fifth edge at 3,500 metres. How many rows move, and does the assert still pass?
5. **University and adults.** Group by the "Fuente de coordenadas" column. Do rows measured by GPS sit at different altitudes from rows located from a web map?

Edges cause trouble far beyond altitude: ages on a birthday, marks on a grade boundary, prices at a threshold. Writing bands as edges and checking the total is a habit that protects all of them, and it is the kind of reasoning our page on [thinking rather than copying](/learn-to-think-not-copy-coding-peru) argues for.

## Do schools in Amazonas teach programming?

Not as a separate subject. The region follows Peru's national curriculum, where technology appears inside every area instead of having its own timetable slot. The regional education office's 2026 news is about contests and fairs.

### National rules

Ley 28044 fixes six years of primaria and five of secundaria. MINEDU uses a child's age on 31 March to choose the grade, so six year olds start primaria and the normative age for fifth of secundaria is sixteen.

ICT is the CNEB's competency 28 and is transversal, shared by all areas. A regular secundaria week has 35 hours, with four of Matemática and three of Inglés, and no programming slot.

### The DRE Amazonas in 2026

On 1 September 2026 the Dirección Regional de Educación Amazonas announced that pupils who had qualified at UGEL level would sit the ONEM 2026 regional round on 3 September at nine venues, from Chachapoyas and Pomacochas to Santa María de Nieva and Puerto Galilea.

On 9 September 2026 it reported UGEL Chachapoyas running its stage of EUREKA 2026, the 36th national school science and technology fair, where pupils present research and technology projects.

MINEDU's Python pilot, Fábrica de Programadores, began in July 2025 with 1,000 secundaria pupils in Lima Norte; we found no sign of it in Amazonas. Across Peru, more than 1.7 million secundaria pupils took part in ONEM 2026, whose first round was held in schools on 8 July 2026, and UTEC's computing olympiads are free. We are not part of the DRE, MINEDU, UTEC or any contest, and our practice problems are our own.

## Do homes in Amazonas have computers and internet?

Fewer than a quarter had a computer in 2025, and fewer than half had an internet service, on INEI's household survey. Internet use, mostly by phone, has risen much faster.

**Amazonas and Peru: home computers and internet, ENAHO (per cent)**

| Indicator | Amazonas 2022 | Amazonas 2025 | Peru 2025 |
|---|---|---|---|
| Households with a computer | 23.0 | 23.7 | 33.9 |
| Households with internet access | 40.9 | 46.3 | 56.8 |
| Residents aged 6+ online | 53.9 | 68.1 | 81.1 |

INEI, Compendio Estadístico Perú 2026, tomo 1: cuadro 11.5 (computers), 11.6 (internet service) and 11.13 (internet use), all from ENAHO. We print decimal points where INEI uses commas.

### The trend in three years

Between 2022 and 2025 the share of Amazonas residents online rose from 53.9 to 68.1 per cent, and home internet from 40.9 to 46.3. Home computers barely moved, from 23.0 to 23.7.

So the gap that matters for programming is the keyboard, not the signal.

### Our advice

A tablet is fine for a young child dragging blocks. From about nine, when code is typed, a laptop or desktop is needed for most of each lesson.

Families often share one laptop between children on set days, and university students can use a faculty computer room. If there is no regular access to a computer, the free class is where we will say that waiting makes more sense.

## Which course suits a learner in Amazonas?

Look at age and English first, then at the computer. These suggestions and age ranges are ours.

**A first course for each kind of Amazonas learner (our suggestions)**

| Learner | English level | Start with | Format |
|---|---|---|---|
| Child, 6 to 8 | Just starting | Reasoning puzzles, then Scratch | Private |
| Child, 8 to 12 | From school lessons | Scratch first, Python and AI for kids after | Group or private |
| Early secundaria | Basic | Python for Teens | Group |
| Late secundaria | Reads well | Python, then Java or app building | Group |
| University student | Reads technical texts | Data analysis or Java | Group or private |
| Working adult | Any | Python from the beginning | Often private |

Our suggestions. Grades depend on age at 31 March, so pupils in one grade can be up to a year apart.

### Younger children

Short, visual lessons; each click on screen comes with its English word, said aloud.

### Teenagers

Real typed code from the first lesson, moving from Python to Java, apps or data.

### Adults

Programming and data skills for study or work, planned around the rest of life.

Undergraduates will find more on [our page for Peruvian university students](/coding-courses-for-university-students-peru), and our [Peru hub](/coding-and-ai-classes-in-peru) indexes every page in this series.

## When could a learner in Chachapoyas or Bagua have a class?

At an hour you choose. All of Amazonas keeps Peru time, and the mentor in India fits the lesson to it.

**Example conversions, Amazonas time to India time (illustrations only)**

| Amazonas | India | Mentor's time of day |
|---|---|---|
| 06:30 | 17:00 | Late afternoon |
| 09:30 | 20:00 | Evening |
| 12:00 | 22:30 | Late evening |
| 15:30 | 02:00 | Night |
| 17:30 | 04:00 | Early hours |
| 21:30 | 08:00 | Next morning |

Peru keeps UTC minus 5 hours year round (tz database zone America/Lima, no daylight saving since 1994); India keeps UTC plus 5 hours 30 minutes. India is therefore always 10 hours 30 minutes ahead.

Since no clocks change on either side, an hour set once stays the same all year. You book in your own time zone. Peru's 2026 school year started on 16 March 2026, and families often begin during the January to March holidays; adults start whenever suits them.

## How a learner in Amazonas moves up

Our own six stages, used for every age, so families can see what has been mastered and what comes next.

**Our stages, from first instructions to checked totals**

| Stage | Usual age | What the learner can do |
|---|---|---|
| 1. Instruct | 6 to 7 | Tell a character what to do, one step at a time |
| 2. Repeat | 7 to 9 | Use a loop instead of copying steps |
| 3. Decide | 8 to 10 | Choose between two actions with if |
| 4. Code | 9 to 12 | Write Python with variables, loops and lists |
| 5. Band | 11 to adult | Sort values into ranges without losing the edges |
| 6. Prove | 13 to adult | Check a result with an assert before reporting it |

### For families

The altitude project trains stages 5 and 6: putting numbers in ranges and proving nothing was dropped.
Every month you receive a note on what your child built.

### For learners

Test the edge, not just the middle.
If the total does not match, something is missing.

## Nine more courses for Amazonas learners

Grouped into children, teenagers and adults; each is a live course in English with a mentor who stays with the learner.

### Children

Ages 6 to 12

- [Reasoning for young thinkers](/courses/reasoning-and-readiness-course-for-young-thinkers): Patterns and logic for ages 6 to 9.
- [Coding for Kids](/courses/kids-coding-blocks-masterclass): Blocks to games and simple apps.
- [App making with blocks](/courses/block-coding-app-development-masterclass): Phone apps without typing.

### Teenagers

Ages 13 to 18

- [Java for teens](/courses/java-programming-masterclass-for-teens): Object-oriented programming, step by step.
- [App development for teens](/courses/complete-app-development-masterclass-for-teens): Real mobile apps with React Native.
- [AI and machine learning for teens](/courses/ai-ml-masterclass-teens): From Python to working models.

### University and adults

18 and over

- [Python masterclass](/courses/python-programming-masterclass-zero-to-advanced-college): Zero to confident, with projects.
- [MySQL](/courses/mysql-database-complete-masterclass-college): Database design and queries.
- [Data and AI for non-programmers](/courses/data-and-ai-analytics-for-non-programmers-course): Excel, Sheets and Power BI.

## What a week of online lessons looks like from Amazonas

Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.

- **Early start** A Chachapoyas morning is evening in India.
- **After school** Afternoon and evening lessons in Peru are possible too.
- **One learner** Recommended while English is still fragile.

- **Same mentor** One teacher who gets to know the learner.
- **Unhurried English** Short phrases, with key words typed on screen.
- **Learner drives** Students write, run and fix the code themselves.
- **Separate ages** Children, teens and adults have their own groups.
- **Plain updates** Parents hear honestly how it is going.
- **Group or private** Fifteen to twenty learners, or only one.

## Fees for learners in Amazonas

Fees are in US dollars and charged monthly to a card. Your bank works out the soles amount at its own exchange rate when it pays, so that figure may differ slightly between months.

- Free first class: Free. One free class. English and equipment check. No card required.
- Group batch: USD 100 a month. Fifteen to twenty learners near in age. A regular mentor. Live sessions each week. Monthly, stop any time.
- One to one: USD 150 a month. A learner on their own. Slower pace where English is new. Hours of your choosing.

## Online coding and AI classes in Amazonas, Peru: questions and answers

### Are the classes in Spanish?

No. Our lessons are live online sessions taught only in English. Mentors talk slowly and clearly, keep to the learner's own pace, get used to their accent, and when a child replies in Spanish they model the English words, but they never switch the class to Spanish.

### Is this the Amazonas in Peru or in Brazil?

Peru. This page is about the Peruvian department of Amazonas, whose capital is Chachapoyas, with Bagua Grande, Bagua and Nieva among its largest districts.

### Is there an English score for Amazonas?

EF's 2025 index scores Peru at 519 and lists fifteen regions; Amazonas is not one of them. We judge each learner individually in the free class instead.

### We live in Nieva, Imaza or Rodríguez de Mendoza. Can we join?

Yes. A learner anywhere in the region joins the same live lesson, provided the connection lasts the hour and there is a computer or, for young children, a tablet.

### Is a tablet enough?

A tablet suits a young child moving blocks around. Once a learner types real code, from roughly nine, we need a keyboard and a larger screen, since writing and fixing code fills most of the hour.

### What time are classes?

Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. The whole region sits 10 hours 30 minutes behind India in every season: 09:30 in Chachapoyas is 20:00 in India.

### Is programming taught in Amazonas schools?

Not as its own subject. The national curriculum asks every area to develop digital skills, and the regular secundaria week has no hours for programming.

### Do you teach AI to children?

Children learn what AI is through simple, safe projects, and nobody under 13 uses adult chatbot accounts with us. Teenagers and adults go further, building and testing small models.

### How is payment made?

A monthly card payment in US dollars; the conversion to soles is made by your bank. Someone visiting the site from India is shown rupees instead. You pay nothing for the first class.

### Do learners receive a certificate?

Where the course provides one, it is our own certificate of completion, listing the projects finished. MINEDU, the DRE and schools neither issue nor endorse it, and it does not count as a Peruvian qualification.

## Related pages for Amazonas families

- [Coding and AI classes in Peru](/coding-and-ai-classes-in-peru): Peru's overview page, linking every guide.
- [Coding classes for teens in Peru](/coding-classes-for-teens-peru): Choices for secundaria pupils.
- [Programación para niños, en español](/clases-de-programacion-para-ninos-online-peru): For Spanish-speaking parents.
- [Coding classes for adults](/coding-classes-for-adults): Learning to code as a grown-up.
- [AI tools age guide](/ai-tools-age-guide): Minimum ages for common AI tools.
- [How we teach](/how-we-teach): What happens in a lesson.

## More pages for Peru

Part of the guide: [Every Peru page](/coding-and-ai-classes-in-peru)

### Regions of Peru

- [Áncash region](/online-coding-and-ai-classes-ancash-region-peru)
- [Apurímac region](/online-coding-and-ai-classes-apurimac-region-peru)
- [Arequipa region](/online-coding-and-ai-classes-arequipa-region-peru)
- [Ayacucho region](/online-coding-and-ai-classes-ayacucho-region-peru)
- [Cajamarca region](/online-coding-and-ai-classes-cajamarca-region-peru)
- [Callao region](/online-coding-and-ai-classes-callao-region-peru)
- [Cusco region](/online-coding-and-ai-classes-cusco-region-peru)
- [Huancavelica region](/online-coding-and-ai-classes-huancavelica-region-peru)
- [Huánuco region](/online-coding-and-ai-classes-huanuco-region-peru)
- [Ica region](/online-coding-and-ai-classes-ica-region-peru)
- [Junín region](/online-coding-and-ai-classes-junin-region-peru)
- [La Libertad region](/online-coding-and-ai-classes-la-libertad-region-peru)
- [Lambayeque region](/online-coding-and-ai-classes-lambayeque-region-peru)
- [Lima provinces (Región Lima)](/online-coding-and-ai-classes-lima-provinces-peru)
- [Loreto region](/online-coding-and-ai-classes-loreto-region-peru)
- [Madre de Dios region](/online-coding-and-ai-classes-madre-de-dios-region-peru)
- [Moquegua region](/online-coding-and-ai-classes-moquegua-region-peru)
- [Pasco region](/online-coding-and-ai-classes-pasco-region-peru)
- [Piura region](/online-coding-and-ai-classes-piura-region-peru)
- [Puno region](/online-coding-and-ai-classes-puno-region-peru)
- [San Martín region](/online-coding-and-ai-classes-san-martin-region-peru)
- [Tacna region](/online-coding-and-ai-classes-tacna-region-peru)
- [Tumbes region](/online-coding-and-ai-classes-tumbes-region-peru)
- [Ucayali region](/online-coding-and-ai-classes-ucayali-region-peru)

More guides: [Coding and AI classes in Peru](/coding-and-ai-classes-in-peru), [En español: clases de programación en inglés](/clases-de-programacion-en-ingles-peru), [Start here: English-medium coding in Lima](/english-medium-coding-classes-lima), [By age and stage: AI and coding for professionals](/ai-and-coding-for-professionals-peru), [Subjects and courses: AI agents course](/ai-agents-course-peru), [Exams, olympiads and school holidays: IB computer science tutor](/ib-computer-science-tutor-peru), [Guides to choosing: An English-taught option to Crack The Code](/crack-the-code-alternative-in-english), [Cities: Arequipa: coding for every age](/coding-classes-in-arequipa-peru), [Lima and Callao districts: Programación para niños en Ancón](/clases-de-programacion-para-ninos-ancon-lima)

## Contact

Book the free first class at [https://learn.modernagecoders.com/online-coding-and-ai-classes-amazonas-region-peru](https://learn.modernagecoders.com/online-coding-and-ai-classes-amazonas-region-peru#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
