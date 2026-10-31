---
title: "Science Olympiad Coding Events Help: 2027 Season Guide"
description: "Science Olympiad preparation for coders: which 2027 events use code, Electric Vehicle microcontrollers, Codebusters cipher practice in Python and device rules."
canonical: https://learn.modernagecoders.com/science-olympiad-coding-events-help
source: src/pages/science-olympiad-coding-events-help.html
---
> Science Olympiad is a US team science competition with 23 events in each division, Division B for grades 6 to 9 and C for grades 9 to 12. On the 2027 list there is no Robot Tour, but Electric Vehicle often runs on a microcontroller, and Codebusters rewards cipher skills students can drill in code. Modern Age Coders teaches that Python and math live online, in a batch or 1-on-1.

[Home](/) / [Courses](/courses) / [Coding classes in the USA](/coding-classes-in-united-states) / Science Olympiad coding events

United States · Grades 6 to 12 · The 2027 Science Olympiad season

# Science Olympiad coding events help for 2027

Students who search for Science Olympiad coding help usually have Robot Tour in mind, but that event is not on the 2027 list. Code still matters this season, in quieter places: the microcontroller inside an Electric Vehicle, the practice programs a Codebusters student writes to drill ciphers, and the data work in several study events. This guide reads the official 2027 event table, event pages and policies, then teaches one piece of math-and-code that serves a Codebusters team directly: breaking an affine cipher.

At a glance: Season: 2027 events (school year 2026 to 2027); Divisions: B for grades 6 to 9, C for grades 9 to 12; Events: 23 in each division; Team: 15 students at a tournament; Robot Tour: Not on the 2027 list; Nationals: May 14 to 15, 2027, Ohio State; Classes: Weekdays or weekends, flexible; Start: A free first lesson. Rated 4.9 across 547 Google reviews.

## Courses for Science Olympiad coders

Python first, then the math that ciphers and devices rely on.

- [Python for teens](/courses/python-complete-masterclass-teens): Loops, strings, functions and data: enough to build your own practice tools.
- [Math through coding](/courses/maths-through-coding): Modular arithmetic, functions and graphs, written as programs.
- [C++ basics](/courses/cpp-programming-for-kids-course): The language family behind Arduino-style microcontroller code.

## Which 2027 Science Olympiad events involve coding?

No 2027 event is a pure programming event, and Robot Tour and Detector Building do not appear in either division&rsquo;s 2027 table. Code helps most in Electric Vehicle, where many teams use a microcontroller, and as a practice tool for Codebusters; several other events lean on computing in smaller ways.

**Coding links in 2027 events, from the Science Olympiad event table and event descriptions (soinc.org, read 31 October 2026); the coding column is our reading**

| Event | Division | What the event is | Where code helps (ours) |
|---|---|---|---|
| Electric Vehicle | C | A vehicle powered only by electricity travels in a set time, pushes a bottle past a line and reverses to stop near a target | The controller that times the run and stops the motor; the 2027 kit guidance names Arduino, ESP32, micro:bit and VEX controllers |
| Codebusters | B and C | Teams cryptanalyze and decode encrypted messages using historical and modern ciphers | Writing programs at home to generate and check practice ciphers |
| Engineering CAD | C | Teams read engineering drawings and CAD parts in Onshape, then build an assembly | Computer modeling rather than code; precise, rule-based thinking transfers |
| Remote Sensing | C | Imagery, data and computational process skills on climate topics | Data handling and quick calculations in practice |
| Experimental Design | B and C | Design, run and report an experiment on site | Analysing practice data sets in Python at home |
| Scrambler, Mission Possible | B; C | Pre-built devices: a Division B vehicle, and a Division C Rube Goldberg-like device | Read the event rules for which electronics, if any, are allowed |

### Why the list matters

Science Olympiad rotates events from year to year, so a guide written for an earlier season can point a student at an event that no longer exists. Always start from the current event table on soinc.org.

For 2027 the coding-heavy choice in Division C is Electric Vehicle. In Division B, the closest fit for a young programmer is Codebusters, where the practice, not the event, involves code.

### The format in brief

Science Olympiad describes its tournaments as academic track meets with 23 team events in each division. Division B is middle school and Division C is high school, and only 15 students per team compete at a tournament.

The 2027 National Tournament, the 43rd, is set for The Ohio State University on May 14 to 15, 2027, for 120 teams, according to Science Olympiad&rsquo;s national tournament page.

