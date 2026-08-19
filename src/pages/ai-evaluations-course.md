---
title: "AI Evaluations Course | Measure It, or You Are Just Hoping"
description: "Almost every AI project that stalls stalls in one place: nobody can say whether this week beats last week. Build the eval set before the system. Live online."
canonical: "https://learn.modernagecoders.com/ai-evaluations-course"
region: "global"
updated: "2026-08-19"
---

# If you cannot measure it, you are not engineering it. You are hoping.

> An evaluation set is a written list of inputs with the answers you expect, run every time anything changes. Without one, a team improving an AI system has only impressions to go on, which are biased towards the cases they tried, forget what the previous version did, and cannot detect regressions. Modern Age Coders teaches evaluation as the first step of every AI project a student runs, built before the prompt and before retrieval, because a number without something to compare it to is meaningless. Grading uses exact checks where possible, model judges where not, and a human-reviewed sample to keep the judges honest. Group teaching is USD 100 a month, private USD 150, first class free.

## Where AI projects stall

The demo stage is easy. The trouble starts when you try to improve it, because improvement requires comparison and there is usually nothing to compare against.

So the team falls back on looking at output and forming an impression. That instrument is biased towards the cases they happened to try, forgets what last week's version did, and cannot detect what they broke while fixing something else. A week of it produces four changes shipped and zero attributable, and nobody can say whether Friday beats Monday.

## The smallest thing that fixes it

A file of cases. Each has an input, what a correct answer must contain, what it must not, and where the answer comes from. Forty of them is enough to change how a team works.

Two things about it matter more than the format. First, how modest it is: no framework, no dashboard, a text file. Second, that cases accumulate notes like *was wrong in v3*, at which point the set stops being a checklist and becomes institutional memory.

Writing it also forces something useful. To record an expected answer you must decide what the right answer is, and teams routinely discover here that they disagree about what the system is for.

## Six steps

1. **Write the cases before you build anything.** A set written afterwards describes what the system does rather than what it should do.
2. **Collect real inputs, not tidy ones.** Badly phrased, ambiguous, out of scope. A set of well-formed questions measures a system nobody will use.
3. **Include everything you already got wrong.** This is how a set becomes memory rather than a checklist.
4. **Grade with the cheapest instrument that works.** Exact checks and structural validation are free and deterministic.
5. **Run it on every change, automatically.** A set run when somebody remembers stops being run.
6. **Watch it decay and refresh it deliberately.** Usage shifts and documents change.

## Four instruments

| Instrument | Good for | When it lies |
|---|---|---|
| Exact match and keywords | Facts, numbers, formats, refusals | Right answer, different wording |
| Structural validation | Valid JSON, required fields | Well formed and wrong |
| A model as judge | Tone, helpfulness, subjective quality | Prefers verbose, confident answers |
| Human review of a sample | Everything, and calibrating the judge | Slow, and reviewers disagree |

Most real systems use several at once. The mistake is picking one and trusting it everywhere, particularly the third.

## Six ways a set stops telling the truth

Only easy cases. Optimising against the set until it means nothing. Trusting a model judge without checking it. Measuring the whole system and nothing inside it. No negative cases, where the correct response is to decline. And letting it go stale, which is worse than having none, because it produces confident numbers about the wrong thing.

## How it is taught

The evaluation set is built first, before the prompt and before retrieval. Students find this intolerable for about two weeks. Then a change makes three cases better and two worse, and they can see it rather than argue about it, and the objection stops.


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
