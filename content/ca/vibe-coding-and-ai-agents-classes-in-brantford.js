'use strict';
// Brantford, Ontario (cg- city page, Canada cluster Wave 2, row 147: vibe-coding-and-ai-agents-classes-in-<city>).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md, brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Spine: vibe coding and AI agents for Brantford teens and adults, taught as "know your key before you build an index".
// The local project indexes the City of Brantford's play equipment rows by FacilityID, the way an assistant usually does;
// 47 rows have a blank ID and collapse into one entry, so the draft reports 2 installs in 2017 instead of 22.
// Sources, read raw on 22 and 23 October 2026:
//  - Ontario curriculum (facts-schools-contests.md section 1): Grade 7 C3.1 "including code that involves events influenced
//    by a defined count and/or subprogram and other control structures"; Grade 6 Science A2.1 "write and execute code in
//    investigations and when modelling concepts, with a focus on obtaining input in different ways"; ICD2O "Students will
//    learn and apply coding concepts and skills to build hands-on projects and investigate artificial intelligence,
//    cybersecurity, and other emerging digital technologies"; OSSD STEM group includes "computer studies"; EQAO Grades 3
//    and 6 "May 4 - June 8, 2027"; MTH1W C2.1.
//  - CEMC: CCC Wednesday 17 February 2027; Senior Q1-2 "(e.g. sorting, searching)"; "5 questions.", "Score out of 75.";
//    BCC 9 to 20 November 2026; contests through a school. CCC rules: no generative AI.
//  - Tool terms: Anthropic 18+; OpenAI help centre parental consent 13 to 18; GitHub 13+ and Copilot free for verified
//    students. Anthropic, Building effective agents, appendix on tools: "Put yourself in the model's shoes. Is it obvious how
//    to use this tool, based on the description and parameters, or would you need to think carefully about it?"
//  - facts-geo.md: Brantford CSD 3529006, Brantford CMA; area codes 226, 382, 519, 548; America/Toronto changes on
//    1 November 2026 and 14 March 2027. No population used.
//  - City of Brantford open data (src-pilots/vibe-coding-and-ai-agents-classes-in-brantford/): City of Brantford Play
//    Equipment Areas, item 1bb46a36f0d54673b9f39c1151ae802c (owner CoBOpenData, groups "City of Brantford Open Data" and
//    "Open Data - Parks & Recreation"); hub CSV hub_play_equipment.csv (46,360 bytes, sha256 5fed1dfa...c730), 221 rows,
//    cross-checked with the FeatureServer query (221 features); layer editingInfo dataLastEditDate 1534270526703 =
//    14 August 2018. Licence: current hub footer "Open Data Licence" page item c3382064290946129d12fe7de7adaf64
//    (licence_newhub_c3382064_data.json): "This is version 1.0 of the Open Data License" + dash + "Brantford";
//    "including for commercial purposes. Use of any Information indicates your acceptance of these terms and conditions.";
//    attribution "Contains information licensed under the Open Data License" + dash + "Brantford." The item licenseInfo
//    says to refer to the Open Data Licence on the City's portal; brantford.ca open data page points to the portal footer.
// Our own calculations (play_key_check.py, python -I, play_key_check.out.txt; profile checks): 221 rows; 47 blank
//  FacilityID; 174 distinct IDs; draft index 175 entries; Year_Ins draft vs checked: 2017 2 vs 22, 2018 1 vs 17, 1990 62 vs
//  66; 37 of the 47 blank-ID rows were installed in 2017 or 2018; Year_Ins range 1990 to 2018, 1990 on 66 rows; Subtype
//  codes such as 2bay 61, SandP 25, Seni 25 with no code list in the layer; Accessible No 104, Yes 87, blank 27, n/a 2, " no" 1;
//  Status and Condition are bare integers with no domain. Location values for some blank-ID rows are cut short (Andrew,
//  Roswell, SpringG, Cameron).
// Lesson family: keys and indexes: an AI-written dictionary keyed on a column with blanks silently drops rows; reconcile
//  index size against row count.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const SCRIPT = esc(`# Brantford play equipment: a lookup keyed on FacilityID, and the row count that exposes it (our teaching example)
import csv
from collections import Counter

