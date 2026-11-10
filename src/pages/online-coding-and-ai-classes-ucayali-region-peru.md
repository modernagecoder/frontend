---
title: "Ucayali Region, Peru: Online Coding and AI Classes in English"
description: "Live coding and AI classes online, in English, for Pucallpa and the Ucayali region: who they suit, census and device data, and a Python project on electricity use."
canonical: https://learn.modernagecoders.com/online-coding-and-ai-classes-ucayali-region-peru
source: src/pages/online-coding-and-ai-classes-ucayali-region-peru.html
---
> Yes, learners in the Ucayali region can take live online coding and AI classes in English with Modern Age Coders, from Pucallpa, Yarinacocha and Manantay to Aguaytía, Campoverde and Atalaya. Teenagers in secundaria, university students and working adults with some English gain most: Python, Java, websites, data and AI, with the mentor teaching in real time. Children from six can begin with blocks, usually privately. You choose a group of fifteen to twenty or one-to-one lessons, at hours that suit you, and the first class costs nothing.

[Home](/) / [Courses](/courses) / [Coding and AI classes in Peru](/coding-and-ai-classes-in-peru) / Ucayali region

Ucayali region · Live online, in English · Teenagers and adults first

# Online coding and AI classes in the Ucayali region

Most people in Ucayali live in and around Pucallpa, where the city stretches across Callería, Yarinacocha and Manantay, but the region also runs west along the highway to Aguaytía and south up the river to Atalaya and Sepahua. Our classes are taught live, on a screen, in English. Here is what the census and household survey say about the region, who our classes suit most, and a Python lesson built on the electricity company's own open data.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Fits best: Secundaria and university students, and working adults; Children: From six, often privately at the start; Teaching language: English, slow and clear; Class size: Fifteen to twenty, or just one; When: Whatever hour you choose; Try first: A free class with an English and laptop check. Rated 4.9 across 547 Google reviews.

## Three courses Ucayali learners often start with

Weighted towards older learners, because they meet the fewest barriers with English-taught classes, with one way in for younger children.

- [Python for Teens](/courses/python-complete-masterclass-teens): For secundaria students with no experience. Short, readable code and English keywords, so the programming and the English improve side by side.
- [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college): For university students and adults. A first script in week one, then files, data and small automations, at hours around work or study.
- [Coding for Kids](/courses/kids-coding-blocks-masterclass): For children from about six to twelve. Blocks first, games soon after, with a mentor who explains every move on screen.

## Will English-taught online classes work for learners in Ucayali?

For many teenagers and adults, yes. For young children from homes where only Spanish is spoken, it usually takes private lessons and patience. Every class is live, online and taught in English, never in Spanish.

### How strong is English here?

The 2025 edition of EF's English Proficiency Index lists Ucayali among Peru's regions with a score of 458, which EF places in its low band. The national figure is 519, in the moderate band.

A low band does not rule anyone out. It tells us that the typical learner here will need more listening time and simpler sentences at the start, and that is how our mentors begin.

### Learners who usually do well

Secundaria students who take school English seriously. Students at universities and institutes in Pucallpa, who meet English in manuals and software every week. People in jobs where they already read English messages or documents.

Children aged six to nine can still join, mostly one to one. The mentor speaks in short sentences, demonstrates on the shared screen, and lets the child answer by clicking and building as well as by speaking.

The free class doubles as a check. Our mentor gives a short task in easy English and notices where the learner hesitates. If the language is too much for now, we tell you and suggest private lessons, a later start or an easier first course. For a Spanish explanation of how classes for children work, see [our page for Spanish-speaking parents](/clases-de-programacion-para-ninos-online-peru); for older students, [learning coding and English together](/learn-coding-and-english-together-peru) describes how the two grow at once.

## How many people live in Ucayali, and where?

The 2025 census found 623,868 people in the department of Ucayali. Coronel Portillo, the province of Pucallpa, accounts for 470,664 of them.

**Population of Ucayali by province, 2025 census (INEI)**

| Province | Population |
|---|---|
| Coronel Portillo (capital: Pucallpa) | 470,664 |
| Padre Abad | 86,687 |
| Atalaya | 63,624 |
| Purús | 2,893 |
| Department of Ucayali | 623,868 |

