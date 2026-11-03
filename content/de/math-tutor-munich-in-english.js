'use strict';
// Maths tutor in Munich, in English (ag- city maths door, Germany cluster P5 row DE113, alloc code enb, hubGroup maths).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD.
// Angle: the Bavarian maths checkpoints Klasse by Klasse and school type by school type (Übertritt, VERA, Schulaufgaben,
// Jahrgangsstufentests, the new grade 11 digital test, Realschule Abschlussprüfung, Abitur), the German maths words an
// English-speaking pupil meets, and an Oberstufe-style data task: a least-squares line through 71 years of Munich
// temperatures, checked against the DWD's own climate normals.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/math-tutor-munich-in-english/ and
// facts-school/src/, fetched 2 and 3 Nov 2026 with curl -sL -A "Mozilla/5.0"):
//  - km.bayern.de Grundschule: "Anfang Mai erhalten alle Schülerinnen und Schüler der 4. Klasse das Übertrittszeugnis.";
//    "Maßgeblich ist dabei die Durchschnittsnote aus den Fächern Deutsch, Mathematik sowie Heimat- und Sachunterricht."
//  - km.bayern.de Prüfungskultur Gymnasium (by-unterrichten_unterrichtsalltag_pruefungskultur_gymnasium): "Für die
//    Jahrgangstufe 11 wird ab dem Schuljahr 2026/27 ein zentraler digitaler Test zur Prüfung von Grundkompetenzen
//    bereitgestellt."; "Jahrgangsstufentests, die im Fach Mathematik weiterhin in den Jahrgangsstufen 8 und 10";
//    "Der neue Test zählt als kleiner Leistungsnachweis und ist für das zweite Schulhalbjahr vorgesehen."; "Bei
//    Leistungsnachweisen ab Jahrgangsstufe 8 können künftig modulare Mathematiksysteme (MMS)"; "sodass in der
//    Mittelstufe im Fach Mathematik einheitlich (mindestens) drei Schulaufgaben pro Schuljahr stattfinden."
//  - km.bayern.de Realschule: "Die Realschule endet nach der 10. Jahrgangsstufe mit der Abschlussprüfung – in Deutsch,
//    Englisch, Mathematik und dem Profilfach der jeweiligen Wahlpflichtfächergruppe."
//  - km.bayern.de Mittelschule: "Besonders gute Leistungen werden mit dem qualifizierenden Abschluss der Mittelschule
//    belohnt"; M-Zug "in der 10. Klasse den mittleren Schulabschluss zu erwerben".
//  - km.bayern.de Gymnasium (by-gym2): "Die Abiturprüfung besteht aus drei schriftlichen und zwei mündlichen Prüfungen.";
//    "Jahrgangsstufen Q12 und Q13"; "Die Oberstufe am bayerischen Gymnasium beginnt in der 11. und endet mit der 13."
//  - IQB VERA pages (FACTS.md 108, 111, 113, 115, 116): VERA-3 2027 "12.04. bis 26.05.2027"; VERA-8 2027 "08.02. bis
//    25.03.2027"; "Rankings zwischen Schulen oder Ländern werden nicht vorgenommen und die Ergebnisse werden auch nicht
//    benotet."
//  - KMK Bildungsstandards Abitur maths (FACTS.md 126): Leitideen L1 to L5 incl. "Funktionaler Zusammenhang (L4) Daten
//    und Zufall (L5)".
//  - KMK Ferien 2026/2027 Bayern row (as on the Munich kids page).
//  - Destatis GV-ISys 31.12.2024: München 1,505,005.
//  - Data: Deutscher Wetterdienst, Climate Data Center, annual climate values, station 3379 München-Stadt
//    (jahreswerte_KL_03379_19550101_20251231_hist.zip, produkt_klima_jahr_19550101_20251231_03379.txt, column JA_TT),
//    licence CC BY 4.0 (CDC Terms_of_use.pdf). Station moved: Metadaten_Geographie rows 520.00 m to 7 July 1997, 515.37 m
//    from 8 July 1997. DWD normals: Temperatur_1961-1990.txt station 3379 "Jahr" 9.1 (Datenquelle 42), and
//    Temperatur_1991-2020.txt station 3379 "Jahr" 10.1 (Datenquelle 44).
// Our own calculations (scratchpad de/w/C2/enb, python3 -I): trend.py prints "Years: 71 from 1955 to 2025", "Mean of all
// years: 9.63 C", "Slope: 0.0345 C per year, 0.34 C per decade", "Line at 1960: 8.60 C, at 2025: 10.84 C"; periods.py
// prints "1961 to 1990: 9.14 C", "1991 to 2020: 10.11 C", "Difference: +0.96 C". Practice answers: mean of 2023 to 2025
// 11.27; rain 2024 1,126.8 mm to 2025 738.5 mm is -34.5 percent; 2025 actual 10.66 vs line 10.84, residual -0.18;
// largest residuals 1994 (+1.41) and 1996 (-1.56); warmest years 2024 (11.58), 2023 (11.57), 2022 (11.33).
// Lesson family: a line of best fit by least squares, and why a trend is not a forecast.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const TREND = [
  'import csv',
  '',
  'years = []',
  'temps = []',
  'with open("munich_years.csv") as source:',
  '    for line in csv.DictReader(source):',
  '        years.append(int(line["year"]))',
  '        temps.append(float(line["mean_temp"]))',
  '',
  'n = len(years)',
  'x_bar = sum(years) / n',
  'y_bar = sum(temps) / n',
  'top = sum((x - x_bar) * (y - y_bar) for x, y in zip(years, temps))',
  'bottom = sum((x - x_bar) ** 2 for x in years)',
  'm = top / bottom',
  'c = y_bar - m * x_bar',
  '',
  'print("Years:", n, "from", years[0], "to", years[-1])',
  'print(f"Mean of all years: {y_bar:.2f} C")',
  'print(f"Slope: {m:.4f} C per year, {10 * m:.2f} C per decade")',
  'print(f"Line at 1960: {m * 1960 + c:.2f} C, at 2025: {m * 2025 + c:.2f} C")'
].join('\n');

