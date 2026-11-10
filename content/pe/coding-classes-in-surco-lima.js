// SHIP: market (en district, Lima) | Surco teenagers: OPI, OPEIA, OPECIA and ONEM in one year, coding in English | merging two sorted lists: two indexes, and the leftover tail a loop forgets
'use strict';
// Coding classes in Surco (Santiago de Surco), Lima (ag- English district page, Peru cluster row PE054, hubGroup cities;
// alloc csu, #753000). Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; brief
// docs/superpowers/plans/2026-11-09-pe-writer-brief.md ("City and district pages"). Owner 2026-11-09: "make sure all our
// classes are live online in english"; 2026-11-08: timing flexible at any hour. Fees only through data-price anchors.
// Audience: English-reading teenagers in Surco (bilingual, Cambridge and IB pupils among them) and their parents; also
// younger children and adults, briefly.
// Spine: Surco, 9th of 43 Lima districts by 2025 population (our sort of Cuadro 1), counted 28,204 people of 12 to 17,
// more than the whole population of 5 districts (our check); the
// page lays out the 2026 calendar of Peru's school contests in computing and maths (UTEC OPI, OPEIA, OPECIA; MINEDU
// ONEM) and how live classes in English prepare a teenager to reason, not to paste.
// Different from the two Spanish Surco pages: vacaciones-utiles-de-programacion-surco-lima (siblings' summer plan, census
// table; lesson: list alias versus copy) and clases-de-programacion-surco (reforzamiento, age table by grade; lesson:
// bisect; live by the end of 10 Nov 2026 and linked).
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/coding-classes-in-surco-lima/):
//  - INEI Censos Nacionales 2025 (inei/sheet2_CUADRO_N_1.tsv): "DISTRITO SANTIAGO DE SURCO 402074 188658 213416 386432
//    180941 205491 15642 7717 7925"; (inei/sheet4_CUADRO_N_3.tsv): "DISTRITO SANTIAGO DE SURCO 386432 15690 24155 28204
//    66470 85158 80647 86108"; Lima Metropolitana 10141775.
//  - UTEC, opi.utec.edu.pe home (opi-home/text.txt): "abiertas gratuitamente a todos los estudiantes de secundaria del
//    país"; OPI "Inscripciones : hasta el 18 de marzo del 2026", "Competencia : 11 de Abril (Fase 2 - Final)"; OPEIA
//    "Inscripciones : hasta el 18 de marzo del 2026.", "Competencia : 19 de marzo del 2026 ( única fecha)"; OPECIA
//    "Inscripciones : hasta el 26 de Abril del 2026.", "Competencia : 27 de Abril del 2026 ( única fecha)"; "representar
//    al Perú en la IOAI en el año 2025".
//  - OPI 2025 rules (opi-reglamento-2025/text.txt, LaTeX accents): "Tener como m´aximo 20 a˜nos de edad al d´ıa 1 de
//    Julio de 2025"; Fase 1 "Se podr´a usar C++ o Python"; Fase 2 "Se podr´a usar solo C++."; "Los 4 primeros puestos de
//    la FASE 2 ser´an seleccionados para participar en IOI-2025"; "Queda prohibido el uso de IA generativa". Paraphrased.
//  - UGEL 06, Oficio Múltiple 164-2026 on the XXII ONEM (ugel06-onem-2026/text.txt): "miércoles 08 de Julio"; "NIVEL 1:
//    1° y 2° grado", "NIVEL 2: 3° y 4°", "NIVEL 3: 5°"; "ALFA: Estudiantes de IIEE públicas BETA: Estudiantes de IIEE
//    privadas"; "Consta de diez (10) ítems de respuesta construida cerrada"; "de dos (02) horas".
//  - El Peruano, 11 October 2026 (elperuano-onem2026/text.txt): "La etapa nacional se desarrolló hoy, domingo, en el
//    Centro Vacacional Huampaní y reunió a 237 estudiantes"; "la ONEM 2026 convocó a más de 1,7 millones de estudiantes".
//  - RM 501-2025-MINEDU Tabla 1 (FACTS 23, checked by eye in the Miraflores folder): teaching block 1 from 16 March,
//    management weeks 18 to 22 May, 27 July to 7 August, 12 to 16 October; block 4 to 18 December 2026.
//  - CNEB (cneb/): no computing area (FACTS 39). EF EPI 2025 (ef_peru.raw): Lima 555 high.
//  - INEI TIC II Trimestre 2026 (inei_tic_iit2026.txt): "el de 12 a 18 años con un 92,5%".
//  - Time (timezone.tsv): America/Lima UTC-5 all year; Asia/Kolkata UTC+5:30.
//  - Neighbours, plain text: Miraflores, Surquillo, San Borja, Ate, La Molina, San Juan de Miraflores, Chorrillos, Barranco.
// Our own calculations (scratchpad pe/d5/calc.py): Surco 12 to 17 = 7.3% of people counted (Lima Metropolitana 9.0%);
// 6 to 11 = 6.3%; 402074 / 10141775 = 3.96%.
// Code (scratchpad pe/d5/csu_v1.py, csu_v2.py, python3 -I), exact output:
//   v1: Dates kept: 9 of 11 / Last date: (10, 11, 'ONEM national stage')
//   v2: Dates kept: 11 of 11 / Same as sorted(): True / 16/03 teaching block 1 begins / 18/03 OPI and OPEIA entries
//       close / 19/03 OPEIA, one sitting / 11/04 OPI final / 27/04 OPECIA, one sitting / 18/05 staff planning week /
//       08/07 ONEM school stage / 27/07 two staff planning weeks / 11/10 ONEM national stage / 12/10 staff planning week /
//       18/12 teaching block 4 ends
// Lesson family: merging two sorted lists with two indexes; when one list runs out, the rest of the other must be added
// (the forgotten tail); check against sorted().

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'contests = [(3, 18, "OPI and OPEIA entries close"), (3, 19, "OPEIA, one sitting"),',
  '            (4, 11, "OPI final"), (4, 27, "OPECIA, one sitting"),',
  '            (7, 8, "ONEM school stage"), (10, 11, "ONEM national stage")]',
  'school = [(3, 16, "teaching block 1 begins"), (5, 18, "staff planning week"),',
  '          (7, 27, "two staff planning weeks"), (10, 12, "staff planning week"),',
  '          (12, 18, "teaching block 4 ends")]',
  '',
  'def merge(a, b):',
  '    out = []',
  '    i = j = 0',
  '    while i < len(a) and j < len(b):',
  '        if a[i] <= b[j]:',
  '            out.append(a[i])',
  '            i += 1',
  '        else:',
  '            out.append(b[j])',
  '            j += 1',
  '    return out',
  '',
  'year = merge(contests, school)',
  'print("Dates kept:", len(year), "of", len(contests) + len(school))',
  'print("Last date:", year[-1])'
].join('\n');

