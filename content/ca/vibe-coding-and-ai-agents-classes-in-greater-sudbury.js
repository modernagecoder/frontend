'use strict';
// Greater Sudbury, Ontario (cg- city page, Canada cluster Wave 2, row 149: vibe-coding-and-ai-agents-classes-in-<city>).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md, brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Spine: vibe coding and AI agents for Greater Sudbury teens and adults, taught as "when a record exists in two languages,
// check that both say the same thing". The local project audits the City's bilingual parks file: an agent answering in
// English or French would give different answers for the same park on 12 rows; our checks list them by OBJECTID.
// Sources, read raw on 22 and 23 October 2026:
//  - Ontario curriculum (facts-schools-contests.md section 1): Grade 2 C3.1 "sequential and concurrent events"; Grade 5
//    C3.1 "conditional statements and other control structures"; Grade 8 C3.1 "the analysis of data in order to inform and
//    communicate decisions"; ICS3U and ICS3C descriptions; ICD2O includes AI "and assess their benefits and limitations".
//  - CEMC: CCC "available in English and French"; BCC English only, 9 to 20 November 2026; CCC Wednesday 17 February 2027;
//    Fryer, Galois, Hypatia Wednesday 7 April 2027; Euclid Tuesday 6 April 2027, "Written annually by over 25 000
//    participants worldwide"; contests through a school. CCC rules: no generative AI.
//  - Tool terms: Anthropic 18+; OpenAI help centre parental consent 13 to 18; GitHub 13+ and Copilot free for verified
//    students. Anthropic, Building effective agents: "Agents' autonomy makes them ideal for scaling tasks in trusted
//    environments."
//  - facts-geo.md: Greater Sudbury / Grand Sudbury CSD 3553005 and CMA; area codes 249, 683, 705; America/Toronto with the
//    1 November 2026 and 14 March 2027 changes. No population used.
//  - City of Greater Sudbury open data (src-pilots/vibe-coding-and-ai-agents-classes-in-greater-sudbury/): Parks / Parcs,
//    https://opendata.greatersudbury.ca/api/download/v1/items/e1f2c475a7d14e3dbc46715b8baed81a/csv?layers=4 (74,601 bytes,
//    sha256 dc6970e8...c3b8), 406 rows, bilingual columns Name_EN, Name_FR, Category_E, Category_F, Address_EN, Address_FR.
//    Licence page https://www.greatersudbury.ca/city-hall/open-data/licence/ (sudbury-licence.html, flat text): "This licence
//    is based on version 1.0 of the Open Government Licence" + dash + "Ontario"; "grants you a worldwide, royalty-free,
//    perpetual, non-exclusive licence to use the information provided for any purpose, including for commercial purposes,
//    subject to the terms below."; attribution "Contains information licensed under the Open Data Licence" + dash + "City
//    of Greater Sudbury."; non-endorsement clause.
// Our own calculations (bilingual_audit.py, python -I, bilingual_audit.out.txt; profile checks): 406 parks; Category_E
//  Natural Park 92, Playground 83, Park 74, Tot Lot 70; 23 community values, Sudbury 206; 94 Name_EN "Unnamed" and 93
//  Name_FR "Sans nom"; category pairs off the usual pattern: OBJECTID 115 Tot Lot / Rue Redfern, 123 Natural Park / Parc,
//  169 Park / Parc naturel; 9 name pairs where only one language says unnamed (65 Unnamed / croissant Douglas; 265, 273,
//  290, 305, 334 named in English, Sans nom in French; 364 to 366 "Unnamed - Lake Access" / Sans nom); 21 French name or
//  category values with stray spaces or line breaks; Category_E "Park " with a trailing space on OBJECTID 416.
// Lesson family: consistency between paired columns (English and French) before an agent answers in either language,
//  with answers cited by OBJECTID.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const SCRIPT = esc(`# Sudbury parks, English half against French half: an audit we wrote for this page
from collections import Counter
import csv

rows = list(csv.DictReader(open("sudbury-parks.csv", encoding="utf-8-sig")))
clean = lambda s: " ".join(s.split())

# Learn the usual English-to-French category pairing from the file itself (the majority wins).
pairs = Counter((clean(r["Category_E"]), clean(r["Category_F"])) for r in rows)
usual = {}
for (en, fr), n in pairs.most_common():
    usual.setdefault(en, fr)

