---
title: "Coding Classes in Sohar | Modern Age Coders"
description: "Live online coding and mathematics in Sohar for ages 6 to 67, with port and university evidence, clear USD fees, a mixed-unit data project and a free class."
canonical: "https://learn.modernagecoders.com/coding-classes-in-sohar"
last_verified: "2026-08-16"
---

# Coding classes in Sohar that keep every number attached to its unit

> Sohar is simultaneously a governorate centre, port city, university city and historic settlement. Online coding, AI and mathematics lessons are taught live by Modern Age Coders for ages 6 through 67. A free first task establishes placement. Groups of five to eight are USD 100 monthly; one-to-one study is USD 150.

Sohar is a port city, a university city, a historic settlement and the administrative centre of North Al Batinah. Those roles make it a strong setting for practical data education, but they also create a common error: a spreadsheet column can contain several kinds of logistics quantity that look addable only because the software stores them all as numbers.

Modern Age Coders teaches Sohar learners live online. It does not claim a local office, branch or classroom. A learner joins from a laptop or desktop and works synchronously with a teacher through explanation, coding, screen sharing and review.

Facts were last verified on 16 August 2026.

## Sohar is North Al Batinah's regional centre

The [official North Al Batinah government portal](https://gov.om/en/al-batinah-north-governorate) places the governorate administration in Sohar and lists six wilayats: Sohar, Shinas, Liwa, Saham, Al Khabourah and As Suwayq. The 2026 NCSI statistical yearbook describes Sohar as the regional centre for the northern part of Al Batinah North and names construction, industry, trade, agriculture and copper mining in its city summary.

[Asyad's official Sohar Port profile](https://www.asyad.om/who-we-are/Address-directory/sohar-port) says the port began operating in 2004 outside the Strait of Hormuz. It describes a 21 million square metre deep-sea hub with logistics, petrochemicals and metals clusters, later joined by a food cluster that includes Oman's first terminal dedicated to agricultural bulk.

Asyad says the port hosts more than 3,000 vessel calls each year with gross registered tonnage around 85 million. It describes Sohar Industrial Port Company as a 50:50 joint venture between Asyad and the Port of Rotterdam. The profile identifies different terminal operators for general cargo, liquid bulk and containers and says the SOHAR Navigate platform covers hinterland connections and a network of 550 ports.

The [official Hutchison Ports Sohar page](https://www.asyad.om/what-we-do/ports-free-zones-thank-you/hutchinson-sohar) says the container terminal has annual capacity of two million TEU. It also states an 18-metre draft and thirteen cranes. TEU is a standardized measure of container capacity. It is not a tonne of cargo.

These details are exact enough to teach an important habit: every number needs a measure, a unit, a time period and a source.

## Sohar's higher-education context

The Ministry of Higher Education's [Study in Oman directory](https://studyinoman.moheri.gov.om/en-us/Colleges-Universities/HEI-Details?heiparam=Tg3R3dzL5d8qh2W0SyphdQ%3D%3D) says Sohar University received official accreditation in 2001 as Oman's first private university. The directory places it in Sohar and lists Oman Authority for Academic Accreditation and Quality Assurance of Education accreditation.

The university's [Faculty of Computing and IT page](https://www.su.edu.om/faculty-of-computing-and-it/) lists undergraduate programmes in Business and Information Technology, Computing and Web Engineering, Computing and Multimedia, Network and Database, Software Engineering, Cybersecurity and Artificial Intelligence. It also lists a Master of Computer Science, Master of Information Technology by Research and PhD in Computer Science.

The [official programme explorer](https://www.su.edu.om/explore-programs/) separately lists engineering routes including Chemical, Civil, Electrical and Computer, and Mechanical and Mechatronic Engineering. This breadth supports several possible Modern Age Coders starting points, but it does not imply a partnership or shared teaching. Sohar University and Modern Age Coders are independent.

## Sohar Fort adds a different kind of evidence problem

The [National Museum's architectural heritage collection](https://www.nm.gov.om/en/collection/gift/architectural-heritage) does not force Sohar Fort into one convenient origin story. It records conflicting historical accounts, including early Islamic dates, an eighth-century attribution and a later Hormuzi attribution. It documents Portuguese renovation in 1618 and 1621 and later restoration.

That source is useful for data literacy because uncertainty is part of the record. A learner should not choose one date, remove the qualification and present it as settled merely because a single value makes a dashboard easier to build.

For national availability and pricing, use the [Oman coding hub](https://learn.modernagecoders.com/coding-classes-in-oman).

## The Sohar mixed-units project

The signature project uses a synthetic port-style manifest with three cargo classes. Dry bulk rows store quantities in tonnes. Container rows store TEU. Liquid bulk rows store cubic metres. The categories are recognisable in Sohar's port context, but the practice records are generated for teaching and are not operational, confidential or customer data.

A naive script groups every row by month and calls `sum()` on the amount column. The output looks clean. It may even increase or decrease plausibly from one month to the next. But the result has no coherent unit. Tonnes measure mass, cubic metres measure volume and TEU represents standardized container capacity. Calling their sum total cargo does not make the arithmetic valid.

| Record type | Stored quantity | Unit | Valid aggregation |
|---|---:|---|---|
| Dry bulk | Numeric amount | tonne | Add to compatible mass records |
| Containers | Numeric amount | TEU | Add container-capacity counts |
| Liquid bulk | Numeric amount | cubic metre | Add compatible volume records |
| Naive combined row | All amounts | none | Reject the operation |

The repair begins in the schema. Every row requires `value`, `unit`, `cargo_class`, `period` and `source_type`. Unit codes use a controlled vocabulary so `TEU`, `teu` and `containers` do not silently become different categories. The aggregation function checks that all selected rows share a compatible physical dimension before addition.

When the input does not contain defensible conversion information, the program publishes separate totals. This is not a failure to answer. It is the correct answer to a dataset that does not support one combined quantity.

## Why generic conversion does not solve it

One TEU does not contain a fixed mass. A container may be empty, partly loaded or limited by the density and value of its contents. One cubic metre also does not have a fixed mass across water, fuel, chemicals and other liquids. A mass conversion requires the actual substance and a valid density under relevant conditions.

The class therefore rejects shortcuts such as assuming one TEU equals a fixed number of tonnes. If a specific shipment includes verified net mass, the record can carry that mass as a separate measure. If a liquid record includes verified density and conditions, a documented conversion may be possible. The conversion formula, source and resulting unit must remain visible.

Official Sohar figures are kept in their original definitions. Two million TEU is stated as annual terminal capacity, not actual cargo moved. More than 3,000 is annual vessel calls, not containers. Around 85 million is gross registered tonnage, not a shipment mass total. Twenty-one million square metres is port area. The code must never combine these headline figures merely because they share a city.

## A unit-aware data pipeline

| Pipeline layer | Required rule | Error prevented | Output |
|---|---|---|---|
| Ingest | Value and unit required | Unlabelled numeric rows | Quarantine and review |
| Model | Controlled unit vocabulary | Duplicate spellings | Canonical unit code |
| Aggregate | Compatible dimensions only | Mass plus volume plus capacity | Separate totals or valid conversion |
| Presentation | Measure, unit, period and source | Vague total cargo label | Reproducible metric |

Children can begin with cards labelled length, mass, time and count. They decide which cards can be added and explain why. Learners aged 11 to 13 can write small validators that inspect a list before calculation. Teenagers can use Python classes, enums and automated tests. College learners and adults can add database constraints, dimensional models and metadata contracts.

The deeper lesson is that software correctness includes meaning. A function can execute without error, return a stable value and still be wrong because the program lost the relationship between number and unit.

## Courses for quantities, code and analytics

The following catalogue links offer several starting levels:

- [Early Math Foundations](https://learn.modernagecoders.com/courses/early-math-foundations) for quantity and comparison;
- [Elementary Mathematics](https://learn.modernagecoders.com/courses/elementary-mathematics-complete-masterclass) for operations with labelled measures;
- [Kids Coding Blocks](https://learn.modernagecoders.com/courses/kids-coding-blocks-masterclass) for visible data and conditions;
- [Maths Through Coding](https://learn.modernagecoders.com/courses/maths-through-coding) for implementing mathematical checks;
- [Python and AI for Kids](https://learn.modernagecoders.com/courses/python-ai-kids-masterclass) for a supported move to text code;
- [Python for Teens](https://learn.modernagecoders.com/courses/python-complete-masterclass-teens) for validation functions and testing;
- [MySQL for Teens](https://learn.modernagecoders.com/courses/mysql-mastery-for-teens) for typed records and queries;
- [Data Science for Teens](https://learn.modernagecoders.com/courses/data-science-course-for-teens-python-data) for tables and metadata;
- [MySQL Database](https://learn.modernagecoders.com/courses/mysql-database-complete-masterclass-college) for constraints and analytical models;
- [Data Analysis](https://learn.modernagecoders.com/courses/data-analysis-mastery-course-college) for reproducible metrics;
- [Data Analytics Mathematics](https://learn.modernagecoders.com/courses/data-analytics-mathematics-masterclass) for dimensional reasoning;
- [Python AI Automation](https://learn.modernagecoders.com/courses/python-ai-automation-masterclass-college) for reliable ingest and reporting.

Placement uses present ability, not city, school or degree title. An experienced teenager may begin with a typed Python model. A university learner may need database design. A complete adult beginner may start with programming foundations before attempting a port-style pipeline.

## Live class format and fees

Modern Age Coders has taught more than 10,000 students since 2020 across more than 25 countries. Learners have ranged from age 6 to 67. The organisation is rated 4.9 across 547 Google reviews.

A group normally contains five to eight compatible learners. Compatibility includes present skill, pace and objective. Private tuition is one learner with one teacher. Two live classes each week normally make eight classes in a month.

The first class is free. Standard group tuition is USD 100 per month. Standard private tuition is USD 150 per month. The course, format, teacher availability and recurring time are confirmed before payment.

Oman is one and a half hours behind India. Sohar learners agree a recurring time before payment. Friday and Saturday possibilities may be discussed subject to availability. School examinations, university timetables, adult work and Ramadan routines should be mentioned before the schedule is confirmed.

A laptop or desktop, stable internet, audio and a current browser are required. Coding on the learner's own computer helps the teacher see environment, file and tooling problems that a prepared classroom machine might hide.

## What the free class checks

The teacher asks about the learner's goal and gives a short task matched to the stated experience. A child may sort labelled quantities or repair a block condition. A teenager may add a unit validator to a Python function. An experienced learner may redesign a table whose amount column mixes mass, capacity and volume.

The teacher observes output and explanation. A correct total without a unit is not accepted. After the task, the learner receives a suggested starting course and can discuss group or private format and timing without paying for that first lesson.

## Common Sohar questions

### Can Sohar University students join?

Yes. Python, databases, web engineering, AI, cybersecurity, data analysis and algorithms are possible routes, subject to placement and availability. No university partnership is claimed.

### Can children and teenagers join?

Yes. Modern Age Coders teaches ages 6 to 67 and places by ability.

### Is the manifest real Sohar Port data?

No. Public facts establish vocabulary and context. The small manifest is synthetic and clearly labelled.

### Is there a Sohar centre?

No local branch is claimed. Teaching is live online.

### Why not convert every record to tonnes?

Because a valid conversion requires actual contents, loading or density. Generic constants would invent evidence.

### What are the fees?

The first class is free. Group tuition is USD 100 per month and private tuition is USD 150 per month, normally for eight live classes.

### Which city pages continue the data series?

The [Barka coding guide](https://learn.modernagecoders.com/coding-classes-in-barka) parses dates before sorting. The [Salalah coding guide](https://learn.modernagecoders.com/coding-classes-in-salalah) handles seasonality and moving averages. Return to the [Oman coding hub](https://learn.modernagecoders.com/coding-classes-in-oman) for the national offer.

Request the free class through the HTML form, WhatsApp +91 91233 66161, or contact@modernagecoders.com.
