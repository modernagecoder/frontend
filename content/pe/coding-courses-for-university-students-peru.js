// SHIP: market | University students in Peru: degree in Spanish, tools in English; Ley 30220 language rules | hash-map lookup (two-sum): the same element used twice, and checks counted
'use strict';
// Coding courses for university students in Peru (ag- English door, Peru cluster row PE004, hubGroup ages; alloc ccu, #04693D).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08: timing flexible, any time.
// Audience: students at Peruvian universities and institutes who read English, international students in Peru, and
// graduates heading to a master's degree; targets "coding courses for university students peru", English twin of
// "cursos de programación para universitarios".
// Spine (different from the Spanish twin, which compares Python and Java, PCEP and fitting classes around parciales):
// what Peru's university law itself says about foreign languages (Ley 30220, the primary-source table); what a technical
// interview tests that a degree may not; an original lesson on the classic two-sum problem; what a short-course
// certificate is and is not under the same law (Art. 46) and next to the PCEP; the semester and the clock.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/coding-courses-for-university-students-peru/;
// fetched or copied 9 November 2026; quotes string-matched in the raw text, whitespace normalised):
//  - Ley N.° 30220, Ley Universitaria, El Peruano, Miércoles 9 de julio de 2014 (ley30220.pdf/.txt, from
//    https://www.sunedu.gob.pe/wp-content/uploads/2017/04/Ley-universitaria-30220.pdf; the minedu.gob.pe copy returned 403
//    and was not retried): Art. 40 "La enseñanza de un idioma extranjero, de preferencia inglés, o la enseñanza de una lengua
//    nativa de preferencia quechua o aimara, es obligatoria en los estudios de pregrado."; "Tienen una duración mínima de
//    cinco años. Se realizan un máximo de dos semestres académicos por año."; Art. 41 "Tienen una duración no menor de 35
//    créditos."; Art. 42 "no menor de ciento sesenta y cinco (165) créditos"; Art. 45.1 "Grado de Bachiller: requiere haber
//    aprobado los estudios de pregrado, así como la aprobación de un trabajo de investigación y el conocimiento de un idioma
//    extranjero, de preferencia inglés o lengua nativa."; 45.4 "mínimo de cuarenta y ocho (48) créditos y el dominio de un
//    idioma extranjero o lengua nativa"; 45.5 "mínimo de sesenta y cuatro (64) créditos" ... "el dominio de dos idiomas
//    extranjeros, uno de los cuales puede ser sustituido por una lengua nativa"; Art. 45 "La obtención de grados y títulos se
//    realiza de acuerdo a las exigencias académicas que cada universidad establezca en sus respectivas normas internas.";
//    Art. 46 "No conducen a la obtención de grados o títulos, pero sí certifican a quienes los concluyan con nota aprobatoria."
//    The page labels this as the 2014 text and says the law has been amended since; no amendment is quoted.
//  - SUNEDU press note, 15 September 2021 (sunedu_1_1m.txt): "94 universidades licenciadas (46 públicas y 48 privadas) que
//    albergan a 1 millón 100 mil de estudiantes universitarios".
//  - INEI TIC II Trimestre 2026 (inei_tic_iit2026.txt): "el 97,3% de la población de 19 a 24 años utilizó Internet";
//    Cuadro 4.1 "7,8 11,7 11,0 12,1" (wrote a program, population 15+, 2023 to 2026).
//  - EF EPI 2025 Peru page (ef_peru.raw): "ageGroup1Score":469 "low" (18 to 20), "ageGroup2Score":540 "moderate" (21 to 25).
//  - Embassy of India, Lima (facts-market/src/emb_india_peru.txt): "Tata Consultancy Services have a sizeable operation in
//    Lima and is increasing its presence in Peru providing over 1300 jobs locally."
//  - Python Institute PCEP page (pcep.txt): "Prerequisites None Number of questions 35 Exam duration 50 minutes Passing score 70%".
//  - Time: tzdata America/Lima UTC-5, Asia/Kolkata UTC+5:30.
// Our own calculations: 35 + 165 = 200 minimum pregrado credits under Arts. 41 and 42 as published in 2014 (labelled ours);
// 2,000 x 1,999 / 2 = 1,999,000 pairs, matching the checks the code prints.
// Our own example (pair_v1.py, pair_v2.py in the src-pages folder, python3 -I): v1 prints "(5, 5)"; v2 prints
// "((3, 7), 11)", "((3, 7), 5)", "2000 ((3997, 3999), 1999000)", "2000 ((3997, 3999), 2000)".
// Lesson family: hash-map complement lookup (two-sum); the bug of pairing an element with itself; counting checks to see
// quadratic against linear growth.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'def find_pair(nums, target):',
  '    for i in range(len(nums)):',
  '        for j in range(len(nums)):',
  '            if nums[i] + nums[j] == target:',
  '                return nums[i], nums[j]',
  '    return None',
  '',
  'print(find_pair([5, 9, 3, 14, 7, 12], 10))'
].join('\n');

