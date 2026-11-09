'use strict';
// English-medium coding classes in Lima (ag- best-fit door, Peru cluster P1 pilot, row PE038, hubGroup start).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08: timing flexible at any hour.
// Audience: Lima families at bilingual, Cambridge and IB schools, and any family who wants coding plus English.
// Targets: "clases de programación en inglés", "coding classes lima peru", "english medium coding classes lima".
// Angle: Lima's adult English is the only "High" city score in Peru (EF EPI 2025), Peruvian school gives a few
// periods of English and no computing area, IB Diploma numbers in Peru, and an original Python lesson on EF's bands.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/english-medium-coding-classes-lima/,
// all fetched 8 November 2026; every quote below was string-matched in the raw file by scratchpad pe/emc/verify.py):
//  - EF EPI 2025, Peru page https://www.ef.com/wwen/epi/regions/latin-america/peru/ (ef_peru.raw): page data
//    "countryPosition":52,"totalCountries":123,"countryPositionInContinent":8,"totalCountriesInContinent":20,
//    "efEpiScore":519, national "proficiencySlug":"moderate"; cityScore lima high 555, cusco moderate 520, trujillo
//    moderate 519, arequipa moderate 512, huancayo low 499, piura low 484, chiclayo low 474, ica low 467; stateScore
//    lima moderate 544; Reading 540, Listening 499, Writing 514, Speaking 480; band lines {"maxValue":"600",
//    "band":"very-high-proficiency"}, 550 high, 500 moderate, 450 low. EF EPI home (ef_epi.txt): "Based on test
//    results of 2.2m adults in 123 countries & regions".
//  - CNEB (MINEDU) https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf (cneb.txt):
//    "horas pedagógicas (45 minutos)"; primaria "Inglés 2 2 3 3 3 3", "Total de horas 30 30 30 30 30 30"; English in
//    primaria "la implementación de esta área será progresiva dependiendo de la contratación de estos docentes";
//    secundaria JER "Inglés 3 3 3 3 3", "Total de horas 35 35 35 35 35"; JEC "Inglés 5 5 5 5 5", "Total de horas
//    45 45 45 45 45"; "28 Se desenvuelve en entornos virtuales generados por las TIC"; "Competencias transversales a
//    las áreas". No computing or programming area in any plan de estudios table (FACTS.md 39, BLOCKED.md gaps).
//  - MINEDU press release, 17 April 2026 (n-coar-ib-1100.txt): "En el año 2025, en todo el país, 2502 estudiantes
//    obtuvieron el Diploma del Bachillerato Internacional. De este total, los estudiantes de los COAR representan el
//    47 % del total nacional"; "1179 estudiantes de los 25 Colegios de Alto Rendimiento (COAR)", "convocatoria de
//    noviembre de 2025"; 1740 sat the Diploma category; "515 estudiantes de quinto de secundaria de los COAR
//    obtuvieron certificaciones internacionales del idioma inglés Cambridge".
//  - Universidad de Lima, Guía del postulante 2027-1(A) (ulima-guia-20271a.txt): "Por la modalidad de Diploma de
//    Bachillerato Internacional es admitido el postulante que haya obtenido dicho diploma y postule en un plazo no
//    mayor de tres años". PUCP Guía del postulante (pucp-guia.txt): "DIPLOMA DE BACHILLERATO" route; courses
//    recognised "hasta un máximo de 23 créditos".
//  - MINEDU, Fábrica de Programadores, 24 July 2025 (n-fabrica-prog.txt): "beneficiará a 1000 escolares de 4.º y 5.º
//    de secundaria de Lima Norte con formación en programación Python y certificación internacional"; "podrán rendir
//    el examen PCEP".
//  - UTEC OPI home (opi-home.txt): "abiertas gratuitamente a todos los estudiantes de secundaria del país"; OPI 2025
//    rules (opi-reglamento-2025.txt, LaTeX accents): "Queda prohibido el uso de IA generativa para la resoluci´on de
//    problemas." Paraphrased on the page, not quoted, because of the extraction artefact.
//  - INEI, Estadísticas de las TIC en los Hogares, II Trimestre 2026 (inei_tic_iit2026.txt): Lima Metropolitana
//    "84,7% de los hogares disponía del servicio" (internet); "el 36,4% de los hogares del país disponía de al menos
//    una computadora".
//  - Time (timezone.tsv): Peru UTC-05:00 all year, last Rule Peru 1994 (tzdata America/Lima); INACAL hora oficial feed
//    matched UTC-5 on 8 Nov 2026; India UTC+05:30, so India is 10 h 30 min ahead every day.
// Our own calculations: 3 periods x 45 min = 135 minutes of English a week (JER secundaria, grades 3 to 6 of primaria);
// 5 x 45 = 225 (JEC); 2 x 45 = 90 (grades 1 and 2 of primaria). 1179 / 2502 = 47.1% (matches MINEDU's 47 %);
// 2502 - 1179 = 1323 Diplomas outside the COAR network (assumes the 2025 national figure and the November 2025 COAR
// session cover the same Diplomas; labelled as ours on the page).
// Code (scratchpad pe/emc/v1.py, v2.py, v3.py, python3 -I): v1 prints every city "low" (first line "Lima 555 low");
// v2 prints "Fixed: {'high': 1, 'moderate': 3, 'low': 4}", "Edge 549 moderate", "Edge 550 high", "Edge 499 low",
// "Edge 500 moderate"; v3 (> instead of >=) prints the same Fixed line, then 549 moderate, 550 moderate, 499 low, 500 low.
// Lesson family: order your checks from the top, and test the edges; two rules can agree on all real data and still
// disagree at a boundary.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'scores = {',
  '    "Lima": 555, "Cusco": 520, "Trujillo": 519, "Arequipa": 512,',
  '    "Huancayo": 499, "Piura": 484, "Chiclayo": 474, "Ica": 467,',
  '}',
  '',
  'def band(score):',
  '    if score >= 450:',
  '        return "low"',
  '    elif score >= 500:',
  '        return "moderate"',
  '    elif score >= 550:',
  '        return "high"',
  '    elif score >= 600:',
  '        return "very high"',
  '    else:',
  '        return "very low"',
  '',
  'for city, score in scores.items():',
  '    print(city, score, band(score))'
].join('\n');

