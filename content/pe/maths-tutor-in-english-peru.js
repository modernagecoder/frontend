// SHIP: market (en subject door) | a maths tutor who teaches in English: diagnose, explain, check | the add-the-tops-and-bottoms fraction error, found with Fraction and an estimate
'use strict';
// Maths tutor in English, Peru (ag- English subject door, Peru cluster row PE029, P3, hubGroup subjects).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08: timing flexible, any time.
// Fees render in USD from the template only (priceSubject 'maths'); no typed figure, no soles.
// Search: "profesor de matematicas en ingles" (KEYWORDS.md section 3), English "ib maths tutor online", "maths tutor".
// Spanish twin (live): profesor-de-matematicas-en-ingles-peru (spine: CNEB competencies, notation and false friends, word
// problems to equations). This page takes a different spine: what a tutor does in a session (diagnose a misconception,
// explain it, check by estimating), the maths checkpoints a student in Peru meets, the yearly maths time a school gives
// (our calculation), and an original fraction lesson. Different table, different lesson family.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/facts-school/src/ and src-pages/, fetched
// 8 November 2026; quotes grepped in the raw text by scratchpad pe/e5/verify.py):
//  - CNEB https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf (cneb): "horas pedagógicas
//    (45 minutos)"; primaria "Matemática 5 5 4 4 4 4"; secundaria JER "Matemática 4 4 4 4 4"; JEC "Matemática 6 6 6 6 6";
//    "Resuelve problemas de regularidad, equivalencia y cambio"; "Competencia 23: Resuelve problemas de cantidad."
//  - RM 501-2025-MINEDU https://cdn.www.gob.pe/uploads/document/file/8968298/7380466-rm-n-501-2025-minedu.pdf (OCR; table
//    checked by eye on the page image rm501-2025-page11.png): "treinta y seis (36) semanas lectivas"; "Del 16 marzo al 15 de
//    mayo" ... "Del 19 octubre a 18 de diciembre".
//  - MINEDU, 9 Nov 2025 (n-enla2026-200mil): ENLA 2025 "entre el 11 y el 13 de noviembre" to "más de 200 mil estudiantes de
//    8700 instituciones educativas"; grades "4.° grado de primaria en Lectura y Matemática; 2.° grado de secundaria".
//  - MINEDU, 13 May 2026 (n-enla2025): "resultados similares a los obtenidos en 2023 y 2024 en Lectura y Matemática";
//    "En 2.º grado de secundaria, se registran avances en Matemática frente al 2023".
//  - UGEL 06 oficio múltiple (ugel06-onem-2026): ONEM "NIVEL 1: 1° y 2° grado de educación secundaria"; "Consta de diez (10)
//    ítems de respuesta construida cerrada"; "La prueba tiene una duración de dos (02) horas."
//  - El Peruano, 11 Oct 2026 (elperuano-onem2026): "la ONEM 2026 convocó a más de 1,7 millones de estudiantes de secundaria".
//  - UNI admission 2026-2 (uni-adm2026-2): "2. Segunda prueba: - MATEMÁTICA"; "tres pruebas tomadas en tres días".
//  - PUCP Guía del postulante (pucp-guia): "con especial énfasis en las áreas de comprensión lectora y matemáticas."
//  - Universidad de Lima Guía 2027-1(A) (ulima-guia-20271a): "El examen de escolares es una prueba única de aptitud académica
//    y de conocimientos"; "restándolo por cada respuesta equivocada"; "Domingo 15 de noviembre de 2026, 7.00 horas".
//  - MINEDU 17 Apr 2026 (n-coar-ib-1100): "2502 estudiantes obtuvieron el Diploma del Bachillerato Internacional".
//  - EF EPI 2025 Peru https://www.ef.com/wwen/epi/regions/latin-america/peru/ (ef_peru.raw): efEpiScore 519 moderate; Lima
//    high 555; Reading 540, Speaking 480.
//  - Time: Peru UTC-5 all year (tzdata America/Lima, last Rule Peru 1994); India UTC+5:30; India 10 h 30 min ahead.
// Our calculations: 5 x 45 = 225 min/week, x 36 weeks = 8,100 min = 135 h; 4 x 45 = 180, x 36 = 6,480 = 108 h;
// 6 x 45 = 270, x 36 = 9,720 = 162 h (upper bounds: holidays and school events not subtracted).
// Code (scratchpad pe/e5/maen_v1.py, maen_v2.py, python3 -I): v1 prints "1/2 + 1/3: shortcut 2/5, true 5/6",
// "2/5 + 1/4: shortcut 1/3, true 13/20", "3/4 + 3/4: shortcut 3/4, true 3/2", "1/6 + 5/6: shortcut 1/2, true 1";
// v2 prints "pairs tried: 1296", "shortcut caught by the estimate: 1296", "true sums that pass the estimate: 1296".
// Lesson family: diagnose a misconception (add the tops, add the bottoms), prove it wrong exactly with fractions.Fraction,
// then catch it for ever with a one-line estimate (a sum of two positives beats the larger one).

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'from fractions import Fraction',
  '',
  'def quick_add(a, b, c, d):',
  '    # the shortcut many learners invent: add the tops, add the bottoms',
  '    return Fraction(a + c, b + d)',
  '',
  'def true_add(a, b, c, d):',
  '    return Fraction(a, b) + Fraction(c, d)',
  '',
  'tests = [(1, 2, 1, 3), (2, 5, 1, 4), (3, 4, 3, 4), (1, 6, 5, 6)]',
  'for a, b, c, d in tests:',
  '    print(f"{a}/{b} + {c}/{d}: shortcut {quick_add(a, b, c, d)}, true {true_add(a, b, c, d)}")'
].join('\n');

