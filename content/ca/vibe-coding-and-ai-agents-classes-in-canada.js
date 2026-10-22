'use strict';
// Vibe coding and AI agents classes in Canada (ag- door, Canada cluster Plan 2, row 70). For teens and adults.
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Spine: what vibe coding and agents are (Collins, Anthropic's own definitions), which tools a teen may use and which
// are 18 and over (each company's terms), what agents can and cannot do (Anthropic's guidance plus our own test),
// where Canadian school and contest documents already mention AI, and one original agent on City of Ottawa open data
// whose final answer is checked against its tool results.
// Sources read raw on 22 October 2026 (copies in keyword-research-2026-09/ca/src-pilots/vibe-coding-and-ai-agents-classes-in-canada/):
//  - blog.collinsdictionary.com, Word of the Year 2025, dated November 6, 2025 (blog.collins...flat.txt): "vibe coding ,
//    Collins' Word of the Year 2025"; "Coined by AI pioneer Andrej Karpathy, vibe coding refers to the use of artificial
//    intelligence prompted by natural language to write computer code." (the person is named as Collins names him,
//    as an official source quoting; no other private person is named).
//  - code.claude.com/docs/en/overview: "Claude Code is an agentic coding tool that reads your codebase, edits files,
//    runs commands, and integrates with your development tools."
//  - modelcontextprotocol.io intro: "MCP (Model Context Protocol) is an open-source standard for connecting AI
//    applications to external systems."
//  - anthropic.com/research/building-effective-agents, "Published Dec 19, 2024": "Workflows are systems where LLMs and
//    tools are orchestrated through predefined code paths. Agents , on the other hand, are systems where LLMs dynamically
//    direct their own processes and tool usage" (space before comma is the page's markup); "we recommend finding the
//    simplest solution possible, and only increasing complexity when needed"; "higher costs, and the potential for
//    compounding errors. We recommend extensive testing in sandboxed environments, along with the appropriate
//    guardrails."
//  - Terms: Anthropic consumer terms (src-pilots/ai-classes-for-kids-in-canada/anthropic-consumer-terms.html, effective
//    Oct 8, 2025) "You must be at least 18 years old"; OpenAI terms (openai-terms.html, effective January 1, 2026)
//    minimum 13 and "If you are under 18 you must have your parent or legal guardian's permission"; GitHub Education
//    (github.com_education_students.html) "GitHub Copilot Student" "Available for free to verified students, teachers,
//    and open-source maintainers"; GitHub terms (github-terms.html) "A User must be at least 13 years of age."
//  - facts-schools-contests.md: New Brunswick CS 110 "AI-assisted debugging tools"; ICD2O "including automation and
//    artificial intelligence, and assess their benefits and limitations"; CCC rules (src-pilots/ccc-junior-guide)
//    "generative AI such as CoPilot or ChatGPT" forbidden and "AI-based tools within an IDE cannot be used."
//  - Course facts from content/courses/data (vibe-coding-for-teens.json ages 13 to 17, 12 weeks, 6 to 8 hours a week;
//    vibe-coding-for-college ages 18+, 12 weeks; codex-and-claude-code adults masterclass, 24 classes over 12 weeks).
//  - facts-geo.md section 3 for times.
// Open data: City of Ottawa, Parks and Greenspace, https://hub.arcgis.com/api/v3/datasets/cfb079e407494c33b038e86c7e05288e_24/
//  downloads/data?format=csv&spatialRefId=4326&where=1%3D1 (data/ottawa-parks.csv, 1,030,402 bytes, sha256 c26517b6...cf6,
//  1,378 rows). Licence: Open Government Licence - City of Ottawa (data/ottawa-licence-hubpage.json): "licence to use the
//  Information including for commercial purposes"; attribution "Contains information licensed under the Open Government
//  Licence" then a dash then "City of Ottawa" (dash not reproduced). (The Kingston rinks file first considered was
//  dropped: its licence PDF text could not be extracted cleanly for a grep-checked quote.)
// Our own calculations (park_agent.py, run with python -I, output park_agent.out.txt; checks inline): DOG_DESIGNATION
//  codes and the city's own detail text: 0 "Dogs may be off leash" 175 parks; 1 on leash at all times 356; 2 mixed (for
//  example off leash in a fenced area) 69; 3 "Dogs are not allowed in the park." 119; 4 "The park has not been
//  designated" 631; blank 28. 24 wards; Kanata North 95 parks, 11 with code 0; 16 park names occur more than once; the
//  honest plan's answer passes the check; the invented "Maple Leaf Dog Run" (not in the file) is rejected.
// Lesson family: tool contracts and verifying an agent's answer against what its tools returned.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const AGENT = `# Our park agent: a tool loop with a checked answer (Modern Age Coders, written for this page)
import csv

PARKS = list(csv.DictReader(open("ottawa-parks.csv", encoding="utf-8-sig")))
DOG_CODES = {"off_leash": "0", "on_leash": "1", "mixed": "2", "no_dogs": "3", "not_designated": "4"}

def find_parks(ward, dog_rule):
    """Tool 1: park names in a ward with a given dog rule."""
    code = DOG_CODES[dog_rule]
    return [p["NAME"] for p in PARKS if p["WARD_NAME"] == ward and p["DOG_DESIGNATION"] == code]

def park_details(name):
    """Tool 2: address and the city's own dog wording for one park."""
    for p in PARKS:
        if p["NAME"] == name:
            return {"address": p["ADDRESS"], "dogs": p["DOG_DESIGNATION_DETAILS"]}
    return {"error": "no park called " + name}

TOOLS = {"find_parks": find_parks, "park_details": park_details}

def run(model_steps):
    """The loop: run each tool call the model asks for, keep every result, check the final answer."""
    seen = set()
    for step in model_steps:
        if step["type"] == "tool":
            result = TOOLS[step["name"]](**step["args"])
            names = result if isinstance(result, list) else [step["args"].get("name", "")]
            seen.update(names)
            print("tool", step["name"], "->", len(names) if isinstance(result, list) else result.get("address", result))
        else:
            unsupported = [n for n in step["parks"] if n not in seen]
            print("answer:", step["parks"][:3], "..." if len(step["parks"]) > 3 else "")
            print("check:", "OK" if not unsupported else "REJECTED, no tool result for " + ", ".join(unsupported))

# Stand-in for a model: a fixed plan, so the loop can be tested without any AI service.
found = find_parks("Kanata North", "off_leash")
honest = [{"type": "tool", "name": "find_parks", "args": {"ward": "Kanata North", "dog_rule": "off_leash"}},
          {"type": "tool", "name": "park_details", "args": {"name": found[0]}},
          {"type": "answer", "parks": found}]
invented = honest[:1] + [{"type": "answer", "parks": found[:2] + ["Maple Leaf Dog Run"]}]

run(honest)
run(invented)`;

const AGENT_OUT = `tool find_parks -> 11
tool park_details -> 5599 Campeau Drive, Kanata
answer: ['Kanata Town Centre Stormwater Pond', 'Judy Laughton Park', 'Village Green Stormwater Facility'] ...
check: OK
tool find_parks -> 11
answer: ['Kanata Town Centre Stormwater Pond', 'Judy Laughton Park', 'Maple Leaf Dog Run']
check: REJECTED, no tool result for Maple Leaf Dog Run`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'VIBE CODING AND AGENTS', blurb: 'Vibe coding and AI agents for Canadian teens and adults: the age rules in each company\'s terms, what agents can and cannot do, and an Ottawa parks agent.' },
  slug: 'vibe-coding-and-ai-agents-classes-in-canada',
  code: 'vaac',
  accent: '#375C7A',
  accentRationale: 'Vibe coding and AI agents, Canada: a muted lake blue #375C7A, allocated for row 70 at least 6 RGB units from every site accent and 14 from the other Canada accents; contrast 6.66 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Vibe coding and AI agents classes in Canada',
  title: 'Vibe Coding and AI Agents Classes in Canada: Teens and Adults',
  description: 'Vibe coding and AI agents for Canadian teens and adults: which tools each age may use, what agents can and cannot do, and a working agent on Ottawa parks data.',
  ogDescription: 'Building software with AI help, taught honestly: Collins\' definition of vibe coding, Anthropic\'s own line between workflows and agents, the companies\' age rules, and an agent whose answers are checked against its tools.',
  twitterDescription: 'Vibe coding and AI agents in Canada for teens and adults, with a working agent on Ottawa open data.',
  pageName: 'Vibe Coding and AI Agents Classes in Canada',
  webPageDescription: 'A guide for Canadian teenagers and adults to vibe coding and AI agents, built from Collins Dictionary, Anthropic\'s engineering guidance and documentation, the Model Context Protocol site and the terms of OpenAI, Anthropic and GitHub, with an original agent on City of Ottawa open data.',
  courseDescription: 'Live online classes in vibe coding and AI agents for teenagers aged 13 to 17 and for adults across Canada, in separate courses, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Canada', href: '/coding-classes-in-canada' }],
  crumbLabel: 'Vibe coding and AI agents',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#terms', label: 'Definitions' },
    { href: '#ages', label: 'Who may use what' },
    { href: '#limits', label: 'Limits' },
    { href: '#agent', label: 'Ottawa agent' },
    { href: '#canada', label: 'In Canadian schools' }
  ],
  eyebrow: 'Canada &middot; Vibe coding and AI agents &middot; Teens and adults',
  h1: 'Vibe coding and AI agents classes in Canada',
  lede: 'Describing what you want and letting an AI write the code has a name now, and Collins Dictionary chose it as its Word of the Year for 2025. AI agents go a step further: they decide which tools to call and in what order. Both are useful, both fail in predictable ways, and both have age rules that most courses never mention. This page explains the terms from their sources, sets out which tools a Canadian teenager may use and which are for adults only, lists what agents can and cannot do, and builds a small, honest agent on City of Ottawa park data whose every answer is checked.',
  secondaryCta: { href: '#agent', label: 'See the Ottawa agent' },
  wa: 'Hello Modern Age Coders, I am in Canada and want to learn vibe coding and AI agents properly. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; separate courses for teens and adults, with every age rule respected',
  spec: [
    ['For', 'Teens 13 to 17; adults 18+'],
    ['Teens use', 'Tools their age allows'],
    ['Adults use', 'Agentic tools such as Claude Code'],
    ['Builds', 'Apps and agents you can check'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Vibe coding and AI agents classes in Canada teach teenagers and adults to build software with AI help, then read, test and correct what the AI produced, and to design agents whose answers can be checked. Teens and adults learn separately, within each tool\'s age rules. Modern Age Coders teaches them live online, in a batch or one to one.',

  picks: {
    eyebrow: 'Separate courses by age',
    h2: 'Three courses: one for teens, two for adults',
    lede: 'Teenagers and adults may legally use different tools, so they learn in different courses.',
    items: [
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', code: 'VAAC / 01', title: 'Vibe Coding for Teens', note: 'Ages 13 to 17. Twelve weeks of Python, web development and AI projects, with six to eight hours of work a week. Teens use only tools whose terms allow their age.' },
      { course: 'vibe-coding-for-college-fullstack-ai-dsa-career-course', code: 'VAAC / 02', title: 'Vibe Coding for College', note: 'Ages 18 and up. Twelve weeks across full stack web, data structures with machine learning, and a capstone, building with AI assistance.' },
      { course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', code: 'VAAC / 03', title: 'Codex and Claude Code for professionals', note: 'Adults only. Twenty-four classes over twelve weeks on AI coding agents: foundations, daily workflow, connecting tools, cloud use, then securing and shipping.' }
    ]
  },

  sections: [
    {
      id: 'terms', tint: 'tint', eyebrow: 'What the words mean',
      h2: 'Vibe coding, agents and MCP, defined by their sources',
      lede: 'These terms are used loosely in advertising. Here they are as the dictionary, the agent builders and the protocol\'s own site define them, read on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'Definitions from primary sources (read 22 October 2026)', head: ['Term', 'Source', 'What the source says'], rows: [
          ['Vibe coding', 'Collins Dictionary, Word of the Year 2025 (November 6, 2025)', '"Coined by AI pioneer Andrej Karpathy, vibe coding refers to the use of artificial intelligence prompted by natural language to write computer code."'],
          ['Workflow', 'Anthropic, Building effective agents (Dec 19, 2024)', '"Workflows are systems where LLMs and tools are orchestrated through predefined code paths."'],
          ['Agent', 'The same article', 'Agents "are systems where LLMs dynamically direct their own processes and tool usage".'],
          ['Agentic coding tool', 'Claude Code documentation', '"Claude Code is an agentic coding tool that reads your codebase, edits files, runs commands, and integrates with your development tools."'],
          ['MCP', 'modelcontextprotocol.io', '"MCP (Model Context Protocol) is an open-source standard for connecting AI applications to external systems."']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The difference that matters in practice',
          left: [
            'In a workflow, a programmer decides the steps and the model fills in parts of them. In an agent, the model decides the steps. That one change explains most of what goes right and wrong: an agent can solve a problem nobody scripted, and it can also wander, repeat itself, or act on a mistaken guess.',
            'Vibe coding sits at the human end of the same scale. A person describes the result, the AI writes code, and the person decides whether to keep it. The skill that separates a good vibe coder from a bad one is reading what came back.'
          ],
          rightH3: 'What we teach first',
          right: [
            'Before any agent, learners write the tools themselves: small functions with clear inputs, outputs and failure messages. An agent is only as reliable as the tools it calls and the checks wrapped around its answer.',
            'Anthropic\'s own advice points the same way: "we recommend finding the simplest solution possible, and only increasing complexity when needed." Many problems never need an agent at all.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://blog.collinsdictionary.com/language-lovers/collins-word-of-the-year-2025-ai-meets-authenticity-as-society-shifts/" rel="noopener" target="_blank">Collins, Word of the Year 2025</a>; <a class="ag-inline-link" href="https://www.anthropic.com/research/building-effective-agents" rel="noopener" target="_blank">Anthropic, Building effective agents</a>; <a class="ag-inline-link" href="https://code.claude.com/docs/en/overview" rel="noopener" target="_blank">Claude Code overview</a>; <a class="ag-inline-link" href="https://modelcontextprotocol.io/" rel="noopener" target="_blank">Model Context Protocol</a>. All read 22 October 2026. We are not connected with any of these organisations.' }
      ]
    },
    {
      id: 'ages', tint: 'deep', eyebrow: 'Who may use what',
      h2: 'Which AI coding tools a teen may use, and which are adults only',
      lede: 'This is where many vibe coding courses go wrong: they hand every student the same tools. The companies\' terms do not allow that. Here is what each says, and how our two age groups follow it.',
      body: [
        { kind: 'table', caption: 'Age rules for AI coding tools, from each company\'s terms (read 22 October 2026)', head: ['Tool', 'What the terms say', 'Teens 13 to 17', 'Adults 18+'], rows: [
          ['Claude, including Claude Code (Anthropic)', '"You must be at least 18 years old or the minimum age required to consent to use the Services in your location, whichever is higher." (effective Oct 8, 2025)', 'Not allowed; never recommended', 'Allowed'],
          ['ChatGPT and other OpenAI services', '"You must be at least 13 years old"; "If you are under 18 you must have your parent or legal guardian\'s permission to use the Services." (effective January 1, 2026)', 'Only with a parent\'s or guardian\'s permission', 'Allowed'],
          ['GitHub and GitHub Copilot', 'GitHub: "A User must be at least 13 years of age." Copilot Student is "Available for free to verified students, teachers, and open-source maintainers".', 'Allowed from 13; free if verified as a student', 'Allowed'],
          ['The Canadian Computing Competition', 'The CCC rules forbid generative AI and say "AI-based tools within an IDE cannot be used."', 'Practise without assistants before 17 February 2027', 'Not applicable']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How our teen classes work',
          left: [
            'Teenagers build with tools their age allows, chiefly GitHub Copilot for verified students and, where a parent has given permission, OpenAI\'s tools. No teen class uses Claude or Claude Code, and no page of ours suggests them to anyone under 18.',
            'For a teen, the point of vibe coding is not speed. It is learning to judge code: why the suggested function works, where it breaks, and what the AI did not consider.'
          ],
          rightH3: 'How our adult classes work',
          right: [
            'Adults work with agentic tools such as Claude Code and OpenAI\'s Codex, on real repositories, with version control so that every change an agent makes can be inspected and undone.',
            'The adult course ends with a phase on building, securing and shipping, because reviewing and testing agent output is where the real work is.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.anthropic.com/legal/consumer-terms" rel="noopener" target="_blank">Anthropic Consumer Terms</a>; <a class="ag-inline-link" href="https://openai.com/policies/terms-of-use/" rel="noopener" target="_blank">OpenAI Terms of Use</a>; <a class="ag-inline-link" href="https://docs.github.com/en/site-policy/github-terms/github-terms-of-service" rel="noopener" target="_blank">GitHub Terms of Service</a>; <a class="ag-inline-link" href="https://github.com/education/students" rel="noopener" target="_blank">GitHub Education</a>; <a class="ag-inline-link" href="https://cccgrader.com/rules.pdf" rel="noopener" target="_blank">CCC rules</a>. All read 22 October 2026; terms change, so check before signing up.' }
      ]
    },
    {
      id: 'limits', tint: 'tint', eyebrow: 'Honest limits',
      h2: 'What AI agents can do, and what they cannot',
      lede: 'Agents are sold as autonomous workers. The people who build them are more careful. This table combines Anthropic\'s published guidance with what our own small agent below showed.',
      body: [
        { kind: 'table', caption: 'Agents: strengths and limits (Anthropic\'s guidance, quoted; our test results, labelled)', head: ['Question', 'What the evidence says'], rows: [
          ['Can an agent handle a task nobody scripted?', 'Yes. Anthropic: agents suit cases where "flexibility and model-driven decision-making are needed at scale".'],
          ['Is an agent always the right choice?', 'No. Anthropic recommends "finding the simplest solution possible, and only increasing complexity when needed."'],
          ['What does autonomy cost?', 'Anthropic: "higher costs, and the potential for compounding errors."'],
          ['How should agents be tested?', 'Anthropic: "We recommend extensive testing in sandboxed environments, along with the appropriate guardrails."'],
          ['Can an agent state something its tools never returned?', 'Yes. Our stand-in plan below names a park, "Maple Leaf Dog Run", that is not in the city\'s file. Only the check catches it.'],
          ['Does an agent understand data it was not told about?', 'No. The Ottawa file codes dog rules as 0 to 4. Nothing in a code says that 0 means off leash and 4 means not designated; the agent knows only what its tool description says.']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Good at', p: 'Repetitive changes across many files, first drafts of tests, exploring an unfamiliar codebase, and joining tools a person has already made reliable.' },
          { h3: 'Weak at', p: 'Knowing when it is wrong, respecting a rule nobody wrote down, and stopping when the task is unclear. It will often produce a confident answer instead.' },
          { h3: 'Needs from you', p: 'Clear tools, a test you can run, version control to undo its changes, and a check that compares its answer with what its tools actually returned.' }
        ] }
      ]
    },
    {
      id: 'agent', tint: 'deep', eyebrow: 'A real agent example',
      h2: 'An Ottawa parks agent whose answers are checked',
      lede: 'The City of Ottawa publishes its parks and greenspace under a licence that allows commercial reuse, including a coded rule for dogs in each park. We built a small agent loop around it to show every part an agent needs: tools, a loop that runs them, and a check on the final answer. The code and every number are ours, run on the city\'s file downloaded on 22 October 2026.',
      body: [
        { kind: 'p', html: '<b>The question an agent is asked:</b> "Which parks in Kanata North let my dog off leash?" The file has 1,378 rows across 24 wards, with columns including NAME, WARD_NAME, DOG_DESIGNATION and DOG_DESIGNATION_DETAILS, the city\'s own wording for each park\'s rule.' },
        { kind: 'table', caption: 'What the DOG_DESIGNATION codes mean, read from the city\'s own detail text (our tally of the file)', head: ['Code', 'The city\'s wording, most common form', 'Parks'], rows: [
          ['0', '"Dogs may be off leash." (with a line about the handler\'s control)', '175'],
          ['1', '"Dogs are allowed but must be on leash at all times."', '356'],
          ['2', 'Area-specific, for example off leash in a fenced area and on leash elsewhere', '69'],
          ['3', '"Dogs are not allowed in the park."', '119'],
          ['4', '"The park has not been designated." (then on-leash wording)', '631'],
          ['Blank', 'No code given', '28']
        ] },
        { kind: 'code', label: 'Our agent loop &middot; park_agent.py', lang: 'python', code: AGENT },
        { kind: 'code', label: 'Output on the city\'s file', lang: 'text', code: AGENT_OUT, note: 'Kanata North has 95 parks; 11 carry code 0. The honest plan passes the check. The plan that adds a park its tools never returned is rejected.' },
        { kind: 'two', mt: true,
          leftH3: 'Why the stand-in, and what replaces it',
          left: [
            'The model is replaced here by a fixed plan, clearly marked, so the loop and its check can be run and tested on any laptop without an AI service. That is how we test agent code in class: the plan that a model would produce is written out by hand first, including a bad one.',
            'In the adult course the fixed plan is swapped for calls to a model through its API, and nothing else changes: the same tools, the same loop, the same check. For teens, the same exercise is done with tools their age allows.'
          ],
          rightH3: 'Three weaknesses we leave in on purpose',
          right: [
            'park_details returns the first park with a matching name, but 16 names appear more than once in the file. A better tool takes the PARK_ID instead. Learners find this themselves by asking for a name that repeats.',
            'The check only proves each named park came from a tool; it cannot prove the agent asked the right question. And the meaning of codes 0 to 4 lives in our DOG_CODES table, which we wrote by reading the city\'s text. If the city changed its codes, the agent would be confidently wrong. Each of these is a class discussion.'
          ] },
        { kind: 'source', html: 'Data: <a class="ag-inline-link" href="https://hub.arcgis.com/datasets/cfb079e407494c33b038e86c7e05288e_24" rel="noopener" target="_blank">City of Ottawa open data</a>, Parks and Greenspace. Contains information licensed under the Open Government Licence, City of Ottawa. The licence allows use "including for commercial purposes". Code, tallies and the stand-in plan are ours; the City of Ottawa does not endorse this page.' }
      ]
    },
    {
      id: 'canada', tint: 'tint', eyebrow: 'In Canadian classrooms',
      h2: 'Where AI-assisted coding already appears in Canada',
      lede: 'Canadian school documents have started to name AI tools and to ask students to judge them. These are the lines we read on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'AI in Canadian course and contest documents (read 22 October 2026)', head: ['Where', 'What it says', 'What it means for a learner'], rows: [
          ['New Brunswick, Computer Science 110', 'Students code "using coding environments or AI-assisted debugging tools"', 'A provincial course already expects AI help in debugging'],
          ['Ontario, ICD2O (2023)', 'Students investigate innovations "including automation and artificial intelligence, and assess their benefits and limitations"', 'Judging AI is part of the course, not just using it'],
          ['Canadian Computing Competition rules', 'Generative AI forbidden; "AI-based tools within an IDE cannot be used."', 'Contest skill has to be the student\'s own']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'For teens in school',
          left: [
            'These documents pull in two directions, and both are right. A teen should be able to use an allowed assistant to find a bug, and should also be able to write the program with no assistant at all, because a contest, a test or an interview will ask for exactly that.',
            'Our teen classes practise both, in the same week.'
          ],
          rightH3: 'For adults at work',
          right: [
            'For adults the question is different: how to use agents without losing control of the code. Version control, small reviewable changes and tests that run before anything is merged are the habits that make agents safe to use on real work.',
            'We make no job or salary promises. What we teach is the judgement that keeps AI-written code from becoming someone else\'s problem.'
          ] }
      ]
    },
    {
      id: 'thinking', tint: 'deep', eyebrow: 'Thinking, not copying',
      h2: 'Why we teach vibe coding as a reading skill',
      lede: 'Our promise is the same in every country: learners are taught to think a problem through and solve it, not to copy an answer or an AI\'s output. With vibe coding that promise is tested hardest, so we make it concrete.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Predict before accepting', p: 'Before running AI-written code, the learner says what it should do and where it might fail. Accepting code you could not predict is how bugs reach users.' },
          { h3: 'Explain every line', p: 'Anything a learner submits, they can explain line by line. A line they cannot explain is rewritten by them, by hand.' },
          { h3: 'Write the check first', p: 'For agents, the test or the answer check is written before the agent runs, exactly as in the Ottawa example.' }
        ] },
        { kind: 'p', mt: true, html: 'The Collins definition describes vibe coding as "telling a machine what you want rather than painstakingly coding it yourself". Collins adds: "It\'s programming by vibes, not variables." That is a fair description of the first step. Our classes are about every step after it, where the variables come back.' }
      ]
    },
    {
      id: 'time', tint: 'tint', eyebrow: 'Six zones, one plan',
      h2: 'Class times for teens and working adults across Canada',
      lede: 'Teens fit classes around school; adults around work and family. Every class is booked in the learner\'s own zone, and only the eastern provinces change clocks this year.',
      body: [
        { kind: 'table', caption: 'UTC offsets, 2026 to 2027 school and work year (IANA tz database 2026e)', head: ['Where', 'Until 14 March 2027', 'From 14 March 2027'], rows: [
          ['British Columbia (most) and Yukon', 'UTC-7', 'UTC-7'],
          ['Alberta and Saskatchewan', 'UTC-6', 'UTC-6'],
          ['Manitoba', 'UTC-5', 'UTC-5'],
          ['Ontario and Quebec', 'UTC-5 (from 1 November 2026)', 'UTC-4'],
          ['Maritime provinces', 'UTC-4 (from 1 November 2026)', 'UTC-3'],
          ['Newfoundland', 'UTC-3:30 (from 1 November 2026)', 'UTC-2:30']
        ] },
        { kind: 'p', mt: true, html: 'Adults in our courses often choose weekday evenings or weekend mornings. Our teachers are in India, where a Canadian weekend morning falls in the evening, so those slots are easy to arrange in every zone.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Four levels',
    h2: 'From prompting to building agents you can trust',
    lede: 'Our levels for placing a teen or adult in the first class.',
    table: { caption: 'Four levels in vibe coding and agents (ours)', head: ['Level', 'What the learner can do'], rows: [
      ['1. Prompts', 'Gets working code from an assistant for a small task'],
      ['2. Reads', 'Explains AI-written code line by line and fixes its mistakes'],
      ['3. Builds tools', 'Writes functions with clear inputs, outputs and errors for an agent to call'],
      ['4. Checks agents', 'Wraps an agent in tests and answer checks, and knows when not to use one']
    ] },
    left: { h3: 'For parents of teens', ps: [
      'Level 2 is the one that matters most at school age. A teen who can read code can learn anything that follows.',
      'Teens reach level 3 in our course with tools their age allows; agentic tools for adults come later, at 18.'
    ] },
    right: { h3: 'For adults', ps: [
      'Most self-taught vibe coders stop at level 1. Levels 2 and 4 are where AI-written code becomes something you can put your name to.',
      'Keep every agent change in version control. If you cannot undo it, you cannot trust it.'
    ] }
  },

  catalogue: {
    eyebrow: 'Related courses',
    h2: 'Nine more courses around AI and building',
    lede: 'Live, with one regular teacher, in a batch or one to one. Teen and adult courses are kept separate.',
    bands: [
      { num: 'I', h3: 'Teens', sub: 'Ages 13 to 18', courses: [
        { code: 'VAAC / TEEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The language most AI tools write.' },
        { code: 'VAAC / TEEN / 02', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub for teens', blurb: 'Undo anything an assistant changes.' },
        { code: 'VAAC / TEEN / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'How the models behind the tools work.' }
      ] },
      { num: 'II', h3: 'Adults: building with AI', sub: 'Ages 18 and up', courses: [
        { code: 'VAAC / ADULT / 01', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI', blurb: 'LLMs, retrieval and agents, from first principles.' },
        { code: 'VAAC / ADULT / 02', slug: 'python-ai-automation-masterclass-college', title: 'Python automation', blurb: 'Scripts and applied AI for real work.' },
        { code: 'VAAC / ADULT / 03', slug: 'full-stack-web-development-masterclass-college', title: 'Full stack development', blurb: 'React, Node.js and deployment basics.' }
      ] },
      { num: 'III', h3: 'Adults: agents at work', sub: 'Professionals', courses: [
        { code: 'VAAC / PRO / 01', slug: 'build-ai-agents-with-google-gemini-enterprise-course', title: 'Gemini Enterprise agents', blurb: 'Agents in a Google workplace.' },
        { code: 'VAAC / PRO / 02', slug: 'ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals', title: 'Copilot Studio agents', blurb: 'Agents in a Microsoft workplace.' },
        { code: 'VAAC / PRO / 03', slug: 'git-github-advanced-version-control-masterclass-for-professionals', title: 'Advanced Git and GitHub', blurb: 'Review and control at team scale.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Live classes, teens and adults apart',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school for teens; evenings for adults.' },
      { time: 'Weekends', l: 'Mornings or afternoons, in your own zone.' },
      { time: '1-on-1', l: 'Built around your project or your codebase.' }
    ],
    cells: [
      { h3: 'Age-correct tools', p: 'Teens and adults use what their age allows.' },
      { h3: 'Read, then accept', p: 'No AI-written line is kept unexplained.' },
      { h3: 'Tools before agents', p: 'Reliable functions first, then the loop.' },
      { h3: 'Checks on answers', p: 'Every agent answer is compared with its tools.' },
      { h3: 'Version control', p: 'Every change can be inspected and undone.' },
      { h3: 'Group or solo', p: 'A batch of fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Projects our students have shipped',
  projectsLede: 'Some of these were built with AI assistance and then read, tested and fixed by the student. More are on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Reviews on Google from students and parents, as they wrote them.',

  fees: {
    h2: 'Fees',
    lede: 'Courses are paid by the month, and the fee covers eight live classes. Adults fitting classes around work can pause between months without anything owed.',
    free: ['A free first class', 'A short read-the-AI-code exercise', 'No card details'],
    group: ['Fifteen to twenty learners of one age group', 'A regular teacher', 'A weekly slot that suits you', 'Billed monthly'],
    one: ['A teacher to yourself', 'Your own project or repository', 'Times around your week']
  },

  faq: {
    eyebrow: 'Questions about vibe coding and agents',
    h2: 'Vibe coding and AI agents in Canada: common questions',
    items: [
      { q: 'What is vibe coding?', a: 'Collins Dictionary, which made it its Word of the Year 2025, says vibe coding refers to the use of artificial intelligence prompted by natural language to write computer code. In our classes it is the first step; reading and testing what the AI wrote is the rest.' },
      { q: 'What is the difference between an AI agent and a workflow?', a: 'In Anthropic\'s definitions, a workflow runs models and tools through predefined code paths, while an agent lets the model direct its own process and tool use. Agents are more flexible and also more prone to compounding errors.' },
      { q: 'Can teenagers take vibe coding classes?', a: 'Yes. Our Vibe Coding for Teens course is for ages 13 to 17 and uses only tools whose terms allow the student\'s age, such as GitHub Copilot for verified students and, with a parent\'s permission, OpenAI\'s tools.' },
      { q: 'Can a teen use Claude or Claude Code?', a: 'No. Anthropic\'s terms say users must be at least 18 years old. We never recommend Claude or Claude Code to anyone under 18; they appear only in our adult courses.' },
      { q: 'Is there an AI agents course for adults in Canada?', a: 'Yes. Our Codex and Claude Code course for professionals runs 24 live classes over 12 weeks, from agent foundations to securing and shipping. Vibe Coding for College covers building full stack projects with AI assistance for ages 18 and up.' },
      { q: 'Do I need to know how to code first?', a: 'It helps but is not required. Every course starts by teaching learners to read code, because judging AI-written code is the core skill. Adults new to programming often take a Python course alongside.' },
      { q: 'Can AI agents replace programmers?', a: 'We make no such claim. Anthropic\'s own guidance warns of higher costs and compounding errors and recommends testing agents in sandboxed environments. Our own small agent shows an answer naming a park its tools never returned; only a check caught it.' },
      { q: 'Can students use AI tools in the Canadian Computing Competition?', a: 'No. The CCC rules forbid generative AI and AI-based tools inside an editor during the contest, so contest practice happens without assistants.' },
      { q: 'What times are classes in Canada?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Every time is set in your own province\'s zone.' },
      { q: 'What will I build?', a: 'Teens build Python and web projects with allowed assistants and explain every line. Adults build agents on real codebases and data, such as the Ottawa parks agent on this page, wrapped in tests and answer checks.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More on building with AI, and more for learners in Canada.',
    items: [
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'Our pages for every province.' },
      { href: '/ai-and-machine-learning-classes-in-canada', label: 'AI and machine learning in Canada', p: 'Training models, not just prompting them.' },
      { href: '/what-is-vibe-coding', label: 'What is vibe coding?', p: 'The idea in more depth.' },
      { href: '/vibe-coding-for-teens', label: 'Vibe coding for teens', p: 'Our teen approach in detail.' },
      { href: '/parents-guide-to-vibe-coding', label: 'A parent\'s guide to vibe coding', p: 'For parents of teens.' },
      { href: '/ai-agents-explained', label: 'AI agents explained', p: 'How agents decide what to do.' },
      { href: '/agentic-coding-classes', label: 'Agentic coding classes', p: 'Working with coding agents.' },
      { href: '/model-context-protocol-mcp-course', label: 'Model Context Protocol course', p: 'Connecting agents to tools.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Age rules for many tools.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'We start with a short piece of AI-written code that has a hidden mistake. Finding and explaining it tells the teacher your level, and whether the teen or adult course fits.',
    readFirst: 'Want to read more? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> explains a live class, and the <a class="ag-inline-link" href="/courses">course pages</a> set out each syllabus.',
    note: 'Classes are live over video, with teachers based in India, for learners in every province and territory. The fastest way to reach us is WhatsApp.',
    formNote: 'The first class is free and needs no card.'
  },

  footer: {
    cols: [
      { h4: 'Building with AI', links: [
        { href: '/what-is-vibe-coding', label: 'What is vibe coding?' },
        { href: '/ai-agents-explained', label: 'AI agents explained' },
        { href: '/agentic-coding-classes', label: 'Agentic coding' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/ai-and-machine-learning-classes-in-canada', label: 'AI and ML in Canada' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Check the answer against the tools'
  },

  personalityCss: `
.ag-root.ag-vaac .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-vaac .ag-capsule { border-left-width: 4px; border-radius: 5px; }
.ag-root.ag-vaac .ag-section-head h2 { max-width: 35ch; }
.ag-root.ag-vaac .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-vaac .ag-band-head h3 { letter-spacing: -0.007em; }
.ag-root.ag-vaac .ag-slots { gap: 1.2rem; }
`,

  dossier: {
    curriculumAuthority: 'Collins Word of the Year 2025 post; Anthropic, Building effective agents; Claude Code overview; Model Context Protocol introduction; Anthropic, OpenAI and GitHub terms and GitHub Education; New Brunswick Computer Science 110; Ontario ICD2O; CCC rules; all read 22 October 2026. City of Ottawa Parks and Greenspace under the Open Government Licence, City of Ottawa.',
    localProject: 'An Ottawa parks agent: an original Python agent loop with two tools over the City of Ottawa parks file (1,378 rows), a fixed stand-in plan in place of a model, and an answer check that passes the honest plan and rejects an invented park; plus our tally of the five DOG_DESIGNATION codes from the city\'s own wording and three deliberate weaknesses for discussion. Lesson family: tool contracts and verifying agent answers.',
    requiredMentions: ['park_agent.py', 'Maple Leaf Dog Run', 'REJECTED, no tool result for', 'DOG_DESIGNATION', 'Kanata Town Centre Stormwater Pond', 'The park has not been designated', 'programming by vibes', 'Check the answer against the tools', 'Write the check first'],
    sources: [
      { claim: 'Vibe coding as Collins Word of the Year 2025 and its definition.', url: 'https://blog.collinsdictionary.com/language-lovers/collins-word-of-the-year-2025-ai-meets-authenticity-as-society-shifts/' },
      { claim: 'Workflows and agents defined; simplest solution first; costs, compounding errors, sandboxed testing.', url: 'https://www.anthropic.com/research/building-effective-agents' },
      { claim: 'Claude Code described as an agentic coding tool.', url: 'https://code.claude.com/docs/en/overview' },
      { claim: 'MCP defined as an open-source standard.', url: 'https://modelcontextprotocol.io/' },
      { claim: 'Anthropic 18+ minimum age.', url: 'https://www.anthropic.com/legal/consumer-terms' },
      { claim: 'OpenAI minimum age and parental permission under 18.', url: 'https://openai.com/policies/terms-of-use/' },
      { claim: 'GitHub minimum age 13 and free Copilot for verified students.', url: 'https://github.com/education/students' },
      { claim: 'Ottawa parks open data and licence.', url: 'https://hub.arcgis.com/api/v3/datasets/cfb079e407494c33b038e86c7e05288e_24/downloads/data?format=csv&spatialRefId=4326&where=1%3D1' }
    ],
    rejectedClaims: [
      'Recommending Claude, Claude Code or the teen Codex and Claude Code course to anyone under 18: refused under Anthropic\'s terms.',
      'That agents can work unsupervised or replace programmers: refused; the page quotes Anthropic\'s cautions and shows a caught invented answer.',
      'That the stand-in plan is a model: refused; it is labelled as a fixed plan.',
      'Kingston outdoor rinks as the dataset: dropped because its licence PDF could not be quoted from a clean text extraction.',
      'Job or salary outcomes for adults: refused.'
    ]
  }
};
