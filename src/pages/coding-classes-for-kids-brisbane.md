---
title: "Coding Classes for Kids in Brisbane | Prep to Year 8 Online"
description: "Live online coding classes for Brisbane kids in Prep to Year 8: Scratch, game making, first Python and AI basics with a real teacher, in groups or one to one."
canonical: https://learn.modernagecoders.com/coding-classes-for-kids-brisbane
source: src/pages/coding-classes-for-kids-brisbane.html
---
> Live online coding classes for Brisbane kids in Prep to Year 8: Scratch, game making, first Python and AI basics with a real teacher, in groups or one to one.

Skip to contentCourse picks for Brisbane kids

## Good first courses for a Brisbane child

Matched to age and to what the child enjoys building. The free first lesson settles the level before anything else.

[![Coding for Kids course thumbnail](/images/kids-coding.webp)Ages 6 to 9Coding for KidsBlock coding from first sequences to small games, with plenty of talking about what each block will do.See the syllabus](/courses/kids-coding-blocks-masterclass)[![Scratch Coding for Kids course thumbnail](/images/scratch-kids.webp)Ages 7 to 11Scratch Coding for KidsScratch projects with variables and lists, including a letter counter that tallies the ferry stop names.See the syllabus](/courses/scratch-programming-complete-course)[![Roblox Game Coding for Kids course thumbnail](/images/roblox-coding-kids.webp)Ages 9 to 13Roblox Game Coding for KidsRoblox games written in Luau, with scores, timers and a server that checks what the player claims.See the syllabus](/courses/roblox-game-coding-for-kids-lua-course)[![Python and AI for Kids course thumbnail](/images/python-kids.webp)Ages 10 to 13Python and AI for KidsFirst typed Python, where a dictionary turns a long list of names into a neat table of counts.See the syllabus](/courses/python-ai-kids-masterclass)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Brisbane children in the Census

## A young city, with older children slightly ahead

Taken from the ABS QuickStats summary for the Greater Brisbane capital city area. Each number is printed as published, with nothing added together by us.

| Census item | Brisbane figure |
| --- | --- |
| Aged 0 to 4 | 150,503, or 6.0% of residents |
| Aged 5 to 9 | 165,679, or 6.6% (Australia 6.2%) |
| Aged 10 to 14 | 167,962, or 6.6% |
| People attending preschool | 44,957 |
| Families | 674,188 |
| Median age of residents | 36 |

### More children than average

Both the 5 to 9 and 10 to 14 bands were 6.6% of Greater Brisbane's residents, above the national 6.2% for 5 to 9 year olds. Brisbane has plenty of primary-age learners.

### A younger median

Half of Greater Brisbane's residents were 36 or younger at the Census, which matches what we hear from families: busy households, school runs and after-school sport.

### Room for siblings

Families with children had 1.8 children on average, so brothers and sisters often learn with us at the same time, usually in different groups set by level rather than age.

A habit we pass on to children early: each age band in a census table is adjusted on its own to protect privacy, so the bands do not have to add up exactly to the published total. We quote the published numbers and never invent a total by adding the pieces.

Signature project

## Which letter is most common in Brisbane's ferry stop names?

Every ferry stop name along the river in OpenStreetMap, counted letter by letter with a Python dictionary or a pair of Scratch lists.

| Question | Answer |
| --- | --- |
| Map entries tagged as ferry terminals in our rectangle | 40 |
| Different names among them | 26, so many stops were listed more than once |
| Stop names kept for counting | 23 river stops |
| Letters in those 23 names | 245 |
| Most common letter, ignoring capitals | t, 25 times |
| Most common letter, counting capitals separately | a tie: e and t, 23 times each |
| Letters that never appear | j, x and z |

### 1. Count each stop once

Bulimba appears three times in the map data and many others twice, because a terminal can be drawn as both a point and a shape. Counting before removing repeats would give the wrong totals.

### 2. A box for every letter

A dictionary works like a row of labelled boxes. Each time the program meets a letter, it adds one to that letter's box, creating the box the first time it is needed.

### 3. Decide what counts as the same

Counted exactly as written, capital T in QUT Gardens Point and Teneriffe is a different symbol from small t, and e catches up to tie. Lower-case everything first and t wins with 25.

### A three-way tie for first letters

Counting only the first letter of each name gives another surprise: H, M and N each start three names (Hawthorne, Holman Street, Howard Smith Wharves; Maritime Museum, Milton, Mowbray Park; New Farm Park, North Quay, Northshore Hamilton). A program that reports one winner has quietly made a choice about ties. Children decide whether to report all three, the first alphabetically or the first found, and write that rule down.

