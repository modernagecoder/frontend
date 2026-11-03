'use strict';
// Coding for international school students in Stuttgart (ag- school door, Germany cluster P5 row DE127).
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD.
// Angle: a pupil at an English-medium international school in or near Stuttgart, aged about 11 to 18, taking IB, IGCSE
// or AP computing. International schools appear only as context from AGIS and the KMK list. The page sets out what the
// schools list, the 2027 exam facts we could verify (IGCSE 0478 papers, AP dates in German time), the German-school
// contrast in Baden-Württemberg, and an original statistics-flavoured Python project on Stuttgart weather data.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/de/; read 2 and 3 Nov 2026):
//  - AGIS directory page, International School of Stuttgart (facts-school/src/agis-international-school-of-stuttgart/):
//    "Schüler 814"; "Angebotene Abschlüsse IB Primary Years Programme (PYP) IB Middle Years Programme (MYP)
//    International Baccalaureate (IB)" (FACTS 237). Nearby list on that page: Black Forest Academy, Baden-Wuerttemberg,
//    265 Schüler:innen; Black Forest Academy offers "Advanced Placement (AP); USA Curriculum & Diploma" (225).
//    International School of Ulm/Neu-Ulm: PYP, IB, IGCSE (239).
//  - AGIS homepage and Wer wir sind: all members "autorisierte IB-Schulen" (247); IB Diploma with prescribed combinations
//    equivalent to the Abitur (248); MYP or IGCSE equivalent to the Mittlere Reife (249); up to 65 nations and English as
//    the common teaching language (250).
//  - KMK IB recognition agreement (10.03.1986 i. d. F. 15.06.2023), Anlage 1 "(Stand: 26.03.2026)", heading
//    "Internationale Schulen, deren Absolventinnen/Absolventen aufgrund einer gesonderten Vereinbarung mit der IBO bei
//    Belegung von Mathematics: Analysis and Approaches SL oder Mathematics: Applications and Interpretation SL ein
//    allgemeiner Hochschulzugang eröffnet werden kann"; rows "34 International School of Stuttgart 001046 Mai 2021" and
//    "58 SIS Swiss International School Stuttgart-Fellbach 049128 Mai 2026" (src-pages/ib-computer-science-tutor-germany/
//    kmk-ib/).
//  - Cambridge IGCSE Computer Science 0478 syllabus 2026 to 2028 (src-pages/igcse-computer-science-tutor-germany/
//    697167-2026-2028-syllabus.txt): "Paper 1 – Computer Systems Written paper, 1 hour 45 minutes, 75 marks"; "Paper 2 –
//    Algorithms, Programming and Logic Written paper, 1 hour 45 minutes, 75 marks"; "15-mark unseen scenario question";
//    "pseudocode or their choice of one of the following programming languages: Python, Visual Basic or Java";
//    "finding maximum, minimum and average"; "Calculators are not allowed in this examination."; "Exams are available in
//    the June and November series."
//  - College Board AP Central (src-pages/ap-computer-science-tutor-germany/): CSA "Wed, May 12, 2027 | Session 2"; CSP
//    "Fri, May 14, 2027 | Session 1"; Create deadline "April 30, 2027 (11:59 p.m. ET)"; start-time table row "+02:00
//    9:00 a.m. 1:00 p.m." for May 2027. Our calculation: 23:59 EDT (UTC-4) on 30 April = 05:59 on 1 May 2027 in Germany.
//  - GI Informatik-Monitor 2026/27, Baden-Württemberg page: Leistungsfach written Abitur "zentral (landesweit
//    einheitlich) organisiert"; "Eine Programmierumgebung ist als Hilfsmittel nicht erlaubt"; Basisfach three hours,
//    Leistungsfach five hours.
//  - ibo.org: Cloudflare challenge recorded in BLOCKED.md by an earlier writer; not retried; no IB exam dates printed.
//  - KMK Ferien 2026/27, Baden-Württemberg row (as on the sibling page); Destatis: Stuttgart 612,663 (31.12.2024).
//  - Data: Landeshauptstadt Stuttgart via Open Data BW, "Klima- und Wetterdaten",
//    https://ckan.govdata.de/dataset/klima-und-wetterdaten, licence CC BY 4.0, CSV wetter_stuttgart_seit_1980.csv
//    (358,685 bytes, sha256 05530fe2...2ab30b4b), downloaded 2 Nov 2026. Dataset notes: data "bis 1983 von der Messstelle
//    des Wetteramts Stuttgart, seit 1984 von der automatischen Messstelle des Deutschen Wetterdienstes auf dem
//    Schnarrenberg". We use the yearly row "Temperaturkenntage; heiße Tage" for 1980 to 2024 (45 years).
// Our own calculations (scratchpad de/w/C4/stu/v1.py, v2.py, python3 -I): v1 prints "2003 to 2021: -24" and "1993 to
// 2022: 27"; v2 prints "1985 to 1994 : 7.3 hot days a year over 10 years", "1995 to 2004 : 11.5 ...", "2005 to 2014 :
// 10.1 ...", "2015 to 2024 : 19.5 ...".
// Lesson family: two single years can tell any story; compare equal windows, measured the same way, and say how many
// values sit in each.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'hot = {}',
  'with open("stuttgart_hot_days.csv", encoding="utf-8") as f:',
  '    for row in csv.DictReader(f):',
  '        hot[int(row["year"])] = int(row["hot_days"])',
  '',
  'def change(a, b):',
  '    return hot[b] - hot[a]',
  '',
  'print("2003 to 2021:", change(2003, 2021))',
  'print("1993 to 2022:", change(1993, 2022))'
].join('\n');