const V2 = [
  'from fractions import Fraction',
  '',
  'def quick_add(a, b, c, d):',
  '    return Fraction(a + c, b + d)',
  '',
  'def true_add(a, b, c, d):',
  '    return Fraction(a, b) + Fraction(c, d)',
  '',
  'def estimate_check(a, b, c, d, answer):',
  '    # a sum of two positive fractions must be bigger than the larger one',
  '    return answer > max(Fraction(a, b), Fraction(c, d))',
  '',
  'caught = 0',
  'total = 0',
  'for b in range(2, 10):',
  '    for d in range(2, 10):',
  '        for a in range(1, b):',
  '            for c in range(1, d):',
  '                total += 1',
  '                if not estimate_check(a, b, c, d, quick_add(a, b, c, d)):',
  '                    caught += 1',
  'print("pairs tried:", total)',
  'print("shortcut caught by the estimate:", caught)',
  'print("true sums that pass the estimate:", sum(',
  '    estimate_check(a, b, c, d, true_add(a, b, c, d))',
  '    for b in range(2, 10) for d in range(2, 10)',
  '    for a in range(1, b) for c in range(1, d)))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'subjects', label: 'Maths tutor in English' },
  slug: 'maths-tutor-in-english-peru',
  code: 'maen',
  accent: '#007047',
  accentRationale: 'Maths tutor in English, Peru: a deep chalkboard green #007047, the colour of the classroom board a tutor still reaches for when a fraction goes wrong; it passes 4.5:1 on the paper #FBF8F2 and on both darker papers (checked by the build).',
  pageType: 'market',
  market: PE_EN,
  priceSubject: 'maths',
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Maths tutor in English, Peru',
  title: 'Maths Tutor in English for Peru: Live Online Lessons',
  description: 'A maths tutor in English for learners in Peru: live online lessons, one to one or in a small group, from primaria to IB, with mistakes diagnosed and fixed.',
  ogDescription: 'What a maths tutor who teaches in English does in a session, the maths checkpoints a student in Peru meets, how much maths school gives in a year, and a real fraction lesson.',
  twitterDescription: 'Live online maths tutoring in English for Peru: one to one or a small group, any hour in Peru time.',
  pageName: 'Maths Tutor in English for Peru',
  webPageDescription: 'A guide for families and learners in Peru who want a maths tutor teaching in English, built from the MINEDU national curriculum (CNEB), the 2026 school-year norm, MINEDU and El Peruano reports on ENLA and ONEM, university admission guides, EF EPI 2025 and the tz database, with an original lesson on a common fraction mistake.',
  courseDescription: 'Live online maths tutoring taught in English for learners in Peru, from primaria to secundaria, IGCSE and the IB Diploma, and on to university maths: one to one or in a group of fifteen to twenty, at an hour the family chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Maths tutor in English',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#session', label: 'A session' },
    { href: '#lesson', label: 'Fraction lesson' },
    { href: '#checkpoints', label: 'Maths checkpoints' },
    { href: '#school', label: 'School maths time' },
    { href: '#clock', label: 'Peru times' }
  ],
  eyebrow: 'Peru &middot; Maths taught in English &middot; Primaria to university',
  h1: 'A maths tutor in English, for learners in Peru',
  lede: 'Searching for a <em>profesor de matemáticas en inglés</em> usually means one of three things: a pupil at a bilingual or IB school whose maths is examined in English, a family planning a move or a university abroad, or a learner who simply wants the subject and the language to grow together. This page explains what a tutor does in a real session, which maths checkpoints a student in Peru meets, and how much maths time school already gives, then shows one mistake being found and fixed.',
  secondaryCta: { href: '#lesson', label: 'See the fraction lesson' },
  wa: 'Hello Modern Age Coders, we are in Peru and are looking for a maths tutor who teaches in English. Could we book a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; every maths class live, online and in English',
  spec: [
    ['Who', 'Primaria, secundaria, IB, university, adults'],
    ['Format', 'One to one, or a group of fifteen to twenty'],
    ['Language', 'English, spoken slowly and clearly'],
    ['Exam boards', 'IB Maths, Cambridge IGCSE'],
    ['Peru times', 'Any hour that suits you'],
    ['First class', 'Free, with a short diagnostic']
  ],
  capsuleQ: 'In one paragraph',
  capsule: 'Modern Age Coders offers a maths tutor in English for learners in Peru: live online lessons given only in English, one to one or in a group of fifteen to twenty, at whatever hour suits you in Peru time. A tutor starts by finding the exact idea a learner has misunderstood, explains it in plain spoken English, and checks the fix with estimates and practice. We cover primaria and secundaria maths, Cambridge IGCSE, IB Maths AA and AI, SAT maths and university maths, as support next to school rather than a replacement for it.',

  picks: {
    eyebrow: 'Where tutoring usually begins',
    h2: 'Three maths courses a tutor builds on',
    lede: 'Tutoring works well on top of a clear course. These three cover the years when Peruvian families most often ask us for help: the move into algebra, the last years of secundaria, and the IB Diploma.',
    items: [
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'MAEN / 01', title: 'Middle School Maths', note: 'Pre-algebra and geometry, the stage where fractions, ratios and negative numbers either settle or start to wobble. A tutor finds the wobble early, before it reaches algebra.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'MAEN / 02', title: 'High School Maths', note: 'From algebra to calculus over about a year, matched to the topics of the last years of secundaria. Every method is explained in English and checked by the learner, not just copied down.' },
      { course: 'ib-mathematics-aa-ai-masterclass', code: 'MAEN / 03', title: 'IB Maths AA and AI', note: 'Both IB courses at SL and HL across the two Diploma years, with coaching on the exploration that keeps the work the student\'s own. Taught alongside the school, which sets and marks every assessed piece.' }
    ]
  },

  sections: [
    {
      id: 'who',
      eyebrow: 'Who asks',
      h2: 'Who looks for a maths tutor who teaches in English in Peru?',
      lede: 'Most requests from Peru come from one of three groups. The teaching is the same for all of them; the reason English matters is different.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Pupils examined in English', p: 'A student at an IB or Cambridge school writes maths answers in English. If a tutor explains in Spanish, the student still has to translate "hence", "show that" and "simplify fully" alone on exam day. We teach in the language of the paper, so the words and the methods arrive together.' },
          { h3: 'Families with plans abroad', p: 'A move, a scholarship or a university course taught in English is on the horizon. Maths is the subject where a learner can most quickly feel at home in a second language, because the symbols do half the work. A year of tutoring in English leaves the learner able to explain their own working out loud.' },
          { h3: 'Learners who want both at once', p: 'Some students at Spanish-medium colegios, and some adults, want maths support and English practice in the same hour. That works when the tutor speaks slowly, writes everything down and asks for short spoken answers. It is not a language class, but the language grows every week.' }
        ] },
        { kind: 'p', mt: true, html: 'One honest limit. A learner who follows almost no spoken English will spend the first sessions working hard just to understand the question. For that learner we start one to one, slowly, with more writing on the shared board and fewer words. Our tutors do not switch to Spanish, and we would rather say so here than after the first class.' }
      ]
    },
    {
      id: 'session',
      tint: 'tint',
      eyebrow: 'A real session',
      h2: 'What does a maths tutor in English actually do in a session?',
      lede: 'A good session is mostly detective work. The tutor\'s job is not to re-teach a whole chapter but to find the one idea that is broken, repair it, and prove the repair holds.',
      body: [
        { kind: 'ol', items: [
          '<strong>Ask for working, not answers.</strong> The learner solves two or three short problems on the shared board while thinking aloud in English. A wrong answer with visible working tells the tutor far more than a right answer copied from somewhere.',
          '<strong>Name the misconception.</strong> Most errors repeat. A learner who writes 1/2 + 1/3 = 2/5 is not careless; they are following a rule that feels sensible. The tutor names that rule out loud, so the learner can see it too.',
          '<strong>Break the rule with an example.</strong> Rather than saying "that is wrong", the tutor chooses a case where the rule gives a silly answer, such as half a pizza plus half a pizza coming to half a pizza. The learner finds the contradiction themselves.',
          '<strong>Rebuild the idea.</strong> Now the correct method makes sense, because the learner knows why the shortcut fails. For fractions that means equal-sized pieces first, then adding.',
          '<strong>Add a check that catches it next time.</strong> One quick estimate, done before the calculation, would have caught the mistake. The learner writes that check down in their own words.',
          '<strong>Practise, then mix.</strong> A few problems of the same kind, then the same idea hidden among others, so the learner has to recognise it unprompted.',
          '<strong>Leave a short note.</strong> Families receive a few lines in English: what went wrong, what was fixed, and what to watch in the next homework.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'One to one',
          left: [
            'Suits a specific gap, an exam in a few months, or a learner whose English is still growing. The tutor sets the pace minute by minute and can stay with one idea for a whole session if that is what it takes.',
            'Families in Peru often choose one-to-one tutoring for IB and IGCSE years, because the student\'s school calendar, coursework and exam board decide what each week should cover.'
          ],
          rightH3: 'A group of fifteen to twenty',
          right: [
            'Suits steady progress through a course, alongside learners of a similar age and level. Explaining an idea to classmates in English is itself practice, and hearing other people\'s mistakes is surprisingly useful.',
            'Groups follow a course plan; a learner who needs a particular topic repaired can add a few one-to-one sessions without leaving the group.'
          ] }
      ]
    },
    {
      id: 'lesson',
      eyebrow: 'A real lesson',
      h2: 'How does a tutor fix a fraction mistake? A worked example in Python',
      lede: 'This is a lesson we use with learners from about 11, and with older students who still carry the habit. It takes one misconception, proves it wrong with exact arithmetic, and ends with a check the learner can use for ever.',
      body: [
        { kind: 'two',
          leftH3: 'The habit',
          left: [
            'Asked for 1/2 + 1/3, many learners write 2/5. They add the numerators, add the denominators, and the answer looks tidy. The habit is common enough that we test for it in every first class with fractions.',
            'Python\'s <code>fractions</code> module keeps every result exact, with no decimals and no rounding, so it is a fair referee. We write the shortcut as a function and run it next to the true sum.'
          ],
          rightH3: 'What the learner sees',
          right: [
            'The shortcut gives 2/5 where the truth is 5/6. Worse, 3/4 plus 3/4 comes out as 3/4: adding something to itself changed nothing. And 1/6 plus 5/6, which is plainly one whole, comes out as a half.',
            'Those two absurd lines usually do the teaching. A learner who laughs at "three quarters plus three quarters is three quarters" has already understood why the rule cannot be right.'
          ] },
        { kind: 'code', label: 'Version 1: the shortcut against the truth', lang: 'Python', code: V1, note: 'It prints four lines: <code>1/2 + 1/3: shortcut 2/5, true 5/6</code>, <code>2/5 + 1/4: shortcut 1/3, true 13/20</code>, <code>3/4 + 3/4: shortcut 3/4, true 3/2</code> and <code>1/6 + 5/6: shortcut 1/2, true 1</code>.' },
        { kind: 'p', mt: true, html: 'Now the part that lasts. When you add two positive amounts, the total must be bigger than the larger of the two. That is a one-second estimate, and it needs no calculation at all. In Version 2 we ask Python to test the estimate on every pair of proper fractions with denominators from 2 to 9, which is 1,296 pairs, against both the shortcut and the true sum.' },
        { kind: 'code', label: 'Version 2: does one estimate catch the shortcut every time?', lang: 'Python', code: V2, note: 'It prints <code>pairs tried: 1296</code>, then <code>shortcut caught by the estimate: 1296</code> and <code>true sums that pass the estimate: 1296</code>. The estimate rejects every shortcut answer and accepts every true one.' },
        { kind: 'p', mt: true, html: 'Why does it work every time? The shortcut answer, (a + c)/(b + d), always lies between the two fractions you started with, so it can never be larger than both. Mathematicians call it the mediant. A learner does not need the name; they need the habit: <strong>a sum of two positives beats the larger one</strong>. Checked in one second, before any working, it catches the mistake for good.' },
        { kind: 'p', html: 'The lesson is about fractions, but the method is the one we use everywhere: find the rule the learner is really following, test it on cases where it breaks, and leave behind a cheap check. A learner who can say in English "my answer is smaller than one of the parts, so it is wrong" has learnt more than how to add fractions.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 7 to 9, no screen.</strong> Cut two paper strips the same length. Fold one in halves and one in thirds. Lay a half and a third end to end: is it more or less than one strip? Now say whether 2/5 can be right.',
          '<strong>Ages 10 to 12, on paper.</strong> Before adding 3/8 + 1/4, write down which is bigger and say "my answer must be more than that". Then add and check.',
          '<strong>Ages 12 to 15, Python.</strong> Type Version 1 and predict the four lines before running it. Then add a test of your own where the shortcut accidentally looks believable.',
          '<strong>Ages 15 and up.</strong> Prove that (a + c)/(b + d) lies between a/b and c/d when all four numbers are positive. Explain the proof in three English sentences.'
        ] }
      ]
    },
    {
      id: 'checkpoints',
      tint: 'tint',
      eyebrow: 'Maths checkpoints',
      h2: 'Which maths assessments does a student in Peru meet?',
      lede: 'Quite a few, from primaria to the end of secundaria, and each looks for something slightly different. Knowing which one is coming tells a tutor what to practise.',
      body: [
        { kind: 'table', numCols: [], caption: 'Maths checkpoints in Peru, as their organisers describe them', head: ['Checkpoint', 'Who meets it', 'What the organiser says about the maths'], rows: [
          ['ENLA 2025 (MINEDU national assessment)', '4th of primaria, 2nd and 5th of secundaria, sampled across the country', 'Maths in all three grades; applied 11 to 13 November 2025 to more than 200,000 pupils in 8,700 schools'],
          ['ONEM 2026 (national school maths olympiad)', 'Secundaria, in three levels: 1st and 2nd, 3rd and 4th, 5th', 'The school-stage paper has ten closed constructed-response items and lasts two hours'],
          ['UNI ordinary admission exam', 'Secondary-school leavers applying to the Universidad Nacional de Ingeniería', 'Three papers on three days; the second paper is entirely mathematics'],
          ['PUCP admission', 'Pupils in 5th of secundaria and school leavers', 'Admission exams with special emphasis on reading comprehension and mathematics'],
          ['Universidad de Lima school exam', 'Pupils in 5th of secundaria (Sunday 15 November 2026 for 2027-1)', 'A single test of academic aptitude and knowledge; wrong answers subtract marks'],
          ['IB Diploma maths', 'Students at IB schools, including the COAR network', 'Examined in the language of the student\'s programme; 2,502 students in Peru earned the Diploma in 2025']
        ] },
        { kind: 'source', html: 'Sources: MINEDU press releases of 9 November 2025 (ENLA 2025 application) and 17 April 2026 (IB Diploma results); UGEL 06 (MINEDU) oficio on ONEM 2026; Universidad Nacional de Ingeniería, Admisión 2026-2 page; PUCP, Guía del postulante; the Universidad de Lima admission guide for 2027-1(A); each checked on 8 November 2026. The descriptions in the right-hand column paraphrase each organiser; we are not connected with any of them.' },
        { kind: 'two', mt: true,
          leftH3: 'What the table means for tutoring',
          left: [
            'The national assessments and the university admission exams are written in Spanish, and we do not prepare anyone for them as a sales promise. What carries over is the maths: a learner who can reason through a problem, check an answer and avoid careless errors does better in any language.',
            'The Universidad de Lima rule is worth a moment. Because a wrong answer costs marks, guessing is a bad habit there, and so is rushing. Estimation, the habit taught in the lesson above, is exactly the skill that tells a student when to leave a question blank.'
          ],
          rightH3: 'Where English is the point',
          right: [
            'For IB and Cambridge students the language is the exam, so tutoring in English is not a bonus; it is the job. Command words, written justification and the structure of a full answer are taught along with the mathematics.',
            'For ONEM, MINEDU reported that the 2026 edition drew more than 1.7 million secundaria pupils. We never reproduce the organiser\'s problems; we teach the kind of reasoning olympiads reward with problems we write ourselves, and say plainly that entry goes through the school.'
          ] }
      ]
    },
    {
      id: 'school',
      eyebrow: 'School maths time',
      h2: 'How much maths does a Peruvian school year give, and where does a tutor fit?',
      lede: 'More than many parents think. The national curriculum gives maths four to six teaching periods a week in secundaria, and the 2026 school year had 36 teaching weeks. A tutor adds focus, not hours.',
      body: [
        { kind: 'table', numCols: [1, 2, 3], caption: 'Maths time in one Peruvian school year (our calculation from MINEDU figures)', head: ['Level and school day', 'Maths periods a week', 'Minutes a week', 'Hours a year, at most'], rows: [
          ['Primaria, grades 1 and 2', '5', '225', '135'],
          ['Primaria, grades 3 to 6', '4', '180', '108'],
          ['Secundaria, regular school day (JER)', '4', '180', '108'],
          ['Secundaria, full school day (JEC)', '6', '270', '162']
        ] },
        { kind: 'source', html: 'Sources: the plans of study for primaria and secundaria in MINEDU\'s national curriculum (CNEB), which counts in 45-minute periods called horas pedagógicas; RM 501-2025-MINEDU, the norm for the 2026 school year, which sets 36 teaching weeks in four blocks of nine. Minutes and hours are our own multiplication and are upper limits, because public holidays and school events take some periods away. Private schools may set their own timetable.' },
        { kind: 'two', mt: true,
          leftH3: 'Reading the numbers',
          left: [
            'A pupil on the regular secundaria day has about a hundred hours of maths a year at most; a JEC pupil, more than 160. One weekly hour of tutoring across the same weeks adds around 36 hours. That is not a second school; it is a magnifying glass on the topics that are not working.',
            'The 2026 calendar ran from 16 March to 18 December, in four teaching blocks with short breaks in May, July and October. Tutoring follows the same rhythm: lighter in the breaks, heavier when a block\'s tests are near.'
          ],
          rightH3: 'What the national results say',
          right: [
            'MINEDU\'s summary of ENLA 2025, published on 13 May 2026, says national results in reading and maths were similar to 2023 and 2024, and that 2nd of secundaria showed gains in maths over 2023, the first positive change since school closures.',
            'National averages do not describe your child. That is why every tutoring plan begins with a diagnostic of our own: two short sets of problems, one on number and one on algebra, and a conversation in English about how the learner solved them.'
          ] }
      ]
    },
    {
      id: 'english',
      tint: 'tint',
      eyebrow: 'Maths in English',
      h2: 'Is maths harder to learn in English for a student from Peru?',
      lede: 'Usually less hard than families fear. The symbols are the same in both languages, and most of the English needed is a short list of words a tutor teaches on purpose.',
      body: [
        { kind: 'two',
          leftH3: 'What EF\'s index suggests',
          left: [
            'The EF English Proficiency Index 2025 gives Peru 519 points, in the "Moderate" band, and Lima 555, the only Peruvian city rated "High". Across Peru, reading scores 540 and speaking 480, the weakest of the four skills.',
            'EF tests adults who take its online test, so it says nothing direct about any child. But the pattern, understanding more than you can say, matches what our tutors see in a first class.'
          ],
          rightH3: 'How a tutor works with that',
          right: [
            'Maths tutoring leans on listening and writing more than on long speeches. The tutor writes every key word on the board, uses the same phrase for the same idea every time, and asks for short spoken answers: "the denominator", "it is bigger", "I subtract both sides".',
            'Within a few weeks most learners can explain a method in two or three English sentences. That spoken explanation is also the truest test of understanding there is, in any language.'
          ] },
        { kind: 'p', mt: true, html: 'Our Spanish-language page, <a class="ag-inline-link" href="/profesor-de-matematicas-en-ingles-peru">profesor de matemáticas en inglés</a>, goes through notation, false friends and word problems in detail for Spanish-speaking parents. For one-to-one support in Spanish-language search terms, see <a class="ag-inline-link" href="/profesor-particular-de-matematicas-online-peru">profesor particular de matemáticas online</a>; for IB students, <a class="ag-inline-link" href="/tutor-ib-matematicas-en-ingles-peru">tutor de IB Matemáticas en inglés</a>. Every one of them describes classes taught live and in English.' }
      ]
    },
    {
      id: 'think',
      eyebrow: 'Thinking, not copying',
      h2: 'Will a tutor just give my child the answers?',
      lede: 'No. A tutor who hands over answers produces homework that looks finished and a learner who is not. We teach learners to reason through each step and to check their own work.',
      body: [
        { kind: 'three', cells: [
          { h3: 'The learner holds the pen', p: 'On the shared board, the learner writes and the tutor asks. A tutor who solves the problem for a student has only shown that the tutor can do maths.' },
          { h3: 'AI tools, with age rules', p: 'Anthropic\'s consumer terms set 18 as the minimum age for Claude, and OpenAI asks anyone under 18 to have a parent\'s permission before using ChatGPT, so children do not use these accounts with us. Older students may ask an AI to question their working, but only after solving the problem alone.' },
          { h3: 'The same standard everywhere', p: 'A learner in Lima, Trujillo, Cusco or a village with a good connection gets the same tutors, the same diagnostic and the same care. Online teaching removes the distance, not the quality.' }
        ] },
        { kind: 'p', mt: true, html: 'For IB students the rule is stricter still. The exploration in IB Maths must be the student\'s own work, so we teach the mathematics, the criteria and how to critique a draft, and we never write or edit the real one. The school\'s IB coordinator is the person who confirms what help is allowed.' }
      ]
    },
    {
      id: 'clock',
      tint: 'tint',
      eyebrow: 'Peru times',
      h2: 'What time would maths tutoring be in Peru?',
      lede: 'Whatever time suits you. Peru uses UTC minus 5 all year with no daylight saving, and India uses UTC plus 5:30, so India is always 10 hours 30 minutes ahead. The rows below are conversions only, not a timetable.',
      body: [
        { kind: 'table', numCols: [], caption: 'Six Peru times and the matching time in India', head: ['Peru time', 'India time', 'Who often picks it'], rows: [
          ['06:30', '17:00', 'Early risers, before the school run'],
          ['08:00', '18:30', 'Adults before work, or a holiday morning'],
          ['14:00', '00:30, next day', 'Secundaria pupils on a short school day'],
          ['17:30', '04:00, next day', 'After school and a snack'],
          ['20:00', '06:30, next day', 'After dinner, before homework is due'],
          ['22:00', '08:30, next day', 'University students and night owls']
        ] },
        { kind: 'source', html: 'Source: IANA time zone database, America/Lima (UTC minus 5; Peru\'s last summer time was in 1994) and Asia/Kolkata (UTC plus 5:30). The right-hand column is our own description, not a fixed slot.' },
        { kind: 'p', mt: true, html: 'Because neither country changes its clocks, an hour agreed in March is the same hour in December. You choose the time on your own clock when booking; the tutor\'s calendar converts it. A laptop or tablet with a keyboard, a quiet corner and a headset make the session far easier; a phone works for listening but is cramped for writing maths.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'How will you know the tutoring is working?',
    lede: 'Marks move slowly and for many reasons. These signs, which are ours, move sooner and tell you whether the learner is really changing how they do maths.',
    table: { numCols: [], caption: 'Signs of progress in maths tutoring (ours)', head: ['Stage', 'What you notice', 'What it shows'], rows: [
      ['1. Shows working', 'Homework has steps, not just answers', 'The tutor can now see where errors start'],
      ['2. Names the error', 'The learner says which rule went wrong', 'The misconception is visible to them too'],
      ['3. Estimates first', 'A rough answer appears before the calculation', 'Mistakes are being caught before they are handed in'],
      ['4. Explains in English', 'Two or three sentences describe a method aloud', 'Understanding, and the language to show it'],
      ['5. Mixes topics', 'Solves a problem without being told which chapter it is from', 'The idea transfers to new questions'],
      ['6. Works alone', 'Fewer questions for the tutor, more for the problem', 'Tutoring can become lighter or stop']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask your child to explain one problem from this week in English, in under a minute. Stage 4 is often the turning point.',
      'Stage 6 is the goal. A good tutor is working towards not being needed.'
    ] },
    right: { h3: 'For learners', ps: [
      'Before you calculate, say roughly what the answer should be. If the result disagrees, trust the disagreement.',
      'A mistake you can name is a mistake you will not make twice.'
    ] }
  },

  catalogue: {
    eyebrow: 'More maths courses',
    h2: 'Nine more maths courses, by stage',
    lede: 'All live, all in English, each with a tutor who keeps the same learner from week to week.',
    bands: [
      { num: 'I', h3: 'Primaria years', sub: 'Roughly ages 6 to 12', courses: [
        { code: 'MAEN / P / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary maths', blurb: 'Counting to fractions and early geometry, placed by school grade.' },
        { code: 'MAEN / P / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Number sense built from number bonds and estimation, not tricks.' },
        { code: 'MAEN / P / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Patterns, fractions and graphs explored in Python, ages 10 to 15.' }
      ] },
      { num: 'II', h3: 'Secundaria years', sub: 'Roughly ages 12 to 17', courses: [
        { code: 'MAEN / S / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'A full rebuild of algebra for learners whose base is shaky.' },
        { code: 'MAEN / S / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad maths', blurb: 'Problem solving for contests, with original problems only.' },
        { code: 'MAEN / S / 03', slug: 'igcse-mathematics-mastery', title: 'IGCSE maths', blurb: 'Core, Extended and Additional Mathematics, joinable any month.' }
      ] },
      { num: 'III', h3: 'Exams and beyond school', sub: 'Ages 15 to adult', courses: [
        { code: 'MAEN / U / 01', slug: 'sat-math-prep-course', title: 'SAT maths', blurb: 'For students applying to universities that ask for the SAT.' },
        { code: 'MAEN / U / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'From data to hypothesis tests, for university and work.' },
        { code: 'MAEN / U / 03', slug: 'college-mathematics-complete-masterclass', title: 'University maths', blurb: 'Calculus, linear algebra and analysis, matched to your semester.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How tutoring runs',
    h2: 'How live maths tutoring works from Peru',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Before school', l: 'An early Peru hour falls in the Indian evening, which suits our tutors well.' },
      { time: 'Evenings', l: 'Late afternoon and evening sessions in Peru are common; tell us the hour you want.' },
      { time: 'One to one', l: 'A tutor of your own, at your pace, on the topics your school is covering now.' }
    ],
    cells: [
      { h3: 'Diagnostic first', p: 'The first class shows what is solid and what is not.' },
      { h3: 'A shared whiteboard', p: 'The learner writes; the tutor watches every step.' },
      { h3: 'Clear, slow English', p: 'Key words written down, the same phrase for the same idea.' },
      { h3: 'One steady tutor', p: 'The same person each week, who learns how your child thinks.' },
      { h3: 'Short notes home', p: 'What was fixed and what to look for in homework.' },
      { h3: 'Group or one to one', p: 'Fifteen to twenty learners, or one learner with one tutor.' }
    ]
  },

  projectsH2: 'What our older students make',
  projectsLede: 'Learners who stay with us often combine maths and code. A few of their projects are below, and more are collected on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'What parents and students have written in Google reviews, word for word.',

  fees: {
    h2: 'Maths tutoring fees for Peru',
    lede: 'Fees are set in US dollars and paid by card. Your bank converts each payment into soles on the day it is charged, so the amount on your statement can differ slightly from one month to the next.',
    free: ['A free first class with a short diagnostic', 'A written note on what to work on', 'No card needed'],
    group: ['A group of fifteen to twenty learners at a similar level', 'One tutor all the way through', 'Two live classes a week', 'Pay monthly and stop when you like'],
    one: ['One learner and one tutor', 'Topics chosen around school and exams', 'Hours set by your family']
  },

  faq: {
    eyebrow: 'Questions from Peru',
    h2: 'Maths tutor in English: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Every class is live, online and taught in English only. Tutors speak slowly and clearly, adjust to the learner\'s pace and accent, and write each key word on the shared board, so a learner whose English is still developing can follow the maths.' },
      { q: 'Who is a maths tutor in English for?', a: 'Pupils at IB and Cambridge schools whose maths is examined in English, families planning a move or a university abroad, pupils at Spanish-medium colegios who want maths and English practice together, and adults or university students who need maths in English for their studies or work.' },
      { q: 'What levels do you tutor?', a: 'Primaria and secundaria maths, Cambridge IGCSE, IB Maths Analysis and Approaches or Applications and Interpretation at SL and HL, SAT maths, and university maths such as calculus, linear algebra and statistics.' },
      { q: 'When can sessions take place in Peru?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Peru is on UTC minus 5 all year and India on UTC plus 5:30, so 17:30 in Lima is 04:00 the next morning in India, and our tutors plan for that.' },
      { q: 'Can you prepare my child for the UNI, PUCP or San Marcos admission exam?', a: 'Not as an exam course. Those exams are in Spanish and each university decides who it admits. We can strengthen the maths underneath them, in English: algebra, reasoning, careful checking and working against the clock. We never promise admission.' },
      { q: 'Do you help with ONEM?', a: 'We teach the kind of reasoning maths olympiads reward, using problems we write ourselves. We never reproduce ONEM problems or solutions, and entry to ONEM goes through the pupil\'s school. We are not connected with MINEDU or the olympiad\'s organisers.' },
      { q: 'How is a tutor different from a group class?', a: 'A tutor works one to one and starts from the learner\'s own mistakes, so each session repairs something specific. A group class of fifteen to twenty follows a course plan at a steady pace. Many learners do both: a group for the course and a few one-to-one sessions for a stubborn topic.' },
      { q: 'My child\'s English is basic. Will tutoring in English work?', a: 'Often, yes. Maths uses symbols that look the same in any language, and our tutors write every important word down. For a learner who understands very little spoken English we start one to one and slowly. The free first class will show whether it suits your child.' },
      { q: 'Are you connected with MINEDU, a university or the IB?', a: 'No. We are an independent online school with tutors based in India. We are not connected with MINEDU, any UGEL, any university, the IB, Cambridge or any school in Peru, and we do not award Peruvian qualifications. Learners who complete a course receive our own certificate of completion.' },
      { q: 'How are fees paid from Peru?', a: 'By card, in US dollars. Your bank converts the amount into soles, so the figure on your statement may vary a little each month. The first class is free and we do not ask for card details to book it.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Further reading',
    h2: 'Related pages',
    lede: 'More for families in Peru choosing maths help in English.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Classes in Peru', p: 'Everything we teach for learners in Peru, in one place.' },
      { href: '/english-medium-coding-classes-lima', label: 'English-medium classes in Lima', p: 'For bilingual, Cambridge and IB families in the capital.' },
      { href: '/ib-maths-tuition-online', label: 'IB maths tuition online', p: 'Analysis and Applications, SL and HL, in more depth.' },
      { href: '/cambridge-igcse-maths-0580-help', label: 'IGCSE Maths 0580 help', p: 'The Cambridge syllabus, topic by topic.' },
      { href: '/online-maths-tuition', label: 'Online maths tuition', p: 'How our live maths classes work anywhere.' },
      { href: '/we-teach-you-how-to-think', label: 'We teach you how to think', p: 'Why reasoning comes before any shortcut.' }
    ]
  },

  start: {
    h2: 'Book a free maths class from Peru',
    lede: 'The first class is a short diagnostic: a few problems, a conversation in English about how the learner solved them, and an honest view of what to work on. Afterwards the tutor suggests a course, a group or one-to-one sessions, and an hour that fits your week.',
    readFirst: 'Want to read more first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> describes a live class step by step, and the <a class="ag-inline-link" href="/courses">course list</a> has every maths syllabus.',
    note: 'Every session is live on video, taught from India, and only in English. The quickest way to reach us is WhatsApp, in English.',
    formNote: 'Free, no card, no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Maths by stage', links: [
        { href: '/online-maths-tuition', label: 'Online maths tuition' },
        { href: '/ib-maths-tuition-online', label: 'IB maths tuition' },
        { href: '/cambridge-igcse-maths-0580-help', label: 'IGCSE Maths 0580' },
        { href: '/ib-maths-ia-guidance', label: 'IB maths IA guidance' }
      ] },
      { h4: 'How we work', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/we-teach-you-how-to-think', label: 'Thinking first' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'A sum of two positives beats the larger one'
  },

  personalityCss: `
.ag-root.ag-maen .ag-hero h1 { max-width: 20ch; letter-spacing: -0.015em; }
.ag-root.ag-maen .ag-capsule { border-left-width: 5px; }
.ag-root.ag-maen .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-maen .ag-table td:first-child { font-weight: 600; }
.ag-root.ag-maen .ag-code-note code { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'MINEDU, Currículo Nacional de la Educación Básica (plans of study, maths competencies); RM 501-2025-MINEDU (2026 school year); MINEDU press releases on ENLA 2025 (9 November 2025, 13 May 2026) and IB Diploma results (17 April 2026); UGEL 06 oficio and El Peruano on ONEM 2026; UNI Admisión 2026-2; PUCP and Universidad de Lima admission guides; EF EPI 2025; IANA tz database. All read 8 November 2026.',
    localProject: 'An original Python lesson on the add-the-tops-and-bottoms fraction error: Fraction shows the shortcut gives 1/2 + 1/3 = 2/5 (true 5/6) and 3/4 + 3/4 = 3/4; a one-line estimate (a sum of two positives beats the larger one) rejects all 1,296 shortcut answers with denominators 2 to 9 and accepts all 1,296 true sums, because the mediant lies between the two fractions. Plus paper-strip, paper and proof versions by age.',
    requiredMentions: ['profesor de matemáticas en inglés', '1/2 + 1/3: shortcut 2/5, true 5/6', '3/4 + 3/4: shortcut 3/4, true 3/2', 'shortcut caught by the estimate: 1296', 'a sum of two positives beats the larger one', 'Mathematicians call it the mediant', 'Maths time in one Peruvian school year (our calculation from MINEDU figures)', 'the second paper is entirely mathematics', 'wrong answers subtract marks'],
    sources: [
      { claim: 'Teaching period of 45 minutes; maths periods 5/5/4/4/4/4 in primaria, 4 in JER and 6 in JEC secundaria; maths competencies.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: '2026 school year: 36 teaching weeks, four blocks from 16 March to 18 December 2026.', url: 'https://cdn.www.gob.pe/uploads/document/file/8968298/7380466-rm-n-501-2025-minedu.pdf' },
      { claim: 'ENLA 2025 applied 11 to 13 November 2025 to 200,000+ pupils in 8,700 schools; grades and areas.', url: 'https://www.gob.pe/institucion/minedu/noticias/1284732-minedu-evaluara-aprendizajes-de-200-mil-estudiantes-de-primaria-y-secundaria-de-todo-el-pais' },
      { claim: 'ENLA 2025 results similar to 2023 and 2024; maths gains in 2nd of secundaria over 2023.', url: 'https://www.gob.pe/institucion/minedu/noticias/1390772-enla-2025-se-mantienen-avances-en-lectura-y-matematica-con-mejoras-en-las-zonas-rurales' },
      { claim: 'ONEM 2026 levels, ten constructed-response items, two hours.', url: 'https://ofimult.ugel06.gob.pe/archivos/oficio-multiple-no-00164-2026-mineduvmgi-drelm-ugel06dir-agebre-1781620977.pdf' },
      { claim: 'ONEM 2026 drew more than 1.7 million secundaria pupils.', url: 'https://elperuano.pe/noticia/306597-72-escolares-ganadores-de-la-olimpiada-nacional-de-matematica-seran-premiados-este-lunes-en-huampani' },
      { claim: 'UNI ordinary exam: three papers on three days, the second is mathematics.', url: 'https://admision.uni.edu.pe/admision2026-2/index.html' },
      { claim: 'PUCP admission exams emphasise reading comprehension and maths.', url: 'https://admision.pucp.edu.pe/guia-del-postulante' },
      { claim: 'Universidad de Lima school exam: single aptitude and knowledge test, wrong answers subtract, 15 November 2026.', url: 'https://www.ulima.edu.pe/sites/default/files/2026-11/admision_20271a_guia_del_postulante_v10.pdf' },
      { claim: '2,502 IB Diplomas in Peru in 2025.', url: 'https://www.gob.pe/institucion/minedu/noticias/1380061-mas-de-1100-estudiantes-de-los-coar-obtienen-diploma-del-bachillerato-internacional-y-alcanzan-estandares-de-nivel-mundial' },
      { claim: 'EF EPI 2025: Peru 519 Moderate, Lima 555 High, reading 540, speaking 480.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 all year, no DST since 1994; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'ENLA percentages by achievement level: the UMC results pages were blocked (BLOCKED.md); only MINEDU press-release wording is used.',
      'A PISA maths figure for Peru: oecd.org returned a Cloudflare challenge on 9 November 2026 and was not retried.',
      'An hourly tutoring rate or any typed fee: refused; fees render from the template in USD (priceSubject maths).',
      'Preparing students for Spanish-language admission exams as a product, or any admission, grade or ONEM result: none promised.',
      'Reproducing ONEM problems or solutions: refused; the lesson and the practice set are ours.',
      'Any connection with MINEDU, UGEL, ONEM, UNI, PUCP, Universidad de Lima, the IB or Cambridge: none, and the page says so.'
    ]
  }
};