INEI, Censos Nacionales 2025, Cuadro N° 1 of the demographic indicators file: población total on census day, 15 September 2025, using the limits in force in mid-July 2026. INEI publishes the department total itself; we did not add the provinces.

### Pucallpa: one city, three districts

INEI's 2017 census counted 326,040 people in the city of Pucallpa. The city covers three districts, which in 2025 had 166,780 people (Callería), 135,161 (Yarinacocha) and 107,016 (Manantay).

The 2017 directory of populated centres lists the parts separately too: Pucallpa itself 144,207, Puerto Callao 93,248 and San Fernando 85,540. We print each figure with its year and never combine them.

### Along the highway and up the river

West of Pucallpa, Campoverde had 23,894 people in 2025, Neshuya 13,301 and Padre Abad district, home of Aguaytía, 29,784. Aguaytía's main populated centre counted 15,587 in 2017.

To the south, Raimondi district, where the town of Atalaya stands, had 40,667 people in 2025, Tahuania 11,027 and Sepahua 9,970. Purús, the smallest province, is a single district of 2,893 people.

## Does the average electricity bill in Ucayali tell the whole story?

No, and a short program shows why. Electro Ucayali publishes how much energy each supply used in a month. The average is easy to compute; how unevenly the energy is shared takes one more idea.

### The file

Electro Ucayali S.A. publishes "Consumo de Energía Eléctrica de los clientes de Electro Ucayali SA" on datosabiertos.gob.pe, with one file per month since October 2022, under an Open Data Commons Attribution licence (ODC-By). The licence lets anyone reuse the data, commercially or not, provided Electro Ucayali is named.

We use April 2026, saved as eluc-2026-04.csv: 93,412 rows, one per supply, generated on 9 April 2026. The customer column holds an anonymised ID, which we never print, and a money column we leave alone.

### Two surprises before any maths

Not every row is in Ucayali. 406 supplies are in Puerto Inca, a province of Huánuco that the company also serves. A question about Ucayali has to filter them out.

The data dictionary calls the energy column CONSUMO_KWh, but the file itself calls it CONSUMO_KWATTS. Programs read the file, not the dictionary, so we use the name the file actually has.

**Version 1: the average of everything** (Python)
```python
import csv

with open("eluc-2026-04.csv", encoding="latin-1", newline="") as f:
    kwh = [float(r["CONSUMO_KWATTS"]) for r in csv.DictReader(f)]

print("Meters:", len(kwh))
print("Average kWh:", round(sum(kwh) / len(kwh), 1))
```
It prints: Meters: 93412 and Average kWh: 136.0.

This is correct arithmetic on the wrong rows. It mixes in the Huánuco supplies and every tariff, and it answers a question nobody asked. Even with the right rows, an average of about 136 kWh invites a picture of a typical supply using about 136. Version 2 tests that picture.

**Version 2: filter, sort, and measure the top tenth** (Python)
```python
import csv

kwh = []
with open("eluc-2026-04.csv", encoding="latin-1", newline="") as f:
    for r in csv.DictReader(f):
        if r["DEPARTAMENTO"] == "UCAYALI" and r["TARIFA"] == "BT5B":
            kwh.append(float(r["CONSUMO_KWATTS"]))

kwh.sort(reverse=True)
total = sum(kwh)
tenth = len(kwh) // 10
middle = kwh[len(kwh) // 2]

print("Supplies on BT5B in Ucayali:", len(kwh))
print("Average kWh:", round(total / len(kwh), 1))
print("Middle meter kWh:", middle)
print("Top tenth uses:", round(100 * sum(kwh[:tenth]) / total, 1), "%")
print("Meters reading zero:", kwh.count(0.0))
```
It prints: Supplies on BT5B in Ucayali: 92479, Average kWh: 136.3, Middle meter kWh: 86.0, Top tenth uses: 41.0 % and Meters reading zero: 6258.

Version 2 keeps only Ucayali rows on the BT5B tariff, which covers 92,885 of the 93,412 rows. It sorts from largest to smallest, so kwh[:tenth] is the busiest tenth, and len(kwh) // 10 uses whole-number division because a slice needs a whole number. The busiest tenth of supplies used 41.0 per cent of the energy. The middle supply in the sorted list used 86 kWh, well under the average of 136.3, because a small number of large users pulls the average up. And 6,258 supplies recorded zero that month, which could mean an empty house, a closed shop or a meter not read; the file does not say, so neither do we.

