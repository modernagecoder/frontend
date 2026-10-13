---
title: "RoboCup Junior Australia Coding Help: Challenges Explained"
description: "RoboCup Junior Australia explained: OnStage, Rescue Line, Rescue Maze, Soccer and the SPIKE Prime Challenge, the divisions, and the programming each one needs."
canonical: https://learn.modernagecoders.com/robocup-junior-australia-coding-help
source: src/pages/robocup-junior-australia-coding-help.html
---
> RoboCup Junior Australia explained: OnStage, Rescue Line, Rescue Maze, Soccer and the SPIKE Prime Challenge, the divisions, and the programming each one needs.

In short

RoboCup Junior Australia runs robotics challenges for school students in three areas: OnStage, Rescue (Line and Maze) and Soccer, each with an entry-level division, plus a LEGO SPIKE Prime Challenge. Teams are generally 2 to 4 students, robots must work autonomously, and events run at regional, state and national level. Programming, not building, is where most teams gain or lose points.

Where to start

## Three courses for robotics team members

Most RoboCup robots are programmed in blocks first and text later; these follow that path.

[![Scratch Coding for Kids course thumbnail](/images/scratch-kids.webp)  RCJ / 01 Scratch for kids Loops, conditions and events in blocks, the same ideas a SPIKE word-block program uses. Open the syllabus →](/courses/scratch-programming-complete-course)[![Python and AI for Kids course thumbnail](/images/python-kids.webp)  RCJ / 02 Python and AI for kids A first text language for primary students ready to move beyond blocks. Open the syllabus →](/courses/python-ai-kids-masterclass)[![Python for Teens course thumbnail](/images/python-teens.webp)  RCJ / 03 Python for teens For secondary students heading into the open divisions, where custom code is common. Open the syllabus →](/courses/python-complete-masterclass-teens)

The challenges

## Four challenge areas and a SPIKE Prime Challenge

RoboCup Junior Australia describes itself as a project-oriented educational initiative that supports local, regional and international robotic events for young students. Each challenge asks for something different from a team's code.

| Challenge | What the robot does | What the programming must handle |
| --- | --- | --- |
| OnStage | Performs a dance or theatrical piece to music on a 2 by 2 metre stage | Timing against the music, staying inside the boundary, repeatable moves |
| Rescue Line | Follows a winding line over tiles to a rescue area, then deals with "the victim" | Line following, gaps and obstacles, finding and moving an object |
| Rescue Maze | Explores a maze representing a damaged building and locates victims | Navigation, mapping, coping with holes, steps and ramps |
| Soccer | Two robots play against an opposing pair | Finding the ball, facing the right way, staying in the field |
| SPIKE Prime Challenge | An autonomous creation on a yearly theme, documented and filmed | A design the team explains through a learning journal and video |

The organiser's Beginners Guide splits RoboCup into three challenge areas: OnStage, Rescue (Line and Maze) and Soccer. Each has an entry-level division meant for beginners. Teams are generally between 2 and 4 students, and a school can enter several teams in any challenge.

Events run at regional, state and national level, and RoboCup Junior Australia also runs workshops. Each state and territory keeps its own event calendar on the organiser's site.

The 2026 SPIKE Prime Challenge, themed "Survivors of the Future: Robots on a New World", opened for entry on Monday 23 February 2026 and asked for all registrations and submissions by Friday 26 June 2026. It is only for teams using the LEGO SPIKE platform, and the robot cannot be remote controlled.

For the 2026 National Championships, the organiser announced a demonstration competition in Rescue Simulation, where teams program a virtual robot in the Webots-Erebus simulator instead of building a physical one.

