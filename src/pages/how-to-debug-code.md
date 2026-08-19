---
title: "How to Debug Code: Search, Do Not Guess | Live Classes"
description: "Two equally able programmers differ tenfold at debugging, and it is never knowledge. The bisection method, worked on a real intermittent bug, taught live."
canonical: "https://learn.modernagecoders.com/how-to-debug-code"
region: "global"
updated: "2026-08-19"
---

# Debugging is a search. Most people search at random.

> Debugging is a search problem: the set of possible causes is a space, and the technique is to design questions that eliminate roughly half of it whichever way the answer comes out. A guessed hypothesis eliminates one possibility out of thousands; a good cut eliminates half, so four cuts are worth about a thousand guesses. Modern Age Coders teaches this by deliberately introducing non-obvious defects into a student's own working project, requiring a stated hypothesis before any change, and practising on the bugs that do not announce themselves rather than on crashes. Group teaching is USD 100 a month, private is USD 150, and the first class is free without a card.

## Two people, the same defect

Put the same bug in front of two students who write comparably good code. One finds it in fifteen minutes, one is still there the next day, and the difference is almost never knowledge.

Watch the slow one. They change something, run it, change something else without undoing the first, and twenty minutes later the program has four modifications none of which can now be evaluated. That is not debugging, it is stirring. The fast one treats the possible causes as a space and repeatedly cuts it in half.

## A real bug, in four cuts

The report is: sometimes the weekly total is wrong, maybe once a fortnight, no error, nothing in the logs, fine locally.

1. **Data or code?** Re-run last month's data through today's code. Still wrong, so the code, and the data is eliminated.
2. **Which half of the pipeline?** Print the subtotal before aggregation. Already wrong, so it is upstream, and reporting is eliminated.
3. **Which rows differ?** Diff against a good run. Seventeen rows missing, all late Sunday. So it is a boundary, not a calculation.
4. **What is special about Sunday night?** The window is built in local time. The clocks changed.

The property that matters is that **every cut was informative whichever way it came out**. A guessed cause eliminates one possibility out of thousands; a good cut eliminates half.

## The procedure

1. **Reproduce it before you understand it.** Getting from sometimes to every time is frequently most of the work.
2. **Read the error, all of it.** A startling proportion of the time it names the file, the line and the cause.
3. **Write down what you believe is true.** One falsifiable sentence, so the next action can disprove something.
4. **Design a cut, not a test of your hunch.** A question that only helps if you were right is a guess wearing a lab coat.
5. **Change one thing, and revert it if it fails.** Two simultaneous changes destroy the information from both.
6. **When you find it, ask why it was possible.** Fixing the line takes a minute. Fixing the category stops the next five.

## Guessing and searching

| Stage | Guessing | Searching |
|---|---|---|
| First move | Change the suspicious line | Reproduce it reliably |
| The error text | Skimmed as noise | Read completely, as evidence |
| Next action | Whatever comes to mind | Whatever eliminates the most |
| On being wrong | Discouraging | Informative, half the space is gone |

## How it is taught

We introduce defects deliberately into a student's own working project and hand it back. They know a bug exists and nothing else, which is the professional situation. The defects are chosen not to announce themselves: an off-by-one at a boundary, a timezone, a mutable default, a float comparison. The rule is that a hypothesis must be stated aloud before anything is touched, along with what result would disprove it.


## The courses this draws on

**Children, ages 6 to 12**
[Python and AI for Kids](https://learn.modernagecoders.com/courses/python-ai-kids-masterclass) . [AI Literacy for Kids](https://learn.modernagecoders.com/courses/ai-literacy-for-kids-course) . [Kids Coding Blocks](https://learn.modernagecoders.com/courses/kids-coding-blocks-masterclass)

**Teenagers, ages 13 to 18**
[Python for Teens](https://learn.modernagecoders.com/courses/python-complete-masterclass-teens) . [AI and Machine Learning for Teens](https://learn.modernagecoders.com/courses/ai-ml-masterclass-teens) . [Data Science for Teens](https://learn.modernagecoders.com/courses/data-science-course-for-teens-python-data) . [Git and GitHub for Teens](https://learn.modernagecoders.com/courses/git-github-version-control-course-for-teens) . [Coding Agents: Codex and Claude Code](https://learn.modernagecoders.com/courses/codex-and-claude-code-ai-coding-agents-course-for-teens)

**University students and working adults**
[AI and ML Masterclass](https://learn.modernagecoders.com/courses/ai-ml-masterclass-complete-college) . [Generative AI: LLMs, RAG and Agents](https://learn.modernagecoders.com/courses/complete-generative-ai-masterclass-college) . [Data Science Masterclass](https://learn.modernagecoders.com/courses/data-science-complete-masterclass-college) . [Python and AI Automation](https://learn.modernagecoders.com/courses/python-ai-automation-masterclass-college) . [Data Structures and Algorithms](https://learn.modernagecoders.com/courses/data-structures-algorithms-masterclass-college) . [Git and GitHub, in depth](https://learn.modernagecoders.com/courses/git-github-advanced-version-control-masterclass-for-professionals)

The full list is on the [catalogue](https://learn.modernagecoders.com/courses).


## Fees

| Plan | Price | Included |
|---|---|---|
| First class | Free | Taught rather than sold. No card |
| Group batch | USD 100 a month | 5 to 8 students, the same teacher throughout |
| One to one | USD 150 a month | Private teaching, syllabus shaped to one goal |

The same figures apply in every country we teach outside India, billed in US dollars. No enrolment fee, no annual contract and no minimum term. Every session is a live video call taught from India, and the telephone number is an Indian one. Courses built around a commercial coding agent require the student's own subscription to that tool, which is stated on those course pages.


## The rest of the depth series

[Agentic coding](https://learn.modernagecoders.com/agentic-coding-classes) . [How to read code](https://learn.modernagecoders.com/how-to-read-code) . [How to debug code](https://learn.modernagecoders.com/how-to-debug-code) . [How to think like a programmer](https://learn.modernagecoders.com/how-to-think-like-a-programmer) . [How to actually learn to code](https://learn.modernagecoders.com/how-to-actually-learn-to-code)

[How LLMs actually work](https://learn.modernagecoders.com/how-llms-actually-work) . [Context engineering](https://learn.modernagecoders.com/context-engineering-course) . [RAG systems](https://learn.modernagecoders.com/rag-systems-course) . [AI evaluations](https://learn.modernagecoders.com/ai-evaluations-course) . [Model Context Protocol](https://learn.modernagecoders.com/model-context-protocol-mcp-course)

Contact: [WhatsApp](https://wa.me/919123366161) . [+91 91233 66161](tel:+919123366161) . [contact@modernagecoders.com](mailto:contact@modernagecoders.com)

Facts last verified 19 August 2026.
