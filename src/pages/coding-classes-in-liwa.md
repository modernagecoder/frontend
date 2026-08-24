---
title: "Coding Classes in Liwa | Modern Age Coders"
description: "Live online coding, Python and AI classes for Liwa learners aged 6 to 67, with a real data-attribution project, transparent USD fees and a free first class."
canonical: https://learn.modernagecoders.com/coding-classes-in-liwa
source: src/pages/coding-classes-in-liwa.html
---
> Live online coding, Python and AI classes for Liwa learners aged 6 to 67, with a real data-attribution project, transparent USD fees and a free first class.

Skip to contentCourse picks

## Read a name, find a place, keep them separate

Four routes from labelling things on a map to designing records where the label and the location cannot contradict each other.

[![Microsoft Office for Kids course thumbnail](/images/microsoft-office-kids.webp)Ages 8 to 13Microsoft Office for KidsA column for the name and a column for the place.See the syllabus](/courses/microsoft-office-kids-mastery)[![Maths Through Coding course thumbnail](/images/maths-through-coding.webp)Ages 9 to 14Maths Through CodingCoordinates say where; a name only says what.See the syllabus](/courses/maths-through-coding)[![MySQL for Teens course thumbnail](/images/mysql-teens.webp)Ages 14 to 18MySQL for TeensJoin on a key, never on a name.See the syllabus](/courses/mysql-mastery-for-teens)[![Python AI Automation course thumbnail](/images/python-automation-ai-college.webp)College and adultPython AI AutomationStop a pipeline guessing where things are.See the syllabus](/courses/python-ai-automation-masterclass-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex and Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex and Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Liwa today

## The wilayat that hosts a port with the neighbour's name on it

Liwa is an unusually clean example of something that happens everywhere: the label on a thing and the location of a thing are two different facts.

### A port that is not where its name says

SOHAR Port and Freezone is a deep sea port and adjacent free zone located in Liwa, in Al Batinah North, despite the name suggesting otherwise. That sentence appears in the published description, which means the discrepancy is documented rather than disputed.

### A million tonnes a week

The port handles over one million tonnes of sea cargo each week and around 3,500 ships a year. Attribute that to the wrong wilayat and you have not made a small error, you have moved the largest economic fact in the governorate across a boundary.

### Fifty one villages and a mangrove coast

The wilayat spreads over 51 villages, and from the towers of Liwa Fort a visitor can see many of them, including the coastal village of Harmul and its well known mangrove trees. Those are places with their own names and their own records.

Where something is cannot be inferred from what it is called

Names are chosen by people for reasons that include history, marketing and convenience, and none of those reasons is obliged to match a map. A field holding a location has to be filled from a source that knows about locations, not from a string that happens to contain a place name.

Verified local facts

## Liwa detail with a trail behind it

Named, counted and located, with the scope of each claim stated.

### North of Sohar, facing east

Liwa lies north of Sohar and overlooks the Gulf of Oman to its east. Its position relative to its neighbour is exactly why the port's name is confusing and exactly why the confusion matters to anybody aggregating by wilayat.

### A fort with a view over the villages

Liwa Fort is a historic landmark from whose towers many of the wilayat's villages are visible. A vantage point that lets you see the thing you are recording is a luxury most datasets do not get.

### Mangroves on the coast

Harmul is a coastal village known for its mangrove trees. Mangrove records, port records and village records describe the same coastline on three different timescales and should never be pooled without saying so.

### Fifty one villages

The wilayat is distributed over 51 villages. Every one of them is a separate row in any honest dataset, and every one of them is easier to attribute correctly than the single largest facility in the wilayat.

### One of six coastal wilayats

Liwa sits alongside Sohar, Saham, Al Khaburah, As Suwaiq and Shinas on the Al Batinah North coast. Six neighbours means six chances for a record to be filed one boundary out.

### An area figure this page does not use

Two published sources give 925 square kilometres for Liwa and the same 925 for Al Amarat in Muscat. Those cannot both be right as stated, so this page states neither and points to Oman's National Centre for Statistics and Information instead.

No organisation above has any connection to Modern Age Coders and none is claimed. They are named because the port's own published description contains the discrepancy this page is about, which makes it checkable rather than anecdotal.

Signature project

## Two rows in five, and a whole wilayat's tonnage moves

The pipeline is three lines long and looks entirely sensible. It is also the reason a wilayat can disappear from a report.

### 1. Take five records with real names

The port, the fort, a coastal village, and two things that genuinely are in Sohar. Each has a name and each belongs to a wilayat, and the two facts are recorded separately because they are separate.

### 2. Guess the wilayat from the name

A function looks for a wilayat name inside each record's name. It gets Sohar Fort and Sohar Souq right, gets Liwa Fort right, and gets SOHAR Port and Harmul village wrong: two of five, forty per cent.

### 3. Add up the tonnage and watch it move

Because the port is the only record carrying weight, the guess credits its full million tonnes a week to Sohar and leaves Liwa at zero. The true figures are exactly the other way round. Nothing errors, nothing warns, and both totals look plausible.

| Record | Wilayat guessed from the name | Wilayat it is in | Agrees? |
| --- | --- | --- | --- |
| SOHAR Port and Freezone | Sohar | Liwa | No, and it carries all the weight |
| Liwa Fort | Liwa | Liwa | Yes, by luck of the name |
| Harmul village | unknown | Liwa | No, the name contains no wilayat |
| Sohar Fort | Sohar | Sohar | Yes |
| Sohar Souq | Sohar | Sohar | Yes |

### A million tonnes a week, filed one boundary out

Run before this was written. The name-based guess credits Sohar with a million tonnes a week and Liwa with none; the truth is the reverse. Two errors in five rows is bad enough. The damage is that both errors landed on the row that mattered, which is what happens when the exception to a naming convention is also the largest thing in the dataset.

Reliable pipeline

## Give a record a place, do not let it infer one

Every rule below is about refusing to derive a fact you were never given.

| Stage | Rule | What it prevents | What you get |
| --- | --- | --- | --- |
| Capture | Ask for the location, separately from the name | A field filled by pattern matching | A fact somebody asserted |
| Key | Join on an identifier, never on a display name | A rename breaking every join | Links that survive a rebrand |
| Refuse | Return unknown rather than a best guess | A wrong answer dressed as a right one | A gap somebody can fill |
| Audit | List the records whose name and location disagree | Exceptions hiding among the compliant | A short list worth reading |
| Total | Report how many rows were attributed by guess | A total nobody can qualify | A figure with its confidence attached |

### For younger learners

Cards with a name on one side and a place on the other, shuffled so the two do not always match. Children sort by name, then turn the cards over, and find the pile is wrong. No code, and the point lands completely.

### For teenagers

Python implements the guessing function, measures how often it is wrong on the five records, and then replaces it with a lookup table. The learner writes the audit that lists disagreements rather than resolving them silently.

### For adults

Location becomes a foreign key rather than a parsed string, imports refuse rather than guess, and any total built on inferred attribution is reported with the count of inferences underneath it.

The port's location in Liwa, its throughput, the village count, the fort and Harmul's mangroves are published facts. The five record table is a teaching set built from them, and the page says so. The failure mode is a property of inferring attributes from names, which happens in every dataset that has ever had a name column in it.

Learning ladder

## From sorting cards to a foreign key

The free class works out which rung the learner should start on.

Ages 6 to 10

### A name and a place are two things

Sorting by one and checking against the other.

[Elementary Mathematics](/courses/elementary-mathematics-complete-masterclass)[Kids Coding Blocks](/courses/kids-coding-blocks-masterclass)Ages 11 to 13

### Lookups instead of guesses

Learners build a small table rather than pattern matching a string.

[Maths Through Coding](/courses/maths-through-coding)[Python and AI for Kids](/courses/python-ai-kids-masterclass)Ages 14 to 18

### Measure how wrong the guess is

Teenagers quantify the error and write the audit list.

[Python for Teens](/courses/python-complete-masterclass-teens)[JavaScript for Teens](/courses/javascript-course-for-teens-beginners-interactive-web)Ages 18 to 67

### Make it a key, not a string

Adults model location as a relationship and refuse to infer it.

[MySQL Database](/courses/mysql-database-complete-masterclass-college)[Data Analysis](/courses/data-analysis-mastery-course-college)Delivery

## Live classes across fifty one villages and a working port

A wilayat with a deep sea port and fifty one villages has both shift workers and school families, and the format is agreed before anybody pays.

### Shift work and school terms in one wilayat

A port running around the clock and 51 villages on a school calendar are two very different weekly patterns. A recurring slot is agreed against the learner's actual week rather than a standard one.

### Free before anything is committed

The placement lesson carries a real task and a real recommendation. No card is asked for, and no course is confirmed until a family has seen how a lesson runs.

### Groups of five to eight

Grouped on level and objective. A logistics clerk and a seventeen year old who both need the same data skill belong in the same room, whatever the age gap.

### One to one for a specific goal

One teacher and one learner where there is an examination or a single problem at work with a deadline on it.

### Eight live lessons a month

Two a week at a recurring agreed time, settled once rather than moved around every rotation.

### Timed to Oman and to the rota

Oman runs one and a half hours behind India. Port shifts, school terms, examination periods and Ramadan routines belong in the conversation before a slot is fixed.

The exception nobody thinks to look for

A learner whose function gets three records out of five right has evidence it works, and no recording will contradict them. What changes that is a teacher putting the port row in front of them and asking which wilayat it is in, and then waiting while they go and check rather than answering.

Fees

## One free class, then group or private tuition

Pricing is in USD and is confirmed with the selected format.

First class**USD 0**

Ability task, goal review and starting recommendation.

Group tuition**USD 100**

Per month, normally eight lessons, five to eight learners.

Private tuition**USD 150**

Per month, normally eight lessons, one student and one teacher.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20want%20a%20free%20coding%20class%20for%20a%20learner%20in%20Liwa.)Reviews

