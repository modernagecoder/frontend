---
title: "Maths Tutor in English for Peru: Live Online Lessons"
description: "A maths tutor in English for learners in Peru: live online lessons, one to one or in a small group, from primaria to IB, with mistakes diagnosed and fixed."
canonical: https://learn.modernagecoders.com/maths-tutor-in-english-peru
source: src/pages/maths-tutor-in-english-peru.html
---
> Modern Age Coders offers a maths tutor in English for learners in Peru: live online lessons given only in English, one to one or in a group of fifteen to twenty, at whatever hour suits you in Peru time. A tutor starts by finding the exact idea a learner has misunderstood, explains it in plain spoken English, and checks the fix with estimates and practice. We cover primaria and secundaria maths, Cambridge IGCSE, IB Maths AA and AI, SAT maths and university maths, as support next to school rather than a replacement for it.

[Home](/) / [Courses](/courses) / [Coding and AI classes in Peru](/coding-and-ai-classes-in-peru) / Maths tutor in English

Peru · Maths taught in English · Primaria to university

# A maths tutor in English, for learners in Peru

Searching for a profesor de matemáticas en inglés usually means one of three things: a pupil at a bilingual or IB school whose maths is examined in English, a family planning a move or a university abroad, or a learner who simply wants the subject and the language to grow together. This page explains what a tutor does in a real session, which maths checkpoints a student in Peru meets, and how much maths time school already gives, then shows one mistake being found and fixed.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Who: Primaria, secundaria, IB, university, adults; Format: One to one, or a group of fifteen to twenty; Language: English, spoken slowly and clearly; Exam boards: IB Maths, Cambridge IGCSE; Peru times: Any hour that suits you; First class: Free, with a short diagnostic. Rated 4.9 across 547 Google reviews.

## Three maths courses a tutor builds on

Tutoring works well on top of a clear course. These three cover the years when Peruvian families most often ask us for help: the move into algebra, the last years of secundaria, and the IB Diploma.

- [Middle School Maths](/courses/comprehensive-middle-school-mathematics-mastery): Pre-algebra and geometry, the stage where fractions, ratios and negative numbers either settle or start to wobble. A tutor finds the wobble early, before it reaches algebra.
- [High School Maths](/courses/complete-high-school-mathematics-mastery): From algebra to calculus over about a year, matched to the topics of the last years of secundaria. Every method is explained in English and checked by the learner, not just copied down.
- [IB Maths AA and AI](/courses/ib-mathematics-aa-ai-masterclass): Both IB courses at SL and HL across the two Diploma years, with coaching on the exploration that keeps the work the student's own. Taught alongside the school, which sets and marks every assessed piece.

## Who looks for a maths tutor who teaches in English in Peru?

Most requests from Peru come from one of three groups. The teaching is the same for all of them; the reason English matters is different.

### Pupils examined in English

A student at an IB or Cambridge school writes maths answers in English. If a tutor explains in Spanish, the student still has to translate "hence", "show that" and "simplify fully" alone on exam day. We teach in the language of the paper, so the words and the methods arrive together.

### Families with plans abroad

A move, a scholarship or a university course taught in English is on the horizon. Maths is the subject where a learner can most quickly feel at home in a second language, because the symbols do half the work. A year of tutoring in English leaves the learner able to explain their own working out loud.

### Learners who want both at once

Some students at Spanish-medium colegios, and some adults, want maths support and English practice in the same hour. That works when the tutor speaks slowly, writes everything down and asks for short spoken answers. It is not a language class, but the language grows every week.

One honest limit. A learner who follows almost no spoken English will spend the first sessions working hard just to understand the question. For that learner we start one to one, slowly, with more writing on the shared board and fewer words. Our tutors do not switch to Spanish, and we would rather say so here than after the first class.

## What does a maths tutor in English actually do in a session?

A good session is mostly detective work. The tutor's job is not to re-teach a whole chapter but to find the one idea that is broken, repair it, and prove the repair holds.

