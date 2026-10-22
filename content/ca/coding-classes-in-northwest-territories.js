'use strict';
// Northwest Territories (cg- territory page, Canada cluster Plan 2, row 99). Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md,
// brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Spine: a territory in the middle of moving from Alberta's curriculum to an adapted BC one, what 2026 to 2027 changes grade by
// grade, the ADST and computer science courses now on the NWT senior high list, the new graduation assessments that replace
// Alberta diploma exams, a Yellowknife weather-data project, the CEMC contests, and one clock all year from 2026.
// Re-verified raw with curl on 22 October 2026 (copies in keyword-research-2026-09/ca/src-pilots/coding-classes-in-northwest-territories/).
// The curriculum-by-province page already quotes ECE's "managed by" and "partnering with" lines; this page does not repeat them.
//  - ECE, JK-12 Curriculum Renewal (nt-curriculum-renewal.html, www.ece.gov.nt.ca/en/curriculumrenewal): 2026-27 school year
//    "JK/K will implement the draft curriculum.", "Grades 1-3 will implement the draft curriculum in all subjects.", "Grades 7-9 will
//    implement the finalized curriculum in all subjects.", "Grade 11 will implement the final curriculum.", "Grade 12 will implement
//    the draft curriculum.", "Grade 7 FSA and Grade 12 Literacy examinations will be implemented."; 2027-28 "(final year)", "All BC
//    assessment tools (exams, standardized testing) will be in place."; "The last administration session for the Grade 12 Alberta
//    Diploma Exams will be June 2026."; proficiency scale "Emerging, Developing, Proficient or Extending", "Proficient is the goal for
//    all students.", used for grades 1 to 9; Grades 10-12 keep percentage grades; "Teaching resources, such as textbooks, will not
//    need to be replaced."; "ECE began research in 2019 ... 34 longstanding NWT education priorities"; "Career and Education Advisors
//    (CEAs) are available to work with students in Grades 9-12 in all NWT schools."; Dene Kede and Inuuqatigiit remain.
//  - ECE timeline PDF (nt-timeline-2025-05.pdf, "Updated May 2025"): "Licence agreement with Alberta Education expires Aug. 31, 2026."
//  - NWT Graduation Program Implementation Guide, Grades 10 to 12, "Updated January 2026" (nt-grad-guide.pdf): "Applied Design,
//    Skills, and Technology (ADST) courses replace Career and Technology Studies (CTS)"; "Courses are not designed to stream students.";
//    4-credit system, "30-hour Carnegie unit per credit (BC), from a 25-hour Carnegie unit (AB)", "a 4-credit course would be completed
//    over 120 instructional hours"; "80 credits will be required to graduate (56 required credits and 24 elective credits)"; "Students
//    have up to three opportunities to write each Graduation Assessment"; "Students must complete all three assessments; however, they
//    are not required to pass to graduate"; "Percentage grades are used on formal reports and transcripts for all high school courses.";
//    "Dene Kede and Inuuqatigiit remain foundational curriculum documents for all courses."; "Northern Studies 11 will replace Northern
//    Studies 10 in 2025-26."; Appendix A course codes: Computer Studies 10 MCSTU10_2/_4, Web Development 10 MWBDV10_2/_4, Electronics and
//    Robotics 10 MTEAR10_2/_4, Computer Information Systems 11 MCINF11_2/_4, Computer Programming 11 MCMPR11_2/_4, Robotics 11
//    MTROB11_2/_4, Computer Programming 12 MCMPR12 (4), Industrial Coding and Design 12 MTICD12 (4), Robotics 12 MTROB12 (4); Computer
//    Science 11 MMACS11 (4) and Computer Science 12 under Mathematics; Pre-calculus 12 listed.
//  - ECE Graduation Requirements page (nt-grad-requirements.html): "a minimum of 80 credits"; "An Arts Education and/or an Applied
//    Design, Skills, and Technologies 10, 11, or 12 (4 credits)"; "A Mathematics 11 or 12 (4 credits)"; "a minimum of 16 credits at
//    the grade 12 level".
//  - CEMC rows from facts-schools-contests.md (112, 118, 122, 123, 126, 136-139, 143, 146, 151).
//  - facts-geo.md: NWT 11 official languages, Official Languages Act s.4 (Internet Archive copy); area code 867 shared with Yukon
//    and Nunavut, permissive 7 or 10 digit local dialling (CNAC 2023 table via the Internet Archive); IANA tzdb 2026e: regulations
//    "registered 2026-08-18 and came into force" 2026-08-21, NWT on UTC-6 all year (America/Yellowknife links to America/Edmonton;
//    America/Inuvik moves to -6 on 1 November 2026). The NWT regulation PDF itself returned 404 (saved file is the error page),
//    so the time rule is attributed to the tz database. No populations used.
//  - ECCC daily climate data, YELLOWKNIFE A, Climate ID 2204101, Station ID 51058 (station inventory saved), file
//    en_climate_daily_NT_2204101_2025_P1D.csv downloaded 22 October 2026 (sha256 54fb2c59...9c1f); licence: Environment and Climate
//    Change Canada Data Services End-use Licence (eccc-msc-licence.html): "including for commercial purposes"; attribution example
//    "Data Source: Environment and Climate Change Canada". Town names checked in the NRCan CGNDB NT file (cgn_nt_csv_eng.zip).
// Five more 2025 daily files downloaded the same day from the same host and licence: INUVIK A 2202571, NORMAN WELLS A 2202801,
// FORT SIMPSON A 2202104, HAY RIVER A 2202403, FORT SMITH A 2202203 (station IDs from the saved inventory; hashes in
// station-files.sha256.txt). Six-station counts (cold_runs_nwt.py, on the page as printed, output cold_runs_nwt.out.txt;
// cold_runs_page.py gives identical output; run detail in analysis_nwt.out.txt): missing days 0, 9, 4, 1, 3, 8; lows of -30 or
// colder 43, 59, 40, 53, 36, 42; longest runs 77 (16 Oct to 31 Dec, end of file), 36 (2 Nov to 7 Dec, ended by a missing
// reading on 8 Dec, then 23 more days), 52 (10 Nov to 31 Dec), 67 (27 Jan to 3 Apr), 39 (23 Nov to 31 Dec), 39 (23 Nov to 31 Dec).
// Yellowknife detail (cold_runs.py and analysis.py, python -I, outputs cold_runs.out.txt and analysis.out.txt): 365 rows; 1 day
// missing a high and a low (2025-04-23, flag M); 53 days with a low of -30 or colder; longest run of highs below 0: 67 days,
// 27 January to 3 April 2025; 25-day run 1 to 25 January, broken by a high of 2.1 on 26 January; 51-day run 11 November to
// 31 December, cut off by the end of the file; coldest low -40.6 on 5 January; warmest high 28.9 on 31 July; 158 days with a high
// below 0. India time conversions are ours.
// Lesson family: walking ordered rows to find runs, and deciding what a gap or the edge of a file does to a count.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const TIMING = 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.';

