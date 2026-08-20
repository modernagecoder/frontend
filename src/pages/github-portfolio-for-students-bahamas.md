---
title: "GitHub Portfolios for Bahamian Students | How It Gets Read"
description: "What an admissions reader actually does with a student repository, in ninety seconds and four steps, and how Bahamian students build one worth opening."
canonical: https://learn.modernagecoders.com/github-portfolio-for-students-bahamas
source: src/pages/github-portfolio-for-students-bahamas.html
---
> What an admissions reader actually does with a student repository, in ninety seconds and four steps, and how Bahamian students build one worth opening.

In short

Every student on the twelve-month track finishes with a public GitHub repository and something running at an address a stranger can open. This page explains what a reader actually does with that link, in four steps and about ninety seconds, and what a repository therefore has to contain to survive the encounter: a README a human would read, an error figure in a real unit, an explicit statement of what the project cannot do, and a commit history spread across the year rather than a single upload. Firm privacy rules apply to every student under eighteen.

Start from the reader, not the writer

## What somebody actually does with the link, in about ninety seconds

Almost every piece of advice about student portfolios is written from the student's side. This is written from the side of the person opening it, because that is who decides whether it worked.

1. #### They read the repository name and the first two lines, in about five seconds

  If those do not say what the thing is and who it is for, most readers stop. A repository called project-final tells them nothing; one called ferry-delay-model with a one-line description tells them everything they need to decide whether to continue. This is the cheapest win available and almost nobody takes it.
2. #### They scroll the README, in about thirty seconds

  Not reading every word: scanning for structure. What does it do, what was the data, how well does it work, what would the author do next. A wall of undifferentiated text fails here even if every sentence in it is good, which is why the six-part shape below matters more than the prose quality.
3. #### They look at the commit history, in about fifteen seconds

  This is the step students never anticipate and readers almost always take. Twelve months of small dated commits with meaningful messages reads completely differently from one commit made the night before. It is the only part of a portfolio that cannot be produced quickly, which is exactly why it carries weight.
4. #### They open one file and read about forty lines

  Usually the main one. They are not auditing correctness; they are checking whether the code looks like something a person understood while writing it. Sensible names, short functions, a comment where the reasoning is not obvious. Forty lines is enough to tell, and it is where the decision is normally confirmed.

Ninety seconds, four steps, and the decision is usually made by the end of the second. Notice that none of those steps involves running the code. A reader assessing a school-age applicant is not going to install anything; they are going to read, and they are going to look for evidence that the author understood their own work.

The document that carries the whole thing

## A README that gets read, in six short parts

A short honest page outperforms a long generated one every time, and the act of writing it is where a student finds out which parts of their own build they were never actually clear on.

| Part | How long | What it has to answer |
| --- | --- | --- |
| What it is | One or two sentences | What does this do and who is it for |
| Why it exists | Two or three sentences | What question the student was trying to answer |
| The data | A short paragraph | Where it came from, how much there was, what was wrong with it |
| How well it works | Two lines | The error in a real unit, and what a baseline scored |
| How to run it | A few lines | Enough that a stranger could, without asking the author |
| What it cannot do | One honest paragraph | The conditions under which it breaks, ideally with the test |

The last row is the one students fight hardest and the one that most changes how the work is received. A page stating that the model degrades badly on short records, with the check that demonstrates it, reads as engineering. The same project with that paragraph missing reads as an author hoping nobody looks too closely. Identical code, opposite impression.

The three that sink it

## What makes a reader close the tab

These are not stylistic complaints. Each one destroys the reader's ability to assess the work at all, which is worse than the work being weak.

### An accuracy figure with nothing to compare it to

Ninety-four per cent of what? Against what alternative? Without a baseline the number is decoration, and a technical reader knows it instantly. This is the most common single fault in school-age machine learning work and it is fixed by one line of code.

### A repository that cannot be run or read

No instructions, a notebook that depends on a file nobody has, cells that must be run in an order only the author knows. A reader will not debug a stranger's setup. If it cannot be understood by reading, it will not be understood.