1. **Ask for working, not answers.** The learner solves two or three short problems on the shared board while thinking aloud in English. A wrong answer with visible working tells the tutor far more than a right answer copied from somewhere.
2. **Name the misconception.** Most errors repeat. A learner who writes 1/2 + 1/3 = 2/5 is not careless; they are following a rule that feels sensible. The tutor names that rule out loud, so the learner can see it too.
3. **Break the rule with an example.** Rather than saying "that is wrong", the tutor chooses a case where the rule gives a silly answer, such as half a pizza plus half a pizza coming to half a pizza. The learner finds the contradiction themselves.
4. **Rebuild the idea.** Now the correct method makes sense, because the learner knows why the shortcut fails. For fractions that means equal-sized pieces first, then adding.
5. **Add a check that catches it next time.** One quick estimate, done before the calculation, would have caught the mistake. The learner writes that check down in their own words.
6. **Practise, then mix.** A few problems of the same kind, then the same idea hidden among others, so the learner has to recognise it unprompted.
7. **Leave a short note.** Families receive a few lines in English: what went wrong, what was fixed, and what to watch in the next homework.

### One to one

Suits a specific gap, an exam in a few months, or a learner whose English is still growing. The tutor sets the pace minute by minute and can stay with one idea for a whole session if that is what it takes.

Families in Peru often choose one-to-one tutoring for IB and IGCSE years, because the student's school calendar, coursework and exam board decide what each week should cover.

### A group of fifteen to twenty

Suits steady progress through a course, alongside learners of a similar age and level. Explaining an idea to classmates in English is itself practice, and hearing other people's mistakes is surprisingly useful.

Groups follow a course plan; a learner who needs a particular topic repaired can add a few one-to-one sessions without leaving the group.

## How does a tutor fix a fraction mistake? A worked example in Python

This is a lesson we use with learners from about 11, and with older students who still carry the habit. It takes one misconception, proves it wrong with exact arithmetic, and ends with a check the learner can use for ever.

### The habit

Asked for 1/2 + 1/3, many learners write 2/5. They add the numerators, add the denominators, and the answer looks tidy. The habit is common enough that we test for it in every first class with fractions.

Python's fractions module keeps every result exact, with no decimals and no rounding, so it is a fair referee. We write the shortcut as a function and run it next to the true sum.

### What the learner sees

The shortcut gives 2/5 where the truth is 5/6. Worse, 3/4 plus 3/4 comes out as 3/4: adding something to itself changed nothing. And 1/6 plus 5/6, which is plainly one whole, comes out as a half.

Those two absurd lines usually do the teaching. A learner who laughs at "three quarters plus three quarters is three quarters" has already understood why the rule cannot be right.

**Version 1: the shortcut against the truth** (Python)
```python
from fractions import Fraction

def quick_add(a, b, c, d):
    # the shortcut many learners invent: add the tops, add the bottoms
    return Fraction(a + c, b + d)

def true_add(a, b, c, d):
    return Fraction(a, b) + Fraction(c, d)

tests = [(1, 2, 1, 3), (2, 5, 1, 4), (3, 4, 3, 4), (1, 6, 5, 6)]
for a, b, c, d in tests:
    print(f"{a}/{b} + {c}/{d}: shortcut {quick_add(a, b, c, d)}, true {true_add(a, b, c, d)}")
```
It prints four lines: 1/2 + 1/3: shortcut 2/5, true 5/6, 2/5 + 1/4: shortcut 1/3, true 13/20, 3/4 + 3/4: shortcut 3/4, true 3/2 and 1/6 + 5/6: shortcut 1/2, true 1.

Now the part that lasts. When you add two positive amounts, the total must be bigger than the larger of the two. That is a one-second estimate, and it needs no calculation at all. In Version 2 we ask Python to test the estimate on every pair of proper fractions with denominators from 2 to 9, which is 1,296 pairs, against both the shortcut and the true sum.

**Version 2: does one estimate catch the shortcut every time?** (Python)
```python
from fractions import Fraction

def quick_add(a, b, c, d):
    return Fraction(a + c, b + d)

def true_add(a, b, c, d):
    return Fraction(a, b) + Fraction(c, d)

def estimate_check(a, b, c, d, answer):
    # a sum of two positive fractions must be bigger than the larger one
    return answer > max(Fraction(a, b), Fraction(c, d))

caught = 0
total = 0
for b in range(2, 10):
    for d in range(2, 10):
        for a in range(1, b):
            for c in range(1, d):
                total += 1
                if not estimate_check(a, b, c, d, quick_add(a, b, c, d)):
                    caught += 1
print("pairs tried:", total)
print("shortcut caught by the estimate:", caught)
print("true sums that pass the estimate:", sum(
    estimate_check(a, b, c, d, true_add(a, b, c, d))
    for b in range(2, 10) for d in range(2, 10)
    for a in range(1, b) for c in range(1, d)))
```
It prints pairs tried: 1296, then shortcut caught by the estimate: 1296 and true sums that pass the estimate: 1296. The estimate rejects every shortcut answer and accepts every true one.