rows = list(csv.DictReader(open("hub_play_equipment.csv", encoding="utf-8-sig")))

# The draft an assistant often writes: index the rows by their ID, then count installs by year.
by_id = {r["FacilityID"].strip(): r for r in rows}
draft_years = Counter(r["Year_Ins"].strip() for r in by_id.values())

# The human checks: does the index still hold every row, and what did it throw away?
blank = [r for r in rows if not r["FacilityID"].strip()]
print("rows in file", len(rows), "| entries in the draft index", len(by_id), "| rows with a blank ID", len(blank))
checked_years = Counter(r["Year_Ins"].strip() for r in rows)
for year in ("2017", "2018", "1990"):
    print(year, "draft", draft_years[year], "checked", checked_years[year])
print("blank-ID rows installed 2017 or 2018:", sum(r["Year_Ins"].strip() in ("2017", "2018") for r in blank))`);

const OUT = `rows in file 221 | entries in the draft index 175 | rows with a blank ID 47
2017 draft 2 checked 22
2018 draft 1 checked 17
1990 draft 62 checked 66
blank-ID rows installed 2017 or 2018: 37`;

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'BRANTFORD', label: 'Brantford', blurb: 'Vibe coding and AI agents for Brantford teens and adults, with a City play equipment check that catches rows an AI index throws away.' },
  market: CA,
  slug: 'vibe-coding-and-ai-agents-classes-in-brantford',
  code: 'vaab',
  accent: '#685A9E',
  accentRationale: 'Brantford: a muted Grand River dusk violet, #685A9E, allocated for row 147 at least 6 RGB units from every site accent and 14 from the other Canada accents, and clear of the retired bright purple band; contrast 5.59 on the paper #FBF8F2 (5.26 and 4.81 on the darker tints), above 4.5 on all three',
  pageType: 'city',
  place: {
    name: 'Brantford',
    eyebrow: 'Brantford, Ontario',
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
  routeLabel: 'Brantford',
  title: 'Vibe Coding and AI Agents Classes in Brantford, Ontario',
  description: 'Vibe coding and AI agents for Brantford teens and adults: AI tool age limits, Ontario coding at school, and a City play equipment check that finds lost rows.',
  ogDescription: 'An AI-written index of Brantford\'s play equipment counted 2 installs in 2017. The file holds 22. Vibe coding and agents, taught with the checks that catch this.',
  twitterDescription: 'Vibe coding and AI agents for Brantford teens and adults, live online with real data checks.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '23 October 2026',
  courseSchema: {
    name: 'Vibe Coding and AI Agents Classes for Brantford Learners',
    description: 'Live online vibe coding for Brantford teens aged 13 to 17 and AI agent courses for adults, taught in separate age tracks, where every index and lookup an AI writes is checked against the row count.'
  },

  h1: 'Vibe coding and AI agents classes in Brantford',
  capsuleQ: 'Is there a way for Brantford teens and adults to learn AI-assisted coding with a teacher?',
  capsule: 'Modern Age Coders teaches vibe coding and AI agents classes live online to Brantford learners. Brantford teens aged 13 to 17 study Vibe Coding for Teens, and adults study AI agents in our Codex and Claude Code course, which is closed to anyone under 18. Pick a class of fifteen to twenty or private lessons; either way, an AI\'s code is only kept once its row counts reconcile.',
  lead: 'Brantford sits on the Grand River in southwestern Ontario, and its City publishes a list of every piece of play equipment in its parks. Ask an AI assistant to count that equipment by installation year and you will usually get a neat program that builds a dictionary keyed on the equipment ID. It runs, it prints a tidy table, and it quietly loses 46 rows, because 47 pieces of equipment have no ID at all and a dictionary keeps only one of them. Most of the lost rows are the newest installs, so the table says Brantford installed almost nothing in 2017. Vibe coding, asking a model to write your code, makes this kind of mistake easy to produce; agents, which also run the code and report on it, make it easy to believe. Below: the file, the draft, the two-line check, the AI tool age rules, what Ontario schools teach, and lesson times through Ontario\'s clock changes.',
  wa: 'Hello Modern Age Coders, I am in Brantford and would like a free first class in vibe coding or AI agents.',

  picks: {
    eyebrow: 'Course picks for Brantford',
    h2: 'Four courses for Brantford, by age',
    intro: 'The companies behind AI tools set age limits, and our courses follow them. Your first lesson settles the level.',
    items: [
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python, web and AI projects with assistants a teenager may use, where every table the code prints is reconciled against the raw data.' },
      { course: 'python-complete-masterclass-teens', band: 'Teens, first course', note: 'Dictionaries, lists and loops written by hand, including what happens when two rows share a key, before any assistant is involved.' },
      { course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', band: 'Adults only, 18+', note: 'Coding agents on real repositories for working adults. Anthropic allows Claude Code only from age 18, so the course is not open to teens.' },
      { course: 'full-stack-web-development-masterclass-college', band: 'Ages 18 and up', note: 'React, Node.js and deployment for adults, where database keys and indexes stop being theory and start costing real data.' }
    ]
  },

  sections: [
    {
      id: 'equipment', tint: 'deep', eyebrow: 'Brantford data project',
      h2: 'How many play structures did Brantford install in 2017? Two, says the AI index',
      intro: 'The City of Brantford\'s Play Equipment Areas file lists 221 pieces of park play equipment, with an ID, a park, a surface and an installation year. We wrote the program an assistant typically produces, then checked it. Everything below, code and counts, is ours, from the file downloaded on 23 October 2026.',
      body: [
        { kind: 'p', text: '<b>The draft\'s idea:</b> build a dictionary from FacilityID to row, then count the rows in it by Year_Ins. It is the standard way to remove duplicates, and assistants reach for it often. The problem is the key. Our count finds <b>47 rows with a blank FacilityID</b>. A dictionary can hold only one entry for the blank key, so 46 rows vanish without an error.' },
        { kind: 'p', text: 'The program, with the draft and the two checks side by side:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'p', text: 'Its output on the City\'s file:<code class="cg-mt-2">' + esc(OUT) + '</code>' },
        { kind: 'table', mt: true, caption: 'Installs by year: the AI-style index against the full file (our run, 23 October 2026)', head: ['Year_Ins', 'Draft index says', 'Full file says'], rows: [
          ['2017', '2', '22'],
          ['2018', '1', '17'],
          ['1990', '62', '66']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Check 1: size of the index', p: 'Compare the number of entries in the dictionary with the number of rows read. 175 against 221 is the alarm. It takes one line of code and catches every key collision, whatever caused it.' },
          { h3: 'Check 2: what was lost', p: 'List the rows the index dropped. 37 of the 47 blank-ID rows were installed in 2017 or 2018, so the lost data is not random: it is mostly the newest equipment, perhaps added before IDs were assigned. The file does not say why.' },
          { h3: 'Check 3: suspicious peaks', p: 'Even the full count has a question in it: 66 rows give 1990 as the install year, far more than any other year. That may be a real build-out or a placeholder for unknown dates. We flag it rather than chart it as fact.' }
        ] },
        { kind: 'callout', h3: 'Codes nobody has defined', p: 'Subtype holds short codes such as 2bay on 61 rows, SandP and Seni on 25 each, and Status and Condition are bare numbers. The layer carries no code list, so an AI that confidently expands Seni to senior or reads Condition 1 as excellent is guessing. Some Location values on blank-ID rows are also cut short, such as SpringG. Our rule: describe what the file holds, decode nothing it does not explain.' },
        { kind: 'p', text: 'The City\'s map service shows the layer\'s data last edited in August 2018, so this is an old snapshot rather than today\'s parks. Used under the Open Data License - Brantford, version 1.0, which allows use including for commercial purposes (<a class="cg-inline-link" href="https://brantfordopendata-brantford.hub.arcgis.com/pages/c3382064290946129d12fe7de7adaf64">licence</a>). Contains information licensed under the Open Data License - Brantford. The City of Brantford has not endorsed this page or our classes.' }
      ]
    },
    {
      id: 'keys', tint: '', eyebrow: 'What we teach',
      h2: 'Keys, counts and codes: three questions to ask any AI-written data program',
      intro: 'Most bugs in AI-written data code are not syntax errors. They are wrong assumptions about the data, stated in perfectly good Python. Brantford learners practise asking three questions before they accept a draft.',
      body: [
        { kind: 'table', caption: 'Three questions for AI-written data code (ours), with the Ontario school expectation each one builds on', head: ['Question', 'What the learner checks', 'Ontario connection'], rows: [
          ['Is the key really unique and always filled?', 'Count blanks and repeats in the key column before indexing on it', 'Grade 7 coding: code driven by a defined count and subprograms'],
          ['Do the counts add back up?', 'Rows in equals rows out, at every step of the program', 'MTH1W: coding to show understanding of variables and equations'],
          ['Does the code decode anything the data never defined?', 'Search the source for a code list before expanding any abbreviation', 'ICD2O: investigating AI and other emerging technologies']
        ] },
        { kind: 'p', text: 'For agents, the first question becomes a design rule for tools. Anthropic\'s guidance on writing tools for models asks builders to put themselves in the model\'s shoes and consider whether it is obvious how to use the tool from its description and parameters. A lookup tool documented as &ldquo;find equipment by ID&rdquo; is not obvious when 47 rows have no ID. In the adult course, Brantford learners rewrite such tools to say so in their description and to return every match, not the first one.' },
        { kind: 'p', text: 'This is how we keep the owner\'s promise: learners are taught to reason about a problem and solve it themselves, not to copy an answer, and output from an AI is treated as one more answer to check. A Grade 10 student in Brantford and a parks analyst in the same city both end the exercise by explaining, in their own words, where the 46 missing rows went.' }
      ]
    },
    {
      id: 'tools', tint: 'tint', eyebrow: 'Age limits on AI tools',
      h2: 'Which AI coding tools a Brantford teenager may use',
      intro: 'AI companies set their own minimum ages. We checked the relevant pages on 22 October 2026; this is how they shape our courses.',
      body: [
        { kind: 'table', caption: 'Age rules by tool (companies\' terms and help pages, read 22 October 2026)', head: ['Tool', 'Rule', 'Effect in our classes'], rows: [
          ['GitHub Copilot', 'GitHub accounts from age 13; Copilot is free to verified students via GitHub Education', 'Available to teens and adults'],
          ['ChatGPT', 'OpenAI requires parental consent for users aged 13 to 18', 'Teens use it only after a parent agrees'],
          ['Claude and Claude Code', 'Anthropic\'s minimum age is 18', 'Adult course only; never shown to teens'],
          ['AI help in the CCC', 'Forbidden by the contest rules, editor features included', 'Contest practice is done without assistants']
        ] },
        { kind: 'p', text: 'Two promises follow. A Brantford teen will never be asked to open an account that their age rules out, and an adult will learn agents on a project held in Git, where each change an agent makes is read before it is merged. These rules are the companies\' own and can change, so we check them again before each new course begins.' }
      ]
    },
    {
      id: 'school', tint: '', eyebrow: 'Ontario school context',
      h2: 'Where a Brantford student already meets code at school',
      intro: 'Publicly funded schools in Brantford follow the Ontario curriculum. We read the ministry\'s curriculum service, EQAO and CEMC on 22 October 2026; quoted words are theirs and summaries ours.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Grades 6 and 7', p: 'In Grade 6 science, students write and execute code in investigations, with a focus on obtaining input in different ways. In Grade 7 math, coding moves to events driven by a defined count or a subprogram, the first taste of functions.' },
          { h3: 'Grade 10: ICD2O', p: 'The newer Grade 10 course has students apply coding concepts to build hands-on projects and investigate artificial intelligence, cybersecurity and other emerging digital technologies.' },
          { h3: 'The diploma', p: 'Ontario\'s diploma rules for students starting Grade 9 in 2024 or later include a STEM group from which one compulsory credit is chosen, and computer studies is on that list. Credits come from school; we do not grant Ontario credits.' }
        ] },
        { kind: 'table', mt: true, caption: 'Dates for Brantford students, 2026 to 2027 (EQAO and CEMC, read 22 October 2026)', head: ['What', 'Organiser', 'When'], rows: [
          ['Beaver Computing Challenge', 'CEMC', '9 to 20 November 2026'],
          ['Canadian Computing Competition: 5 questions, scored out of 75', 'CEMC', 'Wednesday 17 February 2027'],
          ['Grade 3 and Grade 6 Reading, Writing and Mathematics', 'EQAO', '4 May to 8 June 2027']
        ] },
        { kind: 'p', text: 'CCC Senior questions start with sorting and searching, exactly where key and index mistakes like the Brantford one show up. Students enter CEMC contests through their school. See our <a class="cg-inline-link" href="/ontario-coding-curriculum-grades-1-to-8">Ontario coding curriculum guide</a> for the elementary years and <a class="cg-inline-link" href="/icd2o-digital-technology-course-explained">ICD2O explained</a> for Grade 10.' }
      ]
    },
    {
      id: 'time', tint: 'tint', eyebrow: 'Class times',
      h2: 'Brantford and India clocks across the school year',
      intro: 'Brantford is on Eastern time, which moves back an hour on 1 November 2026 and forward on 14 March 2027. Our teachers are in India, which does not change.',
      body: [
        { kind: 'table', caption: 'A Sunday 11 am Brantford class, in India time (tzdb 2026e offsets; our conversion)', head: ['Period', 'Brantford', 'India'], rows: [
          ['Until 1 November 2026', '11:00 am, UTC-4', '8:30 pm'],
          ['1 November 2026 to 14 March 2027', '11:00 am, UTC-5', '9:30 pm'],
          ['From 14 March 2027', '11:00 am, UTC-4', '8:30 pm']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Your time stays put', p: 'A Brantford class keeps its local time through both changes. We send the timetable again, in Eastern time, a few days before each switch.' },
          { h3: 'Local numbers', p: 'The form accepts numbers on the 519, 226, 548 and 382 area codes used in Brantford. Enter ten digits.' },
          { h3: 'Weekend mornings work', p: 'A Brantford weekend morning is an India evening, so weekend morning groups are straightforward for our teachers to run.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first dictionary to agents with honest tools',
    intro: 'Bands are approximate; a Brantford learner\'s first session shows where they really begin.',
    cols: [
      { band: 'Ages 13 and 14', h3: 'Data structures by hand', p: 'Lists, dictionaries and loops typed without help, including what a duplicate key does.', courses: ['python-complete-masterclass-teens', 'git-github-version-control-course-for-teens'] },
      { band: 'Ages 14 to 17', h3: 'Assisted projects', p: 'Vibe coding with permitted assistants, with row counts reconciled at every step.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 and up', h3: 'Apps and data', p: 'Full stack apps and AI projects for students and career changers.', courses: ['full-stack-web-development-masterclass-college', 'vibe-coding-for-college-fullstack-ai-dsa-career-course'] },
      { band: 'Working adults', h3: 'Agents and their tools', p: 'Coding agents on real repositories, with tools documented for the model and checked by people. Adults only.', courses: ['codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Why should a Brantford learner code if an AI writes the program?',
    intro: 'Because the AI\'s program lost 46 rows and printed a table anyway.',
    p1: 'The Brantford index is a clean example of a mistake no model warned about. The code was idiomatic, short and fast, and it answered the question with a number that was off by a factor of eleven for 2017. Only someone who knew that a dictionary keeps one value per key, and who thought to count blanks, would have looked twice.',
    p2: 'That knowledge is what our classes build. Teens use assistants their age permits and adults use agents, but each learner reconciles row counts, refuses to decode undefined codes, and explains the finished program without any help.',
    closer: 'Knowing how a dictionary works is what tells you when an AI\'s dictionary is lying.',
    blogAnchor: 'is coding still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online for Brantford and the County of Brant',
    intro: 'Learners join from home. A live teacher sees their screen and asks them to explain each step before moving on.',
    cells: [
      { h3: 'Pick your hours', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Group or solo', p: 'A shared class of fifteen to twenty at one level, or private lessons with a single teacher, often chosen by adults with their own data.' },
      { h3: 'Split by age', p: 'Teen and adult courses never share a room, since the AI tools each group may use are different.' },
      { h3: 'Nearby places', p: 'Learners from Paris, Hamilton and Cambridge take the same online classes on the same Eastern clock.' },
      { h3: 'Equipment', p: 'A computer, a microphone and a steady connection are enough. The teen course needs no paid AI subscription.' },
      { h3: 'Free first session', p: 'The first session is a complete lesson at no charge and ends with a level and course suggestion. No card is asked for.' }
    ],
    spec: { title: 'No Brantford centre', p: 'We have no office in Brantford and do not claim one. Teaching is live over video from India, and we are not connected with the City of Brantford, the Ontario Ministry of Education, EQAO or CEMC.' }
  },

  fees: {
    h2: 'Fees for Brantford learners',
    intro: 'Three items, each shown in your currency by the price anchor.',
    first: 'A full first session, free, that ends with a level and a course suggestion.',
    group: 'The monthly fee for a shared class of fifteen to twenty, eight live sessions a month.',
    private: 'The monthly fee for private lessons with one teacher.',
    closer: 'Brantford pays the same monthly fee as every other Canadian city. Billing starts only after the free session, once you have picked a course and a slot.'
  },

  reviewsH2: 'Families and students on Google',

  book: {
    h2: 'Tell us about the Brantford learner',
    intro: 'The first session hands the learner a short AI-written program that loses data without an error. Tracking down where the rows went tells us the right level and age track.',
    success: 'Thank you. We will be in touch soon about a first class for Brantford.'
  },

  faq: {
    h2: 'Vibe coding and AI agents in Brantford: questions',
    intro: 'Questions Brantford families and adult learners send us.',
    items: [
      { q: 'Can I take vibe coding classes from Brantford?', a: 'Yes. All classes are live online with a teacher, so Brantford teens and adults join from home, in separate age tracks. We have no classroom in the city.' },
      { q: 'What does vibe coding mean?', a: 'Using plain language to get an AI model to write code for you. Our classes start there and spend most of the time on checking, testing and understanding the result.' },
      { q: 'How is an AI agent different from a chatbot?', a: 'A chatbot replies with text. An agent can also use tools, such as running code or reading a file, decide what to do next, and report a result. That makes checking its work more important.' },
      { q: 'Will my teen use Claude in the course?', a: 'No. Anthropic\'s minimum age is 18, so Claude and Claude Code stay in the adult course and are never offered to Brantford teens.' },
      { q: 'Is a ChatGPT account needed for teens?', a: 'No. OpenAI requires parental consent for users aged 13 to 18, so it is used only if a parent agrees. GitHub Copilot, free for verified students, is the usual alternative.' },
      { q: 'Do you teach AI agents to adults in Brantford?', a: 'Yes, online and only to adults: our Codex and Claude Code course works on real repositories in Git, with every agent change reviewed before it is kept.' },
      { q: 'What went wrong with the play equipment index?', a: 'The program keyed its dictionary on FacilityID, but 47 rows have a blank ID. The dictionary kept one of them and dropped 46, so 2017 showed 2 installs instead of 22. Comparing 175 entries with 221 rows exposed it.' },
      { q: 'Do your classes earn an Ontario credit?', a: 'No. We do not grant Ontario credits. Courses such as ICD2O and ICS3U, and the computer studies option in the diploma rules, are completed at school.' },
      { q: 'Is AI allowed in Waterloo computing contests?', a: 'Not in the CCC: its rules ban generative AI and AI features inside editors. CEMC lists the 2027 CCC for Wednesday 17 February 2027, and students enter through their school.' },
      { q: 'When do Brantford classes run?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Brantford\'s Eastern time is what every schedule shows.' }
    ]
  },

  next: {
    eyebrow: 'More for Ontario',
    h2: 'Other pages for Brantford and Ontario learners',
    html: 'The full Canadian picture is on <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-canada">vibe coding and AI agents classes in Canada</a>; the province is covered by <a class="cg-inline-link" href="/coding-classes-in-ontario">coding classes in Ontario</a>. Teens may like <a class="cg-inline-link" href="/coding-classes-for-teens-in-canada">coding classes for teens in Canada</a>, and adults <a class="cg-inline-link" href="/agentic-coding-classes">agentic coding classes</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Brantford and Ontario',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/coding-classes-in-ontario', label: 'Ontario' },
    { href: '/vibe-coding-and-ai-agents-classes-in-canada', label: 'Vibe coding in Canada' },
    { href: '/ontario-coding-curriculum-grades-1-to-8', label: 'Ontario coding, Grades 1 to 8' },
    { href: '/canada-math-and-coding-contest-calendar', label: 'Contest calendar' }
  ],

  personalityCss: `
