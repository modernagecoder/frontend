---
title: "AI and Programming Classes in Inner South Canberra"
description: "Live online AI and programming classes for Canberra's Inner South, ages 6 to adult, with an anomaly-detection project on 455 ACT smart parking sensors."
canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-inner-south-canberra
source: src/pages/ai-and-programming-classes-in-inner-south-canberra.html
---
> That "unusual" depends on what you compare against. Learners flag parking sensors with low battery voltages in Griffith and Forrest. One rule for all sensors mostly flags overhead units, which simply run at different voltages. Separate rules for each sensor type flag a different set, including 22 underground sensors the single rule missed.

[Home](/) / [Australia](/coding-classes-in-australia) / [Australian Capital Territory](/coding-and-ai-classes-in-australian-capital-territory) / [Canberra](/vibe-coding-and-ai-agents-classes-in-canberra) / Inner South Canberra

Inner South (South Canberra district), ACT / Live online

# AI and programming classes in Canberra's Inner South

**What does the Inner South anomaly project teach?** That "unusual" depends on what you compare against. Learners flag parking sensors with low battery voltages in Griffith and Forrest. One rule for all sensors mostly flags overhead units, which simply run at different voltages. Separate rules for each sensor type flag a different set, including 22 underground sensors the single rule missed.

The Inner South runs from Yarralumla and Deakin across to Kingston, Griffith and Narrabundah. Nearly half its homes are flats or apartments. Around Griffith and Forrest, the ACT Government has fitted hundreds of smart parking sensors, and their battery readings are public.

Facts last verified 13 October 2026. Teaching is online; no Inner South Canberra branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 15 to 20 students per group.

## AI, statistics and Python

Courses that suit the anomaly project. A free trial lesson sets the level.

- [AI and ML Masterclass](/courses/ai-ml-masterclass-complete-college) (University and adult): Anomaly detection, thresholds and honest evaluation.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 13 to 17): Models and rules tested on real sensor data.
- [Statistics & Probability](/courses/statistics-probability-maths-course) (University and adult): Percentiles, spread and comparing groups.
- [Python and AI for Kids](/courses/python-ai-kids-masterclass) (Ages 8 to 12): First Python and AI ideas for children.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Apartments, home offices and professionals

The ABS calls this area South Canberra (SA3 80106). These are its 2021 Census QuickStats, read on 13 October 2026, with the bureau's 2025 estimate.

**Inner South counts**

| Measure | Value |
|---|---|
| Residents, 2021 Census | 31,592 |
| Estimated residents, 2025 | 34,483 |
| Median age | 40 |
| Families | 8,109 |
| Private dwellings | 15,903 |
| Bedrooms per dwelling | 2.7 |

**Inner South shares beside the ACT**

| Share | Inner South | ACT |
|---|---|---|
| Flat or apartment | 47.6% (6,309) | 19.4% |
| Managers among workers | 23.9% (4,269) | 17.9% |
| Worked at home | 13.8% (2,453) | 10.9% |
| Walked to work | 8.0% (1,419) | 4.0% |

### Apartment living

Flats and apartments made up 47.6% of dwellings, the highest share of the eight districts on our pages.

### Work

Managers were 23.9% of workers and professionals 41.8%, and one worker in seven worked from home on Census day.

### Two population figures

The 2021 count and the 2025 estimate come from different ABS methods and are shown side by side, never subtracted.

The Census ran during the pandemic, which probably inflated working from home that week. ABS figures are rounded and small counts nudged for privacy, so rows may not sum to totals; we keep the bureau's numbers as they are.

## Weak battery, or just a different sensor?

The ACT smart parking sensor list records 455 sensors, all in Griffith and Forrest, each with a type and a battery voltage. A maintenance team wants an alert for the weakest 10%. Learners compare one cut-off for every sensor with a separate cut-off for each type.

**Voltage by sensor type (ACT open data, read 13 October 2026)**

| Type | Sensors | Median | Range |
|---|---|---|---|
| Underground | 265 | 2.84 V | 2.00 to 3.61 V |
| Overhead | 190 | 3.61 V | 2.29 to 3.61 V |

**Who gets flagged (our calculation)**

| Rule | Cut-off | Flagged | Underground | Overhead |
|---|---|---|---|---|
| One rule for all | 2.58 V | 54 | 6 | 48 |
| Per type: underground | 2.74 V | 28 | 28 | none |
| Per type: overhead | 2.51 V | 22 | none | 22 |

### What one rule does

Overhead sensors have a split: 108 read exactly 3.61 V and the other 82 sit between 2.29 and 2.81 V. A single cut-off lands in that lower cluster, so it flags overhead units almost exclusively.

### What per-type rules do

Judged against their own kind, 28 underground sensors are in their weakest tenth. Only 6 of them were flagged by the single rule; 22 were missed.

### Overlap

The two approaches agree on 28 sensors. Twenty-six are flagged only by the single rule and 22 only by the per-type rules.

### What we cannot claim

There is no record of which sensors actually failed, so neither rule can be scored for accuracy. And 453 of the 455 records were last edited in October 2019, so these voltages are an old snapshot. The lesson is about choosing the comparison group, and about saying plainly when a model cannot be checked.

Readings come from the ACTGOV Smart Parking Sensor Assets list on data.act.gov.au, CC BY 4.0, read on 13 October 2026. Parsing the voltage text, the percentiles and every flag count are our own Python calculation.

## Group first, then threshold