Why does it work every time? The shortcut answer, (a + c)/(b + d), always lies between the two fractions you started with, so it can never be larger than both. Mathematicians call it the mediant. A learner does not need the name; they need the habit: **a sum of two positives beats the larger one**. Checked in one second, before any working, it catches the mistake for good.

The lesson is about fractions, but the method is the one we use everywhere: find the rule the learner is really following, test it on cases where it breaks, and leave behind a cheap check. A learner who can say in English "my answer is smaller than one of the parts, so it is wrong" has learnt more than how to add fractions.

1. **Ages 7 to 9, no screen.** Cut two paper strips the same length. Fold one in halves and one in thirds. Lay a half and a third end to end: is it more or less than one strip? Now say whether 2/5 can be right.
2. **Ages 10 to 12, on paper.** Before adding 3/8 + 1/4, write down which is bigger and say "my answer must be more than that". Then add and check.
3. **Ages 12 to 15, Python.** Type Version 1 and predict the four lines before running it. Then add a test of your own where the shortcut accidentally looks believable.
4. **Ages 15 and up.** Prove that (a + c)/(b + d) lies between a/b and c/d when all four numbers are positive. Explain the proof in three English sentences.

## Which maths assessments does a student in Peru meet?

Quite a few, from primaria to the end of secundaria, and each looks for something slightly different. Knowing which one is coming tells a tutor what to practise.

**Maths checkpoints in Peru, as their organisers describe them**

| Checkpoint | Who meets it | What the organiser says about the maths |
|---|---|---|
| ENLA 2025 (MINEDU national assessment) | 4th of primaria, 2nd and 5th of secundaria, sampled across the country | Maths in all three grades; applied 11 to 13 November 2025 to more than 200,000 pupils in 8,700 schools |
| ONEM 2026 (national school maths olympiad) | Secundaria, in three levels: 1st and 2nd, 3rd and 4th, 5th | The school-stage paper has ten closed constructed-response items and lasts two hours |
| UNI ordinary admission exam | Secondary-school leavers applying to the Universidad Nacional de Ingeniería | Three papers on three days; the second paper is entirely mathematics |
| PUCP admission | Pupils in 5th of secundaria and school leavers | Admission exams with special emphasis on reading comprehension and mathematics |
| Universidad de Lima school exam | Pupils in 5th of secundaria (Sunday 15 November 2026 for 2027-1) | A single test of academic aptitude and knowledge; wrong answers subtract marks |
| IB Diploma maths | Students at IB schools, including the COAR network | Examined in the language of the student's programme; 2,502 students in Peru earned the Diploma in 2025 |

Sources: MINEDU press releases of 9 November 2025 (ENLA 2025 application) and 17 April 2026 (IB Diploma results); UGEL 06 (MINEDU) oficio on ONEM 2026; Universidad Nacional de Ingeniería, Admisión 2026-2 page; PUCP, Guía del postulante; the Universidad de Lima admission guide for 2027-1(A); each checked on 8 November 2026. The descriptions in the right-hand column paraphrase each organiser; we are not connected with any of them.

### What the table means for tutoring

The national assessments and the university admission exams are written in Spanish, and we do not prepare anyone for them as a sales promise. What carries over is the maths: a learner who can reason through a problem, check an answer and avoid careless errors does better in any language.

The Universidad de Lima rule is worth a moment. Because a wrong answer costs marks, guessing is a bad habit there, and so is rushing. Estimation, the habit taught in the lesson above, is exactly the skill that tells a student when to leave a question blank.

### Where English is the point

For IB and Cambridge students the language is the exam, so tutoring in English is not a bonus; it is the job. Command words, written justification and the structure of a full answer are taught along with the mathematics.

For ONEM, MINEDU reported that the 2026 edition drew more than 1.7 million secundaria pupils. We never reproduce the organiser's problems; we teach the kind of reasoning olympiads reward with problems we write ourselves, and say plainly that entry goes through the school.

