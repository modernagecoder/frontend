---
title: "Vibe Coding and AI Agents Classes in Germany, in English"
description: "Live vibe coding and AI agent classes in English for teens and adults in Germany: building with AI, testing what it writes, and keeping to each tool's age rules."
canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-germany
source: src/pages/vibe-coding-and-ai-agents-classes-germany.html
---
> Modern Age Coders teaches vibe coding and AI agents to learners in Germany live online, in English. Teenagers from 13 build web and Python projects with the AI tools their age permits, and adults from 18 add coding agents such as Codex and Claude Code. Whatever the age, the AI's code gets tested before it is trusted. Learners keep one mentor, who adapts to their pace and accent, alone or with fifteen to twenty others.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / Vibe coding and AI agents

Germany · Vibe coding and AI agents · Ages 13 and up

# Vibe coding and AI agents classes in Germany

Describe an app in a sentence and an AI assistant will write it. That part is real, and it is why vibe coding caught on. The other part is less often mentioned: the code can look perfect and still be wrong, and the person who asked for it is the only one who can tell. These classes teach both halves, for teenagers and adults in Germany, with every AI tool used inside its own age rules.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Teens: 13 to 17, with age-appropriate tools; Adults: 18 and up, coding agents included; Method: Tests first, then trust; Language: English, matched to the learner; Format: Group or one to one, live; First class: Free. Rated 4.9 across 547 Google reviews.

## Which vibe coding course fits which learner?

The split is by age, because the tools' own terms are. One course for teenagers, two for adults.

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course): Ages 13 to 17. Python and web projects built with AI help. For learners in Germany under 18 we use only tools whose terms allow their age, never Claude.
- [Vibe Coding for Adults](/courses/vibe-coding-for-college-fullstack-ai-dsa-career-course): Ages 18 and up. Full-stack projects, AI features and the data structures that let you judge AI-written code.
- [AI Coding Agents for Professionals](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals): Adults only. Planning work for Codex and Claude Code, reviewing their changes and testing before anything ships.

## What can vibe coding really do, and what can it not?

Vibe coding means describing what you want and letting an AI write the code. AI agents go one step further: they plan, edit several files and run commands on their own. Both are useful. Neither removes the need to understand.

**Where AI help is strong and where the learner still decides (our teaching summary)**

| Task | AI is usually good at | The learner still has to |
|---|---|---|
| Starting a project | A working first version in minutes | Say precisely what "working" means |
| Everyday code | Common patterns, boilerplate, small functions | Spot the case the AI did not think of |
| Fixing errors | Explaining a message, suggesting a fix | Check the fix did not break something else |
| Larger changes by an agent | Edits across many files | Review every change before accepting it |
| Anything with users or money | Drafting the code | Own the result, its security and its mistakes |

### Why learners still need to code

An AI assistant predicts plausible code. Plausible and correct are not the same, and the difference shows up in exactly the cases nobody asked about: an empty input, a leading zero, a user who types a space.

A learner who cannot read the code cannot judge it. So every course here still teaches Python, JavaScript and how programs work, with AI as a fast assistant rather than a replacement.

### What we teach instead of copying

Write down what the program must do before asking for it. Write tests from that description. Read the AI's answer line by line. Run the tests. Ask the AI to explain anything unclear, then check the explanation.

That routine turns vibe coding from a gamble into engineering, and it is the same routine professional teams use with coding agents.

## Which AI coding tools can a teenager use?

Each company sets a minimum age in its own terms. For an AI coding class with teenagers, those terms decide which tools are allowed, so we read them first.

**What each provider's terms say about age, as read on 3 November 2026**

| Tool | What the terms say | In our classes |
|---|---|---|
| Claude and Claude Code (Anthropic) | At least 18, or the local age of consent to the service if that is higher | Adults only; never with anyone under 18 |
| Cursor | At least the age of majority in your jurisdiction or 18, whichever is higher | Adults only |
| GitHub, including Copilot | A user must be at least 13; a country's own minimum may be older | From 13, within those terms |
| Python, an editor and a browser | No age limit | Every learner, from the first class |

