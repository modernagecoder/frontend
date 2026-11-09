// SHIP: market (en exam door, IGCSE) | IGCSE maths tutor in Peru: 0580 papers, tiers, accuracy rule and secundaria ages | repeated percentage decrease to a threshold: rounding to 3 s.f. each year moves the answer by a year
'use strict';
// IGCSE maths tutor Peru (ag- English exam door, Peru cluster row PE034, P3, hubGroup exams).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Fees render in USD from the template only (priceSubject 'maths'); no soles, no typed figure.
// Search (KEYWORDS.md): "igcse peru", "colegios cambridge en lima" (bilingual and Cambridge school families, best fit).
// Never claim Cambridge endorsement; we are not a Cambridge school or centre. The number of Cambridge schools in Peru is NOT
// known to us: the Cambridge "find a school" page is dynamic (facts-school BLOCKED.md) and no primary list was fetched, so
// the page gives no count and names no school.
// Spine: who needs an IGCSE maths tutor in Peru; what 0580 is for exams in 2025 to 2027 (papers, tiers, calculators, series);
// how IGCSE years line up with Peruvian secundaria (MINEDU normative ages, CNEB maths periods); the accuracy rule and an
// original Python lesson on it; where Spanish-speaking learners trip in English maths; the Lima clock.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/igcse-maths-tutor-peru/, fetched
// 9 November 2026 with curl -sL -A "Mozilla/5.0"; quotes grepped in the extracted text):
//  Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027, Version 3
//    https://www.cambridgeinternational.org/Images/662466-2025-2027-syllabus.pdf (syllabus-0580-2025-2027.pdf, syllabus.txt):
//    "Use this syllabus for exams in 2025, 2026 and 2027."; "Exams are available in the June and November series.";
//    "Exams are also available in the March series in India."; "The Core subject content is intended for learners targeting
//    grades C–G, and the Extended subject content is intended for learners targeting grades A*–C."; "These candidates will be
//    eligible for grades C to G." / "These candidates will be eligible for grades A* to E."; "Calculators are not allowed for
//    Paper 1 and Paper 2."; "Paper 1: Non-calculator (Core) 1 hour 30 minutes 80 marks 50%"; Paper 3 Calculator (Core) 1 hour
//    30 minutes 80 marks 50%; "Paper 2: Non-calculator (Extended) 2 hours 100 marks 50%"; Paper 4 Calculator (Extended) 2 hours
//    100 marks 50%; topics "1 Number 2 Algebra and graphs 3 Coordinate geometry 4 Geometry 5 Mensuration 6 Trigonometry
//    7 Transformations and vectors 8 Probability 9 Statistics"; AO weightings Core AO1 60–70 / AO2 30–40, Extended AO1 40–50 /
//    AO2 50–60; "We design Cambridge IGCSE syllabuses to require about 130 guided learning hours for each subject.";
//    "Private candidates can enter for this syllabus."; "Candidates can retake the whole qualification as many times as they
//    want to."; "This syllabus and the related assessment materials are available in English only."; "Candidates should give
//    non-exact numerical answers correct to 3 significant figures"; "To earn accuracy marks, candidates should avoid rounding
//    figures until they have their final answer."; "E1.17 Exponential growth and decay Use exponential growth and decay."
//    ("e.g. depreciation, population change.", C1.17 "Extended content only."); "Knowledge of logarithms is not required.";
//    "4 Calculate with simple and compound interest."; exclusions "Cambridge IGCSE (9–1) Mathematics (0980)", "Cambridge IGCSE
//    International Mathematics (0607)"; "All Cambridge schools are allocated to one of six administrative zones."
//  Cambridge 0580 page https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-mathematics-0580/
//    (cambridge-igcse-mathematics-0580.txt): "One of the papers at each tier is now a dedicated non-calculator paper";
//    "is tiered to allow candidates of all abilities to achieve and progress"; "if you make an entry for the A*-G grading scale,
//    it is not then possible to switch to the 9-1 grading scale once the entries deadline has passed"; "Teachers at registered
//    Cambridge schools can unlock over 30 000 teaching and learning resources"; 2028 - 2030 syllabus listed.
//  Cambridge IGCSE page https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-upper-secondary/cambridge-igcse/
//    (cambridge-igcse.txt): "We created Cambridge IGCSE more than 30 years ago. Today, it's the world's most popular
//    international qualification for 14 to 16 year olds."; "a choice of over 70 subjects"; "Digital exams Available to early
//    adopters in 2026".
//  Cambridge 0607 page (cambridge-igcse-international-mathematics-0607.txt): "with and without the use of a graphic display
//    calculator".
//  MINEDU, Edades normativas (facts-school src/edades-normativas-pdf, src/edades-normativas): "Se considera la edad normativa al
//    31 de marzo de cada año."; secundaria 1er to 5to grado = 12 to 16 años.
//  CNEB (facts-school src/cneb): "horas pedagógicas (45 minutos)"; JER "Matemática 4 4 4 4 4"; JEC "Matemática 6 6 6 6 6".
//  Time (timezone.tsv): America/Lima UTC-5 all year (no DST since 1994); Asia/Kolkata UTC+5:30; India 10 h 30 min ahead.
// Our own calculations: 4 x 45 = 180 and 6 x 45 = 270 minutes of maths a week; normative age 14 = 3° de secundaria, 16 = 5°.
// Code (scratchpad pe/e6/igm/v1.py, v2.py, python3 -I): v1 prints Year 1 2180, Year 2 1900, Year 3 1650, Year 4 1440,
// Year 5 1250, Year 6 1090, "Hasty answer: year 6"; v1+v2 prints "Careful answer: year 5" and "Value then: 1246.05 which is
// 1250 to 3 s.f.".
// Lesson family: repeated percentage decrease to a threshold; rounding to 3 s.f. every step moves the answer by a whole year;
// keep full accuracy until the end, then compare the unrounded value.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'from math import floor, log10',
  '',
  'def sf3(x):',
  '    # round x to 3 significant figures',
  '    return round(x, 2 - floor(log10(abs(x))))',
  '',
  'value = 2500',
  'half = value / 2',
  '',
  'hasty = value',
  'year = 0',
  'while hasty >= half:',
  '    year += 1',
  '    hasty = sf3(hasty * 0.87)   # rounded every single year',
  '    print("Year", year, int(hasty))',
  'print("Hasty answer: year", year)'
].join('\n');

