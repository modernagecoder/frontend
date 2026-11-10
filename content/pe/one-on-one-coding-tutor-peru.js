// SHIP: market | one-on-one coding tutor in Peru, in English: who needs one, a session, choosing, speaking practice | variable scope: assigning inside a function makes the name local (UnboundLocalError); pass in and return
'use strict';
// One-on-one coding tutor in Peru (ag- English door, Peru cluster row PE076, hubGroup subjects; alloc ooo, #004A32).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08: timing flexible, any time.
// Search: "one on one coding tutor peru", "private coding tutor online", the English twin of "clases particulares de
// programación" (KEYWORDS.md section 4: "clases particulares / profesor particular" are the native words). The Spanish twin
// (clases-particulares-de-programacion-online-peru, LIVE) covers how a private class runs, private versus group, choosing a tutor,
// home needs, a domicilio versus online, school reinforcement and English. This page takes its own spine: six situations in which
// a learner in Peru needs one to one, who is online by age (INEI table), what a session does that a group cannot, a bug only a
// tutor reading the learner's own code would catch, how to vet a tutor, why one to one is speaking practice (EF EPI by skill),
// how it fits the school year, and the clock.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/one-on-one-coding-tutor-peru/, read
// 9 November 2026; every quote string-matched in the raw text):
//  - INEI, Estadísticas de las TIC en los Hogares, II Trimestre 2026 (inei_tic_iit2026.txt,
//    https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf), Cuadro 2.1, population 6 and over using the
//    internet by age group, II trimestre 2023 2024 2025 2026: Total "77,6 80,0 81,0 84,2"; 6 a 11 "60,1 61,7 61,5 68,2"; 12 a 18
//    "89,7 91,4 90,7 92,5"; 19 a 24 "95,6 96,4 96,4 97,3"; "25 a 40 años 90,9 92,7 93,9 95,2"; "41 a 59 años 76,5 79,9 81,9 86,0";
//    "60 y más 40,8 47,3 50,2 56,7". Text: "el 97,3% de la población de 19 a 24 años utilizó Internet, seguido por el grupo de 25 a
//    40 años con un 95,2% y el de 12 a 18 años con un 92,5%". (Row labels for the first four rows follow the text, which names
//    the same figures.) 2026 figures preliminary ("P/ Preliminar").
//  - EF EPI 2025 Peru page (ef_peru.txt, https://www.ef.com/wwen/epi/regions/latin-america/peru/): "Reading score:" 540,
//    "Listening score:" 499, "Writing score:" 514, "Speaking score:" 480; Peru 519; Lima 555.
//  - RM 501-2025-MINEDU (FACTS 21): "El año escolar está compuesto por treinta y seis (36) semanas lectivas y ocho (08) semanas
//    de gestión".
//  - CNEB (FACTS 44): "horas pedagógicas (45 minutos)".
//  - MINEDU press note, Fábrica de Programadores (FACTS 45, 46): "1000 escolares de 4.º y 5.º de secundaria de Lima Norte con
//    formación en programación Python y certificación internacional"; "podrán rendir el examen PCEP, con validez global".
//  - AI tool ages (content/ai-tool-age-audit.json, vendor terms): Claude 18 and over; ChatGPT under 18 with a parent's permission.
//  - Time: tzdata America/Lima UTC-5, Asia/Kolkata UTC+5:30 (facts-geo/timezone.tsv).
// Our own example (scope.py in the src-pages folder, run with python3 -I, Python 3.14), exact output:
//    UnboundLocalError: cannot access local variable 'score' where it is not associated with a value
//    score after two rounds: 8
// Lesson family: variable scope. Assigning to a name anywhere inside a function makes it local to the whole function, so reading
// it first raises UnboundLocalError (older Pythons word the message differently); the fix passes the value in and returns the new
// one, rather than reaching for global.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const BUG = [
  'score = 0',
  '',
  '',
  'def add_points(points):',
  '    score = score + points',
  '    return score',
  '',
  '',
  'try:',
  '    add_points(5)',
  'except UnboundLocalError as error:',
  '    print("UnboundLocalError:", error)'
].join('\n');

const BUG_OUT = "UnboundLocalError: cannot access local variable 'score' where it is not associated with a value";

const FIX = [
  'def add_points_fixed(current, points):',
  '    return current + points',
  '',
  '',
  'score = add_points_fixed(score, 5)',
  'score = add_points_fixed(score, 3)',
  'print("score after two rounds:", score)'
].join('\n');

