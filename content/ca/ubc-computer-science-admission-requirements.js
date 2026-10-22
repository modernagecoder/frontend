'use strict';
// UBC computer science admission requirements (ag- admissions door; Canada cluster Plan 2, row 60, conditional row).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Condition: facts-schools-contests.md 214 recorded a TLS certificate error on you.ubc.ca. On 22 October 2026 a plain curl retry (no
// certificate override of any kind) connected normally and returned 200, so the row was written. Sources, fetched raw that day
// (copies in keyword-research-2026-09/ca/src-pilots/ubc-computer-science-admission-requirements/; research copies in ca/src/admissions):
//  - cs.ubc.ca/admission: "there is no direct admission into the Computer Science program, but rather, you need to apply to enter one of
//    the three faculties that offer Computer Science specializations: Science, Arts, or Commerce."; first-year Science students apply
//    "using the Faculty of Science Coordinated Admissions Process"; "If your application is unsuccessful, you can try again the
//    following year."
//  - cs.ubc.ca/undergrads/how-apply/application-procedure-those-1st-year-standing-faculty-science: STEP 1 to STEP 3; "The Department of
//    Computer Science may not have enough seats to accommodate everyone, and you may need to select a non-CPSC specialization."
//  - cs.ubc.ca/students/undergrad/prospective/how-apply (research copy): "Historically, we have required an average in the low 80's. But
//    every year is different!" (second-year specialization context, not a high school average).
//  - you.ubc.ca/programs/computer-science-vancouver-bsc/: Vancouver, "4 years", Honours "Yes", Co-op "Yes", Faculty of Science, Bachelor
//    of Science; "Options include Software Engineering, or combined honours with sciences, mathematics, or statistics."; "New in 2026:
//    Computer Science majors can now take the Artificial Intelligence (AI) Option."; sample courses "Computation, Programs, and
//    Programming", "Software Construction", "Intermediate Algorithm Design and Analysis", "Introduction to Artificial Intelligence".
//  - you.ubc.ca requirements tool (the page posts to the site's public admin-ajax endpoint; responses saved as ubc-ajax-*.json):
//    Science, Vancouver, for British Columbia (location 686), Ontario (716) and Alberta (711), lists quoted in the tables; BC general
//    requirements "Graduation from high school", "Minimum of 70% in Grade 11 or Grade 12 English (or their equivalents)", "At least six
//    academic/non-academic Grade 12 courses (recommended, but not required)", "UBC considers your grades in all academic Grade 11 and
//    Grade 12 classes, paying special attention to courses that relate to the degree you're applying to."
//  - you.ubc.ca/applying-ubc/requirements/canadian-high-schools/: "you must complete all requirements by June 30 before the September you
//    will be starting at UBC."; distributed learning interim grades "by March 15".
//  - you.ubc.ca/applying-ubc/how-to-apply/personal-profile/: required for high school applicants to any degree on both campuses with
//    three named exceptions; 500 to 2,100 characters per answer (paraphrased; the page uses a dash); two references; "Neither referee
//    should be a friend, family member, or paid agent."; "UBC does not send a link to references."; criteria Engagement and
//    accomplishment, Leadership, Substance, Voice; "We're not looking for a particular experience, and there are no right or wrong answers."
//  - you.ubc.ca/applying-ubc/dates-deadlines/: application opens "Early October 2026"; December 1, 2026 scholarship-consideration
//    deadline; "Deadline to apply for Winter Session (September 2027 to April 2028)." January 15, 2027 "(11:59 p.m. PST)"; high school
//    decisions November 2026 to June 2027 "on a continuous basis"; grade uploads March 1 to March 15, 2027 for applicants outside BC and
//    Ontario; course completion June 30, 2027; acceptance May 1, 2027 or June 1, 2027.
// Left out: the department's "high 80s" recommendation (reads as a target), outcome lists and employer names, scholarship amounts,
// any time conversion of UBC's "PST" label.
// Our own material, labelled on the page: the missing_groups() function with four example tests written first (Python 3.13 prints
// "all four examples pass"), the two-stage path table, the Grade 11 and 12 plan for BC students, the ladder.
// Lesson family: examples first (write the tests, then the function).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const GROUPS_PY = `# UBC Science, BC applicants: which listed course groups does a plan miss? (ours)
# Groups copied from UBC's requirements tool (Vancouver, Science, British Columbia), read 22 October 2026.

GRADE_12 = [
    ("English", {"English Studies 12", "English First Peoples 12"}),
    ("Math", {"Pre-Calculus 12"}),
    ("Science", {"Anatomy and Physiology 12", "Chemistry 12", "Physics 12"}),
]
GRADE_11 = [
    ("Chemistry 11", {"Chemistry 11"}),
    ("Physics 11", {"Physics 11"}),
]

def missing_groups(plan):
    """Names of listed groups with no course from the plan in them."""
    return [name for name, options in GRADE_12 + GRADE_11
            if not any(course in plan for course in options)]

# Examples first: we wrote these four before the function body (ours)
assert missing_groups({"English Studies 12", "Pre-Calculus 12", "Physics 12",
                       "Chemistry 11", "Physics 11"}) == []
assert missing_groups({"English Studies 12", "Pre-Calculus 12",
                       "Chemistry 11", "Physics 11"}) == ["Science"]
assert missing_groups({"English First Peoples 12", "Calculus 12", "Chemistry 12",
                       "Chemistry 11", "Physics 11"}) == ["Math"]