Sources: [2027 Event Table](https://www.soinc.org/events/2027-event-table), [C event descriptions](https://www.soinc.org/learn/c-event-short-descriptions), [About Science Olympiad](https://www.soinc.org/about) and the [2027 National Tournament](https://www.soinc.org/2027-national-tournament) page, read 31 October 2026. Science Olympiad is a trademark of Science Olympiad, Inc. We are not connected with Science Olympiad.

## Does Science Olympiad Electric Vehicle need programming?

Not necessarily, but many vehicles use one. Science Olympiad&rsquo;s 2027 kit modification guidance treats the microcontroller as a part a team can swap, naming boards such as Arduino, ESP32, micro:bit and VEX, so a team that builds around one needs someone who can program it.

**What the 2027 Electric Vehicle kit guidance says about controllers (Electric Vehicle C Kit Modification Guidance 2027, new 10/12/26)**

| Point | What the guidance says |
|---|---|
| When it applies | A team that builds its vehicle from a kit must make two functional modifications from the list |
| Controller swap | Replacing the primary electronic controller or microprocessor with a different type counts as one modification |
| Valid examples | Arduino to ESP32, VEX to Arduino, micro:bit to ESP32-S3 |
| Not valid | Changing only the model or version, such as Arduino UNO R3 to UNO R4, or ESP32 to ESP32-S3 |
| Other options | Motor type, drive method, wheel diameter, axle spacing, track width, mass and alignment method |

### What the code actually does

The event description asks for a run in a set time that pushes a bottle past a line and then reverses to stop near a target. In code that becomes a sequence: drive a measured distance, reverse a measured distance, and stop, with timing tuned to the target time.

Switching controller types is a programming job in itself. Moving from a micro:bit to an ESP32 can mean moving from blocks or MicroPython to Arduino-style C++, which is why we teach both families of language.

### Tuning is a data problem

A vehicle that stops 4 cm short every time is easy to fix; one that stops anywhere within 20 cm is not. We teach students to log each test run, distance, time and stop error, and to compute the average and spread before changing anything.

That habit is ordinary data analysis in Python, and it makes the team&rsquo;s own device better without anyone outside the team touching it.

Source: [Electric Vehicle C event page](https://www.soinc.org/electric-vehicle-c) and its 2027 Kit Modification Guidance PDF, read 31 October 2026. Full rules are in the official 2027 rules, free on the [2027 Rules page](https://www.soinc.org/rules-2027).

## Can coding help with Science Olympiad Codebusters?

Yes, as a way to practice, not at the event. Science Olympiad&rsquo;s policies bar calculator apps on laptops, phones and tablets unless an event allows them, so plan on solving by hand unless the 2027 rules say otherwise. At home, a student who writes a cipher program understands the cipher far better than one who only solves printed puzzles.

**Some ciphers in Science Olympiad&rsquo;s Codebusters Overview (updated for 2025), with what coding one teaches (the right column is ours)**

| Cipher | Type, as the overview labels it | What writing it in code teaches |
|---|---|---|
| Caesar | Monoalphabetic | Shifting letters with arithmetic mod 26 |
| AtBash | Monoalphabetic | A mirror mapping; encoding twice gives the original text back |
| Aristocrat and Patristocrat | Monoalphabetic | Letter frequency counts and pattern search |
| Affine | Monoalphabetic math | Multiplying mod 26 and undoing it with an inverse |
| Hill 2x2 and 3x3 | Polyalphabetic | Matrices mod 26 |
| Vigen&egrave;re and Porta | Polyalphabetic | A repeating key and why key length matters |

### Check this season&rsquo;s list

The overview gives a breakdown by division and tournament type, but it is dated 2025, and the cipher summary linked from the event page is also 2025&rsquo;s. The 2027 rules decide which ciphers appear, so a student should check those before choosing what to drill.

The overview also notes that RSA is no longer used in Codebusters, a sign that the list does change.

### A program as a practice partner

A student who writes a small encrypt function can make unlimited practice puzzles for a teammate, with answers known. Writing the decrypt function forces them to understand the cipher&rsquo;s math exactly.

Speed still has to be built by hand. We pair every coding exercise with timed pencil practice, because pencil is what the tournament allows.

Sources: the [Codebusters event page](https://www.soinc.org/codebusters-c) and its Codebusters Overview PDF, and Science Olympiad&rsquo;s [policies and ethics rules](https://www.soinc.org/ethics_rules), read 31 October 2026.

## How do you break an affine cipher?

An affine cipher turns each letter number x into (a times x plus b) mod 26, as Science Olympiad&rsquo;s Codebusters Overview describes. If you know two plaintext letters and the letters they became, you can solve for a and b, then decrypt with the inverse of a.

1. Number the alphabet. A is 0, B is 1, and so on to Z, which is 25.
2. Write two equations. Our message MEET AT THE LAB, encrypted with our key a = 5 and b = 8, begins QC. So M (12) became Q (16), and E (4) became C (2). That gives 12a + b = 16 and 4a + b = 2, both mod 26.
3. Subtract to remove b. 8a = 14, mod 26. Dividing everything by 2 gives 4a = 7, mod 13.
4. Solve mod 13. The inverse of 4 mod 13 is 10, because 4 times 10 is 40, which is 1 more than 39. So a = 7 times 10 = 70, which is 5 mod 13. Back in mod 26 that allows a = 5 or a = 18.
5. Reject the impossible key. 18 shares a factor of 2 with 26, so it has no inverse and can never be an affine key. Only a = 5 is left, and b = 16 minus 60, which is 8 mod 26.
6. Decrypt. The inverse of 5 mod 26 is 21. Each cipher letter y becomes 21 times (y minus 8), mod 26. Q (16) gives 21 times 8, which is 168, and 168 mod 26 is 12, which is M.

**Our affine practice tool** (Python)
```python
# Our practice tool for affine ciphers: encrypt, decrypt and crack from a crib.
# For practice at home only: tournament rules bar calculator apps on laptops and phones.
from math import gcd

ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

def encrypt(text, a, b):
    return "".join(ABC[(a * ABC.index(c) + b) % 26] if c in ABC else c for c in text)

def inverse(a):
    # the number that undoes multiplying by a, working mod 26
    return next(x for x in range(26) if a * x % 26 == 1)

def decrypt(text, a, b):
    ai = inverse(a)
    return "".join(ABC[ai * (ABC.index(c) - b) % 26] if c in ABC else c for c in text)

def keys_from_crib(p1, c1, p2, c2):
    """Every legal key that sends plain letter p1 to c1 and p2 to c2."""
    found = []
    for a in range(26):
        if gcd(a, 26) != 1:
            continue          # no inverse, so not a legal key
        b = (ABC.index(c1) - a * ABC.index(p1)) % 26
        if (a * ABC.index(p2) + b) % 26 == ABC.index(c2):
            found.append((a, b))
    return found

secret = encrypt("MEET AT THE LAB", 5, 8)
print(secret)                              # QCCZ IZ ZRC LIN
print(keys_from_crib("M", "Q", "E", "C"))  # [(5, 8)]
print(decrypt(secret, 5, 8))               # MEET AT THE LAB
```
Our own program, plain Python with no libraries beyond math. It is for practice at home: at a tournament, expect to work by hand.

### Why two letters can give two keys

Step 4 found two candidates because 8, the gap between M and E, shares a factor with 26. The program skips every a that shares a factor with 26, which is why it prints only one key.

Only 12 values of a have an inverse mod 26: 1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23 and 25. With 26 choices of b, there are 312 legal keys, few enough for a computer to try every one.

### What the overview adds

The Codebusters Overview notes two special cases worth checking in code: with a = 1 the affine cipher becomes a Caesar shift, and with a = 25 and b = 25 it produces AtBash.

Run both through the program and compare the results with hand-made Caesar and AtBash tables. Seeing three ciphers fall out of one formula is the moment the math clicks.

## Who is allowed to build and program a Science Olympiad device?

The students on the team. Science Olympiad&rsquo;s ethics rules say pre-built devices presented for judging must be constructed, impounded and operated by one or more of the 15 current team members unless the event rules say otherwise, and the parents&rsquo; pledge promises support for students&rsquo; independence in design and production.

### What that means for outside help

A tutor, parent or older sibling may not build, wire or program the team&rsquo;s Electric Vehicle. If the code on the controller was written by someone else, the device was not produced independently.

During an event, participants also may not receive any external assistance, and electronic devices that can communicate are barred unless the event allows them.

### What we do instead

We teach the programming and math skills on our own examples: a practice motor sketch on our own board, ciphers we invent, data sets we make up. The student then builds and codes the team&rsquo;s device on their own.

We never see or edit a team&rsquo;s competition code, and we do not reproduce the official rules manual. Students read the free 2027 rules themselves.

**Where to find each official document (soinc.org, read 31 October 2026)**

| Document | Where it is | Note |
|---|---|---|
| 2027 rules, Division B and C | The 2027 Rules page | Free PDFs by email from Tuesday, September 8, 2026 |
| Event table | Events, 2027 Event Table | The full list of 2027 events by division |
| Rules clarifications and corrections | Events, Rules Corrections | Official changes during the season |
| Policies and ethics | The ethics rules page | Device, assistance and electronics policies |
| Event resources | Each event&rsquo;s own page | Such as the Electric Vehicle kit guidance |

## Practice problems for Codebusters coders

Five original problems, written by us. Each uses our own messages and keys, never a past Science Olympiad test, and each answer shows the working.

1. Encrypt one letter. With a = 3 and b = 5, what does H become? Answer: H is 7, and 3 times 7 plus 5 is 26, which is 0 mod 26, so H becomes A.
2. Find an inverse. What is the inverse of 7 mod 26? Answer: 15, because 7 times 15 is 105, and 105 is 4 times 26 plus 1.
3. Spot a bad key. Why can a = 13 never be an affine key? Answer: 13 shares a factor with 26, so 13 times any even letter number is 0 mod 26 and many letters collide. With no inverse, decryption is impossible.
4. A special case. Show that a = 25, b = 25 sends A to Z and Z to A. Answer: A is 0, and 25 times 0 plus 25 is 25, which is Z. Z is 25, and 25 times 25 plus 25 is 650, which is exactly 25 times 26, so 0, which is A. That is AtBash, as the overview says.
5. Count the work. A brute-force program tries every legal affine key on a 40-letter message. How many letter decryptions is that at most? Answer: 312 keys times 40 letters, or 12,480, a fraction of a second for Python and an afternoon for a pencil.

### Turning answers into speed

After a student can do these in code, we time the same tasks on paper. The code removes doubt about the method; the pencil builds the speed the event needs.

Many students find inverses mod 26 slow at first. Making a small table of all 12 once, by program, and then learning it by heart is a fair shortcut: the table is the student&rsquo;s own work.

### For Division B students

Middle schoolers can start with Caesar and AtBash, which need only addition and a mirrored alphabet. Affine comes once multiplication mod 26 feels natural.

Our [middle school math competitions guide](/math-competitions-for-middle-school-students) covers other contests where the same number sense pays off.

## Four steps from curious student to team coder

A Science Olympiad student does not need to be a programmer to start. These are the steps we see as coding becomes useful to their events.

**From first program to event-ready skills (our steps)**

| Step | What the student can do |
|---|---|
| 1. Scripts | Writes short Python programs with loops, strings and functions |
| 2. Tools | Builds a practice tool, such as a cipher generator or a run-log calculator |
| 3. Hardware | Reads and writes microcontroller code that controls a motor by time or distance |
| 4. Analysis | Uses averages and spread from test data to decide what to change |

### For parents and coaches

Ask your child which events they have this year and whether any device uses a controller. That answer decides whether their coding time should go into Python practice tools or microcontroller code.
The parents&rsquo; pledge asks families to support students&rsquo; independence in designing and producing devices. Encouragement and practice at home fit that; building the device does not.

### For students

Write the decrypt function before memorising any shortcut. Once you can program a cipher, you can always rebuild its rules from scratch.
Keep a run log for any device: date, change made, three measurements. A change without measurements is a guess.

## Nine courses for science team coders

Live lessons over video with a steady teacher, either in a class or one to one.

### Programming

Grades 6 to 12

- [Python for teens](/courses/python-complete-masterclass-teens): Tools, data and logic.
- [Java for teens](/courses/java-programming-masterclass-for-teens): Typed, structured code.
- [C++ basics](/courses/cpp-programming-for-kids-course): For microcontroller work.

### Math and data

The numbers behind events

- [Math through coding](/courses/maths-through-coding): Mod arithmetic in code.
- [AI and machine learning](/courses/ai-ml-masterclass-teens): Models from real data.
- [Problem solving](/courses/problem-solving-and-computational-thinking-for-kids): For grade 6 starters.

### Younger team members

Grades 6 to 8

- [Python and AI for kids](/courses/python-ai-kids-masterclass): A gentle first text language.
- [Coding for kids](/courses/kids-coding-blocks-masterclass): Blocks for micro:bit-style boards.
- [Game development](/courses/game-development-masterclass-for-kids): Logic with fast feedback.

## Coding lessons around an invitational calendar

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Weekdays** After school, on a night with no team practice.
- **Weekends** A morning slot between invitationals.
- **1-on-1** Built around one student&rsquo;s events.

- **Our examples only** Invented ciphers, our own boards and data.
- **Code then pencil** Understanding first, then speed by hand.
- **Rules from the source** Students read the official 2027 rules.
- **Measure every run** Logs and averages before changes.
- **Any US state** Live online in your time zone.
- **Group size** Fifteen to twenty per batch, or one student.

## Fees

Team registration, kits and tournament entries are paid to Science Olympiad, your state organization or suppliers; our fee is only for coding and math lessons. We bill monthly, so a student can study through invitational season and pause after their last tournament.

- Free first class: USD 0. A free first lesson. A short logic and math check. No card needed.
- Group batch: USD 100 a month. Fifteen to twenty students. The same teacher each week. Choose your batch. Monthly.
- One to one: USD 150 a month. A private teacher. Shaped around your events. Python, C++ or math focus.

## Science Olympiad coding: what people ask

### Is Robot Tour a Science Olympiad event in 2027?

No. Robot Tour does not appear in the 2027 Division B or Division C event tables on soinc.org, and neither does Detector Building. Always check the current event table, because events rotate between seasons.

### Which Science Olympiad events use coding in 2027?

No 2027 event is purely about programming. Electric Vehicle in Division C often uses a microcontroller such as an Arduino or ESP32, and Codebusters in both divisions rewards cipher skills that students can practice by writing code.

### Can you use a computer in Codebusters?

Not usually. Science Olympiad's policies bar calculator applications on laptops, phones and tablets unless an event's rules or supervisor allow them, so plan on solving Codebusters by hand unless the 2027 event rules say otherwise. Coding is a way to practice at home.

### What is an affine cipher?

A cipher that turns each letter number x into (a times x plus b) mod 26. Science Olympiad's Codebusters Overview notes that a = 1 gives a Caesar cipher and a = 25 with b = 25 gives AtBash. Decrypting needs the inverse of a mod 26.

### Does Electric Vehicle need a microcontroller?

The 2027 kit modification guidance treats the controller as a part teams may swap, naming Arduino, ESP32, micro:bit and VEX boards. Check the official 2027 Electric Vehicle rules for exactly what is required and allowed.

### Can a tutor build or program our Science Olympiad device?

No. Science Olympiad's ethics rules say pre-built devices must be constructed, impounded and operated by one or more of the 15 current team members unless an event's rules say otherwise. We teach skills on our own examples only.

### What grades are Science Olympiad Division B and C?

Science Olympiad's 2027 rules page lists Division B for grades 6 to 9 and Division C for grades 9 to 12. Its about page describes Division B as middle school and Division C as high school, with 23 events in each.

### Where do I get the 2027 Science Olympiad rules?

On the 2027 Rules page at soinc.org, where free PDF copies have been available by email since Tuesday, September 8, 2026. Rules clarifications and corrections are posted on the same site during the season.

### When is the 2027 Science Olympiad National Tournament?

Science Olympiad says the 43rd National Tournament takes place at The Ohio State University in Columbus, Ohio, on May 14 to 15, 2027, for 120 teams.

### When are your classes?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

### Are you affiliated with Science Olympiad?

No. Modern Age Coders is an independent coding school with no connection to Science Olympiad, Inc. or any state Science Olympiad organization.

## More for science-minded students

- [AI science fair project ideas](/science-fair-project-ideas-ai): For students who want a research project, not a tournament.
- [High school coding competitions](/coding-competitions-for-high-school-students): Contests built entirely around programming.
- [Middle school coding competitions](/coding-competitions-for-middle-school-students): Division B age options beyond Science Olympiad.
- [Middle school math contests](/math-competitions-for-middle-school-students): Number sense that helps with ciphers.
- [US competitions calendar](/us-coding-math-and-ai-competitions-calendar): Dates for this school year in one place.
- [VEX IQ programming help](/vex-iq-programming-help): For students whose robots compete elsewhere.

## Contact

Book the free first class at [https://learn.modernagecoders.com/science-olympiad-coding-events-help](https://learn.modernagecoders.com/science-olympiad-coding-events-help#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
