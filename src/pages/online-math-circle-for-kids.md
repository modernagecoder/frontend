---
title: "Online Math Circle for Kids: What It Is and How to Join"
description: "Online math circle for kids: what a math circle is, where US circles come from, how to find one near you or online, and an original circle-style puzzle."
canonical: https://learn.modernagecoders.com/online-math-circle-for-kids
source: src/pages/online-math-circle-for-kids.html
---
> A math circle is a community focused on the enjoyment of mathematical problem solving, where students meet regularly with mathematicians to explore challenging problems together. In the US, the Math Circle Network, a project of the American Institute of Mathematics, maps hundreds of circles, some online. Modern Age Coders is not a math circle, but we teach in the same spirit: live online problem-solving classes in our olympiad and competition math course, as a group of 15 to 20 or one to one.

[Home](/) / [Courses](/courses) / [Coding classes in the USA](/coding-classes-in-united-states) / Online math circle for kids

United States · Grades 3 to 12 · Math circles

# Online math circle for kids: explore, argue, discover

A math circle is not a class and not a tutoring session. It is a small group of children and a mathematician working on one rich problem, arguing about it, getting stuck and finding a way through. Many children who find school math too easy discover in a circle that math is actually hard, and wonderful. This guide explains what math circles are, in the words of the US Math Circle Network, how to find one near you or online, and gives you a complete circle-style exploration to try at the kitchen table.

At a glance: What: Problem-solving math communities; US network: Math Circle Network (AIM); Circles in the US: Hundreds, per the network; Formats: Local, family and online; Our classes: Circle-style, live online; Ages: Grades 3 to 12; Timing: Weekdays or weekends, flexible; Start: A free first class. Rated 4.9 across 547 Google reviews.

## Three courses for a child who loves a hard problem

Each puts discussion and reasoning ahead of speed, the way a good circle does.

- [Olympiad and competition math](/courses/olympiad-competition-mathematics-mastery): Rich problems, proof and contest skills for grades 6 and up.
- [Middle school competition math](/courses/middle-school-math-competitions-course): MATHCOUNTS and AMC 8 problem solving for grades 5 to 8.
- [Problem solving for younger kids](/courses/problem-solving-and-computational-thinking-for-kids): Logic, patterns and puzzles for grades 3 to 6.

## What is a math circle?

The Math Circle Network defines it simply: "Math Circles are communities focused on the enjoyment of mathematical problem solving." Meetings, it says, are lively, interactive and often "funstrating": challenging, but rewarding.

### Three kinds of circle

The network describes Math Student Circles (after-school programs for students), Math Teacher Circles (professional learning for teachers and mathematicians) and Family Math Circles for parents and families who want to do mathematics together.

For children, a student circle is the usual door. Some circles welcome a parent alongside a younger child, which is a lovely way to start.

### Where the idea comes from

According to the network, the model of students meeting regularly with mathematics professionals to solve problems "originated in Eastern Europe more than 100 years ago".

In the United States, the first student circles began "in Boston in 1994 and in the San Francisco Bay Area (Berkeley and San Jose) in 1998". The first Math Teacher Circle was founded in 2006 at the American Institute of Mathematics.

**Math circle, school class and tutoring compared (our summary)**

| Question | Math circle | School class | Tutoring |
|---|---|---|---|
| Main aim | Enjoying hard problems | Covering the syllabus | Fixing gaps, homework |
| Typical problem | One rich question for a whole session | Many short exercises | Whatever is due |
| Who talks most | The students | The teacher | Both |
| Getting stuck | Expected and welcome | Often a problem | The reason to book |

