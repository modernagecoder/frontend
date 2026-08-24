---
title: "How to Actually Learn to Code | Why Tutorials Feel Like Progress"
description: "The feeling of understanding and the fact of it come apart, and most formats optimise the feeling. What actually builds real skill, and what it costs you."
canonical: https://learn.modernagecoders.com/how-to-actually-learn-to-code
source: src/pages/how-to-actually-learn-to-code.html
---
> The feeling of understanding and the fact of it come apart, and most formats optimise the feeling. What actually builds real skill, and what it costs you.

Start here

## Where this shows up in the catalogue

Everywhere, because it is a design principle rather than a course. What it means in practice is that no class starts by filling in somebody else's file.

[![Python for Teens course thumbnail](/images/python-teens.webp)  DEPTH / 01 Python for Teens Blank files, build work between sessions, and a teacher who does not rescue too early. This page as a two-year course. Open the syllabus →](/courses/python-complete-masterclass-teens)[![Python and AI for Kids course thumbnail](/images/python-kids.webp)  DEPTH / 02 Python and AI for Kids The same design for younger learners, where protecting the moment of being stuck matters most and is hardest for adults to watch. Open the syllabus →](/courses/python-ai-kids-masterclass)[![Data Science for Teens course thumbnail](/images/data-science-teens.webp)  DEPTH / 03 Data Science for Teens The first course where nobody has a tutorial for that particular broken file, which is where real learning starts. Open the syllabus →](/courses/data-science-course-for-teens-python-data)

The short answer

The feeling of understanding and the fact of understanding are different quantities, and most popular learning formats optimise the first. Watching a competent person solve a problem produces genuine comprehension of each step while building almost no ability to produce it, which is why students finish long video courses and still cannot start from an empty file. Skill is built in the moments of being stuck, so Modern Age Coders teaches live in small batches with blank-file starts, build work between sessions and a teacher who declines to rescue a student too early. It is slower and less comfortable in the first month and we say so before anyone enrols. Group teaching is USD 100 a month, private is USD 150, first class free.

The uncomfortable finding

## The feeling of understanding and the fact of understanding come apart

This is the whole problem, and once you have seen it you cannot unsee it in any educational product, including the ones with excellent reviews.

When you watch somebody competent solve a problem, each step is obvious as it happens. Of course you put the loop there. Of course that is the condition. Your brain generates a strong and entirely genuine sense of comprehension, and that sense is what you take away as evidence that you learned something.

It is not evidence. It is a report on how easy the material was to *follow*, which is a different quantity from how well you can *produce* it. The two are only loosely related, and the design of most courses actively widens the gap, because a course that feels hard gets worse reviews than one that feels smooth.

This is why the tutorial-completing student is such a familiar figure. They have finished forty hours of video, they can nod along to any explanation, they have built six projects by following instructions, and they cannot start from an empty file. Nobody misled them. They did the work. The work was measuring the wrong thing.

Everything below follows from that one observation. If comfort is a poor signal, then a serious programme has to be organised around difficulty that is chosen rather than avoided, and it has to be honest that this will feel worse than the alternative while producing more.

Two sessions, same eight lines

## The one that felt good, and the one that worked

These are the same eight lines of code learned two ways. One took nine minutes and felt excellent. The other took thirty-six and felt like failure.

***AFTER WATCHING A TUTORIAL**what you can do*

```
# The video built this. You followed every step.
# It made complete sense at the time.

@app.route("/items/<int:item_id>")
def get_item(item_id):
    item = db.query(Item).get(item_id)
    if item is None:
        abort(404)
    return jsonify(item.to_dict())

# Now close it and write it from nothing.
```

Almost everybody can follow this line by line and feel it click. A large fraction of the same people cannot reproduce it twenty minutes later from an empty file.

***WHAT ACTUALLY BUILT THE SKILL**the session that worked*

```
11:04  Blank file. Write the route. Wrong.
11:09  Read the error. Decorator syntax.
11:11  Works. Now the id is a string.
11:18  Find the converter. Type it wrong twice.
11:23  Works. Missing item returns 500.
11:31  Learn that abort exists, and why.
11:40  Done. Ugly. Mine.

# Thirty-six minutes for eight lines.
# Felt terrible. Retained for years.
```

The second session felt far worse and was worth perhaps twenty times more, and that inversion is the single most important thing on this page.

Look at the timestamps in the right-hand block. Every gap is a moment of being stuck, and every one of those moments is where the learning happened. Not at 11:40 when it worked. At 11:09, when the error was read and something had to be worked out with nothing to copy from.

