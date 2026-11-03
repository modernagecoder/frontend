---
title: "Learn Coding in English in Germany: Live Online Classes"
description: "Why learn to code in English in Germany: keywords, error messages and specifications are English. Live online classes in English, matched to your pace and accent."
canonical: https://learn.modernagecoders.com/learn-coding-in-english-germany
source: src/pages/learn-coding-in-english-germany.html
---
> You can learn coding in English from Germany with Modern Age Coders: live online classes for children, teenagers and adults, taught entirely in English by a mentor who adjusts speed, wording and accent to you. It makes sense because code itself is written in English keywords, and its error messages and specifications are English too. Classes run in German time, as a group or one to one.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / Coding in English

Germany · Taught in English · All ages

# Learn coding in English in Germany

A program in Python or Java is built from English words whatever language its author speaks: for, if, while, return, class. The names in it can be German, umlauts and all, but the grammar cannot. This page shows that with a two-minute Python experiment, sets out what is and is not available in German, and explains how classes taught entirely in English can still fit a learner whose English is a second or third language.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Language of teaching: English only, live; Ages: Children, teenagers and adults; Languages taught: Scratch, Python, Java, web; German times: Afternoons, evenings, weekends; Mentors: Based in India, one per learner; First class: Free, no card needed. Rated 4.9 across 547 Google reviews.

## Three first courses, taught in English

A starting point for each age group. The free first class confirms which one fits.

- [Python and AI for Kids](/courses/python-ai-kids-masterclass): Children of about 8 to 12. Turtle drawings, small games and the first English keywords, one at a time.
- [Python for Teens](/courses/python-complete-masterclass-teens): For 13 to 18 year olds: every part of the language, explained in clear English, ending in a program of their own design.
- [Python for Adults](/courses/python-programming-masterclass-zero-to-advanced-college): From the first line to advanced Python, at an adult's pace and around an adult's week.

## Why are programming languages written in English?

Every mainstream programming language has a small set of reserved words that make up its grammar. In Python and Java those words are English, and they are the same on every computer in the world.

### How many there are

Python 3.14 has 35 keywords, as listed by its own keyword module, plus four soft keywords that only act as keywords in certain places: match, case, type and the underscore. A learner meets about a dozen of them in the first month.

Java has more. The Java Language Specification for Java SE 21 reserves 51 character sequences as keywords, and names 17 more that act as keywords only in some contexts. All of them are built from plain ASCII letters.

### Why that matters for a learner

A child in Hamburg who types if is using a real English word with its real meaning. Learning the word and learning the idea happen together. A learner taught in English hears the instruction and types the same word; a learner taught in German translates the idea, then switches back to English to type it.

That is the plainest reason we teach in English: the gap between what the teacher says and what the learner types disappears.

**Ten Python keywords a beginner meets first, and what each word means in German**

| Keyword | Plain German meaning | What it does in Python |
|---|---|---|
| if | wenn, falls | Runs a block only when a condition is true |
| else | sonst | The block for when it is not |
| for | für | Repeats for each item in a sequence |
| while | solange | Repeats as long as a condition holds |
| in | in | Asks whether an item is in a collection |
| def | short for define, festlegen | Starts the definition of a function |
| return | zurückgeben | Hands a result back from a function |
| import | importieren, einführen | Brings in code from a module |
| True | wahr | The value for yes |
| None | nichts, keiner | The value for no value at all |

Sources: Python 3.14.8 standard library, keyword module (keyword.kwlist and keyword.softkwlist), run on 3 November 2026; Oracle, The Java Language Specification, Java SE 21 Edition, section 3.9, read on 3 November 2026. The German meanings and the descriptions are ours.

## Can you write Python with German words?

Half yes, half no, and the line between the two halves is exactly the line between the language and the programmer. Python has allowed letters such as ä, ö, ü and ß in names since version 3.0, under PEP 3131. The keywords stay English.

### The test

Write one short program twice. Both versions square the numbers 1 to 4 and print the squares bigger than 5. Both name their variables in German, zahl and größe. The first version also translates the keywords: für, wenn, bereich, drucke. The second keeps for, if, range and print.

Then let Python itself judge both versions before running either.

### What to expect

Most learners guess that both will fail, or that both will run. The real answer teaches more about how a programming language works than a page of theory.

