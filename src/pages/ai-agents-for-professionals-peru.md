---
title: "AI Agents for Professionals in Peru: Live Course in English"
description: "An AI agents course for working professionals in Peru: live online classes in English on building agents that call real business tools without double-billing anyone."
canonical: https://learn.modernagecoders.com/ai-agents-for-professionals-peru
source: src/pages/ai-agents-for-professionals-peru.html
---
> Modern Age Coders teaches AI agents to working professionals in Peru: live online classes, taught in English, for adults who want to build agents that handle real business tasks. You learn low-code agents in Microsoft Copilot Studio or Google Gemini Enterprise, or coded agents in Python, and the practices that make them trustworthy: timeouts, safe retries, protection against duplicate actions, and handing a case to a person when the agent should stop. Mentors in India teach one to one or in a group of fifteen to twenty, at hours that fit your working week in Peru.

[Home](/) / [Courses](/courses) / [Coding and AI classes in Peru](/coding-and-ai-classes-in-peru) / AI agents for professionals

Peru · AI agents at work · Adults 18 and over

# AI agents for professionals in Peru

A demonstration agent works on the first try. A working agent has to survive Monday morning: a supplier's system that answers slowly, a payment service that times out, a request that may or may not have gone through. This page is for professionals in Peru who want to build or manage AI agents that hold up in real business processes. It covers what agents actually do in companies, the reliability habits engineers have learned the hard way, what Peru's 2025 AI regulation sets out for private companies, and one lesson in which an agent bills a client twice.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; For: Working adults, 18 and over; Platforms: Copilot Studio, Gemini, Python; Focus: Reliable, supervised agents; Coding needed: None for low-code; Python helps; Format: One to one, or a group of fifteen to twenty; Begin with: A free class. Rated 4.9 across 547 Google reviews.

## Three agents courses for professionals

Choose by the tools your company already uses. All three are for adults, and the first two are taught one to one.

- [Copilot Studio Agent Masterclass](/courses/ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals): For teams on Microsoft 365. Microsoft describes Copilot Studio as a "graphical, low-code studio for building and managing AI-powered agents and workflows". One to one, built around your own processes.
- [Build AI Agents with Gemini Enterprise](/courses/build-ai-agents-with-google-gemini-enterprise-course): For companies on Google Workspace and Google Cloud. A one-to-one course on designing, connecting and supervising agents on Google's enterprise platform.
- [Python Automation and Applied AI](/courses/python-ai-automation-masterclass-college): For professionals who want to code their own agents and automations: Python scripts, APIs and AI tools, with the retry and timeout patterns from the lesson below built in.

## What can an AI agent do in a company?

Take a defined task from start to finish: read a request, look things up, act in another system and report back. OpenAI's guide puts it in one line: "Agents are systems that independently accomplish tasks on your behalf."

### Answer and act

A customer asks about an order; the agent checks the order system, sees the delay, and drafts an update with the new date. A person approves anything that commits the company.

### Prepare and file

An agent gathers a supplier's invoice, matches it with the purchase order and the delivery note, and files it, or flags the mismatch for someone in finance.

### Monitor and alert

An agent watches a shared mailbox or a dashboard, sorts what arrives, and alerts the right team, leaving a clear record of what it saw and why it acted.

In each case the agent calls other systems: an order database, an accounting platform, an email server. Every one of those calls can be slow or fail, and some of them change things in the world. The quality of an agent at work depends less on how clever its language model is than on how it behaves when a call goes wrong. That is the part most short courses skip, and the part our course teaches first.

Developers who already use agents report real but uneven benefits. In the Stack Overflow Developer Survey 2025, about 70% of agent users agreed agents had reduced the time spent on specific development tasks and 69% that they had increased productivity, but only 17% agreed agents had improved collaboration within their team. Individual speed is the easy win; fitting an agent into a team's processes is the harder work.

## What happens when an agent's tool times out?

The agent does not know whether the action happened. A timeout means no answer arrived, not that nothing was done. Engineers at Amazon have written about exactly this problem for years.

