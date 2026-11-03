'use strict';
// IOI 2027 Potsdam guide (ag- competition spoke, Germany cluster row DE048), written 2026-11-03.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD. A guide for families, not a promise: we are not connected with BWINF, the HPI or the IOI,
// and nobody qualifies through us. No contestant is named.
// Spine: test against data you did not choose. IOI solutions are graded automatically against test data, so the lesson is
// a stress test: a brute force, a fast first try with a hidden bug, a random tester that finds it, and a fix that passes.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/ioi-2027-potsdam-guide/ and
// facts-school/src/ioi2027, ioi-teilnehmen, ioi2026news; quoted strings grepped from the raw text, fetched 2 and 3 Nov 2026):
//  - bwinf.de/olympiade/2027/: "Die 39. Internationale Informatik-Olympiade findet vom 12. bis 19. September 2027 am
//    Hasso-Plattner-Institut in Potsdam statt. BWINF richtet sie gemeinsam mit dem HPI aus, zum zweiten Mal nach 1992 ist
//    Deutschland Gastgeber."; "Die Vorauswahl hat am 5. September mit 72 Teilnehmerinnen und Teilnehmern begonnen.";
//    "Das Training findet online statt, jeweils samstags. Rund 15 Coaches"; "Programmiert wird in C++"; "Im November
//    entscheiden zwei Qualifikationscontests"; "Im Rahmen der Lehrgänge werden jeweils zwei Auswahlcontests geschrieben";
//    "Die 33. Baltische Informatik-Olympiade findet vom 14. bis 18. April 2027 im norwegischen Bergen statt."; "Der Ort und
//    Zeitpunkt der CEOI 2027 steht noch nicht fest." (FACTS 153 to 157)
//  - bwinf.de/olympiade/teilnehmen/: "Aus den bis zu 20 Besten des Bundeswettbewerbs Informatik wird nämlich in drei
//    Lehrgängen das Team ermittelt"; "nach dem 2. Lehrgang circa sechs bis sieben Talente"; "das vierköpfige Team";
//    "müssen im letzten Schuljahr, das vor der IOI endet, noch die Schule besucht haben und dürfen am Tag der Eröffnung
//    nicht älter als 20 Jahre sein" (FACTS 151, 152).
//  - bwinf.de/olympiade/haeufige-fragen/: "IOI-Teilnehmer:innen dürfen am 1. Juli des IOI-Jahres das 20. Lebensjahr noch
//    nicht vollendet haben"; "Mitglieder des IOI-Teams können alle Schülerinnen und Schüler werden, die eine Schule in
//    Deutschland besuchen. In diesem Fall ist die Nationalität unerheblich."; "Ist die Teilnahme am Bundeswettbewerb eine
//    Voraussetzung ...? Ja." (The two BWINF pages word the age rule differently; the page quotes both and sends families to
//    BWINF.)
//  - bwinf.de/aktuelles/detail/alle-vier-deutschen-teilnehmer-mit-medaille-bei-der-ioi-2026/: "Zweimal Silber und zweimal
//    Bronze bei der 38. Internationalen Informatik-Olympiade in Taschkent"; "Angetreten waren 375 Schülerinnen und Schüler
//    aus 92 Ländern"; "An zwei Wettkampftagen lösen die Teilnehmenden in jeweils fünf Stunden drei algorithmische Probleme
//    ... automatisch gegen Testdaten geprüft"; "Zuletzt fand die IOI 1992 in Deutschland statt, damals in Bonn. Erwartet
//    werden rund 400 Teilnehmende und bis zu 1.000 Beteiligte aus 90 bis 100 Ländern."; "Der 45. Bundeswettbewerb
//    Informatik beginnt am 1. September 2026 und ist der Einstieg ins Auswahlverfahren für die IOI 2028 in Japan."; "Das
//    deutsche Auswahlverfahren zur Internationalen Informatik-Olympiade wird seit 1989 von BWINF durchgeführt." (FACTS 158
//    to 161)
//  - ioinformatics.org/page/getting-started/14: "Participation in IOI is not directly open to individuals. Each
//    participating country sends a team of four students"; "The most commonly used programming language by competitors is
//    C++."
//  - ioinformatics.org/files/regulations24.pdf (text extracted with a stdlib parser): "Discounting ties in scores, half of
//    the Contestants are to receive medals on the basis that: One twelfth of all Contestants receive a gold medal; One sixth
//    of all Contestants receive a silver medal; One quarter of all Contestants receive a bronze medal".
//  - ioi2027.de: "Welcome at the Hasso Plattner Institute (HPI) in Potsdam, Germany, your host institution".
// Our own calculations: medal counts if exactly 400 compete, 400/12 = 33.3, 400/6 = 66.7, 400/4 = 100 (python3 -I);
// stress test ioi1.py (scratchpad de/w/G8, random.seed(2027)), output pasted exactly:
//   first try: test 6 fails on [4, 4, 2, 4]: got 1, expected 2
//   fixed: all 1000 tests agree
// Lesson family: stress testing, a fast solution checked against a brute force on random data.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const STRESS = [
  'import random',
  '',
  'def brute(a):',
  '    longest = 0',
  '    for i in range(len(a)):',
  '        for j in range(i, len(a)):',
  '            if all(a[k] < a[k + 1] for k in range(i, j)):',
  '                longest = max(longest, j - i + 1)',
  '    return longest',
  '',
  'def fast_first_try(a):',
  '    longest, run = 1, 1',
  '    for i in range(1, len(a)):',
  '        if a[i] > a[i - 1]:',
  '            run += 1',
  '        else:',
  '            longest = max(longest, run)',
  '            run = 1',
  '    return longest',
  '',
  'def fast(a):',
  '    longest, run = 1, 1',
  '    for i in range(1, len(a)):',
  '        run = run + 1 if a[i] > a[i - 1] else 1',
  '        longest = max(longest, run)',
  '    return longest',
  '',
  'def stress(candidate, tests=1000):',
  '    random.seed(2027)',
  '    for t in range(tests):',
  '        a = [random.randint(1, 5) for _ in range(random.randint(1, 6))]',
  '        if candidate(a) != brute(a):',
  '            return "test " + str(t) + " fails on " + str(a) + ": got " + str(candidate(a)) + ", expected " + str(brute(a))',
  '    return "all " + str(tests) + " tests agree"',
  '',
  'print("first try:", stress(fast_first_try))',
  'print("fixed:", stress(fast))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'competition', label: 'IOI 2027 in Potsdam' },
  slug: 'ioi-2027-potsdam-guide',
  code: 'ipg',
  accent: '#754A79',
  accentRationale: 'IOI 2027 Potsdam guide: a muted violet #754A79, ceremonial without gold, clear of the Biber mulberry and the AI plum; contrast 5.66 on the paper #FBF8F2 and above 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'IOI 2027 in Potsdam: a guide for families',
  title: 'IOI 2027 in Potsdam: A Guide for Families in Germany',
  description: 'The IOI 2027 in Potsdam explained for families: dates, format, how BWINF picks Germany\'s four, age and school rules, and what a pupil can still do in 2026 and 2027.',
  ogDescription: 'The 39th International Olympiad in Informatics comes to the Hasso-Plattner-Institut in Potsdam from 12 to 19 September 2027. What it is, how the German team of four is selected, who is eligible, and an honest plan for pupils who are years away from it.',
  twitterDescription: 'IOI 2027 in Potsdam: what it is, how Germany\'s team is chosen, and an honest plan for families, in English.',
  pageName: 'IOI 2027 in Potsdam: A Guide for Families',
  webPageDescription: 'A plain-English guide for families in Germany to the International Olympiad in Informatics 2027 in Potsdam: dates and format from BWINF and the IOI, how the four-person German team is chosen through the Bundeswettbewerb Informatik, age and school rules, medal rules, and an original lesson on testing solutions the way the IOI grader does.',
  courseDescription: 'Live online algorithm and C++ classes in English for teenagers in Germany who want to work towards olympiad-level informatics: data structures, algorithm design and automatic testing, in a group of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'IOI 2027 Potsdam',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#olympiad', label: 'IOI' },
    { href: '#selection', label: 'Selection' },
    { href: '#rules', label: 'Ages' },
    { href: '#testing', label: 'Testing' },
    { href: '#plan', label: 'A plan' }
  ],
  eyebrow: 'Germany &middot; International Olympiad in Informatics &middot; Potsdam 2027',
  h1: 'IOI 2027 in Potsdam: a guide for families',
  lede: 'In September 2027 the International Olympiad in Informatics comes to Germany for the first time since 1992. About 400 contestants from up to 100 countries will spend two days solving algorithm problems at the Hasso-Plattner-Institut in Potsdam. This page explains what the olympiad is, how BWINF chooses the four pupils who represent Germany, who is eligible, and what a family with a strong young programmer can sensibly do now. It is a guide, not a route in: no course, ours included, can place anyone on the team.',
  secondaryCta: { href: '#selection', label: 'See how the team is chosen' },
  wa: 'Hello Modern Age Coders, my teenager in Germany is interested in olympiad informatics and the IOI. Could we book a free first class in English?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; algorithms tested the way a grader tests them',
  spec: [
    ['Dates', '12 to 19 September 2027'],
    ['Venue', 'Hasso-Plattner-Institut, Potsdam'],
    ['German team', 'Four pupils, chosen by BWINF'],
    ['Way in', 'The Bundeswettbewerb Informatik'],
    ['Our part', 'Algorithm and C++ classes, live'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'The IOI 2027 is the 39th International Olympiad in Informatics, held from 12 to 19 September 2027 at the Hasso-Plattner-Institut in Potsdam. Germany sends four pupils chosen by BWINF from the strongest entrants of the Bundeswettbewerb Informatik. Modern Age Coders is not part of that selection; we teach algorithms and C++ live online in English, to groups of fifteen to twenty or to a single pupil, at each teenager\'s pace and accent.',

  picks: {
    eyebrow: 'Where olympiad-minded teenagers start',
    h2: 'Three courses on the long road towards the IOI',
    lede: 'The language the German selection trains in, the contest methods behind every olympiad problem, and the German contests that open the door.',
    items: [
      { course: 'cpp-programming-masterclass-for-teens', code: 'IPG / 01', title: 'C++ for Teens', note: 'Ages 13 to 18, from zero. BWINF\'s pre-selection trains in C++, and the IOI names C++ as the language most contestants use.' },
      { course: 'competitive-programming-for-teens-course', code: 'IPG / 02', title: 'Competitive Programming for Teens', note: 'For teenagers who can already write simple programs. Graphs, dynamic programming and greedy methods, with stress tests like the one on this page.' },
      { course: 'german-informatics-competitions-course-biber-bwinf-bwki', code: 'IPG / 03', title: 'German Informatics Competitions', note: 'Ages 9 to 19. The Jugendwettbewerb and the Bundeswettbewerb Informatik, the contests through which the German team is chosen.' }
    ]
  },

  sections: [
    {
      id: 'olympiad',
      eyebrow: 'The olympiad',
      h2: 'What is the IOI 2027, and when and where does it happen?',
      lede: 'The yearly world championship of school informatics, in BWINF\'s words. In 2027 it is hosted by the Hasso-Plattner-Institut together with BWINF.',
      body: [
        { kind: 'table', numCols: [], caption: 'The IOI 2027 at a glance', head: ['Question', 'Answer', 'Source'], rows: [
          ['Which edition?', 'The 39th International Olympiad in Informatics', 'BWINF'],
          ['When?', '12 to 19 September 2027', 'BWINF'],
          ['Where?', 'Hasso-Plattner-Institut, Potsdam', 'BWINF and ioi2027.de'],
          ['Hosted by', 'The HPI together with BWINF', 'BWINF'],
          ['Germany as host before?', 'Once, in 1992, in Bonn', 'BWINF'],
          ['How many expected?', 'About 400 contestants and up to 1,000 people in all, from 90 to 100 countries', 'BWINF, 2026'],
          ['Team size', 'Four pupils per country', 'IOI and BWINF']
        ] },
        { kind: 'source', html: 'Sources: BWINF, Informatik-Olympiaden 2027 page and BWINF news of the IOI 2026 results; ioi2027.de; ioinformatics.org, Getting Started. All read on 2 and 3 November 2026.' },
        { kind: 'two', mt: true,
          leftH3: 'What contestants actually do',
          left: [
            'BWINF describes the format: on two contest days, contestants spend five hours each solving three algorithmic problems at university level, and their programs are checked automatically against test data.',
            'Nobody marks an essay. A solution scores only if it produces correct output, fast enough, on data the contestant never sees.'
          ],
          rightH3: 'How medals work',
          right: [
            'The IOI regulations say that, ties aside, half of all contestants receive a medal: one twelfth gold, one sixth silver and one quarter bronze.',
            'If exactly 400 compete, that is about 33 gold, 67 silver and 100 bronze medals (our arithmetic). At IOI 2026 in Tashkent, 375 pupils from 92 countries took part and all four German team members won a medal, two silver and two bronze, BWINF reports.'
          ] },
        { kind: 'p', mt: true, html: 'The IOI\'s own site is direct about entry: participation is not open to individuals, and each country sends a team of four chosen through a national competition. In Germany that competition is the Bundeswettbewerb Informatik, and BWINF has run the German selection since 1989.' }
      ]
    },
    {
      id: 'selection',
      tint: 'tint',
      eyebrow: 'Team selection',
      h2: 'How is the German IOI team chosen?',
      lede: 'Over about a year, in stages, starting from the Bundeswettbewerb Informatik. BWINF\'s pages describe each step.',
      body: [
        { kind: 'ol', items: [
          '<strong>The Bundeswettbewerb Informatik.</strong> Entering it is a requirement, BWINF\'s FAQ says. Finalists and other very strong round 2 entrants are invited to the IOI selection if they meet the IOI\'s rules.',
          '<strong>Online pre-selection.</strong> For the 2027 team it began on 5 September 2026 with 72 participants, invited from the 44th Bundeswettbewerb. Training runs online on Saturdays, with about 15 coaches, all former participants, each pupil with a personal coach. The language is C++.',
          '<strong>Two qualification contests in November.</strong> They decide who is invited to the in-person selection.',
          '<strong>Selection camps.</strong> BWINF\'s pages describe three Lehrgänge, each with two selection contests, together with talks on algorithms and problem-solving strategies. After the second camp about six or seven pupils go on to the third.',
          '<strong>The team of four.</strong> Places in the selection contests decide the teams for the Baltic, Central European and International olympiads.'
        ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Which Bundeswettbewerb feeds which IOI', head: ['Bundeswettbewerb Informatik', 'Selection', 'IOI'], rows: [
          ['44th (2025 to 2026)', 'Pre-selection from 5 September 2026', 'IOI 2027, Potsdam, 12 to 19 September 2027'],
          ['45th (from 1 September 2026)', 'From the second half of 2027', 'IOI 2028, Japan']
        ] },
        { kind: 'source', html: 'Sources: BWINF, Informatik-Olympiaden 2027, Teilnehmen and FAQ pages, and BWINF news of 2026, which names the 45th Bundeswettbewerb as the way into the selection for the IOI 2028 in Japan. Read on 3 November 2026. The second row\'s timing is our reading of the yearly pattern.' },
        { kind: 'p', mt: true, html: 'The table carries the most important fact on this page for families. The selection for Potsdam is already under way, among pupils who did well in the 44th Bundeswettbewerb. A teenager who starts serious preparation today is preparing for the 45th Bundeswettbewerb, whose first round closes on 23 November 2026, and through it for later olympiads. The same selection contests also decide Germany\'s teams for the Baltic and Central European olympiads; BWINF lists the 33rd Baltic Olympiad in Informatics for 14 to 18 April 2027 in Bergen, Norway.' }
      ]
    },
    {
      id: 'rules',
      eyebrow: 'Eligibility',
      h2: 'Who is eligible for Germany\'s IOI team: age, school and nationality?',
      lede: 'BWINF states three conditions. One of them, the age limit, is worded differently on two of its pages, so check with BWINF for a borderline birthday.',
      body: [
        { kind: 'two',
          leftH3: 'School and nationality',
          left: [
            'A pupil must still have been at school in the last school year that ends before the IOI, BWINF\'s Teilnehmen page says.',
            'Nationality does not matter for pupils at a school in Germany: BWINF\'s FAQ says every pupil attending a school in Germany can become a team member. Only pupils at school abroad need German citizenship or a recognised German school abroad.'
          ],
          rightH3: 'Age, in BWINF\'s two wordings',
          right: [
            'BWINF\'s FAQ says IOI contestants must not have reached their 20th birthday on 1 July of the IOI year. Its Teilnehmen page says they may not be older than 20 on the opening day.',
            'For most pupils both give the same answer. For a birthday close to the limit, ask BWINF before planning; we do not interpret the rule for anyone.'
          ] },
        { kind: 'p', mt: true, html: 'BWINF adds that many Bundeswettbewerb finalists are too old for the IOI by the time the olympiad comes round, because the team competes in the year after the Bundeswettbewerb final. In practice that rewards an early start: the pupils who reach the selection usually first met contest problems several years before.' }
      ]
    },
    {
      id: 'testing',
      tint: 'tint',
      eyebrow: 'A lesson of our own',
      h2: 'How are IOI solutions judged, and how can a pupil test like the grader?',
      lede: 'IOI programs are run against hidden test data, so a solution that looks right can still fail. The habit that protects against this is the stress test. The problem and code below are our own, written for this page.',
      body: [
        { kind: 'two',
          leftH3: 'The problem (ours)',
          left: [
            'A tram records the number of passengers at each stop. Find the length of the longest stretch of stops where the count rises at every stop. For 3, 5, 7, 2, 8 the answer is 3: the stops with 3, 5 and 7.',
            'A brute force checks every stretch, which is slow but almost impossible to get wrong. A fast solution walks once along the list and keeps the current run.'
          ],
          rightH3: 'The stress test',
          right: [
            'Write the brute force and the fast version, then generate a thousand small random lists and compare the answers. The first list where they disagree is a gift: a tiny, concrete case that shows the bug.',
            'Small lists matter. Six numbers from 1 to 5 are enough to reach the corner cases, and short enough to check by hand.'
          ] },
        { kind: 'code', label: 'A brute force, a first try, a fix and a stress test', lang: 'Python', code: STRESS, note: 'It prints <code>first try: test 6 fails on [4, 4, 2, 4]: got 1, expected 2</code> and then <code>fixed: all 1000 tests agree</code>.' },
        { kind: 'p', mt: true, html: 'The first try looks reasonable and passes the example 3, 5, 7, 2, 8. Its bug only shows when the longest run is at the very end of the list: it updates the longest run found so far only when a run breaks, so a run that is still going when the list ends is never counted. On [4, 4, 2, 4] the final run 2, 4 has length 2, and the first try answers 1. The fix updates that record at every step. The random tester found the bug on its seventh list, in a fraction of a second; a grader with hidden data would have found it too, and taken the points.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Reproduce it.</strong> Run the code. Then trace fast_first_try on [4, 4, 2, 4] by hand and find the moment it goes wrong.',
          '<strong>Break it again.</strong> Change the fixed version so the run continues when two counts are equal. Does the stress test catch your new bug, and on which list?',
          '<strong>Port it.</strong> Write the brute force and the fixed solution in C++, the language of BWINF\'s pre-selection, and compare them with the same random lists.',
          '<strong>Going further.</strong> Change the generator to produce lists of length 1. Which of the three functions has a problem with an empty list, and should the task allow one?'
        ] }
      ]
    },
    {
      id: 'plan',
      eyebrow: 'For families',
      h2: 'What can a family in Germany sensibly do in 2026 and 2027?',
      lede: 'Treat the IOI as a horizon, not a target. The contests on the way are worth doing for their own sake, and the skills carry into school Informatik, university and work.',
      body: [
        { kind: 'table', numCols: [], caption: 'A realistic sequence of contests (our suggestion, with BWINF\'s dates)', head: ['When', 'What a pupil can do', 'Dates as BWINF lists them'], rows: [
          ['Now', 'Enter round 1 of the 45th Bundeswettbewerb Informatik, alone or in a team', 'Until 23 November 2026'],
          ['Early 2027', 'If qualified, round 2 of the 45th Bundeswettbewerb, alone', 'Early 2027 to April 2027'],
          ['February to April 2027', 'Younger pupils: Jugendwettbewerb Informatik rounds 1 and 2', '22 February to 7 March and 12 to 25 April 2027'],
          ['September 2027', 'Watch the IOI in Potsdam, and start the 46th Bundeswettbewerb', 'IOI 12 to 19 September 2027']
        ] },
        { kind: 'source', html: 'Dates: BWINF, Bundeswettbewerb and Jugendwettbewerb 2027 pages and Informatik-Olympiaden 2027 page, read on 3 November 2026. The sequence is our own suggestion.' },
        { kind: 'two', mt: true,
          leftH3: 'What we teach',
          left: [
            'C++ and Python, the core data structures, algorithm design, and the testing habit above. Pupils solve problems we write and past problems after their deadlines, and explain every solution aloud in English.',
            'We do not teach the live tasks of any running round, and we never write or submit work for a contest on anyone\'s behalf.'
          ],
          rightH3: 'What we never claim',
          right: [
            'We are not connected with BWINF, the HPI or the IOI, and we have no role in choosing the German team. No pupil reaches the selection, a camp or a medal because of us; they get there through their own results in BWINF\'s contests.',
            'What we can promise is narrower and real: patient teaching of hard material, at the pupil\'s pace.'
          ] }
      ]
    },
    {
      id: 'times',
      tint: 'tint',
      eyebrow: 'Class times',
      h2: 'When do algorithm classes run in German time?',
      lede: 'Mostly on weekday evenings and at weekends, when a teenager has two clear hours. Our mentors teach from India.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example times in Germany and the same moment in India', head: ['Germany', 'India now (until 27 March 2027)', 'India in summer (from 28 March 2027)'], rows: [
          ['17:45', '22:15', '21:15'],
          ['Saturday 13:30', '18:00', '17:00'],
          ['Sunday 15:00', '19:30', '18:30'],
          ['Sunday 09:15', '13:45', '12:45']
        ] },
        { kind: 'source', html: 'Germany\'s time is set by the Einheitenzeitgesetz: UTC+1 in winter, UTC+2 in summer. Clocks went back on 25 October 2026 and go forward on 28 March 2027. India uses UTC+5:30 throughout, which puts it 4 hours 30 minutes ahead in winter and 3 hours 30 minutes in summer.' },
        { kind: 'p', mt: true, html: 'Group classes keep the slot their members agreed; one-to-one pupils often add a session before a contest deadline. Choose the trial lesson in whatever clock you live by.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'From a first algorithm to olympiad-level problems',
    lede: 'Milestones we use for teenagers who want to go far in informatics contests; they set a starting point and make progress visible to parents.',
    table: { caption: 'Olympiad informatics milestones (ours)', head: ['Stage', 'Typical time', 'The pupil can'], rows: [
      ['1. A contest language', 'Months 1 to 4', 'Write clean C++ or Python, read input and print exact output'],
      ['2. Core structures', 'Months 4 to 9', 'Use arrays, maps, stacks, queues and sorting with confidence'],
      ['3. Testing', 'From month 6', 'Write a brute force and a stress test for every fast solution'],
      ['4. Algorithm design', 'Year 2', 'Apply graphs, greedy methods, binary search and dynamic programming'],
      ['5. Contest level', 'Year 2 and up', 'Solve Bundeswettbewerb round 2 problems from past years, written up fully']
    ] },
    left: { h3: 'For pupils', ps: [
      'Every fast solution deserves a slow twin. Compare them before you trust either.',
      'Read last year\'s Bundeswettbewerb tasks after their deadline and solve them properly. No map of the road is more useful.'
    ] },
    right: { h3: 'For parents', ps: [
      'The IOI team is four pupils from all of Germany. Value every step on the way, not only the last one.',
      'Encourage the contests with teams, like round 1 of the Bundeswettbewerb. Solving problems with friends keeps the interest alive.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for serious young programmers',
    lede: 'Taught live, in English, by a mentor who stays with the pupil; each can be booked in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Algorithms', sub: 'Ages 13 and up', courses: [
        { code: 'IPG / ALGO / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Logic, data structures and algorithms.' },
        { code: 'IPG / ALGO / 02', slug: 'data-structures-algorithms-masterclass-college', title: 'Data structures and algorithms', blurb: 'University-level depth for older pupils.' },
        { code: 'IPG / ALGO / 03', slug: 'competitive-programming-masterclass-college', title: 'Competitive programming', blurb: 'Codeforces to ICPC, ages 17 and up.' }
      ] },
      { num: 'II', h3: 'The maths underneath', sub: 'Ages 12 and up', courses: [
        { code: 'IPG / MATHS / 01', slug: 'olympiad-competition-mathematics-mastery', title: 'Maths olympiad', blurb: 'Combinatorics and number theory for contests.' },
        { code: 'IPG / MATHS / 02', slug: 'mathematik-olympiade-and-kaenguru-training-course', title: 'Mathematik-Olympiade', blurb: 'The German maths contests, by Klassenstufe.' },
        { code: 'IPG / MATHS / 03', slug: 'complete-high-school-mathematics-mastery', title: 'High school maths', blurb: 'Algebra to calculus, in English.' }
      ] },
      { num: 'III', h3: 'School computing', sub: 'Oberstufe and IB', courses: [
        { code: 'IPG / SCHOOL / 01', slug: 'informatik-abitur-course-java-python', title: 'Informatik Abitur in English', blurb: 'Oberstufe Informatik, taught in English.' },
        { code: 'IPG / SCHOOL / 02', slug: 'ib-diploma-computer-science-course', title: 'IB Computer Science', blurb: 'The IB Diploma subject, internal assessment included.' },
        { code: 'IPG / SCHOOL / 03', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'A second contest language.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live algorithm classes work for teenagers in Germany',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekday evening', l: 'Early evening German time, after homework.' },
      { time: 'Weekend', l: 'Longer problem sessions on Saturday or Sunday.' },
      { time: 'One to one', l: 'Set with the mentor around contests and school.' }
    ],
    cells: [
      { h3: 'C++ and Python', p: 'Both contest languages, taught properly.' },
      { h3: 'Stress tests', p: 'Every fast solution checked against a slow one.' },
      { h3: 'Past rounds', p: 'Old problems after their deadlines only.' },
      { h3: 'Explained aloud', p: 'Solutions defended in English, step by step.' },
      { h3: 'Honest pace', p: 'Hard material, at the pupil\'s speed.' },
      { h3: 'One mentor', p: 'The same teacher across the year.' }
    ]
  },

  projectsH2: 'Projects built by our students',
  projectsLede: 'A glimpse of work by our teenage students around the world; the <a class="ag-inline-link" href="/student-labs">student labs</a> collect more of it.',
  reviewsLede: 'Our students\' and parents\' Google reviews, reproduced unchanged.',

  fees: {
    h2: 'Fees for algorithm classes',
    lede: 'Each monthly fee pays for eight live classes. You see it in euro, calculated with the European Central Bank reference rate, while the charge runs in US dollars; your bank makes the conversion, so the final euro figure can move slightly.',
    free: ['A free first class', 'One problem of ours at your level', 'No card needed'],
    group: ['Fifteen to twenty teenagers of a similar level', 'One regular mentor', 'Two classes a week', 'Monthly, end it any time'],
    one: ['One pupil, one mentor', 'A problem list built for you', 'Times agreed together']
  },

  faq: {
    eyebrow: 'Families in Germany ask',
    h2: 'IOI 2027 in Potsdam: common questions',
    items: [
      { q: 'When and where is the IOI 2027?', a: 'BWINF says the 39th International Olympiad in Informatics takes place from 12 to 19 September 2027 at the Hasso-Plattner-Institut in Potsdam, hosted by the HPI together with BWINF. Germany last hosted in 1992, in Bonn.' },
      { q: 'Can my child still get into the German team for Potsdam?', a: 'Only through BWINF\'s selection, which for 2027 began on 5 September 2026 with pupils invited from the 44th Bundeswettbewerb Informatik. A pupil starting now would aim at the 45th Bundeswettbewerb, which BWINF names as the entry to the selection for the IOI 2028 in Japan.' },
      { q: 'Does my child need German citizenship?', a: 'Not if they attend a school in Germany: BWINF\'s FAQ says nationality is then irrelevant. Pupils at school abroad need German citizenship or a recognised German school abroad.' },
      { q: 'How old can an IOI contestant be?', a: 'BWINF\'s FAQ says contestants must not have turned 20 by 1 July of the IOI year; another BWINF page says not older than 20 on opening day. For a birthday near the limit, ask BWINF directly.' },
      { q: 'Can you get my child into the IOI selection?', a: 'No. We are not connected with BWINF, the HPI or the IOI and have no part in the selection. The IOI says participation is not open to individuals; teams are chosen through national competitions. We teach the skills, and pupils enter the contests themselves.' },
      { q: 'Which programming language should my teenager learn?', a: 'C++. BWINF\'s pre-selection trains in C++, and the IOI names it as the most common language among contestants. Python is a good first language and fine for the Bundeswettbewerb.' },
      { q: 'Are the classes in German?', a: 'No. We teach live and in English only, and the mentor adapts to the pupil\'s pace and accent. Olympiad problems and code are international, and English is their common language.' },
      { q: 'When are classes in German time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Teenagers usually choose an early evening or a weekend slot.' },
      { q: 'How are fees charged?', a: 'We show fees in euro using the European Central Bank\'s reference rate and charge them in US dollars, so your bank does the conversion and its euro amount may differ a little. The first class is free.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Further reading for families with an ambitious young programmer.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Our overview for every learner in Germany.' },
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning in Germany', p: 'Machine learning, and Germany\'s AI contest for pupils.' },
      { href: '/abitur-maths-in-english', label: 'Abitur maths in English', p: 'Proof and rigour, the other half of olympiad work.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'German-language help with school Informatik.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'How a live class with us runs.' },
      { href: '/student-labs', label: 'Student labs', p: 'What our students have built.' }
    ]
  },

  start: {
    h2: 'Book a free algorithm class',
    lede: 'In the first class the mentor sets a problem of ours, watches how you approach and test it, and suggests where to start, in English and at your pace. It is a lesson, not a selection test.',
    readFirst: 'For more background, read <a class="ag-inline-link" href="/how-we-teach">how we run lessons</a> or scan <a class="ag-inline-link" href="/courses">the course catalogue</a>.',
    note: 'Classes are live and online, in English, with mentors who teach from India. WhatsApp us in English for the quickest reply.',
    formNote: 'No card is asked for the free first class.'
  },

  footer: {
    cols: [
      { h4: 'Contests', links: [
        { href: '/courses/cpp-programming-masterclass-for-teens', label: 'C++ for teens' },
        { href: '/courses/competitive-programming-for-teens-course', label: 'Competitive programming for teens' },
        { href: '/courses/german-informatics-competitions-course-biber-bwinf-bwki', label: 'German informatics competitions' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning' },
        { href: '/abitur-maths-in-english', label: 'Abitur maths in English' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' }
      ] }
    ],
    bottomRight: 'Every fast solution needs a slow twin'
  },

  personalityCss: `
.ag-root.ag-ipg .ag-hero h1 { letter-spacing: -0.018em; }
.ag-root.ag-ipg .ag-capsule { border-left-width: 4px; }
.ag-root.ag-ipg .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-ipg .ag-table td:first-child { font-weight: 600; }
.ag-root.ag-ipg .ag-code-head b { letter-spacing: 0.025em; }
`,

  dossier: {
    curriculumAuthority: 'Bundesweite Informatikwettbewerbe (BWINF): Informatik-Olympiaden 2027, Teilnehmen and FAQ pages and the IOI 2026 news; ioinformatics.org (Getting Started, Regulations 2024); ioi2027.de; Einheitenzeitgesetz. Read 2 and 3 November 2026.',
    localProject: 'Test like the grader: an original tram-stop problem (longest rising stretch) with a brute force, a fast first try whose bug only shows when the longest run ends the list, a seeded random stress test that finds it on [4, 4, 2, 4], and a fix that passes 1,000 tests; plus our medal arithmetic for 400 contestants. Lesson family: stress testing against a brute force.',
    requiredMentions: ['first try: test 6 fails on [4, 4, 2, 4]: got 1, expected 2', 'fixed: all 1000 tests agree', '12 to 19 September 2027', 'began on 5 September 2026 with 72 participants', 'about 33 gold, 67 silver and 100 bronze medals', 'participation is not open to individuals', 'nationality is then irrelevant', 'Every fast solution needs a slow twin'],
    sources: [
      { claim: 'IOI 2027 dates, venue, hosts; pre-selection from 5 September 2026 with 72; C++; BOI 2027 in Bergen.', url: 'https://bwinf.de/olympiade/2027/' },
      { claim: 'Team chosen from up to 20 of the strongest in three camps; school and age conditions.', url: 'https://bwinf.de/olympiade/teilnehmen/' },
      { claim: 'Age rule on 1 July; nationality irrelevant for pupils at school in Germany; Bundeswettbewerb required.', url: 'https://bwinf.de/olympiade/haeufige-fragen/' },
      { claim: 'Format, 400 expected, 1992 in Bonn, 45th Bundeswettbewerb leads to IOI 2028 Japan, selection since 1989.', url: 'https://bwinf.de/aktuelles/detail/alle-vier-deutschen-teilnehmer-mit-medaille-bei-der-ioi-2026/' },
      { claim: 'Not open to individuals; teams of four; C++ most common; medal shares.', url: 'https://ioinformatics.org/page/getting-started/14' }
    ],
    rejectedClaims: [
      'Any promise or suggestion that a pupil can qualify through us: none.',
      'Names of German team members from BWINF\'s news: not reproduced; private individuals.',
      'A single age rule: BWINF words it two ways (20th birthday by 1 July; not older than 20 at the opening); both are quoted and families are sent to BWINF.',
      'IOI subtask scoring details: not verified in the raw regulations text extracted; not stated.',
      'Any affiliation with BWINF, the HPI or the IOI: none.'
    ]
  }
};