## What families and learners say

Rated 4.9 across 547 Google reviews. These are real reviews, reproduced as written.

★★★★★

"The one step solution for my son. Modern Age Coders make learning coding so simple that kids love it. The teachers explain complex concepts clearly with practical exercises and interactive content."

Ria Mukherjee

Parent

★★★★★

"Modern Age Coders has been a game-changer for me. I struggled to grasp IT concepts and coding before joining, but their classes transformed everything. I can now confidently write complex programs with ease."

Samriddha Mondal

Student

★★★★★

"One of the most wonderful education centres out there. Education is not limited to school syllabus but focuses on skill development."

Vansh Agarwal

Student

★★★★★

"My child Dhairya is really enjoying the Modern Age Coders classes. This is his first online class and he eagerly looks forward to it. I can already see his improvement, and the teachers are very cooperative."

Sonam Oswal

Parent of Dhairya

★★★★★

"Modern Age Coders have wonderful teachers who teach in a clear, easy and practical way. The teacher boosts students' confidence and inspires them to learn without hesitation."

Sonu Goyal

Parent

★★★★★

"I highly recommend this computer coding class! The teachers are incredibly knowledgeable and passionate about coding."

Ritu Kedia

Parent

Free placement class

## Tell us the learner's level and the records they need to trust

