'use strict';
// Maths tutor cost in Germany (ag- pillar, Germany cluster row DE011, hub group 'guide').
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md section 6. Owner 2026-11-02: classes are live, in English
// only, with mentors who match the learner's pace and accent; pages show euro, checkout charges USD.
// Angle: a maths tutoring cost explainer with no market or competitor price figures (no official source publishes a
// tutoring price level, so marketPrices is off). What decides the cost of maths help in Germany; the official tests
// and exams that create the need, with their 2026/27 dates (VERA-3, VERA-8, ZP10 in NRW, MSA in Berlin, Abitur in NRW);
// how many weeks of tutoring are really left before an exam once the Land's holidays are taken out, and so how many
// months a family is paying for; how our maths fee works (priceSubject 'maths', data-price anchors only).
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/math-tutor-cost-germany/):
//  - NRW Standardsicherung, "Zentrale Prüfungen 10 - Termine 2027" (zp10-termine-2027.html/.txt, fetched 3 Nov 2026):
//    "Hauptschule, Realschule, Gesamtschule, Sekundarschule, Primusschule, Gymnasium mit einer Klasse 10 (SI), ...
//    Schriftliche Prüfungen Haupttermin Nachschreibtermin Deutsch Dienstag, 11. Mai 2027 Dienstag, 25. Mai 2027 Englisch
//    Donnerstag, 13. Mai 2027 Dienstag, 01. Juni 2027 Mathematik Donnerstag, 20. Mai 2027 Donnerstag, 03. Juni 2027".
//  - NRW ZP10 page (facts-school src/nrw-zp10b/): "Ab sofort stehen die Prüfungsaufgaben der ZP10-Prüfungen 2026 in den
//    Fächern Deutsch, Mathematik und Englisch zum Download bereit. (Login erforderlich!)".
//  - NRW Zentralabitur 2027 (facts 42, 44): Mathematik LK and GK Wednesday 5 May 2027; main dates 13 April to 5 May.
//  - IQB VERA-3 (facts 108 to 112): compulsory yearly in grade 3; "VERA-3 2027: 12.04. bis 26.05.2027"; also called
//    KERMIT, Kompetenztests, Lernstandserhebungen. IQB VERA-8 (113 to 115): grade 8, "VERA-8 2027: 08.02. bis
//    25.03.2027". IQB VERA/BiSta (116, 117): "Rankings zwischen Schulen oder Ländern werden nicht vorgenommen und die
//    Ergebnisse werden auch nicht benotet."; measures standards for grade 4 and 9 a year early.
//  - KMK Bildungsstandards Mathematik: binding targets in all Länder (121); one ESA and MSA document since 2022 (122).
//  - Berlin Senatsverwaltung (fact 66): MSA reached after Klasse 10.
//  - IQB pool: Leistungskurs 300 minutes, Grundkurs 255 minutes (36, 38).
//  - KMK Ferien 2026/27 (fact 275): NRW "17.10. - 31.10. 23.12. - 06.01. -- 22.03. - 03.04. 18.05. 19.07. - 31.08.".
//  - ECB reference rates page (copied from the coding cost page's raw file): "published for information purposes only".
//  - Our own terms: 2.5 percent payment gateway charge at checkout (src/js/course-payment.js, owner 2026-10-23).
// Our own calculations (scratchpad de/w/G2/mtu/v1.py, v2.py, v3.py, v2abi.py, python3 -I): v1 prints "Weeks until the
// exam: 27" (192 days // 7); v2 prints "Calendar weeks before the exam: 28", "Weeks with no school day: 3", "Weeks left
// for tutoring: 25"; v3 prints "Classes at two a week: 50" and "Months of eight classes: 6.25"; the same program to the
// NRW maths Abitur on 5 May 2027 prints 26, 3 and 23.
// Lesson family: plan back from a fixed date and subtract the gaps (set difference on dates).

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'from datetime import date',
  '',
  'start = date(2026, 11, 9)    # first tutoring week',
  'exam = date(2027, 5, 20)     # ZP10 Mathematik, Nordrhein-Westfalen',
  '',
  'weeks = (exam - start).days // 7',
  'print("Weeks until the exam:", weeks)'
].join('\n');

