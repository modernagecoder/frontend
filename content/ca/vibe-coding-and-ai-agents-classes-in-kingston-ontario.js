'use strict';
// Kingston, Ontario (cg- city page, Canada cluster Wave 2, row 144: vibe-coding-and-ai-agents-classes-in-<city>).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md, brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Spine: vibe coding and AI agents for Kingston teens and adults, taught as "an answer is only as fresh as its data". The
// local project is a two-part rink agent on the City of Kingston's Public Outdoor Rinks layer: the tool returns the layer's
// last-edit date with every row, and a human-written check rejects any answer that omits that date or reads meaning into
// the undocumented Capacity column. Kingston, Ontario, not Kingston upon Thames or Kingston, Jamaica.
// Sources, read raw on 22 and 23 October 2026:
//  - Ontario curriculum (facts-schools-contests.md section 1): Grade 6 C3.1 "by writing and executing efficient code";
//    MTH1W C2.2 "create code by decomposing situations into computational steps in order to represent mathematical concepts
//    and relationships"; ICS4U "Students will use modular design principles to create complex and fully documented
//    programs, according to industry standards"; ICS3C "Students will write and test computer programs"; ICD2O strands
//    "Computational Thinking and Making Connections", "Hardware, Software, and Innovations", "Programming"; EQAO OSSLT
//    "November 3 - 30, 2026"; OSSD online learning credits for students who started Grade 9 in 2020-2021 or later.
//  - CEMC: CCC Wednesday 17 February 2027; Junior Q1-2 "(e.g. basic loops and conditions)", Q5 "(e.g. recursion,
//    two-dimensional arrays, efficient/insightful algorithms)"; "participants can create a free practice account and access
//    previous contests"; through a school. CCC rules: no generative AI or AI tools in an IDE.
//  - Tool terms: Anthropic 18+; OpenAI help centre parental consent 13 to 18; GitHub 13+, Copilot free for verified students.
//    Anthropic, Building effective agents: "The LLM will potentially operate for many turns, and you must have some level of
//    trust in its decision-making."
//  - facts-geo.md: Kingston CSD 3510010, Kingston CMA; area codes 343, 613, 753; America/Toronto; 1 November 2026 and
//    14 March 2027 changes. No population used.
//  - City of Kingston open data (src-pilots/vibe-coding-and-ai-agents-classes-in-kingston-ontario/): Public Outdoor Rinks,
//    item 10f7c977639442679ea836b47935ab3b (owner kingstonarcgisadmin), CSV kingston-rinks.csv (3,326 bytes, sha256
//    14b5e092...9a5f), 17 rows; item description "Unstaffed rinks may be under a Community / Neighbourhood Agreement and
//    maintained by volunteers." and "Existence of the rinks is weather dependent."; FeatureServer layer editingInfo
//    dataLastEditDate 1774130314422 = 21 March 2026 (layer0.json). Licence: City of Kingston Open Data Licence 1.0 (PDF,
//    text extracted with pdftotext -raw, kingston-licence-streamorder.txt): "This licence is based on version 1.0 of the Open
//    Government Licence" ... "including for commercial purposes, subject to the terms below."; attribution "Contains
//    information licensed under the Open Data Licence" + dash + "City of Kingston." The item licenseInfo points to this
//    licence. (The national page dropped this file only because its first text extraction was garbled; -raw is clean.)
// Our own calculations (rink_agent.py, python -I, rink_agent.out.txt): 17 rinks, all Status Closed; Type City Operated 13,
//  Community Rink Agreement 4; Washroom Yes 6; Staffed Yes 7; Capacity values 0, 5, 10, 25 with no definition in the item
//  or layer; hours 7:00 am - 9:00 pm on 16 rows; OBJECTIDs 2 and 3 absent; honest answer passes, hasty answer rejected for
//  missing as-of date and for using Capacity.
// Lesson family: data freshness and undefined fields: an agent's answer must carry its data's date and refuse to interpret
//  columns nobody documented.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const SCRIPT = esc(`# Kingston rink agent: every answer must say how old its data is (our classroom example)
import csv, json
from datetime import datetime, timezone