**Version 1: compile both, run the one that works** (Python)
```python
# Version 1: the same program twice, with German keywords and with English ones
german = ('für zahl in bereich(1, 5):\n    größe = zahl * zahl\n'
          '    wenn größe > 5:\n        drucke(zahl, "->", größe)\n')
english = ('for zahl in range(1, 5):\n    größe = zahl * zahl\n'
           '    if größe > 5:\n        print(zahl, "->", größe)\n')

for name, source in (("German keywords", german), ("English keywords", english)):
    try:
        compile(source, name, "exec")
        print(name, "-> compiles")
    except SyntaxError as error:
        print(name, "->", error.msg, "on line", error.lineno)

exec(english)
```
It prints German keywords -> invalid syntax on line 1, English keywords -> compiles, then 3 -> 9 and 4 -> 16.

The German version stops on its first line. Python reads für as an ordinary name, because ü is allowed in names, and then finds a second name, zahl, straight after it, which its grammar does not allow. The English version runs, and its German variable größe is perfectly legal. The message itself, invalid syntax, is English too: standard Python writes its error messages in English.

**Version 2: let Python sort the words** (Python)
```python
# Version 2: ask Python which words it read as keywords
import builtins, io, keyword, tokenize

words = [t.string for t in tokenize.generate_tokens(io.StringIO(english).readline)
         if t.type == tokenize.NAME]
print("Keywords:", [w for w in words if keyword.iskeyword(w)])
print("Built-in names:", sorted({w for w in words if hasattr(builtins, w)}))
print("Names the programmer chose:", sorted({w for w in words
      if not keyword.iskeyword(w) and not hasattr(builtins, w)}))
print("Python keywords in total:", len(keyword.kwlist))
```
Run after Version 1 in the same file. It prints Keywords: ['for', 'in', 'if'], Built-in names: ['print', 'range'], Names the programmer chose: ['größe', 'zahl'] and Python keywords in total: 35.

The tokenize module splits the program into the pieces Python actually reads. Three of the words are keywords and can never change. Two are built-in names that every Python program shares. Only two belong to the programmer, and those two may be in any language. In our classes children usually start with English names as well, because a name like total or score is one more English word learned, but nothing in Python requires it.

1. **Guess first.** Before running Version 1, write down which version you think will fail and why.
2. **Find the edge.** Change only für back to for in the German version. Which line fails now?
3. **Break a name.** Try naming a variable class or if. What does Python say, and why can it not allow it?
4. **Going further.** List every keyword with print(keyword.kwlist) and write one sentence in English for each of the first ten.

PEP 3131, Supporting Non-ASCII Identifiers, status Final, Python 3.0, peps.python.org. The code, its output on Python 3.14.8 and the exercises are our own.

## Is programming documentation available in German?

Some of it is, and it is fair to say so. The official Python documentation has a German translation. But the parts a learner meets every few minutes, the keywords, the error messages and the formal specifications, are in English.

**What a beginner reads while coding, and in which language**

| What you read | In German? | Source |
|---|---|---|
| Python keywords and built-in names | No, fixed English words | Python keyword module |
| Python error messages | No, standard Python writes them in English | Our test with Python 3.14.8 |
| Official Python documentation | Yes, German is one of 17 languages in its menu | docs.python.org language switcher |
| Java Language Specification | Published in English | docs.oracle.com, Java SE 21 |
| Names you choose yourself | Yes, any language, umlauts included | PEP 3131 |

Sources: docs.python.org, language switcher file read on 3 November 2026 (17 entries, among them German and English); Oracle, Java Language Specification SE 21; PEP 3131; our own run of Python 3.14.8. The table is our summary. How complete any translation is changes over time, so we make no claim about it.

In practice that means a learner taught in German still has to read English the moment something goes wrong. Our mentors use those moments on purpose. When an error appears, the learner reads it aloud, says in their own words what they think it means, and only then fixes it. After a few weeks NameError, IndexError and invalid syntax stop being foreign words and become clues.

## Where does English already sit beside maths and Informatik in German school?

In more places than many parents expect. English is one of the subjects Germany tests nationally and examines on shared dates, and some school competitions in computing accept work in English.

**English in German school assessments and competitions, from the official sources**