**BT5B supplies by province, April 2026 (our calculation)**

| Province | Supplies | Average kWh | Middle supply kWh | Top tenth's share |
|---|---|---|---|---|
| Coronel Portillo | 74,683 | 144.7 | 96.0 | 39.2% |
| Padre Abad | 14,793 | 84.8 | 43.0 | 49.0% |
| Atalaya | 2,659 | 192.0 | 99.0 | 48.1% |
| Purús | 344 | 85.7 | 39.0 | 49.6% |
| All four | 92,479 | 136.3 | 86.0 | 41.0% |

Data: Electro Ucayali S.A., Consumo de Energía Eléctrica de los clientes de Electro Ucayali SA, April 2026 file, ODC-By. Counts, averages, middle values and shares are ours, for rows with DEPARTAMENTO UCAYALI and TARIFA BT5B. The file does not explain the tariff codes, so we do not call these supplies homes.

1. **Ages 6 to 8.** Ten children share thirty sweets: one child has twelve, the rest have two each. What is the fair share? Does any child actually have it?
2. **Ages 8 to 11, in blocks.** Put ten numbers in a list, sort them, and add up the biggest one. What part of the total is that one number?
3. **Ages 11 to 13, first Python.** Change Version 2 to measure the top fifth instead of the top tenth. Predict whether the share goes up or down before you run it.
4. **Teenagers.** The company writes RAYMONDI and ALEXANDER VON HUMBOLT where INEI writes RAIMONDI and ALEXANDER VON HUMBOLDT. Build a small dictionary that maps one spelling to the other, then join supplies per district to the 2025 census.
5. **University and adults.** Repeat the analysis for every monthly file you download and plot the top tenth's share over time. Does it move with the seasons?

Students meet the same idea later in many places: a few large accounts, a few heavy users, a few big files. The skill is to sort, slice and say what share sits at the top before quoting an average. Our [data science page for Peru](/data-science-course-peru) follows that thread into proper statistics.

## Do Ucayali schools teach coding?

Not as a subject of its own. Ucayali uses the national curriculum, which spreads digital skills across every area rather than giving programming its own timetable slot.

### National rules that apply here

Primaria lasts six years and secundaria five under Peru's General Education Law (Ley 28044). A child's grade depends on their age on 31 March, so first grade begins at six and fifth of secundaria usually means sixteen.

The CNEB lists ICT as competency 28 and makes it transversal. In the regular secundaria week of 35 hours there are four of Matemática, three of Inglés and none labelled computing or programming.

### What the regional education office reports

In August 2023 the Dirección Regional de Educación de Ucayali launched its Proyecto Educativo Regional to 2034 at the Campo Ferial de Yarinacocha, with 4 strategic axes, 4 objectives and 16 actions.

The same month it reported pupils from Atalaya, Purús, Padre Abad and Coronel Portillo sitting the UGEL stage of a national maths contest run by MINEDU, Concytec and Aceros Arequipa, on 25 August 2023.

Python reached state schools in July 2025 through MINEDU's Fábrica de Programadores, but only for 1,000 pupils in Lima Norte in its first stage. Nationally, the ONEM maths olympiad's school round was held on 8 July 2026 and involved more than 1.7 million secundaria pupils, and UTEC's computing olympiads are free to enter. We are independent of the DRE, MINEDU, UTEC and these contests, and the exercises we set are our own.

## How many Ucayali homes have a computer or an internet connection?

About half of homes had an internet service in 2025, but only about one in five had a computer, on INEI's household survey. For programming, the computer is the harder of the two to find.

**Computers and internet in Ucayali and Peru, ENAHO (per cent)**

| Measure | Ucayali 2022 | Ucayali 2025 | Peru 2025 |
|---|---|---|---|
| Households owning a computer | 22.8 | 21.2 | 33.9 |
| Homes with internet service | 48.7 | 50.2 | 56.8 |
| People aged 6+ who use the internet | 62.2 | 75.4 | 81.1 |

Figures from INEI's Compendio Estadístico Perú 2026, volume 1, tables 11.5 (computers), 11.6 (internet service) and 11.13 (internet use), which report the national household survey (ENAHO) by department. Decimal commas converted to points.

### What changed between 2022 and 2025

The share of people online rose by more than thirteen points, to three in four. The share of homes with a computer fell slightly, from 22.8 to 21.2 per cent.