# Check 1: categories whose French label is not the usual partner of the English one.
odd_category = [(r["OBJECTID"], clean(r["Category_E"]), clean(r["Category_F"])) for r in rows
                if usual[clean(r["Category_E"])] != clean(r["Category_F"])]

# Check 2: one language says the park has no name, the other gives one.
EN_NONE, FR_NONE = "Unnamed", "Sans nom"
odd_name = [(r["OBJECTID"], clean(r["Name_EN"]), clean(r["Name_FR"])) for r in rows
            if (clean(r["Name_EN"]) == EN_NONE) != (clean(r["Name_FR"]) == FR_NONE)]

# Check 3: text that needs trimming before any lookup can match it.
untrimmed = sum(1 for r in rows for k in ("Name_FR", "Category_F") if r[k] != r[k].strip())

print("parks", len(rows), "| category pairs that break the usual pattern:", odd_category)
print("name pairs where only one language says unnamed:", len(odd_name))
print("French name or category values with stray spaces or line breaks:", untrimmed)`);

const OUT = `parks 406 | category pairs that break the usual pattern: [('115', 'Tot Lot', 'Rue Redfern'), ('123', 'Natural Park', 'Parc'), ('169', 'Park', 'Parc naturel')]
name pairs where only one language says unnamed: 9
French name or category values with stray spaces or line breaks: 21`;

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'GREATER SUDBURY', label: 'Greater Sudbury', blurb: 'Vibe coding and AI agents for Greater Sudbury teens and adults, with a check that the City\'s English and French park records agree.' },
  market: CA,
  slug: 'vibe-coding-and-ai-agents-classes-in-greater-sudbury',
  code: 'vaag',
  accent: '#61433A',
  accentRationale: 'Greater Sudbury: a muted slag-and-nickel brown, #61433A, allocated for row 149 at least 6 RGB units from every site accent and 14 from the other Canada accents; contrast 8.35 on the paper #FBF8F2 (7.85 and 7.18 on the darker tints), above 4.5 on all three',
  pageType: 'city',
  place: {
    name: 'Greater Sudbury',
    eyebrow: 'Greater Sudbury, Ontario',
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
  routeLabel: 'Greater Sudbury',
  title: 'Vibe Coding and AI Agents Classes in Greater Sudbury | Online',
  description: 'Vibe coding and AI agents for Greater Sudbury teens and adults: AI tool age rules, Ontario school coding, and a check that bilingual City park records agree.',
  ogDescription: 'Ask about the same Sudbury park in English and in French and the City file can give two answers. Vibe coding and AI agents, taught with the checks that catch it.',
  twitterDescription: 'Vibe coding and AI agents for Greater Sudbury teens and adults, live online.',
  ogImageCourse: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals',
  verifiedOn: '23 October 2026',
  courseSchema: {
    name: 'Vibe Coding and AI Agents Classes for Greater Sudbury Learners',
    description: 'Live online vibe coding for Greater Sudbury teens aged 13 to 17 and AI agent courses for adults, in separate tracks, with consistency checks on bilingual data and answers cited by record ID.'
  },

  h1: 'Vibe coding and AI agents classes in Greater Sudbury',
  capsuleQ: 'How can a Greater Sudbury teen or adult learn vibe coding and AI agents?',
  capsule: 'Modern Age Coders teaches vibe coding and AI agents classes live online to Greater Sudbury learners. Thirteen to seventeen year olds enrol in Vibe Coding for Teens; grown-ups learn agents with Codex and Claude Code in a course closed to anyone under 18. Lessons are shared, fifteen to twenty per group, or private, and every agent answer has to name the record it used.',
  lead: 'Greater Sudbury takes in Sudbury itself and communities such as Lively, Chelmsford, Val Caron and Capreol, and its City publishes its parks list with every name and category in both English and French. Bilingual records invite a check that AI tutorials rarely mention. Vibe coding is asking an AI model to write code from plain words; an AI agent goes a step further and decides which tools to call to answer a question. Ask such an agent about a park in English and then in French, and on this file it can give two different answers for the same place, because a handful of records disagree with themselves. Below, we find those records by OBJECTID with three short checks, and explain why an agent should cite the ID it relied on. Further sections cover the minimum ages AI firms set, what local schools teach under the provincial curriculum, and how lesson times move when Eastern clocks change.',
  wa: 'Hello Modern Age Coders, I am in Greater Sudbury and would like a free first class in vibe coding or AI agents.',

  picks: {
    eyebrow: 'Course picks for Greater Sudbury',
    h2: 'Four courses for Greater Sudbury learners',
    intro: 'Teens and adults may use different AI tools, so they take different courses. Level is decided in the free first lesson.',
    items: [
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python, web and AI projects with assistants teens are allowed to use, where each answer the program gives can be traced to the data behind it.' },
      { course: 'python-complete-masterclass-teens', band: 'Teens, beginners', note: 'Strings, dictionaries and loops in hand-written Python, so a teen can read an assistant\'s code and spot where it assumes too much.' },
      { course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', band: 'Adults only, 18+', note: 'Coding agents on real repositories for working adults. Anthropic\'s age floor for Claude Code is 18, so teens are not admitted.' },
      { course: 'vibe-coding-for-college-fullstack-ai-dsa-career-course', band: 'Ages 18 and up', note: 'Full stack projects built with AI assistance for college students and career changers, with the data structures needed to judge the code.' }
    ]
  },

  sections: [
    {
      id: 'parks', tint: 'deep', eyebrow: 'Greater Sudbury data project',
      h2: 'One park, two languages, two answers: auditing the City\'s bilingual file',
      intro: 'The City of Greater Sudbury publishes its parks as open data: 406 rows, each with an English and a French name, category and address. Before letting an agent answer questions about it in either language, we checked that the two halves of each record agree. We wrote the checks and made the counts ourselves, on a copy of the CSV taken on 23 October 2026.',
      body: [
        { kind: 'table', caption: 'The file at a glance (our tally of the City of Greater Sudbury Parks / Parcs file, 406 rows)', head: ['What we counted', 'Result'], rows: [
          ['Largest English categories', 'Natural Park 92, Playground 83, Park 74, Tot Lot 70'],
          ['Community values', '23, with Sudbury on 206 rows'],
          ['English name Unnamed / French name Sans nom', '94 / 93'],
          ['Category pairs off the usual English and French pattern', '3'],
          ['Rows where only one language says the park is unnamed', '9'],
          ['French names or categories with stray spaces or line breaks', '21']
        ] },
        { kind: 'p', text: '<b>Why this matters for an agent:</b> a tool that looks parks up by French category would return OBJECTID 169 as a natural park, while the English record calls it a plain Park. Asked in English, the agent says one thing; asked in French, another. Neither answer is invented, which is what makes it hard to notice.' },
        { kind: 'p', text: 'The three checks, using only Python\'s standard library:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'p', text: 'What it printed:<code class="cg-mt-2">' + esc(OUT) + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The odd category pairs', p: 'OBJECTID 115 is a Tot Lot in English and Rue Redfern in French, a street name sitting in the category column. OBJECTID 123 is a Natural Park paired with Parc, and 169 a Park paired with Parc naturel. The pattern each one breaks was learned from the file itself, by majority.' },
          { h3: 'The odd name pairs', p: 'OBJECTID 65 is Unnamed in English but croissant Douglas in French. Five parks, including 265 Lively Greenspace and 273 Bell Grove, have English names and Sans nom in French. Three more, 364 to 366, say Unnamed - Lake Access and Sans nom, which a person may decide is consistent after all.' },
          { h3: 'Why a person decides', p: 'The checks find candidates, not verdicts. Whether Unnamed - Lake Access matches Sans nom is a judgement about meaning. A good audit lists every case with its ID and leaves that call to someone who can ask the City.' }
        ] },
        { kind: 'callout', h3: 'What an honest agent answer looks like', p: 'In our adult course, the lookup tool returns both languages and the OBJECTID, and the answer must quote the ID it used. When the two languages disagree, the agent says so: OBJECTID 169 is listed as Park in English and Parc naturel in French. An answer without an ID is rejected by the check, and so is one that reports only the language that was asked.' },
        { kind: 'p', text: 'Reused under the City of Greater Sudbury Open Data Licence, an adaptation of Ontario\'s Open Government Licence 1.0 whose grant covers commercial purposes (<a class="cg-inline-link" href="https://www.greatersudbury.ca/city-hall/open-data/licence/">licence</a>, <a class="cg-inline-link" href="https://opendata.greatersudbury.ca/datasets/e1f2c475a7d14e3dbc46715b8baed81a_4">dataset</a>). Contains information licensed under the Open Data Licence - City of Greater Sudbury. No endorsement by the City is implied.' }
      ]
    },
    {
      id: 'trust', tint: '', eyebrow: 'How we teach agents',
      h2: 'Agents need trustworthy ground, so we check the ground first',
      intro: 'Anthropic, writing about the agents it builds, observes that agents\' autonomy makes them ideal for scaling tasks in trusted environments. The word that matters is trusted. A bilingual file with records that contradict themselves is not yet a trusted environment, so we audit before we automate.',
      body: [
        { kind: 'table', caption: 'Four steps, in this order, for agents over real records (our method), each tied to an Ontario course idea', head: ['Step', 'What happens', 'Ontario link'], rows: [
          ['Audit', 'Check paired or repeated columns agree, and list every exception by ID', 'Grade 8: coding that analyses data to support a decision'],
          ['Clean or flag', 'Trim stray spaces; flag, never silently fix, contradictions', 'Grade 5 coding: conditional statements choose the path'],
          ['Build the tool', 'Return every field the answer needs, plus the record ID', 'ICS3C: students write and test computer programs'],
          ['Check the answer', 'Reject answers that drop the ID or hide a disagreement', 'ICD2O: weighing what AI does well and badly']
        ] },
        { kind: 'p', text: 'Vibe coding gets the same discipline in smaller doses. When a Greater Sudbury teen asks an assistant to look something up in the parks file, the class first asks what the lookup key is, whether it is clean, and what happens if English and French disagree. The assistant writes the code quickly; the learner decides whether it can be trusted.' },
        { kind: 'p', text: 'This is our owner\'s promise in practice: learners are trained to reason their way to a solution instead of copying one, and an AI\'s reply counts as one more thing to reason about. In Greater Sudbury that means every learner, teen or adult, finishes the parks exercise by explaining one flagged record in their own words and saying what they would ask the City.' }
      ]
    },
    {
      id: 'tools', tint: 'tint', eyebrow: 'Age rules for AI tools',
      h2: 'Which AI tools a Greater Sudbury teen may use',
      intro: 'Who may use an AI tool is decided by the firm that makes it. The rules below, as published on 22 October 2026, sort Greater Sudbury learners into our teen or adult courses.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'GitHub Copilot: from 13', p: 'GitHub requires account holders to be at least 13, and GitHub Education offers Copilot free to verified students. Teens in our course can use it.' },
          { h3: 'ChatGPT: with consent', p: 'Per OpenAI\'s help centre, anyone from 13 to 18 needs a parent\'s consent to use ChatGPT. A teen lesson brings it in only after that consent arrives.' },
          { h3: 'Claude and Claude Code: 18+', p: 'Anthropic\'s consumer terms carry an 18-and-over rule. That puts both tools in the adult course only, out of reach of every teen class.' }
        ] },
        { kind: 'p', text: 'Contests are stricter still: the Canadian Computing Competition bans generative AI, including AI features inside code editors, so contest practice happens with no assistant at all. Adults, meanwhile, learn agents on projects held in Git, reading every change before it is kept. Because these are company rules, we check them again before each course begins.' }
      ]
    },
    {
      id: 'school', tint: '', eyebrow: 'Ontario school context',
      h2: 'Where Greater Sudbury students meet code at school, in either language',
      intro: 'Publicly funded schools across the city teach to the provincial curriculum. Our summaries below draw on the Ontario curriculum site and on CEMC, consulted 22 October 2026.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Early grades', p: 'Ontario math introduces coding in Grade 1; by Grade 2 the code involves sequential and concurrent events, and by Grade 5 it adds conditional statements and other control structures, the same if and else used in the audit above.' },
          { h3: 'Grade 8', p: 'In Grade 8 the curriculum turns coding toward data that helps people make and explain decisions, which is a fair description of the park audit: it tells a person which records to question.' },
          { h3: 'High school', p: 'Grade 11 brings ICS3U and ICS3C, and the Grade 10 course ICD2O has students judge where AI helps and where it falls short. We tutor beside these courses; the credits themselves come only from school.' }
        ] },
        { kind: 'table', mt: true, caption: 'Waterloo contests open to Greater Sudbury students this school year, with CEMC\'s published dates', head: ['Contest', 'Language', 'Date'], rows: [
          ['Beaver Computing Challenge', 'English only', '9 to 20 November 2026'],
          ['Canadian Computing Competition', 'English and French', 'Wednesday 17 February 2027'],
          ['Euclid (final year of secondary school)', 'See CEMC', 'Tuesday 6 April 2027'],
          ['Fryer, Galois and Hypatia (Grades 9, 10, 11)', 'See CEMC', 'Wednesday 7 April 2027']
        ] },
        { kind: 'p', text: 'French-language school students can write the CCC in French; the Beaver challenge, by contrast, comes in English alone. CEMC says the Euclid contest is written annually by over 25,000 participants worldwide. All CEMC contests are entered through a school. Our <a class="cg-inline-link" href="/euclid-contest-preparation">Euclid preparation page</a> and <a class="cg-inline-link" href="/ccc-junior-guide">CCC Junior guide</a> have more.' }
      ]
    },
    {
      id: 'time', tint: 'tint', eyebrow: 'Class times',
      h2: 'Greater Sudbury clocks and India clocks, 2026 to 2027',
      intro: 'The city is on Eastern time. Its clocks go back on the first of November 2026 and ahead again in mid-March 2027, while India, home to our teachers, never moves.',
      body: [
        { kind: 'table', caption: 'A Tuesday 4:30 pm class in Greater Sudbury, seen from India (tzdb 2026e; our conversion)', head: ['Period', 'Greater Sudbury', 'India'], rows: [
          ['Before 1 November 2026', '4:30 pm, UTC-4', '2:00 am, Wednesday'],
          ['Winter, from 1 November 2026', '4:30 pm, UTC-5', '3:00 am, Wednesday'],
          ['After 14 March 2027', '4:30 pm, UTC-4', '2:00 am, Wednesday']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Fixed on your side', p: 'Your class keeps the same local time through both changes. We resend each schedule, in Eastern time, before the switch.' },
          { h3: 'Northeastern numbers', p: 'Numbers on the 705, 249 and 683 area codes are accepted in the booking form. Type ten digits, no leading 1.' },
          { h3: 'Mornings and evenings', p: 'A Saturday morning lesson in Sudbury lands in an Indian Saturday evening, so those slots rarely clash with anything.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first lookup to agents that cite their records',
    intro: 'The ages are only a guide; the first lesson shows where a Greater Sudbury learner really starts.',
    cols: [
      { band: 'Ages 13 and 14', h3: 'Lookups by hand', p: 'Python dictionaries, strings and loops typed without help, including keys that are not clean.', courses: ['python-complete-masterclass-teens', 'git-github-version-control-course-for-teens'] },
      { band: 'Ages 14 to 17', h3: 'Assisted and audited', p: 'Vibe coding with permitted assistants, plus data work that checks before it summarises.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 and up', h3: 'AI projects', p: 'Full stack and generative AI projects for college students and career changers.', courses: ['vibe-coding-for-college-fullstack-ai-dsa-career-course', 'complete-generative-ai-masterclass-college'] },
      { band: 'Working adults', h3: 'Cited agents', p: 'Coding agents on real repositories whose answers name the records they used. Adults only.', courses: ['codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Why should a Greater Sudbury learner code if an AI can answer the question?',
    intro: 'Because the AI can only answer from the data, and the data disagreed with itself.',
    p1: 'Nothing in the parks example involved a clever algorithm. It needed someone to think of comparing the English half of each record with the French half, to write three short checks, and to recognise that Unnamed - Lake Access and Sans nom might be the same thing after all. Models do not ask that kind of question unless someone who understands the data asks it first.',
    p2: 'That understanding is what our classes build. Teens work with assistants their age allows and adults with agents, and both audit before they automate, cite the record behind every answer, and explain their final code without help.',
    closer: 'In a city that keeps its records in two languages, checking that they agree is part of the code, not an extra.',
    blogAnchor: 'is coding still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online across Greater Sudbury, from Capreol to Lively',
    intro: 'No long drives across the city. Lessons are live on video, with a teacher who watches the learner\'s screen and asks them to explain what each line does.',
    cells: [
      { h3: 'Your schedule', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Groups and private', p: 'Group lessons seat fifteen to twenty people of one age band and level; private lessons are there for anyone, adults with their own data especially.' },
      { h3: 'Age tracks', p: 'Separate teen and adult courses follow from separate tool rules: what a fifteen-year-old may open is not what a thirty-year-old may.' },
      { h3: 'Across the North', p: 'North Bay and Timmins learners sit in these groups too, since the whole region shares Sudbury\'s Eastern time.' },
      { h3: 'What to have', p: 'A laptop or desktop, something to speak into, and internet good enough for video. Teens do not have to pay for any AI service.' },
      { h3: 'Begin free', p: 'Lesson one is complete and costs nothing; it closes with our suggested level. Payment details are not taken.' }
    ],
    spec: { title: 'No Sudbury centre', p: 'We have no premises in Greater Sudbury and do not claim any. Teaching is live and online from India, and we are not connected with the City of Greater Sudbury, the Ontario Ministry of Education or CEMC.' }
  },

  fees: {
    h2: 'Fees for Greater Sudbury learners',
    intro: 'Each figure below appears in the currency of wherever you are browsing from.',
    first: 'A full first lesson at no charge, with a placement at the end.',
    group: 'The monthly fee for a class of fifteen to twenty, eight live lessons a month.',
    private: 'The monthly fee for one-to-one lessons at times you choose.',
    closer: 'Sudbury fees are identical to fees in every other Canadian city. We bill nothing until the free lesson is over and you have chosen both course and time.'
  },

  reviewsH2: 'What students and families wrote about us on Google',

  book: {
    h2: 'Tell us about the Greater Sudbury learner',
    intro: 'Lesson one starts with an AI-written lookup whose answer changes with the language of the question. How a learner tracks down the reason shows us their level and which age track fits.',
    success: 'Thank you. The team will contact you soon about a first class for Greater Sudbury.'
  },

  faq: {
    h2: 'Vibe coding and AI agents in Greater Sudbury: questions',
    intro: 'Asked by Sudbury-area parents, teens and adult learners.',
    items: [
      { q: 'Can Greater Sudbury learners take your vibe coding classes?', a: 'Yes. Classes are live online with a teacher, so learners anywhere in Greater Sudbury join from home. Teens and adults learn in separate courses, and there is no local classroom.' },
      { q: 'What is vibe coding?', a: 'Telling an AI model in plain words what program you want and letting it write the draft. Our classes teach the part after that: checking, testing and understanding the code.' },
      { q: 'What does it mean for an agent to cite a record?', a: 'Its answer names the ID of the data it relied on, such as an OBJECTID in the City parks file, so a person can look it up and confirm it. Our checks reject agent answers that do not.' },
      { q: 'Can a Sudbury teenager use Claude Code with you?', a: 'No. Anthropic\'s age floor is 18, which confines Claude Code, and Claude itself, to our adult course.' },
      { q: 'Will my teenager have to open a ChatGPT account?', a: 'No. Consent from a parent is OpenAI\'s condition for users aged 13 to 18, so ChatGPT stays out unless you give it; GitHub Copilot, free to verified students, covers the gap.' },
      { q: 'Is there agent training for adults in Northern Ontario?', a: 'Yes, delivered online. Over-18s build agents with Codex and Claude Code on Git repositories, and each agent they write has to cite the records its answers rest on.' },
      { q: 'What did the bilingual audit find?', a: 'Three parks whose English and French categories do not match, including OBJECTID 115, whose French category is a street name, and nine where only one language calls the park unnamed. A person reviews each one.' },
      { q: 'Will a course with you count as an Ontario credit?', a: 'It will not: we do not grant Ontario credits. ICS3U, ICS3C, ICD2O and the rest are awarded by schools, and our lessons simply run beside them.' },
      { q: 'Can the CCC be written in French, and is AI allowed?', a: 'CEMC offers the CCC in English and French, on Wednesday 17 February 2027, through schools. AI tools are banned during the contest.' },
      { q: 'At what times can a Sudbury learner study?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Sudbury families get every schedule in their own Eastern time.' }
    ]
  },

  next: {
    eyebrow: 'More for Ontario',
    h2: 'Other pages for Greater Sudbury and Ontario learners',
    html: 'Our national overview lives at <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-canada">vibe coding and AI agents classes in Canada</a>; for Ontario as a whole see <a class="cg-inline-link" href="/coding-classes-in-ontario">coding classes in Ontario</a>. Families can read <a class="cg-inline-link" href="/vibe-coding-for-teens">vibe coding for teens</a>; adults may start with <a class="cg-inline-link" href="/agentic-coding-classes">agentic coding classes</a>.',
    waLabel: 'Send us a WhatsApp message'
  },

  footerHeading: 'Greater Sudbury and Ontario',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/coding-classes-in-ontario', label: 'Ontario' },
    { href: '/vibe-coding-and-ai-agents-classes-in-canada', label: 'Vibe coding in Canada' },
    { href: '/euclid-contest-preparation', label: 'Euclid preparation' },
    { href: '/ai-tools-age-guide', label: 'AI tools age guide' }
  ],

  personalityCss: `