const V2 = [
  '# the same two lists as Version 1',
  'def merge(a, b):',
  '    out = []',
  '    i = j = 0',
  '    while i < len(a) and j < len(b):',
  '        if a[i] <= b[j]:',
  '            out.append(a[i])',
  '            i += 1',
  '        else:',
  '            out.append(b[j])',
  '            j += 1',
  '    out.extend(a[i:])',
  '    out.extend(b[j:])',
  '    return out',
  '',
  'year = merge(contests, school)',
  'print("Dates kept:", len(year), "of", len(contests) + len(school))',
  'print("Same as sorted():", year == sorted(contests + school))',
  'for month, day, what in year:',
  '    print(f"{day:02d}/{month:02d} {what}")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'cities', label: 'Surco, Lima: teenagers and contests' },
  slug: 'coding-classes-in-surco-lima',
  code: 'csu',
  accent: '#753000',
  accentRationale: 'Coding classes in Surco: a burnt umber #753000, the shade of the old adobe walls of the Surco valley; contrast 9.09 on #FBF8F2, 8.55 on #F5F1E8 and 7.82 on #EDE7DA',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Coding classes in Surco, Lima',
  title: 'Coding Classes in Surco, Lima: Live Online in English',
  description: 'Coding classes in Surco for teenagers, children and adults: live online in English at any hour, with the 2026 OPI, OPEIA and ONEM dates and a Python lesson.',
  ogDescription: 'Live coding lessons in English for Santiago de Surco: why the district has so many teenagers, the 2026 calendar of Peru\'s computing and maths contests, what each one rewards, and a Python lesson on merging two lists of dates.',
  twitterDescription: 'Coding in English for Surco, Lima: teenagers first, with Peru\'s 2026 computing and maths contest dates and a real Python lesson.',
  pageName: 'Coding Classes in Surco, Lima',
  webPageDescription: 'A guide for teenagers and families in Santiago de Surco, Lima, to live online coding classes taught in English, built from INEI Censos Nacionales 2025, UTEC\'s Olimpiadas Peruanas de Computación pages and OPI rules, the UGEL 06 circular on ONEM 2026, El Peruano, RM 501-2025-MINEDU and the tz database, with an original Python lesson on merging sorted lists.',
  courseDescription: 'Live online coding classes taught in English for learners in Santiago de Surco, Lima: Python, C++, problem solving and AI for teenagers, Scratch and Python for children, and Python and data for adults, in a group of fifteen to twenty or one to one, at hours the family chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Surco, Lima',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#teens', label: 'Teenagers' },
    { href: '#contests', label: '2026 contests' },
    { href: '#language', label: 'Python or C++' },
    { href: '#project', label: 'Python lesson' },
    { href: '#times', label: 'Surco times' }
  ],
  eyebrow: 'Santiago de Surco, Lima &middot; Live online, in English &middot; Teenagers first',
  h1: 'Coding classes in Surco, Lima',
  lede: 'Santiago de Surco is the ninth most populous of Lima\'s 43 districts in INEI\'s 2025 census, and its 28,204 teenagers outnumber the entire population of five of those districts. For a secundaria student here, coding is more than a hobby: Peru runs free national contests in programming, artificial intelligence and cybersecurity, open to every secondary pupil. This page sets out the 2026 contest calendar, what each contest asks for, how our live classes in English prepare a student for that kind of thinking, and what we offer younger children and adults too.',
  secondaryCta: { href: '#contests', label: 'See the 2026 dates' },
  wa: 'Hello Modern Age Coders, we are in Surco, Lima, and would like live coding classes in English for a teenager. Could we book a free first class?',
  heroNote: 'Live online since 2020 &middot; more than 10,000 learners around the world &middot; all teaching in English',
  spec: [
    ['Main learners', 'Teenagers in secundaria'],
    ['Also for', 'Children from 6, and adults'],
    ['Languages taught', 'Python, C++, Java, Scratch'],
    ['Class size', 'Fifteen to twenty, or one to one'],
    ['Surco hours', 'Whenever the week allows'],
    ['First class', 'Free, no payment details']
  ],
  capsuleQ: 'The short answer',
  capsule: 'Modern Age Coders gives live online coding classes in English to teenagers, children and adults in Santiago de Surco, Lima. Teenagers learn Python, then C++, problem solving and AI, the skills behind Peru\'s free school contests such as the OPI and OPEIA run by UTEC. Children start with Scratch at 6 and Python at about 9; adults learn Python and data. Each lesson is led in real time over video by a mentor working from India; students join a batch of fifteen to twenty or learn one to one, and the family sets the hour on Peru time.',

  picks: {
    eyebrow: 'Where Surco learners start',
    h2: 'Three courses, two of them for secundaria',
    lede: 'Python from zero for teenagers, problem solving for those who already code and want contest-style thinking, and Scratch for younger brothers and sisters.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'CSU / 01', title: 'Python for Teens', note: 'For 13 to 18 year olds who have never coded. Real typed programs from the first lesson, then files, data and larger projects. Python is also one of the two languages the OPI accepted in its first round under the 2025 rules.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'CSU / 02', title: 'Problem Solving and DSA for Teens', note: 'For teenagers who can already write simple programs. Logic, data structures and algorithms, built from problems we write ourselves, with the emphasis on explaining why a solution is correct.' },
      { course: 'kids-coding-blocks-masterclass', code: 'CSU / 03', title: 'Coding for Kids', note: 'For 6 to 12 year olds, grouped by age. Scratch animations and games first, then apps and an early look at AI, for the younger children in a Surco household.' }
    ]
  },

  sections: [
    {
      id: 'teens',
      eyebrow: 'Surco in figures',
      h2: 'How many teenagers live in Surco?',
      lede: 'A great many. INEI\'s census of 2025 counted 28,204 people aged 12 to 17 in Santiago de Surco, out of a total population of 402,074, nearly 4% of everyone in Lima Metropolitana by our own division.',
      body: [
        { kind: 'two',
          leftH3: 'What INEI counted',
          left: [
            'Of the 386,432 people INEI actually counted in Surco (it estimates 15,642 more were missed), 24,155 were aged 6 to 11 and 28,204 were aged 12 to 17. The district\'s adults are a large majority, as everywhere in Lima, with 86,108 people of 60 and over and 85,158 aged 30 to 44.',
            'By our arithmetic, teenagers of 12 to 17 are about 7.3% of the people counted in Surco, a little below the 9.0% share across Lima Metropolitana. The share is modest; the number is not, because Surco is so large.'
          ],
          rightH3: 'Why it shapes this page',
          right: [
            'Twenty-eight thousand teenagers means twenty-eight thousand different timetables, interests and levels. A live online class does not need a crowd of beginners at the same level in one building; it puts a Surco teenager into a group of the right age and level drawn from many places.',
            'Surco borders Miraflores, Surquillo, San Borja, Ate, La Molina, San Juan de Miraflores, Chorrillos and Barranco. Teenagers in any of those districts join the same classes, at the same hours.'
          ] },
        { kind: 'source', html: 'Source: INEI, Censos Nacionales 2025, demographic indicators for Lima Metropolitana, Cuadro N.° 1 and Cuadro N.° 3, saved on 8 November 2026; INEI lists the district as Santiago de Surco. The shares are our own calculations on the counted population; we never add INEI\'s age groups into new totals.' },
        { kind: 'p', mt: true, html: 'Teenagers in Peru are almost all online already: INEI\'s household survey for the second quarter of 2026 found that 92.5% of 12 to 18 year olds in the country used the internet. What most of them have not met is programming, because the national curriculum has no computing subject in secundaria. That gap, not access, is what our classes fill.' }
      ]
    },
    {
      id: 'contests',
      tint: 'tint',
      eyebrow: 'Contests in 2026',
      h2: 'Which computing and maths contests can a Surco teenager enter, and when?',
      lede: 'Four national contests matter most for a secondary pupil interested in programming or maths. Three are organised by UTEC and are free for every secundaria student in Peru; the fourth, the ONEM, is MINEDU\'s maths olympiad, entered through the school.',
      body: [
        { kind: 'table', numCols: [], caption: 'Peru\'s school contests in computing and maths, 2026 dates as published by their organisers', head: ['Contest', 'Organiser', 'What it tests', '2026 dates'], rows: [
          ['OPI, Olimpiada Peruana de Informática', 'UTEC', 'Algorithmic programming', 'Entries closed 18 March; final (Fase 2) 11 April'],
          ['OPEIA, Olimpiada Peruana de Inteligencia Artificial', 'UTEC', 'Artificial intelligence', 'Entries closed 18 March; held 19 March, one sitting'],
          ['OPECIA, Olimpiada Peruana de Ciberseguridad', 'UTEC', 'Cybersecurity', 'Entries closed 26 April; held 27 April, one sitting'],
          ['ONEM, Olimpiada Nacional Escolar de Matemática (XXII edition)', 'MINEDU', 'Mathematical problem solving', 'School stage 8 July; national stage 11 October at Huampaní']
        ] },
        { kind: 'source', html: 'Sources: UTEC, Olimpiadas Peruanas de Computación home page (opi.utec.edu.pe), read 8 November 2026; UGEL 06, Oficio Múltiple 164-2026 on the XXII ONEM; El Peruano, report of 11 October 2026 on the ONEM national stage. All dates are in 2026. We are not connected with UTEC, MINEDU or any organiser, and we do not reproduce their problems.' },
        { kind: 'two', mt: true,
          leftH3: 'The UTEC olympiads',
          left: [
            'UTEC describes its Olimpiadas Peruanas de Computación as open free of charge to all secondary students in the country. The OPI selects the students who represent Peru at the Ibero-American and International Olympiads in Informatics; under the 2025 rules, the top four of the final went to the IOI. OPEIA\'s 2025 team represented Peru at the international AI olympiad, the IOAI.',
            'The 2025 OPI rules allowed students up to 20 years old on 1 July 2025 who were at school in Peru that year or had finished in 2024. They also banned generative AI for solving problems, which says plainly what the contest values: a student who can reason alone.'
          ],
          rightH3: 'The ONEM',
          right: [
            'The ONEM has three levels: 1st and 2nd of secundaria, 3rd and 4th, and 5th. Pupils of public schools compete in the Alfa category and those of private schools in Beta. The 2026 school-stage paper had ten questions where the student writes the answer, with two hours to solve them.',
            'El Peruano reported that ONEM 2026 drew more than 1.7 million secondary pupils from its first stage, and that 237 reached the national stage on Sunday 11 October 2026. Entry is through the school, so a Surco pupil who wants to take part should ask there.'
          ] },
        { kind: 'p', mt: true, html: 'For maths specifically, our page on <a class="ag-inline-link" href="/onem-preparation-in-english">ONEM preparation in English</a> explains the levels, the stages and how a student who learns maths in English handles a paper written in Spanish. On this page the focus is programming.' }
      ]
    },
    {
      id: 'reasoning',
      eyebrow: 'What contests reward',
      h2: 'What do the contests actually reward?',
      lede: 'Reasoning under pressure, without help. A contest problem gives a precise task, limits on time and memory, and test cases the student cannot see. A program that is nearly right scores little.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Exactness', p: 'A contest judge does not read the code generously. It runs it against hidden cases, including the awkward ones: an empty list, one item, the largest allowed input. Our students learn to write those cases themselves before submitting anything.' },
          { h3: 'Efficiency', p: 'A correct program that takes too long fails. Teenagers learn to count roughly how many steps a solution needs, and why sorting first or remembering earlier results can turn a slow idea into a fast one.' },
          { h3: 'Explanation', p: 'We ask every student to explain, in English, why their solution works. If they cannot, it usually does not. The habit carries straight into school exams, university and any job that involves code.' }
        ] },
        { kind: 'p', mt: true, html: 'None of this is copied from a contest. We do not reproduce any organiser\'s problems or solutions; every practice problem in our classes is written by us and labelled as ours. We teach the kind of thinking the contests reward, and leave the contests themselves to the students and their schools. For a broader view of teenage coding in Peru, see <a class="ag-inline-link" href="/coding-classes-for-teens-peru">coding classes for teens in Peru</a>.' }
      ]
    },
    {
      id: 'language',
      tint: 'tint',
      eyebrow: 'Python or C++',
      h2: 'Should a Surco teenager learn Python or C++ first?',
      lede: 'Python first, for almost everyone, then C++ for those who want to go far in algorithmic contests. The OPI\'s own 2025 rules show why both matter.',
      body: [
        { kind: 'two',
          leftH3: 'Why Python first',
          left: [
            'Python reads close to plain English, so a beginner spends the first months on ideas rather than punctuation: variables, loops, lists, functions. Under the 2025 OPI rules, the first round accepted Python as well as C++, so a student who knows Python well can already take part.',
            'Python is also the language of data and AI, which matters for OPEIA and for most of what a teenager will build outside contests.'
          ],
          rightH3: 'When C++ comes in',
          right: [
            'The same rules allowed only C++ in the in-person final. That reflects international practice in informatics olympiads, where C++ is fast and gives precise control over memory.',
            'We move a student to C++ once they think comfortably in Python. The ideas transfer; only the syntax and a few habits change. Our C++ for teens course takes them from there to the standard library and algorithms.'
          ] },
        { kind: 'p', mt: true, html: 'A teenager who does not care about contests loses nothing by following the same path. Python, then a second language, is a solid route into any branch of computing, and Java or app development can take the place of C++ for those who would rather build than compete.' }
      ]
    },
    {
      id: 'project',
      eyebrow: 'A real lesson',
      h2: 'What does a lesson look like? Merging two calendars in Python',
      lede: 'We teach this to teenagers of about 13 upwards, using the contest dates above and the national school calendar for 2026. It looks like a small task and hides a classic mistake that turns up in professional code, in contest solutions and in exams.',
      body: [
        { kind: 'two',
          leftH3: 'The task',
          left: [
            'A student keeps two lists, each already in date order: the contest dates, and the main dates of MINEDU\'s 2026 school calendar (RM 501-2025-MINEDU), such as the start of the first teaching block and the weeks set aside for staff planning. The goal is one list for the whole year, still in order.',
            'Sorting everything again would work, but there is a faster idea: walk along both lists at once, always taking the earlier of the two front items. That is the merge step inside merge sort, and it is worth understanding properly.'
          ],
          rightH3: 'The bug',
          right: [
            'Version 1 stops as soon as either list runs out. The contest list ends on 11 October, so the loop stops there, and two school dates, the staff planning week from 12 October and the end of teaching on 18 December, are simply dropped.',
            'Nothing crashes, and the list that comes out is in perfect order. Only counting the items gives the game away: 9 kept out of 11. This is the <strong>forgotten tail</strong>, and the fix is two lines.'
          ] },
        { kind: 'code', label: 'Version 1: a merge that stops too early', lang: 'Python', code: V1, note: 'It prints <code>Dates kept: 9 of 11</code> and <code>Last date: (10, 11, \'ONEM national stage\')</code>.' },
        { kind: 'code', label: 'Version 2: add what is left, then check against sorted()', lang: 'Python', code: V2, note: 'With the two lists from Version 1 above it, it prints <code>Dates kept: 11 of 11</code>, <code>Same as sorted(): True</code>, then the whole year from <code>16/03 teaching block 1 begins</code> to <code>18/12 teaching block 4 ends</code>, including <code>11/10 ONEM national stage</code> followed by <code>12/10 staff planning week</code>.' },
        { kind: 'p', mt: true, html: 'After the loop, at most one of the two lists still has items, and those items are already in order and later than everything taken so far. <code>out.extend(a[i:])</code> and <code>out.extend(b[j:])</code> add whatever remains; one of them adds nothing. Comparing the result with <code>sorted(contests + school)</code> is a cheap way to test the merge on real data before trusting it on anything bigger.' },
        { kind: 'p', html: 'Two smaller lessons sit inside this one. Python compares the tuples field by field, month first and then day, which is why storing a date as (month, day) sorts correctly while "day/month" text would not. And the <code>&lt;=</code> in the comparison means that if two items fall on the same date, the one from the first list comes first, a property called stability that matters when order carries meaning.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Warm-up, no computer.</strong> Two friends each hold a pile of numbered cards in order. Merge them into one pile using only the top card of each. When do you stop looking at one of the piles?',
          '<strong>First Python.</strong> Type Version 1 and predict which dates go missing before you run it. Then swap the two lists in the call. Which dates disappear now?',
          '<strong>Going further.</strong> Count how many comparisons the merge makes, and compare that with the number of items. Why can it never need more comparisons than items?',
          '<strong>Contest style.</strong> Merge three sorted lists. Then write, in two English sentences, how you would merge ten of them without comparing every front item every time.'
        ] }
      ]
    },
    {
      id: 'online',
      tint: 'tint',
      eyebrow: 'Why online',
      h2: 'Why learn online from Surco rather than at an academy across Lima?',
      lede: 'Because a teenager\'s time is short. Between school, homework, sport and family, an evening lost to travel is an evening not spent programming.',
      body: [
        { kind: 'two',
          leftH3: 'The journey that disappears',
          left: [
            'We do not publish traffic estimates without a source. Surco families already know what a trip across the city at rush hour costs. A class at home costs nothing in travel, and a teenager can go straight from the end of a lesson back to homework.',
            'It also removes the parent from the timetable. A fifteen year old can log in alone, at an agreed hour, without anybody driving.'
          ],
          rightH3: 'Live, not recorded',
          right: [
            'Online here means live. The mentor watches the student\'s screen, asks why a line is there, waits for the answer, and corrects the reasoning on the spot. A recorded course cannot notice that a student has misunderstood a loop.',
            'The same mentor stays with the student, so by the third month they know the student\'s habits, strengths and the mistakes worth watching for.'
          ] },
        { kind: 'p', mt: true, html: 'Spanish-speaking parents planning January and February will find a summer plan in our guide to <a class="ag-inline-link" href="/vacaciones-utiles-de-programacion-surco-lima">vacaciones útiles de programación en Surco</a>, which plans a summer for brothers and sisters of different ages. For the school year itself, see in Spanish <a class="ag-inline-link" href="/clases-de-programacion-surco">clases de programación en Surco</a>. Every class described there is taught live in English, exactly as here.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Surco times',
      h2: 'What time would a class be in Surco?',
      lede: 'Whenever the week allows. Peru stays five hours behind UTC in every month, India runs 630 minutes ahead of Peru, and so an hour agreed in March is the same hour in November. The rows below are conversions only.',
      body: [
        { kind: 'table', numCols: [], caption: 'Surco hours converted to India time (illustrations, not a timetable)', head: ['Peru time, Surco', 'India time', 'Often chosen by'], rows: [
          ['07:30', '18:00', 'A teenager before school'],
          ['10:00', '20:30', 'A student in the summer break'],
          ['14:30', '01:00, next day', 'A pupil home early'],
          ['17:30', '04:00, next day', 'A teenager after school'],
          ['20:00', '06:30, next day', 'An adult in the evening']
        ] },
        { kind: 'source', html: 'Clock rules from the IANA tz database: zone America/Lima, which has had no daylight saving since 1994, and zone Asia/Kolkata. Conversions are our arithmetic, and the same on every day of the calendar.' },
        { kind: 'p', mt: true, html: 'Booking works in local time for both sides: you pick a Surco hour, and the mentor\'s calendar shows its India equivalent. Contest weeks, exams and holidays can move a class by agreement; the regular hour stays yours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'How a Surco teenager moves from first program to contest-ready',
    lede: 'Our own stages, used to place a student and to tell parents plainly what has changed. They are not a contest standard and promise no result.',
    table: { numCols: [], caption: 'From beginner to contest-ready (our stages)', head: ['Stage', 'Typical point', 'The student can', 'In English, the student can'], rows: [
      ['1. Programs', 'Months 1 to 2', 'Write Python with input, decisions and loops', 'Say what a program will print before running it'],
      ['2. Collections', 'Months 3 to 4', 'Use lists, dictionaries and functions', 'Describe a bug and where it hid'],
      ['3. Algorithms', 'Months 5 to 7', 'Merge, search and sort, and test the edges', 'Explain the forgotten tail in a merge'],
      ['4. Efficiency', 'Months 8 to 10', 'Estimate steps and choose a faster method', 'Justify a choice of data structure'],
      ['5. Second language', 'Year 2', 'Write the same solutions in C++ or Java', 'Compare the two languages fairly'],
      ['6. Contest practice', 'Year 2 on', 'Solve timed problems of ours with hidden cases', 'Argue why a solution is correct']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 3 is the merge lesson above. Students who reach it start testing their own work without being asked, which is the change worth paying for.',
      'Contest results depend on the student and the contest; we promise none.'
    ] },
    right: { h3: 'For students', ps: [
      'When a loop ends, ask what it left behind.',
      'If your program agrees with sorted() on real data, you have a test. If you never checked, you have a hope.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for Surco learners',
    lede: 'Taught live in English, each with a regular mentor and a choice of group or private lessons.',
    bands: [
      { num: 'I', h3: 'Contest and algorithm track', sub: 'Ages 13 to 18', courses: [
        { code: 'CSU / ALGO / 01', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ for teens', blurb: 'Fundamentals, the standard library and algorithms, after Python.' },
        { code: 'CSU / ALGO / 02', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Timed problem solving with hidden test cases, on problems of ours.' },
        { code: 'CSU / ALGO / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad maths', blurb: 'Proof, counting and number theory for maths contests.' }
      ] },
      { num: 'II', h3: 'Building and AI', sub: 'Ages 13 to 18', courses: [
        { code: 'CSU / BUILD / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'Models trained and tested in Python, from first principles.' },
        { code: 'CSU / BUILD / 02', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'Cybersecurity for teens', blurb: 'Defensive, ethical security skills and online safety.' },
        { code: 'CSU / BUILD / 03', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Objects and classes, from a complete beginner upwards.' }
      ] },
      { num: 'III', h3: 'Younger children and adults', sub: 'The rest of the household', courses: [
        { code: 'CSU / HOME / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'Younger siblings type real Python, draw with turtles and train tiny AI models.' },
        { code: 'CSU / HOME / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox game coding', blurb: 'Games designed and scripted by children aged 8 to 14.' },
        { code: 'CSU / HOME / 03', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python for adults', blurb: 'From zero to useful scripts, for parents and university students.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'A Surco teenager\'s week with live classes',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Mornings', l: 'Lima mornings are Indian evenings, when mentors teach most.' },
      { time: 'Afternoons', l: 'After-school hours are arranged on request; tell us when homework ends.' },
      { time: '1-on-1', l: 'A private mentor and a timetable built around exams and contests.' }
    ],
    cells: [
      { h3: 'A regular mentor', p: 'The same teacher, who learns the student\'s habits.' },
      { h3: 'Clear English', p: 'Short, plain sentences and time to answer.' },
      { h3: 'Code every lesson', p: 'Students write, run and test in each class.' },
      { h3: 'Right group', p: 'Placed by age and level, not just by age.' },
      { h3: 'Our own problems', p: 'Practice problems written by us, never copied.' },
      { h3: 'Group or private', p: 'Fifteen to twenty in a batch, or one to one.' }
    ]
  },

  projectsH2: 'What our older students have built',
  projectsLede: 'Teenagers who stay with us build things beyond exercises. Here are a few; the <a class="ag-inline-link" href="/student-labs">student labs</a> page shows more.',
  reviewsLede: 'Parents and students in their own words, as posted on Google.',

  fees: {
    h2: 'Fees for families in Surco',
    lede: 'Monthly plans are priced in US dollars and charged to a card. A card issued in soles is converted by your bank at the rate it applies on the day, which is why the statement amount can shift slightly between months.',
    free: ['A free first class', 'A small problem to solve together', 'No card asked for'],
    group: ['Fifteen to twenty students of similar level', 'One mentor all year', 'Two live classes a week', 'Pay by the month, stop when you like'],
    one: ['A mentor for one student', 'Paced around exams and contests', 'Days and hours chosen by you']
  },

  faq: {
    eyebrow: 'Surco families ask',
    h2: 'Coding classes in Surco: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Every class is live, online and taught in English only. Mentors keep their sentences short and their pace steady, and wait for answers, so a teenager whose spoken English is still developing can follow. Python and C++ are written in English keywords anyway, so the class and the code share one language.' },
      { q: 'Can your classes get my child into the OPI final or an ONEM medal?', a: 'No one can promise that, and we do not. We teach the reasoning these contests reward, with problems we write ourselves. Results depend on the student, the contest and the day. We are not connected with UTEC, MINEDU or any contest organiser.' },
      { q: 'Does my teenager need to know how to code already?', a: 'No. Python for Teens starts from nothing. Students who already code are placed at their level after the free first class, and may go straight to problem solving or C++.' },
      { q: 'When are classes in Surco time?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. With no clock changes in either country, 17:30 in Surco is 04:00 the next day in India.' },
      { q: 'How does a student enter the ONEM?', a: 'Through their school. The ONEM is MINEDU\'s maths olympiad, with a school stage first; in 2026 it was held on 8 July. Pupils of public schools compete in the Alfa category and private-school pupils in Beta. Ask the school about the 2027 edition.' },
      { q: 'Are the UTEC olympiads free?', a: 'UTEC says its Olimpiadas Peruanas de Computación, the OPI, OPEIA and OPECIA, are open free of charge to all secondary students in Peru. Check opi.utec.edu.pe for each year\'s dates and rules.' },
      { q: 'Can my teenager use AI tools in class?', a: 'Only age-appropriate ones, and only after reasoning through the problem alone. Claude is for adults of 18 and over and ChatGPT needs a parent\'s permission under 18. The 2025 OPI rules banned generative AI for solving problems, so contest practice with us is done without it.' },
      { q: 'Do you have a centre in Surco?', a: 'No. We have no premises anywhere in Lima. All teaching is live over video, with mentors based in India, which is how a student in Surco joins a group of the right level at a convenient hour.' },
      { q: 'What about younger children and parents?', a: 'Children start with Scratch from 6 or Python from about 9, in groups of their own age. Adults can take Python, data analysis or AI courses. Many Surco families have two or three learners at once.' },
      { q: 'How are fees paid?', a: 'Monthly, by card, in US dollars. If your card is in soles, your bank converts each charge, so the amount can vary slightly from month to month. The first class is free and needs no card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Further reading for Surco teenagers and their parents.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Our national guide for every age.' },
      { href: '/we-teach-you-how-to-think', label: 'We teach you how to think', p: 'Reasoning before tools, and why.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Minimum ages for common AI tools.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A live lesson described in full.' },
      { href: '/student-labs', label: 'Student labs', p: 'Projects by older students.' },
      { href: '/courses', label: 'All courses', p: 'Every syllabus in one list.' }
    ]
  },

  start: {
    h2: 'Book a free first class from Surco',
    lede: 'In the free class the student solves a short problem with a mentor and writes, or improves, a small program. The mentor notes how they reason and how easily they follow spoken English, then recommends a starting course, a group or private lessons, and a time that fits the school week.',
    readFirst: 'Rather read first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> describes a lesson, and the <a class="ag-inline-link" href="/courses">course list</a> has every syllabus.',
    note: 'Lessons are live over video, in English, taught from India. Message us on WhatsApp in English for a quick reply.',
    formNote: 'Free, no card, no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Teenagers in Peru', links: [
        { href: '/coding-classes-for-teens-peru', label: 'Coding for teens in Peru' },
        { href: '/onem-preparation-in-english', label: 'ONEM preparation in English' },
        { href: '/c-plus-plus-course-peru', label: 'C++ course, Peru' },
        { href: '/coding-and-ai-classes-in-peru', label: 'Coding in Peru' }
      ] },
      { h4: 'Learning to code', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/we-teach-you-how-to-think', label: 'Thinking first' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'When a loop ends, check what it left behind'
  },

  personalityCss: `
.ag-root.ag-csu .ag-hero h1 { max-width: 15ch; letter-spacing: -0.02em; }
.ag-root.ag-csu .ag-capsule { border-left-width: 6px; border-radius: 3px; }
.ag-root.ag-csu .ag-table th { text-transform: uppercase; letter-spacing: 0.04em; }
.ag-root.ag-csu .ag-section-head h2 { max-width: 27ch; }
.ag-root.ag-csu .ag-code-note code { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'INEI, Censos Nacionales 2025 (Lima Metropolitana demographic indicators, Cuadros 1 and 3); UTEC, Olimpiadas Peruanas de Computación home page and OPI 2025 rules; UGEL 06 Oficio Múltiple 164-2026 on the XXII ONEM; El Peruano, 11 October 2026; MINEDU RM 501-2025-MINEDU; CNEB; INEI TIC II Trimestre 2026; IANA tz database. All read 8 to 10 November 2026.',
    localProject: 'An original Python lesson for Surco teenagers: merging the 2026 contest dates (OPI, OPEIA, OPECIA, ONEM) with MINEDU\'s 2026 school calendar. Version 1 stops when one list runs out and prints Dates kept: 9 of 11, losing the staff planning week of 12 October and the end of teaching on 18 December; Version 2 extends the leftover tail and prints Dates kept: 11 of 11 and Same as sorted(): True. Lesson family: merging two sorted lists, the forgotten tail.',
    requiredMentions: ['Dates kept: 9 of 11', 'Dates kept: 11 of 11', 'Same as sorted(): True', 'forgotten tail', '28,204 people aged 12 to 17', '402,074', 'held 19 March, one sitting', 'When a loop ends, check what it left behind', '12/10 staff planning week'],
    sources: [
      { claim: 'Santiago de Surco 402,074 total (386,432 counted, 15,642 omitted); by age 6 to 11 24,155, 12 to 17 28,204, 30 to 44 85,158, 60 and over 86,108; Lima Metropolitana 10,141,775.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'UTEC olympiads free for all secundaria; OPI, OPEIA and OPECIA 2026 dates; OPEIA 2025 team at the IOAI.', url: 'https://opi.utec.edu.pe/' },
      { claim: 'OPI 2025 rules: age limit, C++ or Python in Fase 1, only C++ in Fase 2, top 4 to IOI, generative AI banned.', url: 'https://opi.utec.edu.pe/Reglamento_OPI_2025.pdf' },
      { claim: 'ONEM 2026 school stage 8 July, levels, Alfa and Beta, ten items, two hours.', url: 'https://ofimult.ugel06.gob.pe/archivos/oficio-multiple-no-00164-2026-mineduvmgi-drelm-ugel06dir-agebre-1781620977.pdf' },
      { claim: 'ONEM 2026 national stage 11 October at Huampaní, 237 students; more than 1.7 million from the first stage.', url: 'https://elperuano.pe/noticia/306597-72-escolares-ganadores-de-la-olimpiada-nacional-de-matematica-seran-premiados-este-lunes-en-huampani' },
      { claim: '2026 school calendar dates used in the lesson.', url: 'https://cdn.www.gob.pe/uploads/document/file/8968298/7380466-rm-n-501-2025-minedu.pdf' },
      { claim: '92.5% of 12 to 18 year olds in Peru used the internet, II Trimestre 2026.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' }
    ],
    rejectedClaims: [
      'Names or counts of IB, Cambridge or bilingual schools in Surco: commercial directories only; not used, and no school named as a source of students.',
      'Any contest result, place or medal promise: none made.',
      'Reproducing OPI, OPEIA, OPECIA or ONEM problems: refused; all practice problems are ours.',
      'Income or class descriptions of Surco: not used, by rule.',
      'Traffic or commute times: no primary source; argued without figures.'
    ]
  }
};