const V2 = [
  'LINES = [(600, "very high"), (550, "high"), (500, "moderate"), (450, "low")]',
  '',
  'def band(score):',
  '    for line, name in LINES:',
  '        if score >= line:',
  '            return name',
  '    return "very low"',
  '',
  'count = {}',
  'for city, score in scores.items():',
  '    count[band(score)] = count.get(band(score), 0) + 1',
  'print("Fixed:", count)',
  '',
  'for edge in (549, 550, 499, 500):',
  '    print("Edge", edge, band(edge))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'start', label: 'English-medium coding in Lima' },
  slug: 'english-medium-coding-classes-lima',
  code: 'emc',
  accent: '#9E4C4E',
  accentRationale: 'English-medium coding classes, Lima: a muted clay red #9E4C4E, the colour of the adobe and painted colonial balconies of central Lima; contrast 5.51 on the paper #FBF8F2, 5.18 on #F5F1E8 and 4.74 on #EDE7DA',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'English-medium coding classes in Lima',
  title: 'English-Medium Coding Classes in Lima, Peru: Live and Online',
  description: 'English-medium coding classes for Lima families: live online, taught in English, for bilingual, Cambridge and IB pupils, teens and adults, at any hour.',
  ogDescription: 'Coding, AI and computer science taught live in English for Lima families: what EF\'s 2025 English index says about Lima, how much English and computing Peruvian school gives, IB Diploma numbers, and a Python lesson built on real scores.',
  twitterDescription: 'Live coding classes in English for Lima: bilingual, Cambridge and IB families, teens and adults, at any hour.',
  pageName: 'English-Medium Coding Classes in Lima',
  webPageDescription: 'A guide for Lima families who want coding taught in English, built from EF EPI 2025, the MINEDU national curriculum (CNEB) and press releases, university admission guides, INEI household data and the tz database, with an original Python lesson on EF\'s proficiency bands.',
  courseDescription: 'Live online coding, AI and computer science classes taught in English for learners in Lima, from age 6 to adult: Scratch, Python, Java, AI, and IB or IGCSE computer science, in a group of fifteen to twenty or one to one, at a time the family chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'English-medium, Lima',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#english', label: 'English in Lima' },
    { href: '#school', label: 'What school gives' },
    { href: '#ib', label: 'IB and Cambridge' },
    { href: '#project', label: 'Python lesson' },
    { href: '#times', label: 'Lima times' }
  ],
  eyebrow: 'Lima &middot; Coding taught in English &middot; Ages 6 to adult',
  h1: 'English-medium coding classes in Lima',
  lede: 'If you typed <em>clases de programación en inglés</em> into a search box, this is the page you were looking for. Lima has the strongest adult English of any Peruvian city in the EF English Proficiency Index 2025, the only one rated "High", yet Peruvian school still treats computing as a cross-curricular skill rather than a subject. Below: who these classes suit, what school does and does not give, how IB and Cambridge students use them, a real Python lesson, and how a Lima day lines up with a mentor in India.',
  secondaryCta: { href: '#project', label: 'Try the Python lesson' },
  wa: 'Hello Modern Age Coders, we are in Lima, Peru, and would like coding classes in English. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students worldwide &middot; every class live, online and in English',
  spec: [
    ['Who', 'Children from 6, teenagers and adults'],
    ['Starts with', 'Scratch at 6, Python from about 9'],
    ['School subjects', 'IB and IGCSE computer science'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Lima times', 'Any hour you choose'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'The short answer',
  capsule: 'Modern Age Coders runs English-medium coding classes for families in Lima: live online lessons taught entirely in English, for children from age 6, teenagers and adults. Learners start with Scratch or Python and move on to AI, Java, apps, and IB or IGCSE computer science. Mentors based in India teach a group of fifteen to twenty or one learner alone, at whatever hour suits your family in Peru time. The classes suit pupils at bilingual, Cambridge and IB schools, and any family that wants coding and real English practice in the same lesson.',

  picks: {
    eyebrow: 'Where Lima learners begin',
    h2: 'Three starting points, by age and school',
    lede: 'One long course for primary-age children, one for teenagers who want typed code from day one, and one for Diploma students whose IB school offers computer science.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'EMC / 01', title: 'Coding for Kids', note: 'For 6 to 12 year olds, each placed in a batch of children their own age, over 10 to 12 months. Scratch stories come first, then games, simple apps and an early taste of AI, all explained in unhurried spoken English.' },
      { course: 'python-complete-masterclass-teens', code: 'EMC / 02', title: 'Python for Teens', note: 'Teenagers of 13 to 18 who have never coded, over 4 to 5 months. Real typed Python from lesson one; Python is also what MINEDU picked for its Fábrica de Programadores pilot in secundaria.' },
      { course: 'ib-diploma-computer-science-course', code: 'EMC / 03', title: 'IB DP Computer Science', note: 'For Diploma students at SL or HL, joinable any month. Theory, programming and the internal assessment, taught alongside your school, which sets and marks the work.' }
    ]
  },

  sections: [
    {
      id: 'who',
      eyebrow: 'Who it suits',
      h2: 'Who are English-medium coding classes in Lima for?',
      lede: 'Three kinds of family in Lima tend to look for coding taught in English. All three get the same classes, the same mentors and the same standard of teaching; what changes is the reason English helps.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Bilingual, Cambridge and IB pupils', p: 'Your child already learns maths and science in English at school. A coding class in Spanish would mean learning every technical word twice. In our classes, "variable", "loop" and "function" arrive in the same language as their school exams, so the vocabulary carries straight into IGCSE or Diploma work.' },
          { h3: 'Spanish-first families who want both', p: 'Your child goes to a Spanish-medium colegio and you would like English to become something they use, not only study. An hour of coding gives a reason to listen, ask and explain in English, and the screen does half the explaining. It is English with a purpose: the game only works once the instruction is understood.' },
          { h3: 'Teenagers and adults with plans', p: 'University reading lists, documentation, error messages and most programming help online are in English. A teenager preparing for university or an adult retraining for remote work learns Python, Java or AI the way the industry writes about it, and practises explaining technical ideas aloud.' }
        ] },
        { kind: 'p', mt: true, html: 'We are honest about the other side. A child who understands very little spoken English will find the first weeks tiring, and for a six year old in that position we usually suggest starting one to one, where the mentor can slow down without holding a group back. We do not teach in Spanish, and it is fairer to say so here than after a free class.' }
      ]
    },
    {
      id: 'english',
      tint: 'tint',
      eyebrow: 'English in Lima',
      h2: 'How strong is English in Lima, and is it enough for a live class?',
      lede: 'Stronger than in any other Peruvian city the most widely quoted ranking covers. The EF English Proficiency Index 2025 rates Lima "High" with a score of 555, while Peru as a whole scores 519 and sits in the "Moderate" band.',
      body: [
        { kind: 'table', numCols: [1], caption: 'English proficiency by Peruvian city, EF EPI 2025', head: ['City', 'EF EPI 2025 score', 'EF band'], rows: [
          ['Lima', '555', 'High'],
          ['Cusco', '520', 'Moderate'],
          ['Trujillo', '519', 'Moderate'],
          ['Arequipa', '512', 'Moderate'],
          ['Huancayo', '499', 'Low'],
          ['Piura', '484', 'Low'],
          ['Chiclayo', '474', 'Low'],
          ['Ica', '467', 'Low']
        ] },
        { kind: 'source', html: 'Source: EF Education First, EF English Proficiency Index 2025, Peru country page (city scores and bands as published), read on 8 November 2026. EF bases the index on test results of 2.2 million adults in 123 countries and regions. Peru ranks 52nd of 123 and 8th of 20 in Latin America; the Lima region, which is wider than the city, scores 544.' },
        { kind: 'two', mt: true,
          leftH3: 'What the numbers say',
          left: [
            'EF tests adults who choose to sit its online test, so this is not a measure of Lima\'s children, and it is not a school result. It is still the clearest public signal that English is a working language for a large part of the capital.',
            'The detail matters more than the rank. Across Peru, EF 2025 scores reading at 540 but speaking at 480, the lowest of the four skills. That pattern is familiar to anyone who learnt English from textbooks: you understand far more than you can say.'
          ],
          rightH3: 'What we do about it',
          right: [
            'A live coding class is mostly listening and short spoken answers, which suits that profile. Mentors speak slowly, repeat an instruction in simpler words, and show each step on the shared screen before asking for it.',
            'Speaking is built in small pieces: naming a block, reading a line of code aloud, then explaining in one sentence why a program failed. By the second month most children answer without being asked twice, and the code itself is the same in any language.'
          ] }
      ]
    },
    {
      id: 'school',
      eyebrow: 'What school gives',
      h2: 'How much English and computing does Peruvian school teach?',
      lede: 'Some English, a few periods a week, and no computing subject at all. The national curriculum, the CNEB, sets the weekly timetable in teaching periods of 45 minutes.',
      body: [
        { kind: 'table', numCols: [], caption: 'English and computing in the national plan of studies (CNEB)', head: ['Level', 'English periods a week', 'Minutes a week (our calculation)', 'Computing subject'], rows: [
          ['Primaria, grades 1 and 2', '2 of 30', '90', 'None; digital skills are transversal'],
          ['Primaria, grades 3 to 6', '3 of 30', '135', 'None; digital skills are transversal'],
          ['Secundaria, regular school day (JER)', '3 of 35', '135', 'None; digital skills are transversal'],
          ['Secundaria, full school day (JEC)', '5 of 45', '225', 'None; digital skills are transversal']
        ] },
        { kind: 'source', html: 'Source: MINEDU, Currículo Nacional de la Educación Básica (CNEB), plan of studies tables for primaria and secundaria, read on 8 November 2026. A teaching period ("hora pedagógica") is 45 minutes; the minutes column is our own multiplication. Private bilingual and international schools set their own, usually much larger, English timetables.' },
        { kind: 'two', mt: true,
          leftH3: 'English, on paper and in practice',
          left: [
            'For primaria, the CNEB itself is cautious: it says English is phased in "dependiendo de la contratación de estos docentes", depending on whether the school has hired a specialist English teacher, and where it has not, the hours become free-choice periods.',
            'So two Lima classmates of the same age, at different schools, may meet very different amounts of English. One at a bilingual school spends most of the day in English; one at a public school may have three periods a week, or none in the early grades.'
          ],
          rightH3: 'Computing, nowhere on the timetable',
          right: [
            'No area of the CNEB plan of studies is called computing or programming. Digital skills sit in competency 28, "Se desenvuelve en entornos virtuales generados por las TIC", which the CNEB lists among the "competencias transversales a las áreas": skills every subject is meant to touch, owned by none of them.',
            'MINEDU has started to experiment. In July 2025 its Fábrica de Programadores pilot set out to train 1,000 pupils in 4th and 5th of secundaria in Lima Norte in Python, with the chance to take the PCEP exam at the end. That is a pilot, not a subject, and most Lima children will not meet it.'
          ] },
        { kind: 'p', mt: true, html: 'That is the gap these classes fill. A child at a bilingual school gets the English but rarely the coding; a child at a Spanish-medium school usually gets neither in any depth. Our classes add both, alongside school and never in place of it.' }
      ]
    },
    {
      id: 'ib',
      tint: 'tint',
      eyebrow: 'IB and Cambridge',
      h2: 'Do IB and Cambridge students in Peru need computer science in English?',
      lede: 'For a student who takes the subject in English, everything is in English: the coursework, the internal assessment and the final exam. And more Peruvian students take the IB than most parents realise.',
      body: [
        { kind: 'two',
          leftH3: 'The IB Diploma in Peru',
          left: [
            'MINEDU reported on 17 April 2026 that 2,502 students in Peru obtained the IB Diploma in 2025, and that students of the 25 public COAR schools made up 47% of them: 1,179 Diplomas from the November 2025 session, out of 1,740 COAR candidates for the full Diploma.',
            'By our own subtraction, that leaves roughly 1,300 IB Diplomas earned in 2025 at schools outside the COAR network. The same MINEDU release adds that 515 COAR students in 5th of secundaria gained Cambridge English certificates, a reminder that English and the Diploma travel together.'
          ],
          rightH3: 'What universities in Lima do with it',
          right: [
            'Two Lima universities publish an IB route in their own admission guides. The Universidad de Lima has an admission route for holders of the IB Diploma who apply within three years of earning it. PUCP has a Diploma de Bachillerato route and says Bachillerato courses can be recognised for up to 23 university credits.',
            'Each university decides who it admits and what it recognises; we do not, and we are not connected with the IB, COAR, MINEDU or any university. What we can do is make sure a Diploma or IGCSE student understands their computer science and maths deeply, in the language they will be examined in.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Which of our courses fits which school programme', head: ['School programme', 'What our course covers', 'Our course'], rows: [
          ['Cambridge IGCSE Computer Science (0478)', 'The full syllabus, taught from the basics', 'IGCSE Computer Science 0478'],
          ['Cambridge IGCSE Mathematics', 'Core, Extended and Additional Mathematics', 'IGCSE Maths'],
          ['IB Diploma Computer Science, SL or HL', 'Theory, programming and the internal assessment', 'IB DP Computer Science'],
          ['IB Mathematics AA or AI, SL or HL', 'Both courses, with coaching on the internal assessment', 'IB Maths AA and AI'],
          ['No exam board, just curiosity', 'Scratch from 6, or typed Python from about 9', 'Coding for Kids or Python for Teens']
        ] },
        { kind: 'source', html: 'Sources: MINEDU press release on COAR IB results, 17 April 2026; Universidad de Lima, Guía del postulante 2027-1(A); PUCP, Guía del postulante; all read on 8 November 2026. The figure of roughly 1,300 is our own: 2,502 minus 1,179. Courses are ours and are taught alongside school; the school, Cambridge or the IB sets and marks every assessed piece of work.' }
      ]
    },
    {
      id: 'project',
      eyebrow: 'A real lesson',
      h2: 'What does a lesson look like? Sorting real English scores with Python',
      lede: 'Here is a lesson we teach to learners from about 11, built on the EF city scores above. It teaches the two habits that catch most bugs in any program that sorts things into groups: put your checks in the right order, and test the edges.',
      body: [
        { kind: 'two',
          leftH3: 'The task',
          left: [
            'EF puts every score into a band, and its page data draws the band lines at 600, 550, 500 and 450. We give the learner the eight city scores and ask for a small function, <code>band(score)</code>, that names the band for any score.',
            'Most first attempts look like Version 1. It reads naturally from the bottom up: above 450 is low, above 500 is moderate, and so on. It runs without an error message, which is exactly why it is dangerous.'
          ],
          rightH3: 'The surprise',
          right: [
            'Every city comes out "low", Lima included. The reason is that Python checks the conditions from the top and stops at <strong>the first true check</strong>. A score of 555 is at least 450, so the function answers "low" and never looks further.',
            'The fix is not a cleverer condition; it is a better order. Version 2 keeps the band lines in a list, from the highest down, and walks through them.'
          ] },
        { kind: 'code', label: 'Version 1: reads well, answers wrongly', lang: 'Python', code: V1, note: 'It prints eight lines, every one of them low, starting with <code>Lima 555 low</code> and ending with <code>Ica 467 low</code>.' },
        { kind: 'code', label: 'Version 2: highest line first, then test the edges', lang: 'Python', code: V2, note: 'Run after Version 1, it prints <code>Fixed: {\'high\': 1, \'moderate\': 3, \'low\': 4}</code>, which matches EF\'s own bands for all eight cities, then <code>Edge 549 moderate</code>, <code>Edge 550 high</code>, <code>Edge 499 low</code> and <code>Edge 500 moderate</code>.' },
        { kind: 'p', mt: true, html: 'Then comes the part that turns a coder into a careful one. We ask the learner to change <code>&gt;=</code> to <code>&gt;</code> and run it again. The count of cities does not change at all: high 1, moderate 3, low 4. Only the edge tests move, and 550 and 500 drop a band. Two rules can agree on every real city and still disagree at the edge, and only a test written on purpose at the edge will show it.' },
        { kind: 'p', html: 'EF\'s page does not say which side of a line a score of exactly 550 falls on, so neither rule can be proved right from the data. The honest answer is to write the assumption down in a comment, which is what we teach. It is the same habit a Diploma student needs in an internal assessment and a developer needs at work.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 8, no screen.</strong> Sort ten toy cars into "small", "medium" and "big" boxes using a ruler. Then find a car exactly on a line. Which box does it go in, and who decided?',
          '<strong>Ages 8 to 10, Scratch.</strong> Make a quiz that says "cold", "warm" or "hot" for a temperature. Try the numbers right on your dividing lines before you show anyone.',
          '<strong>Ages 11 to 14, Python.</strong> Type Version 1, predict its output before you run it, then write Version 2 without looking at ours.',
          '<strong>Ages 14 and up.</strong> Add a fifth line for "very low" below 450 and write four edge tests of your own. Then explain, in two English sentences, why the city count could not catch the bug.'
        ] }
      ]
    },
    {
      id: 'think',
      tint: 'tint',
      eyebrow: 'Thinking, not copying',
      h2: 'Will my child learn to think, or just copy answers from AI?',
      lede: 'To think. We teach learners to reason through a problem before any tool writes code for them, and we check that they can explain every line they hand in.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Explain before typing', p: 'Before a learner writes a program, they say in English what it should do and how they will know it works. The edge tests in the lesson above are part of that plan, not an extra.' },
          { h3: 'AI with age rules', p: 'Children do not use adult chatbot accounts in our classes. Claude, for example, is for users aged 18 and over, and ChatGPT needs a parent\'s permission for anyone under 18. Older learners use AI tools to check and question their own work, not to replace it.' },
          { h3: 'Depth over speed', p: 'We would rather a learner understand one program completely than copy ten. The same standard applies whether the learner is in Miraflores, Comas or Mumbai: one level of teaching, wherever you are.' }
        ] },
        { kind: 'p', mt: true, html: 'Peru\'s own computing competition makes the same point. The Peruvian Informatics Olympiad, OPI, organised by UTEC and open free of charge to all secundaria pupils in Peru, bans generative AI for solving problems in its 2025 rules. A teenager who wants to try it needs to reason alone, in code, against the clock. We are not connected with UTEC or the OPI; we simply teach the kind of thinking it rewards, with problems we write ourselves.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Lima times',
      h2: 'What time are the classes in Lima?',
      lede: 'Whenever suits you. Peru keeps the same clock all year, UTC minus 5 with no daylight saving, and India keeps UTC plus 5:30, so India is always 10 hours 30 minutes ahead of Lima. The table converts a few Lima hours; it is a clock, not a timetable.',
      body: [
        { kind: 'table', numCols: [], caption: 'Peru time and India time, the same on every day of the year', head: ['Peru time (Lima)', 'India time', 'Note'], rows: [
          ['07:00', '17:30', 'Before school in Lima, evening in India'],
          ['10:00', '20:30', 'A Saturday morning in Lima'],
          ['12:00', '22:30', 'Noon in Lima'],
          ['16:00', '02:30, next day', 'After school in Lima'],
          ['19:00', '05:30, next day', 'Evening in Lima, early morning in India'],
          ['21:00', '07:30, next day', 'Late evening in Lima']
        ] },
        { kind: 'source', html: 'Source: IANA time zone database, zone America/Lima (UTC minus 5; Peru last used summer time in 1994) and zone Asia/Kolkata (UTC plus 5:30); Peru\'s official time, kept by INACAL, matched UTC minus 5 when we checked on 8 November 2026. Conversions are ours.' },
        { kind: 'p', mt: true, html: 'At booking you choose the hour on your own clock; the mentor\'s calendar shows the same moment in India time. Neither Peru nor India moves its clocks, so a class agreed for 17:00 in Lima is still at 17:00 in January and in July, in the summer break and in term.' },
        { kind: 'p', html: 'A class needs a laptop or desktop computer, a stable connection and, ideally, a headset with a microphone. Lima is well connected: INEI reports that 84.7% of households in Lima Metropolitana had internet in the second quarter of 2026. Across Peru, though, only 36.4% of households had at least one computer, so check the device before the first class. A phone is fine for watching, but not for typing code.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'What a learner can do, in code and in English, at each stage',
    lede: 'These milestones are ours, not a school standard. They decide which batch a learner joins, and they give parents a plain record of progress in code and in English.',
    table: { numCols: [], caption: 'Coding and English milestones (ours)', head: ['Stage', 'Typical age', 'In code, the learner can', 'In English, the learner can'], rows: [
      ['1. Order', '6 to 7', 'Arrange steps so a sprite walks, turns and talks', 'Follow first, next, then, last'],
      ['2. Repeat', '7 to 9', 'Use loops and react to a click or a key', 'Say what repeats and when it stops'],
      ['3. Remember', '8 to 10', 'Keep a score in a variable and change it', 'Describe a bug in one short sentence'],
      ['4. Type', '9 to 12', 'Write short Python with conditions', 'Read a line of code aloud and explain it'],
      ['5. Test', '11 and up', 'Sort data into groups and test the edges', 'Explain an assumption and its limits'],
      ['6. Examine', '14 to 18', 'Tackle IGCSE or IB computer science tasks', 'Write the technical answers exams expect']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 5 is the Python lesson above. A learner who reaches it starts asking "what happens exactly on the line?" about marks, prices and rules, not only code.',
      'Our notes to parents describe things built and ideas explained, not hours logged.'
    ] },
    right: { h3: 'For learners', ps: [
      'When a program runs without an error, it can still be wrong. Check a case you already know the answer to.',
      'If you cannot say what your code does in one English sentence, you are not finished yet.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for Lima learners',
    lede: 'Each is live and in English, led by a mentor your learner keeps, whether in a batch or alone.',
    bands: [
      { num: 'I', h3: 'Younger learners', sub: 'Ages 8 to 15', courses: [
        { code: 'EMC / YOUNG / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'Typed Python, turtle drawings and small AI projects for children ready to type.' },
        { code: 'EMC / YOUNG / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox game coding', blurb: 'Games they design and script in Luau, ages 8 to 14.' },
        { code: 'EMC / YOUNG / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Fractions, patterns and graphs worked out in Python, for 10 to 15 year olds.' }
      ] },
      { num: 'II', h3: 'Teenagers going further', sub: 'Ages 13 to 18', courses: [
        { code: 'EMC / TEEN / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Objects, classes and real programs, from a complete beginner.' },
        { code: 'EMC / TEEN / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'Python to working models; school maths is enough to begin.' },
        { code: 'EMC / TEEN / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving and DSA', blurb: 'Logic, data structures and algorithms, the base for competitions.' }
      ] },
      { num: 'III', h3: 'Cambridge and IB subjects', sub: 'IGCSE and Diploma years', courses: [
        { code: 'EMC / EXAM / 01', slug: 'igcse-computer-science-0478-course', title: 'IGCSE Computer Science 0478', blurb: 'The full syllabus from the basics, joinable any month.' },
        { code: 'EMC / EXAM / 02', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB Maths AA and AI', blurb: 'SL and HL with coaching on the internal assessment.' },
        { code: 'EMC / EXAM / 03', slug: 'igcse-mathematics-mastery', title: 'IGCSE Maths', blurb: 'Core, Extended and Additional Mathematics, in exam English.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'What a week of live classes looks like from Lima',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Mornings', l: 'Lima mornings land in the Indian evening, a natural hour for a class.' },
      { time: 'After school', l: 'Afternoons and evenings in Lima work too; tell us the hour and we find the mentor.' },
      { time: '1-on-1', l: 'Your own hour and pace, for a learner who wants a mentor alone.' }
    ],
    cells: [
      { h3: 'A steady mentor', p: 'Your child keeps one teacher, who soon knows how they reason.' },
      { h3: 'Plain spoken English', p: 'Short sentences, repeated in simpler words when needed.' },
      { h3: 'Hands on the keyboard', p: 'The learner builds from the first class; nobody just watches.' },
      { h3: 'Groups by age', p: 'Six year olds and fifteen year olds never share a class.' },
      { h3: 'Notes for parents', p: 'What was built, what was hard and what comes next.' },
      { h3: 'Group or alone', p: 'Fifteen to twenty learners, or one learner and one mentor.' }
    ]
  },

  projectsH2: 'What older students have built',
  projectsLede: 'Stay with coding for a few years and the projects get serious. Here is some work by our older students; there is plenty more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Google reviews from parents and students, quoted word for word.',

  fees: {
    h2: 'Fees for families in Lima',
    lede: 'We bill in US dollars, by card. Your bank turns each charge into soles at its own rate on the day, which is why the figure on your statement can move a little from month to month.',
    free: ['A free first class', 'A short puzzle and a first program', 'No card required'],
    group: ['Fifteen to twenty learners of a similar age', 'The same mentor every week', 'Two live classes a week', 'Monthly, and you can stop any month'],
    one: ['One learner, one mentor', 'Pace and projects set around your child', 'Hours chosen by your family']
  },

  faq: {
    eyebrow: 'Lima families ask',
    h2: 'English-medium coding classes in Lima: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. All our classes are live online lessons in English, and only in English. Mentors speak clearly, adjust their speed and accent to each learner, and show every step on the shared screen, so a child whose English is still growing can follow. Scratch blocks and Python read the same whatever language you speak at home.' },
      { q: 'Who are these classes for?', a: 'Families in Lima who want coding taught in English: pupils at bilingual, Cambridge and IB schools, children at Spanish-medium schools whose parents want coding and English practice together, teenagers preparing for university, and adults learning Python, Java or AI for work.' },
      { q: 'What age can my child start?', a: 'From 6. Children of 6 to 12 start with Scratch, where blocks snap together and little reading or typing is needed. From about 9 they can move to typed Python. Teenagers and adults can start straight with Python or Java.' },
      { q: 'My child\'s English is still basic. Can they keep up?', a: 'Usually, yes, if they understand simple spoken instructions. Lessons are mostly short instructions and doing, and the mentor repeats in simpler words. For a young child with very little English we suggest one-to-one classes at first, so the mentor can slow down freely. The free first class will show you.' },
      { q: 'When are classes in Lima time?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Peru stays on UTC minus 5 all year and India on UTC plus 5:30, so India is always 10 hours 30 minutes ahead: 10:00 in Lima is 20:30 in India.' },
      { q: 'Do you help IB and IGCSE students with computer science?', a: 'Yes. We teach IB Diploma Computer Science at SL and HL, IGCSE Computer Science 0478, and IB and IGCSE maths, alongside the student\'s school. The school, Cambridge or the IB sets and marks all assessed work; we help the student understand it deeply.' },
      { q: 'Are you connected with MINEDU, COAR, the IB or a Lima school?', a: 'No. We are an independent online school with mentors based in India. We are not connected with MINEDU, COAR, the IB, Cambridge, any university or any school in Lima, and we do not award Peruvian qualifications. Learners who finish a course receive our own certificate of completion.' },
      { q: 'Does Peruvian school teach coding?', a: 'Not as a subject. The national curriculum, the CNEB, contains no computing area; it treats digital skills as a transversal competency that other subjects share. MINEDU ran a Python pilot, Fábrica de Programadores, for 1,000 pupils in 4th and 5th of secundaria in Lima Norte from July 2025.' },
      { q: 'Will my child use AI tools in class?', a: 'Only tools that suit their age, and only after they can solve the problem themselves. Children do not use adult chatbot accounts: Claude is for adults aged 18 and over, and ChatGPT needs a parent\'s permission under 18. We teach learners to think first and use AI to check their reasoning.' },
      { q: 'How are fees paid?', a: 'By card, in US dollars. Your bank converts each payment into soles, so the amount you see on your statement can vary slightly between months. The first class costs nothing, and we do not ask for card details to book it.' },
      { q: 'What does my child need at home?', a: 'A laptop or desktop computer, a stable internet connection and ideally a headset with a microphone. A phone is enough to watch but not to type code. Classes run on a normal video call, so no special software is needed for the first class.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Lima families weighing up coding in English.',
    items: [
      { href: '/ib-computer-science-online-tuition', label: 'IB computer science tuition', p: 'Diploma computer science in more depth.' },
      { href: '/coding-for-igcse-students', label: 'Coding for IGCSE students', p: 'How coding supports Cambridge courses.' },
      { href: '/ib-maths-tuition-online', label: 'IB maths tuition online', p: 'Analysis and Applications at SL and HL.' },
      { href: '/we-teach-you-how-to-think', label: 'We teach you how to think', p: 'Why reasoning comes before tools.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'The minimum age for each AI tool.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A full description of our live classes.' }
    ]
  },

  start: {
    h2: 'Book a free first class from Lima',
    lede: 'In the free class your child solves a small puzzle and writes a first program. Meanwhile the mentor notices how they reason and how much spoken English they follow, and afterwards suggests a course, batch or one-to-one, and an hour that fits your week.',
    readFirst: 'Prefer to read before booking? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> walks through a class minute by minute, and the <a class="ag-inline-link" href="/courses">course list</a> holds each syllabus.',
    note: 'All lessons happen live over video, led from India, in English alone. For a fast answer, write to us on WhatsApp in English.',
    formNote: 'Free, with no card and no commitment.'
  },

  footer: {
    cols: [
      { h4: 'IB and Cambridge', links: [
        { href: '/ib-computer-science-online-tuition', label: 'IB computer science' },
        { href: '/ib-maths-tuition-online', label: 'IB maths tuition' },
        { href: '/coding-for-igcse-students', label: 'Coding for IGCSE' },
        { href: '/cambridge-igcse-computer-science-tuition', label: 'IGCSE computer science' }
      ] },
      { h4: 'Learning to code', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids' },
        { href: '/python-for-10-year-olds', label: 'Python at ten' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Test the edge, not just the middle'
  },

  personalityCss: `
.ag-root.ag-emc .ag-hero h1 { letter-spacing: -0.01em; max-width: 18ch; }
.ag-root.ag-emc .ag-capsule { border-left-width: 6px; border-radius: 0; }
.ag-root.ag-emc .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-emc .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-emc .ag-code-note code { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'EF Education First, EF English Proficiency Index 2025 (Peru page and global page); MINEDU, Currículo Nacional de la Educación Básica (plan of studies tables, competency 28); MINEDU press releases on COAR IB results (17 April 2026) and Fábrica de Programadores (24 July 2025); Universidad de Lima Guía del postulante 2027-1(A); PUCP Guía del postulante; UTEC OPI home and 2025 rules; INEI TIC en los Hogares II Trimestre 2026; IANA tz database and INACAL official time. All read 8 November 2026.',
    localProject: 'An original Python lesson on the EF EPI 2025 scores of eight Peruvian cities: a bottom-up if/elif chain labels every city "low" (Lima 555 low) because the first true check wins; the fix orders the band lines from the top and adds edge tests (Edge 549 moderate, Edge 550 high); switching >= to > leaves the city count unchanged and moves only the edges. Plus screen-free and Scratch versions. Lesson family: order your checks and test the edges.',
    requiredMentions: ['clases de programación en inglés', 'Lima 555 low', 'Edge 549 moderate', 'Edge 550 high', 'the first true check', 'Two rules can agree on every real city and still disagree at the edge', 'dependiendo de la contratación de estos docentes', '1,179 Diplomas from the November 2025 session', 'Test the edge, not just the middle'],
    sources: [
      { claim: 'Lima 555 High; Peru 519 Moderate, 52 of 123, 8 of 20 in Latin America; city scores; skill scores; band lines.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'EF EPI 2025 is based on 2.2 million adults in 123 countries and regions.', url: 'https://www.ef.com/wwen/epi/' },
      { claim: 'English periods per week, 45-minute teaching period, competency 28 as transversal, no computing area.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: '2,502 IB Diplomas in Peru in 2025, COAR 47%, 1,179 of 1,740 COAR candidates, 515 Cambridge English certificates.', url: 'https://www.gob.pe/institucion/minedu/noticias/1380061-mas-de-1100-estudiantes-de-los-coar-obtienen-diploma-del-bachillerato-internacional-y-alcanzan-estandares-de-nivel-mundial' },
      { claim: 'Universidad de Lima IB Diploma admission within three years.', url: 'https://www.ulima.edu.pe/sites/default/files/2026-11/admision_20271a_guia_del_postulante_v10.pdf' },
      { claim: 'PUCP Diploma de Bachillerato route, up to 23 credits.', url: 'https://admision.pucp.edu.pe/guia-del-postulante' },
      { claim: 'Fábrica de Programadores: 1,000 pupils, 4th and 5th secundaria, Lima Norte, Python, PCEP.', url: 'https://www.gob.pe/institucion/minedu/noticias/1214050-minedu-impulsa-iniciativa-fabrica-de-programadores-para-formar-a-escolares-con-certificacion-internacional-en-programacion' },
      { claim: 'OPI organised by UTEC, free for secundaria; generative AI banned in the 2025 rules.', url: 'https://opi.utec.edu.pe/Reglamento_OPI_2025.pdf' },
      { claim: 'Lima Metropolitana 84.7% of households with internet; 36.4% of Peruvian households with a computer (II Trimestre 2026).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'Peru UTC-5 all year, no DST since 1994; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'A count of international, bilingual, Cambridge or IB schools in Lima: only a commercial directory found via search, not a primary source; not used. ibo.org returned 403 and was not retried.',
      'Naming any Lima school, or any school as a source of our students: refused.',
      'EF EPI as a measure of children\'s English: EF tests adults, and the page says so.',
      'That the roughly 1,300 non-COAR Diplomas were mostly in Lima or at private schools: not published, so not said.',
      'Spanish-language teaching, Peruvian qualifications or any affiliation with MINEDU, COAR, the IB, Cambridge, UTEC or a university: none, and the page says so.',
      'Admission, grade or job promises: none made.'
    ]
  }
};
