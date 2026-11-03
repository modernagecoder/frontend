'use strict';
// Bundeswettbewerb Informatik preparation (ag- competition spoke, Germany cluster row DE046), written 2026-11-03.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD. We are not connected with BWINF. The 1st round of the 45th Bundeswettbewerb is open until
// 23 November 2026 and BWINF forbids publishing solution ideas before the deadline, so this page names no live task and
// gives no hint on one; the worked problem is our own.
// Spine: count the steps before you code. One original problem (blocked views in a class photo) solved by trying every
// pair and by a merge-sort count, with the steps printed for 1,000, 2,000 and 4,000 pupils.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/bundeswettbewerb-informatik-preparation/
// and facts-school/src/bwinf-bw, bwinf2026, ioi-teilnehmen; quoted strings grepped from the raw text, fetched 2 and 3 Nov 2026):
//  - bwinf.de/bundeswettbewerb/: "1. Runde: 1. September bis 23. November 2026 2. Runde: Anfang 2027 bis April 2027
//    3. Runde: September 2027"; "In der 1. Runde ist Gruppenarbeit zugelassen und erwünscht. In der 2. Runde ist dann
//    selbstständige Einzelarbeit gefordert."; "Die Bundessiegerinnen und Bundessieger werden in die Studienstiftung des
//    deutschen Volkes aufgenommen."; "Die 2. Runde kann als Ersatzleistung für die besondere Lernleistung im Abitur gelten.
//    Ob dies möglich ist, hängt von Bundesland und Schule ab."; "Insgesamt 1.790 Teilnehmende bei der 43. Auflage";
//    workshops "Das Hasso-Plattner-Institut mit seinem Fit-For-BWINF-Workshop" (FACTS 145 to 150).
//  - bwinf.de/bundeswettbewerb/teilnehmen/: "nach dem 23. November 2004 geboren"; "vom 1. September bis 23. November 2026
//    ihren Wohnsitz in Deutschland haben"; "Die circa 30 bundesweit Besten werden zur 3. Runde eingeladen"; "für 3-4 Tage";
//    "1:1 Gespräche mit Professorinnen und Professoren"; tips "Trenne die Lösungsidee von der Umsetzung in ein Programm."
//    (The FAQ page gives 17 November as the cut-off; we use the Teilnehmen page, which matches the 23 November deadline.)
//  - bwinf.de/bundeswettbewerb/haeufige-fragen/: "In der ersten Runde gibt es fünf Aufgaben und zwei Junioraufgaben. Es
//    müssen mindestens 3 Aufgaben bearbeitet werden."; "In der zweiten Runde gibt es drei Aufgaben, von denen zwei
//    bearbeitet werden müssen."; juniors "nur von Schülerinnen und Schülern vor der Qualifikationsphase"; "Es gibt keine
//    Einschränkungen in der Wahl der Programmiersprache."; libraries "sofern sie nur als nützliche Hilfestellung dienen";
//    "Dort muss man dann (auch als Einzelteilnehmer) ein 'Team' gründen"; AI "In den ersten beiden Runden darfst du KI-Tools
//    wie ChatGPT oder CoPilot nutzen"; "In der Finalrunde ist der Einsatz von KI übrigens nicht möglich".
//  - bwinf.de/bundeswettbewerb/einsenden/: documentation "die Umsetzung der Idee in ein Programm erläutern; deine genutzten
//    Werkzeuge (wie Bibliotheken oder KI) erläutern; an genügend Beispielen zeigen ...; die wichtigsten Teile des
//    Quelltextes anfügen"; "je ein PDF pro Aufgabe"; "vor Einsendeschluss dürfen keine Lösungsideen oder Lösungen mit
//    Programmen veröffentlicht werden".
//  - bwinf.de/bundeswettbewerb/45/: "Sieben Aufgaben stehen zur Auswahl"; "Einsendeschluss für beide Wettbewerbe ist der
//    23. November 2026."
//  - bwinf.de/olympiade/teilnehmen/: "Aus den bis zu 20 Besten des Bundeswettbewerbs Informatik" (FACTS 151).
// Our own calculations (scratchpad de/w/G8/bwinf1.py, python3 -I, random.seed(2026), heights 120 to 190 cm):
//   1000 pupils | blocked pairs 253662 253662 | steps 499500 vs 8711
//   2000 pupils | blocked pairs 980650 980650 | steps 1999000 vs 19382
//   4000 pupils | blocked pairs 3912401 3912401 | steps 7998000 vs 42726
// Lesson family: count the steps before you code (from a correct slow idea to a correct fast one, with evidence).

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const PHOTO = [
  'import random',
  '',
  'def blocked_pairs_slow(heights):',
  '    steps = 0',
  '    count = 0',
  '    for i in range(len(heights)):',
  '        for j in range(i + 1, len(heights)):',
  '            steps += 1',
  '            if heights[i] > heights[j]:',
  '                count += 1',
  '    return count, steps',
  '',
  'def blocked_pairs_fast(heights):',
  '    steps = 0',
  '    def sort_count(row):',
  '        nonlocal steps',
  '        if len(row) <= 1:',
  '            return row, 0',
  '        mid = len(row) // 2',
  '        left, a = sort_count(row[:mid])',
  '        right, b = sort_count(row[mid:])',
  '        merged, count, i, j = [], a + b, 0, 0',
  '        while i < len(left) and j < len(right):',
  '            steps += 1',
  '            if left[i] <= right[j]:',
  '                merged.append(left[i]); i += 1',
  '            else:',
  '                merged.append(right[j]); j += 1',
  '                count += len(left) - i',
  '        merged += left[i:] + right[j:]',
  '        return merged, count',
  '    _, count = sort_count(heights)',
  '    return count, steps',
  '',
  'random.seed(2026)',
  'for n in [1000, 2000, 4000]:',
  '    row = [random.randint(120, 190) for _ in range(n)]',
  '    slow = blocked_pairs_slow(row)',
  '    fast = blocked_pairs_fast(row)',
  '    print(n, "pupils | blocked pairs", slow[0], fast[0], "| steps", slow[1], "vs", fast[1])'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'competition', label: 'Bundeswettbewerb Informatik' },
  slug: 'bundeswettbewerb-informatik-preparation',
  code: 'bin',
  accent: '#19607B',
  accentRationale: 'Bundeswettbewerb Informatik: a steel blue #19607B, cool and technical, clear of the Biber mulberry, the Informatik teal and the Abitur navy; contrast 5.68 on the paper #FBF8F2 and above 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Bundeswettbewerb Informatik preparation',
  title: 'Bundeswettbewerb Informatik Preparation, Live in English',
  description: 'Bundeswettbewerb Informatik 2026 to 2027 explained: rounds, deadlines, who may enter, what a submission needs, and an original algorithm problem taught in English.',
  ogDescription: 'The 45th Bundeswettbewerb Informatik from BWINF\'s own pages: three rounds from September 2026 to September 2027, the eligibility rules, the documentation every task needs, and a worked problem of our own that goes from millions of steps to thousands.',
  twitterDescription: 'The 45th Bundeswettbewerb Informatik explained, with an original slow-to-fast algorithm problem, taught live in English.',
  pageName: 'Bundeswettbewerb Informatik Preparation',
  webPageDescription: 'A guide for teenagers in Germany and their parents to the Bundeswettbewerb Informatik run by BWINF: the 2026 to 2027 rounds and dates, who may take part, the rules on teams, languages and AI tools, how a submission is documented, and an original algorithm problem with working Python.',
  courseDescription: 'Live online preparation in English for the Bundeswettbewerb Informatik: algorithms, data structures, clear documentation and honest testing, built on original problems and past rounds after their deadlines, in a group of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Bundeswettbewerb Informatik',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#rounds', label: 'Rounds' },
    { href: '#who', label: 'Entry' },
    { href: '#write-up', label: 'Write-up' },
    { href: '#steps', label: 'Problem' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Germany &middot; Bundeswettbewerb Informatik &middot; Up to age 21',
  h1: 'Bundeswettbewerb Informatik preparation',
  lede: 'The Bundeswettbewerb Informatik is not a quiz. It hands out real problems, gives weeks to solve them at home in any programming language, and then judges how well the solution is explained as much as whether the program works. This page covers the 45th round from BWINF\'s own pages, who may enter, what a submission must contain, and a worked problem of our own that shows the skill the contest rewards most: knowing how much work your program does before you run it.',
  secondaryCta: { href: '#steps', label: 'See the worked problem' },
  wa: 'Hello Modern Age Coders, I am a pupil in Germany interested in the Bundeswettbewerb Informatik and would like a free first class in English.',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; algorithms explained, measured and written up',
  spec: [
    ['Who', 'Pupils up to 21 not yet studying or working'],
    ['Languages', 'Python, Java or C++, the learner\'s choice'],
    ['Focus', 'Algorithms and the written explanation'],
    ['German times', 'Late afternoons and weekends'],
    ['Teachers', 'Mentors based in India'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Bundeswettbewerb Informatik preparation at Modern Age Coders is a live online class in English for teenagers in Germany, part of our German Informatics Competitions course. Pupils learn the algorithms, data structures and clear written explanations the contest asks for, using problems we write ourselves and past rounds after their deadlines. One regular mentor matches each pupil\'s pace and accent, in a group of fifteen to twenty or one to one.',

  picks: {
    eyebrow: 'Where Bundeswettbewerb pupils start',
    h2: 'Three courses for the Bundeswettbewerb Informatik',
    lede: 'One made for the German contests, one for teenagers who already program and want contest-level algorithms, and one for those who still need a first language.',
    items: [
      { course: 'german-informatics-competitions-course-biber-bwinf-bwki', code: 'BIN / 01', title: 'German Informatics Competitions', note: 'Ages 9 to 19. From Biber puzzles to Bundeswettbewerb algorithms, with a weekly problem set and a monthly mock contest under contest rules.' },
      { course: 'competitive-programming-for-teens-course', code: 'BIN / 02', title: 'Competitive Programming for Teens', note: 'Ages 13 to 18 who can already write basic programs. Greedy methods, graphs, dynamic programming and the habit of testing on hard cases.' },
      { course: 'python-complete-masterclass-teens', code: 'BIN / 03', title: 'Python for Teens', note: 'For teenagers starting from zero. Python is a fine contest language, and the junior tasks of round 1 are within reach after a solid first year.' }
    ]
  },

  sections: [
    {
      id: 'rounds',
      eyebrow: 'The 45th Bundeswettbewerb',
      h2: 'How does the Bundeswettbewerb Informatik run in 2026 and 2027?',
      lede: 'In three rounds over about a year. The first two are solved at home; the third is an invitation-only final with interviews.',
      body: [
        { kind: 'table', numCols: [], caption: 'The 45th Bundeswettbewerb Informatik, round by round', head: ['Round', 'Dates', 'Tasks', 'How pupils work'], rows: [
          ['Round 1', '1 September to 23 November 2026', 'Seven offered: five tasks and two junior tasks; at least three to be solved', 'Alone or in a team; group work is allowed'],
          ['Round 2', 'Early 2027 to April 2027', 'Three offered, two to be solved', 'Alone only'],
          ['Round 3, the final', 'September 2027', 'Team problems and one-to-one interviews', 'About 30 invited, on site for 3 to 4 days']
        ] },
        { kind: 'source', html: 'Sources: BWINF, Bundeswettbewerb Informatik overview, FAQ, Teilnehmen and 45th round pages (bwinf.de/bundeswettbewerb/), read on 3 November 2026. BWINF says round 2 tasks are available by Christmas and that round 1 results arrive by the end of the year.' },
        { kind: 'two', mt: true,
          leftH3: 'What qualifies a pupil for round 2',
          left: [
            'BWINF\'s FAQ says a pupil reaches round 2 by solving at least three tasks largely correctly in round 1, alone or with others. If more than three are handed in, the three strongest count. Junior tasks count too, for those allowed to do them.',
            'The junior tasks are reserved for pupils who have not yet entered the Qualifikationsphase of the Abitur. In 2026 they are also the tasks of the third round of the Jugendwettbewerb Informatik.'
          ],
          rightH3: 'How big the field is',
          right: [
            'BWINF reports 1,790 participants in the 43rd Bundeswettbewerb. That is a small field compared with the hundreds of thousands who sit the Informatik-Biber, which is part of why a well documented round 1 entry gets serious attention.',
            'BWINF\'s FAQ describes round 3 as a colloquium: each finalist talks with an informatics expert from a school and one from a university, and works with others on two problems.'
          ] }
      ]
    },
    {
      id: 'who',
      tint: 'tint',
      eyebrow: 'Eligibility',
      h2: 'Who can enter the Bundeswettbewerb Informatik?',
      lede: 'Young people up to 21 who are not yet at university or in work, and who meet a residence or school rule. Citizenship is one route, not the only one.',
      body: [
        { kind: 'two',
          leftH3: 'The rules for the 45th round',
          left: [
            'BWINF\'s Teilnehmen page sets the cut-offs for this round: participants must be born after 23 November 2004, and must be German citizens, or live in Germany from 1 September to 23 November 2026, or attend a recognised German school abroad.',
            'Excluded are those who had finished an (informatics) training or started work by 1 September 2026, or who study at a university in the winter semester 2026/27 and no longer attend school. A gap year, such as voluntary service, does not exclude anyone.'
          ],
          rightH3: 'What that means for international families',
          right: [
            'A pupil who lives in Germany during round 1 is eligible whatever their passport, on BWINF\'s wording, and whatever kind of school they attend. That includes many teenagers at international schools.',
            'Registration is individual: a pupil signs up at login.bwinf.de and founds a "team", even when working alone. No school coordinator is needed, although many schools do support their entrants.'
          ] },
        { kind: 'p', mt: true, html: 'Rules on residence and age are BWINF\'s, and BWINF decides any doubtful case. We quote them here as published on 3 November 2026; if a pupil\'s situation is unusual, the right step is an email to the Bundeswettbewerb office, not a guess on our part.' }
      ]
    },
    {
      id: 'write-up',
      eyebrow: 'The submission',
      h2: 'What does a Bundeswettbewerb submission need?',
      lede: 'For every task: a PDF explaining the idea and the program, enough worked examples, the key parts of the source code, and the program itself. A good explanation does not need to be long, BWINF says, but it must include every example given on the task sheet.',
      body: [
        { kind: 'ol', items: [
          '<strong>The idea first.</strong> BWINF\'s tips say to separate the solution idea from its implementation. Write what the method is and why it is correct before saying anything about code.',
          '<strong>Then the program.</strong> Explain how the idea became a program and which parts matter. Any programming language is allowed.',
          '<strong>Name every tool.</strong> Libraries, and AI tools, must be listed in their own section with how they were used. Libraries may help but must not be the core of the solution.',
          '<strong>Show enough examples.</strong> Run the program on every example input from the task sheet and print the results in the document.',
          '<strong>Attach the key code.</strong> Only the parts that carry the algorithm, not the user interface.',
          '<strong>Pack it.</strong> One PDF per task and a folder per task with the source, the runnable program and the input and output files, in one ZIP uploaded through login.bwinf.de. In round 1 one ZIP per team; in round 2 one per pupil.'
        ] },
        { kind: 'source', html: 'Source: BWINF, Einsenden page and Bundeswettbewerb FAQ (bwinf.de/bundeswettbewerb/einsenden/ and /haeufige-fragen/), read on 3 November 2026. The numbered order is our summary.' },
        { kind: 'two', mt: true,
          leftH3: 'AI tools: allowed, declared, and absent from the final',
          left: [
            'BWINF allows AI tools such as ChatGPT or Copilot in the first two rounds, provided the pupil understands what they hand in, develops the solution themselves and documents every tool used. It recommends doing the tasks mostly without AI, because the contest is there for learning. In the final there is no AI and no technical aid at all.',
            'Our classes follow the stricter path: pupils under 18 do not use adult-only tools with us, and we train the reasoning a pupil needs when no tool is in the room.'
          ],
          rightH3: 'Silence until the deadline',
          right: [
            'BWINF states that no solution ideas or programs may be published before the deadline, and asks pupils who use Git to keep their repositories private.',
            'So until 23 November 2026 we do not discuss the live round 1 tasks in class at all, and this page names none of them. We teach the methods with our own problems and with past rounds whose deadlines are over.'
          ] }
      ]
    },
    {
      id: 'steps',
      tint: 'tint',
      eyebrow: 'A worked problem, ours',
      h2: 'How do you turn a slow correct idea into a fast one?',
      lede: 'This problem was written by Modern Age Coders for this page; it is not from any BWINF round. It shows the habit that separates a passing Bundeswettbewerb entry from a strong one: count how many steps a method needs, before and after you improve it, and prove both versions give the same answer.',
      body: [
        { kind: 'two',
          leftH3: 'The problem (ours)',
          left: [
            'Pupils stand in one row for a class photo, front to back. A pupil\'s view is blocked by anyone taller who stands in front of them. Count the blocked pairs: pairs where the pupil nearer the front is strictly taller.',
            'Small example: heights 150, 140, 160 and 135 cm. The blocked pairs are 150 before 140, 150 before 135, 140 before 135 and 160 before 135, so the answer is 4.'
          ],
          rightH3: 'Two ideas',
          right: [
            '<strong>Slow but obviously right:</strong> compare every pair. With n pupils that is n(n-1)/2 comparisons, which is 499,500 for a row of 1,000.',
            '<strong>Fast and also right:</strong> sort the row by merging halves, the method called merge sort. Each time a pupil from the back half is placed before pupils still waiting in the front half, every one of those waiting pupils is taller and stands in front, so all of them form blocked pairs and can be counted at once.'
          ] },
        { kind: 'code', label: 'Both methods, with a step counter', lang: 'Python', code: PHOTO, note: 'It prints <code>1000 pupils | blocked pairs 253662 253662 | steps 499500 vs 8711</code>, then <code>2000 pupils | blocked pairs 980650 980650 | steps 1999000 vs 19382</code> and <code>4000 pupils | blocked pairs 3912401 3912401 | steps 7998000 vs 42726</code>.' },
        { kind: 'table', mt: true, numCols: [0, 1, 2, 3], caption: 'Comparisons needed by each method on random rows (our calculation)', head: ['Pupils in the row', 'Blocked pairs', 'Every pair', 'Merge count'], rows: [
          ['1,000', '253,662', '499,500', '8,711'],
          ['2,000', '980,650', '1,999,000', '19,382'],
          ['4,000', '3,912,401', '7,998,000', '42,726']
        ] },
        { kind: 'source', html: 'Heights are random whole numbers from 120 to 190 cm, fixed by random.seed(2026) so that anyone running the code gets the same rows. The counts are our own output, run with Python 3 on 3 November 2026.' },
        { kind: 'p', mt: true, html: 'Both methods agree on every row, which is the first thing a careful entrant checks. Then look at how the work grows. Doubling the row from 2,000 to 4,000 pupils multiplies the every-pair method by four, from 1,999,000 to 7,998,000 comparisons, while the merge method only a little more than doubles, from 19,382 to 42,726. On a row of a million pupils, the first method would need about half a million million comparisons; the second, a few tens of millions. A Bundeswettbewerb write-up that states this growth, shows the measured counts and explains why the faster method is still correct is exactly the kind of documentation BWINF asks for.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Check by hand.</strong> Run both functions on the four heights in the small example and confirm you get 4.',
          '<strong>Find the edge.</strong> What happens when two pupils have the same height? Read the code and say which line decides it.',
          '<strong>Write the idea.</strong> In five sentences, explain why counting len(left) minus i is correct. That paragraph is your Lösungsidee.',
          '<strong>Going further.</strong> Change the problem so that a pupil is blocked only by someone at least 10 cm taller. Which method adapts more easily, and why?'
        ] }
      ]
    },
    {
      id: 'after',
      eyebrow: 'What it leads to',
      h2: 'What can the Bundeswettbewerb Informatik lead to?',
      lede: 'More than a certificate, according to BWINF, though nothing on this list can be promised to anyone in advance.',
      body: [
        { kind: 'table', numCols: [], caption: 'What BWINF says the contest can open up', head: ['Stage', 'What BWINF describes'], rows: [
          ['Round 1', 'Invitations to workshops at universities and companies, such as the HPI Fit-For-BWINF workshop'],
          ['Round 2', 'Can count as the besondere Lernleistung in the Abitur, depending on the Land and the school'],
          ['Round 3', 'National winners are admitted to the Studienstiftung des deutschen Volkes'],
          ['Top of the contest', 'Up to 20 of the strongest are considered for the selection of Germany\'s team at the International Olympiad in Informatics']
        ] },
        { kind: 'source', html: 'Sources: BWINF, Bundeswettbewerb overview and FAQ, and BWINF, Informatik-Olympiade Teilnehmen page, read on 3 November 2026.' },
        { kind: 'p', mt: true, html: 'The Abitur point is worth reading twice: whether round 2 can replace the besondere Lernleistung is decided by the Land and the school, so a pupil should ask the school before relying on it. We teach alongside school and grant no German qualification; the school decides what counts there. Our role is to make the work itself strong: correct, efficient, tested and clearly explained.' }
      ]
    },
    {
      id: 'times',
      tint: 'tint',
      eyebrow: 'Class times',
      h2: 'When do Bundeswettbewerb classes run in German time?',
      lede: 'Teenagers mostly choose the late afternoon or a weekend slot. Our mentors teach from India, where the clock runs ahead of Germany.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example class times in Germany and in India', head: ['Start in Germany', 'India until 27 March 2027', 'India from 28 March 2027'], rows: [
          ['16:15', '20:45', '19:45'],
          ['18:00', '22:30', '21:30'],
          ['Saturday 11:00', '15:30', '14:30'],
          ['Sunday 14:00', '18:30', '17:30']
        ] },
        { kind: 'source', html: 'The Einheitenzeitgesetz puts Germany on UTC+1 in winter and UTC+2 in summer. Summer time ended on 25 October 2026 and resumes on 28 March 2027. India does not change its clocks (UTC+5:30), so the gap is four and a half hours until late March and three and a half after.' },
        { kind: 'p', mt: true, html: 'Rounds 1 and 2 run while school does, so one-to-one pupils often move their lesson nearer a deadline, and back again afterwards. The free first class is booked in your own clock.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'From a first program to a round 2 submission',
    lede: 'Milestones we use for Bundeswettbewerb pupils; they decide where a new pupil starts and give parents a clear picture of progress.',
    table: { caption: 'Bundeswettbewerb milestones (ours)', head: ['Stage', 'Typical time', 'The pupil can'], rows: [
      ['1. Reading input', 'Month 1', 'Read a task\'s example file, store it in lists and dictionaries, and print it back'],
      ['2. Correct and slow', 'Months 2 to 3', 'Solve a problem by trying every case and prove it on all given examples'],
      ['3. Counting steps', 'Months 3 to 5', 'Say how the work grows with the input, and measure it'],
      ['4. Correct and fast', 'Months 5 to 9', 'Use sorting, graphs, greedy methods and dynamic programming where they fit'],
      ['5. A full write-up', 'From month 6', 'Produce the PDF and ZIP for three tasks to the standard BWINF describes']
    ] },
    left: { h3: 'For pupils', ps: [
      'A slow program that is right beats a fast one that is wrong. Get it right, then make it fast.',
      'Write the explanation while you code, not on the last evening. BWINF says writing takes longer than you think.'
    ] },
    right: { h3: 'For parents', ps: [
      'Round 1 allows teamwork, so a classmate or two can share the load and the learning.',
      'Ask your teenager to show you the PDF, not the code. If you can follow the idea, a juror will too.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for informatics teenagers in Germany',
    lede: 'Each one is taught live in English by the same mentor every week, in a group of up to twenty or as private lessons.',
    bands: [
      { num: 'I', h3: 'Contest languages', sub: 'Ages 13 to 18', courses: [
        { code: 'BIN / LANG / 01', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ for teens', blurb: 'The language of the IOI selection, from zero.' },
        { code: 'BIN / LANG / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Objects and types, as many schools teach.' },
        { code: 'BIN / LANG / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Logic and data structures, step by step.' }
      ] },
      { num: 'II', h3: 'School Informatik', sub: 'Oberstufe and IB', courses: [
        { code: 'BIN / SCHOOL / 01', slug: 'informatik-abitur-course-java-python', title: 'Informatik Abitur in English', blurb: 'Java and Python for the Oberstufe.' },
        { code: 'BIN / SCHOOL / 02', slug: 'ib-diploma-computer-science-course', title: 'IB Computer Science', blurb: 'For pupils on the IB Diploma.' },
        { code: 'BIN / SCHOOL / 03', slug: 'igcse-computer-science-0478-course', title: 'IGCSE Computer Science', blurb: 'Cambridge 0478, for international schools.' }
      ] },
      { num: 'III', h3: 'Beyond school', sub: 'Ages 17 and up', courses: [
        { code: 'BIN / NEXT / 01', slug: 'data-structures-algorithms-masterclass-college', title: 'Data structures and algorithms', blurb: 'University-level DSA, in depth.' },
        { code: 'BIN / NEXT / 02', slug: 'competitive-programming-masterclass-college', title: 'Competitive programming', blurb: 'Codeforces to ICPC, for older learners.' },
        { code: 'BIN / NEXT / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'For a later BWKI project.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live Bundeswettbewerb classes work',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Late afternoon', l: 'After school, from about 16:00 German time.' },
      { time: 'Weekend', l: 'Saturday or Sunday, for longer problem sessions.' },
      { time: 'One to one', l: 'Agreed with the mentor, closer to deadlines if needed.' }
    ],
    cells: [
      { h3: 'Our own problems', p: 'Written for teaching, never the live round.' },
      { h3: 'Idea before code', p: 'Every solution is explained in words first.' },
      { h3: 'Steps counted', p: 'Pupils measure how their program grows.' },
      { h3: 'Write-up practice', p: 'PDFs drafted to BWINF\'s structure.' },
      { h3: 'Mock rounds', p: 'A monthly contest under time pressure.' },
      { h3: 'Same mentor', p: 'One person who knows the pupil\'s code.' }
    ]
  },

  projectsH2: 'Projects built by our students',
  projectsLede: 'A small sample of what our teenage students around the world have built; the <a class="ag-inline-link" href="/student-labs">student labs</a> page holds more.',
  reviewsLede: 'Google reviews from our students and their families, shown as they were written.',

  fees: {
    h2: 'Fees for Bundeswettbewerb preparation',
    lede: 'A monthly fee covers eight live classes. The amount is displayed in euro after conversion at the European Central Bank\'s reference rate; the charge is processed in US dollars, and your bank converts it, so the euro sum on your statement may not match to the cent.',
    free: ['A free first class', 'One of our problems at your level', 'No card needed'],
    group: ['Fifteen to twenty teenagers of a similar level', 'One regular mentor', 'Two classes a week', 'Monthly, cancel whenever you like'],
    one: ['One pupil, one mentor', 'Your own pace and problem list', 'Times you agree together']
  },

  faq: {
    eyebrow: 'Pupils and parents ask',
    h2: 'Bundeswettbewerb Informatik preparation: common questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. Every class is live and in English only, with a mentor who adjusts to the pupil\'s pace and accent. The contest itself accepts any programming language, and code is written in English keywords either way.' },
      { q: 'What is the deadline for round 1 in 2026?', a: 'BWINF gives 23 November 2026 as the deadline for round 1 of the 45th Bundeswettbewerb Informatik. Round 2 follows from early 2027 to April 2027, and the final is in September 2027.' },
      { q: 'Can I take part if I am not a German citizen?', a: 'On BWINF\'s rules for the 45th round, yes if you live in Germany from 1 September to 23 November 2026, or attend a recognised German school abroad. You must also be born after 23 November 2004 and not yet studying or working.' },
      { q: 'Will you help with the current round 1 tasks?', a: 'No. BWINF does not allow solution ideas to be published before the deadline, so we do not discuss live tasks until 23 November 2026. We teach the methods with our own problems and with past rounds whose deadlines are over.' },
      { q: 'Which programming language should I use?', a: 'BWINF sets no restriction. Python is quick to write and a sensible choice for round 1; Java and C++ are common too. Pick the language you can explain most clearly.' },
      { q: 'Can I use ChatGPT for the Bundeswettbewerb?', a: 'BWINF allows AI tools in rounds 1 and 2 if you understand and develop the solution yourself and document every tool, and recommends working mostly without them. AI is not possible in the final. OpenAI\'s own terms require a parent\'s permission under 18.' },
      { q: 'Do I need my school to register me?', a: 'No. You register yourself at login.bwinf.de and found a team, even if you work alone. Your school may still support you, and round 1 allows teamwork with classmates.' },
      { q: 'Does the Bundeswettbewerb count for the Abitur?', a: 'BWINF says round 2 can count as the besondere Lernleistung, depending on the Land and the school. Ask your school. We do not award German grades or qualifications.' },
      { q: 'When are classes in German time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Most teenagers choose a late afternoon or a weekend slot.' },
      { q: 'How do I pay?', a: 'The page shows the fee in euro, converted at the European Central Bank\'s reference rate, and the payment goes through in US dollars, which your bank converts. The free first class needs no card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for teenagers in Germany who like hard problems.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Every Germany page in one overview.' },
      { href: '/abitur-maths-in-english', label: 'Abitur maths in English', p: 'The proof habits that algorithm write-ups need.' },
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning in Germany', p: 'Models, baselines and the BWKI.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'School Informatik support, written in German.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our live lessons, explained.' },
      { href: '/student-labs', label: 'Student labs', p: 'Work by our students.' }
    ]
  },

  start: {
    h2: 'Book a free Bundeswettbewerb class',
    lede: 'In the first class the mentor sets one of our problems, watches how you plan and code it, and suggests the right course and starting point, in English and at your pace.',
    readFirst: 'If you would rather read on first, try <a class="ag-inline-link" href="/how-we-teach">how a lesson runs</a> or the <a class="ag-inline-link" href="/courses">full course list</a>.',
    note: 'We teach live online and only in English; the mentors are based in India. WhatsApp in English gets the fastest reply.',
    formNote: 'No card is needed for the free first class.'
  },

  footer: {
    cols: [
      { h4: 'Contests', links: [
        { href: '/courses/german-informatics-competitions-course-biber-bwinf-bwki', label: 'German informatics competitions' },
        { href: '/courses/competitive-programming-for-teens-course', label: 'Competitive programming for teens' },
        { href: '/courses/cpp-programming-masterclass-for-teens', label: 'C++ for teens' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/abitur-maths-in-english', label: 'Abitur maths in English' }
      ] }
    ],
    bottomRight: 'Count the steps before you code'
  },

  personalityCss: `
.ag-root.ag-bin .ag-hero h1 { letter-spacing: -0.02em; }
.ag-root.ag-bin .ag-capsule { border-left-width: 3px; }
.ag-root.ag-bin .ag-section-head h2 { max-width: 26ch; }
.ag-root.ag-bin .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-bin .ag-code-head b { letter-spacing: 0.03em; }
`,

  dossier: {
    curriculumAuthority: 'Bundesweite Informatikwettbewerbe (BWINF): Bundeswettbewerb Informatik overview, FAQ, Teilnehmen, Einsenden and 45th round pages; BWINF Informatik-Olympiade Teilnehmen page; Einheitenzeitgesetz. Read 2 and 3 November 2026.',
    localProject: 'Count the steps: an original class-photo problem (pairs where a taller pupil stands in front) solved by trying every pair and by a merge-sort count, both agreeing, with 499,500 vs 8,711 comparisons for 1,000 pupils and 7,998,000 vs 42,726 for 4,000. Lesson family: count the steps before you code.',
    requiredMentions: ['1000 pupils | blocked pairs 253662 253662 | steps 499500 vs 8711', '4000 pupils | blocked pairs 3912401 3912401 | steps 7998000 vs 42726', 'random.seed(2026)', 'born after 23 November 2004', 'Seven offered: five tasks and two junior tasks', 'we do not discuss the live round 1 tasks in class at all', '1,790 participants in the 43rd Bundeswettbewerb', 'Count the steps before you code'],
    sources: [
      { claim: 'Rounds and dates of the 45th Bundeswettbewerb, teamwork rules, Studienstiftung, besondere Lernleistung, 1,790 participants.', url: 'https://bwinf.de/bundeswettbewerb/' },
      { claim: 'Eligibility cut-offs for the 45th round and round 3 format.', url: 'https://bwinf.de/bundeswettbewerb/teilnehmen/' },
      { claim: 'Task counts, junior task rule, free choice of language, libraries and AI rules.', url: 'https://bwinf.de/bundeswettbewerb/haeufige-fragen/' },
      { claim: 'Documentation contents, ZIP structure, no publishing before the deadline.', url: 'https://bwinf.de/bundeswettbewerb/einsenden/' },
      { claim: 'IOI team chosen from up to 20 of the best.', url: 'https://bwinf.de/olympiade/teilnehmen/' }
    ],
    rejectedClaims: [
      'Born after 17 November 2004 (BWINF FAQ): conflicts with the Teilnehmen page and the 23 November deadline; the Teilnehmen date is used.',
      'Any description of, or hint on, a live 45th round task: withheld until after 23 November 2026, and none given.',
      'That entering or winning leads to Studienstiftung, Abitur credit or IOI selection for any of our pupils: no promise is made.',
      'Any affiliation with BWINF: none.',
      'German-language teaching: we teach in English only.'
    ]
  }
};
