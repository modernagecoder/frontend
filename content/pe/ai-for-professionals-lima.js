// SHIP: market (city, professionals) | AI for Lima professionals: tools, data and agents in English, and how to check AI-written code | a silent except that drops rows: count what a parse rejects, by reason, before trusting a total
'use strict';
// AI for professionals in Lima (ag- city page, Peru cluster row PE084; alloc: cities, aaa, #9B532A).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; timing flexible (2026-11-08); USD fees only
// through the template's data-price anchors. No job or salary promises; no legal advice.
// Angle: Lima office workers, analysts, managers and public servants who already use AI chat tools and want to use AI
// on real work safely. Different from ai-and-coding-for-professionals-peru (JSON output checking, time zones) and the
// Spanish agents page (agent risk): this page is about AI-drafted code that quietly loses data, taught on the
// Municipalidad Metropolitana de Lima's own open register of public-information requests.
// Sources (research folder ~/Desktop/SkyCoders/keyword-research-2026-09/pe/, quotes string-matched in raw files):
//  - EF EPI 2025 (ef_peru.raw): Lima city 555 high; "ageGroup3Score":559 (26 to 30); job functions
//    "strategy-project-management" 589, "customer-service" 585, "marketing" 565 (all "high"); Peru 519.
//  - INEI TIC II trimestre 2026 (MARKET.md 1.4): "el grupo de 25 a 40 años con un 95,2%"; Lima Metropolitana internet
//    use 92.4% (6+).
//  - INEI Censos Nacionales 2025, Cuadro 1: Lima Metropolitana 10,141,775, 43 districts.
//  - AI tool ages (content/ai-tool-age-audit.json): Claude 18+; this page is for adults only.
//  - Time (timezone.tsv): America/Lima UTC-5 all year; India 10 h 30 min ahead.
//  - Data: Municipalidad Metropolitana de Lima (MML), "Solicitudes de acceso a la información pública recibidas por la
//    Municipalidad Metropolitana de Lima, 2021–2026" (title as published), Plataforma Nacional de Datos Abiertos,
//    https://www.datosabiertos.gob.pe/dataset/solicitudes-de-acceso-la-informaci%C3%B3n-p%C3%BAblica-recibidas-por-la-municipalidad-metropolitana-de,
//    licence odc-by on the dataset page, modified 15 September 2026. File AI_0626.csv (4,454,182 bytes, sha256
//    5383f1e7196a76e1..., Latin-1, semicolon separated): 25,415 rows, NU_ANIO 2021 4,890 / 2022 5,040 / 2023 4,567 /
//    2024 5,359 / 2025 3,946 / 2026 1,613. Dictionary (diccionario-ai.xlsx): FECHA_CREACION "Fecha y hora en la el
//    sistema asigna la numeracion de registro", "Formato: yyyymmddhhmmss". Channels: Plataforma FREI 11,412, Mesa de
//    Partes ATD 8,770, MPV STD 5,179. No personal data in the file.
// Our own calculations (scratchpad pe/c2/aal/v1.py, v2.py; python3 -I, Python 3.14.8):
//  v1: Requests counted: 5135 / {2025: 3522, 2026: 1613}
//  v2: Rows by precision: {'full': 5135, 'month only': 20280} / 2021 full 0 month only 4890 / 2023 full 0 month only
//      4567 / 2025 full 3522 month only 424 / 2026 full 1613 month only 0
//  Also: month-only stamps run to 20250100000000; full stamps from 20250201081000 to 20260531201222; of the 5,135 full
//  stamps, 105 fall on a Saturday or Sunday.
// Lesson family: an AI-drafted "fix" (except ValueError: continue) silently drops 80% of the rows; classify rejects by
// reason and reconcile against a known total before trusting any count.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'import csv',
  'from collections import Counter',
  'from datetime import datetime',
  '',
  'per_year = Counter()',
  'with open("AI_0626.csv", encoding="latin-1") as raw:',
  '    for row in csv.DictReader(raw, delimiter=";"):',
  '        try:',
  '            made = datetime.strptime(row["FECHA_CREACION"], "%Y%m%d%H%M%S")',
  '        except ValueError:',
  '            continue                      # the draft\'s quiet "fix"',
  '        per_year[made.year] += 1',
  '',
  'print("Requests counted:", sum(per_year.values()))',
  'print(dict(sorted(per_year.items())))'
].join('\n');