| Where | What the source says | Source |
|---|---|---|
| VERA-8 | Pupils in Klasse 8 are tested in German, maths, English and French | IQB |
| ZP10 in Nordrhein-Westfalen | Central exams at the end of Klasse 10 in German, maths and English | NRW Ministry of Schools |
| Abitur task pool | Shared pools since 2017 for German, maths, and English and French as continued languages | IQB |
| Abitur dates | Since 2022 the Abitur in German, English, French and maths is held largely on common dates | IQB |
| Abitur 2027 in NRW | The written English exam is on Friday 30 April 2027 | NRW Ministry of Schools |
| BWKI | AI projects may be submitted in German or English | Bundeswettbewerb Künstliche Intelligenz |
| AGIS member schools | English is the shared language of teaching | Association of German International Schools |

Sources: IQB pages on VERA and on the Abitur; NRW standardsicherung pages on ZP10 and the 2027 Abitur dates; bw-ki.de, Teilnahmebedingungen; agis-schools.org. All read on 2 November 2026. We are not connected with any of these bodies.

For a pupil at a German school, then, an hour of coding in English is not a detour. It is practice in a subject they will be examined in, attached to a skill they want. For a pupil at an international school, it is simply the language of their school day.

## Will I understand a coding class taught in English?

Almost certainly, if your mentor does their job. Ours teach only in English and adjust to you, not the other way round. This is what that looks like in a real class.

1. **The first class sets the level.** The mentor listens to how you speak and read, and pitches their English to match before any code is written.
2. **New words arrive with the code.** Each keyword is spoken, typed and run in the same minute, so its meaning comes from what it does on screen.
3. **Rephrase, never repeat louder.** If an instruction does not land, the mentor says it differently, more slowly, or writes it in the chat.
4. **Accents are expected.** Mentors are used to many accents, including German ones, and learners soon get used to their mentor's.
5. **A short glossary grows.** Learners keep their own list of new words with a German note beside each, which is theirs to use as they like.
6. **Speaking about code is practised.** Explaining your own program aloud, in simple English, is part of every class, because it is how understanding is checked.

We never switch to German, because we do not teach in German at all, and we think it is right to say so before you book. What we do instead is make the English easy to follow. Young children usually need a few classes to settle in; teenagers and adults at a German school or workplace have generally met enough English to start straight away.

## When are English-language coding classes in German time?

On weekday afternoons and evenings, and at weekends. The mentor is in India, ahead of Germany all year round.

**Sample German class times with the mentor's time in India**

| In Germany | In India until 28 March 2027 | In India after 28 March 2027 |
|---|---|---|
| 15:15 | 19:45 | 18:45 |
| 16:45 | 21:15 | 20:15 |
| Saturday 12:00 | 16:30 | 15:30 |
| Sunday 10:00 | 14:30 | 13:30 |

German time follows the Einheitenzeitgesetz: UTC+1 (MEZ) in winter, UTC+2 (MESZ) in summer, with this winter running from 25 October 2026 to 28 March 2027. India keeps UTC+5:30 and does not change its clocks, so the difference is four and a half hours now and three and a half in summer.

Those times are examples. You choose when your free first class takes place, in German time, and a one-to-one learner can agree regular times with the mentor.

## From first English keyword to explaining your own code

How English and coding grow together in our classes. These are our own stages, not a language certificate.

**English and coding together (our stages)**

| Stage | Typical start | The learner can |
|---|---|---|
| 1. First keywords | Week 1 | Use print, if and for, and say what each one means |
| 2. Reading errors | Weeks 2 to 4 | Read an error message aloud and point to the line it means |
| 3. Naming things | Month 2 | Choose clear English names for variables and functions |
| 4. Reading documentation | Months 3 to 4 | Look up a function in the official documentation and use it |
| 5. Explaining a program | Month 5 and up | Walk someone through their own program in simple English |

### For learners

Read every error message aloud before you fix it.
Keep your glossary short: ten words you use beat a hundred you copied.

### For parents

Ask your child to explain a program to you in English. Listening is enough; you do not need to code.
A child who mixes German and English in the first weeks is learning, not struggling.

## Nine more courses taught in English

Every course below is taught live in English by a mentor who adapts to the learner.

### Children

Ages 6 to 12

- [Scratch for kids](/courses/scratch-programming-complete-course): Blocks first, with English labels on every one.
- [Minecraft coding](/courses/minecraft-coding-for-kids-course): From blocks to real code in a world they know.
- [Roblox game coding](/courses/roblox-game-coding-for-kids-lua-course): Games of their own, written in Luau.

