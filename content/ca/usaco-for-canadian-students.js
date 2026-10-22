'use strict';
// USACO for Canadian students (ag- contest door; Canada cluster Plan 2, row 56).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Sources, read raw on 22 October 2026 with curl (no 403; copies in keyword-research-2026-09/ca/
// src-pilots/usaco-for-canadian-students/):
//  - usaco.org home (usaco-home.txt): mission "supports computing education in the USA and worldwide by
//    identifying, motivating, and training high-school computing students at all levels"; "Hundreds of hours of free
//    on-line training resources and historical contest problems (complete with solutions)"; "On-line programming
//    contests (four per year) for students at all levels."; 2025-2026 recap: "three on-line contests in early 2026
//    followed by a proctored invitational "US Open" championship contest", "Top USA competitors from the online
//    contests" invited; sidebar "2025-2026 Schedule" (Jan 9-12, Jan 30-Feb 2, Feb 20-23, Mar 28 US Open (Proctored));
//    no 2026-2027 schedule shown on 22 October 2026. Names on the page are not reproduced.
//  - usaco.org/index.php?page=details (usaco-details.txt): "usually four total, from December through early spring,
//    one per month"; "four continuous hours in length for a normal contest, and five for the US Open"; Friday-to-Monday
//    window, "your timer starts when you log into the contest and download the problems"; "Participation is free and
//    open to all."; "Pre-college / USA students are typically ranked separately from "observers" (all others
//    participating)."; "There is no pre-registration required to compete; all you need is an account on this site.";
//    the four division descriptions; "All participants start in the bronze division"; in-contest promotion on a perfect
//    score; certified results for platinum and gold, problems released "12:00pm (noon) eastern time (ET)" Saturday,
//    start "between 12:00pm and 12:15pm ET"; "A certified result is required for promotion from gold to platinum";
//    finalists "approximately two dozen"; "You must either be a US citizen or a resident of the USA during the first
//    half of the school year."
//  - usaco.org/index.php?page=instructions (usaco-instructions.txt): "All are welcome to participate in online USACO
//    contests and training."; "Only pre-college students in the USA are eligible for selection as finalists to attend
//    the USACO training camp"; "There is never any fee for participation."; "typically 3 or 4 problems"; languages "C,
//    C++, Java, or Python"; "C++ is the only language supported at IOI"; "2 seconds per input case for C and C++, and 4
//    seconds per input case for Java and Python"; "about 256MB"; "Use of generative AI (e.g., services like copilot or
//    ChatGPT) is prohibited."; "all bronze-level problems are also fully-solvable in Python"; "The official language
//    of the contest is English".
//  - usaco.org/index.php?page=training and page=resources: legacy training pages and the USACO Guide; historical
//    problems "Solutions are available, as is the ability (if logged in) to submit your own solutions"; resources page
//    names Canada among national contests that "allow anyone to participate in their contests for practice". Names of
//    people and companies on those pages are not reproduced. Gender-scoped teams and camps are deliberately left out.
//  - CEMC CCC page (src/cemc/ccc.txt) for the CCC side of the comparison; facts-geo.md section 3 (tzdb 2026e).
// Our own material, labelled on the page: the CCC vs USACO comparison layout; the noon ET conversion table for
// Canadian zones (winter: BC 10:00, AB and SK 11:00, MB and ON/QC 12:00, AT 1:00 p.m., NL 1:30 p.m.; from 14 March
// 2027: BC 9:00, AB and SK 10:00, MB 11:00, ON/QC 12:00, AT 1:00 p.m., NL 1:30 p.m.); the season plan; the original
// problem Ferry Queue with a Python solution and a brute force, run on the sample (40) and stress-tested on 500
// random cases with 0 failures under CPython 3.13 on 22 October 2026 (Python 3.8 syntax), plus the large case
// output 1000000005.
// Lesson family: simulation done efficiently (skip what does not change).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const FERRY = "# Our Bronze-style practice problem: Ferry Queue (not a USACO problem)\nimport sys\n\ndef main():\n    data = sys.stdin.read().split()\n    n, cap, gap = int(data[0]), int(data[1]), int(data[2])\n    arrive = [int(x) for x in data[3:3 + n]]   # already in order\n    i = 0\n    depart = 0\n    while i < n:\n        # next sailing: the one after the last, or the first one\n        # at or after the next car's arrival, whichever is later\n        first_for_car = -(-arrive[i] // gap) * gap   # ceiling to a multiple\n        depart = max(depart + gap, first_for_car)\n        boarded = 0\n        while i < n and boarded < cap and arrive[i] <= depart:\n            i += 1\n            boarded += 1\n    print(depart)\n\nmain()";

