'use strict';
// Coding classes for teens in Germany (ag- English door, Germany cluster P2 row DE015), written 2026-11-03.
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; writer brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD.
// Angle: a teenager of 13 to 18 at a German school. What Informatik the Land actually gives them in Klasse 7 to 10,
// how Informatik counts in the Oberstufe, the MSA and ZP10 years, the BWINF route for teens, and one original project
// on the KMK's own Abitur average formula.
// Sources (facts read raw; FACTS.md = ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md, fetched 2 Nov 2026):
//  - GI Informatik-Monitor 2026/27, Land pages (FACTS 67 to 89): BW "Pflichtfach Informatik und Medienbildung" from
//    2025/2026, first in Jahrgangsstufen 5 und 6; BY Mittelschule "Jahrgangsstufen 5 bis 10 ... je einer Wochenstunde",
//    Gymnasium "Jahrgangsstufen 6 und 7 ... Schwerpunkt Informatik", grade 11 "verpflichtend zweistündig"; BE ITG "einer
//    Wochenstunde"; BB Gymnasien 9 and 10 Wahlpflicht; HB "weder an der Oberschule noch am Gymnasium"; HH "seit dem
//    Schuljahr 2025/26 vier Wochenstunden"; HE "kein verbindlicher Informatikunterricht"; MV "Jahrgangsstufen 5 bis 10
//    ... mindestens je einer Wochenstunde"; NI "seit dem Schuljahr 2024/25 ... Jahrgangsstufen 9 und 10"; NW
//    "Jahrgangsstufen 5 und 6", Q-Phase GK "dreistündig", LK "fünfstündig", "Einsatz eines Computers ... nicht
//    vorgesehen"; RP "21 Informatik-Profil-Schulen in Jahrgangsstufe 5"; SL "7 und 8 zweistündig sowie ... 9 und 10
//    einstündig"; SN "einstündig in den Jahrgangsstufen 7 bis 10"; ST "Jahrgangsstufen 6 bis 10 ... je eine
//    Wochenstunde"; SH "vier Wochenstunden in den Jahrgangsstufen 7 bis 10"; TH "schrittweise aufwachsend bis zur
//    Jahrgangsstufe 10 im Schuljahr 2029/30". National page: about 15 percent in the Q-Phase (97); Sachsen and MV about
//    half (98); BW, NI, HB "ungefähr jede zwölfte Person" (99); HB compulsory from 2027/28 (94); RP from 2028/29 (95).
//  - KMK Sek II page: "eine Einführungsphase (ein Jahr) und eine Qualifikationsphase (zwei Jahre)" (FACTS 9).
//  - berlin.de: MSA after Klasse 10 (FACTS 66). NRW standardsicherung: ZP10 in Deutsch, Mathematik, Englisch (64), 2027
//    decree published (65).
//  - bwinf.de (FACTS 142 to 147, 153): Jugendwettbewerb levels Bronze 5/6, Silber 7/8/9, Gold ab 10; round 3
//    Einsendeschluss 23 November 2026; Bundeswettbewerb "bis 21 Jahre"; 45th round 1 "1. September bis 23. November
//    2026"; IOI 2027 "12. bis 19. September 2027 am Hasso-Plattner-Institut in Potsdam".
//  - NEW raw source, KMK, "Vereinbarung zur Gestaltung der gymnasialen Oberstufe und der Abiturprüfung", Beschluss vom
//    07.07.1972 i. d. F. vom 06.06.2024, https://www.kmk.org/fileadmin/Dateien/veroeffentlichungen_beschluesse/1972/
//    1972_07_07-VB-gymnasiale-Oberstufe-Abiturpruefung.pdf (copy: src-pages/coding-classes-for-teens-germany/
//    kmk-vb-oberstufe.pdf and .txt, fetched 3 Nov 2026). Quotes: "Note 1 entspricht 15/14/13 Punkten je nach
//    Notentendenz" ... "Note 6 entspricht 0 Punkten."; "(Block I) maximal 600 Punkte und in der Abiturprüfung (Block II)
//    maximal 300 Punkte"; "insgesamt höchstens 900 Punkte erreichbar und müssen mindestens 300 Punkte erzielt werden";
//    Aufgabenfeld "das Fach Mathematik, die naturwissenschaftlichen Fächer Biologie, Chemie und Physik, das Fach
//    Informatik"; Anlage 4 formula N = 5 2/3 - E/180 and table "900 - 823 1,0", "822 - 805 1,1" ... "318 - 301 3,9",
//    "300 4,0".
//  - AI tool ages: content/ai-tool-age-audit.json (OpenAI 13, parent's permission under 18; Claude 18+).
//  - Time: EinhZeitG; summer time ended 25 October 2026, begins 28 March 2027; India UTC+5:30.
// Our own calculations (scratchpad de/w/G4/cte/v1.py, v2.py, both.py, python3 -I): the 30 printed bands of Anlage 4
// equal our band list (checked by regex against kmk-vb-oberstufe.txt: True). Version 1 (round to one decimal) prints
// "Scores checked: 601  Mismatches: 320" and "First mismatch: 823 points -> 1.1". Version 2 (whole-number tenths, cut
// off, capped at 1.0) prints "Scores checked: 601  Mismatches: 0", "900 points -> 1.0", "823 points -> 1.0",
// "822 points -> 1.1", "300 points -> 4.0".
// Lesson family: a formula against the official table it must reproduce: truncation, not rounding, and a cap.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  '# The KMK formula for the Abitur average: N = 5 2/3 - E / 180',
  'def average_v1(points):',
  '    return round(17 / 3 - points / 180, 1)',
  '',
  '# the KMK table in Anlage 4, as (lowest, highest, average)',
  'bands = [(823, 900, 1.0)]',
  'for k in range(1, 30):',
  '    bands.append((823 - 18 * k, 840 - 18 * k, round(1.0 + k / 10, 1)))',
  'bands.append((300, 300, 4.0))',
  '',
  'def check(average):',
  '    wrong = [p for lo, hi, note in bands for p in range(lo, hi + 1) if average(p) != note]',
  '    print("Scores checked:", sum(hi - lo + 1 for lo, hi, _ in bands), " Mismatches:", len(wrong))',
  '    return wrong',
  '',
  'wrong = check(average_v1)',
  'print("First mismatch:", wrong[0], "points ->", average_v1(wrong[0]))'
].join('\n');

