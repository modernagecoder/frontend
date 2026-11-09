---
title: "Learn Coding and English Together: Live Classes for Peru"
description: "Learn to code and practise English in the same live online class, taught in English for learners in Peru from age 6 to adult, in a group or one to one, any hour."
canonical: https://learn.modernagecoders.com/learn-coding-and-english-together-peru
source: src/pages/learn-coding-and-english-together-peru.html
---
> Yes, you can learn coding and English together. Modern Age Coders teaches programming live and online, in English, to learners in Peru from age 6 to adult, so every lesson uses English for listening, speaking, reading and writing about code. Mentors based in India speak clearly and follow your pace and accent. It is not an English academy: you learn to program, and your technical and spoken English grow because the class happens in English. Lessons run for groups of fifteen to twenty or one to one, whenever suits you.

[Home](/) / [Courses](/courses) / [Peru](/coding-and-ai-classes-in-peru) / Coding and English together

Peru · Two languages, one class · Ages 6 to adult

# Learn coding and English together, live from Peru

Programming is the one subject a Spanish speaker cannot fully take in Spanish. Some of it can be translated, and volunteers are doing exactly that. A large part never will be. This page draws that line from Python's own sources, then shows how a live class taught in English turns the part that stays English into daily language practice, at any age.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Who: Learners in Peru from age 6 to adult; What: Coding, with English used in every part of the lesson; Level of English: From beginner to fluent; the mentor adapts; Format: A group of fifteen to twenty, or one to one; Hours: Any day, any hour in Peru time; First class: Free, no card required. Rated 4.9 across 547 Google reviews.

## Three courses where the English is in plain sight

Web courses are a natural place to begin, because HTML tags are short English words a beginner meets in the first hour: head, body, title, link.

- [Websites for kids](/courses/kids-ai-web-development-course): Ages 8 to 12. A first website, where every tag a child types is an English word they can say aloud.
- [JavaScript for teens](/courses/javascript-course-for-teens-beginners-interactive-web): Ages 13 to 17. Interactive pages and small games, reading documentation in English from the first month.
- [HTML and CSS for beginners](/courses/html-css-course-for-beginners-build-real-websites): Adults. Real websites from scratch, with English used for every instruction and every explanation.

## Can you learn programming in Spanish, or does it have to be in English?

Partly in Spanish, never entirely. Explanations, tutorials and even part of the official documentation exist in Spanish. The language itself, its error messages and its standard library are English and will stay so. Here is the line, from Python's own sources and our own test runs.

**Coding in Python as a Spanish speaker: what can be in Spanish and what stays in English**

| Part of the work | In Spanish? | Evidence |
|---|---|---|
| The official documentation | Partly | Spanish translation at 45.83% overall and 12.82% of the core pages (Python Docs Translation Dashboard, 9 November 2026) |
| Your own variable and function names | Yes, accents allowed | PEP 3131 (Python 3.0) allows non-ASCII letters in names; our run accepts año and niños |
| Keywords such as if, while, class | No | Fixed by the language; si and mientras are ordinary names, not keywords (our run) |
| Error messages | No | Still English on a computer set to Peruvian Spanish (our run, Python 3.14.8) |
| Standard library names | No, by policy | PEP 3131: standard library identifiers "MUST use ASCII-only identifiers, and SHOULD use English words wherever feasible" |

Sources: translations.python.org, Python Docs Translation Dashboard, last updated on 9 November 2026; Python Developer's Guide, "Translating"; PEP 3131, "Supporting Non-ASCII Identifiers"; our own runs of Python 3.14.8 on 9 November 2026, shown in the lesson below. The dashboard's percentages change as volunteers work; read the live page for today's figure.

### What the translation figures say

Python's developer guide says several documentation translations are already in production and reachable from the language switcher, each run by a volunteer team; Spanish has one. On 9 November 2026 the dashboard showed Spanish at 45.83% overall but only 12.82% of the core pages, while Japanese stood at 95.98% overall and Brazilian Portuguese at 56.25%.

