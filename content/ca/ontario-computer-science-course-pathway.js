'use strict';
// Ontario computer science course pathway, Grade 10 to 12 (ag- school course door; Canada cluster Plan 2, row 20).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Sources, fetched raw with curl on 22 October 2026 (copies in keyword-research-2026-09/ca/src-pilots/ontario-computer-science-course-pathway/;
// the senior math API response is byte-identical to the research copy; the Waterloo and U of T pages were re-fetched today and still carry
// the quoted strings; facts-schools-contests.md rows 22 to 48 and 203 to 212):
//  - The Ontario Curriculum, Grades 10 to 12: Computer Studies (2008), www.edu.gov.on.ca/eng/curriculum/secondary/computer10to12_2008.pdf:
//    course table (ICS2O, ICS3U, ICS3C: prerequisite None; ICS4U: Grade 11 Introduction to Computer Science, University; ICS4C: Grade 11
//    Introduction to Computer Programming, College); prerequisite chart "This chart maps out all the courses in the discipline and shows
//    the links between courses and the possible prerequisites for them."; footnote 2 "To meet the Group 3 additional compulsory credit
//    requirement, students have the choice of earning one credit for a course in computer studies (Grades 10 to 12) or technological
//    education (Grades 9 to 12), or one credit for an additional course in science (Grade 11 or 12), or one credit for a cooperative
//    education course."; half credits "with the exception of the Grade 12 university preparation course"; "which require a minimum of
//    fifty-five hours of scheduled instructional time"; "students must successfully complete both parts of the course to fulfil the
//    prerequisite"; course types; "Note: Each of the courses listed above is worth one credit."
//  - Ontario curriculum content API: computer studies list (ICS3U, ICD2O 2023 Grade 10, ICS4U, ICS3C, ICS4C; no ICS2O; ICD2O, ICS3U and
//    ICS3C prerequisites empty); senior math records (api-senior-math-courses.json): MCR3U Functions, prerequisite "Principles of
//    Mathematics, Grade 10, Academic"; MHF4U Advanced Functions, prerequisite "Functions, Grade 11, University Preparation, or Mathematics
//    for College Technology, Grade 12, College Preparation"; MCV4U Calculus and Vectors, prerequisite field empty, description "The new
//    Advanced Functions course (MHF4U) must be taken prior to or concurrently with Calculus and Vectors (MCV4U)."; MDM4U prerequisite
//    "Functions, Grade 11, University Preparation, or Functions and Applications, Grade 11, University/College Preparation".
//  - Waterloo Computer Science (uw-computer-science.html, re-fetched as uw-now.html): "Six Grade 12 U and/or M courses including" Advanced
//    Functions, Calculus and Vectors, "Any Grade 12 U English", "One other 4U course"; recommended "Grade 11 U Introduction to Computer
//    Science".
//  - U of T Computer Science (uoft-computer-science.html, re-fetched as uoft-now.html): St. George (TAD) "ENG4U / EAE4U", "MCV4U";
//    Mississauga (TMX) "ENG4U / EAE4U", "MHF4U", "MCV4U", MDM4U "Recommended"; Scarborough (TXC) "ENG4U / EAE4U", "MCV4U", "MHF4U";
//    "six subjects at the 4U/M level"; "The co-op component of Grade 12 courses will not be used for admission purposes".
//  - ontario.ca/page/high-school-graduation-requirements (updated September 02, 2026; ossd-graduation-requirements.html): computer studies
//    in Group 3 (Grade 9 in 2023 or earlier) and in the STEM-related course group (Grade 9 in 2024 or later).
// Our own material, labelled on the page: the four routes; the prerequisite checker in Python 3.13 (run: the university route prints
// "plan works"; the switched route prints "ICS4U needs ICS3U in an earlier term" and "MCV4U needs MHF4U first or alongside it"; the
// seven-case test table, all run); the simplification note (the checker ignores the MHF4U college technology alternative); the
// course-by-course admission table built from the two universities' pages; the planning steps; the ladder.
// Lesson family: modelling rules as data (a dictionary of prerequisites, then one loop that checks them).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const PLAN_PY = `# Check a high school course plan against prerequisites (ours)
# Rules from the Ontario curriculum: the 2008 Computer Studies course table
# and the math course records on the current curriculum website.

BEFORE = {                  # course: what must be finished in an earlier term
    "ICS4U": ["ICS3U"],
    "ICS4C": ["ICS3C"],
    "MCR3U": ["MPM2D"],
    "MHF4U": ["MCR3U"],
}
BY_THEN = {                 # course: what must come earlier or in the same term
    "MCV4U": ["MHF4U"],
}

def check(terms):
    """terms is a list of terms in time order; each term is a list of
    course codes. Returns a list of problems (empty means it works)."""
    term_of = {}
    for number, courses in enumerate(terms):
        for course in courses:
            term_of[course] = number
    problems = []
    for course, when in term_of.items():
        for need in BEFORE.get(course, []):
            if need not in term_of or term_of[need] >= when:
                problems.append(course + " needs " + need + " in an earlier term")
        for need in BY_THEN.get(course, []):
            if need not in term_of or term_of[need] > when:
                problems.append(course + " needs " + need + " first or alongside it")
    return problems


university = [["ICD2O", "MPM2D"], ["ICS3U", "MCR3U"], ["ICS4U", "MHF4U", "MCV4U"]]
switched = [["ICD2O", "MPM2D"], ["ICS3C", "MCR3U"], ["ICS4U", "MCV4U"]]