The fix is a groupby before the percentile, so each sensor is compared with its own kind.

**Lesson steps**

| Step | Learner task |
|---|---|
| 1 | Parse "2.81V BATTERY VOLTAGE" strings into numbers and check none are missing. |
| 2 | Plot voltages by sensor type and describe the two shapes. |
| 3 | Flag the lowest 10% overall, then the lowest 10% within each type. |
| 4 | Compare the flagged sets and write what would be needed to say which is right. |

Step 4 is the AI lesson. A threshold rule is a tiny model, and like any model it needs ground truth to evaluate. Learners list what that would take: dates of battery replacements or sensor faults. Until then, the honest output is two candidate lists and a clear note about why they differ.

### Younger learners

Decide who is "tall" in a class of mixed ages, first all together, then age by age.

### Teenagers

Code both rules in Python, chart the flags and explain the overlap.

### Adults

Set alert thresholds per device type, store or region instead of one global number.

## Exotic avenues, barbecues and 2027 dates

More Inner South facts from territory open data.

### Exotic trees

Of 62,663 public tree records in Inner South suburbs, 37,533 are labelled exotic, about twice the 18,756 native.

### Barbecues

The ACT barbecue list places 32 barbecues in the district, and 79 artworks are recorded too.

### Term 4, 2027

ACT Term 4 runs from Tuesday 12 October to Friday 17 December 2027.

**District used** We use the ABS South Canberra area of about 44.4 square kilometres; 12 named suburbs fall inside it by our outline test, including Acton and Parkes.

## From "who is tall" to anomaly detection

Ages are only a starting guide.

- **Ages 6 to 9: Comparing fairly** Block-code games about sorting into groups. [Scratch Coding for Kids](/courses/scratch-programming-complete-course), [AI Literacy for Kids (Ages 8 to 14)](/courses/ai-literacy-for-kids-course)
- **Ages 8 to 12: First data** Python lists, averages and simple charts. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [Maths Through Coding](/courses/maths-through-coding)
- **Ages 13 to 17: Machine learning** Rules, models and how to evaluate them. [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens), [Data Science for Teens](/courses/data-science-course-for-teens-python-data)
- **University and adult: Applied AI** Monitoring and alerting with real data. [AI and ML Masterclass](/courses/ai-ml-masterclass-complete-college), [Statistics & Probability](/courses/statistics-probability-maths-course)

## Can an AI tool find the anomalies for us?

It can find something. Whether that is the right something is a human question.

An anomaly detector run on all 455 sensors would happily report the overhead units as odd, because they are different, not because they are failing.

An Inner South learner who has split the data by type, and admitted there are no failure labels, knows what to ask before trusting any alert.

In our AI classes, every alarm comes with its comparison group. The longer argument is in [is learning to code still worth it](/blog/is-coding-worth-learning-2026).

## Online lessons for the Inner South

Every lesson is live over video, so learners join from home whether in Kingston or Red Hill.

- **Real teacher** Lessons are taught live, with work checked as it happens.
- **Term-time** Classes follow ACT terms and pause in school holidays.
- **Free trial** One free lesson, then a written plan.
- **Groups** Level groups of fifteen to twenty, or private lessons.
- **Two weekly** Around eight lessons each month.
- **India time** In July a 5:30pm Inner South lesson starts at 1pm in India.

**Seasonal clocks** Canberra follows Sydney in the IANA time zone database, so daylight saving shifts lesson times by an hour against India each October and April.

## Inner South fees

Every learner pays the same fees.

- First class: USD 0. The trial lesson is free and includes a plan.
- Group tuition: USD 100 a month. Groups: about eight lessons a month, fifteen to twenty learners.
- Private tuition: USD 150 a month. One-to-one: about eight lessons a month with a dedicated teacher.

We bill in US dollars, starting only when the trial has fixed the course and a weekly slot. Holiday and missed-lesson details live on the pricing page.

## Inner South AI and programming questions

### How many people live in the Inner South?

The 2021 Census counted 31,592 people in the South Canberra area, median age 40. The ABS estimate for 2025 is 34,483.

### What is an anomaly threshold?

A cut-off that marks readings as unusual, such as the lowest 10% of battery voltages.

### Why use a different threshold for each sensor type?

Because the two types run at different normal voltages, so one cut-off mostly flags the type that is simply different.

### Which rule is correct?

We cannot say. There are no records of sensor failures, and the readings date mostly from October 2019.

### Is this suitable for children?

Younger learners explore the idea with height and age games; the coded project suits teenagers and adults.

### Where are the smart parking sensors?

All 455 in the ACT list are in Griffith and Forrest: 242 in Forrest and 213 in Griffith.

### Do you have a centre in the Inner South?

No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.

### What do Inner South classes cost?

The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.

### How are groups formed?

By level and pace, fifteen to twenty per group, not by age or suburb. One-to-one lessons suit anyone no group time fits.

### Can adults study AI here?

Yes. Adults learn in their own groups or privately, often applying monitoring ideas at work.

## Continue reading

Families south of the lake can also see the [Canberra page](/vibe-coding-and-ai-agents-classes-in-canberra), the [ACT guide](/coding-and-ai-classes-in-australian-capital-territory) and [AI classes for teenagers](/ai-classes-for-teens-australia).

## Contact

Book the free class on [https://learn.modernagecoders.com/ai-and-programming-classes-in-inner-south-canberra](https://learn.modernagecoders.com/ai-and-programming-classes-in-inner-south-canberra#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
