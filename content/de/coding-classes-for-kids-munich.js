'use strict';
// Coding classes for kids in Munich (ag- city door, Germany cluster P5 row DE112, alloc code ckm, hubGroup city).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD.
// Angle: a Munich child meets the Übertritt in Klasse 4 long before any fixed computing hour; Bavaria's first Informatik
// hours depend on the school type chosen after grade 4; the Bavarian school calendar 2026/27 (the Herbstferien are this
// week); a weather project on the DWD station München-Stadt where the lesson is a streak counter that resets.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/coding-classes-for-kids-munich/ and
// facts-school/src/, fetched 2 and 3 Nov 2026 with curl -sL -A "Mozilla/5.0"):
//  - Bayerisches Staatsministerium für Unterricht und Kultus, km.bayern.de/lernen/schularten/grundschule (by-grundschule):
//    "Anfang Mai erhalten alle Schülerinnen und Schüler der 4. Klasse das Übertrittszeugnis."; "Maßgeblich ist dabei die
//    Durchschnittsnote aus den Fächern Deutsch, Mathematik sowie Heimat- und Sachunterricht."; "Danach gibt es drei
//    unmittelbare Anschlussmöglichkeiten: die Mittelschule, die Realschule oder das Gymnasium."
//  - GI Informatik-Monitor 2026/27, Bayern page (infmon-bayern/c7366485.txt): Mittelschule "in den Jahrgangsstufen 5 bis
//    10 das verbindliche Fach Informatik im Umfang von je einer Wochenstunde"; Realschule Informationstechnologie 5 to 10,
//    "Wahlpflichtfächergruppe I – insgesamt elf Wochenstunden, Wahlpflichtfächergruppe II – insgesamt acht
//    Wochenstunden, Wahlpflichtfächergruppe IIIa – insgesamt sieben, Wahlpflichtfächergruppe IIIb – insgesamt neun";
//    Gymnasium Natur und Technik "in den Jahrgangsstufen 6 und 7 im Umfang von je einer Wochenstunde der Schwerpunkt
//    Informatik"; NTG "in den Jahrgangsstufen 9 und 10 zweistündig das verpflichtende Fach Informatik"; "Somit findet in
//    Jahrgangsstufe 11 in allen Ausbildungsrichtungen verpflichtend zweistündig Informatikunterricht statt."; "Die
//    Grundschule umfasst die Jahrgangsstufen 1 bis 4"; G9 "Umstellung vom G8-Bildungsgang ihren Abschluss findet".
//  - km.bayern.de/lernen/schularten/realschule: "Ab dem Prüfungstermin 2025 können alle Realschulen eine
//    Abschlussprüfung im Fach Informationstechnologie anbieten."
//  - KMK Ferien 2026/2027 (kmk-fer2627/fe303dbf.txt, Stand 09.10.2025): "Bayern 02.11. - 06.11. 24.12. - 08.01. -- 08.02.
//    - 12.02." / "22.03. - 02.04. 18.05. - 28.05. 02.08. - 13.09."; "Angegeben ist jeweils der erste und letzte Ferientag."
//  - bwinf.de Biber pages (FACTS.md 129 to 137): free, grades 3 to 13, no prior knowledge; Biberwochen 9 to 20 November
//    2026; results December 2026, certificates January 2027; over 580,000 pupils in 2025.
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): München 1,505,005; Bayern 13,248,928.
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027 (facts-geo/timezone.tsv).
//  - Data: Deutscher Wetterdienst, Climate Data Center, daily climate data (tageswerte_KL_03379_19540601_20251231_hist.zip,
//    produkt_klima_tag_19540601_20251231_03379.txt), station 3379 München-Stadt, 515.37 m, current site since 8 July 1997
//    (Metadaten_Geographie_03379.txt). Licence: Terms_of_use.pdf "The Creative Commons BY 4.0 - Licence "CC BY 4.0"
//    apply." Normals: multi_annual/mean_91-20/Sommertage_1991-2020.txt, station 3379, "Jahr" 53.3.
//    DWD Glossar Sommertag: "Ein Sommertag ist ein Tag, an dem das Maximum der Lufttemperatur ≥ 25 °C beträgt."
// Our own calculations (scratchpad de/w/C2/ckm, python3 -I): 365 days of 2025, no -999 in TXK or TNK. v1.py prints
// "Summer days in 2025: 60" and "Longest run: 19 days, ending 2025-07-06"; v2.py prints "Longest run of frosty nights: 14"
// and "From 2025-01-10 to 2025-01-23". Extra counts: summer days by month May 4, June 21, July 13, August 15,
// September 7; second longest run 9 days ending 2025-08-15; warmest day 2 July 2025 with 34.3 C; coldest night
// 23 November 2025 with -8.0 C; 75 nights below 0 C.
// Lesson family: streaks, a counter that grows and resets.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'summer_days = 0',
  'run = 0',
  'longest = 0',
  'with open("munich_2025.csv") as data:',
  '    for day in csv.DictReader(data):',
  '        if float(day["tmax"]) >= 25.0:',
  '            summer_days = summer_days + 1',
  '            run = run + 1',
  '        else:',
  '            run = 0',
  '        if run > longest:',
  '            longest = run',
  '            ended = day["date"]',
  '',
  'print("Summer days in 2025:", summer_days)',
  'print("Longest run:", longest, "days, ending", ended)'
].join('\n');