print(check(university) or "plan works")
for problem in check(switched):
    print(problem)`;

const PDF = '<a class="ag-inline-link" href="https://www.edu.gov.on.ca/eng/curriculum/secondary/computer10to12_2008.pdf" rel="noopener" target="_blank">The Ontario Curriculum, Grades 10 to 12: Computer Studies (2008)</a>';
const UW = '<a class="ag-inline-link" href="https://uwaterloo.ca/future-students/programs/computer-science" rel="noopener" target="_blank">Waterloo Computer Science</a>';
const UT = '<a class="ag-inline-link" href="https://future.utoronto.ca/undergraduate-programs/computer-science/" rel="noopener" target="_blank">U of T Computer Science</a>';

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'COURSE PATHWAY', blurb: 'Every Ontario computer studies course from Grade 10 to 12 on one map, with prerequisites, the math line beside it and where each route leads.' },
  slug: 'ontario-computer-science-course-pathway',
  code: 'ocsc',
  accent: '#153857',
  accentRationale: 'Ontario computer science pathway, Canada: a deep harbour blue, #153857, allocated for this row; 7.7 RGB units from the nearest site accent (#1C3754) and at least 14 from every other Canada accent, with contrast 11.42 on the paper #FBF8F2 and 9.82 on the deepest tint',
  pageType: 'market',
  market: CA,
  courseCodePage: true,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Ontario computer science course pathway',
  title: 'Ontario Computer Science Pathway: ICD2O to ICS4U, Grade by Grade',
  description: 'The Ontario computer science pathway from Grade 10 to 12: every course code, its prerequisite, the math courses beside it and what Waterloo and U of T list.',
  ogDescription: 'ICD2O, ICS3U, ICS3C, ICS4U and ICS4C on one map, with prerequisites from the Ontario curriculum, the Grade 11 and 12 math line, and how each route meets university requirements.',
  twitterDescription: 'Ontario computer studies from Grade 10 to 12 on one map, with the math line beside it.',
  pageName: 'Ontario Computer Science Course Pathway',
  webPageDescription: 'A map of the Ontario secondary computer studies courses from Grade 10 to Grade 12, with prerequisites from the curriculum, four common routes, the math courses that run beside them, what Waterloo and the University of Toronto list for computer science, and a prerequisite checker written in Python.',
  courseDescription: 'Live online help for Ontario students along the computer studies pathway, from ICD2O to ICS4U, in Python or Java, beside the school course. No Ontario credit is granted.',
  crumbs: [{ name: 'Canada', href: '/coding-classes-in-canada' }, { name: 'Ontario', href: '/coding-classes-in-ontario' }],
  crumbLabel: 'Computer science pathway',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#map', label: 'The map' },
    { href: '#routes', label: 'Four routes' },
    { href: '#math', label: 'The math line' },
    { href: '#university', label: 'University' },
    { href: '#checker', label: 'Plan checker' }
  ],
  eyebrow: 'Ontario &middot; Grades 10 to 12 &middot; Computer studies pathway',
  h1: 'The Ontario computer science pathway, from ICD2O to ICS4U',
  lede: 'Ontario high school computer science is a short ladder with two rails: a university rail, ICS3U then ICS4U, and a college rail, ICS3C then ICS4C, with an open Grade 10 course in front of both. Beside the ladder runs the math line that universities care about most. This page puts every course on one map with the prerequisites the curriculum lists, shows four routes students commonly take, and sets the map against what two universities ask for. We teach students at every step of it, beside their school courses; we do not grant Ontario credits.',
  secondaryCta: { href: '#map', label: 'See the course map' },
  wa: 'Hello Modern Age Coders, we are planning computer science courses in Ontario from Grade 10 to 12 for our teen. Could we book a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students &middot; Help at every grade on the map',
  spec: [
    ['Grades', '10 to 12'],
    ['Courses', 'Five on the current site'],
    ['Rails', 'University and college'],
    ['Math line', 'MCR3U, MHF4U, MCV4U'],
    ['Universities', 'Waterloo, U of T'],
    ['Source', 'Ontario curriculum'],
    ['Credit', 'From the school only'],
    ['Start', 'A free class']
  ],
  capsuleQ: 'The pathway in brief',
  capsule: 'The Ontario computer science pathway runs from ICD2O in Grade 10, which needs no prerequisite, to ICS3U or ICS3C in Grade 11, then ICS4U or ICS4C in Grade 12, each needing its Grade 11 partner. Modern Age Coders teaches along it live online, one to one or in a batch, through Ontario Computer Science Companion.',

  picks: {
    eyebrow: 'Courses along the pathway',
    h2: 'Three courses for the university rail',
    lede: 'The companion course covers the computer science rail. The Grade 12 math course covers the line universities list. The contest course stretches the strongest students.',
    items: [
      { course: 'ics3u-ics4u-computer-science-companion-course', code: 'OCSC / 01', title: 'Ontario Computer Science Companion', note: 'ICS3U and ICS4U, paced to the school outline, in Python or Java.' },
      { course: 'ontario-grade-12-university-math-mhf4u-mcv4u-course', code: 'OCSC / 02', title: 'Ontario Grade 12 University Math', note: 'Advanced Functions and Calculus and Vectors, the two courses both universities on this page list.' },
      { course: 'ccc-junior-and-senior-preparation-course', code: 'OCSC / 03', title: 'CCC Junior and Senior preparation', note: 'The Waterloo programming contest, for students who want a challenge beyond the course.' }
    ]
  },

  sections: [
    {
      id: 'map', tint: 'tint', eyebrow: 'Every course on one page',
      h2: 'The course map: Grade 10 to Grade 12',
      lede: 'The 2008 Computer Studies document includes a prerequisite chart, and introduces it plainly: &ldquo;This chart maps out all the courses in the discipline and shows the links between courses and the possible prerequisites for them.&rdquo; Here is the same map, brought up to date with the course list on the current Ontario curriculum website.',
      body: [
        { kind: 'table', caption: 'Ontario secondary computer studies courses, Grades 10 to 12 (current curriculum website and the 2008 document, read 22 October 2026)', head: ['Grade', 'Code', 'Course', 'Type', 'Prerequisite listed', 'Opens'], rows: [
          ['10', 'ICD2O', 'Digital Technology and Innovations in the Changing World (2023)', 'Open', 'None', 'Nothing directly; prepares for Grade 11'],
          ['11', 'ICS3U', 'Introduction to Computer Science (2008)', 'University', 'None', 'ICS4U'],
          ['11', 'ICS3C', 'Introduction to Computer Programming (2008)', 'College', 'None', 'ICS4C'],
          ['12', 'ICS4U', 'Computer Science (2008)', 'University', 'ICS3U', 'University programs'],
          ['12', 'ICS4C', 'Computer Programming (2008)', 'College', 'ICS3C', 'College programs and apprenticeship'],
          ['10', 'ICS2O', 'Introduction to Computer Studies (2008 document only)', 'Open', 'None', 'Not on the current website&rsquo;s list']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Reading the map',
          left: [
            'Only two arrows on the map are real requirements: ICS3U to ICS4U, and ICS3C to ICS4C. Everything else is open. A student can start computer studies in Grade 11 with no Grade 10 course at all, and the Grade 10 course itself needs nothing before it.',
            'That makes the Grade 11 choice the one that matters. Picking ICS3U keeps ICS4U open for Grade 12; picking ICS3C opens ICS4C instead. Our <a class="ag-inline-link" href="/ics3u-computer-science-help">ICS3U guide</a> covers the university Grade 11 course in depth.'
          ],
          rightH3: 'Why ICS2O is in the last row',
          right: [
            'ICS2O is the Grade 10 course described in the 2008 document. The computer studies list on the current Ontario curriculum website shows ICD2O for Grade 10 and does not include ICS2O. We found no source stating that one replaced the other, so the map lists both and says where each appears.',
            'Every course in the 2008 table carries the same value, stated in a note beneath it: &ldquo;Each of the courses listed above is worth one credit.&rdquo;'
          ] },
        { kind: 'source', html: 'Sources: ' + PDF + ', course table and prerequisite chart; and the course list the Ontario curriculum website serves today (its content feed, read 22 October 2026). Modern Age Coders has no tie to the ministry and speaks only for itself.' }
      ]
    },
    {
      id: 'strands', tint: 'deep', eyebrow: 'The curriculum inside the courses',
      h2: 'How the strands change from Grade 10 to Grade 12',
      lede: 'Families searching for the Ontario computer science curriculum usually want to know what is taught in each year. Each course is organised into strands, and the 2008 document explains the pattern: &ldquo;Each of the Grade 11 and 12 courses has four strands.&rdquo; Laid side by side, the strands show how the subject grows.',
      body: [
        { kind: 'table', caption: 'Strand titles of every Grade 10 to 12 computer studies course (the 2008 document for ICS2O and the Grade 11 and 12 courses; the Ontario curriculum website for ICD2O; read 22 October 2026)', head: ['Course', 'Strand A', 'Strand B', 'Strand C', 'Strand D'], rows: [
          ['ICS2O, Grade 10 (2008)', 'Understanding Computers', 'Introduction to Programming', 'Computers and Society', 'None'],
          ['ICD2O, Grade 10 (2023)', 'Computational Thinking and Making Connections', 'Hardware, Software, and Innovations', 'Programming', 'None'],
          ['ICS3U, Grade 11', 'Programming Concepts and Skills', 'Software Development', 'Computer Environments and Systems', 'Topics in Computer Science'],
          ['ICS3C, Grade 11', 'Programming Concepts and Skills', 'Software Development', 'Computer Environments and Systems', 'Computers and Society'],
          ['ICS4U, Grade 12', 'Programming Concepts and Skills', 'Software Development', 'Designing Modular Programs', 'Topics in Computer Science'],
          ['ICS4C, Grade 12', 'Programming Concepts and Skills', 'Software Development', 'Programming Environment', 'Computers and Society']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The pattern in the curriculum&rsquo;s words',
          left: [
            'From Grade 11 on, the first two strands keep the same names in all four courses, so the work deepens rather than changes. For the third, the document says: &ldquo;The third strand (strand C) in each of the courses focuses on the programming environment, and the Grade 12 university preparation course features Designing Modular Programs in this strand.&rdquo;',
            'The fourth strand covers computers in society, and on the university rail it reaches further: &ldquo;In this strand, the university preparation courses also explore new research in the field of information and computer science, and its implications for society.&rdquo;'
          ],
          rightH3: 'What a student feels, year by year',
          right: [
            'Grade 10 is broad: a little programming, a lot about the technology around the student. Grade 11 is the programming year, with arrays, functions, testing and a first project. Grade 12 on the university rail is the design year, with classes, recursion, analysis and a team project; on the college rail it is the year of object-oriented programs with graphical interfaces.',
            'That is why the jump from Grade 11 to Grade 12 feels larger than the jump from Grade 10 to Grade 11. The names of strands A and B stay the same, but what they ask for does not.'
          ] }
      ]
    },
    {
      id: 'routes', tint: 'tint', eyebrow: 'Four common routes',
      h2: 'Four routes through the map, and who each one suits',
      lede: 'These four routes are ours, drawn from the map above. They are not official tracks; every school builds its own timetable, and a guidance counsellor confirms what works for one student.',
      body: [
        { kind: 'table', caption: 'Four routes through Ontario computer studies (ours; prerequisites from the curriculum)', head: ['Route', 'Grade 10', 'Grade 11', 'Grade 12', 'Suits'], rows: [
          ['1. University, full', 'ICD2O', 'ICS3U', 'ICS4U', 'Students aiming at university computer science, engineering or math who want all three years'],
          ['2. University, late start', 'No computer course', 'ICS3U', 'ICS4U', 'Students who discover computing in Grade 10 or 11; nothing on the map blocks them'],
          ['3. College', 'ICD2O', 'ICS3C', 'ICS4C', 'Students aiming at a college program in programming or IT, or an apprenticeship'],
          ['4. Taster', 'ICD2O', 'ICS3U or ICS3C', 'None', 'Students who want computing in their diploma but plan another field after school']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The route that needs a fix',
          left: [
            'A fifth pattern is common enough to plan for: a student takes ICS3C in Grade 11, then decides on university computer science and wants ICS4U. The course table lists ICS3U as the prerequisite for ICS4U, so ICS3C alone does not open it.',
            'The fix, if the school&rsquo;s timetable allows, is to take ICS3U before ICS4U. The plan checker further down this page catches exactly this case.'
          ],
          rightH3: 'Where route 2 needs care',
          right: [
            'A late start is allowed, but Grade 11 then carries the whole load of learning to program. In our experience, students starting ICS3U with no Grade 10 course cope far better when they write small programs over the summer before Grade 11, so that variables and loops are familiar by September.',
            'The same applies to route 4 in reverse: a taster year in Grade 11 can turn into a Grade 12 course after all, as long as it was ICS3U or ICS3C, because each opens its own Grade 12 partner.'
          ] }
      ]
    },
    {
      id: 'math', tint: 'deep', eyebrow: 'The rail beside the ladder',
      h2: 'The math line: MCR3U, MHF4U and MCV4U',
      lede: 'For university computer science, the math courses beside the computer studies ladder matter more than the ladder itself. Their prerequisites come from the same Ontario curriculum website, and they are stricter than the computer studies ones.',
      body: [
        { kind: 'table', caption: 'Grade 11 and 12 university math courses and their prerequisites, from the Ontario curriculum website&rsquo;s course records (read 22 October 2026)', head: ['Code', 'Course', 'Prerequisite, as the record gives it'], rows: [
          ['MCR3U', 'Functions, Grade 11', '&ldquo;Principles of Mathematics, Grade 10, Academic&rdquo;'],
          ['MHF4U', 'Advanced Functions, Grade 12', '&ldquo;Functions, Grade 11, University Preparation, or Mathematics for College Technology, Grade 12, College Preparation&rdquo;'],
          ['MCV4U', 'Calculus and Vectors, Grade 12', 'The prerequisite field is empty; the description says &ldquo;The new Advanced Functions course (MHF4U) must be taken prior to or concurrently with Calculus and Vectors (MCV4U).&rdquo;'],
          ['MDM4U', 'Mathematics of Data Management, Grade 12', '&ldquo;Functions, Grade 11, University Preparation, or Functions and Applications, Grade 11, University/College Preparation&rdquo;']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the math line means for timing',
          left: [
            'MHF4U needs MCR3U first, and MCV4U needs MHF4U before it or alongside it. So a student who wants both Grade 12 courses needs Functions done by the end of Grade 11. The rule allows both in the same Grade 12 year, or MHF4U a term earlier so that Calculus and Vectors has a term to itself.',
            'MCR3U in turn names a Grade 10 academic math course as its prerequisite. The current website lists a de-streamed Grade 9 math course, MTH1W, issued in 2021, so ask the school how that Grade 10 prerequisite applies to your teen&rsquo;s own math sequence.'
          ],
          rightH3: 'Why the math line comes first',
          right: [
            'Both universities on this page list Grade 12 math by name for computer science and neither lists a Grade 12 computer course. A student who misses MCR3U in Grade 11 can find the university rail closed in Grade 12, whatever they did in computer studies.',
            'So when we help a family plan, we draw the math line first and fit computer studies around it. Our <a class="ag-inline-link" href="/online-math-tutor-canada">math tutoring for Canada</a> covers these courses.'
          ] },
        { kind: 'source', html: 'Source: the Grade 11 and 12 math course records behind the Ontario curriculum website, pulled from its content feed on 22 October 2026, with codes and names exactly as the records give them.' }
      ]
    },
    {
      id: 'university', tint: 'tint', eyebrow: 'Where the routes lead',
      h2: 'What Waterloo and U of T list, course by course',
      lede: 'Admission pages are usually read program by program. Here they are turned around: for each course on the map, does it appear on the two universities&rsquo; computer science pages? We read both pages on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'Courses on the pathway against two computer science admission pages for Ontario applicants (read 22 October 2026; blank means the page does not name the course)', head: ['Course', 'Waterloo Computer Science', 'U of T St. George (TAD)', 'U of T Mississauga (TMX)', 'U of T Scarborough (TXC)'], rows: [
          ['ICS3U', 'Recommended: &ldquo;Grade 11 U Introduction to Computer Science&rdquo;', '', '', ''],
          ['ICS4U', 'Not named; counts only as a possible &ldquo;One other 4U course&rdquo; (our reading)', '', '', ''],
          ['MHF4U', 'Required (Advanced Functions)', '', 'Required', 'Required'],
          ['MCV4U', 'Required (Calculus and Vectors)', 'Required', 'Required', 'Required'],
          ['MDM4U', '', '', 'Recommended', ''],
          ['Grade 12 English', '&ldquo;Any Grade 12 U English&rdquo;', 'ENG4U / EAE4U', 'ENG4U / EAE4U', 'ENG4U / EAE4U'],
          ['Total Grade 12 courses', '&ldquo;Six Grade 12 U and/or M courses including&rdquo; those above', '&ldquo;six subjects at the 4U/M level&rdquo;', 'Same', 'Same']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the table says',
          left: [
            'The only computer course either university names is ICS3U, and only Waterloo names it, as a recommendation. ICS4U appears on neither page. Math and English carry the requirements at both.',
            'ICS4U still has a place: as a 4U course it can fill one of the six Grade 12 university slots, which on our reading is what Waterloo&rsquo;s &ldquo;One other 4U course&rdquo; allows. More importantly, it prepares a student for the pace of a first-year computer science course.'
          ],
          rightH3: 'Two smaller lines worth noticing',
          right: [
            'U of T&rsquo;s page adds: &ldquo;The co-op component of Grade 12 courses will not be used for admission purposes&rdquo;. Co-op credits count toward the diploma but not toward that admission average.',
            'And the college rail sits outside both tables: ICS4C is a college preparation course, so it is not one of the 4U/M courses U of T counts. That is no criticism of ICS4C; it is built for a different destination. Requirements change each cycle, so check the live pages: ' + UW + ' and ' + UT + '.'
          ] }
      ]
    },
    {
      id: 'checker', tint: 'deep', eyebrow: 'A worked example, ours',
      h2: 'A prerequisite checker in Python: test a course plan before you choose it',
      lede: 'Prerequisite rules are data, and data can be checked by a program. We wrote this checker for this page: it stores each rule in a dictionary and walks a plan term by term. It is also a neat example of the problem solving the Grade 11 and 12 courses teach. It was run in Python 3.13.',
      body: [
        { kind: 'ol', items: [
          '<b>Write each rule as data.</b> Two dictionaries: one for courses that must be finished in an earlier term, one for a course that may run alongside its partner. MCV4U goes in the second, because the curriculum says MHF4U may be taken &ldquo;prior to or concurrently&rdquo; with it.',
          '<b>Represent the plan in time order.</b> A list of terms, each a list of course codes. Using terms instead of grades lets a semestered school put ICS3U and ICS4U in the same year, one after the other.',
          '<b>Record when each course is taken.</b> One pass builds a dictionary from course code to term number.',
          '<b>Check every rule against that record.</b> A course with a must-come-earlier rule fails if the needed course is missing or in the same or a later term. A course with a may-come-alongside rule fails only if the needed course is missing or later.',
          '<b>Report problems in plain words.</b> The function returns a list of sentences. An empty list means the plan works.'
        ] },
        { kind: 'code', label: 'Python &middot; course plan prerequisite checker (ours)', lang: 'python', code: PLAN_PY, note: 'Output: plan works, then two lines for the switched plan: ICS4U needs ICS3U in an earlier term, and MCV4U needs MHF4U first or alongside it.' },
        { kind: 'table', mt: true, caption: 'Our test cases for the checker, all run (ours)', head: ['Plan, term by term', 'Result', 'What it tests'], rows: [
          ['ICS3U; then ICS4U', 'plan works', 'No Grade 10 course is needed'],
          ['ICS3U and ICS4U in the same term', 'ICS4U needs ICS3U in an earlier term', 'A prerequisite cannot run alongside'],
          ['MPM2D; MCR3U; MHF4U and MCV4U together', 'plan works', 'Concurrent MHF4U and MCV4U is allowed'],
          ['MPM2D; MCR3U and MCV4U; then MHF4U', 'MCV4U needs MHF4U first or alongside it', 'Calculus and Vectors a term too early'],
          ['ICD2O; ICS3C; ICS4C', 'plan works', 'The college rail'],
          ['An empty plan', 'plan works', 'Nothing to check, and no crash']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Where the checker simplifies',
          left: [
            'The MHF4U record also accepts Mathematics for College Technology, Grade 12, as an alternative prerequisite, and our rule lists only MCR3U. Adding it means letting a rule hold a choice of courses rather than one: a good extension exercise for a Grade 11 student.',
            'The checker also knows nothing about what a school actually offers, or about equivalent credits a student may hold. It tests the rules on this page and nothing more.'
          ],
          rightH3: 'Why write it at all',
          right: [
            'Because turning written rules into data is a core programming skill. The two dictionaries are the rules; the loop never changes when a rule is added. That separation is the modular design ICS4U asks for, in twenty lines.',
            'Students who build this, then extend it, practise dictionaries, nested loops, edge cases and clear output in one small project that answers a question their family actually has.'
          ] }
      ]
    },
    {
      id: 'ossd', tint: 'tint', eyebrow: 'OSSD, half credits and timing',
      h2: 'ICS3U and ICS4U on the OSSD: credits, groups and half credits',
      lede: 'Families searching for OSSD ICS3U or OSSD ICS4U usually want to know how the course counts toward the Ontario Secondary School Diploma. Here is what the sources say, and one thing we cannot do.',
      body: [
        { kind: 'two',
          leftH3: 'How the courses count',
          left: [
            'Each course on the 2008 table is worth one credit. On the current graduation requirements page, computer studies is one of the subjects students can use for the STEM-related course group, if they started Grade 9 in 2024 or later, or for Group 3, if they started in 2023 or earlier.',
            'The 2008 Computer Studies document already pointed to Group 3 when it was written, in a footnote that lists computer studies beside technological education, an additional science course and cooperative education as ways to meet that requirement.'
          ],
          rightH3: 'Half credits',
          right: [
            'The courses in the 2008 document may be delivered as two half credits, &ldquo;with the exception of the Grade 12 university preparation course&rdquo;, which is ICS4U. Half-credit courses carry &ldquo;a minimum of fifty-five hours of scheduled instructional time&rdquo;.',
            'There is one condition worth knowing if ICS3U is split: &ldquo;students must successfully complete both parts of the course to fulfil the prerequisite&rdquo;. Half of ICS3U does not open ICS4U.'
          ] },
        { kind: 'p', mt: true, html: 'Where the OSSD credit comes from is simple: the school, night school, summer school or Ontario credit provider that teaches and evaluates the course. We are a teaching school working beside those courses, and we do not grant Ontario credits. For the current diploma rules, the source is Ontario&rsquo;s graduation requirements page, updated September 02, 2026.' }
      ]
    },
    {
      id: 'plan', tint: 'deep', eyebrow: 'Planning with your teen',
      h2: 'Planning the pathway in Grade 9 or 10: five steps',
      lede: 'These steps are ours. They take about an evening, and they make the course selection form in Grade 10 much easier.',
      body: [
        { kind: 'ol', items: [
          '<b>Write down two possible destinations.</b> One likely, one possible. For example, university computer science and a college IT program. The plan should keep both open as long as it can.',
          '<b>Draw the math line first.</b> If any destination is university computer science, plan Functions in Grade 11 and both Advanced Functions and Calculus and Vectors in Grade 12.',
          '<b>Choose the Grade 11 computer course.</b> ICS3U keeps ICS4U open; ICS3C opens ICS4C. If the destinations disagree, the counsellor can say which choice leaves more doors open at your school.',
          '<b>Decide about Grade 10.</b> ICD2O is optional. It helps most for students who have not written code before and plan ICS3U.',
          '<b>Check the plan, then book a counsellor meeting.</b> Run it past the rules on this page, or the checker above, then confirm with the school, which knows what it offers and when.'
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Grade 9 and 10', p: 'Build the habit of writing small programs. Contests such as the CCC Junior, entered through school, are a low-pressure way to practise.' },
          { h3: 'Grade 11', p: 'The busiest year on the map: ICS3U or ICS3C beside Functions. Tracing and testing habits formed now carry into Grade 12.' },
          { h3: 'Grade 12', p: 'ICS4U or ICS4C beside Advanced Functions and Calculus and Vectors, and the admission forms some programs add.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your teen is on the map',
    h2: 'Four stages from first program to first year',
    lede: 'Our own stages, matched loosely to the grades on the map.',
    table: { caption: 'A student&rsquo;s progress along the pathway (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Explorer', 'Writes small programs for fun, often in Grade 9 or 10, with or without ICD2O'],
      ['2. Builder', 'Writes programs with arrays and functions from a plan, the core of Grade 11'],
      ['3. Designer', 'Splits programs into classes and chooses algorithms on purpose, the core of Grade 12'],
      ['4. Ready for first year', 'Learns a new language or library alone, from its documentation']
    ] },
    left: { h3: 'For parents', ps: [
      'The stages do not have to match the grades. A Grade 10 student at stage 2 is ahead; a Grade 12 student at stage 2 needs help with design before first year.',
      'The math line matters as much as the stage. Ask about both at every course selection.'
    ] },
    right: { h3: 'For students', ps: [
      'Pick one small project each summer and finish it. Finished projects move you up the stages faster than any course.',
      'Keep your math on track. It decides more university doors than your computer courses do.'
    ] }
  },

  catalogue: {
    eyebrow: 'Our catalogue',
    h2: 'Nine more courses for each step of the pathway',
    lede: 'Every course here is taught live by a teacher your teen keeps all term, in a group batch or privately.',
    bands: [
      { num: 'I', h3: 'Grades 9 and 10', sub: 'Before the ladder', courses: [
        { code: 'OCSC / G10 / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'A first text language, properly.' },
        { code: 'OCSC / G10 / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Web pages that respond and react.' },
        { code: 'OCSC / G10 / 03', slug: 'waterloo-math-contests-gauss-to-euclid-course', title: 'Waterloo math contests', blurb: 'Contest math from Gauss to Euclid.' }
      ] },
      { num: 'II', h3: 'Grades 11 and 12', sub: 'On the ladder', courses: [
        { code: 'OCSC / G12 / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'For schools that teach the ladder in Java.' },
        { code: 'OCSC / G12 / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Algorithms for Grade 12 and beyond.' },
        { code: 'OCSC / G12 / 03', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub for teens', blurb: 'Version control for team projects.' }
      ] },
      { num: 'III', h3: 'Off the map', sub: 'Teens', courses: [
        { code: 'OCSC / OFF / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'A field no school course covers in depth.' },
        { code: 'OCSC / OFF / 02', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'From the CCC to harder contests.' },
        { code: 'OCSC / OFF / 03', slug: 'complete-app-development-masterclass-for-teens', title: 'App development for teens', blurb: 'An app on a phone by the end.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Class format',
    h2: 'Live classes at every grade of the pathway',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school, at a time set in your Ontario time zone.' },
      { time: 'Weekends', l: 'Morning classes, steady across a whole school year.' },
      { time: '1-on-1', l: 'For a student working ahead, or catching up.' }
    ],
    cells: [
      { h3: 'Any grade', p: 'From Grade 9 coding to ICS4U.' },
      { h3: 'Math too', p: 'Functions through Calculus and Vectors.' },
      { h3: 'Python or Java', p: 'The school&rsquo;s language.' },
      { h3: 'Plans reviewed', p: 'Course choices talked through.' },
      { h3: 'One teacher', p: 'Who follows the student year to year.' },
      { h3: 'Batch or private', p: 'Fifteen to twenty, or one.' }
    ]
  },

  projectsH2: 'What students have built',
  projectsLede: 'Projects from students at different points on the pathway. The <a class="ag-inline-link" href="/student-labs">student labs</a> page has the full set.',
  reviewsLede: 'Google reviews from families, word for word.',

  fees: {
    h2: 'Fees',
    lede: 'Start with a free class. After it, families pay a monthly fee for eight live classes a month; the amount appears below in your own currency, with no year-long commitment, and you can stop after any month.',
    free: ['A free first class', 'Bring the course selection form', 'No card required'],
    group: ['A batch of fifteen to twenty', 'The same teacher throughout', 'Your choice of batch', 'Monthly payments'],
    one: ['One student, one teacher', 'Planned around the school year', 'Built from their courses']
  },

  faq: {
    eyebrow: 'Pathway questions',
    h2: 'Ontario computer science pathway: common questions',
    items: [
      { q: 'What computer science courses are there in Ontario high schools?', a: 'The current Ontario curriculum website lists five computer studies courses: ICD2O in Grade 10, ICS3U and ICS3C in Grade 11, and ICS4U and ICS4C in Grade 12. The 2008 curriculum document also describes ICS2O, a Grade 10 course not on the current list.' },
      { q: 'Do I need ICD2O to take ICS4U?', a: 'No. ICS4U needs ICS3U, and ICS3U has no prerequisite. ICD2O is optional, though it helps students who have never coded before.' },
      { q: 'Can I take ICS4U without ICS3U?', a: 'The course table in the 2008 curriculum lists ICS3U as the prerequisite for ICS4U, and the current curriculum website shows the same. Ask the school about any equivalent it accepts.' },
      { q: 'Can I take ICS3U and ICS4U in the same year?', a: 'Only if ICS3U is finished first. In a semestered school, ICS3U in the first semester and ICS4U in the second can work, if the school offers that timetable.' },
      { q: 'Does ICS3U or ICS4U count toward the OSSD?', a: 'Each is worth one credit. Ontario\'s graduation requirements page lists computer studies in the STEM-related course group for students who started Grade 9 in 2024 or later, and in Group 3 for those who started in 2023 or earlier.' },
      { q: 'Can ICS3U or ICS4U be taken as half credits?', a: 'ICS3U can be delivered as two half credits, and both parts must be completed to fulfil the prerequisite for ICS4U. ICS4U, the Grade 12 university preparation course, is the one course in the 2008 document that cannot be split.' },
      { q: 'Which math courses go with computer science?', a: 'For university computer science, plan Functions (MCR3U) in Grade 11, then Advanced Functions (MHF4U) and Calculus and Vectors (MCV4U) in Grade 12. The curriculum says MHF4U must be taken before or at the same time as MCV4U.' },
      { q: 'Do Waterloo or U of T require ICS4U?', a: 'On 22 October 2026 neither university\'s computer science page listed ICS4U. Waterloo recommended Grade 11 U Introduction to Computer Science, and both listed Grade 12 math and English. Check the pages in the year you apply.' },
      { q: 'Do you grant credits along the pathway?', a: 'No. We teach beside the school courses and do not grant Ontario credits. Credits come from the school or credit provider that teaches and evaluates each course.' },
      { q: 'When are classes held?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Most of Ontario keeps Eastern time, and we confirm each class time in yours.' },
      { q: 'How much do classes cost?', a: 'The first class is free. After that families pay a monthly fee and can stop after any month. The fees section on this page shows the current figure.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Along the pathway',
    h2: 'Guides for each step',
    lede: 'Pages for the courses and contests on the map.',
    items: [
      { href: '/ics3u-computer-science-help', label: 'ICS3U computer science help', p: 'The Grade 11 university course, strand by strand.' },
      { href: '/ccc-junior-guide', label: 'CCC Junior guide', p: 'The Waterloo programming contest for younger students.' },
      { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation', p: 'Junior and Senior levels of the contest.' },
      { href: '/cemc-waterloo-contests-preparation', label: 'Waterloo math contests', p: 'The CEMC math contests beside the math line.' },
      { href: '/online-math-tutor-canada', label: 'Online math tutor for Canada', p: 'Functions, Advanced Functions, Calculus and Vectors.' },
      { href: '/coding-classes-in-ontario', label: 'Coding classes in Ontario', p: 'Classes for every age in the province.' },
      { href: '/coding-classes-in-canada', label: 'Canada', p: 'Every page for Canadian families.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us your teen&rsquo;s grade, the courses they have taken and the ones they are considering. The first class looks at their current level and their plan together.',
    readFirst: 'Want to read first? The <a class="ag-inline-link" href="/courses/ics3u-ics4u-computer-science-companion-course">companion course syllabus</a> covers ICS3U and ICS4U, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a live lesson.',
    note: 'Every class is live on video with a teacher in India, so the pathway can be followed from anywhere in Ontario. A WhatsApp message is the quickest way to reach us.',
    formNote: 'The free class is booked without card details.'
  },

  footer: {
    cols: [
      { h4: 'The pathway', links: [
        { href: '/courses/ics3u-ics4u-computer-science-companion-course', label: 'ICS3U and ICS4U companion' },
        { href: '/courses/ontario-grade-12-university-math-mhf4u-mcv4u-course', label: 'Grade 12 university math' },
        { href: '/ics3u-computer-science-help', label: 'ICS3U help' },
        { href: '/ccc-junior-guide', label: 'CCC Junior guide' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/coding-classes-in-ontario', label: 'Coding classes in Ontario' },
        { href: '/cemc-waterloo-contests-preparation', label: 'Waterloo math contests' },
        { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada' }
      ] }
    ],
    bottomRight: 'Draw the math line first, then the ladder'
  },

  personalityCss: `