const FSLOW = "# Brute force for checking: try every sailing in turn\nimport sys\ndata = sys.stdin.read().split()\nn, cap, gap = int(data[0]), int(data[1]), int(data[2])\narrive = [int(x) for x in data[3:3 + n]]\ni, depart = 0, 0\nwhile i < n:\n    depart += gap\n    boarded = 0\n    while i < n and boarded < cap and arrive[i] <= depart:\n        i += 1\n        boarded += 1\nprint(depart)";

const FIO = "Sample input:\n5 2 10\n1 2 3 15 31\n\nSample output:\n40";

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'CONTEST', blurb: 'USACO for students in Canada, from usaco.org\'s own pages: how it works, what is open to Canadians, how it differs from the CCC, and how to use both in one season.' },
  slug: 'usaco-for-canadian-students',
  code: 'uc',
  accent: '#4B6622',
  accentRationale: 'USACO for Canadian students: a muted moss green #4B6622, allocated for this row and at least 6 RGB units from every site accent and 14 from every other Canada accent, contrast 6.15 on the paper #FBF8F2 and above 5.2 on all three paper tints',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'USACO for Canadian students',
  title: 'USACO for Canadian Students: How It Differs from the CCC',
  description: 'USACO for students in Canada, from usaco.org\'s own pages: what is open to Canadians, the four divisions, how it compares with the CCC, and a season plan.',
  ogDescription: 'Canadian students can enter USACO\'s free online contests from home. Here is what usaco.org says about who can take part, how divisions and promotion work, how it differs from the CCC, and how to use both.',
  twitterDescription: 'USACO for Canadian students: eligibility, divisions, and how it fits with the CCC, from usaco.org.',
  pageName: 'USACO for Canadian Students',
  webPageDescription: 'A guide for Canadian students and parents to the USA Computing Olympiad, built from usaco.org\'s own pages, with a comparison against the Canadian Computing Competition and an original practice problem.',
  courseDescription: 'Live online competitive programming for Canadian students preparing for USACO divisions and the Canadian Computing Competition, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Canada', href: '/coding-classes-in-canada' }],
  crumbLabel: 'USACO for Canadian students',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#what', label: 'What USACO is' },
    { href: '#open', label: 'Open to Canadians' },
    { href: '#versus', label: 'USACO vs CCC' },
    { href: '#problem', label: 'A practice problem' },
    { href: '#season', label: 'One season' }
  ],
  eyebrow: 'Canada &middot; USA Computing Olympiad &middot; Online contests',
  h1: 'USACO for Canadian students',
  lede: 'The USA Computing Olympiad runs free online programming contests that anyone can enter from home, and many Canadian students who write the Canadian Computing Competition use it as extra practice through the winter. It is a different kind of contest from the CCC: several online rounds instead of one sitting at school, divisions you climb by promotion instead of a level you choose, and a national team path that is reserved for students in the USA. This page is built from usaco.org\'s own pages, fetched on 22 October 2026, and sets out what is open to a Canadian, how the two contests compare, and how to use both in one school year without either getting in the way.',
  secondaryCta: { href: '#versus', label: 'Compare USACO and the CCC' },
  wa: 'Hello Modern Age Coders, my child in Canada wants to try USACO alongside the CCC. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; facts from usaco.org and CEMC, read on 22 October 2026',
  spec: [
    ['Run by', 'USACO (USA)'],
    ['Entry', 'Free online account'],
    ['Where', 'From home, online'],
    ['Rounds', 'Usually four a season'],
    ['Divisions', 'Bronze, Silver, Gold, Platinum'],
    ['Team path', 'USA students only'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'USACO, the USA Computing Olympiad, holds free online algorithm contests open to all, so Canadian students can compete from home in Bronze, Silver, Gold and Platinum divisions; only students in the USA can be selected as finalists for its camp. For Canada\'s IOI team the route is the CCC. Modern Age Coders coaches both live online, in a batch or one to one, in its CCC Junior and Senior Preparation course.',

  picks: {
    eyebrow: 'Prepare with a teacher',
    h2: 'Three courses for a Canadian USACO competitor',
    lede: 'For a student in Canada the CCC comes first, because it is the national route. USACO then adds rounds and a division ladder to measure progress against.',
    items: [
      { course: 'ccc-junior-and-senior-preparation-course', code: 'UC / 01', title: 'CCC Junior and Senior Preparation', note: 'The Canadian contest first: Junior or Senior, aimed at 17 February 2027, with USACO rounds as practice.' },
      { course: 'competitive-programming-for-teens-course', code: 'UC / 02', title: 'Competitive programming for teens', note: 'Its USACO track takes students from Bronze techniques towards Gold, in step with the divisions.' },
      { course: 'cpp-programming-masterclass-for-teens', code: 'UC / 03', title: 'C++ for teens', note: 'The language USACO calls the clear answer at higher levels, and the only one the CCO accepts.' }
    ]
  },

  sections: [
    {
      id: 'what', tint: 'tint', eyebrow: 'What USACO is',
      h2: 'What the USA Computing Olympiad is, in its own words',
      lede: 'Every row below is quoted or closely summarised from usaco.org\'s overview, details and instructions pages, fetched with no restrictions on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'USACO as usaco.org describes it (read 22 October 2026)', head: ['Point', 'What usaco.org says'], rows: [
          ['Mission', 'USACO "supports computing education in the USA and worldwide by identifying, motivating, and training high-school computing students at all levels".'],
          ['Contests', '"On-line programming contests (four per year) for students at all levels." The details page says they usually run "from December through early spring, one per month".'],
          ['Length', 'Contests "usually run for four continuous hours in length for a normal contest, and five for the US Open".'],
          ['When you write', 'Any block of time inside a Friday-to-Monday weekend: "your timer starts when you log into the contest and download the problems".'],
          ['Cost and sign-up', '"There is never any fee for participation." "There is no pre-registration required to compete; all you need is an account on this site."'],
          ['Problems', '"Each contest has typically 3 or 4 problems", solved in "C, C++, Java, or Python".'],
          ['Time limits', '"2 seconds per input case for C and C++, and 4 seconds per input case for Java and Python", with about 256MB of memory, unless stated otherwise.'],
          ['Language of the paper', '"The official language of the contest is English", with translations offered for convenience.'],
          ['Free training', '"Hundreds of hours of free on-line training resources and historical contest problems (complete with solutions)".']
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://usaco.org/" rel="noopener" target="_blank">usaco.org</a>, its <a class="ag-inline-link" href="https://usaco.org/index.php?page=details" rel="noopener" target="_blank">Details and FAQ</a> and <a class="ag-inline-link" href="https://usaco.org/index.php?page=instructions" rel="noopener" target="_blank">Contest Instructions and Rules</a>, read 22 October 2026. Modern Age Coders is not connected with USACO.' },
        { kind: 'two', mt: true,
          leftH3: 'The 2026 to 2027 dates are not out yet',
          left: [
            'On 22 October 2026, usaco.org still showed its 2025-2026 schedule: contests on 9 to 12 January 2026, 30 January to 2 February 2026 and 20 to 23 February 2026, then a US Open on 28 March 2026, marked proctored. It had not posted dates for the 2026 to 2027 season, so we print none.',
            'The home page also says the 2025-2026 season was organised differently from earlier years, with "three on-line contests in early 2026 followed by a proctored invitational "US Open" championship contest" for top USA competitors. Its details page still describes the older pattern of four monthly contests. Check usaco.org before planning.'
          ],
          rightH3: 'Four divisions, climbed by promotion',
          right: [
            'USACO says "All participants start in the bronze division", and that strong scores bring promotion. Bronze is for students who "have recently learned to program"; Silver introduces "fundamental problem-solving techniques (e.g., recursive search, greedy algorithms)"; Gold brings "shortest paths, dynamic programming"; Platinum is for students "well grounded in algorithmic problem-solving techniques".',
            'A perfect score earns an in-contest promotion, with a fresh full clock for the next division in the same weekend. Others wait for the results and the contest\'s cutoff.'
          ] }
      ]
    },
    {
      id: 'open', tint: 'deep', eyebrow: 'Open to Canadians',
      h2: 'What a Canadian student can and cannot do in USACO',
      lede: 'The contests themselves are open to everyone. The national team path is not. Both points are stated plainly on usaco.org.',
      body: [
        { kind: 'table', caption: 'USACO for a student living in Canada, from usaco.org (read 22 October 2026)', head: ['Question', 'What usaco.org says', 'What it means in Canada (ours)'], rows: [
          ['Can I enter?', '"All are welcome to participate in online USACO contests and training." "Participation is free and open to all."', 'Yes, from home, with a free account'],
          ['How am I ranked?', '"Pre-college / USA students are typically ranked separately from "observers" (all others participating)."', 'Read the results page for how your entry is listed; we do not guess'],
          ['Can I be promoted?', '"All participants start in the bronze division", and promotion follows strong scores', 'The division ladder is open to everyone, and is a good progress measure'],
          ['Can I be a finalist?', '"Only pre-college students in the USA are eligible for selection as finalists to attend the USACO training camp"', 'No, for students living and studying in Canada'],
          ['Residency rule for finalists', '"You must either be a US citizen or a resident of the USA during the first half of the school year."', 'Canada\'s IOI route runs through the CCC instead'],
          ['Practice archive', 'Historical problems with solutions, and "the ability (if logged in) to submit your own solutions"', 'Free practice all year, with judged submissions']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Certified results in Gold and Platinum',
          left: [
            'USACO describes a "certified contest result" for Gold and Platinum. Problems in those divisions are released at "12:00pm (noon) eastern time (ET)" on the Saturday, and a student who starts "between 12:00pm and 12:15pm ET on that day will receive a certified score".',
            'USACO adds that "A certified result is required for promotion from gold to platinum." Bronze and Silver problems are open across the whole weekend, with no certified start.'
          ],
          rightH3: 'The rules that apply to everyone',
          right: [
            'USACO\'s integrity rules include working alone and this line: "Use of generative AI (e.g., services like copilot or ChatGPT) is prohibited." Code must be written from scratch, consulting only references for the language\'s syntax and libraries.',
            'Under 18, ChatGPT needs a parent\'s permission anyway. For contest practice we ask students to work exactly as the rules require, with only official language documentation open.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://usaco.org/index.php?page=instructions" rel="noopener" target="_blank">USACO Contest Instructions and Rules</a>, <a class="ag-inline-link" href="https://usaco.org/index.php?page=details" rel="noopener" target="_blank">USACO Details and FAQ</a> and <a class="ag-inline-link" href="https://usaco.org/index.php?page=training" rel="noopener" target="_blank">USACO Training</a>, read 22 October 2026.' }
      ]
    },
    {
      id: 'zones', tint: 'tint', eyebrow: 'Clocks',
      h2: 'Noon Eastern in every Canadian time zone',
      lede: 'For Gold and Platinum, the certified start is noon Eastern on the contest Saturday. Our conversion below shows what that means across Canada, using the 2026 to 2027 offsets. It assumes USACO keeps the noon ET release it described for 2025-2026.',
      body: [
        { kind: 'table', caption: 'USACO\'s noon ET certified start in Canadian local time (our conversion; offsets from the tz database, release 2026e)', head: ['Where', 'Until 13 March 2027', 'From 14 March 2027'], rows: [
          ['British Columbia (most), Yukon', '10:00 a.m.', '9:00 a.m.'],
          ['Alberta, Saskatchewan', '11:00 a.m.', '10:00 a.m.'],
          ['Manitoba', '12:00 noon', '11:00 a.m.'],
          ['Ontario and Quebec (ET)', '12:00 noon', '12:00 noon'],
          ['Atlantic provinces (AT)', '1:00 p.m.', '1:00 p.m.'],
          ['Newfoundland (NT)', '1:30 p.m.', '1:30 p.m.']
        ] },
        { kind: 'p', mt: true, html: 'Why two columns: Eastern clocks move forward on 14 March 2027, while British Columbia, Alberta, Saskatchewan and, from 1 November 2026, Manitoba no longer change. A March round therefore starts an hour earlier for western students than a January one. Weekend morning starts suit families in British Columbia well; the Atlantic and Newfoundland start falls after lunch.' }
      ]
    },
    {
      id: 'versus', tint: 'deep', eyebrow: 'USACO vs CCC',
      h2: 'USACO and the CCC side by side',
      lede: 'The two contests test the same kind of thinking, but they are organised very differently. The CCC column is from CEMC\'s CCC page and the CCC rules; the USACO column from usaco.org. The arrangement is ours.',
      body: [
        { kind: 'table', caption: 'The CCC and USACO compared (CEMC and usaco.org, read 22 October 2026)', head: ['', 'Canadian Computing Competition (CEMC)', 'USACO'], rows: [
          ['Entry', 'Through a school that orders the contest', 'A free account; no pre-registration'],
          ['Where', 'At school, supervised in person', 'Online, from home'],
          ['How often', 'Once a year; Wednesday 17 February 2027 in the Americas', 'Usually four rounds a season; 2026 to 2027 dates not yet posted'],
          ['Length', '3 hours', '4 hours, or 5 for the US Open'],
          ['Problems', '5 per paper, 15 marks each', 'Typically 3 or 4'],
          ['Levels', 'Junior or Senior, chosen by the student', 'Bronze to Platinum, by promotion'],
          ['Languages', 'C, C++, Python 2, Python 3, Java', 'C, C++, Java, Python'],
          ['Time per test', '3 seconds and 512 MB, unless stated', '2 seconds for C and C++, 4 for Java and Python; about 256MB'],
          ['Cost to the family', 'Paid by the school, per participant', '"There is never any fee for participation."'],
          ['AI tools', 'Forbidden, including inside an editor', 'Generative AI prohibited'],
          ['Leads to', 'About 20 official Senior writers invited to the CCO, which selects Canada\'s IOI team', 'For pre-college students in the USA: finalist camp and the USA IOI team']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the comparison means for a Canadian (ours)',
          left: [
            'For a student in Canada, the CCC is the contest that counts for Canada\'s IOI team, and it happens once. USACO can be entered again and again, which makes it valuable practice: four hours of real contest pressure, several times a winter, from the kitchen table.',
            'USACO\'s divisions also give a clear, external measure of progress. A student who reaches Silver has met recursive search and greedy methods under contest conditions; Gold means shortest paths and dynamic programming, which is roughly the ground of CCC Senior problems 3 and 4 in our experience.'
          ],
          rightH3: 'Where the two differ in practice',
          right: [
            'The CCC rewards a single good afternoon and partial marks on subtasks. USACO scores each problem by how many test cases pass within the time limit, and promotion depends on each contest\'s cutoff.',
            'Python is workable at both lower levels: USACO says it generally tries to ensure "that all bronze-level problems are also fully-solvable in Python", while warning that higher divisions may not be. CEMC gives a similar warning for the CCC. C++ is the safe choice for anyone aiming high in either.'
          ] }
      ]
    },
    {
      id: 'problem', tint: 'tint', eyebrow: 'A practice problem',
      h2: 'An original Bronze-style problem: Ferry Queue',
      lede: 'We wrote this problem for our students; it is ours, not a USACO or CEMC problem. It is the kind of simulation that Bronze rounds and early CCC problems share, with a twist that rewards thinking about efficiency. The solution was run on its sample, and checked against a slow brute force on 500 random cases with no differences.',
      body: [
        { kind: 'p', html: '<b>Ferry Queue.</b> A ferry leaves the dock at times T, 2T, 3T and so on (in minutes) and carries at most C cars each sailing. N cars arrive at the given times, in order; a car arriving exactly at a departure time still makes that sailing. Cars board first come, first served. Print the departure time of the sailing that carries the last car. <b>Input:</b> N, C and T on the first line (1 &le; N &le; 100,000; 1 &le; C, T &le; 1,000), then the N arrival times on one line, each from 0 to 1,000,000,000. <b>Output:</b> one integer.' },
        { kind: 'code', label: 'Ferry Queue &middot; sample', lang: 'text', code: FIO },
        { kind: 'code', label: 'Ferry Queue &middot; a slow brute force (Python)', lang: 'python', code: FSLOW, note: 'Correct, and fine for the sample. But it visits every sailing, and with arrival times up to a billion and T as small as 1, that can mean a billion empty sailings. On a contest grader it would pass the small tests and time out on the large ones.' },
        { kind: 'code', label: 'Ferry Queue &middot; our solution (Python)', lang: 'python', code: FERRY, note: 'The idea: empty sailings change nothing, so jump straight to the next sailing that matters, either the one after the last, or the first one at or after the next car\'s arrival, found by rounding up to a multiple of T. Each car is handled once, so the work grows with N, not with the times. In the sample, cars at 1 and 2 leave at 10, cars at 3 and 15 at 20, and the car at 31 at 40. The equal-time rule, arrival &le; departure, is the detail most first attempts get wrong.' },
        { kind: 'two', mt: true,
          leftH3: 'Why this problem suits both contests',
          left: [
            'Simulation with an efficiency twist appears at the start of both ladders. In USACO it is Bronze material; at the CCC it sits around Junior problem 5 or the early Senior problems.',
            'The lesson is the same in both: write the obvious simulation first, then ask which steps change nothing and can be skipped.'
          ],
          rightH3: 'Practising it properly',
          right: [
            'Write the brute force, then the fast version, and run both on many small random inputs until they always agree. Only then trust the fast version on large input.',
            'Then try your own variant: what if the ferry may leave early once it is full? Changing one rule and re-solving is how students learn to read rules carefully.'
          ] }
      ]
    },
    {
      id: 'season', tint: 'deep', eyebrow: 'One season',
      h2: 'Using USACO and the CCC in the same school year',
      lede: 'USACO\'s rounds have usually fallen between December and early spring, and the 2027 CCC is on 17 February 2027. Our plan for a Canadian student who wants both, assuming USACO keeps a similar pattern for 2026 to 2027, which it had not yet confirmed.',
      body: [
        { kind: 'ol', items: [
          '<b>Now, October and November 2026:</b> create a usaco.org account, try three or four historical Bronze problems from the archive, and confirm with the school that it will order the CCC.',
          '<b>December 2026 and January 2027:</b> write each USACO round that is posted, as a four-hour practice under the real rules. Review every problem the following week, whatever the score.',
          '<b>Early February 2027:</b> protect the CCC. If a USACO weekend falls within a few days of 17 February 2027, treat it as light practice or skip it, and spend the time on CCC past papers.',
          '<b>17 February 2027:</b> write the CCC at school, Junior or Senior. This is the contest that counts for Canada.',
          '<b>After the CCC:</b> return to USACO for the remaining rounds of the season, aiming for the next promotion.',
          '<b>Spring and summer 2027:</b> keep working through the historical archive at the student\'s division, ready for the next season.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Which to prioritise',
          left: [
            'For a student in Canada, the CCC. It is the contest that leads to the CCO and Canada\'s IOI team, and it is written once. USACO is excellent preparation for it and a lasting measure of progress.',
            'For a student who simply loves algorithms, both, all year. The problems are different, the habits are the same.'
          ],
          rightH3: 'What we will not claim',
          right: [
            'We do not promise promotions, cutoffs or invitations in either contest; both organisers decide those. We teach the algorithms and habits that both contests reward.',
            'For deeper division-by-division coaching, our <a class="ag-inline-link" href="/usaco-preparation-online-coaching">USACO preparation page</a> sets out how we work, and our <a class="ag-inline-link" href="/canadian-computing-competition-ccc-prep">CCC preparation page</a> covers the Canadian contest.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where a student starts',
    h2: 'Four stages for a Canadian student trying USACO',
    lede: 'How we place a student who wants to use USACO alongside the CCC. The stages are ours.',
    table: { caption: 'From first round to steady promotion (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. First round', 'Writes a Bronze round; solves one problem fully'],
      ['2. Bronze steady', 'Solves most Bronze problems; ready for CCC Junior'],
      ['3. Silver', 'Promoted; uses recursive search and greedy methods'],
      ['4. Gold and up', 'Shortest paths and DP; ready for CCC Senior\'s middle problems']
    ] },
    left: { h3: 'For parents', ps: [
      'USACO rounds happen at home, so the family sets the conditions. A quiet room, four clear hours and no help from anyone is what the rules ask.',
      'A promotion is a good moment to celebrate. A round without one is a good moment to review, not to worry.'
    ] },
    right: { h3: 'For students', ps: [
      'Treat each round as practice for the CCC: read every problem first, then choose your order.',
      'Re-solve the problems you missed before the next round. That is where promotions come from.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for students who enjoy algorithm contests',
    lede: 'Live online, with the same teacher each week, in a batch or one to one, for students across Canada.',
    bands: [
      { num: 'I', h3: 'Getting ready for Bronze', sub: 'Grades 7 to 10', courses: [
        { code: 'UC / BRZ / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Enough for Bronze, start to finish.' },
        { code: 'UC / BRZ / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'A language both contests accept.' },
        { code: 'UC / BRZ / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Logic and data structures, slowly.' }
      ] },
      { num: 'II', h3: 'Silver and Gold', sub: 'Grades 9 to 12', courses: [
        { code: 'UC / SG / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'The math behind counting and DP.' },
        { code: 'UC / SG / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition math', blurb: 'Combinatorics and proof.' },
        { code: 'UC / SG / 03', slug: 'ap-computer-science-a-java-exam-prep-course', title: 'AP Computer Science A', blurb: 'Java, for schools offering AP.' }
      ] },
      { num: 'III', h3: 'Platinum and beyond', sub: 'Strong students', courses: [
        { code: 'UC / PLT / 01', slug: 'competitive-programming-masterclass-college', title: 'Competitive programming, advanced', blurb: 'For university-level contests.' },
        { code: 'UC / PLT / 02', slug: 'data-structures-algorithms-masterclass-college', title: 'Data structures and algorithms', blurb: 'Advanced structures, adults.' },
        { code: 'UC / PLT / 03', slug: 'cpp-programming-complete-masterclass-college', title: 'C++ masterclass', blurb: 'C++ at depth, ages 18 and over.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live contest coaching for Canadian families',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school, in your own province\'s time.' },
      { time: 'Weekends', l: 'Weekend mornings, clear of USACO contest weekends.' },
      { time: '1-on-1', l: 'Fitted around the CCC date and the USACO rounds.' }
    ],
    cells: [
      { h3: 'Two contests, one plan', p: 'CCC first, USACO rounds as practice.' },
      { h3: 'Division by division', p: 'Bronze to Gold techniques in order.' },
      { h3: 'Original problems', p: 'Our own sets; official archives for past ones.' },
      { h3: 'Round reviews', p: 'Every USACO round gone through afterwards.' },
      { h3: 'Coast to coast', p: 'Students in every Canadian time zone.' },
      { h3: 'Batch or one to one', p: 'Fifteen to twenty in a batch, or private.' }
    ]
  },

  projectsH2: 'Built by our learners',
  projectsLede: 'Contest work is one part; building is the other. A few of our students\' projects are below, and the <a class="ag-inline-link" href="/student-labs">student labs</a> show more.',
  reviewsLede: 'Parents on Google, quoted as written.',

  fees: {
    h2: 'Fees',
    lede: 'USACO charges nothing to compete, and the school covers the CCC. Our monthly fee is only for live coaching, with no season contract, so a family can coach through the winter rounds and stop in spring.',
    free: ['A free first class', 'One Bronze-style problem together', 'No card asked for'],
    group: ['Fifteen to twenty students in a batch', 'One teacher all winter', 'Choose your batch time', 'Billed each month'],
    one: ['A private teacher', 'Planned around both contests', 'Every round reviewed']
  },

  faq: {
    eyebrow: 'Questions from Canadian families',
    h2: 'USACO for Canadian students: common questions',
    items: [
      { q: 'Can Canadian students compete in USACO?', a: 'Yes. usaco.org says all are welcome to take part in its online contests and training, and that participation is free and open to all. A student in Canada needs only a free account on usaco.org.' },
      { q: 'Can a Canadian student become a USACO finalist?', a: 'No, for a student living in Canada. USACO says only pre-college students in the USA are eligible for selection as finalists, and that a finalist must be a US citizen or a resident of the USA during the first half of the school year.' },
      { q: 'How are Canadian students ranked in USACO?', a: 'usaco.org says pre-college or USA students are typically ranked separately from observers, meaning all others participating. Check each contest\'s results page for how entries are listed.' },
      { q: 'Is USACO free?', a: 'Yes. USACO\'s rules say there is never any fee for participation, and its training pages and historical problems with solutions are free online.' },
      { q: 'USACO vs CCC: which should a Canadian student do?', a: 'The CCC, if only one. It is CEMC\'s national contest, written at school once a year, and the route to the Canadian Computing Olympiad and Canada\'s IOI team. USACO is excellent extra practice from home across the winter.' },
      { q: 'When are the 2026 to 2027 USACO contests?', a: 'usaco.org had not posted them when we checked on 22 October 2026; it still showed the 2025-2026 schedule. Its details page says contests usually run from December through early spring. The CCC is on 17 February 2027.' },
      { q: 'What time do USACO contests start in Canada?', a: 'Bronze and Silver can be started any time in the Friday-to-Monday window. For a certified Gold or Platinum result, problems open at noon Eastern on the Saturday, which is 10:00 a.m. in British Columbia in winter and 1:30 p.m. in Newfoundland.' },
      { q: 'Which language should a Canadian student use for USACO?', a: 'USACO accepts C, C++, Java and Python, and calls C++ the clear answer at higher levels because it is the only language supported at the IOI. It aims to make all Bronze problems fully solvable in Python. The CCO also requires C++.' },
      { q: 'Can students use AI in USACO?', a: 'No. USACO prohibits generative AI such as ChatGPT during contests, and the CCC rules forbid it too. Outside contests, ChatGPT needs a parent\'s permission for anyone under 18.' },
      { q: 'When are your classes for Canadian families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We keep weekend slots clear of USACO weekends where a student is competing.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Canadian students who enjoy algorithm contests.',
    items: [
      { href: '/usaco-preparation-online-coaching', label: 'USACO preparation', p: 'Our division-by-division USACO coaching.' },
      { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation', p: 'The Canadian contest, Junior and Senior.' },
      { href: '/ccc-junior-guide', label: 'CCC Junior guide', p: 'The 2027 Junior paper explained.' },
      { href: '/ioi-olympiad-informatics-training', label: 'IOI training', p: 'Where both ladders lead internationally.' },
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'All of our pages for Canada.' },
      { href: '/how-to-debug-code', label: 'How to debug code', p: 'When a test case fails and you do not know why.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'The first class is one Bronze-style problem, solved together, then a look at the student\'s CCC plans. You leave with a sensible order for the winter: which USACO rounds to write and how to keep the CCC first.',
    readFirst: 'To see the teaching first, <a class="ag-inline-link" href="/how-we-teach">How we teach</a> describes a live class, and the <a class="ag-inline-link" href="/courses">full course list</a> has every syllabus.',
    note: 'Our teachers teach live over video from India; there is no centre in Canada to visit. WhatsApp is the quickest way to reach us.',
    formNote: 'The first class is free; no card is required.'
  },

  footer: {
    cols: [
      { h4: 'Contests', links: [
        { href: '/usaco-preparation-online-coaching', label: 'USACO preparation' },
        { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation' },
        { href: '/ccc-junior-guide', label: 'CCC Junior guide' },
        { href: '/ioi-olympiad-informatics-training', label: 'IOI training' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'CCC first, USACO all winter'
  },

  personalityCss: `
.ag-root.ag-uc .ag-hero h1 { letter-spacing: -0.013em; }
.ag-root.ag-uc .ag-capsule { border-left-width: 5px; border-radius: 6px; }
.ag-root.ag-uc .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-uc .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-uc .ag-band-head h3 { letter-spacing: -0.007em; }
.ag-root.ag-uc .ag-slots { gap: 1.05rem; }
`,

  dossier: {
    curriculumAuthority: 'usaco.org home, Details and FAQ, Contest Instructions and Rules, Training and Resources pages, fetched raw with curl on 22 October 2026 (no block), and CEMC\'s CCC page for the comparison: mission; contests usually four a season, December to early spring; 4 hours, 5 for the US Open; Friday-to-Monday window; free, no pre-registration; open to all; observers ranked separately; four divisions and promotion; certified Gold and Platinum starts at noon ET; finalists only pre-college students in the USA, US citizen or resident; 3 or 4 problems; C, C++, Java, Python; 2 s and 4 s limits, about 256MB; generative AI prohibited; Bronze fully solvable in Python; 2025-2026 schedule shown, 2026-2027 not yet posted.',
    localProject: 'A CCC vs USACO comparison table; the noon ET certified start converted to six Canadian zones before and after 14 March 2027; a season plan that keeps the 17 February 2027 CCC first; the original Bronze-style problem Ferry Queue with a brute force and an efficient Python solution, stress-tested on 500 random cases. Lesson family: simulation done efficiently.',
    requiredMentions: ['Pre-college / USA students are typically ranked separately from', 'Only pre-college students in the USA are eligible for selection as finalists', 'Read the results page for how your entry is listed; we do not guess', 'A certified result is required for promotion from gold to platinum', 'four continuous hours in length for a normal contest, and five for the US Open', 'Until 13 March 2027', 'Ferry Queue', 'Noon Eastern in every Canadian time zone', 'There is no pre-registration required to compete'],
    sources: [
      { claim: 'Mission, free training, four contests a year, 2025-2026 recap and schedule.', url: 'https://usaco.org/' },
      { claim: 'Contest pattern, length, window, open to all, observers, divisions, promotion, certified results, finalist eligibility.', url: 'https://usaco.org/index.php?page=details' },
      { claim: 'All welcome; finalists only pre-college students in the USA; no fee; problems, languages, limits, AI ban, Python at Bronze, English official.', url: 'https://usaco.org/index.php?page=instructions' },
      { claim: 'Training resources and historical problems with solutions and judged submissions.', url: 'https://usaco.org/index.php?page=training' },
      { claim: 'CCC side of the comparison: date, format, languages, limits, entry, CCO.', url: 'https://cemc.uwaterloo.ca/contests/ccc' }
    ],
    rejectedClaims: [
      '2026-2027 USACO dates: not posted on usaco.org when fetched, so none printed.',
      'How exactly Canadian entries appear in USACO rankings: not inferred; the observers line is quoted as written.',
      'Names of USACO finalists, medallists, staff, sponsors or tutoring companies from usaco.org: not reproduced.',
      'Gender-scoped USACO teams and camp cohorts: deliberately left out.',
      'That our coaching produces promotions or results: refused.',
      'Any affiliation with USACO or CEMC: none, and the page says so.'
    ]
  }
};