Sources: [RoboCup Junior Australia home](https://www.robocupjunior.org.au/); [Beginners Guide](https://www.robocupjunior.org.au/resources/beginners/); [SPIKE Prime Challenge](https://www.robocupjunior.org.au/spike-challenge/); [2026 Rescue Simulation demo](https://www.robocupjunior.org.au/2026-rescue-simulation/). Read 7 October 2026. Entry fees are set by the organiser and are not shown.

Divisions

## From entry level to open, challenge by challenge

Divisions let beginners compete fairly while experienced teams push further. The names and limits below are the organiser's.

| Challenge | Entry level | Next steps | Top level |
| --- | --- | --- | --- |
| OnStage | Novice: every member has 2 years or less of OnStage experience | None listed | Open: any team may enter |
| Rescue Line | Riley Rover: primary and secondary students | Primary, then Secondary (adds tiles such as the "gridlock") | Open: for teams seeking a greater challenge, including international qualification |
| Rescue Maze | Mighty Maisy Maze | Intermediate Maze, added from 2025 | Open Maze |
| Soccer | Simple Simon (run at select events) and Standard | Lightweight | Open: an orange ball found with cameras and computer vision |

### Limits that shape the code

In Standard Soccer, robots must be built from LEGO parts (except certain sensors), weigh at most 1 kg and fit within a 22 cm cylinder, and they track a ball that emits infrared light. Lightweight allows any materials up to 1.4 kg in the same cylinder. Open Soccer swaps the infrared ball for a bright orange one, so robots need cameras and vision software.

In OnStage, the stage is a 2 by 2 metre square marked with a 50 mm black tape boundary. Performances must run longer than 1 minute and less than 2 minutes, with at most 6 minutes on stage, and marks are deducted when a robot completely leaves the area.

### What the step up really means

Moving up a division is mostly a programming jump. A Secondary Rescue Line robot must contain or grab the victim and either move it out of the spill or lift it onto a platform, instead of simply pushing it. That needs a sequence of states, not one long block of instructions.

The organiser notes that in Rescue Maze the challenge changes every round, and that a less complex but more reliable robot may beat a theoretically stronger one. Reliability is a coding habit: testing every branch, not just the one that worked last time.

Worked lesson

## Timing an OnStage routine to the beat

OnStage robots perform to music, and judges notice immediately when a robot drifts behind the song. The fix is arithmetic, not luck. This example is ours.

### Beats into milliseconds

Songs are described in beats per minute. One minute is 60,000 milliseconds, so one beat lasts 60,000 divided by the tempo. At 120 beats per minute a beat is 500 ms; at 96 it is 625 ms.

### Fit the time limit

A routine must run longer than 1 minute and less than 2. At 96 beats per minute, 128 beats take 128 times 625 ms, which is 80 seconds, comfortably inside the window.

### Plan in phrases

Music groups beats in bars of four and phrases of eight bars. At 96 beats per minute an eight-bar phrase is 32 beats, which is exactly 20 seconds. Four phrases make the 80-second routine.

| Beats danced | Planned time | Each move actually takes 640 ms, not 625 | Behind the music |
| --- | --- | --- | --- |
| 8 | 5.0 s | 5.12 s | 0.12 s |
| 32 | 20.0 s | 20.48 s | 0.48 s |
| 64 | 40.0 s | 40.96 s | 0.96 s |
| 128 | 80.0 s | 81.92 s | 1.92 s |

Motors take a moment to start and stop, so a move programmed as one beat often runs a little long. Fifteen extra milliseconds per move sounds harmless; after 128 beats the robot is almost two seconds late, which an audience can see. Chaining waits one after another lets those errors pile up. The steadier method is to start a timer when the music starts and, at the beginning of every phrase, wait until the timer reaches the phrase's planned start: 0, 20, 40 and 60 seconds in this example. Each phrase then begins on time, and the error can never grow beyond one phrase.

### Trying it in class

Students first measure the real duration of one move by running it ten times and dividing the total. Then they calculate the drift over a whole routine, predict it, and run the routine with a stopwatch to compare.

Next they rewrite the program so each phrase waits for the timer, and run it again. Seeing the error vanish is usually the moment a team stops trusting guesswork.

### Where the same idea reappears

Resynchronising against a clock instead of adding up delays is how games keep animation smooth and how music software keeps tracks together. It is a real engineering pattern, met here first on a 2 metre stage.

The same thinking helps Rescue and Soccer teams: a robot that checks its sensors at a steady rate behaves the same way every run, while one with uneven delays is hard to debug.

How we help

## Programming help, while the robot stays the team's own

RoboCup is a team project. Our part is to make each member a stronger programmer, so the team's own robot does what the team designed it to do.

Lessons cover the ideas behind every challenge: loops and conditions, reading sensors, thresholds, simple states for multi-step tasks, and timing. Students practise on small exercises and on their own code, explaining each decision.

For younger teams we start in blocks. SPIKE kits can be programmed in word blocks, icon blocks or Python, as FIRST Australia notes for its LEGO programs, so moving a team member from blocks to Python is a natural next step.

We never write a team's competition program or design its robot. The SPIKE Prime Challenge page asks that a team's creation be its own design, and judges in OnStage interview teams about their technical work. A student who has learned the ideas can answer those questions honestly.

We do not promise a placing or a trophy. We teach the programming and debugging habits that make a robot reliable, and the team does the rest.

| Weeks | Focus | Sign of progress |
| --- | --- | --- |
| 1 and 2 | Loops, conditions and events in blocks | Predicts what a short program will do before running it |
| 3 and 4 | Sensors and thresholds | Chooses a light threshold from measured readings, not a guess |
| 5 and 6 | Timing and synchronisation | Keeps a routine on the beat for its full length |
| 7 and 8 | States for multi-step tasks | Writes a clear sequence such as find, grab, carry, release |
| 9 and 10 | Testing and debugging | Keeps a test log and fixes one problem at a time |

Growing as a robot programmer

## Four rungs from first robot to open division

Year level matters less than how a student programs.

| Around | Rung | The sign it is secure |
| --- | --- | --- |
| Upper primary | 1. Moves on purpose | Makes the robot drive a set distance and turn a set angle |
| Upper primary to Year 8 | 2. Reacts to the world | Uses a sensor reading to change what the robot does |
| Years 7 to 10 | 3. Plans in steps | Breaks a task into states and handles each one cleanly |
| Years 9 to 12 | 4. Reliable under change | Tests every branch and keeps working when the field changes |

### When a run goes wrong

Write down what the robot did and what it should have done before changing any code. Most fixes come from that one sentence.

Change one thing at a time. A team that changes three things at once never learns which one mattered.

### Related reading

The [Australian competitions calendar](/australian-coding-maths-and-ai-competitions-calendar) lists other coding and maths contests across the year.

Teams also often enter [FIRST LEGO League in Australia](/first-lego-league-australia-coding-help), which uses SPIKE kits too.

The catalogue

## Nine courses for robotics students

From first blocks to code an open division needs. Each card opens the full syllabus.

I

### Blocks

Primary team members

RCJ / BL / 01

#### Scratch for kids

Events, loops and conditions.

[Open the syllabus](/courses/scratch-programming-complete-course)

RCJ / BL / 02

#### Coding for kids

Blocks to games and simple apps.

[Open the syllabus](/courses/kids-coding-blocks-masterclass)

RCJ / BL / 03

#### Computational thinking

Breaking a task into steps.

[Open the syllabus](/courses/problem-solving-and-computational-thinking-for-kids)II

### Text code

Moving to Python

RCJ / TX / 01

#### Python and AI for kids

A gentle first text language.

[Open the syllabus](/courses/python-ai-kids-masterclass)

RCJ / TX / 02

#### Python for teens

Functions, files and structure.

[Open the syllabus](/courses/python-complete-masterclass-teens)

RCJ / TX / 03

#### Maths through coding

Angles, distances and timing in code.

[Open the syllabus](/courses/maths-through-coding)III

### Advanced

Open divisions and beyond

RCJ / AD / 01

#### Problem solving for teens

Searching, states and efficient logic.

[Open the syllabus](/courses/problem-solving-dsa-masterclass-teens)

RCJ / AD / 02

#### Data science for teens

Reading sensor logs like data.

[Open the syllabus](/courses/data-science-course-for-teens-python-data)

RCJ / AD / 03

#### Competitive programming

Fast, correct code under pressure.

[Open the syllabus](/courses/competitive-programming-for-teens-course)

How lessons run

## Online programming lessons around team practice

Lessons are taught live from India. Australian clocks run ahead of India's: Brisbane is four and a half hours ahead of India time all year, and Adelaide is four hours ahead in winter and five in summer. A lesson after an Australian school day falls in the Indian afternoon, so it slots easily around a team's practice nights.

A weekday afternoon

Programming ideas, practised on small exercises.

A weekend session

Reviewing the student's own robot code together.

Before an event

Testing and debugging habits, run by run.

### Ideas first

Students learn why a program works, so they can fix it on the day.

### Their robot, their code

We explain and question; the team writes and builds.

### Blocks to Python

A clear path from SPIKE blocks to text code.

### Groups of fifteen to twenty

Students at a similar level comparing approaches.

### One-to-one option

For a team's lead programmer who wants to go further.

### No placing promised

We teach programming; judges and referees decide results.

Student work

## Projects our students have built

Built because students wanted to, apart from any competition. Browse them in the [student labs](/student-labs).

![NutriLife AI nutrition coach project screenshot](/images/projects/nutrilife.webp)

AI and ML

#### NutriLife

An AI nutrition coach that reads what you eat and works you toward a target.

by Bhavya · [Open it](https://nutrilife-bhavya.lovable.app)

![Misti AI chatbot for maths and coding screenshot](/images/projects/misti.webp)

AI and ML

#### Misti

A chatbot that answers mathematics and programming questions, built and deployed by a student.

by Harshit · [Open it](https://misti.modernagecoders.com)

![GuardianX AI internet safety assistant screenshot](/images/projects/guardianx.webp)

AI and ML

#### GuardianX

An assistant that helps a young person recognise unsafe situations online.

by Vivaan · [Open it](https://guardianx-cybersaver.lovable.app)

![SkyCast weather forecast application screenshot](/images/projects/skycast.webp)

Web app

#### SkyCast

A weather forecasting site with live conditions for any location.

by Krish

Fees

## Fees

Programming lessons are charged monthly in US dollars, our international rate, without a joining fee or a lock-in. Any RoboCup entry fee or kit purchase is separate and paid to the organiser or supplier, not to us.

Free first class

USD 0

no card required

- A first lesson with a teacher, free
- A look at the student's current code if they have some
- No card needed

Book it

Group batch

USD 100

a month, billed in US dollars

- Fifteen to twenty students at a similar level
- The same teacher through the term
- Programming ideas tested on shared exercises
- A certificate on completion

Start here

One to one

USD 150

a month, billed in US dollars

- A teacher for one student
- Time spent on that student's own robot code
- Weekly times that fit team practice

Enquire

What families say

## Rated 4.9 across 547 Google reviews

Reviews from our Google listing, left exactly as written.

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

Questions about RoboCup Junior

## What students and parents ask

### What is RoboCup Junior Australia?

A project-oriented educational initiative, in the organiser's words, that supports local, regional and international robotics events for school students, in OnStage, Rescue and Soccer challenges.

### Which challenge suits a beginner?

Each challenge has an entry-level division, such as Novice OnStage, Riley Rover Rescue Line, Mighty Maisy Maze and Standard Soccer. OnStage is often a gentle start because any platform can be used.

### How big is a RoboCup team?

The organiser's Beginners Guide says teams are generally between 2 and 4 students, and schools can enter multiple teams in any challenge.

### How long is an OnStage performance?

Longer than 1 minute and less than 2 minutes, with a maximum of 6 minutes on stage, on a 2 by 2 metre square marked with black tape.

### What is the SPIKE Prime Challenge?

A nationally coordinated RoboCup Junior Australia challenge for teams using LEGO SPIKE. The 2026 theme was "Survivors of the Future: Robots on a New World", with everything due by Friday 26 June 2026.

### What is beats per minute?

The tempo of a piece of music: how many beats fall in one minute. Divide 60,000 by the tempo to get milliseconds per beat, which is how a robot routine is timed to a song.

### Do robots have to be autonomous?

Yes. RoboCup Junior robots must work without remote control; soccer robots, for example, must find the ball, face the right way and stay in the field on their own.

### Will you program our robot for us?

No. We teach team members programming and debugging so the team can program its own robot. Judges expect a team's work to be its own.

### Do we need to buy a kit first?

Not for lessons. Many programming ideas can be learned in Scratch or Python before a kit arrives, and then applied to the team's robot.

### Can lessons help with Rescue Simulation?

Yes, in the programming sense. The 2026 demonstration competition uses a virtual robot in the Webots-Erebus simulator, so navigation and mapping code matter more than hardware.

Related pages

## More for Australian students

Other competitions and coding pathways.

### [Competitions calendar](/australian-coding-maths-and-ai-competitions-calendar)

Coding and maths contests by month.

### [FIRST LEGO League](/first-lego-league-australia-coding-help)

Another robotics program using SPIKE.

### [Game development for kids](/game-development-for-kids-australia)

Programming that moves things on screen.

### [After Scratch, Python](/after-scratch-next-step-python-australia)

The step from blocks to text.

### [Coding classes in Australia](/coding-classes-in-australia)

Every state and every age.

### [Coding classes for kids](/online-coding-classes-for-kids-australia)

What an online class looks like.

Start here

## Start with a free programming class

Tell us the year level, the challenge and how the team programs now. The free class works on one real programming idea from that challenge and ends with a practical next step.

Want to look around first? All course outlines are on the [course atlas](/course-atlas), and [how we teach](/how-we-teach) walks through a lesson.

[WhatsApp us](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20class%20about%20programming%20for%20a%20RoboCup%20Junior%20team%20in%20Australia.) · [+91 91233 66161](tel:+919123366161) · [connect@modernagecoders.com](mailto:connect@modernagecoders.com)

WhatsApp is normally the quickest way to reach us. The number is Indian, because that is where we are based; there is no Australian office.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/robocup-junior-australia-coding-help*
