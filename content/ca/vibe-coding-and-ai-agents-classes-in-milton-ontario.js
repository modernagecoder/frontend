'use strict';
// Milton, Ontario (cg- city page, Canada cluster Wave 2, row 142: vibe-coding-and-ai-agents-classes-in-<city>).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md, brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Spine: Milton, Ontario (not Milton Keynes): vibe coding and AI agents for teens and adults, taught as "reconcile the
// counts before you trust a filter". The local project is an AI-style filter over the Town of Milton's Park Amenities
// layer that returns zero playgrounds, because STATUS holds both ACTIVE and Active; a count check catches it.
// Sources, read raw on 22 and 23 October 2026:
//  - Ontario curriculum (facts-schools-contests.md section 1): Grade 8 C3.1 "including code that involves the analysis of
//    data in order to inform and communicate decisions"; MTH1W C2.3 "read code to predict its outcome, and alter code to
//    adjust constraints, parameters, and outcomes"; ICD2O (2023, Open) "investigate current and emerging innovations in
//    digital technology, including automation and artificial intelligence, and assess their benefits and limitations";
//    ICS3U "Students will design software independently and as part of a team"; ICS4U prerequisite ICS3U; EQAO Grade 9
//    "January 12 - February 5, 2027" and results "to be included as part of a student's final course mark"; PPM 128
//    Grades 7 to 12 devices stored out of view during instructional time from September 1, 2024.
//  - CEMC (section 6): BCC 9 to 20 November 2026; CCC Wednesday 17 February 2027; through a school only; "students can look
//    for another local school that will allow them to join as a participant". CCC rules: no generative AI, "AI-based tools
//    within an IDE cannot be used." Skills Ontario 2027 May 3 and 4, Toronto Congress Centre, Coding contest, registration
//    through the institution's contact person.
//  - Tool terms: Anthropic consumer terms minimum 18; OpenAI help centre "we require that children ages 13 to 18 obtain
//    parental consent before using ChatGPT" (src-pilots/ai-classes-for-kids-in-canada/openai-ages.flat.txt); GitHub 13+.
//    Anthropic, Building effective agents: "Carefully craft your agent-computer interface (ACI) through thorough tool
//    documentation and testing".
//  - facts-geo.md: Milton CSD 3524009 in the Toronto CMA; area codes 289, 365, 742, 905; America/Toronto, UTC-4 until
//    1 November 2026, UTC-5 to 14 March 2027; India 9 h 30 min / 10 h 30 min ahead. No population used.
//  - Town of Milton open data (src-pilots/vibe-coding-and-ai-agents-classes-in-milton-ontario/): Park Amenities, item
//    1490c8632ba74ab299ea20424a27b5a9 (owner Milton_Maps), snippet "Park Amenities within the Town of Milton. Updated on a
//    daily schedule."; description "contains all of the active park amenities"; hub CSV park_amenities_hub.csv (19,565
//    bytes, sha256 8325b3ac...0173), 166 rows; cross-checked against the MapServer query (166 features). Licence: item
//    licenseInfo links to discover-milton.hub.arcgis.com/pages/disclaimer-and-terms-of-use; Hub Page 66bc793c data:
//    "The Information Provider grants you a worldwide, royalty-free, perpetual, non-exclusive licence to use the
//    Information, including for commercial purposes, subject to the terms below."; attribution "Contains information
//    licensed under the Open Government Licence" + en dash + "Milton." (written with a hyphen on the page).
// Our own calculations (milton_filter_check.py, python -I, milton_filter_check.out.txt): STATUS ACTIVE 120, Active 44,
//  Historic 2 (OBJECTID 162 and 163); draft vs checked filter: PLAYGROUND 0 vs 13, SPLASH PAD 11 vs 12, BASKETBALL 14 vs 20
//  (22 in file), TENNIS 15 vs 15, PICKLEBALL 0 vs 3; ADDRESS "805 SANTA MARIA BLVD" 21 and "805 SANTA MARIA BOULEVARD" 8;
//  NAME 136 distinct across 166 rows; no date column.
// Lesson family: reconciling counts to catch a silent filter (case and spelling variants) in AI-written data code.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const SCRIPT = esc(`# Milton park filter, draft versus checked: our teaching example, not Town code
import csv

