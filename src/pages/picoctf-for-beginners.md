---
title: "picoCTF for Beginners: How to Start, Ethically, in 2026"
description: "picoCTF for beginners: picoCTF is now CyLab Security Academy, ages 13 and up. The eight domains, the Primer, a first-month plan and two Python examples."
canonical: https://learn.modernagecoders.com/picoctf-for-beginners
source: src/pages/picoctf-for-beginners.html
---
> A beginner should start picoCTF by creating a free account on CyLab Security Academy, the new name for picoCTF, reading the CTF Primer, and working through the beginner learning path in the Challenge Library before entering a timed event. Users must be at least 13, and teens under 18 need a parent&rsquo;s email to register. Solve each challenge yourself: hints are built in, and sharing flags is grounds for removal. Modern Age Coders teaches this live online for US students, in a batch or one to one, and the first class is free.

[Home](/) / [Courses](/courses) / [Coding classes in the USA](/coding-classes-in-united-states) / picoCTF for beginners

United States · Ages 13 to 18 · Free practice, built to be hacked

# picoCTF for beginners

picoCTF began as a capture the flag contest for high school students and is now a year-round learning platform called CyLab Security Academy, run by Carnegie Mellon University. A beginner solves small security puzzles, each hiding a string called a flag, in a space designed to be attacked so that the practice is legal. This guide covers what changed in 2026, who may sign up, the eight topic areas, how to begin without copying anyone&rsquo;s answers, and two small Python examples we wrote to teach the first skills.

At a glance: What: Capture the flag practice; Now called: CyLab Security Academy; Run by: Carnegie Mellon University; Cost: Free; Age: 13 and over; Teams: Solo, or up to 5 in events; Classes: Weekdays or weekends, flexible; Start: A free first lesson. Rated 4.9 across 547 Google reviews.

## Three courses for a picoCTF beginner

Capture the flag rewards understanding. These courses teach the ideas under the puzzles, from the terminal to encodings and web basics, always on the defending side.

- [picoCTF and CyberPatriot prep](/courses/picoctf-cyberpatriot-cybersecurity-competition-prep-for-teens): Ages 13 to 18. Contest skills, learned ethically.
- [Cybersecurity for teens](/courses/cybersecurity-course-for-teens-ethical-defensive): Ages 13 to 18. White-hat defense from the ground up.
- [Python for teens](/courses/python-complete-masterclass-teens): Ages 13 to 18. The language most CTF scripts use.

## picoCTF is now CyLab Security Academy

Searches still say picoCTF, and so do many teachers. Here is what the new name means for someone starting now.

**picoCTF in 2026, from picoctf.org and cylabacademy.org (read 17 October 2026)**

| Question | What the official pages say |
|---|---|
| What is picoctf.org now? | A notice titled "picoCTF.org is now CyLab Security Academy" |
| Who runs it? | Carnegie Mellon University&rsquo;s CyLab Security and Privacy Institute; the same team, described as a bigger mission |
| Old accounts | Logins "created before May 8, 2026" still work, with progress and history intact |
| The picoCTF name | A button reads "Coming Soon: picoCTF.com" |
| Size | "490+ hands-on challenges" on the learners page; 16 competitions hosted to date |
| Cost | Free; the site describes itself as always free for everyone |

### What stays the same

The core idea has not changed. Each challenge hides a flag that you find by reading, thinking and sometimes breaking things, and you submit it to score. The About page sums up the history: the largest high school hacking competition now provides year-round learning.

Practice problems from past competitions sit in the Challenge Library, which many guides still call the picoCTF gym.

### How the platform is laid out now

The platform now lists four parts: Challenges, Learning Paths, Events and Classrooms. Learning paths add readings, videos and small games in order, which helps a beginner more than a long unsorted list.

Its list of domains now includes one for AI, covering prompt injection and adversarial examples, and one for blockchain smart contracts.

