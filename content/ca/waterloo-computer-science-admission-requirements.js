'use strict';
// Waterloo Computer Science admission requirements (ag- admissions door; Canada cluster Plan 2, row 57).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Sources, fetched raw with curl on 22 October 2026 (copies in keyword-research-2026-09/ca/src-pilots/
// waterloo-computer-science-admission-requirements/; research copies in ca/src/admissions; facts-schools-contests.md 203 to 209):
//  - uwaterloo.ca/future-students/programs/computer-science: "Six Grade 12 U and/or M courses including" Advanced Functions,
//    Calculus and Vectors, "Any Grade 12 U English", "One other 4U course"; "Individual selection" "from the low to mid-90s";
//    Recommended course "Grade 11 U Introduction to Computer Science"; the AIF "is required for admission."; CSMC and/or Euclid "is
//    not required for admission, but writing one of these contests is required for some scholarships offered by the Faculty of
//    Mathematics."; Faculty of Mathematics; "Bachelor of Computer Science in Computer Science or Bachelor of Mathematics in Computer
//    Science"; sample first-year schedule CS 135 "Designing Functional Programs", MATH 135, MATH 137, CS 136, CS 136L, MATH 136,
//    MATH 138, "This is a sample schedule."; co-op and regular both "Yes".
//  - .../admission-requirements/computer-science/high-school/domestic/<province> (ontario, british-columbia, alberta, quebec,
//    saskatchewan, manitoba, nova-scotia), the clean URLs the requirements tool redirects to: program requirements per province
//    (quoted in the province table), "The Admission Information Form is required for admission to this program.", the same
//    average line on every province page, the recommended-course lines ("helpful background for your studies; however, it will
//    not impact your likelihood of admission"), "High school diploma or equivalent with a minimum of six Grade 12 U or M courses,
//    including all required courses.", "Grade 12 U or M courses must be completed through schools that are accredited by the
//    Ontario Ministry of Education.", "Admission averages depend on the number of applications received and the number of spaces
//    available. The range listed above is based on previous years.", BC ADST rule, Alberta blended-grade rule, "Required courses
//    completed more than three years ago may need to be updated."
//  - .../admissions/individual-selection: "there are no absolute cut-off grades"; "The Faculty of Mathematics evaluates students
//    based upon both grades and supplementary information forms."
//  - .../admissions/faqs-admissions: "only U and M courses are included in the overall admission average."; "we will always include
//    the courses which are required for admission in your admission average. We will then use your remaining courses with the
//    highest grades"; Grade 11 marks and "mid-term or predicted grades" for conditional offers; "most of our admission decisions
//    are made in May"; contest results "possibly admission decisions".
//  - .../admissions/deadlines: application deadline "February 1, 2027" and documents deadline "February 15, 2027" (programs other
//    than Engineering); CSMC registration deadline October 22, 2026; CCC registration deadline February 11, 2027; Olympiad, Global,
//    and National Scholarships application deadline March 5, 2027; Euclid registration deadline March 11, 2027; "We admit first-year
//    students for the term starting in September only."
//  - .../admissions/admission-information-form: deadline "February 15, 2027" for programs other than those listed; the SIF "asks
//    about any Waterloo mathematics contests you've participated in".
//  - .../applicants/waterloo-contests: "(tutoring schools are not eligible)"; CSMC "to enhance your admissions status"; CCC "While
//    it is not an admission requirement".
//  - cemc.uwaterloo.ca/contests/how-contests-work (facts-schools-contests.md 112, research copy ca/src/cemc/how-contests-work.html):
//    "all students must participate through their school."
//  - .../admissions/repeated-courses: "you will not be penalized in the application process"; "we'll use your highest grade";
//    accepted course types; "we recommend taking all required Grade 12 courses during the regular school year".
// Left out on purpose: Waterloo's employment and graduation percentages (outcome-adjacent), the Faculty of Science award amount
// (a currency figure), the student-written Missing Manual article (not official wording).
// Our own material, labelled on the page: the six-course average function in Python and its run (Python 3.13 prints
// "Six-course average: 90.8" for the invented plan; three edge cases checked), the Grade 9 to 12 plan, the readiness ladder.
// Lesson family: rules to code (turn a published rule into a function, then test its edges).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const AVG_PY = `# Six-course average, following the method Waterloo's FAQ describes (ours)
# Required for Computer Science (Ontario): MHF4U, MCV4U, a Grade 12 U English,
# and one other Grade 12 U course. Only U and M courses count.

REQUIRED = ["MHF4U", "MCV4U", "ENG4U"]

def six_course_average(courses):
    """courses: list of (code, level, mark). Returns (average, picked) or (None, reason)."""
    counted = [c for c in courses if c[1] in ("U", "M")]       # O, C and others never count
    by_code = {c[0]: c for c in counted}
    missing = [r for r in REQUIRED if r not in by_code]
    if missing:
        return None, "missing required course: " + ", ".join(missing)
    picked = [by_code[r] for r in REQUIRED]
    rest = sorted((c for c in counted if c[0] not in REQUIRED),
                  key=lambda c: c[2], reverse=True)
    other_u = [c for c in rest if c[1] == "U"]
    if not other_u:
        return None, "no other Grade 12 U course"
    picked.append(other_u[0])                                  # the best other U course
    rest.remove(other_u[0])
    picked += rest[:6 - len(picked)]                           # then the highest remaining marks
    if len(picked) < 6:
        return None, "fewer than six U or M courses"
    average = sum(c[2] for c in picked) / 6
    return round(average, 1), picked


plan = [
    ("MHF4U", "U", 91), ("MCV4U", "U", 88), ("ENG4U", "U", 84),
    ("ICS4U", "U", 95), ("SPH4U", "U", 86), ("SCH4U", "U", 79),
    ("MDM4U", "U", 90), ("TEJ4M", "M", 97), ("PAF4O", "O", 99),
]
average, picked = six_course_average(plan)
for code, level, mark in picked:
    print(f"{code} ({level}) {mark}")
