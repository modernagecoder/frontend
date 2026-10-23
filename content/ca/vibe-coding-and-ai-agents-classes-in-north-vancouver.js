'use strict';
// North Vancouver, British Columbia (cg- city page, Canada cluster Wave 2, row 143: vibe-coding-and-ai-agents-classes-in-<city>).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md, brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Spine: vibe coding and AI agents for North Shore teens and adults, taught as "check that a number is possible before you
// report it". The local project asks an AI-style script for the tallest street tree in the District of North Vancouver's
// inventory; it answers 615 metres. Our written-down plausibility limits flag it and two other suspect rows.
// Sources, read raw on 22 and 23 October 2026:
//  - BC curriculum (facts-schools-contests.md section 2): Computer Programming 11 "Key components are decomposition, patterns
//    and generalizations, abstraction, and algorithmic thinking."; Computer Science 11 decomposition "dividing complex problems
//    into parts that are easier to conceive, understand, and program"; ADST 10-12 list includes "Computer Information Systems
//    11", "Computer Programming 11", "Robotics 12"; ADST 6 computational thinking module "visual programming" (Kodu, Scratch).
//  - BC Gov News 2026AG0013-000209: "B.C. will adopt permanent, year-round daylight saving time after clocks shift forward an
//    hour on Sunday, March 8, 2026"; UTC-7. facts-geo.md: District of North Vancouver CSD 5915046 (the larger of the two North
//    Vancouver CSDs) in the Vancouver CMA; area codes 236, 257, 604, 672, 778; India 12 h 30 min ahead all year.
//  - CEMC: BCC 9 to 20 November 2026, "only require familiarity with concepts covered in the mathematics curriculum across all
//    Canadian provinces"; CCC Wednesday 17 February 2027; "5 questions." "Time allowed for completion is 3 hours."; Python
//    caveat "it may not always be possible to achieve a perfect score with a particular language choice"; through a school.
//  - Tool terms: Anthropic consumer terms 18+; OpenAI terms under 18 needs parent or guardian permission; GitHub 13+; GitHub
//    Education free Copilot for verified students. Anthropic, Building effective agents: "Agents can then pause for human
//    feedback at checkpoints or when encountering blockers."
//  - District of North Vancouver GEOweb (src-pilots/vibe-coding-and-ai-agents-classes-in-north-vancouver/): Street Trees
//    (EnvStreetTree), "An inventory of Registered Street Trees.", https://geoweb.dnv.org/Products/Data/SHP/EnvStreetTree_shp.zip
//    (568,583 bytes, sha256 5c84cc9a...bbaef, Last-Modified 17 Oct 2026); attribute table converted to CSV and reduced to 13
//    non-personal columns (EnvStreetTree_nonpersonal_subset.csv, staff usernames, house numbers and comments dropped).
//    Licence on https://geoweb.dnv.org/data/ (dnv-geoweb-data.html): "including for commercial purposes, subject to the terms
//    below."; "Contains information licensed under the Open Government Licence - North Vancouver."; the page says the District
//    offers "over 170 free data sets in many formats, all under our Open Data license". Personal Information is excluded.
// Our own calculations (tree_sanity.py, python -I, tree_sanity.out.txt): 4,289 rows; 3,671 with REMOVED_RE No; 3,634 standing
//  trees with a height; draft answer European Hornbeam 615 m (STREE01036, trunk 30 cm, BRAEMAR); one tree over our 40 m review
//  limit; 194 standing trees whose trunk is wider than our ratio limit allows; checked answer 30 m shared by a Red Alder and a
//  Big Leaf Maple; a Vine Maple with a 200 cm trunk and a blank ASSET_ID; Red Maple 545 standing; TAGNUMBER repeats (use
//  ASSET_ID). The 40 m and ratio limits are ours, not the District's.
// Lesson family: plausibility checks on numbers an AI reports (range and ratio limits fixed before looking).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const SCRIPT = esc(`# Tallest street tree: a quick draft, then our plausibility checks (teaching example for this page)
import csv

