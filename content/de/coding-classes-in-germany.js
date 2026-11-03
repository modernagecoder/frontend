'use strict';
// Germany hub (ag- system, Germany cluster P0 row DE001), rebuilt 2026-11-03 on the live URL that was a hand-built
// legacy page. Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md section 2: the old page printed "Premium",
// typed every price, printed competitor prices in euro, gave session lengths and group sizes that contradict the brand
// facts, claimed "2,400+ German students" and "60+ cities", named Gymnasien as sources of students and promised a refund
// rule that contradicts /refund. None of that is carried over. Owner 2026-11-02: classes are live, in English only, with
// mentors who match the learner's pace and accent; pages show euro, checkout charges USD.
// This page is the en-DE member of the country hreflang cluster (content/markets.json): hreflangCluster true, or
// scripts/verify-hreflang.js fails the Netlify build.
// Spine: sixteen Länder, sixteen summer holidays. The KMK fixes the summer holidays years ahead and the Länder take
// turns; the only days in 2027 when every German pupil is on summer holiday are Monday 2 to Friday 6 August 2027.
// Sources (read raw, quoted in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md, fetched 2 Nov 2026):
//  - KMK Sommerferienregelung 2025 to 2030 (Sommerferienregelung_2025-2030_2022-09-21.pdf, raw src/kmk-sommer/1805b7ea.txt):
//    2027 rows, first and last holiday day, e.g. "Hessen ... 28.06. - 06.08.", "Bayern ... 02.08. - 13.09." (facts 257 to 272).
//  - KMK FER2026_27.pdf "Stand: 09.10.2025"; "Während die Kultusministerkonferenz die Sommerferien langfristig vereinbart,
//    werden die übrigen Ferientermine von den Ländern selbst bestimmt." (facts 273, 286).
//  - KMK Eurydice dossier: school year 1 August to 31 July; six weeks of summer holiday in a rolling system between
//    mid-June and mid-September; Länder set the school-entry cut-off between 30 June and 30 September (facts 287 to 289).
//  - KMK Primarbereich, Sekundarstufe I, Sekundarstufe II pages: Grundschule 1 to 4 (to 6 in Berlin and Brandenburg),
//    Gymnasium in every Land, Oberstufe one-year Einführungsphase plus two-year Qualifikationsphase, Abitur after 12 or 13
//    years, written Abitur tasks set centrally in almost all Länder, no leaving exam after Grundschule (facts 1, 5, 9, 13,
//    14, 19, 22, 26, 28).
//  - GI Informatik-Monitor 2026/27: six Länder without Informatik compulsory for all (Berlin, Brandenburg, Bremen, Hessen,
//    Rheinland-Pfalz, Sachsen-Anhalt); Bremen from 2027/28, Rheinland-Pfalz from 2028/29; about 15% of Oberstufe pupils
//    take Informatik (facts 92, 94, 95, 97).
//  - BWINF: Biber 9 to 20 November 2026; Bundeswettbewerb Informatik round 1 1 September to 23 November 2026; IOI 2027
//    12 to 19 September 2027 at the Hasso-Plattner-Institut, Potsdam (facts 133, 146, 153).
//  - Mathematik-Olympiade: Regionalrunde 11 November 2026, Landesrunde 26 to 28 February 2027, Bundesrunde 30 May to
//    2 June 2027 (facts 165, 166). Känguru der Mathematik: 8 April 2027, registration 1 December 2026 to 31 January 2027
//    (facts 183, 184). Jugend forscht: registration by 30 November, national final in May (fact 197).
//  - Time: EinhZeitG para 4 (MEZ UTC+1, MESZ UTC+2); summer time ended 25 October 2026, begins 28 March 2027.
// Our own calculations (scratchpad de/hub/v1.py, v2.py, v3.py, python3 -I): v1 (end date treated as exclusive) prints
// "Days with all 16 Laender on holiday: 4" and "From 2027-08-02 to 2027-08-05"; v2 (inclusive) prints 5 and
// "From 2027-08-02 to 2027-08-06"; holiday lengths counted inclusively run from 40 days (Hessen, Rheinland-Pfalz,
// Saarland) to 45 days (Baden-Württemberg, Berlin, Brandenburg); the earliest start is 28 June 2027 and the last day is
// 13 September 2027 in Bayern, a span of 78 days.
// Lesson family: is the last day in or out? Off-by-one at the edge of a range.
// The index of built Germany pages is read from content/de at build time (scripts/nl/lib/uk-index.js builtPages('de')),
// so the hub can never drift from the cluster: de-ship.sh rebuilds this page after every new Germany page.