assert missing_groups(set()) == ["English", "Math", "Science", "Chemistry 11", "Physics 11"]
print("all four examples pass")`;

const L = (href, label) => '<a class="ag-inline-link" href="' + href + '" rel="noopener" target="_blank">' + label + '</a>';
const CSADM = L('https://www.cs.ubc.ca/admission', 'UBC Computer Science, admission processes');
const PROG = L('https://you.ubc.ca/programs/computer-science-vancouver-bsc/', 'UBC, Computer Science (BSc), Vancouver');
const REQ = L('https://you.ubc.ca/applying-ubc/requirements/canadian-high-schools/', 'UBC requirements for Canadian high school students');

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'UBC CS', blurb: 'How computer science admission works at UBC Vancouver, from UBC&rsquo;s own pages: no direct entry, the Science requirements by province, the personal profile and the 2027 dates.' },
  slug: 'ubc-computer-science-admission-requirements',
  code: 'ubc',
  accent: '#264761',
  accentRationale: 'UBC CS admission, Canada: a muted harbour slate blue, #264761, allocated for this row; 7.9 RGB units from the nearest site accent (#20485C) and at least 14 from the other Canada accents, contrast 9.19 on the paper #FBF8F2 and 7.90 on the deepest tint',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'UBC computer science admission requirements',
  title: 'UBC Computer Science Admission Requirements, 2027 Entry',
  description: 'UBC computer science admission from the university pages: why there is no direct entry, Science requirements for BC, Ontario and Alberta, the profile, 2027 dates.',
  ogDescription: 'At UBC Vancouver, students are admitted to a faculty such as Science and apply to computer science after first year. The requirements, personal profile and 2027 dates, read from UBC&rsquo;s own pages on 22 October 2026.',
  twitterDescription: 'UBC computer science: no direct entry, Science requirements by province, profile and dates.',
  pageName: 'UBC Computer Science Admission Requirements',
  webPageDescription: 'A guide for Canadian high school students and parents to computer science admission at the University of British Columbia, Vancouver, built from UBC&rsquo;s admissions and Computer Science department pages, with an original test-first Python example.',
  courseDescription: 'Live online Grade 12 math (Pre-calculus 12, Math 30-1, Advanced Functions) and programming for Canadian students aiming at university computer science, in a batch or one to one. No admission outcome is promised.',
  crumbs: [{ name: 'Canada', href: '/coding-classes-in-canada' }, { name: 'British Columbia', href: '/coding-classes-in-british-columbia' }],
  crumbLabel: 'UBC CS admission',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#route', label: 'No direct entry' },
    { href: '#science', label: 'Science requirements' },
    { href: '#profile', label: 'Personal profile' },
    { href: '#second-year', label: 'After first year' },
    { href: '#dates', label: '2027 dates' }
  ],
  eyebrow: 'University of British Columbia &middot; Vancouver &middot; Read 22 October 2026',
  h1: 'UBC computer science admission requirements',
  lede: 'UBC is unusual among large Canadian universities: a high school student cannot apply straight into computer science. The route runs through a faculty, usually Science, and the computer science specialization comes after first year, with its own competition for seats. This page follows that route from UBC&rsquo;s own pages, read on 22 October 2026: the Science course requirements for students in British Columbia, Ontario and Alberta, the personal profile, the dates for September 2027 entry, and what the Computer Science department says about the second step. UBC revises these pages, so check each one when your teen applies. We teach the skills; we never forecast a decision.',
  secondaryCta: { href: '#science', label: 'See the Science requirements' },
  wa: 'Hello Modern Age Coders, my teen is interested in computer science at UBC and wants help with Grade 12 math and programming. Could we book a free first class?',
  heroNote: '10,000+ students taught since 2020 &middot; Pre-calculus 12, Math 30-1 and programming &middot; Live online',
  spec: [
    ['Learners', 'Grades 10 to 12 heading for UBC Science'],
    ['Western math', 'Pre-calculus 12 and Math 30-1'],
    ['Ontario math', 'Advanced Functions'],
    ['Programming', 'Python, Java or JavaScript'],
    ['Class', 'Fifteen to twenty, or one to one'],
    ['BC clock', 'UTC-7 all year'],
    ['Guarantee', 'Skills only, never an outcome'],
    ['Try it', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'UBC has no direct admission into computer science: high school students apply to a faculty such as Science, then apply for the computer science specialization during first year. For British Columbia students, UBC Science listed English Studies 12 or English First Peoples 12, Pre-Calculus 12 and a Grade 12 science, plus Chemistry 11 and Physics 11. Modern Age Coders covers the Pre-calculus 12 and Math 30-1 work in Western Canada Grade 12 Math, live online, in a batch or one to one.',

  picks: {
    eyebrow: 'Ready for both steps',
    h2: 'Three courses for a student aiming at UBC computer science',
    lede: 'The first step is the Science admission, which rests on Grade 12 math. The second is first-year performance, which rests on real problem solving. These courses cover both.',
    items: [
      { course: 'western-canada-grade-12-math-pre-calculus-12-math-30-1-course', code: 'UBC / 01', title: 'Western Canada Grade 12 Math', note: 'Pre-calculus 12 and Math 30-1, the courses UBC Science names for British Columbia and Alberta students.' },
      { course: 'ccc-junior-and-senior-preparation-course', code: 'UBC / 02', title: 'CCC Junior and Senior preparation', note: 'Algorithm problems under time pressure, written by our teachers, for students who want to think harder than the school course asks.' },
      { course: 'ontario-grade-12-university-math-mhf4u-mcv4u-course', code: 'UBC / 03', title: 'Ontario Grade 12 University Math', note: 'For Ontario students applying west: Advanced Functions is on UBC Science&rsquo;s Ontario list.' }
    ]
  },

  sections: [
    {
      id: 'route', tint: 'tint', eyebrow: 'How the route works',
      h2: 'There is no direct admission to computer science at UBC',
      lede: 'The Computer Science department says so on its admissions page: &ldquo;there is no direct admission into the Computer Science program, but rather, you need to apply to enter one of the three faculties that offer Computer Science specializations: Science, Arts, or Commerce.&rdquo;',
      body: [
        { kind: 'table', caption: 'The two-stage route for a high school student, from UBC&rsquo;s pages (read 22 October 2026; the arrangement into stages is ours)', head: ['Stage', 'What happens', 'Whose rules'], rows: [
          ['1. High school application', 'Apply to UBC and choose a degree such as the Bachelor of Science; meet the Science requirements for your province and write the personal profile', 'UBC Undergraduate Admissions'],
          ['2. First year', 'Study as a first-year Science student, taking courses toward eligibility for a specialization', 'The Faculty of Science'],
          ['3. Specialization application', 'Apply for the computer science specialization through the Faculty of Science Coordinated Admissions Process', 'The Faculty of Science, with the Department of Computer Science'],
          ['4. Outcome', 'If successful, the Faculty of Science notifies the student; if not, the student may try again the following year', 'The Faculty of Science']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the structure matters for a Grade 12 student',
          left: [
            'An offer from UBC Science is an offer to the faculty, not a place in computer science. The department&rsquo;s first-year procedure page is direct about the second step: it &ldquo;may not have enough seats to accommodate everyone, and you may need to select a non-CPSC specialization.&rdquo; CPSC is UBC&rsquo;s course code for computer science.',
            'That changes how to prepare. Grade 12 marks open the faculty door. What happens in first-year courses decides the specialization, which means arriving at university already able to study mathematics and programming well.'
          ],
          rightH3: 'Arts and Commerce routes',
          right: [
            'The department names Arts and Commerce as the other faculties with computer science specializations. This page follows the Science route, because the Bachelor of Science in Computer Science is the program UBC&rsquo;s admissions site describes for Vancouver, and its high school requirements are the ones we read.',
            'Students curious about the Arts or Commerce combinations should read those faculties&rsquo; own pages. The department also describes a separate process for students moving between faculties.'
          ] },
        { kind: 'source', html: 'Sources: ' + CSADM + ' and the department&rsquo;s procedure page for students with first-year standing in Science, read 22 October 2026. Modern Age Coders has no connection with UBC.' }
      ]
    },
    {
      id: 'science', tint: 'deep', eyebrow: 'Stage 1 requirements',
      h2: 'UBC Science requirements for students in British Columbia, Ontario and Alberta',
      lede: 'UBC&rsquo;s requirements tool shows a list per campus, province and degree. We read Vancouver, Science, for three provinces.',
      body: [
        { kind: 'table', caption: 'UBC Vancouver, Bachelor of Science: degree-specific requirements by province (UBC requirements tool, read 22 October 2026)', head: ['Province', 'Grade 12 requirements', 'Grade 11 requirements'], rows: [
          ['British Columbia', 'English Studies 12 or English First Peoples 12; Pre-Calculus 12; Anatomy and Physiology 12, or Chemistry 12, or Physics 12', 'Chemistry 11; Physics 11'],
          ['Ontario', 'ENG4U (English); MHF4U (Advanced Functions); SBI4U (Biology), SCH4U (Chemistry), or SPH4U (Physics)', 'SCH3U (Chemistry); SPH3U (Physics), which UBC says may be waived with scores of 86% or higher in senior-level Math and Chemistry'],
          ['Alberta', 'English Language Arts 30-1; Math 30-1 or Math 31 (5 credits); Biology 30, Chemistry 30, or Physics 30', 'Chemistry 20; Physics 20, with the same waiver wording as Ontario']
        ] },
        { kind: 'table', mt: true, caption: 'UBC general admission requirements shown for British Columbia applicants (read 22 October 2026)', head: ['General requirement', 'UBC&rsquo;s wording'], rows: [
          ['Graduation', 'Graduation from high school'],
          ['English', 'Minimum of 70% in Grade 11 or Grade 12 English (or their equivalents)'],
          ['Course load', 'At least six academic/non-academic Grade 12 courses (recommended, but not required)'],
          ['What is assessed', 'UBC considers grades in all academic Grade 11 and Grade 12 classes, paying special attention to courses related to the degree'],
          ['Completion', 'All requirements must be complete by June 30 before the September start']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What stands out in the lists',
          left: [
            'For British Columbia students the math requirement is Pre-Calculus 12, and no calculus course appears on the Science list. For Ontario students it is Advanced Functions, MHF4U, rather than Calculus and Vectors. Every province&rsquo;s list adds a Grade 12 science and both Grade 11 chemistry and physics.',
            'That science component surprises families who think of computer science as math plus code. At UBC the entry point is a science degree, so the faculty&rsquo;s general expectations apply.'
          ],
          rightH3: 'Courses UBC calls related',
          right: [
            'The program page lists the subject categories UBC considers particularly relevant for this degree: Language Arts, Mathematics and Computation, and Sciences. With UBC saying it pays special attention to related courses, those categories are the place to put Grade 11 and 12 effort.',
            'The program page also notes that students outside Canada can sometimes use junior-level American courses or IGCSE and O Level courses as Grade 11 equivalents. Canadian students follow their province&rsquo;s list above.'
          ] },
        { kind: 'source', html: 'Sources: ' + REQ + ' (requirements tool: Vancouver, Science; British Columbia, Ontario, Alberta) and ' + PROG + ', read 22 October 2026. Other provinces are available in the same tool.' }
      ]
    },
    {
      id: 'tests', tint: 'tint', eyebrow: 'A worked example, ours',
      h2: 'Writing the examples first: a test-driven check of the BC list',
      lede: 'UBC&rsquo;s list mixes two kinds of line. Some say one of several courses; some name a single course. A good way to make sure a program reads such a list correctly is to write the examples before the code. That habit, called test-driven development, is worth learning before first year. The plans below are invented, and the function only matches course names with the list as published.',
      body: [
        { kind: 'ol', items: [
          '<b>Write down what should happen before writing how.</b> A full plan should miss nothing; a plan with no Grade 12 science should miss exactly the science group.',
          '<b>Include a case that tests reading literally.</b> The Science list names Pre-Calculus 12. A plan with Calculus 12 but no Pre-Calculus 12 should report the math group as missing, because the function checks the list, not what a counsellor might accept.',
          '<b>Include the empty case.</b> A plan with nothing in it should report every group, in order.',
          '<b>Only now write the function.</b> For each group, check whether any course in the plan appears among its options; keep the names of the groups where none does.',
          '<b>Run the examples.</b> If an assertion fails, either the code or the example is wrong. Decide which on purpose, never by quietly editing the test.',
          '<b>Keep the examples with the code.</b> When UBC changes its list, update the groups, rerun, and see at once which examples change.'
        ] },
        { kind: 'code', label: 'Python &middot; examples first, then missing_groups (ours)', lang: 'python', code: GROUPS_PY, note: 'Output: all four examples pass. Python stops at the first failing assert, so a silent run up to that print line is the proof. The course groups are UBC&rsquo;s; the plans and the function are ours.' },
        { kind: 'table', mt: true, caption: 'The four examples and what each one proves (ours)', head: ['Example plan', 'Expected result', 'What it proves'], rows: [
          ['English Studies 12, Pre-Calculus 12, Physics 12, Chemistry 11, Physics 11', 'Nothing missing', 'A one-of group is satisfied by any one of its members'],
          ['The same, without a Grade 12 science', 'Science', 'A missing one-of group is found, and only that group'],
          ['English First Peoples 12, Calculus 12, Chemistry 12, Chemistry 11, Physics 11', 'Math', 'The list is read literally: Calculus 12 is not Pre-Calculus 12'],
          ['Empty', 'All five groups, in list order', 'The function reports in a stable, readable order']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why examples first',
          left: [
            'Writing the examples first forces a decision about meaning before any code exists. The third example is the clearest case: someone has to decide what a plan with calculus but no pre-calculus should produce. Deciding it in a test, out loud, is better than discovering it later as a bug.',
            'UBC&rsquo;s sample first-year courses on the program page include Software Construction, described as covering &ldquo;debugging, and testing&rdquo; among other topics. Students who already test their own code meet that course on familiar ground.'
          ],
          rightH3: 'The limit of the example',
          right: [
            'The function does not know marks, the personal profile, the general requirements or the second-year specialization. A result of nothing missing means only that the course names match the Science list we copied on 22 October 2026.',
            'Treat it as practice in careful reading and careful code. The authority remains UBC&rsquo;s own requirements tool.'
          ] }
      ]
    },
    {
      id: 'profile', tint: 'deep', eyebrow: 'The personal profile',
      h2: 'The UBC personal profile, from UBC&rsquo;s own page',
      lede: 'Most UBC applicants from high school write a personal profile as part of the online application. UBC&rsquo;s page explains who must write one, how long the answers are, who the references are and how the profile is assessed.',
      body: [
        { kind: 'table', caption: 'Personal profile facts from UBC&rsquo;s page (read 22 October 2026)', head: ['Question', 'What UBC says'], rows: [
          ['Who writes one?', 'High school students applying to any degree on the Okanagan or Vancouver campuses, with three named exceptions (Design in Architecture, Landscape Architecture, and Urbanism; Dental Hygiene; Music)'],
          ['How long?', 'Each question needs a short essay response of 500 to 2,100 characters, which UBC puts at roughly 50 to 500 words; the limit is in characters, and longer answers are cut off'],
          ['What kinds of questions?', 'Who you are; up to five activities or accomplishments in areas such as clubs, family or community responsibilities, arts, work, athletics, volunteering and service; more on one or two of them; and optional additional information'],
          ['References', 'Two people who know the student well; for current high school students one must be a school official; &ldquo;Neither referee should be a friend, family member, or paid agent.&rdquo;'],
          ['How references are contacted', '&ldquo;UBC does not send a link to references.&rdquo; UBC contacts them directly after offers of admission have gone out'],
          ['How it is assessed', 'Trained readers assess it against four criteria: Engagement and accomplishment, Leadership, Substance and Voice']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'UBC&rsquo;s own advice',
          left: [
            'The page gives three tips: take time to reflect, be specific, and &ldquo;Be true to who you are.&rdquo; It also says &ldquo;We&rsquo;re not looking for a particular experience, and there are no right or wrong answers.&rdquo; Any experience, the page says, from winning an international award to taking care of a younger sibling, can teach something.',
            'Under Voice, UBC asks whether a profile does &ldquo;authentically reflect your own words&rdquo;. That is the standard every applicant should hold their writing to, and it is why the writing has to be the student&rsquo;s own.'
          ],
          rightH3: 'Where we stand',
          right: [
            'We do not write, outline, edit or review personal profiles or any other application text, and a teacher of ours would not be a suitable referee for an application either: UBC rules out a paid agent as a referee. Our role ends at the teaching.',
            'What the teaching can give a student is material that is genuinely theirs: a program they built and debugged, a contest problem they finally cracked, a skill they can demonstrate. Whether and how to write about it is up to them.'
          ] },
        { kind: 'source', html: 'Source: ' + L('https://you.ubc.ca/applying-ubc/how-to-apply/personal-profile/', 'UBC, Write your Personal Profile') + ', read 22 October 2026. UBC prints the length range with a dash; we write it out.' }
      ]
    },
    {
      id: 'second-year', tint: 'tint', eyebrow: 'Stage 2',
      h2: 'Applying to computer science after first year in Science',
      lede: 'This is the step that decides whether a UBC Science student studies computer science. The department&rsquo;s pages describe it in three steps and are frank about competition.',
      body: [
        { kind: 'table', caption: 'The specialization application for students with first-year standing in Science, from the department&rsquo;s page (read 22 October 2026)', head: ['Step', 'What the department says'], rows: [
          ['Step 1', 'Confirm eligibility and requirements for choosing a specialization, following the steps the Faculty of Science sets out'],
          ['Step 2', 'Review the department&rsquo;s information on what average is needed for the second-year specialization application'],
          ['Step 3', 'Apply for the CPSC specialization using the Faculty of Science Coordinated Admissions Process'],
          ['Seats', 'The department may not have enough seats for everyone, and some students may need to choose a non-CPSC specialization'],
          ['If unsuccessful', 'Students can try again the following year, and can still try to take computer science courses while progressing in their current major']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The department on averages',
          left: [
            'On its how-to-apply page, in the context of the second-year specialization, the department writes: &ldquo;Historically, we have required an average in the low 80&rsquo;s. But every year is different!&rdquo; It names course availability, number of seats and number of applicants among the factors.',
            'That figure is about university first-year results for students already in UBC Science. It is not a high school admission average, and we do not translate it into one. It does show that first-year performance, not Grade 12 marks, decides the specialization.'
          ],
          rightH3: 'What that means for preparation',
          right: [
            'A student who arrives at UBC having only just met Pre-Calculus 12 faces first-year math and computer science at the same time as everyone else, with the specialization riding on the result. A student who arrives fluent in algebra, functions and basic programming has room to adjust to university.',
            'This is the honest case for preparing deeply in Grades 11 and 12: not to meet a cut-off, but to be ready for a year that counts twice.'
          ] },
        { kind: 'source', html: 'Sources: ' + CSADM + '; ' + L('https://www.cs.ubc.ca/undergrads/how-apply/application-procedure-those-1st-year-standing-faculty-science', 'Application procedure for those with 1st year standing in the Faculty of Science') + '; ' + L('https://www.cs.ubc.ca/students/undergrad/prospective/how-apply', 'UBC Computer Science, how to apply') + ', read 22 October 2026.' }
      ]
    },
    {
      id: 'program', tint: 'deep', eyebrow: 'The degree',
      h2: 'What the Computer Science BSc at UBC Vancouver contains',
      lede: 'UBC&rsquo;s program page describes the degree a successful student eventually joins.',
      body: [
        { kind: 'table', caption: 'Computer Science (BSc), Vancouver, from UBC&rsquo;s program page (read 22 October 2026)', head: ['Item', 'What the page says'], rows: [
          ['Faculty and degree', 'Faculty of Science; Bachelor of Science'],
          ['Length', '4 years'],
          ['Honours', 'Available, with additional requirements beyond the Major'],
          ['Co-op', 'Available as an optional program alternating study and paid work terms'],
          ['Options', 'Software Engineering, or combined honours with sciences, mathematics, or statistics'],
          ['New in 2026', 'Computer Science majors can now take the Artificial Intelligence (AI) Option'],
          ['Sample courses', 'Computation, Programs, and Programming; Software Construction; Intermediate Algorithm Design and Analysis; Introduction to Artificial Intelligence']
        ] },
        { kind: 'p', mt: true, html: 'The sample course descriptions make the preparation point concrete. The first introduces &ldquo;Fundamental program and computation structures&rdquo; and introductory programming. The algorithms course studies the design and analysis of algorithms, including the &ldquo;choice of data structures&rdquo;. Neither is a course a student can coast through on Grade 12 habits, which is why early depth in math and programming pays off. Our <a class="ag-inline-link" href="/ai-and-machine-learning-classes-in-canada">AI and machine learning classes for Canadian students</a> give a first look at the ideas behind the new AI Option.' }
      ]
    },
    {
      id: 'dates', tint: 'tint', eyebrow: 'September 2027 entry',
      h2: 'UBC dates for high school applicants',
      lede: 'UBC&rsquo;s dates page covers the whole cycle. These are the lines that apply to a Canadian high school student applying for September 2027.',
      body: [
        { kind: 'table', caption: 'From UBC Dates and deadlines (read 22 October 2026)', head: ['Date', 'What happens'], rows: [
          ['Early October 2026', 'Online application opens for Winter Session (September 2027 to April 2028)'],
          ['December 1, 2026', 'Canadian citizens and permanent residents: deadline to apply if you wish to be considered for the Presidential Scholars Awards, UBC Centennial Scholars Entrance Awards or the Beyond Tomorrow Scholars Award'],
          ['January 15, 2027 (UBC prints 11:59 p.m. PST)', 'Deadline to apply for Winter Session'],
          ['November 2026 to June 2027', 'Admissions decisions for high school applicants, made on a continuous basis'],
          ['March 1 to March 15, 2027', 'Canadian high school applicants outside BC and Ontario upload a spring transcript of grades'],
          ['May 1, 2027 or June 1, 2027', 'Deadline for most students to accept the offer and pay the deposit, as stated in the letter of admission'],
          ['June 30, 2027', 'Canadian high school applicants: deadline to complete all high school courses to meet the conditions of the offer']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Distributed learning courses',
          left: [
            'Students taking online or distance courses to meet degree requirements should arrange for interim grades, at 50 per cent complete, to reach UBC by March 15, UBC&rsquo;s requirements page says, and the courses must be finished by June 30.',
            'That matters for any student taking a required course, such as Pre-Calculus 12, through a distributed learning provider. Plan the timing early.'
          ],
          rightH3: 'Clocks for live classes',
          right: [
            'British Columbia now keeps UTC-7 all year, after its last clock change on 8 March 2026, so BC families no longer adjust in November or March. Alberta and Saskatchewan are UTC-6 all year. Our teachers work on India time, UTC+5:30, so India is 12 hours 30 minutes ahead of British Columbia year round.',
            'UBC prints its application deadline with the label PST. We quote it as printed and do not convert it; check the time on UBC&rsquo;s page if you are applying at the last minute, which we do not recommend.'
          ] },
        { kind: 'source', html: 'Sources: ' + L('https://you.ubc.ca/applying-ubc/dates-deadlines/', 'UBC Dates and deadlines') + ' and ' + REQ + ', read 22 October 2026. Time-zone offsets from the IANA time zone database (2026e).' }
      ]
    },
    {
      id: 'plan', tint: 'deep', eyebrow: 'A plan, ours',
      h2: 'A Grade 11 and 12 plan for a BC student aiming at UBC computer science',
      lede: 'This plan is ours. It covers the Science list and prepares for the year that decides the specialization. It promises nothing about either decision.',
      body: [
        { kind: 'ol', items: [
          '<b>Grade 11: take Chemistry 11 and Physics 11.</b> Both are on UBC Science&rsquo;s British Columbia list, and leaving either until later squeezes Grade 12.',
          '<b>Grade 11: build algebra and functions properly.</b> Pre-Calculus 12 builds directly on it, and first-year math builds on Pre-Calculus 12.',
          '<b>Grade 11 and 12: write real programs.</b> Python or Java, from a blank file, traced and tested. Arriving at university able to program frees first-year attention for the new ideas.',
          '<b>Grade 12: choose the science deliberately.</b> Anatomy and Physiology 12, Chemistry 12 or Physics 12 each satisfy the list; pick the one you will do well in and learn most from.',
          '<b>Grade 12: consider Calculus 12 if your school offers it.</b> It is not on UBC Science&rsquo;s list, but first-year university math will not wait for you.',
          '<b>Autumn of Grade 12: apply early.</b> The application opens in early October; the scholarship-consideration deadline is December 1, 2026, and the final deadline January 15, 2027.',
          '<b>Autumn of Grade 12: write the personal profile yourself.</b> Use UBC&rsquo;s questions and character limits, and ask your two referees early.',
          '<b>Spring of Grade 12: finish strong.</b> Course completion by June 30, 2027 is a condition of the offer.'
        ] },
        { kind: 'p', mt: true, html: 'Ontario and Alberta students can follow the same shape with their own province&rsquo;s courses from the table above: in Ontario, ENG4U, MHF4U, a Grade 12 science and the Grade 11 chemistry and physics; in Alberta, English Language Arts 30-1, Math 30-1 or Math 31, a 30-level science and Chemistry 20 and Physics 20.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Readiness for a year that counts',
    h2: 'Four stages before first-year Science',
    lede: 'Our stages, built from years of teaching senior high school students in British Columbia and elsewhere who later studied science and computing at university.',
    table: { caption: 'Stages of readiness for first-year Science and computing (ours)', head: ['Stage', 'What you see'], rows: [
      ['1. Coursework', 'Completes assignments correctly with notes open'],
      ['2. Independent', 'Solves a fresh problem in pre-calculus or code without notes'],
      ['3. Self-checking', 'Tests answers and programs before handing them in, and finds their own errors'],
      ['4. University-ready', 'Learns a new topic from a textbook or documentation alone, then explains it']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask your teen to teach you one thing from this week&rsquo;s math. Teaching it back is the quickest readiness test there is.',
      'Stage 3 matters most at UBC, because first-year results decide the specialization, and self-checking students lose far fewer marks.'
    ] },
    right: { h3: 'For students', ps: [
      'Before you look at an answer key, decide how confident you are. Track it. Calibration is a skill.',
      'Write tests for your own programs, as in the example above. It is the habit that separates a student from a programmer.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'A further nine courses for students bound for UBC or another western university',
    lede: 'Every course is live with one regular teacher, as a group class or privately, on British Columbia or Alberta time.',
    bands: [
      { num: 'I', h3: 'Math foundations', sub: 'Grades 9 to 12', courses: [
        { code: 'UBC / MTH / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High school mathematics', blurb: 'Algebra and functions before Pre-calculus 12.' },
        { code: 'UBC / MTH / 02', slug: 'ap-calculus-exam-prep', title: 'AP Calculus', blurb: 'For schools that offer AP calculus.' },
        { code: 'UBC / MTH / 03', slug: 'waterloo-math-contests-gauss-to-euclid-course', title: 'Waterloo math contests', blurb: 'Problem solving beyond the textbook.' }
      ] },
      { num: 'II', h3: 'Programming', sub: 'Teens', courses: [
        { code: 'UBC / PRG / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Write, trace and test real programs.' },
        { code: 'UBC / PRG / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Types, classes and larger programs.' },
        { code: 'UBC / PRG / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Choosing data structures, as first-year algorithms courses ask.' }
      ] },
      { num: 'III', h3: 'Beyond the basics', sub: 'Teens', courses: [
        { code: 'UBC / ADV / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'A first look at the field behind UBC&rsquo;s new AI Option.' },
        { code: 'UBC / ADV / 02', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Hard problems, solved and analysed.' },
        { code: 'UBC / ADV / 03', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub for teens', blurb: 'The tools software courses take for granted.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Live classes on British Columbia and Alberta time',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school in BC or Alberta, set when you join a batch.' },
      { time: 'Weekends', l: 'Weekend mornings on BC time, before sports and shifts.' },
      { time: '1-on-1', l: 'Arranged around unit tests and the application season.' }
    ],
    cells: [
      { h3: 'A teacher who stays', p: 'The same person through the year.' },
      { h3: 'Your province&rsquo;s course', p: 'Pre-calculus 12, Math 30-1 or MHF4U by name.' },
      { h3: 'Depth before speed', p: 'Understanding first, then pace.' },
      { h3: 'Tested code', p: 'Students write examples before functions.' },
      { h3: 'No application writing', p: 'Profiles and essays stay the student&rsquo;s.' },
      { h3: 'Batch or private', p: 'Fifteen to twenty per class, or just your teen.' }
    ]
  },

  projectsH2: 'Student-built projects',
  projectsLede: 'Work our students made themselves and can explain line by line. The <a class="ag-inline-link" href="/student-labs">student labs</a> page shows more.',
  reviewsLede: 'Reviews from families and students, reproduced from Google as written.',

  fees: {
    h2: 'Fees',
    lede: 'The opening class costs nothing. Continuing families pay monthly for eight live classes, with the currency code shown beside the fee, and there is no contract to stop you leaving after any month.',
    free: ['Opening class free', 'Bring current math or code', 'No card details'],
    group: ['Fifteen to twenty in a batch', 'One teacher all year', 'Batch time you choose', 'Paid monthly'],
    one: ['A private teacher', 'Fitted around tests', 'Shaped by their course']
  },

  faq: {
    eyebrow: 'Families ask us',
    h2: 'UBC computer science admission: common questions',
    items: [
      { q: 'Can I apply directly to computer science at UBC?', a: 'No. UBC\'s Computer Science department says there is no direct admission into the Computer Science program. Students apply to a faculty that offers computer science specializations, such as Science, Arts or Commerce, and apply for computer science after first year.' },
      { q: 'What courses does a BC student need for UBC Science?', a: 'On 22 October 2026 UBC listed English Studies 12 or English First Peoples 12, Pre-Calculus 12, and one of Anatomy and Physiology 12, Chemistry 12 or Physics 12, plus Chemistry 11 and Physics 11 in Grade 11. UBC also asks for at least 70 per cent in Grade 11 or Grade 12 English.' },
      { q: 'What does an Ontario student need for UBC Science?', a: 'UBC listed ENG4U, MHF4U and one of SBI4U, SCH4U or SPH4U, plus SCH3U and SPH3U in Grade 11. UBC says the Grade 11 sciences may be waived with scores of 86 per cent or higher in senior-level math and chemistry.' },
      { q: 'Is calculus required for UBC computer science?', a: 'Not at the high school stage, on the lists we read. UBC Science named Pre-Calculus 12 for British Columbia, MHF4U for Ontario and Math 30-1 or Math 31 for Alberta. First-year university courses will still assume strong math.' },
      { q: 'What average do you need to get into UBC computer science?', a: 'UBC\'s admissions pages we read do not publish a high school average for Science. The department says that for the second-year specialization it has historically required an average in the low 80s, and that every year is different. That figure is about first-year university results, and we make no prediction for any student.' },
      { q: 'What is the UBC personal profile?', a: 'A set of short essay questions in the UBC application, required for high school applicants to most degrees. Each answer is 500 to 2,100 characters, and UBC asks for two references. Trained readers assess it for engagement and accomplishment, leadership, substance and voice.' },
      { q: 'Can you write or check my UBC personal profile?', a: 'No. We never write, outline, edit or review application text. UBC also says a referee should not be a paid agent. We teach math and programming, so the work a student describes is genuinely their own.' },
      { q: 'When is the UBC application deadline for September 2027?', a: 'UBC\'s dates page gave January 15, 2027 as the deadline to apply for the Winter Session starting September 2027, and December 1, 2026 for Canadian applicants who want to be considered for certain major entrance awards. Applications opened in early October 2026.' },
      { q: 'What happens if I am not admitted to computer science after first year?', a: 'UBC\'s department says the specialization may not have seats for everyone and some students may need to choose another specialization. It also says students can try again the following year and can still take computer science courses while progressing in their current major.' },
      { q: 'What times are your classes for BC families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. British Columbia now stays on UTC-7 all year, so a class time agreed in BC does not shift in November or March.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for students in British Columbia and the west.',
    items: [
      { href: '/coding-classes-in-british-columbia', label: 'Coding classes in British Columbia', p: 'Live classes for BC students of all ages.' },
      { href: '/coding-classes-in-alberta', label: 'Coding classes in Alberta', p: 'Classes on Alberta time.' },
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'All our pages for Canadian families.' },
      { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada', p: 'Pre-calculus and beyond, taught for understanding.' },
      { href: '/ai-and-machine-learning-classes-in-canada', label: 'AI and machine learning in Canada', p: 'Models built and tested by students.' },
      { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation', p: 'Canada&rsquo;s programming contest, open to students nationwide through their schools.' },
      { href: '/how-to-debug-code', label: 'How to debug code', p: 'A method instead of guesswork.' },
      { href: '/how-to-actually-learn-to-code', label: 'How to actually learn to code', p: 'Practice that builds understanding.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our live classes, explained.' }
    ]
  },

  start: {
    h2: 'Take a free first class',
    lede: 'Say which grade your teen is in, which math course they take and whether they write code yet. The first class picks up from their current unit or project.',
    readFirst: 'Reading first? The <a class="ag-inline-link" href="/courses/western-canada-grade-12-math-pre-calculus-12-math-30-1-course">Pre-calculus 12 and Math 30-1 syllabus</a> lists the units, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a class.',
    note: 'Classes are live on video with teachers in India, a fixed 12 hours 30 minutes ahead of British Columbia, so there is nothing to drive to. WhatsApp is the fastest way to reach us.',
    formNote: 'Booking the free class asks for no card.'
  },

  footer: {
    cols: [
      { h4: 'Western Canada', links: [
        { href: '/courses/western-canada-grade-12-math-pre-calculus-12-math-30-1-course', label: 'Pre-calculus 12 and Math 30-1' },
        { href: '/coding-classes-in-british-columbia', label: 'British Columbia' },
        { href: '/coding-classes-in-alberta', label: 'Alberta' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada' },
        { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation' },
        { href: '/ai-and-machine-learning-classes-in-canada', label: 'AI and machine learning' }
      ] }
    ],
    bottomRight: 'Write the examples, then the function'
  },

  personalityCss: `
