'use strict';
// UK maths enrichment, competitions and able pupils: hub index (ag- guide, UK and US exams cluster, index page
// for the hub "UK maths enrichment, competitions and able pupils" in content/exam-cluster-groups.json).
// Every figure below was re-read raw with curl on 1 November 2026. Copies are under keyword-research-2026-09/
// uk-us-gap/src/uk-maths-enrichment-and-competitions-guide/ unless a member folder is named.
//  - UKMT competitions page (ukmt.org.uk/competitions): "Each year, over 700,000 young people take part in UKMT
//    Challenges, Kangaroos and Olympiads."; calendar 18 November 2026 Andrew Jobbings Senior Kangaroo and BMO1;
//    20 January 2027 BMO2; 27 January 2027 IMC; 18 March 2027 Grey, Pink, Cayley, Hamilton, Maclaurin, Primary
//    Kangaroo; 5 May 2027 JMC; 15 June 2027 Junior Kangaroo and JMO. Registered centre: "Your institution must be in
//    the UK, a Crown Dependency or be a British International School." FAQ: entry via a registered UKMT centre;
//    homeschooled children may ask a local registered school to host them, "however they are not obliged to do
//    so"; olympiads take longer to mark "as they are marked by hand".
//  - UKMT round pages: JMC "A 60 minute, 25 multiple choice Challenge", Year 8 and below (S2, NI Year 9),
//    Wednesday 5th May 2027; IMC "A 60-minute, 25-question multiple-choice Challenge", Year 11 and below (S4, NI
//    Year 12), Wednesday 27th January 2027; SMC "A 90 minute first round Challenge, with 22 multiple choice
//    questions and three 000-999 digit questions", Year 13 and below (S6, NI Year 14), Wednesday 7th October 2026;
//    first-round instructions: "calculators and measuring instruments are forbidden", "Do not expect to finish the
//    whole paper in the time allowed."; "All UKMT Competitions are now paper-format only."; Primary Kangaroo "a 20
//    question multiple choice paper aimed at students aged 9-11", 45 minutes, Year 5/6 or below, P6/P7 or below,
//    Thursday 18th March 2027 to Thursday 25th March 2027; Junior Kangaroo "60 minute, 25 multiple choice", Tuesday
//    15th June 2027; Grey and Pink Kangaroos "60 minute, 25 multiple choice challenges", Grey Year 9 and below, Pink
//    Year 10 and 11, Thursday 18th March 2027, "Several thousand UK-based students qualify from the IMC each
//    year"; Andrew Jobbings Senior Kangaroo "a 60 minute, 20 question 'integer answer' challenge", Wednesday 18th
//    November 2026; JMO "2 hour Challenge consisting of 6 Olympiad style questions", "Around 1,200 students qualify
//    from the JMC each year", Tuesday 15th June 2027; Cayley, Hamilton, Maclaurin "2 hour Challenges consisting of
//    six Olympiad style problems", "Around 1,800 students qualify from the IMC each year", Thursday 18th March
//    2027, Cayley Year 9 and below, Hamilton Year 10, Maclaurin Year 11; BMO1 "a 3.5 hour Olympiad consisting of
//    six problems requiring full written solutions", "UKMT invites around 1000 qualifying students from the SMC",
//    Wednesday 18th November 2026; BMO2 "four problems", "UKMT invites around 100 qualifying students from BMO1",
//    "BMO2 is the UK's hardest national mathematics competition", Wednesday 20th January 2027; MOG "five
//    challenging problems", 2.5 hours, Year 11 and above (S4, NI Year 12), Tuesday 22nd September 2026; MCG "5
//    answer-only questions", 90 minutes, same day, "students cannot sit both the MCG and MOG"; JMO instruction "Just
//    stating an answer, even a correct one, will earn you very few marks".
//  - UKMT Team Maths Challenge: "Registration for the Team Maths Challenge 26/27 opens on Monday 5th October 2026";
//    Year 8 and Year 9 (England & Wales), Year 9 and Year 10 (NI), S1, S2 and S3; "Each team consists of four
//    students, with a maximum of two students from the older year group"; four rounds, The Group, The Crossnumber,
//    The Shuttle and The Relay; events starting in February 2027; "Only one team from each centre may be entered
//    into the TMC." Senior TMC: Year 12 and 13 (NI 13 and 14, S5 and S6); "returns in November 2026"; three rounds,
//    The Group, The Crossnumber and The Shuttle. Host schools listed on these pages are not named here.
//  - UKMT Summer Schools: "Invitations are sent to students selected at random from the top 1.5% of results from the
//    Intermediate Mathematical Challenge"; Years 10-11, "Students must be aged 14-16 years"; invitations through
//    schools in March; one week residential; "Usually from the start of August onwards"; "Only one student per
//    school can be invited". The page's gender and school-type split targets are not printed (cluster rule).
//  - The Primary Mathematics Challenge (primarymathschallenge.org.uk, About and FAQs): "9 - 20 November 2026.";
//    "The PMC paper has 25 questions. 20 of these are multiple choice."; "45 minutes to answer the questions";
//    "aimed at pupils aged 9 - 11, children must be in Primary school"; Bonus Round "will take place in February
//    2027", invite-only, 25 questions and 45 minutes; boundary set in December. First Mathematics Challenge: "8 - 19
//    June 2026", 20 multiple-choice questions, 45 minutes, "Participation must be through schools."
//  - Scottish Mathematical Council, Mathematical Challenge home page (www.wpr3.co.uk/MC/index.pdf): running "since
//    1976"; four divisions "Primary (P7), Junior (S1 and S2), Middle (S3 and S4), and Senior (S5 and S6)"; "two
//    rounds of problems for Secondary schools and three rounds for Primary schools"; "Marks are given for
//    explanations of answers rather than for simply getting the correct answer."; "please speak to your teacher".
//  - GOV.UK, TechFirst (From: Department for Digital, Culture, Media and Sport; published 4 December 2025, last
//    updated 19 October 2026; the content API's organisations field also says DCMS): "the government's flagship
//    tech skills programme". GOV.UK, TechFirst for schools (same department, published 19 October 2026): "giving 1
//    million young people the chance"; regional delivery partners; Ada Computer Science with the Raspberry Pi
//    Foundation "for teachers and students aged 11 to 19"; TechFirst Girls Competition "a free, UK wide competition
//    for girls aged 12 to 13, delivered by IBM", Year 8 (England and Wales), S2, Year 9 (NI), "No prior knowledge
//    or coding experience is needed"; "the CyberFirst Girls Competition, which ran from 2016 to 2025"; 2026 dates
//    5 October to 10 November registration by teachers, 11 November start, 20 November end, spring 2027 regional
//    celebrations; UK Bebras "free, national challenge open to all young people aged 6 to 19", "Organised by the
//    Raspberry Pi Foundation", "45 minutes", "every participant receives a certificate", 1 September registration,
//    9 to 20 November 2026 window.
//  - NCSC Cyber Skills members page (raw copy in src/cyberfirst-courses-and-bursary-preparation/, 31 October
//    2026): "The CyberFirst programme has now transitioned over to TechFirst under the leadership of DCMS."; NCSC is
//    "Cyber Pathway lead". So the department is printed as DCMS, as both sources say; DSIT is not printed.
//  - GOV.UK, TechFirst Undergraduate Scholarship (raw copy in the same member folder): "at least 120 UCAS tariff
//    points over a maximum 2 year period", a degree "in any subject to start in September 2027". Amount in pounds
//    not printed.
//  - The British Informatics Olympiad (olympiad.org.uk home and overview): eligible if "under 19, in full time
//    pre-university education and resident in mainland Britain"; "a three-hour exam, taken at school, in which
//    students solve problems with the aid of a computer"; top 15 to the final "in Cambridge during the Easter
//    holidays"; four make up the IOI team; "it is free to enter"; BIO 2026 round one "any date from 8 December
//    (2025) to 23 January (2026)". No BIO 2027 window was published on 1 November 2026; the page says so.
//  - Royal Institution, Ri Masterclasses (raw copy in src/maths-masterclasses-for-able-students-uk/): "Generally Ri
//    Masterclass series run for six weeks, during term time."; secondary sessions "2.5 hours on Saturday mornings";
//    "Masterclasses are free to attend, school students are nominated by their teacher."; "normally available for
//    9/10 year old and 13/14 year old students"; first secondary series 1981; primary 1998; "secondary school
//    Computer Science Masterclasses launched in 2014".
//  - DofE, Timescales and Skills (raw copies in src/duke-of-edinburgh-skills-section-coding/): "You have to finish
//    all your sections before your 25th birthday."; "an average of 1 hour a week"; Bronze from "the school year
//    you turn 14", Silver "the school year you turn 15", Gold "after turning 16 years old"; "Paid work and core
//    curriculum does not count".
//  - University of Oxford, Oxford Online Maths Club (raw copy in src/online-maths-circle-uk/): "a weekly livestream
//    from the University of Oxford", "free", "no registration needed". The host is not named (no individuals).
//  - National curriculum in England, mathematics (raw copy in src/gifted-and-talented-maths-and-coding-uk/): quick
//    graspers "should be challenged through being offered rich and sophisticated problems before any acceleration
//    through new content".
// Not printed: any entry price (UKMT and others publish them in pounds); the MOG eligibility update (identity
// content, outside the cluster rules); host schools for team events; any gender or school-type statistic.
// Our own, labelled on the page: the three example years (Year 5, Year 8, Year 12) and their minute totals, computed
// 1 November 2026 from the published lengths: Year 5 PMC 45 + Bebras 45 + Primary Kangaroo 45 = 135 minutes; Year 8
// Bebras 45 + IMC 60 + Cayley 120 + JMC 60 + JMO 120 = 405 minutes (6 hours 45 minutes); Year 12 SMC 90 + BMO1 210 +
// BMO2 210 + BIO round one 180 = 690 minutes (11 hours 30 minutes). Spine: the door is always the school. Every
// competition and programme in this hub is entered, nominated or invited through a school or a teacher, so the
// first question a family asks is not "which competition" but "what does our school enter, and who decides".
// Lesson family: a hub index with a master table and numbered choosing steps.

