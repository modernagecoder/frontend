---
title: "FIRST LEGO League Australia: Coding Help for Teams"
description: "FIRST LEGO League in Australia: Explore, Challenge and the new Future Edition, the 2026-2027 BIOGLOW season, and the coding a 2:30 robot game run needs."
canonical: https://learn.modernagecoders.com/first-lego-league-australia-coding-help
source: src/pages/first-lego-league-australia-coding-help.html
---
> FIRST LEGO League in Australia has three divisions: Explore for ages 6 to 10, Challenge for ages 9 to 16, and Future Edition for ages 8 to 16, new for 2026-2027. The 2026-2027 season is BIOGLOW, on biodiversity. Challenge robots run autonomous 2:30 matches and can be coded in Word Blocks, Icon Blocks or Python, according to FIRST Australia.

[Home](/) / [Coding classes in Australia](/coding-classes-in-australia) / FIRST LEGO League Australia

Australia · Years 1 to 10 · Checked at FIRST Australia

# FIRST LEGO League Australia coding help

FIRST LEGO League gives Australian students a real engineering season: a themed problem to research, a LEGO robot to design and program, and a robot game where every second of a two and a half minute run counts. Many teams build an impressive robot and then lose points because it stops a few centimetres short of a mission model. That is usually a programming problem, and it is fixable. This page explains the divisions and the 2026-2027 season as FIRST Australia publishes them, then shows the arithmetic behind accurate driving. We are independent of FIRST and help students program; the robot and the season's work stay the team's own.

At a glance: Program: FIRST LEGO League; In Australia: FIRST Australia; 2026-2027 season: BIOGLOW, part of FIRST CANOPY; Divisions: Explore, Challenge, Future Edition; Robot match length: 2:30, autonomous; Coding options: Word Blocks, Icon Blocks or Python; We provide: Programming lessons for team members; We are not: FIRST, a judge or a robot builder. Rated 4.9 across 547 Google reviews.

## Three courses for FIRST LEGO League team members

Blocks first, then text, with plenty of attention to movement and measurement.

- [Coding for kids](/courses/kids-coding-blocks-masterclass): Loops, conditions and procedures in blocks, the same building blocks as a SPIKE word-block program.
- [Python and AI for kids](/courses/python-ai-kids-masterclass): For team members ready to try the Python option FIRST Australia lists.
- [Maths through coding](/courses/maths-through-coding): Circumference, ratios and angles used in code, which is exactly what accurate driving needs.

## Explore, Challenge and the new Future Edition

FIRST Australia's program comparison sets out who each division is for and how it runs. These are its figures, read on 7 October 2026.

**FIRST LEGO League divisions in Australia, 2026-2027**

|  | Explore | Challenge | Future Edition |
|---|---|---|---|
| Students | Ages 6 to 10 (Years 1 to 4) | Ages 9 to 16 (Years 4 to 10) | Ages 8 to 16 (Years 3 to 10) |
| Team size | Up to 6 students | Up to 10 students | Up to 8 students |
| Coaches | At least 1 | At least 2 | At least 2 |
| Robot game | No matches; models built and shared | Autonomous matches of 2:30 | Autonomous matches of 2:30 |
| Technology | LEGO Education SPIKE Essential | LEGO Education SPIKE Prime | LEGO Education Computer Science and AI kits |
| Events | 12 Explore festivals and a National Festival in December, Sydney | 70+ qualifying competitions and national championships in December | Qualifying events to be confirmed; national championship in December, Sydney |
| Weekly time, approx. | 1 hour | 2 hours | 2 hours |

Challenge, the best-known division, lists 950 or more teams nationally and four national championships in December, in Sydney, Perth, Melbourne and Brisbane. Explore lists 380 or more teams. Future Edition is in its first season in 2026-2027.

For every division, FIRST Australia lists Word Blocks, Icon Blocks or Python as coding options, and says teams can be school or community based.

Registrations opened on May 25, 2026 and the season kicked off on August 4, 2026, so teams are now in the build-and-practise stretch of the year.

Older students can move on to FIRST Tech Challenge, for ages 12 to 18, and FIRST Robotics Competition, for ages 14 to 18, which FIRST Australia describes in the same comparison.