.cg-root.cg-vaab .cg-hero h1 { font-weight: 710; letter-spacing: -0.018em; line-height: 1.06; }
.cg-root.cg-vaab .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-vaab .cg-eyebrow { letter-spacing: 0.1em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-vaab .cg-section-head h2 { max-width: 32ch; }
.cg-root.cg-vaab .cg-table caption { text-align: left; font-weight: 600; }
.cg-root.cg-vaab .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-vaab #equipment code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.8rem; line-height: 1.5; padding: 0.9rem 1rem; border-left: 3px solid var(--cg-accent); }
.cg-root.cg-vaab .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Ontario curriculum service, read 22 October 2026: Grade 7 math C3.1, Grade 6 science A2.1, MTH1W C2.1, ICD2O description; ontario.ca diploma rules (STEM group includes computer studies); EQAO Grades 3 and 6 window; CEMC CCC 2027 format and Senior question ladder, BCC dates, school entry; CCC rules on AI; Anthropic, OpenAI and GitHub age rules; Anthropic, Building effective agents (tool appendix). Brantford area codes and Eastern offsets from facts-geo.md.',
    localProject: 'City of Brantford Play Equipment Areas (Open Data License - Brantford 1.0), hub CSV downloaded 23 October 2026, 221 rows: our play_key_check.py (python -I) shows a dictionary keyed on FacilityID holding 175 entries because 47 rows have a blank ID, so installs read 2 for 2017 (22 in the file) and 1 for 2018 (17); 37 of the lost rows date from 2017 or 2018; 1990 appears on 66 rows; Subtype, Status and Condition codes are undefined; data last edited August 2018. Labelled as ours. Lesson family: keys and indexes.',
    requiredMentions: [
      '47 rows with a blank FacilityID',
      'entries in the draft index 175',
      '2017 draft 2 checked 22',
      '37 of the 47 blank-ID rows',
      'Open Data License - Brantford',
      'put themselves in the model',
      '519, 226, 548 and 382',
      'Check 1: size of the index',
      'Paris, Hamilton and Cambridge',
      'SpringG'
    ],
    sources: [
      { claim: 'City of Brantford Play Equipment Areas item and layer.', url: 'https://www.arcgis.com/home/item.html?id=1bb46a36f0d54673b9f39c1151ae802c' },
      { claim: 'City of Brantford Open Data License, version 1.0.', url: 'https://brantfordopendata-brantford.hub.arcgis.com/pages/c3382064290946129d12fe7de7adaf64' },
      { claim: 'City of Brantford open data page pointing to the portal licence.', url: 'https://www.brantford.ca/your-government/open-data/' },
      { claim: 'Ontario curriculum: Grade 7 math coding, Grade 6 science coding, ICD2O.', url: 'https://www.dcp.edu.gov.on.ca/en/curriculum/elementary-mathematics' },
      { claim: 'Ontario diploma requirements: STEM group.', url: 'https://www.ontario.ca/page/high-school-graduation-requirements' },
      { claim: 'EQAO 2026-27 windows.', url: 'https://www.eqao.com/the-assessments/' },
      { claim: 'CEMC CCC 2027.', url: 'https://cemc.uwaterloo.ca/contests/ccc' },
      { claim: 'Anthropic consumer terms: 18+.', url: 'https://www.anthropic.com/legal/consumer-terms' },
      { claim: 'Anthropic, Building effective agents: prompt engineering your tools.', url: 'https://www.anthropic.com/research/building-effective-agents' }
    ],
    rejectedClaims: [
      'Why 47 rows have no FacilityID: not stated by the City, not guessed beyond a marked possibility.',
      'That 1990 is a placeholder year: flagged as a possibility only.',
      'Meanings of Subtype codes, Status and Condition numbers: no code list in the layer, so none given.',
      'That ICD2O meets the technological education credit: not claimed; only computer studies in the STEM group is stated.',
      'Any Brantford population: not used.',
      'That our classes earn Ontario credits: refused.',
      'Recommending Claude or Claude Code to anyone under 18: refused.',
      'Any affiliation with the City of Brantford, the ministry, EQAO or CEMC.'
    ]
  }
};