def num(text):
    try:
        return float(text)
    except ValueError:
        return None

trees = [r for r in csv.DictReader(open("EnvStreetTree_nonpersonal_subset.csv", encoding="utf-8"))
         if r["REMOVED_RE"] == "No" and num(r["HEIGHT_M"]) is not None]

# The draft: what a quick AI-written answer does. Take the maximum and report it.
top = max(trees, key=lambda r: num(r["HEIGHT_M"]))
print("draft answer:", top["COMMONNAME"], top["HEIGHT_M"], "m", top["ASSET_ID"])

# The checks: our own review limits, chosen by us and written down before looking at the answer.
REVIEW_HEIGHT_M = 40      # any street tree taller than this goes to a person
REVIEW_RATIO = 0.6        # trunk diameter in cm per metre of height above which we look again
flagged = [r for r in trees if num(r["HEIGHT_M"]) > REVIEW_HEIGHT_M]
odd_shape = [r for r in trees if num(r["DBH_CM"]) and num(r["HEIGHT_M"]) and
             num(r["HEIGHT_M"]) <= REVIEW_HEIGHT_M and num(r["HEIGHT_M"]) * REVIEW_RATIO * 10 < num(r["DBH_CM"])]
print("flagged over", REVIEW_HEIGHT_M, "m:", [(r["ASSET_ID"], r["COMMONNAME"], r["HEIGHT_M"]) for r in flagged])
print("trunk far too wide for the height:", len(odd_shape))
kept = [r for r in trees if r not in flagged]
tallest = max(kept, key=lambda r: num(r["HEIGHT_M"]))
print("checked answer:", tallest["HEIGHT_M"], "m")`);

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'NORTH VANCOUVER', label: 'North Vancouver', blurb: 'Vibe coding and AI agents for North Vancouver teens and adults, with a District street tree check that catches a 615 metre answer.' },
  market: CA,
  slug: 'vibe-coding-and-ai-agents-classes-in-north-vancouver',
  code: 'vaan',
  accent: '#7A5F42',
  accentRationale: 'North Vancouver: a muted cedar-bark brown, #7A5F42, allocated for row 143 at least 6 RGB units from every site accent and 14 from the other Canada accents; contrast 5.59 on the paper #FBF8F2 (5.26 and 4.81 on the darker tints), above 4.5 on all three',
  pageType: 'city',
  place: {
    name: 'North Vancouver',
    eyebrow: 'North Vancouver, British Columbia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'British Columbia' },
      { type: 'Country', name: 'Canada' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }, { slug: 'coding-classes-in-british-columbia', name: 'British Columbia' }],
  nav: [
    { label: 'Canada', href: '/coding-classes-in-canada' },
    { label: 'British Columbia', href: '/coding-classes-in-british-columbia' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'North Vancouver',
  title: 'Vibe Coding and AI Agents Classes in North Vancouver | Live',
  description: 'Vibe coding and AI agent classes for North Vancouver teens and adults: each tool\'s age rule, BC computing courses, and a street tree check on District data.',
  ogDescription: 'Ask an AI script for North Vancouver\'s tallest street tree and it says 615 metres. Learn vibe coding and agents the way that catches it.',
  twitterDescription: 'Vibe coding and AI agents for North Vancouver teens and adults, live online, with checks that catch impossible numbers.',
  ogImageCourse: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals',
  verifiedOn: '23 October 2026',
  courseSchema: {
    name: 'Vibe Coding and AI Agents Classes for North Vancouver Learners',
    description: 'Live online vibe coding for North Vancouver teens aged 13 to 17 and AI agent courses for adults, taught separately by age, with plausibility checks on every number an AI reports.'
  },

  h1: 'Vibe coding and AI agents classes in North Vancouver',
  capsuleQ: 'Who teaches vibe coding and AI agents to North Vancouver teens and adults?',
  capsule: 'Modern Age Coders teaches vibe coding and AI agents classes live online to learners in the District and the City of North Vancouver. Vibe Coding for Teens takes ages 13 to 17, while agent work with Codex and Claude Code is reserved for adults. Classes are group-based (fifteen to twenty) or private, and every number an AI produces is tested for plausibility before it is used.',
  lead: 'The North Shore has two North Vancouvers, the District and the City, and this page serves both. Vibe coding is building software by telling an AI model what you want; an AI agent is software in which the model also picks the tools and runs them. The danger in both is the same: a result that is fluent, specific and impossible. We show it here with the District\'s own street tree inventory. A short AI-style script, asked for the tallest street tree, replies with a European Hornbeam 615 metres high. Nothing crashes. The only protection is a person who decided in advance what a believable answer looks like. Further down you will find the checks themselves, the tools a teenager is permitted to sign up for, the computing courses offered in BC secondary schools, and lesson times now that the province has stopped changing its clocks.',
  wa: 'Hello Modern Age Coders, I am in North Vancouver and would like a free first class in vibe coding or AI agents.',

  picks: {
    eyebrow: 'Course picks for the North Shore',
    h2: 'Four courses for North Vancouver learners',
    intro: 'Age sets which tools a learner may use, which sets the course. The free lesson confirms the level.',
    items: [
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Projects in Python and on the web, built with assistants a teenager is allowed to use, where every output is sense-checked before it is kept.' },
      { course: 'python-complete-masterclass-teens', band: 'Teens starting out', note: 'Hand-written Python first: types, conditions, loops and functions, so that a teen can read and question what an assistant suggests.' },
      { course: 'ai-ml-masterclass-teens', band: 'Teens, models', note: 'How machine learning models are trained and why they can be confidently wrong, with real data and honest evaluation.' },
      { course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', band: 'Adults only, 18+', note: 'Agentic coding for working adults on real repositories. Under Anthropic\'s terms Claude Code is for people aged 18 or older, so the course admits adults only.' }
    ]
  },

  sections: [
    {
      id: 'trees', tint: 'deep', eyebrow: 'North Vancouver data project',
      h2: 'How tall is the tallest street tree? 615 metres, says the first draft',
      intro: 'The District of North Vancouver publishes an inventory of its registered street trees, with species, trunk diameter and height. We asked an AI-style script for the tallest one, then ran checks we had written down first. Everything in this section, code and numbers alike, is our own work on the District\'s file as downloaded on 23 October 2026.',
      body: [
        { kind: 'p', text: '<b>The prompt:</b> &ldquo;Using this CSV, which standing street tree in North Vancouver is the tallest?&rdquo; The obvious script filters out removed trees, takes the maximum of HEIGHT_M and prints it. It prints <b>European Hornbeam, 615 m, STREE01036</b>, a tree in Braemar with a 30 cm trunk. That is a data-entry slip in the file, almost certainly a misplaced digit, and a careless agent would report it as a fact about North Vancouver.' },
        { kind: 'table', caption: 'The draft answer against our checks (our run on the District file, 23 October 2026; review limits are ours, not the District\'s)', head: ['Step', 'What it found'], rows: [
          ['Rows in the file', '4,289 trees, of which 3,671 are marked not removed'],
          ['Standing trees with a height value', '3,634'],
          ['Draft answer (plain maximum)', 'European Hornbeam, 615 m, trunk 30 cm'],
          ['Check 1: any height over our 40 m review limit', 'Exactly one row, the 615 m hornbeam'],
          ['Check 2: trunk far too wide for the height (our ratio rule)', '194 standing trees, to be looked at by a person'],
          ['Checked answer after setting the one impossible row aside', '30 m, shared by a Red Alder and a Big Leaf Maple']
        ] },
        { kind: 'p', text: 'The whole exercise, with the limits stated in the code before the maximum is ever printed:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Limits before looking', p: 'The 40 m limit and the trunk ratio were written into the script first. Choosing limits after seeing the answer is how people talk themselves into believing it. Our limits are teaching choices, and a forester might pick different ones.' },
          { h3: 'Flag, do not delete', p: 'The hornbeam row is set aside and reported, not removed from the file. Its real height is unknown to us; the District is the only party who can correct it. An honest answer says that, rather than replacing 615 with a guess.' },
          { h3: 'Ratio checks find more', p: 'Range checks catch the absurd. Ratio checks catch the quietly odd: a Vine Maple listed with a 200 cm trunk and only 8 m of height, which also has no ASSET_ID. Either may be a typing slip; neither should feed a chart unread.' }
        ] },
        { kind: 'callout', h3: 'Keys matter as much as values', p: 'The TAGNUMBER column repeats across many rows, while ASSET_ID is unique where filled. An agent told to look up a tree by its tag number would pick the first match and sound sure of itself. In class, learners find the repeats themselves before they write any lookup tool.' },
        { kind: 'p', text: 'This file is the District of North Vancouver\'s, so it covers District streets, not the separate City of North Vancouver. Before using it we removed the columns holding staff usernames, house numbers and free-text comments; the licence does not cover personal information, and none is needed for this exercise. Reused under the Open Government Licence - North Vancouver, whose grant extends to commercial purposes (<a class="cg-inline-link" href="https://geoweb.dnv.org/data/">District data page and licence</a>). Contains information licensed under the Open Government Licence - North Vancouver. The District does not endorse this page.' }
      ]
    },
    {
      id: 'habits', tint: '', eyebrow: 'What we teach',
      h2: 'Five habits for trusting AI-written code, numbers and agent answers',
      intro: 'None of these is new to good programmers. What is new is how often they are needed, now that a model writes the first draft of almost everything.',
      body: [
        { kind: 'table', caption: 'Our habits for AI-assisted work, and where the BC curriculum already names the idea (curriculum wording quoted from the ministry, read 22 October 2026)', head: ['Habit', 'In practice', 'BC curriculum echo'], rows: [
          ['Decompose the question', 'Split &ldquo;tallest tree&rdquo; into: which trees count, which column, which unit', 'Computer Science 11: &ldquo;dividing complex problems into parts that are easier to conceive, understand, and program&rdquo;'],
          ['Fix limits in advance', 'Write the plausible range before running the code', 'Computer Programming 11 names abstraction and algorithmic thinking among the key components'],
          ['Prefer unique keys', 'Look rows up by an ID that never repeats', 'Not a curriculum line; this habit is ours'],
          ['Pause on surprises', 'Stop the run and ask a person when a value breaks a limit', 'Ours too, and Anthropic gives agents the same advice (below)'],
          ['Explain the final answer', 'State the answer, its caveat and its source in one sentence', 'Our rule for every exercise, at every age']
        ] },
        { kind: 'p', text: 'The fourth habit matters most for agents. Anthropic, describing how its own engineers build agents, writes that &ldquo;agents can then pause for human feedback at checkpoints or when encountering blockers&rdquo;. A value that breaks a limit is a blocker. In our adult course, North Vancouver learners build that pause into their agents, so an impossible number stops the run and asks a person, instead of flowing into a confident summary.' },
        { kind: 'p', text: 'Behind all five sits the owner\'s promise: we teach people to think through a problem and solve it, not to copy an answer, and an answer from an AI is no exception. A North Vancouver Grade 11 student and a North Shore data analyst will both be asked, at the end of each exercise, to explain why their answer is believable.' }
      ]
    },
    {
      id: 'tools', tint: 'tint', eyebrow: 'Age rules for AI tools',
      h2: 'What a North Vancouver teen may use, and what waits until 18',
      intro: 'AI companies set their own minimum ages. We checked the current terms on 22 October 2026; the course a learner joins follows from them.',
      body: [
        { kind: 'table', caption: 'AI coding tools and their age rules (each company\'s terms, read 22 October 2026)', head: ['If the learner is', 'May use in our classes', 'May not use'], rows: [
          ['13 to 17, no parental permission given', 'GitHub Copilot (GitHub accounts from 13; free for verified students)', 'ChatGPT and other OpenAI services, Claude, Claude Code'],
          ['13 to 17, a parent has given permission', 'GitHub Copilot, and OpenAI tools, whose terms ask for a parent\'s or guardian\'s permission under 18', 'Claude, Claude Code'],
          ['18 or older', 'All of the above, plus Claude and Claude Code (Anthropic sets 18 as its minimum age)', 'Nothing on this list'],
          ['Anyone, during the CCC', 'No AI assistant at all; the rules ban generative AI and editor plug-ins', 'Every assistant']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'North Vancouver parents', p: 'A teenager in our classes is only ever pointed to tools that accept their age. OpenAI products need a parent\'s go-ahead under 18, so we get that before any lesson that would use one.' },
          { h3: 'North Shore adults', p: 'Adults work with agents that edit files and run commands, on a project held in Git, and learn to read each agent change before accepting it.' },
          { h3: 'Rules can move', p: 'Companies revise their terms. We recheck them before each course begins, and we suggest families read the live page for any tool they adopt.' }
        ] }
      ]
    },
    {
      id: 'school', tint: '', eyebrow: 'BC school context',
      h2: 'Computing courses a North Vancouver student can take, and the contests beside them',
      intro: 'North Vancouver public schools follow the BC curriculum. The descriptions here are ours; quoted phrases are the ministry\'s or CEMC\'s, read on 22 October 2026.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Two course families', p: 'BC offers computing in two places: ADST courses such as Computer Information Systems 11 and Computer Programming 11 and 12, and Computer Science 11 and 12 listed under mathematics. A student can meet decomposition in both.' },
          { h3: 'Earlier grades', p: 'In Grades 6 and 7, students take at least three ADST modules a year, and the computational thinking module mentions visual programming such as Scratch. AI coding tools come later, at 13 and up.' },
          { h3: 'No credits from us', p: 'Our classes run alongside a school course, never instead of it. School assignments stay the student\'s own work, and we do not grant British Columbia credits.' }
        ] },
        { kind: 'table', mt: true, caption: 'CEMC computing contests for 2026 to 2027 (CEMC\'s North and South America dates, read 22 October 2026)', head: ['Contest', 'Who', 'Date', 'Format'], rows: [
          ['Beaver Computing Challenge', 'Levels up to Grade 9/10; no coding needed', '9 to 20 November 2026', 'Multiple choice, 45 minutes'],
          ['Canadian Computing Competition, Junior or Senior', 'Any grade, chosen by skill', 'Wednesday 17 February 2027', '5 questions in 3 hours']
        ] },
        { kind: 'p', text: 'CEMC says the Beaver Computing Challenge only requires familiarity with concepts covered in the mathematics curriculum across all Canadian provinces, which makes it a fair first contest for a North Vancouver Grade 9 student. For the CCC, CEMC warns that a perfect score may not always be possible with a particular language choice, Python included; students who aim high often learn C++ alongside. Both contests are entered through a school. Our <a class="cg-inline-link" href="/beaver-computing-challenge-guide">Beaver Computing Challenge guide</a> and <a class="cg-inline-link" href="/ccc-senior-guide">CCC Senior guide</a> cover them in detail.' }
      ]
    },
    {
      id: 'time', tint: 'tint', eyebrow: 'Class times',
      h2: 'Pacific time, all year, on the North Shore',
      intro: 'According to a BC government news release, the province adopted permanent daylight time once the clocks went forward in March 2026. Since then North Vancouver has sat seven hours behind UTC in every season.',
      body: [
        { kind: 'table', caption: 'Example conversions, not a published timetable (UTC-7 all year; India is 12 hours 30 minutes ahead; our arithmetic)', head: ['North Vancouver', 'India', 'Example learner'], rows: [
          ['Monday to Friday, 4:30 to 6:00 pm', '5:00 to 6:30 am, next day', 'A teen after school'],
          ['Monday to Friday, 7:30 to 9:00 pm', '8:00 to 9:30 am, next day', 'An adult after work'],
          ['Saturday or Sunday, 8:30 to 10:00 am', '9:00 to 10:30 pm, same day', 'Either']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Nothing to reset', p: 'When eastern Canada changes its clocks on 1 November 2026, North Vancouver does not. Class times set in October stay the same through the winter.' },
          { h3: 'North Shore numbers', p: 'Phone numbers starting 604, 778, 236, 672 or 257 work in the booking form. Give the ten digits only.' },
          { h3: 'From India', p: 'Our teachers are in India. Evenings and weekend mornings on the North Shore fall inside their working day.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From hand-written Python to agents that know when to stop',
    intro: 'Ages here are approximate. Placement depends on what a learner can explain on the day.',
    cols: [
      { band: 'Ages 13 and 14', h3: 'Foundations', p: 'Python without assistants, reading errors, and the first checks a learner writes on their own.', courses: ['python-complete-masterclass-teens', 'git-github-version-control-course-for-teens'] },
      { band: 'Ages 14 to 17', h3: 'Assisted building', p: 'Vibe coding with permitted assistants, plus machine learning taught with honest evaluation.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'ai-ml-masterclass-teens'] },
      { band: 'Ages 18 and up', h3: 'AI in projects', p: 'Generative AI, automation and full stack projects for students and career changers.', courses: ['complete-generative-ai-masterclass-college', 'python-ai-automation-masterclass-college'] },
      { band: 'Working adults', h3: 'Agents with checkpoints', p: 'Coding agents on real repositories, with pauses for human review built in. Adults only.', courses: ['codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', 'vibe-coding-for-college-fullstack-ai-dsa-career-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Why should a North Vancouver learner still learn to code?',
    intro: 'Because a 615 metre tree only looks wrong to someone who knows what to look for.',
    p1: 'The draft script in the tree example was correct Python. It did exactly what it was asked: find the largest value. The error lived in the data, and in the question nobody asked, which was whether the largest value made sense. Models are getting better at code every year; they are not getting any better at knowing which questions you forgot to ask.',
    p2: 'That is why our classes teach code and judgement together. A learner who can write the maximum by hand, and who knows that a street tree is not taller than the towers downtown, will catch the error whether the script was typed by a person, an assistant or an agent.',
    closer: 'Coding is how you check the machine; without it, you can only hope.',
    blogAnchor: 'is coding still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online for the North Shore, from Deep Cove to Lower Lonsdale',
    intro: 'No bridge, no SeaBus, no parking. Lessons are live with a teacher who follows the learner\'s screen and asks them to explain each step.',
    cells: [
      { h3: 'Times', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Group or private', p: 'Group classes of fifteen to twenty at the same age and level, or private lessons, which many adults prefer when they bring their own code.' },
      { h3: 'Teens apart from adults', p: 'Our teen and adult courses are separate because the companies\' terms give the two groups different tools.' },
      { h3: 'District and City', p: 'Learners from the District of North Vancouver, the City of North Vancouver and West Vancouver share the same classes on the same Pacific time clock.' },
      { h3: 'Set-up', p: 'A laptop or desktop, a microphone and a dependable connection. Teens need no paid AI subscription for our teen course.' },
      { h3: 'A free start', p: 'The first lesson is free and complete, and it ends with a placement. No card details are requested.' }
    ],
    spec: { title: 'No North Shore centre', p: 'We have no premises in North Vancouver and do not claim any. Teaching is live over video from India. We are not connected with the District or City of North Vancouver, the BC ministry or CEMC.' }
  },

  fees: {
    h2: 'Fees for North Vancouver learners',
    intro: 'Three items, each shown in your currency by the price anchor.',
    first: 'A trial lesson at no charge that ends with a placement.',
    group: 'The monthly fee for a group of fifteen to twenty, eight live classes a month.',
    private: 'The monthly fee for private lessons with your own teacher.',
    closer: 'North Shore learners pay the same monthly fee as learners anywhere else in Canada. You are billed only after the trial lesson, when a course and a time suit you.'
  },

  reviewsH2: 'Reviews left on Google by our students and families',

  book: {
    h2: 'Tell us about the North Vancouver learner',
    intro: 'The first lesson starts with a short AI-written script that reports an impossible number. Explaining why, and adding the check that would have caught it, shows the teacher your level.',
    success: 'Thank you. We will be in touch soon about a first class for North Vancouver.'
  },

  faq: {
    h2: 'Vibe coding and AI agents in North Vancouver: questions',
    intro: 'Answers to what North Shore families and adult learners ask us.',
    items: [
      { q: 'Do you offer vibe coding classes in North Vancouver?', a: 'Yes, online and live. Teens join the teen course, adults join adult courses, and every class is taught by a teacher over video. There is no North Vancouver classroom.' },
      { q: 'Is the page for the District or the City of North Vancouver?', a: 'Both. Classes are online, so learners from either municipality join the same groups. The data example uses the District\'s street tree file, which covers District streets.' },
      { q: 'What is vibe coding?', a: 'Getting an AI model to write code from a plain-language description. We teach it as the start of the job; checking, testing and explaining the result is the rest.' },
      { q: 'Can a 16-year-old in North Vancouver use Claude Code with you?', a: 'No. Anthropic sets 18 as the minimum age for its consumer services, so Claude and Claude Code are used in our adult course only and are never recommended to teens.' },
      { q: 'Does my teen need ChatGPT?', a: 'No. OpenAI wants a parent or guardian to agree before anyone under 18 uses its services, so we only use it once a parent agrees. Teens use GitHub Copilot instead, which is free for verified students.' },
      { q: 'Do you teach AI agents to adults on the North Shore?', a: 'Yes. Our Codex and Claude Code course is for adults only, on real repositories with version control. Learners build agents that pause for a person when something looks wrong.' },
      { q: 'Why did the script say a tree was 615 metres tall?', a: 'One row in the District file lists a European Hornbeam with a 615 m height and a 30 cm trunk, almost certainly a typing slip. A script that only takes the maximum repeats it. A height limit set in advance flags it.' },
      { q: 'Does this help with BC Computer Programming 11?', a: 'It supports it. The course names decomposition, patterns, abstraction and algorithmic thinking, which our checks practise. We work alongside the school course and do not grant British Columbia credits.' },
      { q: 'Are AI tools allowed in the Canadian Computing Competition?', a: 'No. Generative AI is banned, including AI features in an editor. CEMC lists the 2027 CCC for Wednesday 17 February 2027, written through a school.' },
      { q: 'What times suit North Vancouver?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. All times are given in Pacific time, which BC now keeps all year.' }
    ]
  },

  next: {
    eyebrow: 'More for British Columbia',
    h2: 'Other pages for North Vancouver and BC learners',
    html: 'The national guide is <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-canada">vibe coding and AI agents classes in Canada</a>, and the province page is <a class="cg-inline-link" href="/coding-classes-in-british-columbia">coding classes in British Columbia</a>. Families can read <a class="cg-inline-link" href="/vibe-coding-for-teens">vibe coding for teens</a> and the <a class="cg-inline-link" href="/ai-tools-age-guide">AI tools age guide</a>; adults may prefer <a class="cg-inline-link" href="/agentic-coding-classes">agentic coding classes</a> or the <a class="cg-inline-link" href="/model-context-protocol-mcp-course">Model Context Protocol course</a>.',
    waLabel: 'WhatsApp the team'
  },

  footerHeading: 'North Vancouver and BC',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/coding-classes-in-british-columbia', label: 'British Columbia' },
    { href: '/vibe-coding-and-ai-agents-classes-in-canada', label: 'Vibe coding in Canada' },
    { href: '/beaver-computing-challenge-guide', label: 'Beaver Computing Challenge' },
    { href: '/homeschool-coding-and-math-bc', label: 'Homeschool coding in BC' }
  ],

  personalityCss: `