const TIMING = 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.';

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'guide', tag: 'ENRICHMENT AND COMPETITIONS', label: 'Maths enrichment and competitions for able children', blurb: 'Every UK maths and computing competition and enrichment programme in one table, and the school door each one goes through.' },
  slug: 'uk-maths-enrichment-and-competitions-guide',
  code: 'ukec',
  accent: '#6B2F3A',
  accentRationale: 'Enrichment and competitions index: a deep claret, #6B2F3A, 9.47:1 on #FBF8F2, 8.90:1 on #F5F1E8 and 8.14:1 on #EDE7DA, a ribbon colour that sits apart from every member accent in the hub (indigos, navies, greens, bronze and the plum of the Primary Maths Challenge)',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Maths competitions and enrichment for able children in the UK',
  title: 'UK Maths Competitions and Enrichment for Able Children 2026-27',
  description: 'Maths competitions and enrichment for able children in the UK: UKMT, PMC, Bebras, BIO, TechFirst and Ri Masterclasses in one table, with who enters and when.',
  ogDescription: 'Every UK maths and computing competition and enrichment programme for able children we could confirm, with organiser, year groups, format and 2026-27 dates, and the school door each one goes through.',
  twitterDescription: 'UK maths competitions and enrichment for able children, 2026-27, in one table checked at each organiser.',
  pageName: 'Maths Competitions and Enrichment for Able Children in the UK',
  webPageDescription: 'A guide to United Kingdom maths and computing competitions and enrichment programmes for able children, covering UKMT challenges and olympiads, the Primary Mathematics Challenge, the Scottish Mathematical Challenge, UK Bebras, the TechFirst Girls Competition, the British Informatics Olympiad, Ri Masterclasses and summer schools, with organisers, year groups, formats and 2026-27 dates.',
  courseDescription: 'Live online problem-solving lessons for able UK pupils from primary school to sixth form, covering competition mathematics, olympiad writing and competitive programming, in a group batch or one-to-one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Enrichment and competitions guide',
  navLinks: [
    { href: '#master', label: 'The master table' },
    { href: '#enrichment', label: 'Enrichment' },
    { href: '#maths', label: 'Maths competitions' },
    { href: '#computing', label: 'Computing' },
    { href: '#choose', label: 'How to choose' }
  ],
  eyebrow: 'United Kingdom &middot; Ages 6 to 18 &middot; 2026 to 2027 season',
  h1: 'Maths competitions and enrichment for able children in the UK',
  lede: 'A child who finds school maths easy has more on offer in the UK than most parents realise: national challenges sat in a school hall, olympiads marked by hand, team events, free computing contests, Saturday masterclasses and residential summer schools. Nobody hands a family the whole list, so here it is for 2026 to 2027, each entry read at the organiser\'s own website on 1 November 2026, with a guide to each part and a page for each competition. One thread runs through all of it: almost every door opens from inside a school.',
  secondaryCta: { href: '#master', label: 'See the master table' },
  wa: 'Hello Modern Age Coders, my child enjoys maths competitions or enrichment and I would like a free first class.',
  heroNote: 'Read at each organiser on 1 November 2026 &middot; Our worked examples labelled &middot; No result promised',
  spec: [
    ['Covers', 'Maths and computing'],
    ['Youngest entry', 'UK Bebras, from age 6'],
    ['First rounds', 'Primary, Junior, Intermediate, Senior'],
    ['Written olympiads', 'JMO, Cayley to Maclaurin, MOG, BMO'],
    ['Team events', 'Two UKMT team challenges'],
    ['Programmes', 'Masterclasses, summer school, TechFirst'],
    ['Entry route', 'Through a school or teacher'],
    ['Our role', 'Teaching, never entering']
  ],
  capsuleQ: 'In short',
  capsule: 'The main maths competitions for able children in the UK are run by the UK Mathematics Trust (UKMT): the Junior, Intermediate and Senior Mathematical Challenges, their Kangaroo and olympiad follow-on rounds, the British Mathematical Olympiad and two team challenges. Alongside them sit the Primary Mathematics Challenge for ages 9 to 11, the Scottish Mathematical Challenge, and in computing the free UK Bebras Challenge, the TechFirst Girls Competition (formerly CyberFirst Girls) and the British Informatics Olympiad. Enrichment comes through Ri Masterclasses, UKMT summer schools and free university maths clubs. Nearly all are entered through a school. Modern Age Coders is not connected with any organiser; we teach the problem-solving behind them live online, in a group batch of 15 to 20 or one-to-one, through our Olympiad and Competition Maths course, and the first class is free.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for a child who wants harder problems',
    lede: 'Multiple-choice papers, written olympiad answers, and programs a judge runs.',
    items: [
      { course: 'middle-school-math-competitions-course', code: 'UKEC / 01', title: 'Competition maths, Years 6 to 9', note: 'Multiple-choice papers of the Kangaroo and Junior Challenge kind: reading a question fast, eliminating options honestly, and spotting the structure under a puzzle.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'UKEC / 02', title: 'Olympiad and competition maths', note: 'From the first written olympiad answer to proofs at sixth-form level, with every solution read by a teacher as a stranger would read it.' },
      { course: 'competitive-programming-for-teens-course', code: 'UKEC / 03', title: 'Competitive programming', note: 'For pupils heading towards the British Informatics Olympiad: algorithms, testing a program until it breaks, and three hours of sustained work.' }
    ]
  },

  sections: [
    {
      id: 'master', tint: 'tint', eyebrow: 'The master table',
      h2: 'Which UK maths and computing competitions run in 2026-27, and who can enter?',
      lede: 'Twenty rows, one per competition or linked set of rounds. Each row was read at the organiser\'s own page on 1 November 2026; year groups are given for England and Wales first, with the Scottish and Northern Irish equivalent where the organiser publishes one.',
      body: [
        { kind: 'table', caption: 'UK maths and computing competitions, 2026 to 2027 season', head: ['Competition', 'Organiser', 'Who can sit it', 'Format', 'When'], rows: [
          ['Primary Mathematics Challenge', 'The Primary Mathematics Challenge, a charity', 'Aged 9 to 11, in primary school', '25 questions, 20 of them multiple choice, 45 minutes', '9 to 20 November 2026; Bonus Round February 2027'],
          ['Primary Kangaroo', 'UKMT', 'Year 5/6 or below; P6/P7 or below in Scotland and Northern Ireland', '20 multiple-choice questions, 45 minutes', '18 to 25 March 2027'],
          ['Junior Mathematical Challenge', 'UKMT', 'Year 8 and below; S2; Year 9 in Northern Ireland', '25 multiple-choice questions, 60 minutes', '5 May 2027'],
          ['Junior Kangaroo', 'UKMT', 'Year 8 and below, UK schools only', '25 multiple-choice questions, 60 minutes', '15 June 2027'],
          ['Junior Mathematical Olympiad', 'UKMT', 'Year 8 and below; around 1,200 qualify from the JMC', 'Six olympiad questions, 2 hours, written', '15 June 2027'],
          ['Intermediate Mathematical Challenge', 'UKMT', 'Year 11 and below; S4; Year 12 in Northern Ireland', '25 multiple-choice questions, 60 minutes', '27 January 2027'],
          ['Grey and Pink Kangaroos', 'UKMT', 'Grey Year 9 and below; Pink Years 10 and 11', '25 multiple-choice questions, 60 minutes', '18 March 2027'],
          ['Cayley, Hamilton and Maclaurin olympiads', 'UKMT', 'Cayley Year 9 and below, Hamilton Year 10, Maclaurin Year 11; around 1,800 qualify from the IMC', 'Six olympiad problems, 2 hours, written', '18 March 2027'],
          ['Senior Mathematical Challenge', 'UKMT', 'Year 13 and below; S6; Year 14 in Northern Ireland', '22 multiple-choice and three 000 to 999 answers, 90 minutes', '7 October 2026 (already sat this season)'],
          ['Andrew Jobbings Senior Kangaroo', 'UKMT', 'Year 13 and below, UK schools only', '20 integer-answer questions, 60 minutes', '18 November 2026'],
          ['British Mathematical Olympiad Round 1', 'UKMT', 'Year 13 and below; around 1,000 invited from the SMC', 'Six problems, 3.5 hours, full written solutions', '18 November 2026'],
          ['British Mathematical Olympiad Round 2', 'UKMT', 'Year 13 and below; around 100 invited from BMO1', 'Four problems, 3.5 hours, full written solutions', '20 January 2027'],
          ['Mathematical Olympiad for Girls', 'UKMT', 'Year 11 and above; S4; Year 12 in Northern Ireland', 'Five problems, 2.5 hours, two answer-only and three written', '22 September 2026 (already sat this season)'],
          ['Mathematical Competition for Girls', 'UKMT', 'As for the girls\' olympiad; a pupil sits one or the other', 'Five answer-only questions, 90 minutes', '22 September 2026 (already sat this season)'],
          ['Team Maths Challenge', 'UKMT', 'Years 8 and 9; S1 to S3; Years 9 and 10 in Northern Ireland', 'Teams of four, four rounds, one team per school', 'Registration from 5 October 2026; events from February 2027'],
          ['Senior Team Maths Challenge', 'UKMT', 'Years 12 and 13; S5 and S6; Years 13 and 14 in Northern Ireland', 'Teams of four, three rounds, regional finals', 'Regional finals from November 2026'],
          ['Scottish Mathematical Challenge', 'Scottish Mathematical Council', 'P7 and S1 to S6, in four divisions', 'Two rounds for secondary, three for primary; explanations marked', 'See the organiser\'s page for this year\'s rounds'],
          ['UK Bebras Challenge', 'Raspberry Pi Foundation', 'All young people aged 6 to 19', 'Interactive online tasks, 45 minutes, free', '9 to 20 November 2026'],
          ['TechFirst Girls Competition', 'TechFirst, delivered by IBM', 'Girls aged 12 to 13: Year 8; S2; Year 9 in Northern Ireland', 'Team technology challenges online, free', '11 to 20 November 2026'],
          ['British Informatics Olympiad', 'The British Informatics Olympiad', 'Under 19, full-time pre-university, resident in mainland Britain', 'Three-hour programming exam at school, free', 'Round one in December and January; the 2027 window was not yet published']
        ] },
        { kind: 'source', html: 'Sources, all read 1 November 2026: the <a class="ag-inline-link" href="https://ukmt.org.uk/competitions" rel="noopener" target="_blank">UKMT competitions calendar</a> and each UKMT round page; the <a class="ag-inline-link" href="https://www.primarymathschallenge.org.uk/" rel="noopener" target="_blank">Primary Mathematics Challenge</a>; the <a class="ag-inline-link" href="https://www.wpr3.co.uk/MC/index.pdf" rel="noopener" target="_blank">Scottish Mathematical Council\'s Mathematical Challenge page</a>; <a class="ag-inline-link" href="https://www.gov.uk/guidance/techfirst-for-schools" rel="noopener" target="_blank">TechFirst for schools on GOV.UK</a> for the TechFirst Girls Competition and UK Bebras; and <a class="ag-inline-link" href="https://www.olympiad.org.uk/" rel="noopener" target="_blank">the British Informatics Olympiad</a>. Entry prices are not repeated here. We have no connection with any of these bodies.' }
      ]
    },
    {
      id: 'door', tint: 'deep', eyebrow: 'The thread',
      h2: 'Who actually enters a child for these?',
      lede: 'Almost always the school, and that changes what a parent should do first.',
      body: [
        { kind: 'two',
          left: [
            'UKMT is plain about it: every pupil is entered through a registered UKMT centre, and "Your institution must be in the UK, a Crown Dependency or be a British International School." The Primary Mathematics Challenge goes through schools too, teachers register UK Bebras and TechFirst Girls entries, and BIO round one is sat at school and marked by a teacher before moderation.',
            'Enrichment is narrower still. Ri Masterclasses work by nomination: "Masterclasses are free to attend, school students are nominated by their teacher." Summer school invitations go through schools, one pupil per school.'
          ],
          right: [
            'So the most useful conversation is with the head of maths or the computing teacher, not a tutor. Ask which challenges the school enters, whether it puts a team forward, and whether it nominates for masterclasses.',
            'Families outside school have a route too, though it is a favour rather than a right. UKMT says a homeschooled child can approach a local school that is a registered centre and ask to be hosted, "however they are not obliged to do so".'
          ] }
      ]
    },
    {
      id: 'enrichment', tint: 'plain', eyebrow: 'Enrichment and able pupils',
      h2: 'What enrichment is there for able maths pupils in the UK?',
      lede: 'Enrichment means maths beyond the syllabus with no exam at the end. The UK has a mix of free university outreach, nominated programmes and things a family can simply join, and the pages below take each in turn.',
      body: [
        { kind: 'p', html: 'The mathematics national curriculum in England does not ask schools to race able pupils ahead. It says pupils who grasp concepts rapidly "should be challenged through being offered rich and sophisticated problems before any acceleration through new content". Our page on <a class="ag-inline-link" href="/gifted-and-talented-maths-and-coding-uk">gifted and talented maths and coding in the UK</a> starts from that sentence and asks what stretch in maths and in programming looks like when a child is not simply moved up a year.' },
        { kind: 'two', mt: true,
          left: [
            'A maths circle is the gentlest way in: a small group meeting regularly over one rich problem. The Oxford Online Maths Club, a weekly recorded livestream, needs "no registration". <a class="ag-inline-link" href="/online-maths-circle-uk">Online maths circles in the UK</a> lists the free university options and who each suits.',
            'Masterclasses are more formal. The Royal Institution ran its first secondary series in 1981, primary in 1998, and "secondary school Computer Science Masterclasses launched in 2014". The <a class="ag-inline-link" href="/maths-masterclasses-for-able-students-uk">maths masterclasses for able students</a> page covers nomination and what to do without one.'
          ],
          right: [
            'Summer schools are the most selective. UKMT\'s residential week invites pupils aged 14 to 16 "selected at random from the top 1.5% of results from the Intermediate Mathematical Challenge". The <a class="ag-inline-link" href="/online-maths-summer-school-uk">online maths summer school</a> page explains the invitations and gives a summer plan for everyone else.',
            'For children learning at home, <a class="ag-inline-link" href="/maths-for-home-educated-children-uk">maths for home-educated children</a> deals with law, planning and exams. For teenagers who want coding to count, <a class="ag-inline-link" href="/duke-of-edinburgh-skills-section-coding">coding for the Duke of Edinburgh Skills section</a> maps it onto Bronze, Silver and Gold; the DofE asks for "an average of 1 hour a week" and a finish "before your 25th birthday".'
          ] },
        { kind: 'source', html: 'Quoted from the National curriculum in England: mathematics programmes of study, <a class="ag-inline-link" href="https://ukmt.org.uk/enrichment/summer-schools" rel="noopener" target="_blank">UKMT Summer Schools</a>, <a class="ag-inline-link" href="https://www.rigb.org/learning/ri-masterclasses" rel="noopener" target="_blank">Ri Masterclasses</a>, the <a class="ag-inline-link" href="https://www.maths.ox.ac.uk/outreach/oxford-online-maths-club" rel="noopener" target="_blank">Oxford Online Maths Club</a> and <a class="ag-inline-link" href="https://www.dofe.org/do/timescales/" rel="noopener" target="_blank">DofE timescales</a>, read raw between 31 October and 1 November 2026.' }
      ]
    },
    {
      id: 'maths', tint: 'tint', eyebrow: 'Maths competitions',
      h2: 'Which maths competitions can UK pupils enter, and how do the rounds connect?',
      lede: 'UKMT runs three stages: a multiple-choice first round in school, a Kangaroo follow-on for many high scorers, and a written olympiad for fewer. Around them sit a primary challenge, team events and Scotland\'s own competition.',
      body: [
        { kind: 'p', html: 'UKMT says "over 700,000 young people take part" in its challenges, Kangaroos and olympiads each year, and the first-round papers carry the same instruction to every candidate: "Do not expect to finish the whole paper in the time allowed." On those papers "calculators and measuring instruments are forbidden". And "All UKMT Competitions are now paper-format only", so practise on paper.' },
        { kind: 'two', mt: true,
          left: [
            'For a parent seeing the whole ladder for the first time, <a class="ag-inline-link" href="/maths-olympiad-training-uk">maths olympiad training in the UK</a> is the overview of every written round and how training changes as a pupil climbs.',
            'The youngest competitors start with the <a class="ag-inline-link" href="/primary-maths-challenge-practice">Primary Maths Challenge</a>, a 25-question paper for ages 9 to 11 whose last five questions offer no options at all; that page is about pacing. The multiple-choice follow-ons, Junior, Grey, Pink and Senior, are covered together on <a class="ag-inline-link" href="/ukmt-kangaroo-rounds-practice">UKMT Kangaroo rounds practice</a>, including what the wrong options are there for.',
            '<a class="ag-inline-link" href="/ukmt-team-maths-challenge-practice">UKMT Team Maths Challenge practice</a> covers the junior and sixth-form team events, where "a maximum of two students from the older year group" may sit in a team of four.'
          ],
          right: [
            'The <a class="ag-inline-link" href="/junior-mathematical-olympiad-preparation">Junior Mathematical Olympiad</a> page is about a twelve-year-old\'s first written proof. The <a class="ag-inline-link" href="/intermediate-mathematical-olympiad-cayley-hamilton-maclaurin-preparation">Cayley, Hamilton and Maclaurin</a> page sorts out which year sits which paper.',
            'At the top, the <a class="ag-inline-link" href="/british-mathematical-olympiad-bmo-preparation">British Mathematical Olympiad</a> page covers BMO1 and BMO2, which UKMT calls "the UK\'s hardest national mathematics competition". The <a class="ag-inline-link" href="/mathematical-olympiad-for-girls-preparation">Mathematical Olympiad for Girls</a> page explains its mix of answer-only and written problems.',
            'The <a class="ag-inline-link" href="/scottish-mathematical-challenge-practice">Scottish Mathematical Challenge</a> has run since 1976, from P7 to S6, and marks the explanation rather than the bare answer.'
          ] },
        { kind: 'table', mt: true, caption: 'How the UKMT rounds connect in 2026-27', head: ['First round', 'Kangaroo follow-on', 'Olympiad follow-on', 'Invited, roughly'], rows: [
          ['Junior Challenge, 5 May 2027', 'Junior Kangaroo, 15 June 2027', 'Junior Mathematical Olympiad, 15 June 2027', 'Around 1,200 to the olympiad'],
          ['Intermediate Challenge, 27 January 2027', 'Grey or Pink Kangaroo, 18 March 2027', 'Cayley, Hamilton or Maclaurin, 18 March 2027', 'Around 1,800 to the olympiads; several thousand to the Kangaroos'],
          ['Senior Challenge, 7 October 2026', 'Andrew Jobbings Senior Kangaroo, 18 November 2026', 'BMO1, 18 November 2026, then BMO2, 20 January 2027', 'Around 1,000 to BMO1; around 100 to BMO2']
        ] },
        { kind: 'source', html: 'Every date and invitation figure in this table is UKMT\'s own, from its round pages read on 1 November 2026. Schools can also buy discretionary entries for most follow-on rounds.' }
      ]
    },
    {
      id: 'computing', tint: 'plain', eyebrow: 'Computing programmes and competitions',
      h2: 'What computing competitions and programmes are there, and what happened to CyberFirst?',
      lede: 'Fewer contests than maths, most of them free, and one big change in 2026: CyberFirst is now part of TechFirst.',
      body: [
        { kind: 'two',
          left: [
            'GOV.UK describes TechFirst as "the government\'s flagship tech skills programme", and its guidance pages are published under the Department for Digital, Culture, Media and Sport. The National Cyber Security Centre, which ran CyberFirst from 2016, says the programme "has now transitioned over to TechFirst under the leadership of DCMS", with the NCSC staying on as the cyber pathway lead.',
            'The old bursary is now an undergraduate scholarship. <a class="ag-inline-link" href="/cyberfirst-courses-and-bursary-preparation">CyberFirst courses and bursary in 2026</a> sorts out which free courses still run and what the scholarship asks for: at least 120 UCAS tariff points and a degree "in any subject to start in September 2027".'
          ],
          right: [
            'The girls\' competition is now the TechFirst Girls Competition, "a free, UK wide competition for girls aged 12 to 13, delivered by IBM", building on "the CyberFirst Girls Competition, which ran from 2016 to 2025". Teachers registered teams from 5 October to 10 November 2026 and the competition runs from 11 to 20 November 2026. The <a class="ag-inline-link" href="/cyberfirst-girls-competition-preparation">CyberFirst Girls Competition</a> page covers the rename and the logic the puzzles lean on.',
            '<a class="ag-inline-link" href="/bebras-computational-thinking-challenge-practice-uk">UK Bebras Challenge practice</a> is for anyone aged 6 to 19: 45 minutes of interactive tasks from 9 to 20 November 2026, run by the Raspberry Pi Foundation, where "every participant receives a certificate". At the other end, the <a class="ag-inline-link" href="/british-informatics-olympiad-preparation">British Informatics Olympiad</a> is a three-hour programming exam for under-19s "resident in mainland Britain", with a final in Cambridge and a team of four sent to the International Olympiad in Informatics.'
          ] },
        { kind: 'p', mt: true, html: 'For the very youngest, <a class="ag-inline-link" href="/ks1-coding-lessons-online">KS1 coding lessons online</a> explains what the computing curriculum expects in Years 1 and 2, the prediction and debugging a six-year-old Bebras entrant meets. <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">The UK competitions calendar</a> lays out every coding, maths and AI contest month by month, cipher and AI contests included.' },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.gov.uk/guidance/techfirst" rel="noopener" target="_blank">TechFirst</a> and <a class="ag-inline-link" href="https://www.gov.uk/guidance/techfirst-for-schools" rel="noopener" target="_blank">TechFirst for schools</a> on GOV.UK, both showing "From: Department for Digital, Culture, Media and Sport", read 1 November 2026; the NCSC Cyber Skills pages, read 31 October 2026; the TechFirst Undergraduate Scholarship guidance on GOV.UK; <a class="ag-inline-link" href="https://www.olympiad.org.uk/overview.html" rel="noopener" target="_blank">the BIO overview</a>, read 1 November 2026.' }
      ]
    },
    {
      id: 'choose', tint: 'deep', eyebrow: 'How to choose',
      h2: 'How do you choose the right competition or programme for your child?',
      lede: 'Start from the school year and the school, not the competition. Seven steps.',
      body: [
        { kind: 'ol', items: [
          'Write down your child\'s school year in the organiser\'s terms. UKMT sets eligibility by school year, and the same pupil is Year 8 in England or Wales, S2 in Scotland and Year 9 in Northern Ireland.',
          'Ask the school whether it is a registered UKMT centre and whether it enters UK Bebras. Those answers decide most of what follows.',
          'Find the first-round paper that matches the year: the Primary Mathematics Challenge or Primary Kangaroo at the top of primary school, the Junior Challenge up to Year 8, the Intermediate up to Year 11, the Senior up to Year 13. A Year 7 or 8 pupil is eligible for the Intermediate as well as the Junior.',
          'Add one computing contest. UK Bebras suits almost everyone from age 6; the TechFirst Girls Competition suits girls in Year 8; the British Informatics Olympiad suits a sixth former who already programs.',
          'Ask about the nominated programmes early: masterclass nominations come from teachers, summer school invitations reach schools in March, and team places are limited to one team per school for the Team Maths Challenge.',
          'Practise on the organisers\' own free past papers, on paper, and for written rounds practise full explanations.',
          'Then open the page for that round, above or in the full list at the foot of this page.'
        ] },
        { kind: 'p', mt: true, html: '<strong>A worked example, ours.</strong> Three made-up pupils in England, planned against the published 2026 to 2027 dates and lengths. They assume a child qualifies at every step, which most do not.' },
        { kind: 'table', caption: 'Our illustrative years, minutes computed by us on 1 November 2026 from the organisers\' published lengths', head: ['Pupil', 'The year, in order', 'Paper time if every round is reached'], rows: [
          ['Year 5', 'Primary Mathematics Challenge (November), UK Bebras (November), Primary Kangaroo (March)', '45 + 45 + 45 = 135 minutes'],
          ['Year 8', 'UK Bebras (November), Intermediate Challenge (January), Cayley (March), Junior Challenge (May), Junior Mathematical Olympiad (June)', '45 + 60 + 120 + 60 + 120 = 405 minutes, 6 hours 45 minutes'],
          ['Year 12', 'Senior Challenge (October), BMO1 (November), BMO2 (January), BIO round one (December or January)', '90 + 210 + 210 + 180 = 690 minutes, 11 hours 30 minutes']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The arithmetic shows how small the competitions themselves are: even our busiest Year 12 pupil spends under twelve hours in an exam room all year.',
            'The Year 8 row surprises parents: a Year 8 pupil can sit both the Intermediate and the Junior Challenge, so one year holds two routes to a written olympiad.'
          ],
          right: [
            'The Year 5 row is the opposite case: three 45-minute multiple-choice papers and not a word of written explanation. Puzzles explained out loud prepare a ten-year-old for the later jump to writing. And if a child enjoys none of this, a masterclass, coding projects or the DofE Skills section may suit them better.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'By stage',
    h2: 'What fits at each stage of school',
    lede: 'A rough map by school year in England and Wales, drawn from the eligibility rules above.',
    table: { caption: 'Competitions and programmes by stage, from the organisers\' eligibility rules', head: ['Years', 'Stage', 'Worth knowing about'], rows: [
      ['1 to 4', '1. Curiosity first', 'UK Bebras from age 6, and puzzles at home'],
      ['5 to 6', '2. First national papers', 'Primary Mathematics Challenge, Primary Kangaroo, masterclasses'],
      ['7 to 9', '3. Junior and intermediate', 'Junior and Intermediate Challenges, JMO, Cayley, team events'],
      ['10 to 11', '4. Written olympiads', 'Hamilton, Maclaurin, Pink Kangaroo, summer school, DofE'],
      ['12 to 13', '5. Senior rounds', 'Senior Challenge, BMO, senior team event, BIO']
    ] },
    left: { h3: 'If a child is ahead of their year', ps: [
      'Enter the paper for the actual school year first. UKMT sets eligibility as "and below", so a younger pupil may sit an older paper, but a strong score on their own paper can open the follow-on round meant for their year.',
    ] },
    right: { h3: 'If a child is not entered at school', ps: [
      'Ask politely, and ask early in the autumn term, before papers are ordered.',
    ] }
  },

  catalogue: {
    eyebrow: 'The full list',
    h2: 'Courses for able pupils, by stage',
    lede: 'Grouped by where a pupil is now; each course page sets out its syllabus in full.',
    bands: [
      { num: 'I', h3: 'Challenges and Kangaroos', sub: 'Years 5 to 9', courses: [
        { code: 'UKEC / B / 01', slug: 'middle-school-math-competitions-course', title: 'Competition maths, Years 6 to 9', blurb: 'Multiple-choice problem solving at pace.' },
        { code: 'UKEC / B / 02', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school maths mastery', blurb: 'Algebra and geometry with reasons attached.' },
        { code: 'UKEC / B / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Test a pattern by program, then explain why it holds.' }
      ] },
      { num: 'II', h3: 'Written olympiads', sub: 'Years 8 to 13', courses: [
        { code: 'UKEC / C / 01', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad and competition maths', blurb: 'Proof, written so a marker is convinced.' },
        { code: 'UKEC / C / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school mathematics', blurb: 'Technique that never slows a solution down.' },
        { code: 'UKEC / C / 03', slug: 'tmua-mat-step-preparation-course', title: 'TMUA and STEP preparation', blurb: 'For olympiad pupils heading to university maths.' }
      ] },
      { num: 'III', h3: 'Computing contests', sub: 'Ages 11 to 18', courses: [
        { code: 'UKEC / D / 01', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Algorithms under a clock, tested to destruction.' },
        { code: 'UKEC / D / 02', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'A first serious language, start to finish.' },
        { code: 'UKEC / D / 03', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'Cyber security for teens', blurb: 'Cryptography and defence, taught ethically.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live problem-solving lessons, alongside whatever the school enters',
    lede: TIMING + ' Our teachers work from India, which keeps one clock all year, so India time is four and a half hours ahead of UK time in summer and five and a half in winter. Every lesson is booked in UK time.',
    slots: [
      { time: 'After school', l: 'A weekday hour that suits primary and lower secondary pupils.' },
      { time: 'Weekend morning', l: 'Room for one long problem, solved and then written up.' },
      { time: 'Before a round', l: 'A short run of lessons on the format of the next paper.' }
    ],
    cells: [
      { h3: 'One idea per lesson', p: 'A named technique, such as working backwards, met in several fresh problems.' },
      { h3: 'Explain it aloud', p: 'Even young pupils say why an answer is right, the habit written rounds reward.' },
      { h3: 'A batch of 15 to 20', p: 'Somebody always finds another route; or one-to-one for a pupil far ahead.' },
      { h3: 'Problems written by us', p: 'Our own practice; the organisers\' free past papers we simply point to.' },
      { h3: 'Short notes home', p: 'What a pupil can now do, and one thing to work on next.' },
      { h3: 'No entries, no promises', p: 'Schools enter pupils and organisers set thresholds. We teach the thinking and say so plainly.' }
    ]
  },

  projectsH2: 'Work by our students',
  projectsLede: 'Four published student projects, none of them competition entries; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has the rest.',
  reviewsLede: 'Google reviews written by families who learn with us, unedited.',

  fees: {
    h2: 'Monthly fees',
    lede: 'Billed month by month in the currency shown to UK families, with no deposit and no contract beyond the current month. The first class costs nothing.',
    free: ['A full lesson on one rich problem', 'Advice on which rounds fit the year group', 'Only a phone number needed'],
    group: ['A batch of 15 to 20 at one stage', 'One teacher through the term', 'Written answers read and returned', 'A certificate on completion'],
    one: ['A teacher for one pupil alone', 'Planned around the next round', 'Suited to a child well ahead of their year']
  },

  faq: {
    eyebrow: 'Questions parents ask',
    h2: 'Maths competitions and enrichment: common questions',
    items: [
      { q: 'What maths competitions are there for able children in the UK?', a: 'The largest are UKMT\'s Junior, Intermediate and Senior Mathematical Challenges with their Kangaroo and olympiad follow-on rounds, the British Mathematical Olympiad and two team challenges. There is also the Primary Mathematics Challenge for ages 9 to 11 and, in Scotland, the Scottish Mathematical Challenge.' },
      { q: 'How does my child enter a UKMT challenge?', a: 'Through a school that is a registered UKMT centre. The school buys the papers, runs the challenge and receives the results. Follow-on rounds are by invitation from a qualifying score or by a discretionary entry bought by the school.' },
      { q: 'Can a home-educated child enter UKMT competitions?', a: 'Yes, if a registered school agrees to host them. UKMT suggests approaching local schools and asking, but says schools are not obliged to agree, and it will not say which schools are registered.' },
      { q: 'What age is the Primary Maths Challenge for?', a: 'The organiser says it is aimed at pupils aged 9 to 11 who are in primary school. The 2026 paper runs from 9 to 20 November 2026, with 25 questions in 45 minutes and an invite-only Bonus Round in February 2027.' },
      { q: 'What is the hardest UK maths competition?', a: 'UKMT calls British Mathematical Olympiad Round 2 the UK\'s hardest national mathematics competition. It is four problems in three and a half hours on 20 January 2027, and UKMT invites around 100 pupils from BMO1.' },
      { q: 'Are there free computing competitions for children?', a: 'Yes. UK Bebras is free and open to ages 6 to 19, the TechFirst Girls Competition is free for girls aged 12 to 13, and the British Informatics Olympiad is free to enter for eligible pupils under 19 in mainland Britain.' },
      { q: 'What happened to CyberFirst?', a: 'It is now part of TechFirst. The NCSC says CyberFirst has transitioned to TechFirst under the leadership of DCMS, the girls\' competition is now the TechFirst Girls Competition, and the former bursary has become a TechFirst undergraduate scholarship.' },
      { q: 'How do children get into Ri Masterclasses or the UKMT summer school?', a: 'Both depend on the school. Ri Masterclasses are free and pupils are nominated by a teacher. UKMT summer school invitations go, through schools, to pupils picked at random from the top 1.5% of Intermediate Challenge results, aged 14 to 16.' },
      { q: 'When are your lessons, and do you enter pupils?', a: TIMING + ' We do not enter anyone for any competition and have no link with any organiser; the school does that. Lessons are live online, the first is free, and we never promise a score or a qualification.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Other UK guides',
    h2: 'Other parts of school maths',
    lede: 'Competitions sit alongside exams, not instead of them. These pages cover the exams themselves.',
    items: [
      { href: '/11-plus-maths-tuition', label: '11 plus maths', p: 'Selective school entrance tests, where the habits from primary challenges are often put to use.' },
      { href: '/gcse-maths-tuition-online', label: 'GCSE maths', p: 'The exam every pupil in England sits, taught to the board their school uses.' },
      { href: '/a-level-maths-tuition-online', label: 'A-level maths', p: 'For sixth formers whose olympiad work runs alongside the syllabus.' },
      { href: '/tmua-preparation', label: 'TMUA preparation', p: 'The university admissions test many olympiad pupils go on to sit.' },
      { href: '/ks2-sats-maths-papers-explained', label: 'KS2 SATs maths', p: 'The national tests at the end of primary school, paper by paper.' }
    ]
  },

  start: {
    h2: 'Book a free problem-solving class',
    lede: 'Tell us the school year and which rounds, if any, your child has sat. The free class works one problem through and ends with honest advice.',
    readFirst: 'Prefer to look around first? The <a class="ag-inline-link" href="/courses">course pages</a> list every syllabus, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a lesson from the inside.',
    note: 'WhatsApp usually gets the quickest answer and costs nothing from a UK mobile. Replies come from our team in India on a +91 number; we keep no UK office.',
    formNote: 'No payment details, nothing to sign. You will hear back once, with a suggested time.'
  },

  footer: {
    cols: [
      { h4: 'Start here', links: [
        { href: '/maths-olympiad-training-uk', label: 'Olympiad ladder' },
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' },
        { href: '/gifted-and-talented-maths-and-coding-uk', label: 'Gifted and talented' },
        { href: '/primary-maths-challenge-practice', label: 'Primary Maths Challenge' }
      ] },
      { h4: 'Courses', links: [
        { href: '/courses/olympiad-competition-mathematics-mastery', label: 'Olympiad maths' },
        { href: '/courses/middle-school-math-competitions-course', label: 'Competition maths' },
        { href: '/courses/competitive-programming-for-teens-course', label: 'Competitive programming' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
      ] }
    ],
    bottomRight: 'Schools enter the pupils; we teach the thinking'
  },

  personalityCss: `
.ag-root.ag-ukec .ag-hero h1 { letter-spacing: -0.021em; max-width: 22ch; }
.ag-root.ag-ukec .ag-capsule { border-left-width: 8px; border-radius: 0 2px 2px 0; }
.ag-root.ag-ukec .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-ukec .ag-table caption { text-align: left; font-weight: 600; letter-spacing: 0.004em; }
.ag-root.ag-ukec .ag-table th:first-child { width: 22%; }
.ag-root.ag-ukec .ag-steps li { margin-bottom: 0.55rem; }
.ag-root.ag-ukec .ag-spec dt { letter-spacing: 0.12em; }
`,

  dossier: {
    curriculumAuthority: 'UKMT round pages and calendar (1 November 2026): over 700,000 participants a year; registered centres in the UK, a Crown Dependency or a British International School; homeschooled pupils may ask a registered school, which is not obliged; JMC 25 questions 60 minutes 5 May 2027; IMC 25 questions 60 minutes 27 January 2027; SMC 22 multiple choice and three 000-999 questions, 90 minutes, 7 October 2026; Primary Kangaroo 20 questions 45 minutes 18 to 25 March 2027; Junior, Grey and Pink Kangaroos 25 questions 60 minutes; Senior Kangaroo 20 integer answers 60 minutes 18 November 2026; JMO 6 questions 2 hours 15 June 2027, around 1,200 qualify; Cayley, Hamilton, Maclaurin 6 problems 2 hours 18 March 2027, around 1,800 qualify; BMO1 six problems 3.5 hours 18 November 2026, around 1000 invited; BMO2 four problems 20 January 2027, around 100 invited; MOG five problems 2.5 hours and MCG five answer-only 90 minutes, 22 September 2026; papers paper-format only; Team Maths Challenge registration 5 October 2026, teams of four, four rounds, one team per centre; Senior TMC November 2026, three rounds; summer school invitations at random from the top 1.5% of IMC results, ages 14 to 16. Primary Mathematics Challenge: 9 to 20 November 2026, 25 questions, 45 minutes, ages 9 to 11, Bonus Round February 2027. Scottish Mathematical Council: since 1976, four divisions, explanations marked. GOV.UK TechFirst and TechFirst for schools (Department for Digital, Culture, Media and Sport): TechFirst Girls Competition for girls aged 12 to 13 delivered by IBM, 11 to 20 November 2026; UK Bebras ages 6 to 19, 45 minutes, 9 to 20 November 2026. NCSC: CyberFirst transitioned to TechFirst under DCMS. BIO: under 19, full-time pre-university, resident in mainland Britain, three-hour exam at school, free, final in Cambridge. Ri Masterclasses: six weeks, free, teacher nomination, Computer Science from 2014. DofE: 1 hour a week, finish before 25.',
    localProject: 'The door is always the school. This index gathers every UK maths and computing competition and enrichment programme in the hub into one master table (organiser, year groups, format, 2026 to 2027 dates) and a second table of enrichment programmes, then introduces each member page in fresh sentences under the hub\'s three sections. Its own argument is that every route, from UKMT challenges to Ri Masterclass nominations and summer school invitations, runs through a school or a teacher, so a family\'s first step is a conversation with the head of maths, with UKMT\'s home-education route described in its own words. It prints the TechFirst department as GOV.UK and the NCSC name it (DCMS) and teaches choosing through seven numbered steps and our own three illustrative pupils with computed exam minutes. Lesson family: hub index with master table and choosing steps.',
    requiredMentions: ['over 700,000 young people take part', 'Crown Dependency or be a British International School', 'however they are not obliged to do so', 'delivered by IBM', 'Department for Digital, Culture, Media and Sport', 'top 1.5% of results from the Intermediate Mathematical Challenge', 'resident in mainland Britain', 'All UKMT Competitions are now paper-format only', 'secondary school Computer Science Masterclasses launched in 2014', '45 + 60 + 120 + 60 + 120 = 405 minutes'],
    sources: [
      { claim: 'UKMT competitions calendar 2026-27, registered centres, home-education FAQ, participation figure.', url: 'https://ukmt.org.uk/competitions' },
      { claim: 'UKMT round pages: formats, lengths, eligibility, dates and invitation figures for every challenge, Kangaroo and olympiad.', url: 'https://ukmt.org.uk/intermediate-challenges/cayley-hamilton-maclaurin-olympiad-challenge' },
      { claim: 'UKMT Team Maths Challenge and Senior Team Maths Challenge: year groups, teams of four, rounds, registration.', url: 'https://ukmt.org.uk/team-challenges/team-mathematical-challenge' },
      { claim: 'UKMT National Mathematics Summer School: invitation rule, ages, timing.', url: 'https://ukmt.org.uk/enrichment/summer-schools' },
      { claim: 'Primary Mathematics Challenge: 2026 dates, paper format, ages, Bonus Round.', url: 'https://www.primarymathschallenge.org.uk/pmc-faqs' },
      { claim: 'Scottish Mathematical Council, Mathematical Challenge: divisions, rounds, marking for explanations.', url: 'https://www.wpr3.co.uk/MC/index.pdf' },
      { claim: 'GOV.UK TechFirst for schools: TechFirst Girls Competition and UK Bebras 2026 dates, ages and organisers; publishing department.', url: 'https://www.gov.uk/guidance/techfirst-for-schools' },
      { claim: 'NCSC Cyber Skills: CyberFirst transitioned to TechFirst under the leadership of DCMS.', url: 'https://www.ncsc.gov.uk/cyber-skills/members' },
      { claim: 'British Informatics Olympiad overview: eligibility, format, final, IOI team.', url: 'https://www.olympiad.org.uk/overview.html' },
      { claim: 'Royal Institution, Ri Masterclasses: nomination, ages, six-week series, history.', url: 'https://www.rigb.org/learning/ri-masterclasses' }
    ],
    rejectedClaims: [
      'DSIT as the TechFirst department: GOV.UK lists the Department for Digital, Culture, Media and Sport on both TechFirst pages and the NCSC says DCMS; DSIT is not printed.',
      'BIO 2027 round one dates: not published on olympiad.org.uk on 1 November 2026; the page says so.',
      'Scottish Mathematical Challenge 2026-27 round dates and time allowed: not on the pages we could read; the table sends readers to the organiser.',
      'First Mathematics Challenge age range: not stated by the organiser; not printed.',
      'Entry prices for any competition: published in pounds; not reproduced.',
      'UKMT summer school gender and school-type targets, and the girls\' competitions eligibility update: outside the cluster content rules; not printed.',
      'Names of host schools for team events and of individual presenters: not printed.',
      'Any claim that competitions raise school grades, or any result, qualification or invitation promise: not made.'
    ]
  }
};