### Teenagers

Ages 13 to 18

- [Java for teens](/courses/java-programming-masterclass-for-teens): The language of much German Oberstufe Informatik.
- [Informatik Companion](/courses/informatik-companion-course-klasse-5-10): School Informatik, Klasse 5 to 10, in English.
- [Front-end for teens](/courses/frontend-development-masterclass-for-teens): Websites with HTML, CSS and React.

### Adults

Ages 18 and up

- [Python automation](/courses/python-ai-automation-masterclass-college): Scripts that take over repetitive work.
- [HTML and CSS](/courses/html-css-course-for-beginners-build-real-websites): A first website, built by hand.
- [Java for adults](/courses/complete-java-programming-masterclass-college): From core Java to Spring Boot.

## How live classes in English work from Germany

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Afternoons** From about 15:00 German time, after school.
- **Evenings** For adults, until about 18:00 German time.
- **One to one** Regular times agreed with your mentor.

- **English only** Every class, every explanation, from the first minute.
- **Pitched to you** Speed and vocabulary set by the learner's level.
- **Words with code** Each new word is typed and run as it is learned.
- **One mentor** A voice and accent the learner soon knows well.
- **All ages** Children from 6, teenagers and adults.
- **Group or private** Fifteen to twenty learners, or one alone.

## Fees for coding classes in English from Germany

The monthly fee is for eight live classes. We display it in euro, worked out from the European Central Bank reference rate, and collect it in US dollars, so your bank makes the conversion and the euro figure on your statement may differ by a little.

- Free first class: Free. A free first class. A check of the right English level. No card needed.
- Group batch: €90 (charged in US dollars) a month. Fifteen to twenty learners of a similar level. One regular mentor. Two classes a week. Monthly, stop at any time.
- One to one: €134 (charged in US dollars) a month. One learner, one mentor. English pitched exactly to you. Times agreed together.

## Learning to code in English in Germany: common questions

### Are the classes in German?

No. Every class is live and taught in English only. Mentors match the learner's pace and accent, so a learner whose English is still growing can follow comfortably.

### Why learn coding in English rather than German?

Because the code itself is English. Python has 35 keywords and Java reserves 51, all English words, and Python reports its errors in English. Taught in English, the words you hear are the words you type.

### Can I name my variables in German?

Yes. Since Python 3.0, under PEP 3131, names may contain letters such as ä, ö, ü and ß, so größe is a valid name. The keywords, such as for and if, must stay in English.

### Is the Python documentation available in German?

Yes, the official Python documentation lists German among the 17 languages in its language menu. Error messages and keywords remain English, and we teach learners to read both.

### My child's English is basic. Can they still join?

Usually yes. The mentor pitches the English to the child in the first class, introduces each word together with the code it belongs to, and rephrases whenever needed. Young children often settle within a few classes.

### Does coding in English help with English at school?

It is extra practice in reading, listening and explaining, in a subject the learner enjoys. English is tested in VERA-8, in the NRW ZP10 and in the Abitur, but we teach coding and make no promise about school grades.

### Who are the mentors?

Our mentors are based in India and teach live over video, in English. Each learner keeps the same mentor from week to week.

### When are classes in German time?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Afternoons from about 15:00 and weekend mornings are the usual choices.

### How are fees paid from Germany?

Fees are shown in euro at the European Central Bank reference rate and paid in US dollars; your bank converts the amount. The first class is free.

### Which language should a beginner learn first?

Scratch for young children, Python for almost everyone else. Its keywords read like short English sentences, which makes it the gentlest start.

## Related pages

- [Coding classes in Germany](/coding-classes-in-germany): Every Germany page in one place.
- [Coding for kids in Berlin](/coding-classes-for-kids-berlin): For Berlin families with children of 6 to 12.
- [Informatik-Nachhilfe online](/informatik-nachhilfe-online): Our page in German about school Informatik.
- [Abitur maths in English](/abitur-maths-in-english): The maths Abitur, explained in English.
- [How we teach](/how-we-teach): A live class from start to finish.
- [Student labs](/student-labs): What our students have built.

## Contact

Book the free first class at [https://learn.modernagecoders.com/learn-coding-in-english-germany](https://learn.modernagecoders.com/learn-coding-in-english-germany#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