const V2 = [
  'def pair_brute(nums, target):',
  '    checks = 0',
  '    for i in range(len(nums)):',
  '        for j in range(i + 1, len(nums)):',
  '            checks += 1',
  '            if nums[i] + nums[j] == target:',
  '                return (nums[i], nums[j]), checks',
  '    return None, checks',
  '',
  'def pair_dict(nums, target):',
  '    seen = {}',
  '    steps = 0',
  '    for x in nums:',
  '        steps += 1',
  '        if target - x in seen:',
  '            return (target - x, x), steps',
  '        seen[x] = True',
  '    return None, steps',
  '',
  'print(pair_brute([5, 9, 3, 14, 7, 12], 10))',
  'print(pair_dict([5, 9, 3, 14, 7, 12], 10))',
  '',
  'big = list(range(1, 4001, 2))   # 2,000 odd numbers',
  'print(len(big), pair_brute(big, 7996))',
  'print(len(big), pair_dict(big, 7996))'
].join('\n');

const OUT2 = [
  '((3, 7), 11)',
  '((3, 7), 5)',
  '2000 ((3997, 3999), 1999000)',
  '2000 ((3997, 3999), 2000)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'ages', label: 'Coding for university students' },
  slug: 'coding-courses-for-university-students-peru',
  code: 'ccu',
  accent: '#04693D',
  accentRationale: 'Coding courses for university students in Peru: a library-binding green #04693D, the green of a well-used campus reading room, serious without being heavy; contrast 5.51 on the paper #FBF8F2 and above 4.5 on every paper tone the build checks',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Coding courses for university students in Peru',
  title: 'Coding Courses for University Students in Peru, in English',
  description: 'Coding courses for university students in Peru: Python, Java, data structures, algorithms and AI, taught live online in English beside your degree, at any hour.',
  ogDescription: 'Your degree is in Spanish; your tools are in English. What Peru\'s university law says about foreign languages, what technical interviews test, a two-sum lesson in Python and how live classes fit a semester.',
  twitterDescription: 'Live coding courses in English for university students in Peru: Python, Java, DSA and AI, at any hour.',
  pageName: 'Coding Courses for University Students in Peru',
  webPageDescription: 'A guide for university students in Peru who want coding taught live in English alongside their degree, built from the Ley Universitaria 30220 as published in El Peruano in 2014, a SUNEDU press note, INEI household technology data, EF EPI 2025, the Embassy of India in Lima, the Python Institute and the tz database, with an original Python lesson on hash maps.',
  courseDescription: 'Live online coding courses for university and institute students in Peru, taught in English by mentors based in India: Python, Java, C, data structures and algorithms, databases, web and AI, in a group of fifteen to twenty or one to one, at a time the student chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'University students',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#law', label: 'English and the law' },
    { href: '#interviews', label: 'Interviews' },
    { href: '#lesson', label: 'Two-sum lesson' },
    { href: '#certificates', label: 'Certificates' },
    { href: '#semester', label: 'Semester and clock' }
  ],
  eyebrow: 'Peru &middot; University and institute students &middot; Live online, in English',
  h1: 'Coding courses for university students in Peru',
  lede: 'Most Peruvian degrees are taught in Spanish. Most programming is not: the documentation, the error messages, the interview questions at international firms and the papers in a master\'s reading list are in English. This page is for university students in Peru who want to close that gap while they study: what the university law itself says about foreign languages, what technical interviews actually test, a classic problem worked through in Python, and how live classes fit around a semester.',
  secondaryCta: { href: '#lesson', label: 'Work through the two-sum lesson' },
  wa: 'Hello Modern Age Coders, I am a university student in Peru and would like live coding classes in English. Could I book a free first class?',
  heroNote: 'Live online classes since 2020 &middot; 10,000+ students worldwide &middot; algorithms explained in clear English',
  spec: [
    ['Who', 'University and institute students'],
    ['Core', 'Python, Java, C, DSA'],
    ['Also', 'SQL, web, AI and Git'],
    ['Class size', 'Fifteen to twenty, or one to one'],
    ['Peru time', 'Any hour, around your timetable'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'Straight answer',
  capsule: 'Modern Age Coders runs coding courses for university and institute students in Peru: live online classes taught in English by mentors based in India. Students learn Python, Java or C, then data structures and algorithms, databases, web development and AI, at whatever depth their degree or job search needs. Courses run beside the student\'s own degree, never in place of it, in a group of fifteen to twenty or one to one, at hours chosen around the university timetable in Peru time. The first class is free.',

  picks: {
    eyebrow: 'Where students start',
    h2: 'Three courses university students in Peru choose first',
    lede: 'One for interviews, one for the language most Peruvian computing degrees teach early, and one for students who have never coded.',
    items: [
      { course: 'data-structures-algorithms-masterclass-college', code: 'CCU / 01', title: 'Data Structures and Algorithms', note: 'For students who can already program. Arrays to graphs, complexity and the patterns interviewers use, worked through live and explained aloud in English, the way an interview will expect.' },
      { course: 'complete-java-programming-masterclass-college', code: 'CCU / 02', title: 'Java for College', note: 'Core Java, object-oriented design and on to Spring Boot. Useful beside a first or second-year programming course, and for back-end roles at larger firms.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'CCU / 03', title: 'Python Masterclass', note: 'For students of any degree starting from zero: engineering, economics, biology or business. Python from the first line to files, data and automation.' }
    ]
  },

  sections: [
    {
      id: 'who',
      eyebrow: 'Who it is for',
      h2: 'Who are these coding courses for?',
      lede: 'Students in higher education in Peru who can follow technical English, and those who want to get there. SUNEDU counted about 1.1 million university students in 94 licensed universities in 2021; a small share of them study computing.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Computing and engineering students', p: 'Your degree teaches the theory in Spanish. We add the practice employers test, in the language they test it in: data structures, algorithms, clean code, Git and explaining a solution aloud in English.' },
          { h3: 'Students of other degrees', p: 'Economists, biologists, accountants and designers increasingly need Python or SQL to handle data. You can start from nothing, at a pace that suits a demanding course load.' },
          { h3: 'International and future master\'s students', p: 'Exchange students in Lima, and Peruvian graduates planning a master\'s abroad, often need to study programming in English before they arrive. Our classes are in English from the first minute.' }
        ] },
        { kind: 'p', mt: true, html: 'If you would rather read in Spanish, there is a page for you: <a class="ag-inline-link" href="/cursos-de-programacion-para-universitarios-peru">Leer en español: cursos de programación para universitarios</a>. The classes it describes are the same, and they are taught in English.' }
      ]
    },
    {
      id: 'law',
      tint: 'tint',
      eyebrow: 'English and the law',
      h2: 'Do Peruvian universities require a foreign language?',
      lede: 'Yes. As published in 2014, Peru\'s university law makes a foreign language, preferably English, or a native language part of every undergraduate degree, and asks for it again at master\'s and doctoral level.',
      body: [
        { kind: 'table', numCols: [], caption: 'Credits and language requirements in the Ley Universitaria 30220, as published on 9 July 2014', head: ['Stage (article)', 'Minimum set by the law', 'Language requirement in the law'], rows: [
          ['Undergraduate studies (Art. 40)', 'At least five years; at most two academic semesters a year', 'Teaching of a foreign language, preferably English, or a native language, preferably Quechua or Aymara, is compulsory'],
          ['General studies (Art. 41)', 'At least 35 credits', 'None stated'],
          ['Specific and specialist studies (Art. 42)', 'At least 165 credits', 'None stated'],
          ['Bachiller degree (Art. 45.1)', 'Undergraduate studies passed and a research paper approved', 'Knowledge of a foreign language, preferably English, or a native language'],
          ['Master\'s degree (Art. 45.4)', 'Two semesters and at least 48 credits, plus a thesis or research paper', 'Command of a foreign language or a native language'],
          ['Doctorate (Art. 45.5)', 'Six semesters and at least 64 credits, plus an original thesis', 'Command of two foreign languages, one of which may be replaced by a native language']
        ] },
        { kind: 'source', html: 'Source: Ley N.° 30220, Ley Universitaria, as published in El Peruano on 9 July 2014 (copy hosted by SUNEDU), Articles 40 to 45, read on 9 November 2026. The English wording is our translation. Congress has amended the law since 2014, and Article 45 itself says each university sets its own academic requirements in its internal rules, so check your own university\'s current regulations. This is a summary of the law, not legal advice.' },
        { kind: 'two', mt: true,
          leftH3: 'What this means in practice',
          left: [
            'The law sets a floor, and each university decides how a student proves it: an internal test, a language centre course, or an external certificate. Our classes are not one of those routes and we never claim they are. We do not certify language level.',
            'What we can do is make the language useful. A student who has spent a year explaining algorithms aloud in English, reading documentation and writing commit messages in it, tends to approach the university\'s language requirement with far less fear.'
          ],
          rightH3: 'Why English matters early',
          right: [
            'EF\'s English Proficiency Index 2025 gives Peruvians aged 18 to 20 a score of 469, in its "low" band, and those aged 21 to 25 a score of 540, "moderate". EF tests adults who choose to sit its online test, so this is a signal, not a census, but the jump between those two age groups is the university years.',
            'Our own reading of that gap: the earlier a student uses English for something they care about, such as code that has to run, the sooner it stops being a subject and becomes a tool.'
          ] }
      ]
    },
    {
      id: 'interviews',
      eyebrow: 'What employers test',
      h2: 'What do technical interviews test that a degree may not?',
      lede: 'Speed and clarity on small, well-defined problems, explained aloud. A good degree builds the understanding; it rarely rehearses the performance.',
      body: [
        { kind: 'two',
          leftH3: 'Who is hiring in English',
          left: [
            'Lima is home to large international technology employers. The Embassy of India in Lima, for example, reports that Tata Consultancy Services has a sizeable operation in Lima providing over 1,300 local jobs. Employers like these often interview in English, at least for part of the process.',
            'Remote work for firms abroad adds more. Peru keeps UTC minus 5 all year, so for part of the year its clock matches New York\'s exactly, which makes live collaboration with North American teams practical. That is our observation, not a promise of any job.'
          ],
          rightH3: 'What a typical process looks like',
          right: [
            'Our description, from preparing students in many countries: an online test of two or three timed problems; then one or two live sessions where the candidate solves a problem while talking; then a conversation about a project the candidate built.',
            'Every stage rewards the same skills: choosing a data structure, estimating how the work grows with the input, testing edge cases, and narrating all of it in plain English. Those are the skills our DSA course trains, one problem at a time.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Restate the problem.</strong> In one English sentence, say what goes in, what comes out and what counts as a valid answer.',
          '<strong>Give the obvious solution first.</strong> Say how fast it is. Interviewers want to hear that you know it is slow.',
          '<strong>Improve it with a structure.</strong> A dictionary, a set, a heap or two pointers, chosen for a reason you can say aloud.',
          '<strong>Test the awkward cases.</strong> An empty list, a single item, duplicates, and the item paired with itself.',
          '<strong>State the cost.</strong> Time and memory, in big-O, and what would change if the input were a million items.'
        ] }
      ]
    },
    {
      id: 'lesson',
      tint: 'tint',
      eyebrow: 'A real lesson',
      h2: 'What does a class look like? The two-sum problem in Python',
      lede: 'This lesson opens our data structures course. Given a list of numbers and a target, find two of them that add up to the target. It is short, it appears in interviews everywhere, and it hides two separate lessons.',
      body: [
        { kind: 'two',
          leftH3: 'Lesson one: the hidden bug',
          left: [
            'Most first attempts look like Version 1: try every <code>i</code> with every <code>j</code>. It runs, and for the list <code>[5, 9, 3, 14, 7, 12]</code> with target 10 it confidently prints <code>(5, 5)</code>.',
            'But there is only one 5 in the list. The inner loop starts at 0, so on its first pass it pairs the 5 with itself. The fix is to start <code>j</code> at <code>i + 1</code>, so each pair of different positions is tried once.'
          ],
          rightH3: 'Lesson two: the cost',
          right: [
            'The fixed brute force is correct but slow: for n numbers it may try about n times n over 2 pairs. Version 2 counts them. On a list of 2,000 numbers where the only pair is at the very end, it makes 1,999,000 checks.',
            'The dictionary version walks the list once. For each number <code>x</code> it asks one question: have I already seen <code>target - x</code>? Looking something up in a dictionary takes, on average, about the same time however big it grows. The same search takes 2,000 steps.'
          ] },
        { kind: 'code', label: 'Version 1: every i with every j', lang: 'Python', code: V1, note: 'Our run printed <code>(5, 5)</code>: the number 5 paired with itself.' },
        { kind: 'code', label: 'Version 2: fixed brute force against a dictionary, with counters', lang: 'Python', code: V2 },
        { kind: 'code', label: 'What Version 2 prints', lang: 'Output', code: OUT2, note: 'Exact output with Python 3. Both methods find <code>(3, 7)</code> on the short list; on 2,000 numbers, 1,999,000 checks against 2,000 steps.' },
        { kind: 'p', mt: true, html: 'The 1,999,000 is not a coincidence: 2,000 times 1,999 divided by 2 is exactly the number of distinct pairs in a list of 2,000, and the pair we planted is the last one tried. Double the list and the brute force needs about four times the checks; the dictionary needs twice the steps. That difference, quadratic against linear, is what an interviewer means by "can you do better?"' },
        { kind: 'p', html: 'Notice also that the dictionary version cannot make the first mistake. It only looks for numbers <strong>already seen before the current one</strong>, so a number can never be paired with itself unless it really appears twice. A good data structure often removes a whole class of bugs, not just time.' },
        { kind: 'ol', mt: true, items: [
          '<strong>First.</strong> Predict the output of Version 1 for the list <code>[4, 6]</code> and target 8. Then run it.',
          '<strong>Second.</strong> Change <code>pair_dict</code> to return the positions of the two numbers instead of their values.',
          '<strong>Third.</strong> Return every pair that adds up to the target, without repeats, still in a single pass.',
          '<strong>Fourth.</strong> Explain aloud, in under a minute and in English, why the dictionary version is faster and what it costs in memory.'
        ] }
      ]
    },
    {
      id: 'certificates',
      eyebrow: 'Certificates',
      h2: 'Is a certificate from a coding course worth anything in Peru?',
      lede: 'It is worth what it proves, and no more. Peru\'s university law draws the same line for its own short courses: they certify, but they do not lead to a degree.',
      body: [
        { kind: 'two',
          leftH3: 'Three kinds of paper',
          left: [
            '<strong>A degree or professional title.</strong> Only a university awards it, under Ley 30220. Nothing we offer is, or replaces, a degree.',
            '<strong>A university continuing-education certificate.</strong> Article 46 of the law, as published in 2014, says these programmes "no conducen a la obtención de grados o títulos" but do certify those who pass them.',
            '<strong>A private course certificate, like ours.</strong> It records that you completed our course. It is not a Peruvian qualification, and we say so plainly.'
          ],
          rightH3: 'What actually persuades',
          right: [
            'An exam certificate from the body that sets the exam, such as the Python Institute\'s PCEP, at least proves a defined syllabus: the Institute describes 35 questions in 50 minutes with a 70% pass mark and no prerequisites. Our PCEP course prepares for it; the Institute awards it.',
            'For most employers, though, a repository of finished projects and a calm explanation of one of them in an interview counts for more than any certificate. That is where we put the effort.'
          ] },
        { kind: 'p', mt: true, html: 'We are an independent online school, not a university or institute. We are not connected with SUNEDU or any Peruvian university, and our courses carry no academic credit. Students who want Python applied to their engineering courses can read our Spanish page on <a class="ag-inline-link" href="/python-para-estudiantes-de-ingenieria-peru">Python para estudiantes de ingeniería</a>, and those focused on Java on <a class="ag-inline-link" href="/curso-de-java-para-universitarios-peru">Java para universitarios</a>.' }
      ]
    },
    {
      id: 'semester',
      tint: 'tint',
      eyebrow: 'Semester and clock',
      h2: 'How do live classes fit around a university semester in Peru?',
      lede: 'By moving with it. Ley 30220 allows at most two academic semesters a year, so most students have a heavy stretch around exams and lighter weeks between semesters; we plan around both.',
      body: [
        { kind: 'two',
          leftH3: 'Across the year',
          left: [
            'In the first weeks of a semester, most students keep a steady rhythm of classes. Around midterms and finals, a one-to-one student can slow down or pause; group students can catch up from the mentor\'s written notes and code, then rejoin.',
            'The break between semesters is the best time for a bigger push: a full project, a block of interview practice, or a new language before the next semester\'s course needs it.'
          ],
          rightH3: 'Being online',
          right: [
            'University-age Peruvians are almost all online: INEI reports that 97.3% of people aged 19 to 24 used the internet in the second quarter of 2026. Far fewer write code: among Peruvians of 15 and over who did some task on a computer, laptop or tablet, INEI counts 12.1% who had written a program in a programming language, in the same 2026 survey.',
            'A laptop, a stable connection and a headset are all a class needs. Software we use is free, and we install it together in the first session.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Some Peru times and the matching India time (conversions, not a timetable)', head: ['Peru time', 'India time', 'Where it falls for a student'], rows: [
          ['07:30', '18:00', 'Before an early lecture'],
          ['12:30', '23:00', 'A long lunch break on campus'],
          ['14:00', '00:30, next day', 'A free afternoon block'],
          ['19:30', '06:00, next day', 'After the last lecture'],
          ['22:00', '08:30, next day', 'Late, for students who work by day']
        ] },
        { kind: 'source', html: 'Source: IANA tz database, America/Lima (UTC minus 5 throughout the year) and Asia/Kolkata (UTC plus 5:30), giving a fixed gap of 10 hours 30 minutes. The conversions are ours.' },
        { kind: 'p', mt: true, html: 'You choose the hour on your own clock and the mentor sees it in India time; since neither country uses summer time, the class does not drift between semesters. Every page we have written for Peru, from children to professionals, is listed on the <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">Peru hub</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'A year of progress',
    h2: 'How does a university student progress over a year?',
    lede: 'Through levels a student can show, in code and aloud. These are our levels, not university credits.',
    table: { numCols: [], caption: 'Our levels for university students', head: ['Level', 'Usually reached', 'In code', 'Aloud, in English'], rows: [
      ['1. Fluent basics', 'Month 1 or 2', 'Loops, functions, lists and dictionaries without notes', 'Explain a short program line by line'],
      ['2. Structures', 'Months 2 to 4', 'Stacks, queues, hash maps, trees, used for a reason', 'Say why one structure beats another here'],
      ['3. Cost', 'Months 3 to 5', 'Estimate time and memory before writing code', 'State big-O and defend it'],
      ['4. Patterns', 'Months 4 to 7', 'Two pointers, sliding windows, recursion, graphs', 'Narrate a solution while typing it'],
      ['5. Projects', 'Months 6 to 9', 'A tested project in Git that someone else can run', 'Walk an interviewer through its design'],
      ['6. Interviews', 'Months 8 to 12', 'Solve two timed problems in under an hour', 'Hold a full mock interview in English']
    ] },
    left: { h3: 'For students', ps: [
      'Level 2 is the two-sum lesson. If you reached for a dictionary without being told, you are already there.',
      'Record yourself explaining a solution once a week. The first recording is hard to listen to; the tenth is not.'
    ] },
    right: { h3: 'For the job search', ps: [
      'Levels 5 and 6 are what most interviews look for. A project you can explain beats three you cannot.',
      'Keep your code in a public repository with a short English README. It is often the first thing a reviewer opens.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for university students',
    lede: 'Each taught live and in English, with one mentor for the whole course, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Computer science core', sub: 'For any degree', courses: [
        { code: 'CCU / CORE / 01', slug: 'c-programming-course-for-college-beginners', title: 'C programming', blurb: 'Pointers, memory and structs, the base of many first-year courses.' },
        { code: 'CCU / CORE / 02', slug: 'competitive-programming-masterclass-college', title: 'Competitive programming', blurb: 'Timed problems from Codeforces style to ICPC.' },
        { code: 'CCU / CORE / 03', slug: 'git-github-version-control-course-for-college-students', title: 'Git and GitHub', blurb: 'Branches, pull requests and team habits employers expect.' }
      ] },
      { num: 'II', h3: 'Building software', sub: 'Projects for a portfolio', courses: [
        { code: 'CCU / BUILD / 01', slug: 'full-stack-web-development-masterclass-college', title: 'Full stack web', blurb: 'React, Node.js and deployment, ending with a live app.' },
        { code: 'CCU / BUILD / 02', slug: 'mysql-database-complete-masterclass-college', title: 'MySQL and databases', blurb: 'SQL, schema design and the queries interviews ask about.' },
        { code: 'CCU / BUILD / 03', slug: 'complete-flutter-app-development-masterclass-college', title: 'Flutter apps', blurb: 'Dart and cross-platform mobile apps from zero.' }
      ] },
      { num: 'III', h3: 'Data and AI', sub: 'Ages 18 and up', courses: [
        { code: 'CCU / AI / 01', slug: 'ai-ml-masterclass-complete-college', title: 'AI and machine learning', blurb: 'Python to deep learning and generative AI.' },
        { code: 'CCU / AI / 02', slug: 'data-science-complete-masterclass-college', title: 'Data science', blurb: 'Statistics, pandas, models and honest evaluation.' },
        { code: 'CCU / AI / 03', slug: 'vibe-coding-for-college-fullstack-ai-dsa-career-course', title: 'Vibe coding for college', blurb: 'Building with AI assistants while keeping the fundamentals.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it runs',
    h2: 'How live classes run for students in Peru',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Semester', l: 'Pick an hour that sits between lectures or after them, in Peru time.' },
      { time: 'Between semesters', l: 'Add classes for a project or an interview push while the timetable is empty.' },
      { time: '1-on-1', l: 'One student and one mentor, at the hour the student fixes.' }
    ],
    cells: [
      { h3: 'One mentor', p: 'The same mentor reviews your code all course long.' },
      { h3: 'Code, not slides', p: 'Most of each class is live problem solving.' },
      { h3: 'Interview English', p: 'You practise explaining solutions aloud every week.' },
      { h3: 'Peers at your level', p: 'Groups formed by level, not by year of study.' },
      { h3: 'Written feedback', p: 'Comments on your code after each piece of work.' },
      { h3: 'Group or private', p: 'Fifteen to twenty students, or one to one.' }
    ]
  },

  projectsH2: 'Projects built by our students',
  projectsLede: 'Students who keep going build software that does real work. A few examples are below; the <a class="ag-inline-link" href="/student-labs">student labs</a> page shows more.',
  reviewsLede: 'Google reviews from our students and their families, as written.',

  fees: {
    h2: 'Fees for university students in Peru',
    lede: 'Billing is in US dollars, to your card, monthly. Whatever reaches your statement in soles depends on your card issuer\'s exchange rate that day, so it may shift slightly between months.',
    free: ['A free first class', 'A real problem, solved together', 'No card needed'],
    group: ['Fifteen to twenty students at your level', 'The same mentor throughout', 'Two live classes a week', 'Monthly, cancel whenever you need'],
    one: ['You and one mentor', 'A plan built around your degree', 'Hours set by you']
  },

  faq: {
    eyebrow: 'Students ask',
    h2: 'What university students in Peru ask about our coding courses',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Every class is live, online and in English only. Mentors speak clearly and adapt to your pace and accent, and every step is visible on the shared screen. Technical English is part of what you gain; there is a Spanish-language page about the courses, but the teaching itself is always in English.' },
      { q: 'Do I need to study computing to join?', a: 'No. Many of our students study engineering, economics, sciences or business. Beginners start with Python from zero; students who already program start with data structures and algorithms or with Java.' },
      { q: 'Will these courses count towards my degree?', a: 'No. We are not a university and are not connected with SUNEDU or any Peruvian university, so our courses carry no academic credit. They run beside your degree. You receive our own certificate of completion, which is not a Peruvian qualification.' },
      { q: 'Does a Peruvian degree require English?', a: 'Ley 30220, as published in 2014, makes a foreign language, preferably English, or a native language compulsory in undergraduate studies and part of the requirements for a bachiller. Each university decides how students prove it. Our classes do not certify language level; they give you daily practice in using it.' },
      { q: 'When are the classes in Peru time?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Peru sits five hours behind UTC all year and India five and a half ahead, so 19:30 in Peru is 06:00 the next morning in India.' },
      { q: 'Can I pause during exams?', a: 'Yes. One-to-one students can reduce or pause classes around midterms and finals. Group students pay monthly and can stop for a month and come back; the mentor keeps notes and code so nothing is lost.' },
      { q: 'Will you prepare me for technical interviews?', a: 'Yes. Our data structures and algorithms course is built around interview-style problems explained aloud in English, and later levels include timed mock interviews. We make no promise of a job or salary; we train the skills interviews test.' },
      { q: 'Should I learn Python or Java first?', a: 'Python if you have never programmed or study a non-computing degree. Java if your university course already uses it or you are aiming at back-end roles in larger companies. The ideas transfer either way, and the free class helps decide.' },
      { q: 'Can I use AI tools like Claude or ChatGPT?', a: 'Yes, for students aged 18 and over, within each company\'s terms. We teach you to solve the problem first and then use AI to review and question your code, because interviews and exams test what you can do without it.' },
      { q: 'How do I pay from Peru?', a: 'By card, each month, in US dollars. Your bank converts the amount into soles at its own rate, so the figure can vary a little from month to month. The first class is free and needs no card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Further reading',
    h2: 'More for students who code',
    lede: 'Pages that help with the next step.',
    items: [
      { href: '/how-we-teach', label: 'How we teach', p: 'A live class, start to finish.' },
      { href: '/we-teach-you-how-to-think', label: 'Thinking before tools', p: 'Why reasoning comes before AI help.' },
      { href: '/student-labs', label: 'Student labs', p: 'What our students have built.' },
      { href: '/ai-tools-age-guide', label: 'AI tools and age rules', p: 'What each AI tool allows, by age.' },
      { href: '/courses', label: 'All courses', p: 'Every syllabus in one list.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Peru hub', p: 'All our pages for learners in Peru.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'The first class is a working session: you and a mentor solve one problem together, and the mentor sees how you reason, how much you already know and how comfortable you are explaining in English. Then you get a recommendation: which course, group or one to one, and which hours fit your semester.',
    readFirst: 'Prefer to read first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> describes a class in detail, and the <a class="ag-inline-link" href="/courses">course list</a> has every syllabus.',
    note: 'Every lesson is live video, from India, in English. WhatsApp us in English for the quickest answer.',
    formNote: 'Free, no card, no obligation.'
  },

  footer: {
    cols: [
      { h4: 'For students', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/we-teach-you-how-to-think', label: 'Thinking first' },
        { href: '/courses', label: 'All courses' }
      ] },
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Peru hub' },
        { href: '/cursos-de-programacion-para-universitarios-peru', label: 'Leer en español' },
        { href: '/curso-de-java-para-universitarios-peru', label: 'Java para universitarios' },
        { href: '/python-para-estudiantes-de-ingenieria-peru', label: 'Python en ingeniería' }
      ] }
    ],
    bottomRight: 'Never pair a number with itself'
  },

  personalityCss: `
.ag-root.ag-ccu .ag-hero h1 { max-width: 20ch; letter-spacing: -0.01em; }
.ag-root.ag-ccu .ag-capsule { border-left-width: 3px; }
.ag-root.ag-ccu .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-ccu .ag-steps li { line-height: 1.6; }
.ag-root.ag-ccu .ag-code pre { font-size: 0.92em; }
`,

  dossier: {
    curriculumAuthority: 'Ley N.° 30220, Ley Universitaria, El Peruano 9 July 2014 (SUNEDU-hosted copy), Arts. 40 to 46; SUNEDU press note of 15 September 2021; INEI TIC en los Hogares II Trimestre 2026; EF EPI 2025 Peru page (age groups); Embassy of India in Lima, India-Peru brief; Python Institute PCEP-30-03 page; IANA tz database. Read 9 November 2026.',
    localProject: 'An original two-sum lesson in Python: a nested loop starting j at 0 prints (5, 5) because it pairs an element with itself; the fixed brute force and a dictionary version both find (3, 7), and on 2,000 odd numbers the brute force makes 1,999,000 checks against 2,000 dictionary steps. Lesson family: hash-map complement lookup, the self-pair bug, quadratic against linear growth.',
    requiredMentions: ['(5, 5)', '2000 ((3997, 3999), 1999000)', '2000 ((3997, 3999), 2000)', 'already seen before the current one', 'as published on 9 July 2014', 'At least 165 credits', 'Command of two foreign languages, one of which may be replaced by a native language', 'no conducen a la obtención de grados o títulos', 'Leer en español: cursos de programación para universitarios', 'Never pair a number with itself'],
    sources: [
      { claim: 'Ley 30220 (2014 text): foreign language compulsory in pregrado; five years, two semesters a year; 35 and 165 credits; bachiller, master\'s and doctoral language requirements; each university sets its own rules; Art. 46 continuing education certifies but gives no degree.', url: 'https://www.sunedu.gob.pe/wp-content/uploads/2017/04/Ley-universitaria-30220.pdf' },
      { claim: '94 licensed universities (46 public, 48 private) with 1.1 million students (2021).', url: 'https://www.gob.pe/institucion/sunedu/noticias/522805-sunedu-gracias-al-licenciamiento-1-millon-100-mil-estudiantes-acceden-a-educacion-universitaria-de-calidad' },
      { claim: '97.3% of people aged 19 to 24 used the internet; 12.1% of people 15+ who did a computing task wrote a program (Cuadro 4.1, II trimestre 2026).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'EF EPI 2025: ages 18 to 20 score 469 (low), 21 to 25 score 540 (moderate).', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'TCS provides over 1,300 jobs in Peru from a sizeable Lima operation.', url: 'https://eoilima.gov.in/page/india-peru/' },
      { claim: 'PCEP-30-03: no prerequisites, 35 questions, 50 minutes, 70% pass.', url: 'https://pythoninstitute.org/pcep' },
      { claim: 'Peru UTC-5 all year; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Current amended text of Ley 30220 Article 45: not fetched (minedu.gob.pe copy returned 403, not retried); the page prints the 2014 text, says so, and says the law has been amended.',
      'A current national university enrolment figure: none found on an official page; the 2021 SUNEDU figure is labelled with its year.',
      'Any job, salary or admission promise, or that our classes satisfy a university language requirement: not made.',
      'Academic credit or affiliation with SUNEDU or a university: none, and the page says so.',
      'Spanish-language teaching: none; the page says the classes are in English only.'
    ]
  }
};