Sources: [picoctf.org](https://picoctf.org/), [cylabacademy.org](https://cylabacademy.org/), its [learners](https://cylabacademy.org/learners.html) and [competitors](https://cylabacademy.org/competitors.html) pages, read 17 October 2026. Modern Age Coders is not part of Carnegie Mellon or CyLab and does not run picoCTF.

## The age rule: 13 and over, with a parent for under-18s

Before any practice, check the account rules. They come from the platform&rsquo;s Terms of Use, effective January 30, 2025.

**Account rules in the CyLab Security Academy Terms of Use**

| Age | What the terms say |
|---|---|
| Under 13 | May not register. To comply with the Children&rsquo;s Online Privacy Protection Act, the Services are available only to users who are at least 13 years old |
| 13 to 17 | A parent or legal guardian gives their email address at registration to show consent, unless a teacher registers the class in a batch |
| 18 and over | Welcome; the learners FAQ says college students and non-students can play |
| Usernames | No real name or other personally identifying information in the username |

### For a family in the US

A 12-year-old who is keen on security should wait, and can spend the time on Python and on how the internet works. The platform is aimed at middle and high school students aged 13 or older.

For a 13 to 17-year-old, the parent&rsquo;s email is part of sign-up. That is a good moment to agree how the account will be used and that it stays on the practice platform.

### Prizes are separate from play

Anyone can compete to learn. Prize eligibility is set per event, and the learners FAQ notes that some competitions limit it to students enrolled in US middle or high schools.

If a teen wants to enter for prizes, read that event&rsquo;s own rules when it is posted, because each event sets them separately.

## The eight picoCTF challenge areas, in a beginner order

The platform lists eight domains. The descriptions are from its home page; the order is our suggestion for someone starting from zero.

**CyLab Security Academy domains (official) and our suggested order for beginners**

| Our order | Domain | What it covers (official summary) |
|---|---|---|
| 1 | General Skills | The terminal, bash scripting and quick file work, used in every other area |
| 2 | Cryptography | Codes, ciphers and locked data; how encryption and hashing work |
| 3 | Forensics | Hunting through files, images and network traffic for hidden data |
| 4 | Web Exploitation | Why websites trust input too much: SQL injection, XSS, broken logins |
| 5 | Reverse Engineering | Working out what a program does without its source code |
| 6 | Binary Exploitation | How careless memory handling lets software misbehave |
| 7 | AI | How models can be tricked, from prompt injection to adversarial examples |
| 8 | Blockchain | Bugs in smart contract code |

### Why General Skills comes first

Almost every later challenge assumes you can move around a Linux terminal, read files and run small scripts. Students who skip it get stuck on the tools rather than the puzzle.

The platform&rsquo;s own Beginner&rsquo;s Guide to the Challenge Library is described as its most approachable problems, touching every category but focused on General Skills. It is the natural first path.

### Why binary comes late

Binary exploitation needs C, memory layout and assembly. These are rewarding, but they make more sense after a student has written a few programs and seen how data is stored.

Our order is a teaching choice, not a rule. A student who loves websites can move Web Exploitation earlier once the terminal feels comfortable.

## How to start picoCTF as a complete beginner

Six steps, in order, using only the platform&rsquo;s own free material. The learners FAQ says the minimum you need is the ability to think critically.

A copied flag scores a point and teaches nothing about finding the next one. Our classes never hand over flags or walkthroughs for platform challenges: the teacher explains the concept behind a stuck point, and the student solves the challenge.

## The ethics of capture the flag, in plain terms

Security skills can protect people or hurt them. The platform draws the line clearly, and so do we.

**Rules of the road for a picoCTF beginner (official lines, with our notes)**

| Rule | Why it matters |
|---|---|
| Practise only where it is allowed | The home page says "Every challenge is built to be hacked, so the practice is legal". School networks, websites and friends&rsquo; accounts are not. |
| No spoilers during events | The Discord is not for competition challenge help, and "spoilers or flag sharing during a competition are grounds for removal". |
| Your own work counts | A flag copied from a forum scores points and teaches nothing. |
| Defend with what you learn | The platform says it teaches you to think like a hacker, then use that thinking to defend systems. |

### Why the shortcut costs more now

CyLab&rsquo;s own white paper, Skill or Shortcut?, reports that six years of competition data show the post-AI cohort improving at nearly half the rate of the pre-AI cohort.

Our reading: getting the answer and building the skill have come apart. An AI chatbot can often explain a challenge, but a student who never struggles with it does not get faster at the next one.

### How we use AI in class

Students may ask an age-appropriate AI tool what a command or error means, then try it themselves. They do not paste a challenge in and ask for the flag.

Check a tool&rsquo;s own age terms first. Many general chatbots set minimum ages, and some are for adults only.

## Two Python skills every picoCTF beginner uses

Both examples run on our own sample strings, not on any challenge. They teach two habits that appear across the General Skills and Cryptography areas.

### What the examples teach

Work one step at a time and print after each step. When a result still looks like gibberish, the printed middle step tells you what to try next.

Regular expressions turn a long output into the one line you need. The same skill helps a defender search a log for one suspicious entry.

### What they deliberately skip

Neither example solves a real challenge, and we will not publish one that does. The point is to recognise a technique, so that when a student meets it on the platform, the thinking is theirs.

Both use only Python&rsquo;s standard library, so they run in the webshell or any editor without installing anything.

## If picoCTF will not load on a school network

Many US schools filter new domains by default. The learners FAQ lists the domains a network administrator can allow.

**Domains CyLab Security Academy asks schools to allow (learners FAQ, read 17 October 2026)**

| Domain | Access |
|---|---|
| cylabacademy.org | HTTPS |
| learn.cylabacademy.org | HTTPS |
| webshell.cylabacademy.org | HTTPS |
| challenge-files.cylabacademy.net | HTTPS |
| xebec.cylabacademy.net | All ports, UDP and TCP |
| chatelaine.cylabacademy.net | All ports, UDP and TCP |

### Classrooms on the platform

Teachers can create a classroom with an invite code, post assignments that bundle challenges and learning paths with due dates, and see each student&rsquo;s progress. A student can belong to several classrooms, for a class and a club.

Under the terms, a teacher batch registration is also how students aged 13 to 17 can join without each giving a parent email.

### Teams in events

For team-enabled events, the My Team page creates or joins a team with an invite code. The learners page says teams may have 1 to 5 players from different schools.

To be eligible for prizes, every player on the team must meet that event&rsquo;s rules.

## An eight-week start for a picoCTF beginner

Our plan for a 13 to 15-year-old with no security background, about three hours a week including one class. It uses the free platform material throughout.

**Eight weeks from sign-up to a first timed event (ours)**

| Week | Focus | Finished when |
|---|---|---|
| 1 | Account, Primer chapter on the shell | Can list, read and search files in the webshell |
| 2 | Beginner path, first General Skills problems | Five beginner problems solved without walkthroughs |
| 3 | Python basics for CTF | Can read a file and print what is inside it in a script |
| 4 | Encodings: binary, hex, base64 | Recognises each on sight and reverses it in Python |
| 5 | Classical ciphers | Can explain why a Caesar cipher is easy to break |
| 6 | Forensics basics | Can inspect a file&rsquo;s type and metadata |
| 7 | How the web works | Can read a page&rsquo;s source and explain a cookie |
| 8 | A first event | Entered a timed event and wrote down what to learn next |

### Ages 13 and 14

Short sessions, lots of talking through ideas. The goal is curiosity and the terminal, not points.

### Ages 15 and 16

Add Python scripting early, and keep a notebook of every technique learned.

### Ages 17 and 18

Move into web and reverse engineering sooner, and consider CyberPatriot as a team defense contest alongside.

## Four stages from first flag to confident player

Where beginners usually are, and what the next step looks like.

**picoCTF progress stages (ours)**

| Stage | The student can |
|---|---|
| 1. Explorer | Move around the terminal and read files |
| 2. Decoder | Recognise common encodings and simple ciphers |
| 3. Investigator | Choose a tool for a forensics or web problem and explain why |
| 4. Competitor | Enter a timed event, manage time and learn from misses |

### For parents

The platform is free and built to be attacked, so it is a safe place to learn what attackers do. Talk with your teen about where that line is.
Progress is slow at first because the tools are new. Weeks of General Skills are normal and valuable.

### For students

Write down every technique you learn with one example. Your notebook becomes your own primer.
When stuck, take one hint, then explain the problem out loud. Most breakthroughs happen at that point.

## Nine courses for teens who want to learn security

All taught live online, ages 13 to 18, grouped by the picoCTF areas they support.

### Foundations

General Skills

- [JavaScript for teens](/courses/javascript-course-for-teens-beginners-interactive-web): How browsers run code.
- [HTML and CSS](/courses/html-css-course-for-beginners-build-real-websites): Read any page source.
- [Maths through coding](/courses/maths-through-coding): The numbers behind ciphers.

### Web and data

Web and forensics

- [Backend for teens](/courses/backend-coding-masterclass-for-teens): Servers, APIs, databases.
- [Full stack web](/courses/full-stack-web-development-teens-masterclass): Build it, then secure it.
- [Data science for teens](/courses/data-science-course-for-teens-python-data): Search data at scale.

### Low level

Reverse and binary

- [C++ for teens](/courses/cpp-programming-masterclass-for-teens): Memory, pointers, types.
- [Java for teens](/courses/java-programming-masterclass-for-teens): How compiled code is built.
- [Problem solving](/courses/problem-solving-dsa-masterclass-teens): Logic for hard puzzles.

## Security lessons that fit a school week

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Weekdays** An after-school class in your time zone.
- **Weekends** Longer practice before a timed event.
- **1-on-1** For a teen who wants to go deep fast.

- **Defense first** Every technique, and how to stop it.
- **No flag sharing** Concepts taught; challenges solved by the student.
- **Terminal fluency** Linux commands until they are habit.
- **Python scripts** Small tools the student writes.
- **Ages 13 to 18** Matched to the platform&rsquo;s own age rule.
- **Batch or solo** Fifteen to twenty learners, or one to one.

## Fees

The platform itself is free. Our part is the teaching, charged monthly in US dollars with no long contract, so a teen can learn the foundations over a semester and continue only if it clicks.

- Free first class: USD 0. A free first lesson. A look at your account. No card details.
- Group batch: USD 100 a month. Fifteen to twenty learners. A regular security teacher. Choose a batch time. Monthly billing.
- One to one: USD 150 a month. One teen, one teacher. Paced to their interests. Deep dives on request.

## picoCTF for beginners: common questions

### Is picoCTF still running?

Yes, under a new name. The picoctf.org site says picoCTF is now CyLab Security Academy, Carnegie Mellon University's free cybersecurity learning platform, and old picoCTF logins still work.

### How old do you have to be for picoCTF?

At least 13, under the platform's Terms of Use. Teens aged 13 to 17 need a parent or guardian's email at registration, unless a teacher registers the class.

### Is picoCTF free?

Yes. CyLab Security Academy describes itself as always free, supported by sponsors and gifts.

### What is the picoCTF gym?

The name many guides use for the practice area. On the new platform it is the Challenge Library, with problems from past competitions and new ones, open year-round.

### Where should a complete beginner start?

With the CTF Primer and the Beginner's Guide to the Challenge Library learning path, which focuses on General Skills such as the terminal and simple scripts.

### Do I need to know programming first?

No. The learners FAQ says the minimum is thinking critically, and many players began with no programming. Python, HTML, JavaScript and C help, and are worth learning along the way.

### What does a picoCTF flag look like?

The CTF Primer says flags are often in the format picoCTF{} with text inside the braces. You submit the full string to score.

### Is it legal to hack picoCTF challenges?

Yes, on the platform. Its home page says every challenge is built to be hacked, so the practice is legal. Using the same techniques on systems you do not own or have permission to test is not.

### Will you give my teen the answers to picoCTF challenges?

No. We teach the concept behind a stuck point and the student solves the challenge. During events, sharing flags or spoilers is grounds for removal from the community.

### When are classes held?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

### When is the next picoCTF competition?

On 17 October 2026 the competitors page said details were coming soon. The platform runs mini-competitions through the year and an annual flagship for US middle and high school students, listed in the Events tab.

## Related pages

- [Coding classes in the USA](/coding-classes-in-united-states): All of our US pages in one place.
- [CS extracurriculars](/computer-science-extracurriculars): Where capture the flag fits.
- [Hackathons for high schoolers](/hackathons-for-high-school-students): Build on a deadline, in teams.
- [USACO coaching](/usaco-preparation-online-coaching): The programming olympiad.
- [Coding for 15-year-olds](/coding-for-15-year-olds): What to learn at fifteen.
- [Student labs](/student-labs): Projects our learners built.
- [CyberPatriot preparation](/cyberpatriot-preparation): CyberPatriot 19 (2026-27) explained from the official pages, with a practice plan.
- [Technovation Girls guide](/technovation-girls-guide): Technovation Girls and the 2026-27 Technovation Challenge, from the official pages.
- [Coding competitions for high school students](/coding-competitions-for-high-school-students): US high school coding competitions for 2026-27, from the organisers' own rules.

## Contact

Book the free first class at [https://learn.modernagecoders.com/picoctf-for-beginners](https://learn.modernagecoders.com/picoctf-for-beginners#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