Source: [Math Circle Network, About](https://mathcircles.org/about/), read 31 October 2026. Modern Age Coders is not a math circle and has no connection with the Math Circle Network, the American Institute of Mathematics or any circle named on this page.

## How do I find a math circle near me or online?

Start with the Math Circle Network's map, which lists circles by level and marks those that meet online. University math departments run many of the longest-running circles too.

### The national network

The Math Circle Network calls itself "A National Network of Local Math Communities". It is "a project of the American Institute of Mathematics (AIM), a nonprofit mathematical sciences research institute supported by the National Science Foundation".

The network says "There are hundreds of Math Circles around the U.S." Its map lets you filter by elementary, middle and high school, and some entries are tagged Online. In 2020 AIM also became host of the National Association of Math (Student) Circles.

### Starting your own

If there is no circle nearby, the network helps people start one. Its organizer pages offer planning toolkits and a 2026 New Math Circle Training and Mentoring Cohort for new leadership teams.

It also says "Our network provides free resources for all U.S.-based Math Circles", including an activities database and MathCircular, which it describes as "a free semi-annual magazine".

**Two university math circles, from their own pages (read 31 October 2026)**

| Circle | When and where | Online? | Note from its page |
|---|---|---|---|
| Stanford Math Circle (Stanford Pre-Collegiate Studies) | Quarter-long, after-school sessions, weekly on Tuesdays, Wednesdays or Thursdays | Yes: "Students from any geographic location are welcome to enroll in the online classes." | Emphasizes "discussion and group problem solving" |
| Berkeley Math Circle | Weekly on Wednesday evenings at UC Berkeley | Mainly in person | "Emulating famous Eastern European models"; the BMC-Upper group will not run in fall 2026 and spring 2027 |

Sources: [mathcircles.org](https://mathcircles.org/) (home, map and organizer pages), [Stanford Math Circle](https://spcs.stanford.edu/programs/stanford-math-circle) and [Berkeley Math Circle](https://mathcircle.berkeley.edu/), read 31 October 2026. Schedules change by term; check each circle before applying.

## What does a math circle problem look like? The hundred lockers

A circle problem is easy to state, impossible to finish by guessing, and has a beautiful reason behind the answer. This one is a classic of the genre; the walkthrough and wording are ours.

### The problem

A hallway has 100 closed lockers, numbered 1 to 100. Student 1 opens every locker. Student 2 changes every second locker (closes it if open, opens it if closed). Student 3 changes every third locker, and so on, up to student 100.

When all 100 students have passed, which lockers are open? A circle leader would not let anyone answer yet. First: try it with 10 lockers.

### Explore small cases (ours)

With 10 lockers, children usually find that lockers 1, 4 and 9 end up open. Someone says "those are square numbers!" That is a conjecture, not yet an answer.

Now the circle question: why squares? Locker 12 is changed by students 1, 2, 3, 4, 6 and 12, its six factors. Six changes means open, closed, open, closed, open, closed: it ends closed.

1. The key idea (ours). A locker ends open only if it is changed an odd number of times, so only if its number has an odd number of factors.
2. Why factors usually pair up. Factors come in pairs: for 12, 1 with 12, 2 with 6, 3 with 4. Pairs make an even count.
3. The exception. For 36, the pair 6 x 6 uses the same number twice, so 6 is counted once. 36 has 9 factors: an odd number. Only perfect squares have an unpaired factor.
4. The answer. The open lockers are the squares 1, 4, 9, ..., 100: ten lockers. We checked it by simulating all 100 students in Python.
5. Extend it. Which lockers are changed exactly twice? (The primes.) A good circle ends with a new question.

## What happens in a math circle session?

Most circles follow a similar rhythm: a problem is posed, students work on it in small groups, ideas are shared and argued over, and the leader helps the group turn a pattern into an explanation. The timings below are our own sketch of a 75-minute session.

**A 75-minute circle-style session (our sketch)**

| Part | Minutes | What happens |
|---|---|---|
| Warm-up | 10 | A quick puzzle everyone can start |
| The big problem | 5 | Stated simply, with no method given |
| Explore in pairs | 25 | Small cases, drawings, tables |
| Share and argue | 20 | Groups present conjectures; others test them |
| Why it works | 10 | The group builds the explanation together |
| One more question | 5 | An extension to take home |

### What makes it work

Silence is allowed. Leaders wait rather than rescue, because the stuck moment is where the learning happens.

Wrong ideas are valuable. A conjecture that fails on the next case teaches the whole room why we test before we believe.

### Is my child ready?

Readiness is about attitude more than level. A child who enjoys a puzzle, can stay with it for twenty minutes and likes talking about ideas is ready, whatever their grade.

Children who are used to always being right sometimes find the first circle hard. That is normal, and usually the start of something good.

## What problems can we explore at home like a math circle?

Pick one per evening. Explore small cases first, look for the pattern, then ask why. The problems and answers are ours, each checked in Python.

**Five circle-style explorations with answers (ours)**

| Exploration | Start with | Answer |
|---|---|---|
| You climb 10 stairs, taking 1 or 2 steps at a time. How many different ways? | Count for 1, 2, 3 and 4 stairs; each total is the sum of the two before | 89 |
| Twelve people each shake hands once with everyone else. How many handshakes? | Each person shakes 11 hands; every handshake is counted twice | 66 |
| Cut two opposite corners off a chessboard. Can 31 dominoes cover the rest? | Color the squares; each domino covers one black and one white | No |
| What is the 2026th odd number? | The nth odd number is 2n - 1 | 4051 |
| In the locker problem, how many lockers stay open with 100 students? | Count the perfect squares up to 100 | 10 |

1. Week 1 (our plan for families). One exploration, done together, with paper and colored pens. No hints for the first ten minutes.
2. Week 2. Your child explains the answer to someone who was not there. Explaining is half of mathematics.
3. Week 3. Look on the Math Circle Network map for a local or online circle, and try a session.
4. Week 4. Decide: a circle, a weekly problem-solving class, or both.

If your child also enjoys contests, see our [middle school math competitions guide](/math-competitions-for-middle-school-students), [MATHCOUNTS preparation](/mathcounts-preparation) and [Math Kangaroo USA](/math-kangaroo-usa-preparation).

## Four stages from puzzle fan to mathematician

Our own way of describing how children grow in a circle.

**Stages of mathematical exploring (ours)**

| Stage | What it looks like |
|---|---|
| 1. Answer hunter | Wants the answer fast, unsure what to do when stuck |
| 2. Case tryer | Tries examples and draws pictures without being told |
| 3. Conjecturer | Spots a pattern, says it clearly and tests it |
| 4. Explainer | Gives a reason the pattern must hold, and asks the next question |

### For parents

Praise the trying, not the speed. "I like how you made a table" does more than "you're so smart".
If your child asks you the answer, ask them what they have tried. Then wait.

### For students

When you are stuck, make the problem smaller: 10 lockers instead of 100.
A pattern is a guess until you can say why. Always ask why.

## Problem-solving math courses for grades 3 to 12

Live courses that put exploration and reasoning first.

### Young explorers

Grades 3 to 5

- [Problem solving](/courses/problem-solving-and-computational-thinking-for-kids): Logic and patterns.
- [Quick numbers](/courses/mental-maths-mastery-kids): Playing with digits.
- [Elementary math](/courses/elementary-mathematics-complete-masterclass): Grades 1 to 5, deeply.

### Middle school

Grades 6 to 8

- [Contest problems](/courses/middle-school-math-competitions-course): Team rounds and sprints.
- [Middle school math](/courses/comprehensive-middle-school-mathematics-mastery): Pre-algebra and geometry.
- [Math through coding](/courses/maths-through-coding): Simulate the lockers.

### High school

Grades 9 to 12

- [Olympiad problems](/courses/olympiad-competition-mathematics-mastery): Where circles lead.
- [Grades 9 to 12 math](/courses/complete-high-school-mathematics-mastery): The school core, deeply.
- [College math](/courses/college-mathematics-complete-masterclass): Beyond the syllabus.

## Circle-style problem solving, live online

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Weekdays** An evening problem session after school.
- **Weekends** Longer explorations with time to argue.
- **1-on-1** For a child who wants a personal mentor.

- **One rich problem** Depth over a long worksheet.
- **Students talk** Ideas shared and tested.
- **Problems we chose** Original write-ups, never copied.
- **Why, always** Every pattern gets a reason.
- **No contest promises** We teach thinking; results are theirs.
- **Size** A batch of 15 to 20, or just your child.

## Fees

Problem-solving classes run month to month with no term contract, so a family can try circle-style math for a few weeks and stay only if the spark is there.

- Free first class: USD 0. A free first class. A puzzle to start. No card needed.
- Group batch: USD 100 a month. Fifteen to twenty learners. The same teacher each week. Pick your batch. Monthly.
- One to one: USD 150 a month. One teacher, one child. Problems chosen for them. Flexible times.

## Math circles: questions answered

### What is a math circle for kids?

It is a group where children meet regularly with mathematicians to explore challenging problems together. The Math Circle Network describes math circles as communities focused on the enjoyment of mathematical problem solving.

### How do I find a math circle near me?

Use the map on mathcircles.org, run by the Math Circle Network. You can filter by elementary, middle and high school, and some circles are marked as meeting online.

### Are there online math circles?

Yes. Some circles on the national map meet online, and the Stanford Math Circle says students from any geographic location are welcome to enroll in its online classes.

### What age is a math circle for?

Circles exist for elementary, middle and high school students, and the network also describes family circles where parents join in. Readiness depends more on enjoying puzzles than on grade.

### Where did math circles start?

The Math Circle Network says the model originated in Eastern Europe more than 100 years ago. The first US student circles began in Boston in 1994 and in the San Francisco Bay Area in 1998.

### Is a math circle the same as math tutoring?

No. Tutoring usually fixes gaps or helps with homework, while a circle explores one rich problem for the joy of it. Many children benefit from both at different times.

### How is your class different from a math circle?

We are an online school, not a community circle. Our problem-solving classes follow a planned course with the same teacher each week, but they borrow the circle habits of discussion, exploration and proof.

### Can I start a math circle?

Yes. The Math Circle Network offers organizer toolkits, free resources for US-based circles and a 2026 training and mentoring cohort for new circle leadership teams.

### What times are your classes?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

### Are you connected with the Math Circle Network?

No. Modern Age Coders is independent and has no link to the Math Circle Network, the American Institute of Mathematics, Stanford or the Berkeley Math Circle.

## Related pages

- [Middle school math competitions](/math-competitions-for-middle-school-students): Contests for puzzle lovers.
- [MATHCOUNTS preparation](/mathcounts-preparation): Contest problem solving for middle schoolers.
- [Math Kangaroo USA](/math-kangaroo-usa-preparation): A friendly first contest.
- [Math League contests](/math-league-contest-preparation): School-based contests by grade.
- [Accelerated math online](/accelerated-math-program-online): Working ahead with understanding.
- [Beast Academy help](/beast-academy-tutor): For families using that curriculum.

## Contact

Book the free first class at [https://learn.modernagecoders.com/online-math-circle-for-kids](https://learn.modernagecoders.com/online-math-circle-for-kids#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