### One commit, made at the end

It removes the only evidence in the whole artefact that cannot be produced quickly. The work may be entirely the student's and there is now no way for anybody to tell, which in 2026 is a genuine problem rather than a presentational one.

All three are avoidable and none requires the project to be more advanced. They are the reason we insist on a baseline in quarter three, a written README rather than a generated one, and weekly commits from the first month rather than an upload at the end of the year.

The part that cannot be faked

## Why the commit history is worth more than the code

A repository records when each change was made. A year of weekly commits, dated, with messages describing what was being attempted, is a document about a person rather than a document about a program. It shows persistence, it shows a project surviving the week where nothing worked, and it cannot be assembled the night before a deadline.

That is precisely why we commit from the first weeks rather than uploading at the end. A finished project pushed in one commit called final is technically identical and evidentially worthless. The same work, committed weekly across twelve months, is the single most persuasive artefact a fifteen year old can hold.

It also matters for a reason peculiar to this moment. A reader looking at student work in 2026 has to consider whether a person or a tool produced it, and there is no reliable way to tell from the code alone. A twelve-month history of small, dated, increasingly capable commits, alongside a student who can explain any line of it in conversation, answers that question in a way a polished single upload cannot.

Which is also why we do not build projects for students. A teacher reviews, questions, declines to accept any figure with nothing set against it, and asks for the section still written. The student writes the code, because a portfolio the learner cannot explain fails at exactly the moment it is supposed to help.

Two Bahamas-specific points

## Why this matters more from an island, and the rules for under-eighteens

### A link does not know where it was written

Bahamian students apply to universities in the United States, Canada and the United Kingdom in significant numbers, and grades compress: a great many applicants arrive with very similar transcripts. A repository does not compress. It can be opened, read and interrogated by the person deciding, from anywhere, and the commits are dated.

For a student on a Family Island the point is sharper still. Almost every other way of demonstrating ability, a competition attended, a programme joined, a laboratory used, involves being somewhere. This one does not, which is why [the country page](/coding-and-ai-classes-in-bahamas) treats it as the central argument rather than a feature.

### What never goes in

For any student under eighteen the rules are firm and they are not negotiable: no personal information in the repository, no photographs, no real names of other people, no location detail that identifies a home or a school, and no data about identifiable individuals who have not agreed to it. A parent knows the account exists.

We also do not scrape anything a site has asked not to be scraped, and students find that constraint more interesting than they expect once they realise professionals argue about the same questions. A project that navigated those decisions well is a better talking point than one that ignored them.

Where this sits in the year is quarter four, though the committing starts in quarter one: [the twelve-month track](/python-and-ai-track-for-students-bahamas). The version of this argument written for the site as a whole is [how to build a coding portfolio](/how-to-build-a-coding-portfolio), and more shipped student work is in [Student Labs](/student-labs).

It is worth being clear about what a portfolio is not, because the word gets used loosely. It is not a personal website, it is not a collection of certificates, and it is not a list of technologies a student has encountered. It is a small number of things that run, each with a result somebody else can check and a paragraph saying where it stops working. Three of those are worth more than thirty of anything else, and a student who understands that early stops accumulating and starts finishing, which is the behaviour change this whole programme is trying to produce.

What families say

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

Fees

## What this costs

Nothing extra. Publishing is a habit rather than a module, so it runs inside whichever course a student is already taking, from the first weeks. The figures below are the same everywhere we teach outside India.

Free first class

USD 0

no card required

- Taught, not sold
- It settles which stage the learner starts at
- You watch it, then decide

Book it

Group batch

USD 100

a month, billed in US dollars

- Five to eight students, one teacher throughout
- Live video, never a recording
- Weekly build work reviewed by the teacher
- Certificate on completion

Start here

One to one

USD 150

a month, billed in US dollars

- Private teaching at your own pace
- The only way to get a weekday morning slot
- Syllabus shaped to the goal

Enquire

Questions about portfolios

## What Bahamian families ask about GitHub

