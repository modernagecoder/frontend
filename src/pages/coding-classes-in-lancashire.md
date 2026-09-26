---
title: "Coding Classes in Lancashire | Live Online, Ages 6 to 67"
description: "Live online coding, Python and maths classes across Lancashire, from Blackpool, Blackburn and Preston to Burnley, Lancaster, Chorley, Leyland and Accrington."
canonical: https://learn.modernagecoders.com/coding-classes-in-lancashire
source: src/pages/coding-classes-in-lancashire.html
---
> Lancashire is fourteen councils: the twelve districts of Lancashire County Council plus Blackpool and Blackburn with Darwen. At the 2021 Census they held 1,531,128 people between them, by our own addition of the fourteen published counts. Blackpool and Blackburn are the two largest towns, then Preston, Burnley and Lancaster. Our teachers work live over video from India, and we put each learner in a class by what they can already do, not by the year on their birth certificate. Anyone aged 6 to 67 is welcome, in groups of five to ten or one-to-one, for coding, Python, game making, AI and maths. The Lancashire project comes from the Blackpool Illuminations. The first lesson costs nothing; after that a group place is USD 100 a month and private teaching USD 150 a month.

[Home](/) / [United Kingdom](/coding-classes-in-united-kingdom) / Lancashire

Lancashire / Live online

# Coding classes in Lancashire

**What are the best coding classes in Lancashire?** Lancashire is fourteen councils: the twelve districts of Lancashire County Council plus Blackpool and Blackburn with Darwen. At the 2021 Census they held 1,531,128 people between them, by our own addition of the fourteen published counts. Blackpool and Blackburn are the two largest towns, then Preston, Burnley and Lancaster. Our teachers work live over video from India, and we put each learner in a class by what they can already do, not by the year on their birth certificate. Anyone aged 6 to 67 is welcome, in groups of five to ten or one-to-one, for coding, Python, game making, AI and maths. The Lancashire project comes from the Blackpool Illuminations. The first lesson costs nothing; after that a group place is USD 100 a month and private teaching USD 150 a month.

Visit Blackpool says the Illuminations began in 1879 with "just eight arc lamps" on the Promenade, and that today the display uses "one million lamps of various types and styles". Every picture in a tableau is built from lamps, and a lamp that can only be on or off cannot show a gentle sunset directly. Something has to decide which lamps to light. This page's project hands that decision to Python, tries three ways of making it, and measures the results two ways. The method that is most accurate lamp by lamp turns out to be the one that looks worst from the Promenade, which is a lesson about measuring the right thing that reaches far beyond lights.

Facts last verified 26 September 2026. Teaching is online; no Lancashire branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Where Lancashire learners usually start

A nine-year-old in Chorley who draws pixel characters, a Year 8 in Burnley who likes puzzles with numbers, a Year 12 in Lancaster curious about how computers see pictures, and a parent in Blackpool retraining at the kitchen table. Each begins with a free lesson.

- [Game Development for Kids](/courses/game-development-masterclass-for-kids) (Ages 8 to 12): Scratch games first, then Roblox and Minecraft worlds, with a unit on pixel art in Piskel and colour for games.
- [Maths Through Coding](/courses/maths-through-coding) (Ages 10 to 15): Maths learned by programming it, so averages, fractions and grids become Python projects.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 13 to 18): Python to real machine learning, including computer vision that starts from how a computer turns pixels into features.
- [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college) (Adults): Python from a first line to advanced projects, for adults learning around work and family.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## 1,531,128 people across fourteen councils

Council counts are from the 2021 Census on Nomis; the county total is our sum of them. Towns are ONS built-up areas, each compared with our own addition of census output areas.

**The twelve largest built-up areas wholly inside Lancashire, 2021 Census**

| Town | Residents | Town | Residents |
|---|---|---|---|
| Blackpool | 149,070 | Lytham St Anne's | 42,695 |
| Blackburn | 124,955 | Bamber Bridge | 40,360 |
| Preston | 94,490 | Chorley | 39,535 |
| Burnley | 78,255 | Leyland | 39,295 |
| Lancaster | 52,655 | Skelmersdale | 34,915 |
| Fulwood | 34,690 | Accrington | 34,895 |

The ONS draws its town lines tightly, so Fulwood is counted apart from Preston, and Bamber Bridge and Leyland are separate places too. Southport and Orrell are left off the table because most of their people live over the county edge in Merseyside. Among the councils, Blackburn with Darwen is the largest at 154,738 and Ribble Valley the smallest at 61,561. Further down the list come Morecambe, Nelson, Darwen, Ormskirk, Fleetwood, Rawtenstall, Colne and Clitheroe, each with its own schools and its own handful of keen young programmers. Lancashire County Council and the two unitary councils set their own school calendars, which we did not read, so breaks are agreed with each family.

### City pages inside the county

Two Lancashire cities already have their own pages: [Preston](/best-coding-class-in-preston) and [Lancaster](/best-coding-class-in-lancaster). This page covers everyone else, from the Fylde coast to Pendle and Rossendale.