So many young people in Ucayali are online every day on a phone, and fewer have a keyboard at home than three years earlier.

### Making it work

A phone is enough to join a call; it is not enough to write programs, which means typing, running and correcting code for most of the lesson. From about nine years old, a laptop or desktop is what we ask for.

One laptop shared between brothers and sisters on different days works. So does a computer at a parent's workplace after hours, or a university lab. If none of these is possible, we will say so in the free class.

## What should a learner in Ucayali study first?

Match the course to the learner's age and English, then check the computer. The table is our guidance and our age ranges.

**Suggested first courses for Ucayali learners (ours)**

| Who | English now | Begin with | Usual format |
|---|---|---|---|
| Child, 6 to 9 | Beginning | Coding for Kids, blocks only | Private, parent close by |
| Child, 9 to 12 | A little, from school | Scratch, then Python and AI for kids | Group or private |
| 1° to 3° de secundaria | School level | Python for Teens | Group |
| 4° and 5° de secundaria | Reads with ease | Python, then Java or web development | Group |
| University or institute | Reads manuals | Python masterclass, data analysis or SQL | Group or private |
| Adult at work | Any, with patience | Python from zero | Often private |

Our guidance only. Peruvian grades are set by age at 31 March, so classmates may differ in age by almost a year.

### Under twelve

Building, dragging and testing on screen, with the same English phrases each week until they feel natural.

### Teenagers

Typed code from lesson one. Python leads on to Java, websites, data or the PCEP certificate.

### Adults

Practical programming and data work, fitted around shifts, lectures and family.

Students in Pucallpa's universities and institutes can read [coding courses for university students in Peru](/coding-courses-for-university-students-peru); every Peru page, including the Spanish ones, is listed on [coding and AI classes in Peru](/coding-and-ai-classes-in-peru).

## What is the time difference between Pucallpa and India for a class?

India is 10 hours 30 minutes ahead of Pucallpa every day of the year, and the lesson goes at the hour the learner picks.

**Example conversions, Pucallpa to India (not a timetable)**

| Pucallpa | India | For the mentor |
|---|---|---|
| 05:45 | 16:15 | Afternoon |
| 07:30 | 18:00 | Early evening |
| 11:00 | 21:30 | Night |
| 14:30 | 01:00 | After midnight |
| 18:00 | 04:30 | Before dawn |
| 20:00 | 06:30 | Morning |

tz database: Peru (America/Lima) at UTC minus 5 with no clock changes since 1994; India at UTC plus 5:30. Because neither side moves its clocks, these pairs hold in every month.

Book in your own clock and the hour stays put from January to December. The 2026 school year began on 16 March 2026; many Ucayali families use the January to March break to start, and adults simply begin when ready.

## How a learner in Ucayali progresses

Six stages we use for every age, so that a family can see what has been learned so far and what the next step is.

**Our stages, from first steps to measuring shares**

| Stage | Often at | The learner can |
|---|---|---|
| 1. Sequence | 6 to 7 | Give a sprite a short list of steps to follow |
| 2. Repeat | 7 to 9 | Loop a step instead of writing it again |
| 3. Remember | 8 to 10 | Keep a total in a variable |
| 4. Choose | 9 to 12 | Write Python with if, for and lists |
| 5. Filter | 11 to adult | Keep only the rows a question is really about |
| 6. Rank and share | 13 to adult | Sort, slice the top part and give its share of the total |

### For parents

Stages 5 and 6 are what the electricity project trains. Having done it, a learner will ask who is inside an average before trusting it.
Every month you hear what your child made and explained.

### For learners

Filter first, then count.
An average can sit where almost nobody is.

## Nine more options for Ucayali learners

In three age bands, all live in English with one regular mentor, in a group or individually.

### Children

Ages 6 to 12

- [Scratch](/courses/scratch-programming-complete-course): Stories and games from drag-and-drop blocks.
- [AI literacy for kids](/courses/ai-literacy-for-kids-course): What AI is and is not, ages 8 to 14.
- [Elementary maths](/courses/elementary-mathematics-complete-masterclass): Grades 1 to 5, explained step by step.

### Teenagers

Ages 13 to 18

- [Java for teens](/courses/java-programming-masterclass-for-teens): Objects and real programs from the first month.
- [Data science for teens](/courses/data-science-course-for-teens-python-data): Python, tables and first models.
- [Full stack for teens](/courses/full-stack-web-development-teens-masterclass): Front end and back end, built live.

