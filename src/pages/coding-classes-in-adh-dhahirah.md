---
title: "Coding Classes in Adh Dhahirah | Modern Age Coders"
description: "Live online coding and mathematics across Adh Dhahirah for ages 6 to 67, with Yanqul and Dhank facts, USD fees, exact-integer analysis and a free class."
canonical: "https://learn.modernagecoders.com/coding-classes-in-adh-dhahirah"
location: "Adh Dhahirah, Oman"
last_verified: "2026-08-16"
---

# Coding classes across Adh Dhahirah that keep large totals exact

> Adh Dhahirah includes Ibri, Yanqul and Dhank across a large north-western governorate; Az Zahirah is another romanisation. Ages 6 to 67 may take coding, AI or mathematics live online through Modern Age Coders. The initial ability session has no fee. Shared tuition costs USD 100 per month; one-learner tuition costs USD 150.

This page describes online service availability across the governorate. Modern Age Coders does not claim an Adh Dhahirah office, classroom, mine, water asset, tourism facility or local agent. Learners join with a laptop or desktop, stable internet, working audio and a current browser. Teaching, questions, coding and feedback happen live.

Local facts were last verified on 16 August 2026. Government and news sources provide public context without implying endorsement. Every large integer, batch label, calculation and precision error in the student exercise is synthetic. It does not measure a project, facility, resident, production total or investment.

## Three current wilayats

Oman's current [Governorates System](https://bur.gov.om/assets/pdf/en/governorate-system.pdf) lists Ibri, Yanqul and Dhank in Adh Dhahirah. It identifies Ibri as the governorate centre.