RINKS = list(csv.DictReader(open("kingston-rinks.csv", encoding="utf-8-sig")))
EDITED_MS = json.load(open("layer0.json", encoding="utf-8"))["editingInfo"]["dataLastEditDate"]
AS_OF = datetime.fromtimestamp(EDITED_MS / 1000, timezone.utc).strftime("%d %B %Y")

def rink_status(name):
    """Tool: one rink's row, plus the date the City last edited the layer."""
    for r in RINKS:
        if r["Name"].lower().startswith(name.lower()):
            return {"rink": r["Name"], "status": r["Status"], "hours": r["Hours of Operation"],
                    "washroom": r["Washroom"], "staffed": r["Staffed"], "as_of": AS_OF}
    return {"error": "no rink starting with " + name}

def check(answer, result):
    """Human-written check: a status claim needs the as-of date and must match the tool."""
    problems = []
    if result["status"].lower() not in answer.lower():
        problems.append("status differs from the tool")
    if result["as_of"] not in answer:
        problems.append("no as-of date")
    if "capacity" in answer.lower():
        problems.append("uses Capacity, which the file never defines")
    return "OK" if not problems else "REJECTED: " + "; ".join(problems)

result = rink_status("Polson Park")
print("tool ->", result)
# Two stand-in answers in place of a model, so the check can be tested offline.
honest = "The City's layer, last edited " + AS_OF + ", lists Polson Park Outdoor Rink as Closed."
hasty = "Polson Park rink is Closed tonight and holds 10 skaters at capacity."
for a in (honest, hasty):
    print(check(a, result), "|", a)`);

const OUT = esc(`tool -> {'rink': 'Polson Park Outdoor Rink', 'status': 'Closed', 'hours': '7:00 am - 9:00 pm', 'washroom': 'Yes', 'staffed': 'Yes', 'as_of': '21 March 2026'}
OK | The City's layer, last edited 21 March 2026, lists Polson Park Outdoor Rink as Closed.
REJECTED: no as-of date; uses Capacity, which the file never defines | Polson Park rink is Closed tonight and holds 10 skaters at capacity.`);

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'KINGSTON', label: 'Kingston, Ontario', blurb: 'Vibe coding and AI agents for Kingston, Ontario teens and adults, with a City rink agent whose every answer must say how old its data is.' },
  market: CA,
  slug: 'vibe-coding-and-ai-agents-classes-in-kingston-ontario',
  code: 'vaak',
  accent: '#205C1E',
  accentRationale: 'Kingston, Ontario: a muted harbour-pine green, #205C1E, allocated for row 144 at least 6 RGB units from every site accent and 14 from the other Canada accents; contrast 7.59 on the paper #FBF8F2 (7.14 and 6.53 on the darker tints), above 4.5 on all three',
  pageType: 'city',
  place: {
    name: 'Kingston',
    eyebrow: 'Kingston, Ontario',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Ontario' },
      { type: 'Country', name: 'Canada' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }, { slug: 'coding-classes-in-ontario', name: 'Ontario' }],
  nav: [
    { label: 'Canada', href: '/coding-classes-in-canada' },
    { label: 'Ontario', href: '/coding-classes-in-ontario' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Kingston, Ontario',
  title: 'Vibe Coding and AI Agents Classes in Kingston, Ontario',
  description: 'Vibe coding and AI agents for Kingston, Ontario teens and adults: tool age limits, Ontario computer studies, and a rink agent that must date every answer.',
  ogDescription: 'A Kingston rink agent that has to say when its data was last updated. Vibe coding and AI agents for teens and adults, taught with checks.',
  twitterDescription: 'Vibe coding and AI agents for Kingston, Ontario teens and adults, live online.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '23 October 2026',
  courseSchema: {
    name: 'Vibe Coding and AI Agents Classes for Kingston, Ontario Learners',
    description: 'Live online vibe coding for Kingston teens from 13 to 17 and AI agent building for adults, in separate courses, with agents that report the age of their data and refuse to guess at undefined fields.'
  },

  h1: 'Vibe coding and AI agents classes in Kingston, Ontario',
  capsuleQ: 'Can a Kingston teen or adult learn to build with AI properly, not just prompt it?',
  capsule: 'Yes. Modern Age Coders runs live online classes for Kingston, Ontario: Vibe Coding for Teens for 13 to 17 year olds, and a Codex and Claude Code agents course limited to adults. Study in a class of fifteen to twenty, or privately with one teacher, and learn to make every AI answer show where its facts came from and how old they are.',
  lead: 'Kingston, at the eastern end of Lake Ontario, is the city on this page; not Kingston upon Thames and not Kingston, Jamaica. Vibe coding is writing software by describing it to an AI model, while an AI agent hands the model a set of tools, lets it call them, and has it act on whatever comes back. A model will happily tell you a rink is closed tonight. What it will not tell you, unless someone forces it to, is that its information was last updated in March. This page builds a small rink agent on the City of Kingston\'s own outdoor rinks file, then adds the check that makes it honest about dates. It also covers the AI tools a Kingston teen may use, the Ontario courses and contests a student meets, and how lesson times move with Ontario\'s clock changes.',
  wa: 'Hello Modern Age Coders, I am in Kingston, Ontario and would like a free first class in vibe coding or AI agents.',

  picks: {
    eyebrow: 'Course picks for Kingston',
    h2: 'Four courses for Kingston teens and adults',
    intro: 'Which tools a learner may use depends on age, so the course does too; level is settled in the free lesson.',
    items: [
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python, web and AI projects with assistants a teenager may use, where every answer the software gives must cite its source and date.' },
      { course: 'python-complete-masterclass-teens', band: 'Teens, first steps', note: 'Python written by hand, from variables to dictionaries and dates, so that AI-written Python can be read rather than trusted.' },
      { course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', band: 'Adults only, 18+', note: 'Coding agents on real repositories for working adults. Anthropic restricts Claude Code to people aged 18 and over, so no teen is enrolled.' },
      { course: 'python-ai-automation-masterclass-college', band: 'Adults, automation', note: 'Scripts that fetch, clean and report on real data for adults at work, the everyday ground where agents are most tempting and most risky.' }
    ]
  },

  sections: [
    {
      id: 'rinks', tint: 'deep', eyebrow: 'Kingston data project',
      h2: 'Is the Polson Park rink open? An agent that has to say &ldquo;as of when&rdquo;',
      intro: 'The City of Kingston publishes its public outdoor rinks as open data: seventeen rinks, each with hours, a status and a few yes or no fields. We built a tiny agent around it and a check a person wrote first. Code, output and counts are ours; the file was downloaded on 23 October 2026.',
      body: [
        { kind: 'table', caption: 'What the City\'s file holds (our tally of 17 rows, downloaded 23 October 2026)', head: ['Field', 'Values in the file'], rows: [
          ['Status', 'Closed on all 17 rows'],
          ['Type', 'City Operated 13, Community Rink Agreement 4'],
          ['Hours of Operation', '7:00 am - 9:00 pm on 16 rows, one rink with later hours'],
          ['Washroom', 'Yes at 6 rinks'],
          ['Staffed', 'Yes at 7 rinks'],
          ['Capacity', 'Only the numbers 0, 5, 10 and 25, with no unit or definition anywhere in the dataset description'],
          ['Layer last edited', '21 March 2026, according to the City\'s map service']
        ] },
        { kind: 'p', text: 'Every rink reads Closed. On a late October download that is no surprise, and the City\'s own description says that the existence of the rinks is weather dependent and that unstaffed rinks may be maintained by volunteers under a community agreement. But an agent asked &ldquo;is Polson Park open tonight?&rdquo; in January would still read Closed from a file last edited in March, and answer with total confidence.' },
        { kind: 'p', text: 'So the tool returns the edit date with every row, and the check refuses answers that leave it out:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'p', text: 'What it printed on our machine:<code class="cg-mt-2">' + OUT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The date travels with the fact', p: 'Every tool result carries the layer\'s last-edit date. An answer that drops it is rejected, because a status without a date is a guess dressed as a fact, especially for something as changeable as ice.' },
          { h3: 'Undefined means untouchable', p: 'Capacity holds 0, 5, 10 and 25, and nothing in the City\'s description says what they count. The hasty answer turned 10 into skaters. Our check rejects any answer that uses the field until someone finds a definition.' },
          { h3: 'Stand-in answers, on purpose', p: 'The two answers are written by us in place of a model, one honest and one hasty, so the check can be tested on any laptop with no AI service. In the adult course the stand-ins are replaced by real model calls and the check stays.' }
        ] },
        { kind: 'callout', h3: 'What a better agent would add', p: 'Two OBJECTIDs, 2 and 3, are missing from the sequence; the rows may have been retired, and the file does not say. A careful agent would also point users to the City\'s own rink page for live conditions, rather than treating a spring snapshot as tonight\'s news.' },
        { kind: 'p', text: 'Used under the City of Kingston Open Data Licence 1.0, which the City adapted from version 1.0 of the Open Government Licence for Ontario; its grant covers commercial purposes as well (<a class="cg-inline-link" href="https://www.cityofkingston.ca/documents/10180/144997/CityofKingston_OpenDataLicense.pdf">licence</a>, <a class="cg-inline-link" href="https://opendatakingston.cityofkingston.ca/datasets/10f7c977639442679ea836b47935ab3b_0">dataset</a>). Contains information licensed under the Open Data Licence - City of Kingston. The City does not endorse this page or our classes.' }
      ]
    },
    {
      id: 'agents', tint: '', eyebrow: 'How we teach agents',
      h2: 'Agents run for many steps. Every step needs a source and a date',
      intro: 'Anthropic, writing about agents its engineers build, puts the risk plainly: &ldquo;The LLM will potentially operate for many turns, and you must have some level of trust in its decision-making.&rdquo; Our job is to make that trust earned.',
      body: [
        { kind: 'table', caption: 'Our four rules for agents that report facts (ours), and the Ontario course idea each one builds on', head: ['Rule', 'What it looks like in code', 'Ontario link'], rows: [
          ['Every fact has a source', 'Tool results carry the dataset name and row ID', 'ICS4U: programs that are &ldquo;fully documented&rdquo;'],
          ['Every fact has a date', 'Tools return the data\'s last-edit date; answers must repeat it', 'ICS3C: students &ldquo;write and test computer programs&rdquo;'],
          ['Undefined fields are off limits', 'The check rejects answers that use columns without a definition', 'MTH1W: decomposing situations &ldquo;into computational steps&rdquo;'],
          ['Stand-ins before models', 'Test the loop with hand-written answers first, good and bad', 'Grade 6 math: writing and executing &ldquo;efficient code&rdquo;']
        ] },
        { kind: 'p', text: 'Vibe coding gets the same treatment at a smaller scale. When a Kingston teen asks an assistant for a function, the first question in class is not whether it runs but what it assumes: which file, which date, which meaning for each column. A function that silently assumes the data is current is the same bug as the rink agent, only harder to see.' },
        { kind: 'p', text: 'This is the owner\'s promise in our own words: we teach learners to think a problem through and solve it, never to copy an answer, and that includes an answer from an AI. A Grade 11 student and an adult who works with data are both asked, at the end of each task, where each fact came from and when it was true.' }
      ]
    },
    {
      id: 'tools', tint: 'tint', eyebrow: 'Age limits',
      h2: 'AI tools a Kingston teen may use, by each company\'s rules',
      intro: 'Every AI company sets a minimum age. Their pages, checked on 22 October 2026, decide which course a Kingston learner joins.',
      body: [
        { kind: 'table', caption: 'Who may use what, by age (companies\' terms and help pages, read 22 October 2026)', head: ['Tool', 'Age 13 to 17', '18 and over', 'What the company says'], rows: [
          ['GitHub Copilot', 'Yes', 'Yes', 'GitHub accounts from 13; free Copilot for verified students through GitHub Education'],
          ['ChatGPT', 'With a parent\'s consent only', 'Yes', 'OpenAI says it requires children aged 13 to 18 to obtain parental consent'],
          ['Claude and Claude Code', 'No', 'Yes', 'Anthropic: users must be at least 18'],
          ['Any AI help in the CCC', 'No', 'No', 'Contest rules forbid generative AI, including editor features']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Kingston parents', p: 'We never ask a teen to create an account their age does not allow. Lessons that would use ChatGPT wait until a parent has said yes, which is what OpenAI itself asks.' },
          { h3: 'Kingston adults', p: 'Adults learn on agentic tools that edit code and run commands, inside a Git project, so each change is reviewed as a diff and can be undone.' },
          { h3: 'Recheck before you sign', p: 'These are company rules, not laws we can promise will stay fixed. We review them before each new course; read the live terms for any tool you choose.' }
        ] }
      ]
    },
    {
      id: 'school', tint: '', eyebrow: 'Ontario schools and contests',
      h2: 'Ontario computer studies for a Kingston student, and where we fit',
      intro: 'Publicly funded schools in Kingston follow the Ontario curriculum. Phrases in quotation marks are taken from the province\'s online curriculum and from CEMC, both consulted on 22 October 2026; the summaries are ours.',
      body: [
        { kind: 'table', caption: 'Ontario computer studies courses (curriculum service, read 22 October 2026)', head: ['Course', 'Grade', 'In the ministry\'s words'], rows: [
          ['ICD2O, Digital Technology and Innovations in the Changing World', '10, open (2023)', 'Strands on computational thinking, on hardware, software and innovations, and on programming'],
          ['ICS3U, Introduction to Computer Science', '11, university', 'Software designed independently and in teams; no prerequisite'],
          ['ICS3C, Introduction to Computer Programming', '11, college', '&ldquo;Students will write and test computer programs&rdquo;'],
          ['ICS4U, Computer Science', '12, university', '&ldquo;modular design principles to create complex and fully documented programs&rdquo;']
        ] },
        { kind: 'p', text: 'We teach beside these courses and do not grant Ontario credits; a student earns ICS3U or ICS4U at school. Kingston students who began Grade 9 in 2020 to 2021 or later also need at least two online learning credits for the diploma, according to the Ontario government. Those credits come through the school system; our classes are not credit courses. EQAO lists Ontario\'s literacy test, the OSSLT, for 3 to 30 November 2026.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The CCC in 2027', p: 'CEMC lists the 2027 Canadian Computing Competition for Wednesday 17 February 2027. Junior questions start with basic loops and conditions and end with recursion and two-dimensional arrays.' },
          { h3: 'Free practice', p: 'CEMC lets participants create a free practice account and access previous contests. We point Kingston students there and write our own practice problems rather than copying CEMC\'s.' },
          { h3: 'Entered at school', p: 'Students write CEMC contests through a school, not on their own. A Kingston student whose school does not take part can ask another local school about joining.' }
        ] }
      ]
    },
    {
      id: 'time', tint: 'tint', eyebrow: 'Class times',
      h2: 'Kingston changes its clocks twice in this school year',
      intro: 'Kingston is on Eastern time and India, where our teachers are, never changes. The gap between them grows by an hour on 1 November 2026 and shrinks again on 14 March 2027.',
      body: [
        { kind: 'table', caption: 'A 5 pm weekday class in Kingston, seen from India (UTC offsets from tzdb 2026e; India times are our conversion)', head: ['Period', 'Kingston', 'India'], rows: [
          ['To 1 November 2026', '5:00 pm, UTC-4', '2:30 am, next day'],
          ['1 November 2026 to 14 March 2027', '5:00 pm, UTC-5', '3:30 am, next day'],
          ['After 14 March 2027', '5:00 pm, UTC-4', '2:30 am, next day']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'We hold your time steady', p: 'Your class stays at the same Kingston time through each change; our teachers move their side. Schedules are re-sent in Eastern time the week before.' },
          { h3: 'Kingston numbers', p: 'Numbers with the 613, 343 and 753 area codes are accepted in the form. Enter the ten digits without a leading 1.' },
          { h3: 'Dates are a coding lesson', p: 'Clock changes are where date code breaks. The rink agent stores its as-of date in UTC for the same reason: the moment does not move when the clocks do.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From reading code to agents that cite their sources',
    intro: 'The ages are a guide only. Each learner\'s free lesson decides the real starting point.',
    cols: [
      { band: 'Ages 13 and 14', h3: 'Read and write by hand', p: 'Python without assistants, including files and dates, the basis for reading AI output.', courses: ['python-complete-masterclass-teens', 'git-github-version-control-course-for-teens'] },
      { band: 'Ages 14 to 17', h3: 'Vibe coding with care', p: 'Projects with permitted assistants, every result sourced and checked.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 and up', h3: 'AI in real projects', p: 'Generative AI, retrieval and automation for students and career changers.', courses: ['complete-generative-ai-masterclass-college', 'python-ai-automation-masterclass-college'] },
      { band: 'Working adults', h3: 'Agents you can audit', p: 'Coding agents on live repositories, with sourced answers and safe rollback. Adults only.', courses: ['codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', 'vibe-coding-for-college-fullstack-ai-dsa-career-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Why learn to code in Kingston if an AI can write the script?',
    intro: 'Because the script was never the hard part of the rink agent; the questions were.',
    p1: 'Writing the rink tool takes an assistant a few seconds. Knowing that the answer needs a date, that Capacity has no definition, and that two IDs are missing takes someone who has opened the file and thought about it. Those are the decisions that separate a toy from something a person can rely on.',
    p2: 'Our classes put the time there. Teens learn on tools their age allows and adults on agents, but both learn to ask what the data is, when it was true and what it does not say, and both explain their finished code without help.',
    closer: 'An agent that says &ldquo;as of 21 March 2026&rdquo; is less impressive and far more useful than one that sounds certain.',
    blogAnchor: 'is coding still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online for Kingston, from downtown to the west end',
    intro: 'Lessons happen at home with a live teacher who watches the screen and asks the learner to explain each step aloud.',
    cells: [
      { h3: 'When', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Class size', p: 'Fifteen to twenty learners of one age band and level share a class, or a learner has the teacher alone, which suits adults working on their own data.' },
      { h3: 'Teens and adults apart', p: 'Because their permitted tools differ under the companies\' terms, teens and adults are always taught in separate courses.' },
      { h3: 'Around Kingston', p: 'Learners from Napanee, Gananoque and the surrounding townships take the same online classes on the same Eastern clock.' },
      { h3: 'What to have ready', p: 'A laptop or desktop, a microphone and a steady connection. No paid AI subscription is needed for the teen course.' },
      { h3: 'Free first lesson', p: 'The first lesson is a full class at no cost, closing with a placement. We do not ask for card details.' }
    ],
    spec: { title: 'No Kingston location', p: 'We have no centre in Kingston and do not claim one. Teaching is live and online from India, and we are not connected with the City of Kingston, the Ontario Ministry of Education, EQAO or CEMC.' }
  },

  fees: {
    h2: 'Fees for Kingston learners',
    intro: 'Three items; the price anchors show each one in your own currency.',
    first: 'A full trial lesson, free, finishing with a level and a course suggestion.',
    group: 'The monthly fee for a group of fifteen to twenty, eight live classes a month.',
    private: 'The monthly fee for private lessons at times you choose.',
    closer: 'Kingston learners pay the same monthly fee as anyone else in Canada. Billing starts only once the trial is done and a course and time are agreed.'
  },

  reviewsH2: 'What our families and students wrote on Google',

  book: {
    h2: 'Tell us about the Kingston learner',
    intro: 'The opening lesson starts with an AI-written answer that forgets to say how old its data is. Spotting that, and fixing the code so it cannot happen again, shows the teacher your level.',
    success: 'Thank you. The team will be in touch soon about a first class for Kingston.'
  },

  faq: {
    h2: 'Vibe coding and AI agents in Kingston, Ontario: questions',
    intro: 'What Kingston families and adult learners most often ask.',
    items: [
      { q: 'Do you have vibe coding classes for Kingston, Ontario?', a: 'Yes, live online with a real teacher. Kingston teenagers from 13 to 17 learn together, and adults learn in their own courses. There is no Kingston classroom.' },
      { q: 'Is this for Kingston, Ontario or another Kingston?', a: 'Kingston, Ontario, at the east end of Lake Ontario. Lesson times are quoted on Eastern time, and the courses and contests described are Ontario ones.' },
      { q: 'What is an AI agent, simply?', a: 'A program where an AI model decides which tools to use, runs them, and reports back. We teach learners to build one and to make it say where its facts came from and how current they are.' },
      { q: 'Can my teenager use Claude Code in your classes?', a: 'No. Anthropic requires users to be at least 18, so Claude and Claude Code belong to our adult course only. They are never suggested to anyone younger.' },
      { q: 'Will my teen need ChatGPT?', a: 'Not necessarily. OpenAI requires parental consent for ages 13 to 18, so we use it only with a parent\'s agreement. GitHub Copilot is free for verified students and is what teens use otherwise.' },
      { q: 'Is there an AI agents course for adults in Kingston?', a: 'Yes. The Codex and Claude Code course is for adults only and uses real repositories in Git. Python automation is a gentler start for adults who want to work with data first.' },
      { q: 'Why does the rink agent print a date?', a: 'Because the City\'s rink layer was last edited on 21 March 2026, and a status is only true as of its date. Our check rejects any answer that leaves the date out.' },
      { q: 'Do your classes count for an Ontario credit?', a: 'No. We do not grant Ontario credits. Courses such as ICS3U and ICS4U, and the online learning credits in the diploma rules, are earned through school.' },
      { q: 'Can students use AI in the Canadian Computing Competition?', a: 'No. The rules ban generative AI and AI tools inside the editor. CEMC lists the 2027 CCC for Wednesday 17 February 2027, entered through a school.' },
      { q: 'What class times work in Kingston?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Every time is given in Eastern time, and kept steady through clock changes.' }
    ]
  },

  next: {
    eyebrow: 'More for Ontario',
    h2: 'Other pages for Kingston and Ontario learners',
    html: 'For the country-wide view see <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-canada">vibe coding and AI agents classes in Canada</a>; for the province, <a class="cg-inline-link" href="/coding-classes-in-ontario">coding classes in Ontario</a>. Students can read the <a class="cg-inline-link" href="/ccc-junior-guide">CCC Junior guide</a> and <a class="cg-inline-link" href="/ics3u-computer-science-help">ICS3U help</a>; adults can start with <a class="cg-inline-link" href="/coding-classes-for-adults-in-canada">coding classes for adults in Canada</a>.',
    waLabel: 'Message the team on WhatsApp'
  },

  footerHeading: 'Kingston and Ontario',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/coding-classes-in-ontario', label: 'Ontario' },
    { href: '/vibe-coding-and-ai-agents-classes-in-canada', label: 'Vibe coding in Canada' },
    { href: '/ccc-junior-guide', label: 'CCC Junior guide' },
    { href: '/canada-time-zones-2026-online-class-times', label: 'Canada class times 2026' }
  ],

  personalityCss: `
