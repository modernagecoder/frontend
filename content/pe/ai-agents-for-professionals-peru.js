'use strict';
// SHIP: market | AI agents for professionals in Peru: reliable agents at work, what 2025 rules mean, in English | retries, timeouts and idempotency: an agent that bills a client twice, and the fix
// AI agents for professionals, Peru (ag- English subject door, Peru cluster row PE023, hubGroup subjects).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08: timing flexible at any hour.
// Audience: working adults in Peru (analysts, operations, finance, sales, IT, managers) searching "ai agents for professionals",
// "ai agents course for business users", "copilot studio course". Spanish twin (live): curso-de-agentes-de-ia-para-profesionales
// (human approval gate, failure threshold, audit log; DS 115 high-risk list). This page has its own spine and lesson.
// Spine: what an agent does at work (Copilot Studio, OpenAI); what goes wrong when the tools it calls are slow or fail
// (AWS Builders' Library on timeouts, retries, backoff, jitter, idempotency); the lesson (a duplicate invoice and its fix);
// what developers who use agents report (Stack Overflow 2025); the private-sector timetable in DS 115-2025-PCM's first final
// provision, with our own date arithmetic, as context; English and internet use for working-age adults (EF EPI 2025, INEI 2026).
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/ai-agents-for-professionals-peru/, read 9 Nov 2026):
//  - AWS Builders' Library, "Timeouts, retries, and backoff with jitter", published Dec 5, 2019 (aws-retries.raw/.txt): "A
//    timeout or failure doesn't necessarily mean that side effects haven't happened."; "a best practice is designing APIs to be
//    idempotent, meaning they can be safely retried"; "This is called, predictably, capped exponential backoff"; "our solution
//    is to limit the number of times that the client retries"; "remember that retries are selfish"; "Jitter adds some amount of
//    randomness to the backoff to spread the retries around in time."; "APIs with side effects aren't safe to retry unless they
//    provide idempotency"; "Timeouts keep systems from hanging unreasonably long".
//  - OpenAI, "A practical guide to building agents" (openai-guide.txt): "Exceeding failure thresholds: Set limits on agent
//    retries or actions."; "Agents are systems that independently accomplish tasks on your behalf."
//  - Microsoft Learn, Copilot Studio overview (copilotstudio.txt): "graphical, low-code studio for building and managing
//    AI-powered agents and workflows."
//  - Stack Overflow Developer Survey 2025, AI (so-ai-2025.txt): "Approximately 70% of agent users agree that agents have
//    reduced the time spent on specific development tasks, and 69% agree they have increased productivity. Only 17% of users
//    agree that agents have improved collaboration within their team"; "51% of professional developers use AI tools daily".
//  - DS 115-2025-PCM (El Peruano, martes 9 de setiembre de 2025; ds115.txt), first final provision, private sector, art. 25 and
//    Title VI chapter II: "a) Para usos de IA en los sectores de salud, educación, justicia, seguridad, economía y finanzas: Un
//    (1) año"; "b) ... transporte, comercio y trabajo: Dos (2) años"; "c) ... producción, agricultura, energía y minería: Tres
//    (3) años"; "d) Para todos los usos no incluidos en los sectores anteriores ... Cuatro (4) años"; each "contado a partir del
//    día siguiente de la publicación"; MYPE: "a) Para pequeñas empresas con ventas anuales superiores a 150 UIT y hasta el monto
//    máximo de 1700 UIT: Dos (2) años"; "b) Para microempresas con ventas anuales hasta el monto máximo de 150 UIT ...: Tres (3)
//    años". Art. 7 h "Supervisión Humana".
//  - EF EPI 2025 Peru (ef_peru.raw): "ageGroup3Score":559 high (26-30), "ageGroup4Score":537 moderate (31-40),
//    "ageGroup5Score":509 moderate (41+).
//  - INEI TIC II Trimestre 2026 (inei_tic_iit2026.txt): "el grupo de 25 a 40 años con un 95,2%"; table row "41 a 59 años 76,5
//    79,9 81,9 86,0 4,1".
//  - Vendor terms: Claude 18+ (ai-tool-age-audit.json).
//  - Time (timezone.tsv): America/Lima UTC-5; Asia/Kolkata UTC+5:30.
// Our own date arithmetic (labelled ours on the page, not legal advice): counting from 10 September 2025, one year falls in
// September 2026, two in September 2027, three in September 2028, four in September 2029.
// Code (reintentos.py, python3 -I; the billing service, client and order are invented; waits are printed, not slept):
//    naive  -> F-002 | invoices: ['F-001', 'F-002']
//      attempt 1 timed out; would wait 0.65 s
//    careful-> F-001 | invoices: ['F-001']
//      attempt 1 timed out; would wait 0.3 s / attempt 2 ... 2.6 s / attempt 3 ... 0.58 s
//    down   -> HANDED TO A PERSON
// Lesson family: retries and timeouts for an agent's tool calls: idempotency keys, capped exponential backoff with jitter, an
// attempt limit and a hand-off.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const CODE = [
  'import random',
  '',
  'class InvoiceServer:',
  '    """Invented billing service: the first call is processed but its reply is lost."""',
  '    def __init__(self):',
  '        self.invoices, self.seen_keys, self.calls = [], {}, 0',
  '    def create_invoice(self, client, amount, key=None):',
  '        self.calls += 1',
  '        if key in self.seen_keys:',
  '            return self.seen_keys[key]            # same key: same invoice, no new one',
  '        number = "F-%03d" % (len(self.invoices) + 1)',
  '        self.invoices.append((number, client, amount))',
  '        if key:',
  '            self.seen_keys[key] = number',
  '        if self.calls == 1:',
  '            raise TimeoutError("no reply within 2 s")   # done, but the agent never hears',
  '        return number',
  '',
  'def naive(server):',
  '    for attempt in range(1, 4):',
  '        try:',
  '            return server.create_invoice("Panaderia Sol", 120)',
  '        except TimeoutError:',
  '            pass                                   # retry at once, no key',
  '',
  'def careful(server, max_attempts=4, base=1.0, cap=8.0, rng=random.Random(7)):',
  '    key = "order-2026-118"                         # one key per real-world order',
  '    for attempt in range(1, max_attempts + 1):',
  '        try:',
  '            return server.create_invoice("Panaderia Sol", 120, key=key)',
  '        except TimeoutError:',
  '            if attempt == max_attempts:',
  '                break',
  '            wait = rng.uniform(0, min(cap, base * 2 ** attempt))   # capped backoff, full jitter',
  '            print("  attempt", attempt, "timed out; would wait", round(wait, 2), "s")  # printed, not slept',
  '    return "HANDED TO A PERSON"',
  '',
  'a = InvoiceServer(); print("naive  ->", naive(a), "| invoices:", [i[0] for i in a.invoices])',
  'b = InvoiceServer(); print("careful->", careful(b), "| invoices:", [i[0] for i in b.invoices])',
  '',
  'class DownServer(InvoiceServer):',
  '    def create_invoice(self, client, amount, key=None):',
  '        raise TimeoutError("service down")',
  '',
  'print("down   ->", careful(DownServer()))'
].join('\n');