So a Spanish speaker can read a good part of the documentation in Spanish, with gaps, and the gaps are often in the most used pages. Anyone who wants the full picture ends up reading English.

### Why the language itself stays English

PEP 3131 opened Python 3 to names in other alphabets, explaining that "Python code is written by many people in the world who are not familiar with the English language". It kept the standard library in ASCII and asked for English words wherever feasible, so code written anywhere still shares one vocabulary.

The result is a deal every Spanish-speaking programmer accepts: name your own things however you like, but read, search and talk about the shared parts in English.

That is the case for learning both at once. A learner taught in Spanish meets the English parts anyway, as unexplained symbols. A learner taught in English meets them as words, said aloud, in sentences. For a Spanish-language view of the same choice, see our page on [un curso de Python en inglés](/curso-de-python-en-ingles-peru).

## How does a coding class improve your English?

By making you use all four language skills for a real purpose, every few minutes, with a patient listener. Peru's national curriculum names those same skills for English at school; a coding class gives them a job to do.

### Listening and speaking

The mentor explains, you answer questions and, above all, you explain your own code aloud. "This loop runs once for each name" is a full English sentence with a precise meaning, said many times a lesson.

### Reading

Error messages, documentation, instructions and the code itself. A traceback is short, structured English that rewards careful reading: the last line names the problem and the line above shows where.

### Writing

Comments, names for variables and functions, a short description of each project and, for older learners, questions written to a forum or a teammate. Each is small, frequent and checked.

### What Peruvian school asks for

The CNEB sets three English competencies: to communicate orally in English as a foreign language, to read different types of written texts in English, and to write different types of texts in English. In secundaria the timetable gives English 3 hours a week under the regular school day and 5 under the Jornada Escolar Completa.

A coding class does not replace that. It adds hours where those competencies are used on something the learner has chosen to do.

### Where Peruvians most need practice

EF's English Proficiency Index 2025 gives Peru 540 for reading, 499 for listening, 514 for writing and 480 for speaking, its lowest skill. EF tests adults, but the pattern is familiar to many families: English read well, spoken less.

A live class tilts the balance towards speaking and listening, because the main thing you do in it is talk about what you are building with someone who is listening closely.