.cg-root.cg-vaak .cg-hero h1 { font-weight: 700; letter-spacing: -0.016em; line-height: 1.07; }
.cg-root.cg-vaak .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-vaak .cg-eyebrow { letter-spacing: 0.1em; font-weight: 650; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-vaak .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.008em; }
.cg-root.cg-vaak .cg-table caption { text-align: left; font-weight: 600; }
.cg-root.cg-vaak .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-vaak #rinks code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.8rem; line-height: 1.5; padding: 0.9rem 1rem; border-left: 3px solid var(--cg-accent); }
.cg-root.cg-vaak .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.7rem; }
`,

  dossier: {
    curriculumAuthority: 'Ontario curriculum service, read 22 October 2026: Grade 6 C3.1 efficient code; MTH1W C2.2; ICD2O strands; ICS3U, ICS3C, ICS4U descriptions; OSSD online learning credits (ontario.ca); EQAO OSSLT 3 to 30 November 2026. CEMC CCC 2027 date, Junior question ladder, free practice account, school entry; CCC rules on AI; Anthropic, OpenAI and GitHub age rules; Anthropic, Building effective agents (many turns, trust). Kingston area codes and Eastern offsets from facts-geo.md.',
    localProject: 'City of Kingston Public Outdoor Rinks (City of Kingston Open Data Licence 1.0, based on OGL Ontario 1.0), CSV downloaded 23 October 2026, 17 rows: our rink_agent.py (python -I) whose tool returns each row with the layer last-edit date (21 March 2026) and whose human-written check passes an honest dated answer and rejects a hasty one for dropping the date and for using the undefined Capacity field; all 17 rinks Closed; Type 13/4; OBJECTIDs 2 and 3 absent. Labelled as ours. Lesson family: data freshness and undefined fields.',
    requiredMentions: [
      'Polson Park Outdoor Rink',
      'Community Rink Agreement 4',
      'last edited 21 March 2026',
      'Contains information licensed under the Open Data Licence - City of Kingston',
      'not Kingston upon Thames',
      'operate for many turns',
      '613, 343 and 753',
      'Undefined means untouchable',
      'Napanee, Gananoque',
      'Two OBJECTIDs, 2 and 3'
    ],
    sources: [
      { claim: 'City of Kingston Public Outdoor Rinks dataset (item and layer).', url: 'https://opendatakingston.cityofkingston.ca/datasets/10f7c977639442679ea836b47935ab3b_0' },
      { claim: 'City of Kingston Open Data Licence 1.0.', url: 'https://www.cityofkingston.ca/documents/10180/144997/CityofKingston_OpenDataLicense.pdf' },
      { claim: 'Rinks FeatureServer layer metadata: data last edit date.', url: 'https://services1.arcgis.com/5GRYvurYYUwAecLQ/arcgis/rest/services/Outdoor_Rinks_Public/FeatureServer/0' },
      { claim: 'Ontario curriculum: computer studies courses, MTH1W, Grade 6 coding.', url: 'https://www.dcp.edu.gov.on.ca/en/curriculum/elementary-mathematics' },
      { claim: 'Ontario diploma requirements: online learning credits.', url: 'https://www.ontario.ca/page/high-school-graduation-requirements' },
      { claim: 'EQAO OSSLT window.', url: 'https://www.eqao.com/the-assessments/' },
      { claim: 'CEMC CCC 2027.', url: 'https://cemc.uwaterloo.ca/contests/ccc' },
      { claim: 'Anthropic consumer terms: 18+.', url: 'https://www.anthropic.com/legal/consumer-terms' },
      { claim: 'Anthropic, Building effective agents.', url: 'https://www.anthropic.com/research/building-effective-agents' }
    ],
    rejectedClaims: [
      'What the Capacity values count: not defined by the City, so not interpreted.',
      'Why OBJECTIDs 2 and 3 are missing: not stated, not guessed.',
      'Current rink conditions: the file is a snapshot; the page points to the City instead.',
      'Any Kingston population: not used.',
      'That our classes count toward Ontario credits or online learning credits: refused.',
      'Recommending Claude or Claude Code to anyone under 18: refused.',
      'Any affiliation with the City of Kingston, the ministry, EQAO or CEMC.'
    ]
  }
};
