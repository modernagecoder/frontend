'use strict';
// Ontario high school diploma (OSSD) credits explained (ag- informational door; Canada cluster Plan 2, row 19).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Sources, fetched raw with curl on 22 October 2026 (copies in keyword-research-2026-09/ca/src-pilots/ontario-high-school-diploma-credits-explained/):
//  - ontario.ca/page/high-school-graduation-requirements, which redirects to /page/earning-your-high-school-diploma (re-fetched today as
//    ossd-now.html; its body text, normalised as ossd-now.norm.txt, is identical to the research copy; footer "Updated: September 02,
//    2026"). Quoted: "What you need to earn an Ontario Secondary School Diploma depends on the year you started Grade 9."; "You need the
//    following 17 compulsory credits to get your" OSSD; "You must earn 13 optional credits by successfully completing courses from your
//    school's program and course calendar."; "You need the following 18 compulsory credits to get your" OSSD; "You must earn 12 optional
//    credits"; "4 credits in English (1 credit per grade)"; "3 credits in mathematics (Grade 9, Grade 10 and 1 credit in Grade 11 or 12)";
//    "3 credits in mathematics (at least 1 credit in Grade 11 or 12)"; "1 credit in technological education" then "(Grade 9 or Grade 10)";
//    "Of the 17 compulsory credits, you must complete 1 from the following group:" with business studies, computer studies, cooperative
//    education, mathematics, science and technological education and the "in addition to" wording; "Of the 18 compulsory credits, you
//    must complete 1 from each of the following groups:"; Group 3 list; the French and co-op maxima; "Optional credits may include up to 4
//    credits earned through approved dual credit programs"; ESL/ELD "up to 3 credits"; literacy "For most students, this means passing
//    the" OSSLT; financial literacy "a mark of at least 70%", "5% of your final mark", "2 attempts", "This requirement takes effect in
//    the 2026-2027 school year."; online learning "at least 2 online learning credits"; "Everyone needs 40 hours of" community involvement;
//    "You can start collecting volunteer hours in the summer before you begin Grade 9."
//  - EQAO (facts-schools-contests.md rows 55, 59, 60; research copies in ca/src/ontario, copied here; a fresh fetch today returned 403,
//    so the host was not retried): OSSLT window November 3 to 30, 2026 (en dash in the source, paraphrased); "Successful completion of the
//    literacy test is one of the requirements to earn an Ontario Secondary School Diploma."; "Students can take the test starting in
//    Grade 10."
//  - The Ontario Curriculum, Grades 10 to 12: Computer Studies (2008): "Note: Each of the courses listed above is worth one credit.";
//    "a credit is granted and recorded for every course in which the student's grade is 50% or higher"; half-credit courses "require a
//    minimum of fifty-five hours of scheduled instructional time"; Group 3 footnote.
//  - Ontario curriculum content API: the computer studies course list (ICD2O, ICS3U, ICS3C, ICS4U, ICS4C).
// Our own material, labelled on the page: the side-by-side table of the two rule sets (parts only, never added together); the credit
// tally program in Python 3.13 (run: a made-up student first prints ['STEM-related group: none yet'], then, with one computer studies
// credit added, "all compulsory credits counted"; six further test cases run, including a fourth math credit, a third science credit,
// one and two half credits of computer studies, and an empty list); the questions to ask the school; the ladder.
// Informational only: the page gives no advice on any individual student's credits and sends families to the school.
// Lesson family: counting with conditions (tally, compare with a minimum, then look for what is left over).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const TALLY_PY = `# Tally compulsory OSSD credits for a made-up student (ours, a teaching
# example of counting with conditions, not a graduation audit).
# Rules: ontario.ca, students who started Grade 9 in 2024 or later.
# Simplified: it ignores which grade each credit was earned in.

COMPULSORY = {"english": 4, "math": 3, "science": 2, "tech_ed": 1,
              "canadian_history": 1, "canadian_geography": 1, "arts": 1,
              "health_pe": 1, "french": 1, "career_studies": 0.5,
              "civics": 0.5}
STEM_GROUP = ["business", "computer_studies", "coop",
              "math", "science", "tech_ed"]   # math, science, tech_ed only beyond their own minimum

def tally(transcript):
    """transcript: list of (subject, credit) pairs. Returns totals."""
    totals = {}
    for subject, credit in transcript:
        totals[subject] = totals.get(subject, 0) + credit
    return totals

def check(transcript):
    totals = tally(transcript)
    missing = []
    for subject, needed in COMPULSORY.items():
        if totals.get(subject, 0) < needed:
            missing.append(subject + ": " + str(totals.get(subject, 0)) + " of " + str(needed))
    stem_ok = False
    for subject in STEM_GROUP:
        spare = totals.get(subject, 0) - COMPULSORY.get(subject, 0)
        if spare >= 1:            # a full credit left over after its own minimum
            stem_ok = True
    if not stem_ok:
        missing.append("STEM-related group: none yet")
    return missing


student = [("english", 1), ("english", 1), ("english", 1), ("english", 1),
           ("math", 1), ("math", 1), ("math", 1), ("science", 1), ("science", 1),
           ("tech_ed", 1), ("canadian_history", 1), ("canadian_geography", 1),
           ("arts", 1), ("health_pe", 1), ("french", 1),
           ("career_studies", 0.5), ("civics", 0.5)]