### Should a twelve year old really have a public repository?

With supervision and firm rules, yes, and the reason is timing rather than fashion. A student who starts committing at twelve has six years of dated history by eighteen, and that cannot be retrofitted later. The rules are not negotiable: no personal information, no photographs, no real names of other people, nothing identifying a home or school, and a parent who knows the account exists.

### Does a portfolio actually help with university applications?

It helps in a specific way and we will not overstate it. It does not substitute for grades. What it does is separate applicants whose grades already look similar, because a reader can open a repository and assess it directly rather than taking a claim on trust. For Bahamian students applying to the United States, Canada or the United Kingdom, where transcripts compress, that distinction is the whole value.

### How much does it cost?

A group batch of five to eight students is USD 100 a month and one to one teaching is USD 150 a month, billed in US dollars, the same flat figures everywhere outside India. There is no enrolment fee, no annual contract, and the first class is free without a card.

### Do you build the projects for the students?

No, and it is worth being blunt because some providers effectively do. A teacher reviews, asks questions, refuses to accept an accuracy figure with no baseline behind it, and points at the paragraph the student has not written. The student writes the code. A portfolio a learner cannot explain in conversation is worse than none, because it fails at precisely the moment it was supposed to help.

### What if the project is not impressive?

Then it is an unimpressive project, published honestly, which is worth considerably more than nothing published. None of the six README parts asks the work to be advanced. They ask it to be clear, measured and honest about its limits. A linear model documented that way reads better to an experienced person than something ambitious with nothing behind it.

### Is a GitHub account free, and does my child need to buy anything?

It is free, and so are Git, Python and the libraries. Deployment for a student project is normally free too. Across our whole catalogue the only exception is the coding agents course, where the student needs their own subscription to the tools that course works with, and that is stated on the course page.

### What about work my child produced with AI assistance?

It can go in, with the assistance disclosed in the README, which is what a professional would do. What matters is whether the student can explain it. We test that in review sessions by asking what a given line does and what would happen without it, and a portfolio that cannot survive those questions gets rewritten rather than published.

### Can you review a portfolio my child already has?

Yes, and it comes up often in private teaching. We take the existing work through the six parts one at a time, and what is generally missing is the comparison figure and the honest paragraph about where it breaks rather than any further building. A handful of sessions usually gets there, and the same project reads very differently afterwards.

### How often should a student commit?

Weekly, in small pieces, with messages that say what was being attempted. The habit matters more than the size: a hundred small commits across a year is a far better document than ten large ones, because it shows the shape of the work rather than only its endpoints.

### What happens after we send the form?

A mentor telephones you at a Bahamian hour to arrange the free session. Nothing is charged and no card is requested. If there is already work sitting on a laptop, bring it to that session rather than starting fresh: an hour spent auditing what exists tends to be worth more than an hour spent adding to it.

Start here

## Bring what exists, or start from a blank repository

The free first session handles either case. Where there is existing work, we audit it against the six parts and say plainly what is absent, and the answer is nearly always a comparison figure and an honest account of the limits rather than additional features. Where there is nothing yet, the session settles which rung the learner is on and what could realistically be published by the end of a first quarter.

Rather read first? [The twelve-month track](/python-and-ai-track-for-students-bahamas), [Student Labs](/student-labs), or the site-wide [guide to building a coding portfolio](/how-to-build-a-coding-portfolio).

[WhatsApp us](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20want%20a%20free%20class%20for%20a%20student%20in%20the%20Bahamas%20who%20wants%20to%20build%20a%20GitHub%20portfolio.) · [+91 91233 66161](tel:+919123366161) · [contact@modernagecoders.com](mailto:contact@modernagecoders.com)

We hold no premises anywhere in the Bahamas. Every session is a live video call taught from India, and the number above rings in India.

[Chat with us](https://wa.me/919123366161?text=Hi%2C%20I'm%20interested%20in%20learning%20more%20about%20your%20courses!)

---

*Canonical: https://learn.modernagecoders.com/github-portfolio-for-students-bahamas*
