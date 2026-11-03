'use strict';
// Online Python classes in Augsburg (ag- city page, Germany cluster P6 row DE147, tier-2 shape online-python = live
// online explained, Python path). Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief
// docs/superpowers/plans/2026-11-03-de-writer-brief.md. Owner 2026-11-02: classes are live, in English only, with mentors
// who match the learner's pace and accent; euro shown, USD charged.
// Spine: "is live online Python right for us?" answered as a checklist, then Bavaria's unusually split Informatik rules
// by school type, then a footfall project on Augsburg's busiest shopping street.
// Sources (school facts read raw and quoted in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md,
// fetched 2 Nov 2026; numbers are fact ids there):
//  - GI Informatik-Monitor 2026/27, Bayern: Mittelschule "in den Jahrgangsstufen 5 bis 10 das verbindliche Fach Informatik
//    im Umfang von je einer Wochenstunde" (69); Gymnasium Natur und Technik grades 6 and 7, one weekly hour with the
//    Informatik focus; NTG branch compulsory Informatik in grades 9 and 10 (70); "in Jahrgangsstufe 11 in allen
//    Ausbildungsrichtungen verpflichtend zweistündig Informatikunterricht" (71); written Abitur Informatik set centrally,
//    "Programmieraufgaben auf Papier, jedoch keine praktischen Anteile am Rechner" (72); Oberstufe G9, switch from G8
//    completed in 2024/25 (49). Bavarian ministry: Abitur "aus drei schriftlichen und zwei mündlichen Prüfungen" (41);
//    nine-year Gymnasium grades 5 to 13 in 2025/26 (63).
//  - KMK Ferien 2026/2027 raw, Bayern row: "Bayern 02.11. - 06.11. 24.12. - 08.01. -- 08.02. - 12.02. 22.03. - 02.04.
//    18.05. - 28.05. 02.08. - 13.09." (also facts 258, 284).
//  - AGIS directory, International School Augsburg - ISA: IB Diploma (including German Abitur recognition) and IGCSE
//    (including German Mittlere Reife recognition) (232). Context only.
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): Augsburg 301,105; München 1,505,005; Ingolstadt 141,185;
//    Ulm 129,882 (Baden-Württemberg).
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Stadt Augsburg (Wirtschaftsförderung), "Augsburg: Passanten Annastraße" ("Passanten Annastraße Augsburg nach
//    Stunden"), via open.bydata and GovData (ckan.govdata.de/dataset/augsburg-passanten-annastrasse), licence CC BY 4.0
//    (http://dcat-ap.de/def/licenses/cc-by/4.0). File Annastraße_Frequenzdaten.csv from augsburg.de, downloaded
//    3 November 2026, 2,175,671 bytes, sha256 d7606bb8...bee6fb77f, 48,956 hourly rows from 16 December 2020 to
//    11 August 2026, columns Standort;Jahr;Datum;Stunde;Passanten, Datum like "Mi., 16.12.2020", Stunde like "13 Uhr".
//    Saved as annastrasse.csv for the lesson. Raw copy in src-pages/online-python-classes-augsburg-germany/.
// Our own calculations (scratchpad de/w/T1/augsburg/v1.py, v2.py, python3 -I):
//  v1: "Rows: 48956", "First and last row: 16.12.2020 11.08.2026", "max() of the text says the latest day is: 31.12.2025".
//  v2: "Real latest day: 2026-08-11  real earliest: 2020-12-16", "Busiest hour in 2025: 16 Uhr, on average 1867 people".
//  Extra (2025, our sums of hourly counts per day, then means): Saturday 28,668, Sunday 6,123, Monday 16,721, Friday
//  20,958 passers-by per day on average; busiest 2025 day 29 November 2025 with 44,111. Hourly means 2025: 04 Uhr 11,
//  08 Uhr 312, 12 Uhr 1,735, 16 Uhr 1,867, 20 Uhr 436.
// Lesson family: a date stored as text sorts as text; convert it to a real date before you compare.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'with open("annastrasse.csv", encoding="utf-8-sig") as f:',
  '    rows = list(csv.DictReader(f, delimiter=";"))',
  '',
  'texts = [r["Datum"][5:] for r in rows]        # "Mi., 16.12.2020" -> "16.12.2020"',
  'print("Rows:", len(rows))',
  'print("First and last row:", texts[0], texts[-1])',
  'print("max() of the text says the latest day is:", max(texts))'
].join('\n');