## How much maths does a Peruvian school year give, and where does a tutor fit?

More than many parents think. The national curriculum gives maths four to six teaching periods a week in secundaria, and the 2026 school year had 36 teaching weeks. A tutor adds focus, not hours.

**Maths time in one Peruvian school year (our calculation from MINEDU figures)**

| Level and school day | Maths periods a week | Minutes a week | Hours a year, at most |
|---|---|---|---|
| Primaria, grades 1 and 2 | 5 | 225 | 135 |
| Primaria, grades 3 to 6 | 4 | 180 | 108 |
| Secundaria, regular school day (JER) | 4 | 180 | 108 |
| Secundaria, full school day (JEC) | 6 | 270 | 162 |

Sources: the plans of study for primaria and secundaria in MINEDU's national curriculum (CNEB), which counts in 45-minute periods called horas pedagógicas; RM 501-2025-MINEDU, the norm for the 2026 school year, which sets 36 teaching weeks in four blocks of nine. Minutes and hours are our own multiplication and are upper limits, because public holidays and school events take some periods away. Private schools may set their own timetable.

### Reading the numbers

A pupil on the regular secundaria day has about a hundred hours of maths a year at most; a JEC pupil, more than 160. One weekly hour of tutoring across the same weeks adds around 36 hours. That is not a second school; it is a magnifying glass on the topics that are not working.

The 2026 calendar ran from 16 March to 18 December, in four teaching blocks with short breaks in May, July and October. Tutoring follows the same rhythm: lighter in the breaks, heavier when a block's tests are near.

### What the national results say

MINEDU's summary of ENLA 2025, published on 13 May 2026, says national results in reading and maths were similar to 2023 and 2024, and that 2nd of secundaria showed gains in maths over 2023, the first positive change since school closures.

National averages do not describe your child. That is why every tutoring plan begins with a diagnostic of our own: two short sets of problems, one on number and one on algebra, and a conversation in English about how the learner solved them.

## Is maths harder to learn in English for a student from Peru?

Usually less hard than families fear. The symbols are the same in both languages, and most of the English needed is a short list of words a tutor teaches on purpose.

### What EF's index suggests

The EF English Proficiency Index 2025 gives Peru 519 points, in the "Moderate" band, and Lima 555, the only Peruvian city rated "High". Across Peru, reading scores 540 and speaking 480, the weakest of the four skills.

EF tests adults who take its online test, so it says nothing direct about any child. But the pattern, understanding more than you can say, matches what our tutors see in a first class.

### How a tutor works with that

Maths tutoring leans on listening and writing more than on long speeches. The tutor writes every key word on the board, uses the same phrase for the same idea every time, and asks for short spoken answers: "the denominator", "it is bigger", "I subtract both sides".

Within a few weeks most learners can explain a method in two or three English sentences. That spoken explanation is also the truest test of understanding there is, in any language.

Our Spanish-language page, [profesor de matemáticas en inglés](/profesor-de-matematicas-en-ingles-peru), goes through notation, false friends and word problems in detail for Spanish-speaking parents. For one-to-one support in Spanish-language search terms, see [profesor particular de matemáticas online](/profesor-particular-de-matematicas-online-peru); for IB students, [tutor de IB Matemáticas en inglés](/tutor-ib-matematicas-en-ingles-peru). Every one of them describes classes taught live and in English.

## Will a tutor just give my child the answers?

No. A tutor who hands over answers produces homework that looks finished and a learner who is not. We teach learners to reason through each step and to check their own work.

### The learner holds the pen

On the shared board, the learner writes and the tutor asks. A tutor who solves the problem for a student has only shown that the tutor can do maths.

### AI tools, with age rules

Anthropic's consumer terms set 18 as the minimum age for Claude, and OpenAI asks anyone under 18 to have a parent's permission before using ChatGPT, so children do not use these accounts with us. Older students may ask an AI to question their working, but only after solving the problem alone.

### The same standard everywhere

A learner in Lima, Trujillo, Cusco or a village with a good connection gets the same tutors, the same diagnostic and the same care. Online teaching removes the distance, not the quality.

For IB students the rule is stricter still. The exploration in IB Maths must be the student's own work, so we teach the mathematics, the criteria and how to critique a draft, and we never write or edit the real one. The school's IB coordinator is the person who confirms what help is allowed.

## What time would maths tutoring be in Peru?