.cg-root.cg-vaag .cg-hero h1 { font-weight: 700; letter-spacing: -0.014em; line-height: 1.07; }
.cg-root.cg-vaag .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-vaag .cg-eyebrow { letter-spacing: 0.1em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-vaag .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.01em; }
.cg-root.cg-vaag .cg-table caption { text-align: left; font-weight: 600; font-style: italic; }
.cg-root.cg-vaag .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-vaag #parks code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.8rem; line-height: 1.5; padding: 0.9rem 1rem; border-left: 3px solid var(--cg-accent); }
.cg-root.cg-vaag .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 0.8rem; }
`,

  dossier: {
    curriculumAuthority: 'Ontario curriculum service, read 22 October 2026: Grade 2, Grade 5 and Grade 8 C3.1 coding, ICS3U, ICS3C, ICD2O; CEMC BCC (English only), CCC (English and French), Euclid and FGH 2027 dates and the Euclid participation line, school entry; CCC rules on AI; Anthropic, OpenAI and GitHub age rules; Anthropic, Building effective agents (trusted environments). Greater Sudbury area codes and Eastern offsets from facts-geo.md.',
    localProject: 'City of Greater Sudbury Parks / Parcs (City of Greater Sudbury Open Data Licence, based on OGL Ontario 1.0), CSV downloaded 23 October 2026, 406 rows with English and French columns: our bilingual_audit.py (python -I) learns the usual category pairing by majority and flags OBJECTID 115 (Tot Lot / Rue Redfern), 123 (Natural Park / Parc) and 169 (Park / Parc naturel); flags 9 name pairs where only one language says unnamed (65 Unnamed / croissant Douglas; 265, 273, 290, 305, 334; 364 to 366); counts 21 French values with stray spaces or line breaks. Labelled as ours. Lesson family: consistency between paired columns before an agent answers.',
    requiredMentions: [
      'OBJECTID 115 is a Tot Lot in English and Rue Redfern in French',
      'croissant Douglas',
      '265 Lively Greenspace and 273 Bell Grove',
      'Unnamed - Lake Access',
      'Open Data Licence - City of Greater Sudbury',
      'trusted environments',
      'Northeastern numbers',
      'Capreol to Lively',
      'North Bay and Timmins',
      'Why a person decides'
    ],
    sources: [
      { claim: 'City of Greater Sudbury Parks / Parcs dataset.', url: 'https://opendata.greatersudbury.ca/datasets/e1f2c475a7d14e3dbc46715b8baed81a_4' },
      { claim: 'City of Greater Sudbury Open Data Licence.', url: 'https://www.greatersudbury.ca/city-hall/open-data/licence/' },
      { claim: 'Ontario curriculum: elementary coding, ICS3U, ICS3C, ICD2O.', url: 'https://www.dcp.edu.gov.on.ca/en/curriculum/elementary-mathematics' },
      { claim: 'CEMC contests: languages, 2026-27 dates.', url: 'https://cemc.uwaterloo.ca/contests' },
      { claim: 'CEMC Euclid contest.', url: 'https://cemc.uwaterloo.ca/contests/euclid' },
      { claim: 'OpenAI help centre: parental consent ages 13 to 18.', url: 'https://help.openai.com/' },
      { claim: 'Anthropic consumer terms: 18+.', url: 'https://www.anthropic.com/legal/consumer-terms' },
      { claim: 'Anthropic, Building effective agents.', url: 'https://www.anthropic.com/research/building-effective-agents' }
    ],
    rejectedClaims: [
      'Which language is right for each flagged record: not decided by us; flagged for a person to ask the City.',
      'Any figure about French speakers in Greater Sudbury: not sourced, not used.',
      'Any Greater Sudbury population: not used.',
      'Naming individual schools: the School Park rows are not discussed.',
      'That our classes earn Ontario credits: refused.',
      'Recommending Claude or Claude Code to anyone under 18: refused.',
      'Any affiliation with the City of Greater Sudbury, the ministry or CEMC.'
    ]
  }
};