.ag-root.ag-ubc .ag-hero h1 { letter-spacing: -0.01em; max-width: 19ch; }
.ag-root.ag-ubc .ag-capsule { border-left-width: 6px; border-radius: 2px; }
.ag-root.ag-ubc .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-ubc .ag-table caption { text-align: left; font-style: normal; font-weight: 600; }
.ag-root.ag-ubc .ag-steps li { margin-bottom: 0.45rem; }
`,

  dossier: {
    curriculumAuthority: 'UBC pages fetched raw 22 October 2026 (you.ubc.ca connected normally with no certificate override): Computer Science department admission processes, first-year Science application procedure and how-to-apply page; Computer Science (BSc) Vancouver program page; requirements tool for Vancouver Science in British Columbia, Ontario and Alberta, with BC general requirements; Canadian high schools requirements page; Write your Personal Profile; Dates and deadlines. Time offsets from facts-geo.md (tzdb 2026e).',
    localProject: 'Our missing_groups() function in Python for UBC Science\'s British Columbia list, with four example tests written before the function (full plan, no Grade 12 science, Calculus 12 without Pre-Calculus 12, empty plan), printing "all four examples pass"; a two-stage route table; a Grade 11 and 12 plan for BC students; a readiness ladder. Lesson family: examples first.',
    requiredMentions: ['missing_groups', 'all four examples pass', 'Coordinated Admissions Process', 'Historically, we have required an average in the low 80', 'paid agent', 'The list is read literally: Calculus 12 is not Pre-Calculus 12','UBC does not send a link to references', 'Intermediate Algorithm Design and Analysis', 'non-CPSC specialization', 'Engagement and accomplishment'],
    sources: [
      { claim: 'No direct admission into Computer Science; faculties that offer it; the specialization route; try again the following year.', url: 'https://www.cs.ubc.ca/admission' },
      { claim: 'The three-step specialization application and the seats warning.', url: 'https://www.cs.ubc.ca/undergrads/how-apply/application-procedure-those-1st-year-standing-faculty-science' },
      { claim: 'The department on historical second-year averages.', url: 'https://www.cs.ubc.ca/students/undergrad/prospective/how-apply' },
      { claim: 'Computer Science (BSc) Vancouver: faculty, length, honours, co-op, options, AI Option, sample courses, related subject categories.', url: 'https://you.ubc.ca/programs/computer-science-vancouver-bsc/' },
      { claim: 'Science requirements by province, BC general requirements, June 30 completion, distributed learning grades.', url: 'https://you.ubc.ca/applying-ubc/requirements/canadian-high-schools/' },
      { claim: 'Personal profile: who writes it, length, questions, references, criteria.', url: 'https://you.ubc.ca/applying-ubc/how-to-apply/personal-profile/' },
      { claim: 'Application, scholarship, decision, acceptance and completion dates for September 2027 entry.', url: 'https://you.ubc.ca/applying-ubc/dates-deadlines/' }
    ],
    rejectedClaims: [
      'The department\'s "low 80\'s" as a high school admission average: stated plainly as a first-year university figure.',
      'The department\'s recommendation to aim for the high 80s: left out, as it reads as a target.',
      'Any prediction of Science admission or specialization admission: none made.',
      'A conversion of UBC\'s "11:59 p.m. PST" label: not made; quoted as printed.',
      'Any offer to write or review personal profiles, or to act as a referee: refused on the page.',
      'Graduate employer names and career outcome lists from the program page: left out.',
      'Requirements for the Arts and Commerce routes: not read, not stated.',
      'Any affiliation with UBC: none, and the page says so.'
    ]
  }
};
