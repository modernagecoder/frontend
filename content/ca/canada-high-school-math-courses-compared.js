'use strict';
// Grade 12 university-preparation math across Canada (ag- reference page; Canada cluster Plan 2, row 63).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Only course names read on a government curriculum page are printed. Equivalence between provinces is stated as
// approximate, and universities set their own requirements (both said on the page).
// Sources, read raw on 22 October 2026 (copies in keyword-research-2026-09/ca/src/ and
// ca/src-pilots/canada-high-school-math-courses-compared/):
//  - Ontario DCP API (ontario/api-senior-math-courses.json): MCR3U "Functions" (2007); MHF4U "Advanced Functions"; MCV4U
//    "Calculus and Vectors"; MDM4U "Mathematics of Data Management"; MAP4C "Foundations for College Mathematics"; MEL4E
//    "Mathematics for Work and Everyday Life"; MHF4U prerequisite "Functions, Grade 11, University Preparation, or
//    Mathematics for College Technology, Grade 12, College Preparation"; "The new Advanced Functions course (MHF4U) must be
//    taken prior to or concurrently with Calculus and Vectors (MCV4U)"; MCR3U prerequisite "Principles of Mathematics,
//    Grade 10, Academic"; MHF4U description "investigate the properties of polynomial, rational, logarithmic, and
//    trigonometric functions"; MCV4U description "broaden their understanding of rates of change to include the
//    derivatives of polynomial, sinusoidal, exponential, rational, and radical functions" and vectors, "lines and planes in
//    threedimensional space" (the missing hyphen is in the source); MDM4U "Students planning to enter university programs
//    in business, the social sciences, and the humanities will find this course of particular interest."
//  - uwaterloo.ca CS admission (admissions/uw-computer-science.txt): "Six Grade 12 U and/or M courses including" Advanced
//    Functions, Calculus and Vectors, "Any Grade 12 U English", "One other 4U course"; "Not studying in Ontario?" with a
//    link to search admission requirements.
//  - future.utoronto.ca CS (admissions/uoft-computer-science.txt): "Ontario Secondary School Diploma (OSSD) with six
//    subjects at the 4U/M level, including English"; St. George lists MCV4U; Mississauga lists MHF4U and MCV4U, MDM4U
//    "Recommended"; Scarborough lists MCV4U and MHF4U; the page offers "Change School System" with every province and
//    territory listed.
//  - curriculum.gov.bc.ca/curriculum/mathematics (bc/math-home.txt): Foundations of Mathematics and Pre-calculus 10,
//    Workplace Mathematics 10, Pre-calculus 11, Foundations of Mathematics 11, Pre-calculus 12, Calculus 12, Foundations of
//    Mathematics 12, Statistics 12, Computer Science 11 and 12. Calculus 12 (bc/math-calculus-12.txt): "Differentiation and
//    integration are defined using limits."; "The fundamental theorem of calculus describes the relationship between
//    integrals and antiderivatives."; content item "parent functions from Pre-Calculus 12". A second visit to the BC host
//    for the Pre-calculus 12 page timed out, so no Pre-calculus 12 content is quoted.
//  - alberta.ca/diploma-exams-overview: the diploma list includes "Mathematics 30-1" and "Mathematics 30-2" (en dash in the
//    source, written with a hyphen here); "The weighting of diploma exams returned to 30% effective September 1, 2023.";
//    "70% of the final mark comes from course work. The remaining 30% comes from the diploma exam." Math 31 and Math 10C /
//    20-1: UNVERIFIED (no primary page could be read: LearnAlberta is JavaScript only, open.alberta.ca and ualberta.ca 403).
//  - curriculum.gov.sk.ca: Foundations of Mathematics and Pre-calculus 10, Foundations of Mathematics 20 and 30,
//    Pre-Calculus 20 and 30, Workplace and Apprenticeship Mathematics 10, 20 and 30, Calculus 30 (link labels on the
//    curriculum site, sk-curriculum-home.html).
//  - edu.gov.mb.ca/k12/framework/english/math/math_gr12.html: Grade 12 Essential Mathematics, Grade 12 Applied
//    Mathematics, Grade 12 Intro to Calculus and Advanced Mathematics, Grade 12 Advanced Mathematics I and II, Grade 12
//    Pre-Calculus Mathematics, Grade 12 Introduction to Calculus.
//  - Quebec PFEQ Cycle Two (quebec/qep-math-cycle2.txt): "They are the Cultural, Social and Technical option, the
//    Technical and Scientific option and the Science option."; "All of these options allow students to enroll in a
//    preuniversity program."; Science option "perform more complex algebraic operations". 200.B0 Science program
//    (src-pilots/canada-high-school-math-courses-compared/200-B0.txt): special conditions "Secondary V Mathematics: Technical and Scientific option
//    or Science option" with Secondary V Chemistry and Physics. Québec.ca final results: "To successfully complete a subject
//    and earn its related credits, the student must obtain a final result of 60% or higher."
//  - NWT ECE curriculum renewal: "Determining the minimum Grade 12 graduation requirements for students using BC courses.
//    Completed"
//  - NOT verified and not printed: Atlantic provinces' Grade 12 math course names (NB department host 403, NS curriculum
//    host unreachable, PEI bot check, NL server errors), Yukon, Nunavut.
// Our own material, labelled on the page: the topic map built from the official descriptions, the doubling worked example
// (t = 6 x log 10 / log 2 = 19.93 hours; rate 10 x ln 2 / 6 = 1.155 times the starting amount per hour, both checked in
// Python on 22 October 2026, numerical derivative 1.155), the five-step plan for moving between provinces, the ladder.
// Lesson family: the same idea under different course names (reading a course by its content, not its code).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const DBL = `# Our check for the worked example: a starter that doubles every 6 hours
import math