const V2 = [
  'def mean(values):',
  '    return sum(values) / len(values)',
  '',
  'for start in range(1985, 2025, 10):',
  '    window = [hot[y] for y in range(start, start + 10)]',
  '    print(start, "to", start + 9, ":", round(mean(window), 1), "hot days a year over", len(window), "years")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'school', label: 'Stuttgart: international school pupils' },
  slug: 'coding-for-international-school-students-stuttgart',
  code: 'stu',
  accent: '#9D4352',
  accentRationale: 'Coding for international school students, Stuttgart: a raspberry red #9D4352, a step brighter than the Stuttgart kids page so the two read as siblings; contrast 5.08 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Coding for international school students in Stuttgart',
  title: 'Coding for International School Students in Stuttgart',
  description: 'IB, IGCSE and AP computing help for international school pupils in Stuttgart: live online in English, 2027 exam facts in German time and a Stuttgart data project.',
  ogDescription: 'Live online computer science in English for pupils at international schools in and around Stuttgart: what the schools list, IGCSE and AP exam facts for 2027, and a Python project on fifty years of Stuttgart hot days.',
  twitterDescription: 'IB, IGCSE and AP computing for Stuttgart international school pupils, live in English, with a Stuttgart weather data project.',
  pageName: 'Coding for International School Students in Stuttgart',
  webPageDescription: 'A guide for pupils and parents at English-medium international schools around Stuttgart to computer science support, built from AGIS, the KMK IB agreement, the Cambridge 0478 syllabus, College Board 2027 dates and an original project on the city\'s open weather data.',
  courseDescription: 'Live online computer science lessons in English for international school pupils in Stuttgart aged about 11 to 18: IB Diploma Computer Science, IGCSE 0478 and AP Computer Science, in a group of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'International schools, Stuttgart',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#schools', label: 'Schools' },
    { href: '#exams', label: 'Exams' },
    { href: '#project', label: 'Project' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Stuttgart &middot; International schools &middot; IB, IGCSE and AP',
  h1: 'Coding for international school students in Stuttgart',
  lede: 'A pupil at an English-medium international school near Stuttgart sits computing exams written in English, marked against an international syllabus, on a calendar that has little to do with the Baden-Württemberg one. This page collects what the schools themselves list, the 2027 exam facts we could check at the source, how a German Gymnasium handles the same subject, and a project on Stuttgart weather records that trains exactly the averaging skills those exams ask for.',
  secondaryCta: { href: '#exams', label: 'See the 2027 exam facts' },
  wa: 'Hello Modern Age Coders, my child attends an international school near Stuttgart and needs help with computer science in English. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students worldwide &middot; IB, IGCSE and AP taught in English',
  spec: [
    ['Pupils', 'About 11 to 18, MYP to Diploma age'],
    ['Syllabuses', 'IB Computer Science, IGCSE 0478, AP CSA and CSP'],
    ['Languages', 'Python, Java, Cambridge pseudocode'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Mentors', 'Based in India, live over video'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In brief',
  capsule: 'Modern Age Coders teaches computer science live online, in English, to pupils at international schools in and around Stuttgart: IB Diploma Computer Science, Cambridge IGCSE 0478 and AP Computer Science A and Principles. Lessons follow the school\'s syllabus and exam language, with Python, Java or Cambridge pseudocode. A regular mentor matches the pupil\'s pace and accent, in a class of fifteen to twenty or one to one, at times that fit Stuttgart afternoons.',

  picks: {
    eyebrow: 'Matched to the syllabus',
    h2: 'Three courses for international school pupils near Stuttgart',
    lede: 'One for each of the three computing routes these schools offer: the IB Diploma, Cambridge IGCSE and the American Advanced Placement programme.',
    items: [
      { course: 'ib-diploma-computer-science-course', code: 'STU / 01', title: 'IB Diploma Computer Science', note: 'For DP pupils in their last two school years, SL or HL. Concepts, programming in Python or Java, and steady help with the internal assessment.' },
      { course: 'igcse-computer-science-0478-course', code: 'STU / 02', title: 'IGCSE Computer Science 0478', note: 'For pupils of about 14 to 16. Both written papers, Cambridge pseudocode and the 15-mark scenario question practised under time.' },
      { course: 'ap-computer-science-a-java-exam-prep-course', code: 'STU / 03', title: 'AP Computer Science A', note: 'For pupils taking the Java exam on 12 May 2027. Classes, ArrayLists, 2D arrays and the four free-response question types.' }
    ]
  },

  sections: [
    {
      id: 'schools',
      eyebrow: 'International schools',
      h2: 'Which international schools are there around Stuttgart, and what do they teach?',
      lede: 'We name schools only as background, taken from the directory of AGIS, the association of international schools in Germany, and from the KMK. We are not connected with any school, and we never describe a school as a source of our students.',
      body: [
        { kind: 'two',
          leftH3: 'In Stuttgart itself',
          left: [
            'The AGIS directory lists the International School of Stuttgart with 814 pupils. The programmes it names are the IB Primary Years Programme, the IB Middle Years Programme and the International Baccalaureate Diploma.',
            'According to AGIS, every one of its member schools is an authorised IB school, its schools bring together children from as many as 65 nations, and English is the shared language of teaching.'
          ],
          rightH3: 'Elsewhere in Baden-Württemberg',
          right: [
            'The same directory shows two other member schools in the Land: Black Forest Academy, which lists Advanced Placement and an American curriculum and diploma, and the International School of Ulm/Neu-Ulm, which lists the IB Primary Years Programme, the IB Diploma and IGCSE.',
            'The KMK keeps its own list of international schools whose IB graduates with Mathematics SL can be given general university access. Its version of 26 March 2026 includes the International School of Stuttgart and the SIS Swiss International School Stuttgart-Fellbach, the latter from the May 2026 exams.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'The programmes named above and where computing sits in them', head: ['Programme', 'Typical age', 'Where computer science appears', 'German equivalence, per AGIS'], rows: [
          ['IB Middle Years Programme', 'About 11 to 16', 'Design and digital work inside the programme; schools choose', 'Mittlere Reife, for schools offering MYP'],
          ['Cambridge IGCSE', 'About 14 to 16', 'Computer Science 0478, two written papers', 'Mittlere Reife, for schools offering IGCSE'],
          ['IB Diploma', 'About 16 to 18', 'Computer Science at SL or HL, if the school offers it', 'Abitur, with the prescribed subject combinations'],
          ['Advanced Placement', 'About 15 to 18', 'AP Computer Science A (Java) and AP Computer Science Principles', 'Not stated by AGIS']
        ] },
        { kind: 'source', html: 'Sources: AGIS school directory and Wer wir sind pages; KMK, Vereinbarung über die Anerkennung des International Baccalaureate Diploma, Anlage 1 dated 26 March 2026. Read on 2 and 3 November 2026. Whether a school offers a given subject is for the school to confirm; the table describes the programmes, not any one timetable.' },
        { kind: 'p', mt: true, html: 'Stuttgart is a city of 612,663 people, according to Destatis for 31 December 2024, and many families at these schools live in Fellbach, Esslingen, Leonberg, Böblingen or Sindelfingen. Because we teach online, where a pupil lives makes no difference; what matters is the syllabus, the exam session and how much time is left before it.' }
      ]
    },
    {
      id: 'exams',
      eyebrow: 'Exams in 2027',
      h2: 'When are the 2027 computer science exams, in Stuttgart time?',
      lede: 'The facts below come straight from Cambridge International and the College Board. The IB website would not let our automated request through, so we print no IB dates; the school\'s IB coordinator has them.',
      body: [
        { kind: 'table', numCols: [], caption: 'Computing exams for international school pupils near Stuttgart, 2027', head: ['Exam', 'What it is', 'Date or session', 'Stuttgart clock'], rows: [
          ['IGCSE 0478 Paper 1', 'Computer Systems, written, 1 hour 45 minutes, 75 marks', 'June or November series', 'Set by the school'],
          ['IGCSE 0478 Paper 2', 'Algorithms, Programming and Logic, 1 hour 45 minutes, 75 marks, no calculator', 'June or November series', 'Set by the school'],
          ['AP CSP Create task', 'Final submission of the Create performance task', '30 April 2027, 11:59 p.m. ET', '05:59 on 1 May 2027'],
          ['AP Computer Science A', 'Digital exam, Java', 'Wednesday 12 May 2027, Session 2', '13:00'],
          ['AP Computer Science Principles', 'End-of-course exam', 'Friday 14 May 2027, Session 1', '09:00']
        ] },
        { kind: 'source', html: 'Sources: Cambridge IGCSE Computer Science 0478 syllabus for 2026 to 2028; College Board, 2027 AP Exam Dates and the 2027 start-time table by UTC offset, which gives 9:00 a.m. and 1:00 p.m. for UTC+2. Germany is on UTC+2 in May. The conversion of the Create deadline is our own: 23:59 in New York in May is 05:59 the next morning in Stuttgart.' },
        { kind: 'two', mt: true,
          leftH3: 'What the IGCSE written paper rewards',
          left: [
            'Paper 2 ends with a 15-mark scenario question on a problem the pupil has never seen. Answers may be written in Cambridge pseudocode or in Python, Visual Basic or Java, and the syllabus warns that solutions in any other language earn no marks.',
            'Among the standard methods the syllabus lists are totalling, counting, and "finding maximum, minimum and average". The Stuttgart project below is built on exactly those three.'
          ],
          rightH3: 'What the AP dates mean in practice',
          right: [
            'For AP Computer Science Principles, the Create task closes before the exam does: a pupil in Stuttgart must have it submitted by the small hours of Saturday 1 May 2027, two weeks before the written paper.',
            'AP Computer Science A falls on a Wednesday afternoon in Stuttgart. A pupil revising with us in April gets the last full practice paper in the week of 3 May.'
          ] }
      ]
    },
    {
      id: 'german',
      eyebrow: 'The German route, for comparison',
      h2: 'How is computer science examined at a German Gymnasium in Baden-Württemberg?',
      lede: 'Families sometimes move between systems, so it helps to know the other side. The facts are from the Informatik-Monitor 2026/27 of the GI.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Three ways to take it', p: 'In the Qualifikationsphase a Gymnasium can offer Informatik as a two-hour elective, a three-hour Basisfach or a five-hour Leistungsfach, the advanced course. Not every school offers all three.' },
          { h3: 'A central written exam', p: 'In the Leistungsfach the written Abitur is set centrally for the whole Land. Programming tasks may be answered in the language used in the course, but no programming environment is allowed, and there is no work at a computer.' },
          { h3: 'A new subject lower down', p: 'Below the Oberstufe, the Land has made Informatik und Medienbildung compulsory since 2025/26, beginning in grades 5 and 6. Pupils switching in from an international school may meet classmates who have just started it.' }
        ] },
        { kind: 'p', mt: true, html: 'We teach alongside school in both systems and award no grades or qualifications of any kind; the school course and its exam are what count. What carries across is the skill: an IB pupil who can write a clean loop on paper is ready for a German written exam with no computer, and an Abitur pupil who can test code is ready for an IB internal assessment.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Are the lessons taught in German or in English?',
      lede: 'In English only, which for these pupils is simply the language of school.',
      body: [
        { kind: 'three', cells: [
          { h3: 'The same words as the exam', p: 'Mark schemes say "iterate", "declare", "trace" and "justify". Pupils hear those words every lesson, so the exam does not feel like a translation.' },
          { h3: 'Accent and pace matched', p: 'Many pupils speak a third or fourth language at home. Mentors listen for how each pupil explains an idea and slow down, rephrase or go deeper accordingly.' },
          { h3: 'Live, never recorded', p: 'Every lesson is a real conversation with a mentor based in India, on video, with code shared on screen and changed together.' }
        ] }
      ]
    },
    {
      id: 'project',
      tint: 'tint',
      eyebrow: 'A Stuttgart data project',
      h2: 'Are hot days in Stuttgart becoming more common? Two answers from the same file',
      lede: 'Stuttgart\'s statistics office publishes weather readings back to 1980 as open data. Older pupils use one column, the yearly count of hot days, to see how easily a single pair of years can be made to say anything, and how a fair comparison is built instead.',
      body: [
        { kind: 'two',
          leftH3: 'The file',
          left: [
            'The dataset holds monthly and yearly values for temperature, rain, sunshine and air pressure. Its notes say the readings come from the Stuttgart weather office station until 1983 and from the Deutscher Wetterdienst automatic station on the Schnarrenberg from 1984.',
            'We extract one row per year, the count the file labels heiße Tage, hot days, for 1980 to 2024, and save it as stuttgart_hot_days.csv with two columns: year and hot_days. That gives 45 years and no gaps.'
          ],
          rightH3: 'The trap',
          right: [
            'Pick 2003 and 2021, and hot days fell sharply. Pick 1993 and 2022, and they rose tenfold. Both statements are true about the numbers, and both are useless, because each depends on which two years you chose.',
            'The fair version compares whole decades of equal length, measured at the same station, and reports how many years went into each average, exactly what an examiner wants to see when a question says "justify".'
          ] },
        { kind: 'code', label: 'Version 1: compare two chosen years', lang: 'Python', code: V1, note: 'It prints: <code>2003 to 2021: -24</code> and <code>1993 to 2022: 27</code>.' },
        { kind: 'p', mt: true, html: 'The first program can be made to support either headline. 2003 had 28 hot days and 2021 only 4, so it reports a fall of 24; 1993 had 3 and 2022 had 30, so it reports a rise of 27. A pupil who quotes one of these in an essay is cherry-picking, even without meaning to.' },
        { kind: 'code', label: 'Version 2: equal ten-year windows from one station', lang: 'Python', code: V2, note: 'It prints: <code>1985 to 1994 : 7.3 hot days a year over 10 years</code>, <code>1995 to 2004 : 11.5 hot days a year over 10 years</code>, <code>2005 to 2014 : 10.1 hot days a year over 10 years</code> and <code>2015 to 2024 : 19.5 hot days a year over 10 years</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3], caption: 'Hot days per year in Stuttgart, ten-year averages from the Schnarrenberg station (our calculation)', head: ['Decade', 'Average hot days a year', 'Lowest year', 'Highest year'], rows: [
          ['1985 to 1994', '7.3', '3 (1987, 1993)', '15 (1992)'],
          ['1995 to 2004', '11.5', '3 (1996)', '28 (2003)'],
          ['2005 to 2014', '10.1', '5 (2007)', '16 (2006, 2012)'],
          ['2015 to 2024', '19.5', '4 (2021)', '30 (2022)']
        ] },
        { kind: 'source', html: 'Data: Landeshauptstadt Stuttgart, Klima- und Wetterdaten, published through Open Data BW, licence CC BY 4.0, downloaded 2 November 2026; readings from the Deutscher Wetterdienst station on the Schnarrenberg since 1984. Averages, lowest and highest years are our own calculations from the yearly hot-day counts.' },
        { kind: 'p', html: 'The windows tell a more careful story than either headline. The most recent decade averages 19.5 hot days a year, well above the other three. But the averages do not rise every decade: 1995 to 2004 sits slightly above 2005 to 2014, because it contains 2003. And the decade with the highest average also holds one of the coolest summers in the file, 2021 with 4. We start in 1985 so every window uses the Schnarrenberg station only; mixing in the old station would change what is being measured.' },
        { kind: 'ol', mt: true, items: [
          '<strong>IGCSE practice.</strong> Write the decade loop in Cambridge pseudocode with a FOR loop, a running total and a count, then trace it by hand for 1985 to 1994.',
          '<strong>Extend it.</strong> Add the lowest and highest year to each window without using min() or max(), the way Paper 2 expects.',
          '<strong>IB style.</strong> Replace the fixed decades with a ten-year moving average and print one value per year from 1994. Explain in two sentences what smoothing hides as well as what it shows.',
          '<strong>AP CSP style.</strong> Turn the program into a procedure with a parameter for the window length, and describe in plain English how the procedure uses iteration and selection.'
        ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When can a Stuttgart pupil take lessons?',
      lede: 'After the school day, which at many international schools ends in mid-afternoon, or at the weekend. The examples below show how the times look on the mentor\'s clock.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example lesson times in Stuttgart and in India', head: ['Stuttgart', 'India, winter (to 27 March 2027)', 'India, summer (from 28 March 2027)'], rows: [
          ['16:15', '20:45', '19:45'],
          ['17:45', '22:15', '21:15'],
          ['Saturday 12:00', '16:30', '15:30']
        ] },
        { kind: 'source', html: 'Examples only, not fixed batch times. Germany runs on CET (UTC+1) in winter and CEST (UTC+2) in summer under the Einheitenzeitgesetz; the change back happened on 25 October 2026 and the next change forward is on 28 March 2027. India keeps UTC+5:30, so the gap is four and a half hours in winter and three and a half in summer.' },
        { kind: 'p', mt: true, html: 'International school calendars differ from the Baden-Württemberg holidays, which the KMK lists for 2026/27 as 23 December 2026 to 9 January 2027, 25 March and 30 March to 3 April 2027, 18 to 29 May 2027 and 29 July to 11 September 2027. Lessons carry on through either calendar, and many pupils add sessions in the weeks before May exams.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Route',
    h2: 'A computing route from MYP age to the final exams',
    lede: 'Our own route, used to agree goals with a pupil and to plan revision backwards from the exam session.',
    table: { caption: 'Computing route for international school pupils (ours)', head: ['Stage', 'Age', 'The pupil can'], rows: [
      ['1. Foundations', '11 to 13', 'Write Python with loops, lists and functions, and explain each line'],
      ['2. Algorithms', '13 to 15', 'Use totalling, counting, searching and sorting, in code and in pseudocode'],
      ['3. Exam technique', '14 to 16', 'Answer an unseen scenario question in 30 minutes, on paper'],
      ['4. Objects and data', '16 to 17', 'Design classes, use 2D arrays and handle real data files'],
      ['5. Independent work', '17 to 18', 'Plan, test and document a project an examiner can follow']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 3 matters more than many families expect: IGCSE and AP both reward clear written answers, not just working code.',
      'We report against the school syllabus, so you can compare our notes with school reports directly.'
    ] },
    right: { h3: 'For pupils', ps: [
      'If one example proves your point, look for one that proves the opposite. Then average.',
      'Always say how many values went into an average. A mean of two years is not a trend.'
    ] }
  },

  catalogue: {
    eyebrow: 'More for international school pupils',
    h2: 'Nine more courses for pupils near Stuttgart',
    lede: 'Each one runs live, in English, with a mentor the pupil keeps, either in a class or privately.',
    bands: [
      { num: 'I', h3: 'Programming depth', sub: 'Ages 12 to 18', courses: [
        { code: 'STU / CODE / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'From first script to files, classes and testing.' },
        { code: 'STU / CODE / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Object-oriented Java, useful for AP and IB alike.' },
        { code: 'STU / CODE / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms and data structures', blurb: 'Searching, sorting and complexity, explained slowly.' }
      ] },
      { num: 'II', h3: 'Other exam routes', sub: 'Ages 15 to 18', courses: [
        { code: 'STU / EXAM / 01', slug: 'ap-computer-science-principles-exam-prep-course', title: 'AP Computer Science Principles', blurb: 'The Create task and the written exam, step by step.' },
        { code: 'STU / EXAM / 02', slug: 'cambridge-a-level-computer-science-9618-course', title: 'Cambridge A Level 9618', blurb: 'For schools that continue Cambridge after IGCSE.' },
        { code: 'STU / EXAM / 03', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB Maths AA and AI', blurb: 'SL and HL, with guidance on the exploration.' }
      ] },
      { num: 'III', h3: 'Data and tools', sub: 'Ages 13 to 18', courses: [
        { code: 'STU / DATA / 01', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Real datasets, charts and first models in Python.' },
        { code: 'STU / DATA / 02', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub', blurb: 'Version control for coursework and projects.' },
        { code: 'STU / DATA / 03', slug: 'igcse-mathematics-mastery', title: 'IGCSE Maths', blurb: 'Core and Extended, for the maths the code relies on.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons work',
    h2: 'How a term of lessons runs for a Stuttgart pupil',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'After school', l: 'Late afternoon in Stuttgart, once the school bus is home.' },
      { time: 'Weekends', l: 'Longer sessions for coursework and past papers.' },
      { time: '1-on-1', l: 'Agreed times that move with the exam calendar.' }
    ],
    cells: [
      { h3: 'Syllabus first', p: 'Every lesson maps to a syllabus point you can find in the school\'s guide.' },
      { h3: 'On paper too', p: 'Written answers and hand traces, not only code that runs.' },
      { h3: 'Coursework honesty', p: 'We explain and question; the internal assessment stays the pupil\'s own work.' },
      { h3: 'One mentor', p: 'The same person from the first lesson to the exam.' },
      { h3: 'Exam countdown', p: 'Revision planned back from the session date.' },
      { h3: 'Group or private', p: 'A class of fifteen to twenty, or one pupil and one mentor.' }
    ]
  },

  projectsH2: 'Work by our teenage students',
  projectsLede: 'Pupils who learn to plan and test their code tend to build ambitious things. A few examples are below, and the <a class="ag-inline-link" href="/student-labs">student labs</a> page has many more.',
  reviewsLede: 'Reviews from parents and students, copied from Google without edits.',

  fees: {
    h2: 'Fees for pupils in Stuttgart',
    lede: 'Billing is monthly, for eight live lessons. Prices on this page are in euro, worked out with the European Central Bank\'s reference rate, but the card payment itself is in US dollars; your bank converts it, so the amount you see on the statement may be slightly different.',
    free: ['A free first lesson', 'A short diagnostic on the syllabus', 'No card needed'],
    group: ['Fifteen to twenty pupils on the same syllabus', 'A regular mentor', 'Two lessons a week', 'Monthly, stop whenever you like'],
    one: ['One pupil, one mentor', 'Lessons shaped around the exam date', 'Times agreed between you']
  },

  faq: {
    eyebrow: 'Stuttgart families ask',
    h2: 'Computer science for international school pupils in Stuttgart: questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. We teach exclusively in English, live, which is also the language an international school classroom runs in. Mentors adjust their speed and phrasing to each pupil, which helps pupils whose strongest language is neither English nor German.' },
      { q: 'Which international schools are there in Stuttgart?', a: 'The AGIS directory lists the International School of Stuttgart, with 814 pupils and the IB Primary Years, Middle Years and Diploma programmes. The KMK list of 26 March 2026 also names the SIS Swiss International School Stuttgart-Fellbach. We name them as background only and have no link with either.' },
      { q: 'Can you help with IB Diploma Computer Science?', a: 'Yes. Our IB course covers the concepts, programming in Python or Java and support with the internal assessment, where we explain and question but the work stays the pupil\'s own. The IB coordinator at school confirms the exam dates.' },
      { q: 'What is in the IGCSE Computer Science 0478 exam?', a: 'Two written papers of 1 hour 45 minutes and 75 marks each: Computer Systems, and Algorithms, Programming and Logic. Paper 2 ends with a 15-mark scenario question answered in pseudocode, Python, Visual Basic or Java, and calculators are not allowed.' },
      { q: 'When are the AP Computer Science exams in 2027, in German time?', a: 'AP Computer Science A is on Wednesday 12 May 2027 in Session 2, which is 13:00 in Stuttgart. AP Computer Science Principles is on Friday 14 May 2027 in Session 1, 09:00 in Stuttgart, and its Create task must be submitted by 05:59 on 1 May 2027 German time.' },
      { q: 'When are lessons in Stuttgart time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Many international school pupils start at about 16:15 on a weekday or around midday on Saturday.' },
      { q: 'Does an IB Diploma count as an Abitur?', a: 'AGIS says the IB Diploma, with the prescribed subject combinations, is equivalent to the German Abitur. The exact rules are in the KMK recognition agreement, and the school\'s counsellor is the right person to check a pupil\'s own subject choice. We do not give admissions advice.' },
      { q: 'My child may move to a German Gymnasium. Can you help with that too?', a: 'We can teach the subject alongside either school, in English. In Baden-Württemberg the written Informatik Abitur in the Leistungsfach is set centrally and allows no programming environment, so we practise code on paper as well as on screen.' },
      { q: 'How are fees charged?', a: 'Monthly, for eight lessons. The page shows euro at the European Central Bank reference rate and the card is charged in US dollars, converted by your bank, so the statement can differ a little. The first lesson is free and needs no card.' },
      { q: 'Where are the mentors based?', a: 'In India. They teach live on video, so a 16:15 lesson in Stuttgart starts at 20:45 for the mentor in winter. The pupil keeps the same mentor through the course.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for international school families in Germany.',
    items: [
      { href: '/coding-for-international-school-students-germany', label: 'International school pupils in Germany', p: 'The national version of this page.' },
      { href: '/ib-computer-science-tutor-germany', label: 'IB Computer Science tutor', p: 'IB subject rules and German recognition in detail.' },
      { href: '/igcse-computer-science-tutor-germany', label: 'IGCSE Computer Science tutor', p: 'The 0478 papers and how to prepare.' },
      { href: '/ap-computer-science-tutor-germany', label: 'AP Computer Science tutor', p: 'Both AP courses and their 2027 formats.' },
      { href: '/coding-classes-by-age-germany', label: 'Coding classes by age', p: 'For younger brothers and sisters, from age 6.' },
      { href: '/python-and-dsa-for-international-students-germany', label: 'Python and algorithms', p: 'Deeper problem solving in Python.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'The first lesson starts from the pupil\'s own syllabus: a short task, a look at recent school work if they want to share it, and a plan for the months to the exam.',
    readFirst: 'To read more first, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains a live lesson, and <a class="ag-inline-link" href="/courses">all courses</a> lists each syllabus in full.',
    note: 'Lessons are live online, in English only, with mentors in India. Message us on WhatsApp, in English, with the syllabus and exam session and we will reply with a suggested plan.',
    formNote: 'Free and without obligation.'
  },

  footer: {
    cols: [
      { h4: 'Exam routes', links: [
        { href: '/ib-computer-science-tutor-germany', label: 'IB Computer Science' },
        { href: '/igcse-computer-science-tutor-germany', label: 'IGCSE Computer Science' },
        { href: '/ap-computer-science-tutor-germany', label: 'AP Computer Science' },
        { href: '/python-and-dsa-for-international-students-germany', label: 'Python and algorithms' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-for-international-school-students-germany', label: 'International schools in Germany' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'One year proves nothing; ten is a start'
  },

  personalityCss: `
.ag-root.ag-stu .ag-hero h1 { letter-spacing: -0.014em; max-width: 22ch; }
.ag-root.ag-stu .ag-capsule { border-left-width: 4px; }
.ag-root.ag-stu .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-stu .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-stu .ag-code-head b { letter-spacing: 0.015em; }
`,

  dossier: {
    curriculumAuthority: 'AGIS directory and Wer wir sind; KMK IB recognition agreement, Anlage 1 of 26 March 2026; Cambridge IGCSE Computer Science 0478 syllabus 2026 to 2028; College Board 2027 AP exam dates and start times; GI Informatik-Monitor 2026/27, Baden-Württemberg page; KMK Ferien 2026/27; Destatis GV-ISys; all read 2 and 3 November 2026. Landeshauptstadt Stuttgart via Open Data BW, Klima- und Wetterdaten, CC BY 4.0.',
    localProject: 'Hot days in Stuttgart, judged fairly: an original Python project on the city\'s weather file in which two hand-picked pairs of years give opposite headlines (2003 to 2021: -24; 1993 to 2022: 27), while equal ten-year windows from the Schnarrenberg station give 7.3, 11.5, 10.1 and 19.5 hot days a year from 1985 to 2024, tied to the IGCSE 0478 methods of totalling, counting and averaging. Lesson family: compare equal windows, not two chosen years.',
    requiredMentions: ['stuttgart_hot_days.csv', '2003 to 2021: -24', '1993 to 2022: 27', '2015 to 2024 : 19.5 hot days a year over 10 years', 'with 814 pupils', 'SIS Swiss International School Stuttgart-Fellbach', '05:59 on 1 May 2027', 'One year proves nothing; ten is a start'],
    sources: [
      { claim: 'International School of Stuttgart: 814 pupils, PYP, MYP and IB Diploma; Black Forest Academy and Ulm/Neu-Ulm programmes.', url: 'https://www.agis-schools.org/school/international-school-of-stuttgart' },
      { claim: 'KMK IB recognition agreement, Anlage 1 of 26 March 2026, Stuttgart schools listed.', url: 'https://www.kmk.org/fileadmin/veroeffentlichungen_beschluesse/1986/1986_03_10-Vereinbarung-Baccalaureate-Dipl_2023_06_15.pdf' },
      { claim: 'IGCSE 0478 papers, scenario question, permitted languages and standard methods.', url: 'https://www.cambridgeinternational.org/Images/697167-2026-2028-syllabus.pdf' },
      { claim: 'AP Computer Science A and Principles 2027 dates, sessions and start times for UTC+2.', url: 'https://apcentral.collegeboard.org/exam-administration-ordering-scores/exam-dates/start-times' },
      { claim: 'Baden-Württemberg Informatik in the Oberstufe and the written Abitur rules.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/baden-wuerttemberg' },
      { claim: 'Stuttgart yearly hot days, station history and CC BY 4.0 licence.', url: 'https://ckan.govdata.de/dataset/klima-und-wetterdaten' }
    ],
    rejectedClaims: [
      'IB exam dates: ibo.org is blocked to our fetches, so none are printed.',
      'Any statement that a named school sends us students: refused; schools appear only as AGIS and KMK context.',
      'A cause for any single hot or cool year: the file gives none, so none is offered.',
      'Admissions or recognition advice for an individual pupil: refused; the school counsellor decides.'
    ]
  }
};