rows = list(csv.DictReader(open("park_amenities_hub.csv", encoding="utf-8-sig")))

def draft_active(category):
    """The first draft, the kind an assistant writes: exact match on STATUS."""
    return [r for r in rows if r["CATEGORY"] == category and r["STATUS"] == "ACTIVE"]

def checked_active(category):
    """After the human check: compare STATUS without caring about case or spaces."""
    return [r for r in rows if r["CATEGORY"] == category and r["STATUS"].strip().upper() == "ACTIVE"]

# Human check 1: every row must land in exactly one STATUS bucket.
buckets = {}
for r in rows:
    buckets[r["STATUS"]] = buckets.get(r["STATUS"], 0) + 1
print("rows", len(rows), "status buckets", buckets, "sum", sum(buckets.values()))

# Human check 2: the draft and the checked filter must agree, category by category.
for cat in ["PLAYGROUND", "SPLASH PAD", "BASKETBALL", "TENNIS", "PICKLEBALL"]:
    total = sum(1 for r in rows if r["CATEGORY"] == cat)
    print(cat, "in file", total, "draft", len(draft_active(cat)), "checked", len(checked_active(cat)))`);

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'MILTON', label: 'Milton, Ontario', blurb: 'Vibe coding and AI agents for Milton, Ontario teens and adults, with a Town of Milton park data check that catches a silent AI filter.' },
  market: CA,
  slug: 'vibe-coding-and-ai-agents-classes-in-milton-ontario',
  code: 'vaam',
  accent: '#8A412D',
  accentRationale: 'Milton, Ontario: a muted escarpment-brick red, #8A412D, allocated for row 142 at least 6 RGB units from every site accent and 14 from the other Canada accents; contrast 6.89 on the paper #FBF8F2 (6.48 and 5.93 on the darker tints), above 4.5 on all three',
  pageType: 'city',
  place: {
    name: 'Milton',
    eyebrow: 'Milton, Ontario',
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
  routeLabel: 'Milton, Ontario',
  title: 'Vibe Coding and AI Agents Classes in Milton, Ontario | Online',
  description: 'Vibe coding and AI agent classes for Milton, Ontario teens and adults: tool age rules, Ontario school links, and a Town park data check that exposes an AI bug.',
  ogDescription: 'An AI-written filter told a Milton learner the town had zero active playgrounds. Counting the rows showed why. Vibe coding and agents, taught with checks.',
  twitterDescription: 'Vibe coding and AI agents for Milton, Ontario teens and adults, live online with real checks.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '23 October 2026',
  courseSchema: {
    name: 'Vibe Coding and AI Agents Classes for Milton, Ontario Learners',
    description: 'Live online vibe coding for Milton teenagers aged 13 to 17 and AI agent work for adults, in separate age-based courses, where AI-written code is reconciled against the data before it is trusted.'
  },

  h1: 'Vibe coding and AI agents classes in Milton, Ontario',
  capsuleQ: 'Where can someone in Milton learn vibe coding and AI agents with a real teacher?',
  capsule: 'Milton, Ontario learners study vibe coding and AI agents with Modern Age Coders in live online classes. Our teen course, Vibe Coding for Teens, covers ages 13 to 17; grown-ups enrol in the Codex and Claude Code course, open to over-18s only. Choose a group of fifteen to twenty or private lessons; AI-written code is checked against real data before anyone relies on it.',
  lead: 'This is Milton in Halton Region, Ontario, under the Niagara Escarpment, and not Milton Keynes in England. Vibe coding is the habit of asking an AI model for code in plain English; an AI agent is a program that lets the model choose and run tools by itself. Both are now part of how software gets written, and both produce mistakes that do not look like mistakes. On this page a three-line AI-style filter tells a Milton learner the town has no active playgrounds at all. The fix is not a better prompt. It is a habit: count the rows, make the counts add up, and only then believe the answer. Further down: the age limits each AI company sets for its tools, what Ontario schools already ask of students, and how class times shift when Ontario changes its clocks on 1 November 2026.',
  wa: 'Hello Modern Age Coders, I live in Milton, Ontario and would like a free first class in vibe coding or AI agents.',

  picks: {
    eyebrow: 'Course picks for Milton',
    h2: 'Four courses for Milton teens and adults',
    intro: 'Age decides which AI tools are allowed, so it decides the course first. The free class settles the level.',
    items: [
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python, web and AI projects built with assistants a teen may use, where every result is checked against the data before it goes in the project.' },
      { course: 'python-complete-masterclass-teens', band: 'Teens new to code', note: 'The Python a teen needs to read what an assistant writes: conditions, loops, dictionaries and files, all typed by hand first.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Teens, data', note: 'Cleaning and counting real files, the skill behind the Milton park check below, and the first machine learning models built on top of it.' },
      { course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', band: 'Adults only, 18+', note: 'Coding agents on real repositories for working adults. Anthropic\'s terms make Claude Code an 18-and-over tool, so this course takes no teens.' }
    ]
  },

  sections: [
    {
      id: 'parks', tint: 'deep', eyebrow: 'Milton data project',
      h2: 'The AI said Milton had no active playgrounds. The counts said otherwise',
      intro: 'The Town of Milton publishes a Park Amenities layer as open data: one row per sports field, court, playground or splash pad, with a STATUS column. We asked a simple question of it, wrote the kind of filter an assistant produces first, and then checked it. Script and figures are our own work, from a copy of the file taken on 23 October 2026.',
      body: [
        { kind: 'p', text: '<b>The question a learner types:</b> &ldquo;Write Python that lists the active playgrounds and splash pads in Milton.&rdquo; A typical first draft filters on <b>STATUS == &quot;ACTIVE&quot;</b>. It runs without an error, and for playgrounds it returns nothing.' },
        { kind: 'table', caption: 'Our count of the Town of Milton Park Amenities file (166 rows, downloaded 23 October 2026): the draft filter against the checked one', head: ['Category', 'Rows in the file', 'Draft filter finds', 'Checked filter finds'], rows: [
          ['PLAYGROUND', '13', '0', '13'],
          ['SPLASH PAD', '12', '11', '12'],
          ['BASKETBALL', '22', '14', '20'],
          ['TENNIS', '15', '15', '15'],
          ['PICKLEBALL', '3', '0', '3']
        ] },
        { kind: 'p', text: 'Why? The STATUS column holds the same word in two spellings. Our count: <b>120 rows say ACTIVE, 44 say Active, and 2 say Historic</b>. Every playground in the file is spelled Active, so an exact match on the upper-case word skips all 13. The draft is not broken in a way Python can see. It is wrong in a way only a person who looked at the data can see.' },
        { kind: 'p', text: 'The whole exercise in one standard-library Python file, run next to the downloaded CSV:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Check 1: buckets that add up', p: 'Count every distinct STATUS value and add the counts. They must come to 166, the number of rows. Seeing ACTIVE and Active listed as two buckets is the moment the bug becomes visible, before any filter is written.' },
          { h3: 'Check 2: draft against fix', p: 'Run the hasty filter and the careful one side by side, category by category. Where they agree, as for tennis, nothing is proven; where they differ, as for playgrounds, a decision is needed about what the data means.' },
          { h3: 'Check 3: read the two odd rows', p: 'The two Historic rows are OBJECTID 162 and 163, both a half basketball court at Community Park. The Town\'s description says the layer holds active amenities, so these two are worth a question to the publisher rather than a silent guess.' }
        ] },
        { kind: 'callout', h3: 'One more variant the counts reveal', p: 'Grouping by address splits one site in two: our count finds 805 SANTA MARIA BLVD on 21 rows and 805 SANTA MARIA BOULEVARD on 8. An agent asked how many amenities sit at that address would answer 21 or 8, both wrong, unless someone normalises the street type first. The file has no date column, so it cannot tell you when any amenity opened or closed.' },
        { kind: 'p', text: 'The layer is the Town of Milton\'s own, described by the Town as updated on a daily schedule, so counts on a later download may differ from ours. Used under the Open Government Licence - Milton, which permits use including for commercial purposes (<a class="cg-inline-link" href="https://discover-milton.hub.arcgis.com/pages/disclaimer-and-terms-of-use">terms of use</a>). Contains information licensed under the Open Government Licence - Milton. The Town does not endorse this page, and we use no Town crest or logo.' }
      ]
    },
    {
      id: 'method', tint: '', eyebrow: 'What we teach',
      h2: 'Vibe coding with checks: the routine Milton learners follow',
      intro: 'A model writes fluent code. Fluent is not the same as faithful to the data. These are the habits that close the gap, in the order we teach them.',
      body: [
        { kind: 'table', caption: 'Our routine for AI-assisted code on real data (ours), with the Ontario expectation each step echoes', head: ['Step', 'What the learner does', 'Ontario curriculum link'], rows: [
          ['Look before asking', 'Print the distinct values of every column the question touches', 'Grade 8 coding: code that involves &ldquo;the analysis of data in order to inform and communicate decisions&rdquo;'],
          ['Predict', 'Write down roughly what the answer should be before running anything', 'MTH1W C2.3: &ldquo;read code to predict its outcome&rdquo;'],
          ['Draft with AI', 'Ask the assistant for the code, using a tool your age allows', 'ICD2O: assess AI&rsquo;s benefits and limitations'],
          ['Reconcile', 'Make the counts add back to the total; compare draft and fix', 'MTH1W C2.3: &ldquo;alter code to adjust constraints, parameters, and outcomes&rdquo;'],
          ['Explain', 'Say in a sentence why the fix is right, without the AI\'s help', 'ICS3U: design software &ldquo;independently and as part of a team&rdquo;']
        ] },
        { kind: 'p', text: 'Agents raise the stakes, because an agent does not just suggest the filter, it runs it and reports the result as fact. Anthropic\'s own advice to people building agents is to &ldquo;carefully craft your agent-computer interface (ACI) through thorough tool documentation and testing&rdquo;. In plain terms: a tool that quietly returns zero is a trap for the model calling it. In our adult course, Milton learners write tools that report how many rows they matched and how many they skipped, so an empty answer always comes with its reason.' },
        { kind: 'p', text: 'This is the owner\'s promise put into practice: students are taught to think and to solve, not to copy an answer, and output from an AI is still only an answer until someone has reasoned about it. The same lesson is given to a Grade 9 student in Milton and to an adult analyst in the same town; only the tools and the size of the codebase change.' }
      ]
    },
    {
      id: 'tools', tint: 'tint', eyebrow: 'Age rules',
      h2: 'Which AI coding tools a Milton teen may use',
      intro: 'Each company sets its own minimum age. We read the terms on 22 October 2026, and they decide which of our courses a learner can join.',
      body: [
        { kind: 'table', caption: 'Minimum ages for AI coding tools, from the companies\' own pages (read 22 October 2026)', head: ['Tool', 'Age rule', 'In our teen classes', 'In our adult classes'], rows: [
          ['GitHub Copilot', 'GitHub accounts from 13; Copilot is free for verified students through GitHub Education', 'Yes, the main assistant', 'Yes'],
          ['ChatGPT', 'OpenAI: &ldquo;we require that children ages 13 to 18 obtain parental consent before using ChatGPT&rdquo;', 'Only once a parent has agreed', 'Yes'],
          ['Claude and Claude Code', 'Anthropic: 18 or older for its consumer services', 'Never', 'Yes, in the agents course'],
          ['Any assistant during the CCC', 'Contest rules ban generative AI and AI features inside the editor', 'Off for contest practice', 'Not applicable']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Milton parents', p: 'We will not ask a teen to open an account their age does not permit. If a lesson would use ChatGPT, a parent is asked first, because OpenAI itself requires consent between 13 and 18.' },
          { h3: 'Milton adults', p: 'Adults may use agentic tools that edit files and run commands. We teach them on a project kept in Git, with every agent change read as a diff before it is merged.' },
          { h3: 'Terms change', p: 'Age rules are set by each company and can be revised. We recheck them before each course starts; families should read the current page for any tool they sign up to.' }
        ] }
      ]
    },
    {
      id: 'school', tint: '', eyebrow: 'Ontario school context',
      h2: 'What a Milton student already meets at school, and the contests open to them',
      intro: 'Publicly funded schools in Milton follow the Ontario curriculum. Quotations below are from the Ontario Ministry of Education\'s curriculum service, read 22 October 2026; descriptions are ours.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Grade 9: coding in math', p: 'The de-streamed course MTH1W keeps coding inside mathematics. One expectation asks students to read code to predict its outcome, which is exactly the skill a vibe coder needs before accepting an assistant\'s suggestion.' },
          { h3: 'Grade 10: ICD2O', p: 'The open Grade 10 course added in 2023 asks students to investigate innovations including automation and artificial intelligence and to assess their benefits and limitations. Judging AI is in the course, not only using it.' },
          { h3: 'Grades 11 and 12: ICS3U, ICS4U', p: 'ICS3U has no prerequisite and asks for software designed alone and in teams; ICS4U follows it. We support these courses, but we do not grant Ontario credits; the school does.' }
        ] },
        { kind: 'table', mt: true, caption: 'Dates for Milton students in 2026 to 2027 (EQAO and CEMC, as published; read 22 October 2026)', head: ['What', 'Organiser', 'Date'], rows: [
          ['Beaver Computing Challenge (Grade 10 or below, no coding needed)', 'CEMC', '9 to 20 November 2026'],
          ['Grade 9 Assessment of Mathematics; results count in the course mark', 'EQAO', '12 January to 5 February 2027'],
          ['Canadian Computing Competition, Junior or Senior', 'CEMC', 'Wednesday 17 February 2027'],
          ['Skills Ontario Competition, including Coding (secondary)', 'Skills Ontario', '3 and 4 May 2027, Toronto Congress Centre']
        ] },
        { kind: 'p', text: 'CEMC contests are written through a school. If a Milton student\'s school is not taking part, CEMC suggests they look for another local school that will let them join as a participant. Skills Ontario entries also go through the school\'s contact person. Our <a class="cg-inline-link" href="/icd2o-digital-technology-course-explained">ICD2O explainer</a> and <a class="cg-inline-link" href="/mth1w-grade-9-math-explained">MTH1W explainer</a> go deeper into the two courses where AI and coding meet in Ontario.' }
      ]
    },
    {
      id: 'time', tint: 'tint', eyebrow: 'Class times',
      h2: 'Milton clocks change on 1 November 2026; India\'s do not',
      intro: 'Milton keeps Eastern time. Our teachers work in India, where clocks never change, so the gap between the two moves by an hour twice a year.',
      body: [
        { kind: 'table', caption: 'Milton and India time, autumn 2026 to spring 2027 (UTC offsets per tzdb release 2026e; the India column is our arithmetic)', head: ['Dates', 'Milton offset', 'India is ahead by', 'Saturday 10 am in Milton is, in India'], rows: [
          ['Until 1 November 2026', 'UTC-4', '9 hours 30 minutes', '7:30 pm'],
          ['1 November 2026 to 14 March 2027', 'UTC-5', '10 hours 30 minutes', '8:30 pm'],
          ['From 14 March 2027', 'UTC-4', '9 hours 30 minutes', '7:30 pm']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Your time first', p: 'Every class time we send is written in Eastern time. In the week before each change we resend the schedule, so a Milton family never has to convert anything.' },
          { h3: 'Halton numbers', p: 'Milton phone numbers on the 905, 289, 365 and 742 area codes are accepted by the form. Leave out the leading 1.' },
          { h3: 'A bug to build on purpose', p: 'Teens who code a class reminder with a fixed offset see it drift by an hour on 1 November 2026. Rewriting it with the America/Toronto zone is a short, memorable lesson in not trusting a constant.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From reading code to supervising agents',
    intro: 'Age bands are approximate; a Milton learner\'s first lesson decides where they actually start.',
    cols: [
      { band: 'Ages 13 and 14', h3: 'Code by hand', p: 'Python typed and debugged without an assistant, so later AI output can be read.', courses: ['python-complete-masterclass-teens', 'git-github-version-control-course-for-teens'] },
      { band: 'Ages 14 to 17', h3: 'Assisted projects', p: 'Vibe coding with permitted tools on web apps and data, with counts and tests before trust.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 and up', h3: 'Building with AI', p: 'Full stack and generative AI projects for students and career changers.', courses: ['vibe-coding-for-college-fullstack-ai-dsa-career-course', 'complete-generative-ai-masterclass-college'] },
      { band: 'Working adults', h3: 'Agents at work', p: 'Agentic coding on live repositories, with review and rollback. Adults only.', courses: ['codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Is learning to code still worth it for a Milton teen if AI can write it?',
    intro: 'More than before, because someone has to notice when the AI is confidently wrong.',
    p1: 'The Milton filter is a good test of the question. An assistant wrote it in seconds, and it ran. The only defence against its answer of zero playgrounds was a person who printed the distinct values of one column and saw two spellings of the same word. That is not a typing skill. It is curiosity about data, plus enough code to act on it.',
    p2: 'Our classes put most of their time there: asking what the data contains, deciding what the answer should look like, and checking the output against both. Teens practise with tools their age allows and adults with agents that act for them, but every learner is expected to explain the final code without help.',
    closer: 'A Milton student who reconciles the counts before trusting a result will keep that habit long after today\'s tools are replaced.',
    blogAnchor: 'is coding still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online for Milton, from Old Milton to the newer neighbourhoods',
    intro: 'Classes happen at home on a computer, with a live teacher who can see the learner\'s screen and hear their reasoning.',
    cells: [
      { h3: 'Scheduling', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Group or private', p: 'Groups of fifteen to twenty, matched by age group and level, or one teacher with one learner when an adult wants to work on their own project.' },
      { h3: 'Separate by age', p: 'Teen and adult groups never share a class, since the AI tools each may use are different under the companies\' terms.' },
      { h3: 'Around Halton and Peel', p: 'Learners in Oakville, Burlington, Halton Hills and Mississauga take the same classes on the same Eastern clock as Milton.' },
      { h3: 'Equipment', p: 'A laptop or desktop, a headset or microphone, and a reliable connection. Ontario\'s PPM 128 keeps phones out of view in Grades 7 to 12 lessons; ours run on a computer at home, outside school hours.' },
      { h3: 'First lesson free', p: 'The opening lesson is a full class, not a sales call, and it finishes with a placement. No payment details are taken.' }
    ],
    spec: { title: 'No Milton premises', p: 'We have no centre in Milton and claim none. Teaching is live over video from India, and we are not connected with the Town of Milton, Halton Region, the Ontario Ministry of Education, EQAO, CEMC or Skills Ontario.' }
  },

  fees: {
    h2: 'Fees for Milton learners',
    intro: 'Three lines, with your own currency printed by the price anchor.',
    first: 'An opening lesson at no cost, finishing with a level and a course suggestion.',
    group: 'The monthly fee for a group of fifteen to twenty in one age group, eight live classes a month.',
    private: 'The monthly fee for private lessons with one teacher, at times you pick.',
    closer: 'Milton families and adults pay what everyone else in Canada pays. Billing begins only after the free lesson, once a course and a time are agreed.'
  },

  reviewsH2: 'Google reviews from our families and students',

  book: {
    h2: 'Tell us about the Milton learner',
    intro: 'The first class opens with a small AI-written script that gives a wrong count. Working out why, and proving it, shows the teacher your level and the right course for your age.',
    success: 'Thank you. The team will contact you soon about a first class for Milton.'
  },

  faq: {
    h2: 'Vibe coding and AI agents in Milton: questions',
    intro: 'The questions Milton families and adult learners send us most often.',
    items: [
      { q: 'Do you run vibe coding classes for Milton, Ontario?', a: 'Yes. Every lesson is live on video with a teacher, from home. Milton teenagers are placed in the teen course and adults in separate adult courses; there is no physical classroom in the town.' },
      { q: 'Is this Milton in Ontario or Milton Keynes?', a: 'Milton in Halton Region, Ontario. Class times on this page are in Eastern time and the school details are Ontario\'s.' },
      { q: 'What exactly is an AI agent?', a: 'A program in which an AI model decides which tools to call, such as a search or a file editor, and in what order, then reports a result. Our classes teach how to build one and how to check what it reports.' },
      { q: 'Can a Milton teen use Claude Code in your course?', a: 'No. Anthropic requires users of its consumer services to be 18 or older, so Claude and Claude Code are part of the adult course only and are never suggested to teens.' },
      { q: 'Does my teen need a ChatGPT account?', a: 'No. OpenAI requires parental consent between 13 and 18, so we only use it after a parent agrees. Teens can use GitHub Copilot instead, free for verified students.' },
      { q: 'Is there an AI agents course for Milton adults?', a: 'Yes. The Codex and Claude Code course is for adults only, on real repositories kept in Git. Vibe Coding for College suits learners from 18 who want full stack projects with AI help.' },
      { q: 'What went wrong with the Milton playground filter?', a: 'The STATUS column spells the same word as ACTIVE on 120 rows and Active on 44, and every playground uses the second spelling. An exact match found none of the 13. Counting the distinct values first exposed it.' },
      { q: 'Does this count toward an Ontario credit?', a: 'No. We teach alongside courses such as ICD2O, ICS3U and ICS4U and do not grant Ontario credits; credits are earned at school.' },
      { q: 'Can my teen use AI help in the CCC?', a: 'No. The competition rules ban generative AI, including AI features in the editor. CEMC lists the 2027 CCC for Wednesday 17 February 2027, entered through a school.' },
      { q: 'When are classes held for Milton?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are sent in Eastern time and re-sent around each clock change.' }
    ]
  },

  next: {
    eyebrow: 'More for Ontario',
    h2: 'Other pages for Milton and Ontario learners',
    html: 'Start with <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-canada">vibe coding and AI agents classes in Canada</a> for the national view, or <a class="cg-inline-link" href="/coding-classes-in-ontario">coding classes in Ontario</a> for the province. Teens heading for computer science can read <a class="cg-inline-link" href="/ics3u-computer-science-help">ICS3U help</a>; adults can compare <a class="cg-inline-link" href="/coding-classes-for-adults-in-canada">coding classes for adults in Canada</a> and <a class="cg-inline-link" href="/ai-agents-explained">AI agents explained</a>.',
    waLabel: 'Ask us on WhatsApp'
  },

  footerHeading: 'Milton and Ontario',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/coding-classes-in-ontario', label: 'Ontario' },
    { href: '/vibe-coding-and-ai-agents-classes-in-canada', label: 'Vibe coding in Canada' },
    { href: '/icd2o-digital-technology-course-explained', label: 'ICD2O explained' },
    { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation' }
  ],

  personalityCss: `