The counts are ours, from an OpenStreetMap snapshot taken on 7 October 2026. OpenStreetMap is mapped by volunteers and a name may be missing or out of date. We set aside two large terminals, the Brisbane Cruise Terminal and the Tangalooma Ferry Terminal, and two entries with no name, so the list is the stops along the river only; the rectangle is our choice, not an official boundary.

How children learn it

## Counting, three ways, at three ages

One question, shrunk or stretched to fit: tally marks for the youngest, a dictionary by Year 8.

| Year level | Activity | The idea underneath |
| --- | --- | --- |
| Prep to Year 2 | Reads five stop names aloud and makes tally marks for each T they hear | Listening, counting and the difference between a sound and a letter |
| Years 3 to 6 | Uses two Scratch lists, one of letters and one of counts, and a loop that adds one each time | Lists, loops and keeping two lists in step |
| Years 7 and 8 | Writes a Python dictionary over all 23 names, then compares counts with and without capitals | Dictionaries, de-duplication with a set and deciding what counts as the same |

### Spaces are not letters

Howard Smith Wharves has two spaces. Programs that count every character include them by mistake, so children learn to check whether a character is a letter before counting it.

### Capitals carry meaning

Q appears three times in the names and always as a capital: in QUT Gardens Point, North Quay and UQ St Lucia. Changing case to compare letters is fine; changing it in the names themselves is not.

### Checking the total

Every count added together must equal the 245 letters counted directly. If it does not, a letter was missed or counted twice, and the child goes looking for it.

This project has no link to Translink, RiverCity Ferries or OpenStreetMap, nor to the ABS, and none of them has approved it. Census figures are the Bureau's own; the letter counts are our calculations.

The Queensland school year

## Prep to Year 8 on the Queensland calendar

Lessons follow Queensland's school year, so holidays and busy weeks are planned rather than missed.

| Term | Dates | Length |
| --- | --- | --- |
| Term 1 | Wednesday 27 January to Thursday 25 March | 9 weeks |
| Term 2 | Monday 12 April to Friday 25 June | 11 weeks |
| Term 3 | Monday 12 July to Friday 17 September | 10 weeks |
| Term 4 | Tuesday 5 October to Friday 10 December | 10 weeks |

### Prep is the first year

Queensland calls its first full-time school year Prep. Our youngest Brisbane learners are six, often in Prep or Year 1, and begin with blocks and pictures rather than typing.

### A long summer break

The department lists the 2027 to 2028 summer holidays as 44 days, from Saturday 11 December to Sunday 23 January. Some families keep one lesson a week going so skills do not fade.

### Same clock all year

Queensland does not use daylight saving, so Brisbane stays four and a half hours ahead of India time all year and lesson times never jump.

A term table is a data puzzle too

Term 1 runs for 9 weeks and Term 2 for 11, so not every term is the same length. Children who try to work out the number of school days quickly meet the same questions programmers ask: is the last day included, and do staff days count?

Learning ladder

## From tally marks to a Python dictionary

The bands are a starting guide. The free lesson decides the real level.

Ages 6 to 7

### Blocks and patterns

Sequences, repeats and simple events, with lots of predicting before pressing go.

[Coding for Kids](/courses/kids-coding-blocks-masterclass)[Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids)Ages 8 to 10

### Scratch with lists

Games and counters that use variables and lists, including the ferry stop letter tally.

[Scratch Coding for Kids](/courses/scratch-programming-complete-course)[Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)Ages 10 to 12

### Games with rules

Roblox and Minecraft worlds with scoring, timers and fair-play checks.

[Roblox Game Coding for Kids](/courses/roblox-game-coding-for-kids-lua-course)[Minecraft Coding for Kids](/courses/minecraft-coding-for-kids-course)Ages 12 to 14

### Typed code

Python dictionaries and loops on real data, with maths and coding side by side.

[Python and AI for Kids](/courses/python-ai-kids-masterclass)[Maths Through Coding](/courses/maths-through-coding)Coding and AI

## If an AI tool can count letters, why should a Brisbane child learn how?

Because the tool still has to be told whether a capital T counts, and a child who has never met that question will not think to ask it.

An AI helper will happily write a letter counter. Whether its answer is t or a tie between e and t depends on choices it makes silently: lower-casing or not, counting spaces or not, removing repeated stops or not. Each choice is reasonable and each gives a different answer. A child who has built the counter by hand recognises those choices in someone else's code straight away.

That is the real point of teaching young Brisbane coders: not to beat a computer, but to read a program and spot the decision hiding inside it. In our classes children use AI tools only in age-appropriate ways and always with a teacher, and they practise asking what a tool assumed before trusting what it says.