Sources: Anthropic consumer terms; Cursor terms of service; GitHub Terms of Service. Each read in full on 3 November 2026. Other tools, ChatGPT among them, are covered in our [AI tools age guide](/ai-tools-age-guide), with the date each rule was read.

Two of the best-known AI coding tools are for adults only. Anthropic sets 18 as the floor for Claude, and Cursor does the same for its editor. So our teen classes in Germany never use either, whatever a course outline elsewhere may list, and a parent will never be asked to sign up a teenager for them. Teenagers vibe code with tools whose terms allow their age, and with plain Python, which needs no account at all. Our adult agents course uses Claude Code and Codex, and it is open to learners aged 18 and over only.

## How do you know if AI-written code is right?

You decide what "right" means before you read the code, and write it down as tests. Here is the exercise our learners do first, on a task that sounds trivial: checking a German postcode.

### The task

A form asks for a German postcode. The program should accept any five digits and refuse everything else. That is a format check only; whether the postcode actually exists is another question.

Before anyone looks at code, the learner writes eight test cases: three good codes, one with a leading zero among them, and five bad ones, including a space and an underscore.

### The AI-style answer

The first function below is the kind of answer AI assistants often give. We wrote it ourselves to show the pattern: turn the text into a number, then check the number is between 10000 and 99999.

It is short, readable and looks finished. Most people would accept it.

**Version 1: tests first, then the AI-style function** (Python)
```python
# The kind of answer an AI assistant often gives (written by us to show a typical mistake)
def valid_postcode_ai(code):
    try:
        n = int(code)
    except ValueError:
        return False
    return 10000 <= n <= 99999

# Our tests, written BEFORE reading the code: input -> the answer we expect
tests = {
    "10115": True, "80331": True, "01067": True,
    "1234": False, "123456": False, "12a45": False,
    " 10115": False, "10_115": False,
}

def check(fn):
    failed = [code for code, want in tests.items() if fn(code) != want]
    print(fn.__name__, "passed", len(tests) - len(failed), "of", len(tests), "| failed:", failed)

check(valid_postcode_ai)
```
It prints valid_postcode_ai passed 5 of 8 | failed: ['01067', ' 10115', '10_115'].

Three failures, each with a different cause. A code that starts with 0, such as 01067, becomes the number 1067, which is below 10000, so a perfectly valid five-digit code is refused. A code with a space in front is accepted, because Python's int quietly ignores the space. And 10_115 is accepted too, because Python allows underscores between digits in numbers. None of these show up if you test the function with one ordinary postcode, which is what most people do.

**Version 2: check the text itself, not a number made from it** (Python)
```python
def valid_postcode(code):
    # exactly five characters, every one of them an ASCII digit 0 to 9
    return len(code) == 5 and code.isascii() and code.isdigit()

check(valid_postcode)
```
Run after Version 1. It prints valid_postcode passed 8 of 8 | failed: [].

**Why the AI-style answer failed three tests (our example; Python 3 output from 3 November 2026)**

| Input | AI-style answer | Expected | Why it went wrong |
|---|---|---|---|
| 01067 | Refused | Accepted | Turning text into a number drops the leading zero |
| 10115 | Accepted | Refused | int() ignores spaces around the digits |
| 10_115 | Accepted | Refused | int() allows underscores between digits |

Why does the fixed version also check isascii? Because Python's isdigit accepts digits from other writing systems too, and a German postcode field should not. A learner who asks an AI "is this correct?" about Version 1 may well be told yes. A learner who wrote the eight tests first knows the answer in a second. With agents the lesson scales up: an agent can change twenty files in a minute, and the tests are what tell you whether you can keep them.

1. **Write tests first.** Pick a small task, a phone number, a date or an email, and write ten tests before asking any AI for code.
2. **Ask and check.** Get an answer from an AI tool you are allowed to use and run your tests against it. Count the failures.
3. **Break the fix.** Find an input that Version 2 handles in a way you think is wrong, and argue for your view.
4. **Adults with agents.** Give a coding agent the tests and the task together, and review its change against the tests before accepting it.

## What does the EU AI Act say about AI skills?