const V2 = [
  'from datetime import date, timedelta',
  '',
  'start = date(2026, 11, 9)',
  'exam = date(2027, 5, 20)',
  'ferien = [(date(2026, 12, 23), date(2027, 1, 6)),   # Weihnachtsferien NRW',
  '          (date(2027, 3, 22), date(2027, 4, 3)),    # Osterferien NRW',
  '          (date(2027, 5, 18), date(2027, 5, 18))]   # Pfingstferien NRW',
  '',
  'def days(first, last):',
  '    return {first + timedelta(n) for n in range((last - first).days + 1)}',
  '',
  'schooldays = {d for d in days(start, exam - timedelta(1)) if d.weekday() < 5}',
  'for first, last in ferien:',
  '    schooldays -= days(first, last)',
  '',
  'weeks = {d.isocalendar()[:2] for d in days(start, exam - timedelta(1))}',
  'open_weeks = {d.isocalendar()[:2] for d in schooldays}',
  'print("Calendar weeks before the exam:", len(weeks))',
  'print("Weeks with no school day:", len(weeks - open_weeks))',
  'print("Weeks left for tutoring:", len(open_weeks))'
].join('\n');

const V3 = [
  'classes = 2 * len(open_weeks)',
  'print("Classes at two a week:", classes)',
  'print("Months of eight classes:", classes / 8)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'guide', label: 'What a maths tutor costs' },
  slug: 'math-tutor-cost-germany',
  code: 'mtu',
  accent: '#4E477E',
  accentRationale: 'Maths tutoring cost: a muted indigo #4E477E, the blue-violet of a squared exercise book, distinct from the Abitur slate, the cost-page teal and the hub fir green; contrast on the paper #FBF8F2 above 7:1 and above 4.5 on every paper tint',
  pageType: 'market',
  priceSubject: 'maths',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Maths tutor cost in Germany',
  title: 'Maths Tutor Cost in Germany: What Drives the Price',
  description: 'What a maths tutor costs in Germany and why: level, exam dates, weeks left, one to one or group, online or at home, how our monthly fee works, and what to ask.',
  ogDescription: 'The things that decide what maths tutoring costs a family in Germany, the official tests and exam dates of 2026/27 that create the need, a Python plan of the weeks really left before the ZP10, and how our monthly fee works.',
  twitterDescription: 'What maths tutoring costs a family in Germany, what drives the price, and how many weeks you really have before the exam.',
  pageName: 'Maths Tutor Cost in Germany',
  webPageDescription: 'A cost explainer for families in Germany looking for a maths tutor: the price drivers, the official tests and exams of 2026/27 (VERA-3, VERA-8, ZP10 in NRW, the Berlin MSA, the NRW Abitur), an original Python project that counts the tutoring weeks left before the ZP10 once the NRW holidays are removed, and how our monthly maths fee is shown in euro and charged in US dollars. No market or competitor prices.',
  courseDescription: 'Live online maths tutoring in English for pupils in Germany from Grundschule to Abitur: number sense, algebra, geometry, functions, stochastics and exam practice, eight live classes a month in a group of fifteen to twenty or one to one, with a free first class.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Maths tutor cost',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#drivers', label: 'Drivers' },
    { href: '#exams', label: 'Exams' },
    { href: '#weeks', label: 'Weeks' },
    { href: '#ours', label: 'Fee' }
  ],
  eyebrow: 'Germany &middot; Maths tutoring &middot; Cost explained',
  h1: 'What a maths tutor costs in Germany, and why',
  lede: 'Most families start looking for maths help when something has gone wrong: a Klassenarbeit, a worrying report, an exam that is suddenly close. That is also when it is hardest to judge what a tutor\'s price buys. This page sets out what makes maths tutoring cost more or less, which official tests and exams in Germany actually matter and when they are in 2026/27, how many weeks of help are really left before an exam, and how our own monthly fee works.',
  secondaryCta: { href: '#drivers', label: 'What drives the price' },
  wa: 'Hello Modern Age Coders, my child is at school in Germany and needs help in maths. Could we book a free first class in English and hear about your fees?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; maths fees shown in euro, charged in US dollars',
  spec: [
    ['Our fee', 'Monthly, eight live classes'],
    ['Levels', 'Grundschule to Abitur'],
    ['Formats', 'Group of 15 to 20, or one to one'],
    ['Shown in', 'Euro, ECB reference rate'],
    ['Market prices', 'Not quoted on this page'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'The cost of a maths tutor in Germany depends on the level (Grundschule, Klasse 5 to 10 or Oberstufe), one to one or group, how many months remain before an exam such as the ZP10 or the Abitur, and how often lessons run. Modern Age Coders tutors maths live online in English, in a group or one to one, for one monthly fee covering eight classes; that fee is displayed in euro further down and billed in US dollars.',

  picks: {
    eyebrow: 'Maths courses on the monthly fee',
    h2: 'Three maths courses for three stages of German school',
    lede: 'The same monthly fee at every level. What changes is the maths, and how close the next exam is.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'MTU / 01', title: 'Primary maths', note: 'Grades 1 to 5, roughly ages 6 to 11. Number sense, the four operations, measuring and shapes: the ground that VERA-3 checks in Klasse 3.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'MTU / 02', title: 'Middle school maths', note: 'Grades 6 to 8. Fractions, percentages, equations and geometry, the years in which gaps open quietly and VERA-8 takes a first look in Klasse 8.' },
      { course: 'abitur-mathematics-course-in-english', code: 'MTU / 03', title: 'Abitur Mathematik in English', note: 'Ages 16 to 19, Leistungskurs or Grundkurs. Analysis, geometry and stochastics with timed practice for the 300 or 255 minute pool exam.' }
    ]
  },

  sections: [
    {
      id: 'drivers',
      eyebrow: 'Price drivers',
      h2: 'Why does one maths tutor in Germany cost more than another?',
      lede: 'Tutoring prices in Germany are not collected in any official statistic we could find, and this page never prints what other tutors or companies charge. What it can show is which choices push any price up or down, ours included.',
      body: [
        { kind: 'table', numCols: [], caption: 'What changes the cost of maths tutoring, and what to check (our analysis)', head: ['Driver', 'Why it moves the cost', 'What to check'], rows: [
          ['One to one or group', 'The tutor\'s hour is shared, or it is all yours', 'How many pupils, and whether they are at the same level'],
          ['Level', 'Oberstufe and Leistungskurs maths need a tutor who knows that maths well', 'Has the tutor taught this Klasse and this exam?'],
          ['Time before an exam', 'Few weeks means more lessons per week, or less covered', 'How many teaching weeks are really left (see below)'],
          ['Frequency and length', 'Two hours a week costs more than one, and achieves more', 'Live minutes per month, not the number of sessions'],
          ['At home, centre or online', 'Travel time costs someone, the tutor or the family', 'Who travels, and is travel time charged?'],
          ['Continuity', 'A tutor who stays learns where the pupil goes wrong', 'Will it be the same person every week?'],
          ['Terms', 'Packages, fixed terms or monthly plans', 'Notice period, and what happens to unused lessons']
        ] },
        { kind: 'source', html: 'Table: our own analysis of maths tutoring. Without an official source for tutoring prices, the page gives no market figures.' },
        { kind: 'two', mt: true,
          leftH3: 'The comparison that works',
          left: [
            'Work out what each offer charges for sixty minutes of live time with the tutor, then ask how many pupils share those minutes. A cheap hour shared with nine others and a dear hour alone can be equally good value; they buy different things.',
            'Add travel. An hour at home with a tutor who drives forty minutes each way is rarely priced as one hour of work, and an hour at a centre costs the family a journey too.'
          ],
          rightH3: 'The comparison that misleads',
          right: [
            'Comparing package prices without counting the hours, or the cost of a first month without the notice period. A package of twenty lessons bought in March is worth less than it looks if the exam is in May and half of April is Osterferien.',
            'Comparing grades promised. No honest tutor can promise a mark, and we do not.'
          ] }
      ]
    },
    {
      id: 'exams',
      eyebrow: 'Official dates 2026/27',
      h2: 'Which maths tests and exams in Germany are worth paying a tutor for?',
      lede: 'Not all of them. Germany has comparison tests that carry no mark at all, and leaving exams that count for a certificate. Knowing which is which saves money.',
      body: [
        { kind: 'table', numCols: [], caption: 'Maths tests and exams in the 2026/27 school year, with the dates the official sources give', head: ['Test or exam', 'Klasse', 'Date', 'Does it count?'], rows: [
          ['VERA-3', '3', 'Test window 12 April to 26 May 2027', 'No: not graded, no school or Land rankings'],
          ['VERA-8', '8', 'Test window 8 February to 25 March 2027', 'No: not graded, no school or Land rankings'],
          ['ZP10 Mathematik, Nordrhein-Westfalen', '10', 'Thursday 20 May 2027; resit date Thursday 3 June 2027', 'Yes: part of the Klasse 10 leaving certificate'],
          ['Mittlerer Schulabschluss, Berlin', '10', 'Set in the Land\'s exam plan', 'Yes: the MSA is reached after Klasse 10'],
          ['Abitur Mathematik, Nordrhein-Westfalen', 'Q2', 'Wednesday 5 May 2027, Leistungskurs and Grundkurs', 'Yes: a written Abitur exam']
        ] },
        { kind: 'source', html: 'Sources, read 2 and 3 November 2026: IQB, VERA-3 and VERA-8 pages and the VERA page of its Bildungsstandards section; Ministerium für Schule und Bildung NRW, Standardsicherung, Zentrale Prüfungen 10, Termine 2027 (Hauptschule, Realschule, Gesamtschule, Sekundarschule, Primusschule, Gymnasium with a Klasse 10 and other school types), and Zentralabitur 2027; Senatsverwaltung für Bildung Berlin, Prüfungen und Abschlüsse. Other Länder set their own Klasse 10 and Abitur dates.' },
        { kind: 'two', mt: true,
          leftH3: 'VERA: a check-up, not an exam',
          left: [
            'VERA-3 and VERA-8 are compulsory comparison tests, run every year in every Land, sometimes under other names such as KERMIT or Lernstandserhebungen. The IQB, which develops them, states that the results are not graded and that no rankings between schools or Länder are made.',
            'They measure, a year early, how far a class has come towards the KMK standards for Klasse 4 and Klasse 9. That makes a VERA result useful information for a family. It is not a reason to pay for weeks of test practice.'
          ],
          rightH3: 'Where tutoring pays',
          right: [
            'Klasse 10 exams such as the ZP10 in Nordrhein-Westfalen count towards a leaving certificate, and the written Abitur counts towards the final grade. The KMK\'s maths standards for the Erster and Mittlerer Schulabschluss have been one combined document since 2022, binding in all Länder, so the content is broadly shared even when the papers differ.',
            'The longer the gap that has opened, the earlier help should start. A pupil who has struggled with fractions since Klasse 6 needs months, not a fortnight before the ZP10.'
          ] },
        { kind: 'p', mt: true, html: 'We teach alongside school. We do not set or mark German exams and we award no German qualification; the school course and the Land\'s exam are the ones that count. Past ZP10 papers are published by the NRW ministry for schools (a login is required), and the IQB publishes past Abitur pool tasks, so pupils can practise on the real thing through their school.' }
      ]
    },
    {
      id: 'weeks',
      tint: 'tint',
      eyebrow: 'A planning project',
      h2: 'How many weeks of maths tutoring are left before the exam?',
      lede: 'This decides how many months a family pays for, and the first answer most people give is too high. Our students check it in Python for a Klasse 10 pupil in Nordrhein-Westfalen who starts on Monday 9 November 2026.',
      body: [
        { kind: 'two',
          leftH3: 'The plan',
          left: [
            'The ZP10 maths paper in Nordrhein-Westfalen is on Thursday 20 May 2027. Tutoring starts on Monday 9 November 2026. How many weeks of help are there?',
            'The quick answer divides the days by seven.'
          ],
          rightH3: 'What the quick answer forgets',
          right: [
            'School holidays. The KMK table for 2026/27 gives Nordrhein-Westfalen Christmas holidays from 23 December 2026 to 6 January 2027, Easter holidays from 22 March to 3 April 2027, and a free day on 18 May 2027, two days before the exam.',
            'Many families travel or rest in those weeks, and planning as if they were teaching weeks overstates the time left.'
          ] },
        { kind: 'code', label: 'Version 1: divide by seven', lang: 'Python', code: V1, note: 'It prints <code>Weeks until the exam: 27</code>.' },
        { kind: 'p', mt: true, html: 'Twenty-seven weeks sounds comfortable. But 192 days divided by 7 is 27.4, and the floor division quietly drops the part-week before the exam, while every holiday week is still counted as a week of work. Version 2 treats the time as a set of days. It builds the set of school weekdays before the exam, subtracts the set of holiday days for each break, and then asks which calendar weeks still contain at least one school day.' },
        { kind: 'code', label: 'Version 2: subtract the holidays', lang: 'Python', code: V2, note: 'It prints <code>Calendar weeks before the exam: 28</code>, <code>Weeks with no school day: 3</code> and <code>Weeks left for tutoring: 25</code>.' },
        { kind: 'code', label: 'Going further: from weeks to months', lang: 'Python', code: V3, note: 'It prints <code>Classes at two a week: 50</code> and <code>Months of eight classes: 6.25</code>.' },
        { kind: 'p', mt: true, html: 'Three whole weeks have no school day at all: the week after Christmas and both weeks of Osterferien. That leaves 25 weeks, or 50 classes at two a week, which is just over six months of a plan with eight classes a month. Run with the NRW maths Abitur date, Wednesday 5 May 2027, the same program prints 26 calendar weeks, 3 without a school day and 23 left. For a family the useful number is the last one: it tells you how many months of help you are really buying and when they need to start.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 10 to 12, with a calendar.</strong> Count the Mondays from 9 November 2026 to 17 May 2027, then cross out those that fall in your Land\'s holidays.',
          '<strong>Ages 13 to 15, Python.</strong> Run Version 1 and Version 2 and explain the difference between 27 and 28 in one sentence.',
          '<strong>Ages 15 and up.</strong> Change the holiday list to your own Land\'s dates from the KMK table and your own exam date. How many weeks are left for you?'
        ] },
        { kind: 'source', html: 'The programs and their output are our work, run with Python 3 on 3 November 2026. Exam dates: NRW ministry (ZP10 and Abitur 2027); holiday dates: KMK, Ferien 2026/2027.' }
      ]
    },
    {
      id: 'ours',
      eyebrow: 'Our fee',
      h2: 'How does the Modern Age Coders maths fee work in Germany?',
      lede: 'Eight live maths hours a month for a single monthly fee, with a group or alone. You will find the euro figures lower down, in the fees block.',
      body: [
        { kind: 'three', cells: [
          { h3: 'What it buys', p: 'Eight live hours a month with one regular mentor, in English, at the pupil\'s level, with practice tasks written by us and short written notes on progress.' },
          { h3: 'Group or alone', p: 'Either fifteen to twenty pupils working at the same stage, or a single pupil, which is dearer because the mentor gives that pupil the full hour.' },
          { h3: 'What it does not buy', p: 'A grade, a pass or a place. We do not promise marks, and the school and the Land\'s exam decide the result.' }
        ] },
        { kind: 'table', mt: true, numCols: [], caption: 'From the first class to the monthly payment', head: ['Step', 'What to expect'], rows: [
          ['Free first class', 'A short check at the pupil\'s level, no card'],
          ['Optional priority demo', 'A full paid class, sooner; enrol afterwards and we deduct what you paid for it from month one'],
          ['Monthly fee', 'Displayed in euro, charged in US dollars'],
          ['Checkout', 'A payment gateway charge of 2.5 percent appears on a separate line, and you see it before approving'],
          ['Statement', 'Your bank\'s conversion into euro, which can differ slightly'],
          ['Stopping', 'Monthly plans; our refund page has the rules']
        ] },
        { kind: 'source', html: 'Our own terms; the <a class="ag-inline-link" href="/refund">refund page</a> decides if anything here reads differently. The euro amounts use the European Central Bank reference rate, which the ECB itself publishes for information purposes only, so a bank\'s rate on the day of payment will not match it exactly.' }
      ]
    },
    {
      id: 'format',
      eyebrow: 'Formats',
      h2: 'One to one or a group: which is better value for maths?',
      lede: 'It depends on what the pupil needs, not on the price alone. Both formats are live, with the same mentor every week.',
      body: [
        { kind: 'two',
          leftH3: 'When one to one is worth it',
          left: [
            'A pupil with a specific gap, for example negative numbers or fractions, who loses confidence in front of others. A pupil in the last months before the ZP10 or the Abitur who needs exam papers marked and talked through. An Oberstufe pupil whose Leistungskurs moves faster than any group could.',
            'In one to one the mentor can stop at the exact step that went wrong and stay there until it is secure.'
          ],
          rightH3: 'When a group works better',
          right: [
            'A pupil who is broadly on track and wants steady practice, or one who learns by hearing how others solve the same problem. Groups are placed by level, so a pupil is not pulled along faster or held back for long.',
            'In a group the pupil explains a method aloud to others, which is one of the surest ways to find out whether they really understand it.'
          ] },
        { kind: 'p', mt: true, html: 'Families can start in one format and change. A common pattern is a group through most of the year and a few months of one to one before the exam. Every class is taught in English; mentors give the German term beside every idea, Bruch beside fraction, Ableitung beside derivative, because school papers in Germany use German words.' }
      ]
    },
    {
      id: 'online',
      eyebrow: 'Online or at home',
      h2: 'Is online maths tutoring cheaper than a tutor at home?',
      lede: 'Often, because nobody travels. But the real question is whether the pupil learns as well online, and that depends on how the lesson is run.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Travel', p: 'At home, someone pays for the tutor\'s journey, in the price or in fewer tutors to choose from. Online, the hour is all teaching.' },
          { h3: 'Writing', p: 'Maths needs writing. A good online lesson uses a shared whiteboard or a camera on the pupil\'s paper, so the mentor sees every line of working.' },
          { h3: 'Choice', p: 'Online, a family is not limited to the tutors who live nearby, which matters for English-speaking families and for Oberstufe maths.' }
        ] },
        { kind: 'p', mt: true, html: 'Our classes are online only, live, and in English. We are a good fit for families who want that, and not for a child who needs a German-speaking tutor at the kitchen table. The trial class is the honest way to find out which kind of child yours is.' }
      ]
    },
    {
      id: 'ask',
      eyebrow: 'Before you pay',
      h2: 'What should you ask any maths tutor about cost?',
      lede: 'Seven questions to put to any tutor or tutoring company, us included. Ask in writing and keep the answers next to the price.',
      body: [
        { kind: 'ol', items: [
          '<strong>How many live minutes with the tutor does the fee buy each month?</strong>',
          '<strong>Will my child have the same tutor every week?</strong>',
          '<strong>Has the tutor taught this Klasse and this exam, in my Land?</strong> ZP10, MSA and Abitur papers differ between Länder.',
          '<strong>How many pupils share the lesson, and are they at the same level?</strong>',
          '<strong>What happens in the school holidays, and when a lesson is missed?</strong>',
          '<strong>Is anything added at checkout, and in which currency is the charge made?</strong>',
          '<strong>How do we stop, and how much notice is needed?</strong>'
        ] },
        { kind: 'p', mt: true, html: 'How we answer them ourselves: 480 live minutes a month; the same mentor each week; Klasse, Land and exam checked during the free first class; a group of fifteen to twenty at one level, or a single pupil; Ferien and missed lessons agreed with the mentor in advance; billing in US dollars, plus the 2.5 percent gateway line at checkout; a plan that runs month by month, under the rules of our refund page.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'When to start',
    h2: 'How early to start maths help before each exam',
    lede: 'Our own rule of thumb, based on the teaching weeks the Python project counts and on how long gaps in maths take to close.',
    table: { caption: 'Suggested start points before exams that count (ours)', head: ['Situation', 'Start', 'Why'], rows: [
      ['On track, wants practice for the ZP10 or MSA', 'January of Klasse 10', 'About four months of teaching weeks remain after Christmas'],
      ['Gaps from earlier years', 'Autumn of Klasse 9 or 10', 'Old gaps take months to close'],
      ['Abitur, Leistungskurs', 'The start of Q1 or earlier', 'Analysis, geometry and stochastics are all examined'],
      ['Abitur, short revision', 'November of Q2', 'In NRW about 23 teaching weeks remain before 5 May 2027'],
      ['After a weak VERA result', 'No rush', 'VERA is not graded; use it to plan, not to panic']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask how many teaching weeks are left before you ask about price. The number of months is what you are paying for.',
      'A VERA result is information. A ZP10 or Abitur date is a deadline. Spend accordingly.'
    ] },
    right: { h3: 'For pupils', ps: [
      'Count your own weeks with your Land\'s holidays taken out. It is usually fewer than you think.',
      'Bring the Klassenarbeit you found hardest to the first class. It shows the mentor where to begin.'
    ] }
  },

  catalogue: {
    eyebrow: 'More maths',
    h2: 'Nine more maths courses on the monthly maths fee',
    lede: 'Taught live in English with a regular mentor, in a group or one to one, like every course here.',
    bands: [
      { num: 'I', h3: 'Foundations', sub: 'Ages 5 to 12', courses: [
        { code: 'MTU / BASE / 01', slug: 'early-math-foundations', title: 'Early maths', blurb: 'Counting, shapes and patterns for the youngest.' },
        { code: 'MTU / BASE / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Number sense without tricks.' },
        { code: 'MTU / BASE / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Functions and data explored in Python.' }
      ] },
      { num: 'II', h3: 'Klasse 7 to 10', sub: 'Ages 12 to 16', courses: [
        { code: 'MTU / MID / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Equations and expressions made secure.' },
        { code: 'MTU / MID / 02', slug: 'igcse-mathematics-mastery', title: 'IGCSE maths', blurb: 'For pupils at international schools.' },
        { code: 'MTU / MID / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Data and chance, step by step.' }
      ] },
      { num: 'III', h3: 'Oberstufe and beyond', sub: 'Ages 15 to 19', courses: [
        { code: 'MTU / UPPER / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High school maths', blurb: 'Algebra to calculus, grade 9 to 12 level.' },
        { code: 'MTU / UPPER / 02', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB maths', blurb: 'AA and AI at SL and HL.' },
        { code: 'MTU / UPPER / 03', slug: 'mathematik-olympiade-and-kaenguru-training-course', title: 'Olympiade and Känguru', blurb: 'Problem solving beyond the syllabus.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live maths tutoring runs from Germany',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Eight live maths hours a month, agreed in German time, with the same mentor.',
    slots: [
      { time: 'After school', l: 'Weekday afternoons in German time.' },
      { time: 'Weekends', l: 'Saturday or Sunday mornings, good for timed papers.' },
      { time: 'Before exams', l: 'Extra one-to-one hours in the last weeks.' }
    ],
    cells: [
      { h3: 'Working shown', p: 'Every line of working on a shared board.' },
      { h3: 'German terms', p: 'Taught in English, school words in German.' },
      { h3: 'Your Land', p: 'Its exams, its dates, its holidays.' },
      { h3: 'Same mentor', p: 'One person all year.' },
      { h3: 'Short reports', p: 'What is secure, what still slips.' },
      { h3: 'Monthly', p: 'No long fixed term.' }
    ]
  },

  projectsH2: 'Beyond maths: what our students build',
  projectsLede: 'Many of our maths pupils also code. A few student projects are below; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'Google reviews from families and pupils, in their own words.',

  fees: {
    h2: 'Our maths tutoring fees in Germany',
    lede: 'One monthly fee buys eight live maths classes. You see it in euro, converted at the European Central Bank reference rate; the charge itself goes through in US dollars, and because your bank converts it, the euro amount on your statement may be slightly different.',
    free: ['A free first class with a short level check', 'A suggested plan to your exam date', 'No card needed'],
    group: ['Fifteen to twenty pupils at a similar level', 'One regular mentor', 'Two live classes a week', 'Monthly, stop in any month'],
    one: ['Your child and one mentor', 'Their gaps first, at their pace', 'Extra hours before the exam if wanted']
  },

  faq: {
    eyebrow: 'Families in Germany ask',
    h2: 'Maths tutor costs in Germany: common questions',
    items: [
      { q: 'How much does a maths tutor cost in Germany?', a: 'It depends on the level, one to one or group, how often lessons run, whether anyone travels and how many months remain before the exam. Our own fee is one monthly amount for eight live maths classes, shown in euro on this page. We do not quote other tutors\' prices.' },
      { q: 'Is one-to-one maths tutoring more expensive than a group?', a: 'Yes, because the mentor\'s whole hour goes to one pupil. Our groups have fifteen to twenty pupils placed by level. Both monthly amounts are shown in the fees section of this page.' },
      { q: 'Are the maths classes in German?', a: 'No. Our classes are live and taught in English only, by mentors who match the pupil\'s pace and accent. Mentors give the German term next to each idea, because school papers in Germany use German words.' },
      { q: 'Does my child need a tutor for VERA?', a: 'Usually not. The IQB states that VERA results are not graded and that no rankings of schools or Länder are made. A weak VERA result is useful information for planning, not a reason to pay for test practice.' },
      { q: 'When is the ZP10 maths exam in 2027?', a: 'In Nordrhein-Westfalen the written ZP10 maths exam is on Thursday 20 May 2027, with a resit date on Thursday 3 June 2027, according to the NRW ministry. Other Länder set their own Klasse 10 exam dates.' },
      { q: 'How many months of tutoring do we need before the exam?', a: 'Count the teaching weeks left once your Land\'s holidays are removed. For a pupil in Nordrhein-Westfalen starting on 9 November 2026, our count gives 25 weeks before the ZP10 on 20 May 2027, about six months at two classes a week.' },
      { q: 'Is anything added at checkout?', a: 'Yes: 2.5 percent for the payment gateway, listed separately so you see it before you confirm. Because the payment is in US dollars, your bank converts it, and some banks add a fee of their own for that.' },
      { q: 'When are maths classes held?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Classes are agreed in German time.' },
      { q: 'Can you guarantee a better grade?', a: 'No. Nobody honest can. We teach alongside school, we do not set or mark German exams, and the school course and the Land\'s exam decide the result. We report what the pupil can now do that they could not before.' },
      { q: 'Is there a free trial?', a: 'Yes. The first class is free, needs no card, and includes a short check at the pupil\'s level. The mentor then suggests a plan to your exam date, in a group or one to one.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for families in Germany looking at maths help.',
    items: [
      { href: '/abitur-maths-in-english', label: 'Abitur maths in English', p: 'The pool exam explained, with solved tasks.' },
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Our main page for families in Germany.' },
      { href: '/courses/abitur-mathematics-course-in-english', label: 'Abitur Mathematik course', p: 'The full syllabus.' },
      { href: '/refund', label: 'Refund policy', p: 'How stopping and refunds work.' },
      { href: '/pricing', label: 'Pricing', p: 'Our plans in one place.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What a live class looks like.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Bring the topic or the Klassenarbeit that worries you most. The mentor runs a short check at your child\'s level, counts the weeks to the next exam with you and suggests a group or one-to-one plan.',
    readFirst: 'If you would like to read first, <a class="ag-inline-link" href="/abitur-maths-in-english">Abitur maths in English</a> explains the pool exam, and <a class="ag-inline-link" href="/refund">the refund page</a> has our rules.',
    note: 'Live online maths classes in English, with mentors based in India. WhatsApp is the quickest way to ask about fees.',
    formNote: 'Free, with no card and no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Maths in Germany', links: [
        { href: '/abitur-maths-in-english', label: 'Abitur maths in English' },
        { href: '/courses/abitur-mathematics-course-in-english', label: 'Abitur Mathematik course' },
        { href: '/courses/comprehensive-middle-school-mathematics-mastery', label: 'Middle school maths' },
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' }
      ] },
      { h4: 'Fees and terms', links: [
        { href: '/pricing', label: 'Pricing' },
        { href: '/refund', label: 'Refund policy' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Subtract the holidays'
  },

  personalityCss: `
.ag-root.ag-mtu .ag-hero h1 { letter-spacing: -0.01em; max-width: 23ch; }
.ag-root.ag-mtu .ag-capsule { border-left-width: 5px; }
.ag-root.ag-mtu .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-mtu .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-mtu .ag-steps li { line-height: 1.55; }
`,

  dossier: {
    curriculumAuthority: 'Ministerium für Schule und Bildung NRW, Standardsicherung (ZP10 Termine 2027, Zentralabitur 2027); IQB (VERA-3, VERA-8, Abitur pool); KMK Bildungsstandards Mathematik and Ferien 2026/2027; Senatsverwaltung für Bildung Berlin (MSA); European Central Bank reference rates. Read 2 and 3 November 2026. Price drivers, start points and the Python project our own.',
    localProject: 'Subtract the holidays: an original Python project for a Klasse 10 pupil in Nordrhein-Westfalen from 9 November 2026 to the ZP10 maths exam on 20 May 2027; days divided by seven give 27 weeks, the set of school weekdays minus the NRW Christmas, Easter and Pfingsten holidays gives 28 calendar weeks, 3 with no school day and 25 left, or 50 classes, 6.25 months of eight; to the NRW Abitur on 5 May 2027 it gives 26, 3 and 23. Lesson family: plan back from a fixed date and subtract the gaps.',
    requiredMentions: ['Weeks until the exam: 27', 'Weeks left for tutoring: 25', 'Months of eight classes: 6.25', 'Subtract the holidays', 'Thursday 20 May 2027; resit date Thursday 3 June 2027', 'Test window 8 February to 25 March 2027', 'What changes the cost of maths tutoring, and what to check', 'Bruch beside fraction'],
    sources: [
      { claim: 'ZP10 2027 dates in NRW.', url: 'https://www.standardsicherung.schulministerium.nrw.de/zentrale-pruefungen-10/termine/zentrale-pruefungen-10-termine-2027' },
      { claim: 'NRW Abitur maths 5 May 2027.', url: 'https://www.standardsicherung.schulministerium.nrw.de/zentralabitur-gost/termine/2027' },
      { claim: 'VERA-3 window 2027.', url: 'https://www.iqb.hu-berlin.de/de/schule/primarstufe/vera-3/' },
      { claim: 'VERA-8 window 2027.', url: 'https://www.iqb.hu-berlin.de/de/schule/sekundarstufe-i/vera/' },
      { claim: 'VERA not graded, no rankings.', url: 'https://www.iqb.hu-berlin.de/de/bista/implementation-und-ueberpruefung/vera/' },
      { claim: 'NRW holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'One ESA and MSA maths standards document since 2022.', url: 'https://www.kmk.org/fileadmin/Dateien/veroeffentlichungen_beschluesse/2022/2022_06_23-Bista-ESA-MSA-Mathe.pdf' },
      { claim: 'Berlin MSA after Klasse 10.', url: 'https://www.berlin.de/sen/bildung/schule/pruefungen-und-abschluesse/' }
    ],
    rejectedClaims: [
      'Market price levels for maths tutoring in Germany: no official source found; none printed and marketPrices left off.',
      'Competitor or tutoring-chain prices: never printed.',
      'Berlin MSA 2027 dates: in a PDF exam plan we did not extract; not stated.',
      'Grade or pass promises: refused.',
      'Any affiliation with the NRW ministry, the IQB, the KMK or Berlin\'s Senatsverwaltung: none.'
    ]
  }
};