## Drawing a sunset with lamps that are only on or off

A model tableau of 4,608 lamps, three ways to choose which ones to light, and two ways to score them.

The learner builds a grid of 48 rows by 96 lamps, 4,608 in all, and paints on it a smooth picture of our own that runs from dim on the left to bright on the right. Averaged over the whole grid the picture is 36.65 per cent bright, so a faithful version should light about 1,689 lamps. Three methods then decide which lamps go on. The simplest rounds each lamp to the nearer of on or off. The second compares each lamp with a fixed repeating four-by-four pattern, the Bayer ordered method. The third, Floyd-Steinberg error diffusion, rounds a lamp and then hands its rounding error to the four neighbours still to be decided, in shares of 7, 5, 3 and 1 sixteenths.

**Our model tableau, two brightness levels (off or on): results computed 26 September 2026**

| Method | Lamps lit (target about 1,689) | Average error per lamp | Error seen from a distance |
|---|---|---|---|
| Round each lamp | 1,008 | 0.308 | 0.293 |
| Bayer ordered pattern | 1,548 | 0.400 | 0.056 |
| Floyd-Steinberg | 1,679 | 0.405 | 0.028 |

The surprise sits in the third column. Judged lamp by lamp, simple rounding wins easily. Yet it lights only 1,008 lamps where about 1,689 were needed, and in our run every lamp in the left half of the picture stays dark: 48 of the 96 columns vanish. The last column measures what a person standing back actually sees, by blurring each lamp with its neighbours over a five-by-five patch before comparing. On that measure Floyd-Steinberg is about ten times closer than rounding, and it lights 1,679 lamps, within ten of the target.

The learner then gives each lamp four brightness levels instead of two, as a dimmer would. Everything improves, but the order holds: seen from a distance, rounding scores 0.077, the Bayer pattern 0.016 and Floyd-Steinberg 0.009. The real lesson is not about lights. Whichever error you choose to measure decides which method wins, so the first job is to measure the error that matters to the person looking.

### Ages 8 to 12

Colour a squared grid with a felt pen, first by rounding and then by passing the leftover along the row, and hold both at arm's length.

### Ages 12 to 15

Store a picture as a list of lists in Python, write the rounding and error-passing rules, and count how many lamps each one lights.

### Ages 15 and up

Add the Bayer matrix, write the blur, score all three methods both ways, and explain in writing why the rankings flip.

### What is real and what is ours

The dates and numbers about the Illuminations come from Visit Blackpool. The grid, the picture and every result in the table are our own teaching model. We do not know how the Illuminations team designs its tableaux and make no claim that it uses any of these methods.

## From eight arc lamps to a million, along the Promenade

The Lancashire link, in Visit Blackpool's own facts.

**The Blackpool Illuminations, as Visit Blackpool describes them**

| When or what | Visit Blackpool says |
|---|---|
| 1879 | Visitors first came to see the lights, when just eight arc lamps lit the Promenade. |
| May 1912 | The first displays close to today's were staged for the first royal visit, by Princess Louise. |
| By 1932 | Animated tableaux had been added, on the cliffs between North Shore and Bispham. |
| Today | One million lamps of many types, more than 100 miles of festoon, and more than 500 designs and features. |
| Technology | Micro controllers, LEDs, lasers and video have been added to the display. |
| 2026 season | From Friday 4 September to Sunday 3 January 2027, along the route from Starr Gate to Red Bank Road. |

Visit Blackpool also describes Lightworks, the Illuminations depot, where twenty staff work all year on design, building, maintenance and storage. A display that grew from eight lamps to a million, now run by micro controllers, is a fine place for a Lancashire student to ask how a machine turns a picture into instructions for individual lights. The same question sits behind printed newspaper photographs, old computer screens with sixteen colours, and the tiny images a phone sends when the signal is poor.

Modern Age Coders has no link with the Blackpool Illuminations, Visit Blackpool, Blackpool Council or Lancashire County Council. The facts quoted belong to their sources; the model tableau, its numbers and any mistakes are ours.

**Nearby pages** [Cumbria](/coding-classes-in-cumbria) lies to the north and [Greater Manchester](/coding-classes-in-greater-manchester) to the south, with [Liverpool](/best-coding-class-in-liverpool) across the Merseyside border.

## From pixel art to computers that see

The free lesson settles where a learner starts. Age suggests a stage; what they can do decides it.

- **Ages 6 to 10: Pictures and games** Block coding with sprites, colours and simple games, where a grid of squares first becomes a picture. [Scratch Coding for Kids](/courses/scratch-programming-complete-course), [Coding for Kids](/courses/kids-coding-blocks-masterclass)
- **Ages 8 to 13: Worlds and numbers** Game making in Scratch, Roblox and Minecraft, alongside Python that handles grids, averages and counts. [Game Development for Kids](/courses/game-development-masterclass-for-kids), [Maths Through Coding](/courses/maths-through-coding)
- **Ages 13 to 18: Images as data** Python that treats a picture as numbers, then machine learning and computer vision built on that idea. [Python for Teens](/courses/python-complete-masterclass-teens), [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens)
- **Ages 18 to 67: Skills for work** Python from the start and on to automation and data, for adults building a new skill in the evenings. [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college), [Data Analysis Course](/courses/data-analysis-mastery-course-college)

