'use strict';
// Lethbridge, Alberta (cg- city page, Canada cluster Wave 2, row 128: ai-and-python-classes-for-teens-in-<city>).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md, brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Spine: a Lethbridge teen lives under Alberta's curriculum renewal (draft science 7 to 9 with AI and computer science, its
// pilot and implementation years), Alberta's diploma exam weighting and digital PATs, and Alberta's new all-year UTC-6 clock;
// CEMC contests framed as "not tests or exams"; the AI tool age rules; and a decision-stump classifier with precision and
// recall on the City of Lethbridge street network. No claims about local schools; Alberta CTS computing courses UNVERIFIED,
// so none are named.
// Sources, read raw on 22 October 2026:
//  - alberta.ca "Curriculum: how we got here" (facts-schools-contests.md, ca/src/alberta/curriculum-how-we-got-here.html): in
//    the passage on the draft science 7 to 9 curriculum, CALM 10 and physical education and wellness 10: "By integrating topics
//    like artificial intelligence, computer science and money management, Alberta's renewed curriculum will help students
//    prepare for high-demand jobs in an evolving economy."; "Optional piloting of these draft curriculums will occur in 2027/28,
//    followed by mandatory implementation in 2028/29."; draft grades 7 to 9 mathematics: optional piloting in 2026/27 "ahead of
//    mandatory implementation in September 2027".
//  - alberta.ca diploma exams (ca/src/alberta/diploma-exams-overview.html): "The weighting of diploma exams returned to 30%
//    effective September 1, 2023."; "70% of the final mark comes from course work. The remaining 30% comes from the diploma
//    exam."; list includes Mathematics 30-1 and 30-2. PATs (pat.html): "Provincial Achievement Tests (PATs) are administered
//    annually to all Alberta students in grades 6 and 9."; "students write diploma exams and provincial achievement tests in a
//    digital environment rather than pencil and paper".
//  - Official Time Act RSA 2000 c O-5.7 (facts-geo.md): official time "6 hours behind Coordinated Universal Time"; Lethbridge
//    CMA; America/Edmonton UTC-6 all year, no change on 1 November 2026; area codes 368/403/587/825. No populations used.
//  - CEMC (ca/src/cemc/): "Our contests are not tests or exams. There is no passing or failing score."; "educators order CEMC
//    contests for over 300 000 students worldwide, reaching students in over 85 countries"; CCC "Wednesday, February 17, 2027";
//    "CCC participants may use C, C++, Python 2, Python 3, or Java."; "It is not possible for students to individually
//    register for a contest".
//  - OpenAI Help Center (openai-ages.flat.txt): "ChatGPT is not meant for children under 13, and we require that children ages
//    13 to 18 obtain parental consent before using ChatGPT." Anthropic Consumer Terms, Oct 8, 2025: "You must be at least 18
//    years old". CCC Online Grader rules: "All other Internet use is forbidden."; "generative AI such as CoPilot or ChatGPT".
//  - City of Lethbridge Open Data (src-pilots/ai-and-python-classes-for-teens-in-lethbridge/): item
//    3e6c0d16e3dd4c359b08d89523bb0a1f "Street Network", owner OpenLethbridge, licenseInfo "City of Lethbridge Open Data
//    License"; layer gis.lethbridge.ca/gisopendata/rest/services/OpenData/odl_streets/MapServer/0 (5,833 segments; fields
//    FDESC street type, SPEED, NumOfLanes, RedLight, SandPriority). Licence: hub page item 87f968e5b0d54e4fb32b7cb1bab7a326
//    "Open Data License" (licence-page.txt): "The City grants you a worldwide, royalty-free, non-exclusive license to use the
//    information"; "use the Information in any medium, mode or format for any lawful purpose"; "This is Version 2.0 of the City
//    of Lethbridge" Open Data License; non-endorsement clause. FLAG for the owner: the licence permits "any lawful purpose" and
//    has no non-commercial clause, but does not use the word "commercial" (an OGL-style variant, like London's in opendata.tsv).
// Our own calculations (lethbridge_stump.py run live with python -I, lethbridge_stump.out.txt; explore_tree.py on the saved
// raw pages): 4,830 Local, Collector or Arterial segments with a speed (Local 2,133, Collector 1,645, Arterial 1,052); seeded
// 75/25 split, 3,622 training and 1,208 test segments (247 arterial); "never say arterial" accuracy 79.6%, recall 0; learned
// stump "speed limit over 50" accuracy 88.7%, precision 99.1%, recall 44.9%; "sanding priority 1 or 2" accuracy 86.8%, precision
// 63.7%, recall 83.0%; a depth-two tree gave the same test predictions as the stump; arterial segments by posted speed: 50 km/h
// 532, 60 km/h 409; only 8 non-arterial segments are posted above 50.
// Lesson family: decision stumps and trees, class imbalance, accuracy versus precision and recall, the trade-off between rules.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SCRIPT = [
  'import json, random, urllib.request, urllib.parse',
  '',
  'URL = ("https://gis.lethbridge.ca/gisopendata/rest/services/OpenData/"',
  '       "odl_streets/MapServer/0/query?")',
  'ask = {"where": "FDESC IN (\'Local\',\'Collector\',\'Arterial\') AND SPEED IS NOT NULL",',
  '       "outFields": "FDESC,SPEED,NumOfLanes,RedLight,SandPriority",',
  '       "returnGeometry": "false", "orderByFields": "OBJECTID", "f": "json",',
  '       "resultOffset": 0, "resultRecordCount": 1000}',
  'roads = []',
  'while True:',
  '    batch = json.load(urllib.request.urlopen(URL + urllib.parse.urlencode(ask)))["features"]',
  '    if not batch:',
  '        break',
  '    for f in batch:',
  '        a = f["attributes"]',
  '        roads.append({"speed": a["SPEED"], "lanes": int(a["NumOfLanes"] or 0),',
  '                      "signal": a["RedLight"] is not None, "sand": a["SandPriority"],',
  '                      "arterial": a["FDESC"] == "Arterial"})',
  '    ask["resultOffset"] += len(batch)',
  '',
  'random.seed(2026)',
  'random.shuffle(roads)',
  'cut = len(roads) * 3 // 4',
  'train, test = roads[:cut], roads[cut:]',
  '',
  'QUESTIONS = {"speed limit over %d" % t: (lambda r, t=t: r["speed"] > t) for t in (30, 40, 50, 60)}',
  'QUESTIONS.update({"more than %d lane" % t: (lambda r, t=t: r["lanes"] > t) for t in (1, 2)})',
  'QUESTIONS["has a traffic signal"] = lambda r: r["signal"]',
  '',
  'def impurity(group):',
  '    p = sum(r["arterial"] for r in group) / max(1, len(group))',
  '    return len(group) * 2 * p * (1 - p)',
  '',
  'def split_cost(rule):',
  '    yes = [r for r in train if rule(r)]',
  '    return impurity(yes) + impurity([r for r in train if not rule(r)])',
  '',
  'def report(name, rule):',
  '    hit = [r for r in test if rule(r)]',
  '    tp = sum(r["arterial"] for r in hit)',
  '    every = sum(r["arterial"] for r in test)',
  '    right = sum(rule(r) == r["arterial"] for r in test)',
  '    print("%s: accuracy %.1f%%, precision %.1f%%, recall %.1f%%"',
  '          % (name, 100 * right / len(test), 100 * tp / max(1, len(hit)), 100 * tp / every))',
  '',
  'winner = min(QUESTIONS, key=lambda q: split_cost(QUESTIONS[q]))',
  'print(len(roads), "street segments;", len(train), "to learn from,", len(test), "to test")',
  'report("never say arterial", lambda r: False)',
  'report("learned rule \'" + winner + "\'", QUESTIONS[winner])',
  'report("sanding priority 1 or 2", lambda r: r["sand"] in ("1", "2"))'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'LETHBRIDGE', label: 'Lethbridge', blurb: 'Python and AI for Lethbridge teenagers: Alberta curriculum renewal with AI and computer science, diploma exams, UTC-6 all year, and a precision and recall project on City of Lethbridge streets.' },
  market: CA,
  slug: 'ai-and-python-classes-for-teens-in-lethbridge',
  code: 'aptl',
  accent: '#16520F',
  accentRationale: 'Lethbridge: a deep prairie green, #16520F, allocated for this row and kept at least 14 RGB units from the other Canada accents and 6 from every site accent; contrast 8.81 on the paper #FBF8F2, 8.29 and 7.58 on the two darker paper tints',
  pageType: 'city',
  place: {
    name: 'Lethbridge',
    eyebrow: 'Lethbridge, Alberta',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Alberta' },
      { type: 'Country', name: 'Canada' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }, { slug: 'coding-classes-in-alberta', name: 'Alberta' }],
  nav: [
    { label: 'Canada', href: '/coding-classes-in-canada' },
    { label: 'Alberta', href: '/coding-classes-in-alberta' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Lethbridge',
  title: 'AI and Python Classes for Teens in Lethbridge, AB | Online',
  description: 'Live online Python and AI for Lethbridge teens aged 13 to 18: Alberta curriculum renewal, diploma exams, the CCC, AI age rules and a Lethbridge street data model.',
  ogDescription: 'What Alberta\'s curriculum renewal says about AI and computer science, how diploma exams weigh, what UTC-6 all year means for live classes, and a precision and recall project on Lethbridge streets.',
  twitterDescription: 'Python and AI for Lethbridge teens, live online, with a decision-rule project on the City of Lethbridge street network.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Python and AI Classes for Teens in Lethbridge, Alberta',
    description: 'Python, machine learning, contest programming and senior math support for Lethbridge students aged 13 to 18, taught live online in a group or one to one on Alberta time.'
  },

  h1: 'AI and Python classes for teens in Lethbridge',
  capsuleQ: 'Where can a Lethbridge teenager learn Python and AI from a real teacher, live?',
  capsule: 'Modern Age Coders runs live online Python and AI classes for Lethbridge teenagers aged 13 to 18, either in a class of fifteen to twenty or with a private teacher. A typical path is Python for Teens, then AI and Machine Learning for Teens or CCC preparation, with Grade 12 math support for students facing Math 30-1. Classes are scheduled on Alberta time, which no longer changes, and the first one is free.',
  lead: 'Alberta is rewriting what its students learn, and artificial intelligence is now named in the plan. The province describes its renewed curriculum as integrating topics like artificial intelligence and computer science, with the drafts moving through pilot years before they become mandatory. For a Lethbridge teenager today that means school will talk more about AI, while the deep practice of building and testing programs still mostly happens outside class. This page quotes the Alberta government on the renewal, the diploma exams and the province&rsquo;s new all-year clock, explains how CEMC&rsquo;s contests work for a student in southern Alberta, sets out the AI tool age rules, and walks through a project in which our students teach a computer to recognise arterial roads from the City of Lethbridge&rsquo;s own street records, and then find out what it misses.',
  wa: 'Hello Modern Age Coders, I would like a free Python or AI class for a teenager in Lethbridge, Alberta.',

  picks: {
    eyebrow: 'Course picks for Lethbridge teens',
    h2: 'Four courses that fit a Lethbridge student between Grade 8 and Grade 12',
    intro: 'Three are coding courses; one supports the Grade 12 math that machine learning and university programmes lean on. The free class shows where to start.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Foundation', note: 'Real Python from the first program to functions, dictionaries and files, which is the toolkit the Lethbridge street project uses from start to finish.' },
      { course: 'ai-ml-masterclass-teens', band: 'Machine learning', note: 'Models judged by more than accuracy: precision, recall and honest test sets, as in the arterial road classifier on this page.' },
      { course: 'ccc-junior-and-senior-preparation-course', band: 'Contests', note: 'CCC-style problems we write ourselves, practised in timed sets with no AI help, so contest day feels familiar.' },
      { course: 'western-canada-grade-12-math-pre-calculus-12-math-30-1-course', band: 'Grade 12 math', note: 'Support for Math 30-1, the diploma course where the exam is 30 per cent of the final mark, taught beside the school course.' }
    ]
  },

  sections: [
    {
      id: 'alberta', tint: '', eyebrow: 'Alberta, 2026 to 2029',
      h2: 'What Alberta&rsquo;s curriculum renewal says about AI and computer science',
      intro: 'The quotes in this section are the Alberta government&rsquo;s, from alberta.ca as we read it on 22 October 2026. Where we explain what a line means for a teenager, we say so.',
      body: [
        { kind: 'table', caption: 'Alberta curriculum and assessment facts relevant to a Lethbridge teen (alberta.ca, read 22 October 2026; the third column is ours)', head: ['Topic', 'Alberta government wording', 'What we take from it'], rows: [
          ['AI in the renewal', '&ldquo;By integrating topics like artificial intelligence, computer science and money management, Alberta&rsquo;s renewed curriculum will help students prepare for high-demand jobs in an evolving economy.&rdquo;', 'Said of the draft science 7 to 9, CALM 10 and physical education and wellness 10 curriculums'],
          ['When those drafts arrive', '&ldquo;Optional piloting of these draft curriculums will occur in 2027/28, followed by mandatory implementation in 2028/29.&rdquo;', 'A teen in Grade 8 today may finish junior high before the change is compulsory'],
          ['Grades 7 to 9 math', 'Optional classroom piloting in 2026/27 &ldquo;ahead of mandatory implementation in September 2027&rdquo;', 'Math changes sooner than science'],
          ['Diploma exams', '&ldquo;70% of the final mark comes from course work. The remaining 30% comes from the diploma exam.&rdquo;', 'Math 30-1 and 30-2 are on the diploma list; the exam matters, but course work matters more'],
          ['Provincial tests', '&ldquo;Provincial Achievement Tests (PATs) are administered annually to all Alberta students in grades 6 and 9.&rdquo;, written &ldquo;in a digital environment rather than pencil and paper&rdquo;', 'Grade 9 students meet a digital provincial test the year before high school']
        ] },
        { kind: 'p', text: 'The renewal sentence is worth reading carefully, because it is easy to over-read. Alberta is saying that artificial intelligence and computer science are topics the renewed curriculum integrates, in drafts that are still being piloted, with the science drafts not mandatory until 2028/29. It is not saying that every Lethbridge junior high student will build a model next year. Families who want their teenager to do that, to write Python that learns from data and then test it honestly, have a few years before school catches up. That gap is where our lessons sit. We also note what we could not verify: Alberta&rsquo;s high school computing course descriptions sit on a site we could not read as plain text, so we do not describe them here.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Junior high', p: 'Grade 7 to 9 students start with complete Python programs and short data tasks, so that when AI appears in school science it is something they have already built a small piece of.' },
          { h3: 'Grade 10 and 11', p: 'Students move to algorithms and real datasets, and many try a first CCC paper. The street classifier below is a typical Grade 10 or 11 project with us.' },
          { h3: 'Grade 12', p: 'Math 30-1 carries a diploma exam worth 30 per cent of the final mark. Students heading for computer science often pair our math support with coding. See <a class="cg-inline-link" href="/math-30-1-tutor-alberta">Math 30-1 help</a>.' }
        ] },
        { kind: 'callout', h3: 'Alberta credits come from school', p: 'Our classes run alongside a student&rsquo;s school courses and we do not grant provincial credits; Alberta course credits and diploma exam marks come only through the school. We are not connected with Alberta&rsquo;s education ministry or with any Lethbridge school division.' }
      ]
    },
    {
      id: 'contests', tint: 'tint', eyebrow: 'Contests from southern Alberta',
      h2: 'CEMC contests for a Lethbridge teen: what they are, and what they are not',
      intro: 'CEMC at the University of Waterloo runs Canada&rsquo;s main school computing contest, the CCC. The quotes are CEMC&rsquo;s, read on 22 October 2026; the advice is ours.',
      body: [
        { kind: 'table', caption: 'CEMC contest facts for a student in Alberta (CEMC pages, read 22 October 2026; our advice in the right-hand column)', head: ['Question', 'CEMC&rsquo;s answer', 'Our advice'], rows: [
          ['Is it a test?', '&ldquo;Our contests are not tests or exams. There is no passing or failing score.&rdquo;', 'Write it for practice and for the feedback; nothing on a transcript depends on it'],
          ['Who else writes?', 'Educators order CEMC contests &ldquo;for over 300 000 students worldwide, reaching students in over 85 countries&rdquo;', 'Alberta students are writing the same papers as students across Canada and beyond'],
          ['Can I sign up myself?', '&ldquo;It is not possible for students to individually register for a contest&rdquo;', 'Ask a teacher at school to order the CCC early in the new year'],
          ['Which language?', '&ldquo;CCC participants may use C, C++, Python 2, Python 3, or Java.&rdquo;', 'Python 3 for almost every first-time writer'],
          ['When?', 'Wednesday 17 February 2027 for North and South America', 'On Alberta time, untouched by any clock change']
        ] },
        { kind: 'p', text: 'The first line in that table is the one we repeat most to anxious teenagers. A CEMC contest is a measuring tape, not a gate: a Grade 10 student who solves two Junior questions in February 2027 has learned exactly where they stand and what to practise next. Many of our Lethbridge students treat the CCC as one checkpoint in a longer year that also includes data projects and school courses. For students who outgrow the CCC, the USACO competition is another route; our <a class="cg-inline-link" href="/usaco-for-canadian-students">USACO page for Canadian students</a> covers it.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'No borrowed problems', p: 'We never copy CEMC problems or solutions into lessons. CEMC&rsquo;s free archive is for students to read independently; class time uses problems our teachers write.' },
          { h3: 'Practice with AI off', p: 'The CCC bans AI helpers outright, so contest practice with us happens in a plain editor from the first week, and students learn to debug by reading their own code.' },
          { h3: 'Start with Junior', p: 'Our <a class="cg-inline-link" href="/ccc-junior-guide">CCC Junior guide</a> explains the first paper. Students move up to Senior when Junior practice papers stop being a challenge.' }
        ] }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'City of Lethbridge data project',
      h2: 'Can one simple rule spot Lethbridge&rsquo;s arterial roads, and what does it miss?',
      intro: 'The City of Lethbridge publishes its street network with each segment&rsquo;s type, posted speed, lanes, signals and sanding priority. Our students hide the type, let a program learn which single yes-or-no question does most to pick out arterials, and then measure it three ways. Every figure here is our own result, not the City&rsquo;s.',
      body: [
        { kind: 'table', caption: 'Our results on the City of Lethbridge Street Network (4,830 Local, Collector and Arterial segments fetched 22 October 2026; 3,622 to learn from, 1,208 held back, 247 of them arterial)', head: ['Rule', 'Accuracy', 'Precision (when it says arterial, how often it is right)', 'Recall (share of real arterials it finds)'], rows: [
          ['Never say arterial', '79.6%', 'none (it never says arterial)', '0%'],
          ['Learned rule: speed limit over 50', '88.7%', '99.1%', '44.9%'],
          ['Hand rule: sanding priority 1 or 2', '86.8%', '63.7%', '83.0%']
        ] },
        { kind: 'p', text: 'Below is everything, written with Python&rsquo;s standard library only. The program pages through the City&rsquo;s street service 1,000 segments at a time, keeps only local, collector and arterial streets, shuffles them with a fixed seed, and tries seven candidate questions. For each it measures how mixed the two resulting groups are (the Gini impurity used in decision trees) and keeps the question that separates arterials most cleanly. Run on 22 October 2026, it printed the three rows above:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Accuracy can lie', p: 'Only about one segment in five is an arterial, so a rule that never says arterial is still right 79.6 per cent of the time while finding none of them. That is why we never judge a classifier by accuracy alone on an uneven dataset.' },
          { h3: '2. Precision against recall', p: 'The learned rule, a posted speed above 50, is almost never wrong when it fires, at 99.1 per cent precision, but it finds fewer than half the arterials, because 532 arterial segments are posted at 50. Sanding priority finds 83 per cent of them, at the cost of many false alarms.' },
          { h3: '3. Which mistake is worse?', p: 'There is no single right rule. If a wrong label is expensive, use the precise one; if missing an arterial is worse, use the one with more recall. Students write down a situation for each and defend their choice.' }
        ] },
        { kind: 'callout', h3: 'A deeper tree did not help', p: 'We also let the program ask a second question inside each branch, making a two-level decision tree. On this split it made exactly the same test predictions as the single rule. More model is not always more learning; sometimes the data simply does not hold the extra information. And notice that sanding priority is itself a decision someone made about each road, so a rule built on it partly copies an earlier human label rather than discovering anything new.' },
        { kind: 'p', text: 'Some details for careful readers. The layer holds 5,833 segments in all; we kept the 4,830 typed Local, Collector or Arterial with a speed recorded (2,133 local, 1,645 collector, 1,052 arterial) and left out ramps, private, provincial, county, park and gravel segments. Only 8 of the kept non-arterial segments are posted above 50, which is why the speed rule is so precise. Posted speed is a reasonable clue, not a definition: the City decides street types for its own planning reasons. The data is published under the City of Lethbridge Open Data License, Version 2.0, which grants &ldquo;a worldwide, royalty-free, non-exclusive license to use the information&rdquo; and lets users use it &ldquo;in any medium, mode or format for any lawful purpose&rdquo;. Source: City of Lethbridge, Street Network, <a class="cg-inline-link" href="https://opendata.lethbridge.ca/">Lethbridge Open Data Catalogue</a>. The City does not endorse this page or our classes.' }
      ]
    },
    {
      id: 'tools', tint: '', eyebrow: 'AI tools and teenagers',
      h2: 'Which AI tools a Lethbridge teen may use, by the companies&rsquo; own rules',
      intro: 'Each rule is copied word for word from the organisation behind it, as checked on 22 October 2026. The third column records what we do.',
      body: [
        { kind: 'table', caption: 'AI tool rules for under-18s (each organisation&rsquo;s own page or terms, checked 22 October 2026)', head: ['Tool or setting', 'The organisation&rsquo;s rule', 'How we handle it'], rows: [
          ['ChatGPT, OpenAI Help Center', '&ldquo;ChatGPT is not meant for children under 13, and we require that children ages 13 to 18 obtain parental consent before using ChatGPT.&rdquo;', 'Only with a parent&rsquo;s consent; every lesson stands without it'],
          ['Claude, Anthropic Consumer Terms (Oct 8, 2025)', 'A minimum age: &ldquo;You must be at least 18 years old&rdquo;', 'Never part of teen lessons'],
          ['During the CCC, CCC Online Grader rules', '&ldquo;All other Internet use is forbidden.&rdquo;, including &ldquo;generative AI such as CoPilot or ChatGPT&rdquo;', 'Contest practice without assistants']
        ] },
        { kind: 'p', text: 'The street project is a good test of what an AI tool adds for a teenager. Asked to classify Lethbridge roads, a chatbot would likely report a high accuracy and stop there. It would not, unless pushed, point out that a never-arterial rule scores 79.6 per cent, that the top-scoring simple rule misses most arterials posted at 50, or that sanding priority is a human label in disguise. Those three observations are the skill. We want a Lethbridge teen to be able to make them unprompted, so our students write and explain their own code first. A tool, where a parent consents, comes in later as a second opinion that gets checked like any other.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Consent comes first', p: 'Between 13 and 18, OpenAI wants a parent to consent. Families decide; we name in advance any lesson where it might be used, and none depends on it.' },
          { h3: 'Over-18 tools stay out', p: 'Claude is an adults-only product under Anthropic&rsquo;s terms. It is absent from teen lessons, and teenagers cannot join our adult agentic coding course.' },
          { h3: 'Their own work', p: 'We explain and review, and we do not write marked school assignments. A smaller program a student can defend beats a larger one they cannot.' }
        ] }
      ]
    },
    {
      id: 'time', tint: 'tint', eyebrow: 'Alberta time, all year',
      h2: 'Lethbridge keeps UTC-6 all year: live class times against India and Ontario',
      intro: 'Alberta&rsquo;s Official Time Act now defines official time as 6 hours behind Coordinated Universal Time, so Lethbridge does not change its clocks on 1 November 2026. India never changes; Ontario does. The sample hours show the gaps and are not a timetable.',
      body: [
        { kind: 'table', caption: 'Lethbridge (America/Edmonton) beside India and Ontario. Offsets from the Official Time Act and IANA tzdb 2026e; conversions are ours', head: ['Period', 'Lethbridge', 'India ahead by', 'Saturday 8 to 9:30 am in Lethbridge, in India', 'Weekday 5 to 6:30 pm in Lethbridge, in India', 'Ontario ahead by'], rows: [
          ['To 31 October 2026', 'UTC-6', '11.5 hours', '7:30 to 9 pm', '4:30 to 6 am, next day', '2 hours'],
          ['1 November 2026 to 13 March 2027', 'UTC-6, unchanged', '11.5 hours', '7:30 to 9 pm', '4:30 to 6 am, next day', '1 hour'],
          ['From 14 March 2027', 'UTC-6', '11.5 hours', '7:30 to 9 pm', '4:30 to 6 am, next day', '2 hours']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'One gap all year', p: 'With Alberta and India both fixed, a Lethbridge class time sits at the same India hour every week of the year. Long-term schedules stay put.' },
          { h3: 'Eastern events move', p: 'National webinars and contest briefings often run on Eastern time. After 1 November 2026 they are one hour ahead of Lethbridge, not two, so check the time again.' },
          { h3: 'Lethbridge numbers', p: 'Lethbridge phones use 403 and Alberta&rsquo;s overlay codes 368, 587 and 825. Type the ten digits in the form without a leading 1.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first program in Grade 8 to a classifier a Grade 12 student can argue for',
    intro: 'Treat the stages as a guide. We place students on evidence, the code they write in the free class, not on age.',
    cols: [
      { band: 'Grades 8 and 9', h3: 'Programs that work', p: 'Input, loops, lists and functions in full programs, with output predicted before every run.', courses: ['python-complete-masterclass-teens'] },
      { band: 'Grades 9 and 10', h3: 'Algorithms and the CCC', p: 'Searching, sorting and counting, and a first CCC Junior paper for students who want one.', courses: ['problem-solving-dsa-masterclass-teens', 'ccc-junior-and-senior-preparation-course'] },
      { band: 'Grades 10 and 11', h3: 'Data and decisions', p: 'Open data from Alberta cities, classifiers judged by precision and recall, honest test sets.', courses: ['data-science-course-for-teens-python-data', 'ai-ml-masterclass-teens'] },
      { band: 'Grade 12', h3: 'Math 30-1 and models', p: 'Grade 12 math support beside the diploma course, and a larger machine learning project of the student&rsquo;s own.', courses: ['western-canada-grade-12-math-pre-calculus-12-math-30-1-course', 'ai-ml-masterclass-teens'] }
    ]
  },

  ai: {
    eyebrow: 'Measure before trusting',
    h2: 'Why a Lethbridge teen should learn to measure a model before trusting AI',
    intro: 'Because the street rule looked excellent on accuracy and still missed most of what it was looking for.',
    p1: 'Precision and recall sound like jargon, but they are the plainest questions anyone can ask of a prediction: when it says yes, is it right, and of all the real cases, how many did it catch? A teenager who has measured both on a rule they wrote will ask the same questions of every AI system they meet, including the ones in the news.',
    p2: 'That is why our teaching runs in a fixed order. Frame the question, look at the data, write the steps, predict, run, measure, and argue. AI tools come later, within the age rules, as one more model to measure. Students who learn this way stop being impressed by a single big number.',
    closer: 'Contest day asks for the same habit: the CCC allows no AI at all, so every line must be understood by the person who typed it.',
    blogAnchor: 'why coding is still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online classes for Lethbridge, Coaldale and Taber',
    intro: 'Teaching is online, so a teen on the west side of Lethbridge and one in Coaldale or Taber share a lesson without a drive across the Oldman River.',
    cells: [
      { h3: 'Times', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Southern Alberta', p: 'Students from Coaldale, Taber, Raymond and the rest of southern Alberta join the same groups, all on Alberta time.' },
      { h3: 'Formats', p: 'A group of fifteen to twenty at one level, or a private teacher for a student working towards a CCC paper or a Math 30-1 exam.' },
      { h3: 'Code they own', p: 'Every project stays in the student&rsquo;s own files. Teachers explain and review; graded school work remains the student&rsquo;s.' },
      { h3: 'What to have ready', p: 'A computer that runs Python 3, a microphone and a dependable connection. We set Python up together in the first class if needed.' },
      { h3: 'First class free', p: 'A full lesson at no charge, with no card requested, closing with a recommended course and level.' }
    ],
    spec: { title: 'No Lethbridge office', p: 'Modern Age Coders has no premises in Lethbridge and claims none. Every class is live online, taught by teachers in India, on Alberta time.' }
  },

  fees: {
    h2: 'Fees for Lethbridge families',
    intro: 'Every fee is shown in the visitor&rsquo;s own currency, labelled with its code.',
    first: 'A full live lesson with no charge, ending with a placement and a course suggestion.',
    group: 'One monthly fee for eight live classes in a group of fifteen to twenty at one level.',
    private: 'One monthly fee for lessons with a private teacher at hours the family chooses.',
    closer: 'The fee in Lethbridge is the same as in any other Canadian city. Billing starts only after the free class, once a course and a schedule are agreed; see the pricing page for missed classes and holidays.'
  },

  reviewsH2: 'Parents and students on Google',

  book: {
    h2: 'Free first class for a Lethbridge teen: book it here',
    intro: 'Tell us the grade and any coding so far. Beginners leave the first class with a working program of their own; a more experienced student might start on the Lethbridge street data or a timed CCC-style problem of ours.',
    success: 'Thanks. Expect a message from our team about classes for Lethbridge.'
  },

  faq: {
    h2: 'Lethbridge parents and teens ask',
    intro: 'The questions we hear most from families in Lethbridge and southern Alberta.',
    items: [
      { q: 'Do you teach in person in Lethbridge?', a: 'No. All classes are live online, so Lethbridge teens join from home, in a group of fifteen to twenty or with a private teacher.' },
      { q: 'Is Alberta adding AI to the school curriculum?', a: 'Alberta says its renewed curriculum integrates topics like artificial intelligence and computer science. For the draft science 7 to 9 curriculum, it lists optional piloting in 2027/28 and mandatory implementation in 2028/29.' },
      { q: 'Do your classes earn Alberta credits?', a: 'No. We teach alongside school and do not grant provincial credits; credits and diploma exam marks come through the student\'s school.' },
      { q: 'How much does the Math 30-1 diploma exam count?', a: 'Alberta says 30 per cent of the final mark comes from the diploma exam and 70 per cent from course work.' },
      { q: 'Can my 15 year old use ChatGPT?', a: 'Only with parental consent, which OpenAI\'s help centre asks for from age 13 to 18. Our lessons never require ChatGPT.' },
      { q: 'Do you use Claude with teenagers?', a: 'No. Anthropic\'s terms require users to be at least 18, so Claude is not used with anyone younger.' },
      { q: 'Is the CCC a test my teen can fail?', a: 'No. CEMC says its contests are not tests or exams and have no passing or failing score. Students enter through a school.' },
      { q: 'Did Alberta stop changing the clocks?', a: 'Yes. Alberta\'s Official Time Act sets official time at 6 hours behind UTC, so Lethbridge stays on UTC-6 and keeps the same time when Ontario falls back on 1 November 2026.' },
      { q: 'When are classes for Lethbridge students?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. All times are confirmed in Alberta time.' },
      { q: 'Is the street project real City data?', a: 'Yes. It uses the City of Lethbridge\'s published street network, with the City\'s open data licence covering its use. Students build and measure the rule themselves; the City does not endorse our teaching.' }
    ]
  },

  next: {
    eyebrow: 'More for Alberta',
    h2: 'Other pages for Lethbridge and Alberta students',
    html: 'Start with <a class="cg-inline-link" href="/coding-classes-in-alberta">coding classes in Alberta</a>, then read <a class="cg-inline-link" href="/alberta-new-math-curriculum-explained">Alberta&rsquo;s new math curriculum explained</a>, <a class="cg-inline-link" href="/math-30-1-vs-math-30-2">Math 30-1 or Math 30-2</a> and <a class="cg-inline-link" href="/alberta-math-30-1-diploma-exam-prep">Math 30-1 diploma exam preparation</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Lethbridge and Alberta',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/coding-classes-in-alberta', label: 'Alberta' },
    { href: '/alberta-grade-9-math-pat-practice', label: 'Grade 9 PAT practice' },
    { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation' },
    { href: '/ai-and-machine-learning-classes-in-canada', label: 'AI and ML in Canada' }
  ],

  personalityCss: `
.cg-root.cg-aptl .cg-hero h1 { font-weight: 700; letter-spacing: -0.015em; line-height: 1.05; }
.cg-root.cg-aptl .cg-capsule { border-left: 2px solid var(--cg-accent); border-top: 2px solid var(--cg-accent); padding: 0.75rem 0.9rem; }
.cg-root.cg-aptl .cg-eyebrow { font-family: 'JetBrains Mono', ui-monospace, monospace; letter-spacing: 0.06em; font-size: 0.76rem; text-transform: uppercase; }
.cg-root.cg-aptl .cg-section-head h2 { max-width: 30ch; }
.cg-root.cg-aptl .cg-table caption { text-align: left; font-weight: 600; }
.cg-root.cg-aptl .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-aptl #project code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.77rem; line-height: 1.5; padding: 0.9rem 1rem; border-left: 6px solid var(--cg-accent); }
.cg-root.cg-aptl .cg-ladder-col { border-left: 2px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-aptl .cg-callout { border-left-width: 3px; }
`,

  dossier: {
    curriculumAuthority: 'alberta.ca curriculum renewal page (AI and computer science sentence in the draft science 7 to 9, CALM 10 and physical education and wellness 10 passage; piloting 2027/28 and mandatory 2028/29; grades 7 to 9 math mandatory September 2027); alberta.ca diploma exams (30 per cent weighting, 70/30 split, Math 30-1 and 30-2); alberta.ca PATs (grades 6 and 9, digital); Official Time Act (UTC-6) via facts-geo.md; CEMC (contests not tests, scale, no individual registration, CCC languages and 2027 date); OpenAI Help Center ages; Anthropic Consumer Terms (Oct 8, 2025); CCC Online Grader rules; facts-geo.md for 368/403/587/825.',
    localProject: 'City of Lethbridge Open Data, Street Network (City of Lethbridge Open Data License Version 2.0: worldwide, royalty-free, any lawful purpose; FLAG: no explicit commercial wording), 4,830 Local, Collector and Arterial segments with a speed, fetched with urllib on 22 October 2026 from 5,833 in the layer; our lethbridge_stump.py (python -I): seeded 75/25 split, 3,622 train and 1,208 test (247 arterial); never-arterial accuracy 79.6%; learned stump speed over 50: accuracy 88.7%, precision 99.1%, recall 44.9%; sanding priority 1 or 2: accuracy 86.8%, precision 63.7%, recall 83.0%; depth-two tree no better; 532 arterial segments posted at 50; 8 non-arterials above 50. Labelled as ours. Lesson family: decision stumps, class imbalance, precision and recall.',
    requiredMentions: [
      'Street Network',
      'Lethbridge Open Data Catalogue',
      'Version 2.0, which grants',
      'never-arterial rule scores 79.6 per cent',
      'because 532 arterial segments are posted at 50',
      'Only 8 of the kept non-arterial segments are posted above 50',
      'Optional piloting of these draft curriculums will occur in 2027/28, followed by mandatory implementation in 2028/29.',
      'for over 300 000 students worldwide, reaching students in over 85 countries',
      'Lethbridge phones use 403 and Alberta&rsquo;s overlay codes 368, 587 and 825',
      'how mixed the two resulting groups are (the Gini'
    ],
    sources: [
      { claim: 'alberta.ca curriculum renewal: AI and computer science; draft timelines.', url: 'https://www.alberta.ca/curriculum-how-we-got-here' },
      { claim: 'alberta.ca diploma exams: weighting and course list.', url: 'https://www.alberta.ca/diploma-exams-overview' },
      { claim: 'alberta.ca PATs: grades 6 and 9, digital.', url: 'https://www.alberta.ca/provincial-achievement-tests' },
      { claim: 'Official Time Act RSA 2000 c O-5.7: UTC-6.', url: 'https://kings-printer.alberta.ca/documents/Acts/O05p7.pdf' },
      { claim: 'CEMC: contests are not tests; contests ordered worldwide.', url: 'https://cemc.uwaterloo.ca/contests/how-contests-work' },
      { claim: 'CEMC CCC page: languages and 2027 date.', url: 'https://cemc.uwaterloo.ca/contests/ccc' },
      { claim: 'OpenAI Help Center: ChatGPT ages and parental consent.', url: 'https://help.openai.com/en/articles/8313401-is-chatgpt-safe-for-all-ages' },
      { claim: 'Anthropic Consumer Terms: users must be at least 18.', url: 'https://www.anthropic.com/legal/consumer-terms' },
      { claim: 'CCC Online Grader rules: other internet use and generative AI forbidden.', url: 'https://cccgrader.com/rules.pdf' },
      { claim: 'City of Lethbridge: Street Network item.', url: 'https://www.arcgis.com/home/item.html?id=3e6c0d16e3dd4c359b08d89523bb0a1f' },
      { claim: 'City of Lethbridge Open Data License, Version 2.0 (hub page item).', url: 'https://www.arcgis.com/sharing/rest/content/items/87f968e5b0d54e4fb32b7cb1bab7a326/data?f=json' },
      { claim: 'IANA tzdb northamerica: America/Edmonton and America/Toronto offsets.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any claim about Lethbridge schools, school divisions or their results: none made, by the row instruction.',
      'Any Lethbridge population: StatCan not reachable live, so none printed.',
      'Alberta CTS computing science courses: not named; the source was unreadable as plain text (UNVERIFIED).',
      'That Lethbridge students will be taught to build AI models in school soon: refused; Alberta names AI as an integrated topic in draft curriculums with mandatory implementation in 2028/29 for science.',
      'That posted speed defines street type: refused; it is posed as a clue only.',
      'Address ranges or named streets from the layer: not reproduced.',
      'The Micro-Generation Capacity layer: not used; it lists meter addresses.',
      'That the City of Lethbridge licence uses the word commercial: not claimed; the page quotes its any-lawful-purpose wording.',
      'That our courses earn Alberta credits: refused; we do not grant provincial credits.',
      'Recommending Claude or any 18+ tool to a teenager: refused under Anthropic\'s terms.',
      'Any affiliation with CEMC, the Alberta education ministry, the City of Lethbridge or any school division.',
      'CEMC contest fees: left out of the copy (currency-neutral page).'
    ]
  }
};
