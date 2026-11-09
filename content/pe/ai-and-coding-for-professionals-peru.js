// SHIP: market | Professionals in Peru: AI tools, Python automation and agents, in English, around a job | never trust model output: parse JSON, catch JSONDecodeError, check keys and types
'use strict';
// AI and coding for professionals in Peru (ag- English door, Peru cluster row PE005, hubGroup ages; alloc aipr, #4C4300).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08: timing flexible, any time.
// Audience: working adults in Peru who read English (analysts, managers, accountants, engineers, teachers, founders) and
// expatriate professionals in Lima. Targets "ai and coding for professionals peru", "cursos para profesionales".
// Spine (different from the Spanish agents-for-professionals page, which is about agent risk and the DS 115-2025-PCM
// deadlines, and the Spanish adults page, which goes from Excel to Python): where professionals in Peru stand (INEI skills,
// Findex), three starting points (AI tools, Python automation, agents), why AI output must be checked (the lesson), the
// clocks a Lima professional actually works across (tz database, the primary-source table), English at work (EF EPI
// 2025), and fitting classes around a job.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/ai-and-coding-for-professionals-peru/;
// read 9 November 2026; quotes string-matched in the raw files):
//  - IANA tz database, raw files from github.com/eggert/tz main, fetched 9 Nov 2026 (tz-northamerica.txt, tz-europe.txt,
//    tz-southamerica.txt, tz-asia.txt): "Rule	US	2007	max	-	Mar	Sun>=8	2:00	1:00	D", "Rule	US	2007	max	-	Nov
//    Sun>=1	2:00	0	S"; "Rule	Mexico	2002	2022	-	Apr	Sun>=1" (Mexico's rules end in 2022; Mexico_City now "-6:00	-
//    CST"); "Rule	EU	1981	max	-	Mar	lastSun	 1:00u	1:00	S", "Rule	EU	1996	max	-	Oct	lastSun	 1:00u	0	-";
//    "Rule	Brazil	2018	only	-	Nov	Sun>=1"; "Rule	Peru	1994	only	-	Apr	 1	0:00	0	-"; Zone Asia/Kolkata +5:30.
//    Our script clocks.py (python3 -I, zoneinfo) prints for 10:00 in Lima on 15 Jan 2027: Mexico_City 09:00, New_York 10:00,
//    Sao_Paulo 12:00, London 15:00, Madrid 16:00, Kolkata 20:30; on 15 Jul 2027: 09:00, 11:00, 12:00, 16:00, 17:00, 20:30.
//  - INEI TIC II Trimestre 2026 (inei_tic_iit2026.txt), Cuadro 4.1 (population 15+ who did a computing task on a computer,
//    laptop, tablet or similar): "el 73,7% aplicó fórmulas aritméticas simples en hojas de cálculo"; "Solo el 47,7% de la
//    población descargó, instaló y configuró nuevo software, y apenas el 12,1% redactó programas informáticos utilizando
//    lenguajes de programación especializados"; Cuadro 2.1 "25 a 40 años 90,9 92,7 93,9 95,2" and "41 a 59 años 76,5 79,9
//    81,9 86,0".
//  - World Bank Global Findex (wb_PER_con30e.json): "Accessed online info to learn/train/educate in past three months  (% age
//    15+)", Peru, "date": "2024", value 42.885... (42.9).
//  - EF EPI 2025 Peru page (ef_peru.raw): "IT : 522", "Strategy &amp; Project Management : 589", "Customer Service : 585",
//    "Accounting &amp; Finance : 484"; "ageGroup3Score":559 (26 to 30, high), "ageGroup4Score":537 (31 to 40).
//  - US Commercial Service, Peru CCG Digital Economy, published 2026-06-22 (tradegov_digital.txt): "193 Peru-based fintechs
//    operating as of 2024".
//  - MINEDU press release (FACTS 50): "más de 87 000 docentes en el territorio nacional se han inscrito en el curso
//    “Inteligencia artificial (IA) en la práctica docente”" (2025).
//  - AI tool ages (content/ai-tool-age-audit.json): Claude 18+; ChatGPT 13+ with parental permission under 18.
// Our own example (replies_v1.py, replies_v2.py in the src-pages folder, python3 -I; client names invented): v1 prints
// "Client 101 5" then stops with "json.decoder.JSONDecodeError: Expecting value: line 1 column 1 (char 0)"; v2 prints
// "OK Client 101", "OK Client 102", "REVIEW missing date; attendees is str", "REVIEW not JSON: Expecting value".
// Lesson family: treat model output as untrusted input: strip code fences, json.loads inside try/except JSONDecodeError,
// then check required keys and types, and route failures to a human.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'import json',
  '',
  'replies = [',
  '    \'{"client": "Client 101", "date": "2027-01-15", "attendees": 4}\',',
  '    \'```json\\n{"client": "Client 102", "date": "2027-01-18", "attendees": 2}\\n```\',',
  '    \'{"client": "Client 103", "attendees": "four"}\',',
  ']',
  'for r in replies:',
  '    data = json.loads(r)',
  '    print(data["client"], data["attendees"] + 1)'
].join('\n');