## Ask an AI for the most accurate version. Accurate by which measure?

A tool optimises the score it is given. Choosing the score is a human job.

Ask an assistant for the most accurate way to show a picture on lamps that are only on or off, and rounding each lamp is a natural answer, because it gives the smallest error lamp by lamp. In our model that answer blacks out half the picture. The method that looks right from a distance scores worse on the per-lamp measure, so a tool judged only by that measure would keep choosing the wrong one.

Machine learning runs on the same choice. Every model is trained to reduce some error, and a model can score well on the error it was given while failing at what people actually wanted. A Lancashire student who has watched the rankings flip between two scores learns to ask what a number measures before trusting it.

So a young person in Lancashire should learn to code in 2026 to be the one who chooses what an AI is asked to get right. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## Morecambe Bay to the Pennine towns, from one laptop

A county this wide has long evening journeys between towns. Online lessons skip them all.

- **From any Lancashire home** A back bedroom in Accrington, a dining table in Ormskirk, a study in Clitheroe. The teacher shares a screen and the learner writes the code.
- **The English school words** Key stages, year groups, GCSEs and A levels are used exactly as Lancashire schools use them, and every lesson is in English.
- **First lesson on us** A real lesson with real work, followed by a straight answer about level and course. We never ask for card details at this point.
- **Peers at your stage** Groups of five to ten who are at the same point, drawn from Lancashire, the rest of the UK and further away.
- **Your breaks, your calendar** Most learners take two lessons a week, and we pause for whatever holidays your school sets.
- **Times set in UK time** Lesson times are fixed in UK time all year, and the teacher in India time, several hours ahead, adjusts when the UK clocks change.

**Why levels matter more than towns** Even a large town rarely has five learners at exactly the same stage who are free on the same evening. Grouping by level lets a learner in Bacup or Fleetwood join a class that fits.

## Fees in Lancashire

Skelmersdale or Colne, the price does not change, and it is the same outside India wherever you live.

- First class: USD 0. One complete lesson with real work, then our honest view of the right level and course.
- Group tuition: USD 100 a month. Roughly eight lessons each month, in a group of five to ten at one level.
- Private tuition: USD 150 a month. Roughly eight lessons each month, with a teacher to themselves.

We quote and bill in US dollars and do not publish prices in pounds. Billing only starts once the free lesson has settled a course and a weekly slot; the pricing page covers pauses, missed lessons and moving between group and private classes.

## Lancashire questions

### How many people live in Lancashire?

The fourteen councils of ceremonial Lancashire had 1,531,128 usual residents at the 2021 Census, by our own sum of the ONS figures on Nomis.

### What are the largest towns in Lancashire?

By ONS built-up area: Blackpool 149,070, Blackburn 124,955, Preston 94,490, Burnley 78,255 and Lancaster 52,655.

### What is the Blackpool project?

Learners draw a picture on a grid of 4,608 on-or-off lamps, compare rounding, the Bayer pattern and Floyd-Steinberg error diffusion, and find that the method with the smallest error per lamp looks worst from a distance.

### What is error diffusion?

A way to reduce a picture to a few levels. Each lamp or pixel is rounded, and the amount it was rounded by is shared among neighbours not yet decided, so the overall brightness stays close to the original.

### Do the Illuminations use this method?

We do not know and do not claim so. The Illuminations are the inspiration; the grid and the results are our own teaching model.

### Do you have a centre in Lancashire?

No. We teach only live online, so learners anywhere in the county join from home.

### What ages can join?

From 6 to 67. Young children start with block coding and games, most move to typed Python by about ten, teenagers take Python, AI or maths further, and adults choose Python or data. The free lesson settles the level.

### Can a teenager learn AI and computer vision?

Yes. The teen AI and machine learning course goes from Python to real models, including computer vision that begins with how pixels become features.

### How much do lessons cost?

Nothing for the first lesson. After that, a group place is USD 100 a month and one-to-one teaching is USD 150 a month, with no joining fee and no contract.

### Do lessons follow Lancashire school holidays?

Lancashire County Council, Blackpool, Blackburn with Darwen and academy trusts each set dates. Tell us yours and we plan breaks around them.

## Other North West pages

Start with [Preston](/best-coding-class-in-preston) or [Lancaster](/best-coding-class-in-lancaster) inside the county, then [Greater Manchester](/coding-classes-in-greater-manchester) and [Cumbria](/coding-classes-in-cumbria) next door. The [UK hub](/coding-classes-in-united-kingdom) lists the rest.

## Contact

Book the free class on [https://learn.modernagecoders.com/coding-classes-in-lancashire](https://learn.modernagecoders.com/coding-classes-in-lancashire#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email contact@modernagecoders.com. Rated 4.9 across 547 Google reviews.