**Four ideas from the AWS Builders' Library, and what they mean for an agent**

| Idea | In AWS's words | For an agent at work |
|---|---|---|
| Timeouts | "Timeouts keep systems from hanging unreasonably long" | Every tool call needs a limit, or the agent waits forever |
| Unknown outcome | "A timeout or failure doesn't necessarily mean that side effects haven't happened." | An invoice may exist even though the call "failed" |
| Idempotency | Designing APIs "to be idempotent, meaning they can be safely retried" | Send the same request key so a repeat does not repeat the action |
| Backoff and jitter | "Jitter adds some amount of randomness to the backoff to spread the retries around in time." | Wait longer each time, by a random amount, and stop after a few tries |

Source: Amazon Web Services, Builders' Library, "Timeouts, retries, and backoff with jitter", published 5 December 2019, read on 9 November 2026. The right-hand column is our own reading for agents.

### Why retries need limits

AWS describes the most common pattern as exponential backoff, where the wait grows after every attempt, usually with a ceiling: "This is called, predictably, capped exponential backoff." Its next step is to limit how many times a client retries at all.

The article adds a line worth remembering: "retries are selfish". Each retry demands more work from a system that may already be struggling. An agent that retries instantly and endlessly can turn a small outage into a large one.

### Why the limit should end with a person

OpenAI's agent guide lists "Exceeding failure thresholds: Set limits on agent retries or actions" among the moments when control should pass to a human. A well-designed agent stops, says clearly what it tried and what it does not know, and hands the case over.

Peru's 2025 AI regulation also names human supervision as a principle (article 7 h of DS 115-2025-PCM). We mention it as context; the engineering reason alone is enough to build the hand-off.

## How can an agent bill a client twice? A lesson on retries

This lesson comes from our professionals' course. An agent creates an invoice for a small bakery. The billing service does the work, but its reply is lost. What the agent does next decides whether the client gets one invoice or two.

1. **The trap.** An invented billing service processes the first request, creates invoice F-001, then fails to answer in time. To the agent, it looks exactly like a failure.
2. **The naive agent** retries at once, with nothing to say "this is the same order". The service, seeing what looks like a new request, creates F-002. The bakery now has two invoices for one order.
3. **The careful agent** sends an idempotency key, one fixed label per real-world order, with every attempt. The service recognises the key and returns F-001 instead of creating a second invoice. Between attempts the agent waits with capped exponential backoff and random jitter, and after four attempts it stops and hands the case to a person.

**An invoice, a lost reply, two agents** (Python)
```python
import random

class InvoiceServer:
    """Invented billing service: the first call is processed but its reply is lost."""
    def __init__(self):
        self.invoices, self.seen_keys, self.calls = [], {}, 0
    def create_invoice(self, client, amount, key=None):
        self.calls += 1
        if key in self.seen_keys:
            return self.seen_keys[key]            # same key: same invoice, no new one
        number = "F-%03d" % (len(self.invoices) + 1)
        self.invoices.append((number, client, amount))
        if key:
            self.seen_keys[key] = number
        if self.calls == 1:
            raise TimeoutError("no reply within 2 s")   # done, but the agent never hears
        return number

def naive(server):
    for attempt in range(1, 4):
        try:
            return server.create_invoice("Panaderia Sol", 120)
        except TimeoutError:
            pass                                   # retry at once, no key

def careful(server, max_attempts=4, base=1.0, cap=8.0, rng=random.Random(7)):
    key = "order-2026-118"                         # one key per real-world order
    for attempt in range(1, max_attempts + 1):
        try:
            return server.create_invoice("Panaderia Sol", 120, key=key)
        except TimeoutError:
            if attempt == max_attempts:
                break
            wait = rng.uniform(0, min(cap, base * 2 ** attempt))   # capped backoff, full jitter
            print("  attempt", attempt, "timed out; would wait", round(wait, 2), "s")  # printed, not slept
    return "HANDED TO A PERSON"

a = InvoiceServer(); print("naive  ->", naive(a), "| invoices:", [i[0] for i in a.invoices])
b = InvoiceServer(); print("careful->", careful(b), "| invoices:", [i[0] for i in b.invoices])

class DownServer(InvoiceServer):
    def create_invoice(self, client, amount, key=None):
        raise TimeoutError("service down")

print("down   ->", careful(DownServer()))
```
The service, client name, order and amount are invented by us. Waits are printed rather than slept so the lesson runs instantly; the random generator is seeded so the output is the same every time.