Families in Lima whose children already study in English at school will find a page written for them: [coding for Lima's English-medium pupils](/english-medium-coding-classes-lima).

## What does a lesson that teaches coding and English look like?

This lesson is ours. We use it with teenagers and adults in their first weeks of Python, and with confident 11 and 12 year olds. It answers a question Spanish speakers often ask: can I just write my code in Spanish? The answer, found by running code rather than by taking our word for it, is "partly".

**Step 1: are Spanish names allowed?** (Python)
```python
año = 2026
niños = ['Ana', 'Luis']
print(año, len(niños))

for name in ['año', 'niños', 'mi_variable', 'mi-variable', '2026año', 'class', 'clase']:
    print(f'{name:<12} {name.isidentifier()}')
```
isidentifier() asks Python whether a piece of text could be used as a name. The documentation says it returns True if the string is a valid identifier according to the language definition.

**What Step 1 prints** (Output)
```output
2026 2
año          True
niños        True
mi_variable  True
mi-variable  False
2026año      False
class        True
clase        True
```
Exact output from our run with Python 3.14.8. año and niños work, accents and all. A hyphen is not allowed, and a name cannot start with a digit. And class says True, which turns out to be misleading.

The mentor asks, in English: "If class is a valid identifier, can I write class = 5?" Learners try it and get a syntax error. The word is the right shape for a name, but Python has reserved it. That calls for a second check.

**Step 2: which English words are taken?** (Python)
```python
import keyword

for name in ['class', 'clase', 'if', 'si', 'while', 'mientras', 'print', 'imprimir']:
    usable = name.isidentifier() and not keyword.iskeyword(name)
    print(f'{name:<10} keyword: {keyword.iskeyword(name)!s:<6} usable as a name: {usable}')
```
keyword.iskeyword tells you whether a word is reserved by the language. A name is only usable if it passes both checks.

**What Step 2 prints** (Output)
```output
class      keyword: True   usable as a name: False
clase      keyword: False  usable as a name: True
if         keyword: True   usable as a name: False
si         keyword: False  usable as a name: True
while      keyword: True   usable as a name: False
mientras   keyword: False  usable as a name: True
print      keyword: False  usable as a name: True
imprimir   keyword: False  usable as a name: True
```
Exact output from our run. Every English keyword is taken, and every Spanish translation is free. The last two lines hide a trap: print is not a keyword, so Python will let you use it as a name.

1. **Say the rule in English.** "A name can contain letters, digits and underscores, cannot start with a digit, and cannot be a keyword." Learners say it, then write it as a comment.
2. **Notice what the keywords are.** Every reserved word in the list is an ordinary English word with an ordinary meaning: if, while, class, return. Knowing the meaning makes the code read like a sentence.
3. **Find the trap.** print is a built-in function, not a keyword. Python allows print = "hola", and the damage only appears on the next line. Step 3 shows it.

**Step 3a: a Spanish function name on a Spanish computer** (Python)
```python
# run on a computer whose language is set to Spanish (Peru)
imprimir("hola")
```
We ran this with the computer's language set to Spanish (Peru), to see whether Python answers in Spanish.

**What Step 3a prints** (Output)
```output
Traceback (most recent call last):
  File "<string>", line 1, in <module>
    imprimir("hola")
    ^^^^^^^^
NameError: name 'imprimir' is not defined
```
Exact output from our run. The computer is in Spanish; the error is in English. imprimir is a perfectly legal name, but nothing has that name, so Python reports a NameError.

**Step 3b: using print as a name** (Python)
```python
print = "hola"
print("hola")
```
The first line is allowed. The second line tries to call the text "hola" as if it were a function.

**What Step 3b prints** (Output)
```output
Traceback (most recent call last):
  File "<string>", line 2, in <module>
    print("hola")
    ~~~~~^^^^^^^^
TypeError: 'str' object is not callable
```
Exact output from our run. "Object is not callable" is precise technical English: the thing named print is now a string, and you cannot call a string.

By the end of the lesson the learner has met five English words that the language owns, a rule they can state aloud, two error messages they can read word by word, and a practical decision: use Spanish names if you like, but never reuse an English built-in. They have also discovered for themselves why most teams write their names in English anyway. Python's own standard library does exactly that, by policy.

## Who should learn coding and English at the same time?

Most learners who already have some school English and want to use it. It suits some people less, and it is better to know that before starting than after.

### Children of 6 to 12

Children absorb the words of a game or a web page quickly, especially when they built the thing being described. Classes use pictures and short phrases, and parents see both skills grow in the weekly note.

### Teenagers in secundaria

Teenagers get a reason to speak English outside the classroom and a head start on the technical English used at university and online. Their school English hours stay as they are; this adds practice.

### University students and adults

For adults, English and coding together are often a work goal. INEI found that 97.3% of Peruvians aged 19 to 24 used the internet in the second quarter of 2026, much of the technical part of it in English.

### When to wait

A learner who cannot yet follow simple spoken instructions in English will struggle to learn programming at the same time. For them, a few months of general English first is kinder.

The free first class answers this honestly. We would rather say "not yet" than see someone discouraged in both subjects at once.

### What we are not

We are not an English academy and we do not teach grammar lessons, give English certificates or prepare for English exams. You learn to program, in English, with mentors who are patient about language.

If English is your main goal, combine our classes with an English course. If programming is your goal and English is a welcome side effect, this is the right place.

Adults in Peru weighing courses alongside a job can read our Spanish page for [cursos de programación para adultos](/cursos-de-programacion-para-adultos-peru). For families planning a summer start, [vacaciones útiles virtuales en inglés](/vacaciones-utiles-virtuales-en-ingles) covers the January to March break.

## Are the classes taught in Spanish?

No. Each class is live and online, and English is the only language of teaching. Mentors in India keep their speech clear, check understanding often and follow the pace and accent of each learner, from a 6-year-old beginner to a fluent adult.

### What happens when you do not understand

You ask, in English, and the mentor says it another way, shows it on the screen or writes the key word in the chat. "Could you say that more slowly?" is the first useful sentence of the course.

Mentors never switch to Spanish to explain. That can feel hard in the first weeks and is exactly what makes the English grow.

### Outside the lesson

Parents and learners can write to us in Spanish on WhatsApp about schedules, payments or anything else. Only the lessons are in English.

Mentors send a short note after classes for children, saying what was practised in code and which English words were new.

## At what time can I take the classes from Peru?

Pick any hour. Mentors teach from India, and since Peru and India both ignore daylight saving, the difference between the two clocks never moves.

**Example conversions from Peru time to India time (not a class timetable)**

| Peru time | India time | Day in India |
|---|---|---|
| 6:00 a.m. | 4:30 p.m. | Same day |
| 9:30 a.m. | 8:00 p.m. | Same day |
| 11:00 a.m. | 9:30 p.m. | Same day |
| 2:00 p.m. | 12:30 a.m. | Next day |
| 5:30 p.m. | 4:00 a.m. | Next day |
| 9:30 p.m. | 8:00 a.m. | Next day |

Time zones: Peru, UTC minus 5 all year, no daylight saving (tz database, America/Lima); India, UTC plus 5:30 all year. The difference is always 10 hours 30 minutes, with India ahead.

Adults often take a class before work or late in the evening; children and teenagers usually pick an hour after school. Book in Peru time and we handle the conversion.

## How do you see progress in coding and in English?

Five stages we use, with a coding side and a language side for each. They are ours and are not linked to any official English scale.

**Five stages of coding and English growing together (ours)**

| Stage | In code | In English |
|---|---|---|
| 1. Recognise | Runs and changes small examples | Recognises keywords and common instructions by ear |
| 2. Name | Chooses clear names for variables and functions | Names things precisely: "total", "count", "is_ready" |
| 3. Read | Reads an error message and finds the line | Reads a traceback and says what it means |
| 4. Explain | Explains a whole program step by step | Speaks for a minute about code without switching language |
| 5. Ask and teach | Looks up new functions in documentation | Writes a clear question to a forum or explains a fix to someone else |

### For parents

Listen for longer English sentences about code over the weeks. That is the most reliable sign that both skills are growing.
A child at stage 3 can tell you what an error message says in Spanish; that translation is itself a good exercise.

### For learners

Explain every program aloud to someone, even yourself. If you get stuck on a word, write it down and ask the mentor.
Read the last line of an error message first. It is usually the shortest and most useful English sentence on the screen.

## Nine more courses taught in English

All live, with one mentor through the course, and all using English for every part of the lesson.

### Children

Ages 6 to 12

- [Block coding for kids](/courses/kids-coding-blocks-masterclass): Blocks labelled in English, read aloud as the child builds.
- [Python and AI for kids](/courses/python-ai-kids-masterclass): A first typed language, explained one English word at a time.
- [Minecraft coding](/courses/minecraft-coding-for-kids-course): Commands and loops in a world children love to describe.

### Teenagers

Ages 13 to 17

- [Python for teens](/courses/python-complete-masterclass-teens): From first program to files and classes, with documentation in English.
- [Front-end development for teens](/courses/frontend-development-masterclass-for-teens): Interfaces built from English-named tags and properties.
- [Data science for teens](/courses/data-science-course-for-teens-python-data): Charts and findings explained in short English reports.

### Adults

18 and over

- [Python from zero](/courses/python-programming-masterclass-zero-to-advanced-college): The whole language, for adults starting fresh.
- [Data and AI for non-programmers](/courses/data-and-ai-analytics-for-non-programmers-course): Working with data at work, explained in plain English.
- [Full-stack web development](/courses/full-stack-web-development-masterclass-college): Front end to database, with English technical writing throughout.

## How are the live classes organised?

Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.

- **Before work** Early hours in Peru time for adults.
- **After school** Afternoons and evenings for children and teenagers.
- **When you choose** One-to-one lessons on your own timetable.

- **English only** The whole lesson, with patience for every level.
- **You speak** Learners explain their code aloud every class.
- **Word lists** New technical words written in the chat and reviewed.
- **Real errors** Tracebacks read together, word by word.
- **One mentor** The same person, who learns how you speak and think.
- **Group or solo** A class of fifteen to twenty at your level, or private lessons.

## Fees for learners in Peru

Fees are monthly and shown below in US dollars. You pay with a card, and the bank that issued it converts the amount into soles using its own rate, so your statement may show a slightly different figure each month.

- Free first class: Free. A free first class with a mentor. A check of both coding and spoken English. No card needed.
- Group batch: USD 100 a month. Fifteen to twenty learners of a similar level. One mentor all the way through. Two live classes a week. Monthly, stop at the end of any month.
- One to one: USD 150 a month. Just you and the mentor. Pace set by your English and your goals. Days and times of your choosing.

## Learning coding and English together: questions and answers

### Are the classes in Spanish?

No. Lessons are live and online, and they are given in English only. Mentors in India speak clearly and adjust to your pace and accent, and you can message us in Spanish on WhatsApp about anything outside the lesson.

### Can I learn to code entirely in Spanish?

Only partly. Tutorials and part of the official Python documentation exist in Spanish, but keywords, error messages and standard library names are English and stay that way. Learning in English means meeting them as words rather than symbols.

### Will my English really improve in a coding class?

Your technical English and your spoken English usually do, because you listen, read and explain code in English every lesson. It is not a grammar course, and we do not give English certificates.

### What level of English do I need?

Enough to follow simple spoken instructions. Children start with pictures and short phrases; adults with basic school English can begin. The free first class checks this and tells you honestly if you should wait.

### Can I write my code with Spanish names?

Yes. Python 3 accepts names such as año and niños. We still recommend English names for anything you share, and never reusing a built-in such as print, as the lesson on this page shows.

### Is this for children or adults?

Both. We teach from age 6 to adults of any age, with separate groups and courses by age. Adults often take one-to-one classes around work.

### What time are the classes?

Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. The two clocks differ by 10 hours 30 minutes on every day of the year, India ahead: 9:30 a.m. in Lima is 8:00 p.m. there.

### Do I get a certificate?

At the end of a course you receive our own certificate of completion for the programming course. It is not an English certificate, a Peruvian qualification or a university credit.

### Is this connected with my school or university?

No. Modern Age Coders has no tie to MINEDU, to any school or to any university. The classes sit beside your studies or your job.

### How do I pay?

You pay monthly by card, in US dollars, and your card issuer turns that into soles. The trial class costs nothing and asks for no card details.

## More on code and language

- [How to actually learn to code](/how-to-actually-learn-to-code): Why practice and explanation beat watching videos.
- [How to debug code](/how-to-debug-code): Reading error messages as clues.
- [How we teach](/how-we-teach): One live class, start to finish.
- [We teach you how to think](/we-teach-you-how-to-think): Understanding before tools, at every age.
- [Student labs](/student-labs): Projects our students built and presented.
- [Coding and AI classes in Peru](/coding-and-ai-classes-in-peru): The full list of what we teach in Peru.

## Contact

Book the free first class at [https://learn.modernagecoders.com/learn-coding-and-english-together-peru](https://learn.modernagecoders.com/learn-coding-and-english-together-peru#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