const OUT = [
  "naive  -> F-002 | invoices: ['F-001', 'F-002']",
  '  attempt 1 timed out; would wait 0.65 s',
  "careful-> F-001 | invoices: ['F-001']",
  '  attempt 1 timed out; would wait 0.3 s',
  '  attempt 2 timed out; would wait 2.6 s',
  '  attempt 3 timed out; would wait 0.58 s',
  'down   -> HANDED TO A PERSON'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'subjects', label: 'AI agents for professionals' },
  slug: 'ai-agents-for-professionals-peru',
  code: 'aap',
  accent: '#105E62',
  accentRationale: 'AI agents for professionals, Peru: a steady petrol teal #105E62, close to the agents course but greyer and more formal, the colour of a well-run office rather than a lab; above 4.5:1 on all three papers, as the build checks.',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'AI agents for professionals in Peru',
  title: 'AI Agents for Professionals in Peru: Live Course in English',
  description: 'An AI agents course for working professionals in Peru: live online classes in English on building agents that call real business tools without double-billing anyone.',
  ogDescription: 'What AI agents do inside a company, why the boring parts (timeouts, retries, duplicate actions) decide whether one can be trusted, what Peru\'s 2025 AI regulation sets for the private sector, and a lesson on an agent that bills a client twice.',
  twitterDescription: 'Live AI agents classes in English for professionals in Peru: reliable tools, safe retries, human hand-offs.',
  pageName: 'AI Agents for Professionals in Peru',
  webPageDescription: 'A guide for working professionals in Peru learning to build AI agents, drawn from the AWS Builders\' Library on timeouts and retries, OpenAI and Microsoft agent guidance, the Stack Overflow Developer Survey 2025, DS 115-2025-PCM, EF EPI 2025 and INEI 2026, with an original lesson on retries and idempotency.',
  courseDescription: 'Live online AI agents courses for working professionals in Peru, taught in English: low-code agents in Copilot Studio and Gemini Enterprise, coded agents in Python, and the reliability practices (timeouts, safe retries, idempotency, hand-offs to people) that make an agent fit for real business processes, one to one or in a group of fifteen to twenty, at hours that fit a working week.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'AI agents for professionals',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#work', label: 'Agents at work' },
    { href: '#fail', label: 'When tools fail' },
    { href: '#project', label: 'Retry lesson' },
    { href: '#rules', label: 'Peru timetable' },
    { href: '#english', label: 'English at work' }
  ],
  eyebrow: 'Peru &middot; AI agents at work &middot; Adults 18 and over',
  h1: 'AI agents for professionals in Peru',
  lede: 'A demonstration agent works on the first try. A working agent has to survive Monday morning: a supplier\'s system that answers slowly, a payment service that times out, a request that may or may not have gone through. This page is for professionals in Peru who want to build or manage AI agents that hold up in real business processes. It covers what agents actually do in companies, the reliability habits engineers have learned the hard way, what Peru\'s 2025 AI regulation sets out for private companies, and one lesson in which an agent bills a client twice.',
  secondaryCta: { href: '#project', label: 'See the retry lesson' },
  wa: 'Hello Modern Age Coders, I work in Peru and would like to learn to build AI agents for my job. Could I book a free first class?',
  heroNote: 'Live classes since 2020 &middot; 10,000+ students worldwide &middot; live, online and taught in English',
  spec: [
    ['For', 'Working adults, 18 and over'],
    ['Platforms', 'Copilot Studio, Gemini, Python'],
    ['Focus', 'Reliable, supervised agents'],
    ['Coding needed', 'None for low-code; Python helps'],
    ['Format', 'One to one, or a group of fifteen to twenty'],
    ['Begin with', 'A free class']
  ],
  capsuleQ: 'In brief',
  capsule: 'Modern Age Coders teaches AI agents to working professionals in Peru: live online classes, taught in English, for adults who want to build agents that handle real business tasks. You learn low-code agents in Microsoft Copilot Studio or Google Gemini Enterprise, or coded agents in Python, and the practices that make them trustworthy: timeouts, safe retries, protection against duplicate actions, and handing a case to a person when the agent should stop. Mentors in India teach one to one or in a group of fifteen to twenty, at hours that fit your working week in Peru.',

  picks: {
    eyebrow: 'Pick your platform',
    h2: 'Three agents courses for professionals',
    lede: 'Choose by the tools your company already uses. All three are for adults, and the first two are taught one to one.',
    items: [
      { course: 'ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals', code: 'AAP / 01', title: 'Copilot Studio Agent Masterclass', note: 'For teams on Microsoft 365. Microsoft describes Copilot Studio as a "graphical, low-code studio for building and managing AI-powered agents and workflows". One to one, built around your own processes.' },
      { course: 'build-ai-agents-with-google-gemini-enterprise-course', code: 'AAP / 02', title: 'Build AI Agents with Gemini Enterprise', note: 'For companies on Google Workspace and Google Cloud. A one-to-one course on designing, connecting and supervising agents on Google\'s enterprise platform.' },
      { course: 'python-ai-automation-masterclass-college', code: 'AAP / 03', title: 'Python Automation and Applied AI', note: 'For professionals who want to code their own agents and automations: Python scripts, APIs and AI tools, with the retry and timeout patterns from the lesson below built in.' }
    ]
  },

  sections: [
    {
      id: 'work',
      eyebrow: 'Agents at work',
      h2: 'What can an AI agent do in a company?',
      lede: 'Take a defined task from start to finish: read a request, look things up, act in another system and report back. OpenAI\'s guide puts it in one line: "Agents are systems that independently accomplish tasks on your behalf."',
      body: [
        { kind: 'three', cells: [
          { h3: 'Answer and act', p: 'A customer asks about an order; the agent checks the order system, sees the delay, and drafts an update with the new date. A person approves anything that commits the company.' },
          { h3: 'Prepare and file', p: 'An agent gathers a supplier\'s invoice, matches it with the purchase order and the delivery note, and files it, or flags the mismatch for someone in finance.' },
          { h3: 'Monitor and alert', p: 'An agent watches a shared mailbox or a dashboard, sorts what arrives, and alerts the right team, leaving a clear record of what it saw and why it acted.' }
        ] },
        { kind: 'p', mt: true, html: 'In each case the agent calls other systems: an order database, an accounting platform, an email server. Every one of those calls can be slow or fail, and some of them change things in the world. The quality of an agent at work depends less on how clever its language model is than on how it behaves when a call goes wrong. That is the part most short courses skip, and the part our course teaches first.' },
        { kind: 'p', html: 'Developers who already use agents report real but uneven benefits. In the Stack Overflow Developer Survey 2025, about 70% of agent users agreed agents had reduced the time spent on specific development tasks and 69% that they had increased productivity, but only 17% agreed agents had improved collaboration within their team. Individual speed is the easy win; fitting an agent into a team\'s processes is the harder work.' }
      ]
    },
    {
      id: 'fail',
      tint: 'tint',
      eyebrow: 'When tools fail',
      h2: 'What happens when an agent\'s tool times out?',
      lede: 'The agent does not know whether the action happened. A timeout means no answer arrived, not that nothing was done. Engineers at Amazon have written about exactly this problem for years.',
      body: [
        { kind: 'table', numCols: [], caption: 'Four ideas from the AWS Builders\' Library, and what they mean for an agent', head: ['Idea', 'In AWS\'s words', 'For an agent at work'], rows: [
          ['Timeouts', '"Timeouts keep systems from hanging unreasonably long"', 'Every tool call needs a limit, or the agent waits forever'],
          ['Unknown outcome', '"A timeout or failure doesn\'t necessarily mean that side effects haven\'t happened."', 'An invoice may exist even though the call "failed"'],
          ['Idempotency', 'Designing APIs "to be idempotent, meaning they can be safely retried"', 'Send the same request key so a repeat does not repeat the action'],
          ['Backoff and jitter', '"Jitter adds some amount of randomness to the backoff to spread the retries around in time."', 'Wait longer each time, by a random amount, and stop after a few tries']
        ] },
        { kind: 'source', html: 'Source: Amazon Web Services, Builders\' Library, "Timeouts, retries, and backoff with jitter", published 5 December 2019, read on 9 November 2026. The right-hand column is our own reading for agents.' },
        { kind: 'two', mt: true,
          leftH3: 'Why retries need limits',
          left: [
            'AWS describes the most common pattern as exponential backoff, where the wait grows after every attempt, usually with a ceiling: "This is called, predictably, capped exponential backoff." Its next step is to limit how many times a client retries at all.',
            'The article adds a line worth remembering: "retries are selfish". Each retry demands more work from a system that may already be struggling. An agent that retries instantly and endlessly can turn a small outage into a large one.'
          ],
          rightH3: 'Why the limit should end with a person',
          right: [
            'OpenAI\'s agent guide lists "Exceeding failure thresholds: Set limits on agent retries or actions" among the moments when control should pass to a human. A well-designed agent stops, says clearly what it tried and what it does not know, and hands the case over.',
            'Peru\'s 2025 AI regulation also names human supervision as a principle (article 7 h of DS 115-2025-PCM). We mention it as context; the engineering reason alone is enough to build the hand-off.'
          ] }
      ]
    },
    {
      id: 'project',
      eyebrow: 'A real lesson',
      h2: 'How can an agent bill a client twice? A lesson on retries',
      lede: 'This lesson comes from our professionals\' course. An agent creates an invoice for a small bakery. The billing service does the work, but its reply is lost. What the agent does next decides whether the client gets one invoice or two.',
      body: [
        { kind: 'ol', items: [
          '<strong>The trap.</strong> An invented billing service processes the first request, creates invoice F-001, then fails to answer in time. To the agent, it looks exactly like a failure.',
          '<strong>The naive agent</strong> retries at once, with nothing to say "this is the same order". The service, seeing what looks like a new request, creates F-002. The bakery now has two invoices for one order.',
          '<strong>The careful agent</strong> sends an idempotency key, one fixed label per real-world order, with every attempt. The service recognises the key and returns F-001 instead of creating a second invoice. Between attempts the agent waits with capped exponential backoff and random jitter, and after four attempts it stops and hands the case to a person.'
        ] },
        { kind: 'code', label: 'An invoice, a lost reply, two agents', lang: 'Python', code: CODE, note: 'The service, client name, order and amount are invented by us. Waits are printed rather than slept so the lesson runs instantly; the random generator is seeded so the output is the same every time.' },
        { kind: 'code', label: 'Output', lang: 'Output', code: OUT, note: 'Naive agent: two invoices. Careful agent: one invoice, after one wait. Against a service that is down, the careful agent tries four times, waits three times, and hands over.' },
        { kind: 'two', mt: true,
          leftH3: 'What learners take from it',
          left: [
            'The naive agent did not malfunction. It retried, which is usually sensible. The damage came from retrying an action with a side effect without any way for the other system to recognise a repeat. AWS states the rule plainly: APIs with side effects "aren\'t safe to retry unless they provide idempotency".',
            'In a real company the "invoice" might be a payment, a purchase order, a message to a customer or a change to stock levels. The pattern is the same, and so is the cost of getting it wrong.'
          ],
          rightH3: 'What changes on real platforms',
          right: [
            'Many business APIs accept an idempotency key or a client reference for this reason; some do not, and then the agent must check whether the action happened before trying again. Low-code platforms such as Copilot Studio hide some of this, which makes it more important that the person designing the agent knows what to ask.',
            'The waits in the output (0.3, 2.6 and 0.58 seconds) look irregular on purpose. That is the jitter: if a hundred agents retry against the same struggling service, random waits stop them all arriving at the same instant.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Find the side effects.</strong> List every tool an agent at your workplace would call. Mark which ones change something (create, send, pay, delete) and which only read.',
          '<strong>Remove the key.</strong> Run the careful agent without its idempotency key. How many invoices appear, and why does backoff alone not help?',
          '<strong>Tune the limit.</strong> Change <code>max_attempts</code> and <code>cap</code>. What is the longest the agent could wait before handing over, and is that acceptable for this task?',
          '<strong>Write the hand-off.</strong> Draft, in English, the message the agent should send to a person when it gives up: what it tried, what it knows, and what it does not know.'
        ] }
      ]
    },
    {
      id: 'rules',
      tint: 'tint',
      eyebrow: 'Peru timetable',
      h2: 'What does Peru\'s AI regulation set out for private companies, and when?',
      lede: 'A phased timetable by sector. DS 115-2025-PCM, which regulates Law 31814 and was published in El Peruano on Tuesday 9 September 2025, gives private developers and implementers between one and four years, by sector, to implement article 25 and chapter II of title VI.',
      body: [
        { kind: 'table', numCols: [], caption: 'Private-sector implementation periods, first final provision of DS 115-2025-PCM', head: ['Uses of AI in', 'Period in the regulation', 'Which ends around (our arithmetic)'], rows: [
          ['Health, education, justice, security, economy and finance', 'One year', 'September 2026'],
          ['Transport, commerce and labour', 'Two years', 'September 2027'],
          ['Production, agriculture, energy and mining', 'Three years', 'September 2028'],
          ['All other uses', 'Four years', 'September 2029'],
          ['Small companies, annual sales above 150 and up to 1,700 UIT', 'Two years', 'September 2027'],
          ['Micro companies, annual sales up to 150 UIT', 'Three years', 'September 2028']
        ] },
        { kind: 'source', html: 'Source: DS 115-2025-PCM, Reglamento de la Ley 31814, first complementary final provision, El Peruano, 9 September 2025; each period runs from the day after publication. The right-hand column is our own calendar arithmetic, not a legal interpretation. Read on 9 November 2026.' },
        { kind: 'p', mt: true, html: 'This is published context, not legal advice: which period applies to a given company, and exactly what it must implement, is a question for its lawyers. What a course can do is make sure the people building and running agents understand the engineering behind the obligations the regulation keeps returning to, such as transparency about AI use and human supervision of decisions.' },
        { kind: 'p', html: 'For the regulation\'s list of high-risk uses (hiring, credit scoring, access to health services and others) and an approval-gate lesson, read our Spanish page <a class="ag-inline-link" href="/curso-de-agentes-de-ia-para-profesionales">curso de agentes de IA para profesionales</a>. Companies thinking about AI beyond agents may also find <a class="ag-inline-link" href="/curso-de-ia-para-empresas-peru">curso de IA para empresas</a> useful; both describe the same live classes, taught in English.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'English at work',
      h2: 'Is English a barrier for a professional learning agents?',
      lede: 'Less than many people expect. EF\'s English Proficiency Index 2025 scores Peruvians aged 26 to 30 at 559, in the "high" band; those aged 31 to 40 score 537 and those over 41 score 509, both "moderate".',
      body: [
        { kind: 'two',
          leftH3: 'Why English matters for agents',
          left: [
            'Agent platforms, their documentation and their error messages are in English first, and many agents are configured with written instructions. A professional who can write a clear English instruction, and read an English error, works faster with every tool.',
            'EF tests adults who choose to sit its online test, so its scores describe that group rather than every worker in Peru. Still, they suggest many professionals already have the English a live technical class needs.'
          ],
          rightH3: 'How the classes help',
          right: [
            'Mentors speak at a steady pace, check understanding often and write key terms in the chat. Learners describe their own processes in English, which doubles as practice for international meetings.',
            'Connectivity is rarely the issue: INEI found that 95.2% of Peruvians aged 25 to 40 used the internet in the second quarter of 2026, and 86.0% of those aged 41 to 59. We do not teach in Spanish, but one-to-one classes let each learner set the pace.'
          ] }
      ]
    },
    {
      id: 'think',
      tint: 'tint',
      eyebrow: 'Judgement first',
      h2: 'Do professionals need to code to build AI agents?',
      lede: 'Not to start. Low-code platforms let you build a working agent without writing code. But you do need to think like an engineer about what happens when things go wrong, and that is what we teach.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Map the process', p: 'Before building, write the steps a person follows today, the systems they touch, and the decisions they make. Most failed agents automate a process nobody had written down.' },
          { h3: 'Mark the risks', p: 'For every step, ask: does it change something? Can it be undone? Who notices if it goes wrong? Those answers decide where the agent must stop and ask.' },
          { h3: 'Test the bad days', p: 'Slow systems, missing data, a request in an unexpected format. An agent that has only been tested on good days has not been tested.' }
        ] },
        { kind: 'p', mt: true, html: 'Adults who want to add coding to that judgement can take our Python routes, and our Spanish page on <a class="ag-inline-link" href="/cursos-de-programacion-para-adultos-peru">cursos de programación para adultos</a> describes how working adults in Peru fit coding into a week. Claude-based tools are used only with learners aged 18 and over, as Anthropic\'s terms require.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'From a demo agent to one your team can rely on',
    lede: 'Our own milestones for professionals, used to set goals and report progress. Not a certification.',
    table: { numCols: [], caption: 'Milestones in the professionals\' agents course (ours)', head: ['Milestone', 'You can', 'Evidence'], rows: [
      ['1. Process map', 'Describe a work process step by step, with its systems', 'A one-page map'],
      ['2. First agent', 'Build an agent that reads and answers', 'A working demo on your platform'],
      ['3. Side effects', 'Separate read-only tools from tools that change things', 'A tool table with risks'],
      ['4. Safe retries', 'Add timeouts, backoff and idempotency keys', 'The retry lesson, on your process'],
      ['5. Hand-off', 'Stop and pass a case to a person with a clear note', 'Three tested failure cases'],
      ['6. Present', 'Explain the agent\'s limits to a manager in English', 'A short recorded walkthrough']
    ] },
    left: { h3: 'For professionals', ps: [
      'A timeout is a question, not an answer. Find out what happened before you try again.',
      'Every agent needs a sentence that begins: "I stopped because".'
    ] },
    right: { h3: 'For managers', ps: [
      'Ask to see milestone 5 before any agent touches a client.',
      'Progress notes list processes mapped, agents built and failure cases tested.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for working adults',
    lede: 'Each is live and in English, with a single mentor from start to finish.',
    bands: [
      { num: 'I', h3: 'Using AI well', sub: 'No coding needed', courses: [
        { code: 'AAP / USE / 01', slug: 'ai-tools-mastery-complete-college', title: 'AI Tools Mastery', blurb: 'ChatGPT, Claude and automation, used with judgement.' },
        { code: 'AAP / USE / 02', slug: 'data-and-ai-analytics-for-non-programmers-course', title: 'Data and AI analytics', blurb: 'Excel, Sheets and Power BI with AI help.' },
        { code: 'AAP / USE / 03', slug: 'canva-ai-design-masterclass', title: 'Canva and AI design', blurb: 'Professional graphics with AI features.' }
      ] },
      { num: 'II', h3: 'Building agents', sub: 'Code and platforms', courses: [
        { code: 'AAP / BUILD / 01', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI: LLMs, RAG and Agents', blurb: 'Coded agents with retrieval and evaluation.' },
        { code: 'AAP / BUILD / 02', slug: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', title: 'Codex and Claude Code', blurb: 'AI coding agents for people who build software.' },
        { code: 'AAP / BUILD / 03', slug: 'artificial-intelligence-complete-masterclass-college', title: 'AI: Search, Logic and Agents', blurb: 'The theory behind planning and agents.' }
      ] },
      { num: 'III', h3: 'Foundations', sub: 'If you want to code', courses: [
        { code: 'AAP / BASE / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python Masterclass', blurb: 'From zero to advanced, at an adult pace.' },
        { code: 'AAP / BASE / 02', slug: 'data-analysis-mastery-course-college', title: 'Data Analysis', blurb: 'SQL, Python and BI for business data.' },
        { code: 'AAP / BASE / 03', slug: 'mysql-database-complete-masterclass-college', title: 'MySQL', blurb: 'The databases agents read from and write to.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How do the classes fit a working week in Peru?',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Before work', l: 'An early start in Lima is evening in India, an easy hour to teach.' },
      { time: 'After work', l: 'Evenings in Lima are early morning in India; we can arrange them.' },
      { time: 'One to one', l: 'Built around your role, your platform and your diary.' }
    ],
    cells: [
      { h3: 'Your own processes', p: 'Projects use processes from your work, anonymised.' },
      { h3: 'Failure cases first', p: 'Each agent is tested on bad days, not just good ones.' },
      { h3: 'Platform of choice', p: 'Copilot Studio, Gemini Enterprise or Python.' },
      { h3: 'Plain English', p: 'Clear, steady speech; terms written in the chat.' },
      { h3: 'One mentor', p: 'The same person from first map to final review.' },
      { h3: 'Adults only', p: 'This course is for learners aged 18 and over.' }
    ]
  },

  projectsH2: 'What our students build',
  projectsLede: 'Projects from learners on our longer courses; see the <a class="ag-inline-link" href="/student-labs">student labs</a> page for more.',
  reviewsLede: 'Reviews from our learners and families on Google, as written.',

  fees: {
    h2: 'Fees for professionals',
    lede: 'Payment is in US dollars by card, and a Peruvian card issuer converts each charge to soles at its own daily rate. The soles figure on your statement may therefore shift a little from month to month.',
    free: ['A free first class', 'Map one of your own processes', 'No card to book'],
    group: ['Fifteen to twenty working adults', 'One mentor throughout', 'Two live classes a week', 'Monthly, cancel when you like'],
    one: ['Private classes', 'Agents built on your platform and processes', 'Times set around your work']
  },

  faq: {
    eyebrow: 'Professionals in Peru ask',
    h2: 'AI agents for professionals: questions',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Every class is taught live online in English, and there is no Spanish-language version. Mentors keep a steady pace, check understanding often, adapt to your accent and write key terms in the chat, so professionals with working English follow comfortably.' },
      { q: 'Do I need to know how to code?', a: 'No, for the Copilot Studio and Gemini Enterprise courses, which are low-code. If you want to build agents in Python, our Python Automation course or Python Masterclass gets you there. Either way, we teach the engineering judgement behind reliable agents.' },
      { q: 'Which platform should I learn?', a: 'The one your company uses. Copilot Studio suits Microsoft 365 organisations, Gemini Enterprise suits Google Workspace and Google Cloud, and Python suits teams that want full control. The free first class helps you decide.' },
      { q: 'What makes an agent reliable?', a: 'Timeouts on every tool call, safe retries with backoff and jitter, idempotency keys so a repeat does not repeat an action, a limit on attempts, and a clear hand-off to a person. The lesson on this page shows all of them.' },
      { q: 'When are classes held?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India is ahead of Peru by 10 hours 30 minutes on every day of the year, so 07:30 in Lima is 18:00 in India.' },
      { q: 'Does Peru\'s AI regulation apply to my company?', a: 'DS 115-2025-PCM sets phased periods for private companies by sector and size, from one to four years after September 2025. Whether and how it applies to your company is a question for a lawyer; we quote it as context and give no legal advice.' },
      { q: 'Can I bring my own work process?', a: 'Yes, and we recommend it. In one-to-one classes, projects use an anonymised version of a real process from your job. Please never share client personal data in class.' },
      { q: 'Is this course for adults only?', a: 'Yes. The professionals\' agents courses are for learners aged 18 and over, and Claude-based tools are used only with adults, as Anthropic\'s terms require. Teenagers have separate routes.' },
      { q: 'Is there a certificate?', a: 'You receive our own certificate of completion. It is not a Microsoft or Google certification and not a Peruvian qualification; we are not connected with Microsoft, Google, AWS, OpenAI or any Peruvian authority.' },
      { q: 'What do I need?', a: 'A laptop or desktop, a stable connection and a headset. For platform courses you need access to the platform, through your employer or a trial account; we help you set it up in the first class.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related',
    h2: 'Further reading',
    lede: 'More from our site.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Everything we teach in Peru.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Age rules for every AI tool.' },
      { href: '/we-teach-you-how-to-think', label: 'We teach you how to think', p: 'Judgement before tools.' },
      { href: '/student-labs', label: 'Student labs', p: 'Projects by our learners.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'The live class format.' },
      { href: '/courses', label: 'All courses', p: 'Every syllabus in one place.' }
    ]
  },

  start: {
    h2: 'Book a free class for professionals',
    lede: 'Bring one process from your work. In the trial, you and a mentor map it, mark the steps that change things, and sketch where an agent could help and where it must stop. You leave with a recommended platform and course.',
    readFirst: 'If you would like to read first, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains the format and the <a class="ag-inline-link" href="/courses">course catalogue</a> lists every syllabus.',
    note: 'Classes are live video sessions in English with mentors based in India. Message us on WhatsApp in English for a fast reply.',
    formNote: 'Free, no card, no obligation.'
  },

  footer: {
    cols: [
      { h4: 'AI at work', links: [
        { href: '/ai-tools-age-guide', label: 'AI tools and age' },
        { href: '/we-teach-you-how-to-think', label: 'Judgement first' },
        { href: '/student-labs', label: 'Learner projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] },
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Classes in Peru' },
        { href: '/curso-de-agentes-de-ia-para-profesionales', label: 'Agentes para profesionales' },
        { href: '/curso-de-ia-para-empresas-peru', label: 'IA para empresas' },
        { href: '/cursos-de-programacion-para-adultos-peru', label: 'Programación para adultos' }
      ] }
    ],
    bottomRight: 'A timeout is a question, not an answer'
  },

  personalityCss: `
.ag-root.ag-aap .ag-hero h1 { max-width: 19ch; letter-spacing: -0.01em; }
.ag-root.ag-aap .ag-capsule { border-left-width: 4px; border-radius: 0; }
.ag-root.ag-aap .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-aap .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-aap .ag-code-note code { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'AWS Builders\' Library, Timeouts, retries, and backoff with jitter (5 December 2019); OpenAI, A practical guide to building agents; Microsoft Learn, Copilot Studio overview; Stack Overflow Developer Survey 2025, AI agents; DS 115-2025-PCM first final provision and art. 7 h (El Peruano, 9 September 2025); EF EPI 2025 Peru age groups; INEI TIC en los Hogares II Trimestre 2026. All read 9 November 2026.',
    localProject: 'An original Python lesson on retries for an agent\'s tool call: an invented billing service creates invoice F-001 but its reply times out; a naive agent retries without a key and creates F-002; a careful agent sends an idempotency key, waits with capped exponential backoff and full jitter, gets F-001 back, and against a service that is down stops after four attempts with "HANDED TO A PERSON". Plus four workplace tasks. Lesson family: retries, timeouts and idempotency.',
    requiredMentions: ["naive  -&gt; F-002 | invoices: ['F-001', 'F-002']", 'HANDED TO A PERSON', 'retries are selfish', 'A timeout or failure doesn\'t necessarily mean that side effects haven\'t happened.', 'Exceeding failure thresholds: Set limits on agent retries or actions', 'only 17% agreed agents had improved collaboration', 'Micro companies, annual sales up to 150 UIT', '95.2% of Peruvians aged 25 to 40', 'A timeout is a question, not an answer'],
    sources: [
      { claim: 'Timeouts; unknown side effects; idempotency; capped exponential backoff; retry limits; retries are selfish; jitter (5 December 2019).', url: 'https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/' },
      { claim: 'Agents independently accomplish tasks; set limits on agent retries or actions.', url: 'https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf' },
      { claim: 'Copilot Studio is a graphical, low-code studio for building and managing AI-powered agents and workflows.', url: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-copilot-studio' },
      { claim: 'About 70% of agent users report reduced time on tasks, 69% higher productivity, 17% better team collaboration; 51% of professional developers use AI tools daily.', url: 'https://survey.stackoverflow.co/2025/ai' },
      { claim: 'Private-sector periods by sector (1 to 4 years) and for small (2) and micro (3) companies; human supervision principle.', url: 'https://www.gob.pe/institucion/pcm/normas-legales/7133522-115-2025-pcm' },
      { claim: 'EF EPI 2025 Peru: 26 to 30 at 559 high; 31 to 40 at 537; 41+ at 509.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Internet use 95.2% aged 25 to 40; 86.0% aged 41 to 59 (II Trimestre 2026).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' }
    ],
    rejectedClaims: [
      'Exact legal deadlines for any company under DS 115-2025-PCM: our calendar arithmetic is labelled as ours; no legal interpretation or advice given.',
      'The UIT value in soles: a currency figure, not printed on Peru pages, and not needed.',
      'Any count of Peruvian companies using AI agents: no primary source found; not said.',
      'Job, promotion or salary promises: none.',
      'Microsoft, Google, AWS or OpenAI partnership or certification: none, and the page says so.'
    ]
  }
};