const V2 = [
  'careful = value',
  'year = 0',
  'while careful >= half:',
  '    year += 1',
  '    careful = careful * 0.87    # every digit kept until the end',
  'print("Careful answer: year", year)',
  'print("Value then:", round(careful, 2), "which is", int(sf3(careful)), "to 3 s.f.")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'exams', label: 'IGCSE maths tutor' },
  slug: 'igcse-maths-tutor-peru',
  code: 'igm',
  accent: '#932412',
  accentRationale: 'IGCSE maths tutor, Peru: a deep brick red #932412, the red of the Peruvian flag darkened to ink so it reads as a marking pen on exam paper; contrast clears 4.5 on all three paper tones (6.81 on #FBF8F2)',
  pageType: 'market',
  market: PE_EN,
  priceSubject: 'maths',
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'IGCSE maths tutor in Peru',
  title: 'IGCSE Maths Tutor in Peru: Live Online, Taught in English',
  description: 'IGCSE maths tutor for students in Peru: Cambridge 0580 Core and Extended, the four papers, the accuracy rule, live online in English at any hour.',
  ogDescription: 'Cambridge IGCSE Mathematics 0580 explained for families in Peru: Core or Extended, the four papers for 2025 to 2027, how the IGCSE years line up with secundaria, and a Python lesson on why rounding too early costs a year.',
  twitterDescription: 'Live IGCSE maths tutoring in English for students in Peru: Core and Extended 0580, at any hour you choose.',
  pageName: 'IGCSE Maths Tutor in Peru',
  webPageDescription: 'A guide for families in Peru whose children take Cambridge IGCSE Mathematics, built from the Cambridge 0580 syllabus for 2025 to 2027 and the Cambridge IGCSE pages, MINEDU normative ages and the CNEB plan of studies, with an original Python lesson on the accuracy rule.',
  courseDescription: 'Live online IGCSE Mathematics tutoring taught in English for students in Peru: Cambridge 0580 Core and Extended content, non-calculator and calculator papers, in a group of fifteen to twenty or one to one, at a time the family chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'IGCSE maths tutor',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#papers', label: 'The 0580 papers' },
    { href: '#secundaria', label: 'IGCSE and secundaria' },
    { href: '#accuracy', label: 'Accuracy lesson' },
    { href: '#language', label: 'Maths in English' },
    { href: '#times', label: 'Lima times' }
  ],
  eyebrow: 'Peru &middot; Cambridge IGCSE Mathematics 0580 &middot; Ages 13 to 16',
  h1: 'IGCSE maths tutor in Peru, live online',
  lede: 'Your child sits Cambridge IGCSE Mathematics at a school in Peru, the papers are in English, and the grade matters for what comes next. This page sets out what the 0580 exam actually asks for in 2025, 2026 and 2027, how the IGCSE years fit beside Peruvian secundaria, why the Core or Extended choice is made early, and the one accuracy habit that quietly decides marks. It ends with how a week of tutoring from India fits a Lima evening.',
  secondaryCta: { href: '#accuracy', label: 'See the accuracy lesson' },
  wa: 'Hello Modern Age Coders, my child takes Cambridge IGCSE Mathematics at a school in Peru. Could we book a free first class with a maths tutor?',
  heroNote: 'Live online maths in English since 2020 &middot; 10,000+ students worldwide &middot; Core and Extended',
  spec: [
    ['Syllabus', 'Cambridge IGCSE Mathematics 0580'],
    ['Tiers', 'Core and Extended'],
    ['Papers', 'Non-calculator and calculator'],
    ['Taught in', 'English, live, one mentor'],
    ['Format', 'Group of fifteen to twenty, or one to one'],
    ['Peru hours', 'Chosen by your family']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders offers IGCSE maths tutoring for students in Peru: live online lessons taught in English by maths mentors based in India, covering Cambridge IGCSE Mathematics 0580 at Core and Extended level. Students work through both tiers\' non-calculator and calculator papers, the nine syllabus topics and the accuracy rules that cost marks. Learners join a group of fifteen to twenty or study one to one, at an hour that suits the family in Peru time. We teach alongside the school; Cambridge sets and marks the exam.',

  picks: {
    eyebrow: 'Courses for IGCSE students',
    h2: 'Three courses an IGCSE student in Peru can start with',
    lede: 'The IGCSE course itself, a firm algebra base for students who joined a Cambridge school late, and the Diploma maths that many IGCSE students in Peru move on to.',
    items: [
      { course: 'igcse-mathematics-mastery', code: 'IGM / 01', title: 'IGCSE Maths', note: 'Core, Extended and Additional Mathematics, built around the 0580 topics. Non-calculator fluency and written working get as much time as the calculator papers, because both carry half of the grade.' },
      { course: 'algebra-foundations-masterclass', code: 'IGM / 02', title: 'Algebra Foundations', note: 'For a student who arrived from a Spanish-medium colegio into an IGCSE class and finds the algebra moving too fast. Expressions, equations and graphs, rebuilt in English before the Extended content asks for them.' },
      { course: 'ib-mathematics-aa-ai-masterclass', code: 'IGM / 03', title: 'IB Maths AA and AI', note: 'Where many Cambridge students in Peru go next if their school offers the IB Diploma. SL and HL in both courses, with help on the internal assessment; the school and the IB set and mark the work.' }
    ]
  },

  sections: [
    {
      id: 'who',
      eyebrow: 'Who asks',
      h2: 'Who looks for an IGCSE maths tutor in Peru?',
      lede: 'Mostly families whose child studies maths in English at a school that enters students for Cambridge exams, and a smaller group who are moving into or out of that system. The reasons differ; the exam does not.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Students already at a Cambridge school', p: 'They meet the syllabus in class every week but want someone to go deeper, check working line by line, and push them from a safe C to the Extended grades. Often the gap is not knowledge but method: answers that are right but not shown, or rounded too soon.' },
          { h3: 'Students who changed system', p: 'A child who moved from a Spanish-medium colegio into an IGCSE class at 13 or 14 meets English mathematical language and new topics at once. Vectors, surds or set notation may never have come up in their old school, and the class does not wait.' },
          { h3: 'Families planning ahead', p: 'Parents of a 12 or 13 year old who will start IGCSE next year, or a family returning to Peru from abroad who want the maths to stay in English. Starting a term early with the algebra base is usually worth more than cramming in the final months.' }
        ] },
        { kind: 'p', mt: true, html: 'One thing we cannot tell you is how many schools in Peru teach Cambridge IGCSE. Cambridge\'s own school finder builds its results in the browser and gives no Peru list we could read and check, and we found no MINEDU register of Cambridge schools, so we print no count and name no school. If your child\'s school enters students for 0580, everything below applies to them.' },
        { kind: 'p', html: 'If what your family wants is maths in English generally rather than a Cambridge exam, our Spanish-language page on a <a class="ag-inline-link" href="/profesor-de-matematicas-en-ingles-peru">maths teacher who teaches in English</a> covers that, and the <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">Peru overview</a> lists every course we teach there.' }
      ]
    },
    {
      id: 'papers',
      tint: 'tint',
      eyebrow: 'The 0580 papers',
      h2: 'What does the IGCSE Mathematics 0580 exam look like in 2025 to 2027?',
      lede: 'Two written papers per candidate, one without a calculator and one with, at either Core or Extended tier. Cambridge\'s syllabus for exams in 2025, 2026 and 2027 sets it out as below, and the June and November series are the ones open to schools outside India.',
      body: [
        { kind: 'table', numCols: [3, 4], caption: 'Cambridge IGCSE Mathematics 0580, assessment for 2025 to 2027', head: ['Paper', 'Tier', 'Calculator', 'Time', 'Marks', 'Share of grade'], rows: [
          ['Paper 1', 'Core', 'Not allowed', '1 hour 30 minutes', '80', '50%'],
          ['Paper 3', 'Core', 'Scientific calculator required', '1 hour 30 minutes', '80', '50%'],
          ['Paper 2', 'Extended', 'Not allowed', '2 hours', '100', '50%'],
          ['Paper 4', 'Extended', 'Scientific calculator required', '2 hours', '100', '50%']
        ] },
        { kind: 'source', html: 'Source: Cambridge International, Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027 (Version 3), assessment overview, read on 9 November 2026. Core candidates take Papers 1 and 3 and can be awarded grades C to G; Extended candidates take Papers 2 and 4 and can be awarded grades A* to E. Exams run in the June and November series, plus a March series for schools in India only.' },
        { kind: 'two', mt: true,
          leftH3: 'Core or Extended: a choice made early',
          left: [
            'Cambridge writes that the Core content is meant for students aiming at grades C to G and the Extended content for students aiming at A* to C. Extended contains everything in Core plus more, such as exponential growth and decay, surds and harder algebra.',
            'Because the tier caps the grade, the decision matters. A Core candidate cannot be awarded higher than C, however well they do. A student who may be capable of Extended but is not yet secure needs the extra content taught in time for the school\'s entry decision, not after it.'
          ],
          rightH3: 'A non-calculator paper at each tier',
          right: [
            'For this syllabus Cambridge has made one paper at each tier a dedicated non-calculator paper. Half of the grade therefore rests on arithmetic, fractions, standard form and algebra done by hand, with clear working.',
            'Students who grew used to doing everything on a calculator feel this first. The skills are not hard, but they have to be fast and reliable under time pressure: two hours for 100 marks on the Extended paper leaves little room for slow long division.'
          ] },
        { kind: 'p', mt: true, html: 'Cambridge also states that the syllabus and its assessment materials exist in English only, and it designs each IGCSE subject around roughly 130 guided learning hours, a figure it calls guidance rather than a rule. Private candidates may enter for 0580 through a centre that accepts them, and a candidate can retake the whole qualification as often as they wish. One administrative trap is worth a parent\'s attention: once the entries deadline passes, an entry on the A* to G grading scale cannot be switched to the 9 to 1 scale.' },
        { kind: 'p', html: 'Schools decide tier, entry and series; we do not enter candidates, and we are not a Cambridge school or exam centre. Our job is to make sure the student is ready for whichever papers the school chooses.' }
      ]
    },
    {
      id: 'secundaria',
      eyebrow: 'IGCSE and secundaria',
      h2: 'How do the IGCSE years line up with Peruvian secundaria?',
      lede: 'Cambridge describes IGCSE as a qualification for 14 to 16 year olds. MINEDU fixes a normative age for every grade, counted on 31 March of each school year, and on that rule 14 to 16 falls in 3°, 4° and 5° de secundaria.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Normative age by secundaria grade, and where IGCSE usually sits (our reading)', head: ['Secundaria grade', 'Normative age on 31 March', 'Cambridge stage, roughly (ours)'], rows: [
          ['1° de secundaria', '12', 'Before IGCSE: number and algebra base'],
          ['2° de secundaria', '13', 'Before IGCSE, or the first IGCSE year at some schools'],
          ['3° de secundaria', '14', 'IGCSE course, first year'],
          ['4° de secundaria', '15', 'IGCSE course, second year; exams for many'],
          ['5° de secundaria', '16', 'IGCSE exams, or the start of a Diploma course']
        ] },
        { kind: 'source', html: 'Sources: MINEDU, Edades normativas para la educación básica ("Se considera la edad normativa al 31 de marzo de cada año"); Cambridge International, Cambridge IGCSE page ("qualification for 14 to 16 year olds"); both read on 9 November 2026. The third column is our own approximate mapping; each school sets its own IGCSE timing.' },
        { kind: 'two', mt: true,
          leftH3: 'What the national timetable gives',
          left: [
            'The CNEB, MINEDU\'s national curriculum, gives secundaria 4 periods of maths a week on the regular school day and 6 on the full school day, each period lasting 45 minutes. By our multiplication that is 180 or 270 minutes a week.',
            'Schools that teach Cambridge courses set their own timetables, so this is the national reference, not a description of any one school. It still explains why a student who moves between systems can find the pace so different.'
          ],
          rightH3: 'Where we fit',
          right: [
            'We teach alongside school and never in place of it. The school decides the grade a student is in, the tier and the series; Cambridge sets and marks the papers. We do not award Peruvian or Cambridge grades.',
            'What we add is time with one mentor in English: working shown properly, topics the class went through too quickly, and timed practice for both papers. For 5° de secundaria students also facing a Peruvian university exam in Spanish, our <a class="ag-inline-link" href="/programacion-para-5to-de-secundaria">page for 5to de secundaria</a> explains how families balance the two.'
          ] }
      ]
    },
    {
      id: 'accuracy',
      tint: 'tint',
      eyebrow: 'An accuracy lesson',
      h2: 'Why does rounding too early cost IGCSE marks? A lesson in Python',
      lede: 'Cambridge asks for non-exact answers to 3 significant figures, and in the same breath tells candidates to "avoid rounding figures until they have their final answer". Here is a lesson we teach Extended students that shows, with real output, how much that second rule matters.',
      body: [
        { kind: 'two',
          leftH3: 'The problem (ours)',
          left: [
            'A machine is worth 2,500 when new and loses 13% of its value every year. In which year does its value first fall below half of the original? This is exponential decay, which the 0580 syllabus lists for Extended candidates with depreciation as its example.',
            'Logarithms are not on the syllabus, so a student answers by trial: multiply by 0.87 again and again until the value drops under 1,250. Many students write each year\'s value to 3 significant figures as they go, which feels tidy and exam-like.'
          ],
          rightH3: 'What happens',
          right: [
            'The tidy way gives year 6. The correct answer is year 5. At the end of year 5 the true value is 1,246.05, which is below 1,250, but rounded to 3 significant figures it becomes exactly 1250 and looks as if it has not crossed the line.',
            'So the student who rounded every year compared a rounded number with the threshold, and lost a whole year. Nothing in the method was wrong except <strong>when</strong> the rounding happened.'
          ] },
        { kind: 'code', label: 'Version 1: rounding to 3 s.f. every year', lang: 'Python', code: V1, note: 'It prints <code>Year 1 2180</code>, <code>Year 2 1900</code>, <code>Year 3 1650</code>, <code>Year 4 1440</code>, <code>Year 5 1250</code> and <code>Year 6 1090</code>, then <code>Hasty answer: year 6</code>.' },
        { kind: 'code', label: 'Version 2: keep every digit, round only to report', lang: 'Python', code: V2, note: 'Run straight after Version 1, it prints <code>Careful answer: year 5</code> and <code>Value then: 1246.05 which is 1250 to 3 s.f.</code>' },
        { kind: 'p', mt: true, html: 'The lesson we want students to keep is short: <strong>compare the unrounded value, then round only what you write down</strong>. On paper that means keeping the full calculator display, or the exact expression 2500 &times; 0.87<sup>5</sup>, until the last line. In Python it means rounding inside the <code>print</code>, never inside the loop.' },
        { kind: 'p', html: 'We then turn it round. Students change the rate to 12% and predict, before running anything, whether the two versions will still disagree. They also explain in two English sentences why the loop condition says <code>&gt;=</code> and what would change with <code>&gt;</code>. Reasoning about the program is the point; Python simply makes the error impossible to argue with.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Core warm-up, no calculator.</strong> A price rises by 10% and then falls by 10%. Is it back where it started? Show it with 200 as the starting value.',
          '<strong>Core, calculator.</strong> A population of 8,000 grows by 5% a year. Find it after 3 years to 3 significant figures, keeping full accuracy in between.',
          '<strong>Extended, by trial.</strong> Starting at 2,500 and losing 13% a year, find the first whole year in which the value is below 1,000. Write each trial with the full calculator display.',
          '<strong>Extended, in Python.</strong> Edit Version 2 to find the first year below 1,000, then add a line that prints the value to 3 significant figures only after the loop ends.'
        ] },
        { kind: 'p', mt: true, html: 'All four problems are ours, written for this page; none comes from a Cambridge paper. Answers: no, 198; 9,260; year 7 (the value then is about 943); the program agrees, year 7.' }
      ]
    },
    {
      id: 'language',
      eyebrow: 'Maths in English',
      h2: 'Where do Spanish-speaking students lose marks in English maths?',
      lede: 'Rarely in the mathematics itself. Most lost marks we see come from notation and wording that differ between the maths a child learnt in Spanish and the maths Cambridge writes in English.',
      body: [
        { kind: 'table', numCols: [], caption: 'Common traps for students moving from Spanish to English mathematics (our classroom notes)', head: ['In Spanish-medium school', 'In a Cambridge paper', 'Why it costs marks'], rows: [
          ['3,5 (comma for decimals)', '3.5 (point for decimals)', 'A comma in an answer can read as a thousands separator'],
          ['1.000.000 (point between thousands)', '1 000 000 or 1,000,000', 'A point between groups looks like a decimal point'],
          ['cifras significativas', 'significant figures (s.f.)', 'Students mix them up with decimal places'],
          ['un billón (a million million)', 'a billion (a thousand million)', 'A factor of a thousand, in standard form questions'],
          ['área y perímetro, volumen', 'mensuration', 'The topic name itself is unfamiliar on the contents page'],
          ['"a lo más", "por lo menos"', '"at most", "at least"', 'Inequality questions turn on these two phrases']
        ] },
        { kind: 'source', html: 'Our own notes from teaching. Peruvian official documents write decimals with a comma (INEI, for example, writes 84,7% for internet access in Lima Metropolitana); the 0580 syllabus writes them with a point and asks for 3 significant figures unless a question says otherwise.' },
        { kind: 'two', mt: true,
          leftH3: 'Reading the question',
          left: [
            'The 0580 syllabus prints a table of command words with fixed meanings. "Show (that)" asks for "structured evidence that leads to a given result", so the answer is already known and the steps are the marks. "Write down" means "give an answer without significant working". "Explain" means say why or how, with evidence.',
            'A student reading in a second language tends to skim these words, and then writes a bare answer where working was the mark, or pages of working where a single line was enough.'
          ],
          rightH3: 'Writing the answer',
          right: [
            'We ask students to say their method aloud in English before writing it. If they cannot explain why a step is there, the examiner will not see why either. It is slow at first and then saves more time than any shortcut.',
            'Mentors speak clearly and at the student\'s pace, and repeat an idea in simpler words where needed. Students who are still building their English usually find the mathematics is the easier half.'
          ] }
      ]
    },
    {
      id: 'think',
      tint: 'tint',
      eyebrow: 'Understanding, not past papers alone',
      h2: 'Will a tutor just drill past papers?',
      lede: 'Past papers come at the end, not the start. A student who has only practised question types is stuck the first time Cambridge words something differently, and the Extended papers do exactly that.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Why before how', p: 'Every method is taught from a reason first: why the angle in a semicircle is a right angle, why 0.87 is the multiplier for a 13% fall. A student who knows the reason can rebuild a method they have half forgotten.' },
          { h3: 'Two papers, two skills', p: 'Non-calculator sessions build speed with fractions, indices and algebra by hand. Calculator sessions train full-accuracy working and checking. Both get regular timed practice before exam season.' },
          { h3: 'Weighting for analysis', p: 'Cambridge weights the Extended papers 50 to 60% towards analysing, interpreting and communicating mathematics, against 30 to 40% on Core. Higher grades depend on explaining, so explaining is what we practise.' }
        ] },
        { kind: 'p', mt: true, html: 'We do not hand students answers to copy, from a tutor or from an AI tool. Younger students do not use adult chatbot accounts in class, and older students may use AI only to question their own reasoning after they have solved a problem. Cambridge gives teachers at registered schools access to its own large resource bank, which we do not have and do not claim; we work from the public syllabus and from problems we write ourselves. We are not connected with Cambridge International.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Lima times',
      h2: 'What time would IGCSE maths lessons be in Peru?',
      lede: 'Whatever time suits your family. Lima keeps UTC minus 5 in every season and India keeps UTC plus 5:30, a fixed gap of ten and a half hours. Read the rows as clock conversions only.',
      body: [
        { kind: 'table', numCols: [], caption: 'Peru time and India time, every day of the year', head: ['Peru time', 'India time', 'A typical use'], rows: [
          ['06:30', '17:00', 'A short session before the school bus'],
          ['08:00', '18:30', 'A Saturday morning paper under timed conditions'],
          ['15:00', '01:30, next day', 'Straight after school, by arrangement'],
          ['18:00', '04:30, next day', 'After homework, for a one-to-one'],
          ['20:00', '06:30, next day', 'An evening review before a mock']
        ] },
        { kind: 'source', html: 'Source: IANA time zone database, zones America/Lima (UTC minus 5; Peru last changed its clocks for summer in 1994) and Asia/Kolkata (UTC plus 5:30), checked against INACAL\'s official Peru time on 8 November 2026. The conversions are ours.' },
        { kind: 'p', mt: true, html: 'When you book, you choose the hour on your own clock and the mentor sees the same moment in India time. Because neither country changes its clocks, a lesson set for 18:00 in Lima stays at 18:00 through June revision and November exams. A student needs a computer, a reliable connection and a way to show handwritten working: a phone camera or a simple drawing tablet both work.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From a shaky start to the Extended papers: our stages',
    lede: 'These stages are ours, not Cambridge\'s. We use them to place a student, plan their weeks, and tell parents plainly where things stand.',
    table: { numCols: [], caption: 'IGCSE maths stages (ours)', head: ['Stage', 'Usual point', 'The student can', 'Paper skill'], rows: [
      ['1. Fluent by hand', 'Before IGCSE', 'Work with fractions, negatives and indices without a calculator', 'Non-calculator accuracy'],
      ['2. Algebra in English', 'First IGCSE term', 'Form and solve equations from an English sentence', 'Reading command words'],
      ['3. Core secure', 'First IGCSE year', 'Answer every Core topic with working shown', 'Papers 1 and 3 in time'],
      ['4. Extended content', 'Second IGCSE year', 'Handle surds, functions, vectors and exponential change', 'Multi-step Extended questions'],
      ['5. Full accuracy', 'Before mocks', 'Carry unrounded values to the end and round once', 'Accuracy marks kept'],
      ['6. Exam ready', 'The final term', 'Finish Papers 2 and 4 in time and check them', 'Timed full papers']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 3 is where the Core or Extended conversation with the school becomes real. If a student is secure there by the middle of the course, Extended is usually within reach.',
      'Our notes after lessons say what was covered, what is still weak and what comes next, in plain English.'
    ] },
    right: { h3: 'For students', ps: [
      'Round once, at the end, and compare the unrounded value with any threshold.',
      'If you cannot say why a line of working is there, the examiner cannot either.'
    ] }
  },

  catalogue: {
    eyebrow: 'Further courses',
    h2: 'Nine more courses around the IGCSE years',
    lede: 'All taught live in English by a mentor who stays with the student, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Before the IGCSE course', sub: 'Ages 10 to 14', courses: [
        { code: 'IGM / PRE / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school maths', blurb: 'Pre-algebra and geometry, the ground Paper 1 is built on.' },
        { code: 'IGM / PRE / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Number patterns and graphs explored in Python, ages 10 to 15.' },
        { code: 'IGM / PRE / 03', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Number sense for younger students, long before the non-calculator paper.' }
      ] },
      { num: 'II', h3: 'Beside the IGCSE course', sub: 'Ages 13 to 16', courses: [
        { code: 'IGM / WITH / 01', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Topics 8 and 9 in more depth, from data to chance.' },
        { code: 'IGM / WITH / 02', slug: 'igcse-computer-science-0478-course', title: 'IGCSE Computer Science 0478', blurb: 'The companion Cambridge subject, full syllabus.' },
        { code: 'IGM / WITH / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad maths', blurb: 'For students who find the syllabus too easy.' }
      ] },
      { num: 'III', h3: 'After the IGCSE', sub: 'Ages 15 to 18', courses: [
        { code: 'IGM / NEXT / 01', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A Level Maths', blurb: 'Pure, mechanics and statistics, the British route on.' },
        { code: 'IGM / NEXT / 02', slug: 'a-level-further-maths-course', title: 'A Level Further Maths', blurb: 'Core pure and applied options for strong mathematicians.' },
        { code: 'IGM / NEXT / 03', slug: 'complete-high-school-mathematics-mastery', title: 'High school maths', blurb: 'Algebra to calculus, for students heading elsewhere.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'A week of IGCSE maths lessons from Peru',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Early mornings', l: 'Peru mornings fall in the Indian evening, an easy hour for a mentor.' },
      { time: 'Evenings in Lima', l: 'Later slots work too; tell us the hour and we match a mentor to it.' },
      { time: 'One to one', l: 'A plan built around one student\'s papers, gaps and school dates.' }
    ],
    cells: [
      { h3: 'Working on screen', p: 'Students show handwritten steps by camera and the mentor marks them live.' },
      { h3: 'Both papers', p: 'Non-calculator and calculator practice, never one without the other.' },
      { h3: 'Tier advice', p: 'Evidence for the school\'s Core or Extended decision, not a guess.' },
      { h3: 'Clear English', p: 'Mathematical terms said slowly and written down as they arise.' },
      { h3: 'Parent notes', p: 'Topics covered, errors spotted, the next target.' },
      { h3: 'One mentor', p: 'The same person each week, who learns how the student thinks.' }
    ]
  },

  projectsH2: 'What our older students make',
  projectsLede: 'Some of our maths students also code, and their projects often start from a piece of mathematics they met in class. A few are below; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'What parents and students have written on Google, copied exactly.',

  fees: {
    h2: 'Fees for IGCSE maths lessons from Peru',
    lede: 'Fees are set in US dollars and paid by card. Your bank changes each payment into soles at the rate it uses that day, so the soles figure on your card statement can drift a little between months.',
    free: ['A first lesson at no cost', 'A short diagnostic on Core and Extended skills', 'No card details asked'],
    group: ['Fifteen to twenty students at a similar stage', 'One mentor all the way through', 'Two live lessons each week', 'Paid monthly; stop whenever you need to'],
    one: ['One student with one mentor', 'Built around the school\'s tier and dates', 'Lesson times your family picks']
  },

  faq: {
    eyebrow: 'Families in Peru ask',
    h2: 'IGCSE maths tutoring in Peru: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Every lesson is live, online and taught in English, which is also the only language Cambridge offers 0580 in. Mentors speak clearly, adjust their pace and accent to the student, and write key terms on screen, so a student whose English is still growing can follow the mathematics.' },
      { q: 'Which syllabus do you teach?', a: 'Cambridge IGCSE Mathematics 0580, in the version for exams in 2025, 2026 and 2027, at Core and Extended level. Our IGCSE course also covers Additional Mathematics. If a school uses another board\'s IGCSE, tell us at the free lesson and we will say honestly how much overlaps.' },
      { q: 'Should my child take Core or Extended?', a: 'The school decides. Cambridge intends Core for students aiming at grades C to G and Extended for A* to C, and a Core candidate cannot get above C. We can show you where your child stands on the Extended content so that the conversation with the school is based on evidence.' },
      { q: 'What does the non-calculator paper involve?', a: 'One paper at each tier is taken without a calculator: Paper 1 for Core, 1 hour 30 minutes and 80 marks, and Paper 2 for Extended, 2 hours and 100 marks. Each counts for half of the grade, so mental and written arithmetic matter as much as calculator skill.' },
      { q: 'When are lessons in Peru time?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Peru is on UTC minus 5 all year and India on UTC plus 5:30, so 18:00 in Lima is 04:30 the next morning in India.' },
      { q: 'Can you enter my child for the exam?', a: 'No. We are not a Cambridge school or exam centre, and we are not connected with Cambridge International. Entries go through the school, or for a private candidate through a centre that accepts private candidates. We prepare the student for the papers.' },
      { q: 'Do you give grades or certificates?', a: 'We do not award Cambridge or Peruvian grades; Cambridge marks the exam and the school reports on its own work. A student who completes one of our courses receives our own certificate of completion.' },
      { q: 'My child moved from a Spanish-medium school. Is it too late?', a: 'Usually not, if you start early enough before the exam. We first rebuild algebra and number in English, then the IGCSE topics in order of need. The free lesson shows how large the gap is, and one-to-one lessons close it faster than a group.' },
      { q: 'Do you use past papers?', a: 'Yes, near the end and under time limits, after the topics are understood. Most of our teaching uses problems we write ourselves, so that a student learns to handle unfamiliar wording rather than memorising familiar questions.' },
      { q: 'How are fees paid?', a: 'By card, in US dollars. Your bank converts each charge into soles, so the amount on your statement can change a little from month to month. The first lesson is free and no card is needed to book it.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Also on this site',
    h2: 'Related pages',
    lede: 'More for families in Peru with a Cambridge or IB student.',
    items: [
      { href: '/cambridge-igcse-maths-0580-help', label: 'IGCSE 0580 help', p: 'A topic-by-topic guide to the syllabus.' },
      { href: '/cambridge-igcse-additional-maths-0606-help', label: 'IGCSE Additional Maths 0606', p: 'For students taking the harder companion paper.' },
      { href: '/tutor-ib-matematicas-en-ingles-peru', label: 'IB maths tutor in Peru (Spanish)', p: 'Diploma maths for students in Peru, explained in Spanish.' },
      { href: '/english-medium-coding-classes-lima', label: 'English-medium coding in Lima', p: 'Coding taught in English for Lima families.' },
      { href: '/group-vs-one-to-one-maths-tuition', label: 'Group or one to one?', p: 'How to choose the format for maths lessons.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A live lesson described step by step.' }
    ]
  },

  start: {
    h2: 'Book a free IGCSE maths lesson from Peru',
    lede: 'In the free lesson the mentor gives your child a few questions from both tiers, some without a calculator, and watches how they set out their working. Afterwards you hear which stage they are at, whether Extended looks realistic, and whether a group or one-to-one plan fits better.',
    readFirst: 'Rather read first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> follows one lesson minute by minute, and each IGCSE course on our <a class="ag-inline-link" href="/courses">course list</a> carries its own syllabus.',
    note: 'Lessons are live video calls with mentors in India, conducted in English. For a quick reply, message us on WhatsApp in English.',
    formNote: 'Free, no card, nothing to sign.'
  },

  footer: {
    cols: [
      { h4: 'Cambridge and IB', links: [
        { href: '/igcse-maths-tuition-online', label: 'IGCSE maths tuition' },
        { href: '/cambridge-igcse-maths-0580-help', label: 'IGCSE 0580 help' },
        { href: '/ib-maths-tuition-online', label: 'IB maths tuition' },
        { href: '/cambridge-igcse-computer-science-tuition', label: 'IGCSE computer science' }
      ] },
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Peru overview' },
        { href: '/profesor-de-matematicas-en-ingles-peru', label: 'Maths taught in English' },
        { href: '/profesor-particular-de-matematicas-online-peru', label: 'Online maths tutor' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Round once, at the very end'
  },

  personalityCss: `
.ag-root.ag-igm .ag-hero h1 { max-width: 17ch; letter-spacing: -0.015em; }
.ag-root.ag-igm .ag-capsule { border-left-width: 5px; }
.ag-root.ag-igm .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-igm .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-igm .ag-code-note code { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'Cambridge International: IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027 (Version 3), the 0580 programme page, the Cambridge IGCSE page and the 0607 page; MINEDU Edades normativas; MINEDU CNEB plan of studies; IANA tz database and INACAL official time. Read 8 and 9 November 2026.',
    localProject: 'An original Python lesson on 0580 exponential decay (E1.17): a value of 2,500 losing 13% a year, rounded to 3 s.f. every year, first goes below half in "year 6"; kept at full accuracy it does so in year 5 (1246.05, which shows as 1250 to 3 s.f.). Plus four original practice problems with answers. Lesson family: repeated percentage decrease to a threshold; round once, at the end.',
    requiredMentions: ['Hasty answer: year 6', 'Careful answer: year 5', 'Value then: 1246.05 which is 1250 to 3 s.f.', 'avoid rounding figures until they have their final answer', 'compare the unrounded value, then round only what you write down', 'a Core candidate cannot get above C', 'the student who rounded every year compared a rounded number with the threshold', 'Round once, at the very end', 'un billón (a million million)'],
    sources: [
      { claim: '0580 for exams in 2025 to 2027; June and November series (March in India only); tiers and grades; Papers 1 to 4 with calculator rules, times, marks and weights; nine topics; AO weightings; 130 guided learning hours; private candidates; retakes; English only; 3 s.f. and accuracy rule; E1.17; no logarithms.', url: 'https://www.cambridgeinternational.org/Images/662466-2025-2027-syllabus.pdf' },
      { claim: 'One non-calculator paper at each tier; A*-G to 9-1 switch not possible after the entries deadline; over 30,000 resources for registered schools.', url: 'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-mathematics-0580/' },
      { claim: 'Cambridge IGCSE created more than 30 years ago, for 14 to 16 year olds; over 70 subjects.', url: 'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-upper-secondary/cambridge-igcse/' },
      { claim: 'Normative age counted on 31 March; secundaria grades 1 to 5 at ages 12 to 16.', url: 'https://www.gob.pe/institucion/minedu/informes-publicaciones/2742610-edades-normativas' },
      { claim: 'Secundaria maths periods: 4 (JER) and 6 (JEC) a week, 45-minute periods.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Peru UTC-5 all year, no DST since 1994; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'A count of Cambridge or IGCSE schools in Peru: the Cambridge school finder is dynamic and no primary list was fetched; not given.',
      'Naming any school in Peru, or any school as a source of our students: refused.',
      'Which exam series (June or November) Peruvian schools use: not verified; the page says the school decides.',
      'Any Cambridge endorsement, centre status or ability to enter candidates: none, and the page says so.',
      'University recognition of IGCSE in Peru: not found in the PUCP or Universidad de Lima guides; not claimed.',
      'Grade promises: none made.'
    ]
  }
};