Sources: [FIRST Australia, compare programs](https://www.firstaustralia.org/compare-programs); [FIRST Australia, FIRST LEGO League](https://www.firstaustralia.org/first-lego-league). Read 7 October 2026. Registration costs, kit costs and budgets printed there are not repeated here.

## BIOGLOW, and what a season asks of a team

Each FIRST LEGO League season has a theme. For 2026-2027 it is BIOGLOW, part of the global FIRST CANOPY season, on biodiversity.

FIRST Australia describes BIOGLOW as an invitation to explore the variety of life on the planet, from microscopic organisms and glowing fungi to plants, animals and the ecosystems that connect them. Teams investigate real-world challenges, develop solutions, and design and code LEGO robots.

To support the theme, Macquarie University's Faculty of Science and Engineering has produced a series of videos with biodiversity and conservation experts, according to FIRST Australia.

For Challenge teams, the season has two strands that both need programming thinking: the robot game, where an autonomous robot attempts missions on a shared table, and an innovation project researched and presented by the team.

FIRST Australia offers free training modules for coaches, educators and volunteers, covering team management, robot building and programming, and competition preparation.

**Where programming shows up across a Challenge season**

| Stage of the season | Programming task | What good looks like |
|---|---|---|
| Early weeks | Drive straight and turn accurately | The robot lands within a few millimetres, run after run |
| Middle weeks | One mission at a time | Each mission is its own short, named program |
| Later weeks | Chain missions into one run | Missions start from known positions, not from where the last one ended |
| Before events | Reliability testing | Every program is tested many times and failures are logged |
| Judging | Explaining the code | Every team member can describe how the robot decides what to do |

## Motor degrees into millimetres, and why small errors grow

Most robot game misses come from distance, not from strategy. The arithmetic below is ours; the wheel sizes are examples, so measure your own.

### One turn of the wheel

A wheel moves the robot one circumference per full turn: pi times the diameter. Suppose the wheel is 56 mm across. One turn moves the robot about 175.9 mm.

### Degrees for a distance

Motors are usually told how many degrees to turn. For 500 mm: 500 divided by 175.9 is about 2.842 turns, and 2.842 times 360 is about 1,023 degrees.

### The hidden error

Tyres squash a little, so the wheel may act like 55 mm, not 56. Then 1,023 degrees moves only about 491.1 mm, almost 9 mm short of the mission.

**Programmed for a 56 mm wheel, driven on one that behaves like 55 mm (our calculation)**

| Planned distance | Degrees programmed | Actual distance | Short by |
|---|---|---|---|
| 250 mm | 512 | 245.5 mm | 4.5 mm |
| 500 mm | 1,023 | 491.1 mm | 8.9 mm |
| 1,000 mm | 2,046 | 982.1 mm | 17.9 mm |
| 2,000 mm | 4,093 | 1,964.3 mm | 35.7 mm |

The shortfall is always the same fraction, here 1 part in 56, so it grows in step with distance. Over a single short move it hardly matters; across a two and a half minute run that drives two metres or more, the robot can finish several centimetres from where the program believes it is, and a mission model is missed by a whisker. Two habits fix most of this. First, measure the real distance per turn by driving a known number of degrees and measuring with a ruler, then use that measured value in the program instead of the printed wheel size. Second, give the robot something real to line up against during a run, such as a wall or a line on the table, so each mission starts from a known position and errors cannot carry over.

### The same idea for turns

Turning on the spot works the same way, except the distance is part of a circle traced by the wheels. Small differences between the left and right wheels make a robot curve gently, which is why a gyro sensor reading is often used to correct the heading.

Students who calculate a turn, test it and adjust from measurements learn more than those who keep nudging numbers by trial and error.

### Why judges care

Being able to explain how a program achieves accuracy is part of describing a robot's design. A team member who can say "we measured 172.8 mm per turn and line up on the wall before mission three" shows real understanding.

The same measuring habit carries into secondary maths and science, where calibrating an instrument before trusting it is standard practice.

## Making team members stronger programmers

FIRST LEGO League is a team's own season. Our role is to teach programming and debugging so the team's robot does what the team intends.

Lessons cover movement and measurement, sensors such as colour and gyro, splitting a run into named missions, starting each mission from a known position, and testing until a result is repeatable. Students work on small exercises and then explain how they would apply the idea to their own robot.

For students ready for text code, we introduce Python gently, since FIRST Australia lists it alongside Word Blocks and Icon Blocks. The ideas transfer directly; only the notation changes.

We do not write a team's robot game programs, design its robot or prepare its innovation project. Coaches and team members do that work, and judges expect it.

We do not promise an award, a place at a national championship or any result. We teach the habits that make a robot reliable, which is what a season rewards.

**A term of programming support for a Challenge team member**

| Weeks | Focus | Sign of progress |
|---|---|---|
| 1 and 2 | Measuring distance per turn | Drives 500 mm within a few millimetres, three times running |
| 3 and 4 | Accurate turns with a gyro | Turns 90 degrees and recovers if nudged |
| 5 and 6 | Missions as named programs | Can run any mission on its own from a known start |
| 7 and 8 | Lining up on the table | Uses a wall or line to reset position between missions |
| 9 and 10 | Testing and explaining | Keeps a run log and explains each design choice |

## Four rungs from Explore to Challenge and beyond

Divisions follow age, but skill grows in its own order.

**From first moving model to a reliable robot run**

| Around | Rung | The sign it is secure |
|---|---|---|
| Years 1 to 4 | 1. Makes a model move | Builds and codes a moving model in Explore |
| Years 4 to 6 | 2. Moves accurately | Drives and turns by measured amounts |
| Years 6 to 8 | 3. Plans a run | Splits a run into missions with known start points |
| Years 8 to 10 | 4. Engineers reliability | Tests, logs and fixes until runs repeat |

### When the robot misses

Measure before changing code. Was it short, long, or turned? Each points to a different fix.
Run the same program five times. One miss is noise; five misses the same way is a pattern you can fix.

### Related reading

For another robotics competition, see [RoboCup Junior Australia coding help](/robocup-junior-australia-coding-help).
The [competitions calendar](/australian-coding-maths-and-ai-competitions-calendar) lists coding and maths contests through the year.

## Nine courses for FIRST LEGO League students

Grouped from first blocks to text code and reasoning. Each card opens its syllabus.

### First coding

Explore and early Challenge

- [Coding for kids](/courses/kids-coding-blocks-masterclass): Blocks, loops and procedures.
- [Scratch for kids](/courses/scratch-programming-complete-course): Programs you can watch run.
- [Computational thinking](/courses/problem-solving-and-computational-thinking-for-kids): Breaking a mission into steps.

### Measurement and maths

Accurate robots

- [Maths through coding](/courses/maths-through-coding): Circumference, ratio and angle in code.
- [Mental maths for kids](/courses/mental-maths-mastery-kids): Quick estimates before testing.
- [Middle years maths](/courses/comprehensive-middle-school-mathematics-mastery): Geometry behind turning and driving.

### Text code

Python and beyond

- [Python and AI for kids](/courses/python-ai-kids-masterclass): A first text language.
- [Python for teens](/courses/python-complete-masterclass-teens): Structure for longer programs.
- [Problem solving for teens](/courses/problem-solving-dsa-masterclass-teens): Logic for harder challenges.

## Live online lessons that fit around team meetings

Teachers work from India, behind Australian clocks: Melbourne is four and a half hours ahead of India time in winter and five and a half in summer, and Perth two and a half all year. An Australian after-school lesson therefore runs in the Indian afternoon, so it can sit alongside a team's weekly meeting.

- **Weekday afternoon** A programming idea learned and practised.
- **Weekend session** Applying the idea to the student's own robot.
- **Before a tournament** Reliability testing and explaining the code.

- **Measure, then code** Students use real measurements instead of guessed numbers.
- **The team's robot** We teach and question; the team builds and programs.
- **Blocks or Python** Whichever the team uses, with a path to the other.
- **Groups of five to ten** Students at a similar level sharing methods.
- **One-to-one option** For the team member leading the programming.
- **No result promised** Referees and judges decide; we build the skills.

## Fees

Lessons are billed each month in US dollars at our international rate, with no joining fee and no contract. Team registration and kits are bought separately from FIRST Australia and its suppliers, not through us.

- Free first class: USD 0. A first lesson that costs nothing. A look at how the student programs now. No card details.
- Group batch: USD 100 a month. Five to ten students at one level. One teacher for the whole term. Movement and sensor exercises done together. A certificate on finishing.
- One to one: USD 150 a month. A teacher for a single student. Time on that student's own team programs. Times arranged around team meetings.

## What families and coaches ask

### What is FIRST LEGO League?

A global robotics program in which teams research a themed problem and design, build and code LEGO robots. In Australia it is run by FIRST Australia in three divisions: Explore, Challenge and Future Edition.

### Which division suits my child?

Explore is for ages 6 to 10 (Years 1 to 4), Challenge for ages 9 to 16 (Years 4 to 10) and Future Edition for ages 8 to 16 (Years 3 to 10), according to FIRST Australia.

### What is the 2026-2027 season theme?

BIOGLOW, part of the global FIRST CANOPY season, which explores biodiversity from glowing fungi to whole ecosystems.

### How long is a robot game match?

Challenge and Future Edition matches run for 2:30 and the robot is autonomous. Explore has no matches; teams build and share models instead.

### What coding languages can teams use?

FIRST Australia lists Word Blocks, Icon Blocks or Python for its FIRST LEGO League divisions.

### What is wheel circumference, and why does it matter?

The distance around a wheel, equal to pi times its diameter. It is how far a robot travels in one full wheel turn, so it turns motor degrees into millimetres.

### How many students are in a team?

Up to 6 in Explore, up to 10 in Challenge and up to 8 in Future Edition, with at least one coach for Explore and two for the others.

### Will you program our robot?

No. We teach team members programming, measurement and debugging so the team can program its own robot and explain it to judges.

### When are the national championships?

FIRST Australia lists Challenge national championships in December in Sydney, Perth, Melbourne and Brisbane, and a Future Edition championship in December in Sydney.

### Can lessons start mid-season?

Yes. Many students join once a robot exists and the team discovers its runs are not repeatable, which is exactly what the lessons address.

## More for Australian students

- [RoboCup Junior Australia](/robocup-junior-australia-coding-help): Dance, rescue and soccer robots.
- [Competitions calendar](/australian-coding-maths-and-ai-competitions-calendar): Every contest by month.
- [After Scratch, Python](/after-scratch-next-step-python-australia): Moving from blocks to text.
- [Coding for Year 7](/coding-for-year-7-australia): The first year of secondary coding.
- [Coding classes in Australia](/coding-classes-in-australia): Every state and every age.
- [Coding classes for kids](/online-coding-classes-for-kids-australia): What an online class looks like.

## Contact

Book the free first class at [https://learn.modernagecoders.com/first-lego-league-australia-coding-help](https://learn.modernagecoders.com/first-lego-league-australia-coding-help#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