Coding still matters in 2026 because someone has to decide what the question really is. A child who found the e and t tie by counting capitals separately has already started doing that. The longer argument is in [why children should still learn to code](/blog/is-coding-worth-learning-2026).

Delivery

## From the bayside to the western suburbs, the same live lesson

Greater Brisbane covers a lot of ground, and the school pick-up rush is busy enough without a drive to a class. Lessons come to your home instead.

### Just a computer

A laptop or desktop, sound that works and a calm spot. Tablets are fine for the youngest children for a short while, but a keyboard helps soon after.

### Queensland words

Teachers use the year levels Brisbane children use at school, from Prep onwards, so lessons feel familiar.

### First lesson free

Your child finishes a small project in session one. Afterwards we recommend where to start and which weekday suits, and we never ask for card details.

### Matched groups

Fifteen to twenty children at the same stage, or one to one if that suits your child better.

### A steady rhythm

About eight lessons a month, usually two a week in a fixed slot that fits around sport and homework.

### Teachers on India time

Brisbane is four and a half hours ahead of India time all year, so a 4pm Brisbane lesson falls at 11:30am in India, in the middle of our teachers' day.

No daylight saving to worry about

Because Queensland keeps the same clock all year, a Brisbane lesson time agreed in March is still the same time in December. Times are always confirmed in Brisbane time.

Fees

## What coding classes cost for Brisbane kids

Three prices and nothing tucked away.

First class**USD 0**

A complete first lesson at no charge, finishing with a level, a course and a weekly time.

Group tuition**USD 100**

A month of teaching, usually eight lessons, with fifteen to twenty children at the same level.

Private tuition**USD 150**

Around eight lessons a month with one teacher and your child alone.

Families outside India pay in US dollars at a single rate, so it makes no difference whether you live in the inner north or out past Ipswich. Nothing is charged until you have seen the trial and picked a slot. Holidays, absences and a change from group to private are all covered on the pricing page.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20coding%20class%20for%20my%20child%20in%20Brisbane.)Reviews

## Google reviews from parents and students, word for word

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

## Tell us about your child

A Prep child might start by guiding a character with blocks, a Year 5 child by counting letters in Scratch, and a Year 8 student by writing a dictionary in Python. Share your child's year level and a favourite hobby.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Brisbane one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20coding%20class%20for%20my%20child%20in%20Brisbane.)

Submitted details are used for placement and follow-up.

FAQ

## Questions from Brisbane parents

What Brisbane families usually ask before booking.

### What age can my child start coding in Brisbane?

Our live classes start at age 6, usually in Prep or Year 1. Younger learners begin with blocks and pictures, and typing comes later.

### What is a dictionary in coding?

A dictionary is a way of storing pairs: a label and a value, such as a letter and how many times it has appeared. A program can look up a label instantly and change its value, which makes dictionaries ideal for counting.

### What is the Brisbane ferry letters project?

Children take 23 ferry stop names along the river from OpenStreetMap, remove repeated entries, and count every letter with a dictionary. Ignoring capitals, t wins with 25; counting capitals separately, e and t tie on 23.

### Why do the answers change with capitals?

Because to a computer a capital T and a small t are different symbols. QUT Gardens Point and Teneriffe contain capital Ts, so counting exactly as written moves two of t's 25 into a separate box.

### Do you follow the Queensland school year?

Yes. We use Queensland year levels from Prep to Year 8 and plan around the Queensland state school terms, which in 2027 begin on Wednesday 27 January.

### What time are lessons for Brisbane children?

After school on weekdays or on weekends, agreed during the free lesson and stated in Brisbane time. Brisbane has no daylight saving, so the time stays the same all year.

### How do you keep young children safe online?

Every session is live with a teacher watching the whole group, no child is asked to open an account on a grown-up AI service, and a parent can stay in the room for as long as they like.

### Is there a Modern Age Coders centre in Brisbane?

No, and none is claimed. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.

### What do coding classes for Brisbane kids cost?

The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.

### How big are the groups?

Fifteen to twenty learners, matched on level, pace and what they want to build rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.

Explore Australia

## More for Brisbane families

Teenagers and adults in Brisbane have their own page: [coding classes in Brisbane](/best-coding-classes-in-brisbane). For the state picture see [coding and AI classes in Queensland](/coding-and-ai-classes-in-queensland). Parents of younger children can also read [online coding classes for kids in Australia](/online-coding-classes-for-kids-australia) and [which coding language suits a child](/kids-coding-languages-australia). Everything else hangs off the [Australia coding page](/coding-classes-in-australia).

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20coding%20class%20for%20my%20child%20in%20Brisbane.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/coding-classes-for-kids-brisbane*