.cg-root.cg-vaan .cg-hero h1 { font-weight: 680; letter-spacing: -0.012em; line-height: 1.1; }
.cg-root.cg-vaan .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-vaan .cg-eyebrow { letter-spacing: 0.09em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-vaan .cg-section-head h2 { max-width: 34ch; }
.cg-root.cg-vaan .cg-table caption { text-align: left; font-weight: 600; font-style: italic; }
.cg-root.cg-vaan .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-vaan #trees code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.8rem; line-height: 1.5; padding: 0.85rem 1rem; border-left: 3px solid var(--cg-accent); }
.cg-root.cg-vaan .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 0.8rem; }
`,

  dossier: {
    curriculumAuthority: 'BC curriculum, read 22 October 2026: Computer Programming 11 key components, Computer Science 11 decomposition, ADST 10-12 list, ADST 6-7 modules; BC Gov News 2026AG0013-000209 permanent UTC-7; CEMC 2026-27 BCC and CCC dates, BCC curriculum note, CCC format and language caveat; CCC rules on AI; Anthropic, OpenAI and GitHub age rules; Anthropic, Building effective agents (human feedback at checkpoints). Area codes and the two North Vancouver CSDs from facts-geo.md.',
    localProject: 'District of North Vancouver Street Trees (Open Government Licence - North Vancouver), shapefile zip downloaded 23 October 2026, attribute table reduced to 13 non-personal columns: our script tree_sanity.py (python -I) shows a plain maximum returning a 615 m European Hornbeam (STREE01036), our 40 m review limit flagging it, our trunk-ratio rule flagging 194 standing trees, and a checked answer of 30 m; a 200 cm Vine Maple with no ASSET_ID; TAGNUMBER repeats. Limits labelled as ours. Lesson family: plausibility checks on numbers.',
    requiredMentions: [
      'European Hornbeam, 615 m, STREE01036',
      'Red Alder and a Big Leaf Maple',
      '194 standing trees',
      'Open Government Licence - North Vancouver',
      'Vine Maple listed with a 200 cm trunk',
      'pause for human feedback at checkpoints',
      'Deep Cove to Lower Lonsdale',
      'Phone numbers starting 604, 778',
      'Limits before looking',
      'Computer Information Systems 11'
    ],
    sources: [
      { claim: 'District of North Vancouver GEOweb data page: Street Trees listing, licence, attribution.', url: 'https://geoweb.dnv.org/data/' },
      { claim: 'Street Trees shapefile download used.', url: 'https://geoweb.dnv.org/Products/Data/SHP/EnvStreetTree_shp.zip' },
      { claim: 'BC curriculum: Computer Programming 11 and Computer Science 11.', url: 'https://curriculum.gov.bc.ca/curriculum/adst/11/computer-programming' },
      { claim: 'BC permanent daylight time.', url: 'https://news.gov.bc.ca/releases/2026AG0013-000209' },
      { claim: 'CEMC BCC and CCC 2026-27.', url: 'https://cemc.uwaterloo.ca/contests/ccc' },
      { claim: 'Anthropic consumer terms: 18+.', url: 'https://www.anthropic.com/legal/consumer-terms' },
      { claim: 'OpenAI terms: parent or guardian permission under 18.', url: 'https://openai.com/policies/terms-of-use/' },
      { claim: 'GitHub Education: Copilot free for verified students.', url: 'https://github.com/education/students' },
      { claim: 'Anthropic, Building effective agents: human feedback at checkpoints.', url: 'https://www.anthropic.com/research/building-effective-agents' }
    ],
    rejectedClaims: [
      'The true height of tree STREE01036: unknown; flagged, not corrected.',
      'That the 40 m limit or the trunk ratio is a forestry standard: refused; both are our teaching choices.',
      'Staff usernames, house numbers and comments in the District file: dropped before use.',
      'City of North Vancouver data: not used; the District file covers District streets only, and the page says so.',
      'Any population figure for either North Vancouver: not used.',
      'That our classes earn BC credits: refused.',
      'Recommending Claude or Claude Code to anyone under 18: refused.',
      'Any affiliation with the District or City of North Vancouver, the ministry or CEMC.'
    ]
  }
};