const V2 = [
  'from datetime import datetime',
  '',
  'days = [datetime.strptime(t, "%d.%m.%Y").date() for t in texts]',
  'print("Real latest day:", max(days), " real earliest:", min(days))',
  '',
  'by_hour = {}',
  'for r, day in zip(rows, days):',
  '    if day.year == 2025:',
  '        hour = int(r["Stunde"].split()[0])          # "13 Uhr" -> 13',
  '        by_hour.setdefault(hour, []).append(int(r["Passanten"]))',
  'peak = max(by_hour, key=lambda h: sum(by_hour[h]) / len(by_hour[h]))',
  'print("Busiest hour in 2025:", peak, "Uhr, on average", round(sum(by_hour[peak]) / len(by_hour[peak])), "people")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Augsburg: online Python classes' },
  slug: 'online-python-classes-augsburg-germany',
  code: 'pau',
  accent: '#396684',
  accentRationale: 'Online Python in Augsburg: a slate blue #396684 for the Lech canals that run through the old town, clear of the Germany hub fir and the other city reds; contrast 5.00 at its lowest on the paper tints, above the 4.5 floor',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-bavaria', name: 'Bavaria' }],
  routeLabel: 'Online Python classes in Augsburg',
  title: 'Online Python Classes in Augsburg, Live in English',
  description: 'Online Python classes in Augsburg, live in English: is live online right for you, Informatik by school type in Bavaria, and a project on Annastraße footfall data.',
  ogDescription: 'Live Python lessons in English for Augsburg learners from 9 to adult: a checklist for deciding whether live online suits you, how Bavaria teaches Informatik differently at each school type, and a project on hourly footfall in the Annastraße.',
  twitterDescription: 'Python for Augsburg, live online in English, with a project on the city\'s Annastraße footfall counts.',
  pageName: 'Online Python Classes in Augsburg',
  webPageDescription: 'A guide for Augsburg learners and parents to live online Python classes in English: a checklist for whether live online suits a learner, Bavaria\'s Informatik rules at Mittelschule and Gymnasium, the Bavarian holidays for 2026/27, and an original project on Stadt Augsburg\'s pedestrian counts.',
  courseDescription: 'Live online Python classes in English for Augsburg learners: children from 9, teenagers and adults, with a regular mentor on a shared screen, in a group of 15 to 20 or one to one, from first programs to real city data.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Python in Augsburg',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#fit', label: 'Is it for us' },
    { href: '#bayern', label: 'Schools' },
    { href: '#annastrasse', label: 'Data' },
    { href: '#uhrzeiten', label: 'Times' }
  ],
  eyebrow: 'Augsburg &middot; Python &middot; Live online',
  h1: 'Online Python classes in Augsburg',
  lede: 'Before you book anything, it is worth asking whether a live online class suits the learner at all. This page starts there, with an honest checklist, then explains how Bavarian schools teach Informatik very differently at a Mittelschule and a Gymnasium, and where Python fits around that. The project at the end uses the city\'s own hourly count of people walking along the Annastraße, and its first answer is wrong for a reason that catches professional programmers too.',
  secondaryCta: { href: '#annastrasse', label: 'See the footfall project' },
  wa: 'Hello Modern Age Coders, I live in Augsburg and would like to try a live online Python lesson in English. Could we book a free first lesson?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; Python taught by a person, not a playlist',
  spec: [
    ['Language', 'Python 3'],
    ['Ages', '9 to 12, 13 to 18, adults'],
    ['Format', 'Live video, shared screen'],
    ['Lessons', 'Two a week'],
    ['Group', '15 to 20 learners, or 1-on-1'],
    ['First lesson', 'Free, no card needed']
  ],
  capsuleQ: 'Short version',
  capsule: 'Online Python classes for Augsburg learners at Modern Age Coders are live lessons in English with a regular mentor who shares the learner\'s screen, follows every line as it is typed and works through errors on the spot, at a pace and in an accent the learner can follow. Children join from about 9, teenagers and adults at any level, in a class of 15 to 20 or one to one, on weekday afternoons and evenings or at weekends.',

  picks: {
    eyebrow: 'Python by age',
    h2: 'Three Python courses for Augsburg learners',
    lede: 'One for children who have just learned to type, one for teenagers, and one for adults, each built around real projects.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'PAU / 01', title: 'Python and AI for Kids', note: 'Nine to twelve. Programs that draw, count and play, then small projects with real data, in short, friendly steps.' },
      { course: 'python-complete-masterclass-teens', code: 'PAU / 02', title: 'Python for Teens', note: 'Thirteen to eighteen. The full language, plus the skill of reading code on paper that a Bavarian Informatik Abitur expects.' },
      { course: 'python-ai-automation-masterclass-college', code: 'PAU / 03', title: 'Python Automation and Applied AI', note: 'Adults. Scripts that handle files, spreadsheets and reports, then AI services called from Python, all checked by you.' }
    ]
  },

  sections: [
    {
      id: 'fit',
      eyebrow: 'Before you book',
      h2: 'Is a live online Python class right for my child, or for me?',
      lede: 'Live online lessons suit most learners, but not all. Go through these points honestly; if most are true, it is likely to work well.',
      body: [
        { kind: 'ol', items: [
          '<strong>There is a computer with a keyboard.</strong> Python is typed. A tablet can join the video, but writing code on a touch screen is slow and frustrating.',
          '<strong>There is a quiet corner for an hour.</strong> Two lessons a week, about an hour each. Younger children settle faster with a parent nearby for the first few lessons.',
          '<strong>The learner can follow spoken English.</strong> Lessons are in English only. Perfect English is not needed; mentors slow down, repeat and adapt to each accent, but the learner must be willing to listen and answer in English.',
          '<strong>The learner wants to type, not watch.</strong> In our lessons the learner shares their screen and writes most of the code. Someone who would rather watch videos alone may prefer a recorded course.',
          '<strong>The learner can wait a moment for help.</strong> In a class of 15 to 20, the mentor helps one learner at a time on screen. Learners who need constant attention are better in one-to-one lessons.'
        ] },
        { kind: 'source', html: 'Our own checklist, written from what we see in the free first lesson.' },
        { kind: 'two', mt: true,
          leftH3: 'What a lesson feels like',
          left: [
            'The mentor shows one small idea, then hands over. The learner types, runs, gets an error, reads it aloud and fixes it with a hint rather than an answer. By the end of an hour they have a working program they wrote themselves.',
            'Nothing is recorded and nothing is left to work out alone for a week.'
          ],
          rightH3: 'Who the mentors are',
          right: [
            'Our mentors are based in India and teach live over video, in English. The learner has the same mentor every lesson, who soon knows whether they like hints or challenges and how they speak.',
            'For Augsburg families that means afternoon and evening times, since India is several hours ahead.'
          ] }
      ]
    },
    {
      id: 'bayern',
      eyebrow: 'Bavarian schools',
      h2: 'How much Informatik does a pupil in Augsburg get at school?',
      lede: 'In Bavaria the answer depends strongly on the type of school. The rules below come from the GI Informatik-Monitor 2026/27 and the Bavarian ministry of education.',
      body: [
        { kind: 'table', numCols: [], caption: 'Informatik in Bavaria, by school type and grade', head: ['School type', 'Grades', 'What is compulsory'], rows: [
          ['Mittelschule', '5 to 10', 'Informatik, one lesson a week in every grade'],
          ['Gymnasium, all branches', '6 and 7', 'One weekly lesson with an Informatik focus, inside Natur und Technik'],
          ['Gymnasium, NTG branch', '9 and 10', 'Informatik as a compulsory subject'],
          ['Gymnasium, all branches', '11', 'Two weekly lessons of an informatics subject'],
          ['Gymnasium, Abitur', '12 and 13', 'Five exam subjects, three written and two oral; Informatik written tasks set centrally']
        ] },
        { kind: 'source', html: 'Sources: GI Informatik-Monitor 2026/27, Bayern entry; Bayerisches Staatsministerium für Unterricht und Kultus, Gymnasium page. Read on 2 November 2026. Bavaria\'s Gymnasium is nine years again, grades 5 to 13, and the monitor notes that the switch back from G8 was completed in 2024/25.' },
        { kind: 'two', mt: true,
          leftH3: 'What stands out',
          left: [
            'A Mittelschule pupil in Augsburg gets Informatik every year from grade 5 to grade 10, which is more continuous than in most Länder. A Gymnasium pupil outside the NTG branch gets a short Informatik focus in grades 6 and 7, then a gap until grade 11.',
            'The written Informatik Abitur in Bavaria is mostly programming on paper, with no practical work at a computer, according to the monitor.'
          ],
          rightH3: 'Where Python helps',
          right: [
            'For a Gymnasium pupil, the years between grade 7 and grade 11 are where a weekly Python class keeps the skill alive. For anyone heading to an Informatik Abitur, writing and tracing code by hand is a skill we practise deliberately.',
            'We teach alongside school and never instead of it; the school course and its marks are what count, and we award no German qualification.'
          ] },
        { kind: 'p', mt: true, html: 'Some Augsburg pupils study at an international school instead. The AGIS directory lists International School Augsburg, ISA, as offering the IB Diploma, with German Abitur recognition, and IGCSE, with Mittlere Reife recognition. Our IB and IGCSE computer science courses are written for those programmes; we name the school only as context, not as a source of students.' }
      ]
    },
    {
      id: 'annastrasse',
      tint: 'tint',
      eyebrow: 'An Augsburg dataset',
      h2: 'When is the Annastraße at its busiest?',
      lede: 'Augsburg counts the people walking along the Annastraße, one of its main shopping streets, every hour, and publishes the counts under a CC BY 4.0 licence. Nearly fifty thousand rows, and a trap on the very first question.',
      body: [
        { kind: 'two',
          leftH3: 'The file',
          left: [
            'The dataset is Augsburg: Passanten Annastraße, from the city\'s economic development office. We downloaded the file on 3 November 2026 and saved it as annastrasse.csv. Each row is one hour: the place, the year, a date such as "Mi., 16.12.2020", an hour such as "13 Uhr" and the number of passers-by.',
            'The counts begin in December 2020 and, in our download, run to August 2026.'
          ],
          rightH3: 'The questions',
          right: [
            'First, a warm-up: what is the most recent day in the file? Then the real question: at what hour of the day is the street busiest?',
            'The warm-up looks too easy to get wrong. Run Step 1 and look closely.'
          ] },
        { kind: 'code', label: 'Step 1: the latest day, the quick way', lang: 'Python', code: V1, note: 'It prints <code>Rows: 48956</code>, <code>First and last row: 16.12.2020 11.08.2026</code> and <code>max() of the text says the latest day is: 31.12.2025</code>.' },
        { kind: 'p', mt: true, html: 'The last row of the file is from 11 August 2026, yet <code>max()</code> claims the latest day is 31 December 2025. Nothing is broken: the dates are still text, and text is compared character by character from the left. "31.12.2025" starts with a 3, and no date that starts with 1 can beat it, so the year at the end never gets a say. German date order, day first, makes the trap easy to fall into. The fix is to turn each text into a real date before comparing.' },
        { kind: 'code', label: 'Step 2: real dates, then the busiest hour of 2025', lang: 'Python', code: V2, note: 'Run after Step 1. It prints <code>Real latest day: 2026-08-11  real earliest: 2020-12-16</code> and <code>Busiest hour in 2025: 16 Uhr, on average 1867 people</code>.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'Average passers-by in the Annastraße per hour, 2025 (our calculation, selected hours)', head: ['Hour', 'Average people'], rows: [
          ['04 Uhr', '11'],
          ['08 Uhr', '312'],
          ['12 Uhr', '1,735'],
          ['16 Uhr', '1,867'],
          ['20 Uhr', '436']
        ] },
        { kind: 'source', html: 'Data: Stadt Augsburg, Wirtschaftsförderung, Augsburg: Passanten Annastraße, via open.bydata, licence CC BY 4.0, file downloaded 3 November 2026. Averages over the 365 days of 2025 are our own.' },
        { kind: 'p', mt: true, html: 'The street fills up from late morning and stays close to its peak from about noon until five, with 16 Uhr narrowly ahead. Older learners usually go on to ask about days of the week, and the answer is striking. Adding up each day\'s hourly counts, our own sums give an average of 28,668 passers-by on a 2025 Saturday against 6,123 on a Sunday, when most shops are shut. The single busiest day of 2025 in the file was Saturday 29 November 2025, with 44,111. The data does not say why, and a careful learner does not pretend that it does.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 9 to 12.</strong> Write five dates like 05.03.2024 on paper and sort them as words, then as dates. Where do the two orders disagree?',
          '<strong>Ages 13 to 18.</strong> Run both steps, then find the busiest hour on Saturdays only. Is it the same as for the whole year?',
          '<strong>Adults.</strong> Compare December 2024 with December 2025 by week, and write one sentence for a report that names the licence and the counting method.',
          '<strong>Going further.</strong> One hour of 2025 appears 366 times instead of 365. Find it and explain how that could happen in a file of hourly counts.'
        ] }
      ]
    },
    {
      id: 'uhrzeiten',
      eyebrow: 'Augsburg time',
      h2: 'What time are online Python lessons in Augsburg?',
      lede: 'School pupils mostly come in the afternoon, adults in the early evening, and anyone can choose a weekend slot.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example Augsburg lesson times and the hour in India', head: ['Augsburg', 'India, winter months', 'India, summer months'], rows: [
          ['16:20, after school', '20:50', '19:50'],
          ['17:50, after work', '22:20', '21:20'],
          ['Saturday 08:45', '13:15', '12:15'],
          ['Sunday 11:45', '16:15', '15:15']
        ] },
        { kind: 'source', html: 'Time in Augsburg follows the Einheitenzeitgesetz: MEZ, UTC+1, in winter and MESZ, UTC+2, in summer. The winter period began on 25 October 2026 and runs until 28 March 2027. India is on UTC+5:30 with no clock changes, which makes it four and a half hours later than Augsburg now and three and a half hours later in summer. Examples only, not batch times.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Bavarian school holidays 2026/27', head: ['Ferien', 'Dates'], rows: [
          ['Herbstferien', '2 to 6 November 2026'],
          ['Weihnachten', '24 December 2026 to 8 January 2027'],
          ['Winterferien', '8 to 12 February 2027'],
          ['Osterferien', '22 March to 2 April 2027'],
          ['Pfingstferien', '18 to 28 May 2027'],
          ['Sommerferien', '2 August to 13 September 2027']
        ] },
        { kind: 'source', html: 'Source: KMK, Ferien im Schuljahr 2026/2027, Bayern row, Stand 9 October 2025. Bavaria\'s Herbstferien fall in the week this page was written.' },
        { kind: 'p', mt: true, html: 'Lessons carry on through the Bavarian holidays unless you ask for a pause, so a free week such as the Herbstferien can be a good moment to start. Augsburg had 301,105 residents on 31 December 2024, according to Destatis. Learners in Friedberg, Königsbrunn and Gersthofen, and further afield in München or Ulm, join exactly the same online lessons; Ulm is in Baden-Württemberg, so its school holidays differ.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress markers',
    h2: 'How an Augsburg learner moves through Python',
    lede: 'Our own markers. The mentor\'s monthly note says which one the learner has reached.',
    table: { caption: 'Python progress markers (ours)', head: ['Marker', 'Usually reached', 'The learner can'], rows: [
      ['Talks to Python', 'Week 1', 'Print, ask for input and do arithmetic'],
      ['Makes decisions', 'Week 3', 'Use if and else and explain each branch'],
      ['Repeats work', 'Month 1', 'Write loops and predict what they print'],
      ['Handles real types', 'Month 2', 'Turn text into numbers and dates before comparing'],
      ['Answers a question with data', 'Month 4', 'Read a large file and summarise it honestly']
    ] },
    left: { h3: 'For learners', ps: [
      'If something looks like a date but sorts strangely, it is probably still text.',
      'Check the first and last rows before you trust any maximum.'
    ] },
    right: { h3: 'For parents', ps: [
      'Ask your child why their first answer was wrong. Being able to say why is the real progress.',
      'Two short lessons a week beat one long one for building a habit.'
    ] }
  },

  catalogue: {
    eyebrow: 'After the basics',
    h2: 'Nine more courses for Augsburg Python learners',
    lede: 'Each is live, in English, with a regular mentor, in a class or privately.',
    bands: [
      { num: 'I', h3: 'Data and AI', sub: 'Ages 13 and up', courses: [
        { code: 'PAU / DATA / 01', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Large files, charts and a first predictive model.' },
        { code: 'PAU / DATA / 02', slug: 'ai-ml-masterclass-teens', title: 'Machine learning for teens', blurb: 'Models trained, tested and explained in Python.' },
        { code: 'PAU / DATA / 03', slug: 'data-science-complete-masterclass-college', title: 'Data science for adults', blurb: 'From pandas to deep learning, for students and professionals.' }
      ] },
      { num: 'II', h3: 'School programmes', sub: 'Ages 12 to 19', courses: [
        { code: 'PAU / SCHOOL / 01', slug: 'informatik-abitur-course-java-python', title: 'Informatik Abitur in English', blurb: 'Topics and paper-based code reading for the Abitur.' },
        { code: 'PAU / SCHOOL / 02', slug: 'ib-diploma-computer-science-course', title: 'IB Computer Science', blurb: 'For IB Diploma pupils, internal assessment included.' },
        { code: 'PAU / SCHOOL / 03', slug: 'igcse-computer-science-0478-course', title: 'IGCSE Computer Science 0478', blurb: 'The Cambridge syllabus, with pseudocode and Python.' }
      ] },
      { num: 'III', h3: 'Building software', sub: 'Ages 13 and up', courses: [
        { code: 'PAU / BUILD / 01', slug: 'python-web-development-django-flask-course', title: 'Web apps in Python', blurb: 'Django and Flask, from first page to working app.' },
        { code: 'PAU / BUILD / 02', slug: 'git-github-version-control-course-for-college-students', title: 'Git and GitHub', blurb: 'Version control the way teams use it.' },
        { code: 'PAU / BUILD / 03', slug: 'data-structures-algorithms-masterclass-college', title: 'Data structures and algorithms', blurb: 'The ideas behind fast, reliable code.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Arrangements',
    h2: 'How live Python lessons are set up for Augsburg',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekday afternoon', l: 'After school, for children and teenagers.' },
      { time: 'Weekday evening', l: 'After work, mostly for adults.' },
      { time: 'Weekend', l: 'Morning or midday, Saturday or Sunday.' }
    ],
    cells: [
      { h3: 'You type', p: 'The learner writes most of the code in every lesson.' },
      { h3: 'Errors read together', p: 'Hints first, answers only when needed.' },
      { h3: 'Unhurried English', p: 'Spoken slowly, repeated when asked.' },
      { h3: 'Live only', p: 'No pre-recorded lessons at any stage.' },
      { h3: 'Your own mentor', p: 'The same person for months, not a rota.' },
      { h3: 'Class or solo', p: '15 to 20 learners, or one-to-one.' }
    ]
  },

  projectsH2: 'Projects from our Python students',
  projectsLede: 'From first scripts to finished apps: a few projects by students of ours worldwide. The <a class="ag-inline-link" href="/student-labs">student labs</a> page has a longer list.',
  reviewsLede: 'Students and parents on Google, quoted as they wrote.',

  fees: {
    h2: 'Fees for Python lessons in Augsburg',
    lede: 'Eight live lessons each month for one fee. The figure on this page is in euro, calculated from the European Central Bank reference rate; payment goes through in US dollars, and your bank converts it at its own rate, so the euro on your statement may vary slightly.',
    free: ['A free first Python lesson', 'A short program of your own', 'No card needed'],
    group: ['15 to 20 learners at a similar level', 'A regular mentor', 'Two lessons a week', 'Monthly, cancel any month'],
    one: ['One learner, one mentor', 'Projects you choose', 'Times fixed with you']
  },

  faq: {
    eyebrow: 'Augsburg asks',
    h2: 'Online Python classes in Augsburg: what learners and parents ask',
    items: [
      { q: 'Are the classes in German?', a: 'No. Lessons are live and taught in English only. Mentors speak slowly, rephrase whenever needed and get used to each learner\'s accent. Python itself uses English words, so the language of the lesson and of the code match.' },
      { q: 'How do I know whether online lessons will suit my child?', a: 'Check that there is a computer with a keyboard, a quiet place for an hour, and a child who is willing to listen and answer in English. The free first lesson shows the rest, and the mentor will say honestly if one-to-one lessons would suit better.' },
      { q: 'What Informatik will my child have at school in Augsburg?', a: 'It depends on the school type. At a Mittelschule, Informatik is compulsory for one lesson a week from grade 5 to grade 10. At a Gymnasium there is an Informatik focus in grades 6 and 7, compulsory Informatik in grades 9 and 10 in the NTG branch, and two compulsory lessons in grade 11 for everyone.' },
      { q: 'Is the Informatik Abitur in Bavaria done on a computer?', a: 'No. According to the GI Informatik-Monitor 2026/27, the written tasks are set centrally and largely consist of programming on paper, with no practical work at a computer.' },
      { q: 'From what age can someone start Python with you?', a: 'From about 9 for typed Python. Younger children begin with Scratch. Adults of any age can start from zero.' },
      { q: 'When are lessons in Augsburg time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. School pupils usually choose afternoons and adults early evenings.' },
      { q: 'Do lessons stop in the Bavarian school holidays?', a: 'No, unless you ask. The mentors are not on the Bavarian calendar, so learners often use a holiday week, such as the Herbstferien from 2 to 6 November 2026, to get started.' },
      { q: 'Where are the mentors?', a: 'In India. In winter India is four and a half hours ahead of Augsburg, so a 16:20 lesson in Augsburg is 20:50 for the mentor.' },
      { q: 'How is the fee shown, and how is it charged?', a: 'It is a monthly fee for eight lessons, shown here in euro at the European Central Bank reference rate and charged in US dollars. Your bank converts the charge, so the amount on your statement can differ a little. The first lesson is free.' },
      { q: 'Do you teach IB or IGCSE computer science?', a: 'Yes. We have courses for IB Diploma Computer Science and Cambridge IGCSE Computer Science 0478, taught live in English. The school and the exam board set and grade the actual coursework and exams.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Further pages',
    h2: 'Related pages',
    lede: 'More for learners in Bavaria and across Germany.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Our hub page for Germany.' },
      { href: '/coding-classes-in-bavaria', label: 'Coding classes in Bavaria', p: 'The Land page for Bavaria.' },
      { href: '/python-classes-for-kids-germany', label: 'Python classes for kids', p: 'Starting typed code at nine.' },
      { href: '/ib-computer-science-tutor-germany', label: 'IB Computer Science', p: 'For IB pupils in Germany.' },
      { href: '/igcse-computer-science-tutor-germany', label: 'IGCSE Computer Science', p: 'For Cambridge pupils in Germany.' },
      { href: '/abitur-computer-science-in-english', label: 'Abitur computer science', p: 'Informatik in the Oberstufe.' }
    ]
  },

  start: {
    h2: 'Book a free Python lesson from Augsburg',
    lede: 'The first lesson is a real lesson: a short program, written by the learner with the mentor alongside. Afterwards the mentor suggests a course, and whether a class or one-to-one lessons would suit best.',
    readFirst: 'Read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> for our method, or browse <a class="ag-inline-link" href="/courses">all courses</a>.',
    note: 'Lessons are live online, in English only, with mentors in India. We answer fastest on WhatsApp, in English.',
    formNote: 'Free, and no card is required.'
  },

  footer: {
    cols: [
      { h4: 'Python', links: [
        { href: '/python-classes-for-kids-germany', label: 'Python for kids' },
        { href: '/ib-computer-science-tutor-germany', label: 'IB Computer Science' },
        { href: '/igcse-computer-science-tutor-germany', label: 'IGCSE Computer Science' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-in-bavaria', label: 'Coding classes in Bavaria' },
        { href: '/abitur-computer-science-in-english', label: 'Abitur computer science' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'A date in text sorts like text'
  },

  personalityCss: `
.ag-root.ag-pau .ag-hero h1 { letter-spacing: -0.011em; }
.ag-root.ag-pau .ag-capsule { border-left-width: 5px; border-radius: 6px; }
.ag-root.ag-pau .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-pau .ag-steps li strong { font-weight: 700; }
.ag-root.ag-pau .ag-table td:nth-child(2) { font-variant-numeric: tabular-nums; }
`,

  dossier: {
    curriculumAuthority: 'GI Informatik-Monitor 2026/27 (Bayern page); Bayerisches Staatsministerium für Unterricht und Kultus, Gymnasium; KMK Ferien 2026/2027; AGIS school directory (ISA); Destatis GV-ISys 31.12.2024; Stadt Augsburg open data, Passanten Annastraße, CC BY 4.0.',
    localProject: 'A date in text sorts like text: an original Python project on Augsburg\'s hourly Annastraße pedestrian counts (48,956 rows, December 2020 to August 2026) in which max() on the text dates claims the latest day is 31.12.2025 while the file ends on 11 August 2026; real dates fix it, and the busiest hour of 2025 is 16 Uhr with 1,867 people on average; Saturday averages 28,668 a day against 6,123 on Sunday. Lesson family: convert text to real dates before comparing.',
    requiredMentions: ['annastrasse.csv', 'max() of the text says the latest day is: 31.12.2025', 'Real latest day: 2026-08-11  real earliest: 2020-12-16', 'Busiest hour in 2025: 16 Uhr, on average 1867 people', 'Rows: 48956', 'A date in text sorts like text', '301,105', '2 to 6 November 2026'],
    sources: [
      { claim: 'Bavaria Informatik by school type, grade 11 hours, written Abitur on paper.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/bayern' },
      { claim: 'Bavarian Abitur three written and two oral exams; G9.', url: 'https://www.km.bayern.de/lernen/schularten/gymnasium' },
      { claim: 'Bavarian holidays 2026/27.', url: 'https://www.kmk.org/service/ferien.html' },
      { claim: 'International School Augsburg qualifications.', url: 'https://www.agis-schools.org/school/international-school-augsburg-isa' },
      { claim: 'Annastraße pedestrian counts and licence.', url: 'https://ckan.govdata.de/dataset/augsburg-passanten-annastrasse' },
      { claim: 'Augsburg population 301,105 on 31 December 2024.', url: 'https://www.destatis.de/DE/Themen/Laender-Regionen/Regionales/Gemeindeverzeichnis/Administrativ/05-staedte.xlsx?__blob=publicationFile' }
    ],
    rejectedClaims: [
      'Any reason for the busy late-November and December Saturdays: not in the data, none given.',
      'The counting technology behind the Annastraße figures: not stated in the dataset, not described.',
      'Naming ISA or any Augsburg school as a source of our students: refused; ISA is named as AGIS-sourced context only.',
      'Any affiliation with Stadt Augsburg, the Bavarian ministry or AGIS: none.',
      'German-language teaching: we teach in English only, and the page says so.'
    ]
  }
};
