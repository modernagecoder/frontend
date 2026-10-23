'use strict';
// Gatineau, Quebec (cg- city page, Canada cluster Wave 2, row 126: ai-and-python-classes-for-teens-in-<city>).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md, brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Spine: a Gatineau teen is in the Quebec school system (Secondary I to V, then CEGEP), not Ontario's, even with Ottawa across
// the river; Quebec's Digital Competency Framework 2026 names computer science and AI; the CCC is offered in French; the AI
// tool age rules; and an anomaly-detection project on the Ville de Gatineau traffic counts published on Données Québec.
// Sources, read raw on 22 October 2026:
//  - quebec.ca QEP secondary page (ca/src/coding-classes-in-quebec/qc-qep-secondary.txt): "comprises programs of study for
//    students from Secondary I to Secondary V". QEP math cycle two PDF (facts-schools-contests.md, ca/src/quebec/
//    qep-math-cycle2.txt): "They are the Cultural, Social and Technical option, the Technical and Scientific option and the
//    Science option."; "All of these options allow students to enroll in a preuniversity program." quebec.ca CEGEP overview
//    (ca/src/quebec/cegep-overview.html): pre-university "Program that prepares students for university and that requires two
//    years of full-time study."; technical "requires three years of full-time study"; "Universities use the R score to
//    analyze applications".
//  - QEP Secondary Cycle Two, Cross-Curricular Competencies (qc-cross-sec2.pdf.txt): "Problem solving is not a linear process
//    that can be reduced to the application of an algorithm."
//  - Ministère de l'Éducation, Digital Competency Framework 2026 (qc-digital-competency-framework.pdf.txt), quoted only in
//    short phrases because its reproduction notice limits reuse to non-commercial purposes: Dimension text "also incorporates
//    computer science and concepts related to AI"; element "Develop or adapt a digital tool using one's knowledge and skills in
//    computer programming."; sample themes include "Machine learning and deep learning" and "Decision trees and artificial
//    neural networks"; it is an "update to the Digital Competency Framework" published in 2019.
//  - Charter of the French language s.1 (facts-geo.md): "French is the official language of Québec."
//  - CEMC (ca/src/cemc/): CCC "This contest is available in English and French."; "Wednesday, February 17, 2027"; "all
//    students must participate through their school."; BCC "available in English only". CCC Online Grader rules: "All other
//    Internet use is forbidden."; "generative AI such as CoPilot or ChatGPT".
//  - OpenAI Terms of Use, effective January 1, 2026: "If you are under 18 you must have your parent or legal guardian's
//    permission to use the Services." Anthropic Consumer Terms, Oct 8, 2025: "You must be at least 18 years old".
//  - facts-geo.md: Gatineau CSD in the Ottawa - Gatineau CMA; area codes 468/819/873 (western and northern Quebec overlay);
//    America/Toronto, UTC-4 until 1 November 2026, UTC-5 to 14 March 2027. No populations used.
//  - Données Québec (src-pilots/ai-and-python-classes-for-teens-in-gatineau/): package "debits-de-circulation", title "Débits
//    de circulation", organisation Ville de Gatineau, license_title "Attribution (CC-BY 4.0)" (dq_package_debits.json);
//    GeoJSON resource comptage.json downloaded from donneesquebec.ca. Données Québec licence page (dq-licence.txt), CC BY:
//    "Cette licence permet à d'autres personnes de distribuer, remixer, arranger et adapter votre œuvre, même à des fins
//    commerciales". CC BY 4.0 deed: "for any purpose, even commercially." www.gatineau.ca did not resolve in DNS, so the
//    City's own CSV copies were not fetched.
// Our own calculations (gatineau_anomalies.py run live with python -I, gatineau_anomalies.out.txt; gatineau_pairs_detail.out.txt):
// 7,384 count rows from 2016 to 2023; 25 rows with a heavy-vehicle share above 100 (all 2017 to 2019, highest 324.6); 644 rows
// with a 24-hour total of zero (261 of them in 2020); 1,916 rows with no sector (every 2023 row among them); city-wide quartile
// fence 14,100 flags 624 rows; 1,864 two-row pairs (same corner, approach and year, both positive), 1,762 identical, 16 with one
// side more than three times the other; most lopsided 243 against 24,300 (Fournier & Lac Leamy, 2019); Aylmer / Vanier 2018,
// approach Est, 127,400 against 12,700, the largest single value in the file (next largest 41,400).
// Lesson family: anomaly detection, validity rules, global versus local (paired) outlier tests, flags as questions.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SCRIPT = [
  'import json, urllib.request',
  'from collections import defaultdict',
  '',
  'URL = ("https://www.donneesquebec.ca/recherche/dataset/f1e7f552-278d-47d6-89c9-6aa9d3293bd1/"',
  '       "resource/388e4ff5-e1f1-4c81-a734-79b907fcf236/download/comptage.json")',
  'raw = urllib.request.urlopen(URL).read().decode("utf-8-sig")',
  'rows = [f["properties"] for f in json.loads(raw)["features"]]',
  'print(len(rows), "counts from", min(r["ANNEE"] for r in rows), "to", max(r["ANNEE"] for r in rows))',
  '',
  '# 1. rules a count must obey',
  'print("heavy-vehicle share above 100%:", sum((r["PCENT_V_LOURD"] or 0) > 100 for r in rows))',
  'print("24-hour total of zero:", sum(r["DEBIT_TOTAL24H"] == 0 for r in rows))',
  'print("no sector recorded:", sum(not r["SECTEUR"] for r in rows))',
  '',
  '# 2. one fence for the whole city: quartiles of the positive totals',
  'flows = sorted(r["DEBIT_TOTAL24H"] for r in rows if r["DEBIT_TOTAL24H"] > 0)',
  'q1, q3 = flows[len(flows) // 4], flows[3 * len(flows) // 4]',
  'fence = q3 + 1.5 * (q3 - q1)',
  'print("city-wide fence", fence, "flags", sum(f > fence for f in flows), "rows")',
  '',
  '# 3. compare each count with its partner: same corner, same approach, same year',
  'pairs = defaultdict(list)',
  'for r in rows:',
  '    pairs[(r["NOMRUE"], r["APPROCHE"], r["ANNEE"])].append(r["DEBIT_TOTAL24H"])',
  'twos = [v for v in pairs.values() if len(v) == 2 and min(v) > 0]',
  'odd = [v for v in twos if max(v) > 3 * min(v)]',
  'print(len(twos), "two-way pairs;", sum(v[0] == v[1] for v in twos), "identical;",',
  '      len(odd), "where one side is over three times the other")',
  'print("most lopsided pair:", max(odd, key=lambda v: max(v) / min(v)))'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'GATINEAU', label: 'Gatineau', blurb: 'Python and AI for Gatineau teenagers: Quebec Secondary and CEGEP, the 2026 Digital Competency Framework, the CCC in French or English, and an anomaly detector on Gatineau traffic counts.' },
  market: CA,
  slug: 'ai-and-python-classes-for-teens-in-gatineau',
  code: 'aptg',
  accent: '#6B2710',
  accentRationale: 'Gatineau: a dark brick red, #6B2710, allocated for this row and kept at least 14 RGB units from the other Canada accents and 6 from every site accent; contrast 10.30 on the paper #FBF8F2, 9.69 and 8.86 on the two darker paper tints',
  pageType: 'city',
  place: {
    name: 'Gatineau',
    eyebrow: 'Gatineau, Quebec',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Quebec' },
      { type: 'Country', name: 'Canada' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  nav: [
    { label: 'Canada', href: '/coding-classes-in-canada' },
    { label: 'CEGEP preparation', href: '/cegep-computer-science-preparation' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Gatineau',
  title: 'AI and Python Classes for Teens in Gatineau, QC | Online',
  description: 'Live online Python and AI for Gatineau teens aged 13 to 18: Quebec Secondary and CEGEP, the Digital Competency Framework, the CCC and a Gatineau traffic project.',
  ogDescription: 'Gatineau teens study in the Quebec system, not Ontario\'s. Here is where computing and AI sit in it, how the CCC works in French or English, and an anomaly detector on Gatineau traffic counts.',
  twitterDescription: 'Python and AI for Gatineau teens, live online in English, with an anomaly-detection project on Ville de Gatineau traffic counts.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Python and AI Classes for Teens in Gatineau, Quebec',
    description: 'Python, machine learning and contest programming for Gatineau students aged 13 to 18, taught live online in English, in a group or one to one, alongside Quebec Secondary and CEGEP studies.'
  },

  h1: 'AI and Python classes for teens in Gatineau',
  capsuleQ: 'How does a Gatineau teenager learn Python and AI properly, on Quebec&rsquo;s school calendar?',
  capsule: 'Modern Age Coders teaches Gatineau teens aged 13 to 18 live online, in English, in a class of fifteen to twenty or one to one. Most start with Python for Teens, then move to AI and Machine Learning for Teens, problem solving and algorithms, or preparation for the CCC, which CEMC offers in French or English. Lessons are booked in Eastern time, and the first one is free.',
  lead: 'Gatineau sits across the Ottawa River from Ontario&rsquo;s capital, and the two cities share a clock, but a Gatineau teenager studies in a different system. Quebec&rsquo;s secondary school runs from Secondary I to Secondary V and is followed by CEGEP, and its 2026 digital competency framework now names computer science and artificial intelligence. Ontario course codes that Ottawa friends mention, such as ICS3U, do not apply on this side of the bridge. This page explains where programming and AI sit for a Quebec teen, quoting the government&rsquo;s own documents, which contests are open and in which language, which AI tools a teenager may use, and a data project we built on the Ville de Gatineau&rsquo;s published traffic counts, in which the main job is catching the numbers that cannot be right.',
  wa: 'Hello Modern Age Coders, I would like a free Python or AI class for a teenager in Gatineau, Quebec.',

  picks: {
    eyebrow: 'Course picks for Gatineau teens',
    h2: 'Four courses for a Gatineau student from Secondary II to CEGEP',
    intro: 'All four are taught in English. A free first class shows which one a student is ready for.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Begin here', note: 'Python from the first statement to functions, files and dictionaries, which is what the traffic count project below needs to read and test a public file.' },
      { course: 'ai-ml-masterclass-teens', band: 'Machine learning', note: 'Models built and then attacked: what they get wrong, why, and how to measure it. Spotting bad data, as on this page, comes before any model.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Algorithms', note: 'Searching, sorting, counting and grids, the problem-solving base for contest work and for CEGEP computer science later on.' },
      { course: 'ccc-junior-and-senior-preparation-course', band: 'CCC', note: 'Original problems written by us in the format of the Canadian Computing Competition, practised under real time limits.' }
    ]
  },

  sections: [
    {
      id: 'quebec', tint: '', eyebrow: 'The Quebec system',
      h2: 'Secondary I to V, then CEGEP: where programming and AI fit for a Gatineau teen',
      intro: 'The rows below come from the Quebec government&rsquo;s own pages and programme documents, read on 22 October 2026. The last column is our reading, not the government&rsquo;s.',
      body: [
        { kind: 'table', caption: 'Quebec secondary and CEGEP facts relevant to computing (quebec.ca and Québec Education Program documents, read 22 October 2026; our notes on the right)', head: ['Stage', 'What the Quebec document says', 'Our note for a teen who codes'], rows: [
          ['Secondary school', 'The secondary programme &ldquo;comprises programs of study for students from Secondary I to Secondary V&rdquo;', 'Five years, then CEGEP, so a Gatineau teen&rsquo;s timeline differs from an Ottawa teen&rsquo;s'],
          ['Math in Secondary IV and V', '&ldquo;They are the Cultural, Social and Technical option, the Technical and Scientific option and the Science option.&rdquo;', 'Programming leans on algebra and functions; the choice of option shapes how much'],
          ['After Secondary V', '&ldquo;All of these options allow students to enroll in a preuniversity program.&rdquo;', 'No math option closes the CEGEP door on its own'],
          ['CEGEP pre-university', '&ldquo;Program that prepares students for university and that requires two years of full-time study.&rdquo;', 'The route most students take before a university computer science degree'],
          ['CEGEP technical', 'A programme that &ldquo;requires three years of full-time study&rdquo; and prepares for the job market', 'The route for a computer technology diploma straight to work'],
          ['University entry', '&ldquo;Universities use the R score to analyze applications&rdquo;', 'CEGEP grades matter; what a teen learns before CEGEP makes those courses easier']
        ] },
        { kind: 'p', text: 'Quebec does not publish a secondary computer science course in the documents we read, so programming reaches a Gatineau teen in other ways. The Digital Competency Framework 2026, from the Ministère de l&rsquo;Éducation, is the clearest sign of direction: one of its dimensions now &ldquo;also incorporates computer science and concepts related to AI&rdquo;, one element asks learners to &ldquo;Develop or adapt a digital tool using one&rsquo;s knowledge and skills in computer programming.&rdquo;, and its sample themes include &ldquo;Machine learning and deep learning&rdquo;. A framework is not a timetable, and how a school applies it varies. What it tells families is that the province now treats programming and AI as part of a young person&rsquo;s digital competence, which is exactly the ground our classes cover, with real code rather than descriptions of it.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Problem solving, in Quebec&rsquo;s words', p: 'Quebec&rsquo;s secondary cross-curricular competencies say: &ldquo;Problem solving is not a linear process that can be reduced to the application of an algorithm.&rdquo; We agree, and teach students to define the problem, try, test and start over, before any code is final.' },
          { h3: 'Ottawa is a different system', p: 'Across the river, Ottawa students follow Ontario&rsquo;s curriculum, with course codes such as ICS3U. A Gatineau teen in a Quebec school does not take those courses, so our plan for them follows Secondary and CEGEP instead.' },
          { h3: 'Before CEGEP', p: 'Our <a class="cg-inline-link" href="/cegep-computer-science-preparation">CEGEP computer science preparation</a> page covers the jump in detail, and <a class="cg-inline-link" href="/quebec-secondary-4-math-cst-ts-science">CST, TS or Science</a> explains the Secondary IV math choice.' }
        ] },
        { kind: 'callout', h3: 'No Quebec credits or diplomas from us', p: 'We teach alongside a student&rsquo;s school and we do not grant provincial credits; Quebec secondary and CEGEP results come only from the student&rsquo;s own institutions. Modern Age Coders is not connected with the Ministère de l&rsquo;Éducation or with any school or school body in Gatineau.' }
      ]
    },
    {
      id: 'language', tint: 'tint', eyebrow: 'Language and contests',
      h2: 'French at school, English in our classes, and the CCC in either',
      intro: 'Quebec&rsquo;s Charter of the French language states that &ldquo;French is the official language of Québec.&rdquo; Our classes are taught in English. CEMC&rsquo;s contests are a useful bridge, because the main programming contest can be written in French.',
      body: [
        { kind: 'table', caption: 'CEMC computing contests and language, 2026 to 2027 (CEMC contest pages, read 22 October 2026; our notes on the right)', head: ['Contest', 'Language, per CEMC', 'When, per CEMC', 'Our note'], rows: [
          ['Canadian Computing Competition (CCC)', '&ldquo;This contest is available in English and French.&rdquo;', 'Wednesday 17 February 2027', 'A student can practise with us in English and write the paper in French'],
          ['Beaver Computing Challenge (BCC)', 'Available in English only', 'Monday 9 November 2026 to Friday 20 November 2026', 'A short first contest for Grade 10 and below, where a school offers it']
        ] },
        { kind: 'p', text: 'Programming languages are the same in every human language: a Python loop reads the same in a French-language school as in an English one. What changes is the vocabulary around it, and we help students hold both, so that &ldquo;boucle&rdquo; and &ldquo;loop&rdquo; point at one idea. For the CCC, entry still runs through a school: CEMC states that &ldquo;all students must participate through their school.&rdquo; A Gatineau teen whose school has never entered can ask a teacher to order the paper; we prepare them with our own problems, never with copies of CEMC&rsquo;s past papers or solutions, which students can read in CEMC&rsquo;s free archive.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Python is accepted', p: 'The CCC accepts Python, so a Gatineau student does not need a second language to write Junior. Those aiming at the top Senior problems later add C++ with us.' },
          { h3: 'Practice in our own words', p: 'Our practice sets are written by our teachers, in English, with short glossaries of the French terms a student will see on a French-language paper.' },
          { h3: 'More on the CCC', p: 'The <a class="cg-inline-link" href="/ccc-junior-guide">CCC Junior guide</a> and <a class="cg-inline-link" href="/how-to-register-for-waterloo-contests">how to register for Waterloo contests</a> explain the format and the school-based entry.' }
        ] }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Ville de Gatineau data project',
      h2: 'Which of Gatineau&rsquo;s traffic counts cannot be right? An anomaly detector in Python',
      intro: 'The Ville de Gatineau publishes thousands of 24-hour traffic counts on Données Québec, with French field names such as DEBIT_TOTAL24H and PCENT_V_LOURD. Before training any model on data like this, a careful student hunts for the rows that are impossible or suspicious. Every count of flags in this section is our own result, not the City&rsquo;s.',
      body: [
        { kind: 'table', caption: 'Our anomaly checks on the Ville de Gatineau Débits de circulation file (7,384 rows from 2016 to 2023, downloaded from Données Québec on 22 October 2026)', head: ['Check', 'What it looks for', 'Rows it flags'], rows: [
          ['Validity rule', 'A heavy-vehicle share (PCENT_V_LOURD) above 100 per cent, which no real count can have', '25'],
          ['Validity rule', 'A 24-hour total of zero', '644'],
          ['Missing label', 'No sector recorded', '1,916'],
          ['City-wide fence', 'Totals above the upper quartile plus one and a half times the interquartile range (14,100)', '624'],
          ['Paired check', 'Two rows for the same corner, approach and year where one is over three times the other', '16 of 1,864 pairs']
        ] },
        { kind: 'p', text: 'This is the program, in standard-library Python. It downloads the GeoJSON file from Données Québec, applies three validity rules, builds one fence for the whole city from the quartiles, then compares each row with its partner row at the same corner. On 22 October 2026 it printed every number in the table:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Rules before statistics', p: 'Some values are wrong by definition. A share of heavy vehicles cannot pass 100 per cent, yet 25 rows do, the highest at 324.6, all from 2017 to 2019. No statistics are needed to flag those; a single comparison in code does it.' },
          { h3: '2. A global fence misfires', p: 'A fence built from the whole city flags 624 rows, and most of them are simply busy roads. Gatineau mixes quiet residential corners with arterials, so &ldquo;far from the typical count&rdquo; mostly means &ldquo;a main road&rdquo;, not &ldquo;an error&rdquo;.' },
          { h3: '3. Compare like with like', p: 'Comparing each count with its partner at the same corner is far sharper. Of 1,864 pairs, 1,762 match exactly and only 16 differ by more than three times. Those 16 are worth a human look; some will be genuine, such as one-way streets.' }
        ] },
        { kind: 'callout', h3: 'Two rows a student should question', p: 'At Aylmer / Vanier in 2018, one approach records 127,400 vehicles in 24 hours beside a partner row of 12,700, and 127,400 is the largest value in the whole file, three times the next largest (41,400). At Fournier &amp; Lac Leamy in 2019, a pair reads 243 against 24,300, exactly a factor of one hundred. Both look like slips in entering digits, but the file alone cannot prove it. A flag is a question for the data owner, not a verdict, and a good analyst writes it up that way.' },
        { kind: 'p', text: 'Two patterns are worth noting honestly. In 1,762 of the 1,864 pairs the two directions carry exactly the same total, which suggests the file sometimes repeats one figure on both rows rather than counting each direction separately; we pose that as a question rather than state it. And the sector field is empty on 1,916 rows, including every 2023 row, so any analysis by sector (Aylmer, Buckingham, Gatineau, Hull, Masson-Angers) has to drop the most recent year. The file is published by the Ville de Gatineau on Données Québec under the licence &ldquo;Attribution (CC-BY 4.0)&rdquo;; Données Québec explains that this licence lets others &ldquo;distribuer, remixer, arranger et adapter votre œuvre, même à des fins commerciales&rdquo;, and the Creative Commons deed says use is allowed &ldquo;for any purpose, even commercially.&rdquo; Source: Ville de Gatineau, Débits de circulation, <a class="cg-inline-link" href="https://www.donneesquebec.ca/recherche/dataset/debits-de-circulation">Données Québec</a>. The City has not endorsed this page or our teaching.' }
      ]
    },
    {
      id: 'tools', tint: '', eyebrow: 'AI tools for teens',
      h2: 'Which AI tools a Gatineau teenager may use, and where they are banned',
      intro: 'Minimum ages are written into each company&rsquo;s terms, and contest bans into the organiser&rsquo;s rules. We read each one in the original on 22 October 2026; the third column is our practice.',
      body: [
        { kind: 'table', caption: 'AI tool rules for students under 18 (organisations&rsquo; own documents, read 22 October 2026)', head: ['Tool or setting', 'The rule as written', 'What we do'], rows: [
          ['ChatGPT, OpenAI Terms of Use (January 1, 2026)', '&ldquo;If you are under 18 you must have your parent or legal guardian&rsquo;s permission to use the Services.&rdquo;', 'Only with a parent&rsquo;s permission, and only to check work, never to produce it'],
          ['Claude, Anthropic Consumer Terms (Oct 8, 2025)', '&ldquo;You must be at least 18 years old&rdquo;', 'Not used with anyone under 18'],
          ['The CCC, CCC Online Grader rules', '&ldquo;All other Internet use is forbidden.&rdquo;, naming &ldquo;generative AI such as CoPilot or ChatGPT&rdquo;', 'Contest practice with no assistant open']
        ] },
        { kind: 'p', text: 'Quebec&rsquo;s own framework now lists AI literacy among its sample themes, and AI literacy starts with knowing what a tool cannot do. The traffic project makes that concrete. Ask a chatbot to summarise Gatineau&rsquo;s traffic file and it will happily average numbers that include a heavy-vehicle share of 324.6 per cent and a count ten times its partner. It takes a person who has looked at the rows to say that those values should not be in the average at all. We want Gatineau teens to be that person, so our students write the checks themselves first, and any AI tool, where a parent allows one, comes afterwards as something to be checked.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Parents give permission', p: 'OpenAI&rsquo;s terms require a parent&rsquo;s or guardian&rsquo;s permission under 18. We tell families which lessons could involve the tool and keep every lesson complete without it.' },
          { h3: 'Adult-only tools stay out', p: 'Under Anthropic&rsquo;s terms Claude is for users aged 18 and over, so it is never part of a teen lesson, and teens are not placed in our adult agentic coding course.' },
          { h3: 'Work stays the student&rsquo;s', p: 'We explain and review. We do not write graded school or CEGEP work, and we point out when code looks pasted rather than understood.' }
        ] }
      ]
    },
    {
      id: 'time', tint: 'tint', eyebrow: 'Eastern time',
      h2: 'Gatineau and India clocks from autumn 2026 to summer 2027',
      intro: 'Gatineau and Ottawa share Eastern time and change together, on 1 November 2026 and on 14 March 2027. India does not change. The hours below show the gap; they are not a fixed timetable.',
      body: [
        { kind: 'table', caption: 'Gatineau (America/Toronto) beside India. Offsets per IANA tzdb 2026e; conversions are our own arithmetic', head: ['Part of the year', 'Gatineau', 'India ahead by', 'Sunday 10 to 11:30 am in Gatineau', 'Weekday 5:30 to 7 pm in Gatineau'], rows: [
          ['To 31 October 2026', 'UTC-4', '9 hours 30 minutes', '7:30 to 9 pm in India', '3 to 4:30 am in India, next day'],
          ['1 November 2026 to 13 March 2027', 'UTC-5', '10 hours 30 minutes', '8:30 to 10 pm in India', '4 to 5:30 am in India, next day'],
          ['From 14 March 2027', 'UTC-4', '9 hours 30 minutes', '7:30 to 9 pm in India', '3 to 4:30 am in India, next day']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Times in Eastern', p: 'Confirmations always give the Gatineau time. When the clocks move in November and March we resend every student&rsquo;s times in the week before.' },
          { h3: 'Gatineau numbers', p: 'Gatineau phones use the 819 area code and its overlays 468 and 873, shared with Sherbrooke and Trois-Rivières. The form below takes the ten digits without a leading 1.' },
          { h3: 'Quebec school calendar', p: 'We plan around the student&rsquo;s own school calendar and exam periods, which the family tells us, rather than assuming Ontario dates from across the river.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From Python in Secondary II to a defensible model before CEGEP ends',
    intro: 'The stages are approximate. We place students by what they can already program, which the free class checks.',
    cols: [
      { band: 'Secondary II and III', h3: 'Python properly', p: 'Complete programs with input, loops, lists and functions, explained in English with French terms alongside.', courses: ['python-complete-masterclass-teens'] },
      { band: 'Secondary III and IV', h3: 'Algorithms and the CCC', p: 'Searching, sorting and counting, and a first CCC Junior paper for students who want one.', courses: ['problem-solving-dsa-masterclass-teens', 'ccc-junior-and-senior-preparation-course'] },
      { band: 'Secondary V', h3: 'Data and anomalies', p: 'Public data checked and cleaned, starting with the Gatineau traffic counts, then first models.', courses: ['data-science-course-for-teens-python-data', 'ai-ml-masterclass-teens'] },
      { band: 'CEGEP years', h3: 'Models and a second language', p: 'Machine learning tested honestly, and C++ for students aiming at CCC Senior.', courses: ['ai-ml-masterclass-teens', 'cpp-programming-masterclass-for-teens'] }
    ]
  },

  ai: {
    eyebrow: 'Doubt before tools',
    h2: 'Why a Gatineau teen should learn to distrust data before trusting AI',
    intro: 'Because every model is only as good as the rows it was fed, and only a person checks the rows.',
    p1: 'The traffic file is a fair sample of real public data: mostly sound, with a few values that are impossible and a few that are merely strange. A model trained on it without checks would quietly learn from both. A student who has written the checks knows the difference between a rule that is broken, a value that is unusual, and a value that is simply large.',
    p2: 'So we teach in a fixed order. Describe the question, inspect the data, write the steps, predict the result, run it and argue with it. AI tools come later, inside the age rules, as a reviewer to be questioned. A teen who learns that order can use any tool well; one who skips it is at the tool&rsquo;s mercy.',
    closer: 'The CCC makes the same point on contest day, with no assistant allowed, so the thinking on the page is the student&rsquo;s own.',
    blogAnchor: 'a longer case for learning to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'One online classroom for Hull, Aylmer, Gatineau and Buckingham',
    intro: 'Classes are online, so a teen in Hull and another in Aylmer or Buckingham share a lesson without crossing the city.',
    cells: [
      { h3: 'Timing', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Across the Outaouais', p: 'Students elsewhere in the Outaouais and across the river in Ottawa can join the same groups, all timed in Eastern time.' },
      { h3: 'Group or private', p: 'Groups of fifteen to twenty at one level, or a private teacher for a student with a set goal such as a CCC paper or a CEGEP project.' },
      { h3: 'Language of teaching', p: 'Lessons are in English. Teachers give the French terms for key ideas so that school and class vocabulary line up.' },
      { h3: 'Equipment', p: 'A computer that can run Python 3, a microphone and a steady connection. We install Python with the student in the first lesson if needed.' },
      { h3: 'Free first class', p: 'A complete lesson at no charge and with no card details, ending with a suggested course and level.' }
    ],
    spec: { title: 'No Gatineau office', p: 'Modern Age Coders has no centre in Gatineau and claims none. Every class is live online, taught by teachers based in India, on Gatineau time.' }
  },

  fees: {
    h2: 'Fees for Gatineau families',
    intro: 'Each fee shows in your own currency, with the currency code next to it.',
    first: 'One full live lesson at no cost, ending with a placement and a course suggestion.',
    group: 'A monthly fee covering eight live classes with fifteen to twenty teens at one level.',
    private: 'A monthly fee covering one teacher and one teen at times the family picks.',
    closer: 'Gatineau families pay the same as families anywhere in Canada. There is no charge before the free class, and none until a course and a schedule are agreed; the pricing page explains missed classes and breaks.'
  },

  reviewsH2: 'Google reviews from parents and students',

  book: {
    h2: 'Book a free class for a Gatineau teen',
    intro: 'Tell us the student&rsquo;s Secondary year or CEGEP programme and any coding so far. A beginner writes a first full program; a stronger student might start on the Gatineau traffic data or one of our timed CCC-style problems.',
    success: 'Thank you. Our team will contact you soon about a class in Gatineau.'
  },

  faq: {
    h2: 'Questions from Gatineau families',
    intro: 'What Gatineau parents and teens ask us most often.',
    items: [
      { q: 'Are your classes in French or English?', a: 'In English. Teachers give French terms for the main ideas, and students can still write the CCC in French, since CEMC offers it in both languages.' },
      { q: 'Do you have a centre in Gatineau?', a: 'No. All teaching is live online, in a class of fifteen to twenty or one to one with a private teacher.' },
      { q: 'My teen is in a Quebec school. Do Ontario courses like ICS3U apply?', a: 'No. ICS3U is an Ontario course. A Gatineau student in the Quebec system goes from Secondary I to V and then CEGEP, and we plan around that.' },
      { q: 'Do your courses give Quebec credits?', a: 'No. We teach alongside school and we do not grant provincial credits; secondary and CEGEP results come from the student\'s own institutions.' },
      { q: 'Can my 14 year old use ChatGPT?', a: 'Only with your permission: OpenAI\'s terms say users under 18 need a parent\'s or legal guardian\'s permission. Our lessons never rely on it.' },
      { q: 'Is Claude allowed for teenagers?', a: 'No. Anthropic\'s consumer terms require users to be at least 18, so we never suggest Claude to students under 18.' },
      { q: 'Can AI tools be used during the CCC?', a: 'No. The grader rules forbid other internet use, including generative AI such as CoPilot or ChatGPT, so contest practice is done with AI off.' },
      { q: 'How does a Gatineau student enter the CCC?', a: 'Through a school: CEMC says all students must participate through their school. The 2027 CCC is on Wednesday 17 February 2027, and it can be written in French or English.' },
      { q: 'When are classes for Gatineau families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are confirmed in Eastern time.' },
      { q: 'Is the traffic data project real?', a: 'Yes. It uses the Ville de Gatineau\'s traffic counts published on Données Québec under CC BY 4.0. Students download the file and write the checks themselves; the City has not endorsed our teaching.' }
    ]
  },

  next: {
    eyebrow: 'More for Quebec',
    h2: 'Other pages for Gatineau and Quebec students',
    html: 'For Quebec school maths, see <a class="cg-inline-link" href="/quebec-secondary-5-math-tutor">Secondary V math help</a>. For the national picture, read <a class="cg-inline-link" href="/canada-coding-curriculum-by-province">coding curriculum by province</a> and the <a class="cg-inline-link" href="/canadian-computing-competition-ccc-prep">CCC preparation</a> page, or start from the <a class="cg-inline-link" href="/coding-classes-in-canada">Canada hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Gatineau and Quebec',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/cegep-computer-science-preparation', label: 'CEGEP CS preparation' },
    { href: '/quebec-secondary-4-math-cst-ts-science', label: 'Secondary IV math options' },
    { href: '/ai-and-machine-learning-classes-in-canada', label: 'AI and ML in Canada' },
    { href: '/canada-time-zones-2026-online-class-times', label: 'Canada time zones' }
  ],

  personalityCss: `
.cg-root.cg-aptg .cg-hero h1 { font-weight: 700; letter-spacing: -0.02em; line-height: 1.06; }
.cg-root.cg-aptg .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-aptg .cg-eyebrow { font-family: 'JetBrains Mono', ui-monospace, monospace; letter-spacing: 0.04em; font-size: 0.76rem; text-transform: uppercase; }
.cg-root.cg-aptg .cg-section-head h2 { max-width: 31ch; }
.cg-root.cg-aptg .cg-table caption { text-align: left; font-weight: 600; }
.cg-root.cg-aptg .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-aptg #project code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.78rem; line-height: 1.5; padding: 0.9rem 1rem; border-top: 2px solid var(--cg-accent); border-bottom: 2px solid var(--cg-accent); }
.cg-root.cg-aptg .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.7rem; }
.cg-root.cg-aptg .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'quebec.ca QEP secondary page (Secondary I to Secondary V); QEP math cycle two PDF (CST, TS, Science options; all lead to pre-university); quebec.ca CEGEP overview (two-year pre-university, three-year technical, R score); QEP secondary cross-curricular competencies (problem solving quote); Ministère de l\'Éducation Digital Competency Framework 2026 (short phrases: computer science and AI, programming element, machine learning theme); Charter of the French language s.1; CEMC (CCC in English and French, 2027 date, school-based entry; BCC English only and 2026 dates); CCC Online Grader rules; OpenAI Terms of Use (January 1, 2026); Anthropic Consumer Terms (Oct 8, 2025); facts-geo.md for 468/819/873 and Eastern time.',
    localProject: 'Ville de Gatineau, Débits de circulation, on Données Québec (Attribution (CC-BY 4.0)), 7,384 rows from 2016 to 2023 downloaded 22 October 2026; our gatineau_anomalies.py (python -I): 25 rows with heavy-vehicle share above 100 (highest 324.6), 644 zero totals, 1,916 rows without a sector including all of 2023, city-wide quartile fence 14,100 flags 624 rows, 1,864 two-row pairs with 1,762 identical and 16 lopsided by more than three times; most lopsided 243 against 24,300; Aylmer / Vanier 2018 at 127,400 beside 12,700, the file maximum, next largest 41,400. Labelled as ours. Lesson family: anomaly detection, validity rules, global versus paired outlier tests.',
    requiredMentions: [
      'Débits de circulation',
      'PCENT_V_LOURD',
      'Aylmer / Vanier',
      'Fournier &amp; Lac Leamy',
      'the highest at 324.6',
      'Of 1,864 pairs, 1,762 match exactly',
      'including every 2023 row',
      'Masson-Angers',
      'the 819 area code and its overlays 468 and 873',
      'comprises programs of study for students from Secondary I to Secondary V',
      'also incorporates computer science and concepts related to AI'
    ],
    sources: [
      { claim: 'quebec.ca: Québec Education Program, secondary, Secondary I to Secondary V.', url: 'https://www.quebec.ca/en/education/preschool-elementary-and-secondary-schools/programs-training-evaluation/quebec-education-program/secondary' },
      { claim: 'QEP Secondary Cycle Two mathematics: three options; all allow pre-university entry.', url: 'https://cdn-contenu.quebec.ca/cdn-contenu/education/pfeq/secondaire/programmes/PFEQ-mathematique-deuxieme-cycle-secondaire-AN.pdf' },
      { claim: 'quebec.ca CEGEP overview: pre-university two years, technical three years, R score.', url: 'https://www.quebec.ca/en/education/cegeps-private-colleges/studying/overview' },
      { claim: 'QEP Secondary Cycle Two cross-curricular competencies: problem solving quote.', url: 'https://cdn-contenu.quebec.ca/cdn-contenu/education/pfeq/secondaire/PFEQ-competences-transversales-deuxieme-cycle-secondaire-AN.pdf' },
      { claim: 'Ministère de l\'Éducation, Digital Competency Framework 2026: computer science and AI, programming element, themes.', url: 'https://cdn-contenu.quebec.ca/cdn-contenu/education/Numerique/Cadre-reference-competence-num-AN.pdf' },
      { claim: 'Charter of the French language s.1.', url: 'https://www.legisquebec.gouv.qc.ca/en/document/cs/C-11' },
      { claim: 'CEMC contests: CCC in English and French; BCC English only.', url: 'https://cemc.uwaterloo.ca/contests' },
      { claim: 'CEMC CCC page: 2027 date.', url: 'https://cemc.uwaterloo.ca/contests/ccc' },
      { claim: 'CEMC how contests work: participation through a school.', url: 'https://cemc.uwaterloo.ca/contests/how-contests-work' },
      { claim: 'CCC Online Grader rules: other internet use and generative AI forbidden.', url: 'https://cccgrader.com/rules.pdf' },
      { claim: 'OpenAI Terms of Use: parent or guardian permission under 18.', url: 'https://openai.com/policies/row-terms-of-use/' },
      { claim: 'Anthropic Consumer Terms: users must be at least 18.', url: 'https://www.anthropic.com/legal/consumer-terms' },
      { claim: 'Données Québec: Ville de Gatineau, Débits de circulation, CC BY 4.0.', url: 'https://www.donneesquebec.ca/recherche/dataset/debits-de-circulation' },
      { claim: 'Données Québec licence page: CC BY allows commercial use.', url: 'https://www.donneesquebec.ca/licence/' },
      { claim: 'IANA tzdb northamerica: America/Toronto offsets.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any claim about Gatineau schools, school bodies or their results: none made, by the row instruction.',
      'Any Gatineau population or language statistics: StatCan not reachable live, so none printed.',
      'That Quebec has a compulsory secondary computer science course: not claimed; none appears in the documents read.',
      'That the Digital Competency Framework is a course or is taught the same way in every school: refused; it is a framework.',
      'Long quotations from the Digital Competency Framework: avoided; its notice limits reproduction to non-commercial use, so only short phrases are quoted.',
      'That the 127,400 and 243 counts are errors: not asserted; posed as questions for the data owner.',
      'That paired rows repeat one approach total: posed as a question, not stated as fact.',
      'Naming a mid-block count location that includes a building number: avoided.',
      'That our courses earn Quebec credits: refused; we do not grant provincial credits.',
      'Recommending Claude or any 18+ tool to a teenager: refused under Anthropic\'s terms.',
      'Any affiliation with CEMC, the Ministère de l\'Éducation, the Ville de Gatineau or Données Québec.',
      'CEMC contest fees: left out of the copy (currency-neutral page).'
    ]
  }
};