const fs = require('fs');
const path = require('path');
const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const DE_GROUPS = [
  ['guide', 'Guides to German school and exams'], ['door', 'Courses and subjects'], ['competition', 'Competitions'],
  ['german', 'Auf Deutsch'], ['land', 'The sixteen Länder'], ['city', 'Cities'], ['maths', 'Maths in English, by city'],
  ['school', 'International school families'], ['stadt', 'Städte, auf Deutsch']
];
function deIndex() {
  const pages = require('../../scripts/nl/lib/uk-index.js').builtPages('de').filter(m => m.file !== path.basename(__filename));
  const groupOf = m => m.group || 'guide';
  const label = m => m.label || m.routeLabel;
  const blocks = DE_GROUPS.map(([g, name]) => [name, pages.filter(m => groupOf(m) === g).sort((a, b) => label(a).localeCompare(label(b), 'de'))])
    .filter(([, l]) => l.length)
    .map(([name, l]) => ({ kind: 'p', html: `<strong>${name}:</strong> ` + l.map(m => `<a class="ag-inline-link" href="/${m.slug}">${label(m)}</a>`).join(' &middot; ') }));
  if (!blocks.length) return [];
  return [{ id: 'index', tint: 'tint', eyebrow: 'Germany, page by page', h2: 'Every page we have written for families in Germany', lede: 'Each page answers one question for one place, school stage or competition, with its own sources and its own project.', body: blocks }];
}

const V1 = [
  'from datetime import date, timedelta',
  '',
  '# KMK summer holidays 2027: first and last day of holiday, per Land',
  'ferien = {',
  '    "BW": ("29.07", "11.09"), "BY": ("02.08", "13.09"), "BE": ("01.07", "14.08"),',
  '    "BB": ("01.07", "14.08"), "HB": ("08.07", "18.08"), "HH": ("01.07", "11.08"),',
  '    "HE": ("28.06", "06.08"), "MV": ("05.07", "14.08"), "NI": ("08.07", "18.08"),',
  '    "NW": ("19.07", "31.08"), "RP": ("28.06", "06.08"), "SL": ("28.06", "06.08"),',
  '    "SN": ("10.07", "20.08"), "ST": ("10.07", "20.08"), "SH": ("03.07", "14.08"),',
  '    "TH": ("10.07", "20.08"),',
  '}',
  '',
  'def to_date(text):',
  '    day, month = text.split(".")',
  '    return date(2027, int(month), int(day))',
  '',
  'def on_holiday(day):',
  '    count = 0',
  '    for first, last in ferien.values():',
  '        if to_date(first) <= day < to_date(last):',
  '            count += 1',
  '    return count',
  '',
  'day = date(2027, 6, 1)',
  'together = []',
  'while day.year == 2027 and day.month < 10:',
  '    if on_holiday(day) == 16:',
  '        together.append(day)',
  '    day += timedelta(days=1)',
  '',
  'print("Days with all 16 Laender on holiday:", len(together))',
  'print("From", together[0], "to", together[-1])'
].join('\n');