**Output** (Output)
```output
naive  -> F-002 | invoices: ['F-001', 'F-002']
  attempt 1 timed out; would wait 0.65 s
careful-> F-001 | invoices: ['F-001']
  attempt 1 timed out; would wait 0.3 s
  attempt 2 timed out; would wait 2.6 s
  attempt 3 timed out; would wait 0.58 s
down   -> HANDED TO A PERSON
```
Naive agent: two invoices. Careful agent: one invoice, after one wait. Against a service that is down, the careful agent tries four times, waits three times, and hands over.

### What learners take from it

The naive agent did not malfunction. It retried, which is usually sensible. The damage came from retrying an action with a side effect without any way for the other system to recognise a repeat. AWS states the rule plainly: APIs with side effects "aren't safe to retry unless they provide idempotency".

In a real company the "invoice" might be a payment, a purchase order, a message to a customer or a change to stock levels. The pattern is the same, and so is the cost of getting it wrong.

### What changes on real platforms

Many business APIs accept an idempotency key or a client reference for this reason; some do not, and then the agent must check whether the action happened before trying again. Low-code platforms such as Copilot Studio hide some of this, which makes it more important that the person designing the agent knows what to ask.

The waits in the output (0.3, 2.6 and 0.58 seconds) look irregular on purpose. That is the jitter: if a hundred agents retry against the same struggling service, random waits stop them all arriving at the same instant.

1. **Find the side effects.** List every tool an agent at your workplace would call. Mark which ones change something (create, send, pay, delete) and which only read.
2. **Remove the key.** Run the careful agent without its idempotency key. How many invoices appear, and why does backoff alone not help?
3. **Tune the limit.** Change max_attempts and cap. What is the longest the agent could wait before handing over, and is that acceptable for this task?
4. **Write the hand-off.** Draft, in English, the message the agent should send to a person when it gives up: what it tried, what it knows, and what it does not know.

## What does Peru's AI regulation set out for private companies, and when?

A phased timetable by sector. DS 115-2025-PCM, which regulates Law 31814 and was published in El Peruano on Tuesday 9 September 2025, gives private developers and implementers between one and four years, by sector, to implement article 25 and chapter II of title VI.

**Private-sector implementation periods, first final provision of DS 115-2025-PCM**

| Uses of AI in | Period in the regulation | Which ends around (our arithmetic) |
|---|---|---|
| Health, education, justice, security, economy and finance | One year | September 2026 |
| Transport, commerce and labour | Two years | September 2027 |
| Production, agriculture, energy and mining | Three years | September 2028 |
| All other uses | Four years | September 2029 |
| Small companies, annual sales above 150 and up to 1,700 UIT | Two years | September 2027 |
| Micro companies, annual sales up to 150 UIT | Three years | September 2028 |

Source: DS 115-2025-PCM, Reglamento de la Ley 31814, first complementary final provision, El Peruano, 9 September 2025; each period runs from the day after publication. The right-hand column is our own calendar arithmetic, not a legal interpretation. Read on 9 November 2026.

This is published context, not legal advice: which period applies to a given company, and exactly what it must implement, is a question for its lawyers. What a course can do is make sure the people building and running agents understand the engineering behind the obligations the regulation keeps returning to, such as transparency about AI use and human supervision of decisions.