print(check(student))
student.append(("computer_studies", 1))     # ICS3U, say
print(check(student) or "all compulsory credits counted")`;

const GOV = '<a class="ag-inline-link" href="https://www.ontario.ca/page/high-school-graduation-requirements" rel="noopener" target="_blank">Earning your high school diploma, ontario.ca</a>';

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'OSSD CREDITS', blurb: 'The Ontario Secondary School Diploma in plain terms: both sets of credit rules, the STEM-related group, the technological education credit and where computer studies fits.' },
  slug: 'ontario-high-school-diploma-credits-explained',
  code: 'ohsd',
  accent: '#117041',
  accentRationale: 'Ontario diploma credits explained, Canada: a ledger green, #117041, allocated for this row; 6.8 RGB units from the nearest site accent (#12733B) and at least 14 from every other Canada accent, with contrast 5.80 on the paper #FBF8F2 and 4.99 on the deepest tint',
  pageType: 'market',
  market: CA,
  courseCodePage: true,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Ontario high school diploma credits explained',
  title: 'Ontario High School Credits Explained: OSSD Requirements',
  description: 'Ontario high school credits explained: the OSSD rules for Grade 9 starters from 2024 on and earlier, the STEM-related group, technological education and more.',
  ogDescription: 'What the Ontario Secondary School Diploma asks for, from the provincial government page: compulsory and optional credits, the STEM-related group, literacy, online learning and volunteer hours.',
  twitterDescription: 'The OSSD credit rules explained from ontario.ca, with where computer studies fits.',
  pageName: 'Ontario High School Diploma Credits Explained',
  webPageDescription: 'An informational guide to the Ontario Secondary School Diploma for families: the two sets of credit rules by the year a student started Grade 9, the compulsory credits, the STEM-related course group, the technological education credit, the other graduation requirements, and how a computer studies course earns its credit.',
  courseDescription: 'Live online coding and math classes for Ontario high school students, taught beside their school courses, in a batch or one to one. Ontario credits are not granted by us.',
  crumbs: [{ name: 'Canada', href: '/coding-classes-in-canada' }, { name: 'Ontario', href: '/coding-classes-in-ontario' }],
  crumbLabel: 'OSSD credits explained',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#two', label: 'Two rule sets' },
    { href: '#compulsory', label: 'Compulsory credits' },
    { href: '#stem', label: 'STEM group' },
    { href: '#other', label: 'Other requirements' }
  ],
  eyebrow: 'Ontario &middot; Grades 9 to 12 &middot; The OSSD, explained',
  h1: 'Ontario high school credits explained: what the OSSD asks for',
  lede: 'The Ontario Secondary School Diploma, the OSSD, is built from credits, and the rules for which credits count depend on one fact: the year a student started Grade 9. This page sets out both rule sets from the province&rsquo;s own graduation requirements page, explains the STEM-related course group and the technological education credit that arrived for newer students, and shows where computer studies fits. It is information, not advice about any one student; the school&rsquo;s guidance office confirms individual plans. Our role is teaching coding and math next to those courses; we do not grant Ontario credits.',
  secondaryCta: { href: '#two', label: 'Compare the two rule sets' },
  wa: 'Hello Modern Age Coders, my teen is in an Ontario high school and we would like help with coding or math beside their courses. Could we book a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students &middot; Coding and math beside school courses',
  spec: [
    ['Diploma', 'OSSD, Ontario'],
    ['Depends on', 'Year Grade 9 began'],
    ['From 2024', '17 compulsory, 13 optional'],
    ['Up to 2023', '18 compulsory, 12 optional'],
    ['Volunteer hours', '40'],
    ['Online credits', 'At least 2'],
    ['Source', 'ontario.ca'],
    ['We grant', 'No credits']
  ],
  capsuleQ: 'The short version',
  capsule: 'For students who started Grade 9 in 2024 or later, the Ontario Secondary School Diploma needs 17 compulsory credits and 13 optional credits, plus literacy and financial literacy requirements, 2 online learning credits and 40 volunteer hours. Modern Age Coders teaches coding and math beside them, live online, with Ontario Computer Science Companion.',

  picks: {
    eyebrow: 'Beside the diploma courses',
    h2: 'Courses that sit beside OSSD credits',
    lede: 'We teach alongside school courses rather than replacing them. These three match the computer studies and math credits families ask us about most.',
    items: [
      { course: 'ics3u-ics4u-computer-science-companion-course', code: 'OHSD / 01', title: 'Ontario Computer Science Companion', note: 'Help with ICS3U and ICS4U, the computer studies credits that can count in the STEM-related group.' },
      { course: 'ontario-grade-12-university-math-mhf4u-mcv4u-course', code: 'OHSD / 02', title: 'Ontario Grade 12 University Math', note: 'MHF4U and MCV4U support for students earning those Grade 12 math credits at school.' },
      { course: 'python-complete-masterclass-teens', code: 'OHSD / 03', title: 'Python for teens', note: 'A first programming language for Grade 9 and 10 students before their first computer studies credit.' }
    ]
  },

  sections: [
    {
      id: 'two', tint: 'tint', eyebrow: 'Start here',
      h2: 'Two sets of rules, decided by the year Grade 9 began',
      lede: 'The province&rsquo;s page opens with the sentence that matters most: &ldquo;What you need to earn an Ontario Secondary School Diploma depends on the year you started Grade 9.&rdquo; Students who started in 2023 or earlier follow one set of rules; students who started in 2024 or later follow another. Here they are side by side.',
      body: [
        { kind: 'table', caption: 'OSSD requirements by the year a student started Grade 9, from ontario.ca (page updated September 02, 2026; read 22 October 2026)', head: ['Requirement', 'Started Grade 9 in 2023 or earlier', 'Started Grade 9 in 2024 or later'], rows: [
          ['Compulsory credits', '18', '17'],
          ['Optional credits', '12', '13'],
          ['Literacy requirement', 'Yes', 'Yes, the provincial secondary school literacy requirement'],
          ['Financial literacy requirement', 'Not listed for this group', 'Yes, the provincial financial literacy graduation requirement'],
          ['Online learning credits', 'At least 2', 'At least 2'],
          ['Community involvement', '40 hours', '40 hours'],
          ['How the choice credits work', 'One credit from each of Groups 1, 2 and 3', 'One credit from the STEM-related course group'],
          ['Technological education', 'Group 3 option only', '1 compulsory credit, Grade 9 or Grade 10']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Reading the numbers',
          left: [
            'For the newer group, the page says: &ldquo;You need the following 17 compulsory credits to get your&rdquo; diploma, and &ldquo;You must earn 13 optional credits by successfully completing courses from your school&rsquo;s program and course calendar.&rdquo; We report the two parts as the page gives them.',
            'For students who started in 2023 or earlier, the same page lists 18 compulsory and 12 optional credits. In the newer rules, the three group credits of the earlier ones give way to two lines, one technological education credit and one credit from the STEM-related group, which is why the compulsory figure is one lower and the optional figure one higher.'
          ],
          rightH3: 'What the change means for a family',
          right: [
            'A student who started Grade 9 in September 2024 or later must take a technological education credit in Grade 9 or 10, and one credit from the STEM-related course group at some point. An older sibling may have followed the earlier rules, so the two can have different checklists.',
            'Guidance counsellors work from the student&rsquo;s own record. This page is a map of the rules, not a ruling on any one transcript.'
          ] },
        { kind: 'source', html: 'Source: ' + GOV + ' (the address high-school-graduation-requirements now opens the page Earning your high school diploma), updated September 02, 2026 and read 22 October 2026. Modern Age Coders is not linked with the Government of Ontario or any school board.' }
      ]
    },
    {
      id: 'compulsory', tint: 'deep', eyebrow: 'For students who started Grade 9 in 2024 or later',
      h2: 'The 17 compulsory credits, one line at a time',
      lede: 'The province lists the compulsory credits for the newer group in eleven lines plus the STEM-related group. The middle column is quoted from the page; the last column is our note.',
      body: [
        { kind: 'table', caption: 'Compulsory credits for students who started Grade 9 in 2024 or later, from ontario.ca (read 22 October 2026)', head: ['Subject', 'As the page lists it', 'Note (ours)'], rows: [
          ['English', '&ldquo;4 credits in English (1 credit per grade)&rdquo;', 'One in each of Grades 9 to 12'],
          ['Mathematics', '&ldquo;3 credits in mathematics (Grade 9, Grade 10 and 1 credit in Grade 11 or 12)&rdquo;', 'The senior credit can be any Grade 11 or 12 math course'],
          ['Science', '2 credits in science', ''],
          ['Technological education', '&ldquo;1 credit in technological education&rdquo;, followed by (Grade 9 or Grade 10)', 'New for this group'],
          ['Canadian history', '1 credit (Grade 10)', ''],
          ['Canadian geography', '1 credit (Grade 9)', ''],
          ['The arts', '1 credit', ''],
          ['Health and physical education', '1 credit', ''],
          ['French as a second language', '1 credit', ''],
          ['Career studies', '0.5 credit', 'Also where the financial literacy requirement sits'],
          ['Civics and citizenship', '0.5 credit', ''],
          ['STEM-related group', '1 credit from the group', 'Explained in the next section']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Two notes on English',
          left: [
            'English language learners may count up to 3 credits in English as a second language or English Literacy Development toward the 4 English credits; the page adds that the fourth credit must be a Grade 12 compulsory English course.',
            'The same page lists particular English and arts courses that can meet those compulsory lines too. The school course calendar shows which of them a school offers.'
          ],
          rightH3: 'A note on half credits',
          right: [
            'Career studies and civics are worth half a credit each, which is why they appear as 0.5. Other courses can sometimes be offered as half credits too; the 2008 Computer Studies document sets at least 55 scheduled hours for each half-credit course in that subject.',
            'Two half credits in the same subject make one credit. Our tally program further down handles half credits for exactly that reason.'
          ] }
      ]
    },
    {
      id: 'stem', tint: 'tint', eyebrow: 'The new choice credit',
      h2: 'The STEM-related course group, and where computer studies fits',
      lede: 'For the newer group, one compulsory credit is a choice from a list. The page puts it this way: &ldquo;Of the 17 compulsory credits, you must complete 1 from the following group:&rdquo;. The list is short, and three of its lines carry an important condition.',
      body: [
        { kind: 'table', caption: 'The STEM-related course group, as listed on ontario.ca (read 22 October 2026)', head: ['Option', 'Condition on the page', 'Note (ours)'], rows: [
          ['Business studies', 'None', ''],
          ['Computer studies', 'None', 'ICD2O, ICS3U, ICS3C, ICS4U and ICS4C are the computer studies courses on the current Ontario curriculum website'],
          ['Cooperative education', 'None', ''],
          ['Mathematics', '&ldquo;in addition to the 3 compulsory credits currently required&rdquo;', 'A fourth math credit'],
          ['Science', '&ldquo;in addition to the 2 compulsory credits currently required&rdquo;', 'A third science credit'],
          ['Technological education', '&ldquo;in addition to the 1 compulsory credit required&rdquo;', 'A second tech ed credit']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What &ldquo;in addition to&rdquo; means',
          left: [
            'A math, science or technological education credit only counts toward the STEM-related group if it is extra: beyond the subject&rsquo;s own compulsory credits. The third math credit fills the math line; a fourth can fill the STEM-related line.',
            'Business studies, computer studies and cooperative education have no such condition, because none of them has a compulsory line of its own. Any one full credit in computer studies can count toward the group.'
          ],
          rightH3: 'Computer studies and technological education are different subjects',
          right: [
            'The new compulsory technological education credit and the computer studies option in the STEM-related group are separate lines on the page. On the Ontario curriculum website, the five computer studies courses all carry codes beginning IC.',
            'We found no source saying a computer studies course such as ICD2O meets the technological education credit, so we do not say it. If a family is unsure which subject a course belongs to, the school course calendar or the counsellor will know.'
          ] }
      ]
    },
    {
      id: 'groups', tint: 'deep', eyebrow: 'For students who started Grade 9 in 2023 or earlier',
      h2: 'The earlier rules: Groups 1, 2 and 3',
      lede: 'Students who started Grade 9 in 2023 or earlier need 18 compulsory credits, and three of them come from three groups: &ldquo;Of the 18 compulsory credits, you must complete 1 from each of the following groups:&rdquo;. Computer studies sits in Group 3.',
      body: [
        { kind: 'table', caption: 'Group 3 for students who started Grade 9 in 2023 or earlier, as listed on ontario.ca (read 22 October 2026)', head: ['Group 3 option', 'Note (ours)'], rows: [
          ['Science (Grade 11 or 12)', 'The 2008 footnote calls it an additional course in science'],
          ['Technological education', 'An option here, not a compulsory line'],
          ['French as a second language', 'Counted under a limit across the groups'],
          ['Computer studies', 'Any computer studies course'],
          ['Cooperative education', 'Counted under a limit across the groups'],
          ['American Sign Language as a second language', ''],
          ['Langue des signes qu&eacute;b&eacute;coise langue seconde', 'Offered only in French-language schools, the page notes']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Limits across the three groups',
          left: [
            'The page sets two limits. French as a second language can count as a compulsory group credit at most twice, one from Group 1 and one from Group 2 or 3. Cooperative education also counts at most twice: &ldquo;You can count a maximum of 2 credits in cooperative education as compulsory credits from any of the above 3 groups.&rdquo;',
            'The 2008 Computer Studies document described the same Group 3 option when it was written: &ldquo;To meet the Group 3 additional compulsory credit requirement, students have the choice of earning one credit for a course in computer studies (Grades 10 to 12) or technological education (Grades 9 to 12), or one credit for an additional course in science (Grade 11 or 12), or one credit for a cooperative education course.&rdquo;'
          ],
          rightH3: 'Math under the earlier rules',
          right: [
            'The earlier rules ask for &ldquo;3 credits in mathematics (at least 1 credit in Grade 11 or 12)&rdquo;. The newer rules are more specific, naming Grade 9 and Grade 10 math as well.',
            'Under both sets of rules, students aiming at university computer science plan more math than the minimum, because programs such as Waterloo&rsquo;s and U of T&rsquo;s computer science list Grade 12 math courses by name. Our <a class="ag-inline-link" href="/online-math-tutor-canada">online math tutoring for Canadian families</a> covers those courses.'
          ] }
      ]
    },
    {
      id: 'other', tint: 'tint', eyebrow: 'Beyond credits',
      h2: 'The other diploma requirements: literacy, online learning and volunteer hours',
      lede: 'Credits are only part of the diploma. These requirements sit beside them, and some have dates or conditions families miss.',
      body: [
        { kind: 'table', caption: 'OSSD requirements other than credits, from ontario.ca and EQAO (read 22 October 2026)', head: ['Requirement', 'What the source says', 'Who it applies to'], rows: [
          ['Literacy', 'For most students, meeting it means passing the Ontario Secondary School Literacy Test (OSSLT); EQAO says &ldquo;Successful completion of the literacy test is one of the requirements to earn an Ontario Secondary School Diploma.&rdquo;', 'Both groups'],
          ['When the OSSLT can be taken', 'EQAO: &ldquo;Students can take the test starting in Grade 10.&rdquo; EQAO lists its next window as 3 to 30 November 2026', 'Both groups'],
          ['Financial literacy', 'Earned with &ldquo;a mark of at least 70%&rdquo; on modules in Grade 10 Career Studies, a mark that makes up 5% of that course&rsquo;s final mark, with 2 attempts. &ldquo;This requirement takes effect in the 2026-2027 school year.&rdquo;', 'The newer group; the page also ties it to students who began Grade 9 in 2025 to 2026 or later'],
          ['Online learning', 'At least 2 online learning credits for students who started Grade 9 in the 2020 to 2021 school year or later, with an exemption process through the school board', 'Both groups, from the 2020 to 2021 start year'],
          ['Community involvement', '&ldquo;Everyone needs 40 hours of&rdquo; community involvement activities; &ldquo;You can start collecting volunteer hours in the summer before you begin Grade 9.&rdquo;', 'Everyone'],
          ['Dual credits', '&ldquo;Optional credits may include up to 4 credits earned through approved dual credit programs&rdquo;', 'Both groups']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Two framings of financial literacy',
          left: [
            'The province&rsquo;s page describes financial literacy in two places. A summary list includes it for students who started Grade 9 in 2024 or later. A sentence further down speaks of students who began Grade 9 in the 2025 to 2026 school year or later, completing it in Grade 10 Career Studies, with the requirement taking effect in 2026 to 2027.',
            'Both appear on the same page, so we show both. A family whose teen started Grade 9 in 2024 should ask the school how it applies to them.'
          ],
          rightH3: 'Volunteer hours start early',
          right: [
            'The 40 hours can begin in the summer before Grade 9, and school boards publish which activities qualify. The page also suggests that students under 18 plan their activities with their parents, and that the guidance counsellor can help.',
            'Online learning credits are worth noting for families who already use online courses: they are a requirement, not just an option, for recent start years.'
          ] },
        { kind: 'source', html: 'Sources: ' + GOV + ', read 22 October 2026; EQAO&rsquo;s OSSLT and assessments pages, as saved in our research copies on the same date (a fresh request to EQAO that day was refused, so we did not retry). EQAO&rsquo;s date window is paraphrased.' }
      ]
    },
    {
      id: 'credit', tint: 'deep', eyebrow: 'What one credit is',
      h2: 'How a computer studies course earns its credit',
      lede: 'Families often ask what &ldquo;one credit&rdquo; actually means for a course like ICS3U. The 2008 Computer Studies document answers in three short rules.',
      body: [
        { kind: 'three', cells: [
          { h3: 'One course, one credit', p: 'The course table carries a note: &ldquo;Each of the courses listed above is worth one credit.&rdquo; That includes ICS3U, ICS3C, ICS4U and ICS4C.' },
          { h3: 'Fifty per cent', p: 'A credit is granted and recorded for every course in which the student&rsquo;s grade is 50% or higher, so the credit line sits at the bottom of level 1 on the achievement chart.' },
          { h3: 'Half credits', p: 'Most courses in the document may be split into half credits of at least fifty-five scheduled hours each. The Grade 12 university preparation course, ICS4U, may not.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Who grants the credit',
          left: [
            'A credit is granted by the school or credit provider that teaches the course and evaluates the student: a day school, a board&rsquo;s night or summer program, or an Ontario credit provider. Those are the only places a credit can come from.',
            'Modern Age Coders is a teaching school, not a credit provider. We do not grant Ontario credits. Our classes sit beside the school course: we teach the material, practise it and prepare for tests, and the school awards the credit.'
          ],
          rightH3: 'Where we fit in a diploma',
          right: [
            'Most of our Ontario students come to us for a computer studies course, ICS3U or ICS4U, or for Grade 11 and 12 math. Both can matter for the diploma: computer studies through the STEM-related group or Group 3, and math through the compulsory math line and university plans.',
            'For anything about a specific student&rsquo;s credits, transfer credits or graduation date, the guidance office is the right place to ask. We help with the learning; the school keeps the record.'
          ] }
      ]
    },
    {
      id: 'tally', tint: 'tint', eyebrow: 'A worked example, ours',
      h2: 'Counting credits with code: a compulsory credit tally in Python',
      lede: 'This program is ours, a teaching example of counting with conditions, for a made-up student. It is not a graduation audit and it simplifies the rules, as its comments say. It shows how a rule such as &ldquo;in addition to&rdquo; becomes a line of code. It was run in Python 3.13.',
      body: [
        { kind: 'ol', items: [
          '<b>Store the minimums as data.</b> One dictionary maps each compulsory subject to the credits it needs, including the half credits for career studies and civics.',
          '<b>Total the transcript.</b> One loop adds up the credits per subject, so two half credits in one subject become one.',
          '<b>Compare each subject with its minimum.</b> Anything short goes on the missing list, with how much is there and how much is needed.',
          '<b>Look for one spare credit for the STEM-related group.</b> For each subject in the group, subtract its own minimum (zero for business, computer studies and co-op) and see if a full credit is left over. That subtraction is the &ldquo;in addition to&rdquo; rule.',
          '<b>Return the missing list.</b> An empty list means every compulsory line is counted.'
        ] },
        { kind: 'code', label: 'Python &middot; compulsory credit tally for a made-up student (ours)', lang: 'python', code: TALLY_PY, note: 'Output: first [\'STEM-related group: none yet\'], because the third math credit only fills the math line; then, with one computer studies credit added, all compulsory credits counted.' },
        { kind: 'table', mt: true, caption: 'Further test cases for the tally, all run (ours; each adds to the same made-up student before the computer studies credit)', head: ['Added to the transcript', 'Result', 'What it shows'], rows: [
          ['A fourth math credit', 'all compulsory credits counted', 'Extra math counts toward the group'],
          ['A third science credit', 'all compulsory credits counted', 'Extra science counts too'],
          ['Half a credit of computer studies', 'STEM-related group: none yet', 'A half credit is not yet a full credit'],
          ['Two half credits of computer studies', 'all compulsory credits counted', 'Two halves make one'],
          ['A co-op credit, but no French credit', 'french: 0 of 1', 'The group cannot cover a missing compulsory line'],
          ['Nothing at all', 'Every line listed as missing', 'No crash on an empty transcript']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Where the program simplifies',
          left: [
            'It ignores grades: the real rules say which grade some credits must come from, such as English in each grade and technological education in Grade 9 or 10. It also adds credits per subject, so half a credit of business and half of computer studies would not count toward the group here, a case worth asking the school about.',
            'It does not count optional credits or add anything up into a total, and it knows nothing about literacy, online learning or volunteer hours. Those are separate requirements.'
          ],
          rightH3: 'Why it is a good Grade 10 or 11 exercise',
          right: [
            'It uses a dictionary, a loop that totals, a comparison against a minimum and a condition with subtraction: the core of many school programming tasks, in one program a student can check against their own course calendar.',
            'A good extension is to add the grade of each credit and enforce the grade rules. Another is to print the missing lines in a friendlier way. Both are honest practice in turning written rules into code.'
          ] }
      ]
    },
    {
      id: 'ask', tint: 'deep', eyebrow: 'Talking to the school',
      h2: 'Questions to bring to a guidance appointment',
      lede: 'Our list, for families who want to make the most of a meeting with the school. The school has the record and the course calendar; these questions help get the answers you need.',
      body: [
        { kind: 'ol', items: [
          '<b>Which set of rules applies to my teen?</b> It depends on the year Grade 9 began, so confirm it, especially for a student who changed schools.',
          '<b>Which compulsory lines are already met, and which remain?</b> Ask for the record, not an estimate.',
          '<b>How will the STEM-related group or Group 3 credit be met?</b> If computer studies is the plan, ask which course and in which year.',
          '<b>Which technological education courses does the school offer in Grade 9 and 10?</b> For the newer group this credit is compulsory.',
          '<b>When will the OSSLT be written, and what are the options if it is not passed?</b> The province&rsquo;s page says the principal can explain other ways to meet the requirement.',
          '<b>Which courses count as online learning credits here?</b> Two are required for recent start years.',
          '<b>How are volunteer hours recorded?</b> Boards have their own forms and lists of eligible activities.',
          '<b>For university plans, which Grade 11 and 12 courses does each program list?</b> Then check those programs&rsquo; own pages.'
        ] },
        { kind: 'p', mt: true, html: 'We are happy to talk through what a computer studies or math course involves, and what help a student might want beside it. Questions about a student&rsquo;s own credits belong with the school, and we will always say so.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Grade by grade',
    h2: 'A four-year view of computing and math beside the diploma',
    lede: 'Our own sketch of how coding and math fit around OSSD requirements for a student who enjoys both. It is an example, not a plan for any particular student.',
    table: { caption: 'Computing and math across Grades 9 to 12 (ours)', head: ['Grade', 'Beside the diploma requirements'], rows: [
      ['9', 'Grade 9 math; a first programming language at home or in a club; volunteer hours can begin the summer before'],
      ['10', 'Grade 10 math and the technological education credit for the newer group; ICD2O if the school offers it; the OSSLT can be written from Grade 10'],
      ['11', 'A Grade 11 math course; ICS3U or ICS3C, which can count toward the STEM-related group or Group 3'],
      ['12', 'Grade 12 math for university plans; ICS4U or ICS4C; online learning credits completed']
    ] },
    left: { h3: 'For parents', ps: [
      'The diploma sets the minimum. University and college programs often ask for more in specific subjects, so check their pages early.',
      'Keep one copy of the requirements for your teen&rsquo;s start year. Older siblings may have had different rules.'
    ] },
    right: { h3: 'For students', ps: [
      'Know which rule set is yours. It decides whether you need a technological education credit and how your choice credits work.',
      'If you enjoy computing, a computer studies course is one way to meet the STEM-related group and learn something you will use.'
    ] }
  },

  catalogue: {
    eyebrow: 'Courses by grade',
    h2: 'Nine more courses for Ontario high school students',
    lede: 'All live, with a regular teacher, as a group batch or for one student.',
    bands: [
      { num: 'I', h3: 'Grades 9 and 10', sub: 'Early high school', courses: [
        { code: 'OHSD / G09 / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math mastery', blurb: 'Firm foundations before Grade 9 math.' },
        { code: 'OHSD / G09 / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'A first look at programming for the web.' },
        { code: 'OHSD / G09 / 03', slug: 'complete-game-development-masterclass-for-teens', title: 'Game development for teens', blurb: 'Learning to code by building games.' }
      ] },
      { num: 'II', h3: 'Grades 11 and 12', sub: 'Senior courses', courses: [
        { code: 'OHSD / G12 / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'For computer studies taught in Java.' },
        { code: 'OHSD / G12 / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school math mastery', blurb: 'Algebra, functions and more, step by step.' },
        { code: 'OHSD / G12 / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'The math of data, taught clearly.' }
      ] },
      { num: 'III', h3: 'Beyond the requirements', sub: 'Teens', courses: [
        { code: 'OHSD / BYD / 01', slug: 'ccc-junior-and-senior-preparation-course', title: 'CCC Junior and Senior preparation', blurb: 'The Waterloo programming contest.' },
        { code: 'OHSD / BYD / 02', slug: 'waterloo-math-contests-gauss-to-euclid-course', title: 'Waterloo math contests', blurb: 'From Gauss in Grades 7 and 8 to Euclid in the final year.' },
        { code: 'OHSD / BYD / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Models built from first principles.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Class times',
    h2: 'Live classes beside a full high school timetable',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Evenings after school, in your Ontario time zone.' },
      { time: 'Weekends', l: 'Mornings, away from the school week.' },
      { time: '1-on-1', l: 'Around tests, deadlines and exam weeks.' }
    ],
    cells: [
      { h3: 'Coding and math', p: 'The two subjects we teach.' },
      { h3: 'Beside school', p: 'Never instead of a credit course.' },
      { h3: 'Python or Java', p: 'Whatever the school uses.' },
      { h3: 'Same teacher', p: 'From one month to the next.' },
      { h3: 'Honest help', p: 'Explained, never done for them.' },
      { h3: 'Group or private', p: 'Fifteen to twenty, or one.' }
    ]
  },

  projectsH2: 'Built by students like yours',
  projectsLede: 'Projects from high school students who learned with us. The <a class="ag-inline-link" href="/student-labs">student labs</a> page shows more.',
  reviewsLede: 'Google reviews from families, as they posted them.',

  fees: {
    h2: 'Fees',
    lede: 'The first class is free. After that a monthly fee covers eight live classes a month, displayed below in your own currency; there is no long commitment and families can stop after any month.',
    free: ['A free first class', 'Bring a current assignment', 'No card asked for'],
    group: ['Batches of fifteen to twenty', 'A regular teacher', 'A batch time that suits you', 'Monthly billing'],
    one: ['Private lessons', 'Planned around school', 'Built from their own courses']
  },

  faq: {
    eyebrow: 'Questions about the OSSD',
    h2: 'Ontario high school credits: common questions',
    items: [
      { q: 'How many credits do you need to graduate high school in Ontario?', a: 'For students who started Grade 9 in 2024 or later, ontario.ca lists 17 compulsory credits and 13 optional credits. For students who started in 2023 or earlier, it lists 18 compulsory credits and 12 optional credits. Both groups also have literacy, online learning and community involvement requirements.' },
      { q: 'What are the OSSD requirements for students who started Grade 9 in 2024 or later?', a: 'The page lists 17 compulsory credits, 13 optional credits, the provincial secondary school literacy requirement, the provincial financial literacy graduation requirement, at least 2 online learning credits and 40 hours of community involvement activities.' },
      { q: 'What is the technological education credit?', a: 'For students who started Grade 9 in 2024 or later, one compulsory credit must be in technological education, in Grade 9 or Grade 10. For earlier students, technological education is one option in Group 3.' },
      { q: 'What is the STEM-related course group?', a: 'For students who started Grade 9 in 2024 or later, one compulsory credit comes from a group of business studies, computer studies, cooperative education, or an extra credit in mathematics, science or technological education beyond those subjects\' own compulsory credits.' },
      { q: 'Does computer studies count toward the OSSD?', a: 'Yes. Computer studies is an option in the STEM-related course group for students who started Grade 9 in 2024 or later, and in Group 3 for students who started in 2023 or earlier. Each computer studies course in the 2008 curriculum is worth one credit.' },
      { q: 'Does ICD2O count as the technological education credit?', a: 'We found no source saying so. ICD2O is a computer studies course on the Ontario curriculum website, and computer studies and technological education are separate lines on the graduation requirements page. Ask the school before planning around it.' },
      { q: 'How many volunteer hours do you need in Ontario?', a: 'The page says everyone needs 40 hours of community involvement activities to get their diploma, and hours can be collected from the summer before Grade 9.' },
      { q: 'Do you need online courses to graduate in Ontario?', a: 'Students who started Grade 9 in the 2020 to 2021 school year or later must earn at least 2 online learning credits, according to the page, which also describes an exemption process through the school board.' },
      { q: 'When can students write the OSSLT?', a: 'EQAO says students can take the test starting in Grade 10. On 22 October 2026 it listed its next window as 3 to 30 November 2026.' },
      { q: 'Can Modern Age Coders give my teen OSSD credits?', a: 'No. We teach coding and math beside school courses and do not grant Ontario credits. Credits come from the school or credit provider that teaches and evaluates each course.' },
      { q: 'When are your classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We fix each time with you around the school timetable.' },
      { q: 'How much do your classes cost?', a: 'The first class is free. Families then pay a monthly fee and can stop after any month. The fees section on this page shows the current figure.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for Ontario high school families',
    lede: 'Course guides and classes for students working toward the OSSD.',
    items: [
      { href: '/ics3u-computer-science-help', label: 'ICS3U computer science help', p: 'A computer studies credit course, explained.' },
      { href: '/online-math-tutor-canada', label: 'Online math tutor for Canada', p: 'Math beside every grade of high school.' },
      { href: '/coding-classes-in-ontario', label: 'Coding classes in Ontario', p: 'Live classes for every age in the province.' },
      { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation', p: 'A programming contest written through school.' },
      { href: '/cemc-waterloo-contests-preparation', label: 'Waterloo math contests', p: 'The CEMC contests many Ontario students write.' },
      { href: '/coding-classes-in-canada', label: 'Canada', p: 'Every page for Canadian families.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us your teen&rsquo;s grade, the course they need help with and what is coming up next. The first class starts from their own work.',
    readFirst: 'To read more first, the <a class="ag-inline-link" href="/courses/ics3u-ics4u-computer-science-companion-course">computer science companion syllabus</a> and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> are both online.',
    note: 'Classes are live video lessons led by teachers in India, so there is no travel. WhatsApp is the quickest way to reach us from anywhere in Ontario.',
    formNote: 'No card details are needed for the free class.'
  },

  footer: {
    cols: [
      { h4: 'Ontario high school', links: [
        { href: '/courses/ics3u-ics4u-computer-science-companion-course', label: 'Computer science companion' },
        { href: '/courses/ontario-grade-12-university-math-mhf4u-mcv4u-course', label: 'Grade 12 university math' },
        { href: '/ics3u-computer-science-help', label: 'ICS3U help' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/coding-classes-in-ontario', label: 'Coding classes in Ontario' },
        { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada' },
        { href: '/cemc-waterloo-contests-preparation', label: 'Waterloo math contests' }
      ] }
    ],
    bottomRight: 'Know your rule set, then count what is left'
  },

  personalityCss: `
