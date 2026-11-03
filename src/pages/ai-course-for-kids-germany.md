---
title: "AI Course for Kids in Germany: How Machines Learn, in English"
description: "An AI course for kids in Germany aged 8 to 14, live online in English: how machines learn, which AI tools allow children, and a model your child builds and tests."
canonical: https://learn.modernagecoders.com/ai-course-for-kids-germany
source: src/pages/ai-course-for-kids-germany.html
---
> At Modern Age Coders, the AI course for children in Germany is a live online class in English for children of about 8 to 14 that teaches how AI works: how a machine learns from examples, why it makes mistakes and how to test it, using our AI Literacy for Kids course. Children build small models themselves and never need an adult chatbot account. One mentor adapts to their pace and accent, whether they learn with fifteen to twenty classmates or alone.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / AI for kids

Germany · AI literacy for children · Ages 8 to 14

# AI course for kids in Germany

Children in Germany hear about AI every day, from the news, from older siblings and from the apps their parents use. Very few have been shown how it actually works. This page is about that: what German education policy now says children should learn about AI, why most AI chatbots are not meant for a child under 13, and a project in which a ten year old builds a tiny model, tests it, and then watches it become unfair because of the examples it was given.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Ages: About 8 to 14; Focus: How machines learn, and where they fail; Chatbots: No adult chatbot accounts; Tools: Scratch, Python, child-safe trainers; Group size: Fifteen to twenty, or one to one; First class: Free, no card needed. Rated 4.9 across 547 Google reviews.

## Three AI courses for children in Germany

One course built entirely around understanding AI, one that adds typed Python and small AI projects, and one that mixes Scratch games with first AI ideas.

- [AI Literacy for Kids](/courses/ai-literacy-for-kids-course): Ages 8 to 14. What AI is, how it learns from examples, how to test it and when not to trust it, taught without adult chatbot accounts.
- [Python and AI for Kids](/courses/python-ai-kids-masterclass): For children of about 9 and up. Typed Python first, then small AI projects like the fruit model on this page.
- [Vibe coding for kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev): Ages 8 to 12. Scratch games with simple AI ideas, for children who want to make things while they learn.

## What do German schools teach children about AI?

AI is now officially part of what German schools are asked to teach, but for younger children it is a direction, not yet a weekly lesson.

### What the KMK has decided

The Kultusministerkonferenz set a shared framework for digital education in 2016, called "Bildung in der digitalen Welt", and added a recommendation on teaching and learning in a digital world in 2021.

In 2026 the KMK adopted an updated competence framework that, in its own words, extends the areas of the 2016 strategy "um KI-bezogene Kompetenzen", with AI-related competences. Since 2024 there has also been a KMK recommendation for education administrations on handling artificial intelligence in school learning.

### What that means for a child of 8 to 12

A framework tells schools what to aim for; it does not put a lesson on your child's timetable tomorrow. Most children in Grundschule today meet AI only through conversations at home.

Children who want to understand AI early, before it arrives at school as a topic, need someone to show them what is happening inside it. That is what this course is for.

**AI in German education and children's programmes, from the organisers' own pages**

| Year | What | Source |
|---|---|---|
| 2016 | KMK strategy "Bildung in der digitalen Welt" | KMK |
| 2021 | KMK recommendation "Lehren und Lernen in der digitalen Welt" | KMK |
| 2024 | KMK recommendation for administrations on AI in school learning | KMK |
| 2026 | Updated KMK competence framework with AI-related competences | KMK |
| 2027/28 | FIRST LEGO League continues as LEGO League; its Future Edition uses LEGO Education "Informatik & KI" sets | HANDS on TECHNOLOGY |
| Every year | Bundeswettbewerb Künstliche Intelligenz, for Sekundarstufe I and II pupils | BWKI |

Sources: KMK, Bildung in der digitalen Welt; FIRST LEGO League Germany, Wandel und Zukunft, which describes the programme as STEM for everyone "von 5 bis 16"; Bundeswettbewerb Künstliche Intelligenz, Teilnahmebedingungen. All read on 2 November 2026. We are not connected with any of these bodies.

## Which AI tools can a child under 13 use in Germany?

Fewer than most parents assume. The big chatbots set their own minimum ages in their terms, and none of them is designed for a primary-school child.

**Minimum ages in each provider's own terms, and what they mean for a child of 8 to 12**