const V2 = [
  'import csv',
  'from collections import Counter',
  'from datetime import datetime',
  '',
  'def precision(stamp):',
  '    try:',
  '        datetime.strptime(stamp, "%Y%m%d%H%M%S")',
  '        return "full"',
  '    except ValueError:',
  '        if stamp[6:] == "00000000":',
  '            return "month only"',
  '        return "unreadable"',
  '',
  'kinds = Counter()',
  'by_year = Counter()',
  'with open("AI_0626.csv", encoding="latin-1") as raw:',
  '    for row in csv.DictReader(raw, delimiter=";"):',
  '        kind = precision(row["FECHA_CREACION"])',
  '        kinds[kind] += 1',
  '        by_year[(row["FECHA_CREACION"][:4], kind)] += 1',
  '',
  'print("Rows by precision:", dict(kinds))',
  'for year in ("2021", "2023", "2025", "2026"):',
  '    print(year, "full", by_year[(year, "full")], "month only", by_year[(year, "month only")])'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'cities', label: 'Lima: AI for professionals' },
  slug: 'ai-for-professionals-lima',
  code: 'aaa',
  accent: '#9B532A',
  accentRationale: 'AI for professionals in Lima: a terracotta #9B532A allocated to this row, warm like Lima\'s adobe huacas and still above 4.5:1 on the three papers',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'AI for professionals in Lima',
  title: 'AI for Professionals in Lima: Live Online Classes in English',
  description: 'AI for Lima professionals: tools, data and agents, live online in English around your working day, and a lesson on catching AI code that silently drops data.',
  ogDescription: 'Live online AI classes in English for working professionals in Lima: using AI tools well at work, data analysis with AI help, AI agents, and an original lesson on Lima municipal open data where an AI-drafted fix loses four rows in five.',
  twitterDescription: 'AI for Lima professionals, live online in English: tools, data, agents, and how to catch AI code that silently loses data.',
  pageName: 'AI for Professionals in Lima',
  webPageDescription: 'A guide for working professionals in Lima to live online AI classes taught in English, built from EF EPI 2025, INEI figures and an original Python lesson on the Municipalidad Metropolitana de Lima register of public-information requests (ODC-By).',
  courseDescription: 'Live online AI classes in English for professionals in Lima: AI tools at work, data analysis with AI for non-programmers, Python automation, and AI agents with Copilot Studio, Gemini Enterprise, Codex and Claude Code, in a group of fifteen to twenty or one to one, at flexible hours.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'AI for professionals, Lima',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#tracks', label: 'Three tracks' },
    { href: '#check', label: 'Checking AI code' },
    { href: '#workday', label: 'Around work' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Lima &middot; Working professionals &middot; Live online, in English',
  h1: 'AI for professionals in Lima',
  lede: 'Most Lima professionals already ask a chat assistant for help with emails, spreadsheets and reports. Fewer know how to tell when its help is quietly wrong. This page sets out three practical tracks for learning AI at work, a lesson on public Lima data where an AI-style fix discards four rows in every five without a single error message, and how live classes in English fit around a Lima working day.',
  secondaryCta: { href: '#check', label: 'See the Lima data lesson' },
  wa: 'Hello Modern Age Coders, I work in Lima, Peru and would like live AI classes in English for professionals. Could I book a free first class?',
  heroNote: 'Live classes since 2020 &middot; over 10,000 learners worldwide &middot; mentors who build with AI and check it',
  spec: [
    ['For', 'Working adults in Lima, 18 and over'],
    ['Tracks', 'AI tools, data with AI, AI agents'],
    ['Coding needed', 'None to start; Python optional'],
    ['Format', 'Groups of fifteen to twenty, or one to one'],
    ['Hours', 'Before work, at lunch or evenings'],
    ['First class', 'Free, no card']
  ],
  capsuleQ: 'Short answer',
  capsule: 'Modern Age Coders teaches AI to working professionals in Lima, live online and in English. You can learn to use AI tools well at work, analyse data with AI help without being a programmer, automate tasks in Python, or build AI agents with tools such as Copilot Studio, Gemini Enterprise, Codex and Claude Code. A mentor teaches you live over video, alone or with fifteen to twenty other professionals, at hours around your job. The thread through every track is judgement: how to check what an AI produces before you rely on it.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses Lima professionals usually begin with',
    lede: 'One with no code at all, one that adds Python, and one for using AI tools well across daily work.',
    items: [
      { course: 'data-and-ai-analytics-for-non-programmers-course', code: 'LIM-AI / 01', title: 'Data and AI for Non-Programmers', note: 'Excel, Google Sheets and Power BI with AI assistance, for analysts, managers and anyone who lives in spreadsheets. No programming required.' },
      { course: 'python-ai-automation-masterclass-college', code: 'LIM-AI / 02', title: 'Python Automation and Applied AI', note: 'Scripts that read files, clean data, call AI models and produce reports. For professionals ready to write a little code to save a lot of time.' },
      { course: 'ai-tools-mastery-complete-college', code: 'LIM-AI / 03', title: 'AI Tools Mastery', note: 'ChatGPT, Claude and automation tools used properly: clear prompts, checking outputs, and knowing what not to paste into a chat window.' }
    ]
  },

  sections: [
    {
      id: 'who',
      eyebrow: 'Who it is for',
      h2: 'Who are these AI classes for in Lima?',
      lede: 'Adults in work: analysts, accountants, marketers, project managers, public servants, teachers and founders. The common thread is a job that involves documents, data or decisions, and an interest in doing it better with AI.',
      body: [
        { kind: 'two',
          leftH3: 'English at work in Lima',
          left: [
            'Our classes are taught live and in English only. EF\'s 2025 English index gives Lima city 555 points, a high result, and Peruvians aged 26 to 30 reach 559. By job function, people in strategy and project management score 589, customer service 585 and marketing 565, all in the high band.',
            'For many Lima professionals that means English is already a working language, and AI tools, their documentation and most of their communities work best in it.'
          ],
          rightH3: 'Time is the real constraint',
          right: [
            'Lima Metropolitana counted 10,141,775 people across 43 districts in the 2025 census. A course across town after work is a big ask. A live class from home or the office is not.',
            'Access is rarely the problem: INEI found that 95.2% of Peruvians aged 25 to 40 were online in INEI\'s April to June 2026 survey; in Lima Metropolitana the share for everyone from age 6 up was 92.4%.'
          ] }
      ]
    },
    {
      id: 'tracks',
      eyebrow: 'Three tracks',
      h2: 'What should a Lima professional learn about AI first?',
      lede: 'It depends on your work. We suggest one of three tracks and move people between them as they go.',
      body: [
        { kind: 'table', numCols: [], caption: 'Three ways in (our tracks)', head: ['Track', 'For', 'You learn to', 'First course'], rows: [
          ['AI tools at work', 'Anyone who writes, plans or reports', 'Prompt clearly, check outputs, protect confidential data', 'AI Tools Mastery'],
          ['Data with AI', 'Analysts, finance, operations, marketing', 'Clean and analyse data in spreadsheets and BI with AI help, and verify totals', 'Data and AI for Non-Programmers'],
          ['Automation and agents', 'Professionals ready for some code, or teams building assistants', 'Automate tasks in Python, then build and govern AI agents', 'Python Automation and Applied AI']
        ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Name one task.</strong> Pick a weekly task that costs you an hour: a report, a reconciliation, a set of replies.',
          '<strong>Do it once with AI, by hand.</strong> In class you use an assistant on that task and note every place it is wrong or vague.',
          '<strong>Write the checks.</strong> Before automating anything, decide how you will know the output is right: a total that must match, a field that must be present.',
          '<strong>Automate the safe part.</strong> Only then turn it into a script, a spreadsheet flow or an agent, with the checks built in.',
          '<strong>Keep a person in the loop.</strong> Decide which outputs a human approves before they leave the building.'
        ] },
        { kind: 'p', mt: true, html: 'Professionals who want the national picture, including time zones and checking AI output in structured formats, can read <a class="ag-inline-link" href="/ai-and-coding-for-professionals-peru">AI and coding for professionals in Peru</a>. Teams should see the Spanish <a class="ag-inline-link" href="/curso-de-ia-para-empresas-peru">curso de IA para empresas</a>, and those focused on agents the <a class="ag-inline-link" href="/curso-de-agentes-de-ia-para-profesionales">curso de agentes de IA para profesionales</a>.' }
      ]
    },
    {
      id: 'tasks',
      eyebrow: 'Good and bad fits',
      h2: 'Which office tasks should a Lima professional hand to AI, and which not?',
      lede: 'A useful rule: let AI draft, sort and suggest; keep people responsible for facts, numbers that matter and decisions about people. The table is our guidance, not a legal opinion.',
      body: [
        { kind: 'table', numCols: [], caption: 'Common office tasks and how we teach professionals to use AI on them (our guidance)', head: ['Task', 'Fit for AI', 'The check you keep'], rows: [
          ['First draft of an email or report', 'Good', 'Read every sentence; delete anything you cannot stand behind'],
          ['Summary of a long document', 'Good with care', 'Spot-check three claims against the source page'],
          ['Spreadsheet formula or pivot table', 'Good', 'Test on a few rows whose answer you already know'],
          ['Cleaning or merging data files', 'Risky', 'Count rows in and rows out, and label every row dropped'],
          ['Figures for a client or regulator', 'Draft only', 'Reconcile with the system of record before sending'],
          ['Decisions about hiring, credit or discipline', 'Not without a person', 'A named person decides and can explain why']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Briefing an AI tool well',
          left: [
            'Most weak answers come from weak briefs. In class you learn to give the tool a role, the material, the format you want and the checks it must pass, in that order, and to ask it to list its own assumptions.',
            'You also learn the opposite habit: asking the tool what would make its answer wrong. It is often better at finding problems than at avoiding them.'
          ],
          rightH3: 'What never goes into a chat window',
          right: [
            'Client names, identity numbers, salaries, passwords and anything your company classifies as confidential stay out. Where a task needs real data, you work on an anonymised extract or an invented one with the same shape.',
            'Mentors model this in every class. The Lima data lesson below uses a public file for exactly that reason.'
          ] }
      ]
    },
    {
      id: 'check',
      eyebrow: 'A Lima data lesson',
      h2: 'How do you catch AI-written code that quietly loses data?',
      lede: 'By counting what it throws away. This lesson, ours, uses a real Lima municipal file and the kind of fix an AI assistant often proposes when a script crashes.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The Municipalidad Metropolitana de Lima publishes its register of requests for public information, 2021 to 2026, as open data under an ODC-By licence, through Peru\'s national data portal. The file AI_0626.csv has 25,415 rows, one per request, with a registration timestamp, the channel used and a few other fields. It holds no personal data.',
            'The data dictionary says the timestamp column FECHA_CREACION uses "Formato: yyyymmddhhmmss". A professional asks a simple question: how many requests arrived each year?'
          ],
          rightH3: 'The AI-style fix',
          right: [
            'The first script crashes on a value that strptime cannot read. Asked to fix it, an AI assistant will often wrap the line in try and except ValueError: continue. The crash disappears, a tidy table appears, and nobody looks further.',
            'Version 1 is that script. Read its output carefully before reading on.'
          ] },
        { kind: 'code', label: 'Version 1: the draft that skips whatever it cannot parse', lang: 'Python', code: V1, note: 'It prints: <code>Requests counted: 5135</code> and <code>{2025: 3522, 2026: 1613}</code>.' },
        { kind: 'p', mt: true, html: 'The result says the municipality received its first requests in 2025. But the file has 25,415 rows and its own year column runs from 2021. Four rows in five vanished without a message, because the except clause swallowed every error. Version 2 refuses to skip anything: it labels each timestamp by how precise it is and counts the labels.' },
        { kind: 'code', label: 'Version 2: classify every row, then reconcile', lang: 'Python', code: V2, note: 'It prints: <code>Rows by precision: {\'full\': 5135, \'month only\': 20280}</code>, then <code>2021 full 0 month only 4890</code>, <code>2023 full 0 month only 4567</code>, <code>2025 full 3522 month only 424</code> and <code>2026 full 1613 month only 0</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3], caption: 'Requests per year: the draft against the file (our counts)', head: ['Year', 'Rows in the file', 'Counted by the draft', 'Lost'], rows: [
          ['2021', '4,890', '0', '4,890'],
          ['2022', '5,040', '0', '5,040'],
          ['2023', '4,567', '0', '4,567'],
          ['2024', '5,359', '0', '5,359'],
          ['2025', '3,946', '3,522', '424'],
          ['2026 (to 31 May)', '1,613', '1,613', '0']
        ] },
        { kind: 'source', html: 'Data: Municipalidad Metropolitana de Lima, Solicitudes de acceso a la información pública, 2021 to 2026, national open-data portal, ODC-By licence; the counts are ours. Until January 2025 the file records only the year and month, written like 20210700000000 with day and time set to zero; full timestamps start on 1 February 2025.' },
        { kind: 'p', mt: true, html: 'Nothing in the data is wrong as such. The register simply recorded only the month for its older entries, and the "00" day is how it says so. The mistake was the fix. A professional\'s habit, which we drill in class, is to reconcile: before trusting a count, compare it with a total you already know, here 25,415 rows, and make every rejected row show up in a labelled bucket. With the full stamps you can then answer finer questions honestly, such as how many requests arrived at weekends since February 2025: 105 of 5,135.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Prompt better.</strong> Ask an AI assistant to fix Version 1 without discarding rows, and to report how many rows each branch handles. Compare its answer with Version 2.',
          '<strong>Reconcile.</strong> Add a final check that the precision counts add up to the number of rows read, and stop the script if they do not.',
          '<strong>Spreadsheet version.</strong> Import the file into Excel or Sheets and find the same problem with a filter on the day digits.',
          '<strong>Choose the right grain.</strong> Count requests per month for all six years, which every row supports, instead of per day.',
          '<strong>Explain it.</strong> Write three sentences, in English, for a manager who saw the draft\'s table and wants to know what changed.'
        ] }
      ]
    },
    {
      id: 'workday',
      eyebrow: 'Around a Lima working day',
      h2: 'How do live AI classes fit around a full-time job in Lima?',
      lede: 'Mostly at the edges of the day. Many Lima professionals take a class before work, at lunch, or after they are home; one-to-one learners move their slot when work demands it.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Before work', p: 'A 7:00 class in Lima is early evening for the mentor in India, so both are fresh. It also means you start the day having built something.' },
          { h3: 'Your own work as material', p: 'Bring an anonymised version of a real task. Mentors help you apply what you learn to it, and never ask for confidential data.' },
          { h3: 'Company teams', p: 'Colleagues can learn together in a private group, at a time agreed with the team, on the tools your company already uses.' }
        ] },
        { kind: 'p', mt: true, html: 'Adults who started later in their careers often prefer a slower pace; <a class="ag-inline-link" href="/coding-for-adults-over-50-peru">coding for adults over 50 in Peru</a> describes how we adapt. Analysts who want to go deeper into queries can follow the <a class="ag-inline-link" href="/sql-and-data-analysis-course-peru">SQL and data analysis course for Peru</a>.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'What time are AI classes for Lima professionals?',
      lede: 'Whatever time you set. Lima keeps one clock all year and so does India.',
      body: [
        { kind: 'table', numCols: [], caption: 'Lima working-day hours with the mentor\'s India time (illustrations, not a timetable)', head: ['Lima', 'India', 'India date'], rows: [
          ['06:30', '17:00', 'Same'],
          ['07:00', '17:30', 'Same'],
          ['13:00', '23:30', 'Same'],
          ['19:00', '05:30', 'Next'],
          ['20:30', '07:00', 'Next']
        ] },
        { kind: 'source', html: 'Lima stays on UTC minus 5 hours without summer time (tz database, America/Lima), India on UTC plus 5 hours 30 minutes, a constant gap of 10 hours 30 minutes.' },
        { kind: 'p', mt: true, html: 'You book in Lima time and the mentor sees India time. Because neither clock changes, the hour you choose in January is still the hour in July, which makes it easy to block in a work calendar.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'What a Lima professional can do after three, six and twelve months',
    lede: 'Our milestones for working adults. Each is something you can demonstrate at work.',
    table: { caption: 'AI at work, step by step (ours)', head: ['When', 'Milestone', 'You can'], rows: [
      ['Month 1', 'Clear prompts', 'Get useful drafts and spot vague or invented content'],
      ['Month 3', 'Checked outputs', 'Verify an AI-assisted analysis against a known total'],
      ['Month 6', 'Small automations', 'Run a script or flow that saves an hour a week'],
      ['Month 9', 'Data you trust', 'Explain every row your process drops, and why'],
      ['Month 12', 'Governed agents', 'Build an assistant with human approval for risky steps']
    ] },
    left: { h3: 'For you', ps: [
      'Month 9 is the Lima data lesson: never accept a tidy table until the rejected rows are counted.',
      'You get a short written review after each block of classes.'
    ] },
    right: { h3: 'A rule to keep', ps: [
      'An error you silence is still an error.',
      'Reconcile before you report.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for Lima professionals',
    lede: 'Grouped by direction. All are live, in English, with a regular mentor; three agent courses are one to one only.',
    bands: [
      { num: 'I', h3: 'AI agents', sub: 'Build assistants', courses: [
        { code: 'LIM-AI / A / 01', slug: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', title: 'Codex and Claude Code', blurb: 'AI coding agents for professionals, with human review.' },
        { code: 'LIM-AI / A / 02', slug: 'ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals', title: 'Copilot Studio agents', blurb: 'One to one: Microsoft agents for real business processes.' },
        { code: 'LIM-AI / A / 03', slug: 'build-ai-agents-with-google-gemini-enterprise-course', title: 'Gemini Enterprise agents', blurb: 'One to one: agents on Google\'s enterprise platform.' }
      ] },
      { num: 'II', h3: 'Data', sub: 'Analyse with confidence', courses: [
        { code: 'LIM-AI / D / 01', slug: 'data-analysis-mastery-course-college', title: 'Data analysis', blurb: 'Excel, SQL, Python and BI from the beginning.' },
        { code: 'LIM-AI / D / 02', slug: 'mysql-database-complete-masterclass-college', title: 'MySQL', blurb: 'Queries and database design for analysts.' },
        { code: 'LIM-AI / D / 03', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI', blurb: 'LLMs, retrieval and agents, in depth.' }
      ] },
      { num: 'III', h3: 'Foundations', sub: 'Skills underneath', courses: [
        { code: 'LIM-AI / F / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python masterclass', blurb: 'Python from zero for working adults.' },
        { code: 'LIM-AI / F / 02', slug: 'git-github-advanced-version-control-masterclass-for-professionals', title: 'Git for professionals', blurb: 'Version control for people who automate.' },
        { code: 'LIM-AI / F / 03', slug: 'statistics-probability-maths-course', title: 'Statistics', blurb: 'The numbers behind every dashboard.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'How live AI classes run for Lima professionals',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Early', l: 'Before the office: Lima dawn is Indian early evening.' },
      { time: 'Midday or night', l: 'Lunch hours and late evenings are open too.' },
      { time: '1-on-1', l: 'Your own hour, moved when work gets busy.' }
    ],
    cells: [
      { h3: 'One mentor', p: 'A practitioner who follows your progress.' },
      { h3: 'Work-ready English', p: 'Clear, professional, and patient with questions.' },
      { h3: 'Hands on', p: 'You run every tool and script yourself.' },
      { h3: 'Adults only', p: 'Professional groups, never mixed with students.' },
      { h3: 'Confidentiality', p: 'Anonymised examples only; no company data needed.' },
      { h3: 'Group or private', p: 'Fifteen to twenty people, or just you.' }
    ]
  },

  projectsH2: 'Projects built by our learners',
  projectsLede: 'Learners who keep going build working tools. Some appear below; the <a class="ag-inline-link" href="/student-labs">student labs</a> show more.',
  reviewsLede: 'Learners and parents, in their own words on Google.',

  fees: {
    h2: 'Fees for professionals in Lima',
    lede: 'Monthly plans in US dollars, billed to your card in dollars. Your bank decides the soles amount on your statement using its own exchange rate, so it can vary slightly.',
    free: ['A free first class', 'A look at one task from your work', 'No card required'],
    group: ['Fifteen to twenty professionals', 'One mentor for the course', 'Two live classes a week', 'Monthly, stop whenever you like'],
    one: ['One professional, one mentor', 'A plan built around your job', 'Hours you choose']
  },

  faq: {
    eyebrow: 'Lima professionals ask',
    h2: 'AI for professionals in Lima: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Every class is live, online and taught only in English. Mentors speak clearly, adapt to your accent and pace, and help you find the English for ideas you already know in Spanish.' },
      { q: 'Do I need to know how to code?', a: 'No. The AI tools and the data-with-AI tracks need no programming. Python is optional and comes later if you want to automate.' },
      { q: 'Which AI tools do you teach?', a: 'Chat assistants such as ChatGPT and Claude, spreadsheet and BI tools with AI features, and for agents Copilot Studio, Gemini Enterprise, Codex and Claude Code. All of these classes are for adults.' },
      { q: 'Can I bring my company\'s data?', a: 'Please do not. Bring an anonymised or invented version of the task. Part of what we teach is what never to paste into an AI tool.' },
      { q: 'Will this help my career?', a: 'We make no job or salary promises. We teach skills you can apply at work and demonstrate; what you do with them is your decision.' },
      { q: 'What time are classes?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India runs ten and a half hours later than Lima, so a 07:00 class here is 17:30 there.' },
      { q: 'Can my team learn together?', a: 'Yes, in a private group at a time agreed with the team, focused on the tools you already use.' },
      { q: 'How much does it cost?', a: 'You pay by card each month in the dollar amount shown here, and the bank converts it into soles. Browsing from India shows rupees. There is no charge for the first class.' },
      { q: 'Is there a certificate?', a: 'Some courses finish with a completion certificate from us, recording the work you did. It is not an official Peruvian qualification.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for working adults in Peru.',
    items: [
      { href: '/ai-and-coding-for-professionals-peru', label: 'AI and coding for professionals in Peru', p: 'The national page for working adults.' },
      { href: '/curso-de-agentes-de-ia-para-profesionales', label: 'Curso de agentes de IA para profesionales', p: 'Agents, risk and approval, in Spanish.' },
      { href: '/curso-de-ia-para-empresas-peru', label: 'Curso de IA para empresas', p: 'AI for teams and companies, in Spanish.' },
      { href: '/coding-for-adults-over-50-peru', label: 'Coding for adults over 50', p: 'A gentler start for later careers.' },
      { href: '/sql-and-data-analysis-course-peru', label: 'SQL and data analysis', p: 'For analysts who want queries.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'All Peru pages', p: 'Courses and cities across Peru.' }
    ]
  },

  start: {
    h2: 'Book a free first class from Lima',
    lede: 'The first class looks at one real task from your work, in anonymised form, and tries an AI approach to it together. The mentor then suggests a track.',
    readFirst: 'To read more first, see <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or browse the <a class="ag-inline-link" href="/courses">course list</a>.',
    note: 'Every lesson is live and online, in English only, with a mentor based in India. Write to us on WhatsApp, in English, for the quickest answer.',
    formNote: 'Free, no card, no commitment.'
  },

  footer: {
    cols: [
      { h4: 'For professionals', links: [
        { href: '/ai-and-coding-for-professionals-peru', label: 'Professionals in Peru' },
        { href: '/curso-de-agentes-de-ia-para-profesionales', label: 'Agentes de IA' },
        { href: '/curso-de-ia-para-empresas-peru', label: 'IA para empresas' },
        { href: '/sql-and-data-analysis-course-peru', label: 'SQL and data' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Peru hub' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Reconcile before you report'
  },

  personalityCss: `
.ag-root.ag-aaa .ag-hero h1 { letter-spacing: -0.011em; }
.ag-root.ag-aaa .ag-capsule { border-left-width: 4px; border-radius: 1px; }
.ag-root.ag-aaa .ag-section-head h2 { max-width: 35ch; }
.ag-root.ag-aaa .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-aaa .ag-code-head b { letter-spacing: 0.02em; }
`,

  dossier: {
    curriculumAuthority: 'EF EPI 2025 (Lima, age and job-function scores); INEI Censos Nacionales 2025 and ICT bulletin II trimestre 2026; content/ai-tool-age-audit.json; tz database America/Lima. Data: Municipalidad Metropolitana de Lima, Solicitudes de acceso a la información pública 2021 to 2026, ODC-By.',
    localProject: 'How do you catch AI-written code that quietly loses data? An original Python lesson on the MML register of public-information requests (ODC-By, 25,415 rows): Version 1, with an AI-style except ValueError: continue, counts 5,135 requests, all in 2025 and 2026; Version 2 classifies every timestamp (5,135 full, 20,280 month only, every row from 2021 to 2024 month only) and reconciles with the file total. Lesson family: a silent except that drops rows.',
    requiredMentions: ['AI_0626.csv', 'Requests counted: 5135', "{2025: 3522, 2026: 1613}", '2021 full 0 month only 4890', '10,141,775', 'marketing 565', 'Lima city 555', 'Reconcile before you report', 'Formato: yyyymmddhhmmss'],
    sources: [
      { claim: 'MML register of public-information requests 2021 to 2026, ODC-By.', url: 'https://www.datosabiertos.gob.pe/dataset/solicitudes-de-acceso-la-informaci%C3%B3n-p%C3%BAblica-recibidas-por-la-municipalidad-metropolitana-de' },
      { claim: 'EF EPI 2025 Lima, age-group and job-function scores.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Internet use by age and in Lima Metropolitana, II trimestre 2026.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'Lima Metropolitana population 2025.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Peru time UTC-5 without summer time.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Any statement about the legal deadline for answering information requests: the law text was not verified in a readable copy, and the page gives no legal advice.',
      'That the month-only timestamps are an error by the municipality: the page says the register recorded only the month.',
      'Job, salary or promotion outcomes: no promises.',
      'Using company or personal data in class: refused; anonymised examples only.',
      'Any connection with the Municipalidad Metropolitana de Lima: none.',
      'Spanish-language teaching: every class is in English.'
    ]
  }
};