Whatever time suits you. Peru uses UTC minus 5 all year with no daylight saving, and India uses UTC plus 5:30, so India is always 10 hours 30 minutes ahead. The rows below are conversions only, not a timetable.

**Six Peru times and the matching time in India**

| Peru time | India time | Who often picks it |
|---|---|---|
| 06:30 | 17:00 | Early risers, before the school run |
| 08:00 | 18:30 | Adults before work, or a holiday morning |
| 14:00 | 00:30, next day | Secundaria pupils on a short school day |
| 17:30 | 04:00, next day | After school and a snack |
| 20:00 | 06:30, next day | After dinner, before homework is due |
| 22:00 | 08:30, next day | University students and night owls |

Source: IANA time zone database, America/Lima (UTC minus 5; Peru's last summer time was in 1994) and Asia/Kolkata (UTC plus 5:30). The right-hand column is our own description, not a fixed slot.

Because neither country changes its clocks, an hour agreed in March is the same hour in December. You choose the time on your own clock when booking; the tutor's calendar converts it. A laptop or tablet with a keyboard, a quiet corner and a headset make the session far easier; a phone works for listening but is cramped for writing maths.

## How will you know the tutoring is working?

Marks move slowly and for many reasons. These signs, which are ours, move sooner and tell you whether the learner is really changing how they do maths.

**Signs of progress in maths tutoring (ours)**

| Stage | What you notice | What it shows |
|---|---|---|
| 1. Shows working | Homework has steps, not just answers | The tutor can now see where errors start |
| 2. Names the error | The learner says which rule went wrong | The misconception is visible to them too |
| 3. Estimates first | A rough answer appears before the calculation | Mistakes are being caught before they are handed in |
| 4. Explains in English | Two or three sentences describe a method aloud | Understanding, and the language to show it |
| 5. Mixes topics | Solves a problem without being told which chapter it is from | The idea transfers to new questions |
| 6. Works alone | Fewer questions for the tutor, more for the problem | Tutoring can become lighter or stop |

### For parents

Ask your child to explain one problem from this week in English, in under a minute. Stage 4 is often the turning point.
Stage 6 is the goal. A good tutor is working towards not being needed.

### For learners

Before you calculate, say roughly what the answer should be. If the result disagrees, trust the disagreement.
A mistake you can name is a mistake you will not make twice.

## Nine more maths courses, by stage

All live, all in English, each with a tutor who keeps the same learner from week to week.

### Primaria years

Roughly ages 6 to 12

- [Elementary maths](/courses/elementary-mathematics-complete-masterclass): Counting to fractions and early geometry, placed by school grade.
- [Mental maths for kids](/courses/mental-maths-mastery-kids): Number sense built from number bonds and estimation, not tricks.
- [Maths through coding](/courses/maths-through-coding): Patterns, fractions and graphs explored in Python, ages 10 to 15.

### Secundaria years

Roughly ages 12 to 17

- [Algebra foundations](/courses/algebra-foundations-masterclass): A full rebuild of algebra for learners whose base is shaky.
- [Olympiad maths](/courses/olympiad-competition-mathematics-mastery): Problem solving for contests, with original problems only.
- [IGCSE maths](/courses/igcse-mathematics-mastery): Core, Extended and Additional Mathematics, joinable any month.

### Exams and beyond school

Ages 15 to adult

- [SAT maths](/courses/sat-math-prep-course): For students applying to universities that ask for the SAT.
- [Statistics and probability](/courses/statistics-probability-maths-course): From data to hypothesis tests, for university and work.
- [University maths](/courses/college-mathematics-complete-masterclass): Calculus, linear algebra and analysis, matched to your semester.

## How live maths tutoring works from Peru

Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.

- **Before school** An early Peru hour falls in the Indian evening, which suits our tutors well.
- **Evenings** Late afternoon and evening sessions in Peru are common; tell us the hour you want.
- **One to one** A tutor of your own, at your pace, on the topics your school is covering now.

- **Diagnostic first** The first class shows what is solid and what is not.
- **A shared whiteboard** The learner writes; the tutor watches every step.
- **Clear, slow English** Key words written down, the same phrase for the same idea.
- **One steady tutor** The same person each week, who learns how your child thinks.
- **Short notes home** What was fixed and what to look for in homework.
- **Group or one to one** Fifteen to twenty learners, or one learner with one tutor.

## Maths tutoring fees for Peru

Fees are set in US dollars and paid by card. Your bank converts each payment into soles on the day it is charged, so the amount on your statement can differ slightly from one month to the next.

- Free first class: Free. A free first class with a short diagnostic. A written note on what to work on. No card needed.
- Group batch: USD 100 a month. A group of fifteen to twenty learners at a similar level. One tutor all the way through. Two live classes a week. Pay monthly and stop when you like.
- One to one: USD 150 a month. One learner and one tutor. Topics chosen around school and exams. Hours set by your family.

## Maths tutor in English: questions and answers

### Are the classes in Spanish?

No. Every class is live, online and taught in English only. Tutors speak slowly and clearly, adjust to the learner's pace and accent, and write each key word on the shared board, so a learner whose English is still developing can follow the maths.

### Who is a maths tutor in English for?

Pupils at IB and Cambridge schools whose maths is examined in English, families planning a move or a university abroad, pupils at Spanish-medium colegios who want maths and English practice together, and adults or university students who need maths in English for their studies or work.

### What levels do you tutor?

Primaria and secundaria maths, Cambridge IGCSE, IB Maths Analysis and Approaches or Applications and Interpretation at SL and HL, SAT maths, and university maths such as calculus, linear algebra and statistics.

### When can sessions take place in Peru?

Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Peru is on UTC minus 5 all year and India on UTC plus 5:30, so 17:30 in Lima is 04:00 the next morning in India, and our tutors plan for that.

### Can you prepare my child for the UNI, PUCP or San Marcos admission exam?

Not as an exam course. Those exams are in Spanish and each university decides who it admits. We can strengthen the maths underneath them, in English: algebra, reasoning, careful checking and working against the clock. We never promise admission.

### Do you help with ONEM?

We teach the kind of reasoning maths olympiads reward, using problems we write ourselves. We never reproduce ONEM problems or solutions, and entry to ONEM goes through the pupil's school. We are not connected with MINEDU or the olympiad's organisers.

### How is a tutor different from a group class?

A tutor works one to one and starts from the learner's own mistakes, so each session repairs something specific. A group class of fifteen to twenty follows a course plan at a steady pace. Many learners do both: a group for the course and a few one-to-one sessions for a stubborn topic.

### My child's English is basic. Will tutoring in English work?

Often, yes. Maths uses symbols that look the same in any language, and our tutors write every important word down. For a learner who understands very little spoken English we start one to one and slowly. The free first class will show whether it suits your child.

### Are you connected with MINEDU, a university or the IB?

No. We are an independent online school with tutors based in India. We are not connected with MINEDU, any UGEL, any university, the IB, Cambridge or any school in Peru, and we do not award Peruvian qualifications. Learners who complete a course receive our own certificate of completion.

### How are fees paid from Peru?

By card, in US dollars. Your bank converts the amount into soles, so the figure on your statement may vary a little each month. The first class is free and we do not ask for card details to book it.

## Related pages

- [Classes in Peru](/coding-and-ai-classes-in-peru): Everything we teach for learners in Peru, in one place.
- [English-medium classes in Lima](/english-medium-coding-classes-lima): For bilingual, Cambridge and IB families in the capital.
- [IB maths tuition online](/ib-maths-tuition-online): Analysis and Applications, SL and HL, in more depth.
- [IGCSE Maths 0580 help](/cambridge-igcse-maths-0580-help): The Cambridge syllabus, topic by topic.
- [Online maths tuition](/online-maths-tuition): How our live maths classes work anywhere.
- [We teach you how to think](/we-teach-you-how-to-think): Why reasoning comes before any shortcut.

## More pages for Peru

Part of the guide: [Every Peru page](/coding-and-ai-classes-in-peru)

### Subjects and courses

- [AI agents course](/ai-agents-course-peru)
- [AI agents for professionals](/ai-agents-for-professionals-peru)
- [AI course for business](/ai-course-for-business-peru)
- [AI course for kids](/ai-course-for-kids-peru)
- [AI course for teens](/ai-course-for-teens-peru)
- [AI for teachers](/ai-for-teachers-peru)
- [AI for university students](/ai-course-for-university-students-peru)
- [App development course](/app-development-course-peru)
- [App development for teens](/app-development-for-teens-peru)
- [C++ course](/c-plus-plus-course-peru)
- [Data science course](/data-science-course-peru)
- [Java course](/java-course-peru)
- [Java for CS students](/java-for-computer-science-students-peru)
- [Maths for kids in English](/maths-for-kids-in-english-peru)
- [Minecraft coding for kids](/minecraft-coding-for-kids-peru)
- [One-on-one coding tutor](/one-on-one-coding-tutor-peru)
- [Online maths classes](/online-maths-classes-peru)
- [Python course](/python-course-peru)
- [Python for engineering students](/python-for-engineering-students-peru)
- [Python for kids](/python-for-kids-peru)
- [Roblox coding for kids](/roblox-coding-for-kids-peru)
- [Scratch for kids](/scratch-for-kids-peru)
- [Software development course](/software-development-course-peru)
- [SQL and data analysis](/sql-and-data-analysis-course-peru)
- [Vibe coding classes](/vibe-coding-classes-peru)
- [Web development course](/web-development-course-peru)

### Subjects and courses (in Spanish)

- [Agentes de IA para profesionales](/curso-de-agentes-de-ia-para-profesionales)
- [Clases particulares de programación](/clases-particulares-de-programacion-online-peru)
- [Crear apps: adolescentes](/crear-apps-curso-para-adolescentes-peru)
- [Curso de agentes de IA](/curso-de-agentes-de-ia-peru)
- [Curso de IA para adolescentes](/curso-de-ia-para-adolescentes-peru)
- [Curso de IA para empresas](/curso-de-ia-para-empresas-peru)
- [Curso de inteligencia artificial en inglés](/curso-de-inteligencia-artificial-en-ingles-peru)
- [Curso de inteligencia artificial para niños](/curso-de-inteligencia-artificial-para-ninos-peru)
- [Curso de Java en inglés](/curso-de-java-en-ingles-peru)
- [Curso de Python en inglés](/curso-de-python-en-ingles-peru)
- [Cursos de programación con certificado](/cursos-online-con-certificado-programacion-en-ingles)
- [Data science y Python](/curso-de-data-science-en-ingles-peru)
- [Desarrollo de aplicaciones](/curso-de-desarrollo-de-aplicaciones-en-ingles)
- [Desarrollo de software](/curso-de-desarrollo-de-software-en-ingles-peru)
- [Desarrollo web](/curso-de-desarrollo-web-en-ingles-peru)
- [IA para docentes](/ia-para-docentes-curso-en-ingles)
- [Java para universitarios](/curso-de-java-para-universitarios-peru)
- [Matemáticas en inglés para niños](/clases-de-matematicas-en-ingles-para-ninos)
- [Profesor de matemáticas en inglés](/profesor-de-matematicas-en-ingles-peru)
- [Profesor particular de matemáticas online](/profesor-particular-de-matematicas-online-peru)
- [Programación en Minecraft para niños](/programacion-minecraft-para-ninos-peru)
- [Programación en Roblox para niños](/programacion-roblox-para-ninos-en-ingles)
- [Python para ingeniería](/python-para-estudiantes-de-ingenieria-peru)
- [Python para niños](/curso-de-python-para-ninos-peru)
- [Scratch para niños en inglés](/scratch-para-ninos-en-ingles)
- [Vibe coding en inglés](/vibe-coding-curso-en-ingles)

More guides: [Coding and AI classes in Peru](/coding-and-ai-classes-in-peru), [En español: clases de programación en inglés](/clases-de-programacion-en-ingles-peru), [Start here: English-medium coding in Lima](/english-medium-coding-classes-lima), [By age and stage: AI and coding for professionals](/ai-and-coding-for-professionals-peru), [Exams, olympiads and school holidays: IB computer science tutor](/ib-computer-science-tutor-peru), [Guides to choosing: An English-taught option to Crack The Code](/crack-the-code-alternative-in-english), [Regions of Peru: Amazonas region](/online-coding-and-ai-classes-amazonas-region-peru), [Cities: Arequipa: coding for every age](/coding-classes-in-arequipa-peru), [Lima and Callao districts: Programación para niños en Ancón](/clases-de-programacion-para-ninos-ancon-lima)

## Contact

Book the free first class at [https://learn.modernagecoders.com/maths-tutor-in-english-peru](https://learn.modernagecoders.com/maths-tutor-in-english-peru#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