const SCRIPT = [
  'import csv',
  '',
  'stations = {',
  '    "Inuvik A": "en_climate_daily_NT_2202571_2025_P1D.csv",',
  '    "Norman Wells A": "en_climate_daily_NT_2202801_2025_P1D.csv",',
  '    "Fort Simpson A": "en_climate_daily_NT_2202104_2025_P1D.csv",',
  '    "Yellowknife A": "en_climate_daily_NT_2204101_2025_P1D.csv",',
  '    "Hay River A": "en_climate_daily_NT_2202403_2025_P1D.csv",',
  '    "Fort Smith A": "en_climate_daily_NT_2202203_2025_P1D.csv",',
  '}',
  '',
  'for name, path in stations.items():',
  '    missing = 0',
  '    below_minus_30 = 0',
  '    run = 0',
  '    longest = 0',
  '    longest_end = ""',
  '    with open(path, encoding="utf-8-sig") as weather:',
  '        for day in csv.DictReader(weather):',
  '            high = day["Max Temp (°C)"]',
  '            low = day["Min Temp (°C)"]',
  '            if high == "" or low == "":',
  '                missing += 1',
  '                run = 0',
  '                continue',
  '            if float(low) <= -30:',
  '                below_minus_30 += 1',
  '            if float(high) < 0:',
  '                run += 1',
  '                if run > longest:',
  '                    longest = run',
  '                    longest_end = day["Date/Time"]',
  '            else:',
  '                run = 0',
  '    print(name, "| missing", missing, "| lows of -30 or colder", below_minus_30,',
  '          "| longest run below 0", longest, "ending", longest_end)'
].join('\n').replace(/</g, '&lt;').replace(/>/g, '&gt;');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'NORTHWEST TERRITORIES', label: 'Northwest Territories', blurb: 'Coding, Python and AI for NWT students during the move to an adapted BC curriculum, with a six-station weather-data project.' },
  market: CA,
  slug: 'coding-classes-in-northwest-territories',
  code: 'nt',
  accent: '#4F4C85',
  accentRationale: 'Northwest Territories: a muted northern-dusk indigo, #4F4C85, allocated for row 99, darker and greyer than the retired purple band; contrast 7.32 on the paper #FBF8F2 (6.89 and 6.30 on the two paper tints), above the 4.5 floor',
  pageType: 'city',
  courseCodePage: true,
  place: {
    name: 'Northwest Territories',
    eyebrow: 'Northwest Territories, Canada',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'Country', name: 'Canada' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  nav: [
    { label: 'Canada', href: '/coding-classes-in-canada' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Northwest Territories',
  title: 'Coding Classes in the Northwest Territories | Live Online',
  description: 'Live online coding, Python, AI and math for Northwest Territories students, mapped to the new NWT course list: Computer Programming 11, Robotics and more.',
  ogDescription: 'NWT schools are switching to an adapted BC curriculum. What changes in 2026 to 2027, the computing courses now listed, and live online classes for NWT students.',
  twitterDescription: 'Northwest Territories coding, Python and AI classes, live online, set beside the new NWT course list.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Coding, Python, AI and Math Classes for Northwest Territories Students',
    description: 'Live online coding and math for Northwest Territories students from age 6 to adult: block coding, Python, AI and machine learning, CCC preparation and Pre-calculus 12 support, taught in English in a group or one to one.'
  },

  h1: 'Coding classes in the Northwest Territories',
  capsuleQ: 'How can a student in the Northwest Territories learn coding with a live teacher?',
  capsule: 'Modern Age Coders runs live online coding, Python, AI and math classes for students in the Northwest Territories, aged 6 to adult, taught in a group of fifteen to twenty or one to one. Younger learners usually begin with Python and AI for Kids, teenagers with Python for Teens. Classes run on NWT time, UTC-6 all year, and the first one is free.',
  lead: 'Schools in the Northwest Territories are partway through a complete change of curriculum: Alberta&rsquo;s programs are being phased out and an NWT-adapted version of British Columbia&rsquo;s is coming in, one band of grades at a time. For a student who likes computing, the change is good news. The senior high list published by the Department of Education, Culture and Employment (ECE) now carries Applied Design, Skills, and Technologies courses such as Computer Programming 11 and 12, Robotics and Web Development 10, alongside Computer Science 11 and 12 under Mathematics. This page sets out what the 2026 to 2027 school year changes, which computing courses are on the list, how the new graduation assessments work, a Python project we built on weather data from six NWT stations, and how our live online classes sit beside NWT schools. We teach alongside school courses and we do not grant provincial credits, nor territorial ones.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for a student in the Northwest Territories.',

  picks: {
    eyebrow: 'Course picks for NWT students',
    h2: 'Four courses matched to the new NWT course list',
    intro: 'Each pick lines up with a course or stage on the territory&rsquo;s senior high list or the grades below it, and the free first class confirms the fit before anything is booked.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 13', note: 'Typed Python with games and turtle drawings, so a child reaches Grade 10 already comfortable with the loops and conditions that Computer Studies 10 builds on.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python from first program to files, functions and data: the ground Computer Programming 11 covers, and the language of the six-station weather project on this page.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 14 to 18', note: 'Machine learning written in Python a student can read line by line, on data they can open, so a model is something to test and question.' },
      { course: 'western-canada-grade-12-math-pre-calculus-12-math-30-1-course', band: 'Grades 11 and 12', note: 'Support for Pre-calculus 12, the BC course now on the NWT list, taught beside the school course. It does not grant a credit; the school does.' }
    ]
  },

  sections: [
    {
      id: 'switch', tint: '', eyebrow: 'The curriculum switch',
      h2: 'What the 2026 to 2027 school year changes in NWT classrooms',
      intro: 'ECE publishes the switch from Alberta&rsquo;s curriculum to an NWT-adapted BC curriculum as a grade-by-grade timeline. We read it on 22 October 2026. The quoted words are ECE&rsquo;s.',
      body: [
        { kind: 'table', caption: 'ECE&rsquo;s plan for the 2026-27 and 2027-28 school years, from its JK-12 Curriculum Renewal page (read 22 October 2026)', head: ['Grades', '2026 to 2027 school year', '2027 to 2028 school year'], rows: [
          ['JK and K', '&ldquo;JK/K will implement the draft curriculum.&rdquo;', 'Finalized curriculum'],
          ['Grades 1 to 3', 'Draft curriculum &ldquo;in all subjects&rdquo;', 'Finalized curriculum in all subjects'],
          ['Grades 4 to 6', 'Finalized curriculum, implemented in 2025 to 2026', 'No change'],
          ['Grades 7 to 9', '&ldquo;Grades 7-9 will implement the finalized curriculum in all subjects.&rdquo;', 'No change'],
          ['Grade 11', '&ldquo;Grade 11 will implement the final curriculum.&rdquo;', 'No change'],
          ['Grade 12', '&ldquo;Grade 12 will implement the draft curriculum.&rdquo;', 'Final Grade 12 curriculum; ECE calls this the final year']
        ] },
        { kind: 'p', text: 'The timeline explains why so many NWT families feel the ground moving. A student in Grade 12 this year is in the first Grade 12 class on the draft BC-based curriculum, and ECE says the Grade 7 Foundational Skills Assessment and the Grade 12 Literacy examination are introduced in 2026 to 2027 as well. By ECE&rsquo;s plan, 2027 to 2028 is the final year of the change, when &ldquo;All BC assessment tools (exams, standardized testing) will be in place.&rdquo; ECE says it began comparing western Canadian curricula in 2019 against 34 longstanding NWT education priorities before choosing BC.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A new scale on report cards', p: 'For Grades 1 to 9, ECE is moving to a proficiency scale: a student is rated Emerging, Developing, Proficient or Extending, with written feedback, instead of a percentage. ECE&rsquo;s own line is that &ldquo;Proficient is the goal for all students.&rdquo;' },
          { h3: 'High school keeps percentages', p: 'The implementation guide is explicit: &ldquo;Percentage grades are used on formal reports and transcripts for all high school courses.&rdquo; ECE gives the reason that post-secondary applications require that type of mark.' },
          { h3: 'What stays northern', p: 'Dene Kede and Inuuqatigiit remain foundational curriculum documents for every course, and NWT-created courses such as Northern Studies stay in schools. ECE also notes that existing textbooks do not need to be replaced.' }
        ] },
        { kind: 'callout', h3: 'Alongside school, not a substitute', p: 'Modern Age Coders teaches beside a student&rsquo;s school courses, and we do not grant provincial credits or NWT credits. Computer Programming 11, Pre-calculus 12 and every other credit are earned at school. We are not connected with ECE, any NWT education body or the British Columbia Ministry of Education.' }
      ]
    },
    {
      id: 'courses', tint: 'tint', eyebrow: 'Computing on the course list',
      h2: 'Computer Programming 11, Robotics 12 and the other NWT computing courses',
      intro: 'Appendix A of the NWT Graduation Program Implementation Guide (updated January 2026) lists every approved senior high course with its code and credits. These are the computing ones we found in it.',
      body: [
        { kind: 'table', caption: 'Computing courses in the NWT approved senior high list, with course codes and credits as printed by ECE (implementation guide, updated January 2026, read 22 October 2026)', head: ['Course', 'Subject group', 'Code', 'Credits'], rows: [
          ['Computer Studies 10', 'ADST', 'MCSTU10_2 or MCSTU10_4', '2 or 4'],
          ['Web Development 10', 'ADST', 'MWBDV10_2 or MWBDV10_4', '2 or 4'],
          ['Electronics and Robotics 10', 'ADST', 'MTEAR10_2 or MTEAR10_4', '2 or 4'],
          ['Computer Information Systems 11', 'ADST', 'MCINF11_2 or MCINF11_4', '2 or 4'],
          ['Computer Programming 11', 'ADST', 'MCMPR11_2 or MCMPR11_4', '2 or 4'],
          ['Robotics 11', 'ADST', 'MTROB11_2 or MTROB11_4', '2 or 4'],
          ['Computer Programming 12', 'ADST', 'MCMPR12', '4'],
          ['Industrial Coding and Design 12', 'ADST', 'MTICD12', '4'],
          ['Robotics 12', 'ADST', 'MTROB12', '4'],
          ['Computer Science 11', 'Mathematics', 'MMACS11', '4'],
          ['Computer Science 12', 'Mathematics', 'Listed beside Computer Science 11', '4']
        ] },
        { kind: 'p', text: 'Two features of the new system shape how these courses work. First, the guide says ADST courses replace Career and Technology Studies, the Alberta-era program, and that schools choose whether a Grade 10 or 11 ADST course runs as a 2-credit or a 4-credit version, the difference being how thoroughly it is taught. Second, credits are now counted the BC way: the guide describes a shift to a 30-hour unit per credit from Alberta&rsquo;s 25-hour unit, so a 4-credit course means about 120 instructional hours. A small school may offer only some of the list, which is one reason a motivated student looks outside the timetable.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: '80 credits to graduate', p: 'ECE&rsquo;s graduation page sets a minimum of 80 credits: 56 in required courses and at least 24 electives, with at least 16 credits at the Grade 12 level. One required slot is 4 credits of Arts Education or Applied Design, Skills, and Technologies.' },
          { h3: 'Math, twice', p: 'Students need a Mathematics 10 course and a Mathematics 11 or 12 course, 4 credits each. Computer Science 11 and 12 sit inside the Mathematics group on the approved list, beside Pre-calculus 11 and 12 and Foundations of Mathematics.' },
          { h3: 'No streaming by design', p: 'The guide states that &ldquo;Courses are not designed to stream students.&rdquo; Career and Education Advisors, ECE says, work with students in Grades 9 to 12 in every NWT school, and they are the right people to ask which computing courses a school runs.' }
        ] }
      ]
    },
    {
      id: 'assess', tint: '', eyebrow: 'Graduation assessments',
      h2: 'From Alberta diploma exams to NWT graduation assessments',
      intro: 'The way NWT high school students are tested is changing at the same time as the curriculum. ECE and its implementation guide set out the sequence.',
      body: [
        { kind: 'table', caption: 'Large-scale assessment changes for NWT high school students, from ECE&rsquo;s renewal page, timeline and implementation guide (read 22 October 2026)', head: ['When', 'What happens'], rows: [
          ['2024 to 2025', 'Grade 10 graduation numeracy and literacy assessments begin'],
          ['June 2026', 'ECE: &ldquo;The last administration session for the Grade 12 Alberta Diploma Exams will be June 2026.&rdquo;'],
          ['31 August 2026', 'ECE&rsquo;s timeline notes that the licence agreement with Alberta Education expires'],
          ['2026 to 2027', 'The Grade 12 graduation literacy assessment is introduced'],
          ['2027 to 2028', 'All BC assessment tools are in place']
        ] },
        { kind: 'p', text: 'What a student actually has to do is short and easy to misread, so here it is in order, from the implementation guide. First, write three assessments in total: Grade 10 literacy, Grade 10 numeracy and Grade 12 literacy. Second, know that each one allows up to three opportunities, an initial write and up to two rewrites. Third, understand the pass rule: the guide says students &ldquo;are not required to pass to graduate&rdquo;, though they must complete all three. Fourth, expect the highest Grade 10 numeracy and Grade 12 literacy results to appear on the transcript, scored on a proficiency scale, while Grade 10 literacy shows only that it was completed.' },
        { kind: 'callout', h3: 'Why this matters for math', p: 'Under the Alberta system, ECE says, diploma exam marks generally made up to 30% of a student&rsquo;s final grade in the course. The new numeracy assessment is not tied to one course and does not count toward a final grade, so a Grade 10 student&rsquo;s math mark now rests on classroom work across the year. Steady understanding beats a cram, and that is how we teach.' }
      ]
    },
    {
      id: 'cold', tint: 'deep', eyebrow: 'Our data project',
      h2: 'How long does winter stay below freezing across the NWT? Python on six weather stations',
      intro: 'Environment and Climate Change Canada publishes daily weather for stations across the territory. We downloaded the 2025 files for six airport stations, from Inuvik in the north to Fort Smith in the south, on 22 October 2026 and analysed them in Python. Every figure below is our own count from those files.',
      body: [
        { kind: 'table', caption: 'Our counts from ECCC daily files, calendar year 2025, six NWT airport stations listed north to south (downloaded 22 October 2026). A run is consecutive days whose high stayed below 0', head: ['Station', 'Days with no high or low', 'Lows of -30 or colder', 'Longest run of highs below 0', 'What ended that run'], rows: [
          ['Inuvik A', '0', '43', '77 days, 16 October to 31 December', 'The end of the file'],
          ['Norman Wells A', '9', '59', '36 days, 2 November to 7 December', 'A missing reading on 8 December'],
          ['Fort Simpson A', '4', '40', '52 days, 10 November to 31 December', 'The end of the file'],
          ['Yellowknife A', '1', '53', '67 days, 27 January to 3 April', 'A day above 0'],
          ['Hay River A', '3', '36', '39 days, 23 November to 31 December', 'The end of the file'],
          ['Fort Smith A', '8', '42', '39 days, 23 November to 31 December', 'The end of the file']
        ] },
        { kind: 'p', text: 'This is the script that prints the first four columns. It uses only the standard library and runs in a folder holding the six downloaded CSV files:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. A run is a counter that resets', p: 'For each station the loop keeps one number, run, that grows by one for every day below freezing and drops to zero on any warmer day. Remembering the largest value it ever reached, and the date when it did, gives the longest stretch. It is the same pattern as a winning streak in a game.' },
          { h3: '2. One warm afternoon splits a winter', p: 'Yellowknife is the station to study closely. January 2025 there holds two runs, not one: 25 days, then a single day on 26 January with a high of 2.1, then the 67-day run. Whether one mild afternoon should break the count is a question about meaning, not code, and students have to defend their choice.' },
          { h3: '3. Gaps and edges change answers', p: 'At Norman Wells the longest run stops at a missing reading on 8 December, and 23 more sub-zero days follow it, so a blank cell, not the weather, decided that number. And four of the six longest runs end on 31 December only because the file does: those winters carried on into 2026.' }
        ] },
        { kind: 'table', mt: true, caption: 'Yellowknife A (Climate ID 2204101) in more detail, from the same 2025 file; our counts', head: ['What we measured', 'Result'], rows: [
          ['Days missing both a high and a low', '1 (23 April, flagged M)'],
          ['Days whose high stayed below 0', '158'],
          ['Coldest low in the year', '-40.6 on 5 January'],
          ['Warmest high in the year', '28.9 on 31 July'],
          ['Run still going when the file ends', '51 days, 11 November to 31 December']
        ] },
        { kind: 'callout', h3: 'What six stations still cannot tell you', p: 'Six airports describe six points for one year. They say nothing about the land between them, nothing about whether 2025 was a typical year, and nothing about climate trends, which need many years and careful comparison. Nor does a longer run at Inuvik prove Inuvik was colder: Norman Wells had more days with a low of -30 or colder. A student who writes those limits beside the table has learned more than one who only prints it.' },
        { kind: 'p', text: 'A good extension is to download the same six stations for 2024 and join each pair of files, so the December runs can be measured to their true end and the Norman Wells gap can be tested both ways. Data Source: Environment and Climate Change Canada, used under the <a class="cg-inline-link" href="https://eccc-msc.github.io/open-data/licence/readme_en/">ECCC Data Services End-use Licence</a>, which allows reuse including for commercial purposes (<a class="cg-inline-link" href="https://climate.weather.gc.ca/">historical climate data</a>). Environment and Climate Change Canada has not endorsed this page or our classes.' }
      ]
    },
    {
      id: 'contests', tint: 'tint', eyebrow: 'Contests',
      h2: 'Computing and math contests NWT students can write through school',
      intro: 'The University of Waterloo&rsquo;s CEMC sets contests that schools anywhere in Canada can order. Students enter through a school, so the first step is a conversation with a teacher.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Beaver Computing Challenge', p: 'Written between 9 and 20 November 2026 by students in Grade 10 or below, at three levels. CEMC says the questions &ldquo;only require familiarity with concepts covered in the mathematics curriculum across all Canadian provinces&rdquo;, so no coding is needed. It lasts 45 minutes.' },
          { h3: 'Canadian Computing Competition', p: 'CEMC lists the 2027 CCC for Wednesday 17 February 2027, written in school, online and individually. Python is allowed, though CEMC warns that a perfect score may not always be possible with Python or Java, and the invitation-only Canadian Computing Olympiad that follows requires C++.' },
          { h3: 'Math contests by grade', p: 'Gauss for Grades 7 and 8 (10 to 21 May 2027), Pascal, Cayley and Fermat for Grades 9, 10 and 11 (23 and 24 February 2027), and Euclid for students in their final year of secondary school (6 April 2027), all on CEMC&rsquo;s published calendar.' }
        ] },
        { kind: 'p', text: 'CEMC is firm that &ldquo;all students must participate through their school&rdquo;, so a student who wants to write should ask early, because schools order before a deadline: for the 2027 CCC, CEMC lists Thursday 11 February 2027. In our classes we prepare with problems we write ourselves and point students to CEMC&rsquo;s free past contests for timed practice. More detail is on our pages for <a class="cg-inline-link" href="/beaver-computing-challenge-guide">the Beaver Computing Challenge</a> and <a class="cg-inline-link" href="/canadian-computing-competition-ccc-prep">CCC preparation</a>. Modern Age Coders is not connected with CEMC.' }
      ]
    },
    {
      id: 'time', tint: '', eyebrow: 'Class times',
      h2: 'One NWT clock all year, and what it means for class times',
      intro: 'The IANA tz database records that the territory&rsquo;s new time regulations came into force in August 2026, keeping the NWT on UTC-6 all year, so the gap to India no longer changes.',
      body: [
        { kind: 'table', caption: 'NWT and India time from 2026, using the IANA tz database (release 2026e); conversions ours', head: ['NWT local time', 'Offset', 'In India', 'Notes'], rows: [
          ['Weekday 4 to 7 pm', 'UTC-6', '3:30 to 6:30 am the next day', 'Same in every month'],
          ['Saturday 9 am to noon', 'UTC-6', '8:30 to 11:30 pm', 'Same in every month'],
          ['1 November 2026', 'UTC-6', 'India stays 11 hours 30 minutes ahead', 'NWT clocks do not go back'],
          ['14 March 2027', 'UTC-6', 'India stays 11 hours 30 minutes ahead', 'NWT clocks do not go forward']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Neighbours change, NWT does not', p: 'From 1 November 2026, Yellowknife shares a clock with Calgary and Regina all year. Ontario still changes twice a year, so a family with relatives in Toronto will see the gap to them shift while the gap to India stays put.' },
          { h3: 'The 867 area code', p: 'NWT numbers use area code 867, which the territory shares with Yukon and Nunavut. Enter the ten digits in the form; the +1 is filled in already.' },
          { h3: 'Languages', p: 'The NWT Official Languages Act recognizes 11 official languages. Our classes are taught in English, and students who speak another language at home are welcome in every group.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From the first block program to Computer Programming 12 and AI',
    intro: 'Treat the ages as a starting point. The free class shows us what a student can already do, and we place them from that.',
    cols: [
      { band: 'Ages 6 to 9', h3: 'Sequences and blocks', p: 'Block coding and small stories that a child can explain aloud, about the age NWT students meet the new primary curriculum.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 9 to 13', h3: 'First typed code', p: 'Python with games and drawings, and a first honest look at how AI tools guess, before Grade 10 ADST choices arrive.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] },
      { band: 'Ages 13 to 16', h3: 'Python and contests', p: 'Files, functions and data, a Beaver or CCC Junior attempt, and the groundwork for Computer Programming 11.', courses: ['python-complete-masterclass-teens', 'ccc-junior-and-senior-preparation-course'] },
      { band: 'Ages 16 to 18', h3: 'AI and Pre-calculus 12', p: 'Machine learning in Python, and support beside the BC-based Grade 12 math now taught in NWT schools.', courses: ['ai-ml-masterclass-teens', 'western-canada-grade-12-math-pre-calculus-12-math-30-1-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Why learn to code in the Northwest Territories when AI writes code?',
    intro: 'Because an AI tool will count the cold days for you, but it will not decide what counts as a cold day.',
    p1: 'Ask an assistant for the longest run of freezing days in the Yellowknife file and you will get working code. You may not get a question about the missing reading on 23 April, a warning that the December run is cut off by the end of the file, or a note that one afternoon at 2.1 split January in two. Each of those changes the answer, and a student only spots them after building the loop by hand.',
    p2: 'That is the habit we train: decide what you are measuring, predict the result, write the code, then challenge the output. Teenagers use AI tools under age rules we follow, as a way to check reasoning they can already do, never as a way to skip it.',
    closer: 'BC&rsquo;s curriculum, which the NWT is adapting, is built around competencies, the doing as well as the knowing; reasoning through a problem is the competency AI cannot supply.',
    blogAnchor: 'why coding still matters with AI'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Classes that reach every NWT community with a connection',
    intro: 'Teaching happens online, so a student in a small community has the same teacher and the same lesson as a student in Yellowknife.',
    cells: [
      { h3: 'Timing', p: TIMING },
      { h3: 'Across the territory', p: 'Students in Yellowknife, Hay River, Inuvik, Fort Smith, Norman Wells and Fort Simpson can join the same classes, all scheduled on the single NWT clock.' },
      { h3: 'Two formats', p: 'A group of fifteen to twenty students working at the same stage, or one-to-one lessons for faster progress, contest work or Pre-calculus 12 support.' },
      { h3: 'Built around NWT courses', p: 'Teachers plan around the course names on the NWT list, such as Computer Studies 10 and Computer Programming 11, and never complete graded school work for a student.' },
      { h3: 'Equipment', p: 'A laptop or desktop with sound, and an internet connection steady enough for a video call. That is all the first lesson needs.' },
      { h3: 'The first class', p: 'A full lesson with a teacher at no cost, which finishes with a suggested level, course and time. We ask for no card details.' }
    ],
    spec: { title: 'No office in the territory', p: 'Modern Age Coders has no centre in the Northwest Territories and claims none. Classes are taught live online from India, with every time given in NWT time.' }
  },

  fees: {
    h2: 'What classes cost for NWT families',
    intro: 'One free lesson, then a monthly fee for a group or for one-to-one teaching, displayed in your own currency.',
    first: 'A full first lesson, free of charge, that ends with a recommended level, course and class time.',
    group: 'The monthly fee for a group of fifteen to twenty learners at one stage, with eight live classes a month.',
    private: 'The monthly fee for one teacher working with one student, at agreed times.',
    closer: 'Families in the territories pay the same fee as families in the provinces. No payment is taken before the free lesson, and the pricing page covers holidays and missed classes.'
  },

  reviewsH2: 'Google reviews from families and students',

  book: {
    h2: 'Tell us about your NWT student',
    intro: 'The first task fits the learner: a block-coded story for a young child, a Python dice game for a middle grader, or the six NWT weather files for a teenager ready for real data.',
    success: 'Thank you. The team will get in touch soon about a class in the Northwest Territories.'
  },

  faq: {
    h2: 'Northwest Territories coding questions',
    intro: 'Questions NWT parents and students tend to ask before the first lesson.',
    items: [
      { q: 'Are there coding classes in the Northwest Territories?', a: 'Yes, online and live. Modern Age Coders has no NWT centre. Students take part from home with a real teacher, in a group of fifteen to twenty or one to one.' },
      { q: 'Are NWT schools using the BC curriculum now?', a: 'They are moving to it in stages. ECE is phasing in an NWT-adapted version of the BC curriculum by grade band, and its plan names 2027 to 2028 as the final year of the change.' },
      { q: 'Which coding courses can NWT high school students take?', a: 'The approved list includes Computer Studies 10, Web Development 10, Computer Programming 11 and 12, Robotics 11 and 12, Industrial Coding and Design 12, and Computer Science 11 and 12. Each school decides which of them it offers.' },
      { q: 'Do your classes give NWT credits?', a: 'No. We do not grant provincial credits or territorial ones. Courses such as Computer Programming 11 are credited by the school; our classes run beside them.' },
      { q: 'Do NWT students still write Alberta diploma exams?', a: 'No. ECE set June 2026 as the last administration of the Grade 12 Alberta Diploma Exams in the NWT. Students now complete graduation assessments in Grade 10 literacy and numeracy and Grade 12 literacy, which they must write but do not have to pass.' },
      { q: 'What age can a child start?', a: 'Age 6 is the usual start, with block coding. Typed Python normally follows somewhere around 9 to 12, and adults can join too.' },
      { q: 'Can an NWT student enter the CCC?', a: 'Yes, through a school. CEMC lists the 2027 CCC for Wednesday 17 February 2027, and students cannot register as individuals. We prepare them with our own problems in Python, C++ or Java.' },
      { q: 'What time do classes run in NWT time?', a: TIMING + ' Times are given in NWT time, UTC-6, which no longer changes in November or March.' },
      { q: 'Will an 867 number work in the booking form?', a: 'Yes. Enter the ten digits of the 867 number without a leading 1, and the form adds +1.' },
      { q: 'How are the fees shown?', a: 'The fees part of this page lists the free first class, the monthly group fee and the monthly one-to-one fee, each in your own currency. There is no charge before the free class.' }
    ]
  },

  next: {
    eyebrow: 'More for Canada',
    h2: 'Other pages for NWT students and families',
    html: 'Begin at <a class="cg-inline-link" href="/coding-classes-in-canada">coding classes in Canada</a>, or see how the territory compares with the provinces on <a class="cg-inline-link" href="/canada-coding-curriculum-by-province">coding in every provincial and territorial curriculum</a>. Since the NWT is adopting BC courses, <a class="cg-inline-link" href="/coding-classes-in-british-columbia">our British Columbia page</a> is useful background, and <a class="cg-inline-link" href="/canada-time-zones-2026-online-class-times">Canadian time zones in 2026</a> explains the clock changes elsewhere. For math, there is <a class="cg-inline-link" href="/online-math-tutor-canada">online math tutoring in Canada</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'NWT and Canada',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/coding-classes-in-british-columbia', label: 'British Columbia' },
    { href: '/canada-coding-curriculum-by-province', label: 'Curriculum by province' },
    { href: '/beaver-computing-challenge-guide', label: 'Beaver Computing Challenge' },
    { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation' }
  ],

  personalityCss: `
.cg-root.cg-nt .cg-hero h1 { font-weight: 680; letter-spacing: -0.02em; line-height: 1.05; }
.cg-root.cg-nt .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-nt .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; font-size: 0.76rem; text-transform: uppercase; }
.cg-root.cg-nt .cg-section-head h2 { max-width: 34ch; letter-spacing: -0.012em; }
.cg-root.cg-nt .cg-table caption { font-weight: 640; text-align: left; }
.cg-root.cg-nt .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-nt #cold code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.8rem; line-height: 1.55; padding: 0.9rem 1rem; border-left: 4px solid var(--cg-accent); }
.cg-root.cg-nt .cg-ladder-col { border-bottom: 2px solid var(--cg-accent); padding-bottom: 0.8rem; }
.cg-root.cg-nt .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Northwest Territories, read raw on 22 October 2026 from ece.gov.nt.ca (Department of Education, Culture and Employment): JK-12 Curriculum Renewal page (2026-27 implementation by grade band, 2027-28 final year, last Alberta Grade 12 Diploma Exams June 2026, proficiency scale for Grades 1 to 9, percentage grades in high school, 2019 research against 34 priorities, Career and Education Advisors); timeline PDF updated May 2025 (Alberta Education licence expires 31 August 2026); NWT Graduation Program Implementation Guide updated January 2026 (ADST replaces CTS, 4-credit system, 80 credits, three graduation assessments with up to three opportunities and no pass requirement, Appendix A course codes for Computer Studies 10, Web Development 10, Electronics and Robotics 10, Computer Information Systems 11, Computer Programming 11 and 12, Robotics 11 and 12, Industrial Coding and Design 12, Computer Science 11 and 12); Graduation Requirements page. CEMC 2026-27 dates and rules; IANA tzdb 2026e (NWT UTC-6 all year); area code 867 (CNAC via the Internet Archive); NWT Official Languages Act s.4 (Internet Archive copy).',
    localProject: 'Environment and Climate Change Canada daily climate data for six NWT airport stations (INUVIK A, NORMAN WELLS A, FORT SIMPSON A, YELLOWKNIFE A, HAY RIVER A, FORT SMITH A), calendar year 2025, CSVs downloaded 22 October 2026 under the ECCC Data Services End-use Licence and analysed with our scripts cold_runs_nwt.py, cold_runs.py and analysis.py (python -I). Six-station table: missing days 0/9/4/1/3/8, lows of -30 or colder 43/59/40/53/36/42, longest sub-zero runs 77/36/52/67/39/39 days, four of them cut off by the end of the file and the Norman Wells run ended by a missing reading on 8 December. Yellowknife detail: 365 rows; 1 missing day (23 April, flag M); 53 days with a low of -30 or colder; 158 days with a high below 0; longest run of highs below 0, 67 days from 27 January to 3 April; January split by a 2.1 high on 26 January; 51-day run from 11 November cut off at 31 December; coldest low -40.6 (5 January); warmest high 28.9 (31 July). Labelled as ours. Lesson family: runs in ordered rows, and what gaps and file edges do to a count.',
    requiredMentions: [
      'MCMPR11_2 or MCMPR11_4',
      'Industrial Coding and Design 12',
      'Proficient is the goal for all students.',
      'The last administration session for the Grade 12 Alberta Diploma Exams will be June 2026.',
      'are not required to pass to graduate',
      '34 longstanding NWT education priorities',
      '67 days, 27 January to 3 April',
      'a single day on 26 January with a high of 2.1',
      '51 days, 11 November to 31 December',
      '77 days, 16 October to 31 December',
      'A missing reading on 8 December',
      'Yellowknife shares a clock with Calgary and Regina all year'
    ],
    sources: [
      { claim: 'ECE JK-12 Curriculum Renewal: timeline by school year, assessments, proficiency scale, Indigenous knowledge and local courses.', url: 'https://www.ece.gov.nt.ca/en/services/jk-12-school-curriculum/jk-12-curriculum-renewal' },
      { claim: 'ECE JK-12 Curriculum Renewal implementation timeline PDF (updated May 2025).', url: 'https://www.ece.gov.nt.ca/sites/ece/files/2025-05_-_timeline_-_curriculum_renewal.pdf' },
      { claim: 'NWT Graduation Program Implementation Guide, Grades 10 to 12 (updated January 2026): course list and codes, credit system, graduation assessments.', url: 'https://www.ece.gov.nt.ca/sites/ece/files/resources/nwt_graduation_program_implementation_guide_1.pdf' },
      { claim: 'ECE Graduation Requirements: 80 credits, required courses, 16 credits at Grade 12.', url: 'https://www.ece.gov.nt.ca/en/services/jk-12-school-curriculum/graduation-requirements' },
      { claim: 'CEMC: 2026-27 contest dates, school-only participation, CCC languages and the Python caveat, BCC needing no coding.', url: 'https://cemc.uwaterloo.ca/contests' },
      { claim: 'Environment and Climate Change Canada historical climate data (daily data for INUVIK A, NORMAN WELLS A, FORT SIMPSON A, YELLOWKNIFE A, HAY RIVER A and FORT SMITH A).', url: 'https://climate.weather.gc.ca/' },
      { claim: 'Environment and Climate Change Canada Data Services End-use Licence.', url: 'https://eccc-msc.github.io/open-data/licence/readme_en/' },
      { claim: 'IANA tzdb northamerica: NWT year-round UTC-6 from 2026, America/Inuvik and the Yellowknife link.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any NWT or Yellowknife population figure: StatCan was not reachable live, so none is printed.',
      'That NWT schools teach BC courses unchanged: ECE says subjects are reviewed and adapted, so the page names only courses on the NWT approved list.',
      'That every NWT school offers every listed computing course: not stated by ECE; the page says each school decides.',
      'That our classes earn NWT or provincial credits: refused; we do not grant provincial credits or territorial ones.',
      'Any climate trend, comparison between years, or ranking of which community is coldest from one year of six stations: refused; the page says what the files cannot show.',
      'Attributing the year-round UTC-6 rule to a GNWT document: the regulation PDF returned 404, so the IANA tz database is cited.',
      'Computer Science 12 course code: the PDF table layout did not let us pair it with certainty, so no code is printed for it.',
      'CEMC fees: left out on purpose (currency-neutral page).',
      'Names of schools, education bodies results or private people: not used.',
      'Any affiliation with ECE, any NWT education body, the British Columbia Ministry of Education, Environment and Climate Change Canada or CEMC.'
    ]
  }
};
