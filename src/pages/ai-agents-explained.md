---
title: "AI Agents Explained — How to Actually Build One That Doesn't Hallucinate Itself Into Pieces | Modern Age Coders"
description: "The honest, vendor-neutral, code-first guide to AI agents. ReAct loop, planning, memory, tool use, evaluation and the architectures that actually work in production. By Modern Age Coders."
canonical: https://learn.modernagecoders.com/ai-agents-explained
keywords: ["AI agents explained", "how AI agents work", "build AI agent python", "agentic AI tutorial", "ReAct pattern", "LLM agent architecture", "what is an AI agent", "AI agent tutorial", "autonomous agents", "build your own agent", "langchain alternative", "claude agent"]
source: src/pages/ai-agents-explained.html
---
> The honest, vendor-neutral, code-first guide to AI agents. ReAct loop, planning, memory, tool use, evaluation and the architectures that actually work in production. By Modern Age Coders.

A vendor-neutral guide · 24 min read · revised May 2026

# AI agents *explained*. Honestly. Including the parts the framework demos don't show you.

Everyone is selling AI agents in 2026. Almost no one is telling you what they actually are, why most of them fail, or how to build one that survives contact with reality. This is the article we wished existed when we started building production agents at Modern Age Coders in 2024. Code-first. Vendor-neutral. Honest about what works and what doesn't.

***5* components**Every real agent has***1* loop**The ReAct loop, demystified***7* traps**That kill 80% of demos***200* lines**For a working agent

Or build one with a mentor — *here are the cohorts that walk you through it.*

[all 60+ courses →](/courses)[Ages 9–13 · Kids Kids AI *Mastery* Real AI tools used by real kids — the gentle on-ramp to agent building. 2 classes/week₹1,499/mo](/courses/kids-ai-mastery-course)[Ages 14–18 · Teens AI & ML *Teens* The Python + ML foundation needed for agents. Build models. Then make them call tools. 2 classes/week₹1,499/mo](/courses/ai-ml-masterclass-teens)[College / Adult · GenAI Generative AI *Masterclass* This article is the trailer. Twelve weeks of building real production agents. 2 classes/week₹1,499/mo](/courses/complete-generative-ai-masterclass-college)[College / Adult · Automation Python AI *Automation* Agents in the context of automating real work — the high-leverage non-engineer path. 2 classes/week₹1,499/mo](/courses/python-ai-automation-masterclass-college)

## // table of contents

01What an AI agent actually is02The ReAct loop03The five components04Tools — the most important part05Memory — short and long06Planning, when to use it07Evaluation — without this, nothing08Building one — 200 lines09What multi-agent really meansSection 01 · Definition

## What an AI agent *actually is.*

Stripped of marketing, an AI agent is one thing: an LLM in a loop, with the ability to call external functions. That is the whole concept. Everything else — planning, memory, multi-agent orchestration — is a refinement of this single idea.

A regular chatbot does one round: you ask, it answers, the conversation moves on. An agent does many rounds *with itself* on a single task. It thinks. It calls a tool (search, calculator, database query, code execution). It reads the tool's output. It decides what to do next. It loops until it has solved the task or given up.

**The honest one-line definition**

An AI agent is a language model with hands. It can think, but it can also press buttons. The hands are what make it different from ChatGPT.

This definition is small but it matters. The minute an LLM gains the ability to call functions, you have an agent. There is no architectural threshold. There is no "real" agent versus "fake" agent. There is only "how good are its tools" and "how well does it use them."

Section 02 · The loop

## The *ReAct loop.*

The dominant pattern for agent behaviour in 2025-2026 is called **ReAct** (reason + act). It came from a 2022 paper from Princeton and Google. The idea is so simple that, like attention before it, it took a while for the field to realise this was the right primitive.

Figure 2.1 · The ReAct loop · five steps · repeat until done01ThoughtThe LLM reasons in natural language about what to do next.02ActionThe LLM picks one of the available tools and chooses inputs.03ExecuteYour code runs the tool with the LLM's chosen inputs.04ObserveThe tool's output is fed back to the LLM as new context.05LoopRepeat from Thought, with the new context, until task is done.