The current [Adh Dhahirah government portal](https://gov.om/en/ad-dhahirah-governorate) lists the governor and separate wali leadership for Ibri, Yanqul and Dhank. It publishes a Sunday-through-Thursday work week at the governor's office in Ibri. Those hours belong to government administration, not Modern Age Coders.

Some official English sources write the place name as Al Dhahirah or A'Dhahirah. This site keeps Adh Dhahirah in its page title, headings and URL so search systems receive one stable canonical form.

Oman's [Foreign Ministry regional guide](https://www.fm.gov.om/en/about-oman/state/oman-by-region/) places the governorate in northwestern Oman. It describes a semi-desert region descending from the southern slopes of the western Hajar Mountains toward the Empty Quarter and identifies its historic role as a crossing point.

The [Ibri coding classes guide](https://learn.modernagecoders.com/coding-classes-in-ibri) carries detailed city context and its separate denominator audit. This governorate page concentrates on Yanqul, Dhank and exact-value engineering.

## Yanqul mining evidence needs unit and lifecycle fields

An [Oman News Agency report dated 13 May 2025](https://omannews.gov.om/topics/en/80/show/122268) describes the Mazoon Mining project in Yanqul.

ONA gives a project area of 20 square kilometres. It reports a planned annual production of approximately 115,000 tonnes of copper concentrate with a purity of 21.5 percent, based on estimated reserves of 22.9 million tonnes of copper ore.

Area, planned annual output, purity and estimated reserves are four separate measures. They need different field names, units, scales, effective dates and status labels. Adding them would have no semantic meaning even if every number were stored exactly.

A [Foreign Ministry report dated 10 November 2024](https://www.fm.gov.om/en/19247/) says the project includes five mines and a plant designed to process 2.5 million tonnes of copper ore annually.

The wording designed to process is not evidence of actual annual throughput. A responsible table might distinguish design_capacity, reporting_period, actual_output and source_date.

These public figures establish a local data-engineering setting. None is copied into the synthetic precision-loss total.

## A dated Yanqul water report

An [ONA report dated 6 April 2025](https://omannews.gov.om/topics/en/137/show/121623) said a Yanqul water network project had reached 95 percent completion.

The report included 590 connections to housing units, said 6,000 people were expected to benefit and stated that operation was expected in the third quarter of 2025.

Those statements remain attached to their report date. This page does not promote the 95 percent figure into a current completion status. Expected beneficiaries are not the same as connected accounts, users served or measured consumption.

For a learner, the record demonstrates why a number requires a metric, entity, unit, stage and timestamp before aggregation.

## Dhank and shared water-resource work

The official [Dhank wilayat page](https://dhr.gov.om/dhank) says the wilayat covers approximately 2,030 square kilometres. It places Dhank inside the governorate and identifies Wadi Fida among its best-known valleys.

The official [Yanqul page](https://www.dhr.gov.om/yanqul) gives an estimated area of 3,100 square kilometres and says that is 9 percent of the governorate's area. The words approximately and estimated are part of the claim.

An [ONA report dated 27 July 2025](https://omannews.gov.om/topics/en/137/show/123522/dark) describes community participation in the construction of 18 groundwater recharge dams across the governorate.

The report also says seven new dams were under construction through that initiative, allocating three to Ibri, three to Yanqul and one to Dhank. The three components sum to seven.

An analyst must determine whether the seven are inside, after or otherwise related to the group of 18 before combining them. Adding 18 and seven merely because both are dam counts could double-count or mix scopes.

An [ONA report dated 3 September 2025](https://omannews.gov.om/topics/en/137/show/124193/dark) discusses separate view projects in Yanqul and Dhank. It reported approximately 40 percent completion for Dhank View and 35 percent for Yanqul View at that time.

An average of those percentages would not necessarily describe regional completion. The projects can have different workloads, budgets, start dates and definitions of completion. A weighted measure requires a defensible denominator.

## The exact-integer precision project

The learner receives two synthetic batch values as canonical digit strings. The first is 9,007,199,254,740,991. The second is 2.

Their exact mathematical sum is 9,007,199,254,740,993.

| Batch or result | Exact digits | Meaning in class | Required handling |
|---|---:|---|---|
| DHR-A | 9,007,199,254,740,991 | Largest exactly safe JavaScript Number integer | Boundary case |
| DHR-B | 2 | Second exact synthetic batch | Add without coercion |
| Expected total | 9,007,199,254,740,993 | Exact mathematical sum | Preserve every digit |
| Unsafe Number result | 9,007,199,254,740,992 | Rounded machine value | Reject as inexact |
| Visible error | -1 | One synthetic unit lost | Fail release test |

Every value in this table is invented for teaching. It is not derived from the public mining, water, dam or municipal facts above.

JavaScript Number uses IEEE 754 binary floating-point. Number.MAX_SAFE_INTEGER is 9,007,199,254,740,991. Through that limit, consecutive whole numbers are exactly representable.

Beyond the limit, spacing between representable values grows. The intended odd total 9,007,199,254,740,993 cannot be represented exactly as a Number. It rounds to 9,007,199,254,740,992, losing one synthetic unit.

This is more dangerous than a visible parse error. The program runs, the output looks plausible and later equality checks may treat intended adjacent integers as the same value.

## Exact handling with BigInt

The learner keeps both inputs as digit strings until validation. A regular expression or parser confirms the allowed integer grammar. A range rule decides whether Number is safe or an exact type is required.

The values are converted to BigInt and added. In JavaScript notation, 9007199254740991n plus 2n produces 9007199254740993n exactly.

BigInt cannot be mixed directly with Number arithmetic. That restriction is useful because it forces an explicit decision. Converting an already unsafe Number to BigInt does not recover lost information; it merely converts the rounded value.

Standard JSON does not define a BigInt literal. The API therefore transports the exact digits as a documented string, for example `"9007199254740993"`, and its schema declares the field an integer string. The receiving application validates and converts it at the boundary.

A database can use an exact BIGINT where the range is sufficient or a NUMERIC type with enough precision. The chosen width is part of the schema review, not an implicit default.

## End-to-end exact-value contract

| Boundary | Exact rule | Release check |
|---|---|---|
| Input | Receive canonical base-10 digit string | Reject syntax outside schema |
| Application | Use BigInt for integer arithmetic | Test safe limit, limit plus one and odd totals |
| Database | Use BIGINT or sufficiently wide NUMERIC | Round-trip exact expected digits |
| API | Serialize large integer as documented string | No implicit Number coercion |
| Aggregation | Keep all operands exact | Reconcile batches to exact control total |
| Display | Format from exact representation | Rendered digits match stored digits |
| Export | Declare column type and preserve text where needed | Open-and-reimport test |
| Monitoring | Log range and conversion failures | Alert before corrupted input is accepted |

Thousands separators are display formatting. They are applied after calculation and are removed only by a validated input parser. Formatted text is not used as the stored value.

An exact integer can still be semantically wrong. The contract therefore identifies the entity, metric, unit, scale, period and allowed aggregation. A facility ID should not be summed. A cumulative meter reading should not be added across time. A designed capacity should not be labelled actual output.

Control totals remain exact. Each imported file carries a record count and, where appropriate, an exact value sum. The pipeline reconciles file, batch, database and rendered totals before release.

## Boundary and regression tests

The first test verifies that 9,007,199,254,740,991 is within the JavaScript safe range. The next input, 9,007,199,254,740,992, is outside the consecutive-safe guarantee even though that particular even integer can be represented.

The critical test adds two to the safe maximum and compares the exact digit string to 9,007,199,254,740,993. A Number-based implementation fails. A BigInt-based implementation passes.

A round-trip test writes the exact value to the database, reads it through the API and renders it. Every stage must return the same digits.

An export test opens and reimports the file. Spreadsheet software and downstream tools can coerce long digit strings, so the format and column instructions must be verified rather than assumed.

The release test rejects scientific notation for a field whose contract requires a canonical integer string. It also rejects decimals, embedded separators and undocumented signs.

The final explanation says that one synthetic unit was lost by unsafe Number conversion. It does not attribute a precision problem to an actual Adh Dhahirah organisation or dataset.

## Courses for exact programming and analysis

The [JavaScript for Teens course](https://learn.modernagecoders.com/courses/javascript-course-for-teens-beginners-interactive-web) provides the most direct route to Number, BigInt, input parsing, functions and tests.

The [TypeScript Programming Masterclass](https://learn.modernagecoders.com/courses/complete-typescript-programming-masterclass-college) supports explicit domain types and API contracts that separate exact integer strings from ordinary numbers.

The [Data Structures and Algorithms course](https://learn.modernagecoders.com/courses/data-structures-algorithms-masterclass-college) develops reasoning about representation, complexity, invariants and boundary cases.

The [Data Analysis Mastery course](https://learn.modernagecoders.com/courses/data-analysis-mastery-course-college) connects exact aggregation with source grain, control totals, lineage and reproducible reports.

Young beginners can start with [Kids Coding Blocks](https://learn.modernagecoders.com/courses/kids-coding-blocks-masterclass) and [Elementary Mathematics](https://learn.modernagecoders.com/courses/elementary-mathematics-complete-masterclass). They can count grouped cards and verify totals with a second arrangement.

Learners aged 11 to 13 may use [Python and AI for Kids](https://learn.modernagecoders.com/courses/python-ai-kids-masterclass) and [Problem Solving and Computational Thinking](https://learn.modernagecoders.com/courses/problem-solving-and-computational-thinking-for-kids) to compare data types and build edge-case habits.

Teenagers can combine [JavaScript for Teens](https://learn.modernagecoders.com/courses/javascript-course-for-teens-beginners-interactive-web) with [Data Science for Teens](https://learn.modernagecoders.com/courses/data-science-course-for-teens-python-data). College learners and adults can combine [TypeScript Programming](https://learn.modernagecoders.com/courses/complete-typescript-programming-masterclass-college) with [Data Analysis Mastery](https://learn.modernagecoders.com/courses/data-analysis-mastery-course-college).

Placement depends on demonstrated ability, pace and objective rather than age alone. A learner with an existing project can show it during the free class. A beginner receives an accessible exact-count task.

## Live online format and fees

Modern Age Coders has taught 10,000+ students in 25+ countries since 2020. Learners range from ages 6 to 67. The published reputation figure is rated 4.9 across 547 Google reviews.

A group normally contains five to eight compatible learners. Private tuition is one learner with one teacher. Classes usually meet twice each week, normally eight times monthly.

The first live class is free. Standard group tuition is USD 100 per month. Standard private tuition is USD 150 per month. Course, format, teacher availability and recurring time are confirmed before payment.

Oman is one and a half hours behind India. Friday and Saturday options are subject to availability. School exams, university assessments, work, travel and Ramadan schedules should be discussed before a recurring slot is agreed.

## Frequently asked questions

### Who can join coding classes across Adh Dhahirah?

Modern Age Coders teaches learners aged 6 to 67, including beginners, school students, university learners and working adults across Adh Dhahirah. Placement depends on observed ability, pace and objective rather than wilayat or age alone. The free first class uses an ability-matched task to identify a suitable course and format.

### What is the Adh Dhahirah precision-loss project?

The learner adds two wholly synthetic integer batches: 9,007,199,254,740,991 and 2. Their exact total is 9,007,199,254,740,993. A JavaScript Number cannot represent that integer exactly and produces 9,007,199,254,740,992. The repair validates the safe range and uses BigInt, a database integer type or an exact decimal representation end to end.

### Why can JavaScript Number lose a unit?

JavaScript Number uses binary floating-point. Consecutive whole numbers are exactly representable only through 9,007,199,254,740,991, which is Number.MAX_SAFE_INTEGER. Beyond that boundary, adjacent integers can map to the same machine value, so arithmetic and equality checks may silently stop distinguishing them.

### How does the learner preserve an exact large total?

The learner receives the value as a string or another exact transport representation, validates its integer syntax and range, converts it to BigInt for integer arithmetic, stores it in an exact database type, and serializes it without coercing it back to Number. Tests cover the safe boundary, additions, round trips and displayed output.

### Are the large aggregate and batch values official regional data?

No. Every large integer, batch label, calculation and error in the classroom tables is synthetic. Official sources are cited only for public administrative, geographic, infrastructure and development facts. The exercise does not measure actual mines, water networks, dams, facilities, residents, production or investment in Yanqul, Dhank, Ibri or elsewhere.

### Does Modern Age Coders have a physical centre in Adh Dhahirah?

No Adh Dhahirah office or classroom is claimed. Lessons are live online. A learner joins with a laptop or desktop, stable internet, audio and a current browser. The teacher explains, observes work, reviews code and gives feedback synchronously. This page describes regional service availability rather than a local branch.

### Can learners outside Ibri join these online classes?

Yes. Learners in Yanqul, Dhank and elsewhere in the governorate may request a class, subject to course and time availability. The service does not require travel to Ibri. A suitable computer, stable internet and working audio are required.

### How much do coding classes in Adh Dhahirah cost?

The first class is free. Standard group tuition is USD 100 per month for two live lessons each week, normally eight lessons monthly. Standard private tuition is USD 150 per month for one learner with one teacher on the same usual frequency. Course, format, recurring time and availability are confirmed before payment.

### What is the group size and schedule for Adh Dhahirah learners?

A group normally has five to eight compatible learners, while private tuition is one learner with one teacher. Classes usually meet twice each week, normally eight times monthly. Oman is one and a half hours behind India. The recurring time is agreed before payment, with Friday and Saturday options subject to availability.

### What happens in the free Adh Dhahirah coding class?

The teacher asks about the learner's objective and observes a short ability-matched task. A child may count grouped cards, a teenager may test a safe-integer boundary, and an experienced learner may design an exact-value transport contract. The teacher then explains the suggested course, format, timing and USD fee. No tuition is charged for the first class.

## Continue through Oman

Use the [Oman coding classes hub](https://learn.modernagecoders.com/coding-classes-in-oman) for national course, delivery and fee facts.

The [Ibri coding classes guide](https://learn.modernagecoders.com/coding-classes-in-ibri) focuses on the governorate centre and a denominator audit. The [Al Buraimi coding classes guide](https://learn.modernagecoders.com/coding-classes-in-al-buraimi) teaches the risk of accumulated rounding.

Return to the [Oman coding classes hub](https://learn.modernagecoders.com/coding-classes-in-oman) to compare all published city, district and governorate guides.

Contact Modern Age Coders at +91 91233 66161 or contact@modernagecoders.com to request the free first live class.