.ag-root.ag-ohsd .ag-hero h1 { letter-spacing: -0.01em; max-width: 22ch; }
.ag-root.ag-ohsd .ag-capsule { border-left-width: 4px; border-radius: 2px; }
.ag-root.ag-ohsd .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-ohsd .ag-table caption { text-align: left; }
.ag-root.ag-ohsd .ag-table th { letter-spacing: 0.03em; }
.ag-root.ag-ohsd .ag-steps li { margin-bottom: 0.55rem; }
`,

  dossier: {
    curriculumAuthority: 'ontario.ca graduation requirements page (Earning your high school diploma, updated September 02, 2026), fetched raw 22 October 2026: both rule sets by Grade 9 start year, the compulsory credit lists, the STEM-related course group with its "in addition to" conditions, Groups 1 to 3 and their limits, optional and dual credits, literacy, financial literacy, online learning and community involvement. EQAO OSSLT facts from verified research copies. The Ontario Curriculum, Grades 10 to 12: Computer Studies (2008): one credit per course, 50% for a credit, half-credit hours, Group 3 footnote.',
    localProject: 'Our compulsory credit tally in Python for a made-up student: minimums in a dictionary, per-subject totals with half credits, the STEM-related group checked by subtracting each subject\'s own minimum; run to show the group missing, then met with one computer studies credit, plus six test cases. Also a side-by-side table of the two rule sets that never adds the parts, and eight questions for a guidance appointment. Lesson family: counting with conditions.',
    requiredMentions: ['What you need to earn an Ontario Secondary School Diploma depends on the year you started Grade 9.', 'You must earn 13 optional credits by successfully completing courses', 'Of the 17 compulsory credits, you must complete 1 from the following group:', 'in addition to the 3 compulsory credits currently required', 'You can start collecting volunteer hours in the summer before you begin Grade 9.', 'Optional credits may include up to 4 credits earned through approved dual credit programs', 'You can count a maximum of 2 credits in cooperative education', 'STEM-related group: none yet', 'all compulsory credits counted', 'Questions to bring to a guidance appointment', 'Know your rule set, then count what is left'],
    sources: [
      { claim: 'Both OSSD rule sets, compulsory and optional credits, the STEM-related group, Groups 1 to 3, literacy, financial literacy, online learning, community involvement, dual credits.', url: 'https://www.ontario.ca/page/high-school-graduation-requirements' },
      { claim: 'OSSLT purpose, Grade 10 start and the November 2026 window.', url: 'https://www.eqao.com/the-assessments/osslt/' },
      { claim: 'One credit per computer studies course, the 50% credit rule, half-credit hours and the Group 3 footnote.', url: 'https://www.edu.gov.on.ca/eng/curriculum/secondary/computer10to12_2008.pdf' },
      { claim: 'The computer studies course list on the current Ontario curriculum website.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items?system.type=l2___course&elements.part_of%5Bcontains%5D=secondary___computer_studies__copy_&depth=0&elements=code,name,year_issued,site___grade,prerequisites' }
    ],
    rejectedClaims: [
      'A total credit count for the diploma: the page gives parts only (17 and 13, or 18 and 12), so no total is printed.',
      'That ICD2O or any computer studies course meets the technological education credit: no source says so.',
      'Advice on any individual student\'s credits, transfers or graduation date: the page sends families to the school.',
      'Content on specific culture-based course options and the COVID-19 credit rule: left out under the cluster content rules; the page notes that particular courses can meet some compulsory lines.',
      'A single framing of the financial literacy start year: the page shows both framings ontario.ca gives.',
      'Fresh EQAO quotes: EQAO refused the request on 22 October 2026, so only facts verified earlier that day in the research copies are used.',
      'That we grant credits or act as a credit provider: the page says we do not.',
      'Any affiliation with the Government of Ontario, EQAO or a school board: none.'
    ]
  }
};