### University and adults

18 and over

- [Data analysis](/courses/data-analysis-mastery-course-college): Excel, SQL and Python for reports.
- [MySQL](/courses/mysql-database-complete-masterclass-college): Design and query real databases.
- [Statistics](/courses/statistics-probability-maths-course): Averages, spread and shares done properly.

## How the live online classes work from Ucayali

Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.

- **Before school** Early Pucallpa mornings fall in the Indian afternoon.
- **Late in the day** Evening classes in Ucayali are also arranged.
- **Individual** Chosen when English needs extra care.

- **A familiar mentor** The learner sees the same face each week.
- **Clear speech** Simple English, with key words written on screen.
- **Learner at the keyboard** Students write and run their own programs.
- **No mixed ages** Children, teenagers and adults learn separately.
- **Frank feedback** Parents hear about progress and problems alike.
- **Group or solo** Fifteen to twenty learners, or one.

## Fees for learners in Ucayali

Every plan is priced in US dollars and charged to a card once a month. Your bank turns that into soles at its own rate on the day of payment, which is why the soles amount on a statement is not always identical.

- Free first class: Free. A first class at no cost. Checks of English and computer. No card details asked.
- Group batch: USD 100 a month. Fifteen to twenty learners of similar age. The same mentor throughout. Weekly live lessons. Monthly, cancel whenever.
- One to one: USD 150 a month. A private mentor. Extra time where English is new. Your own hours.

## Coding and AI classes in Ucayali: what families ask

### Are the classes in Spanish?

No. Lessons are live and online, and the teaching language is English only. Our mentors keep their speech calm and clear, follow the learner's speed and ear for accents, and when a student answers in Spanish they help turn the idea into English, while the lesson itself carries on in English.

### What does EF say about English in Ucayali?

The 2025 EF index scores the region at 458, which EF counts as low, while Peru overall reaches 519. In practice, many Ucayali learners need a slower first month, and the trial lesson tells us how slow.

### We are in Aguaytía, Campoverde or Atalaya. Can we join?

Yes. Nothing about the class depends on being in Pucallpa. A steady connection for the length of the lesson and a suitable device are all that matter.

### Is a phone enough?

To follow along, it is. To write programs, it is not, because coding means typing for most of the hour. Young beginners can use a tablet for blocks; once a learner moves to typed code, usually around nine or ten, we ask for a laptop or desktop.

### At what time are classes?

Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India runs 10 hours 30 minutes ahead of Pucallpa throughout the year, which makes 07:30 in Pucallpa 18:00 for the mentor.

### Do Ucayali schools teach programming?

There is no programming subject. Digital skills sit inside every area of the national curriculum, and none of the regular secundaria hours is set aside for code.

### Do university students in Pucallpa get much from this?

Usually a great deal. Engineering, business, agronomy and science students already meet English in software and manuals, so Python, SQL, Java or data analysis taught in English fits straight into their degree.

### Do you teach artificial intelligence?

Yes. Older students build small models, test them and learn where they fail. Younger children explore the ideas through games and simple projects, and nobody under 13 uses an adult chatbot account with us.

### How do payments work?

A card is charged once a month in US dollars, and the conversion to soles happens at your bank. Anyone browsing from India sees prices in rupees. There is no charge for the first class.

### Is there a certificate?

Where a course includes one, we issue our own certificate of completion. Neither MINEDU nor the regional government awards or recognises it, and it is not a Peruvian school or university qualification; it shows the work the learner completed.

## Other pages for learners in Ucayali

- [Coding and AI classes in Peru](/coding-and-ai-classes-in-peru): The national hub and its index of guides.
- [Learn coding and English together](/learn-coding-and-english-together-peru): How the two skills grow side by side.
- [Data science course, Peru](/data-science-course-peru): From tables to models.
- [Coding classes for adults](/coding-classes-for-adults): Starting later, without fuss.
- [AI tools age guide](/ai-tools-age-guide): Age limits for the main AI tools.
- [How we teach](/how-we-teach): Inside one live lesson.

## Contact

Book the free first class at [https://learn.modernagecoders.com/online-coding-and-ai-classes-ucayali-region-peru](https://learn.modernagecoders.com/online-coding-and-ai-classes-ucayali-region-peru#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
