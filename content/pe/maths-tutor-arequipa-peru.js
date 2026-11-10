// SHIP: market (city, maths) | a maths tutor for Arequipa, live online in English, in a region that leads ENLA | Benford's law: leading digits against log10(1 + 1/d), and round amounts that bend the curve
'use strict';
// Maths tutor in Arequipa, Peru (ag- city page, Peru cluster row PE059; alloc: cities, mta, #7B2436). priceSubject 'maths'.
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; timing flexible (2026-11-08); USD fees
// only through the template's data-price anchors.
// Angle: Arequipa already does well in national maths results, so families who search for a tutor want stretch as much
// as repair: secundaria depth, the ONEM, and maths explained in English. The lesson uses the regional government's own
// open file of science projects funded by Prociencia, and only the first digit of each amount (no amount is printed).
// Sources (research folder ~/Desktop/SkyCoders/keyword-research-2026-09/pe/, quotes string-matched in raw files):
//  - INEI Censos Nacionales 2025, Cuadro 1 (places.tsv): department Arequipa 1,814,554; province Arequipa 1,382,600;
//    INEI Lib1539 Cuadro N° 1.9: Arequipa city 1,008,290 (2017). Never summed.
//  - MINEDU ENLA 2025 news (FACTS 62): "Moquegua, Tacna y Arequipa continúan liderando los logros de aprendizaje en todo
//    el país."; ENLA 2024 news (n-enla2024/text.txt): "Tacna, Moquegua y Arequipa se mantienen como las regiones con
//    mayores logros de aprendizaje"; ENLA 2025 grades (FACTS 59).
//  - CNEB (FACTS 55, 56, 57, 39, 41): four maths competencies, competency 23 "Resuelve problemas de cantidad"; primaria
//    "Matemática 5 5 4 4 4 4"; secundaria JER 4, JEC 6.
//  - ONEM 2026 (FACTS 99 to 108; UGEL 06 oficio 164-2026; El Peruano 11 October 2026): XXII ONEM, school stage Wednesday
//    8 July 2026, levels 1 (1° and 2°), 2 (3° and 4°), 3 (5°), national stage 11 October 2026, more than 1.7 million.
//  - EF EPI 2025 (ef_peru.raw): Arequipa city 512 moderate; Lima 555 high.
//  - Time (timezone.tsv): America/Lima UTC-5 all year; India 10 h 30 min ahead.
//  - Data: Gobierno Regional de Arequipa (GORE Arequipa), "Proyectos Cofinanciados por Prociencia en Arequipa",
//    Plataforma Nacional de Datos Abiertos, https://www.datosabiertos.gob.pe/dataset/proyectos-cofinanciados-por-prociencia-en-arequipa,
//    licence odc-by ("Open Data Commons Attribution License"), modified 2025-08-22. Description: "Este dataset contiene el
//    registro de proyectos de investigación científica financiados por Prociencia en la región Arequipa." File
//    "Proyectos cofinanciados por ProCiencia 2013-2024.xlsx" saved as prociencia-arequipa.xlsx (2,796,282 bytes, sha256
//    9d2d3b34a8a36c8b...): 276 project rows, years 2013 to 2024 (2022 most, 54), 194 of type INVESTIGACIÓN CIENTÍFICA,
//    268 rows in soles and 8 in other currencies. We exported year, type, currency and amount only to
//    prociencia-arequipa.csv (ours); person names in the file are never printed, nor is any amount.
// Our own calculations (scratchpad pe/c2/ma/v1.py, v2.py; python3 -I, Python 3.14.8):
//  v1: Amounts: 270 / 1 80 29.6% / 2 40 14.8% / 3 45 16.7% / 4 35 13.0% / 5 30 11.1% / 6 11 4.1% / 7 6 2.2% / 8 11 4.1% /
//      9 12 4.4%
//  v2: seen against Benford for 1..9 (0.296/0.301, 0.148/0.176, 0.167/0.125, 0.130/0.097, 0.111/0.079, 0.041/0.067,
//      0.022/0.058, 0.041/0.051, 0.044/0.046) / Total gap: 0.213 / Multiples of 10,000: 109 of 270
// Lesson family: Benford's law (leading digits of real-world amounts follow log10(1 + 1/d)); a small, rule-shaped
// sample with round amounts bends the curve, so a mismatch is a question, never an accusation.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'import csv',
  '',
  'counts = [0] * 10',
  'with open("prociencia-arequipa.csv", encoding="utf-8") as fh:',
  '    for row in csv.DictReader(fh):',
  '        amount = float(row["monto"] or 0)',
  '        if amount > 0:',
  '            first = int(str(amount).lstrip("0.")[0])',
  '            counts[first] += 1',
  '',
  'total = sum(counts)',
  'print("Amounts:", total)',
  'for d in range(1, 10):',
  '    print(d, counts[d], f"{100 * counts[d] / total:.1f}%")'
].join('\n');

