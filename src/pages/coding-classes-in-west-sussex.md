---
title: "Coding Classes in West Sussex | Live Online, Ages 6 to 67"
description: "Live online coding, Python and maths classes across West Sussex, from Crawley, Worthing and Bognor Regis to Horsham, Haywards Heath, Chichester and Littlehampton."
canonical: https://learn.modernagecoders.com/coding-classes-in-west-sussex
source: src/pages/coding-classes-in-west-sussex.html
---
> West Sussex has one county council and seven districts, which together held 882,676 people at the 2021 Census by our sum of the seven published counts. Crawley and Worthing are the largest towns, then Bognor Regis, Horsham and Haywards Heath. We run every lesson live over video from India and match learners to classes by ability, so a quick nine-year-old and a careful adult can each start in the right place. Coding, Python, data science and maths are taught to anyone from 6 to 67, one-to-one or in small groups of five to ten. The West Sussex project lets census commuting data draw its own map. Your first lesson is free of charge. From then on a group seat is USD 100 monthly and one-to-one teaching USD 150 monthly.

[Home](/) / [United Kingdom](/coding-classes-in-united-kingdom) / West Sussex

West Sussex / Live online

# Coding classes in West Sussex

**What are the best coding classes in West Sussex?** West Sussex has one county council and seven districts, which together held 882,676 people at the 2021 Census by our sum of the seven published counts. Crawley and Worthing are the largest towns, then Bognor Regis, Horsham and Haywards Heath. We run every lesson live over video from India and match learners to classes by ability, so a quick nine-year-old and a careful adult can each start in the right place. Coding, Python, data science and maths are taught to anyone from 6 to 67, one-to-one or in small groups of five to ten. The West Sussex project lets census commuting data draw its own map. Your first lesson is free of charge. From then on a group seat is USD 100 monthly and one-to-one teaching USD 150 monthly.

County boundaries were drawn long before anyone commuted by car or train, so do they still describe how people live? The 2011 Census recorded where every worker lived and where they worked, which turns the South East into a network: districts are the points, and the numbers of people travelling between them are the links. Programs that find communities in networks, the same kind used on social media and in biology, can then group the districts by how strongly they are tied together, without being told any county names. This page's project runs that analysis on 21 districts in and around West Sussex. The map it draws cuts across county lines in three places.

Facts last verified 26 September 2026. Teaching is online; no West Sussex branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Where West Sussex learners begin

An eight-year-old in Littlehampton who likes drawing maps, a Year 9 in Horsham who wants to know how social networks work, a Year 12 in Chichester doing real data science, and an adult in Crawley who analyses figures at work. Each begins with a free lesson.

- [Python and AI for Kids](/courses/python-ai-kids-masterclass) (Ages 8 to 12): Typed Python for children, with games, puzzles and first steps with data and AI.
- [Maths Through Coding](/courses/maths-through-coding) (Ages 10 to 15): Maths learned by coding it, including networks, tables and patterns found by programs.
- [Data Science for Teens](/courses/data-science-course-for-teens-python-data) (Ages 13 to 18): Real data in Python for teenagers, from tables and charts to models that find structure.
- [Data Analysis Course](/courses/data-analysis-mastery-course-college) (Adults): Spreadsheets, statistics and SQL, then Python and dashboards, for adults who work with data.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## 882,676 people from the Downs to the Weald

District counts are 2021 Census figures from Nomis, with the total our own sum. The towns listed are ONS built-up areas; every one was recounted by us from its census output areas.

**West Sussex's twelve largest built-up areas, 2021 Census**

| Town | Residents | Town | Residents |
|---|---|---|---|
| Crawley | 120,550 | Burgess Hill | 33,355 |
| Worthing | 111,620 | Chichester | 31,710 |
| Bognor Regis | 68,435 | Lancing and Sompting | 27,930 |
| Horsham | 50,215 | East Grinstead | 26,350 |
| Haywards Heath | 40,185 | Shoreham-by-Sea | 23,660 |
| Rustington | 33,885 | Littlehampton | 19,065 |

Arun is the largest district at 164,889 and Adur the smallest at 64,544. The ONS Crawley area reaches into Horsham district and the Worthing area into Arun. Burgess Hill and Haywards Heath each have several hundred residents just over the county edge, by our count, while Haslemere and Emsworth are left off because most of each lies outside West Sussex. Smaller towns include Hassocks and Hurstpierpoint, Southwick, Southwater, Selsey, Billingshurst and Storrington. School holidays are decided by West Sussex County Council and by academy trusts. We have not read their calendars, so we ask each family for its dates.

### Pages nearby