print("Six-course average:", average)`;

const UW = (path, label) => '<a class="ag-inline-link" href="https://uwaterloo.ca/future-students/' + path + '" rel="noopener" target="_blank">' + label + '</a>';

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'WATERLOO CS', blurb: 'Waterloo Computer Science admission from Waterloo&rsquo;s own pages: required courses in seven provinces, the published average, the AIF, contests and the dates for 2027 entry.' },
  slug: 'waterloo-computer-science-admission-requirements',
  code: 'wcsa',
  accent: '#17610F',
  accentRationale: 'Waterloo CS admission, Canada: a muted pine green, #17610F, allocated for this row; 7.0 RGB units from the nearest site accent (#115F12) and at least 14 from the other Canada accents, contrast 7.20 on the paper #FBF8F2 and 6.19 on the deepest tint',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Waterloo computer science admission requirements',
  title: 'Waterloo Computer Science Admission Requirements, 2027',
  description: 'Waterloo CS admission from the university pages: required courses in seven provinces, the published average, the AIF, contests and the dates for 2027 entry.',
  ogDescription: 'What Waterloo Computer Science asks for, read from the university&rsquo;s own pages on 22 October 2026: courses by province, how the average is built, the AIF, contests and the 2027 deadlines.',
  twitterDescription: 'Waterloo Computer Science admission, read from Waterloo&rsquo;s pages: courses, average, AIF, dates.',
  pageName: 'Waterloo Computer Science Admission Requirements',
  webPageDescription: 'A guide for Canadian high school students and parents to University of Waterloo Computer Science admission, built from the university&rsquo;s own program, requirements, FAQ, deadline and contest pages, with a worked average calculation of our own.',
  courseDescription: 'Live online Grade 12 math (Advanced Functions, Calculus and Vectors) and computer science teaching for Canadian students aiming at university computer science, in a batch or one to one. No admission outcome is promised.',
  crumbs: [{ name: 'Canada', href: '/coding-classes-in-canada' }, { name: 'Ontario', href: '/coding-classes-in-ontario' }],
  crumbLabel: 'Waterloo CS admission',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#courses', label: 'Courses' },
    { href: '#provinces', label: 'By province' },
    { href: '#average', label: 'The average' },
    { href: '#contests', label: 'Contests' },
    { href: '#dates', label: '2027 dates' }
  ],
  eyebrow: 'University of Waterloo &middot; Computer Science &middot; Read 22 October 2026',
  h1: 'Waterloo computer science admission requirements',
  lede: 'Families hear a lot of numbers about Waterloo Computer Science, most of them second-hand. This page sticks to what the University of Waterloo publishes itself: the courses it requires in each province, the exact wording of its average, the Admission Information Form, the contests it mentions and the deadlines for September 2027 entry. Every fact carries the page it came from and the day we read it. Requirements change from one cycle to the next, so treat this as a map and confirm each line on Waterloo&rsquo;s own site when your teen&rsquo;s application season opens. We teach the math and the programming; we never predict or promise an admission decision.',
  secondaryCta: { href: '#average', label: 'See how the average is built' },
  wa: 'Hello Modern Age Coders, my teen is planning to apply to Waterloo Computer Science and wants help with Advanced Functions, Calculus and Vectors and programming. Could we book a free first class?',
  heroNote: '10,000+ students taught since 2020 &middot; Grade 12 math and computer science, taught for understanding &middot; Live online',
  spec: [
    ['For', 'Grades 10 to 12, planning for university CS'],
    ['Math', 'Advanced Functions, Calculus and Vectors'],
    ['Coding', 'Python, Java or C++, beyond the school course'],
    ['Class size', 'Group of fifteen to twenty, or private'],
    ['Schedule', 'Weekday evenings or weekend mornings'],
    ['Zone', 'Set in your own provincial time'],
    ['Outcome', 'Skills and projects; no admission promise'],
    ['First step', 'One free class, no card']
  ],
  capsuleQ: 'In short',
  capsule: 'On pages read 22 October 2026, Waterloo Computer Science asked Ontario students for Advanced Functions, Calculus and Vectors, a university English and one more U course, inside at least six Grade 12 U or M courses, plus the Admission Information Form; its average reads &ldquo;Individual selection from the low to mid-90s&rdquo;. Modern Age Coders teaches that math and coding live online through Ontario Grade 12 University Math, as a batch or one to one.',

  picks: {
    eyebrow: 'Build the skills, not a story',
    h2: 'Three courses that match what Waterloo lists',
    lede: 'Two of Waterloo&rsquo;s four named Ontario requirements are math courses, and its recommended course is computer science. These three cover that ground and the contest it mentions.',
    items: [
      { course: 'ontario-grade-12-university-math-mhf4u-mcv4u-course', code: 'WCS / 01', title: 'Ontario Grade 12 University Math', note: 'Advanced Functions and Calculus and Vectors, taught alongside the school course, with proof-style reasoning rather than drilled steps.' },
      { course: 'ics3u-ics4u-computer-science-companion-course', code: 'WCS / 02', title: 'Ontario Computer Science Companion', note: 'For students taking ICS3U or ICS4U at school: tracing, testing and design habits that carry into a first university course.' },
      { course: 'ccc-junior-and-senior-preparation-course', code: 'WCS / 03', title: 'CCC Junior and Senior preparation', note: 'Timed algorithm problems in the format of the Canadian Computing Competition, written by our teachers.' }
    ]
  },

  sections: [
    {
      id: 'courses', tint: 'tint', eyebrow: 'Ontario applicants',
      h2: 'The courses Waterloo requires for Computer Science',
      lede: 'Waterloo describes its Ontario requirement in two places, the Computer Science program page and the requirements tool for Ontario high school students, and the wording differs slightly. Both are below, as Waterloo printed them when we read them on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'Waterloo Computer Science, Ontario high school applicants, two Waterloo pages side by side (read 22 October 2026)', head: ['Item', 'Program page wording', 'Requirements tool wording'], rows: [
          ['Overall rule', '&ldquo;Six Grade 12 U and/or M courses including&rdquo; the four below', '&ldquo;High school diploma or equivalent with a minimum of six Grade 12 U or M courses, including all required courses.&rdquo;'],
          ['Math, part one', 'Advanced Functions', 'Advanced Functions 4U'],
          ['Math, part two', 'Calculus and Vectors', 'Calculus and Vectors 4U'],
          ['English', '&ldquo;Any Grade 12 U English&rdquo;', '&ldquo;Any Grade 12 U English&rdquo;'],
          ['Fourth course', '&ldquo;One other 4U course&rdquo;', '&ldquo;One other Grade 12 U course&rdquo;'],
          ['Supplementary form', 'The Admission Information Form &ldquo;is required for admission.&rdquo;', '&ldquo;The Admission Information Form is required for admission to this program.&rdquo;'],
          ['Where the courses come from', 'Not stated', '&ldquo;Grade 12 U or M courses must be completed through schools that are accredited by the Ontario Ministry of Education.&rdquo;']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Reading the list like an admissions officer would',
          left: [
            'Four of the six courses are fixed: Advanced Functions (MHF4U), Calculus and Vectors (MCV4U), a Grade 12 university English, and one more university-level course of the student&rsquo;s choosing. The last two slots may be U or M courses. An M course is a university/college preparation course, which is why a course such as Grade 12 computer engineering technology can count while an open course cannot.',
            'Waterloo&rsquo;s admissions FAQ settles the open courses directly: &ldquo;only U and M courses are included in the overall admission average.&rdquo; College-preparation and co-op courses are left out of that average as well, the same answer says.'
          ],
          rightH3: 'What the list leaves out',
          right: [
            'No Grade 12 science appears on Waterloo&rsquo;s Ontario list for Computer Science, and no computer science course is required. A student can meet the four named requirements without ever taking ICS3U or ICS4U, although Waterloo recommends computer science, as the next section shows.',
            'The list also says nothing about Grade 11 math. Advanced Functions and Calculus and Vectors both build on Grade 11 Functions in the Ontario sequence, so in practice the math plan starts a year before the requirement is visible on paper. That planning point is ours, not Waterloo&rsquo;s.'
          ] },
        { kind: 'source', html: 'Sources: ' + UW('programs/computer-science', 'Waterloo, Computer Science program page') + ' and ' + UW('admissions/admission-requirements/computer-science/high-school/domestic/ontario', 'Computer Science requirements for Ontario high school students') + ', with the admissions FAQ, all read 22 October 2026. We have no connection with the University of Waterloo.' }
      ]
    },
    {
      id: 'provinces', tint: 'deep', eyebrow: 'Outside Ontario',
      h2: 'Waterloo Computer Science requirements in seven provinces',
      lede: 'Waterloo&rsquo;s requirements tool gives each province its own list, written in that province&rsquo;s course names. We read seven of them on 22 October 2026. Every one printed the same average line and said the Admission Information Form is required.',
      body: [
        { kind: 'table', caption: 'Program requirements for Waterloo Computer Science by province, as listed by Waterloo&rsquo;s requirements tool (read 22 October 2026)', head: ['Province', 'Required courses', 'General rule', 'Course Waterloo calls helpful background'], rows: [
          ['Ontario', 'Advanced Functions 4U; Calculus and Vectors 4U; Any Grade 12 U English; One other Grade 12 U course', 'Six Grade 12 U or M courses', 'Grade 11 U Introduction to Computer Science and/or Grade 12 U Computer Science'],
          ['British Columbia', 'English Studies 12 or English First Peoples 12; Pre-Calculus 12; Calculus 12 or AP Calculus', 'Six Grade 12 academic courses', 'Computer Science 11'],
          ['Alberta', 'Mathematics 30-1; Mathematics 31; English Language Arts 30-1', 'Five academic courses at the 30 or 31 level', 'Introductory Computer Science (CSE1010)'],
          ['Saskatchewan', 'One English Language Arts course, level 30; Pre-Calculus 30; Calculus 30 or AP Calculus', 'Five academic courses at the 30 level', 'Computer Science 20'],
          ['Manitoba', 'Pre-Calculus Mathematics 40S; English 40S; Calculus 45A, Calculus 45S, or AP Calculus', 'Five academic courses at the 40 level or higher', 'Computer Science 30S'],
          ['Nova Scotia', 'Pre-Calculus 12; Calculus 12; English 12 Academic or English 12 African Heritage', 'Five academic courses at the Grade 12 level', 'AP Computer Science 12, Computer Science Principles 12, or Computer Programming 12'],
          ['Quebec (high school)', 'Grade 12 Algebra and Geometry; Grade 12 Calculus; Grade 12 English', 'Six academic (university-preparation level) subjects', 'None listed on the page we read']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The pattern across provinces',
          left: [
            'Every list we read has three parts: a senior English course, the province&rsquo;s top pre-calculus or functions course, and a calculus course. Ontario adds a fourth named course. The number of required academic courses also varies, six in Ontario and British Columbia, five in Alberta, Saskatchewan, Manitoba and Nova Scotia.',
            'Calculus is the common thread. In British Columbia and Saskatchewan, Waterloo accepts AP Calculus in place of the provincial calculus course; in Manitoba it names Calculus 45A, Calculus 45S or AP Calculus.'
          ],
          rightH3: 'Province rules worth knowing',
          right: [
            'British Columbia: &ldquo;With the exception of Economics 12 and Financial Accounting 12, subjects from the Applied Design, Skills and Technology (ADST) curriculum do not count toward the six academic courses required for admission.&rdquo; Computer Programming 12 sits in that curriculum, so check before counting it.',
            'Alberta: for any provincial exam except English Language Arts 30-1, Waterloo uses &ldquo;the higher grade of either your in-class school grade or your final grade&rdquo;; for English Language Arts 30-1 it uses only the blended grade. Every province page also warns that &ldquo;Required courses completed more than three years ago may need to be updated.&rdquo;'
          ] },
        { kind: 'source', html: 'Source: Waterloo&rsquo;s admission requirements tool for Computer Science, domestic high school students, pages for ' + UW('admissions/admission-requirements/computer-science/high-school/domestic/british-columbia', 'British Columbia') + ', ' + UW('admissions/admission-requirements/computer-science/high-school/domestic/alberta', 'Alberta') + ', Saskatchewan, Manitoba, Nova Scotia, Quebec and Ontario, read 22 October 2026. Quebec CEGEP students have a separate page that we did not read. Students outside these seven provinces should open the tool for their own province.' }
      ]
    },
    {
      id: 'average', tint: 'tint', eyebrow: 'The published average',
      h2: 'How Waterloo describes the average, and how it is built',
      lede: 'The average is the line families ask about first, so it is worth reading slowly. Waterloo does not publish a cut-off for Computer Science. It publishes a range, a method and a warning.',
      body: [
        { kind: 'table', caption: 'What Waterloo says about the Computer Science average, quoted from four of its pages (read 22 October 2026)', head: ['Question', 'Waterloo&rsquo;s words', 'Page'], rows: [
          ['What is the range?', '&ldquo;Individual selection from the low to mid-90s&rdquo;', 'Requirements tool, every province'],
          ['Is that a cut-off?', 'Programs listed as individual selection use grades with supplementary forms or interviews, so &ldquo;there are no absolute cut-off grades to be admitted to those programs.&rdquo;', 'What does individual selection mean?'],
          ['What else counts?', '&ldquo;The Faculty of Mathematics evaluates students based upon both grades and supplementary information forms.&rdquo;', 'What does individual selection mean?'],
          ['Will the range hold?', '&ldquo;Admission averages depend on the number of applications received and the number of spaces available. The range listed above is based on previous years.&rdquo;', 'Requirements tool, Ontario'],
          ['Which courses go in?', '&ldquo;we will always include the courses which are required for admission in your admission average. We will then use your remaining courses with the highest grades to calculate your overall admission average.&rdquo;', 'Admissions FAQ'],
          ['Are Grade 11 marks used?', 'Grade 11 marks and &ldquo;mid-term or predicted grades&rdquo; for Grade 12 courses can be used to make a conditional offer', 'Admissions FAQ'],
          ['When are decisions made?', '&ldquo;most of our admission decisions are made in May once we receive mid-term marks from semestered high schools.&rdquo;', 'Admissions FAQ']
        ] },
        { kind: 'p', mt: true, html: '<b>A worked example, ours.</b> The FAQ&rsquo;s method is precise enough to write as a function, and doing that is a good exercise for a student who wants to study computer science: turn a written rule into code, then test the edges. The plan below is invented. The output is arithmetic on invented marks. It says nothing about any real applicant&rsquo;s chances, because Waterloo reads the Admission Information Form alongside grades and sets no cut-off.' },
        { kind: 'ol', items: [
          '<b>Keep only courses that can count.</b> U and M courses stay; the open course is dropped, however high its mark.',
          '<b>Take the required courses first.</b> Advanced Functions, Calculus and Vectors and the English course go in whatever their marks are.',
          '<b>Fill the slot for one other U course.</b> Take the highest remaining U course. An M course cannot fill this slot.',
          '<b>Fill the last two slots by mark.</b> The highest remaining U or M marks complete the six.',
          '<b>Average the six.</b> Add them and divide by six. Round only at the end.',
          '<b>Test what breaks it.</b> A missing required course, no other U course, and fewer than six courses should each return a reason, not a number.'
        ] },
        { kind: 'code', label: 'Python &middot; six-course average (ours)', lang: 'python', code: AVG_PY, note: 'Output: MHF4U (U) 91, MCV4U (U) 88, ENG4U (U) 84, ICS4U (U) 95, TEJ4M (M) 97, MDM4U (U) 90, then Six-course average: 90.8. The 99 in the open course and the 79 in chemistry never enter the calculation.' },
        { kind: 'table', mt: true, caption: 'Our edge cases for six_course_average (ours; each run in Python 3.13)', head: ['Input', 'What it returns', 'Why the case matters'], rows: [
          ['MHF4U, MCV4U, ENG4U, TEJ4M (M) and a college course', 'no other Grade 12 U course', 'The fourth required course must be U level; M cannot stand in'],
          ['MHF4U and ENG4U only', 'missing required course: MCV4U', 'A required course with no mark cannot be averaged around'],
          ['The four required U courses and one M course', 'fewer than six U or M courses', 'Six is the minimum the requirements page states']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the example shows',
          left: [
            'The open course with the highest mark on the transcript does nothing for the average. The chemistry mark of 79 also drops out, because three higher U or M marks were available. A student who understands the method plans the Grade 12 timetable around it, and does not mistake a high mark in a course that cannot count for progress.',
            'The required courses work the other way: they stay in even when they are a student&rsquo;s weakest marks. Here English at 84 is included while a 97 in an M course competes for a free slot. That is the real reason to start strengthening the required courses early.'
          ],
          rightH3: 'What the example cannot show',
          right: [
            'Waterloo describes Computer Science admission as individual selection, using grades together with the Admission Information Form. A function can reproduce the arithmetic of an average. It cannot reproduce a reading of a form, and it would be dishonest to pretend otherwise.',
            'So we never compare a student&rsquo;s figure against the published range, and nobody on our team tells a family what a given average will do. Waterloo itself says the range is based on previous years and moves with applications and spaces.'
          ] },
        { kind: 'source', html: 'Sources: ' + UW('admissions/individual-selection', 'What does individual selection mean?') + ', ' + UW('admissions/faqs-admissions', 'Commonly asked admission questions') + ' and the Ontario requirements page, read 22 October 2026. The function, the plan and its marks are ours.' }
      ]
    },
    {
      id: 'recommended', tint: 'deep', eyebrow: 'The recommended course',
      h2: 'ICS3U and ICS4U: recommended, and not required',
      lede: 'This is the line most often misquoted. Waterloo recommends high school computer science for Computer Science applicants, and in the same breath says leaving it out does not hurt.',
      body: [
        { kind: 'table', caption: 'Waterloo on high school computer science, two pages (read 22 October 2026)', head: ['Waterloo page', 'Exact wording'], rows: [
          ['Computer Science program page', 'Under the heading for a recommended course: &ldquo;Grade 11 U Introduction to Computer Science&rdquo;'],
          ['Requirements for Ontario high school students', '&ldquo;Grade 11 U Introduction to Computer Science and/or Grade 12 U Computer Science are helpful background for your studies; however, it will not impact your likelihood of admission if you do not take these courses.&rdquo;'],
          ['The same tool, other provinces', 'The province&rsquo;s computer science course is described as helpful background that &ldquo;will not impact your likelihood of admission if you choose not to take the course.&rdquo;']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why take it anyway',
          left: [
            'Waterloo&rsquo;s own phrase is &ldquo;helpful background for your studies&rdquo;, and the first-year schedule explains why. A student in the fall term meets CS 135, Designing Functional Programs, while also taking two first-year math courses and a communication course. Arriving already able to break a problem into steps and test a program frees attention for the new ideas.',
            'The program page is also frank that beginners are welcome: &ldquo;You don&rsquo;t need a background in computer science to get started here.&rdquo; Both statements are true at once. The background helps with the work; its absence does not count against the application.'
          ],
          rightH3: 'If the school does not offer it',
          right: [
            'Not every school runs ICS3U and ICS4U every year. Waterloo&rsquo;s wording means a student without those courses is not at a disadvantage for admission, and can still build the same habits outside school: writing programs from a blank file, tracing them by hand, testing edge cases.',
            'That is the part we teach. A student who learns to reason about code, rather than copy it or paste it from an AI tool, arrives in first year with something no transcript line measures. Our <a class="ag-inline-link" href="/ics3u-computer-science-help">ICS3U help page</a> walks through what the Ontario course itself covers.'
          ] }
      ]
    },
    {
      id: 'aif', tint: 'tint', eyebrow: 'The supplementary forms',
      h2: 'The Admission Information Form, in brief',
      lede: 'Grades are only half of the file. For Computer Science, Waterloo requires an extra form and uses a second one for contest results.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Admission Information Form', p: 'Required for admission. Waterloo&rsquo;s AIF page gives February 15, 2027 for &ldquo;Programs other than those listed in the next rows&rdquo;; none of those rows names Computer Science, so that date applies unless the student also applied to Engineering.' },
          { h3: 'Supplementary Information Form', p: 'For Faculty of Mathematics applicants. Waterloo says it covers the Waterloo math contests a student has written, naming the Euclid and the CSMC.' },
          { h3: 'Applying to Engineering too', p: 'Anyone who also applies to Engineering has to meet the earlier Engineering date, February 1, 2027, the AIF page says.' }
        ] },
        { kind: 'p', mt: true, html: 'Waterloo&rsquo;s AIF page is blunt about authorship: students fill in and send the form themselves, and AI-made answers that are untrue or plagiarized can cost an applicant the offer. We hold to that completely, and no one on our team writes or polishes application text. What we can do is teach the work that later becomes something true to write about, such as a project the student built and can explain line by line.' },
        { kind: 'source', html: 'Source: ' + UW('admissions/admission-information-form', 'Waterloo, Admission Information Form and other supplementary forms') + ', read 22 October 2026.' }
      ]
    },
    {
      id: 'contests', tint: 'deep', eyebrow: 'Contests',
      h2: 'What Waterloo says about the Euclid, the CSMC and the CCC',
      lede: 'Waterloo&rsquo;s pages describe contests in slightly different words depending on the page. We quote each one rather than summarise them into a single claim.',
      body: [
        { kind: 'table', caption: 'Contest statements on Waterloo&rsquo;s own pages (read 22 October 2026)', head: ['Page', 'What it says'], rows: [
          ['Computer Science program page', 'The CSMC and/or Euclid &ldquo;is not required for admission, but writing one of these contests is required for some scholarships offered by the Faculty of Mathematics.&rdquo;'],
          ['Commonly asked admission questions', 'Results of the contests &ldquo;will be used in scholarship decisions and possibly admission decisions for programs in the Faculty of Mathematics.&rdquo;'],
          ['Math, computing, and science contests', 'For Faculty of Mathematics applicants, the CSMC and/or Euclid is encouraged &ldquo;to enhance your admissions status&rdquo;'],
          ['Math, computing, and science contests, on the CCC', '&ldquo;While it is not an admission requirement, we encourage you to participate if you&rsquo;re interested in programming and problem-solving, and especially if you&rsquo;ve applied to Computer Science&rdquo;'],
          ['Math, computing, and science contests, on taking part', 'A teacher from an accredited high school must register for and supervise the test, and &ldquo;(tutoring schools are not eligible)&rdquo;']
        ] },
        { kind: 'table', mt: true, caption: 'Contest dates on Waterloo&rsquo;s Faculty of Mathematics deadlines list for 2027 entry (read 22 October 2026)', head: ['Date', 'What Waterloo lists'], rows: [
          ['October 22, 2026', 'Canadian Senior Mathematics Contest registration deadline (passed by the time most families read this)'],
          ['February 11, 2027', 'Canadian Computing Competition registration deadline'],
          ['March 5, 2027', 'Olympiad, Global, and National Scholarships application deadline'],
          ['March 11, 2027', 'Euclid Contest registration deadline']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Registration runs through the school',
          left: [
            'The contests page puts it plainly: a teacher from an accredited high school registers and supervises, and tutoring schools are not eligible. CEMC, which runs the contests, puts it this way on its How contests work page: &ldquo;all students must participate through their school.&rdquo; Modern Age Coders cannot register a student for the Euclid or the CCC, and we do not offer to. If your school has never entered, raise it with a math or computer science teacher early; Waterloo suggests asking &ldquo;before the end of January&rdquo;.',
            'The registration deadlines above are the dates for the school&rsquo;s order, not the contest days. CEMC publishes the contest dates on its own site.'
          ],
          rightH3: 'How we prepare students',
          right: [
            'We never reproduce past CEMC problems or their solutions. We describe what each contest tests, point students to CEMC&rsquo;s free archive, and teach with original problems written by our teachers and labelled ours. For the Euclid that means algebra, functions and proof-style write-ups; for the CCC it means designing and testing algorithms under time pressure.',
            'Contest practice is worth doing for the problem-solving alone. Our <a class="ag-inline-link" href="/canadian-computing-competition-ccc-prep">CCC preparation page</a> and our <a class="ag-inline-link" href="/cemc-waterloo-contests-preparation">Waterloo math contests page</a> describe both in detail. CEMC runs these contests independently of us; we have no tie to it.'
          ] },
        { kind: 'source', html: 'Sources: ' + UW('programs/computer-science', 'Computer Science program page') + ', ' + UW('admissions/faqs-admissions', 'admissions FAQ') + ', ' + UW('applicants/waterloo-contests', 'Math, computing, and science contests') + ' and ' + UW('admissions/deadlines', 'Application and document deadlines') + ', read 22 October 2026.' }
      ]
    },
    {
      id: 'dates', tint: 'tint', eyebrow: 'September 2027 entry',
      h2: 'Waterloo deadlines for Computer Science applicants',
      lede: 'Waterloo lists two key deadlines for most programs, one to apply and one for documents, and the Admission Information Form falls under the second.',
      body: [
        { kind: 'table', caption: 'Dates for programs other than Engineering, from Waterloo&rsquo;s deadline and FAQ pages (read 22 October 2026)', head: ['When', 'What happens'], rows: [
          ['February 1, 2027', 'Application deadline'],
          ['February 15, 2027', 'Documents deadline, which covers supplementary forms such as the Admission Information Form'],
          ['From Grade 11 marks onward', 'Waterloo can make conditional offers using Grade 11 marks and mid-term or predicted Grade 12 grades'],
          ['May 2027', 'When Waterloo says most of its admission decisions are made'],
          ['September 2027', 'Start of first year: &ldquo;We admit first-year students for the term starting in September only.&rdquo;']
        ] },
        { kind: 'p', mt: true, html: 'Ontario students apply through the Ontario Universities&rsquo; Application Centre, and Waterloo&rsquo;s applicant portal then lists the forms each student owes. The deadline page adds that &ldquo;An application deadline may be extended if a program is not yet full&rdquo;, which is a reason to apply on time rather than a reason to wait.' },
        { kind: 'source', html: 'Source: ' + UW('admissions/deadlines', 'Waterloo, Application and document deadlines') + ' and the admissions FAQ, read 22 October 2026. Dates for 2028 entry will be different; check the page in the autumn your teen applies.' }
      ]
    },
    {
      id: 'firstyear', tint: 'deep', eyebrow: 'After admission',
      h2: 'What first year in Waterloo Computer Science looks like',
      lede: 'The first-year timetable explains the requirements better than any average does. Half of it is mathematics.',
      body: [
        { kind: 'table', caption: 'Sample first-year schedule from Waterloo&rsquo;s Computer Science page (read 22 October 2026; Waterloo calls it &ldquo;a sample schedule&rdquo;)', head: ['Term', 'Courses Waterloo lists'], rows: [
          ['September to December', 'CS 135 Designing Functional Programs; MATH 135 Algebra for Honours Mathematics; MATH 137 Calculus 1 for Honours Mathematics; one communication skills course; one elective'],
          ['January to April', 'CS 136 Elementary Algorithm Design and Data Abstraction; CS 136L Tools and Techniques for Software Development; MATH 136 Linear Algebra 1 for Honours Mathematics; MATH 138 Calculus 2 for Honours Mathematics; two electives']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the math requirement is real',
          left: [
            'Two of the five fall courses are honours mathematics, and both continue into winter. Calculus and Vectors is the doorway to MATH 137, and Advanced Functions sits under all of it. A student who scraped through Grade 12 math by memorising procedures will feel that gap in October of first year.',
            'Computer Science at Waterloo is in the Faculty of Mathematics, and the degree is listed as a Bachelor of Computer Science or a Bachelor of Mathematics in Computer Science. The program is offered as co-op and as a regular program.'
          ],
          rightH3: 'What this means in Grade 11 and 12',
          right: [
            'We teach Advanced Functions and Calculus and Vectors for understanding: why a rule works, where it fails and how to check an answer without a calculator. That is slower in the first week and much faster by the exam, and it is the kind of math first year assumes.',
            'On the programming side, CS 135 opens with functional programs, which surprises students who have only written loops. Students who can already reason about what a function returns, and test it, adapt quickly whatever the language.'
          ] }
      ]
    },
    {
      id: 'plan', tint: 'tint', eyebrow: 'A plan, ours',
      h2: 'A Grade 9 to 12 plan for a student aiming at university computer science',
      lede: 'This plan is ours, written for Ontario students and adaptable to other provinces. It builds skills that matter whatever the admission decision, and it does not promise one.',
      body: [
        { kind: 'ol', items: [
          '<b>Grade 9 and 10: protect the math sequence.</b> Keep the path open to Grade 11 Functions, and treat every algebra unit as groundwork for Advanced Functions.',
          '<b>Grade 10: write real programs.</b> Small projects from a blank file, in Python or Java. The aim is to explain every line, not to finish fast.',
          '<b>Grade 11: take Functions seriously, and ICS3U if the school offers it.</b> Waterloo calls computer science helpful background; Functions is the course every later requirement stands on.',
          '<b>Grade 11 spring: try a contest through the school.</b> Ask a teacher about the CCC or a CEMC math contest. Registration is the school&rsquo;s job, so ask months ahead.',
          '<b>Summer before Grade 12: preview Advanced Functions.</b> A second look at polynomials, logarithms and trigonometry makes the school course a review rather than a first encounter.',
          '<b>Grade 12 fall: plan the six courses on paper.</b> List the four required courses, then the U and M courses that could fill the last two slots. Run the method from the section above on your own expected marks if it helps you see the structure.',
          '<b>Grade 12 fall: apply, then write the AIF yourself.</b> Use Waterloo&rsquo;s own questions and limits. Nobody else writes it.',
          '<b>Grade 12 winter: keep the required marks steady.</b> Waterloo says most decisions are made in May, once mid-term marks arrive, so the second semester counts.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Summer school, night school and repeats',
          left: [
            'Waterloo&rsquo;s page on repeated courses says that for September 2027 entry, a student who repeats a course &ldquo;will not be penalized in the application process&rdquo;, and that &ldquo;we&rsquo;ll use your highest grade&rdquo; in that course. It accepts day school, summer school, night school, online and private school courses, if the province accredits them.',
            'The same page still recommends &ldquo;taking all required Grade 12 courses during the regular school year and doing well on your first attempt.&rdquo; Both statements stand side by side, and families should weigh them together.'
          ],
          rightH3: 'Where a second teacher helps',
          right: [
            'Most families come to us in one of three moments: Grade 11 Functions is wobbling, Grade 12 math is about to start, or a teen who loves coding wants depth the school course cannot give. Each time, the school outline and the student&rsquo;s pace set the plan.',
            'What we do not do is coach an application. The value we can add is in the skills themselves, and in projects real enough that a student can talk about them honestly.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Readiness, honestly measured',
    h2: 'Four stages from strong student to ready for first-year CS',
    lede: 'Our stages, drawn from teaching Grade 11 and 12 students who later started university computer science. They describe skills, not admission odds.',
    table: { caption: 'Stages of readiness for first-year computer science (ours)', head: ['Stage', 'How it shows up in class'], rows: [
      ['1. Procedure follower', 'Gets calculus questions right when they look like the textbook, and stalls when the wording changes'],
      ['2. Reasoner', 'Explains why a rule works and checks answers another way, by sketch, estimate or substitution'],
      ['3. Builder', 'Writes a program from a blank file, tests the edge cases and fixes their own errors'],
      ['4. Ready for CS 135', 'Moves between a math idea and code that tests it, and learns a new language without fear']
    ] },
    left: { h3: 'For parents', ps: [
      'Marks tell you a student&rsquo;s stage only roughly. Ask your teen to explain one calculus answer without the textbook open; the explanation tells you more.',
      'The jump from stage 1 to stage 2 is where most of our Grade 12 math teaching goes, and it is also what first-year honours math demands.'
    ] },
    right: { h3: 'For students', ps: [
      'Check every answer a second way before you call it done. Slow at first, it soon becomes the fastest habit you have.',
      'Write one small program a week that tests a math idea, such as a sequence, a limit or a vector sum. Both subjects improve together.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine more courses for students heading toward university CS',
    lede: 'Each one runs live with the same teacher every week, as a group class or privately, and each is built around reasoning rather than memorised steps.',
    bands: [
      { num: 'I', h3: 'Mathematics', sub: 'Grades 9 to 12', courses: [
        { code: 'WCS / MTH / 01', slug: 'waterloo-math-contests-gauss-to-euclid-course', title: 'Waterloo math contests: Gauss to Euclid', blurb: 'Original contest-style problems, from Grade 7 to the Euclid.' },
        { code: 'WCS / MTH / 02', slug: 'western-canada-grade-12-math-pre-calculus-12-math-30-1-course', title: 'Pre-calculus 12 and Math 30-1', blurb: 'For students in British Columbia, Alberta and the Prairies.' },
        { code: 'WCS / MTH / 03', slug: 'complete-high-school-mathematics-mastery', title: 'High school mathematics', blurb: 'Algebra through calculus for students rebuilding foundations.' }
      ] },
      { num: 'II', h3: 'Programming depth', sub: 'Teens', courses: [
        { code: 'WCS / PRG / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Data structures and algorithms, reasoned out step by step.' },
        { code: 'WCS / PRG / 02', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'From first programs to projects worth explaining.' },
        { code: 'WCS / PRG / 03', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Harder timed problems once the CCC Junior feels comfortable.' }
      ] },
      { num: 'III', h3: 'Projects and tools', sub: 'Teens', courses: [
        { code: 'WCS / PRJ / 01', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub for teens', blurb: 'Version history that shows how a project grew.' },
        { code: 'WCS / PRJ / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Models built and evaluated, not just prompted.' },
        { code: 'WCS / PRJ / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Asking a question of messy data, then charting the answer honestly.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Grade 12 math and coding, live and in step with school',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Early evening in your zone, fixed once you pick a batch.' },
      { time: 'Weekends', l: 'Weekend mornings work well around Grade 12 timetables.' },
      { time: '1-on-1', l: 'Planned around unit tests, exams and contest dates.' }
    ],
    cells: [
      { h3: 'Same teacher each week', p: 'Someone who knows the student&rsquo;s math history.' },
      { h3: 'School outline first', p: 'Units taught in the order the school uses.' },
      { h3: 'Reasoning over recipes', p: 'Why each step works, checked a second way.' },
      { h3: 'Code alongside math', p: 'Short programs that test the idea just learned.' },
      { h3: 'No application writing', p: 'We teach skills; the student writes the forms.' },
      { h3: 'Group or private', p: 'A class of fifteen to twenty, or your teen alone.' }
    ]
  },

  projectsH2: 'Projects by students we teach',
  projectsLede: 'Projects from learners we have taught, the kind of work a student can describe truthfully in their own words. More are on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'What families and students have written about us on Google, unedited.',

  fees: {
    h2: 'Fees',
    lede: 'Start with a free class. If it suits, the monthly fee covers eight live classes a month, shown with its currency code, with no term contract and no penalty for stopping after any month.',
    free: ['No charge for the opening class', 'Bring a current unit or problem set', 'No card asked for'],
    group: ['Fifteen to twenty students', 'The same teacher throughout', 'Choose your batch', 'Billed monthly'],
    one: ['Your teen and one teacher', 'Paced to their own course', 'Times around tests and exams']
  },

  faq: {
    eyebrow: 'Asked by parents and students',
    h2: 'Waterloo Computer Science admission: common questions',
    items: [
      { q: 'What courses does Waterloo require for Computer Science?', a: 'For Ontario students, Waterloo\'s requirements page read on 22 October 2026 listed Advanced Functions 4U, Calculus and Vectors 4U, a Grade 12 university English and one more Grade 12 U course, inside a minimum of six Grade 12 U or M courses. The Admission Information Form is also required. Other provinces have their own lists in Waterloo\'s requirements tool.' },
      { q: 'What average does Waterloo publish for Computer Science?', a: 'Waterloo lists the admission average as individual selection from the low to mid-90s. It also says there are no absolute cut-off grades for individual selection programs, that averages depend on applications and spaces, and that the range is based on previous years. We do not predict any applicant\'s chances.' },
      { q: 'Is ICS3U required for Waterloo Computer Science?', a: 'No. Waterloo\'s program page names Grade 11 U Introduction to Computer Science under its recommended-course heading, and its Ontario requirements page says ICS3U and ICS4U are helpful background but will not impact the likelihood of admission if a student does not take them.' },
      { q: 'When is the Waterloo AIF due for Computer Science?', a: 'Waterloo\'s AIF page, read on 22 October 2026, gave February 15, 2027 for programs other than those listed in the next rows of its deadline table, and none of those rows names Computer Science or the Faculty of Mathematics. A student applying to Engineering as well must submit by the Engineering deadline, February 1, 2027.' },
      { q: 'Do I have to write the Euclid or the CSMC?', a: 'Waterloo says the CSMC and Euclid are not required for admission, but writing one is required for some Faculty of Mathematics scholarships. Its FAQ adds that contest results are used in scholarship decisions and possibly admission decisions. A teacher at the student\'s school must register them; tutoring schools are not eligible.' },
      { q: 'Does Waterloo look at Grade 11 marks?', a: 'Waterloo\'s FAQ says it can use Grade 11 marks with mid-term or predicted Grade 12 grades to make a conditional offer, and that most admission decisions are made in May once mid-term marks arrive. The final offer conditions list the grades a student must still reach.' },
      { q: 'Can a required course be taken in summer school or online?', a: 'Waterloo\'s repeated courses page says that for September 2027 entry it accepts accredited day, summer, night, online and private school courses without penalty, and uses the highest grade for a repeated course. It still recommends taking required Grade 12 courses in the regular school year.' },
      { q: 'What does Waterloo require from students in British Columbia or Alberta?', a: 'For British Columbia, Waterloo listed English Studies 12 or English First Peoples 12, Pre-Calculus 12, and Calculus 12 or AP Calculus. For Alberta it listed Mathematics 30-1, Mathematics 31 and English Language Arts 30-1. Both pages also require the Admission Information Form.' },
      { q: 'Will you help write my Waterloo application or AIF?', a: 'No. Waterloo requires students to complete the AIF themselves, and no one on our team writes or polishes application text. We teach math and programming, and help students build projects they understand well enough to describe honestly themselves.' },
      { q: 'Can you guarantee admission to Waterloo?', a: 'No one honestly can, and we do not. Waterloo selects Computer Science students individually using grades and supplementary forms. Our classes build real skill in Grade 12 math and programming, which helps in first year whatever the decision.' },
      { q: 'When are the live classes held?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We set each time in your own zone, Eastern time for most of Ontario, and check it again whenever the clocks change.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Further reading for Canadian students planning a computer science degree.',
    items: [
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'All of our pages for Canadian families, in one place.' },
      { href: '/ics3u-computer-science-help', label: 'ICS3U help', p: 'The Ontario Grade 11 computer science course, unit by unit.' },
      { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation', p: 'What the Canadian Computing Competition tests.' },
      { href: '/ccc-junior-guide', label: 'CCC Junior guide', p: 'The Junior level, with original practice problems.' },
      { href: '/cemc-waterloo-contests-preparation', label: 'Waterloo math contests', p: 'Gauss to Euclid, and how students enter.' },
      { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada', p: 'Grade 12 math taught for understanding.' },
      { href: '/coding-classes-in-ontario', label: 'Coding classes in Ontario', p: 'Our main page for families across the province.' },
      { href: '/how-to-think-like-a-programmer', label: 'Think like a programmer', p: 'Breaking a problem down before writing code.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A live class with us, described in full.' }
    ]
  },

  start: {
    h2: 'Start with one free class',
    lede: 'Share your teen&rsquo;s grade, the math course they are taking now and whether they already code. We open with the unit they are on this week, and the teacher will say honestly what needs work.',
    readFirst: 'Want to see the material first? The <a class="ag-inline-link" href="/courses/ontario-grade-12-university-math-mhf4u-mcv4u-course">Grade 12 university math syllabus</a> lists every unit, and <a class="ag-inline-link" href="/how-we-teach">our teaching method</a> explains how a class runs.',
    note: 'Every class is live on video with a teacher working from India, so there is no commute and no stranger in your home. WhatsApp is the fastest way to reach us from anywhere in Canada.',
    formNote: 'Booking the first class is free and never asks for a card number.'
  },

  footer: {
    cols: [
      { h4: 'University preparation', links: [
        { href: '/courses/ontario-grade-12-university-math-mhf4u-mcv4u-course', label: 'Grade 12 university math' },
        { href: '/courses/ics3u-ics4u-computer-science-companion-course', label: 'ICS3U and ICS4U companion' },
        { href: '/courses/ccc-junior-and-senior-preparation-course', label: 'CCC preparation course' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/coding-classes-in-ontario', label: 'Coding classes in Ontario' },
        { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada' },
        { href: '/cemc-waterloo-contests-preparation', label: 'Waterloo math contests' }
      ] }
    ],
    bottomRight: 'Read the rule, write the function, test the edges'
  },

  personalityCss: `