def amount(t, start=1.0):
    return start * 2 ** (t / 6)

t10 = 6 * math.log(10) / math.log(2)        # when does it reach 10 times?
print("reaches 10x at t =", round(t10, 2), "hours")
print("check: amount(t10) =", round(amount(t10), 6))

# derivative from the rule: A'(t) = start * ln 2 / 6 * 2**(t/6)
rate = 10 * math.log(2) / 6
print("growth rate at that moment =", round(rate, 3))

# numerical check with a small step h
h = 1e-6
approx = (amount(t10 + h) - amount(t10 - h)) / (2 * h)
print("numerical rate =", round(approx, 3))`;

const DBL_OUT = `reaches 10x at t = 19.93 hours
check: amount(t10) = 10.0
growth rate at that moment = 1.155
numerical rate = 1.155`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'GRADE 12 MATH', blurb: 'MHF4U, Pre-calculus 12, Math 30-1, Pre-Calculus 30 and Quebec\'s Secondary V options side by side, named as each ministry names them, with what universities actually ask for.' },
  slug: 'canada-high-school-math-courses-compared',
  code: 'chsm',
  accent: '#66182B',
  accentRationale: 'Grade 12 math compared, Canada: a deep claret #66182B, the allocated Canada accent for this row, at least 6 RGB units from every site accent and 14 from the other Canada accents, contrast 11.45 on the paper #FBF8F2 (10.77 and 9.85 on the two tints)',
  pageType: 'market',
  market: CA,
  courseCodePage: false,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Grade 12 math by province',
  title: 'Grade 12 Math by Province: MHF4U, Math 30-1 and More',
  description: 'MHF4U and MCV4U, Pre-calculus 12, Math 30-1, Pre-Calculus 30 and Quebec Secondary V math compared from ministry pages, with what universities ask for.',
  ogDescription: 'Is Pre-calculus 12 the same as Math 30-1 or MHF4U? Close, not identical. The Grade 12 university-prep math in each province, named from the ministries\' own pages.',
  twitterDescription: 'Grade 12 university-prep math across Canada, side by side, from the ministries\' pages.',
  pageName: 'Canada Grade 12 Math Courses Compared',
  webPageDescription: 'A comparison of Grade 12 university-preparation math courses across Canadian provinces, from ministry curriculum pages and university admission pages read on 22 October 2026, with the limits of equivalence stated.',
  courseDescription: 'Live online help with Grade 12 university-preparation math for Canadian students, taught alongside the school course, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Canada', href: '/coding-classes-in-canada' }],
  crumbLabel: 'Grade 12 math by province',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#glance', label: 'Side by side' },
    { href: '#ontario', label: 'Ontario' },
    { href: '#west', label: 'Western provinces' },
    { href: '#quebec', label: 'Quebec' },
    { href: '#example', label: 'Worked example' }
  ],
  eyebrow: 'Canada &middot; Grade 12 math &middot; University preparation',
  h1: 'Grade 12 math by province, compared',
  lede: 'A student in Toronto takes MHF4U, one in Vancouver takes Pre-calculus 12, one in Calgary takes Mathematics 30-1, and one in Montreal finishes secondary school a year earlier with Secondary V math in one of three options. Parents moving between provinces, and students applying to a university in another one, keep asking whether these are "the same course". They overlap a great deal and they are not identical. This page sets the courses side by side using the names each ministry prints, shows what two Ontario universities ask for, and marks plainly the courses we could not verify. We teach alongside these school courses; we do not grant credits, in Ontario or in any other province.',
  secondaryCta: { href: '#glance', label: 'See the comparison' },
  wa: 'Hello Modern Age Coders, my teen in Canada is taking Grade 12 university-prep math and would like help alongside the school course. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; course names copied from ministry pages, never from memory',
  spec: [
    ['Ontario', 'MHF4U, MCV4U, MDM4U'],
    ['British Columbia', 'Pre-calculus 12, Calculus 12'],
    ['Alberta', 'Mathematics 30-1, 30-2'],
    ['Saskatchewan', 'Pre-Calculus 30, Calculus 30'],
    ['Manitoba', 'Grade 12 Pre-Calculus Mathematics'],
    ['Quebec', 'Secondary V: CST, TS, Science'],
    ['Credits', 'From the school, never from us'],
    ['Classes', 'Weekdays or weekends, flexible']
  ],
  capsuleQ: 'In short',
  capsule: 'Grade 12 university-prep math is named differently in each province: MHF4U and MCV4U in Ontario, Pre-calculus 12 in BC, Mathematics 30-1 in Alberta, Pre-Calculus 30 in Saskatchewan. They overlap without being identical; each university sets its own requirements. Modern Age Coders teaches them live online, in a batch or one to one, through its Ontario Grade 12 University Math course.',

  picks: {
    eyebrow: 'Study with a teacher',
    h2: 'Three courses for Grade 12 math in Canada',
    lede: 'Two are built around specific provincial courses. The third rebuilds the algebra and functions that every one of them assumes.',
    items: [
      { course: 'ontario-grade-12-university-math-mhf4u-mcv4u-course', code: 'CHSM / 01', title: 'Ontario Grade 12 University Math', note: 'Ages 16 to 18. Advanced Functions and Calculus and Vectors, taught alongside the school course. We do not grant Ontario credits.' },
      { course: 'western-canada-grade-12-math-pre-calculus-12-math-30-1-course', code: 'CHSM / 02', title: 'Western Canada Grade 12 Math', note: 'Ages 16 to 18. BC Pre-calculus 12 and Alberta Math 30-1, taught alongside school. No credits are granted by us.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'CHSM / 03', title: 'High school mathematics', note: 'Grades 9 to 12. Algebra to calculus, for a student whose Grade 12 trouble began earlier.' }
    ]
  },

  sections: [
    {
      id: 'glance', tint: 'tint', eyebrow: 'Side by side',
      h2: 'The university-preparation math courses, province by province',
      lede: 'Course names below are exactly as each ministry\'s curriculum page prints them, read on 22 October 2026. The "calculus" column lists a separate calculus course where the province publishes one. Grade levels are as the course names give them.',
      body: [
        { kind: 'table', caption: 'Senior university-preparation math by province, from ministry curriculum pages (read 22 October 2026)', head: ['Province or territory', 'Main university-prep course', 'Separate calculus course', 'Other senior courses named', 'Source status'], rows: [
          ['Ontario', 'MHF4U Advanced Functions (Grade 12)', 'MCV4U Calculus and Vectors', 'MDM4U Mathematics of Data Management; MAP4C; MEL4E', 'Verified'],
          ['British Columbia', 'Pre-calculus 12', 'Calculus 12', 'Foundations of Mathematics 12; Statistics 12', 'Verified'],
          ['Alberta', 'Mathematics 30-1', 'Not verified', 'Mathematics 30-2', 'Partly verified'],
          ['Saskatchewan', 'Pre-Calculus 30', 'Calculus 30', 'Foundations of Mathematics 30; Workplace and Apprenticeship Mathematics 30', 'Verified'],
          ['Manitoba', 'Grade 12 Pre-Calculus Mathematics', 'Grade 12 Introduction to Calculus', 'Grade 12 Applied Mathematics; Grade 12 Essential Mathematics; Grade 12 Advanced Mathematics I and II', 'Verified'],
          ['Quebec', 'Secondary V mathematics, in the Technical and Scientific option or the Science option', 'Taken later, at CEGEP', 'Secondary V Cultural, Social and Technical option', 'Verified'],
          ['Northwest Territories', 'Moving to BC courses', 'As BC', 'As BC', 'Verified (adoption only)'],
          ['NB, NS, PEI, NL, Yukon, Nunavut', 'Not verified', 'Not verified', 'Not verified', 'Not verified']
        ] },
        { kind: 'p', mt: true, html: '<b>Equivalence is approximate.</b> Two courses with similar names can differ in topics, depth and how they are examined. Alberta, for example, sets a diploma exam that counts for part of the final mark, and Quebec ends secondary school at Secondary V, with a college step between school and university. Universities decide for themselves which out-of-province course meets each requirement, program by program, and both Ontario universities we read publish separate requirements for students from other systems.' },
        { kind: 'source', html: 'Sources: Ontario Ministry of Education curriculum service; <a class="ag-inline-link" href="https://curriculum.gov.bc.ca/curriculum/mathematics" rel="noopener" target="_blank">BC Mathematics curriculum</a>; <a class="ag-inline-link" href="https://www.alberta.ca/diploma-exams-overview" rel="noopener" target="_blank">Alberta diploma exams overview</a>; <a class="ag-inline-link" href="https://curriculum.gov.sk.ca/" rel="noopener" target="_blank">Saskatchewan curriculum</a>; <a class="ag-inline-link" href="https://www.edu.gov.mb.ca/k12/framework/english/math/math_gr12.html" rel="noopener" target="_blank">Manitoba Grade 12 mathematics</a>; the Québec Education Program mathematics document for Secondary Cycle Two; <a class="ag-inline-link" href="https://www.ece.gov.nt.ca/en/services/jk-12-school-curriculum/jk-12-curriculum-renewal" rel="noopener" target="_blank">NWT curriculum renewal</a>. All read 22 October 2026. Modern Age Coders is not connected with any ministry or university.' }
      ]
    },
    {
      id: 'ontario', tint: 'deep', eyebrow: 'Ontario',
      h2: 'Ontario: the MCR3U, MHF4U, MCV4U chain',
      lede: 'Ontario\'s senior math courses go by five-character codes such as MHF4U. The university route runs through three of them in order, and the ministry\'s own prerequisite lines fix that order.',
      body: [
        { kind: 'table', caption: 'Ontario\'s university-preparation math chain, from the ministry\'s course descriptions (read 22 October 2026)', head: ['Course', 'Title', 'What the ministry says it covers or requires'], rows: [
          ['MCR3U (Grade 11)', 'Functions', 'Prerequisite: "Principles of Mathematics, Grade 10, Academic"'],
          ['MHF4U (Grade 12)', 'Advanced Functions', 'Students "investigate the properties of polynomial, rational, logarithmic, and trigonometric functions". Prerequisite: "Functions, Grade 11, University Preparation, or Mathematics for College Technology, Grade 12, College Preparation"'],
          ['MCV4U (Grade 12)', 'Calculus and Vectors', 'Rates of change extended "to include the derivatives of polynomial, sinusoidal, exponential, rational, and radical functions", plus vectors, lines and planes in three dimensions. "The new Advanced Functions course (MHF4U) must be taken prior to or concurrently with Calculus and Vectors (MCV4U)"'],
          ['MDM4U (Grade 12)', 'Mathematics of Data Management', '"Students planning to enter university programs in business, the social sciences, and the humanities will find this course of particular interest."']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What two universities ask Ontario applicants for',
          left: [
            'The University of Waterloo\'s Computer Science page asks Ontario students for "Six Grade 12 U and/or M courses including" Advanced Functions and Calculus and Vectors, "Any Grade 12 U English" and "One other 4U course".',
            'The University of Toronto starts from an "Ontario Secondary School Diploma (OSSD) with six subjects at the 4U/M level, including English", then varies by campus: its St. George Computer Science listing names MCV4U, Mississauga names MHF4U and MCV4U with MDM4U "Recommended", and Scarborough names MCV4U and MHF4U.'
          ],
          rightH3: 'Why this matters outside Ontario',
          right: [
            'Neither page assumes every applicant is from Ontario. Waterloo\'s asks "Not studying in Ontario?" and points to a search of its requirements; Toronto\'s offers a "Change School System" choice listing every province and territory.',
            'That is the practical answer to "is my course equivalent?": the university has already decided, program by program, and publishes it under your own province\'s name. Read that page rather than a comparison chart, including this one.'
          ] },
        { kind: 'source', html: 'Sources: Ontario Ministry of Education curriculum service, senior mathematics course descriptions; <a class="ag-inline-link" href="https://uwaterloo.ca/future-students/programs/computer-science" rel="noopener" target="_blank">University of Waterloo, Computer Science</a>; <a class="ag-inline-link" href="https://future.utoronto.ca/undergraduate-programs/computer-science/" rel="noopener" target="_blank">University of Toronto, Computer Science</a>; all read 22 October 2026. Requirements change each admission cycle, so check the university\'s page in the autumn you apply.' }
      ]
    },
    {
      id: 'west', tint: 'tint', eyebrow: 'BC, Alberta, Saskatchewan, Manitoba',
      h2: 'Western Canada: pre-calculus first, calculus as its own course',
      lede: 'The four western provinces share a broad shape: a pre-calculus course in the final year, often a separate calculus course beside or after it, and parallel courses for students headed elsewhere. The names and the exams differ.',
      body: [
        { kind: 'three', cells: [
          { h3: 'British Columbia', p: 'BC\'s Mathematics curriculum lists Pre-calculus 11 and 12, Calculus 12, Foundations of Mathematics 11 and 12, Workplace Mathematics 10 and Statistics 12. Calculus 12 lists "parent functions from Pre-Calculus 12" in its content, and its big ideas include "Differentiation and integration are defined using limits." and "The fundamental theorem of calculus describes the relationship between integrals and antiderivatives."' },
          { h3: 'Alberta', p: 'Alberta\'s diploma exam list includes Mathematics 30-1 and Mathematics 30-2. The province says "70% of the final mark comes from course work. The remaining 30% comes from the diploma exam.", a weighting that "returned to 30% effective September 1, 2023". We could not read a primary page for Mathematics 31 or the Grade 10 and 11 sequence, so we leave them out.' },
          { h3: 'Saskatchewan and Manitoba', p: 'Saskatchewan\'s curriculum site lists Pre-Calculus 20 and 30, Calculus 30, Foundations of Mathematics 20 and 30, and Workplace and Apprenticeship Mathematics 10 to 30. Manitoba\'s Grade 12 page lists Pre-Calculus Mathematics, Introduction to Calculus, Applied Mathematics, Essential Mathematics and Advanced Mathematics I and II.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The Alberta exam is part of the mark',
          left: [
            'Alberta\'s government publishes a fixed exam share of the Grade 12 math mark: 30 percent from the diploma exam, 70 from course work. A student moving into Alberta for Grade 12 should know that a single sitting carries almost a third of the result.',
            'That changes how to prepare. Course work rewards steady effort; a diploma exam rewards being able to do it alone, on time, without notes. We practise both, separately.'
          ],
          rightH3: 'The Northwest Territories',
          right: [
            'The NWT is adopting BC\'s curriculum. Its education department lists, as completed, "Determining the minimum Grade 12 graduation requirements for students using BC courses", so NWT students in the senior grades are moving onto BC\'s course names.',
            'For a family in Yellowknife comparing courses with a university in the south, the BC row of the table above is the one to start from, with the NWT\'s own graduation rules on top.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://curriculum.gov.bc.ca/curriculum/mathematics/12/calculus" rel="noopener" target="_blank">BC Calculus 12</a>; <a class="ag-inline-link" href="https://www.alberta.ca/diploma-exams-overview" rel="noopener" target="_blank">Alberta diploma exams</a>; <a class="ag-inline-link" href="https://curriculum.gov.sk.ca/CurriculumHome?id=159" rel="noopener" target="_blank">Saskatchewan Pre-Calculus 30</a>; <a class="ag-inline-link" href="https://www.edu.gov.mb.ca/k12/framework/english/math/math_gr12.html" rel="noopener" target="_blank">Manitoba Grade 12 math</a>; all read 22 October 2026.' }
      ]
    },
    {
      id: 'quebec', tint: 'deep', eyebrow: 'Quebec',
      h2: 'Quebec: three options at Secondary V, then CEGEP',
      lede: 'Quebec does not fit a Grade 12 column. Secondary school ends at Secondary V, and students who aim for university first complete a pre-university program at a CEGEP. The math choice that matters is made earlier, among three options in Secondary Cycle Two.',
      body: [
        { kind: 'two',
          leftH3: 'The three options',
          left: [
            'The Québec Education Program\'s math document for Secondary Cycle Two says: "They are the Cultural, Social and Technical option, the Technical and Scientific option and the Science option." Of the Science option it says students "are required to perform more complex algebraic operations".',
            'The same document adds that "All of these options allow students to enroll in a preuniversity program." That is the general rule for entering CEGEP.'
          ],
          rightH3: 'Where the option starts to matter',
          right: [
            'Individual CEGEP programs can add conditions. The ministry\'s Science program (200.B0) lists as special conditions for admission Secondary V Chemistry, Secondary V Physics and "Secondary V Mathematics: Technical and Scientific option or Science option".',
            'So both statements are true together: every option opens the door to some pre-university program, while science programs ask for one of two options in particular. Our <a class="ag-inline-link" href="/online-math-tutor-canada">online math tutor page for Canada</a> covers math help across the provinces more broadly.'
          ] },
        { kind: 'p', mt: true, html: 'A Quebec student earns a subject\'s credits only with a final result of 60 percent or more: Québec.ca says "To successfully complete a subject and earn its related credits, the student must obtain a final result of 60% or higher." We help with the learning behind that mark; the credit, as in every province, comes from the school system.' },
        { kind: 'source', html: 'Sources: Québec Education Program, <a class="ag-inline-link" href="https://cdn-contenu.quebec.ca/cdn-contenu/education/pfeq/secondaire/programmes/PFEQ-mathematique-deuxieme-cycle-secondaire-AN.pdf" rel="noopener" target="_blank">Mathematics, Secondary Cycle Two</a>; <a class="ag-inline-link" href="https://www.quebec.ca/en/education/cegeps-private-colleges/services/programmes/pre-university-programs" rel="noopener" target="_blank">Québec.ca pre-university programs</a> (Science 200.B0); <a class="ag-inline-link" href="https://www.quebec.ca/en/education/preschool-elementary-and-secondary-schools/programs-training-evaluation/ministerial-examinations-evaluation-learning/final-results" rel="noopener" target="_blank">final results in Secondary IV and V</a>; all read 22 October 2026.' }
      ]
    },
    {
      id: 'topics', tint: 'tint', eyebrow: 'Topic by topic',
      h2: 'Reading a course by its topics, not its code',
      lede: 'The quickest way to see how close two courses are is to compare what their official descriptions name. This map is ours, built only from the phrases quoted on this page; a blank cell means the description we read does not name the topic, not that the course skips it.',
      body: [
        { kind: 'table', caption: 'Topics named in the official course descriptions we read (our map, 22 October 2026)', head: ['Topic', 'Ontario MHF4U', 'Ontario MCV4U', 'BC Calculus 12'], rows: [
          ['Polynomial and rational functions', 'Named', 'Derivatives of them named', 'Parent functions from Pre-Calculus 12'],
          ['Logarithmic and exponential functions', 'Logarithmic named', 'Exponential derivatives named', 'Both listed among transcendental functions'],
          ['Trigonometric functions', 'Named', 'Sinusoidal derivatives named', 'Listed among transcendental functions, with inverse trigonometric functions'],
          ['Limits', '', '', 'Used to define differentiation and integration'],
          ['Derivatives', 'Rates of change broadened', 'Named', 'Named'],
          ['Integrals', '', '', 'Named, with the fundamental theorem'],
          ['Vectors, lines and planes', '', 'Named', '']
        ] },
        { kind: 'p', mt: true, html: 'Two patterns stand out. First, Ontario splits the material differently from BC: functions and the start of rates of change sit in MHF4U, and derivatives plus vectors in MCV4U, while BC places limits, derivatives and integrals together in Calculus 12. Second, integration appears in the BC Calculus 12 description and not in the MCV4U description we read. A student moving from BC to Ontario, or the other way, should expect some topics to arrive earlier or later than at the old school.' },
        { kind: 'two', mt: true,
          leftH3: 'What does not change across provinces',
          left: [
            'Every course in the table leans on the same base: fluent algebra, comfort with function notation, and the habit of checking an answer by a second route. A student short on any of the three struggles in every province.',
            'That is why our first class in Grade 12 math is mostly diagnosis. The course name tells us the syllabus; the student\'s algebra tells us where to start.'
          ],
          rightH3: 'What does change',
          right: [
            'Order, depth and the exam. Alberta\'s diploma exam is part of the Grade 12 mark; Quebec sets a ministerial math exam in Secondary IV; Ontario\'s Grade 12 marks come from the school.',
            'And the name on the transcript. A university reading an out-of-province transcript compares content, which is why it publishes its own table for each system.'
          ] }
      ]
    },
    {
      id: 'example', tint: 'deep', eyebrow: 'A worked example',
      h2: 'One problem every Grade 12 university-prep course can reach',
      lede: 'A problem that sits in the overlap of Advanced Functions, Pre-calculus 12 and Mathematics 30-1 (exponential and logarithmic equations), with a second part for students in a calculus course. The problem and solution are ours.',
      body: [
        { kind: 'p', html: '<b>The problem (ours).</b> A sourdough starter doubles in size every 6 hours, so its size after t hours is A(t) = A0 x 2^(t/6), where A0 is the starting size. (a) After how many hours is it ten times its starting size? (b) For a calculus course: how fast is it growing at that moment, in starting sizes per hour?' },
        { kind: 'ol', items: [
          '<b>Set up the equation.</b> Ten times the start means A(t) = 10 x A0, so 2^(t/6) = 10. The A0 cancels, which is why the answer does not depend on how big the starter was.',
          '<b>Take logarithms of both sides.</b> (t/6) x log 2 = log 10, so t = 6 x log 10 / log 2. Any base works, as long as it is the same on both sides.',
          '<b>Evaluate.</b> log 10 / log 2 is about 3.3219, so t is about 19.93 hours: a little under 20 hours.',
          '<b>Check the sense of it.</b> Three doublings (18 hours) give 8 times; four (24 hours) give 16 times. Ten times must fall between 18 and 24 hours, nearer 18. It does.',
          '<b>Part (b), the derivative.</b> A\'(t) = A0 x (ln 2 / 6) x 2^(t/6). At the moment the starter is ten times its size, 2^(t/6) = 10, so A\'(t) = 10 x ln 2 / 6, about 1.155 starting sizes per hour.'
        ] },
        { kind: 'code', label: 'Our numerical check in Python', lang: 'python', code: DBL },
        { kind: 'code', label: 'Output (run on 22 October 2026)', lang: 'text', code: DBL_OUT, note: 'The program confirms both answers: the size reaches exactly 10 at t = 19.93 hours, and a numerical derivative (the slope across a tiny interval on either side) agrees with the formula, 1.155. Step 4, the estimate between 18 and 24 hours, is the step students skip and the one that catches a wrong log rule.' },
        { kind: 'p', mt: true, html: 'Where it sits by course, from the descriptions on this page: part (a) is the logarithmic work MHF4U names, and the exponential equations Pre-calculus 12 and Mathematics 30-1 students meet; part (b) is the derivative of an exponential function that MCV4U names and that BC\'s Calculus 12 lists among transcendental functions. If you want to rehearse the algebra behind step 1, our guide to <a class="ag-inline-link" href="/blog/how-to-solve-simultaneous-equations">solving simultaneous equations</a> uses the same habit of checking a result by substitution.' }
      ]
    },
    {
      id: 'moving', tint: 'tint', eyebrow: 'Changing provinces',
      h2: 'Moving provinces, or applying out of province: five steps',
      lede: 'Our checklist for families, in order. None of it replaces the school guidance office, which makes the actual placement decision.',
      body: [
        { kind: 'ol', items: [
          '<b>Write down the exact course names and codes</b> from the current transcript, with the mark and the year. "Grade 12 math" is not enough for anyone to place a student.',
          '<b>Find the matching row in the new province</b> in the table above, then ask the receiving school how it places students arriving from your province. Placement is the school\'s decision.',
          '<b>Open each university program\'s own requirement page</b> and switch it to your school system. Toronto\'s page offers a "Change School System" option for exactly this.',
          '<b>Compare topics, not titles.</b> Use the topic map above: if the new course assumes something the old one had not reached, such as limits or vectors, plan for it before the term starts.',
          '<b>Check the exam rules.</b> Moving into Alberta adds a diploma exam worth 30 percent of the final mark; moving within Quebec into Secondary IV means a ministerial math exam. Know the date before the first week.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'If the student is a year ahead',
          left: [
            'A student who has finished Secondary V has completed secondary school in Quebec. Where that student continues, and at what level, is a conversation with the receiving school or college, not a chart.',
            'Our part is the same in every case: make sure the mathematics itself is solid, so the placement decision is the only open question.'
          ],
          rightH3: 'If the student is a year behind',
          right: [
            'A gap of one course, say Calculus 12 never taken before moving to a program that wants MCV4U, is usually closed in a term of steady work, not a summer of cramming.',
            'We plan that term with the student, starting from the topics the new course assumes and the date its first test falls.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where a student starts',
    h2: 'Four stages on the way to Grade 12 math',
    lede: 'Our placement stages, not any province\'s levels.',
    table: { caption: 'From algebra to calculus (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Algebra gaps', 'Loses marks on factoring, fractions or rearranging, whatever the topic'],
      ['2. Function fluency', 'Moves between equation, table and graph without help'],
      ['3. Modelling', 'Turns a word problem into a function and checks the answer makes sense'],
      ['4. Calculus ready', 'Reasons about rates of change and limits, not only formulas']
    ] },
    left: { h3: 'For parents', ps: [
      'Most Grade 12 struggles we see are stage 1 problems wearing a Grade 12 course name. Fixing them first is faster than reteaching the new topic five times.',
      'Ask for the last two unit tests when you book. They show the stage more honestly than a report card average.'
    ] },
    right: { h3: 'For students', ps: [
      'Estimate before you calculate. If you cannot say roughly what the answer should be, the calculation has nothing to be checked against.',
      'When an answer is wrong, find the first wrong line, not the last one. The first is where the learning is.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine math and coding courses for Canadian senior students',
    lede: 'All taught live online by a regular teacher, in a batch or one to one, wherever the student lives in Canada.',
    bands: [
      { num: 'I', h3: 'Before Grade 12', sub: 'Grades 9 to 11', courses: [
        { code: 'CHSM / BASE / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'The algebra every Grade 12 course assumes.' },
        { code: 'CHSM / BASE / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Functions explored by writing small programs.' },
        { code: 'CHSM / BASE / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'For MDM4U, Statistics 12 and similar courses.' }
      ] },
      { num: 'II', h3: 'Grade 12 and contests', sub: 'Ages 16 to 18', courses: [
        { code: 'CHSM / G12 / 01', slug: 'ap-precalculus-exam-prep-course', title: 'AP Precalculus', blurb: 'For schools in Canada that offer AP.' },
        { code: 'CHSM / G12 / 02', slug: 'ap-calculus-exam-prep', title: 'AP Calculus AB and BC', blurb: 'A calculus course with its own exam.' },
        { code: 'CHSM / G12 / 03', slug: 'waterloo-math-contests-gauss-to-euclid-course', title: 'Waterloo math contests', blurb: 'Contest problem solving up to the Euclid.' }
      ] },
      { num: 'III', h3: 'After school', sub: 'College and university', courses: [
        { code: 'CHSM / NXT / 01', slug: 'college-mathematics-complete-masterclass', title: 'College mathematics', blurb: 'Calculus and linear algebra at first-year level.' },
        { code: 'CHSM / NXT / 02', slug: 'data-analytics-mathematics-masterclass', title: 'Math for data science', blurb: 'Statistics and linear algebra behind machine learning.' },
        { code: 'CHSM / NXT / 03', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'For students headed to computer science programs.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Grade 12 math classes timed to a Canadian school year',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school, in your province\'s local time.' },
      { time: 'Weekends', l: 'Longer weekend morning sessions before unit tests.' },
      { time: '1-on-1', l: 'Planned around the school\'s own test calendar.' }
    ],
    cells: [
      { h3: 'Your province\'s course', p: 'Taught to the course your school runs.' },
      { h3: 'Diagnosis first', p: 'The algebra underneath is checked in week one.' },
      { h3: 'Estimate, then solve', p: 'Every answer is checked against a rough guess.' },
      { h3: 'Homework explained', p: 'Never done for the student.' },
      { h3: 'Exam rehearsal', p: 'Timed papers before diploma or ministerial exams.' },
      { h3: 'Batch or private', p: 'Fifteen to twenty students, or one to one.' }
    ]
  },

  projectsH2: 'Beyond the math: what our students build',
  projectsLede: 'Many of our math students also code. Some of their work is below, and the <a class="ag-inline-link" href="/student-labs">student labs</a> show the rest.',
  reviewsLede: 'Reviews from parents on Google, exactly as posted.',

  fees: {
    h2: 'Fees',
    lede: 'Our fee pays for teaching only: a monthly fee for eight live classes a month, with no contract for the school year, so a student can stop once the Grade 12 course is done. School fees and exam arrangements are separate, with the school.',
    free: ['A free first class', 'A short diagnostic on algebra and functions', 'No card needed'],
    group: ['Fifteen to twenty students', 'One regular teacher', 'Choose your batch', 'Billed each month'],
    one: ['A teacher to yourself', 'Paced to your school\'s test dates', 'Built from your own unit tests']
  },

  faq: {
    eyebrow: 'Questions from Canadian families',
    h2: 'Grade 12 math across Canada: common questions',
    items: [
      { q: 'What is the equivalent of MHF4U in other provinces?', a: 'There is no official one-to-one equivalent. The closest courses by name and level are Pre-calculus 12 in BC, Mathematics 30-1 in Alberta, Pre-Calculus 30 in Saskatchewan and Grade 12 Pre-Calculus Mathematics in Manitoba. Universities decide for themselves which course meets each of their requirements.' },
      { q: 'Is Pre-calculus 12 the same as Math 30-1?', a: 'They play a similar role in BC and Alberta, as the main university-preparation math course of the final year, but they are separate provincial courses. Alberta adds a diploma exam that counts for 30 percent of the final mark. Check each university program\'s requirement page for your province.' },
      { q: 'What is MCV4U?', a: 'MCV4U is Ontario\'s Grade 12 Calculus and Vectors course. Its description covers derivatives of polynomial, sinusoidal, exponential, rational and radical functions, and vectors with lines and planes in three dimensions. MHF4U must be taken before or at the same time.' },
      { q: 'Does BC have a calculus course in high school?', a: 'Yes. BC\'s curriculum lists Calculus 12, which defines differentiation and integration using limits and includes the fundamental theorem of calculus. It builds on functions from Pre-calculus 12.' },
      { q: 'What is the Grade 12 math in Quebec?', a: 'Quebec secondary school ends at Secondary V. Students take Secondary V math in one of three options: Cultural, Social and Technical; Technical and Scientific; or Science. CEGEP Science programs ask for Secondary V math in the Technical and Scientific option or the Science option.' },
      { q: 'Which math do universities need for computer science?', a: 'It varies by university and program. For Ontario applicants, the University of Waterloo lists Advanced Functions and Calculus and Vectors among six Grade 12 U or M courses, and the University of Toronto lists MCV4U, or MHF4U and MCV4U, depending on the campus. Applicants from other provinces should switch the university page to their own school system.' },
      { q: 'What about Alberta Math 31?', a: 'We could not read a primary Alberta page for Mathematics 31 on 22 October 2026, so we do not describe it here. The Alberta course we could verify for university-preparation math is Mathematics 30-1, with Mathematics 30-2 as the other diploma course.' },
      { q: 'Do your classes give high school math credit?', a: 'No. Our classes run beside the school course, and we do not grant credits in Ontario or anywhere else. Credits, marks and diploma exams stay with the school system.' },
      { q: 'When are classes for students across Canada?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We set the time in your own province\'s clock.' },
      { q: 'Can AI tools do Grade 12 math homework?', a: 'They can produce answers, and that is the problem: an answer without the reasoning does not survive a test or a diploma exam. We teach the reasoning. ChatGPT needs a parent\'s permission for anyone under 18.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More math and computer science help for Canadian students.',
    items: [
      { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada', p: 'Math help mapped to each province.' },
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'Every Canadian page we publish.' },
      { href: '/coding-classes-in-ontario', label: 'Ontario classes', p: 'For students on the MHF4U and MCV4U route.' },
      { href: '/coding-classes-in-british-columbia', label: 'British Columbia classes', p: 'For Pre-calculus 12 and Calculus 12 students.' },
      { href: '/coding-classes-in-alberta', label: 'Alberta classes', p: 'For Mathematics 30-1 students facing a diploma exam.' },
      { href: '/cemc-waterloo-contests-preparation', label: 'Waterloo math contests', p: 'Contest math beside the school course.' },
      { href: '/calculus-tutoring-online', label: 'Calculus tutoring', p: 'For students taking a calculus course.' },
      { href: '/precalculus-tutoring-online', label: 'Precalculus tutoring', p: 'Functions, logarithms and trigonometry.' },
      { href: '/blog/how-to-write-a-maths-proof', label: 'How to write a proof', p: 'The reasoning the Science option asks for.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Send the course name and the last unit test. The first class works through a short problem in that course, and the teacher tells you honestly which stage of our ladder the student is at and how many weeks the gap should take.',
    readFirst: 'To see a lesson before you book, read <a class="ag-inline-link" href="/how-we-teach">how a class runs</a>, or browse the <a class="ag-inline-link" href="/courses">complete catalogue</a> of syllabuses.',
    note: 'Our teachers work from India and teach over live video, so the class is the same in Halifax, Winnipeg or Kelowna. WhatsApp reaches us fastest.',
    formNote: 'No card is asked for. The first class is free.'
  },

  footer: {
    cols: [
      { h4: 'Math in Canada', links: [
        { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada' },
        { href: '/cemc-waterloo-contests-preparation', label: 'Waterloo math contests' },
        { href: '/calculus-tutoring-online', label: 'Calculus tutoring' },
        { href: '/precalculus-tutoring-online', label: 'Precalculus tutoring' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/coding-classes-in-ontario', label: 'Ontario' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Read the course, not the code'
  },

  personalityCss: `