const V2 = [
  'def on_holiday(day):',
  '    count = 0',
  '    for first, last in ferien.values():',
  '        if to_date(first) <= day <= to_date(last):   # the last day is a holiday too',
  '            count += 1',
  '    return count'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'hub', label: 'Coding classes in Germany' },
  slug: 'coding-classes-in-germany',
  code: 'gmy',
  accent: '#3D5A3A',
  accentRationale: 'Germany hub: a dark fir green #3D5A3A, the forests that cover about a third of the country and a colour clear of the Berlin brick, the Informatik teal and the Abitur navy it links to; contrast on the paper #FBF8F2 above 7:1 and above 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  // en-DE member of the country hreflang cluster in content/markets.json.
  hreflangCluster: true,
  parents: [],
  routeLabel: 'Coding classes in Germany',
  title: 'Coding Classes in Germany: Live Online in English, Ages 6+',
  description: 'Live online coding, Python, AI and maths classes in English for children, teens and adults in Germany, mapped to German school stages. First class free.',
  ogDescription: 'Coding, Python, AI and maths taught live in English for learners anywhere in Germany, from Grundschule to Abitur and beyond, with a project on the one week in 2027 when all sixteen Länder are on summer holiday.',
  twitterDescription: 'Live coding and maths classes in English for Germany, ages 6 and up, with the first class free.',
  pageName: 'Coding Classes in Germany',
  webPageDescription: 'The Germany page of Modern Age Coders: how German schooling is organised by Land, where computing and maths fit, how our live classes in English work for German time zones, the competitions of the 2026/27 school year, and an original Python project on the KMK summer holiday calendar for 2027.',
  courseDescription: 'Live online coding, Python, AI and maths classes in English for learners in Germany aged 6 and up: Scratch and Python for children, Informatik and Abitur support for teenagers, and AI and automation for adults, in a group of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }],
  crumbLabel: 'Germany',
  navLinks: [
    { href: '#school', label: 'German schools' },
    { href: '#english', label: 'In English' },
    { href: '#project', label: 'Holiday project' },
    { href: '#contests', label: 'Competitions' },
    { href: '#times', label: 'Class times' },
    { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI classes' }
  ],
  eyebrow: 'Germany &middot; Coding, AI and maths &middot; Ages 6 and up',
  h1: 'Coding classes in Germany',
  lede: 'Germany has sixteen school systems, one per Land, and they do not even start the summer holidays in the same month. This page shows how German schooling is organised and where coding and maths fit into it, how our live classes in English work from Kiel to Konstanz, which competitions fall in the 2026/27 school year, and a short program that finds the only five days in 2027 when every pupil in the country is on holiday at once.',
  secondaryCta: { href: '#project', label: 'See the holiday project' },
  wa: 'Hello Modern Age Coders, I live in Germany and would like a free first class in coding or maths, taught in English.',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; every class taught in English by one regular mentor',
  spec: [
    ['Who', 'Children from 6, teenagers and adults'],
    ['Subjects', 'Coding, Python, AI and maths'],
    ['School link', 'Informatik, Abitur, IB and IGCSE'],
    ['German times', 'Afternoons, evenings and weekends'],
    ['Teachers', 'Mentors based in India'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders teaches coding, Python, AI and maths to learners in Germany in live online classes held in English, for children from 6, teenagers working towards the MSA, the Abitur, the IB or IGCSE, and adults. Each learner has one regular mentor who matches their pace and accent. Classes run in German afternoons, evenings and weekends, in a group of fifteen to twenty or one to one, and the first class is free.',

  picks: {
    eyebrow: 'Where most learners in Germany start',
    h2: 'Three courses for three stages of German school',
    lede: 'A Grundschule child who has never coded, a pupil in Klasse 5 to 10 whose Land has just made Informatik compulsory, and an Oberstufe student who wants Informatik as an Abitur subject.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'GMY / 01', title: 'Coding for Kids', note: 'Ages 6 to 12, grouped by age. Scratch games and stories, then apps and a first look at AI, long before most German timetables include a computing lesson.' },
      { course: 'informatik-companion-course-klasse-5-10', code: 'GMY / 02', title: 'Informatik Companion, Klasse 5 to 10', note: 'Ages 10 to 16. The algorithms, data and Python that Informatik lessons cover in the Länder where the subject is now compulsory, explained again in English and practised further.' },
      { course: 'informatik-abitur-course-java-python', code: 'GMY / 03', title: 'Informatik Abitur in English', note: 'Ages 16 to 19. Java or Python, data structures, automata, databases and the written exam habit of tracing code on paper.' }
    ]
  },

  sections: [
    {
      id: 'school',
      eyebrow: 'German schools',
      h2: 'How does school work in Germany, and where does coding fit?',
      lede: 'Education belongs to the Länder, so the answer starts with which of the sixteen your child lives in. The Kultusministerkonferenz, where the education ministers of the Länder meet, sets the common frame.',
      body: [
        { kind: 'two',
          leftH3: 'One frame, sixteen versions',
          left: [
            'According to the KMK, Grundschule covers grades 1 to 4 everywhere except Berlin and Brandenburg, where it runs to grade 6. There is no leaving exam at the end of it. Secondary school then splits into tracks, and every Land names its school types differently: a Gemeinschaftsschule in one Land is an Oberschule or an Integrierte Sekundarschule in another. The Gymnasium is the only school type that exists in every Land.',
            'The Abitur comes after 12 or 13 years of school, called G8 and G9, and the KMK notes that the written Abitur papers are now set centrally in almost all Länder. The gymnasiale Oberstufe has a one-year Einführungsphase followed by a two-year Qualifikationsphase, whose marks count towards the final result.'
          ],
          rightH3: 'Computing is the least settled subject',
          right: [
            'Maths and German are taught in every year of every school. Informatik is not. The Gesellschaft für Informatik counted six Länder in its 2026/27 Informatik-Monitor where no Informatik lesson is compulsory for all pupils: Berlin, Brandenburg, Bremen, Hessen, Rheinland-Pfalz and Sachsen-Anhalt. Bremen plans to change that from 2027/28 and Rheinland-Pfalz from 2028/29.',
            'At the top of school the subject is thinner still: the same monitor puts the share of Oberstufe pupils who take Informatik in the Qualifikationsphase at about 15 percent nationally. A child in Germany can reach the Abitur without ever having written a program.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'A German school career and what it means for a learner who wants to code', head: ['Stage', 'Usual grades', 'What to know'], rows: [
          ['Grundschule', '1 to 4 (1 to 6 in Berlin and Brandenburg)', 'No compulsory computing; a good age to start with Scratch'],
          ['Sekundarstufe I', '5 to 9 or 10', 'Informatik compulsory in some Länder, elective or absent in others'],
          ['Mittlerer Schulabschluss', 'End of grade 10', 'Exams set by the Land in most Länder'],
          ['Einführungsphase', '10 or 11', 'Course choices for the Abitur are made'],
          ['Qualifikationsphase', 'Last two years', 'Informatik as a Grundkurs or Leistungskurs where the school offers it'],
          ['Abitur', 'After grade 12 (G8) or 13 (G9)', 'Written papers set centrally in almost all Länder']
        ] },
        { kind: 'source', html: 'Sources: KMK, pages on the Primarbereich, Sekundarstufe I and Sekundarstufe II; Gesellschaft für Informatik, Informatik-Monitor 2026/27. Read on 2 November 2026. Our <a class="ag-inline-link" href="/informatik-nachhilfe-online">Informatik-Nachhilfe page</a>, in German, has the rule for each Land in one table.' },
        { kind: 'p', mt: true, html: 'Our classes do not replace any of this, and they do not lead to a German qualification. What they add is time: two live hours a week in which a learner writes and tests real programs or works through maths problems with a mentor, at whatever point of the German system they have reached.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Why would a family in Germany choose classes in English?',
      lede: 'Every class is live and every class is in English. We do not teach in German, and we think it is fairer to say so at the top of the page than after a trial class.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Families who already live in English', p: 'Children at international and bilingual schools, families who moved to Germany for work and pupils on the IB or IGCSE learn in English at school. For them an English coding class is simply the language they think in for school subjects.' },
          { h3: 'Pupils at German schools', p: 'For a pupil at a German Gymnasium or Gesamtschule, a weekly class in English is coding and English practice at the same time. Programming keywords are English words anyway: if, while, print and return read the same in Munich and Mumbai.' },
          { h3: 'Adults at work', p: 'Many teams in Germany write code, documentation and tickets in English. Adults who learn Python, automation or AI agents with us learn the vocabulary their colleagues and the official documentation use.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Matched to the learner',
          left: [
            'The mentor adapts to the learner, not the other way round. They speak clearly and at a pace the learner can follow, rephrase an instruction rather than repeat it louder, and get used to how each person speaks. A ten year old who mixes in a German word is understood and given the English one without fuss.'
          ],
          rightH3: 'Who teaches',
          right: [
            'Our mentors are based in India and teach live over video. Each learner keeps the same mentor from week to week, so after a few classes the mentor knows where they hesitate, what they find easy and which kind of problem keeps them interested.'
          ] }
      ]
    },
    {
      id: 'project',
      tint: 'tint',
      eyebrow: 'A German calendar project',
      h2: 'Sixteen Länder, sixteen summer holidays: when is everyone off at once?',
      lede: 'German families plan around a calendar that no other country has: the Länder take turns. The KMK fixes the summer holidays years in advance so that sixteen Länder do not all hit the motorways in the same week. Our students turn that calendar into a program and meet one of the oldest bugs in computing on the way.',
      body: [
        { kind: 'two',
          leftH3: 'The rule',
          left: [
            'In its description of the German school system, the KMK explains that summer holidays last six weeks and are fixed in a rolling system inside a window from mid-June to mid-September. Every other holiday, autumn, Christmas, Easter and the rest, each Land sets for itself.',
            'The KMK publishes the summer dates for several years at once. Its table for 2025 to 2030 gives, for every Land and every year, the first and the last day of the holiday. Hessen, Rheinland-Pfalz and Saarland open the summer of 2027 on 28 June; Bayern closes it on 13 September.'
          ],
          rightH3: 'The question',
          right: [
            'Is there any day in 2027 when every pupil in Germany is on summer holiday? A cousin in Hamburg and a cousin in Munich want to know, and so does anyone planning a summer coding camp for the whole country.',
            'Students type the sixteen ranges into a dictionary, write a function that counts how many Länder are on holiday on a given day, and walk through the summer one day at a time.'
          ] },
        { kind: 'code', label: 'Version 1: count the Länder on holiday each day', lang: 'Python', code: V1, note: 'It prints: <code>Days with all 16 Laender on holiday: 4</code> and <code>From 2027-08-02 to 2027-08-05</code>.' },
        { kind: 'p', mt: true, html: 'Four days, Monday 2 August to Thursday 5 August 2027. It looks right, and that is what makes it dangerous. The KMK table says the dates are the first and the last day of the holiday, so 6 August is still a holiday in Hessen, Rheinland-Pfalz and Saarland. The test <code>day &lt; to_date(last)</code> throws the last day of every holiday away. Programmers call this an off-by-one error, and it is one of the most common mistakes in all of software, from calendars to array indexes.' },
        { kind: 'code', label: 'Version 2: the last day counts too', lang: 'Python', code: V2, note: 'With this one change the program prints <code>Days with all 16 Laender on holiday: 5</code> and <code>From 2027-08-02 to 2027-08-06</code>: the whole working week from Monday 2 to Friday 6 August 2027.' },
        { kind: 'table', mt: true, numCols: [3], caption: 'Summer holidays 2027 by Land, first and last day, with the length counted both ways in (our count)', head: ['Land', 'First day', 'Last day', 'Days'], rows: [
          ['Hessen, Rheinland-Pfalz, Saarland', '28 June', '6 August', '40'],
          ['Berlin, Brandenburg', '1 July', '14 August', '45'],
          ['Hamburg', '1 July', '11 August', '42'],
          ['Schleswig-Holstein', '3 July', '14 August', '43'],
          ['Mecklenburg-Vorpommern', '5 July', '14 August', '41'],
          ['Bremen, Niedersachsen', '8 July', '18 August', '42'],
          ['Sachsen, Sachsen-Anhalt, Thüringen', '10 July', '20 August', '42'],
          ['Nordrhein-Westfalen', '19 July', '31 August', '44'],
          ['Baden-Württemberg', '29 July', '11 September', '45'],
          ['Bayern', '2 August', '13 September', '43']
        ] },
        { kind: 'source', html: 'Data: Kultusministerkonferenz, Sommerferienregelung 2025 bis 2030, row 2027 for each Land; KMK, Das Bildungswesen in der Bundesrepublik Deutschland (Eurydice dossier). The day counts and the overlap are our own calculation. Six weeks is 42 days, yet the lengths run from 40 to 45, because each Land starts and ends its holiday on a day of the week that suits its own school calendar.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 7 to 9, on paper.</strong> Draw sixteen strips on squared paper, one per Land, from 28 June to 13 September. Colour the holiday days. Where are all sixteen coloured?',
          '<strong>Ages 9 to 12, Scratch.</strong> Store the first and last day of four Länder as day numbers in a list and make a sprite say how many Länder are free on the day you type in.',
          '<strong>Ages 12 to 16, Python.</strong> Run Version 1, then find the bug before reading Version 2. Write one test for 6 August that would have caught it.',
          '<strong>Going further.</strong> Change the program to print, for each day from 28 June to 13 September 2027, how many Länder are on holiday, and draw the result as a bar chart. Which week is the busiest on the roads?'
        ] }
      ]
    },
    {
      id: 'contests',
      eyebrow: 'The 2026/27 school year',
      h2: 'Which coding and maths competitions can pupils in Germany enter in 2026/27?',
      lede: 'Germany runs some of the largest school competitions in Europe, most of them free and entered through the school. These are the dates their organisers publish for this school year.',
      body: [
        { kind: 'table', numCols: [], caption: 'Competition dates for the 2026/27 school year, from each organiser', head: ['Competition', 'Who', 'Dates', 'Organiser'], rows: [
          ['Informatik-Biber', 'Grades 3 to 13', '9 to 20 November 2026', 'Bundesweite Informatikwettbewerbe'],
          ['Bundeswettbewerb Informatik, round 1', 'Pupils up to the Abitur', '1 September to 23 November 2026', 'Bundesweite Informatikwettbewerbe'],
          ['Mathematik-Olympiade', 'Grades 3 to 13', 'Regionalrunde 11 November 2026; Landesrunde 26 to 28 February 2027; Bundesrunde 30 May to 2 June 2027', 'Mathematik-Olympiaden e.V.'],
          ['Känguru der Mathematik', 'Grades 3 to 13', '8 April 2027; schools register from 1 December 2026 to 31 January 2027', 'Mathematikwettbewerb Känguru e.V.'],
          ['Jugend forscht', 'From grade 4 up to age 21', 'Register by 30 November; national final in May', 'Stiftung Jugend forscht'],
          ['International Olympiad in Informatics', 'The German team', '12 to 19 September 2027, Potsdam', 'Hosted at the Hasso-Plattner-Institut']
        ] },
        { kind: 'source', html: 'Sources: bwinf.de (Biber 2026, Bundeswettbewerb, IOI 2027 pages); mathematik-olympiaden.de and mathe-wettbewerbe.de; mathe-kaenguru.de; jugend-forscht.de. All read on 2 November 2026. The Känguru is in April in 2027 rather than its usual March Thursday, because the March date falls just before the Easter holidays in almost every Land.' },
        { kind: 'two', mt: true,
          leftH3: 'Coding competitions',
          left: [
            'The Biber needs no programming at all: short logic puzzles in 30 to 40 minutes. The Bundeswettbewerb Informatik is the opposite end, with real algorithm problems solved over weeks, and its best entrants go on to the selection for the German team at the International Olympiad in Informatics. In 2027 that olympiad comes to Potsdam, the second time Germany has hosted it after 1992.'
          ],
          rightH3: 'Maths competitions',
          right: [
            'The Mathematik-Olympiade runs in rounds from the school up to a national final, which the 2027 organisers place in Kaiserslautern. The Känguru is a single 75-minute multiple-choice paper written on one day in schools across Germany; more than 920,000 pupils took part in 2026.'
          ] },
        { kind: 'p', mt: true, html: 'We are not connected with any of these organisers and we never copy their problems. In class we write our own puzzles and problems in the same style. Our <a class="ag-inline-link" href="/courses/german-informatics-competitions-course-biber-bwinf-bwki">competitions course</a> works towards the Biber and the Bundeswettbewerb, and the <a class="ag-inline-link" href="/courses/mathematik-olympiade-and-kaenguru-training-course">Mathematik-Olympiade and Känguru course</a> towards the maths contests.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'What time are the classes in Germany?',
      lede: 'Germany keeps one time zone, so these times work the same in Hamburg, Leipzig and Freiburg. India is ahead of Germany, which puts a German afternoon in the mentor\'s evening.',
      body: [
        { kind: 'table', numCols: [], caption: 'German class times and the same moment in India', head: ['Time in Germany', 'India, until 28 March 2027', 'India, from 28 March 2027'], rows: [
          ['14:30', '19:00', '18:00'],
          ['16:30', '21:00', '20:00'],
          ['Saturday 09:30', '14:00', '13:00'],
          ['Sunday 11:00', '15:30', '14:30']
        ] },
        { kind: 'source', html: 'Germany uses Central European Time, UTC+1, in winter and Central European Summer Time, UTC+2, in summer, as set out in the Einheitenzeitgesetz. Summer time ended on 25 October 2026 and starts again on 28 March 2027. India stays at UTC+5:30 all year, which makes the gap 4 hours 30 minutes in winter and 3 hours 30 minutes in summer.' },
        { kind: 'p', mt: true, html: 'Children usually come straight after school or on a weekend morning. Teenagers in the Oberstufe often prefer late afternoons, and adults book evenings up to about 18:30 German time, or weekends. When you book the free class you pick a time in your own clock; the mentor sees the same moment in theirs.' }
      ]
    }
  ].concat(deIndex()),

  ladder: {
    eyebrow: 'Milestones',
    h2: 'What a learner in Germany can do at each stage',
    lede: 'Our own milestones, used to place each learner in the right group and to report progress. They sit beside the German school stages, not in place of them.',
    table: { caption: 'Coding milestones by German school stage (ours)', head: ['Stage', 'School stage', 'The learner can'], rows: [
      ['1. Steps and loops', 'Grundschule', 'Build a Scratch game with events, loops and a score'],
      ['2. Typed code', 'Klasse 5 to 7', 'Write Python with variables, conditions and functions'],
      ['3. Data and tests', 'Klasse 7 to 10', 'Read a file, check edge cases and test a function on its boundaries'],
      ['4. Structures', 'Oberstufe', 'Use lists, dictionaries, classes and recursion, and trace code on paper'],
      ['5. Real projects', 'Abitur and beyond', 'Plan, build and explain a program that other people use']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 3 is the holiday project above: a program that seemed right until one test on the last day of the range proved it wrong.',
      'We report what your child built and could explain, never how many hours they spent at a screen.'
    ] },
    right: { h3: 'For learners', ps: [
      'Whenever a range has a start and an end, ask whether the end is in or out before you write the loop.',
      'Test the first and the last value first. Most bugs live at the edges.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for learners in Germany',
    lede: 'Every course is live, in English, with one regular mentor, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'School and exams', sub: 'Ages 14 to 19', courses: [
        { code: 'GMY / SCHOOL / 01', slug: 'abitur-mathematics-course-in-english', title: 'Abitur maths in English', blurb: 'Analysis, geometry and stochastics for LK and GK pupils.' },
        { code: 'GMY / SCHOOL / 02', slug: 'ib-diploma-computer-science-course', title: 'IB Computer Science', blurb: 'For international school pupils on the IB Diploma.' },
        { code: 'GMY / SCHOOL / 03', slug: 'igcse-computer-science-0478-course', title: 'IGCSE Computer Science', blurb: 'Cambridge 0478 for pupils at international schools.' }
      ] },
      { num: 'II', h3: 'Contests and depth', sub: 'Ages 9 to 19', courses: [
        { code: 'GMY / DEPTH / 01', slug: 'german-informatics-competitions-course-biber-bwinf-bwki', title: 'Informatics competitions', blurb: 'From the Biber puzzles to Bundeswettbewerb algorithms.' },
        { code: 'GMY / DEPTH / 02', slug: 'mathematik-olympiade-and-kaenguru-training-course', title: 'Olympiade and Känguru', blurb: 'Problem solving by Klassenstufe, with our own problems.' },
        { code: 'GMY / DEPTH / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms for teens', blurb: 'Data structures and problem solving for keen coders.' }
      ] },
      { num: 'III', h3: 'Adults and work', sub: 'Ages 18 and up', courses: [
        { code: 'GMY / WORK / 01', slug: 'python-ai-automation-masterclass-college', title: 'Python automation', blurb: 'Scripts, data and applied AI for everyday work.' },
        { code: 'GMY / WORK / 02', slug: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', title: 'AI coding agents', blurb: 'Working with Codex and Claude Code, for adults.' },
        { code: 'GMY / WORK / 03', slug: 'full-stack-web-development-masterclass-college', title: 'Full-stack web', blurb: 'Front end, back end and deployment, step by step.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live classes work for learners in Germany',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Afternoons', l: 'From about 14:30 German time, after the school day.' },
      { time: 'Weekends', l: 'Saturday and Sunday mornings and middays.' },
      { time: 'One to one', l: 'A time agreed with your mentor, evenings included.' }
    ],
    cells: [
      { h3: 'Live, never recorded', p: 'Every class is a real conversation with a mentor.' },
      { h3: 'English, at your pace', p: 'Clear speech, rephrased when needed.' },
      { h3: 'One regular mentor', p: 'The same person each week, who knows the learner.' },
      { h3: 'Placed by ability', p: 'A learner joins the group that fits what they can do.' },
      { h3: 'Written progress notes', p: 'What was built, what was hard, what comes next.' },
      { h3: 'Group or private', p: 'Fifteen to twenty learners, or one learner alone.' }
    ]
  },

  projectsH2: 'Projects our students have built',
  projectsLede: 'A few projects from our students around the world are below; the <a class="ag-inline-link" href="/student-labs">student labs</a> page collects many more.',
  reviewsLede: 'Google reviews from parents and students, quoted exactly as written.',

  fees: {
    h2: 'Fees for learners in Germany',
    lede: 'One monthly fee covers eight live classes of an hour each. We show it in euro, converted at the European Central Bank reference rate; the payment is taken in US dollars, so your bank makes the final conversion and your statement may differ by a little.',
    free: ['A free first class', 'A placement conversation in English', 'No card needed'],
    group: ['Fifteen to twenty learners placed by level', 'One regular mentor', 'Two classes a week', 'Monthly, cancel any month'],
    one: ['The learner and one mentor', 'Their own pace and syllabus', 'Times agreed together']
  },

  faq: {
    eyebrow: 'Families in Germany ask',
    h2: 'Coding classes in Germany: common questions',
    items: [
      { q: 'Are the classes in German or in English?', a: 'In English only. Every class is taught live in English by a mentor who matches the learner\'s pace and accent. We do not offer lessons in German. Code itself uses English keywords, so learners pick up the vocabulary quickly.' },
      { q: 'Is Informatik compulsory in German schools?', a: 'It depends on the Land. The Gesellschaft für Informatik counted six Länder in 2026/27 without Informatik compulsory for all pupils: Berlin, Brandenburg, Bremen, Hessen, Rheinland-Pfalz and Sachsen-Anhalt. Bremen plans compulsory Informatik from 2027/28 and Rheinland-Pfalz from 2028/29.' },
      { q: 'From what age can my child start?', a: 'From 6. Children aged 6 to 12 start with Scratch, where blocks snap together and nothing has to be typed, and move to typed Python from about 9. Teenagers and adults start wherever their level is.' },
      { q: 'Do you help with the Abitur?', a: 'Yes, alongside school. We teach Abitur maths and Informatik in English, with our own practice tasks in the style of the German exams. We are not a school, we do not award German qualifications, and the school course stays the one that counts.' },
      { q: 'When are classes in German time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Most learners in Germany take classes in the afternoon, the early evening or on weekend mornings.' },
      { q: 'Where are the teachers?', a: 'In India. Our mentors teach live over video, and each learner keeps the same mentor from week to week. India is 4 hours 30 minutes ahead of Germany in winter and 3 hours 30 minutes in summer, so a German afternoon is the mentor\'s evening.' },
      { q: 'Which currency do I pay in?', a: 'Fees are shown on this page in euro at the European Central Bank reference rate. The payment itself is taken in US dollars and your bank converts it, so the amount on your statement can differ slightly. The first class is free and needs no card.' },
      { q: 'Are classes live or recorded?', a: 'Live. Every class is held in real time with a mentor and either a group of fifteen to twenty learners or the learner alone. Nothing is a recorded video course.' },
      { q: 'Can my child enter German competitions through you?', a: 'Competitions such as the Informatik-Biber, the Mathematik-Olympiade and the Känguru are entered through the school. We prepare learners with our own problems in the same style, and we are not connected with any organiser.' },
      { q: 'Do you teach adults in Germany?', a: 'Yes. Adults learn Python, automation, web development and AI coding agents with us, usually in the evening or at weekends, in English. Many find that useful because their teams already work in English.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Further reading for learners in Germany.',
    items: [
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning in Germany', p: 'Our AI classes for German learners.' },
      { href: '/coding-classes-in-switzerland', label: 'Coding classes in Switzerland', p: 'For families just over the southern border.' },
      { href: '/coding-classes-in-netherlands', label: 'Coding classes in the Netherlands', p: 'Our page for the neighbour to the west.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Which AI tools allow which ages.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What happens in a live class.' },
      { href: '/courses', label: 'All courses', p: 'Every syllabus in one place.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'The first class is a conversation and a small task at the learner\'s level. The mentor sees how they think and how comfortable they are in English, then suggests a course and a group.',
    readFirst: 'If you want to read more first, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a live class, and <a class="ag-inline-link" href="/courses">the course list</a> has every syllabus.',
    note: 'Live online classes in English, with mentors in India. Questions are answered fastest on WhatsApp, in English.',
    formNote: 'No card, no obligation, nothing to pay for the first class.'
  },

  footer: {
    cols: [
      { h4: 'Germany', links: [
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI classes in Germany' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/abitur-maths-in-english', label: 'Abitur maths in English' },
        { href: '/coding-classes-for-kids-berlin', label: 'Coding for kids in Berlin' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Is the last day in or out?'
  },

  personalityCss: `
.ag-root.ag-gmy .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-gmy .ag-capsule { border-left-width: 6px; }
.ag-root.ag-gmy .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-gmy .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-gmy .ag-band-head h3 { letter-spacing: -0.006em; }
`,

  dossier: {
    curriculumAuthority: 'KMK pages on the Primarbereich, Sekundarstufe I and Sekundarstufe II; KMK Sommerferienregelung 2025 bis 2030 and Ferienkalender 2026/27; KMK Eurydice dossier; Gesellschaft für Informatik, Informatik-Monitor 2026/27; Bundesweite Informatikwettbewerbe; Mathematik-Olympiaden e.V.; Mathematikwettbewerb Känguru e.V.; Stiftung Jugend forscht; Einheitenzeitgesetz. All read 2 November 2026.',
    localProject: 'Sixteen summer holidays: an original Python project on the KMK summer dates for 2027 in which treating the last day as exclusive finds 4 days with all sixteen Länder on holiday (2 to 5 August 2027) and the inclusive fix finds 5 (2 to 6 August 2027); plus paper and Scratch versions. Lesson family: is the last day in or out?',
    requiredMentions: ['Days with all 16 Laender on holiday: 4', 'From 2027-08-02 to 2027-08-06', 'Sixteen Länder, sixteen summer holidays', 'day &lt; to_date(last)', 'Is the last day in or out?', 'about 15 percent nationally', '12 to 19 September 2027, Potsdam', 'the lengths run from 40 to 45'],
    sources: [
      { claim: 'Summer holiday dates 2027 for every Land.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/Sommerferienregelung_2025-2030_2022-09-21.pdf' },
      { claim: 'KMK sets the summer holidays; the Länder set the rest.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Six weeks in a rolling system, mid-June to mid-September.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Eurydice/DE/dossier_de_ebook.pdf' },
      { claim: 'School structure, Gymnasium in every Land, central written Abitur.', url: 'https://www.kmk.org/themen/allgemeinbildende-schulen/bildungswege-und-abschluesse/sekundarstufe-ii-gymnasiale-oberstufe-und-abitur.html' },
      { claim: 'Six Länder without compulsory Informatik; about 15 percent take it in the Oberstufe.', url: 'https://informatik-monitor.de/' },
      { claim: 'IOI 2027 in Potsdam.', url: 'https://bwinf.de/olympiade/2027/' },
      { claim: 'Mathematik-Olympiade 2026/27 rounds.', url: 'https://www.mathematik-olympiaden.de/moev/index.php' },
      { claim: 'Känguru 2027 date and 2026 participation.', url: 'https://www.mathe-kaenguru.de/' }
    ],
    rejectedClaims: [
      'Student counts for Germany, city counts and a Germany-only rating from the old page: not verifiable, removed.',
      'Naming German schools as sources of our students: refused.',
      'German-language teaching: we teach in English only, and the page says so.',
      'Competitor prices: not printed.',
      'Any affiliation with the KMK, a ministry, BWINF or a competition organiser: none.'
    ]
  }
};
