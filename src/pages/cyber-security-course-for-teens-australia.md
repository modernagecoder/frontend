---
title: "Cyber Security Course for Teens in Australia | Defend First"
description: "Defensive cyber security for Australian teens aged 13 to 18: protect accounts, spot phishing and lookalike domains, practise legally. Live online, first class free."
canonical: https://learn.modernagecoders.com/cyber-security-course-for-teens-australia
source: src/pages/cyber-security-course-for-teens-australia.html
---
> Defensive cyber security for Australian teens aged 13 to 18: protect accounts, spot phishing and lookalike domains, practise legally. Live online, first class free.

In short

A cyber security course for teens teaches young people aged 13 to 18 to protect accounts, recognise phishing and lookalike web addresses, understand how systems secure data, and practise only on systems they own or are permitted to test. The Australian Curriculum asks Year 7 and 8 students to identify phishing and explain multi-factor authentication. Modern Age Coders teaches the defensive side live online, in small groups or one to one, and the first class is free.

Start here

## Three courses for a teen interested in security

All three are for under-18s. Each card opens the syllabus.

[![Cybersecurity for Teens course thumbnail](/images/cybersecurity-teens.webp)  CSTA / 01 Cyber Security for Teens Ages 13 to 18, no coding needed. Online safety and white-hat defence. Open the syllabus →](/courses/cybersecurity-course-for-teens-ethical-defensive)[![Python for Teens course thumbnail](/images/python-teens.webp)  CSTA / 02 Python for Teens The language most security tools and scripts are written in, from zero. Open the syllabus →](/courses/python-complete-masterclass-teens)[![Backend Development for Teens course thumbnail](/images/backend-teens.webp)  CSTA / 03 Backend Development for Teens Build a server and a database, then learn how to keep the data in them safe. Open the syllabus →](/courses/backend-coding-masterclass-for-teens)

Defend first

## What a defensive course covers

Security starts with the student's own accounts and devices, then moves to how websites and apps keep data safe.

| Topic | What students learn | What they can do afterwards |
| --- | --- | --- |
| Accounts | Long passphrases, password managers, multi-factor sign-in | Secure their own accounts and explain why each step helps |
| Phishing | How messages create urgency and copy trusted brands | Pick apart a suspicious message without clicking anything |
| Web addresses | How domains work and how lookalikes are made | Check where a link really goes before trusting it |
| How data is protected | Encryption, hashing and secure connections in plain terms | Explain what the padlock in a browser does and does not mean |
| Threat models | Who might attack a system, what they want, and how | Write a simple threat model for their own project |

### What we do not teach

We do not teach teenagers to break into systems, use attack tools against real services, or get around protections. That is both unlawful without permission and the wrong place to start.

Learning how attacks work is part of defence, and it is taught by explaining them and by testing a student's own code.

### Why defence is the right start

Every security professional spends most of their time preventing problems, not causing them. Defensive skills are useful from the first lesson, to the student and to their family.

They also build the careful, permission-first habits the field depends on.

A worked example

## 72 fake addresses and three ways to catch them

A phishing message only works if the link looks right. Students measure which simple checks actually catch lookalike web addresses.

We took 10 real Australian government web addresses, such as `ato.gov.au` and `my.gov.au`, and wrote a script that produces lookalike spellings of them: letters swapped for identical-looking letters from another alphabet, 0 for o, an extra word, a different ending, and the real name placed at the front of someone else's domain. That gave **72 lookalikes**. None of them was registered or visited; they exist only inside the script.

| Check | Lookalikes flagged | What it misses |
| --- | --- | --- |
| Is it exactly on my list of real addresses? | 72 of 72 | Nothing in this test |
| Is it at least 85% similar to a real address? | 43 of 72 | All 10 subdomain tricks and 10 wrong-ending fakes, 8 extra-word fakes, 1 swap |
| Does it turn into an xn-- address when encoded? | 29 of 29 homoglyph fakes | Only applies to other-alphabet letters |

### The plain rule wins

The simplest check, comparing the exact address with a short list of sites you actually use, caught every fake. The cleverer similarity score missed 29.

### Why similarity fails

An address like ato.gov.au.secure-check.example contains the real name but belongs to whoever owns secure-check.example. It scores low on similarity, so a similarity check waves it through.

### The hidden letters

A Cyrillic a looks exactly like a Latin a. Encoded for the internet, the fake becomes xn--to-6kc.gov.au, which gives it away at once.

### The curriculum link

Australian Curriculum content description AC9TDI8P13 asks students to "explain how multi-factor authentication protects an account when the password is compromised and identify phishing and other cyber security threats".

One of its elaborations describes phishing that uses "an email address from an unofficial domain", which is exactly what this exercise trains students to spot.

### What students take away

Bookmarks and typed addresses beat links in messages. Reading a domain from the right-hand end tells you who owns it.

And a smart-looking check is not automatically a good one: measure it before trusting it.

Source, read 14 October 2026: ACARA, [Digital Technologies curriculum content, Years 7 to 10](https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx). The script and its counts are our own; no lookalike address was registered or visited.

The law