Our [Chichester](/best-coding-class-in-chichester) page has its own project, and [East Sussex](/coding-classes-in-east-sussex), [Surrey](/coding-classes-in-surrey) and [Hampshire](/coding-classes-in-hampshire) border the county.

## Letting commuters draw the map

Twenty-one districts, the census record of who works where, and an algorithm that has never seen a county boundary.

The learner downloads census table WU01UK from Nomis for 21 districts: all seven in West Sussex and fourteen neighbours in East Sussex, Surrey and Hampshire. Between them, 293,311 people commuted from one of these districts to another, and 496,591 worked in the district where they lived. Each district becomes a point in a network, and each pair is joined by a line whose weight is the number of people travelling between them in either direction.

A community-detection algorithm then looks for groups of districts with many more links inside the group than you would expect by chance. The score it tries to raise is called modularity. Two different methods, a greedy one and the Louvain method, found exactly the same four groups, with a modularity of 0.417. Grouping the districts by county instead scores only 0.342: the counties are a worse description of how people actually move.

**The four commuter communities our program found, 26 September 2026**

| Group | Districts | Counties it spans |
|---|---|---|
| West coast and Portsmouth | Arun, Chichester, East Hampshire, Havant, Portsmouth, Guildford, Waverley | West Sussex, Hampshire, Surrey |
| Crawley and the north | Crawley, Horsham, Mid Sussex, Mole Valley, Reigate and Banstead, Tandridge | West Sussex, Surrey |
| Brighton and the coast | Adur, Worthing, Brighton and Hove, Lewes | West Sussex, East Sussex |
| East Sussex east | Eastbourne, Hastings, Rother, Wealden | East Sussex only |

West Sussex does not appear as one community at all. Its seven districts split three ways: the west joins Portsmouth and the Hampshire border, the north joins Surrey around Crawley, and Adur and Worthing join Brighton. The strongest single links explain why: Arun to Chichester carries 10,551 commuters, Mid Sussex to Crawley 7,119 and Adur to Brighton and Hove 6,615. Crawley is a magnet: 30,706 people from the other 20 districts worked there, more than the 28,828 Crawley residents who worked in their own town.

### Ages 9 to 12

Draw your own network of friends or clubs on paper, then circle the groups that are tightly linked.

### Ages 12 to 15

Build the commuting network in Python with the networkx library, draw it, and find the biggest flows.

### Ages 15 and up

Run community detection, compute modularity for the found groups and for the counties, and write up which lines the data ignores.

### Whose numbers these are

The commuting counts are from the 2011 Census, published by the ONS on Nomis, and they describe 2011, not today. The network, the four groups and the modularity scores are our own analysis. A different set of districts or a different method could draw the lines somewhat differently.

## A county pulled three ways

The West Sussex link, in the census flows themselves.

**The six largest flows between the 21 districts, 2011 Census WU01UK**

| From | To | Commuters |
|---|---|---|
| Havant | Portsmouth | 10,915 |
| Arun | Chichester | 10,551 |
| Lewes | Brighton and Hove | 8,478 |
| Waverley | Guildford | 7,730 |
| Mid Sussex | Crawley | 7,119 |
| Adur | Brighton and Hove | 6,615 |

Community detection is one of the most useful tools in network science. It finds friendship groups in social networks, families of proteins that work together, and clusters of websites that link to each other. Planners use the same ideas to draw travel-to-work areas. A West Sussex student who has watched an algorithm split their own county three ways has learned to look at data as connections, and to question boundaries that were drawn for other reasons.

Modern Age Coders has no connection with West Sussex County Council, the ONS or any council named here. The census counts are theirs; our network analysis and any mistakes in it are ours.

**Nearby pages** [Chichester](/best-coding-class-in-chichester) and [Brighton and Hove](/best-coding-class-in-brighton-and-hove) have their own pages; [Surrey](/coding-classes-in-surrey) is north, [East Sussex](/coding-classes-in-east-sussex) east and [Portsmouth](/best-coding-class-in-portsmouth) west.

## From friendship maps to network science

The free lesson shows where to start. Age gives a hint; skill settles it.

- **Ages 6 to 10: Maps and links** Block coding with maps, paths and characters that connect places together. [Coding for Kids](/courses/kids-coding-blocks-masterclass), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **Ages 8 to 13: Tables and patterns** Typed Python reading small tables and finding the biggest numbers and the strongest links. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [Maths Through Coding](/courses/maths-through-coding)
- **Ages 13 to 18: Networks and data** Data science in Python, including networks, grouping and honest reporting of results. [Data Science for Teens](/courses/data-science-course-for-teens-python-data), [Problem Solving for Teens](/courses/problem-solving-dsa-masterclass-teens)
- **Ages 18 to 67: Analysis for work** Spreadsheets, SQL and Python for adults who need to find structure in business data. [Data Analysis Course](/courses/data-analysis-mastery-course-college), [Data and AI Analytics for Non-Programmers (Excel, Sheets, Power BI)](/courses/data-and-ai-analytics-for-non-programmers-course)