const V2 = [
  'def average_v2(points):',
  '    tenths = (1020 - points) // 18   # (17/3 - E/180) x 10, cut off, in whole numbers',
  '    return max(10, tenths) / 10      # the table never goes better than 1.0',
  '',
  'wrong = check(average_v2)',
  'for points in (900, 823, 822, 300):',
  '    print(points, "points ->", average_v2(points))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'door', label: 'Coding classes for teens' },
  slug: 'coding-classes-for-teens-germany',
  code: 'cte',
  accent: '#495704',
  accentRationale: 'Teenagers in Germany: an olive #495704, a young, outdoor green that stays clear of the Germany hub fir green, the AI plum and the Informatik teal; contrast on the paper #FBF8F2 above 7:1 and above 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Coding classes for teens in Germany',
  title: 'Coding Classes for Teens in Germany, Live in English',
  description: 'Live online coding classes in English for teenagers in Germany, 13 to 18: Python, Java and web, Informatik by Land, the Oberstufe and the BWINF contests.',
  ogDescription: 'Coding for teenagers at German schools, taught live in English: what Informatik each Land gives in Klasse 7 to 10, how it counts in the Oberstufe, and a project on the KMK Abitur formula.',
  twitterDescription: 'Live coding classes in English for teenagers in Germany, from first Python to Oberstufe Informatik and contests.',
  pageName: 'Coding Classes for Teens in Germany',
  webPageDescription: 'A guide for teenagers in Germany and their parents: compulsory Informatik in Klasse 7 to 10 in each of the 16 Länder, Informatik in the Oberstufe and the Abitur points system, the Jugendwettbewerb and Bundeswettbewerb Informatik, AI tool ages, and an original Python project on the KMK Abitur average formula.',
  courseDescription: 'Live online coding classes in English for teenagers in Germany aged 13 to 18: Python first, then Java, web development or Informatik for the Oberstufe, in a group of fifteen to twenty teenagers or one to one, with one regular mentor.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Coding for teens',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#lander', label: 'Informatik' },
    { href: '#oberstufe', label: 'Oberstufe' },
    { href: '#project', label: 'Abitur' },
    { href: '#contests', label: 'Contests' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Germany &middot; Teenagers &middot; Ages 13 to 18',
  h1: 'Coding classes for teens in Germany',
  lede: 'Between Klasse 7 and the Abitur, a teenager in Germany may get four compulsory hours of Informatik, one lesson a week, or nothing at all, depending on the Land. This page sets out what each Land gives, how Informatik counts once the Oberstufe starts, which contests are open to teenagers in 2026 and 2027, and a Python project that checks the KMK\'s own Abitur average formula against its official table, and finds the trap in it.',
  secondaryCta: { href: '#lander', label: 'See Informatik by Land' },
  wa: 'Hello Modern Age Coders, I have a teenager at school in Germany and would like a free first coding class, taught in English.',
  heroNote: 'Teaching live since 2020 &middot; 10,000+ students worldwide &middot; teenagers write every line themselves',
  spec: [
    ['Ages', '13 to 18'],
    ['Languages', 'Python, then Java or web'],
    ['Fits beside', 'Informatik, MSA and Oberstufe'],
    ['German times', 'After school and weekends'],
    ['Mentors', 'Based in India, teaching in English'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders teaches coding to teenagers in Germany, ages 13 to 18, in live online classes in English: Python first, then Java, web development or the Informatik of the Oberstufe. One regular mentor matches each teenager\'s pace and accent. They sit beside school Informatik rather than replace it, after school or at weekends, with fifteen to twenty teenagers in a class or one teenager alone.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for teenagers in Germany',
    lede: 'A general course for any teenager who wants to code properly, one that follows school Informatik up to Klasse 10, and one for the Oberstufe and the Abitur.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'CTE / 01', title: 'Python for Teens', note: 'Ages 13 to 18. From the first variable to files, classes and a real project, at whatever pace the teenager can keep up with school.' },
      { course: 'informatik-companion-course-klasse-5-10', code: 'CTE / 02', title: 'Informatik Companion, Klasse 5 to 10', note: 'Alongside Informatik at school: algorithms, data, networks and programming, mapped to what the Land actually teaches, in English.' },
      { course: 'informatik-abitur-course-java-python', code: 'CTE / 03', title: 'Informatik Oberstufe and Abitur', note: 'Java and Python for the Einführungsphase and the Qualifikationsphase: objects, data structures, databases and automata.' }
    ]
  },

  sections: [
    {
      id: 'lander',
      eyebrow: 'Informatik in Klasse 7 to 10',
      h2: 'How much Informatik does a teenager get at school in each German Land?',
      lede: 'The answer changes at the Land border. The Gesellschaft für Informatik collects the rules of all sixteen Länder every year, and its 2026/27 Informatik-Monitor is the clearest single source for the years from Klasse 7 to Klasse 10.',
      body: [
        { kind: 'table', numCols: [], caption: 'Informatik in the lower secondary years, Land by Land, as reported for 2026/27', head: ['Land', 'What the Informatik-Monitor reports'], rows: [
          ['Baden-Württemberg', 'Compulsory Informatik und Medienbildung across school types from 2025/26, starting in Klasse 5 and 6 and growing a year at a time'],
          ['Bayern', 'Mittelschule: one lesson a week in Klasse 5 to 10. Gymnasium: an Informatik focus in Klasse 6 and 7, compulsory Informatik in Klasse 9 and 10 on the NTG branch'],
          ['Berlin', 'A one-hour course, ITG, in Klasse 7 or 8; otherwise an elective'],
          ['Brandenburg', 'Elective only, for example in Klasse 9 and 10 at a Gymnasium'],
          ['Bremen', 'No Informatik in the curriculum before the Oberstufe in 2026/27; compulsory at all schools from 2027/28'],
          ['Hamburg', 'Four compulsory weekly hours since 2025/26, which each school spreads over Klasse 7 to 10'],
          ['Hessen', 'Nothing compulsory; an elective from Klasse 7 at a Gymnasium'],
          ['Mecklenburg-Vorpommern', 'Informatik und Medienbildung in Klasse 5 to 10 at every school type, at least one hour a week'],
          ['Niedersachsen', 'Compulsory in Klasse 9 and 10 at every general school type since 2024/25'],
          ['Nordrhein-Westfalen', 'Compulsory in Klasse 5 and 6 at every general school type'],
          ['Rheinland-Pfalz', '21 profile schools teach it in Klasse 5; compulsory at all schools from 2028/29'],
          ['Saarland', 'Gemeinschaftsschule and nine-year Gymnasium: two hours in Klasse 7 and 8, one hour in Klasse 9 and 10'],
          ['Sachsen', 'One hour a week in Klasse 7 to 10, at Oberschule and Gymnasium'],
          ['Sachsen-Anhalt', 'Sekundarschule and Gemeinschaftsschule: one hour a week in Klasse 6 to 10; Gymnasium elective only'],
          ['Schleswig-Holstein', 'Compulsory at all school types since 2024/25, four weekly hours in total across Klasse 7 to 10'],
          ['Thüringen', 'Medienbildung und Informatik since 2024/25, now in Klasse 5 to 7 and reaching Klasse 10 in 2029/30']
        ] },
        { kind: 'source', html: 'Source: Gesellschaft für Informatik, Informatik-Monitor 2026/27, one page per Land and the national overview, read on 2 November 2026. The Monitor compiles each Land\'s own ordinances. The short wording in the right-hand column is ours.' },
        { kind: 'two', mt: true,
          leftH3: 'What the table means for a fifteen year old',
          left: [
            'A teenager in Hamburg or Schleswig-Holstein will have met four hours of compulsory Informatik somewhere between Klasse 7 and 10. One in Nordrhein-Westfalen had theirs in Klasse 5 and 6 and may have nothing more until the Oberstufe. One at a Gymnasium in Hessen or Brandenburg may never have had a compulsory lesson at all.',
            'According to the national overview of the Monitor, no Informatik is required of every pupil in six Länder: Berlin, Brandenburg, Bremen, Hessen, Rheinland-Pfalz and Sachsen-Anhalt.'
          ],
          rightH3: 'What one hour a week can and cannot do',
          right: [
            'Even in the Länder that teach the most, one or two lessons a week shared with thirty classmates leaves little time to write and debug a program of any size. School lays the ground; fluency comes from hours at the keyboard.',
            'That is the gap a teenager\'s coding class fills. Ours follows what the Land teaches when a learner asks for it, and otherwise goes as far as the teenager wants to go.'
          ] }
      ]
    },
    {
      id: 'oberstufe',
      tint: 'tint',
      eyebrow: 'From Klasse 10 to the Abitur',
      h2: 'Does Informatik count in the Oberstufe and the Abitur?',
      lede: 'Yes, where the school offers it. The KMK places Informatik in the same field of subjects as maths and the sciences, and many Länder let it be taken as a Grundkurs or a Leistungskurs.',
      body: [
        { kind: 'two',
          leftH3: 'The two phases',
          left: [
            'KMK rules divide the Oberstufe into two parts: a one-year Einführungsphase followed by a two-year Qualifikationsphase. The marks that count towards the Abitur come from the four half-years of the Qualifikationsphase, called Block I, and from the Abitur exams themselves, Block II.',
            'Before that comes Klasse 10, the year of the Mittlerer Schulabschluss. Berlin awards the MSA after Klasse 10, and Nordrhein-Westfalen sets central ZP10 exams at the end of Klasse 10 in German, maths and English; the decree for the 2027 exams is already published.'
          ],
          rightH3: 'Who actually takes Informatik',
          right: [
            'The Informatik-Monitor 2026/27 puts the national figure at about 15 percent of pupils taking Informatik in the Qualifikationsphase. In Sachsen and Mecklenburg-Vorpommern it is about half; in Baden-Württemberg, Niedersachsen and Bremen it is roughly one pupil in twelve.',
            'In Nordrhein-Westfalen Informatik can be taken in the Qualifikationsphase as a three-hour Grundkurs or a five-hour Leistungskurs, and the written Abitur in Informatik is done without a computer. Programming on paper is a skill of its own, and one we practise.'
          ] },
        { kind: 'table', mt: true, numCols: [1], caption: 'How the KMK turns a school grade into Oberstufe points', head: ['Grade (Note)', 'Points', 'In words'], rows: [
          ['1', '15, 14 or 13', 'sehr gut'],
          ['2', '12, 11 or 10', 'gut'],
          ['3', '9, 8 or 7', 'befriedigend'],
          ['4', '6, 5 or 4', 'ausreichend'],
          ['5', '3, 2 or 1', 'mangelhaft'],
          ['6', '0', 'ungenügend']
        ] },
        { kind: 'source', html: 'Source: KMK, Vereinbarung zur Gestaltung der gymnasialen Oberstufe und der Abiturprüfung, decision of 7 July 1972 as amended on 6 June 2024, section 9.2 and Anlagen 3 and 4; KMK page on Sekundarstufe II; berlin.de, Prüfungen und Abschlüsse; NRW Ministry of Schools, Zentrale Prüfungen 10. Read on 2 and 3 November 2026. The grade names in the last column are the standard German ones.' },
        { kind: 'p', mt: true, html: 'The same KMK agreement says Block I is worth at most 600 points and Block II at most 300, so the Abitur total can reach 900, and at least 300 are needed to pass. It also prints a formula and a table that turn the total into the average grade on the certificate. A teenager who codes can check one against the other, which is exactly the project below. We teach alongside school and award no grades; the school course and the Abitur are the ones that count.' }
      ]
    },
    {
      id: 'project',
      eyebrow: 'A project on a real rule',
      h2: 'Can a teenager write a program that reproduces the official Abitur grade table?',
      lede: 'Anlage 4 of the KMK agreement gives the average grade as five and two thirds minus the total points divided by 180, and then prints a table of 31 rows from 900 points down to 300. A program that follows the formula should match the table at every one of those 601 whole scores. The first attempt does not.',
      body: [
        { kind: 'two',
          leftH3: 'The task',
          left: [
            'Write a function that takes the total points, a whole number from 300 to 900, and returns the average grade with one decimal, exactly as the table prints it. Then test the function against every score in every band of the table.',
            'Typing the 31 bands by hand invites mistakes, so the program builds them: the top band is 823 to 900, then each band is 18 points lower than the one above, down to 301 to 318, and 300 alone gives 4.0. We compared this list with the table in the KMK document line by line and they agree.'
          ],
          rightH3: 'What a teenager learns',
          right: [
            'How to turn a written rule into code, how to test that code against a published source rather than against your own expectations, and why "round to one decimal" is not always what a rule means.',
            'None of this needs an account, an AI tool or anything beyond Python itself.'
          ] },
        { kind: 'code', label: 'Version 1: the formula with Python\'s round()', lang: 'Python', code: V1, note: 'It prints <code>Scores checked: 601  Mismatches: 320</code> and <code>First mismatch: 823 points -&gt; 1.1</code>.' },
        { kind: 'p', mt: true, html: 'More than half of the 601 scores come out wrong. At 823 points the formula gives 1.094, Python rounds it to 1.1, and the table says 1.0. The table does not round: it cuts the number off after the first decimal. There is a second problem at the top. At 900 points the formula gives 0.67, but there is no grade better than 1.0, so the table stops there.' },
        { kind: 'code', label: 'Version 2: cut off, in whole numbers, and cap at 1.0', lang: 'Python', code: V2, note: 'Run after Version 1 in the same file. It prints <code>Scores checked: 601  Mismatches: 0</code>, then <code>900 points -&gt; 1.0</code>, <code>823 points -&gt; 1.0</code>, <code>822 points -&gt; 1.1</code> and <code>300 points -&gt; 4.0</code>.' },
        { kind: 'p', mt: true, html: 'Version 2 multiplies the formula by ten and keeps it in whole numbers: ten times five and two thirds minus E over 180 is 1,020 minus E, divided by 18. Integer division with <code>//</code> cuts off the remainder exactly, with none of the tiny errors that decimal fractions carry inside a computer, and <code>max(10, ...)</code> stops the grade at 1.0. Every one of the 601 scores now matches the KMK table.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Predict first.</strong> Before running Version 1, guess how many scores it will get wrong. Most teenagers guess a handful.',
          '<strong>Find the pattern.</strong> Print the first ten mismatches. Which part of each band goes wrong, the top or the bottom, and why?',
          '<strong>Try a third way.</strong> Replace <code>round</code> with <code>int(n * 10) / 10</code> and test again. Does it fix both problems, or only one?',
          '<strong>Going further.</strong> Write the opposite function: given an average such as 2.3, return the lowest total that earns it. Test it on every band.'
        ] },
        { kind: 'source', html: 'Formula and table: KMK, Vereinbarung zur Gestaltung der gymnasialen Oberstufe und der Abiturprüfung, Anlage 4, as amended on 6 June 2024, read on 3 November 2026. The code, the band list, the counts and the practice tasks are our own. A real Abitur certificate is issued by the school under the Land\'s own rules.' }
      ]
    },
    {
      id: 'contests',
      tint: 'tint',
      eyebrow: 'Contests for teenagers',
      h2: 'Which coding competitions can a teenager in Germany enter in 2026 and 2027?',
      lede: 'The Bundesweite Informatikwettbewerbe, BWINF, run a ladder that starts with a quiz and ends at the International Olympiad in Informatics, which Germany hosts in 2027.',
      body: [
        { kind: 'table', numCols: [], caption: 'The BWINF ladder for teenagers, with the organiser\'s own 2026 and 2027 dates', head: ['Contest', 'Who it is for', 'Dates'], rows: [
          ['Jugendwettbewerb Informatik', 'Levels Bronze for Klasse 5 and 6, Silber for 7 to 9, Gold from Klasse 10', 'Round 3, with the Bundeswettbewerb: entries by 23 November 2026'],
          ['Bundeswettbewerb Informatik, 45th', 'Young people up to 21 who are not yet studying or working', 'Round 1: 1 September to 23 November 2026; round 2: early 2027 to April 2027; round 3: September 2027'],
          ['International Olympiad in Informatics', 'The German team, chosen from the top finishers of the Bundeswettbewerb', '12 to 19 September 2027, Hasso-Plattner-Institut, Potsdam']
        ] },
        { kind: 'source', html: 'Source: bwinf.de, pages on the Jugendwettbewerb, the Bundeswettbewerb and IOI 2027, read on 2 November 2026. Round 1 of the Bundeswettbewerb allows group work; round 2 must be done alone.' },
        { kind: 'p', mt: true, html: 'We are not connected with BWINF and never reuse its tasks. Our mentors invent fresh problems in a similar spirit: read a precise statement, find an algorithm, prove to yourself that it handles every case, then write it up so that someone else can follow. A teenager who can do that for the Abitur table above is already practising the habit these contests reward. Our <a class="ag-inline-link" href="/courses/german-informatics-competitions-course-biber-bwinf-bwki">German informatics competitions course</a> works through it step by step.' }
      ]
    },
    {
      id: 'tools',
      eyebrow: 'AI and age',
      h2: 'Do teenagers need ChatGPT or Claude for our coding classes?',
      lede: 'Not in our teen classes. They are built so that a thirteen year old needs no account with any AI provider.',
      body: [
        { kind: 'two',
          leftH3: 'What the providers say',
          left: [
            'OpenAI\'s terms set 13 as the minimum age for ChatGPT and require a parent\'s or guardian\'s permission under 18. Anthropic\'s terms make Claude available to adults of 18 and over only. Our <a class="ag-inline-link" href="/ai-tools-age-guide">AI tools age guide</a> quotes each provider\'s terms in full, with the date we read them.'
          ],
          rightH3: 'What we do instead',
          right: [
            'Teenagers write their programs themselves and the mentor reads every line with them. When AI comes up, it comes up as something to build and question, in plain Python, never as a tool that writes the homework. Courses that use adult-only tools are kept for learners of 18 and over.'
          ] }
      ]
    },
    {
      id: 'times',
      tint: 'tint',
      eyebrow: 'Class times',
      h2: 'What time are teen coding classes in Germany?',
      lede: 'Mostly after school on weekdays, or on a weekend. The mentor teaches from India, where the clock is ahead of Germany all year.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample German class times for teenagers and the same moment in India', head: ['Germany', 'India, winter (to 28 March 2027)', 'India, summer (from 28 March 2027)'], rows: [
          ['14:15', '18:45', '17:45'],
          ['16:15', '20:45', '19:45'],
          ['Saturday 11:30', '16:00', '15:00'],
          ['Sunday 14:00', '18:30', '17:30']
        ] },
        { kind: 'source', html: 'Germany keeps Central European Time, UTC+1, in winter and summer time, UTC+2, from the end of March, under the Einheitenzeitgesetz. The clocks went back on 25 October 2026 and go forward again on 28 March 2027. India stays on UTC+5:30, so it is 4 hours 30 minutes ahead in winter and 3 hours 30 minutes in summer.' },
        { kind: 'p', mt: true, html: 'These are examples, not fixed batches. When you book the free first class you choose a time in your own German clock. Many teenagers move to a weekend slot in the weeks before Klausuren or the ZP10, and a one-to-one learner can agree that with the mentor at short notice.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'From a first program to Oberstufe-level code',
    lede: 'The milestones we use to place a teenager and to report progress to parents. They are ours, not a school standard.',
    table: { caption: 'Coding milestones for teenagers (ours)', head: ['Stage', 'Typical start', 'The teenager can'], rows: [
      ['1. Python basics', 'Month 1', 'Use variables, loops and conditions to solve a small puzzle'],
      ['2. Functions and tests', 'Months 2 to 3', 'Split a problem into functions and test each one, like the Abitur table above'],
      ['3. Data and files', 'Months 4 to 5', 'Read a CSV file, count and sort what is in it'],
      ['4. Objects and Java', 'Months 6 to 8', 'Write classes in Python or Java, as the Oberstufe expects'],
      ['5. A project', 'Months 9 and up', 'Plan, build and explain a program of their own choice']
    ] },
    left: { h3: 'For teenagers', ps: [
      'Test your code against something you did not write yourself.',
      'If a rule says one decimal, find out whether it rounds or cuts off.'
    ] },
    right: { h3: 'For parents', ps: [
      'Ask your teenager to show you a program running, not a certificate.',
      'Progress in coding is uneven. A week of no visible progress is often the week before a breakthrough.'
    ] }
  },

  catalogue: {
    eyebrow: 'More for teenagers',
    h2: 'Nine more courses for teenagers in Germany',
    lede: 'All nine are taught live and in English, and a teenager keeps the same mentor whether they join a class or learn alone.',
    bands: [
      { num: 'I', h3: 'Languages', sub: 'Ages 13 to 18', courses: [
        { code: 'CTE / LANG / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'The language of Oberstufe Informatik in many Länder.' },
        { code: 'CTE / LANG / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Pages that react, and small browser games.' },
        { code: 'CTE / LANG / 03', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ for teens', blurb: 'The contest language of the olympiad route.' }
      ] },
      { num: 'II', h3: 'Building things', sub: 'Ages 13 to 18', courses: [
        { code: 'CTE / BUILD / 01', slug: 'full-stack-web-development-teens-masterclass', title: 'Full-stack web for teens', blurb: 'A whole website, front to back.' },
        { code: 'CTE / BUILD / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Models built and tested in Python.' },
        { code: 'CTE / BUILD / 03', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub for teens', blurb: 'Saving and sharing code the way teams do.' }
      ] },
      { num: 'III', h3: 'Contests and exams', sub: 'Ages 13 to 19', courses: [
        { code: 'CTE / EXAM / 01', slug: 'german-informatics-competitions-course-biber-bwinf-bwki', title: 'Biber, BWINF and BWKI', blurb: 'Original problems in the style of the German contests.' },
        { code: 'CTE / EXAM / 02', slug: 'abitur-mathematics-course-in-english', title: 'Abitur maths in English', blurb: 'Analysis, geometry and Stochastik for the Abitur.' },
        { code: 'CTE / EXAM / 03', slug: 'ib-diploma-computer-science-course', title: 'IB Computer Science', blurb: 'For teenagers on the IB Diploma in Germany.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live coding classes work for teenagers in Germany',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'After school', l: 'From about 14:00 German time, once lessons end.' },
      { time: 'Weekends', l: 'Late mornings and early afternoons, Saturday or Sunday.' },
      { time: 'One to one', l: 'Agreed with the mentor, and moved around Klausuren.' }
    ],
    cells: [
      { h3: 'Typing, not watching', p: 'The teenager writes and runs the code in every class.' },
      { h3: 'Checked against sources', p: 'Programs are tested against real rules and data.' },
      { h3: 'English that fits', p: 'The mentor adjusts speed and wording to the learner.' },
      { h3: 'One mentor', p: 'A familiar face every week, who learns the teenager\'s habits.' },
      { h3: 'No adult-only tools', p: 'Nothing that a provider restricts to 18 and over.' },
      { h3: 'Group or alone', p: 'Fifteen to twenty teenagers, or one with a mentor.' }
    ]
  },

  projectsH2: 'What our teenage students have built',
  projectsLede: 'A few projects by our students around the world are shown below; the <a class="ag-inline-link" href="/student-labs">student labs</a> page collects many more.',
  reviewsLede: 'What students and parents have written about us on Google, as they wrote it.',

  fees: {
    h2: 'Fees for teen coding classes in Germany',
    lede: 'Each month of classes means eight live lessons for one fee. We show that fee in euro, converted at the reference rate of the European Central Bank, but the payment itself goes through in US dollars, and your bank does the conversion, so your statement may show a slightly different euro amount.',
    free: ['A free first class', 'A short coding task at the right level', 'No card asked for'],
    group: ['Fifteen to twenty teenagers of a similar level', 'One regular mentor', 'Two classes a week', 'Pay monthly, stop when you like'],
    one: ['One teenager, one mentor', 'A plan built around school', 'Times agreed together']
  },

  faq: {
    eyebrow: 'Parents and teenagers ask',
    h2: 'Coding classes for teens in Germany: common questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. Every class is live and taught in English only, by a mentor who matches the teenager\'s pace and accent. For a pupil at a German school that means coding and English practice in the same hour.' },
      { q: 'My teenager has never coded. Is 15 too late to start?', a: 'Not at all. Our teen Python course starts from the first line, and teenagers usually move faster than younger children because they already know the maths and logic school has taught them.' },
      { q: 'Does my Land teach Informatik in Klasse 7 to 10?', a: 'It depends on the Land. According to the Informatik-Monitor 2026/27, Hamburg and Schleswig-Holstein require four hours across Klasse 7 to 10 and Sachsen one hour a week, while Berlin, Brandenburg, Bremen, Hessen, Rheinland-Pfalz and Sachsen-Anhalt have no Informatik that is compulsory for everyone. The table on this page lists all sixteen.' },
      { q: 'Will your classes help with Informatik at school?', a: 'Yes, if the teenager wants that. The mentor can follow the school topics, from algorithms in Klasse 7 to Java classes in the Qualifikationsphase. We teach alongside school and give no grades; the school course is the one that counts.' },
      { q: 'Which language should a teenager learn first?', a: 'Python, in most cases. It is short to write and easy to read. Many Oberstufe Informatik courses use Java, so a teenager heading that way usually adds Java after a few months of Python.' },
      { q: 'Can a teenager enter the Bundeswettbewerb Informatik?', a: 'Yes. BWINF says young people up to 21 who are not yet studying or working may take part. Round 1 of the 45th Bundeswettbewerb runs from 1 September to 23 November 2026, and group work is allowed in that round. We are not connected with BWINF.' },
      { q: 'Does my teenager need a ChatGPT or Claude account?', a: 'No. Our teen classes need no AI account at all. OpenAI\'s terms require a parent\'s permission under 18 and Anthropic\'s terms restrict Claude to adults, so we keep adult-only tools out of every class for under-18s.' },
      { q: 'When are the classes in German time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Most teenagers come after school from about 14:00, or at the weekend.' },
      { q: 'How are fees paid from Germany?', a: 'The fee is shown on this page in euro at the European Central Bank reference rate and taken in US dollars, which your bank converts. Nobody pays for the first class, and we ask for no card.' },
      { q: 'Is it a group class or one to one?', a: 'Either. Group classes have fifteen to twenty teenagers of a similar level with one mentor; one-to-one classes follow a single teenager\'s plan and timetable.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for teenagers and families in Germany.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Every page we have written for Germany.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Help with school Informatik, in German.' },
      { href: '/abitur-maths-in-english', label: 'Abitur maths in English', p: 'The structure of the maths Abitur, explained.' },
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning in Germany', p: 'Models built from first principles, from 13.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Minimum ages from each provider\'s own terms.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What happens in a live class.' }
    ]
  },

  start: {
    h2: 'Book a free first class for your teenager',
    lede: 'In the first class the mentor finds out what the teenager already knows and what they would like to build, gives them a short task at that level and suggests a course, all in English and at their speed.',
    readFirst: 'If you would rather read more first, see <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or look through <a class="ag-inline-link" href="/courses">all our courses</a>.',
    note: 'Every class is live online in English, with mentors based in India. WhatsApp is the fastest way to reach us, in English.',
    formNote: 'The first class is free and no card is needed.'
  },

  footer: {
    cols: [
      { h4: 'Teenagers', links: [
        { href: '/courses/python-complete-masterclass-teens', label: 'Python for teens' },
        { href: '/courses/java-programming-masterclass-for-teens', label: 'Java for teens' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/abitur-maths-in-english', label: 'Abitur maths in English' },
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning' }
      ] }
    ],
    bottomRight: 'Cut off, do not round'
  },

  personalityCss: `
.ag-root.ag-cte .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-cte .ag-capsule { border-left-width: 5px; }
.ag-root.ag-cte .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-cte .ag-table td:first-child { font-weight: 600; }
.ag-root.ag-cte .ag-code-head b { text-transform: uppercase; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (16 Land pages and the national overview); KMK, Vereinbarung zur Gestaltung der gymnasialen Oberstufe und der Abiturprüfung (as amended 6 June 2024); KMK Sekundarstufe II page; berlin.de Prüfungen und Abschlüsse; NRW Zentrale Prüfungen 10; bwinf.de; providers\' terms via our AI tools age guide; Einheitenzeitgesetz. Read 2 and 3 November 2026.',
    localProject: 'Cut off, do not round: an original Python project that turns Abitur total points into the average grade with the KMK formula N = 5 2/3 - E/180 and tests it against all 601 whole scores in the 31 bands of the KMK table (Anlage 4). round() gives 320 mismatches, first at 823 points; whole-number tenths (1020 - E) // 18 capped at 1.0 give 0. Lesson family: a formula against the official table it must reproduce: truncation, not rounding, and a cap.',
    requiredMentions: ['Scores checked: 601  Mismatches: 320', 'First mismatch: 823 points -&gt; 1.1', 'Scores checked: 601  Mismatches: 0', '(1020 - points) // 18', 'four hours across Klasse 7 to 10 and Sachsen one hour a week', 'Cut off, do not round', 'Version 2 multiplies the formula by ten', 'a one-year Einführungsphase followed by a two-year Qualifikationsphase'],
    sources: [
      { claim: 'Informatik rules for each Land, 2026/27; national uptake about 15 percent.', url: 'https://informatik-monitor.de/' },
      { claim: 'Oberstufe points key, Block I 600, Block II 300, Anlage 4 formula and table.', url: 'https://www.kmk.org/fileadmin/Dateien/veroeffentlichungen_beschluesse/1972/1972_07_07-VB-gymnasiale-Oberstufe-Abiturpruefung.pdf' },
      { claim: 'Einführungsphase and Qualifikationsphase.', url: 'https://www.kmk.org/themen/allgemeinbildende-schulen/bildungswege-und-abschluesse/sekundarstufe-ii-gymnasiale-oberstufe-und-abitur.html' },
      { claim: 'ZP10 in German, maths and English; 2027 decree published.', url: 'https://www.standardsicherung.schulministerium.nrw.de/zentrale-pruefungen-10' },
      { claim: 'Jugendwettbewerb levels, Bundeswettbewerb dates and eligibility, IOI 2027 in Potsdam.', url: 'https://bwinf.de/' }
    ],
    rejectedClaims: [
      'Any promise that our classes raise school grades or Abitur results: none made.',
      'Which Klasse is compulsory this year in Baden-Württemberg and Thüringen, where Informatik is growing year by year: not stated beyond the Monitor\'s own words.',
      'Any affiliation with the KMK, the Gesellschaft für Informatik, BWINF or a Land ministry: none.',
      'Use of ChatGPT or Claude in teen classes: none.',
      'German-language teaching: we teach in English only, and the page says so.'
    ]
  }
};