The first task might be a pile of cards, a guessing function measured against the truth, or a real file where the learner suspects something is filed wrongly.

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [contact@modernagecoders.com](mailto:contact@modernagecoders.com). This is Modern Age Coders' actual contact and not an invented Liwa number.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20want%20a%20free%20coding%20class%20for%20a%20learner%20in%20Liwa.)

Submitted details are used for placement and follow-up.

FAQ

## Liwa coding class questions

Local facts, project method and service terms, kept apart.

### Is SOHAR Port really in Liwa?

Yes, and it is documented rather than disputed: the port's own published description says it is located in Liwa, Al Batinah North, despite the name suggesting otherwise. That is what makes it such a good teaching case. The discrepancy is not a mistake somebody made, it is a naming decision, and software has no way to know that.

### Why does this matter more than a normal data error?

Because the exception landed on the largest row. The port handles over a million tonnes a week, so attributing it by name moves the whole of one wilayat's tonnage to its neighbour and leaves the real one at zero. Both totals still look plausible, which is why nobody checks them.

### Is there a Modern Age Coders centre in Liwa?

No. No premises are claimed in Liwa or anywhere in Al Batinah North. Classes are live online and need a laptop or desktop, working audio, a current browser and a stable connection. The page describes where the service reaches, not a building.

### Why does the page not give Liwa's area?

Because two published sources give 925 square kilometres for Liwa and the same figure for Al Amarat in Muscat, and those cannot both be right as stated. Rather than pick one and hope, the page states neither and names the National Centre for Statistics and Information as the authority. That is the same rule the project itself teaches.