That is the entire loop. Every agent — Claude with tools, GPT with function calling, LangChain, AutoGPT, every commercial agent framework — is, at the core, a variant of this five-step cycle. The differences live in how tools are described, how memory is managed, and how the loop is terminated.

Section 03 · Components

## The five components *every* agent has.

Strip an agent down and you find five components. Some are obvious. Some are easy to forget. Forgetting any of them is the most common reason agent demos look great and agent products fail.

- **The model** — the LLM doing the reasoning. Claude, GPT, Gemini, an open-weight model. The brain.
- **The tools** — the functions the agent can call. Web search, code execution, database queries, your company's APIs.
- **The system prompt** — the instructions that define what the agent is, what it can do, and how it should behave. The personality and the policy.
- **The memory** — what the agent remembers within a conversation (short-term) and across conversations (long-term).
- **The evaluator** — how you measure whether the agent is doing its job. Almost always missing from demos. Always the thing that makes a real product.

If you are building an agent and you cannot point at each of these five in your codebase, you are not yet building an agent — you are building a chatbot with delusions of grandeur. The next sections walk through the four components beyond the model in detail.

Section 04 · Tools

## Tools — the *most important* part of your agent.

The single largest contributor to whether your agent works is the quality of its tools — not the choice of LLM, not the prompt, not the framework. Tools are the agent's hands. Bad hands, no productive work.

A tool is a function with three things: a name, a description, and a JSON schema for its inputs. The description is what the LLM reads to decide whether to use the tool. The schema is what the LLM writes inputs into. The LLM never sees your code — only the description and the schema.

tools/web_search.pyPython · Claude SDK

```
web_search_tool = {
    "name": "web_search",
    "description": (
        "Search the web for a query and return the top 5 results "
        "as titles + URLs + snippets. Use this when you need "
        "information you do not already have."
    ),
    "input_schema": {
        "type": "object",
        "properties": {
            "query": {
                "type": "string",
                "description": "The search query, 3-10 words."
            }
        },
        "required": ["query"]
    }
}
```

The description does most of the work. A bad description ("searches things") and the LLM will use the tool inconsistently. A good description tells the LLM *when* to use the tool, *when not* to, and what to expect back. Spend ten times more effort on tool descriptions than the literature suggests. We are not joking.

**Trap #1 · too many tools**

More than 8-10 tools and most models start confusing them or calling the wrong one. If you have more, group them into sub-agents (a single tool that itself is an agent with a focused tool set) rather than exposing all of them to the top-level agent at once.

Section 05 · Memory

## Memory — *short and long.*

Two kinds of memory, two different problems. **Short-term memory** is the conversation so far — every Thought, every Action, every Observation. It lives in the model's context window. As the loop runs, this gets long. Modern models handle 100k+ tokens, but at high cost and with degraded reasoning at the extremes.

The short-term problem is managing this growing context. Three honest strategies, in order of complexity:

- **Append everything**, until you hit the context limit. Works for short tasks. Fails for anything multi-hour.
- **Summarise older turns** when the context grows too long. Have the model condense the first half of the conversation into 200 tokens, then continue.
- **Hierarchical memory** — keep important facts in a separate "scratchpad" the agent can read and write to. This is what serious production agents do.

**Long-term memory** is what the agent remembers *across* conversations. This is almost always built using vector databases — every interaction is embedded and stored, and at the start of a new conversation, semantically relevant past interactions are retrieved and injected into the system prompt.

Long-term memory is the area with the most current research and the least settled best practices. If your agent's job does not strictly require remembering across sessions, do not build it. Premature long-term memory is the single biggest source of bug-creating complexity we see in student projects.

Section 06 · Planning

## Planning — *when to use it.*

Planning is having the agent break a complex task into sub-tasks before executing. A planning agent reads your request, decides on a step-by-step plan in natural language, then walks that plan executing tools at each step.