const V2 = [
  'import csv',
  'import math',
  '',
  'counts = [0] * 10',
  'round_ones = 0',
  'with open("prociencia-arequipa.csv", encoding="utf-8") as fh:',
  '    for row in csv.DictReader(fh):',
  '        amount = float(row["monto"] or 0)',
  '        if amount > 0:',
  '            counts[int(f"{amount:e}"[0])] += 1',
  '            if amount % 10000 == 0:',
  '                round_ones += 1',
  '',
  'total = sum(counts)',
  'gap = 0',
  'for d in range(1, 10):',
  '    expected = math.log10(1 + 1 / d)',
  '    seen = counts[d] / total',
  '    gap += abs(seen - expected)',
  '    print(d, f"seen {seen:.3f}", f"Benford {expected:.3f}")',
  'print("Total gap:", round(gap, 3))',
  'print("Multiples of 10,000:", round_ones, "of", total)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'cities', label: 'Arequipa: maths tutor in English' },
  slug: 'maths-tutor-arequipa-peru',
  code: 'mta',
  accent: '#7B2436',
  accentRationale: 'Maths tutor in Arequipa: a volcanic wine red #7B2436 allocated to this row, deeper than the coding page\'s crimson so the two Arequipa pages read as siblings, above 4.5:1 on all papers',
  pageType: 'market',
  market: PE_EN,
  priceSubject: 'maths',
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Maths tutor in Arequipa, Peru',
  title: 'Maths Tutor in Arequipa, Peru: Live Online, in English',
  description: 'A maths tutor for Arequipa learners from primaria to adult, live online in English: CNEB maths, ONEM stretch, and a Benford\'s law lesson on Arequipa open data.',
  ogDescription: 'Live online maths tutoring in English for Arequipa children, teenagers and adults: what the CNEB asks at each stage, stretch for strong students and the ONEM, and an original lesson on the first digits of Arequipa\'s funded science projects.',
  twitterDescription: 'Maths tutoring in Arequipa, live online in English: school maths, ONEM stretch, and a Benford\'s law lesson on local open data.',
  pageName: 'Maths Tutor in Arequipa, Peru',
  webPageDescription: 'A guide for Arequipa families and adult learners to live online maths tutoring in English, built from MINEDU CNEB and ENLA sources, ONEM 2026 documents, INEI census figures, EF EPI 2025 and an original Benford\'s law lesson on the GORE Arequipa Prociencia projects file (ODC-By).',
  courseDescription: 'Live online maths classes in English for learners in Arequipa, Peru: primaria number work, secundaria algebra, geometry and statistics, olympiad problem solving, IGCSE and university maths, in a group of fifteen to twenty or one to one, at flexible hours.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Maths tutor, Arequipa',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#results', label: 'Arequipa results' },
    { href: '#stretch', label: 'Stretch and ONEM' },
    { href: '#benford', label: 'First-digit lesson' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Arequipa &middot; Maths tutoring &middot; Live online, in English',
  h1: 'Maths tutor in Arequipa, Peru',
  lede: 'Arequipa is one of the regions that keeps topping Peru\'s national learning results, and many families who look for a maths tutor here want more than catching up: a harder problem, a deeper reason, an olympiad to aim at. This page covers what the curriculum asks in maths, how live tutoring in English works from Arequipa, how we stretch strong students, and one of our own lessons on a curious law about first digits.',
  secondaryCta: { href: '#benford', label: 'See the first-digit lesson' },
  wa: 'Hello Modern Age Coders, we are in Arequipa, Peru and would like a live online maths tutor in English. Could we book a free first class?',
  heroNote: 'Live tutoring since 2020 &middot; more than 10,000 students worldwide &middot; tutors who want to hear the reasoning, not just the answer',
  spec: [
    ['Who', 'Primaria, secundaria, university and adults'],
    ['Aim', 'Gaps closed, then real stretch'],
    ['Class', 'Fifteen to twenty students, or one to one'],
    ['Arequipa time', 'Any day, at an hour you choose'],
    ['Tutor', 'A maths mentor in India, on live video'],
    ['Trial', 'One free class with a diagnostic']
  ],
  capsuleQ: 'Short answer',
  capsule: 'Modern Age Coders offers live online maths tutoring in English to learners in Arequipa, from primaria number work to secundaria algebra, geometry and statistics, olympiad problem solving, IGCSE and university maths. Every lesson happens live over video with a real tutor, either one to one or with a class of fifteen to twenty, on whichever days and hours your family sets. Lessons follow the topics of the national curriculum, then go further for students who are ready, and every student is asked to explain how they reached an answer, not just to copy a method.',

  picks: {
    eyebrow: 'Start here in Arequipa',
    h2: 'Three maths courses Arequipa families start with',
    lede: 'A primaria course, a course for the first years of secundaria, and one for students who want competition problems. More options follow.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'AQP / M / 01', title: 'Elementary Mathematics', note: 'Grades 1 to 5 and beyond, live: place value, the four operations, fractions and early geometry, taught with pictures before rules.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'AQP / M / 02', title: 'Middle School Mathematics', note: 'For 1° to 3° de secundaria: integers, ratio, first algebra and geometry, with every step explained in English.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'AQP / M / 03', title: 'Olympiad Mathematics', note: 'For strong secundaria students who enjoy hard problems: number theory, combinatorics, geometry and proof, with original problems written by us.' }
    ]
  },

  sections: [
    {
      id: 'results',
      eyebrow: 'Arequipa and maths',
      h2: 'How does Arequipa do in national maths results?',
      lede: 'Well. MINEDU has named Arequipa among the regions with the highest learning results in two consecutive national assessments, and that changes what families ask a tutor for.',
      body: [
        { kind: 'two',
          leftH3: 'What MINEDU said, in its own words',
          left: [
            'Reporting ENLA 2024, the test of 4° de primaria, MINEDU wrote that "Tacna, Moquegua y Arequipa se mantienen como las regiones con mayores logros de aprendizaje". Reporting ENLA 2025, which tested the fourth year of primaria and the second and fifth years of secundaria, it wrote again that the three regions "continúan liderando".',
            'Those statements cover reading and maths together, and we could not reach MINEDU\'s regional result tables, so we print no Arequipa percentage.'
          ],
          rightH3: 'What that means for tutoring',
          right: [
            'A region doing well still has students who fall behind, and we help them. But in Arequipa we also meet many students who are fine in class and bored by it.',
            'For them a tutor is a source of harder questions: why a rule works, what happens at the edge of a pattern, how to prove something rather than check it on three examples.'
          ] },
        { kind: 'table', mt: true, numCols: [1], caption: 'Arequipa by INEI unit', head: ['Unit', 'Population', 'Census'], rows: [
          ['Department of Arequipa', '1,814,554', '2025, total population'],
          ['Province of Arequipa', '1,382,600', '2025, total population'],
          ['Arequipa city', '1,008,290', '2017, enumerated']
        ] },
        { kind: 'source', html: 'INEI: Censos Nacionales 2025, Indicadores demográficos, Cuadro 1 (15 September 2025), and Perfil Sociodemográfico 2017, Cuadro N° 1.9 (22 October 2017). Units overlap, so the rows are not added.' }
      ]
    },
    {
      id: 'curriculum',
      eyebrow: 'The curriculum',
      h2: 'What maths does the national curriculum ask of an Arequipa student?',
      lede: 'Arequipa follows the CNEB, which organises maths into four competencies and sets weekly hours for each stage.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Four competencies', p: 'Competency 23, "Resuelve problemas de cantidad", deals with numbers and operations. The other three cover regularity, equivalence and change (patterns and algebra), form, movement and location (geometry), and data and uncertainty (statistics and probability).' },
          { h3: 'Hours in primaria', p: 'Five hours of Matemática a week in 1° and 2° de primaria, then four a week from 3° to 6°. Each school hour, the hora pedagógica, lasts 45 minutes.' },
          { h3: 'Hours in secundaria', p: 'Four hours a week in every grade on the regular school day, six on the full school day (Jornada Escolar Completa). Maths keeps the same weight from 1° to 5°.' }
        ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Where each competency usually needs a tutor\'s help (our experience, by CNEB stage)', head: ['Competency', 'Primaria', 'Secundaria'], rows: [
          ['Quantity', 'Fractions, decimals and proportion', 'Powers, roots, percentages in context'],
          ['Regularity and change', 'Patterns and simple equations', 'Linear and quadratic functions'],
          ['Form and location', 'Area, perimeter, angles', 'Pythagoras, similarity, trigonometry'],
          ['Data and uncertainty', 'Tables and bar charts', 'Measures of centre and spread, probability']
        ] },
        { kind: 'source', html: 'Competencies and hours from MINEDU\'s national curriculum document (CNEB), area Matemática and its plan de estudios. The two right-hand columns record our tutors\' experience, not MINEDU\'s.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Language',
      h2: 'Are the maths classes in Spanish?',
      lede: 'No. Our maths classes are live, online and in English only. For Arequipa families that is usually a reason to choose us, not a barrier.',
      body: [
        { kind: 'two',
          leftH3: 'How tutors teach in English',
          left: [
            'Tutors are based in India. They write as they speak, so every word is also on the whiteboard, keep sentences short, and stop to check. A student may answer in Spanish; the tutor accepts it and gives back the English.',
            'Maths has fewer words than most subjects and they repeat constantly: numerator, equation, gradient, probability. After a few weeks they stop being English words and become maths words.'
          ],
          rightH3: 'English levels in Arequipa',
          right: [
            'In EF\'s 2025 English index Arequipa city scores 512, a moderate result, while Lima reaches 555, a high one.',
            'A moderate band means many Arequipa students follow clear, visual explanations comfortably and still benefit from patience. The free first class checks both the maths and the comfort with English.'
          ] }
      ]
    },
    {
      id: 'stretch',
      eyebrow: 'Stretch and the ONEM',
      h2: 'Can a maths tutor help an Arequipa student prepare for the ONEM?',
      lede: 'With the thinking, yes; with the organiser\'s own papers, never. The ONEM is MINEDU\'s national school maths olympiad, and students enter through their school. We are not connected with MINEDU or the ONEM.',
      body: [
        { kind: 'table', numCols: [], caption: 'ONEM 2026 at a glance, from MINEDU and UGEL documents', head: ['Item', 'ONEM 2026'], rows: [
          ['Edition', 'XXII Olimpiada Nacional Escolar de Matemática'],
          ['Levels', 'Level 1: 1° and 2°; level 2: 3° and 4°; level 3: 5° de secundaria'],
          ['School stage', 'Wednesday 8 July 2026, nationwide'],
          ['Later stages', 'UGEL, then regional, then national'],
          ['National stage', 'Sunday 11 October 2026'],
          ['Scale', 'More than 1.7 million students took part']
        ] },
        { kind: 'source', html: 'Sources: UGEL 06, Oficio Múltiple 164-2026 on the XXII ONEM; El Peruano report of 11 October 2026. We describe the contest; we never reproduce its problems or solutions.' },
        { kind: 'p', mt: true, html: 'Olympiad problems reward a few habits more than any formula: trying small cases, looking for what stays the same, counting carefully, and writing a short argument. Our <a class="ag-inline-link" href="/onem-preparation-in-english">ONEM preparation in English</a> page explains our approach in detail, and <a class="ag-inline-link" href="/math-olympiad-coaching-peru">maths olympiad coaching for Peru</a> covers the international route.' },
        { kind: 'p', html: '<strong>A problem of ours, in the olympiad spirit.</strong> How many whole numbers from 1 to 999 start with the digit 1? And how many start with 9? (Ours. Answer: 111 each, since 1, 10 to 19 and 100 to 199 give 1 + 10 + 100. So why do real-life lists of amounts so often start with 1 far more than 9? The lesson below is about exactly that.)' }
      ]
    },
    {
      id: 'benford',
      eyebrow: 'An Arequipa maths lesson',
      h2: 'Why do so many real numbers start with 1?',
      lede: 'Benford\'s law, named after the physicist Frank Benford, says that in many collections of real-world numbers about 30% begin with the digit 1 and fewer than 5% with 9. This lesson, ours, tests that idea on an Arequipa open dataset.',
      body: [
        { kind: 'two',
          leftH3: 'The law',
          left: [
            'Benford\'s law predicts that the share of numbers whose first digit is d is log10(1 + 1/d). For d = 1 that is log10(2), about 0.301; for d = 9 it is log10(10/9), about 0.046.',
            'It tends to hold for quantities that span several orders of magnitude and grow by multiplying, such as populations or amounts of money. It fails for numbers with a fixed range, like ages or exam scores.'
          ],
          rightH3: 'The data',
          right: [
            'The Gobierno Regional de Arequipa releases "Proyectos Cofinanciados por Prociencia en Arequipa" as open data, licensed ODC-By (Open Data Commons Attribution), through the national data portal. It lists 276 science and innovation projects co-financed by Prociencia from 2013 to 2024, with a funded amount for each.',
            'We exported four columns, year, type, currency and amount, to our own file prociencia-arequipa.csv. We use only the first digit of each amount; no amount and no person\'s name appears on this page.'
          ] },
        { kind: 'code', label: 'Version 1: count the first digits', lang: 'Python', code: V1, note: 'It prints: <code>Amounts: 270</code>, then <code>1 80 29.6%</code>, <code>2 40 14.8%</code>, <code>3 45 16.7%</code>, <code>4 35 13.0%</code>, <code>5 30 11.1%</code>, <code>6 11 4.1%</code>, <code>7 6 2.2%</code>, <code>8 11 4.1%</code> and <code>9 12 4.4%</code>.' },
        { kind: 'p', mt: true, html: 'The digit 1 leads 29.6% of the 270 non-zero amounts, almost exactly Benford\'s 30.1%. But 3, 4 and 5 are each well above the prediction, and 6 and 7 well below. Version 2 lines the two up, reads the first digit more safely from scientific notation, and checks one suspicion: grants set by competition rules are often round numbers.' },
        { kind: 'code', label: 'Version 2: compare with Benford, and count the round amounts', lang: 'Python', code: V2, note: 'It prints, for digits 1 to 9: <code>seen 0.296</code> against <code>Benford 0.301</code>, <code>0.148</code> against <code>0.176</code>, <code>0.167</code> against <code>0.125</code>, <code>0.130</code> against <code>0.097</code>, <code>0.111</code> against <code>0.079</code>, <code>0.041</code> against <code>0.067</code>, <code>0.022</code> against <code>0.058</code>, <code>0.041</code> against <code>0.051</code> and <code>0.044</code> against <code>0.046</code>; then <code>Total gap: 0.213</code> and <code>Multiples of 10,000: 109 of 270</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3], caption: 'First digits of the funded amounts against Benford\'s law (our calculation)', head: ['First digit', 'Amounts', 'Share seen', 'Benford share'], rows: [
          ['1', '80', '0.296', '0.301'],
          ['2', '40', '0.148', '0.176'],
          ['3', '45', '0.167', '0.125'],
          ['4', '35', '0.130', '0.097'],
          ['5', '30', '0.111', '0.079'],
          ['6', '11', '0.041', '0.067'],
          ['7', '6', '0.022', '0.058'],
          ['8', '11', '0.041', '0.051'],
          ['9', '12', '0.044', '0.046']
        ] },
        { kind: 'source', html: 'Data from the GORE Arequipa file of Prociencia co-financed projects, 2013 to 2024, under ODC-By. We did every count and share. Six rows have no positive amount; most amounts are in soles and eight rows in other currencies, which does not change the idea, because Benford\'s law does not depend on the unit.' },
        { kind: 'p', mt: true, html: 'So what happened? 109 of the 270 amounts are exact multiples of 10,000. When a call for projects offers a fixed ceiling, many applicants ask for exactly that, and a few popular ceilings starting with 3, 4 or 5 lift those digits above the curve. The sample is also small: with 270 numbers, a difference of two or three percentage points can be chance. The honest conclusion is that the data follows Benford on the digit 1, departs from it where rules shape the amounts, and proves nothing about anyone. Auditors use Benford\'s law as a reason to look closer, never as evidence on its own.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Primaria, 9 to 11.</strong> Write the populations from the table above and the ages of everyone in your family. Which list starts with 1 more often? Why might ages not follow the law?',
          '<strong>1° to 3° de secundaria.</strong> Without a calculator, show that log10(2) is between 0.3 and 0.31, using 2 to the power 10 = 1,024.',
          '<strong>4° and 5° de secundaria.</strong> Add the nine Benford shares log10(1 + 1/d). Why do they add to exactly 1? (Hint: the logarithm of a product.)',
          '<strong>Statistics students.</strong> Remove the 109 round amounts and count again. Does the gap shrink? Is 161 numbers enough to say?',
          '<strong>Going further.</strong> Multiply every amount by 3.7 and recount the first digits. Benford\'s law predicts the shares hardly move. Test it.'
        ] }
      ]
    },
    {
      id: 'ages',
      eyebrow: 'Every age',
      h2: 'What does a tutoring plan look like at each stage?',
      lede: 'Our plans move from repair to stretch at the student\'s pace. The stages below sit beside MINEDU\'s normative ages.',
      body: [
        { kind: 'table', numCols: [], caption: 'Tutoring focus by stage (our plans)', head: ['Stage', 'School years (age at 31 March)', 'Repair', 'Stretch'], rows: [
          ['Early primaria', '1° to 3° (6 to 8)', 'Place value, number bonds', 'Puzzles with patterns and shapes'],
          ['Late primaria', '4° to 6° (9 to 11)', 'Fractions and proportion', 'Counting problems, first proofs'],
          ['Early secundaria', '1° to 2° (12 and 13)', 'Negative numbers, equations', 'ONEM level 1 style reasoning'],
          ['Middle secundaria', '3° to 4° (14 and 15)', 'Functions, Pythagoras', 'Number theory, geometry proofs'],
          ['Final year', '5° (16)', 'Trigonometry, statistics', 'Logarithms, Benford-style projects'],
          ['Adults', '17 and over', 'Refreshers, university maths', 'Statistics and data maths']
        ] },
        { kind: 'p', mt: true, html: 'Students who enjoy the data side of maths often take up programming as well. Our <a class="ag-inline-link" href="/coding-classes-in-arequipa-peru">coding classes in Arequipa</a> page shows a Python project on the region\'s tourist inventory, and families comparing options may also find <a class="ag-inline-link" href="/profesor-particular-de-matematicas-online-peru">our Spanish guide to online private maths tutors</a> useful.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When are online maths classes in Arequipa?',
      lede: 'At the time your family chooses. Arequipa shares Lima\'s clock, which never changes, and the tutor fits around you.',
      body: [
        { kind: 'table', numCols: [], caption: 'Arequipa time with the tutor\'s India time (examples, not a timetable)', head: ['Arequipa', 'India', 'Date in India'], rows: [
          ['07:00', '17:30', 'Same'],
          ['10:00', '20:30', 'Same'],
          ['12:30', '23:00', 'Same'],
          ['15:30', '02:00', 'Next day'],
          ['18:00', '04:30', 'Next day']
        ] },
        { kind: 'source', html: 'Peru keeps UTC minus 5 hours without daylight saving (tz database, America/Lima); India keeps UTC plus 5 hours 30 minutes; the gap is 10 hours 30 minutes all year.' },
        { kind: 'p', mt: true, html: 'A class time agreed once does not drift, because neither country changes its clocks. You choose in Arequipa time and the tutor sees the India equivalent. Lessons carry on through school breaks unless you ask to pause, and the long summer break from January is a good time to rebuild a weak topic before the new school year.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'How an Arequipa student moves on in maths',
    lede: 'Our six stages, the same for every age, from accurate calculation to careful use of maths on real data.',
    table: { caption: 'From calculating to questioning data (ours)', head: ['Stage', 'Sign of it', 'The student can'], rows: [
      ['1. Accurate', 'Fewer slips', 'Calculate and estimate before answering'],
      ['2. Reasoned', 'Methods explained', 'Say why each step is allowed'],
      ['3. Algebraic', 'Comfortable with letters', 'Model a situation with an equation'],
      ['4. Inventive', 'Tries small cases', 'Attack an unfamiliar problem without a method given'],
      ['5. Rigorous', 'Writes proofs', 'Prove a result rather than test examples'],
      ['6. Critical', 'Questions data', 'Test a law like Benford\'s and state what it cannot show']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 6 is the first-digit lesson: noticing a pattern, testing it, and refusing to over-claim.',
      'Progress notes say what your child can now explain.'
    ] },
    right: { h3: 'For students', ps: [
      'A law that fits the digit 1 is not proven by the digit 1.',
      'Round numbers usually mean a rule was involved.'
    ] }
  },

  catalogue: {
    eyebrow: 'More maths courses',
    h2: 'Nine more maths courses for Arequipa learners',
    lede: 'By stage, youngest first. Every course is live, in English, with one tutor, in a group or privately.',
    bands: [
      { num: 'I', h3: 'Primaria', sub: 'Ages 4 to 15', courses: [
        { code: 'AQP / M / P1', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus and mental maths', blurb: 'From beads to mental calculation, for children.' },
        { code: 'AQP / M / P2', slug: 'early-math-foundations', title: 'Early maths', blurb: 'Concrete number play for ages 4 to 7.' },
        { code: 'AQP / M / P3', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Maths explored in Python, ages 10 to 15.' }
      ] },
      { num: 'II', h3: 'Secundaria', sub: 'Ages 11 to 18', courses: [
        { code: 'AQP / M / S1', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Pre-algebra and Algebra 1, rebuilt step by step.' },
        { code: 'AQP / M / S2', slug: 'complete-high-school-mathematics-mastery', title: 'High school maths', blurb: 'Algebra to calculus across the final years.' },
        { code: 'AQP / M / S3', slug: 'igcse-mathematics-mastery', title: 'IGCSE maths', blurb: 'Core and Extended for Cambridge-programme schools.' }
      ] },
      { num: 'III', h3: 'University and adults', sub: 'Ages 17 and over', courses: [
        { code: 'AQP / M / U1', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Data, distributions and tests.' },
        { code: 'AQP / M / U2', slug: 'data-analytics-mathematics-masterclass', title: 'Maths for data science', blurb: 'Statistics and linear algebra for analysis and ML.' },
        { code: 'AQP / M / U3', slug: 'college-mathematics-complete-masterclass', title: 'University maths', blurb: 'Calculus, linear algebra and analysis.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'How live maths tutoring works from Arequipa',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Morning', l: 'Arequipa mornings fall in the Indian evening, an unhurried time.' },
      { time: 'After class', l: 'Later slots are open too; pick what works at home.' },
      { time: 'Private', l: 'Your own hour with one tutor, shifted around school tests.' }
    ],
    cells: [
      { h3: 'Same tutor', p: 'One tutor who learns how the student thinks.' },
      { h3: 'Written and spoken', p: 'Every word also appears on the whiteboard.' },
      { h3: 'Reasons asked for', p: 'Students explain why, not just what.' },
      { h3: 'CNEB topics', p: 'Lessons follow what school is covering.' },
      { h3: 'Stretch on request', p: 'Harder problems for students who are ready.' },
      { h3: 'Group or one to one', p: 'Fifteen to twenty students, or a single learner.' }
    ]
  },

  projectsH2: 'Projects by our older students',
  projectsLede: 'Strong maths students often go on to code. A few of their projects follow; the <a class="ag-inline-link" href="/student-labs">student labs</a> hold more.',
  reviewsLede: 'What parents and students wrote on Google.',

  fees: {
    h2: 'Maths tutoring fees in Arequipa',
    lede: 'Monthly plans, priced in US dollars and charged to your card in dollars. Your bank converts the charge to soles at its own rate, so the amount on your statement may differ slightly.',
    free: ['A free first class with a diagnostic', 'A short written plan', 'No card asked for'],
    group: ['Fifteen to twenty students of a similar level', 'The same tutor throughout', 'Two live classes a week', 'Monthly, cancel any time'],
    one: ['One student and one tutor', 'Repair and stretch in your proportion', 'Days and hours you choose']
  },

  faq: {
    eyebrow: 'Arequipa families ask',
    h2: 'Maths tutor in Arequipa: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Our maths classes are live, online and given only in English. Tutors write what they say on the whiteboard, keep a steady pace, adapt to each student\'s accent, and turn Spanish replies into English ones.' },
      { q: 'My child already does well in maths. Is a tutor still useful?', a: 'Often more so. Many Arequipa students find class easy and want harder problems. We add depth, proofs and olympiad-style reasoning beside the school topics.' },
      { q: 'Can you prepare my child for the ONEM?', a: 'We teach the reasoning the ONEM rewards with original problems of our own, never the organiser\'s papers. Students enter through their school; in 2026 the school stage was on 8 July. We are not connected with MINEDU or the ONEM.' },
      { q: 'Which school years do you cover?', a: 'All of them, from 1° de primaria to 5° de secundaria, plus IGCSE, university maths and adult refreshers. Plans follow the CNEB topics your child is meeting in class.' },
      { q: 'What time are classes?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Arequipa clocks never change, and India is ten and a half hours later: 10:00 here is 20:30 there.' },
      { q: 'How does the tutor see my child\'s working?', a: 'Students write on a whiteboard both sides can see, or hold their notebook up to the camera, and talk the tutor through each step.' },
      { q: 'Can adults in Arequipa take maths classes?', a: 'Yes. Adults refresh school maths, prepare for university courses or learn statistics for work, in adult groups or one to one.' },
      { q: 'How are fees paid?', a: 'Once a month, by card, in the US dollars shown here; the bank turns that into soles. From India, the page shows rupees instead. There is no charge for the first class.' },
      { q: 'Do you award a certificate?', a: 'Some courses finish with a completion certificate issued by us. It records the work done; it is not a Peruvian school grade, and neither MINEDU nor any university issues or recognises it.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Arequipa students and families.',
    items: [
      { href: '/coding-classes-in-arequipa-peru', label: 'Coding classes in Arequipa', p: 'Live coding for every age in the city.' },
      { href: '/online-coding-and-ai-classes-arequipa-region-peru', label: 'Arequipa region', p: 'Coding and AI across the department.' },
      { href: '/onem-preparation-in-english', label: 'ONEM preparation in English', p: 'Our approach to the national olympiad.' },
      { href: '/profesor-particular-de-matematicas-online-peru', label: 'Profesor particular de matemáticas online', p: 'The Spanish guide to online maths tutoring.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding, AI and maths in Peru', p: 'All our Peru pages.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'One live lesson, start to finish.' }
    ]
  },

  start: {
    h2: 'Book a free maths class from Arequipa',
    lede: 'The trial class begins with a short diagnostic in your child\'s current topic and ends with one harder problem. The tutor then suggests where to start and whether a group or private classes fit better.',
    readFirst: 'To read more first, see <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or the <a class="ag-inline-link" href="/courses">course list</a>.',
    note: 'Every maths class is live, online and in English, with a tutor based in India. For a quick answer, message us on WhatsApp in English.',
    formNote: 'Free, without a card or any commitment.'
  },

  footer: {
    cols: [
      { h4: 'Arequipa and maths', links: [
        { href: '/coding-classes-in-arequipa-peru', label: 'Coding in Arequipa' },
        { href: '/onem-preparation-in-english', label: 'ONEM in English' },
        { href: '/math-olympiad-coaching-peru', label: 'Olympiad coaching' },
        { href: '/igcse-maths-tutor-peru', label: 'IGCSE maths' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Peru hub' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Count first digits before you judge'
  },

  personalityCss: `
.ag-root.ag-mta .ag-hero h1 { letter-spacing: -0.013em; }
.ag-root.ag-mta .ag-capsule { border-left-width: 6px; border-radius: 2px; }
.ag-root.ag-mta .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-mta .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-mta .ag-code-head b { letter-spacing: 0.025em; }
`,

  dossier: {
    curriculumAuthority: 'MINEDU CNEB (maths competencies, plan de estudios), ENLA 2024 and 2025 news; UGEL 06 oficio 164-2026 and El Peruano on ONEM 2026; INEI Censos Nacionales 2025 and Perfil Sociodemográfico 2017; EF EPI 2025; tz database America/Lima. Data: GORE Arequipa, Proyectos Cofinanciados por Prociencia en Arequipa, ODC-By.',
    localProject: 'Why do so many real numbers start with 1? An original Benford\'s law lesson on the GORE Arequipa Prociencia projects file (ODC-By, 276 projects 2013 to 2024): Version 1 counts first digits of 270 non-zero amounts (1 leads with 29.6%); Version 2 compares with log10(1 + 1/d) (0.296 against 0.301 for the digit 1, total gap 0.213) and finds 109 of 270 amounts are multiples of 10,000. No amount or name is printed. Lesson family: Benford\'s law and round amounts.',
    requiredMentions: ['prociencia-arequipa.csv', 'Amounts: 270', 'Total gap: 0.213', 'Multiples of 10,000: 109 of 270', '1,008,290', '1,382,600', 'Arequipa city scores 512', 'se mantienen como las regiones con mayores logros de aprendizaje', 'Count first digits before you judge'],
    sources: [
      { claim: 'Prociencia co-financed projects in Arequipa, 2013 to 2024, ODC-By.', url: 'https://www.datosabiertos.gob.pe/dataset/proyectos-cofinanciados-por-prociencia-en-arequipa' },
      { claim: 'ENLA 2025: Moquegua, Tacna and Arequipa continue to lead.', url: 'https://www.gob.pe/institucion/minedu/noticias/1390772-enla-2025-se-mantienen-avances-en-lectura-y-matematica-con-mejoras-en-las-zonas-rurales' },
      { claim: 'ENLA 2024: Tacna, Moquegua and Arequipa remain the highest-achieving regions.', url: 'https://www.gob.pe/institucion/minedu/noticias/1142140-enla-2024-532-000-escolares-de-4-de-primaria-muestran-recuperacion-sin-precedentes-en-lectura-y-matematica' },
      { claim: 'CNEB maths competencies and weekly hours.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'ONEM 2026 levels, school stage and format.', url: 'https://ofimult.ugel06.gob.pe/archivos/oficio-multiple-no-00164-2026-mineduvmgi-drelm-ugel06dir-agebre-1781620977.pdf' },
      { claim: 'ONEM 2026 national stage and participation.', url: 'https://elperuano.pe/noticia/306597-72-escolares-ganadores-de-la-olimpiada-nacional-de-matematica-seran-premiados-este-lunes-en-huampani' },
      { claim: 'Arequipa department, province and city populations.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'EF EPI 2025 Arequipa and Lima scores.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' }
    ],
    rejectedClaims: [
      'Any funded amount, total or currency figure from the Prociencia file: only first digits are used.',
      'Names of researchers or executing entities: not printed.',
      'Any suggestion that a Benford mismatch shows wrongdoing: the page says it proves nothing.',
      'An Arequipa-only ENLA percentage: regional tables blocked; only MINEDU\'s statements are quoted.',
      'Reusing the GORE tourist inventory: already the coding-classes-in-arequipa-peru project.',
      'ONEM problems or solutions: never reproduced; any connection with MINEDU or the ONEM: none.',
      'Spanish-language teaching: every class is in English.'
    ]
  }
};