.ag-root.ag-chsm .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-chsm .ag-capsule { border-left-width: 4px; border-radius: 2px; }
.ag-root.ag-chsm .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-chsm .ag-table td { line-height: 1.55; }
.ag-root.ag-chsm .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-chsm .ag-grid-3 { gap: 1.6rem; }
`,

  dossier: {
    curriculumAuthority: 'Ontario Ministry of Education senior math course descriptions (MCR3U, MHF4U, MCV4U, MDM4U), University of Waterloo and University of Toronto Computer Science admission pages, curriculum.gov.bc.ca Mathematics and Calculus 12, alberta.ca diploma exams overview, Saskatchewan curriculum site, Manitoba Grade 12 math page, Québec Education Program Secondary Cycle Two math, Québec.ca final results and the 200.B0 Science program document, and NWT ECE curriculum renewal, all read raw on 22 October 2026. Alberta Math 31 and the Atlantic provinces and Yukon and Nunavut not verified.',
    localProject: 'Our sourdough doubling problem: t = 6 x log 10 / log 2 = 19.93 hours, with a sense check between 18 and 24 hours, and the derivative 10 x ln 2 / 6 = 1.155 starting sizes per hour, both confirmed in Python on 22 October 2026. Plus our topic map built from the official descriptions and a five-step plan for moving provinces. Lesson family: reading a course by its content, not its code.',
    requiredMentions: ['Reading a course by its topics, not its code', 'Topics named in the official course descriptions we read', 'Moving provinces, or applying out of province: five steps', 'parent functions from Pre-Calculus 12', 'starting sizes per hour', 'Grade 12 Introduction to Calculus', 'Workplace and Apprenticeship Mathematics 30', 'minimum Grade 12 graduation requirements for students using BC courses', 'sourdough starter doubles', '19.93 hours'],
    sources: [
      { claim: 'Ontario senior math course titles, descriptions and prerequisites.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items?system.type=l2___course&elements.code%5Bin%5D=MCR3U,MHF4U,MCV4U,MDM4U,MPM2D,MTH1W,MCF3M,MAP4C,MEL4E&depth=0' },
      { claim: 'Waterloo Computer Science requirements for Ontario students.', url: 'https://uwaterloo.ca/future-students/programs/computer-science' },
      { claim: 'University of Toronto Computer Science requirements by campus; Change School System.', url: 'https://future.utoronto.ca/undergraduate-programs/computer-science/' },
      { claim: 'BC Mathematics course list; Calculus 12 big ideas and content.', url: 'https://curriculum.gov.bc.ca/curriculum/mathematics/12/calculus' },
      { claim: 'Alberta Mathematics 30-1 and 30-2 diploma exams; 70 and 30 percent split.', url: 'https://www.alberta.ca/diploma-exams-overview' },
      { claim: 'Saskatchewan senior math course list.', url: 'https://curriculum.gov.sk.ca/' },
      { claim: 'Manitoba Grade 12 math course list.', url: 'https://www.edu.gov.mb.ca/k12/framework/english/math/math_gr12.html' },
      { claim: 'Quebec Secondary Cycle Two options; all lead to pre-university.', url: 'https://cdn-contenu.quebec.ca/cdn-contenu/education/pfeq/secondaire/programmes/PFEQ-mathematique-deuxieme-cycle-secondaire-AN.pdf' },
      { claim: 'Science 200.B0 special conditions for admission.', url: 'https://www.quebec.ca/en/education/cegeps-private-colleges/services/programmes/pre-university-programs' }
    ],
    rejectedClaims: [
      'An official equivalence between MHF4U, Pre-calculus 12, Mathematics 30-1 and Pre-Calculus 30: none exists in the sources; stated as approximate.',
      'Alberta Mathematics 31 content or status: unverified; the page says so in a FAQ and prints nothing else.',
      'Atlantic, Yukon and Nunavut Grade 12 math course names: no primary page could be read; marked not verified.',
      'University admission averages and any promise of admission or marks: not printed.',
      'Any claim that we grant credits: refused; the page says we do not grant Ontario or any provincial credits.',
      'BC Pre-calculus 12 content: the BC host timed out on the second visit; only its name and the Calculus 12 reference are printed.',
      'Any affiliation with a ministry or university: none, and the page says so.'
    ]
  }
};