For the regulation's list of high-risk uses (hiring, credit scoring, access to health services and others) and an approval-gate lesson, read our Spanish page [curso de agentes de IA para profesionales](/curso-de-agentes-de-ia-para-profesionales). Companies thinking about AI beyond agents may also find [curso de IA para empresas](/curso-de-ia-para-empresas-peru) useful; both describe the same live classes, taught in English.

## Is English a barrier for a professional learning agents?

Less than many people expect. EF's English Proficiency Index 2025 scores Peruvians aged 26 to 30 at 559, in the "high" band; those aged 31 to 40 score 537 and those over 41 score 509, both "moderate".

### Why English matters for agents

Agent platforms, their documentation and their error messages are in English first, and many agents are configured with written instructions. A professional who can write a clear English instruction, and read an English error, works faster with every tool.

EF tests adults who choose to sit its online test, so its scores describe that group rather than every worker in Peru. Still, they suggest many professionals already have the English a live technical class needs.

### How the classes help

Mentors speak at a steady pace, check understanding often and write key terms in the chat. Learners describe their own processes in English, which doubles as practice for international meetings.

Connectivity is rarely the issue: INEI found that 95.2% of Peruvians aged 25 to 40 used the internet in the second quarter of 2026, and 86.0% of those aged 41 to 59. We do not teach in Spanish, but one-to-one classes let each learner set the pace.

## Do professionals need to code to build AI agents?

Not to start. Low-code platforms let you build a working agent without writing code. But you do need to think like an engineer about what happens when things go wrong, and that is what we teach.

### Map the process

Before building, write the steps a person follows today, the systems they touch, and the decisions they make. Most failed agents automate a process nobody had written down.

### Mark the risks

For every step, ask: does it change something? Can it be undone? Who notices if it goes wrong? Those answers decide where the agent must stop and ask.

### Test the bad days

Slow systems, missing data, a request in an unexpected format. An agent that has only been tested on good days has not been tested.

Adults who want to add coding to that judgement can take our Python routes, and our Spanish page on [cursos de programación para adultos](/cursos-de-programacion-para-adultos-peru) describes how working adults in Peru fit coding into a week. Claude-based tools are used only with learners aged 18 and over, as Anthropic's terms require.

## From a demo agent to one your team can rely on

Our own milestones for professionals, used to set goals and report progress. Not a certification.

**Milestones in the professionals' agents course (ours)**

| Milestone | You can | Evidence |
|---|---|---|
| 1. Process map | Describe a work process step by step, with its systems | A one-page map |
| 2. First agent | Build an agent that reads and answers | A working demo on your platform |
| 3. Side effects | Separate read-only tools from tools that change things | A tool table with risks |
| 4. Safe retries | Add timeouts, backoff and idempotency keys | The retry lesson, on your process |
| 5. Hand-off | Stop and pass a case to a person with a clear note | Three tested failure cases |
| 6. Present | Explain the agent's limits to a manager in English | A short recorded walkthrough |

### For professionals

A timeout is a question, not an answer. Find out what happened before you try again.
Every agent needs a sentence that begins: "I stopped because".

### For managers

Ask to see milestone 5 before any agent touches a client.
Progress notes list processes mapped, agents built and failure cases tested.

## Nine more courses for working adults

Each is live and in English, with a single mentor from start to finish.

### Using AI well

No coding needed

- [AI Tools Mastery](/courses/ai-tools-mastery-complete-college): ChatGPT, Claude and automation, used with judgement.
- [Data and AI analytics](/courses/data-and-ai-analytics-for-non-programmers-course): Excel, Sheets and Power BI with AI help.
- [Canva and AI design](/courses/canva-ai-design-masterclass): Professional graphics with AI features.

### Building agents

Code and platforms

- [Generative AI: LLMs, RAG and Agents](/courses/complete-generative-ai-masterclass-college): Coded agents with retrieval and evaluation.
- [Codex and Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals): AI coding agents for people who build software.
- [AI: Search, Logic and Agents](/courses/artificial-intelligence-complete-masterclass-college): The theory behind planning and agents.

### Foundations

If you want to code