Planning helps for tasks that have many sequential dependencies — "research five companies, summarise each, compile into a report" benefits from planning. Tasks with one or two clear steps do not need it. Adding planning to a simple task makes the agent slower and more brittle without making it more correct.

**Trap #2 · planning everything**

Most agent demos that involve a "planner" do so because frameworks default to one. They add latency and break in subtle ways. Add planning only when your tasks involve more than four sequential tool calls or genuine branching logic.

The simplest implementation of planning is to ask the LLM to produce a numbered list before any tool calls. Then in your code, iterate through that list — for each step, give the LLM the step and the previous step's output, and ask it to either call a tool or move on. No special framework. Twenty additional lines on top of a ReAct loop.

Section 07 · Evaluation

## Evaluation — *the part everyone skips.*

Without evaluation, you do not have an agent. You have a vibe.

The single largest gap between agent demos and agent products is the existence of a real evaluation set. A demo passes when the developer's eyes light up at the impressive output. A product passes when it correctly handles 200 representative tasks measured automatically. The gap between these two bars is enormous.

Build your evaluation set *first*. Before you build the agent. Twenty real tasks your agent should handle, each with a ground-truth answer. Run the agent against the set after every change. Watch the pass rate move. This is dull. It is also the only way to build something real. Frontier labs employ entire teams whose job is constructing evaluation sets. They do this for a reason.

What does an evaluation entry look like? Three fields. The user input. The expected behaviour (in human language). A scoring function (often another LLM call asking "did the agent satisfy the expected behaviour, yes or no"). Twenty entries gets you a useful signal. A hundred gets you a real signal. A thousand is research-grade.

Section 08 · Build

## Building an agent in *200 lines.*

Here is the complete skeleton. A working agent. ReAct loop. Tools. Short-term memory. Stripped down for clarity. We will use the Anthropic SDK; the OpenAI version is structurally identical. Replace the imports.

agent.py · ~200 lines · runsPython · Anthropic SDK

```
import anthropic, json

client = anthropic.Anthropic()

# --- Step 1: Define tools (you would have several) ---
tools = [{
    "name": "web_search",
    "description": "Search the web. Returns top results.",
    "input_schema": {
        "type": "object",
        "properties": { "query": { "type": "string" } },
        "required": ["query"]
    }
}, { ... other tools ... }]

# --- Step 2: Map tool names to actual Python functions ---
def execute_tool(name, args):
    if name == "web_search":
        return search_api(args["query"])
    # ... handle other tools ...

# --- Step 3: The ReAct loop ---
def run_agent(user_message, max_iters=10):
    messages = [{"role": "user", "content": user_message}]

    for i in range(max_iters):
        response = client.messages.create(
            model="claude-opus-4-7",
            max_tokens=2048,
            tools=tools,
            messages=messages,
        )

        # If the LLM stopped without calling a tool, we are done
        if response.stop_reason == "end_turn":
            return response.content[0].text

        # Otherwise, the LLM called one or more tools
        messages.append({"role": "assistant", "content": response.content})

        tool_results = []
        for block in response.content:
            if block.type == "tool_use":
                result = execute_tool(block.name, block.input)
                tool_results.append({
                    "type": "tool_result",
                    "tool_use_id": block.id,
                    "content": str(result),
                })

        messages.append({"role": "user", "content": tool_results})

    return "max iterations reached without finishing"
```

That is the loop. Add real tools, add a thoughtful system prompt, add the twenty-item evaluation set, and you have an honest agent. The implementation is small. The taste is in the tool design, the prompt, and the evaluation. Spend your time there.

**Trap #3 · framework lock-in**

Frameworks like LangChain, CrewAI and AutoGen are good for prototypes and hard to debug in production. We recommend most students build the loop yourself first — twenty lines — to understand it. Reach for a framework only when you find yourself reimplementing the same thing twice.

Section 09 · Multi-agent

## What *multi-agent* really means.

The term "multi-agent" is overloaded and oversold. In practice, in 2026, there are two genuine patterns:

**Pattern A — Sub-agents as tools.** Your top-level agent has a tool called "research_agent" or "code_writer_agent". When called, the top-level agent passes a sub-task to a smaller, focused agent that has its own narrow tool set. The sub-agent runs its own ReAct loop, returns a final answer, and the top-level agent continues. This pattern works and is in use at every serious agent product in the wild.

**Pattern B — Multi-agent debate.** Two or more agents take turns critiquing each other's outputs before producing a final answer. Used for tasks where the additional latency is worth the quality improvement. Less common, but valuable in research, planning, and writing.

Most "multi-agent" demos online are actually Pattern A poorly explained. They are not a different category of intelligence — they are a single agent with a richer tool set. The "agents talk to each other" framing is rhetorical; mechanically, it is one LLM calling tools that happen to be other LLMs.

**The honest summary**

If you remember one paragraph from this article, remember this one. An agent is an LLM in a ReAct loop with well-described tools. Memory and planning are refinements. Multi-agent is sub-agents-as-tools. Evaluation is the difference between a demo and a product. Everything else is detail.

You now have the conceptual map of agents at the level real engineers think about them. The next step is doing — building a small one for a real task. The Modern Age Coders [Generative AI Masterclass](/courses/complete-generative-ai-masterclass-college) walks small cohorts through building production agents in twelve weeks. The cohort path is faster than self-study by a factor of three, in our measurement. We have lots of receipts.

MAC cohorts · build agents with peers

## Cohorts where students build real *agents.*

An agent is not built from a tutorial. It is built by writing, breaking, fixing, evaluating. Modern Age Coders runs small live cohorts at every age — kid, teen, college, adult — where students build real agents under mentor supervision. Click any course below to see the full syllabus and schedule.

### For *kids*, age 9–13

Junior · weekly live[Ages 9–13 · AI Tools Kids AI *Mastery* Use real AI tools — Claude, ChatGPT, image generators — and build small AI assistants. The on-ramp to agents. 2 classes/week₹1,499/mo](/courses/kids-ai-mastery-course)[Ages 8–12 · Python+AI Python & AI Kids *Masterclass* The Python foundation any future agent builder needs. Plus first-touch AI projects. 2 classes/week₹1,499/mo](/courses/python-ai-kids-masterclass)[Ages 10–14 · Creative AI Canva & AI *Design* For the kid more drawn to creative AI than backend. Builds taste and tool-fluency. 2 classes/week₹1,499/mo](/courses/canva-ai-design-masterclass)

### For *teens*, age 13–18