const OUT1 = [
  'Client 101 5',
  'Traceback (most recent call last):',
  '  ...',
  'json.decoder.JSONDecodeError: Expecting value: line 1 column 1 (char 0)'
].join('\n');

const V2 = [
  'import json',
  '',
  'REQUIRED = {"client": str, "date": str, "attendees": int}',
  '',
  'def check(reply):',
  '    text = reply.strip()',
  '    if text.startswith("```"):',
  '        text = text.strip("`").removeprefix("json").strip()',
  '    try:',
  '        data = json.loads(text)',
  '    except json.JSONDecodeError as e:',
  '        return None, ["not JSON: " + e.msg]',
  '    problems = []',
  '    for key, kind in REQUIRED.items():',
  '        if key not in data:',
  '            problems.append("missing " + key)',
  '        elif not isinstance(data[key], kind):',
  '            problems.append(key + " is " + type(data[key]).__name__)',
  '    return (data if not problems else None), problems',
  '',
  'replies = [',
  '    \'{"client": "Client 101", "date": "2027-01-15", "attendees": 4}\',',
  '    \'```json\\n{"client": "Client 102", "date": "2027-01-18", "attendees": 2}\\n```\',',
  '    \'{"client": "Client 103", "attendees": "four"}\',',
  '    \'Sure! Here is the data you asked for.\',',
  ']',
  'for r in replies:',
  '    data, problems = check(r)',
  '    print("OK " + data["client"] if data else "REVIEW " + "; ".join(problems))'
].join('\n');