| Tool | What the provider's terms say | For a child of 8 to 12 |
|---|---|---|
| ChatGPT | At least 13; under 18 only with a parent's or guardian's permission | Not for this age group |
| Claude | At least 18, or higher where local law requires | Not for children or teenagers |
| Gemini | 13 or the age that applies in the country (16 in Germany in our audit); no Gemini web app for Family Link accounts | Not for this age group |
| Teachable Machine | No age for the tool itself; a Google Account, 13 and up, only to save work | Usable with a parent, without signing in |
| Machine Learning for Kids | Students cannot create their own accounts; teachers or schools set them up | Usable through a teacher or class |

Source: each provider's own terms or help pages, quoted word for word in our [AI tools age guide](/ai-tools-age-guide) (audited 15 July 2026). Terms change; check the provider's page before signing a child up. This is a summary of what providers say, not legal advice.

So in our classes for children under 13, nobody opens a chatbot account. We do not need one. To understand AI, a child does not have to talk to a large language model; they have to see, in something small enough to follow, how a computer can learn a rule from examples and where that goes wrong. Children build those small models themselves, in Scratch and in Python, and sometimes train a picture classifier in the browser with a parent beside them.

## Can a child build an AI that tells apples from pears?

Yes, in about thirty lines of Python. And the most valuable moment comes when the child makes it worse on purpose, by changing nothing but the examples it learns from.

### The idea

At a German Wochenmarkt in autumn there are crates of apples and pears side by side. Measure a fruit's height and width, and you can usually tell which it is: apples are about as wide as they are tall; pears are taller than they are wide.

Our model learns that without being told. It keeps a list of measured fruit with their names, and for a new fruit it looks at the closest examples and lets them vote. This is called nearest neighbours, and it is a real machine-learning method.

### The data

The measurements are ours, invented for the lesson and written in centimetres: twelve fruit to learn from, six apples and six pears, and eight more kept back for testing, four of each.

Keeping test fruit apart matters. A model that is only checked on the fruit it learned from will always look clever.

**Version 1: learn from fair examples** (Python)
```python
# Our own measurements, invented for this lesson: (height cm, width cm, label)
train = [
    (7.0, 7.5, "apple"), (6.5, 7.0, "apple"), (7.5, 8.0, "apple"),
    (6.0, 6.8, "apple"), (7.2, 7.0, "apple"), (8.0, 8.2, "apple"),
    (10.0, 6.5, "pear"), (11.5, 7.0, "pear"), (9.0, 6.0, "pear"),
    (12.0, 7.5, "pear"), (9.5, 6.8, "pear"), (10.5, 6.2, "pear"),
]
test = [
    (6.8, 7.2, "apple"), (7.8, 7.6, "apple"), (8.5, 8.0, "apple"), (6.2, 6.5, "apple"),
    (10.8, 6.6, "pear"), (9.2, 6.4, "pear"), (8.6, 6.9, "pear"), (11.0, 7.4, "pear"),
]

def distance(a, b):
    return ((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2) ** 0.5

def guess(fruit, examples, k):
    nearest = sorted(examples, key=lambda e: distance(fruit, e))[:k]
    votes = [e[2] for e in nearest]
    if votes.count("apple") > votes.count("pear"):
        return "apple"
    return "pear"

def score(examples, k):
    right = sum(1 for f in test if guess(f, examples, k) == f[2])
    return str(right) + " of " + str(len(test))

print("Fair examples, k=3:", score(train, 3))
```
It prints: Fair examples, k=3: 8 of 8. With three neighbours voting, every test fruit is named correctly.

Children are delighted, and that is when we change one thing. We keep all six apples but give the model only one pear to learn from, the way a collection of photos can end up with far more of one thing than another. The code that learns is exactly the same.

**Version 2: learn from lopsided examples** (Python)
```python
lopsided = train[:6] + train[6:7]   # six apples, only one pear
print("Lopsided examples, k=1:", score(lopsided, 1))
print("Lopsided examples, k=3:", score(lopsided, 3))
for f in test:
    if guess(f, lopsided, 3) != f[2]:
        print("Wrong:", f[0], "cm by", f[1], "cm is a", f[2], "but the model says", guess(f, lopsided, 3))
```
After Version 1, it prints: Lopsided examples, k=1: 7 of 8, Lopsided examples, k=3: 4 of 8, then four lines, starting with Wrong: 10.8 cm by 6.6 cm is a pear but the model says apple. Every pear in the test is called an apple.

**Same code, different examples (our results)**