## Algorithms find groups we never asked for. Should we trust them?

Finding structure is powerful; knowing what it means is the human part.

Community detection found four commuter groups without being told a single county name, and they make sense: Crawley with its Surrey neighbours, the coast with Brighton, the west with Portsmouth. Many AI systems do something similar when they group customers, songs or patients. The groups can be genuinely revealing, and they can also reflect quirks of the data, such as which districts were included or which year was measured.

A West Sussex student who has run the analysis both ways, and compared it with the county map, knows to ask what an algorithm's groups are based on and what would change them. That is the difference between using AI results and understanding them.

Learning to code in 2026 gives a West Sussex teenager the means to understand the patterns algorithms find, instead of simply accepting them. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## Selsey to East Grinstead, from your own room

West Sussex runs a long way from the coast to the Surrey border, and weekday traffic makes a weekly class a real trip. Online lessons remove it.

- **Right at home** A flat in Bognor Regis, a semi in Southwater, a house in Haywards Heath. The teacher and learner share a screen, and the learner codes.
- **Familiar school terms** Key stages, year groups, GCSEs and A levels mean what they mean in West Sussex schools, and lessons are in English.
- **Free first lesson** A real lesson, then an honest recommendation on level and course, with no card details asked for.
- **Grouped by stage** Five to ten learners at one level, whether in Sussex or far beyond.
- **Breaks for holidays** Most learners take two lessons a week and pause for their school's own holidays.
- **Always UK time** Your lesson time is fixed in UK time through the clock changes; the teacher, on India time several hours ahead, does the adjusting.

**Why groups follow level** Even Crawley or Worthing seldom has five learners at the same stage free on the same evening. Grouping by level lets a learner in Storrington or Selsey join the right class.

## Fees in West Sussex

Rustington or Horsham, the fee is the same, and it matches every country we teach except India.

- First class: USD 0. A complete lesson with real work, then our advice on level and course.
- Group tuition: USD 100 a month. Roughly eight lessons a month in a group of five to ten at one level.
- Private tuition: USD 150 a month. Roughly eight lessons a month, one teacher with one learner.

Prices are in US dollars only. No invoice is raised until the free lesson ends with an agreed course and a regular weekly slot. The pricing page describes pausing, missing a lesson, and changing between group and private classes.

## West Sussex questions

### How many people live in West Sussex?

882,676 usual residents in the 2021 Census, which is our own total of the seven district counts the ONS publishes on Nomis.

### What are the largest towns in West Sussex?

By ONS built-up area: Crawley 120,550, Worthing 111,620, Bognor Regis 68,435, Horsham 50,215 and Haywards Heath 40,185.

### What is the commuting network project?

Learners build a network of 21 districts from 2011 Census commuting flows, run community detection, and find four groups that split West Sussex three ways and score higher than the county map.

### What is community detection?

A family of algorithms that find groups in a network with many more links inside than between them. It is used for social networks, biology and travel-to-work areas.

### What is modularity?

A score for how well a set of groups captures a network's structure, comparing links inside groups with what chance would give. Our commuter groups score 0.417 against 0.342 for counties.

### Are lessons held in West Sussex?

No. All teaching is live online, so learners join from anywhere in the county.

### Which ages do you teach?

Ages 6 to 67. Blocks for young children, Python from about eight to ten, data science and algorithms for teenagers, and data skills for adults. The free lesson sets the level.

### Can teenagers learn network analysis?

Yes. The teen data science course works with real data in Python, and projects like this one add networks.

### What will lessons cost us?

Nothing for the first one. Groups then cost USD 100 each month and one-to-one teaching USD 150 each month; there is no entry fee, and no term you must sign up for.

### Do you pause for West Sussex school holidays?

Yes, if you wish. West Sussex County Council and academy trusts publish their own dates, and we plan around yours.

## Pages around West Sussex

See [Chichester](/best-coding-class-in-chichester), then [East Sussex](/coding-classes-in-east-sussex), [Surrey](/coding-classes-in-surrey), [Hampshire](/coding-classes-in-hampshire) and [Brighton and Hove](/best-coding-class-in-brighton-and-hove). The [UK hub](/coding-classes-in-united-kingdom) lists every other area.

## Contact

Book the free class on [https://learn.modernagecoders.com/coding-classes-in-west-sussex](https://learn.modernagecoders.com/coding-classes-in-west-sussex#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email contact@modernagecoders.com. Rated 4.9 across 547 Google reviews.
