'use strict';
// US math and coding competitions guide (ag- pillar/index page for the hub "US math and coding competitions guide" in
// content/exam-cluster-groups.json; UK and US exams cluster, index-page brief of 2026-11-01). Plan
// docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. Every figure in the master table was re-grepped in a raw copy
// on 1 November 2026: either the member pages' raw copies (read with curl on 31 October 2026) in
// keyword-research-2026-09/uk-us-gap/src/<member-slug>/, or a fresh curl -sL -A "Mozilla/5.0" on 1 November 2026 saved in
// keyword-research-2026-09/uk-us-gap/src/us-math-and-coding-competitions-guide/ (the us/src copies cited by the Phase 3
// members no longer exist, so those organisers were re-fetched):
//  - moems.org: "five monthly problem-solving contests for elementary and middle school students"; "grades 4, 5 and 6, and
//    the Middle School for grades 6, 7 and 8"; "each consisting of five questions, and limited to 30 minutes are held
//    monthly from November through March"; windows "November 9, 2026 - November 30, 2026" to "March 29, 2027"; open to
//    "home schools, institutes, and, with restrictions, individuals".
//  - noetic-learning.com: "grades 2 - 8"; "Held twice a year"; "20 problems independently within 45 minutes (50 minutes
//    for the online version)"; fall "2026-11-12 08:00" to "2026-11-25 17:00", spring "2027-04-01" to "2027-04-15";
//    At-Home Edition scores "not considered official and do not qualify for awards".
//  - mathleague.com (The Math League): "formed in 1977"; "contests for grades 4-12"; HS contests "October 20, 2026" to
//    "March 16, 2027"; grades 7 and 8 "February 16, 2027" or "February 23, 2027"; grades 4, 5 and Algebra Course 1
//    "April 15th or later"; 4 July 2026 notice: "allow students to use a calculator on the contests for this school year",
//    no-calculator policy moved to the "next school year"; homeschool package "sent to you in May for testing at home" or
//    through "an accredited local school".
//  - mathleague.org (Math League LLC): "for students in grades 3-12"; "more than 400 contests globally and reaches over
//    30,000 students each year"; "a new test with a new release number at the beginning of each month starting in
//    October"; middle school "Sprint Round - This is a 40-minute round consisting of thirty questions"; HS state
//    championships "held in April", national "in May"; "parents or outside coaches to serve as our point of contact".
//  - cmleague.com (Continental Mathematics League): "46th year! In 1980"; "Grades 2 & 3" "3 Meets"; "Euclidean &
//    Pythagorean Grades 4-9" "5 Meets", "6 Questions per Meet", "30 minutes per meet", dates "11/5, 12/3, 1/7, 2/4, 3/4"
//    (years are our reading of the 2026-2027 invitation); "Calculus League"; FAQ "Home School" route ("A Home School to us
//    does not necessarily mean a student is schooled at home").
//  - mathcounts.org (fetched 1 Nov 2026): "grade 6-8"; "4 levels of competition—school, chapter, state and national" (em
//    dash in the original, written with commas on the page); "40 minutes to complete 30 math problems without a
//    calculator"; chapter "February 1-28, 2027", state "March 1 - 31, 2027", national "May 9-10 in Washington, DC";
//    "currently developing a standalone grades 3-5 program".
//  - mathkangaroo.org/mks (fetched 1 Nov 2026): "75 minute multiple-choice test for students in grades 1-12"; "24
//    questions for students in grades 1-4 and 30 questions for students in grades 5 and higher"; "3rd Thursday in March";
//    "held in March 2027". March 18, 2027 is OUR calculation (third Thursday, checked in Python).
//  - mathcircles.org: "Math Circles are communities focused on the enjoyment of mathematical problem solving";
//    "hundreds of Math Circles around the U.S".
//  - bebraschallenge.org: "scheduled for November 9–20" (2026; en dash in original); "Students aged 6 to 18"; "45 minutes
//    to complete as many tasks as they can"; "Participating in the challenge is free"; homeschool name "Home School
//    [initials]".
//  - firstinspires.org/programs/fll (fetched 1 Nov 2026): "The 2026-2027 FIRST LEGO League season, BIOGLOW, will be the
//    final season of the program and include two editions: Founders Edition and Future Edition"; "released August 4,
//    2026"; "Grades 2-8 | Ages 6-16" (Founders), "Grades K-8 | Ages 5-16"; "two-and-a-half minute matches". LEGO
//    Education program update (member raw copy): "comes to an end after the 2026-2027 BIOGLOW season"; "Launching August
//    2027"; season overview "teams of up to 10 children".
//  - firstinspires.org/programs/ftc and the 2026-2027 manual (member raw copy): "Ages 12-18; Grades 7-12"; "released every
//    September"; "BIOBUZZ presented by RTX"; "a 30-second AUTO period, an 8-second transition period ... and a 2-minute
//    TELEOP period".
//  - robotevents.com and recf.org (member raw copy; vexrobotics.com returned 403 and was not retried): "RECF is not
//    authorized to organize, promote, approve, or manage VEX Robotics competitions"; RECF events "will not qualify teams
//    for the 2026–2027 VEX Robotics World Championship"; RECF Engage "Under 12 / elementary school or Under 15 / middle
//    school teams of 2+ students"; game "Tier Takeover"; "60 seconds"; "2027 RECF World Championship in St. Louis".
//  - soinc.org: "Grades 6-9" (Division B), "Grades 9-12" (Division C); "23 team events in each division"; Codebusters
//    "cryptanalyze and decode encrypted messages"; national tournament "May 14-15, 2027", "Ohio State University".
//  - acsl.org (fetched 1 Nov 2026): "ACSL has five divisions"; Elementary "Open to students in grades 3 - 6"; "No student
//    beyond grade 9 may compete in the Junior Division."; upper divisions "online 30-minute, 6-question short answer test
//    and an online programming problem to solve in 72 hours"; Contest #1 "available Oct. 19, 2026", Contest #4 "closes
//    Sunday May 23, 2027"; "Invitational Finals: Saturday, May 29, 2027"; "advisor can be any teacher, parent or other
//    adult with CS experience". Team fees printed in dollars: not used.
//  - usaco.org (fetched 1 Nov 2026): "All are welcome to participate in online USACO contests"; "All new participants start
//    out in the bronze division"; "There is never any fee for participation."; "typically 3 or 4 problems"; "typically
//    4..5 contiguous hours"; "C, C++, Java, or Python"; only a "2025-2026 Schedule" posted on 1 November 2026.
//  - uscyberpatriot.org (fetched 1 Nov 2026): "between two and six competitors"; "Middle School Division"; "October 22 –
//    25, 2026" (first round); "National Finals" "March 12-16, 2027"; "Air & Space Forces Association".
//  - societyforscience.org/isef: "world's largest international pre-college science competition"; "1,600 high-school
//    students"; "22 different scientific categories"; "Society-affiliated fair"; "Los Angeles, California, in May 2027";
//    rules book "grades 9–12 or equivalent".
//  - girlswhocode.com: "Clubs are free programs for all 3rd-12th graders of any skill level"; "1-2 hours per week";
//    Pathways "our free year-round program", "We're 100% virtual", for grades 9 to 12.
//  - hourofai.org and code.org/en-US/hour-of-ai (fetched 1 Nov 2026; hourofcode.com 301s to hourofai.org): "The Hour of
//    Code is now the Hour of AI"; "Code.org" is a former trademark of CodeAI; "Hour of AI ... trademarks of CodeAI";
//    "CSEdWeek, December 7–11"; "Kindergarten to the C-suite"; "single class period or a lunch break".
// Not printed: maa.org (AMC) returned 403 to other writers and was not retried, so no AMC 8 or AMC 10/12 date or rule;
// every price and fee; award amounts; impact statistics by gender or demographic; any contest item.
// Our own material, labelled on the page: the grade-band table (our reading of the published grade ranges), the worked
// example (a homeschooled grade 6 student's official sittings: MOEMS 5 + Noetic 2 + Bebras 1 + ACSL 4 = 12 sittings,
// and 25 + 40 + 15 = 80 math and computing items before counting ACSL, where Noetic is 2 x 20 and Bebras 15 tasks from the
// students page), the readiness stages and the five-step chooser. Lesson family: matching a contest to grade, entry route
// and season, then pacing a year (index page: answers the broad question and routes to the 19 member pages).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'GUIDE', blurb: 'Every major US math and coding competition for grades K to 12 in one table: organizer, grades, format and the 2026 to 2027 season, with a route to each guide.' },
  slug: 'us-math-and-coding-competitions-guide',
  code: 'usmc',
  accent: '#2E4A6B',
  accentRationale: 'US math and coding competitions guide: a deep ink blue #2E4A6B, about 8.6:1 on paper #FBF8F2 and 7.4:1 on #EDE7DA, unused by any sibling and calmer than the forest green of the MOEMS door',
  pageType: 'market',
  priceSubject: 'maths',
  market: US,
  routeLabel: 'US math and coding competitions guide',
  title: 'Math and Coding Competitions for Kids in the USA, by Grade',
  description: 'Math and coding competitions for US kids by grade: MOEMS, MATHCOUNTS, Noetic, Bebras, ACSL, USACO, FIRST, Science Olympiad and ISEF, with 2026 to 2027 dates.',
  ogDescription: 'One table of US math and coding contests for grades K to 12, read from each organizer\'s own site in November 2026: who runs it, which grades, the format and the season.',
  twitterDescription: 'US math, coding and robotics competitions by grade, 2026 to 2027, from the organizers\' own pages.',
  pageName: 'US Math and Coding Competitions Guide',
  webPageDescription: 'A pillar guide to math contests, coding and robotics competitions, and project programs open to US students from kindergarten to grade 12 in 2026 to 2027, built from organizers\' published pages, with a grade-by-grade chooser and links to a detailed guide for each.',
  courseDescription: 'Live online contest math and competition coding classes for US students in grades 2 to 12, in a group batch of 15 to 20 or one to one, taught with original problems.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Competitions guide',
  navLinks: [
    { href: '#table', label: 'All contests' },
    { href: '#by-grade', label: 'By grade' },
    { href: '#math', label: 'Math' },
    { href: '#coding', label: 'Coding' },
    { href: '#choose', label: 'Choose' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Kindergarten to grade 12 &middot; Math, coding, robotics and projects &middot; Season 2026 to 2027',
  h1: 'Math and coding competitions for kids in the USA, by grade',
  lede: 'Most families hear about US math and computing competitions one at a time, from a flyer or a friend. This guide puts them side by side: who organizes each one, which grades it serves, what a sitting looks like, and when the 2026 to 2027 season falls. Every row comes from the organizer&rsquo;s own website.',
  secondaryCta: { href: '#table', label: 'See the master table' },
  wa: 'Hello Modern Age Coders, we are choosing math or coding competitions for our child this year. Could we book a free first class?',
  heroNote: 'Teaching math and coding live since 2020 &middot; 10,000+ students &middot; our own problems, never contest items',
  spec: [
    ['Covers', 'Grades K to 12'],
    ['Math contests', 'MOEMS, Noetic, Math League, CML, MATHCOUNTS, Math Kangaroo'],
    ['Computing', 'Bebras, ACSL, USACO, CyberPatriot'],
    ['Robotics', 'FIRST LEGO League, FTC, RECF Engage'],
    ['Science', 'Science Olympiad, Regeneron ISEF'],
    ['Season', '2026 to 2027'],
    ['Checked', 'November 1, 2026'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'For grades 2 to 5, US families usually start with Noetic, MOEMS Division E, Continental Math League, Math Kangaroo or the free Bebras Challenge. Grades 6 to 8 add MATHCOUNTS, ACSL and Science Olympiad Division B; high schoolers move to USACO, CyberPatriot, FIRST Tech Challenge and Regeneron ISEF. Modern Age Coders teaches contest math and competition coding live online, in a batch or 1-on-1.',

  picks: {
    eyebrow: 'Learn with a teacher',
    h2: 'Three courses that cover most of this guide',
    lede: 'Middle school contest math, olympiad-level problems, and first coding for Bebras or a robotics club.',
    items: [
      { course: 'middle-school-math-competitions-course', code: 'USMC / 01', title: 'Middle school math competitions', note: 'MOEMS, MATHCOUNTS and Kangaroo style problem solving, grades 5 to 8.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'USMC / 02', title: 'Olympiad mathematics', note: 'Proof, counting and number theory for older contest students.' },
      { course: 'kids-coding-blocks-masterclass', code: 'USMC / 03', title: 'Coding for kids', note: 'Blocks to text code, the base under Bebras and robotics.' }
    ]
  },

  sections: [
    {
      id: 'table', tint: 'tint', eyebrow: 'The master table',
      h2: 'Which math and coding competitions can US students enter in 2026 to 2027?',
      lede: 'Nineteen programs, grouped as math contests, computing and robotics, then projects and clubs. Grades and dates are the organizers&rsquo; own as printed on November 1, 2026; where none were posted, the cell says so.',
      body: [
        { kind: 'table', caption: 'US math, coding and science competitions, 2026 to 2027 season (each organizer&rsquo;s website, read November 1, 2026; years for Continental Math League meets and the Math Kangaroo date are our reading, as noted)', head: ['Competition', 'Organizer', 'Grades', 'Format', '2026 to 2027 season'], rows: [
          ['MOEMS', 'Math Olympiads for Elementary and Middle Schools, Inc.', '4 to 6 (Division E); 6 to 8 (Division M)', 'Five contests of five problems, 30 minutes each', 'Monthly windows from November 9, 2026 to March 29, 2027'],
          ['Noetic Learning Math Contest', 'Noetic Learning', '2 to 8, a separate problem set per grade', '20 problems in 45 minutes (50 online)', 'Fall: November 12 to 25, 2026. Spring: April 1 to 15, 2027'],
          ['The Math League', 'The Math League (mathleague.com), formed in 1977', '4 to 12', 'Six high school contests; one contest each for grades 6, 7 and 8; intramural contests for grades 4 and 5', 'High school: October 20, 2026 to March 16, 2027. Grades 7 and 8: February 16 or 23, 2027. Grades 4 and 5: April 15, 2027 or later'],
          ['mathleague.org contests', 'Math League LLC', '3 to 12', 'Monthly qualifying tests; middle school Sprint round of 30 questions in 40 minutes', 'A new release each month from October; state championships in April, national high school championship in May'],
          ['Continental Mathematics League', 'Continental Mathematics League, offered since 1980', '2 to 9, plus a Calculus League', 'Grades 4 to 9: five meets of six questions, 30 minutes. Grades 2 and 3: three meets', 'Meets on 11/5, 12/3, 1/7, 2/4 and 3/4 (November 2026 to March 2027, our reading)'],
          ['MATHCOUNTS Competition Series', 'MATHCOUNTS Foundation', '6 to 8', 'School, chapter, state and national levels; Sprint round of 30 problems in 40 minutes, no calculator', 'Chapter: February 1 to 28, 2027. State: March 1 to 31, 2027. National: May 9 to 10, 2027, Washington, DC'],
          ['Math Kangaroo USA', 'Math Kangaroo in USA', '1 to 12', '75-minute multiple-choice test; 24 questions in grades 1 to 4, 30 from grade 5', 'The third Thursday in March: March 18, 2027 by our calculation'],
          ['Math circles', 'Local circles; Math Circle Network at the American Institute of Mathematics', 'Elementary to high school, by circle', 'Regular problem-solving sessions, not a contest', 'Term by term; hundreds of circles around the US'],
          ['Bebras Challenge USA', 'USA Bebras Computing Challenge', 'Ages 6 to 18, six age groups', '45 minutes of computational thinking tasks; free', 'November 9 to 20, 2026'],
          ['FIRST LEGO League', 'FIRST', 'K to 8 across two editions', 'Founders Edition: an autonomous robot in two-and-a-half minute matches, plus a project', 'BIOGLOW, released August 4, 2026; the final season of the program'],
          ['FIRST Tech Challenge', 'FIRST', '7 to 12 (ages 12 to 18)', 'Alliance matches: a 30-second AUTO period, then a 2-minute TELEOP period', 'BIOBUZZ, released September 2026'],
          ['RECF Engage (VEX IQ and other kits)', 'REC Foundation', 'Under 12 and Under 15 teams', '60-second matches, some driven and some run by student code', 'Game: Tier Takeover. RECF World Championship in St. Louis in 2027'],
          ['Science Olympiad', 'Science Olympiad', '6 to 9 (Division B); 9 to 12 (Division C)', '23 team events per division, including Codebusters', 'National tournament May 14 to 15, 2027, The Ohio State University'],
          ['ACSL', 'American Computer Science League', 'K to 12; Elementary Division grades 3 to 6', 'Four contests; Junior, Intermediate and Senior add a programming problem solved in 72 hours', 'October 19, 2026 to May 23, 2027; Finals Saturday, May 29, 2027'],
          ['USACO', 'USA Computing Olympiad', 'Open to all; everyone starts in Bronze', 'Typically 3 or 4 problems over 4 to 5 hours, in C, C++, Java or Python; no fee', 'Only the 2025 to 2026 schedule was posted on November 1, 2026'],
          ['CyberPatriot', 'Air &amp; Space Forces Association', 'Middle and high school', 'Teams of two to six find and fix security problems in virtual systems', 'First round October 22 to 25, 2026; National Finals March 12 to 16, 2027'],
          ['Regeneron ISEF', 'Society for Science', '9 to 12', 'An independent research project, entered through a Society-affiliated fair', 'International fair in Los Angeles, California, in May 2027'],
          ['Girls Who Code Clubs', 'Girls Who Code', '3 to 12', 'Free clubs, about 1 to 2 hours a week, in person or online', 'The school year; Pathways runs year-round online for grades 9 to 12'],
          ['Hour of AI (formerly Hour of Code)', 'CodeAI (formerly known as Code.org)', 'Kindergarten and up', 'An activity that fits one class period', 'CSEdWeek, December 7 to 11, 2026']
        ] },
        { kind: 'source', html: 'Sources, all read on November 1, 2026 (or on October 31, 2026 for raw copies re-checked that day): <a class="ag-inline-link" href="https://www.moems.org/pages/about-the-program" rel="noopener" target="_blank">moems.org</a>, <a class="ag-inline-link" href="https://www.noetic-learning.com/mathcontest/" rel="noopener" target="_blank">noetic-learning.com</a>, <a class="ag-inline-link" href="https://www.mathleague.com/" rel="noopener" target="_blank">mathleague.com</a>, <a class="ag-inline-link" href="https://mathleague.org/" rel="noopener" target="_blank">mathleague.org</a>, <a class="ag-inline-link" href="https://cmleague.com/" rel="noopener" target="_blank">cmleague.com</a>, <a class="ag-inline-link" href="https://www.mathcounts.org/programs/mathcounts-competition-series" rel="noopener" target="_blank">mathcounts.org</a>, <a class="ag-inline-link" href="https://mathkangaroo.org/mks/" rel="noopener" target="_blank">mathkangaroo.org</a>, <a class="ag-inline-link" href="https://www.mathcircles.org/" rel="noopener" target="_blank">mathcircles.org</a>, <a class="ag-inline-link" href="https://www.bebraschallenge.org/" rel="noopener" target="_blank">bebraschallenge.org</a>, <a class="ag-inline-link" href="https://www.firstinspires.org/programs/fll" rel="noopener" target="_blank">firstinspires.org</a>, <a class="ag-inline-link" href="https://www.robotevents.com/" rel="noopener" target="_blank">robotevents.com</a>, <a class="ag-inline-link" href="https://www.soinc.org/" rel="noopener" target="_blank">soinc.org</a>, <a class="ag-inline-link" href="https://www.acsl.org/get-started/schedule" rel="noopener" target="_blank">acsl.org</a>, <a class="ag-inline-link" href="https://usaco.org/" rel="noopener" target="_blank">usaco.org</a>, <a class="ag-inline-link" href="https://www.uscyberpatriot.org/competition/competition-schedule/" rel="noopener" target="_blank">uscyberpatriot.org</a>, <a class="ag-inline-link" href="https://www.societyforscience.org/isef/" rel="noopener" target="_blank">societyforscience.org</a>, <a class="ag-inline-link" href="https://girlswhocode.com/programs" rel="noopener" target="_blank">girlswhocode.com</a> and <a class="ag-inline-link" href="https://hourofai.org/" rel="noopener" target="_blank">hourofai.org</a>. AMC contests are omitted: their organizer&rsquo;s site could not be read.' }
      ]
    },
    {
      id: 'by-grade', tint: 'deep', eyebrow: 'By grade',
      h2: 'Which competition fits my child&rsquo;s grade?',
      lede: 'Start from the grade, not the brand. This table is our grouping of the grade ranges in the master table.',
      body: [
        { kind: 'table', caption: 'Competitions open to each grade band in 2026 to 2027 (our grouping of the organizers&rsquo; published grade ranges)', head: ['Grade band', 'Math', 'Computing and robotics', 'Projects and clubs'], rows: [
          ['K to 1', 'Math Kangaroo (kindergarten sits at grade 1 level)', 'Bebras from age 6; FIRST LEGO League Future Edition', 'Hour of AI activities'],
          ['2 to 3', 'Noetic, Continental Math League (three meets), Math Kangaroo', 'Bebras; ACSL Elementary from grade 3; FLL Founders Edition from grade 2', 'Girls Who Code Clubs from grade 3; a family math circle'],
          ['4 to 5', 'MOEMS Division E, Noetic, CML, Math League grades 4 and 5, mathleague.org, Math Kangaroo', 'Bebras, ACSL Elementary, FLL, RECF Engage Under 12', 'Clubs and circles'],
          ['6 to 8', 'MOEMS Division M, MATHCOUNTS, Noetic to grade 8, CML, both Math Leagues, Math Kangaroo', 'ACSL Junior, CyberPatriot Middle School, Science Olympiad B, FTC from grade 7, RECF Under 15', 'Clubs, math circles, a first science fair'],
          ['9 to 12', 'Math League high school contests, mathleague.org, Math Kangaroo, CML to grade 9', 'USACO, ACSL Intermediate and Senior, CyberPatriot, FTC, Science Olympiad C', 'Regeneron ISEF, Girls Who Code Pathways']
        ] },
        { kind: 'p', mt: true, html: '<b>Why grade 6 is a crossroads.</b> Sixth grade is the one year where nearly every math contest overlaps: a sixth grader can sit MOEMS in either division, the Noetic grade 6 paper and a first MATHCOUNTS year. It is also the last ACSL Elementary year and the first Science Olympiad Division B year. Below grade 2, few contests exist, and puzzles, counting games and a first block-coding activity are the honest start.' }
      ]
    },
    {
      id: 'math', tint: 'tint', eyebrow: 'Math contests',
      h2: 'Which US math contests should elementary and middle schoolers try?',
      lede: 'These contests differ less in topic than in rhythm: monthly through the winter, once in March, or twice a year. Pick the rhythm your child&rsquo;s week can carry, then open its guide.',
      body: [
        { kind: 'p', html: '<b>MOEMS.</b> The <a class="ag-inline-link" href="/moems-math-olympiad-preparation">MOEMS preparation guide</a> suits a fourth to eighth grader who likes a short, deep puzzle, since each sitting holds only five problems. It lays out the five 2026 to 2027 windows, the award ladder and a strategy toolkit, and every problem in it was written by our teachers.' },
        { kind: 'p', html: '<b>Noetic.</b> Noetic starts at grade 2 and writes a separate problem set for every grade, so a second grader never meets fourth grade content. Our <a class="ag-inline-link" href="/noetic-math-contest-preparation">Noetic contest guide</a> covers the fall and spring windows, the official At-Home Edition, and bar-model drawing for comparison word problems.' },
        { kind: 'p', html: '<b>Math League.</b> Two separate organizations share this name, which confuses many parents. The <a class="ag-inline-link" href="/math-league-contest-preparation">Math League contest guide</a> untangles mathleague.com from mathleague.org, explains this year&rsquo;s calculator reversal, and shows how a scoring rule with a penalty changes when a student should guess.' },
        { kind: 'p', html: '<b>Continental Math League.</b> CML asks students to choose between two divisions that differ mainly in how much reading the questions demand. Our <a class="ag-inline-link" href="/continental-math-league-preparation">CML preparation guide</a> sets out the meet dates for grades 2 to 9 and teaches a read, restate, then solve habit for wordy problems.' },
        { kind: 'p', html: '<b>Several contests compared.</b> If you are weighing MATHCOUNTS against Math Kangaroo and MOEMS for a middle schooler, <a class="ag-inline-link" href="/math-competitions-for-middle-school-students">our middle school math competitions comparison</a> puts the three side by side and shows how much time each format gives a single problem.' },
        { kind: 'p', html: '<b>Math circles.</b> Not every strong young mathematician wants a stopwatch. The <a class="ag-inline-link" href="/online-math-circle-for-kids">online math circle guide</a> explains what a circle is, where the US network came from, and how an exploration session differs from contest practice,.' },
        { kind: 'p', html: '<b>Art of Problem Solving.</b> Many contest families use AoPS books or classes. Our <a class="ag-inline-link" href="/art-of-problem-solving-alternative">neutral AoPS comparison</a> sets the options out by criteria rather than claims, so a parent can decide whether live small-group teaching, a self-paced platform or a campus program fits their child.' },
        { kind: 'p', mt: true, html: '<b>What changed this year.</b> The Math League (mathleague.com) first said calculators would be banned from its 2026 to 2027 contests, then posted a notice dated July 4, 2026 allowing them this school year and moving the ban to the next. MATHCOUNTS, meanwhile, says it is developing a standalone program for grades 3 to 5; no dates for it were posted on November 1, 2026.' }
      ]
    },
    {
      id: 'coding', tint: 'deep', eyebrow: 'Coding and robotics',
      h2: 'What coding and robotics competitions are there for US kids and teens?',
      lede: 'Computing contests split into three families: written puzzle contests that need no programming (Bebras, ACSL Elementary), programming contests judged by automatic tests (ACSL upper divisions, USACO), and team builds where a robot or device has to work on the day (FIRST, RECF, Science Olympiad).',
      body: [
        { kind: 'p', html: '<b>Bebras.</b> Bebras is the gentlest door into computer science competitions because it is free and needs no coding at all. Our <a class="ag-inline-link" href="/bebras-challenge-practice">Bebras practice guide</a> explains the November 2026 dates, the six age groups and how the scoring rewards leaving a hard task blank, with a stack puzzle of our own.' },
        { kind: 'p', html: '<b>FIRST LEGO League.</b> A team coach or parent preparing for the last FLL season will want <a class="ag-inline-link" href="/first-lego-league-coding-help-usa">our FIRST LEGO League coding help</a>, which reads the BIOGLOW rulebook closely and covers the program&rsquo;s end in 2027 and what replaces it, plus how to plan when only the highest of three matches counts.' },
        { kind: 'p', html: '<b>FIRST Tech Challenge.</b> High school teams writing Java or Blocks for a robot controller can turn to the <a class="ag-inline-link" href="/ftc-programming-help">FTC programming help page</a>. It works through OpModes, the AUTO and TELEOP periods in this season&rsquo;s manual, and a joystick shaping lesson that makes a robot easier to drive precisely.' },
        { kind: 'p', html: '<b>VEX IQ and RECF Engage.</b> Robotics clubs built on VEX IQ hardware face a new split this season between the REC Foundation and VEX Robotics. The <a class="ag-inline-link" href="/vex-iq-programming-help">VEX IQ programming help page</a> sets out what that split means for events and teaches autonomous routines in short segments with sensor checks.' },
        { kind: 'p', html: '<b>Science Olympiad.</b> Of the 23 events in each division, only a handful involve code or circuits. Our <a class="ag-inline-link" href="/science-olympiad-coding-events-help">Science Olympiad coding events guide</a> picks those out, such as Codebusters and Electric Vehicle, and teaches the modular arithmetic behind affine ciphers.' },
        { kind: 'p', html: '<b>ACSL.</b> ACSL rewards students who can trace code and reason about number systems, Boolean algebra and graphs by hand. The <a class="ag-inline-link" href="/acsl-competition-preparation">ACSL preparation guide</a> covers all five divisions and the four contest windows, and pairs hand tracing with short Python checkers.' },
        { kind: 'p', html: '<b>Middle school and high school roundups.</b> For a single list by school stage, see <a class="ag-inline-link" href="/coding-competitions-for-middle-school-students">coding competitions for middle school students</a>, which leans toward first contests and number bases, and <a class="ag-inline-link" href="/coding-competitions-for-high-school-students">coding competitions for high school students</a>, which adds USACO, CyberPatriot and the AI challenges and teaches running-time estimates.' },
        { kind: 'p', mt: true, html: '<b>Two changes to know about.</b> FIRST says the 2026 to 2027 BIOGLOW season will be the final season of FIRST LEGO League, run in two editions, Founders and Future, and LEGO Education says its own LEGO League launches in August 2027. Separately, the REC Foundation now states that it is not authorized to organize VEX Robotics competitions and that its events will not qualify teams for the 2026 to 2027 VEX Robotics World Championship; RECF runs its own world championship in St. Louis in 2027.' },
        { kind: 'p', html: '<b>Written, judged or built.</b> A written contest such as Bebras or ACSL needs a quiet half hour and a supervising adult; a judged contest such as USACO needs a long block of time and a working compiler; a robot season needs a team, a coach and months of build time. An ACSL year is four sittings; an FTC team meets several afternoons a week from September.' }
      ]
    },
    {
      id: 'projects', tint: 'tint', eyebrow: 'Projects and next steps',
      h2: 'What comes after a first contest: projects, clubs and next steps?',
      lede: 'After timed contests, many students want something longer and their own: a research project, a club, or a plan for the whole year.',
      body: [
        { kind: 'p', html: '<b>Regeneron ISEF.</b> A high schooler with a software, math or robotics research idea should read the <a class="ag-inline-link" href="/isef-computer-science-project-mentoring">ISEF computer science project mentoring guide</a>. It covers the affiliated-fair route, this season&rsquo;s AI-use rules and fair comparisons across seeded trials; the research stays the student&rsquo;s.' },
        { kind: 'p', html: '<b>Girls Who Code.</b> A student finishing a free club year often asks where to go next. The <a class="ag-inline-link" href="/girls-who-code-next-step">Girls Who Code next step page</a> maps the Clubs and Pathways programs by grade and shows how to move from block code to Python one block at a time.' },
        { kind: 'p', html: '<b>After the Hour of Code.</b> Since the Hour of Code became the Hour of AI, many teachers and parents are unsure what follows a one-hour activity. <a class="ag-inline-link" href="/after-hour-of-code-next-steps">Our after Hour of Code guide</a> lists the free CodeAI courses by grade and teaches loops by spotting repetition, including the classic fencepost slip.' },
        { kind: 'p', html: '<b>The calendar.</b> Families entering three or more programs should keep the <a class="ag-inline-link" href="/us-coding-math-and-ai-competitions-calendar">US competitions calendar for 2026 to 2027</a> open while planning, since it lists every dated deadline month by month and marks which ones need an adult to register.' },
        { kind: 'p', mt: true, html: '<b>Where independence rules apply.</b> Society for Science says an ISEF project should reflect independent research done by the student and asks that any mentor&rsquo;s part be set out in the research plan; FIRST&rsquo;s participation rules say all work presented at events is the work of the children on the team. We follow both: a teacher explains methods and questions a plan, but never writes the code, the paper or the robot program.' }
      ]
    },
    {
      id: 'entry', tint: 'deep', eyebrow: 'Entering without a school team',
      h2: 'Can my child enter if their school does not take part?',
      lede: 'Usually, but each organizer has its own route, and some results count only when a school runs the sitting. Check before the registration deadline.',
      body: [
        { kind: 'table', caption: 'Routes for a student without a participating school (organizers&rsquo; websites, read October 31 and November 1, 2026)', head: ['Competition', 'What the organizer says'], rows: [
          ['MOEMS', 'Open to public, private, parochial and home schools, institutes and, with restrictions, individuals'],
          ['Noetic', 'An At-Home Edition exists, but its scores are not official and do not qualify for awards'],
          ['The Math League', 'A homeschool package is sent in May for testing at home; official participation runs through an accredited local school'],
          ['mathleague.org', 'Parents or outside coaches may act as the point of contact for students at a school that will not take part'],
          ['Continental Math League', 'A student whose school does not participate may enter as a Home School, which need not mean schooled at home'],
          ['Bebras', 'A homeschool teacher registers as coordinator under a name such as Home School plus initials'],
          ['ACSL', 'The team advisor can be any teacher, parent or other adult with computer science experience'],
          ['USACO', 'Open to everyone online, with no fee']
        ] },
        { kind: 'p', mt: true, html: '<b>Worked example (ours): a homeschooled sixth grader.</b> A grade 6 student studies at home and wants official results. MOEMS gives five sittings, the Noetic school edition two (only through a school team; the At-Home Edition would be unofficial), Bebras one and ACSL four, so a year with all four holds 5 + 2 + 1 + 4 = 12 official sittings by our count. Counting items: MOEMS is 5 x 5 = 25 problems, Noetic 2 x 20 = 40, and Bebras 15 questions according to its students page, so 80 timed items before ACSL. Our advice would be to drop Noetic if no school team is available, since the home edition earns no awards, and to keep MOEMS (homeschools are named as eligible) with Bebras and ACSL, where a parent can coordinate. Arithmetic and advice are ours.' }
      ]
    },
    {
      id: 'choose', tint: 'tint', eyebrow: 'How to choose',
      h2: 'How do you choose the right competition for your child?',
      lede: 'Five steps, in this order, with the master table open.',
      body: [
        { kind: 'ol', items: [
          '<b>Find the grade band.</b> Read your child&rsquo;s row in the grade table above and cross off anything outside the organizer&rsquo;s published range.',
          '<b>Pick the kind of challenge.</b> Short puzzles (MOEMS, Bebras), longer timed papers (Noetic, Math Kangaroo), team contests (MATHCOUNTS, Science Olympiad), coding with automatic judging (ACSL, USACO), or builds (FIRST, RECF).',
          '<b>Check the entry route.</b> Ask the school first. If the school does not take part, use the routes table to see whether a parent, a homeschool group or an outside coach can register, and whether the result would be official.',
          '<b>Count the season.</b> Mark every sitting and deadline on one calendar. A student entering three contests can easily face two in one week in November 2026, when MOEMS, Noetic and Bebras windows all open.',
          '<b>Keep one, add one.</b> Commit to one contest for the year and try one more for a single sitting. After the season, keep whichever your child would choose to do again without being asked.'
        ] },
        { kind: 'p', mt: true, html: '<b>November 2026 is crowded.</b> Bebras runs November 9 to 20, MOEMS contest 1 runs November 9 to 30 and the Noetic fall window runs November 12 to 25, all in 2026, while ACSL contest 1 has been open since October 19. For a younger child, two sittings in one fortnight is enough; spring is lighter, with Noetic&rsquo;s second window from April 1, 2027 and The Math League&rsquo;s grade 4 and 5 contests on or after April 15.' },
        { kind: 'p', html: '<b>Our rule in class.</b> No real contest item, sample question or answer key is put in front of a student. Each lesson takes one idea (an organized list, working backward, a loop, a base change), shows it once on problems our teachers wrote, then mixes problems so the student must choose the idea alone. The organizer&rsquo;s own free samples are kept for a final timed run.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Readiness',
    h2: 'Four stages from first contest to independent competitor',
    lede: 'Our teaching guide to how contest skill grows over a few seasons; no organizer uses it.',
    table: { caption: 'Stages we look for in class (ours)', head: ['Stage', 'What a parent might notice'], rows: [
      ['1. Curious', 'Enjoys a puzzle at home and asks for another'],
      ['2. Steady', 'Finishes a timed set without giving up halfway'],
      ['3. Strategic', 'Chooses a method before calculating or coding'],
      ['4. Independent', 'Finds the next contest and prepares with little prompting']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask what the hardest problem was and how your child tried it; that tells you more than any score.'
    ] },
    right: { h3: 'For students', ps: [
      'Stuck? Try a smaller version of the problem. It works on math and on code.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for competition students',
    lede: 'Live online with a regular teacher, batch or one to one.',
    bands: [
      { num: 'I', h3: 'Contest math', sub: 'Grades 3 to 12', courses: [
        { code: 'USMC / MTH / 01', slug: 'middle-school-math-competitions-course', title: 'Math competitions', blurb: 'The middle school contest course.' },
        { code: 'USMC / MTH / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad mathematics', blurb: 'For older, harder problems.' },
        { code: 'USMC / MTH / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving', blurb: 'Patterns and logic for younger solvers.' }
      ] },
      { num: 'II', h3: 'Competition coding', sub: 'Grades 2 to 12', courses: [
        { code: 'USMC / CDE / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Blocks first, then text.' },
        { code: 'USMC / CDE / 02', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Algorithms for USACO-style judging.' },
        { code: 'USMC / CDE / 03', slug: 'picoctf-cyberpatriot-cybersecurity-competition-prep-for-teens', title: 'Cybersecurity contests', blurb: 'CyberPatriot and capture-the-flag skills.' }
      ] },
      { num: 'III', h3: 'Bridges', sub: 'Between math and code', courses: [
        { code: 'USMC / BRG / 01', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Testing patterns in Python.' },
        { code: 'USMC / BRG / 02', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The language most contests accept.' },
        { code: 'USMC / BRG / 03', slug: 'hackathon-prep-for-kids-coding-innovation-ai-projects-course', title: 'Project building', blurb: 'From idea to a working entry.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live classes that follow the contest season',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school, in every US time zone.' },
      { time: 'Weekends', l: 'Longer sessions before a sitting.' },
      { time: '1-on-1', l: 'Paced to one student&rsquo;s contests.' }
    ],
    cells: [
      { h3: 'Season aware', p: 'Lessons line up with the next window.' },
      { h3: 'Original problems', p: 'Written by our teachers, labelled ours.' },
      { h3: 'Math and code', p: 'One teacher can cover both.' },
      { h3: 'Explain first', p: 'Students talk through a method aloud.' },
      { h3: 'Every state', p: 'Live online, coast to coast.' },
      { h3: 'Two formats', p: 'A batch of 15 to 20, or private.' }
    ]
  },

  projectsH2: 'What our students have built',
  projectsLede: 'Contest ideas often grow into projects; a few are on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Reviews left by parents on Google, shown as written.',

  fees: {
    h2: 'Fees',
    lede: 'Contest entry fees are paid to each organizer, usually by the school or coordinator; our fee covers classes only. Billing is monthly, so you can pause when the season ends.',
    free: ['A free first class', 'A quick contest-fit chat', 'No card needed'],
    group: ['A batch of 15 to 20', 'One regular teacher', 'Choose your batch', 'Monthly billing'],
    one: ['A private teacher', 'A plan built around your contests', 'Flexible times']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'US math and coding competitions: common questions',
    items: [
      { q: 'What math competitions are there for elementary school students in the US?', a: 'For grades 2 to 5 the main options are the Noetic Learning Math Contest (grades 2 to 8), MOEMS Division E (grades 4 to 6), the Continental Mathematics League (grades 2 to 9), Math Kangaroo USA (grades 1 to 12) and the mathleague.org elementary contests.' },
      { q: 'What is the easiest coding competition for a beginner?', a: 'The Bebras Challenge is the usual first step. It is free, open to ages 6 to 18, takes 45 minutes, and its organizers say the tasks can be done without any preparation or studying. ACSL\'s Elementary Division, grades 3 to 6, can follow.' },
      { q: 'Is FIRST LEGO League ending?', a: 'Yes. FIRST says the 2026 to 2027 BIOGLOW season is the final season of FIRST LEGO League. FIRST is preparing new K to 8 programs, and LEGO Education says its own LEGO League launches in August 2027, so teams can finish this season and then choose a successor.' },
      { q: 'What happened to the Hour of Code?', a: 'Code.org\'s organization now calls itself CodeAI, and its site says the Hour of Code is now the Hour of AI, at hourofai.org. Activities still fit one class period, and CSEdWeek runs December 7 to 11, 2026.' },
      { q: 'Are VEX IQ competitions still run by the REC Foundation?', a: 'Not in the same way. The REC Foundation now states it is not authorized to organize VEX Robotics competitions and that its events will not qualify teams for the 2026 to 2027 VEX Robotics World Championship. RECF runs its own events, including RECF Engage, with a world championship in St. Louis in 2027.' },
      { q: 'Can homeschooled students enter these competitions?', a: 'Many can. MOEMS names home schools as eligible, Bebras lets a homeschool teacher register, ACSL accepts a parent with computer science experience as advisor, and USACO is open to anyone online. Noetic\'s At-Home Edition is unofficial and earns no awards, so check each organizer\'s rule.' },
      { q: 'What days and times are your classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you connected with any of these competitions?', a: 'No. Modern Age Coders is an independent online school and is not affiliated with any organizer named on this page, and their names and trademarks belong to them.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More contest guides outside this hub',
    lede: 'Detailed pages for competitions that sit just beyond this guide&rsquo;s sections.',
    items: [
      { href: '/mathcounts-preparation', label: 'MATHCOUNTS preparation', p: 'The four rounds, chapter to national, taught step by step.' },
      { href: '/math-kangaroo-usa-preparation', label: 'Math Kangaroo USA', p: 'The March test for grades 1 to 12 in detail.' },
      { href: '/math-olympiad-amc-tutoring', label: 'AMC and olympiad tutoring', p: 'For students heading past middle school contests.' },
      { href: '/cyberpatriot-preparation', label: 'CyberPatriot preparation', p: 'Rounds, roles and practice for security teams.' },
      { href: '/presidential-ai-challenge-guide', label: 'Presidential AI Challenge', p: 'Team AI projects for K to 12 students.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us the grade and your contest shortlist; the teacher tries a few of our problems and suggests where to begin.',
    readFirst: 'Curious how a lesson runs? Read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> before you book.',
    note: 'Our teachers work live from India at hours chosen for US afternoons and weekend mornings; WhatsApp is often the quickest way to reach us.',
    formNote: 'No card is needed, and the first class costs nothing.'
  },

  footer: {
    cols: [
      { h4: 'Math contests', links: [
        { href: '/moems-math-olympiad-preparation', label: 'MOEMS' },
        { href: '/noetic-math-contest-preparation', label: 'Noetic' },
        { href: '/mathcounts-preparation', label: 'MATHCOUNTS' },
        { href: '/math-kangaroo-usa-preparation', label: 'Math Kangaroo USA' }
      ] },
      { h4: 'Coding contests', links: [
        { href: '/bebras-challenge-practice', label: 'Bebras' },
        { href: '/acsl-competition-preparation', label: 'ACSL' },
        { href: '/us-coding-math-and-ai-competitions-calendar', label: 'Season calendar' },
        { href: '/coding-classes-in-united-states', label: 'All US pages' }
      ] }
    ],
    bottomRight: 'One table, every contest'
  },

  personalityCss: `
.ag-root.ag-usmc .ag-hero h1 { letter-spacing: -0.016em; max-width: 22ch; }
.ag-root.ag-usmc .ag-capsule { border-left-width: 5px; }
.ag-root.ag-usmc #table .ag-table td:first-child { font-weight: 600; white-space: nowrap; }
.ag-root.ag-usmc .ag-table caption { text-align: left; }
.ag-root.ag-usmc .ag-section p b { color: var(--ag-accent); }
.ag-root.ag-usmc .ag-steps li { margin-bottom: 0.5rem; }
`,

  dossier: {
    curriculumAuthority: 'Each organizer\'s own website, read raw with curl on 31 October 2026 (member raw copies) or 1 November 2026 (fresh copies in uk-us-gap/src/us-math-and-coding-competitions-guide/): moems.org, noetic-learning.com, mathleague.com, mathleague.org, cmleague.com, mathcounts.org, mathkangaroo.org, mathcircles.org, bebraschallenge.org, firstinspires.org, education.lego.com, robotevents.com, recf.org, soinc.org, acsl.org, usaco.org, uscyberpatriot.org, societyforscience.org, girlswhocode.com, hourofai.org and code.org.',
    localProject: 'Our grade-band table built from the published ranges; the worked example of a homeschooled grade 6 student (12 official sittings, 80 timed items before ACSL, by our arithmetic); the March 18, 2027 Math Kangaroo date from the third-Thursday rule; the five-step chooser; the readiness stages. Lesson family: matching a contest to grade, entry route and season.',
    requiredMentions: [
      'Sixth grade is the one year where nearly every math contest overlaps',
      '5 + 2 + 1 + 4 = 12 official sittings',
      'so 80 timed items before ACSL',
      'Only the 2025 to 2026 schedule was posted on November 1, 2026',
      'Two separate organizations share this name, which confuses many parents',
      'Written, judged or built',
      'November 2026 is crowded',
      'Keep one, add one.',
      'may enter as a Home School, which need not mean schooled at home',
      'RECF runs its own world championship in St. Louis in 2027'
    ],
    sources: [
      { claim: 'MOEMS divisions, contest format, 2026 to 2027 windows and eligibility.', url: 'https://www.moems.org/pages/about-the-program' },
      { claim: 'MATHCOUNTS grades, four levels, Sprint round, 2027 chapter, state and national dates, grades 3 to 5 program in development.', url: 'https://www.mathcounts.org/programs/mathcounts-competition-series' },
      { claim: 'Math Kangaroo USA test length, grades, question counts and third-Thursday rule.', url: 'https://mathkangaroo.org/mks/faqs/about-the-test/' },
      { claim: 'FIRST LEGO League BIOGLOW as the final season, editions, grades and release date.', url: 'https://www.firstinspires.org/programs/fll' },
      { claim: 'ACSL divisions, contest windows and Finals date.', url: 'https://www.acsl.org/get-started/schedule' },
      { claim: 'USACO eligibility, contest format and posted schedule.', url: 'https://usaco.org/index.php?page=instructions' },
      { claim: 'CyberPatriot 19 team size and 2026 to 2027 schedule.', url: 'https://www.uscyberpatriot.org/competition/competition-schedule/' },
      { claim: 'Hour of Code renamed Hour of AI; CodeAI trademark notice; CSEdWeek dates.', url: 'https://code.org/en-US/hour-of-ai' },
      { claim: 'RECF statement on VEX Robotics competitions and World Championship qualification.', url: 'https://www.robotevents.com/' }
    ],
    rejectedClaims: [
      'AMC 8, AMC 10 and AMC 12: maa.org returned 403 to other writers; not retried and no AMC date or rule printed.',
      'vexrobotics.com returned 403; no VEX Robotics game, command or rule printed, only RECF\'s own statements.',
      'Every entry fee and price on organizers\' sites (ACSL team fees, CML home school fee, Noetic and MOEMS fees): not printed (no typed currency).',
      'USACO 2026 to 2027 dates: not posted on 1 November 2026; the table says so.',
      'Bebras teachers page "graded out of a total of 90 marks" conflicts with the students page maximum of 180; neither printed here.',
      'Girls Who Code and CodeAI impact statistics, including gender and demographic figures: not used (brief rule 7).',
      'Any contest problem, sample item or answer key: not reproduced; every example is ours.',
      'Any affiliation with the organizers: none, stated in the FAQ.'
    ]
  }
};
