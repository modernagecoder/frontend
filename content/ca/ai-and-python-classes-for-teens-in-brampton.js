'use strict';
// Brampton, Ontario (cg- city page, Canada cluster Wave 2, row 124: ai-and-python-classes-for-teens-in-<city>).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md, brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Spine: Ontario offers a Brampton teen two computer studies routes (university ICS3U/ICS4U and college ICS3C/ICS4C) and
// counts computer studies in the OSSD's STEM group; the CCC Senior paper leads to the CCO and the IOI team; Skills Ontario
// has a Coding contest entered through a school; the AI tool rules from OpenAI's and Anthropic's terms; and a linear
// regression on the City of Brampton's facility energy and emissions file. No claims about local schools.
// Sources, read raw on 22 October 2026:
//  - Ontario DCP API (ca/src/ontario/api-ics-courses.json): ICS3C "This course introduces students to computer programming
//    concepts and practices. Students will write and test computer programs"; ICS4C "Students will learn object-oriented
//    programming concepts, create object-oriented software solutions, and design graphical user interfaces"; ICS4C
//    prerequisite "Introduction to Computer Programming, Grade 11, College Preparation"; ICS3U and ICS3C no prerequisite;
//    ICS4U prerequisite ICS3U.
//  - ontario.ca OSSD page (ca/src/ontario/ossd-graduation-requirements.html): "Of the 17 compulsory credits, you must complete
//    1 from the following group:" listing "computer studies"; "1 credit in technological education" (not linked to any
//    computer course here).
//  - CEMC CCC page (ca/src/cemc/ccc.html): "Senior level - any participant with intermediate to advanced programming
//    skills."; Senior Q1-2 "(e.g. sorting, searching)", Q3-4 "(e.g. careful counting, more advanced mathematical reasoning)",
//    Q5 "IOI level question"; 2026 table: Senior "Average (Mean)" 15.56, "Certificate of Distinction Cutoff" 26, "Maximum
//    Possible Score" 75, "Number of Contestants" 2439; "Approximately 20 of the top official CCC Senior participants from
//    schools in Canada are invited to the CCO at the University of Waterloo each spring."; "CCO participants must use C++.";
//    "This invitation-only event is also used to select Canada's teams for the International Olympiad in Informatics";
//    CCC 2027 "Wednesday, February 17, 2027"; "CCC participants may use C, C++, Python 2, Python 3, or Java.".
//  - Skills Ontario (ca/src/other-contests/skills-ontario-competition.html): "2027 Skills Ontario Competition: May 3rd and 4th
//    at the Toronto Congress Centre"; contest list includes "Coding (S/PS)"; "You can not register directly for the Skills
//    Ontario Competition, it must be done through your institution's contact person." No fee printed (currency-neutral page).
//  - OpenAI Terms of Use, effective January 1, 2026 (src-pilots/ai-classes-for-kids-in-canada/openai-terms.flat.txt): "You must
//    be at least 13 years old or the minimum age required in your country to consent to use the Services"; "If you are under
//    18 you must have your parent or legal guardian's permission to use the Services." Anthropic Consumer Terms, effective
//    Oct 8, 2025: "You must be at least 18 years old". CCC Online Grader rules: "generative AI such as CoPilot or ChatGPT".
//  - facts-geo.md: Brampton CSD in the Toronto CMA; area codes 289/365/742/905 (the 905 belt overlay); America/Toronto, UTC-4
//    until 1 November 2026, UTC-5 to 14 March 2027 (IANA tzdb 2026e). No populations used.
//  - City of Brampton GeoHub (src-pilots/ai-and-python-classes-for-teens-in-brampton/): item a7ae04db763c434f8834e5e7c81f6c67
//    "Energy Consumption and Greenhouse Gas Emissions", owner BramptonMaps, accessInformation "City of Brampton", licenseInfo
//    "CC BY"; layer services3.arcgis.com/rl7ACuZkiFsmDA2g/.../Environment/FeatureServer/0. Item description: "The City of
//    Brampton prepares and submits annual reports to be in compliance."; "The City receives utility bills that contain energy
//    consumption data."; "The software calculates the annual energy consumption and greenhouse gas emissions"; "Last updated:
//    August 30, 2021 with 2018 &amp; 2019 report values."; it names "The submitted datasets (2010 - 2019)". Creative Commons
//    BY 4.0 deed (cc-by-4.0-deed.html): "for any purpose, even commercially." The item does not state a CC BY version.
//    The One Million Trees layer was deliberately not used (a sibling page uses it).
// Our own calculations (brampton_ghg_model.py run live with python -I, brampton_ghg_model.out.txt; explore.py on energy_all.json):
// 711 rows, report years 2013 to 2019 only (97, 101, 103, 102, 100, 106, 102 rows); 503 training rows (2013 to 2017), 208 test
// rows (2018 and 2019); two-input least squares through the origin: 1.885 kg per cubic metre of gas and 0.0491 kg per kWh;
// average miss on the test years 196,390 kg guessing the training mean, 10,928 kg with the two-input line, 8,390 kg when fitted
// on 2017 alone; per-year gas factor 1.888 to 1.899; per-year electricity factor 0.076 (2013), 0.04 (2014), 0.043 (2015),
// 0.0355 (2016), 0.043 (2017), 0.03 (2018), 0.0305 (2019); 43 rows record zero electricity and 123 zero gas; 146 site names.
// Lesson family: linear regression by least squares, reading coefficients, a target computed from its inputs, drift over time.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SCRIPT = [
  'import json, urllib.request',
  '',
  'URL = ("https://services3.arcgis.com/rl7ACuZkiFsmDA2g/arcgis/rest/services/"',
  '       "Environment/FeatureServer/0/query?where=1%3D1&returnGeometry=false"',
  '       "&outFields=REPORT_YEAR,NATURAL_GAS_M3,ELECTRICITY_KWH,GHG_EMISSIONS_KG"',
  '       "&resultRecordCount=5000&f=json")',
  'rows = [f["attributes"] for f in json.load(urllib.request.urlopen(URL))["features"]]',
  'data = [(r["REPORT_YEAR"], r["NATURAL_GAS_M3"] or 0, r["ELECTRICITY_KWH"] or 0,',
  '         r["GHG_EMISSIONS_KG"]) for r in rows]',
  '',
  'def fit(points):',
  '    # least squares for  kg = a * gas + b * kwh  (two equations, two unknowns)',
  '    gg = sum(g * g for _, g, e, _ in points)',
  '    ee = sum(e * e for _, g, e, _ in points)',
  '    ge = sum(g * e for _, g, e, _ in points)',
  '    gy = sum(g * y for _, g, e, y in points)',
  '    ey = sum(e * y for _, g, e, y in points)',
  '    det = gg * ee - ge * ge',
  '    return (gy * ee - ey * ge) / det, (ey * gg - gy * ge) / det',
  '',
  'def miss(points, a, b):',
  '    return round(sum(abs(a * g + b * e - y) for _, g, e, y in points) / len(points))',
  '',
  'train = [p for p in data if p[0] <= 2017]',
  'test = [p for p in data if p[0] >= 2018]',
  'a, b = fit(train)',
  'avg = sum(p[3] for p in train) / len(train)',
  'print(len(data), "rows;", len(train), "train (2013-2017),", len(test), "test (2018-2019)")',
  'print("kg per m3 of gas:", round(a, 3), " kg per kWh:", round(b, 4))',
  'print("average miss, guessing the mean:", round(sum(abs(avg - p[3]) for p in test) / len(test)))',
  'print("average miss, two-input line:", miss(test, a, b))',
  'for year in range(2013, 2020):',
  '    ya, yb = fit([p for p in data if p[0] == year])',
  '    print(year, round(ya, 3), round(yb, 4))',
  'a17, b17 = fit([p for p in data if p[0] == 2017])',
  'print("trained on 2017 only:", miss(test, a17, b17))'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'BRAMPTON', label: 'Brampton', blurb: 'Python and AI for Brampton teenagers: Ontario university and college computer studies, the CCC Senior road to the CCO, AI age rules and a regression on City of Brampton energy data.' },
  market: CA,
  slug: 'ai-and-python-classes-for-teens-in-brampton',
  code: 'aipy',
  accent: '#3C2C7A',
  accentRationale: 'Brampton: a deep indigo violet, #3C2C7A, allocated for this row and kept at least 14 RGB units from the other Canada accents and 6 from every site accent; contrast 10.81 on the paper #FBF8F2, 10.16 and 9.30 on the two darker paper tints',
  pageType: 'city',
  place: {
    name: 'Brampton',
    eyebrow: 'Brampton, Ontario',
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
  routeLabel: 'Brampton',
  title: 'AI and Python Classes for Teens in Brampton, ON | Live Online',
  description: 'Live online Python and AI for Brampton teens aged 13 to 18: Ontario ICS3U and ICS3C routes, CCC Senior and CCO, AI age rules and a City of Brampton energy model.',
  ogDescription: 'The two Ontario computer studies routes open to a Brampton teen, how the CCC Senior paper leads to the CCO, the AI tool age rules, and a regression on City of Brampton energy records.',
  twitterDescription: 'Python and AI for Brampton teens, live online, with a least squares model built on City of Brampton energy data.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Python and AI Classes for Teens in Brampton, Ontario',
    description: 'Python, machine learning and CCC Senior preparation for Brampton students aged 13 to 18, taught live online in a group or one to one, beside Ontario ICS3U, ICS4U, ICS3C and ICS4C courses.'
  },

  h1: 'AI and Python classes for teens in Brampton',
  capsuleQ: 'Where does a Brampton teenager get serious Python and AI teaching that fits around school?',
  capsule: 'Modern Age Coders teaches Brampton teens aged 13 to 18 live online: Python first, then machine learning or contest programming, either in a class of fifteen to twenty or one to one. The usual route is Python for Teens followed by AI and Machine Learning for Teens; contest students add CCC preparation and Grade 11 and 12 students the Ontario Computer Science Companion. The first class is free and booked in Eastern time.',
  lead: 'Ask a Brampton Grade 10 student what comes after Python basics and the answer is often a shrug. Ontario has more on offer than most families realise: a university-preparation computer science pair, a college-preparation pair that leans into object-oriented programming and interfaces, a place for computer studies among the diploma&rsquo;s required credits, a national programming contest with a road to the international olympiad, and a provincial skills competition with its own coding event. This page lays each of those out from the official source, explains which AI tools a teenager may use under the companies&rsquo; own terms, and walks through a real regression our students build on the City of Brampton&rsquo;s published energy and emissions records for its own buildings.',
  wa: 'Hello Modern Age Coders, I would like a free Python or AI class for a teenager in Brampton, Ontario.',

  picks: {
    eyebrow: 'Course picks for Brampton teens',
    h2: 'Four courses that cover what a Brampton student meets from Grade 9 onward',
    intro: 'Two build the foundations, two sit beside school and contest goals. The free class settles which one comes first.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Starting point', note: 'Clean Python from the ground up, through functions and files, so that a teen can read a city&rsquo;s data service and reshape what comes back.' },
      { course: 'ai-ml-masterclass-teens', band: 'After Python', note: 'Models fitted, tested and questioned. The least squares project on this page, built on Brampton&rsquo;s energy file, is one of its first exercises.' },
      { course: 'ccc-junior-and-senior-preparation-course', band: 'Contest track', note: 'Our own problems in the CCC style, from Junior loops to Senior sorting, searching and counting, under real time limits.' },
      { course: 'ics3u-ics4u-computer-science-companion-course', band: 'ICS3U or ICS4U at school', note: 'Help with concepts, practice and project planning while the school course runs. The school awards the credit; we do not.' }
    ]
  },

  sections: [
    {
      id: 'routes', tint: '', eyebrow: 'Two Ontario routes',
      h2: 'University or college preparation: the two computer studies routes open to a Brampton teen',
      intro: 'Ontario lists four Grade 11 and 12 computer studies courses, two marked U for university preparation and two marked C for college preparation. The descriptions are the ministry&rsquo;s, from its curriculum service on 22 October 2026; the notes are ours.',
      body: [
        { kind: 'table', caption: 'Ontario Grade 11 and 12 computer studies courses (Ontario Ministry of Education curriculum API, read 22 October 2026; the right-hand column is our note)', head: ['Course', 'Ministry description, in part', 'Comes before it', 'Our note'], rows: [
          ['ICS3C, Introduction to Computer Programming (Grade 11, College)', '&ldquo;This course introduces students to computer programming concepts and practices. Students will write and test computer programs&rdquo;', 'Nothing required', 'A practical start for students heading to a college programme'],
          ['ICS4C, Computer Programming (Grade 12, College)', '&ldquo;Students will learn object-oriented programming concepts, create object-oriented software solutions, and design graphical user interfaces&rdquo;', '&ldquo;Introduction to Computer Programming, Grade 11, College Preparation&rdquo;', 'Classes, objects and programs with windows and buttons'],
          ['ICS3U, Introduction to Computer Science (Grade 11, University)', 'Software designed alone and in teams through a development life cycle (our summary)', 'Nothing required', 'The course the University of Waterloo lists as recommended for its computer science programme'],
          ['ICS4U, Computer Science (Grade 12, University)', 'Modular design and complex, documented programs (our summary)', 'ICS3U', 'Larger programs, planned and documented in modules']
        ] },
        { kind: 'p', text: 'The diploma itself gives computer studies a place. Ontario&rsquo;s graduation page for students who started Grade 9 in 2024 or later says: &ldquo;Of the 17 compulsory credits, you must complete 1 from the following group:&rdquo;, and computer studies is on that list beside business studies, cooperative education and others. So a computer studies course can do double duty: a credit the diploma asks for and a first real programming course. Which route suits a teen is a question of plans after Grade 12, and families should take it to the school&rsquo;s guidance team, not to us. What we can say is that both routes reward the same habit, writing and testing programs often, and that a student who has written a few hundred lines of Python before Grade 11 starts either course with room to think instead of scrambling.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Choosing U or C', p: 'ICS3U and ICS3C both list no prerequisite. The difference is direction: the U pair moves towards algorithms and design, the C pair towards object-oriented programs with interfaces. We teach both kinds of student and adjust the projects.' },
          { h3: 'Before Grade 11', p: 'Grade 9 math (MTH1W) already includes coding, and Grade 10 offers ICD2O. Students who arrive in our classes in Grade 9 or 10 usually reach Grade 11 already comfortable with loops, lists and functions.' },
          { h3: 'Planning the order', p: 'The <a class="cg-inline-link" href="/ics3u-vs-ics3c">ICS3U and ICS3C comparison</a> and the <a class="cg-inline-link" href="/ontario-computer-science-course-pathway">Ontario computer science pathway</a> set the courses side by side for families still deciding.' }
        ] },
        { kind: 'callout', h3: 'We do not grant Ontario credits', p: 'Our classes run beside a student&rsquo;s timetable and we do not grant Ontario credits; ICS3U, ICS3C, ICS4U and ICS4C are earned only at school. Modern Age Coders has no tie to the Ontario Ministry of Education or to any Peel school board.' }
      ]
    },
    {
      id: 'senior', tint: 'tint', eyebrow: 'CCC Senior to the CCO',
      h2: 'From the CCC Senior paper to Canada&rsquo;s olympiad team: the path CEMC publishes',
      intro: 'CEMC, at the University of Waterloo, runs the Canadian Computing Competition and the invitation-only Canadian Computing Olympiad. Everything quoted here is from CEMC&rsquo;s CCC page as read on 22 October 2026; the right-hand column is our advice.',
      body: [
        { kind: 'table', caption: 'CCC Senior structure, 2026 Senior results and the step after it (CEMC CCC page, read 22 October 2026)', head: ['Stage', 'CEMC&rsquo;s words or figures', 'What we suggest'], rows: [
          ['Who writes Senior', '&ldquo;Senior level - any participant with intermediate to advanced programming skills.&rdquo;', 'Move up once Junior questions 1 to 4 feel routine'],
          ['Senior questions 1 and 2', '&ldquo;(e.g. sorting, searching)&rdquo;', 'Know the built-in sort and binary search cold'],
          ['Senior questions 3 and 4', '&ldquo;(e.g. careful counting, more advanced mathematical reasoning)&rdquo;', 'Pair coding with contest math; prove a count before coding it'],
          ['Senior question 5', '&ldquo;IOI level question&rdquo;', 'A long-term goal, not a first-year target'],
          ['2026 Senior results', 'Mean 15.56 and distinction cutoff 26, each out of 75, across 2439 Senior writers', 'In a first Senior year, aim at questions 1 and 2'],
          ['After the CCC', 'About 20 top official Senior writers are invited to the CCO; &ldquo;CCO participants must use C++.&rdquo;', 'Add C++ in the year before an expected invitation']
        ] },
        { kind: 'p', text: 'The Senior numbers surprise families. A mean of 15.56 out of 75 is about a fifth of the marks, and the distinction line at 26 was about a third. That is not a sign the paper is unfair; it is built to separate strong programmers from very strong ones. CEMC adds that the olympiad is &ldquo;also used to select Canada&rsquo;s teams for the International Olympiad in Informatics&rdquo;. For a Brampton Grade 11 student, the realistic plan is to write Junior first, move to Senior the next year, and judge progress by questions solved rather than by the score alone. CEMC lists the 2027 CCC for Wednesday 17 February 2027, and the contest accepts C, C++, Python and Java.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Python first, C++ later', p: 'Python is allowed in the CCC and is the faster language to think in. Because the CCO is C++ only, students who reach the top of Senior learn C++ with us as a second language, not as their first.' },
          { h3: 'Skills Ontario has a coding event', p: 'Skills Ontario lists the &ldquo;2027 Skills Ontario Competition: May 3rd and 4th at the Toronto Congress Centre&rdquo;, with a contest titled &ldquo;Coding (S/PS)&rdquo;. Its site says entry &ldquo;must be done through your institution&rsquo;s contact person&rdquo;.' },
          { h3: 'Original problems only', p: 'We do not reproduce CEMC&rsquo;s past problems or solutions. Students find them in CEMC&rsquo;s own archive; our classes use problems we wrote for the same skills. The <a class="cg-inline-link" href="/ccc-senior-guide">CCC Senior guide</a> has the full picture.' }
        ] }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'City of Brampton data project',
      h2: 'Can a straight line predict a City of Brampton building&rsquo;s emissions from its energy bills?',
      intro: 'The City of Brampton publishes the yearly electricity use, natural gas use and greenhouse gas emissions of the buildings it operates, from offices and libraries to fire stations and arenas. Our students fit a two-input linear model to it. The figures in this section are our own output, not the City&rsquo;s.',
      body: [
        { kind: 'table', caption: 'Our least squares results on the City of Brampton&rsquo;s Energy Consumption and Greenhouse Gas Emissions file (711 rows fetched 22 October 2026; fitted on 503 rows from 2013 to 2017, tested on 208 rows from 2018 and 2019)', head: ['Model', 'What it assumes', 'Average miss on the 2018 and 2019 rows'], rows: [
          ['Mean guess', 'Every building emits the 2013 to 2017 average', '196,390 kg a year'],
          ['Two-input line, fitted on 2013 to 2017', 'Emissions = 1.885 kg per cubic metre of gas + 0.0491 kg per kWh of electricity', '10,928 kg a year'],
          ['Two-input line, fitted on 2017 only', 'The same shape of model, learned from the most recent training year alone', '8,390 kg a year']
        ] },
        { kind: 'p', text: 'Here is the program. It downloads the whole layer in one request, solves the two least squares equations by hand (no libraries, so the algebra is visible), and prints the fitted factors for each year as well as the errors in the table. We ran it on 22 October 2026 with the output shown in the table and the list below:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'table', mt: true, caption: 'Our per-year fits from the same program: the factor the line learns for each input, year by year (711 rows, our calculation)', head: ['Report year', 'Rows', 'kg per cubic metre of gas', 'kg per kWh of electricity'], rows: [
          ['2013', '97', '1.891', '0.076'],
          ['2014', '101', '1.891', '0.04'],
          ['2015', '103', '1.899', '0.043'],
          ['2016', '102', '1.891', '0.0355'],
          ['2017', '100', '1.899', '0.043'],
          ['2018', '106', '1.888', '0.03'],
          ['2019', '102', '1.891', '0.0305']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Ask why it fits so well', p: 'A line that misses by about 11,000 kg on buildings that emit hundreds of thousands looks brilliant. The City&rsquo;s own description explains it: &ldquo;The software calculates the annual energy consumption and greenhouse gas emissions&rdquo;. The emissions are worked out from the energy use, so the model is mostly rediscovering a formula.' },
          { h3: '2. Read the coefficients', p: 'The gas factor barely moves, between 1.888 and 1.899 kg per cubic metre every year. The electricity factor falls from 0.076 in 2013 to about 0.03 by 2018. The data does not say why; a student should find out what factor the reporting software used before claiming a cause.' },
          { h3: '3. Watch the rule change', p: 'Because the electricity factor dropped, a line trained on 2013 to 2017 overestimates 2018 and 2019. Training on 2017 alone cuts the miss from 10,928 to 8,390 kg. Old data is not always better data when the rule behind it shifts.' }
        ] },
        { kind: 'callout', h3: 'Gaps a careful student flags', p: 'The item says the City submitted datasets for 2010 to 2019, yet the rows we downloaded run only from 2013 to 2019. Forty-three rows record zero electricity and 123 record zero gas; some buildings may genuinely use no gas, but a building with a gas bill and no electricity at all is more likely a missing record than a fact. A model trained without checking those rows learns from the gaps as well as the data.' },
        { kind: 'p', text: 'The City notes that the reports are prepared under Ontario Regulation 25/23 and that &ldquo;The City receives utility bills that contain energy consumption data.&rdquo; Its item page adds: &ldquo;Last updated: August 30, 2021 with 2018 &amp; 2019 report values.&rdquo;, so this is a historical file, ideal for practice and not a current account of any building. The dataset carries the licence label CC BY, credited to the City of Brampton; the Creative Commons deed says that licence allows use &ldquo;for any purpose, even commercially.&rdquo; Source: City of Brampton, Energy Consumption and Greenhouse Gas Emissions, <a class="cg-inline-link" href="https://www.arcgis.com/home/item.html?id=a7ae04db763c434f8834e5e7c81f6c67">GeoHub item</a>. The City has not endorsed this page, our courses or our results.' }
      ]
    },
    {
      id: 'tools', tint: '', eyebrow: 'AI tools and the law of the terms',
      h2: 'Which AI tools a Brampton teenager may use under each company&rsquo;s terms',
      intro: 'Age limits sit in each company&rsquo;s terms of use, and contest bans in the organiser&rsquo;s rules. These lines were read in the original documents on 22 October 2026; the practice column is ours.',
      body: [
        { kind: 'table', caption: 'AI tool rules relevant to students aged 13 to 17 (each organisation&rsquo;s own text, read 22 October 2026)', head: ['Tool or setting', 'The rule, in the organisation&rsquo;s words', 'How we apply it'], rows: [
          ['ChatGPT, OpenAI Terms of Use (effective January 1, 2026)', '&ldquo;You must be at least 13 years old or the minimum age required in your country to consent to use the Services&rdquo; and, under 18, &ldquo;you must have your parent or legal guardian&rsquo;s permission&rdquo;', 'Used only with a parent&rsquo;s yes, for checking work, never for writing it'],
          ['Claude, Anthropic Consumer Terms (effective Oct 8, 2025)', 'Adults only: &ldquo;You must be at least 18 years old&rdquo;', 'Kept out of every teen class'],
          ['The CCC, CCC Online Grader rules', 'Bars &ldquo;generative AI such as CoPilot or ChatGPT&rdquo; along with other internet use', 'Contest training with assistants off from the first lesson']
        ] },
        { kind: 'p', text: 'Before a Brampton teen opens any AI tool for schoolwork or a project, we suggest three questions. Is the student old enough under the company&rsquo;s own terms, and has a parent agreed where the terms require it? Does the school or contest allow it for this task? And could the student explain every line of the result to a teacher without the tool open? The third question matters most. In the energy project above, a tool could produce the least squares code in seconds; it would not notice that the emissions were calculated from the bills, that the electricity factor dropped by more than half, or that 43 rows show no electricity at all. A student who notices those things has learned the subject. One who pasted the code has learned to paste.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The parent decides', p: 'OpenAI&rsquo;s terms give the decision to a parent or guardian until 18. We tell families in writing which lessons could involve the tool, and every lesson is complete without it.' },
          { h3: 'Adult tools stay adult', p: 'Anthropic&rsquo;s terms require users to be 18, so Claude has no place in a teen lesson, and our agentic coding course for adults does not accept students under 18.' },
          { h3: 'School work is the student&rsquo;s', p: 'We explain ideas, review reasoning and set practice. We do not write graded assignments, and we tell a student when a piece of their code looks borrowed rather than understood.' }
        ] }
      ]
    },
    {
      id: 'time', tint: 'tint', eyebrow: 'Eastern time',
      h2: 'Brampton time against India time across the 2026 to 2027 school year',
      intro: 'Brampton falls back on 1 November 2026 and springs forward on 14 March 2027. India keeps the same clock all year, so the gap changes twice. These are sample hours, not a fixed timetable.',
      body: [
        { kind: 'table', caption: 'Brampton (America/Toronto) beside India. UTC offsets per IANA tzdb 2026e; the conversions are ours', head: ['Stretch of the year', 'Brampton is at', 'Gap to India', 'Saturday 8:30 to 10 am in Brampton', 'Weekday 6 to 7:30 pm in Brampton'], rows: [
          ['To the end of October 2026', 'UTC-4', '9.5 hours', 'India 6 to 7:30 pm', 'India 3:30 to 5 am, next day'],
          ['1 November 2026 to 13 March 2027', 'UTC-5', '10.5 hours', 'India 7 to 8:30 pm', 'India 4:30 to 6 am, next day'],
          ['14 March 2027 onward', 'UTC-4', '9.5 hours', 'India 6 to 7:30 pm', 'India 3:30 to 5 am, next day']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Confirmed in Brampton time', p: 'Each class time is sent in Eastern time. In the week of each change, families get their schedule again in writing so a lesson is never lost to a clock.' },
          { h3: 'The 905 belt', p: 'Brampton numbers come under the 905 area code and its overlays 289, 365 and 742, the same set used across Peel, York, Durham and Halton. The form below takes all ten digits, without the leading 1.' },
          { h3: 'Contest season on UTC-5', p: 'From 1 November 2026 to 14 March 2027 Brampton runs on UTC-5, which covers the whole run-up to the CCC on 17 February. Weekly mock papers stay at one fixed Eastern hour so the habit is set before contest day.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first Python program at 13 to a CCC Senior paper or a model at 18',
    intro: 'Bands are approximate. A student is placed by the code they can write today, which the free class checks.',
    cols: [
      { band: 'Ages 13 and 14', h3: 'Python properly', p: 'Complete programs with input, loops, lists and functions, and the habit of testing small parts first.', courses: ['python-complete-masterclass-teens'] },
      { band: 'Ages 14 to 16', h3: 'Algorithms and data', p: 'Sorting, searching and counting for the CCC, and first public datasets such as the Brampton energy file.', courses: ['problem-solving-dsa-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 16 and 17', h3: 'School CS and models', p: 'Support beside ICS3U or ICS4U, and regression and classification tested on years the model never saw.', courses: ['ics3u-ics4u-computer-science-companion-course', 'ai-ml-masterclass-teens'] },
      { band: 'Ages 17 and 18', h3: 'Senior paper and C++', p: 'CCC Senior practice, and C++ for students with a realistic shot at the olympiad invitation.', courses: ['ccc-junior-and-senior-preparation-course', 'cpp-programming-masterclass-for-teens'] }
    ]
  },

  ai: {
    eyebrow: 'Reasoning first',
    h2: 'Why a Brampton teen should be able to fit a line by hand before asking AI to',
    intro: 'Because the best moment in the energy project is the suspicion that the result is too good, and that suspicion is human.',
    p1: 'Least squares is two equations and two unknowns. A Grade 11 student who solves them in Python, with no library hiding the algebra, understands what a model is: a rule chosen to make the misses as small as possible on the data it was shown. Everything bigger in machine learning, including the systems behind chatbots, grows from that idea.',
    p2: 'We teach in that order on purpose. Describe the problem in words, write the steps, predict the output, run it, and argue with the result. AI tools can come later, inside the age rules, as a second reader whose suggestions get checked. Teens taught this way become the people who can tell when a tool has made something up.',
    closer: 'On CCC day there is no assistant in the room at all, which is the clearest test of whether the thinking was ever the student&rsquo;s own.',
    blogAnchor: 'an essay on why coding still matters in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for Brampton, Mississauga and Caledon homes',
    intro: 'Teaching is online, so a teen in Heart Lake and one in Mississauga or Caledon share a class with no commute.',
    cells: [
      { h3: 'Scheduling', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Across Peel', p: 'Students elsewhere in Peel, in Mississauga and Caledon, join the same groups, all of them timed in Eastern time.' },
      { h3: 'Class size', p: 'Groups hold fifteen to twenty teens at one level. A private teacher suits a student with a fixed target, such as the CCC in February or a Grade 12 project.' },
      { h3: 'Ownership of work', p: 'Students write and keep their own code. Teachers explain, question and review; marked school assignments remain the student&rsquo;s.' },
      { h3: 'Set-up', p: 'A computer that runs Python 3, a microphone and a reliable connection. We install Python with the student in the first class if needed.' },
      { h3: 'The free class', p: 'A full lesson at no charge and with no card asked for. At the end the teacher recommends a course and a level, in writing.' }
    ],
    spec: { title: 'No Brampton premises', p: 'Modern Age Coders has no centre in Brampton and does not claim one. All classes are live online, taught from India, scheduled on Brampton time.' }
  },

  fees: {
    h2: 'Fees for Brampton families',
    intro: 'Fees display in your own currency, with the currency code shown beside each one.',
    first: 'A full live class, free, which ends with a placement and a course suggestion.',
    group: 'Eight live classes a month with a group of fifteen to twenty, charged as one monthly fee.',
    private: 'A teacher of the student&rsquo;s own, at times the family sets, charged as one monthly fee.',
    closer: 'Brampton families pay the same fee as families elsewhere in Canada. Billing starts only after the free class, once course and times are settled; the pricing page sets out how missed classes and breaks are handled.'
  },

  reviewsH2: 'What parents and students say on Google',

  book: {
    h2: 'Book a free Python or AI class for a Brampton teen',
    intro: 'Send the grade and a sentence about any coding so far. Beginners write a complete first program; experienced students might start on the Brampton energy data or a timed problem of ours in the CCC Senior style.',
    success: 'Thank you. Our team will be in touch shortly about a class in Brampton.'
  },

  faq: {
    h2: 'Brampton parents and teens ask',
    intro: 'Answers to the questions Brampton families send most often.',
    items: [
      { q: 'Is there a Modern Age Coders centre in Brampton?', a: 'No. Teaching is live and online, so Brampton teens attend from home, in a class of fifteen to twenty or with a private teacher.' },
      { q: 'Should my teen take ICS3U or ICS3C?', a: 'That depends on plans after Grade 12, and the school\'s guidance team is the right place to decide. Both list no prerequisite; we support students in either course.' },
      { q: 'Do your courses count as Ontario credits?', a: 'No. We teach beside the school course and we do not grant Ontario credits. Credits for ICS3U, ICS3C, ICS4U or ICS4C come only from the school.' },
      { q: 'What age does OpenAI set for ChatGPT?', a: 'Its terms say users must be at least 13, and that anyone under 18 needs a parent\'s or legal guardian\'s permission. We only involve it where a parent has agreed.' },
      { q: 'Can a 16 year old use Claude in your classes?', a: 'No. Anthropic\'s consumer terms set a minimum age of 18, so Claude is not used with any student under 18.' },
      { q: 'What does it take to reach the CCO?', a: 'A top official CCC Senior result: CEMC invites about 20 Senior writers to the CCO each spring, and the CCO is written in C++ only.' },
      { q: 'Is the CCC Senior paper very hard?', a: 'It is designed to spread out strong programmers. In 2026 the Senior mean was 15.56 out of 75, and a writer needed 26, just over a third of the marks, for a Certificate of Distinction.' },
      { q: 'Can students use AI help during the CCC?', a: 'No. The grader rules bar generative AI such as CoPilot or ChatGPT and other internet use, so our contest practice is done without assistants.' },
      { q: 'When do classes run for Brampton students?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are confirmed in Eastern time.' },
      { q: 'Is the Brampton energy data project real?', a: 'Yes. It uses the City of Brampton\'s published energy and emissions file under its CC BY licence. Students download it and fit the model themselves; the City has not endorsed our courses.' }
    ]
  },

  next: {
    eyebrow: 'More for Ontario',
    h2: 'Further reading for Brampton students',
    html: 'School courses: <a class="cg-inline-link" href="/ics3u-computer-science-help">ICS3U help</a>, <a class="cg-inline-link" href="/ics4u-computer-science-help">ICS4U help</a> and <a class="cg-inline-link" href="/ics3u-ics4u-exam-review-practice">ICS3U and ICS4U exam review</a>. Contests: the <a class="cg-inline-link" href="/canadian-computing-olympiad-cco-guide">CCO guide</a> and <a class="cg-inline-link" href="/how-to-register-for-waterloo-contests">how to register for Waterloo contests</a>. The <a class="cg-inline-link" href="/coding-classes-in-ontario">Ontario page</a> covers the rest of the province.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Brampton and Ontario',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/coding-classes-in-ontario', label: 'Ontario' },
    { href: '/coding-and-ai-classes-in-toronto', label: 'Toronto' },
    { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation' },
    { href: '/uoft-computer-science-admission-requirements', label: 'UofT CS admission' }
  ],

  personalityCss: `
.cg-root.cg-aipy .cg-hero h1 { font-weight: 700; letter-spacing: -0.025em; line-height: 1.04; }
.cg-root.cg-aipy .cg-capsule { border-bottom: 2px solid var(--cg-accent); padding-bottom: 0.8rem; }
.cg-root.cg-aipy .cg-eyebrow { font-family: 'JetBrains Mono', ui-monospace, monospace; letter-spacing: 0.05em; font-size: 0.75rem; text-transform: uppercase; }
.cg-root.cg-aipy .cg-section-head h2 { max-width: 34ch; }
.cg-root.cg-aipy .cg-table caption { text-align: left; font-weight: 600; }
.cg-root.cg-aipy .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-aipy #project code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.79rem; line-height: 1.5; padding: 0.9rem 1rem; border-left: 5px solid var(--cg-accent); }
.cg-root.cg-aipy .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.75rem; }
.cg-root.cg-aipy .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Ontario curriculum API for ICS3C, ICS4C (description and prerequisite), ICS3U and ICS4U; ontario.ca OSSD page for the STEM group that lists computer studies; CEMC CCC page (Senior level, Senior question ladder, 2026 Senior mean 15.56, cutoff 26, 2439 writers, CCO invitation of about 20, C++ only, IOI team selection, 2027 date, languages); Skills Ontario 2027 competition date, Coding (S/PS) and institution-only registration; OpenAI Terms of Use (January 1, 2026); Anthropic Consumer Terms (Oct 8, 2025); CCC Online Grader rules; facts-geo.md for the 905 belt area codes and Eastern time (IANA tzdb 2026e).',
    localProject: 'City of Brampton GeoHub, Energy Consumption and Greenhouse Gas Emissions (licence field CC BY), 711 rows fetched with urllib on 22 October 2026, report years 2013 to 2019; our brampton_ghg_model.py (python -I): 503 training rows 2013 to 2017, 208 test rows 2018 and 2019; two-input least squares 1.885 kg per cubic metre of gas and 0.0491 kg per kWh; average miss 196,390 kg for the mean guess, 10,928 kg for the line, 8,390 kg fitted on 2017 only; gas factor 1.888 to 1.899 each year; electricity factor 0.076 in 2013 falling to 0.03 in 2018; 43 rows with zero electricity, 123 with zero gas. Labelled as ours. Lesson family: linear regression, coefficients, a target computed from its inputs, drift.',
    requiredMentions: [
      'Energy Consumption and Greenhouse Gas Emissions',
      'Ontario Regulation 25/23',
      'The City receives utility bills that contain energy consumption data.',
      'Emissions = 1.885 kg per cubic metre of gas + 0.0491 kg per kWh of electricity',
      'Training on 2017 alone cuts the miss from 10,928 to 8,390 kg',
      'Forty-three rows record zero electricity and 123 record zero gas',
      'falls from 0.076 in 2013 to about 0.03 by 2018',
      '2027 Skills Ontario Competition: May 3rd and 4th at the Toronto Congress Centre',
      'Mean 15.56 and distinction cutoff 26, each out of 75, across 2439 Senior writers',
      'the 905 area code and its overlays 289, 365 and 742'
    ],
    sources: [
      { claim: 'Ontario curriculum API: ICS3C, ICS4C, ICS3U and ICS4U descriptions and prerequisites.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items?system.type=l2___course&elements.code%5Bin%5D=ICS2O,ICS3U,ICS3C,ICS4U,ICS4C&depth=0' },
      { claim: 'Ontario OSSD requirements: STEM-related group of compulsory credits includes computer studies.', url: 'https://www.ontario.ca/page/high-school-graduation-requirements' },
      { claim: 'CEMC CCC page: Senior level, Senior question ladder, 2026 averages and cutoffs, CCO invitation, C++, IOI selection, 2027 date, languages.', url: 'https://cemc.uwaterloo.ca/contests/ccc' },
      { claim: 'Skills Ontario Competition 2027: date, venue, Coding (S/PS), registration through an institution.', url: 'https://www.skillsontario.com/skills-ontario-competition' },
      { claim: 'OpenAI Terms of Use: minimum age 13 and parent or guardian permission under 18.', url: 'https://openai.com/policies/row-terms-of-use/' },
      { claim: 'Anthropic Consumer Terms: users must be at least 18.', url: 'https://www.anthropic.com/legal/consumer-terms' },
      { claim: 'CCC Online Grader rules: generative AI forbidden.', url: 'https://cccgrader.com/rules.pdf' },
      { claim: 'City of Brampton GeoHub: Energy Consumption and Greenhouse Gas Emissions item, description and CC BY licence field.', url: 'https://www.arcgis.com/home/item.html?id=a7ae04db763c434f8834e5e7c81f6c67' },
      { claim: 'Creative Commons Attribution 4.0 deed: use for any purpose, even commercially.', url: 'https://creativecommons.org/licenses/by/4.0/' },
      { claim: 'IANA tzdb northamerica: America/Toronto offsets and the 2026 to 2027 changes.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any claim about Brampton schools, Peel school boards or their results: none made, by the row instruction.',
      'Any Brampton or Peel population: StatCan not reachable live, so none printed.',
      'Why the electricity factor fell between 2013 and 2019: not asserted; the data does not say, so it is posed as a question.',
      'That the file covers 2010 to 2019: refused; the item says so, but the rows we downloaded run 2013 to 2019, and we say so.',
      'A CC BY version number: not asserted; the item field reads CC BY only, and the 4.0 deed is cited for the commercial-use wording.',
      'Naming individual City buildings or comparing them: avoided; the lesson is about the model, not a ranking of sites.',
      'Brampton One Million Trees: not used, to avoid repeating a sibling page.',
      'That ICD2O or any computer course satisfies the technological education credit: not claimed; only the STEM-group listing is quoted.',
      'That our courses earn or count toward an Ontario credit: refused; we do not grant Ontario credits.',
      'Recommending Claude or any 18+ tool to a teenager: refused under Anthropic\'s terms.',
      'Any affiliation with CEMC, Skills Ontario, the City of Brampton, Peel Region or the Ontario Ministry of Education.',
      'CEMC and Skills Ontario fees: left out of the copy (currency-neutral page).'
    ]
  }
};