### Can an adult working at the port enrol?

Yes, up to 67. Adults take Python, databases, data analysis and automation. A real manifest or a real attribution problem is the best exercise available, provided the data is public or the learner is authorised to use it, and shipment or customer records must never be uploaded into a class.

### What does a learner have at the end?

A guessing function with its error rate measured, a lookup that replaces it, and an audit that lists every record whose name and location disagree. That audit is the piece that keeps working after the learner has moved on to a different dataset.

### How much do Liwa coding classes cost?

The first class is free. Standard group tuition is USD 100 per month for two live lessons each week, normally eight lessons monthly. Standard private tuition is USD 150 per month for one learner with one teacher on the same usual frequency. Course, format, recurring time and availability are confirmed before payment.

### What is the class size for Liwa learners?

A group normally contains five to eight compatible learners. Compatibility includes current level, learning pace and objective, not age alone. Private tuition is one learner with one teacher. If no suitable group is ready, a learner can discuss private tuition or wait for an appropriate cohort.

### How are Liwa class times arranged?

Oman is one and a half hours behind India. The teacher and learner agree a recurring time before payment, generally for two live lessons each week. Friday and Saturday options may be discussed subject to availability. School, work and transport schedules, examinations and Ramadan routines should be mentioned before confirmation.

### What happens in the free Liwa class?

The teacher establishes what the learner wants to be able to do and sets one task at that level. A child sorts cards by name and checks the other side, a teenager measures a guessing function against the truth, and an adult brings a real file and is asked how its location column was filled in. The teacher then recommends a course, a format and a time, and states the USD fee. That class is free.

Explore Oman

## The neighbour whose name is on the port, and one further south

The [Oman coding hub](/coding-classes-in-oman) covers national delivery and fees. Read [Sohar](/coding-classes-in-sohar), whose name the port carries, for keeping a unit attached to every number, and [Shinas](/coding-classes-in-shinas) for why an Arabic name needs twice the room.

Book the free class[Close with WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20want%20a%20free%20coding%20class%20for%20a%20learner%20in%20Liwa.)Free Liwa class[Call +91 91233 66161](tel:+919123366161)

## Keep exploring Modern Age Coders

### Coding classes in nearby places

- [Coding Classes in Madinat Al Irfan](/coding-classes-in-madinat-al-irfan)
- [Coding Classes in Khasab](/coding-classes-in-khasab)
- [Coding Classes in Madinat Al Sultan Qaboos](/coding-classes-in-madinat-al-sultan-qaboos)
- [Coding Classes in Izki](/coding-classes-in-izki)
- [Coding Classes in Mahdah](/coding-classes-in-mahdah)
- [Coding Classes in Ibri](/coding-classes-in-ibri)
- [Coding Classes in Wadi Al Maawil](/coding-classes-in-wadi-al-maawil)
- [Coding Classes in Shalim](/coding-classes-in-shalim)
- [Coding Classes in Samail](/coding-classes-in-samail)

### Learn more

- [Data Science for Teens: Python & Your First ML Models](/courses/data-science-course-for-teens-python-data)
- [Python for 10 Year Olds: Real Python Programs, Turtle Art & Mini Games](/python-for-10-year-olds)

### Free resources

- [Python Tutorial for Beginners: Complete Guide](/resources/python)
- [Functions - Regular, Arrow, and Callback | JavaScript Tutorial](/resources/javascript/functions-in-javascript)
- [Pattern Printing in Python](/resources/python/pattern-printing)
- [Project: Build an Interactive Quiz App](/resources/javascript/project-interactive-quiz-app)

### From the blog

- [AP CSP vs AP CSA: Which Should You Take First?](/blog/ap-csp-vs-ap-csa-which-to-take-first)
- [Python vs JavaScript: Which Should You Learn First?](/blog/python-vs-javascript-which-to-learn-first)
- [Learn Python for Beginners: Complete Step-by-Step Guide (2026)](/blog/python-for-beginners)

### Start here

- [Modern Age Coders pricing, one honest price per plan](/pricing)
- [How Modern Age Coders teaches, small batches and real projects](/how-we-teach)

---

*Canonical: https://learn.modernagecoders.com/coding-classes-in-liwa*