const OUT2 = [
  'OK Client 101',
  'OK Client 102',
  'REVIEW missing date; attendees is str',
  'REVIEW not JSON: Expecting value'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'ages', label: 'AI and coding for professionals' },
  slug: 'ai-and-coding-for-professionals-peru',
  code: 'aipr',
  accent: '#4C4300',
  accentRationale: 'AI and coding for professionals in Peru: a dark coffee-husk olive #4C4300, the colour of roasted beans from the Peruvian highlands, sober enough for a working adult\'s page; contrast 8.08 on the paper #FBF8F2 and above 4.5 on every paper tone',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'AI and coding for professionals in Peru',
  title: 'AI and Coding for Professionals in Peru: Live, in English',
  description: 'AI and coding courses for working professionals in Peru: AI tools, Python automation and AI agents, taught live online in English, one to one or in a group.',
  ogDescription: 'Where a working professional in Peru should start with AI and code, why model output has to be checked, the clocks a Lima professional works across, and how live classes in English fit around a job.',
  twitterDescription: 'Live AI and coding classes in English for professionals in Peru: AI tools, Python automation and agents, at any hour.',
  pageName: 'AI and Coding for Professionals in Peru',
  webPageDescription: 'A guide for working professionals in Peru who want AI and coding taught live in English, built from INEI household technology data for 2026, the World Bank Global Findex 2024, EF EPI 2025 job-function scores, the US Commercial Service guide to Peru\'s digital economy, a MINEDU press release and the IANA tz database, with an original Python lesson on validating AI output.',
  courseDescription: 'Live online AI and coding courses for working professionals in Peru, taught in English by mentors based in India: AI tools for daily work, Python automation, data analysis and AI agents with Copilot Studio, Gemini Enterprise, Codex and Claude Code, in a group of fifteen to twenty or one to one, at hours chosen around work.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Professionals',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#start', label: 'Where to start' },
    { href: '#agents', label: 'AI agents' },
    { href: '#lesson', label: 'Checking AI output' },
    { href: '#clocks', label: 'Working clocks' },
    { href: '#job', label: 'Around a job' }
  ],
  eyebrow: 'Peru &middot; Working professionals &middot; Live online, in English',
  h1: 'AI and coding for professionals in Peru',
  lede: 'Most professionals in Peru already use a spreadsheet; far fewer can make a computer do the repetitive part of their job for them. AI tools have narrowed that gap, but they have not closed it: someone still has to know what to ask for, and how to tell when the answer is wrong. This page is for working adults in Peru who read English and want that skill: where to start, what an AI agent really is, a short lesson on checking AI output, and how live classes fit a working week.',
  secondaryCta: { href: '#lesson', label: 'See the checking lesson' },
  wa: 'Hello Modern Age Coders, I work in Peru and would like live AI and coding classes in English. Could I book a free first class?',
  heroNote: 'Teaching adults live since 2020 &middot; 4.9 from about 547 Google reviews &middot; one mentor, your pace, your hours',
  spec: [
    ['For', 'Working professionals, any field'],
    ['Learn', 'AI tools, Python, data, agents'],
    ['Level', 'From zero, or from a spreadsheet'],
    ['Format', 'One to one, or a group of fifteen to twenty'],
    ['Peru time', 'Early, late or at lunch'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'What we offer',
  capsule: 'Modern Age Coders teaches AI and coding to working professionals in Peru in live online classes, taught in English by mentors based in India. Professionals start in one of three places: using AI tools well in daily work, automating spreadsheet and file tasks with Python, or building AI agents with tools such as Copilot Studio, Gemini Enterprise, Codex and Claude Code. Lessons run one to one or in a group of fifteen to twenty, at an hour that fits around work in Peru time, and the first class is free.',

  picks: {
    eyebrow: 'Where professionals start',
    h2: 'Three courses professionals in Peru start with',
    lede: 'One for automating your own work, one for using AI tools with judgement, and one for professionals ready to direct AI coding agents.',
    items: [
      { course: 'python-ai-automation-masterclass-college', code: 'AIPR / 01', title: 'Python Automation', note: 'For people who spend hours on files, reports and spreadsheets. Python scripts that rename, merge, clean and summarise, then applied AI on top. No coding background needed.' },
      { course: 'ai-tools-mastery-complete-college', code: 'AIPR / 02', title: 'AI Tools Mastery', note: 'ChatGPT, Claude and automation tools used properly: clear instructions, checked answers, and workflows that save real time without leaking data you should not share.' },
      { course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', code: 'AIPR / 03', title: 'Codex and Claude Code', note: 'For professionals who want AI agents to write and change code for them, and the judgement to review what those agents produce before it reaches anyone else.' }
    ]
  },

  sections: [
    {
      id: 'who',
      eyebrow: 'Who it suits',
      h2: 'Who are these AI and coding classes for?',
      lede: 'Adults in work in Peru who can follow spoken English, from any profession. Many have never written a line of code; some have and want to modernise.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Analysts and managers', p: 'You live in spreadsheets, reports and email. You want the routine parts automated and AI used for drafts and analysis, without losing control of the numbers.' },
          { h3: 'Engineers and technical staff', p: 'You can already program a little, or did once. You want modern Python, data skills, and AI coding agents that speed up work you understand.' },
          { h3: 'Founders and expatriate professionals', p: 'You run a small team or work for a company abroad from Lima. You want to build simple tools yourself and speak about AI with confidence, in English.' }
        ] },
        { kind: 'p', mt: true, html: 'Readers who prefer Spanish can see <a class="ag-inline-link" href="/cursos-de-programacion-para-adultos-peru">Leer en español: cursos de programación para adultos</a>, about learning to code while working, and <a class="ag-inline-link" href="/curso-de-agentes-de-ia-para-profesionales">agentes de IA para profesionales</a>, about agents at work and the rules around them. Both describe classes taught in English.' }
      ]
    },
    {
      id: 'start',
      tint: 'tint',
      eyebrow: 'Where to start',
      h2: 'Where should a working professional start with AI and coding?',
      lede: 'Close to the work you already do. Peru\'s statistics institute shows that most computer users can handle a spreadsheet, and very few can program, which leaves a large and useful middle ground.',
      body: [
        { kind: 'two',
          leftH3: 'What the 2026 figures show',
          left: [
            'INEI\'s survey for the second quarter of 2026 asked Peruvians of 15 and over what they had done with a computer, laptop or tablet. Of those who had used one for any computing task, 73.7% had applied arithmetic formulas in a spreadsheet and 47.7% had installed and configured software, but only 12.1% had written a program in a programming language.',
            'Learning online is already common. The World Bank\'s Global Findex found that 42.9% of Peruvians aged 15 and over had looked online for information to learn, train or study in the previous three months, in its 2024 survey.'
          ],
          rightH3: 'Our three starting points',
          right: [
            '<strong>AI tools, used well.</strong> For anyone. Writing precise instructions, checking the answers, keeping confidential data out, building small repeatable workflows.',
            '<strong>Python automation.</strong> For anyone who repeats the same file or spreadsheet task each week. It is the step from 73.7% to 12.1% in the INEI table, and it takes weeks, not years.',
            '<strong>AI agents.</strong> For professionals who already understand their process and want software to carry out several steps of it, with a person approving the important ones.'
          ] },
        { kind: 'p', mt: true, html: 'Whichever you start with, the habit we teach is the same: understand the task before you hand it to a machine, and check what comes back. Peru\'s public sector is moving the same way; MINEDU reported in 2025 that more than 87,000 teachers had enrolled in its free online course on AI in teaching practice. AI literacy is becoming part of ordinary professional work, not a specialism.' }
      ]
    },
    {
      id: 'agents',
      eyebrow: 'AI agents',
      h2: 'What is an AI agent, and do I need to code to build one?',
      lede: 'An AI agent is a program that uses a language model to decide its next step, calls tools such as a search, a spreadsheet or an email system, and repeats until a goal is met or it is told to stop. You can build simple ones without code; you need code to make them reliable.',
      body: [
        { kind: 'two',
          leftH3: 'Without much code',
          left: [
            'Platforms such as Microsoft Copilot Studio and Google Gemini Enterprise let a professional design an agent with forms and connectors: answer staff questions from company documents, draft replies, update a record. Our courses on both are taught one to one, because every organisation\'s setup differs.',
            'The hard part is rarely the tool. It is deciding what the agent may do alone, what it must ask about, and what happens when it is unsure.'
          ],
          rightH3: 'With code',
          right: [
            'Coding agents such as OpenAI Codex and Anthropic\'s Claude Code write and change software from instructions. They are powerful in the hands of someone who can read the result, and risky in the hands of someone who cannot.',
            'That is why our agents courses start with enough Python to read what the agent wrote and test it. These tools are for adults: Anthropic\'s terms, for example, require Claude users to be 18 or older.'
          ] },
        { kind: 'p', mt: true, html: 'For a beginner\'s explanation of agents with worked examples, read our Spanish page <a class="ag-inline-link" href="/curso-de-agentes-de-ia-peru">curso de agentes de IA</a>, and the <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">Peru hub</a> lists every course page for adults in Peru.' }
      ]
    },
    {
      id: 'lesson',
      tint: 'tint',
      eyebrow: 'A real lesson',
      h2: 'Can you trust what an AI model returns? A Python lesson on checking output',
      lede: 'Not without checking. This lesson comes early in our automation and agents courses. A model has been asked to pull the client, date and number of attendees out of meeting notes and return them as JSON. The replies below are typical of what models actually send back; the client names are invented.',
      body: [
        { kind: 'two',
          leftH3: 'The naive version',
          left: [
            'Version 1 trusts every reply: it reads the JSON and uses the fields. The first reply is perfect, and the program prints <code>Client 101 5</code>.',
            'The second reply is the same data wrapped in a code fence, the three backticks a model often adds when it thinks it is being helpful. <code>json.loads</code> cannot read it, and the whole program stops with a <code>JSONDecodeError</code>. The third reply never gets checked at all.'
          ],
          rightH3: 'The professional version',
          right: [
            'Version 2 treats the reply as untrusted input, like a form filled in by a stranger. It removes a code fence if there is one, catches the parsing error instead of crashing, and checks that every required field is present and of the right type.',
            'Anything that fails is not guessed at or silently fixed. It is marked <code>REVIEW</code> with the reason, so a person looks at it. That one decision is the difference between automation that saves time and automation that creates quiet errors.'
          ] },
        { kind: 'code', label: 'Version 1: trust the reply', lang: 'Python', code: V1 },
        { kind: 'code', label: 'What Version 1 prints', lang: 'Output', code: OUT1, note: 'From our run with Python 3; the middle lines of the traceback are shortened. One good line, then a crash on the second reply.' },
        { kind: 'code', label: 'Version 2: parse, catch, check, route', lang: 'Python', code: V2 },
        { kind: 'code', label: 'What Version 2 prints', lang: 'Output', code: OUT2, note: 'Exact output of our run. Two replies accepted, two sent to a person, each with its reason.' },
        { kind: 'p', mt: true, html: 'Look at the third reply again. A careless fix would have converted <code>"four"</code> to 4 and invented a date. Version 2 does neither: it reports <code>missing date; attendees is str</code> and stops. In real work, the missing field is often the important one, and <strong>a model that cannot find a value will sometimes make one up</strong>. Checking the shape of the answer catches the honest failures; a person, or a second check against the source, catches the rest.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Spot the gap.</strong> What does Version 2 do with <code>{"client": "Client 104", "date": "2027-02-01", "attendees": true}</code>? Run it, then find out why Python lets it through.',
          '<strong>Tighten one rule.</strong> Make <code>date</code> fail unless it has the form year, month, day, using <code>datetime.date.fromisoformat</code>.',
          '<strong>Count the reviews.</strong> Process fifty replies and report what share needed a person. That share is your real automation rate, whatever the vendor says.',
          '<strong>Explain it to a manager.</strong> In four English sentences, explain why a crash in Version 1 was actually safer than a silent wrong answer.'
        ] }
      ]
    },
    {
      id: 'clocks',
      eyebrow: 'Working clocks',
      h2: 'Which time zones does a professional in Lima work across?',
      lede: 'Mostly the Americas and Europe, and Peru\'s clock never moves. Peru has not used summer time since 1994, while the United States and Europe change their clocks twice a year, so the gap to them changes even though Lima stays put.',
      body: [
        { kind: 'table', numCols: [], caption: 'When it is 10:00 in Lima: the same moment elsewhere in January and July 2027', head: ['City (tz zone)', '15 January 2027', '15 July 2027', 'Why it moves, or not'], rows: [
          ['Mexico City (America/Mexico_City)', '09:00', '09:00', 'Mexico\'s summer-time rules end in 2022'],
          ['New York (America/New_York)', '10:00', '11:00', 'US summer time from the second Sunday of March to the first Sunday of November'],
          ['São Paulo (America/Sao_Paulo)', '12:00', '12:00', 'Brazil\'s last summer-time rule was for 2018 to 2019'],
          ['London (Europe/London)', '15:00', '16:00', 'European summer time from the last Sunday of March to the last Sunday of October'],
          ['Madrid (Europe/Madrid)', '16:00', '17:00', 'Same European rule, one hour ahead of London'],
          ['Your mentor (Asia/Kolkata)', '20:30', '20:30', 'India has no summer time, so the gap is always 10 hours 30 minutes']
        ] },
        { kind: 'source', html: 'Source: IANA tz database (files northamerica, southamerica, europe and asia, fetched on 9 November 2026), rules US 2007 onwards, EU 1981 and 1996 onwards, Mexico 2002 to 2022, Brazil to 2018, Peru to 1994. Conversions computed by us with Python\'s zoneinfo, under the rules in force in November 2026; governments can change their rules, and the tz database follows.' },
        { kind: 'two', mt: true,
          leftH3: 'What the table means for work',
          left: [
            'From early November to early March, Lima and New York share the same clock exactly, which makes a working day with a US team easy. From March to November, New York is one hour ahead. Madrid is six or seven hours ahead depending on the season, so meetings with Spain fall in the Lima morning.',
            'Remote and multinational work of this kind usually runs in English. EF\'s English Proficiency Index 2025 scores Peruvians in IT roles at 522 and in strategy and project management at 589, and puts those aged 26 to 30 in its "high" band, at 559. EF tests adults who choose to take its test, so read these as signals, not a census.'
          ],
          rightH3: 'What it means for classes',
          right: [
            'India sits 10 hours 30 minutes ahead of Peru every day of the year, because neither country changes its clocks. A 07:00 class in Lima is 17:30 for the mentor; a 21:00 class is 07:30 the next morning in India. Both are ordinary working hours for our mentors.',
            'So a professional can take a class before work, at lunch or late in the evening, and the hour will not shift when the US or Europe changes their clocks. More about Lima specifically is on our <a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium coding classes in Lima</a> page.'
          ] }
      ]
    },
    {
      id: 'job',
      tint: 'tint',
      eyebrow: 'Around a job',
      h2: 'How do live classes fit around a full-time job?',
      lede: 'By being short, regular and attached to real work. Most professionals do best with two focused classes a week and one small task from their own job between them.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Use your own work', p: 'From the second week, exercises come from your job, with confidential details removed: your report, your spreadsheet layout, your recurring email. Progress is measured in hours saved, not slides watched.' },
          { h3: 'One to one when it helps', p: 'Professionals with irregular schedules, travel or a specific company tool usually choose one-to-one classes and move them as needed. Group classes suit people who like a fixed rhythm and other learners to compare with.' },
          { h3: 'Data you should not paste', p: 'We teach a simple rule from the first class: do not put client, personal or confidential company data into an AI tool unless your employer has approved that tool for it. Your organisation\'s own policy decides; we teach the habit.' }
        ] },
        { kind: 'p', mt: true, html: 'Peru\'s growing digital sectors make these skills easier to use. The US Commercial Service\'s 2026 guide to Peru\'s digital economy counts 193 Peru-based fintech companies operating as of 2024, alongside e-commerce, software and digital services. We make no promise about jobs or pay; we teach skills that are useful in all of them.' },
        { kind: 'p', html: 'People aged 41 to 59 are online in large numbers too: INEI reports internet use at 86.0% in that group in the second quarter of 2026, up from 76.5% in 2023. Starting AI and coding in mid-career is common in our classes, and nobody is expected to keep pace with a twenty-year-old.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'What can a professional do after three, six and twelve months?',
    lede: 'Our milestones, set with each learner and adjusted to their job. They describe what you can do at work, not what you have watched.',
    table: { numCols: [], caption: 'Our milestones for working professionals', head: ['Stage', 'Usually by', 'At work you can', 'You can explain'], rows: [
      ['1. Precise prompts', 'Week 4', 'Get consistent, checkable results from an AI tool', 'Why a vague instruction gives a vague answer'],
      ['2. First script', 'Month 2', 'Automate one weekly file or spreadsheet task in Python', 'What each line of the script does'],
      ['3. Checked output', 'Month 3', 'Validate AI or data output before anyone uses it', 'What your checks catch and what they miss'],
      ['4. Small tool', 'Month 6', 'Build a tool a colleague can run without you', 'How it fails and how to fix it'],
      ['5. Supervised agent', 'Month 9', 'Run an agent that does several steps, with approvals', 'Which steps a person must approve, and why'],
      ['6. Team practice', 'Month 12', 'Set up shared, reviewed AI workflows for a team', 'The risks to a manager, in plain English']
    ] },
    left: { h3: 'For you', ps: [
      'Stage 3 is the checking lesson above. Once you have it, you will never paste an AI answer straight into a report again.',
      'Keep a list of tasks you repeat each week. It becomes your syllabus.'
    ] },
    right: { h3: 'For your employer', ps: [
      'Stage 4 is where the investment returns: a tool that keeps working when you are on holiday.',
      'Stage 5 needs a written rule for what the agent may do alone. We help you draft it.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for working professionals',
    lede: 'All live, in English, with one mentor throughout. Courses marked for one-to-one teaching are taught only that way.',
    bands: [
      { num: 'I', h3: 'Data at work', sub: 'From spreadsheets up', courses: [
        { code: 'AIPR / DATA / 01', slug: 'data-and-ai-analytics-for-non-programmers-course', title: 'Data and AI for non-programmers', blurb: 'Excel, Sheets and Power BI with AI, no code required.' },
        { code: 'AIPR / DATA / 02', slug: 'data-analysis-mastery-course-college', title: 'Data analysis', blurb: 'Excel, SQL, Python and BI, end to end.' },
        { code: 'AIPR / DATA / 03', slug: 'mysql-database-complete-masterclass-college', title: 'SQL and databases', blurb: 'Queries and design for people who need their own data.' }
      ] },
      { num: 'II', h3: 'AI agents', sub: 'Adults, mostly one to one', courses: [
        { code: 'AIPR / AGENT / 01', slug: 'ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals', title: 'Copilot Studio agents', blurb: 'Agents inside Microsoft 365, one to one.' },
        { code: 'AIPR / AGENT / 02', slug: 'build-ai-agents-with-google-gemini-enterprise-course', title: 'Gemini Enterprise agents', blurb: 'Agents in Google Workspace, one to one.' },
        { code: 'AIPR / AGENT / 03', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI', blurb: 'LLMs, retrieval and agents, built in Python.' }
      ] },
      { num: 'III', h3: 'Building software', sub: 'For technical staff', courses: [
        { code: 'AIPR / BUILD / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python from zero', blurb: 'The full language, at a working adult\'s pace.' },
        { code: 'AIPR / BUILD / 02', slug: 'full-stack-web-development-masterclass-college', title: 'Full stack web', blurb: 'Internal tools and web apps with React and Node.js.' },
        { code: 'AIPR / BUILD / 03', slug: 'git-github-advanced-version-control-masterclass-for-professionals', title: 'Advanced Git and GitHub', blurb: 'Reviews, branching and history for teams.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live classes run for professionals in Peru',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Before work', l: 'An early Lima hour lands in the Indian late afternoon, an easy time for mentors.' },
      { time: 'Evening', l: 'After work in Peru is early morning in India; that works too.' },
      { time: '1-on-1', l: 'One professional and one mentor, rescheduled around travel and deadlines.' }
    ],
    cells: [
      { h3: 'A mentor who knows your work', p: 'The same mentor learns your field and your tools.' },
      { h3: 'Real tasks', p: 'Exercises drawn from your own job, anonymised.' },
      { h3: 'Plain English', p: 'Technical ideas in clear language, with no jargon left unexplained.' },
      { h3: 'Adults only', p: 'Professionals learn with other adults, never with school students.' },
      { h3: 'Written follow-up', p: 'Notes and code after each class to keep and reuse.' },
      { h3: 'Group or private', p: 'Fifteen to twenty adults, or one to one.' }
    ]
  },

  projectsH2: 'Projects our students have built',
  projectsLede: 'Our students build working software, from small automations to complete apps. A selection is below; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'What students and parents wrote about us on Google, word for word.',

  fees: {
    h2: 'Fees for professionals in Peru',
    lede: 'Courses are priced in US dollars and charged monthly to a card. Your bank sets the conversion into soles at the time of each charge, so the local amount can vary slightly.',
    free: ['A free first class', 'One real task from your work, started together', 'No card needed'],
    group: ['Fifteen to twenty adults at your level', 'One mentor all course', 'Two live classes a week', 'Monthly, stop at any time'],
    one: ['You and a mentor', 'Built around your role and tools', 'Hours you choose and can move']
  },

  faq: {
    eyebrow: 'Professionals ask',
    h2: 'What professionals in Peru ask before starting',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. All classes are live, online and taught only in English. Mentors speak clearly, adjust to your pace and accent, and show everything on a shared screen. For many professionals the English practice is a second benefit; there are Spanish-language pages about the courses, but the teaching is always in English.' },
      { q: 'Do I need to know how to code?', a: 'No. Our AI tools and Python automation courses start from zero. If you already use spreadsheet formulas, you already think in steps and conditions, which is most of what a first script needs.' },
      { q: 'What is the difference between AI tools and AI agents?', a: 'An AI tool answers when you ask. An AI agent takes a goal, decides its own next steps, uses other software such as email or a spreadsheet, and keeps going until it finishes or is stopped. Agents save more time and need more care, so we teach approvals and checks with them.' },
      { q: 'When are classes in Peru time?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India stays 10 hours 30 minutes ahead of Peru all year, so 07:00 in Lima is 17:30 in India and 21:00 in Lima is 07:30 the next morning there.' },
      { q: 'Can I use my company\'s data in class?', a: 'Only with the confidential details removed, and only within your employer\'s rules. We teach professionals not to put client, personal or confidential data into any AI tool their organisation has not approved. Your employer\'s policy always comes first.' },
      { q: 'Which AI tools will I learn?', a: 'Tools you can use at work: ChatGPT and Claude for writing and analysis, Python libraries for automation, and agent platforms such as Microsoft Copilot Studio, Google Gemini Enterprise, Codex and Claude Code. The Copilot Studio and Gemini courses are taught one to one.' },
      { q: 'Will this get me a better job or a raise?', a: 'We make no promise of jobs or pay. We teach skills that are useful in many roles and help you show them: a working tool, a checked analysis, an agent with clear rules. What you do with them is up to you and your employer.' },
      { q: 'Do I get a certificate?', a: 'Yes, our own certificate of completion. It is not a Peruvian qualification, and we are not connected with any Peruvian university, institute or ministry. Employers generally care more about what you can show them than about the certificate.' },
      { q: 'I am over 50. Is it too late?', a: 'No. Many of our adult students start in mid-career or later. One-to-one classes let you set the pace, and the first goal is always something useful in your own work within a few weeks.' },
      { q: 'How do I pay from Peru?', a: 'By card, monthly, in US dollars. The conversion into soles is done by your bank at its rate, so amounts can move slightly. The first class is free and booking it needs no card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'More for working professionals',
    lede: 'Pages that help you decide what to learn first.',
    items: [
      { href: '/how-we-teach', label: 'How we teach', p: 'One live class from start to finish.' },
      { href: '/we-teach-you-how-to-think', label: 'Thinking before tools', p: 'Why we teach the reasoning first.' },
      { href: '/student-labs', label: 'Student labs', p: 'Projects our students have built.' },
      { href: '/courses', label: 'All courses', p: 'Every syllabus in one place.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Peru hub', p: 'All our pages for learners in Peru.' },
      { href: '/english-medium-coding-classes-lima', label: 'Coding in English in Lima', p: 'Classes in English for Lima, every age.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Bring one task from your work. In the free class a mentor works through it with you, sees where AI or a short script would help, and gauges your starting point and your English. Then you get a plan: which course, one to one or group, and hours that suit your week.',
    readFirst: 'Want to read more first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> describes a class, and the <a class="ag-inline-link" href="/courses">course list</a> has every syllabus.',
    note: 'Classes are live video lessons taught from India, in English. For a quick reply, message us on WhatsApp in English.',
    formNote: 'Free, with no card and no commitment.'
  },

  footer: {
    cols: [
      { h4: 'For professionals', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/we-teach-you-how-to-think', label: 'Thinking first' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/courses', label: 'All courses' }
      ] },
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Peru hub' },
        { href: '/cursos-de-programacion-para-adultos-peru', label: 'Leer en español' },
        { href: '/curso-de-agentes-de-ia-para-profesionales', label: 'Agentes de IA' },
        { href: '/english-medium-coding-classes-lima', label: 'Coding in English, Lima' }
      ] }
    ],
    bottomRight: 'Treat every model reply as a stranger\'s form'
  },

  personalityCss: `
.ag-root.ag-aipr .ag-hero h1 { max-width: 19ch; letter-spacing: -0.012em; }
.ag-root.ag-aipr .ag-capsule { border-left-width: 6px; }
.ag-root.ag-aipr .ag-table caption { text-align: left; }
.ag-root.ag-aipr .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-aipr .ag-code-note code { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'IANA tz database (northamerica, southamerica, europe, asia; fetched 9 November 2026); INEI TIC en los Hogares II Trimestre 2026 (Cuadros 2.1 and 4.1); World Bank Global Findex 2024 (con30e); EF EPI 2025 Peru page (job functions, age groups); US Commercial Service Peru Country Commercial Guide, Digital Economy (2026-06-22); MINEDU press release on its AI course for teachers (2025); vendor terms for Claude (content/ai-tool-age-audit.json). Read 9 November 2026.',
    localProject: 'An original Python lesson on validating AI model output: a version that trusts json.loads prints Client 101 5 and crashes with JSONDecodeError on a fenced reply; the checked version strips fences, catches the error and checks required keys and types, printing OK Client 101, OK Client 102, REVIEW missing date; attendees is str, REVIEW not JSON: Expecting value. Lesson family: model output as untrusted input, routed to a person on failure.',
    requiredMentions: ['Client 101 5', 'REVIEW missing date; attendees is str', 'REVIEW not JSON: Expecting value', 'a model that cannot find a value will sometimes make one up', 'When it is 10:00 in Lima: the same moment elsewhere in January and July 2027', 'Mexico\'s summer-time rules end in 2022', 'Brazil\'s last summer-time rule was for 2018 to 2019', '193 Peru-based fintech companies operating as of 2024', 'Treat every model reply as a stranger\'s form'],
    sources: [
      { claim: 'US, EU, Mexico, Brazil and Peru summer-time rules; Lima, New York, Mexico City, São Paulo, London, Madrid and Kolkata zones.', url: 'https://github.com/eggert/tz' },
      { claim: 'Among people 15+ who did a computing task: 73.7% spreadsheet formulas, 47.7% installed software, 12.1% wrote a program; internet use 41 to 59 at 86.0% (II trimestre 2026).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: '42.9% of Peruvians 15+ accessed online information to learn in the past three months (2024).', url: 'https://api.worldbank.org/v2/country/PER/indicator/con30e?source=28&format=json' },
      { claim: 'EF EPI 2025 Peru: IT 522, Strategy and Project Management 589, ages 26 to 30 at 559 (high).', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: '193 Peru-based fintechs operating as of 2024.', url: 'https://www.trade.gov/country-commercial-guides/peru-digital-economy' },
      { claim: 'More than 87,000 teachers enrolled in MINEDU\'s AI in teaching course (2025).', url: 'https://www.gob.pe/institucion/minedu/noticias/1164507-minedu-capacita-a-mas-de-87-000-docentes-en-inteligencia-artificial-en-el-ambito-nacional' }
    ],
    rejectedClaims: [
      'A count of Peruvians working remotely for foreign employers: no primary source found; not given.',
      'Salary, job or promotion outcomes: not promised.',
      'Legal advice on data protection or Peru\'s AI regulation: not given; the page tells professionals to follow their employer\'s policy.',
      'Real company names in the lesson: replaced with invented Client 101 to 103.',
      'Spanish-language teaching or any affiliation with a Peruvian ministry, university or institute: none, and the page says so.'
    ]
  }
};