.ag-root.ag-ocsc .ag-hero h1 { letter-spacing: -0.014em; max-width: 22ch; }
.ag-root.ag-ocsc .ag-capsule { border-left-width: 6px; border-radius: 2px; }
.ag-root.ag-ocsc .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-ocsc .ag-table caption { text-align: left; }
.ag-root.ag-ocsc .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-ocsc .ag-steps li { margin-bottom: 0.6rem; }
`,

  dossier: {
    curriculumAuthority: 'The Ontario Curriculum, Grades 10 to 12: Computer Studies (2008), fetched raw 22 October 2026: course table and prerequisites, the prerequisite chart sentence, the Group 3 footnote, half-credit rules (exception, fifty-five hours, both parts for a prerequisite), one credit per course. Ontario curriculum content API: computer studies list and senior math records (MCR3U, MHF4U, MCV4U, MDM4U prerequisites and the MCV4U concurrency sentence). Waterloo and U of T Computer Science pages (re-fetched the same day). ontario.ca graduation requirements (Group 3, STEM-related group).',
    localProject: 'Our prerequisite checker in Python: rules held in two dictionaries (must-come-earlier and may-come-alongside), a plan as a list of terms, run on a university route ("plan works") and a switched route (two problems found), with a six-case test table; four routes through the map; a course-by-course table against two admission pages; five planning steps. Lesson family: modelling rules as data.',
    requiredMentions: ['This chart maps out all the courses in the discipline', 'fifty-five hours of scheduled instructional time', 'both parts of the course to fulfil the prerequisite', 'term_of', 'How the strands change from Grade 10 to Grade 12', 'ICS4U needs ICS3U in an earlier term', 'MCV4U needs MHF4U first or alongside it', 'BY_THEN', 'University, late start', 'Principles of Mathematics, Grade 10, Academic', 'Functions and Applications, Grade 11, University/College Preparation', 'Draw the math line first'],
    sources: [
      { claim: 'Computer studies course table, prerequisites, prerequisite chart, Group 3 footnote, half credits, one credit per course.', url: 'https://www.edu.gov.on.ca/eng/curriculum/secondary/computer10to12_2008.pdf' },
      { claim: 'Current computer studies list and senior math course records with prerequisites.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items?system.type=l2___course&elements.code%5Bin%5D=MCR3U,MHF4U,MCV4U,MDM4U,MPM2D,MTH1W,MCF3M,MAP4C,MEL4E&depth=0' },
      { claim: 'Waterloo Computer Science requirements for Ontario students.', url: 'https://uwaterloo.ca/future-students/programs/computer-science' },
      { claim: 'U of T Computer Science prerequisites by campus and the co-op line.', url: 'https://future.utoronto.ca/undergraduate-programs/computer-science/' },
      { claim: 'Computer studies in Group 3 and the STEM-related course group.', url: 'https://www.ontario.ca/page/high-school-graduation-requirements' }
    ],
    rejectedClaims: [
      'That ICD2O replaced ICS2O: neither source says so.',
      'That ICS4U is required by Waterloo or U of T: neither page lists it.',
      'That ICS4U counts as Waterloo\'s "One other 4U course": given as our reading only.',
      'That MPM2D is the current Grade 10 math course: the page quotes only the MCR3U prerequisite field and tells families to ask the school.',
      'That the four routes are official tracks: labelled ours.',
      'Any college program requirement: none quoted.',
      'Advice for an individual student\'s timetable: the page sends families to the guidance counsellor.',
      'Any affiliation with the Ontario Ministry of Education, Waterloo or U of T: none.'
    ]
  }
};