| Examples the model learned from | Neighbours voting | Test fruit right | Pears right |
|---|---|---|---|
| Six apples, six pears | 3 | 8 of 8 | 4 of 4 |
| Six apples, one pear | 1 | 7 of 8 | 3 of 4 |
| Six apples, one pear | 3 | 4 of 8 | 0 of 4 |

Our own invented data and our own results, from Python 3.14. The method is k nearest neighbours with two measurements per fruit.

Why does the last row fail so badly? With three neighbours voting and only one pear in its memory, the model can never find two pears to outvote the apples, so it can never answer "pear" at all. Nothing in the code is broken. The examples are. Children understand straight away what this means for any AI: it can only be as fair as what it learned from, and someone has to check.

1. **Ages 8 to 9, at the kitchen table.** Measure five apples and five pears with a ruler and write the numbers down. Can you find a rule that sorts them? Does it work on a sixth fruit?
2. **Ages 9 to 11, Scratch.** Put the measurements into two lists and make a sprite that finds the closest fruit to a new one and says its name.
3. **Ages 11 to 14, Python.** Run Version 1 and Version 2, then add two more pears to the lopsided list and predict the new score before running it.
4. **Going further.** Add a third kind of fruit, quinces, and invent measurements for them. What happens to the vote when there are three kinds?

## How do children learn to think about AI, not just use it?

By building small versions themselves and asking hard questions of them. These are the habits we teach, in every lesson.

### Ask where it learned

Every model learned from examples. Children practise asking: which examples, how many, and who chose them? The fruit project makes the question concrete.

### Test on something new

A model that is right about what it has seen proves nothing. Children always keep test examples apart and count how often the model is right on those.

### Explain it yourself

If a child cannot explain an answer, they do not own it, wherever it came from. We never let children hand in work an AI produced for them.

Our mentors teach from India and only in English. AI has its own small vocabulary, examples, training, testing, accuracy, bias, and children pick it up in English quickly because it is the same vocabulary they will meet everywhere later. A child at a German school who also learns the German words at school ends up with both.

**Two sample AI slots and the matching hour in India**

| German clock | Indian clock now | Indian clock after 28 March 2027 |
|---|---|---|
| Weekday 14:45 | 19:15 | 18:15 |
| Sunday 12:00 | 16:30 | 15:30 |

Germany is on MEZ, UTC+1, until summer time starts on 28 March 2027, then on MESZ, UTC+2, as set by the Einheitenzeitgesetz; it last left summer time on 25 October 2026. With India fixed at UTC+5:30, Indian clocks run 4 h 30 ahead of German ones this winter and 3 h 30 ahead from spring. Samples only; no batch is pinned to them.

## Five steps to understanding AI

Our own milestones for children learning about AI, from first idea to a model they can criticise.

**AI literacy milestones for children (ours)**

| Step | Usual age | Your child can |
|---|---|---|
| 1. Spot it | 8 to 9 | Say which everyday things use AI and which just follow fixed rules |
| 2. Teach it | 9 to 10 | Train a simple classifier with examples, with a parent or in class |
| 3. Test it | 10 to 11 | Keep test examples apart and count how often the model is right |
| 4. Break it | 11 to 12 | Change the examples on purpose and explain why the model got worse |
| 5. Judge it | 12 to 14 | Say what a model cannot know and when a person must check it |

### For parents

Step 4 is the fruit project. A child who has broken a model with lopsided examples will never again assume an AI answer is neutral.
We judge progress by the models your child can make and defend, not by apps opened.

### For children

An AI only knows what it was shown. Always ask what that was.
If the model is right about everything it has seen, test it on something it has not.

## Nine more courses for children curious about AI and coding

Each is live and in English, with one mentor, and none asks a child under 13 to use an adult AI account.

### Thinking skills

Ages 6 to 12

- [Reasoning for young thinkers](/courses/reasoning-and-readiness-course-for-young-thinkers): Patterns and logic for 6 to 9, the ground AI ideas stand on.
- [Computational thinking](/courses/problem-solving-and-computational-thinking-for-kids): Rules, steps and patterns, practised in puzzles.
- [German informatics competitions](/courses/german-informatics-competitions-course-biber-bwinf-bwki): From Biber puzzles towards the BWKI later on.

### Building with code

Ages 6 to 12

- [Scratch Coding for Kids](/courses/scratch-programming-complete-course): The block coding a child needs before simple models.
- [Coding for Kids](/courses/kids-coding-blocks-masterclass): A full year from Scratch to apps and first AI ideas.
- [Hackathon prep for kids](/courses/hackathon-prep-for-kids-coding-innovation-ai-projects-course): A team project with an AI twist, ending at a free hackathon for 8 to 12 year olds.