Senior · weekly live[Ages 14–18 · AI/ML AI & ML *Masterclass · Teens* The foundation for serious teen agent builders. Build models. Then make them call tools. 2 classes/week₹1,499/mo](/courses/ai-ml-masterclass-teens)[Ages 13–17 · Full Stack Vibe Coding for *Teens* Python + web + AI projects. By month six, teens here are building small chatbot agents. 2 classes/week₹1,499/mo](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[Ages 13–17 · Python depth Python Complete *Masterclass* Prerequisite for agent work. Cannot build agents in Python without real Python. 2 classes/week₹1,499/mo](/courses/python-complete-masterclass-teens)

### For *adults & college*, age 17+

Pro · weekly live[College / Adult · GenAI Generative AI *Masterclass* The course this article is the trailer for. Twelve weeks, real production agents, mentor-led. 2 classes/week₹1,499/mo](/courses/complete-generative-ai-masterclass-college)[College / Adult · Automation Python AI *Automation* Agents in the context of automating real work. Highest-leverage path for non-engineers. 2 classes/week₹1,499/mo](/courses/python-ai-automation-masterclass-college)[College / Adult · AI/ML AI & ML *Complete* The deep technical foundation. From numpy to training transformers. The track agent engineers come out of. 2 classes/week₹1,499/mo](/courses/ai-ml-masterclass-complete-college)Talk to a mentor · free 25-min call

## Ready to build a *real one?*

If you have read this far you are probably ready to actually build an agent. The next cohort of our Generative AI Masterclass starts in two weeks. Tell us where you are; a senior MAC mentor will reply with a calendar link inside 24 hours.

honest follow-ups

## The questions builders *actually ask.*

How is this different from LangChain / CrewAI / AutoGen?

Those are frameworks built on top of exactly the loop described in this article. They add abstractions, prebuilt tools, and conveniences. They also add complexity, latency and debugging pain. We recommend students implement the bare loop themselves first (twenty lines) before adopting any framework. You will then be able to read what frameworks are doing under the hood and pick the right one for the right problem — instead of being locked into one because you do not know the alternatives.

Should I use Claude, GPT, or an open model?

In 2026: for production agents we recommend Claude (best tool use, large context, good reasoning) or GPT (cheaper, mature ecosystem). For learning and self-hosting, open models from the Llama and Mistral families work fine at the cost of slightly worse tool-use precision. Mix and match — there is no rule against using Claude for the planning step and a cheap open model for the bulk of the loop.

What about LangGraph, Mastra, Crew.AI v2?

All variants of the patterns in this article. LangGraph is the most disciplined of the bunch in 2026 — it forces you to draw the agent state machine explicitly, which is a good habit. We teach LangGraph in the second half of the Generative AI Masterclass cohort. Most students arrive thinking they need it and learn that for two-thirds of agent problems, plain Python is faster and clearer.

How much does running an agent cost?

Highly variable. A simple research agent answering one question is roughly $0.01 to $0.05 in API costs. A complex agent doing fifteen tool calls might cost $0.20 to $1. For a product serving 10,000 users per day, expect $300 to $3,000 per day in raw LLM costs. This is why evaluation matters so much — measuring cost-per-success is one of the core production metrics. The Generative AI Masterclass spends a full week on cost optimisation.

Can a teenager build a useful agent?

Yes. We have 15-year-olds in our cohorts shipping agents that do real work — homework helpers, study planners, small business assistants for their parents. The barrier is not age; it is Python fluency. A teenager with one year of Python and four hours a week of cohort time can build a useful agent in twelve weeks.

What about safety, hallucinations, prompt injection?

These are the three main risks of agent products. Hallucinations — the agent confidently asserting wrong facts — are addressed mainly through grounding (force the agent to cite tool outputs). Prompt injection — a malicious tool output that hijacks the agent — is mitigated by treating all tool outputs as untrusted user input and never letting tool outputs change the system prompt. Safety — the agent doing things it should not — is mitigated by limiting which tools are available and by sandboxing dangerous ones. We cover each of these in week eight of the Generative AI Masterclass.

Will agents replace software engineers?

No, but they will deeply change the job. The engineers who learn to build, deploy and evaluate agents become much more valuable. The engineers who do not, will see their roles slowly compressed. This is exactly why this pillar exists — to give you a real conceptual foundation, fast.

What should I read after this?

In order: our companion pillar [How AI Actually Works](/how-ai-actually-works), then [Build Your Own GPT](/build-your-own-gpt-python) to ground out what the LLM in your agent is actually doing. Then the original ReAct paper (Yao et al., 2022, freely on arXiv). And the Anthropic and OpenAI tool-use guides — they are the cleanest reference docs in the field.

## Read next

#### Pillar siblings

[How AI actually works](/how-ai-actually-works)[Build your own GPT](/build-your-own-gpt-python)[Inside neural networks](/inside-neural-networks)[AI engineer roadmap](/ai-engineer-roadmap-2026)

#### Course tracks

[For kids](/levels/coding-for-kids)[For teens](/levels/coding-for-teens)[For college](/levels/coding-for-college-students)[For professionals](/levels/coding-for-professionals)

#### Specialty

[Olympiad track](/coding-olympiad-medal-track)[JEE coding track](/jee-aspirant-coding-track)[Comeback · women](/coding-comeback-women)[AI for business](/ai-agents-and-automation)

#### Tools

[Screen-time calculator](/screen-time-to-skill)[Fee calculator](/coding-fee-calculator)[Coding roadmap](/coding-roadmap)[Book a free demo](/book-demo)

---

*Canonical: https://learn.modernagecoders.com/ai-agents-explained*