.ag-root.ag-wcsa .ag-hero h1 { letter-spacing: -0.01em; max-width: 20ch; }
.ag-root.ag-wcsa .ag-capsule { border-left-width: 6px; }
.ag-root.ag-wcsa .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-wcsa .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-wcsa .ag-steps li { margin-bottom: 0.5rem; }
`,

  dossier: {
    curriculumAuthority: 'University of Waterloo pages fetched raw 22 October 2026: Computer Science program page (Ontario requirements, average, recommended course, AIF, contests, degree, sample first-year schedule); admission requirements tool pages for Computer Science in Ontario, British Columbia, Alberta, Quebec, Saskatchewan, Manitoba and Nova Scotia; What does individual selection mean?; Commonly asked admission questions; Application and document deadlines; Admission Information Form; Math, computing, and science contests; Repeated courses and non-day school courses.',
    localProject: 'Our six_course_average function in Python, written from the method Waterloo\'s admissions FAQ describes (required courses first, one other U course, then the highest remaining U or M marks), run on an invented Grade 12 plan to print "Six-course average: 90.8", with three edge cases that return reasons instead of numbers; a Grade 9 to 12 plan; a four-stage readiness ladder. Lesson family: rules to code.',
    requiredMentions: ['Fill the slot for one other U course','no absolute cut-off grades', 'tutoring schools are not eligible', 'Calculus 45A, Calculus 45S, or AP Calculus', 'English 12 Academic or English 12 African Heritage', 'Designing Functional Programs', 'six_course_average', 'Six-course average: 90.8', 'will not be penalized in the application process', 'TEJ4M'],
    sources: [
      { claim: 'Ontario requirements, the average wording, the recommended Grade 11 U Introduction to Computer Science, the AIF requirement, contests and scholarships, degree and sample first-year schedule.', url: 'https://uwaterloo.ca/future-students/programs/computer-science' },
      { claim: 'Province-by-province Computer Science requirements, general rules and recommended courses (Ontario page shown; six other provinces read the same day).', url: 'https://uwaterloo.ca/future-students/admissions/admission-requirements/computer-science/high-school/domestic/ontario' },
      { claim: 'Individual selection means no absolute cut-off grades; the Faculty of Mathematics uses grades and supplementary forms.', url: 'https://uwaterloo.ca/future-students/admissions/individual-selection' },
      { claim: 'How the admission average is calculated, Grade 11 marks, U and M courses only, May decisions, contests possibly used in admission.', url: 'https://uwaterloo.ca/future-students/admissions/faqs-admissions' },
      { claim: 'Application and document deadlines for 2027 entry and the Faculty of Mathematics contest dates.', url: 'https://uwaterloo.ca/future-students/admissions/deadlines' },
      { claim: 'Contest registration through an accredited school; tutoring schools not eligible; CCC encouraged for Computer Science applicants.', url: 'https://uwaterloo.ca/future-students/applicants/waterloo-contests' },
      { claim: 'Repeated and non-day school courses for September 2027 entry.', url: 'https://uwaterloo.ca/future-students/admissions/repeated-courses' }
    ],
    rejectedClaims: [
      'Any statement of an applicant\'s chances, a target average, or a comparison of an average against Waterloo\'s published range: none made; the worked example is labelled arithmetic on invented marks.',
      'That ICS3U or ICS4U helps admission: Waterloo says they will not impact the likelihood of admission; the page quotes both the recommendation and that sentence.',
      'Waterloo\'s employment rate and graduation rate figures: left out as outcome-adjacent.',
      'That Modern Age Coders can register students for CEMC contests: Waterloo says tutoring schools are not eligible; the page says so.',
      'Any help writing, drafting or editing the AIF or the application: refused on the page.',
      'Content from the student-written Missing Manual article: not used as official wording.',
      'The Faculty of Science contest award amount: a currency figure, left out.',
      'Any affiliation with the University of Waterloo or CEMC: none, and the page says so.'
    ]
  }
};