const FIX_OUT = 'score after two rounds: 8';

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'subjects', label: 'One-on-one coding tutor' },
  slug: 'one-on-one-coding-tutor-peru',
  code: 'ooo',
  accent: '#004A32',
  accentRationale: 'One-on-one coding tutor in Peru: a deep evergreen #004A32, quiet and serious like a study lamp\'s shade, chosen for a page about focused private lessons; contrast is above 4.5 on every paper tone the build checks',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'One-on-one coding tutor in Peru',
  title: 'One-on-One Coding Tutor in Peru: Live Private Lessons',
  description: 'One-on-one coding tutor for learners in Peru aged 6 to 67: live private lessons in English in Python, Java, Scratch or web, at any hour on Peru time.',
  ogDescription: 'When a learner in Peru needs a private coding tutor, what a session does that a group cannot, how to vet a tutor, why one to one is also speaking practice, and a scope bug only a tutor reading your code would catch.',
  twitterDescription: 'Private, live coding lessons for children, students and adults in Peru, taught in English at the hour you choose.',
  pageName: 'One-on-One Coding Tutor in Peru',
  webPageDescription: 'A guide for families, students and adults in Peru considering a private coding tutor, built from INEI household technology data for 2023 to 2026, the EF English Proficiency Index 2025, MINEDU\'s 2026 school-year resolution, the CNEB, MINEDU\'s Fábrica de Programadores announcement, vendor age terms and the tz database, with an original Python lesson on variable scope.',
  courseDescription: 'Live one-on-one coding lessons for learners aged 6 to 67 in Peru, taught in English by mentors based in India: Scratch, Python, Java, web, data and AI, exam and certification preparation such as PCEP, IB and IGCSE computer science, planned around each learner\'s goal and booked at hours they choose.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'One-on-one coding tutor',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#who', label: 'Who it suits' },
    { href: '#session', label: 'A session' },
    { href: '#bug', label: 'Scope bug' },
    { href: '#vet', label: 'Choosing' },
    { href: '#clock', label: 'Peru time' }
  ],
  eyebrow: 'Peru &middot; Ages 6 to 67 &middot; Private coding lessons, live in English',
  h1: 'One-on-one coding tutor in Peru',
  lede: 'A private tutor is the most expensive way to learn to code and, for some people at some moments, by far the fastest. A university student two weeks from a Programación I exam, an IB student whose internal assessment will not run, a ten year old who is shy in groups, a professional of 45 who wants to automate a spreadsheet: each needs a teacher who looks only at their screen. This page explains who benefits most, what a good private session does, how to choose a tutor, and how ours work from Peru.',
  secondaryCta: { href: '#bug', label: 'See a tutor catch a bug' },
  wa: 'Hello Modern Age Coders, I am in Peru and I am looking for a one-on-one coding tutor in English. Could we book a free first session?',
  heroNote: 'Teaching live since 2020 &middot; 4.9 from about 547 Google reviews &middot; 10,000+ students worldwide',
  spec: [
    ['Ages', '6 to 67'],
    ['Subjects', 'Scratch, Python, Java, web, data, AI'],
    ['Format', 'Live video, one learner'],
    ['Language', 'English'],
    ['Peru time', 'Any hour, booked by you'],
    ['First session', 'Free']
  ],
  capsuleQ: 'In brief',
  capsule: 'Modern Age Coders provides a one-on-one coding tutor for learners in Peru, from children of 6 to adults of 67. Every session is live, online and in English: one learner and one mentor based in India, sharing a screen, working on that learner\'s own goal, whether Scratch, Python, Java, web development, data, AI, a university course, PCEP, or IB or IGCSE computer science. The plan, the pace and the hour are set by you, on Peru time, and the first session is free. Learners who prefer company can join a group of fifteen to twenty instead.',

  picks: {
    eyebrow: 'Often taken privately',
    h2: 'Three courses learners in Peru often take one to one',
    lede: 'Any of our courses can be taught privately. These three are the ones where a deadline or an exam makes a personal plan most valuable.',
    items: [
      { course: 'pcep-pcap-python-certification-course', code: 'OOO / 01', title: 'PCEP and PCAP Python Certification', note: 'For secundaria students, university students and adults aiming at the Python Institute exams. One to one lets the tutor drill exactly the question types a learner keeps getting wrong.' },
      { course: 'ib-diploma-computer-science-course', code: 'OOO / 02', title: 'IB Diploma Computer Science', note: 'For students at IB schools in Peru, including COAR. Private sessions fit the internal assessment and paper practice around the school\'s own calendar.' },
      { course: 'complete-java-programming-masterclass-college', code: 'OOO / 03', title: 'Complete Java Programming', note: 'For university students facing Java in a programming or data structures course. The tutor works from the learner\'s own syllabus and past assignments.' }
    ]
  },

  sections: [
    {
      id: 'who',
      eyebrow: 'Who it suits',
      h2: 'Who needs a one-on-one coding tutor rather than a class?',
      lede: 'Most learners do well in a good group. Private lessons earn their place when one of these six situations applies. The list is ours, drawn from the learners who ask us for one to one.',
      body: [
        { kind: 'three', cells: [
          { h3: 'A deadline', p: 'An exam, a coursework submission or a certification date is close, and there is no time to move at a group\'s pace. The tutor plans backwards from the date.' },
          { h3: 'A specific syllabus', p: 'A university course, IB or IGCSE computer science, or PCEP. The tutor follows that syllabus, not ours, and works from the learner\'s own materials.' },
          { h3: 'A shy or very young child', p: 'Some children of 6 to 9 will not speak in a group, especially in a second language. Alone with one patient adult, they talk, and talking through code is how they learn.' }
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Far ahead, or far behind', p: 'A learner who would be bored or lost in any group. The tutor sets the pace weekly, faster or slower.' },
          { h3: 'An adult with a goal', p: 'A professional automating reports, a parent learning alongside a child, someone over 50 starting fresh. Adults often prefer not to learn in front of others.' },
          { h3: 'An unusual timetable', p: 'Shift work, travel, a sports schedule. One to one is booked around the learner, not the other way round.' }
        ] },
        { kind: 'p', mt: true, html: 'Readers who prefer Spanish will find the same private lessons described on <a class="ag-inline-link" href="/clases-particulares-de-programacion-online-peru">clases particulares de programación online</a>, written for Peruvian parents and students. Adults over 50 have their own page, <a class="ag-inline-link" href="/coding-for-adults-over-50-peru">coding after 50 in Peru</a>, and university students can read <a class="ag-inline-link" href="/coding-courses-for-university-students-peru">coding courses for university students in Peru</a>.' }
      ]
    },
    {
      id: 'online',
      tint: 'tint',
      eyebrow: 'Online, by age',
      h2: 'Can every age learn with an online tutor in Peru?',
      lede: 'Almost every age is now online. INEI\'s quarterly household survey shows internet use rising in every age group from 2023 to 2026, including the youngest and the oldest, the two groups most likely to want a private tutor.',
      body: [
        { kind: 'table', numCols: [1, 2, 3, 4], caption: 'People in Peru who used the internet, by age group, second quarter of each year (percent)', head: ['Age group', '2023', '2024', '2025', '2026'], rows: [
          ['All aged 6 and over', '77.6', '80.0', '81.0', '84.2'],
          ['6 to 11', '60.1', '61.7', '61.5', '68.2'],
          ['12 to 18', '89.7', '91.4', '90.7', '92.5'],
          ['19 to 24', '95.6', '96.4', '96.4', '97.3'],
          ['25 to 40', '90.9', '92.7', '93.9', '95.2'],
          ['41 to 59', '76.5', '79.9', '81.9', '86.0'],
          ['60 and over', '40.8', '47.3', '50.2', '56.7']
        ] },
        { kind: 'source', html: 'Source: INEI, Estadísticas de las Tecnologías de Información y Comunicación en los Hogares, II Trimestre 2026 (bulletin N° 03, September 2026), Cuadro 2.1, from the Encuesta Nacional de Hogares. 2026 figures are preliminary. INEI prints decimals with a comma; we use a point.' },
        { kind: 'two', mt: true,
          leftH3: 'What the table shows',
          left: [
            'In the second quarter of 2026, 97.3% of Peruvians aged 19 to 24 used the internet, the highest of any group. Among people of 60 and over the figure was 56.7%, up from 40.8% in 2023, the fastest climb in the table.',
            'Children of 6 to 11 were at 68.2% in 2026, up from 61.5% a year before. Both ends of the age range are coming online quickly.'
          ],
          rightH3: 'Why it matters for private lessons',
          right: [
            'The youngest and the oldest learners are the ones who most often need a tutor\'s full attention: children because they cannot yet describe what went wrong, older adults because they want to go at their own pace without feeling watched.',
            'Being online is not the same as being ready to code, though. Coding needs a laptop or desktop with a keyboard. A tutor\'s first job with a new learner is often to check the computer, the browser and the headset.'
          ] }
      ]
    },
    {
      id: 'session',
      eyebrow: 'A private session',
      h2: 'What happens in a one-on-one online coding session?',
      lede: 'The learner drives and the tutor navigates. The learner\'s screen is shared, the learner types, and the tutor watches, asks and only occasionally points. Here is the shape of a typical session with us.',
      body: [
        { kind: 'ol', items: [
          '<strong>Start from last time.</strong> The learner explains, in their own words, what they did since the previous session and what got stuck.',
          '<strong>Read the learner\'s own code.</strong> Not a model answer: their file, as it is. This is where private lessons find mistakes a group never sees.',
          '<strong>Predict, then run.</strong> Before each run the learner says what should happen. The gap between prediction and result sets the next ten minutes.',
          '<strong>One new idea.</strong> Introduced only when the learner needs it for their goal, and practised at once on their own project.',
          '<strong>A task to finish alone.</strong> Small enough to complete, hard enough to need thought. The next session starts by reading it.',
          '<strong>A note afterwards.</strong> What was covered, what is shaky, what comes next; for children, the note goes to a parent.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What a tutor does not do',
          left: [
            'Write the learner\'s assignment. Coursework, IB internal assessments and university projects must be the learner\'s own work, and a tutor who types it for them is doing harm, whatever the deadline.',
            'Hand over answers to copy. A learner who cannot explain a line of their program does not yet understand it, and the next exam will find that out.'
          ],
          rightH3: 'What the learner should leave with',
          right: [
            'A working piece of their own code, a clear idea of the one thing that was hardest, and the confidence to try the next step without the tutor.',
            'Over weeks, the ability to read an error message and find its cause alone. That is the moment a private tutor starts making themselves unnecessary, which is the point.'
          ] }
      ]
    },
    {
      id: 'bug',
      tint: 'tint',
      eyebrow: 'A bug from a real-style session',
      h2: 'What can a private tutor catch that a group class misses?',
      lede: 'Mistakes in the learner\'s own code, the kind that never appear in the teacher\'s examples. Here is one we see often from learners writing their first games and scoring programs, rebuilt as a short example of our own.',
      body: [
        { kind: 'two',
          leftH3: 'The learner\'s program',
          left: [
            'The learner keeps a score in a variable outside the function and writes a function that adds points to it. It reads perfectly sensibly: take the score, add the points, give it back.',
            'They run it and Python stops with an error they have never seen. In a group, the learner might quietly delete the function and copy the score line everywhere instead. In a private session the tutor sees the error appear and asks the learner to read it aloud.'
          ],
          rightH3: 'What the error means',
          right: [
            'Python decides which names belong to a function before running it. Because the function assigns to <code>score</code>, Python treats <code>score</code> as the function\'s own local variable throughout, so the right-hand side tries to read a local that has no value yet.',
            'The fix we teach is not to reach for the <code>global</code> keyword, which would make the code harder to test. It is to pass the current score in and return the new one, so the function depends only on what it is given.'
          ] },
        { kind: 'code', label: 'The learner\'s version', lang: 'Python', code: BUG },
        { kind: 'code', label: 'What it prints', lang: 'Output', code: BUG_OUT, note: 'Exact output of our run with Python 3.14. Python versions before 3.11 word the same error as "local variable referenced before assignment".' },
        { kind: 'code', label: 'The fixed version: value in, value out', lang: 'Python', code: FIX },
        { kind: 'code', label: 'What the fix prints', lang: 'Output', code: FIX_OUT, note: 'Exact output of our run: 0 plus 5, then plus 3.' },
        { kind: 'p', mt: true, html: 'The rule the learner writes down: <strong>if a function assigns to a name, that name is local to the whole function</strong>. It takes two minutes to explain and saves hours later, in Python and in other languages with similar rules. It is also the kind of discovery that only happens when someone is reading the learner\'s own code, line by line, which is what a private session is for.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 10 to 13.</strong> Predict whether the first program runs. Then rename the variable inside the function and see whether the error changes.',
          '<strong>Secundaria and university.</strong> Write a version with <code>global score</code> and one with parameters. Write one test for each, and say which was easier to test.',
          '<strong>Adults.</strong> Find a function in your own script that changes a value defined outside it. Rewrite it to take the value in and return the result.'
        ] }
      ]
    },
    {
      id: 'vet',
      eyebrow: 'Choosing a tutor',
      h2: 'How do I choose a good online coding tutor?',
      lede: 'Watch a session, not a profile. These are the checks we suggest, whether or not you choose us.',
      body: [
        { kind: 'ol', items: [
          '<strong>Who types?</strong> In a good session the learner\'s hands are on the keyboard most of the time.',
          '<strong>Does the tutor ask before telling?</strong> Listen for "what do you think this line does?" before any explanation.',
          '<strong>Does the tutor read the learner\'s code,</strong> or switch to their own prepared example at the first problem?',
          '<strong>Is there a plan tied to your goal?</strong> For an exam or a university course, the tutor should ask for the syllabus or past papers early.',
          '<strong>What happens with coursework?</strong> A trustworthy tutor says plainly that they will not write it for the learner.',
          '<strong>Which AI tools does the tutor allow?</strong> For anyone under 18 the answer must respect each tool\'s own age terms: Claude requires users to be 18, and ChatGPT asks for a parent\'s permission under 18.',
          '<strong>Is it the same tutor every week?</strong> Continuity is most of the value of one to one.'
        ] },
        { kind: 'p', mt: true, html: 'Our tutors are mentors based in India who teach only live and only in English. We are not connected with MINEDU, any Peruvian school or university, or any certification body, and we do not issue Peruvian qualifications; learners who finish a course receive our own completion certificate.' }
      ]
    },
    {
      id: 'english',
      tint: 'tint',
      eyebrow: 'English',
      h2: 'Is a private coding lesson in English hard for a Spanish speaker?',
      lede: 'Less than people expect, and it is good practice for the skill Peruvians score lowest on: speaking. In a private session the learner speaks for much of the hour, because there is no one else to answer.',
      body: [
        { kind: 'table', numCols: [1], caption: 'English skills in Peru, EF English Proficiency Index 2025 (scores)', head: ['Skill or place', 'Score'], rows: [
          ['Reading', '540'],
          ['Writing', '514'],
          ['Listening', '499'],
          ['Speaking', '480'],
          ['Peru overall', '519'],
          ['Lima', '555']
        ] },
        { kind: 'source', html: 'Source: EF Education First, EF EPI Peru country page, 2025 edition, ef.com, read on 9 November 2026. EF notes that the skill scores averaged do not equal the national score.' },
        { kind: 'two', mt: true,
          leftH3: 'Why one to one helps',
          left: [
            'Peru\'s reading score in the 2025 index (540) is well above its speaking score (480). Many learners understand written English, and code is written English, but rarely get to speak it.',
            'In a private lesson the tutor asks the learner to explain each line aloud. That is speaking practice with a clear purpose and a patient listener, and the vocabulary is limited and repeated: loop, list, return, error.'
          ],
          rightH3: 'How our tutors adapt',
          right: [
            'They slow down, repeat, write key words in the chat and on screen, and adjust to the learner\'s accent. Lima scored 555 in the same index, in EF\'s "high" band, but the tutor sets the pace for the learner in front of them, not for a city average.',
            'We never switch to Spanish in a lesson. The point is that the English becomes usable, and it does so faster when there is no way round it.'
          ] }
      ]
    },
    {
      id: 'school',
      eyebrow: 'Fitting the year',
      h2: 'How does a private coding tutor fit around school or university?',
      lede: 'Around the learner\'s calendar, not ours. For school students in Peru that calendar is set by MINEDU; for university students, by their faculty.',
      body: [
        { kind: 'two',
          leftH3: 'School students',
          left: [
            'MINEDU\'s resolution for 2026 (RM 501-2025-MINEDU) sets a school year of 36 teaching weeks and 8 management weeks. Private coding lessons can run through the term at a lighter rhythm and step up in the January to March summer break.',
            'The national curriculum counts lessons in teaching hours of 45 minutes and has no computing subject of its own. MINEDU\'s Fábrica de Programadores pilot in 2025 trained 1,000 students of 4th and 5th of secundaria in Lima Norte in Python, with the option to sit the PCEP exam. Families who want something similar at home can do it privately; our <a class="ag-inline-link" href="/coding-classes-for-teens-peru">coding classes for teens in Peru</a> page describes the paths.'
          ],
          rightH3: 'University students and adults',
          right: [
            'University learners usually book weekly sessions through the semester and extra ones before exams. The tutor works from the course\'s own syllabus, lab sheets and past assignments, always as a guide and never as the author.',
            'Working adults often prefer early mornings or late evenings on Peru time. Because our mentors work from India, ten and a half hours ahead, those hours are easy to arrange.'
          ] }
      ]
    },
    {
      id: 'clock',
      tint: 'tint',
      eyebrow: 'Peru time',
      h2: 'What hours can I book a private tutor from Peru?',
      lede: 'Almost any. Peru stays on UTC minus 5 all year and India on UTC plus 5:30, so India is ten and a half hours ahead on every date. The rows below are conversions only.',
      body: [
        { kind: 'table', numCols: [], caption: 'A few Peru hours and the matching India time (not a schedule)', head: ['Peru time', 'India time', 'Who often books it'], rows: [
          ['06:30', '17:00', 'Professionals before work'],
          ['09:30', '20:00', 'University students between lectures'],
          ['15:00', '01:30, next day', 'Children after school'],
          ['19:00', '05:30, next day', 'Secundaria students after homework'],
          ['21:30', '08:00, next day', 'Adults after the family evening']
        ] },
        { kind: 'source', html: 'Time zone rules: IANA tz database entries America/Lima and Asia/Kolkata, neither with daylight saving. The conversions are ours.' },
        { kind: 'p', mt: true, html: 'Your booking is made on your own clock and appears to the tutor in India time. Children\'s families may also like <a class="ag-inline-link" href="/online-coding-classes-for-kids-peru">online coding classes for kids in Peru</a>, and all our Peru pages are on the <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">coding and AI classes in Peru</a> hub.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'How will I know private lessons are working?',
    lede: 'When the learner needs the tutor less. These stages are ours and apply at any age.',
    table: { numCols: [], caption: 'Our stages of independence in one-to-one lessons', head: ['Stage', 'In the session', 'Between sessions'], rows: [
      ['1. Guided', 'Follows the tutor\'s questions step by step', 'Repeats a small task seen in class'],
      ['2. Predicting', 'Says what code will do before running it', 'Finishes a short new task alone'],
      ['3. Reading errors', 'Reads an error aloud and points to the line', 'Fixes simple errors without help'],
      ['4. Planning', 'Plans a feature before typing', 'Builds a small feature end to end'],
      ['5. Testing', 'Writes a test or check before trusting a result', 'Finds own bugs with tests'],
      ['6. Independent', 'Brings questions, not problems', 'Works on a project with only occasional review']
    ] },
    left: { h3: 'For parents and sponsors', ps: [
      'Ask what the learner fixed alone since the last session. A growing answer means the lessons are working.',
      'Stage 3 is where the scope bug above usually turns up, and where learners start to trust error messages.'
    ] },
    right: { h3: 'For learners', ps: [
      'Bring your own code to every session, even if it is broken. Broken code is the richest lesson material there is.',
      'Before asking the tutor, write down what you expected and what happened. Often that solves it.'
    ] }
  },

  catalogue: {
    eyebrow: 'Any course, one to one',
    h2: 'Nine more courses available as private lessons',
    lede: 'All live, in English, with the same tutor each week.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 12', courses: [
        { code: 'OOO / KIDS / 01', slug: 'scratch-programming-complete-course', title: 'Scratch for kids', blurb: 'Block coding at a pace set for one child.' },
        { code: 'OOO / KIDS / 02', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'First typed code, with child-safe AI projects.' },
        { code: 'OOO / KIDS / 03', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox in Luau', blurb: 'A game of the child\'s own design, scripted line by line.' }
      ] },
      { num: 'II', h3: 'Secundaria and exams', sub: 'Ages 13 to 18', courses: [
        { code: 'OOO / TEEN / 01', slug: 'igcse-computer-science-0478-course', title: 'IGCSE Computer Science', blurb: 'Paper practice and programming for Cambridge students.' },
        { code: 'OOO / TEEN / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Object-oriented code from first class to projects.' },
        { code: 'OOO / TEEN / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving and DSA for teens', blurb: 'Algorithms for olympiads and later university.' }
      ] },
      { num: 'III', h3: 'University and adults', sub: 'Ages 18 to 67', courses: [
        { code: 'OOO / ADULT / 01', slug: 'data-structures-algorithms-masterclass-college', title: 'Data structures and algorithms', blurb: 'The core of most computer science degrees.' },
        { code: 'OOO / ADULT / 02', slug: 'python-ai-automation-masterclass-college', title: 'Python automation', blurb: 'Scripts that save hours of office work.' },
        { code: 'OOO / ADULT / 03', slug: 'full-stack-web-development-masterclass-college', title: 'Full stack web development', blurb: 'From HTML to a deployed web application.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'How private lessons run from Peru',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Weekly rhythm', l: 'Most private learners keep a fixed weekly hour on Peru time and add sessions before deadlines.' },
      { time: 'Intensive weeks', l: 'Exam seasons and the January to March break suit several sessions a week.' },
      { time: 'Groups instead', l: 'Learners who prefer company can join a group of fifteen to twenty.' }
    ],
    cells: [
      { h3: 'One tutor', p: 'The same mentor every week, who knows your code.' },
      { h3: 'Your material', p: 'Your syllabus, your assignments, your project.' },
      { h3: 'Screen shared', p: 'You type; the tutor watches and asks.' },
      { h3: 'Clear English', p: 'Spoken slowly, with key words written on screen.' },
      { h3: 'Session notes', p: 'A short written summary after each lesson.' },
      { h3: 'Flexible pace', p: 'Faster or slower, decided week by week.' }
    ]
  },

  projectsH2: 'What learners have built with us',
  projectsLede: 'Private learners often bring their own project ideas. A few student projects are below, and more are on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Reviews from learners and parents, as posted on Google.',

  fees: {
    h2: 'Fees for one-on-one lessons from Peru',
    lede: 'Private lessons are priced in US dollars and paid by card each month. Your card issuer sets the conversion into soles, so the amount on your statement can differ slightly between months.',
    free: ['A free first private session', 'The tutor reads your code or sets a first task', 'No card needed'],
    group: ['Fifteen to twenty learners of similar age', 'One mentor through the course', 'Two live classes a week', 'Monthly, stop at any time'],
    one: ['You and one tutor only', 'Plan built around your goal or syllabus', 'Hours chosen by you']
  },

  faq: {
    eyebrow: 'Learners in Peru ask',
    h2: 'One-on-one coding tutor: questions from Peru',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Private lessons are live, online and in English only. Your tutor speaks slowly and clearly, adjusts to your pace and accent, and writes key words on screen. Our Spanish-language pages describe the lessons for readers who prefer Spanish, but the teaching itself is always in English.' },
      { q: 'Who is a private coding tutor right for?', a: 'Learners with a deadline or a specific syllabus (a university course, IB or IGCSE computer science, PCEP), very young or shy children, learners far ahead or behind any group, adults who prefer to learn privately, and anyone with an unusual timetable.' },
      { q: 'What ages do you tutor?', a: 'From 6 to 67. Children of 6 to 9 usually start with Scratch; from about 9 or 10, Python; teenagers and adults choose from Python, Java, web, data and AI, or an exam syllabus.' },
      { q: 'Will the tutor do my assignment or coursework?', a: 'No. Coursework, IB internal assessments and university projects must be your own work. The tutor explains, asks questions and reviews what you write, but never writes it for you.' },
      { q: 'Can a tutor help with a university programming course in Peru?', a: 'Yes, as a guide. Share the syllabus and past assignments and the tutor plans sessions around them. Courses at Peruvian universities may be taught in Spanish; our sessions are in English, and the code itself is the same.' },
      { q: 'What time can I have lessons?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India is ten and a half hours ahead of Peru all year, so a 06:30 lesson in Lima is 17:00 for the tutor.' },
      { q: 'Is one to one better than a group class?', a: 'Not always. Groups of fifteen to twenty are lively, and many children learn well from their peers. One to one is faster for a specific goal and better for learners who will not speak up in a group. You can switch either way.' },
      { q: 'Can my teenager use AI tools in lessons?', a: 'Only tools whose terms allow their age, and only after they can solve the problem themselves. Claude requires users to be 18, and ChatGPT requires a parent or guardian\'s permission for anyone under 18.' },
      { q: 'Do you prepare for PCEP?', a: 'Yes. Our PCEP and PCAP course can be taken one to one. MINEDU\'s Fábrica de Programadores pilot also led students to the PCEP exam; we have no connection with that programme or with the Python Institute.' },
      { q: 'Are you linked with MINEDU, a university or a school?', a: 'No. Modern Age Coders is an independent online school with no tie to MINEDU, SUNEDU, any Peruvian university or school, or any certification body. We give our own completion certificate only.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'More about private and live lessons',
    lede: 'Pages that answer the next question.',
    items: [
      { href: '/one-on-one-ai-classes', label: 'One-on-one AI classes', p: 'Private lessons focused on AI.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our approach to a live lesson.' },
      { href: '/we-teach-you-how-to-think', label: 'Thinking before tools', p: 'Why we ask before we tell.' },
      { href: '/ai-tools-age-guide', label: 'AI tools by age', p: 'The minimum age for each AI tool.' },
      { href: '/student-labs', label: 'Student labs', p: 'Projects built by our learners.' },
      { href: '/courses', label: 'All courses', p: 'Every course, each available one to one.' }
    ]
  },

  start: {
    h2: 'Book a free private session',
    lede: 'Bring whatever you have: a broken program, a syllabus, an exam date or just a goal. In the free session the tutor reads it with you, sets one small task and suggests a plan, a weekly rhythm and an hour on your clock.',
    readFirst: 'Prefer to read first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> explains our lessons, and the <a class="ag-inline-link" href="/courses">course list</a> shows every syllabus a tutor can follow.',
    note: 'Lessons are live from India and in English only. Message us on WhatsApp in English for a quick answer.',
    formNote: 'Free, no card, no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Private lessons', links: [
        { href: '/one-on-one-ai-classes', label: 'One-on-one AI' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Peru hub' },
        { href: '/coding-for-adults-over-50-peru', label: 'Coding after 50' },
        { href: '/coding-courses-for-university-students-peru', label: 'University students' },
        { href: '/clases-particulares-de-programacion-online-peru', label: 'Leer en español' }
      ] }
    ],
    bottomRight: 'Value in, value out'
  },

  personalityCss: `
.ag-root.ag-ooo .ag-hero h1 { max-width: 15ch; letter-spacing: -0.02em; }
.ag-root.ag-ooo .ag-capsule { border-left-width: 5px; }
.ag-root.ag-ooo .ag-table td { line-height: 1.5; }
.ag-root.ag-ooo .ag-code pre { line-height: 1.5; }
.ag-root.ag-ooo .ag-steps li { line-height: 1.7; }
`,

  dossier: {
    curriculumAuthority: 'INEI, Estadísticas de las TIC en los Hogares, II Trimestre 2026, Cuadro 2.1; EF EPI 2025 Peru page; RM 501-2025-MINEDU; CNEB; MINEDU press note on Fábrica de Programadores; vendor terms for ChatGPT and Claude (content/ai-tool-age-audit.json); IANA tz database. Read 9 November 2026.',
    localProject: 'An original lesson from a private session: a learner\'s add_points function assigns to score, so Python treats score as local and reading it raises UnboundLocalError ("cannot access local variable \'score\' where it is not associated with a value" in Python 3.14); the fix passes the current score in and returns the new one, printing "score after two rounds: 8". Lesson family: variable scope.',
    requiredMentions: ["cannot access local variable 'score' where it is not associated with a value", 'score after two rounds: 8', 'if a function assigns to a name, that name is local to the whole function', 'People in Peru who used the internet, by age group, second quarter of each year (percent)', 'Among people of 60 and over the figure was 56.7%, up from 40.8% in 2023', 'English skills in Peru, EF English Proficiency Index 2025 (scores)', 'a school year of 36 teaching weeks and 8 management weeks', 'trained 1,000 students of 4th and 5th of secundaria in Lima Norte in Python', 'Value in, value out'],
    sources: [
      { claim: 'Internet use by age group, II trimestre 2023 to 2026 (Cuadro 2.1); 97.3% at 19 to 24, 95.2% at 25 to 40, 92.5% at 12 to 18, 68.2% at 6 to 11, 56.7% at 60 and over in 2026.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'EF EPI 2025 Peru: reading 540, writing 514, listening 499, speaking 480, overall 519, Lima 555.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'School year 2026: 36 teaching weeks and 8 management weeks (RM 501-2025-MINEDU).', url: 'https://cdn.www.gob.pe/uploads/document/file/8968298/7380466-rm-n-501-2025-minedu.pdf' },
      { claim: 'Teaching hours of 45 minutes; no computing area in the plan of studies.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Fábrica de Programadores: 1,000 students of 4th and 5th secundaria in Lima Norte, Python, PCEP.', url: 'https://www.gob.pe/institucion/minedu/noticias/1214050-minedu-impulsa-iniciativa-fabrica-de-programadores-para-formar-a-escolares-con-certificacion-internacional-en-programacion' },
      { claim: 'ChatGPT under 18 needs parental permission; Claude 18 and over.', url: 'https://openai.com/policies/row-terms-of-use/' },
      { claim: 'Peru UTC-5 all year; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Private tutoring prices in Peru (Superprof, Classgap and similar): not printed (no competitor prices, no soles).',
      'Writing coursework, IB internal assessments or university assignments for learners: refused, and the page says so.',
      'That private lessons guarantee exam, admission or certification results: not claimed.',
      'Any link with MINEDU, SUNEDU, a Peruvian university or school, the Python Institute or the Fábrica de Programadores: none, and the page says so.'
    ]
  }
};
