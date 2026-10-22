'use strict';
// Waterloo, Ontario (cg- city page, Canada cluster Wave 2, row 122: ai-and-python-classes-for-teens-in-<city>).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md, brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Spine: Waterloo is where CEMC sits, so the page lays out what CEMC itself offers a teenager (CCC, CCO, CS Circles,
// free archives), what Ontario high school computer studies asks for, the AI tool age rules and the CCC ban on
// generative AI, and a first machine learning project on City of Waterloo trail counter data. No claims about local schools.
// Sources, read raw on 22 October 2026:
//  - CEMC (facts-schools-contests.md, files in ca/src/cemc/): CCC "North and South America: Wednesday, February 17, 2027";
//    "each participant can choose the best level for them, regardless of their grade"; "CCC participants may use C, C++,
//    Python 2, Python 3, or Java."; "it may not always be possible to achieve a perfect score with a particular language
//    choice (for example, Python or Java)"; "Written in school, participants write online, individually."; "all students
//    must participate through their school."; "Approximately 20 of the top official CCC Senior participants from schools in
//    Canada are invited to the CCO at the University of Waterloo each spring."; "CCO participants must use C++.";
//    ioi-2026-news: "The Centre for Education in Mathematics and Computing (CEMC), along with the Faculty of Mathematics at
//    the University of Waterloo, supports the team that represents" Canada; "returned from Tashkent, Uzbekistan with four
//    medals"; CS Circles title "Computer Science Circles", "[Python Programming Tutorials]"; resources "There is no
//    registration or fee required to access these materials."; past contests "resources from the last 10 years";
//    "Participation in the Canadian Computing Competition (CCC) is not required for admission to the Faculty of
//    Mathematics at the University of Waterloo."
//  - CCC Online Grader rules (cccgrader.com/rules.pdf, src-pilots/ccc-junior-guide/ccc-rules.txt): "All other Internet use is
//    forbidden. This includes email, chat, web search, code forums, and generative AI such as CoPilot or ChatGPT."; "However,
//    AI-based tools within an IDE cannot be used."
//  - University of Waterloo CS page (ca/src/admissions/uw-computer-science.txt): recommended course "Grade 11 U Introduction
//    to Computer Science". Linked, not restated.
//  - Ontario DCP API: ICD2O (2023, Open) "investigate current and emerging innovations in digital technology, including
//    automation and artificial intelligence, and assess their benefits and limitations"; ICD2O C2 "use fundamental
//    programming concepts to write simple programs"; ICS3U "Students will design software independently and as part of a
//    team"; ICS4U prerequisite is ICS3U; ICS3U no prerequisite; MTH1W C2.3 "read code to predict its outcome, and alter code
//    to adjust constraints, parameters, and outcomes"; 2008 PDF "Each of the courses listed above is worth one credit."
//  - OpenAI Terms of Use, effective January 1, 2026 (src-pilots/ai-classes-for-kids-in-canada/openai-terms.flat.txt): "If
//    you are under 18 you must have your parent or legal guardian's permission to use the Services." Anthropic Consumer
//    Terms, effective Oct 8, 2025 (anthropic-consumer-terms.flat.txt): "You must be at least 18 years old".
//  - facts-geo.md: Waterloo CSD in the Kitchener - Cambridge - Waterloo CMA; area codes 226/382/519/548; America/Toronto,
//    UTC-4 until 1 November 2026, UTC-5 to 14 March 2027 (IANA tzdb 2026e). No populations used.
//  - City of Waterloo Open Data (data.waterloo.ca), "City of Waterloo Trail Counter Data", item 5d41afff252e45b5b5fe7fc3fd5df3ab,
//    owner OpenData_Waterloo, FeatureServer queried with curl and urllib on 22 October 2026. Item description (item_*.json):
//    "This data is updated daily."; "pedestrian and cyclist traffic has been diverted around many EcoCounter installations
//    resulting in a perceived drop in traffic". The item's licenseInfo is empty; the portal licence page
//    (data.waterloo.ca/pages/open-data-licence, page item 8844e3b457d2436cb1029e7470b2be8c, licence-page.txt) is the
//    "Waterloo Open Data User Licence": "use the Information commercially"; attribution text "Contains information provided
//    by the City of Waterloo under licence"; "ensure that you do not use the Information in a way that suggests any official
//    status or that the Information Provider endorses you or your use of the Information". City of Waterloo data was chosen
//    over the opendata.tsv Kitchener playgrounds entry because the page is about the City of Waterloo.
// Our own calculations (src/ai-and-python-classes-for-teens-in-waterloo-ontario/: waterloo_trail_model.py, run live with
// python -I, output waterloo_trail_model.out.txt; make_daily.py, audit.py, explore2.py on the saved raw pages; grouped_by_location.json,
// latest_rows.json, count_all.json saved): whole table returnCountOnly 534,489 rows; LOC_ID 4 "Laurel Trail at University Ave. W."
// 44,114 hourly rows, 17 July 2015 to 30 November 2021; 1,835 dates, 1,824 with 24 rows; 356 training days (2018), 360 test
// days (2019); mean absolute error one-average 90, weekday 90, month 65; 2018 daily mean 171, 2019 daily mean 133; 2018 month
// means January 59, July 324; zero-total days 15 April 2018, 14 and 15 September 2019; LOC_ID 2 listed as both "Iron Horse Tail
// at John St. W." and "Iron Horse Trail at John St. W."; LOC_ID 10 as both "Spur Line Trail at Roger Street" and "Spurline
// Trail South of Roger St.". Location row counts are never summed.
// Lesson family: baseline versus feature models, a time-based train and test split, mean absolute error, label auditing.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SCRIPT = [
  'import json, urllib.request, datetime',
  '',
  'URL = ("https://services.arcgis.com/ZpeBVw5o1kjit7LT/arcgis/rest/services/"',
  '       "City_of_Waterloo_Trail_Counter_Data/FeatureServer/0/query"',
  '       "?where=LOC_ID%3D4&outFields=DATE,TOTAL_COUNT&orderByFields=OBJECTID"',
  '       "&resultRecordCount=2000&f=json&resultOffset=")',
  '',
  'daily, hours, offset = {}, {}, 0',
  'while True:',
  '    page = json.load(urllib.request.urlopen(URL + str(offset)))',
  '    rows = page["features"]',
  '    if not rows:',
  '        break',
  '    for r in rows:',
  '        a = r["attributes"]',
  '        day = datetime.datetime.fromtimestamp(a["DATE"] / 1000, datetime.timezone.utc).date()',
  '        daily[day] = daily.get(day, 0) + (a["TOTAL_COUNT"] or 0)',
  '        hours[day] = hours.get(day, 0) + 1',
  '    offset += len(rows)',
  '',
  'full = [d for d in daily if hours[d] == 24]',
  'train = [(d, daily[d]) for d in full if d.year == 2018]',
  'test = [(d, daily[d]) for d in full if d.year == 2019]',
  '',
  'def fit(key):',
  '    groups = {}',
  '    for d, n in train:',
  '        groups.setdefault(key(d), []).append(n)',
  '    return {k: sum(v) / len(v) for k, v in groups.items()}',
  '',
  'def error(key):',
  '    model = fit(key)',
  '    return round(sum(abs(model[key(d)] - n) for d, n in test) / len(test))',
  '',
  'print(offset, "hourly rows,", len(train), "train days,", len(test), "test days")',
  'print("same guess every day:", error(lambda d: 0))',
  'print("guess by weekday:", error(lambda d: d.weekday()))',
  'print("guess by month:", error(lambda d: d.month))'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'WATERLOO', label: 'Waterloo', blurb: 'Python and AI for Waterloo teenagers: what CEMC offers at home, Ontario computer studies, AI tool age rules and a trail counter model built on City of Waterloo data.' },
  market: CA,
  slug: 'ai-and-python-classes-for-teens-in-waterloo-ontario',
  code: 'aptw',
  accent: '#18665C',
  accentRationale: 'Waterloo: a deep spruce teal, #18665C, allocated for this row and kept at least 14 RGB units from the other Canada accents and 6 from every site accent; contrast 6.40 on the paper #FBF8F2, 6.02 and 5.51 on the two darker paper tints',
  pageType: 'city',
  place: {
    name: 'Waterloo',
    eyebrow: 'Waterloo, Ontario',
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
  routeLabel: 'Waterloo',
  title: 'AI and Python Classes for Teens in Waterloo, ON | Live Online',
  description: 'Live online Python and AI classes for Waterloo teens aged 13 to 18: CEMC contests and CS Circles, Ontario ICS courses, AI tool age rules and a trail data model.',
  ogDescription: 'Waterloo teens live next door to CEMC. Here is what it offers, what ICD2O and ICS3U ask, which AI tools a teen may use, and a model built on City of Waterloo trail counts.',
  twitterDescription: 'Python and AI for Waterloo teens, live online, with a machine learning project on City of Waterloo data.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Python and AI Classes for Teens in Waterloo, Ontario',
    description: 'Python, machine learning and contest programming for Waterloo students aged 13 to 18, taught live online in a batch or one to one, alongside Ontario computer studies courses and CEMC contests.'
  },

  h1: 'AI and Python classes for teens in Waterloo',
  capsuleQ: 'Where can a Waterloo teenager learn Python and AI properly?',
  capsule: 'Modern Age Coders teaches Python and AI live online to Waterloo teens aged 13 to 18, either in a group of fifteen to twenty students or with a private teacher. Most start with Python for Teens, then move to AI and Machine Learning for Teens, CCC preparation or the Ontario Computer Science Companion. Lessons are booked in Eastern time, and the first is free.',
  lead: 'Few cities put a teenager closer to Canadian computing than Waterloo. The University of Waterloo&rsquo;s Centre for Education in Mathematics and Computing, known as CEMC, writes the Canadian Computing Competition, hosts the Canadian Computing Olympiad and publishes free Python lessons, and a student here can use every one of them from a laptop at home. Being near all that does not, on its own, teach anyone to program. What turns it into skill is steady practice with someone who reads the code back and asks why. This page sets out what CEMC offers a Waterloo teen in 2026 to 2027, quoting CEMC, what Ontario computer studies courses expect, which AI tools a teenager may legally use, and a first machine learning project we built on the City of Waterloo&rsquo;s own trail counter records.',
  wa: 'Hello Modern Age Coders, I would like a free Python or AI class for a teenager in Waterloo, Ontario.',

  picks: {
    eyebrow: 'Course picks for Waterloo teens',
    h2: 'Four courses for a Waterloo student between 13 and 18',
    intro: 'Each fits a stage of an Ontario high school timetable or the CEMC contest year. A free first lesson checks the level before anyone commits to one.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Grades 8 to 12', note: 'From a first print statement to dictionaries, files and functions: exactly the Python a teen needs to fetch and summarise the trail counter data on this page.' },
      { course: 'ai-ml-masterclass-teens', band: 'Grades 10 to 12', note: 'Train, test and question real models in Python. The trail counter exercise below is the first lesson of this course, shrunk to fit a page.' },
      { course: 'ccc-junior-and-senior-preparation-course', band: 'Grades 9 to 12', note: 'Original practice problems in the style the CCC uses, timed and graded the way the online grader marks them, ahead of Wednesday 17 February 2027.' },
      { course: 'ics3u-ics4u-computer-science-companion-course', band: 'Grades 11 and 12', note: 'Extra practice and project help beside a school ICS3U or ICS4U course. It runs alongside the credit and does not replace it.' }
    ]
  },

  sections: [
    {
      id: 'cemc', tint: '', eyebrow: 'CEMC on the doorstep',
      h2: 'What the University of Waterloo&rsquo;s CEMC offers a teenager in 2026 to 2027',
      intro: 'CEMC is part of the University of Waterloo, and most of what it publishes is free. Quotes below are CEMC&rsquo;s, read from its own pages on 22 October 2026; summaries are ours.',
      body: [
        { kind: 'table', caption: 'CEMC computing resources a Waterloo teen can use, with what CEMC says about each (read 22 October 2026)', head: ['Resource', 'What CEMC says', 'What it means for a teen'], rows: [
          ['Canadian Computing Competition (CCC)', '&ldquo;North and South America: Wednesday, February 17, 2027&rdquo;', 'One online sitting at school. Junior or Senior is chosen by skill, &ldquo;regardless of their grade&rdquo;'],
          ['Languages allowed in the CCC', '&ldquo;CCC participants may use C, C++, Python 2, Python 3, or Java.&rdquo;', 'Python is allowed, with a caveat CEMC states itself (below)'],
          ['Canadian Computing Olympiad (CCO)', 'About 20 top official Senior writers are invited &ldquo;to the CCO at the University of Waterloo each spring&rdquo;', 'The next step after a strong Senior paper; CEMC adds that &ldquo;CCO participants must use C++.&rdquo;'],
          ['Computer Science Circles', 'Site title &ldquo;Computer Science Circles&rdquo;, tagged &ldquo;[Python Programming Tutorials]&rdquo;', 'Free browser-based Python lessons from variables to recursion'],
          ['Past contests', '&ldquo;Below you will find resources from the last 10 years.&rdquo;', 'A decade of old papers, free; &ldquo;There is no registration or fee required&rdquo;']
        ] },
        { kind: 'p', text: 'One line on CEMC&rsquo;s CCC page matters a great deal for a Python student: &ldquo;it may not always be possible to achieve a perfect score with a particular language choice (for example, Python or Java)&rdquo;. That is CEMC being candid about time limits on the hardest problems. Our reading is simple. Python is the right first language for almost every teen, and the right contest language for Junior and early Senior work; a student aiming at the fifth Senior problem, or at the CCO, eventually needs C++ as well, and we plan for that switch rather than discovering it in February.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Entry goes through a school', p: 'CEMC is plain that &ldquo;all students must participate through their school.&rdquo; A Waterloo teen cannot sign up for the CCC alone. The contest is &ldquo;Written in school, participants write online, individually.&rdquo; We help with the preparation; a teacher at school handles the registration.' },
          { h3: 'Canada&rsquo;s informatics team', p: 'CEMC&rsquo;s 2026 news item says CEMC, &ldquo;along with the Faculty of Mathematics at the University of Waterloo, supports the team that represents&rdquo; Canada at the International Olympiad in Informatics, which &ldquo;returned from Tashkent, Uzbekistan with four medals&rdquo;.' },
          { h3: 'Not an admission ticket', p: 'CEMC writes that the CCC &ldquo;is not required for admission to the Faculty of Mathematics at the University of Waterloo.&rdquo; Teens write it to learn and to be tested fairly, not because a door depends on it. Our <a class="cg-inline-link" href="/waterloo-computer-science-admission-requirements">Waterloo CS admission page</a> covers the courses that do count.' }
        ] },
        { kind: 'callout', h3: 'No connection to CEMC or the university', p: 'Modern Age Coders is not part of CEMC or the University of Waterloo and is not endorsed by either. We never copy CEMC problems or solutions into lessons; students read the originals in <a class="cg-inline-link" href="https://cemc.uwaterloo.ca/resources/past-contests">CEMC&rsquo;s free archive</a> and practise on problems we write ourselves.' }
      ]
    },
    {
      id: 'school', tint: 'tint', eyebrow: 'Ontario computer studies',
      h2: 'Grade 9 to 12: where Python and AI sit in an Ontario timetable',
      intro: 'A Waterloo high school student follows the Ontario curriculum. These are the ministry&rsquo;s course descriptions as its curriculum service returned them on 22 October 2026; where we summarise, we say so.',
      body: [
        { kind: 'table', caption: 'Ontario courses with coding or AI content, Grades 9 to 12 (Ontario Ministry of Education curriculum API; summaries in the last column are ours)', head: ['Course', 'Grade and year issued', 'What the ministry text includes', 'Prerequisite'], rows: [
          ['MTH1W, Mathematics', 'Grade 9, 2021, de-streamed', 'Coding inside math: &ldquo;read code to predict its outcome, and alter code to adjust constraints, parameters, and outcomes&rdquo;', 'None listed'],
          ['ICD2O, Digital Technology and Innovations in the Changing World', 'Grade 10, 2023, Open', 'To &ldquo;investigate current and emerging innovations in digital technology, including automation and artificial intelligence, and assess their benefits and limitations&rdquo;', 'None listed'],
          ['ICS3U, Introduction to Computer Science', 'Grade 11, 2008, University', 'Our summary: software built alone and in teams, using a development life cycle', 'None'],
          ['ICS4U, Computer Science', 'Grade 12, 2008, University', 'Modular design and complex, fully documented programs (our summary)', 'ICS3U']
        ] },
        { kind: 'p', text: 'ICD2O is the only Ontario course on the current list whose own expectations name artificial intelligence. It asks students to weigh benefits and limitations, which is a different thing from building a model; its programming strand stops at the instruction to &ldquo;use fundamental programming concepts to write simple programs&rdquo;. ICS3U and ICS4U are where serious programming happens, and the 2008 document notes that &ldquo;Each of the courses listed above is worth one credit.&rdquo; None of these courses trains a neural network or evaluates one, and none has to. That gap, between talking about AI and testing a model against data it has never seen, is where our AI and machine learning course spends its time.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Grades 9 and 10', p: 'Teens who code only in MTH1W often meet Python in short snippets they edit rather than write. We start them on full programs early, so ICD2O feels easy and ICS3U is not their first real program.' },
          { h3: 'Grade 11', p: 'ICS3U has no prerequisite, and the University of Waterloo&rsquo;s computer science page lists Grade 11 U Introduction to Computer Science as its recommended course. Many of our Waterloo students take it with our companion course beside it.' },
          { h3: 'Grade 12', p: 'ICS4U follows ICS3U. Students who want the CCC Senior paper, a machine learning project for a portfolio, or both, usually add one of those in this year. The <a class="cg-inline-link" href="/ontario-computer-science-course-pathway">Ontario computer science pathway</a> page maps the sequence in detail.' }
        ] },
        { kind: 'callout', h3: 'Credits come from school', p: 'We teach alongside a student&rsquo;s school courses and we do not grant Ontario credits. ICS3U, ICS4U and ICD2O credits are earned only at school. We are not connected with the Ontario Ministry of Education or any Waterloo school board.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Waterloo data project',
      h2: 'Can a model guess tomorrow&rsquo;s traffic on the Laurel Trail? A first machine learning project',
      intro: 'The City of Waterloo publishes hourly counts from counters on its trails. Our students download one counter&rsquo;s history, train three very simple models on 2018 and test them on 2019. Every number in this section is our own calculation, not the City&rsquo;s.',
      body: [
        { kind: 'table', caption: 'Our results on City of Waterloo Trail Counter Data, counter LOC_ID 4, Laurel Trail at University Ave. W. (44,114 hourly rows fetched 22 October 2026; trained on 356 complete days in 2018, tested on 360 complete days in 2019)', head: ['Model (trained on 2018)', 'How it guesses a 2019 day', 'Average miss on 2019 (people per day)'], rows: [
          ['Baseline', 'The same number every day: the 2018 daily average, about 171', '90'],
          ['Weekday model', 'The 2018 average for that day of the week', '90'],
          ['Month model', 'The 2018 average for that month, from about 59 a day in January to 324 in July', '65']
        ] },
        { kind: 'p', text: 'Here is the whole project in standard-library Python. It pages through the City&rsquo;s public query service 2,000 rows at a time, adds the hourly counts up by date, keeps only dates with all 24 hours, and scores each model by its mean absolute error. It printed the three numbers in the table when we ran it on 22 October 2026:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Beat the baseline', p: 'A model is only interesting if it beats a dumb guess. Guessing the yearly average every day misses by 90 people a day on 2019. Knowing the weekday does not help at all here, which surprises most students; knowing the month cuts the miss to 65.' },
          { h3: '2. Split by time', p: 'Training on 2018 and testing on 2019 is honest in a way a random split is not: the model never sees the future it is graded on. Students then try training on 2017 to see whether a longer history helps.' },
          { h3: '3. Audit the labels', p: 'The same counter can carry two spellings. In the City&rsquo;s file, LOC_ID 2 appears as both &ldquo;Iron Horse Tail at John St. W.&rdquo; and &ldquo;Iron Horse Trail at John St. W.&rdquo;, and LOC_ID 10 as both &ldquo;Spur Line Trail at Roger Street&rdquo; and &ldquo;Spurline Trail South of Roger St.&rdquo;. Group by ID, never by name.' }
        ] },
        { kind: 'callout', h3: 'What the model cannot know', p: 'The 2019 days averaged about 133 people against 171 in 2018, so every 2018 model guesses high. Is that a real change in walking and cycling, a counter moved or partly blocked, or something else? The data alone cannot say. The City&rsquo;s own note warns that construction meant traffic &ldquo;has been diverted around many EcoCounter installations resulting in a perceived drop in traffic&rdquo;, without naming this counter. And 15 April 2018, 14 September 2019 and 15 September 2019 record zero people across all 24 hours, which looks more like a counter gap than an empty trail. A student who flags those days before trusting the error figure is doing real data science.' },
        { kind: 'p', text: 'Two more honest details. The item description says &ldquo;This data is updated daily&rdquo;, yet the newest rows we could fetch are dated 30 November 2021, so this is a historical exercise, not a live feed. The whole table held 534,489 rows across all counters on the day we queried it; we used one counter so a laptop finishes in seconds. The data is used under the Waterloo Open Data User Licence, which lets anyone &ldquo;use the Information commercially&rdquo;. Contains information provided by the City of Waterloo under licence (<a class="cg-inline-link" href="https://data.waterloo.ca/pages/open-data-licence">licence</a>, <a class="cg-inline-link" href="https://data.waterloo.ca/datasets/5d41afff252e45b5b5fe7fc3fd5df3ab_0">dataset</a>). The City has not endorsed this page or our teaching.' }
      ]
    },
    {
      id: 'tools', tint: '', eyebrow: 'AI tools and age rules',
      h2: 'Which AI tools a Waterloo teen may use, and where they are banned',
      intro: 'Age limits come from each company&rsquo;s own terms, and contest rules come from the organiser. We read each document on 22 October 2026 and teach inside those limits.',
      body: [
        { kind: 'table', caption: 'AI tool rules for students aged 13 to 17, from each organisation&rsquo;s own document (read 22 October 2026)', head: ['Tool or setting', 'What the document says', 'What we do'], rows: [
          ['ChatGPT (OpenAI Terms of Use, effective January 1, 2026)', '&ldquo;If you are under 18 you must have your parent or legal guardian&rsquo;s permission to use the Services.&rdquo;', 'Used only with a parent&rsquo;s permission, and never to write graded work'],
          ['Claude (Anthropic Consumer Terms, effective Oct 8, 2025)', '&ldquo;You must be at least 18 years old&rdquo;', 'Never recommended to anyone under 18'],
          ['The CCC itself (CCC Online Grader rules)', 'Internet use is forbidden, including &ldquo;generative AI such as CoPilot or ChatGPT&rdquo;, and &ldquo;AI-based tools within an IDE cannot be used.&rdquo;', 'Contest practice is done with every AI helper switched off']
        ] },
        { kind: 'p', text: 'The CCC rule is the one that changes how a teen should practise. On 17 February 2027 a CCC writer will have an editor, the official language documentation and their own head; the autocomplete that finishes a loop in a school assignment is gone. Students who learned with an assistant always on tend to freeze at that point. So our contest lessons run with AI tools off from the first week, and our machine learning lessons treat an AI tool as something to test, not something to trust.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Parents decide on ChatGPT', p: 'OpenAI puts the permission decision with the parent until 18. We tell families exactly where in a course a tool would be used, and a teen whose parent says no loses nothing: every lesson works without it.' },
          { h3: 'Adults only, for some tools', p: 'Claude is an 18-and-over product under Anthropic&rsquo;s terms, so it never appears in a lesson for teenagers. The agentic coding course in the row of four above is an adult course for the same reason, and we do not place teens in it.' },
          { h3: 'Build the model yourself', p: 'The trail counter project uses no AI service at all. Fitting averages by hand is the start of machine learning, and a teen who can explain why the month model wins understands more than one who pasted a prompt.' }
        ] }
      ]
    },
    {
      id: 'time', tint: 'tint', eyebrow: 'Eastern time',
      h2: 'Waterloo hours against India hours from this autumn to next summer',
      intro: 'Clocks in Waterloo move on 1 November 2026 and on 14 March 2027. Clocks in India, where our teachers are based, stay put. The hours below only illustrate the gap; they are not a timetable.',
      body: [
        { kind: 'table', caption: 'Waterloo clock (zone America/Toronto) beside the India clock. UTC offsets per IANA tzdb release 2026e; the conversions are our arithmetic', head: ['Period', 'Waterloo on', 'Gap to India', 'Saturday 10 am to noon in Waterloo', 'Weekday 5 to 7 pm in Waterloo'], rows: [
          ['Now, until the 1 November 2026 change', 'UTC-4', '9 h 30 min', 'India evening, 7:30 to 9:30 pm', 'India early morning, 2:30 to 4:30 am the next day'],
          ['Winter, after 1 November 2026', 'UTC-5', '10 h 30 min', 'India evening, 8:30 to 10:30 pm', 'India early morning, 3:30 to 5:30 am the next day'],
          ['Summer, after 14 March 2027', 'UTC-4', '9 h 30 min', 'India evening, 7:30 to 9:30 pm', 'India early morning, 2:30 to 4:30 am the next day']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Your clock, not ours', p: 'Every class we confirm is written in Eastern time. In the week before 1 November 2026 and again before 14 March 2027 we resend each student&rsquo;s times so that the change costs nobody a lesson.' },
          { h3: 'Waterloo phone numbers', p: 'Waterloo sits in the 226, 382, 519 and 548 area codes, which share south-western Ontario. Any of them works in the form below: type the ten digits and leave out the 1.' },
          { h3: 'CCC day in Eastern time', p: 'The CCC falls on Wednesday 17 February 2027, deep in the UTC-5 months. We schedule the last mock paper for the weekend before, at the same local hour the school plans to sit it.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first Python script at 13 to a model a teen can defend at 18',
    intro: 'Ages are a guide only. Placement depends on the code a student can already write, and the free lesson is where we find that out.',
    cols: [
      { band: 'Ages 13 and 14', h3: 'Python as a real language', p: 'Full programs rather than snippets: input, loops, lists and functions, with a habit of predicting output before running it, the MTH1W skill taken further.', courses: ['python-complete-masterclass-teens', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'Ages 14 and 15', h3: 'First contest, first data', p: 'A CCC Junior attempt for those who want it, and first files of real data such as the Waterloo trail counts.', courses: ['ccc-junior-and-senior-preparation-course', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 16 and 17', h3: 'ICS3U, ICS4U and models', p: 'Support beside school computer science, and machine learning with proper train and test splits.', courses: ['ics3u-ics4u-computer-science-companion-course', 'ai-ml-masterclass-teens'] },
      { band: 'Age 17 to 18', h3: 'Senior paper or portfolio', p: 'CCC Senior with a plan for C++, or a larger independent AI project the student can explain line by line.', courses: ['cpp-programming-masterclass-for-teens', 'ai-ml-masterclass-teens'] }
    ]
  },

  ai: {
    eyebrow: 'Python before AI',
    h2: 'Why a Waterloo teen should write Python before asking AI to',
    intro: 'Because the hardest part of the trail project is not the code; it is noticing what is wrong with the result.',
    p1: 'An AI assistant will happily write the trail counter script. It will not stop to ask why 2019 runs low, whether a zero day is a broken counter, or why the same ID carries two names. Those questions come from a student who has written the loop, seen the output and felt something was off. That instinct is what we are trying to build.',
    p2: 'So we teach thinking first: break the problem into steps, write each step, predict the output, then check it. AI tools come in later, within the age rules above, as something a student questions the way a reviewer questions a draft. A teen who learns that way can use any tool that appears in the next five years; one who learned by pasting cannot.',
    closer: 'The CCC rules ban AI helpers for exactly this reason: on contest day the thinking has to be the student&rsquo;s own.',
    blogAnchor: 'is coding still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'The same teacher for Waterloo, Kitchener and Cambridge',
    intro: 'Classes are online, so a teen near Uptown Waterloo and one in Cambridge sit in the same lesson without a drive.',
    cells: [
      { h3: 'When classes run', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Across the region', p: 'Students in Kitchener, Cambridge and the townships around them join the same classes on the same Eastern time clock as Waterloo students.' },
      { h3: 'Batch or one to one', p: 'A batch of fifteen to twenty teens at one level, or one teacher for one student when the goal is a CCC Senior paper or an ICS4U project.' },
      { h3: 'Code they keep', p: 'Every project lives in the student&rsquo;s own folder, written by them. School assignments stay the student&rsquo;s own work; we explain ideas and never write marked work.' },
      { h3: 'What a teen needs', p: 'A laptop or desktop with Python 3 installed, a microphone, and a steady connection. We help set up Python in the first class if it is not there yet.' },
      { h3: 'Start free', p: 'Lesson one costs nothing and is taught like any other; at the end the teacher names a course and a level. We ask for no card details.' }
    ],
    spec: { title: 'No Waterloo office', p: 'Modern Age Coders has no centre in Waterloo and claims none. Every class is live and online, taught by teachers in India, on Waterloo time.' }
  },

  fees: {
    h2: 'Fees for Waterloo families',
    intro: 'Each fee below shows in your own currency, with the code printed next to it.',
    first: 'A full live lesson, free, ending with a placement and a suggested course.',
    group: 'The monthly fee for a batch of fifteen to twenty teens working at the same level.',
    private: 'The monthly fee for one teacher with one teen, at hours the family picks.',
    closer: 'A Waterloo family pays the same as one anywhere in Canada. Billing begins only once the free lesson is done and a course and hours are agreed; the pricing page covers missed lessons and holiday weeks.'
  },

  reviewsH2: 'Google reviews from parents and students',

  book: {
    h2: 'Book a free class for a Waterloo teen',
    intro: 'Tell us the grade and what the student has written so far. A beginner gets a first Python program; a stronger student might get the trail counter data or a timed CCC-style problem of ours.',
    success: 'Thank you. The team will be in touch soon about a class in Waterloo.'
  },

  faq: {
    h2: 'Waterloo teen Python and AI questions',
    intro: 'What Waterloo parents and teenagers ask us most.',
    items: [
      { q: 'Do you run Python and AI classes in Waterloo?', a: 'Yes, online and live. There is no Waterloo centre: teenagers from 13 to 18 log in from home, either to a group of fifteen to twenty or to private lessons with their own teacher.' },
      { q: 'Which course should a 13 or 14 year old start with?', a: 'Python for Teens, unless the free class shows they already write full programs. AI and Machine Learning for Teens comes after Python is fluent enough to read every line.' },
      { q: 'Does your course give an ICS3U or ICS4U credit?', a: 'No, and we do not grant Ontario credits of any kind. The credit belongs to the school course; our companion adds practice, explanations and project feedback on the side.' },
      { q: 'Can my teen use ChatGPT in your classes?', a: 'Only with your permission, because OpenAI\'s terms say users under 18 need a parent\'s or legal guardian\'s permission. Every lesson also works without it.' },
      { q: 'Is Claude suitable for a teenager?', a: 'No. Anthropic\'s terms say users must be at least 18, so we never recommend Claude to anyone under 18.' },
      { q: 'Can AI tools be used in the CCC?', a: 'No. The CCC grader rules forbid generative AI such as CoPilot or ChatGPT, and AI-based tools inside an editor. We train contest students with AI switched off.' },
      { q: 'How does a Waterloo student enter the CCC?', a: 'A teacher at the student\'s school registers them; CEMC does not accept individual sign-ups. The 2027 sitting is on Wednesday 17 February 2027, per CEMC, and we prepare students with problems we write ourselves.' },
      { q: 'Is Python good enough for the CCC?', a: 'For Junior and most of Senior, yes. CEMC itself warns that a perfect score may not always be possible in Python or Java, so students aiming at the top Senior problems or the CCO add C++.' },
      { q: 'What time are classes for Waterloo families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. All times are confirmed in Eastern time.' },
      { q: 'Is Modern Age Coders part of CEMC or the university?', a: 'No. We are an independent online school. We point students to CEMC\'s free resources and never reuse CEMC problems in our lessons.' }
    ]
  },

  next: {
    eyebrow: 'More for Ontario',
    h2: 'Other pages for Waterloo and Ontario students',
    html: 'Contest students can read <a class="cg-inline-link" href="/ccc-junior-guide">the CCC Junior guide</a>, <a class="cg-inline-link" href="/ccc-senior-guide">the CCC Senior guide</a> and <a class="cg-inline-link" href="/canadian-computing-olympiad-cco-guide">the CCO guide</a>. For courses and admission, see <a class="cg-inline-link" href="/ics3u-computer-science-help">ICS3U help</a> and the <a class="cg-inline-link" href="/waterloo-aif-guide">Waterloo AIF guide</a>, or start from <a class="cg-inline-link" href="/coding-classes-in-ontario">coding classes in Ontario</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Waterloo and Ontario',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/coding-classes-in-ontario', label: 'Ontario' },
    { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation' },
    { href: '/ai-and-machine-learning-classes-in-canada', label: 'AI and ML in Canada' },
    { href: '/waterloo-computer-science-admission-requirements', label: 'Waterloo CS admission' }
  ],

  personalityCss: `
.cg-root.cg-aptw .cg-hero h1 { font-weight: 700; letter-spacing: -0.02em; line-height: 1.05; }
.cg-root.cg-aptw .cg-capsule { border-top: 2px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-aptw .cg-eyebrow { font-family: 'JetBrains Mono', ui-monospace, monospace; letter-spacing: 0.06em; font-size: 0.76rem; text-transform: uppercase; }
.cg-root.cg-aptw .cg-section-head h2 { max-width: 30ch; }
.cg-root.cg-aptw .cg-table caption { text-align: left; font-weight: 600; }
.cg-root.cg-aptw .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-aptw #project code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.8rem; line-height: 1.5; padding: 0.9rem 1rem; border-left: 4px solid var(--cg-accent); }
.cg-root.cg-aptw .cg-ladder-col { border-left: 2px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-aptw .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'CEMC pages read 22 October 2026 (CCC 2027 date, levels, languages and the Python caveat, through-a-school rule, CCO at the University of Waterloo and C++ only, IOI 2026 news, CS Circles, free past contests, CCC not required for Faculty of Mathematics admission); CCC Online Grader rules on generative AI; University of Waterloo CS recommended course; Ontario curriculum API for MTH1W C2.3, ICD2O (2023) AI and programming expectations, ICS3U and ICS4U (2008) and the one-credit note; OpenAI Terms of Use (January 1, 2026) and Anthropic Consumer Terms (Oct 8, 2025); facts-geo.md for area codes 226/382/519/548 and Eastern time offsets (IANA tzdb 2026e).',
    localProject: 'City of Waterloo Open Data, City of Waterloo Trail Counter Data (Waterloo Open Data User Licence), counter LOC_ID 4 Laurel Trail at University Ave. W., 44,114 hourly rows fetched with urllib on 22 October 2026 and modelled with our waterloo_trail_model.py (python -I): 356 training days in 2018, 360 test days in 2019; mean absolute error 90 for one average, 90 by weekday, 65 by month; 2018 daily mean about 171, 2019 about 133; zero-total days 15 April 2018, 14 and 15 September 2019; newest rows 30 November 2021 although the item says it is updated daily; whole table 534,489 rows; LOC_ID 2 and LOC_ID 10 each carry two spellings. Labelled as ours. Lesson family: baseline versus feature models, time-based split, mean absolute error, label audit.',
    requiredMentions: [
      'Laurel Trail at University Ave. W.',
      'Iron Horse Tail at John St. W.',
      'Spurline Trail South of Roger St.',
      'Waterloo Open Data User Licence',
      'Contains information provided by the City of Waterloo under licence',
      'perceived drop in traffic',
      '534,489 rows',
      '15 April 2018',
      'Spur Line Trail at Roger Street',
      'about 59 a day in January to 324 in July',
      '226, 382, 519 and 548'
    ],
    sources: [
      { claim: 'CEMC CCC page: 2027 date, levels by skill, languages, Python caveat, written in school, CCO at the University of Waterloo, CCO in C++.', url: 'https://cemc.uwaterloo.ca/contests/ccc' },
      { claim: 'CEMC how contests work: all students participate through their school.', url: 'https://cemc.uwaterloo.ca/contests/how-contests-work' },
      { claim: 'CEMC news: Team Canada at IOI 2026, supported by CEMC and the Faculty of Mathematics.', url: 'https://cemc.uwaterloo.ca/team-canada-brought-back-four-medals-ioi-2026' },
      { claim: 'CEMC Computer Science Circles: free Python tutorials.', url: 'https://cscircles.cemc.uwaterloo.ca/' },
      { claim: 'CEMC past contests: resources from the last 10 years, free.', url: 'https://cemc.uwaterloo.ca/resources/past-contests' },
      { claim: 'CCC Online Grader rules: generative AI and AI-based IDE tools forbidden.', url: 'https://cccgrader.com/rules.pdf' },
      { claim: 'University of Waterloo Computer Science: recommended Grade 11 U Introduction to Computer Science.', url: 'https://uwaterloo.ca/future-students/programs/computer-science' },
      { claim: 'Ontario curriculum API: ICD2O, ICS3U, ICS4U and MTH1W course text.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items?system.type=l2___course&elements.code=ICD2O&depth=0' },
      { claim: 'OpenAI Terms of Use: parent or guardian permission under 18.', url: 'https://openai.com/policies/terms-of-use/' },
      { claim: 'Anthropic Consumer Terms: users must be at least 18.', url: 'https://www.anthropic.com/legal/consumer-terms' },
      { claim: 'City of Waterloo Open Data: Trail Counter Data dataset.', url: 'https://data.waterloo.ca/datasets/5d41afff252e45b5b5fe7fc3fd5df3ab_0' },
      { claim: 'City of Waterloo: Waterloo Open Data User Licence (commercial use, attribution text, non-endorsement).', url: 'https://data.waterloo.ca/pages/open-data-licence' },
      { claim: 'IANA tzdb northamerica: America/Toronto offsets and the 2026 to 2027 changes.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any claim about Waterloo schools, school boards or their results: none made, by the row instruction.',
      'Any Waterloo or region population: StatCan not reachable live, so none printed.',
      'That the 2019 drop on the Laurel Trail was caused by construction: refused; the City note does not name this counter, so it is posed as a question.',
      'That the trail counter data is current: refused; the newest rows we could fetch are dated 30 November 2021.',
      'Whether the counter timestamps are local or UTC: not asserted; counts are grouped by the date the file records.',
      'A total of rows across counters built by adding locations: not computed; the agency count of 534,489 is quoted instead.',
      'That our courses earn or count toward an Ontario credit: refused; we do not grant Ontario credits.',
      'Recommending Claude or any 18+ tool to a teenager: refused under Anthropic\'s terms.',
      'Any affiliation with CEMC, the University of Waterloo, the City of Waterloo or the Ontario Ministry of Education.',
      'CEMC contest fees: left out of the copy (currency-neutral page).'
    ]
  }
};