### Maths and more

Ages 9 to 15

- [Maths through coding](/courses/maths-through-coding): Distances, averages and chance in Python, the maths inside AI.
- [Websites for kids](/courses/kids-ai-web-development-course): Build and publish a page about your own project.
- [Informatik Companion, Klasse 5 to 10](/courses/informatik-companion-course-klasse-5-10): School Informatik in English, alongside the school course.

## A week of AI lessons

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Afternoons** Early or late afternoon in Germany, after school.
- **Sundays** A midday slot for a longer model-building session.
- **Private** Your child alone with the mentor, booked around family life.

- **No chatbot accounts** Children under 13 never need one.
- **Build, then test** Every model is checked on new examples.
- **Same mentor** One person who knows your child all year.
- **Plain English** AI words explained simply, then used.
- **Honest about limits** Children learn when AI is wrong, not only when it works.
- **Parent notes** What was built and what was learned.

## AI course fees for families in Germany

The fee is paid month by month and each month includes eight live lessons. You see it here in euro, using the European Central Bank reference rate as a guide; the charge goes through in US dollars and is converted by your bank, so the final euro sum can be marginally different.

- Free first class: Free. A free first AI lesson. A tiny model trained together. No card asked for.
- Group batch: €90 (charged in US dollars) a month. Fifteen to twenty children of a similar age. One mentor all year. Two lessons a week. Monthly, stop at any month's end.
- One to one: €134 (charged in US dollars) a month. Your child with one mentor. Projects shaped by your child's questions. Times that suit your family.

## What parents in Germany ask about AI for kids

### Are the classes in German?

No. Every class is live and in English only, with mentors based in India. AI has a small vocabulary of its own, and the mentor introduces each word simply, at your child's pace and with an ear for their accent.

### Will my child use ChatGPT or other chatbots?

Not in classes for under-13s. Under OpenAI's terms, ChatGPT users must be 13 or older and need a parent's permission until 18; Anthropic's terms set 18 for Claude. Children learn how AI works by building small models instead.

### What age is the AI course for?

Our AI Literacy for Kids course is for about 8 to 14. Younger children start with patterns and sorting games; from about 10 they build and test small models in Scratch or Python.

### Do German schools teach AI?

The KMK adopted an updated competence framework in 2026 that adds AI-related competences to its digital education strategy, and published a recommendation on AI in school learning in 2024. For most children of 8 to 12 it is not yet a weekly lesson.

### Does my child need to code already?

No. The first lessons need no code at all. Children who already know Scratch or Python move faster into building models, but beginners are welcome.

### When are classes in German time?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. At 14:45 in Germany the mentor's clock reads 19:15, until 28 March 2027.

### Is this about using AI to do homework?

No, the opposite. We teach children to understand and question AI, and we never let them hand in work an AI produced. A child who knows how a model learns is much harder to fool with one.

### Which AI tools are suitable for children?

Tools built for classrooms, such as Teachable Machine, which trains in the browser without signing in, and Machine Learning for Kids, where teachers set up accounts. Our AI tools age guide quotes each provider's own terms.

### How are fees shown and charged?

We show the monthly fee in euro, based on the European Central Bank reference rate. The card is then charged in US dollars, and your bank's conversion may land a few cents away from our figure. Nothing is charged for the first lesson.

### Can my child enter an AI competition later?

Yes. The Bundeswettbewerb Künstliche Intelligenz is open to pupils in Sekundarstufe I and II. Children who build models in our course have a head start; we are not connected with the competition.

## Related pages

- [Coding classes in Germany](/coding-classes-in-germany): The hub that links all our Germany pages.
- [AI and ML in Germany](/ai-and-machine-learning-classes-in-germany): For teenagers and adults.
- [AI tools age guide](/ai-tools-age-guide): Each provider's age rule, quoted.
- [AI literacy for young pupils](/ai-literacy-for-elementary-students): Our general page on AI literacy.
- [AI projects for kids](/ai-projects-for-kids): Project ideas for different ages.
- [Python for kids in Germany](/python-classes-for-kids-germany): The language children build models in.

## Contact

Book the free first class at [https://learn.modernagecoders.com/ai-course-for-kids-germany](https://learn.modernagecoders.com/ai-course-for-kids-germany#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