This is why we do not give students working examples to modify at the start of a topic. A partially-filled file removes exactly the moments that would have produced the retention. It feels helpful and it is the most common way well-intentioned teaching fails.

What to do instead

## Six practices, roughly in order of how much they change

None of these is comfortable. All of them are cheap, and the first one alone is worth more than any change of course, language or platform.

1. #### Close the tutorial and rebuild it from nothing

  Not the same day. The next day, from an empty file, with the tab shut. This single practice separates people who progress from people who accumulate hours, and it is unpleasant enough that almost nobody does it without being made to.
2. #### Get stuck on purpose and stay there for twenty minutes

  Long enough for retrieval to happen, short enough not to lose an evening. The instinct to look up the answer at ninety seconds is the instinct that has to be trained out, because the effort of not finding it is the mechanism.
3. #### Build something nobody has a tutorial for

  The moment your project stops matching any video is the moment you start learning to program rather than to follow. It is also, not coincidentally, when most self-taught learners quit, so it helps to have somebody there.
4. #### Finish things, even badly

  A finished ugly project teaches more than three abandoned elegant ones, because the last twenty per cent contains all the parts nobody demonstrates: deployment, edge cases, the bit where you have to name things.
5. #### Explain it to somebody without notes

  Speaking forces retrieval in a way rereading cannot, and the gap in your understanding tends to appear in the middle of your own sentence. This is why our sessions require students to talk, and why silent watching is not on the timetable.
6. #### Space it out instead of massing it

  Ninety minutes a week for a year beats a forty-hour week by a wide margin, and it is not close. Forgetting slightly between sessions and having to retrieve is the mechanism, which is why we teach weekly and set build work rather than revision.

Signals, sorted

## What feels like learning, and what learning actually feels like

|   | Feels like learning | Actually is learning |
| --- | --- | --- |
| In the moment | Smooth, everything makes sense | Slow, mildly frustrating |
| Your role | Following a working example | Producing from a blank file |
| On an error | The instructor already fixed it | You read it and work it out |
| Pace | Fast, lots of ground covered | Slow, small ground held |
| Afterwards | Confident | Unsure, but able to do it again |
| A week later | Mostly gone | Mostly still there |

The awkward implication of the right-hand column is that a student having a smooth, satisfying time is often a warning sign, and a student who is mildly frustrated and still going is usually doing well. We say this to families at the start, because otherwise the first month reads as a bad fit when it is working.

Traps

## Six ways serious people waste years

### Tutorial hopping

Finishing a course, feeling unready, and starting another one on the same material. The problem was never the explanation, so a better explanation cannot fix it. What is missing is production, and no amount of input supplies output.

### Waiting to feel ready to build

That feeling does not arrive from study, only from building. Every experienced programmer starts projects they do not yet know how to finish, and the not-knowing is the normal condition rather than a sign of being underprepared.

### Optimising the setup

Weeks lost to editor configuration, keyboard shortcuts, the perfect environment and which distribution. It is genuinely absorbing, it feels technical, and it produces nothing. This one catches thoughtful people especially.

### Choosing by employability alone

Picking a language purely on job listings and then not enjoying it enough to persist. Almost any mainstream language transfers; interest is a real input and pretending otherwise is how motivation is squandered.

### Reading about code instead of writing it

Books, articles, videos and threads about programming feel like study and are consumption. There is a healthy ratio and it is far more writing than reading, particularly early.

### Letting an assistant do the stuck part

The newest and most effective trap. Asking a model at the first difficulty removes precisely the interval that would have built the skill, and it is invisible because the code still appears. Use it after twenty minutes, not before.

What this implies about us

## How a programme looks when it is built on this, and what it costs you

### What we do

Small batches, because the teacher has to see the moment a student gets stuck and decline to rescue them too early. Live, never recorded, because a recording cannot withhold a hint. Build work between sessions rather than revision, because the gap is where retrieval happens. And a project the student chose, because chosen problems survive the week when nothing works.

If you want the sequence rather than the method, that is a different question and it is answered on our [coding roadmap](/coding-roadmap). This page is deliberately not a roadmap: which language first matters far less than whether the learner is ever allowed to be stuck.

### What it costs you

It is slower to start. A student following a tutorial builds something impressive in week one; a student here builds something ugly in week three and can rebuild it in week four. For families comparing on visible early output, we lose that comparison, and we would rather explain why than change the method.