It contains an article on AI literacy. Here is what the text says; it is not advice on how it applies to you or your employer.

### The AI Act

Article 4 of Regulation (EU) 2024/1689, the AI Act, says that providers and deployers of AI systems must take measures to ensure, as far as they can, a sufficient level of AI literacy of their staff and of other people operating or using AI systems on their behalf. The regulation defines AI literacy as the skills, knowledge and understanding needed to use AI systems in an informed way and to be aware of their opportunities and risks.

Its final article says the regulation applies from 2 August 2026, and that Chapters I and II, which include Article 4, apply from 2 February 2025. We read the text as published in 2024 and did not check later amendments.

### German schools

For schools, the KMK, the conference of the Länder education ministers, published a recommendation on AI in schools in 2024 and in 2026 added AI-related competences to its framework Bildung in der digitalen Welt.

None of this makes anyone a programmer. It does mean that understanding how AI produces its answers, and when not to trust them, is now treated as a basic skill at school and at work.

Sources: Regulation (EU) 2024/1689, Articles 3(56), 4 and 113, read on 3 November 2026 through the EU Publications Office; KMK, Bildung in der digitalen Welt. We are not lawyers, we give no legal advice, and we are not connected with the European Commission or the KMK.

## When are the classes in German time?

Teenagers mostly book after lessons end or on Saturdays and Sundays; adults pick lunchtime, early evening or a weekend morning. India, where the mentors are, is ahead of Germany.

**Sample times in Germany and in India**

| Germany | India, winter (until 28 March 2027) | India, summer (from 28 March 2027) |
|---|---|---|
| 13:30 | 18:00 | 17:00 |
| 17:45 | 22:15 | 21:15 |
| Saturday 14:00 | 18:30 | 17:30 |
| Sunday 09:15 | 13:45 | 12:45 |

The Einheitenzeitgesetz puts Germany one hour ahead of UTC (MEZ) through the winter and two hours ahead (MESZ) through the summer. Winter time began on 25 October 2026; summer time returns on 28 March 2027. India keeps UTC+5:30 throughout. Example rows only; no group time is promised.

Trial slots are offered in whatever time zone your device uses. Adults working full time often choose one to one, so that a lesson can move when a meeting runs late.

## From a first prompt to code you can stand behind

Our own milestones for vibe coding and agent work, used to place learners and to report progress.

**Our milestones for building with AI**

| Milestone | Often reached | What the learner shows |
|---|---|---|
| 1. Read code | First weeks | Explain, line by line, a short program an AI wrote |
| 2. Test first | Month 1 to 2 | Write tests from a description before reading any code |
| 3. Build with help | Months 2 to 4 | Build a small web or Python project with AI, every test passing |
| 4. Review | Months 4 to 6 | Find and fix the mistakes in AI-written code without being told where they are |
| 5. Agents (18+) | Months 6 and up | Plan work for a coding agent, review its changes and keep the project tested |

### For teens

If the AI's code passes every test you wrote, write a harder test.
Use only tools your age is allowed. A good mentor will never ask you to break a tool's terms.

### For adults

An agent's change is a proposal. Read it as if a stranger had written it, because one did.
Keep the tests in the project, not in your head. They are what lets you hand work to an agent safely.

## Nine more courses around AI-assisted building

Live, in English, with a regular mentor, in a group or one to one. Courses marked for adults are for learners aged 18 and over only.

### Teen foundations

Ages 13 to 17

- [Python for teens](/courses/python-complete-masterclass-teens): The language to read AI output in.
- [Git and GitHub for teens](/courses/git-github-version-control-course-for-teens): Tracking every change, yours or an AI's.
- [Problem solving for teens](/courses/problem-solving-dsa-masterclass-teens): Logic that no tool can do for you.

### Adults who build

Ages 18 and up

- [Full stack web development](/courses/full-stack-web-development-masterclass-college): React, Node.js and deployment.
- [Python automation and AI](/courses/python-ai-automation-masterclass-college): Scripts and AI services that do real work.
- [Generative AI](/courses/complete-generative-ai-masterclass-college): LLMs, retrieval and agents explained.

