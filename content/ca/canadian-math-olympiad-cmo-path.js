'use strict';
// Canadian Mathematical Olympiad path (ag- contest door; Canada cluster Plan 2, row 50). This page is the CMS
// OLYMPIAD ROAD: COMC to CJMO/CMO to the IMO team, as the Canadian Mathematical Society states it. Searches: canadian
// math olympiad / cmo canada / canadian math olympiad team / training / how to make the imo team canada.
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Sources, read raw on 22 October 2026 (copies in keyword-research-2026-09/ca/src-pilots/canadian-math-olympiad-cmo-path/
// and ca/src/cms/):
//  - cms.math.ca/competitions/cmo/ (cmo.txt): CMO "is Canada's premier national advanced mathematics competition"
//    (curly apostrophe in source); competitors "require an invitation from the Canadian Mathematical Society"; the CJMO
//    "also by invitation only, is held at the same time for students up to grade ten. The CJMO is not as challenging as
//    the CMO, however some problems may appear in both competitions."; "These 3-hour competitions are held each March at
//    a selected time and date. All official participants write at the same time and are proctored by their local school
//    faculty or staff."; 2026 CMO and CJMO "held on Thursday, March 12th"; 2026 CMO statistics top score 31/35, mean
//    11.1/35, minimum for top quartile 16/35, median 11/35, competitors 95; CJMO top 30/35, mean 17.2/35, top quartile
//    23/35, median 18/35, competitors 18; "Typically 75-100 students are invited each year to write the CMO and a further
//    20 students are invited to write the CJMO."; "Invitations are normally sent out in February."; "The top 75-100
//    qualifying students from the COMC Competitive division will be invited to the CMO."; alternate routes: top winners
//    of the Alberta High School Mathematics Competition (Part II) and the AMQ secondary concours; APMO invitees normally
//    also invited; CJMO "Up to 20 students who are top scorers on the COMC and are in grade 10 or less"; "Anyone invited
//    to the CMO is not invited to the CJMO."; "success will require mathematics at a higher level than is taught in most
//    schools"; most important resource the problem sets and solutions from previous years; eligibility (IMO
//    regulations, citizenship or Canadian schooling, not enrolled at university, "less than 20 years old as of June 30 of
//    the year of the Competition", CJMO grade ten or earlier); "The first CJMO was held in 2020." Student names, schools,
//    the champion, the Brennan award text and all prize money are deliberately NOT used.
//  - cms.math.ca/competitions/imo/ (imo.txt): IMO "is the world championship mathematics competition for high-school
//    students. Canada has proudly participated in the IMO for over forty years."; "Canadian team members are chosen based
//    on their results in previous competitions and their eligibility to represent Canada at the IMO."; COMC and CMO are
//    "Two important Canadian competitions on the road to the IMO"; 2026 "Individual: 1 Gold, 3 Silver, 2 Bronze" and
//    "Team Canada: 13th out of 117 teams"; the 2026 IMO in Shanghai, China, July 10th to 21st (news line). Team names not
//    used.
//  - cms.math.ca/competitions/ (competitions.txt): IMO 2027 "July 16-26, 2027 (Budapest, Hungary)"; CJMC "Grade 8 or
//    under", "Grades 5 to 8", "Nov. 19, 2026", registration "Nov. 12"; CLMC Oct. 1, 2026; COMC Oct. 29, 2026; CMO listed
//    for Grades 8-12 and CJMO Grades 6-10 (recommended); "Registration typically opens at the start of September."; "Students are able to register for more than
//    one competition if they wish to do so."
//  - cms.math.ca/competitions/comc/comc2026/prizes-and-awards/: beyond the COMC "competitions are by invitation only";
//    "students usually need to be Canadian citizens (or permanent residents)"; the CMO "is a conventionally-supervised
//    three-hour competition with five questions. It is usually held in late March."; "the most important competition for
//    those seeking to earn a spot on Math Team Canada (MTC)"; IMO "six questions, split over two days (a total of nine
//    hours of testing)"; the selected team and alternates train "for one or two weeks"; about 24 Canadian students in
//    Grade 10 or earlier invited to the Canada Math Camp. Individual names on that page are not used.
//  - cms.math.ca/competitions/apmo/: "held each March"; "invitation-only"; "about 20-30 students"; writers sit it "at
//    their own schools"; "one four-hour paper consisting of five questions of varying difficulty and each having a
//    maximum score of 7 points"; APMO results are "one of the measures the CMS uses to identify potential candidates for
//    Math Team Canada". Named contacts not used.
//  - cms.math.ca/competitions/repechage/: "The CMO Qualifying Repêchage has been discontinued."; "The 2026 edition of the
//    Repêchage was the last"; "Starting in 2027, we will instead be increasing the number of people invited directly from
//    the COMC to the Canadian Mathematical Olympiads (CMO/CJMO)."; this "will also allow us to hold the CMOs earlier".
//  - cms.math.ca/competitions/comc/comc2026/ and /changes/: COMC Thursday, October 29, 2026; only Competitive Division
//    writers eligible for prize money and potential CMO invitations; registration closed Thursday, October 22, 2026.
//  - cms.math.ca/competitions/scholarship-opportunities/: a University of Toronto full-ride undergraduate fellowship for
//    Canadian IMO team members; a University of Waterloo Faculty of Mathematics Olympiad Scholarship needing a medal at
//    the IMO or the other olympiads listed. The fellowship deadline shown (January 15, 2026) is stale and not used.
// Our own material, labelled on the page: the six olympiad-style problems and complete proofs (checked by hand and, for
// problem 1, by Python over n = -200 to 499 on 22 October 2026), the multi-year road map, the weekly training rhythm,
// and the arithmetic 35 / 5 = 7 points per CMO question (ours, consistent with CMS's /35 scores and five questions).
// Lesson family: proof as the product (a claim, every case, a reason for each step).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const PROOF = `Problem 1 (a standard exercise; proof written by us). Prove that n^5 - n is divisible
by 30 for every integer n.

Proof.
Since 30 = 2 x 3 x 5 and 2, 3 and 5 are distinct primes, it is
enough to show that 2, 3 and 5 each divide n^5 - n.

Factor: n^5 - n = n(n^4 - 1) = (n - 1) n (n + 1)(n^2 + 1).

Divisible by 2 and 3: (n - 1), n and (n + 1) are three consecutive
integers, so one of them is even and one is a multiple of 3.

Divisible by 5: consider the remainder r of n on division by 5.
  r = 0:  5 divides n.
  r = 1:  5 divides n - 1.
  r = 4:  5 divides n + 1.
  r = 2:  n^2 + 1 leaves remainder 4 + 1 = 5, that is 0.
  r = 3:  n^2 + 1 leaves remainder 9 + 1 = 10, that is 0.
In every case one factor is a multiple of 5.

So 2, 3 and 5 all divide n^5 - n, and since they share no common
factor, their product 30 divides n^5 - n.

Therefore n^5 - n is divisible by 30 for every integer n.  QED`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'OLYMPIAD', blurb: 'How the Canadian Mathematical Society describes the road from the COMC to the CJMO and CMO and on to Math Team Canada at the IMO, with 2026 statistics, the 2027 changes and six olympiad problems of ours with proofs.' },
  slug: 'canadian-math-olympiad-cmo-path',
  code: 'cmoc',
  accent: '#446585',
  accentRationale: 'Canadian Math Olympiad path, Canada: a muted slate blue #446585, allocated for row 50; measured 7.1 RGB units (Euclidean) from the nearest site accent (#4B6684) and 18.7 from the nearest Canada accent (#32648A); contrast 5.75 on the paper #FBF8F2, 5.41 and 4.95 on the darker tints',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Canadian Math Olympiad path',
  title: 'Canadian Math Olympiad (CMO): The Path to Team Canada',
  description: 'How the CMS describes the road from the COMC to the CJMO and CMO and on to the IMO team: invitations, 2026 statistics, the 2027 changes and six proofs of ours.',
  ogDescription: 'The Canadian Mathematical Olympiad is by invitation from the Canadian Mathematical Society, mainly through the COMC. The path to Math Team Canada as the CMS states it, 2026 statistics, what changes in 2027 and six original olympiad problems with proofs.',
  twitterDescription: 'The CMO path in Canada: COMC, CJMO and CMO, APMO and the IMO, in the CMS\'s own words.',
  pageName: 'Canadian Math Olympiad (CMO) Path',
  webPageDescription: 'For Canadian families: the Canadian Mathematical Olympiad and the road to Math Team Canada, built from the Canadian Mathematical Society\'s CMO, IMO, APMO, Repêchage, Competitions and COMC pages, with six olympiad-style problems and complete proofs of ours.',
  courseDescription: 'Live online olympiad mathematics for students in Canada on the COMC to CMO path: proof writing, number theory, combinatorics, algebra and geometry, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Canada', href: '/coding-classes-in-canada' }, { name: 'Olympiad classes', href: '/maths-olympiad-classes-online' }],
  crumbLabel: 'CMO path',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#road', label: 'The road' },
    { href: '#invites', label: 'Invitations' },
    { href: '#stats', label: '2026 figures' },
    { href: '#proof', label: 'A proof' },
    { href: '#problems', label: 'Problems' }
  ],
  eyebrow: 'Canada &middot; Canadian Mathematical Society &middot; olympiad path',
  h1: 'The Canadian Math Olympiad path, from the COMC to the IMO team',
  lede: 'The Canadian Mathematical Olympiad is Canada\'s national olympiad for advanced high school students, and nobody enters it by signing up. Every writer is invited by the Canadian Mathematical Society, almost always on the strength of the Canadian Open Mathematics Challenge the October before. From the CMO, and from a few other contests, the CMS chooses Math Team Canada for the International Mathematical Olympiad each July. This guide follows that road as the CMS itself describes it, page by page, with nothing added and no promises: who is invited and how, what the 2026 olympiads looked like in numbers, what changes from 2027, what an olympiad problem asks for, and six problems of ours with complete proofs.',
  secondaryCta: { href: '#road', label: 'See the whole road' },
  wa: 'Hi, we are in Canada and our child would like to start olympiad training toward the COMC and CMO. Is a free first class available?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students &middot; every problem and proof here written by our teachers',
  spec: [
    ['Organiser', 'Canadian Mathematical Society (CMS)'],
    ['Entry', 'By CMS invitation only'],
    ['Main route', 'The COMC, Competitive Division'],
    ['CMO', 'Five questions, three hours'],
    ['CJMO', 'Grade 10 or below, same sitting'],
    ['Then', 'Math Team Canada for the IMO'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['First step', 'A free first class']
  ],
  capsuleQ: 'The short answer',
  capsule: 'The Canadian Mathematical Olympiad (CMO) is the Canadian Mathematical Society\'s invitation-only national olympiad: five questions in three hours, with a junior version, the CJMO, for Grade 10 or below. Invitations go mainly to top Competitive Division writers on the COMC, and the CMS selects the IMO team from results like these. Modern Age Coders teaches olympiad mathematics live online, in a batch or one to one.',

  picks: {
    eyebrow: 'Training for the olympiad road',
    h2: 'The courses our olympiad students take',
    lede: 'The competition course is where proofs are written and marked every week. The Waterloo contests course adds CEMC\'s written papers as regular practice. The middle school competitions course is the starting point for students in Grades 5 to 8.',
    items: [
      { course: 'olympiad-competition-mathematics-mastery', code: 'CMOC / 01', title: 'Competition mathematics, AMC to olympiad', note: 'Number theory, combinatorics, algebra and geometry, taught as proof, for students aiming at the COMC and beyond.' },
      { course: 'waterloo-math-contests-gauss-to-euclid-course', code: 'CMOC / 02', title: 'Waterloo Math Contests: Gauss to Euclid', note: 'CEMC\'s written papers as monthly milestones on the way to the COMC.' },
      { course: 'middle-school-math-competitions-course', code: 'CMOC / 03', title: 'Middle school math competitions', note: 'For Grades 5 to 8: contest habits years before the first COMC.' }
    ]
  },

  sections: [
    {
      id: 'road', tint: 'tint', eyebrow: 'The road',
      h2: 'The road to Math Team Canada, stage by stage',
      lede: 'This is the sequence the CMS describes across its competition pages, read on 22 October 2026. Each row says what the CMS says about that stage, and where.',
      body: [
        { kind: 'table', caption: 'Open contest to IMO team: each stage as the CMS page in the last column describes it (all read 22 October 2026)', head: ['Stage', 'How a student gets there', 'When', 'CMS page'], rows: [
          ['COMC', 'Open: "open to students in all locations, at all grade levels", entered through a school', 'October; Thursday, October 29, 2026 this year', 'COMC 2026'],
          ['CJMO', 'By invitation: "Up to 20 students who are top scorers on the COMC and are in grade 10 or less"', 'The same sitting as the CMO', 'CMO'],
          ['CMO', 'By invitation, mainly from the COMC Competitive Division, plus a few other routes', '"held each March" up to 2026; the CMS plans to hold it earlier from 2027', 'CMO and Repêchage'],
          ['APMO', 'By invitation: "about 20-30 students" each year "based on their results in other competitions, such as the COMC"', '"held each March"', 'APMO'],
          ['Math Team Canada', '"Canadian team members are chosen based on their results in previous competitions and their eligibility to represent Canada at the IMO."', 'In 2026, announced on May 7', 'IMO'],
          ['IMO', 'The team, plus some alternates, trains "for one or two weeks" before the competition', 'Next: July 16 to 26, 2027, Budapest, Hungary', 'Competitions and Prizes']
        ] },
        { kind: 'p', mt: true, html: 'The CMS puts the heart of it in one line on its IMO page: the COMC and the CMO are "Two important Canadian competitions on the road to the IMO." Every stage after the COMC is by invitation. The CMS Prizes and Awards page adds that to be invited beyond the COMC, "students usually need to be Canadian citizens (or permanent residents)", although they may be studying in Canada or abroad.' },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://cms.math.ca/competitions/cmo/" rel="noopener" target="_blank">CMS, CMO and CJMO</a>, <a class="ag-inline-link" href="https://cms.math.ca/competitions/imo/" rel="noopener" target="_blank">CMS, IMO</a>, <a class="ag-inline-link" href="https://cms.math.ca/competitions/apmo/" rel="noopener" target="_blank">CMS, APMO</a> and <a class="ag-inline-link" href="https://cms.math.ca/competitions/" rel="noopener" target="_blank">CMS, Competitions</a>, all read on 22 October 2026. We are an independent teaching company: the CMS has no link with us, and we have no role in who is invited or selected.' }
      ]
    },
    {
      id: 'invites', tint: 'deep', eyebrow: 'Invitations',
      h2: 'How CMO and CJMO invitations work',
      lede: 'The CMS states plainly that "All students require an invitation from the Canadian Mathematical Society in order to participate." Its pages describe the routes to that invitation as follows.',
      body: [
        { kind: 'table', caption: 'Routes to a CMO or CJMO invitation, from the CMS CMO page (read 22 October 2026)', head: ['Route', 'In the CMS\'s words'], rows: [
          ['The COMC, Competitive Division', '"The top 75-100 qualifying students from the COMC Competitive division will be invited to the CMO."'],
          ['The CJMO from the COMC', 'After the CMO invitations, the CJMO invites the next 20 qualifying young students'],
          ['Alberta and Quebec contests', 'By "traditional arrangement", the top winners from the Alberta High School Mathematics Competition (Part II) and the AMQ secondary concours are invited to the CMO'],
          ['International invitees', 'Students invited to represent Canada at the APMO are "normally also invited"'],
          ['Not both', '"Anyone invited to the CMO is not invited to the CJMO."'],
          ['Timing', '"Invitations are normally sent out in February."']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Three numbers, three pages',
          left: [
            'The CMS gives the size of the invited group in slightly different ways on different pages. The CMO page says "Typically 75-100 students are invited each year to write the CMO and a further 20 students are invited to write the CJMO."',
            'On the COMC home page the figure is roughly 100 to 120 invitations, covering the CMO and the CJMO together, and the COMC Prizes page says "the top 100 (all figures are approximate)". We print each as its page states it and do not combine them.'
          ],
          rightH3: 'Only one division counts',
          right: [
            'From 2026 the COMC has a Competitive Division and a Global Division. According to the CMS Changes page, a CMO invitation is possible only for writers in the Competitive Division, who are also the only ones eligible for prize money.',
            'To be Competitive, a writer must also start the COMC inside a fixed afternoon window set in Eastern time. Our <a class="ag-inline-link" href="/maths-olympiad-classes-online">olympiad classes</a> page covers how contests like this compare internationally.'
          ] },
        { kind: 'p', mt: true, html: 'One more change sits behind all of this. The CMS has discontinued the CMO Qualifying Repêchage, a take-home round that used to give students just below the COMC cut a second route in. Its Repêchage page says: "Starting in 2027, we will instead be increasing the number of people invited directly from the COMC to the Canadian Mathematical Olympiads (CMO/CJMO)." For a student aiming at the CMO, the October COMC is now the whole qualifying round.' }
      ]
    },
    {
      id: 'stats', tint: 'tint', eyebrow: '2026 in figures',
      h2: 'What the 2026 CMO and CJMO looked like in numbers',
      lede: 'The CMS published summary statistics for both 2026 olympiads, held on Thursday, March 12, 2026. They are the clearest public picture of how hard the papers are, even for the students invited to write them.',
      body: [
        { kind: 'table', caption: '2026 CMO and CJMO statistics, from the CMS CMO page (read 22 October 2026)', head: ['Measure', 'CMO 2026', 'CJMO 2026'], rows: [
          ['Top score', '31 / 35', '30 / 35'],
          ['Mean score', '11.1 / 35', '17.2 / 35'],
          ['Median score', '11 / 35', '18 / 35'],
          ['Minimum score for the top quartile', '16 / 35', '23 / 35'],
          ['Competitors', '95', '18']
        ] },
        { kind: 'p', mt: true, html: 'Our reading, labelled as ours. The CMS Prizes page describes the CMO as "a conventionally-supervised three-hour competition with five questions", and the scores are out of 35, so each question is worth 7 points on our arithmetic. A median of 11 out of 35 means that half of the students invited, all of them among the strongest COMC writers in the country, scored 11 or less. Put another way, a typical invited student solved about one and a half problems completely in three hours. That is not a sign the students were weak; it is what olympiad problems are like, and it is why the CMS warns that "success will require mathematics at a higher level than is taught in most schools".' },
        { kind: 'two', mt: true,
          leftH3: 'The IMO result in 2026',
          left: [
            'The CMS IMO page reports the 2026 Team Canada result as "Individual: 1 Gold, 3 Silver, 2 Bronze" and "Team Canada: 13th out of 117 teams". The 2026 IMO was held in Shanghai, China, from July 10 to 21, 2026.',
            'The same page says "Canada has proudly participated in the IMO for over forty years."'
          ],
          rightH3: 'What the IMO paper is',
          right: [
            'The CMS describes the IMO exam as "six questions, split over two days (a total of nine hours of testing)". It calls the IMO "the world championship mathematics competition for high-school students."',
            'The 2027 IMO is listed for July 16 to 26, 2027, in Budapest, Hungary.'
          ] }
      ]
    },
    {
      id: 'eligibility', tint: 'deep', eyebrow: 'Who can be official',
      h2: 'CMO eligibility, in short',
      lede: 'The CMS sets the official-participant rules on its CMO page. They follow the IMO rules for representing Canada. A summary, with the CMS wording where it matters:',
      body: [
        { kind: 'table', caption: 'CMO official-participant conditions, summarized from the CMS CMO page (read 22 October 2026)', head: ['Condition', 'What the CMS requires'], rows: [
          ['Citizenship or schooling', 'A Canadian citizen, or living in Canada and attending school in Canada for the current and previous school year, or since the start of the current year with plans to continue'],
          ['Not yet at university', 'Not formally enrolled at a university or equivalent, and not yet graduated from secondary school'],
          ['Full-time school', 'Attending secondary (or earlier) school full-time since the start of the current school year'],
          ['Age', '"less than 20 years old as of June 30 of the year of the Competition"'],
          ['CJMO only', 'In grade ten or earlier'],
          ['Results are public', 'Writers agree that the CMS may publish their names and schools with the results']
        ] },
        { kind: 'p', mt: true, html: 'Both papers are three hours long and, the CMS says, "All official participants write at the same time and are proctored by their local school faculty or staff." The CJMO "is not as challenging as the CMO, however some problems may appear in both competitions", and the first CJMO was held in 2020.' }
      ]
    },
    {
      id: 'proof', tint: 'tint', eyebrow: 'What a solution looks like',
      h2: 'An olympiad answer is a proof: one of ours, in full',
      lede: 'Olympiad problems do not ask for a number. They ask the student to show that something is always true, or to find every answer and prove there are no others. Here is a standard exercise we use in the first month of olympiad training, with the proof we expect. The problem is a well-known one; the proof as written, and the notes on it, are ours.',
      body: [
        { kind: 'code', label: 'Problem 1 &middot; a standard exercise, with our complete proof', lang: 'text', code: PROOF },
        { kind: 'table', mt: true, caption: 'What each step of the proof is for (our teaching notes)', head: ['Step', 'Why it is there'], rows: [
          ['Reduce 30 to 2, 3 and 5', 'Turns one hard claim into three small ones, and says why that is enough'],
          ['The factorization', 'Makes the structure visible: three consecutive integers and one extra factor'],
          ['Consecutive integers for 2 and 3', 'A known fact, stated with its reason in one line'],
          ['Five cases for 5', 'Every remainder is covered; none is skipped because it "obviously" works'],
          ['The closing line about common factors', 'Without it, divisibility by 2, 3 and 5 separately would not prove divisibility by 30']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The tempting shortcut',
          left: [
            'A student who checks n = 1, 2, 3, 4 and 5 and finds 0, 30, 240, 1020 and 3120, all multiples of 30, has evidence. They do not have a proof, because there are infinitely many integers.',
            'On an olympiad paper, evidence earns little or nothing. The CMS publishes past solutions precisely so students can see what a complete argument looks like.'
          ],
          rightH3: 'How we mark it in class',
          right: [
            'We look for the claim, every case, and a reason for each step, in that order. A proof missing one of the five remainder cases is marked as incomplete, even if the missing case is easy.',
            'Students rewrite the proof until a classmate who has never seen it can follow it without asking a question.'
          ] }
      ]
    },
    {
      id: 'problems', tint: 'deep', eyebrow: 'Five more problems',
      h2: 'Five olympiad-style problems of ours, with complete proofs',
      lede: 'These are standard olympiad exercises of the kind every training program uses, written up by us; none is taken from a past CMO, CJMO, COMC or IMO paper, and the proofs as written are ours. They cover the four areas olympiads draw on: number theory (above), combinatorics, algebra and geometry. Try each for twenty minutes before reading the proof.',
      body: [
        { kind: 'p', html: '<b>Problem 2.</b> <i>A standard olympiad exercise, not from any CMS paper; the write-up is ours. Combinatorics: an invariant.</i> The numbers 1, 2, 3, ..., 10 are written on a board. A move erases any two numbers a and b and writes the single number |a - b| in their place. After nine moves one number is left. Can that number be 0?' },
        { kind: 'p', html: '<b>Proof that it cannot.</b> Look at the sum of all the numbers on the board. A move replaces a + b by |a - b|. The difference between these, (a + b) - |a - b|, is twice the smaller of a and b, which is even. So every move changes the sum by an even amount, and the parity of the sum never changes. At the start the sum is 1 + 2 + ... + 10 = 55, which is odd. So the last number is odd, and in particular it is not 0. The idea, finding a quantity that never changes, is called an invariant, and it settles questions that look as though they need a search through every sequence of moves.' },
        { kind: 'p', mt: true, html: '<b>Problem 3.</b> <i>A standard olympiad exercise, not from any CMS paper; the write-up is ours. Combinatorics: pigeonhole.</i> Five points are placed inside or on the boundary of a square of side 1. Prove that some two of them are at distance at most &radic;2 / 2 from each other.' },
        { kind: 'p', html: '<b>Proof.</b> Divide the square into four smaller squares of side 1/2 by joining the midpoints of opposite sides. Every point of the large square lies in at least one small square (a point on a dividing line can be assigned to either). Five points and four small squares means some small square contains at least two of the points, by the pigeonhole principle. Two points in a square of side 1/2 are at most the length of its diagonal apart, which is &radic;((1/2)<sup>2</sup> + (1/2)<sup>2</sup>) = &radic;2 / 2. So those two points are at distance at most &radic;2 / 2.' },
        { kind: 'p', mt: true, html: '<b>Problem 4.</b> <i>A standard olympiad exercise, not from any CMS paper; the write-up is ours. Algebra: an inequality.</i> Prove that for all positive real numbers a, b and c, (a + b)(b + c)(c + a) &ge; 8abc, and find when equality holds.' },
        { kind: 'p', html: '<b>Proof.</b> For positive x and y, (&radic;x - &radic;y)<sup>2</sup> &ge; 0 expands to x + y &ge; 2&radic;(xy). Apply this three times: a + b &ge; 2&radic;(ab), b + c &ge; 2&radic;(bc) and c + a &ge; 2&radic;(ca). All six quantities are positive, so the inequalities may be multiplied: (a + b)(b + c)(c + a) &ge; 8&radic;(a<sup>2</sup>b<sup>2</sup>c<sup>2</sup>) = 8abc. Equality in each step needs a = b, b = c and c = a, so equality holds exactly when a = b = c. Note the line about positivity: multiplying inequalities is only safe because every side is positive, and saying so is part of the proof.' },
        { kind: 'p', mt: true, html: '<b>Problem 5.</b> <i>A standard olympiad exercise, not from any CMS paper; the write-up is ours. Geometry: the angle bisector.</i> In triangle ABC, the bisector of angle A meets BC at D. Prove that BD / DC = AB / AC.' },
        { kind: 'p', html: '<b>Proof, by areas.</b> Triangles ABD and ADC share the height from A to the line BC, so the ratio of their areas is BD / DC. Now compute the same areas a second way, using two sides and the included angle. Let the angle at A be 2t, so the bisector makes angle t with each of AB and AC. Then area(ABD) = (1/2)(AB)(AD)sin t and area(ADC) = (1/2)(AC)(AD)sin t, so their ratio is AB / AC. Both expressions are the ratio of the same two areas, so BD / DC = AB / AC. Computing one quantity in two ways is among the most useful ideas in olympiad geometry.' },
        { kind: 'p', mt: true, html: '<b>Problem 6.</b> <i>A standard olympiad exercise, not from any CMS paper; the write-up is ours. Algebra: a functional equation.</i> Find all functions f from the real numbers to the real numbers such that f(x + y) = f(x) + 2y for all real x and y.' },
        { kind: 'p', html: '<b>Solution.</b> Put x = 0: f(y) = f(0) + 2y for every real y. Writing c = f(0), any solution must be f(x) = 2x + c. Conversely, if f(x) = 2x + c for a constant c, then f(x + y) = 2x + 2y + c and f(x) + 2y = 2x + c + 2y, which are equal. So the solutions are exactly the functions f(x) = 2x + c, for any real constant c. The second half, checking that the candidates really work, is the step students most often leave out, and on an olympiad it is part of the answer.' },
        { kind: 'two', mt: true,
          leftH3: 'Using the set',
          left: [
            'Spend twenty minutes on each problem before reading the proof, then write your own proof from memory the next day. The second write-up is where the learning happens.',
            'Problems 2 and 3 suit a strong Grade 8 or 9 student. Problems 4 to 6 suit students already writing the COMC.'
          ],
          rightH3: 'Six ideas worth naming',
          right: [
            'Reduce to primes. Find an invariant. Use pigeonhole. Combine simple inequalities. Compute one thing two ways. Substitute, then check.',
            'Olympiad training is largely the collection of ideas like these, practised until a student reaches for the right one without being told.'
          ] }
      ]
    },
    {
      id: 'years', tint: 'tint', eyebrow: 'A long road',
      h2: 'A road map by grade, for a student starting early',
      lede: 'The CMS runs contests for younger students too. This road map is ours, built from the CMS competitions table; the dates are the CMS\'s, and every stage after the COMC depends on an invitation the CMS alone decides.',
      body: [
        { kind: 'table', caption: 'Our grade-by-grade road map, using CMS contests and dates (read 22 October 2026)', head: ['Stage', 'CMS contests', 'Our training focus'], rows: [
          ['Grades 5 to 8', 'CJMC, the Canada Jay Mathematical Competition: Grade 8 or under, recommended for Grades 5 to 8; next on Nov. 19, 2026, registration by Nov. 12', 'Puzzles, number sense and the first short written arguments'],
          ['Grades 7 and up', 'CLMC, the Canada Lynx Competition, held on Oct. 1 in 2026', 'Speed and accuracy on multiple choice'],
          ['Grades 8 to 10', 'COMC each October; the CJMO if invited', 'Calculator-free algebra and first proofs; one written proof a week'],
          ['Grades 10 to 12', 'COMC each October; the CMO and the APMO if invited', 'Full olympiad training: the four areas, past CMO papers, timed three-hour sittings'],
          ['If selected', 'Math Team Canada for the IMO', 'The CMS team camp, not us']
        ] },
        { kind: 'p', mt: true, html: 'Students do not have to choose one contest family. The CMS says students may register for more than one of its competitions in a year, and many of ours also write the CEMC contests from the University of Waterloo, whose written papers are good proof practice: see our pages on the <a class="ag-inline-link" href="/euclid-contest-preparation">Euclid</a>, <a class="ag-inline-link" href="/fermat-contest-preparation">Fermat</a> and <a class="ag-inline-link" href="/cemc-waterloo-contests-preparation">CEMC year</a>. The 2026 COMC is on Thursday, October 29, 2026, and its registration closed on Thursday, October 22, 2026, so a student starting now is preparing for the 2027 COMC.' }
      ]
    },
    {
      id: 'training', tint: 'deep', eyebrow: 'How training works',
      h2: 'What olympiad training looks like week to week',
      lede: 'The CMS advises invited students to "prepare specifically for the competition" and names past problem sets and solutions as the most important resource. Our weekly rhythm is built around that advice; the rhythm itself is ours.',
      body: [
        { kind: 'table', caption: 'A week of olympiad training in our classes (ours)', head: ['Session', 'What happens'], rows: [
          ['Class 1', 'One idea taught properly (an invariant, a pigeonhole argument, a factorization), then three problems that use it'],
          ['Between classes', 'One proof written at home, in full, and submitted'],
          ['Class 2', 'Last week\'s proofs returned marked; one past olympiad problem attempted for forty minutes, then discussed'],
          ['Every month', 'A timed three-hour sitting of five problems, matching the CMO format the CMS describes'],
          ['Every term', 'One full past CMO or CJMO paper from the CMS archive, marked as strictly as we can']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why proofs every week',
          left: [
            'The 2026 statistics show that even invited students solved few problems completely. The gap is rarely knowledge; it is the ability to turn an idea into a complete argument under time.',
            'That skill only improves through writing proofs and having them marked, week after week, for months.'
          ],
          rightH3: 'What we do not do',
          right: [
            'We do not hand out answer keys or tricks to memorize. We teach students how to think through a problem they have never seen, which is the only thing an olympiad tests.',
            'We do not claim any influence over invitations, and we never promise a CMO place, a medal or a team spot.'
          ] }
      ]
    },
    {
      id: 'after', tint: 'tint', eyebrow: 'Camps and scholarships',
      h2: 'Camps and scholarships the CMS lists',
      lede: 'The CMS publishes some opportunities connected to the olympiad path. We list them as the CMS describes them; decisions belong to the CMS and to the universities.',
      body: [
        { kind: 'table', caption: 'Opportunities named on CMS pages (read 22 October 2026)', head: ['Opportunity', 'As the CMS describes it'], rows: [
          ['Canada Math Camp', 'A summer camp at the University of Toronto for roughly two dozen Canadian students no older than Grade 10, chosen on COMC performance'],
          ['Regional CMS math camps', 'Summer camps at universities and CÉGEPs across Canada, some by invitation'],
          ['University of Toronto fellowship', 'A full-ride undergraduate fellowship for Canadian IMO team members, as listed on the CMS scholarships page'],
          ['University of Waterloo Olympiad Scholarship', 'For incoming students with a medal standing at the IMO or the other international olympiads it lists']
        ] },
        { kind: 'p', mt: true, html: 'Scholarship rules and deadlines change, and the CMS page itself shows when each entry was last updated, so families should read the university pages directly before relying on any of this. Our reading only: these are rewards for a very small number of students, and the reason to train for olympiads is the mathematics, which is useful whether or not an invitation ever arrives.' },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://cms.math.ca/competitions/comc/comc2026/prizes-and-awards/" rel="noopener" target="_blank">CMS, COMC Prizes and Awards</a>, <a class="ag-inline-link" href="https://cms.math.ca/education/math-camps/" rel="noopener" target="_blank">CMS, Math Camps</a> and <a class="ag-inline-link" href="https://cms.math.ca/competitions/scholarship-opportunities/" rel="noopener" target="_blank">CMS, Scholarship Opportunities</a>, read 22 October 2026.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where students start',
    h2: 'Four stages of an olympiad student',
    lede: 'Our stages, used to place a new student.',
    table: { caption: 'From answer-getter to proof-writer (ours)', head: ['Stage', 'What we see'], rows: [
      ['1. Answer-getter', 'Finds answers quickly; explains them with examples, not proofs'],
      ['2. Case-checker', 'Writes arguments but misses cases or the converse'],
      ['3. Proof-writer', 'Writes complete proofs to problems at COMC Part C level'],
      ['4. Olympiad solver', 'Makes progress on past CMO problems under time and writes it up cleanly']
    ] },
    left: { h3: 'For parents', ps: [
      'Almost every strong student starts at stage 1, because school rewards correct answers rather than complete arguments. The move to stage 3 usually takes a year of weekly proof writing.',
      'Olympiad training is worth doing for its own sake. The habit of proving things carefully pays off in every university mathematics or computer science course.'
    ] },
    right: { h3: 'For students', ps: [
      'When you think you have a proof, ask what would happen in the case you did not check.',
      'After finding all the answers, prove there are no others.'
    ] }
  },

  catalogue: {
    eyebrow: 'Wider catalogue',
    h2: 'Nine courses along the olympiad road',
    lede: 'All taught live online by a teacher who follows the student, in a batch or one to one, for students anywhere in Canada.',
    bands: [
      { num: 'I', h3: 'Early years', sub: 'Grades 5 to 8', courses: [
        { code: 'CMOC / EARLY / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Ratio, geometry and algebra done thoroughly.' },
        { code: 'CMOC / EARLY / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Logic and patterns before formal proof.' },
        { code: 'CMOC / EARLY / 03', slug: 'jee-foundation-maths-course-class-8-10', title: 'Proof foundations', blurb: 'First written arguments for Grades 8 to 10.' }
      ] },
      { num: 'II', h3: 'High school', sub: 'Grades 9 to 12', courses: [
        { code: 'CMOC / HS / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'The curriculum the COMC builds on.' },
        { code: 'CMOC / HS / 02', slug: 'ontario-grade-12-university-math-mhf4u-mcv4u-course', title: 'Ontario Grade 12 university math', blurb: 'MHF4U and MCV4U, taught beside school.' },
        { code: 'CMOC / HS / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Counting and probability in depth.' }
      ] },
      { num: 'III', h3: 'Beyond', sub: 'University math and informatics', courses: [
        { code: 'CMOC / NEXT / 01', slug: 'college-mathematics-complete-masterclass', title: 'University mathematics', blurb: 'Analysis and linear algebra, an early look.' },
        { code: 'CMOC / NEXT / 02', slug: 'ccc-junior-and-senior-preparation-course', title: 'CCC Junior and Senior', blurb: 'The informatics road through CEMC\'s CCC.' },
        { code: 'CMOC / NEXT / 03', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Testing conjectures in Python before proving them.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Class format',
    h2: 'Live olympiad classes for students across Canada',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Evening sessions set in Eastern time and shown in each family\'s zone.' },
      { time: 'Weekends', l: 'Three-hour morning sittings for timed olympiad papers.' },
      { time: '1-on-1', l: 'A private plan for a student already near the COMC cut.' }
    ],
    cells: [
      { h3: 'A proof every week', p: 'Written at home, marked and returned.' },
      { h3: 'Original problems', p: 'Olympiad-style sets written by our teachers.' },
      { h3: 'Past papers, properly', p: 'CMS archive papers sat under time.' },
      { h3: 'Ideas by name', p: 'Invariants, pigeonhole, two-way counting and more.' },
      { h3: 'Any province', p: 'One class shared from Whitehorse to Halifax.' },
      { h3: 'Group or individual', p: 'Train in a batch of fifteen to twenty, or alone with a teacher.' }
    ]
  },

  projectsH2: 'Projects from students who also code',
  projectsLede: 'Some of our olympiad students also learn to program, often to explore a pattern before proving it. A selection is below, and the <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'Google reviews from our families, reproduced as written.',

  fees: {
    h2: 'Fees',
    lede: 'Nobody can buy a place at a CMS olympiad, and we do not sell one. What the monthly fee pays for is live teaching, with no term to sign up for.',
    free: ['A free first class', 'One olympiad problem proved together', 'No card required'],
    group: ['Fifteen to twenty in a batch', 'Students at a similar stage', 'Choose your batch', 'Monthly, no contract'],
    one: ['A private teacher', 'Paced to the next COMC', 'Built on your own proofs']
  },

  faq: {
    eyebrow: 'Families ask',
    h2: 'The Canadian Math Olympiad: questions answered',
    items: [
      { q: 'What is the Canadian Mathematical Olympiad?', a: 'The CMO is the Canadian Mathematical Society national olympiad for advanced high school students. It is invitation-only, has five questions in three hours, and is the most important competition for students hoping to be selected for Math Team Canada at the IMO.' },
      { q: 'How does a student get invited to the CMO?', a: 'Mainly through the COMC. The CMS CMO page says the top 75 to 100 qualifying students from the COMC Competitive Division are invited, with a few invitations through the Alberta High School Mathematics Competition, the AMQ secondary concours and the APMO team.' },
      { q: 'What is the CJMO?', a: 'The Canadian Junior Mathematical Olympiad, held at the same time as the CMO. The CMS invites up to 20 top COMC scorers in Grade 10 or below who are not invited to the CMO. It is less challenging, though some problems may appear on both papers.' },
      { q: 'When is the 2027 CMO?', a: 'The CMS had not published a 2027 date on 22 October 2026. The 2026 CMO and CJMO were held on Thursday, March 12, 2026, and the CMS says it plans to hold the olympiads earlier from 2027, so check the CMS CMO page.' },
      { q: 'How is the Math Team Canada for the IMO chosen?', a: 'The CMS says team members are chosen based on their results in previous competitions and their eligibility to represent Canada at the IMO, and names the COMC and the CMO as two important Canadian competitions on that road. The APMO results are another measure the CMS uses.' },
      { q: 'Is the Repechage still a route to the CMO?', a: 'No. The 2026 Repechage was the last one. The CMS says it will make up for it from 2027 by sending more olympiad invitations straight from COMC results.' },
      { q: 'How hard is the CMO?', a: 'In 2026 the CMS reported a CMO mean of 11.1 and a median of 11 out of 35 across 95 competitors, and a CJMO median of 18 out of 35 across 18 competitors. The CMS warns that success needs mathematics beyond what most schools teach.' },
      { q: 'Who is eligible for the CMO?', a: 'Official participants must meet the IMO rules for representing Canada, which the CMS sets out as citizenship or Canadian schooling, must not yet be at university or have finished secondary school, must attend school full-time and must be under 20 as of June 30 of the competition year.' },
      { q: 'Can you guarantee a CMO invitation or a place on the team?', a: 'No. Invitations and team selection are decided by the CMS alone. We teach olympiad mathematics and proof writing, and we make no promise of any invitation, score or medal.' },
      { q: 'When are your olympiad classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We plan in Eastern time and confirm each class in your own province\'s time.' }
    ]
  },

  elsewhere: {
    eyebrow: 'More to read',
    h2: 'Related pages',
    lede: 'Other pages for students in Canada on the contest and olympiad road.',
    items: [
      { href: '/maths-olympiad-classes-online', label: 'Olympiad classes', p: 'How the world\'s math olympiads compare.' },
      { href: '/cemc-waterloo-contests-preparation', label: 'CEMC Waterloo contests', p: 'The University of Waterloo contest year.' },
      { href: '/euclid-contest-preparation', label: 'Euclid Contest', p: 'Written proof practice in April.' },
      { href: '/fermat-contest-preparation', label: 'Fermat Contest', p: 'A February warm-up for Grade 11 problem solvers.' },
      { href: '/math-olympiad-amc-tutoring', label: 'AMC and AIME', p: 'AMC 10, AMC 12 and AIME, written by some students in Canada too.' },
      { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation', p: 'The informatics olympiad road in Canada.' },
      { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada', p: 'School math support in any province.' },
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'Where our Canada pages begin.' },
      { href: '/we-teach-you-how-to-think', label: 'How we teach thinking', p: 'Why proofs, not answer keys.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'The first class takes one of our olympiad problems and proves it together, step by step, with the teacher marking the proof as an olympiad marker would. By the end you will have seen how your child argues, where they sit on our four-stage ladder, and what twelve months of training before the next COMC would involve.',
    readFirst: 'Want to read first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> follows a live class, and the <a class="ag-inline-link" href="/courses">course list</a> has each syllabus.',
    note: 'Classes are live on video, taught by our teachers in India, so students join from anywhere in Canada. For the fastest answer, message us on WhatsApp.',
    formNote: 'The first class is free; no card and no contract.'
  },

  footer: {
    cols: [
      { h4: 'Olympiads and contests', links: [
        { href: '/maths-olympiad-classes-online', label: 'Olympiad classes' },
        { href: '/cemc-waterloo-contests-preparation', label: 'CEMC contests' },
        { href: '/math-olympiad-amc-tutoring', label: 'AMC and AIME' },
        { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada' },
        { href: '/euclid-contest-preparation', label: 'Euclid Contest' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'A claim, every case, a reason'
  },

  personalityCss: `
.ag-root.ag-cmoc .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-cmoc .ag-capsule { border-left-width: 3px; border-radius: 0; }
.ag-root.ag-cmoc .ag-section-head h2 { max-width: 42ch; }
.ag-root.ag-cmoc .ag-table caption { text-align: left; font-weight: 600; font-style: italic; }
.ag-root.ag-cmoc .ag-band-head h3 { letter-spacing: -0.016em; }
.ag-root.ag-cmoc .ag-slots { gap: 1.3rem; }
`,

  dossier: {
    curriculumAuthority: 'Canadian Mathematical Society CMO and CJMO, IMO, APMO, Repechage, Competitions, Scholarship Opportunities and Math Camps pages, and the COMC 2026 home, Changes and Prizes and Awards pages, read raw on 22 October 2026: invitation-only entry; CJMO for Grade 10 or below at the same sitting; three-hour papers, five questions; 2026 CMO and CJMO on Thursday, March 12, 2026; 2026 statistics (CMO top 31, mean 11.1, median 11, top quartile 16, 95 competitors; CJMO top 30, mean 17.2, median 18, top quartile 23, 18 competitors, all out of 35); invitation routes and counts as each page states them; invitations normally in February; eligibility including under 20 as of June 30; first CJMO in 2020; IMO selection sentence; COMC and CMO as two important competitions on the road; 2026 IMO 1 gold, 3 silver, 2 bronze, 13th of 117; IMO 2027 July 16 to 26 in Budapest; APMO about 20 to 30 invited, four hours, five questions of 7 points; Repechage discontinued and more direct COMC invitations from 2027; CJMC Nov. 19, 2026 with registration by Nov. 12; Canada Math Camp about 24 students; the two scholarships listed by the CMS.',
    localProject: 'A complete model proof written by us that n to the fifth minus n is divisible by 30 (reduction to 2, 3 and 5, factorization, five remainder cases), with step-by-step teaching notes; five more olympiad-style problems with complete proofs (parity invariant on |a - b| moves from 1 to 10, pigeonhole with five points in a unit square, (a + b)(b + c)(c + a) at least 8abc, the angle bisector theorem by areas, and f(x + y) = f(x) + 2y giving f(x) = 2x + c); a grade-by-grade road map using CMS contests; a weekly training rhythm. Lesson family: proof as the product.',
    requiredMentions: ['Two important Canadian competitions on the road to the IMO', 'All students require an invitation from the Canadian Mathematical Society in order to participate', 'Invitations are normally sent out in February', 'Anyone invited to the CMO is not invited to the CJMO', 'the October COMC is now the whole qualifying round', 'a typical invited student solved about one and a half problems completely in three hours', 'success will require mathematics at a higher level than is taught in most schools', 'An olympiad answer is a proof: one of ours, in full', 'Find an invariant', 'A claim, every case, a reason'],
    sources: [
      { claim: 'CMO and CJMO description, invitation-only entry, three-hour March sittings to 2026, 2026 date and statistics, invitation routes and counts, February invitations, CJMO rules, eligibility, preparation advice, first CJMO in 2020.', url: 'https://cms.math.ca/competitions/cmo/' },
      { claim: 'IMO description, over forty years of Canadian participation, team selection sentence, COMC and CMO on the road to the IMO, 2026 results.', url: 'https://cms.math.ca/competitions/imo/' },
      { claim: 'IMO 2027 dates and city, CJMC and CLMC details, registration opening, more than one competition per year.', url: 'https://cms.math.ca/competitions/' },
      { claim: 'APMO invitations, format and its role in team selection.', url: 'https://cms.math.ca/competitions/apmo/' },
      { claim: 'Repechage discontinued, more direct invitations from 2027, olympiads to be held earlier.', url: 'https://cms.math.ca/competitions/repechage/' },
      { claim: 'Invitation-only beyond the COMC, citizenship note, CMO five questions in three hours, IMO six questions over two days, team camp, Canada Math Camp, approximate 100 invitations.', url: 'https://cms.math.ca/competitions/comc/comc2026/prizes-and-awards/' },
      { claim: 'COMC 2026 date and about 100 to 120 invitations to the CMO or CJMO.', url: 'https://cms.math.ca/competitions/comc/comc2026/' },
      { claim: 'Only Competitive Division writers eligible for prize money and potential CMO invitations.', url: 'https://cms.math.ca/competitions/comc/comc2026/changes/' },
      { claim: 'University of Toronto fellowship and University of Waterloo Olympiad Scholarship listings.', url: 'https://cms.math.ca/competitions/scholarship-opportunities/' }
    ],
    rejectedClaims: [
      'Any past CMO, CJMO, COMC, APMO or IMO problem or solution: never reproduced; the page links to CMS pages and uses problems we wrote.',
      'Names of champions, medallists, team members, leaders, award winners or authors on CMS pages: not reproduced.',
      'Prize money amounts: omitted, as the CMS states them in a named currency.',
      'EGMO and any gender-scoped routes or figures: left out under the cluster rules.',
      'The CMO page line that top students can readily expect scholarship and recruitment offers: not repeated, as it reads as a promise.',
      'A 2027 CMO date or month: not published on 22 October 2026, so not stated.',
      'A reconciled or summed invitation count: each CMS figure is attributed to its own page.',
      'The University of Toronto fellowship deadline shown by the CMS (January 15, 2026): stale, so not printed.',
      'That our classes lead to invitations, medals, camp places, scholarships or team selection: refused.',
      'Any affiliation with the Canadian Mathematical Society: none, and the page says so.'
    ]
  }
};
