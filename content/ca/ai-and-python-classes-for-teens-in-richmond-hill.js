'use strict';
// Richmond Hill, Ontario (cg- city page, Canada cluster Wave 2, row 123: ai-and-python-classes-for-teens-in-<city>).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md, brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Spine: a Richmond Hill teen moves through Ontario's coding expectations (MTH1W, the Grade 9 EQAO math window, ICD2O,
// ICS3U, ICS4U), meets the CCC Junior paper by its own published numbers, learns which AI tools a 13 to 17 year old may
// use, and builds a k-nearest-neighbours classifier on York Region's street tree records. No claims about local schools.
// Sources, read raw on 22 October 2026:
//  - Ontario DCP API (facts-schools-contests.md, ca/src/ontario/): MTH1W C2.2 "create code by decomposing situations into
//    computational steps in order to represent mathematical concepts and relationships"; ICD2O description "Students will
//    learn and apply coding concepts and skills to build hands-on projects and investigate artificial intelligence,
//    cybersecurity, and other emerging digital technologies"; ICS4U "Students will use modular design principles to create
//    complex and fully documented programs"; ICS3U and ICS3C prerequisite None; ICS4U prerequisite ICS3U.
//  - EQAO (ca/src/ontario/eqao-assessments.html, eqao-grade9-math.html): Grade 9 Assessment of Mathematics window
//    "January 12 &#8211; February 5, 2027" (written in copy as 12 January to 5 February 2027); "Results of this assessment are
//    to be included as part of a student's final course mark".
//  - CEMC CCC page (ca/src/cemc/ccc.html): "Wednesday, February 17, 2027"; Junior Q1-2 "(e.g. basic loops and conditions)",
//    Q3-4 "(e.g. some combination of loops, conditions and counting)", Q5 "(e.g. recursion, two-dimensional arrays,
//    efficient/insightful algorithms)"; "Time allowed for completion is 3 hours"; "Score out of 75"; 2026 Junior mean 42.65
//    and 3421 contestants (table values); "Every participant scoring in the top 25% of all competitors receives a Certificate
//    of Distinction."; "born on or after July 1, 2007". how-contests-work: "It is not possible for students to individually
//    register for a contest"; "students can look for another local school that will allow them to join as a participant".
//  - CCC Online Grader rules (src-pilots/ccc-junior-guide/ccc-rules.txt): "generative AI such as CoPilot or ChatGPT".
//  - OpenAI Help Center "Is ChatGPT safe for all ages?" (src-pilots/ai-classes-for-kids-in-canada/openai-ages.flat.txt):
//    "ChatGPT is not meant for children under 13, and we require that children ages 13 to 18 obtain parental consent before
//    using ChatGPT." Anthropic Consumer Terms, effective Oct 8, 2025: "You must be at least 18 years old".
//  - facts-geo.md: Richmond Hill CSD in the Toronto CMA; area codes 289/365/742/905; America/Toronto, UTC-4 until
//    1 November 2026, UTC-5 to 14 March 2027 (IANA tzdb 2026e). No populations used.
//  - York Region Open Data (src-pilots/ai-and-python-classes-for-teens-in-richmond-hill/): item 293d80c24bf54a4f8ab66bddaeaab184
//    "Street Trees", owner YorkMunicipalGovt, layer ww8.yorkmaps.ca/.../OpenData/Biodiversity/MapServer/0. Item description:
//    "street trees within regional road right-of-ways"; "partial data available for Regional owned street trees in rural
//    areas". Item licenseInfo: 'Please refer to "York Region Open Data Licence"'. The hub site config (york-hub-site-config.json)
//    lists the PDF item 78cc02388af248c0b7a30eda6adfade0 as "Open Data Licence"; PDF text (york-open-data-licence.txt):
//    "Use the Information commercially"; optional credit "Contains public sector information made available under The
//    Regional Municipality of York's Open Data Licence"; "Ensure that You do not Use the Information in a way that suggests
//    any official status or that York Region endorses You". The City of Richmond Hill's own ArcGIS items (Road Segments,
//    CRH_CommunityResources) carry only a disclaimer or nothing, no reuse licence, so the regional layer was used.
// Our own calculations (fetch_trees.py, rh_tree_knn.py run live with python -I, rh_tree_knn.out.txt; rh_tree_explore.py on
// the saved raw pages, rh_tree_explore.out.txt): MUNICIPALITY='Richmond Hill' returns 9,505 rows, all STATUS Active; 107 have no
// TREEHEIGHT, leaving 9,398; seeded shuffle (2026) and an 80/20 split give 7,518 training and 1,880 test trees; always guessing
// "2 - 5 metres" is right 63.9% of the time; 15 nearest neighbours on diameter and planting year 76.8%; k=1 72.3%, k=101 74.5%;
// test band "0 - 2 metres" 57 trees, 16 right, 38 called "2 - 5 metres"; "10 - 15 metres" 150 trees, 61 right, 70 called
// "5 - 10 metres"; CURRENTDBH is a String field; 2,816 of 9,505 rows record a diameter of 5; five rows record 100 and one 150;
// planting years 1920 to 2026, 170 rows planted in 2026; most common name Ivory Silk Lilac (925), then Kentucky Coffee Tree
// (673); Bayview Avenue carries the most rows (1,751). Counts are never summed across municipalities.
// Lesson family: classification, majority-class baseline, k-nearest neighbours, choosing k, a confusion breakdown.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SCRIPT = [
  'import json, random, urllib.request, urllib.parse',
  'from collections import Counter',
  '',
  'URL = ("https://ww8.yorkmaps.ca/arcgis/rest/services/OpenData/"',
  '       "Biodiversity/MapServer/0/query?")',
  'ask = {"where": "MUNICIPALITY=\'Richmond Hill\'", "returnGeometry": "false",',
  '       "outFields": "CURRENTDBH,YEARPLANTED,TREEHEIGHT", "f": "json",',
  '       "orderByFields": "OBJECTID", "resultRecordCount": 2000}',
  '',
  'trees, ask["resultOffset"] = [], 0',
  'while True:',
  '    reply = json.loads(urllib.request.urlopen(URL + urllib.parse.urlencode(ask)).read())',
  '    if not reply["features"]:',
  '        break',
  '    for f in reply["features"]:',
  '        a = f["attributes"]',
  '        if a["TREEHEIGHT"]:',
  '            trees.append((int(a["CURRENTDBH"]), a["YEARPLANTED"], a["TREEHEIGHT"]))',
  '    ask["resultOffset"] += len(reply["features"])',
  '',
  'random.seed(2026)',
  'random.shuffle(trees)',
  'cut = len(trees) * 4 // 5',
  'train, test = trees[:cut], trees[cut:]',
  '',
  'def guess(dbh, year, k=15):',
  '    near = sorted(train, key=lambda t: ((t[0] - dbh) / 10) ** 2 + ((t[1] - year) / 10) ** 2)',
  '    return Counter(t[2] for t in near[:k]).most_common(1)[0][0]',
  '',
  'common = Counter(t[2] for t in train).most_common(1)[0][0]',
  'base = sum(t[2] == common for t in test) / len(test)',
  'knn = sum(guess(t[0], t[1]) == t[2] for t in test) / len(test)',
  'print(len(trees), "trees,", len(train), "train,", len(test), "test")',
  'print("always", repr(common), "->", round(100 * base, 1), "% right")',
  'print("15 nearest neighbours ->", round(100 * knn, 1), "% right")'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'RICHMOND HILL', label: 'Richmond Hill', blurb: 'Python and AI for Richmond Hill teenagers: Ontario coding from MTH1W to ICS4U, the CCC Junior paper by its numbers, AI age rules and a tree classifier on York Region data.' },
  market: CA,
  slug: 'ai-and-python-classes-for-teens-in-richmond-hill',
  code: 'aptr',
  accent: '#25388A',
  accentRationale: 'Richmond Hill: a deep cobalt, #25388A, allocated for this row and kept at least 14 RGB units from the other Canada accents and 6 from every site accent; contrast 9.85 on the paper #FBF8F2, 9.26 and 8.47 on the two darker paper tints',
  pageType: 'city',
  place: {
    name: 'Richmond Hill',
    eyebrow: 'Richmond Hill, Ontario',
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
  routeLabel: 'Richmond Hill',
  title: 'AI and Python Classes for Teens in Richmond Hill, ON | Online',
  description: 'Live online Python and AI for Richmond Hill teens aged 13 to 18: Ontario coding from MTH1W to ICS4U, CCC Junior practice, AI age rules and a York Region tree model.',
  ogDescription: 'What Ontario asks a Richmond Hill teenager to code from Grade 9 on, how the CCC Junior paper is built, which AI tools a teen may use, and a tree classifier on York Region data.',
  twitterDescription: 'Python and AI for Richmond Hill teens, live online, with a nearest-neighbours model on York Region street tree records.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Python and AI Classes for Teens in Richmond Hill, Ontario',
    description: 'Python, machine learning and CCC preparation for Richmond Hill students aged 13 to 18, taught live online in a group or one to one, beside Ontario MTH1W, ICD2O, ICS3U and ICS4U courses.'
  },

  h1: 'AI and Python classes for teens in Richmond Hill',
  capsuleQ: 'How does a Richmond Hill teenager learn Python and AI properly, outside school hours?',
  capsule: 'Modern Age Coders runs live online Python and AI classes for Richmond Hill teens aged 13 to 18, in a group of fifteen to twenty or with one private teacher. Most begin with Python for Teens, then branch into machine learning, contest training for the CCC, or support beside a school ICS3U course. Classes run on Eastern time; the first one is free.',
  lead: 'A Richmond Hill student meets code earlier than many parents expect. Ontario&rsquo;s Grade 9 math course asks for it, the Grade 10 digital technology course names artificial intelligence outright, and two university-preparation computer science courses follow in Grades 11 and 12. What school cannot always give is time: time to write long programs, get them wrong and find out why. That is the gap our lessons fill. Below we set out the Ontario expectations a teen here will meet, quoted from the ministry and EQAO, how the CCC Junior paper is built according to CEMC, which AI tools a 13 to 17 year old may use under each company&rsquo;s own rules, and a classifier our students build from York Region&rsquo;s street tree records along Yonge Street, Bayview Avenue and the other regional roads.',
  wa: 'Hello Modern Age Coders, I would like a free Python or AI class for a teenager in Richmond Hill, Ontario.',

  picks: {
    eyebrow: 'Course picks for Richmond Hill teens',
    h2: 'Four courses a Richmond Hill student can take between Grade 8 and Grade 12',
    intro: 'Each matches a point in an Ontario timetable or the CEMC contest year. The free class decides which one fits, not the age on a form.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Age 13 and up', note: 'Variables to functions, lists, dictionaries and files: enough Python to page through a public data service and turn nine thousand tree records into a table.' },
      { course: 'ai-ml-masterclass-teens', band: 'From Grade 10', note: 'Classification and regression with honest testing. The nearest-neighbours model further down this page is one early lesson from it.' },
      { course: 'ccc-junior-and-senior-preparation-course', band: 'Any secondary grade', note: 'Timed sets of CCC-style problems we write ourselves, marked the way the online grader marks a submission.' },
      { course: 'ics3u-ics4u-computer-science-companion-course', band: 'ICS3U and ICS4U years', note: 'Explanations, extra practice and project feedback while the student takes ICS3U or ICS4U at school. It sits next to the credit; it is not the credit.' }
    ]
  },

  sections: [
    {
      id: 'ontario', tint: '', eyebrow: 'Ontario expectations',
      h2: 'What Ontario asks a Richmond Hill teen to code, Grade 9 to Grade 12',
      intro: 'The wording in the middle column comes from the Ontario curriculum service and EQAO as we read them on 22 October 2026. The right-hand column is our own reading of what each line means at home.',
      body: [
        { kind: 'table', caption: 'Coding in Ontario secondary courses and assessments (Ontario Ministry of Education curriculum API and EQAO, read 22 October 2026; the last column is ours)', head: ['Grade and course', 'What the official text says', 'Why it matters at home'], rows: [
          ['Grade 9, MTH1W', 'Students &ldquo;create code by decomposing situations into computational steps in order to represent mathematical concepts and relationships&rdquo;', 'Breaking a problem into steps is the core programming habit, and it starts inside math class'],
          ['Grade 9, EQAO math', 'Window 12 January to 5 February 2027; &ldquo;Results of this assessment are to be included as part of a student&rsquo;s final course mark&rdquo;', 'The provincial math test lands three weeks before the CCC, so January is a busy month'],
          ['Grade 10, ICD2O (2023, Open)', '&ldquo;Students will learn and apply coding concepts and skills to build hands-on projects and investigate artificial intelligence, cybersecurity, and other emerging digital technologies&rdquo;', 'The first school course that names AI; it surveys the field rather than training models'],
          ['Grade 11, ICS3U or ICS3C (2008)', 'No prerequisite for either in the ministry table', 'A teen can start computer science in Grade 11 with no earlier course on the transcript'],
          ['Grade 12, ICS4U (2008)', '&ldquo;Students will use modular design principles to create complex and fully documented programs&rdquo;; ICS3U comes first', 'Large programs split into functions and modules, with documentation another person can read']
        ] },
        { kind: 'p', text: 'Read top to bottom, the table describes a ramp. In Grade 9 a student edits and writes short pieces of code to model math. By Grade 12 the same student is expected to plan a program in parts and document it so that a stranger could maintain it. Nothing in that ramp is out of reach for a teen who writes Python regularly, but the jump from MTH1W snippets to an ICS4U project is steep if Grade 10 and Grade 11 pass with little practice. We see that most often with students who took ICD2O as a survey course and then met ICS3U as their first experience of a program longer than a page.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Grade 9: write, then predict', p: 'We ask Grade 9 students to say what a loop will print before they run it. That habit carries the MTH1W coding strand and makes the EQAO questions that involve code far less mysterious.' },
          { h3: 'Grade 10: build what ICD2O describes', p: 'ICD2O talks about AI and cybersecurity; our Grade 10 students write the small programs behind those words, such as a password checker or a first classifier, so the vocabulary has code underneath it.' },
          { h3: 'Grades 11 and 12: the long program', p: 'ICS3U and ICS4U reward planning. Our companion course works on design before syntax: what the functions are, what each one takes and returns, and how to test a part before the whole exists.' }
        ] },
        { kind: 'callout', h3: 'School credits stay at school', p: 'Our lessons run beside the school timetable, and we do not grant Ontario credits: MTH1W, ICD2O, ICS3U and ICS4U credits come only from the school. Modern Age Coders has no link to the Ontario Ministry of Education, to EQAO or to any York Region school board.' }
      ]
    },
    {
      id: 'ccc', tint: 'tint', eyebrow: 'CCC Junior by the numbers',
      h2: 'The CCC Junior paper, as CEMC itself describes it',
      intro: 'The Canadian Computing Competition is run by the University of Waterloo&rsquo;s CEMC. Figures and quotes below are CEMC&rsquo;s own, read on 22 October 2026; the advice column is ours.',
      body: [
        { kind: 'table', caption: 'CCC Junior structure and 2026 results (CEMC CCC page, read 22 October 2026; our advice in the last column)', head: ['Part of the paper', 'What CEMC publishes', 'How we prepare for it'], rows: [
          ['Questions 1 and 2', '&ldquo;(e.g. basic loops and conditions)&rdquo;', 'Fluency drills: read input, loop, decide, print, with no time lost on syntax'],
          ['Questions 3 and 4', '&ldquo;(e.g. some combination of loops, conditions and counting)&rdquo;', 'Careful counting problems of our own, checked against hand-worked small cases'],
          ['Question 5', '&ldquo;(e.g. recursion, two-dimensional arrays, efficient/insightful algorithms)&rdquo;', 'Grids, recursion and the first ideas about running time'],
          ['Length and scoring', '&ldquo;Time allowed for completion is 3 hours&rdquo;; &ldquo;Score out of 75&rdquo;', 'Full three-hour mocks, never just single problems'],
          ['2026 Junior results', 'Mean 42.65 out of 75 across 3421 Junior contestants (CEMC results table)', 'A first-time writer should aim to finish the first three questions cleanly']
        ] },
        { kind: 'p', text: 'Two things in that table are worth a parent&rsquo;s attention. First, the Junior paper is not a test of cleverness on question one; CEMC says plainly that the opening questions are about basic loops and conditions, which a teen who has written Python for a few months can do. Second, the 2026 Junior mean sat a little above half marks, and CEMC states that &ldquo;Every participant scoring in the top 25% of all competitors receives a Certificate of Distinction.&rdquo; A Richmond Hill student who arrives in February 2027 able to solve the first three questions without errors is already writing a respectable paper. CEMC lists the 2027 CCC for Wednesday 17 February 2027.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Entry is through a school', p: 'CEMC writes that &ldquo;It is not possible for students to individually register for a contest&rdquo;. A teacher orders the paper. If a student&rsquo;s own school does not, CEMC suggests that &ldquo;students can look for another local school that will allow them to join as a participant&rdquo;.' },
          { h3: 'Who counts as official', p: 'For writers at schools in Canada, CEMC&rsquo;s official status goes to students who were &ldquo;born on or after July 1, 2007&rdquo;. Younger Grade 9 and 10 students who start early simply have more years of practice ahead of them.' },
          { h3: 'Our problems, not CEMC&rsquo;s', p: 'CEMC&rsquo;s past papers stay in CEMC&rsquo;s free archive, where students can read them; our lessons run on problems we write, never on CEMC problems or solutions. See our <a class="cg-inline-link" href="/ccc-junior-guide">CCC Junior guide</a> for the details.' }
        ] }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'York Region data project',
      h2: 'Can a model guess how tall a Richmond Hill street tree is from its trunk and its age?',
      intro: 'York Region publishes a record for each street tree it owns or maintains along its regional roads, including in Richmond Hill. Our students download the Richmond Hill rows and teach a computer to guess each tree&rsquo;s height band. All figures in this section come from our own code, not from the Region.',
      body: [
        { kind: 'table', caption: 'Our results on York Region Street Trees, MUNICIPALITY = Richmond Hill (9,505 rows fetched 22 October 2026; 9,398 with a height band; 7,518 trees to learn from, 1,880 held back to test)', head: ['Model', 'How it guesses a test tree&rsquo;s height band', 'Share of the 1,880 test trees it gets right'], rows: [
          ['Baseline', 'Always says &ldquo;2 - 5 metres&rdquo;, the most common band in the training trees', '63.9 per cent'],
          ['1 nearest neighbour', 'Copies the band of the single most similar training tree by trunk diameter and planting year', '72.3 per cent'],
          ['15 nearest neighbours', 'Takes a vote among the 15 most similar training trees', '76.8 per cent'],
          ['101 nearest neighbours', 'Takes a vote among the 101 most similar training trees', '74.5 per cent']
        ] },
        { kind: 'p', text: 'The program below is the whole exercise in standard-library Python. It asks the Region&rsquo;s map service for the Richmond Hill rows 2,000 at a time, keeps the three fields it needs, shuffles the trees with a fixed seed so the result can be repeated, holds back one tree in five for testing, and scores two models. Run on 22 October 2026, it printed the baseline and the 15-neighbour figures in the table:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Clean what arrives as text', p: 'The diameter field, CURRENTDBH, is stored as text, so every value comes back as a string like &ldquo;5&rdquo; and has to be turned into a number. The height is not a number at all but a band such as &ldquo;2 - 5 metres&rdquo;, which makes this a classification problem rather than a regression.' },
          { h3: '2. Beat the lazy answer', p: 'Because nearly two thirds of the test trees sit in one band, a model that always says &ldquo;2 - 5 metres&rdquo; already scores 63.9 per cent. Any model worth keeping has to clear that line, and the 15-neighbour vote clears it by about thirteen points.' },
          { h3: '3. Choose k, then check it', p: 'One neighbour copies noise from a single odd record; 101 neighbours blur real differences. Fifteen did best on this split. Students then reshuffle with a new seed to see whether fifteen still wins or whether that was luck.' }
        ] },
        { kind: 'callout', h3: 'Where the model goes wrong', p: 'Accuracy hides who gets ignored. Of the 57 test trees recorded as &ldquo;0 - 2 metres&rdquo;, the 15-neighbour model got only 16 right and called 38 of them &ldquo;2 - 5 metres&rdquo;. Of 150 trees in the &ldquo;10 - 15 metres&rdquo; band it got 61 right and placed 70 one band lower. Small classes get outvoted by big ones. That is a real lesson in machine learning, not a bug in the student&rsquo;s code, and it is why we always print the breakdown beside the headline number.' },
        { kind: 'p', text: 'Three more honest notes. A diameter of 5 appears on 2,816 of the 9,505 rows, mostly on trees planted in recent years, and a handful of rows record round values such as 100; the field does not state its unit, so we do not guess one. Planting years run from 1920 to 2026, with 170 rows planted in 2026 itself. And the file covers only the trees the Region owns or maintains: its own description says it holds street trees &ldquo;within regional road right-of-ways&rdquo;, with only &ldquo;partial data available for Regional owned street trees in rural areas&rdquo;, so it is not a census of every tree in the city. The commonest species in the Richmond Hill rows is the Ivory Silk Lilac (925 rows), ahead of the Kentucky Coffee Tree (673), and Bayview Avenue carries more rows than any other road (1,751). We use it under the York Region Open Data Licence, whose terms say users may &ldquo;Use the Information commercially&rdquo;; the Region suggests the credit &ldquo;Contains public sector information made available under The Regional Municipality of York&rsquo;s Open Data Licence&rdquo;. The City of Richmond Hill&rsquo;s own map layers carry no reuse licence, which is why we used the regional file. Nothing on this page is endorsed by York Region.' }
      ]
    },
    {
      id: 'tools', tint: '', eyebrow: 'AI tools for under-18s',
      h2: 'Which AI tools a Richmond Hill teenager may use, and when',
      intro: 'A tool&rsquo;s minimum age is set by the company that runs it, and contest rules by the organiser. Each line below comes from the organisation&rsquo;s own page, read on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'Age and use rules for AI tools, as each company or organiser publishes them, checked 22 October 2026 (the last column is our practice)', head: ['Tool or setting', 'What the organisation says', 'Our practice with 13 to 17 year olds'], rows: [
          ['ChatGPT (OpenAI Help Center, &ldquo;Is ChatGPT safe for all ages?&rdquo;)', '&ldquo;ChatGPT is not meant for children under 13, and we require that children ages 13 to 18 obtain parental consent before using ChatGPT.&rdquo;', 'Optional, only after a parent agrees in writing; no lesson depends on it'],
          ['Claude, under Anthropic&rsquo;s consumer terms dated Oct 8, 2025', 'Users &ldquo;must be at least 18 years old&rdquo;', 'Not used and not suggested to anyone under 18'],
          ['Any AI helper during the CCC (CCC Online Grader rules)', 'Banned outright; the rules name &ldquo;generative AI such as CoPilot or ChatGPT&rdquo;', 'Contest practice happens with every assistant switched off']
        ] },
        { kind: 'p', text: 'For a Grade 9 or 10 student the practical question is not which chatbot is cleverest but what happens to their own thinking when one is always open. The tree model above is a good test. A chatbot could write the loop that fetches the pages. It would not notice that the diameter arrives as text, that the smallest trees are being outvoted, or that the file stops at the regional road allowance. Those are the observations that make the work the student&rsquo;s own, and they come only from reading the data and the output line by line. So in our classes a teen writes and explains the code first. Where a parent has agreed to ChatGPT, it appears later as something to check against, never as the author.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Parental consent is the rule', p: 'OpenAI asks for a parent&rsquo;s consent from 13 to 18. We put that decision with the family, say in advance which lessons could use the tool, and keep every lesson complete without it.' },
          { h3: 'No 18-plus tools for teens', p: 'Anthropic limits Claude to adults, which keeps it out of every lesson we teach to under-18s. Our agentic coding course is for adults for the same reason, and teens are not placed in it.' },
          { h3: 'Homework stays theirs', p: 'We explain ideas and review a student&rsquo;s reasoning. We do not write marked school work, and we would rather a teen hand in a smaller program they understand than a polished one they do not.' }
        ] }
      ]
    },
    {
      id: 'time', tint: 'tint', eyebrow: 'Eastern time',
      h2: 'Richmond Hill clock and India clock, autumn 2026 to summer 2027',
      intro: 'Richmond Hill moves its clocks back on 1 November 2026 and forward again on 14 March 2027, while India keeps one clock all year. The sample hours below show the gap and are not a published timetable.',
      body: [
        { kind: 'table', caption: 'Richmond Hill time (zone America/Toronto) beside India time. UTC offsets: IANA time zone database 2026e. Conversions: ours', head: ['Dates', 'Richmond Hill offset', 'India ahead by', 'Sunday 9 to 10:30 am in Richmond Hill', 'Weekday 7 to 8:30 pm in Richmond Hill'], rows: [
          ['Late October 2026, before the change', 'UTC-4', 'nine and a half hours', '6:30 to 8 pm in India', '4:30 to 6 am the next day in India'],
          ['1 November 2026 to 14 March 2027', 'UTC-5', 'ten and a half hours', '7:30 to 9 pm in India', '5:30 to 7 am the next day in India'],
          ['Spring and summer 2027, from 14 March', 'UTC-4', 'nine and a half hours', '6:30 to 8 pm in India', '4:30 to 6 am the next day in India']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Times written in Eastern', p: 'Every confirmation names the Richmond Hill time, never India time alone. Before each clock change we send the new times again, so the November and March weekends cost nobody a class.' },
          { h3: 'Phone numbers here', p: 'Richmond Hill numbers use the 289, 365, 742 and 905 area codes, shared across the belt of cities around Toronto. Type all ten digits in the form below, without a leading 1.' },
          { h3: 'January and February', p: 'The Grade 9 EQAO math window ends on 5 February 2027 and the CCC follows on 17 February. Students who want both get a plan in December that spaces the practice instead of stacking it.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From first loops in Grade 8 to a classifier a Grade 12 student can defend',
    intro: 'The ages are rough. Placement follows what the student can already program, which the free class finds out in about twenty minutes.',
    cols: [
      { band: 'Ages 13 and 14', h3: 'Programs, not snippets', p: 'Input, output, loops and lists in complete programs, plus the predict-before-you-run habit that MTH1W coding rewards.', courses: ['python-complete-masterclass-teens'] },
      { band: 'Ages 14 and 15', h3: 'Algorithms and a first CCC', p: 'Counting, searching and two-dimensional grids, with a CCC Junior attempt for students who want one.', courses: ['problem-solving-dsa-masterclass-teens', 'ccc-junior-and-senior-preparation-course'] },
      { band: 'Ages 15 to 17', h3: 'Data and models', p: 'Real public data, cleaned and tested: the York Region trees first, then larger sets and proper train and test splits.', courses: ['data-science-course-for-teens-python-data', 'ai-ml-masterclass-teens'] },
      { band: 'Ages 16 to 18', h3: 'ICS4U and beyond', p: 'Support beside ICS3U and ICS4U, and C++ for students who aim at the hardest CCC Senior problems.', courses: ['ics3u-ics4u-computer-science-companion-course', 'cpp-programming-masterclass-for-teens'] }
    ]
  },

  ai: {
    eyebrow: 'Thinking before tools',
    h2: 'Why a Richmond Hill teen should understand the model before an AI tool explains it',
    intro: 'Because the useful part of the tree project is the doubt, and a tool cannot doubt on the student&rsquo;s behalf.',
    p1: 'A nearest-neighbours model is simple enough to explain on a whiteboard: find the most similar examples you already know, and copy what they say. A teen who has written one by hand knows exactly why it fails on rare cases, why the choice of k matters, and why a single accuracy figure can flatter it. That understanding transfers to every model they will meet later, including the large ones behind chatbots.',
    p2: 'So our order is fixed. A student first describes the problem in plain words, then writes the steps, predicts the result, runs it and compares. Only after that, and only within the age rules above, might an AI tool come in as a second opinion to be checked. Students who learn in this order become the ones who can tell when a tool is wrong.',
    closer: 'It is also how the CCC works: three hours, an editor and no assistant, so the reasoning on the page has to be the student&rsquo;s.',
    blogAnchor: 'whether coding is still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'One live classroom for Richmond Hill, Markham and Vaughan',
    intro: 'Lessons are online, so a teen near Yonge and Major Mackenzie and another in Markham or Vaughan can share a class without a drive along Highway 7.',
    cells: [
      { h3: 'Class times', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Neighbouring towns', p: 'Students in Markham, Vaughan, Aurora and Newmarket join the same groups, all on the Eastern time clock that Richmond Hill uses.' },
      { h3: 'Group or private', p: 'A class of fifteen to twenty at the same stage, or a teacher of their own when a deadline is close, such as a contest in February or a final ICS4U assignment.' },
      { h3: 'Work in their own folder', p: 'Projects sit in folders the student owns, and the student writes them. We explain and review; graded school work stays the student&rsquo;s own.' },
      { h3: 'Equipment', p: 'A laptop or desktop that can run Python 3, a headset or microphone, and a stable connection. If Python is not installed yet, the first class sets it up.' },
      { h3: 'A free first class', p: 'The first lesson is a real lesson, at no cost and with no card details asked. It ends with a named course and a level, or advice to wait.' }
    ],
    spec: { title: 'No Richmond Hill centre', p: 'Modern Age Coders has no office or classroom in Richmond Hill and does not claim one. Teachers are based in India and teach live, online, at Richmond Hill hours.' }
  },

  fees: {
    h2: 'Fees for Richmond Hill families',
    intro: 'Each fee shows in your own currency, with its code beside it.',
    first: 'One complete live lesson with no charge, ending in a placement and a suggested course.',
    group: 'Eight live classes a month with fifteen to twenty teens at one level, billed as a monthly fee.',
    private: 'One teacher for one teen at hours the family picks, billed as a monthly fee.',
    closer: 'Richmond Hill families pay what families pay anywhere else in Canada. We bill nothing until after the free class, once a course and a schedule suit the family. Missed classes and holidays are covered on the pricing page.'
  },

  reviewsH2: 'Google reviews from families and students',

  book: {
    h2: 'Request a free first lesson for a Richmond Hill teen',
    intro: 'Give us the grade and a line about what the student has coded so far. A beginner writes a first full program; a stronger student may get the York Region tree data or one of our timed CCC-style problems.',
    success: 'Thank you. The team will contact you soon about a class in Richmond Hill.'
  },

  faq: {
    h2: 'Questions from Richmond Hill parents and teens',
    intro: 'The ones we hear most often from families in Richmond Hill.',
    items: [
      { q: 'Are your Richmond Hill classes in person?', a: 'No. Every class is live and online, so a Richmond Hill teen joins from home. There is no centre in the city; students choose a group of fifteen to twenty or a private teacher.' },
      { q: 'What should a Grade 9 student in Richmond Hill learn first?', a: 'Usually Python for Teens. If the free class shows complete programs already, we place higher. The same course backs up the coding strand of MTH1W, Grade 9 math.' },
      { q: 'Will your classes count as ICS3U or ICS4U?', a: 'No. We teach alongside the school course and we do not grant Ontario credits. The credit is earned only at school; we add practice, explanation and project feedback.' },
      { q: 'Does my 15 year old need my permission to use ChatGPT?', a: 'Yes, by OpenAI\'s own rule: its help centre says children aged 13 to 18 need parental consent. Our lessons never depend on it, so saying no costs your teen nothing.' },
      { q: 'Do you use Claude with teenagers?', a: 'No. Anthropic\'s consumer terms require users to be at least 18, so Claude is not part of any lesson for students under 18.' },
      { q: 'How hard is the CCC Junior paper?', a: 'CEMC describes the first two questions as basic loops and conditions, and the 2026 Junior mean was 42.65 out of 75. A teen with a few months of steady Python can write a solid paper.' },
      { q: 'Can a Richmond Hill student enter the CCC without a school?', a: 'Not alone. CEMC says students cannot register individually; a school orders the contest. If the student\'s own school does not, CEMC suggests asking another local school.' },
      { q: 'Are AI assistants allowed during the CCC?', a: 'No. CEMC\'s grader rules ban them by name, CoPilot and ChatGPT included, so our contest practice runs with every assistant turned off.' },
      { q: 'When are classes for Richmond Hill families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Every time is confirmed in Eastern time.' },
      { q: 'Is the York Region tree project real data?', a: 'Yes. Students download York Region\'s published street tree records for Richmond Hill under the Region\'s open data licence and build the model themselves. The Region has not endorsed our teaching.' }
    ]
  },

  next: {
    eyebrow: 'More for Ontario',
    h2: 'Other pages for Richmond Hill and Ontario students',
    html: 'For school courses, read <a class="cg-inline-link" href="/icd2o-digital-technology-course-explained">ICD2O explained</a>, <a class="cg-inline-link" href="/ics3u-computer-science-help">ICS3U help</a> and <a class="cg-inline-link" href="/ics4u-computer-science-help">ICS4U help</a>. For contests, try the <a class="cg-inline-link" href="/ccc-past-problems-practice-guide">CCC past problems guide</a> and the <a class="cg-inline-link" href="/canada-math-and-coding-contest-calendar">Canadian contest calendar</a>, or go back to the <a class="cg-inline-link" href="/coding-classes-in-ontario">Ontario page</a> for the whole province.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Richmond Hill and Ontario',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/coding-classes-in-ontario', label: 'Ontario' },
    { href: '/coding-and-ai-classes-in-toronto', label: 'Toronto' },
    { href: '/ontario-computer-science-course-pathway', label: 'Ontario CS pathway' },
    { href: '/ai-and-machine-learning-classes-in-canada', label: 'AI and ML in Canada' }
  ],

  personalityCss: `
.cg-root.cg-aptr .cg-hero h1 { font-weight: 650; letter-spacing: -0.015em; line-height: 1.08; }
.cg-root.cg-aptr .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-aptr .cg-eyebrow { letter-spacing: 0.08em; font-size: 0.76rem; text-transform: uppercase; font-weight: 600; }
.cg-root.cg-aptr .cg-section-head h2 { max-width: 32ch; }
.cg-root.cg-aptr .cg-table caption { text-align: left; font-style: italic; }
.cg-root.cg-aptr .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-aptr #project code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.78rem; line-height: 1.55; padding: 1rem; border-top: 3px solid var(--cg-accent); }
.cg-root.cg-aptr .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 0.7rem; }
.cg-root.cg-aptr .cg-callout { border-left-width: 3px; }
`,

  dossier: {
    curriculumAuthority: 'Ontario curriculum API for MTH1W C2.2, ICD2O (2023) course description, ICS3U and ICS3C (no prerequisite) and ICS4U (2008, modular design); EQAO Grade 9 Assessment of Mathematics 2027 window and the final-course-mark rule; CEMC CCC page (2027 date, Junior question ladder, 3 hours, score out of 75, 2026 Junior mean 42.65 and 3421 contestants, Certificate of Distinction rule, official age rule) and how-contests-work (no individual registration, another local school); CCC Online Grader rules; OpenAI Help Center age article; Anthropic Consumer Terms (Oct 8, 2025); facts-geo.md for 289/365/742/905 and Eastern time (IANA tzdb 2026e).',
    localProject: 'York Region Open Data, Street Trees (York Region Open Data Licence), MUNICIPALITY = Richmond Hill: 9,505 rows fetched with urllib on 22 October 2026, 9,398 with a height band; seeded 80/20 split, 7,518 train and 1,880 test; majority baseline 63.9%, 1 neighbour 72.3%, 15 neighbours 76.8%, 101 neighbours 74.5% (our rh_tree_knn.py and rh_tree_explore.py, python -I); 0 - 2 metres band 16 of 57 right; 10 - 15 metres 61 of 150 right; CURRENTDBH stored as text; 2,816 rows with diameter 5; planting years 1920 to 2026; Ivory Silk Lilac 925 rows, Kentucky Coffee Tree 673; Bayview Avenue 1,751 rows. Labelled as ours. Lesson family: classification, majority baseline, k-nearest neighbours, choosing k, confusion breakdown.',
    requiredMentions: [
      'Ivory Silk Lilac',
      'Kentucky Coffee Tree',
      'within regional road right-of-ways',
      'The Regional Municipality of York',
      'York Region Open Data Licence',
      '7,518 trees to learn from, 1,880 held back to test',
      '2,816 of the 9,505 rows',
      'Of the 57 test trees recorded as',
      'Bayview Avenue carries more rows than any other road (1,751)',
      '289, 365, 742 and 905',
      'Mean 42.65 out of 75 across 3421 Junior contestants'
    ],
    sources: [
      { claim: 'Ontario curriculum API: MTH1W coding strand, ICD2O, ICS3U, ICS3C and ICS4U course text and prerequisites.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items?system.type=l2___course&elements.code%5Bin%5D=ICS2O,ICS3U,ICS3C,ICS4U,ICS4C&depth=0' },
      { claim: 'EQAO: Grade 9 Assessment of Mathematics window for 2027.', url: 'https://www.eqao.com/the-assessments/' },
      { claim: 'EQAO: Grade 9 results are included in the final course mark.', url: 'https://www.eqao.com/the-assessments/grade-9-math/' },
      { claim: 'CEMC CCC page: 2027 date, Junior question ladder, 3 hours, score out of 75, 2026 results, Certificate of Distinction, official age.', url: 'https://cemc.uwaterloo.ca/contests/ccc' },
      { claim: 'CEMC how contests work: no individual registration; another local school.', url: 'https://cemc.uwaterloo.ca/contests/how-contests-work' },
      { claim: 'CCC Online Grader rules: generative AI forbidden.', url: 'https://cccgrader.com/rules.pdf' },
      { claim: 'OpenAI Help Center: ChatGPT under 13 and parental consent from 13 to 18.', url: 'https://help.openai.com/en/articles/8313401-is-chatgpt-safe-for-all-ages' },
      { claim: 'Anthropic Consumer Terms: users must be at least 18.', url: 'https://www.anthropic.com/legal/consumer-terms' },
      { claim: 'York Region Open Data: Street Trees item and description.', url: 'https://www.arcgis.com/home/item.html?id=293d80c24bf54a4f8ab66bddaeaab184' },
      { claim: 'York Region Open Data Licence (PDF on the York Region Open Data hub): commercial use, credit statement, non-endorsement.', url: 'https://www.arcgis.com/sharing/rest/content/items/78cc02388af248c0b7a30eda6adfade0/data' },
      { claim: 'IANA tzdb northamerica: America/Toronto offsets and the 2026 to 2027 changes.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any claim about Richmond Hill schools, York Region school boards or their results: none made, by the row instruction.',
      'Any Richmond Hill or York Region population: StatCan not reachable live, so none printed.',
      'Calling the file every tree in Richmond Hill: refused; the item covers Region-owned street trees on regional road right-of-ways with partial rural data.',
      'A unit for CURRENTDBH: not asserted; the layer does not state one.',
      'Using the City of Richmond Hill ArcGIS layers: rejected; they carry a disclaimer or nothing, not a reuse licence.',
      'A tree total for York Region built by adding municipalities: not computed.',
      'That our courses earn or count toward an Ontario credit: refused; we do not grant Ontario credits.',
      'Recommending Claude or any 18+ tool to a teenager: refused under Anthropic\'s terms.',
      'Any affiliation with CEMC, EQAO, York Region, the City of Richmond Hill or the Ontario Ministry of Education.',
      'CEMC contest fees: left out of the copy (currency-neutral page).'
    ]
  }
};