.cg-root.cg-vaam .cg-hero h1 { font-weight: 720; letter-spacing: -0.02em; line-height: 1.05; }
.cg-root.cg-vaam .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-vaam .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; font-size: 0.76rem; text-transform: uppercase; }
.cg-root.cg-vaam .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.012em; }
.cg-root.cg-vaam .cg-table caption { text-align: left; font-weight: 600; }
.cg-root.cg-vaam .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-vaam #parks code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.8rem; line-height: 1.55; padding: 1rem; border-left: 4px solid var(--cg-accent); }
.cg-root.cg-vaam .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Ontario curriculum service, read 22 October 2026: Grade 8 C3.1 data analysis; MTH1W C2.3; ICD2O (2023) AI benefits and limitations; ICS3U and ICS4U; EQAO 2026-27 Grade 9 window counting in the course mark; PPM 128. CEMC 2026-27 BCC and CCC dates and the school-entry rule; Skills Ontario 2027; CCC rules on AI; Anthropic, OpenAI and GitHub age rules; Anthropic, Building effective agents (ACI quote). Milton area codes and Eastern offsets from facts-geo.md.',
    localProject: 'Town of Milton Park Amenities (Open Government Licence - Milton), hub CSV downloaded 23 October 2026, 166 rows: our script milton_filter_check.py (python -I) shows an exact-match STATUS filter finding 0 of 13 playgrounds and 0 of 3 pickleball courts because STATUS holds ACTIVE 120, Active 44 and Historic 2; the normalised filter finds all; address variants 805 SANTA MARIA BLVD (21) and BOULEVARD (8). Labelled as ours. Lesson family: reconciling counts to catch a silent filter.',
    requiredMentions: [
      '120 rows say ACTIVE, 44 say Active, and 2 say Historic',
      '805 SANTA MARIA BLVD',
      'OBJECTID 162 and 163',
      'Open Government Licence - Milton',
      'not Milton Keynes in England',
      'agent-computer interface (ACI)',
      '905, 289, 365 and 742',
      'Check 1: buckets that add up',
      'Draft filter finds',
      'Saturday 10 am in Milton'
    ],
    sources: [
      { claim: 'Town of Milton Park Amenities item: snippet, description, licence link.', url: 'https://www.arcgis.com/home/item.html?id=1490c8632ba74ab299ea20424a27b5a9' },
      { claim: 'Town of Milton disclaimer and terms of use: Open Government Licence - Milton.', url: 'https://discover-milton.hub.arcgis.com/pages/disclaimer-and-terms-of-use' },
      { claim: 'Ontario curriculum content API: MTH1W, Grade 8 math, ICD2O, ICS courses.', url: 'https://www.dcp.edu.gov.on.ca/en/curriculum/elementary-mathematics' },
      { claim: 'EQAO 2026-27 assessment windows; Grade 9 counts in the course mark.', url: 'https://www.eqao.com/the-assessments/' },
      { claim: 'CEMC contests 2026-27 and how contests work.', url: 'https://cemc.uwaterloo.ca/contests/how-contests-work' },
      { claim: 'Skills Ontario Competition 2027.', url: 'https://www.skillsontario.com/skills-ontario-competition' },
      { claim: 'OpenAI help centre: parental consent ages 13 to 18.', url: 'https://help.openai.com/' },
      { claim: 'Anthropic consumer terms: minimum age 18.', url: 'https://www.anthropic.com/legal/consumer-terms' },
      { claim: 'Anthropic, Building effective agents: agent-computer interface.', url: 'https://www.anthropic.com/research/building-effective-agents' },
      { claim: 'IANA tzdb: America/Toronto changes in 2026-27.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any Milton or Halton population figure: not used.',
      'Why two rows say Historic in a layer described as active amenities: not explained by the Town, so not guessed.',
      'Opening or closing dates of amenities: the layer has no date column.',
      'Public Art layer: rejected because its artist column names private people.',
      'That our classes earn an Ontario credit: refused; we do not grant Ontario credits.',
      'Recommending Claude or Claude Code to anyone under 18: refused.',
      'Any affiliation with the Town of Milton, Halton Region, the ministry, EQAO, CEMC or Skills Ontario.'
    ]
  }
};