## Permission is the line

Australian law treats access to a computer without authority as an offence. Students learn where the line is before they learn anything else.

### What the Criminal Code covers

The Commonwealth Criminal Code, set out in the Schedule to the Criminal Code Act 1995, has a Part 10.7 headed Computer offences. Its sections include 476.2, "Meaning of unauthorised access, modification or impairment", and 478.1, "Unauthorised access to, or modification of, restricted data".

States and territories have their own computer offence laws as well. We teach the principle, not legal advice.

### How that shapes the course

Every practical task is on the student's own code, on flawed code samples written for teaching, or in organised challenges whose rules give permission.

If a student is unsure whether something is allowed, the answer is to stop and ask.

| We do | We do not |
| --- | --- |
| Explain how attacks work so they can be prevented | Teach or run attacks on real services |
| Test students' own projects for weaknesses | Scan, probe or log in to systems without written permission |
| Review flawed code samples written for teaching | Share tools for getting around protections |
| Prepare students for organised, rule-bound challenges | Help anyone access someone else's account |

Source, read 14 October 2026: Federal Register of Legislation, [Criminal Code Act 1995](https://www.legislation.gov.au/C2004A04868/latest/text), compilation C2026C00243, Part 10.7 table of contents.

Legal practice

## Capture the flag, the legal way

Capture the flag (CTF) challenges are puzzles in which every target is built to be solved and permission is given in the rules. They are where teens practise safely.

| Practice | Why it is allowed | Skill it builds |
| --- | --- | --- |
| Securing their own website | They own it | Finding and fixing weaknesses in their own code |
| Teaching code samples with planted mistakes | The code is ours and is read and fixed, not used against anything | Spotting and correcting unsafe code |
| Organised student CTF events | Entry rules grant permission for the challenge targets only | Puzzles in encoding, cryptography and careful reading |
| Threat model for a school club app | It is a paper exercise on their own design | Thinking like a defender |

### Year 9 and 10 students go further

Content description AC9TDI10P13 asks students to "develop cyber security threat models, and explore a software, user or software supply chain vulnerability".

Its elaboration places the hands-on part "in their own software", the same rule our course follows.

### Where it can lead

ANZSCO groups security work with database and systems administration in minor group 262, whose definition includes maintaining "security policies and procedures".

We make no promise about careers. The course builds understanding and safe habits that are valuable whatever a teen goes on to do.

At home

## A family security check students run

One of the first practical tasks is to help the household, with permission, tighten its own accounts and devices.

| Step | What the student does | Why it helps |
| --- | --- | --- |
| Accounts list | With a parent, list the important accounts: email, banking, school, games | You cannot protect what you have not listed |
| Sign-in strength | Help switch reused passwords to long passphrases in a password manager | One leaked password no longer opens everything |
| Second step at sign-in | Turn on multi-factor sign-in where it is offered | A stolen password alone is not enough |
| Updates | Check devices and apps are set to update automatically | Known holes are closed quickly |
| Saved links | Bookmark the real addresses of the most important sites | The allow-list from the worked example, in practice |

### Permission and privacy

Students never handle anyone else's passwords; the account owner types them. The task is to explain and help, not to take over.

This mirrors the professional rule: security work happens with the owner's agreement.

### Why it is a good first task

It is concrete, it can be finished in one sitting, and it helps someone straight away.

It also shows the student that security is about people as much as code.

Progress

## Four levels of defensive skill

Students move on when they can demonstrate a level on their own work.

| Level | What you can do |
| --- | --- |
| 1. Careful user | Secure your own accounts and devices and explain each step |
| 2. Spotter | Recognise phishing, lookalike addresses and suspicious requests |
| 3. Builder | Write code that handles input safely and stores data properly |
| 4. Defender | Threat-model a small system and test your own code for weaknesses |

### Does a teen need to code first?

Not for the first course, which needs no coding. Python helps from level three onwards.

Many students take Python for Teens alongside it.

### Is this for a teen who wants to hack?

It is for a teen curious about how security works. We channel that curiosity into defence and legal practice, and we are clear with students about the law.

Curiosity plus permission is how the field is actually learnt.

The catalogue

## Courses for security-minded teens

All for under-18s. The free class decides where a student starts.

I

### Security

Ages 13 to 18

CSTA / SEC / 01

#### Cyber Security for Teens

Online safety and white-hat defence.

[Open the syllabus](/courses/cybersecurity-course-for-teens-ethical-defensive)

CSTA / SEC / 02

#### AI Tools Course for Teens

AI tools used safely, 13 and over.

[Open the syllabus](/courses/teens-ai-tools-mastery-course)

CSTA / SEC / 03

#### Git and GitHub for Teens

Tracking every change to your code.

[Open the syllabus](/courses/git-github-version-control-course-for-teens)II

### Code to defend

Ages 13 to 18

CSTA / COD / 01

#### Python for Teens

Scripts and automation from zero.

[Open the syllabus](/courses/python-complete-masterclass-teens)

CSTA / COD / 02

#### JavaScript for Teens

Where most web weaknesses live.

[Open the syllabus](/courses/javascript-course-for-teens-beginners-interactive-web)

CSTA / COD / 03

#### HTML and CSS for Beginners

Your own site to protect.

[Open the syllabus](/courses/html-css-course-for-beginners-build-real-websites)III

### Thinking skills

Any teen

CSTA / THK / 01

#### Problem Solving for Teens

Logic and algorithms.

[Open the syllabus](/courses/problem-solving-dsa-masterclass-teens)

CSTA / THK / 02

#### Frontend Development for Teens

Building interfaces you can secure.

[Open the syllabus](/courses/frontend-development-masterclass-for-teens)

CSTA / THK / 03

#### Hackathon Prep for Teens

Building under time pressure, 13 to 17.

[Open the syllabus](/courses/hackathon-prep-for-teens-coding-ai-build-innovate-win-course)

How lessons run

## Security lessons around school

Teachers are based in India and teach Australian afternoons and evenings. Times are fixed in your state's time, including across daylight saving.

After school

Weekday lessons in term.

Early evening

For older students, by arrangement.

Weekend

Longer practice sessions.

### Free first class

A suspicious message taken apart safely, and a first look at domains.

### Small groups

Five to ten teens comparing what they spotted.

### One to one

For a particular interest or pace.

### Permission first

Every exercise is on the student's own work or a practice system.

### Parents informed

Families can see the topics and rules for each term.

### Age rules respected

No tool is used below the minimum age its own terms set.

Student work

## Things our students built

Apps our students built and published, including one on staying safe online. More in the [student labs](/student-labs).

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

## Fees for cyber security for teens

Families outside India pay one monthly fee in US dollars, with nothing due at sign-up and no contract.

Free first class

USD 0

no card required

- A phishing message examined safely
- Advice on the right first course
- No card needed

Book it

Group batch

USD 100

a month, billed in US dollars

- Five to ten teens per class
- Shared challenges and discussion
- A regular teacher
- Stop after any month

Start here

One to one

USD 150

a month, billed in US dollars

- Lessons around one teen's interests
- Their pace
- Times around school

Enquire

What families say

## Rated 4.9 across 547 Google reviews

Published reviews from our Google profile, unchanged.

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

Teens and parents ask

## Questions about cyber security courses for teens

### What does a cyber security course for teens cover?

Protecting accounts, recognising phishing and lookalike web addresses, how systems secure data, threat modelling, and safe, legal practice on the student's own projects.

### Does the course teach hacking?

It teaches how attacks work so they can be prevented. It does not teach attacking real systems, and all hands-on work is on systems the student owns or is permitted to test.

### What is a lookalike domain?

A web address made to resemble a real one, using a swapped or foreign-alphabet letter, an extra word or a different ending. In our test an exact allow-list caught all 72 fakes; a similarity score caught 43.

### Is cyber security in the Australian Curriculum?

Yes. AC9TDI8P13 covers multi-factor authentication and phishing in Years 7 and 8, and AC9TDI10P13 covers threat models and vulnerabilities in Years 9 and 10.

### Is it legal for teens to practise security skills?

On their own systems and in organised challenges whose rules give permission, yes. Accessing computers without authority is an offence; the Commonwealth Criminal Code covers it in Part 10.7.

### What is a capture the flag event?

A security puzzle competition where every target is built for the event and the rules grant permission to solve it. It is the legal way to practise.

### Does my teen need to code?

Not for the first course. Python helps later, when students secure their own code.

### What age is it for?

Teenagers aged 13 to 18. Adults have separate courses.

### Will this lead to a security career?

We make no career or salary promises. The course builds understanding and safe habits that help whatever a teen chooses next.

### How much does the cyber security course cost?

The opening class is free and asks for no card. Group and private monthly fees appear in the fees panel.

Also on this site

## Related pages

Other pages for curious teenagers.

### [Coding classes in Australia](/coding-classes-in-australia)

States, cities and every national track.

### [Web development for teens](/web-development-course-for-teens-australia)

Build the sites you will secure.

### [AI classes for teens](/ai-classes-for-teens-australia)

Use, check and build AI.

### [Digital Technologies, Years 7 to 10](/digital-technologies-years-7-to-10-coding)

Help with the school subject.

### [AI tool age guide](/ai-tools-age-guide)

Minimum ages for popular tools.

### [Competitions calendar](/australian-coding-maths-and-ai-competitions-calendar)

Organised events for students.

Start here

## Book a free security lesson

Send your details and we will call at a good time. The first class takes apart a suspicious message safely and ends with a recommendation.

See [how we teach](/how-we-teach), or the [course list](/courses).

[WhatsApp us](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20am%20a%20teenager%20in%20Australia%20(or%20a%20parent%20of%20one)%20interested%20in%20the%20cyber%20security%20course%20for%20teens.%20Could%20we%20book%20a%20free%20first%20class%3F) · [+91 91233 66161](tel:+919123366161) · [connect@modernagecoders.com](mailto:connect@modernagecoders.com)

From Australia, WhatsApp is the simplest channel. The +91 number connects to our team in India; we keep no Australian premises.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/cyber-security-course-for-teens-australia*