const V2 = [
  'import csv',
  '',
  'run = 0',
  'longest = 0',
  'start = None',
  'with open("munich_2025.csv") as data:',
  '    for day in csv.DictReader(data):',
  '        if float(day["tmin"]) < 0.0:',
  '            if run == 0:',
  '                start = day["date"]',
  '            run = run + 1',
  '            if run > longest:',
  '                longest = run',
  '                window = (start, day["date"])',
  '        else:',
  '            run = 0',
  '',
  'print("Longest run of frosty nights:", longest)',
  'print("From", window[0], "to", window[1])'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Munich: coding for kids' },
  slug: 'coding-classes-for-kids-munich',
  code: 'ckm',
  accent: '#3C6797',
  accentRationale: 'Coding classes for kids, Munich: a steel blue #3C6797, a darker cousin of the Bavarian white-and-blue and of a clear Föhn sky over the station in the project; it clears 4.5:1 on the paper and all three tints (alloc minimum 4.76)',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Coding classes for kids in Munich',
  title: 'Coding Classes for Kids in Munich: Live Online in English',
  description: 'Coding classes for kids in Munich aged 6 to 12, live online in English: when Bavarian schools start Informatik, the 2026/27 holidays and a Munich weather project.',
  ogDescription: 'Live online coding for Munich children aged 6 to 12, taught in English at their own pace: which Bavarian school type brings the first Informatik hours, the school holidays of 2026/27, and a real project on the DWD weather station München-Stadt.',
  twitterDescription: 'Coding for Munich kids, live in English: Bavarian Informatik by school type, the 2026/27 holidays and a Munich weather project.',
  pageName: 'Coding Classes for Kids in Munich',
  webPageDescription: 'A guide for Munich parents of children aged 6 to 12 to learning to code, built from the Bavarian ministry of education, the Gesellschaft für Informatik and the KMK holiday table, with an original Python project on 2025 daily data from the Deutscher Wetterdienst station München-Stadt.',
  courseDescription: 'Live online coding classes in English for children aged 6 to 12 in Munich: Scratch first, then typed Python and small data and AI projects, in a group of fifteen to twenty or one to one, with a regular mentor who adapts to the child\'s pace and accent.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Kids in Munich',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#schools', label: 'Schools' },
    { href: '#weather', label: 'Weather code' },
    { href: '#holidays', label: 'Holidays' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Munich &middot; Coding for children &middot; Ages 6 to 12',
  h1: 'Coding classes for kids in Munich',
  lede: 'In Munich the big school decision comes early: in May of Klasse 4 every child receives the Übertrittszeugnis, and the school type chosen after it decides when Informatik first appears on a timetable. Below you will find what each Bavarian school type teaches about computing, how our live classes in English fit a Munich child of 6 to 12, the holiday weeks of 2026/27, and a project on Munich\'s own weather station in which a child writes a counter that knows when to start again from zero.',
  secondaryCta: { href: '#weather', label: 'See the weather project' },
  wa: 'Hello Modern Age Coders, we live in Munich and our child would like to learn coding in English. Could we book a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; Munich afternoons, taught in English',
  spec: [
    ['Ages', '6 to 12, in groups by age'],
    ['First steps', 'Scratch blocks, then typed Python'],
    ['Class size', 'Fifteen to twenty, or one to one'],
    ['Munich times', 'After school and weekend mornings'],
    ['Mentors', 'Based in India, teaching live'],
    ['Trial', 'A free first class, no card']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders runs coding classes for kids in Munich aged 6 to 12, taught live online in English: a child starts with Scratch games, moves on to typed Python, then builds small data projects on Munich\'s own weather records. One regular mentor matches your child\'s pace and accent. Lessons fit after school or weekend mornings, one to one or in a batch of fifteen to twenty, years before Bavarian timetables bring a first Informatik hour.',

  picks: {
    eyebrow: 'Where Munich children begin',
    h2: 'Three courses for Munich children aged 6 to 12',
    lede: 'A typed Python route for children from about 9, a long course that starts a six year old on blocks, and a short Scratch course to test whether coding catches on.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'CKM / 01', title: 'Python and AI for Kids', note: 'For children of about 9 and up, over eight to ten months. Typed code from the first week, turtle drawings and games, then data and AI projects such as the weather counter on this page.' },
      { course: 'kids-coding-blocks-masterclass', code: 'CKM / 02', title: 'Coding for Kids', note: 'The long route, roughly a school year, starting as young as six. Stories and games in Scratch, first apps, then a gentle step to typed code, always with children of the same age.' },
      { course: 'scratch-programming-complete-course', code: 'CKM / 03', title: 'Scratch Coding for Kids', note: 'Three or four months, any age from six. A beginner finishes with several games of their own, which tells you quickly whether the interest is real.' }
    ]
  },

  sections: [
    {
      id: 'schools',
      eyebrow: 'Bavarian schools',
      h2: 'When does a Munich child first get Informatik at school?',
      lede: 'It depends on the school your child moves to after Klasse 4. The figures below come from the Bavarian ministry of education and the Gesellschaft für Informatik.',
      body: [
        { kind: 'two',
          leftH3: 'Four years, then a fork',
          left: [
            'Bavarian Grundschule covers grades 1 to 4. Early in May of Klasse 4, the ministry says, every pupil receives the Übertrittszeugnis, the transfer report. What counts is the average mark in German, maths and Heimat- und Sachunterricht, and from there a child goes on to one of three school types: the Mittelschule, the Realschule or the Gymnasium.',
            'For many Munich families that report is the first time school feels high stakes. It is also the reason this page talks about thinking skills before it talks about apps: a child who learns to break a problem into steps uses that habit in a maths word problem as much as in a program.'
          ],
          rightH3: 'Three school types, three timetables',
          right: [
            'The Informatik-Monitor 2026/27 of the Gesellschaft für Informatik lists Bavaria\'s computing hours by school type. At the Mittelschule, Informatik is compulsory for one lesson a week in every year from grade 5 to grade 10. At the Realschule, the subject is called Informationstechnologie and runs from grade 5 to grade 10, with a total load that depends on the branch the pupil chooses.',
            'At the Gymnasium, computing starts inside Natur und Technik: one weekly lesson in grades 6 and 7 has an Informatik focus. The scientific and technological branch adds two hours of Informatik in grades 9 and 10, and in grade 11 every branch has two compulsory hours of computing.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Compulsory computing in Bavarian secondary schools, school year 2026/27', head: ['School type', 'Subject', 'Grades', 'How much'], rows: [
          ['Mittelschule', 'Informatik', '5 to 10', 'One lesson a week in each grade'],
          ['Realschule, branch I', 'Informationstechnologie', '5 to 10', 'Eleven weekly hours in total'],
          ['Realschule, branch II', 'Informationstechnologie', '5 to 10', 'Eight weekly hours in total'],
          ['Realschule, branch IIIa / IIIb', 'Informationstechnologie', '5 to 10', 'Seven / nine weekly hours in total'],
          ['Gymnasium, all branches', 'Natur und Technik, Informatik focus', '6 and 7', 'One lesson a week'],
          ['Gymnasium, scientific branch', 'Informatik', '9 and 10', 'Two lessons a week'],
          ['Gymnasium, all branches', 'Informatik or a variant', '11', 'Two lessons a week']
        ] },
        { kind: 'source', html: 'Source: Gesellschaft für Informatik, Informatik-Monitor 2026/27, Bayern, compiled from the Mittelschulordnung, Realschulordnung and Gymnasialschulordnung; Bayerisches Staatsministerium für Unterricht und Kultus, Grundschule and Realschule pages. Read on 2 and 3 November 2026. The monitor\'s Bavarian tables begin at grade 5. The Bavarian Gymnasium has returned to nine years, so grade 11 is the Einführungsphase and the Abitur comes after grade 13.' },
        { kind: 'p', mt: true, html: 'Two details are easy to miss. The Realschule hours are totals spread over six years, not hours per week in every year, so the weekly dose is smaller than the headline number suggests. And since the exam round of 2025, the ministry says, every Realschule may offer a final exam in Informationstechnologie, which pupils take voluntarily. A child who arrives at grade 5 already comfortable with loops and variables starts these courses with confidence instead of catching up.' },
        { kind: 'p', html: 'None of this is a reason to rush. Our classes for six to nine year olds do not try to teach the grade 7 syllabus early. They build the habits underneath it: following a sequence, spotting a pattern, testing an idea and fixing it when it fails.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Are the classes in English, and can my child keep up?',
      lede: 'Yes. All teaching happens in English, at a speed the mentor sets so that a child still learning the language never gets left behind.',
      body: [
        { kind: 'three', cells: [
          { h3: 'One language, said up front', p: 'We teach in English only and have no German-language classes. Munich families at international or bilingual schools find this natural; families at a German Grundschule often like the extra hour of spoken English that comes with the coding.' },
          { h3: 'A mentor who adjusts', p: 'Mentors keep sentences short, check that each step has landed, and say it a second way when a child looks unsure. They tune their ear to your child\'s accent within a few classes, and a German word in the middle of an answer is simply met with the English one.' },
          { h3: 'The screen does the explaining', p: 'Most of a lesson is shown, not told: the mentor builds, the child copies, changes and tests. Python keywords such as if, for and print are English words anyway, so a child picks up the language of code and of the class together.' }
        ] },
        { kind: 'p', mt: true, html: 'Mentors work from India over live video, and a Munich afternoon falls in the Indian evening, so the timing suits both sides. The same mentor stays with your child week after week and learns whether they prefer a challenge, a hint or a little quiet before they answer.' }
      ]
    },
    {
      id: 'weather',
      tint: 'tint',
      eyebrow: 'A real Munich project',
      h2: 'How many summer days did Munich have in 2025, and what was the longest run?',
      lede: 'Every daily reading from the Deutscher Wetterdienst station München-Stadt is open data that anyone may reuse. With one year of it, a ten year old writes a streak counter: a small program with a big idea inside, a count that falls back to zero.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The station is number 3379, München-Stadt, at 515 metres. Its metadata file says it has stood at its present site since 8 July 1997. The daily file holds one line per day back to 1954, with the day\'s highest and lowest temperature, rain, sunshine and snow.',
            'We cut out the 365 days of 2025 and give the child a small file, munich_2025.csv, with the date, the highest temperature and the lowest. All 365 days of 2025 have both readings, so this time nothing needs patching.'
          ],
          rightH3: 'The question',
          right: [
            'The DWD calls a day a Sommertag, a summer day, when the temperature reaches at least 25 °C. How many summer days did Munich have in 2025? And what was the longest run of them in a row?',
            'Counting the days is easy. The run is the interesting part: the program has to keep a second counter that grows on every warm day and drops back to zero on the first cooler one, and it has to remember the highest value that counter ever reached.'
          ] },
        { kind: 'code', label: 'Version 1: count summer days and the longest run', lang: 'Python', code: V1, note: 'It prints: <code>Summer days in 2025: 60</code> and <code>Longest run: 19 days, ending 2025-07-06</code>.' },
        { kind: 'p', mt: true, html: 'Sixty summer days, and a streak of 19 from 18 June to 6 July 2025. That run held the warmest day of the year, 2 July, when the station reached 34.3 °C. Children usually guess that August had the longest run; it had more summer days than July, fifteen against thirteen, but its longest streak stopped at nine.' },
        { kind: 'p', html: 'The second program turns the question upside down. Instead of warm days it looks for frosty nights, nights when the lowest temperature fell below zero, and it also remembers on which date each run started. That is the step most children get wrong first: they record the start when the run ends, not when it begins.' },
        { kind: 'code', label: 'Version 2: the longest run of frosty nights, with dates', lang: 'Python', code: V2, note: 'It prints: <code>Longest run of frosty nights: 14</code> and <code>From 2025-01-10 to 2025-01-23</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Munich summer days, 2025 against the long-term average (station München-Stadt)', head: ['Measure', '2025 (our count)', '1991 to 2020 average (DWD)'], rows: [
          ['Summer days, highest at least 25 °C', '60', '53.3'],
          ['Summer days in June', '21', '11.4'],
          ['Summer days in July', '13', '16'],
          ['Summer days in August', '15', '15.3']
        ] },
        { kind: 'source', html: 'Data: Deutscher Wetterdienst, Climate Data Center, daily climate data and the 1991 to 2020 Sommertage averages for station 3379 München-Stadt, licence CC BY 4.0, downloaded 3 November 2026. Counts for 2025 are our own, from the daily maximum temperatures. The DWD defines a Sommertag as a day whose maximum air temperature is at least 25 °C.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 8, no screen.</strong> Colour a paper calendar for two weeks: red for warm days, blue for the rest. Then count the longest row of red squares with your finger, starting again at each blue one.',
          '<strong>Ages 8 to 10, Scratch.</strong> Keep two variables, a total and a streak. Make the cat say the streak each day, and set it back to 0 when a cool day comes.',
          '<strong>From about 10, typed code.</strong> Run Version 1, then change it so it also prints the date on which the longest run began. Compare with Version 2 only after you have tried.',
          '<strong>Going further.</strong> June 2025 had nearly twice the long-term number of summer days, July fewer. Use the whole file back to 1954 to find the year with the longest summer streak, and print the top three.'
        ] }
      ]
    },
    {
      id: 'holidays',
      eyebrow: 'The Munich school year',
      h2: 'When are the Bavarian school holidays in 2026/27?',
      lede: 'Classes carry on through the holidays unless you pause them, but most families plan around these dates. The Herbstferien are this very week.',
      body: [
        { kind: 'table', numCols: [], caption: 'School holidays in Bavaria, school year 2026/27 (first and last day off)', head: ['Holiday', 'Dates'], rows: [
          ['Herbstferien (autumn)', '2 to 6 November 2026'],
          ['Weihnachtsferien (Christmas)', '24 December 2026 to 8 January 2027'],
          ['Winter break (Frühjahrsferien)', '8 to 12 February 2027'],
          ['Osterferien (Easter)', '22 March to 2 April 2027'],
          ['Pfingstferien (Whitsun)', '18 to 28 May 2027'],
          ['Sommerferien (summer)', '2 August to 13 September 2027']
        ] },
        { kind: 'source', html: 'Source: Kultusministerkonferenz, Ferien im Schuljahr 2026/2027 in den Ländern, Stand 9 October 2025, Bayern row; the table gives the first and last holiday day. The KMK sets the summer dates in advance; each Land sets its other holidays itself.' },
        { kind: 'two', mt: true,
          leftH3: 'A free puzzle contest right after the break',
          left: [
            'Straight after the Herbstferien, the Biberwochen run from 9 to 20 November 2026. The Informatik-Biber is a free online quiz of logic puzzles; its organisers, Bundesweite Informatikwettbewerbe, open it to pupils from grade 3 up to grade 13 and say nobody needs to have coded before. Over 580,000 children and teenagers joined in 2025.',
            'Entry is through the school, so ask your child\'s teacher. Results follow in December 2026 and certificates in January 2027.'
          ],
          rightH3: 'How we use the calendar',
          right: [
            'Long breaks are a good moment for a short project: the summer weeks from 2 August 2027 suit a two-week Scratch game or the weather project above. Before the Übertritt in May of Klasse 4, many families slow coding down and keep the hour light.',
            'We never use real Biber tasks in class. We write puzzles of our own in the same spirit, about order, rules and shortest paths.'
          ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'What time are the classes in Munich?',
      lede: 'Munich afternoons line up with Indian evenings, so most slots fall between the end of school and dinner.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample Munich start times and the matching time for a mentor in India', head: ['Munich time', 'India time until 28 March 2027', 'India time from 28 March 2027'], rows: [
          ['14:45', '19:15', '18:15'],
          ['16:15', '20:45', '19:45'],
          ['17:45', '22:15', '21:15'],
          ['Saturday 09:45', '14:15', '13:15']
        ] },
        { kind: 'source', html: 'The Einheitenzeitgesetz sets German legal time: MEZ, UTC+1, through the winter and MESZ, UTC+2, through the summer. The clocks went back on 25 October 2026 and go forward on 28 March 2027. India keeps UTC+5:30 the whole year, which puts it four and a half hours ahead of Munich now and three and a half hours ahead once summer time returns. The rows are examples only; no batch has a fixed time.' },
        { kind: 'p', mt: true, html: 'You pick a slot in your own clock when you book, and the mentor sees the same moment in theirs. A child at a Ganztagsschule who gets home at four usually takes a later weekday slot or a Saturday morning, which is calm for the younger ones.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'What a Munich child can do at each stage',
    lede: 'We wrote these five steps ourselves. They help us choose a group for a new child and tell parents, in plain words, how far things have come.',
    table: { caption: 'Our five steps for children of 6 to 12', head: ['Step', 'Usual age', 'What your child can do'], rows: [
      ['1. Order', '6 to 7', 'Put a short story or a robot path into the right order of steps'],
      ['2. Repeat', '7 to 8', 'Use a loop in Scratch instead of copying the same block ten times'],
      ['3. Remember', '8 to 10', 'Keep a score or a streak in a variable and reset it on purpose'],
      ['4. Decide', '9 to 11', 'Write typed Python with if, else and loops that read a file'],
      ['5. Explain', '10 to 12', 'Run a program on real data and explain the answer it prints']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 3 is the heart of the weather project. A child who can reset a counter at the right moment has understood what a variable is for.',
      'We report progress as things your child built and can explain, not as hours logged.'
    ] },
    right: { h3: 'For children', ps: [
      'A streak is just a number that grows, and goes back to zero when the pattern breaks.',
      'When your program gives an answer, ask it one more question: when did that start?'
    ] }
  },

  catalogue: {
    eyebrow: 'More for children',
    h2: 'Nine more courses for Munich children',
    lede: 'Each one is taught live and in English by a mentor who stays with your child, privately or in a batch.',
    bands: [
      { num: 'I', h3: 'Thinking and maths', sub: 'Ages 7 to 15', courses: [
        { code: 'CKM / THINK / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Puzzles and problem solving', blurb: 'Logic puzzles and step-by-step plans for children of 7 and up.' },
        { code: 'CKM / THINK / 02', slug: 'maths-through-coding', title: 'Maths with Python', blurb: 'Fractions, patterns and graphs turned into small programs, from 10.' },
        { code: 'CKM / THINK / 03', slug: 'ai-literacy-for-kids-course', title: 'Understanding AI', blurb: 'What it means for a computer to learn, taught without any grown-up AI accounts, from 8.' }
      ] },
      { num: 'II', h3: 'Worlds and games', sub: 'Ages 7 to 14', courses: [
        { code: 'CKM / PLAY / 01', slug: 'minecraft-coding-for-kids-course', title: 'Coding in Minecraft', blurb: 'Code that changes a world children already love, from 7.' },
        { code: 'CKM / PLAY / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox games in Luau', blurb: 'Obstacle courses and games that friends can play, from 8.' },
        { code: 'CKM / PLAY / 03', slug: 'game-development-masterclass-for-kids', title: 'Games in three engines', blurb: 'One long course across Scratch, Roblox and Minecraft, from 8.' }
      ] },
      { num: 'III', h3: 'Building things', sub: 'Ages 8 to 12', courses: [
        { code: 'CKM / MAKE / 01', slug: 'block-coding-app-development-masterclass', title: 'Apps with blocks', blurb: 'Phone apps that really run on a phone, from 8.' },
        { code: 'CKM / MAKE / 02', slug: 'kids-ai-web-development-course', title: 'A first website', blurb: 'Pages a child designs and publishes, from 9.' },
        { code: 'CKM / MAKE / 03', slug: 'german-informatics-competitions-course-biber-bwinf-bwki', title: 'Informatics contests', blurb: 'Puzzles in the Biber spirit, then harder rounds, from 9.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'What a week of classes looks like in Munich',
    lede: 'Two live hours a week with the same mentor. Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Afternoons', l: 'Munich weekday afternoons, after Grundschule or the Ganztag.' },
      { time: 'Saturdays', l: 'Weekend mornings, unhurried for six and seven year olds.' },
      { time: '1-on-1', l: 'A time you agree with the mentor, at your child\'s speed.' }
    ],
    cells: [
      { h3: 'One mentor', p: 'The same face every week, who knows how your child works.' },
      { h3: 'Plain English', p: 'Short sentences, checked and repeated when needed.' },
      { h3: 'Hands on the keys', p: 'Your child types and drags from the first lesson.' },
      { h3: 'Groups by age', p: 'Six year olds learn with six year olds.' },
      { h3: 'Notes for parents', p: 'What was made, what was tricky, what is next.' },
      { h3: 'Batch or private', p: 'A batch of fifteen to twenty, or your child with the mentor.' }
    ]
  },

  projectsH2: 'What older students go on to build',
  projectsLede: 'Plenty of children who begin in Grundschule are still coding as teenagers. Here is a small sample of what our older students have made; the <a class="ag-inline-link" href="/student-labs">student labs</a> page shows more.',
  reviewsLede: 'What parents and students wrote on Google, word for word.',

  fees: {
    h2: 'Fees for Munich families',
    lede: 'One monthly fee covers eight live classes. We show it in euro, using the European Central Bank\'s reference rate, but the card is charged in US dollars; your bank converts the amount, so the statement can be a little different.',
    free: ['A free first class', 'A short puzzle and a first program', 'No card needed'],
    group: ['Fifteen to twenty children of a similar age', 'The same mentor each week', 'Two classes a week', 'Monthly, stop whenever you like'],
    one: ['Your child and one mentor', 'Projects chosen around your child', 'Times that fit your week']
  },

  faq: {
    eyebrow: 'Munich parents ask',
    h2: 'Coding classes for kids in Munich: common questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. All teaching is live and in English only; there is no German-language option. Mentors slow down, rephrase and adapt to each child\'s pace and accent, which is why children with only a little English manage well. The keywords of code are the same whatever language the lesson is in.' },
      { q: 'At what age can my child start?', a: 'Six is a good age to begin. Younger children work in Scratch, where blocks snap together and almost nothing has to be typed, in a batch of children their own age. Around 9, most are ready for the typed Python in Python and AI for Kids.' },
      { q: 'When do Bavarian schools start teaching Informatik?', a: 'It depends on the school type after Klasse 4. The Gesellschaft für Informatik lists one compulsory lesson a week from grade 5 at the Mittelschule, Informationstechnologie from grade 5 at the Realschule, and at the Gymnasium an Informatik focus within Natur und Technik in grades 6 and 7.' },
      { q: 'Will coding classes help with the Übertritt in Klasse 4?', a: 'Not directly, and we do not claim they do. The Übertrittszeugnis rests on the marks in German, maths and Heimat- und Sachunterricht. Coding does train careful step-by-step thinking, which many children then use in maths, but the school\'s marks are what count.' },
      { q: 'What time are classes in Munich?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Most Munich children take a slot between about 14:45 and 18:00, or on a Saturday morning.' },
      { q: 'Do classes stop during the Bavarian school holidays?', a: 'Not unless you ask. Classes continue through the Herbstferien, Christmas and the other breaks; many families pause for a trip and pick up again afterwards. The KMK table lists the summer holidays 2027 as 2 August to 13 September 2027.' },
      { q: 'Where are the mentors?', a: 'In India, teaching over live video. Munich afternoons sit in the Indian evening: a 16:15 class in Munich starts at 20:45 India time until 28 March 2027. Your child keeps one mentor from week to week.' },
      { q: 'How large are the groups?', a: 'A batch holds fifteen to twenty children close in age. Families who want the mentor\'s full attention choose one to one instead: two private lessons each week, at hours agreed with you.' },
      { q: 'What does it cost, and in which currency?', a: 'You pay monthly. This page shows the fee in euro using the European Central Bank\'s reference rate, while the card is charged in US dollars and your bank converts it, so the final figure on your statement can move a little. Trying a first class costs nothing and needs no card.' },
      { q: 'Does my child need any equipment?', a: 'A laptop or desktop computer with a keyboard, a webcam and a stable internet connection. Scratch runs in the browser, and we help you set up Python in the first typed lessons. A tablet alone is not enough for typed code.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Further reading for Munich parents weighing up a first coding course.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Every page we have written for families in Germany.' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land', p: 'How all sixteen Länder handle computing at school.' },
      { href: '/informatik-biber-practice-in-english', label: 'Informatik-Biber practice', p: 'What the November contest asks, with puzzles of our own.' },
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids', p: 'Where most six and seven year olds start.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'The age rules of common AI tools, checked at the source.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our live classes, step by step.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Expect a logic puzzle and a tiny first program. Along the way the mentor notices how your child tackles a problem and how easy English feels, and afterwards recommends a course and a batch.',
    readFirst: 'If you would like to read first, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a typical class, and <a class="ag-inline-link" href="/courses">all courses</a> has every syllabus.',
    note: 'Every lesson is live, online and in English, taught from India. For a quick question, message us on WhatsApp in English.',
    formNote: 'Free, with no card and nothing to sign.'
  },

  footer: {
    cols: [
      { h4: 'Children', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids' },
        { href: '/python-for-10-year-olds', label: 'Python at ten' },
        { href: '/ai-projects-for-kids', label: 'AI projects for kids' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-for-kids-berlin', label: 'Coding for kids in Berlin' },
        { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'A streak always starts again at zero'
  },

  personalityCss: `
.ag-root.ag-ckm .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-ckm .ag-capsule { border-left-width: 4px; border-radius: 3px; }
.ag-root.ag-ckm .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-ckm .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-ckm .ag-code-head b { letter-spacing: 0.02em; }
`,

  dossier: {
    curriculumAuthority: 'Bayerisches Staatsministerium für Unterricht und Kultus (Grundschule and Realschule pages); Gesellschaft für Informatik, Informatik-Monitor 2026/27, Bayern; KMK Ferien 2026/2027; Bundesweite Informatikwettbewerbe, Informatik-Biber 2026; Einheitenzeitgesetz; Deutscher Wetterdienst, Climate Data Center, station 3379 München-Stadt, CC BY 4.0; all read 2 and 3 November 2026.',
    localProject: 'The München-Stadt streak counter: an original Python project on the DWD daily readings for 2025 that counts 60 summer days (maximum at least 25 C, the DWD Sommertag rule), finds the longest run of 19 ending 6 July 2025, then the longest run of frosty nights (14, 10 to 23 January 2025) with its start date; compared with the DWD 1991 to 2020 average of 53.3 summer days. Screen-free and Scratch versions. Lesson family: streaks, a counter that grows and resets.',
    requiredMentions: ['munich_2025.csv', 'Summer days in 2025: 60', 'Longest run: 19 days, ending 2025-07-06', 'Longest run of frosty nights: 14', 'From 2025-01-10 to 2025-01-23', 'Herbstferien (autumn)', 'Eleven weekly hours in total', 'A streak always starts again at zero'],
    sources: [
      { claim: 'Übertrittszeugnis in early May of Klasse 4; average of German, maths and HSU; three school types.', url: 'https://www.km.bayern.de/lernen/schularten/grundschule' },
      { claim: 'Bavarian Informatik hours by school type and grade.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/bayern' },
      { claim: 'Realschule final exam in Informationstechnologie from the 2025 exam round.', url: 'https://www.km.bayern.de/lernen/schularten/realschule' },
      { claim: 'Bavarian school holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Informatik-Biber 2026 dates and facts.', url: 'https://bwinf.de/biber/' },
      { claim: 'DWD daily climate data, station 3379, and CC BY 4.0 terms.', url: 'https://opendata.dwd.de/climate_environment/CDC/observations_germany/climate/daily/kl/historical/' },
      { claim: 'DWD definition of a Sommertag.', url: 'https://www.dwd.de/DE/service/lexikon/Functions/glossar.html?lv2=102248&lv3=102522' }
    ],
    rejectedClaims: [
      'That coding improves the Übertritt result: not shown by any source, so the page says it does not claim this.',
      'Any figure for Bavarian Grundschule computing: the monitor tables start at grade 5, so none is given.',
      'Naming Munich schools or international schools as sources of students: refused.',
      'German-language teaching: we teach in English only, and the page says so.',
      'Any affiliation with the DWD, the Bavarian ministry, BWINF or a school: none.'
    ]
  }
};