- [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college): From zero to advanced, at an adult pace.
- [Data Analysis](/courses/data-analysis-mastery-course-college): SQL, Python and BI for business data.
- [MySQL](/courses/mysql-database-complete-masterclass-college): The databases agents read from and write to.

## How do the classes fit a working week in Peru?

Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.

- **Before work** An early start in Lima is evening in India, an easy hour to teach.
- **After work** Evenings in Lima are early morning in India; we can arrange them.
- **One to one** Built around your role, your platform and your diary.

- **Your own processes** Projects use processes from your work, anonymised.
- **Failure cases first** Each agent is tested on bad days, not just good ones.
- **Platform of choice** Copilot Studio, Gemini Enterprise or Python.
- **Plain English** Clear, steady speech; terms written in the chat.
- **One mentor** The same person from first map to final review.
- **Adults only** This course is for learners aged 18 and over.

## Fees for professionals

Payment is in US dollars by card, and a Peruvian card issuer converts each charge to soles at its own daily rate. The soles figure on your statement may therefore shift a little from month to month.

- Free first class: Free. A free first class. Map one of your own processes. No card to book.
- Group batch: USD 100 a month. Fifteen to twenty working adults. One mentor throughout. Two live classes a week. Monthly, cancel when you like.
- One to one: USD 150 a month. Private classes. Agents built on your platform and processes. Times set around your work.

## AI agents for professionals: questions

### Are the classes in Spanish?

No. Every class is taught live online in English, and there is no Spanish-language version. Mentors keep a steady pace, check understanding often, adapt to your accent and write key terms in the chat, so professionals with working English follow comfortably.

### Do I need to know how to code?

No, for the Copilot Studio and Gemini Enterprise courses, which are low-code. If you want to build agents in Python, our Python Automation course or Python Masterclass gets you there. Either way, we teach the engineering judgement behind reliable agents.

### Which platform should I learn?

The one your company uses. Copilot Studio suits Microsoft 365 organisations, Gemini Enterprise suits Google Workspace and Google Cloud, and Python suits teams that want full control. The free first class helps you decide.

### What makes an agent reliable?

Timeouts on every tool call, safe retries with backoff and jitter, idempotency keys so a repeat does not repeat an action, a limit on attempts, and a clear hand-off to a person. The lesson on this page shows all of them.

### When are classes held?

Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India is ahead of Peru by 10 hours 30 minutes on every day of the year, so 07:30 in Lima is 18:00 in India.

### Does Peru's AI regulation apply to my company?

DS 115-2025-PCM sets phased periods for private companies by sector and size, from one to four years after September 2025. Whether and how it applies to your company is a question for a lawyer; we quote it as context and give no legal advice.

### Can I bring my own work process?

Yes, and we recommend it. In one-to-one classes, projects use an anonymised version of a real process from your job. Please never share client personal data in class.

### Is this course for adults only?

Yes. The professionals' agents courses are for learners aged 18 and over, and Claude-based tools are used only with adults, as Anthropic's terms require. Teenagers have separate routes.

### Is there a certificate?

You receive our own certificate of completion. It is not a Microsoft or Google certification and not a Peruvian qualification; we are not connected with Microsoft, Google, AWS, OpenAI or any Peruvian authority.

### What do I need?

A laptop or desktop, a stable connection and a headset. For platform courses you need access to the platform, through your employer or a trial account; we help you set it up in the first class.

## Further reading

- [Coding and AI classes in Peru](/coding-and-ai-classes-in-peru): Everything we teach in Peru.
- [AI tools age guide](/ai-tools-age-guide): Age rules for every AI tool.
- [We teach you how to think](/we-teach-you-how-to-think): Judgement before tools.
- [Student labs](/student-labs): Projects by our learners.
- [How we teach](/how-we-teach): The live class format.
- [All courses](/courses): Every syllabus in one place.

## Contact

Book the free first class at [https://learn.modernagecoders.com/ai-agents-for-professionals-peru](https://learn.modernagecoders.com/ai-agents-for-professionals-peru#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