const PERIODS = [
  'import csv',
  '',
  'temp = {}',
  'with open("munich_years.csv") as source:',
  '    for line in csv.DictReader(source):',
  '        temp[int(line["year"])] = float(line["mean_temp"])',
  '',
  'def period_mean(first, last):',
  '    values = [temp[y] for y in range(first, last + 1)]',
  '    return sum(values) / len(values)',
  '',
  'old = period_mean(1961, 1990)',
  'new = period_mean(1991, 2020)',
  'print(f"1961 to 1990: {old:.2f} C")',
  'print(f"1991 to 2020: {new:.2f} C")',
  'print(f"Difference: {new - old:+.2f} C")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'maths', label: 'Munich: maths tutor in English' },
  slug: 'math-tutor-munich-in-english',
  code: 'enb',
  accent: '#59425B',
  accentRationale: 'Maths tutor in Munich: a dusky aubergine #59425B, the colour of a fountain-pen correction in a Bavarian Schulaufgabe, far from the steel blue of the Munich coding page; it clears 4.5:1 on the paper and all three tints (alloc minimum 7.24)',
  pageType: 'market',
  priceSubject: 'maths',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Maths tutor in Munich, in English',
  title: 'Maths Tutor in Munich, in English: Live Online Lessons',
  description: 'A maths tutor in Munich who teaches live in English: Bavarian maths tests by Klasse and school type, the 2027 dates, German maths words and a Munich data task.',
  ogDescription: 'Live online maths help in English for pupils at Munich schools: the Übertritt, VERA, Schulaufgaben, Jahrgangsstufentests, the new grade 11 test and the Abitur, plus a least-squares trend line through 71 years of Munich weather.',
  twitterDescription: 'Maths tutoring in English for Munich pupils: every Bavarian checkpoint, the 2027 dates and a Munich data task.',
  pageName: 'Maths Tutor in Munich, in English',
  webPageDescription: 'A guide in English for Munich families looking for maths help: the checkpoints of Bavarian maths from Klasse 3 to the Abitur, by school type, from the Bavarian ministry of education and the IQB, the German terms pupils meet, and an original least-squares task on Deutscher Wetterdienst data for München-Stadt.',
  courseDescription: 'Live online maths tutoring in English for pupils at Munich schools, Grundschule to Abitur: number work before the Übertritt, algebra, functions and geometry for Schulaufgaben and Jahrgangsstufentests, the Realschule final exam, and Oberstufe analysis and statistics, in a group or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Maths tutor, Munich',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#tests', label: 'Tests' },
    { href: '#types', label: 'School types' },
    { href: '#line', label: 'Trend line' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Munich &middot; Maths help in English &middot; Klasse 1 to Abitur',
  h1: 'A maths tutor in Munich who teaches in English',
  lede: 'Bavarian maths has more fixed checkpoints than most families expect: a transfer report in Klasse 4, comparison tests in Klasse 3 and 8, at least three Schulaufgaben a year in the Gymnasium middle school, central tests in grades 8 and 10, and from this school year a new digital test in grade 11. Here is each one by school type, with the 2027 dates, the German words your child will read in them, and a real Munich task that shows how we teach: slowly, in English, with the reasoning written down.',
  secondaryCta: { href: '#tests', label: 'The checkpoints by Klasse' },
  wa: 'Hello Modern Age Coders, my child goes to school in Munich and needs maths help in English. Could we book a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; Bavarian maths explained in English',
  spec: [
    ['For', 'Pupils in Munich, Klasse 1 to the Abitur'],
    ['School types', 'Grundschule, Mittelschule, Realschule, Gymnasium'],
    ['Checkpoints', 'Übertritt, VERA, Schulaufgaben, final exams'],
    ['Class size', 'Fifteen to twenty, or one to one'],
    ['Munich times', 'Late afternoons and Sundays, flexible'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders is a maths tutor for Munich pupils that teaches live online in English, with mentors who match your child\'s pace and accent. We follow the Bavarian school year from Grundschule and the Übertritt in Klasse 4, through Schulaufgaben and Jahrgangsstufentests, to the Realschule final exam and the Abitur, and we teach the German maths words alongside. Lessons run one to one or in a batch of fifteen to twenty.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three maths courses for Munich pupils',
    lede: 'One for the middle years where most gaps open, one for the Oberstufe, and one for Grundschule children before the Übertritt. The mentor maps each to your child\'s school type.',
    items: [
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'ENB / 01', title: 'Klasse 5 to 10 maths', note: 'Fractions to quadratic functions, percentages, geometry and probability: the material of Bavarian Schulaufgaben, the grade 8 and 10 Jahrgangsstufentests and the Realschule final exam.' },
      { course: 'abitur-mathematics-course-in-english', code: 'ENB / 02', title: 'Abitur Mathematik in English', note: 'Grade 11 to Q13: Analysis, Geometrie and Stochastik, with written solutions laid out the way German markers expect.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'ENB / 03', title: 'Grundschule maths', note: 'Klasse 1 to 4: place value, the four operations, measuring and shapes, at a calm pace before the transfer report in May of Klasse 4.' }
    ]
  },

  sections: [
    {
      id: 'tests',
      eyebrow: 'Checkpoints',
      h2: 'Which maths tests does a pupil in Munich sit, and when?',
      lede: 'Some are national, some Bavarian, some belong to one school type. This table puts them in the order a child meets them.',
      body: [
        { kind: 'table', numCols: [], caption: 'Maths checkpoints for pupils at Bavarian schools, with dates for 2027 where published', head: ['Klasse', 'Checkpoint', 'School type', 'What we know for 2027'], rows: [
          ['3', 'VERA-3 in maths, a comparison test', 'Grundschule', 'Test window 12 April to 26 May 2027; not graded'],
          ['4', 'Übertrittszeugnis, the transfer report', 'Grundschule', 'Early May; average of German, maths and Heimat- und Sachunterricht'],
          ['Mittelstufe', 'At least three Schulaufgaben in maths each year', 'Gymnasium', 'Grade 9 reduced from four to three'],
          ['8', 'VERA-8 in maths', 'Secondary schools', 'Test window 8 February to 25 March 2027; not graded'],
          ['8 and 10', 'Jahrgangsstufentest in maths', 'Gymnasium', 'Continues in the usual form'],
          ['10', 'Abschlussprüfung in maths', 'Realschule', 'Part of the final exam with German, English and the profile subject'],
          ['11', 'Central digital test of basic skills', 'Gymnasium', 'New from 2026/27, in the second half-year, counts as a small assessment'],
          ['Q12 and Q13', 'Abitur', 'Gymnasium', 'Five subjects: three written exams and two oral']
        ] },
        { kind: 'source', html: 'Sources: IQB, VERA-3 and VERA-8 pages (2027 windows); Bayerisches Staatsministerium für Unterricht und Kultus, pages on the Grundschule, the Realschule, the Gymnasium and Prüfungskultur am Gymnasium. Read 2 and 3 November 2026. According to the IQB, VERA produces no marks and no ranking of schools or Länder.' },
        { kind: 'p', mt: true, html: 'The ministry\'s page on assessment at the Gymnasium explains the newest change. From the school year 2026/27, a central digital test of Grundkompetenzen, the basic skills, is provided for grade 11. Pupils take it in a digital exam environment in the second half of the year, it counts as a small assessment, a kleiner Leistungsnachweis, and in the first step schools may choose whether to take part. The grade 8 and grade 10 Jahrgangsstufentests in maths carry on as before.' },
        { kind: 'p', html: 'The same page also allows modular maths systems, MMS, as a digital aid in assessments from grade 8. For a pupil who learned maths in English with a graphing app, that is good news, but it also means the written working around the tool is what earns the marks. We practise both: using the tool and explaining in words what it showed.' }
      ]
    },
    {
      id: 'types',
      eyebrow: 'School types',
      h2: 'How does maths differ between Mittelschule, Realschule and Gymnasium in Bavaria?',
      lede: 'The topics overlap far more than the school names suggest. What changes is the pace, the exam at the end, and how much written reasoning is expected.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Mittelschule', p: 'Runs to grade 9, or 10 in the M-Zug. The ministry describes a qualifizierender Abschluss for strong results and the option of the mittlerer Schulabschluss in grade 10 through the M-Zug. Maths help here is about secure arithmetic, percentages and everyday modelling.' },
          { h3: 'Realschule', p: 'Ends after grade 10 with the Abschlussprüfung in German, English, maths and the profile subject of the chosen branch. Help focuses on algebra, functions and geometry, and on writing a solution that a marker can follow step by step.' },
          { h3: 'Gymnasium', p: 'Nine years again, with the Oberstufe from grade 11 to 13 and the Abitur after Q13. Maths moves fastest here; the Schulaufgaben, the two Jahrgangsstufentests and the new grade 11 test are where gaps first show.' }
        ] },
        { kind: 'p', mt: true, html: 'Across all three, the KMK\'s national standards set the same big ideas. The standards for the Abitur name five Leitideen, among them Funktionaler Zusammenhang, functions and how one quantity depends on another, and Daten und Zufall, data and chance. The trend-line task further down sits right where those two meet.' },
        { kind: 'table', mt: true, numCols: [], caption: 'German maths words an English-speaking pupil meets first (our list)', head: ['German', 'English', 'Where it usually appears'], rows: [
          ['Dreisatz', 'Rule of three, scaling a ratio', 'Klasse 6 and 7'],
          ['Zuordnung, proportional', 'Direct proportion', 'Klasse 7'],
          ['Term, Gleichung', 'Expression, equation', 'Klasse 7 and 8'],
          ['Gleichungssystem', 'Simultaneous equations', 'Klasse 8 to 9'],
          ['Wahrscheinlichkeit', 'Probability', 'Klasse 7 onward'],
          ['Mittelwert, Median', 'Mean, median', 'Klasse 6 onward'],
          ['Ausgleichsgerade', 'Line of best fit', 'Data work, Oberstufe'],
          ['Ableitung', 'Derivative', 'Grade 11 onward']
        ] },
        { kind: 'source', html: 'The word list and the usual grades are our own teaching notes, not an official syllabus; Bavarian schools set the exact order in their own plans.' },
        { kind: 'p', mt: true, html: 'A pupil who moved to Munich from an English-language school often knows the mathematics and loses marks on the wording. "Begründe" asks for a reason, "berechne" for a calculation, "skizziere" for a sketch, and a correct number without the requested reason earns only part of the marks. Our mentors teach in English and show the German instruction word next to each task, so the pupil learns to read the question the way the teacher wrote it.' }
      ]
    },
    {
      id: 'line',
      tint: 'tint',
      eyebrow: 'A Munich data task',
      h2: 'Is Munich getting warmer? Fitting a trend line by hand',
      lede: 'The Deutscher Wetterdienst publishes one mean temperature per year for its station München-Stadt, from 1955 to 2025, as open data. With it, a pupil in grade 10 or the Oberstufe can do a least-squares regression from the formula, then check the answer against the DWD\'s own figures.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The annual file for station 3379 has 71 years, each with a mean temperature in degrees Celsius; no year is missing. We give the pupil munich_years.csv with three columns: the year, the mean temperature and the year\'s rain.',
            'One warning sits in the metadata, not in the numbers: the station stood at 520 metres until 7 July 1997 and has been at a site at 515 metres since 8 July 1997. A good analysis mentions that, because a move can shift readings a little.'
          ],
          rightH3: 'The method',
          right: [
            'For a line y = mx + c through points (x, y), least squares gives the slope m as the sum of (x minus the mean of x) times (y minus the mean of y), divided by the sum of (x minus the mean of x) squared. The line then passes through the point of means, so c is the mean of y minus m times the mean of x.',
            'Pupils first do it by hand for five years to see how it works, then let Python do all 71.'
          ] },
        { kind: 'code', label: 'Version 1: the least-squares line through 71 years', lang: 'Python', code: TREND, note: 'It prints: <code>Years: 71 from 1955 to 2025</code>, <code>Mean of all years: 9.63 C</code>, <code>Slope: 0.0345 C per year, 0.34 C per decade</code> and <code>Line at 1960: 8.60 C, at 2025: 10.84 C</code>.' },
        { kind: 'p', mt: true, html: 'The slope is about 0.034 degrees a year, so the fitted line rises by roughly 0.34 degrees per decade and by more than two degrees between 1960 and 2025. That is a description of the past 71 years at one station. It is not a forecast: nothing in the method knows about the future, and a pupil who extends the line to 2100 has only drawn a longer ruler.' },
        { kind: 'p', html: 'Version 2 asks the question in another way. Instead of one line, it compares two thirty-year averages, the kind of figure meteorologists call a climate normal.' },
        { kind: 'code', label: 'Version 2: two thirty-year means', lang: 'Python', code: PERIODS, note: 'It prints: <code>1961 to 1990: 9.14 C</code>, <code>1991 to 2020: 10.11 C</code> and <code>Difference: +0.96 C</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Our averages for München-Stadt against the DWD\'s published climate normals', head: ['Period', 'Our mean from the annual file', 'DWD normal for station 3379'], rows: [
          ['1961 to 1990', '9.14 °C', '9.1 °C'],
          ['1991 to 2020', '10.11 °C', '10.1 °C'],
          ['Difference', '+0.96 °C', '+1.0 °C']
        ] },
        { kind: 'source', html: 'Data: Deutscher Wetterdienst, Climate Data Center, annual climate values for station 3379 München-Stadt (1955 to 2025) and the multi-annual means 1961 to 1990 and 1991 to 2020, licence CC BY 4.0, downloaded 3 November 2026. The regression, the period means and the differences are our own calculations. The DWD marks its 1961 to 1990 figure as referred to the current station site.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Klasse 5 and 6.</strong> The means for 2023, 2024 and 2025 were 11.57, 11.58 and 10.66 °C. Find their average. (Answer: 11.27 °C.)',
          '<strong>Klasse 7.</strong> Rain fell from 1,126.8 mm in 2024 to 738.5 mm in 2025. Find the percentage change to one decimal place. (Answer: a fall of 34.5 percent.)',
          '<strong>Klasse 8 to 10.</strong> The line gives 10.84 °C for 2025, the station measured 10.66 °C. Find the residual and say what its sign means. (Answer: minus 0.18; 2025 was a little cooler than the trend.)',
          '<strong>Klasse 10 and Oberstufe.</strong> Our program finds the largest residuals in 1994, 1.41 above the line, and 1996, 1.56 below it. Explain why one cool year next to one warm year does not change the slope much.',
          '<strong>Oberstufe.</strong> Write two sentences for a report: one that the data supports, one that it does not. Use the words Ausgleichsgerade and Prognose correctly.'
        ] },
        { kind: 'source', html: 'Practice set written by Modern Age Coders; the answers come from our own runs on the DWD annual file.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When can a Munich pupil take a maths lesson?',
      lede: 'After the school day and before dinner, or on a quiet Sunday morning, with the mentor in the Indian evening or afternoon.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample Munich lesson times and the mentor\'s time in India', head: ['Munich time', 'India, until 28 March 2027', 'India, from 28 March 2027'], rows: [
          ['16:45', '21:15', '20:15'],
          ['18:15', '22:45', '21:45'],
          ['Sunday 10:15', '14:45', '13:45']
        ] },
        { kind: 'source', html: 'Under the Einheitenzeitgesetz, Germany runs on UTC+1 in winter and UTC+2 in summer. Clocks went back on 25 October 2026 and go forward on 28 March 2027. India stays on UTC+5:30, four and a half hours ahead of Munich in winter, three and a half in summer. Example rows only, not set batch times.' },
        { kind: 'p', mt: true, html: 'Families usually plan the heavier weeks around the Bavarian calendar: Christmas holidays from 24 December 2026 to 8 January 2027, Easter from 22 March to 2 April 2027, and Whitsun from 18 to 28 May 2027, according to the KMK holiday table. Many pupils add a second weekly lesson in the four weeks before a Schulaufgabe or the Realschule final exam.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'How we work',
    h2: 'From a lost mark to a secure method',
    lede: 'Our own sequence for a pupil who comes to us with a weak result, used in every school type.',
    table: { caption: 'Five stages of a tutoring plan (ours)', head: ['Stage', 'What happens', 'How you see it'], rows: [
      ['1. Read the paper', 'We go through the last test with your child, question by question', 'A short list of what went wrong and why'],
      ['2. Fix the base', 'The missing earlier topic is taught again, in English, with the German terms', 'Small checks your child passes'],
      ['3. Write it out', 'Solutions in full sentences and steps, as markers expect', 'Neat worked solutions in the notebook'],
      ['4. Mixed practice', 'Questions in the style of a Schulaufgabe, timed', 'A score your child records'],
      ['5. Explain back', 'Your child teaches one method to the mentor', 'Confidence you can hear']
    ] },
    left: { h3: 'For parents', ps: [
      'We never promise a grade. We show you what changed in your child\'s work, in their notebook, week by week.',
      'The school\'s marks are the ones that count; our job is to make the method secure behind them.'
    ] },
    right: { h3: 'For pupils', ps: [
      'A number on its own is half an answer. Write down how you got there.',
      'If a line fits the points, ask what it does not tell you before you trust it.'
    ] }
  },

  catalogue: {
    eyebrow: 'More maths',
    h2: 'Nine more maths courses for Munich pupils',
    lede: 'All taught live, in English, by a mentor who stays with your child, in a batch or privately.',
    bands: [
      { num: 'I', h3: 'Number sense and contests', sub: 'Klasse 1 to 7', courses: [
        { code: 'ENB / NUM / 01', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Number sense without tricks, for ages 5 to 10.' },
        { code: 'ENB / NUM / 02', slug: 'mathematik-olympiade-and-kaenguru-training-course', title: 'Olympiade and Känguru', blurb: 'Original problems for the German maths contests.' },
        { code: 'ENB / NUM / 03', slug: 'maths-through-coding', title: 'Maths in Python', blurb: 'Patterns and graphs turned into code, from 10.' }
      ] },
      { num: 'II', h3: 'Middle school', sub: 'Klasse 7 to 10', courses: [
        { code: 'ENB / MID / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Terms, equations and linear functions, secured.' },
        { code: 'ENB / MID / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Data, chance and the reasoning behind both.' },
        { code: 'ENB / MID / 03', slug: 'igcse-mathematics-mastery', title: 'IGCSE maths', blurb: 'For Munich pupils on a Cambridge route.' }
      ] },
      { num: 'III', h3: 'Upper school', sub: 'Grade 11 and beyond', courses: [
        { code: 'ENB / UP / 01', slug: 'complete-high-school-mathematics-mastery', title: 'Algebra to calculus', blurb: 'A full upper-school course with derivatives and integrals.' },
        { code: 'ENB / UP / 02', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB Maths AA and AI', blurb: 'For pupils at Munich\'s IB schools, SL and HL.' },
        { code: 'ENB / UP / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad maths', blurb: 'Proof and problem solving for strong pupils.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'What maths lessons look like for a Munich pupil',
    lede: 'Two live lessons a week with one mentor, built around what is due at school next. Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Late afternoons', l: 'After the school day, from about 16:45 Munich time.' },
      { time: 'Sundays', l: 'A quiet morning slot before the school week.' },
      { time: '1-on-1', l: 'Times agreed around Schulaufgaben and exams.' }
    ],
    cells: [
      { h3: 'One mentor', p: 'The same tutor follows your child through the year.' },
      { h3: 'English, with German terms', p: 'Explained in English, labelled in German.' },
      { h3: 'Written working', p: 'Every answer comes with its steps.' },
      { h3: 'School first', p: 'We start from the next test, not from a fixed book.' },
      { h3: 'Short reports', p: 'What was covered and what to practise.' },
      { h3: 'Batch or private', p: 'Fifteen to twenty pupils, or one to one.' }
    ]
  },

  projectsH2: 'Projects from our students',
  projectsLede: 'Maths and code meet in many of our students\' projects. A few are below; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'Reviews left on Google by parents and students, unedited.',

  fees: {
    h2: 'Maths tutoring fees for Munich families',
    lede: 'A monthly fee for eight live lessons. The page displays it in euro, worked out at the European Central Bank reference rate; your card is charged in US dollars and your bank converts it, so the booked amount can differ slightly.',
    free: ['A free first lesson', 'A short look at the last test or homework', 'No card needed'],
    group: ['Fifteen to twenty pupils at a similar level', 'One regular mentor', 'Two lessons a week', 'Monthly, stop when you like'],
    one: ['Your child and one mentor', 'Planned around the next Schulaufgabe', 'Times that fit your week']
  },

  faq: {
    eyebrow: 'Munich families ask',
    h2: 'Maths tutoring in Munich in English: common questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. Every lesson is live and in English only. The mentor adapts to your child\'s pace and accent and writes the German maths terms next to the English ones, so your child can read the Schulaufgabe in German and still follow the explanation in English.' },
      { q: 'Can you help with the Übertritt in Klasse 4?', a: 'We help with the maths behind it: place value, the four operations, measuring and word problems. The Übertrittszeugnis itself is based on the school\'s marks in German, maths and Heimat- und Sachunterricht, so we work alongside the class teacher, never instead of the school.' },
      { q: 'Do you prepare for the Realschule final exam in maths?', a: 'Yes. The Bavarian Realschule ends after grade 10 with an Abschlussprüfung in German, English, maths and the profile subject. We cover the maths with practice questions we write ourselves, timed, and we teach how to set out each step.' },
      { q: 'What is the new grade 11 test at the Gymnasium?', a: 'From 2026/27 the Bavarian ministry provides a central digital test of basic skills in maths for grade 11. It is taken in the second half-year in a digital exam environment and counts as a small assessment; at first, schools may choose whether to use it.' },
      { q: 'Can you help with the Abitur in Bavaria?', a: 'Yes, alongside school. The Bavarian Abitur has three written and two oral exams across five subjects, after Q12 and Q13. We teach Analysis, Geometrie and Stochastik in English. The school course and the exam are what count; we do not award grades.' },
      { q: 'My child is at an international school in Munich. Can you help?', a: 'Yes. The international schools near Munich listed by the AGIS teach IB programmes, and we run separate courses for IB and IGCSE maths. The mentor first checks which programme and level your child follows, then plans from their next assessment.' },
      { q: 'When are lessons in Munich time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Most Munich pupils pick a slot between about 16:45 and 19:00, or a Sunday morning.' },
      { q: 'Who are the tutors?', a: 'Our mentors are based in India and teach live over video in English. Your child keeps the same mentor, who learns where they tend to slip and how they like to work.' },
      { q: 'How big are the groups?', a: 'A batch has fifteen to twenty pupils at a similar level. For exam preparation or a large gap, most Munich families choose one to one, with two private lessons a week.' },
      { q: 'How are fees paid?', a: 'Monthly. We show the fee in euro at the European Central Bank reference rate; the payment is made in US dollars and your bank converts it, so the amount on your statement may differ a little. The first lesson is free and needs no card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Further reading on maths at German schools.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Our hub for families in Germany.' },
      { href: '/online-math-tutor-germany', label: 'Online maths tutor in Germany', p: 'Checkpoints in every Land, not just Bavaria.' },
      { href: '/abitur-maths-in-english', label: 'Abitur maths in English', p: 'How the written Abitur in maths is built.' },
      { href: '/german-school-system-maths-and-computing-explained', label: 'German school system explained', p: 'School types and stages, in English.' },
      { href: '/kangaroo-math-germany-practice', label: 'Känguru practice', p: 'The April 2027 contest, with problems of our own.' },
      { href: '/math-tutor-cost-germany', label: 'Maths tutor cost in Germany', p: 'What shapes the price of tutoring.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Bring a recent Schulaufgabe, a homework sheet or simply a topic that feels shaky. The mentor works through it with your child, sees where the difficulty really starts, and proposes a plan.',
    readFirst: 'To read more first, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains our lessons and <a class="ag-inline-link" href="/courses">all courses</a> lists every syllabus.',
    note: 'Lessons are live online with mentors in India, in English only. Write to us on WhatsApp, in English, with any question.',
    formNote: 'Free, with no card and no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Maths in Germany', links: [
        { href: '/online-math-tutor-germany', label: 'Online maths tutor' },
        { href: '/abitur-maths-in-english', label: 'Abitur maths in English' },
        { href: '/kangaroo-math-germany-practice', label: 'Känguru practice' },
        { href: '/math-olympiad-germany-preparation', label: 'Mathematik-Olympiade' }
      ] },
      { h4: 'Munich and more', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-for-international-school-students-germany', label: 'International school pupils' },
        { href: '/german-school-system-maths-and-computing-explained', label: 'German school system' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'A trend line describes, it does not predict'
  },

  personalityCss: `
.ag-root.ag-enb .ag-hero h1 { letter-spacing: -0.008em; }
.ag-root.ag-enb .ag-capsule { border-left-width: 6px; border-radius: 1px; }
.ag-root.ag-enb .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-enb .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-enb .ag-code-head b { letter-spacing: 0.015em; }
`,

  dossier: {
    curriculumAuthority: 'Bayerisches Staatsministerium für Unterricht und Kultus (Grundschule, Mittelschule, Realschule, Gymnasium, Prüfungskultur am Gymnasium); IQB, VERA-3 and VERA-8; KMK Bildungsstandards Mathematik for the Allgemeine Hochschulreife; KMK Ferien 2026/2027; Einheitenzeitgesetz; Deutscher Wetterdienst, Climate Data Center, station 3379, CC BY 4.0; all read 2 and 3 November 2026.',
    localProject: 'A least-squares line through the DWD annual mean temperatures of München-Stadt, 1955 to 2025 (71 years): slope 0.0345 C per year, line 8.60 C at 1960 and 10.84 C at 2025; two thirty-year means 9.14 and 10.11 C checked against the DWD normals 9.1 and 10.1; a five-question practice set by Klasse with answers (11.27; minus 34.5 percent; residual minus 0.18; 1994 and 1996). Lesson family: a least-squares trend line, and why a trend is not a forecast.',
    requiredMentions: ['munich_years.csv', 'Slope: 0.0345 C per year, 0.34 C per decade', 'Line at 1960: 8.60 C, at 2025: 10.84 C', '1991 to 2020: 10.11 C', 'Difference: +0.96 C', 'Central digital test of basic skills', 'Ausgleichsgerade', 'A trend line describes, it does not predict'],
    sources: [
      { claim: 'New central digital maths test for grade 11 from 2026/27; Jahrgangsstufentests in grades 8 and 10; MMS from grade 8; three Schulaufgaben.', url: 'https://www.km.bayern.de/unterrichten/unterrichtsalltag/pruefungskultur/gymnasium' },
      { claim: 'Übertrittszeugnis in early May of Klasse 4.', url: 'https://www.km.bayern.de/lernen/schularten/grundschule' },
      { claim: 'Realschule Abschlussprüfung in German, English, maths and the profile subject.', url: 'https://www.km.bayern.de/lernen/schularten/realschule' },
      { claim: 'Bavarian Abitur: three written and two oral exams; Q12 and Q13.', url: 'https://www.km.bayern.de/lernen/schularten/gymnasium' },
      { claim: 'VERA-3 and VERA-8 test windows 2027; not graded.', url: 'https://www.iqb.hu-berlin.de/de/schule/sekundarstufe-i/vera/' },
      { claim: 'DWD annual climate values and normals for station 3379, CC BY 4.0.', url: 'https://opendata.dwd.de/climate_environment/CDC/observations_germany/climate/annual/kl/historical/' }
    ],
    rejectedClaims: [
      'A prediction of Munich temperatures for any future year: the page says a trend is not a forecast.',
      'Any reason for the residuals of 1994 and 1996: the data does not say, so none given.',
      'Grade or exam-result promises: none made; the school\'s marks count.',
      'Naming Munich international schools as sources of students: refused.',
      'Any affiliation with the Bavarian ministry, the IQB, the KMK or the DWD: none.'
    ]
  }
};
