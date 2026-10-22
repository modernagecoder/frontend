'use strict';
// Canada math and coding contest calendar, 2026 to 2027 (ag- contest door; Canada cluster Plan 2, row 53).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Sources, read raw on 22 October 2026:
//  - cemc.uwaterloo.ca/contests (keyword-research-2026-09/ca/src/cemc/contests.txt): "contest dates and ordering
//    deadlines for the contest year 2026/27"; every 2026/27 date and ordering deadline in the main table (Americas
//    dates); grade bands per contest (BCC 5 to 10, CSIMC 9 to 12, CCC 9 to 12, PCF 9 to 11, Euclid 12, FGH 9 to 11,
//    CTMC 9 to 12, Gauss 7 to 8, Team Up 6 to 8); English-only vs English and French lines; PCF deadline for schools
//    "in Canada" Tuesday, February 9, 2027 (the source puts a dash before the date; not reproduced).
//  - per-contest pages (src/cemc/): bcc ("Time allowed for completion is 45 minutes."), csimc ("9 questions; 6 are
//    answer only and 3 are full-solution.", "Time allowed for completion is 2 hours.", Grades 9 and 10 CIMC, 11 and 12
//    and CEGEP CSMC), ccc (5 questions, 3 hours, level by skill "regardless of their grade"), pcf ("25
//    multiple-choice questions.", 60 minutes, Pascal Grade 9, Cayley 10, Fermat 11), euclid ("Students in their final
//    year of secondary school or CEGEP students.", "10 questions; a mix of final answer only and full-solution.", 2.5
//    hours), fgh ("4 questions; a mix of final answer-only and full-solution.", 75 minutes), ctmc ("Teams of six
//    secondary school students in any combination of Grades 9-12.", three events of 45 min each), gauss (Grades 7 and
//    8, 25 multiple-choice, 60 minutes).
//  - cemc.uwaterloo.ca/contests/team-up-challenge (src-pilots/canada-math-and-coding-contest-calendar/
//    team-up-challenge.txt): "Students in Grades 6, 7, or 8, grouped into teams of four."; "consists of four events";
//    "Educators may run this contest any time on or after June 1, 2027."; "This contest is available free of charge.";
//    "The CEMC does not collect results." No total length is published, so none is printed.
//  - cemc.uwaterloo.ca/contests/how-contests-work (src/cemc/how-contests-work.txt): "The CEMC offers 13 Mathematics
//    and 3 Computing contests for learners of grades 5 to 12."; account review "can take up to three weeks"; contests
//    administered "as close to the beginning of the school day as possible in the school's time zone"; "a contest can
//    never be written before the official contest date".
//  - cms.math.ca COMC 2026 pages (src/cms/comc.txt, comc-eligibility.txt, comc-changes.txt): "Thursday, October 29th"
//    in Canada and the Americas; "it is 2.5 hours long"; registration last day "Thursday, October 22nd"; "The COMC is
//    open to students in all locations, at all grade levels."; Competitive Division start "between 1:00 p.m. and 3:30
//    p.m. EDT (UTC-4)"; "Only students in the Competitive Division will be eligible for prize money and potential
//    invitations to the CMO."; Repechage "has been discontinued as of 2026."; "No mobile phones, calculators or other
//    electronic devices are permitted." cms/cmo.txt: "These 3-hour competitions are held each March at a selected time
//    and date." The 2027 CMO date is not published, so it is not printed.
//  - facts-geo.md section 3 (tzdb 2026e) for the offsets in the COMC start-window table.
// Our own material, labelled on the page: the COMC start window converted to each Canadian zone on 29 October 2026;
// the "apply three weeks earlier" dates (21 January 2027 for the CCC deadline, 19 January 2027 for the PCF deadline,
// 18 February 2027 for Euclid and FGH, 1 April 2027 for Gauss); the sample Grade 10 season and its gaps (COMC to CIMC
// 20 days, CIMC to CCC 91 days or 13 weeks, CCC to Cayley 7 days, Cayley to Galois 42 days, Galois to in-school CTMC
// 7 days); the grade-by-grade table assembled from CEMC's eligibility lines.
// Lesson family: planning backwards from fixed deadlines.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'CALENDAR', blurb: 'Every CEMC contest date for 2026 to 2027 with grade, length and ordering deadline, plus the COMC and the CCC, checked against the organisers\' own pages.' },
  slug: 'canada-math-and-coding-contest-calendar',
  code: 'cmcc',
  accent: '#853848',
  accentRationale: 'Canada contest calendar: a muted claret #853848, allocated for this row and at least 6 RGB units from every site accent and 14 from every other Canada accent, contrast 7.46 on the paper #FBF8F2 and above 6.4 on all three paper tints',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Canada contest calendar 2026 to 2027',
  title: 'Canada Contest Calendar 2026 to 2027: CEMC, CCC and COMC',
  description: 'Every 2026 to 2027 CEMC contest date with its grade, length and school deadline, plus CMS\'s COMC and the 2027 CCC, taken from the organisers\' own pages.',
  ogDescription: 'One table for the 2026 to 2027 season: CEMC\'s Waterloo math and computing contests from November 2026 to June 2027, the COMC on 29 October 2026, and the deadlines schools work to.',
  twitterDescription: 'The 2026 to 2027 Canadian math and coding contest calendar, from CEMC and CMS pages.',
  pageName: 'Canada Math and Coding Contest Calendar',
  webPageDescription: 'A calendar for Canadian students, parents and teachers of the 2026 to 2027 math and computing contests run by CEMC at the University of Waterloo and the Canadian Mathematical Society, with grades, lengths and deadlines.',
  courseDescription: 'Live online preparation for Canadian math and computing contests, including the Canadian Computing Competition, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Canada', href: '/coding-classes-in-canada' }],
  crumbLabel: 'Contest calendar 2026 to 2027',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#calendar', label: 'The calendar' },
    { href: '#deadlines', label: 'Deadlines' },
    { href: '#grades', label: 'By grade' },
    { href: '#comc', label: 'COMC' },
    { href: '#season', label: 'A sample season' }
  ],
  eyebrow: 'Canada &middot; Math and computing contests &middot; 2026 to 2027',
  h1: 'Canada\'s math and coding contest calendar, 2026 to 2027',
  lede: 'Contest season in Canada is not one date but a chain of them, and most families learn about a contest a week after the school\'s order has closed. This page puts the whole 2026 to 2027 season in one place. The University of Waterloo\'s Centre for Education in Mathematics and Computing (CEMC) runs the Waterloo math contests and both computing contests; the Canadian Mathematical Society (CMS) runs the Canada Open Mathematics Challenge. Each row below gives the organiser, the full date with its year, the grades, the length and the deadline, taken from the organiser\'s own page on 22 October 2026.',
  secondaryCta: { href: '#calendar', label: 'Jump to the calendar' },
  wa: 'Hello Modern Age Coders, we are planning a contest season in Canada for my child. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; dates checked against CEMC and CMS pages on 22 October 2026',
  spec: [
    ['Organisers', 'CEMC (Waterloo) and CMS'],
    ['Season', 'October 2026 to June 2027'],
    ['First CEMC contest', '18 November 2026'],
    ['CCC 2027', '17 February 2027'],
    ['Last CEMC event', 'From 1 June 2027'],
    ['Entry', 'Through schools'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'CEMC\'s 2026 to 2027 contests run from the CIMC and CSMC on 18 November 2026 to the Team Up Challenge from 1 June 2027, with the CCC on 17 February 2027; CMS holds the COMC on 29 October 2026. Modern Age Coders coaches students for them live online, in a batch or one to one, through courses such as CCC Junior and Senior Preparation.',

  picks: {
    eyebrow: 'Prepare with a teacher',
    h2: 'Three courses that follow this calendar',
    lede: 'One for the February 2027 computing contest, one for the Waterloo math contests, and one for students aiming at the olympiad end of the math season.',
    items: [
      { course: 'ccc-junior-and-senior-preparation-course', code: 'CAL / 01', title: 'CCC Junior and Senior Preparation', note: 'For teenagers who code. Built backwards from the 17 February 2027 CCC, in Python or C++, with timed practice papers in January.' },
      { course: 'waterloo-math-contests-gauss-to-euclid-course', code: 'CAL / 02', title: 'Waterloo math contests, Gauss to Euclid', note: 'Grades 7 to 12. The CEMC math contests in order, from the November 2026 CIMC and CSMC to the May 2027 Gauss.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'CAL / 03', title: 'Competition math', note: 'For strong students writing the COMC and Euclid, where full written solutions matter as much as answers.' }
    ]
  },

  sections: [
    {
      id: 'calendar', tint: 'tint', eyebrow: 'The calendar',
      h2: 'Every 2026 to 2027 date, in order',
      lede: 'CEMC publishes one table for its whole contest year, which it labels 2026/27, and CMS publishes the COMC separately. We have merged them in date order. Dates are those for schools in North and South America; CEMC lists later dates for writers elsewhere.',
      body: [
        { kind: 'table', caption: 'Canadian math and computing contests, 2026 to 2027, from CEMC\'s contests overview and contest pages and CMS\'s COMC 2026 pages (read 22 October 2026)', head: ['Date (the Americas)', 'Contest and organiser', 'Grades', 'Length and format', 'School deadline'], rows: [
          ['Thursday 29 October 2026', 'Canada Open Mathematics Challenge (COMC 2026), CMS', 'Open to all grades', '2.5 hours, on paper', 'Registration closed Thursday 22 October 2026'],
          ['Monday 9 to Friday 20 November 2026', 'Beaver Computing Challenge (BCC 2026), CEMC', '5 to 10, in three levels', '45 minutes; 12 or 15 multiple-choice questions, online', 'Monday 26 October 2026'],
          ['Wednesday 18 November 2026', 'Canadian Intermediate and Senior Mathematics Contests (CIMC and CSMC 2026), CEMC', 'CIMC 9 and 10; CSMC 11, 12 and CEGEP', '2 hours; 9 questions, 6 answer only and 3 full solution', 'Thursday 22 October 2026'],
          ['Wednesday 17 February 2027', 'Canadian Computing Competition (CCC 2027), CEMC', '9 to 12 on CEMC\'s overview; Junior or Senior chosen by skill', '3 hours; 5 programming problems, online', 'Thursday 11 February 2027'],
          ['Tuesday 23 and Wednesday 24 February 2027', 'Pascal, Cayley and Fermat Contests (PCF 2027), CEMC', 'Pascal 9, Cayley 10, Fermat 11', '60 minutes; 25 multiple-choice questions', 'Tuesday 9 February 2027 for schools in Canada'],
          ['Tuesday 6 April 2027', 'Euclid Contest (Euclid 2027), CEMC', 'Final year of secondary school, or CEGEP', '2.5 hours; 10 questions, answer only and full solution', 'Thursday 11 March 2027'],
          ['Wednesday 7 April 2027', 'Fryer, Galois and Hypatia Contests (FGH 2027), CEMC', 'Fryer 9, Galois 10, Hypatia 11', '75 minutes; 4 questions, answer only and full solution', 'Thursday 11 March 2027'],
          ['Tuesday 13 April 2027 at UWaterloo; Wednesday 14 April 2027 or later in school', 'Canadian Team Mathematics Contest (CTMC 2027), CEMC', 'Teams of six from Grades 9 to 12', 'Three events of 45 minutes each: individual, team and relay', 'Lottery for UWaterloo places Thursday 19 November 2026; in-school Monday 12 April 2027'],
          ['Monday 10 to Friday 21 May 2027', 'Gauss Contests (Gauss 2027), CEMC', '7 and 8, with younger students welcome', '60 minutes; 25 multiple-choice questions', 'Thursday 22 April 2027'],
          ['Tuesday 1 June 2027 or later', 'Team Up Challenge (2027), CEMC', '6 to 8, in teams of four', 'Four team events run by the school; CEMC gives no total length', 'Thursday 27 May 2027']
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests" rel="noopener" target="_blank">CEMC, Mathematics and computing contests, 2026/27 table</a>, each CEMC contest page, and <a class="ag-inline-link" href="https://cms.math.ca/competitions/comc/" rel="noopener" target="_blank">CMS, COMC 2026</a>, all read 22 October 2026. Organisers can change details; check the contest page before relying on a date. Modern Age Coders is not connected with CEMC, CMS or the University of Waterloo.' },
        { kind: 'two', mt: true,
          leftH3: 'Reading the table',
          left: [
            'The date column is the day of writing; the last column is the day the school\'s order or registration must be in. For a student, the second date matters more. A family that hears about the Euclid in late March 2027 has already missed CEMC\'s ordering deadline of Thursday 11 March 2027.',
            'Two rows are windows, not single days. The Beaver runs across two weeks in November 2026 and the Gauss across two weeks in May 2027; each school picks its own day inside them.'
          ],
          rightH3: 'What is not on the table',
          right: [
            'The Canadian Mathematical Olympiad and its junior version are invitation-only and follow the COMC. CMS says these "3-hour competitions are held each March at a selected time and date", but it had not published the 2027 date when we checked, so we print none.',
            'The Canadian Computing Olympiad is also by invitation, for top CCC Senior writers, held at the University of Waterloo each spring according to CEMC. We leave invitation events out of a calendar that families plan from.'
          ] }
      ]
    },
    {
      id: 'deadlines', tint: 'deep', eyebrow: 'Deadlines first',
      h2: 'The 2026 to 2027 deadlines, and when to start asking',
      lede: 'Every CEMC contest is ordered by a school, and a school that has never ordered one needs a CEMC account first. CEMC warns that account creation "can take up to three weeks" to be reviewed. The right-hand column is our own arithmetic: the latest sensible date for a first-time school to apply.',
      body: [
        { kind: 'table', caption: 'School deadlines in date order, from CEMC and CMS (read 22 October 2026); the last column is our calculation, three weeks before each deadline', head: ['Deadline', 'For', 'Organiser', 'A new school should apply for a CEMC account by (ours)'], rows: [
          ['Thursday 22 October 2026', 'CIMC and CSMC orders; COMC registration', 'CEMC; CMS', 'Already passed'],
          ['Monday 26 October 2026', 'Beaver Computing Challenge orders', 'CEMC', 'Already passed'],
          ['Thursday 19 November 2026', 'Lottery for CTMC places at UWaterloo', 'CEMC', 'Thursday 29 October 2026'],
          ['Tuesday 9 February 2027', 'Pascal, Cayley and Fermat orders, schools in Canada', 'CEMC', 'Tuesday 19 January 2027'],
          ['Thursday 11 February 2027', 'Canadian Computing Competition orders', 'CEMC', 'Thursday 21 January 2027'],
          ['Thursday 11 March 2027', 'Euclid and FGH orders', 'CEMC', 'Thursday 18 February 2027'],
          ['Monday 12 April 2027', 'In-school CTMC orders', 'CEMC', 'Monday 22 March 2027'],
          ['Thursday 22 April 2027', 'Gauss orders', 'CEMC', 'Thursday 1 April 2027'],
          ['Thursday 27 May 2027', 'Team Up Challenge orders', 'CEMC', 'Thursday 6 May 2027']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the dates bunch where they do',
          left: [
            'Three deadlines fall inside one week in February 2027: Pascal, Cayley and Fermat on the 9th, then the CCC on the 11th. A school that orders both often does it in one sitting, so a student who wants the CCC as well as a math contest should ask the contest teacher in January, not February.',
            'The Euclid and the Fryer, Galois and Hypatia contests share a deadline of Thursday 11 March 2027 and fall on consecutive days in early April 2027, the Euclid on the Tuesday and FGH on the Wednesday.'
          ],
          rightH3: 'The rule that has no exceptions',
          right: [
            'CEMC states that "a contest can never be written before the official contest date." A school can sometimes arrange a later date for a serious school-wide clash by contacting CEMC, but never an earlier one.',
            'CEMC also wants each contest started early in the school\'s own day, in its own time zone, which is why a student in Vancouver and a student in Halifax write the same paper at very different moments of the same day.'
          ] }
      ]
    },
    {
      id: 'grades', tint: 'tint', eyebrow: 'By grade',
      h2: 'Which contests a student can write in each grade',
      lede: 'CEMC says it offers "13 Mathematics and 3 Computing contests for learners of grades 5 to 12". The table assembles CEMC\'s eligibility lines grade by grade; the COMC row is from CMS. Students working ahead may write up a level, as CEMC\'s how-contests-work page explains, but CEMC does not let a student write below their grade.',
      body: [
        { kind: 'table', caption: 'Contests open to each grade in 2026 to 2027 (our arrangement of CEMC\'s and CMS\'s eligibility lines, read 22 October 2026)', head: ['Grade', 'Computing (CEMC)', 'Math, individual (CEMC)', 'Math, team (CEMC)', 'CMS'], rows: [
          ['5', 'BCC Grade 5/6', '', '', 'COMC'],
          ['6', 'BCC Grade 5/6', '', 'Team Up Challenge', 'COMC'],
          ['7', 'BCC Grade 7/8', 'Gauss (Grade 7)', 'Team Up Challenge', 'COMC'],
          ['8', 'BCC Grade 7/8', 'Gauss (Grade 8)', 'Team Up Challenge', 'COMC'],
          ['9', 'BCC Grade 9/10; CCC', 'Pascal; Fryer; CIMC', 'CTMC', 'COMC'],
          ['10', 'BCC Grade 9/10; CCC', 'Cayley; Galois; CIMC', 'CTMC', 'COMC'],
          ['11', 'CCC', 'Fermat; Hypatia; CSMC', 'CTMC', 'COMC'],
          ['12', 'CCC', 'Euclid (final year); CSMC', 'CTMC', 'COMC']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'One per group, each school year',
          left: [
            'CEMC lets a student write only one contest from each family in a year: one of Pascal, Cayley and Fermat; one of Fryer, Galois and Hypatia; the CIMC or the CSMC; one Beaver level; one Gauss. If a student writes two in the same family, CEMC records only the one that matches the student\'s grade.',
            'Families are separate, so a Grade 10 student can, in one year, write the Cayley in February, the Galois in April and the CIMC in November.'
          ],
          rightH3: 'The CCC is the exception to grade rules',
          right: [
            'CEMC\'s overview tags the CCC for Grades 9 to 12, but its own CCC page says the Junior or Senior level is chosen by programming skill, regardless of grade. CEMC lets any full-time student take part, so a younger student who codes well can write it through their school.',
            'The Beaver is the computing contest for Grades 5 to 10, and needs no programming at all. Our <a class="ag-inline-link" href="/ccc-junior-guide">CCC Junior guide</a> explains the step between the two.'
          ] }
      ]
    },
    {
      id: 'formats', tint: 'deep', eyebrow: 'Formats',
      h2: 'Multiple choice, full solution, or code: how the papers differ',
      lede: 'The contests on this calendar ask for three quite different kinds of answer, and preparing for one is not the same as preparing for another. The descriptions of format come from CEMC and CMS; the preparation column is our view.',
      body: [
        { kind: 'table', caption: 'Answer formats across the 2026 to 2027 season (formats from the organisers\' pages; the last column is ours)', head: ['Format', 'Contests', 'What a student hands in', 'What to practise'], rows: [
          ['Multiple choice', 'Gauss, Pascal, Cayley, Fermat (CEMC); Beaver (CEMC)', 'A letter for each question', 'Speed with accuracy; ruling choices out for a reason'],
          ['Mixed: answer only and full solution', 'CIMC and CSMC, Euclid, Fryer, Galois, Hypatia (CEMC)', 'Some final answers, some written solutions', 'Writing a clear argument a marker can follow, line by line'],
          ['Team events', 'CTMC, Team Up Challenge (CEMC)', 'Team answers and relay answers', 'Dividing work and checking each other\'s numbers'],
          ['Programs', 'Canadian Computing Competition (CEMC)', 'Code that a grader runs on hidden tests', 'Exact input and output, and efficient algorithms'],
          ['Written paper, no devices', 'COMC (CMS)', 'Answers and solutions on paper', 'Working without a calculator; CMS bans phones, calculators and other devices']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The jump from Pascal to Fryer',
          left: [
            'A Grade 9 student who did well on the 60-minute Pascal can be surprised by the 75-minute Fryer, which has only four questions. CEMC calls it a full-solution contest: the marks reward the explanation, not just the number at the end.',
            'We prepare for the two in different ways. For Pascal we time sets of questions; for Fryer we take one problem and rewrite the solution until a stranger could follow it.'
          ],
          rightH3: 'The Euclid stands apart',
          right: [
            'CEMC writes the Euclid for students in their final year, or CEGEP, and gives it two and a half hours for ten questions. Its own page says many students write it in earlier years to prepare for a strong final-year result.',
            'The Euclid also matters beyond the contest, as CEMC and the University of Waterloo connect some Faculty of Mathematics scholarships to it. Admission itself does not require it.'
          ] }
      ]
    },
    {
      id: 'comc', tint: 'tint', eyebrow: 'The CMS contest',
      h2: 'The COMC on 29 October 2026, and its start window across Canada',
      lede: 'The Canada Open Mathematics Challenge is run by the Canadian Mathematical Society, not CEMC, and works differently. CMS lists the 2026 COMC for Thursday 29 October 2026 in Canada and the Americas, says "it is 2.5 hours long", and closed registration on Thursday 22 October 2026, the day this page was checked.',
      body: [
        { kind: 'table', caption: 'COMC 2026 Competitive Division start window, converted from CMS\'s EDT times to each zone on 29 October 2026 (our conversion, offsets from the tz database release 2026e)', head: ['Where', 'Offset on 29 October 2026', 'Start window in local time'], rows: [
          ['British Columbia (most), Yukon', 'UTC-7', '10:00 a.m. to 12:30 p.m.'],
          ['Alberta, Saskatchewan', 'UTC-6', '11:00 a.m. to 1:30 p.m.'],
          ['Manitoba', 'UTC-5', '12:00 noon to 2:30 p.m.'],
          ['Ontario, Quebec (ET)', 'UTC-4', '1:00 p.m. to 3:30 p.m.'],
          ['Nova Scotia, New Brunswick, Prince Edward Island (AT)', 'UTC-3', '2:00 p.m. to 4:30 p.m.'],
          ['Newfoundland (NT)', 'UTC-2:30', '2:30 p.m. to 5:00 p.m.']
        ] },
        { kind: 'p', mt: true, html: 'CMS sets the window in its 2026 changes notice: a student is placed in the Competitive Division only if, among other conditions, they begin writing "between 1:00 p.m. and 3:30 p.m. EDT (UTC-4)" and finish no more than 2.5 hours later. That matters because, in CMS\'s words, "Only students in the Competitive Division will be eligible for prize money and potential invitations to the CMO." Our conversion uses the clocks in force on 29 October 2026, three days before Eastern and Atlantic clocks go back on Sunday 1 November 2026.' },
        { kind: 'two', mt: true,
          leftH3: 'How the COMC differs from CEMC contests',
          left: [
            'CMS says "The COMC is open to students in all locations, at all grade levels." It is written on paper, and its eligibility page is blunt: "No mobile phones, calculators or other electronic devices are permitted."',
            'CMS also describes something CEMC\'s pages do not: a route for a student whose school does not take part, through in-person Open Writing Centres hosted by university partners, booked through an Independent Student Portal. For 2026 that route has closed with registration.'
          ],
          rightH3: 'Two changes for 2026',
          right: [
            'CMS replaced its Canadian and International divisions with a Competitive Division and a Global Division in 2026. It also states that the Repêchage, the old second chance to qualify for the olympiad, "has been discontinued as of 2026."',
            'From the COMC, CMS invites roughly one hundred to one hundred and twenty top-ranking students to the Canadian Mathematical Olympiad or the Canadian Junior Mathematical Olympiad, held in March.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://cms.math.ca/competitions/comc/" rel="noopener" target="_blank">CMS, COMC 2026</a>, its eligibility and 2026 changes pages, and <a class="ag-inline-link" href="https://cms.math.ca/competitions/cmo/" rel="noopener" target="_blank">CMS, CMO</a>, read 22 October 2026.' }
      ]
    },
    {
      id: 'season', tint: 'deep', eyebrow: 'A worked example',
      h2: 'A sample season: one Grade 10 student, six contests',
      lede: 'To show how the calendar turns into a plan, here is a season we might map out with a Grade 10 student in Ontario who enjoys both math and coding. The student, the choices and the week counts are ours; the dates are CEMC\'s and CMS\'s. Nobody should write all of this, and most students should not.',
      body: [
        { kind: 'table', caption: 'A worked example season (ours), with the gaps between contests calculated from the organisers\' dates', head: ['Contest', 'Date', 'Gap from the one before', 'What the gap is for'], rows: [
          ['COMC (CMS)', 'Thursday 29 October 2026', 'Start of the season', 'Already registered through school before 22 October 2026'],
          ['CIMC (CEMC)', 'Wednesday 18 November 2026', '20 days', 'Writing two full solutions a week, reviewed by the teacher'],
          ['CCC Junior (CEMC)', 'Wednesday 17 February 2027', '91 days, exactly 13 weeks', 'The long stretch: programming fundamentals, then timed papers in January'],
          ['Cayley (CEMC)', 'Wednesday 24 February 2027', '7 days', 'Timed multiple-choice sets only; no new topics'],
          ['Galois (CEMC)', 'Wednesday 7 April 2027', '42 days, 6 weeks', 'Back to full solutions, one problem rewritten each week'],
          ['CTMC in school (CEMC)', 'From Wednesday 14 April 2027', '7 days or more', 'Team practice on relays with classmates']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>Mark the deadlines, not the contests.</b> Copy each school deadline from the deadlines table into a family calendar, with a reminder a week before.',
          '<b>Choose a main contest.</b> In our example it is the CCC, because the 13-week gap after November gives it the most preparation time. Everything else is a lighter add-on.',
          '<b>Separate the formats.</b> Group the multiple-choice papers (Cayley) and the full-solution papers (CIMC, Galois), and prepare each group in its own way.',
          '<b>Protect the week after a big contest.</b> The Cayley falls only 7 days after the CCC in our example, so that week is review, not new learning.',
          '<b>Cut, do not cram.</b> If schoolwork is heavy in April 2027, drop the CTMC or the Galois. One well-prepared contest teaches more than three rushed ones.'
        ] },
        { kind: 'p', mt: true, html: 'Our arithmetic, labelled as ours: 18 November 2026 to 17 February 2027 is 91 days, which is 13 weeks to the day; 24 February 2027 to 7 April 2027 is 42 days. A student who starts serious CCC preparation in the week after the CIMC therefore has thirteen weekly cycles, which is the structure of our <a class="ag-inline-link" href="/canadian-computing-competition-ccc-prep">CCC preparation</a>.' }
      ]
    },
    {
      id: 'coding', tint: 'tint', eyebrow: 'The two computing contests',
      h2: 'The coding side of the calendar: Beaver in November, CCC in February',
      lede: 'CEMC counts 3 computing contests among its 16. The two on this calendar, open to any student through a school, sit three months apart. Here is how they compare, from CEMC\'s own pages; the planning advice in the last row is ours.',
      body: [
        { kind: 'table', caption: 'CEMC\'s two school computing contests in 2026 to 2027 (read 22 October 2026)', head: ['', 'Beaver Computing Challenge 2026', 'Canadian Computing Competition 2027'], rows: [
          ['When', '9 to 20 November 2026, on a day the school picks', 'Wednesday 17 February 2027'],
          ['Who', 'Grades 5 to 10, in three grade levels', 'Junior or Senior, chosen by skill'],
          ['Length', '45 minutes', '3 hours'],
          ['Answers', 'Multiple choice', 'Programs in C, C++, Python or Java'],
          ['Language of the paper', 'English only', 'English and French'],
          ['Order by', 'Monday 26 October 2026', 'Thursday 11 February 2027'],
          ['Our planning note', 'Two to three weeks of puzzle practice is enough for most writers', 'Plan in months: a first-time Junior writer should start by early November 2026']
        ] },
        { kind: 'p', mt: true, html: 'For the detail on each, see our <a class="ag-inline-link" href="/ccc-junior-guide">CCC Junior guide</a> and the <a class="ag-inline-link" href="/canadian-computing-competition-ccc-prep">CCC preparation page</a>. For the math contests, our <a class="ag-inline-link" href="/cemc-waterloo-contests-preparation">CEMC Waterloo contests page</a> explains how we prepare students for Gauss through Euclid.' }
      ]
    },
    {
      id: 'zones', tint: 'deep', eyebrow: 'Clocks',
      h2: 'Contest days and class times across six time zones',
      lede: 'CEMC contests start near the beginning of each school\'s day, so the calendar dates are local. Our live classes, by contrast, are arranged once and converted. Two clock changes fall inside this contest season, and both move class times for some provinces but not others.',
      body: [
        { kind: 'table', caption: 'UTC offsets for the 2026 to 2027 contest season (tz database release 2026e)', head: ['Province or zone', 'COMC day, 29 October 2026', '1 November 2026 to 13 March 2027', 'From 14 March 2027'], rows: [
          ['British Columbia (most), Yukon', 'UTC-7', 'UTC-7', 'UTC-7 (no change since 8 March 2026)'],
          ['Alberta, Saskatchewan', 'UTC-6', 'UTC-6', 'UTC-6'],
          ['Manitoba', 'UTC-5', 'UTC-5', 'UTC-5 (no longer changes from 1 November 2026)'],
          ['Ontario and Quebec (ET)', 'UTC-4', 'UTC-5', 'UTC-4'],
          ['Atlantic provinces (AT)', 'UTC-3', 'UTC-4', 'UTC-3'],
          ['Newfoundland (NT)', 'UTC-2:30', 'UTC-3:30', 'UTC-2:30']
        ] },
        { kind: 'p', mt: true, html: 'What this means in practice: the CCC on 17 February 2027 and the Pascal, Cayley and Fermat days that follow fall in the winter period, when Toronto and Winnipeg share a clock. The Euclid on 6 April 2027 falls after Eastern clocks move forward on 14 March 2027, so a weekly class booked for Toronto and Winnipeg together drifts an hour apart for one of the two families. We confirm class times with every family at both changes.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Choosing contests',
    h2: 'How many contests is enough?',
    lede: 'Our rough guide to a sensible season, by how a student relates to contests. The bands are ours.',
    table: { caption: 'A sensible contest load (ours)', head: ['Student', 'A season that fits'], rows: [
      ['Curious first-timer', 'One contest, chosen by grade, with a few weeks of practice'],
      ['Keen and steady', 'One math contest and one computing contest, months apart'],
      ['Contest regular', 'A main contest plus two lighter ones in other formats'],
      ['Olympiad track', 'The COMC and the Euclid or CCC Senior, with others only as practice']
    ] },
    left: { h3: 'For parents', ps: [
      'The calendar is long; a child\'s attention is not. Pick by deadline and format, not by how many contests a friend is writing.',
      'If a deadline has passed, nothing is lost. CEMC\'s contests come round each school year, and preparation carries over.'
    ] },
    right: { h3: 'For students', ps: [
      'Choose the contest you would enjoy preparing for, not the one with the biggest name.',
      'Write down why each wrong answer went wrong. Across a season, that list teaches more than any single paper.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses that line up with the contest season',
    lede: 'Each course is taught live online by one regular teacher, in a batch or one to one, wherever the student lives in Canada.',
    bands: [
      { num: 'I', h3: 'Elementary and middle grades', sub: 'Grades 3 to 8', courses: [
        { code: 'CAL / EARLY / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking for kids', blurb: 'The reasoning the November Beaver asks for.' },
        { code: 'CAL / EARLY / 02', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Solid ground before the May Gauss.' },
        { code: 'CAL / EARLY / 03', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'First real code, a step before the CCC.' }
      ] },
      { num: 'II', h3: 'High school contests', sub: 'Grades 9 to 12', courses: [
        { code: 'CAL / HIGH / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'The algebra under Pascal, Fryer and Euclid.' },
        { code: 'CAL / HIGH / 02', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'A first CCC language, learnt properly.' },
        { code: 'CAL / HIGH / 03', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ for teens', blurb: 'For CCC Senior writers looking further ahead.' }
      ] },
      { num: 'III', h3: 'Contest specialists', sub: 'Strong students', courses: [
        { code: 'CAL / SPEC / 01', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming for teens', blurb: 'Algorithms practised against the clock.' },
        { code: 'CAL / SPEC / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Data structures from first principles.' },
        { code: 'CAL / SPEC / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Math ideas explored in Python, ages 10 to 15.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Classes that run alongside the contest season',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After-school times, set in Eastern time and converted for you.' },
      { time: 'Weekends', l: 'Weekend mornings, clear of school contest days.' },
      { time: '1-on-1', l: 'A schedule shaped around the contests the student picks.' }
    ],
    cells: [
      { h3: 'Deadline-aware', p: 'We remind families of each school deadline ahead of time.' },
      { h3: 'Format-specific', p: 'Multiple-choice, full-solution and coding practice kept apart.' },
      { h3: 'Original problems', p: 'Our own practice sets; CEMC\'s archive for past papers.' },
      { h3: 'Reviewed papers', p: 'Timed practice marked and gone through together.' },
      { h3: 'All provinces', p: 'Students from Yukon to Newfoundland and Labrador.' },
      { h3: 'Batch or one to one', p: 'A batch of fifteen to twenty, or a personal teacher.' }
    ]
  },

  projectsH2: 'Projects from our students',
  projectsLede: 'Contest preparation sits next to building real things. Some of our learners\' projects are shown below; the <a class="ag-inline-link" href="/student-labs">student labs</a> hold the rest.',
  reviewsLede: 'Google reviews from parents, unedited.',

  fees: {
    h2: 'Fees',
    lede: 'Contest entry is paid by the school to the organiser and never passes through us. Our fee is for live teaching, charged monthly, so a family can pause between contests or stop after the last one.',
    free: ['A free first class', 'A short problem in the student\'s next contest format', 'No card needed'],
    group: ['Fifteen to twenty students in a batch', 'One teacher across the season', 'A batch time you choose', 'Charged monthly'],
    one: ['A personal teacher', 'Planned around the student\'s contests', 'Pace set by the student']
  },

  faq: {
    eyebrow: 'Questions from Canadian families',
    h2: 'The 2026 to 2027 contest calendar: common questions',
    items: [
      { q: 'When is the CCC in 2027?', a: 'CEMC lists the 2027 Canadian Computing Competition for Wednesday 17 February 2027 in North and South America and Thursday 18 February 2027 elsewhere. Schools must order it by Thursday 11 February 2027.' },
      { q: 'What are the Waterloo math contest dates for 2027?', a: 'From CEMC\'s 2026/27 table: Pascal, Cayley and Fermat on 23 and 24 February 2027; the Euclid on 6 April 2027; Fryer, Galois and Hypatia on 7 April 2027; the CTMC from 13 April 2027; and the Gauss between 10 and 21 May 2027. The CIMC and CSMC come earlier, on 18 November 2026.' },
      { q: 'Is it too late to enter the COMC 2026?', a: 'Yes, for 2026. CMS set Thursday 22 October 2026 as the last day for registration, and the competition is on Thursday 29 October 2026. The next COMC will be in the autumn of 2027.' },
      { q: 'When is the Canadian Mathematical Olympiad in 2027?', a: 'CMS had not published the 2027 date when we checked on 22 October 2026. It says the CMO and the Junior CMO are 3-hour competitions held each March, by invitation, based mainly on COMC results.' },
      { q: 'Can a student write more than one CEMC contest in a year?', a: 'Yes, as long as they come from different families. CEMC allows one contest from each group per school year, for example one of Pascal, Cayley and Fermat, and one of Fryer, Galois and Hypatia. Computing and math contests are separate.' },
      { q: 'Are contest dates the same everywhere in Canada?', a: 'The dates are the same, but the clock is local. CEMC wants every school to begin near the start of its own school day, so a writer in Victoria and a writer in Moncton begin hours apart on the same date.' },
      { q: 'Which contest is the first of the CEMC year?', a: 'For 2026 to 2027 it is the Canadian Intermediate and Senior Mathematics Contests on Wednesday 18 November 2026, inside the Beaver Computing Challenge window of 9 to 20 November 2026. The CMS COMC, on 29 October 2026, comes before both.' },
      { q: 'Is any contest on this calendar free?', a: 'CEMC lists the Team Up Challenge for Grades 6 to 8 as available free of charge, run by teachers from 1 June 2027. For the other contests, the school pays the organiser, so families should ask the school how it handles the cost.' },
      { q: 'How do we enter a student for these contests?', a: 'Through the school. CEMC does not take entries from students, so a teacher must order each contest by its deadline. A school ordering for the first time needs a CEMC account, which can take up to three weeks to approve.' },
      { q: 'When are your classes for Canadian families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We set times in Eastern time and confirm them again when the clocks change.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Our deeper pages for the contests on this calendar, and for Canadian families in general.',
    items: [
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'Every page we have written for Canada.' },
      { href: '/ccc-junior-guide', label: 'CCC Junior guide', p: 'The February 2027 Junior paper in depth.' },
      { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation', p: 'How we coach Junior and Senior writers.' },
      { href: '/cemc-waterloo-contests-preparation', label: 'CEMC Waterloo contests', p: 'Gauss to Euclid, and how we prepare.' },
      { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada', p: 'Everyday math support under the contests.' },
      { href: '/maths-olympiad-classes-online', label: 'Math olympiad classes', p: 'For the COMC and olympiad end of the season.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Bring the contests your child is considering. In the first class the teacher sets a short problem in the format of the next one on the calendar, and helps you decide what is realistic before its deadline.',
    readFirst: 'Curious about the lessons first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> shows a live class from start to end, and the <a class="ag-inline-link" href="/courses">course list</a> has each syllabus.',
    note: 'We have no office in Canada: our teachers are in India and every lesson happens over live video. WhatsApp is usually the quickest way to reach us.',
    formNote: 'The first class is free, with no card required.'
  },

  footer: {
    cols: [
      { h4: 'Contests', links: [
        { href: '/ccc-junior-guide', label: 'CCC Junior guide' },
        { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation' },
        { href: '/cemc-waterloo-contests-preparation', label: 'CEMC math contests' },
        { href: '/maths-olympiad-classes-online', label: 'Math olympiad classes' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Mark the deadline, not the date'
  },

  personalityCss: `
.ag-root.ag-cmcc .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-cmcc .ag-capsule { border-left-width: 4px; border-radius: 4px; }
.ag-root.ag-cmcc .ag-section-head h2 { max-width: 36ch; }
.ag-root.ag-cmcc .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-cmcc .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-cmcc .ag-slots { gap: 1.3rem; }
`,

  dossier: {
    curriculumAuthority: 'CEMC (University of Waterloo) contests overview with its 2026/27 table, every CEMC contest page (BCC, CSIMC, CCC, PCF, Euclid, FGH, CTMC, Gauss, Team Up Challenge) and How contests work; CMS COMC 2026 pages (main, eligibility, 2026 changes) and the CMO page, all read raw on 22 October 2026: every contest date and ordering deadline for 2026 to 2027 in the Americas; grade bands and eligibility lines; lengths and formats; COMC date, 2.5-hour length, registration closing on 22 October 2026, the 1:00 to 3:30 p.m. EDT Competitive Division window, the Competitive and Global divisions, the end of the Repechage, paper only with no devices.',
    localProject: 'One merged 2026 to 2027 calendar table in date order with organiser and year on every row; a deadlines table with our three-weeks-earlier account dates; a grade-by-grade table built from CEMC eligibility lines; the COMC start window converted to six Canadian zones for 29 October 2026; a worked sample Grade 10 season with our day counts (91 days, 13 weeks; 42 days). Lesson family: planning backwards from fixed deadlines.',
    requiredMentions: ['Tuesday 23 and Wednesday 24 February 2027', 'Lottery for CTMC places at UWaterloo', 'Registration closed Thursday 22 October 2026', 'Four team events run by the school; CEMC gives no total length', 'Pascal 9, Cayley 10, Fermat 11', 'between 1:00 p.m. and 3:30 p.m. EDT (UTC-4)', 'has been discontinued as of 2026', '91 days, exactly 13 weeks', 'a contest can never be written before the official contest date'],
    sources: [
      { claim: 'All CEMC 2026/27 contest dates, ordering deadlines, grade bands and languages.', url: 'https://cemc.uwaterloo.ca/contests' },
      { claim: 'Formats and lengths for each CEMC contest (BCC, CSIMC, CCC, PCF, Euclid, FGH, CTMC, Gauss).', url: 'https://cemc.uwaterloo.ca/contests/euclid' },
      { claim: 'Team Up Challenge: Grades 6 to 8, teams of four, four events, from 1 June 2027, free of charge.', url: 'https://cemc.uwaterloo.ca/contests/team-up-challenge' },
      { claim: 'Account review up to three weeks; never before the official date; start near the beginning of the school day; 13 math and 3 computing contests; one contest per grouping.', url: 'https://cemc.uwaterloo.ca/contests/how-contests-work' },
      { claim: 'COMC 2026 date, length, registration deadline, eligibility, divisions and start window, Repechage ended, no devices.', url: 'https://cms.math.ca/competitions/comc/' },
      { claim: 'CMO and CJMO are 3-hour competitions held each March, by invitation.', url: 'https://cms.math.ca/competitions/cmo/' },
      { claim: 'CSMC or Euclid not required for Waterloo admission but required for some Faculty of Mathematics scholarships.', url: 'https://uwaterloo.ca/future-students/programs/computer-science' }
    ],
    rejectedClaims: [
      'A 2027 CMO date: not published by CMS when checked, so not printed.',
      'A total length for the Team Up Challenge: CEMC gives none, so the table says so.',
      'A combined length for the CTMC: shown as three 45-minute events, not added up.',
      'Contest fees as typed figures: omitted; the page says only that schools pay the organisers, and that Team Up is free.',
      'Dates for writers outside the Americas in the main table: CEMC lists them separately; the table uses the Americas dates and says so.',
      'Invitation-only events (CMO, CJMO, CCO) as calendar rows: left out of the planning table and explained in prose.',
      'Any affiliation with CEMC, CMS or the University of Waterloo: none, and the page says so.'
    ]
  }
};