It is also less comfortable, and some learners genuinely do better with a gentler on-ramp first. We will say so on the free class rather than take the booking. The related question of what thinking to practise while stuck is on [how to think like a programmer](/how-to-think-like-a-programmer).

The catalogue

## Where this shows up in the catalogue

Everywhere, because it is a design principle rather than a course. What it means in practice is that no class starts by filling in somebody else's file.

I

### Where this design shows up

Chosen for this page rather than listed in full

DEPTH / 01

#### Python for Teens

Blank files, build work between sessions, and a teacher who does not rescue too early. This page as a two-year course.

[Open the syllabus](/courses/python-complete-masterclass-teens)

DEPTH / 02

#### Python and AI for Kids

The same design for younger learners, where protecting the moment of being stuck matters most and is hardest for adults to watch.

[Open the syllabus](/courses/python-ai-kids-masterclass)

DEPTH / 03

#### Data Science for Teens

The first course where nobody has a tutorial for that particular broken file, which is where real learning starts.

[Open the syllabus](/courses/data-science-course-for-teens-python-data)

DEPTH / 04

#### Python and AI Automation

For adults, who protect their own comfort more than children do and therefore need this discipline more, not less.

[Open the syllabus](/courses/python-ai-automation-masterclass-college)

Students who arrive through this page also take [Python and AI for Kids](/courses/python-ai-kids-masterclass) · [AI Literacy for Kids](/courses/ai-literacy-for-kids-course) · [Python for Teens](/courses/python-complete-masterclass-teens) · [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) · [Data Science for Teens](/courses/data-science-course-for-teens-python-data) · [Git and GitHub](/courses/git-github-version-control-course-for-teens) · [AI and ML Masterclass](/courses/ai-ml-masterclass-complete-college) · [Generative AI: LLMs, RAG and Agents](/courses/complete-generative-ai-masterclass-college). The full list is on the [catalogue](/courses).

Fees

## What it costs, anywhere in the world

One flat pair of figures everywhere we teach outside India, in US dollars, monthly, no minimum term. You can stop at the end of any month, which is why we can afford to tell you when we are the wrong fit.

Free first class

USD 0

no card required

- Taught rather than sold
- It settles which rung the learner starts on
- You watch it, then decide

Book it

Group batch

USD 100

a month, billed in US dollars

- Five to eight students, one teacher throughout
- Live video, never a recording
- Build work between sessions, reviewed by the teacher
- Certificate on completion

Start here

One to one

USD 150

a month, billed in US dollars

- Private teaching, at the pace the goal needs
- The only way to get a weekday morning slot
- Syllabus shaped to one objective

Enquire

What learners and families say

## Rated 4.9 across 547 Google reviews

Real reviews from real families. We neither write nor commission them.

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

The rest of the series

## The nine other pages in this series

This page is about how skill is built. The thinking, reading and debugging pages are about what specifically to practise once you accept being stuck.

[Agentic coding/agentic-coding-classes](/agentic-coding-classes)[Reading code/how-to-read-code](/how-to-read-code)[Debugging/how-to-debug-code](/how-to-debug-code)[Thinking like a programmer/how-to-think-like-a-programmer](/how-to-think-like-a-programmer)[How LLMs work/how-llms-actually-work](/how-llms-actually-work)[Context engineering/context-engineering-course](/context-engineering-course)[RAG systems/rag-systems-course](/rag-systems-course)[Evaluations/ai-evaluations-course](/ai-evaluations-course)[MCP/model-context-protocol-mcp-course](/model-context-protocol-mcp-course)

Questions about learning to code

## What learners and parents ask

### Are you saying tutorials are useless?

No. They are excellent for orientation: seeing what a technology is, what it feels like, whether you want it. They are poor at building the ability to produce, because following is a different action from producing. Watch one, then close it and rebuild the thing the next day from nothing. The video did its job; the rebuild does yours.

### Which language should we start with?

That is genuinely a different question and we answer it properly on the coding roadmap rather than here. The short version is that it matters far less than people think, and much less than whether the learner is ever allowed to be stuck. We start most people on Python and it is not a strong opinion.

### How much does it cost?

A group batch of five to eight students is USD 100 a month and one to one is USD 150 a month, billed in US dollars, and these are the same flat figures everywhere we teach outside India. No enrolment fee, no minimum term, and the first class is free without a card.

### My child says the class is hard and they liked their old one more. Is something wrong?

Possibly not, and this is the most common conversation we have in month one. A class where a student is mildly frustrated and still going is usually working; a class where everything is smooth is often producing very little. That said, mild frustration and genuine misery are different things, and if it is the second one, tell us, because that is a fit problem and we would rather move them than lose them.