### Agents at work

Adults, one to one

- [Gemini Enterprise agents](/courses/build-ai-agents-with-google-gemini-enterprise-course): Agents on Google's business platform.
- [Copilot Studio agents](/courses/ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals): Agents for Microsoft 365 teams.
- [Artificial intelligence](/courses/artificial-intelligence-complete-masterclass-college): Search, logic and how agents decide.

## How live vibe coding classes work in Germany

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Midday** Lunchtime slots for adults, from about 13:00 German time.
- **After school** Late afternoon and early evening for teens.
- **One to one** A time you agree with your mentor, weekends too.

- **Tests before trust** Every AI answer is checked against tests.
- **Code you can read** Python and JavaScript taught properly.
- **Unhurried English** Explained again whenever needed.
- **One mentor** The same reviewer every week.
- **Ages respected** No 18+ tools for anyone under 18.
- **Group or solo** Fifteen to twenty learners, or one.

## Fees for vibe coding and AI agents classes in Germany

A month of eight live classes has one fee. We display it in euro at the European Central Bank reference rate and collect it in US dollars, which means your bank handles the conversion and the euro figure on your statement may not match it exactly.

- Free first class: Free. A free first class. A short test-first task at your level. No card required.
- Group batch: €90 (charged in US dollars) a month. Fifteen to twenty learners at a similar stage. The same mentor throughout. Two live classes a week. Monthly, cancel any month.
- One to one: €134 (charged in US dollars) a month. You and one mentor. Your own project and tools, within their age rules. Times arranged around work or school.

## Vibe coding and AI agents in Germany: questions

### Are the classes in German?

No. We teach only in English, always live. Mentors work from India and adjust to how fast you learn and how you speak. Prompts, code and AI tools mostly work in English anyway, so the language of the class matches the language of the work.

### What is vibe coding?

Building software by describing what you want to an AI assistant and letting it write the code. It is fast for first versions, and it still needs a person who can read, test and fix the result.

### What is an AI coding agent?

An AI tool that does more than suggest lines: it plans a task, edits several files and can run commands. Codex and Claude Code are examples. Our agents course is for adults aged 18 and over only.

### Will my teenager use Claude?

No. Anthropic's terms require users to be at least 18, so we never use Claude or Claude Code with anyone under 18. Cursor's terms also require 18. Teenagers build with tools whose terms allow their age, such as GitHub from 13, and with plain Python.

### Do I need to know how to code first?

No. Every course starts with reading and writing real code, because judging AI-written code needs that. Learners who already code are started at a later point once the trial lesson shows their level.

### Can AI-written code be trusted?

Only after it has been tested. In the exercise on this page, a typical AI-style function passes five of eight tests that were written before reading it. That is normal, and it is why we teach tests first.

### What does the EU AI Act say about AI skills?

Article 4 of Regulation (EU) 2024/1689 asks providers and deployers of AI systems to ensure, as far as they can, a sufficient level of AI literacy among their staff. We describe the text only and give no legal advice.

### At what times do the classes run?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Adults often choose lunchtime or early evening, teens after school.

### Which currency are fees charged in?

Fees are shown in euro at the European Central Bank reference rate and charged in US dollars, which your bank converts, so your statement may differ slightly. The first class is free.

### Group or one to one?

A group of fifteen to twenty suits steady learning with others. One to one suits a learner with their own project, a busy job or a specific tool to master within its age rules.

## Related pages

- [Coding classes in Germany](/coding-classes-in-germany): All our Germany pages.
- [AI and machine learning in Germany](/ai-and-machine-learning-classes-in-germany): Building models rather than prompting them.
- [AI tools age guide](/ai-tools-age-guide): Minimum ages from each provider's terms.
- [Vibe coding and AI agents in Canada](/vibe-coding-and-ai-agents-classes-in-canada): The same subject for learners in Canada.
- [Informatik-Nachhilfe online](/informatik-nachhilfe-online): School Informatik support, in German.
- [How we teach](/how-we-teach): What happens in a live class.

## Contact

Book the free first class at [https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-germany](https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-germany#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