### Can this be self-taught?

Yes, and many excellent programmers did exactly that. It is harder mainly for one reason: the method requires somebody to withhold help at the right moment, and almost nobody can withhold help from themselves. The internet will answer in four seconds and the twenty-minute interval is where the learning was.

### Is watching recorded classes not more flexible?

More flexible and considerably less effective, which is the trade families should make knowingly. A recording cannot notice you are stuck, cannot decline to help, and cannot ask you to explain it back. Every session here is live for that reason and not for a scheduling one.

### How long until my child can build something real?

Something small and genuinely theirs, usually within a term. Something a stranger can use, typically within a year at ninety minutes a week plus build work. Anyone offering a much faster number is describing a guided build, which is a demonstration of the teacher's ability rather than the student's.

### Does using AI ruin this?

It can, and it is the newest version of an old trap. Asking a model at the first difficulty removes exactly the interval that produces the skill, and it hides the loss because working code still appears. Our rule is that it comes out after twenty minutes of genuine attempt, and used that way it is a good tutor rather than a substitute for thinking.

### What about adults starting from zero?

Everything on this page applies unchanged, with one difference: adults are far more likely to protect their own comfort, because being visibly bad at something is worse at forty than at twelve. The practices are the same and the discipline required is greater. Most adults do best one to one for the first few months.

### What happens after I send the form?

A mentor calls to arrange the free class. That session deliberately includes a moment where you are stuck and we do not immediately rescue you, because how that feels is the single most useful thing to know before committing to anything. If you hate it, that is real information and it has cost you nothing.

Start

## The free class includes being stuck. On purpose.

We build a moment into the first session where the learner does not know what to do next, and we sit with it rather than stepping in. It is the most honest possible preview, because that experience is the substance of the whole programme and everything else is arrangement around it. Ninety minutes, no card, no obligation, and if the answer afterwards is that a gentler on-ramp suits this learner better, we will say so.

Rather read first? [Which language first](/coding-roadmap), [how to think like a programmer](/how-to-think-like-a-programmer), or [how we teach](/how-we-teach).

[WhatsApp us](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders.%20I%20am%20trying%20to%20work%20out%20how%20to%20actually%20learn%20to%20code%20properly.) · [+91 91233 66161](tel:+919123366161) · [contact@modernagecoders.com](mailto:contact@modernagecoders.com)

We hold no premises anywhere. Every session is a live video call taught from India, and the number above rings in India. Sending the form opens a conversation rather than an enrolment, and holds no place in any batch.

## Keep exploring Modern Age Coders

### Related courses and guides

- [How To Build a Coding Portfolio That Holds Up Under Questioning](/how-to-build-a-coding-portfolio)
- [How Large Language Models Work](/how-large-language-models-work)
- [How Computer Vision Works](/how-computer-vision-works)
- [Homeschool Coding Curriculum](/homeschool-coding-curriculum)
- [Hackathons for High School Students](/hackathons-for-high-school-students)
- [JEE Aspirant Coding Track: Python & Computational Maths for](/jee-aspirant-coding-track)
- [Hackathon 1.0 Guide (June 2026): How It Worked, 3 Rounds](/hackathon-guide)
- [Coding Classes for DPS Vasant Kunj Students Students](/coding-classes-for-dps-vasant-kunj-new-delhi)
- [RAG Systems Course](/rag-systems-course)

### Free resources

- [Java Tutorial for Beginners to Advanced](/resources/java)
- [Date and Time Functions](/resources/sql/date-and-time-functions)
- [Installing Java and Setting Up Your Environment](/resources/java/installing-java-and-setup)
- [Self Joins and Multi-Table Queries](/resources/sql/self-joins-and-multi-table)

### From the blog

- [12 Best Coding Games for Kids (2026), Free & Fun to Play](/blog/top-coding-games-platforms-make-learning-fun-kids)
- [USACO Bronze to Silver: What Actually Blocks You](/blog/usaco-bronze-to-silver-what-blocks-most-students)
- [What is Vibe Coding? The Ultimate Deep-Dive Guide to AI-Powered](/blog/what-is-vibe-coding-future-of-software-development)

### Start here

- [Try a free trial class with a Modern Age Coders mentor](/free-trial)
- [About Modern Age Coders, teaching since 2020](/about)

---

*Canonical: https://learn.modernagecoders.com/how-to-actually-learn-to-code*
